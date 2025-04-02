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
    "LRAmDYSqXDaFc2dq95XVXg8nqD1JE519Qe5qwyPXJ26UQuMrahKaVXVCkrmVVZJAm4UBf5S9bM6W1eP1RkSuSwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZu65nLzFKrsowUcmHU5dz9EqXVv3RhD4bxg8f7AMd2esEgaVCNurTUzfW9RDwQ2hEZzXsqk598ywgwVtCsTgnJ",
  "key1": "WLvZEbAXDCChA3uhtEKEmF5P4m7o1MMw5Q7aCBtpBiG5mtYtuHvhweCawjje3zB63epSuoJGDAkc2Qm8Gq9sZdB",
  "key2": "4tnzU4xL5Vvd6qQAPjSi1ZehMgJ1RwLnjZobL22Zc5k1RS7ZYg1e5DdR7TqdnPnqbBVmDS97DVcmb2ciQQ2TYqq9",
  "key3": "jDQxYhgWvTtgfW4LQEbZsLGAnhbokREqFsXixi8gyayTy9AoC98bfB4jD2TLoi3khkMz6ktSZEfnpA9DVHYL7Dv",
  "key4": "4r22GVg2xAfHiCSwB9qKwycndvj6EgW7Z1Dj7dURRxuRiEBFGwZEbJudWz3oHePA5kQQ1ChbPpnxSmBRaWFtp5vr",
  "key5": "3mNAe2xGcu2gYB8xtrjwKNM83KBdhPDkyhvHCHFfquoqz4Y2Z93SHWyhVjmbPkR7UVBXMkh6YmyLbWUBkUiJAGcj",
  "key6": "5D9uZ8WCXJU7sCSxHdzhANv4DUkLB4jFBWQFRqUz8fgVBjvEufv1Hbq36cVWSXFvALQURCb9Lw7WMNYVbZifP3wc",
  "key7": "4WJsDP4npbF7Y2Fk1bWGnBM1hNdRb5v1X75v7wEBWkD2bMoR1XPBYcqEbmGq5pgjRcp8mWhEwghjXEQ3xE5ox8tt",
  "key8": "3fG2cCyrSKFpTMCF8NeUjLr7VMNHJSq9JXndcWKEssU1zVt3WCpNgCESNEBUzPtigexqwEML1Zaa4kADP8XKpjgr",
  "key9": "4hNcvzMokV6JK2L4H6Z6y9z5AUuShRBmkg9DStVenLWcsh9w5Qso4cujuDAbCQZs2yPcrdpzqFtqLcPXvSJu2EcH",
  "key10": "38LeexwfBgsZdobz5frFb7J8K4yvxx1RsoM7Dg3zopjNxtiqeJAzLAGUMR1iKDP74kaLZjJKAtY2HNUjZ6ssiaoa",
  "key11": "3qR4AweRq67xk4WNg64RfmAyxWNET1MW9QXco1JBpbLpVm9nrQTGpWVWMWEQS1fUss2zrqp8rESjac8A3ZAVG6mB",
  "key12": "3PHLCsmGU4ojTjj9xih8TSP93GHDXkA2fS78DwxPdtRcrDF4yd1aV527SPmp7r8C8tY7kjVh1ASFmiVxsh6EESXM",
  "key13": "na54fGrP4ffTt9caHbYSWNvCFrzGXaSxp6yY3JdWCPRWiP9vtSjp3GAWeP64iLyKvdjquyTUBf39gafBSuUtAMx",
  "key14": "4J936dnFbUUQV3UDGGXRLJGNkF8mXhaJ4Xf32JvViXLn8gUeYLfXVhLxNThpdCdW9uZAuVPAZxcVRp1GGvrjEEdb",
  "key15": "3dGagHNXxgaNcsWCCq4N9fka2jj5XHn3uujHwwATvJBdV3MjSUZUG4q2hfYMhKypzorYxKszUfhFq9fDtbhuUbhS",
  "key16": "AmsXWNTC1KazNPBtEVsYeNukiLYijEAh2wCdQM3NPPRDDqbVWtq2epQKy4q1Jh8zxoLkPuSGC3LJkVZM2s9pXmR",
  "key17": "3vXhyC8m2pXGLtyo2GbvdznC3UuxLsryQ9zUUgeUGLy6LfpCSrafDZkPaRu8NxZoUhnP3JLuwKfzAf4GBq35Kjij",
  "key18": "3ycowdLav2kNn8TtaGErThULcjP6XDVNfYGgWvq4MYjTrLVhcEoNube7TASSiKKaaYR4FDiCjVuGdiMDQUyDZwfn",
  "key19": "9tnrGgSuoB3XqhtiwLfaNuTh2BfcnP1BgUTJ5JemKamnxf8ZKxzMmRkN4iyVnvMGBw7aCvAX79StrNu7wdG3FD6",
  "key20": "uFejqRpw7ezwihfHYgcZ8jfgDcGAogdhyrZN1oxSQCAFnFJNs5Cc7U6v6vWh5qzRzJHRSXBPyPv5TGYpLgANfbD",
  "key21": "2oZNmDDTWRjXQfyBuG4J32mGEuqsvaExZiGZivPhVD6BNmZh5iKQtKYWBT73tPeEUwvk14jb52h4dpX9ARHZWHJ9",
  "key22": "o9A9SiWNHGUTKeVALqNqXeqESvXjrGxpFWbCdPszfQshjFdb2td7V3gYZYoi1X33ZafM6ccjQmGCpaXmjE5krAX",
  "key23": "4oye5UBViHhWHdjDhVGVtmfSJBZZLdqZnXFjxDvDEgRC7KkFujQtH3oL92ZyPTgJ7YJdTkx7MN3CoGtW58sh8Zcd",
  "key24": "5t9Us6c32SgWUtPprEKHYhWrusiiftZGkYBLLyPPgPGFoy55yg4CsVPmhvEnnUuZRc7AebCQarv34cY67rf38JjZ",
  "key25": "2UQRySv8KF3ERL3RhgbpdxxuftGnenYfy3AYUPNARLBGU38UMDvFpioqrYLd7qNsJZWn8bwiXzmq83HQFJzkZCNR",
  "key26": "5hRkCGecv5aJiXMBiehkGBDGfDJoJNe13U2m3ZVBZWhYhzn417sZWykXaY5gzgiVVLSHmM4rqUPpBjGRv65g3sH7",
  "key27": "TidRR5eWR323xp8aQ7tPMbEbGeDGhc6PRCQ76EgeAtSL9fBvVEG6nTaaiU3J53STTKDjqDnwTtzsaUBrA6Gsojf",
  "key28": "4pJimcJYcTzs67SarzPJuqkdR1b3oCBg2yyqwzsCGjvGUERp272CZG1ynXidQEiDwcVJifYdmyHNb1vvDCX1WSz3",
  "key29": "2qkpNaV9X3auCHYGb4csK1atokvq2H7ncPaZvUjSQSqC8Dfxb2s4bmByQrWbEGKrLwBdKBodbfLTP5jL8BqK7HnV",
  "key30": "3YCN2Jpb5t9JywJnrxQkKz4kqKK82yM9h5ERRCwUJnzraeERMKwkLUbUSUipGcJfaCube3CvUxSraX4cyqmYzhAi",
  "key31": "3Ca1qRVtyiEVQYZhR6zDoPXZKyvTg4bmgja7t2MJceDEfR1xsUzDem1iBjKxXCoo4HyP6BA4MFQRtYtu7n8NABNk",
  "key32": "24WdPA5txPxRKX79aZfqPSApSQHwx1kPABY5sjhbRVWUYmUp1EDCD2fVJaZs5ZkojdBrofMJyPtNERKqxuiDEnRy",
  "key33": "5HwoLik592pQy5M2QqLXuDrmfzi6pndV5eZTwkN4EUVRqa9z8fHk6DnTZLWnRrHcRWqmQHt2MpDd3ssoW7cS77ab",
  "key34": "5PSQYUQyhY52rqRdkVfWaTbMzGTrgcZeK1cQuqzjMc87WiWdQjheG7W9bqncLfaTpZN2Yt1GXtA7pYuMM9FBNCdX",
  "key35": "5xFBmnY7k4grdim9Ypom2CsJvLUi7coH4gfjrUtJgrHXmfiBWexasoJHSKRtuwStMXD7Zca3kLkcW7oiKuqf44Mh",
  "key36": "5DGPFXKRjzkPtC3ecpaFCWTx9SoCw6qfwVzavLxAZrZiU6Bu9hNk65eRFnssxsmMtmk8HntCfN6KbwZftnq4ZNVL",
  "key37": "5jttWHbeVcbLrspJjQfCzffV1CyLouAXfRKKoGrmfvnsQ3YiQajsFmCdhqssFVVQ2MmuxG6RuBpKGkxkKjAaEZuV",
  "key38": "4Wuw5EctBeoXwU3QwPEeDAXmiGUANbVnXTp88U2Cp7hwj9FUSRwkjGy1SSbFuC9qauR4aYJmpriWS32hzYQ9r9uM",
  "key39": "56euHsLcaCVVvViwqKDBtxE4jWXBHeMYWnU2Jpo5LeEqB3mxSQerN5mk3NGAo3d6t7xUvEkXFtPRJM1Z7b9a2asJ",
  "key40": "41JmSHF2M1yXbym2CkY5SJ77iLbXweRTtTgcHst99n4nvQ8TdqfFi6X3PBxtX2tYgpYX6rw5g9rSWtAN4rq4ptW3",
  "key41": "2vvEkRE3FcWcxt2gThYuVRkDgKhZbP1beDdVxZJHAh5kTReYL4SzYRsFc8PE8svjyrFmmhVUX5cWy6UdPZKfYsgo",
  "key42": "4f95zRcajq2QMe8xXYsENGp4hwHyPkc86SGNuEJprahksi315hu6hbYa52QEXJsnmE1TQPcAoKUNVH7kshFsFTff",
  "key43": "64o8Z7fj1pdcTYAN1Hyt82VJNFkmWju5d633prkWrcYfzBzQZwsWjcGRxpZkG2EeBKpZMb2DwSMZXZmUtGogKjys",
  "key44": "5VWi3aRdpDbtpUZzZckdx2dN3qCi2CGiW1SDmHFENzqsKRfab5soHbco6KjxBosJzjd3ULpnVrRmGkU7f3MddyfA",
  "key45": "4BnN7KfstiyBFpRSsmYgW1qmEzvMbz2hbgz8FTCyUCSFnjCdPZdLGEawTW2Wg8DGiJG1iz6f1tGR3iEkY1Drtb5n",
  "key46": "4JpQB4ZrvJ3cnsNz5JVT5XNe1resE6Tb73ByffnnwnC96QKLNYp2DXSoZAHTR9LzEi98P18PXXphPgjvdCMGCKGi",
  "key47": "3mHcLptwSUiy9XzcvWToTFFanLkzFCoESPQgZAuuS1aFiBoxyCyL16hvCEd2MU1cXi7NVd7A6uznqHogu7xrZ14E",
  "key48": "ehGcqAJtPkcfgN1SkHYMXSMt6z6MWjLszbnEDFpYdY8MjygyUSRwGeYNV9MULD9jcwDqkb42MjnZ9dKT7XZ9r9E"
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
