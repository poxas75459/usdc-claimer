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
    "4qTBedA3LL4GaZhVNcgvyoJG8Nha6vexPR1UZPrquqNCU5qknUdMQkjU5jYTgQmsXWTkEwoty29D4zfHMmWDfyEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRLxiqoP2q9R7dLnwRraf39Tah3pC9ZZomrjVDsVztLUB6QP5jdcwVCQxqP4paiikUUU1zhMwfxX7YNZKHdVfC5",
  "key1": "2m8fuUsE1SB84rr9Kc5dsiCHmCs16tw4EcDWKtWgQ3CeX8p9n7XhJdUewJ9YKZ2S7aMiepcCzizdLDrfVEivq3FT",
  "key2": "vXbY2cyzHhaeVWVeu1iv3WkW4s76niDWQigSViwPNoX2zLa7rNRnxuBdbaYtL6kEePdhhHcehrMLwnxRzRjLCwT",
  "key3": "5mg4FgTmnHCyEKypukis7Eg5Xahp2HTKHsjLg7GyDEvDrZaroD6FLoAKePSFvriarHgh2dEMNTHBMWKL6CuEgaoV",
  "key4": "4rETfAEC6xhnntUUjnTqmqf9Wbx7f97PZAfhZiA7VTtMPt596tFTLGuUHBLg3dfbic3yF3GU1thJGzQWKX8Yuuto",
  "key5": "61Yf4ZLLjQNTzMCmKj67woZQq46qajqcV6LJcrFXQ8cyToUZ1zALYv7Hb3jhR4MDVrJgPAyZviQDriE3mde7Ws4r",
  "key6": "WHkRT4mNE4w4XWhAXU7JhUkCr3PoCtNJX5z7G3KGNqkPUQibCYxapfwTWFFu6qioehFrfGYoX246kscL6iW8MMV",
  "key7": "5E5xJ1Zfe3V5aEQ6QGusp1dZ497wwM4FMTrbQUtM1WdQF43MsdjnkxFexQWSPLw2UNJaRxArEf9bWrKBTgnPzRB1",
  "key8": "G1cQSSSnfMHiPtxLrmFmShe6XAftGcV5iPzvLLkj2t1Bzodchy2U5hcy7skE9RywVHk7mB1ET2uHBPC2MnBSYks",
  "key9": "5KEUjg3Q8YqHXvVceZBUjNcDi7nggQwpYzhn8xvkXg2ySQDNhNLkaCJzoLdJZ6ZgXJStSt4XAKLve3e6AwcJC1HR",
  "key10": "2gxAEL2WhfsRH1rw2uXqywuG8kueZP7cyLAbAHG4CieT97uTMuv8GVE7mHJpR8R86n7YexAHfMeovkrVddFu952h",
  "key11": "4t8jiDXwVaj7nztESqdPzMGehKwLaewz81URfjSjUrPw6fhzb1ajuwZYDzqPhYuvm3hPUoTB3xzQnxyf1vKM481h",
  "key12": "3Am43oC79n7LsgypNDBetMkroURDa3ARaLT3nSzRCxrrkWbhCaJQsr2J7YBSSrMjm1inVuTXLLZbQNNd9inqZiLj",
  "key13": "y1o5qwMkERzxAGzrEsgaS2wU4D2MLwdjLWtp4XtUk133Bwk5XVoZawg6Y3rW9csYyYfpHYLkKmmRqzUEhFkTFhq",
  "key14": "2nTfGkEgsXB5UyDmhjY4ytKLRswaL6SR73rUY5E7wj4Yi7cAWzK5NyyerPEmr6E5VgFRtLpYCECaGb7emrAbP5yr",
  "key15": "3XH7rSY5PGsYHTvhy9yDuXurAsqrCsKANmg2DppcmfZuTUrCtSsGSo3TtaGLgHeByMLvLhYguV6F2mRWKQDY3TNM",
  "key16": "5PqJm98nmAHpgrDmoCSfC3NNEQ1d6UfR4RZRVqZ1Q9My9uowT12yswEgh3LzzDXbzYNENfbcvmVR3Pn1cLexQa59",
  "key17": "26RKZw4gCwz4RGHnFqNZ2xJapQ8NeY6Jjc9NneZ7AckYYnK2BTcBsVhedSCbQFdcNKw12nGPsH68KqjL919Arkth",
  "key18": "3KfLUthUp6BsLCy9dYfMRh3TfJwq83HQ7s3z1jn1Hr14hN76hEyD2JxJR7czCBeggnBEGUQSKBAyEgXr87dBE8TX",
  "key19": "1CJj3NARDBmXjkZHGQ59iDmaTUZJGsZDiX9kyyT14oQDqu7j1ym9EscvpERWGRXRYsYHNqC5GoaanP4LBi6Vrsi",
  "key20": "5ruRC1hbbiwCBis1M5bSb85TpxqPXtsjQ957Mch1kz2sSZnZsGhAhYpGwkgiLgaPGBveboH66TsUhhUq5LK6aSbW",
  "key21": "LkiBhpb1SN6wunptwN7SkUDyULjvvBqwUPiAD1Dxma3NipNh1r9p1mLsDGd1XYL1gBfMCaZUkkJhW4Y5uTZpa8F",
  "key22": "YUTHJ8qFNa97WmxMFKXhFw9GCG9GfSFjegscJXBKHzCfNhpbicVNc3GMjxJchYQ5MGE6eCSdia3KJdryLo6QVpx",
  "key23": "2cxaAQKVsWZbPHpcsq59ip2mUUxJ2T6TxXLLqfK6QJryXEJbtKosCXSwsFSpVy1BPvhxRwmt6ya1K93nTMx8uKMk",
  "key24": "1BphJJsZa89Tp7FP4dkZa5uUv5KpEwmV43TvN8zFhVmBvWUohE6JBEWSpFzpjBCxgpPTXnmPGVqimxdyCqvv16w",
  "key25": "2eHMz2FPhdM7naydbZFqygB7RVGU8LdT42Pf4YVvy1oFKfGqY1nveDmEmeAsLS3p7XzPBAYh6gRsRbmDiNTRMW4",
  "key26": "dPVBcQK8P7s3c6mdorgZZpHpBP7wvB2Y8o3vTndBtQYczCjqRjCZSHBTYSvyPborChF2bvuAyNQsArLQDg4mD2L",
  "key27": "dtKximAMtCWraSuYzyxNnkU4Cn3WzZmUxsMYuW6MCGRxsHu5aahLu9VzsKrgFsifct5EfgURKSKS8A5KfYp3zEB",
  "key28": "3vf4X7ixcTdQ8z6TVhsgDVRjsbrEjAnJR5JkoARqkYeRHMhexvac63gaBqMuJd4V6RCMZd5mAUAaJMEFsFgxjPZk",
  "key29": "hnYbafFZioUyRK3utcokWutEXBGjDAAsAY89bV5t5jqWAgpfQd6MvyfKmXuuynpyGW8mz84qzJMcLhruSjss2Jx",
  "key30": "5eazHUAiA6VWQLuWzpxwmghpnNgefjD8o3gN5jhDx3YwW9grAkmgHjtZPr4REvLKE64pJz7yweisDadRkB2GNn81",
  "key31": "3NEKyC3xFscrUqUhJEzroxB5FvDPksfR1zabErQiTndMrg1iDC3R2ot62xnHzhpoFCcuKweZnuefhUkCvsoujpH9",
  "key32": "626Xm1qZEBRx7kqZz2A2pR83SL8Kf1s135PhmmnyduoTCYeeXj2NArybPKxWEW27qUuaDSMWhyR2DfxRrSRcuLC8",
  "key33": "5r8YrrBHbaYrVcn49ABdYJbrom1yq1MJPkeXdn99MeX7jXZd9XAYenSzkKpmpmGffp3HXUcxiDPwCU97RMkhfAzg",
  "key34": "5cmsswUCNAGaaMKfiR7Jrz6svJEGMmKCF9PyyAL6qzxodH9MBeNqjbKuBjHKh3C7CR3mPwpTjUYkuQB31bhPJaQr",
  "key35": "2k68byKhZQWwVywwbM9brFqyJdqxRSa4EdCq3JyGrPm91JhtAXX4KuHXogwzK91ZvZVgaiabrWxZq1AWxV8CsDHW",
  "key36": "4bTd6KjigQnsEy2GpXvz4iqz8pM7tCyCQpd2StZuFCpifcfAsUUdJYewGn4jW6eQzZvo3XMhzZbok3fMW3n8XDd2",
  "key37": "2LkUTWzzZ3wdJmDxX4FmE3VYJeK2DHxGbePykQgyZGKAMaD2A5npQXJE466Xjb6y4r5DPSrUAYgVvVHDwaSsYpsG",
  "key38": "5HV9c7JgWAE2EG2Jv9uD58Jf6XJDfcNDEJfFTQwr8tW95YZ4j4mLWYryRsA8bcUtfqiQwosEYuV6PAKy9t4bQCPD",
  "key39": "fB6y2Kbewn5YSfUhugKWSuuGtTLdrWgdsfZBXK5yt9LDj6a8r8wP3GpSgoRGNeo4LgoopG9NQkYRkitRiVC1gJz",
  "key40": "WQZszDLbdUwGmGF7Mjn1wCPZbyHwHToCgfi1wtCuDqzYRJWWXCJo9ZHFWB9N62GWfeH5wtvnnCC2TyJw7TyEkRL",
  "key41": "29cCG838xaRyeJZZ89EpJbZg9UpVfbaYtJ3JGqM1PBNN8GtxSiTVUrDpgDofXjWAwVHXb5xb6byWuVHz5C1v8ugK",
  "key42": "2L6Q2SiiMTPXgtCuNuF4QDGqvPro43w5WxLJsxM1s7Q3Tsb5gTDUEMy71bfU6Tdda45BaEAV4rCAXuznWyueZtJh",
  "key43": "5jpZqMAhLa32hpAfJwzHFa1DPMaQFhybjUNZsKq8UR7qT8CovvrMXrW7N9qHXthde2PrrTspcY4Trm33UDYwHJrw"
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
