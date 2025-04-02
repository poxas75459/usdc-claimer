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
    "GjSTg5SL9oY4Eaokh43FhQj4wWMtYY8qGqtV3nvXpJoSitCsGyJFtZ2qdgfV2FiuDNK2npxp3w3fkNZdiiKnwys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAqFEVEhAuuK1FqvzXvWg1vFLtd3Vka36cinnVbFxnAbpLs4nj58jU39aTeXs7rFFRGU73DSw6zuxrhBmwNjnLq",
  "key1": "4MuEdHYBiLvRurmBUqChzcLu2honRqpSWMT9YAV184TjovxFXzxBSnF2ThttsYy4unzBigmvr1NkdZCAMA334usr",
  "key2": "5nGns2KEhWpkJKooMmu6WSSPYthS5LzLh4DwHZtCcBnG9FnLY6xhMjrFXHKRZH2LzLTL9yqVgGxW1sHUdg3N33F4",
  "key3": "5xRbEcPEDNgvPtpny5ZpUWJ7h2xVqpVARdJ4hCqEGoFAM7C899r6ZhcTrpjWrik36mTBCoj5CFFuuoFTEyJSoXwB",
  "key4": "3HFc47SVxsj24XcpLKcTMnV8hyoQUhT9F8GinqhaELrpsmVaWYN3yaF7xGQ6wDt71KTWi74LiN9wtcUpKJdjnk7",
  "key5": "2Bu1c99VyACCosLkmGifJPp7d1iQgZvKCpaTQUyrEFob11x7LorYPgF8wmnDQ7ury1n6nj5oDWd7JmjzkeY1EGj",
  "key6": "3KETRA95t5sEdSsD2Hi3BW3tFx1AUnP6TomnWnU5hM9pLo6rnGX1EQy7nvGTjiZH6hTy5rdRLuym1mAmyzijch7r",
  "key7": "b3wKgatfHCsjb2s3j9Wv5eyABp3PZ72Gc3voGCG1H37wSeR7Pw7KJQDVsB1Q152W6ncry1CR2xPbY8YwiKiW8aD",
  "key8": "5NKS9BwfUg3uZgZBNZjxnGnpfzngqvG4eXzH2Hn9XwC9U1VUD66nTgWckvbs5XeUqHmZrWasK4fuYULJFcEvyxbo",
  "key9": "26QmPm7riuw4qGkNKw6Zvbs5gLFqmS66Skc3N8ggCkqAS3xZPuMYkpwfVXZeMouALyedQ3ndsFT7yNKyXUUbaPJH",
  "key10": "3chxDQPLqViLUtwsC8VfEL4NaxDpL7ZaDwZ3yLSMbJ3SQVcDpm3ajAJQB3ncWB7z6Pgo7zSB4kjgV3qhUwMbWcy4",
  "key11": "2XGr2XsGMB8QLAzxgsZEKpBwUVUovxQUqFbbyqHb9FXZ3LBEdVuB6UzfUtHcQ2azGStTkLupK8vuaMhBHoCCMNrh",
  "key12": "5Lz4kUuNd3TVJd9jScPR1P6j2EGGKgbpjFRzkFdzMzMgzHW2Gi1koXdDbChYn9HaL1zRs4DMFk5k3RjHioAzTuyA",
  "key13": "oZ9wekSsJdd27RL1HpMw5eT5V8dX1eg4vLBWyX3Mi5H6uaMtxxTzjjHfRKLzRoouLoECdf5SVURcdgjARzsrpXe",
  "key14": "2h7JCgDRtSx5WjtxFvegyAah7MEmR5j7AJjj4Gq6q1zU82gsSYRqNLqdCFbUAhe9Bi8QQKh6RuZjj5f2rxoD5j1M",
  "key15": "wK91fFVYoGyoWPjAREnkp8S2phtepro4WhSdcDjhRF4Zz31xqsA54ENcSVdpLQwEbMn9HG65w3pZCXGhDbyynor",
  "key16": "2zJ1Gi6UqcxcAfHnD147v4bffhUpPpiEMfNSnQ7vcow7hJW6C97xSkABzhmJszaxWGrFvj1qTdpnxjtNdCFAuEo6",
  "key17": "2JfxaQhvurrYAt5KHqZd5g1yAiu3KtzzzVDjFELu4r3T9YFsG8A2mVy7nohqCRF9giz31LRH6ks61quksNmdgwRk",
  "key18": "2HscMPUuUcXfJoBytusvCfo5V4yD7X9b337atk5rDTFXeMtD3AKYALG9Rj9yYhVNnYZJxbiwcQ6v3NGKBtxpFTUF",
  "key19": "U6z5NAXiUL3STemc53PpqUa2B5G1jUHb5WqXmHT1T1dkghFvbqvtzZB17otVzz2ow2Dcga1GXAJ9LocLrWqSBCJ",
  "key20": "53rSVA6zmaKDZqiBQrJFXTHywafxfngmJYmrNV4Gzyz4iWoRxKv6BwMaaVGRWBCbe482MV2ZpDTdoLZFKQJtMUAw",
  "key21": "2UVFhyS73B1QaVL5WDpQvbVzHappwoUVMJ38EvenTpkczxYEMCPbVXTYTnfi4uLB7qvWQpzmbo9Ptzgfb2RTq2be",
  "key22": "4v9XvdhAYZu9Dq2qzhh9gzCevqwHbDcCHd7gyShzFQbHYnuKWxkmPPvbFdtukAtwSjK5d1CkpW1jWLhZ8AqvBNww",
  "key23": "3zEyCL4kCRF4YyGhUzSFqoTgQM41nec4xEFBKiyJS78yxcXxf3xcuRVKz1LQt5HQVpF1mnHAQXHwe8ebZLLc521D",
  "key24": "4LRkvyRXS56q4ic1tNemikBNpUhoPgEjoij9SmXCkfHfDKV7xATWFWFxVsJnmJD32o5pvLP8bFf9uRV854oqvbSQ",
  "key25": "3GemALWYf3VFLSqVHWo69JFLeXEjYub75NCkYCFsXPdH2XdBDk74h1azWFYnHg5Zp1ADxQXk5CfQQKe67LDUvLTg",
  "key26": "rnnAEvXCYNg2T5YfZmnJsZkBSqAroWYfNhxdkJpSi6gFPCJ25kJ5z4mgyUV1iWJ3xneHZ1ZukEgvhAYRdcJPQdz",
  "key27": "5JgB4nHeuRCt8JVDQeF8vrrBj4Wx69J828iHU8dLNzRBvPogQvybbWgKrNymw3Aw2ePyTgPzMLH8PLAJCcbEiDvt",
  "key28": "4QFLAqKU9bKzFPABZEZuutxmwafADw6SPTMJ3wgXzZWwzYygHr3FBvasFY9zEp9FSGtjgJkLLogX81rzDBjnrZbZ",
  "key29": "3WyXvUELSfZzRdnAQZbAn3fRct32dx3bezDaXjwGi5KnV8bFtJrsSDuPGbrpK8FyxPeNQAArkahpFWzjvS3V2fNo",
  "key30": "3nLLjWVnX5cY86AnLtWHzNbUU6557ujJUf863Qu6kad2RU3PFZAG5x2BupiCZV3eqwCfp7G21JsZ2HyQwQ7Vtd9k",
  "key31": "G8s1qBGUHFYASVszzUrXMJZw4MY9rcsoF7KeNq48gYdJKaX1FyBVtUDcq6WWVn1zgjBDPB2qmQ2hWUuZiroFxqT",
  "key32": "P3P3quTjJH4cvHTEatyHYXhqh3KbK4q9u2MEnEMh1TgjdRKWDCj1r7yKmeht1pUuUo6ACFf29YNxV5eYwVvCpT5",
  "key33": "2xtyiekvTmVUyKTTPKMkLP3pgXNpXP1zRUuNq7BRrynPV4wDSYS5b4TxCh2RVQFCoDiiyyTyPfUapFaooit4Nkuf",
  "key34": "22JvhUgAb649L5mHUopuctkrxmHDKnrcYFq6eYPxmp1rAwME2PqXZaDZ2xvKDudfzdebnyVMZ1ekEwAPU55U3wPc",
  "key35": "3wSjMnyUhwUhuYACaznrQDDoL1DBFq1iSgmvB155YE6rwwdBJgQoyMFqFPPoAsmoDPBj1gY7kSRo53B3h5LtYBSP",
  "key36": "5meq9Low8mgGp7EPVapM1kSfqxaCZo6Ygu9zTuWrbZDTpwCPLzpueraBGVazwQwevdgcZwscrBxVvhtFD8MXZuWD",
  "key37": "4Qgs3LKPdwgpga4kKC9SH3EPs9oPgbbEFnX2RhpL2KAgTRD8J2GwTLBXn6ZB5udY4xkkosTcUibBPRwmJY6xvjH2",
  "key38": "5wukia8TFaJozrbiSrxmRT2tsdPiZerfSx2p6zrA5ANtaMSpokVo3Kf21sBvFhvRpWgTX1J4brUm9LgpKUhfY6r",
  "key39": "4kATWu5XSnLjvnuiyEZcL5tFHMgz7gsBjR4wP4ooj5Mb6qM44HwbcJqzxEEZ19Lh68ad9Ejwj4j9317duCw7KSHH",
  "key40": "5okJ3uWMDb1x4GefDy6eGPZ7dDaYatzELsUgeBDcUhn5sSty1uApQw7C6WBS52PzVPFP6ZsyGcLrAf5gLW9GJdg1",
  "key41": "39c5Q77K5Dsph4uURgkW7m87SkHv6cVA8nLYjHXnMG7SxQWhaYRxZu3N5Sg3E9vP1Sns4Gdm4pLGtNMEUAiHraWi",
  "key42": "36Qs5tZhToBzBGKCFrK8MuVwj2M2uizPWCMiD5mRPKtaNJfFpMP89Hv6HQZF5FJLn87nenFCghtsFMBhbqzZEyao"
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
