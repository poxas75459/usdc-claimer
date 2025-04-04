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
    "551bazJTftfp5JZjduF8a1eNBYJKRatF3xHXkUbbepg54XXi3sm3GjX6rp3ZCzKkMc2iUSY3A4YsaL2z8yWC9Qae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nxA1jmBSbrdWr2T7y3pzK3FZ7q6BQtgdXsiwEgZQQMspVk6wKzhAfPftJ57XPmkkq18W9hENgDFFV63xcbs9N6",
  "key1": "2CvxfB8CbXYE6t2jLhs7tNo8ujbCMxwK38U4iUs1WxRVdNLgDCpEcTuDm7vnJT24mtMy3bKrV8njocmA2xkPTfm8",
  "key2": "4Ux1KVyMKThcoNrTQvnV9mCiTuoLjxRLgrnFo9emX8EoNYCuf3yDujTTWWqcnHjLJb2oGujP9jtrVyemi7y61RuK",
  "key3": "2o4qMg3A9qGsGr3URbuXwn2TBtBP8f4kqn3PjFycarwt9wkTqTCKNFtwxZXt6BQ59pjXXYk3HTTyci6dFyWrvE5D",
  "key4": "4iJNurT3G1d5Bk8mmZxgqDrYABLsgzFPabtWUKgwj7KjDy4iNWZJCLNPxPRNEnTVoxAf63u93PzQAhrRb1qZpydK",
  "key5": "4yMWa2bFSwPaJZLAjxv5zgedushFnPSmzTRwFMixq6gHxTCSbzMeBBSXBRAZwYUEQB7wWmGRMhZJNYu8JzEagQZN",
  "key6": "653vrefJ5qgx14AgtpeH732mReam2rZPTcXa1kfCckf96zrEvThVUc89spHhq8XN9WW6xM4DoygbSQR8mELkRBgE",
  "key7": "3T61V5fEAjbyDE4HH8fuGKqPrwQQQXTwvy9rEb8R2e3s29xcXZGd4WidZMN96mj17bUccrHrEhpuG3EHqDU2XtqS",
  "key8": "2h6wG6UKwmgy6yyeRBR84mC3MU5Np2PRbiKknFwe7Fi5TkHsaX5DwfbiBR8aDn3LmFWuYpn9m5BFSdpjyhozQ2YL",
  "key9": "3igsUZTwfi1TqgxWeBeCxpbJjECfvkjqAQWobToEhe9tUHtS1MX7rzp18q1uPYr5fiSxmA1mMGNwiwdhtvE6nquU",
  "key10": "4NTNHV7vuBU7sMrN9GPM9TY2eRdtHcY9DfhDLBJHs3XobHvM5D8E3BJAaSmj9xrkiSBBpw5MMkJYPtNwN9QiWdKn",
  "key11": "58PrYsEAyT6GKj8kkvcm7PcbTJu94SdUZ2acwWi3pJRLhhY2xi8777NAJLkHRn7rdxwkeub1wePDaXgTRDFJfYPG",
  "key12": "2sNQ19XA3xhKaFVikQwy9fvY24mHTfjNgtKLj8DxJtZG7vFtbo46VfeG27kska3F8qfxnSK4SXQhZvkndHrTqZ77",
  "key13": "3DAo6iGQFEBWY63zX7GDDsmH62wQ2NurBXqZ15J1KsDtzJDjCUF2UDtTTAWkUCYPtXpz15LdekHpYAfh774jYCFR",
  "key14": "5jP1zEaAfB6zaVzs4mKc63LfvqnDaW1ge8WQtC6kutFTpyFwPSNiV4kamZFpqukktLHBWGnjUhisgsYJxcXBTbWn",
  "key15": "8aUZusgo9Gp5We1uSegNaM6uASBGdHBV3ZQKbDjDd6wL3f6CUHwvHBoGEjAu8EdU31P1Pxzw5B89AZRyxYCJGCb",
  "key16": "2ZFB36Sk2EqvjzimaJuxgG6cRqwDRoWByZo3yFSMyEojdA1rJ9oJGZsd2mdthkRD8KAbjhRqiB3CUqF9Rq92MUye",
  "key17": "UUubXXea4vtrjZyGN5bxswAXAcnRJa86jFsXLCxKjeeZzu6TQV886A4kWuPMDnPx4qPTZauWqtBoCsC48tu5rFz",
  "key18": "4M5gS6RGVgLAykVkYAbCy4uUqqF78ic6gJeLxL81EaGAiQ8nHRCzsVEYZnQDUUEfChMbMH5mGw8pF8mLJ76nAMdQ",
  "key19": "38ndFgTCtw42XAgKNfj8FA3NAWahMv6tAxuBrdMKqHKh1TLW6qGJ9tAa3SLcJsQ1VwBHR8PzatiDP6YBHCLoTMDW",
  "key20": "4A1NYHDF5HMjKsdQ7DYbJCiEh3EzVK5sbagXw74oz4mRdhFYoZoaaoMNGMLBGP533VZMpAtD6qd66U6Wvkx3FVt2",
  "key21": "mQXB7kJFBHZFaweX9wjhLf6syD7NbPH1qtDiqDcTm9dy1e3YpP7bonAiAr8mGxNuWFuzj7xDs4e9aXDVSyYHeUr",
  "key22": "2iBbAKGZCTi4WX4AymY2YuYMHZhvQhxvFPYf6oEq7mURX4L2vhsqZG7Cfu6zXvajmVM8YuBa7mj6XTwMKN5ro224",
  "key23": "ABFyqNyhGBodN7zKynP6f76BprqapAANar8CK7SYRePqGQ7tJd2bbHU2X9KuU4HVaSH9PUj2pt3Fx3GJV4BH3js",
  "key24": "4Xje1DLdD7K7sm5dnzjeLk7aMRAa5o4FkGjnBZ6J2PxomZboau491ub7XgYKKGoqRBuJWdZUvsftw5H6yqMxWMzX",
  "key25": "5YXL1P6bT9qfRkqrpm9q46fStXY1Lx1uz4Pxt6BNkvh55zYRA5HfLVHhsKSg5kohZXtkVDzG95ZwNd7iRX1wNdSi",
  "key26": "5Hx5Ny17c7B8NZQECh6gGYPwVJHK8TfjLfjtkXVa4i1HDpjob8VsMGcMUjqbi6A7GGJze4kva1oT99CbWjMGM2G3",
  "key27": "onvMjmLGq8rCftnPZj5JMP219BkrRNw92HgYPm8VFxyiXorAArZaAr3FWajHo7oAmfv4q1WggSLk6nJbmURUtAT",
  "key28": "YxW5Lbq7dhx71rNCp8R8KdUZWWP7omGu323638UZcpXURApxUdY3qP9X1w2Z9FjCXfmYJxeSrZ3zsp1ZaCteCVa",
  "key29": "2yEiqxSENKaVGojhEGRPj5LA6KKeB1mrBLENLp7Fs6okNvkckA4h84UPrh33LXMBophcK2xszqhpEh8hso6QSpHp",
  "key30": "4AiG2HLyyYGkddyJCJi4ompx9wbpUkLfLz6G1b8FV4v5Y1rPeadCkiFuTvRxys4RcwxiEAkB8dYT6r7VymYoF7Z8",
  "key31": "24ucsM9ky18jkjosakGW2LbAmfTj4fCLCSE3SSbecXCiyiPEFvg4E7txVHjmGYH5sDoEpC4j2Q6ahJ7Cff6hffBB",
  "key32": "5a4uHSp93U826VAdBaviW2tbrSC1Jr4ELtsNmkQxEwpCtzDM7ZJF5mytwhziP3pa2UhqjdKhbjEsbZLUAit2BMZA",
  "key33": "fosN6NYzyd3VKi4jAVW2GSNkaBCSLtQmQpGKEEpx1JaAcxWTPEme1NrZbZNg8oNfVTFwgxMbnybdwTiTNyL8P3r",
  "key34": "FZXz7a8ww4Chvg9M8pSgtNXt6t5Ly9bNpfYdqyrCVk7eozR2W6j4Ho9qdEAfjtwUaXL5sy4Hj4uXykvUG48HPxY",
  "key35": "2quUiEyahLkRMtGisjJSMEb29jEbMF2iBChha2CiZ8s2aqJE3MkMX6jcvmXpiRDHcLSNs4qwBhxqQ7eGBSj7sAwY",
  "key36": "2orZk67xchhx5hFSsYrgdpdN2tBGXs3NiihXjvoUj6gnJFVy1N62ZzAeLnsVUeSvoRr3PxHFZ7tmmsjhCTMPuNis",
  "key37": "2FxUYm6EnrNxRpoyxt6Aj6N98BGccPxjzGNLQxC8yKhK2BeLa3MW8Lwwmn9vyvKTe2zLQ5WGUU1SmwWhkTRtnYsN",
  "key38": "4gG3Dn38AvsG2TkjSuDfCYRZCKeqCzpgj5eQBWHfAAozfGZswkb2mUwgeDEw5WVC3weewUGy52LkcoRE8cR7EtrJ",
  "key39": "2sXRaSaj1jcdkzLwKNpQMZw3YALvxZn5qZRXQDDs5HxW1PczvuoQsZdicqVgxYzFNLAiyjUhVHsFQqUVJx334sjR"
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
