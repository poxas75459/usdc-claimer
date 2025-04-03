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
    "32N4uY81CrLDtsXgTHXhmxfVH1XAHjxujWa1JgEnVHWygetECBpA26cWmbHBFuENvUUEpAUNekZxtBzNPuXFSddA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrUHyhiaRkdpJee9RspeDw77U1DbbHmGpTezRGZbeq3PhhqZcEBNbYBZXjpeSefr2MnvCySSVKKFEC7Zey9bxEc",
  "key1": "3MiyNgoAczG2cjjZ2CLnyi2Jj7ht9mntnVm494DYPg65SyHjgbfzVP23hHZVHC2TSKts22FDeHfLmxSsiYw8epyn",
  "key2": "3nMgn5DbS5LSEJUZ2X4Fky2G9yGRx9pxuY4oVAzpSrwtBfYBM4A2h4BNsrKgZCCCvpRHezv4acTujaTm99bgFyVJ",
  "key3": "3rzCixfwpGUxTCwi4MnA8Rnm4T1tVg9ADXKVaLVmBZ6KSVtmMAjbFybBHeXd8PyTdkHLRzVpuAmF1XLXBpVKQCE5",
  "key4": "5HQo2btZfrF5BiucRw3iN7L59rXGKuWSiyTrBxXFXAycnwpcBgJt5H8NzKzyagQRLQpfgYLMU52J6WPNFtheWHpB",
  "key5": "3apMyNDv5bPdouzhkLEFNHK4dTamCwHLHDmFkWTpunSwkmU9m5a3zzUVGeg5cJPGiTrXk68bNR577uPgV6xW8rns",
  "key6": "21NYfwMYpSeKQWt5KY1qmJZ9fhpeTmjy9Wothgv84xqC9xHmBWs5gXhfjPMjip3BiwY8KXqFHvU3eFKhAY34QhJN",
  "key7": "5LZv4NYt4hRbP1Nah1eCFsr5ueHsm8E5gUoa9wVDNDiE4gLiGtAEffV7L9ek1xSQELuTQ261hAEsMgwckHEkL2Eq",
  "key8": "4d5RAJ9z2H3UJrpgfKt6FRe9QwmtoDGr3kLHc8epnBLGa6eGtRHX9iEXdVij9xyhFvHqRhNvLLccy1154piQhFwy",
  "key9": "5gnTE4AahU56zt3DHAo3SCkqZpYhySngs3RKGkDfHdXBes4tDAQ3YJd3iqKuP7jMvzghJG2CTa9nsPDHh6ynDHYE",
  "key10": "2KJczy8MoM4rqfrkfncePTnxt8eXuF6oXygMfUSsJooS4HXDm3GQjwRi3r1pLHtYs49pwQHRCCkBEaYqCzF9d1Mp",
  "key11": "365dcqwXsrC6g9B6CuwR4PyLEjfvJtH3UpRfYzV8ioLCP7orjBiKn3ugDELYasxfRSxH3GvqqcMxZd1RX6jmsJ7c",
  "key12": "mjcBVZ3fgywgvg7cttNYwBYfY7u1HvAjNA6XnLYunQEQXm2K5fP3tXMCtxVMNXpEo1BMkiYboXK5UnceQAk4KjX",
  "key13": "4nqaAGgkcvWXhUgSukZDGcU1FZUfRgcbtMBHQnWD4SPXcDHt45nVH65A7ZTwqgeAahmyZdpwtKbuPKvUnaRSL7GR",
  "key14": "528tdt93N3rSChsePe2pMWuCbN7YHfrCM3RrEkfkU8tphz2Fgf6sLbuU85VceKdBHXtqje8mYLK9PEU1ueuv486J",
  "key15": "5V6Rky4iexxPsgPz9yjsYwPRb2r1z7keaJ7GQBYrQKiKD4vN1BGfs7byo1xxF4Wrj4nS7hwThP3k8xsxSXndQxtD",
  "key16": "63dKXFbw45U8tGMPhMkQimt36wYKNJ15zFBx1RB8NZrK6d4Fpab19HsJ7MwTaARZP3LQBBvC1VHydSEUiqNeu2bY",
  "key17": "59efWy9kFfA4xibY6P2H4UWdnJxrm2ruGdDEJ7mKyuaRoBoZfxPd3ofmtLr5sHc28EpGxQEpDCvhUmPeBB2SxbCx",
  "key18": "56SjE1sp75CKWtvx6juZomqFmivaRbrB1UKYNwjuEFdqbLBFpznvwuucycwPgBShrLLYWrE57ZU8PQDKdkWuyHgK",
  "key19": "4RZPVFJGP8jkY6iNvyACe2jC5xnYdtMRj6GbAvQdznEWzN9sJ2iXZumHm8dxZi7ZmEkECQZ9LVsYkNTUrziyHYQY",
  "key20": "5xMH8VvgDppBamWgt9AF1aStgHoQfBLAkdknJbjrYYMfde9bPsY9qE5HyxQjpXzz3CzRN9YgsxPQ6wsnsWWTvi66",
  "key21": "5iBtwt5Biq2RkSe1J2HupCF7ALCGhJz4mw1PP331pMT4VTR232JSGhdXvquijmLN11hfVNFaeEdCsTwffW8pK7Ti",
  "key22": "631WrfEiw9BmYYsPLJgoiB868Vkcz65pSTFgT4PybqHvjaJBzGx7NHti2LtvvYhrdCDqL489jB3JQzju5QUeWDSZ",
  "key23": "2vCG1woa9cgxq614QVYFVrsBnWa2BTNZGL8WDoJdufVpsYaLqWpVcSMtTStxoiGLhwG68X6E9ZnY6vPuHAa1B7bD",
  "key24": "4fJXWDS71mRKjGFgatEVD4b64WVPZLk2gMFGJ8zSi9vJ24dwtKQ69AyPusKjfk3AnQFgGAvYKcfqrG4s6ZKkHKka",
  "key25": "3vw28cFgzEA3mrJ85Hbn8pBjkLr6sQGqDQFz1DXNS7cZXirrgKXnnD6TXx3BSL6wE3paE5G3spdEg1z1Dwyq4HaE",
  "key26": "46nveMGSeU9XqTT1KAwRVEjbHreHfg1i3mRd1WnqvfZ3iddYWmawyf6S91KEYuvH6cSdmMsphRhzU3JDLFFDsyky",
  "key27": "3Vh9DwpqDGjT8YCMceLGZUPCXRGhbw4NevBDVYtXUd2bcnRdUz2njL8uPRnRsYTGEqYUhS4F1FKMNve6WtEwFex1",
  "key28": "2yE5Svosi8HToVjQaDUGgP66RWybZhLYSvpqZSyavZA2aHkRhHMLDs44FLwxmmL1v7KKiPa78wyDWTczd9jax4K5",
  "key29": "3AD3j14S6heRUurv3XyE3uo9qUj4ZKaHYLfpegpg6TaN5q5v6wikVqA1Gwffj9qQkytcmAVGNfz4CBCoUXbXt713",
  "key30": "rtw9ZT2tWQcTjTsQKoHQwneahWo3Z3mJWjjbozzEeFTHbnQ28VWzbiUN5bw17GMFrBuaQaDUtJydMroYdza576y",
  "key31": "4A1yUouHVLVNYXBnUY2o2qC7NHBSsSeheWjYSSmRwAb3EHiT8JJbmGsRTj7GWPw5kUPDLK8AYvjqtuZUp3KmZ23L",
  "key32": "2tmTdicbfNytc1NgnQuGo2F9chbVZBaj29MFnSx26o4STgViqKbrFgYctPwSF3htNwz1cmNVHjbFb8ECezNtDG86",
  "key33": "3333hdghpxRuch7w91XXafU2kCdrVSS5HFbSzAqFktPeytKVcXSD53ZRJJ5kjVPsqucu2wE6e33TwobP3zbmPioi",
  "key34": "3VTdqm4oyVhk6RcbmDUaVeXNHmcKBoL4Vys4KHkhxub4LgoQGnQxpSNCMPcw8SBsLABFyCXNGoT5kWb4BjQBCbuQ",
  "key35": "2yFqcYCErHu9S62EhpshetCNGULUgBrDKFTM5qQ3tFNXXfhUFAiP5sdL73xndwXHsojpmyZbnW4ug5Wpo8o5QRpH",
  "key36": "4rJKmirV3tJ8fHR166GPrinUzcLyW44YvSAhN8msNzCD8S6DHu8KCjoBKsWRJrtTNnTBRuoAjDZ6P39kQVg1a1Zu",
  "key37": "4LXuQRfq9fpjiorkcRzfszeyV3Cqgviz44c9k3Qj7ka6593VFYNpqqPUSR2DiyrZoVDrzKBAdTUTVM39S3umWxmy",
  "key38": "4xYoUYu2KoZ1gE1ygEdEm6KRPCsLbFaWywtBjns4vxBE3CnRajgKZ44YGNGnaVXJ4ti7BZQjKNXqJfkYvLWrypE3",
  "key39": "3fKyzMjnDNYBx9tRRPu6TWdEB1RuuPNDaaYmMrpvtYW8C2GesRP8u9tMrD8n7eXye2QRUbEULEeyDrMb9hYJEEW1",
  "key40": "64ENusUEQhNm7UJBo3a7hS9Qz7x6tEhfCrE77JiEcwFPmkFwHggPArmiwu4GgQtE3uCd6X7pRaizQdbLmTzTkgcA",
  "key41": "5A5Yh6W5X3Zp7MpGWeuf6X4VVWFie1QbPqWHwsq6cVQHxexRe4fo2DB8K8DVCsQjbmnKBzNmV3Z12HYuiYVKhsUd",
  "key42": "22z53bpkeETw17VpX7QjhbdjkBPC9ZX19GG28XsXQurvixM2CTLCWDrubZxkES94EZAhWwgSWnYR1C6VtzjoVvMs",
  "key43": "2jfjjPHHK7sbhG7xbyJZ7mAkN4546YXJFA9x6pMVb3fiuCiHLaAybAUTddGWUgTLBUY1F5DsPyxnRdEbYbfEFodh",
  "key44": "5mBNmkuJdV1WTHQeTktN2aR93w2chNw4FxDZ622t36XGhgm3t8gwuDbzSDxNMf6cF8JLmBZsVQFTyb4Rko9WRySG",
  "key45": "2qZBvyduY3tqtx9ZU7MTm4jVEcAM5qbw3HzMZkv35RFJuKAKhby3DdPC7y4q1e69szer9TS2F68t7R7iZNTgXnKZ",
  "key46": "9MhR9ezNFs2bv4nN6UFDRLCm9RZqH4hSXvBgqXhjim2sePdCg4FAmn2mN5buiz1dtVjvw4E5aJjcqnwnoz1eg4J"
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
