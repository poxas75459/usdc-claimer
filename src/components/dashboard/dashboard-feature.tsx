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
    "5EVbvSJH2heiMcuwLMdDxUgNhYkanENWNdqc9ykD2oJ8n7BAJwvGhYrHc2dVg4h2MqM2ukFW4xJ9pc16KU4aYWVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BWBuvgG9V8EDiPUWDLX1JYHX4UoHy4rnH4bWfy7gcVAGmQtdyTeR1jA69MKU5bo5QnFpqjofJEg1U9duVQq3a3",
  "key1": "4g6D2KvR7qXo8qqAckeWiXbmXddEUUo1dwgHjQQHrTZKUdJTYLvTsscp8ot6PFas3Eci3rDyzJQpd2G5CzbVXFwJ",
  "key2": "3R7tFJ3kiJCKSKSPP4jkzLih3pgWy5ijXaDHRofDARRcuhekghsdhsZVJH5v18ybGhbt5NX6Rf3AusVSLJNp7C1S",
  "key3": "3oCxmhFs4RuR8dwPcRwULf63NRQAMQ1DdndJmtuGGpumycpGdUYWfxitbPrEmqVVAJyz5rrWqXw9UwhMY5a3GpxN",
  "key4": "63ouhbtKHsGyR8xrh822La8hwiDqLsCzW5CdMXgfeDVsHKic9uGSvhqdcKJc6baUFiJZkkQksA8GvGTR61pbTMyR",
  "key5": "442wV29X1exFUhXUqaFJWy5vFwZGhxcpRFnhWXWC73GpCPG3kaRWeMd9PSiCLHz9mWqv32TGL5VQezKNydz6u58K",
  "key6": "2FYpHdxCwFdJ52CDbhcsNQ8fJ9Dm34ovbJGq2S43qjGwb7tm5XqssHnAgRBPtsdsP6WeR9uVzha71HCAxAQV1htQ",
  "key7": "5reVSAZMvBDDKfygELW69d4U8o3MiNAeDtq4hBBzN9kevX21xifN4Mj9h4vxfMLQR1X2DghHhTcx3jx7xNMd8Aej",
  "key8": "4q1hnWDB9r6n4u4PgWHVNadTGTNqVYcFEfcVxQGaBUjAQA2jgGeto8aqB5avshbCnYNeTMmKbYBWxzk8xFCtdMw5",
  "key9": "3SZcTur9YMnE8CDyfS8k37ZSW8acvf9fQW9safWeFQUvY6SnT5JNHgAZMDKmdR99AZKpYsdGbuu7FsDMB5JXkuVj",
  "key10": "2GiWKxmoYCsEnz7LuZsCMQY5GNPPhCdoEvgn9QLGKkiRFHfQjjiLv5GwgzhDeA9Dn3tikb6oWPziGdLpNmWzsZcT",
  "key11": "dhKee1Kgb3vRSjCG8uKizDM8G5Luz8uF3SqPzCTfj4UKrqippcfdamsdStvXKNUU8HEhbg8rWXChqoK2cU37fjy",
  "key12": "5tu2VbgGThwBT53mU3dY86oDX11Zr1NXiPFHbZKgaJeTBmV8nKqgUYYR6dFyqprmD7azJ6ZV8iYpVUipCoSEgYht",
  "key13": "21umaFHnXGdfWRez5UZUNafe4NiHthgRGvLNsZMxh7qPjQefEHTfpeotPbsvPSRKfiCkcGKigyzVy72JULja42ZB",
  "key14": "3oBVpnM6rg9dtwkNr1wYtL2bNrSE5hvEy2fWNLgQpp1TmHMZ4tiw2VCK3CuZagyLsugMiUvfE9JeNYG6LGW2pNmJ",
  "key15": "4h9dnc1ocFkBPKmKkxDYVuKqUWGa3YNZmGkupvs9KK5bzVKUgyzbLtsTba2Yq91Ev6vk8ygnBYQi8YUdwJmvgv3R",
  "key16": "DpNUSdFPsKEkaLpaJ23wdeK3swGQqBYor3LbK1tzoRFYUdFzTAt7NaWUm7r8zG1k7vdhnDZ9tYNhiQSgaT38bzC",
  "key17": "36mnHAU9psSz6aNYFabjb4TWGdhHdP7MdgsqYbzWKEgz7ojsrDBrSf8CVmV1BZer3892uKYzvL8citCYLnKfYM3D",
  "key18": "5WmmqZbw8Nig71N59hrLdNXQvHXbL4TszvVbjC9hhevhHAiPkAviPB8kxuEMHiJCH7nJ5dNtFG6BDdkL9mYFcQpH",
  "key19": "26Pp937XkhjwpB4MnKpYPzAE7VarQ4tVxTS9UBy4WagC9Bhfd1mD5UuzQSzpywGhmNMqmDWPFry8c8u7e7v2KXJP",
  "key20": "2H6TYSQa6vYVPiYowSBnX7RaUM3NxLHzsnW6mrZQnYgPgmxYSgAoWaA4zGttW6CJVQ8vNLGJavvo3PGptSwLzxPP",
  "key21": "x9sTLRfooaGiuxHbJt5yvomKzNgPgB9sWoKZe13sSiTErVWmF6AXwBichxxNhweh44M5YqUwLVZandjRZz9fnV5",
  "key22": "JuakWFfWrA1i66q9TjudzGCHEbhmfzZsSo9tKUWYf2VYsnD4SGzmJaiGprMdyTpGBroigF6ZjbebAVXQMCApjoQ",
  "key23": "3SuZ2jGCn5xbZD3oJ2NnGdkh7DPWxPoFoKdpLQwKXVq7jhrVnQ9YaY1BGp8Qde6dtbyBHnsppYw4B84Up3EjctrK",
  "key24": "4gc8Cmntdf7ksUtLCFQdjRxHgx9gyWtXukt2yW8UyN755vhxAwoJqCxjfUAwuHTFarqXwNvCr2Fw1EkUkPkAdYmN",
  "key25": "62YssRKJodEefUdm2D2soap3FDm2AF5pqiNhPAZaQabzDMXbTU15VVjXvdz4okeKpfGbdFsMZMvocVdvCExHHspt",
  "key26": "41YXksULbFnrQYg9hM85YMeHg5SndX2XpPztXDCC2AoBXg3MLLtKspfoi732uyAyu5jMcMuS78DBiLXXsqHmFfH9",
  "key27": "Gz3wJUjT34mFgmjJfNwQxCPeFZwCAxczp9BMEY4f7j4VoFfe19eKNBj8con77sDyZPE9NXeQLN5kD6sq7hLpSgo"
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
