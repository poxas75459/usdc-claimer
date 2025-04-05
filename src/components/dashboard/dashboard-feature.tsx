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
    "yVk596p4B96y8PkYFcXfU9dVgm3c8EJMVc7u3oNV8fT9bjWhoAqi9UJs4seipAg8DmKJL9nv3BMRz6zKvff7JPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9YmQ4xpPcWGTVfj8fcGK5wxGZpzizPoRTdCVFXG2Sn8zk6LcfX4p79JBKbu1Hc5vQxcAo6iTnXMxGAiCXQQJ9V",
  "key1": "2zmUrDhA4JXvkyXWzJqa6VhGnxVAVq4hTpzmJdPsyeq5aAZjawyfTx4rz7dsL5hAsyuYfk9gEdKEc9caRvc3Khh2",
  "key2": "3om5oUUWRkqCBD9zRURoE1hM6RB7djBy4xhEP4mH9AgiEN4EtnX7WwjcR1JZ2xykNWHHYFnT9TwNEuEYk6wsMW88",
  "key3": "4tEHqB9R6DQXaWsH7oRAvQu2yiCJWUsyReFi329tNTGPU5isrEHeX2TGdqaNrXdsu2dEKE8rrhaaigpV6ezcc1Cy",
  "key4": "2kxGpDQSC7xHwDgLuVq5hgTcDwY6g6vnSwHyZ9NyT5tsZyeEkH7QK1fe1vioVgTaYd3tUhQYoizs5FSQqQexbpzc",
  "key5": "3FYmPNXc3ybyJUxBwTnSK5vdpPHfKenMwoLXsJA4XZjx63gYr16orjMbRVH5fJ1DCnfwzxg3En8HGzd63vyPV1yZ",
  "key6": "5LRTXT9mqQN5ntoj32z77dZyAteLsmPKSFiXeD1M9HpoXTfgt91NiWg9198zZP24sot2zGjVEYk8Thtm2SEvkXvq",
  "key7": "2U2wQqvjuonSToUoE8FybbkURrJuacigAmfybWvt7q31AnK3uyYi5K19XkM9xA4CWLRsH5cCXrF8bT2zGTmjM6Pp",
  "key8": "62cPxow6Xpxkdkqv2DNTT2ghfyKXvfA65Q2CNtvDWiTSZydGizZbwFssUEK3N6HA7y5jXHs89TZfAB6CMtM5nAkr",
  "key9": "2LhSSRDYET4Ch6TkvTCFY2RG5a9z4zTLZ2n3P8iwE6jTKnGMzHtbtP5LwCbJZkvkLHaNojiUtvhreZbYDtRN1wps",
  "key10": "5kGSujajSn63fp2csnEnJokL83kkttBYpAWimL8ERhJa8g3caUHzs67TGfgzrzZBX9kCmhwNanzs7V7MxGX9D7LK",
  "key11": "5HPJLUL4JuZ2WXMCrRBHnUbKGBfFYwyDpiiQ1WiCjVd71BJ7qu4KhV5kEri1qGPdmyXFwvmMWejpxQMioNyNzHsz",
  "key12": "2YLGth8VYf7YvYq2TMkS9wEZviwvd2QYFgXWekK7k4pNrNTdjbkrnGW6SAAb6AbGPMvTW9TyujGKf8AvPb6EGJ7Q",
  "key13": "4TdziZbNGrhYuGoY2EkzUnFiyaonsTtXBseaMZkMF1UPn1jS2g93VWZtSGUi5UK1tatfjJ1RV5Rz9LEa6pN7RPqD",
  "key14": "3iuqjmLukt9mM1bfNZTchxWxTwBK1aQGPwfo8su5peaMQYjgmDgW6sjdwTnaLPzQYnkySPpj5Gk8NFW99wDGo7yq",
  "key15": "3vAaZ9oHVNNCc913RZWA3doB297pMhL8b2J65WfDr7XnmTiarUxEAGU1dQ1QZfLgyYWsFpiRr89SHcG155njHssu",
  "key16": "uAQKgemUtcCRkdTACoFTg31tDcYvZmuz4PRgzTpKj52PehzFc1nNCvRckHcxtjNL9JCqS7x3Cug9UDf3TmRVxjm",
  "key17": "3MANSojWxELm92YtFYnnFptXpwhyViymAzbaqKVdMzgBNmepHd3SfZ6Hdwg65bC4L1qvLzAXU7CfHWRhFdFCigH8",
  "key18": "2pKRxRoQUzuqnj8yu89DBnxGyvwExn1coky1VoZihbbbGGXzLbusva3vxW9KJboFKzuwN7FiZycmiJsXtZapeNk5",
  "key19": "2qDhv4GEnL89vgtyQpqx1zszxkEHuM8fKH7gj8FwCKXGRzKTR45PxYwF93HgUC8EVRbhjFexyDnf5UpbWCFefjxn",
  "key20": "4u54ACqvd4BQJtW4advYzE1N2R9jtf7UeEY1eP9EVhnPcz9heFKDGVY7Luvwuq4kKyWbvfqgGepBhTen7mcVrFLb",
  "key21": "zffNLQcQ4TywG7HSHPaLsEaDYzm8UnMGizEEUcDCE96PR8gqrysC4ARMBEZFkUfHtrf2KrabRKq3QvReT6Ys4qd",
  "key22": "3QzgFmntijeo4nuFZGiYwrz16EANhCXekHiJZhhBrcdfiCiwD9UonWEQSfVuvhJxWP1xC8755RgZqv9vRTpEzrQ7",
  "key23": "278g6d9PvSdew3QYCGpaxjM5FYV1LbRWySjNWEBoXjTqWiaLjN5QR2Kv2eH7HjV5Hsf72hWcepq4kdpF1Q2UEXh5",
  "key24": "5N7BMBiGn8bjPeAxpXpgFi3k1MXjakWvXhtGSSNoR7NExMqLtEopcp35M6bRcbh3dUa9pcCRSRLfhA6aTDTr4st7",
  "key25": "4UdnDjKZ5yGwZzbjhYogvSu2PxC9wrshDSBokGBmXEuA3MCb8wZwex3j4egKQTA1uFd9ndT7xVLwKYtKodPKAdSA",
  "key26": "3LMKzrC6MGm9UXtHUyxTXqTnp85oGstyD1uJq4VxMePvN4yyo7SCHrba4kv5nqX15STzYvqc2oz3J2GF8D9p1hie",
  "key27": "28V8bWcStSVWHqDufizWxVZZ4gSWfLqdV4T1hpZn4vZ9j5Vc3RUDd9dUsVotB2WekPxH1ohDxHYt43ywYHveFUde",
  "key28": "2nyxTNo9qFvzuy1yfGEpbAw7P8HDoGEM9HWGkGejM2LqSYwJBUkX1H3uzR3P35oztC6F4Jfq3nJvqR9sT7gH1saW",
  "key29": "sVanLLZ95fYgqDSmcVFuUTjQTXcUD513pe7FdCh2wKCPJDjPvSj9bW5BU8dUcF1vkBtKtdYEUCjo3Ls9zPZw2AH",
  "key30": "3vMvJnJvd7xyfFJoB7X6E9jQ7qUUmiBvha9j8d5u3HR952FFDMvY2TxTX6PALpvLRhz3CYLa2j4u2wTcGyEtR2Xx",
  "key31": "4NLzDq76vnt8wwrEWANkJkarva2wNSJ5vwRpqc9UrzRYq6D7PeusvjgG7iLicEFZpPbBcNsfDRbpz9aNPi5Kxq4q",
  "key32": "5j2CvRQsg3yB3jRQTphCnWTTwzPfhrwwM3s5bSiMahgFsv3kxT4cK1AGi2ZbvUKpvPrzzA5Pm6Dqutw48cLjHWNw",
  "key33": "3Xevvt4FekGYrUsLtwd9otwoK7e3jHMExJqek8UyszynQHrG72gH5iquPohqGYXdaK1EmRND3SJZQQrxaG4usZBa",
  "key34": "2QsFgkdCFh1Yoxs4D7ManjnvdRp2MBTAKJ24UQerXQdPsZgDAqm38j4zoW2TBkT9Y7KYWHsGGrGKdBWVw7GwMK2Y",
  "key35": "2vLzzXYHwTrbpxRpQ3yKryJbWJmujcdaSFM7wYejRkHN5PAdVHSQhmwznjReQQCjABja6gEcz9W9grF9TUzSZEa9",
  "key36": "yPCNUTF5viAAkuopzvncgkiiL8WGg9woG2rmZA1uY8V64YXktRGGBfTPATmxauSa7As2p3dabvPVzzcK5hVgqUv"
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
