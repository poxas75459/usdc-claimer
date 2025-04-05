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
    "2hejF2H8BVhX2w8Zj9NiggRVmZiw5LeGVjVYGCvTxVWTN9mgJYyeWQD5kNfBUZFEJ1ya1CYBnC8F1CXnVwmoCEBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2T44QDN8kFrDq58EmPW8HUeJoG2L8KXcAYYhz1ECquYPqf6Cw3jD4oJHQMQ9ykwscduX9wvoViREkNBtG27hdi",
  "key1": "oRqTBvXQ8fvdDUaGHGfumua6jUW34qc9GRWsDRMN28PZm2o2iNL4unfTaMkFcXGCQ9TumqpsYSzk1dspMGpjDWt",
  "key2": "TBsYV2AT7aSonwQBXGcHvrFQdJt9rRVDw9NcxDPY9doKN5NPYztabi4tALnzHeGpKBks7g377jSuu2xwd6Tf6xh",
  "key3": "3Kvv4oY8M4JVmmHELuY5fdTE8zdcCYAE7rZsRsQgWbdL6ZCrKEyFXBX619cPq2oXBD7XEhdL1w6eoKMQMap298mS",
  "key4": "2Hkk9ewQicsvG8VzsXybfYLtJrvvqb3e27jSiuTEqQHjSEZ4RWnPWEtayxbpwZXC7hKdCyTeahEujtN7spBZV5mn",
  "key5": "Snxe7oKWxVAb8L9Wf4DudGCKpPhLoemdFpRnD2vRU9tv7taWDY3Zm3h3qKm9TPLVUAh3GKrBKdGMR8dM7DHS1wD",
  "key6": "2nQV8MRtoCFG9ALoBjbRoSvhFDX4TSECt2cEp5v8yBohWgUWJJKtGk1jQXWvUUdt1AjiaHaiUXRpSUTdGmwcWXkg",
  "key7": "AZENjx2S1VMwSXAgjpLn37cFyhw81Ws1H9F2Ckyf3wvTthYcWEe2nikVWgGg7uKowskCpD2UF3TXgiat7eQHhao",
  "key8": "LFxqNpKKgLuMw5dim6wfhNvgzytdCSARQdDUw8NaB3Cgq1Eb7FfNBM4KYCo7NZr228ZAcajSgBXBzJcJfP2YnRi",
  "key9": "4MrFRB5wexo4JCcaJaid5rcymcRGK2pAcqSoxbMipYVxh5WUffDt76jRz9DVMNnRTmyH3zNSSsGx2vtqL6doVyd8",
  "key10": "3RGUeVfHXuCPg5ukTE7XvdGZSL1D5sXfLMwMeiHsh9v85ZFXwiLo1Y3AVVePJ7NZkjRvMzPBazD1E8KvX6uPNgYY",
  "key11": "2deTvYmPpP3CVTCfdXMM2NFxtk97opVEDBY5feAwThCs4duCoKmzqxfkmCkeW2ovNVN4yja64PSo38EEh4mZBZuy",
  "key12": "2m3kXpiBHntu39ZrqftzDuCGR9H2ZXHV2UHvSq9wMRBBXBnERHaH8nxefX3dxLTLV8R7jFUTfypUoV8M82AvjuJH",
  "key13": "5SDGDCzYosm5wS4SBGgEE7qrViSYUBiBz7EZX6iA4HAUYyVvGsZ67bRNQyMvisczu5Cpzrbm2Z6gSdr3JXS355Zs",
  "key14": "32HueELFaBQW96Wi8rnR4cf5p5ZuD7ZmZrNz3R6fev52aQdtqu2W9EWEJBcHqdjJ8iURmSmgdj17GiQeqAYy8nNA",
  "key15": "5mmN13Qzq2MDhB5FMgkrGsYckqJQByEWDzwHH53JA5M9rru1fUH5DEpDrZ4zfBgUDmYxw6ETDjrdEbXzSXRDPAiG",
  "key16": "Tt65WhceCrZ1AypxNZfHSWfXTgueKUgvyr3sLLmoRfBTr2G7bfumwFsox481SscQKqgUKob9DE8BkPKJHY23xeD",
  "key17": "3qetw9bQ1gN8cL3ESGDn2E6jXc9ydzkZYKoZstTAQfkhe3Paejwxer4cQmX2teXtAR5oBPivJ8yHcSxiieSPVxpP",
  "key18": "5NSVqxnAagGYFtL8GyoSp867cmwioKR6j4PJdmBoe1hKXJRJLpKuWDrfpYMX9y13SSzVLsHZW3nv1TUL7Fv12c9c",
  "key19": "4A3BUKkkgwCfstFkU9gdZ5PGAjCgmLQ5i9TqcuyMRnX7RLarrpB4xtg45Dsh4BxuF5tFCL8DQgA9nSYgEbzTF3gH",
  "key20": "2y4qjrQKWtPKArKpTAr2qXvFvqFLPxfy95eDhA8bCqD5gfo8QzCLttdpXBRvqES5Mm61Vf4SD7g79SH8Bi1oNfuv",
  "key21": "4qmA6r6nzSdVkbZD6GTy4pahZfgMfnB4J67oRUjWqGqdj9CQwdPNe6qyNy4bZvXL4onVLXQNP1QuF1ebsBtA8eYz",
  "key22": "25NdX7DZ7fZtNHp9MYW6SQfvWgQFbsATv9NZVyuJ467h7NHW6H68UmnxtKAsFT6u4sqzpfxRwSh7DyZMnp7HNpka",
  "key23": "oYmNuADefVcMfokgLoMdAArXRWNCJ8bPTCxqiJutcUKRnUWjCmJCFrnkYsMg7CyoqGi2PKVTCy7iYaLdX8hPXj4",
  "key24": "x4P6rFsYiFRTh8UmHrWfut7GNuNPkqxptcSQNH7pWNSrJLJYqPjX7jkBqn9pi31KvLbEj8HLDeWJL9XmUhRt6uv",
  "key25": "543BpWPdrAxk3j5paV7mRpNnCGx3iw9aUS27ceYfczpWL9PVhbs95qE2kabJBUJHQhg6ZdiVj6QHG12kzMTv7iH7",
  "key26": "3BPTnbwGpReDETiDnnKuwjxwv74jfTwvJxmZKhzSdTygTmvwAuxtUTXb6cgwy4vCEPvdfwNtuzuDqtydzLAFMuEv",
  "key27": "3hGMHWo1fCbrFdsAYQgeJU6dUwHUASKrzx1KkY8jWmArcjKJZhShKcmBHpz4HLnXoKtQ5pbisXNh11jW1knY8Lhi",
  "key28": "4cDGr7f7vDSGhzqEQz1xmvMBjqrhs5b3ZaJ3NKFMc8YZLqgqUswD7PXAdUTZtxtDGwWuP383k99gSMQD6BMk5Ziv",
  "key29": "4k4xQJSDvApwqXefF2b2KgJMZkGvBV3egUrCefWb2J9x1HmYet1Xozomq12749R6E3u9TKX7K2Hmea6SE4FF7RZB",
  "key30": "2FAxfbZPDUuYS93JYSz3XPG8ar3cbt6Rg6s9ZcRUhPFnkUKAU7gJHvK7rZjeiPkcxn5bjaK2kAhsopZ3H7kGkov2",
  "key31": "2darWNbQiitBaoF5ESMq5WQAVqbR1RiCEsaRVQChGAKJwsaWADFo1cEJky7yN6Md4MwpvGBKmx85ydnmj2KRt3G1",
  "key32": "2py11MasTL7yxPfVMRaTHoJkojrpiZKAJqBRb73vkiiQ6HCT8PBHijy3wofGgyXDs9uJ6aRq9nyQ8W4urh18vePy",
  "key33": "4dWtAcGXYhrZuoiRaxBpqmZDqwv9zdZPtHbVM94g2w4BnJdJhPjViSbjHA9pS8LiGBvsRrMz8FVqAnxBKbZKkUnq",
  "key34": "it2M47W92ZRcYo54153YHtZPUiEE6XfsJbESvhaRYN1CEgFuvMv3fSSHWejjt2nB9ewFeKWBjC8ZK4wtG7wwCS9",
  "key35": "e4Dk6vPQKEBA4seneMBgqp8hVv2pcqAG3WcqmFmYDLpYkvtaKBXsEkvwAHN95BK7D6RTroD9kQQSU4VU43khjie",
  "key36": "3HaLLApL2R2c5jdyfwtyoZpjDJMSag2xnFHdk4tH8b8QhCu7D8ex8WDUrprQi5SyUY46C5bRja51M6fshGjTNcuh",
  "key37": "2MaYJWDnL3dWM2QMynkQkDusm1PGaDSxXsCMzfQFSzKZSqyDpSZT2ecad1m4Bk3R4B3CmcLDwDKw71YKcmHijQZ5"
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
