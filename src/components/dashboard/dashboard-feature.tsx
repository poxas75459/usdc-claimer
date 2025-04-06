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
    "3kNZuwU7TMJSf53kdqNZcm6GyBqctSwFwaf8pbhMBP1q99bYGAdq46uaKPfUgshX239Ryn2ajrzerMxTkryUucPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kaxgb7GKLKqEdDPZHzKmbN1XQTDqoQ9kN9WSwj7SYRTqTt9e96TPjuUXEAnPj7effZ9LBbuA4zCJ3MGvuoVucP8",
  "key1": "3wK8kUe7JWQFTCz66AqDuwFPHnUZYYgXwANcH7auh5shyhHg5CDu1yeVDW9UEhz5u4cBn5PR1bpmHcBr3ewhnU9w",
  "key2": "5dj6oSJjLVJKjPYsitM8KRrgpiYAN8tkm3jJTV849w2XQh3nbnPUsuAdo7ALcjZY3pvTu8WbWn9fxL4XVFAKiHZZ",
  "key3": "qACRK6MhtdD2ZzmBu4LtgUEWnMh5nHuhC8nt8kGyrSdhq8UkrvTJPavciciV76wyyGsLMwa5XC8qxL5ftWUPp77",
  "key4": "5iEzs2EWdSedf3YrnQztR5WQ2wQvbtULRKbYEEfgdKqRQx1R9xQMBsrnhagZ5C3ZXnvfmhfCG7DtxoqD7cS9WQgj",
  "key5": "2X9esGUyUdELF5bGqDhwTeFFbXfi4RP9N2fnYBaGcKJC6wVapzA5Ag53RZB46o644aoNHX2HLBSxtDo3TYLG7nPV",
  "key6": "4ELoeoXmw59uLqLtYEGUJnh6fDif7GTpHeEfMDPioHYiMYTPrs2grUMtdKLaDWmyuMSiPAbow4v4orvLSBtyRnhc",
  "key7": "2bCWpcnmRoQbR1BYFSqnvJpShVte9d7UUpDLjdBZUSAsq9dGM8aZT4CwB6siyjtD3yLysjyU28o8C77okxNCvK2a",
  "key8": "2c66e7SmrVW4TbDugQ9Zs7E3YNW9RdLQ3QG9ZuP25GYb8S8NP4yuWPHotB8wuJKZ65MH67F1FzbNNMAkqVSs1ZnY",
  "key9": "2DqFV9aQygSkK64U2qXZoFwSEcWnFAZbTQ4dbD8G9tLbUFZVteKG1pxDrWWenF7nJCrMw71UsT7rBgLsXSy5zB91",
  "key10": "y6DaPwGPepnv3g6QhZa94wwUb4MNTMqzFa1FZ1f7m768eZYQbxp9LmXhzRXewqVL5JRmXj44VqPbpZ5zA3ypwUn",
  "key11": "2GhAXERRfwHoTva1uiHXgXwaPpYs3UivBYZNgMpuStsZcwu2ymtDRDaZTZieCk7ra2nWs2BxWKHX46wcB9uPjvGd",
  "key12": "3rbL66nUGx9vE1LhYkn16LkH226VBTpidXn5vx7iVJovVxogEeaDwxs33AA84jdaxP6NhwbpNhsWucEdUmuMgLst",
  "key13": "2osyT2TBDhLoPXJAE9gd2Q4SuCyMSjaDf9cT1UJAyLz7AhL6t6hVyrFy5AjuEkv8N8dfSsVys4b35SbSMzF4XHpu",
  "key14": "3my8QFXniqrmpHnwSwzU3bd34HvGGQYFy4528QVZdWee9LN1c23HYNSkrwNLYE5T5VijF811qh1S8Ze2rC11jzpU",
  "key15": "451ZKtaxY5jFB7D25vCqsHwXFYPq3bjFFkd8mW9CiEZyzV7a6tWLLjSUUeruHKV98RieFcjHdEcYVyFLhnYXZZtU",
  "key16": "38PJTjmjxe9WekkmtJ8JgEeBv9u4k2FgC2Ncd3VqGARnVTkRwYVjQoz6T2vNAnHHYJd71itP5psTXpm3EsnV5ZxD",
  "key17": "4nozhJqk5iZ3gorBgi6rfjrqCS9TfQW7EfCJHar5W1Zh9AWVVcqYxQXeiC5gQeg4QXHZPcAAxkUrtE2bRmZngGo6",
  "key18": "2qpmGvs2aicDhgMDADMRuUvuPUYD3saTH29b6XBp2TfoUziUEGt682gFYwTPEAwU13ip7diCdUwMDjTbfAgJfZqB",
  "key19": "4W5HGGMV1abX8SameNPJNbQYMJ7RQKY14XGT8Me5CPzLxFsBJh74g4J6oKbj7F5cE7Bs3wv9YzfNtY6rm4QYeLxz",
  "key20": "5jrHwZXLgbyCvvoxgmPXgfe8D4BqgdH65vMsosm3CPMSKabKjk2LbmhoqcNCgvho3BdDANWNDAPARzRdYeLiZFs8",
  "key21": "MZRA6soYqDuVvvyenWB5TrWGrbaqh8J8Pxmnk2JCVPb8govQ7kru7eUsb6tqqzjwkBimCFsz3BiPSCcciQ4ZmZt",
  "key22": "5M4zAoKqfJGYq5phHLY7AD36rPxVt7DRzmUQ35n6TR2X6jZwPEDfbn8KYyJeYetBXmXY126FFP9kUEyx7PrjMnpL",
  "key23": "4podscXjZ7zNZK46TGRcRCxYy2yKPFFiymcZpK5bpkFwMhoFdksCgyEPrkQpaSiQk71ThSHoNB2Bk9squh9YSwct",
  "key24": "5f2ctc3sMSRZDz9Njrx2nEzi1oXjFbmzY1yZRNNWQJo5wSMjSbvy5yGtuPXn12vJ74HtdcDUxfqGJAqQt1MtAfXj",
  "key25": "Ldax19YWrmCwQMcdcNijiiG3HHoQ2nVsW4AkVKJJ9yvgtCofoqhtPD9gkvyGwue53k7H4WdvsXh2iXjxk3ynFaz",
  "key26": "4hsahEMuTJbXchoQk2Zxb14JdoumWsZU8FiEjFBHjFVLdT12hx5jKt8CYSJScKUX6YrWE59Lb5XbqpwKvG2hi7Dr",
  "key27": "67c2YVT3FGHkyZF6EQBSKZk4AuYSHaZT5ivwX5gHxMe6dDyg8RobJgtURzCv2q68ytwrZ6wUx8bRGXuyrPHoc7ci",
  "key28": "4hik2c4UxTCeRhMCaZiqLfuGuWy5dHZpsBhwFjTCaP5aP1aMa2jZjQvnsFcpkBMwDGiMzPL2sTd3uT6gXT4PcNKE",
  "key29": "s9wE8texBkPeNm5jPQuJEDEdJYiG6AB5mhqkqJRMTokJN75ffs8ac6eAcmF2s4zpFBoBCT6ZbFNyezyQ5GKcCSe",
  "key30": "21EZYbthDHUHLJuhXfSZmxzNJbxYpZinvqu2is61taAa2MmEZKeqp4m6Mzg1Bqyz761WNJWHimJnVaGMb9jYSxFM",
  "key31": "2aLuaJL5ZhVM4MjFMgdD9LG7RcWsqouv7wdG9oxKz9nMvNWXWSun9XEJQTunVDMZKjxV9fea6UJf22PujmR1neVv",
  "key32": "2jnD8NkKFTxnyDkWUYX8dweEhZKrgt7kAuoVt3gmWyik3TMzYrtj7m38SG1QnECADoeRqA81JRVMH1mJ2rbfRucV",
  "key33": "4dQ2YLiiGDJHvk4Sa8zx1hnjSamqCFcSRPBXhnnSuw9m9nSKoVLKyNg8QXL7UHkC1NLwjS4ukzfx7XHv3qDNSkKU",
  "key34": "gUmpdDEojahCCBxGrt46S1hbWr2Cy6xpvCurZ5bZQHww3kdRzmg4YC6eLaAdb48Rbp2bNYVTtEDpnNow6uKYpwz",
  "key35": "3D33iZEoSPro99fHEQXZEVkGoa8HfWtPQnKhsBHj8NxNnyCgyP17xYAJ9HYAzFpbyfacKFrA3UCCx8RoXgB4k5xM",
  "key36": "ZQoDiAjYW3KR5vsWPySKPcWu1cZrSguzzVXMCjJiHEFsdnU2YmEBSFGcJPQAPcPg9XXuzUss6Hu4rYZ2YTb7cUw",
  "key37": "3zmnbVuD87WqwqyJWScfLaCcqwCNbsw5FkwDdQpCc2fUpWajkn5Z11P2xvas18HmkevkPtLnXcUZS74CqR2b7aHs"
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
