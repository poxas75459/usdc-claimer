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
    "4Bn6jP9BaJHDveBkZMyLPPFd32w8yPyAK6WiWsc5A2Bj5pj9eFH1yrA9ieoaGonrWm3oGaHvAFMC16nj1aTVD3qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXWpZymLiMaqqSStMc4XENV8Kd26xaU5B3vJtJNLY9UgJpjw6ieXDJXYWRaimJftepyMvxcaCqeS7Q7ujRxevsB",
  "key1": "3z24CRKpFvsaTnztJutPtdxjvr7wc98mJcirXg5xnUrhm1riRUxMoj2ci1MFxrGXyyuJyVjZR3QiftQ6HUvzGudF",
  "key2": "4NXKN3Ur6FJpo4LSpBkJFXumcR1g25hLdNoqYP9S1Dpxg93YfocVexhScr1P1dFa7vWURcNfxXux7pCaPX1rP7xQ",
  "key3": "bfN4Wa5WZAZwvLRyuaSHNuJawnRRcTxPKsS838zBhMpNwbMX1aNTsLG5qV3Ukb7QtF2xzbbDFjz38afmPLFifHL",
  "key4": "4DtzFpjhHuGshigNg7XdLpAHBSsVuX8kTJTneppEBnve4onJH92udC6yfEyjNdcU5HSdu4eTDyc8fR4y9PRMue5R",
  "key5": "PakZfYiDWvtaGhePxjWpzwjnqfzaaS8FAC53QMJH9hD4LhWdYf3Pnq7zCcZRQVxwnTWx7w2HcKZc7Fy1kobp367",
  "key6": "5jMMJnVHazXpxENFE8X6RKQy2RcPbdmCYsjehDXnyJYt7pmm3HtUpEEdKcBdFaeYN5DuNgL91hddZhxKh3TmXXRk",
  "key7": "2knZruAbi486qjPkFSiYGq8uPUGK92RDULyj1p6tc7Gr8SZgdz21VJdnc4YUuXF6oymoy5GpQuHWTbdZx19FW7CS",
  "key8": "2dknxKVt39pM7Tx8wytSmrjfT7G4zTcLAJwGwTpF3ngeBAPmB6V84najKkNZNydTubMbeWTEktUaDyHK3Wwzu16U",
  "key9": "3cV9bkfeGj8PpoY1cgL59uxoNd18BPX2gYcRKKdm3fQW6f95j1NumGsKZnGoKyKYQQno9tNf17foWgRmRnU3ijB2",
  "key10": "5PxDFAZ1pQQSwvGgvmBc1JynWNXPRTuYZwZ7pCd8Zkr569NiaXpoKbRpqdb5rScDZpX3LhhBVZCYBqon8kF3uMnM",
  "key11": "58Gj8XPxMwnLQDymSKp9hiesyc9Jy7agK8AmEZgG11a98AmTJVigS1C83U2ZuoUT2H7TEYyTfMEhUcwjjd8cAmWk",
  "key12": "3rvryQsXGtyZwHkVYDn8ggzpmkApz88cc2C1StTekaVVtYD9RpeLxmwTjCucupVcyPJCEFNT3W8v3MEvWguAUmMg",
  "key13": "3x3vNK4sMKJeZRpTvwk6DD37sDwb96THyVd8eV1HtWjtgiwpXrXW2X2Qu2UHubtyfBj3E4LxaysSphpTeD5123Jm",
  "key14": "5dbwh8r6WvxjS4P5fKtnxQTFNexspiQBuFdx8bVW3ZF4Ry1Q63RF1oZ5SFmzixRVLk3VCgVcGuHDhM5pdSn7XBoj",
  "key15": "4mYey2kaJJW7RQQDEaZbVJmeq2974yzA1qaxzcpgFZS4i4me8beZNLpU9SKk9817h5JqzxJVeXwtJ1Kr6h2ghY1R",
  "key16": "Nm6dHaSKVvvhNCT6RSFJX5MYN8osgLy9tGGSwN492BXW6dwYMkuUChAD61yY6MT5JGYgN7SQSGbfTu3BM792yq7",
  "key17": "taqQ2ZkvZxrSJu22fqi5xqN1ZBHB2tBqep3pAoMZ1oyzWX7eMg7JzFD8mo4t5bFfrE5rEYLyvsqh9pq7G42qsMm",
  "key18": "65VJamaZ1EHscxnjbyj13WSSijAty4xGXkXPdRuTKsZhCMmNpxeXQyAnoYjpMXcfyxw8mfSVaubNHUTT2WMWEfsa",
  "key19": "3mSwiwAhskLcMvWrJA2cjtiieKhEfrJmobNquUbC3hWyRcx9XiG6QAC41jqmx9SEmHqHAma3VeRmhgXVj1DgFB7Z",
  "key20": "e4XssMBGiCW688bdaopEomKewagfr5ASzgFkcDqBTpqHEh6u1smjYoKHJed858QoH9X8fMiWZesLyFwvRY6uPjq",
  "key21": "4QpmfqtboMR5pngumWW9ZjAVhiL36kh9oqLwximoxGELEYcbgBPujSoqvjPQhkPchp7HsVmr9z7xYZNLFx3vBvwj",
  "key22": "5GDUWDD3TkgAYmtEusSfNZ5GJq8ab9JEgFeu1YSd4Yd9HHuVq696VEfgwJa9o4e6BufN4biVCxAgseRPQ9bJyKFt",
  "key23": "4n2ua3C4bRbdR1oLfJMHGY13Tq6Xh7wLxuEMJnH4zM9MbwDboT6dfXoFePkrbibfhZ7Ha76FBLmyvWAcpiUaa8oo",
  "key24": "57Ey3V5fVmVzd2gtx7XNbSGq6fhzHSDfjgscPBu7caxT6HPFpq7SZ7q4gPAv7bLuSh6dYsmLSmtLAFjN82P32anP",
  "key25": "5fiJksVFxo7quSVHPNB8d8KbGkcBymXK3eTRVou5bPKsd5stCzX7g8RWBSxe5XyznpHmN4qrPHEBRJrzViReJsVa",
  "key26": "2dM9aJh6sj8erGua2186Gm7i53k4bcuPa5fbN7S4xyXPMBjRc2vqtS9LxuBb1FRmAZU5e9QqK3kwCsCuSYTrrL63",
  "key27": "5NR9ayPig4dsQM8MaMiBqpNSjvDm8jSaYCKJTmFhecBt8g7szjBKaWZsnRYNmNknrGjgU62TKHtmwKoLuahZyCon",
  "key28": "2YtKgQTxuh2miJhv9dbCA3EtPboB4NCVGeAWeQRz7HzaqNPpgzKoM5awqY2GxqzHhpRGyLJJUXXzJ8yg747Na5so",
  "key29": "3EtLVoanZzcYvYMcvs8Be9wvUhJNPSsE53b8uy87yR5fX685tu9F3QKR1yaBCw6APe5YngpJimp1nBWbaKgk3AWW",
  "key30": "YHmj17bK7GseQw73qLQgALdGjA91ykkap23stsJsQh5o58eFrXvHVXxJKXBrJsmNZZovmuTuShofb3wZMTh2m1v",
  "key31": "5KbbgU88WoAEJjW9bUrKba16FtJShYXkHB52yPhTxwQCCrs1aTfAMjnVqZNbk8ERpzQ8QYYCfsNXvs8nFyysD5qu",
  "key32": "4WJAWModvvtCnxtGDquc5okHuFjEGhkD3E9NGXAqGZ8uXpuDHKJrGxmrHsUGKf5ZYrmDBQya143i8AxtE2ZiwaYH",
  "key33": "4mk6bzpUpazkN5vwHUG5ks6s9vd7WWtQc1i4R2zhG7tVEQc4VsJpfTECXip5t2ZoCAfP6QVfQfHbSRcK3QyHqxx5",
  "key34": "4gsDcJxWeckJFXw9ENzfpWFokmdN7GuHYBvC6Cps1GsxNRYhZkRqnTtmDqBRdDrWtDPH2qMtmuhEDVrVHwXf71JR",
  "key35": "2jVryq8UraoVJfZo2A2MneZXBwNEGU1D9n5FoCnAdvsL8z1bfruRZvXSXGDQWoVdDUWo96wYRJGT3ijU7RQYBv5H",
  "key36": "5Jk3uS5AAiDZvN8Kd2f4oSw1MLsjTaekEdrvmSBmF5x655BxY9mAynR1hLCtvUxpo4sumiwhuxDt1RALB7fhRs18",
  "key37": "3FsHvBVTh9t4k6P2w9jXAQg67XDoY8Y1wDCAWMe4iVBkqSohES93yEMEf2P3PsyzJ7qq6AQPnsNTdffdJpsrvrct",
  "key38": "94RHEXZgRDjChGgam66p4SEJ4E45926bpk6avCJHJVxz2gbLNMr2oBZXTYtqmRWEv2P9yufBoMK55yjkuvPAwqT"
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
