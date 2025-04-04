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
    "5CxPntEQdP8XRZ8x2HsWqg5xhhUXbziQZarH1z1kEpJ7m2UzYLhi3mGAsrxpW4JGkGq1VeJZf95tDQuMFuJd64tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9p5h6iViVyrELZAG7JRSm3hfHpKc5pfr93ntJ2kKpNYAfokhWLyZzYwtUnTt1NjrExbBPh27eNC3uSXp7dU4DC",
  "key1": "3HWJmsdQEp8L1iXhWjgA99ZCd46PodwUgPXdCkQmsciMUnibGUrzvwPSoF51az1xHfbmHpUzcjnG5HqNxjpzJWxw",
  "key2": "4N8SrJh7sdtJmSsaKj54zAf36zFLSpqKVchtnQKJ5QDypbizqfB18iN9heBNHz6yDtR5XEesUAZm6wnHEPiVbXG",
  "key3": "2LFq5udsvoU2RaRATj2h9W4TbJYJK6jgbjZJ9Ukx62q3KieobZ3hrBmfW9DwUqrRUrbXUM7FBrRZWeg53Pk6W9N5",
  "key4": "578c7jz4mgRskLqSHpm6KKArvo6UCBWtVhE7yN8cCLmkX5oPmCxpHCV8UBhbjR7EiRwjCMgCLZt8H7gXubxXRot3",
  "key5": "5NWQ1LkUo7EjSrvE5Mk1L8QaG6kTi7YZkhojwvf6pUgnrTVGzQRam9Y8RtbZ9wDdFGX6mLkLa1DidSgrdBy5jFhy",
  "key6": "2wVLqg4EpkfPEvTct4q4hetuNvaUftUp98xE3BfBkXtCo9FnBy5jj7MyE8gWLWCZ5sWLAzygCqjVYP9YkUUFK1PL",
  "key7": "3bp5HPqv1veL1iaiKWvKL5D3qmg7yDCGVWke3EDgHxH1f7hHLM9cnxzABFJHSnBq6fdvT8dVxCKN9t838htRG2sW",
  "key8": "396WA9XxW9AunvrGg8M1zbTSXQo2gSR17Bi1EGGRHDjpo1CrrrQg735TtR1CHFzirdteFNhNR8M7jRgbTJmPM3rQ",
  "key9": "8xp4xGjNQGsqCir5KG97dZDkTVrgJsdhM9a1FM8UNWFbdSGGZfKCHos6Mp9nh2drRivyAtaMmRYxi5WqZ1h7qtF",
  "key10": "3NH3jgCo95Xstuc8iSJaTeDvxX1aF17qvnaMAjM2fTyXxaEzpEkrZ97M6saEwm9Q8cqqJMdLfr6W8Ey1z2KWdWYK",
  "key11": "5KUUh2QUo1GSbr4ztc4bKnvKLne5cTmUGaDcA4hnzPb6YLZYvijoyfQsjGocKFWN8VFJkAhBCQviP3qknPovwehu",
  "key12": "4SraybckABGVzjFngUMwcSbxUmduyqRVNVh96fhmiukH5wuAwVcTaFZJnie3BxuNNoTnS37muVq5WNK1AsbU3eHb",
  "key13": "2Z8kgLU1h6iYZfKaXf71dCP5cUHASPgPNv7NMyy5STcHEUhb87wrVW6KvenVwBHvY2uBmwbCRjUxDg4RLQCV6yLs",
  "key14": "4oaCCJRwxzZ6isWVA8oNNVeCaPP8LmRnHmpK1CbUnPzRLQh2gf1Cjk6oApRs6sS2U8PRMdbsiGwfyHxZcLGVDUvZ",
  "key15": "3jNaFBvfm6a3Nyh2y6euTNrBbtWiVVMC62T6LrwTAHPRrAuULpjfKpB617ivYW3vx96QmCjNmDGJsCZ8zD4TutRB",
  "key16": "3PEbshH6JsvNUqTj9LsKBpEn5QNYPHhasCqDgvWRwdCQWZqDuiUkEVBAPgCeHsKSFCNS6vGVZMBhn3GehLCdaocA",
  "key17": "2Knk4ez8oY43PcdQux17g8opqFDWpMQSkQGQdS7uZHu9AvxgGoUo14Zv6JwE61mfkR6Cmc1xcDS55HPqt2FsPstG",
  "key18": "3Se6zfT27T739vjWdvrLU9nu4xBLxZxoT7cFPqSR7rb89B49bHVdoFS2Q8syog2NPZasjH9MgFn9cxiPf3gSL7AR",
  "key19": "4JF86YiyaVJMzgwrNWGZNQfPxiexA2fJ5CW8cyZrUZGLBEvEMaKwxUjMPQZiv2mVB6fNo1jCz6mdgU2Xyk8DqW7z",
  "key20": "5hWERDhehwQ7tMksXrVGiURqcJAJqqMYUs6DBnchtScwdkSqGtmi3CRN4bapAGBYePc5fbjDoCxB4q5XcL1ktJx7",
  "key21": "2cXTK9m9AoieVbTVSwEnZUBgsxykkkxf2QDanFDrpz6ZMD8KzdRm2cirhR1u4PCmXtVSuah6i6cmMepRPV5jU2AF",
  "key22": "2c4D5a81mfPjR7ddCAYfsN3TkLe8KTf4YGhjXJf9gcGt9yyKG7ck5bAaRLDvvLvAqGTyDt3b9wYeHw4XTLD6D48K",
  "key23": "3AJUbHT2tbv6vHPsuMR5SkNGi4r4MkKCEtMUThcrmPRZRh3MZnbiP8GfncHG1X8tdg741dBm4L1WSeZ5xpFHPYVY",
  "key24": "5cXcv7qKufQa2cDpd5JJandwHs9rgzRGvhTUpC1aqhz6fQShZFphXUA48r8hBy8bW3FomjfKQCnTAQgKhoqdUcFV",
  "key25": "5jyNqeh1DKgHvapKfTuU5UGe4TyUwDbhtsKJKDDAun1ybsu5hA1LUzELdiCk96o7z6QvgyRQxeVUsJh4CfGZCtG4",
  "key26": "2nFyFwSXBRHzjNWMawVNBonKX5DRvCtZmKEjdXaWh8DSpFvYhEVQGdamGndmJg2QGRhaej3ysT9fqJ4hBxPgypxc",
  "key27": "9uNx1MZMaNwGwrfStuNQYJ14rZnXjcDxdHXE5piuXFc4p9vpBCJy5fZSh2VP6YDW4EQsZvo7ZNXcVwy9p9f4XM4",
  "key28": "5G36XNNpU5EtoZ59hhFFa6UuXBwyx7AHo1KwttDqTSqKVtDFzTARdBBLDRq8tDxD1ZqoNoQEFXnoAWGgdyDiPzvF",
  "key29": "6xYMnKFzrH78DgiadWGr94LSJJKmgKjCXHNNni7PJznUTbFmw9BHik2b6SDN9R8ApGGPExc2qyweYE6eeDztunA",
  "key30": "61sN5cLAdEycArJhjKFJkmMCuX5P8gCJQDzNSemcGLmAXqL99rnSHBbeyVtNULKBfEnprWfgykhc2Wrciw7RJD7E",
  "key31": "4HLm8FRWDxKxwwbuXHgF5RHtaU25zG3q4igUVx5VSsQRkadCg6JyzNUT6YzJpqXvoHNPMj2naDBF9pKta5XCH2Cw",
  "key32": "45KZq74vuZo4Qz93F2AfgtbUTnpPNPJZ92AZJBb7UUuyfYs956VnpawK7MSeDVxsWWsJLKmyDXgEFSv7rwoGHx9W",
  "key33": "4ppCM1h9GbQhjbXuK2CxARF73vpbpuPzL7YKdqT36bkx1TDsHZd9FjGYjopUpvWrBDDF3pd5hSh9b8JuHjPUskBq",
  "key34": "2hrrivHnGiKw9ys5FRKVG7nnmn9ACvAQv7R1a9ffhyfgrDCP4Td48TSPyAwHVFYv9LBNCfcP5YuPQ6cN8NHXtDCV",
  "key35": "3QzM7Xdi7MZQtFU6jk1xV6nUN7z8zjbWg8eGWURvmZtbd8V1KKt9H1G46dJZnosUJwUzn1GpMsuqbRwdphaZqy19",
  "key36": "4VyQTSjRfsmCodvV1MPybLGRpgNYfxp95HLVpMZ5JCzpud5rNMvRxHE4vs98ZwfZanayBFu33dkmunCqUq2th8V5",
  "key37": "2TYs4oUAD5qpmDJpqm7vVg8Jg7GRBJKrvy6tLUV2LmTdWt2LhoZTvXFJRW47JVcPoRGYUeB25tQaUtFkJH63MzSe",
  "key38": "4ut7yyD6wPmoxjv2g4yYqBHyg663pyXJ9umQLyh7zN5aQVYK3hCboriRtSGjVwQzYP3uPkGxPqq2gTpfWH8FBxht",
  "key39": "5NGuHmLxWzB7g8j7P8jcJmxQ3odvc4aRuLruG8YxnjVH4xi6XR325yUevTD2fSVH7YNkWP1N7ypW4q3SNa4ivKuN",
  "key40": "tRZLQzkC2mNVpDypvMgtaWZQEp4EKP2ZSUdyPEqqwv422W5ibMvoj5cajaysGj5KkSp6z712NMYXNUrELki57s8",
  "key41": "5HRgkj8b7hcJviKY9oXzKEyhTjvHjFTvDzKMDYNBP4rDhM2DyeqAZNXJxMuT9smePAccMse75N2xXM9f9dfx9Gm8",
  "key42": "36BUFgEsKat1uJvzTw7hX1zHpBoEyjHwdHu3ASYazSm74YgvBRDzsw3cF9J1EHJnMiV2bEwP1FL2adVje8QTVWPu",
  "key43": "2yw55w4Q1hPrkGkNoucuGLb4Gi8E7mXBHQKkzUQ4Eaj7HEHjFziZM3feqcCM6ZYvsM2JqiGqSCaQF9BwzARp7ERZ",
  "key44": "ZcWXzCTqXgMzKkhLs2bjS5CznLnAygLh6sHiSxuiUmE4PY7ckSP7NQAmcZkHNKr92j1WRhnq72JC8xsZc6nmGgH"
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
