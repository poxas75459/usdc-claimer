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
    "23MEPHoR9XZ1MwWNT77XvdmcmixNUBKY97aS4sYjiSuKjqFBzkBRrfifevNbMsZV5ZPjZVyR6NTXuqR86E7fmntt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvUSAStai7izeqWghsYQ3qbX2qUbmLevAQ7gpJr82DnQiQsdcuKZ9xZDusfza7njFhew9i3zXNnES6DqBHxjXzF",
  "key1": "3ZiUmC6qV7ujw4uuMQmU1GhyD5dEaMU3DJjozA8q56JAX5nRuLPxfU3cZNUKsxXC2poToxYgRCGySxyiUWJK8FDc",
  "key2": "46Lx5qVEGDd1v8ijwYo5ExJX84Tum4jxfXiNDZnv4WrHLbKLzJuyKMeamKbaAajMm4bAJaPdDvs9yrz8HLnctZR8",
  "key3": "2awkV873u97ic4YRpc74Yh16tQCwAEh55ecPXFveNavwFBjkbPYNQB8XEM2FrMfpQnD2t7yj7nyKt5Zbfk9AntTP",
  "key4": "5eWBGtaMu9ZBSCCHvsPEHR3YPphDEh7LwLjPDcW2o2V5qaEFj3d9g65Ar7Egxo56R92PVF5zXNAZZc2zFAkEfUpd",
  "key5": "2kxUSD6rYZcoFcbZceyg3ieBnnWKHMMq2nSfikjdzumsoFt8DWaEyjLX9YKpKRhZ9U2xiTdaoMGcPUmiuLRaLvgf",
  "key6": "31a4mazGoUQE9YL8ue8dV7R1RfA8p5WwwkLyU69EnngC5YzUqyBzerkEqJwwyXLeHVbyzLBTrezwRLWY9yJcfv1",
  "key7": "3DHxxURDmSuqPqoE3U8tkVCDEnu3uDCiHmSNkhaG3YBMHzqWETfLB6azAsUpKtgKFgGbYFRh3qJJ1gQQHipZiENo",
  "key8": "3krS57G3Ys7Yymdw2HL4jP8FAFLtGYHVGULm5EE7CrE6rByvxi782ByDrW3kKTPru5ByGDcr38bxAKJXFKfH5sVj",
  "key9": "2ereS8mikivHk7KVstfg56x4iKXsJT2BUaeuMvff4dJr95tbhznQv4xwxkbobxjrScz4pEQ8QETrU24qRFpvJZVN",
  "key10": "3q2qkhdGvtx73qwthETZaGNcdHwvjtqNHhhoX4vcaoBW9tCjQWkrknHLzwV6PXdhJSGEdrQEBWJkfnimFw8C96HV",
  "key11": "5gddntk81RQS5oZr7zTNU4K5or4ZHWjCDocdEvEpTUMd6dZ7hXextTWUzasCUuHxEqVAJAWxmfRF8gRJSCGjQ3Dx",
  "key12": "3YmdbCd8JNzuVAQLc1bMBScm3s4DFa4w9Q1vFHEGdQ3gPvm3ZyBfiTKMLcvwMbYSPHiBRUnL2UhPoLJ1i6QkuKZk",
  "key13": "3dmAoEWBDnH6F1mpLzLLmoygYTeN737ViTNR2FA5GHEEfkXMyrBLQEvyHXsHi1oFEnew5L5prVKUy2DP6EpYRo7n",
  "key14": "3DqcnU3bfAZ9QSsmbBQVuSiXcSmiANzEPb1iEycqMB4EHP7wbqMEi4XWNSkNXHBLeN2UMV2wG1oLELmqhcTN6C68",
  "key15": "4hzYCJEoiz9CMEPPs1Bs2mRgAi6Pb2QYAvnfZTDowRmYzbgp9xu7caeLkb9WRjvt8DdNNi2pzArt1MaRSLMHGt8X",
  "key16": "hEEkhSkLkgSDDdARAqoc8wernEUUi976VovKpFcGsSQCvy8NKPxRfWceNiEgAuZdqzY1FeYCkANWH1Q7QPmiPt5",
  "key17": "2afwZrm92KFjEAMm2i5fS2B4vsLo69AGsyr4NQwkWPdbgVKEi4EWJ58s4dKETUYu6CGUHGq4ZXyHkZThBQPsdpV7",
  "key18": "UG8ipwyGjDXYAqwdvGvx5PU1tA1uGSUgP6EmhRS7S4FhrEFPSwazsrG9rNS5zPso2BLVoB2kaFnajxDaRM2vXMJ",
  "key19": "H59911Zrv16VciAMuv17ZiWKmRuaHCNaeG1Mg9LuBx39mvp5LwAKEBA2mV1PyhbaEavWmXmoGp9MmnQgzEgM5uv",
  "key20": "3qKAdeLRzhButr5pfnceKYh5Wy3yudKgXcAQ3ueX1pnfMteamw1But1wvexPiRKpMPjfeaxNAs55AsXLeJzcjA6T",
  "key21": "DJp7LV2STh8KBrFw3xK4v4fEdH4K5uoHrPRfyjbT3Z4ES6AtbiFk18kLfEZSpqeG6rgY8GPET9pgwd1pdJepcBS",
  "key22": "26TWpjcwjiFe1gCLvJ2rS3TsmUsKdV4JLGHNd2YgWMt3ircc62s4pSaCbhfqYxPKgGhf996qUDCae7WUv5FKMZn5",
  "key23": "66jkeqxxkqUpoRkgQFZbyDTh7wQZVdnUTapKaQM4S27xACRQMNKV1arJYvrqYtVTEH69ntmK993qno9eqVmkGDdK",
  "key24": "4wHKMERr36tfJxBS5P7rfZLvxygDf4LGmobk4Ng1bFWRqs1qUeEG2LvNbuHjMWpKpRRPETaUujxWzDBRYEgci5eS",
  "key25": "6phKm6c489jR1frtCEFAU4F5G36u7amwQYL6d1HxEfmtKkTMsSkr3epPfvfMiY3ci9axg249ZtmZspP4C6LaSHC",
  "key26": "2htXQDZPfeFUfmwegc5xUTLcHQha8tmnyPMuJL5EQsCJSEBHdEiSnSNx3B4Bq54asJz4YUK8vs87zrAGfiG9V1x4",
  "key27": "2k1ksjsnc656XWjXuhpTwcke4H8NwsAGQ8dW5tkUKV66b5qquWH9ujEe2CHEET5UAn6p64dGeAF2MepsuGED9epL",
  "key28": "3oR61CBmqYw9jGotM2ztqrhZ17ZHGqbf812bi1g7GpHjF7p9wopgTHsAoHcXzwtpNUKT8fbeWd9qVeXFUvD4oH5d",
  "key29": "AyRqyreHwwkhsHuXAwdqkL8YuYbeqBdGtm8XpssdSmokQjc8r52dMNSCq2zE3bW3iUGoDtM7D4MpT8cCB5yVV7a",
  "key30": "5cEgjjtVcAVuQdXENnwC1uLenkHiYGvWHzyjPYm8xUxVSR38iGzaBra7uThgtjmePW97TBw7GN26mn5AFD1nRMdU",
  "key31": "2thhjP47wawsyaHEiXNkTsYRqDmjuA185KxnHxCDfuDx52ubW5CKCXWjihA6S4ABH29xS7RF39RB31LBUTWUbZsG",
  "key32": "5P6QzXiYcBHNU3RLPa2AGc5cRysC1PVRRkZLtCwnqUydd7yUQc7s8MCJ5VwBdhaxSFruxePHCYUMLojdsQzZrCvw",
  "key33": "2Z2QbQ1azan5FYt1L9P3MdCZXCM9DSWf5aKYHPp1gFcrHkHS4tTG1CmkriYB678SQt4mB4i6Y57AcNQ3DQ8Zznfu",
  "key34": "4iQf4NSPTXNE1yTXqgGY9fmCVNRMALGuGvDJWJRqNynXsXaqSo8PEKRoWh3vpRBk8CmjB3oFizy1LwHgu83n3rrj",
  "key35": "5yBTpPXeWUw5YqzwJ4RUDACkWuCtJbNujnjW82cyrncCbnbNwubWERZzqfFwptm89jqJYUC5HW1rQjfwy1Bqj6n8",
  "key36": "3drJYecgs9QgR8LWPZcTcLo7GxENYHnmuiUBKNVyFWJQzzTYaPRL9sjZVTsgeiwtphLQf4ZEQ2hoPSyUkvKtJemg"
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
