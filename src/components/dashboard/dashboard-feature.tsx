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
    "2kbNyq47q4ApL4oV6Ng6rgNnD4apFVFbPoKmNU2LBbZDQHxVM58QNBTXWEHmmmiKr6hiFQsRqkSVuNX3pDP8WXbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7gfP2tsjFUZQddxgxQXcWHuFCvruTcmAa4utB4VzxJTLx7usHmzs2JGH3D3DKEgBUCta8nozLBAEPQdrGnDEtR",
  "key1": "45A54pbfvkjfgwdiZqNqyLXGbnjTrnvumzQYG633JeNiNHbELTrwzdXXpihfscnTuMRNiH22onXD1Vcb3HW744VA",
  "key2": "2twCfh8xFNyxGYNsUk1b84HHwhNLcTXkhxvUxsiZUwduxFHyAqYJuc7Hpg73hw9pCan3nsuShmjZyTVijhEnsbG9",
  "key3": "3Kx2fFPYn2KELn5e62iyZW8cfJkhK9NjXwCE7zgaf6VwL4rzGcxjDgDnNUQbrq6G8tZf5yUkLruYDxFHhkzEw5mv",
  "key4": "2YG2zM9LWMmDbB9MvNqqMRxRG8hKXPW2XjzuUq62cZKZLe3nKiLZKXaGeEkq5yAWbZiGysPjw9mqBztfK6WduoAt",
  "key5": "5bVV51ZpfSZUp7ACNjRYdgE3RL7zUXktoipEYP7bN2WNFWdeL7MacAs9gdP7HBurwrWuNDqQhy6bXEPPEkXLeSg6",
  "key6": "3yEzZvAUrPkeCzbf27BMqzvw1mx5VAegfPcMyo1NJkvmj8Atx5seiTnYRsUGQvFh6qmAH98t7BCEEFFWCgJS8bBo",
  "key7": "4kXgUCcgpXWjRXHtAZvbGXruMrfbCFGtXw8qnABJZ6eheiayGkzYpsTSBKncFoaz79NtLJYUuaDswyby6v4MLM6v",
  "key8": "TqQMp6RDdbcnFrn6Ada8bAfE2dpgvKHBgBiXngFZS8KQ9swbcyJ2WqyPURyrqpkDELPzvLDJ18jPN17rsYHHqNf",
  "key9": "CMvSd2DAFVkm7mm4xKM4Pg4PZUgFo7KATM2kKEdihEHJ4iVff3AjrDMVe13eK3A9bcMdn1dNAYqnGt5LByEMZqN",
  "key10": "n8Ff6beXGCd4Rqg8AakGzk9fUQgERFnA4Z9aK4nUegrffPgp2ezVMHbmsyWC8ZprrPddS8e1reB4o7sLoe5ZeKD",
  "key11": "4sYVu1CGVZpbrGAqoZFhAvCwsCQ5zUPoVfxETbAiNzeQ8waMEpHpZhyEPnkNDFqeW7S2QkYff89M8EY6AxmKMbZ5",
  "key12": "4sTwMaBJwNjSkkLRFKGfHmmczGEU1SEycdDZSLqbERGrKmV2Gnrom87KDy6bkHWaTmVJzrxfRHTa5z72zPRwG1t1",
  "key13": "4FmwN6qeo3mvUEHXV9BAu1oNMJMKSnmC547T9rxXoF7fJEXy67t7ur1RTQ8BkjU7cTRGUbKsZCeq6QKyXwcT9R46",
  "key14": "5xyAMvsE9SwBZ1QEszzebMzmX1uA3xKk8mcGPYzYSU8rGv3EvcsnPwMbsCRFMs2gfjnCenq4dDTNNBoV8WSJCZD6",
  "key15": "5s1cT9V7FFDjVVPHNkAzWDsqWV7MB58vxpRSMywEgMqnBmrp3PZr6jiN5MeTnD5uqLLGYFoA6zXDbn3RmKgnEbqs",
  "key16": "3uGezfsLV8HXPVyjneVQFGpshWqA7RDycvi6vrrDPwqza3pFWsmpJyvuzn8cc2EMcVF1Zw63tczLiBos93sBFJey",
  "key17": "31QwJYNR3z8fqMZYHJhSAjAezHP3kTb6F4riqCyTJymkXSDcykLY4vDJpyXsRDUkKvxYK7g8yMLgEqfETzXQmTJL",
  "key18": "D4SXCoefX3fffrpfozPf9UKWPrpujP3QnY7NFhZUVknGmshLG6gA1dzZDyAvNbM1DgyDZBiPGgGNqqTZxQ43oaV",
  "key19": "4ohNiaATqgVwbq8MZqFWF6SNi832b8Kkupxv2Pf8UzHCLTJFLXjn92wWbB8zXpBDkHqq9SMBURx47d1dHuZbY4pj",
  "key20": "4NLmFAGFnDAnkqVF9fxTjnBQ2q5tnCCqDutMnXKW5FWRSprwaAdp581B459m98sXQShA3mQVksgTcwAdYDgfnFv9",
  "key21": "5QdoNwr2LpyLvdsjBFQEGWQLqveRqNPvrd4b4f381Df5U16wm4FeyQDekiJD4xgP9NwbpxBPCQqWzhbnUTwjxSLJ",
  "key22": "26CnnMrv9tE6WTUNbu8XnVxJQeSvsarWiftUp8FFfTuPF5PU6dyzF1eJXrNgu18gKk1EL4e6Rnv6TNJa4hat2qYR",
  "key23": "1dybuVJqEyQhqUU7kc3ph95sd3DJLeMviupRQxU8XynPedgdgZVVf52eu5DyoK8ym2nesjNJs2LECDJR31fNnmA",
  "key24": "4beRTscFyJfEo4XJhahVTsGKHMNrY1rfsS4gHssuFfvVcdBmnBSLVR3fodNgKTbv57wCnZdJHW9PttoQaLBtnVB7",
  "key25": "2b14c57kAMpNaUa8zam1EM5D2FwqwAicZKUPmvio7HhzTvixevRKHY8bcz29ApdS8iVZLzXbEsR7gwnB2xYHiCEN",
  "key26": "3DfqF7AaT4PqoH5vVGL989bYu5cEm1MVJ1bMGjzX4K4iBVQxeQU1teujivrcjpYgspBA8JZXg4KJEMrUkccwLyFx",
  "key27": "vY1jYwEe4LcydiqUeFMyg7DJesrAVLjZy3QeyMo1qWqwsQUfnJzW1FBxdorDEg5Ta58f6sjGKRiRnEtjgCzXtiF"
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
