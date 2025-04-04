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
    "3wt6mAEaT5Y3AvgDCMNbx1roGqKG83uq3B4Y6k59ehkMZyzp6gJhtZrVPJgF5RLx11jxzhhPFrhGHWo429WL4LYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrBhYFeAT66GbS31uyov6Bf5KR6rCbLy4FmvbZdYHGcGdqsZppc3YFoGbfTruweBQJBhutdgbesHNmGezwhkc8P",
  "key1": "2nbECRQcmxjDFRxQqhZpRPsTP6hpgahbiTdnX9S9mzagXqBhdPXykG1AP6PXBfzaCFZ2WygQYQ3Hw8AkdLJQEeXd",
  "key2": "3YGZjmQ3skFyEpkWBVX9vSHDVV7Jn99M5yvtgdWHsTdiBtqZGhmeeC8zqSMW1vvpThKgsfqDQRJosVrz5dxy3g4U",
  "key3": "R1VByBjBh3bZBK9LBubNdfXMeVwXycuKsECyU1fiKnbiEtxmGVVDR1sC2b8oERtpvyXiKdH3vEH1XcAh7Ssnq1x",
  "key4": "4zLmQYTUKuYu6Ct6gkW6n41hvs4PqAanm96TGcHfcFXvQN9sNcw39qBGKPh2bSWQvW5pRxquoS2Axcai3yJQ6ZGQ",
  "key5": "1tcEiZsSb29eS11vBdZ77BoNwSp4zNqB6AiAU6K6yqz3Pw2PV65Ag19H9Kvzv7sJnGfWBiuo9hbb8uTkhPFMd1o",
  "key6": "5BUZet1zXVnD3P3Km1VxJRzVWLyrMRYooTJM96haBGYruHMSqnwgSdHndkr72M1aFs86EQAbqr5aoWNST2kjJACn",
  "key7": "5MwBBoXU29dBbfQVqNxtRf6WBczVCLFr4pjubuFQmjPLdQxNSnQzkLCrbQXJvMzydMvZfPQeQxpbnjv3tNjkipAE",
  "key8": "5c1tVEcUhLKbU6jKt3JG6suvUynWp3qG5tUirH6qfzWjf1fxHBJVyiVUAZYD4uTmM74vVdrMzyuNqkgnbdecYYh7",
  "key9": "4jGT5diSfi81weiUoyoPyyCtMmBJX8U5rwnkJSonkpGj3ccy5dZmXXJLmMVoa4p2wihexbXiKbKj4eE5iTDGvG4A",
  "key10": "35WiiKnpP6CxPTTbFtixEyD7d6GkY985v8mmbhFFaAyiXNzrbr6TSrwGJqC169P7qFVQcM8mGtJE8HCrTTAQNYjR",
  "key11": "5ydb3FELMGQfpp2LgYKE1hCx5MnPxjEzac9mZVp86B7uJzhGVv99xkrPgLC4ouUuTap27VWazvj7644DGJLjPtbb",
  "key12": "QGAk7R4ccPxZuSyhZhNMuRvgY8Wem2MR5BRu7RGvLFsSNLpojSgNHoGpc6uuXNNQzoVcXgzaD4aYSJnygaWuQmj",
  "key13": "4dd7AbmgmjH86U4m4uWZt5x94VnvRrLV4Gs4DtruxVDK3ZApzETpRtLgtB1N5yUgqHSiELuw4P6yWexMocZChuoL",
  "key14": "4e2NKRKJvHCvEeCYk1vERYtvkBQrG36eL1nmyVNTp69CuUkBm1VgFpUjsVgPmg2vGcdALsQ64EhYNTsm9pDuL8Wu",
  "key15": "4MmG1bwGizBzGSoi1hS1ukh4LzcZTfpAXVpQNm3xixJKzfoudrM7PbrnVx6jsXyFt3hcCMTWHsHLVBeD24PrAR3p",
  "key16": "5e8CT9Zcf6wfxgs8jsnp71RJWVbFSG7e5LGt5LzvCjwF5h4Ng2AuHh18UgjFZVuvRtZhFcYzZP3AzB39h7hmqc8q",
  "key17": "2sbCkUu94FFBvngLsjpSpocefiDhggCYUpfJmbQof7UqdtVfW9w7eLNhAtntJ2GBtFcz3Sy8ipL3yXNiFz87y7SX",
  "key18": "2QU6pGoUHU4ZoTwskreT8FJ77YKJtVYHY441aYCmJK1NdvrXefzSYznxRoQAUSL2F9AoXFqJnrArmEMnCsy6or7q",
  "key19": "61Ta9xt9vFrzcHPGLopFYgCa7HN898m9xTf8WffwiJikVsxXXiUSEpUU5acMwriU4Uq2nyGMotRfji2VZdjmXK8o",
  "key20": "4qPgu3D52fPE5hzyrcwXsdUbNZaPeLRGuJUbEcHH7gVqdT4s1RSnmUGVBJvEAaCtudFa9qJuHFyCqfYvsvNY5gUg",
  "key21": "jAdmbETsPKzayo6Ah5rgXdF2ZxvjnL3cVLSx6MWQcsK83TzNSbxNvFrdEgDemXthy3VDhEkdmXCRmDFDAkx1XNG",
  "key22": "3GyWDEAqTzuwxFLc6NDZXCUENmJG3mGV2f9TUAww7CiCMzC1AcWx2dKzUPpWxpF7PMQfb6xoA2zb3btx91gNW5St",
  "key23": "mpsdVgXGXiLXgYr75Mu11882cp5nnb3oMdgRDz4ES9pJTFjuGuxifmGua9P9TnNwzXCkDBCVcJeiTjuMGrFA1Jh",
  "key24": "459o51Xjz2vn7PXjmjrkC6uotEDiPrDmkFpLw9SA7b6VftM6nVdGrx25tUfB6tVfX6MGCKWA7jE8TA4XdbWd6JbZ",
  "key25": "YJUfPp67ABH3QMcFAveGrYShx11dBaXZ2F1HEgRAxo6WkKiHfgTJxka2czSvNBRxVRtMsvsCYTHpCWZkWwmrwig",
  "key26": "4M8Xb993xSarK4ysHPHPaVP6fZNyUCt8rFnSgbMwuD9DaZaZy8MHUYd8DGvkzczKDXmfpSYCuJGeahsVFYUJEodq",
  "key27": "3FEiTNaa6deuy7qdGbcsomM96xHBWbH7rhhX2YfXwguLVYw9jYvCvtkpcjPCjdBFdYdvkG3tqaWo6rM3KE1Qnnr",
  "key28": "3oNAeieC1omQ3fGfjqA6MKyLeSqAd7MS3ZbTricu8ADeKZWWBCTrrHZ5ztyJoJG6Ke96UhuyhN6SSqXE3R6AEJkT",
  "key29": "whqQBfqQ742VTD9LcSVoP9me1tiX774CnKbhoiLGjx34jABmxDnSkzyDjDYYQppas7F8dimRzAQZLLrh3wybZ7F"
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
