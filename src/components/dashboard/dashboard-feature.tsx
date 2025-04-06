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
    "31TwigHBERjnX4KwvcfadrGDhSCS8dQWeswfoALZAFzagRi6YeDPsgHyCLffijm6Ts3x847XLp2MHTCnReNyC7eQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJNPAQN3ndpA6mEwSbbDcnob1hND9LvQ3v8mx8vWyf8ybnJPm23h2dFope4tVH1S16JahnKKNSBP5MmZzTe8rjZ",
  "key1": "4hdHpHuDq4aiFHQE4x3CXiY9dLGYuYpJdAH8iEBRQbLYyujimNdWvVr8TsJykTkf4NfSFBNLnMiDxzZdU2ujiQBU",
  "key2": "5K9W4eSJs6fjKJmKuu1EFn16wUZoP147uUwoakZFNQVo8Gd3tyxCJbWNsQRVY8zzVCzR2i7EFGVmH4fUyLZPH3TT",
  "key3": "4mbK6bmzXYprhMujTrFHh4d9STn1Uu1JsRNeLd6hEPqv63LDpXJqqtX8uScvR4Eecmb3xJyLJmnkdRto1nwGxTZt",
  "key4": "3bdVPCBy5qQzRCVGqMoiEmDmuJ6xyp3kYYouJgZUkn64dTXCRD5TTBPeueeSaw6wp3vXxTPw9tjV8akGWbTrF2Ud",
  "key5": "4qvYoWUFpZVpgPPcXNArQhcQvkhdsvgXzVPcDcdhmtEDcdDjizEyJjCwnR78G4PYRQaByyV7SPRrbm7XEAMpyEbM",
  "key6": "2vBwnkDM9vxbwFSkDj585bPy9QZo4S7b8KqVAkHshbZ6hA1jSNVSxqg2k3vNFYhrtAizXxrBzs26KvhBs9TF99Ys",
  "key7": "5pZM4BUGHb93ofsAE2fc1wrmtwhd6qEvKwa9A7agev5Tf44F2XAeG1tvfhEM2kvzbpq2Wm7qh4wyjMLBRTFwfh5d",
  "key8": "TgPPwpqBzspXLE5gnJbwgT2iiAY7o1nhwHRCoHZu6WFL8jZ6cCyufgkTbxg6LbxUi3XfLE9DXgYn6BKcdu7L8zA",
  "key9": "53NDLqynCte8cJTXUyqjqFvxSngWbMubN1XTQZNrL7PRY1WnuyhfwLVrpe8j9XLUig2RnaPtNJAWZ8qdMMaoECof",
  "key10": "3pEAbzMprbaeWBQQfwpTsnbsUyaH2kbSSbJwzYtcF7k6eLPrcUsWPcGPi4PiiL5ydtirEtjZmfwkRVoWPGPM6a4i",
  "key11": "gmHf1cudL9jSv63UJ317CRcsPJ6fRZuepswADQC6M7dDGCqYJ1yMrnhff1RMD9cLr6S9J28wjuSQBnz6egUevSP",
  "key12": "7cvMtx7UXLvyDZkKNXx25AgHc182Gbo4FxTet6dNdDUKSowPkK53dHXMVGnEk5FVL2dEfC1kNfT1eFe5YFsWM2k",
  "key13": "4KKZUKa5ZVoFexjXT4BQjbQQoPrhmh3DDYQ63zrWaG47pxJJGNobvvyR2cQXLLGguxqrwQfLzdjMAmNpAidhjsM8",
  "key14": "46wSXiXHe7LQZ4XbPM1G7BjZ3oeJpwaDAZ3V5n5a3rWvxMQr3ARHuAD6TbGpAjKiNDL4dLKLa7t5nnZCn6h9JLgt",
  "key15": "eXRxnayH3YhiEMxeBK6wibMN2whHnRtBjHGdkBSBYnuaDCtqZtVL2iesrcsSu4Nibh1UCiEuchoxrbvTza4hyCe",
  "key16": "33xQLq2BpomY8si35crACRCJaS2SxFwfNeMcnxsTDTW1jQ9LE2ox3aQt8B7gpft5HjZQTPg1JZWATP8Ghjs81i2D",
  "key17": "5sVupWfssTphoW7nxKqAFeEBgwMWraGvscA8HYhN163PhRjtMijHVpsW5uRFtFcjkqAn2wQ4isFLKqMwCACvVp54",
  "key18": "Q8dKhYtpWodR25wq8bH5JV9HHB7trrqLf81wEf7v4ieFXUNFLDyzjmPiV2gmvggPLMVN6ismV2dsvjMwRcTTrCz",
  "key19": "4myUdeTgrzDpMmwQRquvb2ERBHkyKM6D33pdhdyqkPiPGQVeBWc8oTquRyDBxN3Rz1khAo2whrsEkZn8ZfCTuBjP",
  "key20": "5Xs2rGTanEHyGBnABBpUKeXJUv5DFpT5D4X2qtP3XmwjuX44S6KTcTVgWUCi8Y6sxtVJaobFdpxFUsambLhnQEf3",
  "key21": "PG8GGK1GapMvhNXxkAbvEL5GhTbWCaQcP7wuvoL2jBRPFJBrttSWbULSSkZrs2uxiHNiRRGf7rVGh1MkdQm5tJC",
  "key22": "4q1bFnrkr1NoxKAHtyqDrFrohXSBbLNwN1NoX31cgmAjkeCUwqhToUaNYCudMFHUnp95LJV9RE98i32SDqvMsaZr",
  "key23": "4JsuzPJkL6DbFiqazXjihK3wXMwRJXQaehBfASX4wdMH9Nxfjxo4HtVbfir9WoPnq1pJvAtsqQD18whTJQvSZh3C",
  "key24": "3WEEbSiNGLWLj1qS4NrQoTBSVMRQMSrwDtWYwNWWZN8j17T53roGrMxYUGMeRkkR7EQLoTK1BLc2Te3CTSkjjBgj",
  "key25": "595veQQrtNsFKr4kDrp3YLmqbRLpZWhizqcevxomRHpZZoBwMCQBDdoRV5SiLQTDpMYuDvakCiEtwxw3vnjayGAX",
  "key26": "3ZfWKwfojyikepRdG8FqPhpHSc4yd1VknbNoPPzeqKNhfS9XJZUyva2KuxzUwLNAULooDucJwAqvcRi3RJYHJky",
  "key27": "2qRNE3JUNyLGyG9Fr6sSgTn4FnNjuKLEkQq4KtU5frGJkPopWW4pXb8AUcNj1sB8RQJdd5QuoBoLEwGboeJVxobZ",
  "key28": "3X5WMGLoLGEhYcwW5kJx5vpuCi9rikd7WNARgW55QxVH4xY5rcpVz19sbFaKpp8tnMqXXnY2zeRwp9KMF9BgrhtX",
  "key29": "5ZCsMUYW1B3o2roGCnVoYfEte7XwahrzCdR8JHQCr2SQuGiS3GE5n7VGyRwmAYiC9qRWQ8BrSK1FNURs2gywGZqu",
  "key30": "3dSaiW8ZvXV7uQ84bKNRPCiQgGLSSvzWPGkyZrU2f5q1MLh7gzVtCwHqj1sZ56WmwUaSCiWTMbtJNMouNnd2SChs",
  "key31": "2GsunRjj4H1cuQv3vJbVAGddmU4XEg6Aza1kUvH1w7XaTUro4SLrPercUa1HXre7aYBM4jzkRzkQkcVG4v9Qrp8W",
  "key32": "2RzkVHhyu1eZ1uyS1DwXTDP6GxFToTxYLZjkpzaUa855YPx45Kg2PE2tAMfqxSD5oVdXQxzHXX5mDTaqFenwSVco",
  "key33": "3KKLBwBf5v2s3KybXGdPdzFyJ9f98AEgyGnvBwEPWGhAjpX3j2weDb6KKMrVZsyhFZ4Efbx2CVNiZJgkjVyw7Zjj",
  "key34": "LkbqyqCjFKd5hkFbmj4cNQCUYMXL1ADQzo7EJVw3sT6Q77zHDtNRuMFnjwQLCPrfBUm3KWsQ4r8zKRHsvVN115J",
  "key35": "AXZZHdqgz8ZvpnSGSNjk4BQ8RS6mx3He99Kr5uzyNRfXm3soy5nuvKUnVHWqint7YJyqZbF7rKaorVRHFvjafaR",
  "key36": "zMEdFtGZ46ASmtxQm8eRUFet357kfodyWUMVgJzS5A1Z9KgBdqPayZy7fv3tq8ZLgd6Mbu3vj9XKmqZbtHB3nJY",
  "key37": "4SrcKd6nX5Cpovx8MBLLwuoX9ksRBXYxrHSvFoZHdVE6q5proqra71bHPLMBCgeYbX7JPu5AsdsdfPVNGBHAq38Y"
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
