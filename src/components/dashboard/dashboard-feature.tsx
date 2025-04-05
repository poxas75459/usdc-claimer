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
    "5C7UP6d2U1SwCndNgNKwqVdTKg9qUKsqbmpBK7epncmPkxzJ5NfoizbJbNEtXziPNd6AeA86p7qtbGGZfWjwNnwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPtwoiRqrm8gxUfgYUT5rw3DnHHL9krgENvng7Fg3bu7LaQ1w8eBeqL32czC5fFMRuUUBwZw6RCtqQ5Ba8e8GnJ",
  "key1": "4N2r2MnoVV443TG4mdWgaB5CKTNf9XjsPaKUMdt2gBDwbkS1arLGgQaLJXMtP8dwy511d6h9RD4joGiTaDcgMYrV",
  "key2": "5chGsqZHyJw3jLH6oyZj1FPCCrbWSni3FNFPK4sPwwDiggYf3LVVkaGvvzw4Rb6QqBfEyrEF1vtsm4uYt5GsK5v5",
  "key3": "2qH36RxeaQtGr8qLuoGLPv7nHNPpZJkxmnQGXNQRsGZJSqZyRVNe5XEBgsq1z8TtkbDH8HD5mpmqN28P3GFajHfg",
  "key4": "22wCvP5BgcGxZhLomGUEhqo44vANoLN34Z1GNTWE1hL2pAdRgnxV64PqpCKjinCchufcRtm94L9PKr77hTpm1gjH",
  "key5": "hTsCLjUMutyEjxj2T2j5Qz9Rc2DqGoCRNnCJb29buSfdwdcWAWUifcGwd81f1tQ95SppLpmzdMzQaF1Jpr99hpW",
  "key6": "57pDLsHnUFx4kQt4UHYPQpMSs5CPgsqLhVy8UKuadh3bLAda4tGyVodDNWEPVX8GjaQFaureH9PQierNRBC1gYs",
  "key7": "3hzry2c3hm7cRBakXEkCv1qccQm9fTyDPznXRooSMjkjQ1rUbtVNtV7XAeWm6i5okMELwWjBt3frf9Gu8k4wJCVr",
  "key8": "2e7omCWsi9uGdjEF6cBaHeiYPmPCVcZHJQ2n2mjTHuJn84UXjZYUT47bqzVifQGX92ECNQGxrF13vKAuYukV6Rg9",
  "key9": "YrdMLSniRHDgQeqWu2VfjcJ7PC3AWXhTo5iMEAfdJpyPwjFMsnwKacqqF17SHyd8dQGSFfeUbNw8mcEvqZM6tP5",
  "key10": "4q5ERZdATjVq39jsbb4KDcXZ5NDVuw1ZVZBjsA962h1W9GFyNsjqsu5mxd9WYETahTNP4gwWmCHEc4KW8v93rxTH",
  "key11": "cp45cF8RBbWhZ2xTTx7uBPi9ihScUHVE5WkCETo4rdgGL6um81yXWw5txG3DHtJi4vzSrj9WejREKrrXi9gjMJf",
  "key12": "2BgbJcLnrjBXKiq9JZcrCwGdCMHqGM5cvPyYAaR8ca9JzFk6ZtwJVXAYZ621hr2FY7r3o2rLzGz7GiUYyfb1LaiS",
  "key13": "YxfeiMLpxHbpzduXJTcAXripbDjXr6dFRieiYvMe5etFUcjSrhH8vyVGC5ZUPozyP9LA3RShXM5URnugxxUWQVG",
  "key14": "5eZsCkw69GkNuM7WPErmHoUev7M8Xs2gWJUvYBERdS2XjrLzkie6cDkgBsZGdn8EqkAih9RPDez18ZpYXmZmky9F",
  "key15": "5EQANjRQcmMaTfm7L8q2NQhGwzdRFvW4jWKXoMqrBb8QBxbFPe2mQF5Hi9ggVcSu6p41hGd1Q8znrVf6ShD8xAZr",
  "key16": "3roi8vwZx5MQ8YSE7hiDoUYvNb3jD6RLMMqWup5MA2nLYoBW2MZb1LwWcURirnunAC9k9AwFiMq4V8kNEyLJukBQ",
  "key17": "5or874ShDqJ89W1epvxNn58MxKw4FRs3qBgsKtFs7nP6mSXSnEn6JFW7UG1BgpA3HgLwAbkJABXRFHvsZfAEwqJz",
  "key18": "51rUveejJmtwC4pjx6kFstxpsYLJrztMhK7WNf7poB72h7XbywfF6Cy8kwqr8fi5YAvhafp2mDK9tepCJZtpyBNs",
  "key19": "3odQAZpMFVXkGK2Xdh2LUN4iMZuVD7jncNTgCDEF2VgNh2644Zbzc5iVvpBgcrPqNDK3bQGm1a4dPa46nJWfGf9w",
  "key20": "3Bt1e1JVDcKxuPda9Lnc7eUuwA6smHRcaGXnWFsyTKAennWzRG3qYhE5j9RFzKwvjff76BTtwSmj4hgRZJsw9ct8",
  "key21": "5LbMyeGAsYcSxMAZBBZVhECodAGD4kmNcHL3hQJDXjJC96qZ7YYrwNTg231v84BhrfUxuf73YCX3iV8BjaqvxMKF",
  "key22": "2XAMVL4g94tJsFmCHMugrLY65puKy4SWvCjvjwC442mfqYn2T1EmT569XRt6M23sUzVj3ty3Fh1GAAdVJ6A8ZtuX",
  "key23": "DDrJhEavkCR6xYtUgvAGhMaVj63AoR5CYFuVhiV2U6Q8wqdsvypc4F2LSaZEE6vVCYTxG2pUsHM7ppjjEPjr5W1",
  "key24": "2YSYUYRCHKnic5nfsgavDkLseYbdL4fDXvHbXRZqfBk7qZLAnpKyz5c9584FMtk7hbbZsEHDU8x4w33XTfmdXfaB",
  "key25": "2L2zez3qQRmUfiTFZGo5aYPpu9HM7YKKBPYohrW7SrzKpeeCqQdT5Wu9m7Q5sJf4vTKSgmF3pbFpK5kJdjWWJ6dr",
  "key26": "5m5BACceqBbBpUfoMmtbRxmrEAPS8uc4EqmXXSNxyNMcZ74tWNS68BmgiNBVt3RMAsxteaeZkT93c7vfyMe9FVEJ",
  "key27": "5sbszCy5RGyzdPJAxMDTEGv1M2F5PmbagwT5qaCqFSuDhcsGKXfJzjKujo9rcDAe8riChAXPHFoxbe1gRgM1NiD2",
  "key28": "3FVZsUFaebp2spQ476tPA7RJYZarHqEDGsBFcmXHpVbee1UPjDG767cYWAzFZBg3ju6yL4j4LtoEQ6bh9ACsoVet",
  "key29": "56Tq8CX7zWKoBgCmGNtvKG8ARmKLWYevygVfJiNsNAas8H8cvQeKmnTvWcfkSk9wA7sPP4XhSBbWQJawSMZo96v9",
  "key30": "3J2vRCunq7qpvbRiqzDqKj7WiBTERrZx5N858t9ohvC2JNjXvqnHZ5RxqCEcd5UEKUc1BDkLbNWjt2tgcS5Mf2rh",
  "key31": "USAWCNL22c3vURoAxBYN23v8tuBEyqWapc5YxoV4bfHpk6cgY5nku5FUhoHVhYi9yDcgXKSCLAu7jnTJTeUwkMt",
  "key32": "5MWk5AucsWf3oiXg2qpKr6uQPL8U7x9B6HhGsRA81gqjmnTBC3Usfn66utVNeVs5uVxr3n8KXXX7GkxXS92mRb5Y",
  "key33": "2HidP4CTBpFJqeazz6jnRaCjpkGvEAVcbmEJi6tVQqX7LZpbvJDB4yMup1iYDRDr7eTaJgtHzMo6zmHz9iK9ti11",
  "key34": "361RB8bge5EELPNGK5aVGUHbtCHfHS1ovEmUwkaoEUurgXXVzG7LLakG98E2bDP8otm99bjQnwbcdbrMGtyQ1Ymv",
  "key35": "4oNMkcEHFGvNvpECAmr5rCJfQfAkk3nw2s5qCfi55W28hAVQ5qmFgbo3W45duXpT7CnPWFaimgdUvSdTGN6aoYRq",
  "key36": "2aYD7aJKWJSnvzxrNPHFsQ1dWrCNNTq1skupWpMEabyuf3A3iLrWhedgxfVyeyDEVcTWkeP7Qr1KVWeHF2NQkSEX",
  "key37": "5xxvPsKj6kEDvGQgXecvwMZutVfngFFWSZYq7KCDGLcVXgv3VVekDrR7fKNPbxcBu2YCkiRAZ6c5GwYcW8JRiBQz",
  "key38": "4DvEZp666CoghbK6hSd6iVvP64zxX4ho1U4x44Y2VHJLF7UuM7nNH3xnNfBD6rmdhWTYZpFkj9cCdq678ZxWGGWS",
  "key39": "5WfGJ2itotsfznSnyqpYzWF4ak5mkV18SEg2Lva7fczBA9TmMxPUyu3qiZ2jZKHnVhKUNtsPDAtMmWTe5GstALmr",
  "key40": "3nyZJBfvaas7Uc2yDDwHZmjrcMj5hCCAjT387QFexhXJxiM4RrjyZR2fdBq4JVHSLuBFE846dDpx8TdhUGswzf6W",
  "key41": "2V9EoQKWrpVbLPXno6qVb5k62s5KCRxVkHpN6FQAdyJfsG6W2kpKMNJqp3wKpZ6Q6cbV6xWVNGTjMnUhaF2tSLmy",
  "key42": "2fn5eRfmoMBL3kqinkYHNH8zeaX8kLWN5SnEeScdKSvi35DeybiCV6PwhKGTezRhGTnq4ZfFdZriW36rQcwPwiqN"
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
