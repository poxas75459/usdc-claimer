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
    "MXcJ2UtebzszEGL9T2XWMpaw6j5n7V2ojS5suJPRBmYsYh43nZcg8X9vSLhjWAGjWFpLi8pjn1BCEHqTSfbQTmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TTJRE4P3xhTxRo4NKS44BqqJDVGfjaDHuRxYAJrJEhxUP6JLoKyz4ozRJa4aWvVL38EipoMmjWsEi9r85Xqg59",
  "key1": "GuzRKW6dJe5KhkfzbYE78AsDFYkD59SH2fgE9Sf8uC8WtRUEea298EBnRYghjbpFXqqStF2KsJHUxUTVCpnXbVG",
  "key2": "3kyndxnrt57KZDi8Cp8WwkEW7vYwtg5JE8faSy8s5J9m3S3JZ4QcqoqCoM4PJ48oVSRTgZB62rryuysz7PDio4Zg",
  "key3": "9U5YowZuJhCmDE1KMZ1kBf4X4e3FgxYMg3j7UepWnPEagrktSx2sMBEDvubkL7dPWT8EWDWBtt67yV5hdy9CwhK",
  "key4": "AA8x3Pz1cYWTJjZZwtFfy15AcmPHVWaLjYDxUhm7bSAsWUYEBvPG5FAkR9PfeqpU9eYKvHPYPuHvZCjVrqfjJJU",
  "key5": "2VuU3J3NwBptLC83zW3c2uruXQfMV66Fhj2sPtkmjQZzPX6mpEZ95T2BwFnDr5oEeZjx7EP3NqHLcKRUb9pobPzd",
  "key6": "yaxot9MbN9iqCnftAWCKXzMu3hUUCQ8tgvHUWy5NdmAiPJ9J5ocTCg1qsut6DHXUdw9y7C9QpTFT7xq1AKHw4GS",
  "key7": "5R6x9em3YExAjXeicuyA1kE4putcxquFY1DZnBvVLRYhBPkZpAQFMYLxww6S5iYDtF7NrGjTpfWa84Y5ARSM7Rva",
  "key8": "3LBKna9hdsmbCG9LPVg42wBYCWovhfctvRU3w2Eb4ESpEBDs68kcytdoh8EpZtHmNnKEafLY9Q5W3dUYhG6VvcTt",
  "key9": "2dEUFUergx5vsfiPVkHVtht6jZSeb6W5MMXs5t1YtEZY5fZyN6jnFXswNJv8c2u1CyiGRq4CXWfbW8rdoiMYmcFv",
  "key10": "3sZBGNR4XQQJVsgb3hSKYnKWofKp5mZsFVPgMWb8BgNgQcdc1oSaYFKAyoeAZvFj66SNFKrtL87QFFtFeHYQefd6",
  "key11": "5CJ4CbAQ1iUE5XYcy52dmo56h3PCBJZ8stCp26Dk8xXuAHqKBocAdVVeCbqSxAKAQ4jrVV5M949yMER1TPiyZhch",
  "key12": "2avbGxTgreY5MPBtnMBRni8bp7msA9GwRdgB3M2yr3iHEkmfFi64npDxFZDnfsW6i8ustjnP4ayzJkuF1Df82BVg",
  "key13": "5xynJZK4kFUVnigDpjEdNPHT2mnmwYpmHHXRnQMedeGt2eNCAN96tTb9uyB8UTyG58h61hopcpcqXNMn4dCkTuSM",
  "key14": "2jdUwQWZTQRuEesEjbaoQfA9cYTXorjAuUcULioM9ikCoQm25FekQSeeRS1WPFZacdA8wQh8a2LNH9DAKjB73nXN",
  "key15": "3DfgpgSMzcz1hMWQLoGUHr1n1qJw9EFtjeYA4toA8MvTbiB5SgMm2pQ4Fi1tRt5Dx9LQa1KfijKRYHX8VWvHQZw7",
  "key16": "4xYBwjRZfzLLjQHKb8CJR4os4yNHHuRrvuZzgKXS9P6kuJfde6w8RutpFENV6a5fWyfgbFE9HfxChMezw66kUneR",
  "key17": "HdSSqHS2g3te3wQkziRzRFngATjtrqxx5uriKCyLyDGMUMHW4qw31TBycEHjtosrrTPhextYyVxHH3ahAsdrHAv",
  "key18": "57zoBCBngbPbocBwkipuS8JtANtAMeSWnqfCVe5t5a9hnEYxPwYGMqBn4vN1Ym8LqQvsMYx6ai8353td3gHhS7yX",
  "key19": "2a7B6Y77uXgpP1rpndSVU5L7BFwbN2vXygnCui6uizyqfDpYdpHQ8m8PD2hXyaEhYQktMgADKNs9wUHqMQMU5gy8",
  "key20": "Qq76TAw261dDmL5XhEFv4pcUEjhrfQwcUw96Ra5FdfhVAGdLuzmCFMn7yfBvfzgxZXEst4KwRRPZTHFHG8gpKRH",
  "key21": "2CQK5eRXUd1YEmcLTJSVqZY1iNCfM9UT2TEyYUEyM66fjzGs7RukMV4rBM4ojL73HjH8x1kmRRNxMo11QQvSc1Rd",
  "key22": "3vmQ1mM4EKortriQdxHMmcfUbQYocoxV1o3HbmYt7F537Rrsf7SNC5aUNBf3kbBNBjAJ4FnxHvgJmqfHXnjtpQKm",
  "key23": "3JxTxz2uBeQz6wW9kyZ2YMUPijqk8LYHyrhXHoDwDAvusTgCVyZPm74MRnKgF6pJvmMMHdQnZ7yAszKuhPDHft9H",
  "key24": "3RfUzXAbJHpzYuPaaKugs4vhiMAX7mb2Y8RBxhc8A4Eh1QCPi49rprhFEWqRk4QqT1WKCdmr1fqKEsNY3ALB6QA8",
  "key25": "3uwqpAvVW1coTJx2NQpoSkgE8RFL1Bxjob6tUNTaL6NXMp1rbe81SqwbqxywzbmheL6cjKq37bKmwEe98yFnHvMV",
  "key26": "67cSnL4FVJ8DNqV5PXKV8ZKQxS2VKWfQQNhTwMRVkrkDHE4GqcgdjueiFTzVcwB5iSUsXekcMqVMWw6XU9L98dws",
  "key27": "4X85PcYDsh4PSvdkJCqo9BfdWoCyKN1x8tWMkcm5RVcAKRjQv55tqGEUfxMggmXzyZyRxc6zxYjiTpi2gR1uEdh8",
  "key28": "ypASUDtFhamRh3fjPFnscmz1gAt7oHn28B4mEKmWYUJpG1B95VDY6Hkzqw7CbRjTME7KVT6ensa2ANbUNjmnwSK",
  "key29": "3bZqzEFy5vFCitaEimg1yT5o3u8q5HQrxkKdKcDLhYTzcUz26Uvd7P3q9qvCENufcsAWtsY5JjXwaLk14UdZP1Zb",
  "key30": "4znK3QxcMMffgYGZnPZhAapSEHtiiEm2aSouAFBiwh1e9ezM8SX4SfU9stx4cbz2Gs22wWQVeFw7F48PA1D5nf2q",
  "key31": "2DW5SvhMntq5WUhGKjwbED8ESLMWDDwHh13VkTSnMh79FrPDcNUALfhBaxzh9EUet1TCkAHZZejqfuDgTecCphdK",
  "key32": "2BYDTyW1XxLigX5MbrEp21vAX5bbw5iunyoXsnYq6XMWFd7qF1TvJkzzAzdcqJMn1qz9P4y4BBAiDx2QXetWsasv",
  "key33": "5gb6nbuGmbLAUnhSnGFeKU73zm36VsqTriscw7AMFBoRr1iALzVeAnFU8hz8dnsikYif8tEhr7WQtAxuynyyFpgM",
  "key34": "NKbVYMbzcSFHnm7pzQ3m53JAFtyQfDx9BUMsTMcGjKz2rkX9eLwWLay1ZYbZe5mDZE8zA1yujFuceDhuAVVnzjA",
  "key35": "2BENPFpGLqwkD1Z3BKZsnQhndvcsckvbmuKT9tr9oZbwwHH1QqVXEfibwjDNnccQxhnEtwXssrt4e765RPYzkbf"
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
