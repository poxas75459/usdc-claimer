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
    "3HA9opc2gTfLhV9jNd4wWuM11KKazXEZm6aJyS2L1XMfmriFzDgrMChW2gShRwnSuayXvFMDykZH4d7upAFwggeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gqsJo41kC3wJgCyZktd8JFJX6jcvj2k4pAwmFgjrQkDxJnpQGms9jJDEkSkxSyznQZcgDbBAHJdWfCqocJjvnJf",
  "key1": "bhFozSxxrJkpyCxThjjYgr9B5AoKNKHudCKG53YSp1pwkkC77MkjNFvfVrNL1GPSBEnxdbppcRkZjbTUpJxdGh2",
  "key2": "5tFB7CdjKetqV3VZy35PSoa799ASjCLFyqZHPBqQk6C7RBYbBwVQVVdhRiLK9oe5CxTzpNUxpvjwySnnvfkbigDE",
  "key3": "44MggY5S2XbUJhwGVxL9qDV7XVqM8LVfxfLqkS3ZTs8SdQn9Z7BcwkHBuDXpLfEA5iRhD3A1rGm2z7DCjcP3EztT",
  "key4": "2nYLv2qHdKsV6ocPgwygy6tj6oKNwrhpxosRqdDJs8yDNozx2aZobPZNHDCXke5dk1pYi1M3M6B6CFNwL5ejTY3j",
  "key5": "3WYuyhZCRXVtKS8UxDuTh2vpqhQmfU9bcYSFThoEnAUu2BCSwwz5NTz4WxTZYiKQWqEEckT8qCKM4JUkSxStzeH7",
  "key6": "3NJPNfURto8r5Nf3cFXDakRaGJ9aPfgiFwBH3sMzMsorLKVcCMz3f2yNDp7wL8Rzxfdy1nSxRkjfJv1juQV5ZEpU",
  "key7": "CmVRrvofUtvXJA5jbUE7snFYNXmFnYBQUKQp9bXKu1FgVn1zJ9Pj1YXycEN8JmqKh7ek25HZ4u8Vnz2izw9tWMk",
  "key8": "3s8QE2opp7qmje7yzu5WukNRxxZEDDu9ZGnCvD1N8gwMNDMF3WFHJtCxTRJntTSk57rrH7GKNiESRQsfahBnPTrF",
  "key9": "4afLbep6n5S8G7dczxvCGei6bwduRUnv6hLX6jGmTN9nR4y4gBV4GVLz9WLL56diJHaf6GJixYxQZRCuGcVamLF2",
  "key10": "3Xm1GVJrruBKWV6EqtEqY4SMad4uVXcQmfBA3NSddGNQpmghbfCuQQu9zUHHwgJd6KdsmZMPqAL4Naw8LGUmVFkW",
  "key11": "puYNBpkkcdaTKsA8TbGR4sKuZfhZvJFS5MS85hWbHjt8WpHuQMC6Y4VxctrZNrBp9HfLbCjRKuRTEFe3BiSNXGA",
  "key12": "6XNHGZf1U8TnjHqWWN3f8Sx1tQvsfSoAXzHe5yQkBo5PfStHZC6rWiH7yxrfHSfiB5MscmJc7uP6HrMA7oG2wn9",
  "key13": "5dhkJcuJ6NGPD2WnoAhWdaJN1k7YeNPmuojbai6bhqjwuuMujRZVEgaGWRbonegSfVkWmuyAKPmNgrcTLnzrCK59",
  "key14": "2YnRu8aXezACZWK2H4dFZ7F8FrAwCR1WkW4yDXHgtgYVec542HNEDnb2YM4oR4L3L9HQMbFmJf2qFxSMdHAaJngx",
  "key15": "67Sj53WYsw8LjqwrETq8K1Buw526RRwkdWbsF9SBP6ZbJWYCWSkybmCcCNWza4DHYu2YD2iWfCioRZLujNRtVGRN",
  "key16": "3oKCC4AHxZBshRoq3unybYCeMrMrQqQgX1nzktHcSuc9nevXjvfkHakjhajRUybhVgSNV9ULcN1BuHvcC3U6vuGP",
  "key17": "57v9TiWcHhShw1gpAbbpSryt2NrNgHCeeDtiUutgAmex6AzZULHejDrm7DXqhZt13iHhRyqBahTr9ZTap4LUmYv1",
  "key18": "481bHiPvY4pSPik7Lvg1u9DzkY1LzTN2ysqduR2icJfq4UQF8gQhePbC1vrkR9dnTeHx9shSg4iq4zn6ZkVsmd2v",
  "key19": "5W3cNvk2FwxrXPuxD1fixSQcfLxGjXdCVZnpPGwPoMt9v4a7cFhyjCZeenJoV2QPgR8Xoi6nyC8TAxR7uSuQALZZ",
  "key20": "4W4ghgbgcnxDtrbXkcywtc4euEoeZn8f5Qcbm2Gy5wb1gqvQp9xDbeRBf1Gu9WMPcPerVNkBjF1qVuL2QdKywcFv",
  "key21": "64NPVJx56NqdTdy4dKm4XX9hFyaL9NEwJsoFJT8awDkoyNJPvEpzFGhNEq5vLTbJpDiKNqGgLHBxLmotvZwsyCZ8",
  "key22": "8Ek961toBt2Hk4U5d7PY8bmRKtPaHBAGsPZcnQ1R1DZhXgr5ebxtSWYSpZwtQ1xWFC34igjLfoeLM6XifFVZpBT",
  "key23": "3amihsg46jrfCaKZof1axrfzTbLWa3RLpRSBRtd6tQwywckVC41DmQMysJCtPVDUc5hU8vwHQ9QS9TJj3rPEGSyk",
  "key24": "6WF6VBjxiLyFKMoFARGFXBBw3zo7wVn3jxHej5Qd8m77HTDwZwMorckA6AjJSNnhYmNtpWUKTrTXPrf81MPUgKU",
  "key25": "5EGuadDw16KcNwNVRNCn2mDKmDYp5oUVdSVQ5rwGZhA6dRjxGUyPdhEZoN6fuxjJVAkqArxwNTJtt61T3YzQar4J",
  "key26": "5oyXKUBq5z6ptKPEmAF7aASxamuaLCmNbWfCfoMGs4RfTcPqpywHTABGsh7gzJPoVMDsczsbyoZDUxgM3A1WEpw4",
  "key27": "kLxf1D9QAfUMCW3HHQU3dc1NnJxyifFGhTPLJfRPnzH2WmjFSC4MkeyF4LuCY6ffSSHpsVDAgbqgEhu9sLrnkLc",
  "key28": "565MoZXTkhZTv2vi9eJJqYaJhAwKr9av1SMapk37UAQnThPKfV8PGJ2oVE5fWbjGnsgq8kfdj2g1stTr2oY3pX5S",
  "key29": "5gkf1mf3LSG3JL8cHwvNu43JmJVqxzidESUATUzmE7hHQkZeF8VqedL1g2qnSYWMLJoD25EHFQV673RWjjb6zazn",
  "key30": "4QrBTBsKHkbVebSFb23jwu5yQ2fixsUgRxv59EFpzBSZRzGAQjdDCFYFZmNvM6mBBU79bNkxYw9Ze2YchpDbftod",
  "key31": "5Wq85Pm1xEueU5tnbNmjpH1wmdBAp7GEHcAZ3v6sQYu8p9UA6EPASDXpyNRBNMrLtcwUccN9rdzA49YiGG5NLHvY"
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
