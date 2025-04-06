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
    "PCWPuAaeqsfNNAg6jyJXePeQ4JbSb6WGnQpiQWxdNVxW56Du8dDzvF4DKRDcGvUxQ1nxDmfNmF45GaNonBTP6jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8FYgjK2kfGNdzLLyADcB6RsP2jtySNwqFRh9xp1hvLCJGT5DfHWoZRkzvfnmNFCBwYmEG9LyeheuxScg1zjfFP",
  "key1": "4uvsvVNkh4HM4yhpkk3s6WvhdkrccbeRY5TuDVDvjCkKyfK7vSxA8498i1NZHs6wsZZ7mffZZH2RWs3Sv51fT9uF",
  "key2": "3NEih1CnKHS8HAdU6ZTDQCMNxbF7dycHKGJGymK9pTJhX1VEkzHXgAvNspMZPqJKHLDXXDRc1D1pzzhHWLeNSUru",
  "key3": "3MAoZBGdbhRwnPyYNM5wZRHhcs4KbWvcy826DuEL334j2umytwcycTJMCAaJdqikbsnSt15nS28XG5VrBG8yeK3S",
  "key4": "5gZ7msj4AMEEb8esjyDLTUHBhWh2Zs577b8yAqvywKuaZz8P55tfs1LWf1HuoBWd2JMKj9hpbk63yBBHncWtu2Zq",
  "key5": "26ZeikUa4RArw75fva3LLsvANyoUJrHzyr3dCwUQm6GJ5C5ChaGU7PX9RBooTYSobXg3VEqd6fdwVHbNvtT6f3CY",
  "key6": "CpRvTW1Nx8jCjsFue4tiwTgZoWHA4Jcr2FbADEk19M5v6DXgj62nHJQCizWbH7HgZsZfkY8aAWLbUPFmyXJETrP",
  "key7": "bzxhT5woEyzGvYQwmmuMwJ8QxMNNk8C1cLF1VZKGrsEtLeRnsYfU6ujeA8Ew4anDLidTWKBFgMBQU85tawKU8eK",
  "key8": "5oAviNGvaxP5F34PfEzNX9aSgEvMpC2BQTSXdKUPoVWnZJMSrAf9Bg5eV1E5xDXvWBP5gHZJFMPV782jDb6R9mSF",
  "key9": "Jf3DfD3oMtFnrTC58n9JhAXJGrPxMBWYsPB5H5J1jE28GseamCk7tHiQLyohoUFNt6ZaioEraCrpHRY142x5F1c",
  "key10": "4N1XDLUpTNAg9U8fP8HnxDAUxWzi9j5BBJzQSiRYPBJHbgWyGYkieXGZJaTXXtDAyYCzvL29FDZ46RR45hdMmbWb",
  "key11": "TVcP9Lm5N7AacFr2PnToFBZAEh55xAFR6ZEXo1u4kiaJubenZZF7xWm5XGRcZEDCB5VGJ2pW6aWqpd9FzAZkpCg",
  "key12": "YHtJf6h7pdc34jnsji161t62Et9UuzW21geQA1iJN7BzXF8JCtopDuvfzSg2prkvMruJ3oNmsQWnQPNpDnGgjxt",
  "key13": "tsXBzVvr8VaEcHmw7c5P4sepEgNoD5ZnP6JZ5a5gsYb4g33nujWXfPjHmqakdsRi8zPeLwSxP6bjWUxBPVE1NAb",
  "key14": "Pfar19meS9uHGdw3q4AciuXdgM8UDAZRsVHKvWD2WZzw2eX1Xd4kHLMYK7st4JuhFBmsSxDgdXjemPsP731mWAH",
  "key15": "5Nn4gweLw6YCjnjfLFkn1wqpiafxQ5YeHVBLAXN6QfzKW9SnwFAe7sGGeg7KtpWQ3Wm4RetLzXfEaiLyGYsk8EAN",
  "key16": "3MCwUKjRhMuYn3bYmJvt2vr1HWw5ipbeTRmGTJ18EKFAo1ivWKTzHuaiisEZJBaG2Kdb52bt3ZAzbmMZwmyRkMG7",
  "key17": "27XBtXDNfrm9xBSV3JiRHEHD6MDPmCKMTYt7Ft7wvcTBZXpWooE8kYiSkBh4hdFHQ3JbZrYGxpw9oDSweLcjGGbx",
  "key18": "5gVX285JPrgJBHQAVfGQSAZCxA5hqdSN6QnzpLhLVHQjiaEcY1cBh2xaKx768XkFW7k5uXdhnHgbVbW52ve5rQBz",
  "key19": "2kZU3UmCToM4vZdRhAkAXSFYUb9q5GbbaW1JtmDHfrcxbW7ZKECbcnf8QvjRk9vy9qEU7dHqJUZC9vXzRAXPvWgr",
  "key20": "3js4cjDetJwQKNBLVzzE4mYANgDqUAXMQxsJm31YYePWUFK9i6P9bh4wpMPCJiaAWa1zB2nDyGg1KNsSez4HUee9",
  "key21": "pum92SoetknE51tC353RW1n4SoUcFUpUL722AaUp3QhjKjEXZEicjn2nCEZzEncmPaV3SXEv7bQbBH3Se1PKD6N",
  "key22": "dEWWCnjDDi3soZ2RT9fN2PBmUTGuJtubGjzf3vXmdW254Z5k1bViCo3XW1ykXarfG5rqhqzatkLCgNSY8hP6gZK",
  "key23": "4DdJDKD4iCEUkShwtWfwTzqkGonYUbc9SjG9uQP3Z8ZFqS5TiC5ogEkMh2R89rWoff9uRCKwUyRPk5K76Gm6hYGS",
  "key24": "uSuysBQpkJb9Px4kXQU61ouvuVzUb5rT1vSmiHxhsjz9vvqJTgamgPQc3pCTCzGir9FUWB2ymxQW9mFsiwLHgsf",
  "key25": "qLi68gV6hziZcJNEw3eW85pkJLgwi5qeohiJV4vh6R6kVvicQ2UDe2fo4qQ9DSAbwndjikGLrhyJMKRL32raR2A",
  "key26": "2qJKEHfd9hvKeTsSsheZKVVeb3ozJntexMCDtFHD3WwkKZYV5KEbhZbxPfNDUc3ZsfQAW9mtLPHqo4mC613nnX86",
  "key27": "5mJq46zyCQEu6Wx1jRnApj3pQmJGYQ2NEbPNi8nZaNdZrGsK116NcE8EUUPgxnxXbK8SKitrD7coANqiLw26ZpwT",
  "key28": "27xD6LP15FdcNb2N5AnXMyf4cN662k16Fk9YjquzJWVeYrXS8NvwM6YJ29Uv1JM6Tcr5MrUNrWV94GqBX8QcJo7A",
  "key29": "56fGYPVUeiouQJ8EEs9bidx3aGZc5fLqLwL3V8WBSW6ireHtcGP5xQEu5fdibHYcrZccDmJYSmNhN7TZt72ptoLb",
  "key30": "3TpzTUGSDyTvFe4ex7JdcK2VpL2rfxfYwcnXq3apBEnYT3Q4ckni71v4nuK7ifGZ7Su5rvYbJ4CWMzDmDvUpz1kk",
  "key31": "2Xz3PwQpbT5oGMYApatKx6NXkQYiJhcLkBZwXS2jCSV82tTZU9DPdhpkXHhxPJYmgYQyPiXhHwmYCoKwquAhRiD9",
  "key32": "2PYc96XJP5FQNskn5FnWRvMiU2cQVm97KY9CPeNUzguHgwG9gmnvWdGSFUBEFePRFktBS4o3WZXvAEeqebYpunba",
  "key33": "5j6xGqtvF9v5S7QGP37PFVDK379wh3GSxW3bM3tpNUTkexANNJPqPsRiVLAQxHreWzpwpj7xryAxrLc9EU4s1QBe",
  "key34": "5vryrFvnNGz32ftEWzEheXyWJUW7aUYjC8gr25FUDFGZjvsQmY743paLCT5rZeH1uJyhY7Gx3nnpQ7SPDvPmsTB1",
  "key35": "4jbqbdZgt7tzxaPX9S6Tmb1acVSdAdrtAG1AM6T4r7J39v2LUkQ5d5JyGxujUeRgLzQa2vE9nfSZTs73i2RJuKdk",
  "key36": "3NUDLPzrRrSqYwoZZ2nSmRr1gFVukWHT2e5QygtGRRSg8YKTAwLQEEHwcPqA4SwoMYKYLdoBDSzLQReKN4qH9izc",
  "key37": "5H9tToTQAvhr8puEwY2MMtd4js3AkXxyhtMHoQY5qxqrEWAqo1zRWDDvF3oQ3T1coiuJBnozSZhueYi6EwdLXZJe",
  "key38": "gf3VfPp3n1f3UYbMXBdmihEu1iyWaGWQxWCqmtd4bCUPvNsAtrDYySVctTG4Q3yGqnk9JVmzMqqJRq7GReUCyjC",
  "key39": "3Z5jcVMqvjXKyQTZqry4gifYubnQCwQDdtf9LcDHHBX2M1YRHZ5BKaCoFMttcfP8RRV5XX5yFzdoApNmwEFnUATv",
  "key40": "2mUmdMKYyx4vfm3ANdRKLN634hEnNP1u7VatXDtDAkFxaFhobCS9mMCcFdoVLPiJhqQpTAa5P3RSysELra9Zo4fB",
  "key41": "pJHfZG9xWWVQiedNcZTJpubv3nRQhvGFQiNJvPEMq1bHPZHVCtJHdzcd1MBMKLjpADjnmLxcVB4R36ZdGxbBUGP",
  "key42": "33idDNvHTL4wmJLoVjBKsEYGprt2nJgkob6UmuATfZhb8GfGp4y3gS4TgF33pVGTEm1wywXrkrNpBEV9M5oBBW1c",
  "key43": "5EAnnwkaWq75LutWGYv587nTCHfRg7HtPfTaaTePyxjJLhZWMgKLSPNkr7Nrc9X91ewtAGYx9fbNoBDKSktX8w4n",
  "key44": "62sWKWvjctXzwU85Wrs2jLPDS8my4TGjTo9whBqyQGVut4v2kESwYVSM3DUiyJxGd5VV8V2m26aD2J2S74JrUoaJ",
  "key45": "HNKJRRmQJuVebf6YY9F4pE5Vyqde2tTR35zTATm6pAdHoyw1Dy7Fc4wsnsh254WNQVMVHtmWBv6ZLo8M8VqguX6",
  "key46": "55gKhxWvjjsyn8EYB5gWiiN6zUNMGyigHEFDseKpMzopzp6o8ZzHc18hCVmeNVT43zXVjkohWgpUSd6UyvEM2am7"
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
