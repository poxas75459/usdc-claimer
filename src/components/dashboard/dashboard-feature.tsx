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
    "4cRUw2ouB4jWGkwuqT5tWueeU4Hpd2XzLgEq5zH1tBB6gwN9nk93zj7AEFJFPFAupDxJ78KuWLPwft2qepitm5Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTga59YWWJA7GqGNqoTWkfuGxviqA9DmXandCqtcJD1hxPWPYvnYnB8qWAnkNoXz8xh3e3dMGj6U9ocEKP5DKQM",
  "key1": "Ay4AL19BmKwbmfKyrv1WWqPLwTpDuU9Np2fHEKXA85whjtyJJGBVwNaTAZEWhetqXmdSZLGG1GNSFAKgMrkhN6v",
  "key2": "5TcsNcA6o8q3JegqFqokrJ22YkpmXWNtcqF6braofA2bnU7b2K15VEjaS2zjGqyp254rbAGBkbRrgUox5ZRcCJZE",
  "key3": "2NaiHDLzUnWJ7nBWf3tFtNbdGVL8YQGczdD6H3DFnHLjA8hoDfPwmSxVQUqxNx465mXVgfCr3j9HrgtooZMDjnEK",
  "key4": "4KiPAAjGEz4yomEBQGFUp4qojgwxkoQjPH9sjafJEhLrugbLH7mahyH8hzUqBCS3uqLRsQhCmD7Kiy3QF535RHFK",
  "key5": "5KJqn2GxYqMUPe51x1NgfSnZoKwrtDg6wipwgdhkp84fMvBdJ1r5KND716nU9eG8Acpm69ubV4HRo8QDEYedoTF9",
  "key6": "vu72JErCciGJgRTre4BMrq1yDp21r6Gh7d3XnKtVA6EuLWWEdwZfnhZ5wSvujLkUNKArs8xycLqAm5zeFkWe9EX",
  "key7": "2pBmnRUEZPq4WTLChuAd3kq8w7tS1m5ErBKGtLLgfeiWCgV5DWrVKqdbNhYeqzef3h9QMnt9xX8AH63K4XxYe4rN",
  "key8": "d4MJhrSoW3mah1s2Rb38PS5ToKEYpUCwx3Y16LGPumxAoDDzQbkcfPByoGnkhroJZ7c8TBH9yCjEKhaD21tbybN",
  "key9": "5kDSw9cDqRdcctRjrXWHqPP59USyiuTotUw5dnGEVnV1huPFonJL3Gpiavk3UjZHaQpzoCdZYv3oXEYXgxg8K2Ai",
  "key10": "5keyB48TV3cffHemQiwkyzFXYdXmxz853BnMkLgZdGAFCVa1rnWdWRNi2CGYk2Msq5rahPGWJVuvXf8VbjxQHJ3n",
  "key11": "2WyWAFpgRUhEiBqd7fCD3sLk9EZuXh4TkQjs8iiRGhKazrBGbjEkf9HEcq1xp6aeeSBYSoKjPdf8E4cbXg6NRbqm",
  "key12": "iHezCzB9Ln3GQF9iR6GiwfjftztpMP4LhbKtprbUa7eP1CdTFXVbvFWsCftwBfUib29KqjcUvMxyuaE6aAH7mpL",
  "key13": "5tiTgRU6zrzHcbtv8Sx3SXee92MUmjHaJY1xPpn5o6EYq98KsajJRC1yQ3YW4t2pfhrB4CjYVL2JTf6tAPPWp6tp",
  "key14": "3YLbm1DFSrHnaZk1d2U9vVdBENb8GBS93M2mEHDs9JtobhxdzJk4jNC4397eFnLuuGEZFg7mWiMq4pzHKtDt3is9",
  "key15": "4Nku8tHFjFv1LXijG6JhaVCWYjyP6JRAjxCVxtQsyhqH9hRqdo2BUiy5uhRdHhCsW9ZaAZD1kj71b6kbcbDpA72a",
  "key16": "5cmL3koQxmW8czQi4bLJRJ7MJHRQVQFGMqghjS5oPdVomryk3ic92BiQhymTTSxa8Ssof3NRowH1NNE8AnseFNwa",
  "key17": "2Gp6uD8upiMubxfurEJFXsKZphQDdy5yMY99qcQozc2LVeKoduJCe6RLnPrT5qKSNRCHm9AYneoNF7UHs4zvzZRA",
  "key18": "6AtpeYhu3enw9Tm8EYY5o3UrPs1AqyYEN2nt7RE9An8cRzPeis2Ea4BAY6jJXN37ZbHtAnZvj1orYqJAtG8CzaK",
  "key19": "51toh34WSqRMVgozNMbQ9D6ghiz6gjzjMLtG8Pq8wS64YRsFgh9Dg3UiYDctA4nGeyp8LVWRkVzpaTtuZNgjzBak",
  "key20": "hiXxzXfca86AfQ6oNGpBVKCYminjBjEnRi5JiWieqWvoVDJM38deBA7DAw1dKQVkrRp9sQjr7j91HhTrqPMJdQq",
  "key21": "s9NQdMRdiR3KxrD49LDX13ntgirvfSZHNaPxnVQvGqRfGXVqzhkFqboDuEkiJArqNXX5xWjnva2zoe5ugoWEQuV",
  "key22": "5Na21KxBV3HGUn39TGcsDiHGRcAf92wksFixELPoivpBYzydCHgT9zHL24QrTJTbFbESYNAKc4TkMrtFYBrMF6zj",
  "key23": "4znUqCxNa3buG4GpFZ9WBzse1T6dmTc4ZQMNvcf8y8NXtcUT2YrJsRXFUnxUJZSqXR8irYLbuaBwpocKH3YyCtF4",
  "key24": "q1xiNSr62iV848sTENg3D2r7vrAPeoF7V468K9KsMf2VFEZajo17SDx2hSxaRKGWRLgFm2QZTDCX8o27zZJ4wE5",
  "key25": "3F1B74oMKkrpMnT2cpdKV6AJLraaE9aM5z1A5vWvBftuJL4u78vpBckteJ67mu1m6bvPSqtHxVAztfUb6WMCQEkJ",
  "key26": "5K6WB7hXy3uovd6E6xvC4KLMLBQnD3ur8BpeWHdPkDGSHoyhTVjzPQrtsV72WcpHAKYBE4HvgmHtP5wZVpcus2Pz",
  "key27": "3EAR6U52EKsTHPSsoxfyA4jGQqswXQkqWE1joTXH9MjsEAmkVd5KQbG2aJHcZ8HbW1PvNEtRhxJNU9wL9c2C3JEK",
  "key28": "3AsYhjf1es4oykwdUzstLxUFWoYij2NuyEYi58tziuCEGzYgMDwnJYibhAByr4TK3zY9AUpnzipKPMDLzmC5a3rx",
  "key29": "5gCACyj4Qr4QnTqgmt27HXqk1oc5MnBV8HDkZVzNKjoNFKcAitGccrvP16fbTPFZ9M56aSGsdZizMgkCEg6PEQT",
  "key30": "4QNjDb8awoCbehTUMGzwTEjcwUPQvxmAiGjXFht2uYRURef2xbwWhmWv2GVPWjpcmFqxqua48jcZQ4VJHkJbaEk",
  "key31": "xZy4H3YeHwA4GzW1RaYmU2U6zJ1We1mMtRUtXdfqQgG51zKFTviPAa5ry2sWiYvc6CA3NC4zShf2auZrPdKrvKH",
  "key32": "1WtQY1YSvBR1yq4dh9nbqsiHAnUW2omQBUSoU5NSajxcioN4tEjRez5kDgnXXT3aqKPdBgraTnvEq7LMSbLXmuR",
  "key33": "5m1gFXH7odRwp1GFMP7cN9xBHg2ZKva2saESu1Kkrdr3djkNRTVeE7ts6UytHbspiy4TP72mQH1YzdFpTJv8gwa1",
  "key34": "4eY6Vsexv6Ndh3Ynpb9nhs5x1Bweoh4wV3crsgStBynuuyJYGPmLtCQFD2tHkW1jKy4tTM89nQ2WeXkiimnbgUro",
  "key35": "2oQo1mZGTwkzZCQcHYjmSdYCUea3SHsFbmV6pR3TgmQSpJMLFNbeaRQVBhkYsMXy7mo9frtJjmTH329nSjbLe5hS",
  "key36": "3MBTgwrhqjpT7ERUB8kJsNc8CK1ZG4iAYxYRsNksJC5FBUcsRJfRYeQEimcsrRRmFaeGmMtns1T8xYeu9XRsEyJM",
  "key37": "5DZhuEN2hGxZpaJfaFRFFJ8t1rdKDHsPXuEagbzTBNU3WfgLNDLzB2haejYyqD3JSfjKZyMekbLBEoKqUNzHZKNT",
  "key38": "5KzNSDEeFZFuY7DkUdSfPiJtRDiunzLSW6V8ubCLnZjKs6zjGhmq5vx6hMJiX3SLEqobQnQd1WBr1Y5AkNJXwpZ",
  "key39": "56v3NkfDbFXdJdNLMPVeXto9fQXnPN3G4PmddCBy1AQwBG7YQtwRvou7FEwkRzyM3ULEsDsALBDT7LhQjZ9XkNjt",
  "key40": "3S2TE828eUXWPoyYNPfNEXeEDLt5zkcbCtpi9uFmmj1M3385vjNa1JnpWxzWPX58meWEgcedWH6Bj6L67icmSpjh",
  "key41": "3SgDoQT7HXW833A9912P8CcXFjYkGZvA1DNFg96fyihY2Fj6oMGQukp4S49fFHxZFN7vUMVLN9eMgsnjS7BHK7GS",
  "key42": "5N3dbTKB4Y6v34oQT3QRPZpNqy9ojvaNYoo5ska7kdmjJkorUYksj3pCy7fRHyPzNNZjpeGvHa3XydX5r8vkSEMH",
  "key43": "4EPGwEkHZ8c8F6F7HvaTv8bjfMUCsgHv2DKnNMEMkjysPRyDns77ZEJzYQxuDu8yahNW7dAYyasTxiSnj7aRCW3C",
  "key44": "5bwgWpLrER41X7xUyXnYt8earnRDkCurTcidre1jJ5BBpPuRJY9miaPJkFDpPWzADG2rzoHpyZBawzBnGZvRqpye",
  "key45": "2DhJmR5VRHbiDsxn5dgi727otvaptKpyS3fJMmGzETcXf5FsS8pC61o3bsBmN3jgSjwLYw9zPK3GRBAZs8ngxp4p",
  "key46": "iduwkU7LfSBEV1LmfvKuHq4nLP9kMnVwSTuZn6D8rvH6SaQc3F3KYJhXg7YMzPnPvAgNrmwfFxuRydv2tExBWGX",
  "key47": "5u1ZxLPZkGAkM74Cc5gQswpNXHNdwApK4ghBLPe7CsB68eDLY6qqRVqXaEM14B54c4PqQxn7iJAczzLBqZ9bgqpk",
  "key48": "3vCzxwKKuNoLAW8jM4BKpvU7MQ3fkRfyya5SQnkFXE8UsXakTfptL65PbKJ9BHgb42NzWf9uTaGZ97nq2d4KFjvd"
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
