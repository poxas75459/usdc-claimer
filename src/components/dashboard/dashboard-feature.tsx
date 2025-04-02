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
    "tZjsr4cwhKUZKXK7eWDCti4KPS9sjdT6Av5AQwKWVWdPPLSM6GA1iYhMUXSDCPisVRG6TtFV5L3ED6x4VgmwVxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjrZJNfuhLC4Tp6Ssw36mWLnqREnHBT1LN1tPJJBLPXiLRa7KiUuiPH1XUVgD7a6gyvX7xzYcjoqapbPWiuH6YN",
  "key1": "66ujHiBwKJizEV2GosBGeb4ikAvJ74HiPDywEaZTfo5eokfc4SvRHUkh9Ct8B9hGbqCgseLqrCwxaxuJLpZ68GuV",
  "key2": "4tCU2Uw9oShx3kVgKtwBBLip4QPZbYwM18SCgemQ9uJR6h2HwLNExj3T1tTRHbaPXyvwAJfy1EnVF4Tj9hVYNuQW",
  "key3": "45LYJkyTNG7MCyqZdR4ANqzjBQxf6jAJrdgAV8giREL4d9JNuEjna1Mn2FN5QP1HkY2iisMGHEyzJdCRUdRsYvL1",
  "key4": "4843jcpzSJDiKn5tCcADm1LNY7EY1JDP5BFjHEmvxMRR5iTCbquYaMvhHXamvoZRCnjuzQGFT4WDth4YQG89x8vA",
  "key5": "2MgdynjgaEiv4Qt7PJJFjeGy9s4vgQF4YAWTyBFZuSJkQa96778PCsgXWwoPKC5TLRprQW5cdpksRqme4UEBnVV7",
  "key6": "4GciUUg2NqTmTY1nXM8mUexGPVJy7JRQs7cTH15qHndZSvYbBuCT5zrK8ka3xKLC5gx64jCKC3AT6qqWbc6zRgab",
  "key7": "5jmDgtufT1uamVGf4wZqgn4xFQixHhWFv5KoHaH49ucJpZLgfPeFUm54FKxqPQwaWgvodMjmBxCzWnEdzBJL8T54",
  "key8": "3PwLRFwzRpwCRuKjomQRmPrf1A5qaJGpu9Q3S4X9KbS28MnhnGJbt7qsYoYGX3wjwH9kUoz4aodDSD31JwNKVyk4",
  "key9": "2pbfQzcd5SPSuiCzr85SjE9w8nw8qnpdvQEPcWw5tFaDQghd8nmAAYYE1B5odPfN7kx4kUbGwYtEon9Hfe2TFb6B",
  "key10": "2jLwE44e3fbzHu2ok5qipcpxMDbDDRJSBeFdHTuaizN54juDaPxXxKxJc9WwDrBBMdWH6XMX749oTE3Fd3EmPDCC",
  "key11": "54krRh9GKCqxCGtW7gywHSh8y2qaZezZNFgBLnegp1RKxHe4c2BY1D6MG22nugsSiv6TSw7oGudHrdfqRJTHt6GD",
  "key12": "3q8BGp7ct4n8u4h7KTY7MEQU5YYDYVJth7A56KxgLabxFRBkkVb6v7xVv148XjpvUd3xidL5dtVyHvsykTrLzWbc",
  "key13": "2NVXWQmgUUgo3MmHtnaWe29W2kvAKyNqo1xMQB1YuVuzPsj2X4h28v8GhM3SBgNeJbo2X9hey3ZtsK6Eg9bYiofq",
  "key14": "jg8fPmDPAMzTe3MsXeq34HMrxdQoe2JY85jMTmYc1eH9xQJrtfQ1ZdJatAZqEd4gEsngwnBy928sXctjbyqoNJG",
  "key15": "4mP6XDPTAg4zyojrZMRsQ2ydy4cvwnFCUMgwXfiAMbgKp32nXM1PLf1HEhMpHu9zPVtDdyo4vmvrdryHrYqntfHD",
  "key16": "4W91owgiyun5cno7rj4vy1fuRqgsiVvv5yoa6wCadSi2zjw34bLfwKNRWBn6sbzbDtQ1T8yCB1A1gheA7LABjVXg",
  "key17": "3Z2KBTc6DMfs7df5xpMGT52DV8CSwsZFSmy8kLSnAdR8va9sSvnoBe9qwFdWkenTWXPFBvGf75MAMpUFTStBYbSi",
  "key18": "4jmFfTqj3fbFFKZCPUfBuW3k5cgUpbSgAnxGPkwUfNrqjQJGyYSb5FjzmiTpyK7PVctFziQNwVk4q1s3ZmBDpcno",
  "key19": "2NpVav2xodfG18xncFbwCe2vdSiaBrf47jZqsABC12Axnqv28roLTbtDQ28vXrbz65rrecFRbe6MxQz3PBXucpUV",
  "key20": "5TgQSk1FvYvLg93XovN15MMiUQLV4X95atPogZB3sZxeSQYA78p9RUxrbBkD1k3K8bEKG7qxmNh9Uv1s3NH45Bfk",
  "key21": "3zTgZongsd1kfikDRXjxmLLTTRjAtXy2M5gtGFi3AMzQuWC4aMQ76evi4NYs9yzGd1oy9KZkP5Xde6M5GyUkEHxE",
  "key22": "BkaRtg5f42kFd6aXURfq8EqTstRXoHfwBS68pPxoLf7s1KvfRhPMH93eJiDujcKaJGE6R5qjXsThPSLf2iN1UEz",
  "key23": "3i7UyX4ojtuzqWFC2EGLzUanEn5BQBX4Q9PWFnDDsBDuCswkLr1B1tnyehGZkqQDNk237oMyTFGKoZ8jXnmB6Dq7",
  "key24": "4WkbaubNaTQ5rhEHtUfNAWxDMUxRHpSDaH2PgWRGQTpM5cNxrkFLqb1pv9cvceb35vV9De1x8K6c6BqBimNakD9j",
  "key25": "5b19zZMsEajs6dasTfGz5xkWpgVc8CL4rWy5c8jkpNPYy4p2em6vPpLr2CfdV6knwmr1A3GJEDnaqRjjszL6Jtje",
  "key26": "4s8dMmojeVD2FDJbqoc1qU4PNZBNRJ5bjK2z8cLD8ckE6CVUUiYPCjsDkq2qKZnykefZ2FrWKBrMNLm8SKQZvkgL",
  "key27": "4YoVCHr3uKLqbJ6WsSZxxTs9MF65Nu2RjjEeocKXmkHjzWe8hv9z2zsGYZtU81d9wb7vZrVVFouusFGD7EH7ejJn",
  "key28": "4DgwDsSG5dhpSHVpyGMgJbQwCZ7CxBNyETnP85G46SNMC3s6RKYk2YqvV9JKSa6eatgw99twFwx5kcFRb1SpnhWN",
  "key29": "3pSjEqRt1dvswvaRYnBbRRKT5Lo4mTAqMUH2obA3E6CBuenPg9j4min3BCKkWi1XwMVRBVNZ9zDm2ySh51wvfjz6",
  "key30": "3ZmNVXWmhTMT6biFqtj6ohuS94hKAxJMXUZUjr3zpLLwPN2W1YvDKN2xo7trf7rnpKygT9DC7hLVm9y7roGM2wGa",
  "key31": "KNMyJEpqfgn8xdUycQnpNhd6222kNRMedxrjP8ZgFELDcJ8VNg3gWsqkCktdMzJqLdPhwDKRFHW9XDE6a52nVGR",
  "key32": "3jirFVNYvf2X8meqRzTp41KnXD6aJV3hkchJWnuqHK8uJx2cv9kMwAS85P2HWWd1m7fCPreRJyZFGtSAT9AQ25RK",
  "key33": "43hcJnS7BHZeay6SKi1BLLD9Fr1bvc8mAhGo3PYkJ8bo2m9B2sTPxeJ4v9KuGgKxZpgY77hp7H37Ms8fi8KfcZQz",
  "key34": "5voFF7n2TcgWVvYKSY3xCPrFwkxmo6UP9ZHLCjgYDov8YTdw6nR2UCaUXX9FwNW4swLdhPwawvmATxBAtFXu76cM",
  "key35": "3YpvJSv5BKN1VyYoVcmimq5T5MqX8u75zihzKKu7QXsufaRXcphnhwb2CaK7jvNbcZWBa7dF2XHcAtXztChxRdr",
  "key36": "5nCpQBXwjsKfnKQzdL4LKJCYgoTjQAmvNCYvi9TJcH3GDqD2YbqQhdDnyiVdFEBeehALVh9VDEwv9L16JUoL4MUN"
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
