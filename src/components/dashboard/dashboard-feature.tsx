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
    "3CPi6Qqw2fARh9B2NwrSAknD8EFYwSqwYatbsxjuVQyyYxYFE31UUBG2BF1P6a4LmEphFKyaknMoNFtVm5SsKfWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfwBbvskeYwWu7enoqVxtmRywHrVBcc3N63sxTyRDRGuJbnRBXe8NTfwYjYyGPgRxrHUhdm23fzpLcMxdfHbifu",
  "key1": "2sJdJD2SPEsbNzR4yyFccGJmCr8cV2Ugk6ofESxqwfgRtM5J3fVcenmpyPgKRtEdvWeyBkUK3njsZRbhqVh4FAoF",
  "key2": "4QQW5HJ8vB2C8wdUB88qtToy7fcQzwa5DemB1vERZCFydN7gdQNdhXXdYtXd9UhNRpC2LMQtGRYgqjHfJbaGcLCo",
  "key3": "4x9Vy1oZfUDaNTorK6PmzWhSavuQCfjLNU6h9qn67boaY5bwcxNVjLH36rzAFPT4uxxjSUmvL51MjVSQ2r6gtaqa",
  "key4": "56EfY7v2bidLfRpQaTJVdyUUa2hFg5zHf3iCHrFTVHWEbp3YeNEvKC2kNVoC2Jrui78tJJVLyfarMhEni2AMhVMq",
  "key5": "2C7guSYGtdkzfxV2X1Gf1vKiyJvAzsYAj3QmVXNCcqXHaERNYJzXppg6RqeHZxaXBa5fTQytwtNAthvWiEbh74FW",
  "key6": "3pAvYLZjEX8jVmds9NMfvrMNhEKFq6itiSggBKSoaZ2meCpkK2z2N6PaCJgSgpkTgtNfQKVcqLr354oaZUrhY4AM",
  "key7": "VropbHfY13YtiDPoBPCEDy1xZWL5XxTJ7Vz4zyf3k1scGRx8hpM6zNEKLHwyLaxTi3yEn8rQXbScuoJLLbrZXTr",
  "key8": "4FmdbLyTrTVacMCbY7fJdvJkBHNNcDtuPXAZMTrK7Wds9GbdrXH8pmdvKUs4zu6n6XKGdFng5QJYQePKP5HJpiWb",
  "key9": "31oeFqNH55jJEaLQwUWH59hNpFVk8fQRbbEvdGSdTeUitW2zZJ2UnzJ3oNwHntHymMBLs1nJ6mrPrfUr1A1cK349",
  "key10": "3dQPj22YSTNTNASbTQNzMZtZADtXvxWu8V33b3VKpGDz5B23z296G2Y6a1psGD1F4kvhJZkfCr1isTzidezgu424",
  "key11": "2XsWdbKBLgjszuhyv8DDFi1xNxSVsL4iGPtgFKZv9KL7oqduixhowi8ydjAhK1mpDQRuDV27a65dP4xLyitHTVWa",
  "key12": "51V9yxj2xNpEVR21WKyzuxW6n3ojYyhRh8xXKbQtFBqSMNGkaeBNE8tczGFxqQFHwBu1HhLAWwHEq3rr5ZT7Apnw",
  "key13": "4uQMB4vmN8KUTkZJXyQQrcdSRSYmGWUf6wgfkCAUPJgfLA1U8pdjpdFmt1FbZbNQ67h85t39XVPWhfXJNvKhvs4i",
  "key14": "4Bsn4b3r6GGkz5k9Y66MdnKE57NoEbyZePBjvQxkFfy6rtqoj6aXPa6iTC6dnyzdt6T5XZbPDrqvfjg6anCrJwrD",
  "key15": "3TpbHAaxmmFuJ7h7xsYcG3NbRRXGqLUGK4RfrJTp7xsckmsSL1gsen1ZK3fS27qbqmcBDsrJ6PHeo8uPT8Z5nb35",
  "key16": "3RdnLQkLoA8xbJbTxvA88AGpqgHgwUPZ13LiBy2mdYsrrcwT9Ee6PdwbDEZZUxfrBDMgGwTUuEnuFAoErdPqNWTw",
  "key17": "65t5XdtM1RCC7aczLZUgbHkyp54nZ9btqCtHEgsw1f72WEcHauyFUrAB3FZsXTfYzN2gZatPg9su8K3czPMnQBod",
  "key18": "3RrjEKTvEfiTyx1BbGndfhCCeUiQfUqyqMCevcCKGQRmzo6PNwHztNkihgu9Qw5XLTYyfZu9rYySJPLDSBovzLei",
  "key19": "52nXfTBadQSJ9CckyuiJHxT7zf3qgzVi61CuUH4LLfB3jGD5zKqYDcVZ8x5M4hZsZnXBhx7TgvFw3tBoHtYwWs7N",
  "key20": "4Lz7KHN1UTxcDDUxo3Jti6eLqy5mcANozSu4DTeXAQ3MdQwGbnheetDMF2mRfkAXWmnhrRrf1bc4j1wc64d2H4hZ",
  "key21": "4xf1eX6ViY1v8UuFuvTceA3zztybrr7eYyVrCjcxHi2mXAi7m5nCE2MTSYqRx5ihkcWdk2ro8bKmVAFqW2qNGoFy",
  "key22": "5oULnwATW33MRfN2nGG4bbsLC7SLqB3RwmTkwjiwRAaPKHNYj3ch952srX5ZA5A9JpAvCb5JNBWaKuN3hYgA1xKV",
  "key23": "3jrQsmyoxH5Eh1F2ywsK23PF6LV9DtCrcDkbBtGtZWzq9hrqtWJUQVumvxGsWsHq6Dxpm8vdFu2XsJxXzhg6jf7h",
  "key24": "2oazRoDf4pXzqf76doZFe76VH51Vq3c2H38wrpQWXYi91ez8oth6VF8h3buKpivrAMTZqbPZhCZ36LjCr4nifiWs",
  "key25": "W8tXXYF8wFA7Gjqe98Kvrz7W9S4GQ6HGbqNTyb9gdeFWRbJeCEPTmAA5JPZCUAs9BiSXgJRXMqXL4EXHV75Rm3v",
  "key26": "5BYoziq2pTegRTS2cRa9S2Zu4sQsHsSoVq8V6MjakMkqzwa3PCP56dKXwMYjjGLbqCEUp9gjGF3ZEXZbQPVgJGsd",
  "key27": "CECGwFp5SaC6ExEGxG5WVecJ5HiBi5jeZK8BDcj4Qu6LWnLaaTsZMay576rTzusm21iphHSKzKr17WR8YDVkBnM",
  "key28": "2WmwViwRYLPDgv548toYixm9cgUDWRjEvuARgNvFnfrfY5hzmhWrzu1LYaxFCSu9dkCCZKasDwtFF6TaG4Gvsjr8",
  "key29": "2iBYoRhv2TDJYQmKCYXS2Z11sQ3VmErg6uMyiUrXRtwAVizqo65S5Eew84tUpKbGitnEQH158v7yEwr6ycQ4pLeH",
  "key30": "2XJop4uqEYbfnmhtqbdRjoWLK7RL5pF7tVRj2bLVR9aD9v8M6NyEND7PFLJtkxsb6PoHjYpRSnz6R4axLCLouksi",
  "key31": "614vUar4bv2rBzRU4wFuQReV3kTCmR4SbsqewV2BHoHoQs2WFaBiPTy3NhKPjvto7nXD8S9S7Nk5RDggUeG1a3RP",
  "key32": "EoASu4GvWjiJhFY7yKF7FMCvJkcCuynY2d5dpon9H6sLcUsGQTxQgnPsQwV34iDyzmm8rdJZq2GfwZBPRucUUrN",
  "key33": "63CgMvAgekcPFgAk8pmT7V3MsVmzp3iocVsdmvBdpKf4A4DaKovVZH1mZAvAXuZuNW2Fidhqg4PMf7pHXdoN6vhD",
  "key34": "523poqW2USAQZyvdNMSLhRs4zkiDgYhqJdcUykKifkV1SyLZxuce5DUbPz9uu593KAbK5UWpRacxbbf2RQTaEB7g",
  "key35": "4CMY2Pd2iBgfmcz7cVJheKvzxX9FZnSLdKeMioaofj966iuo6FcLWYDCBVuyhM7DLxZhhZkWJ6WGjx7LfuivbJCV",
  "key36": "5sLbfvNabRPJY3r1JEeEDrsCxbmPyB4wkBWn2MJ9mFRKiZK4TzqjEoZC9CXLtXhZ3SQmmAH2Z5UzHS9VHfdtYwGs"
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
