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
    "3Gn5NbT5LHYanchoCjoBrXB4Jf3eWKDZGetyUzx6duwVmJjMUPAfVNPCMpqASqi4UqXZbTHzas828Dug2hbnFQ8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMi9BUuxjUU2f1hCWQnr6CXfJv9XppFQaaiDvx4zLo3Q6bhfuhTzXq5o46h6vCJySE61RiswoBiD1Mug35f7XnZ",
  "key1": "3BBPpxGZVGVbrZA3s2tDMVUMpp8J6cRWcgbySeGJmiNp5THn4ZJT1mz5MNyTx95tJ9EHYZkYCFhw5VVzuDc9twBV",
  "key2": "4jgtRmqDbhpDfs3SaYjvVL2nSgLMfGpwDsogHaR5U79PdN8KVGStg7SB9zJcytUUbZLWxyzY4gkwsJx2mQZuATQ4",
  "key3": "4cWnLn2TW7L5hh1Bf3QTRSCYDogpEwhhpeBGM3m9FsAjocgrCuWp4VkwQ4cjKQCSNbtan1Fcjmcx4vNignYVM18c",
  "key4": "c1nG2Kuw4A929YnTzc2U7Jr5q7zzTJGJPioA5Px9QUsucYtnY6fxxi3yFbwVuhomFLkGE21QrL4TuUdFWcVvY2o",
  "key5": "4fpovz6UfHm3aibSwGzRM2kHenKQcwVyi4Vg6HvgtK9mxsEGNSWKHy7WcUuNnYdzCVqHkPoBF16dpk4Ahk3ppX7W",
  "key6": "2x9C62GMLF2QaMuKSUq2xLMngYozR1oZtQDTXtNhDH6hcK6CWHHDk5C4xQNyVwTzcGaEE1qZKNmrfLSSmfA4CiXu",
  "key7": "3FiaFXpTmQVBg1WUNuTYAzuegQLWD9HyUCE9QibBECWGkhY6dEFUWYaWiVTZUVULxm4E2bJfUL7jATgSHpKxdaRk",
  "key8": "yGjx9yJ5bjHSbMhCFkLWQkq7Hx7VZkHDTgwW2Rfc6SG6S6TXuo8iD3RbfbF8E1uiSvyP9Tp5NM38w498X1HwE7H",
  "key9": "5dYbBDy7vxmZWXXs3ukFcFK8kEMJrJEMKcSswPYxLjRuf5dWRXt6TMSz5TKxwAZLKwJDozFR9rYDQBtsagfKsaVv",
  "key10": "3KFCZoKZpjtjPCwEzYPPuAu6xpQTBdmH6t3Lo1vQCoFdCWx7FdDE6g69JQCQrSFGj15ZcqTunFdjjcTMjeFjzYeR",
  "key11": "5VU1mmm9NVspqFaLw97ZwKniD5RBDU12RSjK664a1db6N3tZjE5uwVqJEeeKvAPR9WrSAPLE3tL4ZePvUxeQiTvD",
  "key12": "4TV5PqneC7p2uvAvFxh3KmErjdMMtdf5TJuHPT4e7zWA1yDbzxsWbKckCev8vsSqQuvWqDGK9GjBqGJMWkpskefz",
  "key13": "4S4B7fvxcoYQ1GzC2jLHTioqwoF7bVrpn7Eg8G5rmL1AJqiMCiUj2dKLiYiiXuZ93EsidNFYsty1EsHyZKgpRprz",
  "key14": "2BvLxNgk8sca7JgK1fKBeAkUtF1VNCDCxRDWTLwvqN8X7z1fm7WcP6ie8nBtnSXcLPZA5ExyRzHfSRMnF5EeWPJs",
  "key15": "5VrYg7NSdR75s4bYi7JpzLJedNtZZrTn8CNaCSTYPEx1KvKXXoMvhpU1nUu32BkQm6jbtqS8E8Ld2T6iRkF4sBbA",
  "key16": "3R3wNSoc2Lj31y5KN1GTQdEaXfS2LzBmekgMiiBXQoDgLhVueMfxWSB8cjNcmYZFa5g82tq3qv822wybrztBifQ8",
  "key17": "57v4gNtt3k6R3zgRN3QSnvfzerFSQEfYRG3KZaTjrHmRDdoz21zkRcd3pwAYgFXMPQbd487LKWQDv74X2L5duCu5",
  "key18": "428U2eHB1aBFYzAVNvGxnuuY4Ze4CVHGJzBnffsX1Nr4NYCcLTQB66DfSPRrbjvtd7V9N8NU2LdSJiDeRypnYd9i",
  "key19": "5bMMXQweuCU2ZcbXXMCFjKr2kGCbDC4ZYqbhNvSc1s3T9xd9faEq8potDvBJRtajsFA88USrpFiNsTVZMFmxNq7T",
  "key20": "5W5orFJd2AUooE6KsfyicX5fLjDVQDAqS2khtDh8xf8XBqLydhy93jgdtHbVtC79bUd4YYbKE8mJcG5TnghNSdDz",
  "key21": "5j8uCv1KWWzZAw4UZ4U4qPfsx7aitfvTBUhcpQz6XXA2Qa9uW87CAuc8aiVg1uVLkdxdkas3m97PYBUu6rqMdWBp",
  "key22": "2FGXfiPq16d6KmuN9Ay65Ad3KZ5B489R29CEyE9yHmgWXtykohvfYJyUBcJc62KkTN6yzPx5XSq3MeCufrCHgBA6",
  "key23": "5raTbfmLNaNRStrM5p1YPrPUn6YUvBsudJ3ZcQUAmQjpn2PtKUHUAra5RghkxjF8qMDyrzX9A7XBYQxo16UvCd3u",
  "key24": "VwHrcp9XDWv2tnjyJTVBpaUPPjPxuabErSY74BwKEddQ8tT3j6y1Pb8Morty45nqTKaLKU28dr5JX2ctAEeSdxa",
  "key25": "3Zi5UxS1g4w69VFnE2xu5SjKXnirXS2cC91s45vyQS5ZuwkBWVn1zmjPwq7F8BGNz41i9Wp7czDaPeC3WTExnKsF",
  "key26": "3q29SYGQD1sfwRXL6cbTj3JgthfpofZrp4V2Gpy93ByfVedPVNXEGeMfjpiAzjyLZB6z6J7ZDonZvvdf5NcYAZu6",
  "key27": "2RafyommksZMMBnMm6BY9cT3zuBC4hAURetbUKfuKmCFcYQzRyfc1H8yevsMEZsjm6pS6thHvQuF4c8zUvWxfkC1",
  "key28": "5C7n82G617xFMPA1zx8fBp2VV8AzFpSzWtUmunW2Yp2ZQFvoXMaUUXqjChJzYoDmtErJcYD6WVdDvpMfNk33P7Qk",
  "key29": "9EHhf36fqWYvLSwSUjT4xwnJ7Ph7z7WoxJ4L4cRePUTDM1pBhVM3DF3jEqZcN3DH4NU17eccWKmjfRskVzrsfc5",
  "key30": "5LJmC9ifTVdBReEcSWzX9wm38yrcZeKcUkKg2aRz7SfhPk5PwAjxh9NCMCxKhyC4TcaVY2CrP4DxeSQn7VsyP2Dz",
  "key31": "2P6tw5SHjcTNnZuMLymdi4kQUHSxU85DVwymTsq6ZQosjxUMNeeqzD9U6qcxajLL66b3Sv7t1UQFp5e6h6yVY8Bh",
  "key32": "3dy5YRKU8Y2RKPXpxNeahdqgR4Atg1qu5n69DSPbxEWK3QzqiaZwWEAcS8h22ZZZ7EbLfFs3B6rcmsLGBDCDHo9n",
  "key33": "2ZD8xPfaajZRGgg7DxxC3LHG9qsqbWxchjeb8MUXac3sVETZwbidvZ62Vd6MmXBpiNJ1ehkR3LKssoHjhTADL7vu",
  "key34": "5oFLwbkkPfqTVdDdyFCMA5TA6TdYkSkN7XEwD9uupXdPtTgGQv5b9Cph1bTXviKMK4j5zzeBa6SnaDSggDvgT9QJ",
  "key35": "41pLYWYG29KjkYc7jyaqMz3TfWZCnmJ6Y3NrUSxM2SDFvNZhuMT9CfcX5WxnZaohwok1q9BAyAdiKx5adY2sTdY4",
  "key36": "2EA7ppUTc28iYnk5NHESS96tmmvNHUN9HdWHJPSD6Fm1Hik58D8d9YdQNVkHA4hKATwSttCK5CkuqVzdmv4ZxJ4p",
  "key37": "31PUKRvxHry351sNi1AktBDAVFmiejvffrtHrUgWADroGigfnNjfmT3c33xHBhUkrcj1dAzgBLPJEFEZQfTx19c8",
  "key38": "4sEUoughuyKFz2AHQTRa14k1Uw6kDg6ctAkwpaAHvNww51XD7EBeRihGjuZFP5GWSVtm4QqGV7LiSbowbEeMMU7z",
  "key39": "tLkDe2aYAfCAgwKQMJuZG27P3mt32NzqozzxxcaHGyue7nnFYdDYXntcXJdPVoPoCFJSoc7E2Z4LsU8nT3H9vYT",
  "key40": "2EaVxszKErFABXdx8gKV1tvigEeKS2fhJPQtSFc93E7WY7uXqQu544q764YuTMQvW6ggJRVb5pPTsGbN68LvZvq1",
  "key41": "5mDjjPU74jxzC37M6pgUpmBGDZCJyPKfajzSZNEyMsWjTSMnHPatdhfD4FsQVC6pTsdDazZzbpF7dQGEJcQRkq9G",
  "key42": "4Z2rwPc2BD1ujJSffffqZd4YXKSPETh9fryCjDFFp7GnQ8hU9L1XVCaDSb4W127zPjkj5vGetGtnyNYfXMGcn4RG",
  "key43": "5pfrn4BKayq8AowhUWf289rv3V7xapNxQCDMaw3QLAowzo7e8XiQFkzUAV5wpHrDx6JoJopyHHPAwd4NGFDWLcxM",
  "key44": "3u92pzHzM7X46ctRxFWB9BwRBA6LJbgjFgRW9HemuAvN156gfZN5L3mVndaFNq5q6Q2xd1iHpHT6NjrupVqcdtCT",
  "key45": "rhRuboRFaQ96tZygPH5YCnBDeWq3aAgBshBroBaPVoDLtR5g3nFs4ryK3PJ6RWWUtgs7gj91qHHZVHwHEtoMSc4",
  "key46": "BobYjV4SYy68oV9KZHgxXXssjXQ6JPGAHde68waZaC7GbD58VAyAwSYsmAguziJJbdnrDxFZefurihGjarY4HKw",
  "key47": "4v4kFND31HmVvwRuB2p3nE7cToFYogmG9nqCrWMdqdXS73nHhmA6x455coCcXpaJ7iLyP82yHMNsZ5oFpxtZ2y6",
  "key48": "2vLTkUL9Jxbdv1iy7K88kbGSFQ9ZTQ61RxSKoRhXQEDFjFD2ZuwfsAUYhBz1iB87b1aQnrAaiysqGgp5XkhSJht3"
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
