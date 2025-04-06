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
    "gPYW8txUx4yPedD9zJN3AJE7gVLHgX8Nryr6uB3FLaabG67VhHhwJkE2FjqxMtQz55SNsrwUzHXj2xCzK1fQ4Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuLLhBNpQCswWT8MsCWuCXswbfnvDbrcBfEdEYgo3ixoXUVXxoia79hUHZzfVmjQJai6mFzg7sG6QnahAxRn5X2",
  "key1": "4WLMqRs55sMNWKp12K6JCBXeumDrHx9dDSmXAndA5w26bjQmuEmTD3NTBZ53qibAYzmxQ4k8AZ94yBr8Qy1Jzjnt",
  "key2": "3PXSQCLhiRFTBdve8FLc7KGVxU3vhEQ2kKpbWZxKENymMSEjZA8MpCqYEgrUBLZYDcZzgj74AHBirfy9kDYA7BDY",
  "key3": "59rjv8yzij1NEBTp5JtJkRuWJYZ2mQmcsrwpF33Y2KnxYKKJUp2xH1cFra5eof6rxNc5yUak3Rc7sRCqK9CaGNjt",
  "key4": "Bd2NysMsZ8TW3Uf6yJBVLZ3b5qVP3aj7f1mHDhznQgKrycXKCQvBpQsgZ2SathjVL3G1thJp4RnDYKB4x696FE9",
  "key5": "5GwK4ocqAiAsnP335KETomWah4d2cnsxrer8UukuKbni9HGaVtGd1TUK9mu7dLRuXQNNK2p9DUnuRUAHKq8heSXP",
  "key6": "4SnEbcfLFg7R8ahL5Mhtv4hu8s6qkfcczJTdANoKG8oyvJd7VCs7wct2fqG1qw4FdNC5CJM3rEzXHc9cogHsLLCs",
  "key7": "4GUCYvKUq8zWmAd23nmGu99LhHbLDWGhQhkbbVGV2xUd2aspZ3xBMZJPA2pR9GJmDqcigk8CXcd9B1f4kRv5zC7d",
  "key8": "2qzjZUxvN8oEpAret4xjErw9tw7Uo4J6RyANEBcbHRRJ1uFR6h275YYnUUPRZncWmSUnqL4ZEEu1H8ZQFncNjbG6",
  "key9": "3PnMhWzStfQQNedTqsKEv4RH2gkynpNaFc8H9LbSJTL5n8LtXrgmTB2TwEN3UhHHsbeyhWK95mmC55EsozRUFnmP",
  "key10": "Znchwqwpfdx5xZpZES3jdKCRpcSPVKAWjoS6SMeQVPnpuwZCdqXHgLsVbLsyVVxfVGNQ3QarLFpUzmwH8WQZFJ8",
  "key11": "fryL3nykPqsYBQUKQZnLNU2NTSTUk5jk2Z17iUCMLpaVbkrVeBmK7St3Za63vSji9rm3psDfVseH2hhreo2o2A2",
  "key12": "3VroXYAef6DwoeK1KxNNhqSH9Cw3FhNtuwHijBKJWcnVys6VkeVd31GLyQz21LwiDJfESXpeb8C9VHTuYza8nhLh",
  "key13": "4TW4ntKASzYDdsaA2XDp4pWNdPQ7dYdhMnHZa2fC8seFDfa3eMg8UfUBvdgJBnFY5iNSMxyHNqg6yusari7qixci",
  "key14": "48UPkNZXjyBDkHVbTQSqrrHHDqh18rAUbkWRutKgoKMjNfRR2gSYpyZjM6A1meiAprjjuVtTtF5G8aUuaWtHN2zU",
  "key15": "4wZfrPEPPTsHTTC41Z7SCLamr9kBquwDh2Z5nJ3RsDeoRMSGZAQmrvhzHVZqjbtob4pUgNYKrLb11dSQb4puZAif",
  "key16": "3WeDEa7LJWGE61UCGrNVa6cqdfW7ctyPd5UNhZa6ajHVrFPgsDLPptDbeQnspWq2wyQwpysXjXBz8vN6bWEr5xi",
  "key17": "5HFp6CmeTnYi1nR2xQTsAF2uARi5LLhkZxM33oTJpfQ2uaB5gRHpmUEyKQL4ryqEuEvefsv9EVZfTHwsAoNh7Szk",
  "key18": "3GKLcLU5pX4f7ifKkrAzYNmQZtW6cqbpokJJzGPhyT7wbATtAPsgsqPXKXeA1L6LZgokZTZpDypparWdPKSVhWMT",
  "key19": "2DbgFokvYdecGqpoFhyDdAzeBSW7Yjovj2qnKS3z3LeFg4D6vqieEvQbCzfMTb6cn987dZN7XyHCQ9bsm2e1CLar",
  "key20": "YScSbLao9QGNfSBYRUEHx7tYFucyGFbHD7p9a4J7jHXqjG8oCtcxGifi5ycfdScU7vPU2dfSq3SNJ23b5FjeJMU",
  "key21": "4soAvd9WjnGiNMNwDgkN3KjSWuWRQL7iCAxzoUssm8M4KhFPrZ3RTQJqwtP4e4f9B7UU3zZ8mXnMaA28guUbHpbk",
  "key22": "4E5KcKojr6fuSMUoYzG8ZKibx9ck6FKaEj7buXN2xfcbsxir426PEY94xgNZXjQJAZkEozev7menH1xaWDjYpKAR",
  "key23": "CD2H4wCgkqGAAW3ahRD6Y4jpK7dqJoiRH4RUwpEBA7w3D9h4iRU7qxseAWWVgs15AAZ2vhiDJPrSVCWBeweZWei",
  "key24": "5A9LbLKnZGFEYhGfk2xEiwwoHfSKcVko2qNwGWMoPjHTBXzuSiHAbaQtw3KubhgmNZvpTGbxPbbQKs8oLN2HDwkM",
  "key25": "4Dtc9Ddd6fx1aDMonDzGCCLwdGS2HmAji8LKthR3hyBXz88k2iVHHj1xcE7b2PG2GZ7YJQoCBLhJ7RUE8hP1fBTR",
  "key26": "3hxx2pQ682b7MGR5SRFJ8sRWMsLKk31hs9V4j9vryS8metNAkaZWE2g94rnrxwbMfUVCKeAb9x5AERVJsCFHCE3r",
  "key27": "61BPsD1sGZjiJrzWuYL7VjAeU3FrRdFPLkkkQ7FPChB8Aas1jhXFYxwyWsfJ68ZRFN2ztt7iYBQveES4KVB8nCRL",
  "key28": "1rVQ5ByjNRbsUcXLyScoJy3FF9GV7TpNVAtxSUndXSqGF4ZtAtYmGctFioqwS7wW57aLgxQwdoAbxTJe7gARqiH",
  "key29": "5aaaebXhyamfuc7NhvcWncitjdijp83wTqj4sskERbKzReuKJ2dkuZRLwLzrqkmbd7S1mVqEZNg9tjfFNgNUhQS3",
  "key30": "4T7GoqsbuURZ8foHwXtH1qVQTjALTjZVrUrjjhPRCJjFuwLk2q16R8zH4MrZmH7E4D7GRtYrwRqpqfQ1zeAhCR84",
  "key31": "VJzxJGWCQkdLrMCBJ6UJu84CWoHixuHiCowxWPo1HUiihF2C1NLgkqqBRsamzqbVC9uxxpdBDKTxg5GLtN5ghTg",
  "key32": "3uHviw9uSGab2yLAPGfCcrZ7jUyJ9qgfpMynrz4asH32FMcvAq1QeKGvqSpzU1Xtnofw48WnRpcSTqPDmYu8M4KM",
  "key33": "32mqoPt84x3ZV1Y7QxARYgrjdv1BXHQZ7tNNkbYe1f68bGg1syXAUDEGdQTCvW4MbGL5g4v5iFVwXmq1PW1htLfz",
  "key34": "3XBjCAatVPZzCj7qF96XojnGbH6maW9ceyLezWcghoeZrQqx35mjynA5b5HHwpiaKtQC3dZCDUgwYojafHD2VWzS",
  "key35": "3g7UeCrYZT9o8ZCMxCkbeHijwEZRX4icX95A8r8mHG9bBa2fA5yhesfpa1u7BEXmfGsiAnYkorzCU38Bs4HgYnNd",
  "key36": "Q4QGvzQrBBSJLmtm5JLTXug3zeSTCZt4efk9Q5juBe4s8EujRtWxDS3kP1K9FsxhiWiVd3sxQQZMtwF4WDG1Js7",
  "key37": "5NpfVpM5hX7qajSm3Ci42YzSZtmwQZkBtRUMfoVbdru9qgwVLxHGK3EsPag528CiuR48MciLv6oUTbz97qhx53PT",
  "key38": "5Y8UqprH1NKXzrQto1cHbV9DUBT4ncQdeyWRd82J9csw1hAH7hbBkwxY6Esrmk3pfwrbDHPnPJP6uaB3pojPwbR4",
  "key39": "2Fxn2ywvNzhWvLAwfhb1VNs2vHqATY16d4mnCw4U2czs3bRpzaUbt7fS4jQUeFPzYseArD3gjUzZp5GYt6fR3mYt",
  "key40": "4Uyc6MEZ3VdVa5WjGRpBiykgt2GFK6Ja7bK88gxsCYjseNv8ed9QLGUCqmMgCgampfiMQgPRJYsFpAurM2DaNQ3U",
  "key41": "44xcDyU4wXse5k1oGN8U6EJY7AtjYWeDA7fXvLt9YPJ1KbrWy2bQjzuoN5geZVLYwn4Ckx9NjX6aqskEymFZmv8s"
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
