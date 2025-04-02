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
    "2MrrBnUGiG9Hz7k4zPw9VswabF7qVRk8VhjzLtiSzDCgKJ3GC6Knnw22BtBBnidVwgXvL5qGpoNH1hvHdDuAD5bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXXfxp9x41agThcw64QtdzwcoLsn5J1hifpTm1k3CMn5KnsjgsBDX1m2S1tY7ZSCqj9FkuLi3Ly3uugWxZk2Nx6",
  "key1": "21gPxPCfPd3wZYiKnxUmHT13LTxCs7iZRgSm6abzLV9aB1SNBLTHSryRYM4rrKdRAB7VtZJuqkF1TeCh75QrXSuc",
  "key2": "5Bo1x1BfmQKxZJxZEtEnSppFabHheVjSNBUnHsySzt2AxJJkiU8Bi9kSQoDfUPg4gUJAYW7944T7T1KQ6r3v8WQ5",
  "key3": "JsCvk2EstSFzM5GFhDAm6Lm4LsSzRvHHY2CrU5oNCpuWjbAxeqZQ3A2kJm8cBaviKu8ign9VaxN7QRzEEcB8HyR",
  "key4": "3Z46uUPtDSToHKt81zFaGzX3TCc8iDY6c5MdGV8mYEtRmUomUH2TzarKhVdLU974cgTWZRRim5PdiMZE8Z92Mikm",
  "key5": "22v1kqUw7Ug8RaPqxq7ciXsfTixxQXxboEgjJP8Yv9gJ3QB8ZT5YPWtCCdX6fXjDYKQ4jgmAjA11MW9tLny3gjSb",
  "key6": "34V4yFMar89Ef9HmqXWswgSjHnM1moQYpXAFmPwsWpC37KHeRKcPnLBELdCWshUSgs7MErKnx7mUdpPdWJx1Lopc",
  "key7": "3hvbSEpN9B7VUP1RuAskDgkCn3vC2UFPeFUFhV8twFp9bBLVouhH5soVGDfu3YCXK98VqaPpE7g6gxN4y2nai1fG",
  "key8": "5Lz2Dim5LnVKgPPuo72Asu3eBkAipgbXVoijKQAYacHwRo5dbR8xf8QsH1Mc67GHYcoiHkAdVTLfPQJYezGwPWdS",
  "key9": "3Skfm5qxx5zkCJPNbTquBu98NbRVvANmb4vveLvP8jVdicxv1aidEe6yQHPmYAj5vYc2P58QAR92ckUnLprcxcKJ",
  "key10": "qpjifsZmqGZDbTpMAD9fCdkJuYR9ec9Y5L6iXeJowxLoLGiExeQSYVXoQFuVj7Z9ueMYnfRnhxXj15TtxS1vM3L",
  "key11": "3MPyXfET3hrWfCEnuZWU7biPQbYC6GCHuk9mHeu9TkYjBVQFTZbC3Bj9wcoG8bi6tE622f4LZ2kZVAFjBDcTAAJF",
  "key12": "4a9DiVcrP1vBHmy6yUdSprxR6aPh7hoMmFqxu3gjLMYWzf349WGHKGx295skvQ2b3FBBU6jBQAkf4dn9ZrBRtLad",
  "key13": "4qYCFFAaQtQW2S3RuxfSvXd36AH8dcy5MjJ6xdYrinVXANWVwjXHhmr89npqv9QN8R155kXbzNQnEYk6n7kNNnJ8",
  "key14": "3y7f8TiFe3istkYRLZv7bHu1j5g7gqkq1xXx2tbpgwQqnjTLVB971skobpmf82R6WgJWJ3VuBqrQ1yN5Ui96x4bW",
  "key15": "BwNRBhEaei1VzvoYamyFS7SRVcXELzXvceC8mjJZ231rLD7thxEffkuRD2Jmb9L6BGGduPdZhvHLoQ3ML9hEQJ7",
  "key16": "5tzjWuZV84NnYm5K7RmRMTzeMSo5Hb27DXLR8bBkVxXABpeCJY6xAVPxoKV4WjpDHvSrqXuPoqaYWiETaDz7dC3W",
  "key17": "3eSmRcfr5n2m1QrFiYuc2ob7VnzisX7F2r7NKNZ1QTs2KtCwYLYPa39XnSMuY9RCnG7mpzurXQ6EZc87hTb1Bjnp",
  "key18": "3d4rfwSgiuWfWfDoLCGyivcXxfS7jKgQeFsT2LH55gqQ56SK4u6gP5n7YnidTCpgdLhDer4zfVgiSU5NJftKbXUi",
  "key19": "2cio37b2bfXN1SRa2qGgLEWqDwibcjNuF2AEn8ZoufoPjfKuiuV1YEJxS9qTtPwUBwx2x67AWYUfTJZM8xciPEN3",
  "key20": "3aJjdQHqgaD99u5n7USaRrQJHjpwZuEnkbqB8zjh1CxWRXqQiTKV7Rbps5oYBF7A3GhMU7Gz4Konn1KvZAmKfWnZ",
  "key21": "3y92doY7EAYcFZEGrnyBYGFF1jjsePYLLpLsaMf9yaUrGf28zCgce3wu5D5joWkkC4eUQhwhR9qEovU9ZKcYQAnT",
  "key22": "62Wjq81GVdJrRKGUsN4MAcFfsh1XxdtcRNzfDR7E3Lkk2ZGWcFbqPg9idXqTPADByBf6embwmL18g7Tzzy1T7AUp",
  "key23": "2afPiyougAGYLKpMrAn71rhnogwcBcKkeKwZ3UKvTw4ZZGUNWPpvKfPKnfb8fso2qHgjfsxmM7NKjGYve92VfnHc",
  "key24": "2QTQbpxiJTY1Jc1JkNEv2PbBySPEojDnkBZq3iBexgGNGyb56wQyd3APpN7997txoderwfMTihuTyCkpb7aMsErr",
  "key25": "yxBdsKgFrRyNg2WtRYSHfm59xqPtFNwnhth15qP57NzWsgWfoz4j4Czh6GCPDuxZ5uVFgAWNdme5avnwfQGEctS",
  "key26": "3AsNrverQEm6pDEtqB4xbVQUYRQqVzDz8kvHy4mfiYMfeh7ko1bo9T2742eMRsKFoEA3MrQp7MsUoPRakhuCEwrZ",
  "key27": "3EjXK1UQYzoX8nsN5KV3NshQ688jn5sCqFedH3VXDTzUvb6XGRsqnPQpLbJmrutEFnAGyrvbfvsCLMEhoR9oUkZt",
  "key28": "3BeKt2D9E1mdSoJgj2ighWrhZXqD72LgBwE7m6BvmPawKyWW9yBKii6dV6Pmqoiz3fL6sKtvjEUpfftRrJB986XX"
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
