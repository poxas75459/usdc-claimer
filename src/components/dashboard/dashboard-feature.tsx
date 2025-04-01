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
    "tHLLxgxx2wf2om5NH9JzabKordy15p4GL4L2XywRMixiUV49jSNvbpijKrqSDJWYyiKDpkVD73PorWwqkX76BzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22qG9cxS9MjU4sRCK4QCYkAH7sFxj6dBXbD63WbqCiyWX9AuhqLDXzpfNE8UGDFrw2P8HBk78u1cCcqprjqoDuuL",
  "key1": "WF2rLiubaWtvX97CBJ5x6xoJTwZusqAvXnkocG7nUHTo8jxePY86T1vafVN9Anwgp57MYMKEAMw1cPPnZ3Mq6tn",
  "key2": "54DCZGXyMw9Ab4jRBJ86XUsyi663e2VvFRWutmsn7uP6XNWWZhzHmjkRdZghxGUbHHMzk5Kc7YHUxd552TiGh3zw",
  "key3": "4cADKt2pPngDu5Rt2h468ThHZu8kEVnz1jqqjHFEFufBTkB5nqAPLucDrU2NMsr5a5kTPM6WvG18FLVgJB1P7L6d",
  "key4": "33c8TRRknEJbCohQY9NwY6frD5ZeoXoGvm6qkxrPhiDj5JRa9jJauEyCnvckFMSTsH21Ax5rzMY45oCpKbSaxeZN",
  "key5": "66ie3rT685PAWxr2HB8M99RZM62CiFZEFde6qciMNzxYehMeiBJu1rne8VXysABtMPeXdQBhRpYp1bWufCP7UUdy",
  "key6": "D2TFaA6JBm7pJGuqbGu7hSRswNqWhz6Tbs2Bfwvc4QDp993UabELrnRHVH3QSzKjiYboB7hMJqXrwB61JEVCRNq",
  "key7": "3R9jy1ir4cBdSq9r6hZ9q8Uc7wmR33Yk3RNNzkGsJW9B5TBUBHyehDncNJovP126rwaCRxjNtBH4NFspjmF8NwRW",
  "key8": "3jCv2ev9HsyxpxjRhw4Amb1swRs4T3iUm4sPSLoh2ggDMso9bqc4pUahotK2DKLgtXoXFonC58fSJWkyjSwQ56t1",
  "key9": "26pWWuJa8udZafPBm2k8xexWXf6Qyua9X16dVVKPvJA9QFrXD4JLGNXDs7p1LQco9ptgSuKuTTWuMYFH811GQvPz",
  "key10": "5NUWA6G5sU7Yp2vXPdrHSUYLjjYVAB8GPEzWXTPd8qykhe7nXRGFXSPmN46NHeGcHKtF7UQBSSkehBvfZPwa8xf9",
  "key11": "4YTEMwXe8aviAiMDVRbPgLQJMgHAuwonRwPpvQKkXJbj2SzJFDkLE1aeWiEn6TCDfpxbxd2gBkGWogivzeQQu4qo",
  "key12": "5tmK5FisFrqtF8N5rWeuHufSJcDYQG5vXC2yfuP3z1nfwEckoSFTSSvd5fdNb4CGZfayC82Z9TtPwoYyit4XxJdJ",
  "key13": "gsVgy6PqbiwdVowhRsfv2tamorK4uRnBnvLGjv4N4ovhA2VxvTsfSYxv2znsMa5XH669UE1ndvoFXLFJmWogYaw",
  "key14": "5FT6EJxD5LtnmL7nzPowbdkkhFgmZeYnyMWcMTdcYhcn53L79c8oWwJTVmqJ9rUWgQwt1H5GqAWaeENUyTZuK1Qt",
  "key15": "v5tFktZWRx48Xt8TWdmL9DLTz2MTNntaDPHrMQXWbbsmXemHaGfYCj4CsbTbb6XPATEQQUedR8bV8zXMkexof5J",
  "key16": "4A4EdeT41rnpYvsaXKdZzpkkiRKe1tZaueXWf8ngMQrNvk9b57LJXDo8UHjww692viZBw6bVb25H6yvmngBxSHfa",
  "key17": "5fHVxoVUNiZrs5xxy6cAsbpv7MLfKrWnDnh3ebSr8o4EGPRxb6bhXDgzHCMPfVkHjKXoARqkYkk6e4ayMjr7HrWP",
  "key18": "2Q4THii9HzDAxCz12D6X1NC5DAZhS1AYYrzf95igq2YRWB3b7THyQqje4QTLtC93gTpUSwVAb35G6ChDqvATVqtM",
  "key19": "Hd4d2cGJh8v7RfDDXwYEggNs6oaVjxP4rrEq8QSwdfX9SXvx6aUzxp5rpHf712LG6P2T8hU192DEYDy8SxswdyF",
  "key20": "3bUQaHP8uhvjEoZMAXDWWVDpaxLQU6rR7xoXHhNfjvXf2ToC6tuoGA74gbG2g1X54CzwTVAYCzwhk56BqPyrxRFC",
  "key21": "3k82se5HEJH4DWeWBkFMN1hNPZLMFtyUCDwUz57dXzkLssiF7QeKrVFqCzpu4iDLYgba9bVgDSKwBhNcz986XbqD",
  "key22": "61c2B3JTvbbAESDL3AMhikUK9hx4ANzfJjxAS869wzNC8EotL4xPhhLvrwbPZZ2syYNa8zpZqSydj3xhJJhJ6KiV",
  "key23": "3rHG9oMzHq6dh2F5RYXyuyYkDKTgAH5BCdNDZmdQhWFCa9TZaGfvW2T1RCZsu4REqsd4gSUBe3YPV3kj3Kgi3ZeY",
  "key24": "hedAgGT6CEE7w7xA8cdvCuEqsAmJ843fHD3v5dAGtLjVKCexQntAyU6eE2BNENz679NektUpAGGKsvLvENpCtG4",
  "key25": "51huuv2DhPfgMwFsLiBtaLV7H611fDmZdekLi2r2mksbcyL4ZWynXaPLW8pw5dL3RKgzmXxkaMywjrDbZwvx8Dzr",
  "key26": "5EWLDtVHBPLn7H3bEcvTEUR9LHNd4K6gcQq5dWBEcU3yNM8T9zg9HH9htEjBWZb8xr5Ep2xxicaZ8uZiLeMU8zQV",
  "key27": "2X6eseRQjs7CkEwGmLQ6R5jairQvs7bxsXPSFCsvxzf1z8cSyUMXGYgQKCsJQ5m6nXMP1Sk5pjuzrVKcA9gKfv15",
  "key28": "2xkpsYyB9uMwjj9ukFnG1psMBTv5aMGXiakUVpCamqoZmfk3gCcNz6bjNPmXbKvMC46sZXw8EPq5X6Fm94o4etPQ",
  "key29": "2cMij9B93FbAdGUMYv7KCEFMusReeVfTgsEtaLAc4ELXqBGqs8TMzJH92Qh13u9KcMFPs2iby31hCAjPHEqptPUN",
  "key30": "56Rg2ZwFuzLDk2us8J5M4jow1arh8AU6vpFvfXRN8xmFZX7JBDeWs94gESC4zRyQQGP96XwzZ9Y9ntQc98JHrhxE",
  "key31": "3VMKvipQ1KxL95q8ojsGRwDzE3V3ks1PfgfjQr8NZ2khFuChpH9mbQQ7MecVG3wYoGgU3gCruUdusrtDLhjmNyNN",
  "key32": "vdoko7AF4MakYPiEmTuxJRABTvBQ2MYTAbszXwmMyMGfM8458zM9UZGaj113ohKWJHMaXQA5LGL4FHtZHiG5sKk",
  "key33": "2PdZ86bPRJq7CYer2BNRxRG4xvXteAfWrgeMiD9c6jiPSVUczD1pEGn5GFuWysdNbMwkUMkQT3LaSJ34UeuEeHGn",
  "key34": "4xdv7sxHEiJf2YkcBmDhVx7BrEUJZJt7LJkCHkNXsGERX3kb715w5G6Wyr4xGPj1KQGN22kvARiMimZD5VyPXshY",
  "key35": "4iSbnDCQGSxP98mbg7KWxDzZvFE77QZ61DoUJnFzocKcJMpYv1mxtKkhqz7BMkZjLxoDUTKqBsEwXsmoFjMLmn6w",
  "key36": "516paeCJcUmQWdjAD56N22w8mUrJoSgNWrrddjpUKtS1ACNEe4wBoExjPo8Rqk9WJd6rnzCtkdC5xrv2ozRny8kP",
  "key37": "2Aess89b2iWse1QCoV5a8EfEkrkL8YmNdMEGBedHghd8XuqVEFxd8bqyNchXnagg4G4s4xHhRxEAkQi8waVnbxSD",
  "key38": "4sjQrnB7GNRRpSrwKM1VvvZWposQR1aJQ7qnHUXbdNGULxJawDbhQzypyokqkApEU44E8HNBNRLWDHZ9mKCoqASo",
  "key39": "3siXD7RWRwPj2BKwoSzgzqfdamtfLT9SXfwWDv7eab5AzBNw9ujWdyrugdkV5cQJdWCYttHQuUqSuFyizL3x7dca"
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
