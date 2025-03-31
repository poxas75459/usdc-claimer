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
    "5pgTHB1cLVjpVmu31jTq77g2zBp39fBvurnnci7J6tnXJLwAGRRBh6aWJTGMr4nM7ok6yz5cdFAKok2br5XpGJNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25K9WNKuesqaMeeRjqR1kyoqnKjn69mySjCJhWTs5hMqTW5pLyQMH3vH47X3cLCpxhh847N5gZCaSY6939k7gar7",
  "key1": "5gF6qKM98meUR4i3gGANVxiHLiGAt25jVkYzgUKJzqn7StEBKhe767epZ5FgFiPBWwRKENUWtuNw3nkp8SCzU6DP",
  "key2": "4HRspAxC711fLn9cLXTb1bc3gEnfCKzgcyGgtq7UJY1fFMMjR7yRGvu87vwDeAbPGeDRvjfeftJ46Vtqy9HD8Bj6",
  "key3": "2oj7WkXBELQSBTTj1RHNSBZM363eonNbAnM6L42BGnCHSbGuJLMMfkV7DVCGiEDAHACGdsSBCUdKtosqcsc3kHLN",
  "key4": "3zovf4oGFjnLh9GL2Ms8i1Res16dmR6n4Uh5Sfzt6J8YrPHtV86nWZsPtY4eVxRGp4LhfbbsefFQtAf7iYgExHYk",
  "key5": "4NTP7gHgLEABbDpSA7Z2NGUvmjzEdBi9aqhTXfcYQH3CqWftANb3wVy4rydHbVNPhCWfCBaoNkkhCeZpvYXYnyav",
  "key6": "24LrmNFi9VNAnGARnDjL7jHc2HPQmRBHJa9cf2MxGfkqdAsx7JndoxeCYChtM4ewCsk8kLK7Zsy8UaSVRv51zrvK",
  "key7": "3r8ew7L2mnCCCDV2y997WBNG5oMUNrHw3bphMLvTRtWoYF22QSBtVRX3TtqBfvRwuiGprTrMb8zyyk8rkz1msiAe",
  "key8": "5c2zvvQ6iBxH5GVaBHPLT6NqNfeRBEnooQKkoJJdm5Lai8dzobVhtEsRRUDtujeDPKJRxVQ6hqgJyhMNSPUieCe4",
  "key9": "5uwwjfVkwXyEsQn5U2BzbQmxmUHHYk3WAXaHfRgh9kcADpEKHysv35NKMdT92K8JDuNprvwzR5hENfTN5dE8aosR",
  "key10": "4WqYzPtARnT9ukt2s95iYHj2zUtoMf3QXU1HCZxCix394pReCXnwW52e6TVrPW955dtt7ZC5Z8YhbGbMAq7R985",
  "key11": "66zKtdUG1WoDfA8r3PcxzNWNxhxBkCNAh5brFUqMVAaAcMdx1iFu5T8YYbLwPNeAxsZ4J9itoUXgDddRnejdNKFV",
  "key12": "2p5rv4Gj55LKRNpRYzZ5JJnQZZboGB4D16PrUSTPCFcaqNAU2TWYdsueMAuZQUoiZV5gPN4ycSNX165ZCnRnH3GK",
  "key13": "4G6feYTeCpckkacRS68DRp7bkyhXHFDwCXAYNeeCBdAY65iCS2XjmbyYMAMbzjjU5dvbqwymrTNphmY115UD6W3E",
  "key14": "2NcXGvfixKJsDztPFtgk8UaUg3uh6GJ9uzjJQppZVJDi4ZmaoQCycVRdygP7gm6m1QC72VbPzjQpdnK8fVo2Yz8A",
  "key15": "EtVXxk11dYz2bqYrpp3mHH5xty1KyRNxCxwU223CrsnzqeJtFLfQoJe3WAKZNV5qdxgy83xge2tXXEAmBCiyApC",
  "key16": "4P5daNQoMpibhmZKT5PkHFsn3HrCRvpmMGXn6cr1gfi7Ksu8QgK1B5Rvzid8exaEx6jmi4MUNT1eQ1posP6GkiLf",
  "key17": "pG9YpR6SWtvddE8e7m9kzavso29PaQqHEdRokZdPCnpKFysBNq6uPevJpVoA6J61E4Hw3eM1XHLDsgeh3UdL3mx",
  "key18": "4ik1HPzhAZyoa8wD6gaufTVxv1XfnhJvN3YAyri43ZhCaRoWoPouD8C7KLybLXDGi1TzTpjH5VbTdiyqKbHH3HqJ",
  "key19": "61czz851fUNQhCnNpvqJpngvy8SnmXp78JVY53bKr8jivuNcnR86hyyhtP2P8myCz5sTvoD6BS7Qo1Un867SViNz",
  "key20": "5x4MBPEa9wdCX8HSFueCoeMZEstrkzWQGsovUhqREvpUyAboQiSxFue8pAiL6htgX41z1T8VPnfJmN517TekVxRL",
  "key21": "3ktyTEWqa1nAUL5oARuzHEHsm5xGPcvQ2E4jiewqS1QE4BFhztQXmfcmZ3SQxdhqoeYGFfmjiwEUvgnK9G2efQV1",
  "key22": "3YzYuuj46PzPcdkKqHDimGnqVuQZE8zr4517GMEgGEsQr9YYGkfh8FoqrpGpCR813C9fcmRRV594xdwoYpiwRVXe",
  "key23": "3ieNXRoX4tJSPEGjDoFWgUKPk64fGJX9m8rYwh1efWj6MbWepzi6fBoe3j4aoPC9V5kgsQeXv2pQeTE2MXg1yxQt",
  "key24": "35tKcgTma47WgtDHwtUxi8qBfA6Vyrr6bwqXtY3bWtFxHuA8x4vL14uY1Ds8CEvMv59PcnKfxU7nZ5ErrzEuLwfj",
  "key25": "4RrqQzAsnTp4JCtQLnBh79Zoe6Cu3sJHvp74b6VpoXYuPcF5ybMePLUHVC15768g2YEwVzZGgBNu47trVc655rm2"
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
