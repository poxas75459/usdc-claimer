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
    "4L63ebWJ1GE8kiFygBQer1eoFyNQeqPk8QzonvFKtundDHQkz6HzwMPfvbK1fDfesJN13orDM7hhmEwE1W9sDx7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdrC9ocpk3wW5Eo7KMYxtq2ivkjEUcDBacjdWwuiE9niTq1aDypUELZNbuXQVtegHPpSJwT9e6M1oHfPtJga8YQ",
  "key1": "3UdghNP5KMT8BVJyogFDSypsQJBbDVL8qkK2vi9Th2tt9z98hUDnZcPfyZthgYKcPudRNkhVSmgFAKQZGPhX5Qgq",
  "key2": "5jyuCQgp9cgfVgxf25tSaHCG6ZNdVnVNhJRQoehpSDdYZD5HQSZnpVLE2VVsagvyzEGT9hNxXRrnDyQTiCyxQtta",
  "key3": "27TuMhAkqN1pcJLWR3gP9PjMiq21iX66pGyXBWeQVTVfjsoX5YfYN83ET949y3vjwfeApp2ttjjrZmaymVSUKvFa",
  "key4": "3qtEsdDDqA3MjGM5BVPQejF5EUUVZeTkrn2oxJg5vETpCRTfL8RL2pE3s4qGWcJHQXfPdJ1o8RQF53SPCr98oHnd",
  "key5": "3XkZVpBsGJb5mk6J7pccnw2sfjKmoiCuKNr9ft54mouFEggXR5ZoGHcU3x915NdM59sfgVugFT57rwgKrJYGWZUo",
  "key6": "35jseNUZRtuCh8AQ4JvnmwF6L8bZgywTFqhi74g9U5kYveQ4KZGWcoEENYSik3Ynua8Z5i1xLsSVwBq8QQivJZD2",
  "key7": "5x3qUrMkrGNFmykfRt8HPELRBx6bs5LFQ4zpHmTGefYqxBvD8A79W5BhoKKHNmyZxufh2nCbsdArqa59KymyiouU",
  "key8": "3TjmY9RZZsm9w36e2Yq8cPJtoYDeDAzT1jJEysdgm5MtAY1uxNoLLZ5FnRyVNHWQUhNZ7A8w5mbdoGuPprH3m7Qt",
  "key9": "2fYLcX8mE8EmbFzdE7923aXS6Fe4dL7xzXuPFJkG5ePrzZ1Wg1a14UDFdkvQwy9ZF5pbrksi1777f8Q5MJ7kF6bg",
  "key10": "62XWnos4cHRCfXmJXQav2msHMWJuQLwg7DTKBwwDSSkJoNyB6kEv6pkgPo9AqLHfqit2YFH58Q7qoBdcLKAA6SYw",
  "key11": "65JhfoBvjeYx4fhS7uYGdm7fWHsXDU616vZPptSE3KuRAFm8JA6Q2V75MS39Tv8waMVX5CAmNqDsMnxkAwY2Y68K",
  "key12": "4rM7XrFcJDCNrJ1j67Ave4p9yxA8YiDFSBHjMV5BNLQfaa1SkKA7umF7Nfr776ZwVqt2xNxkzZU4vXg5DXtadxgq",
  "key13": "2MtuymgCArz8H6gT3tnxAuZRX3oZsGnjucXtGpQaKCrANebmTCKMr2SyvJNxUBJt8P4MrKUFMaKBaUPrw6QE9K2p",
  "key14": "PuLRzkLhhHytdaYiA77xY5bQUKehftkbUwira9vRJNNXr17Mui96eZQP4uE2FAUxZYV2Z6e9m5MFrADU1J9XpTJ",
  "key15": "3q5EXqX1b7jeWvneFbaNMJAkEr63hZQF9dP8Br63e3PstL6KV23Qq1HUKWxxD25YSQ9Q65hJA4tXyVc3DSMWWi2K",
  "key16": "5fWdNRAnwbd5gqfrifN533d8RnyRA3h62Fe2d3c3oQCgWW1CdPhEVr3Zrvn6nfLZYMXmA2Jeb2FDqJstyYAu7KD8",
  "key17": "2BvKCZBhwRcgB6xsmnRpDW1fzCVmY7dNR3w4BPEx4rQAkRdEGaDDGJNNEk5ue2YHbXr1XDfejQpFBbBR1SMM2e3T",
  "key18": "5ASN1hMXyDhkLNSqjmZGvseY7dpJmDZf9nesQ8U84pPyFgFFG6FLg3dzPCLoJ1XyaPd5Ea4rrFiVhJk6LU1eYJHT",
  "key19": "5Y1tFe7HYofJx4Dzs4mfLx4d7fa73zxVhv4S49swY3c6jwXJugvSYvG7kUXUDG2ikaprcoZjcWcAAFBD3aqka5S6",
  "key20": "5SbZexdubBBrFPDdvoMi2VdmXUJZLfvRHSieKiZLMaeEjMZgt73DBoWFfJ9CuoKXnXJ849Nkqc4QG8yayDx22SPo",
  "key21": "5XmcSNHkqWigb9ooi5eoXXGgjUEeWr4Atc5PYqsyEQuu5iRkGcvkGaAUM9woYZH2Jk2ikNZmt57vP7UUgEVhVWL3",
  "key22": "2QWV69stwFUzCPWSD6Fdz7KVnR66AVn6EEXmmnogpm8cdEu4utFJXr6gfEJpasRhwjnTvW5aN1fAtNJJoEa6Ya4i",
  "key23": "5urmgw46sA4GWkg2MLQRusdTjjiZPunSFESqBLpU8Px55UQuAQhtwLZxN6DMwYNAEpYrVkcasY1SDVLQr45o4Vwu",
  "key24": "4CQYQw6xpPYPsLjsrzt4EZHcQe5mGmkronXaPJbND1P5bfCzzjLFwaHpZd5G1ZkMg2QJmpMbjwixJk49QTEGo4Fi",
  "key25": "3zHnLtmXENYFs7iSER7MutyTp5o39m9Y5pmNSbdcxvdXXEhS8weRsE72bdE3nigwKnZ8KCasDVepfuRyQDtLNC7",
  "key26": "2YEbGqRC126xdeQWF3jyWLagUU7J8kgtWyR5yy7gJmJYiThFtt1FnFNzjjnPgCxF2xznURWsSmP9MfUfR9gbUSF4",
  "key27": "3vLVewSPFmePnVeZiu5DJdQm8VspMrfoX48hLQesVa1SJBUt7bD5wWTk8xHBjFuMLzX5LRF544h7iKAfn98zsUs2",
  "key28": "29u5QqJst8AgMJHCsXfq6RU1Y9BCPDMCeSfuVgxbH1rWjwKSrUmVxSBh2ZtTsr2MQ1pqV4yVNJ2gR24dUyqQTBMx",
  "key29": "k5oGuycR1sn2foEj2upAzZQRiFfERTyEhyZMJCJDYv78RP8zZfsGo5tDdHMo8iyncUqciHLq765dgAszT4mFq8Y",
  "key30": "4cQVHUoLnQ1wiM6eude7TwLWt6eRfikQk5vz6Mny6kDRXfrmtCev7QLaFZjCKAj13t8CwhRGGRP8iAUGZRHF5bLv",
  "key31": "3HXzxGD2L2DM8yDRGwXKHut8EBKGQsjf3WdAT7D83kbJqJsptkgtDA8sHzaoRbf5zb9UryrSicKipi2nWQP7h8Z6",
  "key32": "4JsNqAGUUDHtPHwyEZvBeac1HWNV46ogjAkniyerqmzqf7vmGCayi8jhc1G2QRFShris7f7ArAcnXD9oxzipWWLv",
  "key33": "5DQEKzmophmw5fSK9RSqsK6SjWdL6fybnduZvm5yRQZebUsG85eainLFbZCBRsNyNE9i8zr8yB33RoZ9aRFLaWnT",
  "key34": "2d1ZvYCA1RLtkxR7YC6RuuwVt28PuwqbmpMHah17a8JNRv4xiANaxYahzo95Yvhpnxz3VyANVxq4QY4SycSvpDc5",
  "key35": "3MANqCGW3haFRtAbixHmqbB9RkkcEKvtyEZwwD681JC1ETcsA8d91rA47FQvLJikBvwakic9FueKhgZedgi2zNLa",
  "key36": "joVfDtJvNjhRmqTQgfg1Zn1qmjXqKWXNsjbkP254kKQackfCpWpvPqRhn5Wx1PocmqjL7Pc3ZnEGZ7y4UEEZZ6s",
  "key37": "21Xf594vwPFDLjuo6nkTqmdxPdy8orHQoaR6CZ5dhsfca4bAnLRZr3zgPGbk7iTtE5H4x1jL8GmJmAjqREqLRYpN",
  "key38": "2CAXMAxNfb8rvyDHv9MfVM8DzuCzvr2FKFPPKLYB19qHzF1iw72sb36tsqRmBtVDMrscVPiiurJvgXoocqGN6eV8",
  "key39": "3d8fR11BGnzz7m9SJtduYuJcoVhy2vxG3MriDXpCo4L73s5yeSvFMCFYnM2nFgqnttSE5XpW9CoCyku83MdBCAJx",
  "key40": "4J4FeypR8GWoVXxWJ21zQ4CrJq79ea2sTzQiCP335jWqyazvPxw6t2St4JMnFi32gaXPC4gViu2zLcJCDZZT1fCA",
  "key41": "5eTh5xG5ddTVqZ1fMnbHwnHceaZ2bZTTGFZJAwWdNbUBQqiF62buEhZUH6HTqNEzEkr4kwxdxqBgwWRu8NVrUhmK",
  "key42": "3UEvXDepHwD18Zydb77iU4NmvtAcqYxmZv9yhnE1WKrJWV87dngcz7MDEPTChqpSDShPB6wMA2KG2TJsQ6jKdhML",
  "key43": "j79c1RbiyW3iG4aAPPiirurRjhVRnSwLxFmuGNKKdNMGUNWhZMoyi1cCjPWLmvHezKrLpxmnF6qgqMwR3wdJAGY"
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
