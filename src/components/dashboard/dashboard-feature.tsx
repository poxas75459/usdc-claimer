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
    "3BFQzsRuJisbapyRC6QkQTXiVXuh4fiBHANcNvU3EbmuqR79sWYg3GxxhxFdYzw1HK7XkNavNaSQb9543eokanEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfx5fH3sH6EU5Zwu4AEK7j92hypFtvD8Th3eMzAqyvfRXjNuZbdRNcAqq4AQbXYaomCSAwDV6d56iez68UrWwGZ",
  "key1": "2i2hVHFFKS1wAspUsBZaxs3FPAk6QoU4G7gf3eUYs3FYYnhuLUTUxiPDTmTgfN82FAKoqdYEzBihLXqXuksN4dFP",
  "key2": "2xerKBH7mjkmziCPdGNHDVe3YHkJTb4b5ASBFJR4kGRFj4vnGY3CB691Mz2XVVzCy3K5sWnopGKYXgTnyxKXKyxm",
  "key3": "5HmXNCoYTbgt4iV3cxXjFvCJLiPu2xStWsApFpF5KYtkcpSvPvbWQQLaNXvwSckwbujaNNRZdyis6hh5eLrFqWrb",
  "key4": "L2iTg3X1WNZyKPDJFSyBHzbhv32LcMrFN2UjWZ1YM9DfBx1ciQP38kUdW1ULumw2up4NwQXGxGPhhqJqtKGf86o",
  "key5": "5WHPKne4Y1G3xjftyVJL5vXc48NR7xTraTdZvQh7q5gFYJ3JfA4PrGTX4LGCZhEfiFAh9usxRZXxGmxG45ovmAec",
  "key6": "2VxkQ39txd2CWzBKN3tsdUqRN57xAhsjwA19zXAAvYKFeW5xx4tLxNYQpuH3xSsZsFzNXVLinyPim6HsjD3xcqa7",
  "key7": "52a2me4EonecRcgqi7wART74Zcg9qUWw3f5nR8VAzpeCzE2b9XwmLLeVvSHbh4SHWxWfzW6dVUvEHGVHostFaMfu",
  "key8": "3cQ6hoVoueswDW3A6YAQvdHMsvhx6Asbm1BZ9RhrJH1NYtMaiw8oHWHYPcBdWtfwF3pMbGJ9xyAfgBbCRvq7o2gx",
  "key9": "4AK5PoyBPgW2jowsySAsdFEqsFefqCgKhB6v6rwWQXWbKJKd79HSvN2gVBKMJdpNjHhF1iSo7FPmTMVJzUZQa6Fy",
  "key10": "2AMbpGsA8X2obC6B8ZzVNdjrhyLYbywrYRohb4gs55JUvGXEGJFgd2Su6oohWDppuh8uc6oAr725bAsSv7XQRPSp",
  "key11": "41cWjKgVeAqbyD5cDEgRAGZQpAhHZBJda6fvtY3aRh3CLCLYkRRhPZzbzsJupkECvZZEzjgv8NYSfhGzSFgJDGgg",
  "key12": "66Di5ghnRoEicQyVBcrd2kfjZZrWy5SZBQEHcxVfV4LpMg8HrTgihnvBfvNfRHEapGUsjdGBttMQYX4jxpJ6t81u",
  "key13": "5BQ7k2p4sqbVGn2qaUAMfjqLkrBJJ9R3eQPjAvozpQyc49YFXC1NSG69WGu24kJGpVDVbujKNtrQQfGutYY9JHRq",
  "key14": "2FsUTfQMBtoFDgdCTp1uXk79e7QFRwWRUJtzXLUFsLz5CETcg65wbf7hYCgGhV4d1CF7J88fF8QjoN6yeDmXZvSK",
  "key15": "4xvngJHgMqVLZFtHUcU1qQHfGvqanetJZDWsSDJuAkfVnnXTdQ3DNa6mJyEoQxBpoJq6Lv3wJX37obKTNPrsyzkG",
  "key16": "yjuSLLfpxhMnNfiCGNcrJZev8HT7sXYr9KNdASvRgxhTAQVQykqfjMRMmPGT1qvaL59mjLch7M3ub344xbH1bkT",
  "key17": "55bN88A9xzLKUaeJUg1KpLoTArHNfJNzYo1QAUrjyXKEtkhsuCGtexYYAPhSYiCZjyVdWsNtWUucRYKn8Vhc16zP",
  "key18": "3dYuuSTp2BJmNfrym8M5tMBz1oyuCwF2uqJnYgUjCNRX1U6SphBcfR5MzbmYJt4brQQc5XWTm93u4HR6C8on2C5Z",
  "key19": "43Rmdjze1Sn6m89tq9hTiZEgAQighDudKtnk87LTjhLZSxwNYDYtKSDM5V3DyeR8pVnAiaUPdWGsqdLGgn4wbUsm",
  "key20": "62Nk11BUH6JgWufRHqzNth8AXdvDSgRuRWSbzsSRwNjLk8gyS6aByszWETeGF415Pqc1A9tSck8t2Wcxqa3nXGDA",
  "key21": "53a1AfV5LUaKq5c8LAKMRBQHCyFu4t6ToYE4fcRgo3o3Ajxhxhz2xMpgwWPLro7JGpe1vL1wke4Mtn1PrMtbpKG2",
  "key22": "28qNkCMDT3LX7HaFkAaJxBmLrbLxgjpi1A4uxUhEY2zxmvenSNyrbPu7sU5AAm2QNxTXSiefqHfU1CHjsKMJEdLQ",
  "key23": "5WdinwZwsc3QaxHjv6PvQ4VwiEHxBE7kUTXECVF1fcJwuuXiLhYomyaea35w5xLXxU93rAAehBUkXEZXB668cQj7",
  "key24": "4VFHXW8seDNat75dnKs4eCipwSLTJbnFFP1NucxSxurGPgCYwRqtRiegNCLuUEUyDruWyTnYTNZHQRbL33bp5kzh",
  "key25": "5fVasxB4BndyGtdsr12g7CsDpptYQfDrvWCHMHwZqwakstSQpusjVsHMqGa2jW2hhM4q1pdfg8MTPrs9SavEydvM",
  "key26": "2jnRHAvAH7y4A198hTiSkpbP9a7Th3gUvQSAzfgNsAUoDdX1e3PBsPWD6uPKCWVxYigB5ayEMLkT9TxzDsGokJAY",
  "key27": "3gahJTVQbz4SfwPuu6NDmkzy2kPRiFbec1FaqDe7YuN1DvoDV9w9tsFMMpAw2M5ra6koCkKoKX2zL2AhBUYzBU7j",
  "key28": "ahVKbP6BAcAiUbZSyPN1NiQsYEQepkCcmap3PdfDSVMqgW22EP4sE7QBHbJNKHMdQEM7L2iGcxezJiTP3eZjoxi",
  "key29": "33HwjsobWqkpzmBawFd6MFPvNmvcR3HNMYfsVoovEDeMPrfMHtXAhtVUMgN76RujiJY9cbkxMBa1hojP23ZQBqAS",
  "key30": "2rJTLFa3kFDd8nSBPtrB7oEe3E3aoKSKyRbUd6wQrF5o4iTRzvBdxf1q2hZorozJgxQ973uM6nzhcziFZYEb3MPa",
  "key31": "5QK72C9wiudWDATrLpWZdpF3nMV6V9Tegy4g6XndbwXaRk1qV6HBsN5SM1NZuXXMwE5mKfo1RQEdYB1zj6njDKBL",
  "key32": "46mXHi24dNd28tBB8u5j2RE4WS1WHCZ1DJwuxo6hBTiqXUsJzJyWicrTGBQDxxXu919am3K9rePW854kBCjgYN6z",
  "key33": "2BYdV7FbD1v19xf6mXd7KzNnJTrGx5RimCFBVmv5VHCP1mhHv2xaQDjPaXGx1dsyaaJhz3zg9kuiwtHEx2RbF2tv",
  "key34": "3nfCc95DqzFhEssLip8Ph9YZjbxXvf3N6KSdJRxK3NDiZJrg3NaMd23aD8SapexMJUTi7kE6fBvbGcpLSf38tKBo",
  "key35": "4WxiG3vr32zLagmAGJyh4py2yWAddZhutD2w2NR2B4khUa1Wvd5w7h8jpkqyb2wz9LFxH8SzNXqBJQo6YBzAPxTh",
  "key36": "jnRLGwgcfx1kgC3shYpR9qKinDRRGJpa3LBbGKPaxfthmDRqATrDtCzzSRKBYK1z8nCLeFQNh7r1QHrtf66R4Qi",
  "key37": "52WppcWqcJaVoD94G8ZckNJQcYBqVDsecyiHj5gBjCcCKoWt7MAENcfNRCkv9ZW8BNPSa3NRSD7ZCBD2JF2qGrGG",
  "key38": "3o2iRxfLZC2spKWZVoQ1oZLwRPUFE683gfKscnbHYhxKLpjnuAgdGqzJ67qzLtYHSR9cpAFN9iVWEC2kifiFPDNy",
  "key39": "55EeQLpKDrR6Hx29hX9WSyLTXEMSH6Lg9NfA5kUqVGN4hp6avFQ3D35yyGaE7oAp7qidqNEwhuju9sRNdJ1KcJFR",
  "key40": "36HTjjo5PuPN7BhCXAPLQ2K7NHbfRyJ2d6HmWFFkYzAcK7umJu6MkvyiF1PCF2PRJaRZEFeyPP339QfyjXdwdwoD",
  "key41": "5x6brpV1mF1hB1D5F7ZJDs2VjBc5Xc52UJaEwua6G1yScgTQShPcwgvrVMddEJzNT7EKQsmfcxA6PfWWM2mrGYz6"
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
