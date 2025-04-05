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
    "58TFbhkUvgtw4nri6yGFPGU47gpUjD11Ff9aUMs4U3bfrD3wxkF8a8AWmrrY5oCQYMWJqR4aobe61veoPq7UG7qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdEnA7TFtznQrYu3tXBQtuD2fTNcFY1VXgZZ8cn529Z1sMD33mFC1BVsysanjP51atP1giRDrhE4F3eaZS1rPtA",
  "key1": "4LUU1iR8KDhCREHXLPJkr9K6DkT1XALvNMdZ7CUBnJJ5fed6jD1wWVijN729V5Q8HrqVfac6oqAH58GQ6kiyVE54",
  "key2": "4W6BAsynrkrmigDffuQtC1xgfZxcX2JkzwHsV79E3uN9tfJXX6uoYiUp8Pfvi7kkp45CG3F3BtVbk9573TNBLePY",
  "key3": "2mnJayVvDxskB4NWwFpsmdeiKvV5254sNFY27hakMoyhau3419RPRUb4LUn1aPMFAz8vU9QQoNEzm2YwMo1qBCFs",
  "key4": "4yC4PgVyJWkhcqjnNMdJbvn1zyP7ii8qoZvGtKkaL2GNxR1KQ453JwmWQifQWuKLW19jPA73kTCb2H6aHs7XPxUn",
  "key5": "gpndQ1KuGooAZP5Xmz9d6iJhdppvgyNgLimnW8rq5n7EQR9WLA1e3NR2Feg6MqBfAq7BEsnHd7VT8yF96wLtEso",
  "key6": "bwruRr6Ab6RGE2CUJMcveJNMChX4TANpuSYr2Cvuad76ECWbVtFGpmsCdhGRk3DPGZasTHig8MjXq8EHPBQi1MA",
  "key7": "45VGLL2NQUAbsU3QPAL8gKdzYNFepU99xH3V9rzn5CYKoSjNLu5pb6sGjwqF1u3Cvosf4rbAw3DdQe8AXZdxj9Am",
  "key8": "5Aif7RiuE3iXRFjQo2qp9KUVPAbfgwyYQqU23Qpf8Tt2MqNqxjztTpcLuMDFbpvGte1Q4Q5WwtnPLbDdGAku4FyR",
  "key9": "46NGARcSaPA9c6UzxkXTcAiUAXA4nugQw1VrigtT6tJUWzWW2QL9izrwWnffvGKQ9nQEpcUPxaXWZwuZ3Ea9nNxC",
  "key10": "RS65w6EVoeaeKjbnXVzjmQ3dHwZFK3t2roND6Ub2ysidHLi5fZKKzzWgsJ58W34kiMYtds1x4kzVJWPwzLsGWST",
  "key11": "5H69Nbq1bR3J97XUhBN5E7NANttbLVxEqXhTPeERmDry4FvtXBvfYxPX8qPRRfir6YsFYuUSc4yn45H88BGk2vNh",
  "key12": "axARyBzTAu7ccbuR28oa7YrzyHwgNDD1qt6Vdx7zHkUSiPe2aqMqjvPSWXwojagwBv4imx5q6hAdKpmX6pAqpuw",
  "key13": "5cE3pNcvPCj7cdEoQUQsZgxrg7tPyBQ6dD3MHWhYu8qeqDKHgipvTGxbc3osLBoUoNCKXe4RCaYBAjUpcxV92FCc",
  "key14": "saJfy8HCZkgHqhYwKoxmqsakWSCS8KeZxj9CLLgZEamX21EJVUfVTnLVCwwwwWQshyUYdeeXx2foYk6fGrpukGy",
  "key15": "2xBwr7KiR2dzkg1DH9hh4rKE1L6inqtwvAPBhpKkv8Re1P4cKBg5GRCoLUCzBQkWqSxiTv1btprjnxQfT82cEiVJ",
  "key16": "59eKA9MuLdU2fn8JuRC9Pk1yboCvDgeMKfVoqQF13KVw7JgmEZfFQXju1Wy76HBbrWbbM9D4JKSrBLZXbZG6i6Ty",
  "key17": "4ovryC7Dzjg4aEDQKBHa2vWBChom1STLcgtBXjX7rZBQHNyfzF8CDKLoMiemoUcnwmSpaTEuVRpN7vW2qrvcj3C5",
  "key18": "3v5WgdUco4YoMpZwDr7ifRAmiwv8WNofXs9iVXPCGXoBqUjREJWYLZmLPXUkd1GuhuEecN7bFidnFRwirghEXfM5",
  "key19": "67W7E6NNFvQzo7Y3YgTcHuLSMCsxUM2Yy3WFB8VXwNsnj4S93ziuWE9t7ordPqdGPN5V9spdHbiEuXKtGULU74G6",
  "key20": "4bfV4LFUVUfkVNaY8gArDagn76J4c28sSzxb9Aq9c51pdWvjaGzwvFQHAZSybFmyzZo2aVZAFzbeS7vs7TMPwFUS",
  "key21": "5PzWb3D4mGm3JAdioHQk6SqrCX61moQF3bFqryNfS8L99n3dJDJVibDxzQeeeVTzEWgQpGHzAtBiVZYrL1iMciim",
  "key22": "2ZbavHDEetxpxv4P9yLfCaxkPV48tSC8WkNxeUmmXV6hNBoCF8oLYg9bZFiAgPzUWFKbGvWrAefFS8cBcxo6tmcQ",
  "key23": "3yPuS3s9tYB3kUHVNHcPoemdiSHVi6CDnVt4gsZW76xmbvAsKj2pVvRnbmFBYSYhp2auzywrq3TctK6ttKfnkLve",
  "key24": "3QrMXY51TF3yoad6ecLqPKGFUnMgYbSedfMzHPbpU1YyfKfciBrAcdmjMUaPtzs9aj9gHMJfqgaNBaDURmf7JZc6",
  "key25": "3rVgxTRP5eqXbAb2eGrHSKfdBuxd744uUxCNwAZMBbibxiVCnnryC3cRHX9mwVzm6ASDB59fSUFm7aW2yP6rkr9R",
  "key26": "w5ZKJUAbRojgTecL6XkDyDudHK2oztGZFX5BUKzMRVQMxPA4wmHhzyT9RGmFNB8nZrdwg8LtbnhLvRmJdJuSTR2",
  "key27": "47438etw2S8oBJf5YKEPckgviFNeGWwL2fQqmBZAkKuBtoYJN7uaEPQKzU3MUfsTJPeniVPhqbRCZurCCVCu9Lm7",
  "key28": "5oL3raNfmQ7dq52zyShbZpTz7SvV6ftGJAGiMchTGt22rpPo5nZGP7TVWdpDPrp1czD8GmSkyuzbmPWV1pWhMdfZ",
  "key29": "2bw9HNmrPPPYpxcoyzFFCD75HSfGeSssBWYfzQTgsv5wChfKRcLU2kbKHwZffWupLjuMys7uCpmAgzHWFuWPs5pC",
  "key30": "2XYdTRwPpHyhDpwBj6usCv85YPVBvMkqG1tC9D7EMq9ff3dqmceZcwUGq88BZAQatKjQk8CGx6Jx3msTtkyYdcmh"
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
