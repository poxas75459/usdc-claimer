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
    "2Bnyk3jU8nzu3mkjYUwJzgZ6GbmPgAVzPZWFfsQiXaTXFUXZ1RwUdndagtz96F2kGqRmbzCjMe8gxzDFFzhq5iHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XT3UfVkxS4bRz8sUXrMCDw1AiCxHjphVYia5DogjpebsBk8cUtmdqn8Kf6qw8z4688xKjDQXXJpLmzYgEoEvaEe",
  "key1": "5Rvh6mRUno8ESBqQbB4EJpVop5GjWdEoo2nj8T32VCresMN4sFvc6pKqALsrYkbYRwmxUUxAtPfhrMECGQitpzVP",
  "key2": "2YCjWZKzUKBwGvJEuDbprQKS3ykKQxdjSqvfRBmzWYLYi4YwzV8aWj5n3VwKMytr1hTeDEFNEC5KXC56C9D4hGaz",
  "key3": "5eqUnGVbSdjFh5NsRyEwokrrrNL7edQAyKNKCJEFFCLi1HXin19wQ7ZuQtTewRUN7Nfi6M1LLemzckQdNruoa3VM",
  "key4": "3HgGRBo6W7xmhAJGogGMesxukyucQrYKtTxQpe2d9adaczWZEtzemcAHJQA9vmx5bU1b26AMovYkYF6M7mFcYcjb",
  "key5": "46gzXYsgKreMfJqRHMdb8tUq8Cb3B8dxauJv9eV7wqhQg9GdEoZipGy6RP5XJWoSfHzEqPDCiLwLoTM2Uzh8FCZp",
  "key6": "2gBmTu6fygXhKna96UxLndgT1j9H668HZbitrXzVZm4DK3kr8YgazmdEHwkw7hBrEEr8GMYi2smaNzVYMJPoxMQM",
  "key7": "4N23EtoJ6jeZ24VTqE3UMDJUDmiwdYYYWMZQKs7nKszapPEUpn9ga3eWgwecH29ypLLEGQ5vdca2DizMrY1ggwF6",
  "key8": "5ZnECHeoW7pmmpFQdVarj5Sg4Q8oHtUg3qpCkr9qeVG6TuuFTzvSqWec84fnd5GQfW46EHg2BcDeUE1dnjgHBkGV",
  "key9": "5x5APcaS4hYpvSpa3wPr96HxMfr1WcRRDM4cstxhEkFfb9F2SPZ8TMp9y7HTfBtxBVKdf4DN9BJwZ3Mb4iSGhFVq",
  "key10": "4GUVDJMFybK17YYMBKs8MzNVcn2cdjGWYarFM17YWkYMGpJVixafGXixe1LPTjUevLBJ6cyZ1qQ2sAuSHWoNKN51",
  "key11": "5un6WcQGZNCyjxTJJMerhbo96xASXe47sMQ1Uzb14r7r75pCRrPRELzM1TUXGDZPynK4rrS8caLakbMfhBsbKzmv",
  "key12": "627kor5EoP5EJpYEDkwUqJ4D7VsM7uWdGDSnkvPckdvv131WpYx7SRjFdkaNppqgdu6nXt3GGyp7Wv4hwCsJCRgJ",
  "key13": "2r345CspP1GeeSaeBUd5ZnBaHNYrdD5Ecmb7D2bDRbeXFcCCj6Uti8F1j3Vi4wvpRj7F6YwXQP8dHKPA9P4b6NyE",
  "key14": "4yAhz4Z7HU9JhqRmM3LZbVEeoXXuMfNeRmpgnRqF2kRgMdsnxXVuNZoTZhQ3niqRWmxSsjymXujo7FrQtLPdgZ4N",
  "key15": "4f2JPU6BbsFyNiUK9TgqYUHq99f4yq3A8KFb1ty6cZun1mJQacasB1Cnr9HP4V8d1zBWwe7kbuCEhqY7TkdGUxd6",
  "key16": "4QUeuKPoQxYTdwVBUvZFenCuNWVHktK4QoHb67M5Ewf5UX3qxKbdMYsxgWLY7ni4T9EGVEGPPdMMC8HSFBqJoWZS",
  "key17": "3wbKaZkojBQbHzntq9bxsjg6wkqLVGh9PbAL4wzV3qiq1ahoZj8Pc7MBx4TJQM63pNuJYCCUndtvPsXUVq2j2fjx",
  "key18": "qVRxxSnJbHuDKaXKyf1rT4MiZeRN7PpfVKLwXZJCeeEqBiYnD2JZyunDhdWUh9G5xLsYpAuLuVfQfJ6dj58311U",
  "key19": "5x8Q3eqfDeBiiqcE8jeDw9CwtvAuwJfgZGD2KdPQ6Xw4sgCijMt5mb7f8WGZSXmMWPnwKBfGHacsEvCyty7KdpcJ",
  "key20": "5vQuabm4vqFbENA3JpgnXWQUqHMLZuZx2ZGt2v7gASAfzwFzR4bJiQEDTuHH4gm137cRwQJ9rjKCx81msL2dY7Dq",
  "key21": "2Z69BTkKkj3c6btRHCZCcouJiRjjXkJPeWbRYmUjJshCFSykHDLggkWPurNpsxqzAFMsVaYuaf5tPCZa4e6uPvSb",
  "key22": "4Xca8kkFFpGwom2KPAWLL39nbVr9qu6PFWXwx4EezjjNbnyNyQU9Se4vFpbyNRat99WW9JPnX9o4npG3nrEWGkcu",
  "key23": "5scjFLDmxy113ULEBJGTAo3QUzsDkf9CmTabnnPTxgroWsZbgA8B3D84HfjPatbha2aB5xuAbHjpmUXCVyscVEhM",
  "key24": "2FLWLHqjW8gwFVKWr5a8e7TxdLoDdVTnSQ9SATU4THMKoTKmBNBhiRV1kVXbUSvbEjYtxEEbPtM7wfh3HC4D91Na",
  "key25": "4hHRh5EMtqjcWYoexduK5Z55FAcfKWdSLVZotoV1LHoFwgjfHGs1hpTUBwZXB7uTWsKozB5CciqVnkgMaeHxZveD",
  "key26": "3KrbpHVDAkFbCrRbX1cGvmNyK541qzgCiUaV55Kf6TVgWVBQikggA1vwrGo8LfmgtofjopNoLzH4BnDXCJc8wRTd",
  "key27": "HDNcugJYpk7svHUep6JCx5LhqUhsXq9Fbs9rqcuH5SQnE8W6DYMVfgqfBjiE2aJV4N6TSeZMCGSN7zuhzT9Svwq",
  "key28": "3yqyYdDVSTR7MeHoDtF3vnKvbwXRCDAdNS2qrmFPGpn1aXhtAhx32LT7jxSM7rk5LpWEaaX7cDfWHEkV88TPFPFD",
  "key29": "tV3jNxLrBBnw6p1WLikG5oqt6MuegZknqQnnYHY3vAAyDjbwKGNL9waGK3BSm6ZyEc6Yv44qNLwLy2NJkAJu97v",
  "key30": "4mbrXrZZznYoFDbhu4nEGj3DMaqnjok7cwG4oXX4opDgseeX8hV1jixv1KmZdp6Lkz1bvttiBvbtWRHbgiYvaDvC",
  "key31": "2GiJb6wz9cGbJtToQXv94ELpp4GtojzZneyECSuRiV5Zm31rmtoAcRTFcuKTReh9EmXjs5566yYGXtNewtpJfqnF",
  "key32": "LFrn7ybqgKKaUJTkueKoLgAWtqh3mF71HowUg6Nurov4nZxeJKadnvCeuAqeradW1yJdHXbnK5ddD1Qf1khkk5F",
  "key33": "CjJyNPojRGc34X44TUSherATSn2ckmgs5wgsZDZsFNZJkKbHvjiEpL7gQtkN37iAexDK2B3TvAFQsd6L4euUivG",
  "key34": "U2HjV3WKFS8czd3ZzwjpsCZqJ4jH3REaoH4ttCMwP8jB2EnFvYdWHcBajs9rq7acHagxGy3yYsUBAFUtXxpDh8h",
  "key35": "XinN1k8ucVccaokCEepHqEC2MHBHRdDgr1pt7q4rqcWrQGs8NrzJ919p4MzEHBzeaZ7gmqYSvD8aJgUYe648jiB",
  "key36": "2qFuebCDGGPuc8osuP7Vv5QtGuShESeW4bBXko9y3v3G1eq19gBmxySSN4uLeoRKudysRNVGdPZjHZeGM54ERdhc",
  "key37": "JjmLm25zCxxDQotdyg6XsikZxEZHvU1PCYsMAd4wS6WPN5r5HfrgdiEYSUUbk1AM6XLdft3NZdv6DxBGBM5Pmn2"
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
