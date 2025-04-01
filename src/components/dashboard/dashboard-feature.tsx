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
    "3uPfmCiucWd1DQcsCgFbFbrR7PQX9SoF7duJbxgtpTEsdMXLkQQTYN3DV1t9CguNaVHT62Us35udw4wwVgsxgLYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRCoAsNQ9y575KHKfXw5gubsTs5ZVtroFtC51HSZUSKewKyWPVyKEgZsVkJffXhn2vg3BVhtZoNa6cUKfi2wbkK",
  "key1": "o9Hj9kJEXCNZK3Qb4LgJQg2Y2PdcTQixpiBqrEk3QNjuS7FLxEPQVWMVzWz4QreruobZe9o7kewm9oJVYBdMkYs",
  "key2": "2AzAJZUpASnKTLJ86LCHD1bpFMTJPPogHodorYoiSgQDUSMoTnT99iSVBibuDFd3aoGdjj3VrWhtE99AEJXby44u",
  "key3": "58Tj1NnVLuKVfCtct3ngLSnhp8VQLZwkjqoZcJLS1yEtrsDMQ72rv1LyURAJkehgxGz7ZWFGEmsxnVRhKfwZZ75S",
  "key4": "37KQuzrShFmYrQAjECyYcSEs7JCHFq8mB7doyMZnsKFdVf6bg5a2BzAuPkch6pxqHu5Y5TRJAv62FrPK4mJEfbaF",
  "key5": "45uKsy77MgPVt5pDCWsRAtaptnTpi8wposU8zcJyXqbiA8Z7sT9nB6J7n37PydWULJraFzFS2EXM2Vkt4XXp3TBU",
  "key6": "2xhFasMF9DuZXKjfcFjuC7h1fzkreyAvxfD2eXGDmQzbGaS1qvrrZDdqE82xQu73NYdXDAGq7gzViuajnH9NDbiz",
  "key7": "45NMEhYihAwAAtbxz3pf9zExBsDkfcDfuoTH8q669YutwxcUXEoKfZjUut5w2NyGkFksq2dt8H2YQEVAobW2Gn6u",
  "key8": "5D36yDHuvducJ2onFkPVkhUwemwTy5S6popLQ4omy9AnKFmEmBRDkgKQCLpVn4kCQcyg3hy3YTiNriXwT8rmpUhr",
  "key9": "4xwBq8GGhXKTioph77Xdx5GQLpPZMFRo5uFo7JdXw9smSAPy6U2mKdYqaCKEnTxqri6wwnDNsrUiYPzTB4ewGtzB",
  "key10": "58VW9QC4WJVDHHKsqbiX2svNi24E5CFKgZF5Xth7HpJ1nxzguH43GY4qHWx46gY37tndRakchCtALD2Jj9yFhabt",
  "key11": "2Fw9NMXYPiRm7eYVtWvPccYhnQxpVxRA3gi7gk86oDimAQ2xswdJ1kdk1pBwBjg2KewACTyHSz6vhqUT5ypYnNvD",
  "key12": "3h9xRdKYA81WFCZ2wQt5k6RNRyrj11rxwRYAafVWhxDHTNKE3GbsinbkCG8kkecbN3JTESWUzaJgezQMDcwmFuQ7",
  "key13": "3tRJLMjSzmHNRsVEdnincoDCMtg6kdZ4LCoEUzouywzmGT9f3X9jfjonUg9jD8ak9Ds4aCyaAdRA9eqYcLQXMpQ6",
  "key14": "5ALShvTrHYmugB2zF3GB6fv93BMqRn8XwJJ7tqSQchxzctz3FWcko2djzTs9VjFZedcjLsv1KYz7aaB27ZuYaSFd",
  "key15": "4oN7F8weJzoHgvPoXRPWfWpJzjqMgp4AKvYt9ozB4p5FjfeLGJLedq6tVVFLK4z2JBfBC7yF9CGg1ErERgnjyuGY",
  "key16": "3KAmccRrWf4g6KDMcFQ5mB5xvxW98feJKfyj3WxaKhvxXWy9HGQHgV8EFopQBMedxLrz56Sox2wA1ZB2YB7ea53V",
  "key17": "kSEY8jC8XgkRiV2sxQaoDRgaGZ9MYtmMKLHMo7fqvT3iptjhUiConv121h9i4aJ3mzU5jTyyESVg1PqQt2vTSXy",
  "key18": "213cWsx4sKQhq3N1XtGJ5QAjvgDDPVFHetVzBps2ioxwj7JF5XYWGV5kGuQYUtDHSLgVGmpwSFCdjtrn6WD8E1fa",
  "key19": "5aX8oDegDiRLBuUBf9HiPyzRWQA9uEQFAwmfhPvAazh4AkaXRGJw4afmc44N1PErS2JEZ6ZAHPjAaxYryGGRdNzt",
  "key20": "2RcEdyHDrkBDzDKL6zbddAeUx1FK7DzgW1nLkMXEV6Nqv9c9AdxV9LuCkoKcvxcZfrAUAFHTaETPhzcYLWaqiLpM",
  "key21": "5tz9uFceCLeHmP83SsRfG1XtfPiHjNGc17ixysCoZB4vEKss8WAsiX6SzjfxTuvHLAdmmRyVVAHF4BZqWc5AELU1",
  "key22": "NiX8rwMzMwvN7zn9Hq1c2jx2DBCkwhwrfZ6Am3EAq7tDiA8f3noWFZ4K6E5SKtEU19WWGS84juoVM4eBPhzB6ze",
  "key23": "5nBXVHvV5fMyzo3ZZfgTaZheQNEMnmHJFuhq1PgU1BENVL9q5ttLLcMXTnAW1PpHPGxqBBcW2awDd6YZPRP583A5",
  "key24": "31nNe6ETNEuMGqwQqoEGhxfApgVAxheaVMBDeXs2p1xvG38znB6DkWkSYaKeknEVcaWHbVef3z7aLEiPydhYns4r",
  "key25": "aHWgAuvE1ieChR1En96ayoC5BMV8o8yfejTX9t7kbXdMcm9Y63ojRXMCmh9M8eMbSKYDYovngQn9X1irZSVkQvk",
  "key26": "5vAe7NH1AM96J6dQJpHL6fDdSAPkUnQihUvm2yGx9ibLv565hMALXU4eZkTnDghiPBBhs11WzDkfRBVbDpmAGp5q",
  "key27": "CwAF4cRDGTXZZUL6aA5o1tA5ovvMUxhkcG8PVQhi4AKzxtdRHRHis3aBTXyJ1WzC4RV4T4FyrtBkziuGzLKNCUh",
  "key28": "35Wed4QAwtN4MD4P3Sb34eqVvbJA2afV9vMG673ejtAXLe8RWweUNbX5Z2Yosjm8sC3iTZH4iEato86FYbyv7rQY",
  "key29": "3XY4vzWrbEcBXjR8dbKt4abj3cXC67akKTzMKgkL4yxTaL2WXiwUx7dqg9Uvr4VUXyTb4QuV5j1Jt12TbDKfPjVa",
  "key30": "41ja8CepwwUwxj1BC1nDJRBFcfLUnrgCfTsSKVD2pPoSf9UjQJGfkSchqmvAvwZsE6zNPKParnpzXGKhkmiAfU6J",
  "key31": "4jEyyYS7GsUHzsdXigpuUaHJGMLmhdhMkqQTgJpNo3cV6UBroqCYqxucD8qhRFetrLpuu9gqXMrdWd7rxDdqjJsf",
  "key32": "5hGahaBLhfurriTSb2Z7ShZNc7u2PQDBgLS4Cyk3mAUWqyVrTW6gRMcq148YzkJR6ENQccj2tvGcdP4FFn1yXAfn",
  "key33": "57VNLPd83JMFrFophUEhBR549mfwPbNG7M66RvsxZmTjZeoyrNUecbGRfyuCS3bZgB8fH6SxtBEcdVK2qAdqo7av"
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
