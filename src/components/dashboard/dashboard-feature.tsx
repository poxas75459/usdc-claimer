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
    "3ZuHw3Cnf8rtChw2zPXCjNQsLGKiUpBP7oD2bd3FTQeqpcE1CytJHjsgzNmtu8VQbt9CBtgLGtXvtdHPcMK46Rbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqgHgmHbb54Yaiiz2Y2gpZ5vvLb87cJf9KzD2VoyLgx8EMaFDSeLtpg3eCYzWZbHEGqMi4SvtkJSVyLhiiKpj3t",
  "key1": "eRMEn3FTREGY4rCCKaKjfVQa2vL1iHQixNGHwshUb2nr2iqtUJD286ZNf4qcFyJDTS1c2uvx1HAm12uyheyM1fk",
  "key2": "2rPW6m4uFTsuhin93oYr3JZ7rnp3iTxywDLEQQERnTz3dVckFLTvmKBkXQJ37XTSERyfwjYhet8mzCGeJspMWpPq",
  "key3": "4mfpRm1tudQbDMbzDD3yDzba2yFpBTmyszxD6VyJGbe9yXA5KXc6PNkt4Fq4KAK3X74BAmeyH7jpdZjH2edjtHMS",
  "key4": "2cm45SPPqT8gV1mdbmXxYrqgvmPWnb388bRF1qYe4fhd3o9W5q3YDNp7AAqpP42QENQLzhSaCkXnpsA5EAVHAaJv",
  "key5": "5D7xBngcfULTEcbPW5ipjabiEfKMnFA7URqB2ghupaXWJi1XT4x64zQ6sN6NNm5xT3A96ad1owHbm32YubVi6Epz",
  "key6": "3GaUxeooVMpZAxsnGsMtMyrQHNSJ66ULmn1mUnkPgHKzHbyxko4CdGew9SPjP8bViECkzDLd5QZtBNtBeCiRHmkJ",
  "key7": "2gxrxS7sVoz9osTS9GtZzLAetHNMfmJfCUoMDuqhhyHYjQ3v3DvNJbgUGaQYUdMjAJurw6V3cS6Gay6eqVAq3dfe",
  "key8": "21p4dpCA8W2wAzECoRP2qRCCWh5VBHqQG4PUEH9kUciHs79WK9EteCYuc9GAd5R5UBuP4tkXCrWpFPQvDqULSkQN",
  "key9": "3Q8ZK7tVkHkiyVAkAcyeLcHHh13E59VDq1FTd3ZSpqqVxsEoi3fm21vefvNDuxfkfJHEnz1f2wJUbfnxANRWamtd",
  "key10": "3Zf9oMsbzFhLSQU7LBxWp3rwiXdtivZDyrSm9N7QAHn8KNrnvtDaMMVdGP6oTy5Hmm1tbseNZZWJcxSq7yu3rSxg",
  "key11": "47NkszAncWX43eHSq7NyzyAffjLVMxCq5TQfFBMvUDtwRPXHHyQhPvxsH2tmWFMBiaXPiHNodHzQGM8QkczbVX1",
  "key12": "5gxJsWU3zZoo69J6P7Fm5CXoUb6fFhhLfWiQCoAL2AUvSRVdpVTVJxb5yNHk4Zns7jrXowKh9wa7Hs7ZTSdkwX5b",
  "key13": "3Qnoi7WRn6ZorjgVbXviZZEaotzSM96chrso56ywj8TUTRf1oyj2NmMD9jH377bCCPRVBKriNG7j8LhL7UM3L5iy",
  "key14": "29AoN95dhAM3L3SQ4vqVpdDPQvyH9CHhAuwpyFj2edHzKAaCP8eHM5Fcpz9zKG9ah6vMWwuKWZ2g8ep9pwC4mC7a",
  "key15": "2hKvYQSH1BdjghySGEzKzXpNBNXC2EUp3t1RKRwvNBtZGwgQ3sVxx4FcxdbxC3TW1rKJrZGFWzAa5uUpmLEfQzpm",
  "key16": "3wEhfQsL4w34XaVtLdZmEEuvZmsYSXCY1QgETjD6GDSBnNYq7vsT9mVrGCmvnz1EtBHvKyQy8G5dKfRGfb6Nio8b",
  "key17": "5tzvs3VVoED399wCcKf94bpXxVgnyHRBtdBp1u3n5F5jLsfnT63B3ceabA9j81WvzBXNDJwnQCzW85xQhEDx8RDP",
  "key18": "4egqVm1eXbHhoNyCexuphMmt9UGbU4NGZY8mqFkeJdVQD5jbo8dS8n8sMBXZebjXWPmEWYfwytxHYifPcuFB41Lt",
  "key19": "67HC8zjgUqzNL7iQo1cAmSngMs8Mr4LTyabHPTbW6Mkfbf6rZ9V11AY4QEZCA9ZMam7dkDKjUzqQc1kZoGVDw6Nb",
  "key20": "2WFEd4CEArm4Wd9jbvQTZB2HmNydgPiC9Bhhd19HV2q5fwETM21SftKDTjhj9QsQAK5PpTCoapKwVm5f5BAUZYqA",
  "key21": "3DWcydrvVcEAuqcNz7ZHxxmvQLzLD4airmRGxQv8urohPt6N1HsL4kSZE2Geou64dAZEroEuiaruRuZff9Db8cUX",
  "key22": "53rnvLj2VFBsTzLgDZjSqSWp66hX5wJULvXu5qH1T464paDhJFhsBDbjnFH2B1pTA4F2yGUJGt64wH53iS6wNxcw",
  "key23": "MKng1GYd81NNPbyXaQmHyKDi6eLNyKiQVJrmE8h1o1pBg2dUGBcbyorsvHyxWJHr4SihwBFZgmQWSx5X4ykFj8H",
  "key24": "3cfXTYLSH5rCGiBJtbANQNZDsBFJ6Khm7b9LhM7WRAx9S1ATyQXfiWM6oPK5eSsYbqqfpQUmp7KL6ninDJpt59mm",
  "key25": "PaReDedgdxEuBsHQy9CPk5p9Z3CnHkgbyLweNyU5dSVR3fUSbXncrjsYMShFXP94WeKin4dMajXPEwQjfrbnzuS",
  "key26": "3ZxrvBinifpgTLt2W4fxT5UjLUp1EJCq9gnmcDvuYR7xrU5DFLTbHGcJaLMnjoFz2cmDTXvV7AA3cZdE9SdFNWAR",
  "key27": "4qNw32Jt8pqUaTxAW9kokCHjetijXFu7uUDWTck9tZQyFVfXPXwG9yMFZjdsFSHWUc7AdDCqd9ai2CE74qaPVWjK",
  "key28": "5uN1QpvQ3MRFSzzfmYfK89oyZq8ukEBL82vBedrdk43ppwMQM7HfYtDhgoUAY68vG1rtdh1H8HrcCUHDkp5sq8vs",
  "key29": "hQidPVn1L3U3JHwZAh3PGcKC97KUAa744pbJ74kpkYA8QvyPh3Upyfj3WgrJREUa3cigNHHgkVrTXhAQbmPykzy",
  "key30": "5Q88WyGs6k4vNHvFXWndwbQDkmPk9mPMBPXhLvUfeTmAHEaw9SNizhdtQmeWeiB4CyGjtH2MJ1gYKKCjN6WJKwYy",
  "key31": "2HKgEgdzw3eN8WZEAT59hHUHsYzznSXK4SNJpimAPJtefMNwANBAkZ8HhR56HS6TEE95a9LcJut7FsbiPJ5q5buQ",
  "key32": "3Gv7vrDuYweHPQqdZpEKxuW84PzetRLmYvH7aRd4hRmkQx4wkEPK7HUHsiLoz4sQmYvwS93xupWvEimgEuewSrN9",
  "key33": "2j5QdPpD7VdSPPU4hw2WAcatJkTpLBKKqRMqXuxVu4VMCKE89oPa48df23tpTHrjJZG8cvjMZvhD5ydkGhW7p18k",
  "key34": "66rUHE7pi1sgY1sZtnwwUVsbzDhKYkvAckoCmPgsF3jneiNTEKtc75qiXLvKd3skgYxZy5fLicmQ3uJMu9SCMZb4",
  "key35": "4xjnMHUijJpyfxqzDzavFrAZfq4qeebkNFvRk4g8RZUZs54ai51wCryGm4ni1HGi755LQaGe7jJ7XjnwWyNYGjA",
  "key36": "CBWrhdh4fjNNZkMkK174neS2ZGbR6RQayXb4oG12po7Zx6RqZWPJ8WkH2tLGNrXJBaJ83CsJ9P5RJ6KXMWTWSf2",
  "key37": "35nd9pC7DohQw1xSVD6MfCSb9ZuL5akHGNHD3GZan4BTbpjVgyHPUMLFX7at3inQfKvh2Hm3SGq9UWiQZ4y32u9u",
  "key38": "3mQk9wTUm7WfQNdVmgKdtfS6Viqb3ziiBBum1u5XDxQk1SWHqBn8MsXgCPvbmAJhYogWE4ju31vnXLhGopU4jeJi",
  "key39": "5ezFndjpoh258FE6HQFWTCKsNLm7EdSLqnVFCYRUDKWUPe2b8vzFGdxqnTtP54kfBybg2u7faq1GZ4GWfPB4Df1h"
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
