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
    "5VgEUetsgmHCzQBBG3S3J6D6P91PKps7ccQbv1a7Ey2d3sbHukSNmDk6hGXkuLQ9ckuLA9VGSdL3mtu5iHn55QSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDQ2Rt3mDkebU8bKQGa6sVhzZP8KYM6YGmrdBBPvi78Fuz8Mq7Yia6Gq2b73cpjxmR4c9sQST8pBuaxum3jugB5",
  "key1": "4RhSCSM1LPwdZPMkqXaSdKTkB3uGmJgFsCkwnTWaM12AHE2ViJF1DYazx2UwZi6b5VhfTWfMWugd5YGAcmFp2dNW",
  "key2": "2rtQx2ERfN9SyybCzvvuaz4V7uCunweQbDaxeQgG7BHpz4VcTWyHHpJ5w7mFVSw7orXu1SmFHn5Nb5ANKDdscZYN",
  "key3": "4oLqL1g1Sr8Eb7s8pKnkLHLQaiRdaytHBPHfU8sceWV9ZorTGMAdvJiPdmB7JB9XJyzjyxZse16s2e7CsUcWb6to",
  "key4": "2Uo7SzGJ4aMESFyEnHorMyqQ2sMrtmEqYaQomVCcox4Qy5ckKvmRoSk6V5DUuU9fUBTFpRtxu6bEZPk5y9ULwd1C",
  "key5": "5K4Gk1hmZywooByU3iGeCHFLMPWTXDWzLoJJZeCkjvNuopiNJCyvSux56rSJhbUfWbnCtkHEafcb1Esbx5tGMqdh",
  "key6": "4m8WWUYCLeDHqnXvbm2QsbX88CChR9DnSu6BGFecgA4mj4oKEQg792ibLKJxDm4DUex5jHuzHpqFuHYDeUDKvfCb",
  "key7": "2zNnJeoVRAd9npZrwJym6H666ijG3kRVR6Utma6haFpeEgt3BSKepHHkWfjczCJ7TYXy9o3FNUTHwiFvHwbmssgG",
  "key8": "5zPpRPo3ucfY3oZZnFFyJUh7Et8AoGj9du3oPjXcJPz1EHgwXQRXAJM3Nfq8BK5bd5Wd4W2Wc6rqVwGbXiaBZgKP",
  "key9": "2WgoVaeVNt1mCr5gAjg4iKZcCcvtby9XhqBNRmn3gEaxPNcdFw18s3GERxeYvwfWvNwnKGFGB8yZCrt7zyqvnb8u",
  "key10": "2cN63aFwsxLND2BWD7ugrYhzvdQ3ymoWKaj1TXkUKtUFAoTD26WCcqRv7C9QsnE5mmKXV9Q3KxvpYkojeMYjZiTa",
  "key11": "3hxyWc9EVHj3WtNf1sojn5qM8t11yeHPfv6eZ7PsQR98N8ZvxkRQnXrtkm3QixFYmBTS6q4VHjuy7GxYNGMGwiVX",
  "key12": "rbN4Md3cRfjK5Udkx3kd4YV8CTPqrCeBfqway1imQPXiTka7j8te3xSwc1PPmWUtmKQ26cSynu3ekTzoGBNuCg4",
  "key13": "8DqpNHJLgnM7i5bfKyFYeJyLZuejKd9zGMtfKvTthRqJXg9WFFjBULa1LsusoSVaUsTCyhCJ8rZMsxR8rXPNahS",
  "key14": "5Q2eeNBJ7uysgaVcoUgZKbTmbtq36uMbi61UiDeAnxv75UyueoFQcd9ToZULkmQQgsNcaoLMeRiqoZocQWrydruc",
  "key15": "eKXubqTK4z4jo9V9E3WMzcxyTjVBZZkM9BCWTpjB3nj6bxvcnG389356mhHh9tbVwG4VmpanzV85n61qRFbWdiL",
  "key16": "5jgyukpaJDFUdRmSRJuh196SMfMLyf4C5CozvH3yJu6RMGjqTdQPGQ9YA6ebwbsnM1pJAFVLKMqQyi9a3WqRLnbc",
  "key17": "2uWw5vGszjcSi2RjHttashSxD4BDSeAqVPYuaYzGV5QLepd9GPTT44C5guqmbD34nRWjf7UJkcJEgo2SXUmXcWna",
  "key18": "2nfW1kHupq1fuAs1HycB7zaCvJvxzrVm8gwue82EsLohiCkofoEHx26RrMSCYeqrVeEjhSaCUaZPBF6562y5AEjH",
  "key19": "2HMWN7iaivEAhZ8W3ktKWVhQPi68tUyJMJYmme57jVFeLetGAd5q2YQDBwwCvCwLZayaLkH8MrJ4tqGDBNBPnKuu",
  "key20": "3e9kHyB15SK7nEF9KaaXRbgw3eZEnM7VRDPVkDFHVqv991wbMZtS2n7zFw8tdx4Nx9jPbqxktbtp7UTj1GCLU7jq",
  "key21": "5bLpGSbJ46xzeutwbAwArSCgtyNFRMEk1zatzX7VeLkz5r18fRyBwMUbHnH6mVLeNmnzSdtFzSxaPAbmirmq1nBY",
  "key22": "4HDhWUjy5JsF8QCH7G6gtEwvbEh6TipvnyRvCFM6PaDeHUUUtZHXTro7utKPmufy7YQo7KDVWDQGQ5jzU53f92QG",
  "key23": "2W552gXEUQdwSVheuAoxWw7JoxySZSEf1T3vhWeh7WbMvnvXxcmd79bLzqrsJHBTZ6mst9WfibeuwPcQrByicsV1",
  "key24": "5dWGh2k7X1EM4avM8zp1ZoYjhYduHE5ZC1rLNt4BMDZkcMU7dB5C1ABEwUwj3eSb3VZom9ah9vUGmKrfjXpAUjqo",
  "key25": "2zsYeDbBAvHWSyuXH8LmMfMsiETLVwQJgZE6mjjBrzVUiSZrZKmyMEe8g9LaCiidgZoNEPRgPsSHigLAUwC3tW8G",
  "key26": "3iVMXaKkMvtGR3LsGQHhj9fLfghc5jzqzj6YBLqtyKjjiHYXTY12LWomff8HuXDpbd8eugJhH2iXeZFWqsfKSmch",
  "key27": "3jxzv65WK9bH7SAejA3s4hWVu115gY3rw4Y47RRKmvcAfvhkVnFuQVUegHCKnogvrYUEkYVZTswivfNcHQHWQWiE",
  "key28": "5x4YiKVLWewH2ZLh7bxL8qBm2LEKH4Z8oM8v6xeHU94MCjhrnLK11V6axhffsJof328cbAzs3wNRterQP3SduGjG",
  "key29": "w1n2YS4Pk1sDNxGJx9B9jtMMjUH8EiTCXJSj7yuQzRBDMcC5ajVCVftynuMMKLrKDLhr7jH3png2X4HkSs93Z6j",
  "key30": "3LjeAXtQ5zH5EG9HtA4RDV3oFHkySywA8oakX9CmYxuhNK7j9cj6yX6tcugc64g3WsWSsnjk5hceBvyQixQ9edBg"
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
