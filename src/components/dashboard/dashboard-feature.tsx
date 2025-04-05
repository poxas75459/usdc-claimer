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
    "LqZhCZZ4AkzszEA465mack26TCmT9hnGGDGSGFbJbYsvmKaZzNyJwvRsFz1xyVFDhvDjB9146muTWzzwcvzvfgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pd6EgGoeUqt7x6q6H4zPcPu5D2KH2zGmnDe54RHGWoYxqSLhL5E6BcF1ofDiCvYm4aiJrcKCN6ZzNdy94b1fs9m",
  "key1": "383inPJoxa6juKTDyrbFPDJcrLnn473XEYwpC2yNW1dAm7KoTFBcGH3PgN7aCktoPpWvc8TZrfZ5EHcChjcJxP9",
  "key2": "3EhbcPAy9yddar9qARF858812CzUCAyEKLHWA7oYfeAm4SnftgNydDUH2qAZqiKQvaJwWEHLbxZ9fmpEJzKsi79h",
  "key3": "3wuCd2vJzwBf99wrUTFmtVqU9dxiJv7fqMAEGd3X54zP2uUYNWMHC8gRncPBkotmQxJuCQFdVRGD3EZ2KV9HNA2n",
  "key4": "3zgcukWVMfdxmTPfNpVbPMB2Bv175j9mngpwdov4NoCrAmiQc6thN5HfSh7eoyvuoJ3Zb7CewkxBd8B5ENX9xrQ5",
  "key5": "5sQyJM5BbkAoT9jNctF8QtJLurNiJ67XgTLFyiJt9A9R5FVnnmXs2EhZYB2Hd2VQzPCnhhsoXbxx4ivd2hzkNv7r",
  "key6": "5sjrXGhCUqVYNyZt8KwQ9wA2jksLLWvDb84pWWwMyM5a5rEQVk5ZNtFFzftm2y8T12UPHMM8PPVyDkHepWpnE42t",
  "key7": "3D4tdZcNM3GKo4t8UXebhHumC76qAs7RFdcrfqoktMkgPoE2ngzjMc4X4vxLjBNsuLBcXQNVU75PZdudUyqCybJ3",
  "key8": "3rSmQBczujRDP9t5WdQm13wRGmsNyKTcSumXs1ajVHWTsiNVu34aeAYuZBFHj1jQJjuYEjvEczw1r7TJSQQtK4L8",
  "key9": "2xovrnRmJqmtz7MzijpJL1DGrKo7bipQ4tUxGKizaVwTmnbeERtqoEjvrVmspQpWzngYSujgijYJ2jptsQXR54Nt",
  "key10": "2qcDxuNUwrFQPKhbbx4cB5iJ6EShPQD7g9HLp1mTDQsk1fP5qxT2mbb5HAyDw3yDTPq7KTPb8JEfZms4kdG6pmew",
  "key11": "3h73kCP6n9MMXETpWpZN52zWXfCFUW55nbkdpmjW8s4f4ToKFTR74jogmpRrqm5aYmeFZrtfef7NoW7hecNDZ9ab",
  "key12": "5SLDWXEJXEeJUS7BeUfaynMqSLB6ohcZJMAKRaY4bnfyEi2qttBXunt5MC1SzLGBpPXNCXoHgBv7g9JMvF71WvvQ",
  "key13": "5ASdGtaziWihokSssMHXwVrNf65TovtknCScNuxzyvQ7esHcy66NMsZViyzz8ALyvahaHsCQLRrVVHVNBZynvWTW",
  "key14": "59jV2VcmSvLDkXavn2vPSk4Yyp3ASpwUnbuoFTmUES6bJ9X1Weee6F6MoRcg1nGdKArJFGzid4F8Sqjg3wgteJWM",
  "key15": "5rGxML63vtNH94f2VcNekPoqXBHAh92d443FPLim2xHsPvvVZH1uW2p4FL9cb4M7PRRBzTEUjfePgq2wMszsmTVD",
  "key16": "2sAx8YmcTNFZ4u19GUSGvfpGzQzn6D5gxhki15qN7zHLuCvELW4M7E8fF1Gtvi2CLSDTJL8JL8ASGc8hZG6EWXZW",
  "key17": "b6aBJwD2AYAM8uTvDsgAebLTQubJuHUUW8GazyT9RR7kghcCftnNtYNz2gxy7muUe6njeS7Kio2uhYjbCpAFJ7u",
  "key18": "4YqXaE48Ht2YQeBXGvabVrWgRs9fyqHD3pKVVTtHDUB18mv94je8SzXS3KF3P63KaVx9BPMEoWXRk7CmnHZ7ct8p",
  "key19": "WMHW8ZkMVpxNkh4MiJ3zeUorDTzebTMqAuBq1pseyvv3BSJDSrhzfLsWDUY3c6LvbKgoBSCcGbCpmGkmo9GkF51",
  "key20": "4mEdLUhUux4tXx7WMVtenxz7BQZHNvGYqCSaJnKW8DLP8pXjegDATWmFdJu1LzXyEAnGaymzQzT7Y3zUsm1PdNMA",
  "key21": "52HWF8w9efXHhjXQj5CvwfunRRS6mxB6EVuWwVDyL3F7T6MZSP6P2RZgKzX2mwaLuS3zg5vr7JjGn96iK9BiRuBY",
  "key22": "3gF9DiXaxmrAfosSc9tohDi8CS25ckg74eCFBTSiVmacdht4C3NbZxNwTMnXTSt6CoZbTU6xDjsaZmefjfpqXYZv",
  "key23": "2abX4bo4bBEaTqYX1stMrBX4zhsYuCmgtAayu9SszKJXW53Cukw958H85c1MmgwPBWFxba1HKHZ6yWph8S23i3RQ",
  "key24": "3TyYTatheUXnnj949gzG7zZyQBMrK4eiryFSWJTrFsnZguD3iNuQgkzyTx8y8EAgHaZ9VRgVc3SjU4SN5gwNzNs9",
  "key25": "56PRMUd7rrdeKRdoRjWvdtfoGQnKaC7MW61BbEDt891a8bJrJU91eqqfRayLU5aYcoezXhG9gn2W2MeeY4PvhztD",
  "key26": "4ifhDQr63pjSiyG4sg6m6eGd8wH5VHGaeaeYnzx8tpvzEUnRptByEYLpdtvuFFa5qFieaiLSFyc24G4K2HR71STy"
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
