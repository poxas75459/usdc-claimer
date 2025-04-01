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
    "2m46ZLtacFbHZ3npbJEkTtWKs916M1DmeWVCMTTkEiM4fwFkHd1jfDrLsGdmVbxvHRjcL2iakxxvsyZhe73L2U8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656iU8tdDuCi8wVc3cgiZqa2TdViG4uwaEgKqwihMGVt2WVGcBXhMk4ZX2aVLLEFWgJZubKq2dvrx84n6hfBDJty",
  "key1": "4QJb6tT2Fm3b93Yz9eB15ur1RgaVCtWoMCE3anJvZsQi5HT8C3xFQgZbuTuiJW3VWhZZqW6vmW4TRPmENBymPnaN",
  "key2": "46PYpEEXygSJzGiY1wiw51hWvMn4DCLtH448iWNNRFMLVXvwvwWkq3ifAor9M9iXW4qcen2qLDRZA5vvYQcoWV58",
  "key3": "3iYwUjqj51h7eU7LvXxJEfzXTFDnWF2UgXkubZEnUoFj2vaeVBDSWpUSBXu95KRf7xZ5kSxk3WFkiKxMyvi1i5WV",
  "key4": "5CqpwC1mpZdgS8DVnRVmo4gQCdpWxEJGmCyrLpZuRNENVQm4WZsrMdq82nMgaPyP1qXZkJcpkWS2ado6KN1b7L5v",
  "key5": "UYr7ibewoSQ9xRsnCefhefctkdYr2zQkTQnkrLjUJYaLHBLe3NJRWhvoAfjx3EGB1i7wC7wniv4cifPLPyjunRW",
  "key6": "2UggSD4W3vCCgqRuXXUmztrQpWcnZG7vi1Fp3u1Lc48RkEo9yikJbYFWZDdSDXt8SQpFXGo5mBprZc3aPfnQKcRo",
  "key7": "2VNX6sWGa8u4Pv8zQgRXag8rB8cbPXjK2DesrZqwkcnyu4ZzNtVSkWVjBXv9h6bTggm6f2GE3aC9NFVRzQXJhyZK",
  "key8": "ZDdrhtZNpry5uzBUKSodo1Rv7h5priE61GSyEC4ku4qfzSBJBmGbRXetpCHMZhZjJfWXmEKVUnDaxEJAgcTNzB1",
  "key9": "ukgZ225SL88mXNZ2yLNjPkXi7kUbokroh1N53atN7BHA5m8S9Eu491Zns9JLYhBkET2HKQ9XnRTH2uLFQ5mp3H6",
  "key10": "4bZdfkVmVUa6aY3PxsKQuDQRwE5fNHXZiapUc4yCiVK4dX4Kq4LsCL6diyRqMU2xaU3KHApRmeoGXCqFftzsbcG2",
  "key11": "4voemLh1CswH4L7mr3xNkUrZit3TECSbssQi5MgU1LitW6o9gffndqdKRQJaPxEidxNqaAJHHJgkcabGzyENcnb6",
  "key12": "4S2MiqGqPR9ipEiutSts5xGuuKKdmnH6YMxNsgJ2nfH4JuEQBAiqtr7tdBHjfi6xkDfV64LgMe9fnJ3dzYrMJexi",
  "key13": "2FgjvJYjdunGq2A5kuJKqvy5kRSEMj7VyN7aWoarCWxgDKoT5pjumhViuXdGHQe4iMov2tneSoDVvN5FYvWJdvdt",
  "key14": "5YSSsj1dP9SQ97AWtKzR4kJhrVSYCXmqY8N9oFiLnEdbKzCTEvDx3Boq8kaQdQtruS9a7wM9BdxhEikPg85sqJMY",
  "key15": "VekybZ3Ae45EJyKt3937Xajywz41KDwevNzeMYz3BECUR78gUQrBFViTPVmFdQkfzK7Bw3Xx1fjjhAvZsKMReyB",
  "key16": "297cvSKzs6gqti8S1xm3zS1Kd9V7onqSQt2QC8Yqm7x7HiGaSwwHQgtTG9qjvqe8pcetJgp2F8AZ99AkmRHijrmW",
  "key17": "4jHSmfJKdY3CiifQj1z7LorDPYzqT9p2vheRi1PEPjkYKock3KpKmMeoVH3bARzExzYfYh6F8ohRqB7cADX98imo",
  "key18": "3tEUD4Abrnvt9zuuPNLpXeBT9uJqVySVaU943UPyLrF9rJT7xtvMgaJwQuNytChyzHBPxfq4Yig2S1qSSaHj7k84",
  "key19": "2x3tPHgjFAFqr2ZgyRVgFQyM9XRhmwLxANZnjGS3UkEDugs1e3UkW1gq47oHZk4ygr1DZCw613WqncVwnryXGK8M",
  "key20": "3eC4ih3NbxP2gnzHKCtNkTXK6MtCuffWWr7tXsjkoUeyACKk63qkR2VTCPLvuXhhUPp4J75hwQ9e9KTQNR13Qjej",
  "key21": "32rzAdPMyjv6enzFAbNqkeFpMLyZqdN3DTjcYphV6oo7wqS7STRZtskQzXcCGKcNTetziyH8UrMrnj6xLYo9Yjvx",
  "key22": "28rid7LJK4jL98WMy8MSa4K67kRdVtPXsvZTmvjzUdiarEbfmtL1W3tSD18kbN1pF2zgofSTpnstzvHtGC4L13gc",
  "key23": "3nyGyjGPUnYXev2hz5kmwGJrHiz4tXgnGPeRwLEbStZUDPbnfeu5tbrYjowbddYxQixEJ1kE96bhNb2NwLxfY6UJ",
  "key24": "KuLQ69nTAVdjrqpAmPB6qtz698PayJNwxbskowef1EdhnJ5JZUiyVVpXANfBmpDVJJDvAiqWZr3B1NUT925fFAU",
  "key25": "2mdCKAKKW56KjV19ZjDvfd1jbTbqGxWYUTvhTh3iXmex6Uv7LRw4Egjc4ZpNh7vadwPW3JWxzBsbCFfTbG6c2xpu",
  "key26": "4kqJk9oLoTe35YfcSbbWdXj3nFRj9MWyWQ3U17dd33JHjS1fjQjV3Qfy8VxQxAffHtrmfLRVZ6QxMyQnUoXsLq2e",
  "key27": "JmtVuPyFVWwP4YRreWKaVNt3yP8X6MfuKximPj7ofEaTJVgYKBvz8UKmS6LCMpjw82dnx3TzDD6Dx5kRQxzTMLj"
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
