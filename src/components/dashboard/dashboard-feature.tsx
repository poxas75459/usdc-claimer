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
    "2FDfoAWqpe4zicR8MJ1XhwEHziNpQo5MDrrMLnLn1TrtR4hc7VQoRzPWEunzd7KvJkPoccDnBixqWULCAFFcejuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpDRmYQjKLcJcHWVouC33roXzJbi8FFHkoscPEU5DuQt8NKwiGiG8i4pkoo9qDyvbYdQEYuKqbrSRPcp6sTKrjf",
  "key1": "5PEu3JyK8yjwv97S8MLqnFpb4r7t3bSu7WjhS67j5QatuvRaC8PCR1YvzwoBHgavJDV3nfwJfE2L269mG3myfm6F",
  "key2": "4wA7NwwkpeXeeeAs8jgP7MDYRzrbkBYxvcbxuuEp2XnhTuRYYCSjfcBk8opNzLJUr9eNqioGVmfKJfADnPSsaonK",
  "key3": "46cTWp3QvYD8F3FUzaRnY8bTWzR1UGUbUFLqgqSyTGt34QJJ1fjZeMsKmwCHkfW9xwWdSWnwBotoh7EseLH2cWBw",
  "key4": "342UdRa5H9zbSk7m8Sq2tGTeaqT8vnjm2DSqvr2hMoLvXNKZ9mX5st9Na7tHijqN8mCWMdzEeg1hg5XAy1LsGuGk",
  "key5": "49Td9N9yAbUnGt5mcp2tTAZBY6n1ZL8RVV5K93LMBYqwEm9VFzsiYKiyajmaZUDLYrAAS6kcqyHX36z9fFWjLLoi",
  "key6": "2tha9nL3rwxnLW83BGEcioi98BSxViEbcao3sKgrBUC56q6a5zoRw9GM7XXvxARUK1CpMz95b8cLMzGgkxTnHkKH",
  "key7": "3tQBwCgJmrHPtv3d1ZKoQDbCC3ojrvHyhGQ4kF1sXYc33Db9sxxEoNEUhGEeQMJv1gcDUrao7qVWS5SjwFUUeYG6",
  "key8": "ySMukDsNDv5Zs6oCSZsxCqLPQZvDaptf2jdPTMmCNjEj7ak5gMWBBQq3ufREizWj44oBFk7ND8rhgfuKxCUKm3A",
  "key9": "4Vsx2GgDqzyWQpBEK93RN7wiTvqDMtdeBtxsM57P4U35LaUrZKGyTMwTknCM454F8U43MS5AUNYwHQiJFtmsaHSB",
  "key10": "H54qXtQNfFGVHhnyRGMAUjvnDi9vuZ7FisZQidpUaygwvGEgZRqPXrxXPC936GDFgwdF8Hs6Hzy9v8vH1H4C2N4",
  "key11": "5Zd89xigRxPu9pwestyjxahddcG4SywJbLM3zjB1ZHQdbbwXjr6JWxF3UaczJeDEpPYoC3XtKSUcRAZX2Z2Tp2JS",
  "key12": "4wQ98wCVL4Tc5znyxqRA4wGh18ppQNBzJjUzYPhKCW4JUNJH9itGN252AE3B4RK1LepYMhAP9QU7EwNdxFGhxFrs",
  "key13": "2in8Hb95TXv7M6ZKkH2semVVsm9Ehos7ybKcVrwssvPk5vwxzcDhvzY3QU2sdSAeJi5A1tZ14QFh5d43ZStE6VB1",
  "key14": "65xEQ1HkkDVPJPjvaiCW6XY2mY9wDxdxKy6uiTkiFmDZRfAcW958BUgzPNcDaYAh7VsHuocmaC6v7w7xYijjKSej",
  "key15": "X3Hx8xgJxNF3gNxTH7HE7Fj2GNUW6NMYpL66BogoJtX2vLGUcTq9E8GGPaUByR6mhBBBwxpLByL45QpkoS1V3Pa",
  "key16": "4BwSV64PmyTZrXyBzuPTWuwa2bdbrCJLuvcaB6kPAwuDrNDqTaN4FCtDj2t4DyrSr4Ynr1kNJVttJkEsdccY1dPR",
  "key17": "3AZ3UswrLFgvQkR8kXQcTjzvr3YTXc2c7MaxNjH6xxGYArjiTkQU7QvgUq3jL9RzRQVgXnyk1NxpH148w4mSjam2",
  "key18": "5ieDNC82oXDPCztEV8upxQW6dCkfHRSzPNVbUzvV3wMkW296nnrhbrVMPSkhBzNiVADyWrD4DECp7ozNhv1aSAuS",
  "key19": "4zuYBuANWXcYZbmFf1CwUwJM5tyTYJNNHtuYJJd1P8k5QFsvutjnUS5fsM8QBdGmoszGvrRjVX7ZkwVM78o7G6GU",
  "key20": "5UV4xYNjYfjoGBovk54HDuHv8KDKMMLgao7inJeo7vrRVJqUNV2XP4fBPjFQjsJHJsMuSXSnfmyXQrSziezXSDNP",
  "key21": "4f9JqMyaUeRdLGWqzY14aWCxGcnRjAyZL81pkRYdjMf2mfqYKCP7NU47kPtXmWF4Vr9R3QF8pCTUXfBccdBHRVG8",
  "key22": "GtnRt5dkg49m97x8pcGjVbVxi2P3XdmmMNN3mDYDijTw1q7Au5P9zt14uH7Mdi6yetTAanaJofVgdCHAaixe9Ne",
  "key23": "5U6AguAgutXCFJLF3csQPfA7EfmdQCJ1K9wdbt74sWW91et8Y8bFd1NRD9YXwqggH1zRkTVX6STMxNg4WyfdTWiQ",
  "key24": "duqn4NnZ29AFraogQB5BNEb1UeejRuopJgjrPjJ8iCU3cFQHzgvZgETCwb2aYSRAZKuFW1fJiGWH4fkrtULW9zM",
  "key25": "3guk8To52KN3XktLmok6a7g1ugE96KJWUdFzJcoiPFyF2gqmAVuETYDMj9DDN8EPwCsKNRd2Q5adtDfTwAFJk4x6"
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
