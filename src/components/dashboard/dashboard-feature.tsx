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
    "5EdyrsPGqHS51FiL65s6nnzUZ38uUfksWdM63G6n93n6kFQggsngF5xk3LMjHeVJr7ABV5bVEAxwd6PGRoatT5Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jU89w5QzCDyepEuRsQsZmBCeYxKiMXQkb3YAKQoH7h2KWVjRm9r1qvP9h7er1cd9XU9EiJaZYQa3ghy5eGS5TQZ",
  "key1": "2WVGQie4YCPJq7v44iV9xmhdMPXQjx4tJmuBi5uF2XQM77tesRFkGerd9TbVJatEHSV3AuvSNaWrLQ7GcvZD5bJ5",
  "key2": "4xJiCCPNxFaABss234dBozh7VvGUV7FjMZFnKxvcZCQTz9MQmfpSUCjvKsxshyaXSoB79bRTRKSeH3j4hRYxaPqd",
  "key3": "2TWd44qVFURBtjuJ3Kwhb1FTrHxChqFgR6kAu1w3DGmv8ZtVBiiW6A9ptQaM5v43ZP6roqaQVGHL5JvtsuP1Crv8",
  "key4": "5mhVuhMH7CfSMDuoFoyMLaCvn2SC7vaeatAUJtkvuSGUnbZmMJwY96arWrwjpy9L3oQt5QtzfdQA5SwfsjWjJmer",
  "key5": "P99uvNxM45HNBYkq6N6Q9FnUn3XMkD7MKpaGqFQBkBsPBQZ1NYKgvpmApAfRqXd9xUztxCYM336SKkSfTkzNUNn",
  "key6": "4ff7iw8Gf8VsGkxT1zAotM8d13zqXuwMpgdjm9PcWNwUXLGSLXY8e69pY34szsB1kjzzNJDVW9ceT4P1Aut7sVWW",
  "key7": "2hCwDsewaQtDv2cthGfiJR2whh1UTARsfT7tkS1U14jEwW5XBW3oEUJKuoCfN6nZnKEGxM2Y6UWZhnZeSTy674HE",
  "key8": "3dioN4aSenaGK8KvStRKA1AF7juzgnUL53GUjC4gZX5FEi7bMfrKdPM4AFn6sLMazxQZE9bN296avkAL8NkQPYFA",
  "key9": "2dcjA8LyeF77hZPEQh9xH7Umti1eBxQNJ1dDSadnnjKRoXT8ZKdWnUhLhZzBbLQRztJDeAptx4oQNSXkStC6vnsi",
  "key10": "4qGXjLnUYBPjCA33dtetqy4eXrvrEC47r9PkvmRsVKm38HfvV7Pz4mp7BSXj5eWgLSTn9rErr3neR6phKWmq8P6i",
  "key11": "ys7rFahbePHyDSfxWecDG3J6DqFLj9Gm8S9UyG7DEANWCWxBwaM7uLQuhuXEEy8cCnNPYcz7zp6j6hSnzp9euEc",
  "key12": "4uUhMSWdpCf1fi2kcUma7xy2eqiahR2w819NnDDE5wCLcvVkQ5c2D9F1X6e6MqsoxWaxmy2Km1mNXgDMh5PJ6zKq",
  "key13": "2vFwgAS2yn8RV6UbgkZtmXvpkTn8i1MTSvxn6Kbb1aUxto9tz9YvwMccPojozPLBTZtivCFkEr4L2XpoBLem2T8X",
  "key14": "3yDYXyLZzbNVHAqGeVXEs9mdm6JFT3ZDzRszYZxQriJwCaNdhYrinWJCsu3UHTfzdHdXVUZeGyU2L8ThasqTNE6i",
  "key15": "4JuMMvncwVyZK2tyfAzzZZs1zVVFBQ6ypvkdqYHKUakANkySoB66F52FuhUnYZscUvmctdtaTjdo4ZHs6wbUtAXJ",
  "key16": "3RcSeLGbrmBgC62Qnqr4asnm28HJTLaFsnhn8rmvjtUDKz1PMsfReUfxN5Rsgz5QGvPnZSjuK9Gs8RGw9ahWQrby",
  "key17": "4XuPg24PMw9VJ2bb3bNeX8coWiYuLGYq16PzX9pjzAPpeXfnbnexeP2gvwdX1iTp3UEdgC74fXfhz7e8WHEpuemC",
  "key18": "Exmpf1iaJACzLDT7oTVBDo6Boy99BTgfKBR81k1aVF7dVUfBDanjrgMXw5DtAXsrweqzwGn3fmUZVSfa7NYiqBh",
  "key19": "5tPnfxVHRARAoovXuSZQHWQPV4g9tiACpfnmZaBgNXbPhTjZ7hoW3LKVRN7ZFoTch9HafSCLjzgJMVLjyf4Uk7Ch",
  "key20": "45iEcaRgiGtuYGx9t3sWy4z7YaAZgrXihjtLJ8Hn5ZCNcDV3qENnewgy11MX3fqirpQB9rYYEVBTYrbjWvNZKdby",
  "key21": "61VuHTWGKkhHoXKeDHkqWnq1sFhyJUh7cetCE1AwcCwuYBhg3rC1RcjaEytBaZ1LyExnfPQ3PXV2QTjDJJFu947V",
  "key22": "2fgt7a3BuQFq6sKofYDsUHgCNCegkmK8mMqdU2MYF7SKA3erjoLwkureW2L3C18CthAVNPjwYNEkjWcKcN6TB6GN",
  "key23": "2xJkWBKWoiFbSffeexeeNt2vvL3QRsgkZsCUQWApsP2v5ABEwScKi7MJvwiUg2e6eqDnKwnJtXVftxSoWSgqQdM9",
  "key24": "5G494zsFg9y1CE911GhexjVTGv1fepreGg2PvW2djkdj7pQX4AMZaTJqy8LTaSM7sSj7v9uzrvUzUGV23pyPMBjo",
  "key25": "5mxk1FKrhhiWu9Kqi9Ate5Eq2TzXReW23zyzvZD7Mq3oCvnfc7s9MFR3Fqn8ZdYUN8wGQDh1QF4jtWHfhXFsq1G8",
  "key26": "3EyKszEhnFbdynkaD5btDSk2zP8DwMCevMECDxCy5UdcvBpE23kHeR15iseHfy8gMBRvu16CPudTLP1mA2frJypD",
  "key27": "4gqysqRgvJ9P3AbAVz3jtzgSBAdWSMBmMCb2Rkfx7WPtHvC1tK6gNZf4GZQUxWXdKxpjbJLzS1ToAyL1aT3uWQ6K",
  "key28": "3FwqfU2kFd5a1jKYHV6Lp5kKkrgUCohXx6HKTGHtFBqivyaydupDab4hkFPviuzLWuzeWUiXRh3QLSASheBCvbR4",
  "key29": "P4Fw9keGEXNv6fmCC9648ynnnVoqv4rQR9De3bijK55JdypWoDQeoxhdGgjcrsFyk3tftrQS4aBmi8cng2ZgLZe",
  "key30": "3uigyVLYMMjKRf3rEFR5WfG1RutEUfGEWEgZiHw6pAf4j6j2Ja2oeR4QGMToN79Pa5oWVaNS1uRLFzqqCyV8zBeA",
  "key31": "4ddooFevCM8PP4yLUSM131a82TH8p546cjEfKgVYdqbSpQ7TQvJcftuPYj4RFP1SqqKQA5NxiQpj8qRkTtaotzAc",
  "key32": "24cm4VxmYwHGZ4ZeJ3mNQJv4E3eMMZ57HS6DcXswHMnxrZe1K6V3EfSomGqNqqG7oVjmDVaUHJH5CiVMZQiSTYB1",
  "key33": "Z64K1QGFLEnvG8C4chERvRgsHG3deMhw4qcd2AZoagJnfdwugRzBha9QKGSZZ5nthjmVwddgPDoP4nBG6pLJWNf",
  "key34": "3GC4T2FTX3pwmjR1cijmFuPtdX7RDxnViFp4KDqbcghBSjYpmfHdCzxN2frx4pqQ4vodqo7CweQzJErsPFgL5m8u",
  "key35": "4hgZK117gjFxSwqhEABSzX5RZhsYynWgJYiNT13VBcgYR7CH7f9NBm5gJ1gperxP9VMZiSYADusYJpBgt3kgShnp",
  "key36": "3ho7Wjrm6upKKZmPe6U7sUAJtPEKoteJoGkpPGvh9LmNEaYAR1TLsarUDhZbqabYP8EqDyPnCW2t8FurDEBknAGW"
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
