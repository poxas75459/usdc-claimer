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
    "4hBf5v5j8a5ZaZnsNAdtZj9Nj4oPtqzK6bNXJeCxuFL8XBv2cTTYgb8q4F2yLQUo9UdTYQEF1GBpQmbVG5gDkpSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFggXCJmPDN7MogPCJ6vxpVRVA4Bcqgmk2GqGzWAPNXEgBDU6ddAK9NDrCethh4tCBTKV6M3ocenBHeHXP8FYFn",
  "key1": "55su4oJZsnoLYvHKJYX6k9E5AJhFUUxBXNQ4n66nBMnKUjeUUNAhcY5APR2Ua8WZNm9kbKwMXh8FwQh4c7YqhuUW",
  "key2": "3MQn4E1yin6W3TbfoLnze8cNbnft2MLa92WUF4N6t9kbKFWqsRtggNm88LDsyXyRCxfQcLgrvUaCS6U2itjbuML3",
  "key3": "5NPZPQez9z2KCXHHsEuYd7Fw6P2d7koLjb6XtYBHqh12saSp3DpqMZUton9TuurZHG3ce35KN4gcVnXQ4TJF5xT5",
  "key4": "3vbCo4v68JneecRCD5ucRro7G9hNi1CQG8bwV5e3MbS9UAH6rVoH7QvgCaZeFq61wJGLsqKMnLNXRcJT67t5hbz5",
  "key5": "5Te5KZD8nBcifUrurxGNdjQZ2BtHoSY5BwxwUk3hdwSE7ufH29xcjg1NAtpKUcC1jeqPJcSCLr6jX1cnvYQzSQ1N",
  "key6": "3rmgzA7gn7GSyTV9Mxgq2cDBoRUBg9Recqsiubvey9YN5KE7Ayop8QSEHUnoE6vnGUKiGxUDJNnrQtyzpipD3tFh",
  "key7": "5xr8MS2Gj9JGD29qV4tdW1JP6tFB1RT2qDVRTqQKHZjQhLXp1KMcCjh57D8befz4vkHyfRPSqUsKZiVFa1Zrt2Aw",
  "key8": "2mMH3G9hshAQydx4DvipPZtmtiW8uVwmMrMKMsrhF1UySNvCEEV8TMLFi3RAhnShP1aQXtEtqXAyegwJviktpK9c",
  "key9": "4uXxX6HjFCFF4Ff67Pnb294jE5kk2m69PMYGeDrnDfieABvFGif92vcJ6Mei4J9nV7hDvidWq52cssbbMymwMh7t",
  "key10": "QFBF2vTMW2t3Aprrt7sksKGbd93i1EbDtFpL2WKYb7c3tDeLGHjsQR1D3QHWNJKFYfo6frBhUHE45sAyUQBfkBS",
  "key11": "59CNtXyaxYQiAtxvJLWeyq2MqZqykQiay9obVCawMoGJad2zKwjrqM6Q7UHLfhKDZUFQMKAf8bXB6oMJy874Znik",
  "key12": "2kWCVVbyuWrLVPyBq5kMJRsvvmVBaN91DTTnFVKQ39SDbADui2bDjC9PV2zLRxjBpkuV96FE8sUKEtbcCjCDZctK",
  "key13": "3LNFbTWkke57xTKArYaiW2piVnX58uJaMLsanPUyLBTtMUrzJBwDCXyHCS3zyzh2oq44EPRnVbXyQWGL9JnTKVv9",
  "key14": "5uMooKWvj53yd21bx27N4xU5EmBSUoaDcyKGCRZyLK3PNowtsfDQcV4USaKHAvdVCtvXwMgUw7s7GcGrnsPmg7HZ",
  "key15": "xBQ6zhah2mAue1M3ii8TmeMRv8oJ8A1tZkvA4szUEkZsYb3jQUCMuYqBqSmW59yMRSqVKqaCYQkYn46S1vZWTQZ",
  "key16": "5buhtGiL8ALixsEh73MEk2T5sgZNunJY12SC1dEZcQAYknufrRBGNqKnsdKwkPQxocgdH9so23P3tZvanCk3VyYS",
  "key17": "23CaRcdR2NkpRwgGWypnLN8q3154zXHiAf2QRXkDJnQYXzHaDQzN3HZmEb5Kgm6y7E93SpbbArAjCQ2gkUhoCxYt",
  "key18": "3CuUab4Sx2XHVzwRqB3gAgSzb75Zm3eZb5dAb5zySbagNDMxihkowffJEzwdAZHSHE58K13DppkmEpdbfgCWCGmt",
  "key19": "hiMMYdg6ErUkgBn9QsC5QdLtuQprESnmk3gjNF5MAgvkJwhDRgSCAkyLxq8zzzs6doxmnoyezELndAWJ8UkzVrc",
  "key20": "518nvahY4xauzzk2Kq8Szx4gwfmgHuT9Be7WEeRteD7jRgmNM4ZkoSejXokteuj1bftgKPA2kRzL2p8yBEY2DN1n",
  "key21": "5mLjjemCn27JvKNKnwVAcCk1dcjEZGXxy6TcipK3jqiVMCdNL6rTNbKF3cEnioY88NtkXBrg6jCQZSXnQX3GcLwb",
  "key22": "4y8EgdaKmNsuTCrcrxqAKQQzmYMVN8Br9bgHAZrfvwuvrNSb4WRU2tTuw2pZZP3D2LcBmULVPcZgusMuQmNeoZAd",
  "key23": "33N25DbEZ8vjYBxXd5Nm79qNKguo843ewLosRWFmNB2Vp37wjPCUsebJRiYu6kA1Mw4pauSj69VE2YTeJ24zxmNY",
  "key24": "5pwHaVRGDMas6SjjQChTmSGBxFKvuCEqJ5BQUZzD4TdyQgkS5JfXgWtNKVCRoZoAJMyjWDS4KsfHFfZPsdyGeXUi",
  "key25": "KCF2pXJZ7DyTAuSiFyCNd45tSF9iUGa6pLbGtVPfcifRhYHptCTodaacnUDGikW4V8LbwLyR7nU395iFAFgnzZH",
  "key26": "eDc6NgW6fEnjB3A49jEMy14BZDyzJ2T4T1S3GwXD2DgGB9cCGaKDbbvxJ5drZdzKfjXNQUEmHD9nrU9x6CkFTgi",
  "key27": "676PFtnLjS6rjeaHwKTbn6FABUdkrWRDHXfu14d59U4L5sAPtpfyoeNTLS1pa1CpzssmK4zcjBYMiFEYMgsAYXbD",
  "key28": "63qoc7CFN5zJ66eEWvkmq5QMiA4qXmjuSi7mcCLi1icJ2kmz2XGw7UPjE7Ym5ovDZExRkyJNLgE1BG4NJQU5XJzV",
  "key29": "3UJRdUzwWR4w9Ne2fE64sSM3w6TM4Y3V9uaWqKsLQwXc6DxT1akoUwnoS2rjx6gC2Sn48bwZeRz5akY5RJX5YcAa",
  "key30": "36P12PCaLd9nDzaoNYMhBvk575gqaf8ViLPd95LJmZacEPSuVaL2MAyd4m8sh3xZZsNyQXB5grU91Byr8tm7Kfk",
  "key31": "3ZdsJjfidBQs1q9pgBUozvGf74T7evmuiTNSA2mpSDdLo3d9MPH2xSwuLseprJV3zCSdxYS3YbGPuuy2La1nXQ4Y",
  "key32": "fsPwLnUhYfMUT7LKzZrAqKmKm6b2LEJ3QHUBm5qK5JeZTvAJUcw3xo33NksotBNENLdDLMYZZNypovKvsa9wqrU",
  "key33": "4k81AvxtoXeZ8bH1mHgbp65JXFW4vGcPatYWd4pNRsvMi4fB4qmDoiKezWNzzq1xav5XkjF9DGvRhaXHhqsNSd8U",
  "key34": "vGv8aztrYsQnZqUF5P4srSBwKKjoBExjiHXmA2xhjte9H7GRGMjeeZZmDemDxJLrzkrLycqosEz5QgkZCgEWYty",
  "key35": "3dBXFsnSNWVN5UerHHX3h4BQiz7BAKgwR9ddmQKtqJaMn9sS2HzY9CCknGLNrAroWT9vM5YXhvJc1EHNk7zA15nq",
  "key36": "5jH2s5eGHy78kaT7Nd9Z1nJf6uRNBzJVyiMaCWxr9rNvyGnHzKiFcdd4cdadeBrcGzRttkAuNvUnDEWPDDQxDUks",
  "key37": "3YR5TY6L83LWA3svF9Ty7hKLmkwnMEaQVB9Nj6PKgtxDbX9CgRWYkeA86KKTYPpkPHYojhM3xv5bCs7PkFW2prGf",
  "key38": "4rjXMWG1hBFxZoDnwjE1U56ojSQbMwHFZAWUTdDEic823gDPeUDjDByGZbFLkMZYWZHsSgDtLR97gmdGG14HaYs8",
  "key39": "5Rn7QiyhVujoqoPXh5Td2YfvYGSsxfMuAYnqhS979PbYEYToQ9g4RB6k7NDA9vpq3GafM4qv8Wsm6EfYtdCUZPYA",
  "key40": "5AGzTrgKAmtkRaUF85i366pXAkqgVTA3kmYiyYejveLKyvioj2kNgxBCyhRYZBwz48K538yEcLR6AGaGpv3bBxD9",
  "key41": "5VMwuv7WrC993KfAdskvraAQap6HuS2WZ1vE8qg3o5vroLXSb5ZokwjshMZs5ZhcZzXtnn3PqvGSe1jaSPZyxMCP",
  "key42": "2sLnLSgysPgNz7NHYhhYZVvJUz3ohWze3aWAUBjqgrXijNyrY5JrjwUwgk5pu48KtX6TPBEjwiNKpS5MLoTjRr9"
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
