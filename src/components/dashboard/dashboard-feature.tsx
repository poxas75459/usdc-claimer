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
    "4RFJM5g9rk3Zx6nWNdzqx5zYfZHeFZzUUCw31Em3vwXFHg8n3gHPM87uetbHULPBLzdPkjs5Xfq2KHyAErWohPDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iKcsLtMttH9WJ28kKHX5gGV1z3S2gEpeTAaJ56R5rYLe5huDhw2U834WmS5opBeEo2r4efg4uoqVoLJ8idkqUGS",
  "key1": "BdyJLVXBjqJkWtcR18EiakasRYBsXnDhnrVHTh6HpFQxctpfVPNSn9KJRF1Dhtr2EEydsxFggDXQuNa3kdYcevL",
  "key2": "57pGs9Fgvqf4de2RKmsvi67thmoUHYuhTTj7ig9K7e12Z1qw66m5tEPAqPf41V8eSScR9VkuqmXz9nJja8WNjRwE",
  "key3": "YUbBnnksUGsZe3dtcMjEsCyyJSnWehxEvWxaedgVPyBViGxqp64cEAY1ZK4LWrSuPjmfUKCE1DGtnrWxxexK6vB",
  "key4": "3y3Cxz56eu8bmLWamF5RmuzUEWNkAY9WWp3YLajvkMth9zZymgSXTv6ScZFQPNLp4RRUVekidUnqoWgumRHrRATi",
  "key5": "5voQ7Ttzb9iGE5uS2Np3LhCRp1UnXQKnN1SFDFTCbc28Ywmpob6uXCr8VwsMMYfydV6ngXQHC8ivTuLQqr6eSw5w",
  "key6": "2VcjTew7awianvMcvrThgKhnKUJMYWB2cjkxbi4Z4uhNJqs32bP4djJ7EJ4ZLeomhKSKgyjXa1wTRKbA4WjdRBEH",
  "key7": "DC438AtehtoZL8MJcPgarbtev3U9TMzX78ZtMw5AFJHHL5u8QhdT9uUSK61nAwxb4xCMEEWDdUxtLbkYzCcyVEF",
  "key8": "3BznWCYt3V5hzQ7hs6Mcfae6udGRFBvdVbYfn9NmyTrBUhB3qUeyptWZJ1WkuXmUrQcZpXZEiiCWFU9yZhe6Z37V",
  "key9": "YifrL6rBtvS8tfbwXmyB1xEdZ2uZabBswz3Rg9uEov6GGRZK4kZfrcKAYk9JyGuvV7sCvy6ZNDtdP9KGnZhojUU",
  "key10": "464qJRjnjcvD1amh9JGpsg2HKH5UiDxP19vvVis7CJ5QDfWT1QAHRidBs6zgAtyStaRHahqegeoyVMo3dc7ypmAs",
  "key11": "64SKJhBEYoohrgJAHdCkGns6ssWEeyAhcTGuHXvTkhyPhuDbHrXTs9ck16Ez14kdNQ8ywo8dN1GdTAVyakJ4QxSr",
  "key12": "473apoKYpnh48kE4Lzm3BGAADah6raXYrPGwAiNUbZWJqxXDMQS9a9KQA5coiSfYnTwAK52RBEezxD6UyL9J3FVV",
  "key13": "DtVXHb2yqJWN4DiPrzTHnuFqiWFf6kcYgUzs9ochKGFjt3NZXguJ2ZD2auhQRTxrJoykMc3Kgb58NKLBG1ap31w",
  "key14": "3iS4Qd9jiWYQmigRJGCuNomWeAFXArsRun295gFjp9WDTqzATNEAGrxLjXeTua6WSawXnZ7sFmNzkgUBbvUnsJNg",
  "key15": "zaE6DBrNuL2upP6jN9fVPFgzLmtUhFgQd2qchkf3GdR3sBxmynD1x92boHruEAatedyChzjfo36vGaBzWTAPddf",
  "key16": "52m4FGuU4Ky6UNqHmYM87kiNiiK2iDcUkMSMhcmuyqSQEpTSRn5Usp7qRyd8bbiws6rG6kJ5BPJPWxF8XWSUg3dS",
  "key17": "2HxwEm3wxNKz41rqW3YLsfj8hQNESq84yVRGsA7nejqbvadpT67XkY2ptxnZhJzUKMndGzbe7nHNg5A5of98cNmo",
  "key18": "Xay1WeLHcwTxAzug4s9oXmg6K8ru2z9UkaQBhnbaGcyeLxcKojN1HEtT5nFkScLoXgmH58HoWWSpfEJsayWk6Nx",
  "key19": "3aNEttu7YdeDfdXRTLbaGA6TszdUsSB1krXQkgeybmCookyxGAg4PtU5ZmrEno8b7bEyYdo4mXaTty5bttWj6RFF",
  "key20": "3pqyLT1NwyA7MpA3UiKmFo2SSRXqRYakPDRL1TWx9nfN6ixMrioa2DMANpFuoxvaH3MMCYMJW4pU6xMzVkwDBPxR",
  "key21": "2RQByDdLupqjyCYwVTyG8nMwz6x1fUawJMPBdZ5UrpooctbEVsTCBhNWySucJN15rUFfPjfsJYd6bSjbDLj86nPL",
  "key22": "5bUjAVrAhMDhxAkKtrxUD9gZTwdpqyoNbpB7xjBt8W7BKTAniYgQctcG9pcdXWU78VqiazzchMiuH26yu7vBnqcH",
  "key23": "5Lg79dx5iD57QUYsdzRcj2niNzoKf8n8mj2AzT7kxn9fSH4byLJ97YGHQnrqrXnWaDQ1mMj2hA53UWEzH2HrTixt",
  "key24": "4foH1VxHQGkmBiiJVJWwWZSUwEPiNDdQ2YCEyt3xa58oRNLR8CQwFnfiHKuS6YqsVmQSJimkpr9dVa13FvfZtpij",
  "key25": "kRn91AYdQhjyzVJhRNk2wfZidUKvyZenp8pxQnbbx9PEqBgntmKJQPsK4548g79RjsnbY3yLLHWxVa4sZvQs7SJ",
  "key26": "3Hy8HLwiH2SWsKcvKq5J6ZjqqDodZHW8TVRBYkQSdRkPtDFjpRpaw4uK123xYhrFbxwmSFfsSRKbEZweHzrZyMmP",
  "key27": "2U8PkShGn4tSbvZTn4mUFertsXxFBeLeGrCgh6jM7cJVRBe1KCZ8ht3kkhQKBuhRuf9ZEEYyPRQPnZgdtLy6TyNu",
  "key28": "Jhog9VqTrbs3RvzihurfefTabS5xsE5MzunuSCN9VBt29UMXMBq82V8tM1xdsuhJWgAYabMs1qXnsMp16VBuiyL",
  "key29": "32peJTP9bmsrvEweTVhtrgxFKVE2bhA51K2H9exWGSsCmGqq1eryR6aEeijfzQphBuNsi1ZrC6qYgpF5z8YYaV5k",
  "key30": "3GGHs8vWqGETcHqNyAin3kYQPzTDgryoHPZxV8Y7uuDS28Sjctv3kazVvN45MMqPfmS2G8inv42d4ZPzVHapiQCV",
  "key31": "5W8qCLb3zmPZF6DGWgvpYAqH44ib7ysi6YdWqNkYLAbazbahJ9h6miQcYBPbA1horPoxNRL2zfS1LMRjQjgvfmTL",
  "key32": "5D7aBNVQkxh46xB1vKf6huVs5j9EhT2dvjHwnbFnacbGowyvMqK6mJFFtzrxHJR1ure1fYDNsibBGkw5dY5XWMGq",
  "key33": "3wtTdretZXXvjirgh37ahK7nBytA3ZTagDvHXHdw8AW8nJscs74Ukq795q2hwdxfEXvLxCyqb5cN3QvfU5gGHPVX",
  "key34": "5WR4oZyovVpNvpjB7EkweXfqvsSTmrU8mFrD8sk1fZfe6EKKUK3SfizEx4maLZ4tTNmaxFPz4QNcpSjQ4ieecoEr",
  "key35": "3QMc7bsPpEtM6m3iBzN7veruGdJ9K6vQoeUiiTZV68wEsn174mfoHo5CbXSgqKRKEpFgQav9L4gtQoVEQfNMQJCy",
  "key36": "2sZ3s6jiqTVs9WRV4M27PV4AE12mid7qMPLUHnFzNgVrHcpxJJAvr1QXaQVo6LFLGjENDV7t5NG1gbXnLZk7yAtd"
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
