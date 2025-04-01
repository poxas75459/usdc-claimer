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
    "5MVPZG4XjwCGsXWEV59R5Z1r5GbKzSsXTq5pFzJpAzF8FFif85VY6WWG6x7iJ3XTt5MaK8GLwQNb8DEEJoawXRNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qM7hTeTWJ4uf4pX3MmMGQZKvKrTr4NFWdJgyhhbECLZjZCxMVip8bHwsZ4rKAMpULujWtpabeyAvhTyVmD19t8L",
  "key1": "3JsCZizmJfCfnkhVSpmQFHDvJfpt9edWzFbi1dBN9uSED9d2DfUPLsyddVAEnfzYJi1EAhDpxeTYTGXLJqQTnNwB",
  "key2": "cZo76pBc2ha5FHa5jAqjdJ353NckudbEaF46ri7SSEeeKUemGZHCgRbX9Z6QvWsSTUBJrJFmx7axzAiN7vUpWFS",
  "key3": "3cG8JUg5qDkpXxBY2KNo58sHAFagLpX6n8ohNZArob8ougmtjqKHueAnHamvBvN4Te4uB1tDnb7skFmKDSjLagEU",
  "key4": "3yM8xEb2bYkWatLSHNNfnTSFGSoBno5XndthgLEPxAADjC9ZpBjmBWKdCRpiRBKTSADgSVhv1g9euCa9Ws6CBnKR",
  "key5": "5FU8SNHKzhWvhV5AGABpoSsjrQrpvrrGGwc5P8ZuCz6QCWitQtNKAFS1HLt8KygRfqPmCY1SEzer1v3KbGNxHymT",
  "key6": "5XwTJ6CuRKJsTn2vus7D6JFythNCvtRY4hKhyVQwmx1J5gJ7VEnrL1Y2woRuoVdYmjVCU2auZkvrQxzqQAfYUSwe",
  "key7": "5sCD37AVUHx52BvGtcaMDdmfJMm6pKHCmCkH3phkeYSdZje7CkDHwMLSR6wB68b4Xak84RHkKPY4SpRz4NgrAqcZ",
  "key8": "4GjWMsihfhQNYnaKR8W7XhVAjmkScscpojktxa1d21WKTkY4VPeoxD8cbHJ8ifJCqfQiDdYPKgr96xbZWPMeUpDq",
  "key9": "499sFwxCuBTUzzPdJ7KomSr4DhicCmRZ7q7md2ZB1ZFSB9tsCCBUAfZ2zcmMQKKruXysnUtXwePb6iSWe9TfMcb1",
  "key10": "5orCDFrv9yeApzzax2jCKHYGsvvzGGQArT55DGif4G6qQSfVfEaSxr1nsizJNBAkfn5AEtjjUwyyxNW1NWvu4uBt",
  "key11": "EowiiX18ZWRKfbJhh7qVHXH5S2KGLKc8ieoqKaAM52UCnjruRQxu6odHV866q3AT8wek1RYJuCv999F1FJ5JDxz",
  "key12": "4pYtHgwJnExdq9nXYR3ifodLjMacaRybXRKqM8gwTJzEn19b3T88W7nnQNJ7XYPBrR4jsWVx6hrZEaoHDwzogCPj",
  "key13": "5WnygLVkERrCgzkMUigJLLosePX1usWX8oYq6LgK5hepAXEJ7AZDfC7QGNZL84Yu1maV3SaWv4STdMkqKdcHrX6d",
  "key14": "5VBAZhtrzg8SCtPSBMMUrvpX3LTyC59Tn4eZhCUEPnhEwUBN7eLoAz1BA7giFN979umqqnX4n22sSNQ28tRQvLSM",
  "key15": "5wX9yXSgyLZYxs9sBbJrbcxvcVyz3BoSBTaYth23iwtQvAcge3RpML6adGMNsVN3swn3Q3WJpGW3bw8JTx4mQx5g",
  "key16": "3AggRbmYXxG5Km71Fftyx61wh7hcUpD2io74zQyeyZpMWJ66Am9DJ4Z6JdNsxnSN71m3T3oYVgTifnHL5bU6CyM3",
  "key17": "5fdx4ZAMDN31q1XcGy6HVTaRuxkuVTrTTWhWDbTML4R4CBK95XdML4HCAzTQWLvencg3g7R7g1Vqa4ckoa5LnKPJ",
  "key18": "4UWZiDDpyW6mYtKsHn3iL8w5dsR3Fzqcir8MEm4uS2vpEv84LS5FA2uM45aCV8jff9t8AMjvAtHdxmgWiyYp3SxB",
  "key19": "2uuhEa3QatWhrJGoGeR8UZDxrK6sbwbAAU3EMHCyxpfX7D9C5U2N3xv4avFY9vHgmUc3yURrVqE2anYcJK9QF3P7",
  "key20": "4t5SyvzF1QrDJWBrZiYWA3VfMjPG1Bo3QsABoFuGReqGZDq4mtVpJ2Pz9rj8er96zbM7c5kyRsDFy5qALBuqvpdJ",
  "key21": "2YPUgXzhDVZx8oyzBeC2z6JKvFxSwDPre7xLioh9rcykdGosVXzuACaRBMJEGWeuooFqMUDJ64LfgdoLERvBkQGT",
  "key22": "2ezf5LWbS2LViGz6wY8K98634UAhCYp3AqB5Wi2KZmCwcbqUfJ1MHzMkUmSuCc2yTX7et6o4nEKQP1PMXg8cNpSg",
  "key23": "29oqBHqzDyUmHSoic75Y9AHuTEkNWKPcyEjfJ4b5eL1CeDMqjuCeDnKgUqUL2qn2rebwbBazWBH2Mxkqwrp2qmmB",
  "key24": "pevqQQsDrQG75cnQqc1UbYGdFDs4qdSxtYkqf6KK6JdZKryNFaXAhvojvw4u5Amqk6gD7yi41YL5632QTJzqoat",
  "key25": "3jqNqzR2edMkxCbF1cT75GQgZvEPqoFErYMzaknZ7WL4k8nkrQX2JgUx9URHP9MUAVnwGPiXb8k1xDcEjrMWuBX2",
  "key26": "2MvbraXioBW2G73L8VzATntgvwhAfaRoJpDAuke8Vbjfs6HD3ayPnZ2yfR88SVsxR3Tjwt4CZmPvTV4jxieziC6K",
  "key27": "2b2aaHigjENYkZPmKTaS1WE46tDfPrWzvqbXPDLX7M7vqTxywi6kZGSLWhnrNcuKW5DBvKwkZPqcTrNwJ2ssAKS7",
  "key28": "oMS7J6CtJqYyPD5mH7TY2rmN4Q4izLQUrfxVNTyxRnWqLYHmhHnMWAy755L5sVyZTrY1WdCXBUGKqaWhJmU3bZx",
  "key29": "26agoSg38H5wtcy1rZnHJd6yyhPgWYGKRktXz5tcmdsHmu4zi3Q85tXoRg8wgshBb6SsrpBAvnCC9waqrQo7DXbB",
  "key30": "2Cs296g3Sta7FJQUuTVD7F9m4pdDgtcbBrGXC7xCiybNu3MHUzQMZGEMdoHeqiTXLKs9m14jmhcV9QyrRdgPhtGj",
  "key31": "5jBWfjfp3Kjj8ypuPV2girVSawJY6rSwEGCrYUFhjF8kDFppDk5mAG1eWk9nYwm3YazrKJUvL6DMzriSPB6qHwxe",
  "key32": "45GnjZCXQVJ4KupjgpbH17g7HPrPQ7Duad2dAauo2RVgu156Ei1HJgm5G9sZwXs9eRKXRZE6rwBEEDXdhvmHpN8Q",
  "key33": "2ZxAdKLvPYNhqvz55YELea6t5Y5p4SZqVEaXguxNPEsx2XeMphnn9yewcRAaGtYhJ1WzBdDULFutdSaCHRWKUwAC",
  "key34": "3ThK3dHiT9eM42YZEYK44sQaYUbr8M9ovZpHzYo79Ppc1KqEpwBvB2Sah32BWS5fo1C6XzdCq9jQS5aD2GjvMZTQ",
  "key35": "3EszFH8p8kU5pZ5vh6yBynSTEwB3vTAm5mAHX7qxkBgofEZdurqvRCgmjZhrVJhNiUn2xJe2KUrToENaxgEchRmC",
  "key36": "obx55E5xKv3PM2qowt6t4n2tAdo2JrsGKwYQ79qdkshQhSfjiTjTHhX4GLTvX1hmoGeTcoRooW2yRft1uKhnmoy",
  "key37": "2MrPo7Np3E9CNcwF1cim5LHxHGanvvaZ9ooV6WkQiSSujof1CG8RHUonpeUDVcowCsJpEATu77L8acQQ65RQRBMm",
  "key38": "2j5DpQvo3zfC1hCXfTsfGV1e7skQXrqdKPH3zV89vKK75WFrkagdYkUK46KPHeWJdYmWEjYCtvu32bXNABY2Tz6N",
  "key39": "2zgjEp1hWMRyKhSJ5ue7yjemJikcAHefJrmbv31ecKrDdQt3cbDcUPP6ShUu4gk1y3RkLuRL6Pwscg6qtHdXU85e"
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
