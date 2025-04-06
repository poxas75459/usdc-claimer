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
    "gkiiBvpQtkAsfvEeKeHXiw63Tx99KWKnKkGkka7BqhwjYktLujX1FtwsbVyNLFZ2QxBd3B7W9bTCQcAvXMSMXrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371PgRU7dfyQwKoRS7EBwxKuoyWnxDT6LyoZxW1CqrHeSvJ93gau8R6Bpync3drbEZfzEvddakZFXHZnpMzCZDXD",
  "key1": "3wMXqBscZ4Lwi4aqwAKWgLDRPzK9MDFyuRu1xVouq3fZotwt2i6DQ12W9mJLqqDKrHEG3VasA3zCrSRAzSkAkVDh",
  "key2": "5y7sm29jVXYBLuRGXZ3MLPG5dqV4FP8YQwpLEoUnXiya5TUkpqEsuTX4jKur39LV9zmXtLTaJpRMqmueMymu3oT9",
  "key3": "48TtrSzD4pdkSh3RLuJrZ9epkpXMMkRLFK3Q9XqcLMAQftLkmWbNRVRa3wZK8Ug9NSbTknV34XwAGXHtVnhjVSUN",
  "key4": "5ieUSjwE2NAtUw6hoTuWMQmZc3nNHxM779uTAPUHnW2yqT9BB2tD5UxM7a8V8UhFC8gtrT9kb4h3z3BCuzSeDHge",
  "key5": "wP7GPakQ1M9FeenHbwfwGeqU66ephayzPU7QqDXSoNH7gy2S6NrCgAcVTK2YuF1az88nNGpNJn17KJTFgRQBNMA",
  "key6": "3VQNgn6eHTMj9uEEKJw6Wgi7XK4PLNF5kWoxYe4cMJExFFgYgc6XvSp5FktRuwbxMYH6K2pPCq8om6msHQZ5Q1R6",
  "key7": "2zYgBzUBKvhSZZwZ1UYE3MWAmU7im63BGz9yoEY24pZ5fpPoJ8D2xjymmFKiDi5s8PNFWURSJQPQBAr7Kr2ZrGQx",
  "key8": "29cFVvq7aSh9pzbW1f3hz6XCQM23amDxKswiQndLwCjnqDeZ7b8LnjuvUcYLpHq2zBWTjyGoPWYVGnoe1EiDuheN",
  "key9": "3sZ6nowwfCF3ZNpTDczBtTpmGWzRKtXdTGC5Gs7va9rS7f41URn82L3nQgKcmcPg7RH1PfPwoqRC2S9qUBAECZBN",
  "key10": "3YSincid7U7v2HGHooJeeMVEqARhzrzXCn3xhEqrmiJ3ddoyxpChNCnsmsjn9KQiUjCVoeGD9k3JaWY6X1zemher",
  "key11": "25GsqFQr2jygmKpNL9xnt5f9Jqu8T8jPnAE4xQLsFczja8fr83VNZGSVvSqUu1orDqmnwHKJKyJVWwLHnBq2QZMk",
  "key12": "3ECY2kFZSzCD6HqZVGrJxNsLbUX1j8kjZYhqVsB8QhJWtbdzA9F57ZhoPcRBK7e77F4FX7iigkTgWu695ywowPf2",
  "key13": "43JgmAMP7zWMXrsy7Fj57Ler4sjvVRM9zgpUzyQ6ogJ6kDzqrQNWyppyrmkcyUEKh81qSdNmWvhJ9XdV42Ru5DKq",
  "key14": "2GDUwyqUh3NZmJ6Wv2yKY6U3RWJkuUnrZeEBfAexZyJaqQ1Y3o2piGt3Dv4W6DHAmPF7sDuyqaFHehTWwr5x648N",
  "key15": "27rUuLuDDHSEhsUERCbQsQngtJz5tUNcoWw3yz886sgmjA3qGDApTXFjKeCSFXQLmKcg7A9q1VM9QVEZLzXk66qW",
  "key16": "5PezphGYiZDsiAnqdmda2fszMRrvzKhPfXgnCwRee8svsaYVj8VSKo9pVciLQBQJx3aqfTYGzx8pL4pmroWT4Pyv",
  "key17": "49jL6n76nGib5Yu1ZgAKN3zngDtF9EuoSenLaSLbUM2GrcMhkrZB6KVmcXo3yUQCz7hLMQfE9xVgeb9YA7zxkcTM",
  "key18": "eSb8CwCJTJvGdtUP9v92sno5miv3yfE3Sqi7SkZyXVeBGyXQGpXDL7Fhd59LZANCFAz1d5ScQzmtdPLEVQk6jn9",
  "key19": "4ztSRmLfk1rWqXJ25PmXnfEmHnPWQMG3FCFcy1Y9XyC3yWsaQcMEjE5hs8pp9J95itAU8EJWon8rE8ooxmuLU2HD",
  "key20": "66L9BufxjtQpvJUKZzdWD4Q8kwJQoz71X3kH1eNcC87Ce6k6bE7jhfxeMkEfmJubqx2ZFXWSN4PpSHtoej3M4U2X",
  "key21": "RYLYB1Q9n5fx11FRHq1Q3dFNr1GmgDjaQPJZP5gbmq5v23ZG7pq7pMhw6fFwkJ8xpYrzCfu9r3uxsrc7xSJhPp3",
  "key22": "2J5dksyCCuxBftmwiBtCnvT17ap1UpLP7NMg3x5tPFYksSGZCdHKyU5vGDaFJnaoCNtN4PmrTHxxQxysooLK51Bu",
  "key23": "TLR42eqAS9Xhu9zKrJdfyM3mBSfZYhr5QW8aJKsXzE8HhU9HL4FBEL9nHmDvvrtLXTGpsCimxXNnApzrHZJ25S3",
  "key24": "2EV5CUk1FgohohUMnZNPbDxj9J7bn7ZPNFGrvJ5hbp6YcA3DRdAPqk6E65fvnaajQcDn9E6BXDE2JY45T3khY7F5",
  "key25": "j8uesSVjzaTb2t9BjKr9oonXiMMfBGaGi6iCsNvaeX6v62XCS3kZyGsgSj2qvBDks5K1nLukATygwz4zjwd29Dq",
  "key26": "4rkYWK6cP9VjiUYhmZvQw8tEnbs9bM3z9br7xYVytE6fimnN6g7NCQJ4KhwJ8gwPKMNDGnxkBm9m9ykrYQFovGr5",
  "key27": "3Lbpms54Y8KP9bymZFd5VVdtLVvu4NqpkxxSYFcu6S9FLuWBBMJcCwvGSwVfEWJKidnGyMLMLzJgZfq6MB4cq32H",
  "key28": "4pjzabQkrHZSDig8pnuvW6vsiZp11c7LSrzDT8S9ZTLAzTseT93LQGAErHqV9ZEkEdNX6u14rtkoKSgfvsCf9xLb",
  "key29": "5vqjU12wiynPmomRa2kr5aVhFvPtPHsTQL1Br2k7npE2NyikX3bWx6LpgABtpU2brQqdd4fZ31S3c774yU4XZ9Zq",
  "key30": "3djC5pZusWmhr1RE9c4M4domdoCgxoEbkA95NQZrbxEdWRQjvqQtSP1FtkgqiCkcchgeck8VoAa6eaThZSyaAusP",
  "key31": "4hfVcg5Q5ZZ58p3TaAwCkY7HNGKv2yRE4jkMkxYxvnXFPzviHojPzFDt8GuQpjSmz1WxZTjVmyE2PT1x2VU3ac3",
  "key32": "51g1GkCCw3j57ajKuhdnV7QoRu4LJsCqDeWuwEJPkGrxEggyFZqx9ZLLSazLWUa3xr6uPGCbUzrNUGcfwL2wAqxW",
  "key33": "46rVaYm8wa6DgEFPPhnfjesi5RRxkpb54LLKJtw6avc2Ki151SzT93xDj8R939vQgmrgA4Pe7zi4Yf4ztaYCms5h",
  "key34": "3oX8gnYDUap3tKnPf6rhqMr2NwzV5tZjtaasiicBnVdVW4n5r8TW78FfyX6o9vQpL4mnWPPMsEK4QVbnp5rQ5igB",
  "key35": "1gU7551CfFHYzuYCxnCAZEkKChfh9QSCwyQpd6Q7YXRNdqqPaccSx4zctSp7igXBkNaEsL9irV4uVWsGxeV4J5A",
  "key36": "2ZK5YE5Kmp6Xgr3zLerrxKTKhvpC69hturUjqd6Y37nDRwvLNH8p4g9hSXEv2zLhD7vXUDQvN9Ge4FpyGXYuyndv",
  "key37": "LJwwDViCyKqbS9mhcDP8VvAyQ6BzJKG8zyRBMMZA3La1MsLAer8n8ffiht48w2vWSZqqyGcqVVokHzSFSE1GmwR",
  "key38": "5U8uC4epejU3ZAQNcBadPkhR9SAtxme6BtPLDJYjer4qCxx9mDC185XADP1rCoC5DU7AF17SZBBvQiZrpgJCjmFZ",
  "key39": "2kmhQMTdV5KKfJhK8dRt6cNoknGVRobzV5Lt26B3jyPdNhvAn6UHF11HWCfYbPanSAYowrzJLd9x6xbax8kw7jzR",
  "key40": "4XgdQsvSZQnGmPpzUJbdh943E6KfPA2bzNh28GeRV9DCpcoqQCsR9KvK3r4nLHLc2yJUHfgqbdyEnAexZ9cMzDnp",
  "key41": "4LUAahbNzHyyLP5zMKanCaxmJkNQ3razcs16i93TCNvTqFyzHFvRhvb8jzJMbK9ZvHa6UnoAhwAVWGW6Fm1Hzoov"
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
