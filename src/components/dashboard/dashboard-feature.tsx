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
    "2n3nruDGP1h6zYaKHnqDBPxV4o9KWFKvwyzGgrbXnaBk8SinVtwTywXiBqBuFbTaZ4dyDJTus6RrLkiwD4RwNmEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSptBWruCKrvTj14by2ApZW2rqs3YTC4vppouBSBuo9ydb11vReJ7tf8pe3RaCUNs1KWXU4QBNfymRpnLzRpPkp",
  "key1": "twPVQ5ULeWdV4gMHdw7EKkZMGdAgR4Sn8E7whZMMTNVsvGppNYy6e92F1dSqK4pbuGSfdujWxqTHj2G65rwLqGu",
  "key2": "2PWkc2jCfRmR8jNkAmJ2F1J9ioS7g1cY3GsxKkXSPbXcK2USTc1sdmbfjPVufLBJ4yiGeMsXzmb6z3PYc4z79eGJ",
  "key3": "5a3xfnXeFHELmA1GGi6TgosK3abFkdWH4pxoNZHTBTCyM4A4771oNQ9htNGZLw8DCTWLxgXwxCGCmDp49c235irD",
  "key4": "2tWNTTcgrKK49adN597Pr93bR9KhgFqWENY34rsBR7fEtaHm8hS8MR1WPrEQ4c28QcQHfutqWYdw7np9dYDpUatE",
  "key5": "5XTKBTvkbzDxzbS1o2YNTMxYfivC1635vDsXdC8KDN5Q6KSZc1EB1seKF4ZQa4gLysiu9pDU4rpezEfg5JE3SAqy",
  "key6": "284MnrxRqWCi7cqpU12ZAyy9QDV3hHmktJ3kCyUipAATREAW7vZx8obLRGoTxkpeAbLEuVYvk8uKqQyFZS1qJRgt",
  "key7": "3aE46VXBhMX2SnCZawMF2AokUALZRiiZsaEA3RAvFti5FojDKSQdwbv4kn53PY9hpTeYPHYHkjo3PPogeXsuEeXf",
  "key8": "qb5CAQudzQMVVhQg91Gv6Bk1Fz8VfT31YD9vk1Wv7BwCQD8yhik1bb2kiScLF3fLYrpKaLWEnsJw1fPYZnQXRJ8",
  "key9": "3fARWBig4hbPszLSR3tBovyPnCbwMGonRctajzBaQTt3RPsDaLcjY1WdpBVxQkEPsWkHQxGq3fW9ez9LjGdCkUAM",
  "key10": "2NtkxJc84M52gTdu5unGYffKtBbqzKGvEc8tt5sz1DZWXLvBRP5UhYNM7wxkrypaDMrznhFqDUt1fF2GNRTMpRvV",
  "key11": "2XU1G8mvV7ieCx2LdsLiJkz8yiYoJDThZwhvps2FTi92hAbnLJDHwfBeJfmCxnp6ktjaqceE1kfiocBK5jcGmWgy",
  "key12": "hfMpoKRmcPf8YA4caVgU5EZintCKCTMGYGDC4RCHrqjtADmDwLcCUhpvT36pTTGyt5EFwkQ891VQLJf1CrGRyGC",
  "key13": "3Puts5YsJqDpEtSoar8JsvGRfn6oDwpYPHjh8qUmCexXA3Rm12hF1QrJgPjughtdjjAApxdFyeZq1FgMXGFWHW4G",
  "key14": "2AkXciBAcSXYdEP3CkMCCKZD4NRZrKnFRDPMNG9Fwg2h4qw8uzmkQRTCPDSTD9GRx8eJvyco7WQyDY3G3XqYVbUh",
  "key15": "6yHsZUroG8CnDzTFYrm6ZTzh8527WQxkJ1TGQ2rTQvT8zkg5GZK1TXMDEKUXmf5GCcT2G3F7CoiWy8fJUYTSmqi",
  "key16": "2QMjxQ3GgVYSSnRXixuj6oyuuVahdSY3uPKUxjA4jngTew3bLzLwEXxtpYU5XYK3mbjqjZyhREbucvopZ7pJ7cj7",
  "key17": "3etbusfU4XNmT5irs4Cv5JLX4RPSvue1tWkqLGWZw63RxzDZdu7CaFmP7g7QvMKXj7UXv6PwwozobbzTLHpuBQKs",
  "key18": "5mrfuX9ytLk6m5EjWn6tJL6Htn45xVHwgMPfshAvhY8zKQ5TA4BZUWTRKqVooWHQ4ma1RNXTRiZMiV547DTx2woP",
  "key19": "4zWwsBFSceC8b2qwG3S31LBq6pUEJ9eho2wAGsLRPe3EbxEmz16jwuX1a27m8ckJFLNaL9PRuQDXJeMYKgTBadX8",
  "key20": "3DSHfCBjKsSuuTK8YjPsMTmG4dBuNdiN3KkZiJpqWzemWL4y1pt9eFctiD7EtNdf9a74Tzr5x5D5Mgm8iGUjyp1B",
  "key21": "Enhv7VGqA4difAoNn5hNuhcxMagsuoVjHExMShfmtkz1EpL1MyFrxs2bm2DLDsZrauwTG9YrgAdqcVmz2NqakKQ",
  "key22": "2tWsGEhwq3RqJ8kWj4ZUR38x6d6mhPY6Grrg96Gb2iiJQsGLJRgHUZ3YLMkjmGdn77zUjcTF41vaWFimBtzKRkPz",
  "key23": "5jYnExaxgVmHaU5wLmGE8tfdE4kNyef92vXmkMkpTDqUELGijxDkm2K8n9npVjTFEppJhqYev7gJCK1KjK2yYZ7P",
  "key24": "4Af2HcktFRHX75Gb7d1bBFNwyx43pBYR61eBevL3gz3HeLmghYGJuvxDxY4rHPtTD2XynTcXbjnkfpqYKiCPVDBo",
  "key25": "3RH9WE2GdFt2TRBxBog4fVp8WZ2M2C7trs8v667ibBQAaRCniESiAR5miV4D3Wk78GN3TunJba4Ckh7RGMm26juU",
  "key26": "4ivH3dTCDnUkNnn8xyqbyBopRhNmrJXd8XfUf5VDhzWn1UVyn95BsXqR85o95dWzN4Y6sUUaYYeGEftL4B5GgaQ7",
  "key27": "5eNm96YH8CFqhEKsCoAZTJa25w7tjWs5gyCp6CM4FgHNZcCgwRzryQEVTrMkAR2nKeMHup1dyN7yeVeUNVq5aHSW",
  "key28": "5ue9PSMcXUzfn4GjWTXx4J4cFeisbBTkE1LRm1aFQzMc7anpT877ppVcdD2u37pqR53ggifL4SRmEQxgjaidNJT",
  "key29": "28c4KTo8UCBiK8WpwiUkdybtppxS1Beb8GbTBP7Ntg1Sjx3nyUbWSmxvB4PeFzc3NEC916oQK6geEc8aVrPLFinu",
  "key30": "YZJWjJsMETkJSS6WL9N6FCwowCBqYYNCognJoBrr9eFNayNQVtwXCz3MkYd2QFw8trPUEie8eZ2qUoj76cx3x7y"
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
