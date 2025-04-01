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
    "KZVajsGdMbe3xqp1RmCeD3XhE3gFs3j5nfuW1Wr3HBR6FKvfsgbUsvYTca8CzMGgPB9KDm5LXGdmnmvTtGohC9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuxq9pTurWhJGcaEP9v8hmDWGpHg2okZAqw25YXk9JrrfHJVaLmfW3AfoiTHBJj8F3DurxKaC8KyHD6YrseZP5w",
  "key1": "2ZNaXW22UVJFADdFc1MxLL7R3FNeHJ29Ee4XWSeXSfeamkRy2Y59twyeCG7U826XkH6FagTr5Y6QpegzJStuA4Fo",
  "key2": "65hf7bWueazf933ujMttG1fjGaQ8JHsLGK6Wj3sph7yzjoUHi1HcHGZ4A1Wdt62iwdbnRBEhq15Q7oPtxwrNWkKy",
  "key3": "Bu28C4Dq5GVppv5k7fiQjVmeVbJT3q7cA4UyLTVABVuJYfJS7U8RkQ8aNbvyoSBr8bKauvb1CoxSNSosyMJpkAx",
  "key4": "NyzEZPb7KibrAvG16FmSw3MZr6FE2A6BjCMZAfciSLxs7Bjkt6YjZDQAFSEXwW7xPULMHihkFb6QgHEWibxDq1A",
  "key5": "KLRxUFyR2QuVQksaB8bwaZkd3MvmtWPLYFnokF1bXWxEwNZ5Xc9yxuhjuKqzdVkb9Hm5k27EcXNT8RYTNmQLUua",
  "key6": "4Kp2URtVw6JdzHqa8KA2CSpDsC51JnCX2nFuACB529E2ANvnpus7LyMHenmzUnsKA8Z5bFxkpZMZHfGFVzM6kUmG",
  "key7": "AXJQzgSpKEhQ2teuQnZWpZqASqzKBwwERf4XCGbRvxcB59MXHgikrEt9uQW4LgC2x4veYA5R3Jn7bKVkeKyhgse",
  "key8": "22ESsgBhTSNpV3US6TE1HTjQZqRzvWccwFhUBPeoiwVAqs8vMzGeseZL5HZV5ZzawfdYUMejq5NAssDFXbUJutve",
  "key9": "4KL17wosQ8mS1xFt8V3Ss6i9A8ettgEnkmRt1oxQ3cHB3zvLMAdvjCs9N1M1zYmzHAxaJ5nZfoXy49h5vfhvz87k",
  "key10": "4ZBWD7grDckECGdbj9Hd2QHVhLunfMKWmxdAZ7ULQZ3rTJPCf5uwC7AfmsMCGcqsGhdpgVxJwWyAoYw8BqcUCrBK",
  "key11": "3SEqZbN52d9ArViWwbCMEzZCQfCRbbwWh1mHrazNspwKmuMoBgYm7V4k6idzNoagWo3mmm6bFqYgEzXtuLk5Byug",
  "key12": "5swHm99w7X1GfewsFojgpV9r9rS5LgbKdCtNpLzmX8zHXVcnSSkhQq1F1PZJsqbEbMTcEuGcZBmesRe6PBRGcFzK",
  "key13": "tqYYBbjG5tRf18Ejid1T99TXtdykJxA3n6XdcjuQQHfv9maB3qZUASJW9qEps9r1Ba16TcNJtrfmzY8aPyWz6JK",
  "key14": "1PCPeGJ9CFd8JjcU8xxZz1WYPxEiWVbwkZhpysR4UVbMGowK3evxsFkM5si9TJbwQgQBgnbYLz1dAVECEHDA1bj",
  "key15": "uKfgfwjorRYaKssbWDaYHEN8UzFTbuZ55MYEZqDJmiHQVhZVXdzaDp5CWeWWs2TzTvv8dQqx7GzP27oq3eM3CaK",
  "key16": "3MHz7VvyKxZYawzuuxkVh5vBVe4jHs9Ksy4gZZjbAsiKC9wKDpVENVQJzEtj6ERVhZDB65rrrFA3mjeiqrUeLFw4",
  "key17": "3yYDKfHT19fPHZbiHPnpdMiG61BKNrXLsSVnaYdftughV5nDcZk6BR5DWuMAp8wLNrqGfuSJ5nkcQ4NXsemBh7BG",
  "key18": "su6yUayrNpm941UvAFWbFFGqRtBryHsZquWHJJVtWvSFhV2XzEcX8eK3DzHYkPQ26Lengf7KneUa7brACE2g7Fq",
  "key19": "4oi1DhuiTXad7gG1h826kArKHQjf7QbUdfiSGfJoszEZg1AEFittkwyq3eGCdRXkBb1GTtikfGWh5ud2K6pCpn7P",
  "key20": "36yYDwfJhWpa2j5QcLzqVsrDgvERu2uSC3VrTKkwbjjbhGrwkEpZaTqQK77iKRx1fRFd8iREbDYT6nFytFEbaybw",
  "key21": "5is21t7xcArUD1TzS4Srvb8BL5NL2jMvMyck4fuYrzdESe33uPGfyNqs8bYGFZDDJKP3eUwUziRNm44CqHpY3px3",
  "key22": "4PTa4ahc8asBbH6FwQB8wBUS9CQ4DNVSNhFgiDGtN4ix1wEm9z86SddfUrh9BrpEdN7qeiRgKpuv3tErtx7MxuBn",
  "key23": "3FuULGijzTaJw3f3fh8iUAU73rJ3B84Ze3mx1AkJZ3rt5qWzoucUHBD7vpvgqK1g2qS1cdb7r1dV1Sf98yAxqAM4",
  "key24": "5iPAfSLEQF69GmR6bRJtyFp9kq27Z9o7SNpshQjvaCehFmLPU3SGUcQMdEwwiZoZ5garvWwcEYnvVPPuxPNH2JCA",
  "key25": "3sbahkeqCdymXcdcUGfFUMwxWNMwe1yWjYPYAR7cRHRhhGeTtPkwr75Yi7S5EjwvUSLwdSVVP8SzjVTwttPpyJH6",
  "key26": "3Mveney9BBVsKLiRQats7FhUKQyywmwkZ4YPvrkgBoeEhLFn1ii93sqgvFKEtSwjvMn8HaSQ2qwwPGdMnhUzWzYK",
  "key27": "2CUsh47RVVt8FCr3qzdCvjk2MeM2aEsHUfJYGWmKyznGKFShkg2iPTBdEemXsc4nqeDPnaLdpszVTBthH43VRj9p",
  "key28": "2R9VRpvt4KzNFeLwXmijS8QdBnLm77dFswosB2evEF1uUQL7fz5inYqzxzhAavxDX3gSGneMLcERWnSSPBfTKL8U",
  "key29": "2jtQpQXUcwEnkmSbNesUboh3qmLAq1zhgXWAz37wc1aAD4Z2rieDcgH958XwuXeqYRz348GEoN5UHSBsohfZcKsv",
  "key30": "3nk76mEj8BBZQjKJrkLNzwtFzxfdAfhFMAFo9ueZwFQzvZP7Kcg5SG4VwNBafagCvHZxgt37kNwaEBU3ibVcFW6i",
  "key31": "2wHAA9BXMmvswSuKPzkakXJfYor81Ln3Krb3L3o7SY3nwrp2YkXTksjmUmc2myLshEqhvsvH4C7BR73XrzV3sVUA",
  "key32": "22hhA32kBnNsLojyB1n6M89vqV5euMG4BNxEhiwcaSMJiQSK6HvgE2hoErMjowAVCD1CzmNwmrMRT1dHnXi3QmC6",
  "key33": "4qU1XshJpCCnzTzMWTwo61xqZSZKLMnAY3PfRzufYQSFmmtKyKDTfqcf1TaxPBB4Q8esmAFxx36vXSgs5YohfciX",
  "key34": "s6U19Qhf2cQdDuPpiyKSUpZ3AjG1wFNMbA9eDH1jqujEcYmpY4ufmj1C89auVuGzP1vwzLnK8D93UzbDPMMxQ6r",
  "key35": "C4zmDapKQNkw8sMQ5NNUit154wuyznXnABoJ7fL9gbQTuuneFWG2b9QmCaUr8posJ4As5enHQsDsGEF6gayBFge",
  "key36": "2qpQGKLnqHY6t1zNmEGhDpaUbJ4PJ7if5nYhWQng5ZftK4iQXGjRhsmK4Q6APPmcDt7AGVw5JTSDm3ZtRadzqJnq"
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
