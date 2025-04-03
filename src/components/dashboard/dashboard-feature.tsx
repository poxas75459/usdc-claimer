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
    "AsFxk82w3USRg3wNhAEVJ6JKgj15UR3GngoU7qH6wuQhWyFUXoNoZM4bgpn2UKb5cnfkbkJFepPbcFBouxnA467"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZfJzYiNnPKjQJSHLQfw45nK45osfHPD8saLcJuinFKRMmomznSrBBw9cH6nAUncpbuHLiAndSPbSVsYzvpvvC4",
  "key1": "3FP2Fzc97TFNYx2wbswTqe9qAnjgWPuYcjgB1TbWQUBmEy4EfeY3534rw3SSRKg2ovC4D5ojTEzUXFTqbcKq6EjT",
  "key2": "3m5opqNTDDD5Kn3A2xaYEwaJnUnU2RRJFzeUWtLGMStCYFHv1GDb6sKoW2P4ozJxKAp1WBXi8CSZQBxGZWmoGnZA",
  "key3": "34VsArnhdDzqYoDNaBDJWmGX9yXeMtvpzA56Pvsm4KeUKrCdaMG2XH4DYfW81QLqWEhKocVcWGw1Z76pjhqSTKae",
  "key4": "4ajixhokeHkPmzyQiA9E8P4ZhdsA8zLMbKsmxriL71XVAiGwjMDTyreG4hCaQCspSG7ncNoF9ieZq1VDbyi7vhyF",
  "key5": "2TgRz5tPALHBcAFRDygZsymmJabJjMtJysqb7x6Rs9ZfA9soXt4azDfs6CRgMvUJsgzP25nqkeg8ierw4MxiFdzT",
  "key6": "3CRpPTMxQB2B3tPQHZGwUK4UBKvpVqHPY7CWQJcLzRr1Ev7TATy7ugxj9GLKV3y816oRiBTPV1SpousdPTAA1jJG",
  "key7": "HSJXpKNrfn3Vp7Fna7TPJUC1kVFGhajp8y75m1dAvzsb5QFZnLpwy6pdSbgqWXhnpU6iedkRe3M4CbeSgmrUg6u",
  "key8": "AqH2Pxfza6TrVL1jnk4BbCCRfWR4uk5KHS4ivrmNPkYHbt4yxLBpT9nqtkLDVuQnPHuPYdTNuE4HwLa3mRAu5j3",
  "key9": "5kWBZwvHNcUjrLU6CQbHeh2xeTd2aXcuvAqnfLPMp1nugHHVS9J4xZSn9sjMK2EEMhp1pxwSt2oTLRgKM74cQe4Q",
  "key10": "3nTvRa7hZ24mz93z2YZXm6h8hiKz9brHQxpmCt29fn1KmkVehZEtVEUKtJWpWt1N6bxwasS6c7Vig4R1AbuzFaJX",
  "key11": "K4qb3Cq3VVpoah3v5zR1mMwKcXh9AzQyq6JfttD8VGMsZk9yJu59VApXWUD5nBWf8odik41DpBsHaWxSE9mwtE7",
  "key12": "32s9cEVKEzBFjYajbf7qixVcD6iodPwkFMYdYKcuU9wVYLZqpBzmSYq7GDNx2R88FhcWQzbcaZmxDwXqLQ6JgvQA",
  "key13": "3EfihY76fnah5U8ainhuiCf3H4MogtuFcjU8Qv8z6Xnh3kffApdaT3zovggFnguu9CdqSk6fYP8MmWdgQKt516UN",
  "key14": "bp5PXBkF5n8QyWZHE2r3fsVBp4vQjUi68EiZ3RpzfAZpokEP2G7ggjvyiAYY7maBxVKkunp4wBiCdUmYgZq6jJZ",
  "key15": "2dj3emJyJt43jvo2bUzQmKWD4X5PKh3sLKJmM7L9NvLvyi6QWT3YkiVHxsca6ntvUQJRpTpJVubaKMvRVKcneFEX",
  "key16": "5sKNaYH8xGG792rfwKJF8oicBq3Q1dqRz4rtN8A45db2RJGzrTHaG4fDtbnsVkk8yZGgs7U4fzw4eDdwNACzuE8X",
  "key17": "5YknU3UfYCkBZNNdaqbzheGwZ44yubcwjkMXW2jxyshf7uBYB791nMZZvpjHiSzCeVFBkcaaqkbeqn2bzYnzgLDW",
  "key18": "3NSLBzixTrfS5LQrbeHo82YpG2Nnh2eiC4rtqYokHaSHcM5gyfhgJxZLP7QRW87u94UWtpSmnsNJb9hSEq2e6TMp",
  "key19": "4wHjMfYr6zj8THutuDqStEvHikk2jPhpfFHo2i4AT1rqx5Qbt4aRkNBFkANcLTH33fxHRQpsE6QxdN61UNHXVMjK",
  "key20": "3hZDHFKQZyPYfWB1HpyxCiQUdECuUih7nZ9BpkijQUeFPAsztamvjppE48JCPLiJquujJnmAqZdAU9AyyyjWgVRV",
  "key21": "miB7oYJ7iB4HZSHbPkeESB6MaPFbM5Nhs8CZjpUpbpr5YP55CZuxNWgNZxk826zvUw1uDgKT8o6crwvY1mCugE1",
  "key22": "3pfD1nY6dZ8pSkNGNZsmiNwmRLtE6st61w23Sbq3DnEZxSaeUZuCUXiAvGZrVmmpbikAFTN94ptvZgaymwFZ9srk",
  "key23": "Z4ihfPZ81PHjhvSBtQRLV2tc27nbe7PV4twQbVRrytHU2YTAUCVDpxSg2qmD4C2TjrkBnpr6H2B3qkPTTTMbaox",
  "key24": "4op3zc7AeBGtJmoCGaRjasVzXWmXCxwR1Y1FJ7zgM1L5YcJiVmRAusr3DcH73pLm8DMLP4Qgd4nDn9zsqMH2VU7u",
  "key25": "3akkWibpFJuEnWDgyS4LtrcRf5e5FbHvQctsZ1Ywh9A2CnVMG6ycqrViGsfxfcUJ4w9nRjLGtf6zqxDVzNi7VBJ9",
  "key26": "4eBdmtpnx3amDL5NEdaG66s89tPCZdJS1p32nxmfasbdfpjSeD7a8gZDoP6o7UHCvuL1BAuX1PsLVTM2tGoGg1rs",
  "key27": "3SinKSqKi1yG4NPJHRkXCuCZrQNvxEaLxLLWFQnPmJPaEdGeZS6YXQoSgMo4kBEpFmyKh3MBzBbDpJuHGrKghJp",
  "key28": "PLN26vMaBmxch9M6ch9ahy1zwwtHTsE1rojbP5YtH2vRzrijAwDSe9zmutFRDYTZ3uAMBBoz74gVN7TryBf6GYz",
  "key29": "5xSGxkZtQxyCpo2jdXeyKG1yN2xyUscfRLe3TVgobGDusnFF2D69BgUF9vYcxdNmhQG3rMSVbCitiKJppqz6uS9k",
  "key30": "2U1dDYzVBAYria482CedtHXKzhhAEMu4iV4gAufbF7wa6QtHuTnYqxBwki2DuPr3DhE23PJA6cC6RqhCpon4AdYE"
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
