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
    "3amG3CPdUEtwmdTxBQhDcTNbCeLnUmKsy3FwTqyFFcCdgYLT2uMp9sB8ZJJSKCUbfa2sGw57NLEVbT3jYT2vsJrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHaok2NH9MUguasbRCjUbMP42ZdFZ6QNABFPBkpizdRdCAfTzL6k7WcPQYd2CskCQ21HRPWXYis4QvEhpwuwG4A",
  "key1": "aC9gRBRWk669TwydzMmgh36Pb5CcEVqHa3vCYCeLjaG9FQ1mK89cm1Kv9kyHoF58tvv3XWBuaiVSvWx9VvGeenN",
  "key2": "4UkLiaRu2vxN8pa2gtojwCqW9xNfnJevWytsHV2ngEgahY8fQeweZaorWeeUSTXzbJNXZ5nnryhwgyWjiq79ZHgY",
  "key3": "3oxU1PNZ6ny1UvKbEjrwF3xvixCm4FCRRzfh5mZYXifcD9WeXBa1pJge861ftKVxt7SqskRzBKs3nMtUwGTxCVXx",
  "key4": "3YvHvqayCehWxZ9fXh7VzTfJHbmP3L8Givu1ZvbGKGXZjrcxSoiLwTsyHsKuUspBK54N8PKJ2M7ibzVzcSr4v5Gn",
  "key5": "GSEr7KdZCyuSraWyADD4CwoVFfGhsX7ePBYWu8YtP4pJRe7D266FCMAHBb7r3fxbmtTb8BrRS4JCkWz6e1PQ5Ek",
  "key6": "5rVxpfV5tkCcMnqWZBaR7rAra5dMvkvCbUNX2SaHCMjznMn16kJ3ZNg97yDCf7T2t16FqxaQvgLzne1MtX9H9Bzv",
  "key7": "2V6Qg2nQJyKHjUVMmJLzRBuDq6zFCSfxh5enzbzTpPY5boyuFzTfqVRhAmZQaWRUWTmxBjYwn2sNPkCPnqpFN1pu",
  "key8": "2ehYv7nKDSqfXTcDA5jv3qf6VP5MsDRnXQMXo2CcUzQJjsi1YzQmmoL3fdhTu4XgHaLM6kE1B9jDecFsqCt2h2xX",
  "key9": "2p6RiN2vg3i1oZaQzXzsDojp3DZfeursiNgNiZU3ZosKD25m6mHRdD6FBy4Qv46uPGgXasKyihbpAcVHcAP7smR6",
  "key10": "3ZCvyqfPUHPaHmyFyWkZUXZPsRUhbYyGBUn7nTb8uh57ZrMsuQsM1UH3j7xSLwtAbYKYyiWqF8KCmdWdiAekyY8P",
  "key11": "4n4sTX2Nthin1F9t4R92yN3UqopkcVsimmN2DXEX77A3DEzQrPMzbGzjEzQ6xZSqzAtXYgEp3Ua4YdL38RbzEeZK",
  "key12": "3W1uLTU5yzfGWt7fcj4As9AcRVApAZv5MDhBuKMw6mXavfBb3kJW8frQS46EJ1y4R1JgJaNVKveB6AtJkMeU3a5c",
  "key13": "5kPLnMG7UxyrEhwcBAvQC5vfomA6pSpPcRVFeWFZCMkahuAcZrSPF6bohThHSwTTDzDH4S5n6pachBtgmamgvf5M",
  "key14": "3Rs9v7Tzji92XeZGu68KqY28vCiWcfuJ1H18xF7dFKmeuJeDrk81AM23FrFPtgt8uGhqQHd1WWzM31ekfqwQiSSR",
  "key15": "658vTzAta7MNVzkcs7dCoJ51b3AF6ywNPtF5xw1MZZfMYvweC99RpviYurdaenqfQsrzvqjHTWp6oJmuKS44BMYk",
  "key16": "55PxcudaWDcfrg6NLJAFV3HVbWSF1sVSE6jqr3UeBvxGDmWkK45CpbEG2AM3dFJ4cxdVCsB9L994Dk6JpWtWisZe",
  "key17": "25nJoSa4fwTwuTioSx99CT6Q3h2NKe2JUPsfJJMkQ4TPyBNCgNo3ZnpJu9xpXWQuT3B983pPiQpbwvQyBEqfh6gS",
  "key18": "jKFkEE598L8hfgdqQW3zkmVxCarzDN2EnGi5rCnABL8gN7zWWeyWXj5TmJbCVihJgYByTwDmVsjtuBUGAvpyicV",
  "key19": "57MfseikBPuTS4u3DdKaYnAdCU8oaLRyYF1quJHDWHdCoNAYEcGXaSy2f3Jg8aLg8BF6o8Jzw1Tv542ybe3D629s",
  "key20": "5sh8UoX9n6xb946qMXC4kcYo5ozryMcXr5FTtG9NoJsZDdXXpHBxbY7gCowMBwtDzWvgDe6nRHWuNaYHzPKDE4R5",
  "key21": "a5BUZce8vS4v6gv8vEzHCXucGmLnKs6zoC3Hpv8m5bPV46KvjUqTZXynrPDLDfxP6PSkd82zbMN8zrRwvTKQzcH",
  "key22": "3yriP1vJKSE4nT5dS3MwVJ9St8uoL84sCr5BRMaBZVTrJk2jHPy552pTvrVKtca8Y88tMFuuHugWTL8oSTRDEokh",
  "key23": "2fXj5b6TAapDetvJokrprqRemFu5Jiyr96RpZL9toY7EXVmwAZJXop2WDxt1x9aXQu4Bwf9UQiMduBaxFUeixRqA",
  "key24": "KKK85aVDVpVRFSmFyR4AqASzx7GvwbtwnyQZRn6Qyp2mW6RghdQ28tUTjzxmNPmmbGGN7esrx3ViheXLTmurY5F",
  "key25": "3KXGLsdcypytsDhc82MtgvCN3Ego5ZeGXc5SDxPWBSBuemSW8Qs6NuJ8NfHoDqHKjofHEbJVubhtN3Y65YRmqXH1",
  "key26": "4q5T7RZFfD6JFwxuLuDT9EU4NwFQGkAHfLVtsGBzcLGK9ZvM6jLfJEscH8Ras37DPh3A3Ntg2DzMEuHeJNjR7uji",
  "key27": "4nx8jpQ4qdSjC1WSfeRTewr2jfH1rN9ffwUqLYtWfkGruNPKMirtCeVz6yRHDGAid4GB2jHmMeiEmT25T9gZNhUx",
  "key28": "4PtyL46U5yx7NiU3BhV6JrrdLHBuCBTyZXX7YKLst7gTCNt7q1f2ngsv8v4HVGVKJvZgsmNrxnyqTf2UhqsjEjd1",
  "key29": "5xtxjsDpNysoNoz7idrfM6yZ16Ne4PskQxF5bs5VH88wnnPPnrdjTcbBBX18GfvVFVptzKvGkJ1iFsA3UdBStvjf",
  "key30": "29yRBh9rcXjGTvJM16eDnh6ViwASzd9nqVT2SQMT2rXsgjkadKQV67VpPJZ52Mnp7qLUbBJe8oojwXrYrNNZbVUd",
  "key31": "5C24zqS7tyGvothrQtKbYT69nPeh8uGnyWnigRmaPYJEYzB8VooYQDAUJodNGCqkz1i4pk5T3snhAFTMVE6LkAhG",
  "key32": "4AHJsa4CpR2nJEzKv5WF9Tr6VyVmyezEHtPwXftoZ7aHe5AanHU5V37FGqR95AtWkqPTkLVw3MKQ5j2QFqqayvfn",
  "key33": "tMLMMzjP7mUMPqMP5evJXC3W6THQXErN5p3eKqF6unqDzWM1MUS1DxNAfDAERG4VE2EqkTs8VsToigmuCyernsm",
  "key34": "mPqwBVCZaWpVA1GLXoBXK7m2oMVWkiBzC8HLpWRvFP6wTyC4796DqjprUtqZMtZ1Nnm12GYNwDfxmLmhU3MgCZd",
  "key35": "5GG75bWrX1g82rLDuHHvmRbxpttBvcUQmE6V7tYEDwedknHZAuP6QdCi2jquNv1y47vW9en7iRRs2737NwUaSRTN",
  "key36": "4WXtxmHDNXGtY2e5XaaW6Ta8CG4s7ri7GjA5QAnBUF3hcqVx1PESWNqFUsiZtVi7PPbvHZfFT5D5M4c72F32cwax",
  "key37": "3iWKht1CPTD5Q6PhRK3k8VefyPnugBpaDSwpgnSNBtFyuLZckv3Lgu3tm3mG9s9sRX4wXzJZdzNd9JPna6ufgJ6p",
  "key38": "5JNZi37i4pRL58uUnpTV9oCkRe5qxZuwPD5x8RaY7LMM9dMw42oBtrUFwCPJmLWf7ijRrFEkeN8a85qBWDTfK32j",
  "key39": "kqkh3gQVR8LA6TdtnVHZwSfMnhjNwjVJVy1sLmcofvXTHPQxLc9HLTAZMBUhZ8Hik5ji1w8Qs5Smedx94uJnPm1"
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
