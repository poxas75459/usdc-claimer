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
    "5AQhxPeAzgKs5nZnWKXVCxLJmYQcmipdqtpABcoinHMxuivpncQHYnMjuy86m8yHPXPzLY3TxsJ5EkioBNhbQjNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iXnAQk6ybVzGxsGgUJLUTMznRoftat3e943fG3akCvdc4XbzEQohnPvY8GUSvpjXjAxVYjYrM1rsMaiL7ECnGo",
  "key1": "42hWPQSLXRGVYeoLWRYSL7VvD721oV9UFhBUp68UcdHSByonQhKzM4LdSuVHmDU45ZCQ2TWqmBBTZA2B9cLCzZCq",
  "key2": "gszJ51oBuY6yFat5m1LRewmb3X2qKLceHHGCDZLPdbLoMatvhEqy6Ks8WT2KJTP5YWMV8KEsH4voKJkCiSqLUFk",
  "key3": "cCG1NtchCBewMof2egzyKtryXGVoz3T5QjhUAsykyvMuEheFFcfmXoLc9gJhhdwXhxWhXMXqUrdvLHppKcUAovF",
  "key4": "2DJpaMkwSUqTVdMCit831ZGsknAFMznz9R7NfGWd2RoA67pNkNbk432pDZHG3NLh4PCDiDMoAxVJ1BZw4CLdRXs8",
  "key5": "4rRNKKYAM6tPMVbTR86qE53C8enu5dpoFWxmZ5uSNgCUU57j5Aagdcf7btpfGARhWaH2ypuLjLrXwbB4gXdvRG6k",
  "key6": "4smzxZGetvcM68gnfE4ZdYt7ZgSC34P4yxpE4ejiXNLCNCarEGCZFQDEfMCELnQyGwkaNFyGyaBzzZFBsZAuX1iS",
  "key7": "5UnXHTM7J9u5jmifUqiwBi643Qi7ZYJuRpY9XJHEBFjUXWkTPamUA6hTmvHYksSJTobADvZrzAj2iZA6yjRSaEgC",
  "key8": "5mVA84haAYR7woYpTYB1zCU6M2cqrBn39hm16XuAo54Kx2Xsw9z1vBPK22jCvXiqTtt2BJvR7kVw5rnDif7qTnD4",
  "key9": "4fAupmitz6YAaZoVjVeGago9pCwAQVy549Fy8ZZrdKYgzQa1yZyUvgmebXJrpMYua86CAqwZD4Ta3GWWt7DnVhE9",
  "key10": "4HK5cE7sc2hEbQW2to2MxBgp5wJAoBQCqnrzJYevTLGwZVNesnZK3qsaCsgJ9A7C3UJSQbCkGXtupuqB8J1vL4L7",
  "key11": "5Vj2z1AyaKJptNLpoY5F1Vu5WVtmAAGmxcwY2S73ee5ZyeyAEcKmCd42r3jHRgV48P4uYJsDP3ia2WePSTpjtULB",
  "key12": "2zLLERPfpYiS9d4cZdHJZy3Piu7418DANo7fquHtXXwgAWXYSoEbZ47ev476MxQHEBagpe7JcEv5338t4HpNgNBW",
  "key13": "3v3zTPGM9ukrLTbZYcyguTd5tBtQcgGfGLTHKrkybMe5cNgvVQdwDzew9UCCBYZf9SxQ1QYkvp6LXb5A1JsKBa5Y",
  "key14": "2AcBwN6VPuGqN3MdGyXGwK2zExg9wpzDdYtB9mf72sbAwVeLGvccG7NBqc99EJdwWrstyPSXJTKMMNFY5ozR6QEe",
  "key15": "4gxQoACi63V8GatLC7h5HeR47EzDHkChr448V83PWRMpz11yUXfG3iUSAdStvDFPKYUcF2UWYt4Zup7UaVyg8E1K",
  "key16": "3XrSLem8yCC58LhLW2yfcQr8YXTB7QeSS1FJZEAQGYceBsJ1TA8Yt8uGVh6rGFXAv7esaSBbpeg6vVi2mgrsZ36L",
  "key17": "3czqGQF9sCyQYZNM3saYXUwKVoE63FZnJ5Hd97LtJLiJrK2dg2iCQRpx9wxpCK8yVURL6gskAVg3djAww5j8ZDep",
  "key18": "KfyngphWr2hTQNq8LgVzYwzDB3wQkM8TB41PAcYa9M4Kroh8vdvNuoHSWDqfejYVrqpPqHdeQh3PaKngVFEAaKp",
  "key19": "4ezzkrJN3CsBzifJDc2DLBXJqHSDid6F7bFzqCfffrUVXSXih9K4tXN964cdWwjfhatCrRaCDjBN6nVfNZZT6wd1",
  "key20": "34KFgYiMqagdgbhQPRTTYUXackzZwzQSLf4fdBbFeo9ZyipxLz9iuhEYP5jwexe27wAHEs1tR7pZQZLPzqjN1Tzn",
  "key21": "4Hh94gn1WvS7uB1jdFbTH5q8SHg6UKpA43URQ4XBM5xmDZxyuZEf4GGXUyypwmbSgXiVsaRExmch46MFrKRt5eMr",
  "key22": "yFGXAnx2GEh7TQcMNFmnbKPqAAV9HhnhrFHrqZ2jRKyvDymzgbZ1nLfzgy7Hj817wqrseJEHoKMeWLPeXPEAL9F",
  "key23": "43aNtjfu2A7JHEUWpA2KuEWcfMSrpWjhJMm2X3xKfzWh4mNxiQvPohv56wogC1G9pyezUYe9LRWtWW7eEUgoRQxL",
  "key24": "zuVkWaATduCq5MxnsPHnwg56y3GK1EVvisGdD2VYdSzDKuaNVPZ5T9k6ajpbL7kPY95H5XqUixpphsKQrUiCqj2",
  "key25": "4952iudQrzQnjVscRH34UnDyZdKqsjA87n6M1dJLQ9d1RnhB3VxxWYM79LTG32q7hVqArcFEL9YeF9uF38tZEVwP",
  "key26": "4nmCyjDsRUBtSNw3C1ZJG51auKgaqLE8qc9xjcdV4nFsGfceGarMbmwXAzKtczq3bjS7juhsNdHVLEr4q4d4T9n",
  "key27": "5X2f9EJJQ5W1qdkxihzwcXSvXsF3Y2UW7m4SjjibTCq7hcnb9NFwX2VgFR5euAytcsM7J11kvnqM5JYqtEyfDTrU",
  "key28": "zmZuqkovg36qEhTodDumwTXZdMECrmCd3YgnEqRVjtWjPyzTGEpDnuYW3tUWvAcs95ZiepRpe4WWF18at998khH",
  "key29": "5H61fKouZWxGBPLh439SwDY1TpYdngpaUuZ6yP6TGVj7FE6uVPERoMDR4vi7yGz7RDgCgCTQGRmmDbBuuELWraYB",
  "key30": "2FPP9a8vk4vHB5WPeLiohgNEi2NGqeqNnraFgtq8dm79vMeeX8dB27p8a66NJ1EUGyNZTxsduenxC3848r1nfJWG",
  "key31": "5zjE7DZHi1PK8rRgHxsLLGzM2dspDT8jPQRyg9HQZ2qD5BYQbe1eYR5F6RHQdJ7uzJkwdmZK6e9ZW1fH7wJkcqwr",
  "key32": "5vwxHBnwUYDA8rCC48ThkRZqEAcwQRfM88Ck89nUwPNGfy6aXQXhXMg6DDmFCYBci9zvPCTrbVh5Zg2owUXwkC2g",
  "key33": "4Sjgry1SVYqHkW8DquVaynA5VabVnx9Hsjzg3MwQMxb2nHYhFf1RQFmNrwukjdeQSjcsXCLCvqVzbfdr4Eay4PnB",
  "key34": "QmscpML65N2EyP8QGb8TiPNTgAQJ5iDcUJpU6mNDqoMaZ7LmN8Tek4X5zeZps37Dv1gh7fjFvX9oA2owCnpYDCv",
  "key35": "2jfHxNWXRNSZPyEs8qsQBv1GbvCbGr24FysRw6Z1SEixyszamuUh2FTHDypQQsjZFDPdF6RHnKk7H7BiqwnQW7Be",
  "key36": "5nDMSH29tjy9d4Au8VDTLn2eQBZTktRHzcRFCbfCY9F5qQ3Ct257uWyo9zoPNuVmv4Gm24mjDoxh55ak9MsY69fC",
  "key37": "26cCL1NgKaN6z3qmZ1nG2P4a7Yp6xj1p2zmV9JyRTVuN3d2zD3mFkG4iEfipmNt9AYXhd6xPYwRA1DyaSPdPPnaj"
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
