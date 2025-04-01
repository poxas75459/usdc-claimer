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
    "5pth3WDLm3EWTPdMADNR6wJdFGhpUgP6bSakrcr7DmKqbY91tEy72XxZ3gyRSeGBTmVBWWGdZYPtQUirqapLJR1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWZAeRfHmWmMZtGWGm1tRxhgTZDMXiq5X5RurMD5kADUnKjVz8TvNscNAzUDditAAVvRgtngcswoeaYfq9LYmxn",
  "key1": "5MLg369dr7FmXF7K4Bon22GjXKoygKoH8FCLgn2AzSc8e5ZEiXUvQgtvFBfkKko18nzCZBVGnkkXnbzqDRyBkqYD",
  "key2": "3oPoHSXYrsbDZUf7Y9ABBkuKndsixCxnKChrmTgKEwj3wjuWRsabFz8nv8ePfDCFwrDAwcquEuwZf4U5R4fbH8Nx",
  "key3": "FFZNba39M2eR6fz5qTaPmMWBW3iPXKr1fsEh3sKsCHebdPjxPj8pzJL2RVWMYoH2jvsUr3ZRvqAEVvqCELcSaEy",
  "key4": "4pR2FG79UYrTcm14cMBwfuBo6nZrYjHRwX158EZBYA7hCaVvChgKBogJDttwkwwPpjGogZ8S147EgK33JNYgafHx",
  "key5": "cAJLhQz5bth4yUPhsHBA5niMEnJvatfJiKshKYG26tCqqvoEoXbPAgLYxSfhMHLNW53TLwgzDjWqLKbQcSyBjTf",
  "key6": "5Wxz3K6Q21QtwYcjSUmGb1uWpmMgF5VaB6jvXahsDc7D6pVHtjVgPeWpp5DKE3uTTsqCjqZknGHjSzYmmqKVwcKZ",
  "key7": "NQ4gNM9GEJUufmihjTGekA1FFtq4TyYMwij6cCUHyQwDbgHiR7oPeuTGaqaXqUwQTa9fTMvtWUVMv7HKzwPLPdi",
  "key8": "2P8T6eGeeWHiJCPJGz5o4Q8VmndoVU7Gvd4KQb2oL2RYkEGWjzLs1yrheWjpxHrjb4Hqc2qJTmbtAAYGvvJNDW1r",
  "key9": "4GM9yxF2zP9Syi3qJNGgYCpnKRK9PHS4EGXn43rGAHyggkhdKH4aTX1H2znCYVKHJgYypfo8AofjGTpCnFwygG4K",
  "key10": "4zNkMdG4b86uQmYGgyw5oZ1T1uB6gCeypswBoDtHKvbFLdT5TZJy2pbEHYkhy37gVXMRDPTUXoaWEDwARDECa6Z4",
  "key11": "2wd6vqMo3jFchh3FuyTocW45zh9xNKbarAEzXCi1C4emKWnn5UdzGFPzTBoCdkttmEP4gJqHcbdnkDhhWTyffQDD",
  "key12": "CihFPCdeHGt1SxvjRyS4G25SWSupbFXJzLDg26w3MPKoZSttMjgzzBoeB2i2KszTK6oq2dKpRUJjk8ojQ8eiGJW",
  "key13": "4Qigeki9sAHmyHU36YpMGU5fwtJ6qXtZj4YwJNiTq34PtFVVGhbNLha4iBiXHM2bAAACdxXSLJQdq5THCuxmktQd",
  "key14": "56Pa6eJzB9FrHHCh6BuU4XHtyPJ5B9B5CzBrZS8rJXKJtJPPfMNzerFwB9wy6xGcreiCKKp8MUUV9LvctSbyohf3",
  "key15": "2BcxKbfT9s75iv6Wwcv8KdVXGBC4GviyCLvXRuNjhjcYT82Q7NdG7DrxbXduef2pUX8GuNmwKmMsjpxAZnipxC3e",
  "key16": "4jYdrjtZe9vZFtWZ5zi1NKWSDfNXLz3YDz2zG57e1v9nWkCQ1g4KujGJ8UwKUqhzYWrVCN45rdcf7N9skKuUcpEy",
  "key17": "5gR1GH4omxVzTrM6nMzsaBB9wfYpXpycXNm596hybK8qwDYGi37hL8qiSMaDFmtHYapxt5kQh5JhZdhxCfWmsTuQ",
  "key18": "5i17cnpSB3b58YRbz8gw9WP5inzxUxR639Mp73hCyjfRaNy6JicyrAVxrMeK8YtdHZu3P9wvKekDRF2a1uYRJZFP",
  "key19": "2ScnoRSgtY3ZXekzK1X6KWzc8hEEUsa3tRZUNV1sxeejrNeSBYe7eNS7XEHWFQUWF72qYYjBFQepkDZWoTKRDhsw",
  "key20": "3qVHEg34HpAcRCb16HziWAvPWsVZ7LnqgncZ4Q8ohoUZ5mm2o4K5i7vUFbcmy3QXSahmvudKi4VKzbr1Mc4rxAz7",
  "key21": "5yHPo4dq1R5Fs4xmsnJM3WMda7h7j6vmeGbjDGYYkXVM9TkCPwzVqKg87TYxCMspANMhFu97261ie7W4jLth5uKx",
  "key22": "3AKeCaDuYbifq6WhnLaLMCimu68fEwh1FenhZ7nTt39hGamuHEVhGTL1h4ocebXVTvFDM671eAgdz1KVQTtCU4LL",
  "key23": "41HVfAtMj19xVaJECKCzq5PgdrqXsCU8HEwZneh9hqmdamjRua97oEs2yuDQaAuJfGXoW1w1LQ5W7eErRtCGFJWf",
  "key24": "4NRgH6d13kwYrQ7LtREfG35hAVjHCLMjNZjUZYsc7CoWNougPW4m4y8iw3dwymXPpW9cHEKRocDvcQWbod4HPdY4",
  "key25": "3KP63ye7NX2eYDtMfMGZeCxkDZaTkPPHLP1MZgHDp3jZcv8nxxGcun6S7y4p2B9X4bkdNtLHKPBqQNHnomBqfVzw",
  "key26": "2ZSgUm9fEsThgx9DruJw2hGtAKSQW5RmK3bLYux9iCuRWMS67mKgfpig7352LnpvCbzCx3oZFU8r6DLkY4HSbCBi",
  "key27": "5CkidZkfE8i8Vug19pXtTGhqT9TYAx7D2LVW5F5VzC7JycvbnChbZBV2ErPNE6iWbZR7nkvfVChnJczZ8bT3dJD8",
  "key28": "565LNhYGv3LmuqHuPxwe3M567uN8o83MGxrBCYs8zy2Nw9Djwy75NqKH6iZyVVNQNxGxU9pjZ5bf2hN6KL5krTJx",
  "key29": "31nUyDwZPpgNTQ2WXVWzcSdgE9kbgxcTNz5s3YFDfLdtHUazY1uQPumSm2iqv78japExZTS1asaRAp9NBHWdsAUh",
  "key30": "4qLvHSqjP1KfygSTxUbbivEkNbWY1AKWr75TLPWC4kP13hPrLPCVXqNygCVEa75zB8kHEd3MFTT4Z37t1Ejk1ApC",
  "key31": "3X2yckzkpXeRLdnNjtbjoM6vCDCgMowSBf9PBDBH1zMJHmSY6gq8mgaBCYLXt9zycva39ZPJZNHcqDWXosYE5spV",
  "key32": "3xZVg23TBBo4eJ2ZA86YWB5y39yaqsJP9h6fr4wKJUoY2BxiFPqZYP3WP9Ne2T5AX6GZeZeAQzAKXQunx1XC3o3L",
  "key33": "TAa1cnVZX4i7BQvaAJnBVtLHCLTovXT7uzDjXVAu7oNc19EcpXXBuVFzpyEYwx196W2NwuUr6ivcj7NYi6kVk7x",
  "key34": "4ugDfA8mbnX6PnAmPQUzXNHrtbTiXxeh8Gj1qWLhre16whHTgCh6HHzQ7p4aLvbiGacC99eDBKmMcJtkppN6HnT4",
  "key35": "3wdidgK61MeoE6dTyAeykSm8BX2HKBgzF8GyeLityKdVdF5DvU2EMRhbE1hMCqHjUan3hgHa8DGcS5AnCANVhjkD",
  "key36": "zg5ySA5KAytidT6BmrXSK8httMFf95nBuMZgCxWB1abjvMHUbYXJyqKmkMYtfjpHiJc4Kqdn8WgEuaz5AzEiH1W",
  "key37": "3Fd58XEdaVsHmSmvcoKDPYQc9oAZa6SdX2Z2pWrmBEEKtW3bY87v7hGrWjFSoaBTdj6VibBB1hr6qU8QEfu6ERwi",
  "key38": "64kRm6o2ULTmp2nazZQx7QqNHMqabNSSKyXtrCz3vezbGN8DsSrYNrqXZCHA6FwGnrV88fMTvTFQfAAGS8h8SNJz",
  "key39": "zB82i2NCcqHMaqcVaZ66Ame4BUSE7RoL6ymYFc3n8MB2jyd9PYjp4GneuCiusXCmQwqHUtuoHxDSea3tAozV4tw",
  "key40": "62rCU5JFP6yyDeRBArmB8RExA2bQHXV7dJg38hQcUwqRjBKksxnoWPpearZDiZcVbYxmCDLnVZha5ye8AqkGmyCY",
  "key41": "64s6gncN7VqwacMQ76GqmaNccHkRg7tEimSQgXVGEZpTyFaLWE1F1j4f6TwYShdH3jQw6LcAi96Q9Pc7BSjjtXy9"
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
