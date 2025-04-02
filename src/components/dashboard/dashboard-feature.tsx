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
    "4wtfpqqRLvuqKpq6YGxVtGt7NmBxJq2tujYjFGATDVE9b9V9yqwPyU5aordQqRwA8ainvK9xotQHLkssAKN4pgLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SGPX83C1QB2HrgvJ6fT8PEbwRpD6PMCEjPWG784cQjz9iQsgvkT1qVUjzM7cD6RJsksrWEcWHx1R4xg5odY7mTe",
  "key1": "aSHDy1pcckUSYJY7z3vgAodrydxRkAsgQWsjkyqC3nkUKKYLvVu3yozZ1ztUubkHuaQwB4F14rxCiGAH6bfyrUb",
  "key2": "2bDr1D9otVsARtweinhLiEcT6dz5XcFRJW7eU49KYzawdEyaLNGzrHqzxPUPNVLMNsyYhyd3NNiVa9uK7b9yWZWf",
  "key3": "3Gzjkwdor7HC4779HWs8hSh17x3fFim9ATWiHqU4GzQB511wdDFHdZzUBv84KxndeQP5QFcHD5ZymN9jAEnAescB",
  "key4": "4zPz4jRnGCqTPM47QYFG7amQYM59FyVjz8v8BvSwugENwgtffgB2A6pizdEJrsoHY95sngxq45eTY4zn6ZbN5hcU",
  "key5": "8Wfa7Qf1BcDzRHYZPWGY3kBYQHnWqKY5dm86xjMbyMgpoNuvGv8N6Sos7tmKMXEFwmXfyQhhAS5qncPBTTWK7Jv",
  "key6": "32D9fMvciEgj4kqcj6Q35kEipJjbsc6dFwNxSBVPXZokZYYcTU2zwr3d3J8sTb5qQ5thj7J2x8TwnYB53vCAHaPY",
  "key7": "3qNNMGaye5qEdwsZSC3JX2g4VXQyswRsg51gcHT6NNbuEHyidLKL1S5G6FVGnXsffQsay96XnLLLHBJzmDje4Mqk",
  "key8": "aLDxLHxdxfXDu5ftCgNAe6gQrm3vN1rPize26Yaku1aST1fMbSwF5f881x7vefh13fpZqDzt2d5bntrC4MTTqqf",
  "key9": "2w5XKNULXF7xUvRD3qcsezoa4keSJfixEVeEt6uvJTePQa3XCv8ywd1F8CtBfLANXEznch6mN4mdNYidAR7s2AQV",
  "key10": "4H79G4gdwdEtqpbvqWXnqK33xqYDoojEWLJZVjCYUoN8F2hhN7CbJVUH4sBHpytHntyZFh43S1f8LKFLUUewbXDo",
  "key11": "5JE9UfGoTPdEdVfQjE2Ysj8LcsSN5uw36LaRK8YVxcPZdJHFE1hQGB615S4xVFKijKrDxDn5PhFR1KkWmwFktQPY",
  "key12": "2Py6Aap6M54fzbsSugjDD3sdiqkqa3BSH5Cxm927HGeYiVVD212uskCXBiJ7ifpwnXDHuJYbtvPQGZt5F87FxRYQ",
  "key13": "5dnEx46fSEZ9yC1v6Sbz1x1KZmv6ce9TX41BqY7FPNbJDR5s1BEPhMsPzAx3bvjh9zHLACa6wPyNAdbPbXFSQVvC",
  "key14": "64Jf8MKPEPMWLnxUwWkFaRFBhLhGCFhf5u8oLbZg92bffQhWFnvAG6ipR3hxbn1pCXjN8u6bjQ9dqUrjqqaxjcHt",
  "key15": "4tSYSe8g2wSWNYX4Z9dhNE7rS8hYWM8aSFCPERuDuxZiLARekB5cpP5CjdqAjRPqSe5Ceu729vZnxQMaJ5DMFcSQ",
  "key16": "NqEwsCCRFb3HrJK5iEtT8fQT4142BDx5QVSwTjjDvvGaLbPJhorNXNjSK9sCrrhrWQna4TZ934FK8pq17VfFbcY",
  "key17": "3yZJeGaXsr4tNPpK6hsbfqbxrFWYbM7de8mVU9S4QgzyJTBn5xknSqboAPS3YuJuaHFG9Nwe85C7Z2d2WtuQS3QB",
  "key18": "4vrKsFUmav9FWfHFyej8ymp18f3Fjop6p68BSkfDu1epPGeHE218zCwNLmBnh21ZS8u6YxQgyP1SFDAu6rrHxCau",
  "key19": "FGxb1foVwHDW2bDKNF77gQ8gd7HdZCmJ2kNyJ9u774yVKdsgPoeMLdQrdDSfYnrj3HRSDA9riN7NVr1EnrUKhHM",
  "key20": "4hvrwKE5Lxin562cQXMw1STwaQPHPXJyYMWr8JTuZD9j2KZzgGdcPCupN8GqihvdxejR4Jh8x38sHYzWwAjbm7jq",
  "key21": "65A9Lz9UJfnwT7JhJWR4uSwK23416AYBKBwvfSMgd9rxfdUe347KopRpSLTXGvDsnaRMQzWTvxpJgCQw8nVbbv3Q",
  "key22": "38LG1QtyNHeuVmjUSXGwmgUjjQmwPWMW9HX1kPoKhWq8sCWRY8ZKJS32K5iXFgYzgqpczKUWoVvknjGBK46mFdt8",
  "key23": "2hqWr2Nxm9q9aV2rkhQzKp28Tb1wurj9TDcGCPtpHgCnZzEcX9oBQUuHdqzV3oyBto5UBKXR1Wgc9FWh1g2NqNCp",
  "key24": "4DUqEWLW15cGmkuyxgSNwq5fjNyjQ7VGt5RxZhqWiAmjJ7GHw9wLhqsNi1HJtUdqh9xuHsomVpqWde3ACETHwDsv",
  "key25": "3tSZ1MLxKzZNjEnHS7oFeyKe2hwx3E5RsCfpZFjc7ama81xjHPwPmXSDZscZky63NMy7KgAmbLPS4csUfRUNHEet",
  "key26": "5F3VFLPUq9HEJb1m3ft1cCHWw5davSa5shsY3MZijF6xtUkPAcUcEnpRMnbcvSbmW44S93RRaRjgXDCxTbwbBHpL",
  "key27": "2BNjw32Qu5CHmQD6B5Yuxk7dCXN4TeggTmmcNv1qY4Egg6WRQ1RbDTojf9CqP3S6wqttaJLoveAT38bvU78G4bos",
  "key28": "3SujGRMbp3JjaEJreKH1PsmJhBpAK52mbxMrUSRiJoTFt8bz5TLGF1wNNn3uHXtuQr3q66LfeP8zakBrRvStpu9R",
  "key29": "DzyjwbcArF8FjkAwKg9KyJgghQSDBEnj6CRNveMtpyLJ8kqENjH2mW8tTcXe1q5sGfXYwrvEHqddFjEeagqFcsk",
  "key30": "XsAArm6xbg2iFctsjVosx8yt3vUbrqRkAuMm1TtkwLLeHHT3Hh1XvJXjbgLxaaL3CjSzMM5aiZJxs9Phs8CmjC3",
  "key31": "4G4hnt29gLvTVeFAHpViGhNXH1cGzK3rCDXhrH7qASTcbpoyQ8Jr4ZqLkKZvef9QH16GGz3t25DUKBnBgDZpsVdT",
  "key32": "3VciAJhtRd8NxJxmoqKWYL1XQMpW4uPQvatGkX3d7hUknBYb6pCMsGk6hGE42hbThcih4nn6ZnjpXjd5MVcHK23W",
  "key33": "5Dxkp3AG99opWEhgMcq9ixjQDQBPvXbZwuuxACfvqhnMVAbGNXKfEvhwS8UfEk7DtnoB9aibQHSxCe4ShqrhYHMK",
  "key34": "4wEtoK7DzhiVpiFtXAxx3sJQZT9trgA38Pkz47Urr2wPHKGTnThJwKrFU9tdqGP5MyiVxWNrgvuWiK45moZ1vF8e",
  "key35": "3cMBRKvcmXdB6fPzjwT1Co6TguDN4FN1LQEmg9s1iDrzKLg9gaHQrXrXcSHrmU1aqgpcnbfkkc5m7sHFdrmVV63X",
  "key36": "3t3THahgVT9g4VXPATcciUPi3rA4cBz6Ssbf2sUw2UJLf16R6rBQWFHingSqEZYVJAh24Y5jEoFTTPUECssPTBRX",
  "key37": "53AWPi4h54B8AGuurvwrZFBdHjrmh7tDa59AJ1nQAf2zK3ePusyevbPbdqW7Vg99AM4Xz5craKftcUQsCGmzv21q",
  "key38": "5XyBPrRA5s8umgCRFTvqxmC9iau85ug1BEBtoe7ZD9bGR8qPqW7ZJkgHUjxmzZN9ahoi1FX1URRW7Wqdq25Arjb4",
  "key39": "2tGR7BAtG8kPB5YCk9ceqkcwehRV9W4ETxr6ZYrpyyQBeYE9vR5Xujozn9d6EmYY5hcAaS5vmuYFtgN6eSciz2bR"
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
