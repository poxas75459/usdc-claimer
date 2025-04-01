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
    "27WRSMpCtixEsK3J1zDgGjEHKbk4ekznLozM2qkVVs78nJUggQ66eCJNSJDrYeqv2eUpXpKMXhcxaisgXDRjw1qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZuXEKfLZVRHcMHBpYgCx2svvCTFzKCMyYMbrsp7FK2Qy8T4tAxRBsv8iBXv5wuAswHxeB2u49yAB7c4sBahy5f",
  "key1": "2TkwVjV8RsSqtqWePScYtq1sJNX3uhA2jVSSXNeHBdMqLBNrejoiLa8UvXcSEqgnfFHxPS5HthTA5S2RRVCS3KxE",
  "key2": "5J1r8nkJoxPDWe88JSZ9FMjiQCM4qfmU3fwuSEG5vLssgvfFuF6ESmgXTFzibGbgjXdhyR4kuxfmCVSAD8uUjrrC",
  "key3": "5npgVRF8r4WT1CuzET1xuiFZZW8J3tfaG5kJRfXWD5BjE1Vdbc3H99sh9coHboZ61gw66LTU3XwBD5SJDtJZfCZ9",
  "key4": "5m67XGHNa4FsTYdPgpXsSJv49jdrWTCKJXVQNAem184cZH2AnarmNeQZAMy98nhM9de5AzmPy66rV5SxTMGKoaGH",
  "key5": "4jzEZorDcMfDoEzTmDkCRxM92u3qEVbgmvm6UptMqRzPAxN9EmSZTaCVLUPKdpiqBVePA3PkwabyncvB9xbsgs4a",
  "key6": "46yjANvz9o9wUdYizmg8yMMXUdqHcZV6DYCzVVBybam6n5h8uLffmJTXTYSuREoFdcT2vNmCrLa7szgJWEGXFf7E",
  "key7": "2wiKSukjJ4ACqhUS18LGeLdj49v9dQ4Ji86JTZjQU5Vdczz7tgLCq7aB3UQhPFc1s1bWsm6YzQdPZSTb75UjtRpE",
  "key8": "4P5Qw5apPPXtLaa4cY7L7RjZh5mgmyfSZFnj8jKdAB3tirUW8GHTsjAdn4HtifSxzH4yqkcCMZBusieNdYBzzHnG",
  "key9": "Wgmcg7oWWCdGKpVd62AbBMUCGUtKVTjz2htJQUc99uXSMN3CJ7FUCXqSmgLdNKUUC9y2vh6AwbrUm9yYeHoMsMV",
  "key10": "vEbUW9uKcjtcbtCngDpwQwPtD593FdjjLyzh9FmraXzsixjDn1kR4nwGyesd8Q5m7dgenGLcNPihxCwfdGsEaYq",
  "key11": "H19arieBxN8uaVbH9eVwjRfBQLeEg8ckLep8g6sfT82De7EnpGYe85dek55AXztDSFxT8om5RPfLQPT8XLGwpPL",
  "key12": "5kMybdTXSA9EFshh1R5kz5Ek1qPigYmYW7oFffU8rmVU6QRxvCMTjJfcHaCcAMg7zNoMLay48jo4zYXz487Y8VkM",
  "key13": "2ZQ2pBmCttVjywv19vZSrsH1urDwgsCCk6sjAVqFUjMXpC8hPZY2VgeDWfSEem3Ck2AQnr5bn5bbQdGTzzhHYit2",
  "key14": "a48VgjHkktC1zacXaTu1ftu2n4HL2QncLH3uwqEViXbQy2D8RjR1NkaJQydnHUuEzxV7qeLPus5ibMp4Zgs5jmE",
  "key15": "oqVSfcoTsDEUxpPwEqCeTPbqbQ3HjmFz8jAtNnJBCa5WWBQA8pKrpqcnFFVuCtdVn9uBXTGDnXDm2hKz2nt5w2X",
  "key16": "2Kh42pdCWA7bA4YCjf8yqDckCntJMjWLzqK5E21FJ2jZjnXRm7wPZJpRSmqKoY7LRHwNGjQ7AwJKGPtHgkX5HemK",
  "key17": "cDSxXJakN5Kr7Vzuyb3f3t8kMZ19RvXwJUADpknUBGZBSMVawrShXohxBHLsfbY9Xz5wx1QCyfL4yZGcxXt4v3W",
  "key18": "3TQeTJL5VqtCYuxrijvHcoDev3wWNXDwC7MYw9XWME39e3cq2uCoybpQd56p1vpHBDzdaFPw7MmfEcSZZKnVcPt8",
  "key19": "HVcQgnj31SjNqsbMPsWwYZVzJQ2vkquXSy4TyQhRNe4teRcvFCrqBhJ7hhXKjLY4sbKyaQf5DedNKGYkQ5hBmY8",
  "key20": "51X3e4mL2UWteHQ38sVtRgF2CV5VcVaXVC3ejnmYxctrfpLJszwF7c6fkdfwHU1w7ppxLf6Hd5XkvxZM1XiDaczz",
  "key21": "4vKeXgSRZkAJVw1nopLKH3vkTHxcyzqo4i4FEYaL8DeUSt7At5g7EMGdCStnB9c7vYWMGkmmNmKjbU3ySTv8twk1",
  "key22": "M7MR979Yeg2YugTdWRyUXk2gWBQN4DSud2EJH9rW36FT8rvuh2Pwtao1hrzggC5mUahAXWtmNHnegYap6YXBxhD",
  "key23": "KJFMcTVUP1UAoTfuYAkDMpPFDaCgcdQhHDfLgb5VsTxGTQN8Jd8Kv9YcdhPqa3GPPnGw2kdyxiexaywS1ZsXhhM",
  "key24": "6sCAF6LrF8YHQ4kxXEE5K6couuoWy4KUL1j2VUEFn6XUawag1LcxL1wht32yNRHF8Jzrm97sFT3mYoUny4hS3wx",
  "key25": "3f7iDjRzwxWjRtZazMQBDC83p6TxJVmwnGCNJvgguJeGU14aJgeBoyVQDA9CdiNjdQEfn7FTeJ2HrtM5XWDKZAdc",
  "key26": "2dd6JmEDKGPztk3LuYMv18RhWuvE2zye4nqV1YMcrJaK78BEtYEX4Ye6zi2TWUVBqAvPkGUztGkgxn5NYUMj4Yv8",
  "key27": "4drNuz6jps3WZXZ2psLpNmWbQ1wYmv2MAz8rYU2i1HN2agJ3xBBKJ4Au1hgKWey69nMcUjJ8A1qnLFgRGrQPRfwb",
  "key28": "4NSUQ2Weo6Pnsg5Jrusn2y54etcoJ5Ykiyv6ZrHhCMRv7626sRg5euAtWNomeDECS6eepLVf6MfZFtMNsdU36x1o",
  "key29": "GvBKf9kyzaeAWc18CiUB7T7xevGPQxou1ofeGV4HPXEWtEkXxjvNh7FPUijT3Mv63LVFCU2KqKMJKEYrMLjdRsV",
  "key30": "5oS7aesifPfryccsc2JphQF1Mxpz9TibScBWUMY9X2ZcZXwkvAwqGAoPxcLbSg9k3V1oeD7w4dX3gn4kpFRw2KSX",
  "key31": "3gFtKowYHuYDzdS3G5SrBnAGB7FSDi1txvuvL6ha8eig1zgmDDh5VUbsKm2mBWaqWa9j3bsHVXuJjTofgKA8W42p",
  "key32": "41VaizWabtpN5LvUEQCc8fhqdqAqyYsZpW5ez4WnoZZttG39kRLsbdiVjcMNmmQ8JdH1dWEPnqjBC7qgn2K5hbXb",
  "key33": "CNaCuKvkvA1D4bP446tuHVySDoJLodBUhmu7HQA4miFPE79EBqY6RDmSeutKXoLbGL3w52F4fFh9EaiYJdfckYM"
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
