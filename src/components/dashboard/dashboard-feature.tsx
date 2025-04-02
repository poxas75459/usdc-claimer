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
    "2BAKfhjpJwnTk9ha2zba4ijRjzZih8GFJTCo97EYnZ6TXQHSpJqMfM2k6uPJv8ziob32gkYbYs6pBVEyU1XFyr4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vgD9r4WVnoxP7fTS5VcnhdacHLkCLifQKiM5PzzpBa4KpKAb7XgMVnVWwRTJ1mkm7eKmjyECovuNgBqVUSyPrEB",
  "key1": "5ppWAcozkPmrGi9e3gX7Hc1pWwzTnd5WSbA3oowJk784xB4eufjPtb2aoKJ5LAGsq3xNTSdT3tLyERCPc9GdG4hq",
  "key2": "5sXmQWA5pQcR2c1Y62dVDHWmVyKTTdfgSiJaHZrLWUBgCZoAmXrTkcCrGP7tpN1y3XzyhXxpXufw1tkVcUD5UKd6",
  "key3": "3udBRQdwJ3oPGzz7T7VRxmwHeQdK5tZxVL5cKzXMvHmc5VQkR3f9XbUDk8WVSUr17fcBQhDQHPoUpW1RnrwxRgAr",
  "key4": "3qWZzPsR6mknAT366r6YRbuAfJvmg4t7U8gLQf7hurrRMP9FX1EeEfzDrJHpcEcThqMfePq1tmrmNqsmCDFvzQiG",
  "key5": "2cp74EFsekNHVy9PEWZcYMhmv2poNekf3thpNKKngT2qFEm3q8Z58QepzqUkDjmExPKSP6wzjiVNACkfkBx8nqkv",
  "key6": "51Tmk7e7rsRnwtHEyVo6ycGpyy9W1E7eWNhQHMjEDV8QpYDMfPVGQMNamsBWLqW2vDTduj4nZtTq3tdzLefiiy2Q",
  "key7": "4JhFADUsA5qhJEfvN4b6AomfxRCXuc4agosqtgeARh2jbWmUwHXG3Qw7p2YWEUvMseZnTg7R7oMqUQ5dZ5zUCXtR",
  "key8": "KMW2YYab7iUFfC77ZL7WwTYNWYsm4ikiubgffaYgp3FDH8UZ769MZKV2XMBn6B5LoL3CVED1z111FAWrdyiGg9K",
  "key9": "5kWskRL6qekyxF6x2Avd114ZUr4zVT5FKmzGJo26gVMxTp9f5kBEcmd93MU6jzaAG3cogfUN8V7En1kgQPaZ6bTT",
  "key10": "bJfWkWvxWMmrTQaBbTusDkW38v1qcazCJsw9osKCZmPXAcLcCAaDKtKGvGjXG4waK8jfrWkS33jVQQ3Po1xyvA3",
  "key11": "jwiqqSDgEi3cFXq7fuWe9rS5x75GAKpnCQBeL57kmZowyvRiXDsjo6MncSBMMmdDsnervTpYWJsUkmmaA74hWDu",
  "key12": "4UTUsE2AZ6NfeopuMKoCrh836hYiRCXTBLLJXGzTKpVLHZU6pftno4HoZ3Mc59yTxMzxEami7QBLhH8kNyACmEas",
  "key13": "4YFnWASYipkVLTDKDKFer3QrRw8QzHPqTHoga7MpRfUKMgMEJ1bu4exDPe2TvDXbYa41sFJj3UkzGYaoqcSUPgt1",
  "key14": "5UuurKMgizMyKYTrVzBTUt136G6trGXwY3rJr6x6rTsV1NYf6nsXx21JaLoysAGzedux4NN8z7LvPjMpxWkKUkAY",
  "key15": "52ypLfBk5hHLbDiiiDrk8459ebWf87GEV2n6bDBVEzAMZokqBuN4kRzdYfVXyRHuhkHRav1CSvNoGPyVsiZQBPbD",
  "key16": "THPURTHfidEz1MdMhi3NA1KKKzmiff616YSL6nUyEjwWWhDfjXFNDyh66mRp3NHonRHv9dtUM7Z299SUWJVqXeS",
  "key17": "2exiPmUXDvmszqFaAtdNtcA4b5ekheYgoieEo8FuBH4NfxzWKXUyf5adKGrotT5vqAyKdaKweZFLvm1RAtEVh9gR",
  "key18": "5VRzyTXmfuqqK5D3jEC4tn3vKauRKd2hrvWRhq7JCoGF4kELUcyxPULMHpzNhqiJ7yvbEgH2H6SvYrapXxPoT74u",
  "key19": "2UYS7Sjisg5srtN8pszyrFCLZdV5zJUjgTxSvrpfjSVqcHKuS8fZNKJo8KUACD3vDfLPyAruXodcRbygZTCXkLcB",
  "key20": "g4xA9YJG6dMTUHfUouBrgmqMriSXYpjjpsvYTo4oCPdUfe19ipAuXXuT5smcFu6TFTioF7BE8ioDR8StFRFGkmQ",
  "key21": "3N6j6rWZHp3ixuPUopJ1BpVw28U2q1FAKymKF47nZVhbmrr7fJegnKmctYY4HpNdtFTUbHL6v2HFsP44XSkmKd9n",
  "key22": "k7zsD849Dn1hR1cDxsNCKNJoKW28cpzUehbkE5MBjmPdt2tp18aZBwxTQnNxTur8kqKV35JYYbqnBBMMc7f1ZCb",
  "key23": "5i9Khfp45VsiZfCB5MoEg3WeesaXAbHWwaFUxJyfXQoBKfpbGY6T723ac65PVzoMvPWXbhnGnXXxP5rTGBuZpREE",
  "key24": "66vPPRSv4hbkh65wSFJ3GYBbjmDPE8R4UZicb27dYmENh8gzZscsGXxtRS83hcM5PAVHEgJnp1ZxizLnwBox3GrH",
  "key25": "3oSZUx9GAt3dBhvriMCVbnDTJR9n4qSbDf9sfk8PyvaE5FBnJJEiuEAaP8inWNp7d8iph4oeuiJFGpAECikoeVEy",
  "key26": "B6mex25LxWCtVHvVKwjSXzad2kUEzT32yGJ4841dL125tGEcGews2vMjTMbdgnNokvaYUswiEeKiVtgmbCpn8dJ",
  "key27": "5E5u4wCDKKFVZeTfEo3DUz1nRuKegCGJkBktuQdkQrPi9AHDdAPJdfMDGurE8pgDvutHuRE5QYX3ZRD7pffG5vq1",
  "key28": "41R2fZkpdpMdqYMEAWZ2R8E4aGgKa1tipQN5Q5dEvvZhDXEbS6afX6RxZrP2Xw4Y55vqishPmchLsC5AAnDBZL9R",
  "key29": "34TdRfn3dw5DVBuuJcEbkfcoeA26NGmQAT2ntQwXcuKcwtRtN5ukwYmVtuLHPjdhExf3PcrB7Humecfoo8ELJm4W",
  "key30": "3WcwCpgcjAQFfScTUfMPmYGGQVfeSGXFSxfpHpV5qdDd5N2LoiSy54zt5EvSCy1tRyyygSiThewdRUhnz9ebAhE",
  "key31": "3Du2AaurJ2grZkoB5rFPq2pVVs8JtPDcV5fWHtLXFQ6qCES8Tez9XBpgqheXhKo9CwVekSB6K3NgzVEm9xmLoafV",
  "key32": "4XfbtEBb8zDNSHPTnm4B9Z7UYCgzsXzZWVpcp759pAtgQ512vKkXkybYDXqkRC2vQuqDLyN725zzPsffQpsPMWEP"
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
