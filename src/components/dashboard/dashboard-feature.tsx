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
    "4JUwjbNYJ9Zx4VZAPvK6zQi8obPEypxz6PWno1rt5pBVpTktBanPnQaKoYDaTwHsuLNXqR3agWYvyzsJsw4s76Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2daoroYVqXiDqaALa5QkMFQT5Uk7CPayWHD8K9tuzg6c9tu4MCbgg3nKNpVhDzEs3wynJdtAjWfb79qGzS7j5wYs",
  "key1": "PrZmm2EQHd3mnNB1mArVMstZEQHYMwp13V5S7Qa5792qvUiZipBnAJcjNnbZGfFSfPURkVZPqNyRf3eKKbYiu31",
  "key2": "4FZcY6xCLeQxYgWXQmdhbx6TBSsWwWhE5WqnFBFK8AuEjBTSQUWRoiggUqVsvGk8PfRVtaE4PF2E6e6c8Avmgtjh",
  "key3": "4SKvW3WiitngGmXnC8KEZA8pJ7qVt9HwyGiqtL1i8127F48AjrZSEfYxot8a5LCDi1hXcbPb4doJqd92gUAdYaPg",
  "key4": "4QR1cMBo4ntfytnWG6dCTY4DFmy2y8XY8G1nEDfH6gBvo4U15s6jiV19ecBEAYuuvnFPahotNKUczwE176LMV3RM",
  "key5": "3NrTsQxaGDVJEhe8wnALgbAk2na7uCXzERRXdXDbRhmnbG8ynPSixMyKwV2xvWeu967yHKQHChGJimk65zcoNeNt",
  "key6": "5TENjWn9YbbeUPACoHuCFFaywPzZWtBSnkHpkvqpTsF3Yg6ZxxEec2hEfWirucAa3xVj5TwwudQHehhN9y2tepvC",
  "key7": "4Q9T7VRZc7U8f1EF3nsKc5PaRx1wuywE5eMCbtpg7PiXuPKU9ZzYWeKURsq3aqQBURb7V5gaBP9Q9Thu9E5Dohbi",
  "key8": "xZiWN9PUzCHmr6RFaBhhr6VfY6wao5EyWV8GxygNip315NURRjep1BTRUAybNRPnJD9NMLaxStK59YbuDZWXvoY",
  "key9": "3aAjvJe1mnGWbub71qP8MNpiXFVyDGCP3j8VVKWQbiZCUeRyg4qEoG5JnhC85niHA4mFELrPkuA7Q1Vqh7zAaX8T",
  "key10": "48tfK2EhzRWWvMhMgS118DajhDVh5Zk5aMocZ6tUJqCmksFnpk19whqxg9SiHHJePeC1n4rzGYyDZXgbBDVFuMMR",
  "key11": "5jQz8whwUZbxA9PgSadHMvRKbbf4Yy5M9H5rNywL4VD1saQpwkYuJf1jQUUcjQtb2WHtAVfGJqc2YCybSnFqff3q",
  "key12": "67UVh3ssG29cJeoyp7YdBkeqw7bomJETgcpuCEfkr1rrkKCBV8RnwrkTvw6ER2WsnHoaYWe3EN4LtDUunsyjEgtj",
  "key13": "2gWB7fcZtRSFUB3CSfCjPwYv8hGBcvNt9qLHRsoer79yPtcP8n9GC5tiDtM6r7LjyBnD72aYV6keJVXyB6E1bR2x",
  "key14": "sCEGTUGPLC49pZEruzPBFKbqbmoVwfbHXcFY5ZQEGyUhzhhUwKL24HHxcWRDv9PozRyP7d6QuaMWZ6ojD1aJ4zL",
  "key15": "5qLM8JKpLueypjzD5hQBbuNaiqG65t5Kvzy6LSuuV1Dz1A57FuzJAdjwcuAtmtdK2NK3X4rkcHnH4ixpfbiCGpwx",
  "key16": "5cGabtGY7njaV7Lds2YL7f8qM9MzRRzDxvgSkeVBvsY1bsCnvgKejVeuxUTtgcC2Sg5iR9C7VN3MkcGbbiagqmkc",
  "key17": "23vMC3CWiFd9ctsLtTyS2s9No4EdEUJf1ZLhVsSKRJzeDH67WSFYFBu1fduc4BKErEoUrGF5jAn6PaZscjLhoDjd",
  "key18": "vQpm7QWfEvsu8aqKBoQ2MwsrZkPFM2yK6MUmiRpRTMNLRLC1nZHPv6c1bdj59D4LifpGWxCkfdMMxVtq1inQgjj",
  "key19": "5egXHMfQfDcWeLoLhcPDYWHK2xxdsLGmeajStFaAuh5bFB9rCj5DfEmV4XsgNN8W2VssUtMAy78zkMbe2XCRAy8",
  "key20": "2GjPCMQjmuSFpPYpSkgLUhfyTmdDqmvYqbNpuCeArsBKxcnWdp4QzUcauBLeCfKtJ31YbyxvdzQ9aHPfQkZdYiDP",
  "key21": "R9bsntWmwX9dwJf55UZmqGPfPgFTDzy5UXKBpGS1MoiPNy5PGw6iWhYYTepXyxJh7xuKp4tELzF652MwTSuwL4B",
  "key22": "3LwmawkKYZ6QBZcRQLPQQ2GJEfVoCw5SLADHKEBAGr5ksG548XTpmt9rqpw2oQkYC5xoPRKdQGzLxT5cxBBwjRh7",
  "key23": "3WbnQTGniURy8KGcNDU5MvCVuWcNfMDsP9FXjR4bxzZF1onBWRMojczzutd9vQEv4bnVVw3nwFXAD4EHDHh4vMfR",
  "key24": "4TtdbbxaTxie1PZBWnr6dKXJd3mB7ibDdbKSCTsd7KutxXZbTVMCizasEX7fwb8VA6CRVB5fhCr9esdC6qFT7sep",
  "key25": "vWGiQqHgzs6Ka3oxGdL7Ha2LegQfXrSE5XiXGECX3Lr45UDYrGbox8AEQKvRsMz25o8AcA33PC5Lvh5a31k1kbd",
  "key26": "5vQ6m31YViDZpypQ1w9jMNXjkg8S285uKE4QH7zK6FBwBpRfW3uTx4HxctRfZi3dZhimmh3bLvL5bxsknRQieyMS",
  "key27": "5VXS2bfC9sUsMuATRdHKqYZNjccaZYQrAAfaBjmHxBz6PTuegFiUTTznPDeTNETUHj2uN4iUtdGQGcaFBEGqTDLW",
  "key28": "2ik4XyPJNjxXDiMEtcLJ9WXbhgp6JvXp7jFsU89KCUH2Spjm4BwEs3Zf1R2AukZEiL6uYqFzNyqcKqmp81PUaMmt",
  "key29": "2FFn1QsNxKqde73WtQkgafXNodCSwyRLXD5nH9oCvQhiiqxEcPnJNsd4jaLH1qBMzmN3Tw1DYV7idj6xP1it75Az",
  "key30": "56dmqhKsdHXG45AZB4nVGg7M5GSPThXLfNZe2o7YfKJBPK4FshVSopkz3KG8ofubeYb9GkQoAZqoGFwj7V4XjfLu",
  "key31": "4RZa8Rwje76tDig7Xha5v43hJAEwR7JdQVuz7ftfcttt5EHTC6mZseSdMmn3CikkRG4231UfDmwGKvyozHDcnKqj",
  "key32": "2VY6aKuUu18HbWdg8gVtrmqzmiAVDpr2Pbo787kxrdFK7GPqKSc3Qh9LzZgjxF5DiHDa8ydJEJjCu8TfDzrXiVnU",
  "key33": "4YyLoM3Y2fddcKedyTMpGJqWUQST2K3bz94t6AFsir5YNXm4N81jM5PtM1bJZPpSJEi3bUbawdUhuhCMcLaTQPfd"
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
