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
    "4AvXQSKptv2qQt7YyNAj7Mw2PETp8aeruAcKDpAW6YW15DapH1kB58PfU7ohd5MQH21RB5AFmm9rti1GmAVy6ZZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBUr8jw6WEVNrjtJDrkeLvW9R55twXybxnzUJkJCcR44Xf6RAYDNSrV6EjsDLtJ9hUuJT6XikYBcBPmD5ykcSbF",
  "key1": "4q5pDoiLKprq8zkaTpePFkxLndJY8cnKjrJ9Q9QACaBWU93y3wq4PgiqMjU3XTPnuwacvXd7UwLzMDQ2fdJinBb7",
  "key2": "4qpx3LNwmmqX1DykTxjWxKv1XLfzctdYBAbby1JN969zvn84txVHY2MydiCTPyLk6bQurWGUv8jKyhn1vkHqHref",
  "key3": "53AzL8DyDoqSqnEntXDjMknpnmkKtZayRvLoxhb4rCtqWQ39TrE8FfuQNuG7wKfbUjSLaGo2bhU4uBHAReYCFWK2",
  "key4": "5c3RQc9zrKAzEkNMwqcoM9aFNKteYbaeXzkm3cjTdFdaSsFnSLHWkNrhyUSXGMgdQKZYvJLcBdTqvjBTWjAaLTz1",
  "key5": "2PKGEAXsNiABFaPxREgMzP7NbBTCGAKcDNB3jN4Zjh5zuTPf8cvJBqaYod4YLMaLhTdPPec1NRnoE4bN7i8MUzu",
  "key6": "KjNmVj1joNfs4qmDHG8RxHXgdKkEc8Z7yyuU4D1tdH16dX2gkWjQTYv5JwbL1eq79vF5ahCkAU7PHL1XBwnH9tM",
  "key7": "5vkj5dUc414euVcXxxNo5AzQikkNyqpjkRAQUwEpdsjX1zAzH3j4RU8noFhCDL55AMBsguqX8EKDsFd3hzveis9e",
  "key8": "4nDJx7FheQmNunY8d47QHCrJKomLrWtKSMmMMMpvAbrJEbtqYmEXhbCauDyBJXZwEp8EFZpNEYedp3HMSeTkZ42Y",
  "key9": "55YsQ5VAN19HNcvYhsj5iRaU3iW8XeXtNoR5goXkXQAHtnGs8fjJMWNZr98uZEKjrer4BdqCpeLk5XcGzTJHnQqJ",
  "key10": "2u5raoL9NxGbATaN6hs1ysHMgFku6g4fTu3JNnvsEwBi5BHzFxRjkSKK4M4Ntt5xPR3AJEbZBRehhF3LBEW7zc76",
  "key11": "4gbgG8gvNPpWRNRnf81h6JCTkSLTBESornZBPe9A2puzHbsTJFR8RmsgzDEsFh93kXWvfEs4rEYTvXTiXeVDgcsF",
  "key12": "4ZvqgHFbRDNPsfo6x9uJ5upS1pcZJ66T9c7Eu3YqDmhprgGs77VZH3NRd5t2VpYncfHJBzefgotKDwsTneL3q72m",
  "key13": "3nM3SyDZf4qj2BTxqYPW86icx7Uk6gVFypzLrzpVGw5MMCPaKiggRsETjHEQxot5ztWMMp9uutSLdhymSKgoF7s",
  "key14": "4aAuNsbuSDB8YQE8fzQFrnF7MiSN7S5sCPhYNhgygdW7GjHH4tn5uWToSiF8mDj73q9i9GArZchwxDyo6Cc6a66w",
  "key15": "2PpyCibrVxmhgEqLL542N3FqGdoddB5vWYbdVc6ZrgRFRex6kg9aEfkQAxDABDjsLmL9cWqDuWTu2fpFiwqfVSFh",
  "key16": "UEGWE9xmYWURHeKgLFwExgxqqLUAgZ8C48SR1bKFdEmivzio1rvC5os9dKFP2DEAwa6CRvsYoAsaPCQUJLVChkU",
  "key17": "2YcQKv1NDJUgBJx9gXDMHXPp2w6CUAxqgLtb1fRtoeBgmJPwEAmo3Btx3udTD18NumxhAraKDrTG8zkD2oiBVruA",
  "key18": "5quAB4tqWyfsBw8MP9RsfhNxXpCRXbDeG4udhJcW3BSKYrxWWMZ3Z27yVVyxpVyhnQeqtYuo2zLfB2F6iNT19wQH",
  "key19": "EktQXUAKV22RkNYuh1u6XYTWoDNkVZsHCttAg1WxMUUh9GiSbWP83p9MZkNx4AbRYtv9iPYKM3oQSfgaFEgJMzE",
  "key20": "gbFL6KSHSnsyXtkpassntXp3FhpJhWXP7VbA37TXBFKVETCLiznHCaDLLiGxxx7gXJdMTXiQxkKfinRL1TZHukx",
  "key21": "jMSViKjqHFNrLsbsQDHHMMws9Sb3CTfy8hgR1nGEXP7rs1gKK298XYv1Nam86D7cm5MLHHqzmk94YK8exQAfv8a",
  "key22": "61fpJafsABPhQvbGLhmqRW7LipGTzwavZE4kt5D3J3kR6rEV8hgUU3ZRPwCYjhfVvbChEDx1ABcwTwesi49RQFZf",
  "key23": "27PL4TZS1ewcJRX6ft1Xfh4NkswJUf84pT8VKb2ZN8A6LjnoxVbjM3AVvSXJ4FetgdMhSgcBDiJCxzbS9DC6VfJ4",
  "key24": "4UUunzz34FvmkNc5XPaxpWr3yRBwsxtPw9KjG3RrNsUVE5dEmCYDgz5vkfJuJEQyFryAnqyJvsKGJkn3oCmZGev5",
  "key25": "khoAJqXq4trko8MCv2XFKc2EvdWrujwZ3SKHfmQFE6rvJzMcB7jg7gm2WCkHYbteWsQymkYQnehuxr2Q7E7ra97",
  "key26": "28RBGqyj8YH3auAyRUyK3ddsskxDyUyBCac7oUngg2gES87feKrGf1BUG6iPXve1GzaNC4v2ue9ysLTTvFjFKNNY",
  "key27": "3M2KMLxm3ZsMkeQJiaJ5PVQMhLr2saGTFHbz4U7tuf8p6Xzxn81fux9nX8wvw5PLGipaJ1pFu2yPqEpN4UYEL3pn",
  "key28": "2HoKDq7ZRUZAiyXasTdJLQjkC5mSLhsqDh6MddjHWsAkfgcZEyByr8Nm5ad8NuNpWmiBV2LDk21bcDRe9kmEFNKp",
  "key29": "PXZDrgfKNDrMcPDrGuMCtzb5BEEEJvDnRSBQnuAxtniQUPs6xaiErofZ3ZMq1RZPyLVCvJc43Hej56xKjCrCbLo",
  "key30": "3NH4Z2UKV56sNEvYe2T4xCjocybwpB7zVGdWyyvYaJfCCRXHSXi3StwdJPVSJg5HwgXSHYA3y5XZr7e3R8zScf35",
  "key31": "2bWsCpDt4xKmqsvSsNcaPPthiR8ohSu2hghtvL7aonAPCPsLy845MyXwNbr3Y8EsgPsL1mmHuBkiCtnf63o4gneK",
  "key32": "QLwviZS6W4dy3ishBivedbUxRzfWQiaRKZYMZc5Zj5rBwqZg1gSmLc7csci71JN45RiqQWDvLrBHMmZDeK5WN5g",
  "key33": "38PTc2JuWaWDbX5p9bEoWY6Gnw8EWpWXset1ftf4BPwv7BSgwrh4Ny4hCwacDzffPA9TP4JapgdWnEVD5gRTUpoG",
  "key34": "3yRHSq8pn3b6Dcjagpps8VLp8nDfpLnVfkwEuge5zty1BTNGcotg5xqqTGY65kaUXq1xmWhVxpZjFGgAmu2FXpAq",
  "key35": "5HUt4tnbJCXtEts3aXDtsp3uuHiFGgY7GZS9s7SpMfYy9EKaiNELA8MjkSVw6qc35N3UArRFrWCKRFmPCDwySH8j",
  "key36": "f2oiHexfZxTS6haHqzsGpmUyr8BHPVfeyG9nkjbL7yyNQ9gdMpLTa6XfZZRTBXV2NS6WZTsM5dpqSC3QMcHjRHR",
  "key37": "3G7A8VGW3LT1GKBAM6e1uFWQTdx1n5r2z3eWPHysGGePywCYw7Dsvv5LAfVTKJqUEaccvTJu2PQYEYhKtmPK6Smu",
  "key38": "5c96TF7TTd46XF37atiXp5aQhj6nSzNvtfqqPC1XbPqKG2v3A7XhZk6odw6y9bGaNpy9qxDjKzNP8vrQXUjPTavx",
  "key39": "2ei9i1yoNWUuu6CmpEyzY7xWqVbzwNAJBy5ayot4hTo5iDzJfr5PfZsmW9Do2HnKHaseRBwD1dvEYxukB4H67hLM",
  "key40": "aCBfftBJf5BNZBBY2nVMjdf5ZWPKz5XEQhN1sxcVGYAYpVmgoNyU6VT4P8GsLHj9N95dczpbmWaFE7JH9iFZ2a8",
  "key41": "44tK1GxKmWMCkh8Ajp6AxXVvXFRrQJ5fvpKMR1rysDAH7it6NRJsrmbqhKdi3c3h65nzQzVTKLqtawrKE53WrMEK",
  "key42": "3tGQRuKmYktGhku66A8gmWK9vFRcbQk4yNHminghVPBcTMxrK58CpQVxKQ9E9kyjCDCZ5fEvKqWuMcJfotPu6P7r",
  "key43": "4jFCbAXLN8uQJhhCco21x5X7E5amJ6QK75fPVwCNJy6Bc8gbGRMHSNrAvDScb6dZsUUVKgaW3T9Ho8RRkDVgpStb",
  "key44": "2T9GcGxSJet2sA5k98NZvgvE9iGdkR9JTXFKJb6ydbzcZennKPUTm8Kv74q1k2mHZahF6UGKxwWPD8EbmTJKVp6D",
  "key45": "54MjpqWHktQd3GY2S1uuow2ep9pMGyAXunhDi4dNbsJV6a6bVgKeV6vmWUs6xe9pfhNNK4KfJE7nBkqZt8GFRcwP",
  "key46": "3qQyRVJ5kVtpWf4xbqSHGdLbydbzQZUywqX2nicM6JFVzpLVyjbmc6Y5fJnP8WRLWFkgr62qPW9GMCsPFzu8thwV",
  "key47": "2wSEovr3tfyEQKtLqYVCXYv5UFQdXcLSLfJhAUWYUaSb76q2kChnpBLe2Q861ozQgx5TKaaHUBk4R8Tr1UG6wc6U",
  "key48": "63VWihf1u6n2HMtsHiBytbrpgDMPNXgNbEKnthPxrB67pWFNTYHKBr2eJTZxBo81JNnCbSXnyW1AWLk82TLTnUtQ",
  "key49": "2ohWF37k2vKzKYUFkbxR3ErG2ihD8XkSqe4829ZkfboydzGL1xyVYRvNYpQHUJvTkUM6gzkHCuVRFcRYQ5pcPP4r"
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
