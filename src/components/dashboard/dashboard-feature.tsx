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
    "UM7vFUSbVQt5BZeL8uYuWJgB9MRfxdf1zUir5aLiDBeKRRn3515C5VtWjZBfJ6wRuydtcs759Ac2G4rZSKz1k26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRgwp52Wyaig2PbS99gdzDENpLzn363FeZpesSSc7oJDy2pGwcVv7L9Q3PtWDbcafJf5RXd9Wq4f6vu3Wuyse55",
  "key1": "4gdR37fANsepSpV67MFykEDjBRDL9kh4HhgHVW9EehBKjv3wnieFGNtsBmiaEfvSmuJogDu1HXAs5N4VSBkcJgZY",
  "key2": "3kJPYQmxnmdLAUfMKZwVykaKdRMUc8yH4pqYvGfoa2jCKmYFNX2GHXjBKocLLvPJTiviEUGmECeCtscsZNigu9jc",
  "key3": "5cPYM5SSUi53PvLiBASAJJKMawG9EWC2ieeNrUq2FiGsubQHjVCPcSqxYz5HCnV6aWyh5FdGQ3rYgUi6M8evyYkn",
  "key4": "9xfECnSKGgQVRDwYrJcifJZj4QF6csf1iirsWzF76pMD3ys264ZuK7XXcydtNeh4ha6yL1x3CH3hZsZmwnF1wr6",
  "key5": "37xrh1mSZS7sLxHTY6brcNBUnAj8f2n9FjTVCj4JmgA5QXFen2nr96Z2MpCFA3R1LcSuov3fYAe3dyZjXWHNPgiV",
  "key6": "3ewHcpv5kTgsRbqibVydC1Dw6sWSJC7dP3RRMLmYsawJHCjJnuLd4RBiQ5UZd7ytN5bQRYjuJEoTSkXhkZPgMF9C",
  "key7": "aXXN1atDBVCfLFXRRpGtHk5UTRMfV17TV4fAqXP7jq3aG17tRQDkcuHd16XKhX5zZyTieLM1uJ4xzbvagv4MLQS",
  "key8": "a612tCZLSnFwnPYDjK8WyKtRjAHm2S1wZrvqRjaq9BsKFzkGLoZZpUwPRzgvuAVnoxvZVsf61S7Q7CrrtmMfdSU",
  "key9": "5rLQK2WmgKowT1zs7f5AU6yr1ndetmjhuk7fqL9CPdP4MR5DiPRJqm8Zh2LzmTMSnh1kjWrFEogCYhq6n16nepKS",
  "key10": "2WkHjo8YPFWUHTtaZgqDACvwZSo5WvrheDCg5iVvkyLK8JHZtKGEMRXsUyP9EcUf8gpygfchXAAPevxQGHyLKNDD",
  "key11": "34vhdiP49DysrGtrjb882eiimkF2Zs4n2JtYcYeDFgKNP2JQ8jkpBhVGbexzqaLuWRTTPTGT78jPDQ9mGjU6icGo",
  "key12": "3zDSvxQ5fYasNWTFGmwUzAHeRC2p8YJH2LjUxYuQRSrVfA7BXpBC8ShaoUk24jgqCJyeqQrF5dprgbQx45JNDss9",
  "key13": "PjW1DSzeNcAxQpjBj2bonEuvsYwTGn4Q9LBfCTSuxDHecBqDYDfn6vSvYuB38d3kp7WjzHpgtuu96tedbDJzg1q",
  "key14": "2cE3K7BUutDzKARfLXdm5v3KnWhQJNeBCyzZgezVT5pcPYHDAhfdCDHeSQGYM64w3KAHjpAV6W1bpyCPdDCVWkno",
  "key15": "4jokTMowr81fStz82nuFA2JvX3A6JCpy9bTU5uXg6W6S27DRHeNB4k2X5Bfp1qH2vnNaFFPBUenhDYN3LjmRWgGt",
  "key16": "RbaHVLbUpdx5GXtfyLkNq52wXB3KS5HpCUfPmGsTs3foXTocAnm2ypjM3nD42vrssDfZgRTDV1BZg3xHPUgFHZG",
  "key17": "rcUhJ2qFWTf2ugKCx8VWkg5jUYBWSNC2K1NmbRV5pzZPymXuGuaCkndcjMpE6XAE1LSbQrHDqPcJ3jZcRNkoCwF",
  "key18": "5eLdcY7xLqzN7Z7bPvVZEuKoPQPnDeWYn8fqZ3j2Fi7FV4jkygNQjBcFS5CH784BzsLPJ2wmpayupwTTAYbaQBiW",
  "key19": "FM5frVyEjj5KyMEMnvCopotXbD871UaiTWDveHgyqoWibzia7vaLnNcNFr9UgjzstZ4XYfZHpVyCMq26Q2hxnPd",
  "key20": "6jaeERats3LgoWqvcCbwjzhD9VRJvQQt15Gz8N8Nt5VsdGQTqDJDK623fYRdzyo1Tciky9UmxnZgDvt2TxPk2h1",
  "key21": "3F51Pn4it74CsU3HtFq1P6h6AZSp4uVZwmya7VDGnrwxZ8o2wGSsanwqCQ8acB5Znv4J3mKdzkzz5oWgWiBbtHVs",
  "key22": "3LmexFGYekqSCgSazNH6TsRCdC1rCkCwrzmhYeandALV4DPCmsoS1ErvyD7KqPJuzSXKSz3cHCepHqqaBxMFYnwR",
  "key23": "46irDCh7CPWN4PGAeipw6ry2Ut39ju7wd2R3eMshJe17PaUHjZZ8TWZpcbNg26LsAhJddJ5FUX7v8QEQoCoTqsK2",
  "key24": "3Kyqnq6kpZvjxaFpihmudWE6jhi8gYpkNnUc4W6i2JMqB3xhDwPrmmd5aMxgEhfY7WQ436o2vBBE2SbpjJmvNojQ",
  "key25": "46W7eeapc1BBBzP2T9zY1NnSkNrSfX6Lu9kP2Pu61TApK6cftrXSnNW78i9RQvYtjhXmAsdKLbYzwB1Svg122q8m",
  "key26": "2wcvxqh5P7X6VVYmr4GsTo5RGJdDG1kvQ5E6DgjeBsW9a8BmbXk65g5UDRWXsdhZ1z7hgSwerziVhU26ZNk2rw6a",
  "key27": "4UFuME9Stfx3Xe5LRsHdkmoCfwVrpYqUWLL7sm4jB9mrya22aaTcjPpfAwSNfU2DoEdSeXSh2oz3MGytapUkPiLs"
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
