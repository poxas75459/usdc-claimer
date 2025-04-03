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
    "MjV45bTK5sKwsAQu8Q8FxnEyQE242qJJnNjbzkNLCLb6ZtR4dBk4KC4tRieudEZrSTpWDnUYw5wDqdVrsbNg6F1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fvsy4fAowFSZLHqJwQFD2oP5u9xoK2DnBPC6WU7ZNVauyF7RCGJRPaGaLyantgwdkjRFSMrkThU1BLpKdb7Rg8E",
  "key1": "2VVE88hLechyLmhk1meUJuLk3V6yNcNuupqwjKRZQ8r3k7yi5M7AvkSCByxCxKCJthczGsrt9ZGMqduzN4GUnEHF",
  "key2": "3KeP61kAsPqCTsYwm9APA9euNbsegFT5oKgVsFVtqv9nL1o4ehYmgL9dboAuFBGdF1o2VfNjdd1ZZ8XAwp8rCvgF",
  "key3": "AwTg2rpbKmBrRioiF73tU2VhxD2KAtkfF7Wy47umvSb5VBDhZo5eFcAcWrAwiwXjRxN4h4BWrviet6VQyazsC1y",
  "key4": "5TnjzHTA7sPJW4eU7KitzJZGTXtMVRT4kM2Zh6yihnxUnTMeSLVi2CVMCVuurprf92P6236RKqvWas8CJNjTBY4T",
  "key5": "2kH97YwTMmztkNxFbkEbyNSnFjXuJ9No3dBNeFjzSZszmQGYkbt9rRpKqu85Khr7XSp3uxjBtMDzchDusyVUUTxh",
  "key6": "3XQpgw8fQifs6K8VmvvRStctFnPwhD2vnv38YwWrNiXgmqcsyLt1s2jEpZbQV6rSY2tPCSKfgjmfYxeQ6TtuuuMH",
  "key7": "58a23sdDSRPNz9rsmDgao6wjRHtfZVqsBe3dCmtWTXHWxLfqVCb87rHKenMYPr2zmXERHqW8U1qgM3C7czmGKUST",
  "key8": "5X1wZMpyL7jw4xEhHzN9CefuUPnn3R24aQ1MHmWi6jksDMsNZ8nCdqeuTwBTcTr9iHMH5iCoP7wUXqsfAFbHy8NP",
  "key9": "m9DwWkdMui6V9pwaYy8saUtL1cnqSUJNQskdsqcdXSYn9mhfgKLhWbAZXv5XZr1oFtieSjfMWfDJu54tUYs5wbt",
  "key10": "2YTU8PP2cgpWE8r9UpbTSp746A6S4pogMdrw5jJzAdHiRzWQz797C6bpbGFDLKuDdAnGkq1tzcT5fyJNh3rXcymH",
  "key11": "3Nxib2Sgq89NLFaWo7kmkox9nMjG6CRcUGBxbdmzgipPHGHr6aAjgzDsrPFnQu6BjrxDvQEGvCGQW2abSzMKePbc",
  "key12": "2FhSSnNaVw184BeGRnfxJkf7X4KXuBWPmng8bovmpWojH4CRF7P2HUhtVKZ7DVnaKABRAKba4ach98oJqMbHfbc3",
  "key13": "4RTgPFpyJeykhwrvL4uxPDyBzecNL8RxBmakwjUkjTsSJG9zNjgHVXyDiHYAdDpC5n7Y3ATK8XQLxs4giUte18KK",
  "key14": "4WcKVA7HHukvBR3HhhXQ9DuFDSApqLZXVUwWe7VEPzCtUAVDjAP3ug9qQPsaYYduBKZwAKzERqoLWvmJ8bf8TnXM",
  "key15": "3QqhzRmtjKvU1rtfmeLPnnKnPeeFsvCws67sno6JGuxYFNU2ovrFJsjLrm7L5PmAno4Y4APNDsChzcv6J5eSxm7J",
  "key16": "3hEca9H69zaNqcoFDhPpo9oHtSmbGivXyZDUDKjPgrhC64XtrozGDNBNsui3Zvjs56tKjoJ2S6FzsuXhbp5mhbX3",
  "key17": "4GijJ6WBc4azynKcWEMMU14JnJxPQ44XvRo1HWFZXjNFcc22WrnbAF8eQUrxpdzGHuEZWtJAp8KMVm3H8dNkznPA",
  "key18": "WA9ByBLC3gn4aE1otDLyiggxjRLq66gBCstgKpEgJCCCribm3QCrrfPqaK34TY1qiHgEQLAfNKBYjMChMHApLjm",
  "key19": "2Lji79tD1W1RHngdVFmU4P9XP5tHDSYFr7ETZQDvDXkUzfTkAu9PV2Xn755jNKFdF9YpgAytmJoaitgdU7qhEVRf",
  "key20": "57GXxqohHZrp6631uh5SPEnibBnCS3cJbbGVs2C4cBrqyxZNcmnKHa5i5BVGRK98ocecMjTDhK4UhNRwjauvDg63",
  "key21": "2qMHaPxDLExZydhrzDyGYZXRFzkwXzSaHBLfhUGmKfpUk1hfY9yoAasxL4iidaoG3grFRjr3sGbaosnLBDMNwVSD",
  "key22": "5AVKYAkBNNdhcsqZsNjd3dB8xJYSU9GZjrCcEP6KFyhJwz8v6jQYEymTSyjP4rVhHcEGWVvVRKXQhP3u2RVUmQRm",
  "key23": "61SE4tTFFuMk6xbYR626dSZ523hXNH5Y1t24MuvXemQ21V9vuT6bUUiLGa5H75RCntUkmyFDeFLpnioZL2Pz6crB",
  "key24": "4Cf2Fu3LjmskZzu8n6eXYMdVuSteayCTKJ23Dtys816v4SBta4aDFiRg3DtzqMndu8y8Vmp25ZxnsQCbC9262AcQ",
  "key25": "5MLUvroG6HHuhLdrTsfr5yMSgXpwMC57iTDNhg779CwBVKoTGHnbjYoxJfTzLmmBjERiRreywov6YWLFzqYikE9t",
  "key26": "2w98cxXSbYYMpgSwacLAMMvrVcMrEzZHckrQ2Vcg9nF4XAe21rpAEeu7AxQZ3ksw2oARnVHpXAZT44h62CmR6wU4",
  "key27": "2FL93gdRt4JQXMWdWX3WU6cmGpJyQZWayP1uPszC9eY67ZTW956i9DgT3vN1t4xYVv7GxTf4GH8yG1SDzCETwJLu",
  "key28": "5S2qVYfNgwbo9bLAnAL1qaYYEmccpbVicHQAFuDMN5ZST3DuEQibjEGM6HXUid4XPUJTerV9eVdVPhqHLSm2NAZV",
  "key29": "5ikVNJyYEwdtt6YdaYowbKQ5SLwyqa4JhQhejP6C5jVJQZQrkgkyeSwDtYgxfoEvNETLjhfPBGf92Jm9SB8UwBPQ",
  "key30": "51ppTpCeDfaCw32JaZ9wcy6CLCyXKvJfFY28QYvMJPUjYMGfe5PYx3frqRd6jszwkHw2QgzMBkyuT5EeaAFb7nou",
  "key31": "5euzjuijxs9aYpyABQoz1121Z8QZYWdFBPjKxkJtU1Ndd9MLgGV4d7rV8ieBjKiZc8xDzotXn19GwdJgViwFmPkE"
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
