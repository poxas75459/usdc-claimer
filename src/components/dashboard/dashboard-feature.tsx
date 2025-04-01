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
    "53iaZoT3DPENPwbN3Y9yMtyZweM5hYidiZNxg3cYqj8TCy21Tatn9aJG6AEDC6n6k2Q9KDrLk5QPF86tB1LNkEbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ydxGdGqJXbFG6x2YQFu4tDFfrY8XajhGzdT6nVv3qh9LyoBmWKL1ibNMkaZUY2i2rSw14ofmWkWcgXpZLbQfmS6",
  "key1": "VLWd28etJ2LzPvPtBuWvvBSQqC7EkyAWwZXhfMPE779Kf9XZGU7XX4HQjPRh65NH2vHZatqYVeV8KaCJPifV2sZ",
  "key2": "2drvhjE1YF9nwfQV2zC5CrGxtkj99DXYK7ttQrQzU4UsNoevdmoWcviPbPxGDtgCJNEkfLPvBvy3FtbQEesM1aEc",
  "key3": "3cvcAusudRJhgFJXv1wqUkgXiXwozvfifsVw8J7pXVimaVjWCQc19VHd9khxvi2sC6RyDg7K32ucMweHqrpFiqD6",
  "key4": "M9nnXtt7BBMVzGYDSshLqWe2xFLBpyQ78CAr4wq9icFVt6DoVSR9rdX5ktkQ8EhSBLa5GNm66gDiwhK1hc6rN3H",
  "key5": "496oeMzUjBi53YTarjoiy1hKPNygAQooKaf1L4bVSSRxFrPzsRs431sVgSgM3NYvr4pVjNVEkDGJkVbw12zEs55R",
  "key6": "2K874ee6k2MFeh6nfaBVDG7LDfwPUs6eimo3JXAZNQv7hPaSnhXij7TChTzAZfGgvSmV3f3MGRbHXJRHsZDPzizS",
  "key7": "4mtcncv7PzsWjMAL3Eu23ro22R4aaweSJCdQvjJuwK3Dn2H6G1ppsvnGYrDZqyVfPS2i8tEQFdzb5G36AY3y934y",
  "key8": "2BvNzsgHL8pvYUgurM3hCGAeMWg8gBRyWTHnX1eUJUmDgXJny5vpq3XEiAxjb4dkUAE5aFdyXVdZFaJVi7YEzV9c",
  "key9": "4miUAwXKtLq7cdkWsNDhBR8EGQD72m9PqenBuYR8nkoBGqKQLvBWCYxsMdap1gDMiTKmVMeCXHuqctLdDfC87mcp",
  "key10": "5a7LTTfxHNwVMtW2hmGKu5NK8HuqfXz9PwsEFdDF3AfsF1a5kc17mQP6TmC2dnFdH1vcvyBVuxTMRi3AzzsBcJbX",
  "key11": "2g7hGArvk8iavFRnb1BEyvDk7H5kSkuwbMvZffxbneUxEmG1pmnPEmz5UUYWaVJsgqzK2cioJ63fjeQEJPoDBr6v",
  "key12": "4Ni63PX31a8exc7C8xqTkfkuGYaW7CcUxmyGb6nHWGA9cciJptW5B6y15XxhotUrGVVvnaZcXJB4sNkW7Qnwm3zb",
  "key13": "KegkdjWPqFaLk3fTdzop18VDzJTTVyZYzwLnxR8SvinGHcNhSdm5X3wAYaCrbv22aRNzd6re3LGYdwVKiod8ENy",
  "key14": "G5Rhu84dqfSaaLzPMUQpLs9Hwmikgjx5r5c7pwbDy9TZezRNA8hqnRXgpQLH9uKKxWWwK9BQ5A5T7hKe88do5LK",
  "key15": "4oBNr6XEHvFHLSXijUb18PK3tLcKwReeVJabpsmbSUZqYH723paAfdMi2bdSY8xztcme4yYXcFrVibbDARoF9nv4",
  "key16": "3D71erSAotZCCjRBvJPi3G2aFnSnnn7VKXR5gp96LVeoNa6aMfZDZjXz2dXFWrTDjRVb2YfjDo8iNpHa89xvZzgM",
  "key17": "3PwT3vemvnhpkF7DbhDbw8wxfr4Dd4dfoYHU6V9ABcTKt2bVN7MU76ggJdMiEVvBYPuu7M5FbYEcTmMThRZ8JL1Y",
  "key18": "GskvB89Tmxm5w4vs7mSTxcMW3pFUZMerYEf2YU7ppXt4RiaTZReVoX7HmQGqzsYdrEQKeP1AcYTeXrTxQJaEu8U",
  "key19": "2TBonp6dh6Df4Gsygo1gaDVscJVKcHfN7Sbpa5dxjLnTe2qWH5U5i43i6F4wtAgd5hLaEBN42m5S1pFtnpNPXr5d",
  "key20": "4WWPfuk41upxnV2Y9YmTDxRV415EcMGv5hKwz9m8Uxeqjz24Zrtsm7gGxdcU435kfByfzVAdGVb6cfq8W2b76fXz",
  "key21": "5wzbMMdE7QLRPPr2mU1meFMTxnFSswHWJgJRn8PeRed6miH1PKDzMB4kMQrrBMjkXMJ4zLbSUhvG14BmBPo1oN35",
  "key22": "2pajUFDimjSJGvCfybmn3EswLf91bGsvtQmyVoubCKuDiT4GXcgDg5QHHNu78iRbUAyktBAo6wE2sscPsrGhzBYB",
  "key23": "5dEqfnsJpUUgHnDXoDe7q7USzK9tRYVBsnFXLmk6PZrDVRmCkv2FtuCY1rYUXT7gTigjYuxrKkCSfYx2uy7MA7zz",
  "key24": "3qi81PXpUSMnRRZSRkuCAFHgzfZT35g6LGw8oBEyheuUbDNBnHZMJVtcN5NP5Bv2ZoPn6iGpSnne4CLpX1s7UZGB",
  "key25": "53Uwge4Ms8zhJGr6oF9CTNPYp7bUHkQL5R7hfeaKViC1K5M44sB4qnVoBvdw62wyXe8GYuRaqRL8rxgamwTJNuL4",
  "key26": "5dFZL1pGLqtkVcJcUUbbDd4CRPs2torkz7wCqC5E5Tjhi1H2Vh1c7DUin7QyrzHhoqN5W6JmbPhDBEY79Ku9SJCg"
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
