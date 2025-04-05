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
    "2yrBVdgHrM92M483ca2BJBNRNHr8PZQKZVRg6gFpMGqJwQt46Qu5tv3PCf1aRwVW1s3tmF8harScJTC3nrgs2TxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561JemHJ9D7Mw2q8VkYVrTcMQTGyy4eH4DgB1N3Sc1wYYhSKnkjZdycJjbE2KyC28saLHpzAq4wHUA8SvCTa8e9i",
  "key1": "2FVx1XTz7bZyyHWJP9RyF6dFko35yiPgNp6uwhpBk5JQ5a9bxx3UJYmeGRJjFc8bgnobo3wjrT6WpENjAQ4kWrvd",
  "key2": "3yR14cK7oDfHKbpZZGK9sbSET3BBQ7r6YrXq4EL3sNtn5N8dZTrMcgjZxSe8U2L4sE7WMkd9ywVaLgtd6yRSdv3w",
  "key3": "3Xx94m8Ht3gv6McjmfgRLq3cjGJbmEPJb3WNSdB5iPJSgiqxAPqwjoJNH1U78LDjTrG1yUrdx7WCdabBAUwPoKY2",
  "key4": "im3RSkVYr4igzdgS9eeJ1b6XSTJuRWvU4s5YAu7L7446W4fDwbuQRabNk79tYnRofkw9aWaiDABBbfHRRaKNLee",
  "key5": "2zyKus8d7put4GANB7MdGSvnsmBzGhDXvsdVU9Brv69Sjo7hSuos3dRmL5EPxJdbZY64KsXgfuNtFhinUgaSUKkY",
  "key6": "4Umuwa9Xbc8gsSrrszBTLb2J2Gw1RjMNd5YWwwrSy1h1ohz7MDsqLLqYGxpnY6YbG9PM77qwxt3Nu8qujtrVpN3Z",
  "key7": "2XsSHajxM73a3BbDg26hnVh2PcNH1RbLgibe7RKiQLpdQCEaUHzhAFE3Z9p1XFV8f4Uv1creE24EULPcTitQzUf4",
  "key8": "5W28ifdY5w8JReANqwzkEDqLQyVx1e38UuPcb5tKt1ZiExhYjBCiNwkK4VvEwUBVeLxA1E54QRU9vhS9JCmtnHj8",
  "key9": "3yG63dvoBiCJ9GAZKcizfdZmpSqBPaAXtzB96Z7r8R9sMT1rPhnRd7rmEKRRiQM8yk9umZg5yVZkwdH6xvoCA8uo",
  "key10": "3qKz62saz9hzc9fvQJn5ttuGzxDDAmkasCG3r5zpaJ8R1yp2bjQKjCkEUN4NbnVsXNmHGPCkiu3yyzo5CgavsWas",
  "key11": "4ZBeGAQx1XDMwZF9yLUi7W82gXmVFRxUy9CodAF9AAhtVGHKiPDvkvqdB5kdwszPx7K7KNigTiAvMkjjRgDRjxiK",
  "key12": "2FGDgDgDdts9U47yfGmAdMro6YKESu3HjXRfhtzR1Q7pm6QhBhKyrs7ZvNNvkyK8Tf1uWkvdBdWVqtEbT4tmP8Bn",
  "key13": "2pDZXeTNfiRzP7HeFRK5YstVpzbZ4joQmuaoHB7qTfJrpvtNWU5ZBDwgpzqiZbpiDMqY8fpubKx7WiuabyD5nH9M",
  "key14": "32RcAmV9B6MBwFkkF3j219vcYU3H8d6NxwCMcZZruwds6FA4LHetVboG1FVjRuUifPmZSAMaiH8kR662UrdJ5MWs",
  "key15": "4hMqk9qqeFx8V6HNAW7zuGXgASpwWaauGembJT3SjrQtVQJZ1NeXVDhi8yhSWgTvuWsRhM3Y5XEJixs7FhkvRk3Z",
  "key16": "EdmhoFB6LkhotAFZiubnTF7FMLhkLkB9yVBZquc2YNmFyZSc4SXejiBd7BcgP4EASEGEuckkoFWZsmdXsLp5qSh",
  "key17": "35rmUab7GGJEaTM1MjReGmys1sXSMx5nchKEk7tKBiCnPTQgsHkyWC5yBysnox5SNZyeKkpaouP3duMVCa9zzeCy",
  "key18": "3kFvv7zKFzTQHNCVtM161R9ncytCYgTABxjnmvutLPSKRgvqkDBAAHUY8YK89m1gEfaJ1b9URQL6deBGE6c7wiQK",
  "key19": "TVtmVmi1p6sgr3jM9uspgKbc8NtH3mPF5GAb1he4QuvFi12FNfVWYij5MqF4KqnAqCpxTJjaYmn7rB5JJgnkszi",
  "key20": "3ukeSSKdzY1vqQiGwyk6GMTimfdnDQY8iZaXiMFefGCH5dwP4bJrjqVicidQv4DWaadEHdSuiKGpi49u41SjykQ3",
  "key21": "3a1kuryGHWV5n5iK2uoafx6u4BUwNu68RbAw9PVSjPJRow7HDHL926WYXQ7Htb3bRiZaqKETmHb4aVqvV6H3dH2x",
  "key22": "3W2tDyFP9K8HPNvyEVvry7dSM88ujVtCxtJd2NTsCEmBBJDTfmZNQL3T3smmToKGcDndS7cqdoMFjNwSEbzqydCo",
  "key23": "4Mvx3UzLK5mwKcnE2btUmps2V7TCTrE7EYPKjfJ8vEb7HM9VpqkExnMweqGLs4V7atVsXgmk39fkKfTLaPRB1Pvh",
  "key24": "BfGznacSji1ExJ6NjShBoDqEvQqPNw5ef7wVHBEq2ey6w9GMKwvDkiqjVeBoTJhhLaKWh7aZCaipeuWu6iToFg4",
  "key25": "44rL4ioYRVHQS7XHJ3xgCwrotF5VqMBXQGRhDGnkaUGnpZNw3YLEkq1nHR1dLryFHC8iePgFHon15wpR6o1CYDYj",
  "key26": "3P5WZPcF1a7f4iwkJjjsz5MZ546tuemabvhkuGEoTo67X6wrh9Srrwu7FPpkbuqmpQuUFEcdsb91YXvA5SemvGZ7",
  "key27": "2aX2NivbMC8YhLdtoRsNKtoCyVakNRJypa4WVFZY45eHZJspsgfyy2sH53f3m3zWWXmqRuQf2MN5raeusEQbbWbE",
  "key28": "3JWdT9LYtL1bo5qW54h85rEJ7WwHhiMrUN9A8Wpzbv6zWEQnrCYX3Qvkg1XRTZEPRsDyLAzsrM4YUV7JKwP5p1Cy",
  "key29": "5fpXF5fFdXj4FwVjtgXQyxPRMpDcKUyb1eCg5pZ2k2F6KNaWMvKSLjZmsFXuPU1aCP1EDN53W2vCsgjvdkXhWcWv",
  "key30": "2pdQefqo9WQgaoQmCeDPtQBKYooQDVNkBuFiLTT4NeZsiEqs8d36rNe96aX23a5QovYpA9s1udWRscPxjPqg2aHs"
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
