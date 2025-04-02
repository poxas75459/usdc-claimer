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
    "3VUXkVkkWvzbi5JAzs8n8FjkJdtypWiHbwoKp6YCGUxdsNbg1eBAiizztYZeVbvsmC6yQgBTg2FkN41pnzwgM6bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3qVjNrQpw3WBzgfaLufmkkW2X8PS2scLSLAP89uhGfc1UAK4ddy26GpKd6GwPSvuErwn9MNrHWByQJbTXyvvsv",
  "key1": "2N5AefvrqnctVQFFWiKWRPhb1h3BK5TtUJJuY1Wp5pGcp6vMbxZYnr8he9PdU7HKUkrNxS5NynJizCkuQUYVNLWp",
  "key2": "5GkXJhRpkuQ3aiXwj8EjK8hTrcL6Q8oStKvHmCNvEjGJM9xCVJxo7LzD4Q2i5BYq6RgKVDedhz9w51Lk7DKNbsFn",
  "key3": "3V1nu8Ymu22NjzBJrVXSgwiUTsbtz5ERLzGdtbHZfWxWQDCpacSUpwXxnxDyWP59syY7pNH53yTz9CtFDkY5L2Ka",
  "key4": "3R2nCGbZCSwuGjTjPXXcNML5sfyFzachnnca75n2kTyDGds3m7weQ17W1w4cWMLchwXWgg8upMMFaJ4nnGgCdk2x",
  "key5": "2WXDzZehbUoPHVP6eJd3JrkyjUXK7LYRfcQQeT2mq1YWoxRmAhN82cr9B3hV2Qf7wMvia37BuCRA3XuJXKaQ73Ff",
  "key6": "438BxsUFtb5Sp1BBTWRnYFCSPRxd38dWHkamNT32bdyy1eqsvsvxtXTtNnwMBuLt2mWhPM81iSg4qmTXCeAbb3H1",
  "key7": "36Fn8dKTJJxHuNDz97KgnNoDZz5LnG13d2JhKHsUJXAHgHunWes637fEdh6RhEeUkbiHTGWbLy76uK8tqKwwmWMS",
  "key8": "3k2nqMLiSJe3gvwvmJAgfTRGWJDitHkYQ92EmK7us6Aei1upXS1ACSC6xMAyj34ddun1SWEkrSDo2U7QjWZFgB5G",
  "key9": "2TdJ9FYUQmhWh6UTsWxYVqCDGkRgxKQcMmwKHxHtNx8zNYedt4ehbRu92tauA5279jQNgvEvNwzfDKsEkMzWwJi5",
  "key10": "4qZdwFM19D39xoeTbfEDRJaPkJAFxWNyLFs1GjiHra18R8nYC9dvnVGtSD6ZT5BQV5jB6VPsHpsV8ycCJdgJiDeZ",
  "key11": "34Hnv4AxWbDXJTTddwbFLtkqjzHKjbYJS3rrRK2KpoA4LJ2rFz8HkrrZ6yZQZxtDf6MunMcQL8DBgRkAv1VmERxH",
  "key12": "4YZJre3wfYi6whTDL1uGGWbCyREoXzczDHqaEiLfZiTVcRyc66CQdVVE8oK2E9i86kUSVDQBA4ad9YF2NXcaphhb",
  "key13": "vrtNpsK1aXkQ9HbLsqfQeTrHTtpSgN5MMYNtMciFhHQBWkQqEvmf2mSqNLzdk21FGyehGsx1YbuxsV8yADGECvL",
  "key14": "YLQYDwvpX3Uxz7Zavjzkn1HPx8dmfuNu9Zwm4sUC3aeTTxHjLdutHjGA56GYdh5CiSuUuokUs8j2LvcUyF5sVf4",
  "key15": "3iBHGiip5UcAb3mCkVf2XJ1yVcuM58yesSG1uC83gcMMXPNPuGk6iKC2Z55qrJsruFXFGTj3axB5c1pQgDVUH3rj",
  "key16": "4KvHeoEXHz8s7taS6oHdF8aBHENZQZD8WxuyyTqBQ41wXr11QqUZdLUFe5i1FZuKRAbpjXdEoQq4CE9LDyq6Hafq",
  "key17": "2SbnqyopsaS36Di2BH81uFhEhq4dsj3j5ZkYRk211yuNvvhKXrzMx1rWJjoj1WA94qbWnaRizpHFnbVBjZ9H1xiH",
  "key18": "3QH55KDDePwavCAovkzHxW9MxujpToJuNvyMe5gbq26j5uMAVrpZE83NxwSi8fQGGDh9YSchFDXQHyBchhtLCgb9",
  "key19": "1oP1hGMeZh5WREzZCz1TT48E4AhD7VBgYf6XYNkh5TD87EZjhHP4HcyxSro8M9xB65usRUZPGFyvS997SPpuXL4",
  "key20": "52H8M5XoyCbnb2SxekCD7Q7gsxwJPYZjSm8q3NvcoX9MnC82v52oWbdLwSKLymafTN89Kh1t6aJ7XfhhCGi8N5xW",
  "key21": "4zXgSyJ9RNoNTUoaWdm7wyyoM8Y6kbXVbNcHyjctgYwYBShmfawu24N8EC9KHio3JtzTuMaPgJgUNBvG2xK8ToK2",
  "key22": "4v4KCUY6z4X8WC3op4BQ855J5KvvhQFdrjfWextH7FVrC5LrqrfebaQsJtzNaB47SEX6ZyVZiMrjdQGRGXeKPyd7",
  "key23": "4CZCKYL4goiAWMW7qqEwXzyuvferYTd2uYXA1aGHmg41HtZg4xwFyG7ukmzReWztR2iSkd3BeF2sDdQ8bxZ8GmPs",
  "key24": "53yW71HL55SVnDAzT4HeJ3gwLQLKWmbqVRUH1inzSah9WytoMMd2bd8VhzzJfpbAJ7TCuXF9qSkUfYAiaLfSpiis",
  "key25": "8GEkw3uANM3REpkhu4n2NuYq1xD9kaX7sj2LWt5eNGVe1S1pjBhv5VZwnzqiVcSCGKNvERSp5TKH3GRA8wFQxym",
  "key26": "3hz2i6tCdrcZvmf5zvK17JhJ737TFehh5ta5cGGyTGQ3moyk7BbpRECUXw1uDno7St8aojCGhCpbSjmDi8Pq4b3t",
  "key27": "2rKF8xGM8vxWsxyd6dNQcwUsdfSR9cV3gwwdfhAoEb6jws9SmvNbd4oicN1h6RDeHdSCHs655WKpMjYJNu6ipkPW",
  "key28": "zSv5L24yp4HJdYkFr8kdRkqYqbDoHxLuQqSRtha8GB5rTzS3CVQAWK4QZng4LLwViNGbYWRuYUr3Z4rxy7BiJ3Q",
  "key29": "5EFR8zEfHxt6eUeZcXazbKikBRdbscR27cQutMkDbxqoZq22R7YsUoQs31CLVb6nG43JfU7hUHUhX9zACfSn8jiM",
  "key30": "4jhGG677i329tGwzcEKwtngXeW3kp9M7cjUi1oEKvU4ZyWvbbGrV2qbruc2niWtKYXvLWKBc95NotaovPm7UninL",
  "key31": "4FWP8dQvVTL9xnvdR7N5BGaWsKzW6QBxrBAurRvSDybT9C4ss1XbS9uivFSkfmxPuuwFAwrE5PPQVgx2N62jaBmW",
  "key32": "S67R1ipbqKTx1VuRHuPnSmwVyLx3G32o1iNKgBwepuvdk43QQoZUGBWzMUGvgW5NdNzTKQW5neWSSqdcmkpUe2h",
  "key33": "2YkRyM9tG52aNfjgZehEFaR3FYKeMcVf8ouTo65yhb958Qxe9yca7Y44f7qur2rdaXhBcFdhKPtLuSxS5J3c1EtH",
  "key34": "4LwTmFcM6dNwHNrZAcQjNPywbVVX33ZSJp1zRegzkdwWcbobcmZogyCmjuonafLMn6UFrTNTFS6obwYDtUAXAa48",
  "key35": "4FdRVXz4dET7hFfwwxnYNPpMZT8csinH68QbgRb4MY5gY4uekSEj6bcJRaFDZvVpnk8efx6PJpoGz3aY81Kja3rS",
  "key36": "5vmEc1gfZC3waJmHP1kPDSzMseEB4ZW8w8KCJC7Lt3ghxns47UNbp6yb8tQGrCxwyAUw6tu5vN4GvreMZjXVcdvN",
  "key37": "5y3UNgNR3LPQyQ2MBqhpgFuuvS6B9ifXFHUiYxSFmtU74jpCTB9iRgQ6ZRhfCDCnxTzZB2rLn8XTMbQf4s1Kukrz",
  "key38": "2bVhjoHwDnfmPA1LvpeXrk6wn8wPtQCWcNeSKoUDKb1YmtU4EDs86Ty9x4gRqN4n8Q4aGgBErqtGudtdiPtcnJav",
  "key39": "2Q94ecXXYKKVSnh4jd3S7YNmf7sLMAuaQ4gLQHBT9UZX3CVRKodnWmCQsRumEjvKpN4RoXgdCN1TcsurKao6out8",
  "key40": "4hgU2iFTBVaU9gAERrJtJjKLYayBU2FmqVmhBojbp56AuuysagjJsqxwYnCeF9XRcSfYUMQhK26n1jVg5jDMhTPS",
  "key41": "52zVpQk5fmJJYMEu2MVvbEDzJCwTsMnfTYrZi3Yx7GSYUxPepRtKMFkAnWDZixcUnhEAdiCthsK7L1NHhrAFQGxc",
  "key42": "2xwt2SioZtyYm4rEozRUt3FRMbpzzh7zTTshU4phNzZ6oGcBePFkzPSAC8Cu5srNvasx1tZbVvTaVtecEkojMBm7"
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
