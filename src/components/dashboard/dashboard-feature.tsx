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
    "5Fmxm8fa3FjpgRsRWKfjZh9HHYvrgior2ToGLKnZBGVjqwiy5pvbpphj5u9WvyixeuybCECqBu7WGq3jh2Z3bAxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgvpKzZqYEnzDyjKNaC7LtfoRpXayo8GkLWATENJBM3f6PWR3arCjihZJY23VGyTbQEdAStQW8me5X3mPvF3AEa",
  "key1": "5cVxLVYHqmq3uqoRpUcLhWypeV4RJ7xkZRsTNL6D5digq4H6vWQVwW4mubgRsz1Wy4Ye5uoq2277BhUVKWubbkUQ",
  "key2": "vyA1LS2fWm8vw65G2LkNXHrEnDtyJb6G6DXdmHmcHwHaUEdKWWrB7Fd4Nu4GGZurur7TVo4bTMwAmvhUQW7kiJR",
  "key3": "368JbhECtGZ1LRA21Vr9WFcmoHTEtCecEDznZwv6zPP2ZwjFKPWK9Qmk5JN8xcnLTK4r1KDKKWZouN2RkgJrLdfk",
  "key4": "saQGxw57tc44t3QQw8nuorB4AkymoeHwHzJaGaVm9gfXjXMDuZNe527cp4nYmkT5te5iRcxdhRUSjXAiwkxHydJ",
  "key5": "5Me8YdnDZRtLZ9NL4G33WoY9dRhC2GB4ggiAeJFBhH3qaDirBNoo44AqHdJtFKSS6tioAbuo1oZvzwQcnYquRQKn",
  "key6": "55yNfuxHiWLaSXrB8n8tQ5zexGfyyVqQXxk6uXBLdAkpND5z5kzVkBajDMugeYtvqwUY4GPeYTXxoBbE1xSiVXpr",
  "key7": "4saKnkHoq6LU65e7mqsv7MsNuYf7GTfCwYQm5kNgvwWQp6nC2t9AzFcCmbRz2y2Q6PzfTxuK6UM34skQbgdsXzYK",
  "key8": "4kw3p8jqb9FHBHX8VwQtgKV5czk8mj9TX1mvqnWPeLeHigdGYmPyYKdYym2bBHweYVZh7HNpqwF487VLgcV9Y2SW",
  "key9": "2bjJNQSJ8b6m8RBhYTgdFM3T7nnQExBVrM4HTfjXRnxyr6kivrPuoRyvGwpRmt1GAdJ7xB1DrMtYFwRnXAhhJD1r",
  "key10": "4Sdo52uMSR2YxudEC1VpDX9DyaG4FZi8aZcgMeyxkMVue1Mj44BMQMkPY1Yk8NKEJwxjWuLGmeEU44oHtCL8j6ft",
  "key11": "kNUBYTX2LQeEa5t26G3VMS9twmyvBRedTXijcaCtx7j1DaQK17KBUqCRCHzPxv7KGCisEEKCJQsZP1T7G9Eoe1Q",
  "key12": "5TvpAKo8kxcnpENmZyTcqcc35sZird4zUytfbcAcmVPtq3UVSjZ126A45tLJn3Qf47h9UrLfgnPuF3NxKukQqTsU",
  "key13": "2jCFv4k8CXef1abQRcnG8EWVshuhdvJTKUc4p1reyZiANJm5EjPxcWvJi2Nou3FqyFUB2hLFWfXdAQfiGqNWAQiY",
  "key14": "dbT9JizezeQGUbkMsGdQ6DsQNWzQXbKwbnqf1Dy3jfj7WcoxqWCxmQj34CxPLf7D6ULCUdQeyYjTvp8AgSHZbGy",
  "key15": "3eQhRKQpvNq9cEPByWt3fzn9289yETfroFki6K3Qrq7Y5ooR1QE2AxRuHERXYmnVyjbJPhVe8UfU3JHBC2H7Z6Kr",
  "key16": "2qsfs7m83Y3u8CBi3U9yK9AJyRHnPS3rnQhMxMooF3HpunVWCyip3bcR8ZwcZ4m8NVQqtx312e2D5X4EdeAmqVBQ",
  "key17": "5a1GWcE9LeKi85RYqqcU4iiGE8uN9gRQq2gGw6ogT36CLY1XnhjSDVLMu166EuqSaM9k6ZX3XkJodWMfNYSeKaK4",
  "key18": "3adrXLtzWYSwUj9edh4usEgSz5f756cgUo8hf3gzEhMQSUpQyA212FUNX8PxNExfYDo2A5S3o2RJ4ftwnhGwBZix",
  "key19": "551NQSmrxB8S4Tvg2LLoLN2PUyqLwmigKkH9wiCAAqxf3g4aUoWJQNBG9dt89YjondCFxHZ8MQcJHsVjNbQE8WvF",
  "key20": "65wzDWeLvSwxs8pJj5YUihK8nKZr4gYBL3ihw7zwGgPzmfjff6tGcrbZmTQ6U5iZRAu8QnQKGHYB3Un9VcvNyGap",
  "key21": "4sjk3jhSoDrtMWJDeTF18R3RJ6PpznsbnHniihkYkRUPZoSbj7DkFM88xtBrQUBeG6BhW5qAVB1xC7tvEzyR7rPj",
  "key22": "4sS9nJALAfCvkCY6t7fuXzMRh4ezb5nUj6LGpjfTXex7m3AFYjwDbYAfFyfshLdudqbMW3SMYuiYRSMFSn9PjCNQ",
  "key23": "44pjGZFx2zoQWKNhxZu2ciiwpTSjmREseFwBUDpUiCk6SC6CFgKo7MFw9VxKUMLndHiQn3oM6ox44qXYEavxKL6A",
  "key24": "36rmJsYYyeVCDKJ62ne989RMVmgThhU35csFqpGSkJ61hC4E6FMYWtUxupqFjWUcaqG1XCpKAd9nu9XcfvkqgVB6",
  "key25": "2SxJS7fbNmijJoPY6QN4PGSaqVdmZ1K2oEvZtYZCdTqvEcXcvXEfoijorCWhYyJzakJX2F4Msjj29P29pkwYxVRe",
  "key26": "T5AJbFyK8LkMpVTBiLJb4XLm7ZWRdESqQ6HFqbzd3oMbZvvbuhZj1ppvNuiXdCYcSFq4FVWU2MkNBAkZNEPRsFL",
  "key27": "5x7vYr1kciEEWAm1yFZAQzT3E7yMf2BdX2RnRmxCD8EHT6WRVcR1JehfYKdxXz8PKKtDsGZTZPbUE8uCHSJQS9DC"
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
