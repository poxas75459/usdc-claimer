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
    "3VRHLwEqyKroZ9sY7DVqZ9dPWa96t8T65HorHbHhL4YEUqGtryTzRbvbg6tthoN5quQK4ZbZuKhpt7gSQdKejYF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jx6qAii6LhkFkvBtFqtXVmJwafziG3ggf58NtBMCQb6ho57WhzD3GktpdPjzSb5Z52wanKvGW2FvX6pR9KnTNtM",
  "key1": "4RoWmNqV7CJKuxtTBV2d2T8zkcesPW9eqi9xBt3Z9GW8ZvCaLDeiC4Czw414v1QQZLqMjCQaArAmpcNX1LFF6jZ7",
  "key2": "3bAjcrRDQrmyi6pSNS4KpayGb27Wg2i8pV7xzSup8WJ2z2J4k7vqEH18r1mpHSWFnaijHa4Sfv4j4vbnWJBGUvLA",
  "key3": "fvcvMCnsPgskCwM1W5yQjXALMXB4EpwZJ27jM7bc1rbKEL6aRtF7c9TNTLeVaucHpFyuzNsjvAiaD8JoSwBrBSo",
  "key4": "4EyXLcvKeXvV1PNFC1pz1fCs7KqMeK9eKvb8AyzexVwDDFDUs35xmA16BmtrPGwuFrLHJKQRMZCAvZBXUG3mTrRH",
  "key5": "3CjeiiDEw7LMh95GJK93Ds3NpDRSi8FFo8jwS8sFGMg9jrZRw5mGtxHEC6LE8u1mZmL55kSGwz5AaaE7SrQsgGDZ",
  "key6": "3gadpTjNwEtsA8uBF5Bcd7CKCXN65u3GcYAq5SBtaCtXK5w6jRZC7hqwy5j9K4RHS9pWMJSWGPTtjZXQHg4L2C5J",
  "key7": "43seWMSS8GigHoFizVa6YmRhubbKhcLr5g74dbyamd3DgWjjQsZLdppiXhXv7QZpF4yUw4iJK6BNjhs9e3uKgVzS",
  "key8": "fnzRXzoF8VEKSwqA2wnheKo3n6GtkntuqVvPE8yyYE52kbiXKF8ib9dHmPBSNdrpB3duT4pKV6Wb17hUmg6aTz1",
  "key9": "3VGVL5xgEWEMPryEm8C8pEySkqEdb83LB9eVycUzAFjpadpGkGhxyDyGrjQReZfYwazWrkwJnWx4zfapy8VXopKp",
  "key10": "4QJMc9yDMTAcmREA7Nga5k4amZCXG3EUhxk2ZAhemMnNvvE65Z4GCCQ2dmMxNg1WwAr1QG3guditurXbm8H6VxQ1",
  "key11": "2aWNsLxP7TKkYV3tFUWsMhmdMKzcZxy6i583N3mK42qEzn5esF1MgcQMRNbgQMs9eG33MRY4qnVs7qumT59mCcDc",
  "key12": "2r2LPGhzxxz7JXVsBDe3pkK153H1iS8phj2TSmCUcNYpWaJrVFVLR1h2fCDFU8e2DzhRxq9aLXxbqtU9oXWBpcGn",
  "key13": "5sp6mFr8vj2xZvN23JjX3wfVsPHX3DRP8nYdEVDRxa2M7Mou5BPtpfWHEeL1m6rMhq6kmhQEZUS3h8mK4u78eT9Z",
  "key14": "2gyTfKzgw9RGFErcHmpX255ua9Wbk3Kjeug96oimMdcMiSrL8pF13LWwqg1nkgcZX6acVqak6WvffkCNRueDn8qG",
  "key15": "67bcucKGnK9M4WeV5D8U48dXyz8Fsn8yL2on8WPmXQo3hRHxiXHUw8LVJAuTzzD1686S6sYexH8vw3xmxj47yR5v",
  "key16": "4YJ6BqsRcvDoFqbM6sXvYBfMBnvNE4KNbduupHFvqNau8X1xMk3uuGkgvnhHFdcdv9GrbC1z1Y7L56vHFgEgrMdh",
  "key17": "3Xiibje9JmpKbwepJc5RxpVJZ8W2UmWaysU6mxa5VRMVgEdPoqvCZsyavK4MgTi6W19BEoSbBVT4tyLmEaRcDBfQ",
  "key18": "4ufWqFNddjXJ2j1cweZhBUmnYEBDupEYiB5EZZPkMTh7T16XXXrxQNQ9pN6HKNXecFCpV62QFciDnTqT7jco3jHv",
  "key19": "2MtcsEeQCt4W82euQ8WuTWh9qhjTy7EDz84oVGvDHrDLHKU9FFsjwjdi5eXz4JX23pBgEEGLVPAyrPoe4TTnc5eu",
  "key20": "qDZjhmWYBoq5GqYXzsqmGyrpbxQJpbnbY7QNSCsfYFLLY9YE6jAeYdkZiU4DERdcm6q7j9Aub1horx6jAYE7TYv",
  "key21": "5n7YiYLCYuukDXfPSxZvBJHPBAiGDr25H8MMYdgApMRevbvW4GabyMiy6jRTCdsq2a2kdNYK7AAWaMQtm2tECHif",
  "key22": "3at6JdqRpDKuGSTww8icHe3pF827W8tZbxmZ7ya1c8CuR4DdatTcJDbyEUMZtMYBqex5Z1TkeA2pUKXCfTpUCBoG",
  "key23": "55coYQ2rdNYvGnPwhCFKKC6H4i7sEm62rQNiRZVuM3SUPGaCJaBKU1yh1cEdb2CxygdodArmBbhqMGUmD5fX1h5Z",
  "key24": "3JEKLTVd4Ddtm9LCh7VCzfnsoq6bxsUSEWL3H6D9Z6bU6kbqqeogffsPzzKHrVP5Poi2wKHw34Aisg6QQ2rbCNSt",
  "key25": "2zSQ8MHyL8SGriLHGMe6iyUbf5sVB54ogXtauZPf48by4sGVXFUVgECV5KP518xH22rBG5VhX5sTSAUyxGXF9Nko",
  "key26": "21Upt8xgdNQDvLBbgWiukWkm8PcRWtyCyixQaMxg7NLKTzXVhP3DNe3z7Vm1S1g1Guw7RLbXTtA45Xt6kSv3tDEb",
  "key27": "4gV9Nsqs41KBi7UDKxk5GhxfD1fhKAR7hzSQoYdgYUUB1y6MspFSvP715eLmxnnHpNsMojbv1FbQLP2YNJKq62v7",
  "key28": "4zkDrawKctD2sC3GPki211mkuJyDVLWgnBCrH73BHYS2rTKVeL9NMGtJfvpoBa2dvLhAcW2oHBTmo9TtWZ4pH8NA",
  "key29": "4qwsoRjRmrzve6kNCx4GrwgmtKkzDFF6AorZR8JZw9xEe5DjmD1Wavd8ZNzPMvCXqCvPj821Rfz1nxg6NH5V1swB",
  "key30": "2rcs9EB1nqUpnchbzg63xYtocw8fMJ8LfXK9TviKFrng1uvZvCbGzS2iyf8isAGNYQNjGupfTwySRX7Dbw28p5bP",
  "key31": "3ve23rifLZ7Egkh2pQT4qf7eT2EJKqm2yzyPhRwjq87ok6M5QyYPiKaL7w3AmcLLsFdp5Tw3HWozgA66VM99r6wk",
  "key32": "5QNFQpha4DDejHb1TGYKYWh2Vkg85mwpbqKuKeKXg3pG2s45dwTUvheH26PJXQk84YytTnVtVUUxDsSRPqgAeD72",
  "key33": "61PRQNJscZiZjUoo8xwQNCvfdPmVNL5dTkdpjS5ytVeMWTPhPzLKX2ZFFm1v4NdaDfev2EBWLenXc57BbK5KV2aG",
  "key34": "3dPqECQwjCRrwfSFJs5iBZDJVPNKCUTp5YQYdxL18GJiqxY85Fbu8RfPCg512kcRFJF1svrp6YtrUTPq8vxrmvwH",
  "key35": "62jhMeCgoKkLqzJrz4FG65UNsuKSnkV8WinsZFMCqfTnkNXXkQmcJi4MBmGq5MtpQ7NqSEiDyoy9bXyhs7KpQW1d",
  "key36": "4hS3yUkZadE89Zp1oQCZqmY7kpnC3q1mwV395C8UkaKSRxesN7HAmD7kY5ChtWGZb5cGWJYu1vWx9HsF7PpzM4NC",
  "key37": "3DUgvfiP19DHHMaQ1gYUS2ZCWoyyJjpbaF6Ga2M4skDhDwfa1pBDFwz6W96pKJzVKJBnN4YxjXp9PAHR5E7K1KbB",
  "key38": "oXT9DzrxoJVZq5aA3QsHmMxd75KW4YQf3D7NTo769XVhhq1GhZrMTs75NgYykSXtR2uYQGVdsnNZA7HQyp5J34f",
  "key39": "34qnb92BcqqpJ3RUquL6x5XyY2bSrixbzh7ws8TKPmaRKgPc7HRRmRCf7z4mUEoBu6okWuLtAAo2C3LEYB1oPyEb",
  "key40": "5QMV4Mqxo5VwvMg3BrCr2m9kgp67dW2pfweDmFLZq7E5TtKpqGpWDbQq5yVjs8QocY5Ao5iHwZr3r8JSL3FB7NG4",
  "key41": "3UpgNWa525CTjZSkbKGiyxfUhipmnmV9DdQ4KdCECed1an6ny1LxM4apbNehoEW4d847DEWCz6xgRTXdkjbnvnxJ",
  "key42": "4RMs2vPKznmoRKtzNChJC9wigc7KWjyvXtjNcA9xn7igRmcGYQ7tpiZDGirrzwDgeWcHZefL8KtR8LK3wxV5z2BP",
  "key43": "Qdj5DBQfEVvaaivyefDkdj8JzE6ruWJMAacMFGYywNnb7UnacKLggCQoymMNrctxrDWYrXwpD4eVL7EsYU3RGUX",
  "key44": "48Qkt8uHhj35M2qhWjmY788bAS31Kfx4gboEPNddJsGS9UfnJzqEvdSmvJXYMp4gQthyPpwn7mupytaf4zhtHBMc",
  "key45": "448gD6jY5qxUbzcfpXfaTd58DmX7HgmR56GGBoijvJNEkaJ6o1wA7YrsBe4XEkPLzvwuSVS35NbrFhfiFX3kifnL",
  "key46": "RrfixUp95oLXoaE9gGow3YJeCgRYNEZiYQckGJyNai1LyNtDWvsxSu8gL52VeQEPm8iSokUHa83i1zZoWvqGHWb",
  "key47": "5DzQTKKVMwH1MXkan9JMkZVSGXzHAr85JxC6ZpJRWecjF934PfBHWvySXkjtxtK1GG1HBHtBiTn3nfnkkjf82MYG",
  "key48": "3rQXaGVw6xSkuDPBHASxvBDmieLNSAgKh3dFEJRAVPgpDF6DVRtezPShoPbv8hnxDXrc3ehpnTACKVxR5qWPFK1y",
  "key49": "e8Pq95N1RoLo4wD4hNNT8s8S9F2HEHxRttW66Eicarb3kynhSFGuaqvUH1bAhgXxE5pDndDLMdQYBZhow2deGpG"
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
