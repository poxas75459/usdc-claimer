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
    "ykLQqVhGBpT3sdnvBcCrvaiCxMvXnY19ytbTpsMHyA39f2Utxj8nLQ8LLLPMcJHFstcydRq64XrBTK6fyBZHpAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQjRHZw76oiFe4Lf5GCwoF4gDsctG4j5nH3Btkb1iwAENcRnGed7R9sHiRLPAs4tty2YkHtaV6z9UKjycJmYCZV",
  "key1": "5YZ3Z67qXF4ZvYxJ24kBT5BzabKq5VJ2dMGocJ8z76xEB3LaekXNfjC6mG2Ge3xYF4Tzh9h7NedsuA7GKEtcJxLw",
  "key2": "5KjuP28n3RrLJh4q4tLCTBgUvZLfDRSsoRARsRG7amNZPP52twdcizKnpKpY2WJweEUkor9oQLzLzmnWsZZntwrs",
  "key3": "2ADB1oBnAaWjJdsweJob6H4e3K9BuUYxTGHXY5PHpacs6zhZ2j85ib37LHZdaU871UFqwednF12GNKMBV9t7EKZo",
  "key4": "54bn4F9TEViM8EyLrBy1aGSKCj63pEN34VZAfeqLrngXeWuBt31JeKbSyL7Cs1q1ZF1MY1BJk829CSghJThTRRzv",
  "key5": "5wCwghgnTVHhvyR2Ny1qGWEGVGFh9uSK1uaStsvVP1iV8yYsZQcPAfm91ZXJyc25sq83MSHWVDE7CJNVR5SBXkiA",
  "key6": "5rxAXU9JLAy8nwK8fWFZvvi2bzKMaRNXXRPF7TmJR5mJKpeAY3fmv9CrHxJBoKuWHT2kXphXipfJCumhNkZLTAhC",
  "key7": "K5JcMFp5P9vdpwafp9cKf2ZfGMntm8jcMhZAFUd3a8Q1Wk8d8PhMXmxg8GrSEjxUXhrGNQTBZ1ix18GZ3f5tHw8",
  "key8": "2WSuvGmVtKejV9e3BE98JChTrPB1ENt8NAMwqCPa6AQy3dg2xXK7yr13isXGrCz5ELQHhPp45n59qG1RnM8om7jV",
  "key9": "xTMZ8V3rRc8k3YCQwTg2jZoAHSWrU92tX7uQ34iNFFj1KWwfZwQnqRXfjA4aPWyXK3vkjbci6XKJmDvjEkqH1fg",
  "key10": "tJUTLqoqxRvbtiY55oLdiXjTFBMt9udo7RFKedApMJi6CLpJMn18f71QSf8Dk9dPPdj9xcNyoVbRAr7gmtGmWV1",
  "key11": "4Cy7XpPPetzVt79NbUf2cerici1PtT6Hp8i7wPYkQPNcEMQihQCQdm1zD3BvYAwQpjyXehqzhMh1TGrSgxkbWrvq",
  "key12": "673GaPUa6QbYG2v7gsHZTuaeA5FuqVgspX2eUc6pU6y6zUAnQLjxdjqSVCbrcNuwFtoYYRzcyDPyBZ2bepMQufxU",
  "key13": "4fBR7efDdGZHn91DWMRfSmHPSJURkKhARy7dfMdqSJLZZAUpuFgVVe2k2ytUcDMSg84FLPpWVxVPnSJZy14D6cXw",
  "key14": "4mBxiMzhiYzGhQGKrb4M38yNXcHnKb1P5KhEkKo4UV3CHP7infgSwF8fHUguFUkEZ2mzEVo9Rc1HUVaRteKA8rLg",
  "key15": "5PyjJgyXfRsjRsU2oNXhHcLkzgGmTyW35Xwfa4sfdeGYzSk9YJLCSdfVLnKZcf23gmxi8Nw8ZZFaWYjSAyb4dt4d",
  "key16": "28PCpstNFcBnZH4XdhGvkEPKA9vJrrqFD8AAvyLB6uBxvZHqV4nwNsngnEpfE5GFExvePk8xDHxUCSNCXuZhgnMy",
  "key17": "5ZbKMQrx2EaCRbbGLACVkDuQWwYX7uGgDnJpXEu5H67Ckm8VseTkQ3WgjS2WJkDnQYwNY5iCiNrz8EvNu7HjhCuX",
  "key18": "2ndtodHBHeQQiPo1fMoTcu3wwbGf5k325tnKu4xY9eJcj5ry6xmc9ZrTUuumjqfiBVM2haPw1MvcHb2ScNV4kBS2",
  "key19": "3qAFoeNMtBwLmouKY6iUVKrrW3geTwwzm1ogcahCBDue76FUbG68wy7TKzjcepoB7pTsHiie7Eg6sHXuTG7pLiQ8",
  "key20": "dRC17RTVThWE2iEUqfCrgx7C5WTP8GMBFP4aK1uFsWjyXV4cPAy1TeBnvevK5eQkzDzoAKW8vGkAuRPsP7p6QxM",
  "key21": "51VU8QGSiXfdYqTcxrUxvPmN2PNFpeBbJP1EWX78gscDvVpyBoNV3Niub9am3mxcPExoEGETYYdegWDKRNwpAxE8",
  "key22": "2GgRS6XJLVrjnK7bgX7xDPrPDqGEqdU5Ex2dgnPDN3jT7r1gkqrU8pPzyPBJ9S9kKL1qY9WTdSD3qMyXM1JYJ8Sd",
  "key23": "2ZNNymksFiBRqAfb2wKaDsGYGhLRzCf5neao7JrCoeixow6BbLR1xuAixKiDquTmBCcJ3cxTtGiKUtfjz1NkGcf7",
  "key24": "5tFT22fnVd2dV9yXFQKVw497MBhNhhNq76xKWxyMu53AivwCQ8TDoNQTf6JnpDUSwfVDw8o7Tm6Az6HzLhdA42sj",
  "key25": "4rKFqcnyaxL9UFFdXfH3NEgBKPEwrwQVChCRvkTwMtvD9ogCoy7Q5r451QapFzd9mspKRbyWMBDrPMtEK4C1py9s",
  "key26": "2vQaknwaDvLwGsXgvkSwS8CL6EQDxFzEQXiDr4NVAb2hFT3DuN8A7aTwernMQRfLQUCmwC5uxnKMeSxq5zBEKJcp",
  "key27": "4WAivKf6DsrpMkVo9aRy6gj3ABQWxYbVVbrMZSYn7G3UUfZMoEXhW1iAru2sAT3gWWcHM11rZ6FcdT1d6npbH3z1",
  "key28": "VspYuhVk67iXu1k91Z25X61qhoEBE3mUgzZ4cEcwuDXYxayXEZxjb3j2GH8tAvvfAG6wyhV3uTZemSBC5qDwrhu",
  "key29": "64BpCPG3GTFbW8HxBmNDobJdVcraUWJUk85oPtd7NC3mjkft7bkMivoNUvDbVzh6zZZyuzemvjePsBfGgVxPDtyf",
  "key30": "8UU3DP9W1qx8S9jfCg4zKWLjhpqU6x3vHs6SJfvF5Dib6QVnTKGDpNunnzou5GK9xCngzSvYvuZ9BdmaSYKxK4U"
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
