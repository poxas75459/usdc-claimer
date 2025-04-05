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
    "3B5iJXbTwWgYyaesvYhmYACKVGws9t22gMpb9RzrRavKSQT8dx9xSfmDM7SCVaXfpwWExFiw3ptFxqBuzjTryxKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BhPBLacgtcdXtmhg8cqUMDjwNtDrYnu2fRoHhJnYWUR2e3g3igkvURHExcunQsFUDzxxUmqNLQgEGJQx28KSJ5",
  "key1": "5r38nniDRsRujXFh21cqit6wHZy4EBrRumpxcjDoNj8RDjKe1aVjvRzBbdZWCDrzenM5sxPJSMt5DTGLh8WREYMC",
  "key2": "4UcMCWyNPLNotuybbLnRpp3ZyYKGdTioX3zLkMMgwVAzr2casYq8wunUd2jtLXfJd7orDg9yJqiHZ4JBHhr2Jid2",
  "key3": "vsZhePFzzSvREy2X9iiRJ1o1t14rGZwdcRFJehDT2KFgwPiJ3AuuQHToGi1JQhLZHLs79o1adpjCwfX2tvBKUdq",
  "key4": "2kgYcbj5KGW7UWrB12x2W4GDTpEPpnmUUFGH9BxUSYEvN5rC8rYx7fy5zr7LuXsQ5axd2okc132fTtzK2fZCMHSY",
  "key5": "V1Hc7v4svL1rU4TEJA7wpT1qrQ8yY7eMNxoLgUzkWAGkDqyHarMzzrUwQThJRrYUgqBsEWaMmZW6pFnXg2YmK1Z",
  "key6": "3Sd2RJHMEeUa8kwEoMFRg4P6ck6AFXTpZf1xKZxsMrAe85KPLVA1Cdk3RRriHCLcxeHjrWcWXyW3a2ocZg7Gj3Vn",
  "key7": "4XCVayLp78YXWkQAorpYVuNf27YL2yhCKmFSbqFNmqS9quDxvvKjijwhcdgWCNGTz8Guc1ToJ5kaHhhCJdsEXvXQ",
  "key8": "2EZpphTAQnmjQDbL76oj3MD3p4qEhZmeZboMXXh86usGmXkc9niNGEmZiyn9HeKARmiodrGkg1T5TkddfVayUMMD",
  "key9": "247NhRgpYzCF6yc3Hekwno3CgZArcuXjVR3x1WNU4ofnezLzKxumouvgAAAiFELm3DPhFT9EQ2dGfYdtuBZXyuox",
  "key10": "4PLDsCisdCWzSmVK3Yr72WoZeLn8ssKQ98Z7eyeGCh4YJ5PAnEe7tRsWEK8mteyTKYSn3VU1425B9GewbM9xHK1d",
  "key11": "4mufF6Xc55dkJoKHSAZLYSqh2gre3h3nsoCLG1hnH1SbCGcXk2iCnNiRAWmb61h1QmbQQc7ZGMaRkZ8h2ceEWMX8",
  "key12": "CZUhgEEZ3CHvU6WWMBmMk1V5kbWQ9Nw1i7QN9yEJ1hBw1pExQW2dbQoJRieG22VaUaXqpiMvikcyhtBwv8C8XE4",
  "key13": "HkZvdnVmEKY3gFRH2VqxRDn8FGWB6ktoP8daVYn3Fo3LGa7gBCmo1uPgVdkcxr5oQKzrUQQkGzPGfbtFVMqU3C8",
  "key14": "2YCpPmkEJNLdC2TLzH4XLcskoPuVhToBrJGopzjfwkzxP2mC7fyaiwg9G7ieYFihCxx7nqY71unx6SC752QkCCVz",
  "key15": "5PQY9QuuctaJZygegH7TdiSTU4dxmt7DuXyekZ5FR3VSHoDDJriQbmgtPoJAM3tJJF4YogAtRD7cqYzUdnoF97rh",
  "key16": "4VeL5adx6DVaDBAi5s2MAEzwdKGPUPZC9Tg9h5BKm2cwwg3Az66zSWmHwh2ohhywqkvhbKvAbnoiDALJR49pXWZ9",
  "key17": "26q7FenDNk4Hi1zoL8Y5zxET2uPMcfopPuPC2mH1mMebARuex6YA1rxEa73DS4JDC2QEtvqkgQhx3HDGPDe9UQhs",
  "key18": "QMBiTevSxG7Wrr9S9nag5Za6CgXv2pdT3uUFB1E9J5fPJcNwkUdGaCeV35Z2JhhNHFntcoYtPSkaU2ub27bT652",
  "key19": "Jt4armw3mKR35nBD8Jmt4K5hrSEBAiY2aMEm8MaHQiw3HBSxCQGCGM6wMvTaZQmPMTdqgsLGuHNkcWREF49NmcG",
  "key20": "42uaCcQ3CaDhTsgxmV4xk8zzbGzyTP28BAzbaNQFaTDDbagCcGjDi3zf9u55SA9jRTJQQQ5LaT5PmrMzeUDxiDsf",
  "key21": "3UnJ8Hwkh7iysmGmj8joQPH7DryFR7jYu3iNE1ZLxqPTUmJ6YxxVfnqmQMowLGEBkGjK1A4hTK6irZ4ZxQuYjMmk",
  "key22": "5dcLPtXLBcuorixbRSggUZdFQDCRLp9NongEJ2a3MLsmeqeGQiiHB97r8wf2Md7JSMMypRhYTyUQNVjWvfKaEvXV",
  "key23": "keo2FhFPkUS4NTQdixgL5Yn61K1s4VSaZx2bpqJbuLS87qUXNhuWSy8WY9Hivp8rn6HabSdgL9tLZAo3VdeTtCR",
  "key24": "2XcXQuga6guJbYdtL1VRoi23bf1gHpzNJhummuUkhTdmoSGDkhWdy6KfcMzJqrnL6a2RejGn73xmuDJWiAXNnKuu",
  "key25": "2cDSRZcETQCJv1WgLx2fVsc8BCxhMmT8WYX7rgrb9LN3khpb8A8Y7atuUvPekBQnCf6kxRaSdJHwFxwviSTngDnA",
  "key26": "2exV8wFhYp4wL4FokFj1AT3FnLEC6r3mjsAri3y4SHGFuBCw8hMFksQG77diGfYUGk1uXoNZ5PK398NZBxPZEPkW",
  "key27": "3im1wXLNvA2uncKeXmDfr1ddj8X3xAKJahk679Uc5GidwQ6QRtMiGoMUy6UkMxBYL1wDmNJmkTr1a7p298fNPeZZ",
  "key28": "5RGfqB8ejtjqC4GXHirmqsxkpy35wvEhq6sbKWSyPM3jusfFWFTbFgTfpB2e9FyKsfWemhjLEUJpF4AsE7KPUiSh",
  "key29": "TNzUh6UizeHvqXGRJbwtev6bfayxA8Ukd9Wcb8ERe6RF5SUgSyWkwYGY5ZQdYDp8d7HAyavD3fMx6QM6zGwBEWg",
  "key30": "4jbXKnVMwG7Bg9AP3LeerVCotDjp1mhcd2DD7LPg3ncwpcRfDiKXKVYXrqdTDwZK2Ctmjj7MEyUg4ncKNENPzxoC",
  "key31": "46YzwYZYJbfXZ9LWBMsDsJWteTBpjKw96g588Bp2Eorwi5mqdS4NmcSNyvgsFroVdq7puNfUUx3r5vukgpMqpVDo",
  "key32": "4q4yN6VQZNEC5sEgLh3qNYyCdrRurV8ZXz8k8K7fEigTTt9sKZ6g6yRqRZVCCxKGnWH7e9TqnZQC8u4QUWVWw6QQ",
  "key33": "zzf49m4NjFPJLKpmGrf8xy74r9BfDaQz3SgPjEq3qv4HtQUdA1sWFa6anK2scmkhLCDBfw1m8JErHyd23E6QNae",
  "key34": "3JNnHUbaYgjFogNVuPZGGk8vUv4YujKd6UMAmv6ifhwtPdj636LhNVfo4GyH5qLJb8fFLtnVUvsGrzVjjnfZnSW",
  "key35": "4Qa4Asqd8iUBLpcxqmp3MZ8QeDCRdyzZU7AuFufakQw4w47uJ9Vpt4175GqekS5iBErAg5sSPN4BwjEUqDE2on6x",
  "key36": "WV43pfzXdp7z5B2GMJXjAmvRqu2a19tLiTiG5kE2hahcgWdknJvanCKhkhiZUxoZ6mENoZH9N5Q9RgL8EfXtmV8"
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
