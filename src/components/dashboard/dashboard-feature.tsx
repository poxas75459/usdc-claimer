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
    "2vg7B9pA4QMuLn5dmmDrxZTFfAj9LGhPHWszBJERtHDfuN1N9gU1PNWysQa6t7XwbwPCGTTTqNNGeFzJV7hK9oUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gF1QsyUqTC9Tc4YiLNVzGopmd5T2K7VAnh5Tzi3qVUTU4dxJG9cPZxcYuzeZnEbaqtfwm1GTTJ7ky316E9p1Fpa",
  "key1": "3PEuSy2Ad47ao1bXhMCNmdaZ5RJiRmz52s8mn8kyRCyN4s3HH6Gs8T7ZNN9Fc9xWA2uQtwJbLC6y9wdEZK1dFNUg",
  "key2": "3b2PCFN8WBbeE72GgJWbkjunXTNvkyMhgZkKpbr71tsA8T8Ze3623PjUqfb25mAUcNTqsnnLKeWsC6LtNTkxRw9b",
  "key3": "5ZJ4ju2CgEUBbgHPU6Qhzk1fKQboA4x9ZTwYkCewbMQCXunjigYLhvgUUawBszsgRBpFCEyLQGq2sRgu9cijQYWS",
  "key4": "51CvTDB2cWwSvqRRvEybJi9DCCrTtDGAVKVGuRW2px77gep2vuUdDUgPwFWmie49xrT8FVxLhKLNzGjxTf8vpLFi",
  "key5": "4bFTsacpzjLuQZXXeiZsiVvo3aytFmyv613MyeiqU6feiDokoEhmzU8kek5pKwzGZfsLb9rxMQ4v2v9nmEqdKebH",
  "key6": "66eVbaHV11vs3eEzpX15iXKpJuYg3pGwEL2Dw3GorVEUxi2TnekwiAQ7xrGUEpTTFFgVKq8mHzVU36XLkH1kpW2e",
  "key7": "2AMgAc4F9HLyy2MEfa25dBGeDWWGLLmTBFpGSNzBk6EeySe3FsRFU738okBd6tjNyyodSLtkJMJkmGY8ckgX7fkS",
  "key8": "5cNxSbaY9vnK6szyrLHXpa8y71NozzbTH282uJpmB2ZfUNjKtQRVVTZ4eNc6n92a4GXzy3SDBKVAgbCrzoNJJAk1",
  "key9": "2ioJcy5NYSSLAqv67kkc5Do3LV1dQjSp8QEBaftQLVqFDHDKwdecRBNV4q31jvpjx1y3hmtWPJhHaK7pd6zkdWy",
  "key10": "4eAyYPShNnTfdFZCj5AqbndRkStp9YgpiKzpfCuhzHyUcAzCADYbPGsockt5AMMYhLEa7MF2aGAF9X5KoUVRR7i5",
  "key11": "2UsgcGibwoMGzxNMyQ5Z4Tr2kEcD9MPKDxsYJyHKnKkKRQyGN4UZgDBj9cskknxa2FX2E8D47spuKWzpindtCPaR",
  "key12": "3VpntNGyr2qPNb9zWD7xNqdK13f7RmnBxWToFsPHytsvNDjyQ1foNfkscXxAjhoNdUA8hUuCRvSDPp1bF6AXX4As",
  "key13": "3cB3jXqnyfchDEcrfZtHndXJ8adwpgoAS2DMvGmYB5Sdk3uh74adwR6VstpQ5WgabAUar49VmAGPJf4WB1ns25PA",
  "key14": "4du9GdMMRaxbdKVs26DkWeJp5YsfRmuHupVXZuxTyS7ycAKNj6C2ymzbKYbFrXoR3ACNzhEMigKmZJjvkrKELSmr",
  "key15": "3wNnG9h3snKKwrsqZyNMU8GMe2iAPvNijKWZouubF8GHDJXWdoztWk2WLpoGg8zHFcMvyrYmtDgWMJFgJcA9W2mo",
  "key16": "4JeM7CfJUYL7g7s8YT5Ga3B2V5ocK3ZpQC2G9afHDKEuTYy1QC11nYtZXRzr4Dhw4oqehytuAkJWfLb4pSJy8bnU",
  "key17": "pnCXnNefjoq5AvEsHC21yjCY9gbiKq6V5pzcJijxdajxXHQZu83e1EMWr5VaBiTrt8rx97poiTrWt2KAQABmwUy",
  "key18": "2f6gRusTsAizyZm3SoPGidgSzHTheoTuHsH8pEEYzdgwo1JCtH2YLkVe9JKoyWv7GZYQLWosC9nPRKZwKUa9wzjm",
  "key19": "43VarY7TrLcyZ3e5TjvEuQHCB4N5FCYA2GEet2EWxJAtP7pFdbhppHXhotzRyhGbirZ5gWH4JyFyX8E5fHuFCVaC",
  "key20": "3Anj1JByS2tLTPYFATadtfBgyFULNGCneuN47fj7dea5ENBWVTG3rQEEAQYKedAW3RmiqFF9FZzzSXcwSTFdavjc",
  "key21": "3kM1utXSj46dGVizUZBtaS7UeneAq4RkFDgNVmaM53zRT7RQ5B2dgfD6xpB86W2ib8ZLbUAvvdBeUscD1TGBMZFy",
  "key22": "TSXJGHS5ZyS9ZYxh779H8fwk4sVepWQP5wG7DEeEQ8HeZpP4gFMw8RmVRx33DzfvG5yXJGB9Xeuux6JS4CieLNx",
  "key23": "onSwY3KyCdvBuRsrf4zuaKtT9U5bsgPBKtu2F2XYoSu3CorsAfuYoEMupXh6SqgVaGpAUzoE3McCA582zt4bjVL",
  "key24": "V534fzESr7Rbc9YqwtYF7aRbi4Y1ds3eSa7vZpdwu8HFDmH11287a7yufmetosB2T75R8bV8uW1Xq84Hgiy9dMe",
  "key25": "233UzYxt9bLsECZHbzDjLnnYS7SrFevMGvnoSiJ8qrVnUd3RvF6Gj8mwewr4YHohGzjmnU8Dm4Ey7r1GCooVjXGL",
  "key26": "5Hm4eUxrxBpkuMXb9ECWFoQNR4hrP5DR2BJRjiUBn9J4w44DftQ5UnGXAYuP6Eoqm97yFAXTqyaZE5MbYjZ52bX7",
  "key27": "4QoUM9qCRJck44Hihzo7CoswK8ciMa5FxVHYLYu2ZTMn3o4VwR15x7xSs6PHrFjqAwAYW56e8CQHSazVwM8tyPC5",
  "key28": "4Wb6uQbXwrud3Ppv8TKzgQFVbofgbBx2Ce2wESEejsXYiG7CESgYqErmuCZ2PKY5UHe7TjMj3T9KgvzSV8DsJApA",
  "key29": "3jR61c7UsDYawgrafzgHqTpE3NuDefgFXufV5xPAjVWbwX43csimWY3dLHtx9NBDMDAv1c8gUDPUytXj15wTsUTr",
  "key30": "22381fBufEefakgTQinH6PE7LEmj6ynEaap1mVjEsnr5pRBg2xqGbSwFmwYB8B7BERVgMygnCm9Q5xcrPaxjN4nX"
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
