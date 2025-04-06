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
    "3DA3g7GYD7c3yaDZ4zrgEEZ9RCDyewnwzNQsw2K4ZDXWckLgUFUcjLXKBPihyuB34nPiK5uXUGD1T49dCVDVymWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhiAzWNmBdnPCVdF37Mtm5yJXkpccAhdJXzpKCEv53rTozm9dpK8KDD7dXkf7oKVtMy8ftmFtViVffbbpshHqir",
  "key1": "2NhaMmc9fBdKfX9uRbEMdJ4fjBdH6VK1ttFcGQiSL11xAU9Gvj6D4Ecpzi8VCTMTCPCGSUsLr7x3J3S7iRpoDRwW",
  "key2": "2xNesPhBun1PB1BLwW7t6NiApA2jnuGHmXukgk4ZrarUjWjfPWBoLyCTNV9FFqBYgKTq23wFsWsEv4MAqXy78Loo",
  "key3": "5nRESEmUWpuVJNBmuP7oTGGCBBsH98piW3brv3gftCNp2khyiK1yp8YKvb2VU4eaDi1iYeJ4LvrK1Tp8fWF6yJL7",
  "key4": "2RPA3LrpXnwrpG2hcE92iU4DDNN1GMrCJA4F5qDoQXjzDH8KRmmAA2AyZapvuZMue6ap6ZprrrH46FH1NhaFi6jd",
  "key5": "T2Eo9zUwh3V2QACTSQFFsVKdzrQ1CjAEvg1M582PmAsZFJmzsEStFXuArhWUeM5eZNNuJydb68rnoKqUprAjVjY",
  "key6": "5YqWKT9jeVpgBbctwvzcoyWUWVTPPuqgodwKeWYF4vMdMLWMhgPfkYdqhMsvqxXKWgdS26cnkMHvXsz6VXvFP9aS",
  "key7": "cmjbQRzbWAy15ZHauGg3BJn7KkS147pr7aUJ1KWmVZLVWd7QJF1LMCnowBVz6GHnxY66GV5oV6Cc758Eic1dwGM",
  "key8": "2qHiMB6soCEz6gHsXnYAjW1fitYGNXmFM5e4xAVGPNHhFfsDtDsCFinuD4kNq3pnBBHP67MVvsCJ5fdaBTygz4UR",
  "key9": "39HtNz8dj3vLudLR1pXCN3Ko7VjJ8ajbxZB2yn4eXRp8TYPVdZuyZUTdo7JH5nSZnHXrEngrxNZzrQfwkGGVQSFj",
  "key10": "2EFsH6WAA4HS5481nKsaDUmgXgtxYQ6ZbtvabD6ryEZYzDnoaJE8ovvJm1iERM76djvenLedZCMofmRXomishmoX",
  "key11": "2zH8LLhbv6KwN4p2SzvofgKNZ7eHwrzoSmk6iVptqTRCRuxU8L1UzGRvEYZN33qTamQyLwoMamnKN38x7mvfMdfj",
  "key12": "5AQhPRvuv4WPyjBwzB1SMGQbPqzCVG6vCX8NR1PRfqS85UHjYKkohZ9TkBoLi1dN5rTdB4zt9PTVLDG6s5uKitt9",
  "key13": "5MmJcKwGAPxgeUhgEsXE2aWgHrqUSBncXQjQXAxdiBAJUbdaY4iFuQkJGcf5QcHRQurJaZiufFgf3yZsD7C9ojUh",
  "key14": "2XctNyDyQzKJsAkyS9q5D9ZpSjm8NdeFSoubKG8U59tu9SfkUk4nfiG9rgKwWyPY8ZDUhYv4nGPSsnFs7M51RMvL",
  "key15": "37S6t7d6q36iPycENmceBZwrPJ6kRTcRpkiHUYNUwoMAVuezFYhigdG6wbvYNztjm5qPdHkvm3msgWgVFgpdmr1v",
  "key16": "nySkdfCreJ34QQz13mGfSTbcheq6We5XomcpBnyZMnMnQqg3vYqTiAkgsYDszfr1um3gAkoxMQ9aTag4hF1upsK",
  "key17": "5sbiiBjEBiVGKhDXaxzWUtwmeEQTWpYmrAzo1Hk35kQaDp7v2U67ZfWnTEV7jazqW9eA8kFc8K49vRdhKF2gdiNx",
  "key18": "5nFeMS6kvqzJH4po3XQLEeXDt4PfQK5Mmb9ftaCxGWnnAe7V32TzbZeCnRRf7kJNmgfyJRMMyXhNLSV79XLerv9T",
  "key19": "3D6z3vqqiPLnvcnMdHrFcK71qgGWFFXvhm68e8UbKVseMc8wPVqiKxGQPLovxJjhUVqkYEvo6tp7QYFpVcGBnjQg",
  "key20": "5c7FK3myZ1DuBUyfBW9596KZkXF5JSnoDVNodjNoM7Cni3k5ZTfFuUV59HwTGyKaanAoFVDTFb42P1pJa3Q486pv",
  "key21": "51ekF38xVpus6JJ6smLGGhSTS7qidzwW478LF5qsJD4xNnPnv2UhzJwcs3SpfC1zRT6jMxGHPJ1Fj7EMUnHaUg7W",
  "key22": "p4NktcfTUAqANiUfhjd2yyDyTVc1kVyKybvSqfX52y7YmZz8NCUbHUGKhD13unroXeSWsRhEnXdU6nUK1nz2VkG",
  "key23": "5Uznhrg3ns4R8hVR5qX6khYQ7wbGvfJVLcXGWuvHrqzrgGYeCjePVzpHNnM296ndPRdHGAxc9Xz9De3QtKh9vKdA",
  "key24": "2xh3kcH7jNh6FQFmL3dyEFag3QhxBbTZzFCnSR29b5uRFZhKyphXwwWuYFfr6UityMNeL4cposk3SpexKRgW4oxx",
  "key25": "4oAsYknhWLNw7WRVNwgrgmndbn6YYTMyuWbkV7PDVEguXWWyd2BqQxuuGiAajSTAR6GhFVcL7wFNjTDHBKXEscfU",
  "key26": "2x5RRsyUP1uLyXtkUa5W6dYR2jmKx4DKeJTQLJGRa9Q5W2piGT9VJv8rGY1vfuMoPwPMpff7232v45pDYnzku7E",
  "key27": "kXSFKUgh7ekiG4SyUMfu2MEyPppX8hA8MhuvWSHASC3g2XjxGXph7raxwxy676egt5AxcogV4h7T68BtYAoaCKy",
  "key28": "64sqWdswZkUfJW54etc92eLpbK8b9hFaJ8jBZGego3uKvo2o9wzDvS7RenCPter1Uik5Q1MQRN3QYVrVXgDUawG8",
  "key29": "3ruYnMZLGrTra9E42gd45X7A6Kz37GLtaXM3cBsBMRL9pRW9N2sYyQwfhyf5znndCLR9FfBPGtFPrMDpJvW7qoTR",
  "key30": "2beimj75icB6dU4WVJxSGA2gxBCbduFAKBwRAmcRjtJX7XYNaaH67ysLg73RDNcK2eyrtZi71GYNeigRGs9KQxFe",
  "key31": "5mr7qU9V9Qb4PLhXponkwPmwSeqP47HZ26bcxUofjeotoQkay82Tc8QoWt8fmyLFD4SbT6tLASnJoDsemAPvpBY8",
  "key32": "42tTQ81hSG6QPXEx8rsQZ8QoxMdXzcXdph7nERjRjgoHNgfjyeQSyZJbaeZJxpPvzwyJGsdSNhcMZ3UeDnfUKaNT",
  "key33": "CMJCczTTgogtSWgwRHks4XB3t3uJPokHfUHuFHD3gL3YUDm6aizWgAGpmzcYuPGSjwj7xPDsY4NnGLtCia1A5Hf",
  "key34": "54pqdTqguqkDmXevQdLGGdMgJoL4hyA54jW9NZ5U5m3H18ZJ6LAuJT8uvCo4ZwggvLwp6Pt6esvYMpdCAXv6v3gm",
  "key35": "Ba3tpbbSQV4dn7MMaWdLoRofum7Wy4EYqKFaVKqxuTM8nQZ9cMBcX89sgd1Q13sHW2nE8PTfG3omegPZdKeKA65"
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
