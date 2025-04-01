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
    "3gNoy7HUWTJBnx7z8PV8LfHVk8dFsb6Ec8t1QXgGaXT6FrskfcVi9XxFvdSLwhuJcdzHp3JCZjKETshax2JHEuwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5gRg6i9F4a3b6NkJAPnYCiCDo2vyDKkDus5E4ZNjpaZN2f4PUnmskXiW3e1GDaqo7LH6i8dwx1fEHnzgp3FK9w",
  "key1": "5joBqoQvRhdJkCsbvKk57Rx6QcFuy4XKfq2C51Q6hcBUi1adKaat9i4kqSg3K912QtqMBuxLbaF6Ff3rhecuptdz",
  "key2": "UxFpAFczPzvdW119GRNz9Gws64tbhe4GUXpoPaP5aPAFTF4DAtqC8jakqyxQhPBeAhUij88JDPPAfG6NVzk73da",
  "key3": "71mhp8rtiBsuXpmFGHYamYBxHSY36tCE6D132mWTmnTQVjSbLNLHU9Xg6w4Lny358NGpTQG7esJLSNueR979biz",
  "key4": "3iZwnFERPxoCCUr1aYjBMMiifg7xwoKLTfSuEbUpAxKp6QtiiLLmKY8E4zLoFrqzCgHy11qWAQxtt3SqeWpkUkEL",
  "key5": "4WK59dckSmuT57KqvyYKhpKLyPPCEDqaKfXshbxUBh19oidUTN7hytHvbLjZdBPNwN61CucBcKtyCkKUFXEikq1h",
  "key6": "4m81ZMomHC131WnVo9WduFUoCbivenc5USysAKGs2msdwvXepcEpFYzgC6X5msJ5kUCVs1cSwsfFihpizmvX88KR",
  "key7": "QhXW6ARYHaNEoQQDU7wtzgtunmoZpnxDLaVBcXN4inHRTaq7zTnX4dyUgX2RSmEhUa5FSz3feNJYwHiU4s5gbS8",
  "key8": "CyoXB5iChhWdrCCgJBPM6sinEiUpuUicHMQhwezwPVvuHCsvuWcYhbthRSwMTr1sChMArw3DmWFzqwmbT6mYKrP",
  "key9": "23VybiziXZT5kUcEidBDrBXnLEB7soF5sZKGvTzQYZT9SvWoN9ehaGGXbaXrfao7WTCbcf1TeDo4R4Ato5XAnw46",
  "key10": "27fpnGnxyU4JSpiagM5wZ3CoJDbgSdHS8Np7oii2vaiymAJSjSiUyxqowzPgs3TZP7aqsY3oaY4okQSJfFDjPAqU",
  "key11": "5BMmkrfpk1kfaqEifgDGrGraFJQUsavz6ZDszewk4W2XMVFEVQ8jZYYTGYdQzmTvgNp3epnGeYiM88u2owbuXvvB",
  "key12": "4qPBiZcb4Ugz91MVvBdisXGPMQMi6o67Bw8ryaXY5hRu9LEi5LcXSQ1Y7UeHZCSdhMbN1JMVqnDB4dHr3SwCgGBA",
  "key13": "3S3CPxWPQXT55JR927yN85ZYbCgdvMB8WxHAFFB9mnXjxD6SiUxanZWKDmDqQ7MWMyJjUhpj9JzrQK71gVvMeQQZ",
  "key14": "4qjpVXLSLCpNoenwiS7ZVXnys55YdKj9WB24oRy4gzpoNrVdqb5rwYWLsN2wvMoGSnLDPscEPXpYr8RPjhe7MoT1",
  "key15": "4T9bYxQz8RhuEi7iVbzaP4j4y8Hb3ES9WMukiTAJfJayn51XAtDnnG81TBqkY5okKAp9rdqN3HaTP9GXNHyt6o9x",
  "key16": "4Tt7fiwSbuyv1MFYqdk6TAwxYggU5TpWUoCnHHY54H9FERJTQyUBFd5yqXTLexZy4noGLgZMqKa73cRrJkXzp27Z",
  "key17": "3BJxi31EJDfAzHZzjZA7VU3A2A5FZ3fUp3z963rQVJHYJFmes9HpP3EHzwSmucp2s16SZtyWSWe5tXjELrzFbupX",
  "key18": "4px7GhtagMLnoXUPiw3hbGsFrJ2skZ1rTdWgGVK1ya6CsNihwtqb43zy4DdfersE5S1qpUHAr5NdtELCboif49Y8",
  "key19": "QjE61czkg7Aky4d5ycN5EK7KT3puDbwWrJ13cShWfgjMvncmPvC2D7umVL1zb53AbcGpYDF3fbLQJ9BQ5ch5EvS",
  "key20": "618VBbLxpo1tdS6wn1ZoxHNURqNh5vqs4eXE1R2QUf7KeBNB7ty7TjsNbNJdibjswJyKTSQnakT7f88sUyZ4B9hi",
  "key21": "3KYCTZCxyFoYyRsJ2DJMVw4tBNpMni9kM1whQBJPcyjMvKpbrDHVb6u61GydMxs4c7P8L2bEZ1igWSjgzu333XMG",
  "key22": "51SD69fe1iBTU75oPVYzu2KSvaeQggsJk6VEMZQrSCfaBw1WwKTnyyyS2YzVKkQkxT7mnKMCCphHCmUx2fBpfRXp",
  "key23": "5gsYomuEkhj75o58HpFFwkKm3wJooKDdkEq4A96RmPxS9aR53SFEHAE7mtR1ipaYL4HopEzDGXHt2csVdjV4GRFy",
  "key24": "58UScYveygo6kAaddGvBBTkqNyAftegpMUf4fLt12FUjM1f89iVxxvMKLMb88hSAS3CpqVN2GvjWFPvkYjsrBtcv",
  "key25": "2ifWjqHUQD1CvfgfoEpLm6XowPkUjkXmjhrZbKJmFfT13vnXypZFi8mZ2ntbruCR7isfppBWDhrcPn8LQoEMgc7C",
  "key26": "aVxdPqCtSbnmHnHN4TxgUdXm5dCyVZwMq5ST5rQMN5U64uUCG7Ft2zk5HYFMqEdHbxvL9mzbu8m7vHAyzZxYL6C",
  "key27": "47ZEzLG1ASKcBngs7Johz7DBqnFtZLNgkCXpx8SR7XmviMfJTjS4kEQxowy6HEXAfBgBeTDyjouf94nVfLgSB7Gf",
  "key28": "3jpzMGYDPgDLNM59iZsWCzyc2TVmv9ECZTsqdGaTFpamkD8fuPkS78S2CtD5MhvuaV2nAUwmMptY4vhJ7LYnGgwT",
  "key29": "6x9mwRLxCH5wejUrdKc8UWKpAB1F6eGiT44kLwFTTP3BCt7Ponw6KSga7kiah3MxbtzGVnjZe3pbKwXEsJETdep",
  "key30": "3i6TgAQWJSGgGiJYvaKuFgWYqAHLWgvDfFfhrHGXaB2U14g5GbLrZeLJoLoVyUnmbaK6grWH4qWubN1YCK9KQY4G",
  "key31": "5FP2VAL6kuYxK9vmwwcANQJ8pw5vkHAQDJMj4csrJK57w6YveLs6VRQyxu5rBnrN8PjzbxRe8pDFaPudsr3jFmcd",
  "key32": "5n3brtR4rzGZqBiBupdcVYb3iceqzsePB9Tsx5AxsgutFa8SvUAgSuyyvKLnsVqT62AZMWES19mQFSww9xdQ48Dx",
  "key33": "4YmwFRw1D5zLMRZ8rTBtjw3NDQCJABcmpj8BK8DAhjyyaFvndYqhvmvUEaiSKrzN4UWa1ySYUA4mkqX41HJQFesw",
  "key34": "2vCmERfqU4yMnokgEPpHdeNTrWTXAQrejpYGthQi9NkmGvzz8DkYgLoDDr6QhPgYZSQFxusHBDmJKjiuKnceckHR",
  "key35": "62kzgEBk8fu2qjUwdNUuRhuLuQwtCRBuBkHBXFhaGBijBq5NYvrgUHXcynvs4P9sM1Z5b8xbT7NwS1LnJgtKhA2g",
  "key36": "2djhrwgq9s9aAHKpX8rYVehHYncwBVkk6fnNA87yRVz7hhCaY7nuX2q2L7h7xTHvP4ZGPZ2AqdBzz9sC1RHWsC8x",
  "key37": "58bwQWnZCeVfyVJbSGJB9scmw3dH5me55nogcyLUQsXAGgdVdQvxdWZj7JcATuiKZYVZmgBGKxiRZUKWPjDctmX9",
  "key38": "4FDDnAz6Gj7D4VyvQp5cuU4CPr7PhumyeSHvjB4AZ7ZfQBmy9F2owWzVgzsYuSwWgDEMais2UBwyBnCJyV6mFSy4",
  "key39": "3y9zrZ8sDXb2VE5dBM7egxHMsv4CyoemdDnuJYVs6xYQmjqZbysNnbhaGgEGmbVGFn2MjEANRxHEZ4kpKrysQYe8"
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
