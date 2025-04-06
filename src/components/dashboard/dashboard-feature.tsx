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
    "2YgtHGBSTa7wXHFHBCLnmXAzn7eZUdLov9SvMBxjLtgKZqQPhpuQY4SuRV8Dmpesh3YiQkRYyPph2L61CrLK25Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZyUyxnTYb9ayXfqXiBmvFd4XUYrVUcmcY6vQHLUCzm8p5NHNXhtU9gHSdUNvn8JXoeipRFhnZwqvu7Varkittt",
  "key1": "4xLPqqFUh3Ts8jWXzHbpopwRtvchUjPnizN7ib36qhwyckH69EypoGL1qMzCWgTmyxMr98Jat564K4YcYRLhHbAU",
  "key2": "bYDNLRecCwxcgppeE6Z9HaVbCYvpWUg3kwrh9CXZccfkoVSFqxyVXzUUQKr82aVh5Fv2wLQjPSkSzZ6GMU8rqxu",
  "key3": "2i1CDY7GAHeM73JdYQw5HzfhoRjaNDDxMFW4QxRBCRSwzMjsW4L7EqJPFCUbwgRNwioFaJT1VYgJ8oE2Ud7bYwfA",
  "key4": "2psYwiNGZRKV8B6UWqfXnJY6eAd5Am5hkKz1rrq39SNMhd4pAtKV5toPAQkd7pQPQk2z1kTPfoiqVCEs1r9WXRx3",
  "key5": "watPYGQkdz3owP4i6JFQpsniCvMYmGKET8XcNv5qGJh2p4abL188YxTfkvFSbSYz6UPP8JqXcpUXRhNiGdyVnhB",
  "key6": "4mVPuNZjZ8VRAn43T9Hj3jjCxsbwjeGk3AuE5THuzBvkCSm68mUsij1XT3SWtsUUVjinEkvXFyXU5PMC1F4qr3h",
  "key7": "36DtEwffm48DYEVsJZc1ufK8CrQWoU7YgMnJrkcs1v942Lw19bNcoxdG72h1TWGrKG1iPkmzbUpqSruxNwAnJBbR",
  "key8": "1PET8zhemm7pKoCfBgMsmcCfo36FAfGgvA7aZjwYUwd6akNXQ7jxkVfPet6N8ujDr9KcQmddAHR4xH9r83fXQuE",
  "key9": "5vfNk58nqmKgebytsk5647yQaWf2pjZTAyBc8ojtm5fzHTkeBtkGs3ghCpUCx6yoK6gjEvVC87ZgidgMmiW4vt2D",
  "key10": "19rB4nFdE2Nod9oHiicZhb2Jg3gpiEJ1yrN47m5eDZRFhbkaztZCT82jrCcVYEEroB6sFFWdgnvVULFJMETmxvJ",
  "key11": "4bUkxm9eNRC95M4VCXbqGG8guDDDmy6pNBXWZ6PY3Fu2fvSHZyGUkkhYM8ofiy6n1ooXaQNSDhcKim9TUVrCpSiD",
  "key12": "ed2Rpo5NB9CaWTYDJqcLh1GfxzfuQZUbWULXmaGWNpC1eESjmdZpvM6KugGAHdoPpaNmLHC3oKQgXvANBhA4Hq1",
  "key13": "2h6ndvqiLsZJApnpGm9Ay78aRz92PobyDbbTAXXQAXwTsaGyF15S55sepCNRoPRuosGVNGpu6hRjQpinjC1z8twF",
  "key14": "2tZA4fZVPcw2RmMmdMLLKkpntZLWtAGsXFnVrf2CVJc7WtDHnUBBQ4Dkeun32hQjuHY7eKvs2x88pygW9omnZ2Du",
  "key15": "sXvfyWH1AD7YHewL3NZUeDKvMzNuBsvLJGjZ67gAe3rJtVDdLEVbQEExRQwHwCM4iNDgakTWBeM4gpKdHMeB6tv",
  "key16": "4zwQ7sKQQX5ULCN4QjmDesZKgJRcVxsc3kgCvnZLNj6a58ft18KejTqdbNyZ15uNwgLdC7B4iZGfb4aYd7SkVEoN",
  "key17": "fu3fsm1fo2xzEr2mgpfRfGbSsn7LQ7bCtfpFq9wpqMbGee2Y6YUPYTNczSFBX6WANLhiDUyh5dUSM7Qg24SPmzX",
  "key18": "4GfAGf82foBkouZi4WaGhvXEeihbErvm7R6YZUV7SeYrLzdfjAaonkyZfeFUpV2RycG3Y1zRTQe2TepRrfKRjwws",
  "key19": "4xLEfU9c5ZuFbgicc3Vump1W1pXBpjb9NmUY6wzC4ogJc7atXkyN9xTon6ctkAzBHbRg3zsM9mEncgXCxwhNbb7V",
  "key20": "3DnsUa11TRosgEAS75a11sZDnmxyBGxrDtNFXbpsTjfWprZZEbJ9Gtnk5b6nH9fVm6gbbbbUicm5jdQz9MbrRDxS",
  "key21": "3Tgyn28hVsPArdcBx7xUyupKiLi6xzMME4UZ2VpBAh3x9wHsvGaW8zeyRJxLAyfWFrbLX2D67Be2oFihAcQcFdU4",
  "key22": "4eD5BvPN33WiZhxSzWErsuUe2J8rHjrjysUdbgAHqb1C6tPDu9ccLvsdsHyqsY6gYgREPuJ97mD37Qof3XHEnynG",
  "key23": "3FiJSzN9moqAugKYwWV5BD1XYYbd7wSz3CSkZy3QoH2koTjpam4J3n3sPsxRjxdHoAxH1NrYoXU2invZLqVz5Pkj",
  "key24": "4GDAyLob2ExvcMhCwmBHS9C5SvAsgmWFFW3tPbFm8iE1yDawdBJgps9uoUyuVB3or6mR69RhX6rY8PKtmnWwR8aj",
  "key25": "4vwytLrj7ZJhrtvzZgyPJJMsddfeZivFhHB7XuzrQR81zyMdNjSX61e9bDNEWnEtjRSL4GgFX4sZkRfFrZ8mcovy",
  "key26": "5RyeM9P89MgR7Rpft1YCyLzz7x3LxozxV6e4tLPpwMWVjkfsxLnwJuqc4jPFHq7DgmbU4UbeRcqKkdh3ah3ihrJo"
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
