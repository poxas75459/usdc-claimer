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
    "3o9MDXLxpzjLuE8Rc6MPqsMQSP2GYVanZYF3Kr14Jm4ommwhLPtEa9gj65jtLmZbjGWgow2H3HxbFdSa9i871w8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDdXAmGdZnPRr53fA2VhcY13HNABNTpCQz5TmUveXTLyAuWBDc6M44zNDoCFtJrRmcj7C4WgG2aUyGZztJXWYkT",
  "key1": "5TVcq1aVVVpd6RRCfz4Kyo1pEW4cPJWN76RCAHAWFDRnvDMgUd5vRMKtLynJjwPghLsLEYdrfFUV2MGxD2EQ1Qni",
  "key2": "3yGYmQBgCszws2rz71Q4dnYSiDQvEaLjSzUf3KCUyCKhvBjpP6SNWvTYmy3AGEmfkZGGDht8vh6L6saB2K8U74tL",
  "key3": "3GKghAh9FuBR1AsqVinZ8vBHfPXDkeCXozaGNkXDqDrAcPo8jKuczzPuSHX7bEvPu4suyM8zocvN6so2pL6TcchY",
  "key4": "5KX7RC6fhp1cwFZGmEo5c2jSxCNeCT2yCgUG2ifzVvbShxD828aPpzhLCuxWBMzAL8Fdq7q84yiuPFF6DqDTBD39",
  "key5": "5dNB5qna2qUiJpLtn3DdjjeFmouYvDZT1CJe2yizkuVuGm7GeL4deHZqxxeUEe73yRQvLNq8EupgA1NqNrnniZcM",
  "key6": "38jG5wtGAPSe9QKoTh9eni1wczetoAKwubcukRmQSEpNQu4pfD8UAydwhXbxp39XrhswQzttfArdC34HQH6JpHgT",
  "key7": "3qvemhxcTkhcZwqiJ6eeWAeBmpWrqvPwkTBLG1Zxs1vsaoc3SucC5cBAY6jvWouDYDuUt5bX5e8LhJ4Jyz3NKPKx",
  "key8": "n4qzNQWsKfuR1QrFCaa1ApbzySbpxVhSpTHUw3q7nN3NCKTfmaZTy7g3ufmJT5JgzjScMfbr62mvsrPWKM4fpep",
  "key9": "2v6EFk61JLikGtgAsVW3Uj89ijonNDapo993msPDf7TFt7HPBFioRUUvBXy84tUrGGwdzwu5vZ2ss3WTk2fPoW1n",
  "key10": "mbGZFDaguF472snXdVtZfstcgRpF4brEDXwmn1r7AEFYSWqUVvLwDyuv6KNVuTKHPRo1XEeSniWmhVaDrFMmzz6",
  "key11": "3y4onmZ3CU6jKzjbHAdv2Ppx4W7c11y2Yp7S1iX9NgajnHV6yuuuy6F1Mku3sbbc6Vwyy9zy1PkYyvN4fUmjjk8f",
  "key12": "aVoe7798so7oaSD1kvnRSqWBv9YX8QzYdjZF33ms1vdTSeBHca9YtrqQDYZcx9t7zVWVffEx3E95kVFDzTTQ5Yq",
  "key13": "59fb6QGaZS4wrevfyRvabVUZQgXoRQvDu1Q9jriVyFHPmp8s4i5tutACtraWy4yCKReAwc686cdduESKqdGHEDSf",
  "key14": "nrNgcad8o7Rqe8skmERh346fkMZPqEuD6PUczXAi7WaPZoBR8mT63dn1rA6q2od2EtcKkNxRM7gUTk4ZEjo968L",
  "key15": "2EfXrSrgxWC4M41Les3K2ac9zajLn9oogJFGZwwNtzMpBGSvY1TfNY1MLjt5AHPDgwQCKBWQbK4YepTtLHdZjP9k",
  "key16": "dH4yqGEpKS18PmRjTPXLy6fqs2pQctZsWUHog87yZhpG448ygwdTEJdnTAEovMSVojEjqTEw2oAyewQFZHyYyeJ",
  "key17": "3fXX5B6EuTLt8rCbKfjdrHDbAG9YjS1quex91v6TDEtLchUupKmhk76V6m7Tq42U6W5FQM1yBxADY1JPEhVTMviG",
  "key18": "2ETf11GmNaMBw2RrUNUF9KNQ9qREVAdwpxi8D4WxzsyaRgTvhhfTSbNA1N64mbbvFiMasWLFc4sSfiwmp4kbhZ7",
  "key19": "5w9FCMWWhQ7vJ1isi7jP9LUoeFnyYX3QerFCLamMCyZ5Lbw974VQfTeSkj65XcXiLTwXmYhLV1pMFTE48sUEUS1",
  "key20": "TGBi7mc3J5A1AHAYznL8GGzk47zTMLrf962ycsTgFSVK3nm1rEXZnk6U3KWBmXy7gEp7VieURpEVjTmAnWSzeSW",
  "key21": "3aobUGCLxbSvK4dVFzkzqBwHUYfveDC5j6gwc1i3jzD2B6dGNWHQbAb5PdzcurKQCEZ6PQ5h7LR3rc5nkFy6JjBC",
  "key22": "vz9puMGoxMWTxfTmAZAVabgpHqqGrR5LHsWbJB6TLA29enfCCtjeuetQqhNhupLv1yEDqV4TnKanE3xkSFU1FvV",
  "key23": "4DydghEj4zhnnbGyrXhKZYrbS1WfszqXu6wZmF3mSHu77AYCnas6aeiRPRekjKP37exuFJ6SeS1AKzcassabqKzk",
  "key24": "3aRuAKGuSXHsMZ874NQzLLyJVemVcbSg5UghQ3kUrPAGK5DFrFJXq8oXP7cM7ckQqBMr2hXdR9ZA1J6mpccAqqEF",
  "key25": "4nTqpX8fPjmVU4YBa3XXqK89zbErVdiyzeKdcMBqNa2hSHyw7MNt9ioryng6ChcgHzYdW2VFEKREDd4Qo7qMfbjC",
  "key26": "4xgtcis37WtxjSmjz3Sbu8vRsrs33tU4J4Q6WweK6Lao6iWVadQgaQEZJonwmxsmJuH3RGL7Hr46eTrU8PApcCwv",
  "key27": "5dzyx7ZYmaTTA5Y2DdzQ6ejrtiGDPEgwqtgRi3eNJbAXqrjWbQH7YTXrDB5nV2YLtqhLhieZNdEhovYcrVwdqyoy",
  "key28": "3D5SBsHQBXyFDDrahjTByzA9BSEUNTAvEZVWFy5ysyQu54zLXhgXBZHvnyX35bqDBc9cYM8ggGibrkpKozmVtzb9",
  "key29": "4SL8RJKHvEzoin3nr283UA7vst5Pheeqjz1niHaugPK5URMrnNX2cYfj2qd6Zpi3Qdt6JaAh78yDQem6gPLeM6p2",
  "key30": "3G5K5wFFxzE2Kph3dKy1UJvMqHjtMcmvVaQQNwibk5QUPzAMFvUKrUjapHQAytCDwHkTpxYByaDWswR1j9QR421n"
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
