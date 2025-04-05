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
    "3LP81b9mtjX9vsZ7HSiFUVC9ToYU817CMpp3Y7jQ7ESMFf4ScE5748UCfj7wVDxCk7KyMKT2dkdvmTz99Zd92qhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QryF5jzMAeNc7V5h5yuLWpxzda5E5wm9TKapcUKYMuRUkrXpJiREMDGihN1XptYzHxbnbqa1rfX2Vr2XfqEFZ1U",
  "key1": "JTi5Uu849GXXYyk3VmMMSRiyZ7hpXUQb9ZVVPXkefqq5qPKqFVCpzrNuszKYQuGAgf4AvPLRrTQ39GfrqtJNBuK",
  "key2": "5zZLD9WZszSwH1tsfU9EVPLCYRo9N29BHarCNL9dkmq1QW1ZAzpd2gA8NKHkpv4t48ybugras5FCbxx6i8gaLyjk",
  "key3": "5PRHPYvxMcsTYNracyEYvuAVcF7bLhr52cX2ag7qzQgn8F5QkQQhfFezUGdkwAxuoDXBeWP9Y51j36nJYk7aSy5X",
  "key4": "567oCMNjHD3ke162rpy7xSy9xHsepVhjod3yUQJ8PoYAS888wo3P2cxEt5uTCYNkY93eL7ygTnkHgdGkuuYUsjeL",
  "key5": "ZrLWX7NrLyLpRgKgzWfMBrrHzmU6Xepd7wY7tAAJLkR4iHtijFz22pdwYLDVJdfHf5xwrSL2z5gxVacoTEVUvgv",
  "key6": "RwEyTn93ppvpaZXvDUPD7EBL5j8ojaKWXWhWP6LXm8Ed6rQ8ZYfwnyqpuEThPUzYzJbpZY4SjnxahYU9KAATwG4",
  "key7": "65FCY9BaS6n2d2ERSTfLtaauAZ4MzHM6fJVpm1UqkBQjtCqQ3EepVy3F3CH9eBG1BRUGKqra9QAjEPoGWNzHaPJX",
  "key8": "64GU5eX3kjRxzYbNsg4KwpnF5LioVZnTQjEDDGxXsRnu9pSRJqV9EAqPZYUcsvzsW3UuQpCj4t2BMGcSuDGqvz9x",
  "key9": "24RVz2EmDbfokyx3yqoAj9iS8o65AbUgghqUeQ3MWVcz2MxnGrGxSoyQYCS6DgoM5xMPsSyczpMFEf4cu7zsWosJ",
  "key10": "21oAQWnakTsHTjHBBxmjp6upQRAweFv5Fy6p7XCkD3fe8MwqSXyd9pAVqxLUcREnnX47SYnEnyjLc3vM4uWZfn82",
  "key11": "RdvJsQuSnZSd3bMthVxmntBi4S9dH7agT4bcgiBBVVMFHf7oy1Y6A686oAfxbbuYewcS1GEc2ApmcqbSXYg3EEx",
  "key12": "25qNzPqbrn3AhtL7AWVjSSGyKpcvZR7mxJEWh53GVTjxz9BXYfnQ62SgPZPpj39aZEa9VgKaVKouzLr4sB9nosHR",
  "key13": "2E7rC1EENn1dUmLwaCtav3DNi62EXahAp9Fw3EfgS9BRM2pSWkrfGqLjMVJtf9Du8nTjRVbzoZrHScZKN6QUBxWB",
  "key14": "2322zKzFs32L29jVCBFsJm4PatVA3HHha9mho9tCSgkDEeJqyNvnoae6dUTjDQRagZy9Bb1uj1HofbDspRoc8Grp",
  "key15": "3w3iEsZphMnRzb8afAYmkZyogZHNvQkb4ALMHC43MZVGoftggiTCgy1L6H6DCjJJBX8KMNWnAfmUGtABvTvj5s5A",
  "key16": "2DVY26eKM53gCJNNqoZZo3XtGAivRirrPbitThaaRQHfhquhBthN1R4GKnMdKXZGhz6XYQCt5C4FyUf21jkpA5tk",
  "key17": "3Y8DwvYXkdhuoStAcPWhqgsPzFsoHG7q3t2wkuXqzE8gPPQpn3n5vRhronCNVRBLJ96Bi1yzDsKdAyS8bMnB7BSG",
  "key18": "3MByYuanCXUi4EA1NuGNNkdPYkzen45nhqzyBimFNiTRwsCACvkjNxXMZ6soFkfg8wRdhqrW3gfqBJrdiCdYjrWH",
  "key19": "49owKAMt7L5zPapPrTK9znafvSafLENNCcPwW4TAVtYRYx3JSgG5S3cpJ9L7SxEFcxbsBS3jQLXqWWKatN7uJsn4",
  "key20": "4U5qxZCBQYUEh7BCUuAYvJiPbSGb9T24JsuRVyqPVwEHDbScyqsTd4BRkQcJds7gr18TK4HYKtoDHNwFCcDFDfWv",
  "key21": "2zstHQGSVE6FYRAWGLRrR1c2J348Aj4XqaUf9xY5AwZ3W5UbHVE5oTa7r4QeNo8Xrd39VjBcmybR1Ss3KwEoNnW8",
  "key22": "2yeVg8QRJeSwrdRJSBxbMLVbkmnJq3koBBw4pDYP7pichyueDdFwdN5NWNH5yTFpvYySLzrmQenGuyHsB82bueb3",
  "key23": "4mZoKa7FGSL1m48mAjdfPLLdmMgTQjZFhagJYf5FLURMFmsFzitUkGZZZtp3iyLfU7rjnpPp3p5GoC7z8hxDiaoT",
  "key24": "5RYDKTCnDFCZH3tHmDzxRa8Dqj7yxrwhMBadWzQfKEe1Eoxe6g1YvSChYaWdyMvxAdYuLJRJYLkkjFQPxKJwHmhq",
  "key25": "2MWsPPr5vHtqxixXADYf8j5ubuKHTLzC9uV51XJnZdLHuV1MPRwvxgwGbmuLCc3ioPYGngGhapNWw9JHvm5v1fNa",
  "key26": "2y8spDDhhDeGtR2bPNxA736M8Fwzh6WWnnx7kEcrtWWx9PYi5mQQ3zTyaE5whng2jVrCQxqjcQNZ6KWn1yHmEtg2",
  "key27": "Tpjq8gLisZRNUKMorVe994xF6U8aK1tBrjVSu9RC85HXqTqwHuEivJYCxDDafxxsSp1vK1d6K5pLksMeuBR1UER",
  "key28": "3V6GujJqftusUqsnHCcfiUETikNXR5wk2FfwsM8notdYiDzEhmLfjTqhgMo9rL3koGpc1gXKwc8Aaq8LP2W3uPbj",
  "key29": "4C2UGaCyVUqTaks8b5qRh7WLMt5HR3Qq65Z81ELFStCtEDepzxwgPtdd5R9LXSB117dCywzK8DyfthxV8WgD6Ux7",
  "key30": "3TEwnBYJKnVSWX5pbji5B5QfYxfsmK7ssDmvbdVhZaJ7mawvERfeSfbtRoWGovnzWgt1kn79iB2e2V14BQfG4hpF",
  "key31": "5HkM4RxprSxsZLHVVFaBqF7A52nWE7g9gEcyK3BVEj2fQt4xaCNjJTYhQM19C68bcDr2MivVbTAheiRgCGPSSe3c",
  "key32": "3EQ3RBYd7TLddqMfwzDnWEh7wMwiTBbXpX9J1JZjw6iHTtK5jgdZgWG8QckY1B7F9pDdBTuq37mZLSuSsHZxMtas",
  "key33": "53MWzWSMLrXNouqB6au2ohxUsyDduGmiGGkgvJADyxhYBdL1JyuiNAycW8ZMavFHVFpeCpZPAh9qE2femiqhkrqa",
  "key34": "9G9JcLE4cvYHGbSUF8xkqnNU4xwetdsQkEk55Z87TJ5omfGFKVbGdLusgSDuSYrTCcvE9cPcUZhMkyGyQ2sUGxG",
  "key35": "47yMQSV1WkF3s9QDS72hRfuwTRMq4MnWMqeFDcaZTqPqWDCXtReksx3tSVvt4SCo5DRwrc2Zh58muPBUJSyo63Xm",
  "key36": "4VohFD18r9QVqZzhCGMa9XbCwqJpjYdhPUKk9dbimghkwpmMex2gBCpUmpfcmEmJ36X3ybcCxzbJmgPhRcdfurdf",
  "key37": "4NHwW9yhbGKJg2cwqesP41PVcohhSpzLS1mw63HfJU23PevvmP8tEJDq1jYQiT1AXxSQQNgGZGY2TdiPVkpQxaXE"
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
