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
    "4nvdYmz8TYmMi2BnPmT2H2CWRPbf78URzd1rZwf6jZ6sob5qtLXryN3XTWrnEC69MAu5H5QC3vMS4o3XTW6z3wky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrgjX7gziebSTMWLRrHSD8pCVd8k8oZsuXTaC23vr4TSKwMNgyo77gvGE3ts4PT46NYmaKFJvS6PrDUUGb5furR",
  "key1": "3qk2NureixivFxroTGpWcS7VTDmeWb5fnVEvTzzvQDLsWT9wP6GaA12zi5uwpVHa4USrs1Ae7DEqU2pcACEXNZuU",
  "key2": "3GSk9jAorRut299X4YSHK5KhACo5LayA29asyFyf5ykDBYdfT4wTfvmHCzoRDoa8zHZfp4Qg8c3KTrr5tDf3mB9U",
  "key3": "2wzs1CtSR8Rabrj9Rc3dvtzPeMmcCwtSpRqD67BHFzwR5h6XLjwCoYLxnJuJHb5bb6XKxKTKMiHGEq3qwmzvy9JD",
  "key4": "s95DAkA2ukmttygFeaVKhSpz3fAPuZF2YNfpAB4pa2uKCGJxDt9LuGGpQpdyyyAFnJjmHxq2BUQuKcpW51WPCHa",
  "key5": "2crRsv6oRrYu5SjcVDndcRKFmpt6pTtazkHucNaPeHBBk1X3efkhhuEMrMTL8GEkKwxb9WXSXj3st1RqH8iC7bjF",
  "key6": "jHSzKKtz7vRRWu6bNoUQWtzabpmQk113cd6ikUHd1GcTsXnqSCNdkq4i3vVxHMzdYLTZ1nVyNLy2SqYkuaiNX3W",
  "key7": "5YmseALNLrVz4NLDgauvDk9T2tnsa3tvDLa86o6426MFG8zpth22WwTHrDYw2mDd5QYGN1DZezeNHpnqMxsUtHty",
  "key8": "3NG7iQX9hv9a35qLSftrvYTawU3hsDnWugPYr5stXT8A3sUC2hH9k58fdGDs2aJ91AeBFACgWasBQmhAfkh9wNb3",
  "key9": "3nsYLp2pDZAWyJBDMYosoPmF6TJi7Ze769jBiMu5ZWzPDSG9Ka218nCtpFv964v3YtMWvRgLDj4N9Jcanf5nT4Ef",
  "key10": "5orhV3cWUA7dVvZS7nq4WeV9d31cfHTYx9HfJXSAyh6gCoZHgntxNTmfu5MVAYhYJuHCrGQQqPmt9zUP2De92Dkm",
  "key11": "661s1puayHKHPNs9H5b6xmJkqP4mSu7KMFpZy68AG59GigPR9k5DFiktUnBesh1jUnBaUFQf3hZy9fsV4P1YscUw",
  "key12": "KfGSsEG7sGKjRUVwmhvtVGDxh2aA6TZ4TtsN3LobN8cMBgX1ZGRo2o7tWspqZEAN3vyDPxJPDFdz7NBpvDLoUtw",
  "key13": "59w3Jx1hZk9AS6DwKbpfoAKt84NAAeKQnTAg783cftuRcSiFa6jrZuS47CVrZmWDx8qjTTQTe8sgY82GXWiYkHRw",
  "key14": "42SqnBkYZHTEgwzp5muNJfAymcYybAfTs536r1b8SZDYqJ2JxLrCbD5mhHEDJTVXH5KpagXZtnYThUt9QAYbZhMK",
  "key15": "24duKS3TqimDUevwzEkNGS4pVEaa6nC2cQq2dFu4RyDgSvqXrmQbUCGWA9u1dsWKfk6v94zsYvdBBakQRZEpQTPi",
  "key16": "3g1xxHAEc8mseXy2kCBx7mkGRAuyebiNBcgsWhgegqutMk5QBL1cQ7qaMAx6UFkDjn1k1fW5q5Yv9T6HyX1YbBh7",
  "key17": "2CjCBRtuXxziWy8zqF4s6Q1eTRnMXKBGNTsPC6azZBhNdHga1VUZ13XUksFiBXhuP2E5MerEY196APmoUuk5WhZ2",
  "key18": "UnW3cuFyV7of18P29dEncYiYwHiZWTJ7jN8GnMoRH6AaGEFLeJqZ3vDBFgHfdes28Ps9FnkzjgWvBua2RGD7PyR",
  "key19": "5H5WoVKwTyeMsVJiRufVwTdm8eokmAKb8SFg7heXXNTQjMhy6Lu2364XA6z3UGAatq91LzANy5jeFD5wcZFjag6V",
  "key20": "4A8SEUe8komNX2fbYoZB8MY7Ynq3i1J1h6hVFpPsdJ7uXz91nnAYYGNPLxDbBsCYPtxqc1UZKp7JaqfwxXoJn2XJ",
  "key21": "2kCwZ22GMLULYN8rJFAKtsAZs7xQrJdxk7mHzYQjXfKb7ETLFwBGuw3DyxpWG5BkGruB4wvsgLqH78xwCSMGUH9E",
  "key22": "4odPLj31facZ9NKEecCFwKYqQWz5FEJvbSd3L6Td5xdVq8K6cTotJhwE5A5f5Ek9atb8D33GTHSzhDnVxab4x6aN",
  "key23": "5BXZD9hijWHgvxZQPh8XMQmJYK2Kj6teMAW4pgjLdbbG2toZLd98zhDwCSPnMYyGnDAAf7rr64WpmEBWJ6wWaNzt",
  "key24": "2iv1qH5ZmzCtFwZ6NtaPKop27Ragy3NDr92VQ9xRRMqXw2VSLB2hMcshVXZtAJYQtqkomztrM4kRKNdS6Nkn9yvf",
  "key25": "3gjEYBRzJLR59ywF2AX58qzhb4AGiMqKW7LWK76irJbYWmW45n5GZ4msjVDKkd56b8RaUsobtBq5TcMRdSGHNfCT",
  "key26": "39YUwT7zq5eq74jx1Q62RXq2kKMh5iN199wkkFBd3kUfQSkhQv4ycUW1WNokWbSCdySc1gtfhmmfjQ7cNDFcfrDA",
  "key27": "3dMc6ZsLtbuVPa2SdWRT79R1HGdWFTBgpDTEUv3zHyoe9a3xi7XMminny9a73XiUrCUQXndt7WRprc2itcw7MFWL",
  "key28": "4BmC3oUWQYGPHNUTk4UDbUnGo98Tbv2jZRFvToo8oqXM7VgtRN1PUjKRWp4d66VJBTF5diXx8eVEBvhPrTPtdDEz",
  "key29": "SXyR5SzHrnKh2HPhv7JGriC4QEdJvRLMz1bXfxbb1BSmcG9vu2i4oEWDWBq1S5eQBpJQ8eQVw7YNPUcZCbqToXZ",
  "key30": "2dbRT2S2xxRqNBjAx1PEFb3DQ1pJHDWB1siBE6VJeWj64nQeC1H1JnWYPByTCVxhK8SRcbxxJT4TEUxSdVHa3zA3",
  "key31": "4adMkKv6LbNJzHRoUjf9P5C1kp2DzwNEbufHqVqkbZr1ttkzeAX3kqHEwtdA4r1TF6vgqJzv4YjGsaU21Hb6wxnP",
  "key32": "36DUzBaQwnza1PXg24BskoxQnZKWqF8kgRtgqJfw5E3t7aiys4zCUsS8KLKjUQFqCSLDs4CcgyuUd8QmUJyEhUH3",
  "key33": "4qopTWveZgQbSiMVHbNm9YESewY2E2DAkR8qqpokogy3Dmod6h61HvNUv6FSTvNQUDQBo6mRoz61dwLkjGcPqygj",
  "key34": "2w1DDeQEQbqE47yGuRgmFVmWcXHWtJnQf4zoXwX1y8JAmfb6xqQcetjEXW6STZvMjYFREcbRQYSt3cr5DTQ8aPtB",
  "key35": "3UwXbs4hKeijWyDohxHD1XiaSbcyrEwxnDnig2DTHcvnimuPSYnRGhN6KWSiBXLmZhtgdnCt5ztdXmCyAAtL6GTe",
  "key36": "5v7Ksmx3Dq48paNvRzoBxVWBj2sQKA3FYwUrxp6p8yU5eNMkcm5T3t1EgCHyuGcTAtvmxz6zvtTeYXVFxRT9AQR",
  "key37": "5u1Sm1mp5xupyk1fc16iMoYAjqgkex4gX1LP4JsCpMUJEN1qKk7U9JawyhUzfe8cHpHbD4iuX2U9GefjcBNfBz15",
  "key38": "5kwkRxMvgN42SXkYRSzcDDrFqHNXFS9jLnV9KJ82ectcXfkDG5LZm4gt5bgoxons8Pa2iBSBTna4SirceMMt27JD",
  "key39": "5C1nBKhsrBvT11QQEXZpLuk8Sm6q8KxCP3A671mHu5zAUDD6VegA5Akj9FyvpMCgtK33kterJqLgiEN7WuxA9iP8",
  "key40": "5rYgcgnNhWC7xznzFWtdQJLN1abjxPq5DcmbU53top5hXNGujhx1hhvnxa65NUpQMhQU9nZmFFqtSKE9smMoFX6W",
  "key41": "46gef4GwXJ7LB8gV27FESvePzGbMWkMRLdy8y8cf3yhN7hhtyJKVPASi8wCwUhW8UHQGekeeBUJnaCzpDaDG9Yte",
  "key42": "saeM4Qcv336J8Mejb2oMLF5532rmKLnTvHVEGeeeSZdshPecFnrMczvR6AR4xXfbS6LGjLTn4Forx2x9vC4Es9g",
  "key43": "3E2J5Heh3VReBQdehjL7oSHVVDHc6y9wpsbhNSh4siazL8WSEygLCPqU8wL4AHypTJm3Kgdmxa5MKDJhspPPkz1r",
  "key44": "43bX6Q6E85WG9SavtmxC6WbVN2G3b9fdkRx4wakNE2Av6dQ7Zrsj13mgjaFPdqsAaqwfnJf2EedQTEtFNs4M6HqE",
  "key45": "2CVX5EH678voakqdCVRaw1WHyiDpfF2Rmj3gZjzmivteziNYJ4nuq1nhB88yu7fY9Yokvsx9m2RbRJjeyEoMtMJB",
  "key46": "2ewUSLwMRwEVLDQXAoUms6prJYERTT6cAP5HxZRH6nAdAaydyoLPK4RHvSsWKe5LaxuZUYqxjgh9wmkQ1BKj1fCe",
  "key47": "4Q1g6mRgxikrJuLjDj3ker4i4QN26LWj16WuFMFihSmV5vx3e9pVixhz86XkrzpPyTKmaKVdztpKsX212gS8zrGK",
  "key48": "JdHnTM4meiEscW9HP376hMbW4HTKn5Q6UKhbF26pb12Y1k9fgHA3sPnLQMakPBM578mW9H8nTpdrKi4By9JZ1Dr",
  "key49": "jy25B98S7x5M1tAPcXfhQSSRGAU5Hq4q6rioBtEn8n62U4XLj5QYtRyBnX25KwMGkTpxWHhR7sfQd7xWe8c4Dga"
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
