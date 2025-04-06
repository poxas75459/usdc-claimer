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
    "4FmXRsuFYFc3YuWPYzEpEMgXto4jMd9DtBaeyc6htBewiqHTsjBRGMJcMw9NGJViNEZW8rTdHBNtRLsfrUPDtNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckqVLSGHPubKqSSVtqgDVZN3RaXDnC8RZanQzevy1E8YnXnBod6pJ74qw7yzaVepXbyDMrsThxzTjRtHkx2wWCD",
  "key1": "w9uqf8GxqVRrCwzjGYjrrbqy4Ucr4hFWTW781ptmKG3hurh7ua69byX9Fr4tniJRCoBKKXqCDgPSFeBEYozHVY9",
  "key2": "28EnMLR2zbuoEzSkQy9H73LSj6q9yubAr2CpAppwuUwkfh6vcgGD9xgggfMupHg7aX3ykem8PAvsVLPuoZqFqsWv",
  "key3": "4s16uu6DKHQRZUr8Hf8GLR8tFYZF81o85gG3VKLgeSR4NWNVakZqbmN6ch8EFErwRr31nzTMDMcWd9yoBCybNGRw",
  "key4": "8X5xeyp418Xsk3BJGBckuEeDE58cBwcGS7ziYPvBPfbRhZdEiokT8RYjFvranF985VMXrNaLM72aodtF8bmopjp",
  "key5": "4Uy4AEPmHxMHrCFu9TNE6hTVBDxeEiPXcjipQS6Npqkoyn1j7X9zZoBb35jpmSUiVm9HcACToyqBk2PkPagzprEr",
  "key6": "4caTDn7S5uJJPdzPpipgGvUopLV3Z8GryTAiqXVZKJDzg2o8dv5K2NHAEE2gqrm6XRvEETrhNtTexHBhFYbJbs59",
  "key7": "2i5BHZ9jX1GQM4fGAasrFut7Gimuoc8rUQgunbWW8P3h4fWAPuQZ7yFU5oAF61yaakW9toDS1GHZWTZybozU92yN",
  "key8": "ZAvZGN3Q4LSSHjPsAPnCATHnz9mYqPW6gR6kcjUBNmn9Tuuo49phpNndtyvQ4Yx5pbJnGeyzrNPeJ7E97L6NarN",
  "key9": "4HxGrEp6ozmuCrmLGqiyP1hxZXu8sy9dbU51eu3X7aeH6QV3xPNDRcn4NtvLBbSQiiBFDMP2zQqsH1nNxZE4p1wj",
  "key10": "645GQ7jDCJA82HDvEbFmtBiiaYufcu3si1vDpAjG3yLp6yeGF2U2pajZgTBDuk3sE1DZsGT8pw3TiQy1wfzEmqos",
  "key11": "639u628JrkwDe1txMKcmbgXC6UsTaqPY7joieeKiGqo5FFJbQSho9N1Vsbfv5u7JxV9zuBk5zw69CPDL4pFRdjJb",
  "key12": "5L4sRLW8PwLGYUhJiqeJHxjJwAtHR6wrEZSmkrZgCYwHcX2a42GRjkqpVaXeoZdyqQ9UiPV5ih8YygDKSkf1bbAE",
  "key13": "5xYdjhoJ6KmTB1kFfeCLV3YbvBobvyp6tjLqFW1tp5vEc7iLYqgGWHQ9hA1x2AdkJzzir8L5T6rLL5ppEWaWoG27",
  "key14": "5ex8LUXHwWmDeYkTGjfNEKmRq7hJ9137VCqu4228oebFwj5qUmPbqtNw8RGZGj2TumehPmnSMpzjL4DdmaZn1a6",
  "key15": "t1TbavjBXiCWwvgzsaJozUJfUGMnU1g1mxHrSY8YycH2LLGUDEky294xmUbyvf12ncdHySDLJ14xz2kJpYA2NVq",
  "key16": "4DmeUhCEvohGHDdBJ7nHzXQtuUuvWzL2DCbCyQb8D857mhpTL7p1BHhBur2MhpR3EkiAVySRXqqLNCTCwmxMRzWy",
  "key17": "67mmSuTVPUVngfm7uUQS5bciXqp49Ezsz6rV1NEJGTjw9GrNNWZgDYEtzdkyfXogWZQyA3u7qevCKXFM9FeLrui9",
  "key18": "4cXtCR3puHFf8jEUnRP78fMfVzqC6ABF1evRY5vWacTGcgC84MRrZvLoCWNhi5fZzXedXEcSVUDy6emEwJwehimC",
  "key19": "2xNZAHT9KJzSyHEa4M394gMmHFSZXHVhdrcJ54vTU92L1LTwukuGEmpNVn66j7DCxSY8ux7yxvMHo2Jxj5WGddyy",
  "key20": "5idBD1B2s9KTYFAVQgUqL1qCb4PDHgmc5Qd595N4vcYHEQauwdzAiZkmDvn6bNQsU46RNFJACf8RyVxVT7BxrovF",
  "key21": "3GTC8XGQTawEiWKZiwBT4UGuabPBcrC1YJZTer3cYTBFwf3w8UaZuarY3naRWNhERDrRbvhLMMMxwg1PnburCck1",
  "key22": "5gAKnHJAChWXi6XgzMpHn5M1DUMgH8D5tpFbhmH6djKrJ5C4VHhLFCKQUm5aVeCVvApgKucr88CUJ3wcjJZTqnuC",
  "key23": "3kFkcHcDTMsYhM4zqWop2JJnzUyFazfVWXAG7NS2yM3LfU9rarwYjXwGcz4FXs9KbmX2xGAsX92VT5dUVkCGotBs",
  "key24": "5KEXerSQgHMpQJvnMvbVPTDr1RkmNK7zBf4vRW9cJRFXWZHXNnPJScRs3Coc5no41TWWA8Hp3SenLLcMGKFERPpr",
  "key25": "5rTw9uuE1DNF46JEy7vgC26VJXbZfnBXZcFz9NThsonm6ab3MZ7Zig9ZbksgzJKpB4GQZw2fvSCkYrx6qFDSKT9N",
  "key26": "2UxPSdtxwcNtufAYpjnxuATdB7NtZmb37deSMQzuqGdFURjENg8M9Ry9cP5jf3AhtKQwqBN3VvNdGM7kGZJqUVKF",
  "key27": "65LxZ5bXY8QSzjnYREZhMmD7d3esM7aFB8S5p21k7QMtU9GWsJ6J6jfbjemmsrphgt9M1gwkq4wh3wfGQ3AnrHPZ",
  "key28": "5TLhTBXLbhAPhvbhWJqgty6mWfh5YskFe5Bp3CnuvX2wc67Z4uUc3HiAiNGkmFMcEfPBsArSo7C2Mt4aDwcxpSX5",
  "key29": "4apecEJrFaUeqkNexouZU8idGBSSokpZSuKtURUgBcYgywMrpqMSgKZchxANhtyDLS4somFNBJGqGXuDzZv95MqR",
  "key30": "rHMhEhNN1UPZtEA54PimLfZrTpzxc2GRfecvQogYKyPMLui8tiKpqVhFVhq4oaREYyVEdvC8axgQhc37RWLAKhp",
  "key31": "6VMZFNYxBV6KEiEvC9LQdFADkCX2LodgrhxuZ515QhN5NbyuFERQCx17b6FTxz1QaKVydYJtmjNU9jPVjSTfHiW",
  "key32": "4etD96K3MymFRZMr5qnwRZA73R55WarfjsR1WtytLyf1iminKK1GYSJqh1myw58rYPKaBGjWuQuEaCnhS6ioMdTp",
  "key33": "4qbsgThv7ikb35TLDurQoV9T4FDtUFZ6zHHfBXhBn9CB1Y66psjWPTi1UEQhEQtQFKrCedy5JxydJyDJy3GqaTx9",
  "key34": "4UkrWEg1b6i8DXBqjRQY4XoyTE78hpaWUBQfRiy5xmqdLBpA7egDqCdvhg39PxWLqhFL6tJeuAiBFNvxdDcESXUd",
  "key35": "59Uc5yZSSmzpD78f9JSErCQyAeft7eYg5eXFixam39k38JrMwfdkr1w8GBmAwdASkeKmXWdmmpdrYkfKTrTyTUMS",
  "key36": "41n6aAWhxU6Bu2jhEedED42VeQQYPBo2ovMRyBtwugpDVyktZW1DJg7uijg5XUzCzHNE8ssb9k9p3kUMh3rsL6yM",
  "key37": "2E3M9vKoWQBMFxo8SXFEANVqyKydwbTe8MsqDZBUHCF5voECSeFBcTBnjyxrwspMZWgjnPcFZLiuMSrGJ38jNQW7",
  "key38": "LsfhoYSFUEwKbRu84oPYU2gwFHyxThwaXGnLheiqSGdHkpdsbw7NewRyvDfJcYvX1JGdmbGcKGMP6iiQh42chFi",
  "key39": "2Z752di7cxcyx8BA7Ufmxt6VtGseR81CGckEWSZhnuHFc5iJJKxWiwykkqkScWtrjXhTmfFU3ym46j6JTS3ZqQu6",
  "key40": "4LWjNWemjEnCc6iwtKrpMdywm7r9tnjHgptmh59TDrT9a1D2J3u7CuZv7c9Hwb5UjKRevALUmxVZFtTZxPN7oAoa",
  "key41": "DU1L5Haepwuvp9MHCiutqp62UBmmj2eLCwdvuyzrJvp3j4HX3AUdyHJvmy4G8jsb6UVJxwq4QJvcBBBav9ZiVZG",
  "key42": "2nth178oJXoJrnGmr5zZZRU6NkQQmeMMjzDaYZqiiq2Bp8rzFYzu3JeZufyeknNcwj82aKkQH5VAozmr9nJGE5Cb"
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
