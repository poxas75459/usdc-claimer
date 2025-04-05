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
    "53hYzcDPBznodyV79X3uREpeM7dQs7hE2kYJchjnjPLWoy8Sy17R7spuEeXtm4mu3K8VxJY5UkxkLRuvB8c4vXsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwXnkru3DUKu9t3PfANvs2uNETDkzAz7vdvQYmHyajhi8pYVK6t9hgJMzyxL8BkRr8z3Xrkm5PBq2oMYqTjjZan",
  "key1": "w8dcUEb8UjQdWKgrZL1E6y9T9SH7STde6srZjqracvWufZyskh5CCa6ASsy8stoUduRKrTkYZAbakXRXCMyzX8r",
  "key2": "5gDN9CuCg7StfsuJJuxkuy89YLHvdseN48RRN8o2WWecqRx2W9dkuukR2LpAGCu6WoTy9qdFr7CuuWghL6Fh6Y7H",
  "key3": "gr4MA34wp52xe2S5MFyWsPgjmzm2Tr6XCSsfoZCbmH9wDUE6y2bsnoVUvCYoT2gYKsPuHi4ZdTZ9qHRsrVtYPnB",
  "key4": "241jqex4vhB5HgBENr7KSMSE3APnqssnguqjrqmWdGmoHsY4WAbeVaCALLmnwCw3wD9j7Sd7KZMDovcMLe3xyPZ9",
  "key5": "5DoWSoyQn275aaBMsLeuyUxw8GgjhFsP7hUeB4t1tz7LjtmDwqzWRUhhg1kkrEz8MnELXQBYYeXHuxjvV5zegKCY",
  "key6": "3jCUWezpx1tMnpDsKNWsv6Nw4cg1mBKApvgWG9ospVEtxTTWKFEhT7ZyhFPJJjGyQWRoEKHmnPqvL9PTfiriFYNk",
  "key7": "59ssw8CzgGBvg3QRpwfF3P4Ng6Qnv5eQDVBUYStEG16d5hM2UWE8ZqjLu7HR6Zz1mqnVQHdotty5tvqsbodLEmNs",
  "key8": "5S2fJKx2EpoFYZnRSDoaaEM92AT2X2j2F7PHtDdQ3o6hjpr9ufVZx7KVkdLCZmKpTRFHBGXPKzdesQ4Nj2Y71dJY",
  "key9": "4BCLwwt49yZSSQgeRuEGWXGJakudUiEbeikrhvnSKsLm4v1cjSe5JJMU1SZSwdVLi4jEGFEozNdKTLGcdjM7NJzh",
  "key10": "4cXcnZktRM8WkEsLwg94Q3atCvoegaD6Qavh8NZB8r7z7HRvKqGHBnt287po4BDun5jvfwPhNzoB4FCsh5nSGrwh",
  "key11": "4Y9QtFoinQwVFGffEVw9bJqqCgHcVo5ofbb5vsMmaLW7f6z7nyVCKy83Ats6Zx9W15rENuuLVQZHr2Npp2EvmXCr",
  "key12": "Tu4yWV6NRPeu2Y3oihs1Bs63EF31yi4cNVL4NW5rRhJCW76oVmEcVpFZZNUtAAv6VA5C2YoPCWho1xPHER7j37n",
  "key13": "rrUeDubvVD2rLfGEdD3gLSFsRCd2vrJV8gLtkQQbgAftbSuqfeTBjw4TCRMDYR39Gfvp16U8FHVGMJEkrKve4ZA",
  "key14": "5UWHXicx87DLNjHJuJv82jLSNXtrf3PfTG7jH3YEDHKnzNrm62nsNB7eHPCvhg8ov4FcYTmT5MUL6nndJKnqdHDf",
  "key15": "5XE2WxvxkhrSzQbfQLYT2QwJUbuhrcMuCGWjf8XJeHCi5CsciLWBRS6X7PZb9cdFgVwpssxawDEdb97vpvCL1eGY",
  "key16": "3Sw2f9jNKDibLNo8LYcoRwv1ooUKLcHAsBMGmGFTzv4Fja8LGoRkVvWepPSngpRrXUQ1QCoLC1kAyXfpnbm64H9F",
  "key17": "28ddXxJBZFddDSUetjkqXevGQTKXwb65KgWUFxXD2P2aywuLMr8peQypLaWRPDT9EZyEAWzSB2Au7UAvCb6A5T9N",
  "key18": "5AdNZw4BeH7b7KToPXA3aHo1ycYvheMngktc2gbe7VX6WrVW6jfCxs86FTgYitp6scMwji6VGBYtBADC3gVkjLJo",
  "key19": "4vhea5jjnwiX9Y5buALoAA7mqC9JkjnATjMhDXy6f1xgAuScdLmMAQ3Kj3V2y99gLQvaS4XMn9x5q2ppcRL6zqS9",
  "key20": "5C1XP9BHBjrY12gsStYQCemL4oVMxLtknL9pZfh7QNyzFmsaDEGHAyK1spUTX5HSje124ZDQLzZr67N8jLnrzUTD",
  "key21": "4NLkMRMAdeJhrKUmhSBzgL5TDa6puEjgZaJjgyRBuDPPpomX4op6zAxhw8BU5u9XP1HGdGiNkWgg3zNXhRpJRJQV",
  "key22": "5fyuDmp8reK1zWjo2LK8Xtd1xVfGj233BQ9mENNHamtNoZQ5fWuSnwidB72AdfaQyKp7J6uRK4bd4rb1BG3wE9rR",
  "key23": "24sFZCtAxW2wAMJxLR4EEzhKuqSGhFRHkhGZcvxToEhYJWRoMDyFUsvSU1A63pKU7YukbWg5Z3RhsNVHsZ46AA8i",
  "key24": "uGXMdtw4AQHg6A8qAMqK3FkPuJLAT1BiV6UwCd7ouwuM67m2Dvync3pkM2p7ZmMRHNMunuqW5cWB9DAxPRiVg8Z",
  "key25": "P4SpYr9yCC7VmapqBq8KvY5SctS2YHWY1vSdN5CyTc2W6aa4GvvR3Hhad353c4bDP2KJ9XektFiXngZa4uLVYVu",
  "key26": "k38hTZkwwy8HUhtjWjSNkYL5Xn5qoRMfdmaK99LYMvBSMKwz4r2U5roCozBafeujCdZbDgRqMxnfqQAE3QgNLj5",
  "key27": "A4EoGEMrqcpCths9DuNZBTkD9Kx9igxSUrqbki8BwVaZcn9VvxVwhAHdiqBFeunwtkhaJdTVZos1we1bJ96RdDd",
  "key28": "2zZXoGJ1aLowtKJUV5UJqe3R4tCgsmmNrFJAQTbUKf1jBCoqt24BGSiVGQ1YLGaDXT8i9fZmymahbMAvXbXybhEd",
  "key29": "3DRXi2SPL17WkfBFZJy3zbAJ8cdCWojfGaYfHZ3epgxyPB37ZiM8wDPW1Sq5iUFt4u4d3TvzqkzGUBUNrUUpEVyt",
  "key30": "kEmadmxpf4iwpWHkHa3pCSUiMkbN4rA3Adt8RvGgZHZvHZzV9A2pT31tWG63qxNwB1E1tK4uvniJgpbGCxCKbDY",
  "key31": "2bonJrzUUC3eDS74SQr4aTobGdZVtHvWBGWS7ACzN2X3tJwHHcSfqP5FemHL3FgSMJ1F2v6ZkYc53QGTXTvQw6Y1",
  "key32": "2tPf41mX4prgk3uvDpuLskGWBVq91S48Fz75rGNntW26Ag3MRyWp6Nk5aJzg9EVJwnMvV3fnCYvShfnqmUYPMGDV",
  "key33": "ZMgGXGez9ouJFgPbvxgcwJKVMninRmTj1kg7BVGLtF2hvkBKjpRrY3AEG9VqgBdfWPMU7Rb9P9aLZ6Syrkeyic4",
  "key34": "5kicAJG845aDMKAzkhnQ9TH5VexudzJNq8y3pwW4822E1kakgXpe9KDaj1V5113AEcmZKVTtMBxiULkTUtU4fHYG",
  "key35": "63kkk5TEED1z3wAe9tedUsVP1SivyipsQ5U6q2rX6KPCYrWeq46HqXGypgcCsjY6nkdCNns5bk3xuko6aZTjU8cg",
  "key36": "4JAGmfL3TLVxUyy8UejmTesQKFPYf9QXiznpFYExNXYgurNPQ6wYe4gu2z6W97BSwG6rQYmRNwvtBQ3yoMtdVTDU",
  "key37": "2GcmcMsBgBALyyXip17CecYU4CxTM5pFqoJdjBWCaTNQMHbo7kSPsJrhwpCzu2kPa9sPv5aFto221GdK4rRbpu6F",
  "key38": "2QFbDMPfGw2vXq6VwaZ3Lisco3ysWPmYC6kkSwihNyKje6qhLNMfNJPTBMio3QxzAeiAjPHirpBjuN3BA8HXFHcg",
  "key39": "koNo3iYKiLVcoi9aYdW7XSaJdxZNLXYK2dLTeK9PcE1TojkYPBWk4CV3JH9QsmBMQ9BqNFnFt5TWU7dsdn53GNJ",
  "key40": "3iZumuyBJGribTD8dkHdFa7MzNJ9kGHcKhuY6iS2jAt28vfiFzMLmYHwTZCBuXy7CFMCz6GjGw1J9HtsVFqb3oP7",
  "key41": "2bvNNtNhf3x6FFmctedJKc6HPVQRxnwc5c2qyixn3P3fa6vbX3t4BgmqvigJivrwYHrJtjE9JjQNfT2sQ2hSBSds",
  "key42": "3wXVHUG2vbqBuxjYYjc9Rh22RCQEVKAFaSzJErM3k3qj3MHtJBg64Aq8ciqrjj7k8yqrs1dqTiL1snmZUshskmFn",
  "key43": "38wnkPnHB6yvztZ4pW2BTFnRCabTJeRfES5V4WjvXXURSaLTtgt85gCCWCHbjiDzagwnjCS9zJrz5DXepVcfx5kg",
  "key44": "36RraQkQBY9Un3Q56jvQnNEJLYKd9iEB3c71RyhtX8ZounXUJUj6SQ6EBxBtCFvjVUs2rGhqbxxh6BcuGtV4aH91",
  "key45": "26R2eyqCqcutHjXzSt2ALN7sMXgGNxpaNBozGxQzdNKEjQogLAf6mJxwYYrLfY7Zu4zdZwEDajg2gQYTgQLsZWCS",
  "key46": "2H38UV51ZVnSi28DHhKaPtTTb1SygSERzbR5BmXDq1JQTx2vWASxVG3fvdypf529yeqXfQ9ZA55p5jQEhE6UskpT",
  "key47": "B5CFcJgn3UJqDKLxxjr5PmEt8eR4hn3RR1Q5KtkH68Ei3AeJ4RPqkA7QpDzzisp8HJ4wk9rbwmAaL3YJaByER8M",
  "key48": "67duXyUcJfRjpXd2xeXW9bQS7cu3pbzygw4wcdVAmXQjGrx2VU8cHo3wLLZEa4bkeiXb3N1v73MBns3UxSxCR8tS",
  "key49": "5JcGrCMqdWnre3JtW3iUpM226ZbpfZurSykygH61M7peyE9MQG8AvuKwQM24YtQaaYaPx7QbaKNWX9YpBJoAmVbs"
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
