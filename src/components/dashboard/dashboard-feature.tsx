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
    "5NkbkaxvCkkJ3TKzrET1erDjVv3Yffi14fMwkfeCt2Sm5qbDDUkcsqbp6NQtErMZLMpB8YMyHL2G9hY85DcvuHBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wybLdTaNM22xLsmamKN1jf4M5uZ7dzVq778WfD84JBd7yyY59RXtJ4chTnBdGiKd93vDUyDu2jzm66rbKoCULoR",
  "key1": "5iW6nCv1ztWHx8hgmYuN56uVgVVVdPDaeDhWQct7PPzfQyTrJqYFbzaa4E6RVaDyRiivh5MjVBEWoitVJzbVx1Ex",
  "key2": "23xoCb6dot61H8mDhy38pET3CQLtA8NbpbnxjRZmigJyPzfzN9MHRJ64iSeXkdzj6wMv2x4x5qo6Mfj2S5KERCdF",
  "key3": "242ub9YkC19WZrnuWjDQiUJUWfoQaDdedUxSDDEQ4BVZUSTcV3GprF82QdJH3atugmYc6skKnsWBtJ5GrhVehwJ2",
  "key4": "T5x46NFySfGmCg8pr8B3Dw8ZSnGxw3DxuzyyGvoVRiaF1L9qiDB9CHmy8MiFbPioxGc8B8nyjPdGMGMDBtQ4qw4",
  "key5": "X9Dh6N7Ywy4q4H63d2KdCayZdYvYAbNBqF88kfyCjWWi7uZoEuNZQrkYXmTsySKNagjEPqSaAYSDhXBX1Vwbkoc",
  "key6": "3LxvzfbcUoyKZBRrJ2d3f1gWAQMbkqkLLCZMan5r8V1pAYJFyynPCGs9V8KoVeBc8wy95LEUFceFVDnMVTD3JmwD",
  "key7": "2Mq1Mqg8S8u73q11xZJvWqbYaVnhhdh8CvK96mKTr71Pz3qh7qjSrYzofhBwx152zVD1m5V4uqmhUGC3t1yn7o3D",
  "key8": "5wvdPu9hhQFNe21EFJsgTHADPS9ExmU8CDmB9aM7zxaP99Vq73D49LUHZD2yVfv7v95SSPnTZqxGhhNtiw1Y1Hng",
  "key9": "3piRqZ1jDihK2PAK7zKfju9op5Vq8epFS6CoW5q94XJT6HZyyPNwtB23yXqN2YihvZ34Mfux3zQB2SJkrHMwwgPq",
  "key10": "5JDe8x4gmsrcaQTFCWg8oRGr6t9mgAYK8B8c7pGZfysKWok7si2sJ6qPSpHF1CE6uufHbR12MgMb1ueJEKQeZCYU",
  "key11": "53aFWF4wYZbxbPJV1MXbeXioqBmvFTnLPJVE2sHQJGzhRgn9MRf6HhatjXh5fUYd1gNVWTQtGzFYH26LEN4gFtS4",
  "key12": "2g1wTV3onSd9YkTyG8uWC3fYsahhRf4Vq9hwx2n84feGXYekEd4WE94GAeYFc8abUUH183aEuLf8USfrDcUXjT1h",
  "key13": "3gcLaA24yViXtbHWmGNL5RRRLZKmQqozy7arv93WGTddhxrUpRR5EG693eX8oAbh6vp9AuEvnKEWqmGqCzBnUMHX",
  "key14": "2cYNb543WZxyCRo6jRMEPgiubUApb5BvAawWhZcHShzZTb3TLMSQradpAF2x9MgqZt3xyvuN7UtyZk1R3bngpqkf",
  "key15": "4Qca1oEuF8Ja56CVLm91p3F6zBucpZtrwQqnnViLQ2Aeh2KvPyzTM67hjMJ3FtjNP7Bgn1cPuSFdmzHse62qMqdC",
  "key16": "5R5z97VHb4i4H3RrHi3PF8usVkcJF88tHxeMNs74i5xB7S9S1kU1hTmjoGLMJQQftch6Jiij9ks4oDxQYmjYm2va",
  "key17": "4EqxU5HpYtHUmSboD9r4yNZF36anTp7kr77hFDVSoSmJsjXCMkr3rX7qV9p5ivyC96ovq5qyQYBQFhTs9AKDhDYJ",
  "key18": "62m1K5w4CuaAahFzsoacGGVLwG8dU2n2JHJDzHRfnSUjVePt2aCNmhGotAFrqxjyHDBi9H6BQmL61m5jmQyQDKjD",
  "key19": "2on3xKKRm8V4fF9jcB4aYYogXXx9fTTowptSS61iHwonX99tV1n94XzxNdfHksfbh3DVoG4tUd6jhuQu1qzGGtob",
  "key20": "3Y4sAxLNwgFkGZw24W3CRzN9dRL63ae7Gafqdv2M3ebtqAFmBV17VPvCeukESsRfpAgVSJ6vVRVRn5K6PtC1Eh4R",
  "key21": "31ZpffWcSsZPG1Bdo7PUoUSAB3QYQJW6x7jjvydgjhVbqUcSHE6QgaFR39MMkUTMREivM4jrf9yhuKGXFrDsusD5",
  "key22": "3obijAY1y3LW8vsWf9noefk8oa5xd3i8jufw6XPrSb9JHofqx5cfKesPBZo79dr3A9yRJBPfQPvoRvNcfKrtHAPv",
  "key23": "T8SwzzgBALTGzhcuAGMUk1QuT2VKpfwzZeKKJQae3YZUyaHkURFx4j7k2S5DGQ32BGd6hgUJX87RHtBa8xAjFeJ",
  "key24": "2upQb8FYjqfFhkfoDq4CL8kof2TmF9ZHFLkmh5H34SJEwkbxtKHGDHoizowAtwNzDzJKTPuWfX3CYG75tVZn9Rud",
  "key25": "3i5Vb4NvYdTCEomgjk9mBtp21ZfZZmiMHExVye3QsYYVeqRe4rDr1E9kSwVpNHMzSYHsfCpujKFFu5MnZgcrEJqx",
  "key26": "4bmj85qx2Zot6KXHgP7yhw4uoHknCes15GYPv32EXcbif3CcHJxAiSx6yX5KmP7udXvrbhjBUyLGGnhqR1cUV1m5",
  "key27": "4qLc4T4E2edMAW7QQmwxxFvyBrBYH3od1LrB8xkzhMAVMTjKAR71EbrBypgPNSCfMPd2qNj4utfp7aAoCE86K4Fh",
  "key28": "35HjhNB7mQ3xhA54PcPKJs43RvbcTct17nFfpWi94W8SHqC1iKBMgb6yAHXart2YBzN1wNCmzw1TyXXSUQFeTBsk",
  "key29": "5vjd4psoG4d79dF5Z2Mn6vpqrkfK3KYZivML9gwQkEboZYG4AYqmk58fkNUsvqQkcb57p9QnNQSWq1qHts3wq7Gt",
  "key30": "3WEbhq4d1yeMThjJyvkji9N29FH5QvmzBS1cE87Xc4TUQWK53jzTJEZeJg5m5wutgnmgBYqoz8hUwUrvkPhx9gZF"
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
