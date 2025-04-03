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
    "4beY41zJKEy3LY68znoa6jRHuv3QqFtbj3XMJDmEyi1LB6GZJUpqPKXC8E4Vn4zv5z3FDu5Ud9TpjuT7Xkw8Zvon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbS1vwYq1M5nGQSzwahHc49JLgoZYJcgp4T5y5EsrpnHVQsED8W4hh7g2F23dMLfA443ii372PkArMNeEfB8jmL",
  "key1": "3Puy8Q52b9aVgSGWQRikXdTfmTuWzer7aKyYPBiAYb7p23GuHhUKi6DZcsyzJqyMaUuN2Y7qsR8nxqqPTQvmnDHG",
  "key2": "58tHN3c2zc9ZJsL6Z4rJ8MX81291HR2MaxJheSFMex9zCyZddQ15YNegdxReouFoyDy5HL1pWjZX8DSEVKLLpPcR",
  "key3": "3re8A1GJ2YgfsCWwQJfcXxPs3MGGw9f4NrPPkGyCy31PAYQHDFQLLBr4CdWh2GEDoFL8H752sNanK1kfM42S3kqz",
  "key4": "4prccWTERSFkvpvr68HALCLawCpWorQgjGfFNqzmEquXF9ZYEryS2Ex3d8Axw5YwS6hYst9KW5cC1C4mPGQnC7an",
  "key5": "vyiWd5KqBbL11iQYGNCBexSUtdbBdaEn7vh6PBfEg6YJhsGQQSHHU7tMzWTbeCdBt7rVNi27oZCcFBUqa57JUNj",
  "key6": "4UZBEmHBajsMxD2aDtQuhfyDBeLvjp2t6M9C54ggktKLdRTAmpUg2hfZbV32djZYebQr3xfRjkeMBu3iLc3gvUdp",
  "key7": "2HcRu3LSQ9ZGuN2F3GU2TpMAbzayFRJMr4ufxaSzScdJ5xpUPJcgM4qfsHBNu6Gxk6fV1i9ZgswWahYic3L2kkLx",
  "key8": "5oTnxWFFy25VC2hx2nUeA3H7u8YsL4n5u44kz2TzfMLVsfr1qwzqrpE5wTWpxBR5CBxM3JjyLnftFCD2jdHbcJw4",
  "key9": "2qFQaMGEoE1tsacuTrvVSWfHd6Y6QSqUwQmJV9r8y7TePY5J6A4nLx2g82g6AE7aC9BXLMVnTVmeFxbbuPMbDab7",
  "key10": "5Hrc3JHdXYHM2AnKmZKZmAg2hAXD2bNkrxZnTHQDrysfPFosD11XWjX3V4nvTMCPzAR6CAqbL38oJKouCTcEQbmU",
  "key11": "3bEnRYT3MSZvrDqVvVSUT3GM8GPNXLG6J6i7gc8rgxBCEhraqtdW2hFEWbTsqKS6cYskMTjQFSFsAc1rd33RDdzD",
  "key12": "2hn3jGUxpyANMwzi5RTY3ZGSe38hktxZgPbpuqsuq6WL65t5n253AP163rAs8nTdHM9k3iWAkdWnJZWfdfcTHiof",
  "key13": "2xttjnoNcMRy4vw2qYtqTTZNjVogJ1V7w9XFBuvAsnUZ2nQF4RXktb4d4ijdXmRYqJDSXWHEY27R2CLLzXnh8jDW",
  "key14": "548H2Kvf7EsnjeNiPTLKaSUkBSppfD5Ft2oCduhrY9mN4HJzSmSwaLNJqam6L4JbvUTbZg84pFawrXLPb9oFNgCH",
  "key15": "3HkPb6nX8ojxSFDbBUYCrYJqueFuxHSycHtPk4E8sdhWMJ9rSYHio529AVMiFZkWDpMKc9GmozMUnCm3ui18Z8H4",
  "key16": "58eKu8Aq3XiBXw6eL2wgHe5zTSvRwzcLJfnSxJRkafzhd4WRbojZ7WcG2Lpf1yEL2UmmotTvG1GcaWUxmUNj1YDS",
  "key17": "2PfzpewUXD49zQnmKxVS7JnBG4LvyFpkpYqEG9Zmqpj7sawRJAct9LroX1rnrZ8WZN7tEcz5T52yc5PJeoFcPc19",
  "key18": "42CNKKBo5wNrhpFtXYzZTNqUCyGTnPbDJkoHwS7gy9frUr1u6XrmHuqn6VP6FDEp7zDyk8ZPCgUbuzpWCTvw8pE5",
  "key19": "5QAvrdeboL8dzb1ARW3N4efrahymvUmrXFzWXGx7m9uztcRWa9wm6s6x6fLQAHrby3iNTLSt42kBm8gKEqtWk63n",
  "key20": "5deeaepkUoxCvRxJ111N2xVhrnH4pmNU9pRa9P5Uf1EG9Vv9kjLZYvf4GBQEN5N4TGXRLLwwj8Hhsf2G9rUMbu7A",
  "key21": "5TUAZ1UcAJfJVe7qM5TgXXqopUaonmML31DbX3UNLrMWWVHU3MHNQUyp8Yxn1H8LUZhKBXwB6dxYnPganGhegRNC",
  "key22": "hWPskGFiwqNViqa39cCKTAELKL4yqvBQDWhKxdAJWRD8vhKvjiiu6nqKHj2EWLohyMtG6jVf7CKufKMFiKw8XQs",
  "key23": "46ov6NkKL8tV7vGTZjAZz8qwGE3Jimn76bfxoqDMVUEEr9zJQY5H8A5odmeExnzqHa57rv4em5Pwz2VjpoNaq2v6",
  "key24": "3ABk1crX7zGyg5x3PcT6Sd8gv7WQqJCJGmT3jxpizkdve8Bv6VVBThWetBDCwoioHhju5NcwToJhUpSgDvvbwF8m",
  "key25": "2TFUQikgTYZtNSroc9acrt4poCsNxsx5xR7sgo8HbQ6Ar582TxKmbmeMtvPD6KpJEkRC6a8P9L9uWyvLnoGcfgz6"
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
