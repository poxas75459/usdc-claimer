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
    "5fPz2iaE3Ct99T37g3BzDji77p6aySzPUBCRz2Wypi37xDgR48eLfPFzBz7fUQD4sKyuCxVPhmhsQRbSh5qGXoC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTm7hqo1Ngfd7HPBMsZMmwCdBqJbgyiQFD71kGdpzumx285XE4vfp3AzWr5foZ2ZqNiqXVDe7i97saPirNbxQLJ",
  "key1": "nadmYPzuogKmioCU3ju7ByrJGpFf2c6f52iJBi6rFgFQn7fYAB1wsrb9edTDQrJhQzBGEjseTSdcaeXwo5rSqxY",
  "key2": "5Xps8Ci7g6RVjzRSCdeguLt5BAs7RtVt2Eio23Ei1jfqMCP6NTF8wJm5rnKyKVhsPKeM1KwU5qXjrVEDYBWGyhEL",
  "key3": "4NFD8cGGQyYrN4efwgH7CLZd4esnPE3Fu4gbSNsVUg6sBqRy1ezeo4E1gEcPz5gRwNEnVHjQXp5kodUr3oXLMD8A",
  "key4": "4H1dcRwz8Jaj564g2AU7GSwYJH1XrqogVBueUCjXsJE23yC8MdoQ3UxoHskQb7dF95EpqFawHFGFDmwyokeeuWFZ",
  "key5": "3J62kCzPdgEdYjXdwd1PTR5XdVJCd9K8K8EtCcVEMgjqYuH4xBs4WkaXMUvcPQpdiKmG8shWSmiGgndAHJvPW8AX",
  "key6": "2QoS8AcRXcdGeajBs6ghN2ztKBhKCmVsVHVMfNY4a9wo7neSVDoCL5yEPb8wZkhY6qc1Q6axVBvYiuDXSv7JQSZt",
  "key7": "5Ues5ondrVSren6SReVTnjwNMYzaiKgetCzaCobsKZj37YKQtw4Q4HXs4DkveRJARR9BU5ASDjuFjfjQCpW92d1h",
  "key8": "mzLeSeovsvoQj6kB55PJrPp3yuk5d67tTgRidxYNFxo2D2u7YrbXYvkPAm3wfM8R1zRZXHsZMAbLZDPRfGwYmjQ",
  "key9": "i96oHzL8uDDcJnQtiFc81X15qDo9RfZ73ZhBCbCw92SgF1aERoMBanip6ZYt57sHtfZ2a15CUuGAkEEnHR68GaN",
  "key10": "4RwdZRz7f6mcgC6XjwxrwEjviyMYQojCwhuxZ2Ng6nJNnmUZu1yCr6RaZgyJyuMwbpHTbVvXN14c6tVJM3dENe5c",
  "key11": "3ioQmTfghqRwVWHr7dRKpTLiWWsQ23eWhqCRqiqEzWunojUhdVbdCekM87TCkvpmEqjZhgM6nTFr632izhdLQm6B",
  "key12": "QAgVAKtaZuW2RGwrrLJiTpTP9hVbQQhaSwDcque9i8gTb2Z1fQMUZ6jrDm7GUZ1oByF31ZSjr2D5irnx1Afkz7j",
  "key13": "46GwgUgGxwg67EeQG9FUwyUxcYLhWCno51hDt6ZDTrBJXL9uPBtVayEQ37Ye8eQbP7Wn9Th2XvfFcgr1XeaezpUD",
  "key14": "2Zz4Ur6tZEo83suZAzY4fcJqyUgg3ugphUmhhWZnYpaSLtpBTbroehgqHmZEV84poHDjofbD3CSkgXPi6FEXtQAB",
  "key15": "5puNic3qz3J79jgcbyUFava2HQxESQBBPyHS5hbX7Jgy7AHuT1jfizv3SqaATjbKp8jVLM8RuLydmcMFk9ULDcVw",
  "key16": "4xaLU2F4j4vk1RuA2YGs4suac4NySFatRAVBfa2cm4g6B9GrmKWuS4qMqxWGspUWGrx48aJPFZBG3L4vVL4WgSHv",
  "key17": "4iZ3FRaqewDwYw3StDVSBYSZevF5HSM7vw9kmWDKgshvagpizkuBNzHhPkBFMzR4C17u5jtkBMqvGNTX7f5sLuz3",
  "key18": "4QUubFzXHpHJ1fmod6UiZmUuLqk6tYdz5ngQDefgKn6m9XccyxBDFZ3Dxgv3Pipjb6ivkGzRkG1LmF6GF3nwGQn9",
  "key19": "NSHgvdaKnTLVfYt6TawzpvuBBLPUH2bjLZJsqjcZFhnGNFW1HXFRrBioFd12qYm8zQ2yTkcxDyB1MjHTMvhDerE",
  "key20": "QSYZY3YnG9QYUoNk9AwxDKqynDBwDK2dZtkDxXaqGhAMF1zHHojg9QxgG6eF2V1CzNn3w52Jx7SZz7LNbe3VvMU",
  "key21": "4VryTvE2v4WrS5AGdGTaJZEbzfGsbbuem9Lc32FnFC2uY9YsHgT28cC9Q67Yw9ynrp4aVctmdQXavh63hE4aQYPw",
  "key22": "2JMxYQTTb5qBxRB6DPLFDU3xXLNFuguyFZwXbHC6Rwa8oASksuV1mry91wB8VGrpAutcKvsE1a5eQuShkTWTL4jc",
  "key23": "3nZkDUg1QQ9FiGEsCr2aHDZAicXg9LLc69jbe9ih4bH8F12DyZWmWdustz8mfRPVGLJvZA75Jtd33VXbG9zTrHN6",
  "key24": "42sMy9vmGvfcarpmbCcivi1KCzgPri3ipF8J3LKndX8B5bwNonsmoKdc5n3KTLNhfFnWdCWBGqS8h35TYEEnCzHe",
  "key25": "ijRKExPusxJ4qAP6gCNGsTJB6g4X1jiSPFAtmeai6t5CrmwTALFueyJcpQ7SZLssT5ru8XT65V68fPcV5PiFqRH",
  "key26": "2dZoixTwgd79BdhBjhw5P9kxVtxnEW1oQSV1ZV4yNMYiw7pEDzVuMW6TV8WUq5g65o42SEY9jTXs4JokkaU5yzg3",
  "key27": "5gdcHkF7Y5D7Jgj3PzB3G5egwvSecLZzxkq3o13ijCLbUiVkQBdAmqGdjbr95xT3tVsqbs4L92baBAXFiKycv4QK",
  "key28": "sRo1fxuevgk9XrZMeZ7icVo97WJvDrmyCqrgqGy8fBv5UUP2Ptv1X2LkdHMVsVXBzvs1ztT9fKohVadgcvvpEHW",
  "key29": "QkW2yEwRucCRjAYA39hh2is2YAswd6cvWcEf71EUaLwXUBYQZX2TWfRVTPcZbLmRFFhsLERDXupUuBHP3wBeqyZ",
  "key30": "2mJctdpjdsF5AnmAovymoDk1xwmQ8us32czvuwSq1osSXmkt4daPoKtQKx6TCMbpFB8R2KmMB6xKPjpUwiD8pK4u",
  "key31": "63RsVgHXuXYt86zHKRSuQtFqG3DbC3qWXR13F59dLvnCUb9tcZvi7KukGcqJDZY3BpJ4siu3J6ZnnFkVrtS1pfjd",
  "key32": "3m32SdnKnWFcQHU14CE94dFUWuKmtitdkQavyfg4HEsgq1veNFwg5r2zD7oTi8gNXnY8i9Nuz3mGwME3oXFNEQvj",
  "key33": "2hyB1DVNWRG5q9B3wr23iLkRd1jTW1gQyax89AF5pUtaGT53BqKo2x9qz8SjhhTfc2wD1aJ3APbwbozThgcpJpn6",
  "key34": "5LMAdxWPKa25w6ePndR8FwhhfmVkHzHUWgZr1Kn2yVjW95Ko811GDYzVuQ9dAmwrXFMasf3P6JxvtQMMkXxJBx6r",
  "key35": "4wJx3EjxsM9XXMoE2ua17Xy54kjacDMv5sfHiZYu8xXbMBdeumELXQBJ6wGTP6xF9iFthTVdj4XmiJxErQqfeXqA",
  "key36": "5CrapV2NVB8Vi8A5xA6pHyT7fnfkcWZrUJPnrEYmy58MJ6iKXU13jkKg1xFCMxBnmJqyeeBiryVGsTuZu1dPUYXN",
  "key37": "33J7spJUYqRTjqjsMTFbwB7SswmYNnRYdkLHFYZpStz4ZxUmjgxqA8fNPEeoYL1Ry49xwpRJVtNWCNwugnMWGyuG",
  "key38": "QpQwzxkuUN62ztSth5UE6Uxwijzr3CoHD1chGPApECL9XjhXj7B99fYSN9UNMgrk92HDGkyCcDm3VyWchbGnmuc",
  "key39": "2GmdtZyuHDLcCXDnwmoCrPkfLeq9zr2RQqE8PVPaLYcYMYaRs1tkYk5ZoqU2cck8R9wCQUfVUnZfrZMwxYuz3sky"
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
