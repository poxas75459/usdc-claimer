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
    "29f8bDWxUtkBRKFaw6tRYas2AvCfSAuZgCh1xmmCkMY8Ub7DFL77mnG1DS48VwJ6LDb5b1bj65EkXgtyXgnPC4xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gdekfTcGoEbnZuo4YyV7DCQ1tHuEh9soD3FLgK6dUfhJ6HwivdUqdETnyrjVoTbnc5Lc9eJGPkhcZsiSJDW9in",
  "key1": "5Whc553kG2pYwWmzgUH8JoBBo638JXPQBVjxwrFsZqjCvbNdK8MGqzJUKBD48o3MumAK1GMbHc7deemvMp6xmd8a",
  "key2": "3sEYiyxa25uDiDVXvHNG6WnwXuh5r4EN2dhhU1raja9HUrh2Ex88urgUDEH57u1cQtbWdwRnVdWsDqcnSr6LgVpZ",
  "key3": "28NjjQCrmXjC5LSCrJ1YRr4YgibZ1tF6H2Gd7M3JYBmKdJgsMzvqxwv8x82ByNaU7sGa5ei1uBFFganvCZYo5qYB",
  "key4": "anwBZgY2DeVS4sTBgcETJRAanbZk457x7fE37cgr3qaJXLd2U3VAedaFbQ7QSZRhTDqzMSwuDkWmoJdPSDZ4kgi",
  "key5": "5w7ipkcQKfxfC3kwxKgW3NWNwrnTuLnhnvPu66LxnsqRmiM5Nw2hfhpWQoDJSMB371ksZBqRhjVUkbgNGjAoKmK8",
  "key6": "24coDMc7CiLNvtvxFLeWFPpYUhpv1a1Cs9MGHEPHtYxT1bX4MhBbTx55nQKtRBPVi22CcFccK4PcxMTiJj64t1bN",
  "key7": "4yD2rQFTNqaWCP5wuy4QsosonP8oPpZzsowHdFQEKGdPwdRiJV59C9RBBtmwuZLNdLzNDazk55B4ZX5VBJ13TX9o",
  "key8": "3DWgTyyNS2mGepEtNUkfAGU8aAWfcQc99FXSATRvi5epb9tSoV7AWFzqj7FeciMhnD8DmYF5T27y6pmiJv5yEvgK",
  "key9": "Q5SePfVnPUj2g1WHcTuRAsLQvKUTweEugam4WKHAvAutxzunD78Eoz9s6xg64to2344vcWY1UDHvXLamMB6unaC",
  "key10": "AWhURwBjtjU5A4d8qd9fRb3NWRMF68Zog75VfujD8URruPMXrMN8k2crE7ZUVm5ZmiXfQgYKhGahky85P7U2bzp",
  "key11": "5rfG4N1ksBgeP4q725QJPqXE1XSLACQGxRRacXaKAMfZijbtaFbA5oz7issHkNyALMi5Log9tASBsAHWawNnPqPg",
  "key12": "5oSQTRNoP2XzxxHY9NWGkxn2qTQCiREfdPNb2z5tFBsd9uQXrxx5otLAo6RUWaxjXrGWB8sjWWrSZKfW7TQTtF8c",
  "key13": "5CdY3jyrUjBPgSWNuaBTyv7WTdXupobWbuqTtkMi84fvru5SAgKWXoyYHvDU8mWixpRY2Uxkzp8Tb11FHbTeCDc6",
  "key14": "58o5yDkPi3S5Rw34nzStAbKNoPDvvXEPLCuTELUFz93wErhAzY4n1p1CPaFxNcBuWKSdLjmcUcjATfiyDxoFoe2m",
  "key15": "2P7sYug1CuukegLrN9tREAMgb2ZmcSfPoz4G3LaQ6wqJMkkAZMJAuWczdVrJXt6c3mbU8kNcvsZvTQC4ab5tXagK",
  "key16": "36KB78xDqdp9nLwWnbCq8MH61ct5TiwNoaxYBivNpNKYtSNadMDr5FF5wKRNyisGGgGJmCGXxE4nHpwuUqmdmZwR",
  "key17": "425ZhsWdxhF6P3t9AzCirDUcWPh5G2TDUu8de5Vuzh7vXo9nv4fpRHyK7CdcnmGJ9NSAr4PwfubxgHpdp8hEVcbK",
  "key18": "yZFXxsHbQHWodtkqB9B1xb6PWC7u5mYkLTH9bS4hTpFn8GPCjCwAd5s17a31e8mB4pRoThLpmbU8nXD4TZ3vJVH",
  "key19": "wPRhLXwAyVB9Rwpf64WqiDNY6gqjGbU2fKf8vb9RZbiA3sMNa9tTSw7hGntZgEg93F1vDDYPpefC2jCgJGXJFAy",
  "key20": "MEk4nGJwQUEiTXsUjuM3AMt39dcdQWBFXA1jfXx2FNh4sirzs6YZnCoCDnjZGe638x4C4jMK7n3FV3mq3R4pZJY",
  "key21": "CLTsHzucq8KfkKd2RSX5uwiTfP8fWCPPHZ879QueT1Bwuq6PrCfxLE8xr5MoJtqNiwoaWkrrmDUU2mwzsa47Pfz",
  "key22": "3qsUh5t8mQA9EkdaopAY3ZAT66bYcMMiU5wMyf8TtfeFgTvTsmk3YZ8ZK9stGLEbXjHCHeqfzyNTYvF18uQbiNdw",
  "key23": "4XSg5KVXTtCXUz31J9PFruEV563Yo6mRB3Zb6W5ZTyXYYgazzJJ1d7KFX3nkXy8cEw4WjwNiyczu2Zf9QHLmrGo8",
  "key24": "3Q6xyFiG34sjnDPDQyHehTYdsw4bKVafPLBzCNxMbQywkxcWUEriRjWvRfUBN1F7nh61T1FKBmPMTdHxdWYxq1Kz",
  "key25": "4pZuS4xu7nKwNVN8wqjWWFRyYp5k13PgDVYz7SGccb73tdqUyBimwLJDvFYNnouGpfVKaTP1cK6hCRgVjxs2tHtG",
  "key26": "3TWKNQb3huCmViDwEAYwxMVJDbPeBZrm1mvDRLaVZqnsRvpRtkAg4tRd7FjHFUM7EnRg3FvdN6HHXwiv79JFbJer",
  "key27": "2zFPD1Cn3KUiuWyZ36bnDuMNEqpHUU3ZpsVhkkdAvRVmnwHzw5zPGhmaXBKDf9SaQXM2xzKgx1wznPcnR2rd2KwN",
  "key28": "4usvaRJhxbzK8JTJYQKny2aofNG9166EUuHDA5TVTpvgALPp4tj9u27G2d2nHmCRP2VvfDW9YJxxjyVDmufDXKE2",
  "key29": "2svKkmTRFKUvj9ZHvawqGhGVu3QiepCUQYfa6hVrzXoFRmF8wmBb7THLj29WDxy9X657r5KxfwsUJhoEMdcr4arV",
  "key30": "rAy3BDt1dGNnNxhZyAE4RXirUYiC7pJ8DcsdMsJkTLoB7ZHp1hX8bhwdoMQBhgoFVGUN4xGQtkuULfuFAi9woY4",
  "key31": "2T8dcVzVXZT6MebZSExhw93A4ELmP9oeuj1CWhegVPf7U97shNrn9s3N5pY6jYXVWxZYbGxysHzaWDuUZESjQrcN",
  "key32": "4vGmCTcK4gWS2Sed5yFQesMCj2qE3n7Er1p4NAsj7n6zLNRwMag7PWufm9ib6ttGd825KaovpJpa1m83wmW4jh89",
  "key33": "KJVofdSEdMdriLHT3tPPkLggFy1DL3jKkvzam3F1qPtkddZZoJXgd6QvWczH6BbzATcuPvadRfXjJmDVYQNJk3V",
  "key34": "TmFPQei8jDcb4Vw4r7gVRuWzoEQcXpzEfANZrpkcwHa7MrtJ1BRWNd79esRcDFT9h4W71mJutVJzzfNGjYBWpqn"
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
