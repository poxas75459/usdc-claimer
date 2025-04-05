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
    "F7H8z2TBgpKP4fQrjHDewt5KK8NaHYfVYQDEHofRexoj9kt56nQSDBanbW5FAXZsUfzojwcQpfEZYokVWbD8hWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46JrSTtTY68Uvus2ZqUYh7ntiWhwX8mKbLGPsnJEHm6SW9CNmpK76RnQgek2uchfxmmVdyXP5Z29px3DpWagwViV",
  "key1": "2RG2owprGLQCCNHumWhW75K5BHJJocTLVQGGB9eCiH8CwTeCcAMvdHv9j8xBvV3nG4Gsu7Lw46CpdXRb3U6hM1Gi",
  "key2": "3JhGD42RPPf2PKvZJJhRbu2rjUrZXSr1FNZFFw2Y9adroTe11mpa8yKLtvzkvBBUDp7vtz1GrU8q3V4cSHVBtpcH",
  "key3": "2HWp1dXHoKDy9F4HVcsZvjRT3kn338JCZsfjArDnSCCQfnnU4uZYnj21H8Xw8Fvw3ZAE4yCk9Rse8EsWkvPea4NE",
  "key4": "3FfxAb8oypCVxwjNq5k18VBL7AMxxcCJQwSTEhNXyRwcKtdyEEBP7JoTxXM8EPNaySuyWnCeCoZxW28hAVAstAQe",
  "key5": "22N6eVcc7GD7zomtWYUoAJGFZ6WAC2TptZb9XepyRwT4s7C6UGYoykigFxTybxfQfERt7F1gap1Z5FsNzEXSdUbF",
  "key6": "55nADhvGqZxfubWve5otEj2mLJYgnDRUJiboE3Y1rzPRHhXBnBMGfQUu16FM3fAHiuPQXAhnqFfLs6DD1YFvUDN2",
  "key7": "3MXeycSGuMaMogm4Fysmq37SqLC9yCQo18itF1R2d2hoUxPsZtsEXCpCa2SfeJvLZLUv3ciY7MwXHsfFB5Xw1KtM",
  "key8": "28sbfrKmeXsdPDjG3LvDRm53ShPuKfRhRFPvHkcMXxz1oUa5KDnKkZqskkqkNK2uxMjX5xyugKekRJgMZAfAXTZS",
  "key9": "3X3kFXyp6rUHjTqfCowr3RQbziLm1GWbKd321phCXoneUGfAtKB2Rwx9RYckNoep1wPh8cZFgSyhVLTz2ZUy8FmX",
  "key10": "2AZvPd2pAugoGDNbreRHse363icRRdt6mK1cE4HKgo3GR7NjEoaTns9em315hmRfUuujYgz2xPEAsiwEYNZqQETn",
  "key11": "5pWAGeSu27gVcieswftw3Cy4PHtsGDNFYFgSFeKYTm4BbqUnxvCh64qwfXc8drbmHe7QJXCKfTrDQTp9YefrAUqn",
  "key12": "BZHtMPbwgmpsM1pc6ZFEBbNGb2nNkAcTxmZGRTjU74MEtbX35Ho17PfDJXenhtVLv8LC3y7j1C7GunWSkmR6PoH",
  "key13": "2vCBm6Ss7dDWKdjTWMcZTSHQCV7dH1w3WQQ4vcCUzjsuEinypvkBDsi5anNeauiD9zus3FexVt6XBTeFCqJLbNZn",
  "key14": "n2qjmRvojZJe6nmrHHQbstLnyvC883b9GrovkZCis8NcM4Um71ZKFmca429hqjudj9LAKRuWzPw5r9LD4oWrHdu",
  "key15": "5HSdU49KA55iBHaJrZoHwd1a6tizoHNfxeWMFMnvRguhABSCP3YSurkmsN87ZBgc6CpD9xLtQXAVVg1EczFs9E6g",
  "key16": "CEgwUqSufMQe3UQT9oeuUNhXTZhtFWC81HYx5V4c2HkaePiJ7jXY5pKFakMDMNAypiqAhMSpSN68LUcoPkAwif5",
  "key17": "58iWqjDb5MCfiLn99uAk8cPk53iRuttsGdDkz9ftBumK81uC3VVcAn2gUmHRvUtzMndNQ1j43fh4B9dXxjR8a1ss",
  "key18": "qzireAKYkZ9138CDzGzvTZZdDh9JktJy91Auap5Y1FhnR4NrQAcH6mrHfGHU48nELn6nbztBnRuujv2jQeRJx5g",
  "key19": "mbkscC8MVUdKNgTrudi1sGca1a5ZTjRcbSF4Xe3LURgbFBBt39eKagDCisaZ6TrZTPwvVzfAWZpm2iPYPgSvVHK",
  "key20": "3kE65iXLFh84wi85MFMFFmz6aEoZLwn5CUd9WYS6ndGrLTsCDE24pm1ufLwoDpybbvrt7Ws1r7z6jrTQAiJmkxn1",
  "key21": "2GF3AhREUv4b5HryEc1Fr1f2VnsqUcnTuBnp9UwAo7MD3nh9cJkg5EFfzPKtpvbQdMjk1pbjCEmmphvYgjcfzGD7",
  "key22": "4xjL3FQusCstN4a39Z1B5KRLkaxJgAs354AvV7fngNdd25BTQTXjHVCCF6ea8ok6DZ8rMpxmaosZsNZvbFsEfQbR",
  "key23": "nGvLBE5nJV3M3xVaRsGr3ryFN9Hf2YFeUUWKNkW4U7cRnvJMjwpDHFLMpsex9uAe5TR2fC8q94wixPXqAWvYY4c",
  "key24": "5PtE57E3c4Jhy29WGMWCJj3PACp5TNVkJ8gdKLqShaJu6ybNJCaBx8CVVeChwTfBcUp9nCLN69qcG4gKm9dgac1k",
  "key25": "YDUKNoScBkBkVVQC6pC1kncQ1ihqj6GfWxQQ8vC9T7YLUNV7D2nTHabHdHaooFCDKP7TLSXm1FTWd9RDw3nPu5w",
  "key26": "2ij7Kxa8mNXcKKXVJ174jMc7D96GquwKZ8fv2c6gxRTxrawwMc6duQAHbBh2gZ1TpfH8g6rhXcHWiSQnZZHtamcW",
  "key27": "3Zx8c1sGvNdtb6EbQn8itnaGyUFFzarTd6ot26DNBo1vaoCSajEbHzL44fpkv3vVvweiuxqeZfse3pxQjjjcCRvz",
  "key28": "5mRt4j9Wmx4VfdRsrEwcLxUcMAyyeuXFvNtQaho8xFFkFc3d77DVQbWby5pmLvhn83Dqvm5fFpy6PuQ2hDsX4CPa",
  "key29": "2XehTzLG6zX5ZaQK5m7MwQCPFUU6viDKbVKNi7UHwuwS1z2sUqFvGuHXeV4Zzz3Wy9CA8FinEyrH23EG7LDeNz8",
  "key30": "2uNu2Ri7X5V48ptqFLWvGFAMR9PjHjPMa9WyC927DgQDXwaknWZReQpouJBLmFkYzCUey8Ntu5nsTDeMWGYT7gzp",
  "key31": "3NAXS9eXnphT4CqYvCLWr6X23E3febvGAKni4B6WTtSfALip5ZnjsoYhXmukYyxPgY4hsxQD443a31fXwu3yja5x",
  "key32": "5Kvo2kopjbvFbHxFTXsuRHjcUmomQy1uAVgrupWsoPaX69NbqPWgkecZuFaiaifanhzgj7MVXDyQm3JJ2TPyrjET",
  "key33": "6732aeGJTctg5CoW24EBNg81wGZkf8DggKNxWoLPzRPtTj7kpvJsYJyNQiwX5L6vmMid6KfaqjFg4zJFQkYgEMV4",
  "key34": "2nt5g2KDLtFDKg6pDf69nvFakt8cMCjJSy6sJpPJhvP2XSa4ieSvejHFcAoMeiPApykoAbsg7JzsU7ru6Uq33dEu",
  "key35": "5mKQyQxLjUiXsD626a9VE71WDKxSnQZZuiGpMf4wAJ2jkUT26GAFPKhJ6hBRoYEcY9W3Nd7Fvwv9TtKcJAbGyRK2",
  "key36": "5C9atwRk8hiBzyLDcdLazD3iyuVXzx2gkTdRjUo4rCvBX5iYix2no1tcRWzeryb4ibCmDiWoria2fM2U9QuAbfdt",
  "key37": "4WqdKokbLZC3rwQEEEsXPkdshKGw5vPGviZPrJiThGHQgACMB4JX2xBnhUtudrfFdaBMMjVRSevoYksQN9rGCttD",
  "key38": "3XYPUC1x8aV8dougdb4aJKCWKekx61VKAzZ6A7kQy6X92Drqcb9FscCwWQfR9osFv7cvvfLVwkudtSgpWKzhKZnw",
  "key39": "3DA94mFzerRTU7hnj5mrKii3keJVUhjsBgPZ5Zzxry6oWgsHpQwFVDe8bdurYR1BQ9yzythCfCqjfD2VeZ3ECz1C"
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
