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
    "NyNj5SZPcwvytbbaeQjHXmC1PYVvn82i6uF1Cqwff5WfZGpCtWKeabsBHbZu5Zf1VYXrUMDLk3tg82vJZTYdy6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBeGqiARfbqDonnFGzbUCrCC1j7seBTwfwEU7eY2U7Fr9sM28pNDu7XjxzqtbN5wWshJ63gJ2ApNQTiEqrq4ihz",
  "key1": "5oZse2JZaGm9MEShFSC6PYp5Za4MHjCbxKi3pKAWQRveLQtte4MY2o6ezTmJrALHMGUffCvPKfDTZ7vE2tT7y6ZN",
  "key2": "5M6tyXdKC6DLGFXpmpKxSKdbjfMqzJbY7SLmBzny4p7dazKcdcqp1JUqJsrJ2A3EHV4adZrCZNJB9HLDrasG4Cs8",
  "key3": "32sZoe4RbZqQjrfQGFawoHkDx1iiQGtBs1AdNH6AS94C2EvJEhqFvENsY1xBfzcBovL5JbyRMFFroon2rscAwu4C",
  "key4": "rxasn4h4anoTouuJADaMLaTr45HeFaGZh31Hy4Gw7LK9ZqYsFnwoQGLJdRvdEuZrjKThXGWd1Jhon2KpzhFERGJ",
  "key5": "5KbYKsVYQdrsrvKX8kjq9w2F5dYVrYzoWp84AgQvuLp72f96oSBy2MzNJ8ZSJ3eLAEKU1Lvh5dwT6bj3AmhtxAC3",
  "key6": "2VmfVpDXNfPAkZ3XUkW2jRmv4PSxMWVepTpScTcNaFtbAMfWbPdBRTZGeDxFE8bdpWrojd93uopnpnP8JNhEcXqZ",
  "key7": "2YNbwzzbepz4cekwCYmf2Q3uC4bPWVVdhSLfbG2nMFVpaSZzMLV8k83Gd4J3koATX7bL5LQiedCeirFrkqwjwc2v",
  "key8": "2gZUdu9XTKt2Tqk1QYBQz9XbBHahb5EHisLUqhGKGBeTbtLSkUFdHq7LLnaC6zEDGMznNLXLpQ7n3YTpW7EJZ9kf",
  "key9": "2k5HS7GGZpmfGqcBB5MjnNYVTyiAwQYXfQVMdhTjmMWiDFbcNJhoc99tgQVFQQDMtDuTjiiNmMQFMVTMPYw46Erp",
  "key10": "E1AHzYMaePwYkwcjREFXCLQvMNBmQgkyjcPHUYznsAckxKvmCnGbM6g5gFeBFrVXKfNJGgCFpE4MTK4rgQK8itB",
  "key11": "2fm2W7sJtScu2DSqzHtW1XDVwuRj9zNATRY29nUDgmdTvEUpsm9h1QHYtYTtH77zeyCkUuHRbm4RUoyMHW3iSgTc",
  "key12": "2DbKr1sBa8FtEbKM4EwVm4X23HcRqHVJTvC5sRqRXjCVPnDFYLZdzu8CCdf4Fwnz3rDFfXqxem2K82f3G9Niwz54",
  "key13": "445VKvQxTsEYDuCswo1XfDfktEZ2LhFHTM2WgBeZjEbvfYYGWgdSA8GBZdpu9KxaUyZjaSFVAeufBKMZ2hVZ9asH",
  "key14": "2noyXXGqSvPWaScM1dKADSgzMT3rS1kcViPJ8yASyVxE7EGVkZPNHZYPDxxKHvyhQghnHNtE7o3E2VXgiqJ5gitw",
  "key15": "2xmqQt449WDUKm4rNzjHwjkWZZ6ERL2sp642HTPcjDmKzNeKyKLsqD35MMXN2HXZue858kN6kpz1QbNLUUpmMgUR",
  "key16": "3BW41WJ12rJGC8ewc7JMGVHarEmUL3SyAnJDfchK7XWSCVGjeQAAUFS7bexGYkVBtvJpJkrv2f2inmzLHeoLkpU8",
  "key17": "2RVLEHeYunvskpGaU4k4otehcYbLB4oZ1EAVRmSqUF8DtNgZuu1vYCwUmERsuMnFWNATmmsbGjYqpwgQYfDhBwdF",
  "key18": "2Ujg9cm9nY7xFBjCv1n57siaoBvbU8NtMiJRfJSM5i4ccFSaEfVuXrGKraX3BpHgsAnz1TTRrEeamHHnT1hXqBng",
  "key19": "4imMzW3hDaCTzjVuewzxSLVzZUtZgutcNKCogrPJB3J1VehGN8zgsgUpsG6v8BJgfgo6Y4arSBc6cFa5roKRSFFc",
  "key20": "3NfqQ5SSjMRxdkr5DurpnX1E82qAsAJTmgLoNim4J2QjiHn6msUoKtHL8CroSXfD4QDbv86K9vXTQjfTpCWWgSPe",
  "key21": "3FgQT7KskrFTzcjxDedUeNLUgV1jsM9a2N5K4mEeracWLKmscNjpLxF6hR94Xi4Gdef6jiKbtiDWMT42n6wyFPsh",
  "key22": "4gJpWHdZVvcTMVeimpcX8NG1uasL4Z4kiiwoMUCbPbMxjpeRjgZmto9HxzF3zDnCEjWYypbFhwQzhaHyAvGqPdSV",
  "key23": "5TPSDMrBGQkW5GF8KAMB8LPqGMS8mJcfbWNia4yh2n7cpa53v9b9ZgX1TJc5ref3xARXp9Ew7UPcYLeaD9w1N2TP",
  "key24": "2JsF6czmfDL5vQQnESA4KTs8CergAoaN9hirEgvwUu3AgPdaMy9ARTxcfe6fQaAED2x7xEnYz1rFqQrpGEZLVauJ",
  "key25": "g5C1m8xUBgH41RVYvQ7Js7TiGALPgNHv8FnCrLcfFGQ1Cr3H8rqg2FtkJuuSgqc2k9GW2kGAh7HuDMBqoYi57HN",
  "key26": "4JThRbwHBKf9ZAxfDxnR493xap6ymWCjEB3fz8g82BhaiqjtWiEek6SioLGJEnnW75MKSjJ3WKHE7cqbFKjyghgC",
  "key27": "3RhUcBNL2Fy1NPL1FHZdSJzbSHn4kivdxyU4J4ZZLrSd664dSWbKniYXNCaApfnMNCK6mxxuQ11r2weJN35fU9r1",
  "key28": "4NEoiW1s6rMTGjvseC9M5XC93qqEFUvmpFZNchSZgUfghTfgGnyHb5mRcBi428boNSFXw7cLLadFA919X4z9Rtsr"
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
