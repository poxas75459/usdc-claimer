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
    "oGW61xh2Guj9rMG7ADpQ7J4J8tinx11NL7scahB613eZgKFc9K9YYGTUoQaxZLa9XaTTTZrciiKTaALvxJ1Zmq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFt1y1mCG2HMkvA7NMBy48zYpcesDbrjfsr7yZEs3J3K7JqZ6WV49e2vUpgS1SBRDBprYtGwtaSTLc7WGfT1d9P",
  "key1": "7zN9EAmWtL79aDeogfsCCCAHS7UCpfUQ3EXSWrne6CoQ4gpCCRiz5tQ3xJipmk6gixaXmACjLLRMWzGznyPyAnR",
  "key2": "3aaLhegTGKDGuscikTrwV972JaAsXAVFdDaUaCXepXGdk1A5d2HfrY2dKrrdEH62sDuREAjA3bAnKYGUjy5fRVub",
  "key3": "3DWSnsJFBQN3hFvbJKyN3R7NyH4QdriyCk5kNZftyEtHXyfiHSoWM9ACv5qX2sSEfuo67MT5PRxQQ29fZJcy5MCA",
  "key4": "renhf7jjGBGqtj8Bcy27jymjjsvKk9PG1qzTwrgEvHFq7iwdFg8CtHGSUBmNvhkc2Jn2QBBy4eyAGjYK8iw8eyH",
  "key5": "4d6dH3q7XSFzoZboRsSgvcPcPU7PwaHJppifLTcWHykw5wrxrEgS7J1QjAHPwamuXzpCawe9qizm9ABVGyt9vC6g",
  "key6": "syhr63syuxWAtCLH5h9P1sZUQUdBev2TpLpeyaUqtXPZR7e1KtSep2xUQMuWAbW7br7fdCzbAmVzcUpjAW7of2G",
  "key7": "2deDo16bm37FKEp1QLkjJy4qGcK5x1LLpFhAHmK72wdpzX9TJh4tjfnRm43GFXb95UdaAtvu9aRAJ165KgDuwmza",
  "key8": "3faA4RjSpZ6thMqdD8rwExZxjZfymW7vajFEhXaDbRTagj8G54i4LwkY4ArsPgkqrFfbUZS9F2CBFRz8i3eBRUz5",
  "key9": "XhMNAhcfHMDMjN9K1zDRf2tqXNx2Vb1pHKN255d9gBtBoMjNavtLBHP8q4feqmmfZD8gFKfJvW5RBWkqf7X5Xjw",
  "key10": "2GiUcmLRHAnEYFEgWTSeC1tnpHbpFFouJNaPoNUM8adcckdMvLnEBSGyt9zFU5u6zNgkNkv7N4Sq1Ba1iC5zBxN6",
  "key11": "2qt7CvH7uoFsWA9YtcKaUu9ZX4qwJwS3gzeYinAcZTFXAr8ZB3CbcCWpoVGAU5iBM8Yf7gY5zt3FqTLWSZ7fFyA1",
  "key12": "5TKDLHn1Q98KYbH62eyNdmaoipV72CvTunswcisdJkZqMe1ea32JfvfosdEFJMErmcirdFB9ykVRQy5CiPzqiWTf",
  "key13": "3LTdigsq4bSS8XNtr6C12PVgQzZbxJy3GaLQCJPeYuDAFZEGRcjPQSV6ZQpz9gmur2qBFtMuEMSXaMEWv4kh6i9S",
  "key14": "4ReZ8cS6omJV36BqyjguD6qCwj3D4q8TS36fGvQTukP6nbiLxGW8k8Phgz6MUNQKfsbrNuGYfJUd41e9YrVcQgcJ",
  "key15": "2M8Y7tofRzVMiQN83RiJLqZ3UqxjhAdCrE9kUQBH2cNA8ZidcEJ1KGcR4q7a9aa83MUQT2DRDuNfZ3oN2jpV7CNT",
  "key16": "4XFikFA2PrfqTSywa6HfV7yGQ8ghaSfADCp8mLyKELsPMjpHXtprgZ5TLMPGwQGh5NyGAyD5KyirUdmCEU1ZKnrs",
  "key17": "2njvQSe5GC9PJ7zqAjr36hGeDjxgbiMpUNuVwk3aYAtPpXvxhMN3gGzrBSRCfhPyU5RH2G22VaagRVJUCVhA31xD",
  "key18": "EgexmfWCwzAMoAPywuc9jmrQ6KLdRcFy59YdJ9yCrReHZZSeTWk9kGKBw1MpUannycb2XLXi22wvRGmzRoFE3Y9",
  "key19": "3eb2hin21M5q7uznxHcJXpmLfwpYcXbRbe3PLE179RnpCByZLTHPSc4NdiuHVAvLXv4mE1L7VUW5oWhhpCdescUY",
  "key20": "5GSSidGpSwiKXDLovHwEH4Mg7DmHu2rc4FcZ9MSeXSaTXnJzZpGh7QwDP32ep2DtWchAMemL2cDjXoDhCgfbWYSp",
  "key21": "3wEgNF8spfbRxVwvFLs7uebkdaQ9vrMHWkGwqfAcMLSjS2BczRmUD7vxHekFnYjYc9kn51HZhmRZpopgsLszAkBF",
  "key22": "5NBemrfBgAUsQcjSiRj1hykJyBGSzE7rBu4qsnrYv3XKVcwxCWYzMxGeq5hZGvP9Zbv9ebYT6JVHMRuxxDZVaqLa",
  "key23": "2HC68WYjTXuykbCHgQwgpPBKA9CqGWeLEBfgCdrgzXW4jRjZAme3ik4ZLNCDCHF93rd3cvbyL5fBZaorURgFEejA",
  "key24": "2M5itHJ3owtqQSD9gVe634E87caGJYo82bjvrirbtYbyMWNikysyQBvqRyErKsQx55qQm7Hp5M8kiG9H9Us1huxR",
  "key25": "3nBWCzydvdXVZs5hrttLr5LHyFpEkTaiETsELGxCKC1Xzy5DZpumBtnPQGJC7jRR5xe2UKL9swFXGyT3Wnq6eiae",
  "key26": "3t5R5HEj5SvdgFcg1F8FcVwf2ZmEtGACXiRsk64yxAuNu9jDknFQdoQz3n7Fu4tMU1PTasj24TUFC6PUjC759SK9",
  "key27": "2DFWe74B9HByMnTsaHZBgVwLMT2MmsLjZpj97tjg8TjvgsKZYEZtdDMaGhboKvsHk2bXxxczW4hu4qNB1UGy2zEs",
  "key28": "3pm435EHujbH5XtMF8XWZnc8dEcydvEtnAhb4Duy2TC7VfkjYUsnCaV1i1UYdSFDGKU6YDFDZLaqGBqqMrKozr2r",
  "key29": "4vGcymB4kpPfUAcZLzeRX21VZjVoka5vA5MzNbvNyiFzfgDXZrqGJdP5gfSdK76Gkt59dx2DenQCBHKqyzzYQRgY",
  "key30": "4bbUsTGsD5kreUVk7EYdoBwKopce1qNttHjarPQWUyFz7NPU859rFLGeXqsNo4ws1wc3uTZsqSayXSJzQAz1HYxN",
  "key31": "3cbFQU98rHNFRsy34wobeUeqoqxbpQT3fwkKsFG3ghuExdKKBrbCzXwfDV8CTMZLeErtH4QqXtGbLhPBa2EAYtVf",
  "key32": "7UYRPx2Rce93EMxqk9GVpKGSVSAMq3sxJUUd6BqG8ciu6obrSnPEMg6bjdkS4d168KmtynnfzLVEvnrCtU7Nwxi",
  "key33": "LYN8j16XgeDZFfwcNhPyLZ6a7zzFyyubabZNni6iXJxwWkfY34vzJX5j4axtkcvnpqqbavdtyNv95jyAobYQuF3",
  "key34": "5F2YcxPYFr9TBdvLWQfRhrTuPrP6GsTYjUC6vGwkxD9gPhkamV7wdMwXkEZNUmeifWQtbrTvo9jb9x5YJJhsdR98",
  "key35": "3rqUWNgXfisnEg8PmyaHmV3sj28RG6TewGK7vdwvvRTTqVjxHBj6BcgMemAFJLJ6EJpkW3kD1hC982xHVa8FRBpU",
  "key36": "3kXcDzgwJ1N3yHNs9LgLT8tZECaPEEhVihCXwixjzNBQnm8FWQBPmMNkLH9A3LjSEYhCagqaQ28N711hnfDUvLiP"
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
