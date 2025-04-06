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
    "32sh6WfYCk4DyycawMqHpEdB6AkGfiCH72ki4bfyJRSqEoteSPd3CRjHaANrnvtbpV2BLNpGBtuKibV5WEcCsWPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URPWfb8Uy5qTBLJapxbGTj2XaJ23hBb8ZuwmnGgvfKFN5p4XNkXNpx8KRtqV7smPeK4vLLWWDnta2zqoQhppo2j",
  "key1": "2opJYqVL9PHsF8QekRhoHXVQkSq2TShPWSGBGusq712yCjBMVKKnJd8tVfbrYvobTqa1MQtw6R2wJX3CHwGZgAA1",
  "key2": "2cgvBGJ6fe7fHdNqwMB78gu2XT9EF8EQzuS6sDxjgTn9cGYRbXYJSUMD7x7R52KU42GFRMVyStPmBnwd8Vegwstg",
  "key3": "5sQpNbiXN8L3tuHeyRC75Y6Y6mRSTLDjYN9XFTUAYKPCJYij1vxD9sGTVxMCWDhY4RLjW3sDPRtLVBRMCFBJ6hqp",
  "key4": "3peuQ18PUk1U62HaQWWuTHVXz6iGizJwrYsHFuRfZy7t5xfyMTkio41JeNuXTTFdiR8kGq8JuYJ9z5Q9N7P6TQVf",
  "key5": "3wDxN2mSviDiUiULs1p3LDA4SrcA9oiXQdTCNd1R9LS8LUAqzpQXLXcxhZzVjuoZrQkYaUrVpH5ZC7CTB837vSaR",
  "key6": "PtShrk8dX1XA1McVL3o8NQgnVkxPLbGcueL7uBCPEVotaLv2zvKNf8AJyv5Tcj6gpj7NLuXGEzhu3Cmbcwaw8DZ",
  "key7": "4xv6D5MoYDGuJREM4wcjQiudGW97WPkwwVt1pVtV1yUChw1i8gP5T9LCSwAjunccbFpHCDZwgYyp7NK37g5KnzUY",
  "key8": "5tNDb5LFZKpZVvjxGdeUvXdKtkT69k8onqwnmyL8sfVPRmBvFJJNQvTPjDxpp6X1agGDMqGtDpxCf3nkCB8mw3RE",
  "key9": "2osbKazN8KdM27AeUEWAiGGFVGVfDiJ6jDo9YXabnzAcztXrPHYhS5oSV2Mx9Qs3yRPN2RatS43ynJuRZU99qe1A",
  "key10": "3ps2bWcXwS22HkXgXPbzHp3Kehm9VTGX2FueVRaLCUvBC7VCKpvntz8FvXGxvkdYQVPNuiJM8CxKzDoYcXmGbw2y",
  "key11": "5Roo7dRQ6Aoq1KaF79xADEps5dxPp6dFXyLREZmTUkhhAGLZLGJqPUBbPSVqiU3tdZgZFruXj5T1eZJtJLspStf4",
  "key12": "5tKPvnsWJk27vhxUdakAqbNGb6G7wZmj8n8DFtY9GwxgjfHfdzHkxjyjiSt8yBp2L81JuPiLs17wU269Ejbw2LPv",
  "key13": "2pp2fanT2x7JaayS8LQmrXijQ5b3WSUEJncEDfW8aMCLByJwoAXDfLk5kSjpL1Vj3y1rP5vXkP7Vxtz32R1Fhx32",
  "key14": "43ZbnWeLs2JX7awWuQxnFbtkCy5T3EcVYEeDRxJ1P5NrDgpoidsWsUde7f1Pq6yAJ6gQuUT7y9EA3bsZ11bxY8nu",
  "key15": "2yZ8nPXdcaUmGtNVfn2TV5twM43pfVRZKUXT4V9j142syi7xBsVVQugvfPYBL21pLC2ZmC4iRzh2Rzdjz56hbvQD",
  "key16": "5UH1t2sPZz3tUtHBpvnfWoYanePHC9R3PHLNd1aD3vDNwRoKn1UhHjsXsbRj18G5eKupgqYW5Y3C53DT2FWxk6bW",
  "key17": "LC2BXZqGXucr7s43ye9weX8crngQXhBCjAkfN9UYxPN97vuEJyj5mCqEBpeTTqpJFHLviCccejLc5DSSNdC31P2",
  "key18": "47eaeLfNf8n1DNbqLPr35ZqzmjRcxRoM4zv6Apxapq44xCDiRpzWX9QfrxPVu6ALWk9r86YtzMEj1EtZE1cVN47h",
  "key19": "3GKgi5EHwnaZehQWpQ1ogRbAgHBdhhGAS7CWsh3tcVqeiKcfKPDtdLe7MUywe3P3coZwedvCLTavQr4DQcRtPfmm",
  "key20": "4iu1Nv3dBNgkWS7mcF6FbEFnktuf6cW1YbJhT52LRdz4KnUNFRCoAEJvCSFKsKv3VBGPmcgKkdV3GMYNzPDPELuW",
  "key21": "3rRxWSnNxP7irfY2TVmCQXexeqeaXcRwQwzR8KcbjbhT8PJmtSvVuEE9q2R8u1CtiWWPG6G44Si2Kywwvk5T2Dza",
  "key22": "2QK433tPySvhXT353fj6gz1wjgV6HJp3GsLE58DLxaqmAKAT6HXFyTYjbPskDafzW7uVPt9bvhQKk7cWUHiw39Kg",
  "key23": "3iUXrtFqRcRXScfUductaYZhMFPPzkPTV2tLPVLRUax57Apw7AKJ2d1EGVAiNwQ7boCB4Nxu6Yd9iyJ289ucmSqv",
  "key24": "2Ff4DhRcBx1ZKMS9d4pBZCAGw5W1zDzMsKMUKHwHvz4a2bvYbryzyfdoUnsPwRsDrrhCeEP9juw9okoF2kfgNYc7",
  "key25": "3ndzXnAQXJVwpCWTWLAWhhVS7oUDuoGAyumAy8vhGJYDr2zLyvxeATokMqHDDZ8hX5MZ2Gq3i9oA7hJDCJ9Wr2N3",
  "key26": "4GF5bnKXYXzTPXsSD8u1nD1d2vgaF6ub2ctG8Mbrwtghy4g11FSEFX4pGR3tDKF6oaZGkRs5KPeiCDeZV3cfPTxm"
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
