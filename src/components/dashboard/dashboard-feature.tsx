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
    "5Fp4gb5NhW1nYmVpQz5eXRZXpaaDMTsKh2XNuVkZSpmgdx6Ebae6KL9yUmiJ9RUrG7bSkqSwgK2SoN4RqjWEonfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJSUc2YjypZ1D6mqZi2K6Zvs9mi9qaoMbFjhtJebEkXq8jjf9HS9Xdi75kLuu75xAY5diVDHe12Z7SdfwSNdtMZ",
  "key1": "3SoVv5ntVkSSGBLvWSw9C1VFfYYJ8xk7jeVui1kZcXyLbsSXyRrY5wJk2N8zYaHPT7uv1AZFyr4u63DUibh4okAw",
  "key2": "4Z4uW8skd98G9bF7uM64vcLkFpV1TbTBfHjcukpBjwYKQ4ftk1RmBizkfH6RSTradP8cqxyQVAMD3JzV3RCiEMjo",
  "key3": "5nEFvJjRRiKNkzAGFBHXfAJQukPdbHzKFthtrGXjP9YFKRhgBaKDPbss1vZj4j4sHqncjWTxmMz2Ka4nYCiApEa",
  "key4": "3NeWLoGsDSoZZKy7iNkPDAFdGMEKwSTuLLgycRYtHszfq3MewwpPdwhbmPwMx7YdE9b8qKWtx8YfZLg9WAKVLy5X",
  "key5": "3s9mU5NTUtReaG6qeDQzYyog6WzxzmyGcr9B9YmjDPcRN3Ly2yxXoLA9Q2sNVAhHyf6cZmXrBx9z21mDGXWZBcz8",
  "key6": "2P75KQBaXzwkiRDwoiqQSMfX2ePkwPZYesFvjuNkmnjfBJAcSHnXU22AznfYZWgwUj5GEWpkQytESsKNo2dgN668",
  "key7": "2GcYTMaDKwB48ZkzrJsfG5Yu6dFMxHPUShxTFoyF2KBQ695q9ym4ygkmAbWRnZhiVZeS4sTSm8YyKbNgFbvUQ62T",
  "key8": "3ZXkLcVxRKTvEB4eaPTxg4PWKQA5tfxBoJSExdskdLj4qoLGHkLEroe9NHQfJiZATPyF8jS966ChyvVFef1c2kG5",
  "key9": "5n1wJaZVTTHsPh4JjVPoHZDcMDxNWquHicfgE3a4PWXrBbYVuxZURzdj7wooSX2UAkPQMASMv3cBmK1otSM4uR4A",
  "key10": "5DWohdTLYzdvhnY26TjsGf8AJPUrZGd58nZgRqpb7RUTCMNWHm9UrXS2XEWWaMXYAo8MTBjQzR8m3QFehxSf48Jw",
  "key11": "grwh8x7qtkqsMvGLG5qZzr4m85NWKxD8EsmZtVtvzY2ATvETxoZr7npYxwgj6B4DdS1snDUa6vypPKaQ6xA68Ae",
  "key12": "29JzFVj9ZdCR7STtdC48r6nnmKK4fbqgEB6c3rVgrnMKuPW3N6RHzDzdSrAwyvHRf2BCph1HALfE73FfL77Eu5LX",
  "key13": "3XvKLmNXmUGeZo66gZjBuCVoSpwGnNWvCqYZf2R4V7AkFJHtSot2ydpJDNCSVeW69g6KUo4d6RhLVddozNDZeFtS",
  "key14": "np6L5Y2VZ51m7iJDQnRkLGWy57h4VLJ4yhdqtf7z9eUWktTXRx8zivoAc1myiq2GZkvxcoFwKfoqrX9ttHBYDU3",
  "key15": "43UY4d29seGbuWgwT9Czuz41kq7v6mgYVqfFWxC7jKQ5vXoyooNh2YivRxmBuPbHqhEC6iVMcKXYij8V4NNu6xta",
  "key16": "5BGzYHHqtDjrWFuR2ZtygRUGz9nuNgEwjYWQXMGh6KioJEm1rEeUocenLkA3zAYururncFiKWCqKqUXed6svCeqi",
  "key17": "2YRXgsRba9QUFWtmGkJGwygojNsuRW1UX2zDzCBeewJhcR3vkp3LMtRxPv4uByeLA2vj8WTE9UnxCCwiSYexwNr3",
  "key18": "3qfjQ3r1BRKy77tQMweCRTEVWcWB6QWyBP4gATL9eNNNabHs5D33NRcaJXVPCED9XfaytFTgsNAko2sMJg4DkGCe",
  "key19": "6a7DdBdcEgCxgx4Q3a8FgBEUfBmLQKWtsmpdQzSF5AVG6zChuhqjRmaienAU299HfEUEmJu9kKZFAerUceZ1vPU",
  "key20": "bWFdxfkfF5iAaK9pBVVeD3sRwCaWjLnbSunB9iXMaaWryZzBWt4De7hhobvws2HtEm8x4NhqZ9pd2LgpkKAodvx",
  "key21": "shdubUnqk1c3BxTM4tMTkeGSQsmB2MDMMyysS7ktfEvZjg8MZ359ZWTMPG3edMTEVVtJ3oa7Y9jVoTVq1tbcxCq",
  "key22": "315xmiMbgDbe4rCgVu7fmdVebTvrPR9xRAihKk8347Ffjh26BT91VkXBGpscBzgwGRDMUMsdN47MDTFwosUGW9GQ",
  "key23": "QzLaQNxhRKiBhZ1GmXigcEMyDQn9TXxf3p8DTNt2Bo3vJxk9Za6NFNs3jg2bAaMuFoVdjaSULPVWTJUe6MV7MXW",
  "key24": "4ZhJEf3gfmLFAQWx7Z9B9Ty91FuvviUKoHJwwAsZpohMJy1zdKXReHwLHrgt9uTHz3WTF4cQKtx6gLkFUfBQoxF1",
  "key25": "2uVpbEuFfydRMmzdGAv95K2hcdyBKRKmPuaoATqtysxxRR2N4diHdN8HbTBemmVhAi9R47QzZsuGUP9Vq3KxqdQH",
  "key26": "3ZdU4Uwt5eyBbyMgES3ms1NmwuyXEzWoyHu8W1tfDqjqje7qmaBUoykLr4dvN76KgbpbwJrnEL4jTetB9MZBhyuc",
  "key27": "35VLFLAShxRKntXFd36rsEMRhNJsBdesgq6X2Zs7J5F4SVhxN97UA4KR51UnwiGa5QPcpm4LjkCrhnLu15xgUcih",
  "key28": "4GgE1MswNo4eaBbWpsXDXF6hsrErH5vuGCJQ9849fCLcvJ6cVxkFPPGrQLU3paMsJJETHXStAeasxxNk4SxH4W8C",
  "key29": "5byGoakcBqbN72NqwcsGCi5AnGk7keYf1WAweFFPNgnSdpo7BaG9MxAGgFJ14fs3iH9iWinz88Np4ckbFsvvAj98",
  "key30": "2v3konLMwihE78Das9Lmj2krGJGLKpwVuVEFE2kzNhxjpxf1eNMHwwiPTx4MWDFMMkA9He1GxQ1ZpbMc44agacvz",
  "key31": "4PiaYgZYP3CERziyUvnF117aVC4XAurN3pLQPvcF7zF9wy14UspE9JQnmAuYVJGUv9agLF1FPPM92DobkBQ7Vmvx",
  "key32": "8ZyB6En1V7eZL8a4g26nuM6dbZrmNk3UnqY7NDJ5eawhEbkj6XuQniZroHNAbAz8cekPkGhXtej62ffP1mh7vuB",
  "key33": "2BdhzENVP6P5CmCkGN3G5g4znamPAbYrfCv1DxQy9kPHdRBqTx84CbraVPGiiq8Fx2hda4863th8zeDBFedHUzfe",
  "key34": "5X2ZWXUQt5PNxwdejKf6N3nDFN6qZ3v3v9dhNnvLnSKbmezQwEURips4LtL7hpkMaSGFMRUYxozcqUhDLd3QmKKH",
  "key35": "4jupADRUtzf8aXxU6aXJPRGy1C8XTfLrW5tJNKsYYhRkMcrJJXANMZXC6k9F97929tsy3gTX6hfthT4yrmse5hoY",
  "key36": "5nSSEbZU4D6TfTqRt5xxgrDKvJMNCQ477QYEhDpTMnNMnfbLuYfiona2HtHx4xoP4VdjPA2Pf2CqrnHsj3dQFQ9c",
  "key37": "4y98sYHjrF4CAqP1haEtvFZoveRjDBQB1ke9SqQwVV4kgbp7keqHikfu47msxcb2iXobWGkXGQXqRLN39kn8KD4U",
  "key38": "EZnDusPp45YX2sVvKV9wARPk5Ep5bXxwHgSyuQP55skhA78u239nJgssVMFFguWDkEGWwmK4He87KKcFmMvL8Va"
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
