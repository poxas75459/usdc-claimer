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
    "3ke4zDJcLXHCcyNwRubb1D8Ptpsy6JYpoELcWLFP1NGA5JF5XSB95Sw8KUsKmjEobWGwygHsorcb7GbmsZHxbZ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2bD7bokPi6PyE7GEvCJnP5DrHgTCv9kQNnFq7i8Vw2GuhY1KbJYRcga1esSBoo7EetKno3WY8MdJfBRXvwVzfJ",
  "key1": "6S2qPaCiBjLDkK87DF1oYsLfyYow7g8EvKThrf1uxb2Eyi4FrTBhimtR4cZ1cHp7EGjAmjPQEA2zEH13j3ADZ5j",
  "key2": "2wS3VmezchNgDHiNH7S6KGReGvXWBCpcwfYphLLLJ2PMtcKzSnsPj6XvQwTbeXNBw9KBXuL99YG11tb5xHNXtb7A",
  "key3": "5i4GRrK32VGVLPTK4PmqmAvUpfKtgzz8R1RLZm5uE3mx42PzjYEhKi8PVYMjDFocM9TFGqArApdoEDXYXMw1MtVA",
  "key4": "EgmEsr13mUFsFx67sQxr9bXqrsVwzWJTDjGGm974CbGz2C21EBTkDCvkEC1aG2tvix6TxdJxgPwnWiYRcH6zvEP",
  "key5": "9gaPZEty6eq7aGf9smj4ybQFkpVMUrs5mTTfLwjgaFaknPiFCFiH4fPxebzxLDvjqBjDxSr6A1mTF3W6C8kvdub",
  "key6": "5N5ugoZKaaAYAsxXK6FkrYxkUpJXVhvBj8qPSTSYzNLK4CfUQtFjC7cCFjJh8qwqzBRCokHm3NZddyZ7FfSHcUEv",
  "key7": "4HMPavuhzE1bzvru5gs9GGGRgJq1gsu1t5oDgdNKvRcqDPPdEDrpHSS6RCoRQAsfS3ofLkskFgQAi94qPUtwD2w5",
  "key8": "4ekS7PoNSQCwJBE7waXYbJG7JCMyV4vAM9igsC7LSzKVt4gPoagMDWCcUp6akSKmFGrrRpm2bGQB8HnovHgGnhiU",
  "key9": "4LqKizFuUgKkcKQw4rKNw5NDShSHfTpNkz5XNqC5yAQ2HcZzWNAMNKrE6kbfosbkmvjkfdfQEoNrXo5G8LTpQ84M",
  "key10": "4ifrpPwykdWn9jhoPdmeYS6sMjbUF2MRMp9cUtiPdkznn7Uy1ryYYYaLwgPRTbfJJVKyEPijhgZZtaB5JXa5JRyp",
  "key11": "3dRJXtXrsww24dFz5wQ8UVkqPZD2Um2k9YLr1qNvgfEdUnuM44E1phUhoCLwcYdWw6kDc3Rh9Vs2GzyoP2KffGqF",
  "key12": "2ynwEY79heZRjkPVwdNrwzoZTjBdpRqbXGLsJ4XYLpf7c8M27QzvRTQ35a2Euty56a2hdwQLw2KRyYJCKgpvpXwt",
  "key13": "5qRq16yxcNAuBxX9sDaRbqKfZ4ypBX5SWGYmhN798eEhPrXvWgg8VPtPxqntWX1P8FJtWFCToZ4ok7niL7ixTXfx",
  "key14": "2tUpDbpALNkMqJBUmGKmBpBG5HQwR4bBYBfymHk6zmr1pkMKwgrp7mdP3WCwjdEod2vXYQrZsMCRNjNpJseiSDHU",
  "key15": "23LoPehs5FCnz6J6WoiycYUZuW9C8sF3BfTP44pzWFkwLFTicqGn13UqWtPYPUApctMvptf8rBREmzHeNhVnSG5X",
  "key16": "4UJkvNyKjs8RENEiW1Rq9Uka14Y9kZfFtGpATUoZaQkXLBHEwWnguFFqSnb7Gbr8KpE2MpZV5eqYJTXVuHvthsQc",
  "key17": "4zSqiU6iBFPBX7DYjVTvg9SZdUA8fv6mcRtMvowUVtghRjtTtwnDJaY5kHgJXZQHYk9gF2gezcynQxcZcYRdiQXL",
  "key18": "29kxGghYV2buYD4AVrDXz7Bq1KzF45E31yYzhXH2ZEyhe7QS4BkyzgcaeKDwzMUgeij4U5WDjjV8w8PvkHaC1sHV",
  "key19": "4MNAZm5A5VBeCC4TRmAD28YeaD3mQmBYkJ6FtDPJUzVzzsdEAnsSGPv1NeKLNZgxBddidH7pyiiEQY1fjH1sQj1k",
  "key20": "224WhxziPuoEZnvXXGQz9qBj8G9aLvGZmK3xy6pUWZCTpcgF6RtYZ6LQMXAoSTiYUxxYTk1YVDHhW1ARmbKaKc7v",
  "key21": "67bBeUoYncHeb5ayonZfB4BPLntJdwpwhW96U11vC7whUM6tspQzcow9s8ZPgC5724Wn8rETcxA4s2so5nYDwNrq",
  "key22": "5T8QEuY1d6ggakwuJj7xNJT2maZtRirUN5G9JyEzhyBt5mF7PGrVoEZ2Mo7F1nDKPdaVbmFMpPHnvwkpawbJmRqF",
  "key23": "3nnCn5gvS4jKDCrmm3pX2LwPd6PbazPganXe91QPt1fFeaZGokg4DNKrSftd5QjtZ4zLHRb2Pig2rF3oVShAZyMt",
  "key24": "3jQsmBqMoyDMiUXT4CRiBQS7bLkiwXYf7GJnJLSCZhCzVqAgFVCqzmPZfkP7yB7e3qiwP1hbCmXb7GQP5jnATT3W",
  "key25": "3qUGFWdPwqpv4z9YBAfQ9b2s2jfXQnVXT3pKduEyLzQ9hqhG6Rozd2ux7mTYSmF8A3CfE7FgxgWRnabfEqZojfXj",
  "key26": "EjtGNkn9pTP6VmMYmthtZVSJCCxpS3REAJProUiJAVzUyLrwjJDLZqwvc9mPdoqmyaMcfqSF8wA1T52p7QoKvLN",
  "key27": "2TBemLTZuX9kCekGmkEeBPKHR7oQX5Z6qeBXwRpWmPQqP8M7phh7J9NzBxUQEHzTLmWaiwajjNio5vRefjkb4Moz",
  "key28": "2oVaWVi76X7VPF6QCgs4CFHwgdL3QQaXwiHhuAKrFK8sLw5eabmiAPXEBRxEH9d4SqhmUkfgrCPYHAtxsHNfuvXw",
  "key29": "4GAwqKT17xptauMjxwCgmTdRXACyrtjLRvyXHsy9pW6LyQSPC7RVAzMmdXKzqPA14Rou4igKon15VfRNMFdnYfNf",
  "key30": "3wNwzQGGdUzcFEd2ndjNABekE4A2NZbiZtAVD4hpTjnwnHaACKGt4w5ZSDgKDCBPumKqBvBKZdU4VLSWDMRLnFZh",
  "key31": "5irSPiyauTAbgedsUz4s9WeDgJpku6S3kwndAjYcHhD7oe9QF2zD4xSyKsReSThjSJjJFvz9WbV1MCD64CMJUj4c",
  "key32": "izV1R28msYhjbTKB12UD42H1xjQrRkgAkP72iXAZMQXZ2YFtL4hWEFV8PE4hJLkjrgSn5775hVhJKWcdsWtg1Xy",
  "key33": "5kG8RGgwihyn3J3fpQVwtXrrYfQHXFyVJgSQMa58bruET1x3T3quKNLBJCZ6DRkrysALKs2FdVqqr95Qdi6nPK7n",
  "key34": "3LLtPx4domLRMC3fv8zvLczgM2xFzP3KuURAMc2jjormf25SZfLMkGTWXbL9RsReRJ2pSLEHzYccoSsr5joNeEd5",
  "key35": "2mhBJWoeEQFPQ3EQCLYABrnDnsErujNGURv38nF6vPLmnzCvSM8s9136fmqjxKPhDPNaDNVjsPir663zWAZLBzhB",
  "key36": "5HtS8XQT8qT9mbqjvHLXmXzVtxAMF8PV78H1tRXECaah3sHrsBGYr8C8CcSZysenn1vanSYGGE5PL5dwLneyBb9J",
  "key37": "AFu4qduUcCifWaPgYBqXhaDsVJgEsczQmNVcNjBpfxeRYiEsrqJsTG7CzbuFFLuB4YXkGipfcgPzAjJPvPfAtTh",
  "key38": "5VUcGqQrxG3XagnehkN2NJfbbZPPu8QgBRaNPPbAh5CcPi8LLFj5PY5FP12SfkSLq8hEv2EDFNcQ2RzmDiMNf43h",
  "key39": "5BeP1Vx6CQMF91wMbxVfaP7itzH7RHovuSQ82LBq89VHagWonHhz9T7FgKpZNembR5rMRbdJgL6Mjkk74saPwzNg",
  "key40": "34UfcVod46H4zkDqjAvMXUrazXYnVpnHxZHwS9MbHSoyTXNSZodRzTvuPEctw6qXAC7fwzmzrodgyZ84bJ2HJLmS",
  "key41": "2Bf5xS78F7XDRjt2Y9N87CbNvqucYKNXGg6XM1NzQB2T1WA2AieEY21mze63N1J2QWYchmjXu7J4Wf5ATzHsXwMF",
  "key42": "3f5ExrshJpgAJzQaZLbNdQSqgJsCq5AiiDNafbonRumVxFzi5zmsuX78AMazPaSHmcYLS4yQQ6bLx1dqb5wNh2XV",
  "key43": "6eNSBT5prsroSLnsuJ6wDtZu7NyZFy1isQqdeeBoTxjWGmzc1PwPgdYXB2fbJdNtr9HdmvDjr8EcDk3y8EchYGq",
  "key44": "5zzHV4tAcMZw24NetUqHMBfV6uZMScX6TiaFZqGNTMtVLXApJJSRobz58hkNvMLbEP5p26NeY29h9CpzxZ6FqFWY",
  "key45": "uw6DzUXGkLak12HfCuYhc3n1UMYdd54mMXMqyEGMDWv95jTJoKjGyvM7ybknEWFCMPiDLf4JLU6Y7QDQyitVpDX"
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
