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
    "3DERmW5Bd9jdRccu3anwEuowrvbtANPXuUdWimVtGCvhLFMPJMRvHEHvqfLZJhpuB3vfCS8YaXpbSiwN7ucqXhWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQsea2Kw9cKpep8gqUjh8dYcu4bb9AgmxK16kdamWQAmPEMzqzhbyyP9PYcJkRyTVfJA7xTzbWzvM8KK9cp3YEX",
  "key1": "4nGxQtCP9KZCLijNzphDfsDYwqABqMjqTQ2oaLiZ36CwtoeYwy9UcL83QBPEcQ3inozLrGxUM93zvyQ4YiEnEuFF",
  "key2": "2TpB9LbXpYLYDXZf1x5tRQQWBuR1a7kccqiqD4GaM5hWmYcgBs3fPFPb8p8C4ob2QLdkKhyvQ8j4u7rjTXjy5vPD",
  "key3": "5g34aBuBZDux6v4AQed2EE5st6FXJh1rL2E3AUDAuCrY1CBizmdXZ7YxGGctjTYmYm3HuABaZmnQeYorvkPhdbRW",
  "key4": "5taeTT3PLscb4yGxcpCyZ5vmpsBidR4nnBLt5A8TPtRbNhAwgLPsH1oBJ1NaW1R3HoFdH7X9pnXSowcHuw74edGh",
  "key5": "487p6jnUevwmR8gZV7cYkaVLfuKaFaUK34SDeV4eeizvYuAQCQq1wnSQSeV1beh8N1fuNbkXdbUZ2fMWCCDCVMTp",
  "key6": "2VrmUsDDuSmAx41hvzgyyy36nCmrqzjsELcFamqVbbMrAyxz2A7CV5JEgtgeoW4drrqJJQF8bvz7tTzC582iDazr",
  "key7": "35WMJzCZHogkkrRJtBdQhbSN43nEamqmEQ9tEBL5cQiNaaMY75a2C1XrJ79rTCnjutFYqJRWV4AL3tfYbqqw2imp",
  "key8": "2pPADCSL7G4uD9tjCZNAmcscqhzANwNnz88m9EeqJLZCfawGq1Ye6TqVQjCoMddhEtRrPJMUhtnDdsLEJFauNdFf",
  "key9": "5tS8kCdpwKEWqUvavbEHovYRB7xtZS3gcU8X3Fuga1AWsHmTYVPtpmb68tqVCunJWdo6Hm81zuuDPfAQhFb6QL6c",
  "key10": "Nnot3TZcTffeppL5oHPLUraqkpDtKgH2aF4AxJWXeQwBLap7jtH6e7h8M6Hyi1xP8hhfMBLK7yJSsQHcJkqGF48",
  "key11": "53CbY75uvbpFvReGWRjsQTyhxzGbAbPy9ArkaB7m6HiwrhgSirWrXaUV51Dy3SLbbDPjmEBqyim9yAJSz3Sa5P19",
  "key12": "5cmf2AzXnckPYHSMZpWdBNwtfbZy2tGCSbhziBAj9MfHTsfvZ9Jgm1z6up48BaWoknD7e2fQ6MLcyWBnahgcq2Eu",
  "key13": "5wFVkZKPWUDHjf2DfDbjirHfNBn3swfuGD1qAgDfA47DVWkCBGyjJUdYGdHjo8BkrwsexRmXxzcQqfDXZUi5kSF2",
  "key14": "2YEE3Le6L3QDnM1uhEXyJs9zic1v3xm8777mRrKcH69bRwNm6QJALX4A4KWQBLEgZv9GqWy1ukP4vM5xBmEky2rx",
  "key15": "59z92vBgEGoBKTCytREh4AVU1Fzey5VvU7gPGcwhksnVyKTMC6wV5g3X1yJ36P3KnpczNuWUMNsgnYmvqmRTYRM6",
  "key16": "2iMmL2mAY1NZS8koJ7tayHQFX5wk6v2KdwrqZfCR5AoJd1gFK4V5TgGyZeXpdyR6fq3BHEqKJCjtYgwiWKaTNcuC",
  "key17": "4HATzUi7GKNCvj32vucrBomHzeiNLgL8gypu5jAEFzEV9Ktrd7pfamuDa7M7PtRwRuY2wt5Hn2JqgFdgS6V126ct",
  "key18": "2PGV52kerZRT6KUyt3iP4vQaAsDWCqWfpXeAyT6ScyN3nnhwdBUVnYnatdPfkNDjFcdzJG7DDHJm3ug7JzkqSNp7",
  "key19": "59sQ1uWLXGtMTtMsFjHznBTXtbgQ78aLUppPB3dXGroukZ4MTB5E5o9XTMoRumw3DEfxVimq56FNE2Z7tAk2xYSu",
  "key20": "5xkM7AP5GxvjPBRDydhzjp9eXbjoELDcjXBrXRTTU1JsYRSHnijwmGNmGqALhhUFTtzg5GcEJUQfzEg8CxG3d7M",
  "key21": "4dYojjv5Z6VeNukC5KfMA6FTgzra84oMWAi6UDx9wU98iVnW5ucnV7JbzqB1dMA8eV4ZC59uFD498w9adVaGUEpW",
  "key22": "43ztC99D4YbPhcXk6s81VUft1U8X947sib5ZsJPjdfenGQPiywQ4cMZswoEHKcrPVoo4weWtYGDzW1J5EorTL4GS",
  "key23": "4Be5BZwWESjNrPodMmx5LqEiU4ibmDY7UBqgVw4jfyEgsX77xA9ohmvPmacU3BJPahpov2KwmJidsLAeXn2mpjGC",
  "key24": "3xk3wHchjqg1enjpPZnJ16VwBJeHstF73gkWoxFQ6Gj7rS9Y1amMafS9b7Lgoaq1DVBk2JYwBAp7z9mZNfhLMroZ",
  "key25": "44tQyFZeg2mKo2c36EJyDs3idb4GBk3KrcCUeHV94yshYWpwqA2oShx3rk4uvmemgxtDgacsWWtXTb71RubRyh3B",
  "key26": "21qgi7XmJLfMYqVxFQXsMBPKKXeJKwYSE1DtnYoXBw96zWxqEhjF3rji42mLvTmvFaDoZP4htrwGzEpyri12ikhS",
  "key27": "2ZeKWQQrTSmZWeDFFGhDgcPo3sd3eVxp6yje7hijLgvHRfD1ato1LoopPuyRWACWHBumERhfj3J5Rp5G6EbgCDFg",
  "key28": "5CYHeQCXY9VjnbXnTPAVf9BgiM2jX8DXSpPKEU6FhoP1wetNvNLsv4QufDYAxayNqhN1JFBh3xM1Lz9ddqwgqtZt",
  "key29": "oDXQG1VKVWyUsYYz9JHKfe3T4LqvLefofAzBPJupLeGQoLFazvUFrP5MxJp6yQGYSznXoR1iSJxWgowtWKTSgiF",
  "key30": "4LFzAf4ovPXCNDCtXkzxM8jWBe1p6ZrDahVcDXrSUkYG713ma5Ax8Y4TVC77mBWGbbJ2nxbVbKf29itmwBtiMUje",
  "key31": "3g2ZKv5JN4yjaxDJFAaEBVgP97SZC2zB9ZNX5aL84fgFagxoPDPWHWMHK1dAw69p2r29KXPKArasMoGFkyjzxi3M",
  "key32": "nYmHLCMXPYk6Cn5u416ThJdktESXyAmqJSrTL64DvXwNh3xPf1t5QpSPMSbSRDwVcWyRsmHvMechztpkMHqA4Y1",
  "key33": "4YxBQSAyE6Y81Bsfdwj8JMwmTTZX5cVkxo3XA8qNG25W4egXxyDPVLLgn13NgGdf6d9bTziyvkKgeesygipPmQBH",
  "key34": "3NARcK1Ly292ZJ12VW9U4Asw19Fv6MbHRuhJq7ePG6ST4jCsWo2qZBQm3zx3K26b6SxtSeqSL6kP7bEoB2vP5sKk",
  "key35": "jpQj8rTjkjPVhmtDkhECJNdp7Dy7bFKNMZkeE9jYktu5KYUJc2D3dcLoMMt2GP7HCVaspEtY4kSFVYBZhUT9Sdo",
  "key36": "4brVTMmrRoEKoT4CNhjZ8c39A1DFseJWU7MDRCvrryitbDMdJLGePArrNRqxoVYKAchkWau4Zzn4q75RkmJsEZPL",
  "key37": "3QHKBZ8jDbVJLkqcAacRxFecy67vAn7MymPoC1xrHpfdDzDnYhEvbdYWziTnMu7ZDoEajSRKRFvmh852i26GGguH",
  "key38": "GE9xcURRHH4LjMAPwEQUcwsQcnZa3g2unqwJTGyoWPLZZLkRB3Q2m9e9GmBf4X138H4yQm5McTD9VoiXQ2ALPvW",
  "key39": "5e6kzakFvrgmomE8RGRJpNY5PQNNU1w4fCdTJ3588G92a7PnrNAyM3EFUe6SkzCPBNuhNaztZD495oeP33McfwKK",
  "key40": "5wiiTonuuDNdjXbB3N187NbFcHeZNx7LE1YedLxfuZmMSkMnC4k6CuXdkS212MeBxUvP7pZppvPptLT9kBwfgF1b",
  "key41": "4GRfKXngNisQ1DxivCk5RyR4feiC9649H7f6W7JYFgj1BVBJrThxKnCDU1SSv9WGAnZLmEpQeGXTGGrCaksQDFX4",
  "key42": "3s45JxJSahdv5g95pXv2EFw6rqrPfjsV2ZHimHp95XoNQKxrwiw1SBeUvApu9BBViFBjMpE9cCRCTMTRFv8uKTJL",
  "key43": "4yhXTBVwX2HdttwuTuKtf78jYdzqNZnEr4qu7zgFbbMfVRkoMvUaJhNw5xCVQNtv2KUf2kZ6F5HrEPhM3yKMiH9x",
  "key44": "48wo9kmcyWi7pXwyApJHk2ETiruaJZ1FpEsbE5q7KTbuySzdyx25X559iw43EmAieUEhmMvxn1VuqcUJNqPpUvVX",
  "key45": "3s7Sa9QyihDBXLyd3osxg2qw7atDsQumk4z6bXW66cUu13TuUnxAkUXngBrwokpDaswNyJfAm375Nm6GfDHLWVsb",
  "key46": "3TJvDDez4ZacrfmsucCCFDrBLAD6uyTWJrEHSffJN81LHW3NyuVfVrnq8gStxgyGQgVM5tE6J3yrWNvCHgyuZCbP",
  "key47": "5BJY6XZgEDep9jd8g4MoNKEYFF9cJBC7rr5tdyWQeYMxRZDKK4LRFpwKK4EmKuQDeKT1xU3ZWXfYaCDMdZXPkvb6",
  "key48": "5HaRX6ZvpUVJi5vXi6zLGSdBCdVAKorb3QMaA7ttApHxWUgWXypAwe22vbNsVNEi9z3mT7SD11nvTM64QppFoD1",
  "key49": "5mKUbNeH6c4Ao11Pd7u5csAoBdthiANwT63NuAYjQGKgYkxhyxyCbRKmVs69KESgKjZWkAvys92BCL5upF68YWTG"
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
