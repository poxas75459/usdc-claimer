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
    "2onBDuvTdJ8PCVvk54HU7W9eswR3eorVsCiQmKSgXr5aiZckN1KVB5GFKyTZV9Wof753XtAiJDUx2CDRKb92uszG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7XygiAAW6pazZ6edu7XCuhC3WFWv5QHu5CdqdHJSZSoyAQiSS4D3ZQo6RpxxwxN1gso73fz933fBBASfPe2AA6",
  "key1": "5bVDpiByQJa54JWJrDVGgbcwrGxFZ6wweyWpPuPnL9pWCdKdk1GYBVdg968xLJ7sejfNVFSEtc9WSExpyW7NaFXK",
  "key2": "38ycaaeMoN51TDvi64N7uWK6yreMM8UnCtNfwbhRXXhfBZFPAdN7afoMjddDNHkSL2YB7F4eJaoYTZY7B1m3ao7A",
  "key3": "4raYMek8nAWMa5FQRQxJcx7hbmaWHLe4qZLhadyTSQz2Roh6UqpC6wEXncKqPymAwGsvBeyEPFFt7AdE1imFakxP",
  "key4": "3FEURsRuaDxh4Da3tLrzCBLSvcHgKg4WQG3bcpq7zaut2VtSCtXbCQ9eDvbpGxgw68hAaPT1Sjygti5SBy5XoRyi",
  "key5": "2Rso3kbzf6Ztcqazq27jCPpiZKiimhaKdDhzjJeWCbtFxEmUakGQiUQNhBchGYTQLJh4X8e2Z8nYnz7zKCXwcCEF",
  "key6": "4qHPDoz3hXEZFrBgD6VycTfzJmMJwL1P8s95PQQpHYMo87o43485tvt7YbrpwECGFracRZh98a7T8x2GFGTAzbP8",
  "key7": "E4RtPVT7jDubyYpK1sGMxBZ7ioeCe9hFU54QPxzpyeAJ8vsAo2tCCnVfN6mDtoo2rnTcu1fYsHbi5JYb6pzdydm",
  "key8": "3GNEmD1LSKf2Ng5jhsRKjDcATeF537WD2MHsr5KJBJ9iYhP8QmnZXU8MYC85eEQff8Qp7PsVQAwFK8zd9apByEkL",
  "key9": "3una1H1W7P5KAjtwJod1Y3vcHGrSWuJJ2ieBzdJd1BggpSeqsa4n1CpZ7gfzeXfRdauXpW7KnimmBuvvAkTMwooB",
  "key10": "3w8mXGZYWLJJKCgY2Fmc9PZV81CMBzwjv7sthHdKSdinxXQRGwSGofwp6YQSygfytYUAZQBHGue7hyWy3AfpP1Dt",
  "key11": "2pcHUGpoXozLqzRZSiA6fA9Y7EJ156G5bbSdSt8678HK8Y43Ark8qqTv3wWGF5QiCBpJFKsD53fLQVp1bHL5eu9B",
  "key12": "63vApt6XWhetY3mtgon4BAWuhx5NQHbvQafc7geqvrtqh1rnhNHbb7WtndNMTz5HqERy9JKVQpZXrb4ypiGKD9yj",
  "key13": "4yYVUfFywd21jsaR37kUoHPcQETDcN4HsaJu9iKCMQBt9eJqrzXn9gMZ6Khb2Hbb5RWLfNCfANMZjjJbJiDpvQQL",
  "key14": "51gTxBx8AsjMVCghunhSH2Z5rMXpoMBYBkow2jhEAe6Aaku6EAJjyDauuYth5b4qFLjKmfBMjVMjzZ1apJe9huz2",
  "key15": "5FJhaLcjXRxBVbueuqHvWtvdnbMSK1cDVrQbHT7FWzAAFid3poG1sghWGqXtvdokdrCGybEYc4g4v3peDqBaQD9K",
  "key16": "5GQRJHxgvF7z2eBTkRs65ywyB6jaoFWR97zNs6s8dbivtAzov5BZvtCU3G8K8xzNxnkeveBwhrApGr76ZyA1U9zD",
  "key17": "2q6koCA4rUKpiEMNTg8StYFTVWBkMQdwW3NiTkRYuk7Ac28cxqK8LyRcAi5AXpPiwZw9Lb1h1sXJ57XRRMj19het",
  "key18": "2xq9xopujTDzLKuQvZwDdzeE9gvoFZNQjFYPw1nnfGnFE8fFPMLJnwgo1g6Wo932Qahrf2w75UXkkxKTFvmcfLmM",
  "key19": "5WWtXdNTgF82HMCDNnCQcDm9d9YatZnDAxqAWMW7i9xUjmfYPCMukjAn7ZpASqoFCoTWgMQfVUb4WxyMfm2n9i3U",
  "key20": "4vJWw8fivMDXtgHo8aizJZ5jDw2QpE5SBi34EJ5ccSYizyLhbNChfuJ7iLmxXALCr2vV1LG6jPCgM8Pk27D7to1X",
  "key21": "66tX1yrGT7Q5byWSWUgF286aCEz5BKRwwvhnhpbteqdxyftsrf3b23iaoSH96dyQGx1aaZDTvyiYS9kot7FbTVxm",
  "key22": "LKgM4qsif3USXq6h1vzMEBJGw3aJF4jieeut5V5KVGcKxXXmxXu4y116Wf1XipCdXQzd91xmV8mmxBFidLaxkpe",
  "key23": "RNhqNZUauaSnt7kKcCjjocVjZwWeeLThm5zoYFA1ixPNRPVnacE825fkymSssH3tiV3peJsYjV4zrSazii7oETv",
  "key24": "pFMxW6kQqcv1QBm7f3MTXWizw8pPnhQ5uHjRkdy4neACsiJmgkdNXdEewEko7vJTMKvzmWCVBSmCnpbAHWDbYn1",
  "key25": "3zcYQ8VYdiCW9MdU5BeYdCxoPJVJ3d8WcJD7PErKowP3dWiuDL9VbmrtapN9Da1tXbnwzSt74GZr5hYm9qp2BAM8",
  "key26": "towpr6FgBut6MqYDUc6eoLGtAWe3giyNRBk8u8GBWxAek2x3c9iyX2PhwaWYTirSBQRdRNwbswoz2rMiKzeQwAj",
  "key27": "5r2qUeFn59p7ZE5uhQtKFuNmm4TXVbHQweWbnn77YDuyF9r8xfSaF3tsmZRFu3cFyrYEX6MggoJ4kpjRLwRmi45L",
  "key28": "2AB8XZ13RbKmreW9jwAGzi52tU7N12Qp9XTH88JFR43WtXDzDXA2jZe3BNghJe2vezeYsNotAXoy8EDxnSgFHGXe",
  "key29": "1sEeitkDH2YZmZBccmqwYzGGpKsdtbSNz1hQLtNdvvpTwCqLyN8J2geX7pqbLqd5S4QduLw8ytA5LqqZNafbDmL"
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
