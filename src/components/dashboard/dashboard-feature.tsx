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
    "2bhCe5qK35jBfhnuvE72T3uhMTvvgvuGJjuyXbKYBDiVfNuD6xnyaZP88L6qTqE63aZqBNR659f3QGjjzgLqW3GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knmp5XH4YBhCmLsgfjMB9nc96q3hEHToi7JvJ4tyzkgjz7kMMzUaThKucrZ28atULeiv6SpnaegFon2s7LwRgfy",
  "key1": "5wKAsYeYUtp2iCUvFVCpNSTBfuqNse8xsqDtAPopndReRhrSUR5XDCUoUT6d8A19KdsdnphoPfWQSKiQLSvbG7ps",
  "key2": "5H5sEe9hofByjEhHUL1HYrHcshhhmAdYDMuuC6GBs8GRDP9TydKfmXfSfkD7nqfVS4Uhb4e4DtRvBpdLnV1BX6iG",
  "key3": "45YRraqkhVciyQ69MAKiZgyvM7B8sLnmHWnpoyJCWAaY2TKsJTagYxbXE99iGQeBotPwREo3qxu8m6NAQZXEnNUV",
  "key4": "2kHSqen6JkHqBUCR8N3w2bNWsgbBhJzeMbJNBRwTPoxA4GSR2cU8UCqck3m9RGsYX8kyvNBjH5UUre4dLHM4Wz9S",
  "key5": "67NSXpfy9Ahf9uu6ZDE6YJ2gG5pYQxcWLEhz23gRgDuYnDN3jymHZv6fyo4K5KpKnJg7u3QUa7XuxCf2M1L8Q8om",
  "key6": "VqAHyhtS53SmDtBGS9y2qCk4WNtGn6jx6ELxd9MEJZYz1MjdZ9L8d3117DXsVLsuRxMgLcYKKYdy1mHREEfMSJJ",
  "key7": "5CT2zEpCXAdYftNwYZvDHrsNgBan1vjCD1Gjj7KzFH8K6bJ4HDjAvEfAuSK56M1qNC5NeMmyPCuWWESENHp2YZZx",
  "key8": "2SqXy66GWLfjgMzqtnbX4Vzt4DvC5XSCgBxHzuMvV6KFMybpCeFnJq2GxKbfMw4eQkqDWAZ4py5jR9MLf2gYRGiq",
  "key9": "XLqUereVkAFrtWXQa9bLKviMpQ4tXhx425djNyEzq5b21N2EnWDdh9V4dT5s7BwBjYDRMETLtXNqMMSZe7TE9ri",
  "key10": "f2FsRkwe6RpW2G9uSZZWy7eJJR485NAEZt8sWDxeBv3s3yutubTiQij9YRTX7EXqZJ1BoftX4NQ1U7sKjTzuqXf",
  "key11": "mEifSduxJMHFyThSaNCNVoH4hx5ejqzGMPx618EbzzFHFHwT9KkEotzyad6xbaLKRGhB9aNmdQLxdvNgWHuSdvj",
  "key12": "4opRP94GJyUDFi4X13HLkAfhxyQqTgqYqyB1b8B536BKTKM3eg9sysq1TeEdjrSqt5TjAdofmsP8fKqMJnTDwFnn",
  "key13": "3sDFRsJYoXEYT3q8WPRauUMbXTGfm1ycCV3wPJtdah59LGmpD9mppAKhfpZe3TCb9KcVqq5ozYZVJauhiEmebkTP",
  "key14": "1bpxMrTAE52Roe4z3MK6BL5rU94UWnV5qHpeEtC3A63vmNkvXUWKswp5KBHPwYRMsYeQhsb5kiWw2Qco5Y7PZEw",
  "key15": "F7bHc99CMz3iGjgpMHCdCNR6K18zLnjCEufS9YCetUrhFrYkRrA6F4MMTuAHfsJGdaJ7Nc33pXCF7NR1M9KvdJ6",
  "key16": "3tGMe1PTxPyV2n5m5RWTfp8uqiGMtC3jNaF2Q1agMCN3V9EHa2CUer57zf6wcJphva5uP1e8mpsLb6zGwanrZr5Z",
  "key17": "BzX6qNbx3rKR7KNbX4xnvaxkiWgzWYehQzgQAqKJCQoomkT62LtHVsYsrAqLEZbF526qo75WGuwG4uCmTfDm5BU",
  "key18": "3koiG7LhsdSj8vaE46hGuzgvuXdDZH4ZkLWehSsEjhPnuXDzKsnAvKVSXnAuJfjbwvfCasHpbRy9o3xwynVjtZ2a",
  "key19": "55CwSLSYF9LVBTUVYFWycDBuyffjijYCMaHunqZkNpiPiDRvZoCXSFMo9mU6DukeGfsQxogkvQe7ZQEUP85JYEFR",
  "key20": "AE6rHcEExUqo6XYmjKPAac7mdz9MpbraQSiqHp2Dr2sr7VhA5Xc9tBShoH9jrBUPjd4N5xtHM5Rxuy3pmBJG2uK",
  "key21": "tfWoJBRufLdBwAauMhm256zzNLYwfMePbBkVWbWAvqub8fQD8eJFLFi9YAfFr8ukByxk24ASwkoNmKNHNRk8nQm",
  "key22": "gVdXEXHfWEdovXXiwmSUf3DzkCdN1Ga6wxC39jEDghH9t3fC1kL7uDX2w7GmWFaEC9GfR7jVfKJSpt6L14cFgpa",
  "key23": "3QKCbyQHzWjrdewwaGD1U1k9LBGM5K1VxUwWoezARz5j6xSZxzh5o85Jr5Dab3jmskjA5yHBkjyUKp5d53bxfetT",
  "key24": "3gMMqPHNMapJ1th5DybzTZroca8EaK87iQ6au7dnFgisVsf8snLz3iu1kofW1gb3xjBHFhKrJ55oW1yDW2BpvEt",
  "key25": "5Z9BCGywcYFuW9rTgHGbkZh6zGoRMtskXRgeXXq6opucFUu6kNRcUXeCvHyHD4cqYnTLfxBS7v4VJ736QGfd3UE5"
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
