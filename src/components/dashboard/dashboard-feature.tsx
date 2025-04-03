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
    "4iKRKSiy3WkTaDtXdMhWuh9twpLfa2fwF5FfJw4GDxBtsWQuzTvGFT84E82FvCwFSVZg91iRPpWbrtTnHaNtVcmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfLENmzEfSRM8bSACFLBzFNqY3ZZ7CiQdsA5FEF4HePCh9JZrf8BZixkn5XQMEPytY36NdkFFdNC34Gu3noauAW",
  "key1": "5gUhTqd72nMNWBEpUbo4vz3xPQKkLdhe5dgvEE5VyvrrETvjxaxexxMacepMte6hjLx2Au4b5GyamzAdhNjoLapN",
  "key2": "33B3qsAGgmgEVpmsgWXddY8SeN51KfEjdhQYCDpzCkXu8FPbU9dr2d1c5pMiSEdMqnJBWnC2DJphgh2iZYQNd1EA",
  "key3": "3Edzk5AWDk6ZGRQYFQRFWuVnb6QZLoPC4fGPvq1zZFBFH8SVePq1NA9cRTszwFz9bXiaB558xffoY2nnY3uQ6dqC",
  "key4": "3iDxmasfyvAdcMVc3VLoUP1Di2RDFRKbDi4WV6MyqYQzMv3VK3wGeJc17ist3at26vLoXxxLxoNo94kpuRu31L6k",
  "key5": "4RrgXctmFVgEQ6ZAuUmRrB13vn9SUsmvBNZdQBMHcreGuaJFiTLEvYxVVEMoVbKrNhjbBH3XG9rdmKZxcGWdojtW",
  "key6": "23C6RUxJxHqzgKcu2esp5G2UcArbxcZ5z6HsATyXXLWiQEqJWm4rGxsdznpvYXaedcLQ2iqvBhcp7HxCoP2waVz7",
  "key7": "39TXKmNMjw6gtiy8cgcwzUvbAHm16a5zdcNtvei8oS1QVVmC4p4dbLKTTxqsTnpVBseSgoZrRb8t5qpivAfnMQL4",
  "key8": "2pCe8mp6rizvrv3fM6zyi9UasjFBZtfD8kg5hMDwuAej2ige6Y17HCscq19uRzPBKWD9HtWfATuaQudGCgfsQjyC",
  "key9": "2u9N45HT4uvpZAqj8ZfotHiyy1wfWBKTmSVJ2VgqGPnRN87ffvsouLrLfymqTd3bgqkDkbZYM7cMUFguTergacy3",
  "key10": "4WjyS3xSkyHuRiDMMDkaHTKHd91mctJbGWFJPSeftyBMQK4yiWfVQjJ5bwDXi7QjihADT4QyxoFxP3zhfqWhzfFz",
  "key11": "2PKmXKriVrBTsENAfXs3vsnxC7mTFuKb73hvW1zGRzVKCWaRH8JTgqrsGQqvAZp1v175jZG17rpnUCdPFztiAg9K",
  "key12": "2Kn3R8zcjkLzvGaekSowmf4huDLBz6pbP9ik48ta2YSqWFnAe7Xo3cNNMnN9k8Gj2iHSvkVWR2pKSDguqZRUzboa",
  "key13": "TLZFQGUzKWfQuE9viDMn7XgtzwyEFx4hiLjohR1qNLRKJYFZ6CeUHeNdRicfrYr5esQnLQwd8XBB7XuMp6Q7eTS",
  "key14": "4vpFqzbHznt3bbFzCEXKor1qzwii2kiyHYcPfPsteAZ8bGQYtu7No2mZVicSp62pTvXwhdYX4abPzSQSq6RSvJQP",
  "key15": "3N9oKrWCEgqZouKvKtucrgT2vFtjRcBcPXw7Ph73zuLrcfUddWJwQkHam43xXY5P52eq1ZuGDgtaTQvmDKZb7mvR",
  "key16": "2Cd3iyPeqjejmUwU5pjPCq6fSJt3aZeoGuwKdDrk4zycdToNdp1y1FhaX21nzTUbiffoCCNdKqMgvkyUo4JkWSRQ",
  "key17": "3TFmDho8FAzkUrUMWRQWQTJnv4b9CpzspoCreZa943QuwDnqeWNw5tbdzrYk6RZ6EbpSgcUKbWU6Q84GRX17FuUz",
  "key18": "5vADHPpffBUvm3jJvgLJGXSHn6aauizZv6yDdcNRrAX8zUfSNhsutimzN3oiVQf6xtxiXrW9vfFbUZAJgWLqLS8o",
  "key19": "34deCumDTmXWuErSrszuZaM46KerR9TjWKTy8WjvPVSCCqpTQdDpCqtjpqrvMb2877PffVTnd7ZYqCZg7oJt8Zvi",
  "key20": "4dD8d7sh19eptFQVzj1bMm42Y4LLptJ26Dso61nnbxuATMgzLLZkzJvpAjVFrnEMf9WT5ZAoU4GM36bqfH35YCpW",
  "key21": "5rFaj1qdDjqsVjykwhZpUz77beNUzecuvMMysR93fEcYxCejZJAnLdRmRdh7TDgTRnMa4QcF8ZguxZALGeqExhUA",
  "key22": "3o8UM2jShhsFHDX8k74dHq1z6uxkpmPvzGBShkEAfrG6HdvWGWApmsSHn1pwpuMPihGts2o2VYdpyqh1LKmLJMGz",
  "key23": "4r8N82nudKoUxZVXP9X3y9E2gBzDLB96V8VFwLKj9AP6AfqEyDR6oNHCX2EfHtxkYWzekksNzurqfzvS6CfjEynY",
  "key24": "67UeGaiqjq4imyPTTGDSZaadn1wLeB4ssUve3cZuia2EWQ7pzNcp7zZSKTgWdBpkn1519x367fZtpJ2LsMSTiJ9e",
  "key25": "Jkxe1hAwMVDtfLZWxYg7qWEDVpQ7W8Ubb4wxXgUCNk4eZgX36jyFV4Z25HShUDX9woF6KeoehiBq6Te7wP5vDB9",
  "key26": "31cnWvnooYsuUXL5rDfyaRA8CNAFnLmte3BZ3eqKoRnc7x3UU8d73jAA7PT6FZxgae4Htvha2fqJtoKFrZnTPZ33",
  "key27": "4MZbTRiFYnopaHzthTezTLJXtewDG9T2WVHaqzvzmZ18DoZL3QvkKw9QAYVe2daazQ7wjw1tbT1E2gBKqU2mF9jN",
  "key28": "2cX4KRuAKSf7F7BeaViUgH7PRQmAHtiWjTcgPkMUj534b5jDe9BM1wthvS4KoEspXzSW8RgScF6G5feCwt777HuK",
  "key29": "5n1xkwjrUyRNVsqXx9mDMykmKHxfNd7HSZXxrrfpsjEYBFFP2rCfqXafMbuycJWpCWCHaUL55GncrKFxNnd6XaDr",
  "key30": "4NSHjSULRRRH5RMDdVfUwLsWvzhYMnekGaqJz5mSP9WqAmnAzWgf87QbCop7xW3oKjwNaWUKmkv2CrAJ7YReeThx",
  "key31": "4KQNgY8rM7ajJ1n37SsfU63Se8kgwW1yv1ZNAA4Gr6xMxB7SVnunp6sVkdWnbcoNBrC8YFAA1eFCKM7Co2dkmdkb",
  "key32": "3VDGZUhg6WV9RWazyKUDXQ35kwsF4GfzdrZYESo5MVMVHxFeRxq6fGUgyyciMhKaRtCaVQe4ru32FVS6N1qqjJ8z",
  "key33": "2G1S6Hw5MEbtpRHwPuySKJjbnic6unEVAA1D6JQFNXL89HZNNmo4EDB9dXBg74yqfEyXL8w43K1aZPQbmgTqrKnZ",
  "key34": "4YHesUqbesu7cw85a3YXM5VsrSiogG86wFzjtAy3kRrNJJMfw5DyYX7pSRWogP5pidpT1JMGenHX1d4E4pPNwwxJ",
  "key35": "4o7MNE7wtpy6ZfPBHZ2Nuo5EAh1bZE3wxtQLxmLyw6L7VkT745XRKZRbYHuGTP2H96dAtTzVEpF9n1bLJsPghxTg",
  "key36": "2X1Ap5cRrA2knAXetQStbQ2h6RZafY29DuZSV2tBYxfm48zD1qbgtErjrYAk1Zw2SXwawLUUokqVMoECnsGp7HzS",
  "key37": "2k6xUn28Xy9yrinEECate5YspZzQiM39QXxY6LoRqi5r6GAtzjsikvYWPdqUbHUcvJ2P7u7Ki9Hsr8fHPAn6uQbw",
  "key38": "5s5CZ6hdGeNJUoddz5u3R5WwRJWgzQXABrDDabBLz4fx1XhBSn6b2MAd5BsEXqtP9m9JJ2fe3hPNp1cPCWooXn1Q",
  "key39": "5vBnAQvQMtv45KUPU3B5VFMf4MCRARodPN5esDgkbgmpiaiH1jWx2aFYJPBgacyWfSwx7nSa5hGU4gN9MiPsg1a8",
  "key40": "5KDH6ruyG6v1xEXFJ1WB9wsevWSvr2xTCFeg7sj7nMeStrmRQr4Qru7URevGbzxWhfmhdoByTCxeyE1zLaeALB9o",
  "key41": "4QsayDmNzTfwLyencKXjv15TEZJvaLpgjNHM7nhDnKRbh5LSZYRp2oM5f4LvxqrfeWd9BPx98JtS2F5pRi5MSFBQ",
  "key42": "3N6Ta7MP3kwBrmWj3GE2udWr1YUTPfhGZYCgP8PHkvs9cSaXyuWLMbc9jv4gRA4WG5EEZHDNGbpDs4KreCukKKS2",
  "key43": "mXofyDZYCbqDaQvaSKdMJHGf9WQMCoS7p3dLYoP7rAMmrgsz5hPiRTHJMBBJEEm3q7Tv7JLsAr3RhfiSCQySxAv",
  "key44": "2RFxHyMpn5kF5yJEf2v69t3Wz6bK95vAoPBpbMNsRcXcuGupi9F2RMgkKnXsjfBDimBJcPZaWJPZSn3TwJahH75V",
  "key45": "1jXbMh4PqDXa8qpWZjSubXGWfZhqYc8BG9wPdsED7Nu48vE9x9HPwxFLyQKciGuoJJspja2oNgcYRVAYMcUWMY2",
  "key46": "3PMpiu1YGN3FscvQEUDVWc1cetXgfh3qEk5Jk8hbJ9cZFNvjEifqjsHqzwCrqzVeWV8AvQT26syYwMwMvs7t1Jby"
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
