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
    "3omdafozjHJ5nyrfPZaWABG3HWqKHnTuUJJNCqso5iwfUvnQgV3vwmDNEWMd1tDQtXMpRC5PaKWynhsdLE1YPjGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tiWgs7GwvDxfNLYHN5HLNDvr36mVYJKy3KwnALeDp1KFSgFvgzupVE1rAo9LJvrqiiPeA3hERgUDq9BnQiFDArm",
  "key1": "3qZCQiouVYsE3wKpXsaDgTnWD9KbNdYprUcQ4R1nzQWU3jbqbCMgREjYsuqMqVi9vn6hk5Ga3MqvbrGysqQQNPmN",
  "key2": "4w9EXHn7c1rHJNGsTvpFxX7wc4SWTbfXvTLLySeEZi2VTANuhCzzWe9FkPwpdBLWRRs22tFT4a1hRboxvZDNUQp6",
  "key3": "2Q7PVxojZQuG4A84VfD8uBWYbSHW1N9nqQjBqsibVnVHMhCRxMciUTQv5D6UMsDMw6jcKEbt43UqVVrHxtgXvZhq",
  "key4": "2My9Hy9CV83DUDBLDdFd6YVt6mAAEW72uaGcpeRspnhxMZLAGj2zKtW2ws7n1FwWmDnkqTstPexsQCFT4SqvT1VF",
  "key5": "4w47TyKXDtBP7fpcwXVQ1gtHxtoavcsCNTR3BC5Xi4vzdBK3j17DA5GU74WR31LVckbcVF2wAPN1Lt3GPNRwgdj5",
  "key6": "2cMozsNkGdm92iQcjtZJPT7PeS8qrR5bThmkFx7Y2HzCK6PRD2VemZsxGp2RZ1pBorTV5k4xm71oD1BPMuPaPN3v",
  "key7": "3rmTKiYY43rTpZKhChkDUX2DhSzj1UFHEjpDYLaDtczT8yb79Z9jbP3kgnqdvY3xgJnSJDxhix9aryJ7fqkHvFAd",
  "key8": "ZmddGDmcSKyRwZrwn5Y5qj2GAe3MKsEaJgdcfU3ZeEvUx2KmH548fBwFHVTh69GxepZAFyQPExKW5Pi9v6EZKLs",
  "key9": "41Ynf45hzbSdtS85VbZkffa5rKWKEAHoFQ9HQDxxeKhwARnMvXNV6ynBv7W9JcWzmPRRrUG4S16nb3QgqReexe8b",
  "key10": "41tJhEtjDAyCTML1hSH5QAGLZJDsYYguXNJrFctnZsPL5HL1Nhg1mNx4coc4rUmFsDfkx1MdSDGz7B6wGJqL1QT7",
  "key11": "2jSCfxEcw6zJXRYuZj7B8ftBEKhh3XEEwsQYtBxxPAVXc2Hviqaf6RczEUxjM9qGh7u17MpGBMCPcVzgh43i5kqZ",
  "key12": "5LZSdWbt88HAcxVkVu6NPnXxDSw54FKBqTdJ9dAgpCUEGU19gpRmvrbAvDw9HAeYgTj3MqXnSHNLmTcczj4vvmUu",
  "key13": "3Jk7oXjpBAu9crS1ssPw67N7BqrzZyCj1RAFmZpEEXUBVnnozz9rEdorwhRimThDH4bDRbWumGpdc72ThM8zFBcM",
  "key14": "bgN1rGqri5jcozm4b4qgL7AengaRSnvqnDwfksFrgemMnXbhvvvnaSdKxwVLQPQqjP5xP7R91NYrAM7wC7szDtT",
  "key15": "2fXqeyAJBA1Jg35HgrPaQnDuTrCoqGJtnXsZ6MgxSaPd2WSMi6nEPMt8xPRMCxV8Q971yAar7rNdSK7XtwcdfuxH",
  "key16": "4AGjtw3wT1u3Ci1wd4Uu5GYqLYD6KqioE6BYKRNWg2gb5R2WS5LLawQSATcKATjxo99V3pk8MbNyhusU389aYLki",
  "key17": "5VA67AGsPd5FtmPUpuV8XvjhmycgKoE5zY1CuRvWZJWj4qWiM4fQty3BSNW7Bq7sLMU3X6aRizdQL21tDjckvzPW",
  "key18": "feyNyxvrE3MzLHUf9ymVXaYH74qisznGuDfdtyNVaprQF2Jdc7dWUzyGWx1fjjihi6CZJX91fKBznwjn4YrF1Kx",
  "key19": "2y463HqTDTVvY7qjy8Xi4wMhZ5kL1JqcDuzWTVE9bgeMYLGPofxpKuDNorWXiUB1ZbfeSa1JF1ztaFYojQJF5dKi",
  "key20": "KXyos95sTUu2rBrSHMHVUej8qYUw9XWFms7CgvXt4JDA1zKJrh3jB5STgg1NCFi2LTXcww6CpaQyZf543xpPXgN",
  "key21": "2RRHYXq18QXHTpRypoFHih15deZasVoivePsjRpPdC8ZwSV484MmJ3TJ68sR9iqTPSX7LHiKXgdJSRmvsPxigXZ5",
  "key22": "2G9K5ytTntRpGwZX5dhC2vxmKejiaygG9xMbW1FuFRpnPQQX3EbtjdTBa1MpY7j2RuJZouNvoCWMBViaDfvjsriU",
  "key23": "3UhWxrkaSfe65rJesqhEtGRTbzQuec8xnBAJkxLDdWPoZtkgQHbzx4vk1o9R2sqNKd79m3EBxocy6pwthRqHZP5h",
  "key24": "4x2sFTgv4uBFh8qoWL3dVg6eYf2GTLxAJCDAznZjrPUffWXqMRpYgWZbkSkiDbWbKmy8MFa7RD2p12rwBWcNpx5H",
  "key25": "4eGW5Ab7AuE9kkLvEreXn8wMyzdNkrmvV75ihNBwV2u58GtS4yGexWjx8fFJiz1MpbD6RQexPMui6vXdg1ioRgMp",
  "key26": "2pYVzcGeYXMFAJRgAiXHc6An2ez6TNoTv6TzyBct8rSVZUVwee8yZ9aGkQieZHKFsSceNvtJrKqSbSA6b1PDSFaZ",
  "key27": "q7pyyRxi8bVnqTpfJ55ftH8XKWcbmRGc1ZoVNbHq2YCNoLMzo7XwrYXKN6S3MGbuaCqUhz6ryEdTHLgTXc6jGMN",
  "key28": "9Ms3XhjsNexcxzieYCNwbmkvoLhj4wSYFVG5m3GmA3Vqbc8EMqsVfN9WHunnPqvT7Reri4tcPf3Z4rwxFrFoqhx",
  "key29": "5D3KYU6rxBzVzChS4acyiCjq13WPai5Co5hgDo6s1Uh5aSKa9rgSMsEzA8mdUoMJxyBPuMBPKNb85SX7FdjsLYw5",
  "key30": "3W3vAc3EU6nkCfxUcr883VQrRDsxXWwEFpjd7u8xUJabzM9wevgLi3FMQWN4HRd2SHNCELi3fLgJKSTRrJ5QNhQZ"
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
