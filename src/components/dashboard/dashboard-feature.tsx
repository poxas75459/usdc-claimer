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
    "4V9ogXHjtPuTTkJPQqLfHsroWM1ENNY6NNGJEsAFkVp3doC8KCFuxSuP7j9ngKpbrqJqya9j4gXPf8XfAfyWwsV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbAUec47CGraedK8dpHUNvk88gJRgeyqQmGugxPszQFcw3ftUANtjjNRSbnnXqojAbeLVWBt6yyKBTVeEeWFXr6",
  "key1": "2hK29uxxJAvuahSSPnBvSACw1LbtWtLNu6Fk6GURno7crsUbuYWdeyeK2Ns9Mw3g1RX7cQXaUTQ2JkSCSULaW5PM",
  "key2": "5UKTBuLpQ9GaNTBdYYh4jnWQU2aeVsMuJ54BaXZ5WzeAmr8NvEWqGkDHWaDgkYfSujEympRnpAC6ShUbDtcnA1ev",
  "key3": "9gzfBgHZMFtZoH8V9uoecSmheAvU9bFE1A27aEwaMyzTGkJpGzZSJXKPmNZhDs8XP7MxepWq84DS25Wk39aWKUM",
  "key4": "4toDx8y3TR5w8SQbfoNAc4o9uHkm7RRnxhHASFeT8QaiGMruPJbtbQBEVnpG88MfBGCBr4Vgz9GMBfuevcXHvPKK",
  "key5": "4dThLvJSBtYUXaCwEGmzzVT7Nfnd8thgWNxDVB6hiobhVJvW56Gb4DAwFxArqFru4CECNVLASMKTnNEME37QeLFg",
  "key6": "5QEmEEBGCxoa2u3chsDQ3CFbnWdskbqZDZG8gj9X82BbKfMZtDMWahh19GLLzKcfr9FWoUD4auLkR4G7JRsaNkZn",
  "key7": "5AqiGkTh4ynfdc8ibGirMgRwyzurMNVFhqxYmtZu9i888sqyC9tQgKhj94AHswjdvrD9VuBKLVKmjMpCnsMt2jkB",
  "key8": "4Bg1JX1uHGVnCwfcvkJDvGXM48uPof75LAcYdYLfVHkHXQrhM1sCtZjMm4dq7SKXjUBHJGqTvnQWXAqHc5EwdUvF",
  "key9": "npFtnTmLJNEej9hyeJgKD5jv8vkygGGjEJ9haSS1CEFHXAPwbCejeGFU88qYxAHhZbaXFg3f4LAh42qstwFVeLL",
  "key10": "3Q869XSdz8NaW3qnAp3bqbrmiAQ8sLz7SvX6wohc5ojkZJMp1uSapj5ECLL4EFyFsnZhKBMiVmuRfkcbavnuLG94",
  "key11": "hzYUm6sJea397aAPxfoJLrTpVw8pfiiTfacGf6hmPtf68XEPyNEeKdYsS3Jnyms55VL8vLkDLNkEbFd26xEWpSq",
  "key12": "5PqffFJwzgXyZj1AN7q3g5LNWfEXHJPdBKeZqmWCbvLyncxJ5R2FVdU4KTwZDgcyTCJ9KRPmwYtQxoFSXVFmG1Hi",
  "key13": "5BfMMH78YJa8Bt2Mm9q52cxVPfNc4ush5q8ZrY1fPiAXrvSgsE5sgtuKgqMrXZCfdkXsCrEUVEmyuigb44CyonNk",
  "key14": "2DStN1Gw9Zzn3iYPBMmvcvocBZsr64KFLTqvfQf5rraprRr54gZhqEUTNbZe4WRT8pV2o1BULWrvLxB22je23TP8",
  "key15": "52D6ze9499SVP782DAThsn8VcUWz31A2HrnK7sxPQNJd9mJ8NdVUce1D7LMm2draYKykh295Eettne9x1meUa6Ld",
  "key16": "3zPM1zc31aQk4agcjRx2FqWaoouZv5HQSJDN4jRRLaBAcRD87pnq7F39ppPGf13fgF8fBk1v2wZ2LJcE4VfWiZrQ",
  "key17": "63d2pJZG59pWxm87EBtVezrP7FyVJfq69zQTorAhrec718K2TFxVz8uN66EbPQLqEDvJ8WhMQKGyqtCCYyimfcCa",
  "key18": "2hxbLDTcsAh49qHgzTnNWmkzBF7V1PoitkvLef3oXCnjnC2Deg6LC6mAHp6hCDCmCs8K12XbNSnx7pGXc6KFqzRW",
  "key19": "26NrwMcQLBMi1bbjNErG6PGXa1FroTs8fQmza6LfJhSqjHQsQzCDETMCwGConEQxKjKzsibJPna3tgKhexncXULs",
  "key20": "2tDLfsvShcP2HgsYY2SnVaCtonr4YnrQfgnCxh2kXbqcdrNfTV1cYeMfKnw2ADV4f8uiK5tm3Qv35WyKoWzNnWpx",
  "key21": "3xviJ8AR1jsqfjG9Whz5J89nXgmA5i5ZkYYHFdnH71R83kea8GxXvGnMrRj6fgVb6jVZiqD4v5zgRqKZzawB4pGz",
  "key22": "5HfNpB6bgYqysUZkvtzgnXupnoCkZSZ13ZBj7YkCZrvnEsRVnGPGHzDegiHyaW3dcPoDiWAtmyYDm1SSNWystU7S",
  "key23": "ebziHSZBp4aYKykKms59N1nfXTTjdhPfpdtE3rCp1ysdrcgzou6WkuxU6A2R7vNRBY3nW3S2XexgPXuJeXoELpA",
  "key24": "3Q6DcWm2za5bN9ZkzAMjWriY14stjEgRdeKvjHUaAaUjNrUxyTR8X9HNaRw8veza5f86d11M5W6r6QVyLvY4mgBJ",
  "key25": "57j1Nu3Ji24hBC4xNtYCrp3c1gq1GTkGsBdpUkSbymAkwkmhcBp9MwmQdFc4d4cYWp4ajwgAwdYkWhGuqrmgVmH",
  "key26": "5r1LkMm8W6gypWkjgdJuJ4JcwzNuE5EpxRG8PS7b6oduoyECbxa4ySJq9D5krUS7kmUHmcYJ8drcdGpdBx61j3By",
  "key27": "3WegvWGMDC1pVxaAqhXa4RrowAXo1v8GNSDtteZTm3YeAhDNcKBX6S2qPyGXMGKFxP2nXoyituQimMCyfrWjPyYP",
  "key28": "5JfqKCB3vpnwDMuUVz8JxH48z9E5MQxY7W7eCzgnjo88GwSjgTphWqSu2wn7mMZP3yxninVkVuT4nkUUmkpYmfW",
  "key29": "4855zLaDgCAMJSJoyn7Bo1xKBtdMvx8iZFxWvQDihmoeUGWaaQFLQggDaxSnEQ8r9r5XkDdj2qkngcKEeBdFxtD2",
  "key30": "4aE55dqSuA6QEhCxWirXpbQB7PB9JVbhsRFLALmtNsp1n4MNQHhybRwbCTki8675XEmQBqLp2JtcxDumwJZmF3rj",
  "key31": "5YiRHKw8S1qVWzYTKrSUm6giVDKjWYmD1HeT2Sj7oBw81CYxGo1K5mHXXRd8tBEgjhCzts2cNQ22oQAU7zT5jnvn",
  "key32": "5Z8pZEvdxfmQzD1zf2BZYLs5EgmxjaGMGP6keApaf3Q9hBVVzbjwhqKuspXH6ssTERCBmMjQBAF32sLUz2PqaMUa",
  "key33": "3GeZe9rxJMSHZdY7eAce9XT87Fk5rBoyVo7p5s61JmXcQ2B2RFcffqf7KBNJxufcyQ6MCras6xkvj6h9u7Pqv1dc"
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
