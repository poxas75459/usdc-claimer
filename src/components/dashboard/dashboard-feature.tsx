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
    "5FQZFkjyBJFxzNhNiuU1ymkoG8WPaxMXdsPfbRGWKrgR1Bvm3ghEbb9bPfKNXpGWd1xwqCrS6DuFxbRKmNw8odnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pp2s1Ktoit7FG168pjj3MScnmGetgVDLLzwDxgoWLBRidTVR4H6f1rSkNqCJ1Dun2x6qzimYVXg1jodhKQSgpDe",
  "key1": "56zQS8cr4zmYYc6BKLNdoSFKa3cbjGXGwNmQrCo1aTi6MefZwEbYpJfwP19g3GhbMjKMBcSACcMosXZqr5sa7V3",
  "key2": "5NyCfbw2eDfy9BHGYZXnS1h8enFhFUbsRQJTR5Te5VQi1kk7w4np43vMYQb8J9s43vjvBJFGUfhkypTzrKTn3BWJ",
  "key3": "K9fs3FdDe1Epvow4P7H3nJNDedCDq7BQ17omiPgPPyQ3J2Ja7DABHWCdGzygqCVjZVGRDqEFBhzqr7nb8WFd8Xc",
  "key4": "572FGpdvXvUFm99wQ2SDb2u9dvnetrRy8Y2EoRGfUetBcXWxvwdQbPnEtvoKcvpFd4FFjkK2TWAnHkVVijfARJuz",
  "key5": "5pWsxn8176DsGS7989CGavidwDnH9opj6jm1kEUxiQVih23pYm7CdkQqjWcpa6xx4JtL2EGEnsvU995athuQ3fYT",
  "key6": "3bD5Y4aH2wBMAMGbxJHeNbXa5MhcKn6ndeW9FvuVYYm9ynBHLoJacxXdJaNWDoMJrfGAmBHrhzz8jVGCy1vACH8n",
  "key7": "461wVxMhMhbyGxq6APaD1VybGFsj53L1o7MKozqyiD5j2Y7CJPKvRcE1ATUs96iyVpxzSicTCvHCjSzq62aqdLdu",
  "key8": "4hGVwwgQQJcpJ3JKwhoawWDX5CqDD4cU8EGEWRmxYc2eCgST527cNhnwvU2kVkfDhMSNaQyXCoDg85cJe3dAZqSW",
  "key9": "3Z35saKuRyoKWGyAx5kGavEBcpZEiWdS4wWGwL3JPCAuzaRd8MRB6i4MGJ1Eq2v5V2Es36dBQUr2fRSf4S33buxH",
  "key10": "2sA4yNUi8foz5xQ89f3Xvm69DyWzXgYnE1jL7PQoik68dtSgtpwt1jpJq8kVqp47n7Gp72WwJtymnwEp4jBYBnne",
  "key11": "5aZQhzYa2iQcZCTQES4xv7YvSci9gDFRpgs75yM6MX3xdCs5eZxiG8BjzmVwvVQ2YkEd1U5cnszymwRyXa65zpDX",
  "key12": "2bvFUnpnMtE6KFjiMqrBVBHsqDoHoVMLorTuq53dzigNTy4CwUA6gsdDK5ys3pWRX2PWcQgvMsy2oRivqoEtqJex",
  "key13": "2L51FL7SHbgG3YkyLZW1849ZzKJgRWkNkhLLrkFzWhn115vNCWi3mjgS8g6Gh5h6zcPraQKVem6EYwuozTCU4vSE",
  "key14": "3akMN8xfFTUFfSLDF41bYVn4vu2mzc5fWNuNoAvpeYZ56TU8Xj7GZ8KKHAnVagJLDyfvuqUoDAXwLgjsGpde87YY",
  "key15": "3YqGeiiRqNDWKXBaV2xZcAzwKU19r4QQy7xZMTo4cy1UmesyP3vZ3jcUEm82mR34BjrcqYZHWP2UDAmpU6ZEsqig",
  "key16": "komJ4fFeTbT56dz1NoErGAMCpTkNEyM2StwK3podJ9wTog1TdMz7yRsEetS2K61tyqb6kydDBRjrjc6WYDxbqrH",
  "key17": "4nGv9HB1dmgjxBUDfPfj7XchatMaQ8EbHkv7yBsjYDQnaqwJ9ifqACaYRNJaheaBEeyMRWs2QqYhj5Ye7uYDQpro",
  "key18": "2iLG9NqoobxEGXRRXMsa9bR9KgfxS6K9Nx3Z4rPvvBSwqExs9HhDKZE8CSNJPvtAyW9F2nj8jtAC494WyPhm45Pi",
  "key19": "37aNkNtqiP9Kf8rKQDY7TL5BzWZW529qHKagWT6NXgPZrz7tLy8Xt41PmRFcLbgeXG1S6BtKB9tp66wLFuZHDh4V",
  "key20": "CWMPtuafVu36cUtsMgvWuFnmk1eAYeRn6TZMTnrWKK2kRnR69QsVD5BDz3mQ467JNCtxbCCBF3fVoaehkRhezxJ",
  "key21": "2bn6xA3gwfkmteRGpcPqPX8PmK9fdXVqPhopfezMN2yC6Cm8ZbKb51KN6PRNLbwEn1nafQ6nUdcaoPRPHkFXBLEN",
  "key22": "3CKxhqLPdoPr3vzqvaf5Rxi7y8o3U5SpyYuuan3JQmdZRzbm1a8K4TW8QvdP9ujHGUSKESaod1NfMuyjecr6DWwR",
  "key23": "3cRKUQqusgE32YHNrJ6jiuHWrLffGZfoTJE6NNp18jXDXB7SNebxD9xxaBnLSw2FJSK8Uy6bBYhcDvDgyRqxAjxg",
  "key24": "2Fbzajno2d7eUA7uiVqvnTxFZSQxQmK54by51GdxLXaGyDFM3f8daMYZNQAJTaZVCVyZcoCt8ZqKt21mAUdm3d9N",
  "key25": "4GieVheLFQAR5vYt7fWCb9FRQ4Et2A3cSC51h2TS7wXENFHCbyBvbW5xsAL7zJdN9BZPoz8xCT3JfSLpKsd2gunK",
  "key26": "5EzV4TSooGNoYFSiNGdcZfqummDXqBUb27NxCPqSjMwBJUtXS1LnAjBpk8FNywVk6RFxLqkHXWSv7LKGiZXejG7X",
  "key27": "4ZedkwMxggVg7LqYFHPQkuwtSTRWmHgUhbsPWW3QSVfo3HHu6tXkTLwoSByKNMaSEsqUS4HwbmS7PQHUMZPFBGXv",
  "key28": "4TauuxFmhnzute4Xsho5fUemr2KDiB7p9i5gxUyQpiTdYDXKsMs1Ne6ENUiSN96P1ixDvB2Dw9cnoSnYiUU3XdAt",
  "key29": "21BZY2XRoafAdmbxc4YN6MhPG1sGsGXuQhktRBx4kDtPcnYoQt4R6HKdKFvP3H9Voo3pTmX5wzcVk5ag6VF5fA1r",
  "key30": "2dLfcFdDST7bRo64n5NQU1fmUD82MWvNDPTMUaEvifmJ4niP737gEnKayTz9uQHpUadGhv6hcQgBv3qyTeWPvp8X",
  "key31": "3risyh9XWQzA6WYN1VE6Jv1zgyx5y1JXP4PRBK8YBxF5vXEc9Y32DjNJF1GRC68mRFTPevSri3SEHcMP5mb5EDAx",
  "key32": "53kwc6NKBZAS6w4vxmsqo6B6pmSjCyWT3dkfRgYmAeTAJZQhWXjp9DYPRCybMtL4K8Xww5ZEDNDidyoS1vzcoh3G",
  "key33": "2xv7AUXXnYtupyjfAwfBQwLonHsGAsJSHmWnovqPcsgujxG2CaDHapiU44nHFUqG3gVfdhxaUMdk5pXTRyPhCz5u",
  "key34": "3eE3YbVVEPgLAcz9W2ynwbPJ72C9i2brzZANJSqdJ6uDKYWTN7hKyWbirEwyLpvmFsojeuYDk36WmCQbBebTCyb7",
  "key35": "3R41sQqYBDFo3KzR2mJvRxp4kzbx9bzRNvNGsoJuyuhoW5kVhd4TpmDMki8jjgJfJMBBvmwNu7WrXhku9AXqiKUD",
  "key36": "3vUNofgvGUqiqVYEFE8W9PCTvc4oTDp9pWMZ2Y2vp2vwkXwa6H9bbMNCRS7yV8j3rJFSWWnuKd9yVpirGxAuk64u",
  "key37": "2NE1BywuuwKsjAMBUaUeeqnbwunX1BHJFF7vrp1rvBVRdVpwUQhSVn1Z3gw7UdF9LcvVhW2sh69vGfKHvnSfKdLd",
  "key38": "2mf5yz1mesy5uMHMhcX16yUXChXaEvgKrcUA9rmKRQ8p1WNrKidjyN64V26rkFziurFSJNaccSk4NT8PLZrzbcF6",
  "key39": "KdqcbVUJcvr1beyDRT7T5o3f7WFepSdVXSb8DE544x2BBfKs2SsxmhzyYcVgj6c5yYiDwPFd2MMmutDugrXYioT",
  "key40": "3yiwmJfA5TvZf91onkb1XVKMU2kTUEvu4NznKwvLmC7nZg3VuyiGaLGLn9SAg8JvzHepnY3t7Ua1kuiVSL13JWjz",
  "key41": "2oq5PByDNAaJvxVAoVE5Kwj4KTJBJyf3b2tHWMxn5PxjdMRwXWBQXaJPQFBm1yqf3cjmJKwuE66mD1ZN4Gq98Lrw",
  "key42": "24Vs5zGVEiStPp9mjZnmmkhyFiaW1sJPGouzo59pUTX9dzyhfTLYySAAV5jBZkLbjKcCgCdRE6v8Ekdj6J4wBwfd",
  "key43": "Ft539evGHwqK8TeuAtyE6fP4PG9BeW51zF4JVCh3FE8fWPoS7Rk1AUPwt9nVWN5MibPzaWaGTpDpQ4hHTuMcruJ"
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
