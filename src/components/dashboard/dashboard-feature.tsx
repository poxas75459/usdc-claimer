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
    "4wHiuBahGT1zQ36koDjrEXrcKyKBLoqvguoFfJ8WCnRmz7KV6sEzgfM6wHtd52xExxyNSqbKJjrEQEjs2x9YTHdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqKQaQP2gzodvN29vtnwLJcuGrEpZNDS6tChDmiB6xQ1RNnK8jWWQz55BYmK63gMHZPtpFCCeEpwbJM83hRfCmv",
  "key1": "4469B3oqvF6X6wqGaJyCqVJvftZyRQApjLhg4TqQK2HA7KwuZd2a3ACPELZvTbBvBStLm3LBvcpKrDQ6xuXjMKZn",
  "key2": "3YoS79fresotCt7tQVsFgNSV13huGsfRzFkP7baS5i9yS93hUDnjT1vWnP63kqUaFJ4n2ZUEFoQzCieHUQmRbfqm",
  "key3": "65vgXkLRZHgyCoikWRGHHBATYXjSoUwRqZXqUvmbCHNQ4CzgYamPmTEZy5bNpxgdpxyaDktq9WDr4YPzhrmNezPy",
  "key4": "fFGQw3igdLPB5hqoVmbsySP51uqUU9JZRWBjEmWtW311kf3Gtwa8R181ddCgn7Qxop1XdQBHxZqLvsSLKixCZw5",
  "key5": "64y4yiw44FtFXLpyZfxKxwpemCo9SQ1MEM31VtkL52E7bZn18HMhEb1RbuNWkYLdb4RJ6NcciQKBMUu8a5zyU3op",
  "key6": "5RS7Yzyj9renxe5fPSWyNCgJUPQkNFxf2J3K2QetT54RmUErn7FRT9jPufm2pcjwQNgnJYndGccgVJVpPA6DPTQo",
  "key7": "3G8nCgdafjQ4mwk2EMZGEBRoSKBYC8bQPpxP3ZirEzcSYgH2crJtviz3Gi9Pdx5kgiX1GTGbkEag26A4t6JbrYvq",
  "key8": "5AAj9qQw14w8koYH75cb1fBLEdmjLy7ZdmWRrSMaSbjQx9kg1sMVn1zBwfKU6EZV41pRjpjXBrU5D5zLoHKnhfzB",
  "key9": "zQAfrrHXwiKMM75dxMoCsibrS6xUFsSyZsaVoapAggrdGtQDQQJxR2otFYrfLP3TVfPz2tAFqCgQyP76GZfeFgs",
  "key10": "41U2i6vFiTLcWnfSaNswyB93XNTmLwjuoGYejbnH6syxXQDDxSS7dKrzNdsfL5GAZf1BqstCtbFZxT22Dy5DykAH",
  "key11": "4H9erqUZvWddJzkHMGTWb73mED3sbEGrvXgLxgGjMwy5p21QbNuc18PeQvG2g5eUJKW9iznGWdsrSYmsHcVb4esi",
  "key12": "3nhX9TMFMjnyHA8kaC4vkEr9iec8sLExEjDQqMRycyPeYstRcLzBZvPSmxE13EuA8XTxT1vwhiCsSjtd6qQ6y8RS",
  "key13": "5L7Ki8PwUTFbvYj2JJtL9ipb2cweJDG9wZCjnXDozHCQMC3eDtE7vGGYrK2TfF7aLyGVMaDjSjJ8NwS8AaRaLUWi",
  "key14": "Eua5u4nSx6r2bzopy2G9GFNUq2bYF7HXSdoMSDBjZprCq9JgvmjnjaNQwCVm2FrAEGiAmGoyczVRNVB7ysFA9Jg",
  "key15": "4m4SVd4fNJfMVgeUaFMVzqVMHJr9qSMk1iMXoZiRt3FmnoWM7jNM9ULFWPVgXCimZZcrjNxsL9vi6SxZbbsr5tZj",
  "key16": "6gQAhXs7Uao6REpA8dT8NzF6WUZf44WWHgSrkyPm16mqujamNgfRX5Dpf35vFG87UgdrZwxtYemuMZAHMobfArk",
  "key17": "3Pmc5Gw5bLeyy12UUXzDWKncgeMMrTowDF7HRvqFv5UQfk8tjenFBsTfNJmfPKev3MTF1JbozWMPYtgJ3r9H8bRZ",
  "key18": "65Ty6GZ8rTd6LWRx5PPGpKvCH9XzoN6sRbTMVMMGETy4Ki2Mu72pKcX5yxoxpRTYRWcX6ttmj13xTMqjnBZz1r7M",
  "key19": "G2u4BjU6PFvcUkJNNx2W5D8HpromJQjwRxaNNJ6kbRLHuSFCttnycjMpqj9GRtPfM1eYEp67zmEFB1rc15QuTm4",
  "key20": "Ya98qF749yMGN4YQ3PcejfFQfrsDxdFnzncPLKVm1ncEucwxLy9cUCjQfw2GSnPFtwYjxaRZcEpZRaPZx4oAn4c",
  "key21": "3Zo8ncDhoW8ZB5fXdH5aF4iaAyYJ3Lq9svUCEYCvcMuw1p9n2sihqXcN9hCRb9GTEAQfq68R4daVzVxB8Qh7EBaQ",
  "key22": "4fZQm6UVCqWusgWybeVPGcUeFxKCL5s9s4PFH4zSg1SKoaujkWnxg7XcZyKw9ckjhSAfQsDq4GLu9rhao2gtm93z",
  "key23": "4nioST3WZ7B9xwZo6Job4rqpvomBk7BZQaP6rQ7Mcw68jeLZaCmASqbdcYybZagfmhPef3rYgQHDgdFnz98ndiwR",
  "key24": "2b9PVcjGEHDJMQLsV2XtNXefV41m2thX28QMTfbtnvHRqmYfiLRZ78VBzW1gG8Ydxbv8qs1DTyAStekXBXDiX87m",
  "key25": "5YjKqdsiAmYXb5ovpAiR9QTBepFTxqeqcwDQypkUQaVbeftGMXiqF3ZFPyz6grTHHQuS6KGvNm1ppCkSNRF3Ynoq",
  "key26": "2bd53u24qNdnCttbaRWAA1GqNDKYVjPDuj2NjJrVjit4sfKFvPr28Zw5CVD854vE4sMkHjpV3BJiTg6BAtsnc3jG"
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
