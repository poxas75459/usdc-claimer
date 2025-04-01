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
    "2xRvvrrYTsVQ9g3jz6W1NDMXmYeUTXEn1cG81oMWDeve3n9LLC1Xpoehc3fD7pRNcW6KksSKg2FbCq1UhhviPsc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABTSC5ti5FhdKNZtV82PAbsszzP1trB2MmULBcGBHqLBCjhLmHaoe45jvEfVXGWcnMZuagfAhYEnnxNZ9gYC9Pf",
  "key1": "fpP1we95oqhAGwLCYwVewnpT4h9vMbUprvFDAJDw6MJwtJjPL9Yy6BRmhAG2VWQo4dyT4Wdpy1BhNHqcCNdwmPm",
  "key2": "39UpdPods6GgfuXvzQX6B4RtBufQneHRFJmz3zB8rT54szjDGcQi5oXA5xxCB4nELMBtdcAPfcK8XfZQLF2Rzm94",
  "key3": "4kQmdZf56MJGv45M8RbuwuGmKhWwYwNqm9R3aQpXnnhfCrLZzJBbS91RDUtc6KBMhpo2YhQQvkv9JVwD7gg8i3WD",
  "key4": "3KJnqYP853dihtueNy5pAxYto5dDmfk5gBDuUVDASW7uN64AXUZRAEacBMKbRzmdXWdiSGVzN5CB3QCuWwDHVfM8",
  "key5": "4dQ6N6UwsvbV71T4QRSBifCW24xiGd78GKrbEZ7Ep6NAcjkVYSPhwzKijvWLbLjWNBSo3WYnm8UtjXKpFBLpDbeR",
  "key6": "2m58rAULB8Nx11Hm3oQKAWZY6UWZMnzvkqweWC9B44ECg8TnsKxj9XgBmm6MkFr5j27ADbirqzZU4wYDgnxzrYtZ",
  "key7": "33KtECfwkeeZ8KUgZ5riXFooTcfUFaew6CYvSLjkbrBqKCq4nKBjD9cCwmdNCKCqdkqC1YMgwkixrZJz1B84k8yP",
  "key8": "2DPyyHX4fjJmD51ZbrcFsZR3J6Fh6r6LJETafHq4vCkxGsjMLLC1j2DfrDh9cUXL7GkRqL2HW4ZpL3tgCTnBTy5r",
  "key9": "JvjG1KidzoJzjj7M8APn2s8MkcCJFv5K76Pa1pjMwFJDH4AJM3iQ817XBTrUvYZy6tVG11fbM2XK1oh1usCSHw8",
  "key10": "5qKi8PPwMtRKMJnk2UEaDn95sBn2szhYDbxxzzfqz9e2MzaFVUaGppwKiR1wJGtyCw41kpWHdvSkydxHybL7c4sz",
  "key11": "5Dxd8aEyEt4cBHPKH5qzbhQRn7o4JyJoNCbaZZLaGPSecRBK9bM6KY1V358cgQCFLRCrpDTu7G4RmdUdyV6fZgcT",
  "key12": "3w1FUgGiAfUnkULtM8v4jJCfH76KsrWknwfbQY6naNucPHkPLnk5pZDYnitMUb94hYYBm7HzrGjpTSCJ3TdSUJ4t",
  "key13": "T7hwFKCPpvjGdPvepsFyrTXHsdnKDDQPnhTqXDRYBNBxC6Pzpv1FvnWyqZkm9JQqCCDmYKEaLkYGnqfE1D6QpFb",
  "key14": "5cLqjAgfgFsXVKqY234Rz6KSwFy35bbZQT4r14WVF1xd3UoNWeLjgjWXVheCnV6xxvU5Gg9kR5MZNv9iocRtb8TU",
  "key15": "2mt5DN6RsoxNZaCvRfxLVxoYKnFto262WXxMrNMYNttxBM54mMs4KFk5CVY4FVFR1UasQeULUUQAFftWjU8NZY2o",
  "key16": "3EbWcFQQDe8yXR5v4aG7nEoGEdMqGgfRpXiTP8VRknCfFaqvu7DEkVVvkiWk6kTkCyKki7Kp7j7JBpaVMpqFnM12",
  "key17": "2o6NFwSxtp49FmLwHDceih7ro77TvUCJn4znGxrm4LEQRSRfGmQAvZzS5LurChfXqLGM52Q5JbBfAY2oNgF8sUgX",
  "key18": "54A84Q6eDHYie7RNo5ne51dQ9qXm6FiAoqNvvLSsAeEhdpHNNZGjG1PsAQ3BX7nxmrnZGtvBZ2E2oFpRd1r82Jpt",
  "key19": "4xhWa8FCn2h1RpfoevViohgCvQMqWnjVAN4yfTWdNoMNN8k2i2mPWBd8TzxJfP3E9d8AK5qpNocBxxE8ptXicf7Q",
  "key20": "2fab2GjGfg8WYDjLk1gM38BWydK32i75ZJ4EbWQvghGBBy8DriiPYG8WM96aLXY6rV2fAFxbTf91LmiARoz6Z5mp",
  "key21": "49wYdzjnSuhBdaiVMU5Q38xXf1hjgJxUA2NCTG9aCgx6BpWvHGAbzPjjpj5KWJugQfcbrrbEPKjC2iP8Weu2JZjk",
  "key22": "4kt8wqZKX4wprAevRPZPu2bAyHgrd5et9v7t6F2sC3JoTrz6z126sZiHDh6gYfwvUqjdUL8HufSrfAJrfCL864HZ",
  "key23": "4wC5wb4H4kuDtfGkbcDhyeMSNqWpSz3GM14MifUrJBJGc7oyWw8mjrUdown8M4QdDEo5NuCVYd89MdUH2AupVU1H",
  "key24": "PCzPGFrbsSDX6kk8EyjUEConVdf9pghCxsnM2aoUDcHqq9424g1dEVwdGsmPCQXj5SrRBLRGCXeGhQWhh395Buv",
  "key25": "4RpPf7aStpZYyHYm3uhjYRc8h6XYLrzpbwPYfBc2CyrQpyqCAurzvt65GHBDh7BxUZCnV1SELznFq1DurFcgK53C",
  "key26": "47HSW2xLWLGwtAn3DutujBLKwyZcSraT7oWRHny9uS9UoNCBBNGt2czCTMTe5QL8ibGqCw2FWMk4Sq9WfHipNHba",
  "key27": "58xKain2ZMzwqYGX5Bdtwawjt7iDne8xb6DSGMYjnTH6kfQ57JddaPo8kjdXGk1KbsjUJCqcLxm11ceERueUMDrM",
  "key28": "5nrFMk2dt4kJARhJP3stQzm8wSmhNZVoAY4rDSoEztVdCkhxUsk37SR44oz6vPdxyw1opaHdAker56pw8zZezJt",
  "key29": "Aeib7RDBBs7ijMnNNHZq6HmqExVLMxVkyWtrwVoCHRW6LcaWHi3s3ruTVeWKVv7j2sUPyQqsMvehek5FC3pqUTk",
  "key30": "2cNM413P2MP9tnN2xGYxuaXWgSNyRUWdZTvFBDAP9F5R7x8X4ept6VDBZ7pCaeTPhXyumAd9RFeYmYLSbLvUgDZn",
  "key31": "3RG8TbRLNbP7JxLrrGptfCmY8w3A3fGUD5ynhspdur5iTuEU98J8RYBiDrtKc7RPJbyP61Nw6fZ3E3XvHQkdm4nL",
  "key32": "2kJrjvRVcZQVM48sUiWKftoNuT4ZL8PukjNqzu9tNXw55RX9vp8ADSWzZTqa5cUB4RTAeMLE4Rjw3J6FD8ovFEty",
  "key33": "4zYZRaH6VwL8rvPhhByziDKHGzQB4nC9yTSS8VL4qr3u3W7BsGWnif2NZ7rA6Z7r5SS3npJixQm8e9TXXeW5V6k1",
  "key34": "5Qsev11abc3MVqEC4ybxHhk21yzSBWBAJ15FCSCGJhsPVCcJji5SkXEvJNKJ6yoGZUTsrfTzaRyd4k28m1EsAEGm"
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
