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
    "5Th1kqdqvcztRq4xLhzvX9EskJDbJyVav836agwNYZrwvLvJgxXNKx483ogtr3UA1xfLb5cpAYV14qvUscYCiYYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTJ3Tydei5W5xkJP1NALV1c88ckZjJewXez1juZ8aC5nYSYvfBehZb3TQNWVyXx3fi9BNEg24eycb9QELSxoJUH",
  "key1": "aDNagBhWVjmcnfMZxELKGDvsYuJgod53QEDcqXVf6nNMyQEvJ1rme7wjc7Ren3sTd3WzszerT9nqWvB6LGL3beq",
  "key2": "3m6aff19gE4uFgjsLxerAZsv4ZQkWAmuhqtGXSCdBmQihFf1XLmWghz2JD53H8GmiH4hWhXnBVK9Z4ZJY6HbWAG5",
  "key3": "57t7UEEvxxfA3sReBzZB9Ec1GKgE9p3q1hzK8ZWBJQVPQzbdKDThbrCPPWURzhM6fAnqFNZvCwFtkzigij4h6yTG",
  "key4": "3x3XFaVopJbefLzmkJ7nRUKZHCDvs9TLbqPejdmPShcUPGx96mjJ3BvNH21mHZRLG91UFD7WWm3B9ZmFX4qejH6N",
  "key5": "2ZggULdKD5N68iC52urSdXD1VXMWagySAnM9jSaHh77DNVoacZFDupSMZhUrBGpEqafxHj1zgBX8PfsAc17eoHNd",
  "key6": "5YeZw6Mc8yEBkbiys78jLSwS3QFZBVFxdxHtqnYHr2DjunZhE5FcFFPwN977NvdEemLDLoqAB4fM7Vr8Z1A1teRt",
  "key7": "3q2n22nfvBRpLWczk7oTCzmS7nSDPDRK9tc1e6by5WWHCdk6vYcouyYUPTVTx3uCMuSzrWtDL14DYBUyhYcBzUY6",
  "key8": "2TdXco48PkCi9QY93SReULuwUro8gzxVUg9wEshVRmZTHfVYizYWwWt4mr9JmFmbYdCmr6Lq6DX9BzTB4M7dkFCe",
  "key9": "EdwpFiiCf6ztmQ4C5U3KBCzLEKqDFGZzaA5WRNuvxCgWgHR9DEJAZqkmBcULBrvMwxgHpncZt4k2mQuRdLWhKJu",
  "key10": "243iiQpL7sbZ6CXBGvVCXC1cJ96U6ea2NkpPibUQKbm8JCWAyqvmYnup8prTwQgJ2nogDDunVvSaWo9CDMVAJf4R",
  "key11": "3LQhcvoGednR9XwSvgvJW14ofSfXH9odYiS7hpcorjsU1iWE8QVTzchATbTDZhYuyKDLjzyqeLtDxRVDQBAUaK3F",
  "key12": "5ysMMUBHynDbkQJ5asGHPAGYg9yPwffC6ngMpJpaMuqaB9874WbTY1Bj2hrBoD1ZDbw1DmSBFUxB74YHgNGGBBcB",
  "key13": "2j5TkG4CvX3JpEeKJxEJsx65ebNXUfksu9ZTXU1MJn1KfnBiXEwxuTePhANKBQZHxL7Nmm93trFE29Hscds8VnEw",
  "key14": "3HmuZS1mhbTSAF3EgMn9YMMazSXF5mCDoQVAXdAAkG8xxa3gw7PMiND31yLDeqUurrVHX4APvZGqVAsqnaAHLDLe",
  "key15": "3oNt4BE5U7Gun39Ha5NV6YpZYefZVbFgUsjsYdu4iRjiEaR3NXKjL6NzBb1tTUCYwkAET8V7kcksEFAa5UXbNUmY",
  "key16": "3ngaAjPMZXiS9LCBpNBJhpWWnQQkiTNhZDJiZn1Do2Eq9bme8AnJZrWc9AaNWQixBrNdzy1EiHzcz1g135Y9bFTB",
  "key17": "4MSSet3LirKEyFVgshbnS4hPPZnfQyvMtVoV86WsJonVARJSRAY7C7iHRERhTYzwRTxCiLxFGWSFA5a9EFRPkdkg",
  "key18": "2bgvoUgysgTsrCwJeJWxMwn19j5dhn2EM17H5tv4D5w3WFDc2dH1cMKuWR6YLBajvY8MkSeuqTAcUnuqb6JbktY2",
  "key19": "4PPoVa8VwVbvq7q2Pa86BRtgcavYrFZTUbFB2b31HGxjnBQs8kxgh6RLeGXnz1iPpJFRov9UvcKNAQJ5UmsUEJHY",
  "key20": "5nBCQ5TC4Lo8bW72QBT247V4pCb5kxX2mrN1ZVsfvZbQkQqV1X8HmSjmRf3wGL9TkwmLLmG2aMFz6rg27oCK4DkB",
  "key21": "4EyXRRrfxuLL2G7yoozQ32PLoxkuqhc2WuqBQ798GecdbSkzAPQ7zUKpytDk5znaAuTeLm8danNxAhBuz1eKW9T3",
  "key22": "5Rg5iDPH4wjT7UykTnUJV6AQaHj3zRjY1uE1zJXf3LKcD1rhRPMuz3fNoS1dWRVcK4LbDrh1PCcRHxkesWPEVYNh",
  "key23": "2aDrP2mugjBY1FTRve7NggKaBg3QAosABXL7NnM9heKbo1PYpxDNu7qqemWFDEcs931uVd9sRGEGVvekNdzwkcTP",
  "key24": "4A7ZePnbGeqkxiaL5WbvnvMzYF7DNV5N3yvxeYVSxy27tBwjeaWEnJ4fYugqvF95NjbqRMfiJ9Q8iLWrGFSS8zAa",
  "key25": "3CupuKZnbiiPd1dDGB1c25XKGj9pyufDt81h9QoPHgFvavGHfi5y18WFXJT75scgpkXpfiYgUXEa9uicSHEn985Y",
  "key26": "3dEYt7bLGqBbxqbDdUzZU8qMEwRfxXYDsrt3FkFVRiNNDYdznBPeThiYqBAuT6cgoLsE3UEJAzRDjkaVXiina1Au",
  "key27": "ggWusySdXrkcrfxemxSQvP72YSJhpzBdHjCAd7TZGYoZjWGyBQBm9ztRKvGqkz8Fa4KMPzdGK5tWCUgkPnqXEmt",
  "key28": "Yg2TcWsrF3Yr321G1eSHKkt7usMgvCM5WtePbB3NRRcek9WurAVper5Q5nFCSjLqUsR2tynBajs5CbsYbd3aYy6"
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
