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
    "4VBaR1mWmo3RvGHSKPit1bC6rvE4vLzqQ5oCxdspt6ZDfq8SopBB39SuRBuhDLH5bdwcP2Sq2iNtbkGqZnDdv8Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXgthP5tqR8KCk9bWQzd1nB3bP8AFBTkLUUjuXG2nhmRhNQxr757Jm7u9WV7yULtc1BjvJdTmJCbF4qSP6yAdGH",
  "key1": "kCGxAZug14Zxfx5HC6Wm71z6DqWjRS28Bt5qbeMfhdJWUsjv5azASARkjKUEHG2W4rpgwXvdXoTRduwGF7SzPRW",
  "key2": "YSXp85u5BZ6ydmPjgYbBRLcnrp9miJuNdUeHiFWEdd6CQgkLPfYFspKiyCC6hAGQcKgvkAFaSmig13uQNxBWS6E",
  "key3": "7nanQNBd5mgjHen3DswxtbjmQKRtnNzXxX6bcbFAp3aw3NLhJqXxojkasZrkV2voSJcatu2dLMKLedVdKaxawQf",
  "key4": "5c9i9HrXKk5ufQWm1jhrgBgTgJ8cgMzAD9eXX29W59bK6Yp4SKJV47gJDrZyHKSJPscUCdoQMudhB168fpSYxLqE",
  "key5": "uGkpkWdyCKgrjfkLYqz9wXGSHtk7mDjHbia2394b1dpWyJijHPw3SJjv3h7VrHcjcx62uQwWa9uvPU5w4z1LovG",
  "key6": "3Yaz7CsXTqvgu7tUpXr8bCzVuv7GaP7thjK68RYdW6Ep3HEZpEnkqMMxZBdtiQVha7Wbg63d2xoRGhsQQtfx4Ur2",
  "key7": "4Gnn1NTzd7iTzPq4mWuGgbCyHqyCjYr2sakB41XAkTSv6EfuBrDh6ca3uAq9AfBDfjdbDKWCgynrsT5FrsBjDkyL",
  "key8": "4Nnfwgf9UvH1Z4KSu15FSFpksVD56BTkoMBtMs8P7ywcsgMjMFLvWsR3vCeDjkP2F3jAaT3zwkxQL4oZGw7dsxVi",
  "key9": "5ytTmihKFMEBdXp2kjrdEnXoKP27PMebpU3yVwmH19YJU3DJWCGF7SEytroNCyQQjkq1zSaxKKQZp34zFjchPhJe",
  "key10": "89Awnn8voUeWdgksTWb6L8DYE6fPum6doZRjJoV88KPdYoxYJdGhYPRiMzQghUbJGSEXqMV6BDy5DLe9XPKfNQp",
  "key11": "5dLLY3uUmTHiVs34kFFmKAYkneoMVCQ5wrCXzpvcDy8nuE3THChYn9fnhedHz9FXRxXkeYcetHQ4TEHVi7bj5xcK",
  "key12": "3srxLFX1CCciFofq2pW878mSW3sgSxBTa3h2VRV6ECwR4R2x7acn4xYvFhLwAoVfK8gAPB6qfaSSBqHub8yTgPDk",
  "key13": "njiYZrTQofAAU78YaYL3FgPDp2eYMCwaf28dGy6ukzfqcDmRx4hnuLER8RMCc4wxkNzvwczvp9SUR2fVp17Jcru",
  "key14": "GZ1TdFuvyed1X9teUmAAavoDzQ9xucQHpv3fWSon2aHkxHUvjPkW3P8YfyDoRD5L8sBbbvFZ7z2pQRWaMGsyjMh",
  "key15": "48UDZAQd5HwsSi1veFUJ9GDKX13vFpVV35FQLrFsSS164MNao6EKpr5X379Q9Yvnvcs3YzzpFajhRi56XYcvENYx",
  "key16": "61zFeNMBkQsUy3VsFTxhsP4iJTcvyzWje63QfUJeVmbt8XV6tWc116fEy3W6QTDT5MfXT3bM1WUuMAqnKmCxeeQj",
  "key17": "5GSeEVdrNauKwaDjCv1Zjt2DJDmC6QcYaqoAdtq1Q2ZCSvg3cCaXe7Kr2twgSbesBwe6CFuiDYb5CpTwJ6hUzk9B",
  "key18": "5anmJLC9P7QYTLYwpPjhM4RRLJPqU2MjN4xDmXRVtPMuYB9adDvZ6iAAEVvaJvopXVGcop4kQRKwee7aKd5HuBpD",
  "key19": "f2zPxcFJ7wg3HfxYN47WozDq1sHfYRG41Mu9bRQeKbgnFx5uSPkzRWmhfHQFngy2wAe7h4UfAbR6QwwbMydq82R",
  "key20": "2GLeSjgcUvfc6UxbZCzvUycnymJCtpojuEGQC7gCyj2WwbVWt8NeXs4HZeid3NAkF7gAH6QvUo6tMfvbjeUxRv5U",
  "key21": "5rPSbEzu4rKeCDurvDcEV5MGT6z8FHcqAn719duUjLrQQX7TxsiocZVXNZLa9QJXALfLzmZVbW1q6Ni73pM5fUa5",
  "key22": "4P6BJDpTfgb2738Rp4swgJ1y9SMyXDZD8cQYCSkUPYfBEK5n5WQ4JxiJX36hcus9SKBBkLvUYVatUrYseWK4AWbm",
  "key23": "4YHjKeAtjS9o9sQPkSEn8pAWcZXcp3vJNYJijP2kpDsreQKGiKnLE91SGfeTJFFwc7aqZmhC8ygEL2aYEd59yPZr",
  "key24": "4xHZeLyZ4mo5wdf8xMe6akn9wn5Z3geBYfgUBtzvFDUqEu7hcJd2JfnNNC3v7tb9JyQjRqNrF4v3EbJk196ZeBL6",
  "key25": "5gTUeESjCggGgXDmMYu364P6fpgPXMS9QH1LD6TFW4iQiSE3MEDdDQ7xpnpgwWjBZwCRZd6G7qJkXr2PcwevznTK",
  "key26": "4sf4B6XvGUU2Bbudii6bw1fMrGaVBQ6x6AcqPHSErUgtadYzSejTwM155xvWkJCavd2PqHfZFEHDBxA8qBezbAGL",
  "key27": "DczjGCsbw4ZTbe8HRcxCQ7s97Kmr38jjrRwRK7ktNnX6yJEdTcjWtMdnLHhC7Wq1rDvnUmhPr7jqAfpsf6mfBLr",
  "key28": "4RDCxRLD9ES1mSB1k2mzLcLvu592Zw4GwDZdaNTin93dGgXdhartMv2DPARe2V38aL7Lc76uqSrZkNzwRzbAoLDv",
  "key29": "122Dv6JxNnjSpx8F64v1WAEcgXCDN9Uh3kRKe2aNmCqU4wtFFBbTgPM2WmdKPzntD8wV9Cj11immKrfmoBu2sY1r",
  "key30": "5sZPXFAQAqcq6M2WtftZNsrjm3PGxjmLWCfAQUS2CDN4zWwTjPKoTDYMM8AG5xuo63nJowNpjr89jcmAXosTw9GF",
  "key31": "2ThWiPKZ5Cv2sc7hzPRRJ3mEnwd2gh5PqTpYyTq6C1ZJDg9Bt5rBfodtqg3UD4vQVtr7Bbp2AtdwkjXrkrnbWEFk",
  "key32": "3PMYtqtSce1G9ZaxzwGiSzqRxREEWuS8o4RaA9VVb6sxJyVEAxnJYzCEFQvAdFkXYxj41ogy5f6xfUJ7UDa9duVq",
  "key33": "3HWU8wZXSJwLn4iDT1Cde4MFpiaytKWYqb48d2bXD5WSrLguxvmU74TwD413HLjM8kYz4rTiKexSEg2HjPhYbmc",
  "key34": "2RTWH2AHbKJ8QR45r8covs8Nqv7mdxnebLxsnP8pofFewD4iNvLHXXnUUiKATuMheyNWzKxi67Ac1CSHFzhqicV3",
  "key35": "2YTJsTt5njHnHXP8sEVM4DLzfmqwwsXoYKMH4BWyKUTD4gnRyqst4Nu36YHmDHcCCX8RQfFn5wvwbpeNWQErxwC",
  "key36": "3Nywrjep64yD6sKrtWnNnAbwm5NrwZbTpWk672RFgQBnPYfgny9oB4EZq2XBiFZ1upXHTai1KY5jYYEpRVCBw7mo",
  "key37": "48BRRaBs6HyspN8JsdvNg6tN3PDbpUMoJ2XaSxUoNXXJQvZ1K3ZbwAH9G1SAuJBguje1NtCWpxDhxoMKbEx2TTYw",
  "key38": "97vri3LiS7CHZgELMJJA97ovpudn9Rf1ns7XruFm36BLzeqgcjv6MvyduXD4bWDgHzDrpZM954cMHziMv3daMhv"
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
