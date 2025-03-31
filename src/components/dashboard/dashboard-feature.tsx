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
    "hJP8kNTpUuQsEiBnYCgPD54LwrCekEG83Y52xzeoy9bVTvw4Sme33dYAwMEmGPmbmwY8u5poccrtDTKmYi11dio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bC9Mbs3VkoxCZwvLikbM2uQdE2N7D1hQpa3DqjPna4Ys5NAjYBwwRNFwGXXDhGWcrAfFzoZ4SLHYhJHMLV1J7Me",
  "key1": "3XuMLNCZAjHYASPTuu5PhyBW2apTokmdFdMxbbMkDzH3vrjxUfvMNvj5HVDAA7C22mBBuBpaMzfPmhQCBwXKYyMR",
  "key2": "ibFUM4JBh6s7G57xuGyPuxxvab99uEVjUYVzkPWfrDCuzikdFoVWoDHghJTHRUF5MkVLC8M4fLjFwDz4oHa1EDK",
  "key3": "4VQDYe7bSKz8zwKnjPhdBGnoNkK4Ysw5PDDWX27d3wLGkxrP9tgq9b6eVjTaAZhViWJ1bWcUNXM9Jb3QuyKYRzP2",
  "key4": "4zcWQ479j4mTDfDhH4wtVAsuWwDk3FbU1BRyoVAHMcLzgV4UVG8tjSUuG9ZWDxNiH5iRaZi3RfRFNzf82Jc9UcQ5",
  "key5": "4rCDDnosmpXPZ3zbjb8DejpV7Za7LVoGxsvzpbvH5u8Lt6jJtaAg3XFKpUcvd1XNVn8b56LEcwBERBmteLXgEu6m",
  "key6": "64zDizTNYXitXyAqR4fthrqGPXc6uZXVfiZ5fkMSgXMg8R9rCVUsMthirMSJbn24q1G6GniEPc1KZoP1vgWyYKKV",
  "key7": "4Zf1rEhiBLvBGDim7fRvrBBTLd6q5aDpzhuVEX1pVi7fWZg85G7SzuYwgstjHTbhpNx3kbSn3Tt8K5313KTJiqJW",
  "key8": "5wUwxiVJo8uaQQ7PwtEyMtFiE7Kv6fs4ijFxzPNaLfNptFp8tSJPk7aZ8WfA1LtDt7Npnx1yM3B4dYXCUUtaccdF",
  "key9": "22zzk5VUHyYfK9AqyEbB7pnUyi9jFpXAVyk3hrV4Vn8ZxibdS5vCr81FAMjQJ4vwePa7J66uBMB5R5wJGethp1Gd",
  "key10": "5UtWWN5apWnUxay9Y6VVXVokhFG9k6uAkj1LzhUYCWS7TsqKmEDQBEzqDLgrF6JrxJXUnWseFDjQjgdZFsaGskJq",
  "key11": "5eWfq7jFyhrjTQEBDehyZWFqUPT9vchGcjoHYZdTQoQTAyN18vbctckLMGzMDEvv4skpofotD7Gax1STshQaTDxx",
  "key12": "5hkNYkfdZ5axuuPocgxtmxQagyAJ6xxfT3wZfoQVbYJBrXV55DV926vQxCdUR9UjDnq4oEfjmmTpS2JvMokmiPpe",
  "key13": "4RPNHeaiYh62VFf5rBJZ11412db3NajsS4fW4HSFRwBDwvrtUJr9gTz9MYLAigUWxUTBtcj1r1UYwrSVFa3hqnYo",
  "key14": "56cbQRb6qPxMsjBeZFGtPv3g2jcMkNGfSRtpSaDo5aZrjDrrvb2NLRXTgN19CtoX1Ld9fXGBArSdGZ9ighxaxQaW",
  "key15": "Epkz4FEnGRmw7pZXxJyrCTCwCYPGSzYraJ7PWiCSntnfW2o4ntVsjhvwtUFcYjhrYPbVLC5fqBhDiKGK6kfqegj",
  "key16": "3MXZKKj9k77MGCB2NcR2xxBDyHwZK5KMY9aQRRpAm7p94Ej7EqWeXWc9EbahFYVwcUqNR61t3guxooVp2FWBuwVL",
  "key17": "ro389MbGYNZkjVHcoZ6wWEK739JJd2S7ueC87scpFpfD9fpYUTXrbpakoKo3sFHDRPPs1ePe4iBLrmoKe4SWo2K",
  "key18": "44nfxaS5h4GZAaCHBAAPxdh3jUabrK5dVTJhCW2t2HCw8yZiqkKC6mjWWthaJpJ4hD18PXMjR73fMVjdBq5QW1bi",
  "key19": "3ayxwQNhLxxYcmGFREPZ8xKkg2c1YMiY3WSNyVQzemGP7fChFNwy4DgAhuqJhgHKRjWYRPNvJFbiZyUgL5tNgHtC",
  "key20": "3HJ48pY3akYnptpx9GuQQgiFhVf4cG7ccmgk23zc6y9zpMGnek2h5T4HsHHhBrXTUYgd7KfazVW9frA6GgCT2cKE",
  "key21": "4Ai2kUiXp8UgC76jUb3d57cvyiqMsFV7umc2bFPvAjyy9RCiPkc4wus8ogZ13VRg9kKph6XXS4hVoMkZCCbd3TTG",
  "key22": "5qKepT9aTNQZFhurWDK18yQHLfzg8KvrGSUFjjjnJQhPybmHmeMrdSZ2md1vgPcKYs7dQte7XHYpWghbyEU7XgEt",
  "key23": "43juMCvWUfv6z3oYfvq6NsramKdhaftc8vuawgbBi3hZEN46q96qWuTiupjiv76fcmTKW3qKHPX44HLQZvjmYsnr",
  "key24": "4j3g5F1s9Q9gesAWiHSVzygCEDThRcKcoQZ25GTyL2hi2qpfeGRGzhd79ph9hioy4DhfMMWKU85fa3ubShpeibid",
  "key25": "3ndSJZCXwLrZyyoD1GdHvwYHvqkFjJbE7pyd4DedqmPBRptXYn7GnUXzHMRYtMp5KVuPYtdQxtrggetsE3kXG66M",
  "key26": "6Yopdz7dmZamcQt4HVZsQCRgLkBxTxqwiNz6m1JspdanazYRFsTjrVGgZAgwg2Sw77Ge8nKokLimgimQksF9L1W",
  "key27": "2NSR8M1qsCEPSyWdGZJx326TwFU2NbBsumdeLNebPCiwT7RebGie4q7zAuaxsjvvzyhNJojkLKEHH5y6jW1omioM",
  "key28": "2jkPwvaRtgfhLSryAGior2m4vHbejcHgcpvmtgLkdKAnxmn53QGyHaJo4VgtpL3bbq7ojeb29dSwSK6d6Zt4wW5y",
  "key29": "NCFZWR5j5zJG6H98Jvk9A8gdNZLkzht8QyfYJVuPTqmuGvH938qZmJPHkRp84VrfHzCz9iXYC3TnTebcDdf7di8",
  "key30": "4vBxAnZbeMDGnFcukSvofrQcigf2rEf9tZeQRRNHu1EMiF5RuxxCEHZDiSBhXivY1uG4vF42goRNaXh5vvr4FoTm",
  "key31": "5NeuZXPMAHVMXaxdjQhnAQYd4BBnNBP9LumxN8q8GZSQSNoiDXKvSjMQKG9C7qDkjUmvuPx9n9dkE5eftP557Tzg",
  "key32": "2Dzb6WasjkVNcKUqgoHJBWk9Uo2c5ThALE5Gv9Qhtpt4nHzevXGnktvy5ZwSwkfpLtnXeP6mwvCF8e4d9K62Moce",
  "key33": "5PaGcMtcycAHhcPjwAi9CFM7p6pmEm3ayyWzQHQ354DkGSGDL3dYYhuSiedrirtRT9sbyz8XSruoJvb1ZUX8XbAz",
  "key34": "2GMbdaX4nGsSBWuRXvUsL3jVjkt3R8Ziwa13NKsZctnaskyTMUPD2qD8tUKvtFCyrZEQ1snw6Nf5YF3aC5gakvbL",
  "key35": "4rtCU9bg8GP8Uaz7kp1ws2Zmb9uioNSkFQFF3ijqu1BDf7hqw29MPDdRwqVFvFpyre2744VSB3wvgGdcq9zcMcSF"
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
