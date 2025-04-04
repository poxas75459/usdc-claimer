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
    "qFzmh7rAeC7PSkezQ6zVDvzjJwqRRbRcZZxH6Fu4GpgSLCriy5jkeeLu4T3dkKh2yZdcqYc1KknvjfWtpYB6xjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYD889myUasVSUNjLpz9gXxULAAT1k9PydXxvfDm8Jm4Aum47QvgKLbrnCT5rwgGyeAov8Wc2zGGYFj3xy7b9wu",
  "key1": "3jTuXxF6xV9xvtnGP2gMuMfviJXkRneAt4uWecYyf1Cp3BWkYpmBB77aKbCDSMVBHvBrCYeYrpFWy85bvKKoaxbm",
  "key2": "5KK8QvVuhmae3CjDoJHjJ2UjeYkJCv9bGoraiBR9s3CbyatwKFMZQGCDGKtp4u57DgvoJEMg2mfQuqiH9vwmzT4g",
  "key3": "65jaVujbdaVffhJKLMW25AHGRnnscYo7CW9wWk8VUno31pnALKCo6mWVEMuEcvPsUF1U26jfUmT9GsxoT1dBqonH",
  "key4": "2g68RWXLRFg3eNsz5xvfDHr5cgHyY9jgmP1UiksSeJoCsifFxbzF95ZFbGGaM1hpzsWM3bPdpHv6x3xPc1Le75Kr",
  "key5": "2VMMNqCytEDunxCfSmMDEhLVAbPSxvNKtRur2MAQMwFpR93g8vHnyZNpzDKKhT7RRyvD8T742dX271Cgp4WGQfbe",
  "key6": "4uuvqYwgHUyxZePcgEJTngUSibDQHFLf6psoeJJueBkfn3UavGebHNGd1iD2NUEGQesUw14qnGqxDibwnUDANMmR",
  "key7": "25nwaVKWUSnf2Ye6nBvKQP24UHnvQEou7pcWabKDiui2nmg3AgGGmm2PWH6CT3pxJ7mw8yre9xdiaHjQzh4MNQdk",
  "key8": "43jpo6x5x3ZG4ETbJXLVPtRTqE8rVZuUJmKyvPzRt8RrvYWh8YkgazWVyMRDMx8Zz7U93jYqELNWDWUYhCz4mkxk",
  "key9": "31GAsPFCb7rQM9z1JwkcrECpAn9tiSjowpqASsmZivWdqDEPg6t3YemeHy3LjKE2Hnb74qiqgDgL5nqiRQL4xSGj",
  "key10": "rE4xfzRwMH4ZwuyVpJZKBGhMAMUr663Rw5fNjJXgQbVg7iPRuwcfVejJaiLJfzYtjAjDTjVRKPapQgpMvQzv9ve",
  "key11": "LidbskCiFg6QAJYn2Dgp8hCU2qNyA9wFAmcLmN6LvgH7etMugAmm9FQdw5Hi2Yes23AtoC9nG1pBQyT4Na1Ro1x",
  "key12": "3CEjqrNuyuuVHTeoVdSKFaYxS4qaM1GUC9BFwXQa2tKLHvhiuB94Pt7vC1WmYq2a8QwjrdQPJchgmY6VEX223kD6",
  "key13": "5hv2x9A3HmkkH5j6hJwdeGkeASBsnrbJ1NJj8o8YyTddX5Dv7jTgRHJwa6e2jKRKnmaMD18UeWy8XoS7KKS2L1x3",
  "key14": "3mTWiQ3YUGtn7ef87zSxGZHMGNcVmMzhs3kaFuW1YU84k968NP4KygxABKdFgFUNiDNjthuaASS33VpnSjT7mhLc",
  "key15": "544yg66L1wZpuGFXcz3apJvTBR9vgXNhGmym5sSd9uxxUTq6tuyKeTR21kd9uQ9gbDMWcafL3yHFbpcqoJ3h35Sj",
  "key16": "2ssaGQFQ2494ghWzmLFEWLXn46yxfRgNBABautbGDQYmgwpxgzc2GJmeUWnY1T3uNbjs3dgV6oqTQszeNFfNTgZo",
  "key17": "EXknRmqYN4a6VdeFLF6BVXZFReki8UPuBDMkAUENWRuAUG3a6KS3Lh1tdobSB8V7jLju3h5E6s3WPCp7wFQhVag",
  "key18": "7PAhpLgmz6TCFJJrFqvNE3abhkxJtD679emGFDdvjpLKhnbQTWWCJKrzmWrWqUroNXfcdscVn72R8mBjyTKW3yX",
  "key19": "oiumNSwUY5PS2WKNyVvCqjKoBhM3hye7bk9bjsRTNbyqGram9ubbJkP3AxNf4UtR4L5pC6PskPLApELegKWqVmy",
  "key20": "3SPnM6iRsqjzqJxubi1JYPyRi8qASr88HTZZNEhBgoN5xfhEsoNWoUqtQij2xP3Y1yMkAKFVBKVbdCCjq3Yc1tCc",
  "key21": "2fDhzHpFnELUHsaxcU3yoGnAueDgfYeUvAuYQawPyYdSb1ehAYcZy1Te4Z9f8qZ3sSNNcU1hmPQTYgwneWmNZJQH",
  "key22": "4iEJ7XCiTp8JZat5bqZpr8vEUjEuqKuvGk3GJfpcY2H15YaDpjYBpxKvjedy9QXoGgcpMtxtfEDrEzkuWMWTHuYp",
  "key23": "2zSvRs3AgS9Pfd1oHQs7MzGAvYRMxU2BMfeTquDuNoemHTn8Ck9oBZxx2un5MySeBJ2QHwPebQP9tVopzkkizhD7",
  "key24": "65CfJ3qf8GN5NE1hrxWsLtWy5DrwtSjbtXRNmxRUaq7S7kWD4m9465h8MscUkab1rzbrn18KKTHZqWTi1V5jBcxp"
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
