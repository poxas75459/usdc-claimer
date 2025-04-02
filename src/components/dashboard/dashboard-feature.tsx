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
    "3ypWwgoeWBk9d7uuripgrooEnS8xjjSxkSZgUxiFVQfgVYrHSLVtZi7b2379dYTkBaDAPpEwxoJLdSK1HvbVWKLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22sbz6uigvKrtWG1rLL761JZZVo8U7sEY9BhBANdsq8noZVNjB86BSSe4zTeSfTGFdoeYuS7FsWBWTTCuxS64GxB",
  "key1": "4ANME8h2i9arJxcEG5nZTjguEQU277Ro9w4UapnGDXPHVrh2RGxyjPnW2rwkp4LM23pXxWUNwTKKCiaE5zuEUzau",
  "key2": "snNWYpExEF2M64Zo8eLVME8hJaa9DkTzyj9i1Z3ip7spkTBK1Q1FrSQQBdh8X7yHcZSuaLb3NsM5oGsS7t5NzP8",
  "key3": "2BdJT2AeBBjkXmo6coCSMRjtQvuyXnkfNixwGTA6y4ZFEdYS22751ZLK8AwpFMCdbsEL5ZDYrSP5uyvbvR8kb5cN",
  "key4": "3DUMpgaMkSjKw7uLgWs8en5mQe59VxmhbjckaF5NTfSEDBCvX8GdXTGULpz2PBgXCmBXqSncycP77nhQNwhP4cd8",
  "key5": "3p89aqzSjLQW6EDcfRwzHLpgJt6i3hpvvywA6sKatwNjnVqfK6LuQZpZuQYNeaD41ruA7XJREB3SLVqh88uprQvR",
  "key6": "5gwqK2kvNiszJHNMQoEiMovyLXMSqVf88HQiyBSLz32U4esW6iJtTiSdkAP9RErEu39KAbLyFNAocNNvTMyznP2R",
  "key7": "5MycyQaKDE7GwNE6Xmpqq273jK9vZiFZBVL8Yr7ebrQDVv2V6Yi3cKNNbXjpayLQz1E3mpfbTazvm4wT9enW6Khr",
  "key8": "2D2fNn4crtvjiKpFgTvh6SAeVJWJMB2jHtD3GfcTq5xcN69jMwvN3EssxaUiZrXoXZExPAy3o3hAknwpSjfvJunQ",
  "key9": "3TN541iCdGaWJrzgswE97STJXEURrqAsHSfcJoG8DgMhGzHDun3G82uj1JEjhbw9dD7TRhEqMB79cckDMCqdvzT5",
  "key10": "uwzMJ1F3xMijeXoj5jdy9STGVgWCrqdnq1Sz7w91KEeUvjVBq7wVvmq4DaMW1sXLUk9mrsJYSb6uumKHvJv49vx",
  "key11": "WJrqaGHhRYFLuE1nQZD1EYjMaAbMCgVdkkJvkx5qEVf1SjXRbpQp3pxrCVDcBJnsqkapgu8Qn4KMNFJZXkSChR5",
  "key12": "4ByJkGc5oaQXkvozA8Q2NdKmBRcwxsAcUsecqWt8dYecw4PoLTE8ikQUCza1gVTtq2c6aHgq8uHi34YC3FCnVchX",
  "key13": "3kJyBBY5iKP61vcPejdp7FR6hURqqM4D6XNH9h9hpCQmvCnPGRbqY9x4gvvQvuWL6G9sETkf3guwGNeW33hviXAG",
  "key14": "2t66R6dmHuM27EReoPigYFMx1rKiYPHGrPdc2R6xmtf1Wkw4BXAaJnjbHRQDuFwKVbBt496r9zaeMdZhKGXFq7Eq",
  "key15": "2xnEoDkqwiyap1xgM2K191NNfc9DtLj6uoheX8f1uTdKVVA9iYA1UgVkKhtSs9KF3iVQPGwqSxDM56yifGMaw54G",
  "key16": "ucK2E5YvbCRnAeoiDFfsPhngK79Pb23mtUnz9yYpB46iHqG9UnN2rHS66bTxXDqbXz53xGZ71W12ECajbA6pgQm",
  "key17": "3UL5bdS595xvXwGiZoTNzq6FpbFg1gszKkGxZaS6oUASqHs9siUsRWt7nvgweMqCddfatWkoXGcsQMFFSCg4V7yc",
  "key18": "3xTyPmGyFKYYF4G5NMfjeeszwHafctAxBoycZLY1igLGe8QWsv6jfZDCWhJRdQqFKM9fs6pih4dUVhn7iKbko2XY",
  "key19": "6ZtGJ9fEkHF1f4RGSi448nEsnw4GbBkhhQ4jHqfTNiXbkEYhFEenu6AjF5VWkDg2d7XpPkc6Cgo6N6Li5VzaXep",
  "key20": "4dpneychn1xUk7zemGvPSkuAkf99Vt4xPq7CEvdTdoMzgeVqmMKGys91XbYohCMbJyQ93DgCG65dzHSGUUav6QnE",
  "key21": "5cjbEy3D4y7Qv4oMRCZFMPgi7GLkyETWfGpFnEY4BwYRuonFemrz4GbKdNdyV6rDSTx1j8VQFu318Ai9xMAjVhXE",
  "key22": "EdD8fFrdUFc8TxqXR6E9CP3QXzVfwH7Rt9MNkM4LZLJBud4CQgcPULxWRDMQouEqxfv2FLHmPg3Z3PrTU6yHNrp",
  "key23": "2vEQriY2TSUiijBKXWZjNh8zUBL2csc1zTMZ2YvLGwAjfthhxsGZf7A4DfxGpmVXXCHyog2m74UtSVoyg3V4wVQP",
  "key24": "36A1uhCAFGgWebhbJQ51Pym2J628bWpuFJ2Mrwwr8tKCG5dZPFA4t5fz6V6AABfQmcSP18k4T9BKYAEeC48vR8JH",
  "key25": "AbFuFL3LdavYHeKbNT4zqfJisAXZLfKy5SM4QSrMNAzeG6U31QTMhbJxkKm9pXfKEHtPip1LyQguDzki8WRjb3o",
  "key26": "56VubVUenJKBm4EJBWbpm5tzpDkvzPC8RxqTamyBNY8HLBUoYyUtWne4jpqWwxCSZUEUkCrhvsTFxDjpW55Km1e8",
  "key27": "5SL4zqFBjEYhwK7Zo3eECtKsY8F58iY6R3ZP3MwVnMurezTFnoLMC9Hu7M3yd9BRLWUvuLrLyCZRYJtnNgdDChZE",
  "key28": "2mzjKTmXFZtEGJwU8BKr1yBcoXfJiJ3b3omps7fD7kRxYURGETDpstSsJNTro1NeToQY37bTp8vZSNyNp8N9xz4L",
  "key29": "3xKp2dsuJaegkCGobGqdfRKNDWjPjmfRw6518vmmQXgfQ1LsoAxu7obfCxV4kVBCyrqYpyXPVB433o3cMnBfhpAJ",
  "key30": "a4dV7d5Qen1NFbnZcBGuqSJAbzihM9jMTh2D4MzSC57yXAjCa4SSGm1twBMhsJ7qPhFxXm9PKy1imMZiLcGuTBH",
  "key31": "3u7pYT7pyzA7RPuba7Tkz2aHCS6o9pJ8yyjfDKGTazv97g1tvTbJ866YbCXDheeERdLL3EKMY2XYLQpdKf87KfzY",
  "key32": "3UpJ4iuYFCYDwbXFat6QxG9E7T6MZgeahoRnp5sKu8HLt5mXYu95Bj3U98kXEh3DoSzBGJXakp4H9TFwL27N41cB",
  "key33": "3RG3WHDELncrEzdhoh5AXQd6WNm6iaYq8LiA8Gkuuh7cvv4C6gKKZzvYohWU7msD9dzLKmigYd6baHBSpZeKL1Fe",
  "key34": "3hxY4GD6hdsWHNF3JiXJVe96G2FSyvqLc18TVNVkhcD1mPTY5ZPcvYUNivX6URR7JmdYcDLkP1scKmQ1jQMY5ZdB",
  "key35": "4Ga7YLzC4vvkyBQtCrwb7bmu319hC4gpiLGpYof39u6e3xLt23xGCyzUTpQCmbHL5aE6dpwxTjyiXecon3TtPsNu",
  "key36": "3yqA991aoMuPYX219FnTFoUaRcoX2wPsagnd8WZM8CRws9GBKbBgBf2NJHLkQ7jjcBC1WAP2moHNCUvwJeF3MJNc",
  "key37": "4hXuaKFNsQsxGTmX1DxqQWeriTMZbykV8prpyoqLhbxKjxxjZxREB4kYUDP5FtR2QTAH9z4EZ5H8oZMiannHqrXr",
  "key38": "2hNwKfMGNZowwDxs42y2efFGraWrdb3p1GbxwCpG1CfLLeUNBmdG4SW3WsKAQWcwgDVAcbgm2MUL3DeMUoUngh2M",
  "key39": "5ZQypVjHeEombgaeuv1abqbsFUKUCspXVszrsQq6tr9H4QsH2nBYJFfZxCYK7RtEhpYu3nb2zUK7qruX1T2tidJ8",
  "key40": "MdboQ5hKq6QdMLuRYNy8FPJ1vc9MS8LVTeKdhyUj8HercW5eHSdHobgWvEXimiadZbfjvQhurVM5mJC8GHdNuvE"
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
