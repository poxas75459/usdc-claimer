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
    "3ydXeMsyR1tYhaocedncLNq3RpHEsBvsjhqY2Ru32CT9Z8ZNfgfQ33wZJS2zsbNeKNUuPsAT2s1asqFbHEVchcd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4tGroBWqEkZ9sZ6Y22Ti7a4ddB7ZE5F5UgTm91At4hNtQqgNbqDXrPVMuifoSk3fs9RuR9JgGpSTfrMySp41dS",
  "key1": "4nwKD2Ftq1bHz6wqUDQbmjVcMs5MAbejWHELFP9HRRsUtzPMg3AKTDv8Aie3LezdhWr3AemC9NJo2oW3LUC8rgWi",
  "key2": "PUFUgVkhegSa68ZVayscsp73PyioPjaoHDixDcnJcS4ZAWacnE2J2WmavNV6nTv7BykurNCKjjg2C4oN5qQP3uM",
  "key3": "3TWonduxash3w5xSS8nBqnccUgypr8ED8URFtCVpAJhzpT6UT39ewHALeWFLEWnTDZ844KARHG1baGGWA7J3C8K6",
  "key4": "3pjLnHrVEQeYdX9Sx8BxuarhLr7akUrDSPmwdV8buvoRZwZ78gdYb9xERaBCkWAwcCU242rttFwoLBDte66L8jPm",
  "key5": "2HsSFEEmdjtNopwzybaYybovztRWMy3zC2QgNDGjgstSH8N6Jez3eoJUU57J72wqJAEN33oNuYq44vyDBT7XNuSf",
  "key6": "26iMMY5DFuyXtpGEbGhTKQxzXwRCqjprYyiuBYXrVSsCVwmJtxUAxa66WcwsTpaMQr42jhFTATbEyFfSq3zqEqB5",
  "key7": "2cfWPCzqVQXUxwYFRLiMudo2FUwmthigNsBUdRVPRighBg92cRgVRthUXBRpoEGfhccqRDdD8SoTAAMYvb5GTZds",
  "key8": "46nGMpg8mAU6AV4WrSFhcPSd7ZtJPUKkshFxsVKweYx8uYMzY7RPVkmcwMYNbzrht6BqznqutuNhdasU3o6dfDXb",
  "key9": "4DwMRwm5g469NdMmbHnxE2o3bo7TZuu9bTRY1SQDiiskMj8TcNPUResn7ZhDtGtM8JugUBAs1PeukoN82D2mvSpB",
  "key10": "2jJGZm2UxgcVtMdTETNWUehSRBf3NQMMzaYZd1VxY9gKC3r8aWHxHHXn6myVj9R65Rerjv7ZR6mAKGXmkpbgE64c",
  "key11": "5fRz1W97bpcg2MGMVPFQE49wTY117JrLGi6aha3pp1CX3cXbWHtcdtmxMcPzdMuUH1g2iZ7PaUxVfBkweMC3dGw9",
  "key12": "N4ZksMuSra4Z3H8ZbfCyGGdUEzLF8dkXJADHfSikvfYkVZnaPsnVQ59mBamVYZ7MKhLuhJoRddGAdGqrL5gmdJc",
  "key13": "5LBu1PkAvd2ghBp7KGegPygGijmhgtUqjFj3sCDeNqGMTWwxN6Emu8vke5sjdVdsCBUc47mrQe8XPpmqGSSADU4",
  "key14": "2bJKGcgeZsJmwjzrHsjkEx3UJ9gKyDbMNm7kV1cFfPfvzxLgaB8QnQNLaCQuhz79LdcfY7eJnWdMzrjyMfPef8uo",
  "key15": "2M6Nrcf6i9LhRLxyrFRxtARFvHvPqEiGwr73AzYxyb5JuK7CjCjoT2n9QxuEEgXTVLA3UfRX8YDmXQKo29yqnGZj",
  "key16": "5gY6SDLfM6wpaPT39esyxYRVypAK1iStVYuVUuckXo3u4MmWboxi3KcpdufomeNB9PfTi3Ki6s2KLyh6a31NcBuq",
  "key17": "51puQRwYAGrx5mfPxUzqBtX1SSaHHKZcnEBvLgoKBDpwFVRY16cBUiGDUEEUgCENyYzqphoxkzVXPFdtAtpExsEd",
  "key18": "47eB5jqozMbdg8WphHEBS8GkmbQJ9mshfHFWit4BTigvxdncfZEDS6hrv2njgLBHc8hhKBioTfqZSPJz5cxDgkQe",
  "key19": "2F66LRfTWUBcGweZg2ggMWNGGcWexRkn3DVRRbj5PSy86fwZeWry7MNoSX1tXN1NGinbWLDgfUQkKRTB6MqAviMf",
  "key20": "3ZHgGo5tPbiVgj8EqbXsA9KgPtReHmqG83oKxCyFK3V1iAXcYr5nDNm6i4g2VogxxEi84tY7qEVbwiaykhNpsHEt",
  "key21": "VVCasRApHQt2n2UEs3vhNmhPt7YBvwS4LvgS9HTrDgS7M5r43kZKTTdaj2qtAq6F7inBZhPaD3GVRRYknVbNRSt",
  "key22": "dxAhtFXmxkDjU1BtMrjSVgDJp5rtLLsEgtNa3jXupEGbtuwtdw4Rcbt6Rh7nHC175bBHcHD36HwkRwxUrugNMtt",
  "key23": "4cvT4UYUT5awnkLAgotiBVSHYpB3HAgYfFAr2uxboR9R9xhxjbWSkLfg9iSCKbJx8fPf4LqNhZ2XqquWKPBt3hVf",
  "key24": "1nZMUodjdjztyLTwpvZPUZLHpUTbeVbEiD9KhoWMbKFhibLTfaesAA869B254jWioNkbWsdc3GjNrpdCvnvgV4z",
  "key25": "25Yj9oEEC6zFtgCqnLKnTq1ashUHcUgwDbDMkjkye9Zxg6sL6NK3oyfxrnzSD9TzAQdg5WyW1URNAirV1Fv4nSkZ",
  "key26": "3UE8pnAZfRoaQRcB7wGbo7Pqtc6jNpRuQnTWKwiGLHyTJ27KiFkLGzvtiy7S8pUzY7yKNHrvcE3oVwim1ZSwhSY",
  "key27": "2Tgc6WuJ5svbtU6tHwsrdiA8EJhsEBAzjWiMwbkh3D8YidRmQdHKbiTBD9JBGWKKB4EPWnwJ6pEBUgkhkAZMBma2",
  "key28": "67XDTd3Z7z3pSq7qWVAgW31WD6eWjE6QU1B98WctqV6xBow74AFBQ33H9xVViEzJErHhEbTUMGYgWpktusuHs2XR",
  "key29": "4Do9J1YDMQ1mBjRGhTNySDUvGDDgHUNpz5PGnAYWiAiTMJDDFvEYp44DXJ1b3H88GHiSt7hJ9sZKPDHJ8LuSVQwe",
  "key30": "4KCFbzUc6CSpJXtqr3njJyXA2CBBtJxRnxBY1podQg6rQ5nibSgDVzhSZjTSHyWfRTfJjgudTT9MaonSqaZRhyjs",
  "key31": "3xxozYr8SKRaUqqTSFSTVBvKubSgk5oqnJHkfFkie2fo8US3v56GDUdF6jzwNfhwrbuskYAkT3qnHpGJSvLJ9y1M",
  "key32": "4AMi28tzYpfqeY6XTHy8yzSXT1YPQQzVvf5adFEnibaHeSgHRFYMoE1Sht8a3PWPmDmSBug547ofD4BsQKBZgyCp",
  "key33": "2fFJEJi34krPziCDtzUpqyUBz7ue59SHEWcVeqaERwxaessdwF8VVowy1fBQUcMMFbY6k6vWvWXoSq7b1W61CAk6",
  "key34": "3aZjmkWJ4Xg7KJ1qMS1iwqc5f6DZyNTSyH1fjHXWjRwd9TQXiNg2QG57t6dvQy3cMXq31BwwZWJZcTAv5jhykTVm"
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
