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
    "3Rvi4m1q4kj58xPWPchb8PS8r5ksQX5GYyQgotZ1cG7wyN2Z91XkKEERFjiUHWZT61EBab1mPz9SUBXrR1BeGvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZSWLu5D9eM3pDDnzT623KytY7vPZPRx7r4tqHvD5rCzZqG4eUHCNDQFfnSPXtRsKbNmR2KCthkFtMcGyEU19rF5",
  "key1": "4ErgMLCaYpeCD4XavBs8Uka5Z8XaGbc9GxEYLUHsr6uK9i6ZoJr6qsxQsFZeS3Ws6dzQrCX61ViuYE6rkhLXdmt",
  "key2": "28PruWwRZoKqQ6KDJJQC11e9ZnAtCWDreCPjQv9ds45ZGHFXuywuNNbmVy8tyy1oHVmaCK1bPUYKJQVfMLH6F8DX",
  "key3": "owfUgyG4MXzNtGMZJ4JZNugWT6JfLAMcNcT33aZ2mkT3hbA74jrCAcbv1AomfkZGg8x2yrpYTnaw3G2ETRQ5UBn",
  "key4": "58NkaAkMjB3X745X9c6hJhU142nKLqKhk83MdKVHTiGxwc9Gjwdu23D6toqPphP9VWAHnUJaqs1onnWG1Yguvvow",
  "key5": "2Xyg2gCqwNY21DvLdHis7GnjZwt1RgXpyFa7hm7MCtGoxn2gQAEtWmJHTbJ1XQEYC86yiZvdbtfARSyWMPHEzpRa",
  "key6": "2s9D51nFSaZhaKw3yS8yG8f7pbTzF8JiiB6s5RqJiEHq27u1eaoV7QCtJogbfVRgifP3nqoTS59mf7M3n1TZXeJj",
  "key7": "32jmdQ7ZZCrVkKDLZUFAsV5YLYTeofoe3CpdiymCi9gXntuq8eb4Azpkukx7imL9vcJjc2K6ezxSiD7Wx6Zy9puE",
  "key8": "2yLmhSyjKfg7hmCaVCXQsrM4dp3PyegbEYBJpdHjG8v6RpLTar5gkKcLvnq9K6Ex3cdaokbqnXvvVJGW1kZLsLqB",
  "key9": "5TP7K5M2tuMW8AYqXDZ9kSpCrURf2LJ1SaPf4TjVu6v5V4m7nsKvavZPudeqV8BQ2UJLYLZ8mDZ1fjnDtdjaJCQ",
  "key10": "4v11dcwXNGgBkpaMzxiJbDpQUwKZJuoE6iEmaHJuuXHZ5m13MwMmhwomuBkkVVDsSE1svVTk4WE43zMDe8obHk1U",
  "key11": "4oikk6nS2nZ5a3cfAdrd6BoD2B9sfJpuLdW1vGvebaEbveWYXKjV47VYuvtCjNY8dbYf62WBspBmapdPYf6e93vQ",
  "key12": "2JWTfgKZHpHKoEv8PH1S7MFWyg6yNhudM3TSwEE5qGWvsQQgPkrkW8jjSiBBxcV6zyMM35HqiJ8Mv45MTcLti77Q",
  "key13": "5BknABzeNDZn5rF1FN8j7AMz6We2QaEduhTJYnD4yc974gsYVRLLExpswAqdjmpMsy8du2MgdTpsryTzdJtQvA4w",
  "key14": "ktWW5Aib98ZhqMoVXs3fJqRvQQ24guHuEtuKmrEbSz7TPx21QZbnXkt227V5yt1Z2j1jBLw9rAnoaEAvMXocNxA",
  "key15": "5mqiu7SHD6vMW3FveEfA6RxG43PpAifihVpLjfrBZ2GSdmEtsUWidrtMFmmjL7AWrmX2SuUikepXKL4n5BkkuaEM",
  "key16": "2zzAAxfkDj2jJgoeQqcBVuLoSb3s4k2vdqbzNnJ186LoyTXoqd2CKoA7kNvPYCSztNHomfrR4absyWHeeY14ES6r",
  "key17": "2xWb3SZu4YjMxnR5RKSePfeFXzvpta4b9k5aGeesDkKLxtpR9Lvro7dbPzxMkZ5NRvoqvbpbNXbighz9vi6iHpoU",
  "key18": "2iRg9wskZvGVYs4FDp78EhHg5sk5x6Uh3RAAk5QPkXXCzEX8T4fg8sSww1WmpX742YaDSwnSYZ7zptaCnYEFVMyW",
  "key19": "RBnhLwEqtDSLWCdkK8NYudQSF8ieirwbvYWhySwniT3imKF8mdvHmuK2BckinuFtDZsLHk3LVqt7smGfYg2GniP",
  "key20": "2NbRcfZSVjHsxfARV8uMag4wj54iSTsSaW5SPbaT7HobksmKe5ZiokgfLAN7ALgDNiW9sZB7RgJLc7aKT9SS5gr2",
  "key21": "3AEVAYZWYRKuHXNqqALD9tRa3gkpVPHS6CNnSvETrWtcUcK2zFCCyFLcZ9waCMtEBZsQ8ey5NBCYpMEBauXjVjME",
  "key22": "277Ys729W5Fvs4LBiWi7PrDurNrrtGCMbac1BgYB9uHWdDGRPrE468mUQRSVuUYGHHBRRK4BWfB6WNDVhUNefNgW",
  "key23": "36gDwFGst7kHAbBEnsrzSHjSLx3S2sBQeC6egwonWdV127jRvvVohbrrcPnizFtxknF2MW8AbZdNq99fycmisBLn",
  "key24": "9EWSdZ6w9GcJL6LQ3B7nE7xTDLemzqsYPKiqFLh1nzg6kFB6FE5HNJtkQTU5HqYu5uKzmDB9bpe7YSsCeoPepwT",
  "key25": "4Kxa1i3YFEcU7vJMDMeHijKT7EKjhaJEsvBx8XCMQn5PeFWBok8XB9H3NFNZkyvrVpVzXDCz9AV2qFzo64wUNccM",
  "key26": "122rXNrtmzxFZ4WDEriPqiVTayXN1PZeLkVpzLR9koJMsHW5bcsS9X1Vex1f4Y1rAzLbENDokeW9bDH8iD3KFC33",
  "key27": "W85aG3p9U7UAtc6WmXGCDwS3BV1GfwX1yr1iYvxCEvtJ6AF82As6eay1ufFeLApvhVZdSyyWTD3vkqmBzBYuWL8",
  "key28": "2ZvKmnLqbC6L4KVTqUQd5Bv6J15UE11qKRVpBjJpJz1ykbd1XbTKKbaqUhGfxNwXws6KgkMUURGJoQ7KZP4Cgq91",
  "key29": "41TwmGRaw5tFS62tsC47iP5JFy5F7QBqZkZS7aboWhYiby9AkixhU8hvHhHkYSEWggz8Mx58ibGStN2fSCDJX8aW",
  "key30": "MvijtAVxBWMAWj57TFwfeMZcW1tZ5gk9qC8feZChmticnH72AwKVB1Hf2mHLFxhJjL8bSBZi5xYorxFFThoKyAy",
  "key31": "56KZzLoUFKaX6b7k8aNf4bRjeeQTaKmF9weyw86JiVCzKLFk5Bc84Qm639ncw3spX9BUfUkmsy5Zcvnwv3Dcovru",
  "key32": "ymx1yjMZCbyVziTSoLEfbfV5LVcoHU1Pkq6Qmjbcb18RSKBdsyasjBQUcBEggxga3n8awZrfonMMpZg3aiTJaFt",
  "key33": "2HK1jPv7XmTHtvsyskpz2Nd6NnCiuZd1dvsnXqpV7o1Yx3sG6dBMScjZueDwKvi5fMk2gKz8HaM4KS2E5wR589GT",
  "key34": "2JdC8W7i8Dj77vqroDM3RFaqXdwkSZS51rc8nAYypeECVBWSipcWD9LTChRM9Mty2fFcQLuxJ6ujELtwTn53kpQr",
  "key35": "4pmVUEGt7eZbnebjFFmJDbBLVHw6YdgPq8szH5s8ERDUkTWt7G8ynaz77eBxKy1EUxaBQP3pqKyB4qhfr9khiVJ9",
  "key36": "4NoRyXvTHkrR1t6PP19XMBWF5AZgpoFXhukaJZDwrRDTbwqZeybCxrYKN1aQsHrPSpkDSE7mbQHEnhzKHiVipBQw",
  "key37": "4raFhY3zR3Rp6bmPQQqMJ9Q8FATBjrGeELPiDFY2vBNzs7qsE2CgXrN4ErWqMTfaVwRj2fJS8x8v5zUf7iD9UWW9",
  "key38": "4M8VSbA2ngaPdzr3HwCVR52655G94r59sjafY7TQZqVDVJdgudZ4opTLR48ajYHZtnbS8RW5Gv61dfTYycYmKd3L",
  "key39": "51EfkViyoSBNVBtSfp5DHQLJnRhE33TbfCuofVPwGoWf29LcKYd2owMm91Ug4CRcjX2DzzEqRfjpUV87AeUTHQBw",
  "key40": "2krLFd3ydX18aaYS1DSZ6xDbbKXCsJ64Sx5gsaDxRSVtLW7Yf57ZN8DYWSJeZyvqQoGCJnkgggWJ8QewPi2iYVhR",
  "key41": "236AD45EYFKqkegKRXtTRzkNnHQXa2ycadCKSLE3d4hpgxCX5SfquvddProB8i3uW1M8uW7yx9omN84hTUMN2mX1",
  "key42": "3NinPFy1ytDYsGod9KvKa6GbvGPuRuBRLz32MMTABvifP7vM9fiKTG8g7jWCQSaGhfB3MpauZHQfyhoxMNvpaCp",
  "key43": "x7UqF6AYp4DpCmY4Rg8wJj6YM1v28onb2JU4jYPt6LhVfYEVBbvF5SQTYb1A7iqtvDMPhDr2hcBor34URCMKCxQ",
  "key44": "2P6psgnVGRECouXjkA26iMaeiTPqS9UAvBRuDidB4BjyBVhRJ73zDLT2EBHMdSUxVDmaVkfdVPbQ56BkUDQ2FbeR"
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
