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
    "54HmLr23x8DguXDtXmZjg7orb58gGEQvrAuBQWYNsTq9PHRsZeMkgBjN8S6k7BV6ufnemnakTVXczSsUEfnYQCpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63C2ENaM5FtuhW1SDePSA3NZrexGGJ5y55aVdJp7qsKTwMfGzWd9LiPu8Tvja385fAAeDikTc4oyZeHcT2KuaULv",
  "key1": "5YSWowhLeoXgEzY5uY8s1NmAQmPS5wQy5y6GctVYfmrwnw2Ky4eMcZ94VRTrD4C5hR64nnZQinj3QRLFZp9mN9By",
  "key2": "5GKjaa3bfXdFTs3AzZZMtP3sTPo983G2eUdXz1A7aXLWwGUQSrTFKJEYZN7CGL5AEBRQpHW6zKbsgU2sRQW5wzxr",
  "key3": "4wPiKRJgEktLKxj3yY12Fw8sKsXofnUY84Q7x2cPS2K6PKWyg1jLzY2J9GLWkUWXRzauDhSwwevDNNY5vp1bYWwa",
  "key4": "9uBQrYERbMuF5pDKKydtuPfiL9vpyUmsDZAKSBTMFrsBv8MJWDV5Y9MSBtvPAcCg8GM3n22zacS8vzZkwSSuBKZ",
  "key5": "2GipGj5y5J8guVTKFDk9aeqBGvyuQxdHJ4VLvK7nYYFsgEMbnb8sSU8Ak57rag452tSFu4YpDdsFmFeGU42C3uXk",
  "key6": "64dK2sox7iw5Vk5GxeTEHmexmitUZRjGoR1xKWdR7QmENeb2paFjeU1o1Qh1LVCHf1ryB3FDWHmooZvZ5aY99e2g",
  "key7": "dfquRynTan4SDV8A3EWvaXGnE4c3Azkzs7xJEAXZf4WVwU8goC3ae3Bwjz24J2aRfAPTaSN4uSv2hfd66tM1aMp",
  "key8": "3Yj8VhnJAs9TAqWCCAruCXKpbkoevJLUTuJmfbpgJ1aUGRe9drU6d9jV3x51vL7Vpdch2za3MrJJigGBXGbT4Nrg",
  "key9": "39x5zY6NGchZAvfpH31jnPURiNd7oGCmktSzU1Uw7775FKxvFq5iQXiNsy1wS71esEqDEdzLhEjn187WKat2Tusf",
  "key10": "5M54u8cbrGo6ER3RD6QyVe2xKUbyw5V4ero5ukUB2G4Dy5TaeW2Gv8wFQXokXXtTce672DLwnrxTmd6L8fu7oMaf",
  "key11": "4ywxnssbdML9zzRfJCQcArC5VgzC4W9GF19gwyHjPjJdwdZNSaFJK65zdpQmKnRNJ2K5BQ4xdudZAwBhtbSsB6A3",
  "key12": "5HbEpN6EAticcyEiXLrB5xQgQFUHJVQRXnKTzPeWdZCgNHE85nS75QH9JFSqCQanJc5fx4S69CNMkFTDNUchsdEd",
  "key13": "2QEc6phyiyMd9TRCGPPyw1qF64a7D4KuJ1vkuNie86jXS8uxMeYyqHGitSZDssvcQk9pWqxJXSkXjKxhXQdmgw2D",
  "key14": "bLTLm1djiN5JeRytduZ7uovnSFtGfUyhJ1mJPzAoNsHqhnudmiPDZABFiDqMrxhwnKSoiFzQms3bg3g7WK1dTyv",
  "key15": "mJAPJCyNGRZA9k8Pvt86ktvCBjqteTyfs7E4guApy6JzBDsVcEc8VCZYstB2i1uxs2CmxBt7roZB1gJQJpcAqzU",
  "key16": "2sz5pFAdzWfMuqJUMaRQVW9oHNG92nWnPa8BPqY7RggugYq1ZmAXh7K9Ay7fhxoCvzgAHmyC6HWGcVPDE5uUrjAq",
  "key17": "54GJzpxF58xixfaicGexaFL5URTfC48GjT3Jd9E5bRRDJasuqx3XQHoWmC5duRBw3cFbxz51AaWCm8c43N8fPawA",
  "key18": "VkfWUwzc3yeqeffHJhhVYdX8NffK68DnqENBgyV1hwwo2GZmuzH2NcbuLXk4AEc77R6eNamdWFSUHMaZDpvFKF2",
  "key19": "434r2wq2Bpq6koeJb2sidA9MuXz5Qj1tH7B7NkyyMVDA8QsznLF2mi3WouPVhnoVCXd7W6iDeB1LCfHhnTREpEkq",
  "key20": "5LWKcN4zyZ4N2jgyc2gRCCwpCdM3xC7mpWrBj27zzBb871zJwPMqvqyCnMmKuFzmHWumBffBdjrz6hC5smg9EcUE",
  "key21": "4LDC6pvxYYZujRcDsQC4R7StV8BuQVcnQLLfxL5ExFYx3AKjDG4q5fo4bfP1TP3PjjHETXYxhAn4iYBtP5N4Lnu6",
  "key22": "dKsmbm66SqKPvNb5bC4e5gHvBc9ouFaN1wdjVannXePouaH2B3SpaxfQEp1md79Yy2NTSDFbrLMw6JHYKR6yHP6",
  "key23": "2B69DiBXd7eZDkNGkYX9h2daq2BQ5ru45U21Ax2XxaGkoEwuCzQEAkgQxosoyL8r6rbBi1gxWHVGYc1XYAcdjVUK",
  "key24": "GCHZUDwkwhxr8T13Aw3TAsiwk2gY2Fwz5aSrMVrughX3T7UHzThmYbY6xkiqZ3BX5ej6kXiUabD7XX8zNeSfKF2",
  "key25": "5c684gkvmWq4t6wHr6GaFTRJqpaHtPjx9ndZHcv2pvRgmaZcBwQKtXpKsD4g1ZU5kosPYqq168PLjEZY7YU3Kq12",
  "key26": "3ev46mhVBkb9gdBAbhNwcbE6onTiuRzqHUTw7ZN5TsRD4qWgdKrnwaV9PS3Ubmv4sD6s1prRLdUgQvQv4UBbi1aG",
  "key27": "5ujn2CNYz3rZ5jpzqYksUtAYW32Wo5GGvLem7KpwYekPUCWXh2n6C4mc63nTXXxtZ7h1oVFSUXN7YF5H7LDrW9vE",
  "key28": "pF1gdwhXkM5px7zPjS4RYMim3CR2Y41aUsoMus46a6STmCfZvPZ1vUU5tYcj1ykvEnYCWs5cEJfmsK4XGEhyHun",
  "key29": "yfvz4rXRyRdHKUsMZPYKtQwjJgSZSpu956YKWshncxswX94K99mCqbYBydyJThPFmCf5TMhbqZ4a53QhsywS1AU",
  "key30": "3NTjyfyizuH8Pxs2k1PTAAbmKVpz9S51QPX8wq6qWQiBTAAhinC5pgzPbgtZzrjc65QTXqHJPwbpnALEMrxHjjm7",
  "key31": "3JBo12iLGXkBmdemrF3e6gcu5aa6SedbZeBcBQZQ4BhK9uwpNvJX5romMh4nY2z84TZqAY6YtZQu3utm8an89Wnd",
  "key32": "55vpEykT12zv631MVM3a2qbnWGMfBsenraHVaeZJXq6pYtAWJoMRhfVgdfSsombVXEfTXpi7F7jHyqkDN5Lhrnju",
  "key33": "37dEJTGi8QdKhqVoRxkDAVXYKJKyEbzGUiNc6mCvxWLJm61hBfre2vAAsccu2hkiQ7WGyQZJ1o8bwF8u8pgZXYmu"
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
