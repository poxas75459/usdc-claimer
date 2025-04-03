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
    "2h9X4JL13jXkL2sJdGrJvsmHcBUWFrjoYYTuY6JzkmMB9qJ7m2aReHeU8YU1oiCT9xvm1K83S8nnQNX19qgzeUNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeeq6jZvgDJrvaxR83XPHSWmxq3LV1aXPopVmMXnrEAVfZ5yCPq8aZvGTGqD8a8BcUULi2PZvxCu5iazSF9DoT4",
  "key1": "2LK15boKFbwWphzcr85BpRAybkc2povBpig3tSz6CasoxWeqQxD8bs4kiroY418m4gFn1L5rCZRV4ZV6dC4hwWA",
  "key2": "4RcMsd5JJZqQ9Vwrp2phYKTiFYsYzrW5wy1h7vRPqbWkzw4Wxt5TxY1zv5oh8D6zJAEUBHXo5jxGw7ACr5LEJLo5",
  "key3": "279SuRcbiNMMiqtNhC4dboKCS7gLYUwpE8WMKoBHKb3xC2TnNd6fzN9YWVrbE8pLBN6xt4sYMcWiR39WRs2fAu37",
  "key4": "5SYv4xFx3uWUtHt7EcSWKst54rg9pXMLbEJvC2D2hz3e24Jfw3vGRRSosorpoKZqfYx293Z1DmgDfoPjjV6E4wfN",
  "key5": "NmcG1qGs6iNbiYhBvp3jmuTtieUERoJCaCvgZrMGc5afLUiQ4o76Dw8BxcDDAhZJZyZAfkca8zHGYjmDmETBiqG",
  "key6": "4JRz2D2kGsHMCZGCGxET1mBgHUxZHGbgpu2XzyrFRVQY1FaC2GSbqN37k1tMsCEZymTpF6Ss6cSHUHCRxavgGPRk",
  "key7": "R4x1MraPao8qu85VHawaJMCJvGZfSigMdJoxHcP4XpTAB9H5C6dDqBSdqhsKCXCEhKFz8QX6QzfwKbS1gf15z1h",
  "key8": "9js4XLZGEL9PecCQWWtfK68BDWpqjqKvsN2tREgUZyJY27Dqtb4zCREMwtSTn835ZkJs4K3Bqoi9k6zBBvwZHq2",
  "key9": "5TM9hYUi9Dh3aWjwRvyz5TQtsimTnpcCHnPNfRUazmQeJuc9UbUmbVGpDiKWDrz2QU7pncZLPWx1iwTXkfc6fUJG",
  "key10": "44gxNQpFLVBmrJGazWQriwiQADZF2MSgRafSUbVqB8wsSrM3mLwANUtB6b3ywWLupNsgQW4Z2tb1ChNkUxs4CTM6",
  "key11": "3pmMfcR3eaX32D2FdnuZ871zQN9CaC62H222vVtQGg1quRjup4R5RzTTLaqSLZbFsP5bBoDymCvLjyXTQPAMSdtn",
  "key12": "52ixicBMUZePzNEScF7g2t2ScyrJBNmWx2xH9SS166Zw6ksxScYPwhwbcrtBfzyZVobnmPcWJFEJ3ffEpLC8ocnk",
  "key13": "2hELXVZAf7m6hEL9F26rnmizvbB3RawFSS82FcfPr5GXFQYV2aC2UvCUn2QW2nUmsLayaJgnc3nqygSSQue9iBqN",
  "key14": "5q1MGqj5Bscm9ohWW9wfc3pBEUAWpgDmspMcCzZzMZ5UdLRwhg53BjfCk4x5qRAW1cx1UsWd53tKM6B13j7vQiQR",
  "key15": "3V63p5YvWV4r5LxtUCZ4RnUr3dtyvo3EzuAFG6R2GQf7XKYFXrz72GSeaNbRSRCvgrnxGCFzsNqLdCp4anuZPt6F",
  "key16": "5oUYNBGm1rUtW78HZXCanKptHnJQHHw7d7XdWPgqFf5PYuir2XqRWjV8FxivHeSt55HnsRZBmuqcxpwVEJVjFqvb",
  "key17": "2EyHvRYvkCTQwULMtT2WSXk66qWr4toUkPgMELWjojWm51pArYMsDsYgDktFzFqMo4jS9jc9CrDEho1eqNkNSksY",
  "key18": "5jFJMxHB7z1MBn2jZj6QsLQ5qK64Qi1Be8rnM6d7VRwdTSZpztddNZpMeaCwbZJ21FPnEFgj8uD9oJeEQpLzBW5H",
  "key19": "5m2RDaWfMawvhYqdKMZypyjVajwkZCWwdK4CBHmQ2jEyVZwXWNqw2cpKZBHkS6M447upNk91ZG4KUhYyFJL9CN5A",
  "key20": "tATw8zMyYvN2F3tTRF4S6XWrAmhewQELKDdNT3NkhGkjWm9Y3KH6828XLvcsoKJLsUrfNcBVPqCfBYUBSiJChW9",
  "key21": "yq7VJdw7P3q5EhgKezGMGB2HxvTA78BkVAmMVpoU8vnEKEHd1AFQvnwv2RqzuaUZQXFaJwBvtXwXrjVpYW7K2nw",
  "key22": "6tL1U4r1DseLraStf2aGup6vsvWi8ERQcXsKwCn7vzy7rSAUpehNVu7oprECgGum2B6sCGZ4by9TwFkEFzzjeR5",
  "key23": "5m96HYMaHZ8J1CwjhDxtiSwBu6AUJiPRPEysQ2Gq96ctYh8cccCWd9xMUhcJzNFmt447ydM6JjwwD42cswqAhbDa",
  "key24": "5GjSYBRqPDevG3AGnf1BUvxG2gbHbRnFgKrJcAmnWunDwPHyUa6GiLYHsyiXXNhQU1fA48vorg99j12aBYA8H5UL",
  "key25": "27jisKAN4h7Y4YNn8XwKE91pMTzzwZFsCTvqQsaMHrqACJXZyjVYJyt7cR6e2yRcGUgicg4Zen5wFmawq6Zeh4tt",
  "key26": "49mRE1mJZki3XKuuy4EQckGg4z7ES5LkzvbnNPeRoofNaSiR74ZeLwVn2Drs5UPpACqt6uuo6fjhBSXchPShy3uc",
  "key27": "5n9uaPEPpikLz5NkBdixYBVH5uT3KBXj8ebjek1Q1H4xSMFDgF624vAzAo1n6uFqdkMBQ6uzu8Y9U2YSa4P2UzwL",
  "key28": "2FAbcMu37Xi6QSNqCCay46ipkkF7qjHeAGV6LzXX5GYrMTkS2x7Rq8kS2BFXdsKXtAvgAXKMeSn1TatpkwZJUBNE",
  "key29": "ZHwCLRMyA1fYYYgMwLATauMBy6BqTDeyBDsD6KTbCWLqfVen54MVmbwvg2B5oXZDECwG7KPDoqo6Hx15SZcSREr",
  "key30": "4LYo8Pp7kw5fwyj55Kmtpf8CgrxMwFSqP3NrgYYTu5UgQJRtqNKAmtZ8KCtAZxgRKmRkpQXW9EXwidvnyQdtnBdG",
  "key31": "2vfvmVoBjWQwtgNv5vPEGwHP1rFBKZ8oEwuRutoojXpz75o6QxtagnRtF1kV5AjN6taCYWud4n38oZtFEZXH81Ld",
  "key32": "3bH7caAckuAagKPHcohd5cuGuEEu35Mk4F5nc5uw1jNH1SRjBRHwD4nQHygVRRseat6ncGFtgfPJZb9SXh2LVxZG",
  "key33": "GPgBdqeQzqUmMkPYKYm9si7mnW92xzJngREy8WUwXhbabQnMGsrkTyVLZyJ4TsKWGXExpEkmS6Y6nibec44jer3",
  "key34": "26eQGvTx8AL4Ys8MB6t3Gr1YFiWWM1PKmCcFURC98iuQjxHREHpBwZWW1kVXr7XXZo3wnf1xYCXMJKDAdtpM21rR",
  "key35": "4FtdXmWvH4sjEaH3emzCx7WDxZkLwS1P2NdMaFfRJoUbnnKEUtYNrgwcMxVFqQHdsDZmuZ7e5TYTCsfW1obMw6bx",
  "key36": "2i3QVKiB3YFgwED1zABMk4mZ5Y2WiEFLmMpqwQaRWNGv3eTymBB3RrZhXh8CMMunooX376WrNbXNT8XSSYgcKfnj",
  "key37": "5aGnWGpcPya3MnHQLasAUtHAeHvXD6StUdibTNN5vy8PSDsgRQ8HLPAgbb1WHk18TL6gvCPZCL7Pjn1ZcR8hCUb",
  "key38": "NqovENDZrotmbKh3KMTppZttyX2hCqZPiQ883uV5ULa84b4dbkziVpuXdXtqhnbVMnpcWCbdirHmUjnSniHHwEd",
  "key39": "6D5ZpzBA7D7t3MKj1ovvxvzaX2RPHzsWyiG52WN4UJ6HfaSDQWt84fgSJhqy2rdKuXdDGiZqmaAs5sCFdvQXcqY",
  "key40": "3Nmpfh76TZVVN3Ht1EAwg1YLmiRybGjS1UBgq9R1J7YYx6JzKKTMZfh9YRHAysSpTBsRG3hBw4PKZqcgAEXQmSze",
  "key41": "2HNZp8mpM8zwMt4PdH5iSkXEATPYuhSbyVEiUsB27BhRLTGDnpdh9KAnyzH5YTM5VhCFSqxNNBF8CgecbaiHukZZ",
  "key42": "4fnMJ5kmXkq33FrLaELYxJpRf8h68pGD8D77SxzUpMwsKwy2GwxsTTVGSRzdXi6tWNPixTCDXCNMheBRiekhCjEw",
  "key43": "3stQCsSjijLUZbBXQpZhpjBXhpTQ4kxnwjBNTVsr9qpdsPeRgEGrnA9MFurgNd7ou5ef3MSHN77r1sg31UZAhqDy",
  "key44": "5iVr6Wsm1LXFqFH3rETNCFEgPBkfYZYUc7VMUnK9YUq9G5K7PT9vUBfotXa4wNeKvNEZcb1XrM23HfZgbs7xpCL2",
  "key45": "PpxYsLM3YjZNT1NNYJkczBrkHK6he76qCDXxD3HvmErgipmNFRY3aVzF9cADeDE6Tss3meiYXSbKLDpApZG6cEF",
  "key46": "2Q3t3pGa8AgJs8J3NCecPrh3WB6sWLuvgNNAVCCW4aqJvXNrgBsUBQ3BHs5YYZSsnw5pJjb81TyzdhpxLLHxWJX4",
  "key47": "MRkxKvR7NbJemDRL5952T8RThbe2FfoP9xZekkMt3zzVn7EiiVL6XY5PhcwPMj4QZZwkcegZRdaL8zyuaX79XfQ"
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
