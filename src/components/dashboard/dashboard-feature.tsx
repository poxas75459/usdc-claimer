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
    "31q4uxtzYv9MMJF5tLF2ruCsu5tSUNvdxJNQAAidXU6jDu4zw9PPLgoSKCAXgafNLKSA9cUr1HFCfr51fuPRVGff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdyasFKWoqNhADsrM6QdRJZjLpzccpHqrjbzHVKawMtyBoRPx1v4zi9ZA2TwQ3eySxZcyNgW8Y2Z8iGwRoPRAFu",
  "key1": "3F1oT7t2ERefTdD6SyCqKWsx7KgHFsSeqGhhVWnffHgBfnHknBHcoL2anxvhbNE9xGXYTwz9eFeYgzqqJepmjGFU",
  "key2": "2jodCpUUtbJ4qtNvH4Z3ZNQeN3H8gdJNKN5rjvgzE9KV6JTAAHc9pqiYhYwAc33hvZXu5SMMxnCGFbYJKged1JVJ",
  "key3": "5GDD7CbnBSFS9xJzYUvi9UXCw8Un451FPR2TygbMkArr9AGSRRAterqWURfTzhJtmNWdbhxrr9WLMjkZ7eRcBk8q",
  "key4": "2y3xvaPNKznaGVmGnvcaYGxsrkPqgKDP4C9NQqWsKFPcfToHcpZYBgf8kvVFMzWmzL4L6BxpbUcNSEim5ZQcsbgh",
  "key5": "5iFDim84qCr7tcV6yo7coZcynaK71qzMk7WjtQUn9jFm5iNhknBhijSf3m2AKrr1c6oEs1QVAvNvyPDtDPMhVMFX",
  "key6": "m4AmJH4Qo4JZ6Re49XMcDQHw6XCP3C5fgrQBdkHciMTy2KZeE6fVg1YRHgb3nByphiBtVYYCYrqCUJC2YaTXS1A",
  "key7": "NQTPVSBHQU6YypTzxKWHBt2yWGiA7MD9urdNCZz3Yw9o1XLTG4DYBs7mHzLBg1Rat4Rtn4vaErgiBzrFMsNg85V",
  "key8": "31FifFcoHQTc6KW8QJA48JMLdo8Xm6pXe4j2bEuXGuP9t7u7zTPBLZV625h47v7CtWkQQky9GaHwmc159WzZ8fZ",
  "key9": "2VK3b1ocViUTMTnxWZCuhC9y2ke4faXjShADDPZEuDHRoZscCMEVBagYNEgaXH19xGW72R3fLA1xeqDgKNtN1SGK",
  "key10": "5Esqg6KT2CC2oP1FKnc5R8C5TVAktCYaE5hn2boES75CEoaf5C38o2a6tJXEhdnSx4e5EU6PDWxnGnYXqeLU1nZM",
  "key11": "24WPywAdRgYJrmGKg4HmMgV3RruFFrYcFfhmgoU2utMKCRjocN4cYRJWx9njC9pFU6Nj7qGDTRaUCwoP1TLfLW1T",
  "key12": "4Lw8SvwWaXcDcCXDoeQ4UrXPABC5axZVthQroUpEEC9nCtq2WYFNWsxnWuSWj78cSNmGSoHtf3BGwKKRgr5UrSw6",
  "key13": "TGFWqniZTPstZikb7aEuJhbJTyF6RkN5ZeQHkLnytiBFyWLhUWF8zWWpuZQNRHfziEA8gEP2GNtSTeHcpvCYB5A",
  "key14": "3w8r6BugwTJ7VYYMVhMGbpYXworpmocmFSq1mtYd6VmysPMuQumpeHJ9KEhv6bK7ehmyHpfw7UGMRmMjP7Q5nqdL",
  "key15": "muArBgLJLEXXZAbA319ix7Nhz75MYtDT6TCfdPhGXzouk5y7hgdQoE6CWKDW2tUL6CayztWAzJicDcsuHamvw6T",
  "key16": "ketWNhVDCV1onNvRnjHEFCiqNRf3PM7RRKneYqNdW5MAipnbogycCevuFyTPrhBA3p63dvqptePUZoGUPtKJvUt",
  "key17": "4faNxwBSEZXFz7EJw7vqbP9tczKwNeBU76pXn3xmRWXBKX9SAX6ZTEYC4t128vQiEsYCH717hYRoqLiuu8ky3fTn",
  "key18": "28j2QBGxMMKAd9V4W4s7iCNYy9YnkRKyoVd8czwSoBBi6KPdp9pGae6MQj86jchQMAPjnLijStSFKJpyPe6ihmx4",
  "key19": "3NSY9Agk3w8ggxfDXJJahYYjw1DVQGS3M21eAyr5gDCZuofvH5Ma9HnDHWUxthYZPXdBJCZKN4XsF3eQ7ShJVqQg",
  "key20": "2NfhRnqP9dmwx8uDd4Dt9Z6pg9ytPr9cRF2pTWvNyh3dt8GaBX4svEwPMjjXx3rZyyaisQGAG48AKeEY2VBgrNEK",
  "key21": "4VEVa2zQWqhGmJ8p2shsauKUxzioize3BzR623VdgZsrr8v2egiFpELxJsCBTYgLRDhRKqBxRR4usZdmbSMFHsHU",
  "key22": "q71d23HeYchkaahMqFUwpGYZWtLARr1vDcC5U41EJqFRN6UdYiSscG7PMFjpRkX1NWRN8Sm9ZBLtbsYLLNhBiyR",
  "key23": "4s4LH3qPrXYgbwoDoVSsDJAiGUjBVjAHazGxXWNZQZcKe44awF8d6szDtxf9vuSyAwjAm4DXM4cmRBYrLL4VhH3c",
  "key24": "5mRQfDCAmWuTdkRvmZYKzFH9ngcCVbk8xSeVFASJ5R8dAnwce3mZttDZZ6dCnAceK5DPAQr4yqj4RhBU7BejY1eD",
  "key25": "5zTMX1Xr13ihoanpknJgQ73ZUZud9RgLXmFRKRDE5bFrgAwW7XMEFdAtqLaRJVpJX5V9Buxpax4t73CRAbT2eJde",
  "key26": "s4fZsAV1hwjbBBWbgAdQocRrKZkGQGLLFWCY9b92ApeVZwuFsGLQ2NfduxwJV7QdBMcEnTi4zmSrmxoBxLQ4KtU",
  "key27": "e3QKKDVD2NGmffCF3YLBe71f9tqhn7PTw6nqBiDxdZMjvSyMHnjSeZqYqHuCVKUCno1BG8FaSeDrU9jCxgKK3Zg",
  "key28": "4JVBTPypDEDTixbUc37rZRj8k6X1QwoC9Nom5NsLzafGwtgNvUNoEsb8Gv3Uuqs7rwXgRQg1q72dKhs3tpzLbpmQ",
  "key29": "2skuHUAJZRUgneZPdjRHioSsedN4mhz8GbvThE6ArDtYDCda3xS9sW5phwXHR9YnJwjM9HvzDn6a36QMVhFQ6np1",
  "key30": "2x9CZ3t1cD88vo9zhjRwxfdqW7wi85pihT5f4MEDUeT2a3Gz5JqyYPC2MBfwcgr7i49dtwS4sKq3sLMuzzpoFe8M",
  "key31": "2s4MVQ7Zw6Jc8Q6eDSC5YCRLUTXEjmTpjfjssoc2n1uDZLLTRXXM3X9dcq1mqTzQY32QcLm3Tj3oUDYS61W3EQiP",
  "key32": "4MUd9L3iAAgH1ZDBqekg4fzXYtut7ELLRmhtqtRi4pKbQ3aVhctpVpD6stS3fjynsQWjJdGKkVNrTFvyNz3KT7Nf",
  "key33": "3ZctZ6tS67cL5C8JXFVyZKcc3E7ZVMNa1Q2ypKsUVUa2wSdnbhJHwAQ7iaCiK4pcwpGUt3FYRgJTmBVWqv614d9A",
  "key34": "U5izNEiYwenpdqp1QdpMv4JNcEBn3ihcxdEzb662Wc55c5UTykESJEjKA9WLyAKrvgnUNuHXGW62TYrpukcgogM",
  "key35": "d1wC8AoyUDVBPBBsyF6W5xHWoyWwtGZx2QTmDqSUCV5jXhaG5kpGGLDsWbHATY7qdsiEZrQqBsZGGLBRW7RZGyJ",
  "key36": "48zV6NX93VU6cfzUBdFhfoNet6iWdCnMwjNKpbwNd8viYUGCzaYStfwi62bdN7risjiavcRiC6gGz1r1Jahi15oJ"
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
