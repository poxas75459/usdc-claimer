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
    "GemVdtfhoSwvHdqRPLXry6sGNcgLzAPccEmPvtdGJRRhSUGaWGfPrrwpEgQPpEamftZz2aQEK6G8z5ZEATkiJUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i44GwfKiE9LZxH2LQ7GAY7u1tHUhSJAVs4AT5P7FKKtvYGEwUja6iQyrujtX3N47LbVzhAFQm2965DV2QQLpoPd",
  "key1": "MUDkmYxYoQS4i4YEeKr4qiKWkJyG6SHgUVTCRJsEy2eC3r4zYUx3pobHQfzU9Lk6FxKEdN1A3dKfNYgFybZeZG3",
  "key2": "2hTdCFbNPA4tat2jkr21NowNgCH7Q6j8QktTTRfhuewxu2se7NY1YGdj58B7P9XftTTHjWGUt5XT8jUHgZJrDMxk",
  "key3": "3asY67fkBv7GA6XyEa1QArTnoBGguzH3HWTM2WDuUo5j7haNPGAPrAsvnjGHrNmpTGGdgftQGmsnTJ8EnGpMhudj",
  "key4": "3h18mZkhUNvs7qxysxpcL7aSbVjdUZsPvdJjCtgxt3tJJNA3c9qEDo7MTJtun9KjeyKFS4mVy7AqjVhjvxKUEsPn",
  "key5": "58cV95hfeKnaDiELf5wuXSZ7WjDvoyLfEb6JY85WomfjCoNP1FBrFdYM9r6yZcLha88rudTiPvzm3YejkjX1yVVB",
  "key6": "3jQMotspKGpNnr6G9oGZ3zexPY8Y3xLzrhsY4iK6qLu9fvC9brqaF6ijgp6CGCLfuXzttX6t98yfjRHobW6RUGyf",
  "key7": "5haruCJNaT4kU1QyKsq7PZySLCK3YErgXcD5VViL4fPiRWTmDDat9CnbnmfjTfqWboWSb7i3bvKYnwfiLYwNWQuK",
  "key8": "3Nj2ZdD1eCv9Mhb2EcX4A22Q1GQ292JscAuguwY5LCMbxtGYv4A3P3xj3pwmTCVuSWNhuASxtzrLTnbQMrJpXKdH",
  "key9": "5k22qRjvdBA5qtaDUgLLjL2pWF7azGJnPVEwNVdn6MVsX2LGm5dzg6Z1JUmP3hpz7w5ZF2VQRZ4SamgY1GcLbmNn",
  "key10": "2ZoQhvxaDofafK6zPPgUypkYfBFtjnhFv9dZLkv5o279o7c2N89v1hqAASwCuz6pv2a3R9qpKZwW8htWm7DTVZ8C",
  "key11": "23i4ZuQrx2jkeNTaxbMPMuyfqXDH3CZKY4HFTYSDt3TdwvEA2HLTNz8hqJy75tCuncEzPbqWTVt8ZRA9RieKs3CT",
  "key12": "4HT35LXtzduJrwAd8Mwn5JDaDGe3F4NCJdNShJEM1GrDD9ijUbfkmo8LQx7bttrG8fxWaK5aatj6KzMUwgBY3SsK",
  "key13": "5PXvQJwZtfiEeUbWWegpii3F6diBEFTSiXyFwbuXvbHNSSt8RF4dfPaLTZuSdgPW8HAZBjas2jhEy7eXGkdGEwXe",
  "key14": "3RqDwqCCrFfaTSRUGoDLiPk3x3vMBpmaBGhjX916LL3jbtBvfyQgXjkEkDdfysvm5zSt9wxrqReerKujjgNWbsfB",
  "key15": "46GSPW78hDCBusvJFExCNgVwZ1fc2FnBLmBDccKnNSKs4TQpxfhkfA9gtZXaHm6Nb2us92ZvEp4qSTxB442HBxqZ",
  "key16": "2j2S9LqoZbBv9bxrGgM8E96RzUPRcn8dNeU5658wFNWN2YsMHSjF2bB8n7KNr45q9AWjiREkEoLTExZ3dNyu4kNg",
  "key17": "2YPjZ4BX2UpH3CBRRdHp6sbknxszN6Ytn7WGErrHKtsxQroR4Ahb5WH9xfb2s9SSJh2rC6hyiAqiJ4oqfXYYCDpR",
  "key18": "4TTxVtgzgxj2wCcpByLsh5cdEwg1wgXczs1cavqTBociggFmKegT9xgMFt8hLRUDzGFFy3Majk8Uhzcv4D4dGdqx",
  "key19": "3VBtshcSewjjPEdqsS8xP42YET6Mjrc2WUgieyge9PqokgvfRa71ynhJHSeLMc2Vc8Bqmo3nV7mGb78cCymJUE8G",
  "key20": "3GaJfW8GLjiBiTZA4YFvQJZ1yNLqvRjQxHQspUUSsh9dnG6mYghK8RowxHtw7qVV9CLD2mUQJANc74rbEjUqKosW",
  "key21": "4aFUCKPzjtqiR11cT5eqviGrTnb2F1j9nyJqhhPZXyaSPbS5VteUn1SwJ5UeLXP11SZBYCpdrgaH8GUkYbCDjiV",
  "key22": "3jjg4nAA9MepsjNbAcKMvGf37eetLVfcwaAB3m3qQE1yyKYdSR8UnB2SjjmRbrNjxL4GSN5AYG6bsN46MBMQsowj",
  "key23": "3eYBxm2tjZKsWYp6sGc7DrmvmJx8sGvbww2xroX6E1MZNnxbRbHgBzjPx7BmEBxMTkvr5QhZBNhhEwKQfpGZdALf",
  "key24": "51fS7eSuyZNjoyh7twsm2HdQaVLD9WB12QJxmGkxCHmiyE4SdS75yrjfQcPBJBxww2CfiNxtLkp1TJv3xMU1x18J",
  "key25": "2cCKQ6TbwQ53CcAXA48PSTyfRT3kakJmXxxsWdhVuznAbdtuTS3tyYyDGCjeispKMRLyhHej4wJyvjgmxB995wce",
  "key26": "52n9y218vHnh8d3okPMaGN1Uf9G64a9TWi7sLDgCvSdtLUGqXubrniRrpwom3VfBPfGFqvUr9kuUV8t7rkjf2VHD",
  "key27": "3MgTEaVKpxiqMBpLJBEN3FQhEYk7mJb9e8oxN68WrjADa64uJzubjQc4PrKex5JqENkoStSRSHton6qgMvafX78X",
  "key28": "xgtbFBsbmEkyzthyZS7T95FDJ9FDBniKZYvCxfTSiZUK2o5NuYdgyVTqUPP2Yx5YL1ETMcQP556nEsf3ftVAJXk",
  "key29": "4oj2rpRxrcgwoqGXbGgjBH9YLLBsM94onnuLeJNqTE4C8FpGJYX6UuFJzNuwcfs7n2GLDFTuQNfpjsiZDUYHLwgA",
  "key30": "5vZA8Vyuu6kp4sA5MbJpPyWeUmmdVjyfsgootKGq6WHKgzsnxMyv4sJgCQDYb5QHaJWuVZohA7DHahPKKGETDFpJ"
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
