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
    "5XQ83JtrDgjNGA2ga4jJyoLqpWXqJAtdU4dVXAnvBa6CR6Wwnm7WUXy8ZoGzzUXVfdzNHm5qLYuZeZzDTrjLc6uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xy9YvmNq3AVSEDNM2imK1QwA1y8RaSS4jQBhxBrEStpB1y5DHsjnMPCAWvXskCMuQ1AQS3XmGY2cxzGiTTS2UH",
  "key1": "3DTL6CMwPhzqdi1qFtycy3S3H2ZPFG8GwZcveeRVwkDTua8G6ARUfZiFXduSzCFft2YSbqA2EHEKmFigMwaHNbAK",
  "key2": "3vESKyTBp4yL3bkeMi2MTN8sPpxrVR5YqbVyo52qoyWtW5rcMJzsGfFhETSwSLGJKCUZj6S6cAC2c1pgit34NwxY",
  "key3": "4b8ZvsffHRJZ9MwQL3Q5ZAPTtLiM7Vn97tJyjtjEyCpVkpXd5qX1KEhteX5p1Uqd86RNcQLTCq3ernQr9x31oAS",
  "key4": "5Yc9MLvWott83NtWpf72M2VSBi5uG9hk3BcxBkMBkkQ55feHSj6v1hQgQsJ2SUR1qL17igbghw7Snq2Ufa9DoPRR",
  "key5": "32wGJJv78yci3xNFJ34WBKnu3JYNSAvU34KyWDnm2GLWYz4uAVtht2EeU2GZotdgiE4Yw59YjNTKePwvYfx9XLYS",
  "key6": "54uib4VyhW2neBbCSeoP68Pekf9WDDsxe3F8viqmQBo8esYvadmbNQoccPf1G8KVHf1VNywD155bEV751ib51u3w",
  "key7": "21zkw4FT49dLKs5ke8URRJCGZSPHmBEjzmpdHokibACo7oTTuTXSmtY5xzSPx345B5dqBGCi2RkaQstiATiYYQkV",
  "key8": "3B7aG2YbLLF6vJWuui1WxsYEq3TW5NoigUuX1kQUrHkfFSyb4SS183XLothcKBkSC9a9bmHTkve11bzu9AVfgDVE",
  "key9": "2ZmFUDoAgdh5EcKVe9Ej5MYGokc71KCauV2bQwJJd83QJnAM4eyXbyg7DXo6ZPN9h9HS1MVYYkNqqzLqNBbW7SKK",
  "key10": "3rLWLWDhDDzDZX1PRahH4hYqk6qRmXPZqsRK1d1xxqvZYanAW6Jq9w7Mhc8WZ3FKyGLiP2kbfbKWDyHgaG3md5YS",
  "key11": "2TEdPLLe2Q2MRQcV5FY9kNZpWE2gwX3JcnCHTLFY321ayAv5yfDGZpQBhTD8h1Q5ET44oFxNWsqdxwKZHx2uDP49",
  "key12": "5wbbfNwNy5pJ5uuGEkyrJaHAfttN59P3V92coXgFv9YWPk4XTjHNcxDcqEQUSY2t49wPpCEmmZ6U1m8E8tJR7jC4",
  "key13": "4Qj5Uogu5m8n6LPW58icVE8HsJWghcsSWpYUWfyhirzH2QWB8gHMuiiZAEdwYLqAxdbrh7QAHjuUK9jyiKSNFZou",
  "key14": "2YARv9S2imosirpYGUKkXv7gZx63qkkyiq7HVUCp3voDMHAgPZphcaNFdiDq8aWAVjuznh44GGiK6c3pVq35C4u7",
  "key15": "5RnnQ9Z9wx5h78G1R3hro3qi1hmsRGm9t2CRCjGwYA74B7hdHnrun2okM6PeW8LmLgX46Ud7G1vLxwF39ULGqzKW",
  "key16": "2JQWfm6oeGPYSt8xArfP2jpwbpeUQkMNPHSJVpLQYcfEEFnSG1Fjxv6V55vc9h9crY611mdMUtcVhdAD7K1KL63j",
  "key17": "2yoCioqFB7YrEUn84eYPLM1epeVDT5dD4SXRqfXXwxVf1NkGMQFu2P6jgTi5oHwvbLo8YBHERJT8E1HkmvWMMt9x",
  "key18": "EpTsEwsE9xErnF97SEzG5U6mgh6buPDLKAEWM6PHJ67P2Lsh5HJLtN3dh4Dstvs8zbsC7R1LcDXmTefMfvR6D6b",
  "key19": "3aL3FCTGtQ9UN6p3rCvddaRX2vw6D3j9a3GJGWv8i6PtY1MpGy7ahYhcXdN67UouxtCdhXTYvimvJhLeMyHDYN92",
  "key20": "264WrGpc3XLMray9BorWcBPxFNLr4nunvYR4QJcspiLm9ufiM8DAMVR3B1t5imKVWF6NR7iJmtnjpy33qTaQmQFE",
  "key21": "5tWBJDrzLkc1QY2Dv3ibDGjCUCvVgA2oydeLnUSEAcfdtsqm6io2bL41bhTUWAyeXU9xai28VWDeyXx9PNRUB8SX",
  "key22": "4NFQnofDHPSGNf5QwdZFjtkMvyJv1xMc4GA889sZprvS6kkMPCowjB4JYorhY4jeHbhJ7TJ5zd4b4wxpwVU3N5Tu",
  "key23": "4xBnvH8kq5ssj84jc9bAWDAJzcAdUmKt21CYov9qzDKo7YXjEz6bii2JwEsY9gSjToLsEZEmg2myfvFvLmWkB2ev",
  "key24": "yLSYf4VrP1A471KLRJkagyTWMyxMx6D3tGZ2TkVL94TCLL8LkHgXuhLpYcobydakMYFZSJhTrUSh2D31GpyxGTM",
  "key25": "5Bzw4jQV3Z4p2R5ZyKfSX3qfWpfTrfRBpRUAWYrz5WsQv8ha2yerrWhb2BhwLsyo7edY1ow9ra1VwnrxnpkJGJem",
  "key26": "4QwvDDRb8ZtXEdT7GB2ucaXUh8fX9CymEcsDgvMz2nQ37xDbgKhTrfewPGwJ6uuCkYpir3mef3HXohgAnDQiLdrD",
  "key27": "3yaSsmGxfbYeRx1pfRScP2mJpE7jTsFKjzNF1fX6FjevKA8gtCvYZ7hZngXL9WTYmAFPmXwHUTSMvn6obRCcmAQb",
  "key28": "3mcgXCi4UkCCLrMX1CEnkxJMUW6LcYUjyn1BEUhwWuRaLKFx4PmV91xauBsafHwTrWUtt2MBnLm6gisd9SMhoRTL",
  "key29": "2nwF2Lg6ZPrqyDR41bbj3pE6YzUZsF9kGSFJ6Kjghb2KB6Sm8H8v6dphb53pCbwA11WUsiZ519z2kp8QLWXwjNxZ"
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
