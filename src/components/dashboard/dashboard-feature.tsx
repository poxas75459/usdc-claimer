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
    "4xFfUWewgHUT2dnRbwG8xCF1FHJvt37ZL8kikUMmBwR1g3qN3MpgJ2Cr4S3vkRcCNVAarHFceNXqbteDpW5jqQCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DsLaMsZqkSux9gkKvYMMGbinr1Si29BVnFvCGwMbcqsmWKgqT2KUMtaBwsdpwqPdgQZwaGCG6zxgQ4JchCQooqV",
  "key1": "3b9hjXeNaKBm1FKDhyruE55ZFfuqurUnqfNbHZhEtnXE2cPz6SCvjgiw7jVvTPs89D959QMES8ynvYEyRUYZVD7r",
  "key2": "4tj7kKb8FMcnBLZEzCRysXQw1FpdyucRH2C65NGnKAu7i2UVEB344ink6uYDJwHqPuMakNab6n6nnwzK6TqLciFg",
  "key3": "4Sdp442EKVgHLaRvFLQKmCVZc8AkEALDaSzxDKg81opwJemzyZE1HVCx37NLdUwoZpaXCZQKLdPowM1V5P9L7bkH",
  "key4": "2QRajwyRtjQpDiuV4NDJE68WtebYUbRhwkMQZofMXtnhs55J8pPt3nGqcx7aTzEbLvHu3LD9KXUFKR5xPRrvFWSX",
  "key5": "3DpgszvRGH8bvkgg3AEDSARwzCARbwR3UFmx9cW9YCtMakng1zrmvkKtDr6RwWiueoo18keutW4C8pwazG8KFwVg",
  "key6": "3rTiy9b3r9hzV1bFu2ce2AnN69ojRiDNJXUKaaeMHhVbZYHj2YLLutz1362h1Qr4USZSbNNB5Y8GdpJqu9t7D8ef",
  "key7": "3iJ3NWkeu9LMYDi2xhmVxgmkdkmHN8TJkE9BtZCbgGo29pVZJmSgXNKhtzHRJhTaPvbo5kYbF7UcyAgNVv8P2nQW",
  "key8": "37pEVvvTHQkNRmYHCr4tfTjVCfn8ZPZ1fCgZpk3PSoSQeSjvExKoCNpiWznYFLprHfgJZ7vmpxQ9DHW74S919sdS",
  "key9": "3WnDDcqc1pQtxFEe9G3VtswTPPRRdnwZmu4gKNSwVUxPdSf6NBnxxe4sVYm6qzEwT9iBTR2DiRancLhkhUA1jo1M",
  "key10": "2vC1FAUWEajmTXzGNm2XP18kDChPsYGpz7yovYmAVjrzZGPyNhLkdXF9z3ewP3xvCyxtY1yXtReTq3rqXz8DeVn",
  "key11": "3ZfgwnVAyXJhbzV65erXBLNGaYwGwMhiyuh6fmdhCAsnB1MJvpZGiJkuQfL18ygFXFQoe9rc6V3PaqSrsjcv8Kfb",
  "key12": "BmkkenwRxTReCtHfrBrgjmF6BeEWfeYo1GopkE4YLM9rkVYE97DYUn2iWeFAUbSaJyTz8qe89LwBgBiUr2C2sWp",
  "key13": "4XZ7KXRWJcowXDaUHXJTTSYpejsuRN33TmAMkUqKgqaws8wq7PYMhjQARQ46NUvoAe6BrpLWgKP8quAvspmR5rz9",
  "key14": "58BKhma2gdx3oKMsZEzTWps64cBhgkCendZKXLFhnVdG4kmEwQCxoSufhKf3x8cbTB12TzzG56ZCgN1mRLpE1Xyx",
  "key15": "2QeafrajAAxqYqrK16tWWCDm4MXnLo8dTixMfF4dVmKN16iKqVqxwSfjAarreBXJRV8nErBmFRhgzWjDAvuKC3j5",
  "key16": "2DZt3rZm4SNmWdXakwaYTgKdpmYVUfBwbMJcda9MYZRMVZ8EGJFxTA69UvftVNgJ9QYoK1qMoJYZENNtsnkiothj",
  "key17": "2nuHV3UqVNRfMV4ZsFfcTumnbiDT4sZJCDbWHk6CkMTjmt8WN1e3KsSWWex5a7eY6xcKGPgvhziHAwyfanA1ukfA",
  "key18": "311Yutp7B6rxSE1oiwkmD29WKCMYu7Ag88GjfdHhpoyXJJ4Mp9mXGd3vMgfFP91pWTEJeAwzShokss2S36f5fppP",
  "key19": "4b26aZfoxdPjiaZGKW4aUZVbFCko2BSYLLXg6Kk4yuigceRg7fe8KsytykTgUGmu8XSGNqiMQLxysdGnTaqCFgDi",
  "key20": "Ju4CCpYLGVuqPXQ6tZqB85F5jqLeutaYvGdgNKtpcvVdnJAU5GFTr6bLqpMAeScfyqyRhn91FMMnE1H9re9FbFo",
  "key21": "5gqT6bAPVVLRBwmAFTiWnwGCM1v9jNBtYGmFkWKuHrvntW7TeKYdeYk3DSfQBmX7HEMvR61t4RQjsyYesNss598v",
  "key22": "fyn7s8DnxxaXoKq6VaVLwqzY2KXKFZTC2s9L6JTRWNfyKJMdhP3BbgJEvY5VvyT8gcTAtXJaxmWqY5YcB9g8pvf",
  "key23": "3RvhLqvNuvNtsLYe6Tjr49dV3o41Ggw6Nr51Tsj7xfLdVqaNz1jZEJobUHBohVYj9QaDjd4iKJNuQnwQ6zZzCxPh",
  "key24": "3ATiH7ijvgHoSB3DuzwCBSXv9z5W8JTpHCV4jjxV28ZAd8hfPzbVStbbQ8cAD5pAD8CRfRrd6tfBVCiErGDozCgA",
  "key25": "3t3keZytcbGuELQUGqiCi1UVJp5QJzMbetqzAm8zxGzX1h1vCqR2cK9DEu32zmYUeeNr96fNM35DvsXCyQAKV6SG",
  "key26": "5u7WevRykW13aSD7ntVqFgpuEmwV2JCYbEPeN3H4W4qJUWuyQby9wvtPdwq31QDryFrEo5jLgp9WE3qDNTgbjggp",
  "key27": "5y6ycee1RwVxHAwQMQHyu8qVALW9MLzdgPgJvqBoGuhwHGGXyv4WGJ1z4by8QzKqyiTiAMVCiCPYgYn4w6H3tQBM",
  "key28": "2DXXBw3gPnofYaK7Wyiqi1hJLmWwYb8PV6bt3NwbKUndCYmfwis9XPXVzUwvAjQQ5pya2G8Qrw4ddhq2YAbsiWFw",
  "key29": "2bJUENia5aPhjiyEi9wUQCF6iXXYpULieAKF14cHzm4WUDSG13svBnyYnZmNMXxScGyUtjVLBvsn2zohkQNYx2LN",
  "key30": "5Sd6XQs39LKcMnpDvQnKWtahoRh8YhMK2ve9Ho6GvBCLo7tP1XkiVYK3H2GnUbiAUXcpm9e38wNhTUMVQb3BzEor",
  "key31": "3D4QHr5EX5Njtpjnb32e28DE7wM8Pqpe55RnkpzKvpLGB8NM8qMDnaAgkgDKprANPSEz8mthWt3eTQBofJ7j6ub1",
  "key32": "3yLtkgvCouAUzjujDh4Ba1NYP5pVHLZgPyNMece4YoRRrWsHhEwNXQjqnxi3wtpyjdk19Hcv1HErKdraqNCQCWAD",
  "key33": "29zNN8NU3dZ7S9wn5uRRJe9PDyNJ5gD6z3PCG2hMbYr9KzMPVVSwRn8ERx8rwzBrDBCzTPAtRs81i3mjC8WbcRYZ",
  "key34": "3sTLabpN9DM8Z2BDEn7cNwA8CGB9rBiGXjwDNzpRUNhH9itotFR7m9sQoXBZg5tNQ1h95nE2iDLaBbKTLS5oSt7w",
  "key35": "2ZMJ8pEfM7exRHmXp2i7wgxDCSoYCfraJdmmi8qffhrSdX3eSGandMEiRXJhBThfJKaBjey1BfNugmipDNCBhJ2D",
  "key36": "5MN4R9yt626xgaUTZsXnPf7rbuyQ3bDF6Qs1WUQgPJKhN6dVUuFdbKPgmYKGP6KPYUm7PkcoWpPLxhioKBALSGLE",
  "key37": "4PxCkBEb5tHFxFQSTJJaxuJJb5vEfryxroVi6BkHGb1LpBWdoJQtQwuCTKSwbjaKYgXitkujTuugqU354Hr6yZiD",
  "key38": "4zGyks94iCLrMAaBLLYWwF8jzb4CPMmMkYtypiJhJ6iMsLoA9LSPHSNvdo125kMCj1cdjrMb4TruJZi5jLnMGKAz",
  "key39": "4mzuLeJju2cb4Wv1iTz7KUt9z8M6Ganko9rvcURpBXNSK34jd62uNKq1d3u9kqriZHzvJMsxxWeUzpr4XQYLy6ns",
  "key40": "2YwtFViByCrFpkQrQUcBtvyZwC1BNzz4jdLcND948vow4UY3Kwswqcg383xi2tBqUZXeGN35PkkGxHJVPmFxAYoL",
  "key41": "4axLPWAh2MdYzSmqg9k5ZaNuN8hvN3hXYVBx1QqAddDuymmKz7iXKH4KxwMGimhPjkusJLhzXDcLPu8ap3tVWxZs",
  "key42": "2RkX1jovyjhGunjw2m5oaHbpyGp1LUWG94C9jGNehR1NPL14RpnLnnUzqQhPiHRTjien5Mtr6ZLDPGrNgmrdJT6c",
  "key43": "3pmupadHQRMARENxWm9b4f9xAE6kWw4auGqsTJCdemQNTQtwbaLvADur5HuTwpYYjX4f5nCT5J7ZMPqYpN5QG4f3",
  "key44": "2E813HsZvrmTFUqnnw79VEtAzcvteJpSMUCnDJAjBALzFQCF384Douvyw2N2zmp6BftContdhSf5rQMpA3vmDUJd",
  "key45": "4kWpvXr53HYFkS7WjMhhzXAARgiHiHvkeCe68gWbppLW53Si4T3L9FCr6wnUVT6KCT9FS9195vtGC7v356wEQ44y"
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
