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
    "4NRUcnZHuXjcWuNb5DHgeDrFv4fhMax1Up4P8M9VeAknb2fpx4M6vtLkVzwZk4Vx4WRgxxy5BAXh2hZ4fnQunNaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRFuY1q92NFE2eNuRAuzQzMjUhaYj94AMnET4QYpZjzxvSrFc5nKTktTGV28VyornC9Gz6EzgSq6Gk3ZuzdMpa4",
  "key1": "4rGz41vVsoCbpMRQLxNhyrvZc9gd5a8cQTQdkdFP8vGvVQZogaCDLdksgQnNcbVPxiPkq45VB638ChS14bgh7EKQ",
  "key2": "3rKL6twzVwGK3iPwCYWbbrRECNVhr6XLPK5fBNqrDahq3mG5zVwhEPAVhvZG4uqhwZxDMgyhKdqwvgo2wv8p9SxB",
  "key3": "3D2D6PQhWFj74CLG67qtTRaom9udUZoAZDNPKpEeB71ponTpBa7Xii8dUdKYmq5NyM55BzXvwKkcqNqeeaHW9XzC",
  "key4": "67f12G1aWyiUqjfYRPnX1CKPv6MZyZ2HgcnQy6SyizosaLKoYay9YFJ9EV85fSTE6SJhDHuNRh44S4ptbhzS8LKA",
  "key5": "F1L1VUCdDYAegv58Kc2svr9CT5yiDiafcMmum3v2xGc6EigYPnfbvPTo2WiurJFMvKE4RQBSJ7z7BwVhEwRRLCK",
  "key6": "WW87pqjuyNxf4WVh7rELZsE6HfgvVk6wgfhtnr5jGaR3NcmjUf714g2MccKyjLBLeSKwpjDyW3TW6j2khbdBT9J",
  "key7": "2r5ue3PNZFijeszpssv4RETL2VqAtegrpn6Kf7ZzoG4wX9egyCJkWKH1t6Zu89aD48vkfZgLzHGibWe8GePDe4u7",
  "key8": "CqLpoTGmP6pxwDq21JmqSsKucc3WY9YCqLooyFTwxMFv1XSTHkjM2FKAKPuQfJjhdK6EZbb3GvgA2VEg1ueRZib",
  "key9": "PCAqivk2j15ab7nvPwcdJaCMj3nSyN9nEFM8offfZfBUj8473okuKWDxFAvxyC4dtJs5XJ2si4sTYWrxpjAaCV4",
  "key10": "2r96gEM9phsKYYJrGn8ngcGM7fJfrtBM4gUXHtpKJNbKFC3jqtPuPKWCEiotT9rw3z4aXkHD7NweQQJUAHyzhsu2",
  "key11": "5Fkmyp5PkyusPtTHAMDRApV6NyAM1n5FmRPJFVaUK7kMe9C8E9zBHw5GmBsCDHN4M2nJQrxLdk1o9RVZ3VLBgYFb",
  "key12": "3tL87tNVW5jYx9fD9RbjgEYRhfAX9sEgZ3E2WVbMUHmrSEk34UGXrhYkHhc6TbL9CRDosRdyMKv5EnnTVPuBxL1u",
  "key13": "2NBqC4nGr3d3rTW7zsY8Zv8pUJ3dx3ML8haFmEWeZPpQdjENcRiTJdebmWzytHDKb11v6rvKsQ3WGqMucfiVqpiN",
  "key14": "MRCBu6Wuy3PpYcQyN1HPVq1b8ECKZ1zq77VfpHBK3X47HDRJzMX5Cm6NrhsyqqWCvfWasnDWFLmnGjZSLXADHbs",
  "key15": "4HjtpZRqr29r2RdEudsgDjogVzf9PrEX5qgvkoTLEJb86CiFbrr5f4N79SAGdugiF2ces7S5dXw6Vz8Ehd3JNdEv",
  "key16": "zSCYfpLu4JgKng8ZRuHhyA2C47LLhDFwkNrvbmnz31kQqGkpDCcQqZ5f2DRj3i3Fbm7nNPH517fRJQE5dAqnXjy",
  "key17": "3PgGtghcinkNYU9oqap6doyMpgLopg5MhTBcUBsFWv5oikw1wnWqHrvDiKq4U2S7LnFW2oWSyGb95zQB2KDoLxFr",
  "key18": "4ucUieLGW8SiyeDUbmwaWAtUaz8GKKTaAGdtHuWJeSTZtkcYjP1dZwJ5fCW4rcvzWAsTJSqZtksgyYzYqD47GcNy",
  "key19": "3Qmx3L1X27NzbMUwJ1Jky61iRTSAaCE2F9FfoBeGFgfJHxT5fDRDfYs1XvKgYWNGHQW51pqqqkX9CffBBaamaBwa",
  "key20": "8keAxstraqmGxEGtRpeChdqYqLnGEdb6poee6YFoPqggx4ejG4ptchfvek83igaCwXpVdRfJy9CvjLMFfuaAK3e",
  "key21": "4Y5e4rBC1nF616wzTzfqypmLztbgeuFrs4ixqBFX9GFTqL68Yf8f8Z6WKaDqsL5RiivPDBW6q9Vqk5Zuu4KaNCt5",
  "key22": "gePooe4C1p5ABABs1enHMRsVVe2T66ogY6A15imU1kZQEH6Sd6Su7jKoD8GAxpUvwUzK1iZDKNCrR6YJBrVE1Pa",
  "key23": "2TQLKW7WwRTsm5VB6n4AET1UJmgWFJheaCztoxNxXvFcrTLP8BJ1KH53nQ94mDnLAaQ9ewckiTS5sEcC2v7tMRjr",
  "key24": "4nTTumzeBsB9fGxp6WHYrCLUTmtqymKDiXiDduYKMn7WDRrtHdd2AP1JQGJ3Jxt3QER1e6r95b1fH7dhTwSUSLh",
  "key25": "2gsrjrCz5ede7kr36wxajz51sYz5yYj5Th6aU5y1XQbwpGvTvnDT23nvY4GN62M7yTg9uRnQyeAnATCPG1iBggW9",
  "key26": "2C2NStfiRsa17MfBSWu6H3rNYMDc1kr2MLJbk6i1Mb4U8i5Y2y1v5BVCKtLx2wSxQjUeP3XCjK4W87wb9c91cPWq",
  "key27": "4yf2ZR1HEsm6sarCrGCFLXJmr36WSJ7B2XPEfPGg7tgyzHpg6QpLx3zouHzecdcA2ZVgaw6MF1CGhzMoKKx5KUn3",
  "key28": "5V5kN95TT1ZhcYjuc2FJbSjZz3mTHAsz3JfSFLuRs6jDcB9Usnip9EAwsvwXJQS34updirkh3DRCt3uEn4xexq8C",
  "key29": "67YapkRfSuJaKzKwnjyCf3YhzHMA67gikRuTu51uxJzx46pKmzZtn5djStcSY4SSQAG1zKfvts6gxG3sKBWe8mk6",
  "key30": "jbkgDJudCsv1dGi44z9Da6SiTbo9L7jfEJX1BdvYPxYf8CMdzbvY4oCQEoVpG2dguKDugsXRQSked2rvVqVyZd8",
  "key31": "2BzuCCg5rKXjyZZn7MsPZuzYbdHMZ8njNFUnvpCrvmdwuffuxXxg5kZ8JSjwTNM7xWnFwsqRYnp44dEwLYhe14iy",
  "key32": "3GVVsDdR79Bft2rorHZPbBoGu3obghreH16NyNMaxHDUzcZpiutN8xsmE9jpTVks2FgMg7byeqvF9kYjaiHmXAGM",
  "key33": "42xJtVNhzEwf5WhzBARd4Zuzy38DxCEcUvTGz4JCiQcwnayVViZ5iDPQ1W47VWWq9SffwEjLEeymncFgKDf5yun9",
  "key34": "5hqcswpTsULkN5ASnFmcU1zWaWrt8rsLGjbu5NAgGB2U4gdoaKKXHFJygSDBSUQGQbqzf9qpDMbRRY1CcfZqksaM",
  "key35": "5Fs1A4nsDeWCJvi7Cviuki12aHJrTMSbuTC4GuXw3e59xtWKjWZSyysQTq4soHeyowmcjgAvF27MhTYu7YijNTX8",
  "key36": "2N3b4pP9XGqVH8RjB7rGitA6EfkwyaKBn8P759MhjPEUs6qKjWAAEkXkqY2uhYFjsMbFx6vTQqjSuDRM9x1cCtCm",
  "key37": "txGnFh6y7Ee3Y18HXspV7P7zhPDvq5z42S7TM5ToPfdY8PgNQYrsM7UXUuZndCXXj8pMXfboFP5Hm7iaRtdkx7N",
  "key38": "eQPgqeFM3ukEzFNFnjR5u911hEJNQakgwBYaZj6ynGqmuEytxs9JCkTz7KqvR2BWcFCchwZwPJecvqR8CRtR6NH",
  "key39": "5WXX66A18qn3ZK6Z2YCgyiqXtRV1ZouHXSF4Qcpsk3uSjDfnnD3Y5r7vQaWmW2tq2K2bDrzw5UYxti3hg8jWmabm",
  "key40": "67JDWz1wsdbDymduNE3TV3LvjbjepqySm3LPKGDxvUU9ojEvmUVLCqFYh1TDPtzy2QrRaYG2rjbzmEjwjwvCYNnX",
  "key41": "4XBVcAwm5itgv5fq22RCjUkx7wCkEYFdb3jNJLQi2qSTiC7dyTk34HbhiXLKvXZvsVAHgEU9ycUHh7w3F3eMDhGq",
  "key42": "2LuxfpyFdRu5vNPGmLfV2Bkrrmb9sZcmpsu644ww7bU2joYuyEbdx5FJjDhkWNfvfF4Nnrh49vcx2udSDRBjEjCN",
  "key43": "4MrKJaTsV2HoSs9pxjHbebZtFM5yWcyjCvCKK7gsENJUSRAqYnTuGKEoqSyeJaji6YADsvnBNEaNr8BYNkDGoBjG",
  "key44": "3NoH4Jf55SAACgfFN5xEnc8uiC29q57Nx1X75SSLC7vCRJi6q8SX7pfqffAh65NFUWGqtZfUtgGYZQ129wPjvHPX",
  "key45": "4rDnGKLThhAExGx1NJeTESZKzKngn2Y4gjuP6hwGhHFiyyMZQHHcTt3G31CZWToRCVn82yHcHi1WwFQBnhhaPe3s",
  "key46": "5iVvS5iuvxSuodNxVp7EZtmi23dcCJywcHDqXfByPWnXGDeoLW8vHXhB7jtTSUXeXAonmas98P7V34ZULihe525y",
  "key47": "vbwgopDPZmBWoUHCMS1giGBtJKzHhrKptEKDxhEbPZZmxDjNAQewDQmJaervUHicJcjxzADrb6KnxpaoG9s478N",
  "key48": "2y8TkJH9aHqk7n5wefDPiLntufP7wCZAENwNovdzUuRVDDiRPrbSuSU6yNDjtThTCyZ987H2CxZn2GZ7dZ4B2XZW",
  "key49": "4HajsqVm1bMQSjznb5NbWaXkR4papkQAaoTPdWPE1cGZaR7ZGA7Qp1hgrmSujmFuWRf8BDoZc8M22oaFR1Cuzrw3"
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
