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
    "3L7VdApxAP8q2p4hAc3s1C1bhiFxKpARY5WiBM8Rny5pCY38JAPo8Cu3obTCHdoDDT1C8fLiTU6rNoBgiKmHHgCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3KAoE1XPmFHvn2cbC1i6LSaejF3GPcVnXsSNd2inAz5WXscvWbgedNG6TXUiuFiqZKtAkqohENvTBLafSH13me",
  "key1": "1DErKtAfU7yuZYp4dspL3gJvYzCUWtBnm1bDG5tYeSKBfLMhPLpqjnCrhtx37rZTn3RpxzjFVqPdwvSS4CQbgJf",
  "key2": "5rsBoSQmpd93s9exma6pEz3z3wjkw2WTSZVTV24m7ymFCxiVuVP9GF6PY6CDMh1A1cThFZjRrNjkioisgbgp47R4",
  "key3": "5mpRG5qkPobixmxvdS4EDDzr7YCq5mzZsLtMTwxvBxvEaAvRofeULUrDgDxmbSZjXXcEmE4bAwjjA4VYZfxmMxuD",
  "key4": "3aKmQxYpbcKki3b6NSPN467C3u1n8eTGZGF1CK3GfUugazRogfJbhekx5HeiaLQ8DS3U3XeW7oUd8WdEtZAq6oB",
  "key5": "qX4xdX9VJd2qmzGs5zKTEkFC2qQZ5sYXgK8gq8ybxLxkW8jbDgwjYn5pHsi7XWDnvqfzj6FM2GThF4ffGgaeJdr",
  "key6": "62FMyyfwdR47Km6Xt3PE9tdRPfi6o32KAgQGYjGBQ6DvJm155RxoEDvhkGSpp7rXbQJ6nBtkYAkqfLVCGhVuhicL",
  "key7": "4G21jBYHAEgA3TQ3wQPkQsic3hd18rFDGsHGE1n5rrPEdfbTZqdsgge1cEEzrAmaP7aGCpMYnVFJC2GdjSGmMdrw",
  "key8": "5Jhn6kTGHRbKuWCudpLWLKSMYLbSMNec24Af8nB1JcnVdzCXmLt2SX9vymLvstu7peAJtKdMPuhLi2HCrwBxrB6L",
  "key9": "53tWQKQNSP2hp8wCVrjqx6txHu4GPLvGh48G2JSmoQGWskZZdJC8kwRg6Q63T1EgwEnTv9SdXQPx7T16mQwuToqK",
  "key10": "r7o6qS3bDyFUDyGR4yCofMVVzyybGwxFJP7nJhHoqmu2tkCeM8WvB2BgQ6HWhfjj5nL2mxRhSpQETh4mQz2m4PQ",
  "key11": "4J451fRTstCVMHvY7N1ntyMmvqq9cGbrS65B9KpmSqs3A2ALF4krafvohQ8fNy2NF3oLErpmsGqees6b25xfUDwV",
  "key12": "ckghBrppjKsc342zW3L5m4VmprLdhsvt3yoyMAXvSsvniGEzg2GmrnqZWEoEmiTbVNr23fjTm3dEvpaaBTcWYM2",
  "key13": "4nfny9qFMbQNirDT1GUNajScPcsDDs2D9kvYWuy635Pix1i2i9jpgX7RUsbMoQD93pzjW4VhxvRZhetFrqyBXrtU",
  "key14": "4nKbAVS7tGvHv2VHsisfodMhS4GWyoQGcgkTqZxvAmyDc3nPHFtephdeoETGsjWpzYDVERwV2xd7aSeQtadcGJoa",
  "key15": "RKvqKhz8hNPjzRXNBVPBGqAPFcUwUCcfxBDBKiara3M4AVu1bSzfnFCx7ScoJji21Ksxt6N3hig3z1ivoYx8qtH",
  "key16": "iK6pAVYqr6tcat13fYNgNhQEAi6zeQueAhpUG4jAk7MmDEgM5qh2jAqzhboe19u8hCQmxxNWJAVfxrzT6Ajm5b7",
  "key17": "5QLCN5rEB2JwHWVH29eRoHdQpkouM2gTtVnogV4Nyvuy92MUmiLvbQ645YzhXXK3zLzrG2d8EUjN2L1hCh5hjPXP",
  "key18": "5RXuAALESwweye7JfmWMkBmdEGWUZtobhSizdkHqzCe3Momw1NcCE3rz5aobqQTgXiBtup5zN2iLSVzt8pf5dmYM",
  "key19": "5fSFi7UUgbUf2cDHeUFkdkGLuBHiq7LXN6Se6dgYSJQA3BjTV7VLBeqiVTUn42sFn3Qo4rXevMsLLnQNZrKStvY9",
  "key20": "45oakGvdCpg96zWkoCxwRhZPYXGY74q4AMmuBqFfihnKkhg8dCRWKs2NPCnK1dYA1arbWZ1CFdPH35Sh3KKPfsz1",
  "key21": "4zfS3DwEPqLDNcMZ8T68V77rWPYMMVRN4uYneYo1CQ67s4v9Vs8UoFKcKBDEw7NNeZJjXgkZv4rTguDTWH92ubic",
  "key22": "3DnaU8tv1ciuKNXznthNnHaxwA9AAUvT2jmcwN2yxBju2oebZY1EvbFLR7hNzTpi3wG2VYgh1v1Yce9ia77gN1MR",
  "key23": "2QiwkSLe9LdEm39w83xGprdHfP266ax17AsuL4L7eSnMWVrJ5cRAjZuyQ2LE6bA5T8S7rLfQUJTwCrH1BC42msev",
  "key24": "3uxiYumWFcYLSV6hhVGvQCoFzUvpHNsPA1vuKx5wpTV3jQCpKr3rRDandRSvMapSDnmrPra1coAgneaUYoSLASkt",
  "key25": "2sXZ9Hxu811KeHi1cxM5QdrQK1Es2PVqhuAivAQhjBr5f5yj1qhoL4jYq3SNgUrwVE3HVmKDcTM81ZDrKgRVgTit",
  "key26": "4NK2RruhjjTJsQSK1nYp7APfa7uirGwhs9ydpeT74sjJbPBNk4PPofQ6S6erZtN7ScYkyudqn34Y8JfffwNSo7NR",
  "key27": "2M2v8HQWnC1htoBFyVVh3R1wPEQiYw6xeKE5TqyqyqPJtPodfjqxSw4dk4Bp75ZG1WAA8LG91pWmYSDrgz3x7qrh",
  "key28": "4DP1HVtqvKTb4KoEmr2efnGU4a61nX3UCD8chHuntMSRxaKMm6b2uQpp1MGzfWRzYvdFrq5V48JeZcMkALBRatMW",
  "key29": "4pq4bCHaaHaSGKmnxnhjZSENgJCg9gFT8jE3e8uDQ8sXWaPsh6R9PcqfCnwLE73Re5qBTzG37HTVLRZDGr2tn6Jg",
  "key30": "3ELHqsuTSnRHgh2YjcnT4PcZYyMm8JQrFW6e9YtT9XMHba1TT7up37qVC4SFukRUYQhwxKv8VZF5MBqWYCW447Ri",
  "key31": "5b5HqBbZGrXgABphZ1VYqhyDG8cKBuBd6jshXx1YHgzijyoqzVTrrQr749iaDuQYZeg2coUBwMuAbtr5PUU41MeY",
  "key32": "5gBXoXd3SYwZkyEZvfwmpLsb5dYipGp9hbUn5Y2qyjAF19RD7rPHWV47qvhu1J5ZR9Uu6csngrPqhXBuq46YdpMC",
  "key33": "2boqBeXsPiWBv4cUewTndmrU7TZqpDTu92Q2CgY1yDMf7TgRskW4M6x8LJQ8yrk5kcP3c6fTDautYDCTUdK7Cmhu",
  "key34": "37VRf48ffjXiUVoRLCFKC5YvcJ2FXPm6EoJcQvunuQ4erpFEK35tMX4Qg3WUuEzqdXrXp4DRWnkpRskeQxoC8GEA",
  "key35": "4Xein7ab8jzcTY9gh1WPppfz4haFgpAcZSg4s6VguRj3eNHQrrCRNbHpkwB4jR2mE4SQXpeYXpH2Ep1rEUnxnYrb",
  "key36": "48W8SFUB1UuRSuo1dSUNXq4KoECcvRQWTvssrym87Ac8xKZ7j52Bcp4eTw5Z1uVqevJ1a1QGzpJ9bByL85buQhyv",
  "key37": "K48aJeR1McQfhBamni9j9UETPGBLxhtdDg8GhPRhVR9JdcuynEbQ3DYDbWVXZcvsK4ZB4gmbSnF4PUDqW8Uc4tJ",
  "key38": "4tyoN8M5h5gLLrdNfiLvMuc7Ai9TwcPFKhPYd2DCyG4mxsyfrtGdKwEWX8azTpav5zPUQrbSHbHQJdFbpiag649X"
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
