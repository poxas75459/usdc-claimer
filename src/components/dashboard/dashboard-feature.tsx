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
    "p5Zf17Uyxab6mEK76LuzBVqkznP6QVEbRdayd3jrrTWby99WNoY77LvrfkaRHxjJd7N2dPVm63dSUr3R3VzFUNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RrqDHZBsmnE7tgzY9tRPu2MzzVsQ3oWQdxuXQfarxPYe7i5Twhu7EJrHkzDQLSkdWMBSkh7fBr6BcqL7XRQxnus",
  "key1": "mMJ1Xi59WArVkLqMN1tDfFwdUm2qq5tEQu6PACRzyoe4sYuCcjHB4kQ6S4aLFjStjLA9EN5vudP1TpvN8dW3ABG",
  "key2": "2eRDzhbsS6L3ZycURjWaRSsxZSaV99YnFCEujBnHq7k6SvQRZqxHdqPXkT7scbsGidRrfrXhBGw32tc1g1vEUXRB",
  "key3": "4xLnbfnRX7yaaHFZz5sWu1N9EXs5LsnHQtyZYKkKJpKKHkHTHo43VTFqfZ85ckr3aSHdHPBnTZSgmoMQfS5Ya8HP",
  "key4": "3St5x9XvSatGfFtMcyvcvq6iy71TS3uKhskywTTVV9CP5End6DXdfrLxhq5cUFthvcnGPVzpgzTo6EQ9czpsGDwC",
  "key5": "4qGK6CbtbyvTpnb9NanByyTbPpCJFpzUMSnJpLQcyq4GZQFyR57pJEnvZuJDZaBG2j23TtaKANQKBkovnj4L3AJz",
  "key6": "3MgGjK2Eo6tgod9NfE9d2RHDbyDyMhraT1uZ77ySuLYGtkSQ9Thbc8nJBXmZphKyPpracdPX5Kb2jDwNTy12wvdM",
  "key7": "2YUa1E5jnRJUeabQnB3GA67qFGit7K7JGRAKLZt1A8JSBpDJXGEXSfcjjvdK4FFmcPTmHHX37vWYqaCtyBurxERW",
  "key8": "3na6CKeD7cLwcysqyjfiQ6EXjw9MouoUNmQeFGWmqUyWtcGo6evK9o5WdEtaWfoBh7vTAKTxWvG2a8kFnTCJ9rRk",
  "key9": "5Kp5iPs2QpoCzRqbewmgeXkqCwkcbxXVwh5SQkXVzLCMmGM4cF5qfFiJfQkzdCbwHLyXULgJ8xeizr1PtrMPXgAY",
  "key10": "34tbRkCtPwz1VuHLwQBujCm5gGhoC23pPp6fxXLD5htMzv7yXSddpxXzKV7VgFtaeNSAaoVwAVFKvTLG5CMbcsJm",
  "key11": "MP8TjNm5rev4GkokS7Jw7HzJPKFEiyCpHypvK79SA75BzvqhwDKGo658BcS2e35GyTK9kvdep9fmjdPCghF7y5X",
  "key12": "2nGSNNfNocdonzEKTqYyPSSUFFQvrXbjVGnqAKnZoDLZDL9EJoC855jvSCrAFDudcD3fdmNkT9CTEK1g3ykH1FjC",
  "key13": "8osHQsfLqKp816yxVg9pt7pNoQ1Etmrm1GzvLgS2KmwT9pHP5aUaMhAeGgUkUsZifgjtWGpxsiQGVkKjFTWf1Qb",
  "key14": "QT8G6TBnCQU5oFS1iy9F8jcGwCGd6j15qdGWSXpkE2gP7dbJHkdz7PA2WhbR73jyvniNEQACRwsqciRvRUsHwGz",
  "key15": "4zDSbQeS475BPbHbjBpaArsVjJzFieQPZwg8YcrgiE5nh8y98A9VYqQwcrYfPpdvn2NTW7mpc98vdDVK2gV1trwt",
  "key16": "fp5n7nf6XeFrzDx1sJMuw8WDy1cEUcQdePeMhRvB7b4ZNVATSVeuHXvHtstw46qTy64EgYrF8DpS3B6sZq8swA2",
  "key17": "2WjJMeD8c4Jxs8M2ijFsE9mxyyfGyLYx5sm7jFeaN6ou5S9VKnYkcqHSerdcQp4DGEN7SvsoemCakg1NhQveGyD5",
  "key18": "5ax2TzC5Vc3PDv3PGMDRvEj6zWi3YJAMbJCqPQGqRgjv3D9NA3byFyvC6ys3vH5LZqbZuiWGUpWXupkJVN9LFYut",
  "key19": "3HAyXFPZFugBWEKjH4VJuoPgvGoBCEjrfJVReJfcHniq6v9ZURCGTd3Q8DcdgqWQEojuhLnBsXWb5CLAcUv7rAqo",
  "key20": "5bgJUHgQiWcbdHDJtTFQZnPHLRyeMWMoKK2npN4CtFQnVK3zNKZTh37WyFtDhkYGjkV8JPkk813puu7Rct5QzciU",
  "key21": "5uHPDmZ4ztrpBhLhcvmJoErDUgyUPkNtn7MvyBnkodCbDt3he7RHV2omyNLNrzvXfpSYTK8seAFpH3bS4aEPWJ5v",
  "key22": "4srJQqQELZSQkx2ai4pf2ZSwPiAMucdjCAGmzgRpotrSGdpJfTycx1J7oQknzTKa2TiC6MoPvSGgLZgwnkBfT2o8",
  "key23": "573HSE2hG3G7V8hWvTwKoEK4hqBsA9GaAmAvGQShkYqp3pYzKxqT4qzWfJFGDy5ivrLZvDZRfyeoZ4m6w5URTCiG",
  "key24": "3UxoVCUJ5rr7YbxF28my9dX7P7wNTv84dxZ77LpqQDhPYdnS1H9NGBXhWkQdPNe9ipn4FypyhCRwQqmkBeDYh5Kk",
  "key25": "4SEeJT1hgccXnCorTzyJZRH6pdJ3kuzAhha7cNLY4seNTg9PDfqqASBotQJR7TgcH17T83RG8QTHzTPJjEvV6TNy",
  "key26": "5eAEtN5nCpmn5QgqC8cKR8iaU2g36b1tmi4yQHDrYZo5pRAr2RpL4u2rerTFRiArwifx2NmMaWt5k6VGcXzaeZio",
  "key27": "4F9pwaQepSPw4CF4dhuf8hHPneqYz54CGXvKX5cjUB5dHrj8cgwdrcmYDVd7jJoEqJyPruFR1ACDRd8YvXEyBhgj",
  "key28": "4rF6b2qq8n9CjcHr3EpX4fcPrZTyrFtPHLcZawr2N8w5tK7ff4F9NQxYUDu9fYZyKNtRwmSd4ZVS87Dv9W2wiBDH"
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
