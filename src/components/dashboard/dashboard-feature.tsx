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
    "4bqemUkVkwrAt6qi7GQ7seiqf7KuhWEcXyVjTP2UkVv9i6qry5ShmutZ5heC6isKaw9jVaRCNQVzde917suAYr5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YrLRdyEPV4RfTwx3FL74xEE9b5ZvRKtsWd9Dzd1Y11aGsZAatbA7BboQtLYnCjELF9uNpdNWU7fc1TE44XF7Ssp",
  "key1": "3b8fU8quoQgq2VZqyPdtD1cxsDKrEkv275s8NQDiWa1JWKAVbZ1qryzutiuzBiH7WLSgCPiaM1PBm27GS1sCVnKq",
  "key2": "3SPeowc4ADm2HwKNCTVLUqNC1sVvmr2prCHBH2kS696EDRwzrHqZBA5NG7BxdgspWxjEk7c39AcRCBUJK5twurk7",
  "key3": "4JG5KGeFExYFL4ysSQn59nrofzqxo37WT59D8iqpzZ7GVnbRStqkqBqNgHTgoppjmvkUopeYfkEqmBu2F1urUve9",
  "key4": "66CPyZtERHHaPXqNpJ3CsN2LLxqJXcziVK3MfCKP3Z22C9LvA6NPTMSsgupWiikEKQfXo4k8yup6EupnhytsMyyJ",
  "key5": "2TDt6ErKQMW8puWmF4mdAZ66d8M8LPFSeyXajNeqimJWzz5Ezc8FSKNysAghTo1xZt8uxe4tvghwRn4KU4xKtQMR",
  "key6": "5Bhyh9Lz57UocQb83ZMe1BrpBz961A8ut7ANxyzgy6Zb1NmBci5hwk4hqZMfgzbuDy3BZkpyPiHCAA463RVx44Ax",
  "key7": "5UjwgSmjNGKbhabzaVbW9nzhnqLnnyFpRUAzWpsSTzwhGxA7MkcRSbPpHbe78x6HzSQsp4uu4daxM7NmwLUss8CJ",
  "key8": "4WcWUWYU8fjT2kemvdSFZ4yrPdWw2twiE7SviHiVGQZKzNasjL5BfkNSQ6P5i5s41MGLrdn1U975kqANFheX612j",
  "key9": "2spNqsXo1SPKQtxZ2A4oSmxApBZQfJf7FXWhabjdHSKVLNDQac9J7Gjtec3bZSZCzx1DDPzpQ3hDEcwLgtM1Pyk3",
  "key10": "2T61RWscqNPFUmkg5AvThuk1AuqQB3WVcDycC23LaEqNoNvmZgMXuknWSKULvwnqe2BCGNtDpawa3JUcTei2y7wN",
  "key11": "3Ln3nNPKejB93iSFQEduGgeupgf3ekdeZ1axjfs74zwVFSPZtvytXvEDfyMBcv5EU9umbd5UyXSPy1yPwCvNi9F6",
  "key12": "MhP5wqnMdGXKLoRAc9WJdYBDcZtPK93rjyxUqbfs3jyCc3uYyhm5g1pFBc7nq7z26H58LWFboZP6SDMSWJb7fCu",
  "key13": "226tE6iA1k7CHDXhoGGC9acEgENu6stX1fRRDhUvrUnUdUus9o8r8r5bKz2WdADdEUJ5qjtyTurTEGma25H3XDCJ",
  "key14": "5fLZCWo48YxGH6efu2q9HMyfoZUZjwLgBnT3LmhaoS8Ga2PuSWfJJf2SM3hUA58XU8Yo6xMYsEsCRXmtJshvWx8p",
  "key15": "5aQSLBtW6JZmNHyBLwDzsvHKSDbw1MBFwJSqiabkfF56NkNxsQZQDauLrxGmnFn2R5HvZtEfFVx6juSdZ8GiNqEA",
  "key16": "2tiBXAKA8xPDyuiMqabAQioEW9trJWDy2TsG4CwqgGix8qpSYzpT3Tcw79fmwsJ9y2F8JtAUWnPgLZ8dx5MExcoh",
  "key17": "4DFk7UwZyCJ869x8XXLEHu1EhpR2gTPgCvdw3EaJChZGTYNRtYwHXJqQCZDhZaWzUDHvB7KHiH3aowfx4XHbfhok",
  "key18": "3rxPiZGWHpFBxps8X5h9jHVUox8RYahRqyvxHyorYPx4ixCgSDmXvVvB8RpF75UjxYU66NwoLtU4SPtxS1J6gUcd",
  "key19": "5BAZe6vAZQhxVmWvc2Z4QufvPXcYtDxm63uCFfynUTaucFVNYdv6rAdaSDokdr6Fq7WNKi4TUHnXw985dibGiEjV",
  "key20": "5qv6NEyqMeNMiqqdsCcCeMaotxgf43rDSC6hLCmaUyzArQubjNFhvmQoVBaFYRKL6QqU59jfGgPmT6dpixLf9fUs",
  "key21": "BD8dffcagEr2KhsRWL4njjjg8eehvGDs5qSymdd3sKbHbiQD7UL4o44t5VCBfeDhaEJjWCGatdWEGcywryuTdcP",
  "key22": "KKMpXxA2VHsB2sM7a98kK14BHJYWkdvaWvy97uhtqQBedqNnxAtQYzaCimhnpEKTAeHoGZUnD9pAi9WEYANuCRJ",
  "key23": "3hw4WWhWtta2AxPvTTdNL6q7FjELFhK7j8a3YEXvWLKwBtaGkg61CyWFYW9bHxQYR1HFCncWUmihekPJP721Bf2E",
  "key24": "3J1DvGuy8xc4W8h6WarkRMAitR4AgMskKGEMNSdBDqowRFH2P313jBLEKMkBt8HYojEanHs7FZsE87cWprSgEUMx",
  "key25": "4sZbDJiCKAYXHefFQD55K2ajfYKXT29FG5iPZDF2wLToZDM5mXtwT4gR1xCNCYz5Gqu6ze2z6tr4cPJEchUhDACW",
  "key26": "2TJ9piGrKryeUek5YeFdZoTju1zutKVse2RWj9xEmXDrnB2s74yPHpjLkXQXqjZZFzrT54AMK3YvoLw2u6tDKtDw",
  "key27": "8ZBp3kLyYGF94YJCAY4NzTfnwnMiBC8xmKo2Z6xP1uVZHSuQa8yshhEtskoXD1v9vbk4MwHMvVLZUrJx8JpWpqQ",
  "key28": "5q1cpjxRffQDeyGiyxdawwYJ1FHdfodUSdyLTvR19aDznGqstJf1yM8asQqoNnbWASmm1T6Pn96LnGzw5twr5LNr",
  "key29": "tFCJfZmby8gk6HxqeZQBAA6XC4g8ZWyVva2f2RA5oT7WouV1Uksh7A77SY6QnfatdQrQ3wbG8cKZBcX49LxLE5p"
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
