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
    "5U33PSFGpZiMPNpZWm3QoLt6pcrEZPECZ2qP9DC2neuskFFQ7mS3tbE6muGjTJ5a8EiKvyHMFgRvuVrvBtHkPxt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPsoExABWu5Yyv9oFDDhv6q5AMEAx7W7uJrSDUcbeM6m5adYSu6g84PKinLQT8wXg7zcxocSj5SpRKZThk6M2yi",
  "key1": "THj3JRXc1hqDe15j1NFgCDx3NDmpfAhtBLApD8gSC1dJvbNNZbR6oLBs7LCmghKUo1t7n6dFKvFN6Qh9fZwBn4E",
  "key2": "656vNmoXn64eJc6Twrjh4a3nxTzzjFfvByTSSfb7nbH2t9DkSpa13eLiffXwGJNdNLcRFqnKwvS1bYBA5AiySf2c",
  "key3": "3Umi2E24ayTPkUA4i9gHumAVUKLLmBYRYBTyrCQEcpUMp8eHM7yqcdDMhr6F3yBG1UGCVzENi8xCZQNqTQr5YWyh",
  "key4": "3yEaKGaHwXnPEi1Xv89pmkr8auwbWonKo7jrTYz2KGwP7maVSFe8NnJ6x1SXa8wMc2Mw6KJ45EygnJh2gNeLJRC5",
  "key5": "56o96AsxoYowKWuFXbEzwwdxAmth5W77dgqMViAUWFo5r2SSg8pEja3dwRBYX7JcDiPdtohoXdx9gEdpTftj4muw",
  "key6": "28GHdxjYnktdJwoenZLy875QWoepnqUXmpwvWkF8XSRn61JXzJYESBJgMtkFcrQ7DN7eGkm8MTbmsrK7Fef3vn16",
  "key7": "2czmwuBkjLznfceziojG9LUcLqoySe2Mrf7oacaoaFHynQaJUgaQy2w9XXZaFSPn1iQK5tiNq8HhzPeey5SX6LTJ",
  "key8": "5VVLrnxy5cf5tU8LbymcruV4dcxQa1VBA2FMveJbWVevg5U229TrpCDstM9qGmM4L8exDUR1ihxVrmvWswPLiwtW",
  "key9": "28chUhouwXspGymqRczVQbDiBfqvBhYwBkqvoqWSzjWsLx8q8Q14QbFF5okqNzKGNaD4NmNENZNwnDKwcmapJvxQ",
  "key10": "yAdgmtKD2g4FcpcF8VeLP5NBbWUmJEkDPLYbtJJ7Kf88E6rm8eTR3sUQEXpA3qPBonfV8CsLPM86PpjYotzaYdS",
  "key11": "2cv2DbYDieWy6KMAcVnqTAJbuDuisgTWbeWv5LdXkVpNdeDCuijuKCsywpVLfphztMivMSrX9gJGzhCec4MXbfvm",
  "key12": "62kF1MNBhLkJzzFxJF76u36epEP6nMZ8bJqkBPiWA2e5fCEdMhoCxNQwSLv1fCawpajzDRNSUEykRXcNjiWYUHGX",
  "key13": "fD6ja9g7N5hipyHmzvLNNWi8qaedj4GHg2Uvo2JfdR31PhuYMDP1oCScfqWKuzRttKMZXQutyk28cxqivykMFGG",
  "key14": "tvT4LhDvZh3VokV3utzr4JjAyszfdrzenb7VsWxKHZGeLnCiCafWYnRALEsGT8qXJNGjw41unVVBN6yPdB7zhR5",
  "key15": "5rR1HiK2HrH321TsJWbpmkSYQwp6pVZsNe71Ab8i9QcSB4ZBWXWd6XqNVmUEKy6tz324XbdNRvqKfxF7gvzYDxE",
  "key16": "3mtKswkjprs2kemCXzhR3y1ww7oj6E4pc9jd2g81iLzcFkFaicJvM9DyheKeix7Gde2B4DW29S1E3K7rvxGSuaNv",
  "key17": "4Z6CHLmrMQ9MFBaP99z9yT3p27YzgeSEcvofHEAUouHvB3JNeEearMEWQRZXmhDqkJTupZGhfaNcJRRCyU5oCTca",
  "key18": "3pfoiFFHMj6MS5HzJTbgXPJgGuy8XLM5ScbLc1XZjJ9uRVmoox7uRJvczpXABa859WhBdvACco96Ua2CitbyrCmn",
  "key19": "tAkBKV39djnLzDCuA5K4tyAYkEw7RyZ2ZDQ1Ew7GNXPi5GRMxxVN4PztEHQ5tJABiDdnnCv1VQyFaTim5CJXNNv",
  "key20": "2pDXsGMMqqc5nqn7Nh8QneTPRqNYNhLobgypPw2mPErUURGXr8cjwcHHzERwdw9CWdCWeUX9vjBz6ARdesy6i5GD",
  "key21": "4qzmiygUepRKYYfE6ZtnM7jGDoa9KL5PiQWcDE3nTaoQ687yX9czTdtcokbK9bunEgUbUjsBThXNne4DYGm2BVwg",
  "key22": "4ZJCAwzxvQ6Md8PwcA61YDXoqgE6oNkYpc5rLHtzCrZV67NosBBn5JYm95HX68fAHeJLvdXQGWmovLPV1ySSdrpS",
  "key23": "3x4oVYSakWuzesQuRLXm95BN7nDKLWksG8PqmKSh8VLJZoTQWyGA69q5ACk2trNWnGqtPSXU8Z1r5afVSSWKZz9R",
  "key24": "5FXMkFcBHuZRscwq32H2FVwJeNdm5HMiF8emQoojDMiRDVeFUVUb3pBwxN2fFCyzvxyBPoUHHuZgyadD9smwgf6d",
  "key25": "5xvoJRRoivuAB5G6SfqqvtsrzUSYSCDRwNcKNoGz37R5URVhh4b3aiQGaicMsMv3uWN5LgY5L3xv1dBULQ78f2zP",
  "key26": "33eXhAfF2ui7oN5T9Yhtx6BSPmhfiVd99Q7zC6BLv4vniJpxH3Sgi9VboCfwHv6emUUvvE4FKnJ6qV9KhfmdKjHd",
  "key27": "2gdRwnyxsS4rgYPwYNHZjpU2PD3KF69LMi1vbBsvmw3Z39oXzb3AXXob2aBTuaofqEPekxbKTcM4E4qVNLLThAbE",
  "key28": "7tzA4xxArNtG3G7ME8F4b7ZC3zta1KBRXxCwr6Qes62VabWTjuPa1jR2Wavugbun8xtCDKKu5sYupkBYXhoU7Bi",
  "key29": "2bvXLGBdFZrKpr3RBJpKJnXndppsuyiLL45yCRQS3drTVPaNXAnuozNsByffQ7j1ZHnnHM6xpwD887RXL9FsVE2F",
  "key30": "4BG6tww7yRNNN5PWuBaZsRP63KvqyThKzWfDLKKpGfKbahFEZvwu1CtJGgZNp3n3i1h1WXGbq35n1VQntos9XXPR",
  "key31": "5Jyqns8Sv6enjtb6ZUSBkZD1wmMgGN1eVFRnS9YzVZ1yx1esCBnnxkUZ2FSKDAaeNibXL3pJLsr52UzJX79nu1WN",
  "key32": "TjuXC7Mw7aaB7JLHPK8cSrmaNsG3BVAWfhEJGDgG2SHbsALdvcMTxxmPx9fcsTNM1z5AL2cNzaWrJo3AHQid6Lx"
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
