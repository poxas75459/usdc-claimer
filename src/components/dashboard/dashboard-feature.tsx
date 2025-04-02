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
    "yZYEPwFh7TLD3ciHUcWjCGqC1qtCg1WjvHo3HarGbL4RSLSg9kMJyeFiY9vfCuFtGEL4ix6Ff2T32uc94DLLo5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVTEzVVzmD4FxVKDGPVwp1ffi5c38fzdLHpsq7kPJsbgYLNDVRogegrjdZ2CyUNwhu1UfKQbxsgqUDqPAcHDwKe",
  "key1": "4Rp6acDq8eCTVzzYj68ACvt9Moj2E1dRH1YPawGegJ8WTbd6wdKqVQWA7gDDPrRsqP5Bc7b1ionKy1bh6LHTUZ26",
  "key2": "dPrBS5LcyKj7nKSwxECGH4aNBYLNVQWAd2T1UeWWPebKsvvrQwsyx4u21d7Qh6GfDXSH2rtsb9zNX5DapzUnvAU",
  "key3": "396DsuexmfuobdCTjiVZan3LZUgKgcv55KsNUX8FRebx9N3A95R4TucdNNYsmwxv4Znxtt56Hu34cjUmnZ6s8NpE",
  "key4": "hf9EW1f5sKKWuS3yxDAZsdBVR4Tzxw8hGEjHyeBJ36cC8iTHcBCXJdStwSGejwQAr5hSvPizu3bhosBEVUUqcJS",
  "key5": "35jvkbRUggriweFsEhog9kRT9cxW6TXfAyVdYXUDZGM3FzC9YJC7STPGjTmtdFQREUAA5EKt66nWAkLQUr3qg9dX",
  "key6": "26HsMKLpJaLhbLfhQKeqes2eM9nqs6gZ8t4YtNzoib4VV8seysj58q7JLvjGsqFQHAcL3bzWBpYpzbNvBUS77JTG",
  "key7": "5n1YyxMPVbLxyK7xkbJT7pxr7uWhnJnw8vc4obourfdKBxad6AfNQjmrfxTG3pSFdYeZneT7Ss71kYv7pJVhydf8",
  "key8": "zWUjURAj9dZ1smbdUzrTQ4wgBdVa6Cymh5adKcWQVTyhgdxNQdq93nkz5vXUG5yd9Qqr4mp7QTFHbNYb5oGYqe5",
  "key9": "4vaoL1y9Cij5BpRgfzMa1udAzaMPZd6WDG63Wq9E2XyM7mhptmojE1zfCdLAfrVpbzyFsHRYkscQTR8csjU8m7D8",
  "key10": "2vH5jGh8hwehxqYz2yj4bfGMmir4fZeVAKkApFLTT3bFWurzmNzdQgxrSvv51tNF3ZsT2Jmwr91H5nKeJA3gqLzE",
  "key11": "55rqVMGFc6iW8rvqb44vRuaWew1y9tqfxAHARgREBSUPoC9YrPDJWxRUXHmi3JUJU73xDGMCNS5er2dVihtDKJL9",
  "key12": "2GJBKXikdLgzg5iBDVbaZ6nCs9uEpQR8PdiNTLqZgGk8cet3WH1DBp3uzJZQFZq3hwAQ3mcjJdGQkjvufCrPdUDE",
  "key13": "ZUa5XhjhHGc3AXNBEVgjE5fsd2EqyvZJ7V4yEFhfz7ycHL8jpj8JDVxfbm5XxVzmMuSesauTwYntXdejyLq8Jok",
  "key14": "57yfJoZmm6hVSDDifMiQppxCpHchkCQR9BEkopYAvfnobd55WpcTVQxm6FipBGYzRi7D7P9oQoU1NiTRbGngfmSo",
  "key15": "4GvHM8Sgm5CCpDutcwGJudJ4izks8zFGsKT9sP3UV2CxVsp9TsZynxYLZLshbyzjptRoczA2cv9EZyZfusodGxMB",
  "key16": "H5BcsiXyEV3BcQ64goFcJ4zwdpDWM7TBqRbba5aiVtjqY7RSXpctE3BhWWoNuDGKLpCeytR2hfXe4HkB2VNnXb1",
  "key17": "7NRa9cFa3RjF26zTFRN8eyPaLRdM2JZyJfAsWPHhqDVVM4ktghsRC4c1rQC3uvh53xAiJy397mcX5rDUe7Pt9Qt",
  "key18": "2g5hQ7UkAGjD9ab6Fs8MzAiukVeeo4rewmamHnrKhiRLSZyGNwq9YCiq1joZkvh1eYSBVpdkX1MHuz6r9CusK1Bi",
  "key19": "B6KVBTvgiL7DwrDevBUBk5r45Acbg3eCbtpX2FbEWhmqBdRvDc8mkxKGJ1dSqt67uEbjdHsdYCHMNwrZnUg6LTp",
  "key20": "r91TVas9exvbf5pdSibDmDKbZtn35fKt3G3LdFRw4dBnHy5iM7wYKjvvr88YVixBJgp3LukkF4kcm5oQbNd3jwf",
  "key21": "4vSEPHm5gPkTECaGKZ2D6xszS4JC5qCMr3xbXmYJ1SHmMQcTU63f3uzrg36aoLq9AEZUeDGNDngmANxdaokfotrp",
  "key22": "65ECdLVKCUNRojAbWXnoFZajtokECkLp42gGT6gfiGrB1Vxpse85i2rdGHU9TQy7QTSHENPsLFmyQnyz3TfFTcCw",
  "key23": "4Mw9eMst5rAqK19REiUMBkEwqeVUiuBgsxbJepgC3SVCzLrguYdE1ns3Qsn6eWYXbjm7zEbnqgrUPxgt3oYBEGrq",
  "key24": "2ZoieFxz1LbtB3ko9uH5f9tpedA1wDCJFpmWvQ899Dv6SuTXTPpBxrMGNGj2WHz9gW8FmE97LD1zGUn4DrU7Czjb",
  "key25": "521TXHBYifQhCt2eGNL5Xg7WVyLN5YffLWppoaxWVHTvPNkwaXk84rjuKC9VHmyiWzth8FchSGPRC2XN7JmM3SQc",
  "key26": "1XhoZf9ixdEojjp56W34eZjoN9mkBCXRTTsiDRMr4eemkTdmmRbXXhajL7PZWbx3Y3W3KrAG4RWxez6FTgXeLbM",
  "key27": "4MGG2sPJWwYyPcVhDdGW82uAfCM1Hj4Rp7DpTd1nVJTZZ1QxWDXtSFNw2zFAsjMZ38c4kDet9oZoXZFg9VSTV7Cj",
  "key28": "5w2sVRRWz6kLfNLeLYbFaoqUbZDuJieV6LfXejhZAFMYrZ6cagbxYPXYm3JzZaXNJS7F1pYxYUR2j5UfARK8Tfmz",
  "key29": "3MwoQzT8pj5h4rdAGSd3bKRV791LnLpMnkUSjGRbca28cShC8pHviM6Fks8nBZdWsbePaREqQ1jVj2gAZQMMKt2Q",
  "key30": "2e9NTjB5ZzJKy3sAjvpE9MKuxJqzfuM4cnQxANzj351bZsiF8LZyAxBgiw8Hk3a4B7zXPQ192KKyciUwurfjc3A9",
  "key31": "4YFzk85BFeD4LBUWhkGjYTmskRPhAGA2YqvbazKNQ5a6hkcVDMziJXJupXSHP7ikL7YJ4dT8jExD5qWud1f6ye6Z",
  "key32": "3W6GqkYiUhXRGsC62L81UY6tbWJw75GSBDfdm79iFcg4NTpnfTsQw1ZE5y92xTubVKvGhHQxCk3rWHP6X9RQM8yY"
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
