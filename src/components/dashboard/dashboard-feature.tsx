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
    "2eJEnyGMLbXQw9dgPauS3LuTzyDhAnWuqiJG9ztF2AH2DFcK87B6YmfxKZDDsSA576PfEZaJwXKn8zQKUsp11G4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FECdNKJ6mmfBJeLxwipF5bjtG229jybNNJAvvn4hd5gVgFeeSwprg7C6uCFud7xYQCqRXGCmckUWajZ6BSZqhZE",
  "key1": "4bikuSR8czQwfXNsdRwAa9wFWxrKnbv7UVYSgyDhWQaZqDBf6x2GRWq3FLSuY4WrMu4ui86bh3eSfNvc93xwTEC9",
  "key2": "Kpz3CSuFby3JqnK2pKHyjCf59v4wyBDYUZzLiXsWnFzJx3sRqtq3GoFyJB7VqhaD84p7yxivxSHoucSSzjYtHkG",
  "key3": "63YLBrxmS3gjGh4VpX4agbMMMoEfXVrbXdZaSnJncWCbdXHuJQdMwVs7RzixMqsAwfvvZgrz12sWxfhS8v3jYZAm",
  "key4": "CbBzCCMpftGEHj4iA1WaZPCbM8sXDfXnYsHeTkaT2nQkW8uF9ZfqFQCNqnTMaufkuBNBH56Cw1qCaymG6USRTjB",
  "key5": "3joPYTrb7iTx5unM4XccSzMkKCP7mLMUumL1A3Q1oFSNYf9e295TJ6tMea4REbRQpZ3sNzA7Gsk6k3aZZp5NQ5Ak",
  "key6": "Pb32ji2jbMb7gW8ePJQNgkXNnqToJennyajdc6yMEcozRtWGCCFu8j5JVT8744H2ygg3uas6CsyE4UeVSxmTJdA",
  "key7": "bJZstGh9uR8bbingyxjEEDR7NonMApFaphbDdW24h9cZUbsxB2aw9gtG8DGpr7QcH4sQfBm4gaPgEY3xLzvmtL4",
  "key8": "3NDfMbXL5PpeUAW7Kgx5hC5DihexYMLZei7nZ8zBDx6SnLWTApbxGnD4j1V7QBQ1iYupHG513tP7ky8jUo84kAHm",
  "key9": "4nXseE1KhpHmmTqiebvjMAKhosoxEJyvdJuPTf8c8653LgR4stfJjAcgMbhvc1HVNcoyF3qMxRzkafGWxFLmJRuA",
  "key10": "5PunkFoB2QwcgHUFefGuMSHap9XMHCWgfddCKdjwGgHPt3cUbRxEwXbSUqoigJiDtsnefBwvCazcSmDF3raRcg4D",
  "key11": "4iMT1AaqCeFhJ1QYe3H5VefkeuiGJvZq1WZm9RVjsQqHJBH6JhRJyzLEW1TCb4qLYAR6STcxbExT62JDKaQE6gQR",
  "key12": "5MW6frxAEXrAmUrtQPMQzs3AsEGFh5QCFeAYM5vCx6M8AQ6t3tEcQE7dQWNrCXX8fxGA7wWAvkibThco3EgUgRsu",
  "key13": "4ztbXNUvtvc3EwukzVjgYuWwc6PoQNnoKcDzKhfD9z1fnKXfcV7E7Q6Qc1HEDhykxBE8jXM5zvK14TEimWuP5eSx",
  "key14": "R7Pai87ms2vrLKdcsBBJkXchttnV1MgPoPZUZFBexyhjhskn1XbRPWqs1gkZSgLzJY6rY6WMRBRTKZ7aEZr7HQ1",
  "key15": "uqS194szZJ7rnKfp2Sa1aUYYqcmoHXHLNn6i3MmAVG9qa1qfPW6aHw4LzKkWqW4LtMEN8JQ3UGKQfnLMCtaNVqZ",
  "key16": "W95CrsPEDbp8bDSUJic6sqRNAVBfgxjdZhbf3C4rABSH3HWM1UrvzMo3p5mjApJoukSzQ1Acz2D94JEjEkKJUMg",
  "key17": "2wnehAMcKjPQLPZKTZUB8RgxshFkW2aLGtf3a3ePXcq7bNnUix7k8GsPKcT58bTEGPQRyV88iLCW6DPKbA9eeSxp",
  "key18": "5txvJjixQW3MTBXigQCYGa7VBXNB7er9Kf3aTxMZBNVvge4ZzBr1iL3BazGCH4bJgdD2iWQjqxQ8LN3u9BJ2iyLR",
  "key19": "3v8syPgkavTFbCMmH7kv9ZKby5erxGRMSH2fBALUgWPGdGccYxYPrEFtkyfMMepwPgetztoH2dXTKuk8VcEW5Hh6",
  "key20": "32SYxC72Cx4gw2E2xzs2NZdWtHhLoDbE1c7NHu4isHA5bPyMkk2SZm7v6KQZmydQ7tWPpSFKLYGiCXttZJCymz43",
  "key21": "2sAMtUmcPssxrxQjBtAkNDG77YcR4QfZXAaQ3nZuZbBfLXggpd1Fz2exncLU7sMzff33PYi2GFmbBvu86zF17MGK",
  "key22": "2k6sBwoSUvLCsF7J7TPQz76FgpYiK2jprmpDv9tSUyeiN9LJUYEpWWBmzCdE28WKK9FYfxcSUrKXXGXMU1Hvdzsw",
  "key23": "2EWPHFKZ8AnNboWccbbciV19wThCuTgNuxxn8415AY7uuz84wgBWH9aF2KpKrXmRQ3za7c7VkCBKsSQTBULkQJBd",
  "key24": "3bL99eRc5ikkoqML4UBipa6gcnMzq1v2SV9tAE9ABbhY4Y7sdouDjBYuoqCzAinUnBGdSMV6FL3PVqXPRzZdcaTx",
  "key25": "48CAAuK24kWi9Fm9kDkj8xA7Uoh7oYdPeHgwkX3uQqC4ie3dWzBwBWzXddnWndQtumZWptGhZaqdJpbJLqfjJWP1",
  "key26": "3MGcuBs5dN68Lr6uHXwPLhdxEk3BRaChiSy22nARJmFWJ16fLQne4tWwXYFj7UPswj7F3f7zGu86uDVXDtrJJGHs",
  "key27": "3HvwxUmUbFRWchaCecdrLDDeW2iNSpmVRUxrQjCfD7CydvHEYpAdzcj82RVCmMj1zxmYuGw147KK7Ccj6WJMMhfu",
  "key28": "3ycLi1naQd2QVfMNcrobu6W3zXc4ircjzhzee1yZ1Pz9VBCKQWp8h2HaSj9Skv4ouHk8LUcYA1Q9N8NRKQFnfyxa",
  "key29": "W7JHDh76T7emi9fbjsYVQVa3D4aA8uCNTwnzjPXLbjAHvWbb1jrpkfXTqdBTMGwZ1WZKd98tkDqP8x8F2iUvitk",
  "key30": "qMne9d29G1yv1wphuC8NdKATH7TkmoexLZrEMKmToWbXjB1djCtJaaK9jxJwUGcyaJHjhVEVurkqNdP6amJtyc2",
  "key31": "122Q2JzTpjNEkiYCxoV8FLUBkH6J63eZxLUmApFWt28DxxxDar5mz6WLA4f1f8zPY9e7LHhukgZCYM7EYQgDxS8T",
  "key32": "2CycyWhs2zRTRbJe7JFcauQcZ4JcxR9J6qjZFHWmzzVXK1ZamkySrMSTgrxEcZ3xFgMWbMrNKv288YN7r8gpcJ9J",
  "key33": "RkcLDXbocBCnY8rqomLgLtRYQwQWDh3jPC3Tw1Aat5W9gW252o3iAmprWgT3gugTmDKkgVRGZtXkbQx7ppdHRu4",
  "key34": "iqmYSMDKxFDfDAMAPuSBwNbzpEJULJjCNMudZzS8U7w73uCQA2TLaFU4AmxWRCcbGiDMv4y5sf2KtgfJ7QhkNJq",
  "key35": "2Cfu4MLtAFoGGF1v3Fu8wKzth21r1RoMuumvdqLUupAYS3B1odQBxc1UCGQjqnk4xifGfWau8qrHRD1dcp89QxJZ",
  "key36": "51BSkhoCeYkknheK7CLuANQJTAA6qU6zUDrNZLCgFnn9pQr1gJ1bgNo2QTuZzCCMirnpk1SpYscucUvsoxwsVfYX",
  "key37": "azpAnXbuW4RwxmQT4Ptxh2qpmH6ku6cXNVuEBZyF3zfJgtESUNW8fRwdJtF9mbN94ExH7ZZ7X8CiWpmpZuhjMYj",
  "key38": "5XaF9S4fKRH2xGcWKTU3sSoE3UC7SttRa2fGpW1PZNzSvXvxX3ayVYDkLUri3o2eB1pbeF42a4TnaVsxV1JaBCVr",
  "key39": "4uehLJCKdJWhUwZA7hvChNJPaLZ1A91M8Xtya4mDHvKMjB997drcW3HvvDk3S79eaT6RDfi1U1qoJ9Ch83ZZnDsG",
  "key40": "4sDWussbavnwdmiNyF1Nr4zrpzcBtJW9w7TcEsPj5sZd4HbhbDoKW2VheYvHGWd2zKhgB2ZwR81oGx3eV7UJ8jbT",
  "key41": "5xpDDqEwRWmtQf8n6E2yBRN5oC2XzaegxQm8tUwsggVKnt2xd3R9KcXT52syr36YErGMrFr8B6nCbiPrdN5j7wLK",
  "key42": "zJ8Ea3VowQ7KUMnEsB3ifNf8G1XBto2ezsRtNvbd2usmDbvZy3bRuGG3KyeghhtX1YRsnTQND5hgKZJhDdHf4Sv",
  "key43": "3U7VyupRjrEvrEDjRwDbsbMYA1UALyyKWvvsbbxdFymqR7Qi3W1FfsvmErjcLZUKCuQkoMBdoefCMc77KdTbHQXg",
  "key44": "cKhKKi3ZMWqeMzssDygbPCeb9PQswnMQh5Nv23w7xfxZ3uUSJCU9AfNuTRVWeJCQJgvrC4CaNAipYGGogkXhvHd",
  "key45": "4vHQ6aa7fiVLtMrQEgMkHdQGL2AnjaT6zhjAcFJx2Rdk8mDRRccxrF5y99KbiiSoRT1LqDiLDNYPiz73ch6yzio8"
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
