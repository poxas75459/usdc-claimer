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
    "5qPdW9ZdEFZ7w3PkqmMPsTWApAdWQ4JNP84KE1LpFZfyMRt3rNZcksupUCWaPo3ijo1WLyHe3yQNuhZUybbLmzpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSRUAEkqrZpSowd1jY15YJoe5rZ3JS7ukgHuyvrxfaxAEL5JRbQo197JaRDSxwfGkMDcbhQsPhGJtW94ffkXVTa",
  "key1": "VxedHYFcDFGWuuArc31sjRRwxLfKE68di7sojTsxFYR7MRD3Hb7LvKzEzRLmvDUg7KYmMftLtN2TNHK9HcQ2ciQ",
  "key2": "5B8YybwP3LxY6sCWR1a2Ns2tVgT7azmuLYrjmdB7X7HjyBNtZXsn24BLe2LeK74BTVkhcmZEByMSUFKT5E64FnJL",
  "key3": "5NzeCCi6eb2tCBNeAJHcScgwHam9x3cRQcFvTvTc38HVtTN3CZNnKip9XtVGnv4xQ1CyX6MG7zCZukmqjKecVJB5",
  "key4": "4BGbYuthPYMAgjpy3HzKz2FWWmTcd6AVN2ap3emKB84EzFVYw29aZRY2EC4rcWHsYc3LaQRjXMMdgNrdyQRh5KoL",
  "key5": "3BE5nrv9xhobv5NtfLqEX3upzMvw3PwbviGSZr3NMbzK9mFn5jr4mLp2BYyBU5dxxnegRPRrNWiyCC4xEX8Enn7t",
  "key6": "5kwdYwX7PjuqNuriSbUUc4fDWuqMWb6uHgL8BmxjXu1TyxQjRBjAHkPfy6Zv37nLouqrpfpQA4Tb855XDW3HeveD",
  "key7": "71udaWpwmLY1fEs6hhrqBNir3fPQPXVVaXYaiVUEJzmvh5opKgJ9tBJMSkdBsLwutWQYnRnvH31Nfj8h1Q7hYw7",
  "key8": "2Wo6sxWQQ6GHzvcskWKtzPcqY46CvjCnNQvWbBzEgSCHjenFwjnSmFdf7whSr3rtitQg9HBtw2R2uYPT34RiGwQt",
  "key9": "2B7DaGWJXcMKbV72wh7wgyVqVUq96mNjBoZHL4fX1YYdLYaChE1RTHdezBSNHEPsYBRrKvAakbcYrWNJQ4km5CzX",
  "key10": "3dX1V1J9g4KdrRDK84yyE9uR5ZVi7p2BvVrLqyMXasUeegTBPirWAxzWv5xENCDmCi2Ju3mC7K3mzY3fEWzNDhzj",
  "key11": "4C3DrGNwRE2SHDAbkV8HwZpY39gJwiVVJWYQA1naaidXiei2sRZpmTX6hdDxkKHPZu1TzXAqaxikRE1aNGxTiwFC",
  "key12": "3ffr1Kv1NsngqUgH4iNi7VanPL8DNqhZfVNkBfsGbZvFSWw3vmdgFncSqBc2W7c8JvmViqN1L9YWpSKcVS2vEcfD",
  "key13": "636jYxUDxdGpQk5BmvvaR8vcyPUKsEKnEpkR6BjUVCFqd7FoMrm8Zpv3uDPtQ2ZNFW4fHustiJ73ecBwFHUZgPAA",
  "key14": "5KbibKKUgqoUfRcfnpcZ3VtMUFBgkXdPYAUV8ah3vqxpWiFYkx28gVjhW9qtYAS21tYoBhaxFWkZrhie4o5Fb9yG",
  "key15": "gmp4oMcSwVH7JhUJgPjbgxF2yioW15zQRNoZJeytybRNcJA99oMq7Xyu3FNvmJ9dZ4oTzXqWkChCXq8i95Jvzre",
  "key16": "5orks6cdFh7TvGn6MNLMfjPAAXkkrX3q4VHyP4dhdWmruj3AU4EJo8741pFzkk62FdJhKSJtS86BK2pqoscv5i2i",
  "key17": "5t1vhQueELNXN8GLjhNqjhDPiNE6EG4oNrCtdwfc1uLLTKhsf9ozG7s1dGHZd4SMWmB7pHxNYSiZkZXxCc9nmnBh",
  "key18": "3jdhhKaLN1RfHnFGsq8s6w25V4zzdYK3asjQDxii6UH2oRWrJCTCRDyJ7Y3N7dXe78DQB9cwWfrdxMyKfAzQWRvA",
  "key19": "3NmgVCuPtP1oHCzaJsRitgSQx1yNsgwKVH3gGXAwzqqFMEnf6S6H41FLTHYAzYHVQn7UTZESr2jTLrjRWGbBgXGF",
  "key20": "SL65Yaz3HY6waWnMU2D1kVZBkRoYq3yExrgVWpSAQynJX7uVpMQCo9be9qogLq7QNEZzBZnLPJkC16BuUqrVvw6",
  "key21": "5EkHepR2LxGuh8KGaZHHLJ4zH1QP9NEBTyfXa6UNoh2ctTb3aB61PoWMJiqBmCmiYqKK2sE2nmFEk5o4imDqSEQF",
  "key22": "21iTc9GuSrYJZWTkGHiVJVxdYxAoxPv9843GXJs3MeqdWz69pBtXaeeymVZuH8DtPKt1FUUgNq5VD5HQxpe5DchN",
  "key23": "3EbpJhCviZZqHpvHPTgx2cdGjyHBR7SuxWiNortZnB3nYKCjNWgSutbi5wWeDEkKUNaNhuzbRnLvwjpa5ZfYiPTy",
  "key24": "2jabHhJADdtKgoNi9Dg2AohPm5CgKdm9xTsxAHwWsqUMcnQqdmX5xrmN7Q31xQV5NEjcNMksqMJPxG2z7YGS3uqV",
  "key25": "2te3xNC6CrEdTwkHvccNGBsbdL4XWRc8EZU9jJWNB7PiDZggTiZExqErVD4oMU7X33tftQXjw3PFExgZZ2NCZYpP",
  "key26": "ahvszYMNQg6gb4HJs1wtLLRZXuzoXya9RZDkiiMUENvh6M3gnJDh8YdaAAeXPEeZXb3VpyJXGvU4DFeegJ18P5V",
  "key27": "43R8d26Dtm3tCFQZpYFe2bGq1wqvaDW5xNTmsmFKD6dKF7z8oDsEZkc4pn7dnp9TAEW6SWtWXodAJfz5Tbrq1N2V",
  "key28": "8kqp6DSJdEJJS5bYpqccjBP5LXSRaxngrrRTu9ByTj7z5quEbZfypvaoQoHZcFqoTqH8kJgjJuYGWEHvWVcP7Xy",
  "key29": "5njj89cLfS8pzkP9ie6ebm6Fa1P7dfqq9GYpWPdeGMnD2FcBPGAuZmKF6VjDxyb4dwgXifU2P8Pd7rmb9aRkVXPr",
  "key30": "67bLxCUheDKZFvd3vUp4kakQDoePPVphEuKiFCEY9LUJRMf99SRMVXXcJZrn8hkApqcwWWYwEPF4xXK2s1gSGTk6",
  "key31": "4ZD14iBsXd9ZAv7UdptKDBSef76vFWjYFtKXJXEGC7sktSXmziMK6AXmVbp5FAZ5s4FS931z1hnSB2RUNieqgjyM",
  "key32": "L4tZAjt9DY7hBHcdKotqPqjDTnm5BJ9LZdkhU3E13gR3Y5K8Nei6XYXvcns9nYj8UqJHQUpV5SPdzjzrWgaxRKD",
  "key33": "VggNxGDQhnDsuv1pAHoQvghsFa2nGAenhvWaCDziskrEEct95Cikpmx5fCaFGiKv9qaAk4ozuz8hC1Axtayompt",
  "key34": "eJZcHQfXEk2SKRfB1QzuuztHdwKbebnfNVbbYE9aKUasy7XcWFJyqZWhEpSVRWt5nwjJwHF2VT2Xg6jJepWa42c",
  "key35": "4DSxVeWBoPZXS56zAq46bybW1B4sAAQXjP63JMhRCoFpMYHR6zdrsaw2UPZHUuLNG5zXuUx9dAxMW7mFnayKfaau",
  "key36": "2LfYwGcfcgbj73gU3u41qT2SfPfqGaUScwUQVBVPot36NstHDXjH5aJxeK3k7xwL4JcHJZ3pmWZxjzYgaT2NnjWh",
  "key37": "2hDS9qBGnF2MQ4Jy6RXSstahLL7WZrS6k65MjiRnE5qom693tvaEDnMnGT27oAhWjqEnkQJG8Sma9s3xHnUyAVVX",
  "key38": "4TPJK7XtWUNPwiBkMt9c4exz4vgNZPNUCW98BgovSqeJJ3T3eD2h3qVDx83VKGzr5JwMk9MHao7iXFw39h9yywC2",
  "key39": "3vXoxHjPZBvbxRkBpYfyRNwQ5YfK4zq4RWg2cVUGNiyWfyyCh75iwbYoujFiEfjafMRZfFpXr72Rvnt1fQKY3e5G",
  "key40": "4ApKQ5C4HrzhqhFo56i1Kr9GarvT6swggPFTcyHfsoVkqvFaXExwG5f28u821LCnyBfx3tPog4mooAw3ZmzdvFQ7",
  "key41": "4YZvYPWUdw1emaiYFKf7uWXJuR2vvumJeRdQTvFeizLWX5NXnxbfw7FDBJh5PFDVeAyrdB5bhY5B7951iPgwYGAa",
  "key42": "3G19VAGQBjZ61c6CNZ5MK23rB2qgdUxHbFR1BSLGvLSBqZNMKhjSjA1bwQTJcGwBxpYniLNUa7eFTyhAtN5KFhGD",
  "key43": "h58Nnkg4TFb2b4nRHqNtjumnCapsGpczb4vgez97bocXri5cvEzWkBVeiQm4DivdhBo4EFguWVe3vrk3pcaWLWm"
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
