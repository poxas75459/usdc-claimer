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
    "3EHc3hnQZDCYmAFBr56DLbqVLaRp7a4shEJMPKmV4FeJFbqC5316Bp7AJtNxKE7LmUrgi8NFF7LwyFuRBTVetHGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdEz7KoVS2bUkgmim1qL3CAxqA8gnY6NPMJKVmzHvVTFZeTwPzaU8pcUfseS4smZk6ibpS4u3JStUAE89CBdZ8k",
  "key1": "42YTwMkPdm4h8h6jTEVeeMFPdBKq6FNahKx46Tm9oHQD5A4NGE1Mz1jsni2tXAi3hynaAhRr44GtCgddHZrPBkmm",
  "key2": "2JNUTbkFj33b2xMdcfMwrMGZKwWUBD2hw4FkQsPxciuCZ5CPsm7JFzLqheq2vcgDKLD77uPG5rkN7fYNsYjweWhg",
  "key3": "3KHuP3y4pzmdc87XZvZNo49p8RqYcxF8psZpYp6K4P44f2p7iu3c3ABCFV2SGJ5piaLrCRSCwKPVwosWjgBsSauP",
  "key4": "2eLoSb8uQ8sG4ZVBp5xDPZZDF82A4TMAYoD4JqvdCFY5a83YKx6WPsXi5w9BkYtoeWVRg1D7eP4N9BdtNZAdAYsj",
  "key5": "4Vatd2wYauqu5xpdtVMsuYFNK6hQCE6hdMgVgj9GReh39SBK56qnjRpko8cxMUnthicnvmVkjjAAkFyWaTVDAL9P",
  "key6": "3mAdtXKoQoC11YgGvzFMTmNYUuwUCy3cLsdQkesc8w6utQLXfQ5q79cvKdhcfuTJFXHznxgCxZg16sP7aoRna79C",
  "key7": "2cwSrbF868zEB9R8dz3zKryK4t2u8EH8E3QfYuC7hSewjh5LsDwGLdMTHYXBzZnHJWZN66eK7tvgdceuj7AFVcYM",
  "key8": "37Pw4zCWTWL2jLPGa4Kng7d9BmtrqhJE5QAKi4cCJn3YzRKtq4zyUjbVwVPaTfBgcWYrcRFw5qRR9RvWSrN6sdAD",
  "key9": "25XZhToDiD2CpNfMnTKhU4FheF3YX74tnECnD5gvjVZ5MnvLVjtu7qd1LHLNjJu6qtwABDQR6uQE78FNhmu7uxr6",
  "key10": "4SoM1kQAxKXZxRGqSYevdmQtmPTZPdTGvANYwb84FFME3LTgMgBV5MqXxG2gjpuGHFKTcLPn1iGmoBo4KnUz9nD1",
  "key11": "3iML3PaFFtAq9DsfuwrdgWaJ11yj2NvztWap1JfizqbPdbSDRiPHk9DrgLim9qGojsUXD4o8mtHMs9ADNd6r46ki",
  "key12": "4zfj3zUKnMpJWcSaQAuGyEnWGWrUxHYQK2WfWYd2Z6JHE8wi8qnNe4VnRFxzNRBXNmR8haXPgtfGSt2XjHvmtfyi",
  "key13": "5vRjfueJbiEyZKGNjmHWgiEQxjNArhphfyJ1x9TtXgenfWGKL54Qnzwfi89yt3deFF58cGttFt9zDbSizSHB1tum",
  "key14": "3bZ12Yn7NcApVg4P7wqU8MPcqE19drsLJo8oBBVLRDbE1BgL11rk8UP1U5GT6kbi8CA81dFDx7taj1N4cxkfQ91u",
  "key15": "62bQXprGwjbWHGmo3SEUW9kRrmJuGuf1mU3Eog8uQcPZfGrpGzEdKhsi8k4SJEzGvre6wFvejbEiBXYFuksFmYhR",
  "key16": "fdwmZ77ZgViAvMEy1abEsqvuVHyRvXXQ3C328A6HgfWcsKjXFLAj5mw6SACox7LyDdN7CFvC55QFy7Rc6bzX79x",
  "key17": "2K5UNXhnrBDwWBjgtDE8ms9eFGd2HvddYp5Rrm9Ut3LS34ZoMwjyz5yqo2Y6dSw8ZysUWy4peCevqbdaNsRTBFDf",
  "key18": "5wstfRBzqv6ngWuwXkqrU9wmwMMqA3QM7yRmVKUB9t9i93zmTPHQT82RMYVrXJibUwvAjVnhVG5EGv9NPEeT7yZp",
  "key19": "3cdoDnScmnoVeJ4qwKv2rgQDNKeARTWvicGhys2WStBoLJULBf9rjBvJ9oAvR8cQUoAMZjMFT9WyvftiVtduZJk3",
  "key20": "2wVVDmEuQFvN2cc3gTgE8oEz6TRxFxp7DxVXuEgVhZDnUabVYmN5YbpVrbnCjsot3ZJAa3k2fKynk7w3EhGRJ32P",
  "key21": "4Bgak6siZNzh57e9WU3rUxXMXRReYehYVBwCA1AdeVZBf2VTZ3jcBQm5u1ce1UkBfBDCd1mg4oM3hNfyUjHqDtav",
  "key22": "37BcQ6Df1gosJxAaZxTh5HfkmACC4pWJF98T2KEiHHn72JUW1KRA4DE7iK3aLY6AjQwfQX9LWwWNCYatZ4aQvt5T",
  "key23": "37RakonfcLfWMwasNmxS4KEWU5SgqHMBdmm4C3FE65TRa1KL6JHwhYo2aEMsfZ6y5EfTMwbrGrYxs2fNz34Gp5G",
  "key24": "5GcXJcfj3Rzxz6GB3scZKrgcPp4F4h5L7m1Jm8SBJbukAEu11JDoFC2Ru9giN2YS2dG6aeYrG51VXWdBr4rmYeoG",
  "key25": "5UWmhoVRGBspZHtGMJ2iwCZPyq1XGJATX7g8RNebMC9SQpYyqBHGfEvG1zDvCW1Jj4fwKBtunaNAyaesSY882JaX",
  "key26": "61scYbE9RQyi88kxJrpTa3s5xJnt6HxoykB8sdQsajiU5dkkqB6ACJqMeJq3NG7PcRV6CuseiYLPz4he1PuteApJ",
  "key27": "2qycYCjLHhWHMzQXNHNkw6syT2Ys9HYy6fWrQMEWT8GjevSVyQrLHWbA4wy7PbnacQ2nU2dckLw1ZTyFPygXRZC4",
  "key28": "2Pg3hJojFjzKJuUma9kCCWytJS42Z4B7S9dWToyKBSfeDMQWTgoec4vPwLkfZE2DCRjdCcGS6ioPGgKTqk1CjUhd",
  "key29": "3ugSC2dJW8xtYD4QZAQwLC4LjgRVZHFgEw9mQjaCiiVwW8dKrNMkAaD4KxruFJR2CCUCKiqvr32mHyXeL6dMB8US",
  "key30": "3s3FbhUJWLwhvsKdfkswKYTtGvVXDjRJSzs9R2tGVMAHZRLGxUL8xLcwuTCEmNiEAf3jaiA28y1LTEeeFMBo4a6d",
  "key31": "35CZG18iEvKrWUGGMahpJizz8t4ATtcdxJrvP4F9uhZkTpNThsVmimxarzr5fs9UjjiYSK4ySay15TrRGmaEXMUZ",
  "key32": "4JWHv3DbBPfmomTY6P5BxiVRnMhcGsJg6GCPGsQ2Ct5nHE2ooGLNZ5amwjT1UXjV5HheFtmsGksbS1FL2UpBzAyV",
  "key33": "525a5dJGLJY88syaobgKh9QdWwoCSo3nNmtfgVPJ4vbsSYhpnnGmdW9z7SvxnfrdoJMNxeDPzs1UNMdoGbuRRknM",
  "key34": "34sv95KqE8pUgYWewfvcYkbQiwypxnhArqQudNBKTTFxqZENjtmpgGoiFZXebyxagLMRnVZoALfzQ5HKybDuyRqd",
  "key35": "4hwMEY7j6mkhPemsvLZGDMzC1MniUxueKphRRKjwPpL4fWqamPSGny545nUS9DLzSPjDkxzQHrw9vCqhzVe1367E",
  "key36": "2Gga3oTXzoobkKY4HkytUFjC3HwRPZi5SxnPEAk8tfUFjTGgqZDVcA565U5RfZXxip2gYeWUGCey9PSpQCj8RQEp",
  "key37": "ZsYuMXyQcygwueKU9VwTL9XPDFiwK2LJpHo1BHeRGdaHbGa2REmNAiWzxxpJB5MNDZ3BVUF6QKoqQQLcks3TJAx",
  "key38": "4nhJv3QhjZdELTGG2VNRw8jRe5iZmCPVkSHiFV9vHsBLksYa7S9J6RQC2fj2pMsJZveV3uhrHfz3waNU58fAmn3F",
  "key39": "644dC4693YkLCSP1pZLxQ4PZLkEhPnrmDpezzkXNJWgvG94uzoXwgbJRTTvNCQ9vKW7YQQd2XjDuL5Tz79Q7x2c",
  "key40": "Jnty9jbTp5S5GhjUj9c4oSWvz4S9hSoS9h7m1XnzRb69CWcqk7rkk5xAwExji5c1g4HEJ9kC5yzDGYPe5sg58Lu",
  "key41": "2Xf79x3zKNfD7h1a4i2CkZmWRb9BmTTSS9gNGQfutKiHQgnpNKDNm5HRGeZRgHmi5XKgE9NYMLoEV4bCBdG56NMi",
  "key42": "4sNfzdCvwzdcVmqSULP3xc8arYDAVD9Sk58GtqtuGne8prLLUKgpnMwnRKgCu27sFhupXsGD76ob3SFRWYfJ4BQ2",
  "key43": "i9gG2iZ8JfNQQ9r3CL8fqcJywnAFUTa26toQMM1MvV8kdzmA5ZS4tiuzzsn8kyTRntwEzfWZT2wmVNWcn2GAB2G"
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
