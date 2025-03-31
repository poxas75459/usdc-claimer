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
    "6yoa1aqsveZHDZVMtUrsaEGScbyVVCGZnndxScTqLGsCEAzJJD5KNydPEBq4vkjcA7RkYCisuzuVGqYsQ6GX1qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FyGiYtDVTPHWvHL6YzLEj6n1z9uqP1KbsXBHa1r9kYhtdJ8CvK12p7h7K2WtSw9htQpZxfJSS6Ta6AZEdwh4uf",
  "key1": "3p7pN8B8hx3QQhB1denty6UQiDngTUx7ZCJyG6N6w7Xgcyut4ukgznmJrb8PyJoMzirewN5498EnRnC434CkTyzN",
  "key2": "28WouNASQiaNcQ35odnHAi6CYq9kH1WrYu1qVahc6tjNar2XfF9WQqyDA3sifiLE48ojyxveiAo3nxrYr6Nz3PEk",
  "key3": "5uqoG4uN4jgtLfW6iXfqu6johkFNXTAQsLjGC9sooAnJLGMtG5SU4RUUxTg4NnpEWrUdDXwihD2kwacs5qtETGg4",
  "key4": "2qPZTioRTm6E66gjfaL4vUHm4sdYmRLTScWNXuNpNvtyoMDjvXHcgpeKU9tkJX7VzuhJ2sUoPjfuLGoCNvspkjrt",
  "key5": "5tsvFT98J7VdsvmLhcC7FDqjzMbkxe9Pd1W1HeA293EzAuyFYtCw9yWi4JAT9nLf3diGXLvcmyCaVy7NEfvNuDkK",
  "key6": "44k9jci4rZEJfWUPvU3hWZPLvHpjYk4wA6t6pDZiW51H3HyXAB1KhxuXGM6xFr11sVvygSFBtFsXBgozo6kz23Ay",
  "key7": "5VFkWuDQ1Lp9ckWEVxQWkbz81J3RgG6zoiH5fzWXFGAHhm1PtMuKq4z8eJqMjCgU5HFHSnp4yLFHqSscTuc4v9wr",
  "key8": "48ghtdbg6qPSVViQgGkJu9GkkPhRnDHQSCamv1gwTxHuvvX2Hy9vcy9whrxXqY3YdXpCzBDkYZo4zoDPRsXUgLim",
  "key9": "5t4irDBKpbMtB8cMh6caA1z1YFQfL6qdZsMzYxJewSGGofZhtPqGxb2X64G4GAoGH3UiPDTfYa9H7FgzshDg4aft",
  "key10": "61FqVrMaFCfbiTdW2eqzcEiFSFr7fgagcyHPYeHz8TQ7dA4jUrFSVxWGSmkXfvU2kkpwcfQUJXTKBhgKjzLqSnqR",
  "key11": "4JaHvqUhK7civ6zVwvZLaMRzAFRfAvdp3jiANu3soneViRgaAcDqRT5hoF53va6Gi1NDdcjnu84FZx4yn6uRQB76",
  "key12": "5CoQ6Hr4ucH6iD2fT2vdfUWCKFyxLrm97ht6XtUvMJ9tjsQU2MGdHoWn65Ww7NUUW8hnTyJdpHpCWmyRK51cxkvY",
  "key13": "2e5omwCXJygPoXw5R9gbPbYyx8nu1RAM1grsBYLMEVbdc8p4QGM2kfwyus8eK9Q17hmgAhLta4d6RTraGxYD8vLN",
  "key14": "5LwmukcSCXCTieprHCgvYGEqxhcW1hXqLc3LGb4KiKFDqQ5dt9ZUcrP9zKdC2i3U4HjgWRBm1Ubna2YaenwqCC7V",
  "key15": "6HZHDvAW8iRYNC18Dp1Q8HxucsRaLnjCR4VzPnMz4zUp4sXs1V9nZTvUNaXZgKdHTaSU5Wsgg4fNXHZyw9LTR8i",
  "key16": "556ToynteererNwGFkVi4JtZVhHEAewRevHderkZgTyyLL3Qa2gcX2vvEaqPTG4QkkFqicXgr8ioJLVwAsWJm9AV",
  "key17": "jb2W3xAQMNNVTgsJ2ypPhkq3bKx6N9HugtJTvjQhqVmUQi2WhjCqhZXtctsfjtVEtzYZm9rBmkRypvoUiB2c9K5",
  "key18": "3fXfrrxDYQz1irhnbQaanQCaK1X2i35zb2JgpSc4au8rJiDyb6K9EEeuN1GBfHhFHf1Pa1QQebUBKwdSiQFVTExd",
  "key19": "MvyefCWahTEwtzhE5EfEmeTnXq2MhXgTepLmob7MuUJcD5LbVg6vcurnSAemq2qyyZyLj1xzNj8fz63oCco5Sg1",
  "key20": "3c9ttGGy6BkM6mThv4SnqrouG9hnHb5c6qqRCMdF2RrcFh3d551bgFzah6QVfX4Wf7Gy7ZiyGtmF937omxYUb8BX",
  "key21": "3gnQNkg6qY6cVzo7CAoJBz3gioNVUmBX9JTaroA323bpwXZH3phfUnCG7GEThv6bybhzQyonEwQwHqVkgddCtk3k",
  "key22": "5asSjTChZRgndAzt5KjRQEsBQxhEPHnYA5HLn3rXy9aoc2UZJozuQbaWRce8a6GerHYf8VKyCE9YTWCPFcphPdsf",
  "key23": "4vfHdwAtf8fvoFtq4w8VdGSQPsA3c5mCtDNCiBJ4RHERvsDZJ4k6Uxvui8sX9pAuBiCCNaPdr1agZxhTDghV2n6A",
  "key24": "Su6MDxnvyhMvhE5mwEzPM5nJutjddS7ygxHvdq4kX3uejufg1Phv5jqYy5soN2Teq91UTJEPVGw7yNj74bjoriL",
  "key25": "5itEZooyDdmp8Z1g7cLcCwaPktxZwTDQG7RizShMTL1fG9qGeSS4HRyAfyafJGAyLG5Mxos18LiZxEijtr7718Xw",
  "key26": "2YtycEtr1LKgqbLbBS73785JSbwL6qqLQ8iDXeyr3UNGDw5bSUG9iCwGECEXiYejjrHG1WiaY1dFfggJc7L5QFMK",
  "key27": "4CmUo8votbu6oZ4Kn6bN7StbnbfUWab1CwWEGiBNDgcUi9TMwWz2VGmQW91pqnjYS7xm4X4H8SuwyzN4kTAREYHS",
  "key28": "2mUWwvj5e93jdw6JitnukAcWkB5b8STQQZ6pkEGMTKMs4KbMRWWZ1qV3NQHKShthxc53vJi29dUCanneL3WtZiSg",
  "key29": "4mhcMog8oDARsNfAbRnHzc8Yvjpj5Hkz4MjcYQLzg7yiGg9FRjkAJrc2cpzSupnX7kKk874A3HUmVbXWVBv5cBAZ",
  "key30": "3tbSehLHjW9CUhXy5c6BBpB88eUjkemm448FE8SjRf3iZvvtsa4Ai3nDq8yvYrqrjPxLUSEHL8vPBhcbqbMNn1Td",
  "key31": "5AswapKVkMR22FnbA96ND5k9NfJhrmpSXoy2UXYRLzkTRhbAmG2so8UoPqDSbrwBPYh972etxdT5Cb8hYBa3w6L3",
  "key32": "2yqqUFnkYBXFCpwmS3YTjYYcsBpz7nKSqqXPTfwrgZe8WRBnGSGSAQrGVgDkRYzSHXGWUW2GFQX6W2yij6CULPiq"
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
