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
    "5jj5b7YkYRL2thse2f2nNwbRR7e44HAb5WgDbrJBE2JatMEPD2y8xf6LGq25mJFsDSRM75KnBkKQ7mP5t4WueiCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKvXaxR3u1pZyKwRhAcCkoHh1r5E5e6KKj364kQcpnp7S4Wfv5LjJhXTvK2LBxpS8ZEzvWSexAeho5adRYt2HdT",
  "key1": "5BATqzfcMAExPt31gp8Cp9LyYRHJgzHscUTNRtDALgAAyaMWtESdX4zErixgn76dXYxymsgfDrDANNVUjBx7EWHd",
  "key2": "518BufZY4ZhUFqoyqRwGPSgJpGp17nsfrbx6MXQSF6WMNxGmJSzC1NX4uvZQ1LLi3K5foNb33meQZ7grsV4ETn8k",
  "key3": "2Myhr3ppDohJNhMqsRRbXo4M5NLYUoPQuHpNraENtaHQzpE65SLVjzFe4L8gPgNDJa3YmPQPxokDLRUbqgG1bgpS",
  "key4": "3KgbVn3gFcNvLmAipNiJbUKyP7Xz1sc2N4DutJJQD5ZkuoNSopVUsjz6kef6hvr57X1F53zyGgCUkV6ua1NAr4He",
  "key5": "wdtcdebosg9oKfgXzWbbsDmHXhWDdA7rpx1av6wPfh6PLBGmULZtMKPsNhiMJkFKeuRwzFjeKpZX7zsTfZFjGxR",
  "key6": "mrQU2wQFcYsFb1b1JUVnGVa2igU4xVEkA8QeZMhmEq6u5gzLNeddBZo3jHLZTt7XcfFbFjW23AMafx4azreij3b",
  "key7": "5oAZusb2dpR3Cdd4Q4joCyq8kEQ4Cy4S3Y6WAMmVatA6SFTQz2YTvQkhC6uiJT3Q66w59UkHziPfCKDcUqBUW2QD",
  "key8": "62oP9eRYR8aaPqGrsjuC7qT1TMJ3o1ZQPeZamw9mvRYyfHYgFvqzAfBwuHEzXo7Ed38UiGHgED3AwqC2mZt3VHQM",
  "key9": "5G3BVJ9yKrVT9XYsMsKAzjuhPKqpjDXwo2gA2eRyfBtday9Gb64Vua8TrESjnPE35uMA1r7ZKjPUmJ5g9QKyEUZb",
  "key10": "57GaDyQHDKvRuc6Metk81pN5VrXeWU27xs9PWgKvxncAp9w4PKW9mNWRNC5v8PM6a5TKProQYTB5r36apeNJqVDc",
  "key11": "26WVXpbUsB3Pmvrp8QAUbph8Khn4Ebae431amPzzPB6FHa9aqarM6jkW58EgTQUNKHNLyNnuw3nF2cRqisytZYQi",
  "key12": "5zD5uMUuRkyL6gJx45QDpSN7gXM6v7R5StM2gpCVPvNxKGR1uBXdXLZ3xgT6b15438xGtaZT85yTiuUzjsSYeVhx",
  "key13": "4TrtamYLWeK7fPvhX5mChUnxwD9AxbPqniTaR1bMArmpDRN6NDLYV8N2F1XLpdiaV6vXZA2A4hmRa8mvwXbP3hkp",
  "key14": "4DtwEjKNh6pgHmv6UR7LuYeRwv9KEASAmXSnBxMheVb6ZtbDJ6akbDnudyyn8dFiX4P1XhtLN64LBFg6JzAuXMeb",
  "key15": "2bVtKaYnyEsh8DgGcVdLPavaLHthG5bY7gGW18dkVs6ruNBLPocwmjR4tLGfkpY8u9PbT2mA5gSn8Z5bwB4xEB9z",
  "key16": "3ytQHuuqWkfWi4Jsu3hcEzs4H15ihYK4sL8RJCFNuR1UmRYpT59AEh4fWQC3JDHTyC1ptgmkmntuhHx1C7ouY72o",
  "key17": "5Av8agKUAjjD4DT4m1gy5KMboCgwMjmpNidtNLLBozjcWU85ProkU1xnu1U9QWE1diQRaPxDfvPWpWF5batHYB8X",
  "key18": "28ExkcTE52WDLzS4F8BTRzv4EejuyoxAYrVU2aCnA8prMa1VEVLZk9fn8dcaJFFP4JKWN1rc9inJEfefS6CQnSKi",
  "key19": "4pTG3hqT2n9PPqizge3LuokaPMYW2EwHUPTEF33EbGWpwAbENdfVcddk4EmywPcsoeNxgMTaM8gvJt7MzCUc3QuN",
  "key20": "46tnyzyhvGxzuvdRkBTB1X8dCeurdjgxSehX7TrvU6gR4jchUhc5FWaPfpj2ZrDMhtdpnLHPRbiJzXLz6nqmPjyB",
  "key21": "4REHKwVSdKKckbgtoWJSspCWTeHbxZxZVoZqEUL6WRs2QjJPufctbGp3wG2HynpRZqGLuGZKjBGLX2fyy757k3Dk",
  "key22": "3SR6fGLoRSPZieyd7zhuP8gKk2BfUaVCMTMjuuSmGHcigj9AuCTLYU5npYBtWmeQgDnE9PHK83NugPtsSFoTzjiM",
  "key23": "pJrDarX2SPLYdng7EEVNc2rkcJNp2WuSxbBUTajxkx1zPKwzmtg8CDuZMP3V3eJ155piEfeXCEnzy2N8zYagQis",
  "key24": "rrrKcZUryEYS4Y2zjztrSibnDz57GYwzkjuc2dSQcW5HjUngMsvrhJE8j8iPGAjHxNYsuSbA7zxPy1UxV6cCe8p",
  "key25": "4uCgNGjKwUb6WipTtDZHU3SJ7CxVhyWsQWQfSa7Vx95uwnH8omcyrWF8xesVVEtzQiQ9QvsxwGoqxqYRSChYjSJR",
  "key26": "2Dj4anU8Hqkog1iFMcfTvJoxyeSpdUNNYyEjF5est3ytgcA9Vmb7JMJARwUaCH5sd7GKWBXLYH62W9MF99XtCgWF",
  "key27": "JbytjWyqpJh3VajffSxgyNA5rWoZ9uCCZ9XPL3CFrUceNEL43qZsVwcpksLJMFxQEd4hRXdygAUrwHpnngMERWD",
  "key28": "KGPietVwaBRyb8QQa7tdrqeXKsyTMN7yhC1KqugxBzXaRThrfo66bwXkHnsajWQT1zSLEgzARFqeua91seBS9kX",
  "key29": "xsXta8u187GNgEqvR3dnT4zRk8yh5Jcia8Mc1eUxXbk8E4RysKYiYtttTiCRUsBhAkcckECQ3eRPxeAQG54wDFz",
  "key30": "4tGpe1U6sFN3dDDqubswVBB4uJyPgz8EJT4ZaL9Vquzr1DCugk8uuZ6wwD4vonknKNGjfsYBdQmWQuibG77ddM9R",
  "key31": "2cQLDkjkR5LgvcSbjzCpuH5MV49upvgyJEy3wSexQmkAmyKodikbupdjRfn6peRg1uENg5xZeQMeW63LM97gz7A9"
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
