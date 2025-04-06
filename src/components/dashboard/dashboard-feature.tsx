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
    "3o9ruxK1GcceLqxa1TNP9xoh86M6zxPQ1CmkUBXZG5VZBaYBkzA9bpwmboH6tNR4dkoGGAVXpSbeQEzT3SLoEfAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22a7smGpRu7Gc9DMwHSNwTaES3KJSpZWtCQ2gH8gZTVgSDKFPUZASEceo4nEjHks4CiAKvquh8p4sLB7RGnCBrFZ",
  "key1": "RTWkxAvkr5HAp1BrUUmy2VjZY74iSz6S6v1YUg53teSgX4LENvCkNbRiqPFdABN7n63ypLKVqYoDtDCFc7P7ajG",
  "key2": "5o3ijRKBGqRCiHgAd48pLKxBKPcGvpxXqbQWM2rkPynk7KCN36WurEms4NHbAoyoM2ohfY6nNvKjFr2AtVQkhpcd",
  "key3": "2MYHkm7rutex8RmDTZbUWuDaAwpKD1tt6A54L5pk1uxokHebUZ2rBjwPNNp94cc5V1D6Vym7YvY2krax4BehbLo7",
  "key4": "5EwFhc14aE4TigetWKEw6WUzX9ZkGCEGoXSzCkYJ3EqSyDq3kNUE4BCt5iGoNaGfTHaiXZeRhvcwnQRvknUcspAb",
  "key5": "5uWbXsRuwoKFC7hhrj4LH8h61NHatbuNQsm4dRMAemPB5hqHUUajTRLxEaDYCFuswh1gudHasWAc7ZMbVzSm77i4",
  "key6": "5yCWbh1318JDezJ8aPKZeUQhskp7m3ZReoAruUTwGS4NSurEHjwxmf4xszXgdBhqJ9pNiAD6JaB85SyAjq22rz14",
  "key7": "44uJTQ4SHT9bRNVobpS3H7hZut4UGY7W8VmJyBXneKbVreMAmsLSFQj1nDn5gUa7b8m6qfoF9gh2gpicEg3pXZnd",
  "key8": "2iP1xsniNAuAeUwTWFn1wfQakEtmJpcp6T24Zu8YZnVVwYFCBCpH2YY5FHto5dDdsggFhvoyJJMLyPTVKvjjSLsd",
  "key9": "5drF1ks8F2QQNnT2ZwLcBdi88kFq4cmoCKV7qyAapxwAJEAviXpSa34ofXXDSnLjqSe2iBLEjTc4YufBNbpdrQg8",
  "key10": "3Zg97FcwAc5CZaUrNDDJCfx73xSmoCnUXD36zUXGCCKcUi7vYXZB6tLVotLdkynt5xj9T6vH5fkfrEwk4Md8RXYs",
  "key11": "453zEaJhAJpT9GjUVF3cq5s4xA1CHQEjbwdMuugL4ayfzrf3dCXBk1Ks6NMx1kZ5sBBTt1vEyKjSFFkuZXA8Be6T",
  "key12": "24xLQiK6dT5452sKi9o8gRV5VrZKeNKRdwpChkh3kMfJKEXog3ddhDY2PLS668FsZkZveK4rxd9tq3WF2LZUChkw",
  "key13": "51AX3JVjZCy4XhFECfc2jkJXXxHthr257R8AHsPK2v5AauyyfHcvprCnQmnM2Mh5rdRgdUZX8qpspNumAYkiqviq",
  "key14": "3TYXbn9QrERZyXJ8jvGxt2Q9FbHxWNxJtmSPyb8VavBTTrnwou6BxB8NdXK7e5XCGtfJLg4nzt5wRq1fgGZDq7qh",
  "key15": "4NddHWC5aK8GeKq4hEnLWuud4Wn7wNG2aZ6jwJwXP1uSoBvsVUBssXgyAGiWHPhsh6Cyu1HrhMvyHVGK9kBFkeFT",
  "key16": "3gjCeH2JDmTjmvzsr55e9CpEcA65EpaWZoYbNkVympDGtVGo44JndAmNtgMz26iFuQ61xiLKJ6YUYDw4WPpEAWrG",
  "key17": "2M54FfnWvFw2PSM1eLadhr9jfy9UafDbMCpi1mYu6gkCQswBwpB1gX3keF1cDP3NvnRfZYtABCTWfSSkCWGAFCdS",
  "key18": "4KBwPgoEq5JYBSmJHB6gGkbtStjFdUo4FiYaWJQL7zjaXyEh45FEtnxjPfCSU8WNYXR8yj4XMC7fDCBFw2crEZZv",
  "key19": "vXQWqhi9KHLehwCEL9f9GC4H1ec5ixZrM1KQNxy8WrGpyzCVySBE6erRPfNopBc45Uk8HNjSK43jgyjJt2AEnuh",
  "key20": "5QVLeGj1h5jo45bcP1jTkj1gnRpUfFQiAzVgt5PYSacYYfg5x9A7YVqgbtxMZsywk8BaVuLZbNNhfXyWnw9vCbio",
  "key21": "3UgmqT5ugZqTGbTZqJtovG4vZFwUPtnrbeSa5b1eYnJpG55ohXiHCBPZyGpRoHwQXTTY9cPgAPXySgxohivvfntD",
  "key22": "5wzZ8tJuGmQ2bXVhdiPxbaJ4c2jgRkjJkipp6GyEM1nBfEEb8SAZbxWXvrALqziJKeCxAC2NdaMGa6FRCc1CcbBg",
  "key23": "5kTq8xH4nAGxU1PzuY6EmrvUPL46dvDq5H8CjK7VEkGYuPnSBNC2RNDz6BgaAyYgjS961kjWWfcrmVk77KkbnQEP",
  "key24": "5L2eWUdF4FpaXhHPVceNVhp1Nxfh8gx4BeETti8xbtCEnxwgCkqzsoNbDwtsLVWCqVVdzn9Lz8nQVguaxRN7nXpS",
  "key25": "2ZQSqBkkExSa65eHTyQCzpRoovRDNQeVpE5ypJTTSctkdywj7Tk7EBZaoDZcft4ShSTwvT2YpgBqhNh8FGAsPXLN",
  "key26": "2ia5eNaj3HVSkYBG6VXogAUjAhX4fjx4wyiPzxtuojL3jCnacFdGiYcfC1epw6NjFo9oj2prXpgfnzXwbVi8UXqK",
  "key27": "5hK3ZSTQzKmsD1qnJKQDdgZMGfB9qRqBXnZ4dovULvpsRp7R4kSjNEyEcexg4dGzdtcdhSN3u7sZAmFsDEiJC3Ub",
  "key28": "3etM9NawpZpYAe5u49HpGb6bwtm3p6zdR8GNJ7EiA3rF8Y6zdn3bB9B2JvAfEqPm89i8pW2qbfNdSNPvyWApAAC3",
  "key29": "5uBKtQUUJpC1hsjfxWKzYK8gb5ZCNaCp3xrAxmp8ByH6cYB89Z6Puuc28jMi47KFq3kAcg9MDpTkw4gpT7wVCpXu",
  "key30": "wKnvKQzh7H6KoViiHXzHaEVZzs4brodhA8MarrbyJZ2MvqzipNz8qrZR52EMRAHzsysh2MTJnAtRTrxt1LFH3cm",
  "key31": "5fLcsgtLDbLmPmHPz3PgWGzgU3vkiczZEBQ785ikcqNZDrKRBZW9fKKrGMX9Gddcorxi9NpdgZtjXxLtu4YhSYDV",
  "key32": "3zjEHfS7vz2ZgtupcpoamqDe6PKmvs6D59fF9op64zxZtA1f5sPs5wJKtKKszQv3WtXpuP4StXQxosZGqck2i16L",
  "key33": "3uF9HwxwT74EsyRJuWQ44MUz412AVXpNWzbmMXLMgamFqejJfq2UMN88AZ9WY1q9fpaqSwUGcxjVFHbnAjM1easH",
  "key34": "N74zvypTMMBPWkjj3XnBeo2ARjtor8XDohRXwtYq94MKo23KjhgFV2c99bCs2msfdV4r8xUiQxKLBvJbozupBH9",
  "key35": "3YassrgXb3XbEYrJf883tvGbYHqX5ZEvLr7kcfgULNu8Qo3DiejDmzE2HyytpRARn3NaPM9AgAo2cyKvgqp67RJE"
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
