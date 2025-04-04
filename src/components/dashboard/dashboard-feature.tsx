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
    "5ZvMzit9qkAsoCsSoG4FV3G59PwHobKgeLPkpLdKe9GJrx3woN4G2eS1HNWCoZAJpeiAefEadB4YfN83RcRXpXdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nc49zxuKTyV4TrXDr52uFdR6qgmwrHTZ15rWXVmPyRRFqnZvHq8YEw5vPnt79znHgr6mBpWcMvs4RjSCgmjmvC3",
  "key1": "2mjR71DYSoyFaCLiJ546ft64vYbhMFoaqF4TJnhvG9F8CzfYJppWyJnsK8XogM6JZQYGrpfJ7L2fKKzFhdzdL1pj",
  "key2": "5G7XbrTcWmXebC39dcnAdJhSqezGz7S94MtNkYj5tv2GeN7GqHesuKChq5mwZZCRAkXT85h5jpH7Ha8LjNiuWbJ8",
  "key3": "2dsJ9A52ygPguipeV3jATUM86idzz51yyhvwSQvbTyMuuRQcAqvK9nHvDJyQs1FrQb4xUd2uEkUjkJnGsjKpdnpJ",
  "key4": "3osKyBsK7RRPLCWFXHybPEaJKu9WfgDb8vmcsWRY4VZviqt1wSGxnWvfq8vzE7AgcBv2FRFSSftnx8mQ5wP3ZJgk",
  "key5": "5X7LxCBfRNemuxjtsWCRD5MvxFeAw7FdzwnVBFAR3RB4L6zUVDq4UDd6yMzLmS66XtHG39PXE3vc6TXPmKRKRPpP",
  "key6": "64uWXtY3Z33ij4Qu4DhgEt5EzsnQgTJYiheEzYtr5BHvPttE4KKMey83oRkDw96PSkmzhjN3PZK96AyzGbwgjk94",
  "key7": "212DRdzPJ2Lay7cSe4n3J3THS3MSKuY8RVqFb6hfCooV4ZhijSLMLxKvDpS2YNtiYF4L97Vmu8icfgMix64NtfHk",
  "key8": "3r8K2Ff8dFD5jCUoPpKUWTp5DVM4FghUk3DXahAuzQWRSKYPShF5SUpuao9usvm7K4DEe8TaGmMea7m32a1BFAVL",
  "key9": "35SBGapyycYjNWzsxygVBQoteKdFZBYE1T6JYJkwegWP4ddyB4TQut1rhycrLwRDGasxEevkkimLUzvTNWLKi63A",
  "key10": "knFpZhoqqVcXKfks2jUnsa6Qa9PKvgGqXD5hd8CS1SzoYM9fw2QBjvFtQuDR7bS6waMBtRWtwWpE6jCfe5rHSHc",
  "key11": "5HJHoycWUr6Gib5WWFa7nVr5PrzSGuYrfUDCDt4ZvsvojNcJQ9s35SAvBNsfMVffwxF1NNUKzJSpCZzq6yVEzqhX",
  "key12": "3MJYteJqxzZs1bpm1U8thbc7NA6Ebf4Mo9WEtrE94Ez3RiGgUqy2p9UvkKLq78jaeQoFcpgdTsrjpLPvbJHFH4fj",
  "key13": "3EYJgMLjgoqnpGFeterNS2FhwJp1iqff3TpY5F6ncmbvQpUoU2znK3B46brQsyztrKasQoD4J4r2rhEUMedWX9Qi",
  "key14": "3HvuaQ466LWT9xbrfLGnpoaZpSS3ykjTtXM9upwXBacaeXzmQ8uq1w7D6QzUndUBePMt28vHXVegWy2B2S4dEwcy",
  "key15": "33NusFyTBFCWsP7kZkiKA1zu6Qnf3AuuDsMz4P7dB56ARS21EN1yC4jGdHfmtdkyswwd77HW8qJUUoLHcd2HD1HH",
  "key16": "b92D33w841EgMUXenauip6FPChP8SWUpg6etwMypAPbUgeR3ZzJ5wRjyqxh4jXYnaY5jcy5hfeCWND8zQm4AXvV",
  "key17": "5v2twbmdsiK7JdwpAtfTipLzDH9YRAxrQfSLvMtTZLraHvsHmyt6AYZsew9sFRvzpXSyHYrvJJQdbBFxmJxo6MGi",
  "key18": "4iHG3JtKNQGHmC6Cr9RtLdf4NHiLqvjHtr6DcwquTvFApbmhbSH2yykdoDQXgUwRcX7pgxQsPLsaBGSKTxdzMXtk",
  "key19": "5Csv9ctPDp6bKf81zf2yijmxJyXsBGTekZC65HE7fnrgjzz2vx1Me2P4Es3JsA3nUHcqCsTkkwXVHtrhdPMU4krt",
  "key20": "52pwwDRjhdj8gUPFdNWTZqrMoFPaBRwPUS7mofXheKy5AL83xPsS5QjB3EQGS5Mmu6UToN9XkXvmbbsGvGdykDjQ",
  "key21": "2X14wAbTjeAtFHosPLfznwoTaPcZ9Up6vSmBYvXhGsWGG16ikoKa7eZoXSkD2BDNj79GtvENE4cocwv15Y4t2BjX",
  "key22": "oLhATcQFAsSgUAX5KPq1ZCgJnfYRCLhZFrhSbGJZwEMTN6mJNN5H7webzSoaHRWZfRxjN9aeRwEx1H8H9XRHCJ8",
  "key23": "2Hbbn9vnzWcjpUxwyeaB8JfqCXtuZfBtc1DJjuFGVK7FDFwgVYMSfzYpeBRN2Wvq53U8RCwBpgNjyzcJxJnai3x6",
  "key24": "4XCqXeqiyfh5RWXRfnx28awg1CzieZjP433FcV2xspbDyuLfQ7ynvFYg81NEZwiCfWzhve6tXrPCLjpcy3QBJCvP",
  "key25": "5sS3CQ12V2K8j8oufEgEgbbnHFGMfghRAZ2DRkKcw1DyQURer5A7jmLq4UnV6MgbXJz3EU933v2sjGmwE6jEPcYr",
  "key26": "FBWY4uaz5LpD7X4JKWqjm4AYaPG8Fcm4zsgjQVfswVZeeg7Ark4WgAxJJovjZni2738jADMuwqJ82HEd5nALLuT",
  "key27": "7KM8DRRTwf5aybRpznraWN6uu1nJbsBh1DJTVdGUL8ePykuR2RGCmN8QB1aMCSDDgBwyJ5scnDGkp1LfV18goCq",
  "key28": "qbQ9nYpD6BbyVsg4ZhaFXuMihF9TJW9WEDuVasduQpY6xNKbHcMV9KYfExdEgojKfVEsSJ36zRxzuD4EbECPJLQ",
  "key29": "5rTtFoa37rjm49VjooxDudhas4Etuy4fCr1JLcY6XkHP5HxD3UBqdtaMd3wzysoKYPpHzUVw8inWXaiTkrrxeqGP",
  "key30": "84RXT76fjj4F87r759cdWXWzhgRrH1yJB2V72vej5iPSB7How9cvCAJjcntzb9kvamvAPUmW5sdALVfDj8i8ugk",
  "key31": "43JaEy845izoSF57Zp1cAGPW6smX6H3u2oM5e93kk7pLR7kvv8kxuSVsuv6rgwD2j4bqcdj7ViDVWbSDitPNwq8e",
  "key32": "45YGXjyB1r58fC7beCET35JZ7rjHFcRHNcHCugtgLJ4gerwgBsAqFCLnzHWuyApkQT8ZCbvuFnMCmyxHPQvgbt4t",
  "key33": "m2saV8dS5pDwaSpTiR9ZFpwNkR6YLagEfGcXujiALJpArac98njaFz9NARKaWRDt8WmVx9zxTB1NgJ931UvAbMA",
  "key34": "5wvkFnW4Qx9QG6JHC4wmaoKQA5eXBhSvE1KRZPKoxyLyPZYFv3v2cimmBdTqr3wC5RboYdqJkgV4zcxWe7KfqYum",
  "key35": "44pi5pEm8gWM3UrVVbF2kCbXNarq2MBtJi7Y2Cn7M3Ecnx6iT1mTkNRjtehbRpxtJ6gmTTHbg5QRc21SWTFSReKq",
  "key36": "4cy4AKwafhamFLHd2noZbBfxnnzpGLDy4w8X1iP8asy9CiU4gu1cTZFHBRZKrRouwGc6tZ78maadAwhAZZLCyWM3",
  "key37": "zromsP2wxC4P8G6gZ1gUZy6Y5PKAEwcRJxwaSkne9WzbPbm8bvk2BHUU5YkHMmPb9DbM7DNNrUWFoCxk5NaUGpt",
  "key38": "S5vUFbAf2aGgwGHyqnF4FYhBsmVd3EkcBybQ5kxuXh1Nvb9dVPy1o2WifVrn81cVuFr9xC2exbK5bMEYg4V7aWv",
  "key39": "5d7w1zUv5SkFFHJBhmgyUkoQkUnqz3c81gQDW29T18czz2h6TWkZfcCcsziQXME1WrXiPEUV8dAxhatNvkA2vezf",
  "key40": "2H9YG7U5yDD2dUpgM63QVfmYJmitjCqRXXJN72XDtmteYdDz5EU38gLcZyNjYMVuANNBkyWEJsSKd9p4CLbTgyvb",
  "key41": "4ymjvinvT8XJ9BWJY6RxMZCR173VZvjH69R6CYsquVsvW9FxZtFe9y2ixJymBG6dfWJcyffpKg1NCYubArpc2KVe",
  "key42": "4TQf78q52w4QPVQkMYeDUCjWm4NkGGVTrn6SXk43CvHSm8cnkRAeKp2eMyg4xVPSRAkXJTpiUoNfJPE4yMWnfzEn",
  "key43": "2ZB73pUa21bk5V66qPpLVmZ9hW72eiFAp9js14vGWaAcog6D8mCYWPsfVFFr5DFPGGgG5K7vT3GRE4H49qkXRPSQ",
  "key44": "4dQMcqCWCL5WYdn4VzUUQnUdjXtcZfFX5g5ZBqvJqSbXWrUy3Y7DSMqNASkWb2kFZrzr5yrLR9Q4ou7AW6awrQpu"
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
