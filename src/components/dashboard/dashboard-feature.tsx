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
    "472kDKs3SiG78yRydHZVRKW8dTSNPE7jBt3aKdkVLhEPEpzbvgHX22jMMLTmZoK2XBBM9muR7LVwpR9ugzVMi1wR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwA3kb7FFDGXotNpFiTdq4KEFMGQ4qaj2uawLw5QXnEx8Xy67oeqcAW651bsaQbaYomig9rG8rCWApwCYbjxwcg",
  "key1": "2BMppP76XE6Kmr27YKiJgNkyrrw62KfJg5GkQkuVezn4gQ7kFfTdrrWYskhqVwZSb4vJexWoqVtwHaLRxyRgcBW4",
  "key2": "5jopzniSVjKtT3789s3Kup1MwaFKHrGnrmejEezBhWZ1Yc5hW7DsxiprASfX64eiTATXA1hUi9jTHZKTbKQDrPvj",
  "key3": "2SRZ37DUTmbckwhztuwQo1sQubkyP3JuBDbGZpFKnZQ3PjtNisqLWbB4onCjpieQJQ7yQavanY42x8WpPPDGpF9H",
  "key4": "4ojrbJJ7XqmfdKH7maFrdQgVpsy2HqTjZzCK6dATRKrggr5z9RB7wTeTLdr2KAi4XkW8PLxvWvpQasERfZrYkjLH",
  "key5": "6owogyFEmMwR1SxVduEHi7zw16hvwLiKGycTj3XnGp63cUgScvS1EucKoqctuRvcNMSKvdfwx2Eo9Z7nDWz68HB",
  "key6": "wse1JwFGpW3RDQzBs2aFnLe3JwS3nP9wpFNeGQPhfQfv3P8kmwhvvei9mEQkCq7z9zAzHd5A2QMFHAe6pKVLBi3",
  "key7": "16t4pRtGqNG8qrsGcC9os9q6WtZmVobpbwenXLSc3brnQ9ihhUFYqSSHWEBfztr6tFfCkFTx2Ee71Rz5pLkGufw",
  "key8": "4wc2vB6EKWp9s8CJZKzuKD7j5MEzYT3WuK8Y9zsazWbRPfkKHrrwABQLpMMPnKXawd1Nx694WegGGXyDecUSv28c",
  "key9": "4SeuYmr8bDMBYJSkLbCQ57rydsegEpzjfJiXEJDM9Vicifuo5379J9NgoBCJstZ9prQZt6oCKXMsPrzgZQBVGbzU",
  "key10": "21k8mFnuaKnZ8tDSVT6rDxVD96f2vbXo5UnLJRqhxnySTKvEkDBj8xxjRkJd9BZuTezW281d49R6oB9pSPXPVE5n",
  "key11": "289c2sdzgJzcm97QZqF5zccVoddVAW7gY6NwN4MDS9jeScWCH7r6heeVmkHYGGjiL4wBLCRCvzWxrGVTsTuyBY6A",
  "key12": "4LbtMCB1vfLidobwWXZHTfHY3vUe61fDk8Eqkm7k82DzWTfHGJckSmFuRut7KtUFUYXdKtsATVCBkNNSzfKWvh57",
  "key13": "4XaroVA3XJFkT7LuUE5WHXB2Rjihg6VFLG6G1PM13QNrFKeYaQDXNmiEHtmXD6tmo4QL8xEinkVPiWZVfT7cDp1a",
  "key14": "2LUepbinsxL3nRqrNGFq5Fz58dBRwvtqU1pNK52YzHPBRLa6FoaP7iDEAuK8kD4DY1ENLBMAwg8pvMyCWtKLJpTQ",
  "key15": "25qqu5RnY6YQaSnfXZLBsngBLPJ7QdHufxGceCCEQces8KN5HUau5Q5EcBabJ249n8XqNQA9Qz1G8nLz9JiSV2Jg",
  "key16": "5fEnHn6Sqb56otzxiUUagVzM47RjebBcjBhkMUkttfbutwJ7bdVVLeYa8PPnLs1DbxycK1Ezrn6XFAR2Ht1g79Wd",
  "key17": "EHT7gsytD1Myp4S7R4YLPxJzc2C8iic9YLK6aYtH4qTJcMWgMUNqWPShXeq3fpPMHXLS9nkbeFfU6yumF1jnLtC",
  "key18": "5i5f1pHTbJaDJst79FW8y76VM8wZJWzxD485ApZUzaNh6jqjfVaiGabNQJJ5oaP2tjZJZE5TgoXaJVh9CJ9dthmk",
  "key19": "2UaNw7r4DYvuU1HxHWPSoYoanE6RuKWgUrDuk792VAmMkeVudm1J8AZ6PjSfZ9unXby2eJNDuyRPGhEsbNYjwnEX",
  "key20": "2X4nCYLDFnTWCCXWWQQexqgWdc8nMSYaMmuZsQUSqJkRfdcWDe9FPKX6DmL14ebdD4CVqcG9sQYZvsHbgmhvYBNf",
  "key21": "dyhcTpMvmRHzNQquup2gAaGFLkbJwwfGY5HxvevTkGf5EC6Mcjitr5XAW8HtsWGwcFutJFZXfZ9Dcyzed5Fxeer",
  "key22": "4VzzBrzNZVjLmH3J5TXeuNhuNxsM7woDFyiyK3PGNUjnVKQHGfjLkhYHio8zdxpT98m62Kh4BAdUd8fcaEsnbB4q",
  "key23": "32se6m4Ym1URPKEbaWAmhx84T9ohzEAcMR1F2QV2NfBkmWzYDcS15981grU8kTniNgaX2AP3dwqdU4xf1o5B2He4",
  "key24": "2CHyXmkZxxyjx6z2MDFEEMHEyV3fxvGog7nr1DMFtZwpM77VF7RRo1kbvKhETisgpU4mG8qBpBfHeZAk4Ni12mmG",
  "key25": "2gdFuprt1rc9mZp5WLqxdznN7m5su38BQg6v4PbujsocTMDincT1fLHQHUVbEnxHqH2oj5L53AHKasS9n9RhdbLf",
  "key26": "3ECWph8GaxbntxkUSdAWgxa5S2tzDxFvwNcuhkiF2JYMXGUAdiJvKuCBcLdbmoqBsnsXKZczMp1gR6jHzAG58s3P",
  "key27": "3ApZ8bF5jPmi8iu2wAYyXWoYNwoq9H7ZrjK46b9yKRd7hKfE7dqEnNn5jxtpYqqv2ZAHzbYbk3dXVxEZTEmTfRee",
  "key28": "5kSiJs1CvKXumtQvpvFEexsEai3D4Z2mteJix4EHjuPaFkyFjjVp1woLhJ3XmNbM73UjKd5Temo9T1HBV4Pp3JKc",
  "key29": "3YmtiECDa7p5D9cesoPV2MKfozbANnzsBExJoX27zNb8VqSoRFbtwpiZ2opoaPSXuAA9dtnT62fahuso475ZHP61",
  "key30": "5Qj2rCKwup6caRHh1gVupsYLVJf3BUQ7smRMUdwt9vuz7kWRwy7f9Y5D6EyQYaeCnKE4WQH1yiKjHyRsDtK95bYr",
  "key31": "3YjB2hCuVqg9u4SpHqpt6z9xVx4PdmkD36tksRbPCv27Qg1w765M2cdNLTij7ph3wj6HbNvmSVufCWQwbmLMS2Ca"
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
