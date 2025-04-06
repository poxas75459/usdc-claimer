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
    "43X6LP1N48jFRktrf6Djk5UjN5h2VmesHpQJPiYT9nf3DV3k8Rt4mMkhrJE5uUiPr8obvnqpLEGxieg1t2raZgmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vcwv8f9LtdZzd6oCkH17Xycy9kr6yiCK3y4Va9U322o1KBhPavqrt5qsFxzbznTWLXWLgefkoF7432MiLQtSCNR",
  "key1": "3TwfUF7ArujxyoypFWCpV1xz99jehHioqEBrQstHrtCaADuToufB9kEp6gcegsaojwpomdtQmgWhkCGxriDuAx3H",
  "key2": "4oFtUj2LwCS7ydM38tGLwDoma5wtbMyGwXrh9aGneD8tT64Qv9A5sdCKGLrQnFdc4wkfFiQkrwdBDvedkc8tqtUT",
  "key3": "5BLVS7sd4dPuJyRvVmM8K4aDQmWRuYSmqvvGGeWBEvZhgBehzJCkRSLUt9L41i1Wxsfar5FwRQhuGmDVsuV1oz4v",
  "key4": "4kFmbdsgrNuVqcRX6HAQPYnh7CXGxUN33Np3sh76q2dw7SyxvrUSMwwAAd6V1yDpDE4DDHUMGAPxYdYXHrLzpigi",
  "key5": "5gRTRw6w1vk2mKnyZKCk3o3ZoPJttrPsRdm8dYy7FqRDUFW4eK21BN6XUbG97633y3KaFqkbioWpQoE54EBUUw1B",
  "key6": "vtoVjF1dVUjX67Rbku5cLg5oZYLBPkSAgWyJ1D2eu47RikTHkNGdKYuzYZA2VVoYYE3VUZp31Xff5H7v7BXBNwE",
  "key7": "3swnR1gZEqfKwahqQaT1cNY2X9LRVYKnDPsQRkNyumCCFVA7uJBh15N6eJFL5d5h7sGRSLVxtwLcbwBAkvBFtgL",
  "key8": "5UYBxhzfCQHuZ9Js1MBkCibBApMXDxDkcQksseevekZVzaMhYDjxcRt2cy4rooqKjEyMCxiX4DcYYyr1CA7Kga4w",
  "key9": "2UrDi2s5neqxhYYYLPvUA5DHh4fbHjLVVZSaYnD4JebWVz27sWCLwn9Kx4Kdkrv9FWkDcmR9mX9nCh3kn6nB5CdJ",
  "key10": "3NB7GkuyieT5FQp4PJ2iNYeFPzTCPYDdzULiW3DA5DKh6Dd1RHC75zvVCEpe6vJggK4kmdt9Xd39Cr866BbV18Ti",
  "key11": "4nTT8Wx2JX9czQfpoGiia4EpoHF1CBcqQzxiP6oNLyTNcfUfsoLffuYsk3LfCJUJqtqGBCDSJFcLM6shU1qZ6pLr",
  "key12": "QWoQutQacVL7DZKhunZctXVkN8j5zZKVAmkLZQ6mhxXKAqw9zARizhgL5V1JsamKaqv5GFxiSsXZGQyP2DaNNsU",
  "key13": "53fUnYPCx2469kcnJ9APMgkm5Nqs9WmXqbx7wYDkrtJgnu9igbH3PoYdpWgKgWG7Vp25xspBYbchsrb8yU22V1Bd",
  "key14": "4GYWZ3wwMpHPJ8iswhosgxcoMh5dS5oEyYgpHZYhM7cnttxrUrRA9ggzQBoLMPSMT7xYSeGW1NrtYgfYWMmoNZts",
  "key15": "3mFLwyb8UajMpHMaqWaLR6dm7R8ET6GJXQfyw27KdSeCytZ4VN9RtvnVqmNfQ1AURpvf4fx36FhTbhLSRkkhkQK3",
  "key16": "wCdiyiBsA4b6AVVmXg7uCXsMvA72cZKiagN4KzZtLCUqabZWtshTfyMuYJH1xUrX9fdxaMTXXUEpP5gKTm62Yzh",
  "key17": "CTM7ZSyoMfQmSGqsLH1DLuvhR2L8JjUgzzX2paEJ8dfwDCa1mh6x1Dmp62T6DP7XDUEc8Cy1HcDCVFuVhu2ia1a",
  "key18": "kpVXJ87ELr2sgv935VL8jJzvYB3fdv1gF2CTLAddLDpNXySBAq8n3KFD3CifBWHyPfdBaXtc3An37jb6PXrq8bq",
  "key19": "b51RSUNUSUwSRMrDbr9SLN8yBfLuknaiAxqeaweVfH1XvdNBbVRPWw2pSJEN3LrgVUbqNS1PUBdXNbzonNGUq87",
  "key20": "eWttNWZrBcTEcuPQX5GBPZFvoJy5oqHqwB7sh82bxE5PupZbWuATjK8v73ouBxUzNaTTcEUMP9FpLpVVxbKcDqY",
  "key21": "XnRshhfaDNfDkRa28G7pNm1ku2oiBza4FFiXwDe7Ub4yZvrRWp6T9D5erBKRWBZhWrRCxVVASqB6vPnrntg4AFy",
  "key22": "2LCtWgMS7MXg88fr4QEEteinoV5UYdrWPyMFtHYrwGg2mfyt57L5tYEEmonackLNcx8SjTFiU9M3MvgGLndFjA6",
  "key23": "2Env6164NU83yhJnfHg2p7SmKzNgjZXjN2PLPzGUEPsjCJnjcYddFMQQi6QZ5ZL13KrhdmpLqqUCzzNfZxs34H6G",
  "key24": "2D8EkZRz26ZUn8VfRUpo9mkCoNFek3cz7EgFiTTQKnULk9QBqmMxHoTBLXNiVQVpE3BoLsNhQQSXDgM4iB7gHFSo",
  "key25": "4Ettjpt2XfxjoBN67C6VZCmimRPFik2Fk8Q2FTe8VpqqXSCmC3CpaEjF2opXEmnRnJRhpNkWQcMEgJgjEyRXQGw3",
  "key26": "5fe9LHmefxtihmth8oVJ5GH9r3n5AhtNsu5rfPxn52FWNoG1XA5xsjuYf2ReTQbzCSGMph2P33g4u7q9nCHzbVT4",
  "key27": "5dsdToEQjdTeeCW3UCN77UjWcqTFXWDSyxaxpCBRCQAQeF9a1nYukjk1wqdSttnfeAnJ2SCMnPmYNU9GMDKDH8jC",
  "key28": "9C3w3WyM1F8MhaZqtyfTi2e3jm5h61STYLSi5sNvqCD8699XdgG92M2N4fp5pJdu1yWQKsZWNVoKJznR4YaFikz",
  "key29": "31QTJksLUC5pC4CyGZkVc8s7Ds2XfrF9TpwT3TfxeYnGWNyzFPgjPCZH8K5XB8gJa3XWF3mxLWmPnBBNUFz8ufyr",
  "key30": "3NkbHMy1fr4BLDzCBtaouaZYNG69zwerwmBgEGuDDNhBFhdKQvs5EYKESQkkJsoQQcVBXmwa36z8mLKZ9aqVyJFQ"
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
