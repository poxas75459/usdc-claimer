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
    "3t3TvEB9CxpTQAuw1EAUVdHze3f3j7QYrwfp7Zvt3H5aVpGX156AyMrUaWmwVDcfhDznHN53MbnZGofFGA5N1mrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGhqgna41kRwxc8U7ZAgn87dLbPXv573AqYk7coQND38uQomxBXiExXVkEAqQgNNf2D8HoRcppUKgz2QjP2UPgD",
  "key1": "2gtD8UQyawoMFeFpycTtEqiUKuq6k2f9zgAt4PGX6jHA1SFhR9JWoRQi4WQu3kzeoTnfhk5xjjT2SXqfpv1yDKLA",
  "key2": "P6Mt4NcqQwkvaVezbizNgda9HV76ttJwC4Fi2A2s9ihYBzKkkXqbUc97uyxzuvF1DtJpsbsdaTqFXwPfYTFqM2Q",
  "key3": "2CZt51ota1UdpNLb2b3zZ5yMSKwTezjEzqktbsUpRSQD9AUjQMRdqdtqYfvvGSYo8PLTnpWaPd8TEuzB59zjco1Q",
  "key4": "5MEJYqrCTAbNbEWsjKejaH7qTYyexAQfjfT3pmq45fBAvB2oNF6a5Mimz8uEx9A1gehtUZD7yd2trAfjc1FK3uyh",
  "key5": "3tfZsnbLwRju446y3zFKtaYRdV5BKhks646cWA2yep4eRnGSMEnB52AHWvmcgwzcJR4p5QSLxUbyCHG6tPsoAM2S",
  "key6": "4LJZGW4dexaDZFgoiUo34skDx5jBLaYjaBcd8ioZh4rbaec4qiTxHn1uB216y4AZgwzNAcym1UaKgxroH7pSRpti",
  "key7": "26Ax6bHtdbQcggJLpCKupZGWuqT75xDiRhytUpJLMNaSj5BggfNDU8SsnCUX7masUgSwjbnzYZ9XfztzYznNhhLw",
  "key8": "2ZjmN6QeXkqzytvQ5Z5iFnq4PW93tDhAdot1U22PU4GUdJzqRtvfHQ4nFMHng33WBNxx1jpfET42MMptS3YiFYWm",
  "key9": "SdSXV7gt2LhfGvMcy4DCNGm2Hba3e7hHhR5BHmR2eoaagCfxSexGaDd397auDn6SpRYBHijZJEhevRK3WxJYP2E",
  "key10": "4hvPj364sihJdCVvGVbqv9h6KWuM4Z1NsBBvCDzkC1mPWGh5s6NfhCj5sPgZcnpYpTyCWhKfKrkhqRc48d4RgKxa",
  "key11": "2zkLJ6UQ3ochqm1VVPm2RJHamntKschj9Q9ERSCzvCfMZmq7QdChWvDNMorAhkCgyiSXnkSMHJttKDMuNsiacsHn",
  "key12": "ciPmzmYTkL1cUzDUCyVYeZwXp94B6GEsqxcra23KoCLvHvHk9aWgGR1WLkY4XQvmzh74Ve7swmB3bsfap2pmF15",
  "key13": "mtBpq2VFvBZ4AEgpdPF78ikyB2xpkCAoGANxQvChBvWTYdZfVvDtQNaKmXhFPEfhBKHmFAae2o7AS4wMTRuDKEF",
  "key14": "5Dz8DN6FvctfxBFoncEUF3XLjTjUmkmh23c7Lnc9DixvYW94DDRFF9m8qwecSzbm9uVjcmkEChzphwRkdAqibuf6",
  "key15": "4R46AMu25nUmtXAEyKNy71Htf1e4wWLakrYK2TirpyWVoCBHK5qYAPd5hfeUrDunxG1DZ7RpuY39UNpMMKDbx9zs",
  "key16": "29A7NzxLQJXuLbEawC5Qt5gRNVuXwDHn74Qya5dkvwZyDayL9beAAUq9xVTUsN8SntNvnQ4B1CnAjfKStJpT8fFo",
  "key17": "4uBCGn3mLY9DfZcE5btcoGV24F2hr8aHXYSSXCSjMQzQbZiLNpRVo8ZefWh7cPtPY3qRYhkiHBZa9YyojknUqFaB",
  "key18": "56Pj99op6SnWXdNxdLzZjwBMQScA4xU8jjG9dZ3BMcGnfJKt8XBmCLjpVfJMP61stfGHzVaAgpvjBPF2WkqCrZpz",
  "key19": "3gSt6YtDmntLXqUf65C3HN1Ck7VgG24FCRFTG5a7GFfmJhPVuf3LgVgFieKUGgd8hNy4wNjLbbrb99UEZ1zYrQdM",
  "key20": "4YzCB5SVTmjyG5cExPvFqcaMgHQ8Uo5Eb3wX9VT6Fa3FMBFz2uzYnWRVs4XrSM2vgwoP8SbxXrzTpGAYxM2jErN9",
  "key21": "2ecUXF3XgDcdwK8wezB2vNSKUBCdNFsC6Zv2aiXGP7b78xquusbYWVr8qk8o9m6fVMyPPcPGyWrBbuSkAC1E1M31",
  "key22": "5CFvKSHkK7iFpaeaRWT1q78NQyNhXQQXPWZCcbyfueFi2UARDc3dLcW6xpqqJGcwcgYtGBZqEGeYf9cuC2RoAVTN",
  "key23": "2Mc8FE9Z9e7da239KrPTJKaH82gq5cwokYQQbrWkcwcx1hQQ1XED84jQFtsZUBwWs63QeyFe3A1WCjxS8FqQhPTH",
  "key24": "2vMP6NL7qmNc9me5rqbxJg1i1gTgVZoVVHa8EeGXAAicsZZ2Co2NjjgbAYiThgshpFgpwrixjMYUUhALdA1NCBjA",
  "key25": "24QnP8UcrMh4be4qn4xZfPvGKe5qad47LoAK3vPuHU8u5JF6Mp5ZWHAVkds1Sxib5sTCom6LChLggRdywmEYiau9",
  "key26": "3B5YNyavvxfd8jL27DChdtJsj2jJXYfYgRZb9qbUf1VJtV1NE8ygHGibdvMQE3UMyFZRcpNCEekY5QzTudEmgA5b",
  "key27": "2TfSL2UTPAHVWqZmnbP65czV9da2KxKJBcZAWhQJbmKh5EBF64wpQLZ5PjBbCfcYSdxLnWsismsCsTRXwEEi22hx",
  "key28": "2ouW69u4HZtpJdiVHUvuaCU89vPxrdan5WhdfpyLJYcSjnKJJLMtagKYTXEt4itmKkB8iq7MtewPq6PVDXqLPb3o",
  "key29": "3cWXTcwWmnaR1Vinu2TFha9kjh81N7svAzR8T4g1J7yfeUGk2GNHd7GR681G42FsoCe6onKovRrZ4cee4KXGoLNF",
  "key30": "2bQ7eFe6KEx7Fr4RxpK9qCg3RAZ77T2mDFZrcRGomj6eb59CHZCpY45YPqxVXzZgniBByjzrA6qjDvZgerTZMyCW",
  "key31": "5n3dUryJP95gcaFuymAdFgtvAhJz2aUy7v7GZxxAQm3jmY5tRoSMz3pJtyFkpw8ztk6Cb2RdbQhHHiKkmHwP1pW3",
  "key32": "2NTq25dzP9i8dgn1UUF2FnF8Z1WUMGXwwJdTDyvRdbGrbnTPAFEw79NgLuiYzstPXePyCCjBoPaq7bdfaVUUxU4U",
  "key33": "4cv4hN8bESqdJ7L4Qs1b4gs9coapExgKCs41yKkS4wqPTZ2LTnbAu4oU91AnjrLSPKmsmkcvfxMZJmr1c2HwQwTY",
  "key34": "599tF2bfUw9XGochrR69N5csUcVAGE3z1ogGRne3UPC7PQXdmBKjridNi2CGZWLVDoE7HNHXx9MHthpzqWBPuUDd",
  "key35": "3aUkKfaPi8UwLg1o1kcLmvyGRE8TEwCVchZc8T1P6WhatcXH2Ejnr96xB4tLNo8tF3ENscSo6ntH9T55zhW25uHL",
  "key36": "4KyVdXgsrLEMt7HsneasPP63nBVJcZJMLHtNLBkSWvowM3kKPnt8ejmF5qKajcQuhwjP9w4BU4c3uTZWUkqosPuf",
  "key37": "3gkVxxYMtyqWDWQrogXE4Dygk9kEWU3URcrGU7Xfeh5QDz5Yqy2WtutLF7XUpeUF8hHt9M9c9Mkf4QsWzhb7GmLy",
  "key38": "2Uy73wNqi8WUPwt3kaMjFDHo1MAbgzgQFezuNhPFoLHWmaejSwuUjFDkFUSL5rAm3kMrCSiWM2PnDuFCvk4ocRfY",
  "key39": "51mimVM7rjsqJ17zRBWVfF4kdMcwY6NsTnBgEQYkj45w1XDKVtoFfujirTi43VuC3FE4qdR8iMwG4EUr1HUDugWj",
  "key40": "3aU2oTQ8ncL5yrcBNPfGKHM9rkWkGosLjcRTftfn8WHoF4jXB8wbDfzNy71ZW8kiiUK819UEzCUdDDqXv4SXKrbv",
  "key41": "kCRddMJL9tEefjNaKA9krenzBjsMeRNdsv1RDWKJHmB3GVJB2TQgyrEDzDgzq9zNY7oQZAUFEeVABXputgyqB4r"
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
