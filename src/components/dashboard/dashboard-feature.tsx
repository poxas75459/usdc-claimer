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
    "385EtLVA1SEWRpnVUpCdhYXLpCdCQCxfrwTfHZhdnGpmJgErQX67b7syphW6NiBRfyAsoyekyW4Z2RKiZqa9szuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VF8ME4mbVLxgXELn8WtPQVmbeqvAQjY8nbDsE1Na6qEmeDh9RpsSe934BbuoyH8sM4wJYYQJ7LP71bhrdi4a3ib",
  "key1": "4vd3KC6ncvEEM4HD37FURh5GGiQtyY1ufbVeCnQZoo98ptB8B8VS9BbQ6cyfTPXeGrftdjg1ghuYLZFZ2UZfVt4n",
  "key2": "231BZN1th68fWNSRZV7GiMB2SmTnd4ZgEmgVLmKg1rAPnsry8ini5Yb82E25LmLfqGDTbQxm141WHkq75wVHX5jU",
  "key3": "5iHJdjdDJJCFgnX7RZ4mmN2ndZv9ny6D4unuPDrbpcWMwqxbkk6CXBFAzbAuqe4MPG7LseQE368V9aeDwLRp1tUy",
  "key4": "5zk9vFdXsHJ5cZ6peiyPWXNayoNWs37kC5Y2Yanh69SM41osnPjT57Ycxig9sa6MNftQE2bryy8vaEAUgu3GT51z",
  "key5": "5vKvUCdi7dCjynD5XA7iaPhG1bgUTcrHSNUqoVZUooH2jQLmVQb48w6Ydix55YUjvxTxgdFCJNNep4PCkrKrFAX2",
  "key6": "eNNQqgsPzdqqB6U9Razp5Krak3k5bzQrqGPMYS4JkbFLwaWTeaWhjteDWAMRqfum1VP6q4Sj9KsH9xN9n2pzuoQ",
  "key7": "2TV6NKfa2CqEnGx6bsMonNkGoisYUM4HHXwvGkg3uu5uvgUrynYS2BgH2yS9HtR6WwsoMongKnChu8jZVpyyxMa3",
  "key8": "39VSYYNdbZdRqKuCwhZ9r7yteHrsrsBiaLs7edUDFLUNNdSL1VZUR9o5DqgAKL4qK3oBodKjzEkDueicVNVzohvp",
  "key9": "56mk4XHJc5Pr13hKbLXYGGCmABA5m5RkPm1tVfxsYLvSQKpk7NBBapNFgTGKbc1XrRQG7UvqAgxbEbmWjtbih5vw",
  "key10": "2deXAqfMp7TJHnu3LNUnWUPcy9SPpMZbsy8NzYRzp69PczaHYmwDyiYCJoyaCU1kUri6qEyX5D5FmNALtiDVsTMq",
  "key11": "5rbpQC8YeqF3M8gwFkD7h9VwXDHPBapgBQTmvdYPWTnGbLMMCLDuSid4yGrE7i47xKhpjZ6nD1NCqcht2tKtQpgL",
  "key12": "2JG5asRFDjf1TiJSu5xiAsvLUKXq4m3ficuEqKH3iuBX4iBHUtSaDTFfnakFhsE1cgbER7Uqg8T9RcTRtgA2HgNo",
  "key13": "3CdpTcJGknUbnka5pCfoQwDsVSnbGGCXtbXi1wCdBebudZ7uBX8qAiNi1Xk88Xvv1NgCqq4jHzVJdBsjsFTbUQvJ",
  "key14": "2SgHd6tAAghVX4EZ1qM8PdfXtCJabGvmzHm7D5dqfM8JGctStLD7wd7rw6jswQd9qBwQtFi45t8MfLhGQy5iqVT6",
  "key15": "2AxFp4SxgpkpASNe19xgWo6V1fCNrkzxy5pMoaM5JVSgAze8j5rVArXve4gcDs5j3K8AhGKS9xXWeniE6Z4Gs6rm",
  "key16": "5ozbByZSLu9i81w4Meh7zdjSvZSBQ63W8WAPzo4hbnCrxBdTusyfoeyMBzxGQSFBKQiP6hFE4PjbLnFt8BApi9X2",
  "key17": "67gDjxMgDGkkJMRCBnZSfE5H1EapWzsM3DAYzFoR4ygtVtxbDdfYEjq1Y4maH229qzUcPMy1K9TnP9dSnpdb7AZS",
  "key18": "C84ETS4693MT7JQzQFGF7uvVieGXnwrLPosYdpwrWkmv1SP96YrG5urZU2SbkzqPhMyYu1M82VeZQuGt4LJMCBj",
  "key19": "jhQZKfNbczr3kQruK4jaWjMhg5ZdVhGwVeNp91yDt3vjyxav8XyMh2djaNBHGZXT6kRoGgzkvtoy3TJdg8Mh56t",
  "key20": "HKhVWnRRtMtKUrfaVm7qDbATAi3KUN8267wSN7ozsJcJWwBewz6TcbfhcxqqXy4LTkvcckYWxo1SVTHG7vsBzXe",
  "key21": "2br24n77sFunhvfy2uAxyMxwnQ6VELSdEG1wf6tcrM5HC5BfBiUsjDo35P2wJZ2GXxNoBRNk7xUFrfDPaPJzyRGy",
  "key22": "2nvU679Grb8y8qGsU4Jhbfip3y7PrypWoSWsaqzCiFz8uWe4vKbNqChpRTEdjMwuLGLCS4yjvUgBxCFmN4EpEwXb",
  "key23": "5c7sUSLbh8bzzKEKALuHRVkKz5e9TcV7MGFBABmT5y7TGHXwFVwpq7m8WtmRM9A38a6QUdaB2cbTY2HTGtAGUUNM",
  "key24": "5VKtYQHb9gKRPQYRSQ8SPcjUvUFwp8Mphz3HbeXsvKxERTaK27LSQULe8W4aHUCxUavYXDHhaUX9SP9Eer3zudS2",
  "key25": "23Xwrx3ddwrrF769SbEfNU6Fvoz1eBHwC6522sh2kGGWa8bTZaH7AniHkgMKYNH3k59JGoqqjRCTNYrdpJ2NSCUw",
  "key26": "cXYeNrziY5AFgVBqwNJa4FDQfbjg5MNN65HPwRnuvk2JiXw5wVFWybsBn8f4iTx234onjhhCkxEq8uqBN5cy55u",
  "key27": "3fMgNPghqzTqNjrdoPWDJh1XNGyqMnsMmVcxXsw1WjuUQ19yBSxEeB9obGnMcMFdqVvy43zqN5DUG6NyHhjDZGGa",
  "key28": "4ULQUHzvo2TMsaBQMaPPrK2SNucgih15WmDL59CVoBUkbEhvZy3ADnCgHAMTA2Q182NAi13ykSYg3qvKkE4oAA7T",
  "key29": "4XpouewmfM7nt43subm5j7kHvCMf4KJNwTSnro98PkBpc6XtVdm5SGHRvMpzdHo4ksiCUGxiDeUh1CVgpkFnHn9P",
  "key30": "57CtGa48AhzBwQzU8YRBXmGYrZD2mShHV8qzeVm7C1QVaUVy5AGMqaX8DNDAV8serQRY4JrV2piQN7YeFCr9ut3A",
  "key31": "2sSEPmt2QMrFwhu517TTq18aLkLmGUB4mRrGKfFjhFGBBXkYgUugFAu77ofhHyZhwLNckBZKgDSy11FCuRaVt5UG",
  "key32": "5ifwm6duEqwpvt2smMfz9RESbLAwhxcVyh5Uop49CZNNWwvEZsr8RwnsxjL3M6chJ23ZHpPQE6dLNknp6jmM68Ct",
  "key33": "4jB42x2Kq8eLvYyxq8siQCnXc8ZNxA35Pb6LvPYxcxo4e68FGXVAYGqLzrMi5uj81rL73sCG6t7bzjjJXe2ieKFc",
  "key34": "242QVfJ32iiN4LTpzVDJumTvXUiffRngod3ds8Q5TfE7S2bEoxKMPnZkQ41FCUF4RF2yqbe8PTaso6Sp4SXNEQ5Z",
  "key35": "54Svrq19N14Ur5hE4WEUr5AW83qDaPAafZL6AtMPEn2y7dSb8d2aJAFvnNYqb9ZiR4EM6XhpiEgNNSSdnpCRF8rW",
  "key36": "3tAVEdqsLvG6Ca6AvraoWb6EtED8KGUSyUFP1udVDrLL8QMaEUCChSY6Ydjcvt7DWWP2CYVggGKaHbjcFUthY3QQ",
  "key37": "YBihmfzt6uyMHNZrKWb37Gyaxvu9N8xNoDuEvetKtnbZw75TESgMgEGgraaP99oGz4q98S8vo15cJ9FyTuxvGmw",
  "key38": "2MnpFkXp19HhW9ntuo59NBeDwwoTHZ1ZcZ7apiWBvJiWwUmJrJpQQxXnTHWoypDxGkRf3VbvfV2KuvgHUUgKwDvK",
  "key39": "4N6LJk57rKd8wLNxAddnWyAvrfYUoFTr2sV9DdccjfbFAVsVmqQCR3pihMBk5TuAPsv4HxThNNTjtsxUgvBaGpJu",
  "key40": "5mK5i8KanwHRXcgx39xacnMpkbVdBUSajNbVDbMEQAxPYd7pd8UyD1bJxJYEfQeTRF3tNqtXoMQxT6SfyVdhyctf",
  "key41": "4B2ahpYBVGSg2yQMd6fDjRAAZEi13T9QLYQYByxCDabhbgSPCeaP9ggjtWZ22wSxCkaUDEectyFHAdcGfHaBtFL2",
  "key42": "5s29nGsxVNt2KnnFXRdQz9LGjEk5ZWG5kjcCwUCNoRfbtLZgrsesizRscXsXfqJLeL3EbT8yvJK3pHUVH3obndA7",
  "key43": "BdQcxj4LMJ8ZWQ9z5aQXqeusxoEGRdnapE3iW4YeqWZvTH87TwhQKNXRMjh9FgUbUhvUZjcMtHzHea6RJaGwEUM",
  "key44": "4Us9Xgp6wXQ55det6Yo8WypUHWThfBisyemKsdEjgJxZ6gcSS8g3NApwyoeEFT8YPskiKLSyBfokzVwVsozPCYS8",
  "key45": "5d2xzkq9KANw19JUjjDZ7eCrTWgC8Mr2EMF95xcc2Hpb2F1wLisNKHverYhNxBdWTnoYwWdNuCDqcL8F7EwrWvJu"
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
