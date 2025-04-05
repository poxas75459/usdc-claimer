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
    "5LNEG1wnFiAUjUAhjfQqaULEsBfs6n9KCdY83HpZubhBPshUebfpn2tjzZtiqMYLs8iX1CV5AJq6VQYRAAzezvM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vX1C6TNVNFXGdyy2AnEdw2Va4ZnksHgRr5kAjMc5XCpG9hdVbSWqvheVeVwNMfWHPFCScYv7cGMBd2ezZJrurCU",
  "key1": "4wnGxivXkjDYEsKkyei9LS5w69n6jp5Lc2QaC9TbcFhY1gekQj5L89RUW6G4QikEiHmKpm1fVd3cRkcxhTWCaFSi",
  "key2": "31iN6n9o4PcFEFYW5WfcUVSeyrNi2jrYMfV4oenVWYu39UJ8mtPo9W4QoM8zKiRXCXKiBJXrhiDi94iqHSfv1kYV",
  "key3": "3y7YSJswZEWroBNAaqAE2Ymhw5Y8G2t4c17fyUNgWRTyZmvPo9r69Q8NfTueQkdFd4aY3rUgjeCdgRYURXdGgsnA",
  "key4": "zboHhnx8vhBFAeR5oGL4sJpZfYZQ7RdknwuXGGUW7NeajoRvKkng8rYkKPYnCoRZMcdJbVeJaixQYRLSoRdUDEZ",
  "key5": "4vffn4TKXeNsTf4hiGwmtrCFaeVpFQD43EFafP4zyowFttWXLHxeTKn7sfysA6k6Tw5tsPpcpnQNhzuNh1RNuGDN",
  "key6": "4tPVcmpFvK7fYyhM7VfZBfWKe65UkuCEM1TTvaD4zV26AP2ywyZJHYjfk4uDRH9dnQTQoFQysckaXV4AFYjMH9cG",
  "key7": "51wxL3NMuUSmcq7CcipiZwcbozAFd5Lo4g2BTFaAuGYpZ6BehNTcTErUo9vf9WMAAbDM3ZrF6AzqAKz6rfv7Qi21",
  "key8": "3gAbZCY5zQKJ1APoomxARpskJ8TGUoSN8DrzbgDobtSGU6cagg1yMUmhutQr2fLQ4W7FNrgL6yYGLY9faXHes5ue",
  "key9": "3meomsQBhgLmQzbqc7Vcook4cHKK5RjdFZLktsHLzon5MW3a8vHARuGL7hyUGZQLt8M6rWzK8eUfuJDQGnhGQTeV",
  "key10": "4BTmoVrRRTNE1W7AR9mmLeUkCoipb8Bqd7umT7YSWdZUQNeyrvktXSMxC5hQbPLZ2ujKuGM6dWRngK5yKpNkfqLK",
  "key11": "4viPgywYzMyUM9U2zkhJDoLE9kkNuS3ouD7dkXpY1N2mr2KpPJjvsqqtj7VpXPRwArg9WGYB6W8ALWMfcFfnjELD",
  "key12": "igd2wmrgm25CMeTwDffrhEZTNoMVm4MbUbMNMij8bgK5h1juqsdmz28jACxakGYT86jLcjEavdggpJxVmAh1SRc",
  "key13": "2AEiAwVahhhzTwWn4QqYir6PZYQN6PjGQnFiZNwf2qW3BnAfYEpuUaNGraJ2Qe2oBaiJiS6PfssZBL74WS9WWrf9",
  "key14": "3NgayT96ZeiSH3cEZL9nmp8AdPA17C48a4wJByFrtg7Q767MS9m1v2NWiQmcfhrQj8rFfvCvArr9FgN22Ya3fTkW",
  "key15": "3RK5PLbNJDYZXUEXaHUJDh1se2oXF9SG57oT72rzL3gu6rcAuwLTmQ7ziwQKB1xJKfeabcrb61XHA8SBdzpwMcD5",
  "key16": "5MgsdZeip6wDqdfaKtKUMU5PRfnAkeaCQtpwa6qvyzQ3doVc9xh8bshA7d1gN4m6xTXPAv5xjLCuKtQgPX38eMYb",
  "key17": "37U2tpLPYcDm7Hpu9ZNg1mKpWaR5sD4KVjcZEcisQtDDTC7ZEFrux61jTqrXJyRctR159XJTPBHKWhZ29e9ucfi7",
  "key18": "33bk54PiRUK42CFbgXP182jrhsz6KDVyBwUf52pXpufR8XBayr5CxYpuT64JKCzRRPiuoxReFQCVxa3Jxq4ywRht",
  "key19": "5roYdRaUQ7eNcSQJgh2qyut94onVcQ4E9yhBwt6UmMeoTtzYkdEGA4HrX8uWekPxGMrssZr4s3QFnu6QB48BesYK",
  "key20": "3vTPWUqzRBgXLGJkH4jvaUCJhzNxWSnNHa5wPGgKceHjfksqMRHnaCFZsrysiLtLWRpQRurfE4rsoBJD9bQmSMmY",
  "key21": "5VRLugyiFQ4VupozBZvsT154AmP8TEaVMM9TzaFMTmkPCpLZoPK9AyTeaytJ72tEE2zoVJDfkQPACGnwkZJkbzN1",
  "key22": "3bSFRzE1vdivJvDF9XrLAhGnrUAvmybUE57A6DDzEoefmvyZhpSgESnuJn5z1M3KDvWzmh9zDxVDKyekPSUMxktA",
  "key23": "5h4aTYSrCQ5TemM9yVSUbR4jJC4wCGCLzCWumJcKv1Urg5w3oZYyeS1ffi73mUxM3kxPYivCnxnvXfybKDtNoC8z",
  "key24": "2iKQSnXi24v7GRNtqSMFs7F4Y6pHzKFfURBd9ToopVBXb3HgtzAZmYgfAyCa3W5ipw7HDUvyFSchq7ySQhV5Hugk",
  "key25": "fi4F19aD3pFw7FQ17WTosRNkyGMFHhUdqoJ8BMWcarpy6Ae7iPh6yNWH29rwfBVQ1dhSX6yAFaUy8kTwvrF2zei",
  "key26": "4x8jDcerx44oFP2etjrus9qQjEBu6mKTbPYNygdQXc8RVAyWA2tULg3tu5vB8w8ktfebHyz6U9pehywFTxurCX7v",
  "key27": "5AhWPv5hF5giunJcjuPCBuF3NCPq8fXKYo2uKcY2gQXLrEWqHgwo1PareRc8o2wY2kmTwvM5cpFywxm2LFpFgeu7",
  "key28": "9eqwkPHNeW79LNz8K99ZxBY84QsmyXozEBuEe6tPmj2cTE7aY9mShcSrunUWvbPZbfkmcpynkq9Tt3KeJfjTL9v",
  "key29": "61jLYuyi3vvmN7ucoJv6u7WHnkwCjU61MMr9w7nUq16raDkxaHW64navHURZwXNYSQajQ8TU2UvFh3JbT124DwE",
  "key30": "3bfKxNcdUJr6cGeTBRgF5uYiW5xCX5w1JLvv9nrpD8aHkf5PoYQHsiZEJnVZQfbhntZZMuZ7pmfU8MaimKbCNxEc",
  "key31": "2KLDXtkF1Yrys3cfvxkWpP9tCG6kkmCnKwzZ8vypQ4t6pqV8Q4S1L5N8FY8GqA9x57YiEgpsY8Vn4RKFvcHTLD6s"
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
