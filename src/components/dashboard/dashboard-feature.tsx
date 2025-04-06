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
    "3TjA6fTDEC1dueXguCMekM8gd5rHFDEix3Pe5r3pHXCgD5973wvJA73y7q5EsYWFD98MpQm7AgL3KMmrW8h4eB2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMLZ1jhYk6qBsB459ygHTRhrmgPT8HZ2ZPwvMxmo9awKFVTfUspCzbs4FaVmQXueHkuxxzMRzH7uu3vgk9VftxN",
  "key1": "4whPtQXg6eCngzLMxRHJXGZnEwqYvo8PN9hTpJwoatm7fS2UxDQdV4D3aSt59mcgsGPyuNSj3mfgMHHfHwBUpaof",
  "key2": "4u6dYYrV8mesDTJ2UveqLbcUDCDWEnvd93q6zaY8Gas9UPachB3DKmtBsRiviuk6CQYbVca7JYyQ7tWvhUQaCDmf",
  "key3": "4n5zM8BuhbVW6jx1wPaRt6hoSKR9BhiL8g5mc9Z2eDu9Nb2MLjTMF9oyS9gBKLineF5eJjgPJpU8j5V2PY6TXxgq",
  "key4": "5eUW5XA7CpicpMoC3S3s8LmbdqHTRahfTxug45PF4phqEB1z7883ddDKYuGkjXK69jH3pkXXpjHdbKapcDFxbWjt",
  "key5": "5H16PhKFBzy4JGwJDzpyF79mCmMus7NVR7BVtGTi6p8S6hvyz4bofcqt6zCLiSCSMrFqnH2v2VmEa4cccekmzFLp",
  "key6": "9Z55pwfuwNGNq6WTKXBgoCUJNGGqhuozncimPLYCE5NR3bZD39kWEgV1bQqfc2yx5So5WnaZieqzGi4GcKPProJ",
  "key7": "5V5vaNTmJkhmuxto59BfEWhtWk7KeCpGhH6d1u7U8JCVwgsHcHfY5oZaobNW8uxMYBPqA8soaPWwxHh6KCkpJhFb",
  "key8": "5gHAqUpcxZUzRA1iwpcYNTkVaraNUz5DUUfZ6q7Utk9NRdukkbPnmJ1NQMjVGN2XDTwzKWJS3qz3WmLVxL5kLawV",
  "key9": "2vno1eEPHRweyAvowCytuG5S2akDif9T55f7Vb5PsCXxYhZBj5nbJUuBugt1LQMsougv6KsUin1ctZ29o9BvDqyx",
  "key10": "37Rk7jTZrUpje2gQJcFsbvQVc6eUH5Ms2YnU14QX8LpYpHsocbqmXSkLpeCXaJXL9NWuZZ8EcSC5CMGWUMdPGDHM",
  "key11": "5bvmLmk7NCtJkWgMMj8731rmgsZYsCw6XVifqbJ5iV7zh4Cf42RfnQaiKoQUcooMqHsdgVfLphrfwtei6V4Yz4c7",
  "key12": "5xEZv363R4oFjdKWcN7KxoDRTd98FcYJ4MT4W32MNWWfZmsD3r5FgBhqW2Ja3W85QsUCxyvDTNv2J1s61w5wVDH5",
  "key13": "5riRibmNbe2XmgxjKoCvTL9GtPrB62xb4r1aXmHqTz93xQbLidLX48WfyC4aZGviMmBpDBnxah8VBZuTA7hxcbR3",
  "key14": "ACdYYY9eXCVJPVkQXnPH4T8uQir7uiMMvmFTT4VWGVTvjCqWPCTrxutcDS7ub72zzw9ymF2Lmwk4L5Fgcp4snES",
  "key15": "4fCVwksknitJRJ8rCfeWDMEHRGLHRMjXhw4pr1FVBxb74RkkupeZngwP4VQf3yPjFvWz5BowuJWgSzxUkqcA67CA",
  "key16": "5Q2kJnzdADN7ssMPWa7MRFvReYMmetJMriqAdbyxbD6gVtXXTrsVUMeNFBD9mURACtt7dSkqB6L8jgqQqv9sSRV4",
  "key17": "5VhCm4cQV9V9sAdkX1HD8veB5BaZN9iKsjE47zxge8yFjhRVhidEEBLbBMhZVz4ab7wSTpwyAXqEHRHnH92Sv2mV",
  "key18": "3oDTQYGxCPjZAje84si7zidrNRqocEuN6S6RytLW23KjNkNCNhJDsFLZezLRjZU4YnU8ExTSg87BJxtiyVeyBLNv",
  "key19": "strvXv6wYjQHoZgbS3hZEeLC7jLGgaZzMx5S4dptebZBNafTMnghYub4B5mKGQp2nc6cAPcq9EJz5sX5sNe4NT8",
  "key20": "2LauK5uYBe7FkZxybR9Xhp2hdncwyPUmA9DRYM16QMmtkNRVmaDQu8gQQF1Mo5JZzHqMZQfmXiD9QjqZcevr2hdj",
  "key21": "3F3DMjeUuBaRVtTGsUorbARZFmsCTbbibe529YUC4HD8Dtb5iQjTu44efnaUZkGJLS9nJHoHEFdYxgSs3fBzvWEF",
  "key22": "5uZkGg3WFW7JxgNDA1Kc6144ZqYB3M3wjdcN3BviNYUrHH8TPQ8VaLbVCuu1SVVTDxbeQhmERbC6DjgMwd5MVJg9",
  "key23": "5DDfL8xxa1WgySztUZTgYpsQkkuP4SAsyMX214CBzdPqkt6tAPJp6mA6GyQFoCxzmQ7az7wLhQUjg5ZqDFQQtdmt",
  "key24": "2wXyNhtgRxv1s1ku14Bn1rwEAgJqZPwghZxQNC8CWxUSUZnzfJvbaqT57skDhfJxjKnhdJGkpNtWXWdqKaReowjG",
  "key25": "5eyUB6dZuCU5wnh5sdsebHBFN9pLoGyFoJKUFW2UeyU7yZ72kJe55s7rWr6wNfDNG6ynFFU74E7AUF9dSSFNwT11",
  "key26": "3c1L3J1bjJAgYwQoA4tmGVFUEhgB1KqAaaydo9gikBJozeSQzCKvYJ8aBRcGHjASkLnKaskRr9NmqRy42s1Wb79p",
  "key27": "5AtHNU7av8xbLHdGMHFg96mmcvCnJzyGYwCpfvfbYuzZbyg8pfJwJLmrK3yGtxGMA4U9Fi3rjmBwuBHU7kBHAEmU",
  "key28": "4Xvefwv3x6WaFWFzveNqSUApJdkAd2e8pe5JhsM15sPhMSLboKnqV6bPgEbiqgwy7qeXZzv95asNaoydwtDSLnYR",
  "key29": "2dEtBsT6rRGjBiA54fTT9yGYZ7t7gD2uWHoYaP7RqtJaFHRUWAzoxEyxoHNt7mdYt9E6FzmC82M551FEDRd48c58",
  "key30": "5qJEbnyxqLFuN4zQWYw7xBKMQNL3YN38odoxcMzqjtaeMVcudrcWsF84MYyLz4BqM4a16V1EASp3mazNhEfovnPo",
  "key31": "4NmtmkZEVmoHkNBZGi7EixMWkA5z7y1wMLC7rEDc3XDH9wCeoNT1J253K7L62y9mJH8AAjC7zyhwa3YcupKE3r5r",
  "key32": "5ZnWj4wR2vTj7EY14ETEnG2LBZ97r3pi8aKdjb1pVRfh36Kqr882q739wUqgMDvypaSbingz51r2doNh4zmxbhFx",
  "key33": "47VGnZ2edt2TGDYy9YmFUnPaFan1SoQxLBBh7Q5p3PDxS5MVJaDJ16maHeiWuiyNiYnsmqoWwNPvc7FmqpTgcYfb",
  "key34": "5qMHqZmc8RVkeDU2VfhR9qZKUqBTXXb7HSVgFpYKsjynygcUpF5G34ToaKc1XuSHA9V2MXaKAFronMpDbFizY6Yn",
  "key35": "2fhNuUUg8LcPfSQQPz4sgZcKZCemnrA7fq2bYwsJJrgtTFJJZFGq1tPyXgVahqYBQKjy1LJk2Jk3Jx7o1YnkFnsq",
  "key36": "2SqadaqBdbZgw6GCAnu9HQJPygZ1KkuUCctHzEKfyun14BKebxZfRpkvRS72otpjbx8YmbBY583jtx772TKt2aDT",
  "key37": "2PhxrRTJTxxVQaX97hLetyHmaJVLUovJF4JaXtzQj3CwKW3kUU9SCdJpXLw6bfvLiBzxmLoR179KGto637cXEiJb",
  "key38": "37n8tuhfLoEgeczhYKu7WMh1hghMEz5SXeAuKPmb72F7bnnSk6gjpWVJqN2sYUzmc7wHFpsREZHwbdsRAAJkfdyS",
  "key39": "2Azxq4m25Rq6RxKYzVvFJ5CcexgBapuVTBApiBU73p5yrjtxuxWLW2XxAGexHJw2KU7thkcPHM1rDKfpQAMJb5FH",
  "key40": "4Na1zkVTxEfdz6Wz1CH7PeiyuQhMVou71Jq7fxP2BGC8sQpTPJ3xdWMzYzANLmmYcc68iRDjyahXg4SpdHxgHrjP",
  "key41": "4rtfryFuqDf2L26wM5tc6g88UGhBMEXNtVcEUP1vXPmNHGwVhYRJfTNgMqspXufc5iqrAHWRe9LzgqwVbhspsqrq",
  "key42": "58VUyCGQVijwBMT2wB9bo9YWJYreR3XySr5fAMX9XYXLxYBjQoDCg38ww8dv9oFCUXnimwk9JxAfxaP1ht8ZbQQF",
  "key43": "44Eigdzwi7f56rVPQa9w7VNRuW5rrxVxqEGwEKcbABkcH9WX6XGYvy4TxBtztNriyytFXSyysgbsiRcuHRLNRKYd",
  "key44": "4KZ85nCwCrtMfh7oR7afdKAp34HcExELGHWpYevPwvoukPkSB6gbjF5s4Zw9mRVFBEdW4SwKt2GambN95YkWp1Po",
  "key45": "2Zb9JunJ1smDUwjdf7BZ4tKpLjwJSA2oJ82FhbtYG29QREqvysoT821jrDwQQ5vAGHadi4XBx8S5XhDSs57cygkz"
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
