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
    "2hMo4tLumXFPLPd3KQuD1vG7o9npX7yzjjYKXJR1fA1hq1LSHtzZPmLLQmJNYrX6Xi5GJTW2zL3AewnLKHaoafMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7p8Mu5G48ZUGouQg2ub1NueQbWJDhorrdNgJJZdFURFkYH9SQJmV3pTqy3K3bTVLSBXvo2rN6YB1g4BK8fP38s",
  "key1": "5c1wkydUHrA4kgtEhk2iJTQagCdoKjLeZmQ1V2NYGkkZCZ6wfYFfbxBqtCAd9mErGJUUVZ2EdvkTy9rJMTjA6yqk",
  "key2": "4Qj2jpUKD7K8Ey1WX9BiaKRHwtEGPyn3VNTU3ySXFY768ZiTszUeEgdr464imYt2itkptVtaugVuSEHvGrhSVfjq",
  "key3": "5Q8HNis6EPZN8qhauDU4pKaP1rR5ciMNT3x2c5AWTCvJpPX1Tu4kbGZEY23o5jwyMCN5x9t9hmRjAJf9YjkRycpq",
  "key4": "xkYtoHwcY7tjBfo5mnj4MhYXJK35QtPrK86my5oNYdCsnXuPNbMd8Hsjmiiagbnc9KiLwZF4jjQhajA3d4kA5wY",
  "key5": "4Wri75nPeJT1JHgdRPFtkC6qcQasCNJAQJsxTPhKBQDYvnG2gvq7mCmXdbknCVqbo2JwmCemLcxqWva9v5LpRMkP",
  "key6": "4VGWGzM78Hd6hrJXNudMbhdHah2FrmQ2hFErsLASDYCUY4DHzScuvDWJSMaQmMqR9a6XAWZjkpqnhEg6ACrAyrue",
  "key7": "fzMzC2vV3RKBnmBsUxN6nSpZAReHeEPRcefJ8GqHYnPoXLNvQEjtmioqW36sKSPjTro26XKUDuLmh3uENBi1s4C",
  "key8": "3jncmGoAGS6GMwFnzyU54ekNP6g2RcCMvJJD28mUCB4ZcGoDo8SwP5B1VRKTZh5CinVt6jB7NHdrcr9FfZUAf8fw",
  "key9": "42P32Rza2QT1VPzBmCv6EtRfcDdfBRCgppqA1KGJEvyT7qsMMpVxYp8KPtDg3kYn22KiyFyzRNrjtUwxeX18z9hR",
  "key10": "4Vpf9y2K4vt1FSV7VTPzsSgxktjmZbskdvUdnB8E4TsAhRfWwGhL3QY4SWzJpXFGmYezy8Yo5FGVQH95zvLKrcj2",
  "key11": "2CAGZDLRS2YhUYen3KJzs9PKNWM9Ld2YXCvEhjjweqUC9G4BLEjqk95WLeknjnBBZLPc1r1NqjWZFT2dCf2xetKH",
  "key12": "5ip7AVFCQrZpxbGaMrBsUhEZgvdG7iewvhBj51TYQkyvvpUHQ5fpSktgHyNqGGHGCLjC2gc5tzb33pnzzMfzm4vS",
  "key13": "2Bj6J1333V6ubThVLhRZ2eBjtiuXG6v44cp1yzCzCdVVVviABKyZjdnCHN95ou51kFyN4WBWRPJBJqvYs6GyF15Z",
  "key14": "22zFH9ZmwvD3FygJsy1JyFctNUmVdyqvSDFhewVqdWwTbbfy24St6BcwCsLyqpXwSFmy1J4bT7fjmH3ijX1Q9nzd",
  "key15": "2RgEpXFEi1rQym1eAW3qqBFmiHYDJw9t8uUz2hGGUbSXnuDfRF6FxcJ4Q6VnWrBXcsCVL6VLaLQFim2Fse3JhD4P",
  "key16": "dPxJaQiXZZPMHsPzcGAq6igBw88Pq9jivSCKBDEXxi91cnm81Lcg53u7gXCNSZqJerULBvMRZ79VDcHC6XkGp9E",
  "key17": "XZhMZMCoqkv6CxNdJurqthCkNyuksUsCmFcks8wihXTbKTPnsCUfY9sK66iHdzztmdeGM5wy93MtdqucZR1Z2Gg",
  "key18": "5WjR3sS56MQCBd4ws9X58kXoyxw5iu8vQrPsYY5NGJGZuSrQXtEFE6nnqgb48VbSLtPtuhQ6inKRsMd3pHjK83JX",
  "key19": "3Bv6xQcUA3Dxyk3JY4839YmV8QA2tnU4LyxAPtNY9GVNTCMg5mZSbbyh6GcfUkpjyD2T2XiHjgwp5tf8VGvJrqDz",
  "key20": "45BsycWQTuNYUZmLS9XLngZC3AKbRjx6QDEAk64CDJumV38bBWCH4ZygDcvbi9UTmPzjwV7UsscKvRKh1HWPqSPc",
  "key21": "2PQgdX6Tq9YPqwkHjP93JMtAa9g7F246tWQi1VxhSSy2GJwLu37oVNAYJoXU6nnEsbpzWcErNoLAK8J6UdM9XzRb",
  "key22": "3tMAD5VnRrt1Kswdgdr6Z6yoQ52iSnv8Fdy1RQxKhGNdn1YVke3nsyX4W9eMPfMPmGBcPqi5W5qUrkyLUcF5Bzyh",
  "key23": "HAE7TLm2kCh2DKzy2tGW9D6GS9kfDBFgkT7jUnaHBZ33DBHgj9SnP1Yzwm7BT4SgAFdudw88fdiKDhN9AQ6qubH",
  "key24": "4CPDCRn874e8wyR3mhNpKjwK8XeQH8yHoX8TqEnw6M6vyAQ1kbr9oPRMTgeGiZVo7UhDNB2jbg8g556GHxLCNQLX"
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
