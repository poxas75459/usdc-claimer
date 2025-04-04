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
    "464Jr4WYc6hrSkE9G7CjtDcZihaecwB8gwwwVhtXeqidWodnBSBUKM7btYbcrHWZvn68iXHuFpKGBqTDb6LMfvc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6TM2ZBDbv48Rzw3XkqV1zCT7D1fDZZYAkZ4o3yQKH67Wfc5aYFA7FAbn63jVLjwdSBv1KCnCHVimDJD1DQ5YTF",
  "key1": "2pKM5ZHkEMXczXjxCi2WBuAk3hyWgKpRQxVPPs34rocpVwzhWPBjEAh8Kv21eJwR5ZiMgzypeURaYvuTFCDhKdf3",
  "key2": "5Toc6wSjVBPdcF1bWeEKxg4cyFRXQpuCAhYmhUyJSvf7wcFcqnYUA4PNpeocHr7ZQoKpxKZZw2FMt5QdeTGt4Hxt",
  "key3": "f3MSEdEiF6HYL13bc9hQaHb74JZ45noDWSiLRbVWTWh6euaAP4yM9mM3PGvWn3wm14ZfEFcq8TUouXCCYhvnyH8",
  "key4": "5RM2ss5Xa4jwReRXjHdyK9xKX3fJADB6d1sKypwkME6VPnGdJYjx5mmomw16rVHnQU3gpmogU2HYJaebEBqNdbZf",
  "key5": "N2qCy7hFfsAYUcZsvq7ZBa8gwGcrpnH3jr5o1ku8ZTvm24W5Xrssjj415igjSJLd5NHVbs57LaRKQ3WRBDP6YdD",
  "key6": "FYPvqsyox1UTvUFvnjqJTxGUWyUSfwBsWQfEiC4j6fxrmzbn8Kpgzc2dtFb1QmMHVrHGCAXDeHtWZTB747FovTs",
  "key7": "5EUh8tSLZ9rh51PLF5oVq3djJJBws7rYAqmgUdMDDvrff1XGUnuTHwoJkUivR5Z2ycGmAQJNGYypYtRERkLcGFXB",
  "key8": "4ZxJgWCPiQTKqwLfCWA85T9TyuCPgPRvr5JqEcEaR96NShw3jKSAm5cyaz7vnrYYYnVw2rektDr9ckPQH6aPoPx6",
  "key9": "4zA83s1PHXBtSqs2wBJyW88bBntKNt1o57gDj5oKWH4FcbBbH2h9VewGxVXobVFtWTmvspwz5YjFPD1SosFvzgCX",
  "key10": "ye6y6CNQQrQkdg4twfJ39MUrhKjMtCem3jKLHNXvjopS81oPritQCV1NxT17pDBEjyDW9qVNad7cFSVm17hgAC7",
  "key11": "5BQskifhU9VtjpBGYgsg9UoR7fQgsYqYjG3xBAQzdktpf9sU4aHukcNyL9bAH9QaqoVpSMgLUfReLoMRvgf9kN9r",
  "key12": "23pJLPfTDU5GBWvFq71hmLEpmHyknEasA5xZfdMs2nkLyzbJ9RdoYZWZrpFjmqedKi4AvvS7wv4xgFeVS443vseW",
  "key13": "5YDZMc4juwDSU7mompN8TYX2PdYjp48a4ZTPEHTnjpBUqWjJXRxCLXjVDtCNiko7tRLZLtJDo1Ho24LMArohhaW",
  "key14": "4bdG4UNHutCqnP4DwYb3FZfKi3EgPa1rvvPmi5AK5weTUbJXe8bDs7fdWthy5HXoyzLVRcg3qiywn2Yi5X6uRrGa",
  "key15": "2uTMtw25APN6Fvz7uBaQnMHKFKCA7LB4ddwAVDE9zmP99MBwcDvhehKmmm7EjCMaZ2qn9YYoMec9vnzAKRRXonqY",
  "key16": "3EWbWVCTb7Ude1jJw3ZDKBBnyyBB9M9nLVB9DEYTFqjU55G3iZ4cxNFKeC2Xx5ty8LwMjjKDEz2Lzd5z68JuFWiA",
  "key17": "3B5zkm4ymkEmVmo8CDf9LbUnJ6W6u5fyNkiTVv7H1mpr8UmXkCxysePCKYWuhEfR9imErZ6snkp8XmBTuCAwoNny",
  "key18": "ybocymPc5RfwbwKGrFL5r1jARnxWcqNp3NVaBB2TwFgiAu6Q8VHa4q1rnwChiD6xnhqDabgy1i5SxiQpP5U6GA4",
  "key19": "2242yeCjkpPFKCqWCtSFgndBugrWrU8WUSvvRTTfXqgnJYoHpBZPoiPVdMbCHi1DNJF16kGvzZajKKC36KPEh67W",
  "key20": "kFcdTTQQDLLWaXFhNWvMJUb8wdoWLQhuy7U8dzmSjy7Ci5oPBQ4t2FCqdzp4uYZxDbTou3dPMi6h79mWD62Jzib",
  "key21": "82ojqiCvS4A2Kcbg9wyPvXPrYH1pSv1n9FhtDbrEGLJT5k7LE3f6mTqdhsMq7cwcVjBjMDLY29zYaGLfiyJ3JAw",
  "key22": "ZTKhm7DaF85H2dggxd1bdhd3UcNos7cctn9UZcRckzhGaK6F4dkHCvT3KNHKCBaFLxMAegoUoVi7iRMdtSyxPUw",
  "key23": "3d51PArzC7G5NYrKiPYGBGkWnuL4zgRpMBXJn8mudVHm8Kgpe7TLqCoL3UDeGfkrUEsC3CXbz1dRfi1JaD4Z5du6",
  "key24": "odXRUVtK7ns3DLZDhsXGazHG11cxngfkJXYeL3sGxXiuBRNZympaDw3M5LCjeZt2L6m1STF88V7fnH2hFFmhnsr",
  "key25": "46FhkPTwd1vxr5D3NZ9bvbGJM9peFncnEmb22yw9CTvCYbeosxrRyEeXktqSz8KmBLi9G3wvqHSaw8aCtmqu6efF",
  "key26": "3pKDi1Z7FfDZDAYfnGMypGRPZkPet6vnddKUrH3EXToxpGFAGZ2XDtgriRHryJ5Aoskodwmwu5NCkiiFLrpTSmSV",
  "key27": "zMM7QpdwrKUHK8N4UwX6ioVShi1AiijXwn8NupS3Up4U5SQAsp4EsAuD16h54gJRfmHSN4ZbirU6VCqbdbKEYnd",
  "key28": "4kPdx6EeYeSdtiH6uW8Sdg5Yta5Q9X1SmwG8DkG9HrBqWe8xVe7FYTBKZKMHJxVaG5FtMujwUNMFFYBhhfKr1TQ7",
  "key29": "51TcYYRcA8ctCDx43nhCzjEhx6mm6mqFTspwFfYy8h5JbrYrMNUxDHxPcw9Misw44RnYzj3EgYpUeu8EfyiKFsz1",
  "key30": "dUYABtR9HAMTWAt444CTTSNbhxXGe74wb7qMgGZxSeEA8Cxurks9Z9MAYNDkHN5NUkq84BKzwGaQiP8Yhx5sRP6",
  "key31": "byCtZWy22MZmWYFzdQTemXYiKE4egARNCZVjAN6wW98pPJb95HPvdJJ5VBgFRmNWfQdMLCix3y31fiuq47Mn7eZ",
  "key32": "55LMmfq8cbYbbeEefuLDerB9hwSNBJZpgBBmCirkjPDZAL3a2xixiC4taobzcudxntz8CANML6JDmMsonXctddCa",
  "key33": "P8c5XBKob7nzpiz3XZWFzHsSwu9HsKWJKsNmwgHuKtDZsW2fy6kmXJmwy6Ke817Ua6E3xexHiSatmUgSawhLxHg",
  "key34": "3QigU4CXPTa5Dpji43sV9U9kKsA8cx3LGULXoraYjU4EZg5xakEjgZv5cR3Jsk5EFpHed6ontomT9VkXGLNhn9KM",
  "key35": "3GUAeezXXgsQ9LENQQU1VLGQ5dxzN84NciuL3eRNQfS9cXPUPbH2LKDqDELmhAGbWzovTEZnyaHQmxGAWtRj1nHF"
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
