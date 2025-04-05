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
    "2FkE9fPVoHrbao1qnDhckE9zuC2T3Hagv7ikgQLhzPHJ17bypgqcUSf6DkhnaNqEvzbtcgzXb6EPZjPCUHiLRkxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ae1GAAQyNTkrme47sdddJTy2L38SUoeVMCsk33tMev7qt2qxaQ3TCmmU67a9MuYrC4AMpKiMEQhh5TN43X93ARv",
  "key1": "5jcavtY8a7sf7nA4BEqmSR7MZTVFqSqu56pyf3BawH5DFHGfT1CNj3wr8G39yQSnB6h56X7VVxe631TXhNCWZYDd",
  "key2": "3gPBhMqWejoJA6AG2ESEPtxhuSi3vAnFsJ2eVxoAg2b7VyWDomUdDoZ595PfdzMop59d4detVpW9TzEGaqsFSqFs",
  "key3": "4U3qsUyCNBQJBJWPXJnoxaQyKs7The1885QSWwq4oAsTemxrjUyNkVWW2AHfn4hQmUR6mRpVBTxCDFguLFyfXMuz",
  "key4": "v9NuZVFSqiHCtuifD428WY3QERUZ9WRUBrTuMfYsfiVVmtUgLs3YLfJShhzEdVnLdEmnXbHghp4uCVSYbF9YBUf",
  "key5": "3aPTVU8Yp6FiNkhXvbk4JMoTwE6yw6HcQ5YqYu6j8uN9GZ3TCDcGEwCdiqbGw5ifq3Zef5V6LEeudcS9FzN4jpjS",
  "key6": "2nTo4Yx6uQnSZdGzSZVVszLQdwkYRwUs3xXvjb7PueaqWXmTAd38W7RwansE2EH5g7UCkhpRBsqCfSHwD2pmrwST",
  "key7": "432TV4VuVjS383wiEV2w7iBN1QzyqedpCUxTiyLV8v7S3JVhPXn3RTu3r28NmKgDZizD6XenWHfcqQLVsAyovLWm",
  "key8": "5y1riHmQDo271x7JLkkzQbqY1Rw8bd84YpCfHPkaehWfcV65UcoB1Q5SAYXeNGgNun7mQNfxtxuNzmHKdMYDjjSS",
  "key9": "WXBBNi11xaGJDRFy3PZL9pnB5GXyW9qJRsGCq4Rr9gbMAybsASFYfuknePUxFoS5txbhyjvU6V8PxtRBR38fjZ9",
  "key10": "5tUETNVgj8V3jhWeexWDmcBNfUNkpg79B9uAUH9MPjGLWKVSFyAwn1mBWpYHCVmyZT7Sz1QY6kbhNd81TtrQuZvJ",
  "key11": "3qMH3UZ5UazxzGuRrntF7XMjkYqstMzh5h26tz21Mgx3qqN5U7hbf8z1FpUUn1V2BAf3givDdwNTcX2xofJgj1o",
  "key12": "4fqpfkSykz1yNoCxagMKBqhdcn6QzDNhRoXB5coMs87b2Aayee4mextbKrsB2KxGEXbsK8hvchpdoyTbXnYpaeNB",
  "key13": "2jZhDsbKkTWYwzfmEKoPi6J2qnecrGEkxAcWWHVHkNzgJRmZ4DWwABtjLzqc8y5pXLP7dPR9cc4Dwb15XhsATFc9",
  "key14": "4t2eEqwgK6g1cuwMGfEo11AaBwUAgBjGCWaruRZBRo5x9ZTFu5fk8krgNqUX44FnfhJTkFgMzfhS6QkqHkQEwh4m",
  "key15": "52HAKW3toaytKqQsFWesfQHGMD6qUHXDX15X85uqGEorEAHLQHoZzQvfeZkqmjYXtMY9mPtJHJVDcmEGQ7s5AZr4",
  "key16": "66dU5i2HU7XzV6fbPRcuvTCJLBhFCWqJ4BcTfJyXVjdivDN5wGmCzV3F575aAgyF5sihqVgByDnyb8UvkHAFJvpR",
  "key17": "3xTuQhQR9xDFtRB6TYnm2DDkWG4pkmxJnuJgksPUudJa4qBUtPGL6S8ZLH2b7DZk9P9RBNXt4eTN5NNxMJWsaE4M",
  "key18": "2G7kYX9aGX565iB3PLfewGfUSrxjGNQux5AA5XuderZW5cs4mtV4i1kir2aqgcpKmk9QCfLaSKWUsqC2BQoF2MXE",
  "key19": "2D6nbTH9BDbSBTJwYkDz1DigDDHCDQDdwF1dVLdb8MuvqFgYsJ1st4b89Y91bF1fQ5mVJxYz2LLBQcwn9GfN37ba",
  "key20": "5vQ3VM3aMhyaCsYcYQ5zQV9j7dQogYoSGvNLeGM63f5ySTG3U7QPdygubmQY2CexwcehJajwzx3XoaCWWPc4WTwp",
  "key21": "4bQYxVGVyxbf7WEMnjo3ttFpcQNA15ZtWWrMZqw4n56j9oGQEBVEcireqSighFdBusEcM1XTdtvnfxd9Vu2Pdueb",
  "key22": "2BbrV8psVjtgZ7cFozVu5GRE2GcAjPJGA6n8LbLrvyuozVspY74GSN53nGHnY5xohnVc6J5iV2pMFhrNMdTGX5UD",
  "key23": "3RJdTvmjhGNhDLNvUYDL487q32tDVsCa8xsLZho16v6PMpX5Zf1gRtMGM9asEaET1q89QzxL4SkrRwayKUF2u2kx",
  "key24": "21XE6TDcxS87b7yteKVNddtWRQqELsmEvAhdULB1bs9F99SPUm9TK1JCxX6AupL5Nu1S2bKaMkji2UJbMJnBUiFo",
  "key25": "uzM7zrjDz4x5R6UJTxJ3X6HmY9nwMwEGDRf2MG9JarP8vh2Frn5MDrXrBPgJKM2aKp14g3sFyUa5d4mdxBNMgUB",
  "key26": "2bbp8MUNUZEAh1htVugE6p4WKRAdKvvQ11s4FLBCYnMS7AqitXQqVsRvhYZvDKWW9wvKmr2jcb9F54Ku7jPY5HEo",
  "key27": "2KF6aMS6sNHCB1b1FvULwJ5awTUrsLAuP58F232FAT385puGUL5fuoAFjm6nbpt2PuZB5cbVKQdQk7RVHCfc67kw",
  "key28": "4p9No211WyUkcTG3NuyGEuTVTxo3uKf7R372eGH7AbaypzxnexHR1yG2yuwb47kLqsu52wAxypkB6Shaahj2tgfh",
  "key29": "512hNojTrfnkwfiNCYfN3BRxLxt7jDxCA2r1iQWw7xHnyi4c9cNsW6vCFMnooV9K9oc7QBEdm8jx7xb8kVxpnmVx",
  "key30": "4aY58hdunuHnTeFSt2ziP4PvVDneFLN7YYpMMfb1FxSrF1Y8bhYsN4gJexMg8ZdM5rg7HV8cwNdfgW7faTZ8i4LQ",
  "key31": "wNk7Po5yzhGbUEFfAxSysNhsn6dKWR8digxgBtx2MBGhBKn2LLzBFWDeDoV1EpSEmmPRUaujfUujC6dotXKoTtA",
  "key32": "gHVnE9LnYmdYf9A4N2X2miZHirX7uk7nXiY5v84bBguDDCRX1Ck1mdWcHyVz6aJtNtUzpTA7QMyqGWyuQEc4VtT",
  "key33": "Q7eJyRL4g5oEpJBntybxNtHa8q7L9zNZFpL18XbWnpULqJNNMRsdsVeDK8BCxaMfxJgzAQtC8un5cd1pVejuMLT",
  "key34": "NtZ7eoZYdaZt23oS5rSMK865smPztCBk878somZBZn8SaDD17NjwmTWKjrdHAYCupNF6UTZVzoRkVHwRhJyDCDV",
  "key35": "2oUjjrWiMAcxhQqygLHkXF5F88fmxD8FgresyTTW7ja9hHrjuwLMNtFaMi63rAXYY6sH88hU4QDgNWNZ4jAT4TtF",
  "key36": "3UnFtVrU3y971rguLQnKU7LRZE1UtMWHeNgLjyk4nyUYULTLUh7tmp9jq4QJuD8tWxodaUv641LQaRh8kRuchsGR"
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
