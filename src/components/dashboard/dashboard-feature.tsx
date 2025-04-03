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
    "3vDKQBB11QhVJzoptWPMsThnvUPqVbsnYTnD2XdqWhEu2pe8sfFfn2k1zWPrCfaeouYdK2cbK5XUZqs7Xw44woHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBdZhmtiD79eVJmbwagjfAkbsNzB4AdsefXMfk4tggDh3vruDShSHn8i8CH7ouXnJvq6LNGLvEYitVoAjdCj9QB",
  "key1": "iGe5nJsHRJer22pK1mgn2FbhUQWGVmisPyji2tLgsqpuzibJ9tsDfKJEZgYCHwPfw2wJ3VVDin2keUYus623RLz",
  "key2": "vsJNvNNk8W1hfykNivYDqbWJLSihvf6JtZfbvnfSbGLsmRDW5iALvnXvrg3xzgz1A3gtWvAQYLDzTzANiJcBJv3",
  "key3": "48VuGj9ypYcr4rUyoTqMoo2eWiRLaMbtwEWMHFnBzfwZ5V1gHEYeRSxDAHvKFy52HStFgmUYtNqR6ucGR9NZEryf",
  "key4": "29uaEccP7X4o45oEDDgCKUnFtG93WoEihj8yW93jE7Qh1UVSKN5eRnzzjgL3QapzEYH7yPH7yQqrbLNCiGgZ2k93",
  "key5": "47BUPieYTXaYteNCR6P4PsCTdXr4qB83MnTUnQjhhjWz5Vdpj7GWJjPsCj9dkXHj9KBRjv3ytqkVRnTGtf5K4atj",
  "key6": "28ez3wW7sYHUTRo3N6KBsgYEBp7bRVNUm8hMzB3QrnGrigNTHTQgZ4R1ViwDqZtthTroH3c27fNtchdZJWph4fSp",
  "key7": "2s4Mx9KsZEJtv1HVA1Lx9j7H7qzFR3i1KJJy5fTMgeSPkyRf7p4KemBJdXwUjXzoneiMFSwHyySRz9595mgANgzL",
  "key8": "3SjPEkLt4zixtRFaa8dqGtbpF77jR7TaXbfBV8sKkrgogezdNtdqjv3w6b6DHAHxgEnqxVd3EALKdpg68VqPfUHc",
  "key9": "5BNerNGdbfqMMA7FvQNKhrJr267ZFZuHb54goKejdKXycmbb9pvKajGWyKgHfYfJg9m17J2hu3bbb84x6Udcjuj6",
  "key10": "L68VygX8np4nuPwKQPjRpjJKxSieYBjYwgx4vXkVE5HMYkwCsbGfeK4fT7AsDMekHiq8axR7iVT3dEgCRzGsdYR",
  "key11": "FFkuzW6ZPriTnj73tkXiiheX1DyK5Huzs76AWXYDxBmbqNb25nCmmVSn9BNwerk3FnXkGyAnKEpizbgcJ3MHTPo",
  "key12": "4LcG5C1UGqSJspUMwdjUHXMoWHW4wBiVhXYZkRBHjuQ3nfvivfzGm2xLDMhXkDjdBbkTtCwuj4JBHeK8wDo4R8j4",
  "key13": "5WnEuCPYFFcPhmaSHmN7GiPYj8vMEXLLWp6UJFskvdkyVQHZP7NLfQeuHDwXfB4U81dBk3vVRekRTkaCYoqgXJiB",
  "key14": "K6fcaeGCAE4GWkZe4E2TUNEpRmUNNJqVWDaenoeVvW6bCDtoxhjZrDzjJPSya4ZVD5VHzXYiXSk5tZzuZipH2Jd",
  "key15": "5MYunEiR5uFWfozzK3c6KLz76JUGHKJL8dGut1qPZ3cZxkABsmmVjD8SCSjhkPUZzkrUcTekBaXhd3xWt4ExMPZX",
  "key16": "26vLBhQR2bpVBL582TDLDdZGNW2NQYij38jXSsUivT1eEgiMXGhh6Fe6iWP9EqLQUiLbrBBJcqhqUNWD3GQb6Fx5",
  "key17": "3zBuQ8dRV9R5y8JSVFoCGgupS7JRjrvmehaxvyTZfMN1VJiWst5Py3RJh9sXoDgjgdyiQzWa1PnnexqcG3NBa1Pq",
  "key18": "4FH3wEvRee7i4GAr49TZ4Qb4MzNm5kkvHUs6Gg4mAupBDnzPL1oQtHxp5HKtqsWGYopS25jBabttUKBDZttyJ79u",
  "key19": "x1rk1q7mpUJJ9WoYLvyiFu6k3cBMLDjv3voATtyf8JDbCbmnbXVyrqrYaLcjxydXDGH6q6CJ1KJQz6UDd7wCX8i",
  "key20": "CeAwAEVM3SkN8XBzXnmLXiuyLQ89xUPZLf3UocJu5q7gLuJUPQJoxZYQnXKYQ2swZPoFjkYKX3FHFCgiZm6RD6J",
  "key21": "3bgDq5JtMfe996PJqRDubaTQVMMfZCkTG17cWYCb5gQdGDmMm8v56ZoGiA7WLAPtH5p1or7BZ7Yi3yzzXwDGAPCS",
  "key22": "4Kaf1mLgB915QG6SyrTMVF1mse7gKq2Fnss6vcPP1nUrBEGZqfPGbbN5ZyuDfYUD7iXNcHNVS8H8iDxPj8bysLQ3",
  "key23": "4t4a2fu5zCmYPLhPjJybr4oSmi1dERPoiVp61EKXq4YdeUpr6iDso4MPBFRiCwXfR8B1fJZkoebDcFNykGP6WHJk",
  "key24": "tjfV2v9XM4fafTeh66dyssK14nnjhr6FYRq4cSLYWDd4Tg2rmFAtu7Uw7wJVTJ2cEt8zavy9iZSrbqcc8g7o7k7"
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
