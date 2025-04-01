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
    "3vza7KYSMxLiPjXVRJkYNNNBF9ZbNmaLA17rJ7HTQbbgiAqsLUuKDxDABGjCNujDhVYCh7VPiKq21p96FzQxoETP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbLX61VJx82CjegYgzkR6MyjztYUDQ5dmpDfrenfX2aYxVmGsX2eZnGftMu8VMkapUUu4oUd8sT6n2CxMHmXt66",
  "key1": "2dKtbBz5evyx29DAzay1GFyrW7kqnWksDkNpVMu46BceGgkTQu7LRAFosSYq392QcihtnHxrE6YESEFgmkpahpY1",
  "key2": "eUaRHbPaPdLYXiZa8PzCsPEvnnoPWhb2HqZSKZqZS4cPBBjgHNBSDZYfFSCqxLYS5ajC9jghCfGCakwLMFJkSJE",
  "key3": "25YCndFMC5BmGppAxVgN8cmzcDeYvPQce8cBuNVJyghHdY8d8Ht44WCrknvfNbHkasWaLaThq3adw5okib8R2JWq",
  "key4": "E47ZkB15S4HdiPb2MRo4W3i8P4itcPWQezWp62PRZu9Q1xQdMV25FhKZNW6o2mqZDnMgsTX4xnGwbMV5gziRZTa",
  "key5": "sdjHfNr1XYEUecyF3c77EuMEXDoYZxtt74rFtE5WgoG5b8iT2zJStqSWUkjSdNTwxLDpULEoLJ9sbKAMQtRrPJp",
  "key6": "5g1iG9h8HgW9bjhEA8vtDGebnp4cf3Z1XTGooRYFLLUDbeUo7ehFDg5rNrCe1izeQze2YL7vBZC7RrrQctDjZahN",
  "key7": "qbn5StrJJGm1aTX2SEm7qSJaomHwRftGB1WmUgTG29yd3RAtDCtMyC8XKgbDA7dTXxe2k42drMN4nCSPZGFMsyF",
  "key8": "AnAYJ98JtvkqHGbhpqrauVn9EALBFsCrqmsWpq8oCM2ekZi83pf478afCvUNQSRBUvUQ8pkeXcRLfj35fk7y2RA",
  "key9": "5SVaQCRawTxFQbX7rEcgvxk1ArKhPwraXiiHR7vL6qhfw9y6os34zcBGwM1Zt3xBBhL8iYFsXiSM3LfmFrPhanpK",
  "key10": "3obKCAeGbFfwTncZezA8PRMev8wnsDUej25pkbCKCbW4ycWcC1Ac8HX5BDUpSCyxKcpXYrBMqLUwKGhVxKY2DA6L",
  "key11": "24cD2eUyLiRxzDKzbQfuj4BgQ8R1dKMkzzoTZfdRZQoFP4RkAYQMF4Mmk886nwWPesp8hQx7bFtkAvuouW4YFDfR",
  "key12": "47fbRGebUPnwCQkhbJYiTqypZ2woFXSoma1BKhXmHiKo9KoJKfnQhe2rxC5WKs2E75Ks4jMvYGmAPh61YjVs9xKB",
  "key13": "5DpdmVdzFbTuHYjDC6SmJnZ6DN2ZfcA3uaMM2CXUX2c6uqzq9SMPSvmKVderxY489sef39mWj8AGhAUeg3jeBeXP",
  "key14": "5bUKCFPk4ezVYRBHgPRqwDimyS8a1rAPxeVd2L32wj9jxVrdnXwYHarc8DqY7S5c9d6nJ9eHpoTo7dPZEonshShk",
  "key15": "1228AUd8GFEmS9qeA9MAD1AWjK7bYPGjdFXHiVP9rxm6UKskmQSQejiGpovrvKxGsuTVCNVhT489cMde3n6Xt6ru",
  "key16": "5CX5EyVv64aceehTC9vuegZESPR1Jx9kZurGmGdu9hUeeuEZoiXM8vU7xvxPouFys5BTZ4XrtgV4jMPGu717PJ3n",
  "key17": "5Qnc51nVTsGJRuf75FZxew2U762p7pCMDwexCxrdzEysqVoXD7gTvwYTjHM5Cu8M56xednZJX4QzArQeY69cfBJ6",
  "key18": "3Ra5ArwYbxuEo3KzL5SgucJnAvo9VuTEY8x5tuVGv5w3KUetZeKjMNTicBZaCqhTEABEgs7cpUAcWCRyTvdbKgMq",
  "key19": "3UHVFPMzcF3aFBuHPGftnsym4AMdZvSbFGiuHrvdcyYWhADhFRg2Z7cW8yTdfekRgHtZZ2vAJP5Z1w5i1zsZTjd",
  "key20": "29mbpK2FDjVoktsHZ2z8qAuXYKHm1vv17Ds8WqfhaA4J4ngvVw4SXqmdk2A1jjrwMGUTxZ49ZHzcvqPhARipTHRH",
  "key21": "3yN5sjsQvy3hHGVJhSqotXtc6k9mamfjL1jxjRDGjBHmQW7dwqKQ7WN2TqUackqube1aEHx6NeWzkvcE9FjwRt6y",
  "key22": "2D3gVW6wrW47qD5ERDz2Jv4BccsdkB489spBSBhZa3uYDhLjrXPJNUW8P3JegrtMToZMULNHpk9kTW2hMvz9fAiL",
  "key23": "56jviWfG3hpNJ81CeDqH5EAAu1iGcztVEWtvtMH7LyUkEpXBEgPxu81hGsHXwUu1GR9bhjckQ7oX8ke2oc1SRVS1",
  "key24": "4CmnEqPonJ6HNnehhDUsQvRH64gkp6SypsWyYdDTQpbo3ZUXgcj96LUQXTQ1ttYXWA5TKhzMTQwRUsqY1eRwuTDH",
  "key25": "1pgyRrmi1y6qZjzNna7HP6u1Ezo4ypmeAYHnpZKob3ggtBasgNQgSk4tp1bR9gW5neum3DSRcjj88PfRpq7Xpte",
  "key26": "GxWW6TJABnXubcCAUZaDJfcc151n2eXNLTmfuvA2vFJy9K1hMo6TnV6YU9X4izZTGf1aJNUYvek4NGnfDC3YrLx",
  "key27": "SFVJZiFv2TKgZwR1XSKKJ34URrgKfdYvMA3JrzpHx9SVeUTt3382angwSDjpNntQoAbZddEQxZLUt1Tzr3ndJ3k",
  "key28": "4Qj7jJCyewiweqXsSfmynFyzKU5XQecPmrZhauiuYFRaJRQEicRGswoeFVTcEbdPp152u4Epd4kNGuw1efntq6vH",
  "key29": "3A7ev6Xx2KsZ3CpHDLiqbj2hWpsrMoPLowYitAYyjkX4nPJDaF8it5o84GcT1fxyaM7TpXkxyjy4vwgC3hTF5aDL",
  "key30": "3RZujXMbdPwdcxwkKSytbB1ppztPMzRuDBipGeyxC3i2SmZwFizihnBSNeCQgbss2zf4vP8X6yrmNi3AAgQ48VT4",
  "key31": "22rkFXncCB7VuwqNJPvoaR1xBcntqdwJgjzYYUSPRCUsAtCpKZbRKBgD1jYnSRKk2Crt4fWJuNqKxBr1u2C9DkRb",
  "key32": "21ab1SW2XsuqSA5Gx17N7BKX2F3MXctSknkkMExJREcr8tn5rWTzXjMQJi9jkbfAiKMRNKFepg2gxkRNEwVWbeAo",
  "key33": "2Y2RGBkbtHWghSD6pEZsgR6HhrGk4aSK4CBxBy1RwYxmJ2VDJZa6fvyp4e1T1PM6NyYSCKXp3WpQhukYZn3q5Yjc",
  "key34": "2AVzkaFD8Vdd7ZQyh4w8Uf8uiZERVztjAqb7tEGhEy7vVBvxX9q1fVxsH7wFwrwrcEQdqzn2YHbB4k6Rfw3EQNEv",
  "key35": "yVB7imuwhFbTR62ZvsKtX6xEGLEtDHBmPLGRUcKf9vqNvy4WPHcYzEKBGiJiSCVkdbT6iNhZg9mPmAJoAoVe12S",
  "key36": "5SpUcDLu5e49pE36RbeCMzRVhAi1a1RAQ6dmHm27rvs9MX56TqKS3VhufDcZaNFuazMuWaX6oUB7Aa1jm7JkgBk3",
  "key37": "2Z11o2JCmuqtJS1c6w3kaiZMEZxLrBTHkqawwAqPApGA6QcmN9SnWZ8kuz1bwn1dEq156wMYd4Z3osXwpfHRsQ1s",
  "key38": "2i8qXtmjH4P1MxA4wDaHmNfh4gx8EKt9HcDWPfeP1Ze6SA53bfPmzwJvUv3r3hPxYhpb7A59S9JpKLq3AcmjYpuz",
  "key39": "5HkSR3HPuWqe6THossHrgtd6ie9MLedKy9GMKWHo2qvenuCLPzHAfFZqJ54mjuKvudqogKK1c1hh6mUQ6Z2wCLLw",
  "key40": "E7qSZxLLghebgBGL98F26tzbhusdLiyTS4wNXMnNKsbPMJNAcK1qEpevqYFJzaaxniEf8X3hanT79TxxiiMxuTV",
  "key41": "546E2q8AjbMsmB4NuUTwV7TUGDHWKTRo34zYspSTs3e2HWYBUVkmsqFhxZdo2cNFs636FYgsh3Gi4BCxMwXYWSSy",
  "key42": "5p99ep1oKHW5wpjYLH6wYGZAhy9pff6bppYUTfZjfGQiA1agPzNhNFGvtJmMkfS2pEe1RtCR2J5vuo5UyvhM5SxE",
  "key43": "PDf8chkFwgqcs8SWGyNDWx7wufmUA88oebY6Ugyvjvw4oxosiBD4mgRf6anJV2LbtvkuQJKhArgMYqhrdfURqwC",
  "key44": "2dciTuwy35DryPgzF7kBj5vBPmsSx9WMUZNunXYyxjbhSmgoriYn5gzq3zmUVKcwVW6jabwQdQTw6AyaRM2GH3MP",
  "key45": "65ANMKatTryF1M57iQYvrN9xW9wiWLTAZX8tVAbAYsDWVN4sTW1X5GiNm6ES5oB11Qid7L2CS5iuxRfzpEtMev9y",
  "key46": "55atdkFYF2rSGCR1DN9SecKgYE9jnGxcu8eKisKCkfHwy6J9xwCBM5FVu2QkgFeRu5fQBZGwwakWo5ExbK8GznnT",
  "key47": "3hLyvRw9Go8d2dVQtijqS7ZQMWgmx5b1JjSppgXgPYej3BKm6WWAxxiWyRc46bnR9E1bKBeBzKefiwramTcXMPKN"
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
