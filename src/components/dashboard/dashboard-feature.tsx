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
    "C5WMJtC7LtrKvULT4x5P2vq16f3U7Jy5gh1bsb54zn3FTKugovxXv93WYAwXbitcNyKTDEYEqbdqcJQhRtYtJwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "786gNtS5WTnb3EfK8jEFF5RgDaAM11E92CTKj21QiUwdn8Ju1mrKHcW3jWUmAjFmhW5YZ6XgrBiyULvmRvDiEmH",
  "key1": "5tKqvgbWck36m9VYQgfPw4RojaUM6FxwT5JqQW4QvtErvLfeZVrDQCEe3wm59EmdhD7jNeHZvtGoWRjRQKEXwj4a",
  "key2": "4S7SFXisH7FV1aieR9gTo1usRQJxhEUyTWcXdCeYbDabsV2CDcJvJDwJT7ayX7CdkqfvZ6sHNBkRAfZuStATCibJ",
  "key3": "3heNHdmv33bTJL3x5Lbrvy53J6DdEVrrHFunBathSV2GVT9HL8RFLHMmbEnZ6JziQSTaydBEcRPjti9HzZxoGLdr",
  "key4": "YEGwJDtkDALTsFEq6UGphm3gt5gMqckQqUUbkakhGiyaLsxbZtmnWy5b5JRdm46XHKq1puwf2ED4gGsFpvtnBN1",
  "key5": "33aNrzrSPZc4WTEgUjb6Tz6QqbqmncjCfTMuApnLhvgL4ZfLXzJPp9RJt1dLG57z8pTAyXgzx1ErZnX7c4pCuXUK",
  "key6": "JRG7UjBdHGvHJvpFCNjxn7zM8PuBYXHNnrdv6tzpM7SnKF51aRvN5CLveEWUPZ7HFiDi3NSzfub3SgeptAhPW8i",
  "key7": "43cg6jktsMoJKzhepPQSDLDCPG1vT9T3WiN1D27w18EaJSnmMFyk7EP6H75R59ixghNhsnjHAD5Yd2zumV1AR8wx",
  "key8": "4wGMtVmcSLCbtAkyNgrdvJ2Y2Y7QJWXpsypkwEotSJ4iD14EPUfM3VXE9i1mZe4zMSiCcqcHEYFi6dDzJ9GuuAQ9",
  "key9": "UR2qWq4ysZqiCWanb37FBNXjC9bxPc6N97BmchqqRGgR5s6EBt4oevZvw4E5YmNbi5NsNNPLirmNkVnFQgARddr",
  "key10": "5wQUTzAXX9iqRoBXqnf12FBDACvWtsigp73iFeYkzitkFbUD7jrj3K3nVjGf7kgsX3KqNywRHLZbwC3TjJy2HpbW",
  "key11": "m2iMN5VWsoxpL3EfdQbM1DDYcGroSwg1kANGbmCG8q91us1XWtEw5ZVJ5deZRq6haaE5bneo4PwuMgeEbEU1Hmy",
  "key12": "2egJraoZYTNJjyAXb9Mgp7PCj39wHe7hdcxLiwubguY1JScAzh3oGrhiiC3nAnf5ec7tUPDbdeHKuxPp9hfs4ukC",
  "key13": "4nTkcAh6rYp2bysM27Skc3KNdXcE1BQzmC5gasigxoAtSKvWVC5oUy5V5mD9yy3Zb7NEBy2CMFZpNdFsfia5hD5P",
  "key14": "3t79cNjqptHQb7QAFgji4caHF9qsFUxkg6fiPhuW9S5PuA19Hhn8Y4Bth1HbNU8EEetPAHD5NegHE2JvDRdBkHi7",
  "key15": "krdePoR7MWJHRhrrQhaQ33vyetvgRH2mri2q5PntruVfZ88CTcWu9yaaFdrViH4VxWU9i7b6RU9XeGcDETm3B7h",
  "key16": "YA7CWHCJtRn1kUQf6mfqJfSi7LVpx6QuHtXv15Wa1wCXFKDf3qjhaFcu3vbmwc4GPDgwju8tEhXQnrn4WPkyw5V",
  "key17": "534jZMyUq86zxhFbZbCtgqSdR64unK2qLdw2P5WqMapkCjP8Apo9pSqaq81xiVZu7srmrfHzFBqSThNhhyvkZfaB",
  "key18": "2NPEPYRNfD5pZCx1UCBC1m5E4Nmiz9oZNHvPdJLjgGMhmKugRMns5aeKC9tmbhmiLZJuJpeG2srDUbUJ3rvSjqRn",
  "key19": "45bW1ghPkipebodroTQrGVMmvdpJgejBTNMzkudJbD62HjQo6Qx61DZVzaWnRLyBEZ45HPEEtwax1PBxViLXtBmN",
  "key20": "4MsGi5QT2Ft7AnnSLwLummzfHhjcDCSLqyFpQqdxsBTN8ETz3iR4oTyZikxNqHHcsaJjrvKfEYiPCAcyiAwToY5F",
  "key21": "3pQ8NvKd5VybK5agRqxhSDZjCPXwGBDH3BVbaiWkoY2tGEJB6WgfG8MW6YLvpSTdjWNhLEPYPAn1Z8f97LvoDate",
  "key22": "5G39kTq3KiC8dx27t6JjCHuP6bsMWbAh2DJr5dX7UQQdmjuy49cySdCqoW1CvnJKbyt2V9V3rzEsK5QSXrkVdSQb",
  "key23": "5JJMzkpcX4G5HUKYF8vPJdJ45isHKUAtmJwK66KtEAvvLk31WVYvwRawKpCcT4wxPFPW6XPZEg1Eb3H4PL3YVKLH",
  "key24": "5w1WHc6JztPqBhuxKvw1R6KoE481L3sf8Gh45c9ZWynKioM92q6aqq4SjnvWLgmeZMeQVvbhFEnpwad52ST19jE2",
  "key25": "1HvR1cZQuGu3yyszCeR97Gf8udXH7GTobJtL5fVqmp8miLBrjwMbAJyLuAG8pqV3vhNyM8Ur9Vr9Bsqqh6j5Dgj",
  "key26": "2H5RLBWWA3Mw6P6ogeGXthuWoviFuEfHhrtAsVdiux739pR28soqgXp3NJCUhsxSUhNkks99msaKH7JAAy9r2uTR",
  "key27": "3HAM4B9JHCuHFD4ZYK4v4X9MfRxvMdSdR81Pdztfb8FtbL47PFPMJ5fDCcnDy3sAqva2zaQswjHaZo3KpsZCGUuQ",
  "key28": "4hKzafuUWjYFdCJ51VYWG3qo5PKXdVQLhiX4ZNCG18t4gFJhtt54w61Xr8N3DewHPg62rh5KVneK4k1Hx6s8YeZK",
  "key29": "5xAhxk2sDT56Vjy4H3CpjLWMYKJEeuAJoJNmYwJfZCKqRTKQnotGfTSMLj9UXhiekuVUZow6nu7RXQBG2YwMYorP",
  "key30": "3jf1waMaxsvJkUU1uK3TGtAdHu1Nj4T1bD2c56BKgM2iaWaUU12cbuFFjFqcvU2v99jEkR5wpek8wsDy9ZmVkAhc",
  "key31": "wPQifSCs6TsigzULWihrKbqdGBDLtjCBSgAoerkHAu3G1DdZGqWgGbZ655g5VWHefPAu14VgcsawEAsGqNeooRj",
  "key32": "jDNBc9DvhTi1T7B5aiZvuxSY1aikdFLtGsbyg5hLjT4uwjSyxffTWeBTw4JHVLHdsqhfr8cK3WFcK7CZZFDoQ72",
  "key33": "HnyzFgVmgVb9yTaxStnU67JFENQkkTYbtHJEwdY6Ed6tSNH12uhznfR4Pc9Uw34QQhMdL4wdwj54VQTfT4w4RHi",
  "key34": "5PC6UrJz3Ex2znzKyrRaLQmSMcTs63tDKgkEh2TNraaMUR3JfJ5ygozcNw15hJTLYZhHSF3NcNLtnz9zXxQvvVhF",
  "key35": "4LPua1rH1jxffiPXnzbkNd2MNf1aD1jfwEfQZhWRV3MNzjXB4YnUVQqvAdbqLt6wH92JJDXrYZgaa6wu1QkSxo9L",
  "key36": "5XmqsqUPtjhwWNm6AjMLXEafpeXtfpGVcyQSynN8HzEvGY8o5R8asFH6CT4iRvS8z1Zq6rkFMdJcP3Dte3Wbxgzp",
  "key37": "2heHFaGvykHwRyNjJmvvSkKu2TQFvgt6HcoagiTT1ywp1jeChCCeCkvzJDbwXx9EkZaCYmAVsu4HoTdmjSXUigWr"
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
