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
    "CM6FSZb8KkKYkxCXncqaPsP4hAhBHB2ropW57zoNRnw2mTKLQUZqXUv5GoAsrEjvQrnfYekKBLSPT5gd1Jq3vFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P8kX9xGQhQWqR9NVuNU4hjVgB1ytKuNHHtgXkVVXJhvftqN9Y2zxrbHLFWBgG6fTXshrBpTEuwYUm21y9MXF91j",
  "key1": "2sqMaBN61wKfry2CHhNqG46kgUKTuW4op2zKi3fErNUFycfBkMmYSPHCzkYyPGrk1Pwzq5aFttSW6JjVTmPK6i7m",
  "key2": "2rTJQ2q3rCCTpoxMDYaSr21VMedzaLbDQ9SnGWcEUDhxioKJQA4ERjLkqTNK4pYbt9poqt5SoNvt7WnzkgAUuw8t",
  "key3": "3z57dBQvqw3VU1NmQw873zCdsbMnFkAmsd3xy4ec1EHykLWMMno1o7RVmoJAW9KYwVRioQUU2PQcXJPgo1X4kWVy",
  "key4": "3zdvJjZybyDCkdxX7hqiK9BpAXU8jLuSY8vzd1UaLM2YXthxoNsLjG5Cy5xLqfWjHjYyKPcjdDZ4LoGjdH193FTs",
  "key5": "3Nj9fcwjS1GNPffa3DYH8TpY6odzo2CZST2TWUawWhoEiBLhh6iPcDeS6CMCJUp2PmWuMBTRZjqKQNAjjsKWgtNN",
  "key6": "2BsVcm2AKKuJHy5dJbEMrKUMygLDeC3uvQ5EvAoxzMypj6yxGuBfTkA2MAW1pucTvLgbjdcAGihQiKdVRU3RJ7gZ",
  "key7": "3o39QoQ4qmcuZDT8KyUAni49NfTV5CJFoPZsW2vFBAN7YgFEuQaCww8hTVNiwkNdBhFc5PKEHvhAvnbgP3ZTzNem",
  "key8": "xBpg8jQx2mW5H22bfzNjs8NtLRCA1icTKu7U2s8qhw7xxgsCAwVb3pXpyR244PQALsLbR71ARh7pnAEHiBXWU4X",
  "key9": "3Z4oDoy3s5oZUS8g3ai9aHJDnY4DmLxhbmvcux8THFaWnCC5nfGmMUBp6hTJJu2Vzgbf4A8eMGvygyNvhYA3PN1h",
  "key10": "3NBTnQUjj646EJVpVgprYoYTndbUXmtPF2BhY8oJpkhd1iN93QdvyCVZN9oJ6EcowqikGK3HhAwJY52L4fyreBje",
  "key11": "22jPdHTc8FcRKRMU93GGkjZeNH9YkbYvwpDaSKqChsBYdxp8rL7EGFLauKCUs8r4HGoUra8ZSoS9XffT7JPWkPfu",
  "key12": "2z8xbgxQsULqaFK5aSTrxBy8JEwPGpk6qAAK9Chd5JyatPAszKrVuZQb8G6ZJgdxFd39Lma5sZ86EYHciVVbKLEd",
  "key13": "3bNYWWAA6RuZftxaAtcbK5ALwL2tLBdtkYonxxPZ9hg523SFcNLakhShm48Z43E3jXpCEfFhsg6fMVG4zJ3Zzjvc",
  "key14": "5hp7QViW1AeoxPMF4dxUuV4sQrVdokGrm9uJHfQabJoD57trBEv4TbfxngXAJSjioqMViWJsELpo329t7CNVMhiU",
  "key15": "2nY6dT1HsTAf81Pb8Te9YLa8vnE2EEw5sNpRf8gge3WdVcbrHE2Ljqm5QiZuyjkPPzBk96nroANToV78F8Vza6yw",
  "key16": "5qWqpCwRR4iFJjnq1ShosDB1nJf8jxLVqWLvrd4rcEKKXfHhkhUAmQytuSrwm9qQsvMVLaxran7VuxeaWwbbSgME",
  "key17": "4hsmdAZxjwpZAJWHDkqekHEXHuyHpBC2wnEgRhcLX7ANF2bZsXP3oCkr2aWW8EnWuiYCXTVBPCveJsnuy73e1y7s",
  "key18": "5xab9vjviVdbBAxTCQbTp77MnzsS5W7xGG1mdUtnHQazJVSL3bsEpFkseRj4M7qc5LLboTb9rBXY5CeehM3ePRBC",
  "key19": "5kQsCwzHMYu2Dkt6SoPBYVkQGZYc5PpQUto34Rg1HAb5bLVScbCFvTQWEre8YEWEC4EkpnSdEYuzmSShN6LKYeEi",
  "key20": "4Q31ssHMTUbcJyqEgCcLaWm2a4Nvn5qoLxBjRz7ZC43EgYwqWMWVmb7FLHKzo6Ga6bYnhC8xn2eQhrHB91ugpzxU",
  "key21": "5KqA5wo14v4L5FvoZqgpTJ8b4vA56drt55mQt1kv8gQLJG5mQrtCt1e1vqwbDPkh7FqkR8vSQtKUGJpfPcRbqTVG",
  "key22": "3BrQKbF2QGReoxpgFfenocKGqxoJ9C65u6mCXEYwAX8Z7GvKmQiKWR65Eapr1cqVrARAYshgdSGf6ZJqYExHMdKG",
  "key23": "2VDyTYZffZ6fP7awEufMxKaUepNsnakMZGaKRHnoqzeq7DEtAyizFcLo1XtHa4piYr19BsnrP2mfb5SftGmTgvmm",
  "key24": "3V1CGevSsTzdytyPxEdjmWNCCesnrb4dR6vMcFTKJbe5yWGjb6mSVfMbnSNrQxsMXDMCYnNVDKbjESkPc5UJ7zVE",
  "key25": "2hKB7gJkSUyov6TxsbdLXqULrY8DLX9wwSvxhqe9FkC59hZPMhj2BHKsp8kkiMgEL8jMXDziaQzsL9YP4WfJ2ebC",
  "key26": "hAQa4LbEsvQTTsuiJ6wwtdMDdbeE7oNR4KCX4dbMXZva6YqTxvn7X4RYrnXPjgbCHKzZ6WjkVPYyzsNXS7dtpi5",
  "key27": "3bZeSw2Pg2Xj1CgDz6jqZLmqpGa7BXQbojP5rPnEGH6Zz2R8Uern2BRFDwjJyEKhr1pADoXu3sbGqJNf4rB4BvFQ",
  "key28": "4cXQsFmYTePi8FMGd5AzjVy8Wv9dVEY5GWCsVKXUE7zQJkKkmDJs26TQ2SgowuPTreFukQ6pwoJXfCUvWwUS4PNP",
  "key29": "2ugu6GoyyZFvzyoyqz9FhLTvySGuQARz4cMVedhet232u5uCv7TZyBVTHCfY3vJe1Xwg1GbJQVeV8y6TEUVpD2M5",
  "key30": "5sjb6BG4GYXn663xkPdBg4c3njLvv9GMmZQGPd9nw8yYbvggivaCSY4jLZ2bNoUXXfrMpgagNfveMMMcCGN47d3W",
  "key31": "5fQPWJtrFQwyWjbe9A8rRPEF4ANKoWVVHbgVmjVxQ7B9XRr7NzjPTnoyimFQDNpbAPKEmQs7Yfnyi6nBzAiXenyg",
  "key32": "yXo849EHeTb3dbww4NzcrfeHVXjQmMfJdZ9G3ZzCYLUJQkFbaRX8PGbLxjJhHWSywrUbrgx7UzHqTMUn7FBmz3H",
  "key33": "5wCAYj3nV6nwi7pqEk4kBJ9Vu9ynQ1DTYsbfzqwNueqjbsxpWZnYKysN25pj1kg6CnQS4axWth1WdWgoJehtYqsn",
  "key34": "3izoTLZWC2yRpKJkXmc1LJcu6nF4eabmLerNbUEaoX6NL9H7Pt3DafD4R1FnFe9C5YAN8qu8AXoA11qYGJ39MeGn"
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
