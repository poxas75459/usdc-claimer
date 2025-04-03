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
    "4qjMi9zgFCYyYLhaVnNbKh9cSEZnTFSbidYDr1XLwGKhPnSH9M9rpmBKix7TJbxMAPyynhFMLCDSAwm2fbn5vHUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6wGyPMSyRYpJAneaNSPcPCjmUYtPqaPkmCs8TkqcWndrKJPctSMSaERZncgNMk1fLyBQcTXNeFPQyJXvsKxcnP",
  "key1": "2ARJa6NBefpDoYBtoQdTmr73UM9tzHTkt18Y8kCoVTBG1rUC4tDyxwBz1zrHwRMJFmaCQ5PMbms3GJdEaxVAZrFa",
  "key2": "6iiTcQ2ZjcjKizhZWZch7WUe2yrvj76koJpUv9Km6ttQKDYTwFmdTeYNcUraCLtXbUBjDGeKExBeAECfnmiyc8V",
  "key3": "uvVxhZAh5jiJuqMuFSouDTZQS993LyTYe39yJHfRgg6PpiyhtpHifvoBXVo35LSTh7yF6jeuMMk6jMubwu5ST2v",
  "key4": "5HSV3axLcvYGufKUaWUC9DS3pSby27nhQeLq45ozrBRhxxJF2Wcyv5uorfMpyjKf8UKTsG5UL6mW6WhCJRDLR7iT",
  "key5": "4F1jowQmwJdjkXnE5KXnAqCG3Yf1B4zBEpKjGDREf22d5t5cUaJmJGNxaypLaNR7snsx12Qbm761dgSZHBx9d1s5",
  "key6": "4FLys7Y8hjoyZNneux1e7zqt8Be8rV71t9Fmcjna3wdkpQfJ6LgTGt6hy77kwAMwuh4H9zom3LKc4YYELXDLdjd5",
  "key7": "62HPCqaBYo7qFvcBsLiuP5T19ZuTaKNT1PFgUoPDcFquZ7zukgoypFtUBZFxHMbZhPjm3po95srANxoQLE2PFGq",
  "key8": "5oCbVmZ3kQejBccZkZCSbX7esCkS1C74sFscxYUJfUe7VwMJ18jasWBXwG1UrNhfvwaZRL3qdEdq2tSiqUxujAbR",
  "key9": "3sfDtZep4cD9Rj6Nuzn4wzsYfxK6sHKAagKEgGJCKvjGssGVGVfHauMCDKKEkkrVeELeej8AYHNoPefYq5Z6vmVL",
  "key10": "svs3BnELvCpDWHKXMA9vYFvwMTiS5FxJfvEPu45m7tLHS2Y6hshHV4Hc4qAj4mum1wPiqbQ4sxoioQeqSECh5WV",
  "key11": "2jsNMztXQVNf56X8hQ3qTJmQ1JRrCkLQnaFT7BE3yD7Lc4otge6MhJVH15P33URLvp4USCZna9MVzfJDg1juURzS",
  "key12": "2HP1KLeudYWjiNVZQA7zy2mtaVUqmxu8od3okowPHkSokE4fh3Axjacqie85fP35a6BXrnBTAjqrDbbZy6CSWson",
  "key13": "3JiXBpwbfFaEn8qxgyPRJg58JxMbhsqQQfDfdQV96RRoEDZgU8a2FQTRw6Efgw7EVWFXuyYhgqnVkBSanqxPAsUp",
  "key14": "fzg55rR92BLQdacARzTpqiL14hayhN4UMsdjB32gEEt2nuH64YrFV1QDpGTFa3fqmuKhDV1VZN5QaHDJCjQHxth",
  "key15": "4uU7sh8tjobGcFPtVpYen3FerWT48xtvy4mA99VCiWSrZBSviC5x8EzrHfPT5YEeBJ7mnG4qAD94f1k7VmNURzat",
  "key16": "2TXgUxRpGGdMHsxWRC9uUA8dN8agVUa2YmvkSQHkzfHm1P9ABS9rkqp5JYL5b7v6f48zirDLHb9P3TTp5Gow6T27",
  "key17": "42GHkAqwaUWugxThqNGnyLZAkHvpDJkPtBQxG8TAjUEXtnRHNqQtspGagXsJRvjsDVQcwvHNA28CCo6ddnbEQgF3",
  "key18": "4mfPb3ukwSJN6WEfzgHASao7rajzEbuDnaP1qD3CCEvALuHgw8HvKBYMsBiY237RWj9QUzVtYe725mJT7RekYcbQ",
  "key19": "4mJR67rjhnQo4MnWsAa3bGJUigoiX7eCm8wMYQEu891jpQQGmHBqapKfqpUV9dskSXHyarfVxPAFsHMcDtZbKT86",
  "key20": "WBFoRKSbSgYG567tNwHmQbnz74yLkawTwPTrZMt9TRfMe7tM4HrpJJagttH6zpNLEjRd2WfreW9sdw7hUUZrqXy",
  "key21": "6viTbbVZ5DQ78g9mAyLrLQTJAxQJubL4goBoHpjKtuDN276v26g4L3LMYx4xfUBYfbANcsxDuzrh2BQmmgobcWW",
  "key22": "3qKaQNcNcBVkXqgDp25s7GeuP4iMQQyiUUtLCd49h4Hcbs8Da72EQEZXVCxwkHUUPDAyUoCRPATfvpP5D3A3h1Xp",
  "key23": "2a1ELKLRGf5yeLUfb5oRvf91FKwxedMByj4JcELaZNYf5Ja6ixjZwHELgF6i3XNDrE6J8BargkEd8bczvc3pVboS",
  "key24": "2WwsiRjhPmSbs8mmfWCxsvpoK3CFBfgDTNEwTZLky7V7a3sqX5Z5Cq1JwN9Gy6pMvfSde6cXdmt7cKcCyzDW7Etx",
  "key25": "4DRVMVwSs274EyKfLayLK1ujqhGo42gBFNGdA8daTVQ9PpWhSN4zNR3f7ZkfJ96ediPMjWL3ZyG5KdeTEMKkxBVu",
  "key26": "4YdhpiqBS5ExVQ7ePTinqWTrDRLJAHWfwybkZaLw45MjiSPBcaYA5ygoUXGh1C4RvZWjj8HGHrme4fYkdtAT14iw",
  "key27": "3WduydWQqVd1yQHuQgxyFPyimsB7Y6LnrSocVZCoBQMftDWhjrTU8tY8SGYgByzdWLsRC4SLrVYigCwKoQw2nxty",
  "key28": "3E97LFeKPBMCwYvHH5TY2PUS2jaHRdkAvUD8bfgmBGz8TUCUvPHuC27N2jZpXTggP4hRckekWZp3QprwKsxFafm3",
  "key29": "4kEqbpoSFSCzamvEwEzN1qokgFffhGXaAt1cUP2nSycJAp3jdzymbJDCD1UbnyJKQpsqJ66ER1nqGjbno53SUHXe"
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
