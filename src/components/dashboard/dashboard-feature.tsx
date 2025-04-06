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
    "1j7uKzCTTB3XFuUSFQtJfPTEtzu3FgozTCvuqLvoTTS7M8GjJs8wcFyuVvPXd6ZPEoGMd9ipCgMkoyY3eTLrETq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WZX1j214W6stuNBmKJxzmfEvgG2qRtGz1K7jg14uf74duSYxuGQLaC8X9GZ4U542pT7ZZYJ3Fg4Fe1EVSdGN3c",
  "key1": "67cULtNKC1Xu7ZTHPvEkkSweDMwAwoddGc8foyu9cjv7G1FQtP1ErijEoqqixgr6Rd3wr9wDe5JsP42fz9RbxEL5",
  "key2": "35ZXaw8tNzWmReu5ESTqHWEndRFHhJ6K18uPBZie7sRoMW25jQ6LjeRKQ1xYihLAcTdSM6UPvjbDQgCHMHnhDkde",
  "key3": "2X3dv8ALNTMJsLBoUzTU4FY6goM7BYtcq6VRPpGyJqH3x5VieGiUWVuGUhPX45ynv91zvuSZqCcyrCxcNt1Wvu9Y",
  "key4": "5y9xygQRqYKX7uQb78Ax14wRnw55ak5uFjvUGPZxdkZMdRo27sKwN78HT343EeByBDaBQvubXLt7ZiqsCHoeq5KU",
  "key5": "5ntfxHui69sShYqCMzgu8XE8vuy5jZALeL9VFHSxsntsSsq7MJerdFbjejG46vsM3gPhZVWgST5uR7WZQnqBeZMG",
  "key6": "2WT6LnRMtizb9cRc3KX2C9KeMLYmAGEF27rQnZELCUkoDCDK2YFSZ43mEp57PLeXKxoJ8MGBnuGv9GnXYL6eFWvd",
  "key7": "51Tnn3vG9SgqW44bMWYqumJFRFg69Bq8xfWVUE9ECxWwbSAV3rRAiJW6BdFC3CkBSihtPZpsEtwomHo765KqaJ2b",
  "key8": "38rBr72fsk7TdabJmTu3hh7TZVYWL9LNZEwRnuorrJ49gWWBoBJ4UuXGqTB9qge2XnWiX3YKp62pVyuVPkiv3RnT",
  "key9": "4zS5ujUVSusoc69HixSKBNZY64JEQkxyiGYfkQAVKNijFow2Qb97S1mn4YdKkY89TsHSwbsKTtUVp12wZvKnNYb1",
  "key10": "zbsR1pt7LbWP7G7E2cGgPcRyJhTAa8tKCqfckTCVp572PG4T7CgSbTZCU7qGCobfetEYhHpFtrAbFT6J6nhhFux",
  "key11": "5cg9eWmMp6MLPYzuKBdPKEEyvVxwcKAGgMmvFLSEAixPsQJvAt1P41AiQnemgS3ddMGJJbXxoJoCWWVBs98UTaoc",
  "key12": "3pijPituj5DQK4uGHkJHMVzACLCE4VVVMmqACLo4qVQ6twaSarHgsLAJ5J88au7iRy7AGGdoGJU3pF3ojPhasjyc",
  "key13": "33ALo7bVE2b25KyYF1TAeq2yCLrcpoA37tgBSYJYTcyL7qnRnL4yK5A8pwbZ9mf2BQHPNfM6SG3TjTGzyzNxFjHL",
  "key14": "5xFDgd3VdznbYnXsH38hbPVLgA2fXnGXiV9YkfySiS5ZjWpfVFHoTgJWZBU1XTysktWQAtNQi6ytGzPnwpJ7Va7F",
  "key15": "4rZgaaAcUsAYsusetzQukmWNq89PDhiDvTpaFGDrgyeXysR1AtHMuhUQpppN6V1ZLkoA1wawCn41ZVZcE7VXvCGM",
  "key16": "W91ZU6BngB4X4gpLVR4UW3B73CuHfGyyzaUDaMgV8WkPJ5oC1ZEVmShyQgZEXAvzempgozb8uMFSqCV4BPfSHZ4",
  "key17": "2ArjVmBaQw2ALJMoCPk2V6nkA6r6ADDuUXZVBG4qCg6xAH3dhvWEGxXwN27XauJKJ1WgdM9E34UiiXGEkXd6MXxS",
  "key18": "3wojV6EdaaB6xNZwFgEzDymszEcXnWGPJx7WHs1pQcJownjJuiG7FPjKgdAHg7mUvnkd48a9C6v6khjdUMW6w4gr",
  "key19": "PfFBs1MCyfuBrvHTYVJH4pTP2ftmNd6mX7VFQyWP9HUF8C5qJuxV1SXveuxf9arps6vh9RSvxepfJyRhtpjikSd",
  "key20": "5G2TXQLiX33Kdy4112d1d5xyYeJnfWQpLLyVw2iBh5bUULoaCgUJJrgUNrf9HGBujqvkR4Mpe23Es7EXvYysvU5J",
  "key21": "5rAYqb56tMF98Cq8M4DZLHd1AWq3ejVTkybuQ3KiecZYzMgsvhTpzAQoF8CRTgrGGfCTxJsHL2DNxvFLdMdh32Rq",
  "key22": "5S7eo3cFUuMGrTje89KZ3E3pYtLb86tNxnUg619DbKzF2LqQuNVoJndbJbyrC4bN8PVFfnLeXT64fR5FJc9pGMEd",
  "key23": "3otoeELwKPPoQiFxV9CKcig4c427mvU8chNraSCF6ZgwovWTZKCuxmoRgcdsNhRy872K5WmLdie5n1iiQub8eGYY",
  "key24": "3kyhR3jeW8X5cjFSU7mJ94rAkDyyZt8XJvnRwMcL5taRExnLcYVTk4iJPjfQ14yzE9AFAoTnUf1MeDfvUr1dGFic",
  "key25": "4ARXvYWQuzt7vsyDgCqWrw4XSSgDYuxS9Q7k6Jh1GqyqnhFSNVopo6DxeEfpUbpWxXcKPTBD3as1znhoXjeMWVhd",
  "key26": "BQBZHEX3gLKEk1WtYdqLsczAXsCp7Gxc1tKMhwbWDJGGrgQKpgGZgmJU1cmG1r4XQd3s6Ei2DwLBCY4TUgXXBPE",
  "key27": "62DBJEN7TK7JA16Vra3GiLvGN7vU5xvq79As8HBDTXB5y115pveEbcGtR6oeUUr876cPQsuBMwPM7uXVzu61DCj1",
  "key28": "2TMMJN64xH4UszhTuTYYfwTmgq5ZqLtMBNGCpVKYg8JfwYK7xgKTeZp4HkVMvYTm4AV3bhLhDu1vjX9QEP4QwozY"
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
