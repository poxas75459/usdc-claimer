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
    "3uqUYkQPoCFiHZRpJwWaMJrknAwanGEezYv4pHnvACHMrW4vR4qP12CBpRVJ72cEHgWVJxd4i8EyGnfN93uYxRtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHL7P1GkfE4gBq4U4KJtgyYRg1LSh4CJWY4XKbksaHJuKzTv38ERRorr8vbNi38sf4rVDhD2sy3D4PiiMVeAqfp",
  "key1": "5hhUPsnUTWmtAG8PezwALadiKvqGJKmgNu8b4GEmKVFe4hg5jrjyy9yirYaaB6ymhc7rzTdrHBcoTo8Fo5w1gFan",
  "key2": "Bt8pDWBxtDLaCJfyX9AyDHWkpD312WqnXqZSfjDQZQtA54W3EbyAy9gb4ikc2JURMcmSXn6toiu3N8rzem6jEkT",
  "key3": "2d743RsLEy3AhvSPZdtNTKG4CnW4Ci2SLgDcbXViqDm652GoAmqLNg7xc1ryPxMyuKAWe7j3V2bmvyvJmQvfMs4a",
  "key4": "39n1YQD8JsNcQbZs4i7BfjGn6AP8HpKrgMdKYUzn7DQZKTPRcY91MvPPYqdHLNbdnii2SoRt8AG4oZh8n2J6ikFz",
  "key5": "3oGf3STo57qUThLPduSutoJMH1g8sc16fhquvPXTxovWd6SEycMZytqZs5AjrPFUcPqKX1tcp1H1q9DU9kcirwJL",
  "key6": "2QJV9jDi9uuAYmHGjXuVqak57BdU7GCzZwSnmBV92fr1Tjk1zfX5M8yEr8v1mTLqYpjg6ztiqLfpPSh2kocFhjkt",
  "key7": "57f1abfNzFVavQSUD59CJn6K3ign7bNqSkqdhATxnPF5BCcJM5CiUxk6w6WNJhNgYAvThrQP9n1w1VzeNUKYM2DE",
  "key8": "3T57bFYJtZ8iJErKdCVCLoquYn7YYQwM3VnwHmfgsrWwE5pmASTYWjyjW4ENJfccTguvme7WckJy7bhRCbauGPWR",
  "key9": "4dg5STiLUNnK8nwxqCjmSYJJVNZNqQTcGKYg739KESp59CWNkuWfMwEiHBueXHnZhuTrmQNWw98rrKgwUVn7FCua",
  "key10": "fD9R7iSMQQ9wKZqfbrC8aMBfprRzudHNnX9TLmhY2z8dM7Wfm27tphbnP87L7rZsZUjjzuiKioVYkDMJeDVBYki",
  "key11": "59QJ8MsYp4wJdFKzCVqh5JAKrXYVhAaZ7mhRJTYoPeZNszURm8PJEZt4zcEWz5Weyk2h5UVsnyQsAJ5Dmd7Cwn7",
  "key12": "45Cd3mRJxTR5yWVCnho4smNJvJhUd6PNz7sE1jaERa6i6wMst1rv6gDXfBRskCdY8eQcDc4Wf8e6Dy2GdvRxBeLA",
  "key13": "5faHgz2EdTDvtMecZt179YjW9Zz9PB7XTLStH9y6R169UK39ormKtdNdg2HpgTqpiJvX6Mi1XKMmFTRSGfjSrnYS",
  "key14": "Af786Ygw2frL4WNJggngZeY4ygAV3JyhESLYqinJ221SWkmAxLSQvB5fQWYDRUkbHAFvfr6bcAaAhs6GADjVnda",
  "key15": "24qaoWgFUbZaYbCP37uFtiAN1PcTYD8hvywA4Sc7BazpXSKSoh6qCtBbWK5P5CtLMihMXCEb9J2sZHiVtvVj2LnX",
  "key16": "62ahiiFmxHxcd7GgP9iVUbkhyRDtWje8YTmVSX449ATLRsi7uhn5FJfb4ntEGUX4GyksAPDudfueftDgM7mHxtMm",
  "key17": "2TWahvgDcARs4zLmWWKjT7Kq3HvaNSLgh6iGh3USsi2NxARwyGp6T593No9WqbnmWaDCk9PAVq8XDsiAECNJsBQz",
  "key18": "5g34NT6gALdygcRGeEEunCjzCybGa69Y1KtR92CYHDxy25woPJpe62GxWZfSkvguDXmp2to276pURi4EFZ1f1zKJ",
  "key19": "43izyTcjbuwBvCBEL8TSeGViztHc36cx9e8kGzYk376hoYCatjS28z4cyGU6aTZd8qrucBWdxZUw7pdrXuaXqC3h",
  "key20": "4QvHunEZzMGNdBHsgn29CLo9dAbtTv3fxDPsExRQBieXZ8bwQjViVoywoCSzMWVemfvX4tL8GkjsfjQBJo4yUXTt",
  "key21": "48yiZ8qnXkFZZQwKS8cvafVJF6xGtVY1DohLYso6WrmXY9WJdFjDMn7SVJDDRx8wypTyKrv7beEGNMLeR1F1fFsS",
  "key22": "2J5ypY3sTH6dLYJnbaCUfAe9xJBE8J6wow96RdbnosyxyS3c3QPHLeTwQ1XnvrYjVaJcTCU6te6tvsHam2czvb95",
  "key23": "2SMdUe7dcjQqtX9MPVsK3ydTaAnbE9r1bfL9mvhBCKednPSMB3Jjs9tcNgsCGPAXsPJt3rKp1o2K83pTuuc1eAW8",
  "key24": "5yHG3HCcD6j5zZRjrTzcA19ry4pvMAXYbxDmopWcRdjZKxJtqwTLzBmMCpEZTjZPebaDQnk3YREbkuR4RkNrANzP",
  "key25": "5c8NPwazrruaLMLbF3NtSrA4KcpBpdGqSWJbBYPdFKgyeBJxRbcUg7aLeio4q3oJDbyy9yf3mhPJsMepMR2R587a",
  "key26": "3cvRPWfiNRNXG8bxVC8C4YGfQBYnC5xpMScN67ykdwJpo5AzZJHSz2U4c8qWNmynRdbHE8rXNGjJQc1YB6JjnAmm",
  "key27": "3HgPG6P3oQXW3o3uAAWARey2QzWx7Vy75Uu3d9UNTr6Xq88ZuRvjzrVHut9GXFWcrymuveyivCjQmk2K2Vac3EaL"
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
