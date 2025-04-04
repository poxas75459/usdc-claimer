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
    "57jz46ShW8Wq1hg9i1nSGYxz5d4v2CbqnXB5yEWNZawRrszkNZnVz1B31jgh5LGUmQMJAU4zP96giei3NZ2Rc72N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQDxc84U7gu6KSpY6ZpZ48YDSLwhW2cHMqnJBt1kWA7HNKXAG9LUmsXCgB1epZ5u73xf2VvLqvvCANCFuyUgMk5",
  "key1": "3EJrvHmpZy5R9X9G6bw4Gz2JSJScGknHEe3Heo4BmAdFwYx9KUSbNkL6BofYERLV2rM895AUToXhxHCLP6oyXWXW",
  "key2": "5eZngf7ZgSk3Guu8hTvFYygF1YxmtGQtQRgGEzxBMXZyKx5LxoYePQbPic529rL6st8uBnhiy26LLGZef7GvbQZd",
  "key3": "2J2MPCjLUUesiUJHnUA4Xn8cVkZf1doXP8ztkk47k6M6GvsX6FgPtfEoqbgrLxn46uRTzEveoz9Q42BkrQwac2h8",
  "key4": "2ZjXijy8RsDoTA5iFv1AchXaoAqcntAAfXKYBR1GBar6opCpbU2VqFauSGCmBm33zhrKVLdVTXgyRasuEPPfqusn",
  "key5": "53z7xm5ohRYfize5Ba4eiupsAv7RKrgkeEy9ytvWaxewhWgPxEbYvqBUXCr6YAdZ6MTkmabBPWaVrQNss78bzsC5",
  "key6": "5ik9db2Soopm4YZE91cRTZyJXiLXcnjcwiuh8XnNSW63oBfPionqzvEPv5za3mBkXuRbgi4htDFKzaWzGHCvcQwc",
  "key7": "3s8wSnNF3H45eYXAQ9ovcQmr75D5HJ9xMyZ755toq8kVnEZLbMhCPd8oT38M7MXswyDErb5t9VBi1JCQ61QdGuGM",
  "key8": "5akyRrLPnB9VvmUmE1Ni7fSLeKsXGZQzVU5kJFXZxFEFYEyheXQ8dTiBY5Lt5Cqov38adfbFgSSmBpSYNEoqeqwu",
  "key9": "37ZvjaUyfGdX6Dc9nb62MUwq41dSzPa2Bax6URU783xJAJHRQqhoDXTT8SrGqtdQMmZmtxh2TJvvRL4jA3sC13EQ",
  "key10": "3bANWQZxgPRCrqB7kTSswdZ9PoPvNDuvdXAnhdmaGMEKnXwSb3qR28XL1Vc4oMmhNXCmWmK6sY3N7UvyJscveTzn",
  "key11": "3CsVaYKwxz1pTgRdv3EhiK5u1gVzzMfwzuTH1nhVsMiYsRoUX9ahsAiu5S942BncdTkZAnFqizo1mu9256YXtgPJ",
  "key12": "3VsLzRUN6VWYpihLViB3KszenwoQ29KovrX1f8YT3GzhH6LC47rmBkUeeJcREGXFXaTZBmY9skHLgLLYhEGv3o6Q",
  "key13": "2tsnuGUdQ9TuvpsLX7fPRJye9CxGQNY39m9XsE2U7mRL4uwF5Nec5VDG7r96XHN2MNECe1bKVH1KkVeXxsj3Yc5V",
  "key14": "242jji1bFuAUDjiJaBCZFWN4zd8mg4bpefEk8FUCZbGX8T8zFoMhp9ynLzAKWXWNWWiBBnouvNxXpQPSpc1Uo6UL",
  "key15": "3yXcrNbRAbooV39jfxF5c6BC1DhqvTFRGgHXZS5z54NnXRiQjWn2JyVZbzENCEdXH7P2W6oPZJYZLYq3nRJr2XFY",
  "key16": "y7FkhnsbXb6QFUJtz3EtYDUBeU6rakxsJDRn1yTVPx1kNrGU7joDHV8CkaHnRPrXTVJJ3bCGTVzQhwYrS3vPzdD",
  "key17": "5k3GUV9B896NP8aGdMbMsnnZKfbhfrgK3BEb4Tw9yni76fBoFqW8aziYPZ3PnRSk44NNanePpQC9o5uBTa9AU7HJ",
  "key18": "5B1PaoZd6vvsn3uuxUPvcUUnmwDEX8WkRm3kKbzQcDBVC2jphxcz1ENtn56DCJGwFPHBoWSH8MCZmT76HVhHqhhV",
  "key19": "33d32HhG9cEWB626SUSdWsadjT7GBh8MnBVTTPwZt5gXwcGSN6dz4Pv593MsSpnAMQXRefyiUtvK5AJJYsFRfp4x",
  "key20": "2r4MXcntPHafiSEE9mDyRwMpisdMPiDbjb53RvPaXu9cMXDpRdB2xtCYaPgjSb54qR7uijWQ7gyY4s7dB5us6Va6",
  "key21": "NeTYvexXjoWNqj8xcrHaVUVHkYXkZybA2RQMidxaDxqSXRZL8qCL3u72qskrffdGgtmx18BWK1B1QfDUvTyFioe",
  "key22": "3CzqhNEsACuAduyGf3eYaLbctPYSfLHdgMvpVLKyZY9o7g8WxR9SYvXqnMWDgabkxFHRJjKPGKXyyiQEnV1To9Lb",
  "key23": "51bG2r1XZc6Jjs5ZKUom7gVwt6qChdf1bY5pMxnmXjXDTk9BBSrXBSagua82yXyHTRsWumsJJvnSxyQoq2o6rpdw",
  "key24": "2wgkv9PL9N67LgKAeMyamHYm6cijNJnFv7P67hmbBRXF1kU8KTq9mLmzS4kKggNRVBddNrkXn3X3F8NqirXqUfKT",
  "key25": "3kmGpscw28WnG881wzDychmA557gKvY6XPuZj3LEQzndorikShHyUTxJRcZApQqk5X2yF5RzCTovgqFXMeWdC5Fn",
  "key26": "53rAvVwyLa96doQb4vEXAdAC2GhUyrXyowVhjyQ9EPHZi89JY8m1TPbodMajARTG55VFDJofnqfLcShwBXFv1kA3",
  "key27": "3zjE3RkcAh8cQe2HV77hRiFe1MNWCLmSRSiWYDb3L5cW5d2v2n7KmpqrRa3ucjUJeUHvkkcaW3wy1qMJFW2zd9E3",
  "key28": "4M2pBCzuw6Vz148TUmXPDtW4KLdonvz5DZgXkMTmBkZJqbRTgEVZyf7YQ3iwrVnEZWoWmoy8kgKFPf1tE19Tw9q7",
  "key29": "2ZLFyt8prmooCF61vPp7qWe1qJAJk3xftciB7iYi179uxgf9BTw2B1pxUcbS5dH4WvmCEENHnsWueE24z9motmW6"
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
