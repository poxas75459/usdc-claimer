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
    "2KGzmBT2Jihsunodmnrt5ZgL2B2YNxzQYN1sXS8hadonAjZS8U2BjioJxbEhvt5wndv2ZQWdqZQ5kBkieNw7Q1Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKJT3CK7BZPTfy1UGphF87hUsTarbvM5L9HAS6V7nL1tyVCYPdFhvycVVVu1BRjJzhiVFd37698TMoaUQ5NEs7v",
  "key1": "EeYTiVZECjpbftNWXdRqpkkmR7qZJuuaHPeqKUANfxoupThbmgFroMzAXaFCL2bSw1fAtPm89MLceiM8zQiSeUw",
  "key2": "5WcCK8BjfsBvjkiiuDgjtvKQLbDM1MPtb9CCAuwqh3vHrRTqKbsbx31AGGZxV4D1caZk85iaEt3wKC3bx4fzsMXc",
  "key3": "4VuDyh35rCHEtvJYC6Jd3nkDk5j7i2potGnehtffiRwP4ALp732LuTtpZUx15UbtL81rUUi2zqMj2qqE6sLkmTnN",
  "key4": "42a3wdyrH4bWsMdfKjJyxKJG2XkXUkPcLUQfENb7TztYJq8kcBQE2tYm65SdjZCAeSpHrbDNXeyyzjYAfytdQo1W",
  "key5": "5G2PjuQNQtFsckygKEcRxwnCerYVqZiiAgGTNyj5c4JFUx51fLRFhJ2AaWRvoFYpswGPoaChRrtytUSNo7mu3czw",
  "key6": "5nigJndgnUj3ngYGfvfwRa4gCgKjgJWhAv73DnFmbsBKwe4H3Qh4927PwCaGaoKkUihftk4jjbwzXNWHgsXoGSCK",
  "key7": "jgtiVJCys7oz3pRbda1PjjxxzfELz3tEPCDZ6bBXoBTiMLi6s2F1dwCFHAMAUYe22ueqws9ujoRnZdo7jRWnJMB",
  "key8": "2UpKPNxerWtWEAVHwRESDu3xTfpA5hZjt9Fh487KWfG1bPnzpu1T6DLmRLpv3ghJ4A4niqBxxgKBTWWLj9yVDRqf",
  "key9": "t3YsVx4iHZFs7hRozA2nngeVmyULxu9uuxu9Q7Pi16SsY3Jy1zM6PJbbvZ4vKacqfwJSnvMMe7J2zcoaPdA2XHp",
  "key10": "2tgCALWDFd4HiM58wg1tuQZpTYTgXyW8m9rzvH7VhsskTYaeCURLUf2jgRUdqkgRim7mDsKw8fmCvMgfYfoSCbqZ",
  "key11": "2qZKj9cr4MjEYVtoVhRHs6vJMbZaPoszjS8gQB7Y3An1vRLxVnhQ5BLo6pEwHx2hf1qgTBft99kEibWAVGk4EC9U",
  "key12": "5FvumeTA3WquvbNQ3UGr2he2tYzVHyQNbPKPgEYPQ1hDUuEfJJhnmnYKQLTydFKpHdG317UQjJkAmCWg4veUrdEY",
  "key13": "2rZQ47uEJ69Y7ogTd5nyLCiFCndnrFEqehrrUZm3NEsCJfYRDWBzo4ktUeWiUK7roN97ywcF8xRb6BEeXxnd7aZR",
  "key14": "3WRq4DjahAHaXnCaShC277xZ5bEr4x85KZ6ELc3y6MQ1HEgREt6P24mCWvZovnHbBa82hpMEvFYMHeAqUrEZa1ec",
  "key15": "3Dj4xVwFFGSk8Q6oCS3mzRSVTMQ4sX6o3w6AhHp7XCMLErQU4LJ1gDABK75quj3L61HEeNuZzeR1yCz1fQdHpYoz",
  "key16": "214sFRC64FYousmErNiz6BZG93bGutLqXbCvPrBzj7tDEc63EFdeybkoD5MTYRPcMZqTKouTQq4VP9t8ECiJeg1x",
  "key17": "5Ag1NXBvUvg9WfZYp2qqcBrn1EUyAqBnv3BBbYaby1e6oEYmHRHsYDGcAzbke183TaLxZ4gUHxsJAajvCKfTHzCh",
  "key18": "3WrQ915yH7XaJjE3r71XAYKnezRxqJiN9ZkUSMetTf2stHetmgh67CYe4vcgN8GVX4w6G7aeLU8XRwsM1HdySX4L",
  "key19": "3wqWAswk2ZqPtKJqdvuzsgsXYashBF21U3ZCh8gCcG91gJuHjUhkhQZrQYboEWSCEKNpDX1wcoSo6sd26gQydiqQ",
  "key20": "3pN8Fg5mYyrVyxbrzZTFCHxiCsKSALAhPWKx7WMrDHZKSrLRDN9AEvRt8JBpyyDiiffrTfyi7zL68LkSsPyNimhB",
  "key21": "5V8rEDrWKoi9ekiBETHYkEdM8F7XjMdNmDg1w7UXfj6utBdQJL2dzATJP4XYeXcDvhHDHADtiL7ZjVg5nk18QfAH",
  "key22": "3pnqcz5tSmymLwb96u2VNaC2M2CxipoLWZTPNvD1ML4jfXUoMDw8VPqJo5g8F1tNrnNZpF7LxxnLh8WVUHSUXzmh",
  "key23": "47aJV1uqxoFE2g4gn2EBkRR5JuH2vi6enompJpQG8KyEXbv9tUJVVWwv2uFwA8NofMAXY2iSrMXRzujTjpLRvkkg",
  "key24": "2Acm1A5dDddRriKBumbvKMZfPCFjRRF2r7aLpFdT3Frosxs7NubdE9BrSHp5p2PqC9MaVtGny5Dj4AwChvFKSiEL",
  "key25": "AHjsZ5tE5L8mAznc7wfuFSCtNCnNeBdWWy3uaAtLZBhnF8LK4wiyukjycjXhzNwz9zsXuBs8SEpKtnduGRPEEyF",
  "key26": "rhHJ33CDwa7qZtFhK8k51QtfPgHatqUMRHR9XPKrnEQJZwyZgWpmgoAFB9Lzo93khMt7vKMhGk62EJXeH81xY96",
  "key27": "3oLmXnsGyzLCZWMpHTwDSNbgU8MvXtBVHmZuXFKCBqUxtihAHmWnJRGhokcC39FP9RcYZ9Eytw3cNgeqxFv1gxyg",
  "key28": "542GeQeizWsnZeRDMrnJTxn3iBVYYF4Rt5opNmYvMWzjxAHQzerzWKR9NmaHR7BQotD3poGqJ8NbPpH8vpdZ54mA",
  "key29": "5uajqY75adNB2Ewj7Hpo27h94Evfnmk7W5L4gHTmq8tdjNjxA1ouZY1T193vg2aEEnTinku6aZSE3b1npZpX7wBh",
  "key30": "62tBsG6g6GdMGpxNJdpWNqTnThVf5VTGdncCLvaXbAyxE1GQ8uBysdjSEj77pJnDrc3iCuM3X2mgqwMR1jzp817j",
  "key31": "5VZrdYPeEaaxXM2EexqMf4uzCkx995nn55zsprk4LnBNUP3sPnYm72KDYVYrPap7ZQX8taZnk6VzxW1TxV4Lho3v",
  "key32": "4JAYZaDNsTKQ52ZMGJ1fMB2N5i5h2oUYfhuUEywXiGhXSkmkidWoZfm6bDgj8RNQTiaFwH8sEMimFb4hacQ1b5Na",
  "key33": "5N1rccaYvxMff3XpUYXHb7mQeDo7C7wDRqBr9Z88FeFiFj1MEkTUU7XDBXbcPoanagMmA8S9McddmqpBvspvCpgm",
  "key34": "5xjFBJYkTGqyW2zXcZkoLZEaxTFE1ynVHcNSZTRWxQS3u7XXS6T1YzNiuTMUQPdvDXd3D8qnjAah7tw3k55v2SFi",
  "key35": "3Bx5a1qr8KDZcncSY3LC7oktYmmFKDj8mUekSs7PfxaJ9H4z76ut6u6g98XamgVyzpqf8un6VvxxqJX1C93DT7WE",
  "key36": "F5XTkfki6xLqqK9Bsy1xviavBgBkZry1iMckgaWAYvp1tZVT69KXPVTERSsEYABXyfp4deZVaT4vkSCkMQ18XbQ",
  "key37": "4XbKbVrS4cvHoGhn8V3vDoxkUEAciW5vfSjFaSsfM2wfdLqWcEfGp8ESJuHHWbBDA2s6cuWG3iKrrZvnG3mpFaVm",
  "key38": "NgKiM82G139S4PEQNqLQGk3zzJE1ZqPi7PG6dzRLKj5AMWFzRUee4bNnmEnN9bg4eepteLy374BhaVqrqsKmVxL",
  "key39": "2MhdNfoW37efmyUrbCeWijEr79sfQ85x8dr45ArBawbAZKkL317F9qSWsHYDxH9Snn9fu1NFtqRQdZrCfaVP4eCJ",
  "key40": "5H4MAv6zcniu1PekRkLgdNmPLgouJXpYhy3dbbopCujM74ZGFo9TetwQ8Lmq3KYN8S7febyL96WHJAvgxgyvYU7i",
  "key41": "5cWcEF5v1mji8E3G6pDT85UiM2wnyiTBcw282Y7Qk1q2RfEdyegrw3Zv7EJnRs2aaJ5CvMU1X46Lji8Wjfvuduck",
  "key42": "4wUyrQL37SSDmXM5VFLtdSGSDj9YN8xBhgvWuDpkfVdhS64HGiTEgmVFieXg53VZ2GqDjT9axL7GeFJazRDg16fb",
  "key43": "W4Z4MEAk3pikfNy9aZPV9qcMu6ZjsatKEtGCHQ9M6X61ZJdhG9n7vwoUaNyLnqf86SNZjAEWmKxMbPhBnSqZBQB",
  "key44": "35sWcWNnSAkz1j3pbA3PV4aFkbABZEDBfZRa16eieSnU46xoXEQUZvscMi91nwrUKmNLCnmYymfZ1NqmpRpJ5Dys",
  "key45": "51MaycKBWAwJLbYyAbe8QLyfKv3PpotfLLeXWxeiRWk26wt9xhKTH6RZcC7P8PPt8Y96ge8JHcvoNisYa2DZNEy8",
  "key46": "3EFmnUdxn6HAbcanQGcHPnJR66LBgD5V284hrPJocj7VEXcycyCkAZ5Gj17UHbjSz9caUksJCCS9cuiZqFLWAF9U",
  "key47": "2t8i4qeKcC9aZT7xd7RQepwepqDq4Vd72aJx4WZgSNn5KbV4iB3a14KGUHfhxHR7M6fTtqpA1pFg3yDaUkxakjoz",
  "key48": "186JSz2K9Pk7vaF9zo9U8mZqJCL9VMeMfEaS9Y5Ea7mKhg8eTXKidriMetynFfBUj537vDC1sXm7iokPBeSX2GC"
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
