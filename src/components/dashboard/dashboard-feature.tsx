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
    "3HuncZpX9J9iYe9DtzUwUuTNPmNavG4QMV2DvoJEbYGiiNXTB9JvbzFr5v4oAhcsHRyztUfKjC5X93gMcknupH55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXbezsdAsbbNUbDr3xfWkPBpcHX3AQg2Lb4Fek78zDPZ3swwRgU7mfkqc5uHNPazHuS4YTtpi4myd88qmweSBvm",
  "key1": "3227qu2nCRvPdDv94DR27ZGJdHDYfFQu8mzEVxECNCLMv7wfTwjNTrri1Q8wnyJKhnPvr2ahLgryRQ4NFqGv3h2t",
  "key2": "2c87UW4k4Yr3hN3tvBwSbZFUBgSub2mrS1WTifoHe4EKJDgN9GoaJB8qrYW713YD4M1vgSVUiCrfPy8xp3JDbVex",
  "key3": "2bPwo1h1sjar2QSRqhijdAyEqm47tMZYq1tc3r1Tx257Z6QSS1yoKAdDeU4Lm5Ey2iDSbPqvMuUDFkAcC4SjYUxN",
  "key4": "3YbEMZSbimMeS2cNpev23ar4oX2rHdjCGuSTj2BgvhcuUU1Bace67SSBEXWAGie31P5zu7dkeTNWT79KyFe2MnEq",
  "key5": "2xP85iqwJNZTGNMUTRk4kwtiZrKkrS67c9Jh7EjCPXjVgwcu7ezdsv9CxB4ijK4qrxffvS7fU7sD6WQnyj1NCBPf",
  "key6": "obmzMk9dQJjjGncN83gu6xakZ7c2R1QpUzrMGs6Thxfwb5mG3U587Ffpx36dgzzzRtAPdxQmU1S17sRpcNoWjaM",
  "key7": "4kzfCYVLSu72fYZFJDWaJeY5SjYSumgvkBmKdd2oYRNUBj2DYdZdcubg9jtfAGifNdfMUh8FXswU8gurmRQ9nvsB",
  "key8": "4tSR3LRz6ZcmTSbT8ar9Rsx6oHhjYXakj7gNFcTvn2GwU18NvL12GaoibYqqBhZNzQHcgvdutuyojGTDRPVzGJXT",
  "key9": "2Y7Xg5iabwHVY97MsTt4PcBwjS6E5cPUUHYkyqizCn1sh4wA8zj3eirQNkjYWVvWq5eM28CCMHbqrHxmbBqX1t3y",
  "key10": "ei9wV9fWLv5JQpYeehqytaiaN4xWGengezPpxtL6abj95X5P9YhKWm41oZRWmurnNtjo2jCSpyQDRQYsJEigkK1",
  "key11": "2nfer8T2yyau12eAwhFwpR59S53PPL6mdsFVzdaFNq1RerUfzDbLy7vyf1dWD9eeZT87dGx8Yr1fB2845RuZ8dgB",
  "key12": "8CzDy78rSjZ3TFVk2B7xjCUJnxa2qWkK4ga21Cdv2HHmmmVCuPfGWv7QgG8XfuommqpaLWMZFyLyX2mrzDJ9N8v",
  "key13": "3ASZEsLckXf4vg57eZGns5hY3YUVsaRPv6jV1w9QgPSHvhp9na43JGxdRdTqTWwHYMC3bXEoVT42Y4wqLT1t84pA",
  "key14": "eM1Kub1YJRsLTUzR4WLkf98Va2VyJoRwJdSiRNZuh9hZ9A8YU9udafdiZxZz9PNrqR5g9q4Jok52anQTHno3j7A",
  "key15": "3JqNUoaQftdjWQKLddxSP43wDeeteNg5k1fyMoewXqZ1DKuhQ9dRpXfSjgxWwZybSP1FsKDPYQWA6gexTWaxu5eZ",
  "key16": "xjmb9ZS6o8cyYSmAnsXB3EbYN9B9GbhYNCKTbWBjus2vhoxzFJd64JsYMHpxhesdvuP2oMRrUCQyUgSzNPcZkNr",
  "key17": "5obq2bHe9cgZtXBkd7QXVPbBxbiRZoVM1A1N5WNZSN84DuxZPp1awaK9k1oQQ8vZ9JS9iqVpGe52wTvQ6ZeZBBN2",
  "key18": "2cs2qfqLwCrxJKK1cQxUFGJgkdGokusRhtyHU9qnAveo2eghCii8sFLewnQGjxVCymPA6haA9APTFyh24Vodwqgp",
  "key19": "3HJwzpEJ8QeQJDrP6ruC2zTQGsZbsVPG1cqTkRfjHReKvdz1u1XmhrcJ443BeasDBymFskhusCvtDbd9nkKqNiZ2",
  "key20": "427Ak6dziU2pQcvB8GfUJiWnfv81KpdZ6ddFGs7XkQCUH3ete8BzmkGX3xLZ6raMGokbBxd5LSEXFUednZZyeaGD",
  "key21": "5kpQWtdKdPZHwQhPPMShceFAL8CpzQGgTFETKJ4YZkTW6s1ZgRJ5WDANYbytZZhmB5zC9bgwB1SNyeFae9BG7FaV",
  "key22": "4VQC95K2i5FXEjAAm4BpZRJDh95mYivkiF1e3cSC1iMF6bQ7wRxHAiYAUkD1GDEZsaLWfzHhqEExMe23U2QtmDVw",
  "key23": "5MwmeXJgpMiybqLg874p89vXkk2csDihvRtu5S14sX3zX8zRXpxrfzSHpjMtp7wdFYbXeoBYkKoQagsaNGoDmwRX",
  "key24": "35rDZhRTjz6A3cBHHGEPyVCcYnmcN2UQCHpzCcUm9i5uFob3jGbPG4CFM4gGrv1nJR9jtpXUMmPyBzSLyLGm8JaX",
  "key25": "5RUtYzoStcUdBJNhq8tQyP5c9MXehAgZ45nt92US8u42ikPrqfpitCFHFsYVS7aarSad5QvkCpnr5sfnwpbz4By8",
  "key26": "14TuDh1FEZJ6jyEV5pFmRRAEtb1PZxPC4BUP1E2Xmqo5kVYNMKbt9fMu982ozmbxn6kxoMGaXijr1TdMpPeGJuq",
  "key27": "4CygSm76ymz3Pvu5Ueom4C28e84GYU9UJWpHXhzpnXnEvXzRMYFsRFnQH8E2SbLZex6ayfRdJvnTUzxcPtppBEKt",
  "key28": "414T4dVtqqTVJ3ho4Lzx2gPMiFrWd7rhnsz3UGStG17KSSTWdHJhnNNAN3u8oWsaGgdiCvLASy4zSBF9fiEe8pp8",
  "key29": "3ZfNDLumXPD6SV39E6fADyS8HfKduuSxfdjgTLHudKWLRhWUjejwefv4G6w7b3sZKHgyffsGfDHzgeobBwE1WSZR",
  "key30": "4fgvbbZydjc4Rje3Rbu46duFTJcG2pQz2QSmWQt7SDNzd2H2tKiapqvRqCQTfRvRavmDYoUAnfDbWGEQuo7mZkbw",
  "key31": "5Ag3suAcRaLgfv1v3NwENRHY5rsSHfduLqEePqLnVtU3WQphd8VwhNjD2CwevYg36trNzmMdq4aTJQ5TMoyqwDP6",
  "key32": "3xRQJJAeDPMkgn9opxJKsznBSR4M5CwCt37EseyNyjAo4NQ4CeavAGswWAPs5e5fCUWjdogV4jhtoLT7Sk4Hcx6E",
  "key33": "2pvE6efvhAxaYQMxUwg5TFx5wgS4ujrh9MDuHnMwynxWkCRsJYZjFX48swfaq7LWPdzktCoHkCQWNFDFJVgaZEJp"
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
