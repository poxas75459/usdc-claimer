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
    "121SKveBbHzH8qHbmbGnvMeyagpB7PSEqBp4ALCKNBjEhR3oRrPnAgodc19bn6hzyKrVdCeoTsHHhcstS9i8XzbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcQecuEZ7Yc3uPWTS3f9TguQFnhAiWmxcJZGPJHbXSjBdKVMrZqvdozKTCim4qUAXXGJ7oiSucdmM8JG2vWESCT",
  "key1": "5Nd39mwxKZiKP29FoTQhSH11ZqYfKDJTB1swk9v9DhgBfDKzZXEqrMJX7c2qLHmCJ5YbkYyjDSEo4axvmxCHyCpD",
  "key2": "pLXGQmRmbh9MdTZgrwqd2oDkmb7bbXHVAVZSuXjTQ1ApcnnjH64VsqX9e6Lsri6wYA4WR1wqoSMnsRVAwa6nMZ9",
  "key3": "2bHHeizGj7KwGXVsUHtgZerx2v8ic33zPkJiQGT2yUz7tZJNbFtYhp4JnSZwZgBzTcDs6NbuuXpMWtSKvoDiEJvx",
  "key4": "32NMn9B9iwnoq7BHZhA1wkVYZJZ9she7p9J7LKRw1xFeoUT7pJtGQ9hFY93nG3D4w8S2VPwUHQfXXVnSTYmL9hf9",
  "key5": "3G9zEj2faN9bTUKG1eam8CqgY4Q8EmhcTS9zq4FB6iB9GcEWuuqDCuqdCyHP89hEfcUsLkrbf9FC8LsvbGXLBXNm",
  "key6": "3pF6F3HVX8GMVP4PbH4gt4oysWbUzrqKbTPAsy5Qfa7orx6eW8n6p1aTsiYb1zD6vJs5rsXZk9LDbZUGxxNmLaaH",
  "key7": "4xjPMj4vpJbrLNvADL3KZ86Ud1Sa862DrNVjtrkHQJaritFHPf4xUyQbg8p3H59dUkhUFyTzovs8L9DokJP99Nwp",
  "key8": "2PQqz4Bid6d8xDA955idYYNTaVdn819iRhQ2WNrVNx4qR5cc36sQgFibm6hHXMCxgmHyQF1rR8nn1BjhiZmdy46F",
  "key9": "ZForicdjvz15CiELUPgKvAznU89mU64gN2PvEhK5MuuLKPp5fytvD81Xw7ypSB3hVNFBLsWsR7smcbc4tQ2tzUr",
  "key10": "fSaxUmJAHJgQtudzAmXAPcWNqN9HCS2MHVw3pmjrXAopWJKw2kfSpaiYsYEDT5KfxwDHhS8DZmhFnKJMRK2e8Pp",
  "key11": "CTzgn38tV3tGWVpkTbxTZwwHNDnGbcuqEgW9d3kKu2hQuwiWDMrDf7dfmXGLMLr5A3o485LMjbXNZNyubKBKhRj",
  "key12": "5ozXyL2kAM5uNTJPaXoJzgbdXtyoajPuBZMQaVHT4N3GR8iFenTCBMw72hdrcAsntZjbqHA7i6BLQ4yanDmYDwBK",
  "key13": "2BJVGGALsRD9f4BHMHMFZ5sWv6xC3wjcMh73rufkKauABza5vZKCA9akvD74taNvTTWZCrpoLDhE7SdqWavD3343",
  "key14": "3bvT3VFNQz6RT2LA69T7X4PKb3Ba2raK8JBEMD9oYerx2GDXgAGTtVz7DkNdkyuH3KVRo1mPYczgpzNKSnN8YHXM",
  "key15": "37jB3XYq2fmPsfePXrqpZq7MxUBBzcLrNoDLKesNiVcekW3FWvRxji8Hmvz3TUBc8du1cv6NDA56wEgXHnxMdmkp",
  "key16": "2v25rKyrBaWVHgnvrfkTvYMR4jvb6JZzeVsHWv6DsuYT9m2fDe6gbTiPCbCqii45e5ootk1KVNVTHA2ZQ91PvTJv",
  "key17": "6o6AKBj4xEzXaVphdUs9diHwaXiASV5tuhukoo2Mb2wxRE7VkhryctVVhMoq8PmuHMGQwsrowmhckmUZyUwE5aS",
  "key18": "5sTwdnazVk1DEa65tGq4dMTsJnTdoHRk5AHCRNfYavjNCUzAFsZidcpvo73S84AAS74GWCVkQGWZSYww5gcE95FN",
  "key19": "5Yt7bRvHTrCkQ5P3HksCgWRe4osJ9JDcP5mi8cDFyTZa8ZmgWBiHcYNmhtkhojF2Tr7VojkvSpuwv9td97jkTaPW",
  "key20": "2bmFNCypSo34SwLz866F6kg9r1KnqW9DQAJyyWqh1qyM42BXQX8nYTEQ6z7jEzCSYSJkbetqLLqhkuhgsipUovzD",
  "key21": "4X2VT6F2kvPtPn1jwqQ84WxiB9ZUFRWSsiqsLnnPJ68z94DartYGyHcsYK1yyAUwHraaPkrbzUpH6L5RVJkn7fVM",
  "key22": "CWLxJCt3hB4wW32bev3zrhvxGVFpvEXj3EJPXaNjsyKDZLyJpoD3f6JBMBJqV7oTLyxxUSmrrRLizKkSgQDCuk9",
  "key23": "tAXpWBsoRkUcjSdQyDMBkDoYb5LyjDyBemXJnHZcEovw5JdN4X684SLeSx6TKY3gidfGTnanayKfdZa9YUwATTM",
  "key24": "CUMBQP6KCZpsQQ3nPLVmu7PjnSGUr6aSZa75pT7mFQVwoFm9JcBVEayb6AJhvwzdzvZjes1op7poM1Cvc3tm6rU",
  "key25": "25XYNTc8noqSx4pw9XA9YcjdhPwTx1eDD4JiGkzU2QbU9K57CbQUhSthfovYYqpJ3xdjebzYEJy86Y6N3bgZUb4E",
  "key26": "42cA5qpNQJyiSBbSsGTkoWN7SYyrSPBE15pmUQNejB5UZx3u5rGQDnAHNK5L69ghuCwe6dSL5PjuiJLK7g2zB8Gm",
  "key27": "N9h13Ej2SJpDcz4QFSbbvtLyk2FhtBCnEnkV9qDfEVabEmd4RWA37a9g77VDvbkguNaDvj1sp83e45qMXniwFku",
  "key28": "C1hNqAfPrhQFFQV7kF2mYJww3EVcUrs8HVr8eoULvynqzQgXFKt7BkMTAjmMDST2Bym3bn3WeiQXuThWN5yMMYk",
  "key29": "65iLp24ceU8pwGjvQ44u5pWAWjnH1VmegETQwU13NS4NdjpcPQCr8PCqHxFekY3QE7cB5i8rK9D9xbYs6rwq158w",
  "key30": "5BAeTzqZAUiDMBibDuNm2ViSmAVhreFjhbJ9zqWmDFzTDbKFrBL6tc5JgbPLia1vqEYgzhUcxaPfhrTAFF2U4DUe",
  "key31": "AXM1EaPPzH6Rww7ZJHFoMdDAvPLRjLaG2M6GPZmoNgvchmJSJKJLXQVG7XpY9LarxPNQCj4SEgKyT9rtyEi73tU",
  "key32": "mW1gwFcy6xQgHfQM1JZ5J84EFxA5K9AHUEQjibJiZMjB9pYH7XbHpyHzEU89k6cEy6YdkWes84nt5M99UQ18wmF",
  "key33": "4DuRdPq1Kk8hYaYUta5iDtuu3wwZ1o3w1ABfeGttVFo1X1VnJAu3MWqoQyJ3QkGPFWVdsFZS9nPqyK4bp1xUpYzS",
  "key34": "4CS432X6wym5x5AZoGK75oQYqq6mY57HtFyr3nH1hFeQGfQxE1BffABRQhQ8FxaBGEzzbtwxQzsWPHZJs3aMGvq3",
  "key35": "5VAfmN2cdYuFVuNE1aTJhTbMXNJ5XX7vLiFGGKCYbg8czDAkZ4V8J9UnFZZHKsQfTGj9nA1AEHN7TKjDLMCzig49",
  "key36": "675e7ib9BUwuTmJmr29a6NSWjgm79GcGkzjNHcVbGT41X6X8Kdh3j7NcFn4BVGF5TCZBA1sYp879jCSkWgC6ngTn",
  "key37": "Muqh4K59qh2p3DocoAyML9DmkQSYZrH1j3kCrvq1LUJgAUxoT61MbC8wjNiStjkR7B2MD2SzgQjBKMbCZgsK4LR",
  "key38": "4ssdpXjvCk3e6AT5DyCsLuuQcB6vBDEvkk3FDEfjVgKMk3u3BMCHSjqjad3wn36qs61Uc98qpAra3fRV8VkAcrFF"
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
