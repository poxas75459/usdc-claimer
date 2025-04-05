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
    "5zReYGHk83rpRw95s2Qp5xCn1jsj4pBKQ2LMe3rLmsKRJQmq6ZZa8dssMtSVgPchV4LZ8Wrb2HtVqaKFHX3mVPrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGzP3CTzibk9XpvVdvhvQo4MhGbU86VHhF55iWL2KrJf9Jfn7ropGVocy2bbsC18DRZpf33NQ3R1eAcwFbXhjUQ",
  "key1": "49nbdwLv7utDYW3fdUAj4YNUYmP5TFNK7GrpRfxWqphX7ZzwixdnsxKs5whquxdnRxLSKowbYLpuVPYXzu6yvU97",
  "key2": "2xLgZ1tLLhSrPAKfP5gMfZVpnS8Kxkikygnh21HbH4Lbh4dERQs8WRWjtRAUb4NhJ6e54tqJB3iqFvv3ahDUnJ8w",
  "key3": "4HLcvePNzsDdAv5iBcugzjNJw8wzx23t4WNYMaHofdFNkzAj6JYvDXdvAALSxxFRjwgwmrEKfdhXP23EL3MbF8Yy",
  "key4": "5fVMfmbNCeReko1msfEXS3PNgKDHHuGMjF8PxdPQwzNefcQNBP4YnXuFryTHLz6qupUH3dUiaXvXZFhgirNArnU7",
  "key5": "63ShM29qHp7ho1GTh91yk2FP1qxPtMmJCBfr7iQZP2ZegkKNAMijeQtpwiLKjibXrDSZYgpmSfWK5i5vFrrNTrYd",
  "key6": "3K5bVaQ2haRDetC8Ru3SyQ2YVRxxJFq4T4HM9j8GaLabHi9y2YkaaKZVA7nVDn2L4X43LwtXb7ZPKHRgqADAHe2X",
  "key7": "4rdhXoMuESjUSPizj9hewqcrrtwT6NWGcTub65m2FnrENNd7tNhEwSDszxas7BRxN7uqZjsbUe1S4mAmjHsT2mNG",
  "key8": "3NkXjW85FnHXY2YNoSLx1TNNGBFKjXpxV1dgT2n8Td9NgiM3twHTwzVrWbdWYov92taNckQm5Hfw3vH4CjN8e6ak",
  "key9": "4qbpF34GwgUSs9Um3WvrfHGM11WCCPZ4paC8yLWPZARwMspA83NWTjmCK1Pa2iZPMwM4ePZNWs7brWKrVi1hmkEb",
  "key10": "3e5GexZviDJ4capMDxbkPW5LMhiQVwBoCTwrfoLp2yJduzmZe3p8VJBCoN9BTLAXGeH6yGpPbdXNbKCM6WfC2uY5",
  "key11": "3soZ7i7NQuFgcM8TVYYf2UdaPcP45o9Bc629SwhZ4wAJaK5xrF4bRZpcDWboznZ6DPtxpVs6uephCAkTETKjJmKR",
  "key12": "22kqbVfV2PUUp5ipgsuD5XHFMxQeBLyvcyjMDc3CdXB6hK3MDzu3pnCqzxTJRUs8XSngDrfqnbwuyeg37ECxRQCG",
  "key13": "3Rfhpg11UuxPfQhxGWbRUB4MFv8UDUhyjVeyDwg5rTMtah617ae21UWTfqj1L3mrGY5sDPxgbQCpuZFSmhCEpNEx",
  "key14": "4bBK3HYzEyJfN1Lz9S9FcmsAivmw1Q5RWjirkVG5iuJ6KEsM93M3Eois3Lja4VwRNDUkML8BkCnAxF8g4FVTiDZm",
  "key15": "5BCcZwUMpcS8wt88VnvG3m59kYk5Njru9GM4XV5f7swJcLv6uGoMkpdiEHXRrYybiWqNPat6hjopMxK4bixRNrbr",
  "key16": "2ShWvXy6K5A6TmnnHhPtH1BRebzpMjbGaV9FwWBHmWp7QP7CUBzpcUkmPz4pvuuR9UxtrE8xz8Eir7GqZnjUFyfz",
  "key17": "3qh7JjTobi8g4DMWdsL8cEGiFrBpX5DrZcG7XVYRsiSDrUm6bKyaU4womkfdnczY4w3rVK6acC9cSfc8WUtxbvDz",
  "key18": "4r2JJxySN7E8FuFBn8h1xyKZHARn45qUXQmvCKB3GJosYDJf8sGLsKNQMikLyGTJey9cA8EXGv7yMqm3CtKUeMKs",
  "key19": "4QfuVfaqZPRzus2NYngrRg6ZhULZJ6NsDUv7gkqMKx1nLuUgsmV19DAhEVoZzyKZEADWcBwQRBrQXKXF2k3DNxPz",
  "key20": "62BizsAtnAKD5htvijHTZHqj6SbNyGJ78nb8coTcTVaYmKfBhSHGii1DzSL94KuFHkM63KNxpGfsJSLYukXHKBCA",
  "key21": "yQMgVuhc4DpLBT53378TCkfRTJqDLA8S9e2QuFHBNqdvYFnvoCj4dX8PPxERZg6S2KCTKTUbeFCo2iXFFYfpgiJ",
  "key22": "4GZKmfWrutUz1rjDd5xsq6prdcJAHc5Zp7XyF16jEsbC5Wdd4eepcvg489emxiqvrW6FqSLiYHYF3fpKFmJVvQ6i",
  "key23": "Uxp5UCYVm8MYLM67nT9xEHXJYeAEQowgkYiVBsPPJhHQrRoHxdcoKJtRSwNZuRMsXvBHyNbwqwxndNJLh2fgUoy",
  "key24": "2FJpPRfpn8ZwNTetGKWjrs6eKd6Ta3vbRd9BpxpizppcT2Wyhri5SsGCQTKxuF6K1CmhMoycdopt5WdFgfS8N9tn",
  "key25": "5FJpa52JDPsXSVBw58D4n7znuWN9ATDAbxRuGikoG9iBEkwruTrwXXqBrRzRnx81Sw7R2UePxMit6itx1Xs9xNoV",
  "key26": "3rLwnofZA16F14MSDkc82UH5deMsvd5YMTfiJBkTM6ZBYw4PxePrHHCzUz4LPvm4KDW4LWs7hw4djHCN3yrxmaAD",
  "key27": "4WRCvRNgPkCUFxDXwPZ6vweRhS99fundiHYkDX6w6YsFxx5d9th6dES7QN8ng1Lj9YERAd6MmoCfjemSMUkoic7W",
  "key28": "44jjiPgG12hm2YrsFczm7Cuz41mSCZXG5GxT6Ptkb9EYM1wYD85kYz1nMRnjK3vBvgcVVJNL2W2yJRdmQj353M5w",
  "key29": "4WASLp1s7gix1yRBUDy1Ddc1P7HpbHM9tGZAhyXFo5bArhfJnKeRQLNyUD2M8RPjRcVFAbzBTWMJrNymuvjrjsqv",
  "key30": "46HNtbpAoMjoYqW4p9msNTjKh77dv2URpHWJ56q1Z4FXs9TYn2B6poQi6UMbGc7QoLZGoZVc6F2exDyYB5t3jJEj",
  "key31": "5djapwVLV7w1atMqbTruBLkrkBtPoEBT76mYLY4q5js4vX9WrHo7UCgmJ8c8nLFqyajbADm9ZAbwVM9U8dKXRrmP"
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
