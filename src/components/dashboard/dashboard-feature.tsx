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
    "UY61t59HDvZ8BNuCYEV5mSZ4GZSBxGuimr4KuqZRCoiuMBZNBNWriJAhkdKariHsgFZWU126i9uEuk9qak6rxiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBrSdkzsFp2Nk54Ys1ScPX2v9fAqugYrGUEuBHFT5M9KgxGShuJNmYBRa1x5dYVtBzeovqmEACCUywtjEJofMMZ",
  "key1": "4pH1D6tckzxFWTWFsjWfFqg3cW7VTHKpGJCVSP8pCue22mMyDuGgtbsRXgR54F3iZhv9jE5GH6zJyjZeU3RgTsQv",
  "key2": "2eCVZPPtRXEewDjXNu1qnaQW6jbVHBgPNpWWFfMoEtobaZY3qJBWicyA4Y6VVrtorcv4qeBvmpPTjZvYkL2ykprP",
  "key3": "Dm35bQhuGnTeeFCJmnuv1EiHwaBaT4sJzQ64kYrr9vHdJQWPp3beoNAriaoPJVruZ7qZ1JQxyoqSmN1khhGm4kL",
  "key4": "3Y1zf1eUVcXUe82bbwQjW7v2YtR9jVkuV7TWpssaChyLFfWrADR7Zh5YMTGXozh2FCr1GYXR95rAQWWpMSJcUgh2",
  "key5": "4GX8nPW4GoEEchE1tR4HPJUfid3FHyAuPcyBCsHCZ8Y7KfXZfs2DM7n49pJ4CNK7j7n6b4wP73rNijqXHuuNBWpW",
  "key6": "Ts5XnF7Y5DDTGsZJzjedV1jDrQXwMoBaBxvW76mQEDzMTxgJeNbcUpEngs32wzUXvDYcQU9VqsDtKEZ8dZM1UoL",
  "key7": "5UYZ4MsTvCqYcMfG91XohVn2BAQfGKR5EaxUZXZjVe8KvngpfwXvTHuvaeGKLdJjSCZNkjUEQxWpBfMFGgRuSBSF",
  "key8": "3YVzCTGBneP35LHdAmtiQDZX4aG5emAWbF8yWTNQCU79xHEDC4x9WuD7eMh5XbfaArQr2FwhnFvheCKMiskw9vhQ",
  "key9": "3SMgufKFXa7nc3DJNFQKr9NpWSWgYs7qv5J9pNhX3xfVwe24WZATr5sPjjP8gXsQU4CZjBqexm9ycy2nnXE494Gp",
  "key10": "xXUZ5Z7okrbGpFCVuwoiJ6bLiRUzvsaj2ZdKJruWwvJrdwgZRNzJq5vTEY1pJhHvSwL47ncRAia4bXjeV8cpz8C",
  "key11": "2kM18U4Bgr4LpBXAYiKTpZXGLt7UUmZzu6jBP3rGsTSqmY2VGjQGpbu7gfNyDur4dFb2zPLT8p5zuCCNk9n4FQ8w",
  "key12": "53G33Lnwp5i52ow8SfXpmHkESo4oH9WNE4411Wfzee99RHfred3H5mkpdno19YZGHwTmbnNL5KXQnSvuyCKM3Euy",
  "key13": "2YC4yumPxz9E4MTrox8uBgW4z2h7oEvS8waGSdrMvtxwU5eQqRUxmPDF3R3HYbCUwbc3sUTGw1Mg385tt8qeD193",
  "key14": "5yvdqkc5zdu9uBczF197BDWP9pUceob55SvZt76wbaES3a5WdGkTJGuiMbE1ynGfbFvhJsXDNY52wSaSH6j813qK",
  "key15": "3x3XiLPr5NKZeMo7KF2h7gFiUbKLY7pwXvy1n2UDYmCvpvGRzVakMP9BszpmYo84CvrMUWQdg6CrPKEaEHay1aov",
  "key16": "VtSdaNkL1MXL3Hw1U4EwfwNRWRARtsDRbx16mbks1hsxRDa9XXTHe1KNSxfbKZe4fUR4fBCRgvbHF9RuU5aBuhx",
  "key17": "4hYGZq7vCd7XD7TPU5s2nsuF7UWE22rpC8zrProMjTSXBLvFKiYK4SbbYDnMxmfU9mk64EEBKNsUMHepEwMCiJfs",
  "key18": "AJwBBabXYKNJidxRcPtzY4DJtPUACQxLSZZ1QcM3f3ZCBvwF4KZXpDx5VxvPj9H7SaWq5q5n3nrpkjc9oLqWcij",
  "key19": "3Wmx9FbPozkLs7KVz4uHhvqsr7fE2k5CtSP7rZxFXmpyL8beurommvNWz1Qj5zPL9oh5mZUmHBaAUkrVQtY9Wqh7",
  "key20": "3XNALwjVGodmaTfcRhD71vhCUjA6bZ23iM38NyQMcMfwYZuBXVRCPUWr5fZsXw9n4DKoCD5pmR111kJ33dwtK2HR",
  "key21": "5yhQm9XBwyLJnZjjqFiAuSMQp2ypfnXAVTuzFw7YvZUshdiJNXfzshN77TLEnPBCcptqDRBLS1XZXW6bxRwbQWef",
  "key22": "643DZzwLbuQ5s6wXCAnEZ14GtMgqQMS8TocTc23XxfEr4DwvVTinC9TNURqcQtSuJpmvm9LGrcoUwDiuQdqXCLPu",
  "key23": "4j832e4fwxhChJMMRTZzxHUq8ALpf7L6kDLhdT5sVaLraQPebC8jB4yuojKHRD9ZGrYNgVRyRhwaXDndVvKDXUKW",
  "key24": "3EMRT8g38dDJfLPjrZAuZ6tdwqftHa4uJAtD9EXGVnxA5vno7HzWZgctVxfQd9pFnUYSK7P4bwyWkzLkuPdkdyxD",
  "key25": "2GaYWh6GvPUWhkX4ZZr9axuR2mngxd72di7pX8juDDKvroU91Sa1GZvhdqMkT9yMd52HZ48zrNa6Ty46FMJnGqGN",
  "key26": "65rt9TAKNiHkbEnuCQ5knTFx4NmVQAPyAzsig3nkwhpZrG89EH7jtCnK8mAsATP3fGJfCEDT8XXUbgn1pZogDZX4",
  "key27": "47YgMaAoEQz3fUAxYT8hPzkH7JgifyLxTAUnsWgLU7vzNQxHfXzgAwDyfDGnHnPPA2TDFy62AhWuaAdFZ8HPFjVL",
  "key28": "3AF5mgMSd36xkjtgZEytyujR7zBeK6Vubz7JTNH3UBhdDj6npFXGg2Zhab1bzbHR98uup1ZWHYW9wpKJSuqGhxvf"
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
