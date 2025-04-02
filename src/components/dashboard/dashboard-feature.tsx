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
    "2d3xQSCFBP8kSr4cLxXU1VBxCbM4qxGfwL89vh9sAiLpxFsmT34viQTw4gFFJAnJnszrUXGNjubDFYjPP2KffRga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VMjEZG1ULUvJ3PSCmafSMASGJ9JD5SJCafc2TDUvE6Eh5usd8Vj2u2vfcZF7f1qCqKNMUmy48o3diiWEXWCigXW",
  "key1": "4bTHqm9oxxpJP2kRk39SP7Lk1EbAAVByC4QLVKMcoKDDzJbSuy4v5bJb3Cc9KwyHTdWT6Q3iuysrFFDcF1cH5NwH",
  "key2": "5UbP4zzpFKpuHvKAiWmHKpyxGHujAYuFofSmX3EAbHia7oCLRhz8UGJryZur2xLGitdve1dfjL1LyPtnA7Cpo26m",
  "key3": "47rwE1jMhJudE52owheNF4wffUqUomY6feRk8gFfceyXgVt1mrDG9uiJV35mA4HKUyijq2QwfERhhsenevSDUDx8",
  "key4": "66Hrvv6XwBom5HyfmUyUfeq9CAhHteLnw46kKeTGpCytSMSrqVqzs6f91cgF5WQaBJv3UVtPVJxg6EMV8VjZm2NA",
  "key5": "2ucj9UbY2veYrrV2bUGPtS5A82fSmcME3YZexd9encAvTFKbLoGcQ8utY3i5q5epW9Sg5KWUa9WQnT9jwWEAAeyR",
  "key6": "5wDQ8UEn7uKV4WvqfqzcFj8rty694x7XXmEFvgxXkHFstZ6M18TxY4QALvam3gEyJ8g61qFknTs53h6rnKRY3Yym",
  "key7": "2qkrqoDLCWEdFWk2Pxc13ftAiDVqV7KZrxuus4zkaWR8dpJ4TizDJ6H1DTUyTBK83YVYQiVoxqZ1rn8rZ1uYzHnp",
  "key8": "2aeq1W3FsUPJTRTBLhWvBLYdasK353n8ypyiwukURDuLUKdGvDejwBe383bG5BKEWvqa42F6JjJMRVDt5sN7AwYV",
  "key9": "2JmP7ytZ3QngJLFWBJfsnVdwzXYKGoTT8x1HGnWKq48SwsG7bLZswKxFtKZbeue19UogeN8womy8jpceJzcWagTc",
  "key10": "KFvfnonmt1vj9N1T9KdmRMM5se8U7GfmQhZskGnJnTidv35JDXsRAPDesWiwrBeEbZL9wZnER4BB6geCQRwoySn",
  "key11": "31aJnEiuwKd6AbwwXhBMuYTUb1PSoy8NtnKA6xoso4MDc5CNsJaaAS9FNeP1P2qQHCNQG7bbhDt8Q5M9kH1b6f9Z",
  "key12": "3cmSqGuQ3YAxn4VCQyfeEtMqRLVZYbMc3RFMyoMNR3pSKhsMU8XMRnECGtCRBUT8ARv9eBVmdEhkyGeoATD4Bjuv",
  "key13": "3oG78LvFUka1JMPKE5wzNnNQo1urPTaGYEynRswB4xgJXGY6ptMFAn12Aeg3ezMLKTc46Q3xkB8h1eRpMPKfYrYe",
  "key14": "5B9w7mpDyTBJtkkf4zVjQtWntSREuX5XjkAM5xN3ZPfocRJ9DssVBA1kpNyUCFiRinegYcM38WLcsdri9RkEtSCG",
  "key15": "3a3rA6ERFvV4VaqWzm7pw9i8Kd7ffrmTvbJM3B7NyeuYe6tfrhGqUdx6KvX1mLNVr4xvQp4kUJavPXLNAdTY5KnS",
  "key16": "5PPNV6m2LFjwm4HN32dspM3uen6MKd7KmDip17a4cvGLtRuUQxkNCK462ykCQzDPdqicUaiEZoXdH3d1E8SWzeuV",
  "key17": "32vcvLtzWPbfwhrMBAXVHpG8ozYaebU1TALUSAAgFn5nfRhv7pgfUWYoYp3BJtxDpDBHcZP2CydfuZ58mtJaD17m",
  "key18": "63mJxrk5re89fHm3NQKDDPFmMZXB89WcjHNciRZhXHBmgr11CvZo6RWWM9YAbQA8BzYww7VtJppTUETbGapNJTHU",
  "key19": "4UgbaMWgGmewSWFkRYciaWLNygt4xFYUTHGcK9DLFZyQsyoeE8sthNJRc2MB15thvFrZgwJ1EFf8ako6uHkGNUMg",
  "key20": "5jXND2w2Ywnyz5vifrJbXJi19jffQanSJauPDWyASHx4CN4kkwj9emwisrFud1irfkf8x5jvVLhCcQdscTCb5tah",
  "key21": "3JeK95m3qge8CkqXVsuTSTNA1ZJ6cbvPFLezjWgpeGVzt8BnVG6rbzmnXJiFEZkMTcXNfUYxo1HxC8qPEunMjXvC",
  "key22": "2ybemK9BnkvnczkBrAUtNxw1pDJStCAGVnEdDoFUnW1bs6yfwK4DtQhLd24bs5gSy7GMP4tnsbHZEeiSn5msaanM",
  "key23": "4oqG8FE3g1R8QR114DwNg8X4DMeFQLoTGQsuhQG7Yzicc3eVmTX2ibDtb6TG2YNm44yxTKjASkmHLi2arz2qwBtv",
  "key24": "3h87JftWjAdmAQSQunx2g9F4o1q3KUDENS237Fp8evEEmCJis8PpGC4tUingccG1f3bvhbzxC58WiouUh9Yd3P81",
  "key25": "2BCUDe5WgSDfzUABRSCH1Bjsc7iuMiakJv3adLSERRS817EFzZGVmza1mVDqM6NmJwhMWWuUnunhTojRZKtk8iKv",
  "key26": "WwD7QDDxdCegnvbD5Qzaqq2JEJW39hDXf7j16sgP2uGr3QhzCWsYs7qLv2vhuzsFGx2Z2hocTacVt2x5JaRqHzp",
  "key27": "37LTYuGAxKBDhq68gCm78Mzfv4LVuuiw8PCWsk78buut2ej8Vf7RHLuervm7Yps5QL7NCkH6Zg9DQTcGSQXxVDhL",
  "key28": "dw9XgkPfheMZh16RZCwcLNydzGTn1Hnp5TLZ2ViXshW5tdyVeRVdKyma7apctny7rbyJdQkaf2v7k64r7NHUhf5"
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
