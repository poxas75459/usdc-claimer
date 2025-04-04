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
    "E7mUgwzawdVK7zwJJEG9fmbtfjuGFcVVbQxRT6UsQ9heb9cXoEozLdH3mF3NHALMPhk3ysU9kECtsodGGG2wQd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvDmFbuohipjvEFmTe4f4uC2Gyv7hitCPuSfCHdP5kfs3xmRubnrEEDT8XkGGVVx4m7en2RH5mB5WQF2Kmdd2JX",
  "key1": "2aucD9zZRyhyGiZp3XXd7WZ6o2v1CwzBbSxRF4t7v1V5USAZkgpPwg8q5rT9cYV2ppYARHwKKXSSGfsdBrZW9gdD",
  "key2": "3S5bXKSiFUzQ7GGmCnL9wn2zepJn6KDNytUqqncPcYFjFTmzNRUgfoEz4xQedQc8QTTnjTrjVB6A1SiJbyoucWbg",
  "key3": "2uLVhgxakffdAhnrrUxDyz3QAFURwQfTgxrCEjsKFPrZZv3hhX2q4Y6NuQQ6LJCi43HQBMopTBEkA1LNcXCpb9VF",
  "key4": "4oZKimkQDibpYpTF7EvwjwxEbyXLcEvtDBT7YjTXU2tf4fDGgy57kYu9CYhQHgH97XBEMetvRpWWn4sV9CJPm4TW",
  "key5": "EFXhcgtjddgszXYMeu24NEiq5c9ZBiN4cuRjP3VsbxKtoAumVpEvcrDmrz7sYTyiePZzL5kDd3nzQLreJwgMZUY",
  "key6": "2dz9wxLaGFUnmHeYWYccJ6Xo4ciGVLnonEiKuvrUUmzsXnEUt4PspsUxQo7t5T3kenY6ick3Hj4aqNUyhFnUpQU9",
  "key7": "5q6kGh4Qx9mJAb2oVjPb8zTSZr15vxmJRMTrtSbx1tBxQcKjEeMUfRCFhoTuKsmZk3GRcSg5gXZYTCyPApoL7jSd",
  "key8": "5f1mw8YcZMSMMeP1Jppd1ADz4qWtoaLCCGau3n2sda3VFkqdN7uvekPLdTBY442KLwSMrDx91gFKRYxbuivDrFak",
  "key9": "4PCyTHdqdTx1XLiJVpdgKjAePTJmo8VwNTyLSu5JwuNuVQGjeVeHadpbvyibAcQrY7VwYoCFJRUhUxdasjtK4ZSN",
  "key10": "5BdKFyqmMPmZcwZJWchES6Upi9FdAuEwjELkdedewjAHmdAQDuSMsicPAHUfuzkwa1yhyguiRYPUECSFWsM6MH2Q",
  "key11": "NWqifCRAzcmVdc7Xndx3yYccmrP82puEJY3EuqWAQG4KPwenAS9XKLAVxWVjKcRmW6qmL2frPUQiBf1NHLh2c51",
  "key12": "PbFz6629R4E8n55i9YJMdCVj11waBK9zd7KGApG2WbQEhNTXC4nnAaUkbveigErwhPkHPjTVNoRezcPsZkLe3ed",
  "key13": "3ksesHYe3YFdtCym8Q9acDvtEZLLKNbT61JtMHJRXvzRhUWBaum4YZepCW19DZ6KP5RwVLtGA6iNSfDp5ayMT3M9",
  "key14": "4tmoWkfY9dc6XFwSAkKi6qookB1XXvtZeaVv2SweCRKmBvhaYZwQttbnnE5eACjcRVoe7NtFqUGYC4Wm6UGx87dx",
  "key15": "5AgaKRHKkh3jfYvLnxPJCag932SC73MzNGWBkBweaGfCrHtNh2vp4Kfvb7SLUYxoFa3WVvC57XahiG5b6xtneKsW",
  "key16": "3sBiq8vsuY7cr83owanFQBM862muYx7cySe5xpyySf1Zu4msXGX8GgaDP3zK5kbatavCmhGngqJXCit3zNVzRE7T",
  "key17": "3Kf9SEqkT2KQX6T1NHrLjFML8wxcHAEbDwwGGqK7SvFw53THyZy1EXNw6zLEpoaAuAPoypEfWYUptP3e7BMvXcs5",
  "key18": "2fHrg4B68VJw5t4YE6eymXRozNMRJp5xWKTudmp1b8UkQWTUXnnbfNC3asBhRPuHk9jATmfL2r5CtM3mktPEuYyx",
  "key19": "55DJkuv2mYXNbVzcfJNiA8PRKzZpEwCdoU2kVHARd9N8QjqAehYCEWP7DTkhAeNrpagrcPUQDKwcy35noe6RCdzo",
  "key20": "3U6HHXfvDr3tEZc3YznRQJWqaroA8yWp28JckyyPXDDHeSGza1Ae4zRJQXfmXk5Z2Gy7xSQHPqggVwh3MAyEDs7E",
  "key21": "2UihMBia52vsKVzAwyZY42LTrJ7ybusjABRMUn7sQ59S1WRju8xjV4WyUSzBSVsKqanYioG1Rkis99G3maiHTZ5P",
  "key22": "2E6NP5JgksfvAAyJCPp5JfhMSfM87WTVwHewH2m9R1D54kMkitGxWqDpjiaF9RBkKUZbb5sivjHM4J8KKjMSFH6A",
  "key23": "3AaJTURd8egVJQqZ4uDDvEV8bTVcyekRCb1pmB4ruoDT33bv4rjG6EDw8nevErFHtiy4CesZxGVa92VCBUsrrw7X",
  "key24": "x29CSoUNMyqAYxv8VTU8mFd3sHk68cXmBfUTHfEyuV85BSzP3qvPrMktqTLpDTGoBqckpYwkCfQVXv2vzxWjHcC",
  "key25": "3A8XYYNEcDM4Eox2zj7xZr72ByuXE8CYcnZQ5nygUioYAmA1DJLSUXNfQGK7ahSHnCvApgzFWiU4C8F1DS3zTgsp",
  "key26": "467VZSnmuZep8apwMYocpnQ4G7cWqWp7WPjDZzMZsJ754YG9JL9uyidyRiV46eni7WbbYyyrgDphaDjhDBNw3CmC",
  "key27": "27vQALkTp8FGqWcfhgVi4i2ZCnVa1kd8PdQXREKwrKs8CZHduDuDMxXCvhrU9RYZPNVkoGuUYmpTz5JuLDXoYUuT",
  "key28": "7SdtJgAY1zeTqXtKHcaeLnMCbUWNXAgwtFaunEUemP9QUMd661XRE3h7LKFo4fJNaisPo8XwuzbZJrCPiyTDiQk",
  "key29": "3kfrQ4NyvwudAzZbCkq5x6Le1wiABn5dezfNLx8e3BMghPzFy3MrQW4ygYUVF7Gp5arYuzEj9jPV1PXa81xgwsHk",
  "key30": "61juHszzHEbZ55T3X7UrYW7cj3drP7YMjBxQd6tVSqpzZJ36hDQRWRnyiarZwpP9EK4WxPGqBhS2mSgCY2ucvK3D",
  "key31": "9MSsm11WFf853Tjv2Xh3wG5ZmLemMUPABrMVtDGiPmZjWAerio4QMu28enrKHqpKSqzMkfAFAZBrQNKMzhA3X67",
  "key32": "5Aupm69v8mvN3maeeZaWDu5PE7J38dTxy6SiEvZtyCqwsUDEXnyVGjEG4Vx1bNDAByBACaDTjB79XL6KjdUq9zmw",
  "key33": "GysZpApqtSt35YHt49ueLJJbh3k47eD71Y6eGs8YbrhnnuzQpeFFqmvB9VKGHxWbWMuXKXJRD6V1RqF7imhabKo",
  "key34": "3uXeJT4QsxjsGQWRXCxhvtmBEnUnsx2DR8h71KmGDtV1phRMgWyzFybSruaRFD9NzHpRn4Wc2p3bpBaffWjPuSh4",
  "key35": "2zJSVysVe7HMnUTb9wx3Xup79bFHHGDbt4Rzw33e3SsHyfZGztnEx9yaBkx6CczPSxupqehNj8Kcp3aGKaL3XJXz",
  "key36": "WhEcZSLAK1dTWm3mq34STfYG6KYoEaF4UrieMJvWLF5gtrJaoihXdcGFf9VVHaxpU3NVZ3NyUmf6xh52PPUC2Y8",
  "key37": "4AwqWahJUjAmDdey6PqmG4sv4Unj4viWj83HCGY3NzVfiP6D8wc68FHTM7MAVf2u6HussB2vbtwbHeMVXePZkXHm",
  "key38": "4oeZFg1R69QZpPTGyEGy5Abcp95ZFERqg3S1evHeaNwDHNnaGkuVP57TCurum1ZyvzHYWMpVbB7gUN6ETdDgTKvd",
  "key39": "TdseJVfsg4gZH84rkVaMakm6GvGKe8hmJtTSdMyqJxfAPx7rRQbqZ8Eh7CeK37pwF7Eo214uANXQhFPfaNJM6u9",
  "key40": "38fF6vRXoA2PhtJz88UiWh1Hy68CLM6iZrR59MYXuomf3XeZ3CdnKDcCbSWkr7BRgY2u4HGtuRHS5gjcApjtsNPA",
  "key41": "U1PxcKX52ErzJ5ohaoLXPEYB1RfTeZA9bV4A6qWytbpeRbAQxZqwQyArvDCigJd9JPkBQXkxeHAaot6pbpVXiMV",
  "key42": "2C7s79MqSpS3qvg3fWsDAYtYaZTiME93SBg4fWuY5pud5B5QWkKD4hegm7uPz87NqAtepeLhVSnmhVRQ2TCZ1tEe",
  "key43": "o7iBbKS9JuHQvQ3eKGvgq3vEH2wAKn3UFXKDgEsSbUJQUtYXrBEZERQj8KMmYfAT1auQnBNBxWhJMiwnoNUuJF6",
  "key44": "RjjxKbooxUjZZmXWbBbRmxRZ88JiwAgbbXS2QRPFPHtnDWrTBnb7kwdw9HhLCRcgezdNSV1AWskMd6h5HooDZJ3"
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
