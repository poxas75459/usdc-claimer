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
    "2RZkXQGka8Pwky2YEP7quArZDbJUBAyyZgz4iDFepXexcw1tLTy8SvqswTp2QDjKDWHhxjZBXJ1nN4Ur9uTqsHQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXC5x3wJKiiP1eXDosKVbCTpSGmp9QhFkkAQuA9dfSk6FiAtdRkoKi4rAkat5iuETk4WXP8Lpsf7X7T3k4Hc1V2",
  "key1": "5jJ3c7ALjcjiSSNBJ4ZeJ3J3r9w7CebHYKuezQVf1D47xPLaE3ZJxSpvpRADydUfGJZheahEFLMJgdPX8AwPepbh",
  "key2": "48xnPWxrA7wBcdj2KYPbzuNGLY5fcw1vNrwRuQ2iyVE9wvqLGi24hMUqnHLvegD4mSGJa5VPDo7Wm1J4RAd8M74S",
  "key3": "5Medr44fJzzqYxaMXsxAkhJ6pGrgUDBBwbPRHQQFjR8ESmPxsTDYvVnH6otCQqqzei3Wkkb6Sk2wkhBpygrP7cwN",
  "key4": "2w7BeBc4DmYihbArgzdB51TtbztS2m31gUq6WoVsGaNm4FUvSjF1FTr7JnnM9oNpSKjYhVevak8Pn5mY9x8Lab2b",
  "key5": "3USanhzi6KdMWen9df2AtDMypqdvUTkMSzp5jEnXGEo5VF9EFj7Y7AGastFDunEZLF41hYwEXtAi93BZA7rxEQ6e",
  "key6": "3pkdpJ43B2hcDB6XmxPNRLDkwuFL7Lc5oj8pqWX8pCJbQze2ju7CtYwasGHi4JwLaZ1iXD77E2DpxodukPTzkDY2",
  "key7": "q5bwHFS4XT6Q9vgpSvcMYhhJxaG3TcBVBGU5nHTzMSzSwBnPTm7AhGFsFiTzbmxiWdfqDoJ5HJTLCzkM4bHuX8y",
  "key8": "3qCwtknDPq94nvXpUYBWKtgxZU1VyFhD1TY8Bq1o4ywp1ZU6ZBobd6J7MWJ517Yrf1kgHmsPmXP6nqKGFEvc6Gb",
  "key9": "2ZzfHJMmX577zLEV6MBDe1bcvfdUmQrV5iCUdVKok2cSdn7Ji4z5s3n8Y3ZwVmZnF9oU8BB6gVwrSukK1AG5TrXo",
  "key10": "5AzuLaV7v6LbpJaEPQSgF5X9xv6AffZiNtXkY7d25DXW5Bqicx4HJfxo8vW4Ng4Y7cfPjhgYNygy3EnqJi2VvBFv",
  "key11": "3M558wE7f1gC5UKikFCCksPQvP4Vweo4rCJEKLtCNmfZ7TqcR3dgL1VH69sBehHdsQYkxyrb8qqCYpPwkgvL661c",
  "key12": "4weXboTsosE6whoseJEq8UmupyU5yKdHfmTV9AmbopS2q6fKzYK3YEpYvu1wuRK53P69r1Gm6n73tjyHkv1UjZUV",
  "key13": "3LDosYDt5Z2mUVZeQXr8BnE7RQHeZrRfFXXMnXiM3VXF4e3H83XdvaiGKbonUwvoxbKVrfTQ5CSHvxN7VbKHWNuM",
  "key14": "4xbVxRtb1uPc3A891xfaYxRU2B1oaSuhEL1MLRwUC5NZKaBu22MGNXbJLmr84cVkadjbXaUndCCgR8io22md5WAB",
  "key15": "4RdQbQvWcLNhpfCZGELq6oXmNXgHpjywuK8cvtPA29bu7vrjbSeVSZz8rgg9KZW7Qrv32Asaj5AEiRbUyrcUb6LD",
  "key16": "2Q5sinbCZEsjT8oWgpcK4FkzyXi1egThFpCjr11k9rxpRHnGdusrjaGB8ZLDTWt5k2amxiXi6uKdw6i5R52R8MFh",
  "key17": "2XSXyeVRmWfKrgFofZxdk7jFjGGMryFcwj9ajM7FMRuCdD7wiFHCTPM7apYWRPZxHfaxYvDK92PSzZYtV2SRqy3B",
  "key18": "QGuqfWagPNtnqHxndACef4TVnsuu2f4b5vjYjcoVUfaJPaiz2NLYrkSLTK35JtJGN6SbikNWFTNg4AgCtATJDqe",
  "key19": "oMcNjccfCVC7w4pB6cXfP66o3pJwH11MU5D6B1kcCmLbWKQvMct7s9KdWNeCXYDCfwkqSuMTubxPmHQkyDeArTk",
  "key20": "SaDvGv9YuUdx9UK7PSCx3DKRtRJ5mvWMohWXXjhDu6ZA7XHFrEoq2R7FNBvYNc7mGZB3NeL9SdjbtS7UEytZQUP",
  "key21": "5JTPUqVj7hgrLNAESvUnNT22Ees6fQSaoyafs3ZEF61zrn4saAogW2SXyzFiSnquLAzhtp25NMzf8tbRW6rqCv31",
  "key22": "2c57Q6nFbvGAAjyMiSmoazbrinn1vdMKGV22sgwjXXAea6xbrQmUoYGNZCDjiYJadxHJJPN1hCeZq8i7EGaBqUTa",
  "key23": "63Fn456s1PWDVP6RDoZjkEz7jbKrjhocRaMfLVGf12cZQTK75NmefZ9Up4AMaspLDy3sbG385jL3YdyoJKungW4o",
  "key24": "3QfM5Ad4Xz6CRCi9qipK61wZjGLixqAbS2HA7ZJHW1hncdGdP6xY7bxf4iYPNQqwQHwiC3gCrWxbznDXs3dEwTqS",
  "key25": "2n3NwHzR5EXWF3ii2n83bUmCb9UYvvN1feiT2qkCx8G7up1Jh56RMJuLFDVJf9kWmcaYokSCCHFKduMzwvTvgBAa",
  "key26": "5d89ns7qN1jyATUsLUZdwbXk9eJfGLB9mY2cyvqZ5D6o9suyXjYuGyxpTCTrgACY5Hti3da4cWPJ43FFn39W7MjL"
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
