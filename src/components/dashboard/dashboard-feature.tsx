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
    "5osdAoxr3RyJG1mtm49W6eBquwNGj7S9Xymb2hQYJXrV2e5iyf4yPqcxzdvj1DftyMCTFMVvEDWMGD3Cknu4SoUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnjUsuh8o6WdXk2jzhPqsw4oiq4VQoaht1FZyBCLedRLTT5yBE6c5RhA3VG9V82sWqP9DDBJRiXkUYSSMEVcBPa",
  "key1": "2nGaiUnpm2rDw4Y9ehHHidEadRsZ7stVQ2MBbykfN4ev3hCUajgh642DJ8xaW7Qto3ktntR2e8Vqdw6r32aKFcpB",
  "key2": "5J8yGtRcqPsF3kJ3wbWPRdvKYFhtxs8zMya5fm7JWoE5ZJKjYGDuvorUKeKcjTwvB2M7MCJ3wY2SYzfvaqm2Vdi3",
  "key3": "odyUkZSXYndDg1USiuibpefJWhAMxnnXPbN4amzUXihbaE2E8L1evqjew156a9uL9BTW8TDYpf24nws98QyKdZC",
  "key4": "KyBux1hJm42QqQ6Yeo9HdxBsJWVGccNWgXHxTkQ6g4qXNwz1Sr4Pjf8Tje3nowLtuKjTMYQb66CYeeC4E9uvD1d",
  "key5": "3EXKWu1BJdvgKkSrHEdAT7deqMQpxSSQG1XDPW4gPNd7LHqrWP5gke37xgLfAXgTwZ2oeAygwBL5GgeCEYMHS2R3",
  "key6": "5HviXVqKMyM2dDf9Qe7FkvACtQVNeS4Sh3zpjxGgDuaUjLM5tERZvy8BiGyBfiNxetqEEx1EtxP74h41qwMUoium",
  "key7": "2dT4N9jWXaeqq42JGeKqsB4w52WvGs1xvXKRTv9vSBaG9gzqUdejq9SEZGZuJrfdCvyPmbQmk15ob4vKZKsxPDJY",
  "key8": "5AQKiviYfHyRWNHxSPsFFbm7AJjFYyHusaQd17YnL1ZfnjLX12ooeUKc3CFMZcR1yTXpqtNj2SXDQ3UKLLLhxzFA",
  "key9": "5DkhVysbhYPFQNzVdMBoCpJ4xbkQnc1ipLcFCjMPgmS6j6LFkzFZCjHJsJd5tep6NnDD2LuypLMiYiBEbsFFpgiZ",
  "key10": "2zNMrCEgFwqxwU5po4RwDmvVAVcxfZL2U8psoZT284xu9Q9ZxWZPQpDWdZUcUwDc3Xwv5onvVfxC4AYZJA3cdtXb",
  "key11": "4unaPsUCexSdpLr9nW4oonCcpEw4tAvbnQrQGnTAdJxorbaJmvdsFJZ5ua3aPdXwG1bnMieUkmJmN3KDXBpWbLK6",
  "key12": "4AnHMX6CuRFvzdxXDGhYM4J1T7bZwaWWkH5KaMsP84xmonvny25SGTQahLFpykKyiHa7hXkbChMCQr4Zwj5sRcSZ",
  "key13": "5vfCKaZxxRVLotjHvjcQhhKcVWfRAc3KYADiC2LajfDKcKoVj1RHPujiA9TTqgUPDoq1yGWvH1J4sdSN1xgQW5zy",
  "key14": "3KTMHBTbY314iJNratJFLNFXgyWttHMYm98fUspfG4AcxEvm3bwakntP4uaKFXerjSkfzCQJwxrzzBVinTLJjHzK",
  "key15": "2BtpgajmwW6KKuYXSUpEt9VRpAjhG7k2YVWMj1LXDGxJdtSoCQuKXMaEvDrBtEBWHgQ1MWRAqHmvX8ZRiiTj4pCG",
  "key16": "3F8ogZuogvFX9na8uDLkgDjMrTwpCi2aSUihVhmqEKkiP1Dz1GDFfdzN7gB8Es1KZ3guFZwPVf3v1HFx3aFQwpU4",
  "key17": "PQpGXdEaBWZ9EHU65yZ44VNXmXpW8E27npzDi6A8SfJrnVqM4RQbVsKkJmfTHSKxqZHhcm73Rh6yyCfaDGC2b4G",
  "key18": "n3S6Dg1bzoBz2fkkhb15EKVuBKxkreQMnBtNVmVzA1p19CPNQPtvWdjJpZax9uW4nqTsUtdC547XZUj75w6eouN",
  "key19": "4xtdsuRbxnEzscXuRXqf9oQ8NEjHuSys6swVKQUp5wjJJQA6vLDEerxN3mY1STcmrFyWrb7FENyW4rMqFSfiPiqq",
  "key20": "4BnR7K63jbfN1dkG6n9q4ghTYpJJJQkaFHo6zyrURpLsRFYwwjBy2MrRJcGydF1CGXxZciXjkkQnykmjQzRUYxih",
  "key21": "3Mizcbk75KzUpVvSALCGpQGZyc8htHkR4RNzcepMQopaVyKu7tFkN1m36yV8eDkBnmT3pCeYRNMowAJhfeHfmJyk",
  "key22": "2jdc3LLsRQyESWJypQUGxwr9apXpHdCgdN1EsquAdYzdLjP39F3A3PhDwZebnNGqqJmeHNoLpcTE6J68EGMsnBWk",
  "key23": "3ye63teQ9aLpLXTVsr2ymQrY2EXT7fQWqxTMprqMCqwQuqaJfgtmPp3Jm9Rik4TJe2itkYio3Y4GRgwziNNpH9k3",
  "key24": "3M9fALSLJxqMRnDKjZfLsAE6xXWckZcATN4HER24XTo823kyv7RrQ9WVGqiMeTWQfe1fQQJJGAv8uwBNu2dxDxuu",
  "key25": "517eQFXpmCPKYbF69Po3LCzTDs2LEu1NfQjj1vzSjYV6HCQq5CBXpaTxiZsav32iUo5AZqLqS1o4A9Qct7ZUfoXa",
  "key26": "4ZdtRBPy1sdN52W6fJNjECqs3HBYhr9enqbwZZNHhkFPimk3RxaaYgCBwz2LRaz1CXrUAmBGEpeiWrDiWtUrzmSZ",
  "key27": "4n97PVjzTHF83fo4EDqN7D9kSdFCmUdyANvC1nYbXG9tZfTgTbrb89B7AGQhmA5dnVbAJe7Tan9mniRvkk3UoAf9",
  "key28": "2aUthhVAf2ULNGxDQav9ovLvzcmJLmiaMYVdZoTUYEBFM9hxFHQsHJYEX8tsh28xMDrN1fNv5pe4b6Nc8VC6YzRu",
  "key29": "23vhdZXf5E2sbaQamQ6hA3qNhmh872BSG5sbNP31o144UUkS2SyfPd9m7cWVDcVrGHZdACJivGRkkfqxH9MeLARz",
  "key30": "2ABWfg6EVsDToGdMsjreHnyzPsL7MfX9SB6emU2YELVFQxKvuLnktC9qoS8fufnb8gnxhBfBhHbQSoJ7kfyWCpX1",
  "key31": "2XetAwF3uc67oMn3dSxes9Q4MuKxHMvaSocATiDEN77t6P39miJiSeHrTXyUxiaESKChs7U7VC72oQroZvDfHfxY",
  "key32": "5hrqH2MjrLZ6uwUDCHAQ2PhehBmZUQeZtE1BSQqhRUskKV5zir3q3Zjv1FsEhiq57UQZwyom385pGreAkfAaB7Wi",
  "key33": "4C84sy5s5yRxNUzRAixUq6xparQ44UgxiDUjfb71TkMcDfxz552BeKQFx9N6yqoohXuFRvKbJXCKdLnLRgRsCFZ6",
  "key34": "2LzbNtr9TFomtNnuotun3oPmq1Det1hYb6DeBZiP5zag6n18FTk5wcSidRfVwB13wcJXh4xoBr1etGg1sFYmCj4C",
  "key35": "3xrjAXvfNLqEHwnnHJMBog9LJ6KehgaU5V4DKYP4L8NgjW3mDQw3EFkCxTNL1wMAtmTu2RmNzkEMzYz1Zh4GYxRz",
  "key36": "3escoYD1Mug5RGGVGdxJ8y4ZE5NSCg7mX3UPjhaKcT2xvGtW6JqUad7Lv9g5sQyvxd2fkRNp8FHE9fwRB7jhnGGf"
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
