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
    "4sgFVDLdARHsPYqxGmMYpFE2NFJdwB9DZVqpyDjDwL48UcbZezEPtA4WUg27itBwNN9mARiWMe9zPvmJj31qTDju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28y6K6bE8Z4s85qn4B9FTzTQ7m1yaD192JGaPUr9EZ2VQ9XZC8c3SuecFkqK6EAzpQoCVmBBMMtfzjNDmkZw2Yvs",
  "key1": "63sTweFKtinXPEjq2CeMmT9r3QMHnyNwY6g5dSG3N6GpGRN8HSSsNbH8mABegDHe6sjuESXJ9uYReWGMbPdwjdGb",
  "key2": "3BhJoyVQSs8sDwqDB5tLpE5zXfejPze8x12Lfo5NUvZhZ6Adohzj4Jy6ThJ93tnrC57yxBqAiaHSkPR7S2q1sZFY",
  "key3": "3V6QUpQHaA8rsM4f4SF59xxrZsXoUa3wjjDApyofP9fRPNb3AWodU5STu7friNiU8fJokjEdf9xJBpb6jdfx22BU",
  "key4": "ug8ZncrXw7pv68MREfxUryC1JZCaxr4hyaroKSqYDiTxatuHhHNKL3LDgsSimzmi6PtLtfMVXMozZnFawnLi2mU",
  "key5": "HqbMX3TbdxMokjUY9XvKpsoBUpgs7R1CmQ5WFsc9sayxHE951kBoHrdQnaKd2qgzV8DYgyuvFedajDLhvB4JGk7",
  "key6": "2Cmi64w6rYD6RHN7zHrWp52kGZqjH8rzSNcAQQx2qfgh3i4TnQW4CkKLPp6Q1WN46qqEjiKXERpkjxCBi2F9vBt2",
  "key7": "s8DNW6Hx2PFUziyx8aAiCNfpRWrCLXw8J3M5YM9W8zieAZSV6vDPAokSTibbUy6iVJH2gAK4MbdTHYadNLpTCb9",
  "key8": "M3t688Tr4oaxVfsw9UYsxJGZwq6TuhHBXcG7kZQyS6eGtxARvamRU7VFDJyLEXuQwmfTiGf4hTG9nCwNxUehivr",
  "key9": "3oo1gc2wkwxCnt65QZiUQoaEWeXx79PUtkBqhYRWAZ9tw4YXooJ3Tt4vqR5qKYnXtX8n65pj8sPLZ9UewDZW7Vwn",
  "key10": "2B2ZL35HGu5cQ1qVt949Lm7DBrixti8TdiQiqaHZBXmCKHmAVzBnj12QVQ68DRxPPEX11xJFNQHS5hga79SGVzaE",
  "key11": "Hx8JVEZEixqy35jF7JHCNUQwUPSL6KfuQ4T2tE92Fdo5EEqK1Pb38CQnR8zCxU8HuF6JHQx5AduGVK3X3nNu8dM",
  "key12": "HLgNbheZYr2hkQa7MMHiWiKjMPQgigqTVNfFGiZRuRa3oeeHxXWP273Zd6R563rPKuPP9Paf2bBopATZmbc712z",
  "key13": "4oV4Tvx91i8kgNNkwpThxue52S76XWBUPRMzr9BCoUVb54hrvVdUyeiK85j8ZFFTCP3KZacbsuWLAkwFxTuYAG7q",
  "key14": "2rXjXPdq4DdGE8sWQHdjmmT7ZWahAoM8zPmU5d3o75TJ9c5Vub3P7guKKzkcmiURePzwgjSKubjDTQxNM7MbPf7c",
  "key15": "fFEgWoud4BWZHhqF6ZYJx5jiJux61sAvdM2ExwzqYa12juJ5SKGRyU9sFiDobzZ1ToVypUoWYBxvWL4A6JwkTmT",
  "key16": "54n8M5doyXxxZP2f9KCUSuf9LiGSxRnSfcFsGQpaDRqmCSCgbNoZkrSoZfTbGormeWiSV863czvYtFhV8ahRjnk8",
  "key17": "99jKtWGvVNBoVozg2KYYbE5feyCF2RyfQpegUqBHgfSsoFTC9KmfayBytRTyHbdqLzR8M9qWu6Zak4eBpHVn7d5",
  "key18": "4hjmFJWw7Xj5kmSjCoV6Tr5P7mGBokKPoj1xRxev9ZdaM4Tbarw6YkyEzag7kDHy96S9TxmzaKDNfyhGwUPRzpyE",
  "key19": "4YyU6J1kQhsNdpCYCVdhLQYCB4U9d6Sed6ZJRFZ7tkBsistddGU8bEGb8EtCHA7iP6g3DyDVHX9Gm1Vi7iB65ve1",
  "key20": "2sna3QfAd55VK1UGtq4pHExgS9QS2sh2d1zAMxbAzZHsU5uAjdcPkVEpjSmL5uechiWkT3Q37YHfRe9BTZSk5sU9",
  "key21": "54p1VLdeqejU7cQj3FCwGKqFGZbsCKY1GmGnFS5xMZxge62hsoEQHEmzuL1NsEBzb8a6oHGA2mY1xGCjkMHKePZe",
  "key22": "647GncBozNGofXF5cchyFmJgXhUSqKeH9mKvQrij6YyJnF4w6kzq3iWJ1Ftv6bWJ3kfUTJ8QRuUyPPBf2FUW6rMH",
  "key23": "389EcmsJUsU2WRDTJx6pt69ExLbjCL6e7Mj2WEGVCUfcbd9FsSJNGFqmitaWBURKJfTFkr1YKMDVUa5R78qi5RSd",
  "key24": "8gLEbjXJexLpqg8fLK3oHLCnzhV55zwWFKM2cLaJkYXMnmBHjxvgEShNsjk5gUVHohpuca2QHs9rKwN1ATQ5ukV",
  "key25": "5EUZXqosyuae6ViunjtbMwWYEZ9FMmZdVVMp2yMiycueSreg3WCvD4u9U8CCKPsxJQhA7QAsvYwZ7KVZw6g4SWYH",
  "key26": "5WDUaDD67L9xZrNBedqZ9Paz16EyZSDC7uDmeSFsvjCqVZPR7Jd8MebrsuAzDzqCNUpK66vpj6HM7vknGULxQeRi",
  "key27": "2NktA4iHkWo7ZnTf6mrDdyXFM1rH6Pmu12htM9TtcBiSEyDFZBGwX2f79AkCMMb8bp2K3kyZncNSyBAfZd2fpfdL",
  "key28": "4iQcifBNuQpsoqEyB6gXSCNd5WPptR1NsyMF8PpAHUtHffE48j7oaKSZeKtw7ufYRqEPmknfsoAtXySwLHNRTb4k",
  "key29": "2uNXVLKZbGLogUFTNWU8eh7fUR2vdU4MNnnjvYKhgAKuiyJhE4ZG5MVjsMezhguyquvB2fMiuEMyBnUG8b2Xgk2E",
  "key30": "5vAmmSRb7DNHNYYw3y2jL5V9qXx1CtErm6G8KFrM2qybApY2bzhtBYdxEmTH6JAoDDnXNqAnTfmxVdPCYQn9P1B9",
  "key31": "3u154SmGQR5M4a2tDjrmLUpgdaazTx6oNwEZiKzwNphZCCM1UWr3Dt6ktzb44Tek9BuZP5T7M9vAvpXPsbNZHNHS",
  "key32": "2cjT43pbYRbQdHVFkVgyUCABgPWPqWAL2ihnr9mhufJf9fghBqaLUig2Xv4XxtLxuqxsDkiwgWG5SmdqYLqEpk2X",
  "key33": "5w9JYDUWx4VnNx7BjgCXx7hZksbmWMJsPoGkEwU1HMNu26yRg7TEsGXuiPVC98LKqyhPygbDzBkaTYt5gFZhQZJ8",
  "key34": "5gtL3GCXJgdicMBNg1ELHUSQ9zHrkyE7xyiPNXiuuigSiDAzMjBJ46emsVYJZpnAtDDkYfaf892hVXavPPenidQt",
  "key35": "2TS9gosXFVjScrT7rErFxb42K9r7WTpT2YNzGyhtGnokkpgPzTa8EYGv8jZF7caNigHQiUxdtmhccAbrGQsZKzT3",
  "key36": "5M3gNqNiiCGzy7MjEQK3B3TwN7btevtyYTV18v2sft2ugmfCY5VNi7qdAAWthD7qCoN3qWSwqcX6NuVoiqpwXnVk",
  "key37": "4eDLEFTawDsUUsG1LeV7uWcYXuLCCKREit9jwMvURRfn7vL43wcbAKJr9SrbUWNs1xGaCFtkKfzfLJRPmUg8VH2Q",
  "key38": "4R4kHrVtaJtfZbxR8V2aoJpVQhPiJBgWSfwFre931nZocvmyiF5DiFytdbjCNfbxpZmC1FbxrUJTAZqDogdABu8x",
  "key39": "2jM1PZb5ng9gkU517g9wKy5aEqmTbQSTVUSy2erqAKuKeyvgKLgkWrNVxytRmqTp1M9xVXsLvn3ajU2vurbDGVwV",
  "key40": "5kwCDPkkWstbHreBLgxTGKyshghCBU5HwBydxTT6PmWJePv672XJRhCfHvkn8yDgMNCGRBHMrJSWoufpwQRLddVr",
  "key41": "31emkuTQW8g2JyRH1jJkrk1TsF15NB6VHFb5R7qnpwNahhxL3MXJdz1a4n855Wk16u3L2hfL1Nz4UJvzSogV5K7z"
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
