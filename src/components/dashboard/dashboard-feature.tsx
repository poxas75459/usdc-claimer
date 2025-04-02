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
    "573heQTqCsuhYSrxRqGGsUwGujD6hAd5JbEeB4Gc1KbFebmiDGaZ3gxh61Ufm6twrSD8rQaUkg9ZquaEWCwFz5rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51v7fJDbNug5Qa5xGaXwtDdPMJL4XeCzTmuvQjH6MuxvEdJfXu3H263XxRi6EWGmkLCFW7fZRJdXUK1A9d6WRWnz",
  "key1": "4kZcFcWQhDMmWoHH2trh4RyC7jPs6AErBxY7LSYQfcjzbkAoAaf1c3ELXvsJnz4G5heo2mrwrEKepnx9i9136Tzg",
  "key2": "2j1LXyxhmidazfLW3PSCXVaa1yndLvfJMcBkQtXF9Mtw4DhAoskrVg41JfmneXgsMzt14hXwgWAVEniMJA9Ccb1",
  "key3": "2SJ3cvnVyeBbyRbbZJktdhGYfHfneo1qaScqSMmdBpJLQ5Gy8oH5Ln674Pp6PD3Gspi49MV4Rr545Jc4BXDeBMoc",
  "key4": "47X7VYByRDMhJBP8U8VVfmJF6EsLNTNeRGywDHW5JZzhK5aL2r5hMb2vGMzzwi4WMYf1KPZMNrJpQTqMVTScWNMj",
  "key5": "43x7DHnrgU5LDMMcmP5UCNXWfo1j6uYqwf2CSrpBHJiYZsYmuQ7VgDqQg4gLuuTP15mPeEaxhoJv7T31b3KS8j8c",
  "key6": "3ape1KUmKdH4sXdBhtb4Hu4R287gK8NoeyCvnVe9zYaU5qBgzheknssA538ir7eYdS4k7XRXMEAvaT8xXn1DuEkv",
  "key7": "7fHBPvwwgKCSjqPUNqvfN9jHVfgC2bLrMVUFuYMtHtgiLTj49cGXaRZM7om6KcB9uhsRw1bsoQqdGPzv73TjLp5",
  "key8": "4Xtv4SiCN2XWGc5LUZZE4xN7gBFNk9sUdiwMjjnetekQDYxWKMaTWUVxohtaEAMPqLFburVcG4ncUuxdSh2vQnC8",
  "key9": "4dAzGMZpXyugGinQwWmdsLNwtgDdk9y3A8F3nfqD23gLAnVLHm7NvscbmvdJe3RFoNtdysoY7PbDCpopH5hAoCrP",
  "key10": "4rQ18FUoSEFCc8Qe8VER18oEDCpcxnLo6qH3duhxMRgV3pyAJehn3MLRMpR49Fi6uaCQP64s6uptZEAWjnubZacU",
  "key11": "43hwRSM5GL5Fg32wsN95XAuiFyWgURjefT518wpYLYZKPokVqDs6ARjS3zFi5bHXsjA5u9g5HVemSnF6egoVd1v6",
  "key12": "5g9yPGtEW9GatKpR8sNGNyRrRCRikJf6QFB9XvXPWY9Fap1keG9UXXCJK4ixkNHHSjvgiAVX7oZvHKHgkqmWFCg",
  "key13": "48fvQPj2XFiChF4R2sLdx8HYy11M8Bs5CzvC1eyAmvjhUZi8UGhddcgxR7bKpV7tNkcQqLNNNhwHR6unRtuUyrro",
  "key14": "5NcwGJ6M84EizYWeieXafu8ohCqpKCNXBcKocpjyzb47wqQc8nLvUNHebJaufnk5pDfamUedEstPPkPRpw6HKzaE",
  "key15": "4eNpLzTUxP5aj7oZvEFyMaAcfa3r1avKyz2ZpDrWtjxiXhVQ7RGTz7NwpWXJTJtDr8pEFxCzVKbunkn3t9kzGpxY",
  "key16": "61jM45UyuifpZMQ94jPJnUp3SYtyZqQtx4d6VjA4bezZJoP75HDXeyAit64stMh6EoFhLcFsoFPomsreUF9AL9eh",
  "key17": "3fBGDKX2XprT4HJSM1X5oV7sENZDmfJ4LVsEMaN7BeqRCzFDuW6tL2SHNDvSNzcYwQ3gx16pgW9sAKEGRoo74zDB",
  "key18": "2Z7qTtR8yrXUG9Fk2HqkiV75iLftzfx6GnaYdE6ayF4fSYeSFA1vgwphXMhg8QYNM6NB9Q1zZvjCzCMGoXK4kBVx",
  "key19": "4C9YmGss4TcKqPDpVZ8h7BhPzGtTM8wv5rc2Fa9RdL8aYLguWtiFnGA7QTibngQ5RF2iKmT3sZPeMw3BHy9xLsR2",
  "key20": "5GVTTDztA4qXnTMTfiS24d1Dd3p9zsPtHo5Cpnh8QCvLTGNCVdw5UDCKbRneHUihUKTGZTcnHmM4nc2dEQd6kSGs",
  "key21": "32b27E3pXRN6KA1hqJuywQaji2ZpxCggvYyKjCiHKEV6uwcENnu2fa7VSB7vksWZPHFYHrrbkDTd68hEhVa3nem2",
  "key22": "4waVqSx4KKh18yZ14mALjApoeGHCnvXwW1SNfWyzkobUHycHvMifxG6MKQqiqPXZr5wXopYvDFCvuko8BPk6kH8e",
  "key23": "3iKvubPjdLYUYQH5jV6mQghr4e5CfgJQfavvZYepkMmJbm9RujxWDydtTmYw7YzGF8PJkrvNau3bKLhYLLiDL6kg",
  "key24": "4Lu1zAniFx4vJSRfCcSAEuXPhPYovZNUHWXrVfx1DGG8QVYfNjeNf8QF3xSdN4kawGHWFcUUg1cgvwyqE4yiZAMi",
  "key25": "2fHbLy6hTtjxEhwBJLy6mbSLsSMbJ7Qzmn3nBsf5Mr3Sm1cxd1Ji6pRHWZpWS2btMCFi4TNiVR1Ano1QzEaHoH8o",
  "key26": "W5QiR19N3JaQv4ZUoK78vRbXq3jSibhJ6TR8PJ9hZD4KRrtWUw9BqMWyUfi67xKFLKiQTWYbyxRneKsLZdc8iph",
  "key27": "4crbetf7HeTCBWHzA2jRr8SKUYhY5K9Cp74EqJukms3bus5gHQFbaV8uWmKjeXvpDQnGA4MTjk182nbd9rhQHqC2",
  "key28": "4kvSCz7sCC6SpySaExscd9xzsMYGV4qVg39ssHFiqyJdZ1sRzqShysAzRKi7wjqA8hikYxu9kJnT5SmiTxx3fd4x",
  "key29": "4vB2oKPStjamMXVBZbPFyUTq4mnCZwGPRy6DLGEJpJn9EBhqWNP23G4uZ6UEmCmC2sjrKsr5WAVT3JJVoki6x9Rg",
  "key30": "468ss6ctTXNvbyKHPCFFWTWXpJpGmypy8LRPWcav8hBdbHGMWWwpv5Xo1SVoNMFcETZmegM4WucsM7kuBwGNL4a7",
  "key31": "5LzJRrXkRQwwXp4nk94GpXMqJXhQx6MSc9vXJJrA34vVfX154h7bPipuhtiNVXfGcfoDo1GqSwC1nD5NAo5zhM8d",
  "key32": "2XvuPBwETbmtqdT5u8qrQTYpN3qWwgpwHATTv5VTAWzAHZpnwBcdLdQmoReiZxrbuLyt1Tk5mkKALTnWT7fwskxm",
  "key33": "4gufPM77sffjzjgfdyoro13LPfzsBcRQ9y4icpWx4Dq3gopfd32GurstauSZzH3G8YVVpSSuBRmPJQv3zGeASxcH"
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
