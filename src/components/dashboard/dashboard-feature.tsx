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
    "2e6q8tiBEkphcfcqwoS4KrSdFeMfMkdxi2o39B9mfoZak57TGQfCE3Lf1yNwAm9yrDuRNPoGZonMGqz1sD52EEZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j66Lz3uEM9CwJxSf1XoSokj4Utnbfp5bpqLBBXEhXYsu4ygv7b2Dxqg6ckJf66ru7EjJDt14fb2PYBFGXuDqmfE",
  "key1": "25AMqFjHDyrhRAb6edc1kzD9Mn9Noj7HkfzcYv2r5d7TpfMeCBqbNZY7PbPcTF39mqBq5nVLFFbaAeUJnFxPrXP7",
  "key2": "3ddVGntyBdBtJYvd3N1gZPpDRp2j5vbtuBGq37AzzFMhGQKYow4P4PePJvwAkLFYtrdty6nf3RknqLsXGRntqLCG",
  "key3": "ZM1hojVLpfL5xpBXvn3HpNYuF3HfZ3Mrw79XhgyjjtYa1mXaNLm6tn2RrEg9Y47gJZQjRvaosP4CioFzA7Fqtjg",
  "key4": "3BBiYBMz5KjEDCNVBneQedXUuJSpVQmxn26nSN8LgPVbd3j6aECqrubc4DrPAw2zi1vq1orja7TaK17HYREiSX81",
  "key5": "5zSco8p83GHWrJcwPf8xsiTHw5gq46iCGWV8UJBathJfNMPpSMvbeqcYYVnugTp3XTsY7zRmtfhRstH1h1yBdEnq",
  "key6": "2Sujju6oSWeJNYPCnWsJXjH4ijxDR8eVym3RZJknhrD3jWrDdG15B96xXVBFUbLwNKx7cyKrQPCXApkV7TRSq7A1",
  "key7": "46RH8r91VeWqVuEZTRKezGRHgX2i8j2xdtY9JdA6aX3YJPh8xh4FEZuPCftkLECqir9pvYr3JQt48WZbXKPmnvK8",
  "key8": "4oZkB5kLfFGquHxe7ZSdgzoEpSfbuttkMWs22vDVrKADZkoxHTQZbybgtjQ6AoEAH3hbw4BzwRrESRqsC9Ui3jMY",
  "key9": "8wbKF4tmoScUoJV2UU47GCEUzVEy3kr78fJVBxymuZxZ4Q5CLsnTHvvzTLAGUDNuUw2AcxrhAdseckWWTF13aqi",
  "key10": "MMAMYqoRR921YPikaBWNq9ZHUoFtYtbaC6eGJ1XjcQpRMgizf4D9bvLaks9mRKz2SFkAvA8iccuGkWfSjJn4nP6",
  "key11": "5bgX2tKKK1VrrqbgXBqyGfovavFbpV2ofvB1JzmGpXUmGAtxDFvhhNNJesepRwPU8yimiajNMZyjXnS4wj3CwKzP",
  "key12": "o7M4et9YwyaJj772Kawg3y8YLFhBjJpSNGmMAJPNXwC8qCjsRZhmpTRFHuzEV6ckVKUgY57gxyn4Jd5hToSgycf",
  "key13": "4ETVkzMcEtCpdkQsRmhssnugXAAu7hZfyF1YU4j3jjs2aZbkLGtf823uwAq1cLEgFpboafePHeeYPGpf8NJ3uPuZ",
  "key14": "3w6cVoSU4pCNnBuu76g47dj9AaVevR8TPFWWbBriAMSkrvNk1QfnQDxkiRArYmXq4fSLcD9ECTbSE2PXDYXbp48C",
  "key15": "4yhXvAGSaQxz7FqPPxG1HKReTSL2qa9gXj66EEGnynH27cPhmv48uCdZR8vMb9XWbDHkjU82Vp4wb7g4sViQn2a2",
  "key16": "rWV4QVmYga9mGExg3T5eDKYg4FCGaNRrAmBXjCafcgWv9CcZZ816vH9uuoG7dSqYYMVX6xsBYfgnwss9UiMVVKX",
  "key17": "5jpipSHtshBeqzE2f6KKmTMhfnnLmw3kRRf2PaB2PNcSYhQ7CzCRGqS98re73RCRKUyhdPMVg1Y1NZpeEULGkkod",
  "key18": "2v1838tAjxeJL7Mha5M9w7ns4QmrRFoha462J824GMg3oZXB1Siribu75U1PTsZ2Y2io5AWoB54EYt9vZLVCshGf",
  "key19": "4bDrXG1EGFDousnM68arikkh4icCfR3W32YFYS9DJD2cbpJ3UGZKwUHpp31SknzKsiTcV7Ya3inhmKD2LApLEgMo",
  "key20": "3YTesAR7RMnckBa1CoKPnxUyhw9oNoKkJjZ1acUnNXYemAGei88W2WjUvCBuZgS1wgkEyG6hK3Di1kDaVDeHFJes",
  "key21": "5bfpSvGZanfNpUC5CrAxy41zKEev3GmwVvKLkoRPJ9vjLaZVXeoMUtsrU1etQNVUcsU5TS7oyqiD4ANECxo1dkpA",
  "key22": "2mct9Wonw8Pwy3bLkgpsvWzz2hrnwrBtSCYaXVbMtcEZwqtLqMC5YDQFdGXnMR8xJ2nmXViweSnX7f5CqctT4a25",
  "key23": "2ZjEAMF7v1dLATGyPg1zofw2GsU8exvTH8tfDYRC5ExP9XvxF94ddaUNhDM4QifTcPmBXgx9a73E8psvVYkLYRKh",
  "key24": "2gAaxNy9zRd6qGFGbCHgKPMaDtatEAjri2t3MLgEKt9w8stcuvvJ5bELQtaHQpRz14exyNSYmLRNzACnSW2APre2",
  "key25": "4W7ubvXtLG8uzyDSMudAq6pFCigwQB7kB2xdFwEsEky7mXRocmTfTE918rMizKEFb2bVjgVDqWC9NRCeNPnXMxqt",
  "key26": "5eExQizKf2kGdJiRwUk1pMKDAbeyLpxNabDwcJjuMX7Kj8eZPJC84DouCtqcjYwSgtkQx9jpwanuh3zsUwNBTvFd",
  "key27": "4PW6iwg8WeiegxMREU5yi6sZ98jMhNH8pLqfDC6SQb3oAQcc8CwTUmmiroZJUmeSWTbvGDMpF9tmpa7YfMWf32Uf",
  "key28": "5wrYH3JNEaxKx3n1kX7zVK43rsAFHS36z4yHfUSCbGpEcz3bujhJHPiHgZXZ6zED9vJ7nhRTqCyzizsZ4hUasYRL",
  "key29": "5dYLgcABwBtcBv4nyxiBSRcDonp1FBHoLf2zQuGRp6kMc2oswQpTVNwMWDBoV9oLCuh6bpiwJ8FTC8KqZ7zzWyMQ",
  "key30": "3w5md1qndNCD7aiYiRBnsUG5MdKBXthzyoTdveeUZymzERNU38PdcWaJ8fLg5D9ShApGBjD1rGuZ7zYzNiNchbbT",
  "key31": "4PyM4o5nWdkXHcert6qx94ZsbAvjF8MC7bJT1ecWwwb9K5w6Zpj5A2WQCvR4hhumYuywHNJsckYCNMuGGaNMe7qw",
  "key32": "478mWhoaAn2vSJoxxgyoEDN9yfsM2B9BWh4CSnXHMWr8pEUiZVxPNPGQioeVhCu3GvNoryuTnNvCXso144pBAoCB",
  "key33": "aXTEHcVsvUb6cFwVssvPPK3mmibP4g2Hn4cU4tfmA96F3MAe9mGTe1QhmW7m6mb4u5k99WrvXYSFXGqHprVqFTY",
  "key34": "39sva9QyeogixDkWXi3Mx26YDAdsvVzJqMtdxaJy5iomsJNaoXKLL3GzybPMTHf6Nu6DNCYi92ffkjTbiFgah7wg",
  "key35": "5pMMok74KkaRAu3C1pnyaP1jmweUkzfs2cYDdNN1NFx9227jU8gQPaRaEg76NvVnPdqrj1r3hZM7MDcCaRLJZwqH",
  "key36": "5v6k47yZHMBR1kKgGbKZhf6CFZuDQGQhEonFHfCCmk4v7zjyXxbNY7AmtfMb7RHs9rjDTN4MrNVqCMxf1fdJHvEu",
  "key37": "29phqN37ZTLNgoJHFmE7TXyQAkgPQZ1PxTWS3crnvqXaHxprJu4m8S55xCz7UCR5zewTS1yaonAv9xTnB369WQnu",
  "key38": "3qKZEJNZFiipoeXxnCEePPd4NUFgNq8PQtBFA69RpCbUnmkdPcBjdUSXSAEkXmV7CpHRw4cnBUebJNyCyWZzKpC9",
  "key39": "TRGWmVacj6CGxBSb2HTGUbnABpT78VHW1tZNCtKtwBNDDJMc3w6CV1bfvyPbumQhWSRFNhF2xZehGoApEpYA78n",
  "key40": "3iDZ9Xf71NqzKDAyWrC3P5zAQUqiogt2meQXwawMQGJtGJfahfrd4VTMTXuHC7xHCU2wAGNXkpTFLWiTV9zKxBp1",
  "key41": "2jz3CJwiv8FAwasB1ZGWZwH1uusK4FXobhiAGnftDfvDbKTDnamKmjymnvurto7DrEu5hK4YvDA7s61Ji9txTR9V",
  "key42": "5amZnMjVSS1X2ahmzh2vYzop9umPwSVsjRC9P3SCfmPAvBPjEmma5qp7NiJLSaxhPYfJUzs4AD9DzpdgTodKbrjA",
  "key43": "4ues5dW1VYb8onvweC3LRmrZbSMJUgakLqKrtcdkXDDpAm3TD8kYxXHLhshaNScvMDMi7k87aW67CS7jhcT7P99n",
  "key44": "4AhcYrLXd9BYuRRQCbi3U9BmY4TCfmzoQcDyC2SrmgrVJnnmbghViywVTxSiBBUk7HtrczBkNYp66Uw1MYdxEaHR",
  "key45": "3RRFZzuE5XioxKTRoznXpGKifkJb4pY1Y4FHj71fWSpZWXLU8KnKQEWBFMshp2gaQCzw1WyUUZFyxRTYt82PA8R6"
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
