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
    "2gHNguGByAMtscGnmr48rxoNJ3z5oUt95bEZWu1uU7BcVjUWRd1MjcwgGae4BUbyDtjoVViwWwQ7TMBdroNjTqPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KzRHpVKzR34Z13CFhvbZodrFXWWhpzDTNQgTKYRRruHBcXoqY6CCt2AGqkdWzvtKBnSgUa5Q8nVuhxqaaU2Cv9U",
  "key1": "55WmABh8Q8gqy1LWmGarCeeCWfQWiqBStFvSMfbGJc2c6v5nmaRKmzXd3KE1eiVBduFvAYvatEUWaW8TLjHPxjpe",
  "key2": "5CuELT9cSckdUQn9RUSEJJbMRg2UCWKNb31a4DUYKSBm3tUaaU7qjnoGRXHLJQSNqnCrAKLMYcwnRaJBKXpP6VWT",
  "key3": "3hhhGKKqV8rytDrSisXztS6LdsKX8Fs2iDsAP8JYrk6SAra3NZ3114Zr4nJqCdLkh1ALxaBUjnKY8CALnVXX6eow",
  "key4": "4WAcESFbfQzYFdonP2wstYz7GxtV7Q52VgTp7TrqiotJ1C7SBi5VtBv68oEg73Tk8GVNrr4NCwGj11WnbQhAU6K1",
  "key5": "A1Jmv94TWyY7CYHHgVhWC8Bq6CX5EHUKYrvYJMHMDD3ev6q2z4qCJv9KtLLRRwK3ykZr29e1vajUsVxk5oVT6hr",
  "key6": "53b76wLbdJesj4etkNBASxtqLSGw9P826V75xCfCoSeSruBa656nCqL2JGTys1TsRcnM7zDvG4qLseJzDsAoWz18",
  "key7": "5f6DovSNyACc1uU31HnRQdi1h4dpj531Y19Zm4H6hcmdRtDhsF4u2BSHzStzbDpZwEiNqHJssu6twdz3PGiFLKhi",
  "key8": "4qy6ZvZwjCTzDEA6Akmc44LK2RtMiGr43juxDiTTsqPhpvxv6Uwp5svgcGM9JG1VLvmRYm6vCm2VSxPGif3Xhhda",
  "key9": "2KpRWMvgFeypC8mA2VrLYKRh5TBm6xzVPswBhGFnLafPwGZy2LDNFuyvWFnU3ybQ6MN3D8fZi55M4FYiq6f8ar9K",
  "key10": "3Merz6Ugfr6hod6HfTzZWsrwhLVZiLnfw3Hf41c5DDXWaRi2muZ9a5resxsUGmineE6yJmQurj2bcaRcZbLuBcf6",
  "key11": "56YWNgzY2hkZ143BcmsqPofW6wXGfRKS7pzmZjDJ8nLsh8hMPtRa7VZ54vxUFBtEjLrceXywpPyMj9ii5Nn4CFcQ",
  "key12": "4rkGiHcXJSzbu7Hn8KwvTzoDGrw6nxKeE5D2P4oddGF4FkYxP9UGJWk4XMgau1w2JFP8vmUCaUcXVQ5FwfgRf4Fv",
  "key13": "3wZWqkZhT4birBTi1jh46VUGQyiH9UjRJWotbCCMipVGg6UvgqZAijbKubJXpvfzrc8H7Bz3cUMziJ7EsxyTZUiG",
  "key14": "Wobzn2tBResZRcA2fr2WRiqck31LHj8n7DYvZQZbTnehr8EfsaSRUkWV7GjC5hesprJMK1p5sUDUBkdZZ5Eqjj1",
  "key15": "5cPJ1n4VLpKfkjMSsthhFXmrG2pPjyQRByUzgDGxvnMQCTHDmz2xRe8rw5T7k8EyYtFJVSuXFGY8fLLWVNDejKTS",
  "key16": "3pVKxPx8cJMDswyd1qnAWzqSbRQCvBbLuBNBLQ8BeHPEj9riwzfamHhSdVKrtacUgEux5yBcDc4sgWPqXwpNTxbg",
  "key17": "3BtyywXdRHDjGaKwoDSiMAX2emLomeo9rkoV2qSZLxBCREpjY3na45WwDKNbggMUiwTKQWnQdCU8BfumpNvyLLSP",
  "key18": "2QP1zGmSxUKF9uzoKjVNvZabaMn39jRYtf96EhTGDsrbeJdUfoUw9Qp2QfVh9pA5W48HZgqLFJY2h7ms43SdGzsH",
  "key19": "4UycoUxRtUvKhuw1xK2wcJJuxiz5UAxfHuanJZfMgKx4F8nQ9p7WbsSbVJAN2Y9atWDeCV2AnqAqBiJJcye5xrox",
  "key20": "MMpgeDkTqwjEVKqpr63y7fSFGjkqtLXr2wjPq2CmgFmLEynKM7kGRndCooyjHrV4RkyRL6rzmwo8Zczts2dizUq",
  "key21": "492oQ5Yo8ZoyV4b4rwF3AgMGcf1JyYMgBt3AyW6cbhAJRLqUDcGE5CBhPhU3jqwojhp6akJaLsZH7mMk5KTfyeHy",
  "key22": "3qkJ9arfmDGgeftjaN2j3xQEATxyfhCsbVdKEfteiKZeZheJNMy5Envo9g215S3hyvvtcLokPGEYJ7oRknehDnE1",
  "key23": "2EoPA7SK5AJpmofCM4eajk9thhT4ieJbAF4oF69iQZCDLsx91iLabkcUgkH8od1UyY8c1bgcXuP9CHsmVt5jSU6H",
  "key24": "3zpktLGo69ZDpbnnuS4k97euovqXqDf2aMj3SANY397Bkq33wmz22amhc7a9xDxXxDVzm6jef47jFiTWKSEUh7GA",
  "key25": "T1FNrd5WkUQ7ZCB6dkpDkjhb7Nn99ceTukAHPth6djgtJGzQEUEKpT1HnckJYDKxFZHEYH37V8mYBqQevyVuiy8",
  "key26": "36hDPf9PcHUni3Vw5HYbZKsNezr84GDt5HRhFGo4ncqGHo5DfNd4GS9i2hLVivZF2dWeCeKqHHzQSxgV2gtzTCyi",
  "key27": "ZxYj9LVMVkUAiKXVPPt6h38aYQN6prTyEQFyG6tEFRRipCY6ZEnBPbdZNnoABk8JDePU7Fw7zVpFA77M21r9mGF",
  "key28": "3EtL1EDXm4CUHME81HpUgyS1kFBppJHGs6zrykheqeSGtoLB32QWhXuNLeqnDdhCchG4wVrbiTmxeJG8NEg8AvoB",
  "key29": "2STXCKHFVxN4Ud45MjYzrdkF81UEfb7UodcmD8wCxzju6vF5Knv4ym6DBP4DxaaRff1Kokn1xHn2cQ6PArFeeVwP",
  "key30": "23KPhFyns26avG1DdPnJw9CFjVW2kXB6TDNDbDh3TutgQNPDiVU34D3osDJQtJxwS1dqyrpANBctfofFoSN86hUV",
  "key31": "2doLQ6w4ugpGAWiWpk8kNgqtADykneVMSfjyTK5mMdoZMLCQFxQUrK1KXenBMHrSKNXsKScYawuURf5CxpLoQT2Z",
  "key32": "nJL8giRSVjMMSK1szmdxMyfYtFDuzjgh2py2Ngtp8VygLTkvMpc8rpjnBQvDfG8yE3PZz6VakiGpHXY1owcjm24",
  "key33": "4sD539sVRq1dHcc2qJehgjPzUrwrqmSTF6rzLTEH8qhqi1P1QDuJsewkM6gSXib1Lo6ymWC6xVfiQVMMnQvt65Bi",
  "key34": "3pi7354WzDbFjzp88L7YZynKyGXdSwQ5WZHFYzPusUhD53DRHDbhR7RGXaF3BwoCmzRxvVTjundeU1AWk3hRdnWR",
  "key35": "5DhsRCihQoLahVFHe9BdVSLmQBTaSqZfdx7twPMpwWCpdTu9GfEBMjadetG3wTaPU87zdQZbRGPqdGv77PE4hGMa",
  "key36": "2mCCgZKfmthU3EKZ7ZBALkkMqUmkmibRbet5iE7AZEjSwLWvX78GVjbiWD2xduUPzoGfwTFip81x4TgzQkJxvVGc",
  "key37": "RZxTPUpiLebpfdM8jjsuZWZ6S6LSZhL8DDBEQxU7Zj48KZReuSTfiDpJRs7N1H1zb2bU3LXsc8a5kvJPUu6dyce",
  "key38": "3Xzt69gVbbnipzhBKhsobZJVgEDBGsTPV74pCYvGnv2We2D8ynvcfcRgMd1amstyTVn3UBhEEBoeAVPLZ1dcHZkm",
  "key39": "2kwT2W1fX4yiV3UnWq6RsEMDbBGBdJvzgeeGgifuZHZhZRTAb37gQUNtUDzmkM9eVLXNbgs2Ci5AW1Zpf5UQqqqn",
  "key40": "4JVyV1pXdwetF1o5qHeNWgTrvJzdxASpiFMWXk7Y71R7bN3Wi88XqxwYTmj8xdBpjPCh2JRm2AAxSUmoxa3FNAiB",
  "key41": "2fqScR55U3q3EtUhxN78eF4Y4ULS97usMKSPY689yqzNpSgNFx7WCGNDsiNTA38cFmhS7AWJmEsUsZuDRkLXjWfD"
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
