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
    "5LFK3bp6L6SCrbgedYwSeujxffz2vTtcHSruDqohTgjnmB373RPA1V69cYqFDneg3GpC99SKiQPcR4CrULmTBLW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zpygk48dERDMQfWvgZTjtWCjEnPTWiya1kXxb3ziLUAXW2yWoiiHPmkPPCpmtwfrGnf1MgvV3MzfCu5k1EmPbVX",
  "key1": "5JFaN3XfrHPnhQjiBti5jh2pjeSp5cqSy7Ft1pHkPSSvHmjGQFCrKDQSVRL3RqoyCB1aXgPAwJrjamjoSazKWCWN",
  "key2": "4J6ksXaB9DaxbBRURkhr2bwLwhAdygmhF1AWq3ho87gp17yoApxTvhgHqaD3qNHmfUz7JZ6BZYkbHdfcb98Kxqb5",
  "key3": "hpDQSgtR59ui9VfCYUV16XaH7b6aPEgcfFRRaWgAaV1qv6zEkzEkZAFoPDWCKTQJfApk1bcVLsyLQBJSk7s2oXQ",
  "key4": "2LxgvZXUXNnKue8XUtAyK8cWTpcDFf7ZRSkc59ZbNphbHvdEz386QncwZnUsjPZsgsKdbtsQxMMpxF4wzefDJytZ",
  "key5": "3g62YXCgfARHqP6mPtvFRJKUPtUSJPHDcKW21MdgywH4gvaMYK4DoUcpBHxYdVSvLWsd8DDKeu9AhMgiQCST82WP",
  "key6": "2buKp2d3ywFHNdtgarx1nGZEticHbgtwSgPrbx79KyVFQn2eW8RvjMKXAMaR41fK76JdQz74kskPKQ12CRbnMiFz",
  "key7": "2D4ZdGhDpm9bzDdP2N3kqLjnnDzD4k4GzVxM4Fnm4aoFTTGn5ymZZ1zNZt6Cc5crx5jksyqjkriApVHXxrmP68XX",
  "key8": "2iyW69UF2WmpxD3Fs4JedqyM6d6yMUQTcrjpkrLtxm2yduTtMaW4Hwoy1ytjRZgXZ8y573iRpxiGKuA4iuCajh3U",
  "key9": "p75sbGfoEpTRZFSEkx1hjgVKBsfmLFuPt9Cwh2N97FWQ9NwvgpkcZPoX4DjN5byZbNqAgMkcm137r66umRndoZQ",
  "key10": "BfWaL73mVek4i27FKpREJ5NuuN8dtLQd7mGnch5F3m7qYopvNG4VX6oTjcp8mR937nHq3XkiUZNvtxy6qmK93CU",
  "key11": "4Geg3cGQMXZGaGRd8L2ScHc7aBdtKGVYDVVni6gieHW7uRi7fng5HvKZnhKgkXyY3Ug6b4kzTdJBSp2aqrJ2ocKD",
  "key12": "43cS8z8FFE2qcABpbE2uJT4J3wnTZDt4kVxnT8pDDVZtQGp4J5oYFdEHxj6dGkjw1ETTxDMwoZzUsFzX2GYqKKdE",
  "key13": "5QpYTfHAddUrGD3BHQQa6hFKFz7zix15ApVgYbbWFEUGLMWxbKK4VRqjc7pxTgtjX294CKV8tEx91WBHThrxBnPd",
  "key14": "x2Mcgv8TKW7meuvHNYeqPKU4VZFk4g9Jf63Y7j7jcVYKJjQsU7q6u8drPVCMy5B4aeJDYj6zSqZDiHvnjNB5ad5",
  "key15": "2m1idEE1gMEvQxJFDs4V3metWkNU3TaQ6mtyK5vPVH1zNQRE9DJpESgEBnL5YMLqNgAGAiBzWTaHxqmUhFbAnD2R",
  "key16": "TirttWENuzb8vbHYr2HDvA5aXouMihD1cWkSGmiWnsAL4hY3EFPaJwzLJCn8Krgyb21gVdHoAisj4ZVVkpR6Pe6",
  "key17": "eWKD5zvGFg4W1jjCWJ6ju4go6o5XHZBLRbtnxB2ox3UfwvL8kXxjaRjWetYdEUaiiUdyQ6MnEdTFtwftVn8VakU",
  "key18": "GbduoRMx2TJrdFpe2B3pDfSwxy8zrvjPXbXAiwVicyAonp1ddbU3tBQCEqin3CqKUJR6nyk2Ye6DJGCVGXF21tR",
  "key19": "2tDKeJYxddq4oGnshtwYDm84my65QHycndZFWhhNUxCLF3Axn7B24L4rsXgqghW3ZsdpmGQUw29qUnhSua3ZtNwo",
  "key20": "4XAZNAJjNZCs2iANthsmVYZRZb98YZtuFjZ15Dvk7TjZ2HqXh2yxfx23JQ35Fp42czyCMX4i24tDYB2KG1vEqNbW",
  "key21": "MY9WCg8VALpMxftgqdkC5x5d4e6mnyno5T4qQvRJWiN7htneKvYPLmEadp4J6ty6s8frinpT6gDZVAB79UgLgfV",
  "key22": "2jEZBm6BpXqfSASA1nBtk7F7bkZMEuqMx9ej5hEuGZoviFDcqdari4BkKEdCULnHGeLK5U5BP9yLtVtxS8cMB8qB",
  "key23": "5P9musYeBBm2DUY2wHf9eqoHW5ADL3VFYj4Mmg4iVrcuATnX99YmBMqfhTBWsqcVjnQVoeca2iG72hpMndsiJ2WM",
  "key24": "5VTttpKqYJuJJQ7Dg5jDqLFKgjzkAXFFYpJ21Qnka5UgdesVYY13Gc4ELnkCvaTG1Hvmhety3A17LAiq3gK1R23d",
  "key25": "54HqkJQwNdJWLMJMJq6VkiMJW6x61MKeeBUyDrM98epdGRjXS2Ug5VkZ3dtTkRYzwyA9RrJugjuoZaFkFvxW4Rw9",
  "key26": "4yov2yEwTgFAs2Bu6JjwEGA2EUneVWxhmpVb1vjMv3xgU7Mu4xMXjJDgT1oZaiBUJm5iHXFvgcgxt17zRVNk3ffA",
  "key27": "4nhYbLpu5yQyJrmEB1ZGmLCN9NChGr4uKwogNtvZNm9MXXnXkhDPkfjH8FUVZUakmqR4GtXcCSDM8U953GXNQ55P",
  "key28": "Kp2QgsrXQ4VWBAD2HJvujr3h2yYGJWsLC6jPxGbvJ379GtVaAGWetgFkqNBsQ1MHyq6CTuBZAY6dtu6Lryw1Mq7",
  "key29": "21Cwy9HfKjUg2rDYCqb7vRA1WgsSzf1Uf9KfqwgGBxfiBPPnK2pA5VP12mdMMjmuRdQZyvnTMiUtAk7sZQ4UdZgY",
  "key30": "2dSiDrDwKLHAnQV3W5tteB1PmdFUC7WNrrc6ArGQzFfu9nFEWBawiiucStyCmhQ82kMjHSzuAo6TVLFN8RPtRE2p",
  "key31": "5zxpMx5Afn7jtkaSrVobWZMaNNkYE1WC7cWJ1y5EF6VGkC72UcorgxwNgeQgAMDecLBmJm7qFKerNEWFMwE1gZCC",
  "key32": "37mHuhFF1Tp6Za3skPZwcAs4kokD6WYXCq13AmGbsWEQGfurFpSKiWBshM1MhTYCGkAwZYQMcC7xek8PYQubMZWG"
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
