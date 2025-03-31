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
    "35gDfxTgt8CwxQJzhduWrDX2kWknVf6ww4eUYWXxT8gbi3SVHNatZ9aBp18ULKhbfwduPzk9Vb2toKPXDhaKDnyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzGXarFbaZaJvikqADsh67E4ukCzAZwoR1YJfBdBf5Wk5vUHTAr94jUq9eVpS1F4f5mi8KzTEzF5G7pWPy5KFnT",
  "key1": "3pxcozG8rgnj5izqzN8h9m8LWQqmk9HiQVzuVba2qVGHekmacTnRnYqmXCcQXT73d8iHDRhvYqEXi22w3ekY32Av",
  "key2": "4N43sUgAikN51zsCfUN5uvoPvW3kHBfjJSM95rrdgmR1TxEHpT5MTw5fCNpBThsna7LzyZJVJApMXqE8ADT3ZPt3",
  "key3": "1LebwsUB8mcbGB6L98LzzDxkVXCCbFqLUtyrFgK9W4GH8jTHT6F8gojXeS8G3wfWDkxcwK29qsffbPE9JCwvei4",
  "key4": "4LwcLiV5BL1x8NHjw9dJU8EQKMpAGsbhFfRMhWVi7tQvxz9UcwZzLsyLFoZzPaTn763UJra21cMSQFRtWNehw2U2",
  "key5": "uNQ5Vgu5W5YwtkaKsGs8m55WEHrqqwkKvQZqJw1Q7eFYQAi48mTUUjSveVyDedknqR6J2dzfFFjuPstZ6d6ZxDm",
  "key6": "5vkMV9fhUGKiv8ZmvwzERyLBvLrsVyjJ8wx3T5tBRTW2TgNC3ad4oyLE6sQSHth1x4US6236ANJG3LDiQiNawHui",
  "key7": "2mmkrzpLEvYMkere8qyPtGbvA7HBFwFjFeqe8UWWA3XEVwxcJHxu58Z32s6KucQRoep76m2pWcRHdtVRfM5aSXC6",
  "key8": "4DqxkTkVeJHmepUdWEDm9RAuDUd5yoZrrcX9N93jBX4Rb2BqJsqKwArjp96V8keXzVLzvQEJtygPpKnenv5fmqPH",
  "key9": "22kHLMSi1V6v6CMT6uYqnyBi1ZFjqG8TRhpcSBBx9AjeGJWcj68nJKbVi1hdrDPXcY1LEpaZUXNHDqBNkbcfho7W",
  "key10": "5jqPgL6G5bf3aEDLwT9EeDy86zdqxTC3KwFQBg9iVHP1HeGJV8CGLFZ6BdRbxeTrqjNfhuHvisov4gi9PT2jAT4H",
  "key11": "4rYmHQ4UXZLEw6YGdfi8MeMD2LVvP71yikh6c4QsdMhCPiBBJmdfy3kt86nRf7VerojPfB3hcF6pdcreufpFRSEh",
  "key12": "x64tBkMam6CMEnhBGKtmvXyhvhmKtbbgLYYXxYMpAKTvHj86TNev83ojC2fdoAeuDmHhsfGbsnBZfPuQxYZmWMt",
  "key13": "24nrqNeC17v94pgbMWEenV5XDct6C1mCvMk5D5RUsZh5fPngfv4UwW9odr8Btc9LneSoB5r4TbDrhASNaEYWuo8k",
  "key14": "4sFXa47dwDXMXFPCZqbCLq4hWTNBJeGN4SUatKEQTEWrknmkeEXU2633qQsrpDgQcWSrHf4jv62dJ7RBYZQLfRbz",
  "key15": "267PdR536ng1bGNGGJvVza85MN8DMk8cq7EkFjEyK3EeND3mRimrRQBEdywQBgGckcDkLQYzE881PdqM9Y5EScwF",
  "key16": "4thGidC5eJWfztQure5tz7gH3W4dFxo8qpuh2ZWY78MTTvREhjvun1iQBtGFBKSS2SV7s5pjm69Gsadjr74n64hD",
  "key17": "5yoY6noqSHtfdNFj8fbKJwvngWnY7c9myHytStcYQmyuS6mVNUx3UWj2RsJJwbvWHRBBF6xrh79541UucXTDrfos",
  "key18": "3cBQcymVucVBimtvGMw1EQ6xp18DZSnomTjUKNMqjZCAjsMrZFcmci69NqqjjDNZQXCtGJ5sZhZw9Lo36oCht8ww",
  "key19": "654bpwgJKeDszBifmxsc4sQpqdLN5uy5uzpfKtTdtKRn8gPx8Toys5YJxs6TtpmW1ivW31kN3NSdoEjsvihYc6Gi",
  "key20": "33xpQ53reXsYB9pBd4ZJwygc5Z7nBh7mpkpgHeYHY35J14g8bvzjZpHJcvyNRLjX7dpiGBiaYUPygjTkhmHmZKmX",
  "key21": "VZ6CLpzo7aJcFKutPncV86XNcNi1YkkN79FFSvBtZZmGu2sfBoeYS8ezwgRcrLHFWvXYbp2qEfQHpgykv74Cok3",
  "key22": "4U9dWagQk87UXZzt3UfwNvSScG9yvHxHsn58neof2L6USLCvgr2AYD2mt3F59yGFxCb59vDc9fx4nhHYYy3KwsbA",
  "key23": "3KYca26kfvRrxUfspmepMv6Z4srxBvsu6G6PhBUz5oiGNWCytyH6UaZkf31JXyBwBQyR9mXyhNi2gqL6ENE6FsPk",
  "key24": "2KbpCV8FiA9QaFejMHWPmAnMYex9tsg17fKnm95DW4GsWDTEKaKYqjgVeEMSJnwc4NR7jYWwcU36ZazQfXR7ZWCL",
  "key25": "2sbxgSc97pUpk1Tiq6eVYv9Yo7ZsmSXfYvkaj8vqQMzrJkiYnzBctv1RsHkcTLfJsc36VTiEpVuq9UXDY5a9DsXv",
  "key26": "3CTwpAGt5qrFS4QGsN6GyHGwXtKpU25N6yr1esf1aTLS4RHtyxwAaLmYbu6hJS5VLQSaYwncsWKqpbRjzqPHBydk",
  "key27": "272A1s3fjxY8uSicWNCkH1U9wiQ6WE4NTDfu2TvhzSw6swBjb6K7tdd8Jq7hr37WTxemVpFEjgeryeLFxk1oyxW6",
  "key28": "s78tSDxMxrBPXutVYXbfxWdjupq2tsaVvTnUc8JS9m22MjzTNPYjny4AvoSLGX82VLJFQwcdytev8wu9qGwxtz1",
  "key29": "LQ7uJHddSdYTPrr6pfft15ubWVF4QDR9AWz3U4j3RyTPiRsFHSPcS1ZDDsgCPDh4sWWbyLxj287mgoWfb2JirMi",
  "key30": "3U3eTjJMv53pjJvHuCi1KFkyvnjQp5XqryDQxiCpeLvAkpcUdAtrwUzkYHg25mynqgwXuX2HZ6xA5FixESzwj9L3",
  "key31": "26bLgbo9sqynKXywQVXrnH4PvURTSpqsWXFZqLQKgWaE6L86s7X2FQChn6iq2HPUfagLa8kgMCcdzKmy7T7fShcX",
  "key32": "3NJLpPjh3oH8YgYYukCVczQNgjJPGUu8xaHMEAiMuM2spZbWenerV69kTHGqRBJsWy8d7wVqLzUrNYS3RiJF934P",
  "key33": "3E5a1CZMT9n12DijzwDJGVNL3FWypaNaz4hyakoAWvJmZSSWSHCpwRfjZECcEnkRv9qdtCE61qErdjtZ7PunxyfL"
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
