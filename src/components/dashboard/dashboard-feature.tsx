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
    "3CobxYvk85gGh7hpnKuSn9rgXxVKpPVVj2dwrwRjKTmRY5nxXsy88oUATxzhxVwbWchJJ6m9pEBJVNV4ZPn3S9Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XbvYMnWoDxbmEx9GnihCxFAyVqtV4ZFsvpJxoU14dSjrE8VbhtjTpab5jJJaeGZHqXnn9H9rasT4LM6K7wsnus",
  "key1": "5LWD4dRdWa6GG4JJSBkzByYqUBSJFnBSAEMqbU229jYRXuFpLCcvWNHef58tY14cin8XdKdSvJ6oNrLka41TWyCV",
  "key2": "v6vLngjYJj6bFbwCRDGz5gdqYZdv7Nxrc3N4VXKJw7cmS73yhcVxbQuscSQQ8JyiaUwL8Lj9MzduWB9LfHSz1r7",
  "key3": "qjrUDVDMnXmQzJ86nXCGEJSYA625k6zQcKTeCAASh3C7Q9m9NFnL15aPfwkaCPGoNPCEmE3t4Y5sTEDkdD3CbNN",
  "key4": "2LsXkbGUfipUBS8e6e5oUYhVswdzNMhohneSYcMxX4DhqRFLCTQjRR2UK44hoazrtHyqHrdPML6U2peQrUNZA6bw",
  "key5": "VvqTNjGenpqyYnHw8MQQoX8RvxWYEPeewBmEryKQhbEt6DYMiKPzM6yJBUEq81tVtzJWztt2gNuxDTcv1APvmaW",
  "key6": "4AU9QKFnJVFfehYSR4tV6fZ7G9tq6ucWmZtPT2qw2C1BfKfpJT7N7tvDd7pJExuC37hDnD3D28DMBeDSGywsuKZj",
  "key7": "5nV4qFzDLLEErQDgy8ByaXp9eR98X3P5ECdTMKMmkTXF7ghNfUEfEvfASMqkTV6zNsc6gWsb93i8968MEAXdYvJo",
  "key8": "5qkE13svsDh6qrB3g9fq7aWS9s6P8FrTPiZj5ZBNzSsQeWA94wem3s1HJHbNkF3aPpyH6mNJ1HZqh59a2LbsKAiR",
  "key9": "2xkevmaihE9YXNyJiyEuY1SJWBqr1Zq5kAVn2PaXYAJWcYu8jtxwjGU26deiKjKnDpWGn36ybjFX6MdWP6f6GCoU",
  "key10": "3ReWWriewwgC2CFvXjsZKcVEHhJs4yDaZLMMFC3EiAm5yhVfmpGFEnR835Cfu85mxL3kf25Z4YnMdRipLo2kZ7bV",
  "key11": "2XM3XsaomGwNLAL23a1W7DCug9UQ6uV4iyAEZbqdcuGQAYZw8AarQv79owHToBXfCTbSNrsdUYseepn8wy8bmMgX",
  "key12": "63FCu4A9maXBAT9HR9uHv46v6TTU3VKoSe4hRZBVyK1VXME1cs7uTjRFCwhZiQQrxsL7BqAcp1tqEm4AG2RMRerp",
  "key13": "5gcswrcEznRP1XAgBQUE5wutXMGHZ6csVah8VjB8m98yraPti2bABasqUG19TzdV1ieLjdL8yS1f7Kb8t5R2mD42",
  "key14": "5sgHQMv8YHCvsnJFCjSWggUgVQpiGN4nws25d69dKXrfYfcmpw4mdCtSfnKUgoCFv6kt6jQBYUDY8jG5396Xvm69",
  "key15": "22qm8mXSDTuCCnbXFsim4dqSdxhEQGjPACGBLGMLwgwFH5VN5xTpYcXcQ5YrxH4i98JuidvHNyy91sxT6amFtA5Q",
  "key16": "5Cb96QQVFJxq14rETqjLFUNabtd9yNV2jbK5oWf9Ch94DJKFW5GQoSU7JHcZakoo8tb1d7baizygtxCkDUgqzNC1",
  "key17": "5TknXXLU9oxWHhNX77k6aCxgmZhrSuR3RmXf6DDGArvyMrDvKEariHJQttCEiyu1qizukvBdfeSX1UWkWJnECs7q",
  "key18": "3sU6v8cqcTbnLL1LpGkFKa88am93462CijSs6YdGW9SpNfPVFKC6UFP7m7JWGoxRSkZTTAsKpG9xP4Vn94EEqP3W",
  "key19": "5eodMNw6QNKNBBjCT5CjuRyEm2wTcU41fcqk1FBVnYZGy1Nmx1FwuWr8JaGRXk84Ra9v9M1P1K3y1oM4eZm9E4sE",
  "key20": "5TsYuKr11SUHEHuTqLtjRPX1SzsAWgKQNtvHdtZduWfbN5Jy12fNnTE3odhQKPwePES3tNMVwEy7F7regxTbm7HM",
  "key21": "2Q3uidot2vPGA1wVvSiQoih5ZxRtjMSiTXQWZssAEsNHM67GtQTXktaNjkdCt45sMu65rzRErAw5r4tYGdrJzzVn",
  "key22": "3yG72aLe1Zbjm5U9dD4pw64CHgw778iTxDztBhcGUY1WWoi3boJy589PBGJmZtTNxacZhAcRUw6SVkxReZYBCwrR",
  "key23": "9Y99ta5A8enVuRCmt8oWnvN1RwKZHohrQKUqpxxCo5f7i8x1Np8KwTAJkJU8Vgv9a9bXwJs5W3cLUCcR8mibnVP",
  "key24": "4C7NXFiMd5USwN6cRzYuVCce9FHgP1TziJRLNpJ2PgQ5oi7vvAFvNoGEAdgaJ47KQxTRq2nceTSSKoJvBXmHjJ2D",
  "key25": "5NRWqqsJfz7NZuEFoouwapaMesSowuJnpADuuNYfh1tt48dbEB2WhYQmiuBqoK2pGYPW93zvp3Un4rcmaGU7paGr",
  "key26": "416YfPZ6juv7vvwJeJrpT2vjS48kbgC9vkTRoXJVFvcg8DCRgfELB4HL3RVQ3qaSsZC86i7uexr1itvRUs52ygB9",
  "key27": "5nDZ82J9g4Bk8udrSkTdAPbj5ZFom3YUheUXjx9dtHHFAJKQDXK7eupLBJjZFKHV8L4xozdhaPVrYs73iibkVGrx",
  "key28": "NGBBTS59DPUdGZ9NKuoCmiAZmD6S5es3UgE8TMSVjfcjJcDV96fQV2ncrLeXXeY9b3xJtxCeyfvuCgPmbTczCak"
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
