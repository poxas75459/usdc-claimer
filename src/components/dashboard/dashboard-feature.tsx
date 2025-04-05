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
    "3EdQtfBngqsWD1uVwadpBRU78zhE92mHxYXF6J2ckJ2mbwC3XsmGJU7D52bsYYPLkR749F2zb3hPsSX2KrCgHvTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ov2zVN7aWTg6MdcbxhN5rhZedkvuagf9CjEUKjTBWaHfg5BGzjXiAXCGmxKTKAskVJr1zPUCyAVbg58Afp4K2Un",
  "key1": "jCvFpRhN3b5ugG2NJzKqY4ymfMV765xpSC6M4EBpNfviUrs7Hynh6Lj1qZkUjuAjnxAihAWkiNjgM8T2u1b8YGP",
  "key2": "3EyXBTmT9mRqVcDD4xt4Zw99hESM4xjzGUVuNnqfyHkw5DUcGDf7tJirso7CopYY4Qpb9tJAwG6JQz9XS5GiY7KL",
  "key3": "zMfT6Hh4C9eKdxiubKDpu5ReF28S7ZRdJ9eGcyMYT9KoHbfSRzmuw7V5uaSMD6DvFR59fDJeYaBAsDLKvPrKGVn",
  "key4": "3PjZodxkHUF2qVDG8gyjHUJ91mAnhD9Md48ySe9zB2notVa8nezTRGykDi8Nb8D4Ajm98bAhi8JbSdnPZttsf6dL",
  "key5": "5P3eQiU6nANpEBrfRDq4YFFx8WBEj4XUjnurEP8nqNBRQkkHhejeqQJFHV3dszG7iCcqLBJfhyk1ysZm5mn6PbaE",
  "key6": "5bLw2d78gjDTh6LKdp1qXteefeB3sgskiLtDXfdaFgecQ4FAZQX1NxtCxoxia69gg5Dz2PJd4ZaRTzxLh4DFW4Qt",
  "key7": "5kRJgf9touuVG9CNdA8v2mmyVaCoCj7Q37KwZY6sAzmnVsXBqAZhVKEa6yxnx595SAHwhKpqGbBZuwrzurb2Diq7",
  "key8": "gd8QMHyrTMa976wDtqryd1jLv6LTMNCL9zuczgpVxMxzm1vti3X8XXLLw5Dd1tQRDFfxyvFSqT5Vq6T87D8CsrF",
  "key9": "21ENuj7rsHxDfaiwu61pmuDvBGeVZDqdFzXJSxwi78qK9A2UyfWm3HeRy9vizE73AbaPvWjcHj1aC6Fee4jBrbN7",
  "key10": "2NfNGX8k1Hzx2YanJRUFbqhKLqtvwzo8WR52bKbeNXiScy9WWRuZy6LsFjodMKnYS3n5SP1EHZn7qGsNj3hZRBTy",
  "key11": "m9qTQG92Skc1u6sSpLnLDMePPSnRshY4gz64jRc63HARsADwzMqkBdaHAQAkCVSGS8LoMsiaFCrNRFu5sphCYFD",
  "key12": "5gspocJg3kjuYvjWnMQJh4KQKDgegcRoUfEzKPfgJ4VrQEnx2ihaM6qVAii5B6zcDoevgvJzdBiNP7ZXPRStDaG7",
  "key13": "2z8QM6wureLQjp5Qbx6H8dNX6Ff5LXmCWgYEmcqTkjKubKsYhFKyU9ApaEbc4nifbyfMzC9mdChTn2mCrdMFdTyH",
  "key14": "23zDHdMbcQdRCMa1rXLtpVzpxZSh7vS28UaajnfjqrLTicxHjJbr3iJHsQuYFNy5bXnNiMZ9vBvhTm1SJASJseJT",
  "key15": "2MYke4Twr1E1VsQPqVvbWLciRypuRXuFuPg4sQSXV1ZwPKJu8UHFWfNwWDHJY8s3YF5zuttP1zMBUtnshgADAn71",
  "key16": "y4599aCKxjzc7mX2gxNi5YDH3gT3ab7MGLcV1Ecg6vY77ySja664sEhLRQRe3xAfBEk9AcQz9VrqfG8A6fxiWbn",
  "key17": "2EHTckUAfcpNemXamkuHuLGqKrDxiFrJVCKnwiyMeBBU3YSW7tvJN6eGHi9tJMG8jEfT4XXHVXRVQGxRPQLdkc2G",
  "key18": "5x7FtYphmKGt5BoVVdpdukGVek8wGXjRVMPwWdkFuLD2B8DaMTt9mo4PZ9T4inwbgoriJJ3siS1VPxpfZ32wjG5f",
  "key19": "WAceon7su7G28zZYsGm1LNhBxJLVc5arWCu1xsNBZzpSVentAMwuYjcE2eqduEYA1xKGnsUPEdSGnAur1eTqpMh",
  "key20": "256tqF8MRq6PVwYRXqNGRwvQX2Ws1MFNsbDAVLJ27UsLHWExf3GdTosVuSeScbUxbypAhTdL82NsJYcudab25DsC",
  "key21": "8KREBkxXBX6RQGPdtLN5yjMVQnGD8d9D9Mr8EXRLrLTugHg6UfLSLwpiUhQ2SEQWgS5b8Hzs7u6tR18AKYN93uQ",
  "key22": "5awKDZ2KEorz6u6v6t5j3cnToRSLW2XDG2n2KCuWWpoN1fdixLXBzWFHZuLFiqHjQkkhXw1djaXpoKovDVb1qNZy",
  "key23": "tbcnRa5qiy7Du51nwNpqovScnLxs2Rb847TJ9dX4aLVrMQH1HzxUcHbchtCRDurP5U6kZsV21xMKyzohXz61DX7",
  "key24": "35xz8rn2aywUVnL1BxmrWq6YLnhLTxAfktVzNequKb8JQKJSDHsN2UAsp61xRvQ9gfhQPLGHPdehWTGSBz1Eooq5",
  "key25": "4a57Ac2TyrnxXUPoyWwKCcuZLcCNpmJseAALDPtHBFxTasLS2c6CP1u4K46NgRxZznvTiCcXTHEQq1uxXg7Pnjyh",
  "key26": "4yLMEAm9e9EfAMTELBHPJrqcgH3oP49MCY49noNyAKRrf1QSwqBmRxGidTCGnoL9NVmnRmugR2begyTnoFEoRJ3Y",
  "key27": "3qX97SQcVuSztJ8SGVKrbnyELzaU73TMCLg43nL4W7JcpDXkSUFSYQoBT1XDpxEttUPWeCndw6ZE2Nk912ie1RrK",
  "key28": "4WL43Fz5LiKAyRb4oARc4jJpWawNS2HJU2sTBSHPzXr4xvfmiVFHHLAh97sGtw7UdtaAHyxdj3oA6ShZqtZxgz9D",
  "key29": "4q8pjRt5qeQHMjScqeo4njPiHaSHNztZrSs1bQsn47XfrdGjFiCYUKXvYAFDjsd3q8oHJMQsshS4HKMkh2mbTGAt",
  "key30": "oUoXuf5CjR85VHnUcz59g2sNPwCTiFJuRNHHSzNd5NobXjcdvkz9o2BMtroXSL4GjJuRG15yjZfY6Wxs8RaoDkR",
  "key31": "59xpGgY9o9MmTM2a1EjSKsxv6xTQ4z1dyRDeuZkPT2bJxSDBbRSF8FnRZtN5Gv4oy5nBCeC9EQsRfkNxNCVjyfiH",
  "key32": "2nRUwaZ8RRkoW4KFcnkkEx6DyAMjoZSHHKiRQD4LANgx1FMPeG3L8sREkQ1qMd72vx9dj8NGFf1unxstvs216ipg",
  "key33": "4V8egcMzQQXb8LjoQi2VzJmcYEGJKxBJjGUL4U6LTxWW5AUkHvQTpjcF837eYikEVNnf6877wZgZ4fNppn3tRoLH",
  "key34": "5J5EudyY8LvVfY2aJ5jriJHuqtxNCC8E6aAdUfJFwVJwAn3H8wsZpzA91HvSUYh2k95ty725rz76WRVGL3pZJqTc"
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
