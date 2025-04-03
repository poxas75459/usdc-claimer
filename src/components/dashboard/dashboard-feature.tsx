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
    "3pyMtDzx7FtHr8DrbyukXCpQuBLa7QZwqpez55FmGCxYTVd9PSqMBCc4Zz2vFcm69BViqW5adWfJa21BXwAZHxoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmHTLvd1NhjbG5vW7FrrWsKo9khv5CcSy8vo574VJ1zZn2dZRQ2mSKtFndhVv1MqgLm2W4iLwzDjC6xpt86SxvX",
  "key1": "vYppmYfUDztLCCHikcKmw5DJYzGjfbHKrfZZPkukN6jPrWvFgm6zf1hoxmjeL8u4jd4i1eEKBybMBFrtQVRz7D3",
  "key2": "55RQEt2VVuSEVXzAd4qSHrhgFd1nJ3eeVN5H7yBpN917ARbsB7XF4qqj3ofQ3Ue35hn1Jg58tHaWDFButeaNjML7",
  "key3": "3k3fihcNn44EunPqE8gjXTdsUzFAWTxMGhKNNAR8KTRaHr5KE83DewqmSPnttg3ufKabMNV8zyN9vFETa9GLVLS",
  "key4": "59epsaprzN9hJvu5aecbDKh7dbDS5pf8BebLP4KT6ioDMjsYkPkfkoW1vVtsj69Qg3C9L8qb2aKEs2X6Ef8yA9E2",
  "key5": "5RAS3kwcVUV3ByH24tkWNP6t3N4zAjKUtZEXDWxxjTi6pNn3ASJWFLHy55ucUc7V5m1xjFUXDgUw5pxryGFDjQVn",
  "key6": "4G9dqqRc87Ljzxk9tVQpmTRTWxcLCwpVPA9L5aUdAHuRCAbu773DNS6bjT4h2mjeEgR7pCpigAxRGsT3FQ7tQnJt",
  "key7": "4yMQKBhnkCQs88e3hQkiR3AAvY7TFUw9NP1nUdEFuSnrVJqjQwfXPSWB6pn8YeFpwif9FPB41BrLhB9CT5cek8ix",
  "key8": "5wk8xKvc2tv3GdG8NVakwyViBPNwUJ18aAhzD5i5aQsqKJH1Z9Ygypkjt2Ye86p7U6d4dYAk3L8s4ZY9hfpQ9keP",
  "key9": "56PRFVpeX7iYyXrKVz8QmdpzK7Jc3nkcc8y32YdfxrkjkWaXGjf6p7TKkmgy6P2YnXLABM2FdMVoqcyUWxN8Fd13",
  "key10": "4te1oVaBkKcc4Ykq41H2nHkBWkMyq82xBYo2t7wkMSib8aEJrwsQoK7gQnHDUy1KPZG4A8NzWU27TyibJN1Svmqb",
  "key11": "3Bq9X8XVkEhZWfPz3C9Qu1He9pRWpC4wP1NYs7KFeesihDjQGcEjAcTwpQshXVy3iU8ifNmq94nWD3zEs6U3ZGWL",
  "key12": "4Hv8vHBD82bzQQWV9CvEgcDBWHvynXarbkNngeL9uAGEA3ThRcv7qTSvrMZJvjMUkZrNiMuv9KTRJ92X6phy634h",
  "key13": "3TVqUUJhetxwubz4cSsYtiDMJNkPRa7bebtRMSBRmR7aDJ6ZsTVEN9T6PsQ2neUfbG442mZqFWt956j7i93V88Ug",
  "key14": "y6AjZ2sDwXwxCEjGKoqF48nvxE8hCE4ige92uXQAZspx9vyvuKsxPRyB32vs1GkpPXHghXUvypdLaeo6noH1vqu",
  "key15": "584ZFUc3d1Guvoddb7SgmZRNDZM57awGExt4VVfmCe1QRy71j9CoaKs9mb4nw4xdhtBEGP5NghiCFuakEGkSGMQi",
  "key16": "5adLznPvhumJh7Q1ZHRjgXvqm3ADLe9VdN83WJZqBfjhvyuJ5Fs49VNRwhvoGEyiqWUonguAXddkmSWgVR34qXgQ",
  "key17": "3cLyWiDuD6zJ699qa9JDUy9jkhiyVcLzSDmgCJij46ScjZbfnswAU4zxwdP9HogoG1TTy7waK1M2QdCNPKQrhCQb",
  "key18": "48CPmN6ByJiMGVPAHyMbD2WrsGKZ8fqf6DdDP9WTtCvpSqqbkeRsrmwP1XgwswQYGr1QkkYRh9yNm1TD96LpLyHK",
  "key19": "39zeayfQraZsGD6ux8aNkp3DVEaa414mp4pjVPjQ4ytrpTWaAUL8Zu1GSSB57FpX1NAv3bbcPGMAsCjWdNAq8T4o",
  "key20": "5URsCrC2HYRar4RNCSff7wHu6yayTi7vcgsFjewnKXsYMefcwhZGxj6n3EvHd1PEivs6kuhCmLRcM6ar7285vZ8A",
  "key21": "2cgE4hWVvtSaShNCjiR1rTLERkEKJoPCf6w6aKGPt1yEstE5d45G9GXuskzyFgBrVs9nY2GZq9kmwFSRHQszjr6g",
  "key22": "5iyUVB68Yc5A6cKYP2f4MsymkKxKPiVWWHbLJHpyyNfmRpxD4WBuQJBNppZEvggh7GskmV2tiAxzLSFhmuYRneyv",
  "key23": "4wnGmD4XSB5Svrq6cXhAKFyS119JAu8eSsSUp3P1GDNWVBz4jmYb2rgXvjZTURTMTKkZmHkVZpcNG7jc89W5nWLM",
  "key24": "4RJCGqQBLykvbkL59Su3VHbTNetpLZLJaGevVRBPfDF13Hs2cPhGgGzYtH7p46W6cFWy2SCjXwwhTYrLvKYukgEa",
  "key25": "5zoqMWBUBjeMyaiE4DjHN8ZpLyh8agwKMw4wx5F1DZc85Bp2UkWsTxJ1AxwbAnEwiBRAfd5JEyYPK9EqiZeXLqnG",
  "key26": "v9noawLtudKMFmLgXDvehHj6ykofwC1FuH8qWiVS1T95713919S5KfajvszMkoWBPrrU2ZnkSoiuMMzhFCAvsdB",
  "key27": "KrvhGMpgUEPaWRcew5yyEZZv6nQhZwVxjxzvVJcEG8a3vjBeFpnq8pmW9suTDhMAhBU1V5SxhS9SsxMyPuc8Hg7",
  "key28": "VozHUa2gShnz7UWFXASBddvwhJkvkkYCuFUPoBxQBx6BR5u9weMtusP27fddfbrpJczbk6Qi18yUkxz4VvTY8T5",
  "key29": "4gsgG1mFDNX2iuPNXBXEZ52criQFZo7P5Lbg4kdQ348LF3twH1K1bZ5vn77pvUyVKkeHUGwGaw2jxYdP5cWa8xQv",
  "key30": "5my6oF8KZDW7Uc4E87zZB1bpbfqwECJbUhpgVgkBHzeXdTDsTed6tXmq8BV11qvHuCinBsnhPzC4wXShUcRtccaV",
  "key31": "2sEN784Qzh8PEeL9hVdKCuZpkiuPcyWkojbEheD3dJR3kHmWs5gHX7sDuXb2zK26atoWuVdiB2aMU7xmcFjBkAEQ",
  "key32": "5ATD3JVnPgHQS297kndFCeLbQ9RY6UHhBsYwjr6C14X4AFYJwgur8moY9c1VqsFtMt1cw5TiAFtLtshXmtJ38gND",
  "key33": "5Au85x37NKWJsyMsyN94JeCkahVgeyaK1qwu7tizmMBzXFtEK9yNvhZ3aUAZhaD2eq8r2Ws6aMwSC2d6j4KG18EQ",
  "key34": "3its6xUTB4zTT4f93QMX7nd6TvJcGQHFDWE2WosyScpgK9rpFW1ofREY1HuxZEqLZBbqc25MX4PXrDcaZdGgFU9d",
  "key35": "Vpe3HokbnNU3uJoPTc3NSyQgUsxo724YkXvcYKU7eWKnkmqPWChw8zmkDEbDKkf3fXNsVM9wjp2czyUDKaB1f83",
  "key36": "Y7siyXRK8QZFY4nu9M9Fzoh85XWeELKE9xtFK3tUxEwCxEFn57bdJRjhSUJUZT6WdWQ3M9rHzWn9kwCMXhZ3ruK",
  "key37": "4zHuiifcc9prVBJEHESQEGP9ru9FL1zJKi6fJNDvmG2i64vDHynjVHdEdG9NWPjgz8Su5LEGGP9SnNbAyKJGrA6p",
  "key38": "Ro1eVnLDMCBpUwdXxFd8cCdRJDZWrD3MkRfhQgu9wKhWuCdi8J32rR2XwUf9G8uc6ZztR3pc7vQcLk2EkJQF3AF",
  "key39": "5bEQeBugmbffhwgKDiMZhyXkW8McGm4pJHy3oyGpbkWWUWKD633Z365APiW93Q8rebDr5QrMj6NPnRzgtuv22GtY",
  "key40": "2BUXtQ5SGhtfpbUAY7drip4iYHVH8njVWUFCnKjXaXdxswLBxihMGFq1yAT1psANXaKSTo9oiWn3L3ETBN9w36uM",
  "key41": "5oEZ5V1VAH8Gu3KAJSF8cKMMFZamXiHeqgaDvkQ5uDmB5YdiH3wef23TT8qRqW9gYeUT3peVQ3kBwqswh8GRFC5v",
  "key42": "3cDhMHyGGd5CJRpmMVGCPCxV1CupRoBdrVL1HmHGiGKa2dH7PjSohEwfx5LQqaWpXwHVBeoc8nm7cMNCYbANUvNx",
  "key43": "c2BCprygZtCGwca7kGHhQvrujXEJL9xXh8UDkM4b8s2B2UhQaSNaKNhwg3xDAjMPExQhbWSuRGofpUAaWfqD8b4",
  "key44": "3uisj2kPxdFNuiGaGLU5TQNK22GTddKcGGwkYhghGPuYumpMnGf1RMwUBmydcCL8wGQefwsUaT4zX3UELxUUapvP",
  "key45": "3GNdwW5DWPp6RiUuRuaMzrN73upMrPF9dxAEzsQcfCH2xS8ZbTppbbkMENAeGLT3d1MNJmdj2Wt5tUgiL5pQHqJx",
  "key46": "3aZqdKYANYF1UnSVub1wDYhqHmm4Hay7ENpmJLBWjzMm5mdPFH3mNMVzHbxqMgJEviqrJ6PhzwRuiatcXeug72fj",
  "key47": "2YcC37KrUCQN39A8owUbDpXCyBNJ8AGe2UQakqovmTXA7Us26h5qfVFrJZWj8GmJYwwUgxW7QB3VKxqPFELAmrsX",
  "key48": "y7sHAHJqQCvrrYeYV4eRR5XGZwaKrxw9PSHpcvjyRXQyWwjfooaFWP7TqQx3Zyvsw25Uas3LCHrgb9zTdPq1nM8"
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
