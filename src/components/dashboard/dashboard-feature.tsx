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
    "3HBzJzT3tW332JXVwfNJMe1zBMHqZeCkeg9jgja7ksvSxkQ4FNHRs6BZw1Yw3ukgks5msVCS9WBw5fXGpRFvGRFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EN2AVMbpx98M1ijBxx2Z7qiwSr8zkRHUY6vLGmRbbKgGU6dDJq2EhYmjdthqbH6c1xZc9fiLiXPipfH3QZ85wc",
  "key1": "4ZfbVj1E5uLFYxGPYypbfAtLzFHZpri2wb524oBFNRDkzASxLNgUSnKg2rnUrBWsQwqbNTQ3YRxDWFdg2pjZRjq5",
  "key2": "4i5VZnYipqXiHmV6TiaV1ALMnH5mmRtSmULnsNt5kGUGoKJxQTaoyPzB6jVS5pM7LVjJmk7zvxkqmF9f24N7w3Jy",
  "key3": "34qNbnDNQfWNnEkZaP8ZngiYN7jrdTcN2KzLDMobYturqT4j1BkABfm7ULPLoYJmSUoYnUKikBS1a91C89VEpQ5o",
  "key4": "298tC5naHRjfKM97dReDvbqYEKBTmP612M417ds7brLRBhwS1F437srosetPQdvVqavkfr2ADkrdh7CwhJAhuzjM",
  "key5": "413QdZLxyrkncBB1pRkVZYZP1rmNbeAcMN4nUv9Ggcn9b2CCbVPRmUnt77YMJen36fP9ewqFQLbCPf6sbPspoWZW",
  "key6": "25BR3qRMc2bqDyz8QFpv6TNbxhzi7aQjBG6ty83TzS9mqzXFLGJfHhbnQg3rkdLzSV5CtSy8X8ShRZ4GWptvHjL9",
  "key7": "YEpHmPrCz8BwPxCY1FS7ULyX79Lp4a3rt5zQophLzVbrXan4wAodLbBiGspHEPjY2QbaRmPuSg81ZQgH8UpPTCr",
  "key8": "4H2npZ9c1i5rUTHBPxK52y2HXzVhVt3o9XwsgvWMyh1sgtrGkmdUZKaDM1MDnPd7wASqVQ4qiqR5etvNHe19fvDP",
  "key9": "2xhfNcJktJqZxYY9hCkZRvMShJXYHDb9Wd4frorr8tWqhDwTgpDywrdZi31atuefUuQKSy89sKgQWGhcHu5Wdu86",
  "key10": "PTcrhWhrzT5CT886S9nqVLgkhjhTewn9Yy49htkjpPs2ibirUeoxFF7xZrtFJQeo3ELBgCMcMPTURUgNx2EJEaZ",
  "key11": "4GZSRyLestsqZifnWB1guQcFAVFujzy39cJKbgah9gV6KfRXX3wW84F1VexZkpNZyfKAkbQZWXQTZsfQKjLRWveM",
  "key12": "25wMdTgbYeyAC1FiH4JL94mqTZPqFXtZEit3sCWzk5hEwYLd1wXNJs2gC88yrTvispg7eGmaKPkeZetuuJMhACBj",
  "key13": "nrAsKiDqMovBnWMGvLe7Lhvb4MmzoSHc2PN6gPiCgSWvzWTkDGsbz29PruGYEUmCY7bueXjSku5v9JP28YKSQ6w",
  "key14": "gswWaoTYnobMFN4mWoQLHKHCAZK2R1BKNCYApZ3MwBkTwttuKxtBXj7FcLuoujBBuncxpMRQEdfiz2mRanbr5Rh",
  "key15": "3oodQX9LR3mfPMq2VmHXG4czD9pB7iy3VxxEGXrxwbvC8WbuiNKBSF3ZrAkM7YoJjCoCYDJFrsJfNaqvu5wACzGz",
  "key16": "26vNmJxMSdAnKUsLnruCMTph1eQX8yuqSHxVP4un8C2YS7FNBYaycf9dxJGyyN31Eg6e37rFZ9DehTzovRRNrcm3",
  "key17": "5XZGA5ZTLugH6LBgjrpJzh3SUdLCsW7q4omAVBbgQ8J5d7daskd87VMGDofC7BmWRAFgV6RWNHRPS4GqBCVEqQXP",
  "key18": "5Q8jPkVP5FkQbEJUb1aMkxVgQJ1VumZ4SrLJxwPdyWKufFqDiXugCAocaTSSyEJx8czZpGzKVMBf3j4V91PrkvGE",
  "key19": "2D3r7TD9SUpj165HRLnPi3kCYaDX3oQ5zNf7qaMjM5gZTcYPQtKenfj56TCUjuML6FSVh23W8AzFNyhwy5U4eC7o",
  "key20": "2SqLt4GafA3RPZfwQR4tHnCYqvFgSzAS43ZtdntvgpjnjNWbmbvBiXCi6FYoVA2WQvDSD3t6vtqRpmTPrEU7wQ3h",
  "key21": "4MSt8yuQGEfYTZ65dSE8ygV98PbqE24dGAK4PfudpkGsfhn4YmAfVVu1aXmdVPmSFC17hQQDBMbrqwuTpQheNELZ",
  "key22": "3AtPLvhhppnz42cfD1JTUJybWqR1fQ1EchzzoYYurMT1ytMEavHvRGTxxaRpbiUkfVFFCxzd6LAtmCGqpmS8CstL",
  "key23": "5d6RHRUgsyFCGkF8AmQvT4dKQUa2wGHPbEi7y4YvV7Sh5Lz6BQXxusJURwcCTCWeYtMrzFGjLDhe9ApWnp2WmZ4E",
  "key24": "5sx77odEPApUZQCHR7LK6dyNvafuPrZgmq6B9KW4CQsJwHG5msdXUgBnAbnA7ks5JusnQLq58QRwiHVbhPkR6SHY",
  "key25": "E16ekUa7x1FGsvRwkqgZ4W3nkJpARvqadNK3J3Unxrz3rBjpgDjq7HpgQkSNjaqKZ5yH3AZUbdq8Sm3yXyd9wcb",
  "key26": "TQWvBUTYDCwqvdd7MtShkYoWk3GmoaU7PTMexisWQaEJUvsQXHKbdvdUerhJnZMc5K3qFoeZfmC28mxjUrn1BCr",
  "key27": "4g1N4j4tUaeLHu6MRpc2fnA2syNUN8ZkfdaLi5myY1VvAZJTWWfKUmswFHhziTWCF3Jsn3BZWjiN9m4LHXjxKFri",
  "key28": "4T1Cn4nm7xLf97JwcA2sbm9r6zMxhPyx35Btp52CDoVyH2sW1tJaiwrKR8sK1RAtSiUbE1BxD93Z9d7wm28aEwv4",
  "key29": "56623ejYpmUGZs296Pv8U8oiGwxgGaGbQbVigKsh4jDn86kVgBN4DCAb3zdESsBnpTNWZpfctn7fCNzf43agzZDn",
  "key30": "ZySFgBhajfJciHgnKZs8QYtD84av7TXBzvQ1rtnigBWoFSZP4AnvL97ZjwNQAHoPwQYyFDPX2yzdDqyBJatsdSw",
  "key31": "7QiJFQMGKBHNqsT4qyBCQbUWHHkA8GXtHLYfEgwxFvtjJabejjhs7rQCkxJTgoQ6pkkYLe2mG4sxvFr6ndSzVBm",
  "key32": "3S346sWS1rHtAZvaNxowttGiDH7KjELwuQAAw17v6gkGjhtp2gDnVacHWbQ1YeUPW9qPpo4hXSdqei9dBQp7FhRh",
  "key33": "4m2T8j9VmJojwF4A5KYQ3WSBNoZNrdwe9HvomvEfGtrpm89xxm8e4hYEcXKGVLgBeKzc2Hzz2ww9FdKbJz515PmD"
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
