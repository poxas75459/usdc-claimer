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
    "4F25GhjuVvEawj1nTuyWHNbKzzejXk8abk1jCWaR7CrghwVAXMfp1FuLixVxFJ6PxEYJE57v5Jvu1vfcXyy8ZLrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceGBx8pA4uDTY59HgqPpq1snD94opWqLLUxiS2tw5SgaUo8eeuZTvtBaNqM71E7uHDcY52Rq4vBCxsLvFEqQpjs",
  "key1": "2dZe1DnDVVuk7zfFNSCTCtR7LGYwMU6c5TMApGZb3HsP12E6d1pLpXtJqxYfEWugC5XJnyUjo2x8YeYuW3txv92i",
  "key2": "51GwsD1i2tq4VWaN1UoYP9red3Cqm1MEe91LoZZpbf9tofGC7h5jZUG5uZRLmiH3dUUAnTWcn9TsWgXAWALd4TqX",
  "key3": "4HC3NCaXhKcEJhYoPQ2ezBFezX3AaEBMah5Z6PyXwNsfg68n9X4mLqF4qY7cF5chycPawDsjLSeU2aWMdvmwsufg",
  "key4": "4C4QGPNNyh9E8RUv66DLJr7EPpNK6kxVRr5j4QHMopU4n4Cq8copNL1gxu4d21ev23VdKYBB6fne5xDjQZppEYzi",
  "key5": "5vsPyNG58gyCH2rv6XRfSJnxLCifjWznzRwTZGz6RaY8wnqjKi4RcNkvmgxCJyXg3WmehKTqk2tT2RDheJ1puwKg",
  "key6": "5YreqQAADNW3u7rreW7P8uqN2zRo818fFBMFL5VcFUSEu71ueMqCqQCgWmjKSc9MkZM8Vf2ruQjsUiJSNAXa5MLv",
  "key7": "4LD6RM8aQnufc3bFXHeAudsG6AuAgXNibkxQYLZQYaKiU9Gm7jbRsndCHQVBfcsdSdxWrj3fK6K9FPCAh1HuHN7",
  "key8": "4KHNpoMNDDLuYzrq3cTLnLKNrsSNdnKBSdFJiVfVLSBk869bX6oPkYK9rFE6WgH2ScfhHL8sezZzeGh3TeqtBdA4",
  "key9": "PmtEoVLtZB364kDQ4tJPU5rwWdr16BTQALMkntp8Wbbeyce1gP9bXNv9cqe1qwxnhbohwQSQdPwdyMQW4H4GhJa",
  "key10": "THq3nPWgWwQQNSwLXHYK4FY31Ppx3DbhirTypDjERHpJndDLEi7vYGMPbhyLWLxFCge6pJPLGQWWzR3qp1Pw1Cu",
  "key11": "z2LAtzZRocURQuqSxaiM2vCZTkfbuVkZmCiViqXJSBipjKdc4USzbvcDtci2d1ccex8MVSsH6bZSYJzkuhRB81r",
  "key12": "3ZibYb7EspMk1sjAMMDEwrR5GZoTi2EKHcfPYScA56BLL2Fte6cY6qP1v3o5Ta2H3eE7HRwduvZiES55Jmz8azMj",
  "key13": "3Yxc7pHDfM2QgdwgxA7CCfDJX8ux4ruZppX8J1AGqtFNqbaz46zn8eUiMFWuD1DCDBiVeNLegznoWTDWMtG81M6B",
  "key14": "3nopmtn2ZXidRF8u33984qQ6EUrdXNZAT29pjJQMCrLZqnQwYftuyMbp5vSBJiSksukrB2Eei47pT9HQ9E6kvzoN",
  "key15": "4cpHb9gzKAw9Z6LoTzUmLmfAJASCpZNerj5wtKVLv39iUDoSjvvhzQiVUoo8k8cu6DqvHmyCzmZafbyL7uTBUXzF",
  "key16": "3QV63Ams3qEcUABMmHuTwComZ66wiLFtcDWu9LZPmvGwKBTYv4nGWiAwFqtHLXDX5unR9Cw5yDQD1V4KbPpjtHYs",
  "key17": "3nX3rVbgi8aepmQdQLTqrtELH9n465ZgdWYWYHhPkqDCHzL9WkHV9QYpRhCh9sgTPNb3j4V1Z2QknAj6pGYUM4Aa",
  "key18": "3ywkZPG9eJ6jREGi1SpHEqJgW517SSbrrAHLCVnjj1iwNGcYs4dhEwQ1BprjV4fADvsgs6Q9mUEMWr23gnoUn2fW",
  "key19": "4mwAh5qhZjgpUTL6AGJbXqQaAwhGo8BmiTTnHDNjbB2C4SuMn9xyUR2g4MaUjudVPi4Rq9x17TjZgxTwBZE916Xe",
  "key20": "33fs7i4wfU7bejdmmnK2ZdWdAM4i2wdE88VHN6y7EWCRYKCFcKXu9NS5GssZ77ds7iUcC7YXKMfkTzfy2tgHT6ct",
  "key21": "rp5E5qmmysg19RCfh2LbcXc1NL4TE5p4BAddEDMZcvExDYVkwjnm6Y5MYXCL8uAw7TBuGPswkemHeUz9vFJXqst",
  "key22": "3PQfRJVKJ52BGMemTSkgqW9vxo5G5xE2SoCMvCMgQDVNjD6AiWFGf2GGKeCBGuyu1Gh5hp25CTZKefN5LkR1ewfi",
  "key23": "2fhkWgRep3vxusjEMVY99nrHFjwMQkgzbiZ8Tb9s7hPdvrGovPBJxi7QDFRJbL396tSAyN5tdmfJpZP9FjRj2PqH",
  "key24": "2JHiUia1eicH3b9vfuHTqh2dxNiTNQXGs1vkcvXjSEF6sCw11YBttwST6CzD663jXDZTuQ4Mr9cetyyrNxiyTPy4",
  "key25": "4zbu8szh6vFzau6DT4NPJeRkrey1G7rGUU9oCFFd958CMpV2hvCTCphVZU63JaysagkQCgiVVz9s451rMa4VYUzz",
  "key26": "3FUaPiHazvRvzpHEYGk8jGJvvaY7Y2YZUkb8X3k1J4PGhXjLCSpUs23ZSym4PWncEiiQtXNtiVRZVF2i4RdxePBT",
  "key27": "4seddeKJXCjMi1rpKb87uJyWZinDoV8GawY5vYj5Q5RP4qXFPHMrpoZnTtbrBKUPWw5STv84vT9GA11D5aXWg9o6",
  "key28": "2efbhaKgDu7edxcn5yhZgxExeuB8tXM3Wv7t5w4JoKJuHXxuifQBhpM7dzv2uj9hwaMxVcXzecaET959nN5SEnFa",
  "key29": "59du7GvXAtVgxXrnxqjDGm6m3vSQw3LTvkGT9kPSefFC5zX7HxSyuoJzFcX2Jdg8oKPBh4jQ2ou1ignufmR6VQM2",
  "key30": "2jALMWL7ry5ymPQPsjnkrfoi4ysr5HZjMQmU2Jipcame4QoR5SLX8KkMqsc7DmcDyVKYyNNVfXru8cKvcWxrVJHY",
  "key31": "3dLbabaLcpkukqNb1xVQq5dh5nonu9r9oR47exJkymoDTsTtWfgL5q7zoZ7sLU1ScZhMHDizJT2bbpMMsoRpsKRJ",
  "key32": "5JECm5c3UWqXy3gLwYUc4yMgNG9sUUJvn4ttNea6rtg33FqaU71n1oKZ5KzPyHojGkSLCpTuG1wwzb7VoZZLyDa2",
  "key33": "2591cWpxfS2H2ufe6GSWXr94XLXdUXa87dVr1R66wHdt4yoXSyUPezKmAxBRLzZ5GULd9oYpKb6q4isnpMNjtSDd",
  "key34": "4SBcixtDUTnPGJfKBujj5oGNB1qPXYHinQ1A8YdBScR6Tb4xYX65bU5BGSc58tZ66zENgAtosJAfpiESs8xb2Xar",
  "key35": "32wRpmFhovXaLG2XSLyrMJGZsXrXnZgXzxcnVPX4ZWgkBwLkD6vBooVt4jyYaoDNPwwX41ywFPj1LP9VRKJxK4Hs",
  "key36": "2g8v4vgRhJmPpFZAVL6KXfE6kXK18HRY9nS8fRm37AzRpLVoeA94L8cPsi7zPXx3WMJft4ms1xuNMCcRGYteX8mt",
  "key37": "2DtdfKYqeSxnpGrspQSW4PAj13r2zEyNKW7x3oQ3AnUkuzt2Xko8MDigryWhhPH9FFbqPJ4jLPjzFpK7ZhD8otTB",
  "key38": "5pumLYSmgZa4VZHFYFhBBEUWZFzdBfGqnk8MszqvBTrhkr8dpe4AszcVXAbVjZ3zECDCYTQ8AzASRXucbG8FbZYD",
  "key39": "2g9UxuaUmETxKA8k7BEuwsRgomYPfzGJ81iV8ukr9TqZfXrBsFYhjBH9XbFmFmSa5HE6M9d54C9dejddHbpFrwUc",
  "key40": "4fEPf1gXFYESsJ5Bhy5X7nfMsMxKpvUwK1ZKFH3ThijiAa93eyCnNGZifCdZ428mJX41hZrE9DJFKfPjs258gq1d",
  "key41": "5pr8x62TQB4ovYpZtCX4fABv962ggpESeNUh7hisoQxb3S9Wqvue2kUkamNBvKGmAAr4aZiiqRbELsA9sss59w4M",
  "key42": "3PWqBrmq6YPBQKPV4aFcUor1HL2CwQhu3XXWy2z4WgyTCGmafnhvxTNKGJc3uJDcGQUW3v6CxL2DycbohkMZbonK",
  "key43": "3cR83Pdjc9NFmoCCPc4mACMvt5sU8CCGSC4TH6k4RZgiJKQLFr2fHPnQ7FHJGZj8JafMSCEmTEaQoQw9qE3rcsbt",
  "key44": "4iD3yo2GXC4Ha4wiGhtkPVYPhn7xfftRFBQ8HaJXBhh5w4kUCZBPYQteQagrnzhGwwzpKGW838gyebCgErbZj4NS",
  "key45": "g4YA8XgBw2U4xaxdabAf3hRKxSsWRTkcvvqkuiwWEDbQj4xFKNRmcXnmGVCNHenVR5LZpXRPvFztMPih8ZriQXc"
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
