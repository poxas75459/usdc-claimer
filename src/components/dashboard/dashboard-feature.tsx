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
    "FuWsDJcMsMnuUDcJRD6yx6G3CEG5jP7F7WceUotWVQb32PmhXJrubBpJq7BwvxPnr9C6jr7q1PpXWSXZGTfVLpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wzMcyUrUHVfutdgxaGs7vKjxL3tRx1NCgSe4TLCym1TqnJGpBQXwe8eosRpVjEsHgME71tbEGFo4HZV84xxEbU",
  "key1": "2ieMNb4LLVk9ASRoUoguisT8yP7q4TtSE8cUDQowT7uGDyfJXKgoujgmCMzf1NosyPr6EJMzSWgzF6rjsDheYt66",
  "key2": "5qoo3U7fbQgKqkLN4fMXB9Keqq9pxQBmifNAE3TsXsxybvXKPS4TC3YrvmpC2sBU5dNSVaYHY9absBSxFZCcFCFH",
  "key3": "3wXE8eoPtFmXWHUfnyfhRhobMrrjKiifyCEE8vMA2edy2ZcUAuTwxMauq9DZRBoGWwpDtxSLY5GqfiCBUpBnRXQM",
  "key4": "63Vunb5nMRRZ1ML5VaeoS8LS7STS3JhRYjnhJqhmwV6haVzxdGfXtUSCaR13uNiitiwXEQAZL43g4WTsgPPzyS2Z",
  "key5": "5fmKALJgSfmfi3E36oBszbtmi5Mr75BtUSitcdS53Uaw27Yiq4ymBdFYb7WwjszNctN8D5ybgyA7bNR5D1m8g2kZ",
  "key6": "3CEUFYJfTKNjLy1sxwKnd43Jkwdc8Vi63YTSipGLfDcw6GrUsoXozJUWahYvL5odWgfcSg55At8RhaDJSgQq1qMe",
  "key7": "CCkWDDh9rYvWdMpRiAknNHGi1C7Vi2Q2AAdrvhAMxYV1uafur5odcp2QDYxnb6v3QLk3jbAkMZXcNcRxrQuYW4M",
  "key8": "3RXjK9htg7x4WEb3EtdB9EUSHCWd5NGq6yxkpFkMcfXsAPdXnyH36HLUqJNUPmsqj77p2n9S7vz6i6w9bWhdp3fM",
  "key9": "p42gNNEmpu8QiZVU3BabNLqvfBuB2hMbuG3STAfM7s9mkEYhHoATgibnWw2wqUwpcTanuvsoqZ5YFJcACKDJ96T",
  "key10": "3TkDhhZuDiMr2eh9Tvo4Y1MRnLeaUC6cbtYFV7bWW7U5AXVRyDAszSJcZkB8PYnKfVHWGew5YmYjAihoPSvx1VNb",
  "key11": "38Lti4n9vBHSrSrr8MZrFpc6fj9xVk2By6fkKCXoa6fWmYqodLgxJxukBcwhxdD1dmxG8M848RTcQF8PS4qgEQRB",
  "key12": "3ZrD6wFDu2wi7nQcs3ZuhsVqHSDNcwJ6yBFpsYYTnxUseapk3PXQ7ucD5TGFdT8AjWcnu6P7w8VWESSAHvoieyqd",
  "key13": "S5p9N84tmt1gcniPkzXEZC8QHDkZEhNHx3GRv1Jtutjyd1TUVTFjS7o39bmgmb3VtpoUFdyG6PJANzvk2SDT5ha",
  "key14": "F18BqhQVtGXs1avP5T61yFwuF9eAyGtEL5s2ETFkqZcd2xtj19A22fuEe9Dv9n1WaozW849AYdXrgew75VRdjsH",
  "key15": "5hiBj9ZLgurZgkoMoNBFHt4kXN9KdSAeV96ZNeg91Km8pmxqnQHpfveawH5e1siojRZTeDBJzYWoEf21hb2yFKq",
  "key16": "2VtMPMmFnpe4B9UDycKjVqGTRpVAh8FSfER4mqbES2F7PqAZrjMsTpiqSZPGKbRDNxuSdwF6VFNpVybkY7VNhhNt",
  "key17": "cPHMqPvudmEiXfLuVEvupNjJV2BnMD2mX6bQ6WWMV5FBbbk3XjJJ3bCDwp14NKFxYWRN1B7iJMpoR7MC3Vk3Av2",
  "key18": "2F4XSgkCPtpXcL1a9hHvv4v8xEAmaC6LcDbxvwCAJkM38fcjEuZivkCaFKz4qw8uXSdxo5oagxbuQQ5jM25WmUbj",
  "key19": "2cMEFHg3M7EnLjZjRSzBMdUK2PczuzQ5fMKgcJ9xxBUKsxHFNfc1MLQWK5SGegY5tn6xBNu9vYM86HR61ARvDNSE",
  "key20": "5viYgBaBCf8fR3WLxWSQyqxwAjZ2Ezw9ctozvESBRSpSBXqTFy6qhBm5U7Ko61KvFTqz8qS9kbGzTYnByVNzWaFf",
  "key21": "2iCT9xgfuJTmdqGGNwe3jm3QfX5iLWDBvZ3q7MLSp75MnjAoPBTf5TCHZTebgYQwPVXtyYTfzrD9TvHYNyUHjM3A",
  "key22": "4YGGNJDR1KTaxDK2bP3Y8zYdBB85gomSjKDQoPJJ41LybY68wKNiGaApCtNfQhc4UGxJ3gUjbX7wB4kvwMGHu4Mb",
  "key23": "47UfKgKG7py7oEdAfXx1AsTRnqxTPX6gwp96X6oGqUNbaSy1HGnixEC1pJmwZcCTt9r3MAqnsLoMoEr2KDEdWX2",
  "key24": "4muf9CkL6b3xjq1ez8dEm7vaop8yQqSS6MTt3xKyjhnGHeaT75cXZbJZspkUNv24AEDQb1RuBnTWtGhF6RCeUF7U",
  "key25": "Rzo6qCvu5Rdy2zBKasqfFEEpc5FYa4GVh4J6uH2oosD14YEHQ6SfuSR7FRrDxb5AYa788r6fiqFHZ8fpi7Nj6Cx",
  "key26": "3GY6dhWAqh3mUfNHwfJ4cedt3YeArcCGxyGuv3zxLEbuji4DrBrqhUfHxCfiDnZ6ivRttcnvcwgoDKUZRfpF4Lha",
  "key27": "2pdw5FaA9V3tRVxKt9M75vPwJ62K3FUYaJRUUf5Xpah5cJ4Mwq6m5EqBocHwtvvh1Fie3NbfA5UVszTkqPSq473N",
  "key28": "3oXxCw9TCepXiBGNp2BpwbybmTMvHeUC4VDci7GCx2XBSJ3QDj4L4tXGyWcqbiSxVSDficBQwGyCiEDy98yoZUmZ",
  "key29": "W9WgVXZjJQV7cx1oEyNp4akQViRfuVWTGiNi6CD9dWD9FusofFBvTDH3VhVTh1ref667WnsRrje4pNaDkKV3q7e",
  "key30": "2J3FjXtvzXuSVa5NQvXNaeh6Ew9fRJZx77PRRR31z2jmqFLEYkcm78JHo8GQ6aSNDAkoxNHX17nc8W3SyYVGUyBU",
  "key31": "5T2bLJ8hZWQ3PfmNavdpG16MEftJ7uTAZivputAhBtZ9PAoDa5Wt6MnsHWUtSUAFyFTnbGPy6SC2UXAiWCmJn6ws",
  "key32": "3QtroYAaBiQBRTWnKG1Bkf1nkMUTMaqGY8T3GgpasAnnQNcALorSgYY2tsmLQzAgwAzLbwodJM9GDfNavJDGHbG9"
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
