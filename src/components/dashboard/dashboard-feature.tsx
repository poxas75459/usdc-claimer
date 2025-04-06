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
    "2SbbrGac3wb6r4YdnghVfs3z1ZKTv87eTdzZ51SwuXAKZmmjruRCfpLAPyb2kgGpQ5oKe51eQhUXz3bBWAK1SfwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612oG6C6DQmFQpdPWv2fm7sEtDL1NLWrNJWnKp6guEcUT3Gez1eNcBcYcDY1hLNQiccFgyuXtYMRtqnD9NHN6eCE",
  "key1": "4uoMXeTwJbxmgMm1tsjcA4L2MV7GY7xdrAnjJoTJ9SMzAEp4wUxRAGWvmBdcGxBhBGv7TfHLxgE5xWBREJhCHHxN",
  "key2": "4BvYY7jVMeUUuZtKWi4bgi4M5JR1EnTspWueFXJyri3sjPUcyLXNp2AzPKZUkW5DpDcmwgAUdDRunUfp9BUMFsL8",
  "key3": "4XFAEKQz39WcauXYeXyhG32wQkANsMkebDzr4eoZRUFQEc4QMvT1TdKW55cNxiCxiKEU64LbX7mYfEXTFShUJUrA",
  "key4": "E7xMoEK6GXJbqY7abLgs8tWDYPskN34YpPPFo1j6zKccvuemdELHvyPTMKZDg7oQ4jW2iAbQm1Fqegvchp7XWWy",
  "key5": "4eT7EqVFcKL2e4S4YReFk9yuD99MgkzGE4YaPR4UdJUHSfFw3c6NQaQGz2hwNotYHDrgjWJ262z3bE15fawtzwNV",
  "key6": "5akfdmYd1HxPQWANtpTz9uNjUTm2B6JbvL4f7Vk9VDx55SME4NNCMKH6GqXw14bWJ3Vya1fgaN7ikzrHdoRMBNpe",
  "key7": "9D9FnpfBYWUJjpkLtHGF5NptSQjvLaEaAzy1uq8BsnxwQcVviDmpkaEchZjiqcBCz14wkSXaApboSvk1wcUtu1k",
  "key8": "qrjbAbAcMWL5SK7xcz9s49ZMbp6DBmzpkXVF1Q4xp5bKFa2qZJDdZg9UPyuG7gB15aTmMJiaMS4tFdrcaWNwruH",
  "key9": "4P1rKDSP1mSnh4RZPy2d8i6BBP3dv9mGgmQmrUkcYxvHGiqsEPiqYtbPTnjfhBgdy2rcctsqkt7xKynM9n7ZTf8g",
  "key10": "Qsw2kHsYdrLtChRuKMquZf7yPLqBkhNtQiz9yreWryvMcSUCf6zHpV7Ndf2LqVzZQ5KzTHUHBxyzdgPydGRo5Sb",
  "key11": "4EwK1yD4rQbnibSQdbJKsZkvdFF8MTnLT4ifoToqb1A7MSsGLXgJXGteJ2XBPHh4yiQsXERGG2fMg6Mj8yXCF91U",
  "key12": "3e742uHG3DDPvGg2BV3kPSVBS14AH7vydZneBDMRyDT4a432FigteNVgw1wLF7Z4NpbiRU6fw32ztEj3sfYJNk1u",
  "key13": "4EZPjvHaHF9nQojv1AtZYeZRpavFd4PtJHTH6bmMg42CcrXnX8qx2kVz6ejF1n4upirm9BkP57DeXA6LzcYt2Fny",
  "key14": "5XkRJrb5gLojUeDy2CwoohMoYdKYs1AUaQhfEPqjHRR5GGyAJ5HY5g8nu8H1bWT7BK87evjYNRanJtxNegxPuShE",
  "key15": "5Abf2GyU4ZHzQKsCeT1Y4BCYBTYpFbzZiXZZFLZR3Y5XeRsnw4PJqxgUpmq6oaHhdbfHpNWizuEiyvWLciYUpRPz",
  "key16": "39U6W3wvv3Lqxx4L8R92VsSZHAjWjAhnCts1cTeBGmgJEL2iQE2DvHi97umETtpzGVBkGrtPG8d5mXraBqaQkjkc",
  "key17": "125cGst6dVxNT5JZVsUyvyDi6vNNuurEAvA5GxtqCM7KsZvfWAnWqa6o3avMMwbW1saHkGctnSf53PJJcVMwJ4Sm",
  "key18": "5ZeuMMnaWQB6YEZnTS5MvkmcLeECFzAa7gBSvY1hkwwvza4n8qaLC5cRo4bFu6M2afhVdpUWgMjDL6FBTuCscPLc",
  "key19": "4nBykYemCnrMBqddNPqt9HcJuxSwoVBP854bLi2YLhFnVZ1bfehCTzQ2Uqk523sJsmoLaiYVStNTSMoYKHZydoHN",
  "key20": "2wLL1YzTonf3mKXJyHjHe7tRxVfuYwU3ttmWQgqyDd4JxUPKWP2JVMmGWHBLb8XhGt9ZazQ7rFSj956CW1TgPWnU",
  "key21": "4adwkTu7HhcsHENGwXuNXAuAngaKX6aF3mP1GtQUqchmUXFurV7sKkHjpQSx7qNSyQweDofqpSmaSxG2U6rg72wG",
  "key22": "5NNUD8JmWGLmiNVUS3vBbRjK2zPWkyZXKsUSaaGzsdRbxbALndWzdsU9VRAWNmVib6UmCANZKP4xXXmyeVQ6fAad",
  "key23": "p8xJxwQXaJ9RyMYYKmZTW3sswn2fQwRnR5DYFCiuqNYRNKrsuBnXTVcVK4c8YTCmj5nNq7uypYrrNzWj6YbqFmg",
  "key24": "2jCWjGZY48vWckndJkLTLK2V7dqKPt1rNwfSVncDgYfQUxDCJ6JX1QurtkWxtptFtebYQr95NfsCGNL8hTjRNWoh",
  "key25": "2h7PLSCeqziafyHhjSa6vGLW1bpWeRKwB8oAJEwGdu3HBg3EvFt4CrLujSf6KMVYNMRkWqNkN9cZnEsshY3jVZuY",
  "key26": "4DR1GAcoVhfBgPvFECj4V7ESyZT5HumuBUxNWT7N33VkiWAjKVJCpotaLX6BeXhVnM6AM9z9vYpvb5sSoir7ZBQM",
  "key27": "2kbU7qAKLJKwXoDaZvmFztPQs2rAwvJittZBe7wfiS83LXRC97oU3YSR2PG7aoxWWDHBLceo3k42E1md4V3XJ2Pg",
  "key28": "TLASBuusLGZwDpk1KLzqDfyhXLjqG5YwBh2uJWV1tkG1FvTX6nax9wi7GjZCPC1DSK9pvqGMSdk67qN2v4gsB5k",
  "key29": "DauYd8pLRBLWzEwQ9YQwHVfWmAhXdCn8JVcwcrL8Ldie7b5FPYXX1Ljk1sGvRm3De3cWezrTVH4BB9bZCMn4C74",
  "key30": "53WYeMa27XzxczuoEEtKSjicN5vBi6jYVw7ykzWRjcQdoMJRdu93CkAj9qtR8axgsquiwvNLqPJXnd81Kxf54Ncq",
  "key31": "4wpn1rKsi9PrXe5X2t9LNWxHbAwEFapTrpvszVUtmXHNHkhL1oruTun7Tr1ZwwotNkRenfuEEYsdD3cMr7gAXk7L",
  "key32": "pQAefJX836BNdU2J9M7KLLD4L6BmSJfLfWmtqcWWybfbnybRYBHKbzy49gs9aUKrDFHaxqzbfLamwUB46aUEi7N",
  "key33": "AcTTjzL5fwPevwqqVWVriAahGLkrbj5wTwosbgcA8vNWVGvNNuLUE92bZM3hLwNGxxWJ2iDZWg2dSNzRNTKviKj",
  "key34": "2b8pPMQeCYadAbfwdX7YcmXNNxDFQEWduqVGUeGLumUoNXXJVE8J9KK6q3LFSmgEnvERqtkoNznY8j3tH1H4X9mz",
  "key35": "2K9FsjJ5HaJ4GDbsCTtK1o9GvoKih59Gzam4A4ciWHbtFfmXtfHnjnmVb1kDdaFmHq1t3xxcT556ruckcpKzZq1Z",
  "key36": "YMZyCHPHirL5itHg2qEXVmGusmSo38wbLTWyVY5Hokb2KD2WwEvdMNp4wU213sfu68339uc1HZrHo56MxLC8JfR",
  "key37": "3Ns2KTgsFQaeNiDbBHiWHyuhrXNhRNXaA5XB8uuLe26uqfcum7HAAraFSH2TdtUy8be1vASu1dBiYq6yeaJtwPBc",
  "key38": "5ufCgsSgHEYuj47HtCDJWNiz2ovQD38Xov4zy72Ln4q2x6Mud1LNhVK4A4m3sdaGpbzJnBLnWQECjw52fdgkCJEF",
  "key39": "Rs8YsFDDnCfSMYLSfaoPeo7wsXd7wekDVXe8ArZoF7y2Yeob7CBGbuNFBeYc2mZBxh4Ybtx1VUf5R78rxFBNDoY",
  "key40": "4dykWkpDQkajh1CYVV6adbwWE5hTtZX4dtkyzZNcjbKYd35LGw2m3qGqBvQKMjUhDW9MUUauQYL1ztbCKhd7GPDX",
  "key41": "2avwhttFbLzHMNPcPoA339L9id1AiYueMVXZNE9Th4KXwuGfKvKWLDQEWnARAUwVpSvXho3qSihitDzUC7MicTtG",
  "key42": "4W6WFUTmopJKTDdshMHcRcS46jvNobBDCxzQ9sowcmJxNYRGJ8ufgdd2exacD7n8qFKP1qbCWYPnWscW2MDkUDdw"
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
