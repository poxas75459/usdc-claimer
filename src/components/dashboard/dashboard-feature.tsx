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
    "4ACCi5VyouHsV9aweMgWSiQr5nb7QRpc6ZDNqXjnJdhbJvCGaJpn6aFm7fCBL2k5x4Mf9uDYnLD5LZsRHnrY96Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JzEcfTdkXVYoWUMGt9Uj2dyEztkb4Jwx3Hf1oNomq2555Gc3AiduFuL3zagw5BCyGDXp5XooASXpsHYggwvmMPL",
  "key1": "2nLrgEzpbSfPS25G6qBaVqGH7qGGmp1dc7o9F7qThPnVpKDKjx96dd7vEV6N61D5SAWEVMs3rS3wMDDk1Ve6Gu8J",
  "key2": "5NGABbQg6b53Tjc8rBzmQ7JryeHvtZdUGLEjVUQJntY3P4XWRvejXaUK14nRTVLLvf6uZ98n12acXWd7hr9dY9VZ",
  "key3": "4jAdtsW7MxXjpsvYw87ReyfZ2PaMoi3W6tddMsyxtf7NkYVa877qgdsyt9YU5VvmwJXLCuCHQRDXK4sLs3kZNqHg",
  "key4": "31wT7EPQftXsKrFrhKqcVGT73TMMwb6a9JkWqrGwzpY3Xt1aszTGVHAhX9MbviZWpJAFGTpW6DyRG8RyKDjdTByi",
  "key5": "ZDSs33YQJfwcpanbRoeJStjX1EBYJnqFERbFyew7RksPe6doiGRk6SHNDm4j8QD5cFneY2tUP7TUt3mU6Bhmo9A",
  "key6": "4FXcDYR4rRd5hRfPjUYSHzPFoygbuaiuVs1n5xC9rZ7L9fhy5KvcNVTW56UdXRL6Lt1q8KQmyedCCkU6HffnbJje",
  "key7": "dR235ysHqj3mZCqZPW3T4tdZZLxTeqhJ1uKyvAY8Def1gKmDiHBDYdiod6NurjjCZikAKhsyCSSaGMFBw9LY7bS",
  "key8": "27KWmWWRniaWKomH4bdk1auvWJUHhC5vpaiHqwE1gAqrXanJ3gA9D9dsY7s56fVkDhKC6V5xVJs3LfQXnB3yJUcW",
  "key9": "5DZy2kz6HzCojjGk8a2YBeHF6AmQ1oRr4dPvUTdygfKujmHvjamDGPhno1KpsSE1SpmTUMsyfJNQ7336eXvEVgH1",
  "key10": "3oJjdH3iR8FV8wo9wEGq4ss8Z8s9xd3nMmL1VMpjZffRi9Nad9CP3wkY9feqW6MffywLgE3rSVWVZQeYzv87B56m",
  "key11": "5afqWQfioBGbPLbFm2bH3SfDyFDPEa8vkfxE5nKgBeFJYcMPJXtdSDXkEwvyHA9kRP3szJxM4MnAL7uUPaYSGgLr",
  "key12": "XpYm7x7BAts1CCRZ6VGtwEzLERRr8fDtjb8tVc18R6RKURx5gxkT2JdpuVc7Mb2P7xnQxGNEjGxg6voNKsRnQBh",
  "key13": "41woDLN6WpVkuwbBVuAkUnEmgm6MicuszM8AVmg91CsEYEJKwpjZ4KqZKqsb69XCFUSbZeSBGt115evXZY13z1WN",
  "key14": "2JUzccXiN4tm7GghdsdSJzVH7NePRsyuULfJmgRbMcj1eghrY3nDxkKaRTVhL7DD3r7qgdrGYLwnpFWjySPEgp7W",
  "key15": "5eoaZxJKFpHwXHZ85s51pg5GF9AuTqBoBXH5jw3HkEdSm82REdKUEcnQVdWfbU3yjEDvGyHbeeTY2PqSp5Wroum2",
  "key16": "4uWagpnSCAvBNr3G81U9FBcyEPMJkCiWR517xioyUuZtSRdALQYPo6YP2qRjQTqw8bz9cVFBpZAyWzvEJZg4nuqg",
  "key17": "422BUVwZM1wTe5p65sfWLasvCeZN1gmuSfC5PCsTARuMLUhxYyigLV1FKQPbZ8zXSr6xDu4HioJgcyfHZZ4aCMR8",
  "key18": "5L4cTe64GAhg2XnbDKYrpnUYYGmm2LaUb295XwSbWgaX28f3xNeUbksTNQ2h3y2okd8fNynCMgE1h7cEyUSKCp5X",
  "key19": "3WcdEc8FcpcFdCehcAYGWqxK1ohr7eJdmRqiTnLBhMGZKRT69YfaSx2RX2Uvg5Ezp93Wst1DSyKjCJC2mgpcJLX5",
  "key20": "4DoMRZicyVYTdYSeEudyE5LJwBsmUfLtQGa4qWZpkr6jTvGikAU18KHPmmoBpHgeZjmaDT2WBbjHo1MMKBhfwT54",
  "key21": "5xqNeyh8f7drBC8qARe3Y67J47DiEGyXSdpW4S5FpAynLgj9KnEZyC7MW2j9SJeh5vQghNWzxsRaSvQwsVBZmh5b",
  "key22": "38YGQvZ9EsURfWWsKdvuuzJosvcsd6NA1R3sJJxoZSiHujR2K9LanrEZCGcTdDquKYoqJtCu9ceLEuBFMJeHwXbL",
  "key23": "4AfoFkZVJzXY4vjFu2QvGfRpRSoGNon1WomiT4zWja3RAXYjkKatpQLHf8vpXSmb5ynLnn9ABY9KJhV38EGABCRc",
  "key24": "3ZAobBtuRB7PaiWLr4KNWnuoxbECoeWULUQagQqED3nT3DkuMiavz28TbtMkkiDKXfy7jwrSZFUzuvU7WAe3H4bw",
  "key25": "58k9SzL1EUcwjAYoZ6tvqqAwUVWzV9xoisGETkVsGjz75zuqQdGBtBsKbfbL9YWEqdqi86S99VSw4K85DckwXs4Z",
  "key26": "2unJMQ4mp7cVjDoeXcPkKsFBYdDRcdSTpkQYznhX5thEZcq3FkgUDxe6CajAMLqUhs3eG6xVPEjKi6FQAdTfPUWq",
  "key27": "2jp2ySZKTRATRmAMYzrBywTKLdzurzoonArLBoLbpM4HNqEVJwe49abW7o7roBgiYjBuxiDCEynVYMTBLpCheBCG",
  "key28": "DraywBzfSdFyYbpkYHiSYqP1w5BRsXdiPAdarMTN8zZxwoaXxAKkSKmJfVTQBLgp2jAvcjsjSDsKgUS4cZCYeyg",
  "key29": "NDkWywhNFXc19ctDSMK5PB1QF81C3TjWi2uhnEfmXRjQDqRDdh3Kiiju5MzmpcNNzLkC1brQhDCwUDJp5PXLLMC",
  "key30": "28uv61dh2jsULiPxk8izMC7cLRmF1oJzUJNppNiDt49Mx2HNbGRPF9n9zv5eSNyFnbAUQwwnUjq2cpZyHFycyUMJ",
  "key31": "489GoLKjtWLPTo2nJS8w4gPwLV6pxJ3rtXUUKQaTcr3hT6jejKpuduvPFANeH63fpScPVGJWGsyxZX3ThL7A5GxY",
  "key32": "5LcojGe9qmvA5txDundWk6YxjP1taHWvSZR93wLsL92yeQoK4yRQ5LKgATiEGzgGnXTDVEkwCPE46KTMHb93y4CG",
  "key33": "55vRu2sNphkfME87A7qmerW5BDm5vcewUYsbYmnnbi7SoQmcgxEwzgLLdDR4h5XzrAFetJK2BghvrNXMk3jxE2pr",
  "key34": "5jb4R1TaMy28VptxvfDz2vLdYZto2tjSpjCvxsrqdtXzYJdhGCSMEmH5ptRVpmV7nghNAkJ2xcxZmiBqM6xTFXus",
  "key35": "3ZfrTQAMce8TgwgDngx4HHxPEmL5pFNSgXptr9vLkmhD8xedWDY7snuNdvy4YxaVYohxDKoRCCoqZ1qy3862xyit",
  "key36": "49fhJ48ojABrbtepY2ziUrrPrpPYr7PP6hHiKghD3pkbRpLFkiHokFf6jQY353LYU4SzuXUzUQ9o5xVQuQ48SrM1",
  "key37": "5XHeQd8kPiq18a9s3T1gSt66CMNF6n518Tq1Wy3F8ExJ8YzbYAMhRmySLewkCUPvGwBvjho4sxa67t6RAXC9yhQp",
  "key38": "3U7v7jUpiQ3vdXmFqorkmGh7BJNWP5dZFTUk1mitQJCLWeJ5xGLsUVHyvES5KzpzAt9dUNqwAyCvivixonVtNNS3",
  "key39": "G4VfDubn2KHk7C7pXCYe8kj498BK7k6R34H211f679XjASNAnCp7WaBZqHFZuEsz41gqjrNNBQ5jvbT5jB4gnXv",
  "key40": "2jCo4jARiMTsCimHjnP45ujtQy6h5DxX3ffwx84qk3Lkb75mYkDJEfErqgnhvwPQ7QC6jYREr8mmp3HWS6A9Mqoj"
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
