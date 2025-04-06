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
    "5Jxz8RkAWefnKG4mD8L8mZUbahwGG19MZia1hSHaDYEJzDk2LW3XoxxeLTAF2Zsho9tCfXqirrSGpPU7hZLU2Bn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iccZBn3Pco233wgWUHE92z7LBcTZPGpX6fpEnM5M8eT91Rjhzn61hNcy3WyaayA93zsSCRjr5mhKNRxFgiDkfDn",
  "key1": "BeRKqTtQ3Ri8peCdKsReeaUE3xtBrTgspPW3onDLpu7Rzfy2XaQYo2a3ukzRAiKexMKSRHCjFyoMeekoSWveHad",
  "key2": "4WjkGj7NWukhcyb1SCyNYkJRXZwPmp8McnUBpPs82EsZ5NQH5vAHAgsM9mToqchVXam196DjxEDgXPayqJEr9MRf",
  "key3": "3me2P57JkoHX2sUBqsdhNnVokyqCVvMjtarTibhnaUgjHR1ft9XrVR3DfcubPv8v4DhxaBJxmhBk674E9MPwkDw2",
  "key4": "s1yVzNESeG63UvrxFRurJGCBtCmRfda82dUNUfRj53FPfz2y7MkpmC4CxppvR1BqH3moDowgUh72D2uvi8HozRU",
  "key5": "4fb58HYZqBMbGeoehmM3ZUKnYdikKgb67YYvx2d5ea1BLt6ytEaAqacVG8HghTrM5fAFmQGjjS5TEKUGFqcejGZ8",
  "key6": "4oT5kNAjZZkXnApusTxpsUy8msJNw6Ajrdwdz7YvteL6mJ3wwu9fsXRAdUzNrbfkrR88fHwGu2kwwiNWb2wdhzG6",
  "key7": "3pHWMhPvWAKszKTzcW9x6gLUQRiqB7L6a9J2RFJTab7x6sDjn5iXfvBkRy2YK6hFfo6tqkuryNmNgar7kjt9M98R",
  "key8": "5chD6qdConuqUhNvSfe6r4q1K5waN5gjkudf1qPxYj6C2hTZ1ZmT3sS7N9u4UcLsZnLMnBBd8mD1S9ZwtwUCLK4r",
  "key9": "2MVUjDGpdq9XMs5ogDjYEB3xp7bgZQHkwz419drTEC4hfc9gdsn14DXfcvWE5akCkmF2DLmxwPqLPw23xgAdzVhh",
  "key10": "ddj8qyoKLdfN31CXLMwuM7MXQpAH9u8TgytpfcDBw8ZopAjJodBCKpSYWNgVDp2UVZowMG7NGLeMe7gmFD3u1s7",
  "key11": "gxZuq4CrzPqUgfpvEmj7Vyyo9orpzdQz1vuedu64YWoAB4Fp9dXUGwZhzKoqyGND2sAEzVpkUahfkXPtfyB9hES",
  "key12": "aGsBjhAFuDYeMcQnM5AmCKZ7qctg2k5F8w7zyj4r4MPfh6S4svCqWxFsYzyq1gAtB4HHdJ4V2nS8gvH7shhKiUN",
  "key13": "4F1EMtP8zHAoGfCk67FMQMKYLyrdE3e3Jo5JMvRBs29F52rduGxsjyLqBzfq9f2XvaFigKK9kwALBuSueWa73xyr",
  "key14": "4BzPrddcuJwz8LkE53kZzWxW9oAm9B8Dsc8Xt1R3qVBx4xawuKUNdeLUBJ21fhtCV7aGGjZSSsRJyvd2saEcUx6",
  "key15": "3jKTCX44wj3bymKH6afkSt23ZJFGvCCUuW2L2Z84sL2Y4F4AcDStWg1Lt89Cv4mGvq9XtcYNkk36z3HM1NQbt71p",
  "key16": "4ybVw4WARBzsZ1Wbf947u6d4nY7SrvhG2azFcJTu9NEvxftVQCpbNh19KQNq2D5mkgCxxt9AJzoBSWqy7WD2d3PR",
  "key17": "LHP5ASNz6hKyQNk8E88NaNkRBhyFEYfk9fWoSmKaKFLZg58qwARYJbEQ6NWLFHL8V13WghpCiHShk5QjTdZVJ3S",
  "key18": "38y8vT31Pouxz77UUKCAfz47CbwcVNPgn5seNBR9Vb25nXYP8vqLjCnGMxfP1afbBjd1FT2QrHBL2oEcm3bg7TTp",
  "key19": "2xj8gZy2hUoi7i5TStiakmRQ9MTByJVbBbjUHXyTZA2qaNZaNM6FaD5FTUhWntmJ5hmnjatFfHkhDhKtAwPmgcnb",
  "key20": "2P5M2u8FS3P2dFXRskcVUWKY2U5z12U2FWAY93A5eoFAXdXMf2eYoh94Svz2iZk8aXUCRsGhhgXwUCeV35wC7wGP",
  "key21": "65iPVyLNDFMDTXSKXa2NLmYMP7uykq96ffpKtfHQ5kDtKbDCU1K9PdN37CAREMKQiX8qsMHi7e2BSE4ZZ976tfUe",
  "key22": "4zk43VD1S9DPDnPoWck9Yzvd9g8g5CHAnmqLEddwKoQVeHAqphreFuQZgWhUatWLJ86RgqoFSZ7TAwF8riUPyn7w",
  "key23": "43YfAhb9nrAUmoQGMhArE1jmA2tpjrskgJGUvaPizfmDoF6GW3d7Tq3si84oNYk74ww5P6ZuBYGUNVM4qDW3SMFk",
  "key24": "5J4sSCjy5MoPgHBbTfMKsXCVMrB8BpYDu9jNA1M1bWj5d1ESU8B3GGSjhdAiPNzRwQLU2izxxUPTmxX6xR7TCVC9",
  "key25": "5AN4RqeApoAXWi4m7t9p32WJmaszLvHVkgnFaCBkE2zhzwdua5HzkPAWt8n8JYV7Yx9HsjtjtS54JS55yJBpyJPn",
  "key26": "3kATQiu8YRno4PthaDKT9UQney5AXRt7GwYmhhBPctUtmj5KtHpgr5Hj6SZpjHDgbXa7hw3r1NURLdVL2H2HwFUj",
  "key27": "5gamyreQtiyCkfPjuqoBgqBHBEoymqH28EERHkG6aQcni896kYYRCyvzruuRyEB4x8qW6ZR3aY6KuTEHnos9hxVf",
  "key28": "3uVcMiN2WojA9vyi49UEeuwJgSK2AdH6hk71KVGzzwGkg8p1ns5qnwZoYVe17GYdLRQN1LBQUzkosPDbki3VViuB",
  "key29": "5oWqVY8yzNAENd8fA5WU8ruDwu2Uh6HfEjTwdyYtPR43iuu7Y1kj6sJE5CvsXtcjeAiwFq17nyRHysAFrqBa3BZo",
  "key30": "55dRtbkXTjkjDwmGYLk2XfWpjFS1FNFFwB7GrLimqk43WFxoZ1V5UDXUkagaWgQpZe5jYvjELHzBwmFJuJaHWGKt",
  "key31": "2LagxyAqB57Epwtkrim6pmFxYdcBCGHkVBYz1iU3TDdgokP2VkTHxoHUf8BgodfMsohYVo5J1qV4MzkUASpDfm93",
  "key32": "2eQHiNNDpXHuNtdcEoJXnufen3MPu74KhRAG5kQdVqNwtVdTUQ8q8qca81U7XsX8wiYCyheJ1g4nNbZsrzHseWst",
  "key33": "5uqVBHXVa1HvGakP25iVfYLtGRBVGgd7BQa1x7F9xzdLki5zdoRZgVQvDMDHRMmBDxfxuPxssfHYAC6M6V6u1Fhv",
  "key34": "418YdJVh6aFVRmXBQD1pgGkqQvqSUm8KhVZPGkqRkwNmwSJfkVdxapJ44HRJgfaYETyRxAtdAUmzjY4ced2ywg22",
  "key35": "mRUB1P5DS3RJvJ3bjgR1yUyCkXKLcuVZRQD1Sc95NA4MuS23SkWiK9oHkAUnRnZzbtz4JF3so3Z2qxUTyrdKJh8"
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
