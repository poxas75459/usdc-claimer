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
    "3Dg7DeRKpKFgpbDqp81y1WQ91AQuMJHxCHnHjSDfK4kqDofsu8RHFQorbsyLtxpyUaWaDajWpRL5UKsKKH7gQoYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMQYoVELVPBowFWkH378d8P4MS6C2sAosnBvfmCo38jTz97kZBXM4QB12nW7CbG472s3pEWWUjqhVCK6ePqa8iX",
  "key1": "1vj8PKfbtknXoT9k34ysRmMrCp854eJo19kNMRjVZgkLriWdTD75rkZnWkcLGnR53bA4WAd32bMTovJwNasvz5q",
  "key2": "3rthjc6BrrB7k5epEQQq3faQ6eiNBkeYsymYJuPAmJ25kP7ZoVmKXKkiHFg11KppGuuVRkBVHYGBbwxvXt8DKn4e",
  "key3": "3jfBNiZZ9Ek5vMqgyYT7fLF1EejYspHhqq3Wu8AptbG4rDHMbhVebHrrZ6pDYDxpE4LmkW7VUktvk19xHWM99vmG",
  "key4": "3h2zWUieWwquHMiYYf74QCXwoX9MgFn4x8fc2k4ukrWqcYieRB6F2iiSYXJQNB85bMKxvcmmWyAPjzFnwMVKvcP2",
  "key5": "2xStRwhsChc1krdRcQcCsNY9to1ArjL5FyEBeR6JQpwGiM5HuJzw5xQMdGjBnrg8bZt8Q5y5PVsha7hCmVMhNo1U",
  "key6": "1F7h8ykoNECE1ZxCSRS4Fs9XcTwERUGEZysU1BNaScFo5Co8V8osJ6Dv9BvbcQBcyySo2wMcbJn9cxp6JAg2e9R",
  "key7": "3mdhuXf4WqSxYgSy3VeCBA9H8yTar2XZXbe8vM8FR1ExT6Kc5wHyxxDMooBs6hd3yEp6iaP99kVkV3jtRJa7QiyC",
  "key8": "5zTyzDeER996KrfQ88VAMx1emNeLpXKFYAftDKTWdB5nv8Cx5YwbAJg38QkoREpJHh3HS7j63zdAfMUVxuhCri9X",
  "key9": "4N2fJ5oAvcr8os2Z4V9uJZPDiHVgySFWh7How6kPv2cPeb5GGSBxGaPf2gDjYn9G6F2evayiBVoBKzEr6nnZrgHr",
  "key10": "6tDKkCz2MhvJLpvPfhJM82AkNxV2vBhCtzyRfCEFWdwSJJbwu7frKPVNBMvXtkjFxQw1ZMhqLiwDoJMzhEvNW2w",
  "key11": "kKpyTxCgLWKPhHMFP9MWLgMXSW6ZwahRH6RB2jgnfCvYF2tvsXrU6dufz2BpCsMJx6tt2hW9dfy7ftYQhB3YdUQ",
  "key12": "3DyrVEx4xXBKE63KYDQARZuvgWVaXGWNXWtLhybYNZEB2rNdJCiNc9eNbV4nqfsTF8fGcfd7RGwBqUvuFgm7abPJ",
  "key13": "FqpgDZyM5qjvN9zzDtJt5zzjRsquZJwa2U1rTFVocxPxhZPE7rfPuZKSYfts8h1XqGLruFUsggrcXDozGNU5vUa",
  "key14": "3YRJ8afWd3CtPqfUf4v3L6yBgDHw3tAiHu9cLGhXJVCWyegEbQKPnufwPJjLfRtDY8VEAAPSUvAVWbJdekgzbHMD",
  "key15": "2uq4S5wRZC8b46bgkyPWTG7i9YqkHRFgB1XY9H8iFysbGidar1W6PAHVoeRM4oX5cpEtGkA9hJ11s2RZpj5sRzSY",
  "key16": "QHzduyY9hrcvZeLmpEmr5aKAbF9Fen9VvsGQioNw6wTzmR7AB4LFMY93a8qZ3uZMH9MAtXonUSG8HWMeDGQuhui",
  "key17": "2PbeTeyNvc9wYcUtmcCbpzKS6xQtg8cgaYk5Lt55kyee2SD7xxAWHRivM9aZVVEsNbs69RTfEVPdKbsBLaqG957y",
  "key18": "xSFfTRQn7j7VnaYcHfoZXhHLoKumtftWoDHomE76EgBv6PjyoicW43JHUifoarawdEqPqBdPtoheZLMP4vzSqTo",
  "key19": "2UYDWfd5VkjxYxHVSeJUvS63df3Jsfwd1EkcSTasSJ12Erg5TdqUQ3rK8c9ULJ36xu6T8yo5toDvzXJxRvNispFk",
  "key20": "3WcD6VQet7gzPKUCscaeFio7NdcRxGgwMemCNQLWmxdW1NQe4NL4YbKUvLbuyizhTthBKatfS4AcERUa9zCBWBcL",
  "key21": "34FCtDhXHgFCfmjeMGFW5zMVERxgkzeSuQxPvpWwFMLPn24DfC27HkYbcMxdmEW9xcThGQTru3qibRJM3fsgjbTh",
  "key22": "5WbofTat9QW6Qf9dZeUXpM6HhpDLQQxdHhJrTnK5JzUPsbjK6aM48p1jHb5WASQSwcEfwT9ZWBJj8vsLHNFz4Smj",
  "key23": "4XtkAsyWRCprgxyFzvfNLk2P3gsoD9WytE5AA3Vc4t1rTvMEEMMZKgq2akcBGHdHqBoau9j5BMD8tu6mSJ7Vor4t",
  "key24": "2RPbijnwXieBt27aHFE8VvczMaoP6dD6pvFt9RYawg5cV6yDpxvmHVvDKVWM7R62JvZqCtipLkSv6eXWrDZefzyJ",
  "key25": "bMggdSKGntNDmRJu3XvJYqBDMtwWzX3RvYFdYovWDPFNiTgBb2DHLcyxAX1WGu9BPGPpAY4Zi72Nd3JVMk4z7es",
  "key26": "3zUdiZdSgFo7D2SPTeZCxDjcxB6dikRvXNDMGWjumP5KtP6p3fs2qJVffwubCRAjQjzgmpHLQJMRvZLQeKnzmauT",
  "key27": "2VJJX6w1acE4QVDCCZx2s2vrqE8EoCQ9eD9scVCbs171aAMps8rq9q7NefTQ38k9521E6XaJyqjgsKL8HoZvywsK",
  "key28": "2BTjHUfDafugDRDj1CLuAD6GYoWL85RqQgVwDcgB1VYaavvZKEqUXgkAUjYYQ3v4i8KSXRYvmu6SeqSKfus1VjxR",
  "key29": "ueSVLBj8HUYjLtLxfL8cx4GGeJu5yv78b3KUCZzsuAWJE766pbwNxQSWg8ij1UiwVoNritA61XbLwFFRvSwWi5v",
  "key30": "5wFxTFxoreQFVB52pDjNNuovc2SSsjKCQSCTYq3StDezjKCeExdADn9cHnLKZGLQguwJtiJtxD3WqAgERt5etEis",
  "key31": "5ZZrGTtuBTaBVh5mJq9Fu5PkC2yYDaS8msnmcy156zCyeLfN1kvME6N2pXAqVyGh9rZAFjosVz4km6U26asAZKVz",
  "key32": "5fibY5XugjdrM8FQez7c3kywooBC9JMqttxcLf9dSvHBHjr1bC4APqj3hm7Ug5L78GY2o5qVZU4wcd7S49gNoQSg"
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
