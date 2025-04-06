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
    "nQLRqYnqa2Kr9FU6qophGDe2qGhB3FALXwuik57WttJKpV4SZoKWiNtPrdsNEkeykQLzLDqv6KzgyMjXaithK4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFR2Dfbtw1trWEx3Lnx27ezXieDCmJHrFivsCMNCyoLYKxaTGn4m44k61z6XedMfMqmAd1a9P3Wq5uKRqpHpydP",
  "key1": "4xnL9rGgvY3hLMruP9q1ztBnGNfAYjdKqWKYzxShB4XorN6U8YteEatFppVgHuvVazMLDMx57N4qdEEg138U7qQo",
  "key2": "3D4pFeTEXUXZWGXgV1gBmxprUuwhj8MtqfpgLe5EH3UddHmj9nLnXCf4VRgxQmrAWUcc5Z7XD3gSKyb4HxScx3Y4",
  "key3": "4TTfaJBaYbQPinWBDEzR2GZ6roQv1Pq9eBWE1hCsYpkPtCyxYpRV7bRuEkdeaTsf856B36NqXhkJLuvVFpK8XArr",
  "key4": "Nmf5usXujvXH2Td6WQ7bcoTdcfZBkwerXzVesxZGC4ru56RN3P3y1WeMUQQHfwwKq4qXkDqTqQYzY3YrLjbFn2k",
  "key5": "4zxGQztoGQxUYHpQm6gw9NcAgiVwEK7ESngH4iSGAb323QopE7TTT5tpebh3AhMbhqvsHFCUpSBSX6vbTkXJwUYd",
  "key6": "PnjBA2RX9ZTrW3sGhbXogModY2HYQrLbNy3guNhAeg2ifMKPvq2gsey8YFdqEfPg62oprjuAYmwHV49vuuHurzW",
  "key7": "4KwfxrR5XC5xCDynMwW9q4GZAiN1ACc5ywt5bGSe84Ef9FvgAnLMCaP74gVnxzSy7xB9T7SNPpse4hqSdfpwiRa6",
  "key8": "4hXGjw5NfRGThopV5CFqoy7LE9wUDFN9xbvHVdo691nL25hDEZQSxNoCrVHwgkQ8pNcZyjyhXQAc3MVBxHPx7zzE",
  "key9": "t3zdEe1mNgtjZcGDuFDoqzpcQW69sT9d8yapX6y51J2gmhgaCK2aX7w93ndgwJvfnobyZF1oUSXJ7cQ5Sk9RjSX",
  "key10": "4UnUt3xmb9H8W3dzf7Wo8BDnvKBMCoXegW7dKq97xNwuA6tMR88erp97YgeRjbxargpWUNJQxJEDzjCbkdQzjBnz",
  "key11": "2b8zcft8RakD5w7J8xLpXw4RpykD14ERDs9YHWuJAwhhgHHQVoqQ6rLwo4bKB3qhT5skLrVmpRnZampJCmd8YuYA",
  "key12": "PayWDGshq2LUfY2Ac6bEviGjVPYjNg8hKtpyN5EBTaSzVczm9PjyGMLXYXQLdNRqYgM7m44oQqgAt6HXsGV8DBQ",
  "key13": "gzRzTAHa2AhX3To3eEJ3SP4QoHHvLWsU8ZKR5PSR8LZPGUKnrL2D7ARiMAovZF3FLQF9j6ePKqMXADGtWJpBg13",
  "key14": "5VwNaCEkcw2AdwXw3S8arxkB4bcp2SdzEzYRQ4qNqTAPQDsjkSJFJXHKTFJPi1dw3aDhEx1YK4vUcLV18hJffVoQ",
  "key15": "5onJmo8HYT2LgmjBV3rUTVn8XkP86tYVTcsRv35MJNX2Ed1hb7pVAP3H8v2eZ7knTdwgypZ1etsGHQBibm57YsTY",
  "key16": "5RmxiHt3VUDvZ4pSepj6dHrnuenaZSUmBAG4qLMjBeXJND9AMaGH1dh3Sejty8bJcP23oHPUkvQ3LhtH1EV3TUj1",
  "key17": "3SGyL5RyTGRwjxVkttCpEigJsQi4io9pUu8PfnYdKBzBe19GhKvXM9WpLWyyy3sGQ6iSnpGDUC2hBQEyGgK1SBjh",
  "key18": "299dSR4dUKx9aYpXaRbcD3EHXL7PwyjLSxbLxQsgWEwyNYKKTEtkRJLZ6Y8VcZkK8umoWwY982eh74At31Pmid3y",
  "key19": "3doq8AKxcSZC4KEAVKYagax6Qy62DMRy28T7DRrSf4rW3TMCiNBQ6x6HmrXCqJtBjY5xBBqU3V5G98mTzuCdiq8c",
  "key20": "2yoV2bcoofE89qFBB9HQNHCPcHbMh5ejQNwhJUWavKmpkV97B9GtkkCMqPyLzMjvUM6XwzrZm8FxD9s4Yibdbbfx",
  "key21": "5KDf5zjpd4DiqYZwYheqb4xrSFJfJYyFxse15gEuJ2pacpuF77Kdu96xHb3GDTb3FkhHJfBr3qms1pP7FRoAXS3v",
  "key22": "5nTMwFDE9jKzqSG15AMx7buQuanHn16pcLzHubN36Pip8Pdpr222WLefrrmVpeftAQXKEBWJGzfXSBmUsnxaugfs",
  "key23": "3VGQZQ7nhuiVJQN3wFaxBjqchKuXWsj1fnHHeS54DCqA26sXZvwari82KfYJD26ZZiL5Kb9qabDmdD8bKJqmMSqK",
  "key24": "4JGCNHV8PgnzizJZiNyeLHFvsdH8mWtoYBPREYcyxZFA4YbViVFZdnmU9YsTtzMP5pHCV2rpnfKp7mCqoB2nkpz3",
  "key25": "3AdZpGTj15JkiQb8DvS4seAECPzBQoepsF4SbmjcFia9F446tM2iXvLoQy3qQStTw8dC64e5NAW2uFjPKPnAVvUM",
  "key26": "4cJYBMWW82cnbVcedeDLR4LmJDg8YRnYr1c8Wzdj8nEDYp1SvQrS2Cj8etSENimG3LNuRt6dKfhDGRDYUogjkmr3",
  "key27": "3SDFs6adLqs2pENNqHqhVD6d66PYfwJmJGw2LvXd2Ak1Lh7HWYR5bV7KTS2Bosg25NRWmWaJfmqN197vy4y11kNe",
  "key28": "Kw3TRVgYjEKejazX6xzHM86y3s74hx994XZUj5596HjZSsxGKRkrwfSJqHYffiAoWwTksdPyNpSP2uWndXTQS1i",
  "key29": "3BuSJeCdGiN7JP8fGyz3idRw9jrUu7MkY86YrhDVivSb1S7V65CNfMb665bFuyQZYQVGwQ1eNvd2pLBQymV7Pw7Y",
  "key30": "7gVGK3XTCwM5oqcFeBPwUSKajuGhwmwBJqi2U5Pb5gGAQAi73sZEozntT8vPfiNTQj3R71zmPXzGqZvcL3u37Ko",
  "key31": "4P1w56fjT5Vp9QgUkz35suDqfBWeLKbbLquiunZMjAib5QBx1zH5dM3k4Tc94yqFchWEEK7F7SjCg1y7qUckz5yb",
  "key32": "axYfbWJqnYQJ6VHRsmwgixiq1rhUKjqA7b2cfjg3eRLwgW6seuegkeRpYX9kCG4vb1ZCGjr7b3hNd1Gu4m6DFqU",
  "key33": "5kmuqDEfakakVTkqZhTqkuH3zTRDS8eEKaJ5MR7vHExnGFVJjBMQMrpW2tvBEt7ZdwQNHQSN9yxCsjXnjpFzusG2",
  "key34": "sWciU9qjq76BB9F126R6PFBttV9xQm659dQmLEPzVo1P77HnRPP8CGBduRsV5VAdGH9RNKRMqdvPB4LyobaoJN3",
  "key35": "5VtLDf3WTdDvyUaZSi7vAtYtU6nfKF2FthLH8Ji13WmYZudd5SCzfwNKnyWHWBQ82LB1AKBxW9wRWxzDch21ZM3r",
  "key36": "3PF4AE5gJsYmPbawGvfamnDZroBTc63Y3yCvAMxV4y4XnbiV9dqQKeh6mAn7sMWMZvSrenz57PhJRWoFhevzgi37",
  "key37": "3iWxdACsBWWxzbDXLfhgm6WzsQzVhvnMjDbtuKFv9eZorXgKLhtFaL1EAYYdsndjemUe8c5CDwsGAwTBritxmqkM",
  "key38": "2tXLL9VpiKDfeiPLMk83McwjLFTgNof1g5C8oqj9PTcooaNUqDRtGeV9FJspBRPocSPNtHKCbwaNNNm1Y23ZELNV",
  "key39": "58ackRu1H4jAxAiLv58JUqKYvaqx3fdD8ftDWaodp5rEKP2UpuJbC6RASEWSkVKm33zk2GXPLTbDiFSraWz3JMH6",
  "key40": "34pkiVwchMf3GkkZzGC2y8DmpRxsxVEa82h28AiuY1AXoVPGyNsyfqSiy75fviRvmiNwXCGSadBnPFNi7Ju863qi",
  "key41": "2YmqKVt1r2jPcRFyAybEPQikUp7NJsqHNwdFNKhRppovyw9iaSY3LcVzXdNq8e9Y3EcePDwZ1iNMeKvLVtdqQfGr",
  "key42": "Khsa3DU415xJWY5fjxnTFcCcHvgmN4dPGyezyVJHkFs6vvkTKT7Z1Y7ob66oe8vaibZ5pMar2LdwudgcQBhsfC5",
  "key43": "5ZEwB1N8FQ7ArjzXpuT8eYwkF22sCqFjYnwQ1nczfKYTt9SjeeGaLMEUa9GvEgNHvEC8bJ9NaTjJB6okSwHXxQMa",
  "key44": "36X4dUX6ygBRJF3jFRJUYZA6yyHgJ4xHxZGndLC1yzTPyuYVz6cQou3F2xGKM6iALubkarRDTojJStFP1357uciA",
  "key45": "FxS7SmynTPfAtRqGXnLEGQmxiPU7va7QDo7wjDafm9JA17mYyQSn4EeXwd8kGqURKxKS9rFwKbACb37VQyBYJgY",
  "key46": "3QxtedKfe5Gcn3gwLTQTieTQCNcUh5KACcbuDT2fum69Gu85o35NUnyEitxeFTQHJWhER9MmA5qmef6adowWZZfX",
  "key47": "3AP2W2Lv8zkHC6S8tWy77ZHT1zmuZ3L6xmtQr8NxsCY2BkwzeYgH2uct6dyydNio9X4CG2cui3ATVQgPDychvbFB",
  "key48": "4wcQfTqwAQtGAqXRJBqNKwBxbGxm7qAiFdnj4byogZxVyzx8EyekoKCqn6RxuNU9igenzxZeUakQNM5UuWhKBZpj"
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
