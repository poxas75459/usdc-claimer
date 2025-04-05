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
    "4cGN7cjF6nmhT2HC9tAX8mtvHgDwFJ2GczGCRNaBoef4mzM99c6zA4ByDBya1L9A3jsKDnRPf3jKin2JfyAKFeAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDdvN279Xr4vvTwoHyGFfpyAFGJhDyQ1jQCxGjXy2GSdWEQ4bCz13LDF77mZt2Bdy7V7frMkDHvvmzDV3YyV9qG",
  "key1": "236cHKDAHTVjaAUt9iNgCxoNV3iMZQkAKjwhLnqn5JdnTJwmdEwgzf4vFXxKrFuaGctmytcXUyH2w3k6Em3goXHS",
  "key2": "5S7ZGtQXo7U47khJzv9crYntZ1vpkg8vHg7BwbQaAiUFnXtuu8gdaUPbYGonMbNiQj3UgJ56jywpT6bssKv4ahgq",
  "key3": "4vj8zHXchMoQwLZ74BY56nR6RoWS7pL6wy51uCdLGtuBeDP9jkncPQRePerPcxQJH5RK2T1vPzySTn3PXSyrb9UR",
  "key4": "5Xcu1X7RdkdSjZ94cjqPy8CxSSYinsZN9LfWGpuBWLT932CzDwJFtWeoeVtRqvyDjRAJxKuaCJHvkX2cEGYzq7g9",
  "key5": "32k9woCMpFivTotkJhqaYWoFFRSgWcSs4F8SLUQUSqsRVhCwn6sAoGvnzJVwFyenkkKuASKmQ3UGcWtD3NyzJUx1",
  "key6": "2jEmMHxuWDrQQoLdNrBSZkvyQXU5LNnBxpkFirA4k7HAmvQNZSbowEMcDXst9tRScN7TfLbGfUecKUdgop4tm4Gd",
  "key7": "3h4vjxfgWwj2JjbGg3f7jwkheqzLuNjnEeCg4RcR8fgD2saNYtg7YzX9Ncd7BfDJA56ZRUGdgzJBR7zLPf9EymPz",
  "key8": "5Xc1EqoQ8EGrA5ANr2xmPXeqMNBLyyZgkqYiR15edKvbZfutrjNrr7aNJCikpda67hVmZeHV5yxx9KrF1ga1gp9h",
  "key9": "WsQx96ZQhLz11vPACzcMawBUybf4CCWLSCZYbVvKCLvoCJnD97ueEdppMhUcDmMj8ym5WK4yWYuBCmBAADUbKys",
  "key10": "3gsdFPUsFQAwd3WCgMRZDXZSRg9TSX25zvs7Wot132uRVAMeJkJiuEW1g2EfKSQT7SnXu54yu57aJPM3qyFJceSu",
  "key11": "24kwgR9gvFnXSVWEZxn4z9UA5dkvLsCZQtUpaHRLfRLFf9Dr3rkB2SKm8Fp5FNMLdcd8JHHZjKbotN6KqP3cPbFd",
  "key12": "2GB56CaDMKMSTDtrNDzpR6ZYXXfSywKd2FhUiXvqNdkgeH1T5QBjmQoy6M85Ge8n6vQ7SUzkdxQnqLCGQgJCaibi",
  "key13": "4GbaARDbdVPZKa8UG8QvRxxn1ynEtRUAvPVUeeVPAi2JKrhbfkB23NRnCnrWasvjZnDcfAYzKJeTXms989nuLbBe",
  "key14": "2rmG2XGuLFfmVuLmrhKtTrpQEQizeTf7Vga7naJ2jjYNRgvaL5MCwTdLtMLY12nhn7Xpm12iuCJLVMco62oTWCcj",
  "key15": "3U4znrcJjLfzfJZ4pi6YdzNrSxC9AnPMDtm696jo6fFSXUZrumrs6fTDuxQZ5GjseQX7trkn8Xy3pPdzzruQeKtZ",
  "key16": "3apm2sESqo6MAVpsGjBQXp5JCEA5h6w8AD4n7mzwhVmmEBhMHmUpUWWFkU4VfgvGDr8CTUNxLsDTLWwvfyv36F5B",
  "key17": "3hJ5GnDBDHpcfowrtgWesPGcueFKgDpj6ZEkYFH5bdtiCh1yAVCfcxTpa6VVf6Z6ScXvzAiSpCKhheP3Pr6dvFxL",
  "key18": "Ercmwx6kd7embLDG5KMpQCwv5NCaVjdsJEZ2rPqEYAkZvKoHi1zfMqvbE8iVGFiNtbkZVWzTExzQXmpG2vYJhwi",
  "key19": "5wHNPs8kb7LDXBRuPpVeYpYDayV8WVJ4fGVTW8ofZubAa7my39bKvrUUfLUGA4ZzagCRKazHcKv5sq8iDAHxHXKX",
  "key20": "64VSvYv9nQGpLh5cyjytx5QgBeU9UJsb73QTqRwNig87ae9x7RwMnqwEooqSCtBY6sR5pMUfHSKTqjkVDT5knYDf",
  "key21": "3pmNzAapeEoP812vCh5BKJ9gUoebQaVCbC1e1rUjfB5PiqddtEFMgS47bck97B31A7AUs54gBjnEcaTV4sWVPe6G",
  "key22": "5JA6pERWgchQKK5rPnKdhYwmRZCu6TQy859qiAiJQBbcupvMAT7nvb1PoFZxostHiH1v8sBeiWBq86hbUwEx8EDc",
  "key23": "8nd2d1Cxj8GkTFGmmEeJbg7bh8qHGXFYUCutSKHTa9yqLtURpwTVZHZ8JvqgWdfKQE3XPA4sJHpH4EmuC2XTBPs",
  "key24": "KaUoj18WYWQzCVq5GnvWgfjdRdUioGJYg1cCbDRyLDeuRoz7joVmx6PgaPFkZizPsdHE8St7s7ia7TRvQfCsvmC",
  "key25": "2gwgfrupiAUViUZgBr8HNJ9KT8ZSidmEABeEmt9bYBFV6yC1Z66JCQEGs1A8KtXK5ixRHx5E5wjn7YLevkXYscBY",
  "key26": "m1oPgWk51EWg6UVDjs3g4YwA7Nm2ADAdXb71kib7ZBAn7aCBZu7qaBwqsXXuML7GWoiwHCMBz667MRJVKfd7bqk",
  "key27": "4pTZmXx7i1LgHYqfKCboKAcQ7ZXFbktBu7bwxHoTdLgXxTGAW8JeSetsJqknbofxmf7MsCS7RhTCNu1CE7YTP5B9",
  "key28": "3FEDPQTrF8Xm1A89cH8WRWsBvew4hzc2FQxDSf15auxRjAj1n1dQMEcW5huTgdHjcRVihS3ZjnBDr8d4sfL5aSLr",
  "key29": "5nqCcZYp6vtPjHPVfxgQjLp1Kp3uwScosP7wfmg2WhacRiPFHGrXykcsbRgkEjCoZr7vZAnRKxgezJcgji4zUZ9s",
  "key30": "2ANAHXKLgXmXaL6dq6uihHDyUBDEUn56r2gP7vnzf8vJSaEfBES2Z77994D6ebJ1FqXdF6xKcEmyQ5hn7izak1ae",
  "key31": "5PYgj2kvnLDKUBh5CSbxmpMtHSgM6vpRDQpRfAUGv1JaEnWParWQTo9AfQjyWN2cb1gqPL9fHCXog9An3kDqZnEJ"
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
