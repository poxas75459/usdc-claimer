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
    "2bgnBQAyFbZRqMDpbsrcoEr1qPUxs6v39gYJETNwqvK3AZbuds6nbjck5QurLPtGLQDqdHxzK48zYBVQ22mM6TJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgDq3FrCcfqMZsKxaRHitV6RW31HmFkcUkRTMDXXUss4SUqVvC2y3xB8TGWKj5bjKLUmnsyXhMxwnobEdpFe4T1",
  "key1": "3UZ2BLVz7b5gg6ftAnXZPdWUdhTTDo94SH1fa8982o9tyvZZw8WDfQ2DB2bEPnPzRBU9WuDcj5TD1YZcxVXjGnd5",
  "key2": "3iN62ufokBdKeULLaYKrfJDSqvmvS8uZWkShuTzPNpZq1k9XPKMCYZCa77cE7TiDaSzg9wDSXCVydWZvdZJix5fE",
  "key3": "KjpfZ1X9wPkkq4gbAX6mEDGHEDtCpLeoxqnqiWN26cigsQ6LTi9F9kxjgKcDBfgm9MVWr4CebzjS34MfzKZEymp",
  "key4": "4dJ7CKdSkSibDkpmAa8xJ96qMNwB6ESrALnScu9iX4E2ncLyKLbZbFa8xG79ChpttiDyciEp3mkQWzqDJXMNPZPc",
  "key5": "2JBvqLPCAPbVsguKWdnHTr44q2XbGBeXAJubtuhrL1WxxmzBSEF68GpvFQHYavBes2s8yxRK3ScQAmvZSUJaMGuC",
  "key6": "5NLKKd5hWWWHrsuENjAZ4SvvdGdYZEuKwgB5Lozx6446DZJYaRzMZ3QxviTH9TFXWzvyncJfWUQYTXWC83CTHjZj",
  "key7": "4jafUkh9teBttXtY7QoaKSrKxVnYD8mvcrx6iF6ztPYAuGwNizRetEZ16wguYUJA2PwUEeKci1YRVAPFPqVrkdBU",
  "key8": "3xYTMposmtfVHP5nhpzV2QD19BDjWix5kJHgWd8LtW4XveA6RqowxXrHjnFndW5uD4HrVsbWfycvx9x3VT7PjjHL",
  "key9": "2HD2KxLT8MamqZAqFFTnr65KCvJ7Kz9Kn5QN6FZY3mRjBgiM7UrabCzsGxY3SNVYiwYHKfQhmrAmnUui3NazNxvM",
  "key10": "49YMKURPiBggaDMQNiap1fSrDFvAoNiNCcLPM8LZiZS7t6tvMzpznPRHYrAFTau4HEFkssrNWcEi9eGVhXUfFN6Q",
  "key11": "33TiwF8wB8PKxjC556qnb86U3YeyuxD1ZPfdMmt2V5BVuh8rE9AoysCnTv13BFCtrLXUqRNp8wqaincbeXLZg8SN",
  "key12": "4Hx3F8Wh5N2PsZx7ZbPX5HYx96biooEGjrtGqmNjf1bFMqwz4m4eyT85hxh4YUbzSDNbXae3D5aGeBz3CRGhqigA",
  "key13": "QTP9chcLA5Ewo9kkG6rFmGG7iEWGiG5t94t1geePoWwY695vDDSJv6UEZ1DM6RvWu3cYGpfgJmkZZqzPrQYBRxo",
  "key14": "TRnBYfdQtwt43iyVtJ1xAwPfwn9t7qZHvcXD7aLXRA2expPeXvqmr8Y8YWuoNTRJfz9uM1uPp1yfqFL9GNheHHc",
  "key15": "5Qc5Z6r4RZ2QMhEqvdDmM2K4PhWEAjjpjCthZhazaRAjQtmHhNk27HbUHjSHFhkiLBQDhC5GntugdeYemuSsjS9G",
  "key16": "4i4aaV1sWSb8uhP7jcD5SPGxkJZybCp56uqTg9C2uvmAZsYtYs9ukYxwEgyFq4zjtFB4hLs5QfgRhjrdY5K7Xcbi",
  "key17": "3B8xGWijhPV4iYemYW3EspFB6emuWKrHpjnYK73JPZeTgSGASpTEJcToHL7CoC7CsoymSdz4ZmUDwYZHjzwzFfup",
  "key18": "2XcoLVwex1AZxsaUzGKrvK3EJm3kFN7tjQwAZk3qRqfMwvMbmjT2XvD5YakCA4rN4huyS7PBc2BZ7kde7muEbpBL",
  "key19": "41kE4WABUkzZG1MprLmzTubmX31JRk9hbKeiG5fQExVgHf5mdu46BnrA1kmc1UxtdaStK7jjQXk3pCAbS8nPEUN4",
  "key20": "3CFjrjydMEG5krXubKDXadDGN4TmrKeGrKUZUV2pNKnBxmFiMRJ3G5PPJSipi3daAReD4XGbSYPMUjnxvnJ29b7",
  "key21": "EPAiVg1HDVynGz8FF4UZjT7o9BrtSNoLcB1nm26WPRbPmLomn95JaXQ8uB6znB8rWD9TbGSbwCFJokwYp3QufDS",
  "key22": "67aHzfM8wALQ2ars9uUuFRN1EFhF3cYVGkWWX9NGpKYzTfuB5dSwpgMmQzWPzeypmxbEKuL2KC5cPZjxttZjVnv2",
  "key23": "24KNPU69zswMLFxEdQonPjyUs4aU6UadTmD2LCYvKxZWpb11Wg7CFCHUGjD7XTFpyEKdVxoXHKVbpmhjQR21Vp2R",
  "key24": "4f6cGAFukuCSAPPUJREmFKUkCBvD81NKvX6PQfU7zpYPf658o4HQCk1jjmY4AaYJqgawb9as5gz2zU6iDtstJxaV",
  "key25": "3WgG97xvUvesd4mjhFJeuTaLeJACXHCGhpsJMMaY7zhNgg7hvHzmRrQDaJVMXs8d31hYeNBDbrbAmb2eXo6LLtkG",
  "key26": "zQJBy2q8XKacwKCjbQCfrttGMcb8XtQ4cNqSatECMb2CCSMKgif4U1eoSv2z798ZyVBumvnayod6Y4bZDtDUhZ3",
  "key27": "5YiQsb6dbRrdLtW6zxayF6JbR8YEUvKsAPUSnD9i2dNqwGFdwk47FrsN7DU4M564yDeAD4fAZJcQeTDKV3HdnKQ",
  "key28": "4Si55iTEYhG7BsUryVJe1JRV1K4A1nDWtTa6ppjaxQK8Sfb2wpcC81NnMXvCqbJxB3mh3M3pCs9mZRdngzhFfLPB",
  "key29": "63penULLxcjQQwNZUE6fwFzz1VvXkTJCvFrhtXbrN38Xu6psGRsYRCQnp95xBjQRCxXgr1hRy9FwCQxwDVj698k2",
  "key30": "39FMmQTdv9YmqLP13b6rCXgMRzRUrYFFfzsbCMb7hJQZuzViveuB5b3HFb9zbajV1rpQAYCBqBrS184JKqa5wT6S",
  "key31": "2ASX45MLCQ7ZH2bEc6iBtvXVzSm2kBQn7oV1b5UFoHNvnGHUPfWtiYJEzzSYiTNVvDGEacwRh5CWGP5h5eskaKPD",
  "key32": "DoRMnVQEK6MUWEiE9DZj2KLctYjZxQf1FvHzQDCu5PCdyKyrnPzsm4AWif7L1528JwNxjJZSqSSVzfev65voyo2",
  "key33": "3dFaftoHZ4Jbynh2erdPYY56BAFntTUNVRgWTdasqfY6ocMGuyFoZR3ksfTq4FA3pYmuc3hjye3uyKQeNcAkwcCt",
  "key34": "S8qBkEntwvUvjjySFTejiWybsqQNgr1vhx6w9iXE19YXp3Bg42nWEKzAgS8q1WjL6LHkcqeELQZ4kfAknNJSffw",
  "key35": "2uYYN4PHEgK43ppSBpzJSkHhxKKa15wMuYa9yN6jno3aibVAotJaqq2nVcMZwExQrJ7PG68ampZwh38dhovDXVhc",
  "key36": "57VngFpDit7uTCm4FMGpuzS7tG3z6S5eyqbzjPLJLCaNyDzbXue7RYq6W5bpCv1Np9Eaiq7Tw4u16s8ynB2UU9WB",
  "key37": "53j81eEW2CJNHKZ3aKcyi63uq9EXVFzrdHARHe3pJkCdmFeGJJLhUm3ikMcc9BQDXFwe829uMGSTMJegr1oDaZcJ",
  "key38": "5UL4JkxdsAVNxRy1VCHhsYe58M6m7ftfeYXsLTkZMotbFWjbdpwp1bSPytnVfd9WqiprzZEBrKrMRvMeLaY2LP6m",
  "key39": "4qc7fgqyH9XmZGVubWdFsScoCBxvM2tzzQrFnt1eizWqD5dh9SZPyvpGwuFePUqc7cAGaDJA5ioGCPBBR1mXcJCV",
  "key40": "3AdHaAujZZxtYTRYpPx78NfTivRF7pk6H8dn3bsekGXtnFGPPjFG8YcV3YKfivpsRSfL1cWzPEKvmBuYdwBFm3BA",
  "key41": "k7CnjLpL4hnKL954mmYfPFEJiP1AGMPituiuXXqmFZ1GGaV3op4FwJ7fkt85XYcmNGzUE1z3rcD1kL1iJuip7vr",
  "key42": "3oqVCq284a65JLUzvJZyp5x4T7H79BTAdHt1G2jT5JERWJmwE2jyoqNkZkRJC7Q1GwvyULVKqBdmvL3UFs8HQ8Cr",
  "key43": "4Wv9PYJMGDFKcPwzm1ScR114bHL2AzxE3yaCUNVDUZK2izxTDJEbdcYDuE3dKEQVxXEzCaNHEXEjtfmwzeLqeLVF",
  "key44": "ZiGt7iidTR6vJzXpB2WQm4Ms1UQxEGAd83PNgZb6WpuZL7UGcv2Qa1yiYfAPw9DCahyPiJqUBVmPJFAKyEZpuwU"
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
