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
    "mVv4jigqcKC78sbiVpkB4S4u9Nxmuhe7wmFA2rLK7PwbaKMEQYBS58m6mnnrJvU4zQSAAoNamw8qDNcheRUZcw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdx1saBM2FKNJQ4AeMegVq6zubeu6XD6Ae4SsU8gJKbfb3Gqx2qqUG6hbSXjkwqW4Kgk1qqBApMLUk4V6kK6hiB",
  "key1": "2RzqZztpuZEQHn8Zfjhn5F3FVHCCq4rqmq2wMb9PHX2XR7mf4MyzYPyCkxhUTACTxqgwJG8uwxvxm3GWwXKfVup5",
  "key2": "4ZjBKp1SkRHuAmoi6bEXs2fw5hYr8eshL4uaTcwEKY69ccxYrgeNKV8WHq4shyjZyh1RK1KWgugHDW4CZersXaXt",
  "key3": "5Q4NAZ7pMRPycPyL4TWscTGVLjHdQPXiwzGS1vfZ14VWMMsb19NuQEo8NUKSmzs1vCEKdVHBQa2QAuw3nmXjjfYm",
  "key4": "5mnABnoDEktofai5sr7AWeUKnHHTRM9ZKUwHubQo7u7dZ4M5Fiqh2wjoHJpaWpgBExyJhMRrVpH88Va76UXoLJku",
  "key5": "frV5FSjcYpZ82Rxmna6nJBR7LnT8y7NYZ5gaK1DaQW8ad7E3i9M5pn2d1oGKNbrhjAu8Sd49bm5nqC4JwvcJt8o",
  "key6": "5vsLaTGnQ6cgLUR4PhQg55pFci14DERFLPYpvNmdisRQPZpKSVBQJyEsumoFkB1fyDpHUyfoWpwuZxNq7kc18y6S",
  "key7": "2pFPefp3LkHJg6Mp1jjqoceimqiV4LFowesDic5q88iWUzsZQz6QiwAsr78z7bTEbNeiiC9Br3ZSAXaKkRGsKyoz",
  "key8": "2PziSxHt3qNPSC9PhKupUV7QC9A3MLBWkH1GEHSHPEYKR5BokqMiaM6vFdaXfiNHq1FXnnmkcHBG2wuJc4rtsQLR",
  "key9": "47ZR5YCG4zvpemVJnGsRHu8yut56V9sbeqZivgtWeRJXjNkStBBZBNccXGD6L1GgkU1meNwRZ5tjTyhL81eMrnp1",
  "key10": "2uYq45wBGRq5vagMRKgB1XHhp8JLYHqCkGqQmmzRxUv86aRktYyjtCWHWSNE2V1EunK2EWRGitQ6nC9tLiXrwS5",
  "key11": "5FomWdCn5ZjxcqEekHFwz6J423LDEqxtJ8HRdLhkaVzf5Bcc45o2ig5aWNGPXADQ3c7Y2pE7bnqusKNwnwi5EpdL",
  "key12": "3wgTo2gA8Bo4TtPet48pPQUdEy8wNkfs1vZdi3L8U7hj1ofnS4yAUTnrnar3pAw6Pe3QkDGJQKRKXHnLLxGncvUn",
  "key13": "2KH7JntqVsV8pHx8862Zmk2sAgFjd52WdEGoGcZUnsoUZcRSqhaVzVZi238GgeNQbWxiC2zFmMuCr3iFS5ggZhiL",
  "key14": "2hDPiHbCYFDK7K7MYrvjMLoUBifcFzpTjDKGK71d26odtF8yszDvkm1BTCWc6xQeJR8qwcgxwQXy4qPBF9TWYtV9",
  "key15": "3g9sEQpuqPrK7xoFrU4qmcsVauybbPmVKgKWP3QghNowDr4yydbxJCj9dExaHRWmURgZxPzqbtd7qWb7uG4khbKi",
  "key16": "2wio45Vy5EFLELjMBhH1xafrrJ56BxJXg2mGt1HdJiYrUZVWQFE7xavhD9E67uGk8pBLPhDYc8BtRPW5rd6nuD8c",
  "key17": "2nYH8hddZaJ72dngq5JjgAkr51YUqWuBmJMtDZibFBVioVtr8pRzQHJTuaKBWno1pS56Ms27dN8zqT5Qasfya5V",
  "key18": "xN9xuZg8Mf38dVenyLbAgTgqDMdUsFAjUJwxwJboFHevd5HdTsRjtTHxew2oKyRLgxwzkN8byj5AyLzzXUADWCg",
  "key19": "59XDJEWBbyyZW9XamSZuuAmRFSTRZ2L4e3uw6qiRTXCnzdAUP5RWkRpT8gx67VRXg56spSijvzKxZMHi4XN8uzJj",
  "key20": "iHVqYCePiwFXt5dSN6wC5FkU8BrB3eSB1obpmKkNY5kCf88vMkvhhQxrpbDXpmmsxskxw4LrniRJZ29v2rncTyY",
  "key21": "3u9raHht2jyfbdUxaRJVMP472QFbet36GsMVQEekLj4CDQhHEfqvgq5vJgoonuwJu6a3CapFm7D1Ndg1SCfVHDmy",
  "key22": "53abBvLKdC1M1Q4kWThgthRrVxMPFLGifGsTbB4r2Wg1gG4RPxjcfq8e2TGHpH9Xcz3PdkzXNkaQ996p5RLmVHti",
  "key23": "5Z7fTAJU8zVKGN2Jcc3eqwRKZ1tzf1dnsZ2jPGd1yJPrdtgSRDhoAsaHV559nEAbh6YFu4e6Wj3CnizJirR733ch",
  "key24": "4aZLkz11Yrf97wvgkJVxG9XsuyZyJXk5PGgQyKQctMj1YGgtTqRYbC5yXstN5aKtALWCT3mBPLu2CHDzqv5yGeTc",
  "key25": "4RnzxSmS3xBkkNKueoRNamCfBFviEZdLDA6mTYb7KhBw5t2gDTqv4tjzhjJD8D3x7fKWN4DwzKm1NosMXNJEt1Uh",
  "key26": "98jfc1TmoHH19tiS1opYK6uieazKheyg3pqMLgffKhBFbwBxyypzLmzxxCWR2BfuNEsmDSmzk6wnyEBTYJW53RX",
  "key27": "CEWvWYj9JWjZukGttroMss41AFmzud2MEagPyy8pw6cXCRFgTDjFo2QSZ8vqUAhQAwwreLJqWZHe8F7rj5nWYmK",
  "key28": "5KGJwNzpH8KYbpmp2DzW4aRHVZoUgJmdbMSb7gfgzyiPuAaQXSN6MXugXC1miGsFLPgbEtnChTCwA7utW324hTdb",
  "key29": "53Uqf5zsjBRpkBFBnptGxYjV929cXNw2WUHj5dJPR6pK5J1xadN8vRFwCn5g6LoNwZsRtGHDA73fkNCqiLsUatE",
  "key30": "212TYPdUbCwtga2qVX2dhNgTU3rdfMmtE5w74nrzkTu7xphwi47k42B3nbw56mQCjhoYLSGFyoE4zgaF3cd2y1Js",
  "key31": "5CgzPLyvvKut1X4L6dY7rBhX32so2KPjSrbRNfoxur6dUya6KCgkr3ZZdZZkSzFVKDNNGtL2w3dmuHfrDMh9xpRy"
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
