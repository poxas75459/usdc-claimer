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
    "VgYNaHCuHrUnAK9a2ZxRpufpQnadm5UJm4s3tp6gprL3sgMJXy654PjmPzxUigRg9bpTNPAufCUdBrUrV4X7dPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "338VgYjHybs7MBLc9aHS1BWgExApD1YekdjFH9XhVxPgVbfa7PrwjLg1adaETGmB3Ja6p8t9PfGpXP9HhHZjuZ8X",
  "key1": "4Wo622Qq52APnwzj1RQDD2jNKbZ4iDqgxLgn6zRqiz29fpFSkR4YDfLYe56PkbvLs3E9FTkQfdMA1ZghZYfLEYqx",
  "key2": "2xFFg1nhSpLoCTFfiZquPEcVoWxgg2FAUQcc3CwsFzSqNehHg4M78Y73hQ2bundVFScsSHR9BTWBvvTUkijtGgHq",
  "key3": "4gUTt2KPohhV8hEcXbHYfUTuCgLVtkUrtr8SuBLyrGWdNDNimTX7vwH9etuAiSNu9VrphJVPjHeV9jra8iXQsa7x",
  "key4": "42UL3BwWUyvZiaXJpFggtkP9z32MUQFDUVxps65Lykj86Z279nvh7NSLp16LrnhnJ8YuTGY8nQQudtr4ArTRMwpa",
  "key5": "2eonaswzMwLHh4QR7UVbWTrwi7TB3HACZg2ka97m7RqVZKYotntDWeiVSvUVcMN9neKud94kfnRx5y2R8ouKt6bF",
  "key6": "4WsisYAiwFdf6KQ7cv25tjanf2CLXHeMmFMZxYy6RDD1iHbQGD1p3uEACWgjxvpTc7HcqoxfpteVMgm8zqhcK9xx",
  "key7": "5ZFcsDHvoshYpVbN2BacUNUwepTKrRyPNDGaYdeXQZWqaHZozb2VfyAkxPMq6PCtnXNAfQCgDaugNpCJxLNfj4PJ",
  "key8": "3WuD4p2PyvkLGzzYFUwvLecY9PRLHd7cUSPKLNziJcFaCpaSKpt6kVNG6fKAKkjg1wb4dgcDiauGs4kwyKb1xoN6",
  "key9": "M1NecfeXPjjLgCtjsUHRssoH9NSUzn55DrdFVEmDGe85sJNgtWzdmbd5tKJX2DQonJut4mi1hpPQMCZfwhhjJ8X",
  "key10": "2JRXDaz315E5rdNoqXcf2ruRfJqe8pdKVTi7uLA7utD3UxiaXJ7t11hUJxEapDK2mrHkjFunfNU57NCKC7nsrowQ",
  "key11": "gnsiRz3Y2Q5GETh8vJVWdUcpUXEbREWFmcq39w3U4XuzdzYGrnJZM2YrtU12CrrmAeAAgwzG5XRyC5iZHSu46tK",
  "key12": "4WJGfMffYriZ2yg2tgCrL2q7QJbheBTsUpD9o1JspFYb3Vuj7thEWt2PchWzhyyztEeaiazAuRda7Qjc2kQtNX8c",
  "key13": "3ZBMEQP8ZqMXndxDPKdeYKFyBT3rv1Ziz1AB5cRzc4UGacdMRH97bsbJ9hKvam5dyvUqiMiMmuNrPKX4yNv6UEyn",
  "key14": "5okBN3PZG2YHr79NfzNG4VnLg4mRNYf3eYJvQwj8qhivxi3Lb722ps2o2YHEd2CuQ99M58iQCWsPdj186RGhuxnn",
  "key15": "4iyrGMFF688qCQmSwu5gBbLozy3YJ9BgXFkuNtetibyx5xtVqGUoqYXBsqZXSgVKfEWrxFaz1jnEDpkeMdQtUXNm",
  "key16": "4WtLy8cH3TmW91znGX5oyVYtH7HqMd1ePRpPkFpD86RyPQazrTFD5GFnbgMwTy4hrRdsw7AW5JvhG8GCdb9X9KQ7",
  "key17": "VXeUjXCUDnEZrW96weFeoaHbtjP5dEz3G7bV32RD62xof5yWHnd7iKLp9rBjAw9Df22hXWXciKrykWf9t4ZLidE",
  "key18": "4ywAiVi5eMB8B2hJhBZa5azZEMzph1bLqw15R5h5w9NBpBUu2yVDudNTErBwE4RtKxKKLrmMPRZVNPUuBMPDzTg8",
  "key19": "2WqbgsSZ6LXG84s2DzbsnhTMBZCLzAKZLzroBUsrdV5c1stQbaXQr8xCxtwFuvrXrusAcFoQpdzHLgo1HiGRfocE",
  "key20": "4cdZKfSMEQ1gxgFAvJGp7ZUSGRW6QxGPg2knnpZ1umZZ8UypyzELKJvb2eDT6uDRHiJhUQLu4BS9bsYh518pzyGi",
  "key21": "4niLDktVMNuW5t9FH1yVtEaX2W96Za9xe9vQGNP6c8hc9ZznG1VU4Kx26ton2W86yFeuPegn5bXZK2CudFT7njA1",
  "key22": "4FF7rpqAwojvxxbZUTEGEv1KyDy15LfaQmwhVk6sRu26c22rf5Xrc7XDiS1N6knSgRhf2vQAt7miwECFWRRQTAme",
  "key23": "2iRKP2W59g7xyvY78VKyXfoZSXs5E2NtQeeeHiLWnhNY4oNEpsUnWiZ17sXj9RGJpzRDdMEvZ42g1FdQGnkwpBBC",
  "key24": "4jPMGJFo1ENXoBdRhMKNJEtRB2113Jp74HjcuPjgnBZKXtNMzcRuYC9LqBCAv4thQSsH5xaYHTDZPn113gbQAVXq",
  "key25": "3FwoxBscLtL6SVr465w2CuZazQeqvPJ4LtqDhD3K3a6iUV9qagcVGRHfQ4ZsHmhuqhUoiwkBQNw7RUTQFVL99bST",
  "key26": "45cCriwb4vzJq77eTFXT7eZV3Xa6vD4sQdK8g9iaPtT6kUAzbpUeEhDLNgksHBXju4LeMVyFZvXpKUPer9JgZop7",
  "key27": "3Dso4U2PM1ZakTFAmCVQivQWhMvvimZjiWgUyX59xXgcxvrjcayBLWDAen4YSesqQyyovxNBGd2ZuEpc3u2umMQZ",
  "key28": "616gYk4b27kJJo6g61fu9sw98aA8uAwD1kzhzuqv33GEWUu6Q7cbwK821YUs9BAB84UHxN99eT7EgyZ22RfX1K5n",
  "key29": "1PeW7PRHzUsEdJjknanTAa1bMDut9YivrU8WjbdPPctvaWqAjwqauznQ8GY758x5MwHo5K6LXm3E3EpfDPkaNes",
  "key30": "2uGxnY1PGZP6iu5yNWNzXynBisHR1d2Gyo8B5ehXueNMD65idg1sAc7mr1tArz9UmzfN3tqP1A3SGdaQrUKYRXZi",
  "key31": "5VxqhQPAqUCErZK7jfo4K11bd3sppAzS4REkBVprtXt3eUbSMP9wSDzi71BZFhu7Pe1p7iTiww6gozVnwXCqqvNT",
  "key32": "WqQtN3BfbGpT6EyBQfN5v6ApuRjtoYMMzxctsVcVkc4r5HrVvTJNqDUMY4mhXyYPVPHD8W6LVPeaSPvMq5tEzZ8",
  "key33": "WgnyZjVWRMh4tLat6pxLqQD5qTWTc5KvvFhzkgacg6YWSKxZ9k2ssxXWGw1HFNcRxUouKzpYayWPonWVBY5Nbpy",
  "key34": "9tVM2qdBSMr15mMGsVhjv6JMc2cNEyP7Lo8kC8xF1CfhnuCUpxetsqaqKtPNY71hNwkmq5Fz9uHEPA3corZYT24",
  "key35": "5JXjKmzPyDxwNPrmRKaWs95dPeKKbmPHGGApAuS2vjkTpVD4BaQVbdTmoDBeDio7Ufp7mYyq53uk1x3oSGXkkYzq",
  "key36": "3Ktn3dRY4froZ5hrDCGNzVNkJdA9K24Es8HoBA2RkL4ykyimvdrMqW3EiDWRmQ3BsUeZMEpADgwfpaFRkj42igX",
  "key37": "2BmXL9EnNpPyKZTs5KFY4NnJPWyiWMaP4CBjCsGfA3ecrBRm3hsGNtjjgQuZrBv2CrHLyx3oqbsLuUWvXXcTCYbt",
  "key38": "ULcZm1uUVFvk1qwfGhReT8tLxD1yAxtN1p9xFNubxp2CJapCZBUx4hX5y3xU8jHRTtqWk96GcL2xUhVdpWtv3xj",
  "key39": "4nQoAXyjeZE878i1zjrNvxKwUv7CCor1xB5nSvwzU29WtW6dVBPRvjWUjzcZ28WGV37TBvGoEfiTxnz3j5ur7sSZ"
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
