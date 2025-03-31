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
    "4fTo3oFh2eNzwHven6sKYUyVWh7PebyvfShUqYgbWUZL5TWZeMZS2ME5XKpJhCMpXnzJSNfBh7MMJMsW4p8XmXxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5MCoUKZ79jfzAV2Hcrweo1J7KaRxvWva7AP4CxfDK6qwQnYKXWe3jgkMLXYXqa9gbmBdeunDAmQMhGc45UoKJG",
  "key1": "4QZ62H2RvnDr9xKe1fMQTTjwiWmeXr4HoLdMMJpbheGD2fGwA5PmrtQuMeGExJXHoZTpJfGC1naLCV9VEWU8favC",
  "key2": "SLiL5RjMKZtFszM7WYg33eeWA5jLenoHyiU3MGbNnTbqLmoJ7qde6Jy8fF62CNL3k9M3EKz1FejCAS9REMBzBAJ",
  "key3": "ZcSa6ZNrBbrea5UjkUAe8TqRvSDAacsaN22AnQwzR3jpkqpQtptrzcUYTLfJZuniYu9E4z7ZymDQZTUA5zMLiza",
  "key4": "3uzxySrqELPugQRJDtJ66DJz5UEuJtRjhjoH8DNfr5nf1WgCTHzmQ2PaqY3ugB9kwsFXR8iKuWWoE8jD1sgz3rgx",
  "key5": "56fxdDcdZCuv9gwh3ADAXt6swd4AMPMmDU51h9wJLnfRdZUrdAd9q1XrLzR9jyPxPJ2EUysy7L5AdjJCqiYVrqvN",
  "key6": "2ukJjxE4H2gEA44WNJoEUtb9HtqshqgExuaGATPosC6oWwg89hz6JGUuzEDzrEiFTqtUuSeyv5BntPfs5Xk7KNbD",
  "key7": "5FaGCzkGJy7Dwr1wK6v3LkS1efQSfAQ9eejTJMX5RRfmPDf9wu4beupKJjvBr9p6bkYEAHsF9SoE24HYz6eEm6vC",
  "key8": "2CFLv8aJuvVGwBdmzMRQ9wb5oXHZ2HFQoatz651BD6nEGPvpMLBDWGiVqEvF7pgw6iP7pN14ETfmwQBfGJMF8sjW",
  "key9": "5sAN1cc5yYeqeSoJj1ppk617oXxMaJY2bY8Jw9NJRtXBNmEv7k3iDRjB8bPUAbdz4pYxFNjZSM3uWTNq5BTwMTE3",
  "key10": "36bxjKqpzvwV14DM9MbsZvoHBa5n5aYa2FAVqqzjUt1FBtin4njbhLMoiybXWrH4iTVV4tVdfYbbYzmtTfnxEk9b",
  "key11": "3nLDffqXfuZskSicnuDac8FZJ8RArvv5PtvsUdfonRx6w4Ewn8iri4WaeUweUfbe9kTujQMxqoK8o68TwvtBpSeg",
  "key12": "5twcQK5zsuV9cr4UkKHRtZCdGpKBcZncAfbCsvP8qQAdjEsq5VW5DL2ThAJdzgNuFzP4vZZPgVnpswuZ7tSa9pN",
  "key13": "4SfHda4WAKabbvyvpVxH7aXSqNvXAmup7L6JRKbu9WB1zv9mH2pJoi4nXh1GzdX9n3Z55GoRnckBQpb4Lz8BM6tS",
  "key14": "66oarBaDyNcc9d1cAep1LbteQi1sSDQpYVYqXbdYjeYRxdXeukMkHcNTcvbJvTwiZj5joHZabi3n5ndR21G9gJxH",
  "key15": "4T54vRDwFkG1aguZeCeKTPU6Xu8xcdAsfRaZ6zht3MFreAhkebimSKjJ3uJqJ8FmfDcrAMemE7BWKV4re1nZtk8Z",
  "key16": "2oULrtr6w3TeEh3uoWZmwEfi4pnSpXgJCfaux9j8n8iiwi77fwWtzC2ciADzaa3V9HYv57EUPQkV4XAAKWtHTUei",
  "key17": "y1QntNVMn82rhZW9VFoc7wtr7LPiK4z3XcCoT6m9HsbcTSUU8rGMguDoFSVvHVCqf6uQhm9GuAdxCy4o2PUd5JS",
  "key18": "FxXzYukoz4JiC73PsxLzmKzRYYWMQhGpT4PcU6NBWq4fjJdH1J2rEDhfRNpnWog4bzAzVELPs9UcuYwsQUCovgj",
  "key19": "44ug9jY7vaMQspNHMocUm8zQEf13HbLyRWtJqQj2TU8a1LoHKA5Szy3GWsvhiVgAZ5J3BNhgH6HmerTmdngGyLyq",
  "key20": "29KqLNY7djzF9PTid3TUqk2majLsL1THiR8tzyNC8MeaCWyjLiLXgqnwTiqHU9h6Zk9d29tCLHvZ6Anq8oxRm3vi",
  "key21": "V5yKVY5icF5zwJzDZcFcetjZKJ5Vz3G3xkGrcXzTpfeM8oxqGW12A4A9GV356EHcG3KgqBGaLLrzLYieo2zkZdz",
  "key22": "67CjacmJDLrLXfreGPcQzEH9b8pVHCqYYuM75jPPh7GJmDNhtFBLaTZppJ3qvptZ8c8pffW36j6X9rnZD6AugkR5",
  "key23": "2zRTE3pNxSMm8XMEy828j6bSCVDSmVeZz5djibsBdkRPkSidFdtELQvQsEumbmhiNYPdFR7jiRYTNYAwyuKPbVpx",
  "key24": "5gYFb1rx6AnHdGuVCFUkatSxS9MiVMGqm2Cvxhsw8L5KKoFc6DyPwNiKHcebnpSCtZpzLo8axVJAD6gYabUYB1Xv",
  "key25": "3QPTUQRVUoe9izqkHwmKGQmJKgPwu8JcSxbg9TaTDQA9gHFyMopEFc5Hqd3XCEh6yPyhCFbGjrtAzRiyBURFqMcs",
  "key26": "27LqVB9339BfAudxbewz3y5vL2ixz3H5mMShNjQwVWry9pCLGcxqt46KkSYmENjph2fHtvZLQQDWddRWz8AWgEGZ"
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
