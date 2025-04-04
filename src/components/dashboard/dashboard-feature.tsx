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
    "ZaodSHLVbBNaNNSwjBNiSAkQ5atr898PQG4okzPwwKrsTf82eDN985Fb3o1ChctaFCbh8QA2TT39cYMiFgCT9Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QFkRN4yXMRxQHqZEBGdBSXELff5CmRap1qytTtPieE123MerXEGkSfKdY9oA4Z5BDArGB2L1MK8nt3geqDvygP",
  "key1": "21Vdp9GE72rm1rhEZW6vBCiDU52kejqBPeZDtsgq7sBaveCVsk4Bf9w3fKTkaNse8mKzoDiYRCXeJH7BhYKcqVTE",
  "key2": "QYZNPmwVBqQAMHBKzTiXDyHK2hYPX4ia76yEgib4tYTjH827rx2YDniqAqWwk2aPHFEDT7dhz5qG5PC5SrLMV6g",
  "key3": "7J8qWEVqybiizyM9JHGbzFh9MmCLRLqJVpW6AS2sHJUUxVdUTxP7sbma5gPhBviJrpQKc4Fov5d1hqsUoCbX5Qz",
  "key4": "4GUE8fvqF9fUneRFdAr9VJrtZj9uj91CAgifX3zipyaPXUW5NrhEXTFBHfoWtTGowXfaMEA7kKK5dT3m3vYJJpDR",
  "key5": "3n7ywt7XvCBbCbKvNggDNjoybf1unhaVDdDWmMGgVbEm221yV8As6AybMwYTc3k7Wy6UeCzvuMpF66aNuoT4p77X",
  "key6": "3QDkiCiGW6TSdvh4rhjjPvwM1X7PL5aJhMLLirLXagmTuwUyCACXWJU5hQhW46TUoLyuMNra6XwxSp1bQ6FttrrK",
  "key7": "2cnRLbg8uWueNyPnvX9QJrzV1enGbjvUKBxgu1MHHB1M7kmxsS6bVdqr84RZLKsSwow1cNAbvnS2VDAuPn9bYW2U",
  "key8": "XjwXgN1mDBdHpUSaDdCBGS8bgJyiu4Frfyo9YRQ1uardYniy4NHGcx4brCdBX7szmqnHBdCbdysc7J2f5biiHac",
  "key9": "41p7nVv6ejHrKu3rrK21DYjvKwzoHbM3NCQvk7HuBywef4yxGZih4K3irqVVHjB7TktRrA32VKGGs8ZaAMWtxrE3",
  "key10": "FWZXh8CC4EVya1PYBwqsUtSp1DcuwqMTXgFCrYumhCecoppzsrgNVgcjDk54mJYRyMPLZV99KP8UVVKATqeXRyY",
  "key11": "ZVtPuDbt4iK9LLykAEvRW6NV6o5DExmKMnMEMC2pHmxtQBJGK794fRKNvupybuQbi98p3BnqEoM7SAy6T9NzuD8",
  "key12": "4E2uizo81BM7nh2ZpczchXzGRfT9vUEMCrGs3WSfmPpW1zJotDEUFQe77qtj2MezJJxxHBbPKG6ZKeSiruAXBvgW",
  "key13": "2EFLEdyxfChva8vGWsxYfW1BjnE5SYUoPCutNvNLv1PbGPLAs3mdayc1N4gDrEro2kp9C5S6J8VH6oVz1cN1qmp5",
  "key14": "VCBQRAhqVVj1VbTRWW8iYbEtcGD3NQkaRm8wjEz8sht9rjYH7XWKWzJFyGpyAtyFdyWV1ydZ9yP8uXXmNd5H3E3",
  "key15": "3DjmhJM1Ne15dvhdQT3HAZYJvZwrkzu8xh9e8S92P4FHF5Fo8MhGVt4EjetnpQA8h2y9bs3ujefgJWVGpVR2q62E",
  "key16": "3HcVK8QsAHsNhTsA4tuUx3iUSgf9NSWEVbF4xa9fAuDBaYryCXVL68CLNX68pwXH9s5WGadhtfyFYSt3U9vscfTZ",
  "key17": "ZnvcNwQ3UjW1YTgvymFYjdFFXDZqoUjWoFjHAh7wmaAP7ZfhYrokKvBAAaLPKHcUjr7Y48qXZBjkoVCxZnjPXSh",
  "key18": "27WTwHx3miW7L4SMHdhQ5RKQaxjaSTHxH3AiFQexzQUPyLvYoc7iFyckh1od5cN6MrnTRXhxwHeZ3xRtmN1XFsix",
  "key19": "59iS8CkQT6xVc2QyqgUj3sQ8Ko1tjykzoNXHZTdapEQ4oHqZY6TNsXDVAsH9fx6rJDTS6aDa1kRDMmXbWLnwnSH3",
  "key20": "4pCnYhiZTCJsedG6aKRitaNUpQNYAmUWWxRXUKiUQcJxmsXku8iour6i59rw722iKBhfGuKsGwu88DsQVGYq1ERW",
  "key21": "4rE1o2KQcDzKrrjEndaqbNVynPrM8VYWbmLPEc5DvwuSC9hHUv3vL82g8nTNZvEAywcsZbWkBaf6cscMoTMjTQUE",
  "key22": "3UwjKCzF1eEqTWaxLTqaXYi4nMW2oTXhkWn1Eq9KRHPjzEaH5KpfqW1xotfNZEPr2h41P3x1H1biJ25jWrLifcV2",
  "key23": "4TPq7Vq498Phqfmy88bjLYVxXMwBBYsBzvCgx3MLx4uuoHiv1X5Rhf8Ad6C9uMCcUfSEkRjwNXru69677QX6E3cK",
  "key24": "ebikS2EH77Ms4gxgbDvrbc9hAfpkKzrEdGA8SRfRTdYyH4WcLR2Mc32skzgzrcepyTC54uT9S4P5SHpq2fikxsB",
  "key25": "59aV6Su4AC89hi1AaBPeAmqiKT1aHMwMkxuf3C5MmgYCiKSGSN7kC5F8LRx3UX28oftnFvYq48xpU2euzLccmmx1",
  "key26": "43LoTod2EsGFqqGNAhVoYoxQfGDHcjAdUGY7uBjKmBYq2unD1Mr1yh2NNpTeLSJu49PHGfei8myZ9dV8osiui3u4",
  "key27": "yd2fFRXQpzy8KR5tc9L3P9moR3zKo594NWeA76Vg3RZr4f9PsKnyLrvjtEEfXg14krhRdhFjouNaqxjNLXy5rmy",
  "key28": "4PxgrL15BNMp2oZgMz8Wy9Gbp3petTp31zRJNT7NmuVw9oD2fbiCvoi3eVgzkABXDi3SF75hncRPmsUCuGxuaQN6",
  "key29": "2NCenGK37M5fERY53GGPVqSZJCuiBqt7HuTRT3k7bjC1h4pwxYwh1mpowDZtG9EAUjrw6aojf6zWS9pyBPzMa9r2",
  "key30": "4VKKnDihk57LEq9XWWzxndDTHB8hHKVYEyD6Nax6tiJYiHLHovhys8g8m4rxZdeDXjYLwduMqipYzYr3tKMrrqEn",
  "key31": "2k81yfTVgo9eGkWq75WBXGTg6bGKoqTnUZFbWKcPpfQKneMmBdUdVTZQn4q9DqUQ9r895XskgCCL6o4n5JuFBCDN",
  "key32": "vXG9gZEuX8LYyJXv4rfQsho9zghFpLBrgyb34isRocfCTuzohc8QcVSkQ4SbiY5EFJYgH3PW83vTZi8uX7dKutD",
  "key33": "2JwYTrFtc4qLAgcKqR6X99QP9kssByoy9eEbNpZtX4QZ8W2Z3bsAQSPSTJXrUpDqAWNX1xL8xk7CqP4Xq1B916tN",
  "key34": "2bx26U5ZhvHYVEcRbQEmMprWcysbkVLJ9Ec4o4sirfgJo2SHKJ5Ju2K9kcfq7gqkMFG9qKh6v47Kar9y24eQvRy9",
  "key35": "4Fij2qNu2G9p8NzefYWdrE31HSH1oPqTJHr23jXE1BXqMwdnTr56qY9ML7YBnqJKvdE8adH8kxBbKP6ZbS5qTENS",
  "key36": "4cQAc3ZDH4iiRBVhgByx8Jg5cGfuR9wsRM2fYo9Rb48x1t6bFKn16qtfUAmxmGgqoqjJR4Dp4j46oKJgZoNPokm4",
  "key37": "5TpmDtQ3t4TvREeGwoATXg4fKYTKP14WQzoqvbWgUqvi89nwpeFXbvmimLFXJ6mPvKSeuswFcvfAAzbwA59n1ocn"
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
