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
    "AJp2amKbpvpKPrbkZPMuM6q9MvogsAUXnSQFGxLeA4wBUC1UsPN2UhENn7MMnN81bGxdQdSMfzEA5tMWE9fzBbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irJr5sadJZRDwmMhmpHqUNqK2VVH2h3sh6jywZXATc2gXgSqvNyGvxzH7V41oysNKEr1cc9ob6kpvVvNHDoLSms",
  "key1": "4QeLBgodRsd69e6SyqWKKoPjjmQsZCMKNNDGbyp4JxjfjYbAJycsjBGU6vNNbEaUVMsP7HJeUMb9Dpd4QHLj1FG9",
  "key2": "2LfoRpR4aHEdygN9v5aoP5VkCaB1nvHPxDHbYajh8rLyuNmQn8KSzzZ7SSCUMDg4iDj73wKr5vrMFKotrZ1RNd99",
  "key3": "37jjUNoZUkvTHAF9ZLp6Yww8Uj4qfjguGR5FmjB9i4v9C7nqA343k9tBksKAy5tjsUgkgSwTQRDgetS3kKdMvaS",
  "key4": "sxtuPwcuRKZWjz2ipPRg3YqMpHV3yin89vaDN6rjrrSCRM7P7SewLAg7prcH5Ey2KVEGKcmbP3kfRVeJKzSrQVA",
  "key5": "62pbb3ApmWGexRgCsAhp8NVhcJvi723EXQBdxJbnipNkVKDhpCcVuJ6qsMnwDACtnsR5o7hcMqXrbGZqc1PWUYL3",
  "key6": "4vS3PrKDa1gFqEN523h9kUxGgo5mGEXxiffd4LUcBP9PhVDkqBUgTQXCVZUJquVGirxKmozdVonxhDAszTDuMGs8",
  "key7": "2FUr4u9Gca6s4HD4rXvjPKsXqkujqdzJ6DE9G8q4Htn17cB8h9WnT3dCiuejgM72dyWeZ6KUykbr7QLHmQ9a77F4",
  "key8": "63xXQyp7Lxc3gwkjcC76Ex65NFPAZqoDWaYaXi3CwQ6ATVkE1esRc4P2KbTdsZzrguNmMvcXXXsNxMPTRzyBfkde",
  "key9": "4FcDWJpKLvwKH6bBwEt7WYqhvGYcdQQVvRSrcGH5Rf8Vd6c5YpspXw9WcYGbXjVAj5211wiT31SPVuDhTxDBpKQi",
  "key10": "4Vx1fgUUkZtqJgoEAPyq8jfdpUzC2puCmzYn5pYumu1LJ2sGknRLVV6g7XRaNykj4eHN5RfykN49m5fQDg9fcxM4",
  "key11": "3Yjh2E2sDzUQSB2Vd7JpnJ8vs615aqtJRtBHXr67rehDv9tGVAi8kAouEFuZxaMuoHBV2mdMPM6a3ypf2DUzKk17",
  "key12": "23dUd5eN2TY8uW5EiT4nddC1wnqt1rvSaJfRjX2By1SNNjukxPqryEfw4hC8VXH4HPcciABFpZK5YQ97GWGjZmwT",
  "key13": "ypRoXsmobfC23UZggSD2YNtokY7Y8qPvoj2CUvB9qjKkv3p4KLM7RXqFPn2Z6ifDcWZNfd8wcupUioB5JhgnG3a",
  "key14": "3yKyT8xKus2qc7BqdMNGea3HFQA5mKjUBSHxyNf6oZZC3UVS8KQHrt3DyyQPELYeKyRLUDDEd32Ws8pmEWkCirNk",
  "key15": "3onefo2Lycsx8ADz1UHtiE5d8daka8exwMHWHzN5brDeCHA2xnaihMfNUN4p66YEtcoxgRji76pnxkq1JYsGs3x5",
  "key16": "5S5tv5Gmk3bdTGB2bLPG3AVBXCbPm6eJPKSZu7g2acpWpBY2ALrCYAheCxFfPjHQ4Q6XvXXacrJywprBCW8h6cTb",
  "key17": "Lznq1i231RU3qN4g4xqQtertE6qpi6f2xze9wSzi6zvXg1QzXuJhhaggicfvnQCYGqpwfjJF5oWLn7xT6Ry1oGe",
  "key18": "5Uyc3WbzGSEQz2zgwLmkTWvHaVok9zhjTQmBaqGXauMSfncg54RhwSj39LK6G38YoGKetuuJXyhetSreNLoY7WZp",
  "key19": "45KFDvUXKfvVGAMpPCXw1WAaWRtox8JWc5fobouFQdZPModJfbU4jDftBh5MUFwndLodyYwnAb2kxzm1mvbmFjwS",
  "key20": "651uAcAeN3ZWrntRoyS44x9iPjCroKqbwqH7uWnrh9sWYFNGRnhxtPnUPqEB8ETWxPfd89hCxjc1VPD4GoTfpUED",
  "key21": "3pXBwSpGMLtg6M45ehqJbFdigXD4ghq7kRzHMUZri1ELcidZwp1Gg857RvdSP485ehLUzGmE9EcqJVJ3YqyPKRjW",
  "key22": "5kz4P4mgWiqPs4Fkhe6rpTraytf1CM6iGvCdkR2bm8EDcEToXoK73rdzb9XbbwGnvxfQrcAWXBSJg7NnMgSnrvmZ",
  "key23": "4KTFLiPWaJXQTG3uqRmc4BzdZhzB2bCce6xCbt2vA24AZDCUY98hLUSVouim2APgKi5Ai69RAJdvZLm989vh3dbr",
  "key24": "5jbZGNtcEouUMEQC2dP6PQSBhXwxGLZD5AYFsDBi3ixHSHHDfqwk78x9yQ7AmForUygdBWDYpzDwRhTeHKwmAUbu",
  "key25": "Yntamanho2kFDxWJ1ZPxdmdmVUKeE31o9iN8DXi3NncCweLnq4yXLzhRrLEsXpMDQxm2hc3BVvvHsYyzLVdDpVC",
  "key26": "4rUifYESogbpE3Eu2AF1f52GJmfXaegSGeQqmojcvhQ479TJUmtn4jvDjLSwnmiUdGCt1k5NDzh3kBoxUaWqfeXU",
  "key27": "59SE8TNpYZM6jYmuiyha982pwkP3k63g2AZ516q1UnzdjHfTsdQSiiVMUpR9PgscAcFFxiLu7MgrVxPZuqmJbjtc",
  "key28": "5bhdBgYDwyGh3P68TsuScfmhYDf8zYXrQmU6R6dw8xxLKkwSpuqa5tQnPRv42dffTdv9KREjM6m1WJubXdAkrbHP",
  "key29": "2K5yZhRgfA9vNWZfnp7W9uzA1exqZvtHW3tj6JzHuW3WCyZB7daf5T3FsEG8SQN3ctYNEikhmEL2jCGxTcguxLff",
  "key30": "3vHq2S4HEW1nty23JfvMwvGMvdUsXBCCkvC2AKUoAcEbZkVxiFPrhEGdU1uLwwWPxdgMA5FnagJyp7E25tJedJg7",
  "key31": "2nwcGZ3sD449D2vdo8jGdHf3ygCNPHNERD9tMBhFfcaGkMmiQaq5KzvtV8re3ZwyF6DdayiJWAHHkpqdzwfAbHkg",
  "key32": "5A5k1miyfwUeLaGHXJ5r5nhGD4rean6RBmjti7md76pfNCQt1gDDQ4LNHd6E24aUozFoKc43Sbkk9DBtiXQoFx9A",
  "key33": "5b5fmXLj7DUGbyH5e8NPTxZ9nfbamEfvek3cUhZUQjxSnwEUhymHEvqSLXKrZW6iJQ7KzfdY8X4BHV559QwRkCha",
  "key34": "3a1hdYNnShnM3n1YiSYUxKQR1r54UHkDvTyDsfeHuSTVaZ3s8ye3TguZsrNxyk3CtR1xQtpZLRtQVYa8jvHxDRSu",
  "key35": "3rtvCRvfjPKvEMQqFyWXf6NGUqyYtdjDJZY3jFrJcvC9UTofBbw4Baz8U6cCEFugefBpS6Y1qWReSSim5jGbQtbG",
  "key36": "3jseKPw7WF5QRA8Ybsop7gm9u7TE52PzGvjp35DXFyptSh7DJ1Jyk7P8dj8Qc1zS8xUNcrEV2K7mmscrycsPzqZf",
  "key37": "2eVFPEDqobHjfRkq1VSFvRYye2o6i4KU1tbeosWpXZyrZmvkgoi4PdkmQNekh4pj3fJXesTuAU85AiTtfYLN3VBC",
  "key38": "33Ag1TDCLCqXeDPDFxjxcTF81RwwkuJpz2jkCd38zKC7eRbUC4cCELdd9k2ZV3h3kDf8Mu1oSLPytEmZZg2twb6a",
  "key39": "V7cmv7v7iN8iRtb79d81XEUL1yr8U43j26actRypewGzj26qgT1WVYCoXQfyNiG6rQH3r2fSMPLMxvgrnN44nM9",
  "key40": "5JoeCQfBxKHzTQsuAqX6cZZPr2CkFFZWcWaJViPijRGwyK2ZhsEKLdfeBpSzYE3gHJqzmaZca1JTfia3gEXexCfC",
  "key41": "24HM1CqfzynM3QifHbuhffV25Lrov1pFkUcA7UUPaJqMa9NiZqu2Bot3ZSrtFNYB4nGKh9JD2RXUYHWWsA67fzne",
  "key42": "4RSdwyuGMW2ZGhfLU2Nb53C3TEkuaHpnSUEGDC1o2rG26DzsonWyumPTV4hWif78dFg3UzaB3dyJShTdazsRaNeX",
  "key43": "4Yj7CDxKK5jpduyjTPHDoVW8DXUQ1uQJt3fZYg3Lh6KJMJ3xXJmZVXMBrbEjiZX5gJDzEdw8wuwDmUPEGafG7B3e",
  "key44": "21ezjjtyREyMUxrGBBcBs8YU9C9nEdeABUvBfNWs7pZ17eNu6BLKXR6kzrDcy4HsizYYnR5rrd36VNSqqiSdXm8G",
  "key45": "3ctHcbc6Etg6qb4kES7nUopFZ3DowS9b2zxMwtc11YPn47Mu5MbcscGuN2RjQrdFe1i5yPrkbQ3gCeRA5co5bQwT",
  "key46": "32J6XK7bnRx6z6enFVDQBUzqvERBSrg9zC1Mc5Cus1qNofqacwjoxBYxTZbaCuW3oYBHUM7XZKK3uzzngStJS3t9",
  "key47": "4Yy5ZV9LoBuHB38ykGmfX191vrczzDNR5iiDpvGbtky95HfNUMuzFv9dUf8yeBRM9y58CBijok6anGaH3m9RfUvQ",
  "key48": "5r819jZJhwJA57pUrMyszQoieCMRbF39UBURnuEssgqgz7T93L6hhiwRd3Buy7hVPt8urVpStfcUFMV5g6pNfefn",
  "key49": "3489sFgBgkujyymk9brQKqyCupbAcKZteuRM3MQTgsja35cBHzuL3EVPf5HEGc8PqxLX3SGej1Tsea65Z4rntfN7"
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
