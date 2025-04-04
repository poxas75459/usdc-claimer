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
    "5234vaVSn9WQSxmxPLbEpgWz4r9HGZmYcBkzppot8DeXoVZunNwc4MWAvFQCVaBGdnL72gY2fhVKkooBoU7VZyxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pt6BP6GqzZU4ncxp8sUyKpmwbwEuMEhATAC4Q59M17FYkCVJefHHSm1Jp9G8HQ17GTzbmujUW1Ss71movAF2Z57",
  "key1": "5tCmkp3p3ARtGWgFTAGtG7RVh9UXxYu7UNiPj1MsBL5PZ1GYwLAhgt5C4qBdbPwfq7afvy4tyWw8qPi2uQdAkT5t",
  "key2": "5R5FS1tV5ATmoJC7SbKqvLx8kg6aTthbHJrhJAKKo1GLsyYrxzaeBwXqVYWCt7GmBYje1Fb7SekDdLmZ4yfGExZ4",
  "key3": "2wfUtF2kUtVcePgTEuaN4u7BUjeusJYYfmviyBSEVbbfGQA2FGde1J2vT2ABSGRBLMrzGhisz1mSLpdZTcvttwnW",
  "key4": "4cqd4vntUBgnAssCy3utaiVk3TPWFJWZaFoCuPccEuirDipT9Rk7AW8RPngBEbSYK2Y2HL3Sk95frsQSZ6Ri4tf",
  "key5": "4XptF6e2v9trHkU9K55uGoByeZb564QMCiQ59Y71KH4aQH1mq6Fz8agyVH6udUi2eVgCFaKRSBb3HvGj5yC4Ee8G",
  "key6": "2yszwFSgAdqejdgEkGUN7QSXXMMwG9xdeLrhaQoLH4ChkRkrE4sh5zJxreMspk7hQF8Qf6sCJ4esa4ZwqLf3i2Hu",
  "key7": "3NcExdTMh3KbpdqjhkzCJBS7NmjQE5SgQo2oq1gpgByoB1TqYZ9VZgzazYpPa7ebXbY45XaGA28dCgkSNsQZWArZ",
  "key8": "43CmsGrvgcEKTnendDa8p4zEtr4ZvzM9DW48LC4SVfoep4WeyMozBo5r2pWpAoCYUBdKtk5Dr3co6gHhcEQPkWUg",
  "key9": "3eNGtzfbhvjmnweXyJWdM5P1un3MHTwehHHEdMV82NFWt5TAj2nW5QZ6fFQM3LsrHCSJn8j3pNTVmAq4eC14rsNU",
  "key10": "5Ksn7DU191GdBfnH5QiEewUUmhjGrDoULcsgesyq1bGg2eaJnZGDz9NF8cUFMJvpAEEHN1d182cZ58vSzMkEwL6o",
  "key11": "4Thv77BeLzAw7idKsqYqVJnhzVvRdd9b12bE3k4BTwiMNbuf8xZudUGDQmHaPgcV9MFKFPMidBqXa78PYbu12J7Y",
  "key12": "32EobAzzNcyie8CvNW6dVnogYPPdzLb9F5gF14CnJveH66iESNsHJHmAJCZgpvGQHenmno15etuiy5EJ3jHdEoXU",
  "key13": "5itb1t4TVZ5ELmA94vWQoYwBfFDV5AXdTHET3WoKya5kNtpmc3abkMRNb8T5LYbpiWn91j3B7rAubA1QJkAvR8tY",
  "key14": "2U8JRu7XHviWGRE3Z4GsMfkUvototRYYs5C674FDKY49yZjbHypYn2KJ3CgbmYitFYbqkXBzkqe2KKHWxkLbFxLt",
  "key15": "5mpwzrwvUg9wAvuikE8AHLd97rgHcmpfR12rbaj7uvaU7CrGpgLzD2VokEtV858k5FbW11gvtJrLVQycQVf2XV2",
  "key16": "5ELJRV69G6GvdWkx5bJGAQgj9pXDxajaLgCmtH6EnmH7YeWGx3JeNJvHejCdxQkXMZST5hmM7KTLL2ZL5tfsKfT7",
  "key17": "VgYNCfXNqRfvzk2uMGks3LyaKcfmGsVwr6qRbatXL4FnEoeVcVKy5BnBDZJkH4rJ5a2DSf8roJ3htvBXcUP2W1t",
  "key18": "5nxxFf1c52KYWZWzNMJ7KKYGcnnV54e4JvfPi75YBNTxfMYSQt27rWZCTDoP32dTVzwkK8GwGKR9U6fx38n2zxii",
  "key19": "2FxJvCGy6dkpWqkmgBJ4zj9QF5rj3VqCTwhfxu71C9vQ47KLgBTG8r6BJ988vLfzz8xGa1XVnpQuy7SHYtjaasA9",
  "key20": "3iqgHNmivCjoHinHhHroCEpgsnDa74JnWfF8riiY54tCjJWt8wxEQkbZocdw8u5GWmRAR5YaXC1tP6HhZYF7Bxgx",
  "key21": "22XMtY9bbeUzgEnQMEvPzTtnrFgg2ZTAw6SEEEXvykzK9bv25egrrLw4RJHUFJhLDsG97k9apyC91z6mQPuBp1u6",
  "key22": "5nQTKrT3kX1w2hLsweB5ppQ5yeEdzR8A4XHmGf5qttSXoW2zyeByCPmbJnDfQHQT74tiCUtwrX1nPfZ6zTVV3eQJ",
  "key23": "2WVJqpeLzht9jA6udC4pmNd2AKX2RvH2v43pfoyhYtAAqPGtugpmG8S1o3Mkdqk7j4ZG8b7cgDh4LfmJJtz2KCZo",
  "key24": "5NiUpo7JdhFfWXtu7FJPuTe2KgB5KH2aATpnnuyb3VRr9mMHQeBrAGRTqQaPXYjYNZbfGq6pTL5yvwgDeVuDG5Lv",
  "key25": "CBAu9rapMh5e2b1Yv8757ti3pUBsASJUWn1zQzvFXTp8LseHCrhu7J69geCi4eJr4sG3k4dPAujy66s2UYH7vLx",
  "key26": "tvyKSKV8NeRhq7n6ZUfACSiNc4SKaf1vbc69XGd9X1egat5z2xY9Eb75dihrRJvYNcgWe1FZzwyySv67sBEAvRA",
  "key27": "66deWhDDkXASbpmdaeszfggTwbhBKfihdnMAMMVZRGF3rGEPXSFduG9heUmBeKAUCWdbSnmgUvXXiYPcg5x6eoBt",
  "key28": "5YDwArbAARkDD14i9kLLTA3LHN5WzCXb4w7AfJdFDr4av3DYLprjYCtiTab4BScaGi5uhca2axJMR1SSmsnuuGvA",
  "key29": "3SEAuGiJdd7LNmWjP8R3xrC6QYeorcaihTZxbHNvZbScLhyNBqkXu37DLCiX16H1jdMZw8NdLbYbnca2qc9DWiwu"
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
