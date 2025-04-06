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
    "a4L38gasxm6rgr1SaYtMkkb8ATCTc928euwNkMeV2E766yvAKn7SrcQ5uUJWcmYRiJBAwUDBvmFEtR79YDpsdNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425Apy38BaLE1WSz5YC1fftnQn2TWiDuqdHyA6TAARZU5HS2b1PAfqrT2aJWZBpoX6Usin4TqXgWoiiWoMFbMtYW",
  "key1": "5iaki1Hr9HRAJENPRotqT4K7VgaPF84ze8eEbwRJ3rzLqTtHxsCwMUrtmQNUpPdKgQj6deth8tLiuVGAgodEpvJ7",
  "key2": "5sZcPQppXDfCSmkmtzVadh3vWrjSiFHFvwjUj2dxbLyd4MreRYDn8NCeDZHxXeWDWeLbVYLs7MRk1aNhqNPQCcfi",
  "key3": "tMKFvvmykq2D3jaF7XLVSGh5KS4jZeuFNokTQ3wgPxcESUd4BU66dfGD3feQ4oMQu379R3faz6YVYbqQFYkb8Ut",
  "key4": "3bS1Yoqzi65mc4jtdBKu1MwdJx3FG3tJihGyBRoaXtPhWpN1KdVtSC4G9LuyPEQWpAPCwAYZkkmGyVpgoLHWVTPp",
  "key5": "4p5Dn2ReC1ueoHHE7RJUgdSr9VDvA4492ZqhGWBLRSc7dSWeGo1KfPADRpA9M6WWaMbi18isgpKJjQEPqqFT7eYy",
  "key6": "4hvs3V8w4L3haA857aRG7Bxo3uDXUAjV1zpZXsPNuPcVz8X8TMXuXNesPJ3HcaUXn4xZsSstoKWXPveKcVE7DCjJ",
  "key7": "3dHrtGfUG6L15Qjar7i3Aayax8hL7N4DUNxDUp2PLDWZLXZSmHkaLwAgsd9Mi8EfYxchzqGUpesBtnA8M2aB8QyJ",
  "key8": "2XML8TqKdRaUyshxHrDG1qRGZLF4MfbAnyEurbVCSgFfkgnGK2rzqoyqfEohw5pySUQP4GxQsgzSBeoeW4Hhzuav",
  "key9": "57pckmqHSQrMKtNfc2565HyMqWpdiMzTibBPCTiKWdtpcdP6X4P6uBdDD5JRaAJ2egEV9JBJ8qqfTQNMAC3PQiCc",
  "key10": "62fcTqM46wVpCd1xyfygjjr3RBxU5AKFHbELqoJRj1qehApFekJ7dtjH9ecErX26ASYzW1kYPqrsReNp6zHUBPBB",
  "key11": "4nnjkvNPmZcCGUmAn8yotZ9NHmqrCzqDeMNWw2Uci3n3qTMnwHHUxsF1fcRN1N6BReQP4fTNYtUGuyQvZQS5rN54",
  "key12": "4GY5oZEH3wJn6N1BqkYUjDf9cWsK4isZwhHDYoCU1gvGtNjoFcNnEKig52HoLQrdqwc181QXz1sepH6nFwVpq3GK",
  "key13": "4Jr4ByEAHG5DKrwU97PEgVmtF5xUNs7JrCZP6QDdZxfD8EKBXrVSyY1sCVeZWF7kCbgL1PPAhYrESFZnbCLJEWVW",
  "key14": "46PjUng99CwEwHQZpLaU4aptwAf43b6i2aQz8xveEvqJE1myeExUtuCWqcBTZsmKAbPRjRKX8fmii1fFuvuaEpLR",
  "key15": "TWB99Hh1ToS7Q93GmAJJULpH5bZSm8pamoEQuqRJQyNVm6caSBHDvnZC7NWE64xV8Mnzr54Gse1DXqg6VCedSCr",
  "key16": "3qkxYRxPHSsvUkQsWYdNuEqyWaU68YELXzsKwfVPHXgCYCshnkM8Gcr4SFnY6zvo95RwCDvPK7VRxgn3chVJzmMw",
  "key17": "5XxrCDtE9yJYUyxztnxAM1erXpMomPxUFiB6HMVsq1m8SpjAFagRbX5ooUyYn5k41kK6Uff2ZF8UjZthwwcq3ont",
  "key18": "62fCRG3we7Qojxo7WtqPAM3KGN5pq8vMa1xSJufWJnEPpyp5YMZGBcxJ4oGYHsSZU44jkNSSwTobXHGDEzVqMbgb",
  "key19": "4mm4qHMsGGcQMnLPyrhM8nybKo84Xi98t6CRqFA61Ucv6z2XkfPv3YrypGpCCMbwQfkzi7J1CqZS1WPQpgAaNgTJ",
  "key20": "4PiWY5GBRAohc91BaxxsVAfnMeRgXikqCtNtH6d2jYgjprthY9LcdxXtrheLqFhP81AxUQ9m4j91rA8s7vZpuvgf",
  "key21": "5xMB5DQ8uJrcoWdd8tn3QezxSntWf68SnnwXaL94BGu7AugX9QdT9GGFYUCTWh3ek1ikn2AT31KYMXGPio19oHYU",
  "key22": "3fsp5YhuFWwU3aHPrx91JzXR944gFsNKzeUTGRkovi12PDqxuBbwTXRwB24GjqBYCn2yjmNfHoYtpFrmWQU4auTN",
  "key23": "5ZqiurcrXGPQoKT37mByNrt4iKRwA6zj17LJoxH9wdKo2cPtqn4ikLdTNq5yRu75tzdQTqazC524HUkzfocdYm1M",
  "key24": "3wf3mDr9wCvoFc9AQGU3w8L7HKgU2e6vZ4qzTSuaLd1FbbMzTijvemT5hfeUkbLTXZ2wscRNvrWwe258smatyVrk",
  "key25": "3JdGeQSN4HCfABUCgutbhodPhB7weLixBCJVcGAovQTbgPeeDU3PLWdKnHoaASCPDM19JePb6Q2tXgyyUCm7GpPM",
  "key26": "2LVw1jYUAWgmaU3PvqAwJ3Q6R8PGEWUecMsfcQybmqTxkVEZXGSCc7CM6cidTD6Sdz3BNc4hXTmtnBTKMBDz4pEs",
  "key27": "2wPNUruwZf1eFYBh3ZAEgwnivwsaHmQYDDFD3TchZxJfHESWGv3wdy2mDg1sgjrcmmX6XN79TRVsweY7rQWHynsQ",
  "key28": "3ndzDjjAk6wEcE3krxrq7CEa9e8VBQQQrcVegGpGuoGc9e4zJTbKwAJxibopux5A5ga47W7isE5Eb7ixzvzbPbcv",
  "key29": "bNhTekKWxkBfwFEcNnyX1cR8oqhc9MdkWc5zN2vKguR5tBBtrY6YvpBPkPr9NifcGyXvJEWe6BAu23fksccEoqT"
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
