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
    "5WmmBH1282WYPWFiaoqhLpjQEiMaVBVUXUtcH9dEsZFvcRFU4B3pMuSrceVfrFNrX7fi4mX2yVx3S1yqTjRkYQur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4Ss3cytdWxijeGRruugLwg1MXt7y8qXfMXYrbjMbctPv4G9NCU7h5UpVgd3zMXw3cnbyxQp27xeN5x4PLwYPNx",
  "key1": "mAgHMeNRVVijyTNz4q9fFE4YRpWoKqDNYgHaKA4cK7LhSNAMNCp7WqeyEnLWvqVG4bDK9zhCzFNSjjFMmzLGRBL",
  "key2": "22oBTVrCmWvUif7tU57VbT1Vh1ZTZqzTTCLNxYNQAwy9RbPNPsQAXfdKDexuLZDNjb3FikM3b3c4LjDisPUKDjnb",
  "key3": "4pRKtztuhCE1XBF7XAzFEFsDDfFexkNJGyUdenGfGa8rieU6L8r63PMPhNvraqHC2FCdn93QhpZpNhuoP6k6K4Ms",
  "key4": "4qqeVRmyDhF8EMGeGg4tD7pHCDfb2FqeGTpv2TpG8wpmPkvfMcPVMiLCpv6c1wNqJoucvD86SDWVM6HJKAM8QsNt",
  "key5": "3akAcMnjRN2mnj8wJX8v8uwtJhRGBbbXrQFmfYde64un3YwiUurf23XHjKGszzXoiT1HVFDPJsQa7hhRugYWSe6N",
  "key6": "2j3vsEYDBidDM6H15GoG9iLWnDzJQypkGQRL1VFH2kpigirhA2KuT6G4rTqKJsc8nb6gT8nnfvou5gjRJxdRnGPu",
  "key7": "4cc3TTRmthpvzdzsVyXa5yKotdsC5J3Vq1mLMHGxjTknFNh3o6tvhkcXHUj7W2PnL3GX7kVotPjadiZvtMwDFtWB",
  "key8": "33pZEoEAwEJpkPay8qxZzzxcLr92UTXdAbQK4zh6kcd96xtxzyVYhRdMQjz2MAmdrBTrFgLTdHN4evFWdN3eWVri",
  "key9": "4iDCnzgScxFHW8r7XfXbaeu21dszobq2WFmC9bDfnHMtw2UUeiviHgEoyg1hhC9B6z6sGVbbzQDyWzV25pMwyugr",
  "key10": "3jCoEwvEcjbFRosmp3pzUkQLy5672kAwASnpW6oJ2BHizmsqzptreeGJgGCecMemTNtLEQA9uTQFi6XV5XTQ3ABi",
  "key11": "5GHe1y6iH9AXtq1cgPYYArG6GzwPwQR3yojJsjkZrDyfSKbU6x2wVbPe3Kk3HZUiiKhViLTxGiPPs6hJYVr6Qtof",
  "key12": "4mwFrAtyg6XML1HszdWWY1QsxuNUQDbVWNSNGQRxDDj3ABgvPn2DpXPVWppGBLTb2z33WKrYrSSYXDKNVubRhX7n",
  "key13": "W7zbtWL8U6J1WMXrRJ3GvYtGiRWEYS3EQRiGej9wkhZZ24VS8BPAFwFdXjVCqjAQG9njScZmSqTTSD2euUnfCZ4",
  "key14": "3wvRf5SuzA5vfM8YR3hTqA8mesJ6wsbV5fSEZYt9G2m5xPgM3qSWfGYERmLwZDhCwQwnmVBiPNPuMoV1ByKyBwh7",
  "key15": "354CVibmaLLusFrW4yq4oW773BmEVVGrkMRtFyFsyJEgpjbvjW9NUe5UUL1HTpGWFThihLzm9f6UH9Mx9LMABC5h",
  "key16": "4sXabMCgqDtEnsmF2Hr1mWPcZ7H5ayusMUcUZiw3bzhdjNch2x4uswXBvBy7VKmtjKKNYd4zj2usryKBNwsa1VUu",
  "key17": "2axugeoYg53gQJe5kHRZ9uSKfKunjBt2S1YqKbqPsTnmD1d255CEpoNdw4GSMJFMNGfWdMiiTsaknPficQEaHhCv",
  "key18": "5F9wUzm5vdesg4uM9AfWwS8CzU4in3zNb37DkxGWFZ8DjLBpihjtHpfiqgPfnzgcNnHD8645sjeMZtjB1GQdwQAE",
  "key19": "5BFtwjTHcxaGBSA4uKqS83HJ27ZUmsvHZh9CM8m79bGUp6nM7iYRCp2G4CFNVamgQCvEEgzPbAjKkFZFAhchztsF",
  "key20": "BHJUBfcW4wZmAj9TSL49uv5TtZ4wHST6YRr44bjeGcrxkskzNqLdDKjaxeQCF1pALYSJFMJ7zbsGNcgmzGWxzUR",
  "key21": "mu3zo4itLga8KA9Dpw3gPjTYt7jF6etaWqPsrU1qH2Tw1wehaCtPi7VW5iYyRs7ixKeKeEmeYeZuPLDAd9yCCa4",
  "key22": "5wXin2sSD83Nt81NjmckE33ZLFxfNCh2TisjJ8Sj6ApHrviZxnGwkUSirQMh4LpNXa6WJDMvE97pWtZfZAtsUMHd",
  "key23": "paK5RpT5G4gYANrj6gSmJdkML1jmBSG4h8KnPD4D4jJd3MLwP637pSE7MxWm25188Zo4a9cSuDVAFyTG6nV4ea1",
  "key24": "3vwSZTqLFm8Vuzeuvz5QPJAKS21WLxDvM33BELZtdrMEvqCTJ1e5Yu5C8nbXqLS5mfWE7yY7Pmmj9uCXAVJWZ6JD",
  "key25": "4PdedeXUCDRpmcrk7w7BhxDg7okUjkHQF9SzpkYZrM1EQmbnoeZEzKry9KMjuDpDCR8u9umJpuoedUQbDrE8KiBo",
  "key26": "4vS2RcBvtcdeKJZDBnCTrFWVApToZDHPXqJ4reJo19xxk7HRQ11UmmXoEcSz6Cnj9gTzZNubRaAXQXqyRAMMrrCb",
  "key27": "27gFumbHGPEFgYb4azLSX1Buxyj5vuiMLkjB4Ugf5uHkcmoh1iRhTnYv6GLr3DAXVYgSWiSd8b5gYH6r8zsDFVKd",
  "key28": "5s2hhFJN8xPi4btVdjBKAFT1GTB9PHtUKAdEE2jRKpsXqhEQp5brX7nVLQtCiquYsLKey1PYLRVwdkvZFkx1h7fo",
  "key29": "UTT5v1KPuXjcjYPpesKLLZJqje8o4SLPNeRFAZeF6Fo7bxx6mxVPQkUQ5FWVw6mGYKEodFtvrnc4EYt7kYrhp6r",
  "key30": "4QLXxwpB3o97cmmnQqJFLWLNP8a4W85hdheCq5BymFfHdsxSAXabLJ4YUPJc18fwdAkcotE3185ce62cFtwoh77G",
  "key31": "3F5dMgPNRjMDEsGvtsKqzhkp7BFDGjcYMo5KrGZG3nZMALyQ9AHvxzJixZhmRBR2DbshUEaH4ZtvJHE8QuHKfiin",
  "key32": "5JuXsuKf3iV4HkXvgqfVZwawxXvDd9BZyjdkbp2cQSArVADdGuxiXt8QcTiKDUjEMsprNU6TCZGz9EbwNDdYHkET",
  "key33": "5Rr1dDEACWLRZ5t1ndCu2RUd1XaM5YZVLDshfZMx4VryyL6hNknUj2hAbHmeevSJv4uKfnp2EJdq98Zab2BgQ5Jq",
  "key34": "5qajMDUfS49NyuDpgHc47m5oeu2Ta45aJxxQZtpDnuufYG2MhiYHEVTYAVcvN1TD5ZHcCib1AniZV3Za29JdGwdW"
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
