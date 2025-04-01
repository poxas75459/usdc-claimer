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
    "5dTFwYw9mNbfHoAL8HHfJE6bzKHigGWNcYAvTzTzpFGaoNSWMxriYZQ97BPYohTMEEG37eCCtnPn8r4SPAkmii3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQ7dZe3RkuzeAar4N1ngQLVNBZ5J6f7poEMDYzWQVGiaRu5PYaPAhRGrrLDKPiRVJPCtGNJvgg4PJTYaQqXfMXN",
  "key1": "4Me1vTiigzUivj9wpWMG5BfkDWBunsK9GbPhgttuJB7ckdxCb4UfjU16hn4m6RE2Q2res61AVeaLDG45R97PhZm8",
  "key2": "46kLpKwBWL8cEo9ZKZBvuVQuyazKGuPRbbXzZDC33BgEqQJZnFkDsB7o5rhnaBSiEpAAzEAht9w5pM6Y3Tbx7MvS",
  "key3": "4GtzqzLGGdhrR5gWzkqjEZABFnjRp3z3vEPkpscCsikppQuMbEXySaCP8XnqRpX4ukJjnpfVMinveSRQ5gk6ijdN",
  "key4": "2TvcmQ6ZjmBZJe2SJpP1eSVykRyX4tV3w1goTTCPjrJQfoMyNNXy9rDzqVNPyQviy12c72VGsCwsV4jTUgjjWpfq",
  "key5": "3Ddb6EVjLLm7NEsPq2wKNh2ie7bvs5odwjfESZSXXutaifyAd6vJhjcbpQYSh4ceNKQqTtyBsQvjVNum3T2uGc4s",
  "key6": "3LDBq6cgm32x5tPAh8RExCb7bb42pDKmb6ts1Go6bekkG7vDviH7fmpsuFXjtbgwCkjb4qW49gyAFZPqTVQSfwZo",
  "key7": "2ayJwGs8uhwUmeQ4viPxmHiRQQFsuouSXqqxqUsLhEWPneVSWCTW6trQqCQyo54NWm9t4XVrSyMRj7iARy9h79f5",
  "key8": "Fw7qor37dCAY9YPUEpXizCaQKgGFEJjF6ayMnK3YRYzYAeR3qr8NLvgmm4w75jyZiPEiE59W2bZrtTJnVGjXXSR",
  "key9": "nS2ZY7C2A6KEtJn2xvWuFkCxZ18R6cz4xQGUCRzPd1usN8GekqEM42QiWxJnrFWbrsESGT6LpxikAATpaTkPQ9V",
  "key10": "4fN8FwRhvPG5b6qv9JCWwknneVj3g7jvqLdceGGuABSPDPriCCVittTKCLFUmThNXH6qSPSgis7Rm4K9QqqVRxSv",
  "key11": "NeX2MzmjPZ494Nqos5c8Bx2iL97FshHgRZEeB3WL1CcfDet5qee3na2sFCkgqe7bzUY3RJpTRKg7hWRd4b6wChb",
  "key12": "3JsuSeo8uMqjGbTHrmb8FCTpaBLDDWyHESfpWueBHfs7DVP8LBoJCaVNBgvbxm8Ky3na14tvP8pG29d5N3Z3xRTN",
  "key13": "2coi4bdJCphgMtEqz1MyEqNqxrjE1acFVT33LkvXFEtBhYHk2GeKpnkdfsbKLBB57v4jREGrwreMU4rgvEmgme3G",
  "key14": "4K7y4pbJyTcr8k8C5X1Z4pANdo3Dn5iY5K7GpFfA9L1bjwtQDTpHYkRgfxY5m4zs6E8MTisYH7JdrEt1eGbRg6CH",
  "key15": "4ZkuZsqhT5oA9MX6EkcG79miwzTzZmbKEVWNSeafeLKRvoi6bkZiXSP1495gzus7nrj5BizEF6DQk7KVZ5tQ69uF",
  "key16": "4tEtTvJwtiwCTDxZvJHq8Pq3uMuoVpPk8NPF4qKLBpWKZTdqA81bBVfmfwso7AbnNSMCDk1sqwnPVoEsrMJ8h5PC",
  "key17": "4gMn9iXrDtQ7WW8DBqbtkzviKQmYRQxC3vcixLVedoFvuaNLeaTtpYePcyx5qf5cLzLaJCLDKv9xtFjA5m3t62yN",
  "key18": "25pNLKenUDNQGFq4kA8sitd3BoJNcpV2R3yXeyCuAosdcWBX4SYjVWPerEw55NHN7sxdcoPuLsaaDLQkreaGzYiU",
  "key19": "63aT6jH6hu767EmUayg8rVKtHNJfUKvkLiThMNAhuHEYvMyt9vdqHHdXBrbVjG6nofHcsb2ro12NG6GqwQBgHdL1",
  "key20": "2b8mpx8xBZY33ztLzPeyAmjSyrukMU2q28ZFDGrhu5ws7oiDVogkSafDtoYpk3Dnw1tFEU5S6dJvRUgpNi9jUXmk",
  "key21": "3FuNm4qA4sJyYcDoZb4piK5ajgecdmic4AujTr7cRhLwYvvGZ8wuyNT6AWpzoFPfQ66YdohjdahqBdddDcztB2bL",
  "key22": "2aseXsm632TZBBDss6f39FHzsNAChAeSXrGi7eU45LxAXqSvgzpju8hnMCAnX7UrrjQd2Jmi7vs6Hjyyh7EbCqHG",
  "key23": "4VuBgbntuRzfsBcUYz1HDdDnn6rwRUpJbLJMGBzjZC8qsJyGSFLmijXWCjLAQpShWUJPGLJevGbHbpaYP5oV2xwM",
  "key24": "iQX949wWofGjd2ZAtBGWCCGpDJ3wyNSfmZoQ2dAK1sgkVFqrHDToG9Dbj4AEqQs5Y1gfWpA2WFv12X219bJL9Bt",
  "key25": "2yoFtRTu1suN2Xx8giFNLASqJABmF4hjTHdWV3FRvUJREaaRAvcPLBWC4x7ieFtzdsbdsFnDzDjpWoFPVKb5n94S",
  "key26": "2MPYWC78Zt44reNCb5xktCxyAZZu92vxs1pkyWswJBBPUZcAUJRL2aCS7aEtcctptRtsxcd8fu8Up5WWv2oL9T8g",
  "key27": "51RHAmgNM6r1oF6cbw6esvSJsMLMxaZn83LUBjXhzi5LBtzMcnYw1vCHXMBWjnNGmq8dTKoRwXjZAPZM7cM8Lbzq",
  "key28": "5D3H8K3W3M5228XpDqt1DJ3UGcFNRBJpf44L4qLS8KMBpz8mTTxyyddp5YDH9JXMqiVb14vRyqntg9pPjgNMVHfs",
  "key29": "5o1sisTWNte5kfdrb6hCmbdSQVedwvNFBStspKxTqnZtekcww1GB8JL6JKKBivbDyQmcZzU3C9J69Z9WRjDXqVe8",
  "key30": "2cqfMHLqrGH99QTwDcdM4BZ33cQi6hfPpVbs4gqD4LLMhqM3V9eBMLuTypdK91L18buV2293su6dPXmnUXfAv8oX",
  "key31": "39f5jFuD2NsX1mfmpun76y2druW7KFScAYCeE7ZWs3r29HFhdDboyVXyDFiD3kRyJ7VzqY4mVt7v4vAjs1KDKi99",
  "key32": "5uxEhGcy9C4YcEtg6zP4xgAzbfDB87V9ePqq8wMuDNdd8fdm2AS4Dwknt8y3fkQfs6ScqDtisNznbC4UU3vWffoW",
  "key33": "3ma42AArmU1UvPgLrbTdXvfF1iU18BTVjfVKEcdx8GVykr8seCTKCeEV44rkgJdn5zBdYp9uV1WWiPAQj78MJkCg",
  "key34": "5cp1ZfZGYFLNM963JPJiH23EoZRm54oFq2cio8tRztTmgcMKf3aUBVjVud38ZR8zssh2WygQenrDu5ZUrKU7ZARG",
  "key35": "49NiJDbQQ8zgNVgGaDGPNgUTLbSeeA48hkt9w5gt336C8dxQVFcqsjRogySpRSskC4StDvEfo5sT4Dtxjuf1snzG",
  "key36": "4a6GARcb98WTisicGgZzXw9xzs7KWJiXHKjtPp4D2Ygw5VhkkE7wNLmmJes3hWEr2vK31jQ1fHebZ2vFmWumEob8",
  "key37": "5LRHLTzsF1vNc8wDqcsQT4qVPDCa1uKPLLAwNW2MZewZgTFZWnj5FRSjE2df572fZPqcwbBxjBsXkmYHXQXVxmcw",
  "key38": "awFodee3h23k6WGCd1ubzVGAHiM6FqmwC5nU2KQFFu6iyYHKqB9Whh6FQMixC1K47Y3bLGgenrQ7T1gjKBG19ds",
  "key39": "3kt2HSgAabELc9sTdmEghAykN1if7E8zV5V6zgAhQJo4JEWxkhZ3p4wtFZvFDhW7SGkyhiyTy9Q9QGpBUmUcLcq2",
  "key40": "THPecnywfYe2Tqv6eC4vU2xaJTqH374GJSc7cudG7w3h1yGWxZjxLY5Q9ZfnynLYdgvtmrhWFUeXnT2NXLhrSvA",
  "key41": "abxHkgSSAMjhEBBsBmJbUZEFhRUQMsy8R34FbhXTEzgb55ZRqRzXuZ9JRTpHRKZcH1YDyqqPerayqGstQpqw7E7",
  "key42": "vTRqJo5RDLmRt5La1Ee62LwMKsWjW5aZF1v6M7iiGoQJGrjqHJDYqBQuNFwMocebpCYAHVK3caRHxEEeFPvy8Pc",
  "key43": "2vAwV5W84KjLvREBAymkduGDj7y3EvvWqE5au9KzLaP8p674jF9tJcYMfd9FBCP9cbtBErqMh4WvejbqGVsvj96s",
  "key44": "5z54fJdMNZWSroJ8b23JJZ6VVgkwYbghWYZqHoz7nZAhXHR38unpRzKqou1XzNF9xT4VvKWEcTcpLtT626eJpWXH",
  "key45": "5jgeujeFJRZsw1cYVzRqn1XnwDreHq5nRq4St56R5G1APMfz1uLRaDYMEkpnriyKmaczXZWhgNtS1t89spEfyaUv",
  "key46": "34Q1e6VSt1YELqamYL7yweBDzHaiBLRg8G3nniVKa1RsuWy42vYz6VV8nCRdZbdjn9WLD5e9uJ18BgJuzW1vzhh6"
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
