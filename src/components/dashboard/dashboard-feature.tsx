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
    "3sYzu896ExXV2vBDoAtuQTrvLst9BcspKoPAh2bpktgmDrRzNmtBZveJSqWygnQq6kgpBRKhia8k2Dtwj1WzYYPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45aakndXNT4vTKPNWkUttRofvfAfwsRGXZEz7uMnimLrP8dBHCUKhw3RuMQ3eqbEdYNyp5wy5MT5fah9B6aTr4kD",
  "key1": "MU1rKHouYeKHopnuCFpqQtwtprDecVtigxN1hKKY1asLV4VQcNY6KePDX3vrS8pq4t8U1xuQf9aKDY9prgaCn2X",
  "key2": "2VVLRCs83XKGvTUwCW44S8P1nU3bUHLNnANmBtfyZxH4WQVi7KKdpxi3UNDDdQYAenUjp5tFos7xTzP2AK5gSZPK",
  "key3": "4w5oQLtSH1MN7AYmH7gA3EY1XmPYKsWf4HGTdYeRudaPocFyGvzixrBTc7T9sLJ8mTdtAkLGP1w8o7C7o8kwmZdy",
  "key4": "FWGvhSSsxnkgYGApQ9DRac2L5c4dfPxjCR6zZ9oCLXDzqVU4DApss7dqbDi5Hq5HG5EN5Nuha28JUMHb4otTGB2",
  "key5": "4Bd12qoEquiLuHh3i2uDBdQ8qpVnTAYyyMDpERUVd72FHnvQyPLr3Ubmm8mN8JUwBvLpc3TpVUFS47TU58McVPXY",
  "key6": "2GdRoEw6gchyrM8umKkqgHNFi1d9NzkBXuKhHx1gNxxrTyzqpHPVn8NGaZSMMNUWRRVuytmbBK7ohnbKjSkT3oZp",
  "key7": "49y5WzVjzmGZWoPgFshdtuHbBPXAvWGVYA8xyw7XTUe8AdEvcpeizuS6JouHa3akrdQ4W9ABd8FU1iMKQfLJRjAp",
  "key8": "2yeYo2MMcE82KSApGhM4HQb71hLdmwUtUvKhYbajSapkyJLE58gfCDtA6yLPdsBn32nZRZpopk7a1mCr172RLo6t",
  "key9": "2QS5tnviqJjgi2gdcxzZNfHtRwFmXcNogFfds7pwK3bFTHkyhnQcRZ2ZmLm5DRZXc2eFauxQf9ZVPWu7osBc1MUm",
  "key10": "28qJPEg8iGJobDrqenZPCtgDTa857wa9142XdyDNSKToBXXwbRhfK9EmwQV5cqaJmHpgtvm5RePh2uy9tqFn5mvu",
  "key11": "3EVSCxFVQLmQwYVdCdKnVS85LnSbbGDgEGVQAwQgyUfxjs1G3x3w46WGppNZHkNypycNtThSwBpr9JgvF6LCwLgn",
  "key12": "Tq13wRiM6BsUkWwLhR43KmNYuuUrcGhX1sRcehtKKP4pefNPKm8acvvxLkxVaVEcpc2D7vNffrKvf3MD8b4Kxtq",
  "key13": "2UgVKaerqVcZeCavY9HzutkDekoJJSPr2MpCjKMmpx5KQgpN8W34GysyYg7bw7AqdYxuzK9mx6w6LN9uhXbeFcuM",
  "key14": "3u3eMuFrQstbvw6UM16uycqUFBE8Mv1hScWNKV8GwtoaeLm94cTRep5r25q4hpYjmZsin9p8rBqpdmVUrLj1FHh5",
  "key15": "5No9KMjERUCU3iF5ChvgVXJ5DyE91BkmovDPS6rkUMk6AZy36trA3ABjbqB5PHx9UeQdxDg9bhEj2iVWSh8ZUqSm",
  "key16": "4mYxgCeYGyWv1GE6AP5LAVBGobpRHvoDHSnyGoxtXECa4DuiMu5mzGizWZgetWaFpbSqCYxaAMX21EWyKBCEtYQp",
  "key17": "3iv3wbLCbwHNxfjag1fZCST153KXpQjZqcJeR4Bzkd2XtNRENEewffvgT2hm9kS4kdsrL5BEVBqczV4GMUszXc5M",
  "key18": "bXMpq62cVXE3KK2nC6CFEG1r2VVWB9TA14owYXrnYs2jyTYJXQ8N9HM4ifDNyuYqLt9BM95La3E7gA5usVBu2sh",
  "key19": "4E2xQeMUwHwFRhgVXDxNm46XXGFBxihUNPXe9ZfKs9s1qhu7nxZ7KPNbN4V1i6BdV9xyQQQJ8t7wAMaw1fcUgEjD",
  "key20": "39pLjHkVzrPvW8p6VNwD7BfgFyH8yS2pqRJkeZgtxvzCB1gLARSHr8NXJAz3JF71ognU6rjWaEE8Fd15ZSquS4z4",
  "key21": "8XUP6wPpcB4wouq8eQkLauYjWPffEJajn73iHm7cVdEDdZzwiSUVyzKqngk8AmSgGHzrkxN3pE1tGDcaMZKT9Aq",
  "key22": "4C44qQuoaU1KTSPN6npv4jYy9VahZ4Cc8G4qeeWKr8U8yq7KhbXBK5qM8vGdXwUbevD5q33pztFgcp4Z6EyJzS8h",
  "key23": "3fFqEyHjufjvKh44ihYGo42nu4aEnTyxTeW6cd2HoCcnZKZTt2dnBXfGf45ZSLHG545QQMRB5rzsKmTfbrLFMMsY",
  "key24": "8FbJyugP6u8p7XCvYg9w9EwVCYjQezwr1es9rXwj2tmnA4hXY1ZYTxdh5xtwaYeokptXchEQ9G1FvDn26hhvwyx"
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
