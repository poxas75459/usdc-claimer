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
    "5QAeNcpu4GpZE2yvYWFyjd2ytv4kU8q1m1nN4N5BHGyEd5bNDrq26dr8eMEnxYmzThf1oTDz6gNgUY3ar6Mw4Hnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329UfGQUK5usFTRSsBhH7mzMLD7E5Y6ze6MDjiTYez6UTeAiA7ovTBuSRcKUzJZ1ViyNhGo5JF2TVuao16jXb47C",
  "key1": "2gUq8Dh4AtLEjuYPU7eC4dvt1SrVmJqmJoJLBHhXgv3n87uHTdXDDP9HXrwEFkZJjUjMjd6hXYzgySCWuTGLjdT8",
  "key2": "2FPun9hSRBNkaDsvm6iX3Z1un4NC9cbn9i8bowQxRMsq6BhjRLRYxCw8V8TcacmR7PsERzLeeef1dTRSfhmzkH3s",
  "key3": "5LX7QVJF5JJPLjSrgkcgyutsnTHcBXeWrGN2rsD6MmsAhknGYUsU7GbUJPp8GXWuDFQHdwp6NYXqW8UPZnZ2ZzZA",
  "key4": "3F3WjVLzrNrBGtgFHZeSVdCuVK3qvfdoB69g78ZNyWUC9VhWFhaDQ5s63TKm5paQxPbQ6297EPHiX7N76E1aTzxL",
  "key5": "52vL8yz6UJni1XokvaCoapdxtMZvJQzcriLudUdawc1sUW5YdZ9kVshHuNeHARGZ7JLh8fnYgRmMFtmkNPUvJC6p",
  "key6": "3NTMEaGPPvkkfyqXGMDLF1VC6934Y9RpCgNBVBocAnY8v9ifQtRyDVSEdcYc8qqLdmayWVov4s5QgLx6NE9RsmGW",
  "key7": "7icZcRC19y56zoyPp76xBf6dk5uiRXT8Vh7WcywBNm3TZqzsh6CPdH5zvD1FwebwMBhdTnwYJVWh1uV6FLQHcFz",
  "key8": "3bMHmGPgVY2wNgqvnKzheY5UDW6e4cpN6GFN6sPFTCvhkvibQePrPPfxj61J9aBhH63afDBsS3RetT5VGN81Bc2n",
  "key9": "38k2hhs1m4Q6WaJuUTsdax3BmfvJyzeMfW8DNnhVjxrmgwredS8L6SVwE4J1yaxcYaUYZeNc4ApvNfK64PnaYEYG",
  "key10": "2bV6evQ6uMHPDSU3baNrixzcyHFdMQKhhaTwZpUjU199PEP6v8ZVcdjVJt8QCv9STvto5bUAPjiQ1hFVjrTfjmLM",
  "key11": "2SoPydFUAwiBCwpDnqHM57DAARRUvytNsMJ2XeNnpgY3kxQR5Sx95AxdcU8sH4X3LLLzABW68BTVNCUp7cR8kAq4",
  "key12": "5r9CFoYSDGvChaC8oa9vu2YpcH1BdBbyvyhp88BRXFhVySXhQmZR6MbG3DzGmAhGxbmC8SEFzMMBJVDSHif5f5jp",
  "key13": "3qyV2BgSA6CSiL4dVaXzbefS5bneWMJgjZ7PhHzD88sRTZ8XFQQkeiNmRuP4cgksN42Ri5Q5puD8oAQzggzRXgVL",
  "key14": "2FQAste8Za5nkKtxp5ZPGQ2KFgk6CyK2PwRteZBzuCYviTtt9GmmHShZm2UXqV1fsSCG8EycH9w51qFCcfsmZSd9",
  "key15": "4vExnb6vBDHVV5v3yUwSypCPofCZBRK1r72WYcXpjyhqyQMHduXo9KzL9MM3xPDczmco7GjNJwFrwLKNjQjjNzBE",
  "key16": "3jV6RpZGt59pXJWP1VKxZbQ7hzVb8KfJ9EwpFnYYzzYy8PNwUwErDScBN91gQ1tSMaiUYVvr4wjVz3jKTWshhxYQ",
  "key17": "5Dt59JBpMXdfCrhd6CQwHTR1LgBGsScUiArtC9aPDDjurvFeKn2CgTFhBLcMZYpGgD9kzUq5XquJMvmUgptZazdX",
  "key18": "2NEPhvCNJGSWo384ribCrwmjVR3KGvv4sway6DsrLWHVgkGo5YXrCZzB1F4kJqd6JRb8u8x2qtyvGVGNbaj1ZBnh",
  "key19": "1x7zHPyNBdoKPSQ3ib8XaqVyEDSbkCUs3NV79JjfNcJBpQinpp32W6Yerxvk2if5rrNMPZ7r3f8HXbPakag4LFU",
  "key20": "31n5hNZwKUceUR5A9uGYdKw4SjVz7z8w8BjiUDB3b9uFi3q4tTDVJs8JsorVXfg31BSRJQ6JS3L4zasczq1p9LhR",
  "key21": "3THLQ77xoEFVb4LeRoLd7khZsEdzh2PvfF6o1BYvWGHEht9qPaA2kivGVUc6qGYiQvVKFdMPpRFrpAvGtgtPKhhp",
  "key22": "4JLsAZ6zaYcsTcKKKFiN39HzVWa9Z2NkDkPJvfxDHgLU89zMpPNKonH6HYgT6KWpr9YeKCkrk9mYmuNvZah7CzF6",
  "key23": "5d2HhL81bNHDRtW2h2aspPbobefMJvHVYR7CJJuEoaJKMQFMj3eMKUST5oC9qEm28aL1D1MTmpek5wz9jwWYfYjB",
  "key24": "5KU3tUUeQJTbBoLFgaaB8Co6eWK95L1nyRYZXFVSJBHAHntZrqs38sT1tA3KuHZ7BihkdkGHjL4mptaheNyqkfju",
  "key25": "32HUKDW8J6soi8mbPQSq7puMEq8xbBHh1UhBkBPhB7F4ERA1tjNrbKR7Ku3FzCK3uwtQuCyLZbme3MauVb4Nv51p",
  "key26": "5oGLiN4gD3uGjUXAREzhZrpQ1AWdSNmBDf4sRxpsX2uKAX5pGoVDpdtLv21Au41VH7zEkWZDyMJXwbbwZdHSbrAa",
  "key27": "4Ve5SvJXZQkq1XYDaB7uPZH3Pdp4TfufP1SJ1udgvZycC5tvvHmgYJRGhPBv1tbb1T9hgGpBRkCRML7yQcCs79HX",
  "key28": "4UKumDxWtEAYNdKV76KD4noH93vDuPvfW78sMdKU9UZfuRKFx35x456uiKJTVCrrhgcciUivCwUiRaXMkFYRFVL8",
  "key29": "3ZU9GpDD7WyUtDymVbuM8Gear7Eo9QeViRb7tLRcsUMkD1niM9tW8JdkJAggk5dbUTMu3AwCNfuBfA1Q7rJNNMzi",
  "key30": "54Jn3uU7rAcTuR4x5PXCcfGiyK1bRwmGh1AmyvRsHCyWcMLcvB5tGj1E9YAQu4UbCWHfHd3EzvomijYFNpAZdEbw",
  "key31": "61wHRVHRRDXdhQqhPtCAa9R19grKcsEN6eHDYtcuhDqFr2iLG7kg5uBPy66Kzt22XhhrGxw5vDD1USfhAJ2kWMop"
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
