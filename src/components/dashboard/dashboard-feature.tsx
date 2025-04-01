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
    "294jdtvCNShV9t4PPyKQSNtfpPzecv7MTooHLegcMiRrZCi1YRYYKCqtZNKs8EQm3cUdWRZwVaknimmP4PtgP3oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BnEjULDKTjUCnRwznYoknWfaMAovGj6REEGEj6ay3YYKjmBbSXLhy2vEk9kbqPszbK1iQ5ZoDU1vswuvYEdVwQ",
  "key1": "2kxB2an38bx8YYkRyC2NtJhmteRujpJ8JsThWTtjUFh2hYCy2PR15rK34Qq8L2dZKM4UrpcyxnYEarJKPpEumC5Y",
  "key2": "63D5Yk8jBsjEP3G2kCBihJXoZBkcrF34hkN2f2KvD9g1o9AGBgj4SDPASddUwVNd7WWzENYgxhjMcUAKKmHZJR4t",
  "key3": "HxUqtSTZykKbAF9M1UDqckGZwi8KN8LkADhuZBKNy6pmBToXQBU9W9aZ8pNj4cgAAVKyvKe4JLqUNAfhRYuBDLv",
  "key4": "4dP8bQvxMhU7c8mRnP4HY3xdJTevb89jo44HWz48q5jgxZtUdEBpg3BLsYNhixcs4c3xGh6oZy2G25foSCh3QQL2",
  "key5": "3ciKUTj9N4iC2UW9SgPDmiLZ42BUSGBe3oiPybac6FJEqrXix72qg5Ljfa3NX1Gu3FR3CouAZxwEmHPmod9JB6gC",
  "key6": "51FxjcCGUL2o7EavuNUdEsWu2iC1hA6tezBiewccBjsqjysXD3LwjdsKFTwZZEjtx2rs2ip957vpqAEWJGfqZuLR",
  "key7": "66Yjpr5tsmjY1TAPr5e9HRriDXeTrkitwEGvdENEWqN8V67sFimjmUDqpqsG2bDDF8cLaE7nSpJ8YTJWrURhZ8ba",
  "key8": "SymoZTSGtw2P5sePE3cC2zf8dc8HAiR5BLfhSUUbviSSP6iRYrdP86Nzwm69WwWghLQPBb7axPSLVLVNw9ucCQK",
  "key9": "29qKCwusxxrYjjUd5CpHEXDmji2TC31VimVjuABaoHac9a9Kx9AZFDk5F58nd9eYX3Wzh8AMHGzod9w8N9bPaFMq",
  "key10": "ZGdPp7nCVHZSxkNVyjfdrf4yzEB6yHSqyrNb8h2RDxSuc8kdMCPVneNtXPVFm4jBAmaf9ijnHvhB2tEzfT24uMz",
  "key11": "qpzv31WYo9BDLbbQHSSWZo6W5KQVXwyrtvyR5p3x9X3NXqqDrWfNgEdCYsWfZLRTp4jhQRn5TqYntP28FumQNfV",
  "key12": "2sRUkyN1Nbw5sheJ854rLJFoAbXnZDX7xqZQkTm77gttMhyMpnw8jvnVjqwZo21QqZBBNxXDU1tcP8mzPfGTaDTd",
  "key13": "P2hdDVxX5BGCiKo3trWG9XgxdanscsVYZG9RJ55KMEaFa945ZxtEv5NSfq6p8XnWD2BHrDERjfPfiDsnNdozyuK",
  "key14": "4kko7tNT6YT38c1z8i1ajzYztdmzBqMsvE37RFDMyEpeiAbVuyzLQN5aPrPVMWrSBeqHFvyTQpr2SBzaz7o88e9T",
  "key15": "Gmf2yELdCrRyRF4tv4DPaff7XXY2dEQzerbiR9N1r2acCZjN5MqbEkpHMiz2bSuzP9Umk47n9sdKtdJVYDodK74",
  "key16": "38KVVJpLJvCYU5M4DaquB3q31GFBiMBTFESy2FjEYZoUfNthtFbwKQ8LYzf1irQYKy6DJ2TLmef76gqMe1NmzYJE",
  "key17": "neMyYUsr1ahmZHApqMq6mAjRJw3CTBiJgthMsC6DzGWRMh6nRgAjbZp1AXqFPeFEWj8M71MMpK6pstYRQ8b9zKR",
  "key18": "aaDWLLMrY4pfugfmmohq6iuoYY9rqQNpHFwpFsVrV1qN6EmX1rCUUo2zw34sJHRbUC6uBduL6j7xHbBNNNLLbNG",
  "key19": "B5AH96SZyrDb8WdofzWAkpdHdK5USPYPVMg3eEQfWJVyHgdUaEMCgrkFibYssVpEkPXXfZfqs7ifAZXh7XQ6wQU",
  "key20": "3Yb9AyxxnctQkvMEZ3ZhGec9GqGAFPNULYiiURhDM1A4XAHeA5jUv6y3zL64V4CqJRqk1WWxe8RLT6EoxQ4gQoxR",
  "key21": "a3YLCy9RfcgU3m8gwgCYM5ZoHjggCAUwA6EGqXsTLu5w4fWBDr9KYBQzSC7S8Gbg2rjiSLXnMUJcCKah9YVgVRt",
  "key22": "2DYf3JDoW99cdeLg9cGX7mB59vpMkwKrzXg56UAwHhXLNZNgEJAkaoDpYZo2M5hoY6wGLXWCjDhihgksLyb47X7J",
  "key23": "5KAAjUmDqk8WeL2JFLQUebS4K9NJQPuvCviH1e9YuQFy62M8SERRW2CvkZXd7uVpuGgfitTPWshhEZp894x5sBJz",
  "key24": "5xLtYZ4SpJjEunjMu5Q9U7EEWyeRj3sC2jStLbFuXct5dWFuQ2NyCydhqSG5ywhxtS7WRx71Amka5Sovro1gKNWG",
  "key25": "3EayWmLrFm4oFCYM2VyXTUmagD2tK5ytDDeSkusPMG7zvDu1oH4t6uSVNgzbRPcKuzz5HRfCkjmd2xNGLRNhxYiF",
  "key26": "5Etvz8q93c92gzqqtWXqnn8kqnfJeoJZ3hRNFR9NaGFzu2qYo67PoMK4Bf1JR6nj25zDNHUDKUgYK2VGEvrtvw1Z",
  "key27": "4zXAkYBpLToi3ms4rjPzCMQgmwQmBpn8dUauYz2aqFLmXZMHJctxZvaAqk8yeYvyNw5XW18Kk7M9jMUBVkEV1P2B",
  "key28": "4b4SmGPWw9U4h6eUpAswhcuyTqorwCXe9V2bybEbHDbSyDibNH4fpo2mGtEbYeW3jPKNESjbict1gZ9wNJWqZv86",
  "key29": "4pVaDSAyoSTMhzxzKU1DPHJqNG2GKJwRe8YXBmLq9wtUQ5P2d2uYPDN85N9AjDBNv84cuL8R8NPQrsDUkdqvBamJ",
  "key30": "3m8TsmTYifWKHP36t9dBLvaQ7jfrqr9vJ9xb8irBqvRgx8HEJbAqCeYqP2FQidRoVb8MbPeagnFKthnviiGCeowR",
  "key31": "3f4uymeXsBZdvPRh3it77w71cFAWG4zqWT9WaWATZ84iusmaMSUpzpMwBn8wLk25PdShp4Re3wUYQbKjSk1F1FSH",
  "key32": "533UWMvSGrHt7kafepyhn5rVKqqWqH9RtigVQL2CugLrkoqkDfECacanNELBMAfNGmTNHv1fEZxHdJ5ZygY1jjGQ",
  "key33": "3E8nUf33wd4u3RtFavHhZvSv6o5NLmgnRdPLaFh9Y8NzpviJRv28Bzdo1WNP8bGKdR1bCiRFh3wubyAnuGQdRyXK",
  "key34": "5E1JkK7bxRXFvE1TMfZ4mY88u1UuPs6je7bXokKiztAXSARb6HuQ2U6VcJ5ER9u2VfeqLszcyurGQqM61BszZcEa",
  "key35": "QxvzR6k4xj3kbvxkMrqaWjLxyEShXQHwqv4Z4DxWiMiE5uoJcZGwrMrtVEFJVihQH2jMwuP9Z1SumwDZTuqmbVa",
  "key36": "4YQTSo1G3fofEjWrPk2inyb9dCxK7X1PcQWoVpqBpbh3MFkw6i1JFz36sgt6cr7xiQgYNGQbJfi9qRvYPBPR2vWV",
  "key37": "5Xi9p1zyuvqPPspuBb1EkMEfXmNwPBF7nU5rJKDaamvEsZCDjFhHtASvUeMr3KSvxmvZErz5dgetnXgvHQ7wPZz6",
  "key38": "2xGzPT2AMcJkeJggFPPz4e49hffp85MveVgP9xDb4FMT3ehgX8mU8j8bgpYSqaYiiqUCmZDiqNbfXaUmintnvHwy",
  "key39": "TBZzXr4KUZ18qbxkeerzDqt4aLGF7WcjCUFZmJSTkDvQTuGZCCfyG8q5M4T95gLmPJwMxY3pLy2pNXxdnjq8BxL",
  "key40": "5qCrdDnku1bYJAq6PvaJpSEGyY5ZAxzDG7oPzw8N43M4tVmuWUN1Fb1pqnHZc3GvZ6TKg1j5FihWXVphbuiC5Wd5",
  "key41": "ctin1E8wV3rue9q58si2RLgbyyMc6cvEESVobVaLenEvgJZ3ppXmcvqAf3eDp3LM4UoeVPHiyaFVVWZXNWVQ5xS",
  "key42": "4qkiMjxkhfMZmic3h4Md6Z8n5hhVbGnYAoYR2Sqh9xLkYKDCvmM43haZgB9LoRAr3ark5aJwvZxRriBXZYqfuPi1",
  "key43": "22MTPPyyzv1FBARYb5toXEzw5QxERFrnpW8F5xL4x83BUouAfaUaS4z18htGewkKZ2qrytshTqdZSFMerMzC3W2h"
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
