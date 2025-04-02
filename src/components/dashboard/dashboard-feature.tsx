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
    "4JAP5Tc6afggE1hggT8Qu2DMkg7AhYHpSA5sXA7qmVaogFrWNu4b2F7ecaTSbVUDtU8jev4FfDjYDPiw8y7U1qaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZX4Fsytw3rFmUTtRByntRQM5LyWtL9LuxE4GByDhqpzA7JF3Hk57ys9bjgX6Gkmy8QZDnkVsxeRUJn8734KooVX",
  "key1": "4m2XurhWBJTwAJZNmrTsULb3sUQZJJrVgETKcBb73Q5L9bvsYipPtdDAGsrDbEpbVTncTJpECTVPhqVPmPdgfcQV",
  "key2": "2nL6JoFmtXFoq9T7y9rzvoWBEdBANs91UeppzJkBNUn4qyjqUAaPvPUH8KYd8hwd6sdXw9vxpPoW9MWfAVvemwWy",
  "key3": "4hKGH3ufAdBNARVqt1XNDa3MVqPRwCDVjLJv3Ar6WCBT3m6E5nVGc2Tu6TzcTwBkd3n1JFesF8zuLhvq7HwqFNhL",
  "key4": "4cyCd9qe1M51D884qhni4z7y1ySTsZKfKp9KTqhT6hhpuFsYACojYVe21NsaG8c68gzhoWSXrPw4BWP8eGZpkxoH",
  "key5": "2KkerJPrpscQZWsPZYpBb2j7Uys8wwM22mjxMg8TFhPZDFb4GT4Crs6dVnwUSh2FteRuvyHRx843EcXLG2GD97Zb",
  "key6": "4zzoHpuKB89mwHRGsyGmFBqaGg7vdBAiTBVgWapSJHsxNN5oBCi88qmJvaymVbc3NjyvZs4tDRrhNePEdpNBP3ef",
  "key7": "5bA15pK3K2zJo4UtRP8mq5vAiuDa1f28HcssgpLVkUUPaAtjf7NTR3m37pENQWzDZ9aXjDgy9EcjHHuMCoj5c8ih",
  "key8": "saQriDPpokxAADfbLPi6MTPhDqD7rVUqALUVjueWDQ3biFW349SbxHvrtccRGeMLTKbLNjSAsuLe6D2DyBUUgSd",
  "key9": "dZZrZFBzqUr1S5upriwwSbSqFvgWLdQxFhfBmSUyaTNJwFYE59PPvLfvNYkMnw98yyCijwhhXsjRZxZgLczx5tB",
  "key10": "2DEnK731hmNGsdTkBbQJx8jFnLagEjpns1TVMBqSTtieCdVuwgwmcWtwKgFjUpnYUEiRg46AfqEFPeuu5BwM3ShB",
  "key11": "HwJDEGiQ2NpVhx1HYJtAiEoTdtepideGa5HsSnADDdhJGqMFDSzT4XA1Zs3rW63o1fgcbHbcC9nmKnPFSMecozQ",
  "key12": "J8SNVjNFD3C3xs4znAeEuAWsV1sUi3b6C6vLDrNK7pLHdCR1y9Rvx7BW8TBCjSUJmfuqdyoDb5QPuYNZFWQyT58",
  "key13": "4u8gKZhn9bx6w9eEqkGeMaKEDJaox2AeyveZiXhzSks577mQoPD2d5dNtS9qHP8umhQARgCtrwjtLq9QNJa9tVnc",
  "key14": "4QYd54q7zjZMCtL4dnVfhSKCzKnpPhyAwNA3SQQArSDaDJgYnsDy9G1TsJJDcpSVriFwhdbtnxn6q25HjaRnA6aP",
  "key15": "sFxY5TnYTMdATGwZM1inhaANtrTL1m2cCrRC7nodEb25H69KhfwYebGTV85LbDzXE4nkWHspr4gFcnBNSiwLrJ2",
  "key16": "4UvoQMrTUoCXtDgDGk2hMVP8Nd8aMppqGftRo4n6FK353r72cM4gTi4VPWjLEdmxW1XY5vQzL1BtivYeCGJqaUw1",
  "key17": "5XDj8sGS4xAAU83MmVCoJHeBdv3b7XV6cDjGWozmhr5BGNJPc4VMr9Hh7TA65qAmH1fi6aKVvWgxjPpdQfD4sTmD",
  "key18": "3bbj9KB4JR4CxJvAygrC6ddEjPSmfptSVKMjqvQ45KTebkrrJATNsJtxPE8ZcKbyReTsFrKEbvrJQx5LSWb9piZ5",
  "key19": "yAFq29LKzVGohc5tCyAfJ1VnRpc7sS1hDfhCucvvk6ygDynYTsF6rxxiG9JGhkwFTwoDwodP37GoF2UA6hKYCac",
  "key20": "4mqHYiFu3655b2ASbB4SZEkCBtWGjgjbPsUSvZqS7ixEpgqmsGxHhFYUgQpUhPfcJD1mcpxwZforzRj2Uf2B79Y4",
  "key21": "4jkg31tJQrxjdAXXJb1jQt2sn58mXBbgQPvtGHjFq2NPM1rDJPkfK6hw9e1PDHAHoY2S2o8hpPQTzzQMcNwJo8mt",
  "key22": "5ZHuuzV93uLdL3dFaqp39RMDk8NLqxL5dWuFpmzakvQSsTvQa8yndSaK2QDyikpaNEvebLgpVoNo9UPjNS6J6E7L",
  "key23": "2me2K5EqzuqfZeRH8NmugyqKWicDFWKrUemiwnwsxdpCAUiWuteyPaHwheWSdGDvFTynoNjX4ohRTufC2zg4Xjcy",
  "key24": "54DNYTCDP8PqVKM8XQNu6WdezYrninSZbRpyyq25eQ4SXCHDT742hTrHEEbR3dbWa1hEy5FVNzmwbyVu1DgFPCd5",
  "key25": "4kDxWVDdCr45U4CbPAEGSyZN7BaanELJ7af2KvEeKNgFhdaaDrjYTgd6HuzpnKRsQxtLUAnhp64FmhY4yyeXYdnb",
  "key26": "3JgQkLGsFqxRUL2tPAVizvwe2SDPqrVFmxmM4HDEueuCuRYSL1Vm15neSqKSfht81xRwAjsWzT4xyZ4V6ZVy4mxL",
  "key27": "5QuSyzkNSLKXn6aDxCHAR4YZQ2TDbu5RPUGnxu679WaBEsqfp5yMRt5WuKPj3NmVgEN9nT4qD1XPkTsax8zRxQmc",
  "key28": "wFdRdXm76NvXEG3Kc21rxX9LaVLYhHCvcsBBCV9Ng9PRiwHdR3ydB9hBz2LBZwAwU4c8ZDc9pzBkw6ywbJBzgub",
  "key29": "gfFVjLErDjLuSbGGK37MQGFPV4V4udcfn4qj4cis5xTqRJTBWfYyjpYKYqvxJCiWoC6mXotLxBPHvkLVwFFztxx",
  "key30": "5fB5Y7kKzHRc1QYKhPF3Df5yL8CESDJpwrTrcE5zwraTRR4EsGAtpZTixozdkNP7AcsUYdTxhdXEC7HtRJ33dog3",
  "key31": "WjLTpUk2514SkdAjstQ7t9red2Une9Hp9fYsHHcYiwC8nJCEuu4Q7NGkRkFcG7KFBS89QGkP4J8AkDLKQDSqR96",
  "key32": "49GwR3gsSavKWj88QZDyVTxT6hmy5BSnhuf4R7rKDfEDDhwJ5Dn8Vw4JyoCrsAqCvDaeHCfsaK9Bu1UaWZ3YLLKG",
  "key33": "2MfSU4ejnYYimRJX33VVhfNtQthH2wcaDs1Gj2qFyZM8q3rLm1GyY2qCJnmnyD6G7LPr7gKnUNhZ1SbfKmEhwffR",
  "key34": "2PTwNssYpR4pcmMuPPHM44HUK8FG2FfEaAV9dfGx4YkQsULtxekVEb53B4xkSiqhZusSJQH88LzPCkNnGHBhaQgq"
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
