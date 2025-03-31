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
    "VvhBAXF4aBgWGESiWCcMfrKgQFpyitrmuFKcCgV3yJ3cbkJJ2wdqQFKMaffHMsqcYVfsmHuNPmXZizcFozqNhvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRf2FPq2jVUPxc7qNhjCu5mCvuX6PJbTP2sDStKcvcEydo9VDgJ7TKjExwji42m8zqhvniMDCs1uai9JaX3ci4i",
  "key1": "3xLMvNTMwEhbuSbQ5A81F8wDV94CEkdCyLibYevuVESSzA9jhDzC1gYWEoWRYsLGb94soSSGganx3KhKMtHxVYNE",
  "key2": "7XtEkEckPHUUpG4SHwDo7BBr3tSj9YPDfGJm9wbbLQHbfL2vt5cdpzVPf6Q3MwPMAq4xFbzPoLSCjuzibuGS4g2",
  "key3": "4eKQvxSgj1b5RnJrBGYAruzGEArVziFAeGbtkbw91g2YGSuhLDwjt8Fi4dy6zmytpEJjC5teLqTXDi3DsmeBeyjm",
  "key4": "4FafsHGALVSR4HX2w3jFckrKHWg4qkTkUqbPFuyRAjb7WRv1jKNQcsvmAJ2EZ1yAcyTQzh1R5cBNasKaEncuqczJ",
  "key5": "4HbZKyYAKps1zqEu3gzMHMx7hy2kWUuPd5XVF2Qmc3UaAqJB7PCdrB4U9H4Sftu7cQZLBdTAahypjLw8NDmPKQsS",
  "key6": "2rjoyBD4fCoApEhUM7LWAPUkMQBZpzj4sQSjUcK2QztqciQywRRtWmZLmR7qou9Afix8H1jzTxgJFJmWcNMSGDQ1",
  "key7": "XJzr4958rRwzf21szDbehe2KabWYVaBUeg2ZBeCcrorGKGYriSwWX2bmJXp65jw3vpSyoXhHZcBFdZmmi2PJqqh",
  "key8": "2WBvSyxPBicX9juyCDZiXomw7Gkn3fdqaPv4biQunnJgyPpbxcJUmS4JBuzBb98mhQnTSzRwm2bxSGtpYQDxudyr",
  "key9": "VnZX6X9QTcgH2fDo2tG2xvgNNuVhPRoSbWu9xy5prVMgtd5EjU3rv4gtdYg7Wt5XQWx3ZTS227LiqjftA4quJW1",
  "key10": "3rZ4TrJqxMoc9eAEGi9fE2Ao6vYSFvyvkA2NyYXsZMTTYU9CW2PSbYAm4keHauvSKhLGCkyiJUjSCRD7Ys7dNDsA",
  "key11": "2SikaDtm8ZyhH5BYyFoRarcK1hUa1rdqoRoiJ46iLPnky1gK2dp2tfrHgzjidUyXky1BD9gqKe32wiezwZgWD2d8",
  "key12": "m8NEXUkiqN2sayVkavCwFfGukCok34Yk5r5rXRQPcgQLi373LYRCL73CB3QbF65T5GbZTjWK9SpzzqUG4vL7scL",
  "key13": "29jDfxWqupZHKyv7mbCCyAAHKEFbrnwB53GVEtt7Fesc7JHt2hj9qLBoJtL3cbaYvayPr6jfX3n87j8FwtjC72DS",
  "key14": "5cFyjdUrgBHZcLweBjAySiH4gxpUx1F9PEiAr7nce4BvuhPoFbeRgopaCzizSZxpBHeMgSYFaSgr6ryCLif2Zs7z",
  "key15": "uMCTHWAGeAKG9A7fJRYMHQbXUeCxn1oQqTXvki8Ew1Wm52N6jFSDxBNGAYApR4oSqqp2DPM4FpgJZVNBDfpQf9q",
  "key16": "4XmARoVDYcev2WswDUsHvt7p5tqJYouAr9xjsjTk6vC6rBR5t28doFyZ5gv7aRDj9pebc1WjGrqJNfYx6Rpg93re",
  "key17": "4kZBfAemjQU1BYsrYBtaJmNnGYMzeyZkMtXJXu522Em6ZfMG4phC6JySP3aNBwX6eY4gmS7JVDftJubYJcUFxnPD",
  "key18": "4modgFsV3rTUU3rot8BZynhAnzNa18fsDTugehSNXfVxRFpmgfTzCrS1XkPKbz5CLfPCmHaWJVBeShztUp1Vx8AB",
  "key19": "Z3vsWo5fCkNZc8fhHVsGUNeXRXVi34aKVGTzg6DtWpRRVTcDpSKihe1ecSEQx2uvUSixiNnYAqjoeoCRMdd7jpT",
  "key20": "4wf7xciq1F1zkGvAYkACQquv5AmFiBm6ACjxnseUNpd8rB7DTJCxbjzpiNmPU7s7oZxxkyrZgZGQW4u9M9CTatxX",
  "key21": "2VSK7cNDJwrVx5bjcpumvGuTDDuD3A1UopkseB6ZfSaBaMYKRvFzrvNdt4wGMyn2ff8RAdbA3AbJQXRYmHtkiBmJ",
  "key22": "JwP6mXobAJhePfUfNwGb1NZbL8jd4E6MrzD6pVU9hgya5FuGLAsv3TaftjBqn4ohE2A7x4bw7yNpvzYh7tgc8vb",
  "key23": "A1sXWcFzrrZemWpdrSEE7Lmrk7WoJJPu2W9YQF8RUbtKonUhunLTkDdhssNdtWVNcgTRkJo1yXmCt8umASjHwra",
  "key24": "5pREm8o1yFYNVf8JDoRoKwR6WH9uDyy6uR2A4nj3hWck4QVTd4XTTdx71grrdas2uWMKXCqgRvyue8HkVuDWLt7K",
  "key25": "5wahk8ZDrZ33j3GsankBAZeWTzWDRZpVBHRfBiQrsR2QE6gb3WNB2uxGDZ4y3n5anzqLqwjCtXmPiBmvLZhxvrjN",
  "key26": "5H54PB3FBQGUPfN94R4nyaQ7E8xz9Mgic9sonqY374Zy4QbwgAUQcAkmxtRniswTQzhwLCRXaXXCv4UAbo1FYKWT",
  "key27": "3yCiej1EceC6x1JAF21JCf8wDAbk6SD3Qw8ApXeScbXjmuUB24DpEBJ9wQa21tRoQhxTkSPPreyxvN5yFTg5NNwj",
  "key28": "318d3Q2RP8tNkRQUjk1yjmLFUZfRptTbD9Db9k5tbLwYbKBfGCvm5YHwH34vNDSCekaF6n9rRxhaskhcXLUu15pN",
  "key29": "3Dg5knf5Q3su2vZTeTAx2GLBqrLnRX1bdwsLmEL3G4t8BYeLJeAxZUkyrZJehLdYudCoqBrPhi8punwzt7TCffTY",
  "key30": "22AMTL6uwGtgjrUj8Li8BrTSE8jerD36MLt2htyxangQsFo9j5a3g3BLdbKFTnUFM6r1XRgug4j4RpFP9MbpZQYZ",
  "key31": "57B5NJaDsUmM87zfRMj2h3H2Xq4sEVHtQVEeBRZVnPGPQ2w8qFZvt2tEdQtfSN373ahJfnBU9n8A4BXcT5vS3FsH",
  "key32": "2QEizwbFi5yHLkpg9JHMeCCVvYWRkpj4wsP9rHtwrvQqFKwnWmLZtASytd5Hv1YFkUSyRBnjYJimJx35TGuYb9DX",
  "key33": "4zWSgWQfUhoYjymVXCNCCz5xSSJM4ixmCe4Au4teQJaT3yviPaMNUYhG9QQe5Wj9GXEJqrHB15iwvvbaRyptr54m",
  "key34": "3iYPjfYSBYUCuqHK9zw4F61v4SGBAJtLf8PsznQ2u9o474uoxaKPDU4nPvnri8rPkxB9JZ1hTZC4GD7tjDmZYuGJ",
  "key35": "46KAYtW1fHTGX6rrUfgLCeRdZsuCmHWdJFBwaCXbweXA6X1edmuLckYVsdAgTTNW532WkfSbYdz7twfyemqFmWpW",
  "key36": "46sDFa8WGjaoRAYtwWZ7HpF4Q5ZdgeoWV9ny42zGakx3VvgewqvCny4B2TPuKmrPTeRiARbrX9mrUzMNywhqYQEx",
  "key37": "57CZo4wDrBVNUntWQbhxUTVFaWw4Ew9cunacUsHZNqRSv6JShacFNVAztn53QE9XxaaHsTPAaS7uyuXD4dUjYwun",
  "key38": "K9KkJszVRva5n7fPy9XxVWhgHtFWPYCrDdDJBHdv68tyjQfxNLiLDtgqGqnngiXSaDVccunzU4vwroj1yfjMuB9",
  "key39": "3AYT71wzzAEuPjJr6X1M5NnnEHKz9ciGsqv3yFh3y2KqP5adARkFzC2x4pDErLnxpqzBxJZZKMjAo27bHPSTsttS",
  "key40": "5DudXDxtPKpKGvVNkgxxZWkQYQ6513qkZuzxrFaBHTm5kJFyRQLQSLPRDXQErhCP2Agc2HH3fWfWrfAjznPkv7qK",
  "key41": "ek7J2zJDPFJqFu4wpAvR55nwSXsUrG2SPfWvBVxn5rHXTwRLfdP3CDjgtaCYx4SyE18Ao2M8FfQ6CVBo7gLLMux",
  "key42": "5YYdtokqy7AuGvGYpF6nY1SCDJvsr4BgSzroQBFwg2jSXmNHtQR96PbkWmcxQRRVM1Ba7qxvEYF5bxUnpTQqfkn5",
  "key43": "4ThqdjfybvNHB1zqZcabfm2dSHZdo22ftFGapQ45seDkFaXytWHZhoBrTUSacXpFiAqMJWeNDjrpHbL47sUNWNQx",
  "key44": "2obWLXs4iY3Tnf7wDwjp1wdGM7Kaq7bTtm8CSxfMNxbRdKFEuSmBJDbhRkgkKjAtMcEZndnNR98BuyfY3rDQpfjp",
  "key45": "5BdL8HCiLKQtafkm8zRrCED7Z2DdXRtrQ7Y5F9V1fFTV8zYEkXAvFz1ZHXiVZdmpUVa8D6e2BFGMFJWiJxyBRSPF"
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
