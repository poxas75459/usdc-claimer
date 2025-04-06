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
    "m8QHgVFNXAfCc49jWxXwK6quALHwKx87WLG3eNfAWWdiFttF6zd2EgByn9Me7227waRPv81zHAEKff5uLnVte9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d1EYdXZMhqEhU9MaBkbe5dYC7xqckY14rxxz8KFhi8Dzugvd2XXmUn368axeyLQ2Qx8qtw3gS4zJg8jvTLPJ5iQ",
  "key1": "3s48CgHZ3n1sjrF2PNPFyYyXpASHYwZwgouh2s6UiYwEL7rGrxi2JTyghFjNjxzsUj6b77YavjTk7o89cQgDH7nW",
  "key2": "5pGvferEZkZFn7pLaRDaoZbJHtnTmNpW13T53M3XpHrwhWUxZEznE3aQG8S2gaEebdXrqYJ118wseaucuYcwapZo",
  "key3": "5t8bKGgXAqdipgYRWz9rWkxFHVLiJkfVAYiYk6j53PAMUjMPBeTpzsz2RLnXMzw7HaknzZKqC8fde86ag1SAvzx1",
  "key4": "5wj6oj26JvHe1RdtvXtJ85g45Zm1QF6tvAwWPo464QmcTFm2Q4yMoZe4BG9h3QNzjCFRQKAesHH7G3YHexdM5H6y",
  "key5": "5Xxr4TdWthhya5fsADKfENQwatepEhzLMuvkbr4fHzwqMkY2bKs1txUpjHKNfou5MoqRKuYwBoGAA9BMwXch6jyA",
  "key6": "nnub5qRoDq3LP3CsdgEWGvRCTFKhBBMQFenNEfKW3ZX4L6hHeTSQtWvAm5NUPyZmX8jWz7e7gt2UkHhmEm3PzWZ",
  "key7": "5rkbULPNwLJjJQyfi3qEF7xrBxpsWBdV8nZtxKNYiDpxnsCEnEgSzcnWTGb9LSYjwnC7bUEKRcmTqNeoV1398YhZ",
  "key8": "3Vsxcf7U3KvJQDpEWNu5LkKZKCMziEfG9vv49gEcSCBumLSVqgobEQR4zV6Je49zXSLNVdXgGfTBviFG2PASY9f9",
  "key9": "piaDkGxy2G1i2sCmjYqpZWBAwD3NHVDRJ5V9jViYRjPX4PjAhHcQ4jbkzqHQiQHTVBXS8Zz3BGaA7HqgcWE9D2X",
  "key10": "19J6s56HxNauhS1yygVQvJNz6NfdxVUgoiyXBxcF2sCPPPMdm6HxZvMtKM2uTxRyc6aGQrmE1CVdf7TtGf2HFjT",
  "key11": "5unZjoTz2XTMt9xC5fDSXkiyQ2FMV521M3FxqkdMQ1gqLKEMeabGXBx3R3RK9R7TGS89XsHPVAWjdLfcxaJuPBQ",
  "key12": "31kprZZ2cgaLhDB3G84QvZ5CrYfwewDgGkazaPNxqAiW5KrZbkgPbTPzS91eAWA7bjxvbk1zgHpNvn3YjwqAWvpt",
  "key13": "jG7xAWXHThm2ANrPPyc8ntz1EYAA1Z8GpKc6kvCteajss4v13rYMsEApUqfjt1S567WnpuYnuujYXADVgbuRk5c",
  "key14": "53K3xRzYdzVAWUXcDQ7grp3ZnwpHpWRiYpnN34zwdA5QfKZehLD8tv7XqBJin9pt1RnFVYsNCadFJpREfUmzn9Vf",
  "key15": "4EZkMLNmJd5wreGQu6VzXYCkQFJX7So38p6LVJ67DmEmNDKBqecKCXMqmEJ6prnFZFEiMcnN14HQX9nbPkvARK7F",
  "key16": "QxKFJihWiTkghzwLtzLyzmpXSbW13kBrE6fxDbkWTjZmVz4AvYSB66EbX4ssuJ7i2AX7aHuDBRx17HgGfqRypWo",
  "key17": "5qAzL2w5CHA4yMw4AgdPkD17oJ7Pyc8agQtvEXPvz9CuWZVGVLmsc2fv1Pegoxo6tfcQnAAoFoobDjhvRY8y9DF5",
  "key18": "4YkeuPDehLKgCXAecBAXj1aiZZGSzMN2AT6PbfESvqEv7qYXkyJN1y7AD5QrrDYKnJMWwTFf1Zc7cHqN8bsy34TS",
  "key19": "2D1Us7rtiF2XLb6LJRAuCiAmvU2RFpVCiX9eM2P5okiVFYeYjXuhMwZoVYcmkibB7QHyNzhxvmkoU83uHLnVan3S",
  "key20": "34Lo65wRu2rRjkWuvgERbLDUcv8VDfG86CwGnbJQkWyVYq5vk8fpm4Eoew6yU7MB2tpeTWVquGNeypBxLM7JNJzB",
  "key21": "5hwsQNpEWnFiLXWYALDJAiCP2dfLTRz4wVCWR4M3K5WNUaBAMoxWbVUAcwsmQrzF9DhZaDdaJ84qr1DhY4bfcGHo",
  "key22": "2fBz9afM2mUFAGHYVsYvEznPiVVjxVVnHmoUHEP5xKkVMWnVNFYiWYS8NfviDw9eUqbJjS3ccepX4p1vy9F9CmXX",
  "key23": "4phvPTraRaCafByYHK5F57ryGteARDiEhX2a4ya4kdmvtaVpvyVq1MPZpspsVpC9yDvKqpNtfDWQzqgjHwinU68L",
  "key24": "41ybGpk8kMDhjTMBj4gk3WvkR9HhQR9kUJDTtpYD5vJ9kjjH2RKiCnLocxyCn5zdB1kYJNeSXHdFdhM8kH1RKEje",
  "key25": "3m4WbNiyLzc95c4W3h3C2opauw53hY5hzF62LBDdmVem9Kn2eBCJd2KxtER6U66UsFFqMaXVxbaeFu4TDBfZdNFy",
  "key26": "66dW9TomQNgtBC9GLQ58DeTeKCNYBoCpr4Kr9Bn2uiQ1RGdhDTMkvjNojkGggaNKsXP2qfR2MNK9LhA1ZmqMC9T9",
  "key27": "4HNCrZzMNqHZKjT5uBKFcL1gMPi6JBJSBV1qgfhxmPgENfZxrdUdkAP3sNrwRQoVnRVxta4EdUYACPxmtDSTVgJD",
  "key28": "4DQyFjdZV4wBGYaz9D9pCsyEmEDSm4tKuqApVTBg6h4EVyipAZFxnC2Y8JdthsaLk336kgxyFXQmyGXBqX8QiLA9",
  "key29": "yKgaXLhMmEiHEe67EB4Lo14TAR1P7dXrJ5X3CDZyUPgr1ZdMJ6qDoG5FdoUhvdUPXsdYqkW5PYkB89fgEVjPsmh",
  "key30": "2mRjvLCN1SV4iznKpqVM2JrLBQ9SuGJtGt5NGodnamNw4wmfJ4UPhG9ajcAJCvfbk24yYsnrvbz9pA8zUjqpTZtB",
  "key31": "2vQMJdy1UfmyVitqvdU7MGyLwUCX5CupWGyPAyH5Lg245wAytmYhaf1wn1KqnjSgzmdh568MKb163DVTiwr2z78u",
  "key32": "zgoGJWvf1wN6KBZziRcy1xUiX8Ah8X5AXPZayQN8pBxLAfqFtAT5Su5pdvbTLADqNahqBcJNuV1X1ZRMz2qhJZo",
  "key33": "5pfkkkfJkJrvDGv4egukiwtcUSmQYanavU8PFErydjFEsdDuHmhQYo8c1D3qoNimiPua9rd8uQhqAtFtaemgvM5A",
  "key34": "2z2k6vyojqyaLsJvrwYuYTEdQRJpMXYpeGU6jwxxqUPJNFj9VHvsk7DrEXiyKqPVtPoq7BNgAuYGKLg6EPKKxZrh",
  "key35": "rxDp5CcCdEB4hpnudbs6y7vJRp2s4a5RbKJiY61biaCdPGvSUVX8FRZvgkGZ5CemyV4tbcgqwTR4PUqtRch47B6",
  "key36": "5nD9pp2uq2axVMVxJK7mMs3iMJPZkToU7ejn6qNk7HrNbuWhZEb8VXuY2yTfPSCUw4BY7ZMYJ3smYik1n4uWeVt1",
  "key37": "4QxBJa6Jtznv4CxhTHi8s9dU29GCfrznfigehnX76SjXJRKDPqypgcwBQGiyBdLrupXKq6NeyWyKneXqoFgvs9je"
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
