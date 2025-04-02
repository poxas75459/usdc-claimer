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
    "2YYV581CiQismg5ymC399weLTCzYgrX2B2JirSW3f9maPgVTiUrm9XZ318rvhdX7ewdUJhdvHeVmMv3Mqu5Ed6vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xse9E8P3AWbXgAGdWzrm2Kvbv2yASzcYQsZvHX8EpMqTuqECBpeUaG1bzuLqVWKuwypJBkRQH4u4skBau53Tv4K",
  "key1": "2DA7mXrF8tdLWrtg1jvNWZi169ohJYs4kGQH7xkVwpHH829mN2giW7gin5e8fMZxaMLH8aiudVKJVRXQbXy4dJX4",
  "key2": "5SwiKm85ixv4zJrrYKx3iY2tgu1ZmDfKFUANNdbLjQrAwRp7e6p2rXfRehKdAXCyiQJxoP4DkJC9xUD6b1cYe1md",
  "key3": "3hxhRCjZSqhtSVcoKw7JLPXiDBZTunnmGgTn5g4otPFKn9sg6982CNW71D1TW4CVSQq4Go67WLr5czX1CxjVnHGs",
  "key4": "3Jkypp1dakdigdmf1Cd5kfxX5dbTm86SY9MJHQyDDwniESciKyyy9qduy25zS1DVHMfPAZ4aEBVewHsMXWNLCmxt",
  "key5": "3XnB2BoX8kBnCqrS6g7ZotPcQCLzWJVt4x2X1Cw3Wry3p5wR8HcMeTEgHrq289irf5Yj9gVMyJHgqAV2FCxEhXPX",
  "key6": "UdrrMmS7W3PNhShpfphFKEdbFPKVc5akrQzEEDiEsmorvBeXXsZHDeCGTx1brwzNvEYcdxFgg273ymae2E4PPe6",
  "key7": "4izJPuBQyS8H5LQcAEDfTUrs2yZXKb3Jo6ofHUDfjrXgqZEpAgUfGv6GgeQpnRDvrauNwFpm4QLedWdH1LqXHxsM",
  "key8": "3rmTrwYcmir7AgPR86BAuuG3vuyx3YTEToAXmgcNXWebK7rGfN9AQiPCXAKxx5gS6iM3YmL1uUGM8VCKBqgoLjMD",
  "key9": "4fq9Pf7fT75mBWj8tfWkegMrokLoKwJDdESBZQFmZqDtQ8HUPNuuMvghSgKsVkuLk5Pk3vNUJ61BkxH8fFFaGikZ",
  "key10": "2ikgwbWjhyVy6Qv1YFC56jSj3yyGeg12N9MKwKBkEndaxB5HWUTEgq1Hd6UH1pHpSGhY468m2Q7RmprfpeyLuoLd",
  "key11": "32iUZ8s6yuvcDhANXYsBtgaSKpREihBYPHfQCbtKoVexuvMgGVXRwjMudG7jsbagoftMQihRRoQJjia2DR5kDWV1",
  "key12": "5enfm1icWrEKe5xkPN44a4muoCMtfr6XWgEeFUqXwBFNPjKRiLNzfebB9rCJKnSjugCHZXMU7hJFqweYE978QFY5",
  "key13": "2yZMwavHpH4mXdEoxRWRrBDmwfDi16qSgjAV8fEX2UjH1L8wuPLJpaCccAn64dC3NVD9svM6Cpy6hiyZ7m5DExAv",
  "key14": "2pmGZe2wdHGy6naCM7CqR5sFxCvAG7dGyFA1BgZ8wxbShwEyhB23GZaXAriG4csuTfLcJxRW9ZuEsmydPFcZvvQB",
  "key15": "5niXrHT4xbMCgvzz37nMzWKBhDojarFE6DhZTLGmaU3yFgjZjbzDfaRYoYrFr96xZddGwnKtrdHp34HbgcAqqK4",
  "key16": "5pW4LAavoe2UAXDkYSM3boUew3LHqV4MRKV35aiC4nFLQnxvqbbGwhJ3FzEAx21b4pUZg9ySmPq866a3b8uvsNeD",
  "key17": "Pz8vFqcPn2H5V4FHtAf7UQyFH4LxFVTZFEmZafUhvPn2sh4p5nsLnzrXbQHrKneY9FT9DqhFyyv5e8VfHu3oTvF",
  "key18": "4uTKNYtVGuAbPDGQZ4T4HDwchTh8AKAHihtKvNUtGqgy5Afwhmm7bjA1uZi8jGk9y6532UAcmvserK2DRmKjs7TC",
  "key19": "34viiM99b1aYzMs8sqFjbsD1RLfYgpdpCTD19qEJMbWSAKaG4wp31Y12zJTkddRqr59NaqbcUQYDHN3Wcdo4umSN",
  "key20": "w9fgEXBTZ7UcXJGTGrkRxRoAu5q6Cu2fkgtb8NdtWL7FSLafCf9e2oLUsPumkEfDkNHfD26Qnbpn1BApSjLrAtt",
  "key21": "2z7RYjybYpMEuytkBiKXeGHbgKDZueegjPnaF4z4ugx8VHJSsYEfLZyhtzvacXxEE6zr4PvRta7Y4QSnrpm3xcrx",
  "key22": "4NNgjVpzD5q2YaPaY4JYz17KsnzXyg53FusAUBYn463enAN9h3LwzEuoX9UR3f6dsttMByU91mvGNsS3pF1t9Ye5",
  "key23": "DSSkbG8FyRqvjkgBZTUjPS1i5WL6akzFgqcwVEPZsf5JExPrV6ofK9CrtBw7HrQ9UScR3YYcpbzhDeqa5q5V8j7",
  "key24": "5BtLuKHPLivTXpaNz8rW7kp6GEM9JARJM6tavAPXwjS8cDzkUrQ8AY17o39R7m8dsmtWDKVmaFQBRAGfaFyM6mG",
  "key25": "PGBbTZYJPUvHVL3yzwE1rZntZg5Ym3ebtRAKXbq8ZWzdDjJGrNDsVB8uS5QA1YnsTYgpn9qf7g8Pj4NSssVRHG1",
  "key26": "8xyUeen3kTDrZ5qpuCfkui6LkbR9R34staw9HC4LLvS7ZmhvADMWSMHXaPixx4JffBs6DxxQJXZZBNdhh5QBLC3",
  "key27": "4KLXhwQ3SLiUpUoi7FDL7g2afyWVJsAMZag2FZrKB5diotUWuxMWfuX81ve8dWnbf7BBDNBBqHaEoNBv55dFQQVP",
  "key28": "g5J6p52b3H2L4q7rNfq7fKTvY7UWWjMhTBpZkWp7VD1cxgzhVqMwU4U5E2F3jSR6PmckhmbYHHKK5m87aVmmCTo",
  "key29": "4ArAiqP1pK25EfrLrH7oFgb3DfEwFxLozDwnD9sXtxJrRGLgCU8zMcwZxA5iw2rjvMNFwknBGYvmhSPbiyj4pmSe",
  "key30": "4qiEFFx83vFMyeYhpcWXG5CaKcgw9UKjF9c21KQTm2To3Fk6EKH7TyquGF2WyFGTHaJCnQjQSukpXAxz6AFmsHXZ",
  "key31": "qFwRrUNkL6co3DmbtuRmQ1MoRFyMtwcRKBPFpuR4qPVroW9RHG8FeipfNngpQJ8Kbq9T2CtyG5hUG52utGYq4Ah",
  "key32": "rVyca1HTM9ssGPFosWxWstk3frUjgCJ18q8jAp8nuL5WU1cnvahne3qsosU5oeyzufQQfZy27Vk5xpca6BZpdLj",
  "key33": "49LNJYghMuRaJFt2UKVuhDeM5U7yjbVSaLDWwjcu8RyZmpiP5byaJcDPct4pQ2vFnDKfwGQd2mjwm7NvB1YaddWw",
  "key34": "6jTczkmRUs3MmUxaY6PypHv2gk5UtCvNHeEibtJfEVUVPDuER9xYZnaWDnMtwopsZX2ZcyRKJUw5M9kHTf3HvRs",
  "key35": "2HqA21tpGRoTi9GMxtfqfkx7pFo1QtMRhYWFJt86HfGoqz4ECq8ofDGAWhbQs7Vsr5e9kaYjQhCUtCqAyz8ne7Nz",
  "key36": "392tLmqVQCGVZTadNbifiieD1TjRP9o7G1yTbvR6Hk7nZJWCwA8nA3M1NBrB9qG7eg7kSdC6hffBGHWCppUXhzJV",
  "key37": "5vAiySjp1aghpAFgwzaYZSwS7846SgP6UijvcJT7Nvbmp7kxaGRRQnNPBihDYZhAu8hUddMRkgKYuoH4LDLLKKnf",
  "key38": "2cGNmxag2LqpBUzSCw3yiRmBCSbgNHrdfbaprTXWQi2PAEjhbCsPCb1sexa2fTXnFhXVgx5U869431hD19jDqvHb",
  "key39": "4tJ4AB6mabLgDET3928YWLXpzkqd8hub3KF6Wfd9rrevJX6Xe6cNJHLqcwuto1a7Fy2pf63d9zxsgc1jUDK6vTEx",
  "key40": "FWmUsgbuY9MtKMQjoWz93jtZzJGUKYQ1UedRBgQ5ARq2EEx3tVVvAs1ydz4qW358BjZzdPf8A3NNYD4aDKERWmF",
  "key41": "D23WqR3fYDtbkx2bXRnoXdEugrpLRTPZ7zRSGDNpthXvHZ1Zwo9vmVqtbBTFJaVnrS8kYXg4aunpyB11PW2amhe",
  "key42": "2CrMEJschH1XKYxtZ6vSrExA9c1Nfi1wyLhfoRf3dTNAtWeUoGJAyB8Usn7LFhBzBwpGEdvEggDYx1kmdYZiY1hv"
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
