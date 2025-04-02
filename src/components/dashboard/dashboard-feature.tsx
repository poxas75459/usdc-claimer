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
    "Sc2CHWSApLHG4vrc7qpxvgqgbbuCEbiDBc69dhnBhycKoGVdDRxBY66u8vBEiBmLLvfepNCg9irDYfwyYMvyPud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MqWEfFJM9fuNYGqqJEvo21aQ27J7W4UxKcTMuNK4WACkJbbNnckYKPguim2g9vozgCnpVS4Z99n2rGjmwb4NjUc",
  "key1": "295TVtw1RsZQMSqUeGqM5CXqpfzDkYrBNLnpTTwDMEeFkeQFoytVUpwNeoma7ehgrMTLtHCTa6dVwriqBPaNwmLc",
  "key2": "N3fnuUafVyyQseaHKLQ8TjmbiFdBmbFtJWrncSj9SpPq7Ug3McEtAzUohUHdKy4KnMz3FdVhzCPtM7g4XYn9C4o",
  "key3": "9QiHt3ZNfmUEk4QRSfpYdDq6FuZesT4uqWFfHhoKEjwJtgaS8kYWFBida3ovTmZvL3bfMsguXvpKZJNQDNo3LZh",
  "key4": "3S5VKebxqvTvQKA5e9WpnMdw86skFLfAb4tLzQbyhYYxUnJeDCFzDRC3TxRMUwUuPpp4bpmU8QyrMGa3QmZemNrA",
  "key5": "2DMFwMdAvydM1eh2vrwGjndxdEJDih3VnAc6CC4wszgxofD4Ank5Hd9RwVzKC4jzR8gmCeXrK5ZvgxZ7W8yKMZ7D",
  "key6": "2mXcHYQ37sDiayvfsaZN7kySMnB1Gxk5QVHCLeNWDzdrzRaHj7ki1tdbrEU1SAww8ob8WEAc3W5GrF8icsAHyXN2",
  "key7": "47UuEX4ck3zHqRBnPP6tRGAeKvf9PgJJLkPeZDuXt6BuXBRytgBYQaac9CpaVDd18BhGweeN9nFU9BBgTA4kHSKK",
  "key8": "2crMk2p5fc1nqa7uEZuqrg8tnd93kNxg56C9WAQsjp3hLJ3NUS5a2MXzbmxH26RMAyQ7xzHLJqDvSkgs7f6csBHw",
  "key9": "2aCZRrXqTXcVDZ5wLyfE5VsjaNepYtHtp5GxTkETM5gKk7VXaabA6AzZuQXLCqQgHP6TcJ3F1DjLic8HDLLaapvi",
  "key10": "5zbhB4UMwJmVXBm944rDCm4yaWA6ccaBEh7SbyNp9KoGSa9my668TKfLKNb9sMbfxeL89rc4xUBjT4KpDchMepnD",
  "key11": "7zy8kQC7g6M3YihHSUAZMnYR1YT6AAUdrnaoHKRwc8AAvRLk9uoVPRwSnQQcKmd6egrPKM9kNTwFkbwT19vr9Sp",
  "key12": "4ypVNbwtXQnanvFnUQPnJg7Syd3CZZWnaEKAvtHMfnmZQ5aTnvBncLnLExfQjLpa59RLubX1T9n8Bifjo9hSDA3V",
  "key13": "rHWJX4qKmVFbqGarJf1MGBGX4sxkCaHF2daVQjDd5i4HXo489mcwy1auywqdhpRZNRENL7wpH1bpDzksQm2Wjto",
  "key14": "5NWKdD1Wyp1YquTSdgQ5MDYU6RcEsQ4rGit86LmrBPmBSDWWkdUZAd2UHMWtTeC94qi8yBtqXqgomQN5TTq88vQ5",
  "key15": "4u1yCRNXAWPsKn34tgJSD5qFkkb4Y4NTT5UfsQThjVfV58gAPHtby16wUaYn7H43oyygZMPosiixMnGNpPbHxG2h",
  "key16": "51UGVEvZTGa2evSSVFTJ9AFkybxVeGES6gJ4SJknfVRdUK3pKgC2nLZ1engUYU7K76eowCfw92W65yGR7gNdZHif",
  "key17": "3Svw8izbA6qrd72LfknADBSzX5pCPJ9Sy9RuLupJNF7EPq4vCGUS6eHEa9epCUpn7CGWCy7dQeDh6cNjQkXGBXXs",
  "key18": "3SxEpxZjWkJJZ1iUmbn2tfNTaNr9SwoWAxjvivRtYKbJDLPWhUqrvAXJ7ZHPAoBymaZaMznra5EXLR57AHWGwVW",
  "key19": "22cyY4pYi1brKpdx8o5a5GGxE8C6aZ5Lv5oVKCfKxCQTSLVsUfV12p44RHpMQfWWWQy1GGcTMMsV1GR7FrDCXtYy",
  "key20": "4Kiz2TVrRrhcqLsWGgonRJ1cKHDNoN1PzKQs85Vv8kNkso9b6agDs8Fzyd3AtjL3oedswRF5QyQQAGu5bg8Ai1Cq",
  "key21": "3un42cANWuyqRB6AGwGNS7MsWP2X5sjMeCdNn9mdqY966KqancNuUswqy3zq5rU7AJpjTzfFZcHqp9pctft9mv19",
  "key22": "3jw1t61vzAmgfLxWh7sh5qN3tbCay83cwvK5A8yeeDJuRcdqmcCsi7BEU4J2YGtTn5D8ubtCKvck9ckLgbsZxc1d",
  "key23": "25aS4LcT7STwogdkwYevEoomLDBfSbJ5dZeSUVUELatXwFXEHBP7As8SaZcrKJx9inneAhiuapKFGmz4e4cxAx8R",
  "key24": "4eAQLNj8ZdZyBNMc2AXmVWZwGfspDnzNAWh41gtZR4Dr7xGxuT5c6zXkGRjx2ikhduicnrBhovwYkiaygC1wfW1",
  "key25": "wdGGgimfnsEkvqSbMSm26fuyH21MVLJDGjhWjM6mQBEsKWsj2io2JnSaod9nNFbFwo5sjnCCBJ9NDLb3nFBLQKY",
  "key26": "2jLBXWCFtKCZyivFKKEqrePRZQBAFacPwk1kXiWWxzcxKN8yafiLDf9rfVAnTD7ZUGwTGybzTWhwvbookPStu9is",
  "key27": "5GGeVu61ecYpuLnG6P2XCuF62iLUtMWYeETq88z14Pcbc3rhn5V4QVERDqGby2Mu5iMUgwaZWkCJC1JBaxxxdec6",
  "key28": "248z1Cbdb2M21vmhaayWK2pgPPu2Svw65pi4ocSivbihyByFSE3ZZmdDVBE6uhuoefVhTWnMDpDn6uYZh9hi4zwG",
  "key29": "5McAGfXCirAvjz1wk7JwGKxRsUh5vcgzQGh3YZ9NaShSzRscxYsWy8FCZ18b6RCyZWVh24ZqBfmX5FD1uWPJN8HV",
  "key30": "4Tpvu1J1nxK3zwvNoMzxHguVGM5hzaD7uUyicztfRzZ32zgjprX854pg8R2BbtrN74LmupQjEsRkfM3Z9cRTcDzm",
  "key31": "fkTqmULJehqqALEWsisZtyYg3SowPAg8CEXvUNgTuwmq6RBp4QYNLuZEtyHxa9hcsaWfgKLhczz1xArU6qEuGoo"
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
