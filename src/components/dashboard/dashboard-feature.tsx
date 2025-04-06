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
    "2K9StLVYurfLMD87hd8JcmiB6PYdtTkiA3pM9pkC35G27TFEjhrivioPM4YuFvEBWrkCBR7GY2k7PrWVeFZAT6CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ZDgK3ceYFY897YcktEcXbzPgVKPzqAR6pPt3C1Qr1u7qo4tXg9sZ3qR48X9Yh4E1H9EPa8anSVZLvTUBNNVrCH",
  "key1": "2wnTpSYA4reaF9yp4qeuPZNYict7YSqnBUtMxR5Y1M5YhjAo76w9knzf2MsxUW8tRPoPn6gSHBUs2HeNb5d7mJSJ",
  "key2": "4xnksG6u3UPLxE295PhSB5WvUmUFpRJj6oxBQ5irEk9dpZ3KK7nrDi5dfZff83JVvCoHFrhs7qFJnSDg93vwTxfn",
  "key3": "WXnDw4ueTnKtzC9WPjwoQh7TQ1WGn9y3kQ96j8fPbjVhupzgnGhNFpzuq2PxZcwCLBkRAi34FWd3kct1jUbqT38",
  "key4": "hmFjYcHdVYh74qVAWB5Aey7X3LqMXmpPUnKRHrmJB1wLZj5oKiPUk8tczL2eph8yMQCDAebDsNzivPh4GvpzJcG",
  "key5": "4xDR9T4mTrm2Jupuj5WARba7eCkE6yMQ3ahz2yufT7fXVeXpfBoswvdgsXQVYAhArGA3ewMqoQ2nQnBqyiYnFAYt",
  "key6": "367xMduo7s5hCGGhypiia9P4WWVATw9TPFLSH6T9uDF1FneAQx4cX39TPQPVZhKLhiYYVVnyqPFbBipF5Sy7FYXa",
  "key7": "4MZBx4nruZ627vEGynJFQSJ37BvUE1wYfwwFMPaEACWmwdBaQg9ZjvA8ZTmgYfiTyjQdCytQ2KiEGo7H8KNPZddu",
  "key8": "4BXbvfYs7tbHXpdu1mbsu1NA7Kf7BqhVQRSVMdMpCJpNNcB2NjuBVRXJJRTtjeaHN6nq5r3oo58sRkw2v3fAVXGe",
  "key9": "5rBqCSULcZy1RrNq8b1Wt28jZe1yu9U9Y8WSvnHWALsLoktTneJqTLRr3ZcRPEXRpGhnjkR3RNgD4V8PAAhWjT8i",
  "key10": "3aGX4A8KHegn5PJoisdqwByeJH6PgoZFKsTAaMbuargoUm8vMs3fDNaav7XqT4ZapQbsxXRGPJxMkAi1FDQj8eyY",
  "key11": "3GS7798guqaP1iZYvqadaYhghVX8MxXD3afsEYwBd7qoi6ZLDXKRhpUeCagnbjBwLob8RuC7cBjLmoVU5fGM4YMN",
  "key12": "3q2oDjsQoKXaezVKHsDLWjKDLt679TRBxceekxFQN8ygM4WAkPdrNnwS78qC1Ye17eq5wA1Aua1aqX5FYTv2WMg9",
  "key13": "24x6Qz6eqWvDG5TA5yhm378p3o6fGxvYsxeGvcCax2SRfvnMGgeLar9vKU8bdY5bAzS5GCouvAUHfcNvYdswVr2G",
  "key14": "3aj5kTvkKHLMFQLf2eJNmmDq6YCi6Ygypj7y6c3SEMYuZ77VzmwM7VEt7dDxA8k9PgRn492PvF7GH6zsRvDp3q4P",
  "key15": "DAyt9vJRutmq7kZN6u6cdnTWpc8Cjhi1NwcvG8SNsKHRZzhDkWpPbgobr8oX3PYjUKvbJ2V7S58AXEDJ7EvkpXh",
  "key16": "3SQcSKYGyCfPCfJPhueBu8GvLQGRsytLNxS7sCG2JMr7FbDC12HB7iPeGx7GUg4fVdKatMrNndV5FRtiSe5JGm8p",
  "key17": "369LvJxFHVz4Ri1UkCaPfzabf1Axrq4G53aPsKAdvgnaKJpEqJMovrosR1Lj2MHP4inWTGraQtmZSaehfJ12TYpH",
  "key18": "3eGJJbBBv9mZqQy4PPhHmLgrZYBsZfjzBrmUWQdSwLEfjRY6hGLDk8g8HCnqt7zP8QNYsMrYWUrXjhhDmzYgyQow",
  "key19": "3eWnupAY6AVDTk3Rexi3qo3uL61y2WdnsrU59Xd8aVKWv3RrioCMmk4bVTeNwBFz1GCRfQpsjhkSmVFiHsvUvDy3",
  "key20": "4Y1LhqecjEJcHZ96Q5mk41jPMFQxgWoHGfpRBouu85xDTRx7nbxTULm1MP7wcPcikhvs5qRahkKD794GTorgyLXY",
  "key21": "3PK2ifACZUSUpGLomqKPtE5sGpHQN6cTWJQEgKssQGK4cN83UhyeHEFFWbtLqrqppGuqoJ1ujgGLaDzAAAu8PsaW",
  "key22": "4PmwHezzmCN7DzLu1wZ3vmsAQNfAST4k8XXFDKBTXBg88VWaVYiuL6ntBpacYq9nKHDpBcNMiLmcrDM5J3G5Lu9F",
  "key23": "5u7usUwMP1MkPnAwzk1hwvvHJaTeE714qxiXNA9mhWwpnGsFpoxdXaMQDAwDZcDNTsQQqp59YQG1GocCJW1DYPn2",
  "key24": "HFZkbnGJ5vYztgAExih2XDzKi2Mus4xWHcF1nuKkgMWGAo7K1fNTGVxAmmcoLdtwjTQ1nWHe1N4i6cm3Nd4WTst",
  "key25": "3JXgEkZoywapxDqCXWLky87rLqqj3NxY3N1syFs3ZteKTbYvo5jSypdd3Me7krNBcoKx8XZC6PCH73Nj35SjVnTN"
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
