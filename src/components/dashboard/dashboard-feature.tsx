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
    "4t849Z22PDgDhf9LK9P5XdmZMBDtJoHzEXtoHiBA4N8N6X8gzJr7WAYzLvgpwC3a5REyoFoomt4NzsXMA3cUdEjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KovUPHH6b8GYsE13sXGsLf22kKn4jFjdm9jrpm9U3w5n5hum4Ef9uuBbviVpWSB7Ndiy59kAiKGaHXxySwRymf2",
  "key1": "45mh5YZxy9neBSmAfgQfUZDBzTEQCR87NL1bg8o8emswK4wru5qwfuKLxeMt9r3E4W6wieTQ6fw8j5Tg24cBcjN5",
  "key2": "2QThwa4xVUvQ1z1eLZhbos7eA6epSPvFi1E9refnhntNDdmvhqR3pNMDV5r5wz4ZgLaV4g8L4uxLNFqBt8WJGyr7",
  "key3": "DPJW2MSdhnfUgiwtJ69GUXBJ4VtWbtYC9HXEuoMYvakseQegMMa1GRsTmSJot2qoBX4qMkge9QeEqdmSbrfx4TE",
  "key4": "3j2ZsfVXgXweCfeHBCFPkSKUvEGPqhThEeJjHWL1ju6H6xWmBxsB8oUuZJUUwVHbUmLUDpjomAUULQk3bgrqn4aS",
  "key5": "3x9ehjze8AoEFkv72Nju7f7nkmNw5q5eQrq4K1159LXqNZBKzk8hJYV4dsmgAys6Z4updLsBUWcPN1ZMJ2kQpU2g",
  "key6": "2wUpeQKETAbLstAu9GoycLvQBh87ajeKAHRW71aov1YwmF5ivdT1TJ7nzhyLoAa26LCLd1RskRAEfq1zHBy6K5U9",
  "key7": "fcw3mVcJh8UQVg2Wiucx6FF7yypQ1qp4FuUk7L2RmjyJ86XMQHAcgcUsaeRqNZe4bhZ6wNshAnLfv7iHdm7JZSC",
  "key8": "2RExh6GB1uSrFCsQubosQDjCs57ZW8eDn8ajfpPopFYuzXZnDcKx6L9a7Q6FRJFNMQu1NMgZYe7J8nxjshZugDEX",
  "key9": "3dHRf5pxFy5enxawJ3XFc5eijMUBE1Ccn2m1oFbz4beXThd2P7ar3tieSACtwWy6tf4NrYrygquuiMwbpGP6Pt2Y",
  "key10": "4iLdrLHiKcHNhw6c9UDDZuk9LiooLsnrT8i7gnMsNr7gomssV886H1YhQCnMnt6Jp7xVatXpPXd5SYtewv72dVnV",
  "key11": "HAu8TBewBqL5yqmYT1cVuaENX9oTfA1Ccba2DJFNkjB8ezcqWCmfuqH2K6ErELSqoGVUd95SvgBw5o4UMEv8nyv",
  "key12": "586knQc4wYCXFfALKCAuY6MyQEjDzFEWq7DdZgAQwMvn4o71Yrnt7bSLanmJM8p4sQ1EDy4t9nXbCH4pSB6m67qs",
  "key13": "5FLQTTE88y5ZUGX3dwupavo7HmerqSsaBC6jDaoW2KMDzzReqoAvHpX54hiURwVVgGNVzUxttcuayM2CDoXFJM9u",
  "key14": "5AekVMKNhJ8nWPrHs9EFUNMvgx7FzMAoyGJ4JszkP1nRwSC6fDTmACFgKToByDyQznGpmKiQbLpYxJZfx58daNa",
  "key15": "51ajXJc6fVK9pqGMTcYMfGop6ZSskfKQCtB8amzE9ewX8uWVew1NBYg1wu1HoNJBzJ6H74iGMqzuZEX85cqx49hp",
  "key16": "3MxajEh9FNj5y43Bz49SuER15oavsNCCYseevLYgrnBDPgAXP2iX5Hg1Zd8D2uAdzVv3R2i7RCByLwBNQV7VWqdX",
  "key17": "2RANbKvjmFM1x9Z2jWVZTs5jjBnBcURdz5SrnHvyuJxXcH3AagfhFRWFpZcbxF4NJYZ4VDCyQuaNcVJ77HmUBFB4",
  "key18": "kpkGojPHRL9giTH3SMxxqMPMr8EgEqMnwwjTcktVu27nkmQiwiubgcyugvEMyRtDvRc2hdVBoeNRseaJqKvpaTU",
  "key19": "TzdpskCD9jV54YNxHQCUJupsuNpbPHjRsBcqSkZXkDoWdznTt4BBa6s3HMo4E74oV3koFTEDTNx2RLEK7wPZNKM",
  "key20": "4BXSakvRZLys6RMPmH8RjVhxR97jZRPSszjfT1dCjc8D7a5Pd1JpjuqdnKYMUEqnvqzrLS8J3WQZLTG4M29JdSXg",
  "key21": "5RZqPNzUGjSePnDpcN9gaFpavv29RhUyNtRrgQKb9S78CYj9owewehnVjkC6xpuYTn377jBFucndZAem3zFfgY4V",
  "key22": "2zwYazGxcwni96RhsgiEtjaN2Vvsq7hyi5PNb8cZoqSiY5JfqUMWpffuanqs85xWUjwJNaRotkPX5cwDPnnTfn12",
  "key23": "4aRDR41VwLY5KvVttXAqx6Dk5DiF96ojRLmSxGjAqJk9TdTUbVa2D5AZqyU43uBwuPB4tJZVLu38z17p7ETiN3Jt",
  "key24": "2KUHtotgUjp3Kt6pASpqzeNW2tp7oovZTz6Ka1CQtKEB2GDrqwKMmpAJwfXHoiRFcwwwi7HbEyYuoPPPQ1QBaQxm",
  "key25": "3p6LMg9P8QjB7Wb7Erwtb1okTQm3p8WnXpMArpW9FSV7MkFATjoqgBnVG1CqtRW9HyxGTqL6SaFJ3M9UU4G6wu7",
  "key26": "4yX2GbfsTzK9y56BQg2P6nHHuovBBPMNnTkjctJbET4kU7eZcGZDBTvFTv5TWAprxCpqdhxhQwKkeiciYauD7JQm",
  "key27": "4SZ2MY18Bo921uhfe54bDuBp2WWD4odr1jYVdGSWGr9LKBm9vzDbWNxvArDCDmwzd6S9YFpEcyNEsSez7BZc3ZjR",
  "key28": "4rM9kYFfS7rcoFfy2ywUFZeYfBZnmZ7c6n4gBZ49JyaZRN9rhF8mbFSEuGPTLABq12yr6Ksw9pw7ZASJbE1W4uCS",
  "key29": "5vr4L24WRDFLyUXwDmmgnmnVT1q3VHHHv1WFUXuVwJ7cbLWfax5TiUmXqsr3ceqM811LvQo7Hr2KopDS7kiPPtVb",
  "key30": "KYeBkpD4wj46cLuSDqyperw5hV23CuXQuk8dBPEFfzAeeD1eEE88GzpAnEgcRpEA9FUxtHsEJyQwZfQYKxxUiZu",
  "key31": "49RxhmrLRpnnwPe33wRGKtdEjhAVGpGcfXycPhqF9An3v3uinDMYDX7DnjSqdS6oHbviSHCyK4gp4FVJzpUHFpEm",
  "key32": "2f2GNsuQEcbJVL3PKMEBCfoFnEgaGCUs82KffwMUt31ieNJfjuKNSfpbmHDcTL5TBE2WQVAxAesmvP6rikuu79ud",
  "key33": "w4tNfmoRz5N9tMuCMR1SFNtPaTtH1BPb2RV7fg8wggMPwu7bu3JMnrDBGk2mYETxex99y3cHQHBHJ2wgifaNypM",
  "key34": "LiNHZm1S38ufVEjesBUL7akJrjPWuupcJDhZg7zndSjnNJN8B3iCFGxdfhtFT66fxdiYZwZtu7kD4bratfYWRdc",
  "key35": "AVSyqqG1162Z9ds92YhhbttmEJLD1v573zzrR9e7HxkXgoLd9B5FZr53qhtuJhpjd4h8ZnpzULW36qj72HDWtXi",
  "key36": "2M7QPgLRpbiYTbtgPmFkJKZPeKaGrzi73GuDejJjArSgdAbr1Di823X5N4ypC3X5hzZZv51qKGdyd7pqGqqimNPQ",
  "key37": "2RPQoYi3SRFuNgk2GHBSs4hZ5t531qyaoqWVQn7BJXjwDcPZqdjYLTZv4p2pCx888ZYdfrnwpFZiodJ3YkDRpghg",
  "key38": "3nTN9govhAVA5AxDAUzhR7AxBDuavBDWNmCUXyHEMpJ9rNy9SkcHMQHrvrDjVcNC96UuBuzTqi6DpBbt1KqDGF5u",
  "key39": "54yh1WXXng5FLe3LSWsEKdjWzc6xnacB892mxHVZZuunzBjAc1pWxuqcfcBXqEipXZ4hmkqtgY6UTHa6YBFQByqd",
  "key40": "5cev32jnksf1rFaqquLR6JYWDK73euDk3XcU5EGLavJmZFvwoi4zhqFjcDHmmfXNQCWsxbNUrcT4FEFoZUP9WZr9",
  "key41": "3u52kFjzkzowuFC4NSSL28AUdqAJUKfoY7B4qU91ZxzdmUL5CkvxDhJaaFaf4mQe53chfvX4Ak2G5KVV5Bqrdx55",
  "key42": "5FoHDf9Y4TH7widvNWiPPrAgKEByqgSnMvq9Xq4LqFxyz54A7HPZ44vt3aq6tnNPENhDysh2AyiXHwWxKVo3PU8i",
  "key43": "RapxxqXUyAFmr8jzgZTkXg7U49secpBAh2gZzvNnv3GQTiaaqbYSVFfYbdu51PwPpECb6uWvj9tCcXUctienHGm",
  "key44": "nqF5YCV5WL15rKDv6g7hS1gFR83YH5PurNLn3R2YzRzRPvRpAEaczAfQyLqHkw3Eotwph7Qw2hNfzs7g6qd5PCB",
  "key45": "586FnfYpGw6kd147qqeM1besZM4dZKQpyqYy1gJD5K1E3oUyxL4utxi4C4P4ZKrSNq4Pn4Uy8XudfrTnH93AXTkY",
  "key46": "2xgWF8oVFsqeFvLP5XrF5DV4m8gc29iN4mUp8CDq4Y5Gy1WwcKd8FL6oD6qHchMXTWMdX7fss1nPg4Kbgt3bBWea"
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
