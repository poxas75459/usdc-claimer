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
    "3XBsThEzmnwx2e5kqND3F8sqi7SQikichqeVNcuJaskR3XCm4Soq6B1z5vuw7eqsFZwcqCCfVoCHHS79pksSvS4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v28txvyXJCXLrErWk69xiRqQry3tTZ91hdJNHcYAc3BNTibZjyynYYexurzwEgs3csB73B4ZVNbEh4TNrbU14FY",
  "key1": "arB5rFcz3peCt6M3t4tmajkGu49ZTcLEP4e3VeAD3ynQM6dvx3rdsh35xbCmjRTYvuiUpTerHkvd7LJVypDCGY7",
  "key2": "3GqYiVD3XNp5vTAHNvk6iY7syKqCY6aR2NyvY2GMmWQhFntqWW36YnxtnLQYFaWsZhd1LRj6CW4aBVUdGTFA2wgk",
  "key3": "NpUJnNMBFrQJsbGd4nuwCG6qXb4uMoHaRwapBnWLhpGNTmZLsYj19uDvq6rDZ2c7M4oUhTVQf4yZ4eJyRpBoBjc",
  "key4": "4UBwQ6i5UXvGjm4pT7dFhbbXzHxLW4NhCQTRz6bL7TCSmLTCWtuFMnNRmrHc4Y4S2CxGsg71KLJx7AiaefC2PB8L",
  "key5": "r292NL1zZxcz7VL9xHchhVUuQD1zYdhubCvTUWycNmBnnzaWyTagTf3JVGRZNvR985AwMAaW2TLANcWhi45pH3n",
  "key6": "2VQeem2WisLtvSJETrrn7uEzU3CrGPGqKdEm8FKXPHhGrDSZMpic6TXfpy1vpHUokyjA5jBoVtSTdcsyMhybALTN",
  "key7": "43Kg68zQLn4yASNoey9kvL7PZkwWa6BaUwnrPCaN6Ci9EYUzDHkqfsab9r4qeTnVhxSRx9zLDaPEjtcozyvmooaX",
  "key8": "49xc2zKwvyuW9fSeTj2hxGu4rsAEjc6dk7gdnbZqagDV5w9SW9Ugy4ZLLJQaNV66NFFhYFEDCGspfWFQVgg4g4c6",
  "key9": "2wvWr4nHMocUCnvLamgBEBVq3qVWEUc26VktCkvnHbGimA6T9ANLF9dSJ5Q8BMKj9QyL2Y2wwAuuFWwJ6dWoVMND",
  "key10": "2WhuS8r3GZGVXDxphote1itD9tzHnng2nUVDzj4fBVaJyPYyPkdLdGCqcvq11aDYonNSP3r3Y8knW7NFLymLKamg",
  "key11": "5J8BdNL5m8APxBb9Hsy4gcbofgbbbGw8wfRWf8CP8QDq6W1Drk2gMtjXbjbKB47fsDGFVV92oRJjW3DFanymH2Ng",
  "key12": "3qJ4wnWQBxSjyKJoktkEB8D4YFy22hipJPRXB28hfBGebMWijauqEaAKezEVNcb7vVEVyisVogd5b5dM57HNWkfu",
  "key13": "4RRMnDgCwhcmkUmHMGLV2fMS8Qbn9aWPZKDV5HvR8ZDqhad5zqCtZEgnB2sfqg7CU6ijcQzXofUQicUBuXbwvUrt",
  "key14": "4FvRJ5k77hnQ4HuzeDzwhQzvY4SQnqZu9YmQwm2433f2LqhG6cn7tpNt7wPFaCD5KPscnarodHKwj1UTPfMvEsCY",
  "key15": "3NHFWrsFLu3DdMcVcsrNLXoCQy34viSrzbrXW3Q3zkk8DDFhkQittmnwZmuJLyFe3kH7nSrpBQaUcpbE27GSueLL",
  "key16": "3NaY9ydQiRL5Wvu2MT7KuL5CmHXLdico7bf8aPiNqp5QrKmCWJL6z7maj9hU3mTZLxfDpMx2kLbJTCkoASBsBT2P",
  "key17": "4t3RxmH4bQPAG6NvWeojVH8vYg89camLZvXgfVzUmkKupbkUm2fHFfYrp7bzEjNWbZFSA2VLhboWZnmdKJwjMo78",
  "key18": "4B37GQhZdXMBgfXgKzBXFrjrULbHhCs7cyyZ1uFRARrx5sDAs54yUC877rRRBcQ8J8fXeSvgVLXB1ATCgtpvwzzo",
  "key19": "35EgL9CbR9w2odNiYQy47TDon17nihu6UD6kbvkTToySGAaK4YnXtuo5JXtqBiNymXydbgdXqt9WtqraRGKpUU8",
  "key20": "5jUhbYzdPvLD8uQxeeUyvdQXayG7u9FAswMG59fCikGXmHNMHDcAkLQ8jrTp5t7SK4Tdm3NUnmPcYGPzJmCUwzUN",
  "key21": "2VuyicQumdtkRyyx3upnFiYD3JouEgQHpdxEBeR9K77DC47uDwNihD7K9Lp2bPcB1wVE9YFzSipwUJghsbu5PWzV",
  "key22": "AtYDpwZKxMMXWYTRjUHtTqQ6KkQBjuWbHEAR9iVcJ1ctpPJ7WqWogEY7RqmcWjxZWXrT6aJiF4uih9MTksDyMtV",
  "key23": "yWWHMx3J8mEVyxR7waRZPoDQdwg7bGz6v3YZmhaGJAeKD8VYrhFUPsbi2AnaM4o6kDywbZmpa7c9BS5meBytE9S",
  "key24": "3Ja4Vf2jPyYV5X9EHyf3SkjYPYjqTPSxySvEkn6s95wk6FwpyHD2egHPiyFMhAw6zf6L3SRqbbdtAgz1M2iUym83",
  "key25": "5gPTJRmHs2g7UeQb2og2krbqcS5wA6KA9a78GudLiy6mzbzVhdgC5gxV12ogE8x5Ge8d6Guk6s572jDPin3G5J7G",
  "key26": "mAuAZyKnADUQYttDjnZB1sAr64jBY9yHctBWHUbPpVnaphc6ygH9Tz2rhNPa9qFCJ32vNv8SPB2hoMEhRAo2YvC",
  "key27": "3sUESJiPM3N1UDoSgjYVuxVUtU4wvUR4iDtvxjvhMEEVE159Rtnk9iV4o5DMLHWFQFxRPfGpoLxFPnrJohn1MKpb",
  "key28": "2ZFdakwizNdEekwH1SqXFc6Qdi2uY3W7kqtKoeFfzsmpwPeKFVezAZSkVH5QW2CpkXufWdWjMfBV2UxTAwBEAQ8N",
  "key29": "4r5Yk7SxjBXhtAwa2QERvdB89vW7af84NQPLJ1biQHp613dehVva6mYimuCbKBH5BzznoBkgEe6rUKydhgfpw8X4",
  "key30": "4AwoAtdTeJMTX7qWnawozMe4hghuowKY1Gef5YxqL2d3g1mQWfU8F96vvrn2VQRCfm5EYrU9GU8tNfiZdY4pYa6C",
  "key31": "ZPscEw9nahAvAabG3ZekfmDR1u5xNAabMZP9Vw1nH3XjUzvoaLjw7mQodPPaKZRLgNSrWodpnxfB3mdsmUyy64c",
  "key32": "2jiXLCh4a6FMQFEQzSnSCfmZRPmeS79cTVJAeWtfezKvQQymV7fEEpva1zSt6cQTyxUp2FYZMKxZN21Gu52nYBCG",
  "key33": "2kUU28ksEtPVubUKc46oTYpxZ2YHWaVgArMtDDC3ghhfXX6tpcqzAh6H9PYELC2DvbaAqrzgv5cjAP8Duf5m1Xug",
  "key34": "2aGtrZQgP3PUVHtCXtcvwn2pyNTMpSkSkLrfLEqnaoha3fi3dsyKUqGe6DpR7SzsDggh8bxuwRwrmmZpCQqGbwQf",
  "key35": "3nXod3eqMQsursxENBNEDPxqA3utWSzMxs8tb2FvA14LBKnjMb9z5gHpohkBNmpFtSsRh7zw5dhv2MNtiVxVpkxB"
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
