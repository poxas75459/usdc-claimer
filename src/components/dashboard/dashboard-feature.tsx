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
    "63ro1qRzeSMs2V7JiiRvYUxF8ADCwzXeGANJMxSGSrFoN8XGn1cy2Hj1Yu1NztkPBezHvFthZdKqw7HmH8v4k2bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVAFm7jQshD69sFfNqNZmAxjgmhskZtbuzPyMtPPdbDCq9pEgByAwj5PHQbG7Gk68FdYX3Q9TFaPWvKsBwpsTvn",
  "key1": "KVaete9rHXLxzZLJm2G4toBwFTCpv93YQhJzcHL3ZDqFqLwa6c7CxJmVCqKHyv8MkxFnt2ySH6EaDzr6uuEiAAW",
  "key2": "4hJFSBqRaYP6FGu6PMnX4rhYBVvA1sx48W314zk2mSCHRQfXfSDBD3pVua2hFc96QKt81bGDAw1gPBS3d9XTCYMU",
  "key3": "5D2BNxRwLG3pFGYuqLkqBnDXgTuErnN9HyT4JTYWLae7h7TZkWJ5yQfVd1VVd4A9N4VjPXhL6AuVuejKRqP5N5PP",
  "key4": "5FKtGmVRbpkGtvB74hJnwKoThiJ4Yt8Pnkx67ojo4bcA2PzoUvCLTH8icn7YQStzE6e7JPWbmw7iNg8kLdE4nCeK",
  "key5": "3XiHduT9hjw2sv9TA9tJuq66Gb3y2rt3a3CTVLHr2wkWL7opn3cbUeJamiSZE6SgzPs7vwosyqJcmdtt6Xdycstv",
  "key6": "2UdiLq7UMfuNKvuVX5MMMkbYnM4Vb5ALkePMFTm8Pvg2sm5iYR6mDZqLuNkRAxfKasJDp6qgEE3yQCVmViRkTmra",
  "key7": "2QTLMxkRNsmnTQKfDSXVtgPpv1swcx78o8MK6o7z2czfwU7zSwCUSx6eJGkaCeQcwPvPTp9sHc7Mt6YpuiyjL4Y3",
  "key8": "3hf7jfyZqZYEnMPNAgrGkvoKREyAYLg6HHs3j9Bx3S8FX9L8atN3VdgxYEgAqyQHfKcFyfqA1XCc5mGN4C6jS8r2",
  "key9": "4dmTUCUcETYm56xPqZjKS7zdXsRmFCun6xgN4U1utBPpNBJQbTXT9v584kyTQ5a5HsP7kyuR8Uv8YuFa8g217xVx",
  "key10": "A3QAp2Vb8VYZpx59UtP1j7ihpgpLvdnnfgZKZQQAzJs3PukUFVvuKHqL6TfdRdH8DFD6BmCrQdyMjk3Djyuosqp",
  "key11": "5bR6i8PsErLPoaFVmQJndpPkNnDpEUqJiSa8ei8DWFzobKEHf9Z3dN1iZ9xkEX6NmTeyogHU1coPYyGRKm1YB5we",
  "key12": "5WMA6tRvAbNrejZsTk3TfjwEhSYabwPW8g2MRpmXywPRsGHGqKdpSb6E6jr1sc5ASYgMfXjwvD6z4dMTdKnm4b9t",
  "key13": "objdHRki2Roh7eRLhgF9F43Evrz8Rr2PSDzcZ9mKSCzWoZWXzjDoBi2twF4tMMHsfQCsgPY3pbow3dKb9oZxWiJ",
  "key14": "kFucHZbhE6ucdq4aLAgRvgkApsZwdYMj2arGd2kW5KVH6eLaEK8UGvhPB5xDyPZNgJ9hS1L1EYg3XxsVFFWf9jb",
  "key15": "5ziybEzqqbyGckRqZNBbNtNQrGeBHpPnfZ1UavgxHZmHefmx2qtAWxTs4B34nntgjSkJUDkxRmhg2jHpwipkKfvV",
  "key16": "2cw248UNZuYkyLCZPTMyJ7bs3jG2zDcTGzRtJCQcAxHBKYFdi3ELy4EMb2qCdewDghcNp4Lv2oorXTieUkZFPWUn",
  "key17": "5mbWQYHr6KGGBS8JUUnRUbvh2BJizhRURoP7SGXrqc7vfx2GzWvBYGw7QbWrXfztYLkmcygkahFr4jbtHELa72nU",
  "key18": "4a5PLyKXedEZVphGv1SSAPuPhdRz2qauNjUMSWEKwyEZaQz9UVe8VGqed4m3MFpKeP8RpMvMgptdksYSYTrNsXwq",
  "key19": "5kJnHUqnxikPVyG8A5Jx17xASw3btcbKHZMQxwpkeexv2g7KuvvXqYNFDa5JUBSWFvT6CLLcLJke55fLFTQFQH9p",
  "key20": "44A1A1YtWE2RBWBukkTo9Pmf3q3N86CeYndUJmdjcSN3cL99zpf3CWrzYevWC6ELrQJHTLPpkNcQSP5nLfkuGgrt",
  "key21": "yuQrPFkWaqtwaYkdkuyqGwaTjNVdrXGyj5kpFxiv8FypwQEaDsCuBC1n4BH16XF7FdgzbtBE5WZ4ctgGKmTHJ1u",
  "key22": "2kS93edNkHgApJSu79ZzxypEDSgS86EGLyE8AzaZBV8SfvJEate1KHSegb5q7rCfvLDm8Q1HVSuqPYVTm5QGqJPQ",
  "key23": "2BCaiQpQQ1f1ovHrfEwyeYHV5w14G96tRZdYjhoofAtPb6mRMptkNJ5uG5b8fgTGkCnJPVCSaEbrMyEef5QgvAp9",
  "key24": "5Xgaju3pGW6SiZWbvXe9v2heQmF925ptiPHmWiQaDSGzqBeD16rufRbABqKSeVap3QWm4sjFJY99PkbXwTzjd8cP",
  "key25": "36HP7H9CT4Wo4LDvb6Mx3WkVKfPCqCFAZranNfuFkUeDU7wKFbWsNppp21GhDvMxBbu6LtbV5uyhiaZEJoSusoAJ",
  "key26": "4SXtt8eeZ8Ms1nn9E4GA8rBVitJqV8ZZvfVHuU5RzoBYeEQYpkvgUo5nXhAHhJHjSHDYdxax3RykjeYuTuJt374d",
  "key27": "28awxoWN8eF7QcygxTfbYSNsm1mQuXuDsq14H8SQNK2iBuWMtfvMMqHxAPitY1h6n6berpGaS9Y15ZooZfDWdbn6",
  "key28": "4HMzvUg4JSaNktgzK5Lqs1DMS7b5tng6iTuV5nTtHS5ohTfwbavj75PyUGxxZZ4qaUQ1ABJusbQoXMzfx2VMqyL1",
  "key29": "5H4PwfdZsxA5h1BRPoNC4PdiLVoYeZj8Sm9S16RtzwJbHTeM6adTMz6SQSbtKzAkpdPmmBVL3LYMeiaNXWmW7wAy",
  "key30": "Mi9M6yGVwiqGrHTT2HZgcH9S58wCxh8t8An4cHJuzFpuR1JPeXrYCCNUWF8ou1eAFSXM3Jm2UcZ3pHFVCCphtp1",
  "key31": "58qCvyr8m4LFM3QZP6heUxryMGGujTrsy6WEc7icz49cb3r7taFsMhCj5kER5X3fd9kzumrk3BkXNPr6tny3ih7o",
  "key32": "2G48c5NMkfAJYZGwzGSQvPpfTL4w3DEvXPcNFBip7i3wvDCCThquNPaFwdBhWXHKoUqu7rQYaftAiGMRUe4h3thF",
  "key33": "5tzMmHmm1t8bdCmGLuUttAXLyghwgFPjHfJYp9pUMv8E3zRictSW6Ubo8vFY9fjqAaXRuEEPboqYcJ6qwNjr63Xy",
  "key34": "3KfqYKisgWuyEfSd2apyh9uU83CzMuuLsBixJXiHvTGZRqSRAeybEjGDQtNSuvBZPza3jjx3cZhLqxKG1esbEocc",
  "key35": "4aPih1LaZSXJEczigtb75txzexJXpJ6ATsfzxpHP6XMfbtkbQr5Yht8cdz339dugG3TMWwZu45jGzVSr9cZKyDGr",
  "key36": "44xo8SG6N5FW7TSq9Qucy7hbBpzUk2RL4wxCBVgQhE6ChNpnwEijTBAsUuTsyrvy1jAjmGwV4FF5wCYJozSY1gZe",
  "key37": "21rS9xhJC45n2ZLWuA5NWPK4XEat2Vzz5cqbWWnj2FNSM8EAG91fqwzPZriRuNgVxXSNaXmqgYdBGCG61S8yQonC",
  "key38": "5VcreeHDavn22tKxqpHgUkmkuEPdTjYJC8TC5encyCNd24vTwsMmdPoY8VoBi7R8N43LUw8ryUxbthDduYssp3Cr",
  "key39": "3p11pXy9qqLyhn2BNtrp9bXC9J75qrhZTUtsiJgL9wH9gQAqLywxKfi7cycTU8UttsAmxMKTQ9u541raC1wg49Ff",
  "key40": "3oE9Y4JkMMNf1wXi2vjVUriAWQHsfb5xHUcUbjt2KRtNHm7A5CzygpBd5jk3K2VfqoUU11ZQctPHp9WnZi3ZZJvW",
  "key41": "322xCM4AMmNTKqYMqgWFL1yAuknqXCpEv1a2WcrsvfNLTpJ4YLjCmNnLpDQP8XQ1UiJamHUk7SgCuHqbxJrVyizu",
  "key42": "41wCxsUfdMxZ5wmewwKD6gC2xmtGKzgx5waAozPjjBuRKbfuBHApumbep7eDPjpBjHaDHuZDkTR6GYLwHCt5xT1T",
  "key43": "5HqjPTvZnvrFngVR1vUrVPJLdd3MEPTTg2JFa1psjHEHjEbH7FuJJ41rxaE5UoRUBMrXux8tSmHon4M4uZxuL6ot",
  "key44": "26h2RsaeGYRz52EdyFbDE639Pe6ynzyVGPrCJgHUNjGb52M3S5hxb2nEvXzJcHvefTBVKMoWVKU4Ej4aBJ5TpGau"
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
