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
    "4Tsvb4pFwtT6GmQnAZqZDHRdJ2Tsu4vE5uBDAueaUWv7hpT7TvgMKhGZFEBRic3Thwbgf7B5tyYp3Z4it4ctFJW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bi4Wa51kp12mJR15wsbYkx8u3o2vsGYbPhUy4z5mcyCWWDZoZqa3NTv8Z4i1rXfSenY4LwDeZizGhqws2KR24Df",
  "key1": "4F2ZUXTzhaLyGZGSjUR92qL5R39qXjLmmo1d9VqsMhkHagVnvJUXCTaCV3JFzZ5tZFDbtoWu2tj8tM2fgxnuedrB",
  "key2": "3J6teu7z9aDRDPjwK2d1gaR726VuxvkhCAqRgUJgvWU7cYBeQ8BhDef3E4cUDH6jtjGHUXFF6Ab9cUma2Avjuoba",
  "key3": "5WqsyJG59YD3fDaFC9hy6d1YoY8XpT8faKZ2fUsFq2X1GGYN2PBNXUrorLqmNa6Tio1WsBwf3nGAZsXAvhh9tCTM",
  "key4": "46QMme1zHqUDf98qfpMxykdcX1VAVsZv9bxMPBmRQ6jagJovhpUEdeKsFvFJEQZ5DrsMBXcrZGQNQdxkSM5b8GBh",
  "key5": "4MX9jpM7wgmoBLEiF7EiY2MXg3bevPztVWCPqS7WC3izn1sTcdfRVxrfHxn2mgWozRikkh7mZNYXjFf9aUVxBmo8",
  "key6": "3Jec2sJod8FDjr841czjVUGUW7Gpvq2HXvG8kJ9G5BBBQQCtUXMZ5wwWvxP1jDbeb6JSUbsy9MoavoajXjmmUVtb",
  "key7": "2YoKGigwtjavA3xe7aTX1d1jweM5U2h9nKiJeGEPGeUzKeQv39fnS8vs8RKKdCvMWQZhUZbwDV1UqWxaHUvJx484",
  "key8": "4zfxXUHJRp812ZL2vmkrAri8BWMYxiE4cicDG2qHDGbnd9QYSq2EPcFeAX5biNeYwe6ZaU3u2kQeJmrxfaosyoJ5",
  "key9": "4ZC3E17ySJ13n3PVY6wMLhP9YKz3Vpa2UrxXPKc2euPoLNCtvwQKuxqSbSo4WU6tE67qyQErJaMmUBodWH7ssVPt",
  "key10": "PXuNc99N6YRducY5u4NBcDm6Cmbd9TLkFju7tV2kHQXGL4iF1iJ9CePXrhgf2F2Vz5nG81RJ7T7Am5rMq16Ey9Q",
  "key11": "2ZmTCwBqjLT4Bnm1zXkqiEPtKJz57iB83TFwkArQLRj4XVqBLid5cF1hf4orFhykJKjRjoiRtUSQyx1oEm8vt1EH",
  "key12": "4p44etY1BAExcp8XwYQ4ZJKG993qNC2y4BvLYYPP6XQBB239KSt9a9bVXdxVytK5Nw6oPSQ276VQSyhFb6wb2aqy",
  "key13": "4WB4vmytuusr16ixDUZDFQHrRGmnR2aB3rmmJ1QiHbiKD6oyBaGW6S63iMUhdXmosehF5yqiv2MvkeMbJqJFY4wU",
  "key14": "2sH7RNF1dbjGk7wtETNzQ3QPxDWHgkW9kgPwG4Q91TujhFihy7TzrM5YeF1CPwJZbPw4vNFztwnJbR5wuRAEgnn4",
  "key15": "2LdLfw8ofJa9Lk5QRPoXhyoFbCTSzLCQvuYVV5MkVDRuiRrYKqeqhCJodAfGR4mEgEnEtRVPQCf3W2mizX5qkApe",
  "key16": "3uUKdX3PCmpaX6fkj8fHnJCBP2sgQpjLSPYPCyycaAFWtAtqvX21YA5d6w3NG2hys18pTi7tLjQS6RNLwfaQsYbq",
  "key17": "5WYYFo4D3TKSdWFAoMRZs3x2iz13LZTgScp9LfPgAqXHPZyDnKnjP71tWUiC6LDwfxLwBr7edcPPv1gguWngikQh",
  "key18": "bcbhPdvb2x6BjEm7njt8MkZUkmrXp5Jk8fe4Nz9asmHAunc5ofPrwPsZGbBdC2BLgctZPPGN8X9Xzb5T2zfqysR",
  "key19": "r35uQhDUBHeEydTt52R7ucB3GZfBBDbAoFPLkLCCUNXCrb8zn4HB62Xx6HSMw9HpfiUoDwoNwzQKrNvUnvgueRP",
  "key20": "5m9LNPigb5n33oPGbvAYRLpsMDWC4EsdPZCpqa26Waw8imLEGx8qUSNxW8xy8jXg9ReQetxtuvMnU8iW1Ci3N9Nv",
  "key21": "21s72HVfVEDKyHjVWTAou4ToxEToi1kSzvFY2XEvLyyYNzjGa6Y9vifVstDsX8gJL62bTtoMLvnBH2ALLU689fUU",
  "key22": "5zFgVY9WNsLCrodSbbCUF6J3SjScKx6m4Ex3aJ6pmfSCwJrxYx2rMo4x7p9Bv7BCsNi7VgL1r9TUy7WYiN8Btuu4",
  "key23": "2j3zRz7YdaS3oMrZZEGqqmgkw9x1fyECYgpxMvmTBB5dGBeqAQz8CBwbAuQU9aFFJhqVxrF5op1v2Jr1RmJn5Br",
  "key24": "3SdTS4thbeD5jW9sN1jEYmxZ6KLJMKyWGn5mmUnTiGDUx8cmnj2mkFc1m3wD2qqvhT6s8cpepjagntCVRJUoWdUK",
  "key25": "qbhjaCVQgioN1xjeB3zQfGPWDH8rcwUBGd9JGVGHdHEGDEKgTnZToCczkD69YVZEyHWZ8pz26RLgfsyMwemth5j",
  "key26": "4WiSQ1TyYd7tgcs2WDLVXmypZ46eVZ2WJjPej8qH5Qq8Sbu9Sa2zTqjQuA1uikUz5VxPN2P1DrBYDU9a2LeXMn35",
  "key27": "53wFEHjhAaizJ5z3T6dAKPJn6cUkrE9ybroLetdfjT5yJzYmk19vbKGGjDagNDDwHiVuxcs5JVDmHHrugbjJM3UK",
  "key28": "5AN3ABSY9zRJU5NdYVrFBnmDKJFmzTCYtS3VAZdYVBDnwVBBD5F4bDrbfSNAVUsGQLzGtsdcMDw3hJWif1MrJUhe"
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
