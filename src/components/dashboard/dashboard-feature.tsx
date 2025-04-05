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
    "66UhTN5nwk8FVJH844tS3Z4QvKzrJkKjKstVZrJcWoPKxmjHCeYWoVX34VB2aUdEDgMBMR6HVeRvixtbLwhi1waD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcZh9VBB6L6xwpoG5Md9gHua1EPEiJsgxeAbxwCiGkWEhkTiPAvPJYGhPfJ7Bh2egyt9YK64C2j5q6ggkC3Q8Hs",
  "key1": "42BEsuD9azdVL9LYvVy2kau7hDskvztczPJTrpJafupWFMubJ58ZfZj66Akeiy6CjwzCVTQo5kvtzLKDCGcPgyMK",
  "key2": "K1oh2sChHxYQFH8ZLzxPbZXA9ncym1VP9Zhrj9RggC4uk2nhZ8Zt8mBejLBN3ZMkWvpic2BXhA6WBVQxjHdv8ZY",
  "key3": "41xpQW7NNq7xfkKG9uWc1ifqBQf7693NGCT33esyKjRPgJ97b3VadPrGoshohx4iFYXXaYogC8vh2zhQs3SAcVq1",
  "key4": "2eAXuE9keoVUnBCfWYkvbJd4pJH6SSAfgjzTg5rCZq7Pcy8ThR9yT5P6YTcjnFLCCcC2w9spyDuZPK47s77cjhtk",
  "key5": "2k4NGCutMzbTzBYF1Mf37VRPVHA8RGSYrMyGpbPtuvKkbEd2Yk9gKe3iogC6uKU1MBk82jUekZ5PGRAaa4V9jYiA",
  "key6": "qpbiN27VrqqNPd6vi8TWPFsA3Rv6CNWZaXg1pDGTREX9xTztxLhhSPMN7tKJVEuPzV5YXdpq8D2TBq6FfALJX1A",
  "key7": "5SSmpCUoU4z3HTN3n6ic4QNb5MwrRbPJBEuLYTnXBQCX6W5R5eGfUJQb5T95TjK5dQQyuGg6wkdijVWXcprrgnSA",
  "key8": "4fch568SML7xNXrGoyvWtN8rWh6EnhRQSVmG5kCioLMDTv2g7UFCJmv2poLPqdEaShQp5XMarauqxVFVksz3R2Ke",
  "key9": "38obCryPLzHeJJ12jmbX2Q1PSNico2sAVgKZF58uvQowtVrpx278a5y1q8iD2s8Pk6C8GHwC7K18oHadDo7ivUwU",
  "key10": "4pkpFoNLy1JR3Kh74Z8mV1B4ys2nnKRPtmBRv9Dm1fXR8UtKzqucPfchgNCuZdwEqZnCTpNM34YQ2ZBcRSqk195S",
  "key11": "5yWRRCMkYpKzsWjkJ1RQ5KLkCskRT5ACYWx4ME1pSoFSEMYvPDqMdAXsjowAoAFSwTzmVLKCPbtzUWm9fHpLH7i1",
  "key12": "51RS1Xxyv2g2y2WPF6EGF1qFuSa63Bd26tYXngA1jDxZf3vGmp14N3f7qUeaUhupgNXjNdDLfDu6vphFKz6GCZ1x",
  "key13": "sbm2zz7zAvXVn6TvNZxVA7X9uPqcBbqGX6dT812XWb8yUEzDDquFA6f2DtoKbj2sYd5emdJNhrAxRecWs7rPkqR",
  "key14": "KbpsRKyz8tHH3qKdeyQABvzq6xr18ZKin3SfBfEXqCtF9wuUhkFj3xW7o15L4DbvRkrVfYzNnmotPFD7rLaZTHz",
  "key15": "5xWgDgSGDVVXCn3B88x4KEFVyFpuRoGVuqC2tdSUd2HBjVSfEfxCkakSiUXWKrKQ14copByoVAw4bRaEGyKpVx8Z",
  "key16": "2oZrkToFghm8jjv4JCkzNsLR7QFd8Kmsiy1zQyJseBg3NvKwVQoiniZVoEmyKTrEA3Qg2jmPrHEW6uvd21WQYt4T",
  "key17": "xmqSYscLQyEB4dgsi1oVA9qWz8hmiTgTsWaEWjY1Nbq1xBF5XwXyLGyqeSgbez8nmgQRHNyDwHd1ftmYAzKGVhZ",
  "key18": "22zVLSGNBpUVcFZffTMfV4fQKKN6JYL5vRK6TTjbtrM1stSMRu8rTbNRgh3wJ9kDvpvsQkWxnghRtUzHL8zXCApa",
  "key19": "5B9iwmCt7g2PYGXcGb2xGWNTJyPjBG2KkADbZTzV7a2eNcxwrBbYfjJQFK7CTBekFB4qWH3HvoBnC3PY3AzuG8ck",
  "key20": "3VVE6v72RoqgXY1xTki72RQHFczByATmVeY6nZvtieX7fuPPgPAYHMfU5snKND239ccGCc2MeDnpoZnBYTmVMp2r",
  "key21": "3kFGTAXxrWCuucHP3wTUDsRq4ss6syXXsN51FDsWJy53S9HnYPR1mgJFX1muXYqmy2b4zYpWNf4mGu4c5F6gqQxV",
  "key22": "4BDath1CZR5TDPFZNss4PDtTLaLRNzyf42zbTv34tf4nS3pnXDQqH9cWKykB1xPSPJVjXntCbvyGqbEXwuogDPUW",
  "key23": "3TdHRgwZPViKw8bSx9DXQU7UAmKcaixNJdB6WSUAV6J5FpvXt6fzrJxLjqNR6aBAB1qrkGyf3M9P5YFFRwn6vQ5u",
  "key24": "3gpBATpABGCa4bRSnxzYAa9Ntvbnjd3nUaZNX5XYHp6ysWVgwvptXfDSqXNB64zSwtbGPHLYczUsY3NLfJgroqiZ",
  "key25": "mfSNUg8ozs7Xw2eWN16YXCzToFXCk6jHWkUYrGAPNvuFuNbwPB7oZ9uV5ZYdo817eWFAz5iEGJF9m8sMPDw79M2",
  "key26": "36hyDve7xrmwnk2PDTsvxcS7Awozzr19URqWimHQUk4NVDcbtC1Nr9Y9MuP8Qg9asFkqefU8C2YeCDHyRApz61jE",
  "key27": "2H9PxDz4hMLP8hH8TXgm8beNv4Fy1wiBV9Acam5ZZmg5op3knmN4dK4dXAZftT1E3MD7MX36FR6nQ7drndqhNvCd",
  "key28": "4T4FxEsDsAk4V67kHyVGrmSeMh9DsE6aW7qS2oA6YgiJgRneNZNWBLAYD5rVZ2n394CXRgaEbu2hn7dLChoxLcwD",
  "key29": "3pC1nr4XdPQFUKxJx2bRtA7SK6kyHtTCdx5mdvSpdBtDDA3NGeaNkSJDmv9dnyqpoNCoP5MbstSJUAtViuHF25zn"
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
