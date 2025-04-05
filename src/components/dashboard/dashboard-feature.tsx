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
    "LiRLMTCbnjb3v2oJafz16srvjejnGw4LPAUvCC8GwP3uCeE8ykSu56L3pFk13ijv5sARCiRXRczqKGh5jCAosxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BKjyu5dckRy7pof29efp8dPxN14uxLtTAHYuGLTEVKajeomvbovuyZ6ao5JFyroDGfis4HGYtMAWwh9gzzkzJG1",
  "key1": "iKc84c66dgwoALgAcNKvSUMgxVMZ3gwBY4kHDyGLtqwx6x2HUq2eViv1oPs81jzWnMa8U7dX3J4jaYPku5KPTxC",
  "key2": "5cKa8nsvfTUXcKgAGFTCvMxCaQ1iWzz6oB5uWjFVGYNRJrS9GhyznwR453gPvRdcX9q7hD6Kk4y5R5uERzmyY56f",
  "key3": "3YpKWfBXeenb5L93wmEBaJG2UuEvNM7cEXDuW2vpwcGWG5pagkjBu41gQPChXNQVNzyab1nMssTFCNsWBburUMhP",
  "key4": "3VY7ZL1yLhS46MySWurkRsjk1sCBWtmQzNbJPBzCNwwv7jZiaoGbgGseQo6VRjbALWJR4TvLdmnTuLcwYoPAUekA",
  "key5": "5diD3rdMpApHR52MJofcioehz4sqHSj1uB8KhXyhx5NAX5pPtUaPR3tZrvzuZw6PYc8NWsC8kFc35q4jh1eDeB4t",
  "key6": "3VcauotTQhNnmJjbwVCNrKzigqD8izPRk2AkTvPYzQ38d2KDuMgNt8N9NAy46UrMEXQnJ5qHBCL9UoqLgCyyVEQo",
  "key7": "2nNCcoK4aCutUjhganuwVsLxgKRAdgtiAUU1qrMsF5xRbk1vnqzcR32mwtVCxoNqidu8sCgdQh27sCShFqqmBGzg",
  "key8": "d14ZM3XZXekVXzUpnAPYLLShxmnjJnoiXG34h7PFi4EfQVp9RodrqC3Er4RXyLc1SdAVWXeq1GETnmdZ6QKrT8Z",
  "key9": "67X23GGXe3Z6dXAH5GRG9z1eD3yLraVq21ASch3ejJSUogUB1rgB4B4N7oUzL4E33wKhGfiyfAP33HMWDB52R83w",
  "key10": "2HpCjdtHMEqE3esuusiHMwS1oEeih5RvJcHBKHc8z8pJGu8ak6iy8SRsYeUPT7sS7WmHPKfyaMDHD44SL6SFrpm6",
  "key11": "66E3FSiPGt4q5ajmRCa4nGpLBsRDS76opTWciShBw3zskqtDqeTksTjPSsfjtzYGUGbtZKP1A76MMvsTBtM4u3xg",
  "key12": "5pW8TBNqXhSXEEvKJdmRXaSSiSwQbHqxehFkqDXJ7ibVSVNfGw2GsFmh6yV9Nvotg5z2cT1ss3b8JEq28jENW6BM",
  "key13": "4T2jPcrdC75U4SUdGFRDUWrn1xmF6vwzQGR9fDoCsmQmgPK92wYicUWEtFM6J5BSsmoje2zvE9roHMwxuNf4nLdH",
  "key14": "3Zt7NNCJiWJVsV7n1EJoPzheRobJsukMTaS3FZC8bBQq3NDGxY3FmYvrdjQKNP2RqJ7qacXSda6Q5dc2nMUHUPMR",
  "key15": "4V6hec4m7D7dpjRsDE7G2KhUukwtMpg2V9DriDYSgpsbCsHMtcLSAyiAYRkRy2qpKxLPG7711qefjYCN7feHvDpF",
  "key16": "2hw8ynYwDCabNkVK8YFgZjTG7HBabDsZYBJbRxwXjxcaD2hBj5Teaz1JbHKBe7KgUaJc6iFA1iRac1a2Vq6BYcJp",
  "key17": "54yRNzAUjpjXEPTovePB1eBLLnZ1vuuXvTMR8t4oYKCFaaqx4Aqty2cYkSdYmQLDxp9fRH4QSML35ZjemSGxvZ7o",
  "key18": "3n5sJVHZYv3qL2eqnvoAm4vmCpNaYX6PcAYdm6PmX1tkUH95xpHjfkbap3d4ZXV4vq8ZoSM7gy9caZcjmbqK4FJb",
  "key19": "QwpXe7a5Zq2a6UF3gDCbz8LoCo4esNfGg56Z6nmWKzJDHBVBg7oaETHz9o2pgRHex2rnMYvP6YX8Y6m8tE2MLZR",
  "key20": "SruKmrqJyka5EiKCMm6sdNFyoMc6S8Yyurg2sRo8WVMEQZiAGe3Qsxj3RWq4pqE5RKFpDHVdGkBEJsiRRtWSZXN",
  "key21": "2jQvE16KGh7MsyfeNq7d81aet1e9PoaBtRXRTs36ns4WJDTyTka58HP61JiJJ4EwT6cw37piqGY8uhg639Y9JGbT",
  "key22": "2nNJGhF7UceJBZCqbYCGNgiX2wFDUxfZtvBcWwQaPuFVYd7R3spQxFMN7jLHzLcXJmdBoy8xgUJ46Y1EEjje6iiZ",
  "key23": "4XyKaur51iyDxTW4SreKKSqtZgCbjspAA9yzLFffJdB74hJwYB2V4xyKvFVtDwSZRV7vqhvQdSWhP32Z5XkBKoLx",
  "key24": "4U9VGxz4zinK6grkk8H2fBtGkT3STizcNs1fZzGxVmdUMNSvG6bppmWmzWPbgzmDjJea5iVoyy9EQER7HYGLYU1h",
  "key25": "2ToRe27e9DGvmAsLpzVnGz1c8T2cgNtsM5p3Grv1p9pwTbfSsbHhvdxRqH6enmUWioUP9eqsHgs1vfk7ED2c9Z55",
  "key26": "3SNe12mEA4EJaMxpSrwYjLcBfCeYLYUQGXaKEcD16UG635xYAhw77GjqNTuLAQzjqZhgZcgxTrABTYd911eoxQ4Y",
  "key27": "3S7LcPfnEPxKqmGvXNTVpSveCzSFnrgSUrzRqKnsCD1f5KZraingT7RrCyJbrphMsdBL42EXKx28mBa3hRw6XQNu",
  "key28": "5R1qJnH5kahfJPCQapgkZtTpmwnvsrYafHnkrq644hUE8GdLsxqxwe6LRJqmWGL4EBBKY1v1q3eTPgbXGgdTz4PN",
  "key29": "4t9Cqr3PNMQtfrQWUeT5YUn69dvq95pRx8Mq83ZFCvZSmvw59Zp9gPXv62JsSTDjgCv9uCQpki9kA2fQwGRU5FYU",
  "key30": "3gJFjGGRRUr8TA8tccDeGu8EPsotgRERXY3boTQRYuyAj9Qg4J3WBqGk76Mo2JfZmCTXoiXk6QcpYbYHtwVNMGie",
  "key31": "2RF3QKYvsvcpEKjhjByWGtWPTVak9usvTpa2K6EFsHBuPej5qTWXVEmJi2deCb9R8EfgtRL7sdGw9f343uY99BY6",
  "key32": "4N7JvecgD6vyLB5NXp11V46UfqMsazrPhR4WCvnj4HoVmJwppzc3VumJADUSw6tXZM45aAcdW3hZJ6B9Ga1sn37j",
  "key33": "3GYk3UDD7NxX3LnQsPQuz6dkviFEEHaMahfwCPxKtZybGrpK7Ymd1mMZV3zQmWmS5bmc64VZjerfsyeNwzYaYJhH",
  "key34": "RpmWDYiUz3pGXgHvV4vyqdTcg7i16hGP4gcBXiAhCkKro7BekzpqFehFNAfmnzJLQHkunFcpz8f3ZhZmHdLn8kX",
  "key35": "3YAzoF8LsoVw7LXZ5F4VRKB9THwuj1fkP6shfeyC56xx37TitX1FhxoWmHJXKq351B4Xf9qd4R1u5KVv6bpFQWY4",
  "key36": "5mmQPHdhJGfnaaqSAA1zjjepySYoq4ytRA72wFTSCFEm4VTb4rxvy3s3rWB5bD3VF8pues1JPEyHgvXJgfCzM2SC",
  "key37": "4h4N2qdbTVwF4VRWKhKXQBjGEccdkJCT7ZeiEh7T1UgGcTqgTKdFjHj3Fchhv3jZkEpjeD5RuNRXRFJNB9q2Qbod",
  "key38": "48QcUUF32vNF4rzkhCDDcSJFzb1sShB1pUjFg7gwMZF1xh8GbYgbyrtN8kKhpPJhkwXb8mWMErqJCAb4CE4rnVgC"
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
