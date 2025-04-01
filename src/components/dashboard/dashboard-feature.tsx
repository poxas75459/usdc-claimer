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
    "wScEnSS8ywi5aJjDV1YU9AM49NXnbCwdwa8ZRgRVTy9n6Qwz9MYpme5Ey1QmZsvT18wMat7319wrvxFECppLe7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnyCst4GUnDXCEXuBTSGjW2pCBP7S7hY7GKu256ZzWnF17dNvZ3V7duAuod7S7GtCRupVMqT5CQW7kHJkSfZML3",
  "key1": "3h5iY9NTjnnPtMhbjWaVSQ4juGW8MmZ8TCkRkrkpG9pvwx2gK9Xp3J3sQpNiYb6qWvpQGELxh6RHmGbR9YSvm8Pd",
  "key2": "R3kBLgDKQ7dKnE9zSYjuJQcmJGunUW95JLSiVGUk66hmpUKpb8e6Exgf5ZS7B367CoFQ7W4y9FoTHWoyWAuaBm3",
  "key3": "4s2yQbgxa9s3SpF3p5T5WLRq4teaoz3HnZmJXC9RGHrctC1HgorW6ys8kXL9ekWG1nibhJen3HKcNC7TfBxBHTFU",
  "key4": "3M8gL5f3GW9oyTytrJTHQNnCYv564kGkpzTs1ehuqRBSJBK1rzkPbrqgb2SYRFevQSqVHsr31UyerdCCsBVNVMAw",
  "key5": "3sNFFUibrUQ2yo3EuFzHAAEYap1DQgTD3McwzoL4PBFCJmB17bCqh2cHSq6a8aDLnKKBTdrBgLCB8Z8e4EXTEsnM",
  "key6": "5dK1x4RMmSG3pkmTMWTqSguRPw9cekKUQ8iQ3uzboeB7gtSeGCT2EqxJGiQCJ5P7GS4MchAWG2YcSWAxdtYCHxjU",
  "key7": "8rbGXUijLutDJVNqTnknQ4SDJF3EkmL81NA5c7GcggHEAiCKR3QpTEoGwp5qRig6fckE2DxaEsDtyJxxy3H4HJn",
  "key8": "5agpXnM2btUxPufzg6LQCcHtCethH7kWfK55tBLo3K1L6Ncbn1zL3w12CUDKx3MievgKNxaC1dPV3aW8FG2sZyjE",
  "key9": "4k6hjBrtLouW7rgzgq1ymukxi3NM6xuDZPgZbBrZudiKTC9XjKp5R7Ur7ixrFZ5rs8ZNRFRR9Xfbrn8bXNYuU9cG",
  "key10": "3bk2acMkixRhwi81Wdhz4n4kZGAPT1SBYoT4epLrUUEeAVVttyD2Af2nop2VFs1WmcAXKE7DFPecZWmSJACJbtiR",
  "key11": "5gD4GSJMe1yqCpkmS5zrNHWhC2qZqboqhrEGi2PVKutGgfFuV6j5WhRMH3D41h28yFE79eqRQKJDPPxRyYHFykSV",
  "key12": "4z8imqym9CYGZ2koixqjxmRVqJG5F6sdXUuPpinP7Ekv5iag6BKWuKYdCUT1MRewrwYsHePAP81UGVC9mck8Q8gx",
  "key13": "4pxwLrBfxBY46MCSm6ZFqgSx1kPhn3A8ZWcwS59tnTsWM4dxwbGRfTnmRvTeBUgP55QHfRmZqx4FbeDBagcfJnRb",
  "key14": "2hsheXcfFZTSfC9h8RrBhPuK7rDvtuFF33JHxkxuwNzQhmC2GrvjcngRemwS3SxC7EHLPaZZSNv2XrGeoaTChGtm",
  "key15": "4PfEuRFU7SmV9tKnhNguoFZvnMhjZVSrCdj8aVqo9rCcbERHNnPdHrvyQGJdeoKL2FQq5qq71J7QnaEm5bYKLrMc",
  "key16": "51arGDgPrNbuhhsYg26GqoLP1rZgvbpX7BjyL77p3KEpAN8chrSCMG2mUbzCYTs5uMEi3edwXXJfgWzf9iZpogqx",
  "key17": "5pQ9Kb25KXG9JNC2DXHhLhmovATvEM1qLYWeXh95A1jkhUU37oYRsEnny2aCRc3uV5WARAfgGUgKJWrZdQd5wWhc",
  "key18": "NCAiQsndHuiRSm1DzUtwPGUigrV2PS6ix2vjec8UCxEBJJMfJ6tvFR2GRBivxHpU5RoCRbQzWkgWzvS1gVR9dje",
  "key19": "5BxzkRP8dhLTrFk58MdVrPZTAkPfYKGZN3GfRVS4Tf1eBbRTDy4tQMgxDGdhkoLDRpruUG5CYwGczv7DoVu16DRR",
  "key20": "2PtJsg83wZPPwWefqQDFkrsHzgggSGBLgvTULfJapxiTMCWy2oNvfc4yLYqGjUECBCoAprsrLtPwNLTuZ8wEvwvy",
  "key21": "SJdajbAVYztDJcZa5UBUercDZrVfaGCCKPcNvP27EC8E1QirQEzh4i5vjDwVuZh2V34V4fwDhyWy1LJhWYgDm6F",
  "key22": "4F64USdkXt1HPBmwmk8v4ArRfDLbzv8iXmLg22Wi5o3kRh3KjRVm4EagL5V3wqTULPBaXCuLH2iXvg6rQxKxUaEk",
  "key23": "2xampctbJpxTqzUa4KTegrXPwojnZydg97my61t11weh8vn4XsHqUazdZ7TR5AvnffEAFNvW4sXGZSVQHYKqo7sP",
  "key24": "1yfgn5DPgmhCYiuY4WHCxx7Bof8rCBaZizzQe1arGhQPLL2b1PNqUiCKZxb1ejTXJ7YTnYawyhi3ADYNFVvhQq",
  "key25": "3FBtcBbUfZPpxHVjc8DbSgqYy4JhEtFeJ8HeiZmPGmH2ZZPanvFKDmdFqSNcucLAuy5UdUxX9jQbFsWTSX5YnrBf",
  "key26": "4oBrHmjgKqpPRYbyYUuTC4uewYFTSTCZ6REWBk3VB7eTAdfKngaYo8ov8571gLH1tn25dxopr9yzYuFXgsjZFuW9",
  "key27": "Cw8mYRMxLk6qbX7hJJTiwwSRQDSuuppoA2kEUDRxtXBgv2SmuTyywFNoQu5BuKfYAXxdQaNpkfrYWvB5Lo3JXBv"
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
