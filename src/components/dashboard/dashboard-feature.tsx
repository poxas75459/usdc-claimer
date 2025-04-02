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
    "51MeihiUkDfixTsPLuYRB4TxyNkevySGZ65KjZ9RX5HgT9LqfxxLHrhTAxkuwE4Y3Z2sX2tGoVeMJYTNRsMJh3ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k39t9PC7tHrXp4Pvw7BJi2Q5kw6Uj5nmbU3p4DfLT4ELdSvRDkgGcFGjQwnCpYYQhJCkFTMz2jJ1UxjNakrpH7y",
  "key1": "SaSf6amY3ty88vbwC1bDPjUHTWWRx1D8KWJvCxi9MDkFk8XQ7hf1ZMJeHgfj2TsPaByHTLcNffPY6h5rfHoQzYw",
  "key2": "2gGA5qFohdNbdPv42iXrfQ4ACZggmfJAGpTmXxZ8DVZmXB3EwyfSLiWHxLc5BVHtRKHYVVXz1j7pryebW1GnDE1k",
  "key3": "5zrHAdnfqQt7gpecRwdZJTLrZnSJmQX6gs93Svv6b6h4e12wSmpXppUHdFNxt1TS8h87z7bCoepDM75iwEHXarwd",
  "key4": "49oNnQJ7HrDmign4mLXZECvu1kgvW4Wup1uKn2WrYVH7ghqk9CDJsuNhLLkGENXTgAiSK1uGC22rZbtsKQ7i3RCr",
  "key5": "48GnPqa6TrjgkftABj1npoUixK5Y88yYWFGMyy1Tmqpc8eSTjj3z5euTJG7E4hrxTWQfPGgNrWfE42uLRZ9tZBY7",
  "key6": "5ScVn3a2VUcr2fUVJt2T3dSdJmASEB2zybTZcfKnUvV2HtDoH1EMjnDhV4p9S9zYnE4EHDpfvA9VNnQXdqJfawxj",
  "key7": "4gykCrixGVc1PA8F1C8Qzkug1V3M5jNSdFmawN5WTDkmxkYCZBxNf4yk99yZdf87dw1XLuf7BxhTUeTZuK6ndvZv",
  "key8": "2JibmfLJMrpPWHgAWj3sZV4yyWCAjUFiMzpSmQgB7RJKSR6qF1y7uogssCQkLgck3y2H84WoJzQFjBZnfHds6oaJ",
  "key9": "5Lr5wa4nr5Bd5xqCEDXT71kyZEc3rkVQyVxWK61YwLSvqko4FpY7TxrfNM35SNH6urVYp8cFj9YeMGh4rpRMcPFh",
  "key10": "2Le8Qn9jkFMf2rcFR41CfKd6r3E56PWxVzWiViYdFXUjiNULX37kbEdfKDr9VL6FLFPio4WM3Ajf1F6kaFynA2vu",
  "key11": "e9L673ag3e7bX1GTfeRDoMuNwAsW7kffpQTchb2KZ1S2ghnFx6tv3jQmaYZAFWwnjYJkvZLsFBViMJZKHfnXr2a",
  "key12": "4KgN1PkCgFy6AZw8qUhKJxeRZNV7dG1csfr4hEWwunpVGMJVLim42TTfCQxEbnedVXVxwFmrDkwJ5psBWfwaVKaJ",
  "key13": "2EyFP6MMNHAfufnYA9MQBtf2myKi1jBMniMeC4z9BBsC2LjdwAPCEu5WSJykAymGG77nG7ZQNnAQxTZuGwFh79aZ",
  "key14": "8mBaT4DYvwx3BwzV2D5cB8N1uwgb5z7vWqcuXazr5wD3KSxzDAcUw95ScEqFiLeskzNZBkCimZG4hoSCtozteXd",
  "key15": "3jyjebgM6UBEzWDxUQmDtwunX2RCxkpXWAJ2g2gJYarz54adpDWg53HwaDRn5QX64dreyqBaajqskYk2VqfSjJvn",
  "key16": "4PpzfoFTY3i8NCTGTqAYQTHau8Ym67SSymyHqmJyvZEXdaWSssQEC57t277SVjFAsbVcN2yHoV41dkQ8hPduFcit",
  "key17": "3kKGqiyJdyzrvNzVN9S2HFBEQvspiksve9txtYQZq8avdabTXSPmVgX6juKXvZLEp9Z1EeAhdFEBSygQYHsaR3Gu",
  "key18": "1jx7JTVXYVppBPYbpkB62DqKMzSimDF2QjNJNNcbqM6coLpYEpRZELNnSwWDVwLdMRMjMAybg6wTkRs4CZTJC4F",
  "key19": "59nEm7cN6RN9oD9xNdD2zC9ot84taL9eADCq2cYi6GfGp4wQsB5UgEGLdcYgByDKMkCzzGbpVKkMLTV5Vab4no8Z",
  "key20": "3wZHkkr3Pae93g4Wt2tzt5M53BqqHHkv3u7SNPxHotZ9C578tTQFt6aw6NqVUDuKPnPArKWdpaK3CbXjcggzj8AU",
  "key21": "7babu8K4HuYGjtfKvit1Wb5pdQAdRftsoYPsMvqTG16w14KB1nDgzCuFCQd9cupxhgZZMSJq66pUHWdBLAzdG7o",
  "key22": "2neD95CpY5KUUwR21J4cFZ2bD9wHw4JnRcucARN4ZSXyWJhfprAUh8jwTc865iwpkoGzKMQPYiJJihy224JaKiuU",
  "key23": "3YUubctKGgvXsRBHVfHWCotXLQAb4jSPASEJZKC4PPGtYbZqgu15NZgbKofQr21qzKVNfpUEwSxF7Zb7doya8Ndt",
  "key24": "4JuzkXUzXszRUEHnjBrkBqWbRTWEi1SYmbdnPnTy8g4tunXK3KCVKQNA41uyTnWgnBteX7nkbFo5RwZmoVeYTbHP",
  "key25": "4z53DYnpLQvVgUuQrCDSngJcD2SZXzqD6HUzdm99K4CLjcrfc2r76k7884wLikTgcfevWz2wPnh3CDYwfoD4E9RD",
  "key26": "39k6DqFM9Tq8WsYFS7nyWfqPxyD6RVV4kciPAi97DiShWvVs5o6G6T8ErW1V8QqAj2UArzLP5vkSFkVik2TVsvWV",
  "key27": "64mhFPfi7Mb6oD4y4EUukyYKhJJE9UoVbwnECfXBL7SoYBgwWkoSxSmKRCqRhMFp9hmMf1FafUqa7iyEEwssnukm",
  "key28": "5rrYv53u6KQsSDJ6uHvbjP1YFxPRsYSAA894y6X57RVmDACQ348umaJBguhMyhxyqjpYZmtZvHYH8MFfoyaPBR8s",
  "key29": "pMd2XmeH8k6qLV63Dgf6AbstkPHQiemHcDdF1Ea5A2zyspduQBVdwsUaJ1Y2CFSShD64prZouoFgAzyDeiQwZ5P",
  "key30": "263bD11fKUZBk276cCLEbLrQbQg2f2r1QxEyQdY1u1NjDYu8aZPjWsqvrh7X3SP47uEEWcv4giBaunfmLLdkmLUs",
  "key31": "5YxZYxMzXvndGpfRAvtY3kjfrA8NV4Dzbkg5ARYkDVmxiTwkVyVvPpp3Wct2aTVyZ82TaCCqriMsGbf3EZ7sYCvU",
  "key32": "5BxqfcRhgxHhnu46BuwGMJh9xBRUHhR1jaNa6yxvkcck8nDMxQ771fKCi5S35u43osKD2aMG3uUr4c9y15F9JMBG",
  "key33": "52thAMZx9sWf3CumypspDTSTE6EwzNWYGqBUfjxBuFZ5A5WpMdU7tHPeDJjU73C2d8sBb2MQhrX6ajcQ4bqeftNM",
  "key34": "3ZNai4aPHXFscgbFB63P5acBsDt5C4A3arCjypdaMJBEsCLSR1s2EeBqkhCSzrNgp2HMnxwW8k2ceJ9ULu28ByMx",
  "key35": "3e2oBDBJ6iXegKcrb31iKQ7QP7ChyRH7zET3QnM5AWm6cEQCf5nGvUybC5rTit5wTEQhpgfWs84ybtZpEZHH2u3C"
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
