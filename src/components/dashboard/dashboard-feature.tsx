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
    "isN3ugvkYSLsNae8VVWZ2NyiiQzuW8ivQVB6rX5vaHFR1w3VW7DizsPVELg2cWrGf1ZBd9MYJ3GLGGHHsawpmDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNRDxUMGNF16g8sLFjoHbpAZXwrSzYQ4EwZV3rY9WsXH58yLYKPgV1JKDfRrZFV3QfVBKBePLkGRVTLiVdybb8U",
  "key1": "3K4B6bnoD4RqnXyKCkwpejJ1Bbz3k65vy6bgBpCps3NHLrCbJZ1WQF1zk29BF6wvHtq9rp5NRQ2zP8mXWpEspeGW",
  "key2": "2ha8mW37Wswp8t7ezPsJv2sTSuAqhDA92SXbj842tucifriwtnbPN2J2QMoNCDejbGHPm65hVY1iWfBZcDtQURr9",
  "key3": "6132sdeD4uRUQqLT2Rv7XXP5Lytpp4xsTHMHAzTqNvpoccAsQzeMvUzPVfHQR4bseNS67cwpDa6XAR8xrohbxBw6",
  "key4": "4pwr82Y4rMTg7VLdLczw1eRQwcMzEk5KWyLgTRMs5TdCA42otX9BRVx7yz9fHsJqTqHm1U1MRAE6UaGhXk5Z3SVY",
  "key5": "hKogfzySSXR6n4HsgviDtSGtHscuAc9tFva7fPY7HqnyqK6iccivKt5CnYH5Awb4FCYmPxwQVitN9Z9nz2RSbDa",
  "key6": "3Zi5uL9mCtDKnN9FdLf2a7Dy8BBddV6WZuu4Y28a32YPeUJG2qb7pzkeVsKsxFvt2msjQgb2YarL9kCgskUHtiFT",
  "key7": "2h8uAwxfSQ24CHdjvEXr8TLBb75ASkKSpACqCBvybzPKYSpTLWUdFQzmxxJ2Nmg3f1UADhxr7SnmhKht9BFX6LQZ",
  "key8": "3aV29ZzmNVv3kEhHQGya13ipdpeupKKWLLFAWpz6jGE8VARhq8ihxKgxJHos96EJLZxvxErWSPjkxLAZzFfPm7gN",
  "key9": "2jRtvQ2LuLP3D282oziiNtEhxRSLL2kpTVveA8sBUdbwnVXLrw2t89FRrw9cuRGc8hzDgiwDCMaDtchFvJs4Buj4",
  "key10": "57ZNSvWpzLqkJyHVoUarixJwHFbuZC61dLqe4y9yUvj2Mp9FgVoFBczs7bh8p5m5UFZdcXGnSMENpJ3CJVbFatZV",
  "key11": "4r4Yg7BztDbJ3oi8RKpDmRUNfwkkwSYUsGaqLsJTvPnqUKkKsuqdEGfijRotDZF9hEkTtdUk6kZfdNYYW7Cpvfmm",
  "key12": "57K8uoyC5bsSeCu21Kbsyi2pvuGC9uoiKSFyddGFP7Tg96DfiNwqYQs6Q51o8ZVxqtYc9BvLtAqxGEjdLF8oke4M",
  "key13": "2UDuwM2zYuKmMdTDjgDYUrbrZBorFqdsWt2c39cJwCdazhPn9GZwKpG5aQC4pyLkHzmPANw17wix2JnPkNZqaDwp",
  "key14": "4L73FNERdWxowdsVRavPi4oxggxU9FSWWvqEHHE5g8iZ89PQe3tWoYz2M8GGTtKKj3NsCQPFJDKGmsxgr7HFPsgJ",
  "key15": "5aGKnqPqbhggayZt495VnqqqWYGw8YFFSZEtmZmJfbWmCaX9n7v6vmMqNCk4JgZrJ4GVXx3aduGEPd2LKLhmc4Td",
  "key16": "3bb7B8LNvriCRRs4SGCrMfu3JhrNXf6WWHcHg9h5SzvLtQ6vDNhEWPtw9gbLTGzUWJarcLYy43pvTDSd9kB4wZom",
  "key17": "45CxXy9rozCHnGWGaohsLxHCsVEn7gGtanbnMmsiWn5Bbb2XVKM7HxCqnk3TxTroR9bnpTny3AsxhZJK96dGHis9",
  "key18": "4VkJtHGNMZxxeBbKQxHxwcXj8awtUJKNfg7vFA2fDUz6Up6Zr9n7Mt1xUyY8MmHifvHeieTRFTEkcPDhGQjjpna2",
  "key19": "5t3siWpGX8s7m9x5S62zGxSW1AJAgwvL17rthMkNqv9zZt1VAatrr23YwQkc3QjZkM6QrpZ99ggnvPDtD4yEGkvx",
  "key20": "iJ2UAYDYCsZXViztF8KDwDaKYjzkyLzKyH8Pz2kaw7j5jyXxasj9oFAnwq1cLKEKzxGPHBwK1KA799Vh3xZS4o8",
  "key21": "MMPfk7tguJuGLMaK2MJM9RV7kf9oVSaLXHh8Fw1dc9XT3TVZAJwjfhYzeFxHXN8Rzg6v23s5xGrJmZR1MMkR9g2",
  "key22": "5Hqu9BpFKqYgsujQbZZFqY99mZ3vNFHRjf6K6RWwZT2febXzQ81eu1daLZNXUNCXeqKRyVAArvxB7CpbyBHV5s5N",
  "key23": "8DuHvcGCfDyhP2kb23pcbU1BUchp9fiP9yuW8QizV6DWqtf3pkUNvgzyQUwgVH9S5PnSWWvusJtuGtai5qhvyJH",
  "key24": "3ki3BVveNqNhVdryGZJ5fVQwP1snzVMQbM31SKRcGGU2tT3GBLPWKuGJsCBEk7yjcK62Pk9JpxonQFsBRfVBRgFi",
  "key25": "3oZypGptasMcmt1M8mMkmohAzbXRidYSMh1UUKk14GCwBkKDFpnhBLFZTEcjMjpZMe5nSEEBBUGgnoMVXhnxXKBv",
  "key26": "3E6SZb5gXa2fzPao51tDwuCkYfyQfUQ75HXPCQa764dvBJSZSgccKKW5TbeDosm5Hwnhy6N382RDxTmrgZbvHScf",
  "key27": "4VCL7NgwwaVDDoeQo3HL92awDz23gXbtkfBeSYkKtsK1ZjEJVZ57g7PScVp8tnxHZ8nMK1qG9CQ6SwvTm1UxDVCJ",
  "key28": "3V8k1EQHwWbHo1CBsAGGFZG1GrkR3J859WjMRu1XFESQ3Lf8aLJiW8opXctjzp8GCwejxJotTAMGxMfZu7XAMHRS",
  "key29": "2datQC4KjbrR7fbrAtZzLgWWqmKV3PzwknbXBs2Gf88W2choKJunUYQgdgseQ4C1UojfPCSrZ4m5G1Y4i4bNwVgE",
  "key30": "5rYBoZ6sGsqDDSdgabvxnyN6hUYaXXtW8FVF5XPHSwR1jomnwbDaZ9QzHDiwHbXGYvxLiQf4oP7F8P4G1z866AEA",
  "key31": "5bigvnUwq2HQ3AQC1c9N4KAyQ7VzkbUcdxLNiTkf4UQ3qiAYSNVg1a32gekYjXAz87iYsxed3Zsni97DjL3nV1yv",
  "key32": "2dursDATvgJNoA6QjkyncSXHZzviN1YYQZv6E6hqW8HNBWYFnuvsQx9TxCbLnX2zasEH216b9Sk1yCW1uiLLhwt8",
  "key33": "8L1EBHi21MyYipRrs5hyqvfKGgtr9Q72u5Xg42BnEhgWiQZZdaikHupXGPmCk4DhjnRR6pM7C1HEZ8b347h5Tba",
  "key34": "4iuXAXRg8TdUMqB8BGUVEyqKB1L2h7tPXvh9NibeVRtpUp6kmpVFKBmNxRQ3fJ9GGcnTB7SsHowXjHvj1A3gvkEn",
  "key35": "2d3VJFhw5tUDGmA1ZB3NPwnnURvMTpDWw7D82mcSS99UZZLbESDtE3EAjrCixmzoZZrjTfW14EGyxy3hvErAP6nF",
  "key36": "4CeztweQJsGMxU7JwiMSXKXr7ykx3B6vxDiTC149eDc643769xfWvXRXYNmNvtb37pXWDnaFfXeVrmuuyF3eUKpF",
  "key37": "hTdBx4d8c2VWtzDck7MzQiebyYdtXmPp11bHRtVFg1YtULADK5GRBkzH8YbWUyTUGM9WNhMrYKNXBQ59adbri8f",
  "key38": "5LRegMEUAYvcpfXsaTq1Xy2oAbAcG4Zk4Lh13kcoimTBbFgXX8d8XZSBBcsia3tJrjdWoZLjx12EgssVWhogVF9T",
  "key39": "yDxYgQJTLC7qJDCVcCNPDA1bnLTHhzFb3cXqRZSHWHgaVSrs4EoABmus5F34WUGPPkdkiUTZ7ZV6n8WavrU6CUk",
  "key40": "4wTAyKHb7WqzhopejGZghNDkThPzZcUux2oa1bStmtLgDiUQQo4z9yfCChrkHNmuDCrvEgR4TUXeSv7cuWabVZ4K",
  "key41": "5DtvNG3vmNRniUVVtU1ihCwkPm8GEUxis1QpayYeHohCDHdXot3n7zKtuK5oC5CrST3d5B64t162fac4o2BQEn1T",
  "key42": "4uAT5FNwHgsmix5GUAAnAEx1Z8vyDYu38xJrntyi2hseFBppKpAwy4kXiicGaxbjQbAfTzdxhbug1xP6TFGJgAoP",
  "key43": "4GKaWsWE6ETFwF63GYiDxdiK4jtKb6THtegodUiimW9wZN1n6UXz8q1rAR1QBDYaub9914M8Gf58psKb5DD5pj48",
  "key44": "5MA5dLgBBb19sKDgzEpsS41PNuBzgexnZuuVnPZ1pd5k76Noc75JpHFYxUmgbChhA7KsSACRc3zSiErRJtGkDZSu",
  "key45": "2jogYMVmQJB4XhmXCMHhpQN2nuRr26L745YjfGqQbYQZ7FCXxHhexw6CSghPGVKwY4hxSabZVy4sqHjgAspJvxDf",
  "key46": "56TbXa8KmRZA4CQwd6Q2QXQhwrFRu21fjZzY27dEvGE2UrT2itTCrBM1LQJzDmCxpKZH5aDFPRbJfmzAcEHPY7ZU",
  "key47": "5pF4HvrJ33qxUEZ758c1jaNx9EE5kFcbTRtQpBfofNL3wwBtPWsYZvMz4ovp96Z6KGYRbA9aFmpQw4Ney5WqnvRK",
  "key48": "pUsxenvdVPLN9sUkrVr6zk3fCf3bN7wjdyYGzokAsdvfuoM2bykn3rDBZ8MqdRqHzjREfV9F42xtLuMiMHwrpWg"
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
