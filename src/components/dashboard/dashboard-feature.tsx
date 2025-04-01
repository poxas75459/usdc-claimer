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
    "5okbMbRscwdYtJoeZetturVsMiJiUCscGFkjkMpAKX9tuzFLwBvNPPPvnFqLTf9Yj7pXmcQ2W8AjzR1B2E7hNhKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzPqYYretAykdJrdaagzJ5CsywE9ogWQ7YxVyXcShSzmdiGTo3zsmNgYKiKvDRzV1SJj2b2voE2ZdowXoEeHrkT",
  "key1": "3LRjiho7JGiZ5Qj2fyyY11zTgqpsaPdbxcecNG17pyMY1TEs1dXTFvbXmQBg5M4nseGScYb5rg3DcGJoVH99dDTw",
  "key2": "5uFF8beVXsSNbpiA3LNU8jNdLXng6Va6zsXN5fXC8rYMbMk28YZEGJFhQMQK97FwxP4qEa1N9B8jba76vEHSRP2h",
  "key3": "4xL6Vs8zVipmhuTnzVVA4B3wPowywc6BgS4E8dXgreusW3hRvUzu9VwaVMw1wVqTf3ozrP4JeC3ndCMPXY8TNFaE",
  "key4": "3zPHn1z9uZCy7C2L1pscYkpsLGDBubpFUCSTQVfV6XAuQz5vCwi9q9JreTngKgXUipng8e7Bs2eTScN94TFYXNWn",
  "key5": "dQV9wnCovpd8djdZivWc5GZhjAwCJypGT4HnmPss9vSScAAmuoAvKFjUEseW7xBNBQTN5tiSYkRt74xwBCFXePD",
  "key6": "56Jd3ZkuajRGSjgcYqD9UZuBignDSHvrm3D5YXP62Da5UixWmGw2A8SmaDH8Jmn4q1vmYemWe4sHwwqjxEhFhQfB",
  "key7": "63WGBYnLejKftHeM2Lo1tRK8ywR3HJ8A4HFV5HpG7S2fTqhj2Jiv6nf4MqsnCVwiRSQskR9uBmZM23ULzm8cpms8",
  "key8": "4KYEwyQcmmXRzda7NDtLKq8mKEWULkV1gtnEob3tcSonmkfBwYY11ttMRCXUj8KNHZVmMXJMAuaYEfZ8U2xv4Y3v",
  "key9": "27tGfdQRVjT8nUc2gtzXwNZxjnobtrbiBeQaF9EKHRujKCdY1kuhYJ6jkEPNuwCTSCXiDsMRBR7YB6ADarXXm3b1",
  "key10": "29DBJo1JpfU2B3T2SFzSXTkWg6ZzB8MqNcqsvgq6W4qdJCvg7srs6551esjsEx8F8fKMk3hwpcWPvXpKRXgBB5VP",
  "key11": "XXfrJcdaNJPCUyCh6uTqC9wDHBCH6ZKzwtdcy8BJc6mLN3YyhQurH8p3sHY4TgZhygwy17vgqDetdjL53Yd6p3c",
  "key12": "5anYTw2aNepjE3udK4jxWQNkXU79aCAKAnw32d2rcJRzVAY9mPtC72ZgSifUg2ocDmmEqmDe4JeGzg6myJeLzo79",
  "key13": "44fV7CKHjchZJrACT1v5gUZnrrJY2rdrvDXXH55a6Ctq8WJTj652mNT7GBVh1mVMt7ojRrH7HencRTZznc5qG741",
  "key14": "36X6QqFMv673CQLB9H8nZ9gmWws415FGDuH3bXZFgFpgbTz7Kt9AvkYCFGwQhJXFCTPCP5fBdaba7EmGYUrZhbZ7",
  "key15": "38mLspkRVo3oMvsgmJQ2FcwKZ1MYRhVxw45PysWUXEwxmMLxS1fPe1dBGK1DgCFW1ntVWkhCdFFdDuC9ySx96bnx",
  "key16": "3DLFxsLH9WXiy7JpKonMJaZ55gMfGzFGviJr2M5KsN2MqjyF8GobVLLouUHW7FNTsDnHpR1zt12xSpgCcsdLNx99",
  "key17": "5zZU7NSnbe9KqdRxyPK13ZmMnmrJS4nXHmiNV2K9CEQfdx2iQWCqsZVtDMVUT6aNeh2VS5i8P9LxyJKffX2RJQae",
  "key18": "kCjBPUTwk84jyfnzzcfi3crCnMecxnHQKPuEeiqTv2rsab7z96gJKsUeDWWNgM8U27PRdT8PnpZkmPjL8nFxHm6",
  "key19": "7KVZH9M4n5MG9UrTCVM8L2UwzBS1DeCANuVAFjmSakMjKv71kAMEWn4754Kk8pvZgSsBCrHsVPJp86Rphpd1vtx",
  "key20": "5H13jNx6behFTDD3aig6tLeQDvsoUvGUpqXSUh6DfWR3MED9Jc5EYJXbcXgmAL1QDUXNFmCFe6o44M8LH7vY4un8",
  "key21": "5N5EA9EJQdvMFz8jR5Ab7zGUZesJZqnmPURKYqRq4W49B2J4JLtgkyUC9VwnoKhf8VjbfCu7sctG2BBoJavx2kwy",
  "key22": "2nyMBHELGszJmMKsPDX4tmwBhCJ6N9w8rVfPWQ3p5Q8RyC7cJF6JiqbJkEpoH6X6zFQPp3tz4GQ9XTAyNmeaqB5X",
  "key23": "5BRZyznb4yNjJmkpGTcimXd4qbnHDXx93wAxs51ed3q5gUfmpNhN3XHdX47EVbBf82ua9saVgS29nhHB1GcQW4jA",
  "key24": "5AMSnJjrxGMhWGn12RdBtdN6NTRVNw67zzY7v31AqdndddyNm47xXu3Q7h8KYLvcnTR1n3QsmQSgA41oa7wj25hD",
  "key25": "5uXwYEUQSX1UzTMsQcYRgHVJq2nwJTfFUAcR9YRaHQHZEko3RbLFMY4vWr7GfVQJ3z7yaykzBX6LNw75cs1xVAg7",
  "key26": "5euLijdc1g3mfnDct8mXgkVKc4AHd1eFZPuSvRzkf2RNYAAfAtUxLaBoM9RsQYeTVEt6pyy7fy2DbbgZbj9Xja24",
  "key27": "5VAqvQYKqWi46RxEsAubaaEMS1NiBNR4AKFwkwaAxZae2XBZxRWx5pNLJsHniRLb2fnxkVK6T4ZiBm8tqMKmHpux",
  "key28": "hjEZ7dPtqDB5MaoUTp5bsutAfVavL8yEuhPPZ1wToFFtWJfcXN1H8NDBuENVKnYsHAapa489Yh3c1ikLVKpz4iR",
  "key29": "3bMt1cL5koWGQT6NsGvkw6WcK4wj3nHGWrHarsEh11Va1FLYkXFDnPVbQY55Yv4h5cT5oiauerr8qXT7L55VFN92",
  "key30": "5VZw3QPJSjmDfBvLFcMWAnuLGGsDvoiEJaq7fdi6ZKGPg4wQTWXzhVRWcqVxYoQFyCbMJ3GcpJkZuekP352Q6iYq",
  "key31": "3QbVKPgm8voB28iJhLrDPBn4CSTnPRJ4SAC9if14LjuvaYkTFYYzi8w2QuPSnRfrkV8wwWkxkJs3MnZi4XaJji1Y",
  "key32": "4p68iHiSD6qecwBP4PckaSYfip2BzmqgnrvGoTWaH4ppCRZd7RRAEn96Ff3KDMh1j5usYyTRUrGXt1fGcJmXTkSL",
  "key33": "5RFarP4c7sNMu1AHkWpd3TJFCmNi5mLf3m9kamsjg4XS5D5jPDcUfiRrD3S3ZexYuYiDPqViGUcgossM8oDGoDdw",
  "key34": "5DnUUEtGqxHFrF4DDLXfcoC78dZCeJKJP9UaRRMbSqsCVbzSKtGKdXuDtmt6hSDY2t4d2gLgbhnLDjZpf94KusLR",
  "key35": "3EQ6FsfnUX4egYL7YQMxF3Kq2tVWeeBrvJYgfhCRCZU4tvXJPPAcmyQ9CEw35sTkBCtq6N97jPcMhm6p8f67kYDP",
  "key36": "kPq3vR8pTH5PQCW9oX6BMm1Ca7zb2NXhFb8vxjSoBqKA7n1QkPGg73FHwUJFrW1iUSeD2wrVq5M8jZNN598wX4p"
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
