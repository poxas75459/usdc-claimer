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
    "4jhs8qjotMbhEoJYDP1qHxNHGuHV8vjjB3ZPW6jC9qpgA8mQ9ZVa1X534AfEJsWdBz2n8xGwrvSruDmVBob1JRou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbcjxoV3EVs9fmBnRkpw7PRVPYruXi4CzaPhyrJNk2is6VTPPJSXp3h72C8RUrmnXPsBLAkGjuGGou1Z4aQwC19",
  "key1": "3NLhV9gGErXXnz2vg23Q9oQZDMkdgqMeb4xETCmS4yHPnbdCCtYKKgvgCmLHvGjfx27A2a5PPSmRG6ZAayrqEm3j",
  "key2": "qPyAV9ZhHy7aj3XGy7yuhpuDaDTZo5DPxZeFWTHGXUGuyjvVGBRXhDVcE1dTXWmvteLnKThGdrdmjWHgkbM4oFJ",
  "key3": "25G2rUJTYqNeFBGHKn9Qc9c5JtKwQZNAsNp4J6XRzCtFnLGhYmXnjCq9JosvuPgk15ssoLrkVyeh2jdk7N4o2sVE",
  "key4": "62ZuwwrZxEtzMSDsuj4zGSSkwd2b3W6EQMvCtJMpJPH1k2UgXBD1g5mYbu4YsyhN4ShXjUtRo3FZrpUdaYtLbkLX",
  "key5": "3WdrEPx3S9SjtX8oZJK3hrrG6ccufZ49y6JkYDK5EUoGAywZCtPH6gkECDLHVZwe6tybunk97sisZr7xiSvP1qRB",
  "key6": "5kZN5N4k2FwYBMZDzf3JPUSVQyrivxHos6nFhdhtysZvc7sq8EW2yZRTHBggNqENJmcw5GHcrsDHpBD3Swm48oVh",
  "key7": "5UPb49PdEQ9uWuU7QzeRxrGjMeyPNZhEcLoCkqRAtyKf9aLhH81pgQquTzkE8cftpSkyjZnojTVqWRdPFPbbxnoz",
  "key8": "5Gcss6LWvr3uz5gXdAB11rATcdegZPoUWFUmXH5ucYZUpSo13PreZin3RzPcMs7QNJJwvHXc1GATx9546ibDv1Sk",
  "key9": "4TNvHLsuwEfmRyJQyJ67dKNpKB4gQpqBKkkjaYRMo4mkJ3ubXHuwNWs8V2yHi5KQnQDuABSzCQZf7p6FkgdiPCMP",
  "key10": "5q3yS63zf7o7dGf3hyXov1p7C8wmPeBuVpLC9Gs8SgL4JUYmonQq9LN8LFuEgscYeiEmAJWZdWN9SWuBrrnHaFbn",
  "key11": "YQhqj2oCwtJCzB3wKsKQTR8SXFqT55ZDKFXnCX2Tb92SaJMP3gLbF96rWRWgiNyrcJwEeT773Z6DvPgj67TcrCB",
  "key12": "4pBzLgBEkqmg5vmwvbufShP6AmkWqiQQE5T5hZj4emkAL7k8STg5xDWPtR6oFgfzEdnFE6ketWSxK2qJbWXTXywj",
  "key13": "56uZJD3oDjrVfAu1eLpMLYXmA1HaiM8TheQ7sWMQVCYtfepKXToM3zxrkf32piQv4nW8BzxDFPszcBHUDr7hEnxf",
  "key14": "2vrT9WWRnCyYETrF4mtpsP9MoTC9XmRySMoDQt7Mc7DWfPPoKcSyRFNV9PkbrzSVhX4ehYhXLR8mjtUaBQJDPMqL",
  "key15": "PMwKLHjuydeNo6YdDCWhoC8cx4UVoj6BuNGBLJ99is3U1CK1wbgXEE2kBpZh7ozR4vh34YhR3u2hy659iQMvFd1",
  "key16": "2nhRVu3fPhvNcHThPBT4v8ffY4KVKCnUSr6CBWkwe55nsse3Kbi9KtFCdDs64pRakcgMUW52sQAaAQQBhPdK55am",
  "key17": "5qh6MRyt4faeH2cXJ2Lc1i2T52VPPf2b7U8QhM8TRErUMviw6hnsmQKvtpG2jmofAZd21UVJwzcrjXDcu91Kvpxh",
  "key18": "2UZeerW8LjcDdP6ZErCeYxesjHNf3213cYwv9nYiBacc2AWw6zwpExrAMMu9PdQXFKg4CftpWowAjtBQ25UzxNp8",
  "key19": "4sfCDYWebC35jrBii1sXspQUp2TYrzf9uuwEzmDwwDJFH46WpHY8rHCrCfnoGXLG9ojV9hQqe9HVWGzrgrFWBtrt",
  "key20": "2khKoxJy3jCTHZrg7n1NUWYohfWaMXZFSsxtJyD8F5Dco9RWnJriFjET3xZgmSPyZAeyZBNoEbw4VAyq1tUj3Xvz",
  "key21": "4PwupibJwSELcX6AiZp1jAAtqnQvZ9VfKwoQxL9HWJah2g853X7WNQK2pvuoFaQCQYnnormAq55mzA53geZR2EEp",
  "key22": "sN5PKpJZZQRrxv5uJCfzTWpp6nmuk4ZKTSYRSg3zpC8mbbefWzYXijeFNySusn5D5ua7nUoc9aQR7u2E9UmJ16x",
  "key23": "DZ9RHjwrZY8Esi4iQ3qYK1z7jrSDkM7bhYRB5bXFX8PG39d6qQcEPrhezh7vTTJmSZjXFwgAhveT7jc6YGdvMXu",
  "key24": "2Bu9xXw6UbqTm2ck1XwZ5qNC4LXR1STRFpyw8mg3amTbDcQ2KT9AdPiq6dWAjrBi13RLqwnxSoRqaB7kzTk6o6cG"
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
