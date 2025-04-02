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
    "4ivM7NGf52sZ6Kkd5buojRedtCSfFKUKgLMu3ZfRnHfqmsVZ46s3Fksy1EKZRFDZ5z7oATtXgqXJdLQBfbky7fk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qH8WweG9TxpC4pxHCxPyLxUhjZ9LcY4vXaFQk7eYf9XP8LAB6omtS4AQTiJDH6QpXqvxmfa9CRw8GZmFTGRQby3",
  "key1": "2nU59wGijZHvnZ1dzLzakCojxDGFxheh9L99RMrSHDssLx4tZmaMADpQ2TpCCDbadWnQNdxqVeWJ5xunMSUzwroo",
  "key2": "2upED41JNzYjeRfLpqes3mzf9s5B5X4EWsQY8e8NW5DTTVEBB2jP5Em3BuuVx9UmmVcuRAyHzzHPL8HbP9bku3dG",
  "key3": "2b2grmJ7t36fBovFE6GViTHw2rno3NwBBy7mJwP4WBGLkYyinpGpVPinwL3pYq3gFpVJrzryxcMMCb4rKa97g8wG",
  "key4": "49WeTGVxVzStQDS5aT9J8j2xhLGEyehT2avmALoJwt2YN3QiJM9Hbf2eSwY2iRc4UEhK14YzvzoTSCHPthEjuwt4",
  "key5": "4hViWmgFz7jew63c5934hp5GHdkfKZ6Kg3XhpPn33zno3Aq11qk3kXkvggdaRinxnKemc6yBNyKN3uiwHz11GKYC",
  "key6": "5hrWqzuzbSwe6dtn2hBBHZRwLKKtMcMS82dQktSKtFwNbyJPQfUEW4TwV5T9Qw4uy4ShohsAtXk1nKSziTbmHhYW",
  "key7": "41L9GJaiUN4FZTY2ucHFCtBnexHxaFL9iACT9umzsB777w9TqBw88ByzprMJaMDUrGGgXNQde2Suj8V4nW5Parf3",
  "key8": "4ZqAtYBjR6E5pXsF7nhR3v5inAxLMZ9tj6LCpXzvCBSaP6siHBt2K7TxngFqRtBoKYRdVjocQbsoetVEFvEXxR6p",
  "key9": "3z3RRgV6xvFMvU3KLMw5UHUTKJJKNGunNFvWwsaEM5xgH5zH1wveXxaygvjaTbjZNUMH4YwFcJ37ygP5cKnApXUc",
  "key10": "4TQeyyVi1DSFzNDyH79kKCDwDVz6DepFctqs6Z8cDVr58FUD51Qdcz9FL9jTy9C6t5KgYP1cKRguXMeZdokUbFrA",
  "key11": "2z96okbC6fasxbMuL8y3nhZYTBX4gVc7nJ6EmLNZBckvWdgTYTieTUWKjpCzKs8EJu6gcxNATCwm8JSBgEfJ3Ak9",
  "key12": "5JqAEbYP7bVB1gs5AqRUK39j1fPMVwqMh1KB1JCVgXzm1mjyUegE3m6UsiuJEobMdzxd8JDSreZqZ2jWGzZwYcZE",
  "key13": "4Ts87HR8Ayo4zKXtYAL8vChCMvg9oeF7aiurQWs9fvdBRFFPN2DNh7Et7X3vZ4TE16YxPqdSeiqnbKfB3pqTn3Uv",
  "key14": "vAT5psUnXL6KyoFf4aDPgNMJ4oCrj8M672JPLbkL5oQcK2iU6zG38BKBVJ8rW8sctqpT1hpU9b64Xgp5NFmgPNu",
  "key15": "KKWoUdFaHCUnv9iXuPcwCRhgBecH64AeX7EvAJwG5EeRcycZHaKDRfj4Rx31sd7dYG3y2bA1GV7mQssyQZaiMBf",
  "key16": "4EPKTJWBrkqfu1PRaom63uN3N24rBgKyWxKrivpM5Dvqqiz4nHvCjenpgQwpGpDV5jMc9YXR5cHHkVTkFD1aEWr7",
  "key17": "3eB8JN9RHNW6TKjRGZMVWij6vDgjPpN3Jpc5gLPdEXyGB7YeXwQGw3mNvLwHzbntbf2PRypgWeb4JW6P8g4eMJD3",
  "key18": "3rvVRFJ28dSCjsvBHWRdsXyHRR88oL8BBzi35j8mfyCe2EkuvLhW7cp5ajvBNjXed6TAxM2Y4MGX5AUvT6CX2fkR",
  "key19": "5mkhkWY35tuJEpgivn5oQmxTebdEWXBNPSNmFDAKrz8u3xN9zScCKE2cXq19AdyAk4ztbteVEJ66V35qH17WSfo7",
  "key20": "46248xMEhNQBSsCvSQaN3sHxWdFewrqXz1ABy6ULgKdbwHNkoMKiQ292zP1foJgoQ1qhw9sZVnMfyQtYxByRd93K",
  "key21": "2LyWrBH5bo1EjQg31FXqxqXW9EwKCeHtYR5wdd4q1o9JnHzuNUX8b4rWxLZLg6kZs4iDQvmg8DCYRH5Z8EgcW7Eo",
  "key22": "5RB7Eg4nqRHmbr9hSDQCu5b1iyJvScL2rKUxVmpNt4G5JYNLmp93aoYKiie1xznhkmvQRtYqn6ZfsSVf3NkWaPyR",
  "key23": "3wneNVNnuoKLv17adNqacjaRfuYfw11SKLNWUJRLFQ6D2AncqBYKcpRh5wpa9QnJ5BNF2YAYS4AeDdGhiz2S7xri",
  "key24": "AaUqftmn41YVx4ZcPB6vLERfP4isRzyiQKcqbkHVAfn5hT6pAu62bdvEHPAGBXn6qDY5BvfCRMfsbJ33d11zr3v",
  "key25": "vVrkDYydkMPtoAt3x9VHNToYSZhLcYyUD5yX6RSZaZUQ2BXdZ6zkTAKfFfZM6JAAyXZc9WYdyMZeragp7DSCVPw",
  "key26": "4JqYnwcjKEigf6x3geWeAxmw9hXe71NUigfp9Q66DW9K2uBx1pwNvhwvJCZWbdhL7F9or4dySvyNaDFF3mno3den",
  "key27": "536N8UovikFFJaxzZiTL4c4qGvkkSZtXVhQmKTwjjA2UgPEis7A7DBB5sabH855bVBx6xxq9nn4ijszfDErz6Z3a",
  "key28": "4q7b1TUrJ4RfQ2J8jmWFtgpTYrWs7nKpp96aG9umVwX3jvYaEnkF99MbzK3kRADsqG3yJosT4pJRk4vMWCgY8Cie",
  "key29": "5nD2ifNsZNmyS3bst6kQWz1WJVvM56HKqBiWzqLbLVcD41a8XqVdT9B6xNJBnfsVC5QZw6bj2bB5A6EYWPkx5iYD",
  "key30": "4QCPVXMbikbCQYeueGPf5HSUysrF7BYcQutJ377TJ4NxKpn6stbKiA5VovtrkGJLyGU9LQbKXr2gAgDwa7Y3Njrv",
  "key31": "4ZoucvNxGS1T3pG2rpsn5MWmxYzz5SamaWKH2pAjk7hTebr7Hhn3LyDocjgaZUt1GiAKSK3ro5erdizem6Z1Y1K5",
  "key32": "4NckUBTJFFHBqxaYzqz8BTo3U9Rhw1KhzzvWnx8UdmDx4JStp2122T8uSmB794xgYA1F89x586LXLAJnut7sWdRy"
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
