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
    "XR3DJDigGNqy3HVHWLDtVpbHGbmRLP6pD4PaZWKvGy219PfT9n5SqmG22TksWhtgzHMbdwSsWwhR9pkt7ZD97Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMXagdBR5acMrcpBkaDb8NQPxRU7zaedssCtk7gqbMXVdYaDp3F5i4wVr778UdMV3pNyNDeYASfCoJ5Gai8sBTs",
  "key1": "2Tj7rZ34nVjhAgpQ9ciUjr5bpb8pyLpBaBKG4ZLjYdoMkv7mZ1fESRUsMeB5i254HE9JvKAzgjWLhdS6Xgjz6Mps",
  "key2": "5rUGJv6Tz76Hnmv5r7MAhwCdHZRq9RtzdPphCF16Pjf5eWAJ4spwmnf26bNrjd8hGtWmhDSka8ATSoyHb2vkshDW",
  "key3": "3ooQhBAq9hGcqpzG5aPK2C2qiNHxu2keDv2hxGdZR8PSsbN4RkuQsWeW6HpJXyajqBuUNwCmhcZpQnhncBM6D5dH",
  "key4": "42xJ4iSY6JqE9d4phH2MyJKor2NxeikFfiKyqEVS3XBNKzUX5n29fApb6YGxrvCgNs3A8n5XH7ez1w4VCJWebwva",
  "key5": "489mHriF3dyrsqmEnYVT8pEtEyQx4kWyWhFbejVP2h4jvxMjok2drWihMkNQHMjxmYSzbZE74oQb6GNVEV96k6ZX",
  "key6": "DCDJi4kCBwAVuBfkn7XBQdupFUNDD7xbdGwjaZRuoejEsh932Za4ZdqhJ2esvoeN2U9Ti2WURZ7mUXyBR9c7YFq",
  "key7": "3f3PCvDKcyM6kcZoxXTviwhy7oqhkFkEfufbrF515NCXjyEv1cvef76JrjyCtt1wdqdCBJP52ixHh4EECeDdopo8",
  "key8": "2ErWZDjuzGoxnH6Qtwg6ERHqYy2X9bF7NFLdEFZwxvfcnXMJ64SdfK7bPzpP6RdMBSjBmWMFvVD7RLd3n86H4NBv",
  "key9": "7aBX6tHyoCScMm4paz7FZAGYxun4Bz2kFzD36nmpJ9CrVEv438SweCgM5pQMLegB9R8ko1xnToANuh7Ys3zgz7u",
  "key10": "LuXjn5tPUJXnee7R6QEDmk8tzrmhwNHkU5X9d5teoDyjnbJqZkRTH74zEs9y6GerPK7QNV2C56iy45o5QNbrhdC",
  "key11": "3QyFs3KoBikSa41ucs71A5SSvhJxAVB49PNutXoNAjnwRCuhG6HgQCPvrAXooKdBcQoZmMnRr4VEGHHH3ZazFv53",
  "key12": "54xwJx7DhvdbAd7tzYpi8dh2hwEeUWU9QS6yENS1hZSSsaGh3rDP3uV282htJdTw5DgftLDGanvqDtj75jyW2WFH",
  "key13": "gwSUUohiN79fymsz7aFKxy4VACk6rHQqU9F4nddQmdiXmYeHPFoAzDnDQHAtTu3CkRz7kqRNn9NU4TKBywt29vV",
  "key14": "3ivTmsAkPALkmcf9cbAoiLzp7y71nPmLKd46bN3DwWquXJpPvNEopTUyYqtPZxMFZVQMkE8U9bFqiGeWqLvJdJQx",
  "key15": "4QtPLLhPqogs7bXccY6snhHDRvqSxSQeDkoYqVbuNPr5PH7J3KWozNMEXZpVFTWGX1MiMNYdPza7Y1Vw51NdBrGW",
  "key16": "2H2Zf2uAfm9irnSGuN4w9a81QUxsuekN9kEPxUSDbkAit1fxdTXvzrTrzcZqf17z3AwRkLSFNvgoJbc2uNxUvWXv",
  "key17": "3n55pC3RjmH9NDNeD8oJjX6TC4ABxpXbw1nRT7xLdwP1MHr1HMcv64hapoh5vVZCYFCm5YhuQFfuNQtP7m8TnJSc",
  "key18": "2yf12TT22fxoNai8atZGqjdfSGg8jriL8ikjB3ww5p4Zotn9Gvr8woYHrrGdSgDT1N8SiZ93aKWCcM9gnBftNGco",
  "key19": "4wmfBtJQv4yjRYHRm2FPTUWgAyYSXW5EMuDUM3EE34pniqeEqnX51Qg9VxuZ3GkbcXA8CTzCH8xvtu1d9SWPUAVy",
  "key20": "2qZ5tssku5f4Jac2gDiN1roJpSPCdJpiwKQB8dBRLaNgwxhj3ydgH4YhmJuxqdtTucDMSqb31eHAF7gTatCkQYfz",
  "key21": "4eBKQb3f18bGwV9BUYjCzkdNwcZeQAJxBFs6qdDkjcSm3tcrHWKddt6tfEddkK4zkRJMTJtTdyJg5b6Jdwhi9WhT",
  "key22": "5YKJUgb8yQEYTkc5ah63eQpfHfnmWcyLdcoYzDg8em3kyErYtXAE6KhESfFMNuTKTVMwp5PH8GiEaUSUzbVzFSiJ",
  "key23": "2Z3pW7kxJKwsrtyBUTUoqFGgf3uv1abF5c8Fb165GGc7fV1rdVKmz7QhTt2W9oFLSkoSAdmqbFaFsdACAtwGGFUs",
  "key24": "4DAxAy356QZm8PCHPAEspkN4EkJr4hNGZCMf6JGiv7BWmJ6i9ogt2EDRpBdsuJBVxFsAFM3m2MjuYDuBLRP6LCUP",
  "key25": "2yPqcGGRuMfbKoj42zn3idmmgN4fgwMknrPj2j7kdfBXSebHQq3SCsoxE1XmCdBXrULhesyzxHrj7aSVTakb3nPR",
  "key26": "4vmJEPHMjPPLjTi2nAVGMFvCP9xZrSVfnFkwu2ZN1dkrjjnjFUWhdaKyxpcXyQ7kgjQD1uywmK7M8yxJ3Si23ZTS",
  "key27": "2MP53aJjhwvwjyr1dAfpuCoE2V4jxavues5tQqjvQZ1uf51vLdjBRqPw5fDie3b4zZNfumxVSv4RfZNmHosk3wjN",
  "key28": "5HPec4sVTsXMBcGMWE8kGMq9KePsb11yrfS8wVJ5WM1KghN8ddKfXFMzyhLmYQFXGYMfZcFiw2PzMpZAqZQsPmsB",
  "key29": "zr1hEBuUdroCTKQekGdXJQeduAaQaCQTA99jeZxfTmn4jYEigW4j3LP5LeYyUVD6fJrZv7M6W5LJ24WzxST5xu5",
  "key30": "5rZuD1Kd9xc5hhwSNwa8Lji2GEeVhBthJHVVcynHSTPoiy42FVs9WB9Ma4TRQmpR8eA4BEgQque9hepB6vQ4aFGr"
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
