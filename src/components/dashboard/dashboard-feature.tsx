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
    "XjCJySecTBenLLkzzjaYAH1BGDmHKqGHHHzEegV4x4kq2SVuphGYZwHfFHqHVMWXN17VHt8Fah49ZJhLKZ4AvBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfCA8AzgB4T2k3gjaVJVMh44GK9xNMA1UqKm8oaJsbPReBpj6g3etAb5qVqZ5FL8sj1vQ3eDCHLTdmY2aAAz6ps",
  "key1": "227pozGa6B52pGC8zEoXTEvxCWw6LiQ6PHxLcePVttML7JjiyMqgaUQzQscePT9PQVhgkdwEiqnUrtd1Lw5NQwVL",
  "key2": "35vRZD1NXUg8VWnHbfhv5PAVMgnPK3PT8GmwJqbVKu88Bfcr51REgBjhyF7dQz1AmSe5DSkPXK8TBQMsrnUpJJqt",
  "key3": "2ZJ6ot4ouvHHoVsXiQfEjeFP8q5Xi63FJYpnVD8RTbaL9A1T8whYrcfrytCfSWhj9944YZy9NVoUkDBZK5qknmeC",
  "key4": "Dn9Sy1VVC1ux5DVZ65bUHtZbzpQ9pVRjn9kRG7jdchPHLrx3JurH8vCeEZDJeCZ6XHtK12TareRMSiNvEiTHnPy",
  "key5": "5Ez3dZBQoCaHRdoX4edx7hyxh2GN26HHLh4jzkvjRXk3tzdQmkFNUruUHAMWr8XC8BJoQz6J4hyxMcvMjnDrK9DQ",
  "key6": "54htX2Yypvsc7k9HQLpaMPJ9SMeDg3pNsAirHNghfRwkrhE6vQjb8hrng1apMaNhZYbevKiV1kisBBPdmV9T8cXX",
  "key7": "yet8jrYHTGTsB7HCTFxw4gRQAYLSZiehStyojaY2ANw8B9NQvqCBNiP6GxSBERfD83QL3C5VWkDu94CNz4MAxcU",
  "key8": "2DZgjquoTyeMRd2yEyW6SXnCg2NDygshgEJ71GWW4vgkUCW7doGFPQwjw3MTMtTDSAjWxH9czDsJPo8jKForVcE7",
  "key9": "5UG1aX8jzUqx8R47uD82kSPdAGptpUF5HCL3aJCTzde9KmPNMZbQAosr1ahffc6RbiRQFmKEgBNChCLQvX48VMSc",
  "key10": "mGNG6o8qPP8XBvYEW2hvVXvJQK3oyqgwPdAvy3ax1HRwxLnixNTjQ8QcGURUSGuzv6KtGVpdLHEkoHZ3PgJCKav",
  "key11": "5i8cZxyqtYnLEUZnNmYgsLrrYguWAkhMA27YtqFkvYJQ2C1XvXkDdtQr5z89nwkdYVC2jazJGNXcvMGMHoNwaCYs",
  "key12": "3UqbHy8sa6MquiJ4GQuoF9dQPpKQSesu5KAM1a8iNoPjSeiAJGJHb6uWXhn3C9r2KEv4m11sWdmqqi1Jgy1FjyBe",
  "key13": "4xGFntd5ZLAdUByuMaAn2BnbBLDbaS8L895zTXtpqyjXSZZVHDmHJgTBcPvdNSse27z8SygRwSP8qiyjVbq16F93",
  "key14": "piheKcT5Vq8XwWom4Wot8zNXixuKwnQEtgd3Va1KX28djnUtsTrL7KHGwf5TeSUCPQrHyHq7wtFb4qMHYsk5Gtp",
  "key15": "5KDY11Cn1KucCVva3zCwHBX5LfBtZK1R6UeBQ2d5FviY6M8y4AJ7g2AqFtgVA5SdvMV3R6NBeQHbhqk16svftoMQ",
  "key16": "5GFvWQGZLEsyDWnounGh8S2CkAcyvtM3qNSdTsgRQtzP99fGqJVuqqQdeH4hiY13xSAUdt8JsSW3BfdCH7VzttBc",
  "key17": "3rRmTNXUt8LVazYoLfrTFakk7TwEPjXnGVdx7drHrDULP6tARFdvYBZ62SnABKj1XFn9ALzi9mNW6UFrUvEkur1F",
  "key18": "UpomGt4BcWQWeiJ3ThD1vrhmDrcTji9FF6LfJXGSMio1yUoeNGSMNwcRK3x4N7GYWCG5rRXd7SU6seP8rFsLj2g",
  "key19": "2ciNUxaR84nGuBgpcXYCgot95MmSrTMQEEHLXrQVxZNikk12GxeiEfZCnA67jENAY6zbLtTpgufVGMezCEBrp4RE",
  "key20": "59vWYfXGW5RmxRguo23RAkNHevGS4nS4WGiUN4biPC32RQt2UKvFi6QHy1Pay22466e5YdyWhARundWg544oipjU",
  "key21": "2d4w6BjZr7NFixygbhkn6UQZuMmoxr4RM2a6HbsahtqdKobhuZHrq1eqBr7mxDfvVAhvTM3SaYyUnUKGZeXkdudK",
  "key22": "5VKq9QJH9xfcedjr4cii1U9Bank2wWYG4evrAb8GBFEjHKfXYnPZ2zaAho9PmZoYfx4De7Zo72i8Km5RCmduiYPs",
  "key23": "3xCDMmog8R1aycxDaXGCjk9bJTKfQDvX7i9PkitMzSMmv9JEVrnmWRTWuZnADxQ1MoLyHgnS2V6gd7FcLhodNkFK",
  "key24": "59b11qYYm6fHPJcFUFUxLdugkyC7JtQ9qLHfe7qxM4mfbfVskkXRLrhAavTfZW1VEfBJKZFrYTyQHJE1tTqPsbeV",
  "key25": "57AvEngrXfwB1HC8Qo9SzJbW2iqLAwPqkAJTX6xmmWzCVxMPMENFWt8apZu4jv1TvaDqAFk7TGeQH9dTbZJHZAnN",
  "key26": "5YoCtvDcScfurHroSvSdiKi5WLXf9Jiy5P54z2KTnbpGUJMEd9j58n8M3R8q8CvxYLRU4UYTXziSjhAyuP7Sdim8",
  "key27": "4oyozVhuFccJ9CrCsjauUQA6JsNXpLsDDmJeb2Za3L8AFFJcStnQW6wjunSJrxx64jDCZDUKRsMdbHnY67qCGRYW",
  "key28": "2DhGGQuLHrcpJ4kPDcwLXgi6WDozUAfGF7toFHtmkjutCCSN5b3WKuLGP9NB9dfzaufS1xgbQBVvdFQFPQwMfNBz",
  "key29": "3LjrXC64Qt4ru3nu3Hptk6SpYVyDrEe5kizCsgjTd9XjaR2N8EGSbkHnm1WRnmYJ3E7QXeTp1bUYqBUmoHh4aqbJ",
  "key30": "U4hEQFnbGrjRQrhu7UjVcDQS4J9R8G1VsCtU2zmm8iMuE5mFJ4YUJHY4knxASYZn6husv3x6qPVRYGnK6GnjP4Y",
  "key31": "5PkXzd7wUHoM2DtF5CLaMr6ETX5QQENqyd4iddcDZPZvonX1gxMwiVHeJ7FALbs74EcDtazs1vbkokgGaUpp6Fbg",
  "key32": "4z6r9feLhiJrXaZZvGhxFxb1bWnvmP6DxuyWR6wacnYFTzM7ZM3hDuJotZHUv1uMBWX6UfX7cZG8HqMqkyHS7xXr",
  "key33": "2okSzkh292Gs7GtM3DhsWHsEfpZk4igsvaffcGMScJcpG5zexsikm34nd5Lwb1ycASiN78tkNcQMdKe39QV7c6nn",
  "key34": "5V2UaLzDwDPA5tgvcvLHr3pAjKMUsjPfMF3dRQuG4bpxQbP4SWmMQACAtt6kdZXwBstM3vjsy6TTjPP2fs4AN4Lx",
  "key35": "2QK3maFTe5Vo9FMG48mqPGfEHeRSeEu1Umgi9RFbXMp5Y1QYS8rrtJbrhGYGfJxyvx7Jq3aPvecCnSRZw861oaqv",
  "key36": "tmFnuHGkaKt1vPNmGbdAyDhfPufePS6PRkV1qHkWRy9xTRL3jHVa8LzL6JzLehBr2F655nTvHaDiBr35SzJX8Ta",
  "key37": "5fcdeYrb9RPf8ThxfReQ15jeBBZWqR9byehVZfidoA5QeFVjprYkRhdQrgFmEWxAJbbB9VyodocZpepVh1Vg9H9u"
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
