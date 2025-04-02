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
    "4U78YjMduodHGiMcxFSJ1JP2KuhMt2NUXhqUeMB1dbLEZbAK2iNTi6xuACSUq1FkMzMDKuAr7416HLtkhWBi2YAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6rDBB7QbkFze3ri2W7JNUWgdiPLf2uk2vkQoeZGLodYysMU2WRC3p6rwVZmHXGz8ZpD5WBjnJ42uoy2SPhSddN",
  "key1": "WHN6uYqhG7jvFZ3LPTvV2xMjo8i3719X2K91Ek52qSJv68TZeuFR6yesMtC6TAbjuD268tretPpXuXQXQgmw5Y3",
  "key2": "5q9NyiunxaAEhQG1VWgS3qGqcrU5wVaby18sirUzYxC1692cD5dksvNA7Kg9MiwyyyPfE1Fvw1M7VcqGAvbonocm",
  "key3": "5BfQj7Zopjjqcy19QwHYQoMMZp6cEQdhStvX2cZk7q4TaG3AQmdKEkgAMwz71f2LSEA5RoNABXqBpJq66Vy7vLh",
  "key4": "3NNkhv8h73FAMouxZyXJEoZeZmZZUVwRCjdCSdTeyimNPwj8wRKgBibgwvJnKjHn7hHptxrygTw4r3dVhDoJk7GC",
  "key5": "44TUD1aMaesDTuUWZrVQPyd5oBvQN6hFkNAtrSjnPbk5wbALonaPK331BGrkYbGqf5Soc9sxQMmm2WDWZYgtKHaD",
  "key6": "2MrQVXZvLcdFYePPPAcvUQijob7VwbTTWVsv88kTEHFozASSQVjK6VgzJbkqSpE8sYxnW63wUg7ihrPTCA1fHheQ",
  "key7": "2rZ4fzFgUJxcakGGmMQEB1sJqNcubJJGY8AsWBrrbcDje3zDoFrcgBBrwFyAxHii8dfcac6UKg9tVupznYGx1jNp",
  "key8": "o8ZsQ2FaAmbBUG5jKMM7eAoN2P2vYzHgE53nKWgZTYrd1vbQXBGRd8PYuq3YWcHjurdGK1fHJuPE2cGzoAi2pLY",
  "key9": "y9EnFgrEXR6QvSvrBjQusDJo4dceZXDWynvcv8WmBAxYZBDHjEP77JqdG3fpdGooHZiEtxUr54sWRhHbcC76wVS",
  "key10": "2KqebqWut8LTzQzCDLHqduA8Ph9264ff5nNkwA7itVsdY5QbuAYPsyko5hnuE9LTKQGw82LhNpqJDHet6iccgm1Y",
  "key11": "5pBq1X5iNdAG1SSn7eHGXWXx99PyLtoutBVsxREm6hZhG5B9GGdjDz5rsUoSsf7emdkbQLoKs2UGnK6rcR5chV8p",
  "key12": "43AtNSZpiZoDzJcDP4naWA332QGpsaAAB3yESHPZu3oLSo6WF9TvzByF2k3PxbJPjqDBR8HzTu3w9i4z5vCbmXLC",
  "key13": "2VCrpppF3DvDGZKvprhyLEDAFroKUbdBwhCNGoXPSz3sJG3hxXpJaZfN28N6GgSTLWi5tJ6sdyCmrS7kg8pJ5Wzb",
  "key14": "5BDZR9Vs7nWkxmQNU7Hh6onyR2em5DySbXRTkGDxguVk46Kceni188gDfGDEXTrWuyeWgNcNZT46tDWnBhMHgKGk",
  "key15": "3JR1eqZcroouxnWs2Wq7mcxNvLQgbXmggAjwiLzfYXG35Lg53qo6LmVzPLkVK6eoi2oTL8c67R3qtsyLVBop7TJp",
  "key16": "55rnBBx2EWaKAPgSZGiK1u9yRQcRdeEgXw7AJ6nTdhyCkei1MhH3xkau379BWYdZMEdyhKATQ7utwUgWVGzpghVw",
  "key17": "4TLGsGzm96pzg5UJWExMTyi52hBXEQjmPjNmqWN9Zvid9HprkWhcHFwagw1VTUkwMZz55CMFyjb4HzaNLePu6sFZ",
  "key18": "5XVUxQuibaFmJ9ygjrD27usUb1jpLx1gMYQM7o6AmYmgog2kGRM37Xwd7niKYGbaEFpdAMay9LFwJeNhzdkc5K4J",
  "key19": "3giBMVAncF8e5KZFw4SN1wGWu5SWrqVApt8zCMv2RCsBxadDhaTZp9mWbRicmYCMq2bqqsW6toNC7W8KHPTDv3WN",
  "key20": "5SnN8fphanXRsELYeKWKG2pSvSmwn17DeJR43JagtWgyfg5qMSr5QfUj3PkY6jbWWZy8eNmCP7cJ2EqMxrbViEXR",
  "key21": "4roGeZpcxTkiGXE1XscwngFVrseur3CkENtnu5yj7oqzmuhPQiKDCE4ox5rL8Fc6nQZnqCzSdK27dv7wheJfpw1",
  "key22": "4UUE1K8PJmY2bKVRTUyS3QaZe28jKL4ADccvMMjdQ72AB4xjtv76iHPKKvKxcKvKJ9RWq7bwJac1gosWkf12fmd9",
  "key23": "vnHMMAcanYaig92sFyhp6gaawvdzxyAABLt1A3JjEC8Hjb9Lxa2gpHQjVerhMYEDgrExCiBftTcGjYfRdPTbpmn",
  "key24": "5uVawSCZiqerrgzHmSm6WjcNSVDMfxTKy6YhG6f4dtcxVUrXZnB3KPeNddt89KpULagVyaYGmhRZR97YmPuSW9vM",
  "key25": "334tYdaVCJKnJTLr6SejzrPri5VkzYwny5GTHt3irpLz1WygMXVPxM25boDtos6gsHLc7ZjJtAHvDeMuTU6Jy3oa"
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
