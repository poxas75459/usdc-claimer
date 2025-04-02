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
    "4hD2JHjGFqfkoxmKpVjaGV8wNz9qtGzSwffAUwhkZeR6nrNfgkiqq9V2XVGmqs3Nprq9qgRu4fChyvRqr2hqMAh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7C5cKu9197CdWRBgCrmD52GWJ6ypnEvt6DRHb5SssFAkXy1CXRZJQCucdChMDPpYMs9kkszaLYB7hG94x2VAs7",
  "key1": "dufgavHzGem8kRpWaW6my2hMbiCYw58a39CoWQEsysxfaWW7kRk68FKM3JVvYBM5ARSqobumGwsEp2A3fYsRqU3",
  "key2": "31QgW52fpUTehBuzdUbTTHWHQGWBVTzSGz6S7acikqP1zUpu6YapX6TCMLASvKZX4Q77RjTQ7hi2PsYzcy7HXVDZ",
  "key3": "4wBx4AFLqdiA9UY9ppwAkEXxCwEn1EoEN6yTN7EzLLucNMbYEEsHm6kWBo7NGz43t2QsZc88BXoCi25TZWzkovvK",
  "key4": "31AxtXBVnmAafRcbGgJoAydJGQqATh6qz6Kz2FGxn7aT5bvw9qwThM8B9YbSBkJM9cecJQ3deVfbiJJJ6maXtTGz",
  "key5": "2JrLWSeVM1LUVqajWVZzTQ1BJPfoCQWaEyo86w6sxVENCrgQ5hUXRr66zGLyuR2UpzfK3h1LXDgvRai7vS3uXZvq",
  "key6": "4wgwYHaXGvKtq5aKchqgVGE9Gu2Hd7jrRnQXVrpXjHQStHVddSAp9SnNMbXpktXQELM1eiiTEtnjcMzenpRfWfHp",
  "key7": "3mfrdZmEULcGCAC4oeTNVKC1jgXPgkLmgU5QtN9SDC847JGrvBMGD3cMomsjfXYcNaNuUfWJ3r4fSQhsT15ySj12",
  "key8": "2VJrVbggX29ofC8nrv2jhnNV7WwCRpnDh5yVrf7mnQcUaRbMXboSyoyCwDqeUheP57saxcpLJbAsdJbW28jxyn7t",
  "key9": "5EmPAZoAitHdMd9AYwkdDLYEgXjPJ2F9pRm3yKWCRQf67Rh846xBrQ1FujE9UmBrpB8grYo6KTiiU2nV9xHu4WDq",
  "key10": "8cT96Kw3JNGoSYsQ5NZ5cHFs9Q1jdNjUQRdZzpFkt94gCE9t2MssX1J5Ft8pZcBHuivGHqQCKBb4eXmCXMQ1xVW",
  "key11": "WG28wQuy8Kcxzff2c9csvmKJwXDEp13igX7vMC8BUf53MrxjSx23rgNeTJZVC6AtP8aLoEQ3pof9WkRmWw2GJoG",
  "key12": "3th756cGMmQvTf3qgWNt3MfmvDrwu7fHTm8QpK9GMgD9zJErTME13JJ3m8ev9nroiVBJigZ9vLNc8oZDeAGz6Ttw",
  "key13": "34dFPtPFG1hmsrR9hVvtn5QUjbfGUvn6LeqFwTCfd3v5XzN3UJSbYD7xFf9b9LgffME8yKyaA7uZ5q31L1BE6HJT",
  "key14": "HYYZ2AW7C1gKuk4dqNbJqc8mjBYfhQJbZg6TRiUo2teRx4whriJf3pVGycfYRMXgxauTv1AxdvxgVVeX4qc4C8w",
  "key15": "2GUaFC2Rr18Xday5nShzmzYMk3vmNf7qSE2VjqmxJgfSLVD5CRgUBNuxSYbMEXY8miDt7a6qXTvR3ZY7Aj1zJv31",
  "key16": "4dUU5VwC7vN7GdJzMVbaf2rCwRwF3mobja2bcjH9tYV9XwznpebCJPZEKCJBwJdvLupkHsFoTmn5C3hXXwwc37yH",
  "key17": "HvCpP9hcxMRkjQdhDEbV7VJ6WYrhAc6nAMNeoQh2M5pZwSDn7L8GVMTEfWvMqxB1BNyPZMwoq1u6kXmw9QMsAeb",
  "key18": "4pvgA31RDkUYCPmiSNboaERmRQCJx1ThwQEbafJM633guxXfSdZQfVbXqMBy6JcD9dpYAtkG7FwmgJCFTsAVL5CJ",
  "key19": "2RH9zxMgvSD1qyabHt2cwFUP43zMAs5idoPmsxMqrHJMdnvFcxMRtA3diZpaJUbC63QazR5eNdRN4KZPgVA9vHwJ",
  "key20": "339rDzSPKsdUPuCzZ7W35mveDBY5gEkkhshihr8cMDRUAGRmS6qXKU5ju6WyfwAsKFnZuctxaWdn8kQJXsckSyD9",
  "key21": "QuwtbLVLkqnebb8m1V1HMxSj7tUCk5uyYhLNfuyazxWFH1zr67f75gGMwABNipG77gi24qV3bPM968mxYWMEr5Z",
  "key22": "23r4ganxcC6nWEe5DNK41rovJgWYj5GqbeLEgGhNXrAXGBzNrNnTD9qdkxn29B2CG6p8N2DUENWav8wssJMfuWpG",
  "key23": "3tFqMuFHhxcSCJTimcorNLL4zBtWTvZ9PSkhYHXxtqJAdEgURPHWdCqXcw6aa22YVCbXFLLEGuEHYg8YGHef7MAF",
  "key24": "4x4WVJ6i4MrbcUgTUfMnJDetdLmCmxkEEBvPFvKPCsRYKPFpXtxS5axAevevvv27HUg4LmtJeqPSsPfPPYD9A46Q",
  "key25": "5q5G7ATVpwxWGpX8Zh7cNsYnixdjUgN64QG6XDZNzVgfFhUon6mSt9k2cxdVjnTnMyiRzjVjd6AVbGV3pkmvtsEk",
  "key26": "2ZeznHd67zoY1F3n2GoUwj2Y6SEbc1E1behef14RrGjxtwLLmhpBnmME9UrRtQpwYTC78spUFZc7y48CATxaGug8",
  "key27": "5a4MmrLNada4SYZLkJTYGuGywHwkEynmRECgt8en9Z6rbPXZQdDJR8becQYYNZpkQbRLtWaYT4f4u5fEcsUz8g3X",
  "key28": "4vUh8a1ysN64iGUUXwGycEErawixE5wtgmxoYBQjLfYGxCNRa8nprcJ6znE6VP9KjsPe5PhqGpc1kxBbAWMQu44u",
  "key29": "2GujDt9DR1CGPYSp2ogp1fFrepEhXrqm3BTs6WoLCcLPBcQJtPSLVJ7cUZMJ5fBwi4XoCD2DWjq9ME7aXUDpEVCr",
  "key30": "2ienq8GAb8rpDsof6kTeKtbjDwrHNDQyBJeu8SzNzCNQekTEU4FFz5aqEQAE7TuMvTsa3ak4K7BDYVGQ2BnMzB2x",
  "key31": "2sTkGAXgCC9WNwsAAdZrPYsevkKR8WNqcsWJFgBzrxs2VmmFcYTYq12R1UpLUVaskQJUEGCEEckFP3CLwvNQJoHJ",
  "key32": "3P23rT3WR4ijrAuV7dCCrhjTwjMZC345eugvPLRqcS4kjepX9qJQF6yTXN78UmLHmoxfAG4LHryWyYKqhRxMcACh",
  "key33": "2yLui41eqARv1ADjazdGxNiA2xggT3CZRUGevEsbM5DqGJsmsfwPV6w9hnBVqNhQAkLWH7sBZHmbSjh5TiPg8jnM",
  "key34": "3jekW9NYgpe4YFaeABCHXpXrcQABCxp9cWMpDHyfU27YVM66gWSeYnaU9k8iNet6Jtd3yDBBk9FnWonDHk3zcPR3",
  "key35": "5d573vVavTmf1PeB6kDxaAY863uSEZumi6tF5cAsD4Yxr1vQSG8guDgX2jJVBYWaiB7SzvidvgvDNf7N4Guuby4P",
  "key36": "F6nfDuVcDY6JPGDM1HXrSd3s6MJ6LB5z3b6VTpnEt2oYW7ZJkqwLwDFPPSk9Xj2VqB4uM7JE4tnKZLWA74fUjTA",
  "key37": "5jcV7FijsZiuT2WYDCn8D8f98fWNNyKWmQX9P8FiNTbYtZtnQ8YPGZFCbz6nkM6KqYzQD5knPftzoV1ysX9rTLcG",
  "key38": "5YzGggBeFHCLkbA6X4WsjaAT3y1gk8RFbF5JSBmn2nXmffAFnyNxhpN4ng819oZ9bPLLttuS8NQYdCedaKFGmTTg",
  "key39": "4F1atsC2KuaFmi8miRG5C4iYjHMFbNW3RejTdLcp9bwTahGQbfDDX64M3jHSAhKW37JD1iMb6ub5m934yKLCkmHv",
  "key40": "Ss8mH8gsWNdLoMSfjDLD9ymwBtuSpNt5Gcgtpy5Kf96qF5B38Nq976FTSu3VseBAaEq9G7hM8W47pQjcGJNUsva",
  "key41": "4mcAG1xmP8UGGxMi5huME9BfDC57w1WT8MEpbvXDQgFiUthfjP87FZSpEEX85dT1U4FUQaHUz6f98Zvz7CLQEmo3",
  "key42": "3gBRWMw2kqoMesWhSJWf2WVCYo3zShSy42CwC9y6h9SVqNJM42QbE8xQG8S8VEwTe77GXbtmmyg87a7ZeiWfX5YH",
  "key43": "zpYNq3ovVBgtpCePUK8aoKdY6z1zg3T1621RsMjbVDrg6r5mUtZud72B8BueGyPMueD9B6vBoYKUksBbx4vvx9Y",
  "key44": "4YYrYSJ7i6exTGxf7D7ZXvq2A445jPG6nBetgsrTdF6fPoe76dmhBKZsNX1URR2dApTgHvBamkWr1tGgCTC7XKCm"
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
