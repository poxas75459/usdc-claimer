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
    "4jJ8MwLZqQpnEut2gzqL6QZHA8EM2BL1PD2zU8vup5VoA27ktgjtZw3wfgMMdfFgTKKy9zpdvyBy6uyWa3cVVXtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUNvX6F2eG6Zom6tyR4phUn8Qx2PerPZWT24H2i4Zqbm2bhU9J7pfGWnCXcmLTvHNAL3FgLi1UfJ7rfSpgwFJS9",
  "key1": "2u1sqgEvhXkfhifcTmUrXWGoKhg3P2pVGAMR9ciVh6xTo75uzC9RKQ3rX29Mncd3UDzxsg2F37FWDC9ZXXcBDoz1",
  "key2": "63V6Nm18ZKERPKxzFbL2PFVJ1jBfkmscfbPYzYEfabuQp2caeXuAEMoezys6cZSS4XQZyiaxJFhnEkgcMCKUtvoZ",
  "key3": "5uB1MYRH6HQnfBRTHc1r2ZcGe91PG4fwkLRPHtBrqvARqpmR6r1RwZq4Mh1gFTM1ecNNudPKYmCUJNnZkvu1QYn8",
  "key4": "2VANtpxY6JfYjYKHEPr6kw38dVrmSU3g8yKqQSYFiUTP5mWa8e5sXPhffrf5xSE5TSGRHQAWUiLWMToiXXG2VZ4W",
  "key5": "3FzqgAYmf8VEgb5rCAThntu7tzz4EtVmtEbfW911MSJ3kBUxrbPUWRo3voiHDEmmEBPT88KuFtbxHPye6jGZ567h",
  "key6": "2x2W8LhFffH3zn1QUHTK11S1MtMjE2ptymMEa3R2VtgRG8k61rMmQ7Ljjz4EiyDa9Dtqsugc7EwttHu7dBjFduyx",
  "key7": "4WnUNTXf7e3Jq9yjKJPjmK44sJqQYBswn7bXJBRjiu3JGmqC1HRC7KPZCFBFF15cKSwzkDWEXBBkCY9rFG9ciZST",
  "key8": "PeGYK45bHjxPXpaGyN1pe4iYBVmBM91F9LDH34FAahndn3R7GkvrrqMYLeeZxDmw6QxRcmgmZCpWXQtfECcgFZA",
  "key9": "5HhdCEaiJs4Q9afkxiSbWNjkCqUWS7t4Zb1GAm24m5CudWrYtUjttNsGynXXUtrt7ZzB377EzCe5hhyZrRQWDnh8",
  "key10": "swvqfnRVAB5939KXiRbTWujGtn8KDdEMB6T7Yn3bv4bRhkmDyxyaW3ziAx8SoV3tLLbQNNZ6ArDv7fE5atTevx8",
  "key11": "5YEGNi7ELaXoBeYxWDH7DYvw9JvqTr7KmebdWqV8dh48t2D2PXBg9RLHuVVT47TBn2BWUj4frSQdLN8VAEJNw4Fa",
  "key12": "2dt9tFEUW5MivNHAN4AZsy4bzwEy1NjoXiojCjiadQoSdidGaJ1mWnipfnjZon2dADTSKttjnrPZ3yc5jSteVPZg",
  "key13": "r1oxf9PVMesW7F6oXdBUsNpftQdLXLnNaRMytY6aNAwCeEjp9fhrAyjK8GZ2wDUnMMZoDVajczZbYrPqcXN7VRo",
  "key14": "4jBDMw5sRNWQsbaWX49fTQEryAr22KQAKMaZ3RYUAg5XoVE6m8rmxozu4kZHt93XWWmKLEiFnotybXQncnS2uKA2",
  "key15": "3Dw4bNBbttfV8sh8zuDAkQnwLo8o2sanyZpM5WUoT2tcjashaYiGUHMjE2cmTJoaxGLK4ETEW6BDicDE2pJXkJLu",
  "key16": "3BAV6eWg9gAK8nKJ9AyuXG4DuvQVTAazJHkbZnus4EX2LBtiwFHD9NhbGbTVexicrmKgQ43sUMYXeXPWPyf5T7Ee",
  "key17": "jPyjvwvTBdv3LbYBmzDi4AadBJi6ndF9ScgUaD5UcNgsGsmrWCfKiW2EHdHzi8Ec8ctizKBwnwXNPo7BBepg47q",
  "key18": "DAfFwrrEk2NhuU1ePBDy4qH7BNNnf1PdUSmUHwXx49ZeKaYqSJWbrTH5mCAedDxCBGy8cKy5HdxYAoj6KfUWd7R",
  "key19": "2Y4f8GYY975zhRLQW2uYVyx5fxZBiqtawu1PzvRNmLmLw7nmdTDazEghmYJLvcDLcbP1s4YiJ8fgw2t5okxMsZ8A",
  "key20": "5dY8gqmWbdhvh5g89JHkPq1F9hP565Ne5W5qvkyDKcWgzr7kQtUeqsHaQyQojMViEBwwJxBJnEzc1QB2PfHfYRGP",
  "key21": "22zCxEQ45t9XTVGb6uWjR7SkdysuUxVYaThQkyjzEFMibZryoi1epxbnppLvKBV3WLfSdJYLwrRpQYydio3LgG6E",
  "key22": "4EGRQGdV8sebfhmVBDg4AmqgYBaSx66Z3z2JVbN3bXrxNTdByN7p6zT4yLzsoRVgaQZgR5Cmq7FQWTFFVeJVGgaD",
  "key23": "4bKAxWtNn13fX4NddimACsvfudjt5rX3QTW7YsUkMrj9GkExFiZpts67Rp5FcV1AAahfiEgwxSj8f7956V7sbQoW",
  "key24": "ubuGsGr7bG5QA4mkRSQudjZ8xLqNPm4djBQrkrhn784jySyyX7RQstqQuWwH3mQ4FdpzQebaB2cvR3NoDr3W42w",
  "key25": "4BfozycKKCdV9PVDtSx8r777QZXuXSq7ph2tcGVGwiMZA9Nt2zKDJaW7tSQS6FrGXMjHXJSmcYy5a8EecSrciHi",
  "key26": "26eRAx15zyPmfNymbhiHP9PLYCZScTFpoAsLbDghsssf1GyvWXdKENFo8bKxhB89EzGbVdfdYLDfqh9Gjennm5rh",
  "key27": "2VwSUn9mJcC1G3EenrEJnrL3wMAwkRA33o54cnLnzMedBth6bBA9rm5sTvfb2Ex4GULEEo3oTyF8RgJgMNywubpV",
  "key28": "768XZ5JW27ep7XurBB6Qm4jFK1HM1ryzMSPAWie42ADrt9vsHPwLdhJkAyHrb5oYATEG64hMiNa4oHSE5x9eKic",
  "key29": "2tK7ZrmQ5jWzHmzsAm5bx5p1B9YHHjNo7e4riCSDWLqiKPmtBMr77eKJ1o3rcCRsueuZ5CwN22Kx6RRjyT5Y3VeL",
  "key30": "4Fn257f8zZVDTBRWpurdyHCMJL7quqicPndKUdHaszSeokeQewagyQwC2XB46wMFXJUCkmFiD9cqkSDnHFbD3fNm",
  "key31": "3rD2dexoz28ousnjYyhRBzyHQ9UxgFrznp8Xjq6KzeZ1NT1wHh9XeM9fGuPHGUTEYfYQZisEVwfRoWXjphMzWqTh",
  "key32": "crMLVFFpAjsoQu1XpnDx5odLXqE1YNKBLVLg3hPFhiiWaEvjwZGHsaGz4wEpWZNEQaj3fBkUhhmhv3zM5aiKDHV",
  "key33": "dEVGiN1zSEHnossYnJyk8dzUs5rLaxXwzmc1mA6zzFvCybdMXVMqzGwptj9yrCYHJpRqpmxAQHmJ7KqwB53Ynjd",
  "key34": "23fbt6Hv9BW6MRBFtKWUqRyuJCBEMqbW33xG9iYyAuSWB23YceXqbiGoqhnjVnfwYPCnw598MtvzjY5taLLaKPYS",
  "key35": "3TBM8ucGHzzJZvu6NAsEBxLNtsvpumZvxYjXnwrfxqeSyWHyRYS6c5YPjp7MagcVvZ9N66xSL9BybB4GLGhJqLxN",
  "key36": "3kfNU1xsf55B2r48neEY1ht7r3jzryhUKo6YUto8eh1qHNHtjxaRGvFyyHP7X4FYHCt1wy21PZPHPbWF6g46Fbk",
  "key37": "5hJpaVnGVhNpnFbc6sgcQrvKpVyAoPYudgc5EcXVu3hWanQM62WWLrCERbpEs3zE1BiGtsRSrNSYD5hg78rPNGUe",
  "key38": "22eDEyJXvbGyfB9ZcuhrCFjSp27sKxkWumUx7f9WDqjGkoWfMV1ZKKjLGYXiDE4CXsFBTY9yMQEWWvXdxgtXpUt6",
  "key39": "5HHHUDKiug4UPSTdvy5wEEVHV8j4zmQgcsRP9d8nnaK38KJoYWWuxDT7kQjdC7qXJXNNQHBjpDxoM35HoGfCwR7V",
  "key40": "4gMWerD4NJXKhWaoqdBkzZondmvnKP7yzMqMzx748tarWDuB2MexWLXEot4rS64AHpct2rEHm6ru2Dxv5nubdtGy",
  "key41": "3wBUdELuMm7A53cg7uuDDJfJnzgCa6Gof9ekzDuQtToVGFqhhhG5cUtRpG7sFDgpendFu9cYJtvCamxgm7THhu1q",
  "key42": "iTLrALitphxGjUeeWUqQNmzwA2HoxVrNpjTLT7c9UK1yA677WL5q9YHj4FFo9vwc9JkDQTjUbpLr5aM6agWzx7s",
  "key43": "5P22BpqDRMc6sTFpekWuKiUdNQ8wqVEzymqqhHWvDfVYD9YMhLeg5aLWaiWS97b297PkcmZdYKcjBXmmx6CZWe2K"
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
