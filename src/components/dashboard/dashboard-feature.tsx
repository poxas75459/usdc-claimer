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
    "57Z2fSCWxEBFwKzsEPPvRDprL6QDouzrSugEWCjo1x8WZGqmn2oGs6X8HNC3RXVJCmmF6HrpUYSujqzoehgKa1Ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQ648JNx55XxLjhrK7AD9pEybsiUE8KExzKvTd1Ei8wp8j1ePGYjbYtM885a9uz3RKLvsLkq2PdyMJXTwQTwwVr",
  "key1": "52NLTKjViQKEuL4qynQyJPywQCzv41F643EYdcVZjJaRsiArJ7URUZcYvxFhQNywHpkW4AmqU3912ta2DToSskuR",
  "key2": "4cNyUYvXbbSn88M62GjhRhMtPAsy8ji2458gVeTf74vmd6z23tkhgYhZQYL9KpDvbaTmDvjF6FG3LehVQUVdmCKZ",
  "key3": "NDGr37Z8V529XGQFdqDvbXMixnUSzo16WmcytywVfUUiu2oRgRUjoJJ16nEuBN1Rxyer92wYaCWEdJGZfXgsvRX",
  "key4": "2JdeH5VJmT1BoUbQwiUrvYsxeY6RrpS6RStaUPpygLDjsAtpy4SdsMiqUxRHQhkE67dV9ZWj5seSCvJC3KSqgfTr",
  "key5": "cUepQy8ta1tB8ePD1Y94BX64V4DXAamwFNgF7wmVejo3RrPDjBqvHaVt666snNeHtrnjSF7RxA3xLWxFLqVFqrZ",
  "key6": "jxNHX5CPrQofFB5njiaCv5kfw9zS4vqh92AKxyd94JBTsaUQyixShz6PfKqcVfxLS4iXuA9bSfXE8qeAT2xEfVZ",
  "key7": "2UCoengqZLe4tREpqxaXtL76SkrkdimVqWwVSXthUXfMs9uRimce8kRBYxcZDGoAvs2U5mWBgYcu9svd66NVFoJv",
  "key8": "2t8Vr3uTXT95sVmFJjGtGefXn6ZC2FCJvnnrXWmAjJJGiTF4AwneNrrSzKEvmHKWx5AogeuqJyFyud1wDQvjKS2",
  "key9": "Vsoaa1hU9dNhnx87fEr3DrGjvSVrGzQcifxDmqwTFt5rwgUF2m36cDXhosaETDhrJc1ogSnYAwT17NDti39K1qq",
  "key10": "2Qv5jJYdG8yVTWAiWxzM6V8UjYzsnc7ZLGYUFCE4yeZWHrv9t6XNbK8DF3bLSZ66Myz9mnHBpKavArUK8x3e11HN",
  "key11": "5t48teBEqSzUUvncTZZv6HthHDJZPjmjzpS3fjmXVxGRS1e5rDck6FCAvCv1qfKDLQaVcDVUkjE4N1xRkD7sbJua",
  "key12": "4QpEzYPePcRjHBPHwop5zdCTjYQCAMCR5H5xqP7CRpyiyhLKPiLtnWu6EMT7cSRksqmKFHYoQmLWwq4knkEW63kg",
  "key13": "29WQNfdxCXmHCBHMRsKy23DXwVgRNY92RsMWXDngf8rFr6cRGFX7aBgktT6Vrab9P7wwnreUryEdxVo1Xkq79EDB",
  "key14": "3gcURea8AZ8DhFDc37f3LTRpfNmWQjdywp1bpJpso9aB3yAyUmMW7UwaUGojUMDAAAkoEkQjkRPUQTCiELiE7jgm",
  "key15": "2HrzAcCmLjCbUvzbYxju59yZ76D5HqjJ3Yk4WLSHmyZRFenwUijYb2yLtyhpr7QtDiYXxr7usBmxtL5GHuCGFtmZ",
  "key16": "3njvzR5UiHcgzAzJM8Zg8Rp3X5Hnm6BVczoKUwgFi9TVVSTzsrN4LUFD7JqM6FhfoNZyE7x1Sv5zA6mpSGNv6ACH",
  "key17": "U37kTkbVaMprSrdggsRjumJVFbzZeUcJR84x5E1ULQptiWT4nQZoMNGPHiWKg17ShQt2egkSFbriRWShGuTma46",
  "key18": "3oNYufGPNuv45AJ8tVNoiW9dT7BCppHrzvz9ggC8TjRp8FDe5zs9Eq4VUnhjTNMaH456qR6y1L92WwkQXhiiyAPU",
  "key19": "jJ1RJ4EeWEzk9m5NyrDJVRLt8jfNUWhguHoS7STcJE9QA9SKjcM1rEoU1zTaHZQscQtbvLs4LTasYn5ioyp5pki",
  "key20": "2ArXTmRA25WsLdZPyG1qPHQ4EZMQEAyUyqKN5iK9w5dME1nkmkcf9Xuas7HCrpzMQbEwzJwQoB3jVgqxrLEkbQ72",
  "key21": "2g7j59XHP9JY7rBZMVphQRCVrPrkLnYkxyXx7KsatSsiW4J29BpmKkaAocJxwXfR9SeoRErRhxZuLjGMocRpb32T",
  "key22": "3wHgZwtNUoe8mHdmmCTQMCPrRaaNivxNx85JognopMUCqyxRooUz2Wf7oggWnsbLFCUC53Q4XQZkKJvjATzFXL8B",
  "key23": "59m11QQjLNtHeogm2adPncT52C9Qa3GDrwGq5aGfW3iFJSeqjYJh5TuwPdRPJiZ3ySC43nN9Nc2TwafMs1DDLaZV",
  "key24": "3mtwM9t6EZKw8N57jv2Xzwteh9BKqkQ3yKDg5yahAXeDf6eRdrBg9Z89REjKfe3nyxRSCvUmphUN421Wsa8sr1MF",
  "key25": "4h3odgp7f2b7SHRHYVDiNoacCsW7aWt6KXPDKodpnoEdocrEnRfn3AV7m5mpFGWFvrmVtQ935k772Y12BvGiDiPH",
  "key26": "42RJLEc7gf3TfXyQVY5moaV6YbrZfQNpDiMEXHLNMw7s3seDYed6xw8yo9qL6z81rioNrzcQq1RoGTzbjRnH7LTj",
  "key27": "3GcL7BfcZ29fpvJjgFKvqdsxpKQALpTGJLwequZ2zh6NULkNnXsk43X3y7hjaU5R5DQ4Fupf7uJ9GcLZTK3QKRHV",
  "key28": "5eEyg9r2HaQNZ4KdokC6PNqCKKYeinBCbxmzwwjAuQ2RyxTtXw5UxvdodQQXsrwCX3tePzLHKNzTUE5tnmjYBtYL",
  "key29": "gJTeiEbjKBjtAng6aKCrzLVruywYmT6inZRY5YGMYhA9CUuBeFwZcXCHyW5DDgYM6NFCWx6uVnJJJFEGeA7d6bq"
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
