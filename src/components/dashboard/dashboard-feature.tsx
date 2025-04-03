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
    "4wT9aXGpKrQcSHsEuq747iGspCkG7e94iEdJ3UJL66ByNxrYRRUorKhu5RRjwEfuuee9E1MtSdBsCsrzPdpP7Zer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rCj44nnA8NNA1eRoJMWZ9kjjgFpc9uVHnaotJvSnNY7taUdBEVXYHpKJeQGQUPWqHJzNKxfzGmSEFJuVJk1pw2G",
  "key1": "29iGV5YDsQ4KHXve56KHZyDV32za5JTfY5mxWpvdgRzThRDG6nLhMnPWQRcC3Fkf7Em8FKM87vqax9CEAzZbBqXY",
  "key2": "3bZDMdBEtMUWXkUb1eimbZENwCwG1fJr3wyRtNxiZZiXcQE8PtPWP6V6oRo9DRbHbxswz1rmbbAH8KemQjAzUhNu",
  "key3": "5JwrvP54J17K9DdwG7VMFXyeSbTSaoXksQ4miWL91JN1KZ3CuZysdVPxQ3RpMLyVHRccVqs1K4MUwdjq8uhnNDac",
  "key4": "4dnwVYPDmZm3uYKu5RKcSHTRacMwUhkuyHbxRoVjLKgXgdF5jBahw3rvYoaMuLajzDuXr1S4CuD4fmjiS6U93fmo",
  "key5": "66MyJsKymJpNKzoQZvzeECE4qVKsFRuNfnbXaReNnY3g2gZSXCwVfdY2wh2LLTgoAx9tVdmRqwmE7KaWrkQVSi3",
  "key6": "3AGnoMJuB9FDFbjRxiP3MgMKXWqFCWR9YkdDeeU9bjn3UmiiJFBaAzGA7tHredWXZ44HaMhwvqwYftcDgyfiRYJP",
  "key7": "4HFDAkbEuvSxPVsUvF1Pv3a9h1uQ5AecichdzuMur2CMkoPN7bzdGNwSNJ8w2MHAm5Q3ee14T9J2rcYBLnofQ8ki",
  "key8": "FKja4LoAyaUVWG7dd518t9fUPhYu7EMWSRP8ZrBo1zsWuvDytx8XkF1ubDFkmZvdfmRrwN38m5xSEEaf6YoRdDR",
  "key9": "3LEAbYA225RcZ8zvpej7frZ9JhVkWGcmXTXjBerggvQKbRMbQJbY9a5hQcrB2UwqWMCfbUmcSaaPejkFmbuizutN",
  "key10": "Hw3xRD88AMx4AzDUYYH5rrGRqPAHfzziCSrg8J3mQUg9jHzypgz9kXup3UXnru2eEm5U289uLsMuzbKnFXmNGfU",
  "key11": "2L3m1hri28URjDwJtzULdhQWJb8RSLye2XkwFwGobr24hmUt5SVXy8mofQbn4dcmc1t2AGk8Qa82UpkyNGD6ND4v",
  "key12": "jTYoZwc4xKv2cnk9GgAcPhmkUqgLgndzAJuUX7uUqsGDgjdDxdsr8v655uuS3V2edJK5er1bmTR6nDtrePthRvc",
  "key13": "5brWPL3Hs3ckbo5nZy4VFsusiHGRa6RBmL9v6x3ekxRhoinM5hL9nSJw2cDSShwp5jsWn42byQCz8665HSs7t8x4",
  "key14": "2jqP8e7BL6gWxgWJvccvd1XHZd4ShCjSBN5Bj4xBdg74DQM3gwuwNYCARHjRagHcEiNMwBwwRFqaMFrN8fFvdSAb",
  "key15": "3kGNf3yngTBF2BFpN2KQCXWu9Eetqbi4AftP4WuoeCuo3RE2Cnqsk4gYGb6ER8Hht4fHHYmdBeLAajybAvQhniHQ",
  "key16": "5tVnFyC43UmL9f9CYmza1JxpMQAwuWvGERzAd7XX3vxSNJ3W4NHoMnG9odEWEsyQPh17EftENaPdPzJYkq3JWP6S",
  "key17": "2T4sJffDCexLEd3ARMYvZxCNGmVG763Lyp5P85Ks5352yBX35VQRHuWi6TevzYH97D9T1bKBUsVNjL9Gfpzq9LWV",
  "key18": "3sC9h9eSbttZ1MSPLypLNfnaHViUQTpQJt58qPLsPQzXPgamtBDp1NYsH7RgdFLknfEL5sj4XKR8yCGt6rDBtuVt",
  "key19": "4yBAJVW2owfYH9iKBUK2M5Vih6BxwrK2sSYd87BZoqim8vVxnUA2G4KecAWbFttEiVoyvNZF5QCA86D64BAfWQck",
  "key20": "4NHgAhmc2AxbSf9xNeqGuHdYWMvqUcBcgz8BQeb5dnhRQSg1N4TFCbQCDGiMRLWtYcW67YEwehUw58Yubdw6bYww",
  "key21": "CJ99XcQmTrcUYs6JbLUqgkron2ZSs4rXXhKfMSX5gsPed2H5Xi62HFrBn9N5RnNZQKaWQHTKsMzHfQo8kgLPnZc",
  "key22": "3Jvkr7AzekfgMTWr6q71odEEty4stU9am4EpvwoPyGjxJemaVjMVEVbiHJXwNah57fjN9gkjg6ecep66QG87HW96",
  "key23": "7wFAQkjUkM5JSj7QTb6Z27o4v842m9fZKE29psNUgE4qwhN1kh4BRyfjxrKh3Fo6F1ANQ2PWqdCCMLzC4HMcGAr",
  "key24": "2XbdxsumRnbHJCJjpNexmoj6coDJmdyo2CqZZvicc9cQgChKkJbHkkivaZHf6kEDtswToqHeh4EszmUporfERSK3",
  "key25": "2r7bQkDZbWLKjDwnyiEbZGaXg5SZLgK8uwCbuXW6XKKYtSnbVGG7p112wUW8yyV1iDi8RtZHZL7nmEZuvjvwMe7i",
  "key26": "2QFiz824SKaonDMBBtwg9NRXzRt9z3ZebiWRKB2P27UreE7mNnGSQTg9tHPGKCejwyUHVQZ2TKrVgHUGbYVELacf",
  "key27": "3dtoNJ1krGZzvQTPmXeytqfspS2uznj6jrxmPgJH8jfV9H74P3SYH8FF4nntPkhvxE9yzUD2WqfRFZdykbosGQjz",
  "key28": "5KygWHqw3W7hiJeqUFJMSSaaMwyzMYNjWpCc5x8NMyfn5tVxZhK1xKiuQpcqDSYtyYoV4991geVBN2K18GoEJE97",
  "key29": "5Ka3v2K35XZtc8zXDavj7jJxo1WA7HiGxMy2XC1QcUPgTCrn1f2wbiqebA1ZUBvzVmquC1LX3fy32ZQ2XNFwCj4m",
  "key30": "4TAKtmzfyowzFrwBuC9fWn8cYTvU9Zn3cpxmuKSLyzrtkGs3rXFwCHrPvhiLBEXi4h32KQs5YUUZwPvUN3Tdbwna",
  "key31": "3JHQprLiVTFdnb9SpCMZcgwdJMhTTFEv9gXcWW4airzjQyy71dbV1mMFjz5tWVVqiVGZ8oaJpLmr2rafzn55eKkC",
  "key32": "3A3ymFXx7ftX9zw45NM8PdNxuvxa3kqqnqYK1NaUor4NhdBPXM3b4FZYUncD67AW1X4pV4YwXZ2dTthUNG5wAGR6",
  "key33": "28XR84GaccVXL78rC61YHmQE9AF2QZguGKnJLyCnJqLe9JasZyG4MyrbTcBJ7Ck95KzvR9muYfAhytFRMFm6q7Ca",
  "key34": "3nmW3tiFTahyZNieXyTaSRxQoUEj9KEWoiq4L33R2qCeshim6f7GB3xLmRr4SappKA5uXeC3j7fDYrSU8ZrjqnMA",
  "key35": "2xoJtZz3jns6FWyyfCpYkwESH2ANkKaPRrdFc2VCpL3ryoNf2bqux9sqBz8btxEMM8o8NaTxACbJFgrQpT1tC34K",
  "key36": "4xCHvbmwSFdQvywnFPeypufVyy2EaubqYkqpmG7Q6iDyoDvWBFLGSs5N48hzLGjhy1TQbtEgo6h73gryojvHqjnY",
  "key37": "57tv4c9AKtzkpFRhZfMaqrmGs1z4zF1Ugu5wjo76tMppqXBAtbDUDidLs4cxZ7iQocPus1VukSaqxvkWsTqXCfeG",
  "key38": "2sANqhAhHNccKgEQ7T9XzyVsMcarQvBrJitfPUi2RQ6ZefpJ2BYTnyfzxKZeF7NvcPV1Q6mML4D9ju237cWgw1vu",
  "key39": "45B7FccxmrKCntoRdPm8cGMfkYACRvrVUq4zUPKXQ7kAQ4Bo125vkCZHKDnNjN1SNyEGxxRQS9rcZiSiGYkoGtVG",
  "key40": "4vtANm9ZpfVroeyzHR83fbFYesooyf2s81BRdwNDFgD4BDVa6Qqzh3n5uQeaQDDGn3tdGGzb9e5rXPnGrTDvNaGo",
  "key41": "3TnN2Hdvrr3aqzjAyuHrnzCaAZSHzXdk24AzrzNEsaNU6Fn1w9ADygSRBNJszD8U8qNBWVbbUywzvZH38GJEdR1u",
  "key42": "4gwBeg3XMQ9z98qhSPX18JyXz8wsBDTPpuuEfinPSrkvG6aQCX1ysoDndPpUA1pWpKw3khWvDEybY6EFVT6cDWxs",
  "key43": "3iPSpmUtP8ts1DbDCm7RDzrDvjcVw7vSb1oESS2xo57or8Q5XtXQGtfvLDktxz7MHXq3bXNmZ8WiaHMS2EFKjZ56",
  "key44": "4Ftzcmf8TniDd6z4sBCgg7GrA87fw6hpCJzrdXFd7GhwDtMHhsjeEJuEtQvYpcQRy6Z8H8xdThzGUy1LbPfNyieQ",
  "key45": "5KsYBaGkiNK35roaxy6gB8DfV16QLDJqBt17cc9VUbExpea8kDKcAEHEfTbt8SJnKxqyM1P9Z5kYiGx8hYuzV6nG",
  "key46": "4WqR3S2jNka9cjQ8iizuwfdaBx87vyPSkFr3mCEqmPMj8xvsRn1vEo9NCNZL1RBtunvqD69Rf7tYHdeUR3it6HvM",
  "key47": "ZrzLimh4EE5diuZjyLNVQpo2jAS1Ei2GXv7vJ97DmTQ74K9MGiHK9zmkBjxmVGoEvd8o3B9TEvrp7w1pRApo5xG",
  "key48": "31bn95uHmsUysCnsps4gLHHY7Q3CQc8zuuq7w31Xfst1UPhw8caRWSidFNDxTVFSoGUSnXFhdHQYgiJn5ZkvARxp",
  "key49": "25mmxpUqjGJ7dXfCuKzc1fFqWZZCszw4XSArSRMs8Rp3Phw7JBfBpxrBxVvz3rEbKFM9dxY9A9G1qHUtrQaxawt1"
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
