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
    "2x5fQ8wHcndriuyHwnwKcQ394X3PGRpscKVjyFn8SsXALUMtcrkhmpofteBEAqscCw9XSg5VkWV1AqBnoqHZU46n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6vKx2HaJcVVfK1D8B9zfAtNxrYYKX7vmsKgR58qmz4VDw6NzqaR8PEVuwzxWMguNdBP746yMT4aTK63ygymX9x",
  "key1": "2w9xckEafJvGu18fRdg5Mctr45pCpkm3YWZNfExcNwT2b2D9izcLyc9xD4con6kN4hSCxzCGc2oGhvZjfr7Udcbc",
  "key2": "54TxeWoeXzeavAhZrRQ1jCH4XKFcYGawQ5c8KtVX6pE8hr3iid5KEAWQBZ5kYcvWN1tHWDTM2MUh4ZdHcopjUQ1a",
  "key3": "3fu24ALV5RjMN4bx9voTo9ak9PicVEbuoEoSYAEs3FeMDVsfm6RGH18kYtuJzHydvWDE2tijQvyWuibi4PmWKnJj",
  "key4": "2zLxaQPmcJP6zpt7wkTj4swLrYfCzTrxH7VxP7Nesd8DnvAnzn5FihG9HP7FNS2dkEnAmjkMRDa6TpVFqN6BDCgn",
  "key5": "3KJyp2ZYiQ6hRJFpLK9oDG6PZjsB1PTxtePe6xtFjhAcixPwLf8FARuBwkfawWKkDgqEDACZRbGn6yPac2mfV9Ts",
  "key6": "2swv5cLgG37Rvv1jQE2amLRPTtVP5gNZPFAjHTh7RCe19kynprHV4tpJHNo5xdpT3FQQ2MimX8iLqXWYTszvTwtq",
  "key7": "4TuEy2Z1Q3XnRADMvB3VqGECVLasnafiuEwYewp4NLQ8Mdz6La1hMkgzPwxb3rT13pMfqjWPdHek1yMZYge8fXzW",
  "key8": "2LDC82JZyrDnvsXkf11RWCTgQ6exsLJmcZXoUWPSgyGSrcN8hveJUedXW213QunVaLPXrL9xbhu4NoaYzjrMA7N6",
  "key9": "2JoeJdGdDDrCt8fMbnd1PoMnkzaE7FKSmhsKP2w3wNkxejLvsSPJDqDkJypCBTPf6A6CoEVzGY6XzWqBNptTA8jE",
  "key10": "2pvqAcap83NU7JrhWfN6FPQXq32mQuvsNo817jYVjD5eWZjbq3M8bSjarWFN7ABGE5pxKPA1mPKjZXT1tvc6PM1D",
  "key11": "BckfRi8zkVp2tm8fErfMz3gfRWRi5CKKpgR12LnKekRYSUGRX1CPgp7CBKNaB5PeCvRnvWyjx1CQAsGeHCh6iPK",
  "key12": "329DCaRT4vmRkE7ENvamudb4ysvsjSr9BbQyMDNwkV97guAFUFS2bebKNPoqabddrhYgS87T1sNKYz1nqnmvFbeJ",
  "key13": "HRUxMbCgfDZWihQfAHbx7d7NjdHqCapdZ6B8kBJ51hUoaQfb7stKF12WA24XnzJ1xauZHdBx5ps4HCBs5TMWWyZ",
  "key14": "3fnxMczTPnMt6e4zgrDmVK26Jc3SPH4kQUNpWijVEEjSDKjTFBFEYoqAu7zHopHFyv7t687y3FzLF8XxStFJxqVL",
  "key15": "4Unf3TJggbkBBkUhHEDTGtfEd1TqV1cfi2EcXWxD49HJtPp5ZLtDdc1xd4hPM7bbZraZfg2CgutVNzuRejQYeJrf",
  "key16": "bBUvdH1BYYbPrP2i9YezfyrTXKFNSbhajQi75xthVJzaGkbKNPyPhsY9s9XZG2MT619ccpgqNvm3xC4rPtnCuLt",
  "key17": "55zpcFVN5XUeukSLj46KLdoCLoNJwjaLVwTcHHRDDBMPb59QKEv8mzGJxpxarpJMujSoWMpA7GWNJgMCzf4FF7cE",
  "key18": "4MQCyYzTG4hoKbBeZaGfZZjndwLdj1KVYUoENiLBDceoy1rYwXPrAivsAwNPn4panzuUtqkdye1XgAuDpBNJt9Fc",
  "key19": "AeL3LsAgALLB6HpFsSVeJ5VZDyWURo51J7h8zctJkDZBKSSUy2sckZLLd5Dv9uGTwJMwY1MW3knm7EeCfeai1Bd",
  "key20": "3r8iXYx5FBWcgV4PJmkGKiuZjnbWZ4Ck8FMHBpUrEBr6xAWSkN12htHmDUpoL5PPotVkAFHM66sXXp8kJNHPnFGF",
  "key21": "3RsFwMzZ7hwzUBBBnXjGsketvXq34tDAw5wzKKXJBfthHNwXC5zRPaGvn852ZJoBWqYSvW8bJd481xgLGzx6cLSQ",
  "key22": "5TDQMKPmYgiGceQaRnBDWPkAMuhRpNxyZUYGagtqJy7r68yFsNbyYBgemtbUqKnUeAysFq2EWifSt2VAGGPAbqbe",
  "key23": "4SB5dnzakjqHWsnbbgDHCHAA96oUM7VTjbvmFgGMR5PDvBq3aaq7V9a5iuRjWn5g5bw6EoTKA9zhVgNb1oc4de4U",
  "key24": "ezhFgKVvopCTSyFJmtrafdQWcCQtpRuq9qZs7jyLoNYgrvFQu5AakZr9xbXyVxBMyyURgUBhvhHSR5XedjgUfw4",
  "key25": "3TTWVrs3Ni5UkjMUDr6vhDGL6svYLWZCVqdE8LCVf3ZdV4pisuhxM6NxqTjark6rA8MHNSNkPhBG3R1EvpbYZEtb",
  "key26": "21YLvBCYrsZWxUZNPFyLjXPCYb77ZLWXJx3W4yHyDSUkMbPqDNtKjvYv7kugRLcVZHDkUbNL5hPs3LzSyXzo92Cq",
  "key27": "5Hrw1VbiZ9diwNif1mS5nbDTMwYkCgzuYG2CXtKE7NuRcfwfA1t8bfq5VhrMBkZxhQkP1xx5zsoWRsJeknEqaFHa",
  "key28": "2pGoMvhHgfjQgXfyEpRYASA1CRkwY9jWkYpxnqGMfM2pCRSGAYsxHLLKDceApZukLDcfnagiX8YKtw3um4zqqiJq",
  "key29": "4gHAExB4n3fo6GcESh6PVt5eL1YXazo3XnPJH5ebQYXEjatG5wGoUNAnJ9G1sZHPxGx8GeU9roBLqUw4Zamw4VNc",
  "key30": "4BV1xqWBhQTDsekfNDogiPbpRotisJ1cjNCC7Zw2bVzY3sSgVUmEAUBt4M1ff93NvkVv4MnfwCJSfrqQP4xihGyw",
  "key31": "4tPRDQNZ87Poe8UWsRyLqoggumuqzHrq3prTjytknavnKsTyTJ7TLjDryatA8kNLad9WmemWnYfuFm3JPY6G3w3A",
  "key32": "4sqJVc4L1o648dZcp4tTLmLEiwEq7Cg4PR1PiDuNRLo6iVLPR2H9osDUmcQ3CeL5wQQXM2A7xAXbskouimVUCU6M",
  "key33": "2rhPjYjnwiz75PasSCsXgLSTzRKiw8MauHCqk12e6eQaWVfyRPpx8RM6EM5dUgMimJPVxvbeBoMwuoJRmKurs8rZ",
  "key34": "44ddubX7aYcHaxD9FyvHrp1qX3knvWU4oiA7p1hH82rTdjRds7ee4Wt4YfZovSf8fZt8cSrHEq3vo9FETDwHJLjQ",
  "key35": "3KDwSNPvcY7JbZb6A7YjWSsqc4HZNE7SHq6yiXVPp41crQh3tVUPgZgj3NykibQQvSXEAqsUuSM37r1HnDsCJ94g",
  "key36": "2FnEsQuGqTXfuVxobwLfwP3W3EzHsw5dFfyTpbjgQiymyhidk5bhqK4dJUDxYZVSLhuu9M3S6G5ryB1iHnZ4NbJD",
  "key37": "4au3WCdC4c9LwF364WW3Wfo17hxrD2PVHL3Xe23D61xrbTEfcpXY5FPxssLvJ9FPeMn3X7maWW8AeWCQrQUoS8K9",
  "key38": "63GuisRXeJVk9FK8E8EQg2tPVZz7qvwsCA9ZPQdY6iweExWYxPLwyE1y2WVBgJRwmKddwzxEinD53TFcPzheitPh",
  "key39": "X6stAvDw9inDBGzVc4aRKuPGFkNdF2P9Txoxk3aPKnUYjUD9k66qtm6eHCM5xUnB1viozUEHsc21cFAkimhjWr6",
  "key40": "3N4dur74StwbzKxTrP1cPzvW1tmfabhFT7yiYAcnYy24FM7aRw9sN8gp7cToegF5RV4f7xDj8JJ8mMX3ueMUDgHn",
  "key41": "62DcT8gXtreX5ELvVFoGHvYiVsjmtyNsWXWhadYEmaVtEviyFEHFvPCKansQoEBrwfBD2TKEoBMjyeP5RTHsvf7i",
  "key42": "4QKSnbv711TMf3prgXjawXJsweZiZ1NHyjV3399TDqEuAoZNiVmREsj71phiMVEbaNvkJohvSX7rh5Y3SF8XQZ6u",
  "key43": "22HpFTmSykAZAmvmci8xsEG7VRVrLHKwtjDngEn1yKgNBzdtt5GGdRD5yhHDZCdC91GbMj944uDApqFqnn4CkDRw"
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
