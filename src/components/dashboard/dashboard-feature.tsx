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
    "3fCqy5zBHJ9CifjsR5RAx8pyJpAqJs2Ejnu4tK5AmXMsuAt3TJ7suA16jSo51BLuz3VTMjQYxMo1T3Dcp7G6rkZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUL247y4dT6ZrSfXFqSRMrgZKaKsFRdcJ286RWMteth93C4qoHCze65Kz6U4iDY63mS5iAks3GDeMQwgY9LEnXE",
  "key1": "5TP4MgVHxWB1fXLnqpCeNwgGRtxZ77txq5y4Q9dFdxgJCZvtgCPQyeBPu9zaBSvL4e4tEUE8Y1sckKbULNN1go9b",
  "key2": "E2b1uk3N5YBfHV59TqPe9tTE6q1vo6rLFDZXvHq4k8UZdVAvTzh61mYHmAYAYiwvLo6JDBnS1czTySSTXN8GEKx",
  "key3": "4Z2crZpRorTDxwBUTBrntw5aMyFdiV5ZTqcPNVbncEBr53Hy24MrRGhtASohGSXk6X9smo1z5DHoW4cZB65RA8x7",
  "key4": "4x3adMtDRJERBWV2Xj6ez7kqwActZwFYX6sywiXXMvVG83LQ26zDtQqzcVRwnNWB4y4U98FF1Yu6wtLL5fCc8uu2",
  "key5": "61fPKXhrZF2npcztKtZH2Uf6et25m4AsHsYpGLEb4XVrX9PYqYEFj8mpWoNBpsHjjdUsXQR5xTLkMFxHWgBqUsjV",
  "key6": "2ntmqKN5gt6NRBpzR4WV3WgYD9UqBfoLCJqUL4g7DXGCWzNMNVamQC6uanjGdX7Y2a9U9AxQq6UamiujGfCkACTa",
  "key7": "3DbxnvoN6BbDkW2htoTS5deJE6hWpXBPi2eEukVgY8f8K8tNeo3LQZoec3De819LiFzJUeoo5VabZUayoffETm7A",
  "key8": "2v16EPvmYCYjdfhqyi86HTXqi8crcUYZwcUY8fFcjUa2wcnqBsdT7wRhbwyzYW2fRGXRucDcjswmoJVcGFRh2jst",
  "key9": "5D2mwgD3ZRnrZLpfbttraw7f4MqTPLdY9rGkLg59uNAmuxWQ55vR65xSJhFABWDfKhCpz2JFZRZa8MuEcUbaW4Vm",
  "key10": "UfUSEnWhx24ubqDiX1bWKPGWdX19N8z2tjmfxCwqAorD7Ngjr4X5hBBxtX6XQWHUqTfbDhuDrybv6VbhnZTLx98",
  "key11": "4TqEGcqks8NJeLaiqLKnqwPGruEwGr9yU8YMd3Lewbk5iF8Y2Twxb9SZtx1NBhgtFFbeEJPj4axRSRCyNVF6k1qb",
  "key12": "2xohmz7eQmzMWDTHXr1phzTs6HXGYKiWewLfXn7AfxE449GjfyrHiAPEEej3ki7DRw2YqUVq3ai13nVR7RTuvT2E",
  "key13": "4VXzgTdH1GBEmNiuT1P9FTEeDovVKVxK4Lr8rNuQCL8jmPkWBtCYSCPJjQKc8cZkGk1BYFiVa4xqnH5EWMYutrnp",
  "key14": "55RkCpnus93tYCr27kKY7t2S3sj3cS5qospMwwk1MJE1oKnvTYLt3bVggytTfBE655vdTyjSUe9dNBEe1EPGMRdX",
  "key15": "5uNLwc7rmvkzyKJKCDrFts2bkVfUZVU6QZXEPJveGQgjg1voh2SbVCocnqz9iqj2QPi11ZibBWSrP5seXRJVJ6F8",
  "key16": "4jxF3DvvanPTj76mY1URb6ZE1FSLQopZZPJZNsSypLZVC9jkpPVKwg9UEiQNNW57EvRDJ41HHizyiAFmunvsn1W4",
  "key17": "4kaZ8heaMVtsS5ZFzrRJhz5BJP49GPqUHKu1XQarnNTwvGswwoUWokR4DRH5zcz67WS4oB9MEB2Pi7KbCZiD1bbN",
  "key18": "4sKX73bb4qRxZtpgeQp91Nee67PxR4Qj4dcKzkPz8Z5eFQWLhn6B6THc1vsLNKkQHMcqJMdf4oj2fptxN4m5B8oe",
  "key19": "65xweZQU4tV4SaSyGtMFKKzGfqcJKmuRk9hMiMLeeqUtqnxV1MUju4gy1gyTVSTy2raKiqtmRwENHjvxDJhLmj65",
  "key20": "5E6g9Vz3CcYi643nFAqQYn9ChCpU4hdKx7UBUVgb9KwQVJaA7MyVXqY2fGBrKvYBNbUT9zeAFAxuAqfnFVaX4Fc6",
  "key21": "sdRHb4e619A3Mx9Vn5WapnqZ4rD145LRPMhTXr7iy5eorXV4FJTmDh1Vj93UZJ9qfKyg4BxsGh9SZazv5PH19dy",
  "key22": "1nwuBKXWSV8n1MN3MTYKgN2z9oKmijKFAgDHyZ7rceLWtbjNERy7eLvpbqNBKADhdzrrqz61qaXAAKNwV4TBJgE",
  "key23": "585ppu98vuiUed6ncXvjUv3qTVxF6SPwpdkUn7rKbKjvwWPxxdbyHSh9JTXCihMF4zzLXaYaW9fGQevxcuByNK2q",
  "key24": "4xBbLLmzXMLELCcqrxYr9WvXhU49j2yiHaycatgE93kE3oftmbV2DFSm9z3WyBt7ocv3CUisvmWHYHm7uH7dWL9A",
  "key25": "2xmWXRb8bwjNLrg3Z9RnVoTmXjoGdT6xYpcyU8QU8mrYiAG5uu7TAdoa6cRSbTEQjDfpYz63qDy5YbFQjUjBwggs",
  "key26": "3zNch3WvmbSw5AtWYDCcSAaB5bJzdwQd6vjWgA65f8rzAamckXdtGAjQNo3mvGvxSdLk4vv9CjW8x91C4iN4PFQW",
  "key27": "5gWNsX6WM1jCPPUZLWCMF4giz6rAk5amCkPYj4h4HisapYbADvDyPAHzM1zxZdpaF2nzrcerRnorwZB6stMY6n6s",
  "key28": "2JRgPwuhPzvX3kuzFmDLN3iJGF2opMCdQkTRjz3AYwZA8NSpcNVnY3rjismz1deeLdHTSx225N45qqrowVTW6Q6t",
  "key29": "3m9MpJpzZrPa8wt8XMBqgjGp3cCcvzzh9Q7uGQ2CAsWiEToJ9NsLXLCi4Af9jZ7RQxFcUJrPcEES6pywNaND5XPL",
  "key30": "2kvCGDMHDq94ihs4A4YMVvXVMm3WpNXWYyCecQSARB2AyxS6vgRF1fwg5Ku1c863FFbeXUBzFj9h58BKUvwSjMCM",
  "key31": "5HM7ZHR2dDgjX4tmHGxomgZy6LpidZ5yEZFnzVDwkT5MKnLgKLM9Y7AdsAaCshtEFge12WNJADEXGbXKEb8xwomU",
  "key32": "47aQkkpNUd1DM3uPiSRjzJWAbaD8CzMBhfE3n7kJzsxdRq1YrmpBVartjZHb7hsncbqgqgx2pqRkYHDtUSo5maqp",
  "key33": "5iSHLFvpgBe18wAQZAEVqzsgXt1jj3qVbh3EULEbtFt2VBWpBBiHcUvEMTNM1AreRpkfFmYh2Tu4hAqSFLp31WDp",
  "key34": "2ohwFzKV8hZmFjwYgRkBKp9gVw7HzigZgG12A4nJRMcKNGAuihfEWoNVyb78tfwsSaUDWqZbAkYGeRPyHppZcnzH",
  "key35": "293aXYyQGpQVD3EkjgKcGmcTiX4iQJKBTDBXbbssTBr4RwrWvJ4BQsDhGHjToJt2dejykRxpJFugyjFmXusDM3UC",
  "key36": "3NtoUH3EW4uBdXA44ciUAJUWc5aavW4pDkjqQ2zVjAFeFCJoob6uoow713vtXRf2fX6gcwzqW4FC6xd9bTJHS8Bc",
  "key37": "2uzC2FxAmgPG8VVoD8gjWwYWTxcLrKxiow2iKHuZw68M7qXu4voUotcwmvR3gk5ceJBH63xrg4M9YddGYWhVHyfq",
  "key38": "4DqrbKgy46fuaecPWjdByw4GSvjnDNUVuGnJfynbfWobJJ9nwNsFreQvSHnkGbHbpmvVrD7LF6435pb2V3RyuwGN",
  "key39": "3vXwJ1LL9wLvhabKpvdYxknTN9DnRYYs9CdFeRmWCnHPnNGhZ2uTbgijkjRz3HRtfCL6CwJMVwU7GCJzxP7QAz4z",
  "key40": "4z1NeFqbEyQ2AbRCWkAqVVbifsYgGYfxiG5zZaESbsjz38VvvbZ2rNXSCzvXEZSKAkQV673hRQmwTFZd5E4DvxBM",
  "key41": "29MSt64QQwvK9XKyKLH4wkFtbUV3QRgSHVrbY4k8VRLa4PY5abfynwsh1gkiPJrN5ZfMs9LCj3PzwTRbpHCG8pUF",
  "key42": "2xnBQwKaceGWL7uy8diRyaS2LwYeySqP4LoNHLALugbtBavStFQcnVcqaXZXPbfAywKtCmTX1NboFYkheVMkQfqj",
  "key43": "3LJBPW4UEHqqcLEQjeosy3sxRgjMkCnVUcY7fU61nVrKt7CMSe1p845TazdZAJWNZqxLqFNQgyLnwFw1ScpGm4oq"
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
