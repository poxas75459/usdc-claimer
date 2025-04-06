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
    "3dsASFx9MTuxE5dWfiYed8m4XSPhuGEPoqzKyECLXPwv8XzV9cXsMpu25E7DHxtixEBs2kQzJHn1pbFfiWw4YQnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZU3ThFeqnSfFBDibu49uXVPyjWSVBpyVkBkMFu5ZebxnTzHXpJFau9eXHEVSiUJYkNzC5GWH8P4Rs75aHAzvtN",
  "key1": "5e2grUS111CJqLHq6wZaueBpLHtUMtLL9Yp85jSLc8X8wa8pWVzaZuWGTdLLJtvdJfVpFzZTCRpSRYDnWk2cs5XQ",
  "key2": "2VHR2Ane5u1uemG7vi53WaqDqBq5QXazQNyBhrkJD2mN2GpC1n2VpjWhYkCYuM6sdLkcp6L37N8x67hnDiXAvFTG",
  "key3": "4ieWv2aTp7kXvhWdhaxrGj8L4HaLCpyyHa8hLnHxiogH7ib3x32RM511rbiVUp5EBDQKzh6GeKAJiZNE81XdbBd1",
  "key4": "5BWMEibeaMUGjYzAGFhXAVtqg7NCEPZerYPsTD7jVYjz3wBW3EPJr3sb8iodxBe4ahXnd4NDuisGzXJMCZJWF52w",
  "key5": "3SPwhGQHBN5VwTHwFNM4QquUf8ZpPbcnjGYusEUcepMj9W2i2pgAJPLgLNcUKrsUcjzsejoqpwBjogRueySFWE34",
  "key6": "5J1szNGRpJLEQ2fGaY4w7Cq4cchPvS9WJ2G38T4rtePiVH3mL2mbuz8tWFi3TsfYrHYfs8ur1ypdg7AGpXXnp5wy",
  "key7": "3KoBurKBWKLA73dwJMmoR29UFzGVNFqduduAMHm6uWyvhxNP6zFZJQhuhmiw2K2Dah9kvyfkVFM3bRdHye2DbsaG",
  "key8": "2C9tbQtNyzspm4RnoW9dspYwzu2H4hNMTfstmT25XAsnpFpUsAG7LZitEptQ2WdLqcNms9KY6zoJiUjFbEq2XoKA",
  "key9": "2mNX3ZfYioiN7VprYXaSqtCbDDHYyJ1bMpcM4QbgeDSRmiNCHSVVhfEzossk31wyXqKxTvaoy92s5kU37g2ACiwM",
  "key10": "K19eoMzLwh4mxg3WPJhZG8UuHhS7GAEXQQpBA1f91yMa2jmugViNET1cDM3Pn5w5SXDrqVsyqgHiH1XiD9ijonh",
  "key11": "4dzNztaRwhzWAsJKJjPAN5AP453YS9Tj9pEZCeNs3H1xCPj2VACJs7JcC3f1yX7rnpw2SnpmbYY3ifk9L5oHAwUG",
  "key12": "rjbfrKpZ4ybz2tPMYevAKBQKR2uEJYSrFrwGyb8qbpFKwfjrxXcEDg7CKH1oAmEdd8ejsX6pRkXzPFJonGTABx8",
  "key13": "38ReFQ6C1p2RzQmX79vWjfrzMns68uaCEunbYzxuPsxz5xe9bF7wN9KXQM4GkbX2RpNaDDBiXg3rfj4tXhJeRiFi",
  "key14": "3QFzgex4stF7su6FFXSZXmWbmUyizzfgUCA2vANyV8BNUba8VVmA655tNrqgp6buPySF9KUWV8awzCGY7T5WrgCf",
  "key15": "5Puv13nowCrTpGL23Na5X3hWHxph6GVitgoCCsEtruCzjmqneMaAbVZFSjaYg9vgKWpe9GKwB2cmGNi99XmbHS76",
  "key16": "5zXc55wdH346ysUkT2gWvFtSM5ckNrKivYrRPxUb6Lv9csy4TjgcirAScqQGSCzrnT4yUuDcp9MixNA7V5W9nQdR",
  "key17": "hhGDXY3fXFP5F8bTNXcpw2jbyeYfhtCVMqYQ5EwJwaK5U9yAfEwMM86HCwvFYBbW9MNTdAwbrWJwtf4YJzd7h2M",
  "key18": "rPYiFsN77m6apNtf17PLpKEmKJydjknu2bkp13wAUX6pH6GrREJLQfYuNVEeauuEncr2YUr4wRbqFhGD8Q3mdWA",
  "key19": "2wqNKQ8hp9TsXEGnkjQwyRcosBb3KhgHqSAM5gPMQb6zc3d5h5rPq4YYi3DHPwEVcQGvH2Qy5zzSmrGd984NgRmA",
  "key20": "4Den3Vns8JKrk2xmop8CtUCY7LPNSWQvzHYP1cHXDGPnowrUNVyE7ZifSx5MgaNFwLfLcFnzm85AKzwYAUq8eBAt",
  "key21": "2yCo7UvvNoo8CfKgZn7yp4Vwbi3QF76hQrjuSBd1Asofdo4uxyudt6M4bV7LmmHBw5PLBN4vJgphigLAdJXHFxWG",
  "key22": "4sqp1g9NSeC2oxrHfezBhRrnboQkeAbDKxDjaG7qt5iRBx5wBQUBKYLrq4pkdeYyPzLdCUFnZWT19F1VJA7m4FK3",
  "key23": "5agYfXCYCevtMhExzrQXMxfUCG2a45rLdrncgyE6kfPUSuBf5zmHLYnVQhNWd8Wfg1Mb6594JQtnnoAR8C1iaukg",
  "key24": "5aGkQ8Mz35GB73zapvRVEckeaifcCHtYyDhaWQACcJYZCbyCvW8XT7FwcM5TQZWL6eVADAAWWJD2VZELru5tvPxs",
  "key25": "ZTkVTtVZdnMS1ZCB3bp2E5kuZPPhjoX3yPtxhbzM6tprbJghJGPhcXXhFKouukhCAZC94PJZwhY6pcmJfoTnS4J",
  "key26": "3UJTXEm4PkWVngZ48BmNXoRozhqsEyJV6L3QCm46CdYP25u28BhfuAbUhhNNj8KGsb5qFJLyEKevCo5APCBJydHk",
  "key27": "5sRTKCXaMbCzJVexzA7FLDHDZBDttJL8P1dnLFd2mMupKPS7QKiqE462NmucDgVYH8aFGPUoD1kTmRrJ7mGEBQLQ",
  "key28": "5UMLfPj4XtLQCZMFnqr8d1XdwU1fSBhXSLe2hj3WG1mEt5Ba2LskiJ8M4J7oz5F2igeYdmHb3rTHWyv5uY83kn2m",
  "key29": "5RpnQGe1QGohQduuBWxGJm1epSm1AkDPjPiYZwByAnRoJPe4vKvhVuCmXxeNkfrTELSGWULyPPCdjcotNHTzm3Xy",
  "key30": "63C7tAtjyFQXsHjhgK2gUtDpjhzymYBjcQcwTiyikn8x9FKzfibku2bW1nSLWsJsp79deijcxPeyvMRuaTUEMyku",
  "key31": "4W45zvEbpYYF3s2oCswAHjDnYWyN9VUZYhCoY4CyukYBYoS7MbhYfDAJ1PhDnYEuCeevx8HRqfEHrwwQd1HVgXuj",
  "key32": "4QjsttFKpTvHhCBXshLSppPaP4FPeJ9x9Ty76Tpts5Z2jnw91xfqJ1gTkcmYiXaR2vXiNExq6m2o7PAtm2ibEuJR",
  "key33": "67RR61cGbdyjt5Yv7CTZQK7p6qFW3WbUuQRYr8J8J3pfZ1meBPp25Y1TKJwqg8DLifHoya1WQFW7E7z4ALLrfi4j",
  "key34": "5uygRaZ3xXLe7f4pxcsKzLLBtUHLmis6jnCJx2WYLVPJTDcMYegQeb6yqDwDrp967LKmq3Rny5qDniG3Fm4h25Py",
  "key35": "36KCX7V7P3kBCkShnz8nm9ygjSWzDZuvEcQU42AYWtAj8tmXTHfjBnR6FzCFZQovcrzSP9JyhC91fj9ca9nazsGh",
  "key36": "4kBmvGCKzuW6YtSCvgCgEYZN77pTPFYHTVCbT77VGtUAHqdMLqu1xUg47kNAtS2LTprPJmdirEmAFrHn7U7QKsX1",
  "key37": "4GY2HoXzG8wSqfFHUgcezatSR3hn45dZU7iAVSweWboV9XebAYY3kRJBs4L3AtQoCyvEAE7YV3GPyVuZiH7XFwit",
  "key38": "5tcY3UkGS1qWEySYzR2XWm62VcXwxu7iMRSWUHG9fcuASDGh9SMn2d5aTv3YjU79jk7LdYKxaKzqZfTaqeXgmV5D",
  "key39": "jStNz4uGU3a7GLABDdHexd38r7BjzfjDxgJ4JLdMp3gjbteVmAQEqXAXz1iy4uAbsieYZaA9tPmFFdV1uMx6Y8o",
  "key40": "1zm4cjvojPBtKGgWGwUjo3aX7g7TejDxNeMGNXTpZCMGNNeX52pycHeM26XFFkKt4FnpbFhCXGQ6dVZ4z2cZQEA",
  "key41": "4XhZWpvoDeDC5WVmMRVFUc3QzB1nRT8zKZpEPfK1X7GK6D4r59vtY82bqxEbLmoqQAq32Asu6tADoFcF3Rw64t4x",
  "key42": "3waC2Bd22RG5et62E8aijCLKhfPfejBPEwEc9xmDceK6r64rhMtmWPVcpx7iYafaXiHKziPV1pWdJg2mjb5DP2wQ",
  "key43": "T1dTk9c53qhnMJf8K2ZiU1xXWhMzhA8prcQurce9rxEXAqeUnsXDtzLc2APKtKuBztMsGzjjZ4LFxRHDQT9Ya28",
  "key44": "4swt7bTwbMea4frTHw1qN1PR1qZv2TdpgNy9K8GKwDdJZUsQGZPSh1t1K7cP7Ztw2R5WkxmA7LM5kP8pWM555xaH",
  "key45": "3VkWkUCYw5k6VtDvrsr2nacJc2kLc9vVwN8sHZKi2oL9MiUnPVnxs7CQouLhgPwm7kb4qQp4JdZsMFmSetwk6HNg",
  "key46": "2U2SpLPGP9wUTmjmUz1eCnFd8W5P1uqEzDXKgEhcRds25YrTwd2gQhGi1e6MREfJ8E63VGr33gnwu98RYXWbHqTR",
  "key47": "5gzyk7PgJoEWFYXc4TAajohKPp8x8ofiSHKtBAuZEkYKmXdcvHo45VbA1tN9gBKeRR7GBBkkTssyYY3azFXAPwnQ",
  "key48": "5UNSP32yhJ81n7i39V3PMtC5dAKEXkzH9EJGPXzjo7NCx47qjhYUo8bVFT9d1ZZ7u1oWzyRYVvSiG3qJHHzvHVCT"
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
