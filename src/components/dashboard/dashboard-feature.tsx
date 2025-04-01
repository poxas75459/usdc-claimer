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
    "45sTqEL77nTR8XNMuSHZQm6z5kWxFvscGfJA7AZtQtTohmtZWN4ix9Whag8CMHUqKCi6Xr2un4pC2rLnWGqXGWAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GVYBbNwFxbcTaSpeqtDRiEpTeGaLbNcTAKH7HjFV3K87UWPCvCvSZ6Pe8aayPC89tB8km3Gm3bS2CBv1keembPm",
  "key1": "5yB2hm4FRKuHRr2S4qLZMEtScQzW45ZqeYthPD5iKBu4nujHb4URD5quVMMx4K715t1A7HuzvMGNNrcUmoqysrhq",
  "key2": "579TcMCpF7nycqEPGTYGKgxNAy4u6q2SKjnYqPvYJjnTwy8Wv2kA6msP3daBeJAdMiF1m7LcUMzUyWXuhBwrj1ft",
  "key3": "2poqGR6XQx3u4qAxNi4NBSBnk4kRGtUAY2beBAbFXGN7aVFbDVw7iw7LQnKsGmXhb51Y82QW9iMgbXCJut1oLzcq",
  "key4": "3w4vLXBgr6erixQGiHzXisLT5jG97JzR7PVPcpygr2LHDZ2cknWWPaDUQTiVZYKpVe3gowxJxqL3TEU8PeUkmSFo",
  "key5": "yA1ohSYvte5Y4MUTFctn7G2xvVnrZEqKUxsJgzD91ZyDF6nhTiqxSW9TyTYvspozi38w3cVzZ8NyjhvAFNY3AHT",
  "key6": "4wbha5h69RULo8mjftCHexdfAbVaCtsASh7w7LwBhHDoZrXDN1AVrhfMjzTXhSeDYU1uegCpeLZknxamuZxU1Xdo",
  "key7": "3NLrGVVK93etVDqyB622bLuES6vLNd4ThKppTMGnjybV4wCkFCYrK6c5K2ENbC84tWVdBmmPPeX14N52DZ4Df6wU",
  "key8": "np2pvNJfYt8zMjxGoPYBNKE1iZQqDXjKHNiWPBEz7BXEd8dH3MaMcYbFtDJkH8jhhDsFSFjm2TLoomZEXAXXGaP",
  "key9": "PYs3FhttZHwHhSJ4t94Lc5L9vBLYEVFa94xfWmoztBKfFwgVwi384Sq3JpnisWeQpA4gxRRL4vZrBHqBVdMhEU3",
  "key10": "YDDAqb58ew4NnrubpP2WsC5if2PgQs97w8VAdZsfD25MvQoCeTXuappKnYKBRya72xa3LzqKuv7rxJciZ4N1363",
  "key11": "2cKEj57LSynv9QjTtTTrchyFF3LPui4MRyogAj1fJFT9ADKhdA5Z1F15CCydDrpmRFSz7JnA1xFsdo6kPbQgdxEW",
  "key12": "3QZ5mASRisJsJFBBYByJeiJTJcGE6LMVTn59dbtydSad6p2A36rwUSMkfPcWYZeBbLACQBtTJBFmidNmKasBf6vK",
  "key13": "QeF9C8jY1WPQMJCYo1RdWbmJQW4ZAJUNTUqgiKrvmupZMipLtd1NyR4tg4nvAEuUdR41Z5zFDpXP7yiRU2cWXRq",
  "key14": "5nwfaijUh2m85dTdDRqCqV31xA5CuvCGnxXP99jBxq2FPy7o7AtekERci8Td8jG2xt3axUZuqNHkPejbmc85bKoA",
  "key15": "5WQyaho22cX1Kg2p3JMbFYeVNiAQg77TMTupwK1hQCuoh8xn4yY8jYPj5HnW5b3a1VAfiLvdATivGuqLBuq7ARQD",
  "key16": "4PBhr4kqVugJwj9krmT869bbpNe7pXbSuWtCDojxk8BorVnHh5BKTUDUbxzB41ZfKpfhkEyJYk5LknawX81CutTE",
  "key17": "AMemfPMK8Nq7GjKMDZHQMAgXZgn2PemN9s2Y1SnErm1DosNeAS9mbLnBgbBjkuWR1S36yLALxhLstkCNMN4TnTt",
  "key18": "587VwNocD9gnCW2KC3A3EWDT4on8zMRmTCosdazwy53jXwsfsx5RpzB2UiGSnTbyJevi7MARKzL2BYdUeXed3rKp",
  "key19": "5Qy5jkcAbAjehForEBrtcSEA9R6ynzvhtX2JWycToAyZasKHRp8359N4yn9MCqfhGUF8pMLuUsVY4JAtCgdfyvpD",
  "key20": "2hsbeLsBsbNi5j9xnQsiTe5dHK5sKAvyQxeqXP33YXQQ1M2xxzXBjPHqp1X17x8YHhWB98MzDCDVTE8C5XQgL1tC",
  "key21": "4nLnSV9Mtk4xvgUMhFieaT4r8UwkpH8uUeceQ94TPtntvovjUHKT759hC4S13bsskUeDZPZYnj95qxMGi9Ab3Mt2",
  "key22": "9KZkoFihs1FfJKWSw64ytLUuD4H1ns3vGu6eDW8eaS1jxJe8qZb1LaHmtkBrnzmcKfqe3aqQJX3BZG5RYRWconb",
  "key23": "28gXhLgVb3u8s7y67uTRcv3a8oy7cGoAkTvjnBdk43XBFiMji7jJKvcrvP7zkpEdNd8PDhtdZHyf5ow2XqFC6Ltn",
  "key24": "2AXnhZpwwHR3PRv252BgCKapadhV8jD2xpJkdVmx9xu5u9CgPPFCGKyzi1RiNHQbPAGfVm3NHZaJpCD9n7SBJDvE",
  "key25": "4VTx96jFNno4xprGpFn6kNb4Wng7RYVVq8uayDjLYoQ2S8kdGrSSQEAKbxePUA3WeHS99TDJGMe2AEZP1dssTwJS",
  "key26": "2kLd2Czdfimf4NS7ZnHQDZUB2BJYzz7YjPffAovjBZRJHcrQXoTGN9BvHokxCk8SJWP77vhnELBBMMeSDhPQs4u5",
  "key27": "2gR2Tge5FcKau3dZdBYzDtcbMU6MFhhJEHBi3KrfrQuHfZQApUqb6dy9GDLeS3hP68NAtJCts1LGgAEvfyRvdZxp",
  "key28": "CxxZTwHnfDBUPqrYhyAPqL73U1S6LSvKvqHd43WMibochX7VScYtXLnyPEKxzJ474P8SNbb6Eu7ayJ9VfVj9fEe",
  "key29": "SUJpZLLektnLxQLEfN6tzNy6kK5xn7czExWP1xBHuM6oNLSVGrpXCk7JkfMwfnBKukDLb74XSPH9J8V3rSkT9Do",
  "key30": "46Y9NJTpCKjdoVckMzu1gKXY9UT2p1GDAmoKZWriAwS2ZXiZJeYSmLrjATmVw2HEXxhkRpKtHv9VjowG7ZWjTfC7",
  "key31": "64HqcwbzfpxQtQWjjCYyT7XywUnZearxZXHTvFCKFovdHKeSMK5CobSZsnBoPC99owZVyrJK4gnMrcTp6GAYRL9V",
  "key32": "kUPbMDuX5e1ncJoXqDBqfYWHgGnotmFVHb8htV8cG4gn7Rb3ohK3A9aDZ9X7HQRsH7ShxY5aAFfVHhpPavr6P9i",
  "key33": "66HCJbqUW4F6E5Jig3Jto7F5tCGRWSyPu5YRtjefmtovS8xYEZi3dkSA9UoDg1DcJtMYQDztY4vDPqk6fbkUGvDg",
  "key34": "sJ1vekzmkX9FmPGZdNqgVRvcrgQRhn3PMqrTHyX6e7N2gMJ9PX98qHvgjFrnz9i95JHdLXUZCwzcWEp5gNsYpz4",
  "key35": "5oMkwkXRnLNkCNpyW637PezH92CxFjkk7rhKXNY7zbT7J1MJAWbfzzDK1gym3wRX8wAXD12FymZott9HAAhg1hBw",
  "key36": "4qdxDfCVS74nmbjz9CgXGaXU8tfcgTbaXaFD1K8hyHiDoXSkmhbjn5jHe4tde78uxTzAt4LFbHftMQ5GEKheDhwV",
  "key37": "2U49K9MNxdx5G5hYf7c7Zot7W7Wc4bSsPACrMYuBuaYWP7xFnNm72EgdMCztzA7u9s859tBUtmKxWd4kgU5r6hDf",
  "key38": "4GuFv1iuGqqrSgFHJa6AroSyG8GvYrRg1vkp75uHQoF1ezVckJzd2QFoRubfGiQTK5BDkHrtiwsr2adybz8FKVJK",
  "key39": "63Yw3xjzxtibTh7NKd8SwFa69nzqtB4GBACefTJwN3NikquC4WSRhjJAqi3CeDhm98FzqdtWtnfqy3Zu17ueZndL",
  "key40": "sYpUqEuuz3JKoctedN4oFqmQs2AJYHDigcAX9Xi1GxFdAWvQNaA8hHPdVaHRW4Ycp5vfZ1SQwZm2TP26ixUnB7H"
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
