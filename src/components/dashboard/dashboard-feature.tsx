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
    "3t1JyMMkjihPNjQyrQzU4nBPPWdySuHmcpmMH6Q23vp48mxorqYR7UfyoV83J7jBJkpJ2SEGN1BAkMr26xtBY27U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfoQQRCXCwR57jQPkwfQ67WQ91Y4cEbiJLLVujC6HCzw6SQrYeCzBeHjjoNXXgRvztfaVsLUbixrq6QSHw1Qqaf",
  "key1": "3tMKsB1wuFi1JBKjxCCeCWPVGbNESt29jX22dDDZHbhbabUKSs2DDupxUZNNcGh4zVB168EXbS7viV66N5WguPbb",
  "key2": "2KrswoyNHKRxpTo6rcmWjcwib2MHXQAWWedFYT5XnTHVTKseKyoE3XDSgAXhoqBDYGMvdqUATazZceDJVjjLxGL8",
  "key3": "2KSNnbzss93dYFra6uLGnrCiS6Wid5jwuEWE2HzdxHmQB1E8abRhG5TTmyd2CnDc7pdkZ7Hj3HTdFJjCeGNyi9nh",
  "key4": "4SZDM2sRifWw3RPEZLdvTGzZRSNzdc4KPHimub9efY35JLrpFazgReVxACxvzXbfM3uTruTXa4Fc14UHRZdzVGnx",
  "key5": "2QXfYkqdQtZEn7autz5fyEm8CLqXy8M4n3m2GRLLZYQ4AXPmR4J9HqRrwdUPDvqLrmAx5g1VydEx4MAht3TCVkFc",
  "key6": "4oQK9QWJbtL4nWJoZ26UK9kTm2d8S2pMXWQga2SmSF9KH6Yc9HJz12ZKRmBHHk2wLmsYhzQHrwZbnc31fZ4Nz6M6",
  "key7": "4Hd7ETkRbsqt9JyRcUTMy4xMCstqxN6n5idTyKceakfWqyp1VPML9FB62Rsbt3bXw2SsgjG6v7iSYLf4xTE2NVUt",
  "key8": "2a8cKBSgq5yMqUW5qpvB5XYFsLrErrfb3kHED5Fk2zW3Ee5jX5hUwaAe8QKaWmiw79wqFXz2ic6YrtVhkDrCNpTq",
  "key9": "2UAyracvYXMuKLgq1PAg8VndrAKkazxqkcKZA9JjTzaGv87tba3ScjsBiBAun8yUFZgaYUdYJboK9GtWS4BjWp5C",
  "key10": "3tbfAqoLhgsGroWoF4YiJWBDJyyo49AHX3ZJdz1tcjsANfL2DbFLQn4f4PxMQurNKQuREGM826QzREjQ2pS5oVQ4",
  "key11": "R2YFXRvzVzwdb4zoGznQsAK8C1qphN22ZZTDA6mDdvoqqmkuhRsb5U3i7SAXX37Q71XJeeMxzdh5qUF2BuLt6TJ",
  "key12": "5FBsLVKdvvsY1e9ds9rdioJbjs8vGLf8uBie2i5VYkQWxY9mPMn5mgJGL8JXMHY9e9mwy7Y6dXQaV4cvepAEb4NP",
  "key13": "2CyrYPRqgau1VUfJeqKfNSLCcXe1Y7zhacGtG5sD2pQ3x6excpjH7ztdTdjnMy4dChzPv3AJ5JHt2hvPTtLUokNn",
  "key14": "2g1tMocxvcwpPrMhnC5eQohK1gsmGDUvZck8FvXqCmSsKenj2o61Mj84K9p7JFh9jieLPeEMwMqmhegdjCVUHCe3",
  "key15": "22NhwBEyut5y8B2wXv4KGZZHmphFsQptuSVwXJWRCuLZmSru6u3A12HrKbw7eDhTq7nYob75UfSn8k1DqvcR7WZK",
  "key16": "2THp6Be6ggirYJYAXPHm4BFTK2tKWZJbkoGZECwuAPy1xUEMKrWGVyRAu9kvdWjrQxrY22ZLai2xkmmQVpia1TSf",
  "key17": "Xgk6oHt9RhrwhxHgrNse6ZV3G5ek6fdRtTJ5bfeE5ms1dEnqFa1twE2Hw5tV2drx39geG6Sxi95VQDdQtnMhqKM",
  "key18": "41K7EprRN8yUQKYzhVnXXtpwvquGiXtD39noT9FJHcMFAL9wXneQwXWmN1ts6qt3a9zTUJmByqxiP77585CbXuPN",
  "key19": "3zWJVQtnZaiKV3JrnyFD7DcocVYJzNHNG3YZcu3VwsZQ6EsFSYGcopfKr8b43125oa19CSNRqU93mARYqURgGfyv",
  "key20": "3k4sv7s66BbydXJko8BLUUanM4xDo9JAJ8EcsLviLtw7xhkSP9GUdBNaTkE26JZYssDTEAToYY8qhGTuf3V6tbiM",
  "key21": "5eS8yYpfsoqoh6mJvZXPk7xDsRxg3SXsV61hWUA1BeZF8FNWYGWbiJmexSBKyLGWudiZ4k9NvJtTW9iTPfQ2EaBZ",
  "key22": "4DH7ZVMnnbBzM5t7LUSp6zGomuSwVHr4gkxw1zxKtncYFqEMYrkcNMYtCKaVjLqHmn9GorfRYYFawh38e69mAF6o",
  "key23": "4Aje8fafj6VPbbkPyitVoTGm7RFo2QAwbSz7tEXr8cjL8ona5LuhC3mqCgenzB15LT2ySMQUZmNNB5SLCFiYiLRx",
  "key24": "5vqDRyAePZhAKEcirNPqGkFG6Z7fQnqJP9V8tMz3CC3rDkXPkfD3eXS2JxQU277eTSnE3pmxrurFvdX2CeLAADYr",
  "key25": "5AgnTpk2DaDuN4C9WX1ehs24K8tsRwuEY3uz4JYG7rnQHt6tiwbxaBh4Poox2saY3KMmUcot6NPGqiN1gAntvxAf",
  "key26": "2dj59erU9WHGXKikaLLb3sKYQ6jsB7dd8hfgXWtTGRTJ2e6FWPg5GLdGHLGT9StuKfBQdXQKAzYRWgj4fcyUJQom",
  "key27": "5c8RBwsv5iYkpGhLPgADKgHuKkA6WjTN6aBvEV7DYbYspr8n8rtL1RiWqm8nAsLpiF5o9dYoQLtB2emADjirbh8y",
  "key28": "4eNr7maZAp7nDrZBLSwp5JZeebKsbjbSffk15z5n6BBXMHi1uCZ2StnHcRG8K3AhFcKUZntf2taRZCMjTAJkc5rZ",
  "key29": "5uMJc8NERkwMNXnDSoqjcKxmPnDapWtc1LNdnyzfLnRj5zeabffsq8sNquBx4ZtbkvK4Jqmvj6LxCFvHXZfANZH",
  "key30": "3AyB6WYDmhsaVGvkD5Vw1mWKUnSgKhn7iEePcac2wP9bi4wMcb8RbVN8xD2adfUxYn6JjdtmPFDdecDn2bi5KPVQ",
  "key31": "3iXCRSZVA4R3DqM5R2PQbFoZ4yW5RxfLjs2XaghNsiraB9MZbzxDLBZeYyTmWHM6vMDZXnnJt82naU3rE6SvL5GG",
  "key32": "5Z54nN57BJK1Cg7mtU7FxZ9F8YX38EW8EssjTYx9ZKCzmuoXP3MUXumKxx1CdLpBBjqo5AK4n4t9Me112qs2uMYL",
  "key33": "3f1E1JyT2cbnNnNTJPs3UUYGeuofzPzafB1jJ1fzydSKfxbH6zvpctyVLxY3ZwPWEG9CcoYrXJuqTFamj9FpbV58",
  "key34": "3CaWpsbLMuMwJyUcTnERTvaJo8LWiioN5kjkSmcqwvXeFQchwnHnoSvTVrq25M2Sh4kon5QVkX51gnqf9ofqy1cf",
  "key35": "53sLrJ8Z1jorzXMGeGYqbiw9FPuvLqVzKnsn2BwCWiHmntKSaSFZY4goq8Q54BG2SGgY8DJewZE2RRG3LejaEQM7",
  "key36": "3QsEs2XbQaywZKLK3EqEgNfjDH5ncch9F47GFz4RgyWcLPLs8mqKxmpxE8F6Upphr5VncqQfj4VHAKwVCagdn1Kx",
  "key37": "eEWLYd4Fz1ZAm3jmXK1eHs7F9zYcq6zwU9bYrfx9481p9qTGGKjP98Dyjr8k73EcjEjv41yeGzHpfoU8V5k9qSq",
  "key38": "627bBKhazLJ61vvPm6p2sHRsW99HqWE7F1GbEPZuits7Y85tDN9jipHRxqR1qKNsUGeeT4o3xAzeNFfUkSeQFJDk",
  "key39": "4pGG2Avr433XFEMtZNXzBFGY68dJibnUSndkzhqCUyRvy54tRgCe2fb1v2w2ewZFSupCgNrSbeKtsZvfKiWppsam",
  "key40": "2qQyxMoq8q9jjnFwRcC3iDPq8PUudtQu1mH2a5uh2d7iGmUUr7ZwHTRn5pWMMqqYWs3GZ65g3qsKretkQwQ9ppKJ",
  "key41": "485FV5bKLByPLBRqPsdsJ1U16KhxjkP4mKehQuYqRDEcQupdfSSfkmHFGnM17jLpR6putpfj4FtPAJ8b5KKSRdhM",
  "key42": "36QS6akcA46SjJc3cqxKdtok9khMkZ2jzZNcWoT78TXvg9QZMjzegH2HCTCKkn3iartQb4JLWF2eH4fb19ZMyrMq",
  "key43": "3dVAJmbwngyrn26eZMxdTZK7ykdfaknzGnPGiFpkXSxKdRvxtfHAZdH84hFgpZKRg41APoVDYUdMt6yyZmd4Tsi1"
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
