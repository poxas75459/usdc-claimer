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
    "LD14qxF7md8kLZWPzafpGekGT92dLXEJwyQNkVo7jCAJxkfobTMpyygnhXSpX9SAbNdeSxiGMX9nXzBMbvtaRqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQFwMQfwHQyX8Rjs9qo9Lz1jq2AZKjwsLdgY1Nt6pWKJ7jUxziZx34qCYcen5dWdmfLW77bfw4wqvsRDH5U2onZ",
  "key1": "2HzLwVRmJwFRwFAHuTtiUM38Yb1Q5g4eAGw6qZPfyj7Fng1mdRYAKTCfcEZwcdq2XGP6pXQf6vKTfJSRYSaq1jGX",
  "key2": "3bQwEfumVAyeHJdLZevfVpL92kMJd59Qhb8ZbT478iD2aN4XXZu8qwa7WHHqhemL9D9DR3sX6oGjEwDqbwmsW7cq",
  "key3": "TXHZJddrtJa8jh92Mgm5vS5JKMNaTYxjNmAvUwM4PbGF5hj2SencAfkj7PPSs8345CcQfy8sSNvUTwxFtsDmihT",
  "key4": "3hTzsk2rFLkf41dTcZ9eu5JmMg3HXmPTeHkN8dbKQ5PPiV3mc7kEVtV738iGQV8Gvo9Hrnr9PiSd5waKWLZKsiTm",
  "key5": "324VY3oHU5RNiGatMAReGjEsgmTRE9Q751nqNH8EWKJvssCP6DBT3Nrhch6dQQHz7EiFd4SSx5Y3bLGtiKnZHmfS",
  "key6": "4pbCVgSieXYYCztbdXrEZVDYzMQvAnoNoUgzpJdNo2ppAZDr8zuqSXyXU2NZzyNbvG9GEdDMjc6sDn5gn7xAxjr9",
  "key7": "3b8XENqC5dz67oghHA24hD7WHAwvPRTek5CHSUqWvP1viJR6ZbsR3iip1cGzrmVTmH9KHMJbGuTbqX2KKf2czcF2",
  "key8": "4HY7M9Lwb6zVwHAEkcXF4Epx81ASs1PPuXn2TsKnRVmu6YNtxwY15CzVop1acdgK8n4qJ2gR3RaKpbMdxJMn8pKt",
  "key9": "5buuA4tC2LeiWPujsSZJ7F1CvjUNfB1nf7g6bnd871wstxDsytVEwKqsaG3sEBPfo5dgZehbpFginpqng4vUKkSW",
  "key10": "dUmYQwVhEJQSZ2w2j1CyvvvDX4RAAkGDwKqtXuThVbEBjLErgqRSe9QvXBQ6cGhF1UkTtXnExmdTxVwjpGEGUw1",
  "key11": "5abPeEVQQYDHGKyZZH8UMZGRdfAopf23q1FdPDVs8hEMnevbRuL4zCpoVYbTKQ3ifMsNvuMZVXcMv22drEasZFnC",
  "key12": "5YG16E8onTU8eBNmdAdy5M7nUnqaT91e8kBqKjf4KkQyG5PP3Ggs2aPyejeMpTK7bEB5bRcekPJ7ok3wBRBMTrpD",
  "key13": "sXPHnTU5drzwkREahSE4owSUGSXBiu67iqqMxh7HpGD2SXzHmSuNr9tiACVDc4GCLSG6iP3awHZMyrrG5AkPcoL",
  "key14": "Y9bYvzWkZyQqTDATccDuR73uFCZrXfbGqRJhpPYRcRtRMBssbNWrCD4Qe9hq3MaTqZFqmFsLn9YiB4ExbuZoKYt",
  "key15": "28qdmnYikNxXTUUW743hwXBaKotPmsm7vk8t9BagK74QFWcHdPLF9T83BWDamf8WHCXzcwP4JgQyE8cUiA4LpU8Q",
  "key16": "29917XwdvwCFtHYSxrzKWa7M8eMQaUwuLWD4voKho71GNf2gUAs1YsgvzsxqkuUtzoUhTAgdBVVDhhjrUiwDyPK8",
  "key17": "tUUXSYTzotxVAhV8zdP679z1xSWB6QafYwJfYXLhsgG9fRdHeFktouCr3NqgBf8pqLrfeFTjTm9bKNAJLC6wQWG",
  "key18": "sQ7WW7jmLhNYEgEBtcGcpbfVTuJ4HJ6NfQfCCEJuksyFucg7d3y4ft7n9E6UCKJ8pWqNVntfJKMCFA89LNDE1nE",
  "key19": "41Wdx9fSqoQEaSzry7XJ3o4NSkuvmNqSMEg14o2Et3e2hEZctCMpv4mmCdo32kLhSyFWt4vD67JAX9B3EimUb4vU",
  "key20": "39rAYfEufxvqdKn8arXKvjNLG5v6XC7UKRGhuLpsZBdmjtZm3UYvdYX6FZkjPEJUJbdWuHmeisHgE4s3bAWPCBni",
  "key21": "ZWF6e3XKkCCd7FX2DPLcPyzRf5w8tDnrqKk6CobH2ucpVMdNEtNYPuxrMHEvYs2wJRZoUx9smuwEyh7T4avzedM",
  "key22": "42upDhNBZvRm52MgdeSexRryWqTjobnBQ58RvAFENf47VR7ByGEAFRXvS5Yg3iyZdenAobxWYXtFRhXaUMQyis9B",
  "key23": "kq1guNYj2wV75UoJWo5Ewjt8kYPG3bqsHXu4MrCctsoEExkqGHjsfcFtQKGLuWYPWm4s3whRDpirFXEoLoXLkb3",
  "key24": "4kpbvPAuULiLqmcX6Nn4Bgy5yj2JmDZqJ7ATwRK3iXhcyoJtkegXn1XqBn41A4mZxg6PxHpbhwhiZkEdYZiqJzwi",
  "key25": "2K1d7Zep3rbCzZfj4BpbeADSqwoZ7Lw6MiutXvcH5dDi5mvMFnjuVfEYQ4kvKGuWe7hahQoPgpsvE4Vg7MdthL2F",
  "key26": "5hw6kXRiPKYCxyEZLzE6MWtQM6GyMB1Z6F8V1YCkrviurSirsr3ZUKyRCHdPUZ5VuUMs9DFVJv3iFLP8DMQADNLn",
  "key27": "3vyao7PTq7kmgHtJqfx6cVJorMAsKfx8dzKwScZCDWJsGfhDFhJydUAJsMprsX9TE3gjGLvKZ7Qq3aUR8SchrMwh",
  "key28": "34haSTk6gPHb1SEYJSyreX3xSDgjtX2372pAe26oH8uU8hULZdQ9tbR7rdqsGd1SpFmBka1X4C2qXrrWt4xcFpB6",
  "key29": "5PeuiJU43xsSqq14QZmaRjNy4qrDn9N91fZgrpHs6crfSeU2YWGfBvmogbJvH18m3rbkPNJ6JQCQ8sVV4AdM17Fs",
  "key30": "57KzmSzZsJrQKJWw1rwSNcciH7MPo21mZkYTG6CXhK2okjy2pXjM7VmzGm6xTFFUD7PD9tWd1NXt54YTDFxrd1kF",
  "key31": "4AxacjKigxJX7KAR5eFrSJhP972ycdyrshUtEUouxNe9GBhfiEVrAW6oLDTgpAkBGgZ5mkr6KCAvDWCeDNZ67RqG",
  "key32": "4D8iC2fjViXn29o1cytWQZjAN6FSS6yq4naJKh9JpzwSn9Vmo2VtHbkfg8wPNH99mPfct2UVqHZD44J4FdymBJQA",
  "key33": "2X7zNQvSTN9KbbnWgoDCA4HmsMqD6PbJ9SpSD91rw45gTEURuNNQP6zRy1T1xUrGYGMqr24uJ6ErfsmRRDuTrSUK"
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
