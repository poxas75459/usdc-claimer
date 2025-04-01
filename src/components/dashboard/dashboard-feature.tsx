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
    "x2aXR9ds32sgGbdnVvVdnJCEQYXrmxvD2xb4SSZrEY5BQiutu8owvAXAzzTRZqj1ygxijop9T4iTnKS7zw6Lcpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ModrtPXDciYuzMqjNW91RfDspaE6fwcVq42mvVkUygRvPEoWNGhT6jH3z3WbcvPAkhEpYGnLVqamH1Mm116WRMm",
  "key1": "4ZVtJW1UkAK4TYmwzMPLbDcAcjiRugXmAUtgg5ndSa9d2K5KiWrN11CdayxQFAHAaXWwvMJD5P1Gw5Q2sFBe9nnU",
  "key2": "3ZvU19H1xANtXTXM79UsowWkiTryakVJUQYpucJpY9R5jEihFpKoAthV9kkSSyQmMqTzt2hxdsigynqsJMK15Xqj",
  "key3": "4A8fR9A1tkC3aCmH4DAFaSmc6KsDKshYiWPVYFmtRW4ksiZsgpN3u25Kbh4gKm5YHitLeAYA5REkh63CkoHxxNNJ",
  "key4": "2DZfnD15kxj4m82LnNnZAxvfXJx1V1ngPECAiCSvbpWpXWR8n23Y9hh3ipvK5ZHLd2MVvcsZwZz5hJzjyiooaKGH",
  "key5": "3w2y85QdXLg87J4aN9XGn6uk1qWZX6joBUiM8sanrmW9ksuQ693QaPi7dEcBH4WjodPsVe46LuD5BCbbrenT8Ub9",
  "key6": "473tNECRv7yrg7NPUsCFTyidy7uWGMg36V9b9dTo4tTyHkdN7CXRkyzrKnwazMD3guxJkHF9QTz2ZqkQFhB27Nct",
  "key7": "3ULWGasTPjWjG2K7GydCQn3hWLPUtAZZhyWy7PgzcYrNdb6XspsWUiJNW6ofuFKvuLcbvBwZHAWWcvQwGX5NLjFf",
  "key8": "24VU8njRQtiYmKMqkPrQGonhUmboZ58yZYfA3F9geAh86JW9hiYT7ppNyC3JWVaaAh5ncgwiDFwApPrk2YbVJofF",
  "key9": "dwgCevPNXRDS3eDzDiwYnDLxMVLTQk3PsoycAFttxUiux9nTrv5t5zNEY9STGhJq6xepQTBdjFmruRs2hCzKwrW",
  "key10": "V2p2uq9ZmkwwNcWACmLQN4YRFwKh9h6R1tbtMeVSitbXckv3fjydswaSjPwjhs88JhMLVuCTGt65H5QK3P6SXBS",
  "key11": "3roCtdCtNxy3Eu13qSmnbPtnvG1Nsk8cZGqgx9iShe5eJyeHqf4SLvaHvBuipKYiDzUshyM5NhvdDHj3yvS7LDfE",
  "key12": "2FASQKv38QusQatb8ENBN7DVJbb1C5qR6a5Wt98whZ5Czyth3TeHpNZHEriW4uzoxXBf1mLLtd8XMHcfaaP7HtJY",
  "key13": "28198UXePMtLzkJcMMQRNQ9JSmnBZUVia81MDTftWQ4TVPPkmnacGP6VJf29egKvzErCGeoppFoJv7QnBsVFQBNd",
  "key14": "4D4ovwdVxurVu2xpd58DbpyixbkPZfR8cZJNvUwPpbfPNQy9f9vpk6j8hNqKou1k3Nc3hp7r9dnzyA1fT9atij5r",
  "key15": "3LVQxboE3w191YZrLqXkYF3CkywqELBaJfBkHW2yaz6b2DTwLpg859Zbg8ADgs4voA6xgb4xfq7GcWJ44vfLXXG6",
  "key16": "5w59hQwK9SAUxZ6zrzDLn15fcbrLxFEN9nWKZ5bvgKdbDLYrVN48QQTp8eDaG9bSvjATfiYRpePu5tdX8fdUjkjY",
  "key17": "kZQuErRuwABsGwj3n99d1BkdsiVtQ79zpd2nGwDjBteTjp5YzUak9fLvmNfAHMTSthFcKU7g4Tatqe4f5DXyCHg",
  "key18": "5x8CgVr8wyg7YWHx3BooiMwW7KQ6LZgarFdmWHuQ76Rht88yPLYV53EK5hNgg8Fcn299P9ACeqVXASzxtaasrQrK",
  "key19": "4SJppVmpksn8pWWB1qi9cF9rbJomqQSCY2ZLdf8SfJEa2DZAKa4VALbr1UAyAdtv44RrVVwRxUekDJsjqeNjy2F5",
  "key20": "3hxA2bw4EoSiaGMT6jBo1haGvfL21NMJGd4vfECq7Cdfd4mjtHMTTYPq3aCLgmg5evpsb7DFqVFoGA6iQL6nMQQA",
  "key21": "2jYMYuTfdSPqce8A8kU9YHXrYU4VDd5jBxW7BC3C18B4YGeuDLRSi6i9B3xTDPBKGcyT2oJGKgF7m4UQG8sJ24o3",
  "key22": "z2V95rjX8ToN3ueuRij6X2Ku1naNVZJ38eVJ2dg3G1DZp6svDcwyt4rFgpSeAr234pYeGbCtisjkAFqeVFJvLFx",
  "key23": "24BXQdCSx2QssQArrxk6Kq2Y7UjgW41cRhCxKKRKPTNwPzT9YshKpyKrCuNxZnMVHvNW9CUcmZUxhVFG795dtEqP",
  "key24": "p9eexL54Vqhm9jy9uaFmUrDqG6hPVkegpAR3btsFk6cu74ryXTbtevDvq9fWDNeZGzzrXG7G3YGuYGzkUYDfvif",
  "key25": "2RX4JGccajPQkYt9c9ymoXqD6sUT2JhxFa33iseThcEauQRNoNUSHgve7tQjvkjGMewNnyUurX6DKqJqLizaHEi7",
  "key26": "392Fu3zsS9nj42n6fosn3ZMaCR5Jbh7Dc4qT7LRMsL3VwSkDJ13rXSXq5TxoLmEV54GkUtqTvWRKR9Gzga4zCizC"
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
