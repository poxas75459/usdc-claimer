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
    "2ZpDKKvdYxfhAUgmPuogUfkm2QiiDnnm1qWugZYdUaGMQYMwwtuT4PvJwif21msyNidd4gXGsNbyzVW5qZUjopof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1PNAwMPLzka3vzwAtknqmhvqz881C1sYJ44M6VaABWpA3r5b8NYQbUragfpCoU7ZWyiedrq7Cp7QTcFXCGUFPz",
  "key1": "2ZcasaGsGcJDwz2UYMWkYhVDZcUvDFRy3LSiE3yoJki1XBf49T4FQsyNpciebuY7H72yh6PBdDAjnLFTdZooRviC",
  "key2": "5bQoBdjf7N8k2mFN6YX6qye7SFYYrUZpha5S9WEgFmBK1dcAmhhgsV59FxFNb3ehGzKFRbCgtMako2CqedTNBtJC",
  "key3": "5AjzJKSf5GbnZCYUgoqUyYK5zrh6RecoKAMpyQLZTBmT6a6geDAVw7nMHfxaxHJdpoefQdeVKvB95nmUDqiaYiDz",
  "key4": "3Zm8VV2YsJfEeuWoTESpSB7T1w38otNDm47CRrTVxhuwjNEwkDcHA8g9pRMZugSJWTtZjWW7Uv6UFgC3AMoMWtEZ",
  "key5": "4y6DykexDxMM4JSjJv24KCzb7v2vDUyEcjp4ubFGEbNcG48ZaMnFyiYEJri6yhvfDNo3ob7YSf86HRBNy8e2GsWY",
  "key6": "31wEM9mbwkDz2ZFw9ow9npoEqNJap1FE5YQQHxFfodUkzHtYWi49R757jZEzPrsdYCr2PP9WiZQnDk1AFpyAN7SY",
  "key7": "3vTWj461G5hLWQDbWbYjyJvusD7LzcxZndd2wfS1tXiXxTJf3XJhc26vuhPFoB53L2PtZK6cZEhzLVSoMmeSBj1v",
  "key8": "UQzY4xXzLVzmChKeeNYHSLpLpdMQH5FCanJPchbobNbd4weRcTNbbEubGUb6tNAp548g2VPm2nE8LMsNxDJ1ojT",
  "key9": "zj7C13vkWddyCLtP6csC3KAt3AtBhC3ETtG5Q3VrRYzxtPxGfem62xGHq9efCuf6M9XFbE6BoneyU7UWP4Q5krD",
  "key10": "5vHuFdjGQVNmxJ4FJh9HNmxmXGTopigxxNKouYKPAthz3gEf3hyFpqfRCDbWGUxLH8pFyx3ynwYD9gn9Fo4kSzSh",
  "key11": "HUojLPjkfx6ZqVJ4sKvm6FRfmuY26sKjp6EJs56bTGVtegVwbeW1B8aoyCpNrepC9uRYpXgQWU1TcQVNHVwh46X",
  "key12": "fg1MzWdkLqUMDWyPNovnoK1xMHWRheDV2Ni5uJXnLEvcPUhNCmvnqve85FYcdGPAA3VEPMJnb5HHqWQ94Ju81zR",
  "key13": "5V4jeULyb9M9eof7UNcPhwWah6k79VKyMWzCsPDuRYgxZNLiQdTJof5mbG8NzAFLqmNWpu6a8PUeDFowwypJhSD5",
  "key14": "SKRHdBSYH3jYu8GKNR38Y5ENdhnHMRFbLfu3Q8D5mdjSRj2SWAXn4i9MewhPcLT7WmoqccCkdvFuDkALcJL9NWy",
  "key15": "5ENfbXfHCqthyY46G87UkyodZAQha6T7ZvjHeamtudDkfdzBZnqcFmFgMauoZyDtiM2DUt1UP5DM5Mxw6fbbzR7U",
  "key16": "3MHrS1msKT6iQcL8pFWF8ryD1eiHKK9FpuaJcf32dHjUWb5nUEFDJpkivdQUwCq4QbUonXYBXbSQXdYA7CvSJaxR",
  "key17": "5zk3JBAp2YePDuMBypM7WuCtwXQoDvn5A9ZW6kYWzdLoLfB2wc2wh1tnZawCAwwdGXKFKV7WR9dzmFfL9rz8vgd2",
  "key18": "oNKPiU6HQ2nXkgJfQkNpzNtYA9xJvuxRoPtqpJxWvyWMdm7pemSjwgC6tr1NaGhqrLdc6GEHVUU2SE2HFW4YJ59",
  "key19": "3TbK6bL2R48K2rgBHs9GuVA1QgN6riydKeksSDvdFWQiPZVbkBmSqM3PirNYUzKgU1GTAwF3WntAmYndV6dJxU5D",
  "key20": "3vrKEVz3YXHyWnyYDt6CP5WfR34KiTpYsYiwwiBFmz7jtDpPhzBzBAaHPuNC5rQ6PhPRsvv2sS6YHvuNXZZPgtjw",
  "key21": "P5gXXaQhoJy5cKr5WVaEMjvDeBb8isXKb5BjUYTSScM6SnXqm8BFmK16TNKC1LjgsuRYK4WYdxtXoEYT6ycfBmA",
  "key22": "DZGKjD4WPoXHf61Zajkn1uw1R7J2bQFuHNVxhTmhmS1CikzNszgCbK3nxPghT5vi65MLxqm5HRKt3GiEEXp6CRR",
  "key23": "mjkMxvBFUhEzPXM7s3rvURgaRAeAfh2LJihGfkve44QVTXSAiq8TML7ZtrRKHQR6TAdtinzEGyFUkPA57tznTAT",
  "key24": "27K8tHtoscdN2pFEaZj3WjMzWtqXWdpHQB7e3agGiGx2CZvZNo1Nq3xBPEpmQE2D6h74WAXRXFhtgpxLgaonpJhs",
  "key25": "AD8kzPzcHsKhT28Bc4j4mAVAFBKV7UsXpamYY8donuuthH1YZXCDJMx3ja8uhu4PCEB3szghsZNmFhs8srZ5XT4",
  "key26": "5QdkLe1GuwPSHHUjvJutWkZNo6mw82Fgrp4SPomUSKDPkqLE3og3dYxomTFocGfivQUDJZL8FogLZWjxkLpanuHn",
  "key27": "3LyVVngnAURsZVHjhHeQVUES2VGDaCqyZWrmvfFDiZfpuMLnH9Ye531wT7TUnhjxSbEXiNbHPwEebg567g7anUxC",
  "key28": "2VPwW4Y6xsVRMCPDvvLtEUUi9DybdMqJXXGfWevaNA87Hjs3CCdQYv21ybVkUYSjytzowd8pMTS8A5CtQrs4MK5K",
  "key29": "4vkHtnqGHdGUy2UUM3fSjqnSAUGudiWUTDRQWzL7k4XoEMhW2WB6VsJNHx777w6NAusw2ZTdUHm67bhYBSvnDmW1",
  "key30": "4uqbvNz213SZT59hEJDTrBfHgQVtfspTNH2JX5XTdyZw9rqj91ieMyKViXR8y2rwrfKLVPXstUKEHgBux7bmXj1p",
  "key31": "5DbnRCnXxK7Etyv6cpfhnEB2LY5BnEkmgfyeR1PEGfoVVogSokarnfGL51n38EWySYmukH8acvNoyWdNHLi6ndBo",
  "key32": "5VczUBseGkzesf8YoQ9fKxFkVuq17S2K2vSWmK8c8K5FfT5qiZZKC3fbSG8qvcxCAaSqpG9pm1eF2pDa5tDrYg8U",
  "key33": "4pKELhcVokgX8LdjmwYQ8GdWVoESsf34xpNoQ515xBfSfDCEKFPwhKhwUPK9fkdf1NbJP3822RhyfH9MSH9E1BCn",
  "key34": "2YfM7eDsK2shGBXYA3yBnAfcA8KUUUgEy9P35d8qqvPJSXA7WACVAcnr6dxi5Nje7sjEeqFhrb2h2KmaiJpcGbvv",
  "key35": "2y8kFY63YrLHfCpGvq664AF7m4hQ7QBexfDe4msHB6ChQfQqrAVLCHX6E6E73jmnz34PS66HE7WYUZcbi5q3qEAT",
  "key36": "4UrXysbNUU9cp9URbvUwdeNFaV1DL6xD4qE7S7CWvmSk13tA7gdhVHjZRr3y9FM7WAMbTq1Rx9wAG2xBgNRc2TRk",
  "key37": "5k7E7NANj1qYwwU9oeeTzYkDCJSSCqLCXAcfGopxD9Z3nrWXzA9GYV2cXFjqhy7nibHNdN6q4jYfEQrXEBvBZ3LX",
  "key38": "5B3G8oi4kwU7G3Z8DcWdk1W5hg7LmvKUxhu4Z8KT2xEVpqcsx2azPziUmA87nNTp2zKnb4XkqhEKGoWJHyPHGwhE",
  "key39": "ZehuFFmbATqHGf4zbvVrJ2f7Qg3tmWfE1kBeHeiFg4mfFbVhmt2rSAVbFDFY2gwv9GFwiaEJb6R9wywSohu4KHT",
  "key40": "3DMSgw4k1VkBzAXpWKzoTQxgxjN96T37t8AFphtLmHdeShshNsYBjFCaYFCoYtVHX1dzsvRPJV7ATz8JW4t9Y3Vt",
  "key41": "2QbTmmQ7hHo8juj4uscfuspXGFNfNnBDjUve5qz35fCE9avnMdHrJGnqMGCy53zM9SvuyFQjTzW84BjWLNZ4n4Pj",
  "key42": "35FwiwsRo9GBKDz7HqVtvPbVXyvMQEgbdkR5ok4GnzhhnjKVH8k72S3CSRKfzRGpHihsTwGQZwYWd5En2SL6dqgY",
  "key43": "Tx2ZpL1ZmhqPUjhfeci1xFxjW34BJV3Xek4h5zozFxGU5iNPo2Cxx97y7VG7oSiRebFZMXbytJusjvrEB8uznB9",
  "key44": "2EQXTUs91Sp4J8WAHkFf7qyfigEesVUrdVauoBfAW4Rg6pcoRYnhd1BJLa3zP4KjQQXy4c7KrwiWE7ThyLEXgCZ",
  "key45": "TenoVdMwgxFh44wxWxF4213Piv2WynGh3dxnufxBM4y3J1SZw9DFM3CJW32EgQwt38KQAxQEdZkNdBeUNobviez",
  "key46": "4F2UQjiHLZ78sViRmbjjdUQj3T9vUQhsXEheEzfq9RJeSn82VyAF4AB4nFnFWcxcVWZ3TQEnoSkVpdE9gMvT6tdX"
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
