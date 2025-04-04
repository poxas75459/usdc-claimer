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
    "58VTR3dmMfzVDvDzWCTWZiy9QcNnte4WA1VsjyAf1feWhePNC4rjXYW8LtJrVDYzqbqLUTcabaKHG3pNZNKfrjcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZPbqhjTV9WURh659eYtiGQ3jK3vrzm5MiSK63xptRCuezP3VLhj1PqdtrLpjK419oL9nucgc7H7JQ3SdE3BqME",
  "key1": "2qSAr1qNPKctKnMm9s2Jqzqc86ssMB6cMsYjFKAbzjyhqX82p9phL71exvKaSLHrg2cd8ShRuUkGfpBHPJxDo6Bd",
  "key2": "3KKzHfbZQvYftBRVBkgz9nvmPAGBkUQ66SZYV82MbCkLuryoQwKrBtt4iaNdGHpMvqEJdgEgbRAjrHbNBQZR4eDU",
  "key3": "5dHC6gnKumnv8GbML6mZzAvGqoziC1TNTKxdMx6NUbZ7bg8gguA7ps6g8tCFNVktrTB5zX2WLtH6ekBiNC2FfX6U",
  "key4": "3Sa3513rdh1tSuHWF4FatU8pd9ZR2nUX9HjohupnXK2sGigs2tQcNseYRK9hZNEtJ8rMo2UMPHfeeSwdpkH1Rwof",
  "key5": "36gt9fFSgtjHfgfMiGfz3xR4EXFNQZf8EEbxdQikQnmaaMccJqzqUpv4imZPh2SwcZk6bY4HePAE4u9WA1M4Qa9B",
  "key6": "2bP8GGtRBSe3N1w3w92DnKaEnDz1pyEEUTytVHXkdiSmu5bVasZJWCxmTxQqYfSbb2fNTsBeKTvJ7tsde4623VCQ",
  "key7": "2t1532kh3FXvnURcZZcvjapEUqRbsrhuNBPHb4FfFcGDokG5wFt5hsZzFybnKJz4vBxp7sTTkJWzs7DwVj9bGpfB",
  "key8": "3eN6SnnJRj3Pe3dc8kUgNEFSVpzgdVSJRfeLEg31V7mr59Y2t6gQ5cnrUsynfJXYfhYm1BKPTn3BaMCgKWviLpoG",
  "key9": "2wAq5fme9f87fx3vW8PVKTHFpqx21jc4CurJ1byJdFmvsihdHNb9bizhWzTTE4cXqvLKMUyDYDCcKxA9FHCtkXVY",
  "key10": "4tz6TUhBuQwzgQZgCDXmu6v7xgFvN8vZsZyHkondBwu47n4oRaqnCgzFrtqwAZ8WBZCWoQwEcyd1mP5avxkUdhVQ",
  "key11": "56yaZpgBLs6UtqEKyqrHBwpntz3Uhqtc8QJBY6Dge99RJcrh1atB3sZSWgcT2Fp6usdZtSHhMcotgXjBYXW4EDVb",
  "key12": "2w2kGuZ7A9bE2GSHWDcJtBWxyr2pqt1AFGLeEu7nfsujkZsMNESZyDtiEhVjx6HWRR7m4WEdUB21GDwmBtPuHpcP",
  "key13": "2fdMzB7woMb3wtKDPwBDho6sx64wRzegc3mttekCVYXbsfqbfFoALcCXad1kkxyqzu3HjtLANoSqyfKZrqWEzHKW",
  "key14": "5u8NL6vfd4JccD8kfDsz8gR6kkn5EKqRFgKVQXN5E9N3TEKMo8LhGEGXjx8eZvdgA4MTzsNfj4vvmpEtYrZC2MQZ",
  "key15": "3VXpqHtPs5HZSfK43E3oaEuPWcJjikXkP8WXfyTPuayu2tidfTDvcSYhj2yf2sncZUn92sbPwZxwaWi2VWdL16z5",
  "key16": "7oiXLQQ4ZRvXYzWNY5eivmjzZGFFeXSBUG7qmYS9JcXemExAQM29EKTednfdFkZR47HtGrYG42xZTkyQVLfL6uC",
  "key17": "4zszTXeizAu7huB8mjfXp5wnnG69Sky79mR2W7hEic8xWvbN5b6LyFPdBQ7CyJALqgxUHbHfv3MrGBv1agNiCL47",
  "key18": "22dJLb7bq9CiLMCWBzYdHbJACAS8UUkrb7EDP3d7HyaLiNj21jZbxAMbUaCJX52KcBKMJw6VnBtNBVD2zHVmG2kF",
  "key19": "2NrmhB3bwq5aqSMst1ZzZgkMy8YTi3srpYCQBv78rYMe2yNKD6BcJH23bxkSAH2TvAEJ8Z9xkVny9tPHQpHZPkr8",
  "key20": "4EdcYMaTit8CM8M2Hz7y5N76bjUrjBBZxEYFjYKPqJ99DGTjBSi1bC6gQKcYFMhpWj35TUG4kQW1u5LpccL2E4Pf",
  "key21": "49Vvm8FHbPQBUUX49JVNuNZ8jPgN3a2FRBM6hFsohfsDEsPFiEDuVJiAnNL8hvcnsex9p6r2N9Zbe8tUWhc93rMz",
  "key22": "3dqTxuv8FBBDwTy6YjM1Tb9AZuztL85TaHp31DzPsZfGnX3QMjsDTNjE2Tmr9WUChqZyZNQokPbD8fxoDxEP9Pe7",
  "key23": "3uUqJTMP37AQ65Xkzw595FsW8VsF3mQ2YnAAiJXsDuoLiKkLPe1gbPfuQzbBCo7xVkYS1kxPSTDR8Gpfv5P13W71",
  "key24": "3CNMnaxGorgATQrU6KEZEBvNZm99V74o87VRro6GLpeTpu11keMjLSe4WJjTqWNEqCKk7B1Ux4XaJEV1s1yUS1Mn",
  "key25": "rtEAQnQPc2tEJbLFkxqk38gUPwwNcMk8S3VDm2Eja5utb3EaNQSpmoJP9D1vt6wDbqoi5k8CZeaD36KSC9Nos5y",
  "key26": "27fZWKHsHzNVPm34eLCFBAd9vDftpmdmZLoktuQ3LFp766phtd3KuAWmRNQDo6kEjU2pzkW5Fwut7RG2bmxLG7SJ",
  "key27": "3NrK6PkjeU8LSUY6tpSB1NX2ZgEgMSZg4DBeV9MUjMKVtK5NbLgzNTDLcdf2HkJXBoSXNP5Fvusrg6Lw9ZRLrLpA",
  "key28": "4Q5Mqtgca4a8b4cVkxHcqdAoSojLW22ngKLACW9K9deKZAJdjgB1qr7VkrizHbmp5e1SzNgXbkYSDcKQ5SyK3BQv",
  "key29": "4svXhtYHNWFdHtvtMNdPk4beeM8XucGhtE2mN3HVWzeJM4KtTNK1AGCidrzdKMKQLFtoqazW5wkrx9P7ESLAaosc",
  "key30": "3F3HPLC1VCezz7haUENiQ6hd4TPwkDHXbEt3bNbu99nrxLDndLsBVsxcdnMypj7mm1mvRz5AsYAio5Eh9BKh51Qs",
  "key31": "mbbJoFPJJr4eZaxwgiCfGSPahEZdBGrGPcRUgtPrxNoaKVTyqUUgp1RaZZ99YU4EwdTRzNiBCSGSdQBuq6UeRWj",
  "key32": "5csPMWN3DRP9zXFeEE5s8dNCWR7yjpKCLKrUS4wpNY4Q1VxGA8yivLkxMaQxts9PHEP6geSsHtxjneB9ZSyVYxvp",
  "key33": "37vAFaGDRXZgFb1s7CJJp5NjJ7Ac7dM7a5uM5vmZ7FGGMCUnsYGEpaXtvBcW6cNraTWZJ5JmJidruNYmKXk7YRL1",
  "key34": "4dd1YbTEQEEKBYWHU8LxRrukRviVm9QwF4mPTKushRpvwQEEDqfiEC2YRR8CUprqdywMnk9th8Yux6RWLW9UcdjG",
  "key35": "61wSdprW7hJaSsveHa295iFvoooxoyBQKGqvGJDvCar8gs8pWccGdK98wcb73KySVW3Qbdd3MxQqim9SfgW9YTqP",
  "key36": "5gxyuzw6r3jiUJbp3KWbk3sTmmagBHW5znBEV6HGG3Wh4rBLoTUthEoWMzCwfw3VaLTHMTkPMCkBX6JLhpgMY3Fv",
  "key37": "63ZxBEBNedvAZ6tZZtrzMzvxxz2DfHveruodgjhUwTVBHzdRCw7L2PYS3BdNWmFJ2DBDDVQtvnFn21HJQRAL8Kxu",
  "key38": "5psZAJas9ubQn6B9KYzUqLWnU74xsCoR41rfjbAT9JHyM1sNDkdCtvQYKSNqsJyx3DvqaJt8z4TEq8e3HGaNUAc8",
  "key39": "5MhxM8LDwkttmgEwtSRKHKRtHzvMx3jLqG5tGfws2kuswkArWQAqgwUDWpvtoUizNtGMeQwQveRELHk8eJQCeGWh",
  "key40": "3yH44jvQ6kAHhgR2EfdcNjwKQuYhZgHbEfgu4NAEgvnZiD6dWU6UsK8dW9j3D2Zpf3Vn81CLfhYDUsH5tXbL4YzG"
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
