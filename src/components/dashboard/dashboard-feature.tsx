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
    "5LWjJNirTrmGoTv6JPiY3b7JJQT6i2Y5wa5fobgghBd9pUtX7Urjyc9TtGnuH3cZC56NaeJU3yhW4EonFnfK5VkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYsud4QsVwPUrf72TvzfHxx2K1N7iiP7f6a61TcEWQ2VJkdRAJwA6uEgNqavQrkbq2ghiR1WJRkDwiDEArW3qF9",
  "key1": "imTbeEjjEoaa8rDQnJi6fvTnHNv2wCxRCh9bA2sWbb9hv4voSPt3DuFbUzDK96a7NYiLfmcfVqkc9aNViguDVYM",
  "key2": "nfGcCK7WBs3TJqBauRpEcbFEkmAqCUXezc6kwdMH8kSQTA4G1RxhQH6q7FWBufDZLMBdQtAvtaBjsGQkfz7HKLn",
  "key3": "5djyCY6oRbc2PrnAEgEumEMyaiVspTHEnfg6SrhneADhjSiFqCfrmpUE7p7ZbhZ2Du7JnL31H9TkyuBV3eRemF4W",
  "key4": "5vwtxpW3e6WVrk6prwFRNgNpGpmdyAww7SKdxgSLcrHa94BPzscwoRGJVkM76P1uwVQRqi1cADEYezsgi7dqH7cB",
  "key5": "4MpeNhiMRKu83epLaQnVUxQVXJhnNcFZxwV9krhQ6CWEUAWVAcqw6E3bDSJ9EPkzaed7YAbaUvP4m6mcPPBEFK7A",
  "key6": "62oxYEwo8ANSjDcs8kXciESKo73UJ9vs7QTLQFmyo1sNEotbvmC2coXMyZ1nEuNoQpkXrhPeARFhjTybedXQJFiQ",
  "key7": "3PhF7Bf1JzKtvsVYXTBXcuhjwWbQmgJBqWPVjGHtnffLyWEGh4h25izuiEw5cdU2WJzjWgqKKoLSNGZXfPgeYFm7",
  "key8": "52D3ZVzivpo4AAEcECecB7MSZpo7Kg5emWaPgj2AM6zzq3vywzhyMxd8sTdj1wRNsK3SpPoARVJfiF6qK7M4WhB",
  "key9": "3b6JPW94CGuC323hncZcNav6i2A9sfn5fRfBNDcyGQhwPu9ip1A6JM8Wp3hNRTyxVzX3hkfNkQDME2y7RdRvjinr",
  "key10": "3UpW2cGsNNQnekyuKUf5nipem7g6sfVMP3EAMy9DFGv1wLcyx4wLqeLwnLv1PUvcLW5ByPPsbYHEFXB5f6a8PMPM",
  "key11": "4SahDEY6sah6smoPYBbk1SnDfT8YhynAPKRY97Cad847GmBRRmYcEnnrV4XxLqqBjAKUjG3Ectu8Ap9msNxXEc2A",
  "key12": "26b6oQ3xSVc3JUcnYEg9iiKnLh8hLxN6RYVqcmDYBgFqReJHCCWjz1xNXYBBuTkRrknzxo1B1aB2tUXzYqDxstMA",
  "key13": "Wu8mxhvRKMHoFg54ckTd2zdFgcJnsWWx8FRpn7kyVYzuEMqvi11PCpw4es9wLdQHk8wFPKCCXtas4dv1tzK9o7C",
  "key14": "2bfUfdy4aCYZv7MvqYuWkAUMWftbqTMEpTX1a1KUkeF2osgVy5MjeVLYzdd6seNe6WpQHPBXFmjxKy3svU8ft6j8",
  "key15": "3jQpYP5RX55frWSJSwPnJfQ5mvjnKjVKv8qfptsSD1tA3jHo8ji8xsrZwoAK9U6YjQUiWu9Hp3YzWiSY3XHJmYFp",
  "key16": "ASJhMh3ABDx94wJvkZsPUFGtLHYQ7AKbtGNS1rpAyrzAxJkmLryq3XJqxCtARAzyu8hSiVq3ccs13JzE5zEJPAk",
  "key17": "4hEptxuFK6MyfE4X7MNFXohn1Phs1CerjnuE9xEyAtCMPAbzf4ES6qD5EYPoRG8jNzR8mKJUdW8GH4ayHNnp3Zmv",
  "key18": "GbcAuiDiiZeaYMgZvCQoJVGaFVmctvShLc6pFWDK28TYj4QxJhrpyaS9wBMsSvEgSNnkcVhY7TN8JS9ZZyyQ9sU",
  "key19": "2p5fGiK15nW2i2Kz6e7BWkjw5KFmp25YQQ4z8QwcdaXKgxJh7dNzVf7Vkd5G2LtScFZKL2c1LphyN63oStwiQjuc",
  "key20": "5tE2ZNiJoZhUXMBbL6HKexwe1qFtR3EgGBvVmc2MmJaSydKLXtRMqJhtxcvZUyqRaDrZJfnMLFoxjD4TJUWLN7HL",
  "key21": "4WHX4KgGDzPsHYaJ3R8BPYkSshG1ogBUEo8acifyMNUzf58pH3A2YghrRHyiqsXtty3NHtucf4sQJWvdNymJRTPT",
  "key22": "3ZMXq1FsaWUXfJqJBePj6KA7WHiJdB2pzBgsrou7xe7VTRUWoCjXdcsYgAUP8cF7mS68ma8DKaptNEGy3awnUcw",
  "key23": "u42tX1ZEdusBjYcMfQ9K5G9uXmXeuMQKx8NT4DYrUu7q3hn1AhNBib2NxSxSxrow6ww68AzbxN76FPwSv5SDvKD",
  "key24": "8UHnpbAsxNWPNqFdaxoyXcjqpqA9DdiSBainStWLTwc645rcYbbFMQcFXhKyqtnfc7342Eu4QxkZSTo79KhzTSG",
  "key25": "2fgJ7nYzPPbJfWUNcvQKL2qNt4bFAKuhnTZcKyZ23yHxBe7KN5UwyE56aUy4SCJUkixMnaigGfB53eBMzfWSVQjg",
  "key26": "3swd982YEvVMfEF9pTPWuQsmmFh7kSTDYTyijiYEBnf6RKrxAR9dai3XHgt9vTwmLsWjzP1zmTQuzXeHx5eHkBf",
  "key27": "2VR54nGUiwAK2eWBViZPC7mPGtRAnZhxuZNvTME8rsJCCrBi74miDXp8CfDHnVDGnhAnp9kapoKwwPcufBFdXvib",
  "key28": "4UDiaWT15msWkfG9NyJRcKTMejYczBy4b7HP6nv8RSNS5S7bnTLxWNaYXkUncKy6BPUCqx7Ji6Wtxs3TF33co4VB",
  "key29": "4eMAUkfMfJm1AZMDviHp5ybvzeGF6D8JMZcX7Tq61A1ghRw39DbcDK4erxwzoUoeYP1KcLrvnLD2dN2WgkBwTKcu",
  "key30": "27KRgBpBUFerqMhhRR8dLK4hmU1HFsCCXakaPKH53uVKVqH6XXirAsmbQuru3sj7pEiXttMPLt8ao4iVkRCMNuYn",
  "key31": "4Bcux3a4L6XgPDTR3MKMbNS4VQKfuwsaKbLRrqtGGb8QEzcRNcgQQuKEQhLitdgG2PBgTaPdTSiEVdAnWczuSnZX",
  "key32": "2vfwgQfEEPV9DYKDy2CKqJa6MwkSqEtTSLdTPSSe2yKnV8fuvip8jzLM2xTDhGRdbfrGn9jWNS7BmqSM5tHukFAW",
  "key33": "626op27HJyMHLetD3pwZGkgv2XvLp5HYnfpBuh6uXiJis5dDNieMVhZDY9PKZ5fL8ZbhSzKV63dfRRgSpWP7QJuZ"
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
