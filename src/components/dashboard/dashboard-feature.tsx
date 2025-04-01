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
    "3SLUFy1edsQyUupjmdRAuR666kzKz69qKvwpXj8vbg3KQULsMtUdgqcWoaZp8876K9pwQakSyu9Ld7j39mwLCRrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W53ZfbUxsPtPnMQ5ip5fL3MBGtpbVxekN3EWob1yiYeCexnxKPyEXPQKNHs1vMQtXKXPvAjBw5VbhdBKdGz6SWC",
  "key1": "2uBq5DF17dHZnbyqWMc4Mu9cNBLrpUs4AUtXvbFuUJnijumLUfuj16r2E7JZByPzAcNUrAZotaqtMTnVv6pBvF63",
  "key2": "FPbZNUW2nsZ4X8gazzdsB9CAeRSEPv18QoRwNVxuRu1Bed5rJyzUSGgwsg5vBSk5quJtRV1qTmJzzFzEYjHFyNx",
  "key3": "2nU3QUvr9Q6eQrMaYfeKNvwiwL2QZQBHm839zNeccqPPjvvwLCnAwuVFnFydNDBAu4eeX2wTcsUC5efkrJofYriV",
  "key4": "663oiV9YUAWoMEKz2JZ4g7txM2psC5k16w9WsPp1grQ45ueUZ9MCLTLPfPB2iHVR5tb7xwf79DmdbbZxhqVq6d3E",
  "key5": "BWmBi5mEG32YePGD38DAN9R54PrnT5etuKX8mV8ZycepSaKtkMXDtqa8n9GKaUm1DhHuivf7UTssFuHDfgm1N3u",
  "key6": "GWuLDhmD1tiqFg7MqPXSroZy9QirNLqBMAEktUxpDEiBZQVJe22DoQqJ1en8QmBjJhRD1mCnUnZKCWCZhBHHVh6",
  "key7": "3jGj655xEKKSi8GYfwkTruToef9YUxnv6tJeP3j8LbH6gKfPdUnzjmPzUHWkX6xaBSBYiTHDUYsLYarLxntQAo3L",
  "key8": "5zzm9J7njc8XHLunHX5Eykm5WdRFADEeMH6xyAPZKHD7bwSyuLww2oYC3Bas7Bzxz6rbwmT85E4f7X9ZkzXa8jtT",
  "key9": "4dyNEq9yzLfF9dPKHxZ2nN6KxPUQ39a3LPq7a4QtaJEMVi9HmzmU7xaVQ7yQbuvCxLju1f92XLMeFFAYrFbfbSyt",
  "key10": "392N5sBv1je5chXLHK2BvxMZw37N6Ptvee6yXN5bKxU72BycTo1wkPFhzRBZgQy3xX5mTJ5kXaYRKxr61FRuAEWv",
  "key11": "3SJJVyMdQpoAw2LRsgyyEC3jbJDvEwwF9a52trWjF5dnPBbketSPcRXqTqNSXpA5MiFQcSUuoLSPVjeWwovN9CYo",
  "key12": "358w1zoPKVBudcLAmgVKgTV8xCREJvXzdKb8WsdcHqwsSUdnHeHgmJT3KxXwz7QPrEijEUoL9HnRa8C9uUNCbuCc",
  "key13": "4KGQzYeY5N79vfayq6cweLCqsgnMxiPfrPTmVrx8fZ9xy5gRf11JuQ7bzteKm3DJp2Rb5AAMQLaLaQwV9pzy7G6x",
  "key14": "5Dg12A5kpjrqSo3od3arhyvPR9JgnXRJnZpNGwWvzhyLhQU6GVFECL1p8AzqByqk7fHYa8LX19QfzLdQApbuB1sq",
  "key15": "2hFk5KRMXaXRySZFxeywYHrhMJv7e27GSsB4BiPeJ9D2moEj4SEh7nXsg9TEyTweYHjkw55GJsU3YJyfpyk8wwvh",
  "key16": "22EabBTah48L1QYVWk1tqimaJVjVGQCGskXCk6Dbk97WsEFCVzptyQQR5ALW3QjGcdboHErVekvGFREDGiPgoUQG",
  "key17": "3CeTEsu8KWVnhQFia7E9zNiQwWz4Dh3EUY1neafkewUaiDvRJ3YZpHsguXJSN6izKSwwotWqxgA2sogMj4vtns34",
  "key18": "5HK6C6MT5JQ472EdGcAwbtPDCaWtuFwhCPETrmW1DkNT18jZu6Ls3x7gzW9hZXsn8wJvKjoGuq2LCu4B2dxNgkLo",
  "key19": "fitNEUWzLs1E78UBBLWcEkxxUCrkLRc691A1j5fFPCMEyXdqLJSHvGFHDX2NtwzXKx5W3vkzigHFhWRSFATADfW",
  "key20": "55dDj9gfbVDk6jhK4ER1UXnGeNGHYTyjGUK7RiFzBq4cCaAMzgn4neCchcYq7JSxXkw4u8gEXJhFiW38Y8T7HF44",
  "key21": "9Wf6dmSh1npWhR8hptB1eCRe8MCa5DFrXm9EQu4vBRMxaK4DKRdxcM8ofrvhivw2b9B9C695S1mxuU5XNkqzgaQ",
  "key22": "aby9fCHjt3kRNNCwrXayegDsVBF2V9WK69jHQ3zC6U8m3WWbiQkt5pfcXXZJixKdS6QtVcmFeX6YG1wZyVerTha",
  "key23": "3oNTY8CVRDHFfonkdfwr33wBqRLp9fLoWAHiREg1xuYLcbCV28Fj4HdEXd2fSUqEks18saVEvh9zU8wYVjbmHnmu",
  "key24": "5zsTnqGReSNmub7VQHDDaPc4EDhunSFurzUcVruKxbSHvhH5NRJ1NStd5NzrcCPVL7PPf8vJUYqK1EqxsK4rHZKC",
  "key25": "26s8vB5c6EceVijizFNUBqTFtnAznqwKSsAisfnRMpnYYxNJQbZAqFo5ySvTLbbs9H5Xt4VyDms7RgBwwT5NyS15",
  "key26": "4CDpABFfqQVa3MwkLSfeTpbvERA4C3sGGCMPuhrcGxU7tMvnyizvrWoJi5k8WbaYvhEWvsbV9ayXi6UAFqs9Eq7M",
  "key27": "23w1KPkJG6jE4qgJZPc4k7aTJvPGU7UjGBKagUm4cnemmhSBEWG1Sxy8xWshzcMY4bXGYsgnyppj6VvNLi6ofa3W",
  "key28": "i2SdPFTuqV9S8C1LkHH4KeRaFXXWmzFQZxcz5FhXTn6DzL1zP3BTJa6eL67JhSWvRX9m4cx4g5ydFTNspk4wc1D",
  "key29": "26i2cVFqdZR1AZ1rWHNeD9P1g9kfJv6CsQssR2borQLgyGeyC5xjztDRJ6ZuNvwKNT5uJyKREiwsufpf12iXHXzU",
  "key30": "4QRPWkZUJNygijw9woMqB2DT3wCrTZQjPA3wBfWw88TCcGs6K37iygf6aZHTEaYgBCRWnP1E9czxMsh24Egn8vVo",
  "key31": "3bzVRVQZyMnExas8gYkYgdmxkkm1EPveVyT4SArSFjPhYvfiP9FnmPbmGgkYBHDmuECEctpcua5YxdrFXgJs8eDk",
  "key32": "5XtJMkZEDreVNPsEFiwDFWSZdM7aJxK6oJTsaLuDdieZJ1PjfVizo8vtiKrWc1NU3QSTgtRZSDuRLma6JsEqzNwZ",
  "key33": "2ZRCpvknaexhf32DycBdTGWPikhqjyXwTJzXn6d8E1JzYcMPbWbfJHLTj3X46GSmAJDvmX6FWsfH8MTmLbPBSgPw",
  "key34": "p2NSk3wcbtxX5ifEs3gTf51ZJAXtBFUg9NAGBtHLaT4MRPkru43s7bvxodYH5tvynGdZkWCNmJHGKyqkhtkroih",
  "key35": "3KsC4P2Xj745XiZW65ACxfLnW2KfDRQXAWYpA5y3isit1yKDT5wz2aGunkgUc5ouo3pZLPFciAWHfv9tVFLA1Sbp",
  "key36": "3TvuhPnR1DjHsoenwBtuqqCGWuBSaGSmW1YLfcPrP4eBPjrbC4xnmswYWVNZuser7CGvLTtMHLf5MNFaS97jytZ1",
  "key37": "3x8zPNujnseML5Zd3NwWNYq85YzLefXT1pk86eDcygBTWiwX3VrtDFdcwJgtZ3QvWENsPagFcF2DLnBGKJK5SUuS",
  "key38": "2BXbDvFbgA9HCQEMk1z3Up3d5AKrcdBn1xgDwMAbGGAAa4BrxZ91wMjRm9RmDgkxvfBmvKxJKMZtwY2gPxgFUDQV",
  "key39": "2RikqiEozy5HU8F1do1zmQvidQH5huqAEQ7LnoTJW5mZ9qnAqTZY6jgTH3o2t2XDXXyvTeNnCCrSV4Nj7iqTjWdT",
  "key40": "4bMbLQ1kQUHaLsVthPkB6HJbi2h5yAG2KZvg4vZtWVCTx7JW4x2UbmJnAte4AnN9QJc2D5C3QedoFjLCX7dMruaK",
  "key41": "473bdDissWVHB9LzmMydxGGgFHbwNa7Wisn8MNsgpQcXyqKErxxsLaAy1KHiNAEShRutyqbw2E6SxpADEJaphjVR",
  "key42": "2njrBRKAFsNgS9Dhvk44rTibQchXBXuoyje9oBDNDbnz4PFCBXrQfU8eGz8LCRh6W4wpoCPMKyTCkawFjq4WvhxD",
  "key43": "2LRAiD8wJ8bQk2zSbCrEKUVMsc6eJ5Rx7e6CqgkRbKCS9SchYi1t5RdxMjnVf5ers5MixnQAuLM6CKpyoAcVhfk9",
  "key44": "koVHZmsd9TPQpFH6x5khuwUo9yXYAe1u2mAgBTJLa2CPJqoVbP6oLzsRDkN1HejW5nSMjp9pRqAi6sX3tfi66YF",
  "key45": "av9TU8ehLKGuxeA2h5WivzRDCWWtAipidUV1JVQ77sSKNgSfpWYwf64vYkWnrxNR925Qs9kqjNd2ABV2akKcBEd",
  "key46": "5rZWUAXKrsCrdREd8pmBqQDwHB3gn5ejt4jANLsaEveGMoXk26hapuEUp5gQUKxf6nt99PZ9i7aFibyyqD5WWm8K",
  "key47": "55XcFw9HNHNxtBsCqNA4nJLGWdje3j391Wk7teKnDjTqSjhLEokD3F2coPJpywpWp1jBQbgAm7W7gpddyTL2dynF",
  "key48": "qb18CuXYPsNsuJMeCZRhE8C9YoqZ2ZfNCBm1Y12A7rcra8CZFw3pLHnxtGeXqfuG8LCJoKQ6UH5hCA8WzUWf9ib"
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
