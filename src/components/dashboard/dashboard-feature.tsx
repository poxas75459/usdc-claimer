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
    "4HXCMkamhrSMsuN33bXsMXo3REcxwpmuGdfs7RCeT8rTqPRDNxyZQjB3QQ3BuQ4EScEXGa5iSTK6GBxbARLP6iWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXErFkV9ozSgy13oGtEbiLYEKToYhAZSoAXmkKL9SKe5PWyAwh8gaQrisUMX4iVeQtCWKXH6nkBvp6X83DfBnSt",
  "key1": "2VASAV9gJ5sEGAVmcgk5uCwzbFBva8P8L1PATs94jutGBQK4FjwydW28HimZYmZQSCg7o4GyQKUW2etTkkjBhT4S",
  "key2": "49EW5Zhz7RvHnwMXNtUYDkJneQbX5v9EqEagwFmkspayecG32wE4dgjoc62KiM1ydezLGgkja1aAfBfSbhVtzPtp",
  "key3": "2e63QK48aEZQ4LVRZ7D6vr1oFD4VrpcHMmQGmpyjU8g18AGqHeKQhA7F6VtT6Ro1QfwJqweHMJpsCTds6dnS52Hr",
  "key4": "5rVRZ8P3uPu3utoemjEH3QXXHYsXzUnDBhtPAdpCDdcVqeduUk4AhuSvjCHydx7FJLW7qxzWL2bynJWSakb2EFU9",
  "key5": "5bqYCKJAKLfi3wVdsqjWWKH94Rh5pF76btG2VXxuttJs2dWgEtWi3uqGLuHHzU7bvm3yCZfmLagPWRdQYW3Dcrg5",
  "key6": "5uijSvuNNRbWY9Gt4P44WTjPzisVgBDbXwUbsjvyKhajZfHFPvV7WysLoimDFH5ntpGNNeziP34sg4atdyQhJqrb",
  "key7": "3PUNt1C9er7CUJVFbKhNrwjpfeoNXYxZ6BHbwyzmDeRHd1mhgLfa8fqz3mkXEn8nHfFhFfzQrE9qGgjJ1wu7qLuT",
  "key8": "EMKcbgkkiwdQ6bBq4CajWT7gSXPrtTdCewCx22DUB8odtMVUYYXX5p55WqzioQQ6sDuiza3sRBdYaGYQgPR4qxD",
  "key9": "2dRdxSDS2tv221v3GU3x1MdzwFLghYdFhFxRXzc5648EFVdSVMqe54JMqkvy54WWXuRnxTpcFcomaNrL1dWCzEUw",
  "key10": "4GyNwRqvvBEGuGf7idtENysixvXAcQAf4F86FsAiJUCGGyMgN647hVNTqJ9jwFZpQF83o6V9E8cdCk88YWiwkDNt",
  "key11": "2ChHdseb5MZ8VoFTXWQokVbSB748PsonuzjcxZmpPivoifL8maqaMcCVVPcFgAguzWZiQ53Av8hURvN9MyirAbJu",
  "key12": "53Ucy6rdEBphNjC2jQuHbS3RoGcBbcJShqy9dpR84TLX5hX2FVAqy5qZi2amkELYNi9G6MXMnNvqhMUWsGUYE4NN",
  "key13": "49oRv7tacVw96JnC78JPCDWDLS8HCXi18fikKFmFxFGiNN5EKfcAC6x1MiXk9WmW4asjB1ZGg3JHHTwpxpKo9mEf",
  "key14": "3t2oDmheHFkpY1DXP9P1aERiMZeNPCizdy8p4Y6Am3DMDYgHD99hnfJaQQrRM6fpFXUaW7E3EbDz3SAqrPMLqMYQ",
  "key15": "5gfb61U68pMiE7im9Pf3aB7cAiimopU4HqTWMivsePUHbkRe7hkcZznQRZeqZDbBA7hrNHRzLS7Le893NdQUrFqj",
  "key16": "4E1oJ3RvhioQpgZ4Hhk4GFm4H5iorysXyUpugmzmQNSNKngBFhnKGU774VYskLVVq7CyYfLSY8KjJN69MQyDBhBm",
  "key17": "kGeWkkzBvxhx8G5Mv5zwhMMGaU3UKrATLr27qpP6YT6aZf4CMSrr76dht7TcQo5wE1wf6RVg5nkpXu9nYHVf39e",
  "key18": "UJfQqY1SpeZGFanY5NapdCHnm6rj1mT9ro3ppyNeDvA2C2mG1sGFxfTXSczhu6nHEWXWjRfN2pHTjxNc5mbPYjr",
  "key19": "386VbyfbZmgEwP8eEsgjuqQg2uHKAkVsxrerfGpi41c5aUu1U5Tp9voeNRRez6v3ntgfnxqdmDRpMHVyeJksz6b2",
  "key20": "3EHWQ1QAB5pwbBUHKMs7MPobjRpqZjVBssiTnVysdqz2eyurVdf99jEuATtJRakqtBjBk9g8uvYjYXnQTaj6XdZY",
  "key21": "5rfHvrx8hxHqGTsY2QCZKNHLskB1wJ1f2vokTBtnFzMZD1SPBw9T6LbkMjrFtLu2rPbSgsXL1NZpPAexfJ3eeSEM",
  "key22": "4cu794F1TMuPAwuC5nks883urJFAyxNixM8gufoxbu63NKdkg1La9jCa7k32rgV5s1iu49kksnnMrBV2W85NSkhr",
  "key23": "4kghkyh97MZRht9JZPupNjvaipr7nd5Wo2NFUWHP6xWJUsxQYfaCtuShUTGp3Yx7VQS21nLvzGgGYLjcSwDrYbRN",
  "key24": "4SxtKvLXDQQKiqswdsiyp1SwAzNTdcECqhvkJmfjBhBcH2A5pbh54unXAAFkXAyMyt92hKcdBuVjLSpVHRwXVKZh",
  "key25": "4ZUt32XPWnxQMPYRMEqKM8w6rPydb19qaqJg4bdw2zLLRz92m56DSp6KEpZL3Z7PQt1Us5w7AfhTH6bW2E1vrbLJ",
  "key26": "2YEauff2ed9C4iTpPXe1TfSkjiEnJoDXz4J6g5xcfeGp7ox5P2ZH7hirfYi1H9xEgtPumgJidvR5sMsF4MhwG8AZ",
  "key27": "5iNj1JPQoCtLHTkQLVEEmYF1pav7R29QRTy9dYjCxgHiRa97dNsxQ3bZuQV8yrcpEt7ED1Cb1owHeHCPXFJt8cY6",
  "key28": "2FQGMZshHvdVx4V2kdokHv9VyhYba8W7pG4u1uiVLo3KKieF2SwNmRLRjDMppYE91BhVM2q1YZwAswYRRmou9vsk",
  "key29": "pN6LqVAcRkvFBC6KWQE2VvcBQGuVgcfamR2xfHBfdWdqBP1uFEXpyC2hPWgtnhUc265fP3sZFJAkAR3QcT8uvg9",
  "key30": "4x6471W3CRQw1XaSJGx5YSdix6wAYmkQFJMtr4MG57odGSfDUsU4m83Zm5L4z882pMrcHSeuY8kXLxqxs4m6DSd5",
  "key31": "2QGFt2rruRgroE7i76XrC7WtL2TVJ2QVSiqonUspQNvM7hmqnyRgxFW1bXjhbRv5QcWpcfP7Yv6qEfLPcnfRpmrr",
  "key32": "4tbEshtBG6tHc8Mj6n4xTJWEd9dS18h7eVNsTDuHC18RF2eEWp8wcSj9z4TkvgDT1DZicn4kWCfCa4EGa3FZMMGd",
  "key33": "4xkq9yqW3m9vVXEmWAXeE4h9BtJPcDnnhy85aF7PdSKPHnt9GY6ZzBsB21VnT6J47smCSSWpL7Do27hcZLGcLDhG",
  "key34": "4pEdmCHU2KJjJEc5FX9g7mVwPztPWcTp4VzzgKhYK5AmDSJi9amdGqtnqeJEqfDof5sRVYizHid5fMmeNj44tEJu",
  "key35": "2zNGAC42dL7RuDVoeq6hwA3ww23fYbhgPnEygUw1xFcQJ3bBa85fiAKakPVwLzHRNaMSfQhZq7hEcQE3wjXYy6By",
  "key36": "4fSCoxg4c4X2sGH85cvPN6P8CRcqk2xX3SqyU3NqECEVkMUhFbgdydpSkom9cMcWB9rkDs9ydtkDVkXfv18QZwaK",
  "key37": "4VmggNVcPZmL1pDv2TJ4qB7ETF7NQiKN6mG9KrkjsUQbmwiHhhzcbsbzTssd9qPfrC3jSGhGbx13AwQqFx8GWS8j",
  "key38": "3TRF2u4r46Qfr1VMQur3GoBZY57t3z3Sx5qkPdvnTMdCYd7Y91Tj9UuSQpxYH9pv4u9Atf5nDiojBAfiHCa5wG2v",
  "key39": "5Ve4gWJXGTeZHdP2Fqb7gv2LtA2BFB1sJ6ibFT1eSYe6Uwi6WKhTD8NZXxjcx8qbFHybvX95TYRFNRMwFc3hQEDp",
  "key40": "4u1LQ4HcCVg4ySFqKBsTfqw6HmCio71YQu4DbTxzFtNxBegpiDXWTKg64BVBzJb7C2s5FJcoqU69U5nDNa8RSGpB",
  "key41": "3rXt2hbmjGg3nYCVFaRnRn1uaz2zEAwaMJgCMCjrjzRypR4sh4sxXxVXZRMgrW2K5NnJLqNmDEUMyY83AU4BNF7P",
  "key42": "qLK389yf3nRRjtrhbtX6PyXgHsWgy1vC2UYi8WE6mE4NJZJ5uh6pFwe51fnqQpkVcPpaEAAiejyVTs3mEzThYfz",
  "key43": "5nUt8nzmspTVeD4VxLwLAXTYRBhzTmRJubrT1yve3Gq82DRWJRDneen8jPiDDrb3dvTvAwZi7NKu2dMzvoJT2V9q",
  "key44": "qsTWbJfSEy6EvBVoB7c5n1D2qgpNPsQpSe97CAD6oc66Trat5yEpqMaKL2LN26i8H2RWZZPsH19KeYge7HYtW73"
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
