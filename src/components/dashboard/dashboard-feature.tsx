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
    "4x9GMbALJbeSrb9oYjYu1FNXPXGaycDHe6QkdsbzBtCAYMCBDScM8heKPB9aBipj2RLwfR8kj3QP5PVJcTXkFwYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VtDnPUDigH5oP8BL5qULE7ZuMXmduNo11pheiiXvSd7U3JW8CxZrGJy3o8H1FNEwsggVqfSsdFr7gETWcg4KpVf",
  "key1": "45ERZ7Z76Zad4eBkr5ZGyEJ2UedZ9QtcMqJGDriWoqmx4mJ2YfoMMKsSGhwkAYaYwJSKkGm16kqcqn8HuQmaz5iy",
  "key2": "25WuMqYU4RNhQ8KacM7VQtFzwwJcBcEG1kNsSTchLbosNcEX37psRUK7VvEVBEgWszqGwDwq4ApbVAFN8JGNtYFA",
  "key3": "35QcbZ11wxFaNEd91TaAjyggJjx3UUb64f4uURMfExYKE5MGcz8BRqX3a5k5JhTBkX47xfkSS5NjiMcfEdF4jRPS",
  "key4": "5GEKuMgxLtjms7gLooug8U56XVp2gfzwGqvY13P3DzZcJz9r7AZcLwocz16VGNT8aVn4BtwqYEDJEQoD4v7Y3bGN",
  "key5": "5b8U1AxQ84e74u6ecK3hHjBLTEqvXSQPzZXfuffTd63gbc5o82kxubxbEQ8mnGmgeGFiBbjd8XtNwD6L8V4kEngk",
  "key6": "WyhpJgH8f3bQTMYLqrLVJQYTLExfuz7E7TRgKJZqM2YwFkeTEUWJYPv6m83EXM6KgAF7cPG3dMGtMFo3jQPU2hZ",
  "key7": "3833xcpge2GxCKP3YQhS5heQVj1NgmLf3UJ8hc6yMbM4NVwFcwj2kT2nYo9qeWZP33CLQKxMxxha2e58jZxQ3PEG",
  "key8": "7MKnem9d3GeKKYkgTyjTxKVNUGY6Qn2MTjjjAgQcwGNGYUzDx532dYZ2bgyzqJuknZ4SypdhSr6KBZLPNTHKzFv",
  "key9": "3HF1s6NN5xGbJeKZuTXoAvxNRx5ky63gq2zpBu9THxKTpcf3st2awsiCgePhADaXc6e7PmjhKuQ5NEVwkBg4AxWA",
  "key10": "21KiUUnGeb2WBo4oxbdjceb5bbjPnbNjqKJ8vN4LsgG9VB9XXuTTmWThPmrC5eYrBQVZDvnJhGQFBSF1yWa43uTT",
  "key11": "3xRbpjjkchCxEtp9oQRJsZERNkbXkpH4B5cgCfGts3csEG7jeoXiRK7y61SSfYK2dN8m2e63EUTLc2xhFUYEUNk7",
  "key12": "4vJfc8mAZKaacQqhWyvPVdYEiiqgLtWHJueEyY17yuhgPHgHk3hciahg29bZYSktCcUFrNZtgb7q8X1tsa6jfdsr",
  "key13": "5cbD9jHc3kuoFfhohXvddvTrWDzhaJeJjsJWW7fhiMDggQsRMNS3KD3r66eHBSD7zAQrVUGpLgTDM67jJrkKzQbd",
  "key14": "4rPNTzwLKKpZx1XhqcbarqiturQ7zLVBLTh3KLyY3PE8g6tuisyZycHdL4kR2qvDjrcccwHVyyGftzJYjkhijgA5",
  "key15": "55hgA2ZVySDJ7t5KahQJCj5KaAUnfSBYaKuBdrcx2bTpPoq7Lch4BPQ3d5BcCZ54zes9b47DknifivyZ7Jjhz24R",
  "key16": "4jjHh553aHy8JpCcRsdFM5SvdU1CaGsGiZn6zRAPzAtwQk3se97D29MvPfJ8b8VrwQdnrrto8LBC3mQCGA9DXnMJ",
  "key17": "2vCXeQtPYqTYBA7jm1M2ZfehoKzBGWVm39gx3Bzwv55fjua3bbQLWHGxs2gEaU8ckTdYL1tyzJKRUWTF6z3CkMKf",
  "key18": "2HbLmkJuWf1SLSXuLh89JQkuYqZU7ifX4XkELzzPTPk71S7VBjJxx2ajgyodAF1YjHnAqXzUTykx9E5vmKUUh9nJ",
  "key19": "2HnAsySBXBXYviRYE2moQ7ZNTwZ9vDVwdBzjSApsxVqboSxbZ5d961TbJfeUs1CXj2f8zYwYHCnm6s4bLVkboRKN",
  "key20": "48wGme7CYgSt3XoKkcK6ReBYx12Tazckt784NeB9MX4xZoKc2ixvqaRKs6ciAgg7up5KmHzsNHQvaLwXffd7cTqi",
  "key21": "2mmWhr8DhXHK5yZaaCeNyeAUjQkBBZSaptMAoPj5GTNw8TWfJyHsT3dk7gd9Nfmxbxht4uBmu8mEdjH4jdykqXRN",
  "key22": "2iwxSZdjkuVsFGAkCMPCy6Wx29kEoQQLRWT5Hj7STETYw85ntZvFpPcYCQdQ9nSKmTN9aeb9BeLTJiD39ua946kg",
  "key23": "3G6qj8Cuv3LvGjPWvoyhFMZjBNDYrDXf4VpBPRAPWwiem61BHH7mPymwuaczwQNExEkMw47htzxK4YFwAPDgeutv",
  "key24": "42xGRpRwZPXZ8r3LNMisGYUcgFLwaZDZBLv6DQp2EYA7T4ZuE3zCs64jMRT19DexhQD9A88wHtNLwx69YTGsvNdE",
  "key25": "5ejSvkENgDad2eiSKyutEFAjcSriqTSgwsXcTjC8nV6KKxGuAJUuNBRRLZNk8vKp44Aiw2qrtGHTRW2aoiWRwc7B",
  "key26": "5J3mW2DyVsLYhqJsWE4dkMzgs14znPpRGiBmKF59hKNismEqwbcdjRRhMhoRYEhAu84QRkbEabxdoNqT3F3ckpDd",
  "key27": "5juZxxx1wQz62Fm9V75kF1t6GKTRaxskgAztRoi9YcBMNLwEUPQ9t8Acw1s9vxcSNvpynC15f12hJeB7x9tmuv7g",
  "key28": "2YsMtZ4A1u21jMDDbxPsnyHDBgZAF5hUFn4ebE3HyHh4hhr2gGbsgQcy2h1XDqKTWvtxTP4o2H4tRTRYnSB9ppzL",
  "key29": "1fwZ9g56Rr11WEbinRkQ6RpvQQ26pfCTnngPQwuwYrJBoWLacbTQ3ihVnF8dGPmXXwWgRePgURmQWt3PmrUTkW1",
  "key30": "4cYUaqTWKVMC8YXmitk8EJh8K1d35eQnLc6rR5VxMwJtcRZPAoSAHzLuk5RiXcKnZR8x7zN3p7A6NJzWmZhtZ6Yu",
  "key31": "WegjqJD9SC4JE4WCan81yHHXWWpkjTCKaKpQvK6v7j335TtmdBxKWry7uRbtPV7sVniys1p4e7LUmdtKSNhaWk1",
  "key32": "31gPYz2NSDs3tPkgfqgbLjHmiYGehgRB77P9eSEufx717qdujjfmiCYvR5iRZvzfWL9DvZG5PLwo7dVYnMYhrosp",
  "key33": "2H2fyzi5PbGxp2z2drvi1gBncZsUTf4M48FNigKhSq1sDPx5E2dSNMPACU5t7HQX2bMtWcCevbnxENVW4PoAmBLv",
  "key34": "31SubB3qCzdipWJhL6whgQZRtZagWZNQEBtbxtKk9zyXgC8kRVGjiL3ya5rfitCZh9mdV5FmUBEmukstAcGG4hAn",
  "key35": "3uwFiGDuuUXxmbLeWBoBYR9f9JJ2HeKK7ofZR5k5kX9Lad1uMPyBmXgxFr7kvommJk8nkr7ChJ17QgHnuUzJCnfw",
  "key36": "4q6cKUNbtsGJVncj96XqKMSiXKNWBj5qM6vFuMd3Sirvboqko1NwbpGwruGf3HVjoP87SbAcJNypsmyxS8MnYySP",
  "key37": "4bmhcy9hWsZyQpJ1tTe6zFCci9R7jSZBWnoWqwR41g7En69cSWNg3hMoVMeseL1oudeqeWV1MkWGUvhKqTLijy5n",
  "key38": "39UmxwchW5sbmHT67RXd3hoMxpaQENjUDcSQqKFP5NnxfmiqsAdR4hwnjCH6T15365dmJSgZFY5aiJLdiSdW9U7k",
  "key39": "2viTkKuuHcEyVsdAQ66iaBunX4ueCtj97ESXVNbar3bSd8Swq6ZmJf3BgFtrRaLU8eJh3XgKYuXR4FQjqYDrKs2H",
  "key40": "47nj7Bg9HQn9wybk9tgQ4jLezY4o1V6JYa2XoxaG2WWMaWqxEG1SR5M5ifuFaytpmfKjdxEUxYHDf4uznh5mxaw8",
  "key41": "jfxFqUvxoikxPUdfVAzQhT5UEVdPSfvnCXD3XNJJQpyDAoXLmEdAe95Ck945aPmG4reW8esLjdYJ7Rvkb5dPW3E",
  "key42": "3mtJsxXWAdjXiUdomgxqDYLL3s6vtS6swEdGXNYTBW7Y1iBa2U9AWSVg4PM4Y2uikNr4BkmkH8y7qoCuvu4GnWry",
  "key43": "gxBxh4jzBAHGzEuGxcdhYQupZJKJQbZDrebL3JdyVB6Cur8CKTDZh7AYGvBNFWzbfpLURsyQarSth3za4ZKYkiK",
  "key44": "36NsfwftZcYrhgffVtY7zLustFXANHTcymUhSCmoXKriyXHi5UJzf5FgBwBNrVMeUdFVGKgGQ7DnHaiU6nS72DD9",
  "key45": "5furNBueFRZXg1nShM1vq9PhPzmsTyz8au6BE9TXoYq5aH6HcmZ4z2Xn4S3kL3GxqGBHWh4p6Hpp5tMnot27E99h",
  "key46": "2mHqeuuZqh6sRvUqpxCBoS5WSeiVrFAVtULw6Gnr4CvkkbL3pKXE5obwVv3e3AYGHv9DX2biefqVsBD8GiDYwBdh"
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
