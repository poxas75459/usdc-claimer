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
    "BR6Vdmtd8rZNEVfQ36d31EPs3PXWhZtNcXV8MjyvMwKuMbAHpCA49CQwwTDoipNwvw9XLfsSpfE7Xva1DdUQ5qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMSw91QjK13127phhLif3SQj25wLreKFbvJR8WXRStaxHnzejhE22ZhiM3GQVdQSF7cx8Se63nJpqf6tYxcbA3R",
  "key1": "3GLYgD3dEzHuM4XwDyyEy1qKpwJA29KhkTJ1ixZni8AMrj74yZLjfpKgdoipYcNFketGHzh9hdd4n2TAU1bhMneQ",
  "key2": "3G8f6NG6gPExHDFuESYn89YuWcScQzHMbNhcHAxrM8jd5y7ggafC2VpYSc4Gyg7qaGy2ajJU7pCrVMTf4AoAWTF3",
  "key3": "3Whf7Ppt75b7YfMXWkifpq7nMAm5s73nBtRtKGCJ6hWoXEGmF3s1mZWnTt2FxjFXgJB8z3zSfG9CZfG1dDdWr8ng",
  "key4": "55jntSEiQfq92YoN4umPjfZZxUYo7mphvBT9mMQptLMg7ky2MPNCcS2sWNALcohjbUhfBRjWLX4H9u8NtYcPC4Lt",
  "key5": "4JKqszjkFcexSvarSrauNwSiu1zev5vF4ki2K7gWmVeYfDP8p4PZDTwvFAbjHxjTDARxM2vHTQUcKutfakcogMgd",
  "key6": "5T7faWaD2K5YfpTvZeRvGCCfkP6a1Yhqc7rVq6AJrBwzAnfTw5F7gNbJNXPmMrXLqb1sazaEWmQCUdqmwUcWPZiy",
  "key7": "2i5a3ssK5UJf9FvmkZyTQfoe8gKbAEo67kbRfMgL1nrhQbPT3tap2ZsuYZwimdu7KiTYXQXNoauoqJ6grTYBqd6a",
  "key8": "5TX2akq9quCvVZR2qygd1Bw2V8E2nQDQcckHmnyGorH9nbkCQY8DaTuhHciNMMFwhBCzdKS6no9FagFurxs1bauK",
  "key9": "3bVq9HuKCSficT8jScc2UagG8DZf7uCnBwTXgtE1fB2h5oZGmYzcwJPhxkR5fsSkDSd6HN53USC4ty5V8RQpoSHi",
  "key10": "3eWoYxQnz3m4Y5WJ1p2uoiQDT7P3V7mwhBLAFuVGTAhnXLRKaoukeQ3ujBvUS2LQEt7VkDPkFyusiVLtVJk7uEcG",
  "key11": "2Mg1ap29kTKxW1E3yeWpyPCfPA9eTPnUPHRJbKadrzhdHTMxUGiqJtznXA8JT1LQLAdEh9KXYtPFz8iFxVjKrNip",
  "key12": "5MmJJPV1SNhEZFqWqL59rb8zUzL28gURsYEhgJU5Wht4h6xV2zqsPbSPELr9Lju8EZECwxYPZZvWS3nTeKa1XJRN",
  "key13": "46StcLS49z3DbxpdvZLtwP6nzGy3Uqf4phqYceRFq2FTWPEYNChaiSFUWYbyYrhnMd4zSh2bZMV9JttHrnMFNM15",
  "key14": "3omnXD5AXa1a55H9oBqeKDEyC8Z9dYMZXtXwU2Ye1tr6E1arTdEgJGChtLz9kBBruVc5863AAfhjGKA1edro3grM",
  "key15": "5oGJySg9nPuD1oby99ntvyxaVEYjLzT8UogpbhdVCr6ZNLcgg2isBZWwzcUk63uMFK7CGZSNiQ4rWAcNQF9HgqK4",
  "key16": "24QXQsDNEQupHk2qQFmtPTRk75uewdZhmG1KuaSZJpqj2ma2ZidWraFNf91fQFhiFbvrVGbMvesuHRdbn7ZEBke2",
  "key17": "3VFdBX2yscvoTNtEF7dJaZWYHu7vWiM2iKch2RWSDuKFC5oDMhC76NTxYrquQcNGWSsxzmJFoEmuxx5N46rCqbQb",
  "key18": "5B3GCmS378PfwSzenhNJt6UvPcF6hPuvxge8BZupULrMpQLzWSm9DUxWvVHbXorpvXyq48s5GN6wGztg5Am3Yzww",
  "key19": "5eCZxjDqi8biq5aX2CH72BGC4UoHkw3H3FJCMfUwEbavVnqznb3MWNZsz6sL6YfEfhj8z7yAgp5MkTZncRKwDCtW",
  "key20": "WA3vqwuMGv5obNe5gfSCAb13TFf1VGDQaLLNyzJnNbEzZWeTSXQMrXM3yM3LXu5KemQNbB72ucCtDtx32rVqkq2",
  "key21": "3XfKogVPFMKZN4yyMtiCr6FJA7C8Q36gzqRpWqKmH1ZCzLC14i3WVg3cK1hY8wwurdSVPoo7jrR3uGexkUTAtEBJ",
  "key22": "62aA1sjvhcU1erEZSsofG7G8r1gT8iQe8TQ31DdEexkBZ6W4deitDfM4Hm7MCDi164yfaA4qJvd4tLHcg8cA7fyc",
  "key23": "ZgfTb5ngQfDQyT8YZHiKYiMwGygmdkqSGmWCo8Yz3oLvKZdtWMMovB2LPQUJRE91pgU5fPuJNf5czG68bWXfrwR",
  "key24": "3pQv7hCJS2PruZ4qSpPUgLUmMUKC5oEMPVtDzLhbujb5Gi1YgDiimNyxnKCfEd8jYyGeouFpX8STjCVMSB7bLEz3",
  "key25": "3v1uP5E9t2bfBdxo9msAKV9SRQZk5vVscseJ1vKEz9LLeJNtNXo8PYYqkE1PvgRonDWkHcZjqVPiQXP2MnTvW7KK",
  "key26": "HZqzhi1aDppq9YBbG6QA9cU5mabesdg6MrxmyKYrhC4RYRv7LaRxh23FsJaVs5bKgMjep9pNtQrxDfRCiqdb6Kw",
  "key27": "3xnGDEjZHkqpdfzJJPg1Qtd6BniwTHcVw25StoETryyo5mWoaDCoz52YtcUwEnchCymstMTz9CWRLzdXEs1bgwEd",
  "key28": "45Akz2N84ULPtGnnUdCuvyJfw45GGiMrE3uasjCEc1UGiYBhRmmLbCZ3DrzCtnmgt7NtSCkdCNteKWmqs774EgHe",
  "key29": "4iU4E5jAUY6apkXZEDPsRDAhQsjWcMz4tMjSfHBpAc4ZvF2NsLJydVkWk6sxVuZcSvWPLfBxJBfA15xGHF9NobhB",
  "key30": "2WJnhnCojS6gAYjG8P9ka79UF8vEWkKSbwWPa41wZEDYSadGY9RfqDqGtwpEJj3jPuxLhbMonzuJMsyA6iuppNma",
  "key31": "h9dGWBE6DtgL48VL9Epbbji4KumhHkCwmfTonxHxNgmLiEdevF916YJmKzNaUkQjT9pt2fst3azF2XjaSTK9XUD",
  "key32": "2Uz2ktJieNRaX9D7y4KQso2cFv24iTZDPcY3M5nsLdGBJwBxPykjM7QxRXrWpozbwM23R5md8iNhqAb3YYszsR1f",
  "key33": "43m8dpYsmpFDq16bbHvK7UL8uawa64bMWCy24bcvbYidaBMhR3NRDJtvrchEn7yPuVFzqTVhkonRWjjzoht3i2z7",
  "key34": "3AYnFapdn9AR58duhuc55FbGzriM69LkTwwYkyBb29i4sWNpVcMh9RhHAUCPtYd4Dih1V3djqiziA2dLeMiKX5Dd",
  "key35": "5fqBsJm2kmhEYkmQvnMXjnNnpFvPE1GHZ84W7Y2DgNT582pgc8BkPUwawNn6UeS2qRqgDznGo4zpqFQbnvWmwSmX",
  "key36": "4vndNgEJPUqPvAtxjKLjubaSRqxTrYvTSbEC1oTn4Knhi33hTWFE6VAJqNdw4n25cEFebbgwpwfbD5p9KnfYYzur",
  "key37": "3xrvkWfYqzv9wPhcCqXcNX75a4umXC4KuzjT3sCKStjHcaNi5xTjqJeBjc5YNbFxaBUemLo2QqFHfdJm52n3w7ZS",
  "key38": "5Q57jEEAsKTDDUPmsVS8hbBiVJFL2RdnfqMbgCjp7K69HGSnhWFeNk1Eypvwg6qCPAvggEZ41iGnRCF1nhKxTD1J",
  "key39": "49c67AvhqSQBt7pqFA9aGHHKKqd9sJgd1xnEbCV1X9khAGtViiiCEcT9X2Wa5K415oudPZ93NQitPnEGwj9XnseY",
  "key40": "44VWDKzLiFRViHT9VNxSmoTJeV8BN6wzK4u4f877a3up8mPcTjzRkfJewQzWT65FYC6dRgUozkwrFLmK9bR6arLk",
  "key41": "8XVin1zD3n6qKTWqm1dmiT3u9eEgRb1SWEtPnnRd13dxZFCH8gu5ScS9W9bixF6sKSs2awUTXYxg6YFdoeKuNdf",
  "key42": "5msmaVPQr4Xzx3wwkm27gjC282P9r7CMtS9raztmAjfX8zPQenAu81Cv7aFUQ35Un4knjS4ujVwuNGNrhVfZ1qAX",
  "key43": "3oh91g5TzgrW72HW7GQXrwAGspHV3Pa35mjtzT3m4ZA2t5fSLSk6czwe4DkZXFV9qa875o3upoG5R3F28HZ7VrA8",
  "key44": "5t4MAdNXsJhykahoYFsGt4LC9gb1ZdjicBC6PwgFiBFyfjQZJH8rgqCGhAp5TtVt1364sEkkyLTr6px4aNhVh8Xp",
  "key45": "3m9JGf4es7MW99wUKPMaknajtDtm21TWX1kQ8AKfPVnRc9icHUZfyH4BegzsViBP8VvGZMdNFX17CDfTJrhUYnEk",
  "key46": "31jUiugQrFxnDjUhZcXbv3ahwXD272LhJdShzKebRARGmhyASKfJKREAzJ27uPpheVvbcdKUiZP5mXUxGeSV6j2Y",
  "key47": "5TspdFGcMLoGqfKcu88Y33NW7U3D7HXGzL9DogH8AabVqLiZzf77r8GXsgunpJuuLovEMvoJiuWvbz1PVXtxRMQJ",
  "key48": "BXs8224gkoTfsbDV6Xk8cmoLFDkMXW6BCbMRzWPB8oKLbFmRye3GKEyTQfit2Six93VSWwMZjvDRedG1epszwCr"
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
