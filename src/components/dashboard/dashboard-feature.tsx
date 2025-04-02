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
    "4MSM74RLEdNhVQo2r1A4FfwTM4oHAdcd7NMq6f4TNcpEeUBZb3pL5u522QSJUnBECZ4coDeQB7jLMYCwkHuZqG8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNgm9Gub5dZhntZiJjPizwQaqQNLpdJG8HGcG9JyeQQeBuXFfdX1kYRLJrVkwZPVbeLsqTAZxgE7JSRydd32jg9",
  "key1": "3PUY14YQnEKpapsL7RPTejdT3sNBiSoopH8SY8fa4FgX11LKod2D4ejuPKSFZqpcPZz36UoGxnqczy5N23nQiXiR",
  "key2": "2siNT2XwBThdS4PnKaUE6V5sFCXQD5CjgePevDJnSaugVQRTd4yxySFEvjnj57WFMy1xQAAF2FYq7RmD1FCXbxgc",
  "key3": "631x8a9EfffdBQpg6rdWGqi2Dtsfw1RKtxMye5rNhi9ijjrpoduy4TKaWHMYrkhdFaXMniZ1tLsSXKBz3p4KD4ac",
  "key4": "5Uce7bf41FWCogjofxMwLwh1Eaxga15pJyPx3bgohDdinAGdScdNqnQQHETi8dTQiQSxAgvsimc6RdTbUdaTkJaJ",
  "key5": "2hgz7svjYgzBpw2AhfhSxaPqpAMStfciB7kZC1GV4sF7L7PNtxPmaHohWqQjuxqN2ibTDUXBMa5ACjWhRZBPUjLg",
  "key6": "5tuAbpjnjLHisFpVKjBsrRXqZo4DKPUKXMDP8zYW2zh5gb7s7ijYbwXK1fuYc1u5H4ncLiopHhEuV5Wvd7MVaBVy",
  "key7": "2DjzMvdn7UZjf9FupxfVVRa9BckRM9Ka7sUpSZFEQg7ByRN9uQB1LqeqeAacbhZxDYbSD6mDQScdUf4SoW2UmxXJ",
  "key8": "3oXEaDFwJdgKCuTZowoqLBjhCdszhTQ2KPjAn1WQisQrrj3GTug8Adf33g7JB2zSmAYrAdTMVMVfKkDCuQBscxnH",
  "key9": "5vzJJDJXWh1JphAQAtGQKVpXR66dRmBQFJLFSspwPs4Yn9cvDhEkyqWpXe9jsnW3LZTLUqUYZZ2ppzht2CrxuwbJ",
  "key10": "gk5DYc1q3MFvvXp1KvtvHPdsP4pvk9L8YB45veW4t2tDCUwmgULBCquuhhhzmqiaNLuF1Eou1tEhdMDRb87ai6r",
  "key11": "2UaXZgG3Ba3kRZh7UAsCh6p2RFK7xug24cukPcCGuGHj4BQrCzY5SdAsFHdL8jNJj1Urzkb7mrTjV5ZuWD6gB79D",
  "key12": "4KVhMGM8FDCHneX1i8qVEv41b8Y1zd9ReYDnQYaKEtwbpToET3otm2tnAGsJKpYo5nr2gGvPTb8k6MDqvSFEvJGY",
  "key13": "4uqtr2LQ4exaDwxVWXAYovPakEChGKSbXPnARvQohUQbU9HM9rTgQJprog6CU2xpEDhveZuqLGErHMvnE8VviEzf",
  "key14": "24e7kmLNktVnJYMR7EMSwqTgjSWhxXL4bDBcytceiomUu4EUHmdPkZFsXwLaou9wa2qnQugEsk4A63wf4BXcwxd9",
  "key15": "5tiGKynrCmhiz4GCSjpd8n7pYVC4qqn5dNg69sh6f2MQtMB4G9k9djgigH16j9Hky5ubfoPZug8BcDu6u8hx5DnJ",
  "key16": "1FpYrXYdxSeLJN2h8UyV4ps6G9URYcPyiLS8a3RCLHXsuK5ZzJbw8kwd6kykNcJHz77P2FCFaYwHCnW7L9TQQz6",
  "key17": "2FM4BSQnz2XuZDzetQj5dTtLSYFssheemzwwYM4D5GyvMWPUDxkP5wcdT1VhrU6Gyqt8ESiBFzS9W1k4ceE1FMtv",
  "key18": "iyf2Xx3X7siwyJZQiyDS66ByLYhyUrA8cYiEt3xU5aMUXMxab3XpYmKBXZbUo2KkaKmQE7bB7iQkbXhoAH7W489",
  "key19": "44BKCxeQeXCquxDMSFXGrMvvpo8trjwUhmw1dNEUK2bxYWfU59uNoVRjxXQjkuh311CraYGP8hwdDjauh7QmJ6BY",
  "key20": "5QBdZaPC4NvDXtFfgyXtmSfMJLf65QEcYkPMDBjkCeH2MG5vGuMkAsSLyAi2n4Ezp51cvF75hT89ADeLEEj9xyVv",
  "key21": "2dfj7C6uzE3xikCwpPDjqbVTomaXEp3jA6X8QcfXonD5L1RKzvNHAwVennvAFk35F2u7qKrw4FUxXYgDQNZK2tLH",
  "key22": "3GSqYKMXvjnUbCrjK4Jfg3fvPwnLwUttaTs5ad2DZvVZ8L32XmHkxiSo8N9MM1ixpum3ho1JwUYu24DF3gMatMNS",
  "key23": "4zUe6sjqghroF9L1bLJkuQWPD5TYJ6fHDMgNExK4EonHygTvWVDTeJ19K6VjMFThPij6prkvpF9f6bnJJECRtmwq",
  "key24": "4UHmLXr5KedszneRF6rnHrYyHcAmmhney9ZUagno4p5HjozbwjRW74uUV2Q18cto66gfCCjTuK7Hay7QQ2HNnMtq",
  "key25": "4D9A4fuAWDML6D8qhyYe7VFmh5VWs4DebkiTz62wAw4fparLFS9MrQNL8kM4A7eZo4NQ6Qebk9P6n3UerCfSsuxX",
  "key26": "4SGyQQaSxYocCq4W6ZW3zkU3YDiPvD5jyYAjyCWexchnopkBr2Z9BFtSPT4H44XWVSY8v3kFPnoaGyMwxBb29LA4",
  "key27": "42nEJRNhW2UU83txvzjHWu8KGGB8cKDVDsjYVHB9LCGJcmDvEdzVw38zVB3jjowtCPRxi5sW24WU5LozVvBBzV45",
  "key28": "2kBQCBFXeBDCjgR9dCTfobrwW5NqHtYkt79QDtBChBQn2nXtJK42URjxTvA2hCJzNvG5N2J9zZAKBz4ufaKoQUxT",
  "key29": "4SggFwhuJveRb9RiS6BKT7XqNyv1fv6VaouuZJ82L4W2amAQAk5ZbAWaXvwNKtRzo4q762htS2TdRrtxrbhJguU6",
  "key30": "2C6RyHMaY2bieJzPKaWvBQk1KVJMh4H8PEwEiwxGxZ7NCcJetSsvuqN13PZKoo3UGxT11bPgCPbGAAVKczinfcVL"
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
