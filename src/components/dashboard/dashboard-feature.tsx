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
    "5kZqQ51qMem5C1V1bnhMuYDBKiDf2MP4eHuZ5BcqxMFoEhuGy56ARvcEHjU6gaPFLjggtvJCXAHVaJ5nRoKzMcRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdNR6spgf11vfeYC7qJRKRnA2qLMz2SNHMRiCLsLUPEDyA89foBdpQGLv8yM3NrdJwZ7AB96nrsa3yuNJEjUaFk",
  "key1": "5qZAF5zV3T1Kmkudbo2oAKevFUZopwjcTGyTjAAumsAKYjndSeqF84cs1WgLvZQfLq8URQeVSiEzY9UPPgaNceNZ",
  "key2": "42Znbx9AYfUwH53Dpi1zDbJ4L3W99GgznCgztyoVnXJyTTzuQVL7Xw6tJw5Gry65gUBqTJJdiPekuST6dsTLNYhX",
  "key3": "5eHfo4XoDLVsQsAKxKQmrqcSKeGC8JY8zLKFbyoGFZMPKcrkNr6wAzCaTs8VZWF64faTDUCfFJkbTEv2TMxpiZwi",
  "key4": "3XtwbKZPUFGKwQHyHxLrtFKg2KpiNhmF6FkvBGhmXJmVZSYTop3Cs1BQAuZAdkgB28ZAKZNw4V9ozkiCQBJEZSZF",
  "key5": "5y9VM8XMGcGreLt4Pca9eByY1rerTBqJXHv66YeCddyEdcTKyeA1aRyEwZCDVPSjhFDcRKW5a8gBgJ7P8F1hdvZS",
  "key6": "4gFBKs1QyPiuMepC9sb1wvJkUxENX1odezLBbCyVbpEEGXzp5Xdf3gYVFPyVzRhwygA4Z3MunEVPJeC5HUBnD5AN",
  "key7": "3E2EMfEjFvfft9emg3cgcWnnfG9isc3cMT4hU3kRSAAtwS7bNR9P3yhpHCYDRvPwG3DAk9f8kBmk5iA1jz4PCEp5",
  "key8": "4EdpA2zAnt491EtWXjno6kKsk1stqoUCfHt5FS1mq7JY8kvNZduadyhEFqU8Z9M2cGZGPsYaHi4r3CrgQrDTTdTu",
  "key9": "237Rq4DehAKkn669A18AcPDvUWjT9vHEFNQLTxFVY3Lwg3TSENN9n6ineCZj1LK39wtscgnahRRPAqCwfy3W3okW",
  "key10": "4kCEPCRtkFABEEqVtz3c1R4DDcVQmF6pEDGUuwj3JvqfBTwbpdCmHpGimNtGTiGmHGA8sox3RxER9k6fAfA7XEMD",
  "key11": "27M1w4g9XtqWmvWZzYtNoAsWLekRnGHaDXWf7Kqrvs9ZaeABx9wF4e6rSRoEZ6ryjK2SrzVxuYyG7fXEiJzya1E5",
  "key12": "2J8ZHajDsv9mtFagdonWfWyypAFKZDa3ZWUycE5JihQt5SaHUZy2DCmajwq9VtcawNmnqY5KajqB4TCntoaeUS6k",
  "key13": "35w39woWYmB1MmE18vw2S55Y8saSEnrpSHytqTKoRX7cQKeWxLGPqB8gfdidNir8cnu4VbrTyzcbmdbZtzjMaPQ9",
  "key14": "5hmrAhfpRW9KqHjMtFh4GNbnW4WjboQeLBnPBoByByVzCQLjAKS6RAnnKinSfDvBLr1FLZzbAajngfn3NzqAPgL6",
  "key15": "5k8jJ5YyxAT4q1YcbuNdsLDtW9V8vitBJVXp1M6VrieurvwuYhTg2LbVjtmBojhkDJqTuA6owqxE8WAP9KwHJFqH",
  "key16": "23wRAPNEBQrXj7tV1pTmWERS1h6siEgLBaDpxaQegq8pwwp5mxiuvfxk6RKH56vZLqx4vZbZGtoLJjPbNmemt8ue",
  "key17": "3QHrKYV4TFUmJ1TyPr61C7miYSbaYdyjXe7mLHqo1iVsLVpiHrKvrfg1pmLQENqdeggSqw46zZLZpCeMffhWZjF2",
  "key18": "3ESzMuWa1bKYBeaEjZHP5DMgWSiACKGmfT8MvRsB2H3xDoRw6vxwRXcg84nWFSrS6BF5rHy7zma2WUTd5kS68SmH",
  "key19": "JvWFfCDukfigyZ3wsJwy6Czs6BckJWG9SkNdbWp2FyRHxKjTyuXxbxQnkw284VDF8Ks8fVDh7swmFPC3npoZsyc",
  "key20": "3dxAQz8egZX93fuSawPJDrwfpk3UxSWoSVYkz35EaeSE99SQ3GvFBGVuD4bh9toy2ivXFoNGzEafWFJbYXfV2SLD",
  "key21": "v8iqnb9YK85wA9DDn3k9zi5qnHCnrsqRtEgXaHETWitgvD8scVGVW57MehihoH5UDKz2dvq5Kz4n95ek4au3VvQ",
  "key22": "NuBUDqK3nXihmEWoia3rsfnUCHPPi1UWHFXcpG139mnfyQvavYKGEz2yyKw1Hzv3N2uJVSiiyHmKaTV2jMxh9UR",
  "key23": "dCwW8oDvhgsbS85sW7dzyGNV9BNwFDMk1Pmko3fH8SmUsofnwvWYAERmZo1ZAF4snShHJv2nubdEBBUjTgzBpsi",
  "key24": "3oPMvFq8e6M9XU17AWPrmKmNMpdYAhWURadf78kHZqwVphRZT2zsuixiH5ZZ1ea7gr65vbNAsq4eThHD59SAuQoU",
  "key25": "5xXkGiwJbT2mTfGTKGvzhYnar6GvMKtSdYQaNVTfQ4sytFJBe2Lno92huj4RfjSbwszN6bM8nwn3wj3puBtZyTy6",
  "key26": "3UGEqCEwzkRacD48R8BdAs1Ym8cq1X6bK1GqXPy6tseHjdNLT2pHS5tS88FNw8KoXP7youWGFS9Zg52Zpst48c7X",
  "key27": "2EKLfQ1GSAtATANB6ue1QsFqAVNqViB9899iygZvhbLjYZMiJMqNvgooVEy4gvrhGoMwWRQjdTkXiPVdv9Rw912G",
  "key28": "2RDgPXak1uhJbUEuUry3tcXiiZFcTEHBBYzsaawkGbjkDYqUCRZbcaf3kydYaeZtA7nWhD3xXB7RzQuNxLYvm4jK",
  "key29": "5usc4L1reyGTQwTSEocTmLnMovQhCgEJBwQ4KfR93UFRhhBo5boYCj12Fp3DzGZXJAe6EDJdgiAYwr7jqKTJ3E36",
  "key30": "4pEJbpw8iB4v2yLgNov1Y7sZ1R5Bb27C6KNqAKrkgtn8L6MxuVAFWJmFFBXMZma2aYd9aU2LaTJESKnHgrQGL1vv",
  "key31": "56cwpsG1JS9j1ytJ436gQXduabEZ71C5LX1woy2JKo8MNTfQRdbQ2FZxVuyLgNpkXS2oFNAkqPtNF6ynjP13f7pk",
  "key32": "3PAwPyzJZHw45aTcWF3PqeGvkgcJgZf2eeuFDmSMQ1cu5JnCvsFvziUv1JvmauMTHeZ62EzsL1M7ihWu3iExZ1ip",
  "key33": "yZ65ymEcWRU4tUPD424GEa7bXoPg5g3k18xyCU6xveanGVCZZ4q6ysWKBvfPquep5ZeCd2do8To7DySTv5JkLqR",
  "key34": "8RMFn4n2sAUXsEB2xRMBYi4veomGZUL9CweAAkiPq5Avz5dnr482ycnCKQS2vZowrKomTz5JW6yhkdGmsEkr85t",
  "key35": "3bjKfc6iRTHFF2q7qr8JkuNMdtbdVE5rt72Hhdn4JjumFdXKY6PbVM6oXY4P5XJyXxmcqtK35BM8qZm35LmEdnuC",
  "key36": "34dUtjWGTbHAMWhQvnEM4eUWmRYzEFJGpjhEWyznhezEGomh7AbEAbkaLkWrxxdwpjQsTcW8W9Xa1rW6P6BAVYAw",
  "key37": "3U25ABK8ysBAGSoDu3abrnm3ziBBBYXS1HwdFqpXAHC6UB1uxhixzAkNroKX1XDcHxLUkjxjSoCPGsfH5JQedfjU",
  "key38": "33EBWEAH3mgLsQpqrnhsm9LEeRBWMs6964y1iiYpSu2SSeS38ALdvNqa7UyfPdXQ1pA5aNwN4Ge2yPrNyLBmBAXY",
  "key39": "5vetYxdpQHAmyYpZCpBUQ4tTSTXtUNrSJncKfbUukiwP6YX9AqpfDbCqBsewVA1J2uQdZCrExGfj5MhBGkSf8TsS",
  "key40": "29oWUMqV79jb3pWqtG83yxW6muQmYkznNEj5odjfk1PNucVA12wXhgatDKNrwQZxzMF3PzJTM8VNPNtTnEApQYUB",
  "key41": "4d5hjZrtRmhncMzH8YrHgmwcHQxAfZWRZ3hxkdygb7NK2WQqAyfGKSw9nizEnZVpftUNVSBM3redBRdiQTdto1EB",
  "key42": "4urz2QY29TB2iiLxfaC5tTS3vx2QLbgDoy6FGES9nYNc8E1a4juPvcGi9SCoLE3WJkqt1FJ5mZa7UtGJimoaEvzy",
  "key43": "3KVpYck3Py3rQSphxDHu8QZyT4LT64AE4eiViKFDst5SS9YgKKiyeFcko1ZwhWpYnYn7vGDZghNpKFnTuJvhnVy",
  "key44": "3aWCFvmun5Z74utFtucY882B5btx1ZzQfe35zDpDvz6BTPY4sdaTc9fVzcn57RMBWpKboYj58VAUy5fPp91arqSk",
  "key45": "qDzC5gXEPnQ3jBDhYiA5vHQ3rLhvrvoehbv8jcTL5V9KwtzDWvYvRqgp2SRXqoUhCS78rkuYhSuo5EHTtRFNsdw",
  "key46": "56975qCGjPfQiTvE4suVBAAqdiuey4fsjbEHXbX66LQPZhnyNH2rumPFRzUjv3vcWwA3H6HLzViVzJ31rjCW3QCe"
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
