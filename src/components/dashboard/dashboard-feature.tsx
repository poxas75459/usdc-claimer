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
    "3aPMgbb2qumKqpsYzek5pajr7KR9NXDQ6bpmLCAtwqn2hdGWaa7ZP6kFiycjqbmAifBKBB24iixrQT6bpT3QzRoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFWewJzt265fSuFBuqyKfuU9HErr6AEfZm1PysAvCVpmjWsAMJQgauka2Wccm34y5jLcUYdTicUuGbcgu2ATs4v",
  "key1": "5ZVtYXhzZX8vuYRp7NpbfUQSXPX9iH2QJc2U5hLjzRV4ukqKY4Tdd13BMYQX8pUH3RznanYLKZ4eWbJKjnJtziys",
  "key2": "4QsXYGyn3JQcioGKVoYVpSMATfErSLjXczySGit6etGgeVvX8QaX1eUGJYNULavSWyuhNa45GbMBRyLBdSMiY2TL",
  "key3": "3e8cVuBv9Qyhy15suBoJ6CJ2k3zNB2Rgcm14ge4VQs8JoMFzyz4gvYoiavNAKavVQvingaEbEQJw13Rvcnc4bBsu",
  "key4": "4XBYeM3PrxgQ9WcFrVWu4LCNtxU7UtbCtT8TJE2AytaCwXMRc7pKVwEkLEQbxMq461nycA6zyxMY57F929fmNvbM",
  "key5": "39q9753bfV53tXkuWyaP6xv4ZaYtwoFMRW9Vi4f6Vk7CsbJi5teNyAFjCJqPNHhGsTvu8eih9Y5T8Qk1AEN6Rvss",
  "key6": "3rG2kkxWbGY4oosJMZwAi4GnKbH8uLs4miZuCLZLno3ZKZC68aSLzoAoGWWPLxkz6tyfQYtxmLTcdmawcCbWjCqi",
  "key7": "269GvVWCgwopVUWi5Y5hucdMbBfq1QP9vk1WCKuj7pCu1DycZwU1iXYMKJRDQNapdF9qonzDrVBbJ4xSG3EnPPqf",
  "key8": "65g1kHpJiJ41SSWdYh2j4B4eWGVSZECs9ToRWxadTwzF9CCbUvp4xgE73pK5BgTZUaEyDy4KsGJKgd6Z4ky7CxN2",
  "key9": "5zYZWg9L96bbFDcFwA94V3DSjRf6emxPw5Z331dMniwnWxKn4QZ6r2sxsr3m2Srn4xLBgEmtEjMMY4D6xe1PNsd2",
  "key10": "3gpeqxi6aKVrcuU6XdtgyBxfUvv26RfETQYuSVQf4xpB2VfApDz9t5oZqAzEjzQuqCn2bAnaTpqCzVz4VgPdbMsY",
  "key11": "2pbPSxekBoXK8iv7LmTt5Tf2Gif3axaxisBfvpDyqvY4fB77MkVnNFRrVUD73sC8XcWY4EkWwzKeUf63kTJda1A5",
  "key12": "2XuiXbmdzaAeTKpFJQVVyotJ7jXebehz6NXxSm3oAb6dJ1WZgTVB7WPPiY8iD69o81qVD4db5DbdDffL5Q5w7m5p",
  "key13": "3xXKGfwFCauR4Hn9s8DBpfrKbgz8kkun9sBdU9HG95jJ4r1pDJWF5D86KbVddnkkcupg9jqDDk8YAdKstZ6Ychca",
  "key14": "3eGEqngDEdUaZGd6FmHc7LkaUCX9kxAFyXtCkt3e7N8vHPr4JygzVFXECDywEBAk5pP9mrtdqS825ZoTEPfyB8j4",
  "key15": "3JcMuTWEhLD9XvKkPSwcKU2K9667QSm8ugUqAsQWUBNDrKYeuthqkZau4ZmEQhKoimZNiNVUAbKsP6A6yNk2zML1",
  "key16": "49Lk7hzNKszXJTgiXqGiFfY2C7f38YciSfnFuwgLtU2oj1rEJVKVhCscJARoNZcubMdf6kWH8EtT8miqfVE6NmMW",
  "key17": "4LCp4Yyhi48XsVZf8LitBG3BXYXYoTxKYgiDXUKgEbQ5Vy1FV1BCaCfE6bwXdLeNcxtWEjn1Tbp8LaKwFxDPUbbY",
  "key18": "3K8qiyf7ihuCzDWyLMF7RYLcAArLBei2JtDPb725VfWHMNv6NnWGsEak5LWfFMeJNZsBjxfp39jaRfLe3uFYCXno",
  "key19": "5wtnzejFgkPknC6qJSUpaLrFdrkLvreFkM41Qv2W2kcvy8teWYxUfYpebvrqAvNKjtEx4d3TkxpHBoynR35uGi2r",
  "key20": "2n6Q8ZsMXBsBRNtGFRDfuYtgmQDwTszEUUdrVryaANiiBy6wsGSBvgf7T9SKRxQSwA3Mi8ivBxF7UgRiv5RJKoAa",
  "key21": "3fku8dJ4bPxfb4mne7Xc8f4cJYRmXxCCb5xzX6oECJAgUXrqWooKmmUA75jSNDgYyKrge2NMrho4WsdcQoUpPk6T",
  "key22": "35m9TgYXXX9kRjLtCWMfDWGvMXaDSQjyvdoRarx1v7JGVPmW2cYBWnsYqyRGYRVLiq1iWDLMgEoSAnsdbiejWwNo",
  "key23": "C4qha53M1Af18Uao896Y5PKnvx2sLiERB2fTbmK9aXZDeMnQCNBsCZooRLjwbvjsVAdrouFMLoh6DnWYAWptAUS",
  "key24": "5Y9xr3K8q2yFcKW7qnfjpVvU25XC6BhGCFZ8CGtgDwEbkhcfHF5iuiacvNtfEWZvkrophScT9ABB1Z6gtHdFRMXV",
  "key25": "2NxiPMyFAz3qGPoyJxdeC2BbzkQa5opkKJ97BwpKg2zRzM1mUbpPRGShJJ41z94ngxU9X5h8n2589NzxyMgNZBy3",
  "key26": "1RuboSALjLi9DNfyHtBtptjRvkubMacugV2iT2xZzMT3pywjjdkPTiT4t5BrN8UfWFsU6RrcRgquyBReVsCz7ed",
  "key27": "QV96utmAoEz9prVM7HRNKcozSt6LMD4mBMRWEoncvKhSZZxoPaqqw3CnFbnoiDtfWF3vWCg1W2Tjf8y84ryfGia",
  "key28": "5XCmU5WQPe5M6EEzPaxJXpgaJzwzC6vEny5pua4DqZqcdUTQAwjhHLq5bAJfwVv67ng3Q53gYqYsVfQ8ZPViG1Xe",
  "key29": "5djXrSBJuaReDtcTTk6cJ88UFXjExq23PNwZYB6D9m2YRwwNbx2eDjXqTgKtUJPzYxL2rYYz6ukRHWXLnPJMYG4V",
  "key30": "3HG2EMJnpK8ktdtSt45BhvYbjCtsBTxrVKxW1V2gySdjNNFam6BQNa8tfuqynNA65Bfm8L4LNBcXXdotw6XuFsAh",
  "key31": "4UujnLYLEYewfogCZTT15AhaFpyfWjvNxQQfJfQZbgEyjX6iGEE7d6wVTD4jzYFid6hEkRbLch6dXi36TnhEjSa9",
  "key32": "4ApWekKPb7kGBLvnpaDRNvnYRbXi2G8nFRFd4uyfRpTmtY2MGToE7P6ELrrpZLpWx8eD8sJwABjxo1zeffGE72yg",
  "key33": "3ebkeJzqtGUnZ1Y8yYM3YwhEsCKRqpapvEoxVVWkRnDmvkmNmrNSzSpDZkRrNnQ6t41Bd4vkPuADVvFHq5QrDkEq",
  "key34": "66yrYs3twPhaWof2Qf87HGxbAk5ZCRmkwRCUHss3wjaa9sBUTLcmGySrH9yGDzuVWpr7NzqGTQ4hifVe9si2HUYK",
  "key35": "28xauogyhUHKPhmci2hsLRCxPaZrLdVUi6LHdVjdMR27271sa9YRLYxEhiiykbqrEnkfdeoadp9Y81hE9iLk8wxp",
  "key36": "5sL1PXoj8vYQRJeJBWnYdEDC8MtXf3YxZZZbjuZ9Mh4aSGM3TQYHUDeaxamE5TD2TY2USAqnPDHEuWQwAEodz72A",
  "key37": "3Pboa4ZEbfLLg3zdvNisATawAGJEzfdHtWnx62axTC2mCwzCFFTQqNFJfRiAjrRqRaXadDQGASePrd3v5Gubn6Wt",
  "key38": "2c3ty6dWj614B1VtMWSQTWBfdrxyjgiJ9ci6Q7ZYnMsxXifCSGrYAoRBAUPhY5zmBBtEG3eKetUbaXgSbwzS1HP7",
  "key39": "7kRsmjHZdYigtL9YCZ5EZbK74PnVRz1jj2xdQ38c9ehJPRtQbdptF3pUvnogtvF7MqjQNaZV6wnvexfmYkzxohC",
  "key40": "5njeXVoxRsPevjXxGVCzCnYXA8YpJWkBW7PHMoMHkVztz42VN8xhTKa9DXNi9EeAiDfkMwR6Ms9h5EXpcyXpzUpD",
  "key41": "2uY9FmCV5NcSBzncKBQF9Vv5RxoWznn5GkRxRnSb56aAWwuUHhBxSHRyqaC9opKUaUFmXdzNGw4LNpcv6ocAAdc8",
  "key42": "53F84k1h3y6MWf9UtSqFkHX8h36NybszMhL5p3vR81ZWRSmt7253D7PhSucmDHued9yXVRFaz6Bs4FrNCvqVua8i",
  "key43": "2avm749rJhrusiis74biUoLfXLijnLidPNCnhdu1wYjB1EVoB3rnyPPZQ7bAqkL5BLvZDkzZS7VjVKvopPZbacMW",
  "key44": "sYA3Er9w3Qc8Xy6HZVANykiJppdwNWDZ8nT91uVCquKN2XiQCMD3UMufQazJ72hqenCkSPvrcBbnpgUBbBi7MWf",
  "key45": "59fUH89XtzkFZx5RZmZrXogBiJ7As1TfVHvUznhFkocqJdDfemNmAQryGkhW2JUqmuVTZAh773wEk6QmMfWz1ZTc",
  "key46": "5XGxLLmNuo6SiTaYS5nnn1NS1DvTJXgrTsNAXsafLFMH9EM6vFP6yfHXw4Jx6tPLBabw4kUCgvWM56GWagFV1CuC",
  "key47": "5BjjEHHx5L41dJgHHL5Hhftdx7hz3P8V2X2QmMtfLBDN8oo1BYoJWrbJvMWAiAzh4svqvcv3BfFx3qKeZ1qGtGMU",
  "key48": "2eQJhwHe7G5PL1FoYMagD7wGHRoQRPpPXL5BH1N9kQ8sebNBzoKN4jdhM4oHTHBUismCnzGacjNCr2E66oQAGWMk",
  "key49": "5RjpkszfCKSo28pYopCPuzXFcVxywos8Lu3Zwb9NzKd1hFfv467eDtSC6TyMUyJuTo1BC3VRrB3FYTPFpVfQyuvd"
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
