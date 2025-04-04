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
    "3iGUPmHvyMsJ6NytDKAc757TKgn9E8ThQXrPbQWtKZQ68yom6mx76c24EtUW5kcudAziFuo22SmTqBbTsuvUsDKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGmyHmdzS1fBnCWFrudkLBqfV2rd5R7r31NjZ2P4aoE8XnsQ6qm3Q7C7oS62t6bbS2Y7fLKxvvErdCDN5iVPqGL",
  "key1": "4psK6ZU9DEetnYRNibjd1zC93AozjPR7un6mvXbi7eFXH3zQvs8c3WnT1jBaxWBQSMQfzqKtigqXjrYsEfx6hYqR",
  "key2": "3AbNhQLzvndCQfLZGrMNN17qyRFrLZngaLdY2SgsCErmb7FJD9Co2pNRookSrTuxYG67ZV21rBFF5jaMnGkdPAJj",
  "key3": "3xzosbnVebz35RFXEjsDLtikzKU4QpPoPAb2nYnEKg6dLGue41dBkiEpetyLfJUhgTRDfZoeyzFkBzzgT3Kz8tWs",
  "key4": "3o2hXBTtHKeNyjwPoKZLtCwCaucLXjpeUYW7NKVmnGkczdNzqRsFr1HVZg9Sh9zvF9UMp5Tg1WoGCSZ4aRV6Ur4o",
  "key5": "2cduPUw8tR4uS1KBGWJ5YcK9FKsHL2aMQRRRfjAWqYYqRKMQmYYLo78VG1EcKjN1soqobeGj1wyxLWzKC5ncTAyP",
  "key6": "321DYXvfWsYwXwh7CKGs3U6NXJHFDAksETMV8qLyUbAXAp6PL5Yn2D3xQVMGaKLafrUhWDWWKKohuzn9HYrTSm8Z",
  "key7": "5WrAijLFq4S2Cdctij7RWu7kbASTwYGtKCnyMukfBWEnvc6LF1hnLL1uZ2kJNgEUR8ERpKLwnVxC6eSk3su9avk5",
  "key8": "5z1HNu3tEC3wTgtTFpVve8EZ4ajzhbKZfTojjD4dAsXPwGx2up4fGSeRHYpvzKxhi1TtftajqBmwDmkLyjYv9cHo",
  "key9": "2FrVRHrQku6VzESWUFga7tTWttatRa137YxsFYRwmZmLgXiZoGsb2axT6H91okhqvwPU6yhqTtL3AVFnfL3um39H",
  "key10": "22RUFhBwwidhiZTJc5mPdroRQ52wqrcGWrwB97jwyyKLyK3QNggFYbkRzo55qr19hh8rsKTft1us3TvX3fu7rFyP",
  "key11": "2xFDrJ4gRNUnSP5cwwK5qqKDcBJb6JAsLAf6mYoKYenvEYn5wZwvQgQQRdZ3kgHGSVWEGXgpFxxDuBBWC8sBHtJb",
  "key12": "2LeaQvnGSJd4mZo1kHZTP4hsn9Pc4G2Ab2LJavwbzvZUY9xV245dCdcgKCfXnBE97nndLEDmVqHioZN7SamF5LDV",
  "key13": "uAe9aMT9NtWQzopFL1s9EsLzKMtzvXFJQbHq1PC4Cgz2emf96gB5msXsCyonXgSRTGpmC9NJdsdUc595LB56KH1",
  "key14": "2mwLz8NTKMuZVQPnRvgvydUju1WQbZ6G7UBHyjvdhNwNTSkBdWUfFYuLjFa1Gkn1fiZx3Y7JwHM7HB6v55zCgpDM",
  "key15": "3oVBKNZw4HfxfvWiWu4mgMeuFaAyHjFELeDNobrcwEm1MhrKxYvJiCBBEhxAtpdiPyGSVvnXX9FtsmjWqpKk8iR2",
  "key16": "3d92P8s1N5GXrZ8UP5CwSwu3feuFmcWPNb6afXojKkNEU6ex7Ere8bsTcT7HieBtVsdHCnNn8qJXprHYkoB6HYE3",
  "key17": "U6tYjZtswqWbDnkpWaPg6Q3maN6EDUbcnTrprVUBAnw9BCy4ZBtjDbxqqxkKU4dt5nkNJofUHdnPUsQApshg9T5",
  "key18": "gTKyRHr7oLk4ptPdY8rV4jYw8Nc2GE3BEtxhcPEEbPmJ6B6CKu3Z66Uy9NBed9qik1CvRDdEBLVHHnip2wkgH7G",
  "key19": "yS6KDkbqk1MUME1gnRFxun1CyyDGP3kiFw6rW2Xu4U1haJmcfzYVA9SDwQ7sf5AhLZtQ4gRYHgLPoPeGT4MBPi5",
  "key20": "5hSDaH3ZPhefBTCqhJFENaewj9Nix5z8tdCkP24fkB7jFwmeMebBibPfWu2hKLvwTTxMpfCMDYCuKdKq5H9i6z5C",
  "key21": "4zK5Fcu5jMnpVRe2TCdKUc4e59duXR5h2EQuwnmevCNWjLsCbmM6EQENKE2KZrQj9U18Cr2aTq1xq3ajKRSKtZhK",
  "key22": "3vtq718pPvfAxUgJLE6xFVrAVRz3iQj2EFZ3heQUozsYanJcFGeSshmc2A67jo7RvJUTwAb6uujxDMUmzF5RfwD5",
  "key23": "2G3h8FHmVVwYw4SBKqEWb162aKQgDFcPxWWPxxD5YYAQE89MNBVSQhTB45uH4FrufzGfp6g3RLXoDUz34SXsATiw",
  "key24": "MirvAkgxk2Z3fxZBUc4NTuYmE1CwbsV6ewcRS7MsCacfVm5B6utbdTgoHWiXhA47nnna5Y2T34Xi6PHWseM4qwK",
  "key25": "53mvj8quaotgAkWfTGnKL3sVsvBW3sdqU9Ea1Sg2HQw83e52eSzj9gWPenRaVEY7Q694T96smKvHjqVfWwHkhvbA",
  "key26": "3aCtDfbYjwZMUjXopXh1KLe4gif45zsddtY9g63H6XCkhg237xywJ8bj1Sq5hDF2wpFKRtb6VfwyBz4pkUvrNvXs",
  "key27": "8HmFkydjMXiTdFqdP9yDkJBCgTZto718zQFmab8Y8m9TSLKaGQ7WXhVUWpZCgwyYzSaSkY1faR8gvyNmbiWJZrS",
  "key28": "3pqKHUCLznCWRED5FwEXqSMhVP9y4rNviwYM9uF18w3PmgWkfFUBLCxpBSpWtnSnJYgovTzh8JwU1d5r4HdrEG59",
  "key29": "2WapMeXNSCdvM9yuddP5Z96xa3A4cJ571H3WipLgohCFnjb5b18TtQ3zQj6Bv273k4A3HPLLLA8sLQ7w7Eu3QNPh",
  "key30": "9bsPiPSakhFSof2r4obpBxEAewuvjK8ELgSUSBiMYmAmPxgcNVUgVWsubxT4bji4ccxgJUNGcquKJVGvLV8A5Wj",
  "key31": "3SnSvFkL1c4Kq6LmdjabtyFrnmrSpL3eEmJb8wYY3oTW5ghMGC2pfkWQnUAgYgrF85GBVwJVsMfpt6MCZ2y8Rm7E",
  "key32": "AoHtPWPBrzCdr12fK5u6iuDRaKbgi53woW3QxNS7CAVXxFWaMdtjRNU8u8sTAj6GwG5oVZQes1B7aPAx4H9kwhg",
  "key33": "5iY8ZXofi75Xz4R5WWy5DTVxjigcJXurxkM5NvQQNmogmVTZFnMXPrHbYrYrByEfsKLR4WeiwqgQA66yeT6vFWq5",
  "key34": "4Afqh2o3NbqQ6MhigiQoAvAykngpU6RFaAdLkzaZ34mhhzLnXC3R1d6Vdf1P2tvEVZzyPuXit7qFrnXj6Z9QgUCB",
  "key35": "3J6dWX57E7PsWZH1tFJj8ttPKpNaZU5VA2tBdqbjcMxDxfLhW5DzDFghpvaZaRKshRHwc1WH7ZhM5RPta94FJrdB",
  "key36": "kVQc2NMMizp6qGLnjK9qseXg7Lktqg8HjHM8iRPBDyGZtn11nqYRSV2QVmuhid4Mk74xR9FFuGDhs2F4yHVNc8a",
  "key37": "uVE4PVFphi6XpqA1sykiNUs9iPovMbrxRYPgqQB9XCTDXbeTeNxMSyPMNqFvyJa8zvdq1mmJMR9uDPKNJZSdoxh",
  "key38": "ViEyR66sZExNaPXk5eLgme5rWmktqVFWK5hXbnhk4fUFwAJUdL4hRJwLnZwujBrTpYxjy4mydnBHnxB9QziM6Fh"
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
