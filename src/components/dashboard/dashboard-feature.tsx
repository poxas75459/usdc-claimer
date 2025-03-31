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
    "2yoB8tcgS1AYbcNFgv1YTe7uWfEumTDcThCkYg4ajvXnf4uutTuscZArYDVDvkxFaNH4AeyZVREUYAtegQAYr3iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGYT7gtHxRfKSf8Ym5tau5toWSQEusrHLzRQuCrtSBTkyPL46YAxfeVodsuJ5qUARSFbuG3fgsmxLDVBpMJuE2Q",
  "key1": "j5vPpaxBU4M8vhA1MGedq2GzDrcCcwunVHWJm1NgZmqGS6ypU4iZsmzrbDVP3ANYJmfdwqyKzoBtrYt3NoLLjZC",
  "key2": "4rJJ8NmM7Bb93oTxGHBdyVEYkbWimGNWuMfjE8bxAA1ut9YFp2yQCuJwXmJQGPG6hjRX4J2CeNmCZ9HnSxDW4Cht",
  "key3": "4LQ2oprkZgP65PmAUMJ9KAQgvxEPUYKcLBp6FF9FMoS6utZdBQix6has9gu2pG5AWgHTaAjHyH5yPgfqyKe4fBrK",
  "key4": "4dFgNjWfBJKZ9978jivkBpGsV6Y6PUdUvaFL2QsZjvaXXHvtPH42tJe4mXtk2prFni1dMGNsxcQ5VNBoHc8szYtr",
  "key5": "63ZxXK9d5dbQ2wsaBkRsYukzCjydg23jH1GdS9dwU3sY3ZTCVce6xpqfPjq1rR1xMkAVcYPhMXGmQhZdobNUQEZD",
  "key6": "45jdU2zeT3yH5VMcG8hwv6qtx3pLThhU7JXXh2vyGf87b6XA61HWPRUsqraxDAk956kLo7JpxRC5TqCuQdTPV7we",
  "key7": "2J9NzB6eSctiWY6zGfDnFxG2PRkDJXQzp3LV3PZyPmW91yxJVEk4qYbiSiEHBsy2Jq3jrn6Pxv3zUyFcHjVan3BP",
  "key8": "54T19CdDHYTXgH9Fu85yq34Vk7osruXw42xPLHmPU4dgJ9QVN6t5HsjYhrF6AXBidGEZjWaek4PffYHqe6FnDmDU",
  "key9": "4Sf4KEaxq7W9bL65weRvqP2JvVpJZJP9jfpYA6GPu4NUH83Zx6dgisyecA4PRnzn6B95UC8pnJVLv1WtrpGLGBet",
  "key10": "4ZfMrYVZaCSyQUaj7ErL93YZC73c2x67CBDjZN8nfuZMc2GexPjYdnEizfQCkMKah1r124R3qryX3oXa77rV9vh1",
  "key11": "5zK1qt9Tuxg3nPNPLP8JGcGo7Q2odbTPN3W1p2KWf5B44oeBCxkVzmKiQn7Ugpk6aPFAsJwh4cEKr57rS4Sd3Lx5",
  "key12": "4VRe7pWyv6sf2JXhvHjtNrHBB9SvwukN4GttA1Y7ghcd1NxaXZm4h66NnDDeDEP4rWtwDeB2BwZ9d98AScnyD1Uc",
  "key13": "5ZUQZkDUPi8vVtMNR2vCpVFuRQFswkuLU8CTcNP3XnSLtETZXscw2VFB8x35nbHcr4QZMyM1DpPH4A6Wn4DSAmKx",
  "key14": "3DAvUsNvaSZJgwLKe5UjBi8sHtHoJ7GwP2k3wYj7hk1bNpU1LSddyNshz1xNWwfC1F2b7xa3t28Q1REkw6yMjTbT",
  "key15": "shjJTEm89omKt9t9rrJfZotQfAZsTgZcVZvgAyeFcCAvgHNeDreRNDYaE5SKSyXMYq9ybWNJgT6FviSHaNtww1N",
  "key16": "3Btk4sEcYnLb3RyjLn8RketRQ3foX7DYXoSmfCjAPhcYoQ1CM5QFiUktPVUPqCnNzWKVzH69JAr3uqiEj9oBhyoT",
  "key17": "5Kgq6Yn6R8LnSCbRBaYuwdUUjUrHXB3qwxBXKaf2w8ooKnHmoGiPy28r9zbx7jYcUdLmZG6S75GXEpgbYrVPtnf",
  "key18": "3pEprM41dzBvuMraABGUJZ7iz4TESo2B8PNgc18LYABALiUpNVHaAZPhA68ov74eeg8xVVisxenLoyxVu8v5GxEv",
  "key19": "63r4U2ph12wCBT82SV7NW3q11JzpLRk9DPBTX3BF8GMWMgibWwHc5u2PCnFr5F74BMskXF9q5mtXVUo6AEEbq3dx",
  "key20": "2rH9cdG3yoJHDmi3tz5KiCaFAkpMFkhpCHyoyPZnx452gMhvGMcB7szTPUHsmY9zJX727ksettvAj6HmBhC2FFQt",
  "key21": "3HnfhTcxiwi8AM7koww8WLKxHRxkg14hujqCn4e6QK7HQZ8Ca4ia1Agy6JJ8bXrswCAtJbJb9LMx8NjWnX97m8sy",
  "key22": "5gN9K1e6FRPqTFoGZ4arsk6qFHHomeUuPqUSjaPWUqcHJraw9zfmon3prjMvyR9vF7XzWUa6YaNxGTBhVgXLPZhF",
  "key23": "tHsQBvFxdiBmupLQ8o4yot4SQmavpoFhdh6GiXBSXqcxcNSSK8R65P248RzZS7HiVpQquuEG6Y5jYkVALzwnwpi",
  "key24": "mRS1f7CUKFsqTLNFWvMCYPsiEFnxcaDa8ZoGNLAn5RyCUUgVnrzs2aBA5DyER8i6p299jbzE3rCXbvhyhb44H6X",
  "key25": "5e4EkHM6WahR4WMGZRqZUa16Zx2816Z7DavqXPxDHZABznhXEnAfMVcYpCorzsD4QVvDSS3Y1SJDZ3WCXmYqaPcV",
  "key26": "3jBnGac5qwcq8SnV2WxBVU8Qym1mrjJrz9vpKrTqv4CNKjoWj81M3brfSrX2qrvDNsiaqo2VTdsLPcyQ1jXFt7ZL"
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
