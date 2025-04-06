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
    "4CTUHZgp6ZHW1F39MKDMWYr7ShqcgzJB5VzjF8qB8oczmKDX3RAsuM9Sqqco9s6sfrBEutbrkzMpd9epki4E1oXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhqbp2LFnXdDejLtjZoYSkndGRAVyKAohjqN3VAQMzYefi7W2c36GjKMgaBHkLxeWzxdg78XSP6EZXuKhZ2bCaK",
  "key1": "2joQaxrJx9C3EuHVZ2qdkE2AnJDLP31yAcY2ZnvH9HZJjxqyzfuoPJKJbLLhve9CLnsSwUwQDpgh76RkhuZmLCmn",
  "key2": "45hxDMSDCQjnPmT6mVXnbyR6Mi6P7JcwTUBSeyhrWeRBc3sT43tajkiu1pxSbxw7Tg6QQLkHjT59Jdoyi4Urj69Q",
  "key3": "2DSD7QPJvkPnzCAbdiuUYeiMBNoXPBRcLmZAeHyN16vamrHha9eFLgwfm4RPuX4NULZPHuuhUqijpP1LcPSPjQ4q",
  "key4": "6RnRJ9pHQEcgbuHsHa4r3QUCftRUoJ4pYgMa2bS3KGXTmmgcjhX33Hy1SEN6HV2gkmLgBpiLgZTSue4EGkkxR4V",
  "key5": "48ShnQTgxtuheddKQKvwxSY6rw6SEtQRwd8Zf4J7R9LARUm1skXBnqNWTbQjGVRinShpheK6jCvtyvLqwNng1Gjq",
  "key6": "3qvpREqtsdvhmMjMFSEiP9GYg9m5cm5GWpmAGKPhAxZxA2wsZBShnbdWx7y8iEQPpCx997QNQG6gAchofT1iaT4u",
  "key7": "5QsroLDFHiwR5RccgCU7mSp3kaTJGEJpZCpoD3hRQztS6PfSsi4QYiTs9p6kywUontoB2TPDfZgb6WBGa2YZfRhb",
  "key8": "4NsFoZJgXFKHdn3fCCXmyZWVKCXr91Kymw55qnCJkuSqpmzzfMCJACEzTz8ZiC9WHe8xNwhFQfwRbq2UV4UZrpW2",
  "key9": "32iDyfq2EmfKBzRgFFPLjT1Jfw2vRvYtbmEDeVLY2Vv5M9MJiqLpvGf4Wj2K2SQEPeqepN5Ao8X5cJ9LbmCJixDi",
  "key10": "5EjApbBjSLdQcw7DboKuuDnDaquqXi8CRYxcQhNYr5AyXvfbodaL6xTPAJsANvqpw5oXjapMw2imkujHUc1BwsVs",
  "key11": "2vw2tZqyEET83w8K6yPnrrNgVLyoZ3RwxFeBobR3cxYXVZD1xnUjmKfeGbefb1mo7FWp2NPs6xn8B6TCfMpzaEs6",
  "key12": "4mdR4Sqc6YDSXCoqw62Uqy59dokNZhSvY2W8pivbN1ARNkB9uJruNLYUxsiSv1Jw2ZYg6sYn62UYJK5kuoHou9Ef",
  "key13": "qYP3Ekx1joyQy4r5ExvFpz2rsT66haagKwRPKCz1SfnW5uvU8YBb4Enzx75CLV9kg3Ys4Vz4AWFRbhKX9HpG7uo",
  "key14": "3Vq6sYsAQ4dwwJFMSBGu11EDSTNi7XaKUef3KXbjZA25zhzprZ4veKdtzrmqvnmPehc9RobQoncRmG2bttCa6YnK",
  "key15": "5F6GJkm8hsLR6veqA7Fa6UcJZbqsCVyjHZGyZtmvtUUbtEQTaX36xPckNNiD1YsN4AUU8es7bmGRKU3mPXB92jSU",
  "key16": "8JJuiVAvXrXBPjRWbNC8ep3GViBrSQ19GULcPKEJ9JdY27GgAy9YnVCZYJxRS9oPxcWg1AgdLD9iGgsPJqWfUYR",
  "key17": "5u3NRdPJZRztB4BktHrk7ty9cqQPxWmeAB6dEAcfRCgJcZWfrAV86C1SjC2EvPo8iTm2xXrcoq7B4YS6PL8mYtUw",
  "key18": "4NQB9ybXdqrHosyA3pSZyFoVNQ9dcvzBkrwSiCTXAymQUErtSfg5J2ibERjPReY7XZBNkLSBbFHVbQV79kFFBVR2",
  "key19": "4DhHLjsq7gZd4Xirp6SPeTTVpjE1ChQdUwTP619HS3m3G2877v2puUzn4mqNXYH9WiRGaJnoZaS54xXu2GBZccL6",
  "key20": "5u4ec3A3dYdFcooup1GUS1tMsVAaHNjqXm42NLU65x24YH7ufBrrvu6ei6gdheg5cu416zhUt98tWZp8GDejXqiv",
  "key21": "2f4oixSp6iuhVKM8JC1aQpTUfgFxKr8EmMBFXAF7Fr34ZV1WyYgZ4e7L8mVSiyX7r1oEWVD9uDK9zE2TBoKXwRH2",
  "key22": "5LimZ8n3n68Z1LBTvwtdHV5mRBacer6LKq3nduHbEx3P9iQpeVKDKandGYYGKZ1qbyJBR8xeaQaRyoEwkEcYTkc4",
  "key23": "32Pezw4SLLHxgKt1LkaZFcC4pUc9o3UAxUUuHLXKyZs1ppAs7eq8po95fsYHJrvJSsA8iuSHx64XtN3dP8edFueR",
  "key24": "3JsaFjCjEcsQqST1mt3c8Jtnz5kbtkzMyJzMXKz3eLqMiMz2wXee9ZFi3i9iY1hDZ6sYn3HhNRLiE5RdJjzptJ75",
  "key25": "2m1aCCB4vrH46RnNbrk3k41uPK3bHojhAFsjmTF1wY3CAf4bpDky6CyqR1S9ynkf5ieQHcX8kXUxgYVyJQjUtmhC",
  "key26": "64gd4RFmsSkfjm68K5kJ2mBErjosAVEW7SwtA2KgnpV4z4d4hbPWZrZNAz2psdFDt9kC3HbE48CyVDXH7NKQTHxw",
  "key27": "3fp8cCLeWGcqw7mKkNUj1KSZdmXH9kcJUmmDVVBqVoaL1Bc5AZXE3nXTR56YpZjLRSx4Huh1pDssADBtAD7Daavr",
  "key28": "45E1s339S1pNCQWrmbbmrVaZEQpJJRiJFEjw12xkxpVBsTnboJD7aH8kNJ9v2MPj1gpdjvvH5KEz1eKWuuaqLXxK",
  "key29": "zGi6VfSsQwGcRZxgPER7e8EPUQSrMSdFtBnJR9B9TEba2W7b21u2cx9hGSJaUtkEQWuoq7JxVq6uFtm7pc1FY4s",
  "key30": "4ghUH3aigs4J7HBotqcg1ib2BH5XsiSmLQ8XFBTPs5xwSumDv3rmTuc73HPt4pJ6255JhTVFLrMLVa149YSHyV6Z",
  "key31": "4w4sPggauuXdLvnFtmZE5kb6p8xsZDhTU92iSyQP1JoYEbuJqc9ikmNZcMUm3JnDATnJ2MwfP2JPh4osLGcBrHrv",
  "key32": "5UMx8RjTsQkMVYRwSV6axLWiWEJnhQixziZu6dzLSDQ5uFTb2N6kWvtCdqdw8LAfn8uLdfPufruoQT7ntD4Jsd9p",
  "key33": "2whtpJfg453APYpjaDydVnuLzSUvrbEGYd1EmnR6Defz4N8HKaug6Ad8LpjvnVMTzhxatfejYXqddxoFUUvVnVJQ",
  "key34": "4dDPKKQqUYhMb5LfPa8mHL6Xg9W8cVJaEjwgCSpLzGZ6xwyXYgU9Dug8UksYMBiJNsSXGu6qv1E4CHHTPp7Pm1uf",
  "key35": "Yps1VHsmufJAqeunRnxC2rT6ptHvWMTN75GWyZTbMqUnp8s62XYCR6EYUAJHh7ZXnk79ot4dARBPaQS55Cqbrc4",
  "key36": "LBpWDGHa4GzBSzZRD3TtARZxPE8VdM1svB8vAyYSb3apKjw167hoghZw6hmDWXwVMEZrqNjxkY83kWELMELpD6M",
  "key37": "617cHybZ21NbaXWFymxmX9xvCjJRkHWVs1JNrMqE66H1VMBYuaBF7oKmaRv6EG3PjncJnUFtnywvtfestoSnsxPA",
  "key38": "2r89etd8TmsRDjEod85fjHa3w3f75jeLRFgEgCtNMtVTidvERhH8XDdLUXLJVsj3fCyx1omyzZymHXPKLrnCwGoB",
  "key39": "4xuXXdgV9n68AnPVfYZGBLJidCwfB36EMtpyWAdkyk3fbPMM3VYggbsHJyKrXuRRt5iRjU2gypHmugu5c1gffYv1",
  "key40": "2bxzKESc44y73EBUuuux2ERuvmAZCZvC9nAEyXeTBuyUdCFhhdWFFcZyuXRSLKyDh6g3zSMuYAvjgsiCJH9yrdT4",
  "key41": "2jvGAX2wMo93CPRtU7T6H8zJaL1NW2h8FBSzbnCsh4LNxFzW2c1yj5aez9WYJnLs1jFCHsb7W4wggZNcqNVsQWxa",
  "key42": "CM5qWu3XXfYvwE6q7FiPYXHK8NHyT3wUK5Gvyp2SWNnq6uENZmrDFtEEL1Ff5fq3gKynvJgegrC35HNwUWdKGzQ",
  "key43": "3kpCCzFEJUXzNjWAJK5BB5xtSHqBfMVUW8zQtm1a5ujhPMKMMoTxRimuebWV1V1hC42aoKG1U1MjKeekSNh2DmFh",
  "key44": "2dCMHzSjCr4cYtPXQyXHXaaucBasydtgQufo7EUQW4H33TWczt4wEXUCpDwHrTEVD9zRjdaKXtZeS5ANRCVGRCpq",
  "key45": "oh9z8ukBmDhwqGksJuYcE29LinEiSctV2MdVRKL62wWPuVqNrjnoEubQJGLdcjuoG99b67o874N6HwW8MuPTQpw",
  "key46": "3zZqGPXN1cZj3yVoLySNVdFie2BCMKxfZm1LZ9Vt1WUJq3ncdNW44mVQmqahNaqLu2zor7rBqYaFjJYnQtdojKZp",
  "key47": "31Mau2Jij7n9oC9EVekbJCNyheDjUsEY2vuDew4rgnozb6GYLidKs2HhRfEUPy8y64fUckQkxqDCVV4z7aS9bchJ",
  "key48": "5JVjpyhai4RTiZTmBB7dCRX7zZmKmUtu9fD9gVYhQoYp97xf5tatd2dJJTGpAm4WRvEtCQWUdNLy5HatQDLjvsxf"
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
