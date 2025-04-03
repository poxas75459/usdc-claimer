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
    "2u1K7XFyaD45NpmfSPD51DhWwwwxH2kgSS5bVdrpEjkn2HhPQaSSdc1UygztyqvtJbL2WAkohJhwPXWQCrt2guUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UEZL3ZCbqNFxfAUDiiSzyjsd4qnL3yTquHrmy6fJsG65XsSjpUnvJmK6aMZ1Mvrtyvc1EAnb88WF6etd3x2weL",
  "key1": "25sMUzpWNq3VWjFLghWGRJmZ36FNoDW8PGDyGuxpC9sCLttbn6KmsHvEMqV7EMggoUCadMfoxcr73YKoBkSdZn7q",
  "key2": "3LKu69RGjFkSKQQK7SPNtHQ8ySW1kmugmi1Qa5xZxf1t8mYCdgWN4GY5RBgdALqvmCNzp6DrLevZSh8hC7tuRvF6",
  "key3": "okkBZPDNuG1ph73KfxYuUp1QtAutHpLwpYGGe27EvdY2T6aB46b6XUgaagMWh73Z5LkL8iZrDbpKddst7KXsVSR",
  "key4": "4daEgubgEknEmh417GnZ5uGRpuHshdDi5wRfgjjxZXYLiej4XnJGjdj3mgdyCnot91r1e8NympRLQQBtHvhXtWgx",
  "key5": "2ocHUwEPCkNaLJToWLKcVdY3gzGGRCiSGNPou6MDG3FfCGNmbQs73bDuGC4SXv1BS8B1QNBwaV1DZEhgU1uZFWLv",
  "key6": "34duNhDD3ZD2t2inDRJVgK725xCqNiZnKQk4dJhxXqpMeQEXAte46QdGbxddqgB5pvsSJUqmPhP2o96K1KoE1bHB",
  "key7": "4fJkirmYxoBJiLMmyLLeQ9JAbo9pwcx48BsKejjYkyK1CSaHhKimhanxi41gXc8xTrtbgNUESHJd7iHc5akrhrSS",
  "key8": "5tEPsUDkH9Dg5eDWT3TV6v7KHTAJL2XwvPA5AjkehJNZCBuLQJbWW6Ds3JEooC18NHt7mUyRxkLX2jakeS4hwKBM",
  "key9": "5jEKGgJ3nXepXiQ2UiLhahNmUpPjmVHR8SEG9TJFgnwvntkmMGpebSwCDpkKKVdnZ76dK7LMKWVr4QvjUWGkCHSr",
  "key10": "4xeyL4QWCqGHb5h6t7atBBhsDb9Eh7GiiySaP2pGLZQNkA4MzCbR7pv9eqCacPesArtj2vAnUuN7R53yhA7nk6Gg",
  "key11": "2KjqHo6YkTUXa9xiGPpQbkA3j4m3cg1MoE8mBrBScshXetjvEgtp1k1R7DBfP2wnPcVo4yVTuyrmqyFyFCx4CXTH",
  "key12": "3SDoYaR7LG6Nwyx65caPUU1RYPqDV7i6wmaVyTMDF8gdkSqpDyHrDPcaqsC6WKmoT1zbFAUGG5qnsxUdknxbHpaj",
  "key13": "5P9Lf2yc9cJY2RLPfanugvb9UwAEkCTqsQHfx51zaVCkWqPjnrSz1Wb2v7LbACbZCAMuuUqF9rzXxeoogLNxuJDa",
  "key14": "4CCANnHd24MznCfhYxkUb74aheFuQV6eWrMfHgiXWKfW6RwXhrGpjGCbQD4ekhPtgAGkUPZHZuXE5EwVXdT244PJ",
  "key15": "7aaBJvzPcqGqaNCbX71z2AcGSLuYgiZb22WVUGAZrRuVLxQB1YtTeua2ARHyAxtXoFqCMEFtyJfUmN24jDbrPuy",
  "key16": "4q574F6F5YW5xvzJz2Nk6jP9u9czwGd2QrtV1ub37ZQ8UqUnGa486QArHC6eWZnPpySeDiC98bTsD25d6HakD2z5",
  "key17": "3HFh4b7rsE3yzxAiErimwnsao4t3oDHfKJ81GK385PhPyEkV6uiuDf1otojyDzC4n1yL8MGCjnEY2WLoXsTqjvFg",
  "key18": "5CMDCvuhfC89ApALt35Q21H6AcRzoDtbd2hHK6Ld14GnkF26j2hn9QoRoCaXxbVDzTVm2XUJwjnNsZ1euL4hJAaL",
  "key19": "TZMJBLtCci5EMdixTeoTc28Zy2KLzmpJai2TcXgoUpBZgPuHfecTSS9bMHF8Nc2qNa4BHFKhiSFWMEEh56PqFzK",
  "key20": "45ZGuiEoqxpJwjHy9QpDwVGFxpE7uaPm24rj3aRijST6zEqpQVDY6QaNwvdxH7sRVf9MpyqcVSpmqSxMxw4YE7rR",
  "key21": "5pFLbYTk8QzNdtMY3kMhfptJby6nsjhpucwHfkU7UZKt3Pdymmwmu9QMvAKzzYPvhY9YWsGa9Jav43sZXHQHapN6",
  "key22": "mmqeCzmH6ZDep1RxLnzLSQc6dYM1Qm8gSVTSg1CVgVTFqNCos4AADCu13dwN32tEWnZBo9Qm5CFH7urv2gPhoUV",
  "key23": "4ExNEwxub4B7SLs1ALhcvkcn5YsHTajHAJMPfgKzqTEuZHf5qvhQEddRSTAkB4Vdi8BPXcL6YMWaNJ6U9U2jV2kT",
  "key24": "5BSEwj6qrrbpj6R8RdBnGMEqFWsqkkzxQeLto9sJrM4VGnCGDGkSN3gGknJanh6Pe6JN8HPNnP6NT8Z4RqpmftNC",
  "key25": "2cUEwCUrkx9GUpxzydDezjFPYngcnWJBVzEUygt558zRBd5BnMEadi5d5yXWC3Ktn23oRJg6YBz58LDdxw85UjFt",
  "key26": "4RfFpn4RvJ2etmT8yaRurErxiC1963uSF3sbTVWY3a8P3e5ZVzxSLXsVMh1cg8BZYnXyxDmiggs1A96mA6gPPbWC",
  "key27": "5RjXyBp5yoRYz8ynsSBauRMFXtke4d9v7fWsoVERSQZ2a6P1c2boT7PqNg3FAiFyh9he8oJdLiejkEpit1PLvyPd",
  "key28": "2Au6Y8NUNTerFuMPQjRUFJqf9L1TgKu67zv277Cb9Fm9tEuLtXpGnVn4Y5uuwsmCVnpjWVV51ypBR5fK8JNuSLLo",
  "key29": "3ZLFgHBk95dscbtCoZLHFJ6zcqqa4B1GqevUNca2pfqaLtArA3vJNJztF72ZQfYW3DyC5HSvSLas3cqLu4iCgrwF",
  "key30": "RsfE7MHBQnMm9QhCg9N1E8ufr61Euwp9uyEPavVsTKq6pcGBbCJjewLoYxyHBNuwtZLDj3J8XVc2UU594v2N4Rq",
  "key31": "26ehNYw4Hke5azFN6x1jirA6NVEADiZZ2XAj47eJ3gvoLNM6VvVDpbcN3EtrFpNcRC7JChxEUCGvQtvhYCAaZ6Rs",
  "key32": "4CutyqyF478ZAkqcwPqHNpnks36vBrRknwHGp9bvaTmnVEQXRvJvSifDSexH1SbQBVih7fEqLPHckP8VLrwQfAN8",
  "key33": "yZ5VeJ2ndCEgEvVLK1L9bp8vQM3rLr7uxCwSmDNhozkwnH8R1279fKBKdhnCsR1uN1nMu66FDQUZnfm4b8D9Gfw"
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
