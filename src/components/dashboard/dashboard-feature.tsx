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
    "4YiV9Y9aYhbqJ69dTrgPEQwyqaXgS51AQhVEBLTD7XueR3kxeMHh4CgyPgz373fzUiWvyEy1V8sVrSkF3DoYPnBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWb4jDNEC4qgTgQcMGZfGqEY2PQ6P8tbCiuJ1K6rc77ZBUXyvTcsodVb9s3PhZJJAUtGHeZY5oDxe9rbAaTcnkW",
  "key1": "37oeLrVaCb31CLacArwgojB8Q6GyWe72LqoM4kzaoCttahJZaEYAVvpDiZwbyHqpTVQAo86dxG2etvhXeNLdDV1M",
  "key2": "4uRRTfynbcGLYTUWUJFBfq5GqjyWXQNV7gpGAc6XtkvPjWmFTKJo19SfPJ8ZUtg7gjXc8eZBZkjxV6mPoXeYbf5a",
  "key3": "rfnTu1W5fnvXasfSeZ5Ppc7DoYfrc8upjv514hL7fjczaRTDiFTs2HQWwDds8aeXMfQiep7gg73CoeDKpXocisy",
  "key4": "PnckCtYM4d4miHPrvmj8ed4iArDX53D9vPno6PmYDhDdT9CfcWtafHvALhjWAP8CCK3AiX1Gyt4eoVhamN4g8yc",
  "key5": "5XnPon6E4rK5HS2ZpaCZZCo33LK8gKvRTEELrKTXtcqKjnnCfj5EWspG8pVHDYhp5tGoVxxWPFeSaWrkcj25Uemc",
  "key6": "2eqe5BLQ3obFdAcKQnUGdJbcK2zqvZjxM5kJkYBfEE1KhQjQCZ8m65BmFUx4r7Remto6ptpy9tBt6hChNnUYpLyR",
  "key7": "2YGoFUNgv3KmFKfQurwJdn2Anibn4QFhRCsbGmn7AwawwQBKog1kSxHzywnDty3tuog6KRZ4ApX5gTCWnenJHxSg",
  "key8": "3m3SjmpsWUvqWH5xAnXy3RP1dS6uFDCTTRbWZ8gbxTpapqFQ6mvX2KGhdBwH9rADbq4jyxxpDYuM7KQyeNb5v55W",
  "key9": "2QLrH4MLNNVP3sWhiXRKUuPNfe9TU1mHwn6VdWYFWJLAjWgWBtx39fF5x5zEuXaY6L4aHD3JiKzLafwVPkj5dmju",
  "key10": "3rMdk17QNG5YkqXRZTxZ2txUqn2M3bD3BxdWqYCziBRA8UD8XDwjGtzw9AkivZxd6eZ3mohcXSdQLC8rFCmoyacy",
  "key11": "5q9gdWvVavM2L8LWkCzXZYWE69zK3adSwtvphtyuX4YwiWM41qte9UBh3ra5XTt4n13doyWPwEPB4mHAS76oMg82",
  "key12": "4Ynh3igkhGejuHdGJqtoc3mdXJnEc7vMyETm7zaVRhU8UYrLwQVsvthGCaEkXkFPNxnNbEh6rRGCFygWEtuzR7Pi",
  "key13": "2qe7a6ZFTnqi88REoe4PQdfJWc1GUUTsvYfPEVMJmWuBWGJhHAFtJgj7QDXrXR6YRigaE9h3HGRP4gWuE48tKF6k",
  "key14": "WkL7X6F6SG2DqCiCu127bPKjq3V2LULtaqhVeQ9QoojYTRvxs43dArSxecoUamfLHvwgb9RXGysp9TZ84EQCNXh",
  "key15": "4FuHg6uuK13jiPV9q1Vay4QWkf1mYzxqJJ7b6WPD2wGnaSDbyuuuE85vZGEDssUpwTc8XhHGHRRvexxA5xNPkfiT",
  "key16": "2gKafWStmuSc93FVq7iymDkNcxCcWfwAGpx1FUSYTYNTR789nsaTsTssYAX6PvpzMwKU5ezrV2MbnTFnVgawBixW",
  "key17": "53tL5gqZShtc82AMmhTKq7ZoQCkGUSqJPPTdKQBEMGyvvAELrKM8j9eUBTpX7BKoQV9mYZd1gsxqgXwU2S2fHvJ2",
  "key18": "k3FD5YPoknYfcUV6WULv4wpGYLS3Dem9b3c6Ak9LDmm25sEb46rrsKBqHZ1WF2HZw15M8uV7xxcXtA6zdik5vLE",
  "key19": "XJhNHjD6vXHjPqNzDgYU6kgTNtZ3GLea88dPhaeRgYK6Q3cFhTtpG4Kc19YpZ1Mu1zrE4q4RupHLgGqavi7wJLZ",
  "key20": "2pzEQ6eRBaH9ck1YG5jFMCn3cyTJaw8W9rRFixj7LH53fQm6fiR4JgQKrgKFhyUP7GyD9evL3n57v1vsYEZiHoQH",
  "key21": "62VcFA51MBkXESoCtt3icMDLh6YZXVBrRHbdTuSevv4PQ59Jdfy6DPwQxu3wpCM7T2Z7QiWKeR4WYhsMCq15onqU",
  "key22": "339LZTzPzeDFaHfNPjvP7TzPXs5xyiFDN3KUFyvgKqkqHE9MnEGU8ERcq5cDFEmWoRfkL4XLM545pQnUWJUYG2ar",
  "key23": "4V4jyF2Hw5B3y9zRXfTE7iamD6srqwM1jqu4vuqxuf2Aa9HzgTYabmpkRfnYGwo7iTZzFSMHL8wGM7WZms1ishTQ",
  "key24": "3BfRFNkrd7sHnX3g1KV48u7kxESZwMecLM1nuKN5N8yEQdJCyqxWyb2vZhUKXAv2Ho4PQw7XvcxrMMxV3qD62CYY"
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
