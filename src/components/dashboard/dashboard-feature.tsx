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
    "2o7RMHnKetc7qxMrDZZ57BXU96ia8xQ8b8thPoYZVdq6GkLMEqEWpFKW8qY6CLEbdkVg2UjVgo4KS8XTwPRBZ7Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHY1gwjg6p7zu2TVJH6SuD6UfzZomSfgpcq4JHxG8wT1s7tYxvrBBn7FJcJ7PXxfUVqgcPGg234t4by4qnD5Eiy",
  "key1": "h9miVbD6RDWVmFiMGaQY99vdxTFxAsU69pT7vubMitTHMQiy68KYZejAnNTofdqh9EN1zxD2ATa852x4ANtSs94",
  "key2": "5aS6QGE7kco3RZeERcVfFe7nzvvyAH2ygSyeCv2kUxWF1z1DpN5kZUhujBCdf3dFUB48zjQx4wThZSbeyfRQ9j9b",
  "key3": "3k4PLBFzWuGCtE6b46n5U8nJG96WeLjUYmooNFdm1u83KY8ocQfrbXPWnijFrAWFZCoza6UGqfyn2FpSdAGN3NyA",
  "key4": "5dgqPjPdQ7k2CMwXxqB6hrp3dZ6dbHGAnNm41tCFSbgyxhLopdMk7YkgP8gDTJiQe8v7GmRuGauUfnVr6MXBJuia",
  "key5": "5Mt8zi6RABfxRS5kYFtydbFCpDhEHfKSmh5M6LDz2EGSUdhwdg5HnYvFZ6wkd2KZJkgdPH4kjy8iVTVSoeqQasu5",
  "key6": "5H18ra4vdNseHTorqDrEyBeQvQ3cdrZxVZiih8C1uyqt6ePBK5kybcQbP2f7ycbJU2RgMfDG22mTMdGQ997GkZKV",
  "key7": "zf43oqHgUzrEnGmLm2Wbi3CLS7Nq1WVLnRPkAYpMEWv47UQ8MFj1Vq9iwUpaD9BeL2r2SmdRM4FoM1q4cKy71U6",
  "key8": "9ZpmTdTmKYVd319UnSj9Ho5q8mg3ErYfomaDv2GhSqLDKxJkHxXpTN6vmHXbm6nrMVxvCcW6xKnFN8uBJMd4WqN",
  "key9": "ReuGNn7vTdYM4uQkepqQ6ktiuC2gY9972pnz1LaKNpi74SXUDyks3h9KFmpbr1NBfwNscmBFBJZNkzLASxe2DXi",
  "key10": "3W9FGywKtGWxG7muc7RE5qEYGgdHDWYbFWoiDB4aP51N3f6SbovckpK2V9XmaH7mGXuSQsc5a4Rd5MfvXteKJF8w",
  "key11": "1bjgNPHQ1mQ1M8ayM1HGJN59YwYcHoaBpwEaYg8TvLmKvZNeDgdw7RKv7Ti2DDiiPUtQGfTXyvhJVegZSRREpQi",
  "key12": "4QTzpRFZR5n919tHv1qw3C2y1ewBarNGoDbaJBHPeHNEkkyuPKGLrnBTAzKn4sS8ChHKccNz89YnTXUFS1JqbMX2",
  "key13": "27rxM6VDQLHE4hydgabfw4xR2RZfmtCj2To9fePaFLPovuNzVvjuZTYgnmfxVTVovUQtBpMjHRuvdFAjnN7NSCRi",
  "key14": "4DPFye2rvGWCWLGvoVmQnRVnVtjGMExsPYs9evyXjsMNt77FcA75eUEeev6rcRNjJ119NnXN4QguDBj3751E7DUV",
  "key15": "4iVXiktDaPvdzg4zeXEX3tb3uw8y8dHD7mkf4HXRBGmHG4nH5NKBdCrxXyPWuXrbpyXUUhQ5LGhA3rw1DxPEVnvM",
  "key16": "5rFRVyiVpuj2WXEdGWarm3Jvsgiwj2gpR1B2CaiDDASVvC9iyxiJxJ66EHgF93Uuexv7EK7spyRt41gnvYZW44iB",
  "key17": "P4TQgdZHoZTfFWsdzaMQHCz9oTgWqX3w58YK6K2bz5KakmDUQhDiB3ehbx6DkFGrs7DLfkmuuMMm7Bs2LcdMz27",
  "key18": "2Gi6KnsRugWva8D88fSbGpWAJGpSBz7GQuRtyDP1Ut76DacFbWCA4bwxi5CSMc6gmAbMbguZVKZmUHvCgTcbsmhZ",
  "key19": "2JjMBRKzVLuvzDrc1cjyoaeU3fyj2TqNXfn7fW1NQAiQ9DvmjtRfALYXX8R2AcfTqRG8tHmK9PdHreFbyL3Gn1Mm",
  "key20": "1bZqskuwwqZ2MHVm4UbiuYqE6NpLPo7euBWkjuiDS1u9pxduVwQqTQBHg8HgKY2139KVxKB1B2iq7sLoo98uCEp",
  "key21": "Vijy3UEi1yUecxTJMq2MJkCYc7CYajwmLqhx2JpoybVwAy2ahmfVduDp2177gyEvoYUJBwTKYkBjpWcCYJ3TmW1",
  "key22": "2GnbQ6eQ9Kj4pTWJNfPdBc8PNtMwZ6TC4E6Rjbo8Jw1c5DCUDmXc66nsrhaQ2iZAran6n7jmnGB3MPAAFXaSdhJo",
  "key23": "34dtvWZvyX2sCVomQjrjgSgoaqtgxFcpyko7cfkhcKaoWX31LvjUreZivxKvYiMgfinR5iQBLEVMtH4oAmZmxPV8",
  "key24": "5pAeapNg9MNjsYz32PsEpuFQVWoTtQ2zETpBaXFoGAyfrwykRxePmboZuiHmT9R7HcxvhvPkhsTFqcQovuNMyGtZ",
  "key25": "3iLzUKPEj6e5virV9z9yS1s3CT5xuiVzLZkC3XzbrTrwScVquvvayAwEWnAof3jgfGiexnAsQYoX1AejjXYyADr3",
  "key26": "3xobyJgVAVGiHuC4AT3NfaoR2dFfANUFdpsr5V3GWX3bKto5PPcUVYzbHZ49ahkMfLhh9VDNfj11n4Cg5xGsAFQB",
  "key27": "3QeRw9PZmaksP3bcUjjWZp2PFkFudGuhA5T4WMeYoaDKhi7yMaZURaFSY731uFoxbuVMA5PWXARydCqqfwj7ppup",
  "key28": "31d2L7yEwJcqNUDTykrBnLT3415yR19e99hnrenWTW5Dv4p51dBjKzPfCA2JP3Fizssyux31np5onxw9wqT53Jzk",
  "key29": "2e4NWgQaskaPPYwYV6b7xNNxbqa2mw5LUZn7r4bkpBRTrCothGMLSPzDiWVd7YqwgKL7R8Uc6FJer91SvxkTToew",
  "key30": "3jvf6JteDxNzWHCPq9Dq7fjNoy6U6g1a6kDkLqVKjircEqdJsqSecs41V1yq9SewGtPHjtAPe1iUjB2Cq9mmAMHf",
  "key31": "2u94oDizpV1VkGihGFmgTKooYcjbHpH2QSwN9KUPTB2Zq1xnzvbkR7JcohLfAFqRuVDw93aCsjyzjX8v5D8V28Nd",
  "key32": "5qdpKPPX4DUUXc9B4mbrjPdsAyahTWj8z6d9VdzHccnQi3cJ3euNurW3Ruamcoo4EeVLF8Fg2bbSFZjrUwvCSmRM",
  "key33": "4mV9MnSjnoCP8g8gkrapPYbpZX7cJQjKUaPtXKgCbmqKCpmYHAF8niZoGMv1ReavtetZFU5247XnHsKWaHem75Sy",
  "key34": "5jzQBcaVFU9TAg5wvTGbDgJ4a3NCzK4Qsa43aPdK4ZrscpVQ4waV7y6XBYaye6HEDMEZgpdf7cFWhvA5m22ZdRu2",
  "key35": "237viCEzcxxY57dFLrB9YqdRevfwj9M2sN7BKKJf7Ae6wQ3WeULb3GYEYwYtpwT2UcGgWPnC6cv3XaYFrrtdmyrc",
  "key36": "3W7VaznUror315MvEh53affM3emDGEnfYb65vin8G3L9xKV5Gu2dsaMyzzDq3iFVWjsZUk9PVf7XQRbqjFyb6eqJ",
  "key37": "5ugKirJjSfkSZLpz1LDd6yFBGyU67ZM5HM2eZostsFPi6pSW38GZSXP6cfEG39KWbAZahhiP3E4R8WHeLngr1Zr1",
  "key38": "4jeaH9cstjZcEiRed3wUy22CssDDfTDyTcwE4AM3Nztm6xPjsNu8mYdxbnxSjX96GPZBvKJ5bFfxKQPpp39SWDsa",
  "key39": "25kP276dViVHcmwPZuEyz8Xh9t7Y8CfUrf1P8ksxcVZC3tZ8vFGeZHjTG1UKeyjyz1KqJKaYgbCvmAJ1RebVguXL",
  "key40": "5oMC1fjJKbNDRSq4ojzj6D4Ns2n7DJvtdBXXt7LonQE2wu21tsVdwvYtDaYCVAejxCFgCAqxYQ9SeVdoaT5eQxJZ",
  "key41": "466mLnci8bX1YHGhQB3F9DtLuaf2FyjfMJ1jC5mSdiCE2ybaQ84k2fY6bBxdVeBTkryyz5chF2Uq5rjjb4GqzyGS",
  "key42": "2tQasQJi5EgrkeJ1hEXjKDKmNbWG9NeCTkRnP6gvEPyQb6EXXUw6REJFsnvsoLPDCbmwxoQugBFzgpmc1g6wi14j",
  "key43": "3896VQ4FoGMGbuqxY99gRnDHrFvY7L2QEKeMQuBYss6SmDvyBoqg3tyKQHZFLiiGsksRdEQHuvi3gTZHCfqt9dvG",
  "key44": "4Ud6pR2J2v4uS16DCoa1NdEASVG5FwT1Y64gRiQ2yeF7BYsyjNv4H58wfPwG7FkgPdMMzJy26hvRe8gK1ne6zGQS",
  "key45": "3WfkcHhuPfVtnS4F1nWmEq6z3fpRYVU5frhtxc3nWdX5peAdQ6EHpda5BmTVMk1Gxjoe7qpFR8yjwoL4zEZMfqAR",
  "key46": "2EAw9CLPDksZKrhoCgmz8BmYyLcGnBL3nGzgv6UaC2NUHL7sRgLBxjTh7YYnzwAEcxcLUgNvFWRzQUhyUrwvwvLX",
  "key47": "22TpnTNhF4su7wBRPGGtxW6wHWehjQAMHd1wAHrXLf3KerYhEZq4Umira1UwsM7pXhbvevJTGhhJzKpia1ZorpdF",
  "key48": "2CFcy6F2SzM8VAuPLyTuRyrEuRbVNGeu9sPxtmjamWmZ1c9JjCCaXhh4kyaPptRRk4k7PrRSZUNQaDWU6mpmDoHq"
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
