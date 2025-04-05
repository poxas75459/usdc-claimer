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
    "cd3ufonyQ4j5L9gRnbM8BJgeVrc5Z4PJK7agHK5cxWogLPeLp5gijR1X2fJtju9UxnSqiWHzXW7TuMFLFbR3aqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYNkhjASZv4xUUXMxwcMKKoEuk8baAuQvCGRNiGUppni4hBcAu1qGGqds3N4da5B5WY8hccXqpngtDi1j3oQqJD",
  "key1": "2pSJeYAboTGQe4kEZYQxH7XNLmKngXxeDsxyQNxNUxN4kgTi9X2YgDeLYDXpCBcDofMZ5EkX6K1rcbkyCRuEGcbu",
  "key2": "5r9h6jdybZcvviLGc47QxKFhwqRcK4v2ES6tb1ht6KxUxnitCacwCgwu3RCaD4hFpDbcFCajFtqyMAugnMeB9JAG",
  "key3": "2SJL1thAMo3su3RTxnxt3hAycfCjKsivpb88rbte1o7U34uiZsS3gg7dkKJoWBUDqr9qJtkFCZQh1kFdLHMBFzv5",
  "key4": "Ej4suVRvoCBeez4zfiYimKgPHZf4JwYuxGDcrD4fvGWFsDU79Cs2JQch5nXPK4bknHbqMJxvqqmrekQ82iZFHWD",
  "key5": "2hTUujTaBsgKrnBajV2mbxzf3Kq8oesvxUVcUWBqXYAFDeHtfkG68BpLBrC8Brtuaeuaotph719tikt7BCMQbu5W",
  "key6": "2D9mH7HEQLuJ1k46q9tF41XJ3Kw4noTouyEi8hEgEaXdbMG5mdN6KETfvu6yHY53KFXA5dHfkRw5qi4SDokkzQTF",
  "key7": "2GzqkFog97heG6b2jZPL7wjJJ7JY7ysaJRJxmna9797mAQ5R3xneByKCp7B6rFh84T1AAxvjaU3j64GTp6JG28qd",
  "key8": "5YjJRrXhzsfKDt5VKksqBKs3bYb97dip6p9pVLBs3LdAPg5cc9m7EqfvgqPeYmbcWwuFYxJTu4niWegrBAiV9p49",
  "key9": "5vuCYPMv8Ujf1iVzvTuf7JjVi3uaYymftXQD9qTHPaWKYopXnXst5HqMoXHPDtNE5tnzA7RcDCU4L8oUFLnu17xB",
  "key10": "4k8viL1BjGBxawacMnSTSqiRqGja6xCGML8eR3WCt9MFLtzKnzhSt3SHo2pNBVdyyQe3fnoLcto9WFob2ZjqfNy",
  "key11": "3fCmGwuESgg12H8gqPeChzdC35xTUJarrsjSZsqxPqJSiEjEHJ6KE5RM4ic7F924TNfpeTCJTfzqRbWobCCYeYwD",
  "key12": "5WjTWMqYf19QE2b782Z5WJeCAmEs6bJd1bX56K2gkmNgvdpytN9XjVrxZzp285urhCswCVx37zi6QToNF5BeiTBQ",
  "key13": "3qNUx9tVsQ7okD9QvVvpU27of5hGsM2SjbJKX2qeDRYZsR2wEuSbAdujdnWXHQDrrMEHkNRuK2biRk2WsSgUX5yo",
  "key14": "2ySD5qqL3wNsGhTy73jiZ2PhdhQnbUHiDyFa4cEmEjVgHDRtyjfXteT2E542kHDJS7bceksHfcWprMFV5iPXqNdA",
  "key15": "5beQpZCYfgQRctopLbNmHSzFiKjoHhaLLUGgB7AU3RUJwngL8P5BWX4S1mdKPRJrqJzEfHpE91NVDFySSBzJaoRh",
  "key16": "5MCNYfNSXhyfKA4Z4VB5TZeSLHjtytcXz5vCknoZ9VwUvoxuXJbNn11C8LpuP74HhYjoaomhPEVHkHrLo9GSX7Qx",
  "key17": "Wz8TfnUCq6F3xZgAMM9Yq3E2e6Y9UMrLhgQqAHFVLiYRefkzFQBJ9zKsbTVYn26XQXvswR8pyRTDw2ChXFxidC4",
  "key18": "2zcZDN2dbC8biFGqTeRpvW5Dp3vshJq55cDC4VvycULAVmeYDVCwfwfZUQeWgY2WMXrkKJRgGSuGVRikavEvzuBc",
  "key19": "4U9ro2ShmqMGW61XavgnsW6hRTPDxRjYDhxKut56pbZQZtZDH1UZfv2ujif7y6Dcb1RycTpmURzGRfovSenRBvhi",
  "key20": "3TjQyDizJhkTfEBhnrubAUTcyDLaK5CrMVfNTjKRtgRiUba8tqXq4TJHViBL8xfXjJku6TYYaZ9snTvEg5MFcxBf",
  "key21": "5fKjbYt2g9uUVbVNJBqrPUb3rSm1SLqWj5smr7SqSvrCHzMwCiKGVxoPMR8k4ieq5WJ2vQyBpzNKiR6evzrWLZWP",
  "key22": "3izVfM8djJwRSvHRF8AmBkJcxLyRbNkfgF9WtsbKULZZ2CXD5fVFU8RCar5tHDuSCFJst8fugmuapnPgHtLAUUNt",
  "key23": "49UjmapktmWJsVKkxFuF6gYKaVxBaL8qt6mwMRxeCJenejiPc6QTtffA5c5K1Syp4qSM2SEDw8BQAd1EYs5o969F",
  "key24": "5Z36TTukQ7TgdQTTYvjpAPs4nJen9PZ7b8fKUihEd1JAWtHgLd2eacLLKNUH4YEeyg91PmBA2zfyYzzv8TZzEbTU",
  "key25": "4AXRweCBfFrjaUbacwB6BU9oaNheVX4khcnj6iB4UVaq6Q4VyKEYUsFJQRi1fE77U7UiFBSPs76yivj7S9CcMP62"
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
