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
    "4bCpxCpneudRg3GVYe2jHuGiXvJVcQpui3RgVFWGTg92t1i3gZyQaCjzFXmjBpsbwc6rqo1iiQphPdum1d8jnNJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R79Bc3yXQpmXH6szjytUzJAdUWStf68vGdv5poYsD9YSaRSY4mJcCjmzKXKNpQY8zWhq6NKUm3hpksm248tTRyN",
  "key1": "5kQmA8K66bkNwErGxQbwWyyoCrTShsxfu2iybKzMKEMNhW3ExL8bWEYZhRRfBBGxjoiDyS79ftpCHMajuZwemL7w",
  "key2": "612w2zjWLKQFsukkZiePahGJopFgouEn9xreJJTveAjupUUkme1HsE9518T6fXUtJX2RGtFVkuG8Ff1wtbuVFufs",
  "key3": "4tR1Gjhmg2zK9e2qpFgDhGimm3VLQTpHfAPpeD3NvcRdtkCh1dfU1eWtNsa3M1gChSuJXKH4vBvo76sUe7ArwQz",
  "key4": "3SpXmR2FeVas2dL63EFLogEfoaYx6wBQBDAyoQMoRGvSByoHEWeZFnzs4qhHMKc97TNVnmcDqwfVGLedFDnfR97v",
  "key5": "5HRen3qc5p5Tt343RVNmRVya3URLdoTSFeNfrHvFuiAZX8rH81BxfdnDJNTktU2CRRT9jfnQzYnd3z8xBxgeiaYW",
  "key6": "4gaVP6D6XvVg9SPWyyTif114Xg8rASb4AGUpa9ZFDQWHyEjLpuY5EeCQ5ZrfbYWoUAehk3mvesTcLkvjrfbbYtNr",
  "key7": "GxEYEc9QvNWsQRP7pBkXc9haMhxE1uSNHq7HKYMF39dALVNzBpLtwQ2sLnDEjJBCPd6j38yri8bpNkJt57jeCbc",
  "key8": "2xBpbFvp8pUj9WcxYfCpkVGxBatz47YSVJMnZr6k9QLLrdtresJPUFxkP9S6woraV5VTjb4hgKcp3KJYavSTua5Y",
  "key9": "2rdcVWMQWzjzatyHHRiurbaeSzEietAFvbe2RJ6ttyCbo7mPVp2G45VMhaXzwEmnc7kdTnkzmx79qNP5FdWd2g7M",
  "key10": "4pVWunKHdcFcZLAh3MUML1UiB961Why2WjtYyS2xvpCtV1iYWdpj7kqafHiQ1LbZmUeofuWVco7FUjHRgS5Br6u2",
  "key11": "2vmub2iGVHmyGYS8RUHwbwADDFMExP3TRBqPj54JL9kqpn7ZJS76FouziFpwynjaFzs2a7HBhbrTrpBxzqoX3UuQ",
  "key12": "3XqgGGay4msaoM4t54Tvg5F3nceuvLymWvijVSDHTQ7KbNM1KaN31eqTJvFh1i5VjBE8XjGxUbuKj1cWR6v3g5gQ",
  "key13": "3gh1bb3az4t1z7UJAbWaC6zHotS6XP6bhx9e7fvwfuotFvWqiDDpJRrndP4KcwnmotD9KhdXTNXps5rnheGGMN8W",
  "key14": "4AuuEz8PGXZZX3qKSjYH8R7AB5WYeRknychhtoq22HQSydnKuksyH5BEJQpRkBoYrsvtPsUCgdSGmTa2B4Qo7yjv",
  "key15": "3UuFzSmHRiVGdg2ycCL6mFsVcLqY9yk35UvZdrpaFfrH6t9XZoN83XViXfAajnGD2hbqN4hwBpUQVhN2hSNAgj4s",
  "key16": "5theN2aX6nvbcvTfvXLEfiMZVCPvL5eiSGawMR6KSvw7Z9nNX5TQTXP5U9X28BHbix1U7joPy5xCNuewuWqdpjFP",
  "key17": "5EYup4D5zaJTBdxxHgAoNuyZr3As9T2ZamqTUu24D8Fmw9hn8ZiX7jhMh4X48SdW4Eg1nARiDtcZ9DCtZEobd4jg",
  "key18": "5Hp9tMzPJq7x9Dgu9YnEuPP4CuixBWf66wC1JxdGRVJ1fRyTfghU7N3q2FPRv7PsC3mbBjMDzyDpaaReXtghmSrC",
  "key19": "3UkyWnuoRNb9pQ2XPCw8m72Efcz2qT3NgodCUeGkYvfvZY5NzVxZQPojig7kqCXj19gBoJ1fZXX7EFM6f9qucmUj",
  "key20": "2CqvXjHnvaLVaWdHSC54unJyrbKecYNN91bwDzSee9tctghCeKfZimhgTagtJS7h5WVyaq8XabJz4xojNDBHYak2",
  "key21": "2ZcLBichrS4TuZ7mvJvUqCC6VKaACea6YSskZThZ1SJ87MEnk51z2cjrQQQRwAWogQopLqKf1fDMeNciE1eyNHdm",
  "key22": "azCfkKvTZfGrr4F7e7CMnbuv2iQWz6UkTnUGeitQA17fEzLQzmrw2HyGNVxnWL1CEErY3WN5g8c2em2KbnzRLwE",
  "key23": "5kCCs63AZ7trKgBe94xr8pvdogwmqoqEXUjbkfTmV1W6FmtUK6VW9WS6TSkW2tT4cDhbx6Z7uah5yibMrNwYZVxb",
  "key24": "2KWssWMijiYuhooSUerbUWa9V9vBEdWVTcoYYNAU779Z7KSMQzD1JWKbPDahQCBLTz54AD3rw6KLKHc7XQCTCUUf",
  "key25": "CU64UEo8M4cptWtqQ6u1YZzEBatbqP9aUYXYFYWdL1CK6kLRvSvPLPNaH6MPnb4d6zxqgdcD4E81yNpcBYwuPcs",
  "key26": "3tNCzcNzobNVudU68NF2cHfhANBdGpGGbwFio7GGcYSsv8LAzra7gLSnHQ9VUcBubgnMqx9ybn5WeLHmjrdkYYvt",
  "key27": "2r7NkmiCUCgLhbWhgTvPwQy6mjiA9E8QgaPZfsimSVm3JjLQgpn8xpWCb6VQ8gS564hdx8uBucRQjx5N41HAPWBE",
  "key28": "2fX2B5nE8Es5aTjfuFJ8AbZmGBKYCkqAGPXAfDTqSF9oUYBoQCwqhkK2WptcR6aHr9e6DcgwU1LXTbH2WgpCHUUJ",
  "key29": "5UvW6G5C1UEYZjTqNgiioKfWA8U4NcsKkXEUXGa6dBG8pKRs9oAdYYdh2N37pDCRe8h9XspGhDQJdth9FqDxHyJB",
  "key30": "bQdz9fJjUfCa6M8DB7sCqiZTY2pdUhZi5qzkpmygLqx5UgFmE8GxEGUDCFZi8ErVtyuoK7TadzcxpnQvWp5CJch",
  "key31": "ahSc8dgZMKj7pCxeEV3NKvGjdMiJ3oH3xUdTn6RKCcHSjr4rrauot4j1T5S66JUwxLnXGtgNUfKwUFFWvJJVpo7",
  "key32": "3HC9Le1TrshjFe49Rp7DAZrR1vGZyDi1rz1egogWnnVrMdoMrduEYYGg2rb5r26UFa7aGtjubT3ppo6Fj1g81BoB",
  "key33": "3iap5xwzNVFkHCx6HgSCMFY1STtoPN5tPvYGVTTLT4xRqxL3AEn6PoHdzGuMXFLpBhYW5WAuM5fQjN4Tk56qQCKB",
  "key34": "5YfqB6RJdV7XNQxSWnVtzQbZDrjamXxVhKFr8JgaduzCfsftLmfJy5BWYEGpcZJToHtTLJjWtY9h67jJkXXsXtxi",
  "key35": "3kgsvnAqabeYhaihiHybKTb4s7Skhq4LcfWC7rFwpCiKH3gp2eoiVjiYpbXK3hGinu6TZQQSBDMe36ANbzMtXYJE"
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
