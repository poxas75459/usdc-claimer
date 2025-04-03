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
    "5zQfWixD2rzevmzPW8BDMmMNZeNuzoUMKwyL2nCbsNUypvRufYbc8VH2GdQgWwZGvvLcesYdu7x3vCmzaMch1JNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zfwzM1W9wSzo1mj6JKyaxpRmtLaYTd3TF8BFgZzRky1fNz49Sn94zaEUihxd7PYJ9iXfpXU9EW7bKteYHCUCf7",
  "key1": "5qxeWvCjp6giQuTP6vg5H3Cu1xBvEaQBTi9nrMfrGE7a67KrjiKMuXEG6hqGqiExWM1ZGD4YaKjfPE4CRapJ4RUQ",
  "key2": "3JXhyjSHuPndJASxzh6DUu63eCyDyW4MRgcD4FEzT9q3aqUBLsDZx1D6BYWtSXSygjqZLdaoZxow3kG8RuvapLFU",
  "key3": "3keSDFo58BxiaskFaHptPjJYw4ak5r4wkczWcXTq9cp58jPn915SW8w54xv8hGx8kJZVxsoWLHt9b1kbuq2zSSUk",
  "key4": "5dvktYfzkTbgbNd8tePuXZgkujQcNuBE1bVvpw9nHbYBnmyMDsXLwvWd1fDfHcoEgaG6ffTB6gxRXEwmzhhcsNVG",
  "key5": "5JiCdChKFreuhqaKtLmCeuNK5Rbdrq5Fbtb5pvnyco3Wsm9NrFGUecbtviNv8pwwcTsA8VgZXUDTiUN5ezGZU2cZ",
  "key6": "4i4VbrcS1L5EzbenyvrnASV6sEnUbLdZxrAze4rTq3S34WnrVFiyENMmWLvf3boWNsUmn2qyAQZmCXZMnXVS9xfa",
  "key7": "4r9AcG1cBt4GdLYTP19FxfDGP2B3318MCyW9JGdt9dgfCDswz4ffSR4dpHqGVtpzThajpECrhJzHbptkQaQNM2po",
  "key8": "3Xi9i7CtRADsr6Q5kgXx8Tx6v476oKWYEHXKxTDzy73zcF8sRxVq7YDMu4Td7h3ymNEHVCWKosW49U8g6n8gCR39",
  "key9": "JTC64SV2yhnUWpGf6NoQKB135iR1VH2SH9t57kdn8eKuYBN3zc73BhtuyAnfif3MwHxGNVR4YwUUzkArhjLWiLv",
  "key10": "559ApjvJ1oswohfPCM4DCdHP5UcWhS5Y6kabW2nqSnzKTw548rppxybmEzCbqZiJMuPAYt96tWZtpthgbaVG9K1z",
  "key11": "56dGr3axUtP8k4VCr22X5bnXtVaRV6yJJZHxNsJpPFxj41Z5RKNywK1792fYBRoH3LrPr3zePfJwS4eM5LZ5QA86",
  "key12": "2w2UWAuBfTpDq7fbqh28yi7zCNe1q7YpaoNmsrYZSNuEHYDXwtvP54JdU1uARWKznZ1yLtZpwt4U41BRgngZcSm1",
  "key13": "27oLVAbfhhmWB27htfFBdLRn9YcFvM2qzoF99uf4k4vyCtBmQNtw8XbV8LtTmL8J9LvYi4y2z6xTvtj4vBaFpfp3",
  "key14": "a2t6hAP8WY4pdT2xXKx2vaZ2NBtqpKrZXYmvv7ZGnEKiUiiS266B3vzggjAxkUJRGeRsD7UX7EWDKRekV9Zd6hQ",
  "key15": "4WSgw4cfEX4qsseGp56qg7B6mzXNgUXLywf8uU9xDoSLwpwAL5n4dFwsM1HmXNzKZ6jb3RS9bkTsfpUZEkS5yMhn",
  "key16": "ZsHyRxj1ou8x3S4NvkwWoWkDh4YbF1wYUX7s78oxaaXFvvT9Y4iXTPCzbp192jzFPdcxjG2LDsW3HX31THSkRCV",
  "key17": "3sWDV7SwuzGXvKqorwcsZvjJp7ZcXQ1ugXa4UZdNa5wqSURBEmXAL3h4nR5sLzZBLkNLHmjtByhEe21YG87Amrj9",
  "key18": "4qwP8MHHiBZYvLjAoQNWuhmn5JpwKmCAcQ3CXQcabboGNGnFAXXLcxzkbnTkFUbHoYuU14MP8QdCnwwJfmzRDnF7",
  "key19": "675tzXmGSXdbsSZ7BvwzzQjeTXwmPhC8xuFkcdkp8CMWy3Gi56pDxVxQeiSc3P94MgiPgfGqqrqYUGN3pxtZN6YM",
  "key20": "2ZA7kNxfeUduiHfhX66j1NzaMGBFJu3SQ77qYDQ5Ghm4DWUkoho79tvQ5WiHJgfF965N4i9pmBZyT9cGMbktZW7f",
  "key21": "3hDjUZQNAiBYbiWqNbCEW59uXGLbCP8BW5FCENTMFRpnDW6Hq7sU6MtNU7erVfhmb1qXHmMnceYMb2cRg2AKKt5P",
  "key22": "5eb2rnFeGU2Jso7WzztQkKnZuW2Hinz8JTAorGq5P5xrEMLvXGS6qCoWDqSRksHLcckTsQW7QcoDhqtmUoAJioxJ",
  "key23": "3XXfB5KdxznpUE5RetmBBUZr5EE7KXxACQrFDTGnZzPCd7NsFj4cfM8Q6nV7NkPMTvwYuiwk7xhwpJAWyRoApAXD",
  "key24": "2Dy1iPi4qCfjk9YYs8FoPez1PWfeXtZTgJP6dnQTczTp6HBaaZ9PqFjBYNxAQm8nKKznY6DAkjN3C7jGLs1Duj4d",
  "key25": "4pCpreY9xMb2i48TKDy8vJB7HGsvpwq8fCfDvn4Gov5ksZUgQUD7P5bwH2vWuUjHUUjLP34uTVn6Dp1L5hgjS1bF",
  "key26": "3YKE83P1Kf5j4EecN5fkMEejk2r3GWB7DsGo5EQMGAwdq21er1w7MLXXE1YPzaSNjkd4taQgyYh98PwQVWKCoRGe",
  "key27": "58VtaAxfrYkgZuEoYSJV5rQ3svCVHcJ7f7dHkWRVVZrMyxNNA7QkcUgwpivstpTqcgAyxWJmUhxoY9Pqc6wTY6W4",
  "key28": "2kjAxvE5uzAxTkVEztEyr2Qp7Ytaz7oDREKEDwsxMofDXhpkqaM8jMjHxkDoWuh7tciB4VaaAtbdxvbfJ6sz1Rvt",
  "key29": "2t4jT5WtJG2X7Z6GgejYDwfMRgQ5FkaNjsWXMh7M8bPCUNpWy26jzAMdjhkKMxbjH6YzV8EV6raEHegeNXBgRkBp",
  "key30": "3tzLVCoAgTAKTTAj2AXc9S5PJjygBHhpjJ3RG6fqXmCdBe3nBfD8jbisLDZfnbxJDGqiKwnrBprebNkR3zv5yncr",
  "key31": "3WHVEgZVSidjUHhT8ymS5HCvSBMDcVXjRqBob7nbBkMy4JtZn3FqyNNkyPf9HTHhLdUPT7EKPMcFmo3gKRfMhiCG",
  "key32": "5Jk3CTgLDBGrmMStisMBetU1TNneGPqH1HBX8MBKWNKQVTn4YQ9cKhg2EPztMDXUHNqDx8zqQ878jwwGagSz2gne"
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
