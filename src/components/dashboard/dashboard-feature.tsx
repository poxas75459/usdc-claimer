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
    "3n3Z7qwD7QbjNqXM58s5dhhkgx7JrMntgg1agZYepxzDfb8NAXfgEuQbBv9KVCDc4LaPcFgnkfiJGJ6gHkMJLvvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNaG8Cm7BEDytsNe25tExGWN3WjH4VfaTpTAbmNBsQd8CPNdfrKMiiQPGJwppfv3JD6QnWtxbqxLZ7WZEMHjp2E",
  "key1": "4SLtANgUS4Wjm8EnFYHMN3iVNwCMBPFjBi1WGyajwYxjRPiEEKgLon5EhFgZ6yNsRfxZdJa3fVKvzpCMjgYC4aJg",
  "key2": "48V8hzbduvhadHzRtStP7ajMHRpPVTQmmz7w5dQGPKuuydE2kwbACo73ekuBJSvaVBiDfuV3Y2tEWSW8WTkabv1f",
  "key3": "5qeqbvjnpAe83FENYgqZ997GjYx3iVc9CpDQ5jQrCq3BVDPxjou2DRWr7JP39mZjfSexQDcMsfU7GTo8uRXGA9sV",
  "key4": "3oVhDwGQ47pW8373cD6hB1YUfJgADYMR2MBjeTbH3ji2GNM9SVZdzxZuRLnUudUnWt1UUeQS7gYiFPontSFHuJCq",
  "key5": "63dfWrR9nNq7E2ufxngjmDs985y3UT1AD3CeW5sb2Cmmj9iP1qcgHokR6atuwRjtNN2sUMRQcW6C6pYt8DeRdbJD",
  "key6": "4uYXqLHCSe5c6QuRFnSWgdANABpwvKBZVe3hAf7ZCQnKeA5XaSvXXs9UrJbCtDUd8HUyGciCBSsft9TZfJGdUozD",
  "key7": "36M2SXgHjRCPNNzqeurtdh9eVAjuDzu7rMkaX9pdz8jtcKgMYbaCSV9ZsjJ4dBCewMYCGyfAARAs4KPv3zU7YRZi",
  "key8": "2Ns6ndED4ong9fxodEwBB7dq9bCBrKBVnkjmn8DQxpA134TnDAqxucMGNEr7C6APBV71iXohgpMCGAbu6inzM5Wt",
  "key9": "3knxBaxHu6yVM4LqH197y6DJYVBNRcKojr65WsoqVzBuHubpvEz4pTo81NeLvZZkfNLYvSN62qQRfyC4GQVF7Guf",
  "key10": "5B9rL3HRypmaLk2QtmfkLXaiFkvf53P5U6PTWXFn5aRKJbgnXQXFEpYff9NQsyHALXK6KksYRUgiHdV7SzgxnLUg",
  "key11": "3xDVTtBpu8j9zpnZrGsVeBNsgFpDeBR48qxC681qSbNgKQXFG7XH3dMdsf6T7cw8PjhrtyLyNGE7YhCFGiUMWxp7",
  "key12": "5BJzVL4jewXVntmBXhmZzgA1WEucu7kHx4gBfGkT8LJrJ6b3cSjwTkwjhoyV18V6v4uj6qvPtMYoZuSD6oXafY6x",
  "key13": "42T8C8ydUrmbtGYLruoQZ25jMVhgJBZ3FBY87iAbsCsqLTNBfAApJmL1hyyuCe1XgNC4SAxoMsWzL3nL1NT6B7Uk",
  "key14": "CQ1JVuEQBkdDZwEYz3hEo5qGZzjRnd2WSXpbRXLvarYz3wrYWgV4gZosJFRxGASfrom8XUDkwrtoaZEQK5QxjBc",
  "key15": "4R5R7MhhJvnwMjyHa4JMDCZ8z1cHbqZnBLBE2DLufjWrMjFBRxNsth8J3t72DUwPVoh1yZuH248ZFtregPsvGJ12",
  "key16": "5DR19QjqBTjzkRVfUEx97GQF5XWhCV4qAoPHwr29jzABZHgLJ9NdZToaMcFrv9aHnxbZNW8pLhYdBeBawd9ndAH2",
  "key17": "9D4Mzf3hejyxbnbP4nQMxeVDiEEKsiCyvjSEmPVtPdLAXx5TiuvGd1sVRFNu3mXc14PHBnCSJtcrPzDCkaGRbQk",
  "key18": "5VvmBwVEH8Vw6rXsU5NcVbM6kqsFeE2uoc3Hqh5SmUQWTehu2RnNeZNRBUpZxnE9kHJLMuVsUSCPrujhjjBLZZgJ",
  "key19": "5E1m1fuY4PZyARSzYBPX5qUicSHijRQQ3AzGJqUWaUFqCNxYYL43VncWkwMC7PbYw6HXbLCt8iSuT2DUqjh5Auu5",
  "key20": "5Dp2v81uHkskPafCL3WjtbYp8o56C3Jus8XcayHYPYyLyMvUhtDyBP2QjRnrBhS1MGyntLkcyAvLw5CG7bjwtz4c",
  "key21": "55AnTwZAjyEcTUE3f3z6mdLDCrSRqCMMFHkC37GPyQPhbD3tgTQpX1KN9DzgkEmhXKGzmh4mKFAgNSDXZUvM7Ujf",
  "key22": "4W5KSq5Quw7tCkEpDfhKMc3eUHaC2rPUjTQFKTZVsgqhn4a16jVcCHYup5XARQ4nuYdvif6WpydR5c7XqMZQvo6v",
  "key23": "xEAANNZg5Nqv6azHGRJBZffpDxBQNJpXz3NTUjyEtbDN9JYVkD6Sd2GSxtDK3sgTegAw92MSqx9phD9XZmLXobc",
  "key24": "2nMhJZ6TyAYE9ffFCW58iyRfZtxv7aNRieHkB2FvXAmUNPPHX3ikmZGFkiBNLPVtegNtNG4sUBGC6wdzhKwZS2wC",
  "key25": "3grcLMXQpnQRiiSRccAokjzqdS9HZ4r52JDnSxBfRtD4bjQSyYKrZAVJTUGeL1DRNhamt1ZLXfZSx9niXLjedxgY",
  "key26": "3UFWmPc7j8Wcv3ewAd9LCFx4R1K8JX79oRVxatmxbbbj8J3AmBuprEdpzAb782uXZw6rKzC5WxPaQLU14f3cvcPk",
  "key27": "2umCJ6gxRpQBarpjWeseqY3TGcQbZ5ftL8U4EiF2GbMNYARFi9AMAMUg52LWkpfijS1JAYMUneCubaZiGb9xwkKS",
  "key28": "5QXiDZgqdvvFhGgDpLfH9z7DpaJnUMVkXJC46Y6DxWqUKi9H7At18TBWdXdGhMUGtC7wLDFGNaD9W5tJYRPfKLpP",
  "key29": "4oNkTYcXqxDQrBYfqRwXKTTK1vFvsFKUNvAmcAHx27nvAkd3sMU1isDY5bBJ1uHdm6kcuhhFDMrTYHFhdR4Gi6Gf",
  "key30": "66AJZRJit3dnDKQx3JWC9h3NNkdYdcVY7SGv5nBYiKDPBygRjkSnq4bXKkEVhW6u97BZZT2DqqqafWkkkw5vQ3WS",
  "key31": "3sDBGXeErnaHj7ewwNAsJNHvhgmDdtgUaK822e7AuRQtqjTWHFY9fx8cxMFzRBR3oxnxLLYXhvdtfpNRtkdxdeZ2",
  "key32": "58BgF2TmF1HXrQwh2ReWbK2aMiMA8mKK6isB2jPZ47jP4Cp2gcaZT9WozP6CvF4vn1BsDWyGSz6KfciSCWRagbnh",
  "key33": "3QRJjWbCRRKxkRUcFiZYLpzBgrHXJF8eFPtMEpDkGTp2QkPFp7LJZgGH6ZnHaMjW71VNypHJF2Mpc5dNUQPg4VeK",
  "key34": "5WUHkdYTQnUkjLjWbbriRQEH2eoJ9ZA5yeR5ndpuCGFFCq4XtLxxq5Bpi2Ksn59E34AjBwAVPaS47JU6Zg9aBTfi",
  "key35": "4KRecYHPTozCbKZ2et2NoxK5BQSAbRyfuUgYME5yhprsggXy7BuVRZnz8dMrBUHvWwMY1DzYGWzVCPYaCWDTQCrw",
  "key36": "5qXJq1fus5eNfNv8PTHSxFP46R4cjP52rkyp4PuLk4vQ4QBiRajrJPzCnrjTH9hqPaYYTjAB8WRG731sJgyoJfdm"
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
