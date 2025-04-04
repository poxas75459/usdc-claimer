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
    "2RwoKPWFo7djuqc2zPqQUBd4B1QFukZfxKSoxpRST33FkPbe1ZxKsV2JsHqVJxV15Rz3fULpjndW1nvuZKwjvuGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZiZMY31gdm1djfi5ZvEsF86QWnvSGzZ2cRTouQ7dXsDgW1bvEkKrdcWFHa5J1jEhYnEpJ3DGQEFitdpqUbbGuh",
  "key1": "46rhTLiFkdcYNGn7cpVQT7s8PzcZoFgiASE6dyLziwF6yHjQ3t5URHkVaWhVy7QjKNY4PeiTFiDUXtnJ3SCZvx4a",
  "key2": "NwMthChuQ2jLBmwrKgg941xUm7bQxbTLfqQ1jv1m6UqL6TTDT9khCd5aHsfDELg1VmZ8PT5NEtz7hbQ2UAQwwnj",
  "key3": "3CL36j8StTXmGEszZvzAAvhBFHXhPyxjv3BhQweHwqcTyCnhDh3NPQn3hQcshsFZBFJyx7QWPcVrq56K5kUB2hvz",
  "key4": "2U4r2zJMG5LRfzqmN58BoibNDeRw7mQfzZPCALSzwvvztebXJr4XcwJ8hiKjq8ezYzkxHhLmtCPqCxPZcBqyaHvH",
  "key5": "4XEB2pzDznEPBjBE8SaU6k1mszGCaHb1DjpmquT16ySyAdWdyAkk9TytNtxpQWife4a7Dkz5krczuRxmggoxs3Xk",
  "key6": "4f5gyvdnaHzyfjfF2hSedEMfYkmjmwQTHnPWMAqMfBoYfLLQCSwjx8zroz4b47yp3x3RP2veS2BBavbYYtM5EAss",
  "key7": "RXFDJ9787PY8gYpAr5zkZPvh92pSX2EE991f6DG73UVDX3AekhC2seZ97Stuouvnt4kMqinXkDcrhbafcydofKJ",
  "key8": "VVWA3U91seMj3GToJtF1r8n6JywbxKxhXTghFfGZkHHuY45JZAhbyCcexiYbnybHHcvWWTcDTqyY8dtPqFazFA7",
  "key9": "4pKEpVh1LsZVss8m5hwF8gjGkGmkzTfG8FNmTmbrcCEYHBFucRZByYdFc8943WBhnmiij5etbZ6xfMVbZw8m9bth",
  "key10": "2reidZfAAn47qN2fS5Bw5cK494AdSTFiDUUmq5MW7ooCmbj1A9vvHoj9HmSA9EvqnLhWCgHYxAENBruHmnT9riLK",
  "key11": "5dbL5YXPMzQHfQHDvodJC5SPJVM4C9vEcvqSG8DbbqwpJCRjeznTSYYWqcAD1hGrDXKF9kP2pnMvaq5gcK1r9erg",
  "key12": "5125KYCs6tfEpAnFUZcGqua59z6PAcat15y8RivQ41YdeVJQF8Xf1Tzs5shpMF2zLpsJUa27kEHLwVizfKgesDF5",
  "key13": "21RFJBYyS8Hwxe7U7ETpcchC5SWEX6yqvtcvhpsA7W5VmHyXqR3zWiXB86x7kRQwzhgfzyo3mkFb1xMDLRdGCciQ",
  "key14": "2kqVJ9MLQeQLt8pMq31Z6TLBcKU7n2ajYAq21xHnb2g1iYtrg8915vczLze5ktrj1Uo9Fs3wwohgFTp5Pdrcc8XL",
  "key15": "2WPY1zJLP8b5rbPLgmzHLFowXojLfG49W3FMuG9VSsyKnKGA7o4jjS254qzc35MCkSx1KZCCLrWyvX2w7PwogKdV",
  "key16": "2tgHMVZZskpV14eRbNVHL8c7VjD8hbT3SiPEs8uVjKYx9AR4gG4NQ23omxcgfCRwBZgY7wftfYPZrycMAsJKqb4m",
  "key17": "5J1CqqeAuzd1hXjDXY2gpR4gAqHPqSckh2EBVp2j8EZAo16PEi4DDstZ2jWpci4VNXJjQYAnpm2MmXrrHKQJZJN",
  "key18": "2RbGL4RqNcAFw2HVq2UXV7SQWxJ9viY8qXvTdnnmwjFYUBGehWLSid7eK4bqeov45fo5Sd1jgGLEVAQeDwxEQvhm",
  "key19": "4VeAa7fujeaVCYVp9NQ585ruBPLZay6MUZavVW8ctmzLYfLRqz47y2FXh7KmmrXcJCP4rGp5wRsFjDupDPtUAscD",
  "key20": "5eLFxXcun9Rj7gHiBdbjqzDgXs6Wtg9AVTwHnZeZPoiRWXBVFtBihsAxgAKvkkmgB9stANuNATLUamAgBJPSYvWX",
  "key21": "A8BykkoeCpSUTpMhssq5cyYvQywFqYWiePP9zXDPJiYCvfstrA3HMUrjDe3vXaeC3mcHacyRuPCRwS9fWUsRYTv",
  "key22": "42DZuyuRXWj77bQJ4WBxCqNLPCAKCC9uUzqqGavpH1PkPpNXBPc3ohqr1J65qEVtkHrhAf4Y3T2457S9hxFr8K9v",
  "key23": "5c3bvrsnuztEwrkavJqLwMdobELSa9Ek7jUowMMqqshBEQhcVmZhSojy1QUi2wS44mw4mnpELeyVt3qGaPQ7egrA",
  "key24": "2qhARmhvhBF2ztw5Ni1cadcLYDNTjhjfvSx4xZ7CiyALs6hUsEeGnxBm8rG7khtm2WGFYByBuMpA7vKDwWjhud1m",
  "key25": "28vXCkP45hYmYNR1zAXFyZRjaCFrmnfFtb3nJHhL1RzuYSpYm1oE2CzuEiaNLUxVbMxnBRDC76ga8WYtsQJ5fTSB",
  "key26": "2UaDRbsFmPfp4ditY4ft8nBgq7o34P49CBVRYbKPmyWKjg6fhMW1GgNPLNi7saPuULo6CXS1HoKZNWB6CWRMDtpX",
  "key27": "5dCuBKXZEZtcSGEQnfSUiNhbGLHFwCLrr1sXMdFUxe3RpqhRk6EUFH1ZvhqjyQckKuF5t88xSRmsSouLW3GcRf3y",
  "key28": "4jfny6y3Sv2qKqXSBXjF8ntY1A1zckrTJCE7LCA4qk5GxPhQ3zdCe5gx6vUdYnjujN7v2eHXMtx6zKLzh6NrQebi",
  "key29": "3nZxgTek5bbF6CePqotauQmDmNwhDCs7nsTj86YGiR5r9ro55uqdeDkcu1JenD7wTYvCRq66ZWCGhtLfXkvU9at7",
  "key30": "45SaLBEuFEtFMcfUMBLeMx7jkEztQhN3UycGNCouLvxq7qSbccNmYP6wsE42JzW3zZ84qfiSdmNZL2dv9b7ffb6N",
  "key31": "2WZu2q1t6cTE4pRLgLnEbZqE6rCxezSh2Kj3MeL8HB3VMLR1gKExHP7Cxux8nRmtuQoKVMTP3WWK94DJSiQA3VYK",
  "key32": "4ZHfsahKa8LiYzPbdARMR6GcSRiNoLhxxaqGjEke4L6tHputbszbQyLEQRszFS4f1SgyejVDoaMoHMeZZHtUeuWt",
  "key33": "3BcUyQ39Qga4hQGzHhFw94WaEFSLXMWoAApQSz7uE7xogEsEWMC6SwAfuhtGbZiT66Xbfp7wsfkH5Gcv1C6sdP8m",
  "key34": "5N6K23cqHwJkxkBYC1Zq7muSUhoZMZb4rsW6ikdqx5ksg3Vwo3DC4reFwT4BCfrP8Tog4ZDiikLfS1KsjLYxzPiQ",
  "key35": "pYzNXkCLwpL42m3gjTFVVqbvv8noyNZDd6hHuXqyRF3ZV5SYdDn2XBYA231ZuHp61SodqECTm1GmugZuCjJ28Sk",
  "key36": "3iKzhxPSr1UJ8BgK1V8vEjFaheFZCNYTRMXDwr5crkA1TRuf2DTW1iXtKv4eWQFj1ATvbPwr4jrzF285smb7Cj1D",
  "key37": "5PwKFgQaNJ64XPNSMUcY4wQwHThYJq1fQJuff7ayBvUfXFF4T4C9PTx9x81KrFXdRaeYWYQWorBY1JU8gMqmGz8M",
  "key38": "5V3FyjYs9AVaCfPWCrHDV7hawoj9E5ieGLodiZaAthyFjviJiZK1hoRnTGjqtbU6hcW6RJbJayQruTqVRLApXH8R",
  "key39": "3JzSHkMPoBGSRLKoghf2kLNQ6GxxpRUzbzkHUiQg9cBT2d17zGAc2vik3abEtUfPApSBMGT6nVLZtBWwfLd86TMf"
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
