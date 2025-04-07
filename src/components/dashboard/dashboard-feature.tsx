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
    "3kDifzz2ThRZM9nmK6uq5YVSyEJ639WucuL2eKhxGwREtycYspyTpvoZxrxRXGQF6GbyuNEW3EFBPtEZdKyiVpsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LBjVWgcLJ5uBrP49yFcVywiL4ddv5f9iumhKvYJK8Y2ub1w5G4pUYUMCCKGwUqVURPM7BrPjWUsxXTCtqXFya1",
  "key1": "5JuLdF44sNHHycwMWT6EQkprrxLZREWSrxF87ECmjU2NREZiDxrVdXetzPqUG72X9a2nJC4hJncEBJQu2X1Lp9qJ",
  "key2": "nBrWHujAVAM3EUMq7qPbZBkeu7RdvreKJNnppuXoDzfto37ZwAPXii8dtAWq3G3kqaoVkFHjAKVFocMDEEDcmRE",
  "key3": "3eAvgBFu8jGxWqnZFicCEQnTKFnGM2pXi51z6gvRE8h2LrwuXWygwWKFnDNPeXCHsQpwcnqGYzp5Kjh1q4icGnWF",
  "key4": "4yVUf5fxSzoUTWYFZ4jFvWC6TUosenaaH6GzXyngSAEGKNQczqnHVkiXYJYrDax8u6f6bZaJsAbPVB6dfCG91gDj",
  "key5": "5Cfdpj6uvSm2eFvZi1TS5KhTLD28UqRvt1agRHWxv7aFdpbFCZgZ6B34QvNBK4JEzZciQRtj9uq8Zs3PxiCYxNdU",
  "key6": "432we4fDgRRZR6YRScTGMZdP6c5NJ57zZ7ViXchYJwFTzoFTwG2jQwCUCtLeEz7Y5M9Y3ceZwn2uZKmaJXGjrFas",
  "key7": "5tPs7y3tbXhJ2RXpAFZP1cLMkV9eFEqGQiGsVCEn578DkFGmGjCfqz5QXAV7qvwszpuvSrECAVvZX9efRUjNXDfv",
  "key8": "34MCpzcWRGuwyQGEFUq3sNX5FRK2UXcMrMisNFnXqTjmEmxRKFoC5gvUvxfMh1NNVmKxPUPsncvszVdfJBt8yhUh",
  "key9": "E5C3JX6nZfPnMFMkpLtH1wxMv2kj7e4U5hBdPYxiuQfw2gTx4y1moAvLbFiCff32hdKcoiA7VC1B6xQf5VrzMjb",
  "key10": "3EM7UcDqoUUBhaZuZgr9xwExb2WPaHzToyrGijhrYghWrwZTxzeGKyJV4kW2DGPDgYathujwMcVmyNPTxX3vEbUn",
  "key11": "2LgisECTx6ujqvE8PRpkBX7avbYSCDudnSou1WMuNa6V2QFozHFkKhNJnVKzULmva9dL847GRgx697U1wwJK2KEw",
  "key12": "5Yt1wmgA7cgZrPdRYvwsZPqjqNSWvTwmcRMeQueGY8PkaA3ofM8Sxq3q3KpZZdo2bLCRvW78pDKmMuxzs1R8sy1t",
  "key13": "35eVn1RQc3cKzpGHZZ83QB3a8FqD5A9rogKifDi3dpSSzHLDfNiZkSma37QkFiUqNixK2kbX2grkU3yHKvjBRSbe",
  "key14": "2HpvkVMZ7wS7pZS1imAxDTLxpyVrkF3YVU4ob9hbSFDdpbfwcHcLxWsnH6ysyDYSaEfnRCKC8cQ94m2kappvoEUd",
  "key15": "W22XsiSrsUQXjrU6bsVGT67UTeWHRvcN5Z9TnypecmzFmkfHdGKzUJUdhtz9DwyAaDbB4FFzo3G6ioKSEpVbWXC",
  "key16": "TaEimtS4TS3QeqC2YrWr5AJd4aMWbwtobxuv9fmCYKf6ek1gE4cL8sToVW19xp8p6mwkrsTxwfofX3xengVG2Av",
  "key17": "4vKQZVCyfDc2GDq5VF6nE7kb26jZNxXGkATu66YhpNaNtfF7Wj4wH9NxEe16iAyH4ENoPPwZguykZFABfYHTuwzq",
  "key18": "2sKucfcrDktqHq1USkmEPRV4W2hFY3KdgwNYMiiBZZNWHxDmnDTeHbfaSbDHXbMnto1SRFszSoSNdNHGxPwhLg31",
  "key19": "64VJriojqfEBZuS72JQCgVMxWjaXFLZuamSN1JGFGzq81ujUfA4atqhBkWrkUtSNx1C4nhoAMrogQ6bvMmqt297q",
  "key20": "5mroNZuekDnxKnxH7xzei9SoXXpdDoxRCQ28mtMeB1GAq3Ds7jyRJsodHrTUE8uzzmP3X13Q6ax6oX8WWHE9FTyh",
  "key21": "1VF5uo3omySuccqRnxRnR1P6t7APjCG3jLJ9mxgWXnYWC4KhJvtNHozySTc6VJsNLmLDMjkXNV6UcTXQMire6Qe",
  "key22": "5vbzJ4Fu9AEDBBJdBBwGcNv8X8auixZamM6zPrZXJM4vrQ2u9eje5KYaqGsTK3nGYWzM37tz2boKqXyhiZ9obDgq",
  "key23": "2Str3jUaChjYgDwQDHRrrbanPrandyNiUTrzSYT5vy5v3LyrkvLpDG9RoRMKCcEd4yjS3eXznQzYM4e7wmb9moDd",
  "key24": "4J1JTMJ8tu7th7EoFS9ZaPHTv9ttmHv29LbNqYRVisqh96YmzkovsbeeY4njrpXZbdYXQwRdZrJbDnvQ5Y1d9qV8",
  "key25": "5oDcnfQsPvehx3vkRVSySXvo2wL4AHhVeaRbskmT4HFtUSLYcNsVw22tWjm2DHEBdzN4R7zSda5xkNb3vcYn5V5q",
  "key26": "4kAhfDSd23BKF4zCoThyPdHJnq9pXrzJwu5GHZXETobSxCLBTkLziqPVeEpyJCaaBPKEj2pPYWB8cX3JG4XTgTwU",
  "key27": "4TiNftU9YaR2EKRwMrRveRSbhbMiB7v57fVr2QsA7TH9c5Qt35sAk3LFSukpkxCx1UNyf4gkShz3nwXAeLwXDQ9m",
  "key28": "4LL4SgYxRgCsaW2et72keMwhKz27VZMUZ7CtUDtCizuFdbrTEuaoedoB4bo2FJqFfEyC6Me6ocZwp6KZLXBeBQ54",
  "key29": "4XYYMC28BidKdT4Y9qmXw9gPr58TjfJ55VT8doaV9QBfqiDiGDc1xMwcgpDVK62o7wpypxFEsQdPgG5wsXBk3ZkV",
  "key30": "4A7Stgua8pE2oBYdhKG9dEmV7z7U1zG8SLrSiERovye3dGdzeoCrrrodaEyM1wWLaBeVJsFjFSd3fdGrYYvU3Exg",
  "key31": "8BMtGva5PiFbGsy3e8Rsg1a9awq4W9YkcB9Vpc9ZUt6cCYL7hbkV1wRdHVP8kagmhtvEUwVe7iA2JubTSXvGqvA",
  "key32": "2D52ZmRYBHRzPPAp39PKdRNwFAoYZTSmgG5ct8ygGDJKGHBDGT5XcBWnzc1B73Fa1ny7335Eahkpa46ouPG2Yumv",
  "key33": "271kPPLErYxZr4JfkjAQTBBfg4zeeMcbWwtT5o7Y6XdS85JqjvWiQ6M428Fwbqc5EBckvuo2xBKNmBhZuQ1fKecK",
  "key34": "4bcRsngRgmQPgqrWPio9EmrXytdhK4BwAhCJ1UeQNukwRC57XEzkz8DLPUs6zgv5Qex5KEMwE4GtZLCz5FhAgzfP",
  "key35": "gCf7C3XqP6UQ3h7cmAJzHkqeurZSzgNnfWZZjuRwtUvTbtViPhjdsbLLaqezZW4unNu7toizm89S3bWjXe33pjB",
  "key36": "58zhkndR5qvT9gMzh1TPLV7Zj8EUdX3gsd4sPu9YLXiQomxLfsfbM1ZYLcLd3L1oaC2fniF55E1N8cr5YwDZ6nHW",
  "key37": "3PDzFZ37oR5FxEAsDCXNn2EaVtQTAfEX9wupYJM7BY8EP6oidLou4WMAehN4hj6U7ufCdheoqhu1g2gqA2Cpvjd7",
  "key38": "uRfVtLep14QTXbzUBogkjdAjVcaQzoD3wF8JQ1TGx1ZWvpW7m7bywov5Xbiq7stR9pQiXeeJW6xz1MSoq52BHuB",
  "key39": "4vRSrRq8ReeYA7hJRL6GwdkgMv3CswPndnQdo1RQffxAjrQhGXwQCkg3H6uMkfWoNPYad4JH9rqkESneWV8fSSo1",
  "key40": "5vcStbPTZF8BqDzSy9t7jAiPzhJPSeygVBPTeF9SoZgeTjuX3dweZNjG8Cut84LYKztnCCpQjX7st4tYSNv6q48C"
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
