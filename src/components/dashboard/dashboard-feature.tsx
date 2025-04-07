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
    "5G3RQpCX8rxx3QigDfhmgoQKmYHikiTJPaVWaZte3PWnW4Wuz1bNHzDkojv9ZEekDedXV2HvJfeq7X1kT1hTz7YU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yieAUZ4gDgjwubNWbV3JaqRTh317fEGr7n1AUaod4EsFB6fVAewBaLMx56Fo5sgPgBbC8aRB2Kz3ka84Y12aR8W",
  "key1": "5Lj2GpuEcNnFa84hQwBUorAG7NiUGQQin89HEy6ohNLj6MCamFytSgX8b4b14mXk5qrHzFzxtdfj88vrnaoskPqi",
  "key2": "37unjJRSYstd8Wxs7FvGeJPS8AmVcHGc2wqET5jicUxMHEre9FhW2bkQyxNmfgqaTJ7vYoCXJRsTk8j5cyxgNHYm",
  "key3": "3ZugP8PYpZfen9HFdGWq4D1Gb11SAafY27V5Wa96BVqc2hd1rmQEdb3trYAN8WajegNc6MNHPea1hcV6TXgj7wmS",
  "key4": "5tyKf5K6whw5Am5nCN686GNSyjcRjauZa1rpQGy7B9QTpbMGVATEXt4p6FK9msQvSJejt7ny3nTiaYsNwKMucjNs",
  "key5": "3kqpjBTJ9KiLqvRVL4YpwqqV4o3v45HMS9YHBzvCfxZD6q9iNkqzSxj3aECKQCoDPezcyyp9SGrHrUeSjaggHcVv",
  "key6": "5X4rphfqEEpDzmDiNBtR7mbwEvvgK6SXdymSS988GsW9YXBEe8P6XJxNDgDN1W79PTvxNoirLR1heEG4ZgQRwfk8",
  "key7": "4iAKhNMegyjvb1fjXdKPa62aURrrtFHnEGaNW8doqD1a4pfwE6a9PgLPyRHQGqeJV7JqG3Do1SKDE9NMyDbYiFXn",
  "key8": "5PuoagmzuP9gnri5RwTjVdVy9Gnhb3BpnoP1EjCjHfUVEDSJoxG7UW4UQzjjWMiBEyo9oNk6pgfHimzS5vz5Lrs5",
  "key9": "3J9NMdW4Zs4XL7Lgo5feaRgP4yQk8f7dVLamtCgSgu3LcX2wGJjzszyzvEYHkQFCwnGK2uo2vNDwS5nYPNQRExjV",
  "key10": "3HnWnq1gqzzGthteJGx14ER56wLCDF2F9Uab7JndrqsDBvYBSuoQQDMS6JXQNv2aZsE1QPi31DZKfmJ6zSVykJwJ",
  "key11": "3YRLe34ThPW3h1q6dypnPrgLKZGB6DtZ6dPqbQRxJxiWBux8kH4LH6oqeLubczVSiJbkm4hButE514pq56Em12Kz",
  "key12": "4CdYYeRg4AwNEDQWCfMaR3VmJaJRbfetUg8Ys4NKtpxHX3UwjERbJmUzkZBPRNkoHQenUzFgystEDVQaEfLc9NG9",
  "key13": "53vdvutvAxk6bLAg61tKCE5u6vWwpnxfY2R8MPSwgTicqrvQRuMC93r6uqAD12FPDLaPhC1C1VncWRSkdjAVBFAm",
  "key14": "4w4zb7KuBJ8sSyE19mKZZoNuy7zgRFuu3CF6xwZx6yySBQZ6d1vp1boqgus6mERVdMmFq8PsKcykFfqMuAvi8C7Z",
  "key15": "4eQdqGdixwt5stGHJqHb6XQpz2mx5mkDEkSU4ZE9KTud63Zq8TGMqi1u4ef16Egheau6xk5sk8kn6LbSXS4PLyUU",
  "key16": "5KWsjhfj3Uinp8sU4ewzzauB6pjJpMJNHXmcXbrco6SK6pdvagUZerB5akjWN5sSswfVK34ZYUYcmm36umjV7Lhs",
  "key17": "2S57yuKF92g7SxrVqbQAT82iguBUbYmNKT5zzrf1A3qMQ57wpTEbXaGF1Zu72VqYVKfBVtnZojshbFA2NfwwhvYY",
  "key18": "26FhSSRtr6kjGuPfEsAANqQqyLnWLgv1wm7kXHPCeeQzDXCuRqTV2yAQtavwzMdWwC4KSAVLNJiyRvb82LkgvthF",
  "key19": "4gPgMYCwHhzu6B8v2r7singyx8cBghdbPFGqeXKGNUWnSsszaCNwQDCfGZPbWg8434ustix1Qdo29e8Aefqzimw6",
  "key20": "614Fb42PLqzmdXPMquT4jZFyucM8Nd5yutEr6JxjkgnpEPBSQb6wQbpp39aXRvunR8b4DKT6bzBtdz1e2HJA4wAM",
  "key21": "aV1nTP8TkVJUTX2NpLdgJxRsB4xFthBVa6wj6K7sMPfVYFFVBNVTsgnCH9keJSeSNMwX7LZBDq2PGPv3Mhg3WQM",
  "key22": "3cwFpix35BAX2pd8ZrjbhHfcHpg8944GgoPfTL6RDjUN8oDdKDCp2fnJfg48vvm8XFPaVDN5aHDyJt7KJT1R2uQW",
  "key23": "61wrjiuQCfAKhoRqnKCdmMcVVyVTovzKz9t7CWoMBQoXG4ojrtph3RpyW3i6UPcwgtLfQyPNMvCtrbiUhHRMnXYc",
  "key24": "3K4KAAZm6oG8CgLxWZh1VHcBKfnNeDFNw63rJkxXTFNoyU6DoCHbQ9qNJ8QLjuTtVGT5Y7dLSga6xLPPjUCisnmQ",
  "key25": "4noDMC8Age6DmjgCGKd2k96M7QzBvBdjSm5gR7vkb9sDH54eya68HRrCFkSKjer7BzpPW6FvHL3d6KDKXwTmmpBG",
  "key26": "CpKJEk5RUFP4M3ANug5iSGENQ13fRXMpBMK5MSnKQ888RoMhb3R8fLJ4mdNTfWNy3RiwwDMTMmEpuueqoCgV9mS",
  "key27": "4zMeC56paajwBEvW5zkKwG33cMYQ6kNKF8HUstmXf3tfVo64dRKid7fiy3YGUZjS5PPw82urSnHHffrby4wrW59P",
  "key28": "22zBSaffxyASHaQTZqyArjLq5ZuBLnrcWnmpBDYCPTyLdvekSAPNVKSFtEQrzBRzGT35zLzoSNiYNCGx8sitHuej",
  "key29": "4Gi8ehx97N4gNHd4B4YLUabUU27NopFnwVtnE6Nfb2tKKcscTovQiS7WkwTPT66pzYMjmpGVeo6Nbo2Pyfgqm5o7",
  "key30": "2MzVuRW9wX7zWV3v8YSYTFSw9MKeb77gBWZptiV7Vrqzippa4Ek92RFoJJuz7kAXZedXuChfiwu8S4kaTQCQgGFx",
  "key31": "26BTHSCnfWbJYMhKh8gRQt6YBcSAGmtagAJj3TZt4qUt8idCo6WFQ8D9yBQQaHyXr7stdTbYALxCmFx8qGFCxbkU",
  "key32": "m1iyjkZeEhNjAKUtnF36Pab33hU8QRKib7CgNqPSup9qhReCdFjkPEkxN1DBiwzpDSjqvmnxGaKxwoVzP89gUqb",
  "key33": "3A6SVPXMpRDySxHDEC323VBsm8V6CYTGHwm14k5TjkAYWqAAjCzHkkayNeqkoSLX218dsq4tYVMV8BXGdq3saoju"
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
