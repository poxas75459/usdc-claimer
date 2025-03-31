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
    "21rEQy9rUccigCsRQ7yUeDvNbhvq29Ea1iKVwUpSg9aYPSJERAyXQEP4EUWZxUmsi6BmFwNm79PjcR4bpJeQcssU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vcRH54EEFSJuXaHMLFz2o5Up8LLmpbrPzf3qgkuYVajLVmRToykRSHku3gXNrKz4udC1M6XE7jC3PpjLxJKUz7R",
  "key1": "2xHk3gkpuxT9jJpHiu12UrWmTBaLBckZ7R6RaCSsSUP6xgA8xy4vdH5ddACJjuuqwxWYxjRCN2wS3efrTDA14wM2",
  "key2": "5ry5G1HmzZPrdDQCmZvVVtN6VBzrhEsrjkrdHZZvWvb7BxhoKsWiZcD5XQkJGzBofmfyKUUi1GtZUEfqUCsLsZpX",
  "key3": "3BsG6WBoCF5JCDtAvS5ZMPZEouEvYbK2H9NS83zB52hdUqynVGqB59Aqco7CAgi7D3Gh15E3XneDaFANjpmYZYCc",
  "key4": "2UoHVaq2jBWnZi8ANsT3HYsNeQtTM9NDE6s1cvWTcSkmMamta7SzLYjVRMDDEm932U8cveov13mGJjaeQ5edsuFY",
  "key5": "6xBzmmXin74Yo7bfkb5hGeR3kMtCsSNTMDhueedQa2nk1gEpMGDFPnLoKAUyyoyqAKiCJuxzZKsYa2kBsCuA1ts",
  "key6": "eX3aWwX1sRoK9S4MjgJ1pWS5QCEavCz5XDAQ54cvycisvkW8HMxQ4PLQsk8JUWU9QW7cEPw2ZU7SNWGoHm32Wss",
  "key7": "3ZsUfYv73CtN77XQ4VBkro7hVX5ZDCEDFktBC164pvY2D9NyiCtCFpcKEetsUg2iKWvN1j1zQP8n9AjaEXU7kmKB",
  "key8": "3WET2cYHrJPMhnUKoRBsNqYmC3b7p1yAbqGgbU28VVZnFpnYWZmnGbvrAGWB9s9EZUvscuVFdJ1HPkr1Kzr5WWMM",
  "key9": "3tqPaEFMg5qVTtkPssfiYUaqgx5jykwXnBJ4TrpZnZrwMpuMxJ8YLqFAtktmhP8BXnchuEmvJpv5tkiEM8osdxzm",
  "key10": "2WDi1xynNCa5SHCWvBmmfZpd5tXYopeyVe9TMBHYXNKfYLZ5Vybvz45ZfQB1ouQoPHLwTGRqse8PNcUqyWD2kpzg",
  "key11": "3uFMyu9zDJeFk7P749j2fZinKy3Fx9tawZhJbuc9t145V5pNG2hQBY6Qg6ZeYMW6G3FqYmxp9CD95tNNcyErc3Ux",
  "key12": "3czessi4zAdmFa1ZEJVGZ8quo8TbXkaazehtLoyC3vTeKc8PaET7KyB7o2GTghE8541GmUm23WTQTWHBDPQEm18s",
  "key13": "3FcraB8SMXrySDw2fXgRwV4BmBbXPPgzfAn9Zt6pe6viHX72sXBBTxGYMy3a4nRfubFNnMcDfCqWSgEMimeGtRhb",
  "key14": "3YhZPZKjCij71cw3zv9UAafNfVCFHmJMcnocGdAzoRWjSLyn1SNgwtqu4Twjt6KxjBRbZRi8pLqMej5193H3WGnA",
  "key15": "5WLMGrNuC15rnUJHZwCWjsaKav73nkvwyRZp4FCtHkHkC4SXQp1aqkVjA5dGZnvVcKaD9yhBwjicUkHw8sbQipQw",
  "key16": "2DiPZRm3aaCpgDKZUCxd4VL7LqXhSxcov46PTRoBKTR33xWRqqa9Wj7zVLM7zLizHkWJ7LSQ7D1r33pTXgPKxYVL",
  "key17": "4UptzLiV6idpEbwdXmaNFFyMaRMJhRxJCpWPvwfwrNmTF4Z4ihLEPspuXbrAmSJeXB6Y6avocdzKLrHdMsiuRrr8",
  "key18": "4pLf32Wd3GcMf13sPSZq4CY1tQrUsRzRC9QBB8oYjYBweFHUnqHPZFHBKQK2oDQeshvhsRnjxkV4zBUwNWCMuM4r",
  "key19": "4wxxZARFj8PLFk1ZNxAbdz7xtkbeVPfvzojDHSfvhJYVXT5vyQ9n2DY6Rs6PUXyRmdKs2EjcxW8JEdbqtPgBYM15",
  "key20": "4YyYWMwTeUuVaxpjWeMwG7QNyL5ikphmKUkSeV3VfByvG8S2Bg8i2g1bxtQB11q5rUXjaYwPAfXu6UK6PEFdWhfW",
  "key21": "5AKthvL4c4bCoj4xQhovTACz4dt5pnWBnq8V1Mnz8YQJcySN6wEHgiWA733gH9SLvXKxWMsP4bmdWuAjCK4C8vLm",
  "key22": "2zaUZPzYZEPGPk3YE65AeHSvUTLZpdKNrzN1omMFF3sJ66dq3Cjd4EubRbXgf6qDaUHjfDQWSgqUN27s4kqGwKZJ",
  "key23": "3GDChLLe4XUEjwqdjVPpU1iR5pmQYLt4mekEQAngUMUBPrdzDSAUmGqV2qP94UGadPqiQbrYeiCA6ycD4xdeGYF4",
  "key24": "4pCKQYxJczuEo8YJVwqAn195GcZUBH8tUJQruKKZrKnnby3W9WE3CWpv7wb9xRgrqsMu1ARFFHpr52vW9Are6vDw",
  "key25": "3hNaM9CcLEwxLATgvQzrVNo8zgr2tYDXEXnhtAmoKWE2xrCrhYCYMuCfoVbt1MjPD6VL5LZi7kz84DMrc4a12c2G",
  "key26": "64z9rQD5TrHrMymAGi5ZH8qbUDeLsg6wyLjLejKK9sHPLg4rVMBUntisijTpb7bSRqdESNWFcrgpA7FAztRL5mzg",
  "key27": "4rEWsyXyUCSZzrD1CfyKUmwPYaiskLt5dvkadw2jh6E1xhmpEQTscSXbdWK8Pwaay4ryejPYMm17sYn2vMtPHGxJ",
  "key28": "ircScWLbvPTnG6jPRN8hRkgWiiWiBzXpMFfTCGy3w4XmZ2Nj6kn8EyBruucErbcuQgUwGz2fFky2gEFbooKxGrc",
  "key29": "61ptq93apxm5dsz312c5UKqY4HsSq8zufEPq9eyMbULJBJwyC3cE8X9n4UL8rp2L2Ksk5sd7ZiWViFAQTLTnrdTS",
  "key30": "V6LBDxZBiaEm3jrapVgda8jntSPUNfQ5Yqrk2TeEhLkhqyXE6uuPpdr2jjEPiJCtDrfgonkC5hCSW191iSwFuPk",
  "key31": "58daXoPAhrrS1QfJgCnJ7EjLHH5eNJgqZ4K2QcoiB4AXQ9YkZoiUaSJhPga7pMs6RNoBLJKUFJYz1RiRFZL9QXhj",
  "key32": "2FxvgXRyNb59y61edwEhzB7sKSaJapCudgozhNTNhxPx4Y2njibKJdFUEUPX7seSVNSgrMbtjv7c4ajsdrZPc2yL",
  "key33": "4wR2mzW1Fb8kPmNZj9Y66AVDXRUwjN1B1mUHaa1yZRjjWCEX2qTs4ohQYY3LfjUuYsobr8druBwRdPthhtT88HWk",
  "key34": "5183hV7GqMVt6mUH85FNgXn4RBtTuYNnuxkDNmwnpCXCVz5hiMMzeazMGkSMoQ1e8Q3sFPeLcx9DXNvmQHUtxi3Y",
  "key35": "26ZPVqr22Exv9XezY7VzafwaeHqpbVvBugDkKEAUdfd4YrkhsWjYAox3c7cnYbMHXfztAcTbhCPdVxeBJRsK3zSH",
  "key36": "4jdbJhFtiEkw25RQGrqWPZwrYniCkK26ZUqhvdHqDfiPwbqfY2v1HmVVDDNjK2dExbvfbKFV8tyyTA8dxVzfrvnd",
  "key37": "36cBwHBF4CFL1jR3DTRcHh5LDurP8cmpquW1hWvu9eft87sorrXWaQFZkpR5GphyAaGDuWLzvt94PPEGHRWgsnnD"
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
