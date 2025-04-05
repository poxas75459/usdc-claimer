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
    "4pTRLc1QB7WoacoTEMxRKdQWMj6g6BxND3abiYcyhx3XDWeGJQDStvosoBtp6xvf6QKb5xrCrDLTuyFncUowZYnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLpWRcmsXdUnNyvwb7AxTCwRpcEUumJpdevVVTTWyAuc3ncy1EmczBgdDHMW3KtTTn526jwYCEsVouiHEzR9hxL",
  "key1": "4yVDZGcucaS9ANnTEpFjUMqwzkEF3DZgwyRqzfAwLbfHQRKdT8nmjGM9vCamJoNdE4yFLGQopz3GpxrmSDrRzpGc",
  "key2": "iUr5kyWr2c7z9AFjacp4Rizd2YZCHhKEVysLAFCCca73Jh6vPcGRJx9vsPDNdFXyV5szR6n476dAFtzgtByXuAK",
  "key3": "VeyR6TjeM5cQsRVpvQ9mjw3dRC1oA2CWz7kU87iXnFHqMKbdEtGLRYVAob2hjZGNJXNujAS4peugoMKZe1Dq3BN",
  "key4": "313G4x5WZEqNpCzG6Nqe5ZWB1E82t2YgJkQpm2kQtrDftA36tbUW7f7gg1nZnjSDgdomgeVHNP9SjWBKtZrypS4",
  "key5": "3s5Hdnf9SY3f4UACWj3k1KFTH85krPebNLyetsffbk5XG2hKpUoUz2wPoDpyZzZHf52WbXopaUsDriA1F6YuFbQ4",
  "key6": "4nyUoidAr3JLQnxtFKvpYHGwFiVJGP4xRr33mJjr4daCNGFJ4AZHucrogGJ4hxayBN8FgWMUNA1kofHf7mnrMt8L",
  "key7": "4M8RLBvfVjwXaLpddZTWDY6v6QhhLEzAgGe9Sb3uGvrD7eWUhFaRpBSapym3cXZkGd3KNLMyoCAJ3ceJpCjuKHUQ",
  "key8": "2dNHXhmAyUtJjk5AxHyspzFdCWP2vc6fipqpEPsSAuMcrQcgQpg9EATcFLbXSrp2TKL4yCPiQY9Bezsk2caekUZS",
  "key9": "23B2UTBdMaHYazF2j5851opAUd7vH1fqGrPhevqndb1pBfBFEYJ7Vq5u6aGBQjTfDWbHJ3FHjbpk2sa1GaSrzcza",
  "key10": "4twGukRPz23SfQwjayBk9Urr4F4J33LcgCPcx6CYR98xCcpysUHXjY1hNCfHfryspCkRXDxmowAZWvXQhN66Wdqd",
  "key11": "93SRsYhktPUzndqWo3etQiEd1s6tZgAcmJ83iLTVRsZrTQmXU6aL3LZMAWfXvREag28cUagKqY2ok6o4b8dTmz9",
  "key12": "2uckPGNLBHU2U5BT57i9U3KdkVHuRcggpd9YjSSZvSa2M8gTM1cmA9zheRajWQXHNwLC63CyxbiwGNKddzUXChgz",
  "key13": "5KCv3JDwWR2TF2geBLiDLW5Zff19PBPh4CscHgpZ8XXnKQYamFAustmZEVW3wf6hVqMBunxV6iv1oP26oEJVnHrx",
  "key14": "371rdS7ZLh6jRUNgJtN1PeU5ph29xMWFYtpQfbpg1tGJWPJ93JZnmjqLAE7cTspRAdeWmAYygxnU6ebU3eEcqQgJ",
  "key15": "4jWTrkf7TLrPFgu8XyuzRJywfvZUAsCLkVzrFJxxXJxgRmhpdBU5ncaHCLQKCHTz1wVLvEvZLMAsVwe2VXCbNGUc",
  "key16": "tyWbjjAfJa5Ay9XahaB94ykaxXqgXCXLW45gcnFUydkZsz95uZzHt5eadMNcrbhhhJDQxhzQ77miwaHaNb8aDYw",
  "key17": "3kUCL5bbTxsVYddpCfqJj2z3XVeFucqhbGG9eewyVPAoAgdm75hzcnUUbrhsha1Zn7N1tUG4R2bobLoMmVhrcYzB",
  "key18": "3kRr7D6yZmmp7gqFg9QYDNYDkHDKpWwZN7n5UYagLV6zkxvBmQ7DN9uoJnMGWFyjq2qjM4kVcpu9Vuz4QGbUKcP8",
  "key19": "2tzH6ijjTpiBc8p6hTTfbtw1dDBXBMF6Hvwj6dHMDy94CLcPcsW3jM6dWQGjYxPk5PQdtegDXz5hzaUee6YAAgCo",
  "key20": "2tC6bXKcS7zKgteBVDsPQ5ZqE1NqHambGk8onL8yYxLzTeB476EGyUr1B9byqu8CW4TpHENnbbH2UHohk2LoHChm",
  "key21": "3YagJ3RKRvMMLp9wg8cp4jRpqqZP38BcAVnyGaifowsn7rdJRdv151pgd5mVRD17C114FvXWUTj1J3AkspAjHkzZ",
  "key22": "5D1dTjVvGKYL8gD3Qx1Skkhmu1GrDdq73Tfhv6gsScrk8UQFDxCVLeAnAwaSF6uAYKGCC21SfCjcNL3NztxqTnJS",
  "key23": "3YigWTDYZBBnZQwHphXBtjk7j6SxwUqzkCVz4bn9zJiGN4XkkyJEUrbBCvLNa2cfWax8koMviPHex56yXvAyuLzJ",
  "key24": "3kjYsCDxXxQphzPtPFK4jprxmYVskeRADz3ZhCWJMxEMfqG529YDEc9dQwhLddPyJ1wqkwePAjfxwZ64yTHaCfvY",
  "key25": "4zMTdbEV7xNc1AKAc1vexEMQQvL97VuEXX6MXFpz3rBSJwjwipudNuimLYMEa5CYtEvYikiF46oZkgut2zKsDGnS",
  "key26": "3Xg4RJ9xeZGCjG3igdkmVhd6VUuWYM6WbrmK5f7J4G3mVzvwHtoxug6x92MbDAxukrZaTfhjKGYMdwP8j5oomiSD",
  "key27": "4F99Vx9q6Svu3PgSj5fu1PN9qDcdP4L67K7cdAMGGfATSGW3DhxNfy78SN8zrGmU7JxVGm2UgjvDmM6yXZvvQPk2",
  "key28": "4qhK51WscECNiotWWnZ19Wb5Yqn8mUr7srqs52MYXJu5xo3LqxGRMWHo2yZVuVkxtPeHwECZymrjZHiMoBCs5q2s",
  "key29": "4b2dewGNjEmMMJKu37ct6Kvj6N5MEHXBrCLoVAfFXCuNCedFNUjTa5JY1pmDPDv5QqxArBdw6yaxhtXHuX43rNLu",
  "key30": "TH1a29obJDGTpkMprBzxwwfiUWbsg79xrFFTNifWE1Nkp35JCnHWj6XfVKpa8dZgTukYBiECQVZ7eJ4aLhhavnn",
  "key31": "5miSTbbdAVdSYdnzBvqDS1nxGPcyTvnXKy9E7waFtXizRbtVtUhc2FMQwMMJVA5hHSU5UKynQgZEYi2wPpFdBfKk",
  "key32": "21Ad7qodWfQEt5Gof9PPnMQBLYYFutrMQ1ueWmuiYw4tWHNWT5udzHcG5jnn9Nm7g88Gs6ZsKZXeSuVQQp8e9V1e",
  "key33": "dbYQjnSxkwgb9TKKvZRr54aWg9nx6pVNeabJJojuxuEFZ69nt1e6hr9iuzc2HdrJRpTyCptbaamBf2rBkbW8M4E",
  "key34": "4bpmUS1rMEuKMpYKHm18z16mq53sXgtx2FDsgVdcHMHohzG1FXHagjNhWayoY8M2EqaSeCMDWWmfWjUZfbeSSpvb",
  "key35": "ccAtMLXMFVoDbk6k4w9rgYUxeHgbYE7TPL286ypeTi6Quc2PqLBYSuibdFKgdy3gEd8xRZ9mSnb1otSrDmR25Js"
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
