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
    "288uDGScSH2tq3vYxLnW1NwqzkdJx2fNn5tiC9deGmvzN91t9XiQirVj2MahZwLB6y9owsqkxBP6vACxdRCyfa8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUgMyuuhCiPXycbraWGY1ZuLgBwjypHsEk5jRws2KahXHYfVxaJJtB4AioQGUcMJdjQdFdJMjJCrDHeoDTpWx9P",
  "key1": "2z84fjieU5Qmr1e5buhCrroq4JLbsPtyiPQ2yHDZjykjeEG4dzfCJHcAfYap4fPvZeJyRajyp8yZBNvWYEYW7d1X",
  "key2": "omtfJ8pdGHkoZQVRruypTRgSEyYQ9q8RAppzeEMXfrydm6KHAcztvNv9Hd7pRZc5YDvNPB7PXve5gU3DWgw1DbJ",
  "key3": "3kkZkAxuPADz8oJ8HL9yDzv85FYve2Cr3ez1Ciiz75N1TsjdBLthRkeUAXxhjAoc6NLNjc5LnvrQPdbiAa4cfqN7",
  "key4": "3hY8e5z9fkbX3Vm5SbSfnojaha9cpQ5YHrNrGJB1DgBmXsxQsvU1qV6xfFz5BTjXLYyZQ6V9QkHfxKiXEmmLargd",
  "key5": "3nBz3fGaK7UYMhyEUyBaqAzaC1kQzmUBnfFtvK1T57owTom27ZEojuDJm4ET9yArjwDTqodD17DgqMXZR4Mtd4u5",
  "key6": "4KMVGSJxwYEs2JF9mvQHQebogrpWHscmcdPRJkk5XRPWGvNo4NgDac4oGMDPuycwahHnwAvxbuN9viA9sMCFVPpm",
  "key7": "5Tvx3ritE4EY1AMpC7ownaAWcoENwZ2EdLc918TwBe2giDuKhjbE6ogSwC2k1uBDjQ4oEWach68qFUPGfvWA9qtA",
  "key8": "b2CN8XYqRoR6B8LbLXsZk9v5eyM9xzwPGkxkSaQhy8dL5gwHURqVzkccBQUcbbnPyB5AeZmrTaZL2d923bLMNrr",
  "key9": "2mGecFeGpv4uZyYD1t1SceF3yAtp58i2wD34rpqJjxHZQu8JkLb8Be3ZosMYriH9YLEgxJ2aZvWEEjpDD96ExStZ",
  "key10": "4J2bB7aeZ71pfc4ZpPBQhvazHUDqB5Qe6nHKbFAsR1e2GxgCwnBhSC79dnBi2v8DtKoAube6P2PaLY1AxuwwvfcK",
  "key11": "3WU7xXBeSAt8A9SSb6XzdiFTtWZ2D5nFs99TVd6qBUxk9zyP3nR8FB7me7FUNsiorMcHaj3jvbaktuNkzG1Za4RZ",
  "key12": "3F4ZTKX14X96tbMywH1wDa2nUBrZwrxtzHigeL3xMNtbbfCQCZ9Bd7dWfwBGPgiYWwHUHorTVSm3QEjCTL3wC3FG",
  "key13": "j2mq89FTFXk32d6QtKw9WfEPdoov9GtA5fwPjRgn332oyXiak1rY88t37ASBu95mBFgWQwF1qMMy94e9kCrcbb6",
  "key14": "2Jnz85BxLfYpbXLwyHbfePn1YU6BSRoZGgdBjWmREzoaTeWrFgyQfLnokx2CBf3pR8uuExAKd767UmrrRr1vMWm8",
  "key15": "VYKRqsAzbYMZWN2xXNqDJYTiFSyjtnbNUxdZDFLssdkmsdHyKmCzWzWx1cL79axzT6b4QSAb8ZFSpLcSW3AuKTc",
  "key16": "5g6vQmG44gf2o4rViZudFqcLhvMbqJPNU6Wgd6Tj1tuz9nHQDq3wtLPYEM7FZEYzgmGD9bpMEdQspnkudaPWtxuh",
  "key17": "319UYACXc7t6EZHGBZYDQRwg4pycbycT4J7R6pvLyAjNDkbaV56putdjsrcZSXemX2Wd9ToD2PfmAXZBzrhMzcMx",
  "key18": "574tLZxXtZ5qt1DB9En7rTZjd3awHas3ygos6FEXbsx3UA4gvjNV7BW4Subcotsdth4EtEwBMb5hyUug9ao9oEo1",
  "key19": "4pYTL59G5f93qpLGtRwZ3DzW12nB1Fkm6dvaXfbsZ5DerbWeorkBF6kT12DQdUpEZ7DTruJ2rw6LBm9UEh8Q84pb",
  "key20": "49zP2vTFsepDJDot3sFY6UpUn9crrWjTUcESmVnSg38sB6YxyLkQyGJZi3nD4sUm6cHgAmv1GD7ZajaPNjdnC5bA",
  "key21": "4km8Yn9nz9VmXmJ3McgaQxsJFjZYALrtATdW9NtqWKgzvAD29QJ71CeFjiB5VXd8e7YxVXQBKfzRx6GtER3yFnpS",
  "key22": "2tMh3j1mAvV5Dit5uMGHNWZyeQ9QyJgJEfup6Hnu2BmyLNDByFm6ARcqie56ccM9uGk8XyfMcGnrY3Gv5Q4hs6WF",
  "key23": "59hR3PZTWQSyV5XKLJMkeemxCmeCCPMVtzZq8Arxm1JDFeQVnNSf23VrWJj6HfUwqMq5dJJgeX6DSCrXtxEaj2k3",
  "key24": "5PaWLRpxjMNfKYwpN8sN9Y52SuLt6XcSqvfWcyYSZaFwbkKT45QJGr5tjyyFCLz7YUW5JUVDoj196pYktto45adB",
  "key25": "2kcPQBb4RmNKMgGuy3cXTJ7xKYGMNF6EcJ8cgWTh9SAoZ36TtEKNp5Qt4HapZoZ95ZgUz47ZZW4E7K6EMkgSNuFp",
  "key26": "3fn2mRrRixGtpB2S1ozWoUkWAnguRgANNvchrqXtWSfGUQD2YNQfszhA2YPs1Jn7kSgwGcd5yyxrnSzcy3pjYYqS",
  "key27": "5BA2H5qH4aqCNRsdaG371Mt1DNJ7bqKhVfgnqETkHwS3DJXXEcBn8fzWRL51ZWXUAdhLxHr89oZAVBw7mZ56trVT",
  "key28": "2DR1raPxeXZUwdshZvvwmg9rLbSmzVa3PywYwMsC15z6Ee5aD48uNAqFFwsayiEywvprefjm83r3tMxLzsNvxXe9",
  "key29": "THK9Wp7btpT3B34sAz59JAFj3vPnESYEagrew2YgeanTWyyrQWtGQQLF1TRj5PN6n5UqroNmDx1AT4L9iuRf2cm",
  "key30": "2VWwe6fpnKJqoZVcngL85Gtghaqp4SPyhJo9H3CLAYfTJU58DD1Cn5eUoKFAtzNSQRq7JQBGdTsggr9BCDEACHxh",
  "key31": "ejCXT4hMKVdvVt4QH8BxqP4BD89BKaJaqi2rbsKX66dDKyXgwtZ553FQitMKvXjEL1gMFFji96RbHDwYm6rsFjC",
  "key32": "4rKPw5M6Zheh1PGEbn43jnzxLPCHb53QxZTE7qgX9tjHeCyXmWadcpa7oxJvibSVaUrDRT6gVAoH8W9pjnbahFbE",
  "key33": "5bZXWhpm3A6tV1ou9CtJCeFMyTVU3y6RfBXZD3SpzC8AGvJhCEoXUG13zevThDcYWa1ibec6R9F6hfxjHxcqJ31r",
  "key34": "4u91tT3BjfMPX14x3pRbjnKNHhsFfdyvD48ECC41Nt2nuZi7KSsxXT12znw76JfYG7cxNQ794WB5wQshYs8ZE8Gb",
  "key35": "3zLCCisSbMxrCKiTpLGfVJSSepaTNZUsWdfEDpBAU7SK7oeZdqtjRJwAdxNZjPrUgkageTGzX6w9qA7grLHb3bH1"
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
