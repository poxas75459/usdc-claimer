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
    "23DBLsbxme7xhoZTHzh6SNd4XH1kpgrU7owRvdsCHSVw8h6KY9DVUp7Jn7tz5pTZSV3gF1MyoZPbYy5RVx3THvmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oR9nnaVMgKbPyYihV8kECWWoiXc5dZ88cZH3Ji623QYVmKNKdFCqQE6vS4iU3FsnBRFiYnyaEbAzf49bE3JUHEs",
  "key1": "2LAYXWFjEbBvsTejg88U1GVJeHXurgQNvYkoqTVvkJt2aCaKRhwdYGdQtaKwicVBRE6vPWbjR1kdqqx76sVtMTDX",
  "key2": "4Vk2e6ztvnHuP6PJCUqWYGb1dH1udynJFKhcvr4xVqRxcmSUTvVoqJFMUToCZBEJzNSn3s7MkNzZfJ3JmpTjzpns",
  "key3": "AG46jEzLh2k5bY5FtzHEBz1Pd4JNR7DCHerE8P2R7HiryaumBC2z8GSNcgKM6ncBFPKjupoMdRN4cmHjLx2cEXn",
  "key4": "5RyJDYomCXJefMMD7pBYD11VdMUL7aF1zHu6QhAP1zA8YwFhSGoPXDJuk7hdtFdTcXxoBLxrQeBr4uE17h6sMjoj",
  "key5": "5YRsPEQtfzeKZLJLPW12XN6kK1G6UgaqGJt3sETCJzs5uC8GjAzTr2i3wLFsq7vebnfyvEoQXzctT7mJgMyuehdL",
  "key6": "5ygSi9yF4K9VCXmEAhxYq7dytTPAG9iyDLQ1pAygt39wVi3doU6umpJYdBh8ExvcyE2vbLLkEoD6w4sWs1esqii6",
  "key7": "26UAiSL4rGP9vXGdNhkt2dMe3WaMSZ2K21esTRy96vKsZxxR52Sdv5TAcST7HXMxTmCZxJguPyDpASwQTf9kWyaa",
  "key8": "3tQgayRneninsaUKC31n46NKP9o2w3ss5iKKP5GAYhsWKUKzd6X5Bgbk4bYBTWnfiSrmL7hEBXELCWofFzqLv3xk",
  "key9": "3C9PjQCRcUcNqrTqH9wrd5WTerbQpK955FM9ySLv8Tx5rEK5TyNBovN1u9ghsNgTotMnJuWdw67KzJK33khGx6Ew",
  "key10": "CyVq6rVpzLxKeVSK7457wVhQZhurEqr5S1bnbJnqcyXVz8YpYjsxWmfuQW1irrZgs79feEEC6mtKGga8J6RreEm",
  "key11": "4J6R5VuAcoyaePmD8Ki4WQSqmeo6cTSkCcT45as2EHNaQpgdKLkWwz9tFY9NVSewzHBRH6Ws7Csrr6Z2HaCnbgnz",
  "key12": "624ZWyo3qm4K9DmKMcTV4fLrX3qfrHtHTntD4uoejXgy6keWCkNUBhoFTnLXWeQGSh5GRLe3Qt7d9W4bGCm9GPrj",
  "key13": "4tRExGzxaPZ93j2Fb4S9rA7dpaxzfwetA2yfCQrM5vtnrEUJGwX2E3Qk82N9gjgwWJVQHjEGt7Z5m4AAdAzsEs6p",
  "key14": "11L7pHadKoZes1bt4CXNUfGk2jfsxc2R82oetdmDeQMC5BAf6M9iBCtAzNbGinakr1r1fjwrfoY7rS3boH5zne",
  "key15": "2SmXa3Lubi2HrvbApsnMtLyiPCDMwbNs4ZGBoSjNQegis2nZYZr3qHNcStdL2tELrx5mQtWoWrybuykTKiuzWF3Z",
  "key16": "2PaebP3M7XQ8g6bbT9MHQqCi8shjdeEASYsr2jzRZc5zKZ4mqAiUTBEBv7Y9hGgrHmtEurFEwybQS8RwxX9Gztks",
  "key17": "2DjeCGoPf9huEygxYjLZPzH1RF1HvmYyWrV9reruqaEoRpcePJHdkaTdi2KwnXvwge1RAfUV4FQ4ofw4upowerqT",
  "key18": "CAnTgppL5m9e4uNwoKTED1N7PoR7vGHKcJQPixWFrdd3o3fdGVnJBWAmk1qvWAnjUfgrHrvCUeBnYwgyGg6zh7g",
  "key19": "2cjPMZCfsy58KEC125T4C74129jQ9Q359eMx14mAATampJnbhbZwdvLCAVg3oEWQwXvVSmwSczFYzYSPTLc8YTSV",
  "key20": "QD1hbR7TbE4UNg3rmQ3RYUSKyYRPrzipGZnTGUkA9eEWXg9X9A9MHydYBVZiyPyGjrJG8ujSJovKgytQZEWbYRd",
  "key21": "66TxrFWnS2ZDUvTqRiWLFN8dVcmbYS5t9AfHfhhBTS5TTC6ygbdf9e7C6xqSMGSdxFpU5vorGieRSCeoo2W85Pob",
  "key22": "4CTxfqFKPDefatBU9Vp6pUYEisxzRWMt1SHgMwkgwiivbsNjeKgunw3DxG1q3udBTWvVAV9CBMVPmzhHUNsfeoxv",
  "key23": "5JFye2GX1fQY35Q7a6ZKAMN53fUUasKcmjr5ud2xoxtnq5TrMEW9HQ5a43j2aMQRHY1tAQcLciZmBSyRtPqoArKV",
  "key24": "499p5AqQ1gdTXBge4soJyJ216mDQHKjtJr3rV1wBiHTYX3nxvVNXH6jbQfAqZnWQsciHrwK7HdP1zBb7PyitaAqo",
  "key25": "4GkyNrZZ8P6dZJVzo2MqrAExuk1EnJ9t9CsmUsMSkqmrjHgwGu61CUuctLQwmX32R4vUGAokfC3vmUt8ZcPbG1Ei",
  "key26": "5inM5MtRmsCtFeLAQa3Xe6UFXB8Qka9mEHhrfS4WWVimQQX1VSyM9nHHgBBnrN8KxqSvxiStNnR7NYcoahFWkZpE",
  "key27": "3QFLWiUZSZ5EFfKcLXGpjPPsvPB62yhGx6sa4YmhidtQHZMgqNGtkZEAVWNYYhrFDryJXiQ1U36yPFCMPuuVeTHd",
  "key28": "4SmPDrqbWfRW9VXLA7VDTUkpuY4QZ3aoy9Q9k8e1Wqgpk7cFAqhU1V6JQQ99rr2e1SaimrfMGofGWwz2TQA75VpC",
  "key29": "a479TvXdyExevpzBbdNHNUDR9wsNLuJA6McjiBgmova4YbiswMdg4sb4jrC5pLtfYTSEi3qjG5JFAHweTgQ9CZJ",
  "key30": "5vWTZkQKSVS8Gp6Hyfu7W6xcR6fE4gGzVJcgvJV5DM2efRpmkad8piKiba66tEHTXpeoCqXNiuxhXkD6WLaHbmWX",
  "key31": "4ewV4mpRm4RzFbJMN14K2XsC15x3JNRs4GeqTcRRgxgA8jZZoMCzekqBXa9zVLUd9Unu5isYrNZ1T7UpsKcWZ6bf",
  "key32": "45mtiQshW9pLzVDr4HtG5ivw3WahA2FFLcWt94kYcGPnrBSR2xHnn2G6ocftBcNcJbbYwGbQypBdCAfoA1kHNL9m",
  "key33": "4pJyesoRjC1HKHd3HETw2owKoJjciAXvffK1RmUF33Tg88UuGN8wUMWydK5jfTPmdqfq9vPL1Zr7s66enhxBxALJ",
  "key34": "KGoHWLQWccP3UctvYZdvH3WJriHnw6wPFrtELeDg5HjXqaKJrufNBrGDujSQGAwfYBvffDuEByzX4E7X72KTmNF",
  "key35": "2RiMBxKejF6Kc7HGxDmLCbqrfLCXXD8Hf2yozx3V4QxfpKjnmJA8knMobRLALMnVxDgmACp4BKVhKXT1GS32ZrhC",
  "key36": "5To3sjpYcK5NWP9zHZT78Gb15De6u6MFiXhWy12xTFBwUprWz5uf9m8wCXgrCu6bw58JKrmC6dwn32yEC5gGdpMc",
  "key37": "2ywPV5rcfx7zDobJyMTBrAzsJeaxdeNCWnBPt2T7xv97ZL1nrtR5UrvJt9yZ6avTEB8j2CdMhxi6fw4fZF5WoBd1",
  "key38": "4yFcAjmGDfZZ3Zw6iRVaY9PP26d5uDggxeKrFuQ9jkt7rjJ33JAQYyRiDbNPqV7331CVdqHaVqmJEkDJmHYJE9jn",
  "key39": "YCFg7QKpqD8rwWCgYDaXttuPvxWurjLb9VD8TLaUEaTP4uLZFp8cfQr2sTpSVTyFPtVqRUtSKy8ioDyqXQYafDK",
  "key40": "5koF8isVFa2iCk8b5hnXNnppb4qQbN5wSUgLRGx9Li8qVGycgmqkfct8YcZLQPcyLQwNJ3Aev3SWXvEbmyzqNLCF",
  "key41": "3vJDf4zg7b1JShHzUg5tWkgYJ7k6ekDWmegNn4VooBko5v1DhYbZ1Bhu9xCDHbB1Aybk6RC4Ku6Lt6a4LbDhb5rq",
  "key42": "hDMtAAqsab6MRSRm6XYvQSxRauHjbFsJxihUw7f6DFcMDq6EzS588X2S4CGrE3kcCyuBX6QkFCcRGfKfKUtaE6Q",
  "key43": "37EgJkZwdmDEuJZYFdP8k7ajCCXfiVPBEZkovzFxyKnMfbn4QaBr5bkTtj1VdUCW5XXaeMRno4yJfHcuFFADkq86",
  "key44": "4fFKPcwFnz3CuDe3nor2uCdbAWaMUjN3vw1Ao12AQV7MeVi8vsLSYtYRbQ2yx6E6JtH3DfAGnSodGdAcHbMjC8mT"
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
