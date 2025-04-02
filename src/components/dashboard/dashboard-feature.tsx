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
    "5HnemcCmkNQRWuQoyf4hTBht3acT7C7ZBEMWSLvJPzJqnytNca9gETAQDdUrayRW7KZTwpwosoi7tURVwbdXSXYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVhQK6Wn5q4mz7jammMn5FFqWnVYzGmXsji9ZG8wH69QxRgtgEzo4Hk8MZz4K8pEoXMPz4PpvrMfpGmK4ZNdGrp",
  "key1": "4kYdCr1poYsAJTEfTGg19ydjtSzigYv9GWJScq555Ej6z4zydDGPhVdSgsen37Qz1NXa1i4yFj99NuSNVgw5p5iX",
  "key2": "5MpHdtMnugXk4fLAFmrJSLiQtJyENttxCZnP4Hg2omdhR372TWWjSam1s1mnANiYd5WDgvwxgMmZgHWNxUvALHRM",
  "key3": "5dQfwjraSqhSwKQiKBSu3s2wqzJSX5QMU84BbuYn6oHo2DmYLGLyXhQ8bzW6hQQFc4HwqnZy7HhFsbeHYRZ7Rqbu",
  "key4": "g69YtJzBkzgKCkwiof9cyqsdQiq3qkcAP6sKnAMxhPzW4MPXPEN2gLZWptqnktSAbQEcFUAx8DqKrifktQjNzz7",
  "key5": "4zbQC4GoDjrezZE5SwjQ2HL6DyhMr9Ld9CJGHS7X73ZvWgLFa2vza14Bsvn1qe8vtN37WfYPjAd7fr7yUAWx5rJy",
  "key6": "EsjUeuGMkfxRvVaqRXa8xwSCBU8Ei58sWD16uQvnnaz15udRxfkyR7N8uuVJFGL46a3H7DbKxdyw7qLHPWEGzxb",
  "key7": "2YJiS2KaQaKBwSAGnmAnuZYb4xQKttPLTL5UjcpJnUtMvtbQifEGb5d3K5xoVktQXXHUuMj93PAYsh543w2Bgk6z",
  "key8": "3degXCptER8cpoiV3nrqXgH8775fBJWtq1sxxA3hTXWpph8HSbtV91BdEupCA4KthnJzzcktSMDoaTEXHUUbqvbv",
  "key9": "5YyGyGYZbsscDJv5vUxsCWB9AZpw25YfoHUYbjYh13BnxbLSjmLrXZb2ux8RUi5gFnqssSt3vaNAjXLKqQMhcAdR",
  "key10": "5NHw9uzodER7dt41nyjkRczfny1QXJ4pLEhkJkKg79wFjGezCUe5nsybj4uspbTGGdpECeLdmXSNyuctdN3shEMW",
  "key11": "2vDEYJ78hDCfBaxaNu4noTUC8ny7yMJzZLKBZbJoiLiixfa76S2SnmWxnXwNHxcCthEjqMVrhMeEr8sXJhijXE8Y",
  "key12": "2TCvsJ8WxFwnxxkPtTYDZQD2niVYWqvhZiFS2z3zsvvuNdio2Fq43fgSJu2PDxqng6SAnRVFbdgyGLWuiCrR3BA5",
  "key13": "2y5iuvKrmQXwCvRpWxeVokx6NTuU8YukxDXwQMwz9NGe3hMmkiXNiyB6rQ2e5Y2RUZPTdnMVi4MCwwiF4fLr8Hx4",
  "key14": "2z6ujzUAjTyBL3QkuscHjByqbATErcMMpkjrq6ChbN2j5UL4oWB3M5HW23rvF7sgrh3iJWq2tv4a5kwGqroVkGGd",
  "key15": "oQHba82Xi2Yr7zhwmcY5DU7pgqXtCkvj2dU4fDY3LQ8fxdJPZytALQnYWacFooL4bBPKQY3RfnPjnVELRaFzdg4",
  "key16": "2E7BgmW6QMeQFNesv3LQEYCNNHQgK89cSnFWh7Yadok2iZ4oKP95Rh5qkb4ws5JKmdJRHt928gjS39s3ACzi7iRM",
  "key17": "81aX6cpr6Sr5Th1D9cXU7Grb2XErU3AYRZezfWYewR9a424tFs89JwB2TWUrfiPLa2isv6i8N24VeQ5idG7aeHc",
  "key18": "5bcLnuXtG1VWP9QQvNj4DiDxWdcJi9JX9XTVo1Adi2b61RaFdjgqTY47q8RtfFTbSTd4fcTqWQyXavgMmsfAJLdV",
  "key19": "5Dwk1YX3pM3THGamcBg3FqF4KbguQdDpbr5Rki69gMqy41WqXPR741Tp89mPwjj2NDq9smkXz34sgUjbKyWxqY7w",
  "key20": "4b731y3va5EfbruaPYqTVuj1F6Ni8THktm1HY9hVFtDJecD8VyDGNLVuUBJUpkEYUW79KUN4uehFe5SxyfonbrBL",
  "key21": "NzooqKMGfoFW2EtTDLmSbrrNauArW7aMwGWb7DHacd6UF2QytgUp4ZdCP2BFL2JqBcVV21nvwSfdyvFBvEkKYMV",
  "key22": "5WU3JKGCWF4a9dsPZ7AsG4cfRA92gsLhP91nUbLchojsnSSeRuzPi5ndws9t33GAwRptnV3iChDa5ica7n2oSAQb",
  "key23": "2nyeaABogNyKZgq6faUesZbeENuxm1kNA4M4Bfaj9uBquMjiLupE22SQDVxkHFskVQSEQzid6kMxVPpmWKhcqrra",
  "key24": "43qeEVPhe5oBVBKnWMH7d2hT53VfnrnhQ6q58nuCNVjzthp7mDUVC6UkWmGqwkM94ypTxEGNYJnhdc4kfU5Qfaot"
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
