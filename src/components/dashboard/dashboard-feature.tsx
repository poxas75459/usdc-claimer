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
    "5q8Fobzj9NdDShyM393vmzXh7vVuCLH98jf3EG1dqdCBKBztHZJeVjfXiQQ3LLvA2AFytrUwHkQYM4FGmstsMFQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rf51BgWmYuVzytWhWoQGCb4fyWR56GP3CSkByFAQRLzxy2fRrW21xZ3oDm1EpheRPViw3Q6rMrJE792eD5Mee7U",
  "key1": "4UkAtRzfcFfqDiSo1hfM7dn4R7faWiH88CCfQ9k7yo7rhTSQqcHYQJrpzX6fc528wMzhT4zZYmgofR5EXJcXCxau",
  "key2": "4VUSWF2s9nJNqFVPBcdEdx2tNWHVSwqujdpbMnyua5vyXmfA9BpWfBLL1hpd4KE9f4b9Ew9yAW8PTzDXspcEWq63",
  "key3": "5ciSzPTLs2MF8VRqHq834kMWhyrA2U2kBw6fW9w14YxbNrPgPVh5GzxDu6fJmyjDDjqWXPAEp2jTucxEuHf3o2h8",
  "key4": "5Lja8ZXGFJ6QbuGbV6roBB3S7Gf99jvkixzYyTJF2srV8xRkwSSxaVHBquvwzNjwtnXzNAdjvRcvsoQE6UNcGMGb",
  "key5": "5ZsSeGSqrUrzjyR4X8fHFbgrPMZqGsMyGc1Zjs4tAQv9rWiKeM2PUCWR2ktmva6DD2EZRjy1gxXfUV3iMsGhUUYP",
  "key6": "3vVt9ZcdjybgvNS3nNZZ6YLikUFUM3ZAL9sRDFZbEqarsWHeNcT4NoaRBP67pNd5YTTEbdWAL3JvuEMQZxJAJrKY",
  "key7": "5R8WgrzqNJj4oeJzfmxyDZQPcYkTz8SW2J7ms6gMb1g89nzfLVRswaNMiFsdJuWNNERr7Ks5Lvxh7X973wGJDe3f",
  "key8": "3PBhzC4MzkptrF6Z6XmoAF2Qpqo3GM8rjRa3RUGwM5Txymn6KiiA6UzfACf9fHaS821QgFy8x9qVpd5Y7xZk51q8",
  "key9": "4YKaZRb1RQt54D72PhWVQYkW5Qd9FMzKzcp9cF2FFCxNxciavaS2TuKwNT6iVbCLd5ALo52QQgYgaZtnXhVRrk6t",
  "key10": "3qEhhmcMzSC1qstYwPst8rBEY9ghrMzzEoVAsqzQEVLW7RUC6WGSe2U9LfkzAkpkv2qrRMcMhUG4TaSLvVi95HFy",
  "key11": "5VkkkNsYRn7N1cptXW4qgftCBMcx4aY8Pek2cMLw5gz9BjUxpiQ3tKmpSWWaiP8uNRNp9XwCivHK2oRBy1Lr9kQL",
  "key12": "2XhSG5cKmqtZVXhvphS5jE8uu99FDSL5bMYK8MWuL7Jt4o9KJdPLFpr6XcPesLVy3W3aww8ScqEkHHh9mxqZkTnM",
  "key13": "4dQsdgqhPRu8tgvghtfepB94jh814bbta6FRs63wnYexopbePM9sortJFh5kou3FTmNo3uBNr2TRM965mTuw1m1U",
  "key14": "2R5qDfXoXAxvTTXPg6MqSB2AupaHYo9befvnRe6xQfN8mfvJb2794afz15VC4Xp2BtiuXQM5ovsYqPsFNyT4JimV",
  "key15": "3rxiZfLS9neGnf1LJh1VS69UmA86uUAxyV4hgy7ZxMSPU4iWiKEpuMs8RGRgo2GQoVDC9qvznFVKhXJqs1vB1eKH",
  "key16": "2B9LkfYDkPWDDyUeisLMWv6z8ya4tjXx22FFYpz5i1gYXQqy9jRR3t4jWxqb7umq5BKv113dUNw3pfWxz9oMvFT",
  "key17": "2Ex59KG8keCXwbhV3tJxX5jGW237VU9dHRe2LXb7CBY8K72iQws2EBGhYsaRLzPDhJNMkddC9bwBDCTrd5mZztZg",
  "key18": "2mABNr4fYK2hkKo679286ZyAR7TggqxfM8Qqz5jFeYrH7CaZiZbUH3tXk4QAQGmoyRcba8wUojB6R582WRhKuTTy",
  "key19": "5mHeX5RGbqjgpE7wkvVs7KVaa2Ka4Px22UCbQTgHvtD2H8Fvfs9hNbs1NtHDybUwok5aJt6ziYng6uEg3RS4CniM",
  "key20": "3ocZ5Wy183HFnHLgdW4S5TuAM2ngdYZfmcyXpMMdzn7rQzL3ZgDYWwiBtrqDnGkYgWAvucdSL2JicxcctePSDgxW",
  "key21": "3YAKra4AQZnMcpRGpQE6MbRRfu75qSLaqJ7GCmhRZLU8VpWsuhFj1zTUBB8qnNopnGK29w3DKneeY8NjPNgk4xxZ",
  "key22": "8xKATQ1Tpc7Bq8bvVc1HURWpEqxtRnuafQQginRr6VYu11iDk2UBguJahSQ9PJCGMH3dP2MtRup1vXbhdtQNvY7",
  "key23": "5ddi6Ajw7qJLk6ijpB22DgaRpB1d2txTpBcKyWAZKPvmjAoowzh9Xe2bDFdgaHLGeUsbdf7WhrFGz48JKB2fQvHr",
  "key24": "2837UFGUJXjMkc8qcD5SwD6Vmkje1dKtboXqWxmZ9tzxATTGabHgLs7BupzdAm1vFPT36R5TMNRnqGZocZ7sVXRq",
  "key25": "3EJfFVHuofDQXxmRbwzrrgJnsSRVfsXBRsS6upqtnicSpNzvav8fKvfj4vv9qAcD7GPzAx58QNhCWrSGmhQhPibd",
  "key26": "3Qn6xsqVq7PZL4XV3rjdf2PMojCLBznkUq8wi5Qb2SL4D8JLvtNw2DtM7SXBjFH3E3U4YPcBbhdboCty3PbMGqKo",
  "key27": "b4fPcKnLfLfmz7zc5Apg9ytFAqknpCqSQ5ipXPu9rm5w2oScyUB39FrrVQdAXUxkW17t8FRiQRCYytmKbLe7bMt",
  "key28": "4bu1ymwVQ7YTNRrh2EyHDvdaPgffg71byU1NQT23jgHUaR7SAzPD6hy9vuaxa8tT28neHh65BoBLaiG5Ws2K89KX",
  "key29": "3yTcSuWp57KGNBJfryzZ1nMXFFoLU7LVb5jVfTpHEksYa56N9oKmvsQCemAnoGkUww1gRFY2DvTg8GygFuG3qUig",
  "key30": "7fBPpLLxjsSqJvXZS4eFdvryGZ3W3Hyd1jYEaZaWqGfH3d2Q9wJsWCpNex7RiXxGJAbXQqM9ss6HGaioQgZ5hbr",
  "key31": "5r2uHrVUx6KXZarBdRH1kJx7PQ54dQd9Yt9Av9HnXfMnzW9hbJD3nK2ipWdUdKZftn5vsgV14LLqXjW8TciTdKxH",
  "key32": "3uuSDXSHbttQKXVM7ZfHQt5rC1ZqkXznY9xrWFRB9LB9GFDNBeqHGhmiy5BDfX1R6src3nZLSRBPtGUU565bUisU",
  "key33": "ZAomoGLRWDz12hp8TGPgxaBd8wsXjayamMEufNM2roYix6CdkAhoVbGnpYmf8B2edGWteXJrhLfJuoCiK2J2cs6",
  "key34": "2ULAznkjSboTHWL3jcNhe25Fh3dn373vc3KdR6ULFwLDkRCudH6HoCnDVyFPzPKygqt1Tb6RZv5n2VhiqdJBM5uL",
  "key35": "5Jq2BeK9SaCBn8zfn7yzzihv2VyDo8VtiZgE9HHRMqhpKRPALnuh25YSXeTQuCQcVgCoMECgmdjRXkXXiLAriCrL",
  "key36": "R6BQTonuN9vuhDUwiMiQAWAXrLeCi2vTHznAxjy1B9Ly76HaKZmzF1o1mqNE1SNpZDVUATHC7V1qB5Jaos52Djy",
  "key37": "5uR1ePKhvMPPx2SFV8iDGdEDFEdGWJSkogzaAXGWphEDKLggjkVPQfj85e4vtVABbgd7SkGnoczqWpqBNQReFD8Q",
  "key38": "51XPf2Un5LRRGkNUWEmzjAPjegpzJDEGEo1FfYGkCEy9dhxGowHe62mhwR6a7mzd11pkUzXBzEEWDF6w6TSHcQ6N",
  "key39": "2zn3jXxtKFVjhxRNTuKbpXh28Hz29bziG8WFsTrprdQQ3LoXDMA55RPXDDEKxbxcycEgrBH69wg6WtQFLtF1zsR1",
  "key40": "3r5E8tiQaKsveEMo2qSBego6R8pYvutn9VV8UuzvuKYoyCFj5zDsGum5RB1zfWXTNc16vVf2qhbgMj6CH4w7hUm8",
  "key41": "5NHbkfxjzC6Rp8G6T7pE657EPoeX48tUHejD57uTvSzZsCmKY57M5WMmDZaMDjfC6sRjcbuw5pHtnF1JaL9snGAN",
  "key42": "51vAEoPfLPbxMr7h4nwPUBNK1aAcHHUgJyRGqNYdhRk1HxDDpKoJTTJKyV6fqXhxycrCpdzqyXrHx1wgaU97npom"
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
