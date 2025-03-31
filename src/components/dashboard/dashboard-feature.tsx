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
    "269EJvgmo2Hj5VcGsM2gahueTq8HvMddEZk7QnHHef1y4NGuLcFqHeyZnKUHvd86YjB66kbmnWV1kGJ2gYXnqgEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJg8oei16TEUALex1m6zXzv2FhbGqtztbB8f5umqrTvDnC6VTiGDRv82eJ6NNMhXrinoaeb1zq9uWYRdErt1kKb",
  "key1": "TXWkvjPm1jbSeeaZbZiEVDpSbF7GV4XvXsujCePw8euv97d5DfjGaGjjQc6YJtefAmziEDZLWuNybS3NVYZ5WvR",
  "key2": "364LWBUqWZP4wrtzjCQzGQB9hKkyuiWrgwRrTYpGB9wR7QcesyKxYU79eAVEeNP9RS8gXAB8sVziCnDsxbLKbgRr",
  "key3": "3W9i9rHE7XpCDRa4276cLYkCTGjsFyCQjHLwJf1pNnPp99zZDmVym53Xa3WQ5YnG8QWUc5hiAksmjcCY4A4CsjDv",
  "key4": "4RMBUgXZ17mzapcbZ4nSxEtk1EMY956njh2XvuptwV74P1gf2AvSWB2nncCRRbvfA2ARrtKD7VfdR2L8MrLUrcLr",
  "key5": "5yUF8FDWNnEQcrrCQGzmTArFNZo1Mvp7CHVjZMC32UQg1ASUNJMuESWkshVbCe9BY9JG8MBxHjMFhfB4YNGF3sZa",
  "key6": "3WgKc7sSBRrkdEoXp2nmTKWnoQ9gvUTGUjD2Q9GD2xLEwY6xmFuEBEnX8ru8ZkqfG63BmDgbgDSFPLGBwcqhMK4c",
  "key7": "5DX3a3k7FLtwUHZ3jLFztmuPoK43bS5bnJkSy1HEPJoTxKG4GVR2LgYRjd8QyTqLUSwAzi3iE7VEpHbZUiVN3AkD",
  "key8": "Jc8vd5iK8oNywa8sAtBdegWNjgFP5JgtuGEe14Z7WuLtDf6P7DLByb8owWBA9u74Dw7BA5Vhjm1RgPHbhdttbjy",
  "key9": "4W2XxYUhE4fHCRLyqCW2nYoQJoZTPG2PonnxkSuCM4UkadJoz8JPxyYBofv5ZmA5v882w8J8PJhYUPHCkAHXygA",
  "key10": "5CfY3Z1LbqcHF3c3BJDuxfZgA5A8TpLqGcJUDqWfhRRzPWDhWcW33MYnjc2SpZ2eGE3VDkXqW4EF7vYjKVDCgdzb",
  "key11": "5i6xXcLgm6JARAKhFUBghNC7RZZcZrogB6YXQKUdpvcDA9EqTRni8BHbkRfvHoJHgNQyDMd5RmM734z1SgTtTgs4",
  "key12": "5236vNNYaiYfcdtKUUGBDtTmvYzLe1rocADKVwkjeo6HHuLcauESmRu8Y1UGMYzk9WMesQxCGpdSNQaz3XmYpbhC",
  "key13": "4CNKsg6qRpccu4aLXJJqRx15d7VHkSCTJ8cF62LEqNcWUcQsa64RcLDGqjAjvfGkQ4FfnRvSdRB4B2na2ZyFyutc",
  "key14": "4qW85q5484SXJh1a6U6sFXW42tVWK8wKaZj6B9dZUH7ZvMR85H4PUqdXwpzbknek4Fmr4uvTE2Qzbtm1VShxLJKc",
  "key15": "3hWosCDMDB7wx7QmrqRV7E318H1g6amAE8pZnX65uznw1ThHf7TkDGrSzBmQnXEYMfiEDaCfcqWdoVKMQu1fqHK9",
  "key16": "41GArHY1yT1T9SUArU1HVLpxNQ5vhma3YFaHCLBppi1FPaCaA9qXXq5RwET82ijUymghUFUTGfUtXh44V687k8Da",
  "key17": "5fLWMXhsxAYbGALshWvNdJL6JdMYYhoWDbvcydsc2NKRkiVR9k8SkhbDsyBXbY1Nh1rMR1JW2wW2eYNQ2VXh31YG",
  "key18": "3FuqVerj7yF8fFa5piNv45E1gRKLhVEmNeJ1R1bLMf6MmubPni8j5r36Q366Kwef1TQw2nCjUyAq6SZsfULaVP6b",
  "key19": "2h2z3t2XnUTygaJz5DD584TUS7diJdnVAHhx2uuR3BwndYvDAjCMRejLja4mEn4guu2a4xUEZvHLjByXjf5vfah3",
  "key20": "4YPKwM5rDqdEb1pkkHTDRNn8fN3AanQaPSwR7skcWtEEhvA6RdXYvTM7aueRoupeFh8bud76HBKYtsXMSeaBUdyC",
  "key21": "pNe1D4H2qPBwQpVqVLVgWW9uSmQXABKwSbhAnuaLBT7gNnjYTQ8hb6GBUMnHzKmikky4G9zEnFeTjkHLadRMwNv",
  "key22": "4WRsCdjg69sv5GSo9dCq6jkEEteSsAGWXjGoxMuPBkrscdfbALwAk6tjWomBtRToLULDZdX9ELRPqKFGtG2o7ag2",
  "key23": "rC48p7w3iqjJEDSXdyrjKSC2MSCnA5uzamGDbYqeSGPBA9yEDGtBygvFuBf29E6AaGFDpkDMoUrHEt95MYedYNV",
  "key24": "bJK4h9awTg8wxDpUMVUwyELd8PiVVSwdk9JTpqjUSbzPZwaBvDgJWmgSpDJzW7ad23cZCqAiL8FW4Dwbu4VdMp9",
  "key25": "2vQ1qmEi96miTkSGYLXPhp73fv8hhGaUQVK66vGq8xk4TKgSHrR3LGQeRr6Ryf1VsJLGHpdp4K4pJ7vYrxMcdSiJ",
  "key26": "4LR93eSH1GsqpDcSykaVu1ALAS99ZfvCgxtzxtMAEhP7xy1rkXGDaHnKXGAQcXkMrenKDAhNC7WuCNmtq57Ss62U",
  "key27": "4sFnYoV2dRGfq7joZRCe8ovPyPGF2e1cAfgahmDpYVusRxMeNs3vV79VK8bEh55zqf3F9iPNifCkAS7KZNUuEdkE",
  "key28": "3EhfZG3PA1eHsXbrnup5TpDERw3FCyqAvJed3hhRwaDAx7rKrJN72RKLWaQPsZ7vaFXKT7bhFgD6FGqJZgy6vSmx",
  "key29": "2S5Q1NSkjV1cA7ZYk9Z6t8MW5hFv9F9Aq5uJCVApys4Ns5ZaYahLc73C6iQ46YguFXv9D9yPtN4xFFoQzZ3334VL",
  "key30": "5t6YJ8UZKAeZMQaDAKKW5MUMwPDfyW2UhfaDYKCrXqa1Zk52HUwjZG7PgWYH95VHJ3Yc6boDgurZqwWFUfHoJ6Cj",
  "key31": "28TARV2Q2MoW6ENpCvPHSMZMM4u1BZhMT3HybjNbgnbjWuxQpu9BKMwdMUYH6kXKRRYP4uMRw6pNZonA4knjLQf7",
  "key32": "4SaGZYZ4ZMVTkxWgMrBAoCJZu72gPeaDSoKN1CCnYzkqBVXevevkwuKMUt8hhjfghH7PDPu61rK91mMwJoHz1D3B",
  "key33": "Wnby5CUdivRBkYaFWvefmNPPGYjk2Q4MW2z5QEmTQbQjSSCUnNVKQq1EECcwitDjVG5VssAV6CpyUoFnVFjiCod",
  "key34": "5rFH6v6nXonc1KoRpxRExmVvYbBLREEzT1mkJnutvfbVLWqSjkcQe3TDNtsf3dq3SpH9d1cqUByG4PsY9bMn9cm9",
  "key35": "V8jaFS4RE1mT9YXhLkPmt5w2FFJjYbYjPuWDJA7tQXw89i2PkSoexBrAt7JpqrnC4VcEnxBdcghEkwfPzTsvBZi"
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
