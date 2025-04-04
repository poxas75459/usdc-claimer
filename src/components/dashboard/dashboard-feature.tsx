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
    "4JRTKnTR2Q9d6Cht6qzsTEp7t43GcRx7zq3GAUEBHeiUxFLdiaESr3S59TpF9HpFqW4J75x4yU1ZGP1URc912qXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4zPKxPe9ejt16sUszxP7tVwVNej6vhHCxx6dxdDwtbCFyeP4f3YZXpZahRCYr36YNC4DfZbqZVz46x22evdCG",
  "key1": "EdGe3sA2ZGE7QYMZB3uroJsmGa49jkRZ1EzR7BJap5WJYduJETCchk4QHXBchHKg73FwcWVY4C5zZH944BV7GwM",
  "key2": "4pUbLoPj8CoB22HjFQ9KNKVL2FVxLAGj2XewHgg2SCgrcRQG8t4zFuNHLUsNNcWTZSsNYmjYkKUpY3m5Y5iLT3ns",
  "key3": "126NfJLoaWXsFqBM18xS3MEZ9b29H5sNN2o5DN2tauEo6Ab8y7qRXcMoVLBQWgtvzhNcUZWPCcXFFrGsKKnCKWj4",
  "key4": "2oXPuRMGnJs51bpysXmyxZMHhmDLCAsEjNLoBzp9yYAUPF67pcjGQ2s77UCbq5U5U4nQ5nnuQC9Er8r7Nfkg25xm",
  "key5": "sRucESd1dpc1R4sDmkpzr2okqaKDsKsQCCwXAzDKdGchasKf5ftMTX4p8crQYcTws3tCAxjzaYAAAiz61ZgDSXy",
  "key6": "622LF9oouYy4gGQW11zV7ubU3JBhubBDUighL84C5P2jBfYmjzdBE18XFKAPZ9qmWQSaASRq5jYbcupcLPhpijCL",
  "key7": "esFvUSmatVsvj2RPA4cpS4M8yPnE8hkwUm4aW6Kf2M9SmDV9kNimrg6xHw9mTTt65Eeb8jCc7K5izLfcFQ6emSR",
  "key8": "5gZTtMwuhnqDb2CP8yJxw3nCRR3RzCnjKLXumwWC8FdTwkqDAo3EUfKE98iUgbxVHE9UTTYVqtkVKZJ1WEwSzg2Q",
  "key9": "D7B53bYhJtjufvQBnrvTQx1ThGnVABZjmyHm7iNMss2V5gD5EHLvGnspcPe6pxgR1PuuN7bokrGWKGq5Modmaj2",
  "key10": "63r5WNhLCTt3T33zDvGUNdBBSqg8oV29ATwCysviVWDQps52Q7fBDWh9woUc4beaxiUQ7qgWHzEDtxbMWXvUGgJj",
  "key11": "3C1veMwdMyTxMMNruE9E7AMnnARkjwyksLi7r6Ck2VeV1A3GXfpyLegk8ZWyQ5vHe8mpyDUAZvn7EpQ8PP3fPJxf",
  "key12": "3mg1s8qR8u5uATjiQbboy33X7ff1ynogTXKA6zPHUaysLaCXRXofTug7jAzPE5o8nP3sKr71uFsZHP36qXYvFCdM",
  "key13": "iHJ1LbbscpE5tRhpgBbA5BCu19rDcQcUWBuYNr3Xhg4FDzVp4H9TWHmxkqn7mpEzYVxfN1uTo7VXEHNaYDnCCQh",
  "key14": "5XzvzWryEw9yaysZ4SWDtsefiTDC5XDoq33aBgaKuPxevL7w5Ai7qqzDPRWHzuLBWeBdsNmGo61XEMaaNjuxvTYJ",
  "key15": "M1P948wzfDM9uZe36eWH9jnuLfkbc4vfYBTq5gptoATd5ihs3EqT7VXtSQD6sadWDDtscaXmeYeYM8QSK1WAgpY",
  "key16": "4NpboJR34EzoAuidnAgxtMGaLbo5QH5g65NGxjNzBwKpbXP89AK4SA5ULmbGwi5kUx6PeiafvqU14zf1gufcb1KH",
  "key17": "77ABA1qf7ZXzPiqz9FsVQs4BNPxm6RqYj9vCjiGGAYpoDtHYpjkrfJQvfceCp1Rz1X6552mMPQZ8ZfMjWs2sj3r",
  "key18": "4nAnjhdbjBskK4znaSZxhZWVWscBnnnuqhA5UB85n3iR9UPRyhQQipmgHtqYjRbQsq4hWHrUcUkQE44ZHQvn8JrH",
  "key19": "5xhmTFMHtyort6v77miSP5ZMX8QukomwYF6dr6HuTbv5dWXnKWhkHxPZCmyFqzymHSfWHBAjuA2i2sYsTFr4BEax",
  "key20": "2eX2QHtPMY2fC5XXxG2Boi9N9oEGHF8M3LHFdshyb271ajufNHdPevYiacyTqqKXqKgJdS3GU3QMGUqTfGkRdWGT",
  "key21": "q4gx3gBkGt8bQtBeaUVfq9zpeMPnD54mai3XsyqRYVWV5FLMboFwzmVgoavBLh3ySkPMbA1TAoLjpsY1EYVWJzX",
  "key22": "4Y7PtXfDwWGfmFA4h1CHjhHf5k9dn9WZtfxSnJVGWED6o2hktENGbcQ5XsmN8GjCyRzd8XmgQL4cyHckvh9R1SVD",
  "key23": "3QK6mEH58eQzSP9umuBYNc2T635QmXV8PG27wJ3ZzxJQQkwJUiueAYKUSmXoUGkd5Xw18xvbWuBmv6xYcV9Xc11Z",
  "key24": "5MvyzUgRr5Gkvdq33KScYqFpfVcekXCB9PBhQTk8HSPptwXJ7YJRmZN7gGcZNSXppkxzXuStnkXNXYvS1UB4M95k",
  "key25": "5XLc7WGn6r6vrzb9jySFgFi26WiELw6PnjJhW2VufyGJKQQHWjDfzfFwEsCCBeqPY9NFm7s7VkSTfDFgVUsSDYcf",
  "key26": "51E53aTWtMbdgHpYd5jFYwg1M9FjDvtSzhrzjsz1RYUkURTY6CfEEHbadS3fqzRp4ZTNThy8i9PZ7sRNFGKa3T3g",
  "key27": "kUgiiCvTLk6QVXhz1pdWr2UeVZBhn29ERxAgJYREJNPVJtM8kyxTqUmpeqr1JquHMvoCSeNGfyWWLtvMKXECXQQ",
  "key28": "2jPxSt2yB49THDX2ajbVfxoCBW9eMQ6gns1ASTHGCNYkXhr7RW78HSvrfxRaQrGERU3dG2RHBaHaxK13UMFfhwKV",
  "key29": "57V1tEvCaedFsBWe4nXkHeSJ5wMQgjEQBmkMopBPyf7riZcC6yrz88JVkdieMNJ4Xz7UZkEz565CiBEN2EuD49Fw",
  "key30": "4EBnDcUuRzwgxbRzD5JPk3gAJkyyC2CHPS2VDLKCo75zW39tWHE5oBZC3X4ogunmSyvS3eB21a6tM6pcjYdauHkZ",
  "key31": "5joCnGw17dzcgFDJWkpmXbdmN9pDdeDeQfp4Ff2hQ2KA9B95996M62f6EtN3PuvVUJj1dwLRkMmTSvDpeM2ssxFZ"
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
