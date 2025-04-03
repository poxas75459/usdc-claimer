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
    "534RiqXd7LvHd4Y79T8WN6npviEoRiKAGPPjTygcNkEFgHQL1GAwGqSxHET9yrTkPkgafGhRdEq3tipTAz1c3ceV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCFPwqxNcmYPCWf635We8bTw7MgVWVbT9YnhbXkXK57jDFazunFSkGPCW5vVWt7gnp1T2kfP3UBQuj3SNX2BpCJ",
  "key1": "3BaV8XupVdesGn1LsmTQApMcNALvjKx7CmvhjrjpbHki5k57YVJADf2KaG3njhtcDzNwR9y4KtS8Lkyk8nj1biMK",
  "key2": "6327pP8qoXKQaRGvegDnbLPEyCx9xNPNnFGbeUgujNMDEV85R69qt8sBnziq13RKchLoj26BG5EyiKupMJgzsedd",
  "key3": "5BL6kVFSCMnEhrnNsNinoQeWTNhvSwaYL1Uhopvn9Md2bSQtb8285EyYrc3XQfBU7PwwgCvBWaeDwnAbE1oA3xu",
  "key4": "4ccwPq8PYmMuvQMubPzJtz8NzbRKnoV8NfTJ6MqC4pHo4CEn1mZ8Y7qST5T3DsjvqRpFRGYYqMWNhRzqzqDb1b2h",
  "key5": "iZhFqYvutEqa7sQv7p82uXibX1ay8XUVwZCZNsFPyvQZa9x9JAX34sv8wwxGiwCdpu6y7fnRAimzMh8VuS23zge",
  "key6": "2LEJrX3fGkm5k3FxtRui3LMFtZ1k3c6nGMAPVWSwvoZhjkCau4iiqp67WnxhZnpkCNeDDd2ShuoZm2Vpawds3FeX",
  "key7": "4rjUmERTbXPiQ3a8jNgoboNro2nzJC7PH8PmEgoMfrS8nVcvte7FdKTCKPv2VR9J8nC8qrPKryHSvSitDJ124pxr",
  "key8": "4bkdsm4B8rFRoNi8MWEM9Pg3RdCCa3eXuXXonDvGLswKZuJtFYHVsUM9ToJjamH36wUrR6o2fD9vo4zTEYMVx6MP",
  "key9": "jP7uK5zXHYxXvxSRQnEQg54onkNBcEEvdbKKEYC9eoZS3gzRqHNfBNReUV4eoW2gF2FUdwW25cgKxY16qB8KqaX",
  "key10": "4b2r96j6fU54MXA1j9mF2pwLoTiGjesuf3VJGavoYprt9u3d2gpTEFGdZp9SGejSzuHRoqEzFZL6XupG3aWhLQUn",
  "key11": "3J9jRajLV4NeKc4qrSGFPcQNWAk4x8ABfxKPYZYB8N3r33ZmfFGqDLX14xoZRuRJBoVfiFwRjk65Sobqtb2SF2o7",
  "key12": "5FLziZ1VjWPUYVd6nGGsXq3eYKHiCHaSZGzQwGNfetJGXZhBj4mn57wQ9JNS1qRUrqUN63docxoAVSEyfSwRAej",
  "key13": "5JAtCAhDyp8tLaH47wnDA7FDX1dYv3pUPKkMW6ukjAmVbTQDW43vX1PeASEws1LS8ZCaT7Xxb9paQsaA9jBTB1gV",
  "key14": "3BvyJ3KyGHxKjyWXbbCSMMZqnsTYRG7aiPhd9TokK1jC73wNYVPrpBiYUZe68fbgi7pGyN8abQUBFn3sJ1rBSvsH",
  "key15": "4mX2sUBPvzfo5mGutDoM9r1r3Y9FoAVJthzYdzQziJPT1eRA3P2jHPFD5bsXQ9QsFs6L3LjfJFtk1aMky6eX4W16",
  "key16": "4eCNFAvhGvS3f6mBWTWNKbEdFqtiGnwn6EQqfsWdAsRmys3Frw2DvRuRrvCYbg9fB4pbBYX2MCLB6dAfUg7LPosf",
  "key17": "3D2aqExC87PqCV5CfAQ8kn24auymokyaux2didsR9kuYQuxwxXFRZ5SVFkSkKR2XrGUMDdosaJvkdsHNq42eP74Y",
  "key18": "4b9xXxPVNzS4JQrtotaWcFt8Fn73gFE2wLoMXzuhP22Dk6q9Tzyzv45ivSQ1XumBdUCmA6DuHoVuCTaWyX8V2pic",
  "key19": "2Q8P3Z9XBUEe2Tux7Hz3FmUQ8rUEw5BeonR7UjverTrjU4LNEyVyo5Ez2v4ChzLDwMpJM6Fp6mBpubkR3D36vadC",
  "key20": "5HHNbNRnm25g4dZw2969zkRJFWx8WCnRnzSrHA3puGRgg4FcUNNvAkj3LgPiBRwacLeEA3uBP1j85QfUG9JMMvTD",
  "key21": "5s4hGdk1vJ9AnbFWHQ7pUq8Em6hQM9Ds6q9cEPH417StiA4oc6ofwbjCT1o7SFLL9HVLf5RysokPFd8ALotF4Qy4",
  "key22": "5ozkpkF8gs2h2xnvctDFPA2AxcUwntC3WeEotoMUowM31jDU6qbWZTK8MJpuzVbrDVXuVedh4Nc7PLxiBwYgW5nX",
  "key23": "4CMgb7PPX1WtNovuaA4jJsAhfrJjTizrqf9XJF6WoA3Ni5pRzEMw3j6kM9yhp1Bf53gJ2oGJhykN6d9opdHXvsAd",
  "key24": "4p6fw3cpcAZ7fF4uZmtJzHaPZN5CdN2HzupbiaR1hUVorant2pXkLXxGFSqZiHYg1eGUCrAwxf6trFgrzoZpLXQm",
  "key25": "4ttaq5rtd9i7bDhy9JVgvrYkETdV7sdp4pnqV81Lfaj1tV7bSFs5TL9eEAEBTm1T3u5L3CTTP7GMVzKPRvrioJkJ",
  "key26": "4yTUgYRvR27u7e9c7d5U2DGCiuGq1qmdgVxumMBW1tWujDMs13cshG4nUbh6FMbqTJRWqSCL53hBmcu3nnwtuLqf",
  "key27": "3rq7XSnTTRf2VHtbUY5aLw7mQqDXzWeuGFXcxgQWyPdqg8B26Kt6RivuYEYmwrt485gKusN6WDW2gqNxPDQEEyan",
  "key28": "2d8drTYjTn1vBB3Nbazm8kzasH4WmnripNMgkvnoKemP7cSCXmixXzHpjrns876Ue4zg8qrKc9fBZjHudkK2VnV6",
  "key29": "5iN5h2HyL3taESYh3DDXEKj7xZivnZreEYZhbv6KifZK6BJ4op5tjXZWtW3rQ95n7XoiHLUsb31aCpxuXWDsPkX8",
  "key30": "5c7CeLALmWMZwFoiS4W3NaCgrQoeuSYDHabm2xLNz1h7vwNNcyUcnAnstnCiih9NwYfdakZyNR9J5AC1fqyJmGJP",
  "key31": "31WwWMBSpWVubpssjKKoYUErxgcG4rTnbxfrFrX21jkZbSNifhR6wTjGG26MPLnw3vbNhFCCm9C4yffKALhphiZE",
  "key32": "3zLwdWKo4rj6xAGmu8r764p6p2JTWFatbVGGVQbH9gkFxWVsE58rR9Fz7qMncmKBdNTCih2pDgSg2kgoRRUkVGSY",
  "key33": "gaRZwq2Qj8dWqCoN7ZL2xM7JEbEyMLkJKWsTHSQE2AzBGRXKSM4CEA3D2P4WXHFSrAUiKUBsJPPYaSTheGupTwT",
  "key34": "3aB4h2tY1qzax8ZWtD4ef261ohdr5euBghvdbjddkNCbeKrFWmuc1QqdnfQBbPkiYwqRzgp9P3UpkNHiLNgo1WFn",
  "key35": "mDQRT98pRshPUKqa5YUa8TgwyD72fgfqG7vb6gjmUKFDQMdhQ8vVxKvQ4WdMt7CE996jiWMAEfPkkarCF9rd7ds",
  "key36": "2e3MVRThiB6a7eqEe4HcEzByK7vc1wCgSiMrhC1LFo3BBJESfFY9qiwkRjiFvtiHGaU32hGkKnEwPc7i5SNQ7wqH",
  "key37": "4XYQCj164teL9Bob8TCyrvz8373oofUeJ9ciFf6zriYgbpoVrnBnwuVs9dR7367igT2TA9uqrT7cJzxYpSPYu73L",
  "key38": "5FgFtFRZ6835dydPiiBpwsXVNd4GRPAWP1BYbRkCDf2FDWxwY6c4qTNDhU7xFjaEpVq3ijqXVTSbQCQnQxb4FX2U",
  "key39": "2yezA2tZ5adQjEdSeT7yNvfyxADA7FUg8b7Z2MqVozCooRiqsCZQPCyT7Q4ne98mFJJTsZ1Mc2uqNdKR7uQu2Pys",
  "key40": "2Q35LjYo63AKmm6AqP8Mwt2B1FSy197ADjEtWGvP9AER8zeQWiNZM8kpPdkxBjL4GST8jhfjjRwNtZH8E2kyq5r5"
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
