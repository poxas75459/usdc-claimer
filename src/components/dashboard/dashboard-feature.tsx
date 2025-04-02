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
    "63zcqtBtiP7qW1YevkS8jTJmPe6MAU3LtUKZiN5u7cXediTuXT5RwUZsNXqwAZyS3qXoq8c2jGnizZ22Snz62MP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sprVPEzW4V9WdT7D8fryC8i4T7o2F7YJp5tG3CuGuUMikZuph4cjTeV6PeCeDGgqKCyF1TJvTP3EQdwq2nv2V8h",
  "key1": "nGFXdr6umY94m2YqcghMA72FqqvBxvPRtUdaZ4L2wJ4zahRrnVg1Zi4PNQiNBqx7LW1e93Bzjkds7ZL6BgKqbyC",
  "key2": "4xCq6fjecQNCMkdU4YQM8vtTwSVEUY6edRcMFAmZD3XLYu3QkD3mpwb5bDsTwKPKo1FSwUZ8nvVrbxNJn2XtitYy",
  "key3": "5FkBAemnMc5ENP2y5uodM5mE5gWYf7yAzkfXSgSY2xWhDHJ7a1ZVj2YiV41BwNGVrXjnkRUuUw2a2JiU1UD7mMUV",
  "key4": "3zQpbWz9XGwnSHE23nS6ETcuvnVCCB6Keg2R7TGbCMM9HQejEaHMAUieT5khCBUCqZt83S6Hy1Vyz8vbpm2yT1df",
  "key5": "gocB5k9b4chYV558K9ycH5FGSEkbS6C9mWngvVo3E5NB6DTXNzUTaFvV18SAUjoD6y9Ys15LYUqUwdkHyPTBzqg",
  "key6": "61LZnJj5YxJ4uqqQzT8xV6xXihZ4e4AqcF1beD5fz4MoZJj4JfFn5cbzkiQu2VFthn5iBmsF5DSa1XP3hoU6Ccw3",
  "key7": "3dQZUA1ZwXRZFAtacJib2KG7s2cTamB18AJPNCrM5vwpzVU8JhiZs2P6qS9dUBEoizDrBvJivrwvBRS4sPcqZk7B",
  "key8": "HWYjXmtDaUrUEncNN6Xffmb9zQU4HwSV7jeWudNzctzkHVzQSXjYoMue4GaVw5mvPoUKyJ1ED2x8AsT9HoXN8A4",
  "key9": "TomHcJ4x71eDf9St4K2c8m1WP7Q9CaZTbWgaxssB9Wr8ZfqebN7nzZCJKUf1ffteNASWB9BtCnDrQxUnnGUEtHj",
  "key10": "2mE7jp6ojaKUTopkZuGpys7xd5scKet2JuS47EdftJrXSFwCXSP1y8USZqbemPpJdDJ8biMYn2zH1PDA4z3739mi",
  "key11": "5Pgt1Jm3mh2aYDH5BBkAJPe9r16ygubfobJWtwksmRLUHwk2ok5XRspE9sAJbgdqwNpGzmWrQuBTVvrXjRsBtchJ",
  "key12": "cjASvWvvRd8yrhZAovdygX5gBNDM3D41EQDBM3sJjP9NwvXcjPykxzTZkKVzj3t2mMasmMShmKzucHhNk9EPXe3",
  "key13": "2PxG8DysnuB5ZLgP5VdPCvYMBcwPZ79honnaZLFCA7UPLqvPgehpAiiFaiFnugDgmGxRRGbm99uB5NLivy4QxMQU",
  "key14": "5WypwpRMqxH2CoihpkmYisLHdeWwu5cNDC2tWSXt8ifRH23ycXLJQ319Qqb4WiBWjoudYWcBfbSrqEnnjNcTsfVp",
  "key15": "2gBBvyCHZwU1rNkMcZncV2vJNwYHFX8YudKrifKo196sQKGKpXiFcnctYogxAnjCyzxGewE5qJsSWmj3sGWU11WT",
  "key16": "3r3vU1RvC4EHMKKTDryTdoFPHVQ2QU78uiG6uRJuWmvyFiynFi93RWxS9yAhv4q1UgKiGMMSvmBNpNvC9zFnuKBD",
  "key17": "5WUTSa6tBXoD9D9Kq99AE8cggBqGhN1uDjwen5ZdZpvs9BwWV8JV5BXeVqbCVf3ztpvSyuZAVjRDUQpvc4h4jDfq",
  "key18": "3yjeEY7z1Ua9DKizdrcLZyrxSGEfRYcNftTs3UkkhrRHGyH9t9KTXw2w2Gx1XdRTbT1iqSWRucy4F5LSfmy58QvM",
  "key19": "3RZHpeYHv9BvLuWZRNSJZWh1fb8wYsbTe3HECv5JLtRRsNwU2HAykox65BwPgZz2sFJbdTV87y9W7R2w5C8EajV2",
  "key20": "2ktJe4LcojQT5LCqNaWMbQFXTGrPpHRKQW7ge9nfKxfNRkKK48h9AuP6SopgcX8ebg4qP2qzcPnZULvj1Jd7nbLv",
  "key21": "3FK9o2DmtWsAtifa689jTrY4KizKir215ALRFY31d7NHm981gdpYRtpLVVjvvc9vY1qbDqTgK9NP5JvQuFNKY2ju",
  "key22": "3c1xPif3seQXX6J9GY1AkTUrXwvB2KP8tcqEYubtR3sEmcufxfVj3ksSPxJp3r4Ld3atvqwbxsxDskgHyYePBsUc",
  "key23": "39oC4K4v7VMKuAKMkZy7aANuAzVDhU8cZaTHMf4TpUKKcH28V6KeoaRcNEJ46HnnpVtSkNNwCuTUm7ckpqh4acic",
  "key24": "5S9odTP4EdZake7GhQZDc7S9w8tn4BhpVHZJnCtMW8Qrus8f5BKGa4A5NFFc95ajCRZxFZjF77mqrSUnfK7NmdLa",
  "key25": "5spH8XjRz8aUroVyhmUFCoC4e6kWPb6xKqPGskLmsThpkNu4QJcuSAvSyQr8Bqu6zcZzeh3oQ82p78fp6YL2cuKD",
  "key26": "24SJH3AhLjAVYrVpvJm6YZiys8x7nmJYXxtnJkCis772LFPagFYJS8hWTPocvoQ1DECcadfYCYa3GQVZShtd62Mb",
  "key27": "3apKUjoejQZaC8wALfUqNKEbj1CUEbGczDqBRsjxdXw8R2CM1sWYFkpnn55mUGREUu4sm52gvM8Ntk7751GsEA9v",
  "key28": "5Zh21edhc4xW7chcDKbjEkd9GVveWdwz9BDAuzgEKzuRV18Md8w5WLswYgS8yZyjNpqusGdyo4q2hPt4UbjBMVKm",
  "key29": "5HrfjTuYYynUorrnQ5wfJrUrWHL9jsUWM5S6HzhaWqyuS39gP29rWVVQqEsGG674TBVSns9r245dCb7KD3qWmuH2",
  "key30": "35DUjHsU6GKjNgqm24DZpCaCKVWX7JeNXzTFLFp8uopxL5YccnhoWvKtpPRSorqL8tyibwtzagWfoGVngMopGc2R",
  "key31": "53AiFEuNSShMdp3VmSRN3L6keQ2vXbLBDN53u3Q8jPuAhowf69TyS9mpVgtVo5wt3GTeHRnW1PGSN1FetH9bXSQ9",
  "key32": "3o7PHwM7TKX5SmJ1upR8JaFfKy4gRTfC6oJBe9k9cmfx9yb3h85fKZHn4cScPrzzrGYa94rzdfp8mzjkddX8v6b1",
  "key33": "5ificAgnGV4yxZjpW53hSQfwhz6NTuzAsqJrsPgN5QvGqYSdYHbVHVmkVasfXeUNDUXFQqaWsQ7zg4ih398ruiRn",
  "key34": "22saDdYHmQBGPgitXAG1Tm3547BDsJAmGudmWQQMQiHSUqjLFUnYPm5tFDGFG7qJLXBkayGkBZMZjDvMPtuYrd6u",
  "key35": "5Xq2bUVayMZxoTjX1zc49PpSNWSUxNNHGwNmqHNst2fmek4GDi92qDSN8bkZEpWCEoQZaoaWG53w1e6W74v8trLW",
  "key36": "39hqfwBHRF62nvnqPofbQnFnpS7RWxWSQzRJFjaUv3p6fgTTXGcHmKVzG3WvNE7RbaZ2139LkY3HDbhgvmLAS6AB",
  "key37": "5rhCYbAe5MaeCS98PwFNwgfCobihRZtapF1TaEPDxfsXWwKzR5BXftk1XGHtF5LQQQDtUXAMUkd2PS2vAdQGjALE",
  "key38": "2NUf1cSGMuG1hpGcf5jkXwrwVBwSnUNQFFzn4NY4y4sfqvSLg3wUQPV6s1mGXns7JyvmdP9UMomc77sx6PDw2QC1"
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
