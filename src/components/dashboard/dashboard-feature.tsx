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
    "3A3nrfaR8udV6Lrgw69pbp7chFBSYgsyimd6CgDPB8wThovMzbPc1HE1s3RmU6qEVLJ7d3ZCqcBLG1RoJeZyzwoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFt8FiQ12MKa3c3SUu6o8xoozEyxCEFoPhpDY1kVSt1ee2uP57q5UrBmDwg3CPJYWGdeFPaiDVoZeqo22EEzwW6",
  "key1": "d8GmZYW3gmZK5HjFCHLo4awwP5QMqnZ4pTHtirCNVJ6mgsi6g3PYUM1SuD6axKTEVDzhLhhdoT8Vm8QYwunprhz",
  "key2": "5QhsppJwvc43f7p6Q6Erskb1YkpYGihtP97eZGz6HTygC2hic4wQnosRX9Xo7hQrQiVe4roxokEDt8GRfYEL51L8",
  "key3": "4BLZzAzjBYKAk2cbVYbXcgYRkVqwUrqk1MchL7kMDye95da6CW89Pn6mfXBj39eXuHNMdTV9ZGzerZRq4g82NDor",
  "key4": "3sSzYc8XdJmfHzNFRPqAYpuQGWMuMbvkBWkVSXnAHEhKxsnmr157RtiRpmf3aPW1cjXhSnkaQDierV2NPoiuVu2p",
  "key5": "s9VF8K4gSGy7r5yPomZm3xq7kTBtfhujTvXv4mvMJfR52HadPS3r9jDRNfQevLfkhTS8nXd5ZkWuXcgtdqSv5Hg",
  "key6": "659cEzJe3nbDUSrc548qbFK6LUvVZ3X7bepbGGd4K1BDiDugxvMrPLByhvwEwEUjhCs3vYBTbDkDXvNJVCrvwuHA",
  "key7": "62EQAaSS6F3EujupusEy1PwTToxivdZTT6CMWRDnei8Mz2VEdjYavnepmk9zQryJP6U5PSxYT3BQYp4zY4xaD9bk",
  "key8": "2usd5UcTb7sxVP13wn58GzujYqtQjghhQQi4sL6jAxZzb33rGjFV5Uy7v8UnS4XbX1ABd1fGGg9o98Pdw2DdNGjm",
  "key9": "639huVfH1mvx5a6AzHHALrvh12zmaJUrVt73KecBqrtH8qgt9yLuNzcpaAEjaouxkmrBTWfk6P9p8Kniq77pJ4v4",
  "key10": "4wfnW7iq3aFTNPjAFYGFN1rHQAXx5htABmmwhUdDzBZV57uCNdN2W7e1gnuARNuQoLQBcQ48kwaLWEiCibEi41K8",
  "key11": "2S3aSH1w6xwd7yc8QsUeJovZqnHyvN9NAZTn7jqcK1EByd2dnzkd8VVd4H9qWBVqLMS5B1wa3CahYmuXC5GZAKpt",
  "key12": "3CQHogvg14SuW4Fv7kH66CLih5ySKtFuak3UXtwUt2ssmCAL3HuwHiRBeRSjnh2G3digQrnFXrta3Z9CtUifVZLB",
  "key13": "4ty55fQmj1afKWpPPAiLP1vXJBs1zU5jaipgYxephvmo8GLqnjKgfs783c4Yi4gnyYTWERn1K3PTtybiuq5YjQXC",
  "key14": "5f7cjPiFq4FMqRhh1jJMiJssSKSRekPKwWAKmQmEw8k1iL4WEjqJ3J7oBZUPn4qzkrTuzqT2dY7Xa4cwKZ6hrQKp",
  "key15": "4keQeg7N1KGWabnic5YTy2aXHS2pWsaS1YE4P2PFxVV2hMrNASvsw1Ze5hnZ2qh8j99kpeeLqAHcJYmJpN7F1Lr4",
  "key16": "3G5NsowuzuUtwWPk2QXWro5MFEP6678WMivU5CpprvoP2gDvSaqv5aNfsHUDYcYcDTfzaXjT61VPgJUYgbJraMr5",
  "key17": "3f6ecEWuqUfVzQftHo52rds4yWH154LfDaApz9vzEUjqbJPhfvEAsheUsMNk4pP3b5qnC6ei4StDnDW1CXghEbGa",
  "key18": "2ny8DTE8q66zmJMPmWHfRa1sT3vSkAKd5JNHe3NCSojBeG1LFj8QLeQRwibQpmRtpPRz7oKo3DNSsjWa5PpJmszp",
  "key19": "2WAS33A9F9FaeNHQ1udjJnfNw4K3yn5FAESQ1oHV3cUXnsG99QpzSDiRuj7CzfTBSoMo9iPzSAR6ukyCm1efxHrf",
  "key20": "5Tevg4xcBF21zSP3YnGKacG12LymVauTZb8j8iBXFHq6uESUZymVrHGAWi8hjcvkR9jdQqdziEbMs5mytKdkSZr1",
  "key21": "egCihZxPSqyEhLZq3ijrUyE98vfDr6kkT4mkRmPcGHRsRKKWbPkbqYRaWSGFUoUjp9vCQcjfXbbTtCqibJKezE9",
  "key22": "2RnL7ecSKXU7rNT9GJjCeBtFhYUJ7TNtLKA4Un1BHBfL4vSBPWdVduYA1Sse5Wk1X6ShhdaHuFAXBHpcGqro3qW",
  "key23": "2shSBjY6RGRVdeyotTXbcwf29RMP9XfpwLQKjagbMvVG9TC8bRqFdC6fncVPwNB5dm4u88HMkPYxAgHXPveDqYUX",
  "key24": "5covp7GbZQcQ91U6SyjXHwgYYKEp8fYxYEoYk5Ff2Whi7btFqdSxNDCRc55kiNE1hxKtfUjUu7hPL17LSqkKaSFJ",
  "key25": "2y9wN58wJGzNUxJt35nchq7GwcmZAEQoc3mB4dASF3myUiFK6BDRJZ4sjVbQxAYn6YyxeCLkSpMMReJbbokfyu7U",
  "key26": "2fsG7cPiMeiwfDBApFuuTZqrZrWA9xdysL78DNvSoCBWN6kNcDvo47wv9y3rgcDRwtctmNybHLduT21K1rfZSUoq",
  "key27": "3e7iK5X9FZ3TEVfbgWa9FSpLp6WxEDJGfg5NdPuTHXC7HcsHx398uUAHzuotvStQdAnVFqwDr8bNmUCdN4dTd7gT",
  "key28": "RXzizSRuySiGsjJ3ikCfmaZmq5XDDmL9mdtNqZeYbKEcybfCK446TWYpKJDDHEa1VPKXeEaKS3Ton4QCHuH6tkh",
  "key29": "2jWFiDXMqhbJx3ApcgvxwnRnzqYyQyruFeYgamnwu8ymwqHpw2QUmExkQCRy4j3Af5hohYt6Wo56tH2KvHscNLBM",
  "key30": "4G3NAZak9VauFtHsFr7Y6vEdBDgJfSNRYHRiooMVnNiQrJ8TJxk8MgrFNg295DLCAGPKha2QSthxkXgn1f52mjwC",
  "key31": "4mpThaJsG9aB9DJ1iyzG2FQCW5DQH9QrRaE8PZ9ogSdTcRRGF1Cf5idcbdgSDYH1WT2nCteXgHCBeLGEpEnn2vM",
  "key32": "4CPjMzrCmFun1PhWjBX1YTZjpayCS12EQjBULq2FJPQnkDdPqGX6A8dtReDZ6e4q5PX6PABPr54XftLzdV8mc9u1",
  "key33": "UMT6HdGtJBTZKbTpVTiRUWgvoKx2zxqdHkD5Y2A3bnKDB8eZNw57oHK4qHo3rpDrT4H1HC8VXJUUf2pLvXtFPH1"
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
