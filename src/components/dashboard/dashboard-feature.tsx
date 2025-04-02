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
    "jPaoSmST4rxhFPbdpJ9hFPnr1Vc8M1cZaHbYYm38yCcBdcah1vkqioF4gsmCaKAFgDZefFi3btkGLUxkRQ8iPPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtrZgqPQRrdU8GqHwQwogZdhKjDLh9V3DtXB88zQii1TU4ndXGAfEZy9FXXvVDsgM6PRD3cjyw2RP1YerZm32nE",
  "key1": "4Udf7cJqtVCaKpdPmbz5ZhzYxvpQH1w6EaQiDy3oPPL68koyM25igQVp2kaw1fGvBqiYiotA8WAdpfudjNWK6KDk",
  "key2": "j3ia9yowVfUJ6DLS1MjDKpXc3YuRo69HaaeUrtBbf3oQ8kT4DEVsDnUY1VGbLNWgu9T6AcKa1o7AveF15YTqRTm",
  "key3": "2jkDmV5eb3QAprCew8EmJXQbXp3oaRs7mziBY2g4ijfpmg1Fpc6cZGDkNbG7ioFphW47MfTjEyLrf1GG7WyFyt1x",
  "key4": "5zAjnUJg9qgWA8EJjBFxby3iU8nWnWdm2BgJDYcpGTcRb5vYLEHHo3vayVeiwwA4ytUx7L67UJcFi1GP9Dyk7zTs",
  "key5": "5yj7cK49HDBptpRRrJd2c77Ddtq53VQ9tG6PKykriKUkAqwkmrVjPHb2D4TSgRzuKK2oWuXotXJ8m5yvUCveJXz6",
  "key6": "Teaxdmkkzt8Bf7YkvxahftzS5h9FCFsyZApjehUrXxdSVQCm2PUofisamLNJkZPY8e5Nz6vuCn3xny9YDcX72bJ",
  "key7": "8F3sHLBP75x9DtfVWMPb4cchitqBreqnADYBsvibbta19cwFb4C67iLNTF2bgmFdCZXwLVaa4sQWsyJrbThmSyu",
  "key8": "3bZFhi5obnL6g5cKLmQaoyCQWuBdCVi4TUsQNHSMpz6ixiufRvuYjZHWeWD59Dw3ZeShchJuvmSrgtfKB7bvgjEU",
  "key9": "29fZ3ZUskNQihnb8Lm5wQwV57whmGH71bEkTDDm4BaMBKmwks1odA5ojN4LRRbR1WQjLmuUaiMg9dLCAQXnFYFAG",
  "key10": "3dZpF7AEbQs5R5wKhk69kea9jctxZey7cQYm7ta2UEjtgQYU8pxPxw3QfcKCFcRrfkrPE7Q3RC85GXvLAAyr8mp5",
  "key11": "awT3HJxTtmk1mUd7riksqrmH1zXSkChBqpHngAbdKtCjVEj3LvURN8sHAzPVSafddse6QbaxnqmMFcKTn5KFhCc",
  "key12": "4WFm4VoXqAazMfnxBLFopwdinDTnAuEqJVT3cKAgMMUcjCW89vRUYH8R4aH2b8StUABDh45hgL4BJjufJDzk4XDj",
  "key13": "YWuUcy79jAimAJ6EQyhkPiRtn27HJ8E6zstVyHG3pcqtokmkRJ5XrmHfDPYkJKg8bewnKPxPD1JqqeeabRujGXs",
  "key14": "5F9Lvsxm9F1u5V1NCwvHBLvsRvexH2J34jj8Ybg1CbJk7iuszpEDHrJ4iWCMjwgxTuxTeSFeUqsnGsNx7Ab5964r",
  "key15": "4sVLpmUN2GDLBKb6uoSBYwL9WX93z2SpEhfVNXfq83X1T3VM4KwSa9bCQr59ExYSvBAmV2KEcRUXZZbnoZZZgT2y",
  "key16": "2M7EFiyryogbfaeYqoc6uek2G9qmc6MdqfJcV47qEGkU7ovieypYbapyussWFDqc6Y6kqP43UhB98ivKJubTBnn",
  "key17": "cm5sUgtL7crr63DUqhKvnJkhGScyg7L1g2QzqPNcwyp2uPZLPr48QCQV6BquCpscSbJNZ4DrBGUmu3VVwA6rN4C",
  "key18": "41e71EFx6SDkqLk2CwJMEzv8apgY51gGgZg2PwWS85wii5ECvbyA8ofuwcVtwFjZdtSmEQ9nbMA4RRGjBWpVjYUJ",
  "key19": "322rYLzSjvRre62c1CNnwmADB5oxDaj9uVuCFwEpoiCKfehzZ89Cm6LqhDdycSQ28hiRubHuvnNrjGPVGxWsd8NM",
  "key20": "4e7hNXYxfmb6wwdGtL68EYhELaviAoGBJJB6magS9TBgimDagrs8vt4krHdQan4LaTte5ytjzvLN24LQCxvR2YrY",
  "key21": "457ieUttTjoVSnBc4f31bu8jDzc4trNtUZUfBpUaLUxQhYax5QDh5KYPQx3FwLmjMNmVKwgxojkYi54ww7hiaZoA",
  "key22": "56gChwY5ccLEJXzJY7x4gaGRgwJem5UQyGT4oEWZeayMxyvdiiQjgeVtpQQNHAUHJVkCPfLZMqrmSdxiWKfpq3tp",
  "key23": "2FEuRaEiAgoGra6tcgfq3dN95VfTx1uS8Bvaj5DV1SVqKMEtNfMGLi8xyVog93CX4cPs1UrkeDXqeFwrUE9UX25T",
  "key24": "4sy9BQsU1rJ2Ra4UFhd1YMuKfnW376TYxMs4UXnQyzTsZtjAxrpiVQAmhVMRkY8Fh68CS9XuFSuugaXuv1vjEJQq",
  "key25": "3cbY3HE25jhBLGKR1zheja4SyTZTpafjDd9VgWioBS2LExJa8xQqB6z7VXzDWhX1DMpUG9WaLeXjJzpbjGLEMsoE",
  "key26": "5kjVBi4xBiGsfaDDcMjE9mogqPJ9kyE2VGtERhaps8ZAxJQ248eyY1ZA6AzTKKyP76xBTDJikbD94PayQFHM1xFa",
  "key27": "njV37H7fuXkFu3yc7LMkbU8F7bTvbFCsbFAouszn4uTAVJexKbjX7WRMhkhTa2iPgfjZk6N3NekhqUrkwD4wAgc",
  "key28": "2k93LYzwFhUiSfBDSKfewpUQLJcVzkZr1YJ1mYa6Y1ik2dRQrZhJCY4dBUhnKuQ5gCXkqC469xuP9uyqUtg5R9tn",
  "key29": "2M8U3ZWpCH7Q1wiZU17QNJeaji8PvfmsE8ytcBKDpdbnJmYD6KEpREDAreev8LuN71tNAiuzZd1UQTMdqkNZSAsm",
  "key30": "2hQLuDrjqyNe8WXesULeAo3V426AyGjQxxTUZAQm77E9An3pe96aikZSroY8fzJPC77md47MtEz9KySPA6K1fYYy",
  "key31": "e8TS1nYoHHXD1StBkGPGhNPiYwQhhqVT3MvLStcsPhu7qmXotMg96EMTtwfPBg3dAhdWnqc12bQoQBkuavdpseU",
  "key32": "2DDM8nKjQX227CXsxQ611GYaAgfcNx7rWuXw8eeZ6bq1YKep6qfEAi4fMgffGBePkMofpGs7qXuLs6p9fcDugnYs",
  "key33": "4CEKFhTs3rDh3Ur8wVc1NTJztESxzzZs4kuE6rUftV9AcVbEUvcGmtYkwp7iWMu9AXLGpLp4cH6eeiUEAgWtregD",
  "key34": "DGDVsP8AWJLZN8TqAi58WpfgBqzFav69NMkdUVJKJ3M178yTaHpFtJ1L68AsooPhXrsJDRNsZ7eNyn31i8Q54f8",
  "key35": "559GL2WjRy2M8X4cQcy8QTUpC8ruw5fHY5bAAaVf9wRgnZMnjAVaeP8xba1UJcUpyMVSfzM9EXPKmk8RJuJrUxNQ",
  "key36": "5J9qPd7pkRNFHHmaSdzTFgKobhsWwjNjT13E9P1CgjkB7x4qcoFYNFcXfPMaYvagopmrEbR6HEwPHKhXHVLodRiW",
  "key37": "38Y2Vpdy3ygmNsTe1f8ChcCo6MheBmncLSkhZNtzXU54YeGVYUobbgWBZ3Z4meC29nkdenkvNeNYYv5ENgqN3r1g",
  "key38": "2hqgchNZBSfAAhH9wzEWJjgf5ujLRG8MhVckrff6nUqnwTPx6oortfVtvp9CwF66PU5dVZwA3naYnp83WfRVo3d5",
  "key39": "3DwY3mNh7UVUr81DqYQ6GYMmfi55Sp66wwQA9VGr3dW9dqnYy3Ap94PsEdjtnBLZWzJXZM189ua5pTPmck4pGFe8"
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
