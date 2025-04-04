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
    "4LVMnxhdueJys347sjn5PVsu81BVh9qHJRujhhxe4JsbQ5to7jSaa7DZCP12DSwSmyQx3DH59Qk8kPajxDM2RMMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kuFakCgDsxzXmGTQJzcSB9rziAMVYf8BsBE5vFG7sYXMfXx7j6d62UXpYB2QKHCj9B2DDJyhFUaq4hCEwiP9u4e",
  "key1": "4WBLqh3FtNV78qhwdnNRFG8VcMhjeXqtyhAVRrLKLq9N6BsH59vwJ3XwT9JZZs9z1eXRMSXAAzymY2HzJBE9YADR",
  "key2": "Q3tz1ckqKHLzwdg6aKQsFhJiPjEu5qqaEKyDvawPUPJoFGEavrBpv6zMWwAHG68Ecsc12YkhAgQcRsW8dmCoLoD",
  "key3": "2Dj9m3SWoVGHn7dzKNY9LdtYp6a3hWAKYBZWkhKSKtr28M8bUncHvTtbrVanrZc39E5xkyRQWRjoiiYDDxjfFWW3",
  "key4": "tAAfTn3oBTZcdkLTPk88Fb3SYuWkVG1jMsQoBqHnb2hXbXjiknDj5cHBWnFPkcojMxAm2Kv1f4UCBzE9gux3ged",
  "key5": "4v1EAjnWgmXXHwoRwXtDR7wQDC6LegZs1u2ii66dEMjxdn86ZDYxXqzPwjHEndzmPqvNwFpjVSpBedaKETEoBkWq",
  "key6": "BREhBxzGdZGHpXNLBdiLpxRCjNgVQgb6DwXGZcFWjmCF7zDe8wPnPtPBdsWapMUg1eHHbGNnyHWU2uTJn4oL6Zh",
  "key7": "2s9oYb4zB47KVTo7JLWwtpLzz861TeQ72P4h5KxsoukBvRqdSBs25rj2rnxsAJXLpSoqckTBPrAFop5QPydvmBhV",
  "key8": "5jtjEzPcWzeyQKLqg4pyzyr7rNUyZjxa82DMEpR5RCuz2E7woLkmuiAFnS5k1oxHN8arG6mLvuGMWdhxCkVrJSq3",
  "key9": "2cBvMMfcGiJfE7H5GnUn9bXgwQZetttRUtzZfQ2kGrZnNt5MoQVTm9k8C1CD4X3neqpkzB9M2sk7bGkzzs687Rq9",
  "key10": "4AmvERKwRQhUqRdzrKFQeSap2BiT18ERURkkVTHR4S3FsVYpZDMGY3hevNZxQNqzus3QnbqPHZUBzDURU8zofyJV",
  "key11": "21E5S2MfWWeCtBdZWXHs3Tc72WFnga55yx7ZPQfY4ex74o4kFGnF3fjWGHdaFyA7wqGA7qkNDWgkxMRRvq7ttTja",
  "key12": "2p2zAjSAHVgUuCpFmNsQaqHN516tMxq8Who8L1F4RoEvyGB5w8ZzJu7mWD1tFDtxnX8fj8U5sDUvVErSm3mhEpWu",
  "key13": "3P8uceHDq2HppBKs4s8LMWVrn8Lvdr1jKUyp77KcUmxuuMH79oEsQLP56ESaijmY8Mk6DYbVoMv9PKPfW81VQ1g8",
  "key14": "2K6dWDCPgFQv96B9LGunEcSkLUtVhVfpSjKH1TNBtmkDQ4nz2TvWqTFQaQmrb4ogMtPAN77ggMSBVTX84xNA8kUa",
  "key15": "3sck1YqwgB8qkGrrx7NafD3xLBdukBWXos5dJyBUo6gxuY5PH5JytMczwgvjq2gRVkTbu2PVxAdmPngstnPiuW1b",
  "key16": "5wetHs6ehjHtv12oRkLpdTY27YoyQtFb5mV2J75L7RhsALe7E9nnF3LuscscT2RpTxqANhcsLFVSA3RMWrEwjQ39",
  "key17": "4cNQdpkwjX3D9AS5Fe2fjr84WsnWAUXzbxwH8dkzouNRKXpCZByKtisVEZoiZUtU8cWEnNRuVXPa76YbqW1UdUxg",
  "key18": "2vUpFD8KH3qiFVnugFmF6XiuyVLhFdkYZT5g7xNusGLrWcaHVVLy3dkAuwPR3qtD4n6kWsvGUyD8oXqxAxiVkKiz",
  "key19": "2Y7Hc8KXMykxb5z7ZEmNGus6vcwjzojvQZZymHTxJJqWCe2MQWHwk9TqqiSeSc2VgsGdjEtzCNtKDhGr5AXmNW8r",
  "key20": "3uRLWoVPr8ou5wAZpB5p3MR91uw14zAndikuxczS1QatpxNGbfn7GtnYAoVKwSw1UeXJ2W93GXSYfEnLZJAMMfHH",
  "key21": "3SqJc4nQ6w8jzrSqSdUUtBkanMbc6BdTwrTy7uFh545ErNLS7jfjCzeL7PrxkbYhqU8JBnApL6t1ax6ZHRkcY4xK",
  "key22": "KZzMEYNJ71rgT2MysugY8kGKxWJqf6gG4xeeXVRzKk8FhvW9VKGfp6MWhdWDzUgARJsUXz2nLb7KwHm8Cyywm71",
  "key23": "517WXYGXAGVX77HgVfaiHA59qZc1thqn6A8GXbR4KMzphaEQbEJUJaseCezvziQqabL7dChCbMXHXXagD9r3sXD9",
  "key24": "CZ7vX3FYQtyRXYuRxzVwFu9czSQyT9xhM87HeBE6AhJpTti1Kex5EBnC4tBf6RBfQ9fAUdvKGNaqfsHshyEiVfT",
  "key25": "61egvLuwDDpKKD7tzsHrQ9TxMYRVc2Tx4MdNLkNxs6DBTLnMvGdEPVkDb9YS7sm32Ui9NVPr3soRwS7JrBLjEmRt",
  "key26": "3brLeNZzkLq9eNCgxcpdLUAnVHczR4MTFxJuUVnTwDP8iJcXkVAqzurr96kbe6Qj86UthSAsRiug41GcFkL6KZf6",
  "key27": "5k5ZHe1HDGF2VcfyyJBnN8SBXeKszFeVwKJkXq92VY4PdT4P2qujmV9XZXc3yaHyCYG8W8FDk3Jkaakiv7rBBVjy",
  "key28": "2XVojFA89b4fiekzWmqAKKx6ctxBY3RtQF2E5UiRsSRHjoKsdtq7ia4MD3cPgdGL8p1yHczpGez8XyHtvZnT7k5A",
  "key29": "5opnw8Fk3c2TX6sopDyNubHxkjw5fzYdj2tdbdRUg2jaqvE1JDnUYaDuk4bTUT5wGRJC6WfEkZbeRWx6j2d3ZfWD",
  "key30": "4dw7baGStHF9Kxvr1L9B1hb3m7yDF82uFWc8XyafSCUT12RgXbMfCdemj2Hwb1g9nsPuC91JrvU2HMRFRE93vQ5i",
  "key31": "3cheuF9M4UPcWhu92tN64bRpbwM5G1oyN6xsAAeXVrnhaFTcoXC11vGK5HpTf5TLs6af8rqaAz6nRKUfnYLJJBcx",
  "key32": "4QNbsCjTJ9fKfKFYjeqMCcXtrijAETfMFVef2E5tBNkcbL9SwEUxfHrGFFEaFjVcN7VV8smvTwqoZvrk74Lz6UTG",
  "key33": "59GjXjAtaLEmaHCKJeF5bbo74MujjerfcN573519NN7do8GnCcb9rqvmAh2MT8osRki9WjRANn7PABLx8hiVPiNM",
  "key34": "2VVh9VvnBR2yvz8SpGdkRbU6uvqy5U9HndKrd6RUCfMt61FC4fZoY8GH3YnwwxnZcDJVCSySL4SDfpinyXACKL7v",
  "key35": "jRqDyXTTDSSpzrTzuTvgh9CqzhEQfYmP5vrT693hEJ7vjhEjohi7vq3QdBTpdpB7riFkJ8s3hAFpmNcjhpMKRN5",
  "key36": "4nuoC2yqpAwcqoP9KAVp2q3G2QSREQ64viGLwhEqjwX1HgFRMuL5ZRGtkqahNYxzJbhi6iLB44rheSLGhrq7iVWM",
  "key37": "3Kk8qsSj67ujerJAotmunmQHNoSHjPuT5WK7rDEkqzhbRF5eyjoPi3gHpCWfV9QSijx9aqv1dFUoKcvd8FLrfwbZ",
  "key38": "4x171uCHyzBcSYmwedEXxvDNDwnCMVjiGqTWnX8AQJdgKUcTqpMK2ZoxKMV1acTFjTu2wKnZQ1r9pVetKiLw2TYW",
  "key39": "2xpYGyxeupopSkgiJs3iwkwobF9a8SszE2T2M36vXcjCsceUjLuES81QgH8J3Zjkvj5dJcUSEYrcJGVgVz4Lqjbr",
  "key40": "5wJmRLY89a1FKGFucjRZ66qT2nQsj2k3J56A9agwkEo8SZMbCC3XiS1DuB4H2zWWQ9fsqPn4Z3A1bmVSeV61zNWg",
  "key41": "5TWrhkxW7TpUwt6enrKxX2pm2rwYvuWKz28m1858GbrUfCCB3r29H8WcgmER8ukWBXgoZqmjUfeqAiaRprpofjj9"
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
