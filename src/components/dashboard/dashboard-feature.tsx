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
    "5thFc7gxgT8TBPLrNR4hdRBGA8zompy73sQ3ZWsLeAARTkBjRvKScSS6LhcuQn1RFLf9CJXpkGSa7Cj5AwtcbrKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQGaXq2rQ3vrLdpsg8D1W5fuXZJpkDiN3P1meYFurUVprybrGpZk8CkatoRp3W2PKAREpe8qs8DFtdaKWkMSqGg",
  "key1": "3fhBtMVi9MWNHMFMBGe2XRg6sHXXfL1AFh2RLFmGid23szWd5kiPAMQtZuKb4Q8vXLo7XhghnYgr829UswGsfDVP",
  "key2": "4XxjBYescYMJTiC2t3sRDQSbX2AyuGivp8jCiSGngg4zebuFowf8RRCYSAhRNUf2BMjD4SXESF2SEZnxidRfBqQL",
  "key3": "51mxLaAYLFH6iJSHW1LRitwpCpNjY29rVqFEQY7Mf3tgqFYy7ouU28rfbWHuzpbgqJrg8EwpiBJz7BAsMo3jbiwr",
  "key4": "22CZpb76F6ZSX3HCfbu2MA1A4tPQirHuFWC64CN5kDq8YEC3fNngi73B4zmhnydmhDAzfHqNhfXuYLuY3MMQiu5Y",
  "key5": "pRjeF2a6KRSBBNs8acWkDsun2sw4TrYZ5mMyfs6RmFNmowg98y9yBbJrNZcWL6pej7BTV7VSW3poNoYgo49Lc7W",
  "key6": "5FDrpvRoXpimWHh3rH6rHQMJkRvkUsiKYfqpC4MXPCQMXe1C7KHYufcKCpF12X7FQNGd5YvSvVfUqARUy88mkHwK",
  "key7": "otneVhV8HAA2nEqCHAx29aN2Xwk7EbYHZDfKU9AjKy8zU2ndS3pC6e7devrFCnFxJh8E4sEmPJMnHmuRGJUQPAp",
  "key8": "2mueWzx11MRjF77hWpseqSxu7zyFGUazbiUpr4eig47uMZ2r9nm3QvLYDpzGPQi3YKhcZk5DAzTimm85avEfQ8K2",
  "key9": "52sUtb6a2GjUnREC16F1zSuugyaz5pBT6XZPrVhgJRhawEYB8mFAwaGV1HCGXAXYUZLxABn6eJMCvFMCKZrCKJzL",
  "key10": "2QUEwn4PsrfMdBcTfSBUxTqr9mHBEMJBKLoZTt7odHbB1kFekZ3hZaEsoPke7wZTWg5phmuTasCfYfa9d7GjRiaM",
  "key11": "4v1YSghUc7psU9aeUBs2Jo8EdPo4WpH6imtng1LQbnqT82LPnyc6gEoLzFUsoKbHii1FbiwinZkPD3wmrZZ6vhqa",
  "key12": "4XSWEyXk3wTupycdNsSyW9cPLugt7dbYTw1ZYHqbwP5bkJmhHTWA2torvHRNR97VHVTJ6RHwA7H9ZbaLeKKgJm9z",
  "key13": "57mHggVKJcmdXZJmjUFvAHRAicijxcDfGDy29ZbneNzyNgHw7LAtKsz7fBVDbSqkn7FtTmEtxSTq6VQHPrKHCEad",
  "key14": "4xGrwUyXcG6tSAB2RX3rUinLPLB1HhE2ABYu6MSiZtUnYYFCqC5E7ao5toXUaBR7GXcShb9cKD3NV4SpUhbE21DE",
  "key15": "5txS2YyqJn14AYZey9TeKoVZsPQFnfjh4HL6ieyYcYYmfpSGb6Q6xEm1qfPzB4Q5AP8WmwLooyXW3yXs7sC17SVB",
  "key16": "2rxdDyUciTQPihdhoXFErfKRb3c5gvpH3gEBuv6Dq4pHjokZu9AeEcey85g9mSJMYPFyzvc8q7apofAt53RtfAJg",
  "key17": "3H26dTD58sf5yUvzmpBwhevEe7b2uxj4r3Q6mjYvtMuJy5DPPCAMjiCaRRUE5a3s39qB9tMPERdweGdSJHUYf2ca",
  "key18": "2KFDg3n5ciHxZTLgU5umGsHDiV6VNH6XMTpZ2TPQ9fSfCcmHF5Sp57wpV3shrc6SdStuiqc7tvZJgHnUnSoAx6xd",
  "key19": "254UytoKEeTBJ6hy4RgC7iTkJcsBjms5vsd6fvnbwSWh7pvukzHWeN6fiQDo1TpNnJbs2J4kyNGUbPgKho2mTJNj",
  "key20": "3AcWjC5xQng1ixwQPrdpodJL4MmpAm4NrvVhF2uPpcx3WnKGUWCcyT5azgZADNZ58vk5FAyUvpNrFZHmgGAgPCRg",
  "key21": "KP7bdaX3edvunUHpTn8g4RZGuBFxgp2rA2AvxTaNimb113Rfgapxnx67hdLoXruFXcVZcBwsnXa6pNGszBcw2ez",
  "key22": "5V6v8SSd635NVJFB8oDRx6TrMmLJiB8jvs6MoVTg7gqSZ9T8zyFszfqjkgW34C7GVv5h2fruyxDw3CyMy6r8zK1J",
  "key23": "4eZWDEpt5wzE4sYovHPr7LutUcQiYDim9RqhTVifrApzcNWwW8qTiXhWZtRfnMuVUNnHpD7jBXgwRjAqhjfwhQUZ",
  "key24": "3b13on8rsRjjY2SW52svv4GdMrizzY1WwPHtAeMGgkRUYZKdnHt86UcqsoksVjNYvttZGbcGrjj81jgMu5ZLGc6M",
  "key25": "5k2S44yJjvu33Wm7fweW3dw1bMaaRpd3SzTbpYs6DLr6i1SyTzEPFU45j2n1RzWVnpzBk9GNEzU4udbJxKX21exf",
  "key26": "dN9rVfLWQMDQ7E2SAQ4xMiQcDbQMFgCF6VDZddhkZoxJSadtdGkssfeygyR21FgSyFQRxVeZQmgp2e8kBmg3osx",
  "key27": "4LLuLECqJVH32UeXU4yXk7nFkzbbMKtwSp8YujvEw9KUnhajTFEVSxzNDYYRfDsrM2kG3HLP9MxpzGMPJdcHuHDL",
  "key28": "5z6bpEUS8eX8zyGzKVVYXrJAgDGDeKThw4iakE9ParwiBn7XoLdBwB7qweRiJZAinr5MnUf5vLcgmYZze1DeFxSc",
  "key29": "4X1ZEYAvi5AFMLqcW2i9QPndfSiUJDrMpU7qsJLrFKNyG2LbsrVV4dDX8VmpAWnV3de2242FqHSvM1GYCZZGkxvx",
  "key30": "4m2ttAsR9fXsavfv7KieXY5op3mZohGh7fQo9RDnpPiPx9XwkdRZ5UMHkpvWpB7STBY2vFF7N6p9p5vCC8cG8yf2",
  "key31": "Z69zBz46g7wNLS3EzvAAYFP9wLkc4aqHiAMXdakDvMXRhj76g9d5x4JYXc9DjtDVX6A2TZEDDL9x9dYEp6PNKUt",
  "key32": "3sR9mSuZ2oTsJAsGhF5M7nUWBJkGsfonoW2xMJAHJyJMmA7HeCBHxT8SbsF2AZVAy2P1LHDHthuhk8nEEGcJmzpX",
  "key33": "4428TEhX8XoX7WNEhtcqkZwkjdZYazDVPFaYBsBvbqGxCS2cKtcbbjR7UyERVd92MwJAKUr7PMuXYnNM3tz63oBi",
  "key34": "SDmy15wKDSeC1UEP3pB374YQpfRwGv8AJtJSgAzrtetBzs2tiqekiZRm2GVTY89kvdQnBEJePpmqwetrRqZstYt",
  "key35": "2yqzuNYkYGRsR96CxNmFZyMTkKgcntsUKjBmSF3KrTdfd7TpebHFUqq5bvyviMhvnXPF5MSLaVzGHr1YFvVszEqi",
  "key36": "4qy7JySmDw9DUQcDwsLw6PtHRK23xEWP4UXzhypQCiToujFyh6EDyc8DcB5qs6s1yCUPRrVTHP9FzfahxA1tuFQn",
  "key37": "2aPn1NgfANtY8tCosB5XAiVLWxCXbva6LDtPMpZ1Y1mGTiXBsATtbW6RyGinPjbQHRs4dkwaFHVpxANdRoRLJK4H",
  "key38": "2XMvwo7tom9RJGmuZ7JeoTuh3arEm8HeQQYDRzMg5Bzx6rDCGNUf6PwApTbvhqepUeuL8mKcuVA31vvz451xs9MB",
  "key39": "2XisGAW51Ci5TsbUPZF1sqFhzbs5WFUh1V5MtQ4vLUnATHkYxrjmpoHQHp92fp1qbekoLxPZJxTMDYGBMPpezJSp",
  "key40": "2y1WU24DpPhUG4F2bRhfB4vYgj4gjemdVQ5NNB8an4DGTGvPPzUGyKY8K1H37EvEJUfezQACQK4rdz73LeVCa56k",
  "key41": "TwBeBSoomHPrXGbNdAbupxxkA3yPy4edBfvgpgXFaaffxcDWgaU2R1kAUTEWViCzfF7MMKNGiMmyucr5X6fBQpi",
  "key42": "4BLjcFaa5TVh2rtL8DNvnPvR1uZ323c4hjvWQ34A5ZqH85PfjHkGjKy9Lg7DiGuFRan6iR852UxCp4QnVNUdfztW",
  "key43": "5FJ1cBD7daeyG2tsF7pJkYyzqMDgFDBC1k6TqCZozRA4TCCbcG27eWZHz4hBxrMXMja4dLnDdnyHqFgZsTQfrT3M",
  "key44": "4fUsPzGAwWdMguUYd4DusEbSRbMjhvvZoQLX1txCacjMnu3nZgh11uuDeJP1uRJv1jX3LZM4htKELDtSVbBtrGZQ",
  "key45": "5ZpAV5ngjG5GkNjxZhnD7QNAMMYvgT1asAVbXaAvajVxBv3kFm2LHjLijR1tVc3SPzfUZiXA7FPrSq5pvxDv1TM5",
  "key46": "5F5C1hNuRFDE4f1bD2fY2ttVVkrHFYSZugBjhs7ZoywE819zrwpQfz1PVZPMSABYjEtJ3v4R3jcNz7Q93PZp1ty8"
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
