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
    "35hf9kBxQjCUCT8hY2ScDwBsf7cEanYL8GDCQKbk24XekRjQkJ9GhiBWXquvkg521vfgPn2pMbqhWYcGpEvWJiS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApEDep5M15nCuMxJiWSTtBjD1A2hEPcvyonQY2gwEFNrvGweSa4MSVrgDDCdgf5FrgjCxAo87UD9JdRcF7M4Fh4",
  "key1": "3swGwW9m4LoKq3fw4JfiKWBmt2Xp41BDMj3tozsu7opX8YhRyfVS4W8sqaLWyS3tNZBp21SbEbaeqbbTQRZtTyzn",
  "key2": "52qoJWywAeHhvK26vc9Kho6eM9xiAaSZTysTGQ8AZXWs1UhdrGKtSZAV48Kqn4EHsigphVtBfikVFLxq4afjRq5y",
  "key3": "2ajKQdsuexaV1Stg8fqu4FodmTm5bTgfBJSH8VLAxSnMDFfo5GfKn4Q7GFKabJQAzhHo9DvPiwbGBuC2xiMrZGeo",
  "key4": "2Zbt7XHB17XXhDKnkA3efPnAWWwpL9pSMuTSrzaUAYkTbrk9JCodHvQNddG4pZigDBfzJoawwr9SzBTcXiLFhcD2",
  "key5": "ubtKHC16mrniywtFctASVn8TEGkf1mATLn9kaXuyyXbYBtLSsw37zRMxgktTMChUVgmpQKgzL2TME3esfPs5S3W",
  "key6": "51j6w6dFow1Wr48iAwsqFZpHjm5DsgsUJqqUKQSat2yKejgnYvVQtMx2tsw2NuW8r7k8vTnnUeBpsJVtS4SUqNFy",
  "key7": "2u3QERWQQewtzwRPmBpXCSJzabgxGQU4Sbb7xvx7HZZqUikxmgZR9o4fAHBvu3u9B1aSW4XZt7X1wHgx5qC23SDy",
  "key8": "66mZWehieQPWCw89KaW8XK7t32bK4Z7Yubi9RN2TABzjTZB67ofXgxcYN4i5LpfEYyU4uR6tMheDtjXus1hNdrzA",
  "key9": "2EKfACAjh3veJRoZLbC8Ve39DvGJY3CnMDKKM5gNsnCjkmsKUZhj7Y8Bo1ts5KuW6r8uMxfUgoTcgPVm7o8s2GSk",
  "key10": "5XfZfdJTzLQtgcGwVEqYtRJVEQvAMBQjynPQhiesGj2dkHniXZxHWbtvjX7f5W6NynM6GnUBp3TWcYuqzVJYN2ik",
  "key11": "3MN6eKUPPNQ2Y3Tm5gRf6gtLzqGPNGW2Tc655aG4cDksEjwfV5TfVmXx2AM9CXghwghk3mxqJqhENMagspykcs7e",
  "key12": "3Fh2yyB75Mpvmh8u66AbJEp3Fnzc2qFyX8UcvycyYFoRiitKNtkZtJXoeK5fDsrhuf9MYyeLyfxSa6E7Mbx7GTfa",
  "key13": "2bA1R2yaxfu5JLtZwbGHUEbY9RD6e2YyXFKGEJBCy11ENPhunAPPhNMeXoQhKeaTPVo1AoXctBU9gQAMzd9gstPv",
  "key14": "2Ngo3RwdwCTHGSmBQbaWjhmCbwa8EQR1oPuCoYvHcE4wdEKzHveX5Gi5e9h37fME1fskhXjzdqWmFJfVbZcUYDyv",
  "key15": "2qNtaLoaoCvp6Lm5UZjymZJh65dzfLNK4kcnaayASaETJhvqbR5pwynhWbFgRq94JDMtW8MakzcbDP69WEL1fhgK",
  "key16": "iiTreQNDaVYEWt5PkcSbN79LmMZihvKnGQGzRrXf2LE53xSSDx37yRsMpGPTnSoDrDG1kDgoSnUZLUbwgX4k5ag",
  "key17": "4WaLakcibdqqhNDCJ8FPWBYBL58xNZKnjKdzrfJ63zjvyd6SiyQWRMcfp1yWENL38mCtHhsWTr8d5994pQkXGNME",
  "key18": "ZGvMJAVxg3YmfY1d4Vb2PUWRbGJbsbZh6Mto2zD7N4qC7MXBK6928FE34iBzT4mN4vTJrpDrruhGFjyq1qvQVKi",
  "key19": "2ax211JKGoA8pzQz2aH3a3L3Z6dHywuimbBo47QLoqDuYg4fXmTc9oiPngGKENrVnmT2yjadUYqeYVAo6CjpUuP5",
  "key20": "iZERLkouySuNwquUXhcYVe3P1D5NGxagSpvwzwsWDpTKL7v1KrumSNc2kLU1PzYnxpZ8cvya5XLAKzvRyLRBmpp",
  "key21": "5sjpZWxP9CUar4icSyLGycPyESRWibcLfVJ1wP1aPNHLcy7mJ2aFbaADgmTchVHPzsvkmSeUtrPmsN6iv8XGPwoM",
  "key22": "5XfLUyojxvdytneTJUKesGqhZ43mCYj4rSVrR8iWq4Lxy3FYP6ht5Ma2UrgBk2oYVHG3BMtk8Xx5524vQVmURmbX",
  "key23": "3SM3aVMpQZNHHusHYpbVMzasX769wZaWzFsb9rPiwntJErGkBt4yct2WprJTJ4uTHAJ1coWdktzKdKpzymdFTzZr",
  "key24": "5Df48q88YPVHK1mL2Y59ZkRcUTcz4gLsAbhkpYNMBr1ifhokYXpVB9uLvN7q9Uu8FB58YH9neJn4meY84uJv4Kpx",
  "key25": "4PsyiBqR5bobnaLEKRcgw9hYmV6AgXHgpH4nbwq7NeZBkTZMdjLnVzPRWUHQiJeQdYNnbZJ6W9w6DfjEUaJYqyBP",
  "key26": "4PvDfnSwt9zVvbHrzHR3B7CgwaSpeFECRjaUv33aXrZDj9XqmhNxgqiUM2bRbnbWmXi19b2pfCSCkJHYePZd1231",
  "key27": "48dQgAFHZQPHPWiro5mTAQP6HaPNcLdKXDTNByc7Hx7xWsx63FyFKnMcXp4PGfJMNNb5JLQWkcLKXGtVxBTYxVv4",
  "key28": "2hwAn94DZGSHFTL6oBRJd3YrYpCDbrQGG4his2pqbRVaq6Fb7XomsPKYzUoUbFjXy26GP1XiKk1uTkvb1fmt7bfq",
  "key29": "5QAyqeNgwxJVvG6j3Bbna6F5BKUUrrR9EH2iKa2JDYCVUqCYTcXWUzHWXH7CjeVzcJReSzFHhQW1gnSLjadcvgew",
  "key30": "5FLAoViv8cvkHPKbTSCccaVLNFRcP3n74jEWH2JHUKLR6vAdtEqLUqHvthckhxb2Vs2cB2Ag2Mns3yNkFg3aoyAt",
  "key31": "34bQLXbCs1wqiTbAsr29W6W2yg51YDjQdWUhMiusbEwfsbHimhGwsSdFtUT4TQrQeBUkay9yTc52yd567bQ7quf2",
  "key32": "53GV4QCVn9w1VSzodhaWtS1wKGCamhEPkrxFaqozyzto1WLBusi9wn3Wpqqdxw5RLgj3AU163XY7bfXs3CbUZXnt",
  "key33": "4ge46smaGJ61SYjU5RHn1QQ9GkEf5YPDKCqKngG4CcYiMw8PCddiPM4nNHNTtgNWsfCRRCQ6HGb5b2c9p1LwUrXk",
  "key34": "2HgVje1A57XvoVHRbMxdUAJRAb7LN9UkkK3kkmxwyDFcC6VHEBKi4tGiqQ5HcpGDrK3ZKfsSmAsfLuMEVhh3CHFC",
  "key35": "33FrS1w8DPqAGMLnYdGko6rRTG8Bj9g1bnBBBrWXnWSmUBQ7tikpyWLBuJRb3JK7g9KgPL3vbjbzKTveFDwXfEb4",
  "key36": "2R7ZmNgErGvFBMLpWNaLB5SWbEJSAPZhUeAnEutdiCQbSfgGbjeu2v4LtuYeuX8pbRT7Np9297TvfPcP3W55py4Z"
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
