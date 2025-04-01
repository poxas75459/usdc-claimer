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
    "3JQTv9mZCY2RT5dmcyeJCSkut2BKifMZsVeFJ4sqJwxKqnvmPYo6ZpFXYESwksPcmKs9ysvkK3GKGt2ChXi8raJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDZ21hC3sDWpmw3wXw58XcGPeMcWNXq5Vg1m4vLXrcwWwR76mgE3o6VZAVskJvoDiuLGVshJesVmKQn6UqVsgaq",
  "key1": "2AmcKF6bNq3nFcDMdqQ4TiQWPJVnxrJRojxgidgJHebWuVUR83R6zUDVWBuChP4Fe5hWuBRTd1VJQnHjZufcTy4M",
  "key2": "2YAjVJaoZpHCSm7VX8j6j3nYAps1GKVJ2YfTbPvSd8RtJoKJvCXx7S4GMjhbU3Gdy2Lz2bdgnbQ8q7w3Ad5e9hMC",
  "key3": "5kyWXj8Z9XhvQjxSjd15CXPGDQQ37V4Du3jUSBejxVDA4PgW8NjE2TTvy81y9djzfc178YCECKq8BMYjrST5P2N7",
  "key4": "3W1TrGLjR3nAWkmYysourQpZHmvUvd7DwGKayJvfPAf39mRxP2FKkrJmQKQgXW3CM7kfooT6quLYHkm4hqQh1yZu",
  "key5": "5DbaTCz8DpysVCcRd9PPThToAf6gjBELTVHn79k5YHLfqvTgfixmYdPZ83SQPSf6bQirNdw9XVXutPNaW528v91u",
  "key6": "oP6rLYoiimmLPyYjqwSyEUs3UdMZb2m3gEqpuq5Kr4d2uQZ8mXBz7HvoGHpHfYDTDBNLEsd7JCsLXhKoFDxiWNA",
  "key7": "bqXStrjEwDXtjJdF3FqTKMUgfgxGvJJMyezTdh8yTP5j1H7GMQknBBapNL751i6H3t3AtXd2DAaTJcUXXRT3rL4",
  "key8": "2SKZwGyYkTcaqS4MNsx6WEivPCmA7Coz4VdnB474baurHawMEYdnibFDCct2FS46SLtwuX6gbHQdajGkBejy1DaC",
  "key9": "4ox3R9G6puztvWqjbmngvgU3Y2f4AMYgsgzBkMAeKkUCNGAMFiAwcdvqLcBGLkvZgEo9fmL1vnjMMoa7Wj6MJPo1",
  "key10": "4kGHqaXZycvCjAebprsqS6japurBVYrGaGvMutJ8AmKPgM9h9Y6XnaWNpHNwxCtgZ8t9BarGq85H6TmW59vbiN87",
  "key11": "4dk8TpQHKoXMNnyyYaWcukyXCfvJGYYTNCH54ocbKswrnHkPXQpi1oKgPqFqc7BFN1DqwWCGcUkFBpMc69fCwhzo",
  "key12": "2X2eoFWfdbJ9xrsu5A8hXeN6JCMAtwwnZyZJRTJJYNwmhz8NfhZ5fcK9QYcHQjk71XENs7LjwRVHjjmqXG7oiC3a",
  "key13": "3p9YoaB5G2y7Y5jQRwrTNo3daEasbmovZxjpaR5Vbm4accyu16FAWsKzmz6yb6ra7ZDabhhNnFV9sx8fCTNVy1Ko",
  "key14": "3rcb799z1VyA9ZmDWKpD2jzso8w2qED7yfcu4uXt2Zbv2hQAgj7uy1Yu8MkXZGeX1PFpXxMPL4w8CCxatMX8cvfQ",
  "key15": "4BSm3dmUcrUQ7LbQvPAvGMdEbKKRPWSnwxohYHMSsujAehwQSYZL54fPoPXokfkbTzp1sXf7Q3Bg8wwVmjXX3Ek9",
  "key16": "5nubMttWzA6dAro6BYxnefnY1KPpzkQEPtiqSfm9oiENz1MEVvQbpb7FyS4mSEGvyjfZ1wXn5JsW1dTQA6F7vk48",
  "key17": "2ZWzwMGC9kZ3Z9jvDhxVMih9LvSXPB3xp9LKP7Xj8gvquKcfNa1NKBrByrWd4RugGTpvs8NVVJ9YdoQLZK8WkDZU",
  "key18": "5ykpBhaR1TDWf1hYjMykrY4kH8neVNdcBdXR687FQ9kYLrdbPrf524YT587TPGqpauQfg3BgFH2DW4Xq538pcSkS",
  "key19": "5MkxSeWC1odb8YAUMx9kwDbCCtEDPTPCrQME1j8y93o5vkhtmCx549zoehzvKBEBAy2FH6GGjGYhJC4t6k74FQsn",
  "key20": "43WN9QZg8FMrbZqNbuAujbT1pGDJdFfKF8vxNSNvzwwi7qcRRNTHwwWTgKTiq433qTDqvh9YC44iTEGBDTcFFfFW",
  "key21": "5dXsTvPSn9x7iZku2XN14o9RB3xdDVSYnGWJj9JU1pbzyLNWzFGWgU1e6PJihjmK3kAi1iByGtKBmhqLZMohZsnm",
  "key22": "5FLipF3aYZgNTXVCM6ZGuY2wPcdZHaNYcChwaSFzbG1dST2gn6LDfHucaq5YL6dP9oStdu6JjmXa7tpiS8WdMydN",
  "key23": "4FKBardUmDVQH3z9N7Q96wGdzsZF3WvmSpLjBKw9rWUPVQTZRhGLxRmXHfrT2738Yf5v6THsAMfNYnp5gPywwZL",
  "key24": "uQQVt5jeegkRhbMqq2h1WbmGyrTkJiXPSq2LxVuk8nrXXDDQJ5anA5bDA8RcHnXdWGdVAxLAcYyHNfRkkEa2En4",
  "key25": "2MRLhe3KNdcz1Kha4Ps32hjmPyQb7iHXeWMxFmTVYG5Pqk2mgyXsmWm2YNNtYgosBFaC3fYE53xnWoamWEv3TLeR",
  "key26": "5Zj1ixyNw4VsompsMSNLSQVq8fcZXEjN1QviQmUfrBQtkX7MEQoNKcXvhttCYgeQ54ytJsSzU6J6tDVZHyMw4GKp",
  "key27": "5NLxQkL4C8p3iySScs1SK2t5cbovCDWamzeS2Nqxrbwhev2cyNeQ4VWbhHSb8pnGotJsnWVwYMmmEjbfVxFurqZA",
  "key28": "2LhbJvfR4p1jwDcSpw5WNmppQEAvRNdo4auVY19eF2Xqe7rzaGimRFn6ffTY4oFwKUFSMRQPFymXeemSUdLKHzrf",
  "key29": "TvtBz4d5P3ag1hjhUvEdm9hk3pWXYZoCeZJnUVywQ6Hi1X44H1hRDUW48gKzGQkuMKDwS2eAPzrToEaKcmFo4N1",
  "key30": "msPh79wG7CkMgidgEXa23KKXFy3Rj8Qsn5SUQ7egFzNe1BPZMMXoDNhWC8x2xzVK3UXetJi8yb6bXvS2Ma1Ryzt",
  "key31": "9jsh5FmkCrkQ4aTBzzaNdXVrmGSenHCaJLCr88jQBYMYyVHJDgEGvjKtR3VaNxs6sC9SzfiEey7TaXeCq5zmgVS",
  "key32": "3n6M1uxxn7PG6qT13J56iL2sbxMTyXxNfnyVcBSCeEXX1VUXHSSF1KXejN43CS9YpKmvB4xJcaqVAXNyWMR6apAg",
  "key33": "3ABkv3ZXoszFjUBAVKqFNPuP9MNjFM8xa5fk2RfGo7JA27VkbYKUnkUr9KtJuCwEMymWuxatBEAjWdaPBbNv6oAb",
  "key34": "64BjDNzXUavAtDpQgxFKBkciLPdaf59xErTsboNsksvWW2r3Kv3XRcqBZ3YWhT3Awz2Ua7uUms3ZBcuEcyWDL98E",
  "key35": "fdyLcZr3pNKj69Ufw4Lefx4nj9fwpvP2YtdVAd5PVAostxeL9WYGfx9BzJY4xbJQbP5tDcsNCx12xh8F82khoEi",
  "key36": "43EXF1h3U8BkVSwngob3UHiLd8YTr6QK3RMyhjqoLDMz7otgBy1tm7LoxB2Z46yhGAm9YCpxsAokEwxLFoWzed6"
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
