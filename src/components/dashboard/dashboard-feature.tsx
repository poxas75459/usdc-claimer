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
    "5CDhNaRJaYg2bqYUZbCcvALwxw1apzhHWrvjurUjzET6PzjMBcVfGiA5X1rUbzeL21Pgr4B99MHRK711T5tLC1QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RVonKqR9PwcVFoyjtrzx8UdCpDX1qhHc2GPSiZBdFLoGWfyPwyn2triGNzeH7UjvFrXCqvZtihuSvr8pfB3s2u",
  "key1": "3BDZAnsjEuHL188V4P7QvbSQJt5Po6uWootWcH3UeyLbj6LUPD1JCgN4HXkyxw26YNVoH26B1mHpLy4fzxNZPQ6i",
  "key2": "2Y3Y3YCFYpk35oR62Cy8YvRoKLmS2z6yPxQpL6k93anqEpG5SwSyjhQDHtwUjTyzYYFzzSdvo43hJmSJNthotp8i",
  "key3": "3KAELripVckofTtnq3Rg4d1LNiSxrPewUVj8TjNQGh3AYmz5bYyEcx8rUhNSXApRcFDbpXxCrjkgWwzfgFmzKtB2",
  "key4": "5NPSNMQB2QA7ZqJbt8tko3jxStUEgapiVAbxfRNcw3q5wvR5wwVjt467baP8QkV8xVekUQYJ1u5HA1C642fMuBvi",
  "key5": "47z3epSeUXKoH9G6wqzYYS5gJC9bipcaHtFqBxftkjDZ3k3wa97cgVLHfWyBDzShG5yFzFzcvskcycU22aHkHCTN",
  "key6": "jTwW5wXjshw3sjdgXTmub4NubXtTr96uLEpu8rDHy8ugsnndesFaJ1ntaRcJ7vLrTxk7nZSr8VCHhZfbi6d3EsF",
  "key7": "4QZkJzzmMA9enVrcuXqLj7WSnBBzj22aSkfxzwFyX8PYKyP6aPBKdBZbay6xP5EaBDAxWThPC1i89Jqc8p8qoWLD",
  "key8": "5Lqt3DXQQnHnvfryb6HpHDT7BSVGpsPbLFkKWLvvGc4vBWPVWEQJMbpXvNPjAE1vpWsWA8LGqCFhA9dCpbFFgNzR",
  "key9": "38BJan6e264hibLYZrB7P2RkYVQJqb8oeyd2ay5WKEaThbv4Mv4L8NBwmYzb9joA2pMjHD6Z8i2NWfWk33j6VWRS",
  "key10": "3dCM6gYD5P2c4AKzpj3B53nBsb3r81K1wEyQqbVgxLVK9KctfWVWE5esez9SixiGJKtV82ttwbAFC7hHCv86dbuS",
  "key11": "2pQV9TYgADDrGEK9vHcsm2Te1ZRDq8Cvb5BAWsd75nK463yRApT4UyeC6EzVVVJxWitLQP1RqBnVxTGcGtZjEfBT",
  "key12": "3T25nGuu3uvXTj9bBYxCnCTTd7YVytCdyZMedXWjnEioZWiYy3CWAk8BGZxCpTGeeXKwKXJJYwLTsj1E2vkLR6C4",
  "key13": "4ASwZT2iT53aZ1NvmywUj9sEUqjqMjEj7PiUqxphZ3fjaVWd6DaaHv24NHx2oqp89vXKauWnCPzEWab7RrC5S3b9",
  "key14": "4QNc9mwQtq5qTUtsvRhpKyWGCHknwyQMyrtx9gWgqQGx4Zernh4z3kdXE3DogLTxJPpLVjzYqMpiB2DhUYjEAhtG",
  "key15": "2pFzFfZ1Me7LMKDPSWRthZP5x1q7wUVh9uHtQjPyR88XUR3uV6eimK43bLbNoU5YWkhT3rmbq4ZkVPUWkZSWBKRp",
  "key16": "2MFP7W5BxXpPNEHeh3wR1tZjygWLXgY9wf4YNnYVRyQT7vQggjnqfJoAPuxmiYkGZKAct9eoPK7oKRjxTUFpnhHB",
  "key17": "3UVmQGAMYyeYYwUAdBPb6rFos5iUBL1M1dNbxXMske5fRTMUn2PiPfNcSSckpkopPBn6u3szDJa5gWREtrg7sXSW",
  "key18": "63M5CZZ7XF31B8PHS9q3tATJqAAv7KAs4ozKnGCLos3MLJT68ikPZa9rgR2WURTBV2Wdm9co9aV1dTQcMZRbe3fa",
  "key19": "5m6X8kZdn84Hwsa1Yox2ybTWuE4WHYsb2gDXnNivb1zEiEAs6oxh9HcokTHoTLL2kKZzWvVAZ15LX5XiETjjN6Nc",
  "key20": "26ZoBf3gDziPEsBT3MxgqmpZBZsrhmLm4sE5XqXmUo5uKXFwjFU562A3e44digqpxpkKmEaamFQVAJJEGuMHrm6X",
  "key21": "5drg2ZrRaXZBqJzs7wHgd4gtQ6jssyhBgjSvQevVFxJi8C7XTTZU5x3pcbqyU38Zg4XcZ3UEbueEfRoVScb9aWU6",
  "key22": "ynxnCBEDY881vkRL7gHxrVeDchf7aqTvc5Ka43PCDJHsa7HZTgfcAp5w8pc1ks3vrQJbmcYwgToRgSWrtYZ1aiY",
  "key23": "4iRoAcdBi5eWVDHLvUcjZKmZGPQ3hGA6jjzBSpV9ng2q16Kq6kGKJFZMjySb1uPP4UEtZ4UWRvYbra6kkdNwufm8",
  "key24": "4Ahj9WX5NEys3brCtHqnieKoNZ7YetpD6RE3RyhawbPpLkmL4HRafDRiK6ByW5qarDXE5A7dLkp6RJjyGyYQ3FeW",
  "key25": "51ktKdnZKksHmNDD59SD8eC6NQr1msxKAviDogsLJKrSdrdG1b2tXB1wYuW9tyK7pwYHDjWh7irZ4QhAWab5a1dF",
  "key26": "36vihtjLVNhSVbrixRECCzHJDW8ExWQT3UKzRe41wN2jgZiiFatDW25RQNfjiNzH7gdhS9NuFEvyBvKMCRwpQME5",
  "key27": "Q4gfPGvYfgavkuXF4dkepFWUYyHmy9y8PV8KUyTXr3ns65ysjXwkFoMDeehLYyDNDpLoi8eKzWs4gJF3G6hvRWB",
  "key28": "26Z3dL8QgiEpkyCxizgEHVMvq7LF9yLftDca3varN8schspWukcKX3DTMGk2bqaAMgCYQX3ek53w8WNCnexYszuZ",
  "key29": "4idGRezpVXywzC7Rx964qDG8rzjSsXZ11BAbCy1WNoCuq96F28GBRktop7XXN1Aq1Xa3QZZQecziyg7UywUx74i",
  "key30": "fk6s4neoe8v1fxmifqJiLQsj6RS1YXKaWCroGpZeAkURnnLH2m3HuTbPLyg9JYoQ5ubmio8tkqCz6rhUgNKNb62",
  "key31": "CPUpj8Xq2SYaRR2As7e2S5oQk1X2EF9nAzXcgaAMtcF7zJ1WP9eCPeDiebGrSD3HquuGcsJUpKzsXpvLX9JgNoj",
  "key32": "4SU2vEeTheQhyX58etibQcZ8aNy9qY6s4W8A4YZQTrB4345A8PBgbs7tnc3ME1BbVXb8jPPyDma4ALUmZ6bhq2P6",
  "key33": "5CjHuwE2S4x7qjJtuDnMKKmqPPHEtYVJJc7cLdAqJfdxeiB5EYf4PzJ3qoVTApc85SfRYTBJVky6WDNJ8LdBHr22",
  "key34": "etigEa1qoAkEaKczuuPsMoHYZSjWgtLfT1mbdp4RQTMownzABv2DxiNpwxbA5fBsMq7kJtGjn8LQG2osRfvc9EJ"
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
