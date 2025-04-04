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
    "2Ux1RGr53FhR96kfXJ1kjkaTNa9bj4W33as5kGBuuddvDHWBWQYMpEBpnG6b4pnpXzcG8svAstdqNWvst5GyaGyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YygY12YANDwg6rRKXJ4xMBsFaB9RhuSEPm7XM8C258hSWqn6gJHiRq9zjgDhs2Q4rpoJgGXtKbL75T18Fhd6Yo",
  "key1": "sS1RAXweWgPxu6AyVF1QVYEgb3sNVyWyUA5EYbNzZHghhYUGbXjUfmPoLwVL4nf4bhfWX1tfhnTMqnvvrXx2cbB",
  "key2": "3F52hTX4rBsMr6ZmHYHbvrvG7fPP4h1b4oic2PN1abFNDg9TkzQv1tMd8s1QSq1XW79HwUgsuhy5Hw7XBLqeJqgZ",
  "key3": "L1ztJVArKZBd2GDu14XXB1KBY3EJ3jU1VNtj6cEUdJ7MkRZsgJzyK8yFuPaET287VX1511yYwVfFpRiLt8wy8a5",
  "key4": "3EfAnzv89ih142upxDFqFqkztWXaUHNanVCteteQRoKpp83J9AvL3prK5zsNRyY5M6EQzvm1Xfm9LMqniwwTzCj",
  "key5": "3zg99G6JZCEDmZ4G64NgHEWYrnsDH21NEjmSViLZQqxXyaBe8Xqb3Tc3FGrnPFabrUwMFEQ5Zn1nUpjyyBAmSu8o",
  "key6": "3wvoFU1cF2yojZHpsjRNz88CgtFcYzZSLrb5XiBpSANArBEureUcgk1MCC8FVwRNeufxPcFwLA8ZtoZdVYurj8wg",
  "key7": "3D34gT2XWtYbvcTBFekarEGtaqqTgb2eu47eJ8SaBCPLMmELBV8cJNyPva8NqcVfy4GSahCnPZEG3N1A2jN4rMDm",
  "key8": "3xVePAKgqWVusBEngUGzziWqybUVbLYXWBamvTbaHZ55zUjKf6PtChQmJ39wyvMExDXyViuZjwQ8BpNt5MBQcu4m",
  "key9": "a8eDuy2BaxyyDFkaPhVSQFY7onsyChUTZhVFpoMhYpXjjpMBXnrbhR3Qa4H2xfeo4MbUT2NQXzUhQUdaJFrdmmj",
  "key10": "2KTE1UajwVwLeAVSG8royyhXkeA1Y4drWLJvqSeXuGgTgijZ2JbWVzwCYHJMYHbQbzzs6wjYSdEw3Y8tF9jNn2E3",
  "key11": "4kSZfk9UaE2qQppNQdxQ9gYLWzNv4ctkYPPm1ZYPFCgxQwNHvcNmby9T7wRxNUZDi8Jw9BmHUgC9YMNLgTqCsxKW",
  "key12": "5W6TkhfeW1Lhxit2Fwv1ABUojxPFTQPFpr6qd9BvMGGWxzSm9CQoZDQ2T5feN6uojA7nFgY6kisetyUv44AaKgbV",
  "key13": "4ddR5cji5pmKCVzVA86cGWFrtA7dfAxVAv3LcicQnVyPYgMTib85K8V5Wqw82VdHj1nPKhgNXPxZjqxSTHNRDBqC",
  "key14": "gVoWuWVNgUdajXFWcMmqxtFzscW27kyV98Lf6zBHsZSBVycAoLPrTcgQAwJGmfWJXanVnVxBzXGsk5Pd4gWNRHW",
  "key15": "3z2xFmr7WvVbomRwvJ4NNn5gWWheJG8AA8XJjMhAXUz8z5D9AUfbxa92SBZJy2gjCze51H3DRnVsLq8mboTketHE",
  "key16": "5kEg4FcK3YTqorWgA7Nkd8UVJHLZAoCJTdiP6DRbkiVtk5ZiQT9sB1ajHJKwzGaa3ZRkjj7GCuEMHUBBSz6QaqjQ",
  "key17": "3XVc4R8KpMXBtSMpHgCxnUfJZnmW9UykgND4UAYbnz7qUWyGsGswTHSeQr7dejQ6ik5hW5n7H3XGdz8otXhd5hTu",
  "key18": "2FVTvpvQXkLBeE9NwbDPtgyh6xJL1CcZNSC8hvHX3QtSHCM9dqm6tGU5cvzaQQ7RymRrJymG7JXqc1aBDRnMjHXY",
  "key19": "4yoDbMw7aqWbSigYTd7C9qJinouogeVXeb1kcSBvysBB5R4u5nZGnvnva6vJ6vqnjki9JUGa3tAXcpssekENjuKF",
  "key20": "ttGo4Hgj4Ae9YoutEN8xNyHzxqikY2sfhgiP2UsEECm7ruo3oy7ZSrfU9yFkYHYZjYb4gyE39dUTUKugEzhLqRk",
  "key21": "5JmeaT6HVFzzSWyb6hYq2E2y8tovWWhpqRe1xNvuq3QeNBMrR5bCiZcozpsp4N6arU2iayPAKC2uLg9JXxjGvJuB",
  "key22": "2qnePfA1YXf55GdYYkacnSRiZmJQJpwAD3VvMJwN4nkywLbwmcgLwbb783dsiv44k2yrsB9GcmsjGXN1qKSVwHbX",
  "key23": "EgFj4m64peinU5SWjMhysuQhMCpL8j5xbrWsbxCmnGd7CYf1jXZtyABcCJxqriV3BQby4MGkGbK1B6Hh7b91rrF",
  "key24": "2vihbtZZVEYQe4ooaHk8cuuSjyTTtfdvpCzwMUZh3Z1gyFHP9NWFSNpeii94JnFVCpvTrVNN8QKN2sefp3n9uqXg",
  "key25": "2u2QqZ7PT3XnoPbMqDa7ZZDhVNzxsbtoTkNsXRcuVZTEzDJVPqhob1JBUNvPKyf8oeJzaUetvYzUj3VLpGfK32d2",
  "key26": "3hHMF3WxVsfTrR26LcABHvVMMzKfQMQLiHgpaHUJh1sW1NcHnmUSfxQiUmSZnxLsBvJDavX3EBx5S2Yju2NxDczm",
  "key27": "2uv3QS6nffWPCrg6DS7aMowugDjdcULepjD7YjBHBxDSnL8jwpUtAB7F6Gdw4dMJs8s3kMo9yvJc4W4TF6PxvnJr",
  "key28": "2PEE1cGY8nmQszeppozDJ138fX1tSa4Vq8HPC7dGUeme9qSbNGF8MZZ9H8BSmZfS3sf4PoArThEvw7D5txhvUVhZ",
  "key29": "656aUtKLeCfLj4gx4HFKhpF2kwEYr3bJJf4JH4CmfqvdxyTdPwikJsaN2Dk3Z8EP5r9pewLmncL7iWzpASYvx6NW"
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
