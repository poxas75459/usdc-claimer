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
    "4GdAAbkpE9mBzMkPk5dRqzAFTqZu7j5mDKCcxh8pd5NwKgWTHdq5FY8eXcXiY2ZERGCy2nYHGKCJS2gH4Y8KJfRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHX9CjQPoaJkGzztadNxQNPv7FGm9FvaEux4Z21nwBDisdGhpUt9muZqBpC5P2N79exY2RPsBJvmbiBTVWY7imy",
  "key1": "59NHbGDNY4akWSMSJ6tPaiQp6QFfgpQnaA2L4KL44GHtzfBv8E7xs26XzD8hFqiecAnLK7qP3BrahZhaH7EE77xd",
  "key2": "4oKPRv9ahA5ZdETgUgeAuF2dLA9FDaN13PqSZBszty2fEsdhgGvXvKht2aco8pBBbYfNndgn7wPdiZw7zDmC6KsP",
  "key3": "3F9DggvPdJthrjUba6eEqrCsctyW61xviDcFS77bV3Cyqv8s6GvqYCjwUicukSFghiALdq82Sc7UCZioTq31ZjRE",
  "key4": "2a6mN1vXyQqxGggWKiGE8DjX8vDvYCMgREx1hsmwFDBuFpZeQCu5WCj1p5izNysR8cxAWe4aYU6tgjMKTUbp5Yyg",
  "key5": "2kggeU5DSj1ZUpz6VYaBqqNTLS8u9kfQjTiwA9LPC9RZKFd9W5WW1VeoMdkmWEZ3F4YAR2TLQwwdhf3QkTbspEXB",
  "key6": "4V15hRYQeDjqKKve4iB14TNFHHvTR1ySmWhjko2UCwvSxYYBJue1WX1LTeeNGFJgjoUfzPXWtc2w1vmTgLQkVjBN",
  "key7": "CNy7zn6aKVHpmr7RQVrUZbp6yVPvGnxHE3NBsMahgwZUDEDTn76RoKnpXe1BZynWFtMtsyih9rx3Ey1U8WwgMwf",
  "key8": "4za18UXcHRpTCgANeSWQjomX64zZy9ZbdMBGXMk1SYTkGeuHLUyWRvVvX82L5GnzXQ1gQpw4mNo835nVYKZLHkSN",
  "key9": "3xLgKjgDvBtcZ34ccnSE9uxjaMCEEMut4VpyjxS9Y3u4J28nvNdukt8Xki8Sat3BUJ2moQAcDjvfszTtabQ6rYup",
  "key10": "3PdVQTyVKWFZhN11PRwQ2M7JU1BAzXxJof7or2sCSWSFkdLJdpDubTtZH5nUjuUrXQpqdHFtfLKbnyAwMmCpjgc6",
  "key11": "5nEp1CwJtY2ivnYQq1Q3AyBQzWBgFHHK65Xh96PwJ9iaKMSgqySi1MET9m8jzoW5DarKqQcdcArovyTPfmA2Mttd",
  "key12": "249gqHc223ddfCmGEBVdJ41317GYnUDATCHqnit19GHbLSCEbwETvCMcaGa7vbZAtNLbou8nQZCK3iw7VdbsqW7G",
  "key13": "2crx9Gfyfw4Zg3QGsDBWdxGh1UWmPQ1W3L923MZtUUq3yPuaGhHeRG33wzM47Go1mESZDvhj6nDDbTYeuvDjppXV",
  "key14": "4iWYArGDY9dPEMk7yJFuaveHKVsyp4inBrBCKxjjuNtZGeeff2eR8vmwmeodmbveWCVJTKBNQZJ2r6R8pMWYsVw5",
  "key15": "5uGRaUVzbgCU4eWC83vAXzJfLnF74877fm39yaLUJGRLqqULxxX4CtmjftxMS4ASXGiGBR4JLinNz1HZD5RYgoua",
  "key16": "2a57ZJXWDS1DP3p224A273Pofbt9tKzZ73NjgNVGGXbxa1F1iFWVbJAAjYdprhRruJRdfknykeNg7tZfEmF3t7Pp",
  "key17": "Exg2TWMrhbdcveSiyPabafd6p4BDb7ZheTCY2mnCqpD2TTnGt1oSKExjsYAYVbY5pvEgWraJyPZkgZBHuyPrr8D",
  "key18": "2PCs4XjbiVY7VyLUue6HmE4Zj6HGLdHg4LzhXPCVC2Uxn6ZYsDX9eHSiSnV4bENonywyjkgAWN2RZVzxShPiGVwf",
  "key19": "5KkrPYXDiB1ve7iiTATaqY3CPcNRZmXKmmJzDCLcH6jGCLg4rRH1E1ozd23tFRAJEtzmPcACwMWpHeyucLiPhw93",
  "key20": "58Jh6H5yoYqkaCnrRnRhkvKWha7ZwbdpTitYUPGbaUgB7LksUR8pq76Z9XnocfEnsd6EW6hpqyjSCcb695oD1wpC",
  "key21": "2ktrPNfY53a9Xa7HFFDymnxkRPy6MvarMU7kym9nqNpzDzsqxGVvMaKEmoiNUr7q6a1RmQ7u8BWbVJvLNynLNoqs",
  "key22": "5U61rkP6sUUbiDZ3oSxCuptJCoiYJeZGQQTPxfhy81SMcyRgU5dkNzRgxtAPdJrctUuGWUdm1kFe6KGx6HR5PMVj",
  "key23": "fhFgiU8C8UMLM4TH1rnqVHMVLtHFxJmZ1gLY31ZWe71XZ6S8UrNhH515BEUJLPqJ5cAK4tHwnWuT27dWdQo5rW3",
  "key24": "3m3H8C1EgfuChtmepSwDTqQQTvgRgrisDTA2mfeQ81n5eNGTKfwKqGisxCV23Y5dy8fVWTxpCt6MCAyjDawKksym",
  "key25": "5EnLJksNctKFDSzLTjVsDRoWcn2Ne1c1sGe79sEGYrsq38JBnNi6T8jMe2LF96uR6RTRdDCKkr3f6FKZNca7FoLP",
  "key26": "2iaJ5Arh8fQBTHGQeUJfMieDJBPg4DG7iPsrnxDNPH8U9BGPmWYbK7YFgkEGJHkxgi4zVVdxfzXXurRXNqNrMEJQ",
  "key27": "59qTvjCqCiSBQmfBVzzKLbSFLH6nsnxVJ4haSShjNcH3VztnVdVZQnAg6q8xf58GBbj8c1pc2hebTK3hEEK3kBdK",
  "key28": "3sYHNs4ViC9UyRr9hzb5STD2qGXKfz4ZKVA4EQqAihJmajc3QwajANM2ZcZ4KmkHDUnoKX3p9zMp1GYwQoCPjnBk",
  "key29": "2FRZm3KK49gBX2Lg5yXk3sJezU9E4zU2a1Nj8tTQ9u3HoNGZt64H2fzF8SXGELxW5q5tmTrhKkzUgmKpPE3UGfai",
  "key30": "5tiwGXdzrWkytVYwyDXH8dJyrA27GrrLkP3gLr7MCDHqDganMdykC3uC53SUHwcuDCnQFz79B12Y357jGcZujF27",
  "key31": "5ekQKfN9uYvnLjPTMqsCWbuPGR47A7dEyKB8HKZKBgbbZdMRMa1iwMW1cAuLxaqWgQtzLNq7f9XfB4GFymKPWzhE",
  "key32": "37rkJujWBono1ya3dRmpoLsCN4hYRpUdgGHSjrN1NTH2jXXNvcjdvydx51PkRs1h8rvSRxutMh9ms7C8hVgnXGbY"
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
