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
    "3dNobYF36bjN54T4WbycEiew3CrYmatSGSBCjXU95d7gE5mHAmLFPmXAr4eRWap5CoQ3TqEtHnc7QxcBXqK6wGPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhwKzYamYFHBDxYD1keVeLFY7N1HVvjiMcEYr2rbntJaszHvkNswV5HydaYJL396tgnAsrtHZFxRCZHWjA69WBy",
  "key1": "66QcUkhv2SZsfDHLcUhRECRgaJfY6DVLdXVgna2Z2sBrVsu7RV8EqGEtF5JjeWNt5EmuYXBhAXikM7KsNbRjNYGJ",
  "key2": "3D3rS9ksU1s8gYCjSCpjt2dPUpTuw4269CFKP8X4HyXk6NaZkuRTaF2dTP49dcwii63rPHUtZSooDnjL6GLZzoDW",
  "key3": "3DJPwg9YuqscWr3Scs8tfLY4uPuwmQX5akmQwZy9o1w1su1sZPDsTF7Qo9dj2Zw8KubwuomYsiLZBAd3vCgrYtMi",
  "key4": "2cNaTJAEhxKuoGxX9r9p8RUk65SCbcUxpChf6eNEnUTJNdgzioBgapVHJJuRiMgyeePwLsHRw7vD8VoBPziWv7Kt",
  "key5": "5VmQdKMie3ApxyfFS3D8QPYXGKzQmkxy2tsSD5yUZvtpP8yyh2hVGLJEfjSjbrx3pmgDQxXH1vzh4RkAR4rFk8P4",
  "key6": "4WuBX7Tvzf8E56ESFQhycwhAeQaHt4aZ7LRARppC2obt9fPTBvGzErRndW5vQ28VrfTPKYwW955C7CCW4GPpmLdq",
  "key7": "56rSgsuYm5TyTE4JpfUDLmkJSz9sMuNWT1jkGpV5aeNfKTRKjtXZqy1iTMy3iVPCmP755DQwKQEsX5Y6ZYWoXdN1",
  "key8": "2rLRkKxfBkSPGGg7CJnLoqCs6t1W7XCi863J1AYXrfAovHgSmPCVJ5HFDvACLgHqMWr7PQFyTdfkRUVijqyMM795",
  "key9": "3gVwUhh2P87GHNoLCNzwU9ALhgMehVd9hQBKhzukhtRk4DsWY5NB3nrQGe5hvbAUkbbNECifqhyMYFZv7ozbNHAB",
  "key10": "3mQCeThXMMSRANvHKcRtH66RctrFH6w7J4YnHDHY1JLwSz9vb1DYwcSGvZmZwPnatRWiJJmy4UQ2cdv5iku6yVJf",
  "key11": "3br3ivEnx9eA1phi9smCNLqaZf1V8yjwoXzYVDgembQqZnViqxaE47pAjABrFVinHc2sFBqYDiWcnH15cRwY4P83",
  "key12": "3yBS58DY9CJRuB1gcUv2DyQyc7LBEeqZ5CJayXMugGUC5dteRm88zpb6enEeH23VX6GaUgcaau32HjEGavNHSgWY",
  "key13": "5PEvgF2WAXEcunxSfGh1XpWPUVcmhQ9JPfSN9jQ2grs9ivJKUg3YUy2ZhFGTZ2UYrNqspEFgDpQ5yVPdRgARVPcf",
  "key14": "5XcT4ynbPQa8DXGB9TRHxZQA2gwro8Yq4wFJ4NsBSDNVVnW36sZrV63qDJWdnkyUdqeuLC2pKz3Ba5XB35gxRtEJ",
  "key15": "3tvZPYfjazdf4RVALGU91qwcS9Qvy2jD2WZ4e6wwmyqRGgNKb8EwdFvQwdGWZcTRcrVLxEP5QtvAk15Njdo5iXVE",
  "key16": "2EqPVabu97B11RPSd7ZvaPafKsp1oTgFs7NE9Ni8FUr7hMmzWz1tk5afcxSPXrFDekLfXwmbaR1D39oKVrrUbFYT",
  "key17": "pRXoGTNTNZjiowfbMQbw8f47FhwyudCpKCfyoPCEHw7atbeun4GMQnbNMXyxb3mGVrbkJhDyQpJPxtmH6YWVGpC",
  "key18": "vZ2QZeuTZ7zvgLhYxHSCx39hm8xrHk6kfmXSibE8yDJtaEWJDwmCQMbWy1s2aM7UJaXruyuvDMAtWSk8nowDER2",
  "key19": "2fcdMy7f8PUsdGgTWHG6BXLrZYVWj6Q3rJQ2waM4FV66w87Tg92XnX6FooXyS8K1DyZM4LhF6MUL4JL2SpR8PkiV",
  "key20": "2ne4y1sMBAtrUoKpkLUCjykQoTjXzARP99DNPBFq9SNSyysiUwkVPzV5XhDrDKuYS3zFHjq9NpAwohApBnCG7pHz",
  "key21": "5LFFcqzgfWW5hv7YGeDLSopNyqSR2TbqqoqvkFgegTiX5deuKe3YW9BFbh3RRb5fp9xJJV96tVSsiXzfVpAXWtYd",
  "key22": "5WYDhstkJ3DKAwWs4uDhwC4vUKg12oxEpcpoo11qKriiUrKaE1aDEoPxS9kPKyJRM9bcQsipQcVgc31L28XtfQnK",
  "key23": "jDSZs6CmuqDqwfmWNRkybQh875ktWnhEdGurTxsvyDXKicpMHgdsB3pmJYkNXVTypLW83TT6348jjDbNb3CpV56",
  "key24": "GigcCzymK6is3VPu3UA6uij3uY8S9orT76JEEao5YvdEVznWWXKrwk7DqGeDK4DcPj3G1qEkqCDCE4sE6bfsZ9M",
  "key25": "32gJDPPCjcSEc8nxhFpYwTspQLk89zPcvaW5Yv63mkZ7fvAyywmSsP9k7NWAb2dfypMFYXKEq3vjM7yqHx2puTBF",
  "key26": "fYEZHYoP8uMdrsBtZ84vUjXrCY8RgWm9uQw1pTrb1bwCoNMPesgcz9QHHXcDJWAmfeEnWBCBLY7Gomq7VBTEKXi",
  "key27": "5KywfnNYnZm2y23LgyVVRKW4yEythcgjNdhwknWb2Vs8X4Njbm152FdVvsR6VsHPYz4oW4x55DNkMnksZBkPfhHu",
  "key28": "2k7Yj1pgsoTu3CnS3Y9m7ZHmuHDvQba3VefRSepwnvowfQHCUe1JVL9VFfYb9ARtx3x7uw4dgeJJY6M7pQ9UtXqf",
  "key29": "2LoxYnB4uyuV4rvoHcDeQgLtfWfAfamJJMgGRQpHWpx7ochQ5QrEg6Zhb6ZQzFSo6GnwneroQAicLzdnhvBv8BN3",
  "key30": "2ohQD2FUV4aTChMkqzR59epCTe2m2KhMxWA4FiJNDyrgvBG5FbWxMUS8a8Fp1LQRBQoADoJ3KMzYDKy64n9wbxS6",
  "key31": "3FoNsN6shWm28Bv4hXmPhNjNswvAanjumK1BKVv9LgVVqTnyuZu5qax6qJYTFy6DjVPh6JKkQGsc51Be7VzP5DBc",
  "key32": "66b6v3iVUrXHA7TQQo3oXDFiq96qGh35wwo1x67Ca1DwtywPNvT6JfLRkxpCCGt3po82v7RmQ5XpSLFvWgxRw7aa",
  "key33": "2AenZoXin6xSvAjdRibqacfe9HSgBQb5Mx5Q7zwF6iCeDvVLNFwshKd3AeqBTHduJZSsTFbjeVLScoxPz5vmYgFq",
  "key34": "5r3w4yvdha4vTCvhrPqS5Fx1PDHmHVwbFsqNgwULz6Zmxb1Xz1m4GMs7GyyyrSxUEd6ke23TjjPkatY2uaEyQSxC",
  "key35": "jaTgKkwqYeVrqxU7tXtnUutgP4wdJL6nfx92fVsVrPyUeLWqZpctzmFAijw6NBxvYc5BevQvQ4mk5Mb2jWR3ybb"
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
