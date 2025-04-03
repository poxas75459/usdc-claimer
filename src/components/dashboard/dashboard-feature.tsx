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
    "5fmHfD7yL2Q8DtEeaoGMd9SAgrJP2ED2z9ByGHWVhyGgEKizPtBgCaNsCR8wYz2Zpx5C7CwwYXbdM1AoXXJBnFXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPBb2THAfH5fuNHGoTbnpHWjJo9y8ojYYNiZfkRNCSNofZJE6gEjfb9cnQF9iY1pPCAKuQhEzngPZ7vWic8mLpm",
  "key1": "4teExey65WuATkpMvEDEy2cRCL3uKcCedksonBDaWyzpEo1tMqqgGwuTUt3aNJEo17RsqNmgJQu2tYXapkSSfHtF",
  "key2": "58wLjJ6grMNRFx19aqT5QUZCSgnzf3kyCCmHmFheT19YCDwMTi69xjSiCQsZXTkJLTSaJJxXempBnWUA6scudmZr",
  "key3": "2qLxDYaQGdxR7XAvaTSn7heVVxNjtTQtjNj5R6WLc7XEpC2aiMoG4LrtNkzphv6pWQ7Jdt4SefXF3EVEyHnQLvHw",
  "key4": "5UqZmPNwSoTA7Wkm69CkuimSA5W94bjQRWDp6dTVS3TXxU5vpsze8H1pXtT9fxC7KbSB8jsXVV3AHH8JGYTPQA8N",
  "key5": "4ZkSYYM6fLAJqVRVhz3VFea5qWJae14QGok595WHXPrF7o2qE8uptCoXDoEvAGuvVNt1Cmckos74kE2Bt25PwXkQ",
  "key6": "4Yf36ZTB7aJKmMaHFCXULoop8qCGBddRdqXYZUxPmKQkUuJqbWHLcwrLUEGFmqVwV2HyPsrdYNxb4yzUb2RwSR2s",
  "key7": "2dcMNLvRcxtuZ4P3gmyyGiudCDiMfKre1ngmWs7XJcUAGrnWm7vyQZfHCPRvVAomVBCrTeqhgnoFNSTnpzoVAPC3",
  "key8": "4Hhyuw5bc55yfFGAdHPJLyEuikeJEVsSt5Z5Fp1yKNxWANdGj86Uwwu7e9RitWEy2N3GHQN7Ty8YcEw2ToNLJnQu",
  "key9": "4y17StJXPNWTTBZriv7ypks77ZELvjGkvE7vwqwBoQ5HG5vg57Hjay5mwzb42dNEUm5ekGB58iediAGrAsRyoyKY",
  "key10": "22nVJ4JArRaVdCkx4wfMVz7eXFCS5szoyQpCxNWBbYp42BNWZzmCEtqnyNkJeySFG7pMcxyAqCrifA6ftM5Bh7YF",
  "key11": "SerLMqzsB1vxYDWVvFT1vHRRfMhdm8nDWNjgPncLzFWUDFnq1VLQYzkFQaXoW2N78s8wSHiEJupQSwdzmMyGWZn",
  "key12": "3eTXLDHzLnTyKAr7onuBQvhd3LjAooLK1kvg4tjXxUCdtrCcdwxgiJJWBWTPzENAeZfL12eVbDzLGXdFvsprqdta",
  "key13": "4jU3khLL6uLGLsZByCwQo27USujPEyCoB7C79KYTy2XZ8Mt5owwdmU6RgSiNyfofFU47qMvwuV7ansN7xqSbNJxL",
  "key14": "679b1LuFtVFiCmEjohkdQdGR8UQfoa77QsoyENVuRf8Uj9FaWLrABvgipbRKnVwykBLsrh89FHYJVYWsH5GVXq7e",
  "key15": "crkzfK4ULpktDFx1bPF95ribdCb4ZUU56qXbKURxytdujFZjcxYrMPQKfpseCR5qfCA7QFEpn2mFz1ddTnBaZ8G",
  "key16": "2x4s53fgXAEA3MtPa3xeHLdUBphJ3WCsKabLHDz6DrEJ6xCdFRrbvjwcCyddgy1PqN7CFLr85JgHUSf7kaF7JcL9",
  "key17": "591geS5f8oQcx1xtAbMk7n7EgLZXoXX61cSjG4rathw3YiPF4GD4wok3mtGkHKpGaDnLYFwxuvZYtytHPJED3Csw",
  "key18": "2mEH1DHhDhbsbiXw6qhJsRLfxiLbD6oYUNWvUhEQouC4dytwr7jMeTKKiybdCQQVGfyCeSPA9g1wTrEywXfjSH2m",
  "key19": "39RWRcnp2QCdwxZ7KPbBBpohf573d5vxV9WqK77djxbu5fm1rZDVTWPcn38WTRB6tbHP3zYPW5zY4yKjVwD7mz7E",
  "key20": "RVekTbY4o7nM3vXmKpcau9xVuRTkmweEYFhGVRNA9JMQZk6SFqgZAg5QXj6nmiZmBnCD9RhHpP1wS4Yfu77aV81",
  "key21": "3Rhf3FRgApoSy6WDAp7WnSHTb3t2mD37xXzTjAR9NbKGURtNnGPaNx6RfihngnH6NjtjAxKnMP7pXMvjf9WyFXDg",
  "key22": "4fqQzPgiSJYaDJ7wwN5PxDKhUw5NQ9ycFhMXeAiGUkt59LU7DoEKKwmUDjPk9gDW4TfYwrv5cV6L6Bg6xumdFBDP",
  "key23": "2xVVRn92wcE7pSML31P4RpYjtAvKQKcmmndrj41BqE7cZb3Gu6xqnfUvoEQCvdbotP5HdYqY4brY4koyAabB5fiu",
  "key24": "UqoXFggYoAbH21EcwKvoDnCv3eDW3LrHmkbdymvBNHA45w54ub3VVDyuDr3F1nkyWCpC4rSe9BAsaQYRLLEobuw",
  "key25": "xREpKRVqv9TrLYJm2Xvjtc3UG8yYizcDg2qPT2L9VzdKPQojzQfojvFBUCXDRm2K3v3WE6KNyxmTG4DopUG9qEf",
  "key26": "2qSVjge1B8ke34SGFp1hMtqAkpW3NmMXrpJAAjFcWBwyJoawyoyFWkGBrkYiTo3G5Z5qJLG4T9ZXQYLuKxniszVB",
  "key27": "4GiF3Dj9abxeoTriqFBKMJ5kAnXawWhwbRomMrNj8HB8JjPSh9BrkYDBaDwaMrphAeTmSyVDdZKbToWiRyTASh84",
  "key28": "5QvssPEAeu8BUX4TRRF36yKtY6s2NiLhBpS8558PuhwyUBGhR561RgXM9WChgCeo2VQjm6Nj34GeF3V2NDkQc4Je",
  "key29": "5RKfMCqDBKnkcjtTvZUzu1DH5KRfif6PgMSfHi6yYnWPGzTVS9veoWRiDrf7X6QGE2fYnfiJDBshpBuirgi1EVRX",
  "key30": "Girtg1FtpYJExJTumQ986gqKWzsMCKV56RwtF9zWajF5iFnHXqJrgvJgujWAnVjdZGrrEQ3SFuUegbb1nL5x3Xt",
  "key31": "3SHMwFkEo9Pb3bmMw4ECCPQF8Z9kYYCkwhYBrmdJihN4jgL1Kk9owPHtuanLdaziwM3JHE17YeWStArwrZToBBte",
  "key32": "5e1HefTRSydd7DnUwQNNxGADg3Rk97LHFzwj1BToSb4x1dfoAmCxJ1wyBseySWbF4W4P2pdV8mb5tiYiGaxyF6vc",
  "key33": "55fYZ9SbpNwaCdjHWccrmFCXSMLQSYgWShKW8xsSy5Pri9dyMPZcQEfz52676c55bFiwdJEKai5ikNXnzRZmFFyg",
  "key34": "5gxqHX5hpqLeaeywgz3JdQ7VNk6nneFh6gwJJtRZHMZH7cB7ktpNnCjVCAT9aZbWvmfibbr4uJWnfEfki9L56G6R",
  "key35": "ZjncScJvUHTPxfeJiEYTzuEXLrq5QnHkWwFNQKHJHo2f8pJN567cduGth6HKtJgejfKtAZcoCbjksUY7fDwwQp4",
  "key36": "2XvStkoE7bhWj3QAzKL7PpRK5kaXXJtS8TzVYevm2tH6fTVRjzMsKzpM1r8NCLHu9vZ6WrJ4gCzFWpfzpccBvcid",
  "key37": "3UAAmYM3QoopnUFrBYtt3yy8MzZFjciWPk8wSGs8QzTefGTLoYjh6KGRB7XTYcem1iRFzZiByb5RXqmeqt4xCA7g",
  "key38": "3GBL2ztc2RWCYmiXkXsCp9mNanxHgAoZUqcJR1RNts9U6A2HG3u3AsdDud3iwno29NH1qasDn7QHjhN4Snr1FDH",
  "key39": "3fanmjPm6krwx8spEpP9exmmfqeei6xJJRC59Z8PorJ8CbbBTUVdmszaDAaHtehZMLddLebvEu4ZBjJfR3nnta6D",
  "key40": "51msUgu4UcH1oj5X6KBLWk2GssLmdwrUF76Q1zwm2ZsgqspxF9ZcnP6vbF8aSNxoCakeEzeezmteF1cK3wB177j4",
  "key41": "4neJ3L7oU6mHPgxkZc5HXBCozJAgnJiMfRPZzuqqY6iw3qpwdGNukxAZzqmMDe3V5brVbCeNoKh4Nur3VrWVma7c",
  "key42": "5xxmPVtPuPHzsVGTYpzh9D2GfcKRsKTSE6d8UEiz8W3P7mQ157yYbpRrctRjXisQPaYQVV4NdiQcA5FNJjyNcfYa",
  "key43": "4bkAQoUdvPLxp47KDDw2ekaiCzMbqxfJ6MB7mW71fx7ra9ShprNYUuXS4CTDJgV8ZrCthsH1Q4WfaAmTMDWc3oUH",
  "key44": "3VuoXLS9CXAoUkfH6xEkwVLebwaz7ZhUdYqrZFUbXLh8zzggMs8orjokinzskqC2QSYvjZYtTMg9BMgcUjLETqQP",
  "key45": "2bV9wH9QiT4DmDhKyTcMSDxREPTXEt9ihk1s1xiLbVTzt5bqo5Co79WYaQs3P49Ns9M4KTfYnNBE34vTZ4RZUrAe",
  "key46": "5cpoPVR6po1PMAnAswTLkUQmjnf4pjZKSqcgFLP5JxLt6Y4u8wEw41Zpdb7wjWsdnbxbtKrjHiifY7xLM4a9Bvfv",
  "key47": "A8TDu1CbUmAnn5eEAwXtfQ4kP9NDMYrSn4Q4f2nWpeNYnNWMLiH7AboBT18ubXKeUfYmazanihSq7EcLzLfUHqT"
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
