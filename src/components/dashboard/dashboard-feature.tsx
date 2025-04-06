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
    "5PhPcZBSHrAqBVsr8mkdp9n2sZ7UnFptTEKWxFxBQUMDnRuswVKRJRe5XugcLwb2615RA3PaeMBMVFPYGG5RkcPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXoyxp6UiC6mrEWWBXiSmWTeCyJP6HU3CQfPMa4WP2qVkimcb1rvK1sSQemDYopC631nBMQXeyZAhjs4HE8m6ot",
  "key1": "3HvBsVNVhmyrSN8XxeJiy7B6pUPUVfPqeRPEtS6fmqYCSFWajpCVSFwugNQVBhcCHnfCEx3oFrtCZ6fjmUL7wWxv",
  "key2": "yoLDTbsi1ieZForbGYHuSdm1gqy5yiYa8WquU6o5GkacUGKNvn1TpNuckAU2s7vDZEWsPt191U6K7yFPEkcpEDK",
  "key3": "3nbdLcW2UnapcgrpWKcfeC3uDzHKuykm4meA2XAY6iu4CrPx4ugBxmFPzRs1fcu6V3nubpNbyZbqoeXdz2Pd8mWh",
  "key4": "2msjfuxPvNegqDXuptscYPLh3CLwmA72Emgi6XwNLjjEQvPxLSpiCG2oo6KkFTCTLtHzo1xMbcFcHKiSqpLhct4V",
  "key5": "3Z56nm4b6SYgx83PwoZqHUjBoYU4xLRaA5ibeQ5AGTnhxwetdUhWdXFkg1Sg1PGUcNUHtsSV29DH5oNVYQetwTEL",
  "key6": "2o6SQmoEqx7Jt6JK3CVMFghQCJHgaNSWScv3BD8JrmTni5RWfcT1711TfSnKhTXH18BUeNxVuzAaFiMhNhx1jmRs",
  "key7": "4AP7bf8Jbz8vjX5cvFuNgK1NZFUBKCdDgJYYbBKnafSs2tdy67hZ5Z2mT73CZ4Xdk1qzw3PTV5v8C2YR5HTsvjnd",
  "key8": "2cSmXokqceuVJcCbEJRXUtDT8re2wW6QAB8WVftVEHwQ41gxhKvNzQHSnAiG4jVbYCoqgXiVbS6ypg9ZzduhFEbJ",
  "key9": "5F2UEBDWMdNFo8GJ9i7nz1NwawNQxPUymhEuKmNuvCo98Nt3fQYFVbgsEhb2rsE8VUFTDiz6MBTWhuvhJb7zZb1C",
  "key10": "3WpB1AZFpvSazuvYHTShg7o98mExK2mJmG2HMAsB4EGxNdZqcjaraSKpdFYJZ1CDxbBBvy1YYtxUX5U3eyFMVuFD",
  "key11": "2WKcPPX7vYQbkpo3YQy1UNL37DjqYHmZ2cEwD3hucPxm2GzfutMwv2GQiUNZncPbCk6oqzbAwjCi8G343MK1WBnj",
  "key12": "3vHCbgs9j5U1Mo2Zh8KAWbjugtPcnGq2y4z61XtJTJak86hJAkGDhwfyveXoD1uDuMRQV6vdwJRbbrzNCyuvdb7z",
  "key13": "2rRRXRLCRtWnsBGamCJZtnBZEy7WbQoKKA5JMg61Q3ZHFfh9orUTmZnVdZu12KVNqEDWFWuCaPuPTMAFm5413g6H",
  "key14": "5FnPqtWXSTvKF5NT46SDkAhZ6CTd5xnCAxk5cyXu4C5cMaCL6sbqnTAzeunQw6tfkqMpism336eCoxKjzjkfs4Ro",
  "key15": "3KDB6P9hMw9fjJgXZmGpg2sBRFBaJenkfJ7F8d3xgTSgHxGY7cdNuq7ktX5bYsEd9Pw99a2iRF24jrj8GqmMtRq",
  "key16": "5sWaxuUGvb62ZSFcNxQfZDuVfPSQMXHTWYqR6PvFQ9YRHd35cfukxPVqiXeu7hKRLywtryjN5sV4qFexJN7AzN9E",
  "key17": "5hcJmsGJBRxusft2Tx3LNGa1zEGoWkj9oaNimrePxbyvgeSfvoY2LqgLtXGgCs4TmPXovzfU2XZxPrQe1c1GxVKn",
  "key18": "3B24TkrxXY8wQT1v1cHqftdXBuUN9kahpDhxqqZg4UCe8pBssShYscnXTF6DPScfZt8qcqDW7e37MJvQP6VgoScF",
  "key19": "2xnKX7hLALKCRFnFBPGtyeY8JUzfkVUffkHVBm5GB8Gu9AzccgrTaLabuMbHrccczrRAT2DLoyfGSGYz8qRYFj8t",
  "key20": "2Wzf5HAXt8z4ZK4yy2c4LVC9cfMVvGgHDRwqyL4v4Yh4cVqX4HYqnXth87uhBkmGu8sr56ZAibWYHocQmTRTmrJE",
  "key21": "3i1DTqyfDPpX2pwHG3FLtZGyA7nJEeQYW3SboMgUUtSuKtUJJqPu4ouVPxrKYEBJkNgFdb12Q24imRZvsPuUv9Rt",
  "key22": "3aRuCKsy172LNX2V1bj59dP652nw6GuwfvbH5R3uGw2eNZH3n7z4KBYTD769jBW8wMyfF2h8onbAvhRZ4p2gmgah",
  "key23": "4ihDV9ttTu4Vhw919uY1E1ikjPbCf3sgRQV8AaJQmNCF42y8ueumcRaDKZprjX9FYpKdBgGevoXVSwXDLj2MsA1Z",
  "key24": "5gUC9tPVe3knnX4NSx1DJiLw7AXc77656FEJCXxtC5uZu6jXXSo27ifbsJD3J4er8XeQTVGnFSGkxa1J5VhRVVrY",
  "key25": "2XmyQWieBGe84SzyCYGoFS5kXoY4PGWAHJbLCyEDkTQHb1PHd14VhnSt6oSr9Gwdifgpm14gcvHd4MMRKpeBNGSW",
  "key26": "3gkYxeCsFbyAp21HPydNKgCcAERWA7rX3jnZDecW1G4UjPq3DE8JkG5syTzouL6EBSLQ4E3froETq2BPxdgomij2",
  "key27": "3zrtpJzhawyvrbXh8bvaSneB6eoQkWb3N3EACTVD4C7tak71ZQBE2LWPhd7aMQSz7zqdjGZb7yP9Ch4ijJaqecht",
  "key28": "Cbf8pn8AVR1QKdjTcBQ6nHGacipD37gg8jXvFEFcWHYqWgsKqh3tEzms9jTN9fXc1ePu6NNjJw16FdtfMKqqWRr"
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
