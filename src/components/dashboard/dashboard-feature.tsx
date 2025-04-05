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
    "3W7oUnev98Mtk66L15MKPkzVBmC7he7QskFLYRWs65RSP331qVTwj5otivMByJeRPvoFB5etJQeRANZhQe8JR5vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKLcTP5bn33bKTpS96GQPEM1mT6cnwxDFDBUy4mHzeaV2YF6Zhbvoum4wPqVkFhncMbctQasKJenMo3rW4FZVVN",
  "key1": "3w96k6tCyqPCfzPDo7oLuj14B9UpyUKYcWJRaaNArjjWgheB9eAZgbc5jZUEVzfqZL2sDwbTdU9ayPzLvAdDqnxi",
  "key2": "43Ey7ZNSuB8xiiSfzgDpF3wQsdDpV4MeWA3tTACg2fjfrpQnYQwj36WyHb2ZzzYREgRv1S5ZvDWFHgXcLuDciosm",
  "key3": "5BgfGnpWUg8Kyq1fyT8G7epTau3Gbev1hnsJTMoKSrGctyskakxGU3uKymMzDz2yLTe2g14jy7EPXBCnjdtQte5e",
  "key4": "3ZpB245PhNzJY1UfBpLmcqXgcPEGpyTNKHGJQgzHSUvHNb6fdBMdGvUkUh8Vvba16GNtMZfgEyK8adj55auvKt8Q",
  "key5": "5MxTVayPvdcBCQYDsyWiebK5pph87TFqz4gSMPktk6FAK6LUVtqhYrpkZTs6tLYA9m1eHp61ZCeUz7yzGTm2c6kY",
  "key6": "2yukPRT52p2djYwKAtt8J8SninesMRhiCWa4dZQhBFQKwaTFDnqUS1rUqTC1zpAjueYs8vct2qjW9AKUyadsvkxL",
  "key7": "2CuSedFYizcddiG54cRFJopdsgmA5CwLdbPWE9sFhAYoPF3RCdHUazyovX4pjjishsJYoc2KCTtnfwr3zuLV5kUc",
  "key8": "37sa98N9iKivbnBCq9FdL8JpPJW5oHpX3HvoqH2t6r7T7JVgSp1S3KtCW9JATzhh4iaNTXbRFcrvkhukHPRLXWG4",
  "key9": "2N6Qhn8YAZuYUyaxzFPvunTstAEzGz7urnFgwu6EtRMTEsgiXtyAyFYMUMw93zpcwSaJMfMYtahXTbCbC8z2ag69",
  "key10": "23hhmT8kEXUqNEbNvzjAihBWF2bx8ovRdq1gqAP9ceadmFWkCpB8sApjA68mas7Z14ckksZ8A1dxowy7M5RzyUef",
  "key11": "67pSwB1rSAHCMaqV5MfjQ57QDG1sL69eKLRCX76FuGuWYkXxeWh6bR4dgLJekpmBUUwAtcRf5SnEwZQrkQZXiyV8",
  "key12": "5ics2mrkZZfrVjQLt117ZaYzRZDT4qFehRDS2tgA3GfVXy7zumkYWAWQSrcQARYFQbisnMzEzcH8GwEkcJFLWAPF",
  "key13": "3cE4H8EFiGz3ijxh65wyQPEXfx5KqqW8AKCb44GqtGxpnVbs7TK3niywnGpNLUEBQDGT4hpgfnocgS71o9M3rigT",
  "key14": "CqCfUFEqSLqxP9KmVCcDNtoeF29KPHC9RToiv96CcGTv69jMxFfdhWdS1WByVCs5sum6spvGzLyHRimGSn9kPhB",
  "key15": "gKEzPawRxRafwkw1cH4qvKGnFVrBiXagqpKAhvbQzFG4AeR9aQY6ebSYwrXL6cYPdXqNBSadoy5Xm68dWAqLLQX",
  "key16": "z167JdVEGTTtEoUZnD15PXwkQia7dvQxwpTm6ZVEW5Smyey7vyC977fRLUdgE9Axr3foMUqg9rmLTywrYq8TDax",
  "key17": "5i2rwGr15VNDgHoVanJ1gNJLzAxvnLaoJFwK3w1N67dt42RuwxxpW4W8ZwebfEDC1grEM56agvWFDbv4TSPmhaes",
  "key18": "61BfnjkxX9QbzJgXF4PkezudrFhTAUW35PD8cu6ZaNHEHhyZ5Ai2wGKRBKoDvTKoAdVF1FpJMsdbZTohURrHWiaV",
  "key19": "TFWBLA7udT7Yavv2QbfBBYq2VtwcVwTmSHjG9A3jXYgdGvEdMJdxRTTcFhLehjVpcJ25Ays8XH2ECXwMjstXaZm",
  "key20": "4kfmeUyif2sNnxsYYxSQS9Rv5dvTA4cRkTEWCocbBSbKs45xa1DE7ew9jt1Lv58JX6McRU9mvY2RuY8J1AVS5LCb",
  "key21": "2F57epWjck5Ls8VMd5vsNsvt2VJ19VoqMjhsVQF9eQEJv3WRLLybv7GzuSS3svteVLHUDyMSjEjyuayrbENwx8JN",
  "key22": "51JrE5HcbZBUCHR7o1DqoDonuodRAtzLjvnWmTWzS9UuYB66dJa1ZLLDmeGfb1QNuqNWLcFfbb1FnbxrR4eV1qcg",
  "key23": "3R6cGHYRkgYr3nPdig5XEsguPuwPASWtV9zFStc4iNNqY9GyQZ9JSRLwK4WBMZjPmg6NFsxgN3xKrjVL24nv7Lh5",
  "key24": "AGZCytgj7PWPtg4SCPkmBScnp4iBSLbsdcrrhq1zx9xYkDnBK6Mvwt5sqdcVU6fg5YCwBGidWTZo2DEWXcRDo34",
  "key25": "4hgarQnAcyaNv48QHRkRw5qMhWT7o3Ngknp1ByeBtxQJHNYTSDck8KWEgPcvZpTor2Y44KZJZVnMXF9TCTjAkQVg",
  "key26": "4tadqiRZzoC1M59Rr8vL4wpsr6QFsyTSxvgHHLAKcsrMFhW1HCd8sY9BRANw9K6zS5RepgevLoM4mYPPhuS6GNok",
  "key27": "3McyMvHkNbmJi96uFmqsHF6YGYhrE6AgnTepT1CVrGVHhgwxMX1qQsXGFHoktP32YcsgL7uJFCp4j8bXfF6CM6dt",
  "key28": "3EBrWQXwcgsNHGPFL12HQBo3ZrnDsKRzEX1QaRFpE9hinLQbjY6yGgfWb68mGshqQTK9U9UPnW4dTD5Qtj8bGch8",
  "key29": "4EkmjB1eypNoDemYbUxsXeo3Da6TgkATQoqbXWJcQ3nA74TJRzCzokri9tSTFVggVKuURUYHiwfygWjBGD3VeHvh",
  "key30": "5HrNzR7bjVoACkTrPEFHXVmDrFFFMRFhqwXiJky1JPgcGC5kaSpZZ4zrShXQHEZ3DJpKvnz4v1JKccjyXMAf3eAs",
  "key31": "5fW7fQePiLLKHahEhxWMvtXaE5tV42ZUXtFY3PNKDvfSKQuyXrxKWZj3g3XjX1zHh1wx5yokBoYq8Y59dC51A356",
  "key32": "id3bZ9NE1TvK6QLdRCi3sTmD89hStN2ZaxY7yEidQe3jF9ewSdrscJ9bhRDomQNXsc6TdA2T947urn55tNgwUVt"
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
