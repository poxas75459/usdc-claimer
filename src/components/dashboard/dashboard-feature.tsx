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
    "47jdBYQKGZFnew4NBvXs876kvbmVCWs8Q1uC47Zq7ABn3QMwWfu9B5aXoMBjeC7fKCwqF1fRNnBekmxSGPEekzrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiAaqtf9YxiRywfAMcqs32CG1a17FDwFr38LBg1QuEjxMjubWMSRPF2ikpFQHeJnNKrvjwVKJRAWaQz3VBqfgSX",
  "key1": "2LRXCNGbd6XD2MgQDir1UkazGC6154kZWvq8tfkPcNFdoyyyYkeWTCUjy9BrM9EmURqefPu8fsbScfznF2zTsepv",
  "key2": "5TwhAABzzCKyeL4ooWogqy7ZiVYB1JdndqzsxXFDXVtksyNjUE8huZwZyLUVmU7JEpyS7YLoFCZgsgLgPvmzzEJe",
  "key3": "2Z5sey4Haa6V8cd6cudG2vphsP5MJ65Rg2RYasYRLrgKdfiAmNiHRNpRDxVLkLH1dmAa1TNRn78BLBHTNCyfpSCh",
  "key4": "2xxwFCgEzcRDGD1YJe59gpbCYaULr1uFwsaLXcy8eCNG9yLBRuTsmqiVKiADaDJiXYKpBApZJfM9tLvFaqW5jFBM",
  "key5": "2xmr8JJDh6BXwrGXZMuRV1KHQzCpWQshEBtH9bmThpKpJuZj62gwR5LAQyQ8NJGXWKEeTZJXbSGzrvwVKvFcv6qb",
  "key6": "jSn2eTV2xHkWjywMU1AuEeWsFxQBUap1QTsDnipjf2D2ZRCmWyXJDW5uGiFLwisNbxWRFRW74qaVWTUNaNsNGPE",
  "key7": "42ZyG8FhRXQz6kszFsQGMtRHpiQbq624kaVTV1qBkYPufgxso5uW9rdPETgXobBbuKqNuJajus6rDaVwm9tEkvqg",
  "key8": "2Yrk9j11ZtTfxUsEGmpnCcSyC7BjQ5vvvNq7EPfXJGkAqBMumqw125cG4yqRLaTgnC6ScfWyacyxo3j69a4X4sPs",
  "key9": "2g2ujFgATi6BhiAMSjP2KRcT8HzbeYkKCsQdBh3Ny5ieEFH3AhvJ89QUqn4J6GZWEYcEypJd2bpMTKwzEBmS1LgZ",
  "key10": "2fkDqCJTHVNb5QQLSMehh9g546RFZwdEANEFCLpPnAt9V81oMWxECXSJmnHDqttaaYuPdBgUiUtGJUXACWGX64mD",
  "key11": "5dCMPtjY3614Snbt8R6YngqK3jfAc2bX7RBTWKtJNv8S8mxYPoN9PsinzypFV9qcfXSj7M7iQFkCr1hAhjdqJ5YL",
  "key12": "qgaPRD6U2XYiLAs3KQLxAAjAqpEU1Yp5sNEftmF4Jjkp4AytHQbBr6UodScTcyEqM2y7pyiVNihcJUSrywNPTXH",
  "key13": "3qt1dHXhtQBkjHqpZxRnZsWZUhujpBGs4BnkS8Qn6Q7BiaSitmvLaJae1nyjmoEDat3j91QjAnZ4nayeTGhETZwt",
  "key14": "3RpdJgsvfiSWg73QpgPTDvSk1HSN9CtP6udqdh83pMgbbT7f3y6LrvCjBo9VRoXXKt9x2zA231doQjeC9biuuHnt",
  "key15": "3RvTf9aj4EZrefmqix8e69w7pUKE4srRwevhbwu42W1pQLHjMKPGbNQUQ3WTYpdFRS9fRbXhXAS55VswZgZwajfK",
  "key16": "2jT4KwppakcVZNrTT1vcVrTv14T2KbRXs5rnLhxMg9AgFi2sSGgBaHGyoRC2XHfkGDy9xqCby1eDfGL7dJPN4aTR",
  "key17": "5WMW3P4JguHVTT11poWJWx6zBAkDiogQMCDTDtPw7gWS7DotZjUTzQT4UFRtGi9qs13fiNdmJAsd6n5533HAjj63",
  "key18": "4QMYjAbZugN5u69mC7HuHwKF3d9DT4MjVKpE4YRAd918fKiTFgTy4AzwKVBH9PvNYsSqXyfjSNcoMAFfHMNoXtUd",
  "key19": "4nEi3Q3sy9mYLGPsspUAmLuLyRDStD8SkxkTCszSz7aaJSJpr7UmmPzxUc32LBu15xxToovKTvWWdJMp7EcJ6Uu1",
  "key20": "EShjnxpyy2n3ghie1E5Q1iPkhKaarvmSi4EnUNjmW1P1fBfT8siSsBn3rYo9Kt8g5THfAPF4rp1KGdrqPUhWF5D",
  "key21": "3UvDfQrzRBC2fNCEnehg4mujoPK2qr9UYGRPpvfH7dVhGdbscokymrbbcwNurfnerUGXBgCwhHz9APRu72HPdWzH",
  "key22": "37fZZewRYhUgEHaGLEvNPcgZej1gFWQYBpCJc6qcikQN9iuLhqH8jRLKs6jWviafRNkHfaEqe3QRR1Rcfibeevsc",
  "key23": "4dCcMSRzYHKboE8HShH2DSk23iRcogaB6LrfC41uTrY5cswz4VpcA8fJNMtXePcGv7hK931Ab4WkiBR3R9ewYAqC",
  "key24": "2nF7nH7eAmpXRm8n6mPyPAnUE5xKQpYWAwVyxZAwYVjSURH1SzP5ogJJBdCf7RRBBCjhbfVTregc9fb6sCWn3ZTR",
  "key25": "2yRoMzQib6XyPKTzoBgsm5h3diZ2YH8nxtnoMoakjnoSWJNP8gjwrRBXDHX3A9ANcjnaNVa4pA2Py19cJeCAQCJ9"
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
