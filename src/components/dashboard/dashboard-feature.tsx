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
    "5gxXKkH1MeVMoUtcNNKSL7HYktZ2SC4ord9WBikkujirULdHAroF9chuZ8iyaURsM5teAxjG2Brghf2J5ub7PSV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hw5SNNoUAxaC7L3Ep5jYSL7A4D2WEcBXaz6v4Sg15G1AdWxM3t5PBUGgV88sWfMFErT9PjPDGSD284Ho3r7G79W",
  "key1": "2Z5kKm1F9kkW2T6kHN7qLjL9SLmn1MfWC5yLpoEwgBD16bfUPw4dPz32YE9qcBBrGAih9EhJgjA4HqBm8hA7RyiX",
  "key2": "3vdzqoYZShgxBuQfLMf2H9CncH5CcG22UXLp55RXBbk2sWTzwJhyowT1N2LMs2GhKps9mxAXsKBxtWx9BKZfHSc4",
  "key3": "2YBpCgr4Q7gfNCz4eciVqKjnNTg23y97e8ybCG73g9eUvUhJiNM7mxRLdbYMX1XZrkbJgrrx34isbRVwALePGAqc",
  "key4": "3jDhziRsXRZnLMGpqRV6ZsmT7mVS6yTgYJXBNCQR2G5JkRnmMsoy2QwB5BWsA3mPSECmCiYZsBjzuxfEEEPq1MjH",
  "key5": "5cuYGHyrnXZkRRBMe2mhQJtZgfyxPZ78Q9KDnAWQ1uGkdvnYXMYH8Px5HTptMBkuLFVtw6EX7CypDzNMnkHWEqNc",
  "key6": "5ZhqwcVxkRkk3Nyt9nhyr6UCbqFF5sk4zkYzn7eVTwJEMxn5dAaLdi87v9cEqj6TVf2AeFgwdSwJtT2rNMZNy3ug",
  "key7": "2ArCDNmYe6nydZMjgC2tUecWQmPTK73H9gD5HqEN6c2QjhogDqdF8Tbq2aZ4wdWrbD1rrTTA4Y6j8L4c3omTZBS2",
  "key8": "42pduUYJsFgAnzPbggeamJhvWsb5pjScnZnABW81uyhcBNzjBLzNWmR8QvxqN16sPUnMrRC9ErYm4ZNwLurspQJT",
  "key9": "i1fk6Z9d3m2atsYDsBCq4dt822ZqBLE3cyteQpMR8mcnFd721yweJiHZNJSzrfsQhpm7ZMSp8LoU9UYesqnf1xn",
  "key10": "5jzvqn2xZRboKm1mijjJW9ayxKA3WKNcWTRDysJXRdmUK19nUjYWjXySNbqsdYmCHZMjTLsYPmRhouAqt8x6bQVs",
  "key11": "G2Rp3iipLyEjK3bWPPqQS9cANoqwS79ScJyq9eyBbjkpYjYPnBRnBRSAWEmxPYnPZvkUj6EKEZWpY4z13a9mc3h",
  "key12": "TGAKBR2zCHuLb6QgUPW4GbGQtDCvWiVyzeq17uw5CKZyuu5fVBtcBfVoDQ7AjZfCeyhvyNDdNR7g1BUPK1eL8nT",
  "key13": "WfTv7pd9hsrQvvuZ7cnrfNY9z6jy4RZk6SGxwDSg1XnHbn6x1NjATstXBrtE9voGtucnC14ADb3NwweiQGyorrL",
  "key14": "57deYuEtvvsXGP2uZfmfPaES7YdTqPfjDg1uxoWHRd9LRKCQz9fbLnQigY3mCv2QMbqANj5W44nHR2X4RmCCAV19",
  "key15": "5EPzwfVZKFQ65zzYbTZhtcP9F6rQxs8jkpvCVfZRUVHkfmz5uWcCBJ3s7ku3g9S4P1T1WAF382P7JiMtd4EaBi6C",
  "key16": "5LrvXNUhvLEEr5Dpi8b5tjd4GPy9emxnAkmcNibTnJGWaEkDMSX8xbpTa4rofykdPFgq19aXKbCYcuAWmqUPd67J",
  "key17": "2AuhV2iWYFQGj3CE433oqXopp5yi6MGouQkWMv9nP3U2i1Hk6Jj3UmoMCRKX8brBoaJmeWX4iXGNghb8o9iSWFSz",
  "key18": "3p8HbehJzcX8pnVkgbzW1D4RgAqGoRNhA5DCkDKGwUagQByvcnvajYp5E23ed16VHi5HB8C2Mnqch1kBQ2gYraN3",
  "key19": "5TS8uai7E7S7CkbhhyWhE1QLnYicAqMo5FrypLAUBXC2dMZVqVJkeC7KzXgWVQE7k4Hi87oKWMJ4MX2DK3hnFdpH",
  "key20": "2qLtHkx5BBFZKz3EJYsSzRZWfj6HxukLQpuuLAE9X36dzLhpgYXuH4dT5cbf1vjvdgnH66ur2M3oZgd4QVCL9PvV",
  "key21": "5jH6ojpUEhkBb3hiu3jhcZ5SiRgGSgH4qwP9wjGZHyc5HhgoRRpUEVTd4s6sH2pJ5K79Hm4X1cc957Qs9TV3K9bt",
  "key22": "4R69brBUcsxdj4Gnbx6jmJotu73aoHL1PjdXgXCxA6mFp5P3YkoxT4Q59cBo9RAVDcCYpJ2h5ySTRbakxcYGZwqK",
  "key23": "5HCpaRPqTdgM9Cv78V3nnAxZHdbqua4jnCjNBdMT76TdN7Q2RdEpe6TYMGYDR55fJ4TRzJnQVbuCp6SuGbd4FqD9",
  "key24": "4iVVPo4k5n3VByZZiCxuV31AaRLZpv9PGYW9PUkJuq1dQDMYHvFEMfP8VvVBGDbQLBPu1jFfxZvxgxX6unEjb8AU",
  "key25": "fTpRRPpYtmTLGW5mB99BBi8QSzJPnoYiFZGykBHjoaJZFE9dcEZZYHFzJ4FZuX7Sk6ZGWXSbDnSfngMAKtKqB1L",
  "key26": "au4TbJ2JpvaxgZ7FxHTTqCsWEa4SERJdmQgFm7o9ZDb2oRDtGSJk78PZv69wNS36yaCgZnJi2V9ZghtkPPLb6G9",
  "key27": "4tSDfHYhe8qzcYzaHTMZeTK6s9t2ox7uVAZjZvSMNM2fk9UBBxRd554iwpTZCVVqgxaTSpFTPx1LvmuoXZkgL9Vg",
  "key28": "4FX8LLKh6x1fRmYn6xSPRReMPCBWK4X6rybm1otr1D9RfX5drXdRqeGTdQiz59tGauS3Fj7YzvytSK8RPNdoy3p",
  "key29": "5HQpNLLGmYfS24erpEwL18yx5JzPQS3x1fmEC8bxnwUYQW8SvTXUwxWhZLcRnyhpyCDnGB3U8wRC47FNd76EAjrN",
  "key30": "2UC3PeJxNpNbAVUJdDzF8cY89sn7zaLQGDB3BSWkkQCcSmVkZP5TwGGd3RDzB3GvVgon9wWwHnfsR2vWE5H9iwHu",
  "key31": "2fPvBZtxkQgiptoQ5ZEEnt7yMfmJofdF53gjCimKegCf3ATVGBRGDnKV1FZMTsSnRu9iZEBR7hti47i4o7FttJmP",
  "key32": "eG3vQZVR2f9A1E2v3MZJ6BoJ5cvMwSHUg8zfv1vK4wSEjTnZRj3vaWAfPNfBYXBTeXSxRn827zKGD4qteBi2rx9",
  "key33": "4zwVnqeXPhcgUm5SzD4KEqNxTTDkydZdkQYhX6eB8tdge2F3ZhDL3DWCeBpoHPDpSC7b65iZ8Xz6XdjRyBNUA7mj",
  "key34": "29Pa742hW8Exq7yhni8FXM5wnvzPWKwArEgY5rKfNk3nAZjXhnJxdp87VzbJQ4dzPEzqLy3KoiD4ZQ2Awnxs3hXT",
  "key35": "5zX6YniHRMHCgArqyqzKR4XtpXdx4dCCXMSG1VXHZ5bmYV1wRrqGEQw8qCNrDjDrY6UoUG7kbnhrnWxjRF9m3gvt",
  "key36": "57iAMJRKHFaHoHW4361NNMy8ACJkDo9wDJFwcAgjtSiKDgR6TTsHJCGVHheSZr8QkhdGfbXNgafixT56iik6nCKj",
  "key37": "XdFWS1GKMEZMJZoW4uL6S43Gq9PHnxyRdSBnnQfiBfmXG5brsNW36LLEp4Gdv5USeQWmqMqPdBxdvbSpYV4gHXU",
  "key38": "3GPsr85vgaN6PjoAaxDV3Qy2m6ybQjWWf2mLdmimcPj9DDx1SesuxxjYL3DomFfMD8mT1Zag9DeHiKeixihLaW3g",
  "key39": "3ngsrM4WJfgDbMGafeNefdhAtuRG8yqGjahAskgF7mHKziH8MisUxLVoLs3XFtxWDyTFSf4wyb2XzSrNqWm6fgQF",
  "key40": "5Nhh7rcPTfVa3EoxLcprorkR3WytUoZFnjQEDu4QgJzWKrtYs7MxvcRFnGHoFYFMJ4g6LtQqnLBmkUMYK5LeekqJ",
  "key41": "47de6qguAwW1MAQVeBr4s6WzbKbDJHZF6DjwARB3eVAzfcb6PiqjymHxs7ZYqPF1zpk2y2bmtHW2k5NNskoJ17RG",
  "key42": "3zqPqTsrZrMU2TYyv7f3zidFQFB9vTrogNPKHmNAFcYvKbeFB4Jeejs6L5g9yH2vEFeFQzMXBnUEfQmkpEu2msjn",
  "key43": "65NQ61vra1vRzW5vnvMDjH7DcSjPtrtKdZsA418jBHNwYzP4gbHEfhfm49eGpTfhYL4w2SVRUY8QNWq9jWcJCUwa",
  "key44": "26pELKGKEsttdoEG8gnqpENv8w39dW3AAnHFXhjaL7S56W145as9Xas5SZaAjv7imJtzu7dD4ZYTNTkkHwBc37ej"
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
