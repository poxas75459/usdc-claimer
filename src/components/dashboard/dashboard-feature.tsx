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
    "5uDNwTUuMtQrY2SAPHipYwiifA9EwuZzmM2zXprR4Bgotj5HuXDjqdHZWCZy12VDTVMvQEruh4xM89RWinW8Wf3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yyr8tv3kXfRynyxxZZG1o8yuufJFAkdTqHpHxyD4nL6W6HjYW7LXz5aMtKBUPMq2NrRNrFRmC59NM7nHPdxfeYe",
  "key1": "2JvLpEgDfjvaPKPMVm5RAutgTrsm7QcPQ5taFqwihrBLxTEzfS9TeJp6n8aFUF4gY2Gne17UYxYh66vmFcDuJUAo",
  "key2": "22Xy6coSfMKevWREJePn5H8wasRvR53RhK32foV4pUHFh7GSNQjo4RHCM9Ezsjm7R48fPcVN6JZkgtchY5T8va46",
  "key3": "2jUwaeJsYBytDwWNNhpZsbMciDcHcADJwjmbuNcUrQVQQ1PSZamcGg9Z35DfdL2Hc7MrJmgiUABgfnjFTuN7m7kd",
  "key4": "4c4j4hLVpTx85iKb4cNBVCDPqz8EbX8W5gHvnvjrnGjn8NmquAvZGNKVhrtuNmmutVhtoyH87qqyv3DXLGjuaLzw",
  "key5": "Kcb7eS1EiuD2idvQjmaCSpcpJU88qfKibAGzUhsWXkpjye5x4Nd4AAuvkMhbMqtzfxkS5z5FrBSkXAc7KfnxLJF",
  "key6": "5AdzuCCTq1taSNqf8PaAN3MZ5u89vG2SXGeJMAiwfXWbbRuZRs9HyVCDoGwwJ78GSjGp9FmFZKTE6qyy1n4gSpMi",
  "key7": "2rJgYtj7EUJnY3SJJrazs8jJ5bEzyjLnLPpLuUPSQLeGa9nAF5EZ5hL9unF3PheFMxpZNA51AgWGdcacceheGD7m",
  "key8": "3H7ja2oJQoLvE5ChzCHgFrTXWHGWF4qXY5b8QdRJJCcVN9j2fzkBrwrdGqZwat8zmJ3m7TtAwxNhmia6LAxoi5Rj",
  "key9": "3PmQfZxQy7G8EjmmWnw1fxHgmjbQZd6fFgNK14t9kr2fiSXr57J1u73zAyuGbzX8tYf5YPnrkQcsD7HrnD1MtXtw",
  "key10": "85X5ZWHURUMMaLH4zx5C1VBgRbHPBZwsHfZhxvfVtupoLt7jey47E2BdrH7jW8p48vAz1LPBJnwWwsmb8QePvDg",
  "key11": "44R9HVvHbBQFz6RTuG8syLueG33M1sV3jeMRZMnwUTth2TRK4ZSYpxKBbFjmmvLorXPprh3hJi6XjmAeyZJ4iMJU",
  "key12": "4nYFQQZUNwndgeU5ZYePNYK1MnDAiscs1XTZyPnumrkVDEst7pgGJ9GmoHyTf5q4FpzkEj3iQ9QE4b7YTzefhoEu",
  "key13": "kU9TJZ92jqXsaJytCXU4izSaLafqe3EnK7rxQtjwZHLUmL9uKbfMvTyZ425vRYfNpTiRqHchEGNfH2Mk1hYC9Gz",
  "key14": "2E2uRf6pwfx8LGvbkD3qfbUK6ydse1bcLXk8GoWmMKPw9j2f91xUiW7qJia7cMCJjpazUyEkChDu3Z7Pwr1FDFdb",
  "key15": "2zTdBj4KDzYeYqtBb6QTAYAX2yqjqmZ13ypJQHJU3XpexGByo8VzF1GeYRtMcqPeKdTaWQSskgaQUSZbMtwAPbNi",
  "key16": "3rzibmku7NLJwKkNEW3ew5PRGpvamobYeeUarW4GQyTzZqYBKc5kL64WmoKYvjBXoZFStoX61xzHvBUYfVQT5k6j",
  "key17": "xFpY1q9vjCwcCsxZDuV55pTnVSzXnFhV1cuJpeezDV5SJVkG9BnPnUWbsDDiB4YGkSvCPBt2JTR2QVdJrK9gVcu",
  "key18": "j1LeYqzjJwoCJtdncGRyEUcqiRDKNCmZCMqKwKxwzieyhvWbwZHzUYvK9pQ9Umg5ukKtUTnD9NX6n5A2za3wuLP",
  "key19": "HQm4T3FE3UWWxo86SyKzGju177DFrgjLBtzoKuBcCUXh8RjBu8isoZREfNK7qzyyFeYrgzCNSizZUvbcburuw8g",
  "key20": "34y3gmWWuysiFmYUYWUDCrjfeyxw4n4uZzLNQwBfrs4Ety4hyUnA2PXQVvNs4hhZqALSsqcFaN6kx7BqjALnJFTL",
  "key21": "3jQnSMcwRj3yLrDtbHbjDvxKF2bzvhfRQucSm5hWvUfLiPmyCfxGFzT7cZiPvi6recKEmqVebr2e3VDZQFWoZG9P",
  "key22": "FhEsucrhAa3LCyXKPYm6dhqGi4DkEuSPMuVnu2DfBD5kum5jAKatZNCn8WJ6uMGiKCf2WZuFATDWraq3RNDs8Gx",
  "key23": "4JLAtqd1qUwkqNpaJXeQmPgwxCWy7CUnxRxccYFF9RD6YqZEX2cKWrSsf9RHNomJnzszaPKPkwYoNsSsTikerTxS",
  "key24": "g85JK46dMULLBtw4twEkS3GaUjtz9cR1dLUGAaGdpe2ExLFZ5GyCC2LcTeaxixtr1wJXDKTPTvz27wFPmTHr3ih",
  "key25": "4TCJp6wLV6MgY7oTkUrrGB4zskrJSRpJHbgvmufCo4G9RYYL8dKVyj12cHViu2s6FugCyAobF7pqwUFhskB6Hx3o",
  "key26": "UCLvhLg4pd3nkEAdaJCq69rw2KFW6dcoGJeuSm7RJHWxwpZHbFdDYoB32FtVyFWDDEDbECakKk8upGQQ51HiL4Z",
  "key27": "3vuut7V3vgwHwY3wfxvkxa5Hr3dvZZ3B4sRZrkjgXgSGR9a9fGmX9MaBQoGo2mBSjoDSYqA5Ff94Lc9VhQWoSpQU",
  "key28": "4xwNbKrMUBLxNVMygvWYjToL1qabjyyhSSq1x87ZLqE8ZbTZbprNM4WVUUu3MGaN5UtT7t5ec2nLNNbVBAQVqGQZ"
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
