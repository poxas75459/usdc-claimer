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
    "66hvAeB1U8zQyvTHizZQABCk3fcZVj3RsrgwqhFy7zma6Ghc1VoLy4TBVgCXYSKJVysMhs4ERa2Fem8b88cUNzgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aF5r4AL3CMwzWsw1t6p7MxWL2GtRRynptM6yGefvie8WnezbRQmyHxoXgDcdPYJYGpVmJLu8Peq2iETfTtSewsx",
  "key1": "3GscJaabAhg3Bs74AkP4qNrxmZFADuRa1s2DvXTwPdV9brExZBLiLz9N7bLaZhrAhz6dJjTtKmJioCezs6BsesKu",
  "key2": "DUMU1DHJ7s8Yk1wDEUYfRWboPeedZEg4NzJM2nxtxEBm6shzCsai3EgUwt8Ba4r2zXqK49XbW7qYVYGeTVwFchQ",
  "key3": "YUqx1iH97YAuZkxqNJURo4cpCcPmA6V2YsPN5zokDL6vPj4LsUwK9x93iKH2TwsyiTLihDL8D96CYwXiPyyFrqi",
  "key4": "C6VmFveUztJ3ZDm8sqhUM7cjx3YxdFNM9PZKf8poPzSH3K41Pw7zhC9GKXiRCC5vqUpxhYpWsWP4mR16CDzn82U",
  "key5": "5WYSdN3URKm9zHrNwM5FXcv7EJvwctP8zJFr2vhnvHEiEochXSVVcaewMPH5Q2swyp97NfPV3Madk8Y2j1GdYvQm",
  "key6": "5JCse2CX1HWCqKkTWxmGYESWhdaQtVkZGynK3wGNZTSaKeAtH2sQa7u8UEwqeS2h9rrsP4uDgyPrJGUwKFDiMVom",
  "key7": "5ypE9Ny7USqd5VR2gKYivg2ad1mX26hbPKMEKx5Z8t7jFH9LVGRS5yrjA6ZA6XLbYTupsNWLWa2jREepA9LWaBF5",
  "key8": "4eHTifM2pZpzdTik8TuYaFHprYYNvP7BkyMTgVYfGSxtcaMXUkCmGuUxgHvV4kczBMgsuN8KVsoogSCNXSKffKqi",
  "key9": "Skv5ghVPqFdwZ7RTfWQNw2vuUFtQWy8LSzcffhGGDiPsbjWcGqd4g1zms5F7QyV5d6mgMMF7eXmHHK9mnwcpcMG",
  "key10": "5ZsYYy3cUb9enxneYGZjviEMGCzf8TEpSnKWWSy2SLs25RmdfJMBMaUULrhWb1LCJCAidMTjabaBd3KUwy1uPW9F",
  "key11": "4M7eA27birMGhiz5NcGyGcoCgcy9J3Mq44GrMukutbHrhsURKVTANwordt4bcfBBXkgCHLhMMXFYHEY4Ch5nLRJA",
  "key12": "2uGAYoDz1bbkQr1PG1xuUkN4Fna1bsY6j2rBSDYQ2qy49DNHnaRCMV9kDrcYcQUg9WeMj3UWLB42VqzjsqMSR1y4",
  "key13": "585rybNb7ZZaywtja23vnkJzuoyUNhb92KzApQZpPVWd2uL2FUtgdf7U3k3f6fjXtHTyN2kfkwbvCdH6q5rMtmbi",
  "key14": "59omZmmfPLtKaFARVYqfKAy6TdpchVQMEM2QmcGmDdu8vn8mt8p5VM94GadzKuJdgS8AxydSs5y5QNe45dgjT7dL",
  "key15": "4uUgdMwDGj4SoVa6WPsATNGURLZGb6XSfFtPdMZ7P5nLbhfqrT1bHhJYnwPvPXwvC8PwMU1hFjmZp1WM6h61XRQs",
  "key16": "39VqBukvrjWRc3UdhC3GZfqPaoFJZdj8Gko2ZqiM9rUm1EQKS5oSo2WtoR5GtgoDsuyoFB3ZwWQwJ4Q8YZymY2QF",
  "key17": "3qC1eHFv9VVzrpxYVtSnULzQGi8jauGjaYxnwBRVtEVbFUkWzD239uR2JF65t54caNttQCjv1epwFTWDARbS3vew",
  "key18": "4gDoi5w2DymiKDbYcmqhaazJQXQ6NrDEL4AwLjNoHyFDQFVj4xMTG8Ni7NkkszxxU9aHmpMMLWYNYbnmRoLFvrnJ",
  "key19": "5tUbSyykVfKj9eTGVXmiWNZWf3MSccukBu5uCywCSnp4LA6Hugdn52J2xBNKBGHuXWthipaU96Grk7kMt2LSJPRm",
  "key20": "quiu7iXWEwWyGeNyFySBxSEHvZAvPRVTGnZXAN8fGAr2wYi8XWVvjH6yNcNHRSnt6E5fhrawuJPetWtV8e5idgZ",
  "key21": "2Vaz29p8GAubjwm4sWriTap2teSmjj1w9QXkzThvpZipRS5QvwxQVVYknV3BqvRCnKCHSxGqReHGNJSbXowF3P2o",
  "key22": "4G6r19djnmwNte92M1jw1sxPwELojQ5gHfEC7f7QzAWp9eeZTyGr6d4Qayu2XUoLmxeN9bZxrSjt7R8qKja1xRTm",
  "key23": "2Z5LFuMJKBUtUJ77yPb9z5toQ7mnzvFcC67jFSiqyrZo8ukJ5HpF3xRNUvKhx9m2qkfuNVEXjDzoQ6xrwUkbaNrT",
  "key24": "3faRZUT6ovGP9VndcxVjDvrLk5DxrJKGwaH9kEhpaf4EzZxDuxM6341q5ZKzJKcDxhBNPSoLPhbqZX3BcJzTfM3h"
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
