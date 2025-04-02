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
    "zc93YukHhtxDKzKxJgiQ66JLgjmBRkyzm42DEsh9dUqonHQLv6FMALwAMEGhDxH3fKtG3SwomZ59SE3XFWXBRNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asPmr7pfdiJ1gM8RfpU1JxeuahaseDYvxCfcjgEbP6xSTfGudMFex2Wqd9hUgJaSNdyewBdxAPYZMfCDLE914vc",
  "key1": "5rJHxjUyGMZLrQAgKp19hKWjvtKqxjE9ETF5PC1TcYee8urYDVuEPp9xhojqLesmBYHTwKu3Fa829njhaK4zpqag",
  "key2": "46XNv9Pv3dtewG7Tjr46aPbDEphkc1aDgFT7H9VqqWQ1b1HWEobSzX6d89cWnomQqvZqkhRYWGMQYutzB5X1Uf5E",
  "key3": "2mkJLS5pu47D7hsLQEcPhgMC4bj47Y1P8wdCMH6KjQQZ2CVM85gE8b5vEvYeakzgPjvFziRoayaEgsVyQcveAkTE",
  "key4": "2h3CyisTWKDmyXAeyiihGeX86dCaHudRduxVkTfEE5JHkFu3L9Mjdk6qX3EgfJhakhjaZ1NQhXXZEWZinTUWXr2x",
  "key5": "ZGhqrVJCwn6AGJLS92BrYxMwN8HiZc46wN2WynVMPJ3hr9EsJ6Ua3XSeoxmVR6RuYsPrR1NkqeCWm2Peztr2R3L",
  "key6": "TBRhHQXKsYCM29nmXj6QkaG4fFmkY7odSo9CqC9zCKXQjXngzvCSPSrXx2srXy7DNPusZmc9X6dYBYwdfYSnfWN",
  "key7": "5x1Li1kAf5HGQEJPV8vqfjkVcfwQBzi7xkaJs48Y9hHLFj6zbzwArnwM3RkbgcWNP67ipDtQUL4AvCzX9UiKbL5M",
  "key8": "5FwcuzCFRpzpS8TJdj7XYrLEQBGkRGuvj1ZPrUsLV5iZFkR74EWfqYKF8NHJQvrCMkjJqYvCtnWhtmGfcJEqsigA",
  "key9": "3MiWqK4HH6p8FpZMJPbsaiRKLHaY3mqcMTqBWquL2upxbRxp6dNdhhHvaW5DPCitafKYzhwwEjdMxWG9grenW438",
  "key10": "3yEcaPni9YzT8w4FJSnWZ31y8L165fhu7DwTdgTsjnZKBf4tyBxVwjA8HdcwSutv955kXAFd6rjFubLiqMm68guC",
  "key11": "5tEwn1gm1HuGT8qhNX9fkYVmd8Lf9HcMaPx8W6CoYsAUeR3ubyr8HQheoYArDGBrfZNyM3YFMUb78wqLyxRQMxyb",
  "key12": "32gxBMyP8uXJsNjS59PC1vsPojnfvXC1Xx9E6R3tsPsSvR2qC5MpdNb4YJQeigFf2XL2LwTjWaLYfFoDomz1f9BS",
  "key13": "3xZQuMTJsAV9PxgRxeCppGkf9HnunXSotgvk8LoTMc1hy1TzWhWWbgZPEHpiYSmXDDMN57EpAxyjBggkFvzqDGym",
  "key14": "5e7rdMHgSjEahQaut969bdMqctzZoNU48KH4yDFaFGjUKHzCKoafvQMzKKcwnRMep4gRQPjCm5VYnhdsdq685pzB",
  "key15": "53AAUXv7bQUTnZAojtQyxmGS5h3t6iaUtHMZyX77kYYe8qYcqaVyzHnjSYH4kAGuDNkasZVKcwWTxAV3PWMj2hir",
  "key16": "7f7CxKESswTuFq5Grqgk7oqTE9hY4mgoG849kByHZuWXpDDLcD14zGossct8EEyP8ccGmgp632Tha2TvQBR988T",
  "key17": "4eq5HGJ5XC74cskj3GcbMdEBuxyfem4UibynF5L9cBJqUnLZYCtnUGui59kLPqSU7gTYgwYU4DLRpWE8tgUv6YY8",
  "key18": "4kMyCod4kXygHmF8WePLsEM3fEMAvE7PuHqnr4LQvdfMSBuUmjaY2PeKUXZmHc7GxoTpFTKrLbrnJVSb1dnJ9BPA",
  "key19": "21pjhjDotvLGEG2R4iXcoMQsrzwQsJqfU9evWywD38KZLuTzCC7LNwuuFwCQYdLZNe56SQRiqwxb3MJoBEDhaRY4",
  "key20": "2WbghoFfwpTksv1cxCcB2zuFisFFYtBm5unXtJk4CoW8zudhkv17mrjS6sZ3ekMv397nDBsNJSLBuYQVjcEQbpNY",
  "key21": "4gqwuaTUyMQh6HjKGb2fWK8CnKq2vwfAhr6fhanfXJLc3RzV74XCd6i84nQg8tGcNcnYPVXh25exqjbQcuFpWajS",
  "key22": "3m285VG2db6o2WaUJrB5JQthVPPC86G4m93es3hmsZxHvX9K26MNqw9s6MiH8A53X8dtTumwjxsMou8XB7FBv2uL",
  "key23": "2h7sQQZtQaJN6sRPKa5MPm9incmxE7RTM1sehufWNqT44b3YCP6fwjgAvHVKYzuLiaCyyY21YtLVFy3hLnpm3q5g",
  "key24": "4m4bD7ee4FNXERGoMv4GNb3WMgFF8LM56kYB6Xiy1A74JAKsMUUjZbUc4yJZeK2S2LCr5kJxKdFftj8LDYT2pLGK",
  "key25": "4jEye2SjNvuLjz33iGaV2DRpHuiW2iqsQB1yG9MZDXvukpoT9nCqHLvaqs49zkyN6ZrJzAMJeQSLtMV6pyiJ2q2y",
  "key26": "434JDR7ykSBdoeBKWTcyfkPdfGPeb4TEG27F7iE9GpheVBrzPx4Yu2mf82wo512ctTD73K9hFaBbF4bEk2JqHBYT",
  "key27": "r9V2tonZX6kaoxv3LUoAXcEdR4YLcgB8m7PRyKq2NkSXRaLRQ9Tfv2fJphuJxQXvuPyKV5McQjemjqJCnqgfpoD",
  "key28": "5FxCYBt2URsKHApnKo93ejgnLnWxwFLQtHjN19cBL8yChJaTksfVS6NDXCkdr44Rgmnbq9og92do1YkGWdkbEEY",
  "key29": "2g8dUjy1xBYnka8PtmYYGxDyNS3vgqjRgHEZW5hEKnpofpzL8PS9JMojGqepkL4dQWmCU4zkRc9S8KurCMu5TnFe",
  "key30": "5L37SB6CFcUng4iFQTpcreUGw4vnnxn3fZZHiuTh2vhKyujoVkBU2p8uPqdejbEUTd9GGMoSeTK4DnvSc6rRRQhh",
  "key31": "5TjFmFXYP36bTqeSmc7YAd2MEWYY3RJnJif7tqxrx4t84rRzH3SK42zLNwY1iEMx7aEBrugZuhZyp2jfr4HwrpYx",
  "key32": "44BNFUNGW7bn3s1QtBAPV7z7ZLPWYcX6bjM8FgEfcLmNp6q8mHDvjeNRKkzPgKzjvWDj3rTcyN1RurmeWGq53tnf",
  "key33": "3VDddn9g9MQyMFAHUJu4TL4BjoRoBNpKgf8kNLiWivCKBLMXLqKCS69ujy61DmPgWjEXEvCowGzi8wAswBT8MK8m",
  "key34": "4BJ2vqNCSc29QJ4zptZZvDQXy42Z5P7PUW92AC5ZfRYWSJoaTAjgb5FULgeQBxX4afuKayWF4ZyGaXUxqmy5HmQX",
  "key35": "3RGZYtfbcsLbdsXj5jS3K45PbgmFuQAhpSKPNcqE1FHEp1uCyHUDHFKFLWQbSTdC2y5FSDrsNKCVVUPbthLQxHE3",
  "key36": "5VrRmJ5aX4RJT86YTP3ZfABdkE1GdKifXZRdJqvAcp8SZCj2Z2YFeSYcUQTL1fjs5ywciBwW6AFAC2wm3Q3SiwyY",
  "key37": "5NVGgKETyWk5ddtRih4AiaMGGvS34gzoCdg5pzggvjxMPPMu5E9VeoGwJGgXG6e7GbNsDMkAEoNw6b6FuM8T7vcL",
  "key38": "5XA12AKxEMqNetcZtQTJWXVNDQopcrCQ9wHKtsy28S7MsAeFHHtPuZuGMRszGH718HRDvroaJUiJYhXnYSde6wa4",
  "key39": "2peerJS3HfNV7qhs6UA984Mn5fudbLEJCApeSd88rRsdBRByjjM2aYW2XLCozxfjjLuGJYpd32arXzAK4QwGBHdu",
  "key40": "4EKi14YCnLuVdCpwbJ4CxN6reVeYktPpKfgkHvzWsR5S3x72URvupXwYp5mg7FSxARzVJDzC2a6PYCMgUJuapW19",
  "key41": "2ENwAspR1XTftFQ1ArLX523tHNPBFhAtWsDnYKh2uuxieBcDKkxfGDTgoQYFafKrRd4C38sMxgCzTyBu9kfmwHQt",
  "key42": "4ashHmDNW2bpFuhKmraPqSW3o2JdtWtSLoHjdyDyhXHMTPAHodfJEKZoeQqEqRGkEkgDGSESyz9buJsqG622E4AQ",
  "key43": "4JrG7LMSFRvwZeHe75eftkoVmiYrYHAP7ZPh4GGerKa5jsa6jYedExq4qEwtte1yka4rizwK9GBNUJhyPSQrskRq"
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
