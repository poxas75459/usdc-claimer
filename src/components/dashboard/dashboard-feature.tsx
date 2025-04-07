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
    "CbWDziX3nQHsUR1qmRqkRwbMdCyhF22LN4WP1pHivZKoWgm8rTkGoTbYjVzVADZkevhZ7s8tjHRsWBxBiwibku6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gdy3LDBrWa6ErVCevNQiByYUvbSUwsGT9mTyMdyKuvwxH3P61hnodXLvXWRSSKcW6nnKbmQjLHkQ3AmWGpgUNF2",
  "key1": "2kaDBmHqXxY74AHoenuJ9XAY6C3nNbeDYEons3wNVyH6r9LPQZCSsuqKuAHW4zqLEPihJJGREKtJa67nSaaXNvh2",
  "key2": "2pDcsU1uNkZHwmoXiaQTKtT9Rq1a1EEtzzWoVVShTsLvGxLUpRdhckTLs2ox4eeZQEB6iY7xQbCHinZBdE7ydNeA",
  "key3": "4pksv49at4t5e1Msnu36xEXej3gUQEPTZNQdh7BH6JkKg7BBLvxjCHUqRgJhq7iG7JQw9NvJDXjm7vAHrQU1h7t7",
  "key4": "34wU7jTtrv2pxAUBW9SgqoV6HKQHeAUKFePaHC8f7VXCmRL5kAKKJwB7VGUGguM1SjsJCFUyXjEMcbTUuzj6oRbs",
  "key5": "4UMG9Eepub3mTbgPygNStETTDbMDQF8oDpCAFQncxepmYqYmLD9qBMSkUwKFkb8PESq1vvHFN9QG2bej45kjortX",
  "key6": "65UjitmpoESADks3mQtDWaxL5Lo9vK6yKz6UprCkyKLD5JEBsb7WWfZNH4wBqEc4Dst1fzbQQkv5U6UwHVYNhea9",
  "key7": "7vxWeJq41qTWGKz1CncmFouZqZ1LEVyA2yA5hos5p8niCCt71KwoHvNXHjpY6aH2NGvfj3BHBtpRNvsDEi5mmLp",
  "key8": "62Ks5NiyBqMGpNXFxZHugadA3R4r9YmEvrgpnzsFLXh2aFAoK4aB6jrDpAvPENc6pWC4U4V86zQRPP2o3dZ4ERKh",
  "key9": "xZhXQM4bVETPAQvuhLbqjw5kncxuw6Qy6Ptc57CjzUGZXFgAnftdext7u6pRUgfj4EYuhQuKrdJ4g9aYUSK6CQJ",
  "key10": "3EuDCtnrpMCeXYbEzMYvixfE8WcDfXm6qGhtQh8PYjLy5jKFTNKag3PNbnPuizcqrHKnXYRY3ZuGsJzKYck1gyXd",
  "key11": "2EjnQMBLbGgZ6awpjgF8TuZ7XgV4oVL5mfZESyguMqMNK29GVSrxx9a1FWHMn77eUhgWKPk31spaaPU8Jwb3pnXW",
  "key12": "4zJU1FSbPcQm3Jz1XMtGHDUKdRqnNTbqj25bpH319z6m3iBTMFRcB5UVM8Z8fViuadfGUJeHaBjpNefCrv4M4cmK",
  "key13": "4GAxDNFYzXk2zJs3fGWCXHUArSdMYR29wUhfwgk98VHCxNGnkGZJ69bAtAYVZ2Gopnsf3nfhdTgmRYXbu6nkNdsX",
  "key14": "2GJyjoPXqfDfnQKua7VmKuR6zQmygpxWDUNUXh5fbQRtPHQV5tDq1nFaumvV9F2y9E2qWjHHyXEbPveQzej4T8hX",
  "key15": "3t7Jj6abPuWWHniZbhXrbP5Kws3rXjPSsHo3SoyMb9MjDQbDVcBxEvJd2VVRk1zekjr4Ewa4y3fEYzVyqr8k6Hjs",
  "key16": "5uG2NRPyVeLJeq5rbDgEE5qqGkrdz1VVUEVHwTfzQMLmL7GG22Tjr2x8MYe7bKMEXuRZ6KyGm3mhZJrvnTALsz6E",
  "key17": "282wjpdqfSxjgBAwoKbDzspqmS6FyhQfbyzo4B6C2JdnVeSXRgeqCiu8GVDXwYbcownEiF5mAaAN1aPPRwBnwGbE",
  "key18": "5B4uV2zJw4DF3y11CR3oXqegFHvqzB1KSMp37kPitnfdXK72DpZisVDrDjXfBsydCoWqEnmoSVvKJVRFMrFfbSnC",
  "key19": "kBFeKmzmjr5t4qw81WDMPMx6qmsg9xGNyHNXSBxZ4kskRKQkYfTQqcUVHhmFP4VqEYqyugiZ7JW3xXq1JqZLms2",
  "key20": "Pi6EcvfAQm3RPCKfcmiiGQREFRJ8tGgtRg3e9AVBAwM6gYnK39FfQzKBMvYVdxfvCLKAnKiBFU9hdXhMj2cv38F",
  "key21": "gssfx2pBoQRsSB1HsCB7HVCR3ggZHxcAyii82FKasjRGqZtRjzeuRp1c3uGECYzRMAjrgoRPwjGxzUh8h4MHX7w",
  "key22": "5SEyvKxCuSG37taMn5wWTExiQaN72K11i1wxatRqUMA1Rs93sGeRZJNakYHvBNzjgkicsMzRsLsHuMnf6RDeh6Fo",
  "key23": "4uzjdqZbENiEkR3udwAjSGjVdqdw1vLcjbZeQupFgozikcKgdh7XccVbKCLxJL2krr43Af934U8YAguskXNQLFag",
  "key24": "3KhdACqjpvjGMYSLg2YPKnhZTkax4je7qZKZ7JVnBCEPsor3JSnwsTHmeoVzBmAWkWRhsxWkHL2Pke1SWSYGhDZo",
  "key25": "3u6Ez8tuQQQ3DgqCzprNhFroJKFBs4yP9CEFVCpcXzFqd9Spn4X85SVQqpotkgcide4QwBpuzExFcZ4QrXs5GFes",
  "key26": "4JET8jYgwrgMfNZYKj2TJgQ2vs7Dpew7MGK3ZEo3WKMDzQuFkWJW2eDACkKeU4Cwte2gr6WGmfJA8NHLjVei45tG",
  "key27": "2iGNpjs3bw1s7CXSX2EVzQRRRwJkCXw8d4MyaEcaPtrMa2HZcLcgB54mGqdPPz6AgMupkJLc7dspGGjQDk2fDd8s",
  "key28": "PyciQaCwEFrjE73uABtqmNttgtRf8oJyVQNpxMwjiNBLf5aQkjUkiCTW9QJyGsYqP9pYq88DLpu4oZKDzhF52rE",
  "key29": "5y7rBDrar82FDT8gA6aZDjKeAxJxsSK3mkousMkhiimFi2Bit25R7GX2KvEdCARCeqppnh92Rd41fosigAj7WCAp",
  "key30": "vGCg7oPowxRT2sTPjENJAkcAEUxLrCspAmsSnxAQvUUz1oMpUftzCkuoVrPUHW9F92seYQasuCBwV2Y4tmFyLJw",
  "key31": "5aw9tLjuu4t2L95TBwdqG1yKGDmKFiPRmKWQCYpgxbdb5CoEnhZKXjdnKDk2zzp9yBkDTezsyHck1w2F6aL1j2wW",
  "key32": "3fcy5YW5gMWcMePcqtGhtp58ShmeyScYPrQAdBNsKvazcS3dHQPZowGEYK18qwac5ozHJVcdwiVVUkuG5a7xQHtJ",
  "key33": "5yqeAXtCNQ3zZmT2HRysqVxev1YCJc5YbsCdmL2jTuYMVRU6rDC2U6S7NpoKhtJQxMocCkCaHXWnLBcGYwXCz583",
  "key34": "27tgQ9wdUrndz3V87vz4vhDSX8prDuaZeeUQPEVqfQty9aSeT5fMH3RRShh8Qi52ntEoMj13cufqX1MEo75wibRN",
  "key35": "5GgSt8XhfYqKg4RQZAGhyu2QMTxRhjkUobmH36fTNJSJytGkJLSi5qG7uVfWPMkqewC9aquzDFBmovsQ8ZoQLeJw",
  "key36": "5qtirQd9nUL8tkXGYTEaauYBHuEYHTGMxpxAQjpE5dkeDfvt1kyAdYzqiNJuj8KUgR3NPQyrFSGXAEUU6bWoJryc",
  "key37": "4x4gWu5siFGjgFx9K8uwvHd2udrkRYENc5XRoGdse4ihN6uuX5wVonkcBsu3AYT83UuwpPmoqH3MhnCWKTw5GHUo",
  "key38": "4PSCoK4i2i1xf8oTBnuaaWYHpFWhYAzfj7z8K5T4jzsNN3o2bvMrGsEP5G9D4TMZVLBXWWhVKLt9fD2CHgnrKiGs",
  "key39": "4wFEtmLxyjkVFbP726tS6RJpsDe1x9BMvrGM7U1mVMgiSyPPMa4M3koSHMk8PXhb8xtG9md1sWsC73KioZW8NtDg",
  "key40": "gvzJREg3WbfXxb4VNKAkkJyTES6K484EjoLCNj5wghxcho3L5X2kRjs8BquswXq6b7tvvxtvN2AmNRYFBo3yuwU",
  "key41": "JaEJ5G5Py9H56Wz6XSJwViFyBDYrz8oTXyktsFG5i9LgxF1uWqJFzVvumLJhnvnX7Vpupf5pT4FN8k2CfEDJFBV",
  "key42": "3WmSmEmTFTJsDjqAGn2u9oCGfpzppu1LvxmRRbTsFUHdFmsbCnRj4mQzcccLdQkokMAXcDRDJPBLKHEGnmRf3WEg",
  "key43": "4aA4iEgGBKcWQn5keKe6ezMy5SvqrPUaMwvKT1ydRecA4GSfUT5Ph4QreiJ63cgA6AFcZGDY7DZ3AW7zGZBECFcz",
  "key44": "61y87pBXyYLSgqNgEDpDxsU7C3Xati5yxW2dx2UqaAt3rFg569C9kqqaLowH2QCyYPkuc8X6nFsb1jupMcZkHbCs",
  "key45": "4vkacXq95yyikk6mnU9b2yqHgRzdLtgpNfaDbPqpVeuwgr2BkDuQYeJCQHNedNoozQbBoAqhYr1xXYoaSrfN5bDJ",
  "key46": "3SDt4mVTVqcsR4SvbKtn7DRLKhBk94kE7KrpzsKqK7FJyXNTJLuys74S7vzuCiaBHJp37ivQS5ttnEQnQ9HBAwGN",
  "key47": "2YgTj6MQmrmsG1kLzcrnf5xzTkjbf9XKGg2JfpR4XE2R2i8oHZRrxKMoXymAmktACJHsbrjgVVUfiWP767fu7ejV",
  "key48": "51nJoQzowWSzAkQBr7y2P5zRWxAmqRRYwMFv6ZVxa2VEi8gkdqcnKnTwU7M61vVBUzjdRuVG6y5MjMqRnQcAxT5w"
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
