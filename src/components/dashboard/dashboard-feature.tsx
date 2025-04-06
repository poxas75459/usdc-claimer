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
    "4vRb2GVVQF6zY68SytRnC3xSuSE8GRWiuVbgXrXK5y4UXiWvME6gT61kLMTa2JJXmazvHiHkdC9Eo2WRBca5wRN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqV5pLraVvHMB3QUypxFDAvHgqZrLVi7gqsANjVNXayTAYvWtSh3H3zcAAUSX28ZfpfYVUVDhzV917ZTkMaij7d",
  "key1": "3q38wjbwrS5hx979qc9wdRaVaF6EB3HukgGXnyZuwLDDabAFQjXXXBWtHbGyywKckFWrjLQEprikwZibtWK84dKw",
  "key2": "5GXUppj3yy4AnXL7Uoc94aS4UEUmhFRa5x6CPZcGmEinxFngndEBTbzR1GM75uFUv7PRS5aMHXFPsLQCjRPBqmQw",
  "key3": "35rBBiq7Kc1rYWHwEAxMpoLdBnjxsD63gH8pPhQyWv5QDP6zTdPDJNxsfpV7RaFvM9yauuy47ai6pWCQmc7MRkVC",
  "key4": "2JihHrsiXque86HGWfXW8792izaPX8uXtCR2PZSF2X2mDb8Vuz1wUDDJWMibxSHmXxW3fsFv4mgJpVSyZc49tC6k",
  "key5": "4fdUrJunhKjvCueDwCVT1gNPekrPW7tq8pXu33x6noSkzt8ajkFrn8JhSYa98mhmtrvW1oNfaK9ykx8fzdykiEPo",
  "key6": "4MHdJK3mKnV4pYXaW6iy1yLyWpTQEs4YUso9RJRqrwpCahxcQRRGm4XTw9Fz2zLLsh6HiKRTPKv27mXWqhUfLkCX",
  "key7": "5PRFvyvsv5tXGvdUBd3DPkQEACgEy6cKhSSo2hcMjQXzcwaQvDevF6yR7CvZrqkaXkoArWUu8v7kUTizwtWQAXcC",
  "key8": "23WfFoBv3J3UqDqujaPf6Ub98iMCV2GRHv3eWGWyWLLJUfwanntAWhRzMghUfqaqHrdYngSKCxhYK1cjQVqkuxzC",
  "key9": "3dbQao9qDMWLBidFsm3RsyDu5V4urT4vhUP9gkE1Y96MTDghX3CUdSeufeGg5QuUeUVWLiSjvt7YsEE1o8V3vVNQ",
  "key10": "3ESYtxoFu9tPQUM1QvwEJt1ZJcARmfUmzZKU5QtwDrwhD98MmvuFTkRTX5u3QRJoQjN2NAZVcQEhvEhLFJt9iaQb",
  "key11": "eNBENut3eJG2PZN7cSA8mtX3K4i9tZFXjhApfgDpYnyFx2eEjcAtp7akZFQB6372zxSDDrm5mu97J8oKJVHHGJc",
  "key12": "5oPEPK7WSMEXJ6bgHqBhedeNjckCYEuQ8iSbGgXy5zXwvUywa9tahgfeYxwM9nZFLadLmD4tUqGSNFLciSAa7Vu6",
  "key13": "54VsNEh6dKjDAGCQFyJ1EZvf5oLjHPoguQfNqpEAy6dHPH33nxQEUQMFD82tXGD3XsMWtZmy5q6tE7nBxVsaMMgM",
  "key14": "dSSoTPC85zYit3iMDcparanhdPGxbEKncgixjUni7NBJYQTR5858b4qZV5CQmBvBE6JuxtEYKde9VxX29R7b6LD",
  "key15": "38365iPJGf8cYCR8Zv94tGVx7UhpEP3J31ik1qDDi9fxyEEZMUhF9uzPfnDtq5MekhJJAxNYhtScLZE47Jm2og1H",
  "key16": "2BsNPMXxbG7EZ8Go2nniZjGagbfwuAh8Vt2sAoT1XGLtvog6QXZKaGJd61Tv5vfv8yuNWWV5dddMUJXh6qSQjsL8",
  "key17": "4sMozocwhFLC8NHxh5nwWJbb1r4AomJmDzryoZjNQNU3hAU7R5vtqRwmwv6WZYKSKa86zRMnEZhvR7x1c6zYooff",
  "key18": "533rd8eF7RNgeA9tXFFHf1eumQY2SPQLbbSaNsjoegmQXvg5YtRdbA4FoFeKcQbwYaL1shcoLrxP65Q1XBhqDyii",
  "key19": "2ce4jfpG3DmMNwH9CBBB95oL5SPhGmNKof578Y46WSVo4yQe4XjBqhFSi9GQtM2MzfvH5ppQes2cJVV49wPYWUyh",
  "key20": "4LsUYRLXxttsp6WxZgz8M6pGHJrRTVL2EAxXR5cqNQ4JgKWQc6b1RxkpLAntZhqF5w16vFp5eSxyMaWqmiKAHAmw",
  "key21": "NvxnxMitUpAHWtA3t62ygMdzbRJbS1AcxH3KnaLWgBdJnskebM8Fa2sAGbidr68nnZqvNhFVR1SqT3pHFTPiDEb",
  "key22": "3XewMgiw5uF22m1TNAWdaTY9UuzYWY4wxv71Yhp7L6W1o9WeziHMKGMriAt3VTkh2D9p8gaxKuPxfpaYYp7jQJ98",
  "key23": "5SS4aMYvCnUnhCfYZ8S7fqPbYSEbXw5k7RoMBAtxGhAC9MiV9GxkNgHorK7kkiunVA8sTXHxpMdQYmo5PRUC4rRj",
  "key24": "4e8wgAGCaCQ1dNSrzdHyjeaq5vxhLUYQEfQAWCaBAZ2xi1j9FbNvDGkv1Wgqs5Ce8ML44UycfXXHoXMm2ybBQnqZ",
  "key25": "HqDv53nCVce7WdK35hpQ58rTp8tH2YMYpADV4TzVzdB93xjjHWw3PhKpKPtSdcxuKZSEqVkwBJu9N1ePeuiDwEq",
  "key26": "4ovVwNngzR8Jg7YMB3kJp1HyXxYzr1PsfPda1QV7M5e8xbYmWWi54iuhC9BGdWnHu4MPkXxfCgHo3Rv595gfLgYg",
  "key27": "2XEctrTfyWPRFsWm2neUxkP2fA2UGKed9kUBNPRnuCFm3e2pwcNha69R7vHZastqZFtk5eozRBAQCTX7ejaDPqFZ",
  "key28": "2fnDavaBGnY5rG745rdBeuRKpT3wrdR53tcV64nsaUmhMvxEzm2bvFW13dZerqoQTZmwHPuP88M1DZsa3qbEwNCn",
  "key29": "1Qdh3iWmTKuUjsofCNdSqXT48ASErJhm7DVFfZbBYn8Wa4t7DKQwwmQS11mHh836gteGjrsaD2pJj1tkSMCUFxE",
  "key30": "5xcx3CTeEXJWrumXHvfMpyMr1sT59ia2WhbT1kmZ2bQorLYgJbZ9MEWzCkK1ZY2URNFG6GkRCArMCX2KeP1uPXQV",
  "key31": "4QYwRbjBXvZfTFczBz4UpWZxfkuiDkrnBXUwjrBdc3VwY7c9eyaVju4txFc7cAuXK5DwE1FCFnDFMWseXRB3XM6U",
  "key32": "5ZsA2V1omZhLSTZS3rvcqrDEeyDixkJamDdPPoHkhwKoEJVQDpg2q1v422BWwJuJVgsX2o3SKJx83wy2343Hbzx7",
  "key33": "63sgHjpnDQLKRCRf9TYq4gCEniHKRfTsZxY3uQcThF7ANUyoizroTxmtnbUSXSyZkftjwy5juXxFxAjvQppd3oCQ",
  "key34": "GQBSBE8gZZo7qtWbsiwLNsjiPaFuHPDbJRWuNkz9k3d2DbyH9nY7qqyVghkZ17g8p8i6CSnzAeyJdfhm83hFBUK",
  "key35": "2LPQZzVzjAeS7y975cjFVwqBWV1RCtXih1uDUC8u6wmPmNuKw6Xyu8tvnLmxesZ5YN3vxB29aPx2QAMrk2wybcRF",
  "key36": "4ZDRS6fK1t92jiLYkbnTTXtwx1hUE4JY52Wb2vxFXzdAFzrN9mvZ8p81DhgnyEkfB2ST61s13Zaa62J7C3KEDypj",
  "key37": "2Cu8am4R8T1iXcFV7uBQmURN6X4x3P4bypFPhgZh5VnURcAKiuVxPALNrriEo9YrXZbuvxXfRC8vQRzcGo2Eh7U1",
  "key38": "RCxkSsoecmXNdENhk4HVdE8JgYLGLyuBGndtAEmr5JLZNPcnH154HVVWpWfv5sTgiLJbt5tyroRk4SzBBshXxQi",
  "key39": "2dtYV4oSus6dnpxiLmMEWskRcCjfViRFcFhpAg7ZcLuM5XRKErcS32VsSus15QCBZFCuNQs2syq8xUiZUn6W5eTg",
  "key40": "3LJCaW65NkgUioBnJpecps9QoJbwC8FXxtF5uS87U382oUUj3K287FzJrsK56mG1K9DVu9j4B1sMR6RGq3JRg7CC",
  "key41": "3PUsnJiJPSi7Pt5pG7RkN3bMBsLUvcYLMJVezDgp4BKF5qbYFr3FgZykD4voHfg4MC6AntiVvmhshac8FihLYNKj",
  "key42": "2x7gVdGjjEjGidCogcfcjUk9bERdskbNMPhfow7YE2kLvByHRxE3NSPENQzwaruyuA55WaSp6VUwFhdBU1hJj4gj",
  "key43": "2DVvUXGRwXyTQfUhGRDu2SmSjXhoB73twgFMcHJ54kC3KSKmDstRiMShX82mMDy9Fv2BZpVDnL43EoALXvKXiijx",
  "key44": "WVfoizS2PC4p797TH3drACzxnXysMKxtDE661sx1sjHj1tZoC16j1Q7Rfk7K7jHW4BQAQpmjrHPUjovr3XptjZ4",
  "key45": "5NdMMktGaRJCpwGJERv3En1FUvqgtaWyn5HxckA3jL9QXDM7JDh2hGZDbzheHq6zoTRm8ZhwjV9Tw561BC6YCa4b",
  "key46": "52QdDHcE9jKRkPGi497JFVUs9M1w92N7oS4HuJijpw67FotZc8iwBxamcoWJt1jxdzDpmZ5qPZBMuJVB5HAwxLQV",
  "key47": "UF5EyhwXE2qBeBtAcmXr95FxjP4wNZXiMXMPnDyn8YdpJGMqRi6SFADAqpfyFAgQF8RKqy7sXiZvfFZBGERHEit"
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
