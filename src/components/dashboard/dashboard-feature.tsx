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
    "65zw6HGwKu2f3e44kCiept5sy46grskDhy2kGrgdqktCAShME2xtDkwxrfQJxpKos5zWTNa1br6uGoqxdCuC57nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1Vtfr47Y5YNCTiyfyJCcrEftLpQiWdU39xn2yCQHLz9muKonNyYaun6fzLsSc6gew2mvn9wDdYVpEU6SYpE47r",
  "key1": "2XYAbmhYs6ThvLaCW7XpcUiM3QE3dWHcP1xmmBi4sNWU1DZEfEuDQwsXg8ghTo9MkK67w16J85Bzuu8iKUuZcQNc",
  "key2": "3DthD3PW1weqd9WgYt5xZ7eWsuUeVm4gUEZu8PBG78mnzfLswKySaszZCh9128xzb6TF59rDtin3hn8aY4hBQCa4",
  "key3": "2FhWM5qoi7vKETG7zRokMrYgx6azyqfFSxuVjVXtH5zSqufKVmpNgvR1AjXU9CB7Sn2ySh4nkEx7YpSXqn454eos",
  "key4": "2WesszkDxn1NUaYZ8vm4SKiMB2wE7b6Ba7egU4fazyr79yyAA6WKryRKT33GxHc1VJH1VEwm7fVhaoiPSWh1BmgH",
  "key5": "5QYSaaoA9hbL8K1K33AMfV5HC84vQ8M8mKoGj8fWomEfv5GW6dWkJTivcdeww7tXqUdWmWFapJY6wmGyR4YayQyC",
  "key6": "2Dn15mMzH7UVKYJa2sYeKN16SCRbgQEv5ti7B6Ek55qG8aWkEunrwRCskRNqz6AuyaW4bvpx644YNJc3EZTeELAX",
  "key7": "3Upw8X9DFDEpJmimwahCsci7bcYYpS7A7HwqGvK4iR8skoj5LXZcvfomkiWFPSkpcteWhwmfv3JHXsnRkuaAZDGV",
  "key8": "3yx9MbspEcPTaDmFkvJDaarQihv5qnpUBqybGsKL6Ja5stH1xVZCyxD9Sv8ZDqP6VwchU8MXShq5QNEenKXLLdcw",
  "key9": "24WpDnMRvxTtYPjSSJsvUgn4nMqyqNLV8i8yJyEVbX4RQwvcqXNHYkSWRqKnGsqpUcE7W9jZFqHxypdnP7kJFiUY",
  "key10": "2bcx2X5CvJYAP2TgZXjzDoczNt1M2yVxQfT1HD6YdWwmmKKJwf8sXr1SsDAEVf1sm9oXvtnatacNt4PFYU2rBri6",
  "key11": "3iYrhFK8Zjs7amHQgArrQv89NuAQHJtiq4hwZeLx9q94JQ9hbBst1GZKYywcMhNoKXk5k4JQWkrXASDAvSzcbxZx",
  "key12": "5a4tuqdobsvHmpsAAXqkXsQ8QVvihk7Lpu958oxNPFKGk3mvz7btaHKgYdijWSnE1rzkDa1zrMLryDmwvW2pLzq1",
  "key13": "49ExsSnvXgmEQ95e5UXJQWdGtRo7NY2rbYu3eB7G5xcdk7unwKRFVaXzpUjGVvEGPZEC1VSijASKAYJM6LtwgoDK",
  "key14": "2SGwrk6XNcGDbuHRxzZxJcQ5Rqo8NGvbcLhBtoYqfeqfJMNHXwXXNPqsD9uwQdwC417WQvcdi42AhjQkRQHZMxDF",
  "key15": "31g7FbexSmzxb39wgHfAn6ArJeGun3PHRYa2q2qrsTsMHhTpcizPF4wmf6Vs7mU6xvgZGjetyt5z3shHgwbarukD",
  "key16": "479M9VaJ2Z4YBTSctZUMPDKjNHbxmi4L1WofCZhH3DmJFWnakgX6W4QR85RSfYNCeFEQU95aAqt1er4CrGJ259rh",
  "key17": "5iNLdxqJ37uf77sv4RnTyPKN27MGrgu32hJKqGsEkLcbPNtNaZxbv2bzsi298mqryGuemDDUVzEfY4XNbg87BniT",
  "key18": "3QvA1kiWGYP5nmeyT7QtK2ubgjbjVdCw2H9U2c2pfhZRAtXUtHbT3jbCDSkV55cPPti3JG9ss51EupHDkv8hVHYE",
  "key19": "3cY5pCPnq62XiZyQHzSRsi2uRpLXYM8tqKXbTwehZYRGxPzhVPqpfJeaVGK9CTHJEdzVUW1XSAxmVxGjfJaGy45j",
  "key20": "vhMyRhmVSpVoE1BhnCQfcBT5yP1gJZN5SzLkqcQCk1wfpdojFyCUHcZmaGYXSVijsRk5waiwrSf5emtRnXLVQC7",
  "key21": "2CMHkHXnQb1mMGaRSDRwtgaW4bTU4mQkmBAesQ1XeprFtoCwwnVRUwihgBHaGYHVpaPWAxcL9VmbDGwgAY9F5C7R",
  "key22": "5eKXSBmLBo2zrUMMjEDm3K9Xig5ggU7ZeZUG5PXX7CkPhHRwDi6RrDgf3Uj4LJwB2zAEQZxP9hmqwF9ncpALwSVw",
  "key23": "3gHYxkdf7GQnPJSYGx429ecYr7iASmhFyMSapayFLjfwKpodWrFTfKNRYSyyhpxhuhTaT2o3xGE74RzTguKSMqhS",
  "key24": "4u2YDvxN5M6d3DcAaKUaLtFGvf9Tuh1mHn4J12YhadL4kPjWhacxUVkyxmPAxhsxXTdt1bAbpjCJG4KKzmr59uX2",
  "key25": "29skpv1icadFKF2FSuKUG4UEgcwJPPcNjBPjksM7Mdkr7WM3QzHeiBFUWbaoSm2YBqFzY3whA3qXMo72jeoEgfqA",
  "key26": "5Py6Z58pqih5WnS9RR2e8anZTf11pWuScd3PCwzxqp7RmRGjZFZNAgUoruYrnwcK9dp3otwk6FB2pBcTHxwkMWZV",
  "key27": "AASDEw67ZQyVEnws6FjxK6PzERXrnfeWopmcH9dPpuvAQS9iQJfQaWksEaCW8c8zcfEuJzeodfaHNqJJt2x4qqJ",
  "key28": "5ymWsjgcuT8So9chB3d9pty1FwU3qMQZgNtwemheBSEYngEqbTc6DwHGxcM6yBjtP472h8t1cwE5mgJxKdT5p4w8",
  "key29": "5KyZHXRjXcGH9bDpwCy3L5kZFw6Ndxqv7W4W44qZYQph1Nrxc4QjdmrYdFu51zHfvAWNsgbp2is2c53n2KQCpgbR",
  "key30": "4AqPSkhrXxYuLJHsrJF5SStGFGQc9KDwKRBuzpyoFD6L9mJWaJD8KdkzyEcsTeyhvSeYbKoJF8vwiN52FtZFqszp",
  "key31": "3PPVcPwHKwads9dFZQDKAyPkUFBfUXPCHbUsx8jehJbAm6U75ao4Kmgu8WNy5wWuxUDSBh8K28t5waKawFat9ZFh",
  "key32": "2Y5AH5V8LnG6uZpAe7CFcMRdCjkvz43G4T1QUJZbAtY99QdAuhEmQZkYV8xsZYBoCYovkQA1AJ2Jg59yBSi4JrRN",
  "key33": "3u6PAt6nKQ97wqK94QEUchQjc9VpE9AeG8T7DjkS6McAXUzEF4K4Ri3ppPh7Y5nfemcgCw1WwZgw9rM99hgeNik9",
  "key34": "4Auwe1ewdBTfUDddpG9KeVBKRNwUmPaKq1APNZXeFvjEAwn7bn1GYTJiYsq1n1cYqCYSLmHLKwXxwbxsofVmjEqL",
  "key35": "3VbHizGGGDbJ2NQmL1d4a7EHaF3kq2T1zrgzchs1KTPWMsn9XbMW3qG26RxUA2wHTKaj3JJkH6ZTTD41pLHqHK1L",
  "key36": "2niEoHvYfGDTrCV3yoQRpqHnqDZZM8H9cREvHMpT1bZCr8EwhUz7WsUDHrbyCfTgzEFquv4NkVSHdp1TLBxtdMi",
  "key37": "5MqQPSH7UfFWzcg3CYTkhi9niPRFb7r6PuxeDpJvWAqhhSFn2CZwNS2Cf9eFSmeRZZpVjhqFpxZ8rLoLYbCmEQ3t",
  "key38": "5Ekv8RcdaiPDgW6mrC2SeJtCAB185N6Qkw6Yh7QvKJT6NzLg8d1HWHvtJuaxvm2b9Gjcrw6yPHHKrpfBsJuHVts",
  "key39": "5X6wPgMX7JHRMddsX4sp2fDciTo4ZzEuvE43PvvuezvTywpnZ3SNLQ52KvW3mRLdiFHgS99vCR6w3Uzy6VUdHA6h",
  "key40": "2ygx5gQuCpWy2ZdkLasQWKptFNmFiovWz6HaJ1aGokgDzMKeiyaaEVtXpVdKkfzysj7AXebHggU7szLrk8dYGh3G",
  "key41": "4UgDh4gwn8cwcwA5fdaJkGLXY38rcpZe1tqrrQBenvd8va3iFopsvcqARsm1rmsHi6hHe6SU5EvkyNVm13Nz737z",
  "key42": "34T4jKetiLEB2r4LpdQoM4ePyo4TQ7Cy1rFBvB3KHTRWEvJm5SwDox3EYKyHwf5zDKSUFSev7PaM4g3gWctaG7fU",
  "key43": "4fZLRWMdNsQufMv7sGXFusj8ShZnN2snFmeSF3hhgVf6bbDt7ENnSqPfhQh4mZfu4Si3pbFYKTrJ6U7PqVWybJ9Q",
  "key44": "26QNTZxVQU7Z21r46D6QRJPdtb6i9VmMuVSmeKvytnptVVgDg3UwT2oZeDiDyXK3KVJNfoH9TFjXhrqzW3aQN2bH",
  "key45": "43QyUpWPUEf7zfn5yx5kSuMvNpLbK4Q1hoYiZ7LoKh7jBtuiEjEQ5wrqRiSyXx1FiFEiCEgTsJLKvApyq9NYZjo7"
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
