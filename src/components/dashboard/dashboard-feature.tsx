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
    "4qdkYiGVgbsAqEGMT4iiVGg4vyoF5f83vnijmKdzCjzN35EohivX4Mo4vxg9yEsVhEPZ6LAfsHDxLgVnth5W2Qsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "965eXRK6qeqFtxWhLYAs6G3YmAFB3oEhnHm3t4BKahJNAai9XCDS4eTBNxZyk1rJP43dvQVFtjc7igu3Dx8reWj",
  "key1": "KwA79e6rNgPtb452MwkpbUi3PvX36qAzvpreABrQ7LpF8gxS9yAo1TfphXKqLaXdFRhdESY24EeCKPNN14TRK5e",
  "key2": "5o63s5EU7wP5eJmxVVoewopWSrEbz8BZSBMgN8WQVCnwqWK3FkMtBSxNnkLT9jYoPK2rrFzReeCjgdB8KuK2vsD8",
  "key3": "3hG8ZhYxTi189deEow7jTZS5BN8i614UvD7x5YVE7zjKNDTthygPUdYuJ15MCdiGnBHhHUyNctDzP4sTegURbET7",
  "key4": "5J325np2EUN3bwnvn1zxYYgsTYWY9m4fbPwA8aJMSkVNdQYPmTSeC26Wwcnv8p4C2CUHmzGUw41t2mVX3VsqSjwa",
  "key5": "344Pm8kDHURZr86ZxDZJYGtDhiwdqFuCJt1KFxJ6XKeGokncnuKKDqqe9oTet3nLTcmRKGhoobDBbEgbA8vSgQSA",
  "key6": "3uAytZcfBMerNBc6y3xHv5VDCnvoxGC2UQm1t9sdUfbqoXvAN1QBgy6GdF6eriLjURjpGnqUWxRnEFBqXbhye1gS",
  "key7": "3hbZ9Kv8r5W9YJdi5kTAuJz6MyK49PBnXKTbLeYhe9ub83sKmx6pU6ai9mS4NP8b1RVwd6RH6abseCKZcGhNscSs",
  "key8": "dYopL4qieUAyGRphsC67zcsC8taoVcqD9uHwtVuRXJzQNcxoKHJKrrbGx1AwdUFTDDvjjSkn112hTR1BcKuc7Vr",
  "key9": "2nZDCPhbARJbRH8M7d19uSUoJSWaQKQNLFRK6WLEKvvSALX6Y3FqNP91GxVKoMMmuXqndRA88WCHR1RbUHosBSsN",
  "key10": "3nyR8a8PLSapGULbvwEYAQEwFTGjQgoYpbzMvghNuCDm7Vc2UAiFQDDJDSMtxS2xqZrE1dyxbbhbJAFhQyKYQuHk",
  "key11": "5WNdBSvbP5Uv85sF3bBEUmm624uG9Cfkk8FoukA54KFNJ6agPoKrP2HU4PRMgeSUgBdpZHMgoRpo4oPgNimX1pw6",
  "key12": "25M5xP8hoKibmtpq6bp7ztJqiYhQs2DBuRez7MtULV7rqypES2YfyhSzkYJqzakv7p5u4whaqWraFSrR4ncWPcEZ",
  "key13": "3r1KJGa9aWyVMbn4Eu1Rpy2rYHwnRnBMvPNXfvfRiJEQUkKTgK3TvAZ2u7eQg1nzccYbXqBUg53sRWixKXSRt1nS",
  "key14": "5E8ZiNKVesH3FhWqWPvw2vR2D3NvWmc1pbU88RFrg4F6uvdETtnW8d64FzuqvAgBHUdmzpuFzQyfiqVcbi4XAUhC",
  "key15": "LZe8fkFE46k8TNB8RGMbbsKtZWb7pYPkmKo13FCABfnNajCtnY4teAf7QvKFrprAqA3cmFax4GQhEnD1iCmdfkf",
  "key16": "YAyeXzZjspuMqx3zg3o2BNNWA5LH47wuXjY6gvMj3MDfEmBcKisbmzcq422EHorJ4wwPWh23xa568VAmNoMpT4z",
  "key17": "3sRHPc7eR1HjZ78MAQJAhRo5muNEr16cTtDz3wQRvrYwMQVdwy8CwYtLAYymtqF6xkf6t96B7panQ21TsSTvRhWu",
  "key18": "5qFgEHTCpeb7zUuBLAeFKv35f3DVrZmzZ7VeQ5ezTS86GCcVGtbSPHHSeLEhevjKZZ31LCG7jD1BKgoaNVsiGGon",
  "key19": "rSMxKcuG5s3xHog7r3hHUbyjnNPqUQxkqpV13XLT59tZU2KKu7cpkVoUAy3mxmJudH6V8p2VCM6sWQpWw1R8p8F",
  "key20": "3w3t85AVQmZUxuaz42YV6nrjMGecSvHj5rksQjGAm8R8Rq3uHfio4ehdsgSWuX8jdnMm2HN7QQEeGYMoFpprB7M4",
  "key21": "aE3Qup6wWY8pnSmUkpxNLgumTnNNQxyH8UeNZW5P9682yTotb4cdxC1htLaJZSZkBsBL8fhFXePHfs7c6St9tic",
  "key22": "4c5HEHWnqbAkb4PnhWtjhpRMrR84grQoK8Hxsc9jmbqxtWPCE57VHXPtUic1QP9ryzhX9KkBrv6LApnjEtugkAP7",
  "key23": "7vnnthGD5dBc1ZrvUhy3h6N1SbcPk8oecDFK4i9WsmXGXB6Gwzn8byphdiZj1AeC7PFLkmcVeSnqVcUNsFsfa5d",
  "key24": "59GRN8W8DaXGAmyqbzRfRvm1BejsUptpgiaLfyL5kBdnUgdqHPoCiZS9PkSLmsVXrxw5c2fnS4wf68ZxmQB7fWV2",
  "key25": "3htbAcnEKU4PaA6tnNWzKdR27mUzNVywK7AqoVhJNvffutA6agd1vTwSsnq8F3qhSEiUNwHxxYHcUs5p6rXnSmBk",
  "key26": "5bG6yLVaaZsBhLeHNLhATzrgxEZ7MGTsw5aXJQjgkT9aQCwPYwKd6VivWbgHboYCroWKK1uydg3xGZeTvuy2J6Sc",
  "key27": "tpxkAXstUBX26AEboM8oqwt1w5SCegx3Ez9HXMDnejQEP7gn4ZMaXHJawiAvQYhncenfkMGcjjgHZSn3PuznTpx",
  "key28": "5aJ737aDjTkkq76i4r4fjbz39g4hDoNtFiXpP4oSvRivP8EQsTTkXTpo5r3BLrq1jRuvsT7EJgNBAVNZDfUbfmob",
  "key29": "3guR3ETVnrGNcC4nEgGBAMByEre15G7WeRqyXsZm5yKcLzp3b4bUDrVZZqsCBgS5sYNGqYHfFK7eJcADa1tyszDB",
  "key30": "M8xxNHNAHnRL47X3LLP3aaGPun46Uzyz9bUMwUk4AcC7mtCUMasyTKMaHHwpMBb4UBvRagkzM1HgxTmt4yZh75i",
  "key31": "2ApxathMtVSbtULPYGxuyg5Ko6jCFQabftebUJET2SrgqFvzHRVbALaQ1hXQ4SEXCRVXy9H9Nrm4gP8czzhwYC9B",
  "key32": "2s1zcMe8R6gApgS7KVkvJaarTddPMnn7PrMV38PH2p3zQGRuGmeWEmRQudAXAJ7anxgU7dXdHAAUrhktpCSaadNL",
  "key33": "4mmh7wVrD57cP2oEtA56QRtS26qM6epURqWUjTNT1RJe4pZhUq2bdNszSTrXiPncfCEynutsysnH7jeCHaBNCWF7",
  "key34": "SDiDu2P8iSL8poS7ar8MGGekGxyTQVeNiwTTYjQ5eJDdZZSUzg6uKToSzAyV4fKxv6U4732rQve1Zk66y8oJq59",
  "key35": "qMbyvCLMD2kB7fnx7Q7z5uzZnPohNqS9n97Qox5r2zFuVbjptbAotrgPx3MxoKFG6GbP9jZRuxzjgTwRhhiuXn8",
  "key36": "3J7Vbgfuc1TNgVqeAy6hr1RNT8STABtLiH4JdryuApqJ115beAmyucHJk3eAxt1rrtbtdP6HjTB3etqW4aJ2g1ij",
  "key37": "zXx5tT96kaGy2Q9XBNeo6JHsbG6wtqFZct4FTJLuvenC1yqMZobARChQcSDsfSr1u8RcUZgXFGaMAL2srN4nZ8R",
  "key38": "2SbFSEGX2bfsJDQ27dcrF3qRJAv8YmXqbXpQCFq4kqdNVi32LUCfZyZYKXNWc3NTmqqhZhx58uZRyroYYdQw8WcA",
  "key39": "37j2PUYha6D41eaJHpTPkLAXZEnuesYqDYthoFtKhSMYq7CoG5q7Rrw1VLDhZNCkNnNqAbsh8YqwSPzkW18LiZLY"
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
