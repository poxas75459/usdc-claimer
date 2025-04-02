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
    "2KNq3RGA4RkQQnkzgorLn1qhviMTMhDmPjB39CD2eGC9LmPbyTnsFr27QZrm9DKwH9dZt9jNoqgDehg41UjxAkSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AUMHQqM5vVzSWESiJn7N3rdb4X8cj8q7srwASoGXK1fNpVr273UHpZ19zPvB9jNLJtCLM2R7oZwQ4Awc7zmnKxM",
  "key1": "33o4DheHUQfTHBTZAjzyREP6ZUuuEBpfsAvUdYbv1eyLJy41AoJuZv9bgQDis5PH84ZAqe7FZhqxr3rmtXc5AuCs",
  "key2": "4bXQHPQFVA5AKbbebBJY6iZguUXh3JK72M8nwoh2Us38ENEzTUHqEnuV2ywCqnG43gVDUQ4M8u4nDfscmGrwmssz",
  "key3": "AojrVykJ2vD23cdyrodnkhWYv2rdtgqEWhyXMSFm7XsiFPcBnVg8JyXoZfSspG9wuPb2f1wSYEUWYm8o52vvNk8",
  "key4": "55AA9ej3NyzppY8BLM4wStXe4EYX5ZANmie6Z7dXLEddmh4ktPryiFdQv6A9YvgmaMmBr5JLKvJpmZSsNL4fzCZv",
  "key5": "3wGMrkfYxVjRX7oaeyMg26wrpwLWfo5fMWGBt3AuSUgjjYFwkJ4cAvZUDcZu2RN3da9AB5DnEdXDrXByysA5dhpM",
  "key6": "5cenKL92n5XwpQ3nGoHDhABY42HPWHmgKQTKP5BQ7XvzpeVYY1pDdP8J5wt5kSGpW2LJmfznAbQB71LQniPPA9JJ",
  "key7": "3qoyisC5mw31ba6YJMrN6oWssT8Vne8qhVZKAQprz6y5FpGMufXQBPc7PxUQnJQbz3pxLozheHK18gK5QtagzfvG",
  "key8": "4FSkxEQAq1H8P64dqyyzyrfyTxvCvzAx1cWeNVi149KzDGQuCWPaHQAu6EZCDqrJRsJgH3UDZRVPH1aRVPK8R3xd",
  "key9": "64unNqCo1BZNPeosUgJYcEdvUVic1RYNgopTsY6STuY8rrD3dJzntgpsGYZU6xd5nWgVZF2Tj35UDqryuqGUNTvr",
  "key10": "4u2H1AmU7tDLt8sZs43DUGHyQPXWhKjuDa7ipzSBwVcCyriZca1pf9a4Z4xHu2eTVjsohJZhx1LPPoQKVdztTdQC",
  "key11": "JGmb2vMgaT4U46rKYSB3ryy1dmDFf4uWQtU6M5pvN3YpXekpP5SQsFfp4SfvhJLEHkY4GfLUhTxkjNPvDPMm1SA",
  "key12": "26cRdu78K5vBXYmL2WEgCeMGS9GyQXH8LQSHzGdiMmP3BbpEpWyipuePxNFHNAVDZzAmBiv5FnNU95LR9U3XkLRV",
  "key13": "2Kbd4a5QENWTz6jYiDR2ygUdngivgMaJopUVzAjd35eDE6RdBbhvRf4bUZ4RohjE7on9SmEUbXtWywF5KfggoRbv",
  "key14": "454EDhkTddFioP6po2RCf7m1799kCwyUKuknwbiJfJh9fPmDuFAV2hjzQKSXfesz9i87c4HaVAHnhD2wZhFq4NfD",
  "key15": "3A7ATXqrQjNEEgAwzoU2qNeXXw3Nx7fS8zUb2e43sQ13aN6RB6LdrMAdmKKxJY13ok7u5eQFmZvMwYHCpBjAdsV3",
  "key16": "3c9F2r7C9qWgty8Qg4Vn3zQx7BpSQLhtkH8VkPU6tKrhqatadEswW5B89EadAZBHrx9bx48H5zdfMqXJBJgVn915",
  "key17": "38LMtTVJw5ub919n7i2FJq6fyLCWjAiNCicf9f5idRFovS38qcNJorRLcfw2fXYsgAHa3FgsRQ2Ufm9yiSSe2Vej",
  "key18": "59445jsXwfkhqw1TLPouquKCN7bPUPTDk85ZDUXeqpL2XFeiDuJ9TFpNDZt5GaGDuiv2WzqgWfqC8X9QXyiWX1XH",
  "key19": "3NJ4Yb9kaue7XDcMfywNfD8L41tr4pYgovMaPEiVCBr6snWs63kugrtZSwQMYMmLMuDcZYEdeez4duRAYRhZAwp3",
  "key20": "fCsDUrzezsRXjq4zBsHN2qPYYnnjq3jBZNLm7tGsbPj1a1udiGdG8EKATksuJpZuq47ejAb8jBgjK5GHviwV6Em",
  "key21": "4vBk2VGtbG6zdhYhJLgyZpQSdgXKgC8AqWgyXqR8pzoMpSTWLXSiCi4zh9fKyi2LXcv7Y6GpUdenhUghhqpi1FvT",
  "key22": "4cCac5pNJ58gFNYz9obatBubYrjWK3juxjQxVhX91fS35LzA3Ng9bjW3ou7pQuhJyxJ3tnAJyxipUEt4BNgHGm3e",
  "key23": "2ww8GSWxpsHMuQUwJBg3yaDTkBFCT6enqPWr8odu2ifJorcV54Rf5Gejx728ihtpJeCmPWN1DbjyqdtDKH4NvQ2F",
  "key24": "Mj5ontFtdA1LgSSVzvLQbLLrzKFFr8o5jBSFW39nNbnyJjVr3pdFg55KCS4BMw2couudRBfUjMAqq7SXzZrSFmw",
  "key25": "3JGKqz2EeqQJGytFAyXYbJX5nSWXSmePhm4kxcivAw5wnveeHMCrLQZSzQgQt6gzuQKo4jCTKsrGMAAa8w6YcvBD",
  "key26": "3q7EccEeLWLyGiJGdozmFdXvTb5mkwp86TAr3DfGuRzznWavvFom3Uu6xPujqWurutnEF2o4zjXFDZBDanfaWqcA",
  "key27": "2spXiyMCV3YwQ3gK4N71JdC361BywS998tVa7sUjUKigpEtD1QpoJHvg28dkGzYTHJTVtabEQJJN1rUaTqLF6eaC",
  "key28": "3XjNPXpcj6ttsSxmpGKLVfuxo7eBbGXzhkkb7UtG63Ce5uFhRDfcsteq67tZm7Ppqe1nHQ1MtMjFGxxmjt6jLqeL",
  "key29": "WVqZk3HgdQJiLcTKAyXyGdfDQ8H65D9DSLgUdJ1XkoMRpxMae2FxqMF7zN1299tFmMFipLWPnG95WT2p7LJxGQR",
  "key30": "5ykHJFJo4KSKDNagCiNoRpU9dK3UHyAcN1n3rD8TSX9of9teTNnocWyZinxzwqmyMZuUZq6RBXFc12D4FXPATmau",
  "key31": "21RPg1R3WFA6oaukYVjD1edkasmptiyC66657moAjCrur6K4CuG2ME4gM98vSJPKc7ebJRuE4VacuEWaPMPjkk9k",
  "key32": "24AmjH1Q782ajhni2wijFb8P7PhowcyE6NDX2Kb8NZVWVeZCGwkwwzNFpLokMS2wJ9DVfWC3VJ97ekhiHZhyRU9k",
  "key33": "uK6iiW8hWgraRCzADVFpEbnL9JCCUCWhGzg2xwp6qsiWqhgg22MXYTP5EBhZaS5TcwL971B2AJg9nQau9QWKu1S"
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
