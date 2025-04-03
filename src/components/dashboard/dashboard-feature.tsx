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
    "3hLjTp7AphCBATJgeHFcKQErLH3a6WPt3SncMVFVRh5qziajXJHYgSvx7EDidk4Lzy8Qou29HtPb6Pn1b2wjGJdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTnzAKxqjQ7myM73tmaaFuayZSrgf8f4VVrgoqx2RQLc5nj3cHyDy3sAjSvQKz2KfQBdLhRdn5VjPXrZGG3pB66",
  "key1": "TcWyp3JMJQi45SDwyDjZXmGcgaQjJdSBaccv5ybXV6DXUpfCYzGouxmg5ZuCjGRnin4n1ZQAvKhWyXtX9WMKxxJ",
  "key2": "4jckFPjq6KPqKwH91tuJKubfGiZhxyCFqeRN4FcaBd8YV9WQH2321rsN26AjSxLvCP343SawfEfYMYaT7u3oA8D9",
  "key3": "5tXnW4ng4mCSSq1bPni5FNPvzTxKAS1GkDGDAozo4SB92FU26tX35KhWdKLifsTqGJmF79gL5JD4PgNpngGnYoUA",
  "key4": "5KY6hVqthxBUz8Yc7ERbpAgJp8Ucsxt1B9UuyFYW8QzRN7L2FYmCBAvEn8Ef3XAVu9n6fjKKyYqrAYb5EwyLwvJP",
  "key5": "3hByZEtdCMVA8ucqbK5QwQJqjqnckakbwfz4vfBnqYaT9edM683fNarQ8iU8jjXm5gokdCW2LRENRULKpomXvvXy",
  "key6": "2KezDaCQ2SGhS5bkq5XqvJx3JFjWQK9vKbd8tXG6f9rSsXsXgW6BdPJ6Nn9BgeDQvvCy8QLg2SNfkr7Zp3aHZ1uv",
  "key7": "KhcthqLnPeJgNKa4HP7m2xdKQscpSJsLnNr9epzyrb2TJn8GAUMKNHtZ2ouQasvT7NWvZMrryn3QfgYoEzgMFx1",
  "key8": "5EdXDQEAY8tAn8EZeQ7fLwsPqNTbkEsxf59eLMYj55q2SbZhQ78AvfKvvgQ3PeuSivZgnE14v1bm1tNTp5okgXYa",
  "key9": "AbTUVLXv1zYdyhfdPWov8K4uHn4nVYMxhRVMujvZJeUPYDvQCPN8c4jxAhmHzvLS5Jw32QYQf64pAjE8vnhWxzr",
  "key10": "5zvfy5rwPP7ZdespxQoDFDrweU9hEiC3HuGHjH2zXPkXsJnhKAC34Ygazmboroj8HU4P8wAttHDpA75rjitnpnWN",
  "key11": "3CHH9cbwPXy2JwNsAcgSGWL7RgV9r1aFyoBYB2hr2FsX38wvAgVge932EqURQqaYVLfZcva9FprFNhTWFq6mAiiE",
  "key12": "3LtTTW9Rrv5CLiZjDxMfrSMu2nQ6yWztvePxegP6NFhaYPM4f28CCxxRVuTfkVannScH3QDtdMXVHFWs2NAr2sL7",
  "key13": "wbG9yaN4YgXeTromHpnmAJdexVUznR5SD9Vo8FQuA86Hfphstbw8qwhn3PXBUksRVAXhwd5Qs9hXKXKWFmaQraW",
  "key14": "28iqaUWYb91ucZgX1Zw55WiRoPMrmhfuHUt1NJiBVdfKBStYavawwQYc2t9rBdr9w34ToF794n2CoDXDR1NwWUvB",
  "key15": "5wGumT3PJqfZTvaBjTzxuDJaTWfozMmujywutJvYwmyNWTbEMnUYDX1yuSzVaTMGLcuAoKux8GKKXSDR8DQd3yg6",
  "key16": "2cdv3uiQYo7p95qDzyirC2Wn7zBDAe3znArtauLstmMco7ap6Y1X9NjYuHgdSTZottojWtZTf7XjDyEfK3NBj17Y",
  "key17": "ouhtu3nBqkVFkjM5Y4FrFMVPc9ZMZDi56oeNqEVRthF1QFkZw2xgbCXyd5jKn52M8aj8PTbLjnWss3jKoCF2SWp",
  "key18": "YGqzXattZ2KyByEUo6ryQKo9hLhw6VVRAPVwxFPipsdoNuqkd5dEUXVCAn2KFUXKx77u8kFBRkqA2YXBXjC2ofF",
  "key19": "2WPGZnJRy7FbB5pSn8i46zKD8cGCb2KQfG5UxED1AUDLViKaA8yoG7QP6qqCcCdtay1uLMiFszpH1K3Rp7ZRcs3c",
  "key20": "DqnWazMe7BQqz7zWXsdA3MU8s5Mh8epJjEEX7rbCgrgVnDPrJkNVXiC2hLQFZBuJNu8S9or1XN6Jr4mra6SUwdm",
  "key21": "2n5z7BJZFHuf4ZfF94fUHy2Nr6HxeMUu3S4Qg9kXmVJH2u2nNHnvHkCMhAzWbFhGv265pVbmjQKNyPZfxtgQsDcv",
  "key22": "4wUJ5ijW5TastGqqhGPBSG5wpPGv95ctyoJT93W7L5qvBjdkzdJWQ2e4ufP6613VBfRUXCWSYt1wyhXvYnJJtQBs",
  "key23": "2fu9nNzLjWRpQgq3SnMwQ7haj7YbFVu1abfFsJDFjbaLF6kBTM3LTZw5Aj6kzPN55Wax5YcuZDfLmGvXTjVaA3Nj",
  "key24": "53M6bUudwKP34528mo5nRNFPpxbxx3uFsZs4xDr3pfAJh1F6Wuk3fV4mJBqSz8qgZzmmyTcQAZZTumHKQG2BUHNy",
  "key25": "3FQ5ty5gEZRk4NyMXmT14bfCRfsfyMcMSmXfdJRxpy44EBeM2Ao7Unc2ybZbScGWZRXYmSzGJg1xCun1gBU8yYGL",
  "key26": "4H8Jy1974Qpi49dek5nj3bTWhPMmVJ4xavYE21gwSYqGoiYa4rFMK2T2skQT5KCC1ExVWFMoSzkWGHg9p5mEdEHv",
  "key27": "eviXfarKXyVNpmS7AwdGsZYyrEWFP7mb5NozNRbR24YTPxVfzJ9AYzHqQuKZ7UCsSskp1sSAFGRfzmFh3e5unJi",
  "key28": "gjfobF9gcp9U3xWCxWGPAbNNQ2inVtTpJAWxRurCBdvRWaZQocVbWNjurhCBucka9H9ahz5683h29RdXNMhopsx",
  "key29": "2QjAMU4ZX1s6hhS3Y6SV8kCr8JihiJkprqceZetLok5hKfSmDCDhd9zRbgPLUmCQVsnMYa3dNkvSMBgzcbktNVgk",
  "key30": "5XibCQ6zoaPDmRo8rHo9vuE4vwD9ziYn4HuGdPTLR9ky7FUbTufMkAJ3aJB3gaPj2AytyzoEYBTUHxECkB9JDuRf",
  "key31": "41dJo1gistWxARdaVCuzqMYhbvQdURV48yLVcwH1PKUVUPH72AabU1fAM7aMQqgjZ7J2aHnt79ZSdiwdmyJ66oEX",
  "key32": "4KYjwAP5w2M3RypY2hxt9R5eKg9aVCUwfsWo9wcgnCvWXfNmbqutdcPYW3wpNPNj5FvsfN9tWUuoZXdCvYrkTVTm",
  "key33": "w4qcC1oSgRJ2EUVJ6MQXd6eU89Em9MFqLBneAwW1UbNyZLWkmiirftvWvgxr449XYP3SdmABGVa9W95xAHheYWb",
  "key34": "5hnRHBS1Vjs4o1hbwdqYdmhMXA5xTCKx5wLcR8rUjaDVPegCdAemNqpJ7GNpQzLPWiLXG2j4cbPFPfNJApxVN83V",
  "key35": "5tfPiraQZMG1FTT4dcbjbfcBQ3EGdqSktqidAtSckr5pD71eZSKymekRxwxj6LZJUU6tuGvzJVobnnBvrbRcub9x",
  "key36": "xbZ4kb6BqWmZzHKMDJQZcxqoYHV3F7ndict6Lq5kH4H61coMCTyoAdCoRH3LCvuQRy3nDcwxahH6n2cKLBD3NgF",
  "key37": "3nADpZmSRbq6J5Jnitbo7vyuaSBMnLtGz7CnJTFQXiM46EWvYi1V6bEhmBJn7cnRdQYvbYXFQ7azvYoFCD1MuXKa"
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
