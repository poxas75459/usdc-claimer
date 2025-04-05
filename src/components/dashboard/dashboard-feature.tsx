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
    "4Pc5EpeRrC5yWRvd3wtYQZPenHJymJY1wRvmhTAy8uQnMTKd62czCjLNb8fitBxgXTHoGEapd3v1zdjDdvXZRpbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rsaQWPCjdwjzmEhuCXwjRAZv2pi9eQthPnGtjaVtptDj41yjLR6rsSzXfwpiFMZFs3F3JUbabhTwnso3eCYhKhh",
  "key1": "5Yc5tteeHcoDE9CH3VhZ4VGqqoubt3YSKoWnnxs6CJU4k6RHeh7L18fQLLPqLB2jZYMKnDiXvYmpwhNFBuSiDxTf",
  "key2": "5eGz6pJ13sqk5f2AL2XCLMf41t1KjBwuwsTVXAdRuPceuUm9i81JwN2mUaH2qSX4F2VpeX2RrSHK1Gu2MAkXgV6J",
  "key3": "3STvUi5JaGKCxVUTeHHLzB9VK327DVt8tYXRDB9WmHPKpG5GjhsXobAWGXBbXc2Pir1c1TAigPVWbQH7pFHrXi2K",
  "key4": "EjL2kJW83DHTry5tgipn2gKUHpkCBn5cu9ewRkWXEu6DYBwT7kAq3TYs5FKpcpp7FgXpn17BjeWaTwzVoHgtujs",
  "key5": "t1WNCWRuCkPNGLwbHFhKyPCZBVcXDPZ5jgnJ6yHajKCbsdk7ay8y1QN38S3oj6kXSUCiYZFoPhZNbjPtmFTb3fy",
  "key6": "2cSCW5YeDy4n7HRwFKJ9LESBVAaJNZPaN3wA24nLJyBmpr4jUsFkLJGbYkpcCnuQcrLrLByez3hUbymMEH4ZtMRT",
  "key7": "akkjtcqRGg62Vagps3d6NmeZ3EoAnSwh2rUu1EevzGycaDMfq2JDhvLgN2ey3zX9GzJSrKjEwKCMULJFj9fKycq",
  "key8": "42ZqDRiYZJdkHQZUDFdEZ34EA6ZGW6h5J8vea5sk31MHLV6ueSEJLZ9Qh3aTfjT9npZkbc1iCNjicTjvdfghSFAL",
  "key9": "3cCKAG9NvQZ3s9pSN2bjX1RKMHHsai12kDGm7HpfwVhjvo5tdE55nxFEWaXi84nib28ZTi9qMLeLKNakY5pJUSSb",
  "key10": "TLBpYcGbM1Jj83dycowzCZhtL35G7yb7XnPV6sM2fm3nv18TSSjxNCXSGnu8ZUYVgyvLW7p4SRNcCscm9vpJHUa",
  "key11": "EddSSy7NpAkNqzSeoe9cHxUr13DwhExQMyZnfEmLgWrx8rxM7b5TzT4HDb1isJ6MKj6VopneyFBDMbZw8HoNzLy",
  "key12": "23VMDPZw1BnzkiDyNoGFkvhDLen8ayv3RJ2ugae2e4v6ep8QUT5HDnqtAWJiJM2JFdq6ZMax9Dctwnoh7g7St342",
  "key13": "dSoMjohx9NeUS1ogxXJuvN8rKMwm7FgTaZwNdUdZpgjXTKohyxuGCR4KCWJNBRHRdLTcu5aKxo6KCjC5RtfRRN2",
  "key14": "4DDWCodaKhZ1NTsiun72Bx2N4dvW2DUnU7mVVUwfvxHVfHAQKFi5f8uMg1DMVtcmTu5XCx7g6MGv46S4dx6tthNj",
  "key15": "Kz71KjuFozaGT8YKju8Qvc5XgJd9Wp5ewZKzQ8MGYNxQpnPj66D4B9fjPvs9Gbi2FePXgRMkwkz7K51uh7jevuu",
  "key16": "5mXuDVyQK7yo1sEsKg5aJZSuj2Y92SLPf3TTigSeJh18wAsrkPB1sbB2uE87uHLC5S3VF6dw5AXy2Nji7dYD6ar9",
  "key17": "zfCTeHyTztCGk8WNcE7FsSBwgBkPGERraxJL9x58kTcgrbd23gwGMisPxZvNVTdRVxwJmwt4gPf2NiXDSdzg4yk",
  "key18": "2ji1ATpw27rKemSPUZa65UHMMMWZFu4ngd2HcTrjv6Drqq6MfR6aPyAVZSsRVU3wyLc6kuL3ZmDPjoMaDKBBKDEm",
  "key19": "5J5xJyWucqSmJUD9YzR4zG2JAMn53wRAzpuzhecPmZd6SaaqMS3wCQtnSTg8gStbwdFFkSXpdBP85iXrKtvcypTd",
  "key20": "4RaSgoasLNoBfnuj2PGnxjVz6D2EZksUA18g6gug9yUjHdrvyotLSB3wMGfxmHsGA5QDtqNQXHNmoyX3iBkcBvkk",
  "key21": "4HtkxuifacqgeHG6prSPu8B5SaxsLDRZc7WPKPGKFvFyXTgYrWH5ECgdwSxmPUC3bx8Zg7sFkcXzTDF7DSoryWU",
  "key22": "UB4EV9MZocTyizh69jyNTe63guW7sdptn56xoMuGuZHF11SrB1WgxyKgr9uA8KKFYndvP5QC2nREdf7wx9KQgnX",
  "key23": "3JKfbcJcVrYxgpFhw2HwGutrHg95XsgUu5YYrhXNuy4s6GQKpXjUxpkyjaNw6LogMjaQdhV37poUuJPBk6VhEjTe",
  "key24": "2LkStijYj4M4DZa3oFf8e3m5KP3bzWu6HZ5cybJ9meyDpXfXJi6M4FiLiiJazmtcFUrJyohQAidimFLda9vY9AeW",
  "key25": "4FS4DYkihhAXL8QZX5piLLCizHEYy8vBzkJL1RxX2So8qHDuJG5xktNKxyfdJpNEZAiadu86LuyYqFkuM5hrdCUT",
  "key26": "2PCeaMAn46rPsC94jnWf5gFm45yPWsqnUzD6m6rQy8nZ3g2NsoNjQmqpNXuyQzDnU5x8zFyS5ua1WTHRWPM9MprX",
  "key27": "285LnZSg3grE9GpsUXAn9yUq5n95BiUcDN4E9bb2CThu97EfdL7hfRKsu2wFXtYysmBtYhkEhvTms6LKSrJ277oR",
  "key28": "3b1RWoXnBRFy6tXgWADWGu9ziXbk3pV1XGVbMjRYeetQ9UFSfYoBwZhauz5cL8ePqPH5kMafQGHhyrMxiR5xYubQ",
  "key29": "SW9kaDt5tdAahyCuevHM84PbFBV7GM4ZsWyLmcDaGdonpVf7fVvLLGvcDJBUDoXxtuvfj2h7NuvVySX8QSoatBr"
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
