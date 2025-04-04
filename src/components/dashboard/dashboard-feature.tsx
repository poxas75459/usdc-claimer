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
    "5yg7etnbdpcrRcgp86gRLX9UC3E864GqJRzAbmcczQAjfHqmQp3d13h24fUMi43MbH5rWrUoQMdYPBWqpcLkZ7wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd2fcR5WhNjqD7kwYcknDfJdfTsaFWJ86t83LxHq6XRVWVuKQaE6XwdrKuR99BppH1RC15cuSB3ufhPQa4M6Jnf",
  "key1": "4McPbjaLQLHGWGAT2v9LS7H5bRavYFHoDyQksLjemcKiAA4iofQfzN5CntDbYQbmwwDsd8ek9cxtaXxabrgNFZfr",
  "key2": "66ZugxTDcxBGZeLJkpfQHrG8hkMpkfqTzmPfPGABrDzKnmfEma1hXiwVu8qUM7M7YFHQZGFaphwx375RCmyg94yS",
  "key3": "3AcfjzzfpdEKcAN3znCxLacZjfmnDqwvDBToWDy7Paunmqhw7YmmXGvwieP6AVKkxCNsBJgVJwMJVfJpHzENM226",
  "key4": "PSPd1GBKzx5Yo8EymY7jrPvoS46gyHRdvonKR7kq3PCbxoH52cFWTVUHNhiiThWK6SSxVJc9dpQnjEx3JNaBun7",
  "key5": "3RSEWPagN5LFttfM1RKs9veNyU5KVFP9wWmuLSRt3Uz1qQckvYQAqVK7gqaBrJEbdsbqrPNZaQNE9eugyLqTF4pi",
  "key6": "5byUh4Kz2sy1oFUT4eYL5q4cvEP7bT1PRJV4MjKe9GWAaGvXkzgTGSXQDqNGyNK3FFMy3HkBty6hJyyqLUpyDoro",
  "key7": "2nUkjjzZLTVCyHCnvAGNoCDWBE3Z3MCZM5CaEcg8XmF3sSSjkHQrcYZbPYDPGompmaBi2DLAarVQyq23uYhvJnSN",
  "key8": "4H3E2sS71ucNcuVMSga22j6qyUNs9Rv7qMbiMqEEFMPgN4Pa3uKZCB7jZekWMd3oidetVMqLKR17qMAAryawNo7Y",
  "key9": "3bh4VYEMTKkU9CGREfT7MVtpP7K2bYJZUoAsjYDfUBesXgJAysFgJyjd4P4sJ8n2jhV5dvVPMQzVm1biWr7oDPte",
  "key10": "3YLSuKjXg2vjRTzZ4CVWEB3T2GDt74FZGzToJqXg4Ha2cnb6qGErH5vpHXVK112zgyorACaT3mqyySoGFnhvxCPp",
  "key11": "44zyYmf78kJV5NqXwa9PLwZMhpvVGeePL9FRuYJmeGdadzTjZergW8TXh6bcfKfzooRDHwFszJscT7jdXEafEPLG",
  "key12": "ePQXfVKiGPYRCcCNh8U9zuygL1ikUjdDUehwM8ZPqswUKpVEiyTw8TvRbF94ugNJL5VXRHUQojCvHq4Jnb1tPvA",
  "key13": "Rua196QCHpwAYUDPx8FbLGaK4UyheA6sPMohMHFRjk1o3yAeir981z8HpHJcAZ1KjfY8r2bzqcBsfttfeP9hNwx",
  "key14": "335RiWC5vbYLd6KTTjtqPZCSnwS3ov7VZNubRbRGqsLeLznKDK4DWCBQHFodRotJRLjmbh9PLDtTGXgKk6xR4kuP",
  "key15": "5HZ2YkEDSwbmoPUE5FqZVUVfWksAH95ckMkgxthKVzmBXwdV66XSpXsJEgdCVLdXGW8yU3KddnKiqtC8EBhFxXpr",
  "key16": "37cACi5KNmrMRfGLQuBrPiwGUZp6SLaKmaae8r8PLiQhApskZU29MmBEawZGbxyEBNMQQUxqAsfQzhpWzCdPKg81",
  "key17": "TEsp1exF54EJLz2wQhinBi3znrz2G5i2Rn3cqr5HAX7VL78ieRsFUHonyok97zCUTa9SMDDp9uSLciBcVSAHKj7",
  "key18": "yNfe5UwGJDD9TAPSR66uZLAwy4qkgMvZR1MX3c52THy9AhAKgS43fz7Zpcuy5CVSPLoWnVY3xbyCmT3DANsyMxU",
  "key19": "53jjPv2zDybqKQbMh5dU3ZubxLBvtr5WeXoqRLSjB84kp9dDyTaBcS5tUXhF3v8LKks6BVqcBgVPczyZbK5FqkFQ",
  "key20": "3A4LiHi5srFJgb54BE2T4ktj9KXjQLx55x7GeYXJ71aP41skD66fjsUA4J2EgLR4jLmZyak1yc2uG8Gi2aqitgE",
  "key21": "429cGcjjkCH6ysVXMcMZLZvap8Jc8MGeao4z92dsfguKUZiVJ1mo1Q4MseXcDbSqVsP2XKw2ZvRpY5epvTc5qM5w",
  "key22": "4yPybernWtXu93qoScgh4d6irQY485MGDpdtLowtznAybgCx1VZLJ2V9WY6xzeh4zPRC6rfwGd4G8dWwYHjDEM81",
  "key23": "28iRBNdBtL9ze8DV9KGbTULr8XaAmTYzXamHxxghDC2y57RqVsLTKDKdc3o379auTD4xfuFDhLp2KB2SH9tc12bU",
  "key24": "2br7hTX2oT52CpGDeMUnKRnAPTf5eaRAq6PE4EjNRhQuzQFe5aHYwSLakhZZ5yV4J12uAoaueEec4toNyfcGnBpL",
  "key25": "23koSxtHhqtityhYyoJMmZ6bAF78B5aMU7V4FGKyFWQWksFXopdss962hyUVQVNKBmKcjvZ7HGSwCWJDcvMYaJkP",
  "key26": "2Ar8NsL8MYaSfeHxZWCCCJr5oPNxV1KqxJBWapQWLdYjkBSYLhTUVVYqATjmrWbL3vxjRTawbBf4R5CZqXLQaTxq",
  "key27": "4DC9jBfup7VbZsSjZZcAhnC9USoougiXQ6osQebQLjSbKUuAWURAJYuFueu7ssNzZ1VUMGTsnrDf1QqScdcPm2n5",
  "key28": "4KHaCUf8kWZ1dgigXaKetgEKD7ikKRUzXRdAJEnZxDa8NSzoR9FQ9kaqeRe7pv3RNUCSLJRFie2tcEaeapdgJ8u1",
  "key29": "qbEFHgLcqQWbx9xpaHHRRrdWpVotcaFeBoEpFGhyvo1cWp98biCtEzGiWo2MwDEtCruRhCtojXLkWkjKni7r9bt",
  "key30": "5yoejxeCmbwby7DKrNZeVW2X5ibHyaVYDcJoR435AhVYVRTQ3GUk982fbzYnKz8pyPiHw7CiTpthLGcZcm3ifAZH",
  "key31": "33Btnh2Fdq2UcYwY3kGeX9oVVUR2qcNYsN6WSvMKbpLwpM41bymPfRAM2xZBM1Rzb1sEKfM6fTS8HfUTJzJDXe5a",
  "key32": "5ZETokAifaM5YymTS2SK3VvZxMeuUR1eokAqpVxvctYhc3mNrtgeFNHxnzjcmjFeQw4ea9ZTPxMKYMPYHcGFyNRa"
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
