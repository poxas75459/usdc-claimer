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
    "4Yoi1CaEZP5gbq3t8MkmxMSkPH8y4ZzNkXvUDC5vM6NGMkY2HiYSrmLjYSnTLbhDMr849di1uzM2VmepTppmfNRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GAoK3bkNLSW2eba75XBrSWzpVTqfQHJ6Rf45gDpwFFCEwWYxsbXXq5NgFvSPuSWKKUxpnxRMnsnSFxK6pfoKNj",
  "key1": "4Kxm3VLWdTmoN1vcSn7V8t83sPMf8qrGMSho8gEUeb6mPJAFu8w2e1ngKzZKHAx56PC2HPvrogBpK9Q79tXMca2R",
  "key2": "5sHm7TDg5SzRPCcujickTMPLxofMv1Rs4pbCzyKN1MReoZJPqE63EzDXT2ZLnxb8FG6qCpdw8gehR8bFCJRzqyNH",
  "key3": "R74ST9k6dAVGenuh2QHztu7XnvNkiCYXQTxLePzPB8pamMuabPjSJ6jVRECxdMo5QFi3NEbBFXCVWw2VkoWf4au",
  "key4": "67Qw5GMAWsshNft1TjSdaYyGzufjPKneL3ddyySZRX51pZGvCoH7AEsqLGngu8Z4BfHXqbALLJBRYXNk95ytF3yh",
  "key5": "3ySwMC8ujgbCMLv3mYGjEjCdQYw8bF1vT6yyRWty1Y9hawf48nVFE6oE5G3pbykGfc53BgidUqcWoX5Bw1nLDs4a",
  "key6": "2AiSdVKPFKqhagprZZYBaXGob4CEKR8rw19srkJn3ZefTjWTnxxGCa5SKipMRjCSssL6TN4GNojGfbYp1Biwg7Aq",
  "key7": "2fsbTFDsiwcbvqASnm823UAdNpNMbzRcGxeJw3YpZZnLYWWNt9Lfs7rycgkN9h6XR6EYGxybFgDbmcNhG7TRHQjd",
  "key8": "53o3yeYtvxqAEASKxXxD8gcwqFJ5fRzWTD49fVZS397iBf1WfLAsUByndjUWLgCYZhMvWcbMPehbzNFcTszk9m9P",
  "key9": "2BfguYNoxemQFBbmMeTySwAi1ms88naiVtHQTsix378kmiEKsvD6wXwKsjRQKQzsR5YFobMyJ3Ph5RBEHPbdHwCh",
  "key10": "2jZExG4m1F59M9AgDjs3VE7vBxjdQLcj4GKtNGscgaypv3gAe4FAZjXDKprNoy3DzXbk5aE8zKCYvEpzNYCMjoV9",
  "key11": "4Nvvf1N6b3ruaHA1hdiu9RUvE89VhghcBmxeC2ixPAkTktBcGLpPJbCxWMqmbTh4SVJYnzqpdX5YsZutEMUvojzN",
  "key12": "2ytK9rhKBkPRHR9MxRxLedJjSFdhyg166YvEg4cC95Dqe6hBykhciiU3goAsTS85U84JEQWfU6N4x2wABYzsvVc1",
  "key13": "4tw4UAJBrxorBLFgUrhN6PJQXVoKiN9TDvgxZNZgSwqkZiJUpCkatb2EGdrNUd8Eby9UfZ9vTX7NQi8AXfBeVAAW",
  "key14": "5geaLnGE4jfQmWKVydMoQywCAN3VQBpocNT6sPA1WPQTcJQ3cswhDrdjHLJ1QKcrbBGRT6BQ5uHwsCYvTv5dwbWw",
  "key15": "GFcfj7wvBr8Y8VBScZgFVvXNhQMqSysGXsKG8ReTrDfWwfaciVWuXt1EtMrbH2CSQGNaExCuRwFpV3JUtzSr1wU",
  "key16": "2C9TSprNkLp739DfPMjoUEWChi81pAccw531jbreShbQbpKP9c9fmBnJtWSJb4JnvKEx5Gqa234ZRG3vjyF9RJJ8",
  "key17": "6MmtWdL9VPmb42Zgk2fh3Vzkb6RVqwb1FWta2rxMHjfG6YKfggdRriqAoT12QmT4yrZNG3eJbG69QMaMzfHfCFE",
  "key18": "4YFUS25HWywWoiJHBaEShcY8uVRHBiTW9F514mfY9PNeZHmsZmR9gErXYfCETrBWmkpP314SBAffsbKkRPAfR4Ui",
  "key19": "3JeJ595jdsG5B1jmnx2DsrnLUAy7iEQWpXnMC45tyri4pm1d2mstCyV4iZnErh5rXaPxent6hAojbpdXjYfgkgHV",
  "key20": "4TfsDe8SHdWyenFJPXzzSS1pUUuh5Bu886pqVNuoq43DQc1j7i2W34kTVK9WZY26FQVgpKvpq7ntgoAxFuSL4soc",
  "key21": "43YhFJ7EvCBqNxnHTGQU2kpJx4GrULcAXTBQ1qnZX3DSiwbH9TCZsweKNnWNp59yy8ZZPWqPgYZokQCajwCzgg9s",
  "key22": "3cHjs6T67K1xjjDvGLasQCHCg2V6fthwuteTz512rjQMt5JVUUBdVQqmE46LfGPzm6mQm2WZ1SVXo3eF1FrbKFtc",
  "key23": "4wv8qv6DpBtWWW1FNMWx2o3pAkUybcuTY92r9dJfe88DapMp53pQBBkhNkawAuXHpjq2PnriHhdBENFMeAYbgYjP",
  "key24": "2qV3e5j1TGm5MQqG6gwfae1HdJSjuoHE8sS6haaX2uNujNcPWrcrmHBjx97iJ26MosUNQ6MzPBGezhEisK7akCDB",
  "key25": "35ZVKMq86JsuxRvEaCNgySSKTGn7J4nQeSAznY5X7FHGbyjZsQPdkgKev19J8fUW6ujFaGwCLX73wtvnFeA8J7c1",
  "key26": "2MigyQLxKHq9LCWiq27w8DQStdnyJGqevCLRxadgPpKX3G1sj4WaUyYHoV61coMdEwC1W7SN7fAHYfFTvYaiC6mG",
  "key27": "2TsXXpRHforWWjDzKSYpF2bkG7yo8Ln2sf1qa2Tr8DPDix3KooxhvecnmBF7bwwzmBkUyBEKWfotrqi6YjnipfX8",
  "key28": "57onwPmw55RSXjGXYh3TF5TuvWzEfgZtinvBfytqtVnPLiAzMkKdfzB8vVeZnyA32qSGXbi3jgGZ3gEVzxtWqnLp",
  "key29": "5rdtaUhaRFQPu4RiAro19zywZu7XVnMbqyRkmsrXEkLVDW36DpggRW2cCZLEKvyJ2DrUbgJHVjVrXNaFJuzdsxfv",
  "key30": "47YJnpZ72BxoiaH9TF3AiJdJvL3dnenNKbMRqqfUnrspx9awe3gjsCCpXVyDZujjzywmE1W5bcr3CMrcURrh4QX9",
  "key31": "3eVDwov3SLwDCrPXoJjqTBQr1jUcrXJfctpHwfCuzz4MtQpnP3SK1Fx2A6yKX5GA3Kk4XoSrUbhhoXUd1emYszMT",
  "key32": "56KyS3e4NH2Y3zucq8CFNoMWbJcUKsc9Qh1jpDzArMh7phVdxBcyUhP2BeWwNaErXKhpEkeazkTwFtaucoLaXAhT",
  "key33": "2g5ecK8gYnTySYbSSFRythZrB2tHFn9u7wFSob2wCCJ5a6uHXrqUi8FuaZRBYH3paUTB5KqCfPL4kkACNDFtVx5k",
  "key34": "22isGRFAczigcxtooxWxRAHWPyMc5Q4fhGDFQqgM5KzyaZt2xHkHMkusx43aFohvUGxPtdqsDpTyerVijLwUt1uF",
  "key35": "1KX11J4ixDPWhjjAiYi7hPwwm3mEuxTzFduTUAkLZqefV9SGcU94YKrNjjb6nz2jPEDNV9YCKk9aJA2GUy2B5UQ",
  "key36": "42QvRAT4rdMeH4A7fqUKCQo8jyJtoTVF18mfmaChEjcGcSsrTGrB71TESrMiwb1XmVrKNWhgKfqnN59SNgnEVkjC",
  "key37": "4sJSDSQWPfABinJ42gSMwMPPCjkcdXSsxKmfXmUDQzQ3KHYKug3CUdiFuZbVEAEi75B3qY9RGswtDYGJ19bXuj2T"
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
