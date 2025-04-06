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
    "5jx62uUJWZRTZj4rfVaRaDKf6aA4mNh15H33ntGHXTskjWKvnX5o8E7k5Xk7VuaZYaCbPUh7yimNA7m5f6dnx3Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oHnJm9arp6jbvEBfvJ4eCarzymoDDXioxczttF2MkYrx9BkTZfwdzKZve26WgQTJ3y6U7s9rCJB6LBkxD9PnEc",
  "key1": "2x6WQgCbDiQZBbLaSyuCe9aQngAjjyn1toRqw6aFF2Dbw7VFMXT9kA5kYBP544nLuJk7Z2foH9M5supGa889boEF",
  "key2": "5a94t7hijogNehwSuwiYZ4PUrbEMYjFdwnm51Q4gCjQunWzNFbFipGzvm4JmhNaJe2EvQp33m3gyMqCh2WGrnbzy",
  "key3": "65eM79YkCs8LvA7pEMrWeTQNjnJY26Uaxj1BxYc7x46MXuCCmHs9fWVEHfchvW1WX45kR3yGwqqNCaiSsiW9uoZN",
  "key4": "iAJ1WJZxRLLHZDNibLtm2C9LvwbpwPcM2gjVW9uGHHZB8CGxHxT17FYfxfe8WPjjMmV3AvArCWVa3whj9AZLTMK",
  "key5": "29YX3utvNJuc3kzXvm2sNBGZGgqd16g6ovSSNfu3rB8T29uqFkNF9e4eUmzUgf8Sz69z3TiAD8CuwLyVd9wXRwQH",
  "key6": "RY3rcHESAZATc2uFiPJcQkGvjoTDZoqQw2D1AKNKc8Fba7fcZnQXW4UjFhpz3tduiMRPzUn8uViQeeTz9x76Ku3",
  "key7": "8eQXsStSh8HtSK52o71nButm8EWpK7yKehTUEwZq86eZxEmJxkAtQfCk4CGnX8YjjEDVbh7kr6fkAQBAuQc8S8b",
  "key8": "2B6NWNwU7tiFvC879rSvEKRfjwdRDqEERdctx5ijLAeLmF33KxM84Gq35oZvTyMYgerQqkq23tXFsxvKrzZ65qmY",
  "key9": "5MBjczzkuZp9jHW7ZxoMtRxyt3YWC9pmBGcmoNZ1xoGtdHsceQobU1qvQjMwdrf9W5xVyvwPon8eXqsbho1B1H59",
  "key10": "4yjYY8SXj7GGfu2EsUmkFGYotxTKQUabas44Yx2vTGKEktuoJxvbd4gQCYtUeRCt52isBiSbbFn68H4VKkH4VUGU",
  "key11": "3rKGGqfh5T5G99EJgXjdvZpfwL2Dj7rTxm1C8UhKrT9M5yyR9pajMAS8iLW8TBftisAAQcHmNqvaQW7fweSXUk7H",
  "key12": "5dhmj3uowJysd8h739ERWm7jviEBubtJiNTKk3REs7EoUwpeZe6EHSS1htAzrQcw3UoJma4DkTyY5hB57jvFaEJc",
  "key13": "4yPbF3wCriasFYQPCRo4FN3LhYLyMLXwydtmziUX3u9wJGViYA6my9ybTdkR7P34Qwcvr7LwrAAj7RmgdGp6rARD",
  "key14": "3AsKGbSWTpK3ut1o3gcjRjXUXo25ndggWWPmHuC4nBF73sWguUNk31WG9aJUhimnTa2BtpQwxKMEWiCEwMJuYgfL",
  "key15": "5zRioMTicXkV5Ht3UTkUX5wcqKgfDUNJ8SQ9ypZ6CAQ238ZxQsmDdAuFrsatPkwJHWx3hGNb1GAc7N82XT7eGhwF",
  "key16": "4yPx1QeXekqHQKtawHxkgWGVzP3H99ghe7Ezu85XKQvCDBJr7m3iv2wzSFRz8SYpRZgDKmthFGohzEp4HdjPEZWf",
  "key17": "4hSMAL7gedGaquwNcUqQNvwRgR6dEKmf3sC2q5XnRuqq9mZ4BJh44mRWkky1v3Q3dbN5mHbKStAPQcDCC6FU4NWm",
  "key18": "iCRCHQ1829JuBKcCXWhRS8nTVM5o7ANxCouTC3xRRyHRjPtkffi3hJEcR6iewwfPdcxDuFWVufuyqBYA9MFiw1B",
  "key19": "5eb5q1JVtEt1uEjGDvw86ZtAR5pMx7B82CYvzirYqWm8v7CZmfCYwkaSeRJ763BdoavbR1y4n8rXVfVGuM4PE8pu",
  "key20": "3tcPmGynPj7ix3rwT775W8BmhvkrnPBABYaLi52DRQGKYmsbxACoLMsc9vsK6FFeEsyQDPxKzsXQqUsWsjtkU5mQ",
  "key21": "5tnFk2WY1K1WR67QU3Dex6RTaDQ25dbohm3WrruaV1wvUjnpYkNyLLrnpWqUqAyV6xJLUGTupngKJhbtP5R67WGU",
  "key22": "2cZCzqPAgeYCimhqwY8muWy7yo5VmYsmnnrnBhrY1C1cRTmYZjqaYtucC5R6xcyVDU5v4L8xuSY7TADMnrNBNJ7c",
  "key23": "2CgPrvsD2KfC116qB8WzYybn3EbadWd817gzWMzQtmnBD2V3JZrtkkhEtZGYFteJANq1sywwwrsWmPt7guaREAFM",
  "key24": "y5yhsdDeYiRmNtFwUShVzFqXLxQzr8xAjSf1RdsQhpUgVCt3VBmFLaZy5FN18fho2nK7dgJdEN8K7UnUyhgBGAC",
  "key25": "3W8gxfDEBkoKeewPKk7jNaDW2HpByoQAnyXjYmCABgLd2fCPDzd6Z6QFwTLH29UzvyyHqFeLUJ38vPdbAi6Dstq7",
  "key26": "3oSAoXomULhmKMBSfMPTqYTd4cFx1cR7hNVubd4yK5zCbzqMdEfpNNScw7ozTPH2GPnv9TiVG6L5qRrX4p9xyWQ5",
  "key27": "Y9oiuf7PoYuYExcXw3qA8gtQvEPJa9XxuyTvw3d6J689Bgssbwyk7iEhTN6H6tE9RWcKhNoKWxx6HoqNFaXwPug",
  "key28": "59Esp5moFCjPrTBPFXRQY4Jce4nkVCDvCy2URs6Y4iTBkQaQJohRkPTfTJjQMabg23Uto9F6sZjhrVTkpaLdX1hf",
  "key29": "5Zr61gUFBXk1W2yWh4q9khGAAbDP7fNNq8jpwCfizU8449ED986YBby7dffgrCp9ykS9vq43x2qu7v6Wp3oC1HFK",
  "key30": "3QMtRp3HnmYNsZRpUJcpbLkNgZnH7oJrcUJ6dJXUk4A9eiSLMn2WMMyG5eu5Pa7hiMHUC8Kx6wsHHtecSQzZ85yi",
  "key31": "589kwufRmXzuXxn9MmW7bpxGPxSg8KJyfWCab352CccLiVYRS9NpeSctnyNh3Pyw8AmvLzzYgbM2zJFdaU7GWMGa",
  "key32": "61A4b96ahLmMFc2hwr7UvHBuKFz6T8cdwsFhk7znkAQJ7z384F5saCZ7LkZsyLNfYkckMXFWcVxAPGUYczZyCtsV",
  "key33": "2LzDvytfFVfAQjCTwHaLJRSQKwiXMFQbqagUwaFRrUC2AnRyVrTUa9pxdAyEWhuNq7RS5H47jAwzsX3SstMLB6eh",
  "key34": "2Y7XSTzAj7NDMyC8RmLsSnr88bvi7zbaBm2pRWkG5FY47s2VkbuNyAJqrmnuLGzq3LU6jF178RUPf9z39kDoR95f",
  "key35": "48r2vwodqaWY2rZpVSQjnHV9Mf7nvaEkj3Vdcw3PpmqMVnyvAzE5gfq68631WZWoXCidgFYpXU5SkwpDkMsXmFSY",
  "key36": "3sKBcZLBBtqbit3LaJ9cERu8XEU8CeXeiJFtWxwZS7shDF4r7496xVGAhChTaaPTPqNVkJaaweZFSnmwWbGrDV2B",
  "key37": "xkVuxzHqecoMQs1uDcwSCxAPCo7oHp5Sj9rHeK79R9fTSnaxmMqtBSvYpcLizGZNjPmH3cDfoRsvowXdcoodnMz",
  "key38": "hYVRfKiRam6rzA3AgS1ygFj5dugzKXEuEYmY88cF5VwmQ5F7F7snP6pdLe7jZofDRzs7dFqJXyJEi3TP9DahLeg",
  "key39": "5YYBuunDS8nUiG2vBsHhhTvF9gWuSdBj2egn6ZQnbA1DP5pARiberNDcKkbSegCBuSiGrrAbYoHmeVcGi6rs8sRX",
  "key40": "632qKWQLLL8wyueaCcoNEgHR5dUP4Aq8UnibGJUnSXnRdxW5uEFPfWEEndy8TruyLMLkiGTMvVVvc6nuXh6TKpS3",
  "key41": "3xYTNoVvRM6fqgHaCTkN4emauNdtc4TAxzLjRD5RWJBfrZYSivbFoxoBUwrzShidnBzhCrKHdEsgyrZ1H6PAGcAC",
  "key42": "3SAcgnQDmzw3GtjCPspWeeYqGrZf5nSuLHanqjG8LoCJHicETRN1XtPVYy2siCuzXehqFn9b7rCoKDB5osWUZkuF"
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
