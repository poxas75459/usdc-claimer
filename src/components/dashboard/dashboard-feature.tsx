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
    "46vnzbnAtPGLnLRV51bNniXQ4sBChGwjaGqoUeg8np8yG8yV34L5xerGpLA9tw7H1PTDSV6tBFE5NBFyg4tr8pBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9uTQwSioVDKJmsNN48XeCPHvAQyZuGYj9YFgmTPMQ6je16VWoEEqPGGk4agATEnT3Yd2xEzHBtK9ADaP4m8cA7",
  "key1": "5pw5kx5GD3CZnYKui3SnfZzpFDVuqtVJYdwi51XB1yfhcCkf8BWqsuRnYefEkCxPDZLMJc4C4jkXJhezzW17qCv",
  "key2": "2XeGo1hgkV8jdPkVxdNBpP54cc9g1VQsAq3s6G3SRGfWCcuHNuwTLnzuxgb7gnuLYWYMuZPBLR1aFD9ruJxEp2Y1",
  "key3": "2BGnkB8NaBDaQRKKUEYPBd25pXUkWMSHzmS38Ly2oS1jibWzV67XrWGaJ7W136LyKJjiXEcuyD6zoPEQyz8vEY7K",
  "key4": "22N1GY2wmjswrJGwJxKsFrp6LESdAcXmXM5iU9pHjLSx5Q3UBd4Ak8hwrYUYoWJbDAnFGLfXgSiNCkUYgazo2wjj",
  "key5": "4UTzVbV8YWAuEq8H9d2FU8zyGX7wDqBCyD6YeHq934gUQ1D7XqQcDNdFUYZHXmYsz1TTMRyfxnQWEzqye2BUKMnf",
  "key6": "2MqJwogw6oLskPC2K7HodiR2nQ4MRa4LgAM5ZMX481Sf2pZe1c59rWnVzF2XwLyYqgppN8EV3CbMn1bPxbsAe5T8",
  "key7": "3BAW7veGGrdgx7TYvUNVWGzAYE1iD9pGwB2jfQnK6jTzWGu7SgeuMR3yok2bESc4zc2kFky75W4xLBzymXA73QQm",
  "key8": "55KZQSrDhoqWEWBLfGkVhPB4bXAAevi39qXKyZdk6jfon3P3y87eVcrVzW5aYEnEunzXbejeY8nYXQjB8iNodivN",
  "key9": "2nf9i5gBioQUbHrCZuPQ5bazA36UKA9zqxKxYsQxZTp92zxmFSZ4A6tTmCpWAsz2dJwcU4sV2zqUEVC8wghKiLdL",
  "key10": "Ek3EcTPZTtDewWN8XwFZVVJynqyVHyDJNuTibQVSK6oRNvTa3xrfJ3ZHBPVNJ4NmpjmNGLe7DZupHDWv4hJyUA6",
  "key11": "3QMTqhbRNovqQgzyyp9NjJxVcnmAupn5Vz27g77DXbfJw48D2RFS2L3Bbqd9jjAVaeGXFD5jbXCeM1ZAHfVooDnB",
  "key12": "2r8BPiDmxA1NqYfNSLZ6frPZnJvYvTZSZBgynP7oyfjrdZtzr27ZWmdJsi8KPEnS8WasozT4FUuPfRH9Emzp94n8",
  "key13": "tVSXJMvPF2JsWjqM99ottJwfxLcNp7YdNWHBEvYJoPEKU8YQf5yWdJLseSboP7iJ6MMrgyRcwnddfjyTxeqZVwQ",
  "key14": "5tDYoci6owDbBZkYmcxHA41rpD2atD1CQbVkQXM1TNRuap6WV74YyPPeggSCe2qGtoTXiAq7qsp1wf1aYm9xoD6S",
  "key15": "rf4Ri4Uk1gw459iPC5cidLjxaQSD5aCULFYN9Sc1ut2mmpvhwUsm6hrYyvB6rxkFVGyKj291iAbbwvu6MLzbG1c",
  "key16": "4wXgEE3YHi7SRJRs7YYXCwCKKSZ2KpFZ3zbcVdsyQkCjBXkC9CfDuSBLZoaiq7igKts6JuMNKURuUNE6fcAxisRz",
  "key17": "5FhUiBCZzSb4JzAZ2MQgzSbvaZnA7ihiKgi3PXxWXPVxTXj1nC2JFvpV8Mfh6NdUt1voZSvF6dfrhRGra88DnqWP",
  "key18": "3BcZz69Lj2NEtSGp6cDUHo3RVWxV8R1NyMfjFiDavfDiw7sK1aKv2w8XBWafLVgEmQYkS8YMLLEKS5mE1JqUpPjQ",
  "key19": "656gTurScAMa36Xw4Lg8xgUNLoD1pZx8xouSjUoV5DAHYpEcKQdPAvoQATRjXMaMfB1vXh5EELfT5sbZqudCziss",
  "key20": "5HMU5oVtyjDqWCmPNzfjFnhXFskvYvgP8qJkyqenqX7SVvkPD4iX8syNCe7ryExB739ZD92cnWBFoCLEnK68KShJ",
  "key21": "53K99settKiSwQVKwD8FAY1MMGowHT5Q82wAw7qN1ZcnvthKXDHRbrUTBzUqJjvXQd9uE3Qy8vPsN5hbdsBADYX7",
  "key22": "56aZN3Z47FNndqWB9eZ7uaFj95PGDySUPLa19KfXHdsXU7YJ6UJzR2sXHr4QcYnwFqKqFoEXQTK5gQ9urLQZMhJp",
  "key23": "4UHKAzp7eb8vdh3SFBkpe9WgJ7aMcqmFmpv37gqtRazHyeFNQc1FXHQ5FU93wETp4jqzAYTdwHt9xEJpUixcjcjt",
  "key24": "2T29NMtExnYyLoVkHFhRmJLG6rPyiexyjAGddGZPTdPkAMFnQKQ5YLDSPTGP2Dceev1i1JLiNEN14TkU9yeqZgBF",
  "key25": "2eW3StYE3NTfRJ3CdGx441kDMaqYtnoD8iq4UawC37Hbei5ZvwVYPJHq2WCFZ5tJkkFS6k3iu961He4iQw1tHGWU",
  "key26": "5D3Snxe1c39zqYipk9MNfWBxU87hkEmsmBn3Q2QXQyLim3h6WDKbfdRUT4jwe5CYLKT4KjAqxSmRrYYGG6PYivrx",
  "key27": "49dkTx79ip6GpuyAUXFig1ammZUPhxd5WCFthxs1mW5iTmpHM6gzLBVY4zqefGTvjStLuKMrkfCSSZSF5bX9twXX",
  "key28": "Hhrt2jVSqpeRsjXQBFuuspqVw9DE7BHYvLAYkXSDz4y1pQacNYVsiWHYkxtnouWzaLTcnvuPXBqyNuPgFqUzCpX",
  "key29": "4mE67h2eyqbe97V9R1dp1UD7fkAXfE4U6wpDeaC6qtoxENpL7Hc63VuSiV2uuqQt5k9dsGBuS99wSB2pjKbu9yi5",
  "key30": "2EnroDFux5oKHCaatyuiwgP63fqoaHkcYRBEbXwBx59XoDN6WkcbsKpzmTctGV55eaFF2t5bhADKMwAiLQrDVPng",
  "key31": "24C47SWdDf3XGxyEpHVCSPVxqUynmvZJCvX7u3h9Jg58ahvsJTFCtyxXY9fhR9EXCFtvDViWh4TnhvmuupKxRWUi",
  "key32": "5hLA2q6zbzWbxZbwKKW5vyKoVk44abLmaFbe6M9TsAvFKr2e429H6QhP5bj85d9XvvWahAS4LbzF5FQiNy3pRcSj",
  "key33": "3oEZ3JKHDw9YsQQUbPCF3oPj3VfT7DAvFg6UdQmDEcgEX6Kzm7TARmxh4QombamaZFvUw5WqzUAXN2df9NoV7K9V",
  "key34": "3NHtttMHsKEXMsHGTFXtqRpps7JgiiMVW6tGPq3uaFoCcBdRDQ4jie6f4sNkV7UsxFxkXCRtMdQVgDSY5pcvHKTz"
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
