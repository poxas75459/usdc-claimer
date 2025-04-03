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
    "VGadqGB7BfGm7oLds4u4cU1eMwctxL6gMqbtAhs3gfosybSP2kRx54iiaS1tqa5Af7GupSSaNzSmNbcTY9q5S2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ncvQQmvmNRh636Ak4KQirnKxyyScSrfWXLbv9kqXB5ytLTAKA87tYXvkv7oGq3S1iuUExChyK9niCHaJjSdptKi",
  "key1": "3auY5juJRN34PUHq9ACP3mMCZLaAFt7D3TGtyL7NhBAGT3SbfknvexsFBMH8qaWsikraTvYVFMVzufeHkAT23Ri7",
  "key2": "2ux5FeNDHntMkcVQKpd2ku5oaML4R6PTGaEFvds8c8HM1VUUK4d4LHgzXQ6tLXYzao6q2YBKpZ1Ks2LDMoJuJxF1",
  "key3": "2aHQdjcbtqvbJRWWjFBXu5mEhnSThbKKD2xuLCsHF316HJDq82ZjF9tuLQ8afKs7ezP5h2c1gFAeXX2jRf79F3qG",
  "key4": "eRTG7oRhXmZDYUvphB75vEJUhUhiDaeg7hsv14eEZ61HdPvrrccDDBsf7v5xpWJk5siVYFT2tXVaFDb3dkhdGZ2",
  "key5": "44QM47CGDw2omwS1SRFVGeU7BgAYuVzgA43zMoPPktWRU7qSVEQPExAoPPwQt5AG4K5hvbRPYNnZw9uzie79ScZJ",
  "key6": "3tbyAEL3wtoH3kTYCTqZAUsj73a62YvfrvCYgYPUp2EzggTgbAqejTvCgiCprX5DT5Rnsy62xepqYajKUdjwyzcv",
  "key7": "XvpKNk1iD4E3WgurnNWJpJmwdNrJ4zCZgQrFGHkkZBZ2ubU2q2Rth79Hoo93cVWrH6Z2zKarurCoiBr8yjRBwS3",
  "key8": "gAvSJux7a1XTmJCLNUqFNv5epKBCWwJhL4CPAr5NDDWPZUrff3ZXwhjPEXCzMBHNpxEjvmYFikMEuQaepMdwo7h",
  "key9": "3RNY7nBnu7VFT1ne1cStYEvoogcceQHTPRwZVS7PiJtBr1HJjzTBsu3RXijz7RcPXswUzVNSZBhhbcxg3vE7Q51V",
  "key10": "uCrTwogj5VYQPFVY6oVmyMj6erRUffAknMPbWZLg9xRJ1FaPit2TpJitkyhnCorRQ277MPG9nRPdURhviPSMQF2",
  "key11": "5X3qEQEY48qCNkWzMBrCoqfpBudZXh9nsJWmKnWLdL5XCQUdEAaEcCUKVHW4jBZk7aHxP2dDdkVYPWWgeLLMMmuP",
  "key12": "3rW9sA7FajyGJ7JHCVRTzJq7P7wpLhb91uY264WV6y7B5Yej2zdzCoWA2SXYRdhofUzRtgTVjEAUALkWgAQiA3eq",
  "key13": "42HnyheYo1ibtgV59HRJcWr3XKcVosYnc2iP3Nm98dwPRfAUG6pDqrHwSqAokwkx42pk1TsCbZtnKMLogjGeJp2",
  "key14": "5mUtt7eY1cPiVFr16KzxgKMemfi3dyRAna5Pz6fjSMRiq9x19TEX5v5mE5jkKddhjCm34Luws85i1wN5tHBQMikS",
  "key15": "2f2LyYdRTmbbVwWCDDqFRKxEMAgL9b5NawcJS7h2jCoEsYFr7dsgMDGSMot7192f2H6mAR8jXeMWCygSTkEbv95N",
  "key16": "32QdFhSiPaAYBDWWGwqbZGkZpmswc8WRsRPtHXSAJd6n1TVLfJjStuHxu9He6znrxdiVhdqJbaiU6hrMaXucV9HA",
  "key17": "3XvVUudQueUS3LPwp9kHyy3XBCjbJoknv1rdnXAHw3kHzaMoay6X4GmYJRLAXZ4UW2urAqvG8fuhfDjtM9MYiQku",
  "key18": "2p3uk9pS7oKuu3o3cFH9LUQMVtEtWfM4SGSgvx1vuwfR75eERkpY7J129MxUDWMMC6anMzJRKvkkGg9FTctkZNnS",
  "key19": "62aAG8BMWWDyD46rLqQ7c7go9zakwuHyE3W43wrUXA88WBCEFjh5DeZcHXPaphwhwSzgwHLVpvK3vyQ98KiFsVVf",
  "key20": "3BfnaBnwBTgRNU4xAckWBbGigPUqurCensA18LWu2P6cF4je936Hk4perccr54bCKSFgqVEtwHNsQvo3spfg4DFD",
  "key21": "8R6RFkmH1rW5Mend4b17pwX3LieBZ3fqcWzR6SPkL6siVe5HZKUnE6XqXaY1vqxWmy4jrsGnzZRVkYQnX2efJ4w",
  "key22": "xfnid2WSSsAW8QpvGwmKMKmrR7rVbVCWrVi5dv9C198q5vutFmznMNX7XY19hNBjjxieszw4z5sgmjD8xLDxdTg",
  "key23": "4RriBzkAvjzEtp293qyUZBd3KeL5zYtvPNvGo7R9E91mskk7DWKXkLub8A7tqFAE2USsom7zU1Dy9MQuo58ZKff",
  "key24": "4cxg8LfwxGH8EtzS4Umnf2EuWqVmigFFYSUyNod2kzr1vtzgt3cZwhnKTKEhmvScRX99AGnCQVujeedXa44uk8dN",
  "key25": "oiyL94FGHYhQx15QFxPw5bdCDx1t5VJf6Sw5SH9cayyw4eB9HY3gPWUtcfNXdQkkKTVe1zLXwwnEJvY4RdXYzBt"
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
