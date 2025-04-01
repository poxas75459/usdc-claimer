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
    "4BvXoG98SHuPDhE3FyuKtQnziw7t7ZQBg2E2gMtfETBkfVLVyQTpr2X9k4d4iW5QbRnnfxmwuAoH7dkL7fqkJkjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "226GfM4d74ERZdpJcDzQBErPs8tNMXHhJTdgMKCCEzRHrBzPhYb2pSajT4XGmrgmufQD8mW2kpa9yjHtPjUrMFRF",
  "key1": "2e1XiomY47iNdKNDxZu1oJuKq741ZTTUB6rZBvFMv8HDw7NccJxQC1K6zbAoxXqgz2LHrjh4Sk5auHNii9nZkWnQ",
  "key2": "4kHZswW3UmFat1nGX6tnF3eDbjbNJhQ5KcEGAr4jsFWjHJj6YTMRenVmzQLDTKvegQ6SyxEDBgjFRepcL4UyucqM",
  "key3": "2pRUa6WxMVVSJZULeqx1TUyCFCquLsfSAUQzxJqxq5CUrE1JzAZJkBKi5iSvPej2MV16eLHRMPLZo69b2AmuxWn5",
  "key4": "YjU9Guu7rdkP28tSA1yoJxj8pibXuocs6DHQAGpUTSXx8GqaJFEEwqjwYximEQHrBEBjumWV26TuX65Tr8PXxci",
  "key5": "4BxY9SV4cdPRnpVq6UMFJtzpbAEnUUJSogRjaFKtECBLKt6CKVR4oWMcneXHzCgJWdTUh7ozzv7aVpafMfzgNuDZ",
  "key6": "yDUgE4NzKnQ8BVvbQgq8ddBKzE9adWYbPU96gsvhSMPgvS6ChTF6QgXvzemTXPPSsVbvT9b3PStRM2SMHuKiqG1",
  "key7": "33utnqShTGRaGhPKpVNFrmjuVwTVAPaGxHzeNuZo88e3H1KQLppGhjMXaSSQnqrHxKDg97Eje5jzxXVfRgphyG9i",
  "key8": "5WUy7caojbBtqwwCuysNFLERHbmGJWMonMVfCNJ7xE57BX6qrfCoM6T3KtMHqmkMUpKB45grnG4jCFdRaQFyddR9",
  "key9": "5rXkZLavcdTpCiZt8MD3orKzXb1RHiQvF3e9cWjFooaxw1qJXr8yRdgFEco8gfyGrLsYWdcEVp1uoVkm92qEFGLH",
  "key10": "5t7jqP3WpSspFgzTz5Qgm7qfafyXVcHQLCPMB94rGTYJKqrQ8ybRiejxREfRk9sJDc9zeimuvmji1Ypeg67VYsSt",
  "key11": "3rn5v8Xf74sVmmAmwjcCxXDQFYmDgJ4S6wfZN7CRfJ66sRAiZtQqRKTFmYA6nnnsf8cvitTuQLrJnxK1ZjehDYRb",
  "key12": "jVoJiLSzLq4R8baWgusqQ3ijC66E6KH2usbqUAkmLWvpLzjRUMpErUmZ2HPiRgH3W9RwWa85qxK1SfAXUAg2nSU",
  "key13": "4ZMvaZm7oKM8zWHo7ME8ePNJJHT9ThV27UkvSrguarVRAGVdw1ECFtJXWwCwmbx5aSaFZ23KWWMh7sejsqXUZ7QN",
  "key14": "3wnTz9YbVYoScxEMJUJq8VwLNSGdWt28MXsKAGo2KiZ2Q7m8CUrYbLb1C8bhGVq2BmPEHxjuefoibmMkNB1zAY9s",
  "key15": "5SMLMyizJqo3GtXa7tEvxzCvjRkem3UrDP6bgJhMfMexxQwihZgMXei8SV4tdt6FsuPYAyL3U8QryjHK49dbyEY9",
  "key16": "2D2HGw8f4yZwq3RFh2kg4G5X2HT5UtJFLgK7tRK1AN9Zfj1Gx2tqjfWK1oKCUkt1C23mr4E44H7SwfyzHUhEnNbt",
  "key17": "36KFbiBj1kQtNL2xNdmzUgXr1MAdQVHCLsRuZPZrTXmtZr8pZdn7Kce9PqPBPJyLgzk8zSe8PGqghUaAzqJzkcRJ",
  "key18": "3zWwBDjGatQb9qKdF4oMhGhNkgT4mKhJWQ1cVxUDc9V6wF8erpFuJpapKRuPmk67yfbghnbdZD2WQDdwQLSncYEi",
  "key19": "4cRp5xJFQCeadNri3fGVYTyeTuwDj7cGCkU8SXuP1SbwUdDiMhfXX6RuFgN6eEfta4HX3PbDZgQN7vobSjDoY8vL",
  "key20": "ShjqB24uWHY4CD5WZivsEqBhkrWu5vNhdJr1AW4gjsbNUM2UCKV6GdvcKahnRpJbF6cgnHgC9pFT6FtjjLKPYgP",
  "key21": "4Cb2r6sZAZLF9WBzktHd2cYZ1qtif9bVviYgtTB4MWkqcxisTpUovgtqCx8tsZ3AbokFiboqFMoEh74JdafBdkL1",
  "key22": "3ovPW5wCdyK3xS2TJWERjmPkByQqjZrRGvuovFuqbYDe4x4M88ENBr4z6HGQF1ytBvMhhn9asPcXafGvtK8yDMUV",
  "key23": "3eKrwyfDyeutj6T6bnjaRHbQFcpcJ8Yn6c6X3MkWgj5WLsv6GwXLJMq3HmHPmZuFgN6EjWLBm3P67KkRLSi5cavm",
  "key24": "4zNNQTopHxAKXzk7ZbEjrUUQEiBPXMaEcG3Jic8noHZZADS1rRj7MLVNNHRVexfNw9fpoWVf2UBzuXwVYncq1o9f",
  "key25": "3a8c3x3bpw7aq63YWVNZ6juL4EoPw8Hk3DH67ZADUMfw5fEKB6HBGbKAxjuyvR3g76izrEE9bvbBjzVy35ygJdF4",
  "key26": "iQkLnro1KYQX4zAAERY86eWTL8DXruQWhycFkrkBhHyCRVFBGyN3TaHvT5wMPAmauTdhWsXnQ3Skf1XUwNBdHsJ",
  "key27": "5eH4CngLm8Kzn9WwvWirmfppJyyPQxJLjyBckyesPbJtrsC4Pns6ALjE7rpL8NJDAQxrJh9r3Tcay55vKE6B1UKT",
  "key28": "2xywhxeijumLZze6nkUFUtaqH2oD2RZCBSLC6R4pRARRScLBQR3gfMfCM3xLGNJWHN1rPg9TjN31vi4PXyjftfh3",
  "key29": "4uchVxdy8FfvduEVDvP9bFP5ihXkvc3Mgah9dzD7MUxRWJQUhoGQzkiHvVRyfQAG4C6wzDgF3j4ZFdaCopAjti1v",
  "key30": "4cMUcAzf95jxgZkGcms5d6SZPHYALKPGGnKwGZJ8ygeY8SPcyZKGLGjBdBubjPgAgFBcJTVoXKwCqsJScbV1dwNh",
  "key31": "5HsXVi1QkL1gNqDUNz6ZsosiTFFdtKMdxCPMTmV6MdK6eG7bL24rwUSobyVruyxXaw89MVEgHdaTH167UYaPVLym",
  "key32": "3pt7LTg3j7fk5GEoVCFrea9UP2TCegYEU4vPTmBqDWpHfGDWA25htGuPm9NLKBfd1FkyqWhV4m6DBGBxw2QsWs19",
  "key33": "jkrFkCw1SpdC9djSfpCvNsaBtdFqK6LUd6AXz8KieUhz1vEhPQ6uwtojMAKJMx6FkHa4ERZ8oMz3s97wCfHhh7f"
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
