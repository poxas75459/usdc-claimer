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
    "7WZj5f5a4HPPYKW5JZ3GMJJLjDTitjrzSQUBUqcUHGyhSJHaMMPpru83v9sAenPTfyq64P7x6Hv98Rb8rWnPSve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SpS7JF7Ssifn92MSvp25TDce1PBipd1nUjgKgLqM9sNhHUUgTBJ2BSvjpZe1MCUVTchEhLGz3n2cWGmz58QjQf",
  "key1": "5YjXeJYqz21cYHLPoBPuofKZ5t8Rfej1i2Nb3BjK9a8K6pfjgdRX3Zi2CSd2JtYNDUN2jQpZXC7YEo1NMGqeTRiG",
  "key2": "5QnPT1szCgJTrkTnZbxa6ayCaH34MJhwiMu5hpLGQnFq8g2LjKn8KYAnHzENQRzXfmiQ4diDmNTVBEGKoGm9SZ1X",
  "key3": "4BWqiYzKpFLGriqB23NNPgQMagwHZ4K2LfpqPNpJ8dDzUKLvK2rhLFa1cXyjgBHGuudPz1zQXJpLNmxbKZrd9MxZ",
  "key4": "4RLUB4KoTadwAQQWFbhHgjyoxNZSUXNhhfqWFjZRSL73yQgLcjvmpAeEWfF3jzP2G8FfJvJjXu36v7iDVtU59uPC",
  "key5": "4U119ZLdfHucrQpXropLkih2Jo7hGzc8NMn8XDai912H2yswnFdqn1gSa6m1aErRz6QQ8PggFaCEaTYchUhb5jLP",
  "key6": "5WTwy33hb93GmGnikZiisb9r6wWJfNVkiisDPW5Rygfsmi13k1EedX345KAk3tkJWRkPQkN7WWh4C3615M4bmq1",
  "key7": "39wEpbZFgAYusznk2rMjUdM2eebuNBGSF3EWrocsu173dRjpJTnfdmVkMNq9rtxbcM2XNm9PmnrTbXSuoAnEZ3Ek",
  "key8": "2BqhjA8cUi3WzVy5mp8UNiXBbvnSBeubNnUuXRh2GsFcXZX4HHaU7wAoz4mnRigYV6hREfZEy31Xn3zD5V6QKgRx",
  "key9": "4ZqPnevZ4qHWV7j9uT6j417B49UNLfn4Wdnr1SsYp2k9ZNWCfHUzZmzhhPhjNoDNvnNPbqZ8WNyvZGbarJo8D4P3",
  "key10": "3MossHARmW1k8QzRoSmt4zC56FMFMg4UCAqBLmZb9e3oYm12iazWShY7d1j1uQu3StiA9NaSuKtW8jtudmG7kZuh",
  "key11": "TcZ3aqCJ759ZM112BaoycLjNpGuAM9FVS1upUQFKL4KWtfdxMoRBkRJYBfRUtgfLcrSczjZEx64sqBJktVNybDB",
  "key12": "5JrzNjJBdY4pjPiqhXXXD2UH1uDzqT55dfECgXUZYF4vBh15RhSJ8ZWmRzkyHC9LDHiWV67ntbx8v2kFsLYr1jPN",
  "key13": "hVDNMMyg7qbjSpvEiFyY7ijSdLryYN4J2i9zm3cBsfGiGUVP8XmfT11DZt6kRwHZVYVTmus8srevn9VS8fHoyvY",
  "key14": "2biX8PJGQAYH8EnCKxZ8vukC17K1BmjPW7b4wrkDvkv7AQSX3ZUGMv6kNXTAXfqau3gVqo3adpCRaeqBEhNcu2Wm",
  "key15": "2SNSyWPhRDNTJcV7HiRnrEFL5xHaWDjCGACVraEsUFQGcVFnSfZcS2FXKsFTfiqixYkzCSwFRBLsgSUZnNR8KWsx",
  "key16": "5SpHCUMueAxm4aXMYCW542Zx4kRQHbgxgDUZtsWXnuxhBAskH3YztXXj1QvWLAKhapLKwZuSje45Za8SJLhQyz7i",
  "key17": "5cNFaecpBzZVEXohZ33TdC3wJwUUZ1DG6bjbaQjv9T3cw3YeLMbHs53gDRDz3uPhgJvzFmd4DMW7RgSYFeC3o9rA",
  "key18": "3SY6UYcmyiiLdK7F14qRmrjKjqDR22aEyc95bUq2HMNgvHjrBhC5HkE6SKAWTxfjnR2NEQrJJ9tPuRY1E4QkDVQZ",
  "key19": "3zzH6f2SZoomXw8Ac8SLCMAyvVQxDiueAysjbbTRkEoujV7LRHzsLSgNvuG6E1ZRPzCTYXLC9eZrrR9LzTXZoGtJ",
  "key20": "5YFp7SqTmHNJthX7WrwG3EJrgafEEP5ohCV45QgU22sgV4DHkBAcvMVUcyqnWowj4dRKZEYpKjcKTJcLePr6P9N",
  "key21": "2JqQeBkuipdMujZhRFLKbQZJGbmRJSGseuCfNomxmjEgaCRZBqJLwXCu3WHevu8b5bc3TT9Mj2SKwa5ddCnuZJr",
  "key22": "4yTgXvkcXSEiyKkJ544sJSaYGQrGf1FQcrhHjAFWW7DracRhJVEcJU74wMY9jPRGbfDkdg8uTh1m17MxHQxaYEux",
  "key23": "2qpEUvj1sFp1CSxJVYCDU4cnu2MNsAAity8LM7cLeiVQmbrzdUbDhQWpvsuicP9cpQpvMNM5jCAiLuLFkpbm4viG",
  "key24": "2TKinFCRh69XEZTiKUcQB7UGLUEg16CjguMNGPUzVjtU5LF6pSaa24fSoDCo4poqRUs8cZ6EgkWxJCRwxHwHHp5h",
  "key25": "5xn2JXbZcoFeKx9k6UAKRGR24rkhrJ5mbLhXy6TjwcXjBzxvzgJtXvbeETmPoAaxJvBQGmbYFVpJkLVWNk6Hrwrr",
  "key26": "pYBWC7seiPcNiHSjVYFxdiAcMeKxzyRW8fKb5sDd1SiSenrzBkPoxmsrLZ2gCFMCxyfGdrfZXWVxxGT5bizAsu5",
  "key27": "3TCUshLMEwc5X9uh3nTxrokgCUZMpQ2kRWmxeBj2ytzuyYDzaxYxK8nPvVdAMa6PAtRbdF91a2YNbkdhLzMXKv2h"
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
