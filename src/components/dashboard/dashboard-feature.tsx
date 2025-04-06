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
    "4uPbmyVwbBBy9bWNXP2BVjrZiSM1VLaPYbFUhDqiidjD4YNnENAQc3Ena8L4CAoYz4Bnbp8cW8oSr5ZS8fJoCFGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPqQK98UPkbeb3frDW8CbNR1XD2s2KjHbJcm7uAjDHPoxXZ5psv8LMJtUXdxNtqWb7wdyHnMEThGAzrS6qR1geh",
  "key1": "3SSEMaHQpMuMSsTGQ3Zn8NqGwYEbSpTkPJkebqaQm5DW7js7rapwZ3P2vYZm1u8VpyMixXyVPBxCoBMjC2hPkXdM",
  "key2": "Zc3Ru6pYRWWnhtWAUa3HTBS8W56Ks7wwmnQkmeChW2zMp2Ts9y9fYp2jXUWAsPmnH7CFHbZfbnTXb8abS2Kibus",
  "key3": "4YBAjyT5QfaJkbyvs5DzuGwr7oE3vq7EMNVvN7KFj2r9bAqa4Tg35jgfys3Tdf3MxF2rsnzQfLDufaF4XcNdwm6v",
  "key4": "2JCr84GZBUTNXz5Jkv9UeeAFT9XYJ4dHywXr67rL9AZPGSFFQAKrMAERtkYcVyiHtzdDy1qkqDyFMSYgL91TRF2K",
  "key5": "3SfrgeFCyXqhFZqsASjPikRKzzZAR59SFrCtvw3SLGFqEuXiVc6SCh4BSkBzKubzh56jBPk3FdoqxAUQ1Mtk95x2",
  "key6": "3WJ1PDVJeB5F2ALAkX8pPp5bQjQs6ds1ctfhz18dvVYQSmGfa1GoQGt5g3Fy2hfMKdfi4b92DaaJ63SezHgMyRro",
  "key7": "54X9W88vghYxsjx4CiYaVATf2gmHyE9mpj9yRacYwDPohNqNBXgPsViiAnMPLCMQCUbfsLWtUNi2jbhGLDJUtKWW",
  "key8": "KUVNh9ciLJZ8KkYP3zLhmuqSmsfZMMjCjdu2R6ro4m4XPDQh3yjrwLjhcrCb3Pw2pt8kMZxrK7Gm3Gw48Lv5dWy",
  "key9": "VXR1oLAgMRj77tWJjc6RUF4jfMa9tnFuTNdzC3kMxrur64wufG3viKzspim3x28dPResxC6R8jtgLUURrZTDS3s",
  "key10": "3RKScptH43WbMaWzJQ5TCDPB2eJz3mXKL6DkWyiG4iLSMdhiaXqMicwHYs6Z3GCWjZJw53b8BkgHFBXanK4oJJgd",
  "key11": "3w1wPQurV3F1gdT5R5SD1DRuU4DB8JoompgjwtBNXSANk5sr2nSasaEh3HCeAmu5LAgPA8XX1eFireByf1vDNRfd",
  "key12": "4TcyWZm1yJCVrKDULy3USn8NM2H6851mduaVeD8dYdTiARxyzMCt4kTwMkcEvsjEEKHe7GPKAyLSbLo2NrQdsTPA",
  "key13": "5uW3vFQMSUVMf2vZfpvpQNJsFcf9YkPRxVzBcpGXfCAL1cxNiDbJto9i7dqTE4XtJGzFzuYXFkP5D2zsncJpqnSU",
  "key14": "PUMRbCfcFVK7v7qzt7Q594xzVp4fRqGicV3pqsG2ML8HuaomwZx2RXkEGMrBudwo28XLD37Mt8z5GAmiU6uaH3Z",
  "key15": "2yeqNRpAx4j9GpioM2qSMZzWqEFFRFFuCkw7cjx8mnFS2H649r4B3jveXmjDEgvFCesHRFn3hspcCNDENEFaG12C",
  "key16": "MAs8Cbtp6tnCDwhmvxADjmiZUf1B9pA6FLrbQxRLq71w8gnbzVKBnHCwYdJjTP9132mmyBScfCk7Dda5ypHrWoP",
  "key17": "37xK8wkWNTNcgN6C5xyRPyFSR2wa6pP49Qqjwm9eaN9boH7r66hezYJFCzXF3xY4gz8WkwjJyPfd8bG96udezDFg",
  "key18": "536MirTvpknUM4Dn3vxqs7w2kfnUbWVUrRYGvZpVyRkuUWuSPTsqQprz1AKwuGFZK1PNGDp35K7xP6xJoEbpASfF",
  "key19": "4h3XbBaKMLkfmTq1XQYnGHehWA75ZHNx23brMDHdVhfmGw8Coe4URadfeqVRFnF2D6gW7V1ipaLF4HrsX2pVpCHY",
  "key20": "63X127SuKmSGWGQnSf8wguMipYL1pRsfdoH5KdXXbSKdX4a4e4QuGdcA4rrxuJyvknh5LL2NypxQTHT1ELBXhH7c",
  "key21": "syc2ffcoa6tUcs3HCbUVv7PvNoomqto4rZC2Mina47gTvM53WcacbwLyBtBP74XQcyxV4R6MrNiPPCJx7K6wSjv",
  "key22": "2Su8nPKLbGQo9Vtxd2siNvxi9aKsb4T3qp3isnh6kvtxtpfkCQ8tWVMGg798rY2QSj6B8SXa1vEDZqmGKeXUqEbc",
  "key23": "2y8gmkrjLN3DT7K6Xh6EdXLXeSZFrf2kENCmE8tw836kTc1oXRJrwZFyodHfHZygGa4GcfcFnxRbf1YMvCwqd5np",
  "key24": "4YA77wnNmDHqU8wwJCaeGMgDqBUdv81WUBBn6J5cAEo7Ltmx4VzvftPPmZVU5bHZZkHgv8fA5g7EoZbrF1aqf9zJ",
  "key25": "3QLHpi5d7Ko8TW4LMQR9y5Q1zax1hkEoxSsv3fKUyb9Z1tCFA1cMoiDPf1myfgCsyRJ1indPz93VyDdNU3PJM54Z",
  "key26": "5MkxBcCUPEukMWDQU2CtPArvsDQnjF6WM68CHQEu12ajsMv5rQv3GKrTwU9EH5PUQVXHqyb6VqPpPtsK9SG7dHvR",
  "key27": "4Svzcw2Uyr3AWecbCVVufpHMD64rGmKp2GzZ7HEVjF3s4AUAvnrXPEqssjg1nvtJGXoSmEgRNHuizLHrJCU5oNev"
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
