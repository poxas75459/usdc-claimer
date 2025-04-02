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
    "5FtPGfwZqKdXAuT4fom5M5znX5NHAsdC3EdmwJ15kagxhquzenAMeGMgqL4zSPPkjaAP4aNiSFjZkSGstVLFe5Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqthpXUnokHMDwSrQ7Rxv4zRFqUTifTiCDXCyvD47kGtwND9sVnYYemMcz6ksMWaxawk16gw2DCNuRTjTwBbfdX",
  "key1": "2x5jNyXvfw9aVnMXraBTPq7PHoMCPoJ5Yk3doGwAhZp8frHU7ZyuGekQUHo7Cse3uHVPuVSBDPEPnrFzNis8ycjt",
  "key2": "5jVhdemdaqZUVDzCeHWDn6KyTSFFnhDVR6h4EbtP8xZMezyySyrpwnrtMgAhzB5SiWy2uhP7qkDCiME3H4EmzVwg",
  "key3": "2xsQPsNw5dkXtNYzx6g3M5keqhowHTGgUEgzFJAobqTNqCH6VByAMxM7HKAdRJ8DiPTXXvJPMgGHvQ8fvLXVVtMM",
  "key4": "3h62JFqa3RZ8oAKZMbqYkp7umsVCpmdqH6uLcc94LcaM9CuWAA5Wev8tQtg63UStWspmSjJQnWjjLRf8yrMZnn9V",
  "key5": "aUTqe8ayAf2xT8HY2usfNTAUH2MdnoDrD71QX1fRKUY97ATzxsMovcGYwqpujXVY1w7c21RxUANctLiKyyBFyUs",
  "key6": "4dEoZKxZxnH1gufRGH5nKsifdVjKctm6sAkh7c2E1QmsQhLD9prUkehmK7bkxpTCaLzx1pb4czL9ZCePyS9hTp8v",
  "key7": "4fnWT9DcmcX9DbuJ1Lc18sHswuXxxSYdjUbz1cdTt9LjS3pRZdcDc2cT6KSMJYd2pn1TpzigDaNrqaeU6oNqfbPg",
  "key8": "3g4WWcSvFYfXuvBaMz3Wh96UDy4oNHfmwjpVFHx7cfkormou6Xq6pQNC1VXtX24fFnvEeqfGJFKNkmsyeB3rLFfj",
  "key9": "3jZPEocJcLCtBcE29vkNdbLpH6mD3CPiryzecETdCc8Jin6spZYtVthTTxMakKU5gajWFdCFoFAieKygPabgHUJw",
  "key10": "5YX49DzRvSS2GLaUhMNQ5XwXQEUCHXAG7BKZCoJR6SNuNY2fCAmnDyRRVyNiHwAfwQ5xZpwiDZqRwY1aTuyUrrmw",
  "key11": "4ngqwvZ9kbXJcBKZxURVgtNvFykUZsdT53ocZA615xyXTwa3eHE5AM3XV4LgEofuSzX4VPHEDA3vXzTKbyKrvN1A",
  "key12": "524wT6Qmsk9cbHbs77JVfBCbbhd5LzNUUcgT1MXgSHN7zssCfqq58dNJ4ofN3G3bwjJ6zzGnvfsbxbnU29J4Cv7R",
  "key13": "47C87mgM8wVddwTdrY5GBqu5YyvD6GZiYHLuKHmFMQVCDnH7LxjbR9BqjyQEVscsfnDbr1hdbLsVJADxt8vAhoQh",
  "key14": "Sgj868JRBds2b1nCAqV55FswEhUVuzem8FqvahJ3RpKEu4BM7Zh9VGkYdwFjrcg5dfzKbExhL2L8ZiWoTT1771p",
  "key15": "3dB1pmfrbYnXo2oqYqNnUqGfCBkkTMLBwWdmGVcGxVw4gyES5efX9zRyYUybho47EmmMqEdKuGDtqr25MUyK5j6W",
  "key16": "MiUJLq7rnrgE5qezm9sLiXhqMLKW3aFavFuoosKRn8KSzsVQq7keBGVzkkMSuMihRaL3XN2QB4MFtLQicMfiT45",
  "key17": "2kk8aHqXsZpSgWG6CYNmWoNJBtAQFMmqYrZdGSnQaoRUtSFDKws38B19rX2SSxDLVRmhMADtGdQ7iFvHF7mJPsA5",
  "key18": "2ogSToUohcovxs1VuMDj1R7mqQkr3D5E6f7jLaZyhiJbDzhiDbJvSjG43bS5BnVUYiqwZThFSXrLVJWJP6xBAvGY",
  "key19": "2KF1CvWpJMGuCgTvMvW3LB6J9o9UdEspJk3biRCNyYLpoBvUwnwtbzCnpctHCMhs5ZMXm7QWa8HmYfHjmenzN4Th",
  "key20": "2d5L9vqiXfA1H3zJSFLU2WyNcVrxKmEhjB1FXwPkMi8pg8rSihKM8ch1AHLED9ttG8MduGg3AUh9hyGLdyeNfyxA",
  "key21": "2Zh4GPC9yTHUMt9Zw7ykiWavXUd1ejJadFyCJhLx2PtWWN24Ui9CMbLewLrmdEYGzdz7ETTMZAZR5mXhF7wkKrc4",
  "key22": "3u9vNLjGuVMdKjwfupNXeuJhm2nhXGdzZcPBacn8pK6HmNf2xMCcz2Eyi94KsV5G8YBhLPY9o1W6pvDnNep8YYth",
  "key23": "2F2x63fjfPnLGpiy5abeXrP5WwdSswpQQ8LGBDhQryhS3mQiPAKvTMYnTYWmJcPeujrxwxy6tEat2QY5UDSuVMgB",
  "key24": "2taLyHnVVfoexJjrdDMY5XF8ewjGJzwovXRGA6MeKkN6GAefUhqAURtZvGR8DjLfhD6KpRpqs7xseprLQqtPHsd9",
  "key25": "6ZjSEnCgSZ8svPfBUW9iUHkHrJQAynoGbw7sNYBv2FuHSnMfZHVHxNncn9Jvp16LEAg9mMsR7wsSmi1ZpouyHj8",
  "key26": "21bZ7zJB94XTGV63CoBNrt6zRCowCbo2kEWnkrrQKazyBPKwByHcMjkKPxVtsZbqDPkQYVx7JncyLGpFktrwgATo",
  "key27": "66psXWkfh9LG8LHEoyVnfT83qo4SxaXkxfLVa6Tmd1PupJ849PrZAyWfwYyzfxjaaiQiMnV5EeHKyuYyLkYuGm7u",
  "key28": "2qWriPVE4XqmjxVPNbNHzdebiEksUrKok6hkyVyfatY7HtuHYGP6SzeGa6zaf3RhFcU21ERPwagFu11nhXRmXtd6",
  "key29": "5LEpSzba5fTDY6qPf9Budi37pgpK5mghn5oveRiWmyrqU2RKFFhPaTYaUES1yYsDNnK7QBcYHPLKxMgo3x1JPtQp",
  "key30": "QVx6qKQfb6x2jtRUhhYLY6uuCX7iY8v6hs8cfHwJ68XpgpVGeR4f9goR9fRsoqD13LaUPtHnikLJm4X3uzEoTAe",
  "key31": "d8oNsERxeAFCcWYb96veyuhJibHPEx7THfvFXqhnAu6ycq2vDyYW9mpgkRjFyfhZF1E7HinV7q3hprRitYbWbEw",
  "key32": "2j58jRQWUWeHwKnXFjFLHeucq6y59aypbMCpVuc2xnnXbc4HbPDTZYrRkcn4YPQWBTCxfBLRduDiCzN1XoPHs7Zj",
  "key33": "26vCGwhAd6aFC3tUk4UiuzczraLAaYNdkKTErrh5QZUEPpK8fGCFgC5sWDQC26UF3tDCnT41zDGQDbZJEaePXMWS",
  "key34": "2raAxXArqGvuG6uYi14wDJL9agk65Efnk6LveMP28eNzyJEmYtYr5wJ9x6JGkKYs49py4McZYDsMytcB4vH2ti65",
  "key35": "5eRzhHNmDNZ2VNoWNtXWVpbaNfa5YfEvwxzG6zMj9h4tHt7oBSp4MEhjx4dSyWTg1uxojfFjZi1sfaRCFZaazR8u",
  "key36": "yQvF7QcaXrCqqysYpCozGbyWsrt6feLGfJAEYgzHSzMfqnXJQoFrFmSSD5mhJ5N7XqfEPhyiuwLseeCDYTtT43j",
  "key37": "2nM3bN7D1r9HRPUtJLGBkTH1oMD4FrAPyccJiFrXJ7QiHLU8Fs3F9cnCYPw5NMJsz3pbP1Eg3sRP7fAHewt7cGrt",
  "key38": "2E3hL1uqxLNZ9ZyMLMuWoDSjTTfsikXCuGEPCbU96Np33JHtRkGVtrfujNK4iQpKtNT9pnFcGgAL7rBER2TuL9KC",
  "key39": "4nsyNZQNTwHbgLVtAFqfVtmR7Fj4HLdYezDxs2H3u95K8qRTS9CS3q63vCK98t5UpdM7MiJQyaR38a6zKigQnDfh",
  "key40": "2t9hBcot4B4WyBFQAa9XJLx5sHGWfqnNA5Xu8x1N1sNaw2XT2ZQXXGZZn3nRyrr4b8Ggp5k5gZAqcbhskcuq7dp8",
  "key41": "2aSF22PeCrqVznadAGNohZ3tdMaK179bhP3XUF1XVvF8UYoTowN7NUfmTN8hgy6m3wGQSzHsxJqTngpDzt4bGhRu",
  "key42": "2mTZjMHgL6me48fhTAxvZyUzWKwPYbLjXpWXYTapL6rMNYVY22nDFL48vv6yZ35ASFNE3of6A3o7SCjcAK62DUrB",
  "key43": "4WcCs3Tw7AqLm9Cusxqw3bqdsBRpkKJoh5TfEhkGNZ5LfWH5NoYTH8YfvRScBenbuzDdzJrhbuqFsFGtQ5e1oEyj",
  "key44": "4ecWaaaVqvaixYoN3quRtZqGtHHbmYSfYRuoMcuVmzbAW9jvLw8raHTdXVHSUqGWLKaakBkMdsQmENY1XAgXUwkc",
  "key45": "2Wn8CV1ac8ukCL4cb27sEwNeKTZy4LiYVan3s2QQWeyfZbPFyXZdGXzeHYbCKektiBJvDtukXZds8eSKkKdQ23NQ",
  "key46": "fNtU91BSti4HhAJooMrbGMhJvxQAYZ6Fxmo7ueRQiaPdzAReSrez1qDTNSiCdouHPYfVuyzPpvPEGgKADfbaG6h",
  "key47": "5tB7DDS8ksmEUrWJKj3pvkQtQ8w1pq2UzzrKALkYk2abwA4tTQS67MA2M7SwVqMnbTZrGbphkbke35YfYBcEg2iJ",
  "key48": "5G3bQU8jGn8XiSFdZCWMtFi7jxkvkmgcrapooifiJYEVqNhK2mYQRad5VipyQonXXxzq19tuHk6W3pCFr1zJp5hZ",
  "key49": "5BHjpMF7BviEBbkZmU56omdGU8mcMYS5JkMN5nUcZJfzWH1miGL9gVXvbacHDF2wmrk5X4C3Hdkegqjo6XK5Euy9"
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
