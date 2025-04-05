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
    "2tZRMrxf1nQiXqZfqXMnNbmbkH5jRkafWvxpyZ9LqMCGvHbv7MLnNAQL2Tsfdo7DRsQCHEWHFS64yxK8ByHy2had"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pecbF8vJiFaXGxriNnwUC9fzYF4tGAtc39fe53Ph5TB5u4KP7Mto974AdqfwsGLwzuL7ui2CWpejqqrL4tw6LsX",
  "key1": "32joovGN3wcVWZqGfYm3DwjQmjE9p9wbgboNzixskTupX8JrxFWcAcGQF927ZnXisCxfHrPxXevPXuLKN5EkSGzt",
  "key2": "2TzF93Aj8rfxkLfzSsX7uX3g5Dbz9sj2rAzWMEPR2dP6meScp8FsKZm6u2cfTePvWwDkmgzkwvX5PjptnuqWNXdZ",
  "key3": "7NvyoQjDytHGdAApqd8cznupd6CUAjCrCLhNmTxPyBjfvuNginkRJTxdhBDUUDJreEDcisCXBsDoBQi1oaAzWMf",
  "key4": "FmBVYJcGmucyDsGG1mA5TAxaDVo1K9TFzsZkUPvukUpdLxGncDhEJ949U8eWQLS1o69AtEGf5QMzsj2TtpRsuHr",
  "key5": "5zqp1eXMa5KcYwY1xaXbMVzoBcdgx8aKDkQh1MY69jCjP6CWM4ATqNJXJHiahqzNLYSPDEeo2wfAV8PXxsXkQG4B",
  "key6": "2s5VH4jegxxvzkhh2t7Yiuc7LkUnitayS6D8X44XYrEPBu1Ta3mSf2ewZsbTCcBMp4rFc8qhUPokZ5Cq5cLUDSkU",
  "key7": "3bJLCZxnn1jWaQoh4hTEC3X5T8fpRPy3hE2xnjV7wqdWVAu7UTvbjjzu8uguF8XBWJheispLvApCitPk2Nr3YsKs",
  "key8": "6k962RMtbdXoNW2NNr4GC1CSz8SX23yiWaFdMT5uHif9iVJgaErsxjMC2M3DiVKFDe1PtCLSARwQ5Xg8op268sh",
  "key9": "5KHk2VhAY5akGS2K7L4yeNycgHS2kYehdhyxT7bfdoByPf3PNegp4BMn3yeHDV2rNMUrGv22XXU4Xj9bJRVrgu8o",
  "key10": "dFhoaKiA6DuuoiqKJXTGNn16sdNMcV5eCnSsnesU8byWDWEDgPWzWjVpEDH5J2QuyGgyAqV61jVeBvdKwuGWGaH",
  "key11": "3SoMho1yiN9dToL9YJGaGXxPho9Emhwv7ztsojLXmoY7t7aZU6HKWzoD5KbTaecrBLKbY4qQaUW1xmPYpsBh6RB2",
  "key12": "62TBXarZrdVCcHq3A5UdzkoCpxj9CZtfMeyKErykLCz7t9D2SoBY7eprQL9365bZVn7oB9zULURTuk1fueXURKc3",
  "key13": "3BUUhUjuKs8G4jr7Gp9NGNzQuoQo5P8cKDZ5mpv2CPsfUSLEWCvp7i4HYE5sUBAW995A5owUFsJNk2L8zJrNExK5",
  "key14": "VeEjF5LLpTdM2JApkiUBhkVP4uPA5Tbt5inDcL2fzmEUGfmFawrwoNerpJDFRZ8aR7jjLRJjDsTCh6qaA5mSrwj",
  "key15": "3YwrVYwVXHbgYC8LzT32qE1GcyUe66CMmo2cW9mB2S8cznKpebDXrrzqxdEYs8idiJRvoAqjYYiLmgJswXCNdoQV",
  "key16": "4H1XCvzkbTxdEBvg6cmWoBP9mVMJoZ3YPjevxVrKxJfXbM2Hz8updag7jQxQNuft8QpBJuCo9QMWhJHajkgD88UU",
  "key17": "43wJezhYvJwuQnQ4LxMtvLQVxsanF2gZt2LEokaZC5egX9DCTKi5jsxJaTQ7eVBiRy9iPMx91AkykndqkJjMigXv",
  "key18": "4KLaTXFk9C2XEq9tcTeFAydzd2cV6aWmj6QQxyi6sKwnjaptM8bZ28JT5iE3T58Vxf6p2cpYCxmhLJCdCkJ2njRr",
  "key19": "2PNq5tFfD8vrxzq9a5TAF3D8tQSUnqdeyju7JmaPEAptUkVBuGBSvDQtKsBhmn7XCVuGLC4FzKsrBfDRrLohT1x4",
  "key20": "32nSemtRhrVnPfe8ygqM31V523v8mttobHyWAmHHFRfcswfAsr7svBAaXzhqRTSCaWXJu5inVuPs4Na7BMHQjwkY",
  "key21": "3CXw54Cm5xFbEyCjzR2nZHFMHeBc4rdBGWdfVFXs2kNRNSUD4bFgLvurv7EX5cZ1S3UoW9fPiNjo9uAKXJjKkpna",
  "key22": "5ZFJNinN7Sm8woSwwaXuwZRht1m8Exg2xBBtcrR6rgFwvj1h7gYEJYrHZfx89fnVHpijKBrMN6ZhJPJxrM3daFE6",
  "key23": "2aQ81Hhe1zKfLgrwFcijkUzVLrsCbgGyNeSrrGGg5E649MNnUWJMe2yK9HxHuDbAVvVPByiHF71Yry9waXzzzgBW",
  "key24": "2e1HQ7FiCpgVLG3ejtcoyAKGBZhGqSHFYYXW16R4AGhuuBVzzKanz7iBDfUoooHgyZXaPJ9aWS9bcb9FbYTTgFTX",
  "key25": "211SY81h95rhMNj6xspa9r46GnXcwxuzX6RDzgZX6p8nYR94cn4pRwcFBGAyrTzbTR3VRuc8aHaTxvLt95AUmW6M",
  "key26": "Xn25H5rxmoWM1mZgDE6JDzYhFEwYiFb2jYMvzJymVdx4UXEbWSYqxkXe8ep5c4mAka3w1HWGrBCU4cb7tLETUkt",
  "key27": "4rmHxibffamci8wo1fqfXepuhEadvGgopD4HwmYrGfWZpwyi7UbPiPrLZmKuyFMBsS1J2EFT4Sr3qabQJP23HbYh",
  "key28": "5PqX5iPpGVM5eqT8jPHcBhFFNKESJJ6N3tnDREmx82GwV7fvY3DyC4Z3qik8dCPxF8NgnjfYqKovxDBTaugyNAkB",
  "key29": "q2wo8FCgLtB3ySr6vg1grr3qGumTbqBkFssAYvw4FGkYVzTLDbwj3T3jVhAX1WaSk34WcVL4R6JykqWG2JaTEP6",
  "key30": "2RHxudMpxauGezwVEUhHZjt7aV4HXTcuX2qHwGCjoSp3TjdoXRvEhZoHi2KCXVbxBJR4sd7Dw3HaZiwtZvq3MKWN",
  "key31": "2XD1JS6fGtYV9DEGA1eXkSBgTzXNNK8F5HDeLaEz63C6r7H5CKebApuykugDXefAnetX88RADXk1gV7qvVsSGdhQ",
  "key32": "4DFB38PhzLq1YBaQkVYDNbupFbAhQvgGpFMUN91JHENpW8CM9nJXMNv5wRvcsXKrdd5DXE27rAzTmYK3FpAzfcLy",
  "key33": "27MSLyH8GPqqAb3hj3h57DRmsxLAEZk4zypQKfrAQV5Nz3LsqepZ34YJmiJ4cbQw4uVUPFFBmpmJXzSzsZB9GdNv",
  "key34": "LqnkF1e1tJC3LZkVbh5xjt3UKKGdwZWzD5hQiqeXTkJgMejk8Dkse99Zo5piK4ndbtKvy34CrrJP1LFvFetJ4ME",
  "key35": "43scPgAt9jABFtjzMqidvseRpQLuD1JFpsNj63azWf8gR3vKFhDJa2QWBMrCZVJQKB1wAxVPoZhPnqGzs6ikj6ug",
  "key36": "3pBRSF7m3jJJTwMYkaTvetikG64atKf2ChAQsuYqPPxtvEarMs5sQpVw9gofnKiMDxNErvC5bxQ8F1abNd6XbpKN",
  "key37": "5vmqx54iZqbipr64McFT8pNH4XqXgBJAMDqL4i5FMB5ia6FkyY4P5ZurQjjHqUu8PU76YN1uVSxgLCfyW1t824CR",
  "key38": "53BQnKYrRsFCm9kvraKGaRUUmFkk8xZRJ8pC5hiRewJ1mqvdPmdX4t8L1inR2btNcFvtVtsE2P5sHko7pycycJzq",
  "key39": "wfT5hyQ1imE4ywHfya3TSeBi9maCSKodD7hkrMQaEK1fjQ1rdhpoCq8caJjLfXdTqvXmxM7kAtpF6EFLsshj6Fm",
  "key40": "5FimKpRJxbyQ1bsGGKsaTLdGR1zYD3Tu4AyNdokZY45TesSDkVTdCbB1qfkXKyx6cxuU892isVUh9df7hMMphmtX",
  "key41": "kmzvm7TYkLqwCJSzEsbXPZuFgYpWkBYmZRvkYc8bdyA86LZtYyt1bdhBcrApcx5FwC9iQ7oMiWEJPZqxNug4V3T",
  "key42": "ExE38CCxexDV13YLxNcdXYfz2bS8v3j5somEKfbCG8Krj6vYjaBXBAybXqHsZqzeZma6zuwbuW18DgkESW346mk",
  "key43": "55zuTd16vnUx33cE2TRthBcXmRESX2XLR6QrU4aN9s1gBatSkaXwN3wQBHYCJpXtepxQWRtWVmuth2mYrVWZMPy9",
  "key44": "2cuQXxrouBd49mTGdw6wiUo2p1grm6JNqXVLonRV5co1d7wtWEWikhmmhw9gnFedh4YDQvzCEsBZ9MwPFK95fnmH",
  "key45": "Z9GBmyXJdQNQtsLk2RZyuGxvu8gKpcNFGobM6oXhwCxtok8A5eQ2gWs4uXL1GpvpVj6cnH1EeDxpfokfEZRjBxD",
  "key46": "3sw4m424j6fvAyCectqPm63m5KPQytAgqJHo1iLEbq1eiVXkFYAC6XCmFGFPaSsjjuNAatuhJFXUtWmzgvxdYD1U"
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
