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
    "3BHRNdxQpm2526cPgHggj7Uxi7vaqE9hx4FGz8U7QPukovZsKtfRwTt72zxCkHxVKcJVSoTGwh2eMVHihT8aHy28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqaDcFhLbEzWReseqZYyFNvHJf6KjjBEkAAVvainAfwieVvhezCK5hLy5QgbfbC2e8MigeXrL2g377sbzfiFAB9",
  "key1": "3SLGExbckjcYXwPDr8m53hJUvPWvpLvqnUYQ4rNnkqx3nuqnu18NPdahe72Rk2anoMs4rrqxMDqnMYUvWz91Hj5s",
  "key2": "59rnfy2L77ryj9ByvGXMrytuAVCz9bLDz6H6i1nPicCBLLKHEPt7CowZorx7ZZJY4WrpREgie2m9ieo2PcuZ7Yy3",
  "key3": "etLq4T4ZeFYccusJ7NLCUh6vVeHZpUSbcsYhvZJfcxChi7WeXYJ2qjfXxjtGdNANnD71G3hjP63sttvdXF8yZBZ",
  "key4": "3FPL2fA4jEyKGCzDdyWC9jtXgKudzB5AS3QkdyDmtGDJbhRhUQBBRVAiUdiCp5EAW83gjuFwXBVWwwz2H3iQmwEf",
  "key5": "52Viis5P2QNZurijmTNAR832KjqxNrZmWiFysYgP76PBzQTP13SqcVzt4uFAKkpbNDLsraJGwAcAxfNKLTAPnjsg",
  "key6": "QXdjgzRDEaiTdsLypBJJL8J9sMwPVhfRf2wsTG5DxqR5V7HR5bcufjCbsashLqUDYGVeqUp5vfxjbtckiyon7oQ",
  "key7": "8kJt6as3gJV6ZDcBhy9maYHXGpRwPMVt4wmEXWCg8xaPCigminUf4UEZBN6Wz636Hc6ERZ3bz1utyKEcFAit4qx",
  "key8": "63RHbhK8bb3KJ3nN2sfU89k5QrrJ3Lnv2Tjxu5NaAkg6rrYE7Nhx3gg883APNviN3AXt8qEuyWMSnRZSmftEXFLZ",
  "key9": "5sUqDb2mng4NHWxnCvH74ShHwzzCSrSAEhYCyZaL9BfqE1Ff13i9Pe7Ddd5kog9YHXMW13DXnPY5Z6f9rvQZFY3x",
  "key10": "5nXYquZrhv6c2L4BoDvxMoEs2FsmWAqRt2Jd8iDAiCSLRRRSzgUxNVsF8diBVcUdY4RrtAH8U8DMKKm4FC5w7ftf",
  "key11": "23ZPQZ5FLvvU8E3PkDc5DYAi6BwgtAtFgtmpR49KWD29QYmeZhNf9csXm4p5gMvgMrGpi6otnTQsTRrQCGwDHNew",
  "key12": "3Qv7JSJf2uePbWnrpDwjzkoT2hpkPmTHSV8RQLxdzYvnhcaCWpbo2xstA5trZt4yRsETDcrFGr9Gud4jjYVKVsUZ",
  "key13": "3GTTtze8MyjwB3xzmgsskfT2SGQUDph6NvmU8hsVTFCKsJQr28LNTbz2ksQT3kyWEiAGHVBhkPHmQHTLmCfToNRz",
  "key14": "2TLotcxiaG3phE6oR6bBKWP4BnsXgKDhEHJz4bUdZRghTFWHyZi79FyHhSVT8HDE2YgRLabTxUGrpoyMVdgecqYf",
  "key15": "5V9j4t67JZeQmZ87qeHZNpXUfbdAibxTz92e6AqR7UbzEpu4tV73UtRjYuevyz3x1s8hKvsZEP549iU5AG7kzgnq",
  "key16": "BXAfW8p5UauCqb3Jh9Hr4Ry68LJzdAqrBgiomMw4WyAgMaTzJ74nY9JBK45haXUYpDezJhzSjT4SN2P9ASMCeEp",
  "key17": "3ofPwqk91xiBA1tvi6FE7bzKbeY3Kynt7KfFNaRTPWWuz91ts3t4p7PReDn4LSN5Tir95BnNpj6ndhAPrGzP8JEu",
  "key18": "2f5pr7dxsXw6yhfQEgJ4vhiwyKJBMYSpuXRWFExWjjP9jfhNiotnbhcAaEqyTjUfMHGqi2P7etSottuG9TYSwyus",
  "key19": "bzPShy7aHrN6S3smd8q8bYfSPPqu8pvgDgpoJSNrqn8LjyPzFvQuUzCNT6zMt3ZdebY48zvf6xknYDPTqynBPUM",
  "key20": "5CaD1vko4SYcDrK42fCHnt7esUCoM3scJJAPr4pnPZvFau3PPhfr1EJmD6rxewrC64gpD235FhjfhaL2qbESmsdW",
  "key21": "4oYde3cimxFoZkAwFfCU5a3t2ZmYb73UHWE1QDo7ZnQHd3b2MjrnKbCcjqtU378vzv1pZS12RxHy2ciB3VBPm9Zb",
  "key22": "5inWXazZyjfvMJh3Pe5m13uq8PSaAsaZjv5x6SFjWqGj99bvKqXTq7rMYuZCQswE2fMysTtM4KdKuTkpNZrXLTGc",
  "key23": "hnVgWpC4NWf5x5mgXJuioxFfB61ZZHE8cNr3Rs8GFqcYGT5uCY2C4NxmN6UShYmaRea94ehDimCBdknrXDsUkof",
  "key24": "1uDbk938vVT2R4qgMtz2K9Cgx56Tu1RXpCxwWRgeUzFr4JMzJvCMeVKNhEqU2AYUX6nVQLYF6nzNNYoCRa3Jhe2",
  "key25": "64ZeGj5CGTf3US1aPoBYqX6Kxnqu69RDd7Mo7rvoY1bvimoEV1KWCyxBEteGcLBsesvX7z99vcdDYqTxv1PeLTns",
  "key26": "3WvVyK9hjaRz8Ymb8MUkhebqRWixvecGGemQHimhXQFuUaz2JW5oRQoTSkxVtbFkfV4hfARSMGULC3ai6hZqTV4r",
  "key27": "2TTvw8bRRoQ8UahTW6G8DpkBmvDJQRpEtAzPjMxspvpYyh3nJ8WWh27ijxHztDmdqr1wPhqiRAXt6wSMzVJPjZUr",
  "key28": "Ttu8TNZZh8oz8wYiFZkHPLm13ErUeERvhUCSAxYiovM8B8T1MQ5kaGYwRfsZfAgGjier3ifkrKj1D2EhCy2Pr7c",
  "key29": "316m9pXCeXXFiQb6Dz7R5mMp74UVkYWgLQMfC9aZtK28R6TqvGwcv6fJGspwDpT3hXZ86pyw36B6j8DNQ7thL5c5",
  "key30": "63epTtEqoGTgX6prPwCpHZEbvtVJyvaz5BueUHnxTDSfEmMTQTvVguBjJEP1ttJeV4Jb7myDTsj9Q6iJzT4NKgym",
  "key31": "2eYrLtBfgpgwGUSgnwzT3QwgiA7nFcDhUkY8HHDgCrfQXBp975sRaoq2r4VsBRB5QjnFWrWyWLuQCVmpZ5YbmDDK",
  "key32": "3P88S4SAgJh8meKF6oTah56MG6uSADbndhqFshX5AqSbVwYJzRGTTTFtyGWGLT2w9uXZ5Ym8VrDsn6R63VHoAp3X",
  "key33": "uDyHSp4rgYRQRjWhmPUZ7KzkA7riRQvgXN7ZB7VyGXj3JcpkZEvYk6jofy2UkReMn7onfJUfSUzzNoNn9kewUp3",
  "key34": "hHVYLUUZeixzvnnouqBMTuiCxmBtdTuYGafcm3pc4QdRGS41S9KPBEgiZxc6QpxuARMaUxwps4y3S42ni2mkLHM",
  "key35": "4dM5hCEcCf7Q97bPk9Ve2PemnMn4eknstLHWL3JCyKDtV9qrShp4JRx8Y4R9xvxPCrHCF6aBXKqkq1NzhteaCdK9",
  "key36": "2yPAib3rxZJDn3egSmgdBKmhb9sb2fKRZEhYGsPCZhq5vm2bGyypJqw9snZjqAofPrfY994ZgHh7WsVbTTnqnVHN",
  "key37": "4oEbzC7EcdWEMMsVWmwK26nhE8fRjD8uzqocUVypMDL9tntBeQef8CAj7xcbCtMxwdQTfxpk3TtiCwZBofTXEXFr",
  "key38": "3rA9vJfubufiULhEZkFi4CysVeEzx5T1nAe8a6J7rVfc1gaVKLDTVLWbjUu93nMT84kqseRVpApA9SmvQPtP69A",
  "key39": "4ufPM5pPMCwTsAJdE719CiyRChtT8N7J18xF4jX6PvJzfURUWhnN6n8bNx5nnt2Hx84C2rCrs2bubcmiLH31rkMa"
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
