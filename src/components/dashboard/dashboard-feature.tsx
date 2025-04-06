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
    "2c3RGaosNKfByqW89RTER2eVnzrSbTmdzPAGJ1fqTgkPYw6YQsB1dpaFukLbo2d8j2bDofztSB3FcS4SMmgQpbLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fa3GeedsSik6w4E5QnjyPFtBLCMMmQEyaW1HWco4FqUWaJcX9NEhH67tqd2QLHhEXsEPEjxHxB1PJxZzSPZRefX",
  "key1": "RxshmHPMTNTzpwvNeTYwXkAK23Pw3bGNtDWJhwfLMX3pTvH1jLUzxc2ceswd2t6WkNjRcAXTBw6TiyrH2JXdEva",
  "key2": "2b5of3eWf3NvsdNnQejy85b3nFSL9aN82NWgvF4zuUGjdCDYtAJcchD8b1DTHXmHnFZWgSwWi4ZRAgxqoUZLeybZ",
  "key3": "uB4rfJpkvsjs8DHyWU41KQ1v1dJD1zUChnhop9HB82KrhhgmEMPTLTMUCTCfKN5tD2Un2HvVe7uCmupUaXbxHUx",
  "key4": "2wZY8grr336mMVriwSRTmVwtAmmy4inSDTVj2wyaAxmfUdtQd5dKGfnNM5yCL3BXtmAAxaykF7uhK8qdnaRYf4xQ",
  "key5": "4cxq7K6q5CUW1vWtRWBCtAQqjUztpiUHRq7neF8XeYQeZ5Rvgj8rUvmERkTi4HHgwKxvDkFb3yvnuKqUjibeb5Zy",
  "key6": "iHrseGzdoMRfgNaWasZ6JtbQqcwCg2AjMiiyJBFGk2yRFwHtwd9Yn8RTTNZPTYiRmcLmn7XRYnGyu1bwJsQUmDR",
  "key7": "2ANck3Xi66q8JAuhg6zChWxvyjyNcKTuUvWvC83mFppDw8YXqVgqiZsdGn8iTACbYQpxnKgsucNTkKxrmxs8xdwa",
  "key8": "5TT2fKG2L4eaLgyX8Qtov7Ju4mtEcq6qeiGEMGFoNK6m38ywnMT9MxdnjW9WM77EfyAfVK1XqjbcEqTQZXJGiikW",
  "key9": "2ZQJEjs7eomiXiHRAB3APidqWmKE7StY2MPKUyb9DgwMPRBPUBDHGs4WXteCdgCMP6okYVoNG5NVCnR8WZndZPkg",
  "key10": "AJsmBeUnw5swyBhwthDU5bUSCbg8iqrg7UhE7BH93JQaRbR1GEcxVGmgNaYyFvvrdH6PwLpQy2oFEBg1fWzjn8L",
  "key11": "2pFaKscgqeX4cMWBfHMvnuD5bB6M6XrCp7qdVk6qP9cuNmquFXjvStigL8ra8UFVRFQM8dCx7AP2yYZ55VEnXZrr",
  "key12": "4w9bQTEvgycpwRiAeQUBD7ae56Z4Qarcg12wh2bSYQNkLz8NYTFDKFtjqeDK7eXkTksHnFNDPpNgHLCvFNtqDW1L",
  "key13": "24gFdk7Eifdqb5PvV3M1sxcwYkeqFC2D7ssDyFSgZY4N4cdgNCywqMQmnm7NY6sMDM38ndimGyBiAvenUpb19SAh",
  "key14": "5Ntz36KbFbWs9mJDYE2u1vDr8ViAHaGvAwTWNqSUYWasaK4pgEn1E8pEdvUiAZZzrGtmBLo9GyydMi4GSQ27GuaY",
  "key15": "4updQKG2iABY3GkwAPcJQqkWUBaGfc1jktenVsvVokYpyEU5x1p2cshH7EaxesjujjhNmwcsma6rmMXjKhHk5iND",
  "key16": "3bsMauvRR6ADJzkroEX8nNRBMjDt7ZGZXMRPRE84xhSpYmpjBYT1yKJ8wQ4ArqtLWm8q3oz5q4VMKeJXaJ69VbK7",
  "key17": "2NddWELQQUnKcSKf7LdUc48RW6982tjm9FpNSRdYRBVhp6extsogS3BU2vtSkzB3xo2iw1Gnkjddc99rx13XHAoc",
  "key18": "4gQG2q4GVS7bQFDyxC4c4m5hAsLkqBnh4qntmiCK3yggPriEJMAGUpRpxPiKjAhKWWQmjVB1KQGBoRDS1okbH62B",
  "key19": "4QzYaY8JGGiNSABamLpKyHA9m8Gr3FJsFZK9Rw4Eoj7PsHKSZeY9w9TQCTPnkjjRjWBQunGLvuc4VBgNvicu9A4E",
  "key20": "z8bZGSzKVdCeWhvP6ShbZwwGBvLwBEMrZYwarF1DLB8jUnDmo8AC7Tvauwqwg4HK1r6L3CLnxP1dRiNeRsFLaKm",
  "key21": "41f2h4DjZxFuQRkmTdT7jZe46KyuKvynoedfoqSvKMuKGdYVUjgHThaY6usy4nNTEVfE4ACJW3gRHWe8qC4qAvpH",
  "key22": "4QYLKFfCCyLiQ3UMNpYXPFxhMMt979k3Jz33MBoApn9vs7X38jjSjqNydU24B5Zkzo2CuErZWjNXX22B6bA1P6JV",
  "key23": "3xYVCn8x42vLArqwSn1KcqjrUfsrkpB1PHX8Px1N64s3CQ2EZh1Exw2NqJgHD68Q8NoYGV81Hoi3qvmyyuPoQf4F",
  "key24": "36SVY7oKUA5NgsvRwULW7J9d9VtEo5vZb4W8vrcgF5dD18dTJzk3Dfk7gigaXdCCQbVA3YSazdyr9rEBmX8GUx39",
  "key25": "3wtExNzz6WDBXXd9Niznn3MN7JANvSa14KaswLzYhJygWQXpyVbe7DLKir1NmWh5CRt3NGmzN8eaSFXkBHDUk8Jj",
  "key26": "3XJuqev2FX3CsAT6gRc41AEo5SDoYJBPJCtjnM3p7gTahW5PjVz9bssg6yVJ8gx4SdDTq4hTYpKGMjm29RxfiGMt",
  "key27": "66KQKwbLDY3cwXz1ULtUMZHEqnANp3UQcBeMK7QKoatdaGjqpTXkYh4sBffxQvzgLQJB8sJscyLwTaqDspPn3MQB",
  "key28": "2h6Sc2mWU4fLyrLpFTseYvJ1GzcwcRfKrG4L2yfett1PWxtsM5oj2po1jfVq2YqkR2qhZngkcjvGuqKwWT8UhDcY",
  "key29": "3HRqkMarJq4BZRxZjL79hGgz1mEkKufBTEueJ8NFEsd2wn3GgNJLtkdnwW9sytD9RXwbqvuhGvjE4KmnfrJMSz6r",
  "key30": "vKQFpZVhNBCf4uRK4LC9ZpEETRAFuxTs3bMKo2fJSWUVgqhJYmW1ercD763NXbi6HvMkxLuoFL5GsJpoziuqFcQ"
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
