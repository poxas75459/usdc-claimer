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
    "2dmntq83Nre5zswJDzXBUa2UdBafCRDUHePdPDpxe3AtbcRcFZMHUfALRAnPBuL7y3h5GL32rrrvvCqWkRJwyvZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSbbZs4FY5vAZRJJrU787orgAmQS9Zqbk6GveG9YL2PNo7yNaQf7WZnbUMDmKhruBNvDssz32b6yATuUxwd8WWo",
  "key1": "4hHSQJz8F6wPwWc5Y6NFx3xfQedpx4ALD7Y8CCzvvPsRvp8iijJDhtU1iHLm4xZ8Gke555uPpzLhGvUxUzq6tNr",
  "key2": "4C5aXoH1w1h4WZWCo6zSoZLgtUTx91atEjDsoByGMiAoEQtUEw9zQc7FuTzNdMrnZ1P9kK1nK2EK57xCEyoAg1XL",
  "key3": "2HtfRR4aCLtrxkxchWtBNJP8a3tEzfMXv3bv88hirbfPzwSNXdT2HziHTr2Lpy9mZtmRpFUZhGUVLXnpBYPHGATw",
  "key4": "3qsJ9f2yTU4CWHawySb9LMevYBe3ACCHJmEsTfQ5vn62d2ekztWkXQtDxzDAADZBd7HQ1cfmCsRvoUcaTjvBaniX",
  "key5": "WUP4eqEVWhMvVAnB49TkURGT8vhg2kBfTeXWohT7g9ufknUYhe5iVoEwJ4rB7Lc9hAb9zGFujATACxAcGHGV5aX",
  "key6": "vHvrfdAF5WuNqgYgUn79pRuE9Y65Qy1xcbqK2r1ou486NdMER8JmAG9mMwCaHkBW64TdC6WVJu8BfDugngHoPto",
  "key7": "dqxaYhgXB5Ya9cgMW6kJTMhb7HfiY9GnBr6GcSB6kf4SaZsX1tUUtM9urtg7ZnYYo5CqDqavSAHQkdW4wqD7okd",
  "key8": "5bjc5VxsraabFcQxG8244mDgx16HDyuerTeeFEp2CzkVNG3He7zV7NiDV1tFopNNSbVYY8XCgyDdFNspYzpgDsSX",
  "key9": "5d61MQmqRHBXiPnzF7Wd9o4NfjF4WUacJfZZfXVyH8abfikzmwS5gMs7gVy1fGPTzZ1XBzejBPFdrfomXFhEKu67",
  "key10": "gCQ3S1JaU6ACK4NQqR342S6C3tXKV8owC2aaKxGmpZzZoyAH2p7M5VZQBz3BUagd2mizNR5eRg5rYmLmx8r8mwp",
  "key11": "PQDQZYiQGV9ZZpf8PeFzLjudBPvGskr7LkNZPwzYKqUWUXiYHjCEKMmh3JmpgDCPezncEbL41BAkbptKVEt21tQ",
  "key12": "3TeqvK6K4MzLfBvUXBoTAqXePASqB9fAZk1YQvS8jVhgnC7ttZCHaT9aR6C9gjCgTHN46rgqhQBFWVKdLyaWL55y",
  "key13": "5Fi1fNV2rx7qE1DaiddYoz1AC5WGFuxm3qagh4jKhSmNopcMoLd2GBXtYS8NNt89rLQr7P1cHmKCxoL1tfuuN52S",
  "key14": "5XMgfV4DTKUCVgZtwNeSNz7FRxM8D4NCW5xn8acFdKvwWwH4FHuE1XaEfL65Rk23iU2BMGsY9MWomcDagkrEZ5WM",
  "key15": "3vPkviFE7TX4T6EcF4PC2dBMvMquCh363osUZ68G69qKuQVUomgbPYUaD2QTLj68nde4kWKkvi6QgJD27sPy1Lzn",
  "key16": "5VDoMuhRsxfJT6KzZwgNdhdKqkGXyguyU9a3AQVBWhkX5DzZktRMzZkxD2vpdGDysvjvN4JtYy7zKpohqYLL2nnn",
  "key17": "5VYcRoiTQHGCbEuM69waUG7xXMyAF4PGYHei7zCG9n2YuYoTLzMTCPPAQP6dbwmTiChvdedUU3BbgnZ2MNt7FUg6",
  "key18": "2hoGGYeXfByGZ2NyMNKnCqrQhX5WAaPTvQsrxGhkMUoxDgnD56JNjKTWnAm5LAm8nHfd4nuxbGCzsyeo6vn8igyM",
  "key19": "3ViYFWTXfpPhdaEZGUghhvYj4vVPumZrGcygxbv44V2PKEW3hkYeqqKgdQ3B2y7q1yQuccmM7JwCbbapCRfWe7XY",
  "key20": "62Jkjv8ArYm5DGwUWc2iEPNAwtxZp7DRDULekrSCD3KAzBSkcBPgXZrcvPQvaKhbgssuwWbrnLiPw3EX3FdjcNj5",
  "key21": "3D6esgAxiR7qGAyTFXcuU9dzp4v5Rr2oBdDrXYt7wfJJCbFebcDFFNALPX7iJW4mKdkxuDSHr5JUPPBUiMtkHDAb",
  "key22": "5dwtMkiDHpZM9QJcpRnAeX4PJB671p3mpfYcgFBJRbtzr9CeJ74k5weYGY8LeerX8JZYYZTKAhATDcV4yZeNMgp",
  "key23": "2fErdfuf4tn2kTy7vTB1ca6S1LRZ2923TVxKABmRpYLzEaGUEYmQqvAgGvuFPnVNmuQJxe1kjzotnWDyz9D26ewf",
  "key24": "67kWgWcPSoRpANcLRWSG99NZ3F42aAD1ehJkm62euJXgJT8EWj22xyC2aHDUgCnW9BHjRVheAi8Ve6TD3jHPPbnY",
  "key25": "2pcoVJsEHtH6grKBzAEvAHLMuQLcPaFpAYCFnXS2TbHey1E87LtA7KTaRsrrvCFZpNYKxRETpfYqy2jLdbbHAmfL",
  "key26": "4FpFpdbqUuYqNNbe7GV6g4YziyJp4q6p6Utus5c7EvB3245htrhgR9pMuLvMxvwBSRXGsjQCpSnAEGGyR1gJgJTW",
  "key27": "4bg84d4m5erXvo3n1xan9JgUvcscMdCckPuJA1mxbivDHD5tWxnqYVAUsEBcJgevTV7Bxdr3pgaMntJtdhCkvZf4",
  "key28": "5XPjrPy3c1UctQBQAyVTu7jKe8fRJ4ngLnouvjJ7pkfwJtNB7eZeTSnt1jWb1sTrjbPAPdCYQzq3s9EokELoSkJ2",
  "key29": "2rURGGWMdV8wFujCJDfKwJfPpwtP5MuYzHTXWxW6T2mqRXaTHNxq1CYRKBWPQjbdTa2BFwHJdPztp4gp2bViALCA",
  "key30": "ciactZvCMEGc1wbfzvB9tRxEb4Sj4ss1ptXbB18SUPcD2JXxPyqao3PHTXJrM7ShDVoouazAvL1ZmSQ8CwdTaMx",
  "key31": "vU11VFzcmEm1TMnARmMt3CRURaghsgFA8zAtQ1kk7PqmEzKf8BoPzmxPxMyoUTfb8buwt4Z2D45pqgcAkwSjnp1",
  "key32": "4Cai1UYkDXLMNGTYA7zNaRttQcNUe1oT32ozSo83AU4rmEuxKL9esPhppe9YZc4pwL65VVKMTSBVAVhH3VLfrPQP",
  "key33": "5BjzwHKhauPCz8kNgy9UQdMG3475YcvrGQViATDVXfGAxsoWZ1ZwhUfyusBZ3M5sn6ft1Wv9nVDNwAHj2YbHi8vM",
  "key34": "3VBm1aFDkGraha2GXWeRNQS1SLBovUqrjmoZ9uBi4vELNCJWto5QVeh1caB5KWiHfNpZoSrfErn58gA8KGf9w2yi",
  "key35": "5fuzEn4g3fgRDx69nahoXUziKtzymj8ECjY4dkkzsbpQARoamJxPJeoShJnMpfhbQReEGKJgZZKox2SSTztdzrri",
  "key36": "pV5g65qmSppxPpoXG5ZrisLYm2y2neqkmrH59VEghwfZ9EtcjGgAiu913YrzoW3SxFyb7SUxMS4P11w3yrpUyK7",
  "key37": "3pe1nj65cUttHfKKtEy3EZcLEPTdnCbbVXjG4fmN2LaEiSTq1fp4xeRpRUegneN1YB7wiPv8ZEqeXCStW7RQ5ajG",
  "key38": "57EcBoPhdwykRZG19Y2eqwyqDFdCsZBmnn1WVxxqKDxQj6oNcAkp6jwjGqYV8BjQEm5zgp5LNBBCCRx278CrifaN"
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
