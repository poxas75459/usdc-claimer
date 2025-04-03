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
    "3wfLgNnqeoFVggRsmVk6roFg7AoYbLoR22eQnZyZF76h16uv1r1R97T83QE7gCjcgbqJEu25BGXZ2MF7yZ1UQcdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXQBmBFUNh9BcsSiKwDErWY6s2mDFHa3ci4Q1swXUwLPc5tRWTTDX55dLSCCpxgd7GxX59mX3R6a3obscEjy2X3",
  "key1": "4kBPwyMqcCmfLLT9UnirE2xYXkrZFJ533nYohvn6rTE9fgQxNKcdisZwp9EZm78HEKbb49DStFw9VxuaDuX2ZSsL",
  "key2": "3gtuVyJfPoHYc1qSfyeKx7QLXb4pUHAkro55RyCoAVSrh5AfN3LdUPsqA8cQj9eNSYUFMbtV4oJKPUa18dVP6XxZ",
  "key3": "4V7VncmWJ3MZ3sUAn8xcRVbMHPhbi45XQ94wNESpA3cqpiYNRotD8pvRcg8M8rrqD5h2ujGmpXk3swaa4bEB29NG",
  "key4": "49DMcDNj9PZwdqRcQuP2vTaJytZiNBFhDUvRkXQan4tmFECTXoBsvUrnFV3uDsy11mJQJs1L6jujoeoZ7FZWFC9o",
  "key5": "3Ryi2E9F49FS6i5iZS4u4t1e3ZLE5LA8mfZWkAf1CpueJncu517VF1KeMThAemBdXoP1Np5XJTHuLA47NRe8Xter",
  "key6": "5vBSUHr7jeZaWjApjk9i4QEJ5d6aNi56cHojQHq8cK7LR5ktHQJF8MkbPejCwLseivzhVWZ5zPkfhVjmbWoPS3FT",
  "key7": "TPzDMk5DejMyu4khtQik5qdEMxoFxSwK5osCzpPY4sAi9yNyX7WzDuQFpv2pCjKAvUUDAZADy2YCcaHashuyHVy",
  "key8": "52Rki6KuhQME9Q2xbvLZRLz3f1YnSZSoYLmvZoQNW9jptfFMr6JLiufR5z13zT2KWiGzjLWnSRuXAndrPzDXrrCV",
  "key9": "4ZuLxL4sgt4X9YBWma5B7ydei5v2uyBYG7MtiDofPTUGUA24x8YTq5kK68cXWuL2geGxsSGetHCwE7ogq1ne4ia8",
  "key10": "TfV8ReHspsLpZgmzk8k8unoLvhbvvNAiBpw3Jpkgu1G6prdcjVaYk2vC1ouL9dndcVvb64iSP6o1SygWfwuSBz4",
  "key11": "4MRKsppJNbwqdKQwua8FWRysfknd9Hp4MgMVeaXELvqpuSbCTAooB4bFohCJb3NUEYicgT6UWQscEkqPprF7yLLn",
  "key12": "2xrjAQQ7PRLr5sAUT7qk4DTqNfJciSNsitF2wiWfTxTf9W44SfSLLdWv46GxGJmRcDedthjiZCJXVrZyLFNZcwhi",
  "key13": "4Yhh1h56qy5enSoEgW9rYwPk19yXBXqR5N2YsWDvDKLSVduZNxBXduUhmvMDcgJmBSER3mQD55CNvR5cHnCttW2K",
  "key14": "KfMgRSrFYfMekAY6iPJ2cQH9FZARm5eB5CYTtg1GFpJa28nZMx1Hexu4x6RMaMVeDhDTof4n7pWeLBGR6Wn46ot",
  "key15": "hR9YSKrkPBHcocvmw8oo4v5FnjtdiFTQ7Za6Vxn1QZqvv4FobMypkgsQDfhyyhb2GfgfpLdgJCXAjW3GwquTCGa",
  "key16": "3wWDnmegXyQYvxLAzZkAn4Q1GsqtvvPqNYdsbhFkeZ9c6Z7bwVikq4qs5r7DVFLPzKtD1J8FXrtoqyAUFY2JJs8x",
  "key17": "4GNjAZVphveXPjeCzeoZevdnJPk5GDqtXaZr9VJ7SgiwE95H3th9eLGcMbnsRGezJzUNbTP18iaDebxvWPtuLYtM",
  "key18": "61ttfkkXDdJ1wXxGv2RD3wtUK9155dTGDLFbGt4YYeqmBcJcCoVQFwXWqC4igwerrtZSajgQcRwhUuXmgNSY5CS8",
  "key19": "595Twr1h3bVo1dU8UeRvuv8A53ZiujsghUeYGXxHwyBjrZAN698aCgJARc7hZ5tfZA5A1di3bQQsytwLrGfxubTD",
  "key20": "2idsoH6TC1WW2Gnt9ii4E9HYLSX71MBdcy7n69Ksejndu5RFEEwChjm8CyUePN6n7tYzLqTnTvmH1HQB9vHxYN16",
  "key21": "491ryVa2sRJ1BdEUw9F3q2h7dLkWZ2vEmZUui2W5QbnthQvxya4WLuYnKzcv8fkGfc8ehRYb6YNczsnBRrhuqcEy",
  "key22": "5ZxNo5FdPNCgsnxDKYesMkqUawC2uy4qJC6eqvYoRrSpsNZxDymSjTuj5MfVd5qT8Y8kyT3pGHeKiysCzHdAA4nv",
  "key23": "5imLrBfYV2oXcKz1g7bjR61jnVH6YntERUaaNBmqPy9WawV4nHBf3jSP4Lgem79sjMYiFEzGN7m1xZvCbEwr3Ft1",
  "key24": "63hN1wEYPBtKcBxZNNMQT5SoNoCMRtGNbBaKejjtPQ9M2Ek6GSGuo6XEMhdRF7e5RvhVycKxjvqLfTTsqUD33Ruc",
  "key25": "49aeeX7wcUzAYH5zaZwhPpPee4USMdmCRRZh5kRXwMyYSmcUCgwsMbp6XiuMRX8pt6W1LuqhNA1v6X78qNifDfke",
  "key26": "3DT5iMfn9jvPJ5SXtYcW6Pei8jREQgDtGQpMVuVRMbcDAXdpY78CkRzdUJ2onqu84xUVxYJJ4JzoMEdPoBsjpLAV",
  "key27": "5JzTosDgLd3srE79aSNbgy7TvRTB7RybTY17dhRt9trjHGeWm5hch27hozK2XxQzC5ooySYE32KAD4BxyCKkZJQW",
  "key28": "mSVRhagQAJsUFPYCjsBQ7Gu6ZJRmuNhMk3StGAeSjGjar2APgrVYndsN9A96cui3SfL4ZrZjNBQiAMX17Sjrc4n",
  "key29": "Bbzp4wVyjZ1wbxHZUXvdh4js57SZEVZFEuSGJcD4d9JiEGMD1bFijiF9ZRfWJBbRRYNbuZj4TirqdJFZWS6RUNa",
  "key30": "4K9MPPhFzLmRPavVoeJm6LujvrZbJGM8suzDuc1RrH3tHJ2gVet2VXZ3RQb3RmUQ6HHmFjr4YobtkapwfabuSPL6",
  "key31": "3xWyh1TjK4DCDsVr6YonsSPJytNr6TwJE66U6oJDDYz7G86qbFH1He4xYc4PqbujFRNrqgsesEmHab696qGUpoZJ",
  "key32": "stDokxfqtT6XBGdKid5FaaxTPzAEn5Kg29UwrWNrA2tZXP1JNXe4gwmYr25qv847MxLDkGgtPG1mTnaJZiN5H3f",
  "key33": "3HJHFUyiLMRkJxrfEaXsb2Sc44e6mAhz47sCD29Cuu2WctuS5pLT5zKEgY7oKbgeX6MfGs6uX9bcjCvoYVP1T4LB",
  "key34": "4ePs6VLLKPKt3HatwJKLr71HJE6RLygBGJucNGLpDvVcj8CMm98QwnFihTUmkbfquoxvdFvsPLbjW4d5cTUVPjg",
  "key35": "1QeKXYHJeEfcoTyX6wbaZAf69288PxWh1hvmah7bH9ZXGRFKYo1AnG7ok2P1GFUqif7TNKK2RZ2XnZGg4MMRjhX",
  "key36": "2pX6Pq3dpGWwjU9S7ykBSvEjgxzDmAzTuooF8Td1h2z8zrtEne9vccobbTkrsY2dLDUWiyqeV7RfZwxhdpDqZMeX",
  "key37": "5LoC9GXEB9VYELr2orXPmzRUJ1kG8XnBmqLHmB9RDdFWQXmqUqzwQoQe5PatcypE8wLEhqCTo1paVSvd9ony9dPU",
  "key38": "4TDoSjuoW5WXswnPFKJawY6VkhUPiLtNQMKk31ter1kDMWiRLKdyij9T1r4C54BfDKQMsS7uck1MddHafDCdcM1s",
  "key39": "5NjPp56fMuasKdVGPnwzAZqGoeCeBx5vT2c8p9bUMhLtagaiZajFqwNazo4fDVzxKM4BRPSE9eGuch3iZJRQAUjY",
  "key40": "3Pymnw4zXC2Rs32Hvj9zGVTV7sgLnkvKwrXZmL75516X7gT1Xkk512Zb2Ca4AAMqX2WDudmzvK4Ki95rM1qjjZgv",
  "key41": "56Wq6aF13q2HPkptGu7wJAYV6z1gKTGxRETB2zhBwi7fdD51Avun3zVZBGzyz3rKKCybxPBhiZiZoxFmjD5FzsLz",
  "key42": "4TnC2sU4WXTLLB9RkUwCEtm7S1xZfgMkwkgRJguv35cd9KFhGToCbMwjzFKc1cPF42vEYX2n12gQ2saRY5rcuHK6",
  "key43": "revUHvaRrJaaKV8zJ3bpHN3By25Mn1gvziJAxs8XVqVaZ4N9HxL2xXHKSiPa1XyubmhCNdk7g3pM9FMVwPZ7J8L",
  "key44": "5ufM9Vcd2s881bQXCa4H1KkehZuGWXNih1nrCsxMJTkNBroSAawbCURYRk6PiRgx4KV5eHgGbRGbbkwyxmJ1EAus",
  "key45": "4p17Ef9NZgDCQzMM6PZ6vFPrSkTf4EZkzTYm5kWofn56o2GFzpWhHzrrQA7ecuLuCDQoFp2GoBu86Wg9UNCbW4jN",
  "key46": "3vhjhGuaxeUfsMeDfo45TGNB7hh1sqCyw2F72P6B1Hia1y4KQKXqxGw3SKut6CzSCeJcAiBsjksZ4HPHaUNMPddR"
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
