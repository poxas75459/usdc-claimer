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
    "3n5X6Bjdn3fFneQih9KtocEb9UBp8fn5uhZNJfEEgh5mg4qdLoAf1bT5ySYMPf6wzwpEC22K4Fv5ezKAmSXzkbj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPykUrRwFWxQE2Zk1jJd8pq5QGajiFygQzD1gek52Yc1E1wrcpjXqZ1igGqrpxzK9cPVU2Zh9ekPTyqTkNMXu1B",
  "key1": "622ez4zgWHa1q1Yh3SurXKcozrNG55wXYkHxUz8qXJmqk18vhKjybNYUjoQZtCgtUVRpFv1sJnqNPrTWzAvfSwQ4",
  "key2": "4dfDasgGS16tF5CFTTfRzDTG331T3pgRKWfHioqZw8uoyMoKxtG1nYzLT5cifyd1U8p3GGBDvPziCqdjSFZnczWi",
  "key3": "41DV8cxbioYQhwcjBEMJ52ssmxNutqhGHBYqgGhb8YMhAmoWB5NfXRKMWoCSMpEYeebQCP7NZC4HGwsDV8HGRkAT",
  "key4": "4qAxK5PvVqKbYF4rrE782M2jtiMKXgKD8MLobejN1FzRntmSeKkwGoNBUhHL4vZkVYdpUKSAMUAgSqNpHDDp9c8E",
  "key5": "4Xf481Q9AvoLb7WL9eziRu42uaS9VDheUUQaKiNeF4zwpwHVQEv7qPwMNMWsgb1Ld6M5dg2kmp8MpaYuczmmGzYC",
  "key6": "3uXR6aiTXqAMFVKLeRxonfWjxqsLczYBEzu6MSy9Jx6T26KjDACoJaYbbu9aS338UENSsV1Wfz9NJARsuHjc8dKS",
  "key7": "52msvWBD77XhHztJ1Y5ZvqDzcgaxH46YM4GxGnSucw7Kj3VBb2SHhTrYjg8HFiXZ29x5SkygGyttqzA4qVfsz8P4",
  "key8": "2ThNPKRDQBg2RpMZZFikJGu8qv35bfsfprFC9G18zctCeXKXda3Qvqg29LRp8cHcagBbETYiyvuLPjCS2NyWvWVd",
  "key9": "3rPDDX2Ea64fSSKw9QKFSEckw4Lm2japTRRo4VpJH3W1AmRaLihXEPkD3pGFDbXyadR1zT8D9ypJXWMq2LdJHjYf",
  "key10": "3zkCw2B8HDMsEN7Xs2QTs3AkegfEqusSXCoK5bY31oKM4EGX7jJzMA2iXxPJjNWH1SZKppm2qtKHh7SpMrq53K4D",
  "key11": "3US7deC9qy6qV4jZTa7vbxuHDQTXR9WFDqBQs2FuELXBxNFzJZ48f7vAZ6bN5UMcWchV2r9yr1iS9yS8QPtL8Y4q",
  "key12": "9XPjx9YyZU49g591TTxarV2EtuxMf5LRCa1wYvdAwZFdbJwtth94UP434W8N448rxZnW8b4KwGfFvgufnP7ZopS",
  "key13": "4z81Sqase5nuBuGctoQ7etdJnUnZQZewt6Mm8YFLB4GdARBVc2pVGjWDBKTSXaresf35yEAWUzFCoLEv5qzEFRG8",
  "key14": "2Zp9J1Rztz15YCAo5cWAXuh6TeqYPgWvKGDbEjn1fPhEgMRPU8yhc8HHXYMjzx3gnFGg5LM2KXgZDT81L34MmD17",
  "key15": "2SkZwRBujKfdqVGJe4jDgbVjQvsaSb3YLZRuRugn91PQCo6LoijJknK58M73wYV53xXyV6qJcgSScM5BiKYKxT9",
  "key16": "fHUZweF3XyZNPghVqtYaEGHoMyGiPetnsajnqYswGg2MqGGeXqyvxrxNWaqXRaKkwbNw9R4AMDw5HFCgabf7Mwb",
  "key17": "5pGL6hyeFMp8Ju57WBufd4YCQd1XLTMuRoUJ8k8ypt8CPDznJvpLnYC7kfowtvUJ8uMCA6pv1bbgTA1DzgrnQrVQ",
  "key18": "4hvZJ2MEsnWnwt7mrfZjccvhipe5TGxxPwi6wbZFpx6PMiLRMTHzuB8V4yeNhnz8QfU9bxwWZQESKtf4BUtzxrHC",
  "key19": "5VpXYDVX23H7znGYXBH9FaJeEgturEpfN9D3WYKC9ygTbpQCCwQ7jFMi28x9SZcss61bsuxoTnFn9C4WxBfuXZZP",
  "key20": "4G6PL9AtQa3S4aKrZd5ANrvkJjshEADeWCqa7SYB2a9UEzGHgWMJuaD3ZWWrQDfPuvqqyDTj6vo1pMwtUaYEtD91",
  "key21": "4xe58eHgfzbja8MyNquwhj62xQ3BiZWVxAogh6jSvAqY5SVmCKgy1A3DQgszhTBtSV64R1P2r8mWHaQYkhvCzY4a",
  "key22": "2Ufu5Di5uRH7YfUz6A2yyqd2eUbqFqrS9WL3yopxbdgfVSnxVCEGmwiHtvSGgWk7kPZ4vGvRtxwHNJcqHXTwNNhm",
  "key23": "5pKimfvpqNLuXbZSpR29LSbSwC73zp3qSikRYBxQf4KGft7mP3MXGp12AvxRgBTFX6LodsggbWbb4ZmQnZsMUMs5",
  "key24": "4QrCGfG3xp1JCq37hpd7wTDLzgo55ACDYULvHeXGCr7VRgqNuAq3zAxpquuPxYLDewiQEjasHNxDVvS3i3asJgZb",
  "key25": "3hXXaZg4h1pgMGqtf7TWkqRHH9CsMKAjNnQga75EGAAh8NZb3apBGmbWTbVXvDyacPLc72uqoJGhFTLaXjuUgz13",
  "key26": "64ohqf8a6tS33BwzrP8foJNZVozL47thThEhqLQmhDoU4qQvWLNLiC5rRq2zW3d8isd7HQL7nnzcM65r9RtTQzmJ",
  "key27": "2a7ekZNKe46YNJ7Jg3dbWgsxm3akiBdoNNm2L28umTf9saXQ28Rjq6NmU1QJSi2Gb34eAUJptzib6izEeKt5v5op",
  "key28": "EU9grCXnwAzowrtVvDrCw7d6Z9E4zPVTh2YkVwQuWzimCwt5auCCNFvn2FcAL88CqrSCRWgTnFao7yEih14VG86",
  "key29": "4PoGAzNbdCTyLZZuvs9WezyRGnxqMD4QiYnXWCrZkVvZqRaunn7vjFRZun3vy7pfDMHemku3DTRUQD8CFjDAQGE6",
  "key30": "3evY6KSg9WoCVUPZyqjs4HbXTYv6ckPKfq7eozyr6G7c4CqF3w7XSNcQsGdFDSoyr7JSdoSv67vMW9cTR4yywDq1",
  "key31": "3VJa9QNXgg58BDyNXpJb8seb5nGT6ZVLv9hDHNBbwhGvPYDxA5eQwt5wWkDL9yyUQqKLdBjF27gGfCTah3Ak3qWk",
  "key32": "5YgZqjNUNinmVVUjhfNDDdShKtSi4yemTxWUBBAmX4pbhMbFruMXbjHxK6JMiGeXkSb7HTKzs2jWBPwRYAw8Y2uf",
  "key33": "T4Y7N2xB1A6WqEdSuBqxi8uhrSk8oam49Z2gihjg3i8ffHvm27mmZQTJpL66dX8j3cYi3JrZNjRVZmzSMYDTZoz",
  "key34": "5UGvBtCaHv5E2BTMBoDqReHFcEGaCoLP3UH2bg9ZHLbyTa2CA5en7mhenKn7v6LpTSpGNCkC2U7K3hjoDEANfuPK",
  "key35": "5PxV5d8j3fpUsPaXc77scGhZtYwP4nQWdPLN6fzAaAUKAnyffhLnaxsiVSz2dkiLYJLL2TJ3SmbqtHfrPebKPPp9",
  "key36": "3Z8aL3yB7aCBqTFkfprAADQYXt8NmWquxQkKcnhAXDC4DicwXBBpwdjhCUTpGgUxYCvQKFY4wziLC3VVGb89TkX7",
  "key37": "4bd6AzVzKZjyaBvNzTMzBPeqDoM3mTispz56DDuGASd32AEDGQBp1pXqup9Gt7p6AcjMdc4AxRfw11vZ9E915fSw",
  "key38": "5FTRYuMPcyd2L2gStbymSGXDeWbhpUgcJhyiDyBukiKoW8423mfLoPM2AKxqdsMPjyHnJhVvo6J3tiq12uq6dVs5",
  "key39": "3xCNo7wj7ymh2Gedm2eQc7A66Yc4AbkfrnApD1FFCwuqvSgJWFmJVFPq8N5miToaJgnPHk1oDrdjgHsjdc9rrSL1",
  "key40": "4QgTMeZRmQsxGxiXtc4dPq8BU29akcAyUfRPxVeQGe1QDwPEzrQWdUGb4J7yobfTB41XKcXCSAVtSENGMFxcqHUp",
  "key41": "5m5PDazCGSdCsY5pzPhgrKzgDXc6tW9qLVmcNErARaM95aMDaVUiwKHJgoDSDTuanUd5VcaM3eBaBEmkbzguCG38",
  "key42": "9WRVGDxAwRaKc6DZjmfMNstjh47GC9AeV7SV7AjvBpoucedBef5U8BFeKd2n7APj8Ya2SQSK5S3zj9WuHL8GcM6",
  "key43": "49mW4w8JdVkqA6muejXF9LNDZ6uWo7JUWmx8W2HcnTUHLAXVFkU85CEvwEqjgq6JXVcBv4VRqHTTU98E6jRL6X5o",
  "key44": "55TPHcp1EXZH1AXN8xYsMeRqscUA86NpHe1u9DsXvU1J14RvREazhfwK9Ke6zbro2FHzZpEeGxk21M7cKQ6vym2G",
  "key45": "2N3eHmYhxgqdsHhGTKWog59S416QvDoZu3QUAom6vqJEbg49ZVcmLyqF2VKadoowMdYQ91Tg9aLmvWp2PQVrPoUr",
  "key46": "5RgayuxpqoVxMoqDZZYTWEL49XK3y3MhDWNsQqB8kQgBGbszuzRyuDNcnH9b2X2RzSVF28jrivxyWi6gVTBqJfUY",
  "key47": "5fB3exqgoVYfUKMg59Vqe1orb5PRJihbviLXSSWnKGN6J5mkQwiHRwqrFU63LAsN6EfbjhBu99A4NmsEZ9yEShWG"
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
