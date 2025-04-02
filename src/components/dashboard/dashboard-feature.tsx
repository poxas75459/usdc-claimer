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
    "4oHp8YKahGtDdFPPT9vVSGZF8UJd3PtcLsjSCRLbXRHNpbNBjB9pQvfMAfcLhCCauhB35fZm24xmB1QuBgQ4yefq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXCeTKGWqcLwgsmyw3vyXNUZ2shK2Anpp2kNk2mJ1F5CQhmUzFx57cKGnsWJUzAnvjmJw4k61Qqp8s3LgGbNDrv",
  "key1": "4P8su5pWfhWV3AG4d5ubjYv43M1afTsGDx3xNxJMH1nei3D9JaBizYhmuH9VAwS8SecWm9bF7h7jFLQCfh6R6whb",
  "key2": "4nz7FqSE9PZGuApGirJzABdNNVE7LUF9PM2De89UNdv5AWNMCHYZNkQfS7iDq33KuSJTPZGkTtgkzfq1PjNx2wt7",
  "key3": "32xmwWZxsqRwcEAN4nSaDPPK5PXUQVn9XoDCBEpX364jMvL7BExDwjh6Mrnb1Pig7xKLRi8DhALzutnMbopZg6WQ",
  "key4": "4zbdo92YBod74iq9oZFdb76xFSBiNLJPt9u9vc18P5FXGReiQJcckX1tBGjgc1uZw3zKrbaC5knJzKyJb9JY9Qr7",
  "key5": "4mwuinyGUsVs7XBbM2urYAqArK2QZkFRJy8pLCMmyAWUAJaYpZLfBH2f9PqUWaSnTnPDYx9xHLtvsKR2H54anMRy",
  "key6": "3YKpAjUsRT9jbDywCzzh3cs5Z8YrEa6BsZdN6pAvweP9MzEsFjCa4fgb2RbZegsmYteNh4GkE2SqZm6hpdjZZVyX",
  "key7": "5ScxoMJ8Au5ZpFL56fPYjSZSfEidPswjx8u8M1apqnzhjYeArJjidaKei8k7DNWHqMtjoNHHYmUAnWWGV6obcMjD",
  "key8": "5bJKCVGJE6Zgjm7H2qTW9Xh1dsWsF5ZVa5VfzAuME3Dt2hmkkpGcPbNEjNj9E2yJdWpMbvRaZBuamNHCF5FhM7iZ",
  "key9": "gcrLP1LMDePSfgAFThagr45GH4AakCmD5MYALfYv4omWzRzj6qkCC77QgT2WAEzn3N75Mo6xuVBK6hxWd2PAgxf",
  "key10": "2EXSJRChbXZjDpWmJzJXKMVmgZEGiLyTmjQCJkqXokYAtiKUJZJgg2GkNQMEwaDzNSuDfg3yMXXzsX7jy1iQ3L84",
  "key11": "YH7su9eSEKywzKifDL6DLmNPdUGrCJ9soWFKU2acQ3yqk3E1EqEVJvCccVwwF8henx9t3FTCAVBDBgbXKu4A2HA",
  "key12": "3FjyprcB4k5YCDRnvCs4wFRq86u5gr2cN621dMUsfvmTdsxvwi9thBDAxF1yKXgNEm8BM3L8wh5oEQbWh4DNxaWJ",
  "key13": "vBCtu91p3n6NDB9jasThcxE8pehEBqjVYG16ouGePQoS4oHmfe6SfsBJx78phkpFkAMyYskx7bDLiq7P4LUCGeA",
  "key14": "4yWi7PKgNVGyU8tUEnLetfmea82f9Urk81L2aC8Y1mMJaTG7rWhxws5tBuRAQ6TRsJM8L6636RcxAJ72VQFMTfS3",
  "key15": "o9Mb5tSAb4Gb1gmRXWrAcHHJQcF9jibbQXKcm46LWBu3AbkEVWu4RezN36xqbGD3er6aBNCrrnHch3uXtbbqZhH",
  "key16": "3iJyL5B6N5ZPhQ5VBYK8oe2ygsCd88yQPhHB2VtKeaXLNzoY3NyvhDK58NzAFXTfydfb8gmPwFbMp5jNBnU7McYB",
  "key17": "7jp7B79JboXjourJdqsrLFVighCpMA3WQWMAGbMSWoMNSpkDigBRCirwQBztGXsXWmktSixjTfmQsV5TGiuPdLN",
  "key18": "4MaHQem7EEbNCKwdNGwKhrW6NMJFaMrzEcgg62wsNeKJTTUGMZat5XZFPzgZX77JJB3xcW4xpsgH4kaqKW4tnM3S",
  "key19": "3a46FvQFY7Ucw4SB9VB9H7p7LSuSsRuC7SmvuU5GAi6nvcqhxi3s3zFpFhcooy1CvRzKEeNtFPCbBDjaXKKnAPRS",
  "key20": "1ZfxVAc7mukBz5z2jC9EbygyeWbLR8cPwrQJmSToxUPb9oDygqaPpwZQKxg6LBaA5TqUAXB9nWc1cCsfC1fAcY8",
  "key21": "3G43cqoK1CM9ARNQJwrVUmCfwhqvCwSUFbQzdZWkCLrQHaAt5t3T5GQzv2o53av4B85gZUy7G1HZBJuqauPcEE4U",
  "key22": "4tDhoyz8ApUgqZLBSZzYZ8faAzHP8tXLZDn3Zpk194aMXPzF1KXsFwMoHUbHSsTx4RJMU3uz1pThmfpjrKa7ERhP",
  "key23": "2fSX9mD78xsqYXmUzbcdoWY3zcj4kZFbZgE2B1LDoDhtXgg5RhhwZEk2LJW8SFGAvB5tEfU1hrnWGMRz9nyUnqtS",
  "key24": "4SKBX8aXFr8VbD9LVn9ziRP1N2W2oWpKqf5FUjB9YZ9GRgcmPQGTmWhz8qYZKZnfmWU92pw5hLgJ2QDcLmFAAfuS",
  "key25": "4NVb74ooJvVVykXuApmGQsStiuAk8DxzJDYjPSxPsyZewyWsFWuE9qmmpNdCFPimTzMj9T6iwQBZaQu2LJwHMwbo",
  "key26": "68zfWt2AFtWX14jbU4KxX6qEww8dxdxd8V9rPJLfAnKPqcU2Jw2kw3uuWfahgaWME6GTwbYsJ3WFgpamnJoNgfv",
  "key27": "29YK5TJh9ku9wExLAdX3PbF4976PkhTCEFPs8Bshud267gekocmgmc3gqzLQe6U2D5fB4wKkQHoNodFkptdvzRFa",
  "key28": "4SzkfDuioyUgAA1PKecyb2iAprXD4G31jP6acEgHDxgLGkCxkEEqMBHnCbrQQhY8QSkQgWCe1565SkwDXavasTjQ",
  "key29": "GDjHq9dEaALkoSQkZbhDHSrF3i95pmoKwenz2Hhm826v79y8vMsRK8CbEeMCkJwr1jxmGy6HwKZbMrQjbMw5doz",
  "key30": "63RqqSn5rEXR6vGeuCGi7mvT1BbzG54JZ17gfSM3fSz4PYheJKXLqgVdApfD5gApnxr7CvjwP6Y1chWQvzQRZTdb",
  "key31": "2p35yY8jYWBsKj4SgbzfyZyfK8dxb3TuCkzeEgykEcc9QnjgzqPgaABak3Rebywq2zzYsts7xXA9p5gGok6HZZPd"
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
