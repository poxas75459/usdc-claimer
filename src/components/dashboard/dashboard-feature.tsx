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
    "2FcPVPSdkMLuBTxxdrVsZAuGv2NxLGBjvL2z8jgyXsGY2gRmM2TXBcFWmAiGTLDxBtQVQVfhTeQyjxHACntpY6qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xANn6mxZDRUkT8BMPb2JGa85dv2RD8Zzoqua8qdWhtsFoFZK9jbJb4tUULPTCWCUdHYZYYkP7siU54GJ781g8jd",
  "key1": "2WkWsA1h5mQ6aNQQavfUDbaXddk342sfAfQpFd1o91umHs7rrrhsBMJnviwepatsBJZyBdLhfBMmvLnXx2NWPvD1",
  "key2": "2pNtRvqLukw8jDUvKTim2kLNSsCqo1hAJBKujHbsxtwmXTt2Y8nVXta2BNSYHcTKQRFw6xvzyhc9FPed987gkkrk",
  "key3": "B1BTNNhiqxF9xWTTb8XYjPeFSwdU4DiYeGwxXvX9caSCBh1qve87ke6FxtrezwMt8RnaCTHwY51HRqQZ93bfngk",
  "key4": "5ftLop9Z9Dj2CuVpL5JiK23qpM93WEUqT6us7A4zscCFR4iswuhXFDkPy8dTM5CnSE1khxNPKVcvCPmuenwABAxt",
  "key5": "5siJjiP6iWDW4GwcePWaSVn3q5EutaVCGJJ2XRFzZMe2v96kvMDxEurC8Q6HHYxsjvZup5pJN3V2zvPqk5H7DgE4",
  "key6": "49u9W7Hq9awj4n8sk7bKxvpBhCkJbQrwygtjXNQhayqAFyery3hi7ogPRC8SC85CLDmeZDSuWNYdWwjJyg9YH3m5",
  "key7": "EGAGdqwRJcFVT32f3UntGbQqR3PRv4ED2fEHvXVzy26sdBzzCkmjGRXfhLjV4agJqDBPP8UxAhC3Fos9TJEFpdi",
  "key8": "4WLyR2XPk7AetpxBdz3hXJ3QjLVbJfjThemUeGdqYjm4QyixydQ9JSJ7pXjDZ9B4XHHn81EK3pMDkWcaC1UaUipQ",
  "key9": "ngFqzPBf44FaPr36UtTRRijNQet5R2Tb1CQQpQ3NHpb2mUrgMpzN7uozc1sHxEVGA9xaXxAztvtwM3hKJzWjgYV",
  "key10": "24tiUBair23DwzLextqyHLRYz18v49uGnZb8bgq84JywUMBuYcgxgsD2DLzE9v8ksETXkuP1yApwV3B1a8GA6nPR",
  "key11": "Diqh4EKPG7hJxkPrZXemY18Wah9fwpgt6j4LNBt4J9bmtyKBiUFyVdJz1fdVYAXXCUhfCDSSw83h9Fs7Fi7Qw5q",
  "key12": "2vWvgpLLnFWhVrN4fvwEM9dNrev5YVS9GDab2K9o8ZaJpNCGtTZw5SAbrmnbeVcQ74DSZ1hDcyttgtFvPNcM7mRv",
  "key13": "DknHqACRFs7Z4Ku5DNyb8QsDjWHkjo4unR6Ve7frG7WsrPvTAxBea8mT1u6bLuxAnGxwjQn9H3PE8RqHC5BJz4V",
  "key14": "2br1hk8P57bwAXSLTUQLS8CivTRaKkoEhkdm6TLJFfQp21XNsbfajtT1eKGuXvstUEJRHhZCwoBWLZc6C5ZUcBXT",
  "key15": "42Rtq98Aio2CR2PBfXLapn4gQe7wFfjXHx8r3UTrybPMg42oGALkQKfuPovTaqTsCj9t6o8RnnAjaQuvU4bPw1N2",
  "key16": "66pJcMrQeGrd4Q3XtupmTzJpzb4piz1aGbPGUVV7h6zLc9CLk5Mt3VCcmMFJPt2DWtrGBDaCmjGn7QYVEAc9VjPT",
  "key17": "4AW2tbNCLQqN64Br1VSnvAo692rjQaBSmRL2tYTjjZn9CcNAakhLcxsGQRxgCHSYmbfCMana2ksKudfmGkYLmxWo",
  "key18": "4zgXEkFzQ1YoKq84YUYWbX6sGWKoV5VUbbAzStWzftwgjEVXzdzQX75B38nZQ1Y8W6y3cNwsjHWk5nkf2sWM6b2j",
  "key19": "PVnpApojrm6shiH4Q5B44YRaERqTBVgrTqvCaG3w5MNZhV3VVjDdercrboRj4TDucVP91crEmY6d2q6Y1drUN4p",
  "key20": "22ZqxTuAHA78MgqG98h44n1QCEmDjC3krxtcsRkj9npMTuJ8Fu73qt4bvsyzbkJ7objHnTCjGwLVRPVxUMmAyr6P",
  "key21": "5KKmLqMFpJGbEjckN4o2Ma42qHk8qbwkLe62hpy5rJ9QJsPqPHPT7aGe8U2qw4aNBiV8KCjyWejei3daARzqdGSN",
  "key22": "3nporKh9VNybKXQ7LbRuALBxMiqusQmwJsF51m5bj1sxQb8DCydhdReXqZyWmpy6fDPdneA1aPXtYAS8AUw7xwqq",
  "key23": "4EDFd1MRVmwgNS8HoW6CNoVYqoeubztPuxpwdrWtYtTSxTYXCVqqCFrGfXB7jYDSAirZZ3HYVzwS9zViS1ZTBvj9",
  "key24": "3gYmqQi5BxyfsN7X7LSukWN9BUVQZoxDfXPY9tJS28BeiT6GTLrReBNp1kvKUx74FPK7mFwmUSXCpcxET8tiGvh",
  "key25": "3w8hKEZMRW2tML16Wc1XqyX7bTjVdsd72znzgQtj3r2aXtovxYSTCbeqQVN89KSaWzwcyFtUp94JHEX5A8uvqR6Y",
  "key26": "66QcW7vM9XAATh3aM786g5X3CsiZCAGPhG9i74MBG7mo5Ph77NZha9uC3a3tELNVKSdnF1pD8uMTDAruF57B3fB6",
  "key27": "59StrcRR6BX99RX3NtVYGNntKH7drEiAEf1EboVcDW3MzRp8L8TeW9W2PJs8xqS96swr5Lr5RCTXXxBHViMwA9CY",
  "key28": "4WwQjRQXvQjyJ6u62XWrowontTWk8t1LJttj2pm1Gx2Uuxm5XuRYDFXmoNcWVfQ4p7wuD39113CSS7z7xwzKbsPS",
  "key29": "48RtngMjNdEf7642NWUn4gEBN7oXs95xAPUEAvAcQMFmeenNT4go8T5vrXYH9TJQtN1sUNCh7nWfugpVuiyYzkMo",
  "key30": "4y8uncFW5q93tWTbhrE68BEXtDmRYihFdQQSk9wwsshyCNutNF8oTANsQepyWP38Aydjfs2XU6PNc4KWQTL5VLsn",
  "key31": "4hGUoxSHfHmouD5DotjzS8fP5K55gWRP6NdtBT7sFBAJ3vX36yuAvjo4ki4Etfp9e7yaadS1tiyc4M9gKisMoWVX",
  "key32": "3ehjVYV55i4F2ZtbMjpavZg3rC2GSWSWuMHGvMPqAHKZQyPqaDBd2yKLkgkvakwqw7yscnhywdp5vBEQK4FxdTHE",
  "key33": "9Pss7mD7cG9dNeeoxgkFsizYHBP3BLecVMBVssSv35X5KqXiKAEwLa25EwQn9jkhmGYVLQdMMzU9HfDRuBi6Na7",
  "key34": "2pUgXr8kDh9WcMENaS6JMoQZTqRiDoi9CQWVin7AUYzzb1DgEHfXJFWcggDEgDUqwwGzgZiuXvLxyDgcnfq7dfu3"
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
