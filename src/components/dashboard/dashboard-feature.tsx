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
    "2U2Q1wHkweNKNDJdFzc5kbbRRF6gJ8DfhHjiZZuLymvj1xwCc6ou2HjKjBvpuSWkWaGkg5rG5bNKi7xjGt8vtJYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgwvEHsjifwvH2vbgbfER8B7EQmsD1L2WGnNFuXDcCYkzN2imdjavYKvVUeWSKTVXSkmuYTdLtzeMfCJmiRRYNc",
  "key1": "5rawYm6aiqZcqRvQzSkUC1uRPpHbCt3uUbdXpV2HBdZHmTL5swnSx4FgBqMHxEQP9C1bLL6BZ5gtXvAL9urHsKsK",
  "key2": "5XoQnK1reF7QLWJq8nPUer5A7cuLe3vUMHt37cQXFQuGXKRiRkZiBhVEZVSvutHWne4v6ZkYuTBU1DRjVEhSGHbH",
  "key3": "2BKcvz7Qz29tvY36eCdFPEybRWPXKb8HLGoW4qK77YX5gXT4qKWCTaxCaoEPcp95KhjgFptF8q3t5xkuoTbb4RMf",
  "key4": "47uCDjK57QUxSBpFehbkPLp8N9HxBCUPRPFaWHLsAChtqsTr6c5pmBhR3EdedkuR8QgV7QiGbf4ayWNZSTbGvEHz",
  "key5": "29x6sVtKaReKu3pJ1Rc2v2jyGoDrvWBsTcPkukHpDQN3znsHdXFrUyD9rvN1C4WYyLATdhrEPuRa1RAabHXbjsg5",
  "key6": "5EmTvvEQ6dZRniG6SzABJw3YV3bFEye4pVcd6nHHFg3zTkd9dWxSjQA2cbEs9miYUknRj7yQHXMzhxEb52hzRy7Q",
  "key7": "2ByvHMVJ8ZVr3fqHBTm9hZcibKdWCULbxW6zLVUyicSxCAXZajY8QvbXnasVt68jUtywBtCVgYChVmYsZYnogvue",
  "key8": "5syCCqBfYuNEsT1ABqPNKeLoGxa19UKFYQ9VRUAUazEbJta2e8ZjyqUR2J6YatGwDoQjQiAhV2Hvvsrtms7KGjNz",
  "key9": "3Jk3gqrMQaiDCXDs7EsHmJdP5NUtQqgRxHH12u758g6eLt4zZDf3zcUHKMNbnwiJgq1EKRZT7pb9U9QJkeUPeLga",
  "key10": "5m7ewPpTXW3WqTnwLsDbWXgp3Zxyyq3EPTut1oE4aDATKJxZJ2p3uh8xMLzQK7QB7wiPAqonbZ5scgjMUeBtzwRY",
  "key11": "sJWhRCoJFtjFA6NUA9vQd15xxr5NxqNK2UcUxV7KUXLVWSAkQjtmzB44SSf1MwwxTtWFscbufhncAyCLMHog5xr",
  "key12": "3ixaW2imPLMWPXUakUpzrz8sw3PUsjrus3bSMSeXiG4nTouANXDDhAm3uLCuMxMkSuFx7zdiowoKsCqhjmTtv3CY",
  "key13": "2Cpd3XDkQzR4ggy2GG5qPpbRLev2DcMqjb4BBnXc7xEQsqpZ1pb5jZ1rLX7pcHRxVeAEDVLR5Tw4xJwynyTTpQSr",
  "key14": "45Mz6YdywA3MsJHuui5Jhtziy2K6Ei65nzHLqG9t7G8ocKu9RgYs6EnpkAqFNVwWUfQn1nomCNgmG943XAxbVY1q",
  "key15": "2zWvTdwYYk1h7xrnHcmR3nNyE1dHfeUceN7LKMtrtRxPKmPbMtzrV2xzMTj3SpCQmBQTGxCusg9eyEtpC7foTTTm",
  "key16": "n261fyvJvyQYrTo7xifYTUnJqWFCSe1RH63QpM86wMpqrcRtgv9UET3ybynLwrZ2yNB3BCWK9te5YRXsjoMpnCv",
  "key17": "3hR2xGh7HWx4zAGrZp5BCCzYGXr4KmfbLgbYN6XeGnNy3fqTMSVe8QmSuszTAgjZmnddLa7Ch6TLTcAJYX8nV2aq",
  "key18": "xcF7KXLUzTSYMX7gzxwWHecokYh9xBm13RD9v8984w6LNrkLaCaAz1MKMY1yN9HyFvsuuiB1X6YATAPPcBXYsxU",
  "key19": "4zhj2jqkULzdFq6BrWMnbzrEumT6HTo9oQS96dYvB4R487MkdiEXr5Si7pW83CGEG6jq7cHvzysXsVog4j2FuvkU",
  "key20": "2mFcXbShX496ZpZfgFp6srsTwSfvJRJbvkFJLzV1BBRBphCnzxvcU1dVtkVFrwrNTPMW2dmHQA8Ykz8huk5C2q6J",
  "key21": "3uwhPD2mPTGYtbURNecLNe12bGM9XaHgnKhULF9C2LCeQ5cJ9ykkbv9uinTcPB59ZFEPSTZyH4TkP3QdRBbQCWBX",
  "key22": "2VnXAF2r6oRAzkRMwopVhfrbmp2iP2jgb6hMyfHpWke6arFgpCNTNqsi4CQkiSPnMvwDRHJcXyjhfCS14sUJ4Nzi",
  "key23": "EouvRs1ijMUpvnrhihkjA7f1V4QGjSwEy7nhsUVqQQAspHdCsLhdH57gisMgPYS1Ujz27npU5hD68CCPUhLmimL",
  "key24": "3ussDp5whjAtWMmjqY4EvnWiqKCk58Y2z2qMzLGBGsvmp8ihqYwaASKAEXPQLqnxZk2X4LreTXscVpBMj6V6WRca"
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
