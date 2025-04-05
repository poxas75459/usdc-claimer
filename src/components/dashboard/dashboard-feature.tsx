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
    "2fz4EWfnAKiYjjjmzYfFfZQMnHe5biYLVkz8azadCnNpgUhUojEu123ZmZw7oTLpFMrHoYEp3aox6S6N8RjotwKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjwW1VkuzmEzYnk9MwKJ8fQ3buM2cCR46bHgnXFpTbfVCaJC6FRDMsreE3nsqYAhe4gntrXwjJP9VkKY5zFxui5",
  "key1": "Dh43uhQse5Uby6ZNrTNKSis6ohQFuSW6hJ8fBTNwq88y1yjYnY7hjGZNbqeevNS9EbZRLCt4UFzKrVQvydckPio",
  "key2": "3pjooaaLmKXWF1UaC5mShRZq3RjQafVQZRC4pCoe9azo7Cre2Ca59owZZf8mAgvyww5PAbMVdBCKeRCYd7DEV3YK",
  "key3": "hrcUnnQZ8ekhqvxJvevsos9suwXZkFhFgfr9GnjyPtzwKANg7BcCso8PGC6NsP5vjUWaJ8FsHGDeuL5245JRgWc",
  "key4": "2acWMaK9CBCWXfA36ozZnDakLY7zhgd489TnuEe6htct9h1iqB5utqGyDFXhwkA3yq9TXn72HNZXkQEyhMgsZeky",
  "key5": "5R8yCk1deRHZ6PZeVWyYSV2mXw3UWtNLo6XCck67musWeLRgHWnDknmb3YuY2NaWYZvfhaXXFX3vnnqFYFQqpkAh",
  "key6": "4ymrrP2Z9cNXHWYSG5wHUSV8n1Lxf1c8WTbdBA2ftWM7PefK4j6yZAaJt1EgucxiPDta5Zupki57TX7uBru69orT",
  "key7": "3UhVUZWzu28p4czysu2JZgsmxdgck4QL9iFiPFQWditxNS3BRVjw1c8Nh2b2mjzaHLhDZt5y91Nmy2HG1nBQYHGd",
  "key8": "4W6BkXrpm2a1HPEgyA3BKHAuwoDVqLfUUbBA9f8z3H9CscEfuHb4oUsSnmgMeRLayPeWDCF8SzKNi75FGdRyJVTq",
  "key9": "28oxFkiVF6tMQzUcZyin5U2GcuZEq4YC5FMFX1jt2oJiXaYnc66rh4vQye6rLohYotcTu8e8QrCVwzwpjKHXLrAe",
  "key10": "3rJyN7NxtcFcydYrmZKps5mk21yZi4PhKN9iX7PVqqWw9jsat3CYeFW4QkvMj1UByhYdWeKT7ddfCZUSvyJQHEFw",
  "key11": "2mQQmPNuWmqHiR9War76PhnLtRZwPyyunFzVbj2p38cSyyqriM5v6KvGWjmXiFCkw11fNDoSMy27CkS8gpRtwTho",
  "key12": "3R4jrnvYF42NEzFQRv1DmZhoqw4eSNjeDJkiRp9oegLV9zU2spTedbovrUAgPzUN9MG59b8BeKPuuYaKh8oHri6k",
  "key13": "2meZTyRa9KyGZFUFCntAjAvNJFPUwH9MEWgsVsqy1kg8qPUMU313LuS8DQYm52MfK6Fw2LunsFRz22qhVgpQPWt8",
  "key14": "4KFkwstkwLEe5qKgqQ1eacaDGxsCtA8qtWgvuk98A1jVstiw3gikTwf45dBdUVfurZm1GWk5p8mfoLERAF3XufvP",
  "key15": "4yaGuEbb2DYp5YZQwzPRtcr5iqPZqWiAuZAkDcrMhYBPpMXEeKLmZ7yiowZBN8eXHXDxFZPTfatMTNGbKSYdgYPy",
  "key16": "634Bhnhizw6i2qG2HsN1gCFxqjhMsgR9qiRr9N9SsjmQ7dq1jYVThYboZgjg5iijzoeYrgBp5VfprbNpnGc3wPKE",
  "key17": "3JErCysexL6C3ai3k4MFvXMHwSH4cSbokX7gMFEsYLsCqbmneH1mo1gvHgZB9xf32J8mJnACxdrpT8bztdinCigQ",
  "key18": "2iw1Jc2oixGoGedBT1P7rModTHBH3mxXEVzFeUkqsNoMi5mJf7Vc2Wi5sfEVa6J9uhxTbwipfgoHbzor2WAKbXCn",
  "key19": "5G5DSAZ6GRBKwZmtCBwwyFwczJEX39J5zjRwD9kaihis9cSNagjxo3jYdeTLHpGCYHyQdeRXTsizokJ4UTCPhQgS",
  "key20": "4FqWFHdsa7F21WTmSsJFntBBhBFZAegtA4FgeqJUghMZ8XE6LZbH7gTMn1ZNj2R2VyEnvBxKKRHiLftHCN1cMbca",
  "key21": "44Gx1hdm9tvt2Sp1D6LCrJDDGCeHP1r7YWHdkx9sNzSwDo3SdwmpSkHMbPtwqLSYfp15gyc5z9E8jjHdi97VTYar",
  "key22": "TfqaAKhaP7qfQnNMTJuwUeGce3XdKFoaJfZ8XeimKWBAsRtVNUcmaSrqLhw63BEi31Tquvzn6xTW5zAtHKPAKdp",
  "key23": "4kP2CQSRCvRYe18FZReJjQLqnmPXzwkk2sf5w3WhPxZ9op1K77XCNRENNJuTQcBd5RbssxdkrJrbUpMmodsAo1Th",
  "key24": "3Tj3a6M3ufATuhr18gX2zQHSadZxvrgtC6MBZQ9rU2GqprBPpmspHJUeTSvCTiRxeWkbUcVPVwQt6ZYe1M9zrGmr",
  "key25": "BCumsTBaa6V5YhWvfb3N4w2gwcXmwR6NjerNmH6CeSv1HXVMxisSxFKeqzqWJkAt1iUiN1Wcn4tjA2Bb81Bpf55",
  "key26": "3t7ZrbUsXH4o5LbYe8vK4Zt3emAudwAnrUek2UYfPvxNUixXNVFzYHs7MpkUBMGsw83fgQLT2k3TaCyz9AXRj9T4",
  "key27": "52HtAndqL3Q2WDU5BgwPdbqTkf7um5UZHu15YWKsk9WW6UdMMk89V9vya3fCUMgjWFZCg5ignA2AaFcTcwfPQA82",
  "key28": "4g18k4tWLp7Tvt2kaW6CLXMr3Ptu9hY3DAXMAFoRfdqvqK5Pi3wAtDYesDcMELVeYrAcnb5p1vuZfbC1cJVftzi3",
  "key29": "xA9B2bduXM7QDPUjwXxnfTCUAGHBVDcXxQtsGMxRwNV8CFmJyVeFBmYbxi6121eQ1CEkQTZZBNE1ee85fqKCTwk",
  "key30": "2NcNs1YwwppEB8x6Ao2kRtxXedGbyV88s3ABriRRHHvMgiWhwP99fk3dtULbX1efZktZCdkBExk3ny5CTctq6Vt1",
  "key31": "21RkGy33DKuANvWLmQDYkYSWT6WQYpWdfESKPdsdtFLFJ6RW693JbV5KtDBaox3yM6GWjXDGDLwSiQDyUydAW3qj",
  "key32": "26E6i72GgGvXvvrp7mzAeeGZsrKWvgVubMsgrFUwcY6ZYomRx2q2DsTchEHKCB1y57wjnzNM4dztbzHV2Jdd225j",
  "key33": "4tHJjyx7Z54JYCa6QNUB5e2UgrdDLS4yzjYmE8QQxENVKuGFYYoHujFC8gELdNE7URkGgFTfHJH6EE7K55J7amCT",
  "key34": "28t6cN6ehMTvx7zyj1731yJjUeUr2wD62BUM331L3AsAkxm4RmnoWJkwMNmSEb6HsuShXEriSd1JrP9iagD9hVXu",
  "key35": "5KtN6gbkJiPYE5ibJbwTZyJMsucjNB9as7mNNQrVCKUEKuwrCeAhfYrvQwJGKsnziu71fBQmq5KsJuCag5CFEiX9"
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
