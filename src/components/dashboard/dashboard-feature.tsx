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
    "b9MuhGg8iRzHB5rcjm7w5CEDAgktmapXP2XNkx3qByHQgq5biSWjD3HjURJVuTgtpS9qzUFYGZYjgPpYTXTUkU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5jfkNhJo3BqTLh6yV2ixbWraTuVz7pA27hM9jzGkQ62khtNfVGPqfi7cFfBbkop1cPwzmwARUTgMTecyRWCQt2",
  "key1": "4nR8piDAayjJ6bc6Xc7MNyTHgoW6WoUVCQAGWx784yQNyhScvPD1mhLmb4633a9N4Cu5khM8VDgQPXRKU4QdzMx3",
  "key2": "12ACqSgkrHW4hXGfxv8dDT9rRRuaP9RiegESLLxh6o44CTipSDWGwuNdWBm56mZUVv5SyzwFcEcLgFSLKbTo8Yj2",
  "key3": "49vFwtoqGEA3KWLRr6A6WSgZQJvStqzPqTZpBTfj9awK9GD2nXLDZoNPZ4qT4LxZhhB9JmfaLsfrctyrsEApjDK6",
  "key4": "dB6p8TmV6LaEKT55MRo8g8Ytb8anCY7ykhTmXrSnXmZwUscnbLoCurJod929oHkeaCmjAedRSLSNCcJooAZLVPS",
  "key5": "36WmrTsARYWzMuWtjyWmBUst6NLAYZ2pArCzwHcKUWKh383SEYF8Egdwu7P8uK8p3cSSoSk14n7taJ5i2Pu2HrAh",
  "key6": "48D6mZ3y1ftbEVBK85DBRPhmJoUGUCSq8LcbBju5yG8a5rKSsY2UsQsdz56RcKiNADti3dCxMniw17E4v3AmQCWT",
  "key7": "434oqhL45WKCbcwrhrrCNNxiA94cDg1QEaeYdLKDzrfZkcpRHaNKNSK7NwidsUQrexRufCoHvBChT1eUfrgMjEhh",
  "key8": "DP7f1p4HTNmdpGVj3pHcWX1ZyuV8mFGEmjsWMXpLCpCqK1wqCbXoJMoshFxW9DoGkgDadzwRpNpYY1xh4yRcctK",
  "key9": "AWTXkL9KVWoqu5qtkBBPXLByq6zXh3JyFZJkiymWoyYR8GpYjwSdik35D59jZdd1jTS9pUJi6atcEfzzRKjsBLQ",
  "key10": "3m9Qj7XeFzGBpG46csGEnLA4kwvwchAxYUKcA3n2U7v1JRshjsE4MiY1wAvBa4KbRskkmaPcS2faJ3ohkpzrkHwM",
  "key11": "2UesbFRkA5XQuJuXaaVQ3oY7vthod6DuBTKqeT1h5PAUtdqGfrDsqjeZMvNW221CFpjM3zxvMb2U2AW4TjxWTwEB",
  "key12": "3r9nJTQByZWL2s66ojJD2vhGq8TFAdzvaZe6qBoPGTiHcDGv8c3fMJNMCu8GRoSFDVf3jS69mr6vX4YNTD9JtdzP",
  "key13": "3RZ7QxoD3JobtrKkHjNaiC7ubqn4yfmeMhtkoXqorTzvSUyWKHziQU5E7BUa6aBabXsoRH45ZF6NirczXpPNLZnY",
  "key14": "5RgjvL9wwZZUxp3eX2kMc7gFN1VcBuBwg5qyRYeu3YSiH6yjzfvK2seH3ezvgNNJefmvoPj87axLm11x5MfbL2Ji",
  "key15": "5MQ94ft9zonazVxzfaeGHKE957uM8qB8yAmNX1W5CSP2a4zZzhwxE2DmUU4pE7VQEcYKHot3KPZ3wV4tm1YQwpoW",
  "key16": "NoXVS3agLzHJZizcXxv8pFVXGVduSqjcThXWzuDEpGXKMNtpDozirSiDEwPAbNxRYe5EqX4qBo2z4GMSw9e8zz3",
  "key17": "2UPho1j6AwSFjvaDBPcgQhx2VQt94GV2oTDmNuXBPZDq2TMy9U3NDso7SZtZg9EL94MwFmL9CE8CxnGPqvcBd7Ux",
  "key18": "2BNGfKp5BCByJYbvJGZo47GUAZGxeE4ce45jKouYxLUrYVMFMRQbWiZxFgNWcEL6dhRAJXqF2gJF5PqFe9F3yW1B",
  "key19": "2sCz1nxYoTjC5U3FB2ygLtFqkWgbPwq78WhVuVS72LSLvXnZo7mf5k3abZhRKgmW6coPZ2aYf1e51SoaURUohCdt",
  "key20": "4WGv3Zgqh4y8mZst3wvTLDKM4SWMmSce6TE5hK5y23Jt2f4wqXDT9Jk7Aon8wyNCR43ruFcSft6TpUAucdaJuTN2",
  "key21": "3VwKGHf6Rq9Yz3p9mqhNrmfzdtiMLBRzLm3MVdDvjCEEXAqVyk6KXuJSN8Hwz6qxCArFhPGscTSzPEk4Dwg8Gf4w",
  "key22": "tTrbNN6eA1aYsQAL5fUEdSB4J7QpBixpLUyEymZxMeV7LRMNmCqvJjaKCmrEM8PDykUu2iq94RJxdqNjAF3ow6L",
  "key23": "5yjSyyVed7njYAuSQA4CPxjSWfQD2oeytX9Ym9vAS3H6Xh7ybQm7VnjjpR8T2LCp9KcM6EWASxNjohyjeMJG5u99",
  "key24": "23xFYNoUMbMfVnYMaFSR7jYAa97He55b4SYzwoZp3b5YVXESe7jy8uHiuNvZhjCEvF56iPXekeA6boS3GWbWPQXb",
  "key25": "29M2Qcta3nXZHc2AEk9YG3sFYgjStzpbrybFzdMceatAEDdqmBDzSTWNaciMZz5qVbCNCRwatnjMQcXCTFwHuC4Y",
  "key26": "2rb9P35br79g6gMsu9W3kJDo3E7bcE7NfemdKUX1ntNTMmhgh3KNeFoaxFGv3VRdNZ4A1bMBm4Mr46ixcrHyHbjt",
  "key27": "4NRUbbKZn5At7m3qS1XbTx3Vjj8WamGMXmrZYJ6gecQCcRU4Yjabki1qZQQXPgAMPMqWdK323a3usvPnsqrhz7Yz",
  "key28": "5Rkwcj9zuCg9HUtAcC34i9SAk5KJJW5dFKsXVfq9MewWwC4PRg85nEM4c9xsMxPwQ5F2f6fW25U8zUU4UYKHg76q",
  "key29": "jVmJ3KpvzASAS9UFowDsybr1nC7toSJA2WbmvFgiNKxY7znVPLmhqT4BxUXL8WxyJyD6Ma97RG1WgZ4YoTuqd69",
  "key30": "m5SwGYDsQZ88djpJ1hBotT7pfZf47vZPrwV3PGGcLjCQ2ecGcAVsxhw9k6PG8PTPgiv1P7psNM1adWAZnafmu28",
  "key31": "xuGwXPiq1cHY3frykkZDYmYfNFj1t9rv5TnuTYRBBwHu6Wc2DNBtSQF1Ugs9xshEdAKWNyz1vCw83YGsyvWgJPs",
  "key32": "5cy2gMUycdoLHU84sXiHjXYmW5fgWXkDuUw7eiaLhBGshzXS2zBPQWNFoFkesM6hHMP3Mj4V5d5FBGGF4YuBvmEv",
  "key33": "3FUZFwggGU57nZ7UCoLHeCGr6kyJNFB852vdvEd4vJy8THaTzMzdp5U6MkVqh6T243kURn6fsLKQNYWSLzuRCdcR",
  "key34": "4jY1hvaTaTyYFZe7GnfogcWN2iSkNubuC827xhwSxYBMfY7r7YjDZVHhEzu9ranM9eaRNuz3qamkMs1UdkKCgHvj",
  "key35": "5zeYKkz5fnEBgUwDkGR2ttJoFtKwNZbzk8vX3w8Hv5UzNxqWbeAmhViZ3CzSzEjyV1aYUwbAbQEb8MsA41QV29tC",
  "key36": "4NANc69zvSRNDUptLKHDfcWx6wsnpZWVYStVWVxurFXcmX6T83w2axy5BhX5NJYDBc1YsRquwuzJwcYVPn3q6RdQ"
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
