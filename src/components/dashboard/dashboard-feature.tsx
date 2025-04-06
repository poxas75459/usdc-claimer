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
    "4Fxgd1LTJrJJZ6PRuLUfczRt1fi21waatS58ff24GKghFhrg9zhsNAeidBknMzq5HhrypW8bxaQ2YRK7SpAYSN5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixAs1yvkfGBWayTpcq8DhkDTqiNmxPzWKfHEC4eg7EU2vKFFg1CjkxjCY4BFRxLw6tEFPLNgji6Q6WQeRwidPd5",
  "key1": "2XBsHRtUANSTxU99kTbQp1zVj6BJ38rdwbaVMyuaVgRE1bq4cMPUm9XZnDWgU7DSV4nM2WNBMQv9ecQ9Vtmt4PV9",
  "key2": "66s5gNJXZq1R1aYkC4hvenTaQtBgg37YsRdajYs7aRfDxau4kyieb99rx7YxuUWJRQye6WPBNvhKV8XFo76Kx38A",
  "key3": "QFiSa87PaVpFU2t66UvUKNgFRyU2LkxYGsmZttkxUYF2bnQtQRgcLXd2FgH6AMLfBYKDkFbUf5nSeuEGSWXRHsa",
  "key4": "5ecx2cvwmzeMmT7Peb1PR2Wrzf4epPzgniS38rynJKZuaknDiY9uodssVxLvoaduhKgGp572jQegD1kanFJssRnz",
  "key5": "w3292nHkscQpdVWD8AGPJ4JB3DQMHnAw6cAmRcvrkD825BssazgJBigQENR5oHxMmvMXq2BFqzpjomJ7RT1YbsB",
  "key6": "64ZrvNHh1eHFzbWHfA1smcb61FtX48YuDsT9vNuv83JX8LLr2eHFxRfd3x7tcXifkNgR1xiCdKeygFckoPry7dvZ",
  "key7": "4D1F3Std4jMGGRoV6bdVLFwHe5m3CKhPFc7LQkNSAshJ7BGNAP25GhNEFtt7tWo6sFtnqcaaydzQLWRMvScWmtED",
  "key8": "5RJyQgpbC5KtSsKwJrsw5uqeRF6CDhxWP3Ue6t3pmi4gqrdTpUTxiTA9VdFf7HupjGoCGH7SQdR3FZbzWoxmsjZS",
  "key9": "3UxjYiJyStqCG4RriBNKth1taaPQZ4HFd2qzmixn4zbiq7i9XPb3T38FmHYZG3uetnS7Y2rZyk9rcGDYoFs6Haom",
  "key10": "4pGyumGz11TJ3nhk37QNViKC7vM6P6LQ6pwmsj5LvzHEWVF8sA7PUGxCCVsMs9H2nnAkUPwobU9rMcZT8QWPxiUQ",
  "key11": "3M7vgLnrJCu7NEfQCRGKSA4Xv7zP4utk6cvTptf1WViVj9EsWMqvXrCueGsnXP2Jhdxr71eHwcB5qNb7W1RfmrQY",
  "key12": "BSkX6NXssQB3Ev7yHjgh74ihTAPHmRhPbUDL2AERvwGDxpSGyBZ1my7jETV2ySXAKicr2uGedN4gNt32FqhW4TW",
  "key13": "4CRbxyPpVuxCsTBjJroZJvg96k59AYGvndecVTzb1bJeqJZK4YieHvbVMu87c4uoHgraDGmrv8koHVpPpxoxbVAs",
  "key14": "2RGKh1qvrkYmVJuUVarpWD7Dmo5WmKn3Pg7dW9UkpZUgVq1fJgJGAYPb9YKFQK57keARYJNpZxnw5PmDGDRhZvhZ",
  "key15": "2e8pP1PKFNPKu3W3gab3b6PFEYTCuvicG9bNueqrCptRBsM6jfsUv9wJytsKbJMmymXpLqV7i7EvMArbmbu1BbLE",
  "key16": "4DqZ7nYJRub7PKxjtP66Xw7MJRFXEt1MHSpTD65tkNkoWbWVfpsvyu9Fox5vjvDrbYrj9qhNeVV8PonC5oYsPGEY",
  "key17": "3Z3Ea64oPEhdwwAtmSSvyW3UE5o7yy9fDtWduSFRUXD173z2JGdg7JMXuubJc2tcb4Uhuuy6JJpkjB8j4Jb2n8q5",
  "key18": "4RirLEBiBBxDhxmvx2vqB7BCKYiB47G4F5p1zbzKyBwfUwa941L9AnWYwMgcJhvPq2fpPoV2HuVhozbQJkFbZtzf",
  "key19": "3wwzfwcWkSmCyAntcuCdfsEo3gb3YNXZBLuKs4ADQLejqDpttqRskxhUFkw6LT5uXFNihPhLi32cjyca6tj5CFtf",
  "key20": "4tJ8fuiizJXVm1MPpWzwHiwjpgGEcBWjWaU514aNA9RpXFHDE8Mrf1fqt7uXiWUyJVd18MKx8qjzZqdc8fJoSFU6",
  "key21": "AhsTw5tcS9JomMqhFDhaMvnn5vhyTy4VPgqc8u2U9kc256EVw9qTKyDRYQPhTtA94Xh5T7ajmp7TrhJnxF8E68h",
  "key22": "4XJbafHJLo1S7Ubsz72g9qRt7ANxivYAM48q9XirupzU1cx9myE7zowJtV4MKPBzMiPHnFEmSQ2yLCDtfSRderv4",
  "key23": "4jnMA7DHbxaUu7qGd6qbLEH9UVaUoCuG1W8wgsWnzBVYG6mzJzjce8PPk4LoQn38bh7RfTJtL8zpBTHVBqrKGF2b",
  "key24": "3NXR4bvTmihhLdxDRcGshfwjiVjvXp3zfagAr7RmqZvbwg7PFURAdVov51nkSUn8gonqJXFLPDFDDs7CeweSKzZg",
  "key25": "5UMXTCnxpizFwYgfaSmzJqBmbSz32KA1eu66hMmMjp6j8EHB6ooHQRBzQtt8xTFXB2UtbvBaefQtij432iDVmh35",
  "key26": "4dn5wCqBgQWANFFc1qgr5YqvBpk21MrXj4gtDJsvFAGm9YXLie9EXbp121GCiTALL14h1YhW9dT6cyUUUBU65Lqv",
  "key27": "3K4N3gHSLP7x3MRiB7KQCG9Ch6xSAJ9tBDug1CJgZZTTdqbJcBAh59Nsr43TV5xMNxVMupbwfh6tkQ8rXkNmpsGT",
  "key28": "3jo6b83VwemR9Zc6EBfCC7voXVLpx9iJeE9gjapvesmbzHB9CML35abMRC6seQth8Yn7iyVkyZMQ448hc6V6pGRQ",
  "key29": "5U42kGpXiVw9Pm9NQW4dUZNAq321KiWnLHdv7U4gUd8HTbUzovPMLSv4svvVUhQU1f2eFaASxbDRhbyed76nMPxt",
  "key30": "5wkeo38crQZAhXGPk81F4JGKTWi4aswA9avpgsS23jRMxhR2CPCgjSmiEJH4c82uJuQYW65C1DLoenSUCKJW3Y2P",
  "key31": "4U8kR3umjiJMoxiQzdkE4A2uiP37fdGnoEYsFf3nhxTZDR6uiG6DGnvqnN1CRpaCm2mjAeyD64GVzTtGz5QENzRy",
  "key32": "DDbFSrgR99SXs9qcuT3XGL3YgP2qedvWLREeyBrnVCuKgEEv6ZFEngVr59gxBmBKWJnPZULWecnW6DSHGMRALnZ",
  "key33": "5RaV613GgCmxRJvPaQDwn2Z9UXujufL1RbTt6bNknJSSSMCz9EBJHjEADncbrq7PqYqjuCnJcj9hrJUWL5gaxgrr",
  "key34": "56vPkhYpf7v82cSVWR3UjRo4AeLh4uV23tT48Kce1R3WpH49QbiuXuwaa4icPg9RRWF8iXttFDU8gebDDifFLxM9",
  "key35": "4MjF49hWemXcELNu4VapM9RSE4M34AJbWyeoq6gd1n8ZtCnodv8pkmSD22pWDo3LPfYZcsDPRVU3vQTuie73B6q1",
  "key36": "5uHgQeuDqTYBKgJxurKoog2gjXB6RTEdMHESaQoGfMQ5N7dPNJP7HScMyrDUNGUfbPVQdo583zP5YBLhHUR4oGPp",
  "key37": "2TfFMNUrQ1rQwUZm1R2Fi7taYXMEDyc7Pgq9ao2f7D9A52AHLNt9tia5i3wVzfkXYdUd1iXPpS2GRdHo92N86SUQ",
  "key38": "3nteTVndwPZZLHnA7FqC2AxVLaD2FP9yDN6ATM3uX97BWx1Bd8JVCxHfW66m58E6hNbLv67VD6nLtdQMvsaEwHMK",
  "key39": "gSNfaMJEXsgNh28ob3iANXdxTPTfQETsBacyHoMjWvPPwfPnj2SAQNosgEfubbVT7fzGsQFYkBxLwL3i4TpfUdC"
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
