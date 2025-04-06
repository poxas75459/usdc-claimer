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
    "2pndxvpTukrqeiCAFJS9Po5DzTpuZCMFBuTpZ1pAkxjpBjjG5uwdJxsUGNyMU62Y5YUmdGX25U2UuahWoxBTUKMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q95SRXX1PcZjNtFGum7j7sN19EGyDp1ysEGS8kWh9cuKUEtmxwjbLbMjBWfTkfmUX2Wrou7W9u3DTouy5uw7VSX",
  "key1": "357WX5Nw7fF6Lja4dQBqnzGxdewM86LiSiiRnxA9Lako8u74vo7FXWGXW1N9YTnupL366hjAbVBdcmXAHbd2dD82",
  "key2": "4XD7J223QUz5bmfLar6o9knLTbtn6zrBhGgxhVCGXkGHoMwRiiKAD1n9t39UoyTWFVrjVpDNzqvAVhne4UkJhW2e",
  "key3": "2awpRiqsnMPjcL6r3xQZGpUvcWfM79EdCVhQjjKpdgVMGcEnxqc8UUCiVxtdCX97vm45Y6JegJSKhcpHotFwJz7j",
  "key4": "3uvpSfojhGJxnjPepH8SCNRXEHRfyvSPoUoeSHiBkmR1fsbBtsYGEuPCZc8BxHVV3dx6VxYEqqgtv9uKPvAH6D1Y",
  "key5": "3TxsSK1b9MfnBpkrW3VumtK5BwdorLQKTMXuMtJLgivnXQt7UqcjzpML1RhBYYtyamhxNc5VGxS7JqPSVy1LHkDL",
  "key6": "356SwqP8rNmpahVqdMTA8h9V3ycKiqZ4DBCQp9xAp5JMSczZ7TdzyUsHkeJpixCrxAcV63EVdP3RaDNueq6DGDsY",
  "key7": "4mYWYySHnn9ntJnHHqrJGmcnqUC57UWoih87qRXuHkub6Y3oW7rWu8XhLpoJ1xiGPrc7uxy27B78UT37J8uStBaV",
  "key8": "4ms4gyLsgWKkraUgoXVdbhFU2SPSGVmyBEqcLKepdP5Vo17pbyrcWJQ6dRJTS2hVpB5DyQVxhy6fbkEMoPEzuGdf",
  "key9": "2KxDfWxzHqWZpbPSbWzmGfWdDrHqEbJEZdbMWW6BVKf9eu61sboKDxEGvddN3BaamqU1oX5zNa7FdfGFP8WXkH2H",
  "key10": "YzUjRcmPp1cGZpWgTUvb81YnQKYR9krg8waqBLpVw81e9xnH85xL4kCPeT1zzfStPTcvAkfB3qUEffnUmuTztuz",
  "key11": "4xoZRD2Bo7DkSnp4SPAsYStQLw3qdG2LyCYywjPQ6rUHM6eHLakiRHsKFaJb6asLxPcFTFSWuWtx1YY36k4Ebhb7",
  "key12": "4JWZ1N6PME6MnNwVyN1YkZLc2EjGVGfUzrFxakrMpdPkZJyYuiLEQwYKFcBQ435AQ3Nmev2m71ctfK8g1BJNJ3pY",
  "key13": "SicT1KmVJHtyBepdGqaTLnnR1uGPVWQWNvrWWMWb9mDqpcz6xKprR9Cq2y7xqEGMZWrcB1stypN91WoywGKvqWJ",
  "key14": "5ktFPSRo2JyGb1pocTauubJHymqSwjTi4Qoq5Zu4BxzfL2xQeE74tpkYZTzkAitU7rricxF2ZSPeQV2UmLdgoiR2",
  "key15": "hywYKj2zh4xvhhKPX3h4bkSmd1cdQ4h4zwW32pEeuuqqsmf9FghxkHdKNoBYdbBng3L6V3oHvKDzW9KDniirDra",
  "key16": "4pRNPgTzoAkeYV51bfUNgQJp8ZkAniALxNdPHYdrKEoThNuA9s4Qj3h1cT5msBe1GSVaJpVftQVhLsGP9685mAMe",
  "key17": "3ZxdCpztiiYP8zQ6W252As22AhiRdTrGbeT8MDzyFpNKr6bhH7xHFRcAKoVBJLd5MBqxUML1mzR89zxgguQNKpns",
  "key18": "36ihM9h8pmeLSUQ3gg53reuUbupnSeVa4e66N78NDheZ427q4a9zCkDwjYjPNF3rgFS6U9nBQX2L4U1GvXKBXEHt",
  "key19": "51yrPcMmHntU73ABpuexuCCiCDARCvXu9Jq8Y4oKoinBUHNpG817gpuKXwgvDGHuZAC9YwDeZKVhB7hxHF2r7HAM",
  "key20": "PzryYyhovTQBg2b8Ak6pCtvXqDYv7JXc6Ts4kfDRNDK3cDQCmse3B8xMinVfnCeQQ5QJ7FeQk5B6uYoQ2nDK8so",
  "key21": "3VTb7WVZ4xokM7v7ED2LWzqj922cWwTYLMayn9d2Q7j8GP4hsckzCbAd9PqTpX54uNjey29DSg82B4cQR49k1Hz5",
  "key22": "67Gjv867Ld4GdLRHRArrfVysc7raB1K19hfDA96WhnqhzUnwNQrXc3R3SHnKXTbKcnR2NEzkMkqaDX8f2EJeaqqF",
  "key23": "bcaUTDgXnxoDhjB2VG2W25WCQWCQCB4srJbeVh88LoeAXSq1XMAT9xwrJLxjsyV9AY7hEsUHZo1ACoE8Sp632ES",
  "key24": "5UZ8qZ2tT7fyfc9LdhnyFBdQwDRMm9AczW7dRTc9FYjK9Mw4q9moPYbPCfvfrjRUmchgSWiNUwYrohY4B49HzKdT",
  "key25": "4pR2rzLMCvYoX5VJuYFfoHCRLc39a9DzYizS2Xsq5tcMwu9oHid7FDJVrvpsMDb411r3gdW8thGy5kmw9Pqik9VT",
  "key26": "4pVr6ESpUV8zEDCoCR1fnckD3mBQb5Fb51cwh87gh8yi5Y636g4C7FuJuswpV8HvqxHNASTmV513LSRpji1rsCPS",
  "key27": "4FXo7LLaaBY5mpFbBXG4HFi3AjHkebvxd8ru6ZczMy9xphy2FTQg1AY9uGUmkY2VwPtMzL92QnqwqsfRGfjr5mdR",
  "key28": "4Lx8qV8RkDCt5dGh8QYdaxFM5MU3Twu3qotnsjiZQ47z1j2wAqkho3jvrfp74LcvWohtywHn6FKvFUZtpURZUH3c",
  "key29": "519HMRtpbxNXHLgidjwPQXbFkAg9BebsVnoyqSKN3rPEuS8AFqCh3MXr4FVZgtApqZpQAZ2zUbYSEgmCVucafgBf",
  "key30": "5nx7G7SWTHxXsYfyufdxFTirgnXgRjjpGsk1VbkJShqjMPGvm8V37HECvbH1j6xnj9BHK7VQsbs8yM8LB23eKxYc"
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
