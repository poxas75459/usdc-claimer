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
    "4muDZgYD8fZLKGoX7tnoB5Gj9PThRazo7e6GvchsYjRU2SBWyf6MTAYtWLn5o3EXj4AP2WtS9ARTEBp1YbQ7Apio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FkniGkskNYbooUeTZxhw1q4Ed2L5AwoQmMkfWLE5nPZBgbL1aLnFuSVoff6Cjf1aWhNZiB9ssQPjmpsqc9JcoQ",
  "key1": "3c2jiTvTgsFG8P73iokUNjbhutW7VMVZoAtntdgVfrFEYbQbqeJGCVdJ76GZTRcJaqJXjW9wbkasxkd8rT9rdZTm",
  "key2": "4jQpPxhtBoYFVh9FpvT9vM28cTpD2DesKmZrJ9JYz66pir77hdhTkEhhBaMKJS6gqSiFmgyKJF7b8EwKJWVULdx1",
  "key3": "2n9cQVqpAivbyzwGMafZEZXUHp9zn9TfTSNuye5yoJzvP1degA1GzJ1rGFM4BTQfk7HgZktG8W9cq7ySXAS7EK7A",
  "key4": "4r1gK16EW1T5go81tWWMbwaVTfBjuJWgEUE8PQnrF4cmsKqVfAPon2oWeoKPb9Ci2jdd47wGTfH9ZmGRgFHx3X12",
  "key5": "6113mwjSDCTJxjShtnpcMqtNtF6uzLjXvYLUn9UdQhzd9fSsYXxdTmHNHEpjHSpHFFMw4xEPNjbYz2B3YEZJoN5w",
  "key6": "51eSbvac9H2KGeDZ9seEQgBZrXgUDKXKmi5yQecJjo6etQbUagnDgzJPgE2S1f9zmjpqwmykuL4zk4U23NRePCfS",
  "key7": "5V9wNNKkojyMr9vhywfhzrW91nvgDuhw3m1mCxPEmgG6mKxEHdTw7xo6UCFeyG4hUHoJiaPmqNEdUkNw5tiwgo7U",
  "key8": "UL1atE9DSmjiuhAQj3dxPqcKCePEkRoYx4RZxC64UUwfdGMiVS1yh7crpw9kuztpC9tvsni6TF5uTbpwg5yijKa",
  "key9": "3y8hyzLv119MLJ648deMn8yTsog6UZrhNrbBh85D9AcK3gP9H31Kd2csFnWnTVVGEPxAXmjR8oQyw2gb5jtfCPGN",
  "key10": "3GA6DzQ2SZ6FKaA2YZHf1GntUUe1YQwfDQLRvqo5AwfsnZBdfBtZt4SWzPtBpgXajy5PdpKhf3qhY7sWyFa9m3xc",
  "key11": "43rJBP4c1agNBuBzERHVdMBqAJQfzHFpkwmX3Uzvssk1HpWgUFGxxAE31RFaMs6GFCR8JeNsLMXLZU4QJkdiW96S",
  "key12": "4Pacc942eXoEVC4aEJ9Ketjnvxd1YJbiqJjnJSgaY4rTz6a1cAA1HpqjzkAJaNxGUCbSXFmo1LZFi3zfxe2fp98X",
  "key13": "499iGTTXRTMw1vxMFdq2MmzY13d96BFa8WtYF1hCkQUngoMNmjzGtgDRhkXXw2eaSANvAVdQnQY281uSCyP8tsE1",
  "key14": "2sizjkUSga9uaiXhrQnjFLmLtT6WbvaPAfSrtyLfF6ibf5nX3DaJZnMFUUYoy8hfowhQoFppkR5VFuS71964fWUp",
  "key15": "4AC6seVpZg3MjojoPthpLdQ8JmzPGYTb8SrbWsPU5xy8riGRzH2TYPbxFqE2KRNAnivKSQZj8botAWfXEmRuta6r",
  "key16": "8WWgQcNocuw8Q41fThs6hTHSET7sfziA3cPy91bqCi5d7QiLwHk3d1N5iymCWpYZzq49wpHrSGvhjNtFbdMx828",
  "key17": "58MkGxHBWWtsaaRgJgFbaDHPiNkRt8g2AGC3RfJZs4KteV2gNSSDWNQuACxLPqFi8RmhejaS7PBGKBjXukMYvFAD",
  "key18": "5oQEr1pVjYuuCd14WtdBkY9r39CoDDjVu8Rd47gpEPL9SVuGRDzLM3qN9PJwjpjZG1C5cnM8v5jQvwz6arJfs1XV",
  "key19": "2fHffTRLyVF8uifJuEngZC73BckgqYCzfc1Re3bNWzTBJSMiyyzUSM6cNpdJ2jU4Eg8vsPzuAa72BgZBkiqML5Y3",
  "key20": "2ozAQ4j7qbHQB9fhnQAfSHUPZiSQvtG2ovtAUrRAx6jETN7iQGkubDxxFiS7K7Dj7Lf5ZESYWJuuin7jbEyh938m",
  "key21": "2NQz6Wp4DCY4tmvzFWY8UWJJDsNYG775ha42gTEeZkuTXCTTqarStz8gSn4PK9NM3maALd5HbzYk5Fy7qjkuD6Q",
  "key22": "zKiLBGyrQFbRp9DPREzxqWxvTAuwpYnDR2Q8FUpnDg6WfkDkPMj6yhuhgoBQzZCHCp1XkdLeU3mpj1t3eZZE3Ha",
  "key23": "4p449dKEwGTXCUmS9SkEUW3NygDTb1BURZEgBsQnRqv4fDJKQss7e9ixMQqBiXVGP9SpE8DhMMfH1zJqL1C5yC4H",
  "key24": "2uVFZN5VZ3Qm25KQLxt4toF878GPtaNQ35sB3vqEeoCdWVvzbrvPNLdwMXZWDULKUaVtTMgXV96ZG8aJs3bR3ryj",
  "key25": "2uUTAVxcwF1e6GMc6bJeDZcbstwy9G2DZT2d5nuWGR3At2iZ9WEgqsK3brvQdb3QNXd6Q4oD3PpDbanjpW7mJcFc"
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
