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
    "2AzYrVuQgVLWucqowocYJy56Jw4HdAyFGLTQHwbB1GxHEqmsjNw98c2nWaTWDEHLAk72wRvMDmEg4krBCQBWTXgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGsk2npC4iePTfw3DEZiYjomKJKiAe3GUHSMWN8WecXDX6kP5ioZZzCCVHtn3c3aUHxVwUCsBYmQn6SCJt1WpdZ",
  "key1": "5qCj9BtdYnu7KzXnxC1618dejSwXqtZezuHF3XYrY9x1bXK2AYfpye4K8wEk1oLwCbKcJtiTfHz7aWcwnPRftx2f",
  "key2": "4a9rVwg1MN4iUmDzCxeCzizQjjmjx9tYWh1hacMyEvtCj2e1XBRf8c7TMLkWM1NcZAkdrJRqdocsBEmjcnywHfwk",
  "key3": "3LEH1F3155dgc4Cu7U5a1SpumvCH79hvvgzN8Jksb1gJ6k3UNYYJuXgvxUhcotEjRSCpUQne2quddsHya9R9W1JZ",
  "key4": "2WqvcbEtnrhQbjtpXshzCkzDVznPPYgoS6ec6QBLGqvJD737nScvaUvfMq7hzWo3avezLoUmRjMCWh9YdnjinJU6",
  "key5": "2xEmD59i6NSKNHnWMfLGrDQvqoW7eb36z6PHUXLUVeKhTFRGQb7hJtm3ZJfqfFUgenNeyQ7Vx3fSL6R6uXrYMc7n",
  "key6": "24S7J7eSYSmtbHoXfn31GGVL9tXh19b269orTrGnYyMAb8sGVdxwwRbCzbWM462eYUr8PzA9NCXA6Eo4m7AMZwAY",
  "key7": "477stW7C2dZ9hqAjBCYXqgjydg7anaNu9LAqgWyn8DbeMcrofWoG3ArXpWbhPGdCTHtyb4BjsefAMozHJ8hcfcrk",
  "key8": "4xP7GFtadHpKx9VmoGp3PLb4WeH9tP2p3Q2od7SiXxbrCs6VuVCEKSWkYCFw4Y1KP7cSCeVWXtyVCWPo2ZxSbzhH",
  "key9": "9s2aUjBUoNN9pBEKBp6WDq2oeBvaSpnPTKT9UskjBd4s77druFnikZoebYi9jjVPnXKmr95oEJ5wZphBNcuk7bz",
  "key10": "8acb5CrnY1saTmn4XyDuBeSwTqMxBTrTZTVKacLybZcP5umXdoDYhQH8pbhgh5aTBvTezgcn8E6Ywa9cEWBM6XN",
  "key11": "5HceaTNw8PMzRqVAqvQ8yjEJBWdSoxs95xrWu9NopkpyXB9vQZx1zNyFzKyZf78AX2zhEhnWo6x6P9xqNSkHvW4i",
  "key12": "4YN1KddZKcGw2UW6tApoBaQKaxeYva2G86oJrnGMb8zvw2SZ3q2BXQ1ZtX1nNzfYGiERMUqXF3SA8f5VSLVcMDgp",
  "key13": "4L5jwmK8n6WnWp9uxLYLZEF3wDU9RGPgnDGJaoxqLBozsrXHgvsLvQyMs6jSk2ggK3HGMbvjZzY1VH15RwcGNv23",
  "key14": "MJs8r1ioBNURoKmpNxowd6npUWPzBCkqtEDR7tHqWZHtsvXVmwKaye64A4mNEvMXJWFA9Skhf2qKkdWm1mjdq7m",
  "key15": "X6yXrHixrDRNxmB7XBbizCp1YZLq4RCaKoYFFtJ51pnEPwYGJFuB94YKzKnh6oKZJyXeqYSuBpjymcK5q2vJb6b",
  "key16": "5B7g2hDJtayqKVmkhjD1VNGdBcBcxAeQUZ9qfpc3PNX6LeeMPLYh7Nj4vPHaSjjZMZncsoPwdBDuhBhFHTWwmLm8",
  "key17": "DB4sDt4U4x8F8Mn7RbMz5UymMQeLuqKfEvbA1dMxXmJtgsTtoxxcenBGiryoZWuqDyfMBg6BADExGCeZBfYwiAP",
  "key18": "5Ji45PeaDt7j4VVBrquikoqNy2SkAyXymaMYmJnENCo4AA7UXQvRoyNJzc1DiMbGmR1CyJbdeziWfrGbJPs9RvBa",
  "key19": "47Jwan3ak4jk1PnerTTb2fS2zAPZGgbYwU1ctW1yShkvAcRbZuGU3XkpLgaK7WGcyJKSvHe6p5xEaNagPNECuv7u",
  "key20": "5RbxjVEB8Nb1QompYGCfb8GbYCb3YLx3oMR7AcXkKJcyDJJMWKujH8m4BsBNENpHXXym82nnTJshzuJ6uCLbexzv",
  "key21": "4rPYm64y7VmazDBB3u7vkYztKPpTiiBFmUEgyiQC5uP9frfgYc3i21MzpqTkasAgdsD9heJit854cp6Hp15gMsSo",
  "key22": "2WBpiGsXua9wmig17KHojEuGaHAACbabnHMbqYHUtdAv4n7SbuK2W5r9fpcaTzsbWahGPLFriEkfNuhNDiT5vqfU",
  "key23": "4Q9iEGmYrowKWtGJLpUYaMbtRcj1K26oB94ZbdcbHDf7oMLAVLHuDj94Y1rUFrLFnMapDSBgVjstmV1ogYsRqiEd",
  "key24": "2vUws5nsSmfSmwjiato55HWrjGMkCALh1vnaccRxA2GBvopRcbfrcaGWZHEXTGqkDUmF2zNwXdf1pb6y7Umz2XwS",
  "key25": "5VyPx85fb79eEfcRx4UeUVm17qqxAZUdVshmNvsN8xogx1AWRkJTAqVrmVZVagfT6PTAdKkRBMZbsR8mHCwdA9Ee",
  "key26": "jUpaQdoUiF3cdrXEGLUddkPkcoYrNMsRjQcDiaQvuTrH9RYHx96HoqCJsF76MyaXLLMYwM8wRp5EfLUr16nEpPt",
  "key27": "5txfejEtnDCj14ru8tQjacVR8SGjXmC6j1H8rbjcbeX57H6GkSTVPUns9qNqGq8Zzh7vcZdr7cMZYtZVDSML289i",
  "key28": "2aSTynmNTwuqtYgSXstQ4ExHiSW261X58AUEHZEq41poSQsxTVvx2Wzx1yNyU96R3mbzx2V8pdB3qtndKhhH36Qk",
  "key29": "357wNDqzupnvn3MjvQHqUgsqm7zxXFjJGcNUPfDeb4MVvsNs8yJZpKHqP6bnjAT1b1J151dRG5GGzjsjjkpN5LJ8",
  "key30": "4q3W8AokeVCGqbo22g5ZNJPPBbTq61LnRdqkS2Myapvr9wP8jiqqbhZuXr1Lx7bXsEkM21bkXQ91enKfWfHcypFK",
  "key31": "2osmUPBosG8zkQSseAZnjwSK5cqtvCnX4KCNe6JUx8UavWpXTXr9kh9De9bGNXQVmff9jNFKi3s5Mtqb67xMESU6",
  "key32": "5TU5QgEc8WDpJysXhjWekHYG7kE9HCU9mrKBgZVTaTCFM4LZkgqW6cHZ4s9SwybsLw6uW4sx1MSZSSQiqfEcTFwB",
  "key33": "iJb7UKeWQntsJ5VcBAh37s6FSYitbpb6eYfGSKASCEUBGAHbZ8zTDBiEJrYvint4JN1ZkQk3es8Vt1M2ng1gHjo",
  "key34": "5N5Exd56i7MbS8CbY6CANeCbhN8VNA2SZvQw1RBmoRFKtqQrhnQwjvc6DR8KePRdBpcmg5T5j6rsfNt9bnR792qE",
  "key35": "2gBH5qTqcdrh5t7fbVFAE7NEXRVD4cZwVvGZJwWQ9CNbX5YWNNHELHAaT9ht3XUrLaEmzYSN4Q6cAhJbiSqYh5vF",
  "key36": "2EzbeC6jM2GFEX1ZaqE12kHoDg4vtTrZ1Lo3VXq5M5cLUQd9YGEh1NFp9rsVi1HapXxyTSn6P8MngDTwQxPjSodV",
  "key37": "2umccER24DgHPFmnDSG78cCzoRoexEBrGWxBvthfcQMc3ejaX6wmXZt78S18gHpf1LCmCBSarijUv27p8eVFg6Nh",
  "key38": "23cPDXxfuDNqR4ZNDPgJvUhxdiWrAmxNxGiw9jX2B5QS5Wkrpfc6xFych1MMd7SEnwhtLy6dKMhaajSUfVkutoaj",
  "key39": "5WPjzevw1x8edXZFhSujVTEJVAP52DLVm1gmPWXdt1WQogJLuEbr8rRppTbwfRa4dc1Wkiu1z4V8Nd3Nf13QHtVC",
  "key40": "3ASrA4hu7wPzajDc1noui3AjyHA92uTUxwDobx8WMoMYkXz4wYM1eEE3reVGuzNsLmMvzyGfSuUm7fqykgaKArXW",
  "key41": "5GVywC7e4Hy8vzws2w2W3Qd7xSMP4Ya9EPbXLHDevh7hosiKFTq7dg2EYv2YebMMvZpGGTW8DNKc9RfbXvQCngy5",
  "key42": "4yP79C2PVyxqR8ivtXPmT7xUqvbtTTdJQMiji4GemJZdCnmtrevfurZrgXw5A4hdGZHsakwDW4BPpmpEGQoCL5SP",
  "key43": "5t74r71MTTUQ4moExWsjDJ7tUPgzx42Sb3otcmXQYkE1jwkN6ZURpVae2AjJJ1aneg4JHxz5woxzbqmYDPj7WCBt",
  "key44": "3JaqKchwdCXk6KjxKka2M3fyq8DNTsrRvLv3i8mdbP16WZPVzCc7ca5aK713UZyx2KJu3wr4h5SJiNc3UKKC4j2k",
  "key45": "43Xcp1mxjh6KKAacUkaYo7okWYwjpSZCExzRfWbronJGFudD8R4TGicrCTfzAgnS22ECXswogq6vG7tBguxtkHA8",
  "key46": "2pKg5Muxa4s6Maano1LfDLwkVS2j9tQEePT6nsuKZyoDR3P2xuXcxEZRikcu1Kvcb53E5MCYbzmdpNP8orwz8CSn",
  "key47": "2hwnWR7k68dtsDpUZqqoRCLdJ6qXimK3rwyDX9GQ9DGPevz5nDM51KxhhewQvPpePVYptWz2YtsPJo11BDnzXRm8"
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
