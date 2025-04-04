/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3FTVmtEL8Y2KzabNcqtSGnDSsuFimD4qNsi9JisDgGYfZpkmeNF13CZ6beb6LaUC7B7oiDGfoa6ZMDHC8DPqYUga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBiiJ3BnUuV28qPP4qaww4MFg9JxcZipaxHxCvmddPr1Pr1nHEjkfNqHFPaUz7qTo2fPE6EDHr5BNgZrUUQxYDK",
  "key1": "612a7NmrMuhvEUCEVPxt5MxH7AaxNLLhV5U5Yg2V9La8Er9zHq7TQb4xhKA9mV41wa7rPZe9M2EFaWzGNzCQxFnT",
  "key2": "3NtQyXpGbMLF14Tx36Xfk29YyAQVjiWEChjVoDKL2XsjTGbKem92L3vekHcDMafXnVeiEs6Mkz9epzzRECQL2pBH",
  "key3": "3BsuwrrJeJ7aVAezQHXhkM14X6JvHinTYe61Ev2VJ7iabGT1s8YRj5FnSybGGKV9UHr6apVVR37feGvSdbd69zG6",
  "key4": "5J4nxECyqkvLStRvN3pHYdKhhgze4P7sdxbokX2N64msPzuDjPggTXvpmbdragfb4nsNV2J9eGYZNEffGe93tiwY",
  "key5": "2LGtDvLJTYhgjT1z2Gbn31hYieBxZLMicZhVjwBe8kCaEGbBBviFowtGVKXYX2ktzKT1jLBrJXZsEhgk7EpzA4rY",
  "key6": "3471WSNq5s7m9UynHDzNHEtLbTfpM3oUy6knWLYTk4GA6khGGLZ4L7zdzNi7NG4hCNJKdEFcnTzzEdQudd4pTeWs",
  "key7": "5hif2HoKcHm9wr4eLQDyFcDUgZAYGHiHz9UXBRvUd22xd3tuNVtAhYNvBTzXHbWHuStVBaCLdj5xVThXYk4DcXs7",
  "key8": "42JdntPm3MnHBi36uiRtfAvqz2vaHU7bPWrGmN6ha2z2C42jQtT85syhk7nzkyRrssks5M65LQB9jSUDdxiFbtbL",
  "key9": "3npkSTtRdD9LkJndLKVVBaMqAza7w3A9TSvbaC74FKzB3rhMZLvceqsxG62BERMNfQcXddhu4oqVigKrBUmZvfWA",
  "key10": "5PT8GwdHjUrkC5L5WkcDp2jdBJY46ffXXCLG1X8CNBX9gtRzPbpeMxd5KHv1YrDcPuWnPsFhvsrdi2ubEeborrch",
  "key11": "4CdfC29xfnS4yH1rLyTkjMF3yL8p9uT18uVTYDjeALXa4j5E2TE1dS36rEJSsFAeRvjzMyuobsU67Jj63JAnMWvK",
  "key12": "42th1o3qQfkkjMtS4k3Rtywuj1qQnB4ytb2QyvCUk9cvwvhYELHxG7SMmPRrTi4W7EiYDWWtXMeFUq849PoKVhka",
  "key13": "3YPJAjizCAK3JmHitvL8CFttUR22FAQYJYpJVZVTj3qAr9TANATV5zQ38qiMB7gTC47JXJrKownpTGMPLF4ZZ4CD",
  "key14": "5nHp4JqkU4AFcaL1WwEWj9ow4jQcGYczGWCBnvMRjbaGyd2BvSetwBb1ZrGGSyeCw8hX836jFzpTPbBESNNz66yL",
  "key15": "VNA9ELhVBwz6vhoEsoUy2NKimoVxdoVRqSXJ7URCACwxNTLSBBMpKxr33Bs5ygTF8kNUGhDA1kcqRywUobGdS5a",
  "key16": "2NAKKuHLdMBV849fz7qCN4iX5zdd2Qeu26D8nz1HFW8uMqrU6RSgThZcbjEpfMFgJwzth3kqWf6Bj7xvtnkVpNxF",
  "key17": "4ZSeFEVB8TkbW22UKe1rM2UtEVawJsbz4gprwKyBA24XLqgQNtyhnM3LfcDxZQW3RXJKd5EUoXUiGPn6W7UmEBsy",
  "key18": "4gMPT2zEGyP15eu9txnh4LkGMihYUVWPpj9n7kg9ivCF2r1xz94Z3ufqinraf6xR1NKjzfbkNLbTMm4b4NG9REKH",
  "key19": "4NMT3anbj1Mh5v33zrAKRahMXbSbjuSXN2XERKqjX8fCcsYFmoLEx7NYT3FA4Jks7KiQtYVhiw335UcGDwFpehWU",
  "key20": "3esgHFAghM4ZY7iYGgCesCBa1YN38aAhNsmoKf3hvvfr7KH8nuxFgFkDZpqARe2heEvyZ8rng1t3kFUYo1By2dzy",
  "key21": "38CkzBn8ZVNX4TjLLskUnQjNPdgztYJuKye1zacvQ14HYwrYjD4x64MFeRGueYzuEniYsRmNEBSNouRkEEgBAP5g",
  "key22": "xhkcrT3wQLAWaVwF42d6MQYG81AFPNyJwFznYvGbG6cr5Qj97vyViPoNTixo1PJZzxM5fw7hXywuG8VbdVnd7ws",
  "key23": "31KSrA955j36jokVm5C2x4zADHw11kR7KjiqhTUY1q2qu7KvgPkMHn7sgt3wVQMhmW56JuQA3PPNDaPqgENBYZRX",
  "key24": "vvgRdrgkiS3TnkhfH6V7br9FscQRvETTXJTf4J9pbuXLWStGF2QYACkof5FGqw6dzzGNg4bFqKuYXsu8oZWZBEe",
  "key25": "fzWnSrp1B1zbwWmViqrdWAtBQjfb7aTjXDurdWrfqDwgyKDtt4axo5CUBctRXGq5gnBL1a6vHqDbx4eHut8C5Qe",
  "key26": "3NG6GYHLX2F8ysBWiHQ4VhJADG7ZxjY9oPUWe8kBAe4Q54kDtF19QPVrbMDKisT4kcnvamoNe4MgJ2cxXjDz9XYM",
  "key27": "3bQ7crsBBgXdtMHn2G3TuVRF4nV11bBvEjZdLPfPAHrv2M6jGuvyfva79vuSvrxRyRWNE3tuRz5J75g8DkwBQWAA",
  "key28": "q2PZksP535ePg4Wpk9TVfVGrCdT8QhacAiLQzc7nZvvMzfgzwgj61ziFjtmv5dqb919pbhzTe9RtPSQAKdK8xfJ",
  "key29": "469a5JTntok4MWLwRptew9gEpSKtKyqv541Te2WcRLqn6Q33QnAagHiAQYVFuywvdG4hPZ42osy1ki3YCjRCw9qH",
  "key30": "5h7XsWj7fHHUK2R7F4zAAm7zUeMURrP5Zez3dYrUEyepPeVRf1CWoqvRwa3FE1uadGJSoPdUu321Gsvnu3gxsWou",
  "key31": "bGvrkSUgn1ZjBFkwNFwJbUKe8eccTSZUpxC5SVjs4S1odb93tpTLzRRwGci8GH1pauoTE8TsiLepQYYH7u3qJXN",
  "key32": "5ZZAt2uQn1xY6i4Hun4nL9JsWY8eVkaMqhCBa1BCnkythEVMweDKE6puqsYExN2ZKuGGJ4iWjsKHr7RLbn7ZnQGS",
  "key33": "3TcRNJoWD5s8CYyFEoUhFDqDzj6bzfQx1sTDob7hM7tMB5wxnGu8grTmeHchHmKyFQ2mQfSJ3ryHYzaEASidun1m",
  "key34": "2zno3b8z26c9m6FVnmPbCmNvvn21ikkPGZg4q2dTQvad4dXbVvJ7NpNzkD3upa41KLFPqqrBvj9PZj7Pi1Rp9bZp",
  "key35": "3QHXP84fQ38qTNAzHVdWJKR7qe51Gho8rrr7re3ZQ6Can4KdcnF8x5GjeKZrm1ThqB4h2ks3oDgv4DVRST3dJjBD",
  "key36": "3SBvA7xuRrjsJjtCRaRKPrpqG45HovkwsdrUiw95GPdrPLJMad1XR5LVrwHEjJa1HsB11ssoEYNvYVZUV2LYqcWU",
  "key37": "2yfvYKtLB18HuCkBwbGuTRXPBdXfvwkCq8brhakX8zDoWJoptcqRmYu8ME4WQ8QSbJE6bEL4wfGRLznTJafgBiHH",
  "key38": "5qacy7D4FKRDngofSxK3pV7yPFZDMMULGcCm96G3dMJ1VszABMP2yGwtQwQMYbAyuT8BKbN5rQpzP7MbFpZE9JGn",
  "key39": "3DpcAvuorZQBWRQBgGmKVxKjRHFsC5fLbWUVhcZ2r178RjvDuEA5pgCwi83QWFKzkNTYyPZJGBv2Z4oV97JZ7GHA",
  "key40": "2jCjkewWpENTXHn2prVPdKc2YRM6xrU85x2tP6Yu5mHUfAVj7ufJbfQ2pQ1LpLM1McD6MKs4moCScRZhQQNYKdjG",
  "key41": "3Teyxg9QnKiqBKqxG39QFDCgFS2CJcDy3MxjrdhkCQSdvThv9KHncyZKUH2UBQQV2E4D4HsmMKUUsXKcZizVyHoH",
  "key42": "2qVEGhDoT3VDw1GAyXoN8yJdvxgCCWN4D12xWdyvHMgHFXjLftyTVHFDLEzqZUDQ8MfTrN4LbPzCNspL2rSixVpS",
  "key43": "zeoAiG3RCDwjTSAvuwecqPiNfQjbrAifNKv2dJQ5aKRfuoqiFjwDxtrpcC9KgdqAJyLASufCxKYW565qtvpgdRz",
  "key44": "2LGSosmampJmHRC5VcpMzVjVpgerPe35yLt3qEpcTVCzJaXVvaMXg3pqdm9xsbDqN8PPhx1uDNSgLjf48x5XX9Wu",
  "key45": "5K2SGPfvvud8HHL7bBDV6RCG62skKqsgufP5fQ2hdnk6H8WUsCs79VrG7fDtSEbwfGtC6SjXKrZAxbbLvy29vTsV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
