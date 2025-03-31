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
    "5yjFX9QuWxewiZWQJHYtcnxjDu7Db4YNFq84hz1BtRuzorFTxZJ2zqxveBwmuQPyK3XrhCdFCuDKVChTSU9djN3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7At9J6eMqH9RHNZ3iwbZguJzFcLiypT1jNgQYr7rrqJhDaUJqPPEeUFSSQ1zioUjrNEibihDShV2o9S8hTpbS7",
  "key1": "3dBWpVenw7KrBEDgqaoU61VpkdWwgvXxov6oDaGBtDAq1536WjsX22tZ2wca8bVZkTkfgkQJexiLNC3v77izzZQj",
  "key2": "31pk8WJeac8FPHPJ7gGcSdE3NpY9AKnZyv7FZQyvFaMYsVohfcWYyH9EBvK3ENnsX7vzcXsREa7EceZnjkzJCmaj",
  "key3": "3bUJZxX4pQkXMGKr3v22P6kgX63cQjrzHvE7t3GWv3YtDLrxXmURryE54mQ9s6ubdxt1c2bUssp46uSJMw1bPA5j",
  "key4": "3rofkw3XfFyKMtU3dA18MDvfGXN3i9C4sS9RwFo2T7QHcqH7otg7fgYcvUdYXmU5H9uuH7jXLNXbJYv8VPorG6H8",
  "key5": "2CT8MVh92kYHipsmn7BbwGVzVwM4SELPSGDnbhBpjQ2GDhpWcAALjmzWkiLp9f3bzEDfdi1LbXuw4UFGwncyJkDL",
  "key6": "2WGkoG9KwiYBfFkzUaxPCuxJXc9Rba49GDPQVTVynWmAGLFDzfyuaeVXARJj2z6nAs9fsBfdd7jjfa7GV4jvR5Wb",
  "key7": "2kDLHvkj5TQUqHiBit2hX7G8uVccohcnxw6AZz9monEDspU1JpvEcRduLFx97LqQD6xJpuF9rg2NaLGjiGqu6Tb6",
  "key8": "5GZztetWhwWEdKGzrtQCKtRsFruUPp3HSb5PRtcWinuAEoXgRh8QTXkKcJuAmmA7gzBmtZsNyK5iKsGqCfT6pVH",
  "key9": "39dbUK2aX1EdaHsyxb6gVZW5m2ZgoeCM4Y2FyxE8RGdKuC31CLxhYAHiY5o3wzNYtnXcDzzXvqCWxSUaF7Wzi38z",
  "key10": "4oe9vWPpP8fit1j1d5rVJ7Md2cnH7iUvGgCGnvgxqZv5cwsm4p2VLcLTXxFwk1B2ep9jcku4fLyTR5szejt26vPM",
  "key11": "2HrV93RG8e1fKqL6xLASXfGwGn1fN2moTb6wJQZdE24hoJfNKERyqege6zGJFiiUxLJgtsasZqjqT54gq2FL31mf",
  "key12": "3uzH4Ub2Zqgut5vtA5Kgr7TqUA2Q3YqRKsN5aQJeUKoGzzmFDUsRG3sGePfgkT7qLm3UC2t2Lec3enXJe1KE4rei",
  "key13": "4KGTrxnfJzQX8pgx6bfXJBjz3a87iyVC9dWvvhWvUDZ8epfckTwBUxNPmUyP9fU2piL3PHMiEyEHkL8dYwTVdSpD",
  "key14": "4F2Z64n74rBTc2cFunVxqkwRGtLgmTU7xs4uaa2LN8MtBy1rV37YGegCPjiVuLmXRVgLBA7kjuPuijAPp5TdHyxJ",
  "key15": "sj1sRSAUkREQvK8jgdocteB6ftw7mFqEUJ4YNEbMcCBhJnSqzSKYTa4hWxfFBwpaPmGkoYMjBjDMQsgTFpSmv28",
  "key16": "eEhLGwUsngBsUJ2D5SYQkXN3sZWEHzje6E8EJav9Yt3YhG1hrYimwugkK5JcE1ThMTHxyUbncJBnevCHewxRaDD",
  "key17": "sGJ2a5yj7gHrd6BH3siRfzuQnUJzSK1XrgSSNVBDk8fEAGhBpCNFsRGrDgZcov6uJ4eM62ktWes7LDm5YPB7cfP",
  "key18": "451gRAwwJBuGXCaDRHiyUMAThZNLArcCUeJ7CnK2B9rgZK5t2bS6MMUSuYXmjZGLfkoXeGkPDY2xdE9eZ8pTiHUt",
  "key19": "4dZXwSp23wchabhWofCdssndZFVN7Fpk4Wf6EogGTzJJ4z4HLYMSd1b8QeGsmFk6JCNzTN7zqz4WkuJUD85ve6z6",
  "key20": "okxrH6HBP7sKPo6vxkg54Qcdq5TzLDJBhqLsVLvBQUeokyaE79e37ocDM8DjSWqrAqia2U5UQ7RaJV4nkRa1Rzu",
  "key21": "4VGfWFbaLuR5bfZCW3VJSXDZxa6ZPWkg9ZrA4smEaof79qKfYVgpt3orvoPvfATPkR6B17oSgArwffq5M5xnrLRS",
  "key22": "ytVBizkkoZVFqNQEaHyYVhzpWuE7rVX2c7j2gN1qmGPWZzos3oxB7Fz5Gh8JeW9YiVTPzk8Y8B46Uv9AqUH9MGZ",
  "key23": "62aTL4jfy3U5AEVQUNA2cSfercFjK6QdUUx9ancAEBR9r4x4gVY5oktLVpZTs9sm3Tw4JbEatbK4k54YqMWiCGqZ",
  "key24": "3ZkpzDRJjm7nCjVC39gfjGRtSRNrND4M5cPNgyB9iCw26JmZeNQRjagHMwH3s9i1UBVKmQmXKrUz23Kw5BJfWTr8",
  "key25": "4i9tkQvGXDHHaQ4ksbPhjVmaxhphNW4KLELpfmPxYiSzat7eSXUvqEseKG7BbiEdcoGcXe87K8aQeCdRLUja4XCS",
  "key26": "3X2k6FGDfEwemt5AF71EbHpQ61cv7uR1ovAjqcTWy3krcjoNhXyuhdrLasBDVjFmVBJcCSMAaD2K87rpDKNUU3dZ",
  "key27": "5QbNtZZXkVWhLQ6b9hDMkgSvQNK15WhT98YctJkL7vwyj7ypHjatUYgpNAx6wyNDUHuwgdZbv1Hgb1AyXyTsMVCY",
  "key28": "2x6FnAXrYMGRuBi3YGpkKRsBeqx96hEqfdiqLLBjezV7DPPkaFcnfx3K6xPrm23qaZWgJL7g3bbAjitsNxzjRJ2A",
  "key29": "3NaYyiJJdKn9zc1pbKvjvU2He4L3kf98XQqvp9s6N1XjEeZAapvBZajoqKsDPL2agUmTpHAX72pyEnJZgdP5FP4P",
  "key30": "2LzTTzFCgmjPr8zFCCTrXN1EHMnCnFoszoFPYyXgUQwxEhG7o2YbbH1bYBykEitcGTJQb4cKhEoFF3HCQgifiwTd",
  "key31": "5U46mmnd5mvv21SKpFfdhfJBCEZPbAKUfx4QxRpqaeEcUEiDCSSdNjUqnawJYyzfVDCPHaPdJcoDQT4GCyf8FA7A",
  "key32": "3WMjvEUhZwjwwH7ePk5oYKP6QFu2vQCTYKAjPgksnd84BwvLCB6xfSrnccaT6BYZv5g7EkUsnvrBa3mSJXLkAkpY",
  "key33": "5QsVPVBDg1KVhKDerAKsUVnqN7HZSKHtrAMv3JGvH9G9Ntp8DfWuz9LNDHwTNXzGTykJRMmSm6ynFpgvmwVcQbh4",
  "key34": "2gs8kewokyv9YiVFs7iHNqdU7LY1ojSxZmsiG73H2huGMm6F4J32wcxWurVFpeRrLhseDxrmyScJLQwhRatMEvPy",
  "key35": "4R7UoEQDwPBHkLBJSTDDYDvULJU9rRuuT5NzRjdQCuQjNYSiLBJktLiXTKHpBtvuDjcURTLQaYX1isAPTWLQ3CEs",
  "key36": "2ULqZAnPhybkxuyJHJMHo4kiJEf8pLRGSzZVq9aZRJ6eXt2h5e5mMTxLsopQzbALRpzkKSFMc9ivDz7HWquEJwDm",
  "key37": "5t6p58H171hGRn4RixVxh5hYzNzNJWH4Wi643rchbfk8Kf9QAWSxz2F5vpRZiWQQ4FRNmFmevHgArw6JHoBYgZLn",
  "key38": "o5JHBpCqnndH9C2ACJbsxE8mfHnsSw3MiDcgH6ccieTKDBfx6cpYUFN5W3UcAY8Na88pcsJerHA11Nn6KB8bVbZ",
  "key39": "62kLpDm1Fde9FdGe2jfpiGF3RyJSrj9Qr2XQjQsB85vMAKx96W1eBPi9j1Lo3wZ7qugrSrHutkWQv4YrTPccTwvm",
  "key40": "3ebXAL7wm8kuFBKQDcKrkhcn5yKCnVWG4JE1V3v7GqykGKYmpGwnKu8TTTrWgpdjstRhgF2sjNJwEBCj2gVjqyr3",
  "key41": "KeDXuYzfw7qchcgAXJUJrcgjPEfEREFZYt4kFUFdZDGzqKKZWBw335uZHRbNXE4xvCEjgpPssW79jUpLjnbd1iM",
  "key42": "4gNABV32XVLN7rRhGQAuhVS9xxE3AteJRM47Xss2x3aiQuaPrgB7bEuAKvsGCkFWG24kmxsp1YCyEJtyEq8ayanJ",
  "key43": "246forF3LkHtvtPEx6USQSJHtpJDMmah56UH7ApWYQYugNpfn5oTiXUbKqKpSsH1oP7diMWNE4A98GFqMBmJGvC2"
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
