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
    "4n9drTNQorbuqu5oMVw3L7FZTaZGHMDNKYMxsFwzKeing96RY7zc7uzaYTjGQfnY52QWfeyZPZfscrH3qzLpNUTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrCJq51fP5iCeww3uvBiDpUECyzHAeHQpRoCuAg5WkBfCZv9TrNcXjpmyCydvBnEwE76PmyJBmjUj1EQZxvZZB9",
  "key1": "HDwYfdtb4UrHN8ZWuXu2iRtdJPHhZ6aGSCkY8NPkFdwPW5mGwqzxEWPQjDXHoV7HMAER1ci4kzUHnxAycdNkyLT",
  "key2": "2gPdZExcHyoEKtJAdH3juWThsCRiZ7iFnAqVE5ievw6pwGDn2SJqyxmqiFB41ShFZfLx3Rr7JWcGUHKw6b8gYaTZ",
  "key3": "28Q7SsEudsNioT4FSvJZehHXZ1qyHNTFJmyiCxdS59MmrTUQce69FzXH4TFWxf97D9aVJtqenEs5ncZsr1FJe6jS",
  "key4": "5Ywsqw6taWJYE9M1pRHdvv6dJyKZy5zTa4wMBtcRhd8rHq81ws32qZnadHw557exLFMVC3otTtA9vMEd67iihjrW",
  "key5": "3UaPGgoiVKccpFv1mQWSTcZYSSLyA3zgc3M3nQZvB6x5KhDXktYr3E5TXaq3gMzXtUNCz7kQfaq6dZpEpD7v9ADS",
  "key6": "4TshbztXwsEQzmYGoWxET2d6i9h9HDvgbjRAFfxH7c1yLURm72xryKCBgM5Qr92veJDdenbkK7qLcTkAJhPCt1TM",
  "key7": "3Lkj5SUZa3XEQDXf2BoPtDJ1mhJCvLdS1KTukZLYnKzS84tjfXm7EjWjkgvWeiu3FpTsQmU1jqRxMmzTozKaUCRm",
  "key8": "1RZpnihQUcuRYJmGATmuiHSFhvJ2r4bS3SyyuM2Uo4Gup9WiYi6CyDUfojh6AXMxBJHdVSioUnv1EryZBwk4Xsy",
  "key9": "4sU1HdY5t6hukXQuanLLu27EWDH8Wa4TiHftH57SwbFoWgQioc7XiFsDVz9N7kU4bnXcwtS8rQkbnrCFkb4srpvQ",
  "key10": "3hH5KCVqqKG3bh22BKSDR2GoN6T21bTXVT9M7rS7xoFoNeeR5fBD7mVdTiwqMmyNMPvJ9FurHZYvmh4AzNzHq7oc",
  "key11": "3prU2qTYghG5saejJH6MGYHK5iPvuAhQXh5zNYt4FXr9HevH6Y9u4s9mcMXujLZ4w7wiDRkTsNJkJGrHkKqKRnrA",
  "key12": "4DhqqyMSvJKtEPMLZXjAVdaEJg5wYa9txGqpqNgNv84zTUkJRjDzog3gjqtYkwg6gNUrqcKBqRbKbhWrBVChdC9L",
  "key13": "3npp26dVxe2py5mfsm9GcJdgodVmVSCtHmZwTjaLMTojzDT9aFmn4BVmGc6RiUDE29r6WF318qCKePD9e2kEVZXk",
  "key14": "4cmYdtLBvBroyyNv7SNQuuVtSP16NPwBQDJBGCtdDXMcJCPaUVmfAk13WZRGhJYZPdSHdMHDY8jCaxH9sTc9HFzK",
  "key15": "5j9i4nUTEiwTiWTuVS6E6um9RaFFQ14VXcKKBwDQs2YiWvVzXYfydtbMnipcZbtkVZ5tGdQi3HukZw8GQbQLgncR",
  "key16": "4HCeeUQSB7DQsskgNhv7jK1t1UYGkuVVRU2wxDpZP6AomWkBEiktCa9Apf85BnXSTCTwxyxWBuq5ig7AHq6pvB76",
  "key17": "Ewae6e2weCDrmgruEor1P2AGUefZeLcpeRnc25ZYNKxBoCdsEfJsDNz3JJkMc1ArhE36zrRgz9RCzDdevPwAgxM",
  "key18": "3DVMCyeWr91WqNrACFmDoxc6MM6s4o8Yv3Nm9gps5WtZ7yoQZG5jWSGUGSgQAd8Tkvzu7XVGKEEgvFdJFPqehi8s",
  "key19": "2sDK8KADfxBGoPvWePRXg227xipXjCgGY1Vy5UwAJmEN32eSUmWAAo3pB5yZX8iNAQqzFJsZkv3Mqcq1FnUtxiUW",
  "key20": "39s91HDyfvCQVDkpbJcnSToJnMoMAexfmqEq3dZP9dV8wxH3wsHPSksr5NJ6JfCnhFvJ45pKaqRVbqzqJ172dCLu",
  "key21": "2Td6gHxaUUvG78VwUpXevi2cvLLB2gQuhZXgFkuY5FD4znqjVgE29E8YCedEHWeoYHoumNkrLc1749BJLJjVfmnF",
  "key22": "5PB9eEfCbxs8xcwgihY5WGYHwU9uj3rJ6ChrGHrpYFrWaQSumhpL9z8xxXRhimrYKrKu5LgJ56QoXKhGy6pRScSu",
  "key23": "3WBwo5ysmGEeK79hbMbJ4BBESdQ3M5nyuX3dounQPv1gQrmXVbb9iZGmaD2eipigGVTwYxfpo7vkonHvSwr6heB5",
  "key24": "txMwrr3iFKmJgqxyQMj68QT2nTsJmTNFhr99C6qR88tKwkYRyFb9jL96qdSotoDFHpWR3HQLFx7binWCc72rcLk",
  "key25": "527yBGxVVXnLAeLwLMnNzxntWxzRo9XWxWqC8PhraZqBW3HJRXoHAmNkKZQXPw1fmdxniPDZoq31gQXQSFMyWc44",
  "key26": "3r2nMD4kCh3sv4fFS4QNefW8NbA77i1rk2Qye8m9T5ij2utyFhmj1czn3HaZ4yK6jV81pZHUWBiP83QY2THMMgdb",
  "key27": "5HzoqZJM5NNrjxXFUJsKeNfcv4fHoMWTLzs2Pk46tHA5vmFThkshxUBLvt7s45BgoTkbyAM5Z7kRFfw7sTG78Rxq",
  "key28": "3YMFpbvQH4rFJT3nsqvK5EBmReHkxypnuDrkCzZQcnFPJMqHeEG8XoLPzvmawPkR9tieRJTFff7ivbuWgkT75wWM",
  "key29": "PgFtFaRQFEyemms3QkEqUxhtZhpMurg5gppCQQxpZJho2syCPVwwytWJxXYsfB9K8zHEKYeR5xMbj5ztdMYtSiV",
  "key30": "5JkasmbsVmEXGPyTJPieVnoXMuUUQptJ9w2b7mrQfbeqPccvUHZdLpskRMDV9TNaeGS7qXUEx5ZaRe74zzYbXKem",
  "key31": "2SQonbwwqzHvPomaaF5fmYYWwezJJqV5gWxeCYVLybWDfyiB9NdmT7eZBWZi67AwcKpM4qVJ1FZ61BmueTotTjTY",
  "key32": "4yx5AuYxEbnXefCmDa4CyhyTGRR4LD6tvUYPT2P9e4xw1n2ufMpXrcBRyaZUXY7HrLLLmaH77bCMi3ZvDuvt5QsT",
  "key33": "3f5EZ1KgaqgMKZtHP8qjUFosWmnTBynLNmVpckfRfkQnXbWiHn2kNHCnXUCjUuPvWgwyJXisZBxa8d2xU4B6spQ7",
  "key34": "2YJfEXXBAnvUkM5tXUNegJzeENcHRtUKgQ7j5HCCVn8ZCRRed8kejhaVmdwrVGJHNV4RLXAkp1e2XQWrnaLHpRwZ",
  "key35": "2uwc5uY3j6e1zynYQisfoP9kgbBsF1v5R3d7L8fGxhtyMs1iaKfyUHCvfik6NrpUPBdyHfpoDAVdSemAqdq7qCJu",
  "key36": "HGCPG5qUKmWWszQobBQwnfPvbakytgFY8QSKU1BL3brUbCNt4hW8HZWu9XxPcWuqnk2dgtiyLTeeyUGKyjZk7jx",
  "key37": "xRoyCGadGv517e4wQXyNZycAFxwQYfmYbX7E9NvXNrQCPYU4PLphb4g71cc8E9MzyH9R1WxapMTtQgi9RaXY8EH",
  "key38": "4FYStD86V2CU4ici5pJ5g53LmrbLEYtGnQ9my3eqxLv6VhhKR2yyoCdVrKCcxWV2g1AsubH9jujw6QHY3rvKArbB",
  "key39": "3oF12cJmNy4iwRT5wkuFhFHEbuv35ba4fkJv6e33pzCEryNnZNSKfrvzHiLsZPjJGwN4R7yXng8zEVhUJZeRkaKV",
  "key40": "4YzZeJYtR2HXQfddF138zbW6PhJCbL938MCdVZsZD2xvRzL4jnRQGkxWTJUoMkhKuxYLzin6watmbmsRK1PosST1",
  "key41": "3YUJNH94dDWAYRFNnxtsQAZdxEsJjkgK4aLcmbgxWpfqPPLJpbU3snw8HAAedEpVKxvYsaHTcod3dbsGmQLdGvSN"
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
