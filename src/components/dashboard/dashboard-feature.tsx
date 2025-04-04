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
    "5teBRSzCze4fhUfbZpoN2Gg6KVtDkiWjVAfod5eEErDzDhZVTGhKxb8ourv4h7PHj6HU3fSq7Xt8MWMFRKZu3LkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBuMvHXwphQdPAipCJ4gay4VnkSNKBBo2PEVoHQoiySniFfuBmwetGuTXpchJ2Ah7oTf7zWbvgwsKXW7AeyNnHx",
  "key1": "WzJvXaYkEmQr4KY61UVgwjqHuKVxoLUoydHpp9rLxmeUz7yHy2o3Zjy3BJY8mVC7ja3SFxhfN3ZvS14bfzJ1eeP",
  "key2": "oT5RpVPM49sDYFwynaKkNDhqYXQk8xzhnq9iaPmADrAgcFX9oTeNmzoRJwSELJDMBki9u5R8muN7AT12BWRkbgP",
  "key3": "2zSEQ1hA7wsLrDnBukBBMe9oU6hiESYBQs2hvNuepxamu5FwFUV3v2D5GFM4t5F6RdK9byxb3euxz53NRAuT2cUC",
  "key4": "4RYo8vHRQo5BcQr3nGgTEbJuwpyMbaEyisxtPqDbukc74X12fj3adNan9ronvwGuCcQrxyTvUKheyBvBMSUKeG6Z",
  "key5": "52CTGXxEcxt6umcW77KErWhRFiKw3UozBGYRdPf2WXg2o7N6LFYgNrqa7Teyhiri233Q9Tm46Tk7A3fmgP9oPQKi",
  "key6": "2av9uoVgePjPCJo5FB5SiCSicqS4Mwhe7u7dKBnRcBM4zk7B41LXg63dVNbLtTemyDnukeZFopAGGpd7R8LYUG92",
  "key7": "BbXNRfgJxUfCXejRmuNZikv6jA9ri6swsrYqRuFCBmkJsv11Kx8C3BUeH9xAj5pTZMpDRb8kdcdMSFUHidP2Vp5",
  "key8": "4g3JDfKVUhxfsWG6AefeXmtmCobB9zo9DfTGkAjXbkyBgCXi1f8mMFn1F8N9fCZNQSx4QQDqpRRB8XqR4tRUnCAN",
  "key9": "2FJPEUfcXdZhSd6uGzdfyenifwCeHkEUWDfHevRVCcR5nYnmeQxjN81JxWW8C37ADER82WyUwSyXhwR4NXr93XZk",
  "key10": "3mV1c8kVG4VeTiQmMkhwtdeUPoqqh9Qn4jyTihvEt3vB9wBuWbVMFoDdqtGcfGqeBiwhHFDdLuFDoURjJQHCEKAS",
  "key11": "5KJfrtGRenvEw3EquKBwQ1WrvLWPfp8EpoMizDFze43sb5M8N1FKRMqqsDXuT8fy4CrksGwYkJS9ibCsge5jxJV9",
  "key12": "DcyEk4XdYPmzP1K2oL2TZbms5N2Goeh9bQTCs1xSuHc1gDypHxNpJ97kV5jHj6Dghs1LZhiUfSdr8zniVCxeVMk",
  "key13": "41au5EgUZ2at58D6hmnSf2TyEt5anbhMtVQS7WkrYx1C5FzgQz7UJftagXpuCFNGkCf5tiW4bBukWLc3MGfAktmK",
  "key14": "47pAPChUPU32NcRU8yMsVFMTeDgBTWxXT8U8gsncJU3m5KpmUy49mXWBrPcmRMa9Jer7rz9YdV6ycsdEFysUUhfB",
  "key15": "3KJsmLPLFsdQgdNCkTpPCe3Rcc8x6xFX1vEJTXX3nXnHWMGheB3dQfn9NvmWBjxxxmjqy3R1AfS6hLbyzK9Cxrqj",
  "key16": "2NjkF6sYSrfwebP7VFcQzoZn2EaEjhrzQR8zrf4UpAbTnCyS5qT1egGq8cXGJeUSqZT89FTRzzZnpJdAJAx76sU2",
  "key17": "2tMGncadpLJbf3oK4y3zR9aogtNjWu2rxMk8E8kS3bxqaTUfZsMQ9m1Ri2V8czGsDgpdAsirLqmCCkaNoxVz9m7J",
  "key18": "2xfvs8hwoCyN4WReG1yjnJWUWnmM9dopZw8fWhjmfQZNsshxaR7PVMBTdcTNtA4HWgiT4GQmSLs8HHKAE4xBUcpu",
  "key19": "5ahFZURNDnAKuy8bVTyZueesYfbqkkJyX86pbzJkbERPCeUTXM9Bv5BX29wXuPairAwuGG7jAHZ9Gro88fmNayNp",
  "key20": "4M9HCvJZLrnQBirPguN6hLg5VzccwjcxDE7nvLju3DS4Wa6FA4FT2Co7HKpXAVvcbNFcNf21KjGf9yYVLmoontVk",
  "key21": "3CmaiF5mf6FAr9bqnajZ2csoo1wnh1LSRn6MmLsZapj8MhGP5dPSpNUd8PsykiYcWpzjG7NrdHre5bABPJq9LYgK",
  "key22": "28nsS3LHpGx68ypC21g1kmuaMtJQsMm4U1zFTdMPgTgJcVsBzTU7BgoqVoSjyzc34Z4eABWvGc55e8pp2jGC1HzC",
  "key23": "5pMmMn3cBknQoVNxpa9K1xWEzdXdYnS4xZ3Si6uBLVBqkqWXVVK1XnM4ctX2dYym71nqgzNBjcVbTzCnLqLErqyH",
  "key24": "615PAFGMvoLDxEcLESeHxB5QqtRQxFBe4piEiX2S9DMcD5fkQxmdxWX78k6XzTecHg91NmdKgLXvumfiRoej7ddZ",
  "key25": "2PRtgpfeuZeVnzFfZ5kpSzazPGGSeiENJpNiuKHTrH1r8SscburBYRszSsbSfGg656EiRxGjqny5sgvqpw3UU5i8",
  "key26": "3xfaM1eRNwtRi9tB7Gk3WYxfSVznUcw6zdNHVH4ne9qAzPL6yxfq4n2vNaCixkfcgJUSgsPAyVt1d7uGaNhbbz7B",
  "key27": "3hk461atqm74pm1qMamyhMNoUPoKQF9ZfDq2W5qSzCv8jHLkeKERjTDV6xSGCVJwKoidFyJgxhesKrdsgktbh6oj",
  "key28": "4ghWtWccwYcTxKwfz6oNcHgU5nQat4RxezsgimzHwg2EX52xjgtvabUW3qkhNrF8R36DnUco8xEfqDsh3DfavTPS",
  "key29": "3YLFJpeHDfyvEt69vuieCmYqtRZDc8qSQbAD1fm11pwRqDmcSttsF4FkhhmveBt7jWbc7mDuMuBDoZJkk6aVesZd",
  "key30": "4bc2LnrMzHUVFPHreuDwfqDi7jJHWvUdLG9iS3y2XqGmZD5uhH6RGV93VfxavFhfh61cDDhc44ZcxmDH8BPQRipX",
  "key31": "46n2f46VBTzSx8w47FZ3Pa46c3ozrcHm3CmtDSPgg5K5W1vLqkpCaTPJsbt2sHiTBtkV1kmxkzhCyQGDeBFFP2Ec",
  "key32": "Zq36vJa1N2jm2Gn3sUHW6jwMRD2vZKyQK5mBLuRro2UEMTvXkV4jXEdt2jHaBjkBKx4WAdboNggBop9YDxd8LXC",
  "key33": "2exypKRV6SL7d3BW6M4R56qdfBytidNeDrqnEML3VvQW2PUiawmtF6jBcF64htZ8fwALLwSbEFXtDBk2eeRfMfuS",
  "key34": "Rj8R7PZjFpZeDKayWwbR7pG4zW75gT4nBG8hQQ3He8gW3rAZ1s3thPwANgujSX9u3W5hi9GqZbr8SYgMAZYHkst",
  "key35": "5TyMqnpbtLKooJNtsrNV9QpPCgzug6Y6Hv54gHgqNty38heUHwVbFXoPtWqg7na3Y2kCpALi6qXb3a9yrW8RnRq2",
  "key36": "VeP52WrpxR8K6d3QVRTtmse3DhekpJeZRvPCu2RqU6i4AXLLvfCwVLkfrhYNGV5fCAydEoseRqnZYyfD6ocwoXu",
  "key37": "2x5kuCeNpDtCaEhD1hLaCWJTiVzbo9UMx8RMfGbU5Qk5iNGcA3nhAUpTLQSkXrtSYBaCoeF4mbxN11GF8V65NaSW",
  "key38": "3X2vCwPpbMC5N2GssRyuPwjZ51Q5RKt55QewDnGhdDkzyJLwi5YaHHywqUnbi7bWm7aNX51rU4JVEm384LTMctPp",
  "key39": "4KW2zfKUEDueqX1gtCs9vka5dDyXEj4AAQx7iJminBduqJsNfkBGTSMqCGBjRMUf8q7XHudcBPLemu4DKwnRJsfn",
  "key40": "bLygGAtEatPLxv2KuP8cmWZbaDPXT2HBUrELkC9wAiHHjh2enHyd4zhRD4Mq8DWiD6KUGATRyTJKNvSypVcEurY",
  "key41": "2bGGDApqqSH1YS8Q4dKcRTac8jjaWLRWiGWYtk6tbNpY2YtKh9jRC8CT2PNNUnTP7PPZnRy449E3p9dLoRHY2XmC",
  "key42": "Q48dXhHJxXrNfJUErSM2x9myYU26orBJZ1caM6iJmWKrdEGkVzXyZ9wTQWZgE5SP2QJ6s38XcZjWz1s9Jx6d7HY",
  "key43": "2NAUMxME69A2CqrcCoABhUzaHtc671KnC2DRXgCrJYTcV7e9deKtstUK6jV3r5RJPZ7CJ6vw8QWfjM7zmBHBSvuZ",
  "key44": "5YnQLF4QT3bg5V2BnDC2hW79K5nhmtV3LUigcJfi7D2gTiamp1DqUgxkKFCgjwKpCmjrsYWcWKCGDunqG3cLNxRS",
  "key45": "56ufc5WRhe1EhPbzrTnSNheqbxsuruQuurWs3qYapkAduXzLs5Hcbwdx825ZZ243EPUsP5APhZLoa9cNq9bRRchH",
  "key46": "2kTygirGipKYou93DyesBGm9Ft8zguhPiduaSU9vaQL4vuuTdPkMZA4CybXi1oF95DASWEzrmFRJGeDVNkd9roWH",
  "key47": "kqbNRK3jA7SQEn6ZgRY8ATQa7JCrP86qaB2gkeGZsGg2bHxLGbmDULEjcbc3UF3vHHkhrkNR3pCUe2DWzjbmBXa"
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
