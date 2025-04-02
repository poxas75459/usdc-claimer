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
    "3r7ZCvpEMxoAcTPuQ9A6UkNWGPH2JCNyTVFGy6xcH4qyuDbdMsKv4VuFa5v9xQj3B32sPevEWSPVpDz5kkpH7hiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTdzRi47DCHUsBPfUYEC7srVo6eiT5PoQANJYELQKvRQgPxa8YpkBHEyhxkMSRKyU67AYXrCv6MCGQDDFW1UFGH",
  "key1": "4FWPbdybuT66mGU9g8GsiEMjUBdkPzi5j5NgL46dkhhUe42Pz5M8gs39JmmS9tjmUNvD3T7Lt1xS2SfVWAei2v1N",
  "key2": "mAPh5zGyhMqfdJ3vUffTjL1BzrLoF7SZxVgr8nacsALhpEJUGdFrMdJ2TJXYvrMrpVNvgtg9TsZ36W547Kpz3K6",
  "key3": "3CQk6UpRGzk2GUU5Y7oUFy88vUhwxqmqyjUvwaiy7sJuh4Aga64RX3tvUyQJ88Y4FHFDCFj7EhR3JTaTzHKgosv3",
  "key4": "2Md8P4omBoKPx1rfDUSNXTNHkUbHahdjHqd3xSSfk6PMPqRbEvDE9quryzYYn55tBBhSVpxT6gc7zEvtG5i3so89",
  "key5": "5KCShHXMfU8ZRNTcca4XybU4WdxPz3KJfutQDfsiCc2xJ1ukDHJ9Hovo517cuZx3L2jtixiMSDe17DNUSZAMuXW7",
  "key6": "4x1eLQKxsXMUvt7aqRqZfU6uuWF8hXyVm6gLLMwYtaBym8xHueTmkQz7GTeCWm637Xd4TKGZg4affb3ZP8U3yHbK",
  "key7": "jNjhBd23AxX67xXrYJFnNS3PhY5RtwFVgM9s5rVbSHwwc79pirSby3S1HgyxqfmagMitgmA9LruN35PUjAFkeWr",
  "key8": "2RDfZR8bx9KbPnmzKdY5xR6Ds1go6i9RsXZKcfT3hocGuoGvDk2zyK98tuUg14ExWob72Eqgd6EpF8kPct1rhJS6",
  "key9": "2JpbjYZ32ocsAnVLbQHtBKGXjFuxgdeKWxMVRdchVMnq7HjXYwbW4VXqZ8fjEbuiQdhdAVng8gypd2T6oyP3s5PW",
  "key10": "4CdcBprk2jfjbJ19nris5a8xJHUMzHPB8nwwYumBEt28pYqYFh6L7NUJ13GLhwL5adCrJUKpu3r9TqmJ9naMXoRy",
  "key11": "3aio6uvPm7pk3YUTJibedCjc95uMvDimJJxXY6KTYUyZkJAWMa8nZYfYmqqA82RV9aJ2EKrpJ5Lb2q2AgomqHSiL",
  "key12": "51eC3NdtCPPxwhVG2to7iZLE6H36kwC1HCSpiagLaa5ngSR81XwDAQeGXRS2sKbQy5o8eeMRihSx7au2oPo6pVDT",
  "key13": "3koeRhDFpmYJ5dVPJNmV6cSzNVn7Z4iupryq58b1Qn4P3tWVyU9fwsMxfYSXuVJjAc5z1nHQinfpG5WiQ1UE73hn",
  "key14": "3Q6ofUwbD5reqhHcVtTC14vT5Gsg19erehmM31EEbiqokPeaffmiUha8b1vXuJ58sKgJHBsk4roSxgHriiBg9SYC",
  "key15": "5DV4JygjDNXzzxawAuStt8me5rCyuggxU552eWFfahvVkuEyGZum7yywkxzffnvxo8rCCUhpLap7eMrKYfjW2MTe",
  "key16": "5jNt1BxJ6bpKtHDHAMztVdLpXnszcDwcy7rZPF8aeE8J1CfbmKJhysV8ZySUQZf1HGKW7vc3yx2SpR6QThRY54y4",
  "key17": "bpBRYTvQEFXAxfNBVB9g4Z2uvzuYZqSiQagkNsbD6NTHRjgKSgBQH32j5ZzTcb7YJ6vFeLKHb4Lam4Q8mVSbF6z",
  "key18": "5DF5YGFEkMp7YMm7tjRS4ixooKSs95eoVmaCa3EdEMDd5gPnn1ErLy4TfcMzS24NHLn7WsQV8HYJKC59bD4vPnPq",
  "key19": "4P3fpNSS4Pr5P6wXD5SUWqxrLHwGGyG4rZ1HbFsyMg6fqSNe8t4dnjBjfbDtsLirKvWMaWxdK8BWWn3nxpoCLs1R",
  "key20": "2rpjmHJtoQ4zKKRw6ikXUNbkLX8nfzCo6y5fiBbgRN9e9sinRLzsRq3c76LcqfgNu6VjFeV8W85KCyqbfNdA2vDV",
  "key21": "67c19rPwkvQNacZ3mfTSiNhwZDZzMyDY7M1TGQ8yS4HmcKPBgfzwCokq2hmjHUhBM8fQUUu3N9uJbh6QiwGiM3yD",
  "key22": "BxbhzW7EaQFW9q1LgU4UFvZcZb2QskbmkpuLVqDsQP5ZwoYfyaYHcYF54d2bovXiEBDuprSdUvE4jdw2dezLzzB",
  "key23": "5QUK4NgDcEsLta2A66FGrqyKRFkdkQBbzbEQnc4a7sesTBoWNzJaktTk9L6TgHKaLvC7yDxqqQiiPHtfrc2rGx1i",
  "key24": "49qGhfnnaAgyFZXRU185P2cAEw1wCgAnyqZvuxYrkfWf1AVUiCbA6jE3z2zaidiJfLTRLF34MZLsBnFvcZ9UVCh7",
  "key25": "4udQ53LoEUmQBBXeCC5Yq6n6Pa4BfkwV6J8hKQxgUPRhVyJyDKjSHX7pJN9L9bzyqVW4mEg2fb19NcGXjnBefZeD",
  "key26": "4M7ouUUsVxWGsbqAk53tCXrKU3ReEWibWt6At62HKovNq3Adx3uXqxGWzwSyfsGMwxowgzFX81QHEAv7A1NThfgM",
  "key27": "3PVWSTfQUJLELWip4ndr2wYXiAS6hXNYvSNYtYTp8aJ7ch1JG3hRaCecTEHFw5CBqJEc5gaUr3CYShnxiQa2iHSj",
  "key28": "2ApFmDDLJ55B236hKHJATwwgx2Eog3yMXpYydnzFXAax3ikFoUkUrfyMM562iVq8uziqUYcbq185FF9khLjoVTfy",
  "key29": "okHvFGR5WEy75gJneLtkDjN4mTL3KCy9ubK7fuYnoXzEUCVvXPHszrmB2ctCdWJRa2KxHoY5tPYGZrcUjBYeRZJ",
  "key30": "2TXa6UMkRJ2oW9LwKy8BFBLqomUvXaH4sJ9S4ayL1auucwcB6udbzky8A9T5NHaTR7gLo8eDFNKDiDXBUbXVFtPj",
  "key31": "34Nbw87AdZUa6dzXb5hhjjwa7Ms52V8BAokWscGsqvWiqZDs9LtYN77ik3jKZnWyYLWexRUoHS35J9qaB1qqXsHc",
  "key32": "3uAJvKu5T1Rd2HjmwqYuxYsgeYFUkrsBapViSYpGhYnAFuH5VC7ZRjaHHVLVGfY1wsbbkjV5CfaQK4t8j65RTd4S",
  "key33": "5ud31YY2XKwiRiw11CaVgTUuGK8DJqJdmniRp1vq5xTfcGeZGjBg7hk5mEJgai7K5NaR4E2bJedA4FJMAkDQAEna",
  "key34": "AgKJdvT49TwUbCSAJLuFsKFK2MWCvxbhCo9Bz4KFDFH3WoYyR16yM19CQsQpTx56LCSkmr5WUnmBohS7urK9EcP",
  "key35": "3wUZ7EAurp9mHyjC1taUBQfSsxJwxA9VRgRxhEDEakHQKWg9Mg2tFCtK6ULcKsMJqCQkGwUWWVUuC8KTHgjVkh2K",
  "key36": "vRD5Zv6H6js4d8CD32D1caLHEwEGtv5Z9F7wzvRkZnyRsPA9rG8G2zwPjiGzScAU2eLySrVckARn4czpVZbK9vv"
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
