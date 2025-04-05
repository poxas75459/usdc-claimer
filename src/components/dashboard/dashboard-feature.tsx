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
    "3g7YECDLZxy48T83MHWATo79WipRomFvqaBebqLfWwB6Ew3vTJvhA8ap4BoT3Wdh1RDdfwDUTMuLDbJSsGu5v2VU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCZWiw7VFp4u5JUa1jC9RDTf9cjmQYpkWBaU381zyHStSVoGSds1YvPRkGokg5aoGLUaB7v773vrukrt1KfkEQ4",
  "key1": "3KqrAPeWkVpaNWMmy8dj1n2oCCchoJHjcGm2A5oYP7xFbmSRb98TPgUc7We63wqopWZARuEqQ8m1mqayfezNcoj2",
  "key2": "4YFfS7f2r76DzgmqiPfWQ9S1et9qbVNMC6QPLv9bJ294e7WN4ux28gL1v6fiXEm8C6jYjF9uZUarjP2VxkfpAN7p",
  "key3": "3mdacYXwUkocQrNYPkQevFboBpMASSmm58MG8ZonNz6bgLvnuP8kSB9wKEyW1k1GwoXk4Ag1q7yEb5Qw8cEpKeTL",
  "key4": "4wAGe6Bj8RuEvcnjwNY1fZtGLYKGEhRb7hXWZMfKRKDNGetkjKw9khZR4mMvapPs61Taj4g7EzKmEM5rSbHxdD5",
  "key5": "36hYXUvHn3Gsa3K87AQLbaj3CKAe7mS5ShiYBQHqrQrvGK8uLcsEALvxzVbZd6azoKNHLotczV5NujJaMJBATNge",
  "key6": "2EUUtDbr1jSpXHCNvYkUGvhzrLDR31K7q3nStnmdMv4bYCZsUjvq6FUoACXcbdSi1tkDFsRF4BiHyqwMQgiXttSr",
  "key7": "2odr5zmeZ7xReTL6MmV7YUqQDVmEc8SwUSvReP6HkxQJpEA6wZBbsqEdRNSB2V4FwLDnTa8EiGvBYgCViFbeMhef",
  "key8": "4Q1WfLBJjUCPCb8JVTFYQ4FsYnqfFVM4f3xZM1Ci27C3K48cP4MyqzEUditCpkRzYm1eBbciCyBcY1jSG5raMjyh",
  "key9": "5MhHtPE8sXByGCRC4yxBPr7qv2JjPqP9b1Y6qpko9QZdvjCKR1VqWeh1vnMNcvi6F9ZwfPFnWwscQWG8ZDWpAi7P",
  "key10": "oZTKR7fGF9es6UPq5zisYuPUWkMyFz2UZ4t3uqCmTpvmSLwZbz1mfYaKSkVRq1EyWxdMyzgXAN76tzqAywhBmMt",
  "key11": "eYBsY14pkfG7LF7ejejDgZVoq9xxWoHF7TkUWYveAt4LQQ44TsBetZLketSrbuPmGuFkPDPtTqRZzdagMLCVWaw",
  "key12": "33bsyAEcEtyXofuFmcqrM5v23rjLGNySQp2QALq7QNTn9AiSZ6vLpivF1Urb7uETXheZRw23pLSBbsCu2e3wApdK",
  "key13": "5K4CmqohLW8VecAkjW9W31HskXBytiY8xhTnLBcU7JHLvT4h7deVeqM1usvUzWizBFPQPZgTeE8hnKk6N9CiYkpb",
  "key14": "4cHoWfUEQrjsr4zwe1LmYPf1uBMjaG8hPTUpokr6QTqeqUU6Q2XyQcxd48an7w3X8aFhtkSAajwQD728qjSVaKhU",
  "key15": "5BL2VSttY5ERJPMAzfNqEeKyH87XtG6W9t7fT4m7Wd5tA2fmwYkLQu131oy6VtPrfBi4Hoq5dZ4qnN9fCnyppDhk",
  "key16": "4n3EW3HLPNBdnHNt4dp234mX8evRDRzeSCrFbc36jEwtwZBHGzZDfd4KYRWgf5CbcpTXUFsXLXY9p13t6n9i5Awb",
  "key17": "ByYJSxWNjDasB7XHsmyCsyzJxt6hSRSkKVJfoVAnV1mFCYqQ78EjkrrvCY9prdBoZfmNvkRo3YptmDZeGFHKVN8",
  "key18": "53thBjGTm25BfehRKBcmeR6PGUPS8DByd2aFdSuAWyuvcVSg3SuL2XeDEEnmSvVEzEaRT3WYHSqNbjnbK2btQerT",
  "key19": "3KkJ8h1RczYHydFnGdLbHXFZbqV8qb4fMvtES1hYgZmMt7Zjo318ExEsuix8FH4Yh6EJVpZ28qUCTRhtDrqeVguk",
  "key20": "fCiYRK7XiQJzCbQmnSujd1cYSdHwPLrHdsmZZ6YrMKWtfDfUisxdbhrYgNze6aF5ArW3uJYGE8MZJay4JScPE1c",
  "key21": "2qnAFRnz7cjiJ3gAxbN258crANQbedH8roKajTAoqXBhr5VmQFpg3bqbUP2WwaUDNk7cCrAvCcaNxrMUQ7E1RTqQ",
  "key22": "4YQ5tWvpNSVcoqhULJ8ih1XumjmBwXuJzXKrgzgVtBei5VUvm3vMjEgQRR3kaBiaM1LhA1HEDdhUCgtFwTL5YEqU",
  "key23": "4kkk5EVzRP9XwRfRYdsitTmxRAiZg6gxAjDVho82C6yDxRNPn5BNuUy9o7RfynsMAgtf8v1Rn3i2KGvq9Ywvcibn",
  "key24": "vLaDbc4w2P1dDdCeHgaDhdX5BHQTStz2GHE7m8oPtQC8G4nZVRg9q5BFLxgyWVzL8QXRPyEWyXJfkUkk6kCsehG",
  "key25": "4qV4HYHSPJuBA4PsmNARyEqgDCWfcvKeYbETsNa4d75DzkfMRixgnC4QVecdZ4PRBi5ndVcdSEzenaD37qTmghnU",
  "key26": "5ZCnJNV3NVi44piW74kKmyynqDXbHCi39yhNZaF2rgqpy7QNE3q6sJUYoPoz1UgH3RzpFGd3XyYnnQnN6LCJVhAx",
  "key27": "3jHdHky8bwYKXFcBQ3gtp7NnvvSJiG3yBUCdoCEAZpezJ3wyAjcsFKH6Qjx1RhrZjnPv1fpWCvGC9m9udoQ16mzd",
  "key28": "EeHdvsrfHJNWzRg6N7t7hDHfZRKr2RG7sQaqeGwHr2cxZCrmjAKrZjLeGxuYhQVJeAjjn9Yboar5GgqcAtnjsgV",
  "key29": "4LbMS8jws2ok7F1rN4SazxhP9A5tJVBULtrfGJ3LjxgTG1pJqbz6EjttRJWGYBmkcSiWGvAofKQ8HvbMY9aFQAft",
  "key30": "3yJJWmr7bXxpPQBujykX8zFjNELtaoLqTLGWBqSZAu9Detv98gZyUBfqUHpeEo4C2PLHLEBkzaz7sfF9EFVSittd",
  "key31": "UAoqisYAV8MthTNsinvYY8xvsHQ5dykF7bPFtUEu318grSmJ96QyRtW8T5JLpgUM2g2AzA8zWc4wiYMZdKQBW39",
  "key32": "AGnqShckyBffbC8UWPGwSwSFAPChD2UZrFj3v3RXbjaY4nFPZ6VdVdJt48RXXnaNqkyYHGbo6Kc383JYHqfzwsg"
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
