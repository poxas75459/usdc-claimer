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
    "2ghubwTv76tGCLq5kAzZuypnJyyLPHbnA14ss4PWQYcTjBBVy4rdAcNn8K6g9FErPsGdz9rUKgKCBg2n7obuYuR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEQVhbsTZZmuovfx4T6BLKTn8UQjn9q6FwSrZEkWJBjYx8KeJw19xNGcFBv8coVH8fZjKGe4kU4Namu53fDoDBh",
  "key1": "5rcG7M7VsEKavNr8YhFHFx6sJAcWA7YVYPQM3sS965rx2vfQPJ1hGycXeSDwCuACWGJ9opsXJL5M6iiunSr6wEbZ",
  "key2": "3P2T58qHHvCAPBuGFswPuY6pwk29epSsxnpDFcZTKt4SNkmKdcdv1xdG9CwJ96JeLD3wuhwk5uUTHbgR1GuBbcfc",
  "key3": "5SgHSnD5VZxk5Hk3KNXv7KZi52VotnvmSyvXmRXpv5X9FAgxPwRavj4YBgScYQvSQrJe3g2fdEqXNLLxZgNoV4yH",
  "key4": "3adstzoBFbd7KiguVTup2MwETpcgpVmaKte3UKQpggq3noYR2qjJa1MXjazr5zBEVS999rQmJFFhUJZS5gpnri2b",
  "key5": "2brcQUxPFk17sGRwEcrY1ZtZzM5D5TsTs56qtUjDTjnmUiAdAsvCqmdNdxGUNHhSnsGhDo78FgvWdvEf47F7YVoF",
  "key6": "2AkH2byeanuyD2CZsvKQBgStTmVNGHskpYX9DNo5bdS2zM7kiedKj4ckkBjFRSXRsCqNhVc5MEDQHd8WPG4NKVyR",
  "key7": "3kdHkuH889W9DhAe8bfEgx8JpzPPm2Xrw6jJhpfGqHeqUDFoGWpXxRytddp4Sb3Z4wMECnxfmVhmCWdkXDMxVgyE",
  "key8": "3Ni8VDcynubstXKVQQvtx9KPbXr4icdmxymBAxN7qE37C1TvFbZbBfwwk9AvKFsBUYsw3fa7VVfqa6N7abp2CN8k",
  "key9": "33RXYiCaeKvCYgexQigP6zCF6omB4K1MYHox4UxJUGsSQSg8PzheeBt8zTC5x5JG8uWneJf24zsZZzk4ahsuUkXX",
  "key10": "5xSoEvLk3k1g3PE8xswkeNMzshZ1fS8yexs7p1gwhPJqopJT4RMrhXtxpbiAHBmLMsBx1UUZksdDbX9gnZVNJcCx",
  "key11": "3cXeyX47x7b4mwwBzk5ZHMf1ZjBdMjDrYDz337aw1w7jYoP2A8Crebxxgxdkuv9QjSXgNCaht3fKEx3Gqh5gWHFN",
  "key12": "35H8zx5eZvU8BdAxaAoGZniXdMGjQSBY12MPdDG2XJpBuJQnffXafFEbz76hLQXFKwHHqoucmqJ4ZLaZrHDhk5LR",
  "key13": "JYE9msiKuphZiyKqrKGr4DSooUNjLooJTCTkdibMrK2s1MZKy9RUGfdg5abtJuKrDQjUqXqZG77tVKsRUPJMxPY",
  "key14": "3z7HC6e3dqtYzHzT3VMQ61PZh7yQNBxugYuKFvHspkiQemUAUc8wdqyJxNAyLH3umnjuQhSrHTQzuGTnyPqr2cx6",
  "key15": "3dUNVao6Ncd74reKdqRG3feFCAZzyFSvPdEncsXt8Qgfk2QRg6P9mqTwtBcEFnnpEN9DBJFmXhNefKbQs5kwt3Nk",
  "key16": "2kFjGCLhyXfhUpWzcgbxnGZSG4fzvifqfL65r2KZt1naLrp3qHS3SmU57unC25nFW75koqYkdBtZUbScGNeadCvo",
  "key17": "447A73CgUGAWsSexHuDrhoXo4ZB5z1gxN5DHLe1pbbWoad1t9tBSYVYBDrXWYhBSMbe9VkFvcXuBrZ9qGryfv69W",
  "key18": "29pJRBFJBPuH7LFfLWkRVrozkgVdkEpu8nJghn868WuRspD1EvFLRHqBcdxohmMssFZfgecF18Esz4J4yAtL5AWy",
  "key19": "3xxvpEcnt3NdCB5VEcHQ82wFV3nib8qWZdijhJK9TGZmHCkwHsz4AEpsYrP5RdjD7xBMUQyTeLLkVuSEBVWR5Wk3",
  "key20": "4vqLxAqFhC1VrGax9Ucxj8FMefEoDENTKpzeAoSdQB4yu748duPC22m51pLBXVgWhSP9MrSg4gc4C9XZ46GsK8en",
  "key21": "2CwP4qXKzKNjUvMFUSePMFDtngV1MwXEZfDRD25APNnbapbcwQTN2Mwet7QwuY2rUgt4nDPwYkpZrFYmtD4vw54T",
  "key22": "c8GWwSLAKSYWybmu1GyS8xDUj6g9QBJNJUWoBcgAgUm19VW8egE5iqDLFPfGJVNfV1YHN2ALuVxnaABhpVtqEYG",
  "key23": "2R5MXKNhpdnkyhGuWNkRz2kxZDhypAJLe9LPzm99urNknjyCHugJ7S3rpA7mFtxsUZryiJwkBYP44sMdsGektRNC",
  "key24": "LTzVWodrxBHnCGTKYk12GMWJ9wwPQSVx8snGEJufZU1Nx4KgU4u7jD7bViAoo6kQqnEe9fbyj5zsB9WSAXG5A7t",
  "key25": "2A64tdboyaCFdVz3Ps1uwNnCtN8dESmVGdXMkjERC1RhNZj5pb7bNknuV4TAgxHrFZnK4QcsUcMTF2TByZtqv8qk",
  "key26": "cKm6QURNp7JBECWWdayWEAMSWESwBXeQJoqbm3MrSDJehtD9cAj4JqgdTEUvqrDVxTsLCbaGZ7vGKDFJ395JNhb",
  "key27": "3vbbGtmc3JwrnW6fLqVH82oTBBzS3jcESDNuZ84GnM6EwiiABMN8Zg7EGYX8wCwkHVVMzA9ALE39PpjNAFRLNui1",
  "key28": "2HJQBbcYGgmVqikMAiNtxGWUn6BN3aS3nCXZAaCMakYtoRmodz8LeumH4dMrUUZJKMXTnnBhvr5RzEuNTnKP3GKj",
  "key29": "moxRQsAAYyhXQzmU5yA2LguU6hEEoRG3E41d8xDiTetq35VhypDeFf4jm7L2A9CfHMTHq8H1jG3u9AbwWLho7RM",
  "key30": "hBa6vG4MTAeDmBhPXPCHjwnt5WioJha4hETurkWAZV8tQLbQUZkPYXGwVGmfmtXM5zDa7vKSHaVcKf146EBqzqa",
  "key31": "4FqQkMY99Nsz7Gacu3CKvLc3DUBgSsBUFF4pzjN2gyLwjHkCpCewDeqswzTPQnq45CTr6ohrzcfijvauRYhXtXCu",
  "key32": "59iR8KufiTbnvoviUtcCbr2TmQyXrorwGDiNX4H1eivyXVGYCeii5FnVVJLdJd5vhD7pSNHn1RudwghE37oeQAU1",
  "key33": "mLk6E2EunQBWFULSnJyfUWSrKVfboBSjexwDNLAiaXcTaRCFTnU1CAYPb6g2kUJhoULyLi2c563Jm4FSc9xqaf3",
  "key34": "4c17PzEKhPtYYhpgnWoF6ZFpEzdY5WupDqP2KTTNucf8CSnpoPN6gTufdMrCbLeqhRzcMrUNvD4kWfxxsLVgTje3",
  "key35": "2iNaTqMGH5sTda5Gkdcg85216MxDT9ex7p9KRLxS7mLsRVvMm3QKuW64fSc79GsAwmXSotuAyiCdwm46mGZNnTtd",
  "key36": "2WmMVCvxrFxS9gs636cnuEFG9G38NXsj3i5GoGju8XFpKJQ9j2KYDKGCPcrRx1jhS1ue66PzLJa9qympTh11fKeH",
  "key37": "1bmz4PKjtMrxxTA9mXcauFQoS38pPEgNwPt4E86iPsrSamz4MmHHnMZtBBaHnq5Dkw6ryTe76EiKK6o1Nb8qRKb",
  "key38": "2ifun8JWug3ozhuEJuynqnK2yBr9vkHUZgwZDwnapFtZ2vVbsRCoRmdJDj9KqBC9K5PnCGGYYPM1BjPBwwUgD9WM"
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
