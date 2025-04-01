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
    "EorpLjsk2NPwXZmq3xC6tydbssidTA7EabRSNC1s3g6VZvErtYfa1N36nMGfxu3Vm9eeGe2pNiwiFZrKVQQXPyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32NMQkVy3uhBALiH5tzJf35zKTRhqmesxzpgkXFgY5L8UdfLQWAGDm6nmvBiPTdm6uqXCyCwVns6D5S37E2TCvBz",
  "key1": "5YTf6wG98BqM5m553XqkWoLiTDsPYh6vLnRSVhNw4AVoHBW6WsmXpBxgDi81td64HeH21dvdpP3vVxk7hkH9eKki",
  "key2": "2Gbr3c9VqNuD9YSBQPf3ZLHj6HG9zf8wyuVHLhjK1WDiWAWL6sK9f9cuxqyLvFv1AEf2BkU9EUcx43Y4ywWeCjP",
  "key3": "28UjcUxf6B42CwkesrMHLRwqmhBhAV7WBwR15UF1b8geN6iTcLBrBMZxPCzYdQbHbUDnrbPVHr2g8URF1mTTCmdj",
  "key4": "2UN6ixTCzuE8Tm5DyQWz9jv7PK4PE5W2vwPG4JMXQ3GQjqP3g6bvWZZyjxRz6EYe7xJsn1nWRUYB4KbjBATmnCxN",
  "key5": "3ARTYdRiSVzcT8AVUQc5BJyKKQrebquXFvNakUGW1Ctp7QaiNkhxJXfNdJ5mC8wDdcSg3tWob4HyjQkdjQficWZv",
  "key6": "2Zg4ErUxggfLAf9JKkwLre7ojKHGvphZJhKzLLSPAPQZYRSQj2EDjcBxBb4RM8sVgcr8ijZZBxoyrbjgz5YQiQMx",
  "key7": "2BNLDDM2FqtpSnNSWiMSKpeZBtWsgDFuxpBwJLMroFcez5LhzQHg1Q5axhed6XQgLDd5p9k3PnCHDk8jd5r7y9wm",
  "key8": "63kxth9g12Zo8JPZN1p3HfdYoJQGyi4NGNJ4deQXBQkJxRGiFRog9w6qFVtLsJFrvki5D4DveRzXcnHj1yJtxK5i",
  "key9": "2MuGCp5GqnLCwbtoPv1CZNT6yPs6dUSRXAWBUH1PkeHoaq1UiX563w3YG9U6tTegw99T4rnuxjqzZwtk2NVuznmZ",
  "key10": "3PTFSpwTAXtnBoorTcVpjoYk8Hk7zWqyqiMLEf8pz4LGHuRvjHi4ufCyhQWaeGjpioNxwD7V6PYty2Ymr251CxHU",
  "key11": "63Wv5kJirshEKKfc4QMngcyBHQ5bPYA17fpRHpRPAibKmWSHizPtxkc7pcyAMiXSru7URVGxdZ3aqXrAZocUr4vp",
  "key12": "61tYaaW2DYFiWVwmM647gDjnKpfg1sAskyyH9DSeH5S53mgXKuZK4vzkq5wjkLWbXsLC1vy1mEvTxjYLSABA9xbq",
  "key13": "3hq4wNp1oXvsXc3XyAKuB2gRJvrvpTfp945iepkefeY4Ej5Xhxvh7R7t5mCkhCWFrddr6RUJRGi9Hjga8z2ThgTu",
  "key14": "4y1tJcHVcHnhPXWKG3oz3X75zVuWp231TeoAZsTJKYTLrbQYxammRouE5UXkUrar2AgPNGFJy5dVtqXt4qwX1hLR",
  "key15": "sSKVTbhizZU8TVN8SKPc49Lg32414Zs4VWZMkRzbVhLeYyf81BbcRuHhPkqXbQuBmgo9T9MTTUb3A1G7KSrbTUc",
  "key16": "3rv6K6yg32BTZ37HwQb5kjnskhDWMC5gNYBg8UZbUY4U6AZDtn7RaCX3gKbfMD9KJszm3re17VTYxoWYP62zBfu4",
  "key17": "5w5umQMStL9SeGXCQoUB3to7cQYhSdC1Nqza7XQDBmSRYo6bF9XAjfL9Bxp6igyFJLM1nC3Zk278JDKFnrmpdcS2",
  "key18": "2MjH7PRTnymZUHgkNpKyPb9yebcUJH2eNWozLGjnHZZAeryeZ6b1pacysFdjo7XQ4yP4K6APt6MjWPNHZzNh2hej",
  "key19": "pqXqfDTQy6CbxvJy5f4zoF5unt5jvnhctZByWTKASVTQnUewynudQfyhWU2Ub7fgLbSTvmxF1DQYQyTxfXf7enr",
  "key20": "38Dp3GC4f1DNXFZWQy6XWJb5yG9TJ5Pi9hnH9hWG1FqscV4Jjj2WtVmzvPEH83FM3Nevcd32t2nuoQdxDFVWuhko",
  "key21": "5VvTreoe1AJRBGaCM9Tq5tK4YJzkVHJDMvShxA94QaDqdN2hJkFevsfDeHRcZHCFXMbFxMJgmZsyCiusUoE6NFGK",
  "key22": "5dh47uvfShLHpf4uuXsK5WYNqJKfpbgdRXXhdQpdpYT8cW83kQ8mVjHSch4cxAZdvUVCY6mnsmxCdE2P1oKVSSXC",
  "key23": "3v86WFJb1UZsLg9cTEq1a7nqr7M1SwLnqoFGDXNqCwm717irQKA2WmUnyD9Vja1AeXKCgjgjrRthsnRdkD8HhzGv",
  "key24": "n75Qe313MnjfgQqKU3LvghLXhJuEnzjqCxun7yg8YWw8ktRgKw9vkpgFwPyzWa9jarfJSXXncRyhM24PvaaxEhz",
  "key25": "4a6ijFgeQUCTyCaM78ecuN3yUc7cfsh4CGr8nQ8NG29Fnj5WmZBApRrW8Znqme6n6n6Xygd6jdVigtMTHfHhesWp",
  "key26": "41wdr66rCg55tFGtPhDk6WFhJLZRx2cvcFBeL2qr8fBo2Atp4VfxVZvKmRrCDMwCLvZB74LNFJBRNcb13XYBgBhj",
  "key27": "5U2eRWu6mcekxiKE8n6S7xqvsD7cXk6LvchrQ87hyU2VcwNUzzPRYPzKgex2bJWHCmhshTBzNKDin8gL83UAvboG",
  "key28": "633Kem4NR9osT1L48W2KU5hMQ1p8NbnNZiCpPU9y7hMThov5kmgC7dFdcuNAC1fMd93pKrMCZvKs5k6fX8YaVbBd",
  "key29": "4w8JQCccX2yaX91SH63EwBdZ56F9XaCjDGdrN8m3XHFiwPJNo4f5avLsxQD6o9RSMucuZLYaD1r6WadBaWRoxCaT"
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
