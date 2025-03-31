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
    "5zabDVHHBNeAdaZFwkV1UdJkKXBg31jknEwctfHU1oxWfBLE4LMPF7y1NkZXTTBkzvQBqLrTRCHyRKsi9WNmDCVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3u1Pm7cSXUnFtybEGywGdudzy6JbKyXNG2qaGUhhsvvbrwACGUwexnNNsrfNs8orvFJsx1u5pYrFqFxUi4sww9",
  "key1": "2RyxW2gRzBqv2PsC7rHyporpSbfXBPrXRXimoNB1rKB2WD4wrrU4PmhJ7siZd6PxFZ4RbL7ahpBR2CeSKLBGQKiV",
  "key2": "3YzmcumH819ZZccbQ1Zoa8cHAkmuqjcLH3q1P63qi11uzUEr8NDZzcKZco8KNYDECQPo6CEfsyRtWasXD3RRmfJ5",
  "key3": "poW6KoVqaDcNj42GNPgLtThM8JKkjrdRjEHAn2k65oh83anNuHj9o43fxMjTiJUDBsFiJQ8hVr1Pswb6Nzyb1As",
  "key4": "3z5uQnZm82aXrAL6JVqMVdHS3B6Sr1cpTn1EiMFaCPt8GH5kcTD51ZCjAMoebWfYSjGVLti3jeWfavfswogBqkYG",
  "key5": "2L4JLYBmLurD6qECgDqStmJgyemxx8V9xZVxVD7ThwkfSMW9QiPhXs4N4g4GVJrQpYyf4B8nrSEQD8PiVHDkqoSF",
  "key6": "48nrrzs6hHJ4A8nA4mzvnourp47tPB48WnCoWDeqgy1NTZL2Aj2szScSJNdeN3zkdkAe66SXaoAYuYjkRgQVTv9i",
  "key7": "5k4HGQwCtcswG9PVhh93g47KYjg4GmmzFPA9CphoQbaxnudvVLvTSMUq8D5YFUb5a7FwRWN1mqGnQEofnimJn5fj",
  "key8": "5qrDALTrgJXeTMFTPhBte8wLqXMbBU1DjoesqamaE4cMfgu1F2myAkRHPqKochsj1Qhy2JVZYxzqGKzuwa61Pjqn",
  "key9": "4Mb153APUYUNuNnyzddxS7oHr1xvg71V6E4swVzRUpFtw95aH42ZjBsikh8Md8gCCHVuHq6i2DgVLWFXLxnPVKDu",
  "key10": "29MEs5evbcumzAX72mnZTAvb1Qs4Q9zDmvb3AEKFgwtJbEQXQvSA1TuV9tfvEvX6JUqiJ4SVpQ4zryYqw8kU23Dr",
  "key11": "mYnhubV4Vwq8oZQmWrrBY3J3J5RAa1ybxepfEZKSoNMfNUQZfZ1MA76cxFd3fmcKmy8kN7HAqX8vVgWbzeHhXGg",
  "key12": "4yA6MnjafAYWGrV3zs2ix3QYHt8sD71369S94uvQeaCQwq2MEkRfnAeeHUPYyQYWZscW95Xsr1kXLW7x1M2PFhA2",
  "key13": "5AvxKDvQhmgueWGFH6xEfHHgKnUrFTh2hdcZEth5FD8ruz8nhmKPZJQBj52paCbA3DGf1KQsZckG4imELj7JmVVv",
  "key14": "5GQ9nBcHTCEY892VgS2heWjFoHBX8nSuHjyV7mNDgqGRbmzNgPhmTwb5DZ4kizTvSsUP4qetWYRbJUQjWwbrLr5",
  "key15": "3PLWUgiPRckZ1QZXB2PR85HFXp93kx3hXUQaSC9gT4921Hu9QLV95j79YrAwzgv8fvQjW1AsTNr5FT8TU52w1eFB",
  "key16": "hYxhVxaxTEKyh1Z5g4hkm3UJ7iNi1nq9EWb5SjvQbwziyWj4Cd7guAVFP6K49ojHpWqd9vewQP2oGFyGpaikBWQ",
  "key17": "m4T73gbYfdtjtNdwVmjTNXyrgF7iwSru2fK3bjf3D33eGMHAzdFdC26Zssi1YwDz8CptTpZCpEsXHLC1PwNEQTd",
  "key18": "4a93XguLgyaVhMLnxxFWoY67rtazNRuLrJnMnncXzYZ45uWU4ZgrSiLYec5b6CduaJ7jGBvdu3YARapAXEDfQULX",
  "key19": "3QD2Fp3xcpxNsboaBqg9nCNLQsxM22ychJaHK8q7FrsqRrq4y4exTpE9t9cUNEfm2b2S2U2QHNTrD6KbdiyeeUi1",
  "key20": "48KVF2K7PxWZf8ZVWPPuhAiCyZiJ1UEnHJYtwKPkHFgy1tFiEmqD4xhw2ore73eMtSJtreuDbsmjVRqQvEHBTF9Q",
  "key21": "5Qs7WuV4kkHFj5XXNf9eX6CQyTXXVcLd4cjn3EdfxnJQHT9mqqx4ZKBj3HiGVupAz5jU8ndvGf9bR97jJdNHDMBU",
  "key22": "4jtLKT2ZkU8qQUyNerfwdbdkwFAezTXYeftTPTfnWiXVj3jYRTDd2d42nKF44Ah9EVchS4WtTBW4HWcGtNPqSHzC",
  "key23": "2hdvuwrRp3s1rJcXuUFi8bRos1L7VkkfC5awWSEVxkQT3wPSnyyiGuxznNYPgSvYTfctMyZHkNkFRAnqpM7zKbeX",
  "key24": "5qjd6CowskmguXSbuEGqyVA7wnYrRwddzWLVqHBty43RVRiKs4vPRu6LiwA7RA8aWTN9QpJzkSd1tu6oCr85EsKy",
  "key25": "34WZCPvtDvjQUEmqxVwjymq6k2TYKCYwopRT1P6aoKhzkfLUrAD3HUL2zxHbg9HUKR8UVFhVrBtBrcirCG3bPXRd",
  "key26": "2jgjkDzraQgxHqh6Yh1XWGzk63qNsxZffogiRHgYzyx4mfkTqe8G34wVKPVJEuhNkMVR5oCy2sWX51fEKgnRECL4",
  "key27": "5EEYjgkpeAXKVf4pupoFApL4BSHxcM3WJTxBE6Lwu9GfQqsuxvMrSqHmWyxamqJ3rJqmbnCVd4cyhw4AN8NrpTTp",
  "key28": "4SrnZ6obaK4ypYJukWMH7oXxDHrfQbZpCsE1gC8YemUv3TecQhwQ7fG3YNGCaydYDY6LYtCkTtNMzd2yitZvxqLk",
  "key29": "65SpovV6HinaS9tvs8ZrCqU7UZzPhivtHXoZWEJKMbk2f7RxpJmB6tGRe2hfwfsGStnnMZLHoUNEFUVoot5uSGRt",
  "key30": "4yKca1B3peVGEEbYoxN2E2o2eFz6AjMKecXfEAazGnbshqtRF1PRpXGmNugtoX6EvQmU9PBuLBQ3mHVwTZqN7HgK",
  "key31": "4G8sQLn4GVnnveaC3Rz1vaTKZvaaMfk7HVAzgWpzGvGHvoSMyh8uX8shz1jLHTMqY7zZMfAGvesUNN4QyhdmY7fy",
  "key32": "yq55ASqyiAceBn3AwHcTBbtXiUn35uQYvEu7328ZijRy3feovTkm8JNL7CCdRyUbbcnHAvjsfjx16Rb9JNPwQWF",
  "key33": "4oYuPT6MaPvzjMkbfa5AuE7cz3vXhsMUYggqcLUZUtmHg48LNL37SFjsYNsnEdXTfqQemcKwnscPWLpVh2tnHj7b",
  "key34": "4xNAPrThCos2Lc1NDijLoPErf5wsWopn2WCKk4ctVUWA2Hdx3YonybPQ8U3U6Php4Z1gB9vuDZqB45rWWohC8dEk"
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
