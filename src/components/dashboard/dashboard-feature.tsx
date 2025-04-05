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
    "CtRxBG7mR1FscRHiPJaTPA57KePxTvG6DDT8Avv4XGmZ1imoafEtJVtvCdZBbHNyEAkqxw6TLLNSurm1P3VBcUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDrPquLCCmXQgenACP6UCFRgs3DfZgMUkZZYrdS4AxhDVEufS8GMoYVuV8Kwq6iZxuRwsrH9J5vTEHS8CK7DP6L",
  "key1": "24ekwb8Tb5dx6upEieeapDWkB89DUDhz2Qkna4nwChYcoBictyMaQdzfJZgU7MbNK8w3YjA1EX8TdKcydMeMaW5r",
  "key2": "211eQYxmhhMU8BwYcbn2ZRngfdFpd4bpffFUff24SYvKz9f7kqmJumhKhuCGimH56SfNpGydwve599UJQtPhHAj4",
  "key3": "2RifYXLwqQWJQkZ16FAc9vPWNLXQo3S5mf648uuBhwoQztKwq9zPFzDJqxz5QBQXrYV86Y3CaGTJAN8U613jfRkC",
  "key4": "2gJw8eYgu3QhSh8FRkEAsNVjRTfaMWZBXHcYpQYVmpaoLgE2QTy6EEtdK9dikfPVui2yzy9YYDc5KJ2ND7kr4NX2",
  "key5": "ZWBsxUNWq9EAPb7RD7RRENxnyt61objaaWBvbP6wvUuttVecy4jXS7enTqP2JeZrF2hY5J11paQwmrsjRCGHG16",
  "key6": "54TABqbeVrqDWT6WBmLPoJPiJori2CEyDahbHfXTWD3cvzMDv94ngYgtzLJbZ9s5uXtvAeyiEpcg3SeapiQnqfj9",
  "key7": "2FHuw65w2rArDdDVvbpyhmpMqmqjdRuPRmQ1R8SfFxiwYrt2LSkS7xyqSYkd4AZJercQsXZZWGHt1cxsS3VUFrns",
  "key8": "d4fwzg4WWiUJW1o93mMjzbHbaoLV9Y4S2QcLuK6NYLG1aE3s4JJ5c956QRGvwHTJDaTd1v8AEcij4HEdKSQCYuJ",
  "key9": "GPUGT5ectkQFgrBEUde1uESUKeEn5D3QbV4pHXJv5JK7MhkKTzu26SNiwcHStQhvVYpWfZhJjLiy1h7TWby7YTv",
  "key10": "2KgQmb7rSvVoXyqYsk2mXExKxLSGSejDA6uiTJf925EnqRwPnLk7HHmM6VWwqTUo7VfyAT5pKL7F3geoCYoT6yck",
  "key11": "iKRRXRvVQ4Nyyhm2BMK33qURZTsUvqsb7BrknSf4vKSbiy1DNfgrf3tM94BsK4WzwtMKWTiGTuK4AC2Q6yjntE2",
  "key12": "2UuBFNfQnG4U3FwmCFzMDYAi6nahsSe1RSiGx3eq1e4t5hRQYajxfaS1m9dLwBUnmUyTKLnceM7WTPaMkuMjKZEj",
  "key13": "C7Tn4cKXapRrkiNe2wKQTznr5dmaGFN6H37qSArn8rajgWuMjpgaUZJFxt8BEUQXdMJ7GnVEZP3VMfYpGmd8CcJ",
  "key14": "2aUAsKojaK4DZYHEd5odyNJz3yKvFWJ2fUJJv1WeC9Q7x1DtjJDEbT6xYg1Hz83cTuxEk5tvurUg3ALDbzDmbesh",
  "key15": "4T592hSsQ8iWcjBh1MVKiZUazKh1j5dgD31GLUoW4PYg5Fvnzw9qaFuqReFk9MGqvU9WMN1NFsJG9cJy74foT5JU",
  "key16": "21dqbm2LyJzb8eeEuy1DpcAb3KMpTMofZJEm7dtRVctGQvpwKHHapXomLUCNjSAnMtHJaq5EexirtkF9hrZs78WZ",
  "key17": "5LpK4Cy9XwLZyYxWBiUVMXvGgtTXsUzQ6tSkKuA3XAXjgo9JgoW6fBXREgE8GehrMZ6aGx3b8TRZUxcUh7bHX2nS",
  "key18": "26weoPk3dNQqVaX5PUjUZoEw56xhrQQZMTfYUppwJ8LQ5eSwGM4R4vYXaN57eG5bLkRikXbwnBuiBNXjdDySgAb3",
  "key19": "byprXEPaqDnQQX1jDz9yB4cmJZawMsDQSm4pWajjGqAQK39f1EkWVuB2oWnkWneeaAJEd1Q1TkVwfuVGrGgaNwU",
  "key20": "CKT6MHBi73SV3j4KqfPRfHaepHXzSNUM1rDUMp5kK5YBkMhijGnxvSE9MoBKt6b6QZXtkYSouxCNBBDgYX88y9A",
  "key21": "5d783ijZmMzBrGS7zbrt1jdLaVCo9uMggMLaGUw1nvvZrJBQ45Yzx8xmSL1nbXsorAkbm9THp9F3N8RtSGCs3sgN",
  "key22": "5RJ4GFHWbxPBA4Ujb3U5tBDi7UU6Lg4mvPpF3mRnJtaatQSE4FATRdUxD4yp8nJBQiuqLLVWivmrMJ6meqwyQL5W",
  "key23": "5DC3yPismg4rKwSxTMQrkeG8buLi6VnheKaKN838eTckj3ia1Z7BqruxqcoJqL3kLKtZXE4Zp8QhDhhHu2zGP57J",
  "key24": "3NZYzugC6Sxbu6MKexomMgeHFnyo9hcsv6GCJLEedG8Sqk6K6UJS9JqBXEhTo5xwmrQMoP1WMzEs2QPdaWurmLzf",
  "key25": "4UNDkvufFy6AtocF99mHA8gDjuReL1jxzA45CfrMRYTQHX1LY8henwiKe52E1NSR5BRigycmhJGJPKF9gPWgxdzv",
  "key26": "5wm1sNf3Q4KevAgQgVFbmmpNC5Vz3QKPq1vfcYHE7k6yzgBRTG8i9hT3bQtrpW3e3EDyoRpDqgyDvw6eHRZ6D35i",
  "key27": "63S3LQAqze2wTdJ7HmBnHWgjVFhLPFQRoaCxAoaZfSh4fCMtVp9MAz594dQkgwNBmwEJ9Q8J15f4Dnt2KRqUucWS",
  "key28": "29YPq9CvPd2QBj5iSQdF8UzP7q3KLN9aG89Fx5b8kA2bkS8QSiiRUU2FqDBuFRbfFrv6fCoLWrugJ2is1pb4wuMx",
  "key29": "4SzSXPn4tFJN8Wnndg1sz8HYEHequADvmHXTyd9DGEZY4vdPKE22Z8izRFNmcz3pFNyK3pjQgVwHtdsFph6yFWtS",
  "key30": "qAy6jfXTBbgYPAePgTBHRg2HdFqkcuPHisTf6qAN1EbArjkb2kYaLVdsqCSsQx14HDgbnFbo18ssRXaNSroPt4P",
  "key31": "3jUTLdgdeiYdQqrugPcEgpKZz86KB1qqVHUP5qihFAKgKbHsqZDyWiBek4h1f2Wui7USSnwsHVHTtCtbonDRFmyT",
  "key32": "2gnzdNuFnGHSuLXEDaPEF6233zUwr1FcqZxqhixSbYogSVvNQH5LDvM9SUb6icaxb1s9A5q1hadK7oYWCvpSeZuT",
  "key33": "utpCc36BorYwT4e7nQXAmSGKsi1rvjRMNUpeo2nSM3YjwXz9wWaqWV4SMYpnGWSSRaAo2y6ncTQmDmFvb7J5C5Z",
  "key34": "33iE9AiQZRc6EuHrs6KHbGJEWMobr7og8vAXjerDTWk5eUnd4mqH8iJLYiKPRYu9zxtqJFmb9f6Ga2cQ9nds4PnY",
  "key35": "3JUyY39Hbvvo5rN89CgHSPKVpmRrsh4o3jFzfLjreEbAZixyeW1WQRpZeQGXMiVkd8cwuAQxhWfctGpmeGFg1Uz4",
  "key36": "25o2AnwfCbFwF4V8nxjoU7Jc7jcjAxZNAhGv4bYQR3vDNH1pQzVR286amcmQCGhewXfugFHBXPobU9RrbVu7svhA",
  "key37": "k5JfBRNmaHNpKUPEaPReV9w3uTukcAoLrKtfesRGW6Lhpz18gd8jeka4XjXci8JTRWZykPKwewDGUxLPF9vUHwA",
  "key38": "3wZBZ6kiC7m4QvAZiJHfKp1V6HrpreuTBJadMUXNvwTBBMxK6GbhSvuop1ijxrfFnnvMHspo2fuXNXQDtWysuJ56",
  "key39": "3LALC8eKXnjz9nmRhQTqefJ6X6v9PcumWHFtvy9Dsx3YXhxtLZdqw24p2GCgnHn6wPrzNBXiLEgMHHbR27DU25yR",
  "key40": "2615npvQby1Ns6ew1rjSR2zxaP1hbAwYRoY9nPHCxqoc8hCDbcwdDPSUH4dyLwbLb6d125ZXfuqqC4X2j4GyzPU2",
  "key41": "5N1UtSwaYB2v1QpTVa3WpBpUFaaY2odSFkWjWkSZPmbeaqtsBVR8JwXExUD1swsbJcHRAZQe1GD4Qm1e5KfKsFbT",
  "key42": "4gyya52G5ePFrSmC97PSpvpVLi2aHLd7fZhz8eHNqUfX5i7davjaQfZnpJTaiioRUXZdEFzsGnojLaPLFtiUjdBw",
  "key43": "5rnd5YMGJEGmxUgCowBQP2bs74BMCVpaqiop97ZtnoMsD2rRcHwBjXfipfNKngn6Smy6ovjMv5EsLycxLDSWhGmG",
  "key44": "4r847H332S6pR2dMJjnCWdxBPpoVcTfBVsUrK8eBtdf3nNgn3SZXoAX7rrM2BCdn3vJfuUDNMFNtFri4LBn5X82t",
  "key45": "oXaTcbMf34mb85AfWAVdSPAmGYNx6H2nKEr3qi1LFvWzc3NmvLCZZcJMHF7GArxvSW31VgoY6ZZwXQaiFm6uqRn",
  "key46": "2uYXYD4UbZpio7D6WWtBF2WAfb11PYBwx2zUhQv6PAeodaifeZSDZkHo69LjoaRqPbzEEMv7g5sXuxcDfAKVDzP8",
  "key47": "5efurpEBcDs2HenEyUGzs2kUV4oZcLD39gqu7bkx2xTsrwfiNGx44vFUZ8gFoQWWBprZSfdhurGe9CfPy58SkgSQ",
  "key48": "5HuUwDmLjjg645nfzb3rpJLcqedpwXkU8Qozx1nTztsWrJF7jtnPVkJsRFsMHgyKPA4m5vtPhNtWLbGj6LWq3uPZ"
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
