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
    "2dS1HiJ4aCz9mKKbfWrE9keEpD9VTqF6tsnFCgENuhoPKUKPk2BGaidmonGwVkEEFEgTUmrpJw9YyXkX87qdZVuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wd86etUqeNFXDNsmSsUfxbFALAj9oMpmJoejEutPY2YC5d86QSqeUnMgZiJdZAHNJGw2WpzPxnEX5D7BPRoba8C",
  "key1": "2VLhyKtf7BWhy1E9HGEM4y6SYhz4aTsLnPfLTN4sU4nK5cPWfrmY3TGu2BBh4ANkLo142n5K9qZbqyWX3paELagc",
  "key2": "2XGLqeZgsU3K3gt1f3vu6xuf7r8fVwWS7VtAJa2zqJYz4spKvaaGveWq2kbohYb8Adz5gQpUiwwArVQxxmxtP7ih",
  "key3": "25udmXQ3kKEsMLicy1bNpHXDQaNL5G6xjoAWxPpHvihwpnJ6saab9iW2FjF3kQAcihfHvwzpeD6ZYriA49voRSjt",
  "key4": "3AL2Mk6M5Ao5goJuoB3HYfxx2d8c9guFXKkBwDHHmDSTYE13tsQ1fxmpdYKpqSTL9hm6LVVMr2iSXc27E4xypW6r",
  "key5": "2XZpTf6dw1AB23DVTED9sM9kCpv2XqDk2gFSSJSgqssyK4n5AozQKh31Pe2yqiEB1GkybmjGbHj6on54aRsZHSn4",
  "key6": "3Hbmy88eUjx1w4FvPJMZaXPwZEsTNxT7FyKRAx6XEgXVvisFW9gvHTYeZnho4GSCVWyEVjkcmGLZGsgtG7ymBE4J",
  "key7": "5zvAMawCzCJ2LD1urQYTWteUWAzCdb81WJEMdzmQmqJgB5dSV82KvWSRUZTy39bWdiG8CvJYRwEQMU8rBE2WEWZV",
  "key8": "5paAXYMCHsYfom6VGenj8XDcdZwbCRY5KykWksdHvwVC2wpk2gC4Y2pPgjcKXSQGVQffhagxJce2UStZZNT4aUUc",
  "key9": "5pRzdctUumu99qJSy1xpGgLyjWji6n2DM2ozz8zZyNFzZ4RB4xPBdSbVC2JWeydZZtmhPzY9RHBKcDwjTN2RZVG3",
  "key10": "3wyZ4ZjkPfeqPkVHoeoA363BbJvDxXhwk3seSrvQWZ1mcxCWAFsBhqEHDJGaGF4QmCZ17yzwcb4tXRhHDxzcA8r",
  "key11": "2SyCZi888VpyzLwuGEQE1PBcT9rse3wJiNDH3mWWR9obsNfcJoKCTjyyVnBCWrgaD9YkiJsTvtFZN1onZEe48hWM",
  "key12": "2CTt9AQaQgsKEuDdiCPptFV8psFZy74hMS8q8oL7xDPx5XboMpPNb6qfBpbMWxwRTBbUpsSQtMkPEtjmETTpG6J2",
  "key13": "65LEbFCDpkTBakJKMYZRppaGTStbPcZwSjkhDQKSUo3gTKQsRgjT6yUVmwf7nD6G2yzzTeWDoib8FTvkwGbhZYip",
  "key14": "5whKa27MrYimMYVqmUvH749rxFi6FSYMvK7hJinjoxk3Yiqs3jsppAHDy84KXUqX6EVDASMjLyWxxmLy54WVYScU",
  "key15": "5VfxLkXcqoU9CkKoGY5wcrRaqz4PCKpULp4KdiQXeSdhAW8JcNATpbExhznCZsiNfcseUMiYppgKKgtRt56go1pM",
  "key16": "23tKCM9iXCoYvZswPofPiGuaXfheiCkvz1DtxuB7dc6Jmj6W1w2vhrtL5ctRA4kpHtWT7xgr39qGRasvTzqPZcWY",
  "key17": "2nXu6ZYrEbXbdUWAsF4ZL3YatCfVoSFwCrXEQexVTB1xbaWZsgmRZqBjioVxqQw7cj9EDZ3VYKoAfhFHTPThfwmj",
  "key18": "3bTSXPrwBSb54b7ux7eqFKbz8MuEsRcaQ6K1wFuyQqjoztD6d1LZPgNSgXiuQ3TaK6UKohGwnfh5M4AwKdP42v2J",
  "key19": "3GfzTRsCZhVdb4vTddC61LXXn3kxDLuLGv6Mq2wCV23VRPHNjgQLaSSnege5UtbVuxE9pG813xGfJFWf14Zm5HmR",
  "key20": "2JVhfKSyt69MVzD6xS2DEFVUzisJzejhufdjvdpLmkh4JHbfNBALJWDCoQHpDyN4SVjwEsuDXub7W9Wk2ViDC3pZ",
  "key21": "6uReWq2AC6n714TQ9u8UszTeiibx45Z2QcLycbM7kaqNMiC4gQi1Az9xqDwZj2jeUjczR2NNJCSp9qE1p6gQDPc",
  "key22": "2P836UTM5eHcdZCUEiuLx1UFS3ixC3ZHQVhX8341pESiKNxvpcvJzTXQYVf48YjW5hukyeLge15PDcerh3PjKQdb",
  "key23": "2RCfUvdAmSMeYPLRre5LE8BsVWowTYQ4RmnUcbQUinaYujQ61Nn2VYrixqTjyPYCrAAJ8doBopMcdsDR2L9EmmHY",
  "key24": "Wom97xdD5MMnxqT1vYKJqh4YkMawuNM7msKt7uCGYMwjvJhGYugrDFr3Qm53JnsQXrujdUiHebgQRgBYLN1SEx4",
  "key25": "3qBJXrF23z9ifrNrfyWVEgScWjYhUUyXs2Hoj8CxXFiGQVsFzKbHGkVDiKf2eaE4Vc5pAaLyjvsCr8Wqi7KEHoBZ",
  "key26": "5FscPuNTMyjxfxo5kf9YnsxhVJeRuY6AQXDYJvgyBCWKMnjzckAJ2wqvPsmKQuh7Qtj48jt69oCAxAfd7boUbsZ",
  "key27": "3N4dM9Pk1MUf8HmSf9whdtoVc3midzZESvupyQ8QxHmgUFxDKj5EfFxixWhTZn5fGqvZiuN1Qsizk526REyrGTg2",
  "key28": "5s4hPSnb81XrRhWjRsxYL6J4YN2ArzCWk9hrhbCkKhFFeoAiYJz3psR9xXqPWbiPZDafdvM1gjwoC2RojLQyzTRf",
  "key29": "2ZY9DzJS6AZcgrnfSu39tcZ8Rhhnm7s3eB9N6kRVLR7jcofU7tjgs38a4gp7th5AuEhc7b5X4Gox5n1pzNzkiJxc",
  "key30": "3KAgRPtM9b3utyv5gWEmxLfBg646wro7tQz1sS2F1C75mL4KENmSNcvtgN2bn7uSrrrLSSyYDrM6tz5yXp12SJT5",
  "key31": "3BUcYuYpAX74PzMQQaKcY1h7anhQwjeSAsMjMfedY8Ho2fGkCDx1rdsPNutMwJusUCArWezqSapngLbRguwGY4mF",
  "key32": "AwENZY2RaqJhHTMsCfkThGfhmyyDWZLPAjs7aD2ktYkcyckQbkNEqas7FJwFKnJKdV5ovxWesHaoxjAUxRkbbrL",
  "key33": "EdxkodfK2d8GUpVdXss4vh9cqZwCJa5Q8khFjoY35xVtCGeNYmbhyqfLdRJL6n2GLc7TeDmF1c18py2cGohvkUA",
  "key34": "2RHQq7zxDpzTaSMuGQqvEf1UPao7raT7uupE9RasqnwNJkEX3FnG2op31cW8Lo9gSxCwGz3nga1ki9Fy6DSL2gbg",
  "key35": "4nQTvVoSfuCWin8tCvqqr5Eoiy2owDNTz6bXHV3i9HL9nfrkzFrSC1o3khnRpfKvqyAoxUZuXVbXoedCa4nVvYZ5",
  "key36": "5EL7euMnGMiMoN9aW58CRgRfUEJ9YceZFS1YaWYh4bf8q3kPnkTeDYyg1qZZaf7NYyKMsK3cwf3GbfXoecz9SD7K",
  "key37": "5qsNvr2nkrkE3D92jjepnRFkzi28SySDz7p4UVv3e72a1ou3dA8iCgXqZCvdAcc2JiMQHqjwQu3r6uLG4StHXdD1",
  "key38": "3fHpkprZiBXp732S7DtzBnKfbPiK9ZJQnh7o3o7ARTK4j3nH9UkeukAxVUPeepuiy1zHwoM8UjQjBQ66ZeTub5F9",
  "key39": "5y4sbaLVFwtXbja5zt2esKWhkExsBcQdjHNLnhaxw2mxFKZyNbEr3Z1cYUsHWT6X8zPtKnurJGpi6P8zHEMpi3aX",
  "key40": "5uA7SAgQJgL4keM47R8eYzJmWjhADoTW2eMzykTykSQ3ht9Rgr9Zf6ao8NF3Gqwn8iBtTZEc2VPKN4EVZVroWmfQ",
  "key41": "3y3xhGwpTCYsNc6FcwEVPSvgZjSc7VjuqcEUJK31qWaNkfVU2E66ZEfjo2WasXgRCfwzkUnWD7tZ2rozwGgg76MF",
  "key42": "4NE5JGtAWJRZvFiG9ZBLnujEdaR2QCwhUXsggZ9seqWcZtqRxYrYvrA2B1dUKCUxzm1g3BGSkwjLbJXcE3AMLRMm",
  "key43": "2KvQVxN3xRaygH9BGpoiNtBb5RZgBkLaiBgR8E8awZ8PF1hVJkd7Yj2ot7bXw7xtkiGVsq1Q7sk25Vd2Fo36W7eu",
  "key44": "2AUR3FyyKEnEnqZnSp9ccVpwxddGqg4GKQEYkUQDdMAHq6Lduvhsex5yncyQQbGSZiqw7F6f3N74RZ5BsGkr1uza",
  "key45": "43U8komUZxKQZosNXzX7Pgp9AJpN2NnaonjBogwwiAwYoVqL6WLXoCuGVq3X7fgXuTzMz2cMnP5M1kg9oCb8DqLx",
  "key46": "4kQHPuv6hjR6M8gro2XKDtHsqTDBSytDzwE83U11seHVdEFjb8ZgrkHmuY9TMRHiMerkvjmuAgf3N57qoT9PeX7m",
  "key47": "C4yZTrTEMoT4CeCmEcW6QBeQTvkb7s691wkiozUWvRiCQAQt4jJEcsbieQiSdZsRaHVGUJeuUvhSMPh4dAbXUez",
  "key48": "JXgDw42Tgk5mtGQVPBzZMVvk1MPMquDhtbSMvgLdnMaikXjUTRmAbX7GPHp6DS1wkHXHjwudgC4eJD7XPyaTiCu"
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
