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
    "49VzhEiQbEsMSgdGbJ2dtoiW8beDCHNuAZhtKCLD1hffobXGZiSifwgRmkKiGHVFtk7qCW3jRuQVCZPD1bjwCnUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzbq52v8enWEzpNLtnaghtW18Q5D7kz2jf4ATpG5ApJwv99sRcKgADNJFbosPVwq6Q7k5zF7t3t1qGvsTpFtbyi",
  "key1": "AriEiutVMBkMtxMzWHTmzmpatxtpQG7Qa4YjNgDk9SvYzJjn4uBU4SZhBeA5ptaCQhA8xsdugDaHLpwc1RLVL9V",
  "key2": "3RVnjrp3B279unmNXCitgw4yFTeLonjc2NnGGNuL8WipFkbp81zvbepbHTXQpUbU191QFiXoisCuroP2iCUPrswj",
  "key3": "f5DPNWTwbFkfwgYNBm9DuZBZ66U1sA4JanL1t7aqq2h1uFo8aMi82KVkPTiAHtnx3m2Jp8LC64m2WQtqpXbz66J",
  "key4": "3W9BRkFHZntt3hDwZVusFGxwUCdXB8vgEwskdjNX2iPoPGjgysAmVRrRU1TnuWvMGxiq9UyZnnDV9s3chZqcdGCs",
  "key5": "iNHQokBKB4NBmYYy7P5HBQ467nmEdxj6vmBVbiWp9xVssWgh7oZGjPGAm7gMMxyNuWTBgHrS6UeYUzPV1jjNfGt",
  "key6": "4v6YNkXrAbZDcTddd2dE5YvXxjP3RszJ6Ur4hcgzdX2WvPHY7TPHreBDP6XDvhkkuYDr2E4YDLJYf6De5h9Aqz59",
  "key7": "4LAn2P7SECWdsebeh2fPLQnzFfNpGDaBVZEVXEpxa774VP9EsFweSzQ4aNgo5M7BwRP9ENUya2hvCc6TMEsGRRmU",
  "key8": "5yHcaHVdi5MdxcYzStiQZ2Ew4PFMN3AhBZpdviGway1urJz4EqMHrBBTUzkKHfeon5iyL4jDy4yqFfMoUJE9hhCx",
  "key9": "3zxYmbo2UNFwotRxDS3dN15W4Xz986bYjUiKxFXYj6hUJcmzYwPfdbZwUMo9MUZXzYpyuB2nBBqq6d6jmseQ2e5W",
  "key10": "3CEZc2TR2MSpvdoG865PcnDDvsGAkffXcuzg6AxdvTago1eqix9rqrZ4GbZ6STm1FYhuKzDdf9eug5pJo9hMinB3",
  "key11": "2yA2kureYREBHDT2renABt4NuDr7EUvTgPdLS9ypBckyycia2Es7CUDFTNVh1tp7SrVU3njMZEKrNCdcKEM8ouAQ",
  "key12": "EmN2NV1sPZMxRc5VegoMTH27TTHUcFcHh4bkbST55mYYyqFa5whohN1TZvH7bUF1JmSK3F7uQXzTrqF5xjGqhwa",
  "key13": "d3zMp9xADY51AyJhc7hSjaMDAy8XEa8iRSoQVJs1H4AfQ3mugokN9dD4d23dpxxKPDmwcoVn9S99ffZ38Me3BDb",
  "key14": "49KzFkAigBteJij1pX8d2YTjBtEyKLKPgRhydwQEXNcX6Cd6M6ck1YSF3oYjb7QjE4yTZ27U23Ka1TmjNPoLdofo",
  "key15": "3KKLUXknhgAuXqb4984AThonPY8kTv7DfGcCdz5rGvtfKMPdJYbkLi4DNqguB81WQ7KKpMrurZFNi2x4sVU8pKmH",
  "key16": "cUoaLuqVoBPVfxwNRqRBs8wAHvABcyHf1mchzfUEQHuSXE668FsncXCh1mP1jSyFDrmuhJPteUuWcHXabr6SCdJ",
  "key17": "pagD3MMox4wHxN7jqPWrHTnmgAhqcKDEbRyhTBdbn2AhBBq16sVSgA55yds99WKPK4ijqXEcivZbdM7QuMn84sq",
  "key18": "5edziGwXSaQNFL5de5BHwLR2UGZhvMng6mDt2epvoAdz3x1dcro2hcB8WjxWxaoN33xcjyushrrBDL3YurQwtTBZ",
  "key19": "9pN6MefjMENSMMnJLBqfP4uVX356XUhNRpNRoXuz4ZvSKwYiUQYaxWVAoix7i61tyX2emBvD3fDKuG9R5Ly1h3s",
  "key20": "3NMmETaazHp7EazVEDEef8WJR6B7gZDmj9j1bZnNwvro6gYoUNuPTAjGyoeRTrB5gXHMjXooLjFTXwwtfcG3M13M",
  "key21": "2tcdJnjfVe7gEK8W4VSamyA6fdfViFxskwezLXkSXC5fEPGPsdkcFHTBU3zYJkhpKWbjmXTdRJkzK53vAKbr52Qq",
  "key22": "2smrZtMRSSCcsgvRr97ZiXHpLbuF2wtgXyEYCq57kfqh3hy3ZmA3Dkt56Ek4iLWPLikpAgKr8nxQu8QbZCBz4WEN",
  "key23": "3zzWx9pvtjTM4zShiG211WWHLwmgsUSLfN2q5xzh7kdgfRr5PzDZWFLqi2ZWusxXiJyT7y31rjs1i8srJGirB52g",
  "key24": "4BBdJAg1A4tGNP1fNqshFFDVj2rJ4AUN5XW1bwPSGKEoeX9hNS6XR6j3fA8jQxR88DVrBBYsRXwY8x43xFBwcVP9",
  "key25": "ynxCQbKpTCuYn39PPke1QsBUGLaRTjrhEoSPWvj3ZhJdc5qmE49YnuDVLuFLnzzkjfqPD1pfBRkf9v6NfmrQ1aJ",
  "key26": "3uX7t9MdYNWrLU4eQPPS4nh2QVG3dAfyYR72kBrLw5PCoGzYBmXVUMngPVpbsRjcDwxo6EKJ78dBtXJN1pG9vnmW",
  "key27": "4pVpwRCKH58gCtfrRjxuF247qmerKX4RTE61KJnRWm4Rngq8xcZTTcuDnawrLjGxzDqRqTXqAcGuvRsGVn54WSad",
  "key28": "2KHSLoKVW9FdugwtQiJZ2uhEHUra3ZESre5yZAdivskYKhWcRoC2fjKCi6rqRSevzykQH31awWX1Qj89vAbwYuRT",
  "key29": "wrRNQAeZSUYPMtUtiDeSupt8b5EUY8wtNTdHMjjDX8m2igqQAiyEdckgME4DNdqPcdhsHX5ZXkbjaPX2AhJfzZR",
  "key30": "4NEpH9dcyVQRANnAWLaoryzsngesHHVLLKinxifjMrwogbeZxXyLpRYMVYdjyW8Q3VDeAAgCr4euW75e1DouiXNw",
  "key31": "DGfUg4yvrtMP9XQTXwXA4cs768D6QMhMGJQNx7RGZpA9Xfh2BAiE6qZMTV2Q6dxBeDBWVEL97WRmgcargRQofTW",
  "key32": "2BKfq7vmhGx9PJspfbtPbqKyxhmzpgr14DUJ4SCQkFFjn7pFobV97txXLxxuekLDkAddaJniN35CXuo95HXWKGoj",
  "key33": "45YtfJww93v1BYBS9b88y2e9RFLABSdfUEgT9AtSUx6HydsekbxDNUAABZPu9at6rMzHfdrgqWNXDNca5eHhSWTG"
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
