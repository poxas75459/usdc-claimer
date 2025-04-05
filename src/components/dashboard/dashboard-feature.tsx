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
    "tLvo6gnyWtzptcauKLS8k7QPEpmEfFCVzo3BHsU2cdVDuPi4SdYXtoKhdc4VHWmXHodU6k4kPxahySQmDJj8rZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkodUSyzTSY9ZwZFkLoFstPVBzdsMcqj9KSvwRGpgPoyWEgU3mHfCMt3xzMLzSLKFXTzUkJJCuPgdRJ4wvYJw39",
  "key1": "vTfabN4VyTp47U6sUH93DTqcrkw39H3pdACqvVD8kGnYWwk34CYZe1YREykUoKduVjcpFLfzSMdo86j8H8PmwPV",
  "key2": "41nC7PutZwCvB5gygKbpLFY4bq7YPZF58A2wD4nKiWMcXgKKsUTKdziTf42HzfG2BEkKRR8FE7T6kKDf1oCWxBe5",
  "key3": "5Ri9dR81LgLN2wKNDo7QX9H2PYBqHbK3cAMfwMRkJou7JdTaWwPw7AsHdEBj2AL4W24mq8wJSDrEjYnQJQ4Qjsch",
  "key4": "2RHjWmH3QDuGwREJkBa27ZGAX8PNshFNgrjhPw9LJRaRUgArgWPhYzqxFQTqoxgnLjzBQFMaGXvZRQTsTsoVCURc",
  "key5": "2Jso2HR913716XZwMkQXADsPJf746fM8ns8pAnEzoFnjMKQJq5zPGsDyqe3WVHcQV46pXH2MY6dtSQ21EZ5gJCpf",
  "key6": "58bKP4Ct3NW5W6C8KG1uXY5rYuPqs31fX3xGxPeNcbGYZs7WnjJNQDbQ1ZDhbLaTfY4XNSm7DHy7ACC9oAXyShfn",
  "key7": "2QJsAw5ouhawc3SoWUqxhKxcEoGGCK7Q2LCtuzJRfUFxEsrsRqXbCerC6xCuef3Ld5F1B5GfhwmszoFMN2XjCdKP",
  "key8": "33vdeFznYMRzB6DoTYRjdLyNWmWE3gMtVCB85SH1iyhsM8Ydh5EPLVPLGaHYzEyZcBLRMCdL6jWgWXo5XQoFfv2V",
  "key9": "363tPLZKM1E7JoHy6c26HY72tSMvDRj5GmCb1zUjf8vUNuzUjezp4zqbVABaBkTNQeG4RftLqFM2KSa7ts5TSj3m",
  "key10": "66nFWG3cv4embUi88g9fMHFZ1wWsSEzau3skQtXqbcBZhY2q1Xiictt6GVR5r3PTVbiJpqTr9iie5hrHHnr8QQeU",
  "key11": "q1CcLvTzyBJqPxzvNcXBFqawXUQnDgfQn2L81aA23BgzKafL1941kUurZP8VWJFjzCsYSgorGQaV1UBT91gyMch",
  "key12": "tE3M4CpVgULGPg3nUoqUtuR3PJ2GddbEdZMEtdakGbPNc2nZLvgBbQygu3gBarSpKqr8jX8kRb8wFk881BmqMiy",
  "key13": "e6gbyVHNkNgk6WNeKyfDXFpLCa51auLvuueaDSRoVgXBdVE3ycSASi2NFb3R29aYXx7q6bfaNQNKLkVy61Sp3mb",
  "key14": "2mZ147XeeP5Fid1gKv3ukV5BKJ1ing9qembZTVcKahWJUGueLTkzFgyD5AAg6P9aHzhYaR1CxuQ5dWNELuV71YVK",
  "key15": "3372okqfEfFGmMwinRYt7yoXCYdsYHp3ZM8RQ5vNR1RzXfs6Ba92eswpsYuHP4KVBgbAFs88hZxRfFP3tSVfnQso",
  "key16": "3WD7XU3fV5Bpdymn84dPH4bCiRnf2QipNdBCyt8HGyScPtC5YPxm77mR6FxJd5rScms8ofVLcJfMwBi1vtx7U6JA",
  "key17": "3E5donegHwzMVV1uw9nXmXmtwufKZW3Qjzqf4e3piwmhDfigof4wmSzuSJVvuuJjgqSQkWWqE1vSbTTTknkzKUd",
  "key18": "treD2fQGHEhoP2CHayz4xFfugf1ttvsZVmKpdn6qGMDBqS2ti1HLEZwvT92619aNCYy7mEgrMZDcjVZDRg2jomj",
  "key19": "2dtdpJaw7QkWhs9pzzi9Q2YG9XT43ADXdJhPeBtpaeQaHyrGEtYGLg5UA3RyiGxsqvNs9QaxTFEd8YtYxwcPtWQQ",
  "key20": "4sq9zuQv5bgNaL2h27XyUx9wJCU4154YSNkyiU2LiFvnEnMSAmMfcMwNyG6MZ6mey5gmYjVonqrLvtMYPmdmQMbu",
  "key21": "2n7pP7tUYX8FTXNUb349yVTL1wrMg4srxia3tihv11vKmphiiWFKhSE1jBwSdHUcsyZsmEkWH27AjmhiksuMDRko",
  "key22": "3yK1udz3wYXHKW3FZeX9Nbsf3SbcuTn31KoAcG7LtEMzvjVWw9RCR1zMbuvXqqoTqY5ay8h7K9eZQY5gA9SS4oAa",
  "key23": "3FE2W1F184MZ5AKmVty6XQdA2e98b8axkzqZqSmLJQr97b6w5nLSpWQKnT5MXYAcNCcKaZJ81qZkRXhZRJmqCtHw",
  "key24": "2c41dJsnoWanPraCpQiaZok6uup9N9TZdKUYmzLgYGFv7yAQdUwk9BbG4Joy7dUdtf1E38qLVi7pptmuoyqGQ5bz",
  "key25": "2beG2VYNr7SCWJe8Bpg2nuwrMVVtqZ5VWQRAWMtzMmMQgSs4fEzLQL5XPAHh3wTrQwo5GuJDK5QPkj4TQyckzBba",
  "key26": "2TyDALuAKjUZHuQK1qUbdQcEzyYnxmKNtZJS6U7fBUwrSfxcWtYbCq9gQdxmrZ24eQaZrZRuEYbfiKWkfjTNwixf",
  "key27": "4BjTPiA1PX2R6uLgRQLPBcBENqeQLd7L6vFL7U48ixZ42TKFSK4XyHcjUHgNkvsDst9xmv75KNXgweefrSH6p5M1",
  "key28": "4FddSdUCRPbuFrRoFZSBRRnmFN87dsMNR4RybC3aFAT7pEe4JJb7EaGFGcqSS8DBG85fUMpLtuUbPkVLnjJT1ehy"
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
