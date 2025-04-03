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
    "59Gp4mKhkF74TA2WTXKridHC89JdNNks6SwHvvpKXctnGbChCtLhRNtq8NFFGDvQCiutwLtVSfTLzMJadgzHMQze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T94yzAPknbe6gBpWXMtxXSTY6TNBtFXUMAwDGUKNRnUEbTuwjZVUdPrH7nNtU5L7Y2FjSQncJgaiEJhAAPsp2ky",
  "key1": "4mwAK9368rvaHkg7EicD8iQF28CB2buRBLYQSAGQ515G1biUdf2hUyRvWmqggwvj4RRzZDQmRh777Hk6GFYpyQne",
  "key2": "2zuhqG7niU7aYK1WGt5d366W4cQHMRVSb1XGPPB4nzmBfPFrhT3vyPHQkFj7owo5yeMLb4mrac4kEHYjz5THhJtF",
  "key3": "wdxpM1yugWb7SyhGd7qfdabQkkaR8mLBoP2R2uoTfohpRDJf43DhYbnrexf1zwBuZqjMagGY1GKU576HD8RsLoM",
  "key4": "3W94uaoWGxEoyvTfEPzLiTuYtXHfsnoqwvFpo9k7PdMZbLbCmgmemBL7TrGjYBhotsgiafawBiTgJX58hGrjKrse",
  "key5": "4mCvzuxNyNAGmy6gpia98fYRY59MZ3ehTvrLMNFTCiHerf9krvh6rYyxz7MBb3NmZA5hq3eafdSM3Y4hXWYW5c5z",
  "key6": "4YWYvnWJaur7WidocmF534g3Eh7ttQhySkepoCi2NHXRkdvq36gtLBCSLaEg1VtdxaNA3PWUjZXJKcHfpmiSuDY3",
  "key7": "41y94U6A1LQmRM1CzckbH5mqo97HHKLfyABYxjddyaciNLiHdsYLZ6vymr8RsHpcaPZvJP7JVtMSqyRmtbwSrYwX",
  "key8": "2eJm8QP4bDVcdErna9snkKAe71TBg6mfQE6GuBrvocU9zrA3yCsCJhj8nQU3krqYZAr1HLgd8fRCsNBJHmZP4w8g",
  "key9": "ZLjknYusCEM9ULLJc6q3L2s2jPskfYkC3GUU5dK14gdfBwGBkqyfx8YfrVFG7wqv6XhSHxY3XefNXrWzDrHfZuj",
  "key10": "2L9VZQr6dnxSpceAwYS92zyA4DNgfsYxfis4XjPtz68X2rYdxjb6s6SooSqXJ8Q2txCffnqYDjCypRWJBcXV2E9T",
  "key11": "2gbqpTNLgCwqfWufKgYCNkdE2aC1sK4Lz8U8bRMvSZQGmZzgxLPDbzzhXNReUTyuupTXJQCUZeEdywR69PgVKigW",
  "key12": "4HdPk655WpkQs7QVATib8wSWo5YYY67YPUbfavRwvn4soJPUQXGxATVqog8XNe6m7RP5yPKPxo1tpz19R88wbWEw",
  "key13": "2RNSBFvQy5iD6uxKaK7N54g7CBsxcQ7nvGkckqEHTd7ZRhFzGYtaMvKN6iCrNgAfYaNLJXCHi99yMR5Y2hU7fJDX",
  "key14": "55McmBVcZuB8YMUR7jsmNfztKfoAPSBXDv2UeU5UXBs7NxE4ZETo8NTFs36ti8Nu1XpejbR1LeaHXdzfVKpWk9vo",
  "key15": "4rSq4Rsb54KwyfTmadMzxzsiWjhCqkkDmiYxKBaVJL2THvQrnEqahsB39Gr74wBKYeiPi6opWPUZtQrfa7kYpMaX",
  "key16": "57xcqso145Y1xJ8SkuFgiW9aNp7iykugizLGbhhyxWxvYqdaYzXbC9XZjvSRTKkMS7JG8qE1E5232SFu1hgmpYeg",
  "key17": "499pb7FAzLhZW4iNgjPSCKvEAHa4YdSq2Jn8QrrambWvrd5otepoeYFa8p8fJD5QNqWqZsMToW23ktDPAnk2wdSM",
  "key18": "31RoJnp7qbJRQMnw99tReQv411DrQXygLSrwejBfVbvAKBJgN7vbtCEHw7tsCYurLRunqhRp26gyPRQ3YtTduEpQ",
  "key19": "NbwMydoEBCSNff6fBCXCnu2xbtxpALNSNgWbcrMV5yov9RN3fLJzWzhcL8dA68oaPuCZ3nVEk91RhsSZHfwYhf3",
  "key20": "oSWq7Pvu2bgwTJfaNBbLdGy7jQSKwEdus3yw8CGKhCqDDGvT6mVLWZEhndgnYyt7WVzrHyRwFCsaPGt62v7u8R3",
  "key21": "2WyCcnmMBFwUqtwb5RDMhqmtqCbtyenu7ssurNh7zb9tFjAJiXAMcPXtj7U6mKg1oeR1Y5YZVANw1Vy1ty7cZxJ4",
  "key22": "5LtJtjvnHKKMoEJm6FHdkZHhumDdXTTAtnjL7wnCpoNeTS8qzXbD6wxuwdcyuxhJt5KdSGk8TBY1aycv5f4pA5kr",
  "key23": "xkzBENvxehF6nqXgpJtJwnjYJEhMEnE3NqkP174NqqWj8thTfvALZYHMhZXFuN58pfk7W1Aoetxfp3kaUWK4Ge2",
  "key24": "2azDkad88Zp8gmQpJq1gfJXfywFoHNNcboXHUp9VyeGMJt8v95aFgSNQtUruXpfdvMVshDCjR5ikcUvWbQyVATkM",
  "key25": "4wq6VDwmY8AwztBqEJW1cgzTzYDrWW1U3yJtxDThmVo1Z3n7in3a7EBJngVgpN6uvsrLbCU7C4cAjvCJ8d4yWKvE",
  "key26": "3B2LR8dQhGAdmYKEf71T9H1fVs1vCD3iFbHZ9yd3wgwSnJJuCcUWWeZ2qPWWSMFUpBLmc1tmqeL8NPCMHJeqxs5e",
  "key27": "5AMgtEp7MGrG5ieQXqJhJtDmqPKqGDzCqpSLWUGZ2TxgQVkMuC1dXmDYFttgdR4yXw8UzjFmejA9BKfxBzn3sN1C",
  "key28": "GG8L6uXsKGN8zrDvUztDff77aXoYTTK1fsqZNW3LTuT8dfVjipqTwbJT78e4ZdEbBY7kUuUDhp8AoQ8R9HDZ9cV",
  "key29": "5KYeoc3Rq7g9hCvTWesFjGPqEtdWJA8ibKWpkqppRSP5TR7tCQcgMXxCeAz9d2oSq9aQzYjNxKaZjphdrnyP9fFB",
  "key30": "5YMUnFn1yqLx62uGfZ8G7X6BmrCezooPvWJ4qjLhbzjFcNRe9dJ3o6Zk8Jfob18fpwWV68E86o3iSswgDdpEixgx",
  "key31": "5Qg2bT38mSk9T25LpoH5MuANmqFprCgPV9abSb8NjQRm4kJJLdkwL7kfhkajdscAL5US59Xs37VN1QURyF6sEXLP",
  "key32": "83crtp8EV7yaMp2GFPaAKDHNQvezytS5zke2h11xFveia1kbXwZr6YH9yKmZy3NB3Wu8y6jzRuDh475V7Vz5zFM",
  "key33": "2RRxtHFYx1XpQ7cRf7fkAtZthQoka8Prt1HEqPJa6yXEMEjtvQJspnaNhy5VNadwpL2GHbqhdkrUX5erf5oG5UXw",
  "key34": "3CUEbadZHCNapuZoUHvX8Tcp8Wo9hzh68gvE3TH6YYSRbSWjtusa5RZ5Dh4P77vTCEYddjavxFveee4Ho39NKGBw",
  "key35": "4RydfnA9ozMzq3H1Qgwff1BessUy38tcGY2qukDZovYUcWYcTTfH2g7H1CgUt6LoUnp65m7KMv2ygYJhLMK1hKqA",
  "key36": "5LT5T7afChoK9ymDSjCVdproaGggDJh9KDhigZyZSvXEeAVYusKFa7cJET1kb6UWwqLHRSL6CtFzWtb4SEFvyNnb",
  "key37": "45EtmBw3Nf4hhHbBYgjw1kYWw77Wg6fNr6TF7tFzR2btxaZk9Xn8cb5rfQsFdqNEmV6TPdwP1TqJuMBtv1pJtgnu",
  "key38": "U6dZbT3kPgknMA61DtnQWvn7ktFh68M8CvzPDnMJDm34n4NgMkmhHBbqy2o6SUR9H2s27RVBacgMW9j1SVNGV2f",
  "key39": "ErBow6BP3ZsSdzYTmWByFBuqyMXRVeTr9tRYYpmdHpRkLKsSnnTEW283r3sMLLgV2VnUX6BKzfVLUfsVY9GGfKJ",
  "key40": "3wERuURAzZzChxkwpt8tVYjUv4RYfX6vZXsrZLXCwXZ42Pba78X3bS4SPthJ4SX9PqveDe5U8zZBFjXXgc8z8PWE",
  "key41": "WwVATtfU92HfZc4mbPez3VciHYkWHrafpu4TVK5fFkjpK89xM5jAkQFiRqKQScHukFmud2k2B53TgM2UwJKAnje",
  "key42": "29L2fPG5CfR1VvcKVveg95Dd95kCFWpLbXSGDaPTaQvACutKncheApFGHJh7wj1YtopF8EaVdk3b77wRzfNmL9p5",
  "key43": "2CbhNqCnY9CKr23qyEf6uSzp6hiEen4VP54FDb2mKCtKKY4zZyVaU6MBWBjaatDs8wwDob2dLhDvi26HfY961FAd"
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
