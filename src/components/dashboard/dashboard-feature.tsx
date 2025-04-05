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
    "3Gxd4MiKtH7RzgqmkCkCwsZ661ViuDoCmDNCTAFrsj2RGwb22HVGzHaFGiuSuSVvsk11BAzNpNokcziQWKoMRPF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3hYYQXhqXaNPqGgWsdrT11mNRwBRB8mC4EU6NEwG9UAJHLamjZDDf6hVoxo72Q5nCkGtumytmJkySxgo1pq83D",
  "key1": "2srQXicmJ74DdQbAGuU3tzdCYbDNE1cbnuUAes5q5MZLZj277xb9KVJNDnY1ehXre6Lz3PNiKPtufpsGgACn2gPp",
  "key2": "4H4HCVyY17YrzuRLi3EW6SQjVCWXNThknEfcj4733Jcb8S3nhJr6SjX6WvBBGPpmFopsuMD7CZepd4tixDGqGZ75",
  "key3": "2rZikJAPHxwTbs1K9dWaT4kDM2TGN1kzSoTkVWo6MAoni6QuUH16WEGL5jcHYtUURFoM6HafAw8KewsdUjkWfg65",
  "key4": "QftuLBkPyPrYMjfC1WM1xcoukZJmzmc2pfVC2hZ9hYqwdiBc8g8BhgNcD7yCDJkpQcUAUdZxLz3ZtiqvqwVmiVN",
  "key5": "3Y7nX9Dvgo16AEhXa59J2ko4rTH4JuQeAwpfJCo4xVY44F8C2gfvy1uTtKeE78AbG1muS2nkNqPyWtbQ9mxjay5J",
  "key6": "QTaWn3kKy36SCeFASyxC2rjHWKfnEA7F2uZUqHKwLkWBrkHqf9Jha8QQb12upYTCH6YVWXcshUHhq5PaxTV142H",
  "key7": "3EhHjKKKJ6ZneWwaZeKkqQp82GxifpVaxLemHJnnqGc7kMQKmG4DpJqpsQpdfQZMySRx7CfEvjMDhcmPLZUUbYVj",
  "key8": "3sVvA8bBi5g3qXozSpw2PWDooyvpNLmNWuKo4BpriyRzcQ5DQ2DsAU4T8CzYUyRKiuwkHNneCUb3Udd4Eby528G",
  "key9": "Mfz7KBVyVKjC9hro8AR6aZLawJsuWLjr4aVc7h639sH7aPaZEaFUX7BxLhr5m6rEk5Zagh18SHGwjuiuPgtNEVY",
  "key10": "3mvGHCRyE8mWbg2BMytw5i9tdHUWGNSYEAVtF4KMAVG8QSpHvvvARcRNMEy8cpdCpCw5dzYWCU32b7Tmc5NLyXuj",
  "key11": "4Y4WxVUyPYuMob2HsHJ8LfesdoF2uszPpunDfJ3cdGESqRixAbTh8Qv1CjsTjGB3BppQkV5XvmNgZidwa1yn3nAv",
  "key12": "24ZwdQ8ePYtpCfZWuYebLfbaUsbatufmpRWTmf2tZZiNsHWXLY9f4Nae4yzy3F15ZSCngaJUQxh6GhiDxb9JAGz3",
  "key13": "j33UM5FDC1oeRtEXS4AY4EX9WcvLdReDwgxFz5rN4JzJoJiRhQx2ZrqU2sV97zgeakKnHqpKhvEepapHq9JMjDs",
  "key14": "2SyXvJokoS3M4w3pqaX9SS4pNxWH9CwASPvFdHK9pHcJ6St4TLTcZLj3hyjetXmByqryYJWEViSWyuzmYZgqM6xf",
  "key15": "GdStVEZzbMC2qfMjHTJs6CD1AbeGQYF5CqWo5K61baaEovQoFSC8zmDwY3d9BmkiJWvCXcKdoZT3UuTTxLxDD1N",
  "key16": "54x7TSATj3kYGHDsPACumsQRjB1ZNxyQfCBEeHt3g8Yq3nJWrLW1v8Tvc5wEPdg7h46sHdLqtJksgKKRe3RLii2Y",
  "key17": "46TZ2dC5aXmZNsXWMectuhXbLZ37n6Bc7Ns982KnhHietzbBESvYduVVTRCQadib6tdXfQj6xfFW25PLpjyxcym6",
  "key18": "5bASsdvRwC2YvDyGx9YZyfTCkMJcJZADQ3HNxzaS2HqwF3Cca5CxSVymqXwDHqkzSz2yn78RV84CVrDt9Gkdh52T",
  "key19": "5af8mcW383CoJENhDbtormptXizaoaN3FHAdPhGRG7znYdDJVdKcDsYQSnu8vTFMgTvkm369PNf49Nvekcfh3kUj",
  "key20": "3F2Ak7iXU17tu17rRpTEUdqMTa4LByqfozExko2oaCMr51arMprBReHFu9FNeFgrKz1EaghKL3FPLES1WtkoeVhV",
  "key21": "2dZEhHnubGDFA3nsMJqoCzLyA69dQmSAesqba5x5wJEpikz6EPXVWT3rPSpmfas3xPNLmgecxttZTKDG5McgiMhW",
  "key22": "5vgoBjqd5NRF3cJyUpqjFZWTGMHVdNbx4f9y3Y4uqs93ddKgFyyZy1K45VFoXKKBoLSsNkpLvQa4pCrxkomZ339W",
  "key23": "4qctm2pmw4EP2y8qwZD3X5y39LTEYXnS5NyboQncSJ5WXzmay6Vm5A34hz5b5EsY6SfRQAbL1fmV7JvvBFhRKx5a",
  "key24": "5WwCuhCt7Cz4NdN8wQJ6RFU8Aft7VKaQ94F6RKkm9k9MSUvs7rAQWD2mrohVDqMLay4tTvxikVtDJjH7huWXDBBD",
  "key25": "5FtdSTiX7v9rSqnPGyXyRwVqkk68qmABpPPkXDMnevH7rSynZsGYzuLMNZM24XJum3VGY7bqmgoyoA5cJsGQEP5K",
  "key26": "41MwfiAJxZQh1Ntd2dJZEGMXw922SwKm26jXXfYh9zjgV9axYdVv161FKdN3wCHX5QRyunwCd1an9gQW1Quu94wv",
  "key27": "4FQZAUiYfnBp9wfCHyvMZZ9XfRik6tCGL3fzHNAD2SpvwZ6ywn2YurpAecgkx1KugcjPCVXZ3o5HKAtXHKp4ET1g",
  "key28": "Ld3Hg11iV9s11yRPNuzUtbSxtEaQNjVovd6kpNmvRAX8ghavgwukAFXrJ1iiDeLaXkoL9Emoxiwj9QnNJ1ypErs",
  "key29": "eFLMHgYXfv2Qet5R5L2y5KFFM4DMYSpUCWfJHBVKE56AvkV3PxYRqjcC59LKxSpaMaYtbk8EnNPXjF4eaadJ27H",
  "key30": "4KgozUfChtrYYedURrDNQDqF1te2HAcwZ8yHL4kZuQ8RgZTcHiYsyMacqmABf75YAoe3SjQY73kviCii3Z4riY41",
  "key31": "FLVu2oEr8xVbNFiJkvdExRU7USpw7e2RF3RxRYR6LQQMZhJ3otXa2XecKgimcVr2u2J8g13T4a68ALqHiwSu8kR",
  "key32": "4DNfGG6Ac7dtRYgERX3i3Ygs2T6BJvNmYS11oPGLNKxAz9edZCutRbVji1A3Ke15ECzHxdBQ4yu8evaR8EnkEukK",
  "key33": "5oQmQBXrEtDGrZLxCsWb81dfzaAb1QTgzWciKnT53PYiHLQcH5f6Fik8fW521ygjE6ydrqh64h6Mcn2Cyx92VMcd",
  "key34": "4aEQwHY6TjP8VscnXsrnzpwb47WTQSqGX9pgZghoN1iGuw4mxd9HKPva4PEqEz3KLGf6GHpGFCZz535qYg38giS1",
  "key35": "2Je6hkcd7zoQ1p5BfvGqheiWXVs9E1ZfvjF1f8fDnY3PjiWhkrUmYSYkm9AUuwQCsFnpBwMkvNrBvdJNjYW2zREk",
  "key36": "5UZTtA4izzbbB6Ro7Z3u3PE4E6C45U9vjHKsWoVAN8HGPSTs6BR5JwGS5VvMoXinddfZgx6ZYtHaXvsGY2eaC3VK"
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
