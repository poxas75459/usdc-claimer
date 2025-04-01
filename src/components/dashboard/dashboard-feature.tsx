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
    "2dqzvyT7bwBdGZJDmckPLVop3vrgtEiL5MNrTNprnM37j6Fk4tL5zNpz2XoznsddbLAqTetTdE2MgNBdU28Bxeq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sef4TAbariCK8wVheEVK8HJyxJL8zsqsfB37s7qxXtCt6BvDFBSxpFFJdcfQYKaPE7mQSi6oCnY4WjrnC2QPaJc",
  "key1": "3VWhFUoEpUHbEGGy5MJ9mLcYKruMVzNgKHGu85vfizAnNSQyqsmtjDcYFJiXNKMYzWa2dbQ14V78Bb9QYKzVj2je",
  "key2": "UNsJHRQXiFBhYcPj9XMWeYw4dz4MBhJx39cBDi7omGLECitmdn7V4uAZaVTUJ1Pdf8F317oJ3eYjgFZJ9UnYRQP",
  "key3": "43rBox2wqVPabqroiTtteVsDuAZFoaNBfJwG7GFH1oXtyppK92yK9CJcUgtsDob1DETZrfmJKpsQB9NU1gUcPyK2",
  "key4": "3Xq3tK4sguAZxLUz4iG6H2FmveXVEE34BzjVAJwHRyLDkWDy7xvN5kEZwiDqLqiRWzssgkGyoGD6M7HD7sCWrfm2",
  "key5": "5zVEJHYAMtGsJDEBaqfEtgFpaHz9MTU5X1yomEpRBxU1fsDKgvtuAVs4XszzR7BctSYELjepoJEARFeNn2Pi4t6b",
  "key6": "25HscVkJnA24FGWz6wjbRPYv4oa1YyFKDKwJbdUzvsmRMhPWYpdfUgXuv32N9pXoPFofC8x8eBaccjcApZLcGkSX",
  "key7": "2VDAbPzvwrqQ2p4aHy5BaG9RvHJWEAxPwMtzyDkYFM6WRrjq3j9GhSgKDq3rc6fWp3hRR4WbjDnJpxhS8yibMsbr",
  "key8": "22bSzVVV5JZeYribuYp357T9gnmWB3f5t8rGmhpuhWtVcU1bZQSMGcEhUBs6NjdMFhrmUCA69KxHa7n7aCWGZ7qU",
  "key9": "frWjh6uWnewwQEnhmSPjxz6pNch9dFLWHbVjPFMM8oeMTXtfj13b4RVnnzM7GtVWGeEuUUZjha5YX1Zf8zakCQK",
  "key10": "3hLtrXhMrvtPSnJhg9xFV5bLPhTxmYdevmQk3QuqwphdSidYmW5VuNdLaxWyscTKzqpGWhLxF4HbHwzVjT1kEdy4",
  "key11": "2XMBBBAo1wfKpKhceSPraQPJfjKjWLKZZqtKBiM6zoVYJqiBGXKjg8s7xcLa8MGtefJ646Je7mFnDcyAszdm2Sph",
  "key12": "5k2sfatijsiR7JxA6JUhuisc63Frn9eVXRTbxXeccSZmR62VzJ4ny4nsaipwAv2DWbmMPTbWzkAiJ3G4fvTyTsSR",
  "key13": "5zb16H5X6EKxEAGjTd728GwoKUXdpYHrFrH9WN9CmDRzjLPqPp6gcwQNNti8jgDRJYXxZMgmuPHprzAM2x8VJ2Kn",
  "key14": "7EUdYsUYCiWFqYh4tWLeDGWQ7wEuKaZNxKS8sYEKQmcU1RJUJtV2sBfWfybfhLa985t1xjHY6UUh8WEkxQHXKpV",
  "key15": "63obh3KKSMjuH7hUbqL5Lt8bvzu2aanUwn44d9fsraW2NquxjEgS9qGKZ9JVBZkGxiZASX9unsws4GR5CFgycshe",
  "key16": "xcsGYDxem4xthGiUgHQPxmNP6fWWZLNw1uMHaL3jBMQi94Wm6SzFM5ajLfiQA2NrA8mnjQBB9duun3LJLcoyLQ8",
  "key17": "TNDn4babnntJLxFckoDLYrbCNAs3CTGkVrysQVSaHgL5Kp3EfJYyn3DgCbZS6GaAfTamJCo5XrfzhQ9DQS7vmmh",
  "key18": "5XqQdAnTzQJ8HATfLpCFR3YwNsSiL7P4cstbygJjbCHXYfumqbGp1EwgQkG9c7FXD82DBkUS6Yg469rPgSbj89Qt",
  "key19": "HG8UNfiWM9xHKP7X5U1vCW1ke8t3ayAE8fEkeomHMdvAEYmubgMcQnK7HYsW7t5hvLpLrS346noUiPGVpuNC8Z5",
  "key20": "4sqT7vpLvdBUsZLUGFaUybrwzuC8rTqN2zHatD2aFonHRDgUSjgC7QbNnFXeqnLG58PDQpWvz9oRzPf8NAdPTDCk",
  "key21": "3hsS1Y6u3AkhtnfCqUefjk2RJcb7Rm6765TuGMZN62vygtfGT1yBSApz3GeJzLLxMpx4kmVrzFfAJZ1ckCe2qzy",
  "key22": "2tTVt5U5miHPTnvnw14JqB8YrSqV1kYRaEx3GsXMUimnqNv1zfb8QqGBTjVvAQWs64nQSVBMZ3An6HKNstSVtjFM",
  "key23": "4Dnf2pYkWgyAuggArbEwGU5ugLGAdMJCKpE7TvCLaw2NbSYJtRRkXCWgMPM5NHLC6yNGtQNWxJpi7cvq2oC4wyPN",
  "key24": "5JYQr9aGcqTDDs4U5Y5YQ7ad6UuhqBQEwWZbezG6z8qRyBWB51rATG1wW8aPpd1N9n3jJt3p5pU9srvYFKqMoQ9b",
  "key25": "hihuopu3jRZDtVNpfygNLTQMVj1P3btTrx6fD8K5mxR1V2gS32nYekxn6ygjQQL22uxKz4zQrmd2Yt26rmHpBsk",
  "key26": "3Xsmte8gPH9Z3jeCR3cioZP16RCTFWfQHxhMmcus3JvxQVoLcnSzVerfdPccx9bJRXRbMr58AXALGBJR73NtY8ko",
  "key27": "fkpy8grM9b9nsjUh7toftehcfJeDrLBRJddnhi6Ptys5khEzGEE7Udxc5KgUBtTh8ZbJBrEhrrJy6dWY4UpZ3qG",
  "key28": "353Zt9U34Q5kSE9hgLnYhKKp9zJykbrV1w1JZ9RnXVqrequFzZsgLDgw65orZ89oMnffhGfpJ136qYn1zx8rfF4w",
  "key29": "2k6dpLb4wictuAEarCcvDpTVYZWg94LxvqVXr3T4kMArhBc6gYgcikTg2PCv6qFPr36nmtFsJVNYYVsQr4akgd8F",
  "key30": "3X8tHhXBcHdREosGfux2KSfVjbBDzziWrLVVnCjTQ8VYPymXse17EZYCzZh1qsjQDH15CUZ7xfKvDrhYWFJgTYKZ",
  "key31": "4ibkfUHGMsYSXj1Zox8DGHwc3wmMbzwsnEX8bnPJ22MUdr4gdr3UCvafyKHAoBD4vRMjBBhPhhPhg5AK8YMNGFxu",
  "key32": "4UYwKkBXz5ErQuaupvQiXhgcm8Rtj1jF9XcZgNgkrn82qvyPsUW9v9g6JUfszpRzeinzmYvuhRtcGhUse4kHBN1U",
  "key33": "Dw9PBYcS24XM1bwdgM5zRm5jWL9ERq4J7AHW9H9DwNLSqeszySCRdkJCQ8FsGWzXLhrLfRsc7hh99xNRU8hfKwS",
  "key34": "4t8q9hkVUHMZKfTKcbgQZfv5L6VUbG6gZPfWs7cfgcxH9yhcR44N3fZ4hK7KYVPQy3QJ5FPS4DLrhGw7e6PgtnHd",
  "key35": "5w24DwLw9NvCXg6NcFxv1caPEWVzdvdKZrviQRT5TcLnLbKkSpjzPCyTXpdETWjMVJB6ZxaGbYvS6DfGMxDmPj9m",
  "key36": "4cnNWdmjcbSYvKgHxkh12mRYNxwig2gZnyf9Fge7UJp1bqcz8eJX2Q33hjzNYsZsTv5g9AmAyTngYK97ikwzKPkP",
  "key37": "2bEU9PQ8fWxZv3W8pCK7N1trXFgWXFfSBD8dnm6xemc2SS5X5hQsy1GQQ2xud9Xn51bNocE5Ao66SYENYfxUK1TW",
  "key38": "3sFdv3NTr4Uwg5mMHgmUh9fAqWEYDut2CJDeuabPmSq2QH3iK7beHzBpGDw5DsP8b6r9Ceknhd9BQp3uatzeiaw7",
  "key39": "4WbNptZbKLKXt8H9oWNzMcPZcXnMBa5E2iMdtCffxtgeqjUwsVpBdV7d1vdKvMY3Rpacrxm5356su56QiDYq12dX",
  "key40": "ny8QsKhkrfQK6YuuweWg97JTcREEkEZpcZRtAfBZXdztD1BaDsHTdim6EhULUQRPhY1gyuQFSdybjJuawWosUz9",
  "key41": "VL3rSyb2BSwcVPc9M2X22zrq8Y8Gp2Cf6cqMRrzNzrjDCvton2zybRRpsze7VhHjuZ5XKggXqpYVFn9z6w38z8A",
  "key42": "4cQ2KdZztYBfjkkGCsLc6s4VRiPqf6We9sncm8udK15trW6F3TiA711b3aywGJ7qWeWhsjNWhLsqbc7t3gzJMwEq",
  "key43": "3pH83wLoixoWzLchc24yeu5YMa3FNXMnHrSciuy8YhgX42h7C5tsHFsw9YAFKmQu9eS6SAnvTDM2oqi7NqpcvAPQ",
  "key44": "4Lyx3HD5cDpLBjURPGQkxfKY86KYT9VwVkt7BhH4a93ydoiX9fwmGHDG4omAx4cfQCQrnjRXSkoNRcbW9WqCCmxG",
  "key45": "51cJ3VfqA259V7aNDUkpQKEBQv3oZBFHMe2jf7jcTYdkzEdNPuYwXn5P8Qd1aRYZBav2qHRkMAL4B84LqLebZ1HT",
  "key46": "3oV7rykAEUVJvFVjYY3JF2BNn1ZHjCVLPZwyRT3VaCjba2WmbQDeRP8FXKvwangW7S5m94XrqX9yA3gsKQPfuafq",
  "key47": "5mJoMkyCAgZGkYnfM6ygPLpSWrJLdm1UccnnTVBG1uGE4zD5Xk6eKjupRZgpthMEXV2Mn9GKCvYCPe7urUmbC5nb"
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
