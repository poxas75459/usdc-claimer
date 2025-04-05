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
    "HSbAdC75kpXVUeLJWM9YDcMdJinHcQmuKjcwQR3zvSUtrewtSc3ojjgtgwdRUfsR7CpCDRpsxC9kXTU6P9DrA3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pxj94yzGrpveQsHwr3iM77SrgwPZcD4nAwAE3mEZMYW2LNmYHwhDiKFzzHSsNpRimHDtu5QJqXkkp4Apv5ygZfM",
  "key1": "2L8PD2L15uYesYhoWo9BK75RaHjXdcwBXgxjrsFuXkgMsFGXCeMRVLzwwiLP2aizj336NaiJQrfM4HaF2ojM2XXw",
  "key2": "ESmXukFJfY6UupxjGWxXVinhyjr6x71eurpEibTdT44k7m5nEi7WuBXzktJXCEofEATdJ5KY1ig6qJyBPbD1bpe",
  "key3": "3XiVRjd4nCGAtSHqq9mbe7gMkR6jS6BjgwDYL29YD9iuDbFWPJEcHbYRuaanq1J5zDPn6rs5sSwoCneHzVRFeXG3",
  "key4": "2RVnrc93kdzun5CRKvBcGciYzM6RY2F26D535yTowvT4uy5HeD7VN8z2A9UWjFxdyFRU4C8xdWEUcPLh6dwxkAda",
  "key5": "3B4RCuw1F8fvkthVqtQ1JG9nzQziXJU2yT7ogr14SUk5MBMS7v1nXc2Hffew2yHKBw8xLSjGrwc8xxxnuUpg2Kc5",
  "key6": "2Sky2cNiPewbUsPWFyUFZHbW9DTUXbMxu2NZtYPam89RmU12UkFD81j5Han3fe9UwTXAu84eXir4KHZmnXk1gLWh",
  "key7": "3xEzzY6m1LzkALXjyGCAiU27mwPPJpDQsMULPH5KuYzcccqBoeDxfokBSDWiBvfRnthmFXhLYct7ggYJDmaX4sii",
  "key8": "2VtgFT1euwMqQMJXf6obadEq3faYhWCjUiPGhQQ6giSmZZRHLk6f5tsMhAp83fxNKYuMC5Y8xt6PEBHfgeZXdKS9",
  "key9": "5CQ7Eu1Gw5Wig47eZTu4CBMmWtzeDNjLu91pjQ99gGBa52z7Cg3QLEigM2YKThXopuWJ8ZtNp4yGhxx6qzUYrTEE",
  "key10": "4WkRScQRw4XLxkNkg48FkwgDgf7J5fo1W5T67Cyks8rQdbb9fVvBmH9wy28sxxMpH6cBb1tTP86ihPrSTE9sSbVG",
  "key11": "4fS5vr6L9wmDtb4UzhQ1Yum5hheSSyXCZSzcZLiLzKyZuuM1SpFiBwVR3UPwzxNbzRqmjNrovKLMJc6UacZnKaSS",
  "key12": "4PLknPTayRdthGGmnR3rpTw9RJpYyvRbSooanG1UcvfVDGL65YyFwGsN2EJQwQJfFJDr3XjqZGx7UiVdKsWAjWuq",
  "key13": "3QVma4iJEeUqg3yumUBVfV4RCn56U5hQ4C5azML3GExnAiTDrhAxguADqZV9rCDPZzFEkRSkkJAJ1GsCHBU6PACs",
  "key14": "5GHTWvtxHrzMNuTJJp9W8U4DhyMdzAfNeKusNceNXqDg7ArXNdccLSLzg19haTyEMhN9JLuSuzwGKUYf9CtFkD5h",
  "key15": "4wQuDVP4E2xonvtzebqzatx9U8r4UpaVYnNqc8WUnobbYugK92w1rCe5qjtgxc98hhbRg8FtA8yRrwP51fC5hsPG",
  "key16": "4ZBhWpaTaS4NFgZha9TMPmVhoccKwYdTogbxJzd2DoSg9SDyu67oJzwJpo37ZBmb6Zf83nLaamMEyL3dghmByg9w",
  "key17": "2ozax1m6p5ECGDG7Yo6Gigo3dutJJqFAFEwc6uG8ZetCtKmMYLfj63RiRDb3Krs7bNRdxqCvoSoav5BRyk23iC6g",
  "key18": "5pBVk7wpBRRSv7tEm6cBxMsABs4pLyTYFyVRqg4xf83Ef7dNFaWwfw7HJE1wgirUpq4eURwYVVA6MUmtDqs6cLSH",
  "key19": "4P94WqE5jSkPRhM1cLnNfyHdAZSFmQtEpRm1X1SM2GQzKN1sLr2Mezd3JrYZ8FrAhRqp8ADKiLUL8Pq3W2zDfMdP",
  "key20": "3pqVoP4oJffL61FBfUEFT59ZUyp5ZQYYPrddHhpKaUKgUV5K9fEveR5GjRM1tU9sgs96WHTfq8fUKUwseF6Q6ySC",
  "key21": "4vRb13bsHPW6jLXBM6yDpNcG1k9HBrWTqFPa6RXXhUbZENAC9AeKZeMq3jKLjckBUfRgK4QAzSyFABba7Kz59LJu",
  "key22": "4kQBxTxhQ7zfG2DfzRx9reKVvRD3zR5QpWFVAs4usx4GWx9pWg758MCGkRCfJfaC2PajoJuvB3Gw5tVdLsHM5tPc",
  "key23": "3xiu4C8SmPJrGSKgqFk24FjzS67yBvebpBER6pn5BLHPzjCD3kpzJcjKEkFfte2ipX2FHjHxC8Vga7z2fBLuB44U",
  "key24": "Z2dokMHpyxmf2z1PoJcbKi6J6U8b5LjSVRgMn7F6KNcst727isGqMQK6PVXuGJ8bGyKZdWBVbxRYfuDKKybLK3G",
  "key25": "TuectgzpMzfsGwo61itAKhekPuwt3s2HvNKvXw8f8dw4LnGDFLxZ5LEwrDWfUWAZj54D4GfZTEguDeUPhEukrNe",
  "key26": "38BZdqiZK4LH9ptem8gq1iFGVRjGR1AYK7jD4kRKnZw6Vxkn1vk3DjXcvo62N3Y1Qf22vKnCzKY86uPicXeGD2oA",
  "key27": "55Y3UTyhsTjsZZ843oNfGkaVwWKCHffL6FMPAHEpGnANLoMvhpyjYFTwYMrHUAosnHmQBuzapLULWv3Jt7xsqTjV",
  "key28": "2kHf827wiRx9mquFJMPz6QGX1DKnKJj1Q62dnf74D5vFBam3FwZiZymojRZZnigf84QcUHfGtHnwBgwwQ2QzT2y8",
  "key29": "5nHGfY5cZ1kAXTKzhKY7F3GF1bvJ3w8Jc1XgEQNfC2uSyPw212b2EXuptpzdHexdonV3sMvdvU7aie5wLeRnBUcx",
  "key30": "5TVHJtFycg1qjvP2Zemyj5SwQvtfhuFMq2JXGMvhr4vQGXzh6pgi69ynG9Cbp3MgpAbpih589yaYNVR6JpLYo7ES",
  "key31": "2UcSpBat5EjFsTdCiYiAb8kMYJtbfuMWo94p6GdQyG6xiVi9Xy4Kh7duebFke5mQ1vcsNneUA8hzP9mFaVNUVWr8",
  "key32": "46oRYPt36Ce2tmhGJRux3Uno4qpWmiJpTmqqSfA2j8sYH7jig28zZ4Sg4S92q6xV7DmyiQHStWan95iACNSvmu2d",
  "key33": "51XPcPU2jnYp1NRxjbXtcRYb5WcXEbRHsPhnZehDnvKTRPZuy3YN57d8o5isbyi7iX1UoK1tsKqVeaUo4YUjubcQ",
  "key34": "FF2tFvmC2UAEwEuiuFEBwn3bjn1LnWEAXiQNkEqFtLzcgzYMR64cY8GoQnYfo4rveYcGszYKbyoNpprcXZtm1Q2",
  "key35": "5ubeV5Tdpne1AjyvkZNVrzq3cT92ggZ52DrrRgjUnLjtMWWjrCGSP6curuEcywxmTj2VYeAChL1ZDW7caTCpoyda",
  "key36": "2Xea6PhSNstJ1hkQtp4T2xvxupFBTsd5zRPUQ8aDmQzYCbSYYJ2LzrDtycXKT8unsN9qCCPRHYYsBRoZhPkZaW1M",
  "key37": "57i4fDhgQba1gYMBQ4t6o4RSDYMmhBTBW8vgqZVN1V3PH8x9dBhp1yWhW6LVxRB4oXBuBLJh5cXJznp5KurDgk5c",
  "key38": "2MHEiduQwNno7f2whQ7FrPdtiBvhP8e64HWVpjZVBcKGuwnLydbUwA3JTXxd4sbXfssY312inLGZMAexDRhS5y1j",
  "key39": "4nY8GQLcdHZNdF62HRjYuEeGNJBqg71tZSeJ4y2JjHi5Hs475wRTXZSmrAuuQkqZ6rJj3qiLA3VugbZmzHgvqnMR",
  "key40": "3kXimcX52uAR2AtGYaLdAYV1FqnfcvrXQnNRLRrmBtCm6kRUUjzMsyA2JyM3RUPio1CFxyxAr6hVje5KmwuemzFA",
  "key41": "4rbVuY64sqjfVmq35WRLNWMLoU6F7t7xYKaRhQZbgDMenb9goeEqC2qmBMtpaHrmfiqgftsawNX3GKR2azjC4LEg",
  "key42": "ELJbNJdf9dLbNiDEgVGcFdKEdNqh2UdVGMjiV8UxExBZLUpcVyZywMSaQoVHEsJtvzcmBtpyY6YCRuTLGLHJUiu"
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
