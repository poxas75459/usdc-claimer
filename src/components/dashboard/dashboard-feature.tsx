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
    "3i8mBgcG5kdSWXFyZ6LDmAa7faMREhnzeyPUZrWa2nz9DhjD1WK9dufayTznjz93EYqR9hqxrPgYkbZB6jR1GzHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oi84z27WVajhm44eQkmuNhPjeokNRz14RyGPKVkg4t5E3Wu4qj9bo1STwtAvWpyJ7rQnQeKrpaBjvwy1Zx5jUM1",
  "key1": "2W73VXdypbYV4M4jfveuDhzf4Wp5psiN7BLPcqG3SDRxmPSh8T47SWsdRUKgv9LSacZDPn2RcepDANktAEzkfkoq",
  "key2": "5tL1DG4HTRzfc3Gndxd49oCK94CWYfCrHc1MbsyU7XEHX3NhvG9KiFhFgzexnNu1kGTGYhw6vRp9pMbok5iZzA82",
  "key3": "2927i2TxgAeyHuLaGyFTFdrYcrutxKykxDxP4ogZwrsorQbcwDDNbB7nD5UkJNNdth4fJy8BD7UQPPaG8mxLXiRG",
  "key4": "3jrWVp9EEbPutB5kbVKVyTL4EEMNUzuLZdijEfWda5sU9Hy8irKgZJVVdXYVshrHRguYjrV3y97uRNDb4ouNFa23",
  "key5": "3yUNx8fRXTmyDPcyS2EimnmZDp34GSP5kqVcsN8B5pc4STkZZcL7nd7UnweB5zHDPgv5ys78NUyhgM33nBnUkijD",
  "key6": "KNZP8RE5vV2EnXPRL5eyu8kyHKg1yaYBiWiZMfGXwdi2RPa7PjkPPyQHag7A2dNN5UqrgqK7QxtgAeNTWXrsFKB",
  "key7": "3xM8NCxLchr6LjtZaoEKt32BuJTDec1iENdhhfQyyGna9nLLh9y1LRSCnGs9K6ihcDybyLjekJddTjZjbEuJUGj9",
  "key8": "3karWPAf8vfGRDngKmBbd1rforRRV7zGM1h615quMoN5aeddu1H26iK1KL1j4GrKv3x82UAyY7E6QrQqoXaTJH1V",
  "key9": "33CHPGJn446G8dQxF5pyKe8wNqLnyeewCK3aoMKeMSheeZj3gA4GBLCrZvTGpqrEKATWHs7BDP9qcxZo23ygHMKq",
  "key10": "2kTa6eqtFQW6YtJeoJ6qrWtdzjZrHHm3UF9KXEVnGUibBaEXkQ4gCECAhUC15G9QXghCEtVLkcSxCyhxvyrdVJAg",
  "key11": "2wyziVzxs42EhcDmyy9pACQcesca5ryHuyjRgY1u2spnQBFsR9pEHKnG7rp4bwPaDbFGbNCptJeREokSqnNZswot",
  "key12": "3zwcWvaqgQjJpWTYqquxYyyggHP9DN91KK2s5DT165jKM5iKPvMHUfNURa5cNAosLW6Gi7PKhd6tEJK2d8vWUbPU",
  "key13": "5y8m3Tzirg8jUJ6oCqG6AmrphrHfAcpwVjdw47PsMFBhFQJEY8Uar3qeQWYWP3v2jpD8TbUBHbZmdBdAaaHPoNMJ",
  "key14": "3RvpNqFV4tjGcbHSX78aj5hUsceHiu3DGDmvY5ueaWLZ3Y2yYyUqBYkYz4vSnuAijKfWmVarhPksJHrgd9HvbXec",
  "key15": "63Hu7ySDAxAt91vRwG2hH5z1m5zeTycGhwTnKvpkDKnNZ1i9cNTULhwwtdwCQS4E2oCsbadhfTyJtzPVNGtHt8Y3",
  "key16": "4qnbnPmTDY3UeTT3Jzwd26R8GyT1ApxkXC9ad6fLtL48i6FG85xaMVqKUtALgj37FaFikJjyfzM6D5sT9ZAAjwZH",
  "key17": "tyCV2zorC4wgTgLRSZ6desZvn5iYqpH17DSm8DCXcJjnVEKXuoZNsWVSf17thikrqgmiQPpa3ZXaiaigPP3viq7",
  "key18": "2v9ZqkzriikP4CXCpTNKBjMJq3y3T1xfJ1gKb6Xfjor3gV5E8tQLBoLRvJb6r9Qb6sHioDpMmY6UShmmeU4Tmgoh",
  "key19": "2pzXQWGqYbUANiUJPEKQFar1jBFqhLtLUumuKLNi4ChySvTarahckAUi6Vz7BdkRBhG4cg7cJ1pfhmek39BfctAB",
  "key20": "62ZhtjBKNhwWS47xzvcTFdyAitkgHu7xqEsKfqZMHtdZSfzd8dEvGz776z5XqbePrZ3ooLaBRXWBEhVQdJowZUFh",
  "key21": "5wPGfuTW9697vSqzsxZhTn4LoyjpzMSkFbAzXUx5Q1HB3ux2Gvzb31WfSsQYqfAPqd4eNbu7z2D7hxBPCG2BQeNB",
  "key22": "48EZmaaXRxxWxbhW7E3KburmvkVcWS8FSYBN3idm7A74oCj6hAAYHjfeemGveW2QRPiQtosJ5iSVwCxSebixZB8n",
  "key23": "3xRGzdqLzoJTtU77AuodZJb3hCAQuPj25XPFuTxj7zsGYZYMqFLKrPEZpxSecH9Azqv1btRLshWta3UHg8smdcgp",
  "key24": "4MwW1fNyTQe8NgH8yv2BzTmkVw7VfukLcvmJmbxGv4NVgQGL9D3Bim6tibCohU9szqaz5Qdk3JfCzfactJu1HLWQ",
  "key25": "4hAWYmFhzYoaxmVxXdMxWRrKWtdHo4WimV1RQ16WASvnGGuKAhp2VJBRC3q4yyoP9kqMRUjE7AdM8nEw1WYUvC1w",
  "key26": "37VdmaPV9iomenifAPhciW7Kxb1k2JtQL4NjfzedUjBPD7KnD1LTXpwkt4TSCgoStv2naeGUh4wHFbAZCkMXy4WU",
  "key27": "3dTjZdRs9ik9Hz3c8poWEMQP5U4tsqRFL5TCpNwGfPC35i9usvdyzFoPBgn6FW4dusdsatgVUy4TSfSQoJyUHUM9",
  "key28": "XQKbdX3CnuA5rUHA36Gf87gFz1GYwR2KNSw4gqszsL6S1mnZLUxn7Xfppp9tP7fo9jAtYnc4VCTVUUCoMwXzV3g",
  "key29": "23PinCdcqDUFuLFQAKQNAhcirqWswSpDb3Q6YTSGHckJiEZPGmgDP76CjuQEaZgqBPYDsFhAs9ffvrGpx13cnNt3",
  "key30": "2DaqHjF61KQqRFxvZBcucjUCUHsox48q4NBaHeXRkuczwQxFWEJTA5Uo5DH7zKg94SPFuSRCTCWYNcsTPVUUyQhy",
  "key31": "31VjaQ7k8r42YXUnY3p9ShLaLoJcnzsMVgNJvCCuh87Ky54w5S4Urx9vYP1kouRZ6cnGpc3xwRGPi53TeULHQ34H",
  "key32": "5jbLeu3L4anD513N5dTJeDgNwM93Ko5p1RG3gVZLFQ2hX1vMgVJTt9D7Z4ieYviZfdcZyxxLDQc3ZKjsmnoHGRRX",
  "key33": "5KfoMwiLqMKMiHzZhEW4zwmrvQpafQVt37MM6XPL6JUZE5zAtDt4K3bE1sKxb5LUvtxs7JVbMLABMBjB8XWWMb55",
  "key34": "5MASVHoC2XNFcKzAm32CchzBdeDcRcwEh3fmG1er8muuoBjvvE6eTRqzngpSzF5CVsNMzmzaLkQpwQ7UKAPz93wC",
  "key35": "3nnJTJWyFecj7CLWJvaaBjYvARNyFjDYFK1DuAXafmAMnPys4B7DbB6XCMSrEXPBksbpZBmuPVP45d7WmHJ3NmdH",
  "key36": "3tfuTehQJFXTyeg7j9BWfitfP5voHTYxTe6ppGNEWsiqsLCE1eUsF2W4FNwPCYZ8h6E5KSL6HQbytMvg3ugnUaMQ",
  "key37": "2m4pZNqDBBULvRjRdjXLiFXUsyALQABuazJyuxQNWHHPqmKV6GTaAEc1tnAyYUTgbuzrewZTvYqbU3VZJAC6Sfyt",
  "key38": "4TuqypzAkmZrn2askkfo8Hj8kMBswQeV1DTZXMxnxsn86Ufx9KnVXaNduaUYM4sEn8yRRcPrxdCk38RG9guBfGGr",
  "key39": "5RjB7LJguVtDmVTAwxJK1V9Xpq9r3cagomJuvmZuBtNVtx2vCzsQEXxQBVcq2jQgMynDpkGDcG4vRjcK68o4QhHu",
  "key40": "62uQZAy97vmjmcFc8rFDKZWsggMjfpM61UHE75WanAP7qA8duB7d7r1a1HsVnZn3ivGj1W8s1eg7heEWSBWG9tV2",
  "key41": "4codhFDanZzm7TRUHHynX7hZaHve156MPwxm8p7uWnGYhkWJjD3Uw6fRCj2nDqqypFw2HmyCGPd7qv4m6s4XSefR",
  "key42": "4jGvpvPYk5VaFVmHWKQGnKravM6KUFT2ANDVcH3f3ciHBa3imikZG6WYZKFuowmGgmjCur7BsmN9MbqG4LpBqD9W",
  "key43": "2rtWeD6kRcMG2GxdNP8E7dbP6jk6rHVBAM56JHecYN7wq31zKAPzUzbfWZ29RR8MXXad38bo8zL8novSbqDj4sYe",
  "key44": "2WfukNwBK6UYcXNB71DqnnNdQb3Soa6z8fwnZCrJJ1nCLD8tnsHJ6pQW6BbKZELhGRP1cxTinNs9sGYb5JgF2WMG",
  "key45": "4koemn9Eh5LzN9A31BXvtQx7KHuHoNXMnaY9SSqVV7QCkLvruEHmXFEhULnof6W72vcRbA4JgAhxf37UKEYFocQm"
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
