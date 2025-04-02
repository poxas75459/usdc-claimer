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
    "fw5oZSeJK1CUKkbG8jaQ466JrKudErVvSvc4rUsrXis1FzuCtQjFo5uc2kZ85SFGezgD9oxot9hiaRRTb7jaDgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQ321YgK3sJAK73ddfzz3xtjn3g8AGakeDR9vJ6Lqz5QykxMGSKBbqsv3M3irUrygL7z9v5v3gCbZe81Y4kfz1t",
  "key1": "3dGdezAhaBSqw9eLNVUsGqSNfArg5oHrqQ3MZtnd3EWSvdLp5mr9X6GoEAzyqoubssUYXSUzR4mfPQeEBd4MPEZd",
  "key2": "5Sd5MMZShsmNHdeM716nyFRJRwKc4H1WJMhJL8AR3TKruW7ry8Ls1A7Fi6nLC4cc5UgBcQ2aLj79cL8Q9hkvZp6k",
  "key3": "3PonzNMGJtYJBjVgeeGnvAQXxgxLPmrbf9RnYY9knGBVZfjGmj4NQ9yiDcXcErEVQhEBJsDqmQDX97q9k2W97f8R",
  "key4": "KUyLRzZX1wXwYxn3nGnE8diFwb4CQP8T6HepkRnXobiz3uuSPNkEcHiBc59HgY7vBRsTbBBz12hMnrZUMz1NshT",
  "key5": "5RX5PVFwRRQ8hZcfMAjkuoByxXdvaZsSd8t9QufQ39LxEE7bCMpaADSFBAUDH6eQBnTgvSq9AKRYE8h4mCc8Un2Y",
  "key6": "4EBxyDKSUFMRTcE8UBdex7P7PDTmAbJnWuW8LB5dKJsN1uedmb51yRTp9seUSQ4bfM4f1m9wotgheLmAkaaXkumz",
  "key7": "pKyAsw76n245NCxxaS7aMujWzLRRy9bwf7b6ED6jwaWRBq4baWtA2UR8g2NMTpkN1kNXYcpEasSHxeDuexq5r4L",
  "key8": "36MfVEKbiRuZzdJDbytdLxh7dQ3H2kRt5P6zy9tKWtkmEVSpcEYeHFbZbU2fBxbwBC1QscxdphSqErmF9CRwQmJr",
  "key9": "jZWcoFXvkJzEfYu9hzGuhgvybYzNgnd4K1tDkmy7QbwkwMujLTsg8j6T2BNXfvt3CZ1cxKxFghvvQP74tTn96md",
  "key10": "gxufAHexpjqiu5mSGdd83fSiiao7h6dBu9DCaTnVF5vQmaZNHaRjwRy48rPYem5LjgTogFqUfQoidYvrM7Yovhy",
  "key11": "5daVaHFnW1uYPx5izPzrshMsFaAy7Zh5YjPGSGnD5gHt74CtjLAXMneRp9zXJYAiKy2PWN6SGCfrZEJVtAu6b7Es",
  "key12": "3nVWPu33LwmPDBA7Ce7DNznsa7CidWJ5Z5qcpeKxut3xrHEyiS642LTZuU1b9RmdLqwtXCjboZf9o8G79G5DkGCM",
  "key13": "2VV1v4e4kkXxexaznzibxYYgnumhzx9wKgKDU9qyGA8Uaf8goKWAJfdMTwZiaCdtvsom2CeSqgquveu8B1CMh4Jh",
  "key14": "dyLaXRkgfcbKNf7P84ZqPZsJt4hEN1Fu5roLfqcV7geRydhkTJRpyLD8sof7gDNudM6YJaQxW5mmPtNCQxs17pr",
  "key15": "YQpLcnT923k6zktQa2k9v3CuE2XjREzTHhFBK6x6hK43bRWWCz5zxNdaAk5qfy8QQDqDyVLj2qCUubpoqQ6oUti",
  "key16": "41Kgh9DsfRFPnwE3eFMrhtVdFrUSdNFz6y5hGeV44VnRUHxpRsrsLXGu1gvjjX8NHnRjg3Dt19Rv469evFXQa8wf",
  "key17": "PLvDZjDPmNup8g28FvaaCBqvqWuQhDPP2B4VEEnAvkzFZ2Kct2qtnRjmdmDthHFYYWsL4qoZjtdRBD25KBESLDG",
  "key18": "5Bh5HbNgu41ihPEJ5oKj5EjQSJJywynDKnuTiaLmdiLPfkCw54MhArMCBTVcnwV623ErnemsHwnKns8n9CG2TBjE",
  "key19": "4c3db9kDRibfqnj9rXYZ6opfvEtthtDdok27Fvm9FDznnfukYEKQU7ktUreFFNjzALEj8cpaZpWszHffqJvCwHAq",
  "key20": "5kkmmDgLykEZXCXrQtv5sbdJirgVTvCiF5jAjqYbzoXLA5tSHR7nqqQvPbQNz3ZmVpC7J3z7QfNWqxqXVqKdppY4",
  "key21": "4VXqmWcFEFpQP2n4gExXCxTYaYFYe6bubv45SRzzezRTXRNp6QTeiuwuwRCqrnRJLQ8KY3iWB5KoCDEvphJMaJut",
  "key22": "3N26P7tzdSXJo3EiCccwJeSgmVXPM5TmKpmdUTKwEWsHHe8GoEsGzeAgmizG4jfpKxcjVPrgJcNE2R6f3q5kbCtf",
  "key23": "5cwMPw6fttQhbTwCqDQZCWfe4wvVRH2Vz9nDWHXkk9KsajvgU9mJUJ4sKxWSf4jn9vL4s1APLHGYTtQK4nbxN2L",
  "key24": "2eCZUdwVz2AUyAx3tRqzqahtB581NUPnZb6jqYNKeTrkyW8uUuExuud3BhwRxbA2jsgsn7ge4Bc23HhPeTnq98mD",
  "key25": "29piXb8RaNpLWvymtHMqWdqM9fPnHTTNZravxhq9uokvtqQRGp4Z3bErpkMPtbGVUqLBANewqUnrPe1bUGT9k32T",
  "key26": "5PrMbxeceYf8Qwux9QeswPnEgbyx1iBUGiuv5R7NSMALzSAU34WZtAkQQKWb8dxJ4hbwBpVKiLpav4y2M7YFA43v",
  "key27": "3VssvRAnAZYjXS8FxPU5dVi1uczHjGs5gxNSSmcC66ir8zJHpPCQsS71NneAPu7eZsbaWmZsyXgJUkZAFeRJAEhE",
  "key28": "2yx7wHqKSxMeJP3MQG5cHTxiv3mzgDV2eks2QB5hZbBxQHmpKfayr18i2M23tFzPbL75YHA2CH8h1kqQE9YEwDVw",
  "key29": "4amCisznpkTAVVDuUYJTdmG26EXYBWsNYXFzjEA8NSfsYKGUCa8bpfaxp9671AeyEDN5LADwwiA7en11KcoV38fS",
  "key30": "4w5YetzKuDvRRBXx1E3UNnE6D2jhbPnRonjfRUk1tytyHtFusN1oyf8G2FNzdjwkmZBN6fVrUcUN3uYAzRRhc4fy",
  "key31": "3W2MgGgXnrRrn4xXEuDrFnBRUbYHdJwSTnYyhswY2Y2nE3Aby9ZS7bs462Z6xhEFBWLkw56fXuqgcm27tqyW5VFd",
  "key32": "5eLdedY8C2WEdnvYaK2Xs1X5FPNpRZP1cgdJCcnUjn4ewH4WRw7bprPmytUtbk3MQvJjw65h1J6RX8PJ7z6uDkCV",
  "key33": "3F1XbNvtRCEk8wFus4kh7vJxZrAEZahVzoJQnJwQB1wqS8w4xcFaMpyheGYwDgQdqfFCrtGMhwjhgEcBxHqZ4kDj",
  "key34": "yE1Xo86ZriBve83WQz96PAHeQ4Y3byBMbrqFBTMvrVfAGyHhnCtQZ39BVruxNpzv1jXa3qgfSshm2g5xsvjz9Wm",
  "key35": "4swFhtM6pheB5jfLr5Kr9vB7gYPdp8Pq99fMiACdudFSqmDKv2MJVWx1vCty8KF43VSsXoDMkWYAFt5EDYtZbvxy",
  "key36": "4Z9RDoajhn1Q3BAWsrfRHYZE4ZyN3ftT3Q1QwUKxsVcQWr9QvDhy1VvCQKXEgCrjY4tMBhH2fW3yEwiEurDGzssp",
  "key37": "3LHVYJcwgDR8ga9Sruea1cuNYBU9AVCZU8Y4oQVDRnaKFe99dpHwtxEeki1BmBEmR6WWTQTbanU9agKXWDpmJRQw",
  "key38": "3KdVx9DRDAJxfFnDgGWCrHKuiLQ2fTFhVgzsjkMHf1FHh95ucR9WPLJmK7gnGLAvR6o3Wx1JzYSG7LnEWHCZ8GKg",
  "key39": "3rxSK64pnKjQGPLFNdz6eP2qQgseWPWMGNZp2ZP8MRSYhzhJtmKMkXB2gqBMWwwXSbs2Tuv8KfYtXSwNkyhieqKH",
  "key40": "4pRDX6T6SsscB372aMefxyXe8xQYZeMDCmHMjGtkDMWVWeyqx9eU15fWreJ9qyFvZ9NSabxqB7n38TncndpWt9uD",
  "key41": "4JsXjhvFiQqv3hmRL92tEuDPYAHVQ2RbtvJyXFCncPMfJwrP76obVMRNDTbbdVwwodGx7L7sHpADB3a9h71cPBof",
  "key42": "2QokkUsmJ6qiG4yQzHKoCMhusrkMeMV6nRXD1pQ7qR1aJr4XFAbFbc2YsyfZZEtqTZCoRaKHLN9PBuzNANZfH4tQ",
  "key43": "5qKV96rpqPuSH92fmaK4ZLuCLpXJxSLgqwSvooPYPzih62wze4KUT1oGqjLo6W7j51yRGBNE3yQq6sDpwbTWg5Fj"
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
