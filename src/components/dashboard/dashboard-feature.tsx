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
    "35PXSM8euGzxA925ZHC3jp8NWaqR5Hp2pYTwz27Y7P3bCjL6MUUoCXGJnNvMPY9W5DacQodGPPYrkvcwKXRiLFa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1yFqvvLNR7aDgLBdXsUquxF3eT33jfQYnfW8TREt6CUk47YFas6zCqppdov4KCziyXMtr6c4NDP2bY1dQ4tLxr",
  "key1": "5CRj66GLeNY573qFmARLcJPurqgA7r1FrFAJJjhJWE86MWu1V6uQtryWrzhMcr26vQVLmovVsKmJeEFPp6TKveqT",
  "key2": "4Ubv6xUVdvwGRuHDMCnT5vELSf8MPBtmkqee9TFjbS6sSeSAsC6G56U3KGzSBrEXaj3J7DZQgFMUnkUPBMEeotiT",
  "key3": "4eW1ELLLP7csynRs22NcMH61zEcsQGzydhjHBSZrxpxFzNAwfM3ZcQHZWgNPNV16rLkAaVhe7Gtb1oF9xvwWWRSR",
  "key4": "5zViZqXo6Mkz1t7HqkkUsuX4KLMSxGaCFbdq6NEAJ1hmu3YKmyY4nS81RxcYsvsFKES4CFB38JZErsNJQ9vbBuc7",
  "key5": "5GMJUEr6jkCNcewkjsmzJYt3eqm1DJkvAroc7VAsBwqyS2mQajTjamTEpMAJJXU7cJM6QZAH3qiUwZseg7SoTx83",
  "key6": "3jBWd2Q1SvwwA6v6L6qtGVQFgdynfeAA3uckxm1Sz2y7A2iJ1LQPUmpswbUJdkBFKGB1ZpjaqJhtqZSSt52nyA7u",
  "key7": "63NGVotD7wPLetCnPfF7inYEEtPqDpCWTiKmQtzufowCfGnF15fLSUtk2UZT7rpStJQWA2Fpht2aJdMHN3FwZegK",
  "key8": "22i61N2EEzVKBZbfhENDwNFUtYr7EPbKjQKN5nbx9hBE5u6E1T3FHyDJCJyjef3o2YNyNrjHX3GbzcvirH2pX8hW",
  "key9": "2WpkWZTgAT2VzgsUrGCF7GMvWJvE9tgEato9sGchaSyzrJSwUtDc4YUCAjENYMiWeymcjV5wj5u3jPFJmo4yi7oG",
  "key10": "4kWeKKXMdMcsVFzAK6BbE4LsfPGUEVjNcJw5T3KtBj3W1xFXBf6EY4qbjc6bNQb4cfcUhwaB4AqDoB3Mr4HVdq8q",
  "key11": "MgXP75bPiLsfiZycCnkyRu7cT1t1LuX1DwcxLt6VHJ2x3xQawz63HRNE3sWEP6rhyQjKoTqVcVfxMEQWfdCb8N4",
  "key12": "4it9snGSdtony3uqoRBJq3o47bqo63dWvLd3CRwX68ryuxSCwZXX9urQCp3q4DygB5aaV7iHEKMMc9NMFhSQAAG5",
  "key13": "2GjUiaVcRxvNwFFbe1D86HqRU8HqJ8JAiPhNSsdAihG7qgGpm6wTgYEXdpcjFYASWFJia8p7ubRPCt2D9SJTs97K",
  "key14": "4RMphYMuFWzDGZfahH2DiC4Hx2r6QXLXzEaeBq4wsk1ZmkMzWeVA35jJ2NMB2YtGL6sDb8SmDMUcg8MRJaufzjae",
  "key15": "47XVpr74qY7zpZpkbJvavym2diF5xVTEeUMGa5YzQyafaqf9Ct13Xmwxb8emYFSpcatJxTBzNvcWbiH2ZjiDnoFQ",
  "key16": "2aHK2ocFuEBipdJDwQNRRt6YuYiDYZksSpj5pbRsY3uWmYX5qibaX52w2PHxmzWt9nfCWkPjFL6p5vwEVJUytwtp",
  "key17": "5SEjyJ1Vvxv6Fwzg11nQ3rPUQQvmnsBkND44euf1kXFk2wBvo7FT7W5QZYYED8pZcwVWMVPpeMjPNeKUBuunfYAb",
  "key18": "2LYRFoNe6V8WrhcxrRcaKipCZGndFefDctQsCffF2HTpLsHN5mk6158VEfPG4nFx6uzTeDBaGFJnzKtVgM7PDiHB",
  "key19": "4W3bvAEw141aiH57D8q4obRJZy8ch64ChCTiq2m5unSznbVrwSMio9SKTkqbjrD5Sdbi8eU7zT4TUCXqDrpsRE2a",
  "key20": "3RdWLfauKysdR7XY8w2yPhUUtcMWQEb5siLkzLYCR4iQwjZfqF5e8G7EwmDfQxLZGWHtfgmYxHBQLVPRWWhp29ZF",
  "key21": "656XQ8BHYuuQstFcWs7q5AkcvpuYtvtLBSRoB5rswRYqf5VjFZw2dnivxHZLnKHQA2UqzGTnpeiCNgNmLZ8C2xeN",
  "key22": "5NygpyLUKBqWJFLBzDwiaEw1eneBhWVdLdpqDPSJhRVahckeipRs7rGe7aPxprvWSiDCKuN4uePrheomvcCxuBmM",
  "key23": "45VDKTsKwwDfcECi4R8bb3nSSc54mYciaUBRrSy8vpwppiWNr2v4rvXKQEN33xFEX4VeU9A6zFonJT4vEqnzuyxy",
  "key24": "2R5qe1vtTXzZJWhN6FRyVwc1PyHtBfiaUXUzgJ89RCrpHMySLVeZCPh7EHGZ9YgZHV22yPBnWqTFa5nQ2ZunRDEK",
  "key25": "4cKq17LkoivZ59Yb8FdhCkmrGpPHd2WnzUVXKbG6YPqC5SsPuVQdwnEAcBDi7DLBFeTCfeSHMcRTWw8zUsRqyRiT",
  "key26": "CyCKY5uzbJUm4vMtf4sJp9pkULNesSwaSJs3wC7E41LnFjPZdoTezTzt8AAMDRQbYAfTKp7Hi73piSH3pgFSMbw",
  "key27": "3LWPVdYEf83AsyCvwFUZUXFWnGSsf8w3tXPEcLWyTjrxbGvGYXp4nuESjLLxZcgWu5vHN3VN5N69evXeTrDBYnZ6",
  "key28": "5EM7GedTNEorojZsat2NSrJNChMoQNKfnH9TSacibfgQbYuagLEPWY1ho9xmkGhxz7wyxQ1p6MSKau77UBCDhwFU",
  "key29": "3kBs421fLH6GmRDhoutDUEihZzgBQFq3cLw8cYH83ZFbzwQDBoNReeS77Ajr2V22gtNcX2YkCr6M1xsapDRteD5p",
  "key30": "5wMHs5mYhS5SJpSXa5ojWFj21ZBuHRNnxUp7xiVsVi7xtFMi9kENuRTQDQwA7fDD3CXXvuj4w4oP9fLLaafrGLCi",
  "key31": "n6HBz6skVWimff7fo389qvDkDz2ZzSdwsWaxE3yCMkQz4XD6amdCuxweNdhu9rr6bLSEjk6NNHBBJcNKanV7njH",
  "key32": "faXrSEhnDf5bC5PkptkQPPtEqmR7Xdvg5xY6SPP7aSfDLkUZNxdV3bLMiveQwaGPfsenkWXEK8u5reETNXTjed6",
  "key33": "2fPwDRv4AM3TRTsBtQMGbsekZsmNLcYnv5x8Jy7HF4GPJkFinuvyo9vCv67yZ9AGHGuR3TaSjGYgsQQbDUSAvWDV",
  "key34": "3odg3MjcGkHD4QrAmDLpxqQMAuEbMe3o8caQuX1XnM93Mym66E87JWcCubVFF54M5Go5CKTUR2Zv2Zw1mBcpHT5F",
  "key35": "4mytnyx3N6xoNiyvu4oPqwG6cPGnQJ3u6FKArcyGoaeQ9Q8h1gAtj6fxGMMo6h5uWmNH4NncEgcU9XTfvtUp1saQ",
  "key36": "4HhocbYFk9kPg86TuiqhpJiCYJxGhzubEq4fbbcsSq6VhfZpfEApGxu1vQZbq1C52JkaobkGh4Q5bPoR6zmNYsiB",
  "key37": "3bHL8UeG6sWpWnM5M6JBd4ijRvAEHnU6ime4C2PLfeLhHEhF2mxzxXMLJVPuXyf4bR9SnjCKYyK3KoozFKkGLVqd",
  "key38": "3iDhcPCHb9E2J6y98W6qh8ADB5oJpak3hjaJJdxs9HkLAzGnGwpFzFxh2VffrbcEc3Mm6Tx86LxLHAfBPtgh2cTj",
  "key39": "56wTfEn9sVVRh3S5GmVFLXCyGkmnXfFXL4cv8rFwsvjQ1zVhQkkLruCAj7zuCkTvZBt98yCUMEQFk454G51j9RoM",
  "key40": "3dovFnjNgE2CC9zgsbXYFj3i7YmyxknNoQUAshokzeTS8BRkxG8kb8euNRoXunWCXkFoSm8NWDyKkjjRtKVsinjC",
  "key41": "62wPAF6LRvUxtAcHn7kGmuvEavkn6HsUdGZbQG6KWnGsmR83wGvZq7S6ZxnfnLqfRcYoLy94koPYgGCaRmWnTsFL",
  "key42": "5ux37afTh8a2YW7PZ9TAcYJdYuNN8ujrteiKuH2efRfn9UgoCBVJNM55ze6hbsPzLXvaMPxuFSsUxeXuz44VBrwC",
  "key43": "JWQuegKfA12NuhMJHcMYimUSLiW91SMgdpM2W8YxutpijkhgahhY166WrN8FKnJTZC58dFmjQTXfa61czC4u9kR"
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
