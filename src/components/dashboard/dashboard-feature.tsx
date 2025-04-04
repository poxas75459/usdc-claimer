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
    "3PsfJmHeiFnQCMMWzacT6ax5ALPnzYhrqJ5pmZsPYypq9kRxk1m5voqQoZ8kwuP2gu992i1vpuq8gwtQfN1eroHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWG4bymbZ4ERVtaWrqrbtEqmo1EWxDb5pZ8QFPoVBBxU78C9vhiPiNYGHP1zn38grtRhm1Ski1AKXcsoegsk3Uh",
  "key1": "5GogxJRptmHoY15sPEESK7iwHxuLiv3VttEZtuQtbnY5yEoKxDN3q99p3SRcTf5ZBHPjR452zPH7T5vTiLqSmSbz",
  "key2": "hUDcyGf6UCVSW6zh6MaAxAzwWX6n8zpU42Gte916XUNqq6UXP5D3h74tuFPtW8MBBtsxTUSD8NpzuRCThfN2Kq3",
  "key3": "4ZkozavtJNEUiD3czEqPfhjS29Wt6LYMgkRWVNN5irh6VucmwUqy1bnGAzXPTD4ajmJrK8VTSK9MMU9Xfkjwd4zh",
  "key4": "5ALnXVT1kn5qyRn4REdWziSkFZZLH79QrcutvS61tCpuQo9s9eyxW98So94VoSCrYGkin46yvAG9qg8fdg3YkR1X",
  "key5": "tTkg69LW7Rj8ANM9QvZbG91xZeXcyzTjbVUjoKBeHAYaD9E4Rg7BoXDPpf4W1P44QXEahhnQzXujWtBwqrYvDRc",
  "key6": "3R6L3n5YtPHUrSah4v5sRBLkyhTYQNs5C5Grpdoy5XDRFzC7fUnLhBYeDxQCZqFE9m1HzGe46T1Zmwe9yqtgFe8R",
  "key7": "msM7dTQ6hWcCWhv7wuqGh5BTswfx5wrJVTEU9rAwrksV8fXbF7vaFRaEUz8yokcY3u2Ead5aQzeMs5RhW6SYEpV",
  "key8": "4Qbjrxj3kWvGGHUiYsTXPivDzqWgSezEuU2aLXJhDPKTBn4Svj3FtPLZj7e14QGfFDejuFLEwvb2kNPH4EAvFLYL",
  "key9": "2d31jpuTGvFgRVD75wKGc45NQUdf6FCvkkNsLD39Ps4eyVBE9i1sayBaMHrVp3msZg3KnfTghDpnSny4ZMPes68S",
  "key10": "53LJmEEKbH262urx5fWyUsFButFvjf116CvCWCDjzPpYgdLjdG1gBGaQ5RPwuLphyTXJsfNWFtp7svAMbpRvoPk4",
  "key11": "3WPppbByaTTcdt4v2uYMYSjDzCHdLZapXCQVMFSfJeMsLXJMjLKGwu7jXSmRAwCeBkHKx3Wf1QfsBnsCWiGoQVEy",
  "key12": "5njSnY6HNRiJiVkt4WJoTULgdLXTxHS9PUWfHkSBCbp4S7srjZwUkSzaXK8yVQv5g8vLYFccqizTz552bvypG41X",
  "key13": "42FujM7LrGGXTAdcie9FEKJhiSH7S7AVUV8ZY8RuswSFyCnHy5jY9K19bqhLVDwVCNGXGRrj1oFkY21MrVkADM19",
  "key14": "1qFYrbb11EPuV2ZM1v7U6YUcHMLy9BFZK76iu2ZBPZ2sncoYer73N9YUFVx4RcVwx1FTQUM615UNwBxBouaQPMX",
  "key15": "5tRFoMMWA27k4Hv55VhX2iWPke6xhZdcXFR91DKR4YRPnLywUdcJn7koNVwZwBdbFKCWfzXpXxiNNAJMgW7gtDZs",
  "key16": "2nSaJ2weSktQyeEK1o3rENag9ZtqV7YyMpQwrfK9Eo15GUCxMVwGAsq98Gg9e6wZ5J2LtFdDEPdXQszijNQtdvZJ",
  "key17": "Nw4nTgMxF86vAXhJxzo6CaCMiquPVZJbNFcVmR4sij3qUWme7xwGYsFxWuazsr5Dobid5UrQBNtSm3SDeAnHnya",
  "key18": "nCrABaR8sdRVr3SWxGszVZXQ2Z4LQf3joupUZPqjguvYi74CJfSWCSTcBX65UVfWC8UtpidFfKpCAoPheS9tFAZ",
  "key19": "2JNrYqEhTcqNCd2bWc9Ds2r259r6pBiV1qyJvH9JKLFxeM3qDYsd9RAZaysyvDdfoCBryFLmxwLuBEa1sv6XdJvD",
  "key20": "VLFZDRwBAi2jM8YVPsAJUtxRXbbndY8FGedyLWjt8oQ6u2qr4ZNNWkyd63EtoYKk1Kry31sscbxSGSxob7B4GEe",
  "key21": "4vC3oerWEbvdUYcToXWWMwnVL4odzFuGx6t6qgVsvhbdcf4ivo7uj6dKSwxSwCH921F2NptKfKC5erN3vmEFxS68",
  "key22": "RyhgR9wjAuFMceFfC8xnadmmBaNxFWm2Baj7BMuUaSKw8T7maH51Ma3PT8zUVR6eDWWpMQPRh75SkusweNf4W9U",
  "key23": "2m4vwXePWWqHrz7croari9F98eVev1aDyLvxAfgbHBKsAqq9nTgeSaPwjpEF3U97pKsmK2f96oxLJkf1kdghzVAv",
  "key24": "5vmGnT5WrZkQX2LyCJeRtPTdXaZNW8o6hBZSaxu2utvHYrEeKkKC3agQeodEsR7vN2H2cVeLL6TcgytWmZE9MbuZ",
  "key25": "TBeeCE7LPufkTjFgjZKkD5CEPZhz3CJZoy3iPX3iMgHQum7JS11Asq3t8ekxSVk9vqbL5Je8bcUfSXLgrSZNBfX",
  "key26": "23HngspJ3zoFcgkTTJv5EUyJUhY2PLFRa9WZW8N9XKH6BDSs5hZZaGmzKbtQKSa3kagv9gH297RPZUKEqrCgBvvp",
  "key27": "D1bYWncF4wiEbXzLebv5KdMCiinVAipfHwaiLvRYLd6pXnzJhhaZt7Wm7UfGvYfPxG889abAbJD7Gk4HpsmmzJ6",
  "key28": "4HQJDxpLRh2yY5qiqmCTpKukP5NYu5UUdPpGPYLfUf53tvzVptrWjBGnsKUL8PWPYWRvhdmF3bHLSC8WivgwFzzo",
  "key29": "3e2AFe3VxiYKv3tU4s7kxcmPPWZu1RLz5s2icJG4BBK8W2GTvZGE3QwMrJkYKrdpi2pMrAD7zXSWzWEXdkuXGjYm",
  "key30": "4yMwKvUr1BLwesHFDzYBsu8gRQV6MjpmBHszPwJLfbKXFDDgMJSKGXwqNu771kTpa1tdEYLm8pjUQbNQvj4KvcfG",
  "key31": "4aXWwhp2GTMivJgfb8LCKwi9bxTTkrnUDfmiaPW5pzUPLpmue9JDT3EaXit3qK6aPc4BadsT3p2L9DRhqRBBnZBC",
  "key32": "3qdYu2iWBBw7hKH4b5SaUVd1SmZX2UpKcLRFqZk279RXjdjamm4nuW7u4n7yzjAs7RinBaA6H7sj1Wa3GQGMuP2N",
  "key33": "61vgv4k6GxMUdgQQWjVMKxAxE6kfbUtnBqcptHUrYGmsM4zQKk9PpSK4xLtNTut1SNDrpVNjMHkXQpYHemtQMe21",
  "key34": "5FoAgW3rknPoSe3gD7Bt1jgJ9c9VRNS76ssgDHgj8acz14sH8XYN23pAqaGst79pKHk9fYt1Trjrtfadu7JAzLvC",
  "key35": "2UUdFaMDdxBfJCTzoatBCq8RzbPrC6B3LE3qFHM3MtXBbn1avHkvWyvGjcg7ivXYpZTruc1kzrogBM5bAF57tsqU",
  "key36": "64UTnq5CnYHNpr6zggsAhMsnFfvhQyVw8bh9XYWYrAwhJCCMFoS1k3koC95QMAuLSLcXEXGaRTvncfYWaLP7yt7r",
  "key37": "2uGYuym4w4qGG9SPR36QYm1N1QBxTajX6gGBkmw6m5hGgJLPtgqYfHn6sY8wEfCxKSnUBDfEEUKg6tCrohLmXVQs"
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
