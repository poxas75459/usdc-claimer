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
    "ATqgbQc3DjyvVzqHW9zbQcu2Li5yywT2T8SVox8Vo4AhCMoeEXi9nJ3iKJM6FiebePwAnjFRHHpynE9gfCAq6sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4x2WRR93tSvuo8jh1WjncGjXyDx6sTniZMzUuuR47hyAPqw8HGoab3r6W673p2TvEMCuoi37kAK6BQSFzXe2h9",
  "key1": "62ext1LDrX4vK2peeZBE7txbFLbfQaLdwtwhpssXVoGY66yc8GjMnYHjkGbWQbj3cXSDL3QWRNFjkWFy7kgPoA1X",
  "key2": "GzR3sdvT6Du4e7JoMdzwbdzHrfwp3Vo3kSHff4YtxNobn9bq5HqZVHykUrBMT4mZxLWf8TKdb2zoQ5RHiFcccN7",
  "key3": "4cFuQx45P8qLL45ADXVRP889yqoJspKsmyXxwVp2JUAj7Haj5kGEJbmiVh635wTDzZoAJWuTFkteUhenJZjxnZ1j",
  "key4": "4pzCKM3nquHH56WVgpycLtsCyBKVmQw9gdXsrnqZYngMTpnm7FqXGGsugitbX1fqqxiQKDD6siiLogGTSWzLTGdo",
  "key5": "4vUDEgrEFX2pXWtH8Sw21ipU7ZSuT3YGG4pCP5n2WduzJxnh22vNkoiGXiTUASxehBmzd3DAH2o8mpcEHvTK4uzQ",
  "key6": "fU32WYSKmehe27db6mGG3oodij4Z6NbLeHiZHziFxCoaxQ9v9jPYJWnDGiGs1PAMaRF1B4JbDHPWg3hebNTcMbJ",
  "key7": "2L8JRoySH3H6poZQWtGSCQYVpqi2KybtwdxWbP3xpn3SwriD4eTu3eNKEkxsbp2uqvnoJWbnCcisT7o1x2WLAdzN",
  "key8": "61XsYuRRvRaPtWyXon5uLAXtK1BRfmeuuAX6df2dvjsi3fxpwTTsx3vveBN1yXY1sB5HRSceXDgqdy6AxvTouWdT",
  "key9": "4Pi1pDQeRfQq6EsbSmDvsJEG9ojsxbFpw24WnzcMMnkVvDfVzYgXGFiuzTzBvMxbLDaYehJfD9AQjziEjji6Vjxz",
  "key10": "3j85cSQ6mHxKSkA4F8fW2qDDFgqkQKrd8AoWRg7VqmYnDu3nzxMSYs6Qn6ZCkqAsgo6GAPrRaejouYVbzRTDdmq6",
  "key11": "3oSaXNGtFNuiqSaQgnYZZsPeKt1tg62ENh119RNt4Wrnc5YfsPffmLefNZ4PrKpCu5AUiU2XwUxhUGr56xQWpTVA",
  "key12": "2WmRSkdY48YKGAKy5NmWPA56m9H8ByXHGBNq56toeZL41irwBnxCGCoyQKTySfmdgQLCynX4XWfgbYWPyGzZ2wU4",
  "key13": "3bcDHkpdCpxmwmF5xwNCuAdg8k3XeyuBohoSQeMSofcyX1KUodkuY43BJujDhQFnUBUboLqSq6XZCCsr9dRgWjYo",
  "key14": "2ZaavP9vBoHLLdGBAEcMHSeehMZQo3PmZ78Ab7Tw6uQkEjBsLAfYqGxaSJWQxnpXjTa66oHEL9VJ1Y4YBZHAyeH9",
  "key15": "58qWrKyd4fxbPW9A8Z4wh7sUPtuW4FQGoafvfQGWoFbdJnw9DfrCExjuGbCAKv7SWPZGttpkHAYUBBZP1NYtKzFH",
  "key16": "4cEYMGkxgigVykVR37yo7aGntqWpugxky887gqju42B5ZpV7XfKqqxzXYzhaXkzgu89PNciDBbKH62KkPWpvuSRm",
  "key17": "3dB5WkTvD5zjrsH636Ckq8wUxwJNQtQ2ZGQsqMi7i9sFNkyTwAKaofzH535AYTTHSN3URdTNzV2yzRFeiXEx2KHx",
  "key18": "4AEgWi5SiW2WLVRmRHceZhLqWG5PoEcP24cY9XyeZSUi2LSvoHnvg4BddJGLKXV2KaSCKUY6dWU4t3MDdvpb3jD2",
  "key19": "Pr3vF94dV7mZWMXyoXPbd6V9Gek2R4ZtJrNVPDgmysUx3rfAxTQB96ZA3GcGyg5pHYg6Qqt5EJU1WgqWHxCRmf2",
  "key20": "9CM19V6nSZiw6pRxQim4dH4mFkpWHufTJt66RFwoaPJMxmG6PL3EeRf19LQ2Gqaaf7S282WEZjuNV8LR5C3ntd9",
  "key21": "PbxmsqMsyWPMwwKeWqnLXms9q7QuT7297xRK4SF7bpFpNQ8Jr3o86JVBc6VXRoWqWWmFnqsYJ47X2pmiZBQm9by",
  "key22": "4JNmqdTWB29M2qBD7dkFk184jdcsivZftdXm61zta3BdAPi8Dug65yE5cNSgTuusKEDeMod7MscC24vSv6tLy8xH",
  "key23": "Ww6SsRtskcwaGwhieFBTzJbpjxF5TuWpUxAzQqFjjnpQTVCQkMRBLVQ9P6B5oSyf7F12F9nFSFjSykMbXXceBQL",
  "key24": "4EJT2fgUWK8oE4cnFPcbrZRv8R3rkinE4Ui2Ng384uywcRoZFEUuX6anw6mCyABsWEgvtqkDNSBMF8AHnMHCSSRX",
  "key25": "63n3r5vwA6EPAdq7twXVGdTjkj2K8ypYN42ppXKxuEfE1jRS55ZxYrxuWoWAzPMzgdW8uPR5r9vQHuRhQvuL3zHQ",
  "key26": "67hZ2doHFpHewFj1nvTUQ4xwM4MbaLLP2ygvUUUDYNMPirv7hUi7jzrcDfUFuPZqdxxoM7sWXU3SARqzwJPVWRMC",
  "key27": "YnGewPoNYk32k2yui33gDB4DXGUpDbPwN2nUdUfoC4tPEmB92kvtRqFAuswTPtDD2f4AEbjm3U8QyowcL11X2io",
  "key28": "5C9Np8z453yeYoJGMTL5xaLqYTwVAFJx8jZuBCXnGzW5dntnMgE9xBfAQbvjaETaE7MrBQ289wkmwdkra32kLryv",
  "key29": "39DnpMmjudempo8d3RiGp4TJbESphKT6HwmyRXXSeMCfewQ92dSV6rRiprNBK6UhgtSsf3LEXXAPq7XbsxThN8g6",
  "key30": "3yv9VFUYWJJYfUaiszwgaNzDtzjpMAJVHh1oprgY5k2siQnMJveVNEkuA6S91NXs1Jcfxb29JndeqDYmNtYJMZMt",
  "key31": "25WqNRe3SpVMmdknFRn5PcSucB8uZ7rDeBrMdtQ9cssabHBbVZ7xpjFPYtEC6RHpBsgEkLV8pzKtUWajYFqm3Vag",
  "key32": "5fmYZZNLeqhFg3xSc746rVe687mxZdwhgeKJdomgx3d7943zwjVSfDf3b27kxpz3Ap2GpA3s118HwKyBi2ZU5utQ",
  "key33": "5uGYtAxuFufogr481VoFFcgRHi1af1PLMvGi5PvU76d7V9hnpXsyEHHvxjDrx3BsPNZwytSS6VKcko1HbTwbxhJm"
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
