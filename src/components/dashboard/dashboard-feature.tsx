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
    "26R3kNvTQyXCpmdsi8ksAiSN64GxiqRgs1DerSnB5ZRiDVj4B2JVtSVXpjeL44cASRk5eLAnZfwvvzoLmcqhxBrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZ9Xf45js6ov38kHkpr4NFF6ks3Stsj16gTCEQtpSthPMQxcsosYHdnS56Fx8Lu48pvDtXPauPSu3CPnVnMFq9j",
  "key1": "5wYi7KwWxG95hemJfsFfv6q3oYxT4L9fcoG8n1h8grV5SzDmvDyfrFG2qpRU9583U8x1Be52SDx9QyZXWNV25vwZ",
  "key2": "bu7c9iMb7qzu1mKciBKc9VbtqwVNpoAYEaXjQjzp2tdHoXKrrbkVaF2QtDP3qmcvT1vJpfr1AcNjVbHQZh6H2qR",
  "key3": "5z5UQbBxPMF4b5Pmh8FKbcdbrsrcqLsHBEkactaRP1vfj6aev4DUiq2JiodsCLvr8gsRdXEaJKSk41XiB3udejgq",
  "key4": "4teq7rSvoPgkGtBTr8agSEmj3RC8uQUEAETo6FLN55tqkBCicScqKq7vpqnHLCDzufXHU5XZXE8Zrb17CyvpybHp",
  "key5": "3sLNzDUcjWeJXmEGrsKSQLCQpRkJnwhH8Dv31uVHT1J78QaD162ASeEokBWtTbXLVo7M9Nxhg5hcmJL86YpGgnuM",
  "key6": "3YVe2Q12o7ebM2kcfrPjt1xe2pvFTeFMrRPvcBnSsqAMfi6JzorrJkcK7oCD9c3XNrzy1mSvhs9nARsnsaTPATCY",
  "key7": "2uM5YwbsWYA2e2pkDjgunBbd2kPzgNi8G65F5Wbxzg7KWN9D52CHKz8VCKhYCLvbiz1DiSQuKdCR7rYysko5jiEN",
  "key8": "5BKMt2bdEqqbjJNVryPm3vCGxHgzaRDtCoQnsWmj7jxKgvFXAR3t2K3MRdgiMqSUq81eruSV5rYSbWXZrWLGG8Qx",
  "key9": "4sNgQUWJkYQbaKapdeUFtDNPQL34Kpe5FnYzdFtgWQNRYyQejZZLNiEnoiFZNj5HfPx1Zx55L5wFNxJD4GwM6uNS",
  "key10": "5njAkH6Ludm8MVDHn2vCo1noxYRUdg7sBdziMgxGaGwaAzLA7S6KsRmwd8FewJQPG3HyhcG7M1TeofJJjiXMK3b8",
  "key11": "5gd9ibh7Xu1MMof7K4zAqNQJpdbfMoyHwbj8YFLpz8wz3qdPAAaGdmPHF4ZgHou9T4UbyE1tgqqzTE6rUnnrV8f8",
  "key12": "22ujSdMY1rfZSzspkDSwyK53KRvgU2w11EG2wsRnhvPPWTR11cHRceq72KUvC5jhGnM8Wtaac1QsYQRhM2RX1oMg",
  "key13": "5EHhvRKLJdXBJsWFgU5fkn1a3F6F6orTCYgenyMaj1j3tRi2eFpEygxh6F3NWFzX8d7i2jMpWB3yKQgH8ujmHszN",
  "key14": "4yNjcVfufEnbJCkH8TNbjesqP71R8UT8hbdpRUZif4gsRGQnswuX9awUc47ofAFtQVL3EqkKdFjitVrrKe8Tpfue",
  "key15": "ERok6grgG56Shi8rjpwyQQjCMuMvF61K8WnWnJ1A3mxcQ9FDGXHon4nnovh4NCCCLR1zThBAUJmgD1Fibicq7BU",
  "key16": "41bxxHqvDzvQipXaBSBJgn6WivLB6uXk8VYYW7CVbiA49xT7SZ5hytqNB7f8HHU9HAM3wFtuH5M5eAysgnoJBqa6",
  "key17": "5c9FnHctrUc7VAUr4Y9psT9DtJgESZEhuiAgmixYVYwZXYq5APSw3gEBjHXifjSVDvvUxAmf7Z6mZkdqt3xq6Jan",
  "key18": "3UoYe9gHpYLxJj2Rg4WvdzLYwQx2Km6dwEhngnNuYKbagQGZDVQLtdzTAyPKQWoufcFHegvi34QeZaAjsUR8tk8P",
  "key19": "4bSAaxcbqYmEgGmWkhZ2KompqRaTpccQLYvRSPVvUSYER5BW4pa9BkTaWZPX89g3ZmXB6GDwt5w2b8Z8ioHszK9P",
  "key20": "4aJCmumsHkJuHM4zVnEYB9fcLL65hBrbj1SQ5k5w5SBvB4dLdKPisTvHjUTyr2cag1y3pMvPcffuUxEk896VfrDw",
  "key21": "C1U6tP2buYBtGG9nmVm2ZHqbyzAgnbuPvy36mhBrU1mi8U8MLjqakvHPavzikS4EGymFqUhDGYQ3HvBfzdJCf5R",
  "key22": "4wWwcgaF2xnthj1FaWqD35ZRZ1kEjH7ag2RuhvGLbvLtxa8f5HL3cexda6BVWxTdTJFeCFtGehkDGRZaEa9QJ2zC",
  "key23": "38NiNRnSWMcojsir6hbH67J4fpJGrBHFGAiRjJkXhi4xw4dAKiWk95fs74RPq3YsZ7mREKgK3MWbdoXN5NXXyo7M",
  "key24": "3HMK153wHAnSdEBMxoqerD4kftxP3figGpaEwaVwiAzPX78U2oB6vKsZVYeCLzj1r92zyNok48QZBdVh56JTqYJn",
  "key25": "4gzAWzj1JsDk4rg6tfmmP6EKNw5sxaFsmVgGiAtDnS9VwjgMnjVPR6Huc4qcZp4EfTyii4WUG3henARfbCSvaqvf",
  "key26": "2QvE8RfSLtHXE2Uncu6AadBffpDat59v6WtxnLcP5VULcUp7jNvwGqWJeEhhb35hQFV39jMPBC76uCeYvf5VvgQP",
  "key27": "1tEyxCCo9LAc2FTaHVzfVpqUzratJ8er7FKwYdf8vTMGWSxSk4jTvQDqde4xMyEtgSa15NPPSTqoAfEH8kAsmQe",
  "key28": "5L4FFBknENaSg4x6hZiewsnFcrvNq8fvQzb5kTT65HZ17StMSbjrKF4vgcrowofgLtQRoiqXCBn9YLf98RiT6uWY",
  "key29": "2ikWrYDe6k8f7gLBUWuvRdCHFXRqXXpC9xLSipscevWmhZHZyqQDkrvH98UWyQdCeK82KXdnFJ7j8fTDd4XFpkUK",
  "key30": "AEyTupGJLiiWSEUJiKFgGZfVLVi8RJZ4x1dBR1DH35g9FQuG7hbxgGpKapEABcegA5p2waBAS2hhRAxLuK5sEbU",
  "key31": "4gCegrGD74AwEUCrZyGuEnyv5bPWsnxbxY62d4sL9EnLA2imgRUcW3S2SFo3TZJxuZkX3rnvNR2J9ViDZvDnK1UG",
  "key32": "2tzxhPzaiXnH9wXxxb6ENhr2C1CB5Y8tTxVtd1N28UNxgDCqR6sC3AgVHeLQPgFzTnX8Squ3bHugiTXtRtubUyvE",
  "key33": "3124eyJomAECfLMUWNgP45q97K8MCwp5UECSNNHhNaV7mDoPXJC3dTPPwQkpFqSipGH5vfWE15NHGEm3ekFSgu8m",
  "key34": "2sJbg25z1Nh3yw9Z1vMc63am1hCbNDZjdpj8QuNGb7t1jGYoZdgfHauz3mfZwecBVkinu7a3bmNWvSmG97SFnpFj",
  "key35": "4WFyQQwCFT7noFHNQ4KmTMAHyxB53zyEG8wGrwPf2jdMxKsz3kBKiYfqkNsPy1WxXVpWuEspfjTBkE2J4L9MXdB3",
  "key36": "4Kysi8SCASdE2bYoVLJbDVbKeXeWTUYYpiTvNxNEcLZQAVijdgGuvppZL9ddUovyJVJu7tGpZTdcWwqSDo8mrv4A"
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
