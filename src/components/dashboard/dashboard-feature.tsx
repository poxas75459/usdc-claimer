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
    "TNRPrXnAFgED4uie2sAfsbh2KJkzMdsf7LCkA8CVZtciwMQ4L8iCpqNKepdNHauaDcZXt1e7fcv186yyWSGpJvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coRtSXRt2JvcKptTNFmhZmEwu7ynxGCSGzwMXoKUQkLVDiSPGT4vANM7TLf8uaFRviuP45xHDeiUYs3sgNQ9582",
  "key1": "5eaRUMxnvLMP8vLqrHdtMs3taZvJ7hDyWRiCDPpEhAMNmfCjQY1dfrSkRjn4ZJq8TTjf8QZfuob5GA4rF66XPUJk",
  "key2": "uPfbh8av791A8seaNCNnMB2tcLM3rJNsBUE3VE59TGQW6gtR2iDCdL54JGQGj9T5m8D8AhV9QPhEbSmvFDiLWY3",
  "key3": "xEMfxYj2PzM5tqcZANpUr7iGN3vC4gATdJdXZJvFe34fr22wf74Xc4mLTDkY9KA1f5DwCLWGhEm9JWFVdwGztKC",
  "key4": "JJ26F6XN9HBKvvPGXUbQsRvdXuNEXNFeFmgiQ3nfL6u7PmS4fdMn9ktUPExpMUnJt7Ro9JJnm6vmLa9zh7bW8SD",
  "key5": "2GiotZBmCEcxyWnG7PQhLcVn2eR4npm9VCchrkQCr9yqn4QuDiGamFAKiTB3uHviiuhbjjjHDPiVwnfxsv4GDnPy",
  "key6": "2ugELzH9L8yevb5kycMRxGhLAmxKSoFqR4nB5hWpvQjARJaXoLMxtprEhw4zqG8bBEmhD9bWUdSk1ZK1Sgo4JgAm",
  "key7": "gkymwNspPJxG2GaGnGSMTPeciLEGVsPGQ4LLvN7cTK5jWNN5jcmjh54HAwW72ZVU9yA9MLRwx2wZHWYz3HmjQAo",
  "key8": "4nRwCwxLvHE3tpCARRoxAU8HUjjcR7Fx7awYHnbNrDSJSr4S6ApK7DqgipmVd8UZiJcAaC5m4kJNQGvyEgTXqc2D",
  "key9": "5J8pFh7rfzDFu8xJPrMT62nPhGyL6Gq5KDvNu837svXgXtQj1Xr9BuqQQnS5RoueRbt7p8Mg6nEbMTubnHnD1K6f",
  "key10": "8yR84rwW52A2uFwdJsjyc87k1ufvjQ8vajFa4RoESc65FJzu2YSmabJ3939norJSmGERz24kFS97QajTa4oSmbF",
  "key11": "4WM5rFBsepD2drtNGP4Aud9u3GQvgwG3kwQ577Wk5Zb5AYa93XTPABY3A8TT8rxfEiCxpwxY5b7xfx1ddMDrLZMB",
  "key12": "43aDtvybn8sqxdxgHTjfWHW5tWiihQ2H1Pwr3KynWASU8Zvb6UMdwWhQUUDXDRXhjRNKedmqZZMZZHwXnBUPMEXs",
  "key13": "3YeBprb3Nu1g9Kk4f8cb2HBPLwxbzCZXj7aYcc7oCyJHvLQuHz8oPAbFN33fotvqYxdFBAyHGgX5pAJKj1ZcqNsa",
  "key14": "51J1FjT6hGKdU6UyPbREwYbN4Q91kz8cXn5wnPQyRGVeBmAJUpstBeXBdxT4FL4DyEG4PDsZ5T2XWh1XSVefFo1y",
  "key15": "2yqG2A9kydT6cXjJrXdDRmi6RFQ3bxBQfZwcx6rbsvGL5pw8ayWxk6FqocC5zPa6Ji1PKSWTKKZgaatYkctqjYQi",
  "key16": "5FQAQsAdDyMKCLMrPVDEuGJxFyJG15p6B6kuLq8VCJERh62SGQpXCMZNT3WNc7Vu5DPUES3QFrgD9SitZVxNjhgx",
  "key17": "5ec7rMkivwpxJcwJQFWGKfWwKnzkSuVxcU3FT2iBr5Utthrp9qPx19Y14Rj2AMM2YrgaAVqyLJ1iSEJGfUgJxisJ",
  "key18": "3arooxfuWJ9JyzdKCatRbzfUWWXv3BSR2yUGPkfkC9FHzRnBeg8HNMjmr7hj3QXbZtj3yzg6D9u5Ndo3MMTrQ9Kt",
  "key19": "3ikZkpwq1o7zaK7ZgJ762WZKvjxmVdQx572yCTgELHSat87nzjCDypAfMTzTXdGF93fYNh1qU3BoezQBAmjun9Th",
  "key20": "5sn9f7aNq2mxV7erVp5zKHbpXFZUy9HzcCUPgQW1CSsFZe8eE8MzeJgceNi6d1sJTtnK3C5gKhF3cLWyUQd4guLA",
  "key21": "25RMUEHCbpytR14QvwHtWjA5RVkuWP1GRRN11NBqzGivUSewfkVdTYVHtgJ9BQNXtm34KevPGScc9weF7b22M1Hw",
  "key22": "ZP6aBUPgHwkqUDGyWFcucXJ9xubUPXSgE7kttzQyJUTHoPcFfMSVPy2kvhnk6ucotDxs1q3xghFXaKeGcEv6i57",
  "key23": "2RzrSMMABTBiYXRytSAKQMU2sBzCvgHgZ73nbnQAQmkaLKU7aCbifZBqhiaCQEsnxSfdSj2E8spVV2U2zZ12nkjS",
  "key24": "5QjvmRHf6U3ojAugwJo983NH45Sk7Nmt2Np1BywGTPSyAPdSUECS8E1h21MPoU5yRTty5YdkKMwYkFXyKnXwnbPg",
  "key25": "5aRjyYsZhs7H6NgvCZMJHDjUaH8413GW49T1Sj7Cwr4NyHoMcojXBuj6yXQzsRsHnNmYhmHdEG2rzaEQD5bFFzRW",
  "key26": "Tivm3oKsWb5dKEqWtrxcWRGe1XSss9jQUQKQNgjnNsuDgnDNu8gjuVaNe5MtzKDdPasSPNmyUbF4QGYZKswD47Q",
  "key27": "63zHmccricrT5NmfeFnfcGfzweU8yZXdL6rUhvKvAnxA3zQ1hdhP6XbDzQHyhBz5HxEnrCF1u1wJVxq1WXCmfMmY",
  "key28": "334e4vuReKDfUviBFVfx9BhyVDL1wepF1VBtKT2ZkggM3xMJKzBvZXwrdnnd4WQSrea2sumw7Ru9zrenAVcihKTA",
  "key29": "3Wxv4aYoULy79kZmdVrWrZ7jAGvquDWizJyHQhyQvtEtHWrEr8XvBAtzrjknKwmUVhuY5g5pQFk1jG1vifkDNyJC",
  "key30": "3nf2PwrrHf3gR8UFX9exA3tHpyQzEd9Bimqi2iya7SX3FsBfFB29EPFnCPskHLeTqppZE1anJ4aRx5kgpCtqvWnd",
  "key31": "3cuRpQSTsYNQMQ8TTdYV29kqvmB2m2fmkWzFEgqfPrEu2NNcrwcKY1cNaQA7D47wVYsA92ER2LwcJX1PkLcgUBwr",
  "key32": "2RD8LpeL214RpSJb8cNZ8CuKoBJFK6yLJpeAD81UD9Wqz48GzZ4bNhNhT4x1NpvjoZuu8KR5PhEDZsnoNWGbSJ1U",
  "key33": "4e2JKYfYNCbUfZfhPTBjVhKsR1aQqzNCdTU71Bgkveed3y5X3E4165dxQtequxL8zoNUZX56X31jLfJ332EZWuna",
  "key34": "42XWWNJmm5J9i5YT2RGpM379DXUBWY3prw6Zr9ZzSFL11aF6ivkkeE5sqEqM18NDGSaBM1Le1TdPWGaSxNeTSASS",
  "key35": "2i52h5j2kXy7tYMp4bZzyopu1q16fTKESD5kXy3bpiVwAWNLLX5fJ5eKnXRWwUjifz7zeX886DLkyWVQUZGGyVmD",
  "key36": "3m2pgM3qzKFbHnTopnE8GsPMpfPxrWyu6CHQMqbJdCf4rLw2aXTAuyi2JLaGQ1j8tt52zyGFJyGjYyXWCACiQc9h",
  "key37": "oenoybVsvJ53W4Q1Xvgf6NZMxVQQ1nzvmNeRPqVs2GWLZrY9TWDEBEhbYN1NmGRCFhBQ9NYyvKAP3wtKAVuVRGU",
  "key38": "63mxwZiYz7noAQo2iYu9FJc3Jn9NetKT56qToLKwCyp1T8hwgpvJJMZ4w9WMqjySDcTZTrZywN84h3NV5AGzSZmT",
  "key39": "4YeEL2MfpoyBUZuhm7zcmmNBViBcgTQAFJJYJHbsXAQp2jPduuoxAP3k5BQ4qeijNPMEQvfuunrEQiwQqNVZEiq5",
  "key40": "57itLJuhdr4k8VHo3ZNgXp4gss2pfzAADFpjUJYyrxauYViZu5FYBNQ1B3yiqAqCTBo9vbZMrYPym57RYd6htAB2",
  "key41": "2A9WJVLHnzdGy6DwYxYHnLyuzSg7yFjaHTJEvgeb8WWQU3AqjpGvmWZkBDGCnRPKdnYsAhbMQ48LTeJeajncwUwi",
  "key42": "5vbXBBR7Jetm4k18XSUfUgjvbshRUBPUUGZkCqDjace6qVx88R4Uis6FsTJoufpohVLaLmQJfzgqhR3L2JHZyuJb",
  "key43": "2UMj4Vm6KGUDy24vsjnCS8oKk4rLmH95BGVT1bJyMErZxbDMgimBeEP47MHv2kiHVuwpCZvscAfbHCGKfT7keSag",
  "key44": "5aL1GSTVGC5DqpoVPPYEGF2WAKf3Ks5BuQ8CLECpEV3Ygep8YB7CjnvMubqtAKNupkXPE4ZEu7M5dro8TRwyd7ep",
  "key45": "2QFTJ9DE6dCXGgRKMivJsYxXaTEwS7oNVgMEcEhmirGK5sX6ZKSQgS781c6K2Uo5ZtovCaNJrbuDzz6J1LPf3xbb",
  "key46": "qAeFWEDnW22GLk23gjSSbB2y6uF615vYserRMBbP5yjh7NtMiyWewqWQACGkJNAzErLMUL4F6pPAr31amU6X2U9",
  "key47": "45MBHKy1SgGJnYCLhPSKUHs53N1Bu4zShc1rdeUrGVeijD7xon95Jf8SZPeKXz3f24c3rdZAcgVomKZjmmtxPmzQ",
  "key48": "YQC2kdLhBtHjEBRZSdgiQaXV2V3eFNLDFEszxS8xeHZo94wyNYF8UtK4fycojDKuSRcTgkYuXgYwc3PnBY1VbmJ"
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
