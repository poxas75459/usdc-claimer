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
    "2gSTQJ7r2ggtFYFLZaP4NrDd5EbQ5VGW7P6QfAThdDPNez9Pm5rxCqjZaCeMnXbSASQqiEX2FDNdBw95YzddxU1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHBj4zqzAy5ZJpjkyBSqbdi6UnkNzhfawKd6abjqjGyJS6ECyyV2YbBnnCd7eeQ5FSTWm6JqyiVbDjZeguxafgD",
  "key1": "frcZYfqCDBVfSxmg6Lvkm5fWVN1pZhbDc86MZc8ubSz6bi22FdJ8PTfnmLgsstVBY9fjrjMUqEe3gzYJ4XsdiZC",
  "key2": "3LZFQyyVYArReVVXUoWiETgjVvvpr3isyDmRu4K1N9wwZbZHGWaoHnsE2ngFnEbK5YdM2YnBVrbuHTdo63bxho6m",
  "key3": "2oTKarwPinXh8NySN9AM9SGRpFYiZWoeMoKfVqDZagyLTspYNvCdWZKnbkzeatJD72mXd1JBx8E7ukJ52hCJKhYi",
  "key4": "5hwj6JwPjmLsAhEvJnaf8yx2BjvAFUtNGF126ZjjhCMjb3jZjZRQDYDFnSbaAGzf35nHJM22nnbauT67kRAvffLF",
  "key5": "4d55JDYJXCUVYTqWLrGC8YLf6Y3HtHMZKfZuZRKg4fsssr3QPy7bRr8LvoCmYHenzNW8bQiSwfrVPu5W9Kx66b3",
  "key6": "5sVaD2LD7q2WRVeHX9rvDGSzoiFvozSjEbZSGtpjzzjw8q3JRNqi4XHX8uLJ9HZ6xdEhzs7rT68hAJQZvNFkzeXT",
  "key7": "3DdbEeCgbfRNU5iAH5wXCQa69bq75A8ZRVqhNarYDmtMUJYc1mS8qM9V6WSdHWcZSdGtj4n47MwiSXm8dTcJjEx9",
  "key8": "4Qjvxk5roxW5CTYbMJPo1eo9mkitbEam4bwx1ab9of6v6ZiFP7eN4epEiiECUBhhzQDcogSwyT3nk6oU78KdNVpe",
  "key9": "34NdpiYYNGjsyVQggGg5eEkM81iTTuqkBNgG5Ak4kHyTsrSBKqotfRDMTGZ39fv9JVYSjw1XdLoTvYGtTSnfqgQw",
  "key10": "4msZm1gQkrzMczFybDVDAq8nJ78eCdJfRqY9urMSR8GLiEzqiXnphUaSoSoVLy4Tz89hi5xzHE9SE8pLSKKmhAMu",
  "key11": "5AAt3J1rU2oDN5ELYzApZjo8zgEwKFGS48RRvakhY7YeCuYMXQZ6yaAkEE2R7gdK2QsKBDSLTGgL4vAXD1hfg5pA",
  "key12": "36YVp8Qru4X3JDAq4E4HPqNGt2fLVDc9BieA8TE3qBzUeMBfGEvavd7uuEYvEKkY3i5Jyn11skJar6sGdiEgjZEw",
  "key13": "3oQsFaWcFLaRUTGiVNz3Npxvu731uCbu6kaSmCntdNS9X74rjLa3KHoJUPkrBiJpEZweeUUvn7nUNQVVEx1xr5FE",
  "key14": "2qLiFzTqa2djMjHX5Nw8kvAagHHqpdx7C9hByjfsHxS8kUkdVHbdFtxW4BTETvKGpMzXrmmeJyz33SFU3DYeDZHR",
  "key15": "G7NCmg8tB2tkpNbEQAoj5UUNyKcNK71bAwDPYDNEfknXAhsmjePpjAShtUZ9xS2bYh61DgrfKoJfJ4eQHBpPvtm",
  "key16": "35bGt7bKTWtBBEw5n8wnYGnx1kPxMk4WM28tUSSBxcwc8j8HL39QYAqRagXoWbiZshSsCFU9T9ZgngdjhuCGC3RL",
  "key17": "3viW9tYuHzyXLA4atnSSxzekoh8yQs1J3wd11SLGxK67YuHRpbRvZ38WZNPEpaCfzi5bu7Jjgqo98hKGWccormqy",
  "key18": "32rbnrDNhFvLS7VJwS9ae8civb6sKAvG1v6KtHjagfuwtxuFZsoVYPc5VvTsxUFYeM12e9Ve8EmUuXsVDkJaUKTH",
  "key19": "moSMhtELjTpCqobHQRwHxAqptW5MmsApKutLCjZHrJcXVjGzSSHE3a8Hc9BS9JrcJGnaaUF1yiHBsodohRQ4X4q",
  "key20": "5QgAp3WrRYLr8V2roUryUxhq2ZF9S2Y6N6KSHqAp3NztRgcgS2inhdezBtU4GkKz8c2QeMFa3yYLJktL7Sto2wKN",
  "key21": "3uxdpKTU8gifeFk6rP8yYKoqfG72n7rwsQiQC4xsojXoFFPric7EnzaJCz9Bc5b7hFNHb9Y8jXdxiXykAFf5XLsJ",
  "key22": "5zm3A9LzCAKDJgnnSXa2rUGj17vMMmwuPmk7Gae4QDxTQCypi8gunhTZpdTXBFGxnVCbUnQXjyNqQob5ZM1visnC",
  "key23": "445Kr3EdKp8dzFUr4iAQeLrzLytM3HvSkANc6q6zXq4nhcATMyPQTNJZEVqrZGYGm3XSVZseUkfsmT718GHSpuhq",
  "key24": "XNEsoFtEk31bXwiLLFWRzggksjCB7zedAzobvL4kkTYRR2gXQ7iq2rrGA58DsWbsNUCfNTk99xWT9oC912x57GL",
  "key25": "3jYGShyRKi33PsMBbsHMbqMjPNtESjZh36tjzjJPc8HU92uN1ynYryy9Ue7WHR5whCtjLkodC9kv2Qn2fZCxZw2Q",
  "key26": "4oCkpyEKqpRQGwQiURAUfyUAzHp3oGTBKYDRdNE24LZpkF69AnjDCUJVXfoKZp1gcakNk9UW3KmFqmR6qRtfJ2pU",
  "key27": "57FBNKLc7N6Y9YhaKa8uwHw7Konc8sqGp4s6yMskT1BQyJHtNPENnYxhkAHANZW7uVY8aX1goyFHox1suj9BS1rF",
  "key28": "yq49XaDtC9SzdZLYDDpzqBumyFtmMKQXdLrYpSZ4p8odkiNbCncZniEoSMfx8ZUvF4ZfKp6MTUu7oJ2vqG2HCPA",
  "key29": "5169TZoCs5wpVdkZk9CY7J5iG12R1iNDjoBoutKSVq6g36QCXMf8UpuwiH7YfCLZ3FPagSiZk7jUL9RvxA9gbd54",
  "key30": "5sNHBbux4Cd8uKDPuPjzegVVTDQGfauPyaPkVQUKAbr6XdAp12zfWagH65vi95YRZ2SvDTDsZHLj7RAz6Grqy1E8",
  "key31": "2ziDHQ8toevvYTui6ovawmHpR1CQquJwasbGnehkob8VrU8k57HWCjQWnRiyGimp4axWKduucCBfY7NiVnyhwL7x",
  "key32": "5kmqty9vGLvkNn4w5bhoLvdPbaCxGmaAXyJt7pwUZkmBBgfYBFL5tpdigadfJ3QkD3tPqz8S6KXsmiwoQ3ZdaUy",
  "key33": "5wdzxvjN8bLAhwJxrKutr4GERwxWbRBVtrTJh2WEzv4JyuHyU4rYjWHPA5gSB5oMA7wJPnRaLe6c61aZWGisAxb3",
  "key34": "2WQfTjyYajgNggWccUoDauh9Xq2A7QrNdFBqb7apZEsKVZbPiTErcAfs8XAFA8yeEFu38rdDLsZNEYJvGhwFq43h",
  "key35": "2od5KNW5Q5hjv3Byq1X5dn7R9Bi5MfajXzp8nLX3LtfdzVhkJxDGCBCAsgKk7DMqCP15Gx4EXeYXCJQgJzpkxtRz",
  "key36": "5EWQsQdG2aLXrLNDfuNEAqHmAznBzhkDM4VbLPT2Wsayp1FioTBSR4ifDBCSw5VQecPEBa4FcDuVZKZdLVdkX1NV",
  "key37": "4jM6eg6j5f374dZyjvsJRNFfKJ8nyEdrUfUARfNbDSCNopsn3o4aMRQhN6LqaqK1nReo1uhmsKDQzci4WYpuVbDr",
  "key38": "5RV9853urayBZCn7j2vs4seCcZ7t6xRhLVczxt6qnrjvRmwyPmjNxBwPUhstEYZ4fxgmwX8WFpy77keve6NYs9A7",
  "key39": "2exeMHFh4TU1ZuAjG89n3cHdDHKcbdJKEzRP9buXDcaCZkdWf7bEnm98byLcHkwXnt3c8b8xtSrWPn6GEC6pqkgn",
  "key40": "pXAv98pmJgUYfPFMSweb91t2EWsPb1XdnvFD2Wosjh6qi8s1jrPxr9vyqqtNkieQSGa3mrkst7UhwQkfcrgGzYZ",
  "key41": "W4nfhBC8QKet4K357ehQKNJfU6dXJi4tb8qstXQwKmM6tZhRpsxvZ5Y1dG9hQJSsNfpvdZqhJDMYyGJxGvYCCJL",
  "key42": "2MSkBcRA43yCMGjUom7CCv9Q5AUCS4HvwurGz4EipKjCs7mcG47fC4CvJ4PDA8a5KcRPVUFqcGtexdLnCUYG4nJV",
  "key43": "29Tru9AgA5tnsGD97gEnQdpLg4U4farBVc2gWRwj9niy79xKDPZhxhuCArVF1GnLcpGSR6cewUsgoPS9bnndkbDW",
  "key44": "3d2Pzy1uJSwQ8v59Rt2tgvwDH3yFuGzZfPg6kMkKwN386AasAE3gqqCu44J4EFBKXjaUjqSM1xGi1x38kipVdvYU",
  "key45": "2MqakDjTs4D3mHSCWKXKZXS8ykdZBA9mqoWVNFoP4djhhT4HxdSJj9MRpwFHpbmzxaCQzoDbhDNDuL5Hu7zSY8hB"
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
