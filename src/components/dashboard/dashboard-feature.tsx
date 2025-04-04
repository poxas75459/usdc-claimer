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
    "5NxSm6DFW8i7vJ9KNT9E8KqfbPfo9Wa7rFj15KLHSvLC7kZddhaRYZs7W6L3enWSvgYm8ai54gNi7xDvUWANH4Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFV3UWXDP9K89CGfw3Mbc5tWFwhuBZc4WciTW2Pctp8G8Se343yJHJAL4p6A7coQcujpcDWiuq8N4UgqVXpwsx9",
  "key1": "3xv7kHXxnCSyGDFSUdbxvw6bS56Y9SyxWBtPha3VCit2HPc62cbJLNaUZn8wMfoao9F4hq6a9pWgErRBaQKhcw9x",
  "key2": "38NmKTgymn5KiTCvCP2ai8kytK8gVmXaAexavkqVVMNrSd34AHMcXCwLDeijmd1aYF4UBwn8q6uEVsWZSCcAougD",
  "key3": "YpLpZD4TT1ZZYANDnTwPuSwUEY7MGeC25Pbt9aQ9NrYgaHkU11tsPgUqPGHSjeVpPmGrUi7wetXxq8eXkvpQ9yv",
  "key4": "2rL856VfuRYdcaMqueBSRyKZvCJb4YmL1a3LJ14z2vepJUGNdMMAyguTXQav7efncUWHDH71FcWmxqPZzoYSxDuP",
  "key5": "4c6bo4jMZdQcSbg1KttYY36eoL8oHm6dYEHQQWGsioTCFEr4YnHbF46WDq91CFJrnHAdgqmbJ2J6cAwhHa75X3uG",
  "key6": "37MLmbSn6f3fcCFVWNEZCWegczRPFRSkLWPVbYYKy9HFPnZL5cvRAz5fvSGyT6iUAkGzg8kzpnmZ18rLb7Afn6M",
  "key7": "5bu4ncxmCNnadafVJ3f21hRs85AcjfRX5ZjSBsjx1wTfLN2zJ6Nnuq8N4MQkfHNX4U4kjwo5ugugBFZRU9PNcWxi",
  "key8": "5K4ZqkZyiFak5o9uhZApt25UoMuB3FZbzHs2eKYpjsybb51is9DzPybtFjYVG7agzi354NXxoBMC9rvwJw4QuyHx",
  "key9": "2duY4hcEQ4ttdHa5jEvWz2NEcvCQ28JG5Coonyw4L1EGbvKYAqSRWR6A5sy4c6qs64LjQaNearivZfzbsSUYVorJ",
  "key10": "55KFhYhdMaNivhXTmTLfYZa8x3mK8XhGhLfwBugfryzuquSQ9be22PSashDsfJPV8E41JzFi6TFwoHYySjk3UN4b",
  "key11": "5V3bKWKNNGEtK8mEgeRWaZ8NW7fVZUDFQJ6wmsuQqUCVunUW8yLcXwVZfwEWYiVwgbiK6SgySfC5URZwWsiLUvsh",
  "key12": "3sd59MjzqhywhNRrVZ8Eify5c43MS6sJH8R2dgeLng4aDGFxAs6fi8MRDJeVuT6euDoHHeRyrTtUNDksMh8b2FqW",
  "key13": "4RV4FrXzijwaFZLpEi6Q1p1MLv69frq7tEnXbeY11z4cX9kWuCjEdqUMFzHKu82JPFeK5deXUAs7563JqbDfbkif",
  "key14": "2kRZtpBcqc8vQqX5RzEBzrVcaySJm3pek7dfPmDDEszmgLwWqc2AjVJAEHKPJHsbMa6daPWppLBuQCxbUujFWcrm",
  "key15": "46NwuA79qGRkwyERi4iAxqdfSaCUY42Hu65v8Be4HvrDgQmoHt2d8W8YEEbqQWR8ShtknLLyX3kaWsGE4qcvfo3U",
  "key16": "5fYsZkmdqw628BUNjzThm2CosMgznk4aqD6XpHVDYHdvdmwW8JRKvBg5UAnxzAXXYG7mSRPGurY8XDAhSxwwSae7",
  "key17": "uPYTdNHpg3J2mx1Pk86BWwD4SgCKLFdTMhRYpk2x4Pp7Mzp8cBu6CgAZ9GGTwfFQUDXsFZD72p7VzYbFNqx23KU",
  "key18": "eChns8mRPLzCUoRsqXffai4pKzokfGME48CFrDQ5wif4diRFUW2TDNWYNbr8oLKdDxw8WZ3Eb2bcynjs1ifh7Mc",
  "key19": "4YanbtrYZtdBeUsVp9tLdgauwLSMTD5ukFRzxrJpHH3boA4XGf83LYySk4KYHC8ccB3hJ49e3k56tdqcGLfUx4qk",
  "key20": "22ug6ot3m8oCzm9LPNtFFo4xT8ocY3WweFmoEeQiznW7KCPgEnP4tbovhahWZj2XShX198YtSgph8ATTRkB9E4Dv",
  "key21": "P8LWHUf42tENXGoJMWDPGCrybXjumvvxAC7GgPgT9xuL5KyEnV7UFVSpvGL8ZmPfi2xoiGgyifKXAAi4VuuRT9m",
  "key22": "2QJSBQvHFZ9R84KLAd8EzhLBdKhnzS6HnDdWX6nWzLEFu2Wwa6Sct3Ba5vzpCDo9fF6nXdng9wCAbdT4tB786nwe",
  "key23": "5hMgvCDuwoaL4FTnXfCcPEhG1ToYzthAu9YwBLPDA3FdwnV7szFB34LrWEpEGpHFZ6HQFuNULES7FGKSFp1oJreR",
  "key24": "5U4ox1722eJnpXgWKTBmzdTtYJTDjyVpupfwNwHmXxBjy4umWrpdY17npU2rKJveAWr6D8YfJrJTf4g3JfdMYmaM",
  "key25": "5LkMednE1yXJUfEV52zbzq79t336yRWk6i7vAQV1wdPqGEjvuCACZ1CLEJCXeMoKFVY1ZdbqiTm4hwCcbFbJ5gcc",
  "key26": "2X1u8CKawvHKgyxLvsEtqVJVatmfQucfvGfa3UDHGoz8WZTAzBE8yJCeoAoRmDaCNQ2Sxw5z9uTJvK9UvNPGrKTA",
  "key27": "47SJwAsibaxJpQ21QBk7PzdurnhsZqYdgf4Jir26uy2ehw1pwEv8bvMwmM754NLoQJ3FP2hG3mTvEhKs7rV4d9mH",
  "key28": "4Uf2QAUXKTkDeEaXgu5ifZuACEXSHrnqxpLufFESA2K8HJVk4GDow11vsV7o2y5EbE9ZT6ochWrsXf8MJrd91ajw",
  "key29": "4rczCqyxnrtLCy959jGBW1EZeLLKm7JDKxn6r3y1z6jhKo4MDgtAokiAfPVV7AweViwAdW3KwbyKsyEC3x9bgKFa",
  "key30": "4AJDcJ5U2Nuvgrs5yvgWeA6hSkw1dGRGQv42Uf7ZbM5Bm2c4kM4YVjyDBMAEi8yWwxPnCfB7R8NWdfZuKXMS6dJZ",
  "key31": "57R1mhRR6gonrhW2vMsUyZgFcJJJgBPZ1oF6iSXPFobEZaMmf4jf3EEfFLRBVFHr3eS6XWRr2sxDpqrP9QAzte1a",
  "key32": "3i7W67Bjf9SpAveGCJAmd6kK7d8y5GvyAwwuNZpntK1CMJdcmpAX7VyB9iXALi2QEADMxipMpSh6Qani9tSVbk4r",
  "key33": "gUPDN3GHkvbRdSJSsPZxiby9r71NpVvpzr8NUP8JUkTUfT5u4x7BccM8gi6cg26ZVVmhXrQUTy7ogPJHYq1ii3v",
  "key34": "WbHhgMNRoMPdUA1KExuRzYc5w9jhzjNTuTcaBbuFG6ppBMuVaZUmiZiycqmM1BDBF8c8ZVH1yX5AnXQsEexoJ43",
  "key35": "4SrE1xHLtaZG1sE4NuARHxbVcjDmVa5bu63ZRvGPwx7GPFR9TXWmSjx9qydKfED64t7451BHG8GT6vmhWsskVKZ",
  "key36": "XW4im5HXX6xBk8eXnVCn79AqP3ptxLKdvyuWYbCLbMJdMr7S45UuYEiMtdrj2R45WHjaJxEASDYFMaywxYbtH68",
  "key37": "3GCkmhWffwjr7zTJvuwvKdaHNUSAWHSj9BrteYkNFKuczi1b3x7vwEMWYkWZCcfHWhN1WSBCJ1U1yX4WL2Wfdgj4",
  "key38": "5sR21oW2J43uqCTnkqG1FdGvzGF1GiHRmj7omBxZAg6DwW7tFWtvwcVPo8GhNFEJA6JP9dti5aRMc4vwsQaLoXC8",
  "key39": "4AvsHJMk7dc7mYcwUv556syFdYepnETtnQp2BNdRR1xsZVYQHJuPsAp9uKU7JLDFTziqtVuJd8rzLK9rh4gcuWB2"
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
