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
    "5EgHUNGYWTj9BUoG8CLVbC1f9Pg3syHWHGdVm2jXXMkyJ6Y23NvkhVW1vWuXh4DGJhB1eRn9W6H2DZZUQbNqShKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFBJzqjhQQnJMHEPxxrkWkzq2bHRxVkVdvDr7PCGP2tKdgNtGe7R6fskwYEC4f4QSxa6PCc7aaE3XE5fCbTxZnZ",
  "key1": "4raFbxStgFqqHHTLTBSXBiDsDJD8b8iZ6zvYJCjeqRnMpxM9r7hxXdFx2w951iwBqghyjWc7qAujc4ki7CkQJPBd",
  "key2": "M9TH3rPXAfYGVxJuviXzyMHfnmF1eRqVXxNWgjwBgCR3EEAP7U1WRwBtbmu3e17SYx19cHvah9wvoDjcPfqvLj5",
  "key3": "5ExG9GDPT7b2Dq7TyuHjybvf19DpM94iuw364AWeAY62exzx3kSafUWv9TzH5a8fVANkFDerKEskdKDawfEPWNzy",
  "key4": "2UjAaEkqQAhmEAVxXVMye29KvhMogxV5NR9V5SaBEJDW4ycouVz3JC4dazhJzTkivoTaSKrCNhb8MyTDE3VbG3PB",
  "key5": "66w7Kja4Rz8DXm4qbU2y6pGB5tvkYXK3TiWFGunKaqtpcLkRiSEvwSHeZtb5JWrbeKFbZNh7p95Uz9k5rqxWQm3Y",
  "key6": "5K1F2Lfw4NLKcs4KLbUt5Fqmpfs5jfABkxDiG5t9CVhqSqp4hiXdmghSvDh2yKHaVPiAD6Kd2ou1xGSTxZykVrGu",
  "key7": "2vBmHeGoMsUVaa8B7n12v3wSKCqXnPA6CrYiFphPdm5FRtMLVLiMfvGjU8dB2ahi5s6rnF8HmMyMS8C4YgY378oH",
  "key8": "cfsRTxZUduzNQjGz6EZTKf1NUxmDzhT64GTMQV68Rji8RLx4EaCXKiEgaRNUaxMyzJVK3KnEUuRHZW9akB671ab",
  "key9": "3Xvnc7cVecPwv6uX3M2MWbgwZbCY8UmoKYbcfCBXdgWdBnrViM58mEb4F9c3nFT2UXXnx8AXg27WaX3bPde2fgWR",
  "key10": "5baqaGaJqFkVm5b1U2Q63X5Z9WQcAP57ufwZzoVRyKjhy4yGadZ5X8sZ2gXTFXjxVnYfc37oLPtr4EpA3JHTtEeQ",
  "key11": "5TNnQNwr2xgfg8dchvuyJ48mr8tUFdq4KHyxN4Q35KUyk9iQy8VQzDA6NBUWcymWNx5xLZmLuMPddxiYFZB79TAP",
  "key12": "66PnRXk9A3wEjzVUMCBdFTCz8LCmjtZwp6RaBRHLZuuiSsrrEMb2gH8jsuJNbGaW7mo4MUonToo7Fn21PVoy9H7T",
  "key13": "3Nrv1pyMChrFATMCNLnxJMwdQdgYteMTCYwr4nkBAXZHtmpaA4RPf89vBGqwYfjphrYXfxArvwjkQkzkoU66DvpD",
  "key14": "3ZEZ2ENDRrP7A3riYDe82DwAe49yLwrbncaaZRAs9AC4R6DxhshVVbYbdczaCKYcHgjdDn5gqSPRKmLwxj99ifJp",
  "key15": "59iy357HNu2ZjcPAYKuk9ZbaenQH7JAgxhgqX65DVsstS6AN8dryTUNdmzqbWmEYKWei72Fy1YGXK6rAtfSsSQwK",
  "key16": "4qivUfptZG22f3wwCk8aYYyYvx2c1MUCQhY316cqkjwFv2M6E8Bdqta4FyQZV1nVcoSzV8pFRkVF8P8SL5vmsHAd",
  "key17": "2VpvwZ3Pn6FUW8T6FJ12vxXQhpSaH32KMLZWUZ8X7QKVg1x7J6tX1CN5xuByWiUEMB9PbDPKKgfdQR9bLDeiGPmt",
  "key18": "3qrmjLpcetMigXQzoC1AWgJJYscdVRvu11UnCGdo65aak9QBjrYR8WCCyRPfWHQj6NhzVBGqij6fpY1sJq91xPde",
  "key19": "5xy96aFM9QBxrmpX9syAi4CFiAJVNMtDsbiW7FA5xmpoqV8uosper6GaGKirAx6H7ZCX6ZYExxeigrX6jgYBNpnh",
  "key20": "3jxvV4oXEMMjztcVHu8hYZVGJJ1K4eUwPfDz2HP3AVEwzeezCaHRU8VuhTxPRBYxAfqc31n5ewMnfQrYtzWbH71b",
  "key21": "58Ne2eEet521BcYgcac9zmgqgzoogKqjRdEfrUs49bAMthBQtkSS8sEaQ4kMSHMsrfzEDcFc8PoiVef5bUBetQPS",
  "key22": "2pVpx33YyWmRVaJhLUww1y8tF7aAmbUDgK1prDvrg35wvZhu4fr9MXCrsTsbEzUo41F2DkF4EWfWTbynTxi1Lpdx",
  "key23": "2FcrKyqJ7zpaXxvt3uZ91JVA7SLSHSjAR7tdGr7KWCB1Wq2fnqrWfFvobqEuSadYNLtdZ2G4R2ExujqFASaiCKjF",
  "key24": "51nvBgpAp9xkPhTE2nJsg6D9DjhSsSTuZ6n6yjGdrSZNhhnUph4u3deNPSKhLVTn2qNq1ViaBmLkANAmDeuV5qmk",
  "key25": "Teb9pAaXP14RMFNsmsRCAvpaic1XBEJvCWWLdf5ejVAmt3X6VvbZVStWEfmPfJtPDSNB1pvRpy53JQHaWjk1Y9Q",
  "key26": "3zEpYRoceMKh8zeUE1QVzpUEUUbrqdDV1biAVWRT4XwjMK5CtrxicUw2d18KvcCErUKooboTobgLmb3HLHyk3u7N",
  "key27": "5jTfY5xyESdYW4TNUEfBW7L3Pn8286YTBooxm53trr5WVyJYv7fCyJ5Gv963gWZEYrmiA6WvkBUeYqC2GEVR7Pha",
  "key28": "63uBy5Wt1kwyLffen3o2z9GhN4V4jESgWMApzLshAxF6r1y8ExgMrosL9BrWhSbYKwfV3iiFQZPiLy3PimNRzykc",
  "key29": "2qDzYgL9jK8X2wuDyfenzV7xVUUjjaF1Spg8JjmkrHKMxECgAaSCiMZZDRyb9An5PsEU7QSQayDQYBikSEKfomhK",
  "key30": "2xgx3HZ78nvH6KfAotjTi1Q4Q9Xs4kqVtMGKY5gMySbR1JjmgZ6qR8ndBk7VvbSmrgJfMJNGYDYdUdvSsrJpqo6u",
  "key31": "5hRKRj7vx1zvYeibkBrjp7WRuUTSSCii8jbTRvKHsNSGNWvuRvokUazRMJm27tP34F2ANaH1XfNQEcisBrT731jN",
  "key32": "YviwjkfuHukbAqnp6BMDFWyceaympKij3uZZrD1nNR1tVjQtMYJH9qYobQscAdbKN5ejL8zxsDDCL9cVY1Yx4S7",
  "key33": "ZeMSaZLRthTmX7dGMbCUe6NJFDcU3N2LPCddHgAhtwZJSmK45h6Ma5FHsjPNxaWJKvWDMfagYM3RHXdwGei8ZwL",
  "key34": "5mJwVU6ZF13yKZJxbeFno7tQFBCHXFcKxj44TBYJC2m5xdEvurtKTRqsGkEs2JNDmGCBsyVuLwNYD4yU4EHWU7xM",
  "key35": "5cLMqTtWeKB24RtQyg4MVXx69eZBcn2RNC3aYhnnkPdXsAsBmWw9jDLTZAk6bhYT7McrDWhkCRZ7kRoJ49pUBvvs",
  "key36": "59yaBjNw4qKBKKnD9Kbeuohp1ri5wrekUpRSrLuiAJ3ff9SxeqnQtjDu5ac8xLswXfBk1N5HMGsyshkiuJ7Si4Bk",
  "key37": "4JfexvZJCZTDmc1946dDKiXjKF13vKn31yJ2RBtooq5YqwejZaeNZ7RkvRdzLC9RxfuFEi4tbNweLBmP3UDhcQZP",
  "key38": "3dve198EwNRiPnwLcBx6f9hweH36co9Kkd66MwnLJben7T4KgvHqu3JPKPay6wEDcUsNt31YMR9ZJY2oYJEeShWL",
  "key39": "5sC2Vx2Y1LyqaYzU4BB3A1eEvecGHgsusXKpSwNNzb8bf58p1qhfgPz2ecx8PeTxZwcdrWB2KgaJg1ykTmqmCRXY",
  "key40": "5ZGsnhHKGtjyGxo8pbnhXCn1GFLhE2CnxtnegSqX25Y9YS6vpjaMw4hDhxyMEqfai5JCyiSF1wQSRAc5vpwfj93B",
  "key41": "5iCyBxpdM6FwyuDneopzjAKxCPvYBK6sBnFHHfKFCiYK9xMhkw3tHmxM9Cj2t1KnDUAmSA6ALeyrkEvnKUCUV1PN",
  "key42": "Jp58UXP7yFnKZhNRafAjauDZxo3kw8kCrWzCRa4n4p2Pgxwza85U4EbCzW7UbqfZtnS6kAZJfD984HWdz8SARV3",
  "key43": "3oVzZqNrHzD4296dw1xmm8FUcNEFGXD1FSyXhTsjC7wKiWw4Ct9AWeU3smY1P7VN6ctSkDa6vJZC55m3SpEftX2Y"
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
