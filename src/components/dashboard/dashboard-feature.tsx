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
    "3KZLukVizeeP484sWmUEytNiWjNLQbwPMEQ85ZYwk8PYafMejqLevnkizy2oMSvVVRJbSuDnWMZ9tRyiTSsxAtLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBAioT8CQwCNZSwVzSAE2G4s5vo8bgk5gXettJ3xCKDRpZWXWKAJpyuXEFevaLDJhKVVgXVdeUYSu4SJiMBVt86",
  "key1": "3yJX6eNykVKxSio85z12PWYwBrc41AJYCEn9ie8o3Ytt2eRGp93Ec7ea2dhDW9bKy7oKhEujLovH8LBrixzR6r8Y",
  "key2": "5ssNxs6sPBafc4KuzHvbs8pS5YrZXiyoAA3FzP7f1p2pGxvHx1rqUHSSoEP7wGVvd5wo19cvy9wcr7w6usdmwy4p",
  "key3": "4adAEYqtXu5qmdZtZBAFC1qnCAGPDVXC6uzpxoRdPUNtoELS2eC6qAen5ZDBFCuAgDH3Bid2rK9Js6k8tQhVAm4Q",
  "key4": "5F7jvYEhFmaAzuvN8wJWVf7creKDc9YZ1EeMyWGohFVyUjy5pmczHhgkYJ5QHESAjuNvXZKEDzHGbxAXsM3hm9Mz",
  "key5": "3qsdnToLcMDHwmbFwQUcMfV14gk3ttesVuHYxvXyv7m4U29ZohQY1Yk7jccKQVP2ZrErXmqExyKbNknyz18MPNDd",
  "key6": "3zsZadhqbyMwK9co4CZWuSJjCT6bysHNt6eqgQKZLCDQyaXbjUdNGmEDzhE8oWY7q8BMvHkdv7Z3nPrnoCLZhNwi",
  "key7": "3p1vNF5uEDbDhz4HT1DH9asoV46H2TKHZiFY8ep8kdaYaQoEtNS967u8iLsTngHv2zxezcuivQYhd3aRi94RWAFE",
  "key8": "5zFnfP6HVySKiyymiP4JqUx2DZTS9FRjEEXPQjWSNFkUtkKpxbf4PrM9FebUe7R9ukb2ir7j6icYxdmWthxj3mCU",
  "key9": "4AFGwy4sYB3cXUwqiij8rJ9VQJRDQ6uFkWEXJpWxvAL4iDAh9cEeGWPTp9Zii64JT9Whh1QN6gqSUJiLX6WK2NSb",
  "key10": "5VdaLUkUXahLGyb6hX9bVrBMF59XA8Z5hkbB1niJRKNkXYU523zBJbkbdwZiMnV7b5pbqT3gTcNrKTzWDGzFzAfn",
  "key11": "2DDmGSTgFG9N4L3Vw84nP12ZM6y4Lxre9ZWUbAb9wKwNHcEveQzTVzQZAF3Ydhh3A72wjizNAk3vJXB4xnfpwQ1C",
  "key12": "4Qq9wEfGX2TvYL2im1G6CJWWmkkGhR149zW4QWrJtTF6WrZDHwgXwUXdPRPsQvBULQbnhFu4w6UekFh8Ekk8HB7c",
  "key13": "5H3iFe2gy65b4orsUPGGsS2hVwojNZSjEbd6NWhTGJkoCSzQMUPJquHhX1kPH2FKozXf8sM3L4q5ueDy7WueT5Hq",
  "key14": "4BYso5GdvFkTd3jyhLLGDNdXBzmodNtUpsw8d5ymRT8oRw7skEPWgLWUNnmNM4X2MY1a2s315J9dTAkin8RjAeDT",
  "key15": "3FyDzem1NjrVsts3DTGzfNrzPNbLBKHH9aCUu69QhCY8egsQqSdzwGNAdXAqGXFsjna8Tkm1jgy4JC6veZXpTK1r",
  "key16": "41P1xzmbJVtDBaeJnuPJwDy2Nndqs8kZW4MPD9yotFMZesHAEh27DBmpxaevpRaeBtxsWNCUxPX3BtgWogKqqLEr",
  "key17": "2CZGcU14Z4gvqUVHw7c6PJFBa37f2edoyXhERP1vBEAnZpvTvBe7RxAoSQwwu5keB4qyL4QphGtWewH4EneNfN8N",
  "key18": "3ZUmi8DDhaxcWJoqeYg9r1wf7tnKzj7PsxT5cReDZHqV9gJ3hqG3ikqYjRj7XzHwyW3iWSebfz8GKqdorfXxG6nD",
  "key19": "61Ls9YKn9dy6xfvzXMfnj7A6Z2Bm8i3DqSGMqoMJNQkRJPRgwKEQwmyPsQETBkHxzdeF6t9JeJPEdMRop7WCjiTF",
  "key20": "bj4y66JebkFn5L6eaUZhmbC2XTptq4rN7PpW3E5gvzwcZnPX7NMea2LiJLKNMUGKetx94CHwqxasgDoUr9LQ9SR",
  "key21": "BUjkHsfmfrCdMA3AuEhsCThvsyRuzLvmYz7AfrnWjgnxMadUemUnQv4RtLUsbvDbBHt7yuZe89dtqceh8bvRYxd",
  "key22": "5YMCNr5Qwtq2HCUrkD8FVbSnPS6R524Wvi2542PegVqJkHWyK6gcaLHnE5dYyirmE3tjLTSLVPjroFVsi55Kn3ii",
  "key23": "3jB5jCDhZKxjcRcY4oZQaisBBXrUMwDbEFqsT2MW5D2ZMTPzEB2P9d9Szr6Y2Z2w36vFfkPVXuS3zdjf8woYHew5",
  "key24": "3b2bT32xW8kBY4CriVadXLs3K1U7ZSUH28rKiygzLrPumaokK2KiGUYF9oGWr733T3yCVJDrZyvYbCQuADwzHLw5",
  "key25": "KL13HzCL9PVsvBPty2xSXQB5pYNnxj4EZXvKFbYy3ETRXgiYvaRsw4nzzUGh8FTgcFA5oceSDZ1HrXrHkRBaMBg",
  "key26": "3Vwe13pBg6EuLoYPWnJ9LA1ZE5BfQodvDRb2C4bXoZ8iAHpFoJCKzJQQ77YNCquqM2GGz7GqJHtdJUA64f74gQkn",
  "key27": "37A1c5hwUX7umGiq65XznqL2mCiJkG5WKLb2X6p1a82jUi1Q3UVoHShjH3ap65upyn5chGLc4Yf8G1fujZrqGinv",
  "key28": "5QPt9Sui2VpRAhfrFxWi2vc68V2e9dcwoTv4yrSnPJLZtgRLt5MTPenT2dTzu7pd8Vup9rjTvXEqBr4PCMS7eDAp"
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
