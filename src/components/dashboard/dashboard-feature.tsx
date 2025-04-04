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
    "4LnzZo8HNGyBYQMURBow3BnKToEXAbHjBAPHvES4ptXC4ZU3X6ceTr8x9a3kP5Cpz43467HaNpxDxwxhbfMFZd2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLnkG44qDPAVxQv9oiHPmgHd98GpiSVz8BEzyFA94NR45r62xMLqKJEJgiGvgAtgBxtHr4nY3ZyfZv7YX55M4XX",
  "key1": "4QENLAAdtk9HMG99UL7No2qV3f99njQ61zT88YXe5zjGijQZL9ucZMP5v7q7ru2msbSKLN82u4dgC4nmvEy7YJdv",
  "key2": "4toPSeShV7rgtk3w9MkJVo84HptzLMQJLmjP9mC41evB6XqieZt63ALz9tZhBTbANpphwTbqCWE7ejhLdkYzRM4C",
  "key3": "3VyKYpeUKjeiQeLBeGKZdR1gwvCTuUnKvMLn9q7U17fXYbY9bfWjwToQG2RXCtGJWTzZDv3VqnXrDkZa4sWkQVY5",
  "key4": "4XhjxvpUB4DqqzY6BckGvrGUWcEv9RfEKrQha3rtTh5Ho1wCxa8qZGhXjGpFqhbUupt4L8CW8851aFvu3fxvF8oK",
  "key5": "5BVb1hPzgaZsF8x1PGHQiFYP7zWgYfznVTM7Ek4HEBWFvxfPPqkdcfiswsPvQxxZr5UptDKbMRZVS6BKtvmWFYaj",
  "key6": "582ztiBmThwaxy9zcFYMVnrcAmiWqsVNCjwkdqpKs9LfCDx1cs8PzVXudLLuYzN5ruCZNaq4A9PeTqjPUbNFjTvE",
  "key7": "2jHRzg2gQCh2XK8d9Dq4m8gPLRVRfx8Rt65ZfjUR9SMx6AFyaBHeZxUnzhvpP5RVDRQGcBeDu8R7XwssdsyfJ7SJ",
  "key8": "4K3N2BrpukJTaty2WQNSYZKXmDkRwgGgB9HE9LbjQUqKVSw5NDuP48zQRLuwo2Dspr34SAW4quEdD5UhLisBv5mi",
  "key9": "2rx2xQtcXH4dAeWdv4upcR4HXjXG8e9qvQxTTSWkhrr15FWMsqHYbZtjEbUoa131Udm184k2ryAFMHPyLdfXqCzA",
  "key10": "gZgzCFWC72imsrjXJaCrX8sHeLUGUU2ZzKViXjxTjiNaHFyBx1f2cVtmwRdcfL1VsH73RHs1UrQECf8stQCGwtb",
  "key11": "2D2bNYk5gr2Q7WP3XBkGmsKddcaPbcgYoDUuQMUD12nzdQeHg7DTJCZ3KMw6RFCUfUpNsu1L3ej5B5DuWKzDoVi8",
  "key12": "3aEXK3GoDicCBCerghMe5VuJGxtz3TaPPJFTapak9ZyheidC1F49UryuTaQZEPeSuBBKmtS5vhkCRtVVvX64h2hd",
  "key13": "2hbq3pH4gu1xzyRcubGXz9Kkd1u9AKfC2Jz1A2sf6V4AnxXRwrDDMEBNkZ7H9KXNBgjhK5TFKTb8moqiTMDCVHgJ",
  "key14": "2f9dqQ2JhAfYAy7hSWTE7RMhyBZZc9ikFz6VksSTrs4a9ZhwbjrTCPCPWcF3AMVKco42FTcZHWMVaD7nveFc5zBN",
  "key15": "4tbhLKRARxmyXdF8QL2twbqt4vfZfHXeacoTxPqjUvwB5dfqRRAF7DeYD96VcGa5WzcXstKvEkfWrsgTVrYDWKbm",
  "key16": "2368Wtq5ACf6pczErF1q3HwGsJcnusUD3CKuGPqC9o3Q4KyMXExndQqgUUeDK5NJbMUdS1gMHZE15JSfjnYYKDA9",
  "key17": "23CQjPBwTNCVKu4EDfHdXuLRTw115RsUvMsoxs6XunP7vJjwztotXQu1g1Hs1NCHi8SoVx5bLAGZiDuwmxmm1c3p",
  "key18": "9KNPeHRBNJ5E9D1iuQS37sz3oSKKmVPf5a7xukRa1e25Rut72nCBWr1qpURvub4oFsSs3VfC7ifqa2FXQZDbNBV",
  "key19": "PCf4LwqPDq7UgaemNFQ8J47JFXns943Z2zwMRCgAVpjCij67ivhqhocem6xmBNg8bPjN5RuGHJKsSisptFDCimZ",
  "key20": "fewrPNEQe2pstnmGiQh8J463QbdypxHtizQRQzP5Ecd7iohe3cEboVmkqg1YR3YAkQAo5wqbjRVz91XoTewS6Fx",
  "key21": "3FbjPbkNHeHSdzBPayE4He6rPWkevpv7ttzapxTAJJEu9qUmJXcHZFDFvkdAqugdazhBPCU6EpodJkPkocrHgqrt",
  "key22": "64f2JfEiafCkr6U9EhpVVBm683p4KuMDm9T68JF11hS7ZZ8fWyaTPKBToNYurvDc7m79kveeYKWutKFjgJaarBDY",
  "key23": "LQAbnYrE1Hm4aPe1F1chdr6FfeUajcNnezuHUGFADFVTQ2Aa9CYsGsMtYtdq5Jc3rKKmyXjkLGB5WTqJUi1wsmi",
  "key24": "y5wJMwGVBwfXXBudVbnAWmxwovtDfQQDDiDydWxTiVkKL3GgozJiTFGoVzHcYeovVfGmJCrx2fC6A5ga7wmgn8g"
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
