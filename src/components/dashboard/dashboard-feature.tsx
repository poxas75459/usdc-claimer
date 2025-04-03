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
    "2mzXfnqMFqTPtc9bZ4KEvzkjzLr7AQkEjyLsUW4TaYsdzeTmHvDieXfY5iMDBngqTcwgJS89NyvnpcPPW6LHm1Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnQgZnA9e3yTmnY3WWcVTe3VNsGqEeta7vT9d5Z3BbJcFY7d53vgHNvWCmb67bCp9uw3fctZxkAGxEGzCY8kQii",
  "key1": "58hVJCP9TPBKn8ck9gAj4YRDMZMQwTybksiGCCVSzFssiaNL3LfQeoBbFgpt7sMXG2xuDYbKq4qKh54AcfymrcNP",
  "key2": "4GjdYpjpJepSgQngPgEK8Zuuk8HUS4oznBJXq7c6ZD47sKphTcCTrNdYDcnZY9Jhwa4mSnWbT6uycwCN5LhSgwAT",
  "key3": "3opcVKTcdn9EA9bDqJ3D6SStD6YLArzCtFobBXhxhuwrZJA4Q17Z35i4dSqfdobgSstfMursFPoT4tMSHDryMmLW",
  "key4": "5xibBeRV696UNQzM9FmPtkRsftza5gQ9m2jGNrXdoDC6XNWnqygvtEj2gueMLXPBLvyKaMfG7mrD97u9VZteSk4H",
  "key5": "kETowmXWj19PYb9vGypD4dmYa2ivpckDzRZrGX1amXbtqq2a1ssk7TXUqpMxVahPpDBKhVDiwbBQRwGZAjFsoYy",
  "key6": "5hyp5RBVutC4UBoFdodFs9V74YcmeXWHZc5JxgXdwraK8md7LNuBUFiTPpMV6Zjhr1BhYxVLhzMbrqhiRi44LR8d",
  "key7": "49d2wPxiEMjtvPMBugwxS5vy3PqxQh5zgS8apegx3VgmGG5aAFrQHPjynrUfks8SzbjCcBDjP7TkA7BK3nwBgFvR",
  "key8": "5Ncorj5UNqPWEkzCkqbh6JEX2j3is8KBKQxHBkWg3APVkHEDQcCm6YR3iq5fRzJWRt46RZxcUAxkuvtTmVL2wv2b",
  "key9": "5Y8UQqLwLzBRCvhsaXpoJyEs2Ks9Vx1XukrMzsT2geeTCRAMAoQ2ivHMKyfDZSSKdn5Wj7KESCDRyLE48XrMUsjb",
  "key10": "3YMGHhDfEFQYwBoUijNHzkb2yyzTzYAD2pgjegKo6vQkouNUTcy2CCdyWyAkH5GhCLyDbf2YPYqoHRve7ZeLKpJB",
  "key11": "2CZQ5qWCuRH7UZWVqPY2dqZdsy9314Jw1K9X3aojRWAbH1S9LenCUN74MnhLCwCNDSAtrYxwBpZXkMjNDZCeBMis",
  "key12": "395phaT24gti5zpvbKpSxweDL3a67Gzhx63RrPXwnV3fjiyfhsFssBbMgwJCJ3QLru26oQnxxZ8iiiMCvxrkLQsn",
  "key13": "4Z4dgvQbiqjzbyCNChzbaPGGHHtoJwjDwYj7eHtGdb3ZWudQpTkZNCw1fEjqxcCZhyZb3Hn9jFHCoECMC63QfdcB",
  "key14": "3gK6DGg6UnEPhoEPeoNXWB6M3kfVWxm5MjXJDjAAvWQMKDT5kW75CsndF4aq1ZL6RzW7ADGTs2B9pp5WMZLmY56R",
  "key15": "5i1cVkuDWrA3dfcYvvuqcUe34QHEJSYgBjeFwy12bfkkkSsEkuXJoqnSbMR6VWEh8fFyRykhLd2ktfjjXYBo8bDw",
  "key16": "5cNNKuCjsovatxNATLP1GtvUHTKZhqkMG2MqZ5FpSvNFz2cLwbJtzF16oh5tPQDgjvbFeRAnkzwky2EZranNg1wE",
  "key17": "3SDGny68FQq4dw8gCGAfJfyM2HgZsiqE66rBGZCFxsMuRJCQJD49otr6C1ycPehcX6NctZQDjrKAAzU6BZUfFjnt",
  "key18": "3pS77nwHXVFVAbN6wevKFF6pwTKso5Sk8NrzBbALLfdzNz74B7sUTtwavHEnuu2YqsSy8221kcV5rpZksh6eq6bV",
  "key19": "KCaCVfdbeKYthXy44NwEMJRS9DYvMa73PaZMNmg4GnRqia5ZwGE1YTUrLit3gMHnDb8U4SjedX8NtvCCP6GMD8h",
  "key20": "2ALrXFmZC51YRhhMKWJmj2Pd7BKbCfkKU1JZ1v4FUwj8gC1XK51at8CSsjTKAkHDMB2NJ2MMiK5MzAxZJLhZLdsm",
  "key21": "5A2ccqwzxKJVxbPHcwVahbnT7KLVSUeerjG8B7CmLzP3ZPESv11vVvTq1AztqzwQULc9iUoHx2zdXCat3zEXe8aw",
  "key22": "5JpSwENhuf6EG1rf9emmKdczmsS63pQ35QKMP8iRGgRdwZRkeUT5RraqnzQRwATSZxtpikQWaouuRu16cPXPdCjv",
  "key23": "5xyyFPcWMGNnDCAZFpoCzypwzxbwKQdWG3yyznjuyE4wrLF9Rp6c35iG9VjS4zPK2dZVUjvfcp7cYA96PUgJzDQ9",
  "key24": "5pFj7du52tUn59q8ouQFzZ59nYGVFLreLuQSZ6QaP9ZrLDAHub5xmjFXJwCXFKZRVCLdDRG7mcRkqfwVpoFyFJJN",
  "key25": "56YJfZhCr3T1cBKjJn1qYxBEuTazuc75RbEJfVMXLLWnQWYb7L8m6kv7nWqocKBHcXfjHA3jcAXT7pYtdFvjQYgV",
  "key26": "2gTSti3vXtjdGvKorEgQ4AaXxPqxyqESzeoCmeGvimnPSdyARNj2ETu4i6fAG5ZwBdBgA7zDVPw36XCNg1enMwhU",
  "key27": "4cJjWpRU478g2N1Ah9QvSQCuLS1ye1m6vQBiG5RXLgcRADcJRKggFfyCG89KCu1mmfLZ1CAjaP2RoGGj6Kbx7cuC",
  "key28": "2VH5z1sL7c5CdBeXP5HXhWoaZHDy8YNEeyQMxyE8rUhZVwYbADGTSJRoc6p5pLZkvYGnUcg72jBPp5ZUQrcB3QE5",
  "key29": "4Tfiawasyj5JN7cRWFNYgeiFYuUwc7vH3EXYzefhR4JYxpt3TCMAq61oJ73YKxxUGPzwcpWexctP9ENuYSXFvEiE",
  "key30": "JTDLrFS8VBBC5Jk8BnJbCcssEspPDeLqrYnxK825w2rTCVRoSvBgPXCCEcmqr7PKtxnsXiLB8ApuRkdJEDwdBUT",
  "key31": "473NfNFaTKAikBwqxhQ6PoKtY5AjZta2ZNEftXJKKgXF6zDH1jwDgBBb6DDUyGcnbyUnY1M8vfA86pvVnvnivg7W",
  "key32": "3DqGsSsYV44SZ7faSubxCXxeS1bv4T1Gagyvt3tvSrvSbbkKKYG7vqL4neFHh7ScGBYRNAwrHF4Y4U7xxhZfPRLc",
  "key33": "4MsRpWQZf6qk7qL5jBpypsEpa2RT1xk9uUjZYyTbhjZAyFTfbHZggZqLFY75FgW9Y2rYCMVP2HspgiUUzwYQdWnp",
  "key34": "4qBAPrvg7mHph8oB7YGMDZfUFKRUttmfpTh3jxb1nMAXuxvSSqMvuhAXZKzU9JGrSbEjgmKUMunimWGHDR7bJc3R",
  "key35": "c2Ps3FJ1LCN9EoeRGLDNpzuzvjhBAL64gqQKPJ7TCP5uTQjaWsb39XHjYrZpoqMWcZxMsdeYXzCYv7pyPwTy2n1",
  "key36": "2A2UccLNrSr8wVeAJ9wW7fBtV2ohwnDxosXby4TsiAz9APKHczMomQJ9mgS1KY2bzRxEzNaB3gF8VeBqYjZYTxeC",
  "key37": "4pRGnBt64wMKF1ZkSVGa6gXY5E7ZdVNh5R6AX8xmU7ytw6HZdqYtwNd2wRULeboc64tj2wUuKsptLi5NcKULyDhK",
  "key38": "326yM2YniTG3mhw753BuXAP2k1tcfajKMwBEVLpg1KdEwcSLCZYsSqPbWexeLi43CwMtBANR5baZZ6nFJ3MD18E5",
  "key39": "7fb3fVAzSdE7fA8jM4bJ2ogkcJBVYA8513eLf6XWEoeJVqaUKhrFvNmSg2QEGe1n9RH9ZqLjYg3aeGLUdj22YEs",
  "key40": "5ci9z31UWFhLH9AzFU3Kdd4ZU8M1Gpqgs2iAwjLyitibNJC2RcK44xNUN7nepVbsbcNDrqnktKeoeLM4MfoNoCgL",
  "key41": "4HJojNkR1QLJg15CmmVhbgzeVdMU7d8v3UhrN3ARA9tpzXQybUM4v21k5Hz7t1j8Z3THijhebKrSh5iLyoM8DbEA",
  "key42": "2Tx4Vs47haXqFRM22g86bGKx6Yrj6teAz8r14AmYNz7VcwRxhCThJU8ab1zfM3857vh7MSRUiV2pjyP2mRPebBta",
  "key43": "2syhRrWvUcqbv8iusB1KcVAxuNVmGoVsaJ1FRiEvja3pX8N1h5cJj1fUDhxk6SKu9YYr7YpjyK76aMcchsUjtQiZ",
  "key44": "5wYpCPbbAD4XB6VUFAYKULgzhRV3a5FnNBbNjq8DHd62DW7CJU5sRSru9Da9zZXiokfytLMS2ZkVZPcyJn4H5HqZ",
  "key45": "41cshDP3R7xLT9VtHNB5jetrGMq2hTcMKgkHnS566ZKEAN1F6Dr15mBoRYkdSzSLkEwXZqJBPTdxGbn1JaCw5SGZ"
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
