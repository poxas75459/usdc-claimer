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
    "4r9oXupYKTsBWDYExbZ2fUS6jKBkmuAQYNaKne8ZEQC1ZghA3Dbn3UohHtPqUt4dteJR6kvMTqCvKJ5449UhUvSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvkPJLo4YaRwVR54kopF8F57VcCEPomcB35TFbnEUxRzHaJTDUzuxPm6nUPRXYMzTPA2niJz4eQRJGUTT8wSzjT",
  "key1": "5R641AVut4kGVSw3YKqD57JFeraXmWQebG8hSpUPQAj9MDYwL41c4LZ3UZrDRJXumPvn2GUwU7L3sX31AchC9fCx",
  "key2": "2WApCsFcrweBd6QAgeb1TqK5u54eMipFvFYnZ7N7WL1JhEY8FBPaia5vvR24MJ7wyEQ21ZzeVK3NVMWhic4zXxDv",
  "key3": "4fEjkSq8orUJWcQ5VtQayeKTx6KrpZQMuaY4shzmsbgRtKL3nCQsMzV8MUSaq7XvLZxnVNKjk1JmqS9945iGErfH",
  "key4": "5KAn6szW7qTpfTNudFsZdmCn5Z2gngF1BkmDibDHogPRQZb7kqt9gCYGAbMUW65Bks1NPk95AXHgroiLt5H3z74k",
  "key5": "5ADdkQ8pzAX7tuYMEcrnXmWTDFq7Pe3yacZwkKN3EGaPfzo4uTvh3fwTx82vgKhNjbsuyTCcLH56RP9au4i3goSD",
  "key6": "wN7Lve98VU6QWooHDMx1Zrb15WzttuFofdeZ6eqEdgtcDWmAjp1EKfThYeKFBjcBYtHxrGEkAujvqqCeF4yksnZ",
  "key7": "5zp9HEunCQZvHX2QXZfz1U6vDiGNRNUvdguGN7a8u2ExjbhVMNt2LxJ37oA1roRaq3pAKvRMwyUMWRAnDcLGLraW",
  "key8": "5DEdgWSxxWrwmp8ZN1rio2kkwKXctDG1vFqvHKaW53voasWRtJMDwNC9oRBW2zx8suvSx1gCzZUX6wDxeH2idkJk",
  "key9": "4R6aXSRZRB2wcynRwpyHGtaXWuvZFMmaEyCzY8cpPg41AQWLTKSDZqr8PtAnWN4e294mibPgRQKM8zVuA55ZW5Hp",
  "key10": "43TwcAexNgYtBLfCeSPDEReY6m6Q9qoEm9hKX1kZpcXw4jACVtnUoa7U6Zd1UmWnUE1JaN1WaSTeQFksWgnRqpmE",
  "key11": "3D9CVnCqHjsczjiCEHwM6VjeAz21t31HTHb1KfUd15XZFrwZaB8KjYpFXescFKgz2YSNRrsXXWj8T5aq21a6bDiU",
  "key12": "3W1GkyCPWap2tc2GG1K9HLjgaH7Ndy9kErgaXiYmAsd1AbZX46quqq12ncYTEaKfbuTvNtB3uSZbHoy3qW1DtfA9",
  "key13": "3C3XWLHJGYqzHq8zF1Lf8oq1WpkxGKfVyor1p1ybHV88HCLz7J1eFDjPuiWAqgy1wCc49z98PNcy35t7Jwa6wWR",
  "key14": "zHA4Zw9YeqmmNhtkxavFBQhCaC7gXGjDTXGKcwS8R2vhRQFLa2Vh1HmeBGVBrDduTyQHmUta33r7MvhPnMz7Jjf",
  "key15": "3JkmSQ7AGkXBUL3Y8AzVGC1MnbJa8RkMKodPAMekiEQ8sYWVXVGLStpynRPqyLW9PMT2w6iLyzG1yrXqnfhi9vj5",
  "key16": "65LFsyC7pdHkKVJ4CHvUbVTuX4pkNx8V9VR3Uc2fc9jVs7YGLNaH2uaPdnuBhubpFyqpE1t1kKpZjRfpSrJmKkhP",
  "key17": "2pHVEEYQJzWWFNYbTE16jMEHw5wjhoVDBYKkS9rNjDqbwDyhz62hhtjqT7bMbcgMnrQeZqzHbucAPCzGmRPuFbiK",
  "key18": "nVizUCprP8pHAnhyHJQ6S5eHWMW35nc9kyQjdEMMcnvnXcqWZ9xJVjmeCvA2vYccfP3HiX94mY2kYzxFdx3xjDo",
  "key19": "4jqVMVU2o62tEvyFG3WyNhGErYxct2yiSpkEuwjZMwd2vy4SzkkX4wZvi3PbvTkZ6RybPvRrShnsHrU5BPkEdnH2",
  "key20": "4URCnbwvr98DVzcAKNoiXoL7q8GwEf1YcppUojTAPiHLSXiRZ5TFoQwF416sVK764E4SCBMCoo7Kv5n7rEjfoiqr",
  "key21": "365BwWTXmLzZ44izE9QEpQpPJW5ADfLaehHxfDQGPKXdQx8nXb8SCKa459oGVfMu5rbduPWcF2W1kjZYzimzf7x8",
  "key22": "4nBLgCPNNArdffM5Qq4GqwAA7a7zhT4ovhQpE3KJRTfaiDR3MCEgc5bty8s4WUGaCHvS24xS7p8HJPguPWZsP9hU",
  "key23": "4XKUNqPJqbEPjAnXrWfoky8et3b3n8YxpANCzLD57ejLNbKWaA2qHjwHxrqL8HTw6JDjc1Pw6MPFwuaRe8gNHdyE",
  "key24": "225b41zJJX2UjoS1Mi2bij82gP4zRDqvW9xcxh6ex994fJDRpKWW65wuKhs1xpvoCyCsg42cnB5WH7HUyBrZtbLg",
  "key25": "gikSUSkEzMu9v27GhwmhwnWuaWsw574gSr22DzAbDDjERQ5THwjxeXMPkvsgaNdxHu5WXtbxDgHkgFifery5pPq",
  "key26": "H3gQdwfLka4naszN6ayFMMqcnWHMAkiHpgzHrnZdraKf8NR6Dme8CQCHqkgYamXeJCgSMcnEZV9427HMJRTuGmV",
  "key27": "CRTCHRtgqLB9y3bTBpkVqqfMsTZ3n74hfoqfsyrszy4rFFcwmaXx28qmAqm2tEJ87hT9KjB3ipeHGyD1ZMqAJtu",
  "key28": "eN5XqbFH5rUggvUEyTBzeduHWP8zx8rYdCrrKdQ4PKHxAaHxkHuV6TDiBdxAa19C3CpFvV7dg8WtTgZSCRbFQGe",
  "key29": "3bj2PPzEHzvAobt3RfZ7cvVNhUE2WYLYtnsstXer6d7GahCfCqyVj9jy2kUaBL3DGyCEZ6DbCFgXcUMdQVQwUz5J"
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
