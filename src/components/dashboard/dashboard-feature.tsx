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
    "5Mrko5YfvvHEroadAvZSEq9hNVJrq2ksSiFBdD4WxVjdwqQqHZe3YHF6fTntkuqA6Jpoysdz7Xxnx7EkbLMWCSDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKgozuXBqJewNwW9Ez3CGrtaMYyNBubi4PE1ft2Fun2HS6nBNcPnaeVUpdJALzkjVV3GAqYkMfRB1cUTS6pyJgb",
  "key1": "3rd87dTaagiMY4ZtYSMYAdKn2nWC5i4mizFT96Ct5y2BQjwueF8heWFKrF9CAXSre3f7jT5zEwSQZqfY2oVGu1K1",
  "key2": "3yWe2LrZpt5ZcZSeTWeUYveWJw2SQsifgkpuwM6ztQP2tvFmvrw94B7taZFKTVwcncRim9KUvmZTe39cejXcUThP",
  "key3": "5cZNokY1zXvCebaVvDxv6aJNi1zJBJZvZDEEbQD7ZwZa75izciW8FNWi2WrnpCPuNyr65EZMnkyq2jqFmUF6xkgx",
  "key4": "3he5JXMv82dZVvUh1BXMKb8M8ptkRRhyTWLy7k1dgULZM7o3WmBGK1SYSdW64vkWPMrab6yEuAYkSChRGdeXy53m",
  "key5": "PSyQo48JQfGdAKcTs3gR2A2beickL6oFfg4h7aFZMrfK2YQtNYU9ebc1j7d49brXVHKX4ofJbzpmTVxwL6xyUzt",
  "key6": "gYGDXkbpqtaNmqveZ3TFo28puJMZisPQQ1FWHimc8w8dUeLm4iW7kRm51iuGE4oZHWgNmz3S3tgKpYiXfh3XRPZ",
  "key7": "4EdQEjbMVPoGs3HQQgpZamiAYU8C7CnW5oTktatQjvorVqUVPnk6Ba8hWAcghxKvHYeCSDppKbSobuh2bh7HuCk1",
  "key8": "5cb47NURoeoPXqvBS2DAsMM6X7ct46q9GaPcRFb6DEMKc4Qgbba4hYj38XkTbogB5HVYc3CjX6MJrvhCuBR8RdXL",
  "key9": "2XsDa4e6Gm28mVuoqiLQ6VvAGEUbjoWoKsiC9X6LkAvppNQMvZWNAdAZfsoPsE351BQ1X6hJygkyPKgeeDLiNeXU",
  "key10": "8ZceYaL9dDDdUYkL94uBYYSeu8u4E3fRVWdHXFVnG1YxcYZd7JDnLjRKoFD7ZKZ8zxfXeF1H7Zr6BHNf2Pi2XH4",
  "key11": "25PjouFfR5NGFEvZLUJ1vQu21obkhSH4QFS1iVYHH2WjMr8G8LP8hU5DminrgsmPAB7VQQhT9GJJgKAKsNFht4K9",
  "key12": "4QDaRg1ECAenGmmTrvSZRh2cRoMJWAd7JaESXa7rY4JBnbLUcA7259TF2jdoNQopnfGHzSFej7TVpN1yUxUFzt4J",
  "key13": "2TiWGTCdvd4NTPXyVEhNR6CEHi8WJ3MPtBLmUJZBZdkGxyXicguC6mQBFyN5Ht3XqSBUQFX1CdM5xtBKbeAEMw3T",
  "key14": "CqnYTVPteXuUqW9aShfTfH3DSuU5wLH776kaumP24Q19KMDA9NkKUUqAr5ou3ZvUc5yyq2yHyn6Ht6p6BiJuRmF",
  "key15": "LJmDFWKGaVCQQnDp6NaFGHfwXarWRRYWXDzqNpXoCWSRwrtQ8w4FYbsN7jYat1BGPYg1GJkikENBtekBiZoxEKo",
  "key16": "3PmQmAkpoWxGeaUhshXTk7YsN59E8KAgeQt4mbNWqRj6Q5i5Auhma5mS9b3xA9LBkW8CSUQfyaSqLi2bPEwkQmf1",
  "key17": "2WinzP63jceHkE7C2RRkeSfowBqqWGDr1fQKjgxsBvnAd7wAkW3SWwP29eKDxiwNWx4mVEZvaL9hWEaBtqAwLdFL",
  "key18": "5nqpNQiDB2q1G3voznnJZzjPL9zEGgzc2AhSNmoUbWKQX2QtFm14oQ3vne7cw9bPzRfDRGx78qi2TyRPbVGCzagt",
  "key19": "3fjEycoGZb1FBdJXtyHhYucZ6nqViWZajEhDkRcWQviPkag38BmYxvSqvdsxqbF9Ta1LzHykXwF7NrrtxL6fQhwB",
  "key20": "2GHgFDputV8VTF3M2QLqdccqVVaT1To5enJzsXQdJbdggfTEaxrR8P8YWjQnXG2XuQgP1XsvYm1mDqTd67UuEdGo",
  "key21": "3ppVjXz61kL8b8wnPcBM9WRdUWgULvmJd3FR6utUS4oB9r4rxQnLjJwcepM8k7tHvBCiL9jkgUo5J9oQtgGVHp9f",
  "key22": "2GmxdXUF3ic3KZC7XhvuqkdjjSEwp6zF73Lq3hBE7n4SjjhVvj4whNqZSZB3VXHAhV626NUBZcp11iGgzPTbsEoj",
  "key23": "fErLvGGPaRbo8y2vC35U635ue7XANGt5psbN6pycKmf9ciNuL6CBHxgP6gjUaGb1ZgC536mSFD6pgsGTk6NwMRG",
  "key24": "3afKT1H5YfoWGKm9oGPHk4SGQLhq8qhSgRQtGh5LqfVbFwch3wMotMjzfj1oraAz9HKgsytxrnQQTP3gpNAKJbWj",
  "key25": "5dcxbm9uSQBy6hHgQsj6QRocxpyzYU8PrD1nhkNxt1dB9DpRW37DTVY6yWvnJBT1HSqWEWQ8Q9EiSgKz79x2j3Tx",
  "key26": "4BdrK4UfjYAxQDXaadGtQTiHmCkrymAVF2RUrK8HyQSdwWjkAJXARdhfXVysFbdgfuTYi3DiJfJQ7Zc1uM2L9xxX",
  "key27": "2Wu2ucCZmdeZEPPXWwbi7WsPNTSGXJ4FXF8vvjbWq1cQRW8ztuf23XK2BVnXWZjXZFP8Q2dpcEnBxuv8txzZihda",
  "key28": "3TsbbXCr52NWdXf1hgtbhR6rE8WF1CXch9ygsEU9vTuCuzuv8zUP5tQPAfTRnpjyumNA9bN2HXbAhPsUoMKZjrpJ",
  "key29": "WTDr3tjjbcFB5de9P5faZQq4772Bh4UPgihzXux6Cc7t9DcGLqxzjDeuoQxB9sTNzx1YZNf1Y9Thop57DoXHY5Y",
  "key30": "2yWBv8uqyarF8GN5Ff9FcmK7RbPzPAQGV8dEpse1NmxmLMvyDFdbhYRLdKzmU8uradjYvFH1GEu49HVEywPu2vjE",
  "key31": "4N2ukwkdcHtDasg2VDZYNad8c82NL2FVvyZtXqyQndZ6ACd8DMwf4oKbWQisetEpxMb3VcH8GFUdkHYNJrVVhkQ",
  "key32": "63WPwGY5iA7dN9zBo8y2Pbv5GfiGTET4hJtSRvka2DtkvYYPZv3tsEcm7UQGAP2T4AJkBKqY56KJkrAXmKaujVTm",
  "key33": "5PFYsRc6ASi2C7Eww2tJAqmhQCkUu6zNjHcBxVK5xjqutVR4iC7WkTtrzz6uxKSmCzPBBDRJRHD3tY3SE9smnd4j",
  "key34": "3MnjMAQiUkY2XnNy54JhkPJ9VyMswHTx8tZWoWFPkKVTU6j1jauQUDUQzLDnQjiZMFsUQP9YSGgwS7FN4qC58BGY",
  "key35": "21cgqoGeqZgSvDHEidLveDXj8qEfwcEEPgFNuBDPDXykEWADiBnGf929y51Xxs6YbGPGFFdpqydYzyqWZtcwq6xT",
  "key36": "5bbtatz8np8tYwoZ886SJoG4eqxv1YrpNqxFBfUPSiU1oF7z9GFUD6DenRRzh4GBaMrcRMeiRGtkUUqEYD5ZV48M",
  "key37": "3DxCRnu76KVLNZKpKZkw5gK2thkTLWZpER1hNaFDheqJt77AysQjMLJyGyAgLhDUgtjxbN2XyCzJG2oBr9SAjYhs",
  "key38": "4Q5AyiQAxTjknyGia3aBUZ7tpKGXUKUv2SjkP4UFBmwaDM7VWEiZfVAQe1uNpTCSmfdBXyCbHAkNmuwKF8LCmct9",
  "key39": "3QpSB3bB3jJ4TW9boJG8De7QLRwyQebtDfCmvzgBqSaH5dENZADqULntxXTqseHQua6kuGeteewdtzZEHGrjaTpG"
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
