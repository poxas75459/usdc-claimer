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
    "3sbtrzcuAJmEmAfw5Ft8burkGS7vMvpcpf3naUMsuaTWhzCa2X88rzFV4jpnB1H7xYN2JpJ8ubJsFve3MqrDNxg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSuUG8d2qmEwyQUh2ezUZBvRcUi51cd7ZG2KxomXZvpsFKcVqVZyVaJZauGmrz7ieVvJQqYaQS2Edzg54fKVZZY",
  "key1": "5MNo7g69siGCr7tgKvnFYAp1XiPGgnRbE9nWX1nND6tSt6Vh4ceuVaXKHhjUisy9xhBiXUqeYgrJjezRuEdEU92u",
  "key2": "37gq33Q2jqMWTyxSzfokAP8ay1W9vD8s5Nsz9rZ6jPy3VKsTn7GrWVre4dMfFLTmeCAUqTYmAoAEvFQyjkBDvjH3",
  "key3": "3QgTk36NU6SRTg47sTPobqbLsK6pCy14mS7qMDnkkgvcA44BDcQc68KaegZuBN8Bq4kKTPdVr6E9N7ZryZrGiZxu",
  "key4": "7w1JdbvgtsshWLGSZcmsmj2o1dFR1XdRCsNRzArJWxiUosQjjMLPkpVQW3NWYjEp5WnC885UPxZXNzeV6AgwLBX",
  "key5": "27xc5KjkDW7wE7pzFyECwnrCqY2xFM6hztgUiD9mfemifh49Bc67eXUHwJSE4CKggjMY5mzgeW4ebJtfD74Yeh77",
  "key6": "33eiJQVKEKdX5YGvhvkYD54wdbDKPWDdkpAHRunAn9QAL3fanzatd6saAQuDgYv31WWpELHNoUc6pQiCq54png1i",
  "key7": "2QoXmCXSeDo76BAVM9EFVWpaKLdGovAHFLXgnRBXVVjTKAwPCa6KUMGiSpc1oNEUngxwGr68oYznz2cb8bSRp3aw",
  "key8": "3dqyzRvXYi7YCGuyVXm839JAHcYCCR9M4D1t2iTPkEqYHWS9W4diNy3dggbayjQnAZZT3zhdMqcWwrx9JtBdri9z",
  "key9": "47HZuS9ASdyTRieQema8bFZaEofif3Ui1ixb6xHZmKT4QcUTvyEmGzwhWYxXngDc5z21S3dUcS8HnKV6XPtWSVEU",
  "key10": "2CLHt6m1cateQByYSSF2XuXcAYM4Z4KCAq3jBojDssqKe2q2UPGPvVHr57mijHg4wd8wUB1myoJ4omE5g8c1or13",
  "key11": "5B8jZhW8KvrAeAZXofBMct5xACYkbKp3S5LdZC5jJW4jyuffEy1sTJ8YbUdBxvNfAWtB8dxxFo2xk8NLWSSgp4xN",
  "key12": "NQDk5LuztSsw9LoMBfDqRJrTeb32pekEH2soD7dGBqpfwALMhn8WJMLa3W4mLKJ7kvdYV2Sk1spKXrdPNefTnE3",
  "key13": "5xs7vqApuC2nqG3EahynsAQVEt7Gf7FoyJvc3mAbdRTR9kKhStwRcxkiuficDryf3mZA7xF2r85rRz8pW1L7wwsR",
  "key14": "5cugBVEE5o7aAnYAWUQbTNEqURmNSy8NvgSqWvZbsUQUaLhEWUsMoeZ9FAumpsCTB9x8qHhVFWesuK5MhUtwCKna",
  "key15": "VCYh2iLBAMaxH7cPPErawF9nfxXL4aDKPkYNYw2Dxdfh7gE8fTfCw8oM8RvaBy8QC4u5rpxMJquceBJBTVvm5qT",
  "key16": "36PoAvjfuHrRkH3tHX62JSV4NvMzSBJpFfBGiXq5VAASTbhnfoyb9jtuF3q9ATydypHWbNaU3LDqkhQtyyxPfXK1",
  "key17": "5KwHwbf1MUr26nhFwnbewCZLHf8Cfgt6weyfSWztADEeue7WZwY7aTVZocvT5vxVufBqThrZLDKe8HGDUrUX9RNE",
  "key18": "N1q7t76goGXkiqzotu3nSLWGHarZMmKrjaEnZ5CtVnWGfriXFRFpCfyRbR1MsiA2Q1nvwT9Mn45n1r7e65Urunm",
  "key19": "3f5bNnd1U9QVVNj6nGPivBtxxbJoxTssSuGKT9fTaCRDBAKPPQG3hsLJxmihtdgsZ26z9tmsJbXm2wUPnNo7qvV1",
  "key20": "5TRWbc9evwn1wFFJp6MCnpQLPWQQFJqug7dRnzK74za4sry9gHXm8eH9hoWi8fQPV85reY56nzSHPgAY8T9YMtVz",
  "key21": "hzM5wbyZeLEPstNzigAsNkEpvMMKi4hLQ3uKufA3ioU4jTwDJKHRtbP3gGeWKFjU1ifWderQNMV3Ur2P1bpRoe5",
  "key22": "57eZzFUBGsG6wxTxe7vRdD6eo4RNYUvPkvZPdbTGr6iA3FPozpRyehZxMkwH6r1sSguJauMi1oX4JmCC1rJhLCHV",
  "key23": "3AtSt3yBwv6D1VKtbL38rYtHTYUEdL2PvAGQdfPfxaDMgb1G5uwSJmrjudQ1FYaGrZtKtKbFjXx1eW7w8E8yMAcE",
  "key24": "5tvSdnSKfDnQ4mtb2mn9jPgswK6WPA3fejKbh5HqyBJt8TZKhCmeVKUpNh9KURk9NuxFcYNzRkTnJ1ZAJpzNijgi",
  "key25": "24FoRgCPUtA5MBpDFYEcWnTnB8jLA97kJKSx8hM7z5p8y5o3a7r2kiaUZNGsLgv7eYmjvwjx9zShtb4xJUMTA7we",
  "key26": "5FzZf4tw5ct9epiuQwRLmKxWKE58h49MvVAY97Sc8qUAybox71rAHwaxiAvLFn1ipCYqCtiKD1fxk6tM985XvF6V",
  "key27": "bGxeyZCMtC4g3EzPdKcypYNesX9bc4eoVR8WsNpNTjtuPBmve9BMKZzSgVqNxfMPjVdefvDDWZxFve89KhzBmLX",
  "key28": "5L4ZYJbHqR2F4wXJY7bnhjKV6MYmj8crnJHuo1Sp379MKka2d4vmSBhJeWK1QtR72ov4QywNtkooDm18EbcZ5CYs",
  "key29": "4A6xnJ8mGDGWJGswS31qMpEwbL4RM8DkLF5RSBMXhkRj9ear37CNgxq9KHxdhgpVj6iQTwf2zMN3K31s27HFNeuD",
  "key30": "5f8NFvNvTWMoJrzPMNVDRB266qX3h3YksbE3zABhKZDeC5VABMEWti8KpKqcRoWCQYSXkYLRSeakoEbweEUwyj2X",
  "key31": "Z3NPxA2HywbsfAp7ESrefLNS6ZDR6wUYADQWAY7M7hBdX37upVYunxgYcAGevZVL9UqT7UPmwtvDSkgauVZmrgt",
  "key32": "28YP9p5QVZLi1dASXmngSCYDE4mVsThrSn44Tg59zybBgBGin5Ueqr16HssdDvyHQh7zNyh9vyzrx6qo5yWpUa4f",
  "key33": "3SaNdz3KDodSxtiuYqCiPs9nwU5eM7ReYb7fr4AQtWEiB5cCr7p7YE1Zyu2c8xERzHnE8XPxHAZbLxqJhrh8xZ54",
  "key34": "39m1vxwtq6t5fX9ArpzfnZV5LtWXC3MymcSXHRWqPeNmASt49WqcjRGq4KsGABUBuz8qhmdUG5533yUbqQqvTCKA",
  "key35": "39dC7ZrTbMjRp93VS15dvxb7WSDtHi2b18h3x7jHvkwxxjwWfJ5JvfGarXksYKERt8Sv1e7S9tZHKfUXx1tdtKRv",
  "key36": "5qgiTN1VFmdusNAEzwSwj1U6s85Ccqu8NQ7kbBsAEiYF1ZZLZJqxUUAg4BjWnzzFNwBVH1jbT6tCu8spBaXxYmHt"
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
