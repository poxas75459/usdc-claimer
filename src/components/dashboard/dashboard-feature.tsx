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
    "2vYuwthmsutEgFRgV96iNjRpKkSdKPi7rXZvNEZsz7XhCMPBKtoFX2R7pSpcH6DHBoGJcC7gPkKXoxf59d9PbrBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4Cuq7pzHawCue4LQBxkS5a5C5HNzCxg1jycFuJERgR9Et4worbJRT4cQvF76QGKEgV4qpxbsmYaKYccghc5bfa",
  "key1": "5EFUoy3YVmBNXKk7v9ddgvJb19CgYyvrx9jm9wGzwEK29zVVSLxVrNAg6TRvbiApzQ2jf2qbT4fM2oQLmhkJdcyG",
  "key2": "4syeCcWUCWPuVmGTQ1jqm1vJHypqrXjjLp9DGWoxwWnUnyiHEqoeFoBzQqL59DFuzEPbpE7FKrjubH9DJ4esBybQ",
  "key3": "4zTatbBukN1oat8TQ3K8gpxM2TS4ufrysw8DoxFe4YHpWU6K42nkGbgoSNNm81vgWnrykt23QWMJUG3Bs7QhjpQQ",
  "key4": "3YSKFb1122YAufohkve1jK88dK1Gp9sEzYmWhgpaYDcMrFQnizF2cpnSLhTqBpS7Mc62tcjJtCgXX9ZrMX5sb4Fr",
  "key5": "2WwyrQGTG5SBQseMmsq1uDqZ48PtogUKLEGxoCRFWcYTm4Qpq85GcNgBFg2jj9fQjgrKCK11krWcEEhXUzhFzZ5i",
  "key6": "2dNz8U2rtiJXZjEDRtFFvkjGmWETju2w1gxXMSU7iE5AkR2eeoL6YCqMbdYbBxqBXpP3GMaCfX4E9cgDwehehwNm",
  "key7": "56APBs5YQzWbYB3krzzAEfKKevQKrEZyCp4be5xoG5wcGyPbDRhcGnKMP9BACq7Vq9Xs2mZGGwZuAHycUUshvG7A",
  "key8": "2hm5NiH9SoKd2qY2eAxTxmwDRhAuExXTTiUZaa8txsdRJdxe1s8RWN1jVah2JtjVDsDTBdphsJ6bDYbNHXYuztTh",
  "key9": "nu7p4Tq3GzbyXdxP8MU9bwcwJ4wbTofSMNZeY6FScJ91nAyKLpVgMsoCkkmxxgh4PL3dsVJwYzcXbDSN8Qhq7Dr",
  "key10": "2mA9SgVDHGtbrKDwSJtkcdr3S9ByPbAKNz1dAgHb6wRh5hd8srW1GKeGgvjnTMfBZXaScGELjDTJ3dcrHEb4GheZ",
  "key11": "APmwoZRPwD3iGCJpRhWqmTtv3fodHRpedAgDMnvA9nzXnbGmrGfCxk7eQKw3ZDxmcXCpsinmvxdyixgUWG6NNRj",
  "key12": "5uJNnrUh1HKuW6NbqxQXiyHcuWmRxEZX35jRQCQMmsbzcKA9yD5qaTZZ6zmqNpaeRCr9c8Yy8jKHZMWZA85H2ZvA",
  "key13": "du9sAKjzmW5HcsCBLGo8STxGbVr1HXkCM6GaBRhS7WGqGbkuqByLSRsLn3UPTvGUFvG5YwcWJeot58GneAWKAKD",
  "key14": "2LgZYECBD5o9dBRVJJ7vzUt4VUW1LibEFEaPxrsH3cs8oPWvCuXwGy8f1En9nGXfph3uhXtRw1aqzqbx97kZWEiU",
  "key15": "51m8s9LuyUiNJkrA3A4F1XJJwDbCZ64A4kus4f6rMnw3PsZ8bKzxBvoBWZucefwo3v4oRGSi6VCsFtUPY6ujFQaJ",
  "key16": "5cqA42TjqxTA9577dy4MW2vYzQvgK4J9sHHKfikYgvEwXsch3NSeS9AWu2iu2gNwhxHLhNQW6QwQkpyUi72uFuzu",
  "key17": "2pFYyMcjH4MPADA2EaEhZ8p5chi3k8xHTkAk4837MvMdSLwq2iww229jkvcVoXCvk45DBeD7N1wdrgqiRPwCY7gZ",
  "key18": "26ByB3xdfXGhsg1a3bUUb9vncxqRMZTxGvDtU7oYRtrk2UZKncDW7xmjADUqW8Fi3maknRjm84C8vMA3gWoTbvuN",
  "key19": "4DDZ7TWHTGHjmSo2tSrkb63oMfEV5FGWNu5pU6dogbKv93FTbUtMsiJGFHsnsaZ8dbmCJWYmTKo728VmxrDnXXBL",
  "key20": "yfwnydoVh1oTZazFeCgWczcE7KufxZsNx449QcSuPGtnESvufkvjLmZg5qkpKGNvx19kV6cgZRh8VghakHHzEkS",
  "key21": "zyWzhdET5BmEDLpZRhYupZfPMmgy5jo9hWhBhq2iPG5tMyU8n8b6EyGkcv4McAdgTVxDLu6Vf2V4UpDzuE18S6N",
  "key22": "53sNEuqL1QLgAV5H3Lp9t3NbCeCbiwUVS1t3BoEom5GFeh9396Vah2tQWu5nXtWywj5dYc5Fcr9FSNioz4Yko5fw",
  "key23": "66khXXu1EZsrsNMxrh4T2K4QQiHZgA1CZ72BcdamH124yGCNY43Yy5Q4dTCB36SYrJ1sz1s3wvApzKktwtbtjLP",
  "key24": "5Uzj89AYAC4vcjJXqc9tmKWTXTTCjzd87DLjk1m8bBQiuzktru68w8PdKcpvEZLyauK2iohYv2nNSs7tUQ8XVARV",
  "key25": "3QrG6Rw87MnoLVko2to5xYrWUuzFp3BAPyHvw7Y4gYi1ww26oSLWs2p9zjBAi7ejeDFqjFgBpMtTrtmQcLYJ6pmp",
  "key26": "5RTvFCq4V3JJmoEhPhZWYVWfp2XAmRZ1kDGnUEjoGmhaS82dJ586Wf4VRWj7YuV4AhqXnMvgww3LKry3wHpf6fLF",
  "key27": "aDTXKvgQ2SqjAfnC3eto56ruKeEcN81fR1UgSBRUBnSTNxx5DqXqLnX8112hak7g11TqroGhqsu1QSqcT4HgM5Y"
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
