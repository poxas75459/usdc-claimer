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
    "2ahaFuTk8fjuxqTxE68MuB1sLgbj8S4KaXyshwHZ6kvHvegtHD2V6kw7UUZKz4FJABY5dkww5pJd6SgQbVBR3Wdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDBDY7bnubJiWRWVbBRtVq8mLjGgqrjWomNWHATC42TJZsbVNWB9sgzh1EZWPw4o6nHaZn7NeWjLLV8Wd7vK3fB",
  "key1": "iRYf4GS6muh5TFCtrgLkMKBFQQ695qTL2GsZYN7e85cZLMsz8tA3SqQAALfjzLfLC47CCDgYAncJYTq47tN45Cw",
  "key2": "2T718CBsPMfvBEhk9i7N932q7ZVgTk7ra8KRshQJCqapLoMb9MkiUZfGt7tufTLRHiVCTvQSeefo64W6hT1eWKMa",
  "key3": "5fuv48i5N2cxaJxTEKLSRs3Bwib7nvkm5EYLPP6WhvjaaE83w8e8XqPUuXBQiban8Bm9rXG5UUhec9UYmkfoJ8nb",
  "key4": "29wFDtXRHtw7crTrNdenvCMKCyZQXeQWvFionkfW16brkxTTQfasn387qqeCsy87BZpWZhcRwq8BNv9Tm7rwPe32",
  "key5": "61gXxrwv89Vo9xpoJUWcyDAFKkAW43pqQRBQjcB2wzoHdDKuisMAMGhmxzkGH9wCeGzVKfxMs7Ekg4sats5xoZ9t",
  "key6": "jeXpvPhAz3d5JhoFLTX5x1gXnpt47tE8AfHBd6J95TcCGiifVCR2CxARmvGxWpzaPbk2kkvBpT9vsXJ2VikUA7f",
  "key7": "45Nm6QdsXCfupbxYcXnaXJCxiw2WXskz1uKwj4aLEChALKq8LuQETvQCL54iqLyK7S6ymuiDnE7dYbED1X61XTAE",
  "key8": "4Dkt2WJWv2h2M7Zcp65YFGsjQREQGqtqcLLkXSAqPxNZTvrRf8JrTFqLhMzUaCvz4neMiF79wVBCssLckokXJGND",
  "key9": "541yukNEHsh7Tmh75pYQAVzbfqpvd9qEwVkwjYJeRW1gvaWephochaC7qESA9bZXmqv6HvcgcbBpAeKTKhoXwr8k",
  "key10": "zqbTZfU7QPp93UGLVy5KN5LgiH5JeTFJTnprNtzP6drPpBFX3v96c8baN8pesHP5icarDhgTM5t6Q3sABFk9zMz",
  "key11": "2va16f7T4JKsKccdg4GW9BpRjS2a76QFKNH87vMrVV1tzRSimHjFdKBjP8kWtqGXwTJLfKt8HXYRaogHHAzFsbeJ",
  "key12": "3UFirc7LwXdFD2zmumKkfedSrWaT1ioKEVnhmxi8koVSh7WQPXLtx1f23KHoa2BTU49z8uhH5c22KxBoYu6XdY5n",
  "key13": "2dRr2iAPpsGrqTwRFQd7eg6NysvXdpBY749oVBgcN6jW3rQHwh64RJGCZRcjVnmgUsnoPJh67aBnQpzHoqB8SwFt",
  "key14": "65aqKNFDaZmmQZTEFUQdpwTNLmb8bzdgjDu7ofNDAyiykTRv5pwFRAuxMR9oT3SqqU4c1xS2FSgAkumt2Nxxg7se",
  "key15": "4G69VRv737rBprgeKaraxK1wvmtveKfvLxA9rJvPy7ASAdyxB98VojaFhwVcPwjtXNUHhdKaZ95kD6oUwmYrmMvp",
  "key16": "5FwXzhhtLem3gBYbo1GNCpBB8akbgSfjUADiP7ryqnaLyYGRPcrb5k7wYQ24qc2rfChhMBYD5tpPArmBBfTEvEET",
  "key17": "eNgaerioccSSRgA7b2Phxz8Q6MLPc6x3MygjRxRycMxhzaTbPJTYjBtsEKDuyWFssTRzFcMMnX8uu6XDjxyFGDH",
  "key18": "4JPTuZRnMTojNb7Pbtp1xigmVoNYzo6DNjeJKNL9Bdcmoz7BMLBhHQhXkDBCqikD3dXNpomTsR1wwhVNV3szoXkE",
  "key19": "3igxEgbizUnmdzaCUpbvhYfu9DBdfN7BUVST7hWe8XYB1R67FHVShqnPixbhkXVz4pAmc9HLYdBhZZrFvZDPrpY1",
  "key20": "jGnMyjBsatLdmGV7DTSotYXs6FCn9iiHpRfBch9o7xSEdJ5oPcmvWvPMnV151uyjG7jTK5Ch9yVc3Jg7HbX3vh8",
  "key21": "328kUMvt7rQc7yrG17fUVVo26UjLQ2U4sJpXn3sAvQZyvSJ5ntrvqkmzQRqHG3PPX6SNwSz7hxrke1ViCFUuYvcP",
  "key22": "emsfcLA4sE3sUsdhQjTNc15pMhU5FQF9JoypasfYY8CVEpRXY4ok7fD8CgUMJr5mGgMy3qvNz8VHGgjvZ8Bjbwt",
  "key23": "5ZYuMF4VPS5Qt5VNcUuu4YGwT6UazHFBZ2QZDKR1t2GtHAA7Tt2J3TRMfjAnHXMK3mAPSyf2buFgZXBuJj7mkre4",
  "key24": "2Xp5y5ohcoV8xJSKWEVkQhLtyK3iyqAz8uvYNipPbUz9BGCUpRZvfvrf1u13s9icWZxPKqLyoK49bQ5FgQrTXD4G",
  "key25": "58BFFatftRrs5wxZRbwsz7RwoVBG2FoSBeAA61PcStTRbbvbqjwo27vgiN79V9j5aZCKsHWn9aUL48CjXFBU79y5",
  "key26": "5JrtXtjX8jciynPwXbvtiqWAJiHsfVb4nairyGcBxrZQtue5yWhC6Cv5s92Ux1xd4QZzbeCAzXQ63qmVZ28sNthy",
  "key27": "3u49Si9XBMrw3KgwVU8R2bh7DfZbFM1ZHawpQH5QwAr3nE3wNadSfp4CrUZFDGpHaD4PV1E18appZjuy4aD27r4u",
  "key28": "PkvPsnzh25R5FHroJYXqRUrkdSVrGzT11ZD1bwXMZbgGBcHTukYK2hBztgJSa7hahMp2ktyFzffSZYUobxzuZRx",
  "key29": "3xvExx1Wqb5yUvvA59N3UKvMkc7Gt6zSKset8mWeynh1isF5ugErcs8fntjDqsmWT6rnkDJ3g2KBsiU9mgZToSeF",
  "key30": "42dWRp9mbZ5iioPuaRGsPJzEtY2oFKgUNym7qg6gQ9v6RQVuT25GUgCcDAxYKToe7G8fe2crXsWd8apnHNUtb4BF"
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
