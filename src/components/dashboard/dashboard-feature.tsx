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
    "4ygrTkd4wnUnJC2k4NzYhz1PuDYohcpWNvWC2KtmZ7CT6EatpQzXQpTMFeoo3ZH1NSdpuebwuQr78eaee6YgCjK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MbP1BijBpgXqWE14pk5LKys2n62DuTwjSFS64gFMa6J7x3Lhb8DqaCLDp1iTVBTFsSVWmA4nk8GSF1uLy7b45N",
  "key1": "46GhTaNq9xYkwiem2R9dHgsHWVvvBZ7DKjiQpioHrjvYRpXa2UK4GiSPt4qkDt5mUnTLJok3YFM6x4ZHv3T8bubr",
  "key2": "3SdjPeVx7EqJ3DrtbJZkbyms38sxaSTe7cukyhdhRMqJG2sPc6ZZZpcfCs6tpb98H9bdPpDmnveM2Ro5Gdzc5pEN",
  "key3": "3EmznymxGQCFRWEEepqvUmqhEDg2zWEk5zBosms3yYaoD9PCGkjXdxWGX1YXahYLkdenJ2hkmNPv2crT3f8y6Vp",
  "key4": "5UYBuMxSW5qevFRUmLvkErg4j7VKWYxgG1dA5KLLqXFVu4CeE19UzKmtRoxKbSbnVHGZaW6RGzaF3mJ3YhxcQGbS",
  "key5": "4Lczd4kXvSMhvxZKdUcpN1iXcWn1J5iVR7ScH3jeAmNaenkHLsKr1fcjdh3Tyy1CgJFdHGfCanMjrP6ETMsRtDjv",
  "key6": "3mqJbV7v35aZj5GVX13PCf1wQdoPwTyc1r7dB4AWX2Dihu38gJz8wCyhqMgTa6VyVkmEY4JTjEyJqNTvBvT8r3bG",
  "key7": "4Wi8giHeBqTZX7fqzouaoFbfubk96ZYf6UCfqJGCYSNo5YxjWijgE5YWPFF9fuR8U3QLvAGFSsFkH1ocWAwoGzx5",
  "key8": "CmNTtsuNvqd3NLbFWoBs6w4SSvUFg4Kg1gbbmzQWzstMhBKGyrM8wjeuRugkqejAiTqq2F1fD7562cDxMQQiYtt",
  "key9": "4CW7prHVGtW2DsccUzgh4sn9uHHhWHgDxdEAy7Kn5V9SBFXRPhFN2iNq1rXDibfxrvKsr6PLxKPEszSt8ugjnDGw",
  "key10": "63QyqkhXrCnGGY7LjzTpA1VWMtL9s3jF3RWMfxGykzy1TBwGHGf6WRMHh4HyoQtn6cfPtuPzHumtHUUoDAbvojRF",
  "key11": "63h3WkNYM7FDDEYFpa6vBMDYxvWcBWmYT2YjcVANE3yxxZQEPD7B7AMG96DRuY64Cv8Ya2wS8kUUWNdsCCnG1SKb",
  "key12": "2BBmda8tzwFv6kCxeFpjTY3vw79DogKSRMZs2ESsRyM1BWn2p25LQNZRCtPjBUyKkdZWriA3VuavBB3AkoJvNTc3",
  "key13": "38EemYDeP62rMcMegTtaa7wkiNNou5LZYufggSEKsN7w8Y9Ld2V8Gat1kcvXWoTk7LF76ir1qKRyBKmpSFV4YmU2",
  "key14": "3KMd3aKj1yjMDbnaLbWACFnEpMUpyGVHS29hAvR7NQok7bQWueXjeq391pvB126xdjuuH7Mm34ur1Fokh5Wv6xfP",
  "key15": "2ybkYhxfc8jbouWEhnESHJqL7SNjnDs1jixs9dGF5SkwACWEB7nRUmyHD77ScHhvwNs9SeabgK8fRE14SvsxMacF",
  "key16": "4rtKWX3b2BRetgco92wpVzYDoSXjZfjwMueJdvyHgTGE8Cjg3pAWiYuyHZkRXfUeYGmUZaggASwZsGnxvv8E4Qh2",
  "key17": "5N1mN5FehX6GsppwXZb9nmeea5qNUDv5x7Ens5fzJFV9NgGhUDzL7Tyj1ptxXRJaLWSziDwDGNpEWhaSqu4ruJPr",
  "key18": "CyBatyRwPrsY5nbZL5MKJuDta487J22TwxntHxmQVjBb5tLdmtfeUc4mEzLGssVqR8snYFJCpDeEWUD5orpmrgJ",
  "key19": "4J6Q6sd7XhEQWFmLpfwdD39oMcyKEorCxddSSAbktVsYoapVkEnXY9S3rTcVcaidGANy7ec2wNZVcwwQ1RakuhYe",
  "key20": "2wt1c5VuiGLGM9U52otGTQKZs82zyEqygdTrrU2WgoM1MCqaAJLEZ5WayRatcdBdnxvSUKjCJsPeHCkpRefrHG2T",
  "key21": "5VMqHPgeE1FKjNga6GY32DxWhnqdXHqP335ADcrRkUFELZT2Ki4VEEn9DQi2sTAW3cWc68jmEPnhGGzVw2HRaK2j",
  "key22": "3i8oobmGwbQooMRtZ8zhQ9un1VHnAi2Nw3uKcxXAFUY3uS4iVMmDFB4y2wdKWLxoQzxjbyE1TWXrAwLqkSUxprUs",
  "key23": "55cVyKRi5SnW5AFaHfRHB2Gd9XGuCJ5qBThErt2kA77Ytb3iCEtkQrUkVkq8DVJdP54VZZNdwzz8cNA6mEqyvxyh",
  "key24": "4bPR3Rs4b3dsvfFxFhxTWXJxNK9PFnoKvVcaqqaj2ATTwUSurLCt5EY577MYUv5MNrMBoBvrFYiERn4tWb7qyZEa",
  "key25": "2LTYyDmEHF9RYpPMWReTK7uGazJ765u9LxtXaEK7SfJHPnmNZ9V3a8Am3f1zrQbyyzA9s1ukMdBXqSJhvYz4WuMy",
  "key26": "3EN6DreUuUBzwRti5FGMYK6NSNSy7MkGo5UyDnB7BTWdsip8CELzSr5TwnZhGkpyjZ6QGD73tkfvKvfHApQCQE1v",
  "key27": "4uwSqtejbU7rnPpiYv5xtVofThDp3ziTydz9mw61gF9Szcj2KhyF3ThPzcFgm24UgSy3vxo6idmBx5NqygxQMrzM",
  "key28": "4jYQzB1xGxw59DoQB8jLjDwdYyat3W5d8RoKXEWeCmpKSFNss8qJrFYCJJmVUxtxGEwibkKJL1EC4LBxnZkQks9x",
  "key29": "5VqoshCsXiHvZpVyLm1D9FnxnsEhFbdqSa25ys1G3BTSTnBDPBmYS8NSqLvUhjXRFKeUSM2xxPLnoGzNQmgxrBzP",
  "key30": "2FR8NNXrxqrpNHyVUBcsqVAL2ou26pcHsBuwpNzxvEhX98VD8uq9i7Bvcy4J2v43UBvWp1pLqE8U5p729fEkjXRv",
  "key31": "4e4QFwGmYbaQV8HS7hwQKE1RdQ9YWHkQURao5mgHaiHz2k2YcnQSMBW83bXXStSvQfMab8SRreXCRX1L9RQ2eNy4",
  "key32": "54ibTs1Jpa5q5XpuHPu21ntMg3tstJfEkzJgZTmkUUUEPcxCoyq9kPcC7atFBXy8hDiV6zwS6YtpZSPLAKzrMjeQ"
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
