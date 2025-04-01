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
    "4B331GJgkTtbyo3uuFZKt5BLF4VNHT9qP4r7rmguGaxUFFQLwGhQbFXSPjb3cRhKJM3BpqjMg8U89jjDsNVzmBAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdsvMMMryA9uzSHBw1T6NDR3RJ4G7xQV17w8WTRfDLBxEJVUHBf6c3MgZJA8pBsAZpqW2TsqL9eGQGWm71MUzrs",
  "key1": "3whxb3QXgQxYBNZBWyxHsqhBvKcHbMVN6UwTuriWhrqpBWsrigavyoYPer9uZhLwN2fjbYQcnNwft7VC8pRUW9RF",
  "key2": "2oyw4DfKFDCXTNp4JvV1zk7akJxDDCZnc5EEFkUkYC9V4BiCKMgxo6dLqHVVNx6ChJ7LoCkgwL51Nxk2y1B27dXS",
  "key3": "3ttt5jFEx2K9kvfBBNzoLVXd6uL2FwfWc3U8pmpG2Yzgw74rHTMxVEdzaZiCbawaHxynQDMvrsfvUdtbK7Fb8VJQ",
  "key4": "3JGzQWUxyNddZZhYgHN2JFPDPPQWN3hEDwan9vKm16zPu4j8pju2pXQV1nHCQhdHsTT2iSYWTMYtfc2JPfa8i1Hc",
  "key5": "64ZKsRrMDGGdHozkT1aQdSZUs9wh1YsNJWXqMa7ochcLSWqYQUjxXcRaCpejVLUaL2f8RuJPWMaribRd7W3Xicqp",
  "key6": "5rBsQyjcxsJuf6tda8Cb9RKT1aspgirZzkxF9t6ho42xRgAvXEejgg6K13gfsXva3hXhrJrYRmRCq8NNo1F9JnL4",
  "key7": "4bPCbdP8aPkp8f8hjEa2mN8HLviohnkHtEiyJ3XFoTwPAQ63bcgTRhAZXxutHd2oDA1LLv44ywPqw84pKhbcq6aK",
  "key8": "4EGSaQw1VgrpHm4RQgtV8nNdKL9A3RYbu7qxfymED5goTvyBaBpBAH4m7usLNgUQMoU3eMwQ6VSzgUaCXyY33pJr",
  "key9": "5KbDHomZUN6FLCs1TeibqchFA7WKfzqm1PJHaB4YtoAUuFWHQUzwH8j9dXhtoXfR8zBxf9hZ1TL33gEYik64xj17",
  "key10": "qAoWEmpXfMpcqckUH9xNqZUmD3ci5vE4EQbUa22Qy2TBAm7XPdigLt2K6oCfwtrQKJeGr4nTptB7kWKkBLWBZNR",
  "key11": "5zSzeuT4aoM5r6JCBJzLRZ4yLDEmzvm4mTvwo8iySkFq6bNGepeqhStXsCcpTeWTmYnrCaxsxFUH768mq6g6xJ8X",
  "key12": "4YfL22ZneJJzXBxocFdwdqZW2yyq13LM8NiKZGNeYa1FZMGn2ASgSvZQoaLA9cGps6zwpUVRhe3zbFeD8LGJkj87",
  "key13": "4b8StfnsLcpg3gRPZGo6T1vBSYHZD5JTxNMca56CXXoMvtWPu7rjpM1KttzTiaPXRW6Aos1pWKapSdjk682kb3Dh",
  "key14": "3jmjXrYko8KDEdjou6jsedJNHhsFu4GQ2Wf1iyAEeuFwosbFXekyB3DKb68QEBZY28VNxgbmiHQBzN7QUyUozyM2",
  "key15": "3HWGcAxWN8quG94gUb9gLBg3h5ghCLf1U44X4RpU2AXzDzjJLZfNXZG5joF9KziFkqL39M9ZfzeQcRpCNRV9S1yU",
  "key16": "3upnpLdLuyhURnvqyi1PDWVeHKrUjXfazerCjPCLyv2w5TzU3EPt1iGaRJbaMLhWgks6dnaMDhTM7Vixer7pEMgS",
  "key17": "21jQawzj6kvtqcMFzMXJSQ6mxJvPXUwpBiEqMp4E9bSdBTXzU6XDVwrBEcy9pCdeUYQX8sq7BfVBM9iLoH8Fg6J6",
  "key18": "5HWUUUP3HVgRdXr5NRDCNwJPjoLUs2GR2tsQYBRnXWiHRocUtzCSDA7gsBEGyEjzir7BgfywkDxqVCcWv9Ku7v6B",
  "key19": "3UC6SdTbS7waPve6T6DFnyuwofqEUimvQygjD57zcZ9BTwYx4ecbGrowdk4L5ny6GPuMXwqyUJBR8N9UfwkXjtDL",
  "key20": "ZcHNyEcmpSNMrAn5i1F4uEDri6xu3y5suX14sxRTMWFzXYdxVpXdQdk6x967GaUpq4Mf5otEVw2HwfLAVD2vJDS",
  "key21": "2h7UciPm1VrueB54wyuhpcHPfwR7VTkUStLHZ82NdVYU59nsFbP58YfHLCcDF7DwBhQ5gQwLfw8D37k8CuQd1sdk",
  "key22": "5UdQzVHwte81SscuS1kNUeLm7kAq81z8ebX81KBGvnyW8ygQ5ooh2hzg53ihwmmWZhzH22RNMqNqdpZunqTzr72K",
  "key23": "yEprAbRUKvtoK6kCqP6VgTsCkwCmgXcypFbvadKtMfKgNaiBdSSwT9FKHbh7pDuz9dFdk7MoqnSsrhYjPAVkYJ4",
  "key24": "51bLEc99hcSefpTosGj16m5BnZTA5Wb7umYvyd2EvjTvoixjhEs8wNkvL8XVsaS5H4aaXdoUEmnEW4HEZzEH3rPW",
  "key25": "Vp2qMiYeW6kSMqbynW1eW6nHXv6G5XKrFJZmwPWRSqh3ySEawbKxBi9irfL4U8aYmoiHZ3LJmyEZeS9n55cDJnm",
  "key26": "3Gqjk1Z2NKZj6z2oZCXrnVfZ1jMy3z1dWYrq1rzbdBVL3bhbZVPeAx4od5gbZE3dgyWd7S6NaKRc5wfrvR6TFmh4",
  "key27": "2hZsy5czrZeXMY3hGucteVwejKbUB1YDE5jmd52yph499VHXo8F938HhSuYQB4csrxmNMfg1jXwD688MYBcmXr9A"
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
