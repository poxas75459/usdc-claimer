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
    "65dJ5sAPhzmWtaCvnq5FPDyYHG7Sodpe9eZr4BRiPwPgY6fTgzbKZKp9EvrPvKRfrH7ZgZtjrwQ1ZrcPU85n38rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wjwdx9PLz9uSbCQvksvbENF1YpYQD2UVhiM7AV8jHchsLN69iSDeEu4i9qj5UGnvWk8jJ4u8f8CV76m9pajXgst",
  "key1": "5n5Ba1ATTzHv4Gr4s5r9aM6B5uN5VhU6EiDr7CtnqAKWS1PFEyrXhjAWgvy1B4Qahj86JzZHTvMosxJm1L5q6G9h",
  "key2": "5h2fukuCE7YHSXg6b89bYVRjAUcPkAKKr61gnH1HChJgPkyEHNq59XNUtYUX6qbUbdWZzwMXA4gfQiQxsJopDyZp",
  "key3": "PoAS2Djo8SUcZesHjgLc6CPkBVTCk8aSMpAovtzmVHGPQQha5akSswaaTSV1ZFiLHvBxrkDEZan2uRAEdi8DNHc",
  "key4": "vaPCVvDxmLUc1b2TvCJjRbNQgGTKQ3vubbr5o5fWGAAbipJGimxYyPCnAu3GYvqfaezBif5Xe2vBZE2e8sJw5oS",
  "key5": "57T6W5KoeBcDm1Sc9EW5HeoLKu7J1WCixGwaXXjg5RAMoRPBiHodHPZ5Uw3jxmTQdFHKTZWvAZmbxXpbCcZHbhkL",
  "key6": "2He258KkML57qj9gUZsBgAErCdZZzSc4fA5Rnt5tbZZheA49giVwz6hLYx9UNrnqQvkp3KScDQ2g7r6Bnbs1n7bT",
  "key7": "QVcikfLXjcGA3BDZ6qWrbbWSSfZPZGNtAruT9mMt8Kunujc5YGRy9NBNYQcmhg89TPy4nBbJRjY4iUsr74jcn6D",
  "key8": "63BdRLwzvVS7rFZFYzKESdU7SyXg69yj7RHBVAhwzQMqBRroqLBzQQb3ZqU7NmhpAFAnk1Q7dLBiwZhhCv6cJ7wk",
  "key9": "tcyKozAmuUaAMwDizBfBGowVyMp3wPZgqJ9563stZ3KEsHiNL9fJ8jdTW6BpJjD4eQHxiFdAshyfmeGiJgxC56W",
  "key10": "2S8NhCMNkR8HLy3dK2xVzCjU9ojwSr6aGGH4Xd8CrVo91QY1mGk3Vkm8hc1QTT6Yas16nDhRLVyL1GNJZNneY9iA",
  "key11": "51pSnZVC2KcQHQ16iNydNLwj5UQgEZHmJX7XPZphZHTnCJMChtYBJuDjd16aZ3TNmfSMCVPyGJkrFbzh6zPQtDiN",
  "key12": "3eKz5EwCb8PZ5WCz1PcUqnY3djdcFXmyKFdTsfF9HC11oEsjkt8JaD58uMdNyTcU2zX6zZ4DbiMrZqNvjy2Gse85",
  "key13": "4VejLx56RbE3S4aT3QADrsSCxCN8NJKpVFQzoXhNdhyKKyeqpjwFkrFstuHXUDYQKDeKZm42ViDzsddA1WeRnB6n",
  "key14": "GoMx17S77QYHxypvfCjkhZjbtXM2giqo9MmDonARFb9QSjEhwMxFciPUEk4iXzu6Fgg83xpHuVHsX7eWxSh4eYd",
  "key15": "4BeEhLLvAt1uP2gw3qNBts5s2YSgyEnnTzLMCVYGCwqswoc1pmndjjbsb4DkQESF75xEz3Lpc9D7CpDog78hSQ2K",
  "key16": "c83WaZ6Qeg6bMD8sy9WmpugjeaZG37JBBRmv1LVw6YdEZjDNC8WUovyzKPL25QdwstRTMPgCRQZiq8sNbMy6vf6",
  "key17": "2QQkkuZi5XdsKjnEdHVJJBdsfkThHgjxLS2ThnduDEPBnVhLt63G6pEaks4P7RTmq5LsfpW4SRx597QFXY5JhVFb",
  "key18": "2xhqyFR8X5cC7SZsvapmgb1NSGwmK2cjYyhLvMQEfGUGQdKEWsRZzMExzpDz2dGA5bDg2LQFnH5u2HVz4fJc6UEK",
  "key19": "53izJSCwNKE1Djdvx6CAZ1TfCxDft5eXsgwPbfWrYP19KAnmB9o5eyLTwuALXwtp45PGXsQBiRapWuafw6tmddFn",
  "key20": "DGkovEBC6UJ1DskACoS4b9PQE1dKQPnuzq4A6wbrTbrVeFyxYjdvctBjGs1uixp5CvwoRLgLw9r6DZAKB1wc7n4",
  "key21": "53JAwKhgVWPg2hVuH3pKwKBLF3M51dCpWFUAPJgaPREKsFthz2UfYHh4TDA2cC5vM4zYydY4FWG9S3hY98uqxvo4",
  "key22": "4YsLUfx3b9kbdSFMrVs1v1RmJftCwgPHGMcG6jA9aWxkbtFHP8huCD6sjKyuqQ9K7bysApdwRPYjTDKHHPRoEmvq",
  "key23": "3PVwsWGonTzV2oXKaCpvMfC1j7Raw7sXeozagL8vBZMDxP8QSuDWTGccN6e2bv24aLbxNzLWqDbkCcqpfjbi9gaE",
  "key24": "4He3NSfH84Dsb61HgEfnfANoSvzdjG4N7fmBCdGHPMVavYT39gKhCyvgZEtSzLNQGUh9wVvkReu6hqFk42Bk8UpU"
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
