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
    "3i1SMkRqobVvExRK3Xt6KWHGtE332BnHVA1oft1e5oLiDQoU5kz7PsYSt7w9KCzuoUntxX6coUvMe2iW6LU3d19X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38yvR6CG2qMPNKJZaqzM1ywpQUXufXW6DNCms9eSFwHHJX2oTL5WvxjyJgxmwXi1u3UL4zfkeXeVdndHBBUddFan",
  "key1": "55t7PbZiSVbkaUGWnEhsaUBbVCd9uB5sVNuBEKSpBteYALveRDDisyrmCJ1u5ARNXdE27KkQmKtjtDSSsysg5F9J",
  "key2": "3VnKcs5fXhXneZs6puNm95WCqzda2hDTJ91GLLopJ8gGYChgyanEfMkUvh2WErkbdSaDPVBkHVvbkG3reE3L1kmC",
  "key3": "3ukH7KGv6wisGj8GPDDbmMPEqphtsd4x7DtATRSUs7ZmPQyjXPiNbiyvz1XnTWCoLJWKRwWQ1YuvXtjBLwDJbvqm",
  "key4": "2NpaoC4UCDh93xtxxLupnBaumjxpHvWmsQwKp7MRiYxvWJ9ZJAmbJUfhYyDbGyEKBPMV5gb2k4dzBYJ8x3VRhwqN",
  "key5": "6i1nxv5iPxpv7s9Xqzg9VmSqKNGigPEYEW6S1envscrWsRpA2NdtgmnJKjL1j2u8L2DzbXbVWvnCZLcnKv3Xh5q",
  "key6": "5hAqpNQ4T2NrzxEnuGuQSWNmvFw5cHy8shWnFVz31dvS1LwU23Dt8YfJfadWcgyQHPu7CDTqPK2CPzitDNMwBpK4",
  "key7": "3rEYnTAwMfcxE5FkP84pbFfeoJ9h8U1h3XYrdetC1KAaTF7CWxmqHxoaFYnjeQAFaEmjwumhLvHhdVVvyBoX9Skw",
  "key8": "53ckb6FKNJs9RMyQF1FAFFc4S3knjZm7xnHyQon2QEiv9RkBVM8sgCbTWAvkKhuj4BT3KW4ngtwn1xY1PMw47v4d",
  "key9": "3eeADdU8mpFdmzykbYKExtNyCmXfJ9NvbXqZCSiruugwoBKPSBdW2K8kEx8K8Hh3xgYn8xt9ZUsSBLATqWVBumWW",
  "key10": "4CojHiG8NU8Jw8XbEHXaq12WLpoi9VJ6ccmJ5Ww11SoLt8zxpL3gUAYkFemNJu5VJh4SSdkVwv3zke5WjXD6FGo2",
  "key11": "CceNLcEiZQvkfnxtdYACMQ82ZTPQJZKzpqsGQsGdLEKDP6jf8ykTuCs1eRwLRUBCfDbQQEe5LzUFqaAnUjNKRRX",
  "key12": "2xgf3vRYiVXpeXtVtsQyGF5iAnJETsh2uwwdW1V6HQT1Ca8kLo42C8yemMwMFWge624tzbEEysnaS2mhXSKTS7P3",
  "key13": "RR5sJDicur5hCN9RVEmWMqbKcTKk2pjizhBM3XAjQ1UPHm8ekFc2sq5hpAFT5bZeMJ1PTJmEPcshjWhE4zqgF4Z",
  "key14": "47T3AX8mtzZyXfbmUwc5RGDPuYp2a5VnF43zyX2LjyxAacwNTB9LAXS6CsR8Ca3LsacYavrMHfRwEDhvhaFfLASw",
  "key15": "65gLpqYtNufmGTdhZQACwmbZ6KA7tZPfRi5Q4zeaYHSxp9t7jE4QQDY4YMw2x8LNFDr89dqbhJib6rw9X9QKXZGD",
  "key16": "51nFYq8WqSYb7RkfRSD94xqHSqkTKXWKThDTUeJ4hJh8cTmUZVqRAw3n4AzumEdGxDP7DDPbGAt1L9iBAeTWMuLK",
  "key17": "43BDAoLKYaDXuZLUVtWdE28aozR689cXSmdVJWi5GNAFGocQ2592jo4LfmhJ8KMqRrZVjbVhussxhnsVKzgNpFYm",
  "key18": "8cbzaR1Ru8mF53gnNuBZK1PnsBvbX5WS9ADjQWhb2f9yXoEQUMg7FGLgznEV22F7F3Mumjkqy9dVj86nb5BVFf6",
  "key19": "26wnDn87V7FtUqgXmgPXcDRFTYMFatR5i7iFq62TNKQfrUJ5mqesKvHH6emptFddZXFM6fgHWemKPLwUU23tHQmH",
  "key20": "3r9hmpYLPxhMbbBov6NGkrZxcnepPdZwK43ug4aS9LXdVemXccTa4mFm7uvAG2pwDFjYDRbAjeSVUXRgez2WY96B",
  "key21": "5wiAKsjscUpZVrp73Vwvssouip7bArCqTFgM3XmmLurcWrMBpQBPEJXHXfA1cfuzoL8KLKUqkVjdZtgmER5fMXTv",
  "key22": "2haGNhpzcEStrbGGERQB1W1BZ2fJYSSbk76bd6evfNvpNJeCwtJ1zTumVkcezogwYdgcU3bStrGcG65FNisbZneA",
  "key23": "3vtcGeus4dyXRUKWTuWbV3HL7nUw2yfbyKFyVchycYhLnEVtctvwbaMWxWkQjC3AKHHGvEqKD1JE5CQEMzfkZrK",
  "key24": "WChnEQhx9LSjcxyFBnvyCkhDbodyfAMmKLzq6bvnwQZKN5ANGy6MbRiT6Zxp1Z2GWsMKyJyv2WRmf9G69i7iMEF",
  "key25": "63bibwPAuHutWZ3k8H44HYKh23EMrF6nSwJf85nb3QqgWVi7pAyXi8CE7kzute8qaNyrxpmLTDfsGPmvsmwT5r8h",
  "key26": "5vyJp4TZH4Yr1SeY7vGaYGKAGx2STw52yMLFpUgH247GoBNCHUwPtkFvWuhUTThVaGfQpunSQEc4tjUVNWoa21KR",
  "key27": "58GrnvgdjJwycoWPHwY93eWkygfGQzPne7peH9kieyBTiwH4Q2928FWN4yFdwDVWyFCx1nyDoA3ftz9iYiA3Zdft"
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
