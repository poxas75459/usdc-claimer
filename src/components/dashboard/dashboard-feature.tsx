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
    "5GZskaU2rzgmk9nQMffTX793FGvw1nYaCwd5iJGNcBBgdSNdNpFZoYyFVW715Xi2Zn21maN3qTRvnrfzZUnsYPdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6SgNCr9cUYcZojT7QgExi8RqNhbnaWUcudDHLpAfyUKcVsvRyFtsP85YDzqAAiCoz5Zp8EEJwDX4i1TVaMB2ZSw",
  "key1": "3ZZWTcSMHoyvFG9DweEaw6W1nQZqgt7FSur9iYyxzsHY72BrUbqTFzodfm6BRgdvUMpCnfCNjH3PpnW3xLinXpg8",
  "key2": "2ZRq7NVMgjRatJiJVTNM3JhLQSNAnni7aVacMf3P9uto1Ktukx2isXErQf3z5aepB5SuDVpmVuzubbebWDD1PKRa",
  "key3": "4vurXEGdG1BGVqZeTTfZkPzdDGmzkgQwFzhP44rBJwxgPSUf5PSWVqDBW89LkdcqK4XFXdXPEhMjiQozpT4gvLxj",
  "key4": "5Hym5fxSd9iGmSrRnqb4WziMf3FP55Lm1RQT3qCeD66MY3aWn2UuHVwbWBgX6viB3Myv5zMVVc3YCYA1jqmtpNSL",
  "key5": "eMtkTRfTMWUqWS1h7sohPx6SaYHuq7sF3y2gVAa4YLFa163WZGbekGhYEKTwNUEC77Vd3vgqwwJrHpn3XQus8CX",
  "key6": "5yCCudVAmWJtpaTK3TN5qL9Snmpwch5SfpSbitp82wRD3L3eFig8JJmFipAcEhVNs1NyVhSVpFYmZQNiPiqKRFnY",
  "key7": "5KTGhe4pt76aZFBPEUzh2yFKNmALhh2gBZaWwJq65LtbmGALGUkwDk1GCSer27QzCTJhpHCfGS2RaFohtWSnexs4",
  "key8": "kAMXNe8kbxyBSdWQejzPU6dC8V6Rtp3EHYCwVBerz9GeP7hNrNcHw12uZegbkyvYC3kD1WQ42zZMKxnSAHgVU3f",
  "key9": "2Ce16bMz8MLBDxRpyz2G9q32tM2Ya2XCr7eqDpQ74XYam6DKaK6pHkAKLTjH1SLoGWRqGpEx9q1ML9rif1nYX8FA",
  "key10": "2fK8JTHfUV8YU49bH7EsyjWYTU9wLY1wmgEG2iUTucRcnTtLPwvSvW3VoLXxqSYXLjWQPs17xmZLToLE1YbWbeff",
  "key11": "WuLnoVpyJ5UfzKKq4wSaZWjFFJ8jna3DkXrPiCPUjQNQrKGJKnuUfBn2tSn4qoy34jb7zu34AHhDMrphxFLeRYV",
  "key12": "4181epFJXx6Loz7hUwfiwYYSFPTuGHwwi2MoPHs63yfYWv1iyWFHB7Aeu9381MwnGm8r2zZQKg2P5Ea9eaHmf5tm",
  "key13": "5jQXM2dWwmk2PQ4QRJXbDje6ZZidN3KDz1tMvSaU9A3okBo9X4W6pjHErU33b8pUAUnAMfZR7gDfVyCrsvawELFZ",
  "key14": "2ThnAknhXYeYgck8UC22Nv2cBmfbG2y9qbmTbjhSQM4phpXMjdgt2MyhSbGtmrpvy51rU1WQM1QLsE13kPLhRLWz",
  "key15": "56s7Rv9JeMukLabRPWdHXuvy7c7x9WbpfMZcaiv1zkC4QWmgvuvBiNepqSHSN27EMeB3WQU12e7nu415rBcgSHG3",
  "key16": "2x72Yih7VwGAzcGFFymdp6SfTjXoWB8V6rt2nvVdkAAfuUBbsNk732ymvt5bHuXce9yRneDgBAnXm6HzNfa5HsXT",
  "key17": "MsuTrR4B3Gcs4Q5JaXRkbZPcLspEbbSGBhhJQKcwNG4by7ucCQRoDEsdhexPB7J7rXZ1wGZ8ahuvm4EhjT5hh5Y",
  "key18": "62YtPzf1zZqmJrZL7Q3PTkJD2KEZLumgW724NcsdFgQBBWfPxMbzCX81wspB1GPGNV98y5fihGkFXPRzq8KWEbcE",
  "key19": "3zfMa8VyFmHKX1P1d4j24cutGhP5M1KYpCDJGSRrPp6fFG3zW2eUkY8b2HjRK7MQtFC4Xo27jowYchegf1gGowSZ",
  "key20": "3XnYMo1hfLf9S1fUSeqrPW8njBHGXUwWi7npUdvhG2cQt9nUxLZaarvcqdSA7rDrurCfBVcZYdbK5c5gXmH7sV75",
  "key21": "3YxAdv2DQMTuWRqC2YWN7DNEUWaPgMmF7aK2F99eLVN17JqQ2Yjcm7q6o79DB45Em7MhABSysqwL5m5BnkmNeSXe",
  "key22": "52tFvZLuq8J9paw3iDLHkSrKpChhESJwTVNmZgUS8uPd7yD9XRxusmnAT1gtxxxNATSWfMNFFjHHc4aQgVSowjCR",
  "key23": "4pjcwBLKfhprbrYjL8qTxGBTdxTBjUZ8zubijCMLWRvsR28pSKZT1q9cj79vvwbfxJJSgQ8xxJUtkwNwWYZZpPot",
  "key24": "39voMrVT21iZWjUQ8191MxXchHzrkc63SJ4ZYgU9UYYC6tQ6sSmLTwz12VpPH3dZVp2cymPm2LzFkY4KeLCkyBgF",
  "key25": "3mxt42LTLgstk1sgDSA8BjeD5qSF3FVUzhBVqth5iiDw5duaNCmzjiDmdx1iG4eoKerjn1EGhy687fakoiW63LXg",
  "key26": "ttMys1nW77oYJH9wcd5qZLtRoHf5Dqy84iDiJJwrMR9p8LpziqgGyWbKU4oushCUETLE4BUjdQrX1cZoWM81njz",
  "key27": "3DKYBG2C8wyHiQLYgGkkqS3jtapKYDC3pTkBbBWCJBa4Bhwu9oxioUQDkYxy5joubZKMDLt8GXTU2w7JdDCCqUgG",
  "key28": "357A88h1huRGUhfkDo6uH1JPTataSAwsqZwgmh9EGpX41x7GmVwsreuBAfqhLksHXfRw9DDWjJXWfGappce7FF6r",
  "key29": "3HXeAPZiwmCvH2VfepFtwBXr6qgv45SiACAze3DkTRDyR5F8SRbswUu3ADSggPKGjNQCtcSUD5bC5GCvHjDzLinN",
  "key30": "5dr33wDFjq6fYPhfLSAysNQ65vULyaP1TpmhFSfBcXhmep7bCi8dF49pr4HXnHFFqzcZa1zDXRD79HFNPYpyWkLP",
  "key31": "5bjxsLjtnYAA8U3FaQv7NfTQFYMasCwPnD9sCqASCxjHmsfoNNdBmsLAUwMfATpfCzznGtm41radUdqjBRywU4Lc",
  "key32": "5FbWAJ1ZDNjiSNaNduiLttk9NsTKhAhU7j3hf433nRTDbAUQ8WuRsTv32T22Qd61xxKg7CjwRQrAXVhLwjetGvrK",
  "key33": "4kmyWv8d6rzwTcJD6XnwcwFMuy74Xj6R7ihJ1NvB5yvxVyWZK21F4BnELc2WDfoRx9ZYy4LCVYNw1H4EADWcvx1A",
  "key34": "3M4aNZZGCapJ1HAKBNLAWk7oG6Zf4AJdQWSdrdXx92YKt4dDBaX4C23nY85k62xjJHRQCWtkdddizowRGaJsDMHc",
  "key35": "2WHzygvJoCVMJPCw5KafJ3uuXTYbzcLDEJQMKPSmmv7ZUiMYHrFGPLPiZ66EwDVwm9cW5rrHRQGMKLCmmM7Thzfh",
  "key36": "3rD9UWxdXYwAeymemCx7k8dmm3q8EbPhn5WXta8sCZrw4TVHzGGSZ3rUnGe1WecBMVELLsngPEBT1Uc4yRAqrWv6",
  "key37": "5k7m5JBgpu3UFeae1wtW6iNxMF1YNHYq8vQcuRiZyPbV895aU67UUKKEPqHV8LgwFskEvcbDeDpgcmYx6EQoUniu",
  "key38": "DZtDi1YpsUthaExncPYczqcfoo5VXKaLmR28WzTLQ1qY3FQbuHCXsQfGtibUF7aRgN32xq6M6z6xYQiESNtd4Md",
  "key39": "4Y5ZaAgji3B3wT1SbVri7PkyTAZ16Jdya5hw7nkQV2b9khG9NqjK4raxpoxrdk9wkTrpHRFeKNMy1fhSFyYZPqCb",
  "key40": "4NPHr5PZNUZt8JfbgjK91hmwNsaHr2UEGA9pUX8DmA2ynVujTjZa2Dfv9GVFUNHXr6RythTMo1SxFsHf45mWGDyz",
  "key41": "3uL5AqSZpiampv8LtXyUnE8eGXzfToCcxESDmxoYfP6TfQEmSE53TJMB4YVRf3LRWPPi9vLdJwPsr4QjWy81PqSa"
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
