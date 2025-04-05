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
    "32aQXcPt7oveKK4WtjbRpiqwvV6tn6TpVMEqjjNynMX7Ms8Ju1mzBt1RX3yuoqqLNEtquf2DokyHjgUS4LmH4bKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmFzLsFsa9hu3tKLeRiaNbZiewnpZz738qxYsDhmM5dUAzfjECYN7YC95L15eH9Ti2NDAEhAUZVHv9EGiq2FtJa",
  "key1": "5sZef12eqwXVPgpPGHXUyUMPCHU5BS9tciN2uRDbVkonLPi9fNSj3qs1k1tPFDAqDrr2hhFs9HbrepU79szE6kGd",
  "key2": "39uhZZrpkJ8U3aozciFb4DzQKSMNyZnfjEbPdsUUDTbvNrHeh7KG3v9jTaZjynUkzy7jUwprPQZtdpVrm95uE5dJ",
  "key3": "2rZ23jVt53r3keexv1YUrd9u2ZcFrwtfSBa1dmy42UD8nbT3drkMqkqiimPfYNWByq3TBEvncrKLfRGyCHC5p6WA",
  "key4": "556BU7Vxre24PkmAyqYV3XxqMA2f9QwoiLX6tFQngydQdGv2Ar66jDCG8MQuf7MV1FbNooeW9PEwjyrTgUg94TEN",
  "key5": "3WMuEfGMYogAnBqmnSAA6GhJfB5XYDr8L87RCLJ4UdZTzVsr2dg8LHodgrAb4cv7BtJRdZKfJZXY6Qz93w7mtFFD",
  "key6": "5j9eAiqHa635iaznVHth1TZpiJ2yjiuC7Bs75CxWxZ1bHfWPtaHUoRYx4FB5DPtzUrPGLP3vBEXiAvijyhzgNYza",
  "key7": "4EZUuCuT6PKz1PKioPhnzgHj7Se7UnpZvar5owsw2xUAXLpfxt13GMc3Epv3g18zgk9CDYWXaahzcpmFMi9WMfh6",
  "key8": "2mTBSgepmjRySjAp5UVKMUhBy5dCG5gtat2dmJUgUWMgXJ26gaXFZYNJ6HoU7KYAM8j1CGKgbkrPQ3wsDsPvFXwF",
  "key9": "47T8RYaoFsUbHLrTxwV3jMA41vUXArrcw8y2PHh41XPNpwoDjR7JDoURUiGE2PHsYb4ip6G1sq1bvznVruXxezuY",
  "key10": "4ka2YyLgnYMJ4BgBrXG63cQi7cFaLBsQWKhuPpzX4RFu3oJaD6viUDdqHYMNsKKtsC7RDndv5rnnpVfNAfNMDYMX",
  "key11": "32Sn1GkokKE5vKwFGnccxfGeC6DVKnXPzwVCrtiPvV8x5xjXjDzGD13v3zb8EikV8bV4kjXGCCFGNKvJAEEaRRHC",
  "key12": "3hC7yf5j6tkJR8iieY1hC2vbQqdHRteVXLFSk7MJKomL4bJ91Z3KG7JL7JDPsYujNf5DwGtrYFwPdGXejYocGrkU",
  "key13": "2KdCT6tk4vvFs1mDk4nKpYFBBWweBrRYcazM2zBLp9iGXzM37NZ2rX65pB9HnHujeh9zBAAdBR9df42zHkoT1FGP",
  "key14": "5jZRzxL8JAZy3k8BVYAQYYsUD18Fd17pEUx9mNbSx38mzTYbp6Y18N4YPjeEHcxErA5Aegg9Qc4pmrsSYFnfZzUj",
  "key15": "2ajUPp93yJqqzeieiPUYhYmSt7DMnyxmRtg91Vs6n3ZVGnhYp4prQD2VbsSfNaJDnV1uKbGo62DXJr29Vmuu44nN",
  "key16": "39ASytW8hkGDCfq3HtojHjeqDKh6LGkmRHYAUkC8YQ6EpGXGCUNQkyAnWyDWbcQHhsXoCyhK4mxfQEjmHdFFrfhN",
  "key17": "414XUc4hhhQJ3ahFD3FG7FpMc44Ju61P2yLzXcVMxJ14rER4u4kfYPmZ4ebaiZUvwBm49g7D3mZ1aPFiHoFB21cU",
  "key18": "3TgbzyVxWwhKxuj1Eh5D6NFHdoxjypTgU3vRzok9idTTa8UUuwGpEYihhqTdaSUmeSCZQHcyGXEKWfArhkjuYGwx",
  "key19": "2t3T62hRwSH3s2ai3yTT42yf7oM3ZPwuapzjbuSi5GsRaChHgWMuKfLoXEwuYRqWQMne88sjoRcRb4EZR6TH2oXn",
  "key20": "4kdRJ24P4yeihae3CGT8RopxY8q2vJXKSdzwuzun9qn6WVQoxi6FdUdoC2WrdJB1aZMVa7bXLrPB2mffqE7xbmUY",
  "key21": "4t74NWCHo31WLfnPeGouHh9YgToYHfWyce8tsETCLmrpCqFtxoQVj6m8YEPWNwMiLnrtKfwFak4P1uUs98K374df",
  "key22": "oUtexUqkthF64Faqq7zp8jpoKavGgRmPo216gEkD3dd1GAwvY9kzVn8x4mzLGPXw6xmzwCWkCcQph1JKrBw9GPx",
  "key23": "4vSne7sFPGa5jW1RXKoqHDSAhpv1DGwLwwGgBji9a3Hu9PDm69kpqBQCgeHWJXo9UE6hMvGkMki7n6FQowdtjYhr",
  "key24": "3T97ezxtE43ihttAk9DFXxYfahon67JvaWDdNa71g2QUAYm94ig3vhLxpWrUEJ8qqe8R7XQ7m1YBGMF1zj7aVSWM",
  "key25": "huSJRb1CuLVqQoqo9rysP8Pn9WLg2HUy5nqsw6NZugXyWsRoNQpCg6C4J1vg26L2jmxYjSpRxyNEh7WS9faEcC2",
  "key26": "3AkGwPZR5S3xXPRzT2AdFR84oUkHw4PoS7bxNg16JYmzPoDZNa93H5A5zB7o9MZGVR1bBWfPTqpEwh1Q1EuQjuc3",
  "key27": "45pwAsnUWLHBHxdbp3S99hyEWouKhaSvBtZUva9vTLzEFZoSspcggj1Mh5onU489jtk8dhU1ZstjagZWBT96qSSb",
  "key28": "4rfY95NvtY4NjRYVRPDvrr8TEDU5VCKpV2osTZju8ReFAZYA6xZLAGHNGdu3VdidfvMSyXoDjJWeAfyrnaAJjQK7"
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
