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
    "5EW9eXoev79N2CGk3gtE7QcTERUJef814pkL8mY9AsmtpU7PKh3DG29wmbDjswogehGXT4iNN29RSgbiMZGqedMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q34j5gJ2Ni6NZy341n1P5pHnAcrgY8ouCeFx6ZQpye9L4EvQnSC7edb3TCe3pNBBtM9vjUAWWr2UtzzHZ3kyZC9",
  "key1": "5HqmtXuQ64kbgjDUW1crjwEeGwKgZNZdYDy4qqWus8RoqUSp2L2Xya9muJR8wGkHoRwUcwB6g49vwbJKMBuWtawC",
  "key2": "2bM4TwP3C4tEncgZK4E5KcjirEMK8ji4qZwLkuQSNxAPtMSNWJ6NN6fhoGGFPzPpbdXcxjFet1rhDmfPzkYcVMcG",
  "key3": "5k8JFSeDQ9UWfRMq8aVQpxEi2Evjf9wxXJHiZxiZHSATKfz3E2EngDHMLNvRBNSgD4YdFHamz8ZrHYbJfvbYUyo9",
  "key4": "2PBE1Dd1qrwT8Qxr3qhEcXAhEMc7mGCi2XyNdXHvkysujpaN5du4nEvKVbzUMsC4E2BcCX1W5NHw1QzaER5mnhT4",
  "key5": "B7roqZRY4RJB89Mdd4pS81itsZA8yTJV1SFD1h4s5bjBy3bNU2dkemfT6mVEtnzWjQZQKz8BZkfLYasYN7AkRVX",
  "key6": "65oPGFSV64K87P9FtwFKR5XUPDzW36RPj8Te5dZZcW4nnm4ujgxSeQ2jBRzwscbC4NyTqCK4VytNyfHRwKE1SiaP",
  "key7": "2Wee2iHQMrdfj9sQdWssPJYqzGFqFyGptECQs7EEKxDQxJDs7fU5vXsQKBJ3MoWcgpYEzHGCQzWa4A5UcNFGfR4j",
  "key8": "4jkvQXyDGqAdBSE2TUTyXJGCA8hkGz6NDUFAjszoeBza7JwGYqTxK7Mw3eviPjNEhJ4XoMUKfbFZ8c1Wuz8PtCsP",
  "key9": "4LfaU3PY1fpF4zgJfqQBxGy7H44T2gRpMyAajg2S6Gm2k1vbzrwbZpSfTnXcdmpERXv9unFug6kwg3DDwN8nWc5g",
  "key10": "2MisLSivHQHTZDpZzL8WQ76hi9s5mhrvq7C7XLTuN4jddcV8hNUsCzKvvbpu85rXFCbNfnoFAvCMBneV85VLfbs5",
  "key11": "3kCDzEtkf5QNBTaPjiA1GMhiZRY9mhUUxeEpRCvqErwB3Uqnf5J1madG7VucLtMsUefWcEopP822jkiBvwM7MysF",
  "key12": "4zujZkZ69icXrEgTaYA19KUStvZazSqzxr8cb853j1ZqpNCc4uqssF11AyHYfjSHgoBD4aQm76z2Cc5GUF69duT6",
  "key13": "3mJXjNTqau3e9a77zxHWFDcDwNehq8t4dc6Wq9XGadiV1Bycm9udNKHUox779eFm71Lyeyht5DAvDcwiwaM2cY4z",
  "key14": "5MvXamUHFGX7vLWnSwzN1XEPepC2y4av2JsQUEpCZN6G7rGMadUPmLtSBJ319AQkcZcbotpUW13usnPr4AHmNvWm",
  "key15": "mUuYUsSHRpnAxf8KMgEXTZ3WYXhn7AdmaDWQaPDqHKJvyV8prHcbVMQo9fqTsZbZZnKtvFTQN8ic3BVoLGgxx9r",
  "key16": "2dwBhJzuyhXiaoAJ7dfnTCW1hx4YeKfV8gp1Rf6AyMuwMwh7HFeaMumG6bScbnpTo29K3fJu9BqUzi8GDtW26zZS",
  "key17": "676pmqiLY1nmbiR4cNNsSkNoaDtRExAzVqLk1UZEWKCpoN5ftCR5tBEx5xzpo66MQA1C2ASQP9PBzRpF2wTN5Vdp",
  "key18": "wHVh8LwpnADE7fxdMLWmZdd69jhbbBev3TM2JtoMikpxvbJvs6a52oFviCrRDd2C8tYw1fgBGt7HU8rxeoPgPhz",
  "key19": "45AAxrbHTrFApkHHmeT7cPiZYRw3cqiodiZFnjqjsKf81C5xGjK85gYLgGaFhkcEVJo11scs3UQMzsiydU6L31Si",
  "key20": "dpK2qRREJskPM8FGR9DFw6jTe9tXbLVfC4yKu6kVgTTHXwxTckp3KFykeF2cAayfHzLps53JDeJ3BV12mp4Hz1F",
  "key21": "2gpyucMa5XzmZ64VWqv5DHLG1ATcDVtmHsLS5cEn19i9yoZ14EgHpYKzuMCB32Ab11uj2gR5cQHBe6gJgr9VngVp",
  "key22": "3g5BLNHGaUxA27GnqxLiS6dP1hfRbnrWUnfq9jZMPgdaVGA9hX6ufJUsXrk94PMbLPZSBg6G1BcSMsuP5wp6cV5K",
  "key23": "4zc99Zf2XUym6aoMaArHRoAt1yW9G7PMtwoF4Nj6hejdSn33xX3UWoxkLZZM7SzBRUZbBqFp3KKhCUpW25qyCBkX",
  "key24": "dKksuL2KtCEs3EgKArHZ4et4PnFDGxxFcHCRXhQ2GxaHLf6eHDYoocjByYREvaa3qFrAQx46FqsG3qALZ2f9pKk",
  "key25": "52yuqNVDNcRH8azomcwT4P3BEKPhnYSiiR3mym9MDq9tSBwkFsJw72ZtCdF9eHBftYA8idtvaFNd8LDioJpAw7LR",
  "key26": "36ZtajPa1fqJiVcNhtTp7qYYSJj211Ys3uU5EFqULohMNEALm6gseKrnjoMn5bmS28Q4LAdrcEgaqesYQ5QBMWm",
  "key27": "5FDQccq1mR9YAv1pssuiYhZ2asEbWmTuH1D77sNNntjbC7VCAms9KCWBAcAxMwrGatLG6S6jxeyqNo5D4mNjCJum",
  "key28": "2SURNTyo4covctHHK7hzvM2Bo5ZCHtmnQFQTB3zqAySPm99bfmYpB8Amr9pXJWjDwSTvwbYiL6ezSzd1jfwNqDfo",
  "key29": "eFASjYZbc2iJgVa227yvpHQtQdTrnLrrcPRU96xXU1jZGemENbUTWF4PRWEUk8E4W1Etfxyhid6L2Z4pGyKPoXi",
  "key30": "5Pc9YQwHjEmRBoyaazzBoPRe7u1Gd9iSLetGSAZvTBvLWYGcLEVvyBFVdH98w5qKu8m7K79sW1KLzSZ8JUgzDDf9",
  "key31": "4ECw8TaCgMJCkEQyBZkG1UnpaMLgY26PH5Bki4MHPD1LNnF77TE5eFJbyg5pCHqZcVV7G3DchTXmLZGkVxTfaRkq",
  "key32": "4EhK1TBX5NYgZ6tRczH8ACSUsf1XNt9YpgNgVRDwC7FRPP2tPcwmBasyG8X7KH9eHnXwCQh15BGUhkpSTtk8b13K",
  "key33": "4xYihHaaNg2wyvQX2ATmcA2nAHU8BSUGZbh5goFzUfoX568bqd859MUgpGvS39xjwA1UNcHxVUBEbFx4cpTe86tB",
  "key34": "62iu2f1BL6weEej4fSUAcGLQg1HrMxZvwt7UgkZR6FzfkdJRWJjcG3ARmkxWT91ncaNsXqctuBCgGYeZFJoDcPzB",
  "key35": "8jM3LLcGPrXbiAgdaiisQLkB7uLmrUEYEWZZo62jUyRdhRF3s6put2CSWXn3bGZxwrGujcyatYPLfCdqzyyLN7z"
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
