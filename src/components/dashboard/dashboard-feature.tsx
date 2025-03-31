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
    "3xwfcW3SABhJSNUemEmyYVLmGJbbDkmRGfGEZYMpFVh5raGtQM42JnG6m6XiM3c1pqjzHFt252MtA5aTW6U81Paq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGn2AAfjEvc7F1F2JtvzJZT21uwRSmPbxcLjnGgaeb47kT4yYhBZjKDb7aBSXfuCiskzxpjsikdYPkomDyM3D95",
  "key1": "2BaLQstGeSjcKTKRpRdTWMtYZ5XxTRXD6fe5NLTqEkJBgQzhM1xVQNAZnPgrFTemWGcPbCfFo9Nx964xdknMXN5f",
  "key2": "ZQuVJAJggjAYhh1ZkrjkXoWGXv77nPwQnTpdW4QTvzt6iE3NdAH7uoxtySjrHt1LfUnjzrjU7epE2cbktayNiyY",
  "key3": "4qvuZwNBxmQ19udMkyVJsb4r6e4Qm7hVD6n6E5FboqrA6L9je7mMK5CfxqnAhP1a8a8W6AyDHUoipov6sqSBPhup",
  "key4": "5ndg8UTtqXCBxZzpbcC7TWQQP3RLFuTwpLu5m4dYMy2KPzgG1hL751JW9MxzWy3wCraHRYv3y8YYT3pvhr376auT",
  "key5": "3qWyPDuqEQd2CvRDyGNGvYNGdyT7UeHnYwYBgYuNGWrv651JJDMiszxm7FkDjdjCvXpQEt33BfFLjKKwz13xbMEY",
  "key6": "4XUjfgpMhinNPR6zjUffwzrtt4vv6pC37JzbWpiQgvDK9GJz1RvqBtKiJqiwnTycezg8AkJbzjGm3CrQYn9An8Zc",
  "key7": "25nPKAamvVGB5aJYK6n9VtRR6AC8DtFX377EZdSLqAMNmSYPitWGmgwrfPPF7BNgRcXTDBsELig2dhMHrLfnUz5d",
  "key8": "2fxdNesXbg5NQLUncNz7vFLzUccwN842N6QEpjNGLMob3biRpMPpHecVzEPtxqsf8qcuVS5S9Xm8jnyo7CTaa65",
  "key9": "43a7A6G5kCeJZJyLpGFbk15ArKV7FALqWGAARpMg38zkn9JV8hoHpfsFzKkx3yF1UxEyY1V262HfdJKxsUoYERHE",
  "key10": "5vQG6dUZMU9FzRBfn7k7rd379hUD7HemsGxDYVQvgVYj69iAoguvvL7E2TGeSUEatUBUJMFUtuVcfjJ9PmTEQpfD",
  "key11": "49h9K5mGBZFSxSctQxc5bdnU9ov4wVvZiV77cfytA63ZHjxWiifjqC7GyQaUjWnwi8dkqqi8mrQroj8pVWbqoNpD",
  "key12": "2oaaa1NKanb54btQ2ejjd5yQBCPB7EwYRAcDb4zBpEkwEafFq2umomBoPMx8QxXy3nrCPeRpeUazeWWEDKMAQQPf",
  "key13": "54cZ9HnKEeK5XNt3wrxNytPCfHvUr1gAy82NFexs28j2xqkcoydjUHNmji31R2vt4aPiYfHKHnWC3o1i7JEMCKBr",
  "key14": "C4N2kexrhKKeSwgrA9zdxzBMVRi475u1fWtc9hhn5aESXStiZFo2Zh1JD2ccic14KEsB4Dc3NhTxABu6FXutKqU",
  "key15": "2SXnCYobwVkvyqHinNZwtLcMDzrWHPQNZsb6Ymzq8NJujfPSi3Mbsz6wYyynnM7dnvgGNasvd6RNrRXxKUwbyk2J",
  "key16": "4dPNpsnbV1Lj2ngi1Y6WxawETeyYkwz7okgv1nkKL2fbVHTQGjkGsM8iRMdst9pz6NXqtgA3kvnqsEK6HC3Lwog8",
  "key17": "JxMVnFVUgD9dSshaiik7fLxZWDHoCQm9g9jm3qgdC2XWGVYPK7WU9y8Sp9jwPccy2cuckZnHaBHnbkAcdMtpB8y",
  "key18": "3LZ2qp1DDNFi9PCjx6sZotNVzKP39QSht1zGdurLgXd2zv9iYbHerrNCZbhw2m4zW6kS4W2LmYs2BBEMoAz2b45D",
  "key19": "3z95gwdE7m7xDCQgfCh7dRYBE1h5SXk2hu9v3hti94PpTKArsgJ54xeQuf8VoS8jRhDhxRKLBdL7svtXTMZQgbCE",
  "key20": "BFLCnETrQa7WvXDr4tEcQV3N2eEXxsCdNuS73MWH4LUBLcHUPa7rfVhmwRxFCgxWPpMoo8c2oxAA9gLmr5RGPA9",
  "key21": "5v8Xj1CX6MqMiiMt6jNteimwLVp12vuJx9AeVpr22dbMbzGetZPpjt5nTaaVx5rzwwcUWWBDXqWohnhAe9SDZQ1d",
  "key22": "4hdVTKsKko6yJReYS7wu8zk9cPZX1eaAUpsHmgK9yY1HAQ2Bre43Pnk7dsogWreRdr4xMpYj3yKsGVNPHK3tQgGo",
  "key23": "5XxE2YhbMHSzPomwRqeLXVhyGiLzeRUB5RCjVQJLvREMjUKU2LSRApn3XEECqJFznFf8oxMSXn77rVHyKKvCXBvq",
  "key24": "5k1qiV1jjfWPj8ygMNcjUCLUiteQy7NqyjsbydjdnJ5ZkHZNZ2gnZf4N33yiwDDh3TR283QaKfYBYEBtVisyRpde",
  "key25": "MjJyPnLRZgG7X38nM2dixbja93PZQ6dk3naiGiCEd6jkpP7nVyAZVNRvb9WMQZzneobF9eji4LYGd4CBXNtpErV",
  "key26": "LHyEeBZYnpZph8jSCbw8ZboHKhCCuFUaP1Mb5meKqerJTaouE3oAdtgv8JZgwpjhEBPCFyAbUGsrA4DZJLRK444",
  "key27": "HppYQQTnAXCJiyz6Y6YiHmxjSq7m6NMDzsGWrCrgYVMRdWpcEiEWowSX2hNHj1msFCVuBxM2Zww4Ecm1QR5xY74",
  "key28": "5J3LuKA2gQSnsQXozaVSg5tSYEbeYnnL7qAYz1jZpr1TWjsiKQoFusQu2fzQ7uBRemPDPddWKPSpeA5Jgog1t7vP",
  "key29": "27JutiDeD5zRWC6enhnAh5FQApJGWXQTY988dYXtunRhVMQuZB7NM2eX3gBCad5NtwiChzgdVq8oGCH63AS1h8bE",
  "key30": "3KJWLYXPLzxRWpS5HT6CetuEERV8s78XTjVL4wUBqBikypLqxKbDRdee7wGVbqAnQJeufrPwDweePDBqB9TCaTD4"
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
