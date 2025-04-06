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
    "37eGdXkYkgGTmpFwNXTNfZFh2Pa5MWg8WwjyjTsdieAbLPscwUvgpF7X6GKVzXUSrXyQPPxKBzrKycXDK5uDQ9dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NM2TvVDVdw2hbBNE5u71A8F9aehMoKJCBPC187iVo1YFKHvxP6MK7b2Tms69BLAgMTjqhHG5CELxCT6tyFDpkF5",
  "key1": "5NDZhKT5eSMw4iwVpyUo7u6jQcyzCZDA9d73j6Ejzmbru88WCeMqWK8r4A976arAuLGXqgkDCejAwjhQ5Kvpwt8a",
  "key2": "4RVwCEM9Qgx6XgqaPA6YcttDmbv1x5qsufqZfbdz7z1TetNnrjqC7TadBiqiHnFN7FZsJMPJQdArvaJNs7fFojzW",
  "key3": "jbW5H3a8ZGgXXFFvoTQ7bUWRLQvtKJXo4gNEKDSk5PB4LqkaoQWhuB12rY6EEpLfcDXxaRuSJXj7zmGkyLChhGM",
  "key4": "3QhUWKWbX88PJ5FYhWmyAjEqejzHksjYE8BpkKRQyVseDDzu2fvYiUsmXdb3gbvZraaHYA9pA31uhc9sxZGRM2U1",
  "key5": "3HatS7bFmRPdeUoo2yq3hoQEdQkr2Q7GNAVMwn6hW1hiqgFAYNwc3V8fTW4cCqbjpY7VJ9a84eeD49d2dTpYwJ9L",
  "key6": "5P33QYLnrZjiWA9LdTPiyUmSECZcGSPkvZu4afwya9HXbrNzrBdFLyAZrU7dUSTRkhwiAHJnQVyiJ7pnPCt68rad",
  "key7": "5yTqmx3ceHTnn8Z8hWd3sFZKee7pm3mfC7vDWeSvHCYiXRgU17d3LoChfTKWJWmZDyqRwgeQ5saHs17FomHBCf33",
  "key8": "5vjSqKs4MLgZwMxqD21NZ9SDhRZzj9F6Sqs2svwyfuFZ4p9mLuTQHYnaLMWHd7FxeFMDw73e6RjdHCVRMH64s519",
  "key9": "5HrcmFW8GysDUSUxd3PSWsKYX1VJhqT1qTR7a2qKKJtQxhYQU4ddSecHBLux3yeL5wtRJz7Ansvd47LAmkth5kNN",
  "key10": "5nsuJJ8CYPMrru4PxFeAP8LxoAcHKzMyAdoipxWvhe1XPWw4iPaHixS1eA4fU6BJZreacMrhN9AmcvMWHmRiNUC9",
  "key11": "gJSyEvhoHxmbC4po26PtuPfWG8woKdNnZYUe3cM79GFipm3vW69YwYoHjv4E5jrx2xc6ouaHyzBdDs3WcK631pD",
  "key12": "qoM3RQRwDLKyqPihWwYvVaRDNdMrv5nYfRcXbK7AEsPfaYGfasc6jXNWpJuaG1ihpv4K5vi5u7jkqv8CnvuXyV6",
  "key13": "5LJidKbwLmc1AVjvTcqyw1W8qdFfUisYvAFz6CySycUj2hdivQuCWqfVzwRDNcrryRtqCp8KHGZFmmHwtjVFekyA",
  "key14": "2cjyYfJny1eRrttQf66AELWAL1eAAiDJ2F1jWEmkVi384vbuo9CMx4aHDSufzuTUNuMJzkfY6Av7fbVEvxB131RX",
  "key15": "2z4kMNRM7BgvsDGT9SUF3FCNXBC3fjrKjvabe1pKsuybVbiMFHzt9VLnvsMyNahZNfJWJLBS9cSKgBGg6WXzxMEA",
  "key16": "5S6oeemcBw85GPfn1gSN9ho59mc3P8VZYp3eHBpCRiHVnAZ5XFWCaTnztEqB2Zrzid8Q62HuoXwEb7hGGrW4wuUF",
  "key17": "pE3b6DHJLMJ1V2H6ZQNmCZQ2RAF8yP8jUedKsoECcHPC2rmWxcDMzqXJqufn3TTdUHR1cxHF51wdxkdY3gva12q",
  "key18": "HuWPHap5pVNRrkzrjG2LkQoumaHLFA5geAXt4Jn9prKJJ3agsSQ1YrMb6D4m113DZKiqJkSGdPqSB1rQ9PPqT7u",
  "key19": "2ZNMUgCxXWTvENQJ6bMWiUbD2bT2hjnicir2gddmbTbp9gHGPnG5yJ7Fgwtd2x2av5pVKz1FVZgQEbQmQYrbM8L1",
  "key20": "5d8mNMVSoXsi6JSjAEZAUiXW8RQo1LsZ3yjbdCa4ovxVvBC4AUGKZVAXgTLrb1bAbzJDvyhFxfrGSJJex7hyhvuu",
  "key21": "49uSUrrPYUdkEgejuxRK95t5cWTtyX1Pa5aPkGNvQoekK5dwVaT8ajDq5AZD3qfnSFnefbZmY6zoi5YErYDqPAs7",
  "key22": "5XuTDxfpkZH2VQYCY65a3JqECECwwEk5Ce8XBd8GAzh2wkiLiX3zT8SnkfsecJ9ogitbfEu2Ra4giFqqvhsV2xZ6",
  "key23": "EKi4gq7H5wVKUiVxho1JkyAzoMo3P2eVHBev56tuNeZfyMPSbNrsMCNGNtyaKXtFgjmUhJh69WHoSsmhkfaKBHR",
  "key24": "33yT3wTGnsPynUtioiMiVixwZhZPLWRduX1YTXpuPacz4cGcqozJ6SMyY6NgBXKmooRV8gQW1Gv1r5911PpZckg1",
  "key25": "4ZhiiZ5LQ8nPjL2W1mR2LEAR6geqbmaZiuho8NvV7dRNB9pRnUJYhc9imoqBUY4w4f2zczrfqgeFx6HaXZ34Kjxr",
  "key26": "65gPeEcdbbwJHpmEPzt3BHyuaeZuS2kxozCsKz6Ct3TXHuCKkkiszhEYCrnrLrgPSwsSVHw3UwS3BB7TAw7SCWFo",
  "key27": "2U8gd29RFSHZRqBkH8xhfBGPR87mSRtZeduhTNNcCypsguV4ad613x7oJB6g2hDRxQ4VsL95e2BfRdYCRzmgUQ21",
  "key28": "4zJJB7iRcRjuRC1ip8XXbB9GqPiYLkAKH8Y1Bk9VNGkPbjkAaJ3znb1YobLjPfwK1JPRiucf6fHvptxWPyY5AjfW",
  "key29": "5641dfTc2HkAaMLsNY8fTYCain4MGwvrToqgXVhYx1L66hjgBPSnEjYBwi3oLhZ483Mf3UYn1jgjbtuXuDGTAQni",
  "key30": "4kxLVeMCq538Z6qKM9opGeQGTWzgPXZcAbti22Lcu5uSt5wJCsUn9ZyLmw2gf2HUWihr7eqgFnbpwDJjbeuGKcSz",
  "key31": "XwZBQiXXuXk1R2eHnbUepYWrPMMGsXi3vkucdKnCX3waJSL5554nRUxMke7qwDpAYoyZdn9faocqZqKYfLimTuC",
  "key32": "3z2QWdQbeVcy8xEHavtvvufoXg2KGCy5z9dG3Wf9tyFnhFxkH9FUfDC2JUp51tHyiP6EDMceaq31benEJcjwKtZm",
  "key33": "zKe7WQvJV3q6sNDe87c6E45EhErTPzoCt5ZueViLLbLKUgQ7T6H8v7CRNcrwxd6xniJdnRrzjd6z9gXbRrN5PTJ",
  "key34": "334V4d2DW6H1R58WitWyZ1rhLXkJ46Czq3YZUB8B2xiLw2iUTM5HqRBXXtNXtSYT4AFiorqREc4qEXBjqgz9wryH",
  "key35": "3TApQ9Mv2uJeNkjSpUCa4hp8LosL1V74wE4b4gDmm8z4zPynRGFmTBScC8yWLTwuN6Esvg1cKSX5K8UbMxhNsTto",
  "key36": "3J5fSgqJSvGGowVRyqx48NbBMfswF5yQGp4JP9ae1uHRFVwWxMdq58twwvjWkzFdm3jaEwwmRnY4izEmEtVuatAP",
  "key37": "LTK5ttXLFQTCV9wT7Kvt1SMwtfPaqXYuqsvESZ5CHXohys1n72xwEXzTQi7LPZ6GT6GFUG2YgEr8udR9dQXbBgx",
  "key38": "3XBKpxaBMbC4qVw1KbnXXJNEevRNYez3aMTh6Y6ZEQ2nRuTvFvjAVAJqgU4YcHm1h58gcpkYFdHLRgPpYoDNq3fx",
  "key39": "64y4oMFW3PgG9mcDUe5dr7JaUJLPEnAiVeQTvBWpZeZazqHmqkEvnHTC4kfErC4hrBZpJVwJXETLRnobvNPrDUec",
  "key40": "5JiuVQqy8E4CUpzPdowEwPEm69XTwswkv7keFL6PZr1ckBS1ULb2MPrQs5ni1m9ZCsQjJ8ERjobArGWkS3XChUpZ",
  "key41": "yBXbVoCXovxugDnYz6oFP1KxuPovZka2oXoRQ92xhBe2DNoU88ETor8NuA9K4EwBUd7B8yRjws5uWCxGP7HeZeh",
  "key42": "5TXDhWvhfK3jNtgHsAGkwh578n1sxzDVDEE95Jr1TDd4t6N4ugFWz79jzEkfbeKqc521GuUuEgkG5MMtAWJnprg1",
  "key43": "3tW5BGoqpJEL37e4UesaZvtMSFNuXsrXJ8fKdUUkWYccFZ6vwUm1h3XJMCsd8qU6b6HyQ9x2MERBmadX1iq15ojh",
  "key44": "5G1NrE26JVUPAPWS31PTstWKGE3pKJKtJGs3utbGBdegD6VKrd92QA5HwPg6VZ8aV5F1PB81AtWeE9Dpeaemt3PE",
  "key45": "2ZWzQas6Fi1UB59teooMkUgdP6hTWCWZPiZKxSDiwyAc6Kf6CNPMWU6vxo5RYHDwigZytvrhYLHvJHqnomuct4Mk"
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
