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
    "3QQD3urHQmnXEUHmys2gtHUEwbXaqYPFbKQ1iQ67zzdgtoLqSLLDoHi9p4RNk48N4apRbUVPqiNyVbMigD4R2jrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGRJA5JKgRymba7HasqEMMpUDsEv6YLThmxLQqwfyJhcwUnsWfoiCQdtw4JqXbLAKYZywDDwJNi3idmuaFPMGrX",
  "key1": "3nKW9S49B7rmsbYrkPGBGM1wDyQVnTLCiUQXm2aS6DkXf3TyGX7mkP42efSCTYpcHfSic6yB6M9b3kooijW6P69L",
  "key2": "42rmnFJeagH52maed37jxt6hLs7kqX43RGyVgvj82umaH6v7VkxV2xHV1c277o3jecVk471rw4yQzL3M3ULnocHb",
  "key3": "2XsEJTKs1ex1KH57FdPFEVsQHZE59gLCPaeuJcW9GK3QwHTtPiDp6sqivigm3kuWLfFQYYqMXkHsZQXy7XUWnZJ5",
  "key4": "24u6ohJiJK54yMfBuNJ1b94zyDyuD3xKxiyNsYKGEEawxDSjNdb9S9gAbPeduxzvTuvMEgTxwFfcrr32P8jif5MV",
  "key5": "rWPLaMT4CMoEfBFcaMEua5N37kZUrGzCPpoCuJo73EkoMj8hJoFJbRxmkvVt7NRCLfPwcVB9A6BpFYLJS8XbAQn",
  "key6": "4RxyvByUcthR9pE6xfwC2D3sq6yBRMfeh4mKuhyBopEQdKaRzQM8AR5bd1REATmP7yJHkzebZK4eq5kpa4sXivZP",
  "key7": "5puKLScKPHTKmkV7QEZQnmW4ULgFGYrxryni2WQkTbwEGTvC8PreoGn1DqQkMrpJya2Gw64QGS3YG23YBh9qNFiM",
  "key8": "3bAneXvv9TrZW8fhBELK3KbZqwvPZnF6zro8C94xJZdh1SM36WSUtHCCQEqRdC5k5nEy8rt2R3YWYmHfoPJPDvSS",
  "key9": "5DC93qP24DLqC3utEvwgngFJPS17Xpwf2A5DV4CNuT7PwUrqoafsxuX7xFn81p2hj2tAH4kYNFwJoFotjxj5t4Nc",
  "key10": "3ReTAH7U87N2v9EZhzy3moQRj7BphpEuVRkoUgytxPrE7Qsay31As5uqhBYUj6zsrocD7RBgWQJJpiycbHDjVfUs",
  "key11": "KYchTWCBm8FuNoqg3RkTMiiwY3n8T5HmQL9WKk4TD6XaatbbrjgcMjBtLDrUQ5xK6ckpvcEqz6cb5HUgc28Zq3h",
  "key12": "4BwvAvFubvq46EkoTLDn6taWwJZN3RXprEPn32NKmZ4TQ5ttrxbNzv5NJQhphUsafMs9EZngq3DntiE17vbZjdjE",
  "key13": "4Ju6xAkeb4VSJja7nvfCbXrEeY8CRQU4uxACYhe51SXv8CwqjtBSRWkz1GR5Sd2qFpguX77xBCiH3cpri78niPiE",
  "key14": "5aqMKqc6BG3o8d5eWFAEBEDezcvPtfjcHEq3cU9v43NQcHndZePeRqAC1aT3U2cWT2f3ntjbQQ1MH7kdDk2RAeBf",
  "key15": "58v3G8bN7UrRMnaGUNfLuGeFWPJkbN5dB58xPvL2HwMvX4x7Bxab9of3zCDdShgdRFR8zZxrg6jkcmWEQZTpuH22",
  "key16": "2wSGmYwxFKE2vMHKU22jwCNHbJdUj812koWerY2zxcMFyjxdqQvWrYumrFhTLhmK9476jkryD6zc5qDZuHkHtfxb",
  "key17": "2986VcnWHMATdKJn3PAFn3KTZoGDDHntAEX2hyUopLm7Fczxwm2wgLW68L8sueUAddSjd1Y3Fscs3Nbg5NFDo7Zc",
  "key18": "3JWeRisD4CjRT8iHaRhzn1TDFgw9sibxE6tbAj1BkGi6RyfZWtzQK6fqkzbb9hXekMRWsjZERsxhHFMJAoFYpEDa",
  "key19": "4V1L6MiQy5v74yTDBZQGQ6bBV8rLGaFnrr42vCV3ZF8QKivrKkmotG1r7EkY3kQXfw6W6oJjPDgxCPyhJWguEFvS",
  "key20": "2MSjyHpq8xL7VKbL6jtKo1iUUSocN5bhZzdVgYQJyvaFhUWqenbe4hdSeZbMg4wGwJUiEq5zJMCsfaP5LeAmsGvn",
  "key21": "2QuivAPVhVBJ4s7dfG8jutFTfF4PkUVP7eZ364NRrvZq6NUJ9xkuAtgSQWm8LPfMErCmNDcjYpkWzPrFUArbCjZq",
  "key22": "4Le5XKtkQtR4NA8hueHoSj9o7yiDFiEB1sAvUV315duTgMVJ3MwYov7iHRXZ7YQaNpCqVwjR6an2FHmotr1zia9M",
  "key23": "npvPB2RdkyDE9RYxfRmcruSJkidY66Ahw51kCsSd3sKaMNRaqS7WZQzF3G1axpXPdn8BxF6LW5kH29Xu7rSbK2y",
  "key24": "3tBRgWJH46uJToBgrVmrZYGgs4wJYvDjbvGD5b8PDM6rTHxZp6p6Ev8iuMCuL422ZkC39bKhtpAaDRZx445DoaAb",
  "key25": "62qH8Sq5z53PGcnMBnjqZSakdCEagNWLgSXnyN8dsKwTY8yKJbfDDZh2Jmhv63nKamGCpSVL18623YZHrYx8aiYg",
  "key26": "4AWwrp4YPKTpgEPvGuQtXdWEqML1PhiWknotuvYP5JfFTChTYnPvwY5iKitv7fnZ3xTTE1tq6FDphDLAq3FYSxFC",
  "key27": "3gfGviUQHDPzkj1FMwiZPwXoZyxX2LqRq2YNqq3Rw4negFEJp5U9i2NafuFv43YQdhAnSjQ9VVJNykzVUqdDsHM2",
  "key28": "GwntfCowPv4gxU2iE9L2SE5nLxS1WKU4v3iSaLXbSg54WA66XHuDB4tvBVgF5XvycwK8KvwUxfL579hSf4UBFHW",
  "key29": "537DT3GHweKpRnHng329ZkJQMvv4ETzk36rviF9BxWKNxpxW7NGhihHeoqmLzxRJ8FGBkGuCpUVXAkRngkiVZstC",
  "key30": "678cELzX1bGRazLNvUKUY4UNLRtrWypmqQyD7MxeWNfiAD8XUeZE9hFTMZEgW5NYePj1ia2QGVXkWivC8pEBQoxW",
  "key31": "3VitknBCzZRdmqMTYGEsGTiygzCHJF5GNQkwqi9dJ88QdLGFekZxmLMmbqT7VrdCMAwmBoKrbTKr8NkjPqHeUCG9",
  "key32": "ogDfPobZWCRM6bKc8CxMUbhn2PzzzwXWEFqjyLakfuYmoBSKjTzRyjqvdmhhnC3eTzDobHW6nH7hJSDr7aVGG1x",
  "key33": "DZEP574S5JTXH6WEfW4uGbiNB2eCkMohNAktTMksUEkcs55Fs3NkNVdx5mPKKta5m2jKAUStbV7KFpRmdg79ujA"
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
