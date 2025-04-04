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
    "5EDfUSQ6VZWafLBvmpiawiF45VNxK7hmDCaSSo7Ue3bbrFvjF4mzNWLwn96VudyfbAQv5C7NpGZ88cGmiDKSi93W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zr8sC8mMfzoU7YPoVKzxZRr3gC4XpPwnRkDi1rSrpMXbL3LR6Vu8yMbC3f5mjLeDb9RZ3cv6qmotri7UA7vq9GK",
  "key1": "4psWQDMsMboMbatLrehPZGhC5HC6LXKxbZoDe1k1MVkzt2fvirA2jUPwLaNTf7Sx8XnEew7hiPggjhDy6sjNYtxu",
  "key2": "2j3zmWG28zrrrvzLrrHsyL6S5nKMyWoRevCVsF1KDApUNtR6NGHJLYMSu35CopLyTmK8s2s6mWLWBJYpeH7NbSS9",
  "key3": "cqLkJT5GR3CRfxHXQp58Ptp6N3q9HLLLQzzyLtH4A9dL7hZLHPDNTxYbAHeV8HnBqeLpdqsYBPxC6ZujLXDYKbK",
  "key4": "2KTJ8yb6aeJe2tjq5ZtJuEFZWEkQndo6onfL9Crs9GPaHM1bK3KkMHrziVN6LmfbtxWUhP1nSpKn7ezs6KZM3c7a",
  "key5": "36UMNzZHqyuAvMiWAtEJsMhJJTUEyNdtRtJSghpEVjvswQ9h5dWgFg8uke1fHzxG8F4TMEzmwNUJNVjvcArF2S1K",
  "key6": "5LMhZJVQ9tCP1bRyMfNz3zxHpryaXvrKhfzVtDmEufJsopykLBNt1LkhD6rV1Mkc3DigvdUGqQ2z83W5Hq7VnHUL",
  "key7": "5TXDTzTK1Vc4Qf2mJT4m8iWBwZ3vjecqd5Vk7aehjKcNeXEg4tQ5ATwVMchkzEkShAe6QySqGZTh4aWZbkgjZZb2",
  "key8": "2dGzZjjJoL8DNEnsgcmqF1P6wt32YL6DDqdsak6PDBPgLLGxzpirtgQxEhujxGcuDVXpgV789F2jCazcVYLewnU5",
  "key9": "219ARz9PQzDMpmGeFSMGVRPU3B3PCYFKv583pfCN3BrrEMFpNSxpBDC9CnJFJRTWd2mTBcK1bPgHLwH7AFLGzHDZ",
  "key10": "B1ZmrvmQCm2DZidoWcwdM4gmx2c9zh47YX44TtNMzbtpGd9cmjrwmvvdWutaxA5wEGro84HvSx2aqRs9BDZjHVM",
  "key11": "2GD5uU9mwyqVg8Qwe3P2K2fsXuhxhfPkCh7Rsev1PU2d7zVVDrjZisn12hBGihS84E9HJNA3FphmMHkf2mxVv4C4",
  "key12": "5Hr9cmY6RHw1HiBHnZaeB1tEieVRwwgQ1wRCfVgxsW8XqziANf8dQVqpdZYoMsuYXJcq2Vir885sFV83QNWK43DF",
  "key13": "x1CELwEabS395HcTnV7WZu4dEQMXrfC8Y4pEY8LCJKtQtTfRSKkK2AXNcYbxpdVXxN3WGVLjwLgZzoHpHeGMdTG",
  "key14": "5EwJyvxGXoKTyMLX68xrv1cRpfi1fyU9tU2xAo6QZ45TSeWYGJRKJ8fFmAGBVZ5Ax3gBq66W7fjrp2YZe7AWwKWg",
  "key15": "5SAwSRmVgJtY5pGQFZomRWAuJS4bBK4pYHNkF5hTmJAjYDEELKdTqctVjLLBLvKHy1QewNgTkQqkSw58r4ggAgYu",
  "key16": "3gmSUS35cDqiQGUf59ZAJPGSKAAZVyyvjYM6uxU818rD5HnWacSodNHDqwNykNcn8ba7dBCjdgnS6pvoYG7hbyt4",
  "key17": "5vz5UjKbYev658bEt3NUyiM1ftdqb8d7RFL31dvWD2fawFQYrZ47hBn7gANo4LnfB3x1doXveP6YANSEZC6bgEuD",
  "key18": "QbSoqr5yZRnWq3v7fTNpGsNV6XT7gCWK65gtgh3n2EnD3n7S1RKHzxhzGyyZFYo7cf8ypryACRQbetVszqTozJ3",
  "key19": "2Xo1LNsi8NyLkaxxMoVVDrM2epxoMLJXP3zi32UuvvPs234uxYgADMVNtDAyAYbhA1RKz1W96uQtD2KJxBAxQCjQ",
  "key20": "YJ4g3goR6zV2z2CHGwVtG4EumYmVfK77BqVi8Z199qodfoXk3QY9A7tS3HqGNF8bomh72bipfCHqiFVcu8TxDmK",
  "key21": "F5u977U5aVFHEny7wpTW68JzBRBk7Vcq6FdXosMqtJBk1DhckGEaxTUPqYtewd4YhfGtS1xov3TZYfwoBejjMhR",
  "key22": "DpytaL7WakwLvktEgWbDSWuqaTZ52tesu5KkWjUJWHJTsPJadgqH4cicmfdHrH9GAGArdUY3yeRgSNUebHoX9ih",
  "key23": "5YkA2v2RL6dZrLSCv9uv5JLhkaruV9RBUngTSV5v8zuhCTiXDjH4AQ4TcxZaCj8mzmg4RuRJR74QKayePLAXGfdk",
  "key24": "24qfC3EUSTJpz2zj4WR3w3MDCdzK4gFy6RGZCLMmw3z6hDLsSd2ZrASksk36hHdrTRaL7a7BTrvMNW4bwnfkS8NU",
  "key25": "2ceGpJhwgoZaTP8xdoyUAb945WM3BSKofmVPazHty7F3cxYGsh3UYmoFGGr52b5LPcrqLoaNoxEWz4gPhdowKGqe"
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
