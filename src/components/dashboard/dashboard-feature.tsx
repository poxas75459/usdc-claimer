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
    "5G3Zu6xQfkPNSx84K3xpXoyJb8fPmWjzvQqYnCZytZs2RAaZZU4ZEzw935rf7HFbEL3vTEKtkno3YSsMQHwZHd6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQhhNUyi5cuVYBJTwGJ4fYtokbjpJ6gRQcb1zVd1XimJhHui2etWLRp5bMErBMefFoabZfGhvarJmB4A7AaJvCh",
  "key1": "4j8oKz9a4ZCR1U5NaK1d5hkQhYVfZjoPBywu7VYA3ieGVeUoeJuJgmbfV17WHbMv4piRDMDcijgWniwmYGFPRenv",
  "key2": "3ZQXMCGcuzjNgo6rbjQQMsbixZSzkyTcD3qCPf947LSpyT9kzLhJV7VGGSeNmXWwcRydb8GZbYvWreS4njYWdEGT",
  "key3": "4zBR84KEnQ9b7Kw5Z5BtKB1NgnNw9bBvJCU34Q73vN1U2Hp9FAfdZCm1BqrTDt5kUDxGoh9DuTzRB4wHJ5GCNNZQ",
  "key4": "65gWpnquj2hyk1ikGyc1rDk98o9DPJMqvPQypz1pnWXJCe6EabPg9zUHCCWmntyFcPTiqePjvhwGgH6BLLFS9KPr",
  "key5": "27ZMmbFNe3qgMb9jak5xCqzT6QxuFkzLcTfHNMVCUTTrHzqkY6jnUEYFC1GV1cCk4wzhbWEXvxJoEQu71hxNsfoS",
  "key6": "4WkpKddQLT6mXCzKvs2zjnsrUX173TekVq2SdNAmgXowc9j64brQMHLEkA8fxFVBjLjmegkvwchyJrSZHnv8bEbZ",
  "key7": "5fwqHF1QkheJa9Bf3MYuzAzWPcpWrgAcinJgPGa8PVagp9fDz4tP4jrunLkArabpnYrSZrPU1XNA1Q5NdTakXLYX",
  "key8": "416mjojFwAHNdf6HojQgfUtjY5dDC6ARF3cYDAQnzjvJgLYEZZoWtvxMZMtjpE9qR6wFAjN4sqG5sKykTw9fg4x4",
  "key9": "2hMc5LG5C26327qSbazpvYXHMsPdDZxhTQ4oThaPMb9JyMpKbSmPVeTiTMbiAsa6rdU8GHwf5o777FmE3dHNdFiY",
  "key10": "4DRvCeH2CLFXbP2vpFG8ASimgpjBcBRZPKVVLpiKKnMoMfGkGj3eBt37aTPmDfwJWMN161FDjjDpdMH93vTDhRcw",
  "key11": "gT4MDEfaDucVAvaLQmb9CtyEut6yUBK2FQeuERLJjrV2r45VwfAqiMXHZxy9dTt6fj1S72VFpgxUNL43ThSopBt",
  "key12": "4jfW7EbnBMQguUVTJJ74ezaBqALRVmdtQ2KtBALNy8GaYUvuFT2FsYAAbsLbZmqpm8ELhGuYkwGezwNY5nX1G24a",
  "key13": "4pkmMxxfvvwRhTo26CxrZReUtNU6HfZAbjNvC19hdhV1xQYsQsuDZ4mmLcCXLeLraXe4aPjKHWiG95HqVCy1QA8H",
  "key14": "5Zc4zTQTGMnvFn1geXtjN7PG9i9jAEE96BGHCXGUtcezqLsxA69BegK63oNmcbuAcgirEJWbzvjVTywQpmeVjep2",
  "key15": "R4n3TJUHLiq18oJHHoWYhXm1KQjkpGE3ZoYSBkwyJToUNTVF1wdvhscV9FePjU5pLLkRyJHqxtrdENXLrWCJgyz",
  "key16": "4iSJAv9ybek3okoiG4WaeAVfwWYZFNpWH4Mu755VU9LB8euNhL4LThxdzNZxU3oC7VHARXB5YymVHXacKFdjYw35",
  "key17": "rWVt2MsHkxoqhsxtg26Dh3B7oQNJ6zsFwFxXXY2MXyTwLgmR6STAagbDNbLdVB61icduYsca2wYVSWxAiasYJLz",
  "key18": "2F8FS4hCcpuaPHPsmL8zFStyMarRUiAbeCs3qDL6EooMn3f9gQTUAUbkHNZydHoL6AeUYuiAd71r2FXzj28qUNwn",
  "key19": "3Ya7WXA4Me78MBgspm4SNtnwB5wjE1ghhbyBnT9cAGjbtY5KiLfipx5DueeBnZ6d1vWuRSMCudXzvf9FBMQf5pVn",
  "key20": "4vK6kcaTf4tDgC1BBkepZkyoSHFh6wptmGfLQRVPWf6MPPH54zTH3pbdUivdTSz9mD3K16teX57vGrBSFrQ5wjid",
  "key21": "2vUFxniGFh5bLgUUuq9vsLPcn2okxTJfKFfaRfzjAQ2pKyDTuxSfs26kg9VsYNjJQEJcCracR8z8zM5a1nGFyeiH",
  "key22": "3ZkJHSGiq8BCBTJYo6fUAY1UwKyPTeMLPnY3h4C2zY3orBucJhxpWLQtDa3uEtPQR8oJfuNUiM2WNdUBQKc22YXc",
  "key23": "21zACDD3A4DuXi2Dfp7B1vpgdrJNVbRYb5VvPS8YYLfHkjyWWHCJfutTW7txZG8w3rBPrSeWSNN518DQoP8oLwqg",
  "key24": "iQ5hhD5cLC42wMysgo9Hea4Vw3seFMuYCjVwZVJEZjYA9zPWQTdoPZc4ACfFSkq7KDEJhKB6Z1JLUuSSnWCMiwa",
  "key25": "xwokUc2T5X3cNK4R7iufA9UmZckeCr9EXMGpCAWBVSE9VeR4dUzsjsZavzV2qeUJfZTPA8wk9495CCzsFQgmHAp",
  "key26": "4YeP24xU1Dh56ownvTDaQ3HxhBnTjyptm4wPJqBgdfMEDihAJgH5hcrnEFnzGwTgt8sw9xVEfVJdvUDENtUqSrxG",
  "key27": "5JhX9z37p41Vo8aVQjpLzQ5hYPH2zyJzipN9453vZNriV2FFp1QhW4WvueHdtqGev8DXE4AjGhqt1BnhU3gbJXfG"
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
