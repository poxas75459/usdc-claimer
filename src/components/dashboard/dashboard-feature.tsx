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
    "3KhPFAc31su2jKRXssJKZawQ65hgbhtuxQX4mAaX6atr55HcfRVGyz9tnkgXefUuCwJffyCtUd5GwL6Mfg6EqX4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45QJC8Daueo2HUwZYQz5tKT25zxztx9o6XSZgUxwM9tKKbbeWmSd7J4z9LvLYQLhZyAwWDqHvLFZ63kUYdbUwHX1",
  "key1": "72yt1cDAfKDSGAWX8v2191o7k5DcK2jHrXY1hdwHj1KzaAkwFH5xUxMbmWDj6JEX9RRcY3sW9TPXRSPmnvT5iF3",
  "key2": "4UK5wRR1TsTudpEbACJUs8sXHkZ6itYPcMzgcAnENWmTJcgiTg77hRoJGk5R1dac54EvcP3WD7v6sj3GbvNuWJnL",
  "key3": "5SwjBGdDiZHWg6L7rPUwRydGYQyKErLMUunATWMsxqfrsNaCTz68xhi9rnGM87L651LhUq1SZzbda5RHxpPMhjJc",
  "key4": "X5TXjJFu3p2axonZo6zTYdpJpyrXMDdy4MytLpqQe2tFrJkp8Nym8Bqmyrm3RpvJcJCCsa2xhbvHbqmd1dw4KpW",
  "key5": "51MMbNRrgvEDGFvBMwhJhtq1dUrK7DSvTR5RHEhb8R3MMMxWkALuARW3WmeKV1zY6rcqG85S9s4yFafyMbF7J6yE",
  "key6": "29cjuX7tHeRzsjRDxgM5LyVSAoQPchRE2xhKGsWmdtj5NuT6QwbVrH8eeuDxNyjjAK2sazHoxvywq2rmkvREeZ1A",
  "key7": "4racw9inG6iJJWNJYXmycsBH6xVhDqtP7zqhV8tbhaCsZV9n84U35cwtrD5kqy2fMTC6uY1fCi8eWKhJz6Mi4fkL",
  "key8": "2PFByixK1LpFFQCh67brV6uUPZ2vCdpLN86avSK2ofynAQ2qTo2ckB84u4SPR93vm1nq4T2TwuFbmqqHj4rBTpz3",
  "key9": "4F5yTjJm1vt9yF2z9gQduJtyCrq8RM3XSVfVQBmzZq5tV31YSUZBcAGeYLicMLGuvoipvTqcWx9MxAxMA8HVNTkV",
  "key10": "4ambo6GaEdMCKWuJgMqnyNJEmpiEkQsz1kd9SrmEwANijERd4VrYWKJuqPSi2jQtNMMhmBjnVUYbc41Fb5tHCsxG",
  "key11": "2i5C3ZmcFc26dmyP6G1FzkQFecUnoRYLksQbzK8CdJXJhyApwvTZ7h8FRfZF9Do21M51CDnt5eR4S4nPXHpq4njy",
  "key12": "EWDZmKmG7waYUoX3zdk3vAC1cqnxANnCLUMnB2VgLvH4aavbs7WzxhWoaLYHFD1SFNWSWFD9WcaVuYXoevfh58o",
  "key13": "2zTwnyny7H1DQSE3vtivpFWeqPm3howdLqQHqZEnRP8J81kmMNfzaMNosFRrYZ15XpiLaYCGNYDkh7SC6CCGvZhC",
  "key14": "5rxiXYNis7ZDosAmyrF4x9ojw5k9T7prVgL9CreCg3ViPTUy6A9pTyNy7xsuCmLcsx1zusQks3UzCTaXhQmKfeMi",
  "key15": "5ULCxoyd7wi6rG3Uj7oGvAuRxgruRouTw4fGBRHyEjK5uQWBkWFrrfY7etiU9ULg8wTE13GfxyZAonZ8Ha6axEcE",
  "key16": "47oKfB2uuh19hWy6K8zvfKSSQ8BgF1LFqXL9cdnMaUGRUWsbYKCdCx3U75EqY1UeqLAXy9bfDTZwWUbAcK9F4nT6",
  "key17": "3TTTe8fzGZhApihE71RrbDp13xYvTPYytos22oaaHsiBcz1U6QfcBq7GWAWWUNijc8MUp73zF9ioLoSGYinbaDFR",
  "key18": "4RsywiX34xpUM2sABmYjp9p23WXPKRUYyj9UtYd8SDwZLpoEbbPmduFUVCtxEfD2LHUmBjJ3KkH9e3rrtkFFpZ5K",
  "key19": "25mW4BsoktvUqLbU4Bvy35F9yRRtHPPBqqzC9y5jZekA7eXoEvUAPpncuJmB4sYgTdftphtKZBgdVJ2JvMAY5GKf",
  "key20": "QFmFAHdUnNbxyTjNcAj5GxTYMTkny2VRWbW1FBhADFTFcgoXNUfNSiLEGzwmVuCjajQjfrHUAPQ8bqsUvNnbWdB",
  "key21": "5fpRKe6PjxYnEShrbCvReDzotHE7DDeSHXofLiwqF6gCwndZUyAwh8HLYu1o38nTCxj1pemxkFLXD8tPpiLT7Y3X",
  "key22": "MDVfqEviDAq5j2rDJMCyPF6HJHrzbvua4vREousrVgbRrWf598JJb67C1YTP5WmgM3sCdP1kiwK3BkdZJRcyHW4",
  "key23": "PfeEnKoL6XYFT5sZxLxESzfTrvZ1J9br4Y4Sq64cexWwKwbFXKbuSxRFcp1gjPKfPpRkoFC4VNrvMNbX8gJeH74",
  "key24": "4eqSrwU3vndWBW1FrtayUj2Y7e793AhNUd6izoCA14e7ga8u4mTgCFGRV8VecSSxrGDLYBDPboSZaBgpdcHTnxFz",
  "key25": "2Hk7XiPtVpnLer96fR3c8C8ZCPe6n1dSatXiAwWTQUdNb3g2yuXXNupRod7Qgvtt9d6BseT5yzAxbgMvgJwPLy5E",
  "key26": "ge9XWTJcB7Vn6PDw1p7m3kQjxJVzMkNpmaQ5jRLv4pLmasFoXawRhVwoZaxeMPUARKG9kd3QnSjy33awUeVVAid",
  "key27": "2fszENXAoGrEeGAHxHq9FDyr8bpRsE2YGeCvQQewbvBfBZFjLGyo2HA6fBSxbPx4AiTsFDUFgWdS4fhz8coCcenv",
  "key28": "57pQzxpZWgd3Wafdpgv3zgjj3jYuTou4PTkxmS1SpL1bkqzqRECMLpN5BzWtKq86Lx8QD5Yq1RpM1EjWr1hrT2S4",
  "key29": "3MCJqvojrSrKfN93xrgeEVydwSj6qYkL5dwnSgyczh2eVVGFzostKY9BLkMTL4ijwcwNUDxHfeT1dRzGtBxaJRLs",
  "key30": "4yCjNnau2PJNuXqNBtd1oqjzy4LJpgMfiN6SR2DHAJzabEHZTUMTYoQXGHpF8mrecERNeAk2T7aFHiQt7S88gBJG",
  "key31": "NHcL4fam24v7tsSgoxCNFnGEJkyoefafx9sF5FbcPtSi3Yo27aeMjMdNYmZ3BDmfZmpyb1v9VbTmXZoKajWL54n",
  "key32": "4pfCS8nPWd3Pu8FYjLQ3kjvBGwss19CpciWsZJ1R5viUjcfzcdWrF2CCkypNCW4jAtmcgXxAYtKykRcdqEKJL7j6",
  "key33": "2sFH1BTU3xBcHmYurQuVEoX3j3A73BFdFrQqy3YdbmQV4eWJ79KX4qFbH8zxuVEEDUrXRJBQckPNrnwJvWszNbSX",
  "key34": "5Y5xtSyCb2brhwceJx9bD7EzSLs7g2P5xWZDFe2WF76en3GJSCE61ZkDsnRBhgh5YG7NLrccyRP3Cy4Yo7wZayfu",
  "key35": "3pKf721h48iropaK8i9TfhZUUjjaLRq9B2PbDZz7NNdXgCvryhH2KyGnzZPamopJH9XsSYsmYBvgKGB3qpkoEwF4",
  "key36": "33U57PS9dDSVjFB5dnKA36CvR6oURT2YG3LX6j74My4QLhbbD6avzk7umVM6c8SMPFQQrmrXCtcj5MRLU1PmxtZa",
  "key37": "2qRkiGcALcTkoeZxZ5PLC1RxDGYE3GPoerZey1cdiN1CZtmFDwCTRRuWU1uhYCHf9V6xap6RkbseTJcXsxjxodFn",
  "key38": "62DtAGEesuwHNmcDCqgUBrAFSwaPG52JYBnymAVi5jhUK1E3s37dApxiYWnyy1TjQ2YE3U8gb38ZqQcoaiqsm31t",
  "key39": "21WsDXTdCGu8tzwsrXodHhoDaTqJtx5GubseBaM1NaXvncUYj8mthQvaXQWq54pwgQRPC9fVKrpK4Ho6DWHKfajJ",
  "key40": "3R45gWCowzmPJccfciKxULDCZD1DSvjnrfZmJaM2X8AaWcwakavMLtWfV3WS3Hb6bhCARSvYi49UjsMKChjKDqPy",
  "key41": "2bhnHQsuQmRpiUSeBxCzWnPgjoKp9NQmtPAKs29tktpCzD2qJnfSbnrM3EK3NeyFrojtSXD1rAbHFCoegMe2hg9U",
  "key42": "MC3a3jGSLC93dVBVxyEctDYNtfyE5xuowsJigxXHAdsWi8qemsYFcBqKM4Dg5e1vRk3iQQ6fXDLLuDcr9ShpV8v"
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
