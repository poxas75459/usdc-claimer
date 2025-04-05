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
    "9pyES5qZiNJC8UkR4xeeoeZMMwR9Dhhyyd5riejnfY7UVTgv8Gbvz9JtxTxrxqMMmvpMAfQH2qU4aXThby4T48y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYFr4rNZCsdv5XSYCQdGsTNTTTEZQzTXZHGLgKZjaFQcCtxVWpPXNDFUX8wfTZ1rRPzxNPVXHrJcDETossV2MMP",
  "key1": "36cqTWB7ktAqm5LnyuxhECB7DwnroegNPGhDGdASYEXCVGxXe1XPU35F9fJ6XbviiLCeFjugPYiNedoWV1pU4Q1p",
  "key2": "uWxVTLVMLnQJwLtnG8fgdGtsUktmZexTxfCeWgoCmrhxoAFqAd4gcbxg9mDH3ShVzLqmCRWXER93BPNQjRSQeJq",
  "key3": "5MXaJiq3D6RZz6HaDDJ7y75iDYm6ayuoUkGS2oVG6e8WFXMQY9w2KZpuJaZQePsXmYR2Y9BuKevvgXmwRZWFDJs8",
  "key4": "AQok5yfXsfiEefqdsPzPrAY9hybJdFDELA1sqmc5so3dZAWyei7dSsjZM1Pw7FHadZ3ydu6FYq8puH8kSLeCBiN",
  "key5": "YBvHhpHdnPDxs9mH75W8z28NFLT2mV8EgGxAQXmUgsGFE2QGBwujmmTw7RWsQSnJwF1DmxrFww7Y2DrhrHQ6nMx",
  "key6": "3qXB2aZfLpu2maChkoLfhN2Muhf6UixVLbCyVrtGRq9kGEQpBTL49Rqokcmp3FDZYLzuECBSmw5pgBC7b5ZYyqxf",
  "key7": "3JH2h6mNeEoCtrJbKYAGgbuTdEKyngv5xHgNjhWd6iVVHwGJaQ2AU95t7boh7QeCAm6FaQuwrNEJ28Dcb7W2THdr",
  "key8": "md4zX9GKpV6USwJmdkRzL61YFLaigwZQY5cHMy2L5GfzuyziNUNXFTVs9rQVj3h32St29V3ygrmBtrYoVF9WtmR",
  "key9": "2JQT8cGxpAhUimGXweUQWAxEHJJJhJyqSfBMSWjU53e5cfy42dBygcy2G9b7ongg6EA6MxWeUskpm1DRHi9sB9vR",
  "key10": "2Yd3wFCBGdcaDwGucgGwzwv13ZgXi7pefoAjHM8twj3TzniguZta287zC6QiMvcTtS15HryXntNoXXVYzKUD53zp",
  "key11": "54Wc7FRBNTtPZdYuLkLYw2ctUnRWA1P9VM3HJdVZkQguAQddixibnd3LJ2ULQJp66rjnzJxhEKgWWZPMCBXWA73a",
  "key12": "45JqbVwrtHeWDaMQJiB1EZb6xYtEMezr5jKp58j8gfvBRDYMkYVqwZJRduxpPnCQ7BR55fBBYNRFZMyR8d9ch2AE",
  "key13": "34RA2isHdGVzW8rzkGmkHphf9DRgT5KUYhbRH161sJt336gHLEwrChhMEckHjeVAktPcHhhQTbGvadMTn5MQXLf4",
  "key14": "21WQv1gv7ze7ZoU6RmMKgoUykHkyrfAabxeXMYKUHkgNnEna4kdnSRvEcxUswYrAgNTamorEpsQBZBAEX7yUwsu3",
  "key15": "2sCndTvfBvrZZC91VQrE7JJVq46djkR9dxcePWVuJ9s9MuFdKtKDZtos1hoiQiscKJEWDiWjsfX8AysWgTcKF5eC",
  "key16": "5CCi5QHT1U1hNtqUvQYwoUSUyGoW4bxdJQSnu3bjD7L3PnvQmWEEgE8m6hWTg6hbmV3YhAfJmPtrm2KvWf4MQiho",
  "key17": "25E1nQkHNfUdL6RGL7TmB2uQXGLBhLQFSqNi8CdLSrM7LwB1rqU64oDMpFAQpVx4sKcbFvw9vU5WMonC3PDFejys",
  "key18": "4rnq4JgrKnZrL4D67UNVaVJ2mSkfwz8Ue9dg67vVfpZ2GxUtP3FbXFPH7pGzMTLEyFDNoRZgxFVPeSuQV6ha192q",
  "key19": "5Qe9wXXe4GFtu4AxYgehrmka7C4cNRX3CNQW3UfaAPzj8qWRyVQ5bGKy18jJ9TznGJEref6zmVfpjSvd8qDdsewr",
  "key20": "3oBAv4AFn3ZG9BwyJjneJBGNrS2iscsMqVzsMwLM818GUTQjWfrYYXRQvt5bJv6y8LDdQCrN2Arf3LhLWSQCN8kZ",
  "key21": "2v48AGuboRzknTV9HDMhYzZUividsgtmKKpedv3HCgjFie8iBaWXGkz6tvXNPHZLrQZLiorHDJXytEGph1kovTRD",
  "key22": "2eEQM5iSBkTPF6Ls7VpdDtLMd6xwwunmLFtzL6hTpNLS9P2y7skEXyJBC9rdgFeqn1ixf92cRhw8Dx5MfHbhdj2C",
  "key23": "5ydLCSPWNvSxLM7eYN3s6ZSmMyzcVuWLShGu423mbowaGQag1D5fKG3pJxMSssMXkW3TxXFiRLMB6sLJ7BuQE8LF",
  "key24": "2949ajgLUQDsrKDoRTLhP3F7rytAfZGhpCh99MSrazcLngXK4bjTBXTGRgxZUJnjDFvmjtQFNzafrNwNNy9uqyN5",
  "key25": "3xAhqpJZwgpHMEt1j2pDeZPfXV1Sw7DuRDdHdMKcMrHDvAGQ6tX4tkUXHUpCD5tHhMbMRVKbWkmsPm3nAkGSmwDP",
  "key26": "4tGP7xxowkaXrvCeaseeSofEgQDqeCGCQ18nacJSkqqvzgt91iHPg2LEiKFnmXGPMA5qtDdb3guFn56xFxDrF1gM",
  "key27": "8UqfSpn7HWWRvuhD11kYwhV7JoiYJdA66us2SK9dcMRuywvkJ7CkpwG2UhxE3BwtVi9CyCxFDGP1RcNjr4VePCf",
  "key28": "3XqRr3LKiaSa8K4WvFzm8ENyk2bJe6gUvnsPCthYoGCYYRv2C9daHD9NaH8MpUVDtgsgA9aT7yoKe5dhm2E5PvZh",
  "key29": "2sGLyGJvoiut4xZm3tm9Evfo7FRQbNgUS52VRWtAGFSStJwAeWMQ164wajxaxShcV1AVfQxJ9AzPJ3k1d9URkJbo",
  "key30": "5HFWjEDLaAaPvRPR3SYCDJkqUtArr8A4f8rBK8tPsteBhU1C2oeiozgwESjs5vpPygRzsG7re1HzeaXwXPSkGqdi",
  "key31": "4mfiEbYYDJCWNV2wYmspZeAd6kdowa6k2mDK7EjCavNf4NwpekhB7z8vWnL7nYpndKwhiyugoNAXykgYnmAzkNi8",
  "key32": "G5tbWgJpG8DEb4VjRMZdG88Kra2Si1yUBfDKNv9uUrY9jdtBwj46udjBNVonqo8PJau7JaeP6zbUi8Wi7gfKig6"
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
