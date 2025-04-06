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
    "2Dt39tPNkm8CNyB7VMyQf8RYHhdcLXCCGXA5CUk8GNNiEdLXVD68AwTyzMuVFSPJRJ9gnG8gkHtdFomGg8ihPDni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cVQkBDEWhGaZKZfPjm9YPQyhmYYGQxEkcaTuHqVKMBP1RcEGkBsx7mmzd34Fpvc6FUAdJqLjaByNNmLMJjGXcs",
  "key1": "3Ekmvcc3NX6AQkQVr5PEqfh5YbNVAhuTpxTtN1AXpUZn2N8VK4w6NLE1zqdk2c7bsavzG8zazmqzp4VfVWRUuoAt",
  "key2": "zo6DuB3AMt2HKD5mY4rLKKBYAmaAQHxLvXg7cbZ8Prk4AnRgFzSHZvuUgDrqxLPBvSb3cADmg227ig25Ffch39T",
  "key3": "49WneRPVMW35kU85uMmQfACKuNMUkPFSh4VLiX5jmnpdq7ugUhyXtmuwHrDBtJDNKNzEb2jPMyfRTKteztfUUA7L",
  "key4": "66p9qMaGnd6g37WGGXyNWxEaAagmJyMctxHq2fSmbaG3J5JUe5XqRGDPMqnQrqFTz7knM3HNXRf3DdpFmpjEaSBB",
  "key5": "3V8GKr8STdoyqiqfcKy3qUPrp3bLp2sw3WBaRUCZnoLgajK3A1WZALmYVbGb6dgxLKfJ36CjYY2cLaxifxGfQxye",
  "key6": "62DKNEe4VDxmfx5LVLPPM1te9QHTHK18uei988cZ6LYrJB4z4LX7nXSacQQL6N2FhHJMZRrdQEMZhWaffW558akd",
  "key7": "573Jbnwm5UN5G5sU4k428jV4mYJRqbpUvzVx4FpsenrkcLAYAvnLe3njw8MdfK5iVo7yXHGMchqEPz565yiCrCEP",
  "key8": "2BJZPKHgYG2KaUpzTp1WQLRJ5b4g69XSTLfWm8debig2mBZ4LZAU4bAzVahyLissJw97MqWEFTZsK8hmPJa9gb9m",
  "key9": "5aMyQTNa1G1RcZjyspWwrxY4qXqk5iEvNXFSrTW4sZjLsC7arjeusPbjuw1yBnKYwTABtmYLCX4cDDz5RJmeMywL",
  "key10": "4eRSCyfnmEniMuJyh1DTMzEYwCJ1Hy9nqYLrhC6GCbdEFCPGjYuBmeCn3n4jExK6MtsusKUg8FrBKJQCWzzK6wdD",
  "key11": "5Q7ZhgBfTDZpPz1MsU4NxGMeJ6KgVSv57PWu9niU91838wE6Sx2n3VebdnWkjYPX7p7caMBsjsb3Rm4R6gQdHsZv",
  "key12": "5iLQRN4Q6ucdEktaJ1HsZNTsV8BFc7prBBbwgF5L2KVZ7FnkLU3v1B5jBhdo9eeigAN4WTXijateeMkJDwBgZzNV",
  "key13": "4ez4GU5BtZgbAHEkupHRDcDL9z4E1HHwxXoCiLSNKYWnA9oxqeV8mgoMwxWVLbtBi56UbbvGQN3LoDGy3wZmtr5L",
  "key14": "29y97Jco3SuY9DB3A3hAdsz1JcfVe8X2BuB3CszioiYTLKbXQ5EZ5rW4i9kq1M22FKFwUhb3kKSn4umj26nvkk6x",
  "key15": "5eXF1LfJQEqiizCCNsTsLMoqy8g1tUTC5NYt4Q9o5mDsvN92xwV9ZZdWaKXQGVbBSPsiRLmTUMfL2uKGfAMh3UwZ",
  "key16": "5QhTSTyUQXkR5d4Av5huEiwrrvwd65ZPMPRWYqdVJsXYGyM5muK5LM4Y3exE2jWKNC2H5F8grY3oPzYVYZ9aQYNd",
  "key17": "3vNzw6xkeE7K4oeBCYkndwgcA9JWYVwcdDXZibpcyEPA4chCCLKbiS833vCSX2gLYXQ8AKZ6Uii7vf894fjVCxZJ",
  "key18": "HpUMrLknZrvJov6pp9tMY3gk49Y2iN5ZgbMG1yKmnhvARvx86s1fb88zRsotyoVnYJAVsj7vW9tHsJ3zjX2G9rn",
  "key19": "3p2aXhKEunC4SHeztrXMNeLveujfZn5suNwF6R1HBu5nZx7zwajySkQZjhfbbReg41bt53U2gdyjPbcNJBYxhDEX",
  "key20": "4KrTvUMQDkpmKfbAg2TwcHEUvFvPv7A6V3koZoV64f2AewrZixGk823fCL6er27HcXeXxzJxLuw2k8gBqQ3GS8f",
  "key21": "rGctvoc7WSAypTSw5dysWymSG3yW88dhRJZpVcTksNf7AHJbGtUiF6MdtXaEmjApNiV1MgJHeFgLJc4sNQWmyGE",
  "key22": "39z2tEbXrTCHEoVSYYto8tf8TxcMMYoWCrqfdL7Suvte1PBJESwHPmrxWEx9dFp9AyKgPu4XJPCGRJY4zyjLLLMb",
  "key23": "5jMh28XkvKPfzLJuwifLR2cY3SC6TXocnaQwEo9cQ1bFKBv2UGXqSA9jGJ1uoAiRRKeA5uqsRWK3GpdtKBAgNkEo",
  "key24": "5UmBNgGsmKGaxARvsfDuyg18pC57UTDRQ9AYmf1vMiZHb2ecjQYmzmdxZocX6HHEbhWkyUD2F9JFDM6ZtyWTbkcf",
  "key25": "2t2CoVzs1ghTXEBKGk2myNqQ1TprfaQ6i9PEV2sCtM2VYKo18Qu64TYmXk3jUgB5Ke59FHbqtBBe4GqH6Ld9CAEr",
  "key26": "4TPycr56FdD4xLaoY5MDYYGAtX6z3NCzuwYqLXDoH5dnR4MG1CLRdAzDKTXQvkpkrzbkn15oJuUCRmXtSaDKNeJq",
  "key27": "2hWebiLuT3wmVSSfhUrhtgkSptYVxe5GzpX1GfSrmsoMawktqYHWMiq21HoTbZpBQcvCRCfDCk6vgxNF6d4zGg7k",
  "key28": "32AdXNmKUQh8BLCtKfLkF156QiayvVpDsKHv95ugYDPdSLYCmTM7N6wry766JfWAMd4bVbKGYEiCr6dzfqZm2VST",
  "key29": "2xg23Myz94ZKHdtYB6vkQbAWNJk4UFm2ursq8inAGE7wSuPbkiGCb9L3zBpieEnbBEW3rCZsejDcu1mce3ZL8XdR",
  "key30": "2oUvWJKHwPfKEfC1bHgsKtewDekbnhddoozfQsVH3e8xUsKc7gDcZm4zhRbV3XN1egmCPe72hWyeTiw1JJfvcbYu",
  "key31": "3z8e1raKynTVouae9hwZb5b1NKv8qtNjRaP2JzUZ45UqaZz4WwxouQwDmkKZgAJFDeWyFEr7JF7sbRMkJQuCXnJT",
  "key32": "49SvVVC7dbvnAyRMJqekbzLpr8fGX6mpJTu5EuChb1cVGUV2rML4RAT3as5orJLFonkozBYdNvWPXJ27Lr3YsZtw",
  "key33": "8qV6Kd92t3A43xfycyy9ZD3DB9mSYrxKueataqFNx6BHnLxnXCidhpMsZVnxfG4Lrpwz3UF417ikzma5Zq8Vb7o",
  "key34": "npJF4enAnboi6MvYD81pHTWKN9gfJ5jDoRgstQkbc4h5b6jNMVuN9TPiunHzvQnr4GdFzkdXFnMHk8nPHew4QYa",
  "key35": "33Rbsu1hqGPUJVRZPeXQ44sHwSTp3ZctEPgiN7aq8V8TN27hjurAeKkM5LU6oG97kQ7wQQ5wceGQciWWEZJ1XUd9",
  "key36": "1dvssgmgpYLyAMZ7NkL1mWMnnP9BVukS3ZE7qVNQnZJacrLX32Uo74CWb3ciw46S8fRABiEB7KQERJbSy5W5rbT",
  "key37": "hCcNgdusd5pgtx9zCypMZHYP9MqRWhHCABZPC86HFwFNd9hAwgTGpc7zSiVNXja1GoJqR87MFqBMwY9TzdaVi8r",
  "key38": "4YfQWWqjpwpbzjy7CK46YDQLhoYKzGj4cFj8soBf6HvKgBzpiZhJBm2C7wAJCe78FAQ77eWoRnXfrRQteELBH4R7",
  "key39": "3cqxdRH4XU8ViNUjd4oAYbm1GnH5LcqFSZLgUtts2qPLSMcCZKrKfN1ozk2v7Gv1XTkR7wheQFiD42FHgMqXyKcQ",
  "key40": "397UXxC9qQ5cfwsYFWaWRX7ionSZraE8XtdKJzjfZfFgArPcisGVYXHJ4EGhtE4kYKLCRCd5pi2CtUbYHZ49FN3K",
  "key41": "478LZfFC7nuQ18DH3YEFrJiz23oXeGvGEeTFE17MSAhDV1jzQBnV8gf5qtJxtYMZUjAqQLF9GXjgPTjVj448H1Gu",
  "key42": "4wdZmiajUFkk2fQz9ZwhPiwxFqE4EHn4Ltm3au1FJRLMRkJyweC2NMmdBccepjoMPAV3FpboUZeb3hFRmp4u1qaw",
  "key43": "3w7jmE7dAe5BwGagvZaFnmQtN18zhpMbVSBJhZYK6L9KLWL9LQUXZedrWbJvm8uo2B2ptdEhbSyu82t6GKiDoHfo",
  "key44": "28eWyWWfG3p8DFYPAwdXxvj1AmR5qHXRq2yrN65rsaaRqonoseUm6NMiUNcVvHotvSeimrfBJk2KqfEe3iP9VEpH",
  "key45": "5dKPLj2tZnexgThv4j9oB7675WJMPWUjDjH11bH89bVhHGuT4LD77mn7EgbsApKUVaCDck7dpDnPLmZXYFxGxuH8",
  "key46": "HdXQBqEdqBhQK2UyhfC5hPH4VZ6kLMJocTnbMajTSjTDgupv9quMB2WJ91JvbZ9epHqKsJFUXL1e9L48iaNzA9a"
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
