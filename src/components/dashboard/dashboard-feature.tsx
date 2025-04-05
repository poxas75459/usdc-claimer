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
    "qwH1acV57NnkUNwYJchfTUwRtjgDnQQWfnkPv9VJNzEnq19bwzL46iBocgfJHnZskSZGpPnE59VL83n2TPRh8Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zsiu4wqYfvU6wirn2KaXbFWFEMZgEWEuEVpX3Dt1eRT93ZQQENsbUPUwaPiKW4LUmcn5sfbzUPbQWvjLjufdjvo",
  "key1": "4yVkzgxwGUyG2rWJJmEShhNHMnH2w5FXUCYvAUBg7zkFvyAgF94jz8uUX7sRJM6nXWjSfyZmAz7f5LuiARMqasPh",
  "key2": "QUQYakHPn5xzVNU1HYMtSCHKbmrDxDYEbqegfFJy6KfXBiKTQnGYWVRasmEbkefhwwBgsm4ENFj9rifaSHM91bx",
  "key3": "5HW4TUog8sQer8NtbAqKeY9FzPWnEtnnCxZyKszL22NhktkTknX5xuZmS2cZX5LsvS2DWNV6fGFvgLb2DQuoubCT",
  "key4": "22ER4aNzdL5k1SC6WxNp9DS54Wix7UkHnrJrN7K4o8VUzrSmdPnqwVzMbWzWTWX68Cv8zUSuGcvS6uUoBdfD4jEh",
  "key5": "3xYWQ39B6wB5vnbFzmawazP6pLoagiHG4oWv4HEcvq5Fyc1yWeeucJaxoS2zPuE9ptstw8wCc2NP7xECYUtZjBvz",
  "key6": "2rqERWkyJAR9ybJeYSe3bbuFXo7x8Czx4pDt79i3tH1YCkPzBpAfcjCR259gJ67hixkRdNvvyekRF4fQMAbXiHh1",
  "key7": "yq1L62MjAMEKBFkZ9f1nS3iNPRfMiBjeD8MgozF6j9dqpG6yUFP4PqFJEjwf1pQx6exmLhBh39zMBrSJuMPZ1FB",
  "key8": "5K72W68cEpR7d2rzcJwuUQRWRz3Aw1ww85eKHre7nWzpTvbQrHBL8ozMNTWFrsE9Xg2PFjyozhysv7rVSRHvpCWr",
  "key9": "YBarDg7GTqARstghLgJMmJRiXWL6o9SBPnXXRHNqSW4P2YZcsemE9h2whoS5aqR84iwhFBci6tMKvmHuLkwzXf1",
  "key10": "5sD6pzxesZn9SG6xTMbrn4dmjP3Y1YEZ1yMzAYogkD9Cv3Z9JFg4SZFMLfxRi6Ykm1HjtGD2y9ANdm3A2GsoGxSm",
  "key11": "5BFsUoRJgVjMwXyUeHRQiNbg3qtn2bNFPHundNz4Mv15k757h22D2Heo8DMQvsKLhGTKep811UJ9ognr3V3ym8Hm",
  "key12": "gyGsZeqax6rNWQLcvnZoSpTZha6mnKPb2z5PTQVYENx8XHxFCkyJYxfC3jBhU3acfHSdj6vrtAgnYUoL1kpnb7h",
  "key13": "2XGE89bxVcjqVQCfrd1dk3L28aPMBfUQdfAPkVDZNhM3nKAXLowkJZx8JXe3t3eWnFQaZEj5JE5vib89cuMxWnvy",
  "key14": "3Uxk36zACqN6QsadWe6U7GenfMg7YyyNNjYbLFFujU8nFoU8HGAB3XJcHTxQYvfLUHE3RCTYR32QVRGSuVZ3r37p",
  "key15": "2ufqdvtnUafnkMqtAsUJa9HFHedx9M3XwQPAwdtqamFofwJBRdg7wRzKvfZBaVk9sTaybLxGQ8LjZFmnXiQuQ75M",
  "key16": "4CC827nSTu4HYmCRno5yP7bmbGRdsymFeXxWSetNPVpjP6k8e4CAv9dtjNZoes2NyE2N3X4keXtK84MZ5gSKTtNe",
  "key17": "5yvUz9zdb6cRJcKTV6NjetCd9nfJJK7YQYjHazzCrPdtFwkxLZoYwmPQr34ZDBccRfDEp9z5vEh1RSfQijo2iraw",
  "key18": "57NeJuWCYtMFmdPzarEz9Cp1VeX8rSvNFJdyhLFsYPqFcWyTvreBeYEaVSBmMighmv4aoyGExZj7gEcgHnVR3zWJ",
  "key19": "5P5GBQ7bmwLtYaj4htA9MXQZaCay7SpL4BnFkznVFaPE7TWHBJ6fLuX9QLUYnF47EyWsbFF9oDrnKY2HoEkRaoq6",
  "key20": "5SAuupAtCUKaQtsFQyn7aeTpRivKNF9yW4og1LZjgzxx1FkYjTQdu98sY3F4B4855yXxer2uhUPhrqn3vzKcenhB",
  "key21": "3BKapZsgaVp1PmvjPM3NYTMAqX7XVMRtFK8VszEWydWCmMECq8BJfuzuQW6YfZsSNonsu7hcjCg4vxCHiqd3ZjfY",
  "key22": "2Jxhj54gh9oHEf4voA92Ge41X3eyqkrGKbVVcHaZyJrWANaQqLdhMnymmsKfas2gaAcFSt6QXEX6CVaf37VkDUfC",
  "key23": "4fqybovQQSuyjhpcT5YREyPRLdqRYJqSoGq2Nvvk9GUiDcBGmtswJr5VTeBaEhuJQyK5N2EoBgtRv8bGU8BehH9f",
  "key24": "2KYMwiuftPtVgwMxsZQFPaUiuarQxjA9eKa96b9VzpotL8Cf9rKMY9damCAi1QE3yfUNr6J75VbxryLUSQ2Ki4VT",
  "key25": "5M9SSVpBHrX98WFxrpwMsnuUcHrdcnB3WMdrxHpVcfbP88E2aCNdks3p1QTfwHUoHAhtRHPSQkzpoMgYPRxNAXcJ"
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
