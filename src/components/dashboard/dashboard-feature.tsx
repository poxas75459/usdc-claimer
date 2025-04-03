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
    "2Eo2zqD66pURrQYPsGTULZAidizgAmGvUoQm62h1woEZ1F4m7q5DuiXH3vDVV1m1oUEC4AHUQ59CUffrVo83uNGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n3t5aViJga8yMTLBVUS4iNhfaDRkthbE7bdPfZocWjVLAzxVbsubU8k6vZJsshKF9Uu2GzW9Q5LgvBAqrPf4cpu",
  "key1": "3F3phwdf1oFmWSwo9ypyyavtAXzTSw71qfsjQ5yWpmp6sfh693aeN8KUKj5VJzKjfS11YAWw2kUtDt4dPfRNW4vY",
  "key2": "5cq6hmbRHX1zMLYCcT9G6QZcixMb1d43s3eyW2f7WZEzYLLCPfLqEEUYtMMjcKUTom6hnGJUorZ9CU4D1bAeLoie",
  "key3": "3qu14zAmLa5fUpaGBDSiFQFqicpG6dKVJVkE6AkWudefMworPomEU4kw9w2YfCXseuRYmHvBj72tcHucs5FtdAFR",
  "key4": "3pyx9QDaS2htEZBMXbpzdmmTRQXu7tPyDgWuGc1hUBEZwkNinBU84YuA3ddsJc84uXiU4f6uuDPLfjoqwC6BFjMB",
  "key5": "4eRF17hXofFKUvmrB6ktEXQwmJUNGjTV1mk1DJfGtmrUKG2gMEZtxEaLQv9sNYJcAoVggMFvHbho16vj1r17Xe9Z",
  "key6": "1Uf1aLAUBuN7tHqEfwZ1cZjZpVN62Vm4aM1FdEy5XuEpBGP6xBhw3HqrB5LFqB8BSGHhD6CxtRQraHqhz9WgVho",
  "key7": "5R8K1SMdFHEdESvoCSsFeor5sHiVqFpKEsgafMXsoXcA5t63uw5nDK7vyP5akR87VL9BCyS3KY66RfU48eziX3zH",
  "key8": "4L4RHAkcFKrUQjzBvuMtJNL6G1dhWrAzzRDYa4nJkB51cjNRH64vTwdYezSiELiAarzhyoydMeBYeD7QEfsWwM68",
  "key9": "2efN39ZxtY2Tn6wUSXQaN4hfJs1PmW1KGQdLXwtJAcL39VCjKBBznsDGzn8o1Uj9WkLEQDAnue2Rq2sr82xaReNa",
  "key10": "2zn4iVPKCrJxz7DMbYWhBsAwjg7kZ4x7uaNVQvt9Mhz2oeo4j4H8Zt2WmFF1c7bHZKBKehsbjpdoivZ1qaXL4Xv8",
  "key11": "XPgxeJBdZh1iAtmq419rTsQmiYpYBLVKHE9mPi5EbCggHGZ1vgi4oeLRd9xjhxdPPTXCd1r2yMJXG6ua9x5mxxP",
  "key12": "4AW4HpocxnH9dDwQYQS1owSvy3LHv8gonCy5FyGFUw98bLa91KDRQeewkVcB9QRCVz8vCZqhac73gYo5hwdQmHPC",
  "key13": "zMkPy4aREkbHsKeZyR788ANRrnWjuPRxVBe6iwudT5B9y7b9aN8PXhLY6HekQJg8axvAaugb2aw3gPG17rLC5BJ",
  "key14": "36tAEQ6HV6CEmcB6hS9ghCczPkFqu5TsUAz8K5hHEzy4UwzLcpzPEJcoauTDJgtdi6XFx1bMvf8JuEcpDYPTSidP",
  "key15": "5D2G5pqxvCWT19wCUnN13BnzAtoaGo8ECEu3LcZCDYrsJcJEivbQHfdz41nZKUcQuZTU6ncEskeWdWg7QMFqcQ2S",
  "key16": "3JAoktWGm5WXw3FE9F3Vca8kRSCkv2M32biceA3F2FHbYwQW772kjWm5mpbeDmFUy4PfijVCHDiFsNKsVuVghtqi",
  "key17": "2GdMX78kdADptbL7Lb6wCYmGqycagRqAv865mzTXVijL1yTKsfxctwHFq44752wYjqkm8vqgthjAB6jpku83jTqv",
  "key18": "64ep47mUypBXFVt1DExivCuJ8FAY2BqGj47AdM7eef2ovXWWpWoXnN7jE3BwktJrbzb325xyqjs2G1S6UP1FGEVt",
  "key19": "49sxUNJ8p3HqjH9UawQDZTk7V7kBzpPaE6NS1CoKizgGF4r9yivDqie1seN2hEmZyngQeQbsuPVg9mvFVUsUic9V",
  "key20": "qs2pjXyuCh3pRUDe7ZNzAahcKmsFFTdYurfbTH3V6dYyYGQ6xWgorVFVxZZTk6raXdYqwYXDeBsBWtdZbHa1Lef",
  "key21": "45FnG9wxM4D1XnGPRayf2NJxqBKSEhR8mvik8WvMHEJk1EVREQ7uWqJNnnMqz8tKhfhHFKEBsQwxwyS7qExPVqdn",
  "key22": "5cjyQCmJech3KLsnnEA5CEjzom6EDSGEdpd5KveewR6UBfmcABZYw1rKKqcAPar3F4ENFmey6kcedt6e7tNL9hu5",
  "key23": "4LiGpDui9GbEEg8r42UoHhAuaRdAY9Zu6ShknWjPBSD1XHkkNBc4B5EJfvn2utgmB9yG3tjnXqEUUvEabZGGfm5o",
  "key24": "59rXoCK65CEdnQbZBxQnM4jPGMktgGjZWWENKW1ALjsso8817GNLoHtqGtwsXHFahq8JXFkyCVxDFXD58LCs63js",
  "key25": "2JfAiYWQpyjtZVixK2VyzJJ2LXujpViaPapeuNeXcGQcV1hTRFfdthCmraTdaocXa9pBcygZkCi7vb7hdpxEi5CZ",
  "key26": "3KTCQutR1VJ6KAGNJrwgRUCLABnAEx5v84iHCcPXeEB44uenQ2bzf81ueLStGwahw3RXgDT7Jzt3GCwQTFST4eeJ",
  "key27": "5tCeuZoZh148jZgn9GhUDWxU5eoRs9xoRvoTVQae1M5Pnxeu5HWTfKGS4qjbsWNdDLCuDizvaWq8vYffAcZMoWUE",
  "key28": "wyKLbWFMLMWMwnKvHuqRGF82U8D8nXkdbYvxCb3eXA84U94SCbYjVrXtg2Y7FoWZAZ1zHacU1SRMn7fmABEAew2",
  "key29": "4JABAeQf8SPBpRFBnYaDf4Lju9GEYi5C6wHVZMymGHtMCMBaBoREHhibJvdk8toLXBUyCCKd4twkmsvFWFsY7rNj",
  "key30": "54i7AfKAvgHVXSqNBc96qpfFGUfpazkvgnqgmv9JdNi8u8c9w5Dk69p6stbvAZqa7jvfTh4uoRpbkH2uooU3eAyq",
  "key31": "575RN1uz1RweWxkepBu37scWK9PrFmEtPhX3VNXDdm3to5K7UyYk7Ea4fcTRnGrXhh8ifnuPXQhzWCEhZbwdKFGP",
  "key32": "ogRD7hgqqYHs5f6XuBBLH7jRhiUvc9QecxkQwASTSDQ67od7pFNQV84zZm9iDqL9HnXt83ETm1UBFQa74pMWi6g",
  "key33": "31g6dpg89bc7dqhSZp8yHzLdSMkXKNHZL1wfE2h1VfX75vqY7zwkzby2wWjBtFn27sWrfHgvBe5cMk5KieyUq96y",
  "key34": "57K8DHeH9gkFtsK6mH82o352h727UjwPN1naT5VXM3MDN2p3kkSXvoTFmVzoDFTMkcmBzSdBRR5bFBUNWk8CW6xX",
  "key35": "3ykhiyuD9XNJbRmvuRP4cDAxyaZpJnv1HXrxDA6DCzX1noXbug5agnYxx5AjVfVzNCEMZmK6QNiPJsRUZL1Yw2qn",
  "key36": "gstcakCoBsAVpGPQpM4AuSmebCZhYytjqVWszE5X9SzkLJJthYE6LyQ8rs8SSMmHhqVzmuMJkejAUawjrqJ4LDs",
  "key37": "5bx11L13b9FeJbbnihr14R1F7JPSkx3yvWHdjxGzzPk6JeAjwgjcpTnsRgH56boadyPXRWAzqwMExwd3hqnhPbKt",
  "key38": "33YEytjvpM4oW9MFXooXAGCNntmr7LuYH3xW9CwxrMDsEVMntoGnuttNi9kyeGpiYKzWbhUPaKT78cZcTgugny9m",
  "key39": "4CQPjWDrMXzMZVgLKYaSpRXiayHHm8NLTb2yWGoegtBaSbN8WhmnowzKkCcXm7WKCg7w3LBsvcaVHFf7KyHDFZvU",
  "key40": "3TkNqRCCPZ7RvkbcNvmyGqFM2Bt4QQpVfhE3CPAxzgz17SovkW3zfVUZ1TE2V11APopoFkeuZY92uBJx18NdJfri",
  "key41": "edPCAFHR4WGaaHFDnBeFsYuskrwZWv3c6cWbH1sqsD17Km389G1Xs9969g6NPwftaYUThhicadL6VBfi9hMyuyz",
  "key42": "JvkvJhXBrf5EAiCGJ3JEzUeEMpgmT5CNfY4D6iWKHKN5mUTJCe6Mfxxgvcvie8cXzFygiwkC8TWSVBLeMwaxiCe",
  "key43": "3We7ZBGcdeWS8J72bLrY9QYrmjhZaCDVMgQ41dqKcsU2ntvW8GWw7aSf2iGmD1KzhX4ngBcWAYnWGpsb9LZyVzdU",
  "key44": "2eMmyNgcfia76nbpmUe1SzsfFJcdgHrKArZxWDEaEcPvY2qD75jJ2vnHJSb9ftEcSLR3UAqTxqMheghqKiMWs2Ug",
  "key45": "2uX4X4JQ3wqaDphJNerbnVugnmvCnkkssZEcgS6EGakmBuYkXNhPNYo8zxMkFxPtj4Zs25K6FWPd3o7MitseJk82",
  "key46": "3fxD5z3gSH14A5gHxKmSoGZXEfqN6jgW73bSJhH2qrrJh3YguWYYko5cTB7EWrEt9HBewq74WsYUty3omRYTrp2k",
  "key47": "4tFntntbAuxYWgwewYmQyS6F1tagaZpodBvYG4nTVowAHdQCtcT4nHehALYz9qfEEyJ6PmZ5vNU7jwaw9yyJNshC",
  "key48": "6zwCezL2YmHsH4dJNJ3iBewNTwT8Zvvfej8pDWER5Q7v9TT1QGSfeiTu71BQUG5jCYcyKCi4h7x8jTSdJKv2468",
  "key49": "PKXV4cMVqdoFeXZPrDszeumGcGPU1oNJ8PAGiqecjVBxowQaDrdtfgPkjyZfs4pENYFETyvzQshqWjCPnLWtkR4"
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
