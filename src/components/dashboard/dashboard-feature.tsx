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
    "3VCHGNpYTJFGMUR9MoTrvnUASLduNf4fsXpAaY3U19wabQ9s2HCZ7XcjnT3t7f4pvwZ6RrFNrw7io5aje3ifPqPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHPdUESJdjD7HN886uA58Bn54ZrGAqtzrT8QU2FZi8uzXW3ZwRPeLKnzt7EU7C1YEAC1NbCgA2yDbGosPbYuZw5",
  "key1": "KM7TJA4o8SAs38NiUyZjzopKpRHjKFF4Fh9ot2KcvVWWxQfrHsFbMB7VFVwmZKBaSzU4BfHmATWK37g9APhgKNb",
  "key2": "3hvC522oZxkjJWp6sdStQeShNmhtrQ8j623hJY7pvybGeURT4erxL5czXnCg86VfWjhFQ4MDDjwMoaK5TEq7mz6",
  "key3": "4pM6GNzinrDe7ByZmo4waRZwEkXnVpVPKV3f5yU1FeGpgixYfXAS7tu55iaNCVXCDVME6Kb7np8UdQxmCgbgpGUH",
  "key4": "5eMwUWaRQt6jCMLbaPy4frVc1KSzwXvHPozFL2eGtFovVz9tA8syA3HojnQpc8HRBNQ29UhTP6RAJC9WE8rajgY5",
  "key5": "1gQKEgfHQmyjVqXMUWjZyf6LoWbMmzMjeCUEfjZMkKMC9y76eGnXx85XH5fscQxLDwAuBZQ27dKuFMXGDGeenMM",
  "key6": "3UmMDzwKui1B6zTpfwi3dwtc7A8ubKrUQGTSSpsKzE49x1aaVeCTjN6jZGVdawL5tXuwY9TA19ZCb2FB74f2PoCe",
  "key7": "12A8EuTL3VFV7Wp2tYBqRtaqm9FFrj3xz35sKoeLVaN9Bj13FKqMY4bKaYJtnb54tLRx8uH4KorA6MoBanXKW1o7",
  "key8": "65k3Ry5BH1cu2aUFcRaTykD9uJCvaZXCeMirD6w3K8FjFYyMRixvCGnJzzv1RR56926M14MZaHAtTTEg2sdeq26K",
  "key9": "2ZQuCtrnRwpvoK9FVy2v28kZC2oQ6YSt9857cKSqkp2FUSFbx8GLMwjrpbbBvi72djKRDWe8abYD6KjUFN9WJsPe",
  "key10": "5GYri2Nuo3EjfQqysLN1akChjq2VMn8cWPddzHgRs5HivW6cUUCgXjRHfxvULiLWxSHw7mgKK8F7VH2ij1Gpm2e5",
  "key11": "2SU5SjWE2L54o4NintgJHXkYqvpk9QuCFDrKGj9T12nzwLMhSziuBmnQFdW2Hqc8RateiiuQeTpFh6Mx8webzTx5",
  "key12": "48Za4dXutET63HG1c6HuCJXkhQtKrVfqbsRUyq7zHMTvVDv4emBMmZrbu81aNxPSnd5cD4onXZqewUYWR9CcTVW4",
  "key13": "2XtMCCvpB3sbdQB2vZbjc7QmZ2uqVudBvxsJtURzULPLhpKpPX1X2wfVaMZg3Me68bV8s3GMWuG9AbtKYygyfkvL",
  "key14": "SwNWJjaPVDtG5VYqZaoGez9AZ5pkFyrmV4cjgZ7zuTL8vrRTbBjey135wJ3LqantjnGV757j7gU4xAuNM5umx2d",
  "key15": "xhkrdC9WAUt57rwUbcLekMce2r5GBxYQnuFhhMdoAPsh29WxbMaHdF99hHtj7rYPb42mx4nbVx65yUzYWkt6fAV",
  "key16": "DWjWKtAuRiF3LThvZjGbQLnYEGLgh7xLjx9PyLw5o9ySnwBJnVfo3oE2rhAePdTdoim3ro2uZe2VZGooFj6AWjv",
  "key17": "3j1hT92syB35MTGUgmmKRwTLJiouZkdY8JKatZqrn3UdTNdTfPF7K6JqRPqgQWd9DvvbYWp6hjQwCyXVSbkj8E6K",
  "key18": "2z8BjRbMkyS79g3pbC2UQJnnptAv5J3FoNzKnCzMS23BbKFokcUBAw9GfUBLFpASbgSZH1Uzzmzxi4DB7Ds1kUaj",
  "key19": "4fPfNatqhrMAM9qfK2ji9b526QevHcQjpm8yp3Z6EwutPvJ5qW6Z37UsHQ5fhao47SgBuziBpLqmnGUYcnSFkkQS",
  "key20": "3i9YwBx5StjVaRDR9JtPCrscM8mSjQ1P1iiUF8W2zK2nY4DoLE5fauyJEyjzSekQBxjyrBCBhndn3dV3cy8pyEz7",
  "key21": "4Jgcp5EM8DYbLcByx6s2VQDB9uV2T9gsNW5YuHaPBu6MTNKUkVkHJaXSNp8nszJv5QkrrFrrDFKiq8d7azzqtTyb",
  "key22": "4reZADjAN5BBtbxtf5PGX9dRJSscbhzHVur9wEDVZLBUxV5K3FbCz92jp4CrgED1xjyxcQreAYUrMxXoXD4dDThM",
  "key23": "2GJ5wFwmE8xMwxPAScYr7UTLpUeKsFFNgx7WxF4ChAZ6hBmMbdxynJWmgqVtLaKr8uddRWYMarXUZdhNk4VL1LHc",
  "key24": "67Et9CEUgJzXu6kCS8FZqk6xxgBHtGwVMjcQFSxUuuJLR4tEHBnGisQ9H7cqYxNsKmjKa6WDf4BRASq7JDjgtgtt",
  "key25": "3JTQY6LUTsMjXfSuEwM9qkyxb4WmBAQUYFmWNraNVQkaM4uejJTVB4jkYwfeC8PDYUEZeVFH2ys5b7UD24wQvuxz",
  "key26": "3NUnYgBwmckbAetNqUWeWV1skV4YsYFq8T8opP1X2riEwV4eVwzsk9972QadqKbU19egh3V7x9mRXWgR8UkRviSz",
  "key27": "5E6FRG1tQQrAEkE3ktir33fZSkJcvLoN5Qtfkwsu9hq6LJ4GDXS7d1jmrJgzk92wy9SFBWJHWFQG8vt5MLfHKm81",
  "key28": "DDAFHK9S58BXRJzjkDYzyVwsAeGWtD9VPN35mVmzJvnsxcDmDPUp3pCJczpsQNVpiZ55ZYANwd12KqhMt6HmSdp",
  "key29": "33Ab14jSehMdU4f6NVN6wU5Z68BcgdGo1cYZKrdj16wwHiD4HWnhBLnKRPHCutTnWL8Z7fSQfQUpYEK8HBSLiaL3",
  "key30": "5TFf1zS5H6EiMJMV6Dmb2FdSWLqK7HgYuqX7Y1EubNNJPSAUE7R84SqzEyGfh36aY41xsT1WzWtEesGgcC2j2oYb",
  "key31": "21HXsKMwsQmDoNAsFCDTQfpV51qxeQwHZkZe45r8WseeeLdG5nF7YwJ1BcvbNbJVhYfPuTWsaLrM4n5wz4aaBVaq",
  "key32": "4KZw4fNbPNZraiYKWXwfmMjSQz3jC88pyDFuBMdeaWJzYrcaWjGEKiBZYZ5RGoLevPGMGDbjabhfWxgFmBHQzvBC",
  "key33": "5ZKCg8AkGs7Q9jQ6KsBXuJAgZaf6qikz6HBYKJdQu788QiaLHBmBwiowsJXZLx6dmLhU25sLxMLXue3uFtEAqT89",
  "key34": "4BTn2aHo4oWZgJJJgdrVSEM1kAbcoNrLCQxkQML2dNHz2Ucb66VoJoLacuByZupf35Zz4ttHuY9c9mnffqGAd7sF",
  "key35": "2jxvWuKq2WrshFN2UM1vAkykuvw6r92hZrnobEXCGMj1VuqS7P82QMnAcGGtqR8px1J8XuExsySMZYWjRjmP3Kn4",
  "key36": "5ryupCj6jVkh1J2xdMuBNt7HXxCNNb8qiz7j3i2uMVyi1SSkt8HBkKXXDqC6SsMjxNt8Tx3bXwrq9txHZHcrVyYQ"
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
