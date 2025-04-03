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
    "56k1iSP6frQkYzmpmGRFox1CrjWxAg5ckR5gtRzPPrqLSpVgtNTV7boC5492EJstgZVv9UJTZTcpawKFAFTwiqA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXJyT11G4ZJ4XoRWSqmLEwx15GJfrda25Gn4u6dPRiYEcn67yGPvbYdotAsNnsVwgBLicxRWWjtxPY8XqovYuax",
  "key1": "2Bi8eMT7AhBeQ7ADR15h8QudDZnQpvAyD3tqcZ18Srbf5R2i53Yq1PfcCBAbUGwoDrrtc9n3SF5jaA81Zj66ttRg",
  "key2": "2T13iAi9A1UoKYGkL9B6s9jDYQBb2TXRTXBfcCL7MDQKpjW2gcu5qrmgVoMQaU4AM3H68E8VPuHCNaFJFJBm8JmK",
  "key3": "4wS2ZWMYPenH829DvrzYNN6ixSeRwPhnsVoQjMX93JfNqEhoRJYpMBhnzHUuiiDZC8MgN3NNBuYzLNsQNnXHPtbc",
  "key4": "5UxxsT3PB5nzXA9gkaAqnccLN2LJmpUhsrTumUEoFNv61URrXSTjshFYumnu42JegbFVPgjfKaHTNdENdGSGKrya",
  "key5": "2knp7pbe8N1zmrdaZMCBohT11cZt4cygcZEAwLREW2d4pbM5bws2YuPv2XbapZARDEt7wBXNfqEnyxuMvBJa6EQ",
  "key6": "1YPVqsgjJ5PkQRByvmtxicVcwQi76MqCZRNpxCsMJpS7Bj6XwBrqB3TRyBAEtC4pHcKf2mzRh5zfARsGJ4yUE86",
  "key7": "4RxTX6sHxhXWYadhu8qtFNhvUEnwhZhzAvEua1DZCyC99JK3agHV4BFssTT6CqBcWCPJb2sYNFEeW1LHSvKv5r7Y",
  "key8": "3PGMrS8H57md2puodPb7rmWGQVxL6S3Jf872Ap3MnjL5JQ1sSME7bX6v5Leq3fDRFoFYkKHXZFCeGh2XrUcmfMTn",
  "key9": "392E433akXvC7aKw1MQx2314x8h2kvdHJJer7311FzduUHLkM6T1SE5knz9ujCe21W12FzbmH3CNkiwPzHWRPhQp",
  "key10": "4giGg7MhgDWyEEL2UgdZyS7rvreZF3XHD698ELDLEWNUdKCBSQKe2XpN6ufdxJV6RHCW4AFyxPCL6AehB2Dj76Pm",
  "key11": "pbH7cMAdhnZaFDXiVTWmD3tj35GZ4FZavUDW6traa4EJyEwrH6Q6e4sNkAp1qU4XK3xifWfnxQf6DfeMn8692XJ",
  "key12": "MPTr3icdzY6zD2hYD7VXki5kzBojZx2WVnGiLuoHDBAG2LVcBpa7VwGWwU4nXogokMuofhReAG3DbhsSqAUxL8C",
  "key13": "24QS6YwBK4f5AJh7Y3DyrnuETtrnECApay3v36UbM8yjDkFStktBpaQBcQA3dDqUGPD21njKTwqWWLZ3R9CgFFT9",
  "key14": "3E8mzRKBSnGAxdNwMHLJgVwwGZKHmbSzkjRkQJXifFypDvExTgTVmGUHk7bS7jjCT6aj6ygnpXSEVfkTYrxQhGc1",
  "key15": "5Qpt23YsToXyiDgB3NVs9GteyyD8HQhCNcF59NvRfkDpnVcMRGJAxeiRagS9B9NHpeigvgVFcubbMFGJf2yYiCnD",
  "key16": "5ZsZpZ2UYWYgerZXJjHXFgDBWNW8j8Mjbbh8f3tvrveX8hvoKgdRC4Js1aydtR3KWAZxrdwtZ9k2yEoYcVmEPS1E",
  "key17": "4idtaYiKa4YQ6Np7kBsRZgGRzwtpNJtfcgz13UoRuFBhibjVaGQMRuLH1WgKE2hBa5YYohYhZfxrjuwthRBskddX",
  "key18": "43occj4ATsAFbu1ThRsVhnmNT44vazmZK1HsVhC6U1HRZ7iM1rDSda3s9ThaJretofbRtZ9MogvJpGh5K4HEnLTx",
  "key19": "5DVcw4muQMG3Lf9hZEDQSbTeNQGrRdE2p7Mh8SEmGffGxNEjmvjiwYLV3kvcuus6yLqdtidKgi63iQpKHPZWHPnr",
  "key20": "3EsWwWeaBYPhuvv1K8QU6akRQzEoy8xoBKxzfHFUffkju3ynowjhZDQsYPReCdVq4KD6tiKsjxEermjUXHKuE7jY",
  "key21": "4nzXTWr5tT7c3fA7rL8vZ6vSc7JZ4JAquRAEWk17ufDJPjVvX2EZzzjqNbHKX5h57JHtkTzDzF1YKtP1xYVWKuGa",
  "key22": "3eWXz6p7z4R5gQfz6f4o8iP492gtGFsFCgsNKghLbCdTQg9yxxcJq5eBSji2p1zsdUznbrmeuLkoVLQL4taYUBLp",
  "key23": "2zoDLuCFTT94JwfLGYuD8YsQBddgTzdqvgkrssvTEa2hGiBjTmjwSbPkDvEekCNW6a2TvibSnoAYz3AAURnQttEZ",
  "key24": "56P3P6pKUjhkSD51eMv7NHa2znMt7mAGEcGdojQycAxJB6xLqCQyc3NSWmbHfA4yW7WxruekEEzeZ1wSdPzsAHwk",
  "key25": "2fnhsr6P9dLVcpzhmooSxwQTyPMkap9T84CbFNUct1uh2n2E23bmyBTscwEj54YbnHcMXZGYcj2DbN5uqQRiyLHU",
  "key26": "4cCaxmrL2NfNNs1W4d1XFKpnGdBcVhs4SCc8YK3tGqD76qEX5x8yJP27o1BwZkacDmkwBs2Ri9ZyFL8wnA6enyf6",
  "key27": "2cDYvwdAH5mRhVrfbUzTEGABnUkbEfy2RKCuTMBuf2pRtH5QiWLGUfsrR3pZu5TJKoCXicpMN8ajqimMkmrkfvn3",
  "key28": "24HnH44tk3eUUEkYRSpdv8p5JSWm8L6V88b7pNzmjF1JtM5K6FvdTAQHPsA1JmKdbmHAiSnQg82FT7HtxTQxMouS",
  "key29": "2Gm3TwREMzh3n27ZrDJR1ahuuocEMuNK3vKZXZ9QnaU51Mn6RPyJHjbYqPoU7YWk5Agpf3R4Ctg9PchftVDySfdp",
  "key30": "2RnuZR9tB4ybcmeTwPhGEuMJeoTRJGQVZJ6qSr9Dnj9Y4hvoPNrpXzgyMDwY2p2R8WAo73KZwJ5rP1cZJcztQurL",
  "key31": "5u2iGWAV1ifP18K4fa1NcENAS6y332BmEp7PnG8WqVv4MwVZWtzQfsDJrK129YoGJKjjTLxHrchuENGcu3X61XQu",
  "key32": "5Rw1B6pzfVAh3wLKA2x7WNnunW9WLcq77ViiXgS84txrMH246zpK1B4GyjdrKD5hGDPALHbSkNc4Yh85QoK67Qen",
  "key33": "NYGQK31Sjkm72pThjNjwteUVj1tarii5yZrhnysFLqGjfC8XAq7vuvAcgLbADpb5d2HzkKWpzw5oFMF5dxqRepf",
  "key34": "Xm2VEeBktZ3t4NXgaTjioAZtYyX1UWeBxamWUrPKW3XGcLnHW4phK3NisxDvaG6J4b4RXKZd4YhxeajyrfWENui",
  "key35": "MmLBeraFnUxQRXEzdR9tSkXLLoGmK1op4oUMwVAZ8MW9TdkxnByCkZ7UY1KZU8mos6MfN1T3mW5tf6aM4yZpjfo",
  "key36": "2eFg9YSq87bh3FpHfX37ror76XpDMqexgPKGtzd9KqfWomf3GqzEBniBhLawRVXwYjVsXgS1vZTnLPtrze84mEeT",
  "key37": "3JZ9hv7pu3WF1zC7TVW1DqfUHCSGpKwmE4juT38FbqNAzn35KQUMJjgpHixs1q9FZQwXcBeVmb8z5H7RTmkzr5BA",
  "key38": "5veDUVGNkyBWuSWyfqrfENndAucFdiK4tqvxz8XabvJzha3TrZFx4H943gfJHzphpsQUSc3fGcaM4JphWCeNk9A",
  "key39": "BhRD9HqxZEjsRnroXeC1vxSK7uPptNUBSsrxFSgJuihmioycKRc5KMzLdRNWLCB6R1oej8UttvanH3Tq7QorgWd",
  "key40": "3juGZTcmeMn5HkYDP6abaQYnw6mgqmMPTXWznDY2hqn3mZXCQDSdBdJcwSwMU5GPgarKJeAUJLe1U3YWuNQ7Vf2u",
  "key41": "4oba3TgQLstbmwSvLMUrvVM9v5MxDsDHeYvP9kEcvZ1pYUm47Pj5qYc5fXj5XQ61FSzGcJrEgx6xMBSBx25qLMbk",
  "key42": "4Xq7RwZZU3Vn9bq4xBrgV2dPVF1SibCoxuZ8J5PZ3G5RVz6LVg6rSzNoav8ez9avK7UxUeDGZfFDy7mkDnP1uyKV",
  "key43": "5U7Yvj4S8ZQNyaSVFykpDjnQ3X4LsyCVAVo7ytyTpkrky8pzaBzRTTfEgLmkawi1rMp1Ge1wJfPpLUNUxQuzm9KT",
  "key44": "5jcGFJNLaWxYhXwx46BRmrMkfSbMGKesSFVMahNSMJ3dTZgPGTdM3onwRZfSPZnLpcjg3Z2o92VfFqRczYFf2QRb",
  "key45": "2dyVgD6zkpEEDTGEvM7jojN5dPe8BiL71hYuMj6jZxujyNQwDRtFiQi58fi9s4Qy442ZTTPGkk6vCoe9iwsfTtcm",
  "key46": "27J2qzMTMuGiYXhNgcLXkKiDVYTP9X2sorhDZh4boy1A4XKKFdRduN7dWpi2EekLzATGfb9WsBF8eHNMuCPmrAZF",
  "key47": "5aB6iJJcvKPztLG4fiHvX3L6C4ayLbGcBDxRvqN5Gi3norS99f7nKByMrPrcsRstCrTC46e3jHXTLD7gLakU51rt",
  "key48": "47NWHGBfpCuNKhvB4PnMZfWijQSjg2XNWhtcoWFM9HmiDTU9i3CaPmPpdx7yJTUA1zdj8V9qkPX2suh5kUcm5k7v"
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
