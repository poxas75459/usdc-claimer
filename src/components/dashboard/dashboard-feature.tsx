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
    "4LiNzVB3wbkVDMwrhzfUzgor3JpyYjGzWuAoZ2rkhBLdqsFkKJaCjuLUW6BRyr3jxogtFMDEw6qu3XkCY69Mr8aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e56Eec7QSvaCDxZSGD5DPHPYoT795TY8bu4Y8hpprQWkMQ8ssQGA26kUk3oxp6A491hyBHJ76ksmucvjKihSYcx",
  "key1": "51jEjWx856A15BaLtnxHEdrM5YfdKm2q5ZHcdrDfHSDsNtzBUwGN9MomfQPuodRoknia74roeeEmFvb9MuaqXnPw",
  "key2": "ouU5mq5rrrDyxea4sbFkfZqT1KpLLvzLzEJkTuWqCWGXPs4zqV8h6j12rCNDZoEX9CrE9ayS2ZLDyVKEYBY63uY",
  "key3": "3HcYsPX8FSjp7gfCst5pmQjiDPHWysJh4ThzMGcAdVhq1eS3K8tAfRCJcVnWGVCQ5FxcZihb9v8YQmF1GR8iZvB4",
  "key4": "4TK8zD3fuQ7sB3BmXJV5675d8kxwY6GT7Ksv9kz4XZn8KAUx8p6bjMm5j8YnPusVQcrQQb4NQdjDGPzHDd5Hf2CA",
  "key5": "5vmU34ZPuQhzW3ydQV9jCDm7bbAiEZNhmiXiMq2YGnukZWkSoYQyKxtzhSqEkue8zweXNZx45WF7iJpiiv1gjak5",
  "key6": "5dHBzy4ZHD7bEXYgDQeJpevnuCaWKTsfMJmAGfUSWRNbx1zF35NyvK1NMr6oB4XHSC96phPA2p3B9TM1yKn4RngA",
  "key7": "51bzsroKw9pLFoRNvm9ADdUvYQBY7RCGFaf1sLgbuDSUCt9zGRFJXkHuA1RUpWttPzzCE1vae9ULJbsgrj5yHEEU",
  "key8": "4rjgShDHX2PG4Qpe9CzKavCMsWT9ERDq8imbLKbYBNJiJxgXts3iU3GtqzkCY3qtwTnuRWQfdbYFkGKBdtJ6WMhz",
  "key9": "SdNi9gktAfAejmjerMrxtPaZQbcvg3wtXrHEpUoML4dz7EDuQA1jWS9gHKW3Lv6gNLpr9ujvgDfMiRpmUruNST9",
  "key10": "4sZ8XXmCiDvvwh1iguyVngT9DL8uT66LiRGxq2x2mbsmoVwou3JkznV24evxB2NY9b8gcDk3yTqS77vM2zChQmwS",
  "key11": "4zUTk8Vj9Czxoo4WQm1451bjfhNsMxiec1fLT5KafEm6o9seZZo7oR2uu7CY9E3WFUKn9ir97cgD9DAr6hQGNZwK",
  "key12": "3zyfqqE8egnERkYtXo5qHizgW2eZrDPXJ2LNQcpWy8bSpReH2jE9N4HuWmQPeAA7Si43sbQ3bDkLxQN3HZodXgPe",
  "key13": "3scHExMz87HHMp5ktYQQHYvUoVHWXudzQzV39i6MnG7GvtAtd4aeAGxgBshvCWKa1oetCSRPeiBmywJvQBxSZwPi",
  "key14": "4Ebf34JuNwpZ4D2fXXfgSRqk7zSz3sG6zLAT4BeGGnEkvgpdc53ZSBDAixfZTb6yjWuNqGafRTUKhLeQCXWhAhKo",
  "key15": "5mMTytZduB6WKyhBLERHiVTGnAaBQ7QVDeSm6Pemq5mZWUMZUugw6wnEsxzDtkEiWJmWr3dBMcu6ZeB3vhAGo6mA",
  "key16": "33XdAqjYzhPDJd2ZbaJMQhAFxwcqXJy9sTKYgTTda81K6Mq6okYzHuaLX98PVubwka6TGJNhdtsewHxAvaZZsDoF",
  "key17": "2oYR2AXtmby3ZboMCHCzxeoDBFuxZRofcJYMv2ePvbZ5LJ27fsRvPwX1kypmEpcRXsw2kpqzD3QriF4RRXct1XMp",
  "key18": "5fPiAfWUsKVHKMk83bbdrAtQfZDkpfe9mCKE2kvwgQMWXTa1R8zdsjb4F2JTuhXoq3mQRqsBG6u9RpAh4wU1JE6r",
  "key19": "58CoT6zCLsFd1yCofQHvtZLt2wn6s7T48ZSzVxPXKGR8PNcaugA9zzWhFDZUDHfL17Zb6h93oYvFvcxEeZcGCUe1",
  "key20": "i5Phh5EL377kcRPGdEFmxKyUMgUSjdXpygJxTwJ2g9MDbywSj6xBFvxoLD6cBA6QBizZVw2f7FrSydnmi3MsveT",
  "key21": "2XP1cAbcGSYJCZWps1saeXpBocXm3PQmPt6cnqAhtkx9nWmyRo7pzE8CvP6TS5UY3dhNUiqsRTciFosHx6NTWAGb",
  "key22": "9ZZqVRxpnqFSWuA2MdPqQkw8pUFMEWTUZ6zppCNfdd1eEYkC5V6Tvx5xvHs9HXag1qeimBi8wHnGr6LAg6uRGUv",
  "key23": "4UZHN36mc4S5xJGpjvPvjFFRqTfgejZXdRxVnzux4VeuBonYnafP7V8Nd3AwfMafEXEWb6Y1mZExpGcqkMFrZA92",
  "key24": "vUfMiTNL19bLqcpeSezANyHF5bgZFzvipnhWUhXVGE1nRPRfH6dRA6gX1x6YAPZYcG5emaN2r6iEC2x9iffpkpr",
  "key25": "5CDxDDU1MvXX8BJbB9FxV6BJi74sMHaM5WJS3MPwjpZsiX6FU1SnNaXnSDsCxAJ7ZC83eGY1em3vYq3zpcYs2F8R",
  "key26": "Et6huY8tmKSvB6cZdkAXX1QVsJrUFpcv5jsi4z7EMj4hNfz3GUa3m8VQhzVfBE2ofTrBFYPcAZs6F4CJi7qo9bg",
  "key27": "LFgvoK1CsEV3FVG4eLmE6YYS2fUAZUxKSfHaWoHrkr7dAkxJxTQR2ZWrYhSD4GGTkbrvANfxwArPaKZVmbc6Bzm",
  "key28": "4HrPXYWdeV3LjudiyWBzauS2zR2MuiEN8QtvFqR9iUZrsLfYn7oZWARZbR2ZeYRczTAxFeYrgELV62kftmN3Tyvh",
  "key29": "49zBsJ21DEao8FynVPeARmSjCYkacwsae6A2UxVwJ9tpatzaaLrtJcmPrf8MeQrA5oRUcUZs5uqxjPTGbTPh7crM"
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
