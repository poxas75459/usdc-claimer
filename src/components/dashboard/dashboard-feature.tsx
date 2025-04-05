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
    "4wJK2nLJBtEXShJHgAzS9PGTE85xcsF5ByuefVfrj1Fn5W8v6S9pWz7PXyaeuxtthM3gPYwzTL7zkD4JZxdFigZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiLy9bcvAofacTwXQppuFsV61rAd228UnhUZG86A7BPadtxNbNk2psVrxxxDfvHH5E5Bx5FENx61Xh96Z53HyTn",
  "key1": "2Kc7GZNynA5EEjjPndpoDjJo6uqFw1vYHqtdxpq5NGwvMG4HLgriYtq3RLM5m3925BzftiR5iSi92V7Z4be5S7dT",
  "key2": "3N7L33TdPd5BTXZofLg9uY8hLhW3zNjDoRFoeuBrU5b9h5iS9AyoeoNf35U7A3vesn5kZPWHNijXEq7FurdU4y7s",
  "key3": "de88gXnGDzWnGJbCexcufeeH7wNgbqV6TArrpMD2UAK2CcsLiYXWfyQtrjGkw6vqSiir2dGbbcjt14s4XoGGFza",
  "key4": "42tCAmFrbRvGAVPa2Rb4q5cLPhvVMNNZB5bbiKb5QnEnRrUR9Qc2mWXEpjneYx88PopHC7JeEEXKQpjg8Dtt6v5o",
  "key5": "3DQdMjDzUwUrXpgBWzQVwmfb89rttiAKAcH7pED9bTNv72NMn2VXvLtxKt37CqjrcrQetNU7DMHNuuqMtBBVCpNC",
  "key6": "33T7xFdjHqozC1F7CCpBUiUJo1jk3dWYbWynFb3d1PUwvgYbHT2XSKmPVnSGrScG32jkwbarLDaeVAQPMZM66bkm",
  "key7": "kWGqHn55L52ypPdtweA4PuWaenBDjYmjjrc4vdfXsgGpUgV4CY8QKj4HsVNvjzBKg6xjRLCakcpruDKKLJfG7Ef",
  "key8": "5aunneLqtw9oPBTSBJDZJjwroFEkBL6hESzEMoPZeobSHZ92XPmpfWpUG6iYG9qKf3swCdHaiZK1wXS6ug5F7HEv",
  "key9": "4zMEicgRHYjoCSkh4W7wnY2awh8sShmx6JK9Dq4DHNh6WT1FYes5LwbeqDAYngpWV4kwjQGMcv7q2DRTGKbjy9sT",
  "key10": "eJdgxJW9BcqAT8mMbJfYXwqczrzsHQtLHHdBjQB8Y8tpw7BEfp2RquZcoH7KuD1JDxdKnfbZBvJ9K8aHm6Kfqp3",
  "key11": "4HwbkpWQQqZjqg7a39EDzVVtHikcoPdCE3Um72jVZPgZwPYG5yz1n7sH9Xp9pnDqrKjvNr7VSuSCguQZrAuwpf9m",
  "key12": "rtUUntpKJU1S393bvqWtFdzq6oLUF8gQX8kgeUYPknTkwFoH4ZstWCEau5LR9fwAsoKQJjE2SkJzpCVLRUytzZC",
  "key13": "3EYHYi5hjQbqEsMSxc18uHV4nkHKhXKpV4gMEzxt8FFeuCZU5g7KpBi5MwsFMMWLAzmy6b14eiGC9UCobwDm4ZyT",
  "key14": "2gqhvS3wDp2W8EdRxtv4wJzwSXEpR4QLeUGPv5wDgMzXFxoKRPZuN7bwzzZ1btwZyFH6AogX5fn8WFP56ftgXGhj",
  "key15": "3rktSYF6RiEqP2TM51YppEhyRXJebhotEtJPBQt6CMDKBbJyJpFtj8gSoitjCv1zE33MgjwYChP6e8yFMx7YvTZM",
  "key16": "2J9WsNmf5mhGcUoj1ZXuyhmxZ41tHjrkJ8EcdCeAwJoQj89j4bNnQSAtZyYNd8zAprEBTskyMDbe8QkinzVuwH6w",
  "key17": "sTS4uFEm52PoFuVtuLxvtgZgECdF6jNQctuQaPAjrfub3LwqxDkwxW4Q1JoQBvWQSDpVn9XYJE7GzvXES3YPBoR",
  "key18": "4EfRckwhYLLGnUo9CWWZMPNxALGWbpUsdDY6nBe7KXT8KySqSYZe8AA712MbKw29uCCeQhMbpxeqzdjvAot1Tt1w",
  "key19": "5b73ZsFKLHeCMaHhsu5GQcXPY7zbbyknRp3zXjcU19xq8KSS1rYFPaxYgJn7wtph3g31S1yHaDoAipNKBNX9bh2C",
  "key20": "4ipJ8obQXkdf19yAcAf39pUwiMf3bDyVRAaFfUdb1VZaz7Big5Jx8VZ9Qgo9baKG9pJUnCiPBJMNMDq7rACNFhrK",
  "key21": "4DgsopgoWwf5WqSFGXZuPaXNiXN6sZNEjfZq2Pfu97mjt4MTdbeYD1gwyt7thqRgxY34JnqsCx3Sx2GgsUsJ9uC2",
  "key22": "fT13ts9gebwsb5P6eduhCHQoFYMVFh8bG8oiYnRQuDcnfsJMCz4cT64LVZ6pugoxSBc2Kp4naVspaFiRKUKvZiU",
  "key23": "5iBc8HLJ1hgoQW45MuuTfqrbRAKuZbwiqCanwHAnkENLBdiwCB4N1mbo5Fj4ZRX65VBYXGBMNYWEtAg4jyv8boi",
  "key24": "yDpUiVf8dL7qEWS11nhJ2JVyNpi8bQQLDxqdjzoiBomHP8K2x3xWUsqHbiS72iE7mgYhbYtKn8osH6MSKXjuhmq",
  "key25": "3QY5tg2tbuW9NQztqkM5GxQwd9cDCMfjL1qe8tTBvwiiXbqHoSE7FghBsnQ1SNxiuxDZZSJKxQxYV4tjBZGU9nwm",
  "key26": "5MSUTmzu3g7bEzDFEtNrQrG6sLhYRGdRLogQ7oh8b4eNMxyGKvAcCn9y7yuZbxGnsRat3t3BitRbTu965WYcUKZr",
  "key27": "52aVDDbA4Betva2KpNBvBU2ANDzS93e8tYJf6pjgXJkc6qLy1LFdbpju1tvs2ySFcoWqQjV6BGbzWJbNx958jDsJ",
  "key28": "44T36eEVrm3kfEobMqRmnHF66t4qLixu8QnuZtz5ZDEnCpLyEvkqREuz8hvvwFzauUFeYoNxsGFnsegmCsufKtvq",
  "key29": "4JZtyUz5dPg2FGBoYWHJFbJoEzcFVhGXTG6SQGS26gnM5swSs1y8zsP24pqkJYdHzCGeTiy5FAarfj6LsH7b6BNy",
  "key30": "3sjAkGwSk3JSSvhc1NTS3iAg6wU1oAtfHuMGsKekZQzHfQVBP3sb6bzWBypMS3o2c1cGJFEkFyskFjsCZmd4yxBP",
  "key31": "3dRDFRZxgHy9omiax6S7KVsgGycRKw7BLXveSgTT5sM7WXrqVv4AqLi1cRXMjsUFKMxqSkfG2Ctn3uiSpHtvQa8R",
  "key32": "2di92HinFKVW6b52sykJcp7hpVAZNMzGmjGN2VMMMxiLPqsTj7vAyu5vMBAxY2Acojdmc9HjtpAu2oKwMkWUqpsv",
  "key33": "E2ErGSgLEhbTuJvXRi3DF5hPVCHc4aXYMtADMMx6aPpueEE1FRsAhRMFJrUNFcCKds7YXp2Db3xN9Qu7i6y7wtB",
  "key34": "JnwDuurNEe4ywA7PbNfizL71u4RYkww1pPgFKWWkukEt8UwMFt2Qhgount43TYJobF698z3aAk5QR88zAAGmKEb",
  "key35": "2EcmCa5moS92P2MJFiCsZfqa1GaXvnGDyPemCkhiv16pnLTTmZy4XMA7WpkDdAb8hchcNmtcU8yQfkDJRdvLfG6X"
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
