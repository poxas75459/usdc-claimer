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
    "4DinvMjrJNfpEz5i2DGsKDmYBtPQbFPcV21KaGnvonUmbkWYoqro5cEihpP8XL8uGRQwUmPTP4P7JZEC9YASQnMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfVjcJSJ8Ni4GtEth6Yu13VXq6dBXXMiuJMLhML8NAK6JQ1wYPqg4bT8g2zfAXk5MB5apf3ofa4DTLGnc89s7Xw",
  "key1": "UyMyr2c3M4QtC2y8qTZXV2JtMCocX3uvVxxTidcMgUuZe2DSXZTQdRmFwPsCFMZsqBwckJPTtxsvYTDgAzsqAYY",
  "key2": "Pt7XDPnvKMKoVCMfXJtAhKhLGB2LSUjn2egme9HeiGFWJ8tpREkgBs7W4ZgF5fJp2e3nLWPAjD2YpbstQBGyDbg",
  "key3": "5zK6Wzm7GWgFFKCf6R4fkEADrXiMfkSghE9mCQME4vCxjuW4RnnUadmk4SZwuztD3jiejiwkMroP81bwiD9ksvHJ",
  "key4": "3Qzi9wuL3AYaLPyn9a4xJiq7Be9WzLGnbKzwCH1ZEbGPGc1Hx2HiQGzLJg8Sf3XN6MhXsGABnj8RVsC2QNupcDEN",
  "key5": "27bfnvNSCGrS2zKPLm73FENzoFMwT1kgH5QimWbNZG772ZdXdknGyB9wvNJABc8X1Ggapy9kRwS7xmcye45RZxns",
  "key6": "66zT1ZbHsfc8wZn4T6MKQhqjrekqoAPPPg5yCC7EnGixGq3mm76KEsr4wHRDsYTJKRUHRpVDBveJHMrzjzgfRwAZ",
  "key7": "38wXqsrPXPdFbAcopg3NmJ2GM4wAeGqHcA9gRAN7Rjh2DT8f4sbFGwMJbvzkAYNRQ2aX6zxFtgP9REoeboQL4MQ5",
  "key8": "4MxP2JzYJRtFQpZsH5uyTX3mN8q8Pkw2dShZhEHoxQ8w21Y6bxWg4xGPWauqyiByFHH24TbZQZ1rENvwYerFc3X1",
  "key9": "3h2sBaEMVCJhovAViaidZXMMNvhspgNiPwvPXuQzpzjREsJFawyHCuxMdVZGpwDPciYzATxMWzrnvPA9iiiGXt77",
  "key10": "2xWW2EtJ3R2jZGFHkY9VV9i5aeqLt9ePpduNGzDsB9gycd8eeknRo4ZJZdfgn9M9QhN56fbcXGK4dszPPAJFbyho",
  "key11": "2ay4QXvaZWsr3VRnmTJj19DC1owpPTtwe7jSiE61UZCatWsvxrY7L1xWSuRudkL5UU4cPjBukfTSGWpt87XxHZKd",
  "key12": "3kNpab1qfAPLePE5EhJxTtm2NiP3HBs1AJvEmyZScfkryZbYj7rdxHJyADAVoYNCnw4ax1jGECCi2TA9hXAogrbv",
  "key13": "3EnKM1JCWZt5RqKXjHSqn1HvPj1S7D5awBM2V9Cr5f1XxNVrwRyLa2g9TWtN5HE36Vy5F2TBEytisMvnPcUPEZ6V",
  "key14": "3ALbhFc9y4GqxHtcMnkZ4wdWjHYvfgcRJJWcJKrn2LGZAteiRMiCAUC2oT8NuBAPmy1zhLUF1YRDdx8hpzZbypgd",
  "key15": "3da6NNZmFNcqsWgHMxj9tmRPMS89sRKuC6bquWz7x2seHWgE9wR3ZU6QXnAc333BjUP1dFzSXAq98ZHzfaQLLZ7Z",
  "key16": "5wuELAQn2e5CqQVSTaFC6De4tWz9DyHUmagFRjCQQzQVHcV68dzTSuvRJdhPTx2aFfoUNiJ4Xz1yu9XsHkXtjW1u",
  "key17": "23ghEnSGNpso1oNWA2M9hMqsGBfrHyKW3mqQCj4qBiNnuN1GhiA4fWeLyMckvg4bwxnp6EQTdoReRqa4mkZuDdne",
  "key18": "4W27fCvGKXj9byWeTo4hW3MGUky9Ueq89vcM7Jerx9eCwiYxPHNyCtR31e5gaPv16DHzrZXnWj9JUBTMsGfUodma",
  "key19": "4MvtxgETNsd3atSiNsnByTQP3o7oDpcGSgJR3Zeu5GT4poteEhQYuDMUHe9vVc4aYucDMTnTQZNHr7u2p4oD7uGX",
  "key20": "2zUHe6YKR3eR2aAkMGUo3Kn5niyJC12BmyW2d9q8Q1JLBwj1grMUGdqVpeqrNL9YWVfGrLuo8Ep6f7zUhZv3gP4W",
  "key21": "2c8U5hW4FWRheKjYnMnzPAV2qfV3kZi3pjuve1yrwZGrk3SQJDUgpxTWWuukMBgR4i2irP7fT1R92iozNsNZWWUS",
  "key22": "67VjZgh7DKnJwJpPvq5qpd1JZ78YpaArUZqLZUHbV8ZD7B6ND3PEXYWeDm31r7NKQEqzUdgyKyGRGGcisKLiy5vx",
  "key23": "67HDxckXNxQm12n9YHJgFjsenQQMj7yQeNMEr9Ppw9iqYZTsqpVPz2mx5eR8CrT796ggcu9RXBuYaGHNwuKYyhv8",
  "key24": "66nVhWMpwTVzdxkTNPGTNhUhoWSBLDtHYAC1Ftck1CbsLCo1p7fTdYSqpKk8ckKqD23bTb6fj22vaVfGzgjjViYL",
  "key25": "3vrm8o8GVsMbwvq847V3vccuFZtN9n21uVmjKvr5EXwbYpF5qz1d9d1pCbBPupczyYQHCC1rwUWKs7JsYb2x9sph",
  "key26": "2GwmKUQhkV48raTEHXE9gs4QJFDTn5xWELbDrwR73hpPvEzVHjDSr6WruKaVRekS26GVvV3qjjem5hcUQ59sF1zd",
  "key27": "2sVn6tLTWrzMKZNxYjdNyKvLrDGSL1CqXqEPcYzB4126pqFZEw26WMupTbNQANnizqSSmwBx4SWoLNjixEyK2rGH",
  "key28": "49v4UqCMgBP7cUULfAhVdtLdKkuJ1rLmkcHrUE95LVnLC9kBYJqfxex1Jk9ioNmkzML5WxojLRq6RGwrZpgY49SC",
  "key29": "wHMLTRK1KgxCRURKzJYioQ9rfgz2rqaGgb98ySecXDWF2Wdeabq8z72rKUwwq56C8LhrMzC28zTT2pTje8bxNrf",
  "key30": "2pZAN8wgjJJnT9Ju5A1w3wbfX3KLJQos9ZYkmzJT43NNrh7kZFhMgRNXfKmuy7Un4sMpWsivywkgpzaVvtRhZ2z7",
  "key31": "2MwNkna2NT84x3zwdF6yeXCkG8tSmAzomfMSXtk2BiBUfJ1dzfNuADVBwWXBmmjF2upDDXTQPed1yCFKtDfPBGwM",
  "key32": "3UXA5hbaCLjWanXT2LnNMUeMxDpCSRgbdAS5tAhz7cJsy7CJuM2NCMyEEZ5V8bgvRT86J8Bm4nJ4hCdoJcGyU7Vi",
  "key33": "41rZ1fGVf3ikKDajjTMUBYsN8JFydECdTaMi5sXyHTa1dff81swYZLy9Hmh3GJi9mX193kj3avd4DpLpEkNWaPmp",
  "key34": "3AqESRyFVP9phnBBC9oJ7hxHW8gNJdmEEPTFqph1z3rbFV5gZyJUtb3P6mnwNN4wKwzsDvbtpoVEX87Y6iEmaQMm",
  "key35": "9i7JVWp67ACGsSdNpydE3YrMGxzWaTACCfL44JfiUK5ci9nw5h8yytBnNBF38GTdXfh2kDyxTukbR4CyxH2u1v9",
  "key36": "5E4x4tjtS6hZGCZoEahv3PmKgC3VL5bwMiCMnfCjHno62jFv9h4PLSfsDXEBxN3kVVG2HoUfcQLTqDik89TZxLG1",
  "key37": "4pK2aEFxUdE4JfaABXmmwqfT2zAKNpW41Wcgf4dPPAJHcdixmjaCU6BGdt3DR3wDXwa8ZCr1o8EUwYUoxp2coesK",
  "key38": "2daUbzNQtv2P75d9SmTKv8YFmqnCYAzmAqcEcF4AYNxKKnzdxYLLGmhytgR9DAyRQVAPSU13oJCVos2N99iyaiKr",
  "key39": "4gB46ybg6UeL16Xd9D6Yk3nyxRsT33hB5WDo5v8fC7aFJ74CjFA9cQWT53XLFbvvRTbs3owaKAHuQDFBeF4hTV1G",
  "key40": "5KTG1sW18JLPBdvjkumCUXz6jEakc5yd8gZKHNZ5zcpD15PVQ2gyjHAdguYoqpBNxBE5KfciR1xGcCjqC4Mh1nDT",
  "key41": "3XgRA3jfxzoiQqTkvPY9BeA9NzTZXxPC58BFyh92x7z6g6vK37PiBM9BqPCAtunjFJW8v7s7tzntHAT5d8A77WsL",
  "key42": "2M1LFGzuanKUsN1tZakbKQfSqKPwePgndMtTTpPyhThT6ZCYMJ2J3RXnGbxuX5hX1EzjQt3z3GedM94Wbct5CVcY",
  "key43": "4KyoCdGDCZCLCgnRPYfPryaj2nWiEo4BGynRbvGAmb9WCALciNEbrKaYX5eMpGNxXZj9mUbPaEaFwwukE4f3cD7x",
  "key44": "46ymXuvmXd48X4gnRS3gtjjMdVmhcc4TQPGjLi7an73WL6nsEr3e2udGBJKyBoMtkQCo5LCdPoEQbakj82JJVczH",
  "key45": "3WznDtYx2g5fJS7zyKxtPFnxmn1xcN3auRnDNEX9PA78cDFAQQhVkYMHHAHsRV3TQ71wSfjaGyCS6JHwhkUNZsB8",
  "key46": "4ovNzRM69bLL4EXiQ4tbgKLhh5pHh96tZHEfsAttxmVw8q8NwkxkB6a5mEH81PUQJmJPt4D8i86g4hbL31YuCa6e",
  "key47": "VHEf8FQzzRRpKEa49TTATr4mEVorZZW5BeVTugH1qE77CT1Vbn9FF97c3axed4MTPiiHy1KRwGYe7LvQ4wHgvGV",
  "key48": "4BWCuhZU6j6ztas4udcwC79CQEmJpcGrSC9M5QcNWYguEkuD7ohebca4bShMP7YwDs5qEob6nsGczcf21SRDNPeR"
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
