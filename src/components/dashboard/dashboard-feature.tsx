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
    "3qpg7Nn9PVqJT9yezZxvB8wSRCCxigczm5fvUignsYytBEBNNLhg2ERbx3s3CYEJa8LMdnitn3KmLcBgRckBFSbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sWHzUtJZCVASeF3du4ejDsS65saHka1drT6qbNFQwhH7kdVCx7KK5hnJ2JNx8995DKYySbu6BRV7fd8QmoDpQK",
  "key1": "4QYqKx7gY4iaXsHn8bPbqZ4etC4R66mdb3q92NJFbvD81xJkbdHpQnWKXLJ31nXFMRs4B5irH8mcKxbzGER5qvqc",
  "key2": "2Ek8y8SHKqEMXkFke6REQYrnRTtmDwtpJk3u7HQdRvQvfKVciXcZw5TSEfmMx2JpYBVM4SVnjgovHH5o9fcsMLnf",
  "key3": "51niAGrHE82BhCddUWPtRJQm4JcxATadnyCm3ut182D615dYKxVk5fYB6aoG8RAm4HJxfYRx3MavWhbR6VDfFCof",
  "key4": "25SbFJcCA7zbxkLXXH5u5ADkgrxzQ3mEtcggEH6Z49YEmNtvTg7xiM8R7ARq625Y8DmNnEKexRdmVfHprEjbbmSp",
  "key5": "29QKr4cbt7FKNiVcHa1g8EB4yXMjMAUKMzhLjpDhX1PPnmgczjDiro5SLLshoUHQkHvEBjwBg2UFDChi3zSnkp9C",
  "key6": "CZqcY1uKmaAyqhwtuaqNT9qhYZD9K8C2SmoRnUZ2yC1FmJMNaMZsSnpkwrDNZAv8SDB8cJrt8X8EyY1PRT793ua",
  "key7": "4YU5PVhuhoSibaUivSgVqUmk1wiZMqe72JdY5X6NpDN8vogAdnvvo1dGtRReEV3Am41aJSW4bpARiBxZCkiWyhxV",
  "key8": "2dXQq1uiWy2bodf23amspbfo8znLzMccdRbJ2nGBGPznbutt3dH4MyjYUEZL6w6p3798jaQGL6YVf3s5qh4Rhtt6",
  "key9": "29mu4cdXKgM7MNmUop8rvGjojfBqfF1iHEeZpbwPcYi7BRekJZp4uMChBUr4h6wvxGw2APq6CDfTy6jouptzyro2",
  "key10": "4ZJkq4QhEjn9K6Ejd4gcAUdsYJabCryr8tSwo336n3szRyCqtD1pXVWZ38hqVeV988avQ8VeV6UVgqAEpxnQVkfi",
  "key11": "2j6uQXbmM9EbbKAzLc3Hu4ZzjSM24DRv336dDsFLDVig76GZKX5NaknFM5HriWa4NUWjEoA4FUeAGzq7smMWz5Sn",
  "key12": "HM6RtJfix52vMd4PyGWVbFrUurrj9oHiGzwyF93xmRCKmJLxaKphbEvKmvL7fj6o5tLSA4YuWHupku2W6E3x5s1",
  "key13": "5bVXxK6P3Kfkb1pzyF2gM9fn1iKb9dfLfwdG58gCdqwHoqvhw35LxpXq7HTWtqiSxKMNvJseGQnCDWUVhKJswDKv",
  "key14": "9QkSAYqTmzrKf76rRJ9CdPi4PaqaLxBa2MngWX4ViXpXb6gehczQ2DRgjWo5xUsGWMHNMXapyu3fv7XH5qs3f1L",
  "key15": "UsDBSGpKavpz78tZ2XVT2dSvBvCjhQ3JSmv3iwhVMTwEbYQbUYyzvxdRwiAvZ83DMe41BfW2zPzCBwQGTd8eZdz",
  "key16": "3MfCCXehDvo3S6knpmQMMur3E4RSCQdJ5ZXpvBf2dEu4dc5iECcLvy4uKaugiTg4bYrWFo6Df1382igywtcJHT2h",
  "key17": "3SBwJsnXCYHchwSaTuQ4YC8kiudX6NefnSYZECPuHSvXYLuiayodtm78WJsGtEVYPea2L8rQTbrnZ6AvXhyGNHPX",
  "key18": "rLmAfWwofTj9TNRj7nTV3bJyenEwu53QuYCGKUHhqwdXENCormC8Y7oEVkqbx8kJti3MFEmG9BhU2uYnp1aqbjz",
  "key19": "5Wt8gR1iQkLxAjKV98NE2yNhpVxnN4moJuUooD3oDEEzneURodWtTpxAEUVZqZ9jf7pMNZUYWjKZfdX3Cwb84KrZ",
  "key20": "2TVNzifMzxs3gT3oTCnLSbnbA1C1xZ8QtgrhLgWmY9Lb3Sy2XnidaL6Vr1nKfjsZAkqo5ot5vQ9VGkoKycBGYi33",
  "key21": "4kyY5NCAWgA7basiZQtkV1v7LoBKtFNKSjc1gvwPFxypin5JR2f5q61gLjbjBkffj8h8HQzdDYn7K5SqCjrgZpFF",
  "key22": "PbVHJghu2FJELydadjyaeu5tfk8cUWNMJW6mpESMNU3CfjrZ5tSt14Lh8oshcqrivJG2J1Zf2woDFB2FrxoTec9",
  "key23": "5yeGKZAPJ8LMDcjysphjLJTfiq3X9XvHnkDkiA7EARqGrA2pF84D4QdXeLEE2VN1d74Wvr2RVupEJQPoKQwSKS95",
  "key24": "3xU4RHxPS4TJx4fQ2fSTpfKBczPsscGzQda7jN4qKiiTrKfudScsQNSJL68qZJvsNDEtmiDbBvyMiq8BUS2uRkxp",
  "key25": "5xCNWccVM33kBd2CwMLkAuSPWao6JGLgvEmkZQZoMXm9n2gz9nZooPMNmXQB6u64JZeq1rjyKXxoMRxeNoLQ4rPW"
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
