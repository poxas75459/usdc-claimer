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
    "31mkc5iKWc4UepqTShmVtYXTFuXGTS2YHw9EXdC9ydU1fjKparB2Jyx92o1R7bdBMxTwbZPdAYH85pmMiiqMn4Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXcCDHoFhhAF2zM2GaeGxVPdo3HfUtMHSRPKCG55xxu4rcqE57svaZZnFJAeaKQJB94YsNthCXTBy45aQnbQLyA",
  "key1": "2uBiXKiXTkwvQBpA2hPpV6ikEw5HhszbxBx2UARdeM7tg3Q5iErfAcyvisU1ef7Zq5zjH1DqYcuacG9b9JAk32Vy",
  "key2": "WUhBrjgp55tpgxQRTdBo4bBsP5s7AwXo4Awc4sqDiecYQhVrNgYWdXoSSFMi57ywpLkHjAStcMMAbdvtRyRCxgU",
  "key3": "GjbZ2boRPdJT2tg1P7V2uFwdHtBWf572AvdfjYdUaBNVWuyraepJT3NXidhNY3vjpx7AX7YEuHXfdnX3HRmQbmG",
  "key4": "3K5yeqGAphxuK2SNv1n8BpddQnhQLUv5wab6m35eM5rjkc3JvyM3j97tcC4T3jWGbnUrtu88HdoSotSNeKAnJE3p",
  "key5": "3SsDxenSkZuByhWsFZpS7A995ZhubFruntirvsmL6cPERkE5pEBZwCrUbqaJuB5cN4LLrdwFBTueCyFPUXCEGwea",
  "key6": "3V72JD43pfhSQRC6k2g4NmnBRGoGQuzZjHLpmdiSNVwAnwSmfgyjLVhewEBaaWCYhur6zGUQHCPBK6q7oB1tPEGW",
  "key7": "3TffHVAz8Q9yJxkMC8EpEELT5NDsynNEf5qN7GoLRvrxJtJLydcRpHdK8t5nDbrnxfzTQHfU6N8YAqRBY1pEXygG",
  "key8": "2CPWQn3CW3REmNdZbJw8E8DNi3eJ4S77S1zzm4LuG14rBPReP6TyzKaerHbhezohK4ELYFyTJkQgyhk4kCjYAMQz",
  "key9": "2GPyoAR7hCrnz6rryYhWNMbGFGysjmAiLZ5yCXn39Er8JUTPzPRNhSLBPdsMxHvD49BFGFuabtRZWKLSTWjFv69b",
  "key10": "54ST83MSySahHVu6VKkLQJwWWnv887Zyz2rWU2kcs7i2vDh9NEk5aM3YV6PCLjvbbLvUoCMyp1LQbZp6p94aZ6Lr",
  "key11": "5NGF2SHc9TfwtmwBhKC3m1pZLT9Yjjn84w8f1NgQZ3fnJVfKHmU7S7HWhFukq5KXRNHdZk2vzotmcx6gXJaibFEQ",
  "key12": "2mFPYy8UzRmQUzpfNPs3yxu41JgBV3g2f5QY78zS4MMg6zbZKddHBasYEfttxk36GxoToLujfv2jXXKjJir9uHhE",
  "key13": "4zENx9wAS4zzjAFrfnpNz7pvQqi9TZSbA9caCA5iToNERRiZYKC578RarP1GUEPEwdQcZYFjHbGQWpKqDp9pUQzn",
  "key14": "ibC4NAaabpTXR4TmXLHNF9AgUy7vhrdDLkYA88vVNQWdndQ61WiiNY5VN7dzHsbuZRoEBaxqMyviMZtEjtS6nmd",
  "key15": "3KYAm8Uw8hQkGQWN88b3tWwKKpR72xBfwvbk1BEQbSqPnRCvuvkJH2B4UEMg39mQJKQajj5mSskiVfYX41Hq4y2t",
  "key16": "tz8PQRqv1aWYg5KKBoyktWb6WxkYzJpwwowvf8tZSVtctVW8NvfXwMd52a9kjpKjC7g2GpYdhSVYsQjqZd3z3Ka",
  "key17": "dXnrSpT1FNVAnm9XYKgPMcKuRvacUhaLiiSz7ZNtygV1FzTRLPLU6zfjd8B9HTN5Z8yPhToiXTedG4UprohEAwi",
  "key18": "5WzAeUGtw1QhQ2Wg5dfKNm5kz9EPSh3TeR9x4CY17zwJL413WuSJHpz4o5sBjTDvzuBU31kpamcin9eApwxaCCA3",
  "key19": "54iMoZTFcF6FWeQYWWBCXP6NhVE4Utt3mmUJCCZvb98BMsUXAkJYAcDwftSJ14KmepsJsF4PvazL7A3M3qpUmZ5p",
  "key20": "4AocnXUAa6K3cUCHZehBYfW7RXqmBgKz9K3XpsC3T3pXPQ2FU6PaG8VnDzRXYqdsJAhueJyV4dq3ezPwSyX3p6Zi",
  "key21": "4yQmB2gCBLzCqiL1aksNjTgGERCm19sZLWWwYap4Yv2Ei1z2TMd4wCo4SBguyh9QhdG87VJLJpMWTxnSDL72yD4x",
  "key22": "3FvfFHdpKLUWC117Rys7hPR4nUCaLKKT6NptLtLZ2SJWELMb8LXTnFhgchSMYHtonkRiXNsanCq13BnJn2CobmpQ",
  "key23": "3Qv8ssmvqkhDcHFHWCYPQZkgBKkVDvikptzaMcNV2d2ETpB1WqAmat4fHNDmRYUtvNym5vonwkXUHCQ7sFQEz4Vq",
  "key24": "3QhxXGEcwXUEHJzKv6jiDZ6p3fGD4gWvCDRp4fgSDDKnoiqUyDzFu5X4J8Uf6cjuaUSgKc5sNhqzMJRW8Tz45fu8",
  "key25": "2CkuCPx1MqQ4TgYyQzssmQZ9QMXuzb8Sb9tJxAMSaaSi6ibfzHcfJoA68KTpZgGcTGMeZGhQip15nhmbMW4WpSVw",
  "key26": "4jDJz5DWLNT2XW4qo7jGCHjNVZXhLLX36LGchUxmdp3Yjsru8vmqXUiU8fSsGRMpApBoXiPbGMWY39a1cqTb6DY8",
  "key27": "Lu6DoKeecW2nmi7eGdefP1xDLyaaR3LLLhJSzMV8yTByMgWBQ3pFv3JYf2p3g9go1rRqCb8DJe7AojvNgTfAQjx",
  "key28": "6gCSiBX31RfgJ2YJErEYSk7q25mwmdDvEdvzrfo6hvQbBtNpWFP2J9wpqL26SRAEuAREXwtimNgDQWkcVk7DnUD",
  "key29": "9F7XUrP7MNjJBYChcCdctGwvmJBbgVnKRz4SzWG62G1CoUwmZBEPncB6fifdAqe8ZZZL7hVunBhpp2CkBVp7ts5",
  "key30": "igz5rwFc5C4GBk9ktVMFD6wyNzZJgvxM9qPTwKasNiC8rrCsNVyaCn8mxsLcGYnyKGQPdMVCzwZvJrx1DyH2aXQ",
  "key31": "wGw51ksab3QFkZsCxhgTjDHucQPjLgU2KN9ohWJ9PTG6dAaJc9nuchwPXS9MkD8NDBx8EfpGD7nBLFYZPB8eCDt",
  "key32": "C4F6GHtSH9QJKo1qRe8xazdRYPvEVoeWDSV9DxRRgbjtFZtpnkzPiWS68sWNZ3GkAgaULGoZhqanje7GK8j24JT",
  "key33": "4kqayN9PTfGtXeSnn83mVnxBRsSmdm5LXREFvnnJtp2L9Gta8o6jhWCkpXUVpUPMkAxTMSo4qKUAoaVHUzG6byKF",
  "key34": "5DXvy5knnzBC4yc9xL9Z1dXiHWXg56MJeato51LHr7aQf7HHqWVKT1mQDuqFhVAT8Ud6EEbYampUGw3kjVvLEo1m",
  "key35": "vCKMRzQqYHSPyYU28ZtpCE3iL7CBn7tfVYSVfi5uRsTkgE5NzttFFXkkg8qnpabHvn1NyVHZosoCGmTMacTUzx8",
  "key36": "3epU3VUD14zVbJornCG3d3ZN8cjt636LLHFD2xUc765ZF56ZbYpJ5XMhfPNmnqbdMiz5JR21VVadAFs5iA3n8bm3",
  "key37": "4bq5pwx8nTNpqywrwNmRYtuUMUJzWDmN4P91p8qSYvUpNEmThnCP69MqsVjVQv15xs1uvCoja4DqBHsf5XsjSRjy",
  "key38": "4i9NmQdTaTqqXritchBfqjzignqNab96w1EvzGFwHvxoCpskrobSmpNNKXKYnS974iQkGHSUARLg2VoAopkgqL22",
  "key39": "5AKSpjFUE4Y4R6n7htDDboMPCkFZhiRyu1hqHGFjp45UxDyL8ujYtoJkt94C7StJGayQ2GWEfideLo8R8GfLiTZM",
  "key40": "3xviTgCiDBPgWDUq5QPuQ5sjvrijcL83CyL3geuqxY5YkRjKYpS7FVCyvEd3fYLycTPxNcompBdMLYXtjJPPdWvG",
  "key41": "5uwYDLe4kPwdG5sZskhHuKqxHGYX3wAtj2Nzcg3EdmmLGcBovmyGLPoBZuVXK1r8gaxQibXic7JbuDCmij71pysr",
  "key42": "3PUoHQ66aacyvGboAr5PHvrF7HsxeyqrRvGsA6D3bG37iuU5u32fGLUd1uEXCUtnLKfSX45AYKaMxqtbT1uw4Cuf",
  "key43": "2ZNRcYR6er6DAfo3ZVh3s8oLKPBpfraPcd4k7pUKgYotjnsHouPanKxazocSxSkeQ3ndMpU9ke1ZWPAE5JoPWzdL",
  "key44": "23LBY5D1n7nKbmMSS5XqXvgspoLSJz6UnALN9JLh8bPgn9cV9GjPcSmaL4NoU25P4teUVN7j3gLWCUQ9FpS1UNjL",
  "key45": "3bSZUPtMMWtcMhb8SMxuMJUrbs1snFNsVwhaHTxVhFNC4yA1ybLW2brE4q3iUw6Cg9x8o6sKpqqUEk7opvZZcxWW",
  "key46": "2cnQPyDYLnPySaRFNf5yWGbPPqC7zgeoAHvHt3h7mQTLahzAZAT1RgsdcT2YAuN9tHCAuNb1ko8rANVuKPZTNAU1",
  "key47": "3fwNxrk5jBhNj7qT1FpeBqUs5w8xwN3RR38v99fyYgAJEdJbuir6z9uReihsaDDCdq2GSPBRu7VU1iig6rMf8uLG",
  "key48": "2ibu45WBMgvxdmDAT1SC7ZmmwoddaRB7E5vKdTbpc9JiAi5kb1cf4WFshL1UfRDvheVzvMrq7wABEF1zZr6qbwy9",
  "key49": "39Tom4xL4ugeb5g6RPQPeYUyYFLtLNq5S9yE1HuBoZSXHVdUzuPZigTurWHGjjhu5GjndqRvUkNtysmTsK66yUtg"
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
