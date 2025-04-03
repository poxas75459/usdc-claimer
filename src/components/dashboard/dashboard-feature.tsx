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
    "42nhxT3zXarqfshVp8TLB4XRvVsRJeCA1SrVeRkd2MV6nvqTcqx1ab7GTPiQ5WwALCFmywwoGMFfwnsc73B8JFXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nTtdwuEc47HEKF5n5fGNucLqXKC7viwea8HDLLwbcSxDFWfwGwZ7aX5QYbKCpVfamF7ApztW84Dba8Gvp57qYU",
  "key1": "22b4Q7TBs5T85oJTAzmbQTc9CW9mWdS9S1QUnYgBggRbbSn95Eb4yHujCqEqgjYnGdEdBpp5XaDgADHf1HGcQaRY",
  "key2": "3w2RrJQ7XznWjuq3Laahx74E5RoSiCsgsbpjgn2UwSFyXR4xAXRcy95P6PuhxS9VVZoRwqKb1u1XV5UTLyxYXfZd",
  "key3": "UR1VPtPY76NkrerxyYixd7ef1MjaP5MVke1RjuZRpae87qBbwmcYPbuYBby7BVDaKgn1ppo9qXCQCo4iezXAVH7",
  "key4": "2cNmphHdzAWtcC5gu2urf7txeDishUkxwaRmoP43Wf1gyercKZsaQhTTA1ged6SAvq1YYjVcRuWSoVF7fYgzcCea",
  "key5": "523SNsbsaR5g2mi158oD17dQy7fBky1E6RHBFEbYXtbdmpnq555wAps3RnFLgo8xNLehDf5VeeBupXkRT3quGPUC",
  "key6": "22qa1K3Pti4AhmHuEKWk3NnfXbARDhjZTowAJEHGBunEqHVeZNaKkRGREeKBRvEdDVKQ7ozZDJzBDS6ZDQL6Q3bQ",
  "key7": "TtsgXSf9ZQrSWtZfVYDcPzQjcoqiSpUTgUzGJ6Tzg1iuSiKYnRHE78YnEu6oEGYiDriNn4GMftG7d8DnfsMww7G",
  "key8": "4JKBrN77jLYWE7CeqBHKaZ1Dkp7Ptxcyr6rXAzU5MRQjtNkT6LP3JFHanverWbztbZgQV8P3hxDucvQq7Srsxkju",
  "key9": "3Q5cAGUu45ogBe1HkMw1XvpyKZEMemAfawnq6QuTNL9zbAEg5QkRRFqLuF5FooS6XZxDFq9qPKUsQGvQkgWC7AvU",
  "key10": "3RoifLFhw7BavsSP31XDgXfAFMBe6jd2dHrpM3oAjcAXhQG1EbbC1Jb7FryPkszz38dCc4HxVCkr4xgms9i35zqA",
  "key11": "3yoUWuQBWgb9gcgon88ptJUYx7r91TrkKJ26wAz7qJ4WEHXwYZ7W6REgtdAaBQDNXHY58b3mnPHfWaRFzP21i8Wf",
  "key12": "9jndEhRir4Ar1i931YkRFsiZuj9pe1UNrqoHzE43bqruA2wCUpgoKttp39WzdEuoPDqvsChWJ3vvdNEReH9Z3bx",
  "key13": "2jCnpTwWbTDgphVF2pgrDR8dbhPQXKEzLqLmxEEw7tnYPFtnCo8AYdsmKSAn1CqTjBffJkZGDCfeGgbHFtY4SMer",
  "key14": "49YhWJyPBVfuj6uVc9GtHX4Pimit9eDS8SQ1tpy2or8tAwReaxdFGnbFR4z94CXX6dvRN6AmBYosdEGKUyx5H5LU",
  "key15": "4EgnFpWjP6iegoqmdUBnpLQn2pJtGBDFVxERSn4nCeaLtJ28NKn1Mdf21H2hm2U42g65ANFb7t9FqjrRVAMr5LUV",
  "key16": "yc63SJfiVyG2kDnFNkB3ksABkxgjGUm6ntTLsSCfRQi4H15TGVm3LB7wYjv4tBbyKYJHhv5a2bupVWEndyY8SMy",
  "key17": "2zjHHPSFyHnQ3DXRvfrswzYSXqEeit71vsiAwwtdnmkWV3iviTN87djpgwC6MHthNo8oW3VifWhzCqT9eXrBRLjC",
  "key18": "3cHWbQiJ2rVVAXeQ2HToqdA3vZ7EkKajan2PgBZkdUu2Y8T8xSDy2RkWfw362JMfA9zJhsf8SVRc9ec3x9AWnR2L",
  "key19": "2MfgaaAFSmDjq9oBQhLi6FRe8J7FkKtzucBaUy6QCeiTdKmEPaiMau6GXFD3d4AsZVQfJAe8Tjpi2p2PHyf2Tk2G",
  "key20": "jEmrQn9QectNdzGqjYBC4jVyVUYRKAphbH7qAS1cBMwUsJjfYBWuBAihhNyJTiSv2dqWp6iTBD1rm3ps62xjMPE",
  "key21": "3FsTFqWG4EXc2UFMtUjk4m2Qxj3eQuxoT7fpfyL61Cy9Pd6KNL59TxnrrNk7jTMUifR5z9wY9F2cWDAuRExPUA8a",
  "key22": "3MT8pchsEw8nqpjboZw7iMQtCRA8dXCiUKGEURxfcqgEtsy3mqNH7yHSyQhS3aF9Druyh3MRbX6no1yEmcBjf7r4",
  "key23": "2z3Cp5VPrDG3cwjzeVYRoHddEy2feYBbH8eUwFkmN4RReJaS3x8E6FMG9sTr5PGVyXP5RcPp8G4CeRNHvpXBkV69",
  "key24": "2RhyZsjHTgHFCDLZda7zBdwtth99vjHVKaTuLQodb99aYcE6mW8stW4voBaJ1bJMCMZgZEmiJXrG4g4iMh8pRkhX",
  "key25": "2jqREdXR7VXsFUShuYSctrg1DjuPrgz6uYhXuHcshEkgpt4Aw2uFVYVuqSTd2cou3A9w8wacMfKLwRpbFLiaZVqe",
  "key26": "24ZWDmfrAGo86kaHbDL5rKamqfajPpK4tvv7hKKthQQ3DaaFCX3cwRkx71WowiaXzyzGubzid9Kgo3M55uqmV3YZ",
  "key27": "53JryjNNdyCf38L4uEpY5s36Szsna3qBjg83RwySppZso5Kix67fr23DouZLng2YJ7RPSdYuQJdRM2DT45TaZQBV"
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
