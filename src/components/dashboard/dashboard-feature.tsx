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
    "28zeNCNfWWS24irwC4g9Ande99zL6Lp7J8PXQEfbCgMS6Jfz8dF56KmApCAMxi2rS4mGoNnaCHjK3QdVCUGKtZtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHc28a5PZVtAw3xjYCstomKR9PftGB8BPwiAV3U5xieuywS1HiJuoEmVcGFahzv2Ri62w2b7vBSxYbtS5YBjp7T",
  "key1": "53EM2DH7b4QcDFVTJnUh8c6iBkMYjp4MSkyT7oR4JpVUmYykXfHuet855RFfaTUHeg1tgEMeD1YLYB4Bra116jnA",
  "key2": "ZnqEZxxpprB8jgp1aQsh2j5VbKQvXS82Q45cXWYbm8FtWTRK3nQZ9Vw3TQHrd2ZXtJWT56q7sLqbnXTzgAEERHq",
  "key3": "2EeJSDac26WqnAAkXKv7Dx3Z7ZeN7skWoVSZdZH2nPePrYAFrxpHY6yeKchVjThaP3FRUc54hxit7F3FLBPxF7Ce",
  "key4": "3sViqMB3dR9BAEJ7vUz4hZ1wsnx6NoNLHgWoChFuQPaK5Fpru9MWchh984qje2NrUzwAfX1ndY3M9XwWniD8xgpH",
  "key5": "24vDxn6Yugjqj6bsPKifmFuwiKatmBUoZtZ3XeQQemDmWeZynJGa8ddvSLn3cDwFBcPj78wdVdPXXq63cqgPyArg",
  "key6": "5EQ55DstWMjNgRLoAAabkpXrdZPWMB5vef3GqyvcBPkVMJUGwtcar5v9ntEV2BYmmj6vuryaUPEzG1KUmPU3YeiB",
  "key7": "57JrCVodooS6d2hnjXD7WGaKCEVa5FXZiuNssX9LFr5CNJhgkKgn5eeeuE94pbytWchd2wEGyp7Gigpme6rbamQL",
  "key8": "XLhWtJKJy4PNvEZRQPw3pQgRMczi2dwqyC7UmLDNozrHaJQyFVxbHrcvpa4bR7Sens6qwLhARsu7nWX7vbzA2ve",
  "key9": "3QT5upA7MzxAm3GLD3UzWjt57i2fh95RT7d8kePXYBSG35mmZ3fbsoJyDfUb8iE29gJoLPRSc2eZLx9KkKCXdPzS",
  "key10": "2APfknQX8b2qu22VJP1XwHE63WSDPdJzrnWB41gvT6LrvsNdLWB5fL9oDXz6Ly8owTn2funFgKHXzAY3C8FF324g",
  "key11": "5Esr3ZvipyL1iZtq3AFmGFB66cR4quow1hAKoVXGD8Q8tGNfSVKPNqwgirzYtTewvfBarD7Ri5NM9WHcmrbJ46FE",
  "key12": "2ccEJpXnvmooPW41oVYsqYHWRBJfpU5s7gw6mn4Ehmz1pgWX2UXJ3ySpKZrHB2g4Ny9HaetrjrcNFdpL2aGEFQWU",
  "key13": "2tn8Uv1exeuW3FMc5HJc5zxTzgJkZBq1KZDyt7GXkLnP7ZmFSYJpBUe7NJzyRKRRVZq3z3CZTYeEVzFM3ar1Ki2L",
  "key14": "3eAM1jFKDLMtgtUUUobiuwkMj93roJ3HpEQQRKsShPQkyBN1PoaU1TXhEM2gtMy9GYkaYhZNt2WDxkK28nQmhBQY",
  "key15": "477k6jV9abwrb2z8FwZQEjJbmrbGUBgH9iyAWuhjEqQbSPvCTU9R1oUCHjnqzhd5xs2y9joX4WHyg5LtrDtJEUht",
  "key16": "3VtEgzcr2zU9JCXMZJ59ziTToVZBUCTPM6j8KnEqiwE7kU55tb3NfkpDJodqAC3Ay8kNeAAiZc9f11yH8CHAgxh1",
  "key17": "52c3H2SWcLr7jFcPd26ZfdLB8euiwNE5QeKVxepYewoj8TJHvnwjjcaSTvxo5ipm2kGhoRJVypLLLEuhD4vKghWK",
  "key18": "5LeFb3CUrFekFT89GYauAW8y4dxfDqUfLaBLLZXcXumufNuRgT8VXteobK9EjaqYTVvAWE4hs2DPpvvPYJXtiejJ",
  "key19": "ccnphPsUuyxb2MR1AqetkoiofEudoWzRFixug4s6onfTRPJ1vhUuF6J23hf3fSp5UEenBkQ6XVvgwUXk575youk",
  "key20": "62VeL3v7jwWEUeka6qejzTgYmd2juB91aPURMSJRTEDsBLmmSjy8TabpCDYCGMHFCWZdQZCjxTLE7brDTweEuZga",
  "key21": "2c5QWx4h62o4n2dmrWKL8c6BU9b3C29vzqjnbv7nVXJk7ZY5kxJ2J3cC4NkHSQzsnYCbmTuhLrrzi8vEv7Wcwss4",
  "key22": "3LcSKUqmmmBrn2kpTSxgmFMQ9jPfT3xVGSzqM17DSBoH26FrFnxaRs4EDsSSUD69hnktTDWucAVn7W49RVvqW3id",
  "key23": "4n8CP4nyetU4jx2gKYiyEmzkzBoinzV2N8KEfd5LrLBfcuwmNu4tV7gRiRXvZEN1ZPGpmkaRniwnknjieCy1wvAf",
  "key24": "XZPpXik1ercthiXZHzocgp3u9wC2XrEMMd4iMZ4HksTTAqznzvJKsfp8gc2HVSXUdHZouxuLZbtr5AfgNR6tJPS",
  "key25": "3mXTgPkS6ZnQHaKaMFnQXcPXtiukmuD55er2PCkvF7YtBwAUAqngmefap8upnPcqf9FEHvP7oist5v3NzZF2uQdX",
  "key26": "4yXmTnazALzMdZdwbfRMkoUiEZKA2WbDbepR9uyY2g2tBvG8mPkgvM5WQT6r56hmFHWtviTJFRnX37PJEQMeLGsQ",
  "key27": "ojYNxwsDKwidheuhPbULKffWwEAwwZLGar9zaWkEdiWENqz3kN4RZjhmYS5nJxyrMgnw6rtDiY8hD1GGmVbefXH",
  "key28": "4EaCfxdw9ZgwNJ7dhc3xSDZVNim5ZPow1oweuNCPwnoyBBrzeM9VQEZNwtLXk1Ur5ZdY1gNU4hgKGveqBxhmabU4",
  "key29": "2ux1WUQpY7TuqXKWtjNCJ7GcDSKB6kGt4piwtwDsDCaAfpWVP54egqLwMNzuGNa5bweFpwUPGAjTVZrRX3aTRQKK",
  "key30": "534qbbqA99AsK6kBnrtAvtjCDotpN3hooN9gjCCA9r3u85T9jFNQAJqaKr1gGCWvWpnpdQwa2eRXbuwx2t9daD5C",
  "key31": "3XVoHuKCxQwgk4KRuK39nBz1KfzhQWbSfGVRxNenMgwwU9qmrifzpoTDEisvX2LbGAMzbcGQCUyVBGHap6PayCST",
  "key32": "3KFi8wRX4sNLnvRZhj9qhfaMf74yEujCrnNrSA91zZUBEhHJ3mMR3FCxZpbmoFQT6qDdDSZ9b2RtvQ4SKkGM42jD",
  "key33": "KaR2WSgb7acMxwcvXE8dhoLwwTfNkF8MMyXogMRNDqF6etZVvinZfJMrytkLYd8VJ6VtSThCHUvTWWqrndgKHrP",
  "key34": "52xParYtfjGG8AHzSoNdVnMDJ1L8dhHvEZ9qAnakf86H7GbpbEPRNe2hN79sSvkkyWBZwWYhAgYeWWGE9sGYm5BN",
  "key35": "4LNgHGbcBvcMZbbsqhMZ6nkRSphHszc6TvoPj5BpVnh2Fcq9bdzzRnCRF4FVhfCYBZDFo6aauKDyDS36CCs9ogya",
  "key36": "2C2pM58f9CwRmzRsTaswrojJstDtT2uLnmJU5BBWWNCSqUhuuAm7f5i4ifjKuftSCVqJxGWNfWB4NGUNQR7YTjJ4",
  "key37": "3R3idwLKHNWxy1CYWbKSXh8GS6uxMP5Ftu5GDzRxyASs22pJ6EzPGuvzYcKUQZw2VTnERoHqoitPe4gPddxwUa5D",
  "key38": "hxDuMyJUysAHDxJjkVmm8QcrNjMuczfc4pYGVDS2V13X819STMRpXp2cwNZtdQLQmrC6MgDFzc99vKeVSnJ7ek1",
  "key39": "3StJHdhh11Qkar3J5XqzYjeUqF5gn3vaKgRnQztcvwxs7T8P6hQWocV3UiRLhNM4XUqFRfvgASmMoLfRxQiE5UhF",
  "key40": "5BewFg44Rboj27dmrmkMXQ5oQRTDz711zuVnyPUiLMu6kkem9LoDpu896QPuCw1Zw2wFioWCGmbmyadp4UWGxCW",
  "key41": "2MqByQxPUZes8K6R9zGskNA7C3moBGoogKXZB7atpss4fBCk9GuN7GB6vfYZPA1NsoWL6dus2ti6oCV8AL1NQjGy",
  "key42": "srULbexkLgUbEPeujPtv7c7XZ2oBbaQ1U5WawEAfM9EYoxuNHi3rJZYv7HhttmSecPuKzPscmmVaZpGCEZQcx51",
  "key43": "52JXKKosggQLaYPQKB91w17SiXNsFuzxjeJRbfwRrujzTj7v21CL9RXvaQJ5ErXT3uCKGcyTw9QfHR7a94bmh1cm",
  "key44": "n6AzoEB495d6jAT6bSRFTDgynWvwDtYQDDG8VL8yLFdGbUAu5Zx7txAp25VPjpyZn7TcjSDvCXMQnspQWLgwJdy",
  "key45": "2FmCG6mnZ5Pas5gSdHVDBfuKxhW5rc3uDqLyXDUSDPd4MFCWzF2ydZwbieUFsZ3CW8KXnTwQT3qU6jgx1h1CRisQ",
  "key46": "6r7s6Dwq6VYrQvkPS23L8PxTJ4T1pxSyYaF8pLJqTPo9eiu9wSoiW9rdh8YBCkmoubXzYCHDhgM7FnxFCDJbCHL"
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
