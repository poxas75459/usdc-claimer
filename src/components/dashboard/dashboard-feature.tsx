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
    "61bnv4bVcBt6idqJ1Ld5XbUYpZ7jqCHxetPrNZixV8PE8mmfY8ymKsUzpwwKLfgaPkMF96rYTnfB4jQvZoyfgx2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KEiiGqDgVAoRTUg2kNSWiCDhgshCGoFFVth3FwSTWf9yx8V2VQ1cep3KsQjttHPJ8Zi7in4QwUN2dX5NEnDY9BV",
  "key1": "2D5XCn7Fsewrofk2Qip2Gi89jLBeXnuDVEkV5dhC1N8gcjtQymF9Ku5ZSyQNpTHh2cSZZNNYp8PHh9JZgt8wqgCF",
  "key2": "4d4Fhx3ngNc8L6LhMeuYvmWuqPCjbHafGzRoVZgvCsfLdCL6Am9YEj3dRwVY1Ui1FFPhBku7G9Nch2myDatguKvp",
  "key3": "61iauT72e7peNTYwyh7u8MZ92vAvMhuGSrzer6vzngoJbpb3QEK89WYD2CacosrH3Stoeaxzfw5QTrvWcPed9evM",
  "key4": "bjd48QDnc3x2MiFxHdr69qY4WP6eTeeJB7KhRYABpARmH3oKrYp5kLy78rNMFK6spi5YgB2s1JTMwc2VMxmcJSv",
  "key5": "4rGapcFwEzqfY2x8kXdEg5YZdT29387oTeX5tXuiLaZQesNWmReWPmqNxC4UiN52gjnxHsMfe7pZUaqFozAeP2b5",
  "key6": "4Xb8vD7x92j3g3n2JSrhp4vciVQEnzS9pkB9Y3rmyGcLX8vATRo5VEixvqgKfXzk2JkGmZxe18MFt9wDyY5xCkHa",
  "key7": "2B2AzMWWTYKZEw9RNPomCCPpNk63WYAftwDHAEeaR7fmAN5eMXx2RtVpQzU2NrbTsgwjmJLBckf6xN1BsNdmV1fq",
  "key8": "2T4LPTmYafM8FrqDQqgbhaPSp1fN2Dbkear1kRkB8cUj4p1zox5D3UrLmySNhtFBnPWp8QPfC4tnpCX5pVPbcguB",
  "key9": "4r4jEbzMxQafsN1JXP6LmqSL3PZWDsjym9Vy4D9Et48a4HP2ctNnKme9w6pGUzQTi4MM9mMAXFLqH8SbGvmzHxLX",
  "key10": "4oG7BgX96B2JtJi9c42eG4b5pMfRb4LzuSMrh8VbfVoeaWQhETJb3w8WffUctDvEUUzQ8Q8ba5vkGYYMmgzoU826",
  "key11": "3c4VUpLz6XgWAt8DBsJVJqBxtfmdLqrUdDdQkbxvWoN8bfnDnyY6cGVMqJRJ6ro8ezmQK7WJnx5rcpuE2ccEJTwT",
  "key12": "2TeyfApCfyypWhVgqqEDupx63m3vMt4fC7vS4vNU463h111mQcVDYRcsKzQqvf1ca8MEM56WGDkoLoxoASGv4RgD",
  "key13": "5sE4w1h2sU4cwRpnPa6398AtV79JArUhdAZoZiNEE3jicdva43hG3V9TjYMFXWMSbZGDfrDjq2g6DqqBeKNLwNW8",
  "key14": "4BHrCJ2f4yjEVMeZw5qV1tMJVDzfBgQoW9run3V5ZiVYnKK8uyLqZ7ywVMRsVk2dtedaTcuaJPkoUyGZyWUYJgvu",
  "key15": "3GFbkqyX7KFANc1kPgzKJGWf9KjAHGZpTujh9QMBHUJXXjd2sexZmPc41kWa88hcCSYxcs71F46J42N6E7JAkEGq",
  "key16": "4TC6t65KoEN1T82gT2HraX9pxjvLS9wKVnrZVbao1VsXJfoQUu9P8SsJr56JR4vUXAS1p5utGcYoED7QKjban4Ya",
  "key17": "4vDSCmGmqabDcW5XiKasvGciN2pCS52YnvSPTW9jSxcpTESgjEDqVTiqNsvk3is6njiYhAVMrzdUHsAN6RaY2kCY",
  "key18": "XmADE3G4Lzt2JAhY3h6Ue6RSEipJqvG3e12Zu5FXgij58mHY3RsHWMwvAMeoiiWqnpgPhWArMsrBK28gGYibX9K",
  "key19": "2f4imunqecMoZYgR4QwRn5yNe1xGBsvFVi8bTKULQ1nMh3QaKYuVD3AEh45SMy8zHNtGNto438RT78TkqFzr5kkS",
  "key20": "2DZvgnQpr2JHPuJ5aYveHcjgEEYvdNDPrrfiKBezdeAf1ydMcq5ndPmRYcDKSc4g5UMnHpTyTcezvgq1YZyiimJQ",
  "key21": "2QDs3xBEYnN8apqEEesUYa49eZQ81azHYXiudV8Jz39ghBdVKEPrqh8wgsTwS2Ua9FQWG8uEE1Ws6dTNeSbkdHS6",
  "key22": "4UzqQ7mC41yXULN5eZ1uSu696sVe2qdPwLLCF7NptBWme2ya83VgFj1KTsJ7moqvwLTAS72qTraEzPSsZT1fjnsM",
  "key23": "3tJ5gF7y6ci9aZGtUpUhbRzcQ72WQxFPDGL75Gt23qDV3k44yFu1HXQBghiVnmLDFs6vGVSnJkdPQFNk4JBmuNyC",
  "key24": "28kim6BxWudANDsNUA425a9eduM5TTKPbfFzRCp7EtmfwdYKv35jn8eLE5vYJW4oZWQAz7PdxNhJmoWW5u8PwUJb",
  "key25": "4wevsfjzhCcLQqFicAqN2d9FPzQjqSRwLyKrg5FFYk35cFjnXbn4rrYLVmLf7LDWKcZ9aD6AaTSvi3CVXspVhG1u",
  "key26": "5uESHah2ZnM3xg4zYULW5gQoz3YYxhVewct71geBXZN8ir59BQv5e14CJhqtiwHX8aeDLgK9LqFjTYxPhQWcipU5",
  "key27": "3K5c3VtENhVyEZsA3C2BX7djnWHR6Uk7cL3zM6kwVZzVWNbM5cxB6AJ8PM4J8aT9Bpx4QbthePyrjKpnZe5QKxTB",
  "key28": "61nWdYqrAmc4L73dsHPWyQXX7rCxWND7kpUS3FpMLoYFeDX39DdK3mLr9kxXAggzEgyaz3wxuGrKZfQSNfqzfAHU",
  "key29": "5LBGsGkxx1py3dTW12JZyugkcn1rBJVRcL86JveWDMCT4PAZnE4smdNH4C6NEa3Xztg61ZwEX4zxdseLATXqgKxJ",
  "key30": "6BPemNxbKegj2AEtwMCBwRqtj2gMkA8WwwXQzFicop4UJgt9Db9UYbKbqGtw3WLpqiEjnBh1pvjJbCCvvBCtw2N",
  "key31": "21FosjKSCgvDPZKqQsrq7VG8HKzgJoBWAVyDNNQsGXXou36NEzX5q4WsgHuv3nzsGdLaBKUToNRuJbeTpSXpQTJm",
  "key32": "4kJMaSb9xjyskBzTCozVTcJcXTxrq1gASLTobQFnMNwBcK9GXwKDtprJG48NRKRfQobTL6FQqXniNWf6YApCo5nc",
  "key33": "5Wp6kJTiYTkC6i4DieuQx4bYv5SG4A3VAJG8kv6MdcnUiZsBezNSwhDp354K2qHyrjhNMUn4wGJdMStHko8doTgj",
  "key34": "2ZkU1ERuKg1cDyiVcPPKYXT1MHV8U1LGi8gdjjNUWmw3RmUXfGV2UdYvBY2NVxmaewxUwTGraPt96vo7vT86p9ur",
  "key35": "4ENqMfSf1pEcz1eeLSqU4GoYbKBXbpTzBX1Gr94RPErL3vSx4yeAhAoRbJiqQovptRyXeu6bbMaNEhXQZZezhGr6",
  "key36": "4SBCALDcryF3AT8ugwfQzuFfhLFZAzCaCEgUDkUUG9wxXoVozLxmNBHpHcMaSZ7FpKNJYiijj4xw5Lk1hmkQpvZW",
  "key37": "4nYWgeycZEqVmubi5LrEG4VWdRLjejfE7L8iBTWs1D2tYy671uE3vrJB8GbXkZvEHXAM2NouTmdmmktwgCtixVc8",
  "key38": "KGiGaSYUogNTNUSBd4m1dN42vSMbzULQPtgUeSvwAntmacM2YqioGpYRFeM8FVcwf8i6BN1AYFmG6D6M5fjmEzv",
  "key39": "53qtrU9Y5ryajkz8QkteUGvf6DgASTT2C3DPS4EuFVAwFLkyoCYcEzegSc91SVTqPaNenFvTT8YBT5AUajUV6LFM",
  "key40": "2yxvMJ6ikrZxArzzATQxybfiMEheSVpG3bAyRtxhD4y8U9JDXUXuSWUxgBLyWh1Wd46RVHb5s5EXxmhaLaG7NH9v",
  "key41": "3BgnaqsHPrHCQwYbTogqjfbYen4in1xXVZsDxbzeLhBd2HaNza9wTR74snuY8XsjS4aXTi1YHSHumJVzBXZXeSbt"
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
