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
    "2K2KuMCf9n6LYL9spXwnmLWMBaknLKXxdDPeDq5U46BxfyzGK5UkSYv2uNvv5VLWBQtwKUiNKzB24vHUdgFY3RNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YX8BTN5a7cEAifvii8ga4es9B8Khy6bmu7VU98urLDrTf7WTg7YnXzz6i2q2XMMEbiP5RjvHvdVXCTCDFx6iur",
  "key1": "ip6jTdVB2GWn7i19YFGLs3fvED3Ffy9L97HTwnYhb94HxNZJbQeC4CCejfLBNoMZ2GHBAh9Whx4WXk4EUSDbU5m",
  "key2": "2hBJjYdCnVtK383VdyNpQXJQaNJR1ZXc4QnfUysRqb4fAVguoBGiDxMwfM1x4AGdvubTZDL9juAszPF7KALz5yto",
  "key3": "2ds2ATxS14YqogpC2Y9wjDxSqSkbgGAnqDj9GUem11r2zfTwDawGY6dZsEuNexxXpDhYweiaiUq9EmcSDpLKf2Rb",
  "key4": "5K6iXnBEDW9iECmEUKRTgxRpN4KCQbh6tjrtmuAfuXFYgyc7VojH9tK819LvVoW8qvMSEvbLLDMMrC4kKP2mnboQ",
  "key5": "2EAWsK2VfR6WqY5HKAGifiSpoJ6ffQPHRh92nFRkKxNe3sn8nhMreUmSP1isusUskdbeAkqHAJ2RgjSu1NqQUbEo",
  "key6": "3fGrKvyK1oPwZCJFVZQPkus4gPuXCW3CzSAnR6hsgm278rigzShrB35kFYKkkaSVK1NdsYbDSErcTSooK7Q2SxtE",
  "key7": "4vEBfuYu72aTvJTsg329obR2oEeNe85mGahnFg5ea9UMgqP24N5QJv8xs1sQkJJwmvQsBi4ZVWXop6EihQQyQtwU",
  "key8": "4VBqHjG9v1hJa7mjM7VZK6UvhtrvSPJRSyn1mXhEVG34Y8ip1YhBPRqwcAJdtUb4ztyRCTWfRHk22seCUQiDFPVP",
  "key9": "MMgdJ1kepNGqTNiJ7Kc2fEk2Q7ei9e7uC4EbfRoJtpimGmAi4cmbgeKke7rTo7uH4GkCM4Xbcmwksj7uBjCaeQP",
  "key10": "5Gh8om1aggG9QgjDj2dH6fYerYjY6zyvTSo7zim6vRi6SkWXqBcd78uSTJ3bsFqoSdMovc5Uvvm3voTgNmCHELX6",
  "key11": "53GfJ2fAQdzHPdT9cV63wujRJS4E21uxviYVZ1kANomaaSKAomTpBXDVXs81BBmWrcbBGENVLkyLhQq4fW5cAKwN",
  "key12": "533caGHVKFA7d9xJh1SyUCDPX57Ti4L6LmyMVPEqxs51CwcwBCqjBBNgdjyA8MXWdXVmdyTtMrjXvCekaxCNWkFg",
  "key13": "4oaJpNvRTmJDxVJTU9o9NoaxPr1Jfvz9rheeFH59wY7QoDBhZ1Ntx7EsXoTBJey6Z2TsPvxMqpDKMWtgii2hW7rB",
  "key14": "eZhG2om523Tf4cTuDRDd1SKzjLzg6GuWEKgoJJBCQxBZECo7NJHBCvR6eAnY7A63r56Y1Cwuxrf5SQ7VqUG2pX3",
  "key15": "3UWYCdMPTWvoKEJJNwiQDms1WvJVfsiAmWpxZRMiHVxUMgqRzv1DPzr7phowcYC4Mv3KoCvokMbAFYmEsY9S7xbc",
  "key16": "tBwwM4B1CrckxDBcSUfB7s3J37M4GT6wTXLFmerNiFgkSki2BYLz2ugFXTHcv6kzZpgjs1MJiJPWjeP2qFKB1tM",
  "key17": "9TxzEwuBDcLVBouEqbnV8MfdNsgPgSFt7Gf1hnguG3jQMqrzRFLv34xPWy4agFLYEgFvQvrwSLvMKLfS8H9r4SF",
  "key18": "2vikhsWAMaRDgebQ9zYhj5o7Q9u5zEwXiXMyddaC9TXtcfjhRL3pbABqzjJeKebSBu9qwtSLYV4wiGQrJkYPyeGa",
  "key19": "UysgZB4Ds7J8QvBxzqGan5nr6iWJYgy3ibXy3a6zTbgGwd7re1fHiarHCgQqx2SPVsNhyBwUG3HCPSQEyfLf8Zm",
  "key20": "4D2dH2w3pFuKsVTVNF1req8ubzcRuPTAThoF4KgzPTNqqZaMjLnsVnm4p6GNC9jDxCHWTN8CSJWMCeoF2migLfgL",
  "key21": "51sajWBcsMnDXX8y2NJNBZyFkGWAAyFtQEoRdwraMMNW3pGeTXyUaMKCRv9FvP9so12o2EV5CTdLjCCDUzrMJCyd",
  "key22": "3BFvRjESWDBz2moUEqXbNvreb436VqNmK8Z763pAQRSwJA6GyDPc75X44CAb9cHLiZGUdfgkMT6pw1Jj4FVZKTVZ",
  "key23": "3r7CC6E9hdxzdDW4Xiv8EgRofLd93tUqW5Ksr4qCdNLmrkjgnUW7dRjBRp91wzBDwdTeN5YfvB7pMsoJv7utnyDt",
  "key24": "3iv2fvArp6wLnY63HpwT8sAMD3TY9jWwAKGVJHvDxr4unTxiAjncnWqHcoiq1nUp62QEEvY8MUAe3amczvbtsYqH",
  "key25": "3mFzo5kvbFP66uYUf5VPkxYiZCju3xTYWj2cTbykHL6BkzRywMPSsp3bzkAjKFT9HScv8ZNaLcrXQf5Z5CEmywqE",
  "key26": "3pPj3aoEWurThsL6pvyj3zpoupQkMVqmhyKQ9AkeKVNidxgsBTDG5KKpnb5hS8nSacfMGTuhyvuYDUp7VKoUm1Nh",
  "key27": "3izyyt2fy6KvwCVu8fQQxiNhENnt8bfnJvXSbcBVm3znRRsuT3Srg4vzDnzeNpm8AUHmnQSUjZbmRrNhY1SNKY94",
  "key28": "5K5YbN3eSegyS52PgXxSR1rz5EdJsMdPWrkFxTzWiGRNNuF1RR2Xfmoe5XB8fuqyzvkR7h5nvoTzdTsxFerzruQh",
  "key29": "4QUfxuou7mh4VDnFPUoXxnZkUjZEJ8mG3xnn6mzc5MPn5oNt85RXCCjNcWP87HoJvmHnVYWJRGWAAQr7AKKLXJ5Y",
  "key30": "4h8khDqcbnEioxDbft8RopPNyjcNkeshcmS7FzaeuZM2b48j7ajzzZogfcaihanKY1Vr13gMq7WELrZFYgh1yAcX",
  "key31": "41j3VQLogynxCYXif6yWxwUEkNAftaybWVP8ad6Vmo57qKug86ybq62t2ETSvgLbRvzMfXW6iATyFCEtJ8ahxpS3",
  "key32": "2tgiD9pFqveUuQHpKNpvBXq77Riu7gE2n6n5poh9wr5Ha3Rmo2hR2i3UAr6L7WL7AppJwXNWj1EQVQTs14yQ6g3N",
  "key33": "5vjmpsxoVJHpNjkt4Jen688wjRb2nB4ySHoYRvJuBGfeyVLaWQsUu5qp7atXn7m3uCjBmZQ3zK3kKz26xa7aUgfR",
  "key34": "3SYaPmU7cp7iTbmrZXzAXnXfC8TibWCtEXsAESreBfUnQ2ff26hoqLfcrHarAjzw64CTM9hSPv31vFXmfZJwnRu3",
  "key35": "PqDKanjgVhEfyyYvSmvgngGzEs525URewocQsQGFD76SW1aXpJfVBiWuUhRqQLoaWuxSfkrLk2pZQLjrHKNwnoM",
  "key36": "TJFgwR69QnszeN23HHFw3dvMJSdiJLA26PfS4eA3pxLV7BfY8WT8CdUsDC4iBoojYgeXJydieVp3krXcBFTUSpz",
  "key37": "3ZipDJW8trQZWmpaFiP3RXPRUt9dGcsqAFhhW4enMEnuMkMVAfN5Qa33Da9cewhUawdNtTEMkZ3AQ8oZUGb1KFQ3",
  "key38": "HmDGpitPNGLsThpw3268FBvwtSwNZSWRB6fbpk7C8gp24w1WfDs8Hc4RdzBfrTLAKPgbdWM8SfL1r4gDwY8fDrA",
  "key39": "28EFF9osn2YzxHV7oC69zFJfLxKDhimRiVsDhXaVpSsn4Q2yADkH2ieyyidVDMDU7KhcfrPAPqYaoAY5r57GfX8W"
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
