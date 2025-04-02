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
    "2D4wxNPcq5CdcxY8moyGPA3EtZawyzo9mbYGvVc2dBG3PbhWwZHtKnTar5ifk7LfNqHzYfmk7sruUXywpWRCs19r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuiyeUv9whQKejr4gN9hgJ2xLYr2fNjo9sfMQGSmpaJT2AKw1ZxrrBdZ8xjoCo1x9eGRAVnV3NrL3v9UTsEzUEE",
  "key1": "5hZGsuEPyX5gB28G3vdZXVwASc9fuiSyVY1PWiUH8wrcqSYsLht8HcZYbXvFyqh7EY4BJvnF1JPyezkUmGFsiJaf",
  "key2": "2LXSzQfUk5gGWyyVjHNMc93tz94iYu1BjJFQDb8jbS1mdg5ghTto6Em91E2A3GAXjkUG6hK5AgECTXQpeMCzPeL7",
  "key3": "Us7sADiiGQv64jbjmo5ruCL9ytRDTRSM7i7RCwzSVXWRizMd4s3Luedac9rWJuWisczQUEdeHXvpnRD8tmmJazm",
  "key4": "4ZFH7BSQHgdGGYYqX2Rc6PQhVzqZgT31AraK8GibDVMETvDUi3kZmrwsoVdu4oGJsvdQNZGSgYFZnob6FqeWsSEG",
  "key5": "koKnD53RrVwn3ap5VAhRLosVoaPVtYGTVNFw92vvWobgHqjYJLKJZ4etjvycpppqy3nNCJUaUBuhJ2Y157xRute",
  "key6": "PDDTgXfgy8b5dDEydRBtNLN1iYAU4VhCwbkzBFTjPX7zDnKKUHb53cMpsAgmzpZi6B1Wc9ffunAEwYgqrZDQYnZ",
  "key7": "ZK7eYzoR7iMhcqr9RF7HnDAZHR5HvubsvESXcx3gQHHfwvLvWuc8z2HAKrKYjGS3cQTkWo4mfuydi9hAxdFjep2",
  "key8": "K7MrKRtuZD65XA97EKWueD5M8MhpGLgejMoermKvLVZwJ7TTYPA7ZNCMGN2tWVq1w533LgANUGcdq4VuXPjQ4V9",
  "key9": "66X6LpsQiYgUxWa8kWMDYJe2kQutuozbLqZfuYv1HwAfBoaDRaaP5tZpJaGViNJmmBP9hs3hQdLy27FtnCh6PgV6",
  "key10": "3dHC541zy4b8duMvFBhYtLEGQ3jjXE6a5F3WRFuNrmtBNhJ53jsDaFEdsFRStLCFWuAaVVyXFYtCjMMeXWYrBjKz",
  "key11": "c8no3Ka91wfJ78xiqGy4LXWCxvfozf8oNjUJs38abzNhtQQGnfACrr4iKE3ZvPqKTFUDwGeRGi3pH3TuxKaPLpE",
  "key12": "5z8mPEjzKabgd6zzwhcrf9LKHRWHAKBGhMnajnKZUSqVbqfkDc8jJ65KCYRyX9g6irC4UKNfau7t1eH1GyUpzceR",
  "key13": "4w4jnSyBm7T8EAYaAz4BbbAXE4o2innWoG35smBLmrYLAGLDtLg9gVe2AxNa3SdtnrummoiCntwjfgipqb1gLqzj",
  "key14": "5Np3KLFEjo8srHwSzPzi5GSC9yipDTXEicL2ewUbP4sPTMKimLrRZdsoirQkyPGznvoRVTyEPsA1GM4ZcJyeEGBz",
  "key15": "3hsritiJFPu6gAGcrY8uCmMJ4cVyw71Gw6WMd3AKNSU4rZdMnTeF9zPx7gEox5kv5L4MTT7HZ83xzDDWQyrArbxN",
  "key16": "5amzzTNYYCy3JU2TZYabU5FMG6mEvoMm9dqvPTabHSyMEcEpphbj3tHbQ38TXvRsyA8zXKc5qw6jGg6f9WJJXuH3",
  "key17": "3VgXMTEmqXZZeQRe94eJzm15wXogJobkeP2bdBY1M5Y91F9whF2isrE63xd8N3tKXnsUwdDHtHSwjMTtqW4GYPFs",
  "key18": "439DZg7NGgPCEsfzUVdxQYLSePQ5iB4QBdtsTs89teVakx4wHb3k4jkrDfccdYBEyeiy7aijQEF8R3sUq22e7ufk",
  "key19": "2S3W2YQ7Pw1r7At4BrwAfZkLEFVNP5pj3bfyN4UVsKSGmAfnd9Mf6FRhSdPKiKNkK4wgWQn9mFXwDNCErLFWoXB",
  "key20": "2XwSYFQ2M4atCBRRgokQ9JaTti85ibN7YwydKVi8xyHCqifZe43bAFRbXUixJL5HwxCFw2PanPyVP5pJyXgQHJsj",
  "key21": "5UQouyFWdXDPV5cfNumpDJxWnkoso9ia34cYfiXLb2J234xKsNPUBxTwDjVb3SL1VGdbhgdfeKtxRWQK1mUM3H7G",
  "key22": "2kWxoYnWQDE9rf2Rk9918grzRy1e8vNAaFu8cQYNmVbuyT47E2RBsDxf3fVmsx6uKPrNEDCJgkksNdriF3kyXCAm",
  "key23": "DzcRTTtC6jDSz78B3beJ2JSxXEejuAfKpaDyJD3XKm4uJmk2VDz6tKhPYEz6XGms7SSkzUyWbc4kygeshDWWiFx",
  "key24": "5adXix6qgzf1rr9w5ds8RCsdYpLeob17smQaDoBFz6XDtbr4enKHsXNizGUc6Lz4qBdgAAnqxRYS51QYaacu5vrp",
  "key25": "2mnYACAEG51RkkVmMzHwq7fNhyCoddJehNUHWKH8D9Qt1h5foo8p4HVm8ifLxyXMRmXqG5S1xbtaxnJ44ivV9Y5L",
  "key26": "5WN4k1Na7Ad9gYGaGgEZw4Wc54r1jAV9eTJmgbRifKA5uyr1C4u2uQAWRKTLsXESJBxehgQ5HYZfBhUfjCmaCaq2",
  "key27": "2hNMcnbtcGd3ZmJByLp8fZXnWAeD4KMsUdJinhtU84g4EP9MEczLiaeaB4E9FV8KS8qFtQpzUutwiWnA6Q1ckiaE",
  "key28": "48WndBaPapJf46wnNKiRPh4nb6XUP5m26mQ2rRaHZnRUD8nz1wbaEa3uDJvDZhBF5nYrUALWFQR2xBLj7MabPbHz",
  "key29": "4ofCEkLXV4ryV2xxPjmLj1bB9ammD5Fcan3hHdsZNbZwqVADHw8yzpmnTERoY2JKbvMz46zvkerLtUFkzw1wncZW",
  "key30": "4xtqbm99cNiRXz63DvBQa6k6d8FPfCW6QzPYQ8qahRTFrNxGFkZUMoYMDBqDNvVKMpJqcGpnVFEfdW7TS2tUuNnC",
  "key31": "2YVso6cspF8quzoP2S7hfMayWgizw9xn8yfiSwUi9fUpe6uozMDWJYU68JDd6DKqzhoEyF6ZiJeqzcRGpMQCy9Gx"
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
