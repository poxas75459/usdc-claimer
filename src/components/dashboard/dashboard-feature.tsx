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
    "46GM7XEcBk6GZ9cWN5ifCVGxpMQhcsMqQJs7pSsJsEjBDgsGdCj9rKw6MGdmaHPnN3v2gWh7C87zjjpzoBWybkrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e85oJf7FbpTBzRTsSDayaafmQUY8ujPwNcYCtM265cZaTJ91WjT8aHRPqsifNHERhZmmfvwXEPREXmyydxxVLNa",
  "key1": "5Z96uf5u1YDJwcYYeJSceRcL1wkh86N8d8F19noe2E9gQ2ms4pJGteLqUtuWkthQS9z7C13aPDGvSxzT74JretB",
  "key2": "4NxVhMoc2FSXQYEgmFyK8VJne1D2fPGHgRYVYPPFpe2Fq751ruAz8bASosf22FrM5jQUD7szqEGPc65ebqiAhBze",
  "key3": "3KrA53xNqVgyHrJwGdZBg5m14228giz9SuL8cQyjxzrjsXQYMqtd5CBAcVLooXHctuqQwUNasDP5dqLZAkEa2GQG",
  "key4": "a4X4hHwLR7VnANK8UQSFtoqan4KCHRduarqe6timDjsUKZ5FtjSZLavFDN2dXbCSkhh7RMiQhLvtGnbJrtq3iAi",
  "key5": "3Uu233AJ2XsVqVyZMW91JPFsMYpSTqZSjZWYNBDj1AEiUsq3Lxv5CdFK7PnL2JvZrp9XobKVjuajJ8SdhqVnezeR",
  "key6": "4V7U8fNNAYKQSzrQopwJbUg8KPQwp6yc3QEDLiZZmrHc1ZmWSCMgxtYjyg1gbJAVwcwvZKSsDJfebiMbyVNdwY91",
  "key7": "qKrZaYd6hDuRe1PivkwRgubeX5WEL9m1St9SYio741aR3KG1jC4jW3juJy8MYn4MXhdSEMCz6iRofRvjDrziFAb",
  "key8": "2E6fxrYxpV33H2YBMaDnr22vCDcC3x4kxFX84KXWJrYDEB7DfXg6BgFu8f3TPg9cD1HyTUN7SUZ8jiQtG7ZUGwxh",
  "key9": "2gcACQ3ycK5KEkhf88tFS8piphjVeJ8N4uTRPs7rU3CaMrU7o14u8Ksv79bYfjtYQmMXj5EcTo1ASvPLt8MzeXec",
  "key10": "3wx8Smdt78a8thSq2bYqKaA5UiZoKnBDkJhBUymkNy6FK7PLkwum8g2evp5dQda9F7VR9Y5h8dZEfddxCyStoyqM",
  "key11": "5YQ1JNtBhdP51fLiDa3yMWJ3S1VDkwKrMPEoqhaSwtv2d9pQkmRSHFrEAsNziVAMqEURjuzK2gaPLEsi5cqnyBCG",
  "key12": "5oEUFuG6KP8BE34jeQkf4Fa6tUp2jryCuzb73RarCmZ1VPPjrTVdCr1ZiNLRPuiyRKdhfV1DnCjumKBzhKRSc73U",
  "key13": "62ZpKRemkPy5G7whtPFS2vYrHddNSGqCnksaafAUuTyeaUmkbKKoasQnVHhbGX6Dfon3Wny6UfSCPnG2iRCZiAhh",
  "key14": "3K62sphP7rAcnR4ixEqLYiGTxbgEBxXTRStYpEtz1VfUFLS5p2LmPFdR8MQJVtnvSf1mMtKSriF6Cu8syLZ78BWK",
  "key15": "5WpVaZBmUkupqS6SHvuuojnzGsYFLiyN11wB5wDb8hPuEoZaW8bUSp43LAY3qjd5S9PNQ6vJopckf6P2GLBuEcKv",
  "key16": "2BsvqPzShB8ZRr2FvXbSJEXRXXLBzif6q44U2E9Pq2Za4Dq2HZhyk8QYurQa6JrRSZsAD8bzJh8ZDQJETaMYen6B",
  "key17": "4kJ8CR9zKbCfsbMQR9oDkzCDH6nHUUtJHJTTAyJFgH4aH6Gr1EgRWcL8tcUcT5uYudXwAN1DnGmjEds2i13WY6MP",
  "key18": "4doh1NQbozGZPuJqKHX3VAASncAxJvyj518K8mLD84bYKqcgnYdSnSkpGJDjcpa7FgH4yP5SV5tUEddd1oc33TZ1",
  "key19": "AdzNZtJaseqgphfiGycYK7LrntFE4E547e3L39DkpASXcQW8YpueFZZhDayJEbGpd781cKGLTVbSjFc5L667uZT",
  "key20": "94gxBjRie9PCmQvgQsRSqSjf8ew9iFvH1kqMqZaVadajdWgHpq4NwDGo9tPvUtAFFmX9hRQsnvDPot4LGvU6Vgb",
  "key21": "5jEUn3YWuZuUUv6ecPhUHt4uwLMdB7PvDSA2gqszYWuyhFoWNDkfV3qAeMNoYupS8zKEi7Q4ar4aHWkB3vThRrNj",
  "key22": "2MPYuApNYiUMznaJCGDyACTo4KbYHv93TpjuHh2ohA6YtUWTeAuyqKyD7miMEDcz3J6Gzs9NRNGFpY8PQ62tJ5Fv",
  "key23": "26cfq2G7WTGumu3gQwnV5uvo1oD5f5LKoKS4ZV1zi4QfncX5kE3XUnNXMqNawjHa8w96NSE1p2mDhGcQkSvwyywz",
  "key24": "46RLVQQy1BtxtCb5TcnixYFXqP52mytb7ihGtfUyuywUPTqzsKED5w54RUaEJzjPhXDhet9dg3C5gTbHzezD93Ko",
  "key25": "4NrXuEtGZmrN1k6w8geB7s3uThLaL3PFWYUjWRrvTM4USApKHWSYgZxYrFaU7xwiBQxwF1jE479uoVjUwDK3d6aj",
  "key26": "5BWdKqwRPCbkWe4xtxXbntjZKzNgED9kLTd6NwYHmAds1TCBZjdftWXWnvd6a76DRxKTX3vtMT2cqdUCtzEiYWpm",
  "key27": "47dzdiRByHEebsPxwkwNGi85LnwnbHecmB5AVfT3YzSJJBCjdXuwLb8Fin73pzHE5fusg3eWMp9CwCu9yqK8rhX5",
  "key28": "4WFAZWJDZRqCUYnUXUQa6xKjEBFV4sFq81CiNsyV1Mp8EY3ToPFA6s3bmUfhaHghSNULhg1WxHh7yr3buwNLhF1f"
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
