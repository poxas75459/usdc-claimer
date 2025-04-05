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
    "4ptcC6xJhR7aN5GJB4XAhbHHRNAmp9ygmBrVzpJJR2LsvhtzP6hfBsME8twCBfDH26WvW5nbJZw3E4wp5ShfAWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDTTAWVcVGs9kPC53S2aBRV8KyFUmXZQy3CaXRBjz6PpKWSvwM8XAym2BYXu18oX4e9rVAwuvxVLG4gADjTS9w5",
  "key1": "4CmT6NeCHYTGWg1gjX956tTmkWMhpkiuQyoXagso1VAiTiT2m482hZ1w47viggnVJ5w5CyfibaWzMJZ7iczwPZks",
  "key2": "Nikf3qhUyYGfZQpWZx7z9Hdb9pBG2ycmX1yEEevZtK6xgv8GpzYcqxCd1X7ciH4FUVLzAWy86t98JA4JWCjAJgj",
  "key3": "3TArsxpot4Nv8wgrvLoGVsZqMSPyjyWYFmSRA7q81TRG1vcBKHiip1QTuP9DVbrHbDcQSeTyixKdBGBEZP7XgLmS",
  "key4": "LdD84EKy1foYaBm6KRwRTBrrjFuMCwhRuCCDzbhy7bhB5pZ3K2n71u9oh5snaLWXCipu2otCAoFDG2kjdkBygtT",
  "key5": "4tRTQp1aq8y3KfADVmnq8zW4c1khfEQ4HNxndp1GRBy5KMojJh8mF6ce7EJZV4KP3RAnbGrZDMXP5RjpM1YG7mq6",
  "key6": "vxVvrWaifPgsFJyAfgvH4j5hyx6iesoK7AZNhvmeQpwxfr36FYbBfFeToJ3oF4KFhg41WCo5NNEGw34mP97x3Pb",
  "key7": "3AuF3HxgiJuCr8uWqQYGn3AsEcAfyzxKarun17D9iwDLHGcTtLB3EPRd1GBZ6hR4q4wHYMpdWJj5hJrsjmBDLyh3",
  "key8": "3X5muGdJ44411LEw96HcMqua9SBEZnFSUuCb8bucx82EBRdMPNDN7knb6bcGfMcKPAdKbFFuhBkdYV7yX7ZbjNP6",
  "key9": "2amPpFL5rXbn63WDT6qBS4tDA7onVGty4JXENqjKoeUf2ei7kWzcKbqZAsXqMuNP4QLn4pc5GaHpfZ9onqY4KcVw",
  "key10": "vmgACZaFdd829AHVruGtFifbxch4NZG3SAhTNSZ8Qm6jsaEj25m2Prtd6bqPEmiq37WW5a88WHAA4YZTH9LqGLx",
  "key11": "Vbaf11vQTxejWRTu3CsEJJB68xRF2No7JU7ejwrxGvFbpyZXHfFhyL97qDcccHNhnWj6sd4ciNkbZgsRuDLcnWj",
  "key12": "5vkXRGFJyFn55gD82dGsh9DYu6J4DNoZ2h9mFzTzSYuUjEd6CcXNAEbbWtF6gRGbtber9U6Ve39YEk9JY2PW6kRh",
  "key13": "FT4sGEHGyT1Vq6psPkCNa9sQq48grTXMeq29HUNxHQuHmLLk4y4VK9SxXX47tJa7wukYii5V8m8soH8hZBidbsQ",
  "key14": "3UPQE8iFXxhCVorNCuMGQA9GJaUWhajZP1BRwEarv8WFVNhbwiawJXFstNqP3K8aSGPJL4dbcbqfBnmg74dRotWP",
  "key15": "3du9E5setUriNDFMjh8ZBZZTh7rh6icZPPLcALC99j2gJuSRMUVh1dDjgPeSNcFiv6w5K6bvrk1BAnYV8EoqJdY1",
  "key16": "5EAAFdvRpHPsNVNoeEsTaq8qv4DGLYx88jgP6BK8mxvX3mXYX1YoMjTy9HmGFAgwxkWuPEJdUA3yvN92bfcG4LFx",
  "key17": "4mAef3LKUnmQi29zr1Yoo33sradyq7Q97mKFpeCLa812BN21CvfCQTzDuF2YjbbE12UCoPzPv1hKCQTrBfcLWPgG",
  "key18": "5KaniEhN2JUBAPyq33hY5gFLRmhSjwAfpALgBidYUh4C6nLWK6dy5eBgj6PswmXFaYyRuDqMs2trKfWxtLvJ8W1C",
  "key19": "4wv1NxKY726ua55RsnMvKMGmNf8CRgMaszPDxczbzLUcSMuiLHeppDDTj4aF7HorMk3cc1U4nMEjR9dEnuP5pwuE",
  "key20": "21aWqGNyiejAuLrkT6QQMX8GeHPPSQ4KjKWNtLMQs3BDCcDTLht4NnPifFN3r39edKp1r5DgET7MjkV5xtwPmCh3",
  "key21": "46b7QABCszQu1Qcfo1eUXbGGZoGL2Ns7b7hdmqaTxRPqLPRMuEDSEDCdNDrZoGymKKqC5VKdGSLj5cU3omSEUaFy",
  "key22": "2EpJv7k2ZoyfR8GV6bHwH8FddpdUCFDfYwdK17bW5DjKs3VxRs9yoMdDivpeyqFxf5YcqpAdBPTbZb7XV7Qo63nW",
  "key23": "2gKauMP4QSjwnTZrXjirNjrnDPVcf2uRzfSb6dnvWQXWfZZ8df6CXq3pWSv5ZmiqUN18HNp92nXwi4ys3EXv3vW",
  "key24": "65XKsm54yV4QnQzNRhNeDfbiwLEHKVHYByCKx5z1v34CdfBP4xBAHxSR4FrhVX6TzLXG52xhEKFYVguLnok3vQ1R",
  "key25": "3jzA3SMqEkkDsSNZMFdW6vSjV7v5LaXkDVicKjC6meWhH5XWocYHMpqNSgwgYgogae7TSr1t5K2yJanCWF75oLRm",
  "key26": "125bYwyTqy34UZtY4EdY5vJSMPics9JJ9TSfyTkV4N38PMcrBKrhJPqqoXKFkDcuCXVTCPNHriebX6v8d4NGWx91",
  "key27": "56KQb86LPugXxSnSLeTvHExyZELcLwnTbUgRnE8zd6XHKDhkuZvWQL7wmzar8hGaMBCXRZkWqEBnBXA8UkN1UssW",
  "key28": "RH4rwtRdBwN29AkDSigBzWDyYHJNdg5R1mUBVGSqQDhhFcDPgZSyCoKrWDeh6qXzKgsEoDQvG3FfNhjfyZJ1Mmm",
  "key29": "szCJEarQKbJNpQp28BKZ9LPu8Zeufuv35b5jJXteqkdz51dschMAKSXzWrgpnNH7YhJC4yvxLuW9jXj6xzmde2W",
  "key30": "29ujctZDTKX7LeX5JZCFSESCek724EwZ1dhLw9kLFnpD9Jn8e62TcwQKkbfgzK6XKaa6w8mbq5WEpknNpQmSsU7C",
  "key31": "FJX7TWn7ZCJ6aY7jjkyhpUspSYA7Mui9t4YWGiDLvz616VwYiZpcEJ9iAF2rumJtxs8K9dsCSmTWRmP8DZHiTXo",
  "key32": "2ZKqEFoHWkaAaQ42HJ5U381PeGmDrsQ1WSt2ygYiEQ1Q5FGH9AFNSqVd1rGDjGauXo94jtKARqWsSQvH7y8iUyJm",
  "key33": "hZxjRb96h4voToZ3u85JYdwp8JqdKFDo17EnSxrBFtJi1v9dbqUYQ4Tnzvgn42KPWP71kAGMBY6XU1zpq9gKhCb",
  "key34": "ym2oAJBNmradZ1bEueYnugDuXS3E2LpaBfBSsrCNAEDGJ6YQRuHFYW1CpRxASMhvSMDHtVKVAmXCmKxTZ1hTfiN",
  "key35": "3XPw11rxWmrpx7C6HRWfhBihRZCeXP8AXP9uTXaVJSxyvvRChixhbRQeUTjCNYFfJH8kZ12TKWY9BmnZraLMVU6A",
  "key36": "23hL1ikTk51k8NnsBg2QT8afEH3t9yHh6qn4qd333zQ7geTmBs2tuLeZDDGr33qs1irsrapR76kW3wViBwjfycJq",
  "key37": "EP6MZYLLcm7gfiU4uU1tvsXTXVJVdyjsgWWMeCRTHiJK5rMreTtgFJ898JmG1XdFzC6WbYhmHYLKdCeoMxRZTBo",
  "key38": "5DffwtWJx1XZsL2cDzq7RCdqRGzb7fKuyAdYkz9NEtDKibR8cxpYEG8JKUK4CJNttoKDDqek3n7MgfGVdySo371f",
  "key39": "h3fuziq5ZMCGZpLkngRniHaXFcPaN9yb91BNhAphB71iZ2cwbSUUXuAvbtZypAmhej7hiWBiSTD5Jg9BXHzsfyB",
  "key40": "4QYuFuRMM4ZU34KV9s5SLmdc7Nx7VWCJWbjuyBAwo5aQfbZZ1Se7kYovrRmfiy9X4ZcnsM67kG5zSW4bSoq1BLiU",
  "key41": "2dRhPWYSJVcFSDPjwsZQM1ENheVtxZdy6nhYTYpCszg2Z2tpk4PYcvNBphmdYJK5NKQg64D5Zr5WSB4XLpgifb7j",
  "key42": "5b4ZxjSrPchLDk31DavkKPCNBvbMxdsSseaHom3yt6uRCcT4LWNKSdX9BcLCkpk3iuZ6G3TSDLictU248dAJ3wci",
  "key43": "5b2pvZwyGN954PEmYfR7VK8M1kfwpCQsXixd3zWMEcYfv6iqunzHV5i8vhkgb8C1K4tAa5ZXNJE7AgqRzC3Axqv2",
  "key44": "3zW4tZrDGaFCNzbhFmZt22Btcz9jB4zbsKpEdgeYCLtuujJc4MjBM9ty9rtyjDtD8mw6BcJQSksiPzMT3AmxiDxZ"
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
