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
    "WXNtjf8Ykjkzpgygqwek9fXX4pDpQrJYaZS9NtMyZmgzkufnHttQaYkbxgQYKS86e7KszseMLFdRbQBpi3xUg4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4DmUSTbK7vBcEDWPHWfGDzPEiGmbndq8BJ5QVP9d4j3F8xTJhQ7pZQUyQhPJy8VaGgTy6gMW7CkQdHFdi9oxHG",
  "key1": "4nrxJskDB1fubr48UzUGGpaMcohuDyddCa294JuXhcsq7ncQi21iwKNDTb5hqzotTamyGStkyGL2nM1QAXwZSC5e",
  "key2": "5UCosU3LzzfGbSGspCavCw4TyW1FXxZGNQeLpENcQaN8QbFhND5xozCg2Ne67AYrwBdHNED4KE7mJEPrn7dpf4MY",
  "key3": "3FUKjXSnXDWYCLbPgRLwvY54ndrXYxZ8b1hLRta6YWedpWnpQeoAV4tNxtTaUPBARWUMcsDvyRar3hUBg979vu4w",
  "key4": "BnSyNkKhcjsU2xoCLQFQwNWACw8jw9qC5NjLQSk6f8kNiY5oCtb7bK5hCM1xXp589akyMUg2ixnCno3HG9g7uzh",
  "key5": "2E8EfnhBkvT5FyQwiB8tCcTdgJMoNtzSEtG2BsAzbTNNBV9QZgN7qgXPcN8PeF6TuJACaTdvHqczorSPvcdVPWrr",
  "key6": "5M7pnphf4xNJohbNjpCi21MMHq6LNcnirbh388cxiFYdAboNFbLynXA2BjbAvEH58Q6GH4RombZmFKp3frFneC71",
  "key7": "3Fbv9XTiCJ3NWCqmamggf2cZt5k42uB5c1yHXPd4GGFueR1XqtMdeLKbiUoQNNRpAhuEjyiTF4JBaYtWsPPDrbya",
  "key8": "2YZTVmjacPuUGRr8AdJwfqYURwF8vzfPYdGYeedJo1cPKtyQJ7GhCzQR1idJwxVJd6A9wXYgcTcrZ3j45vAyfW9U",
  "key9": "656LnjF3SJkkcm5bm3jG9GU9ZbopBmJpCM7Pm2bV3NDghzGTncsi9sdEb5XCxeXi2hiuYodNwPtJdRQ37dHSPmLf",
  "key10": "29Ghrf8iZCEdzGr51GMLnDWNwJACUqLJaDws1ZgcmeVyELGFp7cxXoC5JhCKJK4UQa1ZRGBQx8G5UjbM28CtBqEP",
  "key11": "4NiUHB7tVgVPonzsFwiYFZTE7mQhmNuDCGh3Df69f6cqrDyaxxjYc2zst7tZiWnnE983DSH5E7n5unaX2gcScTBP",
  "key12": "5qTMMTRHqarJQhgmhiJvcjqAyFZy782hZtfKFJE4F2UTr4Cv9vjWJ5HZQbSjKzQmkiLAx5aarbKxxNtx6riWnhwU",
  "key13": "4qH7KdpwtGPmyWt4LhKEaJkW8aH5f6wSbjn17p5TLducQxUpoMM4DaHp7HyAAVbf7nv4iPgCy1fWKjLg2u3dSok3",
  "key14": "36Yrg9rnyAGa7mSLLxTaSEQSN6RxGVGELVphTQKMGRM6MvFASVqg6yBFcuNVyzA1LV6P2YnsvJCkezmgrv3Mv6Lr",
  "key15": "49KJx6kWiVLqMKFsuYKPdWNm3uRHLApwmsfjMXGKKFmqvjB2fTWAQWbdXb3seoJQHNtynGpLUFu73tUE9ZMVRCGG",
  "key16": "3GVGohmWRXCSEVmQhyD2ggs8n65KjBWrMEtpeg2VMmvNvt6vNKnGgycz4uSaLVNEWNKcGGgUzDHksoSQBYTQvdGv",
  "key17": "56qiDn3AZgPVWLQdtUpM4qjDbnyy1yE7TLGkPMKuxQp7WHgAC4racRE5Zj1ty7vJHrX2MrY1M5YWPRSiYQGMZE5H",
  "key18": "4uYtFJrxj3FBmTChkMBaMjHBhJR46gKiF5H89nWUSNB35V8KKFh9P8ZFkNynu19Sz5yPxZFsVH74ooWBz5DzoAnm",
  "key19": "53LfjQqh3Z16sDRL3s4DRvT5FLZ8879wHFxLVgty5eMaSuRyMneCueq8zASUxD9C9zkrbAyfZe2yX1kUGtZb9fDn",
  "key20": "63rQFa717boWV6v2TuB5vdrapQKrXK4k4tadZT5b2pZkpxCpoU5MxgmsFxqQbA6ABGtFqp9LZ9Jy9VQr9gfSs3p2",
  "key21": "fjEHYrQvjMEHUueDpi5tbnBGRqJd7SAXjufamxrbEHxQRi2fcV5ZRqznNmZT6uTgwotYHVTynRZfJ6CRJZ9xsnT",
  "key22": "Fkxee9qGa3mCSQ2k71zFZWi1WDWqDWLoUi5QG3cJWkeaEUSTjyzhTaw2jveeviMbhttGkuzxoqEdRnCJ9Set9Et",
  "key23": "5VrniDhDJPZYixRoRFGjqSqGiN5PPRFfRfRPcjHZQX1KiPgRrWEjMdz8pjGKsxPBtodhLdzCVh7TBxoyBKs1xDrN",
  "key24": "4SbVmpUg6548foFCPqFvGoWxjUE2CA8CZxreQQmvg6hALb93jjCW2RBJfGZXaAf8PRXWEDnN6K28LvewufNacMUh",
  "key25": "yVhu15m4N2PYCWPA95yt7aZW5WXkhtGCUBiZEm3YMrUVwsHZm2sbd5tGp3CDcQJVB3rukfX76VEKpy2mSv1VfS2",
  "key26": "2B2rmqBGzXdLXQPpX6NWvYZ2DTXoiwRKwwQUJZi66Bjua8faGmHQpcoxqMAzvrvfA5hnBWbKiHNVkdf21EvU7y5Q",
  "key27": "5WJMVbNP4a7HBsxSwaKuXnqrdJckW6J54UoSR4dMJQ6iQwpFKy3soR4yivYvPfhYDmorwDHppBj5YWn3fdAUHZin",
  "key28": "25d8bi8FxFcmiFctvMtnVEaQ53QXt21kh52DckEJb7uBL3N3PFa27XBvH9Rcw6iPcY6xRZgpcrDWPw3aqTLVpVgG",
  "key29": "2YBtZ9rcDSWarFKhXFQQYyWqQtZGvu485pqnCrqHmq3bkbXr8zubNZT4yZaQrC1nkN2NMCz8JpAuJQGb2N76aYzL"
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
