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
    "2gXSmUjnqHqhLGY8vuAFbjf7Z5qV5CEjL3eEugxSYSUPemzc518v9gqCjEbVsDtTs2GNJuBt3aRy3H3Rg32dnqrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcJDg6q2tXDqExkLKGd19pcyDNhsckTcLPpcK5j1vvLau95wYke69TGDqcZRJH8S8PYt9U82GysBRnskBXawieg",
  "key1": "3nY8oqDwfCyXtzs3asigweWfyz5YMEwuh7hyM2hfXKcE3XSBb1oMPyTpz5CPmfJT4a4xq4Vh8fGiBaD6LCAM6VYk",
  "key2": "5b5btXbaK7zpvEARX28BH4dxk2SCXksN83tGkVKKCgJs1dVJ6GubFT9XWojc7X9Ft9JLELcTQgTbD3ftdsmEAFbq",
  "key3": "2o5U8ft1KqNwiZjpumrsvmnxpGkDw9j2aBqDTzhZuDDWbqHFHyzqTZ7NvxRx7FMh4QjYHoU1E6DW68NSvRfUm7BW",
  "key4": "ChJyd1wbjABPjzJc4A6kPgBqEPqqwfNQj2xjsnA3zJFpMV5rGFZo7dfzWEMNdTMmT41Lc772qCwU1Tvs7dZ85nk",
  "key5": "4JpX6gSh4PE5jcAoBkC6XLHxKmhr8xThN8cscqBG9aprYarzGjuwFvbrWFgYmPcujRm1SttXYuKTy3CCoTnLTjsr",
  "key6": "2LNx75fgYaj6GuysadJ4Lwvt2jm37gd8KwNXTdBUfn9TgZMDnjqNGHNUKNGpjT1WAueam5fkkt9ikSVfr7WSUA96",
  "key7": "2g6xXau1ypnL3ESvnYY3LN17MLXNjDcmYMmRDTbFo7qMAb8rm9dFuHGnkiLgabffGwtf796hdkEn7DkZF5BU8845",
  "key8": "4XeDCGjvxhD2bRGuYqnzULMpL12kkz74AM1aV5hNCX2KQa66osjVB7AFmNUP2zhNxtinvUbh9trcqYbEW46bJTEQ",
  "key9": "4em7wS7opbC6qgRXoFWd93nDoFpFUvmiLGSXkY7visLzyupx5mdz1Dq8GfeeMfoGiJy6nX8g1TZw5E3fVLmUDFEj",
  "key10": "4fVeKby8DcsnWPcWxhsU1vmiJqpMU6EMFp9uMbVQ8Q52NtZ5k977yhE56jUicZQsVXHpK8pXJzaupuTPtuLjpHbj",
  "key11": "51yBwq7ujLy5a4985TdqizHs6R5cid1t3DnCAgCFaeKZtN6o4DEcsVUXbmjL2AL9sVcaGD8BS9uyHDNcu6YiCumN",
  "key12": "2JnCLeNCwKBUrg26HqrM43yxw2eDwGfwDHvimmF9YFTMxmcyedtvkHLbcKWYs2RJeb7EuqLtRbXynidUNxx25F9q",
  "key13": "5WStuk6gA8LL8YcguwVjaAbzsXZYtrKq1wWgkkCfvB8fccwVtvqgNh1SPT3fHhcQjXWDCTApMryR2XG2Dwb4FXi9",
  "key14": "4B7q3UHaGgvEiDVCJURadhEAurNxhXeHq6Fwvyo4dcQVYoh4yXzNWjpci2Z2KnYWfByU3sDMwhZBh3wMyPsjYfNb",
  "key15": "4aPQTEdQEdhELEtTKf7iUrKq4i5M4VP7WhGvuTyP2ZBAd6YBpF4CdwieqxALBa3ZE1TRpdB7FhuK1cDpViG56E7n",
  "key16": "5Kua26hduxmAnfeqb1mEf9G7e4zua26vGzB6k7rnLQN8mdn4C1ZmMGEFXDN3XJGuAPArmGvjwVVzcYWyArAUEHQM",
  "key17": "9SVmb4bK9qQjjaW5DoGXXZTQyGqGG1wfMpjtAG4rBGe6Z5knarPXRNvjMVnecBbBwPe4FG54j6Lkx8XhnBKM9K5",
  "key18": "2fyrVcMHqFe6rBeG8D3VWRUmr2NTi4uiYrShBpibHyXbVrZqnJh64MLE49nsxvXhRyXnksj1gY7UVhsymZh6yTxp",
  "key19": "38NhYc25pWVP7d6fMyuwf2NBC6caQzBf8vTs5ojHaqGXBJramvLgWnvnWcVakvnZf9ntoZeesTzg7xiQhY2DtRsg",
  "key20": "Bnv2p29t4JuEKXtaFSDairT5Kotj2QnmErX2bnxf6FRiyzwEt4ZtegA3KWCL2Ngn6zsrQ4cnnMxWW4syYMBA8WL",
  "key21": "3VWdnTikY7hpkQCdDtCFH7tGksR3UTN6F1CBSpAFzjFmpYtHw3xZfdjhx7pRhW8MEx2zZ1ukf9DeX2HviNsDmTwu",
  "key22": "3WXW4Smdp8LEi3ZiHt48uGbZyEH8psrAUZaiNmdhfr7zvezsiAcJcJWZmnbzbQCsGKRqvXF3rexr9xY4hwLVzZrt",
  "key23": "3BM6NBJ2oEuMtJZrrdGe5zL1HnvxdLf65DxLDgQQMB4mwE9nAmNxuxxXZiseNSqjMbZ5zW4773QW4MP6wsfvkZCx",
  "key24": "WbBG8yQBHjAS9Hi6X8MPqd7pmY6oXVVJbZsJPqqcWRktBnyckvKUnLQzm58NTSZhwo8zas791RzmBFsEkKEC2gW",
  "key25": "5aYrTydsUWJejXQmYHTit2uXxtu6RHQVCRNGC39vPGudpMqDf1xHkpM4dMa3qSBAY1M3Su9uZTVtFa7yZ5CExjNR",
  "key26": "4pzf5KJPc12sMC53t2K6tGJ5pRQapzB5zHohjB54YZ27FAWf3nXHwp6t8JGR8KHeUUKyXuJ6bdyLKQsh8bMo7Zwd",
  "key27": "UUWjUZHnDkCnqZu9un8Qv5QiAm2UeWcpaZL6ScWMfV6GXmkLBgqv7rFFQPr9w1ydVHBmiyUBn1NghrYVm6eRFi1",
  "key28": "4DwPVp796n3WsCniF6Yd68wuboq2vciAQtHZbqgpjdQ2fZGrxhRVg8ydWsXS1vD6gAPVgHYgxqLbfUbyuVcYoE2Q",
  "key29": "3JPRdPoXnvTCiLNq1FfzmcQ23nPeKh7BuT14gDpYL8drSfzaM5F5Sj2DGNKuVL78mDrpUcr8e1ffcUSWCn2UMS4i",
  "key30": "4o5r9qqPHmGcNziseW3wdUeZA6ejGpmhzedEjiHYkSMkHKxFthRau7UaY8tQymUqsNktPxr2ChJcG5k6iy8BrbsK",
  "key31": "GJLvNyd1to68FffftckfnfcTLp1a1JJffrn4iescjhSb39cYea2NGyZECfmhPsNT1m8rNXe6K38JX9YJ17xvGjn",
  "key32": "5sMez9m5CGcPfBgdn52skoHEjtSoMoN8yMuYAuFg6ByeNmTw67DRMLQbe3ubp1NWU3Tds65oTXajGbvdvZQdVF2C",
  "key33": "2B2ZBfF3ZMv3vfKa5SdXgdHzRQX4F1mxQdTHCRAyRvkHriCT7DuefwS6C9W24c344ebFC9qch7hKb6JnPkEP9C3T",
  "key34": "4wZwKxEypzXySqyEBLyo13KPMEA5VXYbbxPH2jXZpKwJH5mu5H8RkUwD8hDVRYpE36i8jsL6VR4qzG3NXDdVbrzk",
  "key35": "2EuZuUnYa3fQAqeBh5SBcadz7VXFhmKNqN2ny8YSxEu54qhcdAYxitPP7QA5rtY1hd96eHmjBFysvgVKa8njhLAi",
  "key36": "2munmgaWbKt3DLz5uRyzrWohTf6LnzPRiJPCTYLaaxYeHQtTY3mzWuYH8JkTKWTDGLeNDwfZwtjqeGYbv43edh8u",
  "key37": "4U831ceGDga9EgKQrnNvgf73Jw1mNzvdJthdy37GqdPRJjtQMtRGb2Nsm6zDV7KsK2ecpLh9pbVx8MYnt4nZ9QNk",
  "key38": "2JycCzDixCP9AAcY7tBTJP15Uh64z7QFQLgZGGjDdU7yL8dXpVgb2noAzsuE11w7qXE7JyZBg2HULU2Vym5HePVV",
  "key39": "5vU5tWHsLKHqNCCD5pgqEBtanjigK5yX7qt8p4VF8GnCXC8tFaiSz1DaUvDRYeL4SYihqDUSJJ3UVowhqUzZmti6",
  "key40": "3DHNHuv6zPM6aEy2PigAShSjGGxq1N2g5yQUvULi7yFyN9FegDXtxEoHQ2naW3C42k7KVWqmCXRbGavo519YdUjw",
  "key41": "5NX8kqU2g7F6Bm27a8ZAVuZPirijqrH38JMZrwTAboPwi6MCaeJs6MReHc97hwMCvuiKvRaqT1p1Nmkm3rBP43GN",
  "key42": "h3u7Q2LBcykN96tu8uj9DgJXH9sSoRC6ji7cdbiHX3GZLjEJ3JuDBUZVxKRLoU5FHPasTQEMzQKbaipSNpQu8Tm",
  "key43": "AqZPwSXjHx1LKt54ABiWoHaVAA8UtbKZQTm2S8yh559qShhiuH3REiRvP6LU2hCzVedMqAjxSQ1okbJoGkHsk18",
  "key44": "2pm1d5qVjDPDcwNXHRPyCRiVnxXqJMqZPWSxXcHKC7Z2CqaYPYJK9Mw8uXTXMVnFuxTc49Ph1LCBAqEQuksBqBLz"
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
