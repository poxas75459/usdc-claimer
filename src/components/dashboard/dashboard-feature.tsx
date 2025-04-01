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
    "2astsjscLWGLkRH5LLEdadKsWnYdVSLcA41gwz3SLN5uZ77zXphnDHXDa8MXftXHTaQu8fr797DNskNUNn9HDWL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3hPu5ZqAv7RN9kqM17dKNsy34qZBEkMDJg4bKMVcBZYxcz73WeVtkg5x5b5aceNoZPyiTd6MfXzCDcPm6DUqEt",
  "key1": "4h8TeFyP86LQjbNCBoaFGAzFwUyEg8iJSfuGFa759Hm74PQ7VGSxJLoZ4miLNbkaWR1t5ouBynoqzQCh2D3AQs3C",
  "key2": "32pHce6rcfE5XJaAdGn5JsJ16Fmfa4AtbVK6xBpUhX6iCmiHMxb6XxxbG3mi4ouNjX1TjMWQRN2ekVqEvA1p5CHj",
  "key3": "5BepCMomjnbmaWqtRT8aQkYVbpGQEdzRWZPiYT6vs5MQQQcpXrL4EdZ2TTkWCfxvTJQLUAsL6g6m7igqm2retiw9",
  "key4": "5JTY24QUQ38JPQ85wRRKtURsremifC5F4GjTZLpMxJXVNxWmU5b9XMk145dFLURa7XB1iaBBmRAuATohJk1sVcDg",
  "key5": "bEAftbk3QczHp6V8b6KnYS8wxhTAz7fW6qiRdsgMx5dE8jtVkn2dRmj31r9bqkvconExZQyvRPbA1xu1M3Yia31",
  "key6": "jh489fgx6tSxfBCKZxmTAbfb6x5nM6e3Je29MfnQMXGk4tK655x5aFGThhQvdHViwwDDH6hUryuiLX7E2dhgv1Y",
  "key7": "63Y4wu1JwBUQHrwLLJeRM191c9Ne1bmYa8yaNzUrGUVoyVJSmzscJY91eb7M8othfDqHc7yz7D764ye5b8P2YpQt",
  "key8": "32Wh3A9rZ495xWeDd2pr6VyhyECa1AH7bFYXpq58vMMx8bHjM7AaJPPnvx3FwVxx27S2bBuYwSWab6GGD14spwVM",
  "key9": "2Jc8uCNHddWEzofsfXeeBtgRYQnUyZwy17ASWgCzEEtk9shkSDWUBWZMisqy1QX298SCZCVNoDNTUPfGmZ9oFUtB",
  "key10": "315LQiQ3oLHyNHeBCpp4yJbGMSxKzVmXDjBuPUV81Crt5VMBhsZQPZ3u2gaij8ztBg4Vu6ErKDoxorpMX9MP735R",
  "key11": "2hoB5vjwg81zfUzh58S5uuDW1CdSZNGqmxuD54nPh2rwGAzkGyceqirmMh8FoDn2fq7Zc9y97KhWJK384yHhQV3S",
  "key12": "4yLUk3FLU5LfC3f6HkWq5fr5eoi8mepE5v4jLB7Fn6krsA3bCzKFdp7pNKK68dEZMR2kZqpxM16ThMavgMfThw3g",
  "key13": "ikaQF8pT7zBr9AnAyGHyGkTSfwbwvvbrNBn46PuvvDmerAp8ZkF1ZeFiJyhwQkGtnmHemBUWa7Da27YwUhemCQ7",
  "key14": "wHY4inZjW43dyawvKyPcQmBh3UXg4UnzuHhtiDivTg53nLUZw2eCKd8Jtmoft6BnuE2KbingYaMvKZLuQbn13S8",
  "key15": "4zsARjbuYSbtMT9wY6PCJzmbyWkFktQk6ECtasEATcHKYkd5R3scWN36fDtKEm1ZYC1zJcf3zjyCDSVVqoxpTpnK",
  "key16": "2EJenkUMNw4TFDdvKjx1XVshEzYZYmznxjAGgmwPSxDoS5k6MwVMup6R1BPXJ6JDNGT5Z7DaNcwtZLNzYyv8ETJ3",
  "key17": "iWC53NFongxgLKS8LGpiHzs4QJMiaQ2mVwSh3eSPRQqHMpdK9N7dpJMLy1fbXfRtHpJcyLxeBXStU8HqRN4eqzi",
  "key18": "5ydhTw1MGBJF4REsSo9KHr3PRAorU9kgZp5rUman2Dg4BSKZkfHGgTctpFKpKpFzMV7dGoyV8Vn5TbHjpXEe5ND",
  "key19": "3xvFuANP5PLzLnMAs3vKDRsxT8S94nmoAQntcuvQ7JY7ntaiwbdoDfLiNN7ZYWr85jfXpoAoJ4UtVPg8QbZVXgvV",
  "key20": "5DG2NVL83uezzoLXUsN2FhCTuDxtsLYjBMBVTnxuLu3ap6fhRvEwtT6ByeQUa6Y234HYWG8FEjrGgF9WgCw5CiZW",
  "key21": "3s5cYjpaW2zQGxNKi9EMEC2kA7eLtnQ7Uzw6bZcpJJuqAP9faaFyQLVHrQtqy6bNJxDtWT3YtW1ep1sVZaojMDSn",
  "key22": "pSuwZRYGYDbx4bF3ibYQz9d84x9eWFNFEgbvUuXStNdeeqmGbFU9FHYZfv1Wyf8s6mzfNscZ449bsaqu9V124NG",
  "key23": "Z8ouhLqxvihKdeywwdV3tD2C55vTPH4gGiQDbjdVkgLmhayueqnezk77W42GNvMHs2PXqTQTgrMYyXbs156fvjx",
  "key24": "UTvyckUy2B4KvbiRfqhhyx4zs2Q2jM9ZzsjN3kq1JAkrk4T97GbFpo1bFebHLLt97vonz37FF7kf9EgdUFJppzS",
  "key25": "4RmdmJwL7DigeYFD3qFiQMXN9D46EGEckfGRk4r6DkaQh5ruqGWt9hJgvoeYS1eL6oFArb9kxmU7bw9hQTeEvLpo",
  "key26": "N3Pr5d91Y1ZWj6RuMA6AfT9qZYvrQbKxd67aTb8gfevnuekmFW74tPp1EaB8XgxAiSWG9PboCzzHYiXDjZ8wwWg",
  "key27": "3Zf6h5Bz3puUMzsCW2qVr1ipWwr6wKwTFGhr51wfJGzoDLGbxoxqgmLdKyjeT98RkTF6dDz9XsBLZ6dJEz8JpPgM",
  "key28": "3wnM2iMWbyhbEnLYFqVBVFcVYoV2EXx2pYSvUAYJ8P35YQwkmFaRp1W34NCkNBaTamUfrzCKnvFYJuvVfBHk9xYM",
  "key29": "VXdF8pLHL8mpdviyX3YPgmaaT2wz35ggZxnhLxmbSLsZUoCA13tx4mkUpPt1aLTGNfxovxJ4bQHFBKSbtTzEM2F",
  "key30": "5sYCzPFN7voW8fsRe7y5N1m8AgfzAy3oQ1gvVXrpNnNxaQbgPmkT1GJ3BMGyG3ExrwVjEbrpXSP7drQ34dVA5GHX",
  "key31": "5cG9oVjFhpb8NgoK8xrvAQNMH4fndvbPFgc95BiCHn8KomETJQ1onv6pMJYwbbRWodFPhLkmvCYJZr9PrhRCQEsR",
  "key32": "PJeHYwJKTV7iHtQG2uHbkXF4jH9VQTSLYnvxvmbQxhcQbFwAeiNU1XJb11yZ9zVmUJpxjHnWKMawr1JJVswZ2kC",
  "key33": "5BgEHVqVGM4gpXVRrrm8GZUEPAjxsQXTWFNW6JBua2Jvpe7j7ywTM3X2bKkDYd9HicBmxxHSMcLU4ebB9gCyT8j6",
  "key34": "5e5JfFyBfVXNiiRodpmEgobHoQ87ijEuaYE9TVfoV8MC38oYosUno48rvJTa8B8qU6adNAGTAhrXFiCQzMMFSyiB",
  "key35": "2BMCRtojTwxjzM4wdo9vew6ZsGrbsBkU6TAzXuhokUw1ud7HK853yofSGC76XktgaEiqR5VCBy7tjz8qi7vssKCV",
  "key36": "2hHcDdzgVn7rU9iFhsHUen2Phjf8UnEaHp4FEj9rdDSikLvLkaZitY4YU61prXMgiENY5sbg7jYVgZcF4WCuUheX",
  "key37": "21im7jPQc9mAmtwXFu2DRt36SsZhPbCK54HMr6ky6cDg4mEYzB2yKMAfqEMDfRFEHe562C8auNXDrHk8ZvjtKtXc",
  "key38": "333FYx7TeWi6wV8nBv77a3eGY5VLfLuYYFt8ot25DrAqLaVXSxTVfoyy9roq9tAVWYmpjBSpZhnbdmt2bZsPCHYJ",
  "key39": "3eVJ6FQXWefAy6R9a7sAEBFK47Nire8mGtLX6G7VbTshTPvDyNFRjbnak2BZBgp4kiJYkPSrg2SB2eii8KqmMx1u",
  "key40": "62xL7UAxAqLDC4BUJ9AUnd6ezog68FUtgmS4SbGMXjLHxa4gJ4xf1ZgcoZq9Wwcpv6NzVt3pMudWg6ZveMKDrRWL",
  "key41": "2pu8h8Er7NweiRrrgueEgFHgNucvaTez9rHHEzAijFoe5XBiHg2maTYhhSisz5CbwxcX3dhw27Ng1ieRYjUTV2vi",
  "key42": "5x49xGn4XhEvTqu6cJc7HNfgHNvgFPvDSDQKEZYz1cK2eG677FE9YVGXsLiEm1PiZHQ8Zd8NXPiXW29shJVj4vGP",
  "key43": "ad48upHDMvXmEwc7oKH5k1Q9ZX9xGVvDSkKSpjuDPXPNBYzMdxFPHRjQ2NocqmZB9Df2Y1wRsrMjYexBFQkNm3C",
  "key44": "5aFJTvmfBXBUH1G9JWeyeAqjaNsfyzCD9dmBJgsN5oP1YLwRvipJiaTpdsagt7bRxr4K5j2Uf5MK6UdtQR1QFspH",
  "key45": "2DvtdorYd4QyY8YDqXcZWGS6kKCYLFANiH7xDYofbfjsMCVp59Bt8WEL4RQ9Xn9jax33NUvcdZ8GARjEWTTceHyk",
  "key46": "5pHrJF4Xjwhqb2QCVVznfNaKUQJrbGuFrwoDCRtwQzbSwBkoxgtzSpr7ozBUvK958C4K5geSyDims1rtmmCgtoXZ"
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
