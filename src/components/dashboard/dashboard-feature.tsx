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
    "4GdPkcS3X9e1ypgttRUsgGMdG5xpMHYcwE1Zk9XS6CbD8BNr2sKKbhpL5653zjf9hnK7zCfWGthNYDcPKmDU9Wt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSCpt65wB6A8Z9ALFYz4jazzU9LMX6mexNneq6hLfap8ksVpGK13KkCLF2hsHtsVjopJxh1srYi7Xbs1nDPm5gW",
  "key1": "LYeHxJoqtx5Sj2ZdtjuAeWzFB6BjT3HxfgT5PjSozYGZAVzN277tNKcQofEFTZ9FRtHJ7dq2HHbSpQzm2SGTyCJ",
  "key2": "2EozX2cJnKxXqeYbhUUFRoG9UG58E3fsWn2wDNZsGAhL2BX84TFU9J8m3fMVfZ2byGtJsB2CKAyVzauP4jYbhva9",
  "key3": "21V2xHM3oPLEKayh8EMQGN7pb49R4XszheynGqxeYTuYx8YpXmYg6wdXjBnMYHkH9Q3nRMQTK8A92uwAbdsVTJEw",
  "key4": "2cvdAekGA9D8ANm637MFVkz8uxzn758sP8rFNwwnT8Ka2DL8wamWd8xQDoKfQmxvLZi3NJv5XWtwNYLt3gsuGhRY",
  "key5": "3Uf9UdzMrneFNq5jcbsBTtsjTn1fRnE2bAZwbJUJWZ1RCJU4jUboTpjmQn7Bbadsuu2yLYbhnt9xyjVHMxkEXFHQ",
  "key6": "BsGsDW1rqstXdBLWCEAwLHYoNHhMrj1aJMwPmjvMeTtoENtNBEGqYDgqX2MmdLPp5nxAotjDzYp4rnZRQxAXsKx",
  "key7": "XvbL31pB2RNq9poaWYUc8Fq5wv7nPhF5hAH9iFUch7Ef7TKSc11nEpv2u8UV4eEgNEVBULEhxwkrbUpuBSR5jut",
  "key8": "24DUeuMbZQ81j7n9F7ZMA1Ca8N6vP9QwxhfF8jYjAktKG8q7sJb1HAMbP1hhB85FzPdheeLMMLPoGJmVf55NVo3m",
  "key9": "weFHGeEka36vrfCefyBdJw8W57fh6uW6PSSeJRoquujpgBJNXpoMnczxWWtfR3VVvcL55CS9bGAz3zwVX5u3nWk",
  "key10": "5AwGUkyMU1NkVsNz1zBUg54VwqgFejFUm6iUtuPBKUx9f5MBvTo6wr8mLMqURzrPtLiPAhkhwSKPS5yqyQYEnPuC",
  "key11": "ZbAYpD9qUvdreKSSYiMCKTsw9onnwjwCQhmuVsHaesQbfiqaBvGcfitYnvQGDn8Fsv3RPv19tozqhxR5aodC8An",
  "key12": "23kyLLTGuCbq2H84F7mCRpx7nj3suNHXWaaUnfCTX4BvHuBXff626ffZdvZMKmhnm1V1nma8ni7apuCANyb8Yb4P",
  "key13": "2Zqdp1aYQegKN1wERoSutYKWwmwJMUBe31vQZEVsiyVL1HzRykSAhA4iWJ3pAHSd29DuUf7M78iwFRXptGTStmz1",
  "key14": "4h4AKN6jJznrLmSMH4xmRyfWsUNZMsH9VradHs1vbMonZLGzqNN1uQYtvRrpbEZAmaz7h4LNn4AkxTabeDQDJLf8",
  "key15": "4A7CpNDBWQVyjSBY4Mei4fWPBBUNJEZUZ96BiakPQjycbx1yQ21Y1tUnQNMiE2qVCgNXACwqUsabGMhRZCYi5avB",
  "key16": "5nL6wyabSm35TAw1VVfWH2wsNWBtgPAgy9NzjhUsuJ1FjRJiUFu7J2N67gn8LUnKT3j3dHD1A6UCzhqAFHrS8Ve4",
  "key17": "4ekFGagVVBqoQQiEYRSSdz9LkDXeSnVx49MCaZ4jEjqBBWyg9XjkF1g4occ1jB1TnZRrds3urGziahatvVgFV7XV",
  "key18": "3iqunMmGGMWiMdp8XHqrjFRJfCYVnWAHPaYrzyAocZAKds3dCxtpQxanTmfeAC1JGyS2Rb1NWZKDindK7SLqeHod",
  "key19": "4jMZ65ekrbfSLZLC2Sy2aVhejhsELsBYKfa8MTbXLXXb3nz8U6sPkCSQRs8TTzs3KMnsbm7yP6R3z4HDJaRLzqTF",
  "key20": "M9QmXLVA8BXehsujFbCeJvQ5bT8eaDazAtpEc1RCuSjhs15qRjtUNNS2hr98UHUKHoLvxzkBqnymmk9hZSupNfN",
  "key21": "3N6Z8WkkDBEUEHvf9SsMazN7mLNEtGBaZu2MiHL2WKe56MYB5BGSUGarz4Gm7rDNTFH5tKUY3ePkwuuR5zZsZq8F",
  "key22": "5iA3grvFBhTLPw22NMPLHLsnD8hjtMF2EVF2qj7KPJ9sjdLUpENqWswtqjbiAF5caLpZfXxXhp6Zef5LQbTop5Ej",
  "key23": "4Edn8abpoL5vVmcSo2Vy214ADRGNxTXtddsMsgbdPa29KnJrwNSS6p9nd8tVfqYeqZLhHKJEQZQynv32BNMhPUML",
  "key24": "2ZxQ5L6PwazoMdpFRibyUakpAhETfJ68LCq8YZch9Wqmr3RFzhMRb7Zv2wyH8QEMxaPfuYB5MRp1aQuKq4hTtM2v",
  "key25": "4XCVUrJ4AGx5B9aE3CJJwfERyQFxtimcYCTcqT2BoqGtCs198PoSF6WoRmnLwsSDNLNJqq1vGHwrVxafW1SVSUys",
  "key26": "4Lnsr695wJ5FiaNMr27JsSnhs3GAHPd4UMCtr3hmtRL4AZCxWMzfLriwV5MJUc1mrrSjy7MSaBFpLTsPVS6ATBkU",
  "key27": "36xnGDD7QHZsRw8GcLbSti6LRHggsbfYG7MF9LKPAPK2ih1kv8x4e19H4RxbRSqhhotcYts7dDjaHPaZDzhH6nXC",
  "key28": "2bzVAzqCAEAZaiPXUxTnSmduFRtpV2VQ3Nd77oei2ZGV3MBwxU2ubPeH6pt8xKG1mPm5CikD14psRizPt83a1ja7",
  "key29": "5z9cckfVpcffQ881Vs9rVZiShqkY9RxWzKJP7b22GHNbjYGGMMGN3MnUtQkaRmBgjizbV7LpENZDs8RmC5ddkr88"
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
