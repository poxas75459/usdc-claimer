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
    "5EyAP2N6hqpSDcxhwZ4fK1WagBHGsmkhao5suT2Fh2p7u1UyDqvzdLCrW5dGL7xtf5ecbmUR16WobR5onjhvdgwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgJSqtqe4fvwznyWQPYU1wCRK3g8YGQjEpvSBcs9TfH6zvaDsyBjL8SGLqN45nD1jT11wkUUdeQUUeZChzNLTYn",
  "key1": "2dYJi9n26Nh6NQJojN86n9gRqKVfvz1B3yM6PVYCxSJcye9pM7HMLKbacNihuzKVPii3MQdhgo4EGFc5aJyeK85n",
  "key2": "52MAxG8Q5g8eNqpXEEiLL3QbPDnkV65qAZoxa7aetUaXpQrin4S47kNNS3STf5US11z7rfYoYkES6YvZ8gYpjyzW",
  "key3": "27SZKK1rEpTqv3j2RR5FcKfoiFk7PzAxQxKWJ4Z3ZTb7X1TKstPxEbcZwPXJ9J8dGSJARNr4zX3BW7hptrGGXcuR",
  "key4": "62B3HZjoqNeJYKm4tfi19YSoKrdxXkGEL5mboTpn4LYc8ghcLQrBXN4ooKbjaYeuHivaxhHGW4SdMRb3pcfNp2sR",
  "key5": "5aTSqMcSJ48jgtiFwu3npVTE65NGpxBZozpW4ErHaWnjJXpe6avK5xc7uLTgNVHtaRAWCahSqtbPB2uSA3r2CmHZ",
  "key6": "5FZP45DHxBmenCYvCKLZPSxYJzdfMrbGWgutM84xcuqHqGyrhYDqyT8zv7XtiDQwv77NuvRjmeSd46W6JPnxRmeN",
  "key7": "5x5Y3VVRLcSiVsBbogixVmCA99fxbckKwpKbWje2rkxvo4hbPC62VpHt7vE2SiucHbr9BvmZLGzqCkfEpuhm9wbs",
  "key8": "48yXwjmVYH8awxFNLGoTFJVcHZeX4xufiVBTcjufj9u9cF8RFRJP1arNMa1gUZvHdmi2AEzERKbvocWZTge7rHXb",
  "key9": "5bG86ZvwVFiLH8pKZmPBeQqQc5rr3nH3LW9m6WiuMS1jKUAenbdkckG161BE9ZHAwBL4qynm14ckS42EAR3MhV9K",
  "key10": "3Dd3xuFHCEUSE3muMtT5EQqjTQdeAqGY7oYu8rvDSYA1dFGDa1dCzfXFRBLSAwT7BGeS8AoabX3aPrQs3DpxzRRY",
  "key11": "3dYVN5FbU86FWqkqiLen1pdUJ8zu8r1JtgPs5HvtTVX6H6pqDN1QUJtdtxPLpiZQQUhNpMQzFooLz2ChotmonsAB",
  "key12": "2qcuVZZfjPTVxmimhFPyWGVfrZ8QAeyxksoPYNHw39PLciftay3TMW9qhVxTdbs4rFo5aY3MANHuFxJkC1c6uvy7",
  "key13": "2W8bN8HbRvtijMJbbvigbhhCgAvDBnMgYeaFLDVcY59J6gp2oXe1Tx778rmANnHXGV4qY54dDWZQV24oBV4DtFt8",
  "key14": "4he7MziVGfbPQp5V4icbrcuRY9DVWmMg9GLS5DGxj3zYFvtbzAKoybzQJJYKAjC3eaaHaVh8p1e75PzTzdFKnSSk",
  "key15": "2D8WbvstavzTbm5NvKaFrPbzhVMzmt2g83d4TXzsMUScc3JQrYVZATVMgiJkLg4XRoRE8BV5HnLoMWzve6BPfvFo",
  "key16": "2cMRyRU9LcNEfTeFpvYjxnSsJ5gfBgFUtawXM12YZzuUepMxgoLt4cePPeJuU6QWB1g27R39iEcMZLmHQF8L14f7",
  "key17": "3vqNc8cccAi2bGicfu8C7zgP6XcVHSfcokGj4FEkXzfrEjuo6wDTctS9P1KDrFxnr9FfTdw4B87X3hc8geJDqvir",
  "key18": "5qrPbsgfpC1pRK8u2JfsL4g9omhgzg81QpfACLfWy3PpjDoUwmiLCALBUxyv8b3fqgSGWtdCbcgGZMpkpiJ3Vric",
  "key19": "2x3zADxytDQbouBAZA64JpAAVGWjVMRgD7RFxTmuLzNYPv3GmBypSk5RRXMQ5rZjrcYiXgoUq5wUczW96i9C5jhi",
  "key20": "5X6mfsJNjtuzBxQyg9siAVvmz8VpQsmGyowsSEgbLTngUfG7dkkNeT2sVMz1Jgbz7rkykbKFXm8HCuccFfhQTPiS",
  "key21": "qQoUxanMXkhBVXxcB69BdU98s5HoixGuoa2eaQboTnNWkTUHHcpD7kav9wfMUewqyUFK34HibZXnqja5tSBzgZQ",
  "key22": "2RbRZC4qiw8r8YioLyhXybVNNuMkhNvvgSKmjF8dJGYXGPtj96Jkg4E2UdY5oNEMF7rZt7isDxJ6Ej8qpkphG8WZ",
  "key23": "3HHJMpZhp2998igTxy3UQY3xRGxquZjszhWwFkzK6PC3z5sDRSwj8aN3kkozneL2tCY3WKj77RJ9Ngdyx8qch6wm",
  "key24": "5bf4E6dcvu7eCyhECmJjAqYQArbM54ep8PmLVWc6GVwtNZTwrWDP7duMySwd2YYp22dUa2gXGAqniMyfoCptzcnc",
  "key25": "5eWCDUg3XGxAsT3reHKHpUQyy4Gb4rB82KekEnnBHzCdLeQabxspj8UCCZpbavJ6cxEWUGdCWgfLR15uRwopm2S3",
  "key26": "224ea1hpzTtcKYD9XVx7GyNHafeFcLA69p82vCC4cA9XHGpXpgfC5zNwCTf9G1jEfjxLhf48KxrEoDxEqbkS2yFe"
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
