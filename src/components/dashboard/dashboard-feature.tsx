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
    "2ZT4yYKKB1xueP3cidsHwWpZfzzctzeiy5KuFbKWVBHD6LSMr9dHYJAQCvR5VhPv2qoBK4c8xWp31AheZeKtwW4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8RnKECXkTz3pCMUcde4X6KL7mWTGLgx7vWf5Vm3xeYzmEpEjMJ7diWwrnzrY42fpaUoPYBN8i8WZgDhmBymSzBP",
  "key1": "38W63tmJFFLYtGr7q4E6WknY7LQ8Rr36aLK4Tj9nNGtVwTBkWvGDeHHb49UnqSpo4R5UxNpdjyroR27osLjZaWWk",
  "key2": "4Cx34GJ8nprv48jMV7L6VRxLwBN4Bc4T7BQFpdwS2QJFf1uwCWuBCmocfmtBLVcBP7TXr5zvUUn26rxxwtzRLJZy",
  "key3": "5Yk2KtxKGqTibZjxr4Rv6Dv7fqvUXFikcTD7aNGMuKZpH46n2d2y7HtSHMBSsEdQLDS4axTXCkWMnp3nvAcZzAh2",
  "key4": "3QWdvPo5YXhS3vUu9c7D1AZdAiRSxhS9n1dXvK4rqfiENJYjRPvZRUc93BdYxopVsqJ6aRg35kJkBYvcjt5p5hA7",
  "key5": "5KrZcD7tfzrHn2A5RgYCD8Px99v1j3juPDmk4Rhv8iR832PsqwJfo4dfdoTA45aMKKiurBC6hf14VbyS6uvJChZK",
  "key6": "36BDb3KEJA3xkrWdUppPkhcze87mLqYpSAmhq1EZmtCvEW2ouvttyVrRJFU6DZHBQJiMSprRktRwbdrHHfEkjDve",
  "key7": "3bEXh7GTUyL5JcY7x28BgM5AXCP3vsQiejiv3Kvgh1pX5Nomm6vwfgBnxKqjN1UFhh6EyEdCzyHFLrcNotveK4BJ",
  "key8": "4nm7Qbx2Sf3xHakPmtNaiFPuc8TfYTjXYNQHn2HwtB52BoNyDHtzW2HynNnBBZtPpRmrZ8rwaBm6k6Nc9QP5bhs5",
  "key9": "Jx7uZtoNfXLtZamUQjCjWKsqvf7qNGsmeEzhf7AynHjaHPjhgGrVs3N9fRNPgjmnUAMNRcWBvvuRuZNeHPxj1CL",
  "key10": "4Y63FFxbWhT5RgZevrd914XgoDbvqk2DR2YeprQqu1RFS8Tt7xcTZSnmb87kfRKcC8LvxPpsMGmwsD2vL8pzhtZu",
  "key11": "2MhyWVCnTVhkZXMUx582P2UxFbudgtW3r9dX8MacpZWXkxR7nHoAbUMeWbUoSMfy7KnDUWyvwUEUFXtLMMU9Xfk6",
  "key12": "5Kh7RgMLnVr6wrnDrqRZ5Q4m7HhPQiPAzJEfBxjXpEbAoMMQjcfNRQe3WihnvENEHgc5ipfXaFzQ8b5vJaisUnZn",
  "key13": "2tqR4uMP8BJuXo9YwCC5FK6jo7gWxZ1oUG75vogKdJDHrzaruBHdPeLQ1G1GMrkkH8pn6ybNdAm3gaPwfyZrhsY3",
  "key14": "WKLmEVZkM7kJyUPZ6JYRMA1PFv3FmZCQw6u3HnAGxU7VWNe6LoyR7epSkaRr6r7c92d6yc1DtPBfcwynmQSjP6W",
  "key15": "25nXg6nEijQoQajsnsz28BALnUPmUUCz2m23nRdcsmnnJMR1kVMCaH71UgwpcjJGSxM1sEWmbHDmd5nKye6tPgTw",
  "key16": "3TqvWuAGcfqhCcufZGmC17vWwG88DoDdxSc8hyJkXw7D7EeJuGw6WC26JzankmYbCSzWymsNeEpEQUKgpvUpdMg1",
  "key17": "3ewckdCyeeW8uy79HwoNoNWpc2ToM481ni1AVdesTLUpBi8b1X2z21MaVU1EsAgKX75dR6QcJx5sjemhswffvzKF",
  "key18": "4yh7iY7Am49rN6w3zsCFyHpHycXpJHzLQpuG1u6wpA4mxjccKU6SJn5p2WjhmQttihyGEMQrxkCrKYT7PUWmQbE",
  "key19": "5Fmxf1WeWsQQ8rxTfTUoZTfYk7L1zkBiLhWTCjtRzJ72SSHoX6DyykoPc3zfppuJrAR3SNg2w2eW5zYY1dcrSGBW",
  "key20": "2BNmQiKvEKViGPLvnHwZ7Qhj5K9EQX4eZNegicPBut4csX5bYDteyoqoGeh3KSbpwCqsqJ4xeirxZh8uK5enbpuG",
  "key21": "55aGNr2CWprV2AxDpFMKP9BzCuqPmWR9JPf3KoCHgtdQB3d9UWonGs1KBQRuZQw1FD959gJaN6TTu7TsaZCDtupg",
  "key22": "4de9RZU3YG5TGCa9mvNrcceSuiLbKw3AuJ9LgUUWnQZVhEawMb7zbizMTjJSSpq6QpnHKJBvXyC2xNsTLKixxbPW",
  "key23": "4oTYPttpkvzmMPSPHjiNpKUqUbNEgKJmEcroroPe7UxFT23kNqkF2Qb6BvUXxuyyopPWjV1rTt1v2juN8zjDBEEF",
  "key24": "5dZaSH5QbWLpy4GbhtSXw7Rd7ZQMp9ywm8MFAvnzwmBo1h6PHvknSBTb5jU8BKeEM2GyopBKHvENQRmfGUk78Qg8",
  "key25": "44ooUbE1uPrEtBUyB711gHTsagPku57kxAyjqjCV1nEeuyh3MWojVqiFdHPZYihZE33xKz4PzCKQgM8PJZSRJdww",
  "key26": "3rMUAZbuLRDGqxZn5Acex4k9rauTZhTgAifQZJGHBb6oZaQzJ2Cd7GtZ6n2aJp8wE32juZ16uyPf7T47vpUKZPMD",
  "key27": "3Jr5VoMnFMZZNXeAJKqFmQRHCBeBMkWYXt61KeWYGRpCF1VHgHAM2jhnsKQLA6T83LT4K4rMTHspNWM4p4iAbLao",
  "key28": "3uETD8CX13g8VRm9suGuqX6WMWDZ24ud5yGpxmZ8ncdvw5wW67vULSk2xkL6hRs2ksvoWjBrb8gqrTmh3oBhPJGv",
  "key29": "2G7364a7p5E7bAAaeGuWsjbsqgv7KBS72q9R7KkXj8Xi2CeNt8u24qh4vDrXyMtgx4ZGhfcXzRohveCHnhcEykzp",
  "key30": "5F22TZ8yt5MkpuTvAYy28TUvRZiVmWiHhjf6ExLNrdX36FHZw2FNtMWEHtF1vjQuC79nK4oDcM2djBb1oSBzDzCn",
  "key31": "53aa7qqwWEuEXZU8iucuYyXsCfSqutdk2HGSeb7v55TJFUFu6QyD3zK8eVeXSMQhg5uoPWEyM3uNVMTb8fgDELW8",
  "key32": "3NSWuLGbczoSPi8Hknkd24npj5mp79BCtMrdNiHMJvcHmFBbUhsi3bxNj3Fhixms2VrgLCcZENcQSXY1wKWWGPJt",
  "key33": "2U8JmVzmAZYq4EdTC1H8ivHpshSFwN1TKmSMkq7xweMv2pdszNouEsWDaRT7YtW5CV3fTcLLHf4eyzf3wuDjbdH9",
  "key34": "5WZ6zyEu4adRss36Zm7YT7yW5ys7gCAjvzEkbz5LLPhxsjWzp3jCkozLzBofsWDzHjmVmxip6vgnGhM4zQGR9XCS"
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
