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
    "4JjM4xNNkWw7DCkRYSDJ8BH15Wpf97owushzEaAitDtUdXw3QZMrSivCs2hLj7HiTTMmfMJMFeB8QuYCYBqqFM8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NP1R164VDSGfzFadeELHWNXzjFLrLum1QFEyjELNkSzNZyepiR3Uc3CT9pstgoq5uquVrFpzfd7xWAYnDtdadug",
  "key1": "3XoqsSggGCFv3JTHMPWeqB69m2vG3WNopYFjRFm6obGKtGWYdB6vWCroKrNST1gB8Gndp8HRypvMDc7RT5fGzejt",
  "key2": "5u1ay5JFvy9ahQiPMjULgPpz1gwYonxPpudvVYKofMbdUTqbadriTUhpSYq8WX1jnvSkMomzda2vS19htKGNX6v8",
  "key3": "7nWvvK74iBujyx9F7G7BCNMW2kAfaqiVUXFXsxVKqaSi1ni8w8TXPnqjL4KQvfduTdwCNFu9hhxxJZfDwo6uAoC",
  "key4": "5wRuHgvaFkmH212MFqMVu17612gVPFatwkN1B31SZgMbZJeGCDsTnigVbqZgejXCCnVgik89pUoip55vXX7wuW1W",
  "key5": "5VdeXch5jyq1t4ShpVW8sgcw1s9RXMmjk7drYFWhAXfhqYZbQhVAZnfSkAqyNBapsrYnwTfzGFdQdXQB7SDRcnAo",
  "key6": "31nx3RyUW7XoDZzzV6sucjrG16pjjXHMZaLdgoJ3zo1Pq1NBNRuNzoHLVRybMmes6HF6iD5b6ArtHWQAD4Nob7ar",
  "key7": "2FGgapek9fSDCPfCxDsmXL7rDZtsNdSgYoppVvnMJUVTy3iECfCVQZna2FjQVEjV9pBP4jjmC4PeeeY3Y78FPLbC",
  "key8": "2BMbBkJWoV8rCbuFdRq8xaPdzCTnemdxPS7wtZz7xaR71aNG5sbqaguhWfnVVS4aiq6d4vxiAUJBcdGVPjh76ZDk",
  "key9": "4DNGrkDKBXF1aNC45DL2qvMamxFhTVFQ3urgUbobfBNVMYWPSFjtax2HiaH1FkZrUJEkmoGYt85CAKnVnD4c1hTZ",
  "key10": "yGkTC58JS89SAbLaBV8zoGK11JDitNDJ8U3xG9TgjB9SmXgW5BkViLmhuQPu8SHbCDaCpaskpYdciLpGX77bsXK",
  "key11": "429k4wPwd2TyfAtFTkdLL88enAqe4wdZWXhnvN8oqC8UoQy7zKWKDbLxiToREXSfexAdd5bvz9swrmByMJWevk5L",
  "key12": "228hqB36pQZaHV4ZFnAFtns6YJitVnUTf7k56uqzMCN1RSaSWyexTtbCc2fZqSM9wq2WJHyzWgJS4eKEFwEu3nA1",
  "key13": "3YeeNEQt6KrKDUHqgg4cgamWoBMiePTzMXmzsLYmG85TgJLNyQBd2HfBBRywy9DXwuEZQvTAou6uLG5U2cGqBUiH",
  "key14": "sFtsaAkhm8wv2rPYg5cqGVY33xZ5RUZ3iKUFyTrqBmb1NUbLdzQP2hMMV1gh6ykWe3EbGxMRGVxQfsru2WxtJ6i",
  "key15": "5gx2Qq1FiwoAJph6QSKG98Az7kzpwusJFQR6TttNR8nBR2XaivpSoXddgS9UvRziu8rPtaHK9oh4ZcTwbfxMf5eH",
  "key16": "4Z7qve4UHHBSH211cJbWmoXYkPbWmQP2FjrsWjT1MYXfZJ9fPWsJVmJqpHVkNFxcnB6sXMajLpEWPoTreKqioMY6",
  "key17": "3BojqsiF4wcSRfziMJhZd1ReadEEZSMiviczY3y4wMcMxCcN7FVATzzW8HQ6ZNSocgW7XWtiAhXZ97o6zHnknrDz",
  "key18": "kVNhJpxQ6VE38YLiZ1anMrMqmBkMPJc7jRp1MarWXL3hNiexUTH1HfjkKnNaDzGMcwKm9Vy1zXwR2u6jJS3mSBk",
  "key19": "5BCJJye6E7VWAoEPqZYjKH5rrUH73aXMz1m1BTjdxtXjh6yA6PQy8RBRHyUzLoWb7aNGM5TSsh98xBE9c76ojCaC",
  "key20": "59BtkxWHbaqsMyD6o2esFnBcvNZg56kuvmhmcsuBNwCgfXcgU7DAjr6mw6Ezi52m8t1UeP5wB5aza78vWbMqyrV8",
  "key21": "mCff2WWUUjAQqLZzAeGuCwPmXG3CEnWZhhtMsQfCBe64eLMDE4DNNcnRitaxUTAHcmBKa9DSobvxGK3k92n1Zuj",
  "key22": "EPQ3YJFPKSRD4V7CXgh8AJEBcUqF1LUjEDSHuuuRKYQz3CnYaJnYAveqaDuqUeDu84F6jLhg6peKG7iPy83NCH3",
  "key23": "4xRpiLrwX4RzEZfLBAqhSUQ4hR8ym1MUnefMe8CCG9dLU9sq8jRVE7ghomHfxmpkrbCKw4Dqas1EfX9Dn3YndxZY",
  "key24": "2KZsGr2LG5FQNTnX7f6r1tGVTE67ML6UppZ1N1z9UDy9LLyVCX43JTMMUpLwJGpzbjpQ6ZQpVr8Nz2hCWETPoUi4",
  "key25": "4GLXps9L8hSB7Z98P5rxhjwCqUV2kgkbnW3hAX5tQPPUbwZRUruk1iymv8zmFpGYwUkB4YFRMFzoJuHMWwQ1owk1",
  "key26": "5qWecBjje9ukyB6HEKHK1ATrR7qeVL6LJodbgERefFUrLTPkcBxEK3Qi6UEgQJzNG9KuTKtuDBEdZKVxKZdj7UDf",
  "key27": "36fnUV1ynXP8J4yWHX7bzG2mqQwc5Kdvt51CY3XCV7jo6Gzmj2BRWWmjKskzrhuxKdR8c5DPst8rUyE9NB9uGJ6y",
  "key28": "2KcrHFi8ezZDbXMrnTd9qetwhkR3jaSuTuvBLctq4m92jSjUEGcU1onestqQPwEtAihR1og9d2mfcjQ7A6hCDBXo",
  "key29": "5oHpAKJPPnGyMEdWC29SX3fDvaM7mEJwmoZj7QgdzNG4GZBz4HAJgzT7jNim532s2tQt7b7nTWFQAQvXFFMxaYPJ",
  "key30": "4WiJLLuXYbuKy2pBTi3K811CS1RtyjfvzvyBkP89Kaha29L3VYPwx8MiGqhPkFmFoubYLKur3B6RsGzspcDCNjRe",
  "key31": "4dB1eA4jhiEqo92J9Zsrnnfs2YZWTJZPHBHdqzX24t3iUbSawG29xYXQ6XecHjiD9ez4mJCJ9CXYE2PhHmeUngLC",
  "key32": "2nbbNauPH9hLqP31Nnh8J5sFT2RE5gJdnRFpHbEiBubvCtQyEhU1bEWFsBWY3NvMvnQ99ya83ujBr75NnwgGAjqD",
  "key33": "3WVizuy2KasV87WBccbRVFVdxZfxxQPd8RkuQnXbetM8ZEhaQ4Xz7ZBW36WL4E9E8nC21D7BGo9x1K3k1roJRKX2",
  "key34": "cX3sT9q9oCBwLyewZp3oD6Y7d4tNVbAowksck1LLFcQPfqDU1PqouQEZzt57ioNs5jRuzsozcY8eE5dS26ediET",
  "key35": "4UyGNE87DHwEZmcWh8Bod9oviwJMUq7gYyj26qXgALByxFg6oyMkXvXa3HeAmp4GZcS8YbMhZRf9ZUiahpYdxDyZ",
  "key36": "3noqfHsWcme4z5vUxZFhBr6dJqqpoL2k8SUmtntDoHEzovJW2b4YJ9U6imKsu2XMateKiF9SCeXgvbgiLazFccJi",
  "key37": "yDFDn8MPatEPjXpb9AMUjutfAkkxYXYnju3ZJgTzXxcBduzYR3gFtjv2fyzmDvC1GyW1jFseyvtJNpQNtBG3HUC",
  "key38": "2uHXvrZ97VQiStj3WHRpGk3szAp65NwJgseFZdrX22i9JJuJpPN88oqZNhSeNew7c5jEbpq7Hq82Dwzx7F8ubib6"
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
