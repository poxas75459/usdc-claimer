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
    "2ZAsddwCM3piZhtZFpnBkyZoUddQSSLUjtiaJQPkJUCTwtc2BWuLPrKQUUw1nLXsBt94XFksoDFzD2dNNSFYDvkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXKk5AmwQzL6dgHTbWYQb7VBGuqwi5PRuLL8Z4tDNJuxJf4Rn7UGVKCrxwHAjRR7YcPVSwDGj7X7QZcbMea6C9j",
  "key1": "amh9qhap28FZoRfwAg7AHfiXxkHY7eCpDzjaHq1529DmDAwhs9DSFoViqMtdSCaUtCASWTU5XAApSrn12EYwgv9",
  "key2": "3n6rZ9kRkyv46SEKtBu7ZMGfpfoQqnaARRFXwiqWqwyMakgM6tQhPnmdJeqqpup8H8a3kkpXcVthtFZva7EmcPjU",
  "key3": "3UacBJYkNZ3CQvcAdxeof9dt66rx4kqRAbb6PpAKM4S5TU8vEkwBqXJSDZ4rZPUvXmGk27qbiTc6V8sQw4ygvTmo",
  "key4": "4Rcoodp9xr4ynmPeZJzm734FjkTgrhL4bbSMiC8JWWTNwJ87CDUpstrQVZo1JnSB8E9wJbcPfs6yjqmDt8CkwC23",
  "key5": "4K1wjDLph53q42jRAEu1L6dzVdSVjGnhRx1h5vVhZxSEQvfLHbYjBN5KGHLb2WNrjKeRKC4tdVi69tTGWayXw4vJ",
  "key6": "29RuJXZEKqRVcpAMsCTyxeM65mzRP1Ebgp2cqZiMnBQD7Nxs7Mto1jH5nQbtSAyySJpWYzzBBtJLV7NdmZmJeAvY",
  "key7": "FuMxmaH72zDorLmfCj6S9rRhvE9pXmXqHn3Vg1Wnj8ALbmbUC1dj7T5GH8a1xz5JsaoHgyURjA8R4Fi68dQTuxS",
  "key8": "3CUKkKsyut5gSiWL5W8njxSKDuzwgXnmedtqUb3ot6SnbNAw8V7xySfKbP71dvaRWwcbEgqMLdM9JKQBwYHiEN3G",
  "key9": "2ZS7G269PtjDD17y8jWJFkYSoEnVvkcL4JLVEWpJYb6LqykAzBDsyxMHmCvA64kceJNuvV3LTtoZrH9Ut5YSBEoM",
  "key10": "4oV4HhUJhGKQ92nwAVLPxCfBkdMgi1EEndQQoH6eqbua5NRfoJwAaKSYhL9cVqUvVxipzuJPyVCHecJdtcfYyKdZ",
  "key11": "2XjsY1HFaQAXzy3aJsScENsv4zjpzuKhJzrHN6e5nC7RkFoosnchbPKa2zE13crkDYTZ4PreN3DBoS5BRorPAptd",
  "key12": "2TTzSFPXhM3EogfxxzFzkMvSE4FLKDH8N2UWcZdUP6AZiB8rAt9LwAo6q66vn28fqXZ4geFKgokt7fyiWB6YntMs",
  "key13": "2P73FFD9dMrFEKP5uefDRHN9gQqFCbVHi3FuYXZberz9DoZrRUEmrtFt3G1D67PMETYSgLbF86HvHbzzWqkKrLqf",
  "key14": "4bCVvZcdfAATnCpDbHG93aHJhQotBkTjgNHtEuLPavGNYLHvfqn1JmMCrNMaBvo7eRoFHuyFCpJkyaH57fRqD8Dy",
  "key15": "3V1njj1VfAhDborZTQRMGzUM9jCzpfuy4aqNGMnphummbk4muT3dgx3TiSLDjz1ydsAuK2obsd95mfpvSaCFrERD",
  "key16": "GjmQy5VV6tEx7pcpH9YyPQPkzFGnDCbjRdn5Fr7vDs6y7BgVkDyh3z5eQta9khDHeLSQHuPqXUGuLWCorWiWPPy",
  "key17": "5SPYr7vkcJuNzdPaCinzmkxBt7CcTY7cUiPeTBnmeqrVRZ1K7UtDH3DCoqvZWbedu81TTC27gEXLz8QBKMxsvqLR",
  "key18": "5KDSYDf2JbsJqTURo1ULuGa3tSrS7k6LNi855gvWudebF6ozRSmypP79ncVK4L8WepyRHcpgTsQ6DndgGDkqUe8a",
  "key19": "rfRbjNGq7GEEbSYSZ1qqMivyimPeDb2MJPUnR6T84zLKAwyKcM4vMRsKrKZzYr4cB4foyMjUJHfzQgMRn7wg9Z9",
  "key20": "4Fm3RtmaYKDUed2fXH7RQG1YNgFZq1JZgJaoS9U5PDQ4eVgcJpVbUyHtHye3ABa1pTvRjStN6gQHTjTGHidtsF1K",
  "key21": "3sdvY9RLiDZdjC5vygByGur1aWqckFdbr12YDFNLcNMDSbvQsBuzyR3Csv6VGn2M4XeGWo2PonDuk3SoiJSqq8oK",
  "key22": "2maPNkyVQfgayU3u1G5to3tnK48gPNvKTqFNWrsTaLHGCQ7gDhwcEPNAVRdL4nLj2rF8VEcGY4VZBgdgY2NFFun6",
  "key23": "gwBP25Kkob6oUMwaDh6jyDiGyKKM8ncEG9LqDrsGWByyzjBDYgtujFXwarsNHfbPFQEi1M7sHdEM4s8bja1wbtU",
  "key24": "4rXCMJ5Jq9R7QkKGw9zGuynzxVCEfWm1YCLphnA9TXuUnuzepn3HZg1dk1uQj66Mf3X7TE71Nh6n8eAsm2TFZo3X",
  "key25": "66ZnVJZQGTYBbgKNN29SiDatXe77gngEK9FHvCNy6mP9FLX8cMzbP8KNjABTCu8pkY9E6ngtv1A5eEunPKMhqJc3",
  "key26": "ko2vaosZee4DKVpQ9FGzaoVyjxViRXD27WtrMN4SuMdtJRMGD7z8FteYuKbyR5JoySTCkaf5Sv6GcgSxV9pPoki",
  "key27": "5s2gfEiYmf7CDcshSa6Z2fXfVbFE1LtGSD5HNiuyAiiP4RRaE6NZDZ5R6nfT9RWeAn7UF4oZ2YY5oQsvP8G3F9tL"
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
