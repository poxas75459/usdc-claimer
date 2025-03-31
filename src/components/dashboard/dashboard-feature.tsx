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
    "5hAr5dMoR6VzyGAEh8A2bSmsWwArgvT6hdyHrhWrmsdt5Q4dwWDwPKuQK95rPnsiZMNVMjdeXjcpFkvBDrfkKZsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519tnwK8jDkx5aU7wDwo8crzhmu4TA7uBKotPTf6FbzyZWUqqKKSdfa6ohUaKC2n2TkgVAnKpkGiL1M74RV1X1Ax",
  "key1": "2C4n77RWEAXyTVSgL2cToCqDsfczQyXaYdVsCeoRBPe5WMMhCGCWRPEZsCVVZzrE6KzbnvaVhPfy5nR6oJHpUxSu",
  "key2": "5nRgQEAAxmD3YsjbU5UayHMEHTEbBAxjZYPdGVg1mrKiPPR6EYtUP2wbmErtwHYBDnzpfEBLAX2nGfUb4PmoYVDZ",
  "key3": "5XJLZwJniPnUa3uWpWCH8p7ur11u6hya4G56pAAUPGBcKi1gc8jqbK3wiuonUcoWABfMfwhYrC9BxaeQ25iG8suT",
  "key4": "5Pfs94sPqbwCPSwQReLd5WjZtKXAZZ4qp8gQmFxkxux4GESSzxBQucpyDb8ndx2C8kc3WHDQPfzxddhZt7WnZcUf",
  "key5": "5Dc5rGzeVjNnbLXDooxbaM5qbt8kBpB9MFcQAhYvPkVPt6RdVS5T7vwgjjLxL66CqhR7K71PkpbapVFto3b7vm4i",
  "key6": "33WEcAyndsCzZUJUHwKJUsqsQ7SCbmfD2amH8N67mLBaxFuVxTkxN2k3F87Nn7oT1dRsuR88zUHd44VBKo4xjJDd",
  "key7": "D9BCpYozbWxg8AvHSDJVBQi2sKthDWA5RAV4j8uhrCJkFsnDW8LqhvxwZzFFCbVL5Jtbo4LfBABfxwE9bms1cfv",
  "key8": "Hy55qDXbwawyDDSVq3LjRc8wr47sBhz7x9D1dzQSiEuBMEmBD9qaYLtx2zHDvP5xqwNrPa4kCvEZWLPh1rSQaWM",
  "key9": "4n5jaKHbyGyENheqtbQWVKcMQ5DdvYv5rWjf6CXfbznjsbrr7MPtzKBxQSrrQxS3Gu4wp594Ak3wsHEmZpmFzWdD",
  "key10": "2Jmng9MtXJCuSV7PrFfyiA893m3VeixbTDD8gVZqpqgq8FrYxUR4XaYxhngPUD9cZXDqZb8iD5QyJ9kF8PTTxvht",
  "key11": "3ULvRKWrYyz2CXMELHRFY9XPr9ZaB8bMkKozuC6aFJ7UKdkhjemuzzLnquugwHGWskoFAqUZFGfyswxoAWB128iP",
  "key12": "5mNPdXUUSYShPBiZkzJ1jTHX77crokQbsKDjW2xZ8qTJbs1R5KsSqY6UVADQRcnnxwSzJJ9fTeYauchLJ5wFUW6U",
  "key13": "iAv6Tdv2YmnVAgRRB4qBc1LKfNgjCAdopVt9mRxGVLznvhxEkqG9zgJba79mP3i8CyhjazDGCNbtfRaoDi5tMPM",
  "key14": "yANJS8AXDnesPcG9vtYjdbUVRp4TTLqLavdZADzWuqwtZoRkvQucj6gsmr9jajVy4AmbDQGF3gfXgVmakXrsVH4",
  "key15": "35qSZFTeGX87CHubQ1ki9w59tCPazUopvkQBZ6iA9fv93Fk6jg3JAfsXk4tUxrjumAKJVGM2fsohKxjqdRhVqUkg",
  "key16": "47t7GCUbAH6XJHRa8Zdyohgxr9rnbgc1XYFJJFzB1sETtmPKbZHcotTnh1o6f5sW3XipdFtUdsmA2hPNtzBc1kLG",
  "key17": "22AVbT8Ye6MtSxpjAjq64XRjg9z38mQEpKemAKamEvBvLwy7zyrQC8K9JYiKKZwqa3V4HeBHtRNjjPTsUYLBFvH4",
  "key18": "4yyn9NW6SvEVQVAX6NzLfFTKyp1T5dizCABLuTyzYW6EvjqmTtpaSf6UP9qdRUgYZ7V2zzNBznhhgab84Z7wRvro",
  "key19": "5iR5jBhyhHgs9z2HhQSSvGxVcSu5pJSBST9rUpMbhaFmQ7Ze5GSgmvydmqDKVy2Qcr3BGGkcQgqk63bRmhKLLk6",
  "key20": "21jMhEtwWNn5btz1zN2NsPxfBboRvdaEWZuZN8vtrfioPAwBUgdsxQdze5hiCXM9e3y1qeyzPGWzoctTdn8v5yDx",
  "key21": "2xEYPJ2CHSkUyCdCUjFapmVkuuDZLuZ2ojPHASBrRTZUNAMi9jh9Rsx7E69W8y5Rptd2To92tG9aVZXofMjXxDuA",
  "key22": "5dcp959SCKSFFpydr6GdpYL9DazbbjYNiNQFmoxR7gk8nACtt4GhNeDyQDPFS8A8a6WKRGkbWFzJKkwjynGjSCPg",
  "key23": "NHeTceiWQC4Xcq6BD3JL1FVCjxEQQvVbaxHNcFFQdASwqFvFV9yXYyjDr1zwwSk7CdpHNLSHKAQtjmn4VpUu7NA",
  "key24": "5KSMpd3NiVRTZxorhroihSx1hgwWXN6dEssaej7CsUD27WzDFeEZ3bSyYdUr9Yz3DBtAbBpLTssQfnNUgh95oTW6",
  "key25": "5zfAYAJAy5n8buKX7td5oUsBdyZFv6tLExocbPii6D64Jqo5KWjZtKBU5yRKGAkoLHHcwiZdFoy5Lym2JBKK4jc2",
  "key26": "2ioNoTqp9NtahZdvmfbrn3iBAC4YpqVhyUfRQbfkHuSmbhi88hDXj4MqLwPbEBycDEUCDx2WExkXhDydC4C39T7",
  "key27": "2oLoZkjNFF9rr2LC45jX7YhvgXrHV7kUp4dHrDPZvBox6Mqwo5mg9J8mvBwdpoHQpcEfT3EvesB5KhPndb47sYPP",
  "key28": "PrnkYpubUBNkPLFWYN8KGLd6VcZudwqrxdeo9TquTBQvQa3RSSmjYeGAm6abKx6ZYThNujRkfHYSn2CHj5rDwYM",
  "key29": "eqtMVWJBFFoNKhVkzoWerpsxfZT3objz1cwubaEb8M264fMDU3qwJy2XMEbVJiShcNQAHLmLyejreS5ppiQnGYz",
  "key30": "3c68ACjHABp64EUSUvLvzjSND5RFkAiDNxMWbSaEcwYhjuijEjih6DVGMyJJfeHJScYwQv2eRefxHCdXvkhKVHC9",
  "key31": "4sVZHe7DsFdQ4Q82NY55gGoLxA9FpH9Ls6bj1RbnQzzPegEQEFUeT9c7fTRecRuVhquLySRQKaFBRYrnCtvMi2kk",
  "key32": "2Fm7brrmVze7ymmqKRvXNiqu9u2ZDgUkJumEb5ff394TTbnf32M9NY2G5dPf4UfDuS3acRywdesQkdHve73kByQo",
  "key33": "2GhY5cuMqgMJyRcbVbxQSZ4e3HZ1hBjycNWHNHJpGL7Q5Lr6xPbegQtmkZ6wnGDBVkLQsomFkTf66wmCsPaep2g3"
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
