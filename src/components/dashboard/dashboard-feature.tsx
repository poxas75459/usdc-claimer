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
    "4ypps5agw1yXK2mrqRnYuSpj5jx58D3GvxKW6DUPVy7qj5r9SAEbudgJcdenm8KQzDdvgHpMkBjzzYeZtYeYVExs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Par4qUQyr8TudZzFJtnV7q13o7fNnzgLoaUseq8A1y36XvzZZKGNnKZyt39M2VkQJtB129Xkz41nbG2YKy4zVqG",
  "key1": "5tsaQTWvBcg6pU1x4vtq4jpwi5jUuxENmsa94y7dAeZ2PmwQ2q84EzzFoLzUAxHdb8NbK2aKK5MSnxXyqUtG9gvo",
  "key2": "2TT68eZyqXYZ4mR5cUUKJZ1Gjmx1stCPRCumrMPEGSt3y75LDpYd2z5qwoUDNqa37fQDWRq6F4LtvMgy4VcpeUx5",
  "key3": "5ZDJ8TJWG9y73bztkh7GyrbErx6kazsen5c6TEZqWTaYCWRotcwpBmgWpc8Ycou5Qixm2vjk3zYSXqAm8MEmqozK",
  "key4": "gP8nVDQP2nVuByxGwin2Q4rwvk5fwfUDxVWNHUq8wSujvbqbzbeKNYpQhQUabt4dBRc3RQ36DmQNRd9qCA5T13y",
  "key5": "5AHXcpQuXe3JrRvwjhHqRrsQyg7kSFYe4cU12QjH78JQwC15uHMVunM522Ajqbb7bRnYucwS7D26mT8Nzropz92V",
  "key6": "4ReFv7uaQ1yS1tvtNd6QjCL7TesoQGwHeT3oPW84mhGeTfV2SM71WUkuR9yCSYepyDgFFtkb43BG4sZoSn1Yxg1V",
  "key7": "3epmp3qShJay248DNjcBc28LcF45bCECXUdEcMg5dKcjPUk3yMS3v8SS7wpiastNdoJnguJAofZiqNsEcq3njgYc",
  "key8": "ChoK2pmpCRuDc9o1HVnqisDpA4UnhuyqtW8aYTP7nSfurue5nwcdZwFJJNVmrGjHaTnM8VsP4JrU5oSLDe7EmYH",
  "key9": "rxxDNTdjcWt8YuLvNJTA4QghQKNBT46yr9me5Ajw31GQFLPfrXSedrgwKwdLbhBx3py21iUauimUL67sWwY3fSv",
  "key10": "z2TUxyXvxSUkrawHCYV14FDEebjmyCWS4s67eU6u8mkqZHbDFDADtuTGMmspyK79iVmhapHY6dmWQnfgLmTcmXL",
  "key11": "51QPUhmjL2B7VhQSgwXhDhAavDXuHN41BWVb8NEUBzTaC9VFj9Zq6NsRVKgCC5Dxp2w1ritwddDhzAsYmDMC8Psa",
  "key12": "4UagnhNSX9CuD2U3rQ57zXTR85dECk4oPej2t4SjrnRBPh86XiUeAttRU6GLuNm8yzjjzbN1ybVmAR5nQa8YUGER",
  "key13": "5fxT4Bg1fx46SSV98PUWAHVtXomMUK7GcLBnJfz6SZ3NqWNj2SDKWA3QmShGEdtVuha4P23gjxH1FcKXPwvryyhj",
  "key14": "4NbDSwGGW1PmPSLVEZdC4qY4gLrw6jU3LPa18NU6Lm8EnimRKdptm3Shb8VHcfj4FUuW9p5wUqVZfCbthMWBhj21",
  "key15": "4faJuMSiQdEwHdcn5AmFKZackU8AJDVDnAuybkxGZvsqDZgDsGpRfvi8Xm6YwfhKu2WtqKUthu4HLReHCtyPf7YY",
  "key16": "3BY9dDrCP5TXrCbVZiSDo2Bi2CdEy4Yb3pezdFYUNhuK1WXVeaAYhejGAjMRAQPdeNf2BWCcd24xz4Gb8XgW7uF6",
  "key17": "snEjUvt6cmCTgBMMWfS5dwg4onhPqiC4RJGbfLba6hDmxW6sqnRi4ocXAGANKVkon4xR21R5gGjcWmEVKSwcsy2",
  "key18": "36wRgShDD87uJmQ8KdDvMBsimcWTb2EZpDJPPyP2Yn3Bfc9GAGxPej9Lzfr4GLTGhEWMuTUtAkSRNtqBPBXWLMYQ",
  "key19": "5d6iKebp3fbCHt1LLBrrkgRAKeYPhVyqfcEp41KRiiRQdwjNvs2yuXoJEoKVmmsYZhCgo5gbTnB4onLKJ7rxTmwm",
  "key20": "4AXcTqLyV3Cb5oLyoMxVhf5sZ2DDtxNQ3xBr93pDU85XTRiWYP4T4DLvZNbeg29HkRCBMZs1QAcghJHgY5Dwa1kM",
  "key21": "4NZJeXtSpPaCST8edDA6s3Nvu1H3kZmByF4a8onen2RM1rzxgSJXbS8K4qsPnjW9FqHTGXgbqTafR4bWJgHEZpaZ",
  "key22": "5ae1nymj8E9T5SgfjbeBthWzUY5JY86vdKcDkQjYTmPNZhqN1Hpa6RXVAMqeFwh7uhPtBHdPKCKvPQrgm9hMUkr4",
  "key23": "4oTBFCDbPHx4n4HEKuCkw9a872dR5DB2z4Hp3gLuCoR2zkFYmYCWbY3nr2QopmsN4vQKyCkhd8hT7wAzR6484LtS",
  "key24": "3ssSStVZda1khzop5yy4erKZh4gwtjAvScAbkUDz3uHVqCJ15RiukkgrPF3BxQsVFN1fLMKp76kQwWNFuy6n1vF6",
  "key25": "3DxM8BpqzhbgWS2muaUYWvPXYbxWNc65nk1SrccumvhKrRqTe1j7XfEymwodW9xaSfaQ9FP6yF4QSfQEJvgdSyi2",
  "key26": "61bRQZUkga7GY2CWKWAnRKHVH9SUiTuUHcAP14YdScJQuUGNh9VjcfRSmvG6STggVajzHxEFLoy4qZ4cSJ28RzpD",
  "key27": "5FzbANu2JVeAjhDK3V6KrZsL2kJpBN75MfuAoC1oqNV8JZ42VLv8fuVLQuPx5hZLRVtZyCveH9RztiQiJqwM7VFw",
  "key28": "46ewwBk8zH1gpuAZs4YoCkYEWWqY9XvLU8C7aUwez9TUcp8rsxLNa5zdVuM64Co65K6uEWNSyVbgXFZEAK9BXKeg",
  "key29": "wqbfkriBYVUyy7xWPk1xDDaqL7R28558w1v5AReb6MA9rqUAR1tjtPvQbS7zrRLGtiRnf8LzdG6j69kVAeoi4et",
  "key30": "2bac8GTSm78mJ37UnHhghCKQRoyaA3ESfpgVK7gJtfjUbPJo9RsUXepJUBL8QTZ2Hj2r1QXp4JnwMW3mv5j9sEmq",
  "key31": "37YAyvGtTUv2m5n8MhnZSDQozDmoZSFxiBvTkNbH8DTVWKtHEqdgLzgPCdPxqtWvZDHb3qJQKTnyZiVh2Fr8pj7G",
  "key32": "5BgdadCg6vF8JSCYvaYDWLfNbGYDJa4X1oxP3Haa5tqTLrwLQDFbocxF25igBB25bhtqumyUe9kLwy2bJG4YseSK",
  "key33": "3MKa54VTuwdGGS7unJNDEw7bCwmvTbhxWFsmkXBFA8ptSfdWy5GHCDR9Jd32vNXfp9xFrP6ULrVTTUn731GXYw8p",
  "key34": "GzhAhLwfE1p8yWrfhQJ8377t1roHaXbHSLpuP2DovqZKzkzNy9HEDGEDGXxz7Umgq7jkCYy6xzFGtJJtmHTsKd9",
  "key35": "5mxrPyVewq1rGGPHN414HYCGbgPcPFjWYAB1EziV6sAbX5n3HXeZZZpPmZm83YB6NL4zhBLcMhax8Nof6wTC9ynu",
  "key36": "2cyMFHh6ZMuQAFWobqrNqWHa7uxH6LsU5DQSeHMB38GQmPCmePnyJztZdsEBMr6Fbw6tAGudj1efYVD6QTcanEUE",
  "key37": "3NFGgRKcEAuARcN51aVsLJYp3xs3x3PTC2894egVYw2NmuHciXme7tVLzEDfeYa6zK5xBqBjLxmUAVQEw3xcF2r8",
  "key38": "5ynd1F6iUL555Pk4NdhqVHxdV86gjZpu3z1hbf3ck4ov8aVJFGe2AYMnWXAUgL7TGLVJC9rDSCxAgZEinRcAGjPL",
  "key39": "4LbBDkTxrptFhYhK6HUcktHFbN7oHhbXzYG5Yjci9ctZHsJgski63qP8WTxW1fqY56FsJyjXc9FAXsAJG1AaVfyF"
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
