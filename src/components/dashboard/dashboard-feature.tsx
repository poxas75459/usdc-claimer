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
    "FKGRZgP6FykjNzS6K9PSDTT3b7gwc1r6N1bkwzkxua8X8uEsEsqKjwTYU28BWizPNTi7ceAf5pSVH67a3J4KcC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xFDgGTEocd4qzEXCo6vXv6Z3yqaprQaNYHFEXdKgme9b5MRJYRhzmkMSM8XodDh1RryerBHQoF3JxCxS57baiAE",
  "key1": "3iH9RykGeQqyWsYiGjLn5G3ZgR79ehANsGFwoicmzQuBdQhmxtzfY6fF9PyFoZXebdp7DUVEYT3DkwPHo98wFjyj",
  "key2": "3BbGUWr331AQRxTMeFZYrSAQZDNq6NJAS28K8FXXmMsWqZLsT87wfwagLzcDi9CQEZUPFQ8US3RMBU7efVeCnb6u",
  "key3": "fpo71pyzPBkYAjx3ntHqLMPaNmdvUahXdEGpmgprVK1ycQgdxwUzFAVQY3qDKpNM37fCZB8YSmdB1DtjFvRu935",
  "key4": "4Ff2kWskoiJbqHu4c4bFnBbudoXxzLwJ4USkbFZCBXJxV8mZ92nA8Ydg5CuPQDCRgkcjnJHCwP75UvtgzbprHbyU",
  "key5": "4CSwQjKxTBfH9uJRWa68CaJBVwYuo54VwTLnkuGQ6YeNmnCrtpTHqA6Zr2snV24zR7RnhjR8nbsdN3qiRH5sCJ3N",
  "key6": "su2aWAMxhFqnTtCZAmHzGcdHXik49LPp5swNS6gbsdGwLMrNpvGo6RyQ318i5V86s8x46DPVwJXpDYzcYLKRFM9",
  "key7": "3CVvbjE4RnirrCf9ccDjwb5yspkrGUELhyqLzrE5xtBXUF4mNmjzJCMvWrSDZYJsPBfikfqK6rC2z9ZrBPyMDAtm",
  "key8": "3ztiHDwsYiRZZf6WYouw3Gk2yx8hV15xxSJKrWmCDjNHEqNcvN9AuossMy8aTBUcpuqpxmaA9EmX7q39Lm9vYBtR",
  "key9": "39yzN5qfzB6fGMyMAfx8b2yVDwP1NLBFMW9sJ4XAEuzN1wqPDQJYwJsnP41pZLpUSAx3er9BpMkodRtffMnKE9bN",
  "key10": "mafs9uabDaNdrCV5TvDX8FCtSYwBMhD5oJ8ceQNikusTuLXpzLLQGiivEg5duhmtWchCouveZ43NuQ2dzA9iKNm",
  "key11": "5coT6xfHd2b16bU4YEFFGVkKiPJoCs5eVspigpVb7q3QZ7UDjRiXoqZDwFpYWfQ6UkoVzZAmyWYHyVNav1e7BG9E",
  "key12": "5iDPxUU22jLMhoDxWR3Chfq7rP2UwV5LjQdUzebR3F6796ChD9V7nB76YungaTEXuJRpqbXiEkNnbWfn2nK8pCoZ",
  "key13": "2Ykx6u5GFt7K7mVjcoE3yC64aHCsLfcNHTGGeAm7GrNBf7fKB1hWSBCjHwjUnLEKhjTKUi4ArSPGg3qFWXDfMKPc",
  "key14": "4KBSBSLpvYVpUVHGASU3kjjMMAmdkkaYVDg1Q5Yw1KnkrgXfKJb34Y1UEQYP1b4hCxhakUa4p5XbfUwbkAWTfE6Q",
  "key15": "434CPWhy1ZM3PAiRhLGw71ppetDiZ9KZUps1ZnjW2G4mKDEdeVpAfAVqngJsBD8uPbR2a3U1DJ3b4UdhLh1yhY8r",
  "key16": "3giG3uoVDah85DLDrjxMz4ZLhXhbswP6HsKYxeb95w9Poxc79Z6MVrmB3jSxbEK7sBfg8keCQehofGxHKqMUGhV5",
  "key17": "2fN1iQ2cpDBTDwrsGV1cKVG2spmfKiCM7g6yPLMFhshLYQ2pp1hY63tcTsHM4RrUd7ZXCr8cdcDZkBcqs5oR8RRK",
  "key18": "3nBF8wq4eunRnCgwsjkr16XDh38erk6fk7YipoprrxoXni3tXYJb3jQ6ddxRyY9TSZBLXG82pTz2PY2i6VdgXyyQ",
  "key19": "3RoKPenfmEUUfB259hfYyTPRsE4eCz3Xqp8Sx3ZdSEjrdSJeexZuq8B5gvxrJFymTZPBP1B1eEccGFT9iL9yNxmp",
  "key20": "59SeniiwynuCBYNzp2resXrDxU5V9mNkE5UPAGNMoQh5bE6rsYiXUBb4E6nfzYbVWyUeMP8kCtgbJiYzBFNF2c49",
  "key21": "3kLRLzqVh6teRyeG8FkdXCGtmrWzrhejcbHGFQCzNG6EGpGossFVTCvKKvyytMZPhRAmVbDnqSyXJQJKZC2PpGPg",
  "key22": "5mcLMkJTiPQ2KsCqt1cznsB7dsBGabL81PQrKVrByZhkXA6gqncmcFNhbdWpBoH5QSUk85nrQBtzCFULBEFTt7Ne",
  "key23": "vaRFDMCKgaUDfNHQoAo7BN7wG5bpNys8Z3vtLKhZdr65HSY1yhhonLvht1L1DBA63Gr9UJQaoEP67Z6p2roK9UM",
  "key24": "2sa8965yVef1GhC3RXZkDq79ffJDuoevE9nLckMMFCXuZtHARLzerZBYvFxVXqN6zprQkYNgsjRsXq8HkMyu6fAY",
  "key25": "5NEmXA2anzKCjP4aQpibJYySD4UDXTV3Go2ZWiDxHTy5YdUKowWgQ6hT7X4pfHdmZewoD1UiZaPg8hvXdSegMpWh",
  "key26": "64irACuNSPy5pP7RZHoKRWkq1YLD1FzyyYQyhRdK77BnAw8rLUfWfBHCfiy6XjdSCBu6LgjeNZkXDBHDjHKoPtzq",
  "key27": "8VEi1GDqnc4aTaULk7BGHwqkxPwuwJquhndjmNZwKA74kNjjBrD5XyLuUTSq2bcuXPEbyCbHEdJuVirWJXwUdED",
  "key28": "3PJq4yb88cN2DX4KHg6MFyfn7mFfLj6QxA6teDSdijBmJrz3v4a5j2LbHks8euQKnVFrp6bYdwmZJwMEcwGXUKSc",
  "key29": "hwwTZn5WYRazxvRWcZRwWSQqm8WvppBWSQzBDUycQyoUs7Wqg4eMYei1XGtc9vezaKuncGPhM6W8eUtkP7TyqMM",
  "key30": "yafuSbzf6LZqRgCHLNQLjwft7s6SBgAP7orc155RyZWAmmL7kx2uY3k9gwh2m4SsqPUEUXmLpxgiv4AisXRxxZU",
  "key31": "4sPyUteCEKCcyJRyeHAjshvxT8M9J8jdU2Enhp46Hge8GdXEwzaF6RKqtRqnSSVPf4exsD3iorvWvfd1yXqAJ4pd",
  "key32": "2FUyQC4eBacFCgnHnVCi3FUgFKUZhtmWVt8bDeNZ381rEYhyA7MYvJYmdbje6GS9wDEKwbUgZ1rCNVJyAoT44i99",
  "key33": "3d57TbGbSmM3hQxHbWe4Hpop5JZeaHXvLmbR7JWeqe6ABBHk1bqVhLxRstDbYcgMCYJv1reruj4uDMPyYZmuZZiy",
  "key34": "3u3PNRQD1n6eUTswkupnCh5KJbFBFaFTAyib9NmQSqaM3iZHF8irgnQTWR8SZmUU5moDdco6qtTefUYviZRcUrjD",
  "key35": "21hJdKFZRmsPsts4efM8xrYUXHTKv9SdgCxQffv6xij4Bnyo48B8M9V9QwS8jwgN3qteNz8U1pQvPbkeAdNkGXvc",
  "key36": "3XsPBhaq7t3sbfddAU1u2p5pVfZT3S2coxVzRBoG2quMekiZ738W5WbEQQMoz3zoCmApk7jGJCM6LoGVKQGWW9VQ",
  "key37": "423ui2nZpM8Pb8noYyq5X3XtCnrgzo2nyarU6LEQgRiGoJdkHqf4571mpHKzdYPr6ZLxvM9WrZ15ngRBgpxEn5qi",
  "key38": "519WQrTPZbTGpMuLmEyZv3b1TyV3MBFDh1Mj4jXQtrdwNJQzvbA52Rnm1sWcQHcyJiLrC2hHwuFjnycPLqJqKz2w",
  "key39": "3axsVegYPMTnfKzbBNwebBRwW2iy4uAHxBNsdYTX4jWmbUJKyLfsTWkfkMJoBiZAoWQP3k9bcmgzDoSzTSYLcwz5",
  "key40": "36wBciDaAh7gU4K5YsMNDMbW2Jmjd3jhrTMs5tzvsPKfHEQwpev2y7KiPo3UpijZebLHwN74yhVKwxfrdoT8jiRF",
  "key41": "5hG2mcBfvAyFQPoFEjFK2SjbDr9MQSD32YsuDDFP3hLftPN2CH4nNKxP5NaWvwVnxsPBKeUyEKZU7gkev6M1cTZe",
  "key42": "5N9wbKz1BBrw4jCCKUEz1uaMkfGQYDH4Sm4iEnbznpSrakt79jxbpfwENDR5dHmNvzNmdNFLo95UuMS3uMeuZ4Rw",
  "key43": "2G4qSJJ1E21Ax7mz8hsRPwdREHiAktGUi3BfCQxsAkuJVMNCD7oTkgQLoJAdnE17dt9MVyLApqHA6rDrqLBGQmfe"
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
