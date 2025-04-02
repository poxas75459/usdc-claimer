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
    "65BqYgKX1JET5ycZANRJK2jFveCJpXzyMCuMNcjRmbuMprfFYAJAms51o5yTB6EWaRpFam84MHjEizxx84umB9bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4vXQ239beJomHAnU11u9rYzY5fbW4BXMaXoLDtqY3Kf8pPPJ1ZJDUPWyqGR7hWMAvhTMEJoH1v1q1TzsZQYgMn",
  "key1": "4LXyaLmdd6QphrdYkBxUqU7vDVjPKA2RCqd4mzejK8U8ivyW3s3FtY4XoGwKsLkyTUwRpHb6QPMSRkWS8uQXSiFT",
  "key2": "3iNDwKBxjq1Pz2s25KzFFnP8rgu7pjvNuu3QRQVCemQri8HGV9RDZgzMTXRgqLnvPGYfxQq9cBSDyUg6m9fYRiy8",
  "key3": "4ivHtM3F5g4PTU3Fik3nqnknM3TLi1iSh4YHWmm5rFECN4xKx96UwqkosQK72tLknvm6XnTtjQcDHde5U5R3dQXD",
  "key4": "5JhGF8G1NwFSpecv1W7YqcpnrEsbpCehh8Katpsnt1J6tHsfQiXJ52kjtDkLgr1gvvxNTFda5zaCRWZXjPJ9JRzQ",
  "key5": "4UGVF6DQzJ5axYetHz86z4XNqxQEXwbdAT515wm5nBQ624TCeb2tunMS6vGryWyqxVwFvp5sGotvQ68bmdqW7ixp",
  "key6": "5Uazjj8CVVtRRKGEeW8UTtykdfWt1cjLBLD1d8SYadwJcxPqfRiBmNDvqDvbjYXHyArUx97tv1Mhw8TDBQnTjSCG",
  "key7": "2E7937kQxNADxwEvb12jBoLC8v6W57vb4SiSTZLetBXpKJrbyhRM4Evdd7K7fe8kayCxtjTJYcQRehca4XJxmTAd",
  "key8": "4UAsrVHbKWeQDUp5BtRuQ4puH8fkisPGsJbR1Do5hpUoxymciZn68rWsTC3zxCw7JKs6n7278mZ3cc8mtZdzJUvd",
  "key9": "WjXWJw5Hvk5uJYfruisBPrv4JEtieaEixohqBwEurn5DYjQBFaVX6TsnRKsNMmYj9DbixBFjuveceEaYvtSRd8e",
  "key10": "V48RqQgTEwJTaN16EGyazxMUynL8mG2y7cS5TFArX5JBxwrJ2WQxpb5hfsLxnApYjuJsecDVcTAaCcRY6mPLLD6",
  "key11": "5xRCWqPU177Znhyx3bSduo2Yiq8D4HrekqCymHpEXMqshfqS5qVBWMCS33BDwBAq7RHYySzAmMdGUXNqiHxpFA4p",
  "key12": "5wqyEV4Ei8JwynefRLuWGDjMWBKw5zAzebyeFCEfkps2BBV5hnzzMpU9oKHFYvdkcZUgByZrFbvh5p9yqSXikqqX",
  "key13": "25Lne5afVHpHu2HSQte3tz9ioEt2fFJMBTdANV5pWC5EdGnY6dde5dJiYgrQnfvKwXWHKupQZ3qQVuJHKk2cdw4v",
  "key14": "2EPpGZx7AJKTq4nDHQnYxgKBKPKhdpTEWRbB8tXQmCtBxKAEnfbCvWaYYt5wcivAKnwHyDT5B4NN4cdnDXaDF346",
  "key15": "279nYatwsChZ1eJncUYvpcbgpwGQkyR4o7pdwYpQzWMVA3cYaRBdHJCki3Zr9FmXFXbHdk9B2ZDUm6jqJKn1eR43",
  "key16": "KptALYAgHuyZJaxDqVsS4xBtrG2DomNeRUGRj4rhAXQF83pXJBx2vzR6TJcA7kowp7GE1RWiLhW967PDd3fMcrG",
  "key17": "4dQhgJRjMHjDYyW1hd7Ea5vN22UPNEsqX1tjKWxj2nnYGxvNFzSwvL3tUiQDYEfhk5stzfSWKd8TmqmQmDyAwd2W",
  "key18": "5s3CW8RFoFoirCUQLan1qeGF48NrY9wrFD9q85wz5BqGyzED2T6CxHcbAiDopCHycZSz7pXSJeiLeLTbFQ1SvtFe",
  "key19": "65Q2wu94Uzyc4KwXw5fysrfyWSyJRNNAr7tJhnELYpjtTfNoJhcg1fxzNHGvsG9UuJyMU5xb9E2juHrwjH7bgiRj",
  "key20": "4Q2JBTihvrFJft5wJ6c7X15VfS6LKyiGQXzngnCzYeRb6negrzdpEmoEi5yz2owr7hFRwzw5tweegheYbwmJvmDZ",
  "key21": "295Hm1wZMQrHAeh8S6QKZbESYATc8MXLy7N7fVDRq1zLQHNdEMbZeDvcbFSKJUPr8CXEUXxNUKuPvRtgjrwvmDFU",
  "key22": "41ykRMoVT4wxXCSUerHtYSebdEmw5BiJJRPADjnrGVd5uSgnamnyRufXcjq23Ti8junNu9hSY9rfL3jjyHTwnR87",
  "key23": "uMH8edshwci7niiMXH9TPVqmyq1iwe2hMuw5VEwdhaCUrRCo5m8NtRp7K59D4mZJZm5dRQfhq2FyHYeMzcTWmmy",
  "key24": "29iVvMcdVvT2uf5h98o4Wd4QKzERMkZZZh5XDzG9x2Pkt4wEbfvJWrtG9iVrpxgwPfPRN5ydHDi8gQbtRyXeac6a",
  "key25": "4g1QorA7WHpwxahZj8bQXdLG5zoCUJY9e4yxuJptfvm71p8Pn4qpMU8nKU2tzs4jQ3cPGDchqch8Mhq9ZdUgcbyC",
  "key26": "4FpwPupzm8jDMTSNnS3xGjNRx4M17Ko35EMzk9gEbJ1bZ7bZYRZVsgJguizybTDjVXdRva4SHNRamKeCNjxGj2TS",
  "key27": "21BDTiGaisW5ByNgvgfkW1FJa6ZhnBQcX3eWo7kKgmzm4iYQS8RmibTSwDGNw2kyzgnM7RaBpCwdJ7kLFL6ekz7a",
  "key28": "8jDEfE7gHhCPbdYEJKZUPZ6krfWomwmXxP49AAPG2axWGJtyLmmsQ5LStqtQwek1rwNwBdun1T81ejT9MTuEYTj",
  "key29": "43jEzffd2eVzd6M4L3KUvVh2EgoMpXVfu1vNxqW4UiFU38hvXtjQEbkkhQ3QKG2eXxtWERMqws4WyrkzCgbnBzee",
  "key30": "2dGEHr1KkpViUXabb6tnvWokSjdXuYe2Ex9CeMTYtP7u9Ego8fvAWR9PdtdQz1smhq4A76Fvng6oEBAngxcQ44nU",
  "key31": "5Bs4a3k7AwzALiCPyHuoMdrhik4A5LWmQ3S2Be742GxNaWenTzZxEuCfUie3Lyib4YhCHuXLx7iv5e6rQWDZA4Xz"
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
