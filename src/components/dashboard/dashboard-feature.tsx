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
    "5kCw9j3P29tE5CzyCRnza34iVGbS9V3fMKBkFSziQKhLYsoTLtpxAa1KxxGtHf7ktWFiXqJCxjfMd1AJgKvje8Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7t49XgPse7cfRzepFsW7TafWmbJjRCHusfiwJyb8mDXHaa9Y37TyycTmZJasyfWw3X5A3XuXLq2wBvrD5XVd1Q",
  "key1": "53qReAiGxs9MQM4dtuCZLkxq15PZsGKgAWyfCujPRHAkc4MkNAdpUFRtzo7bTCWsrajF2cV5Hbp4mYBKPrd4pLAr",
  "key2": "4Aqrch47hRwpVKcFPHW3TZMXXapQ3BAJXjG2MTJMCNxTo3y4WbaRdQ5jdA8V6JKdZGvM5KdmbDsXxzgg8CBagYBH",
  "key3": "5DAmact2ze3WiE1mNtQ6xMuJ43zUXghN99fY8ZBHymrb5w7hwpTHsmtykF69o8KvRQKw8LRjotYMSTZXBsPt2VGd",
  "key4": "4ty9hzyhPZkmBY9GAHyJUnZxBEgC2HtifbSKtmnzh7SD7GXjyMa3SQrULjU9f2LoNToEvFVavYd8q2G6bVV8qYj6",
  "key5": "3E76X5bSbN23xuzmBRef5QGFNceGkqmGa2Ti4nWB2cX7MLY8LHs7TfLPJ6D44ZPyuKtUGbLgxeL8jFALzRPky5Bp",
  "key6": "5TYXJT2jLK4vzQJ2CAvb7BycbB4a9HvLPnC7rgWgpsA9syxk2AHPNXcqJS6om4j3ZCMXioRrAse3Cnx5PBNicwM6",
  "key7": "3zaCwHNcLTRaVJw1Qk3GaoNbfUnbJs5btNoduYPEK6zWZtjiqSQtCfBLNpsNEWa7n4L7tFKbncukQbGQA4TZoyXt",
  "key8": "3zYPxwUsbbgFboao4Sy7dqeJdDDi2oY3CYck5RZhdMKpGXLFvxdc4PFzqbNhrirhTP5ErgSXCTSUW6YP4tnN8cQG",
  "key9": "58aNRBzHzPECWdABhoPxd24MxYejzWw6WqZmypvcrQWHuna1NLybz54mJua6th9g13pWipuny8tv1FJ8odCVqzsx",
  "key10": "75BVgyHiCcXMR17nXRgh22ReLDfemNFUsFZwT7ofnLF6bHFqujUvpzKmWvcE1weqMJXYn3CouuFghL9qwHfjCXr",
  "key11": "2wvdRsxZD6stgL6VtR1sJJCofNKsw3R57A7cgBQim8GRiKWgjQdWoWrji7U3TJ6PG9iFSmDXkpUUi1vBJjouqCRz",
  "key12": "46RUZdLABSuP9hohTs5xGHGUWs2je6QnDqG8s1iGPbG8jpkJq7YeVSAWLGG5kP1rvza625ibjGxdifsPLakKBUww",
  "key13": "4y6uRDmxVEA4Ju6CJoSqCsri7m2PDFg4HaHd6CbfRN8LYUnefpBPE2suFiLPEH3BAdzNaa5HpF2hvEkEKwrX7j8Q",
  "key14": "61D4sTxbCC4JfFYps11GPYBehjZeyCPj6UhA1XMVkb4swPBjKUkoAUfkwehqxif6mCkTM1BDBREopmvpV8sKHZ4r",
  "key15": "5C7AJjzK9nFfdAetxGaAGyKr6UqHTXbHmVzqioziEek2XnHNkzeQt8Yam9CdnGGVfchm8jTTDVuYbMmdcAXiMij2",
  "key16": "2GAsWXDQyTavEnrF51BjZ4ef6dD6ci4jK4rzEHvZWJy8Pe4M2wHPtqDyGcTupMctcznZh4r3mFghfn8ZGLM9L6mx",
  "key17": "2wff9Asx97YZSKEKcVuXQjkJgJhGvBtVCjY1xVd5bXCzVt3WnhyCjdnnjEvz1FvwA3DEuaKqNMbax1nKNZMWwVC5",
  "key18": "cRBJ7Aw3bR55XeakgyQsijkcnWWiRZwKYyDZ3HsdNci1C9zid63WyLJ2fWoj4DwirfUjAtCGHUSAUUtmDXTihA2",
  "key19": "5iPLM9K37zsRDUMovHVj2GTH1neJRFcEuiP5tFo6bu3yAjATiaLzdyEN3UxTqyNkGzXuTUTVdscx5wUoy6MdhLeJ",
  "key20": "4dSbJqujvQ6BNiCqqbquzWmzMXL8LB4E6cipsHYHrdhKj73JAKfL5AX8282LEstGpE3gW5JKXhCtyS7B7vH9hNPG",
  "key21": "2P9rpKiuxgnSAK1dRmvxyEYPgN5xcpDzHM5XkHtUtwMPTYWsW3k3wZggYbdD3u1GiEV6uUfjtyMBZuhr6RtemqmE",
  "key22": "4hMjaXN8BNaKh3vBeJehLFMq9v4kiBYFdgXo9AbFshtDkNGDDWpSiVaQrPSY4aRRGAH5Fzd1WiWskapGdqE41cSM",
  "key23": "3ckFo6v1XEd5Qz3GBmqQaenrkwb99z5vskXPnCRo3ZxNXD86w8xdRaFfoGehc4BH14LbxSDzAYtMD9FUQBjgQP7J",
  "key24": "5HFuxBk1HcsPLcuabNu4tGqt7oycePzYvxJezGkZoSbiSTFr2zARYp7Sr5oDczd39TQbxE2e3L8r3hydtKndiEb7",
  "key25": "45Vq88LsaHeKeQ5cKhWmBmJEviz9L7UbapMXVSXsiCryNYLr4ysxtv2TVCLZqePgN4mJ1QsTR3d5oqsqDjoHye78",
  "key26": "4gw5K5c2HVuQ8RghCwWxvPR3RStBG2NSAjFZt8deQMbSbXjr5kir5hWEnE3WSqiaj1T8L5BXfMtHKEzsezwmhX9h",
  "key27": "4nCAQBeB1oDmdcPuRYJydTgNP4mBsfVHgfmNr14cu5VrD3eEZRPd7n88J8RijhwHxQ1zKMzocko3qBKWWegE4F8y",
  "key28": "2Ydm9wVErWC47kP2suD89LXWPWw8Ln8zpyxWbadCrZtJuZxV6GNRNs8n9YvgvtCpp2upQPfUrakR2Z1Ep6zrmW3K",
  "key29": "5amrGXrc2gtjGnXMLwUAhMQYDKEeoj5NE1MD4QM6KQDzAqs9rDv8az2ogSZWF6egWx58EfhVnYK68tNqZ8ALqKkJ",
  "key30": "2BJEgnkUUR8trsAiVJZJUjxokTEsMD9dfxBGGH8NyGKEhVFcT6TXEBdnXm5t7bYL58zufXLtu1JgHk9nqGvtidHo",
  "key31": "dSwvMBAJQww6MCDWK8fzgkvaRvpgpMGLXNnc5oYqy2juVHHCfGyoDExJG2gVHJT1yDn7nHroudcKsoPLPnDbpnf",
  "key32": "4w9bHJdqe6zWxSw3cMj1o4kgwQn1Vysmvs4fv7mUPkGafe5YWrBhNytNGRuGQcq7HJ5rp8cKocB1GgwcQ8M7Zrs1",
  "key33": "4nvbsC4665mCeJZhab6m5joLdcEJuuGqoRbwzvsDcM7mRADQhdHssZzW5bzEPKCsMYUJF2vtAAQxStKJCWCaeSsf",
  "key34": "2hqrBoar1LKLpQPwabCkaay6uTLHuvCu8j7aFxsnUutZN4AmR7t1ETcBHrXMBw2BZ83BoPPGv2VakbgofatkTqxe",
  "key35": "54YpiM48gw1KoMoUiqky7NsjB3Q2L2VsnPk9VMH1nNeiBcfy4oxMDsAe5QFnqDtKPVyYaMxUHUvaUqRtFH5SnRr8",
  "key36": "idWiYEya1qXtQ9vc6gXpDBguec7MYW23sxVhKM4g9kkGxZsCEPk1ZuKbZbbxRY7p9U2dGXdtnzjf1FsiFMQnPAi",
  "key37": "2BrfGcKK76ncMZ2vJ3ZrcHwVGsQgp6Sc8WkcsAfAS7uzgZ2WYRW8Ekx4ahvWc8j7GFpheieey24QN25HTax7VYhC",
  "key38": "ThcpFaxhwdM59MVLZFv8EXByxGMbATtn91nNiJMfEZwVWzyAT54ieFABTak3CFKzdcQFuM6BTsvuqRMEdTG9s62",
  "key39": "2jSPdCLmhiRmc41FVNQNV3GryqGRxXsha9KLayPC5AUiNuwS593DyZ1XFb1gtRVUMYAHF7T26tr38yQo1agah4Xq",
  "key40": "3VVrndx7rNJCVrqybfWRUSQ7zAbihLmPwoudRfSDDxKszqSs2pUoqhuU8ELdw8FZnNiXvb43cCMH867FXgJShaP8",
  "key41": "5do6WiFfnSnFdCx5xGNnw3NgFAT2Cu9wcLf8DgNMmPczyBahNr5Cvi2bbHhviRsRFnc8RNsWnP1NK2aV97FWuZ2y"
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
