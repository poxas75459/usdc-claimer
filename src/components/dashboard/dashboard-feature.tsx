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
    "3KeKB8RLPtgSgpz86x18cjAe5hfDK9aEwztRYNX8SN7sUySMGog6HvDNQ5JmJ5RE549oniRDpo9DYSfuM6arSuSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1Bp3VNs1fpoG8D2m4MLeg6icWw5YfKxKd87qg2YjQYnV5ocDSBKuD7AZTHkohmgQ75zQLaiyZySQNhkg4pjkYg",
  "key1": "3smaNKJ75SNYruyW6T4tKBRKW4DoUuicXoeEEtf9uzpGAzyBJgPvoxfmXo7i4K4PtT1zfu6ef3a32ERxneskYf9k",
  "key2": "26t2fiDcRfs4z4hkXeYeq2Bu4b9wAyvpqRcW4Y4KUBhMp5CpfVdwR2T7rVynYWGxdU6f6jsnNrC7XGq4NqbYirov",
  "key3": "2cM3PLg6Mwqmxn1Fa5oARdA3Z2TZtQ5yHKqXGyLx2nwapxmtZGRnLEuhtStKtr5gYG46dK2QAjY3zqmztbUr9NG",
  "key4": "537TPqN5nYBzaQJQvSLnb5WG28xWKeHNaXp9rvhTnydKWEz5sTSJcCoLoHsRAmJiXwJQAEYTfstG3YZn5vNxQsbG",
  "key5": "2kJrZguE7sMFLU5yWCByanBrWJqFbvARNhrRcm1Fg9As3eEK41APHSoq1witqk7gRx21nFsCWV8P65jotH3Yc15F",
  "key6": "3ezYkfFM3gyKBk1grBEimZBkJGZbpXVqUioY6cCYKcrW9sFkYUKGi5A9MmLfz48ejXAQyPWjdXNub2vhdqkkJSnU",
  "key7": "2g3BCxGYJn5ZX3c91cEu8x73a8mgZL62mELdeAdCeDfXR486qSgeo3TqLkG6Rhf9zUJNB7PekMTidAEokd7iHk4z",
  "key8": "xdGSgfrGmpn7Y6Pnqww2NcryeMjGWvgLgAWWmyzGgUhyq4KQeTZhyn7YcyXwQ1iUPR17iwUJvCJ92THfNmNSDd4",
  "key9": "osgR9TjokDFEydKbWegvqH3etoXUjCEs2ePSPpAWnc2c8pRnqVvY7wdmEcVZWTaeU1VLPP6rtxcGnGrHwfqRzUb",
  "key10": "2FC1i6TBejupbNoKdHhwB6utZB5DoVJ3snDiTtvVUkdZiC7ZHZB864RpdSrPGqqE9VBXQdHepAjSMqHsSXEZsobp",
  "key11": "5BjpgFTLLBKbpaauM6FbuE1v8PuMV5AiCp2DQ8vUnJoJnemFSnBhzVyBpPvj2sD3TsSMh7YxuxMBmGjUP6B6Rqcr",
  "key12": "HQVEeqmUbCshJ3dvg2EJze9z5cyYTrt2ZYQcokYsvjSPGQnMyhr3mPjT6Scut6q38TcPnHaeFqT6ceyfxdagfVk",
  "key13": "tzb6iiwAbcCUjCQCyooQZa2nVkVnutXCnEywuNYZfCDMWn2s1Wht7ZZahXZeEcMSvcs68s8PVaUkuaHpjimRMdQ",
  "key14": "5QaH7qZWfhe8THL7rMPMq68PYHGX7bsRDv9c15iLALF5a6vk55wkXG4jRWDBdFmAW1BiZZzYV1jdfwqeCyH9AWqy",
  "key15": "2DLUDE5wsgPwndTbgXPLzVsKiNfyEVTaSSmq5JkhEBCrwY8x4HvcoubF4JvP1otqDkcMrAS1ucyi6i6Sk1aAwVyR",
  "key16": "37DF9Fix5g1xuGeawRNgLxNvZSqvKzdSP9v6ogww6GMb1iNoyhFcKohcbKhqsE3mH5F5pJDfDuyxUi9TsNpviV9J",
  "key17": "5qkkzhcqM4d3UkapPxdrQP2GWE1Mbn553q5a8EqwkiVLoHD71Y9GshQjskhGSQhPeGKCexq5FEGyfLFRMN851Jnd",
  "key18": "2WXYQ5RUdRJKoPftcDJjYX6pKApheoWoH6jsGQXrfUAy18uf3Ree8MtKeWVWCjC8Hy9pDBy2RBXkx5XhtJnujRMb",
  "key19": "4NBUn7qgt9maGMPsRTxSdd1BxVERTBnjuxRxm2cvBXaoyWYve5xod1cAkhN4kyVCSZauGCSpMdnXMmFa5v8onwES",
  "key20": "5sdeb87SzSYMvuFbfZFmcydUuas827XZtVGf2GeK933dybXQebKExNdCBJRJtaTubKdj68aPvNcsGNGnniHBLKsR",
  "key21": "5F2FqY2nCPm3py8MFV5UNuuKgscFT6pA7NAfggtQu7nZ9Gg9mpKJav5Pk6YeaYnQHdYbctFqJjzZURZDoxNsuYaz",
  "key22": "4frvj5L1B16J9U948RkEjwg9fng5AnH5QtVfuJuuYeuF89ucAGaPfi8FczF9rSNqTnc8P82FAXpZ1j7yjvnnfG54",
  "key23": "3pAaDDbXs5fqsZPw3BJ8ydYQPDuUHgsbezSCWiAWRP61fJSA621J3Qu98ELNagzmWv319G9SvAV3DJccGEsApF8M",
  "key24": "TSPRGeevHN2otKXFkwm8Tg2MUApZbtGDRJ1Xjz7fHpvWeQUWttcfuzokg6nn4DxEjL1uUZ1SxpX6aUqFMa7QUX2",
  "key25": "DFjxWmBhuP5zdSxoCoF3aBBAbA8tWr2YxoGUc6ao9PYbt8d3BLfPgG1oN5BFzzA6dse4PizqrfajJpwmocusLoT",
  "key26": "5era4aCr7u5gLGa8pZeRofD11kRD5Q1G1pX8Gw6PdmrEKSfdyw4QKr3E5LGvRcX3MwCbhn7CoXWkwTvvMYGhVif2",
  "key27": "2aygCe2CH6TN8fMn1dW84jU62tx7Y4p9LtRAgoYDouT47SCoAszW1PPuF6gedphByBGj2mEmoNEVbNpsxc7UbFVE",
  "key28": "3uHvPaLQ6qUZWVpAz1QQVRPNZh7YXKtA3WLd4UdnYyxxH6sn32fdfCQD1J6aQG4saHT3M1WG22kqVtsmxxhhGABE",
  "key29": "2HkXXnQ2Jb4QgHiWMNf8ojqwP9LQat6zQCiTjft8FkRbtcJx8eYocv74diBUsY9D988vS86FpY821AKT6DmqNcos",
  "key30": "4zE3iBG4p8tcmHrLaZ5gQboViTXfoMu1MJMctev4Q6ipuU9QGSd2koDHdZRHZxvuLg57vQR5vtiKsb7f9Q5t1zZh",
  "key31": "5yhGB79uBagq1Rb15oJERfEXxQGxKRHzHt7NDr5qy7paY4hYbrkcBXd51hHhmiBkyoJWq9D57okShYktaXg5H5oS",
  "key32": "bFmbrttJsjLvBrNm7a8k2qCzTqaVUFAAoVsDQLj8VEnbF1z61HwagqU4fsGHbA19enaXeu7147hLK9iD6T9jHM4",
  "key33": "haxsftfbTwdyjjvfRoHUXgNEiehN3CLkpKjLasstEZCRS4deHD2VuADbEjFy65PtV95ZY4uDoNE28VHNUeKNwt5",
  "key34": "461QF6f3Wy86quMCHgGVpuVmHugq72SeVZbUqnmQAnTYCJTo6MQ4GhjzpFMLoJozc2gF1rbSNj5CMjQgZCWBvtVc",
  "key35": "2hf6q4jnUPyQJtgpQtL9gpzsdAnencnzorYnsyTWozbeCPZcaXrKchy1UACm9tzGu4QMKm8NMqmLrJkLHbKB8QgJ",
  "key36": "3r1Wtqv64176CSR4VB7PfpbSKSUUCRgjz8xCDQEfELUhrR64LGFsjvz1pLeCCBwXyD7jxuaun5uXXwncFLFfT62H",
  "key37": "4StiVcCggSoH6gc5g6jYzAPrAywKiJswNAy7Amx6iN1ygLjHEHXVfAc25DAW3WXqFuUyyuhmsH3NbQYFr7svk59h",
  "key38": "5wT6Vfsh7YypsfAmYxDNpMuAPbZX9JtkAYVdHC3W2VRt2Y676wm5FWT1ccf2Tcj5aKnLcepE9asegMiSwFYfzigb",
  "key39": "y3QaqX8mYrb9yKWazzwRt8z2UPXQWi2MVTyAws6BFrWy6pEgPsReRm7vcWp1YGPBJLq7yWaqExEqTDpKhir2gJc",
  "key40": "oBEW5Ni7jmGKFcceUYrusJUty9yMRHXZdAjJeBxa5dCGs3E8sPTcUkmVZXmzokjtSqitguwS4LHR9j5GzL6syoJ",
  "key41": "5St2S46fjMYAn6CuCj7Q4HFViQKF2L3pLY7qkzktxEFcurVHbXYSi3trGmvZmxhV4YhJNPL8sH2S1ed56uFSfvmR",
  "key42": "4bXVQh3dtF5ErbnMs72fwX9sAL7qoXTRCq6VU6JPGnqwiHDUCtQvSr3AxT7dAPvLJtttaQCm23PaqD2a56T4eZR3",
  "key43": "5pvPz1U17gHyexBMzcct6LCG52gSgdZsAMcVcdpSLMG1WTgUNhU1ZNdoJbeQTptnrgre4rc43FFnxGDrvYkr8hUf",
  "key44": "2c6gtmw6WCd4qaTb6TV33NpbU8G3hna6FjA5nT69BrRvXmaFBTwzvh4KRTpgnYYzTXmF9fuB9pcV2yPUn2MPozMf",
  "key45": "2Aq1fVuAJeekhHe3RFQfE4qh4xzKpBoNvjVGG7G8Mv8qdr3zm7UthjTAdPFkkPWyzweHxFpm7gdvvLWpXc5umRh4",
  "key46": "4renj6HtZLDw6zNHM4yhce7S4ggKB55qD3MXfH3DDN3Has83S3UprpF9uBwnqNcpqLZbLA3dXoit651j9ANQ1fxR"
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
