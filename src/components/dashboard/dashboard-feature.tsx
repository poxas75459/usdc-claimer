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
    "2AYLEDL15GJeE4z7UuNLUhuM5bD7ALcjQUU6AzowT516PZDGf2xa2WkyjpFEXjJtpPu8YMmwzw4wbJw75yBtwGpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4rGtz79hkuEZkhhBzhnrbVctaM2Chhs7uDjKvuSi88YLxqo2CcrZ5jAwXCPJvsRj3CTdK9w4woQUPpPyTadsN4",
  "key1": "342Ndn9ZdQasPeM9FrgPPYEoRDuk6G8BLjCQs37SLsi6Fo5bqw3hCQ6eqWjvYzRhw41JucJ4h52q6tZ7QUEhvSkG",
  "key2": "5KYcDK6Uvny8EsznhTip4AuLeRiF3pRwL3MBAe5a1djVUZDXgSemLrE6Wq5pXWeHF1zAKJturTssjYgC2Ao8grLo",
  "key3": "66XezJz4q2edyH7nzR45wS7DgbxDiEas9HTSa3u5x5AdDzYQ4McP4tkEgyij5kEzNZX6sW97mwh47DnqrivGCiDf",
  "key4": "4pEGuJk4bnKchR7WDFUapr5Rxjp12qEHB2taYJc5BUZDooBsS9a2ocaWSjsdmLAiYmiYQVRKXgod2pfAMxwTCN9j",
  "key5": "BRX2JrgismGf5yvLknTg68oXEEimXrpFXLMaem7cDm9rUyXE246JzmYD5G9vC3gzoKhWVn4nyoPXkCL6Z5mkSLJ",
  "key6": "39YjMkj5wzfGqD78u3E2VXhhU2wR8gXm1sSeWxk2Aocm9vFxKeg7FtNDJwopAUTkLsqdMTxbsF7AA2CpynLss5pL",
  "key7": "uCM6Z6bPUX4noWKtdwsmE79nannx4fbPeVutpc7bZyXqwsaN8Pdyg1B8TvDW8mxqbTAr6s7is2QgNiFMdfsMDRK",
  "key8": "5DTomieqWCHUjZVhf29XBVyeK8xqKV5xhw8ZWnKmCm6RqzyShTjT8CPsQPq92VHAim2UmaC6sdsP9yfmR9dS5BKR",
  "key9": "49PnHZbt3DvzP473FcZxPwkTkjqm9LNDGtbCqQpAa2urcjwdTjyLoNrKzFxYHxbrRbYrN3VtA6nvcQ1M1az5eeY5",
  "key10": "54Uzv6ivVrAMQdavP5sQY8aqfN2kyzUPZGCQVoza4deqZs7hkRz1k9g1Z82EJbNZSf56C3n6SVzJNkz5mS34Msfe",
  "key11": "3Aj8GjH9bypMMWoxsX8tMmfuhCTcPmZG4dZtnYSTjN8G2K1vLNSppLtcAQqsSGkUzngbvyt7rANSU9oXsZiHmHcr",
  "key12": "2ns5XdpZ2b9PfA1kP6CeBiih7hPAgW9Y4ruBRfSQcpZVis2RDu1ePBTr6L4wDDaztyRhc6nVPqZsfomuzSWkgrJM",
  "key13": "2ue4dyFrYrGmeqBHGT4nBDv1u69n6EsNg7AeWBvqwUr7vcA6K6t957gLrA52z9z21k8GAf2N9q7MCLbhKNoGX5jX",
  "key14": "51VJmSQVMTstLea2qQXM3yJicehFaKMKEJTk2WyvZseHnE7uX1fD4bg2C3sx7KqaaA8pDLYBNFh51Qc1sJTCsAYq",
  "key15": "4Rsev1CJWJjyzYnuhybfcywfQytr3ofMrUceDjd6FwQEqZPW9sVnxxdEfAeWpTyjZYe1Bb6664VBEqhLKMhR2mg7",
  "key16": "3MFjPSfviVzvnJAvK7nCRjeKwSityiLH966NPHJfV8pY2Esw6coSwJeNRdW5MAdaA2N6VRiZjzHq5ja6gZDhVRmk",
  "key17": "6sf44jiU25hpCy7dxU3VgEKKMHHBB1aQbMRbqNbYrnW3TET3ZtCTqHWxt7piXPmq4wsCdpBXPUPYJitRaR9f5S7",
  "key18": "hrXrc1SmNvE32Brp3SKmWe6anXerLJufJLDYzCFPmHTFbHz2pQzcc1tjdcP9g2QVv8rGSDu1BLDJYmD1tVXpiUw",
  "key19": "2K5ew9vg2JpHB5GJkDwBV7L6ap3mRbjBAcAg2nftXwQh9KKQ1E7wFKeqs4nAoeF7jCcKG5gkWR4o696FfzURJd4x",
  "key20": "qQhuNNBWW5qgx1TkkTeoXZ6U441BNjyXUWpVJ36oF7E3qZDu96WA8rcmSgSxuUnq3nTeHzu5nkXgWpt1Ew7esbf",
  "key21": "3W57YzNaWSKuhEzcpQGv5dmz9bsErBoYenuY7Znxnw8oNWkAXDzaoSG87775KDRbU8Shrwdyt6v4u7rwcuARGdJc",
  "key22": "62M5iYa3iLP6Boc3KKD4eTX4xqu4v3AKJWxYvHofHqLmZHF14oehYKkvvH7tyHerD41zYrTXGJpMwXq56NiBQmLS",
  "key23": "5qPL8iQoLHsgAtJYWaim9cDearvP6wtULSkDXhVc4bQseswy7Bh8r1Bh2DgPcUP6sHBLzPt6jmhTvhVNq4AevQfC",
  "key24": "575v1QRx1MsXRTKovhBhbYKTxdy7Yr5wddSLWQxgr36jmaHYvX4STcHBEBhptcSZ5ze1C4jhhEhcPXHo8LzanjnH",
  "key25": "5Y3wcHBCRj1mPRHuCwt9QfZhmRFUN2YQfDN9e6x5vkN5DTRZgbyoxR7sTjs3LpTyHRsqCaqPYvapPPpQGhbf1ohs",
  "key26": "4BT1xUn93DSZj1ATRKrt8ozVy9p7ijV9LZvBBc94xN5zPNpjBpe9sdtHsd64L59UQDMtU5en83Wsjtd3NxnJ34Mf"
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
