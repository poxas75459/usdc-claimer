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
    "2FMXtBzj45rTyvFnxkYRzaGBjqh3YxpFxZdLy1wCPHu7EUXBSzthZ4doZD2xYZN8qiDyoJVEZBas5XqZZZKsMVgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7e55ekKQBSB5oRhsywCyfEjNy3CnuHEnoeyaWqzW7DjW8Kn4hozAGHy9Aq2tYWfU3TvFTvco3vbEjVTep6v35a",
  "key1": "5J8Xp2vXGAJNZgQfT8zWgAVFvhxC2Pa6duUccgqGgpGXNZ8cGW1Xug84jnXhdZUewhWkVBxkec438S3njmqJpYdV",
  "key2": "55H8EZTnSp4TS4wCYyWUgdeuZH9wWgKEbAefvuWJvud1siccYfrCynQHNG12NHfQHUgmYUgEtrdCpBSJ5TieqyeU",
  "key3": "4Hqm7vz7vJwwLViptLd4Leeqxnn2rTHnyWEFqATuHspf8NNDicAMkYjHMJiVRhrBxjvFgasNUB3V8RTKkEefvWVA",
  "key4": "5pJiKSMg2xyhP91hM9ZBoMTzmsiADreHXvzWDvEL51xFKPBJrvKbYxqvBfVm7KbUwwui7xkggJJAhV3SAffGmjfn",
  "key5": "5ZGg4dJfswWpJWja59DJiJDLFcTvyv85ozsYQR9SgbnhhvgvoRiKkj7y8uDfBD3f4ksSwrzzyk8eCVTMSW8HRtt2",
  "key6": "CssaBCUdMK7CZPvk7eu3JSmXFB49D79EQxJ23cK4kdUcDaFDRGJoEQkF4JeexrCKSKUbqTdHbNfwVkMiyHvgxSt",
  "key7": "PL88eQLm8XkNJzAGMp456ZesajczthkcHXeCYXMTkUaVYkD2ZPUxr7pM79fqb6paQtqsZFDnqqtnmrdKT99z8yy",
  "key8": "yoEaCCQwWnqXChxZb4j9Jc4JMJ2st7yrZfmEzV3gMYoXcUHSV3deF52vwtqrmngTFGY9hdLHwcpd2NbvjYTNv47",
  "key9": "5pKT6KdgtgDoyLQk4hScJ1YVWNtifzghWdsFeUXfGRebgkGUjiU1a5ay2Pq24722qNdmjJHryYF1UcEyYTQ4tRsK",
  "key10": "Ed1bLqo7429REGZyBc3PsBC7uR2YTDJ3RRthk6JVeZzSN8euLjuCTB8GkUJGw8ncBKP8sM1CMBceCyvhRUhotF7",
  "key11": "2vqBHXdHhTrC9hPxknAfGu6wn2xTRr7feEYm3yc2bd8h33XNDnzQZrhVUFBXv49yMmZThMngccEaR3esYSXLqS1A",
  "key12": "63RbpoPz3PRjrqj6QyaPKadkkCnZ5LYosFem3487mA89vNSYJr41Sv1gXAZQfYZR8tzvFjW9MECp8vYFVJrUbUbV",
  "key13": "zkCXxBfW9MBRMNCwe9sN12JsXnHUp5HL7UfpFHfseLN8rWiN99H7rvmT57ASUBX6tcvxV6GoGuXeLkb6zLTjtnr",
  "key14": "2dfqHwCgt7yRMXxzQXzfGUj8X7q6YcwY9PjJve93TsgoyGsr7nMcjTuATiCZzhw7hPLonyVJhm49dYxPgqGFao9e",
  "key15": "WPxrWxKZ2ehLSVXvpFeV8Z9CAh3H3b872dzbGoDtGAiaCPKSKEnrQ6rhGqu5DuuMKvnDfke5JLfTwRgCtgoSgym",
  "key16": "SARuTGKvr33XwbeXbvj7DpDr5fVGPtL3eMUpMBWGvqzGW6eGC8xZo2f52x1L3LuXbiJDqarBiee5EKHQBN5cdW1",
  "key17": "4RskXFAD9tEBmeSn6adb1kLE3qZMqxVA7bqEDmtc1K1ZUj2A5F65kM8Sq8o3HqDSDPvt94UopTKDevK7eazqKros",
  "key18": "2jHZ2Xh4n43kaDmwWZEHjggnHxihnjqfEwvZ7JcBKgnByiDBNswSCf2uLLsUmckKuqMLHsjBS5jDtj47EL4Xbs5M",
  "key19": "V6Wcb24LzR7gQRN2MhEVHFaxsAzroLmGuNMqnwBDpTJy5eTuR1WgGSsjL2ZzLj4bAdVYouAC9TQcJiUMrKK8iuv",
  "key20": "3TUbWAqwXBEsZJzbt7AuwEn57pDvAz6trGHGsVthRZyD1sKiYmdXrC9bPQd52ETpGU6pBpP1qMmSqJbTaCL48C2z",
  "key21": "2zd3noNenQnwTiidspNqhKdHqzaaLErV5SWEAN1HnFVfXxL2s8TpuYgsBucHmEA83LzARLY9nEeKYfLndisRm2fS",
  "key22": "411dVeiFmHBcChWBWZDUMX62Hn1p8hkWUuB7RjeobsBqqw3FhzG5Wcj2cT7nSKJciWcyBeQF6btPZ72Fjesj3hoi",
  "key23": "3ZVBYJoekbWVj4cMnSgVKN8nBEEHfqcVsFMz6n8YkQ6JPtPY7HvJoEb7fK7s5pzf78b3Tsi9iAbJ6pTaCPQMoPdn",
  "key24": "3oXmz3DnW6mVgBmoafADQqCm2kD2pgU6rLbbv4JH4fbjopQzu4EFttrLBnmFb21NfmhRiGRRUiynmmfmabocDXSi",
  "key25": "3hEpDi1ue5xxhaM4YmrfxsmshRUuL9u7BsoxYNd1y1UXgaFNLJjyZsFxSvEk1iWNVMa2HsvapqHn2Q7DH4nuwWJX",
  "key26": "2tPjUqpuxNF1RMsj6ww9XVqarKBjhPkAKwH5ZNFFiZ6GiMqFUePFAvrjBS7yGGrXmTaTiGcFmUDCRM3hc3ycpTmA",
  "key27": "5q26bo37hUBpVUU7a5792WEAn5yc8UhTaLZpcQxHWdK5h1jS2wg4uGmHefKvphzJUWhumUqToENL3SpeajYuCya6",
  "key28": "pjNStjtcB1CDpq9hxj6sCVoQmpYdQ4GSL1jLFU7nYtNZnm6VE39t79SY9U6wh55CK2bshuKWFspKZqmgjoQnYYv",
  "key29": "3JWkm3kEGGGemkyMfw7Bddk1S7gorGGJPK6i7ymVq6PwxpN3FHzC4AQaKgy6eBuodbUWN4MmQRwvUZMgiwrLg34d",
  "key30": "2sLq3ty9MtVWsLDu89d2pPJZXkwmBXQUy6GZW1RJLMPRR6GXSGT6xzSZ6ngTVddCjk4h1djkmwFwXvs5cGY4wLtf",
  "key31": "5FLsapbMDDX9p6oexP3uhvBJT5oaoJ1Bqkd5nbvryKhkPitpPBrCjWgSu2vQJDC4pnNwXwgT5hoYpydhq97gPj1R"
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
