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
    "5KiCdHFqyA8zQg7uxSCKH9GbnoFh2dSkLGpEfGWnsNdxA8g5orwVuVbw9uzri1R1NunjbLCoWLpc3K2FNUMWoqGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Chv4erUmASy1ti6NTXbYP4eGDdJBScBGr8No2Wf269yaLXDefbhR3CNjEkQgWLoWH5JNE1jcLqCbUjnYgoBSPMj",
  "key1": "4iK31frkFoLxCweWvHAWPsSgZXWZ48aAHjFrGgDMk8NVBFYQQHUoVFdsMgFfd414TbYuYeZJxjZartQCtRnooCYj",
  "key2": "4kiafx1hXVXgq5NuCPW53Vy1AFcEg1DUMEzWb8fXgoHv33yGFTqiRgYBTMhJyg9ZviciL1KbL5F8MiAb4yMHRBKt",
  "key3": "5a4pi3uWMH3rxBszLz5DK8Zc7Q7HBzFnKEEP6XrRKpEgU95iJfyxzxdEsXPcvRbv3JRLKaRNriVYbEdHfGkSt6xN",
  "key4": "5NkSJvr5tFwpM5iNuugmmFaFdV2k8KMeNUaJHgBtfuii9Ve549Mio3ASwA2oheeFJdDzZjYha2jH8PQgwg2hEA4z",
  "key5": "2fQvXgts3foBUWDn219q8bpnZW9c8yfh3Ucu2QTABgvNHVFbGAsvefqLCLbGHFshQTkcer4HcgQHmzaGmCrwifdq",
  "key6": "2QHSXmdNGze8ym21vGDqbCHzYHJSKVpyxn72B5qLwZSMfUbwvrZA6wxu3vaPtM2SPvZLWipH7U2KREh6D5TPfoYk",
  "key7": "34koaGbxMJ16cpRZcRDQ4gtAALTzszJGTNaaQ1uvcqRbi3x7u9B4nv3Ny9HJVR5scmq2s3cD8grfWjcgcY1XESo6",
  "key8": "gBwjJwwEVLbi2YNmZKjebqc8t9nQdHcFHjnsgzKr9wEYckeqoGptwPtuNKbwvRZYaPdpnBouW4GKPK4azx6zwCn",
  "key9": "5hfkBM3gfrYVoobZFrYzfCBXM2juaaxCjxcyBzXMeYuvGBZ3diV62TyjypWLLedbvnTgxEXHtVZUq4nH5CB4Bert",
  "key10": "xwybv66nyUHBS6sB12PBGXqRqrQgnYHAk69bydij5DPTYhCwDmrZJbzeoN1LuCPGdkvtMVkVCqmYcqYw5GsWRSu",
  "key11": "3fruJsVVKASXgTLrXKoFmLR3oEWc53LQ7cNbtDtYpBtLxCBkdviJG8Cz9uum5b3WxVQu6xjaiLzywmd1heggkXF2",
  "key12": "ecUqJESQeSBBo4qxofzWLqtm5sDrS2BV6JTGS37DAwpY5DTVQKh8jVuDuTk5JJmbeAkTnLeZWDyv2DcaiNsUjY6",
  "key13": "3rhRQRiQhMw4SAMeN4QNm8kw2oUdYYSx5AvsPR5WRygsFpJknUtx9NQNxMM7oQQRGpcWNXzxN5wRzGDR8UqRRLyo",
  "key14": "4veos91zAZcEE5KKnj3Em7hY6AEVBBwEt3R83CEX7LaetKTgHHubcjRW6JBD9KCwDWKJ2hhkaaJ7mz9iT4NEQ5BN",
  "key15": "Bbd4cFUtyev6KbG4EUz8CPvspyPC9SP91iAvw8jh9ofJXMfta2wut9qEGMxrE92GNk7R8hxSpU8iEbnmrqXoG8M",
  "key16": "5WaSDRM4UJiUN8V9DCnAjDPAH1fXzdME1JC7qRrYBnGY8yGa7s4zE49DjJBSxx6tSp1PJbd9cjn4AqP9vdFdxdFM",
  "key17": "3WgkS2L4HhyNLaUhhsCqx9HYrg4h3uaCoRxU7S3TgWnqTJrBzeRm7pub7XsCyC6vFGquFxvkaUTtuoqydsCwFQuY",
  "key18": "4DByZBEgS2YgaWGjseiRM4DwrX7NofwYtFUBJmzv7NroMwTJfHUrgGEa6yN9PpWhuHwR2SiVRqXLGG6GVkm4ATUb",
  "key19": "4BARk8rXjDtAdZR2jxpecqjtpyJeqgnMkkbvET1AwWdxh2bUTUxuaRkuKBK3ijKhrJpAwqu7BeQ6MjNupgVHXo8r",
  "key20": "3xvqjMU2Pwj5p7iQnEkgjNqSE2dei9C4uZ31peZeaueK9DKrDGQHEQMzGyddPzCDQQLKFTstafP6dp3Trnw59jue",
  "key21": "mBL7brs9Sk1FTrYQdqsRFzqnn68xT7K9CsXk6jy1s41mEFGrQKkaJm8q3ySFm1utP3qQ3XdLreWD11fMtNjdNQN",
  "key22": "2vw5oErHZC6muvytm73HiAS6nhJxHCFMTsNwfNZXXyDqp4jskMXBA8r7PUy6R8q8L4AJSdVnFdAjgfwRJKkr8grK",
  "key23": "3yhgJucy7vkqmn1guJN2Ju4ecEe5cagoGz8mbs14S71TFG7BdX8yTLMWWaU2jK6KtnzVMmKKJtVP2NhMuoQ4wsEU",
  "key24": "5mLb9VaqBH7d7t6ZR1sPRUazKgGmkj9LvpNb9wLHsoj8LL8BXSVQEa92kpR28SbAZ2YFghkRjZ3VevbGxcaZwjbC",
  "key25": "22A4gsBiPPdvYD93Ex4kF4vL6Jho1G2UWZGHCwnsTypjEvfaChZfxMzRp4dYME8rqZfRQXSs3ojXC5jSgUBhrPRP",
  "key26": "2iTb5pjDJr7rQz677uNeZCjyrk5wkMememgtEDx4GZhxDQuUjUfmEvUgg3LA7DD2V2WiFJMTtZwwFgMeKXRKrzB5",
  "key27": "2v5NxAYCLA932zsH6g6UxchhkwaSN2gZ5GvNAcctfaXTWVCuL5dyEjbpoNERUQsEVShYzv3eWCdD2nmdn7ksiF6E",
  "key28": "3LLWXDA9e7pxKmvSUYnYy9dZ83Pdx5DCfUjRpdAs6LUxcEN7Sxkmim9ZnXpdrLweJYKfLZ4ZX3ebrsdu26fvLwRL",
  "key29": "54uhdg1DyaKXPkB4BWNpkLwovaqXnemxz6r6HPK5eNtFDBCVMJz2uNoXE6pJq5tkEH8iUVUnH26NWBDH87MBzji4",
  "key30": "5oZCHZAAne1ykwFrbqpPB1UxktHwj6wtdbjGpJF6WETywKUZqw2CKcPB24uaL3SzftY73ezDURbnF1zb7oTVde62",
  "key31": "4JqzYE61JqSa9mKNpVPhqWZFdD92f7E6w32GdEwmAKMt2F35NGoDfyoy7FPqkHSDtvrTnj37TC5gmmLLuC8j63Gc",
  "key32": "34uyDDtBerL6b35VadKk22UE8zyUWAJEueeZivtVYrUaBeiu8656Bg77o9pawSh6dVC5AUdDVweGTTopM3mDZrS4",
  "key33": "xAcTbQwwJGW7Hsjo67KBodJTVL6sQJQoPxaNvPHjg7vVCBP4kRw35nNdpbv8tVHB2BwMyq89MZ6BeK4hA4s7FJ4",
  "key34": "3ZYhL4vPn4TNUEMmNTUY8HGTbhXUiJKCQDSMm9trMi8TQo1X6DeUhSFVUS3TEt7ENgDVrx5JGwF2Gw61ETDJd5nU",
  "key35": "9JfHnuaPE2yuQHR1Gw55sZuWw7QnyXh7CyZgXDqqnEhtFRon8TP945xnM65hLYN5vh8eV1hhfkndRdBwh8PzYRw",
  "key36": "JNCJm967in9yGGu3prPzCQ8m6GjJcBwYHSaeA2bfTUYk3sMzbWZg2E5EXfTFiqErMLRHHShWh2msNvM1LPsZpqE",
  "key37": "ExNE4csRDWxY6BBtSkwXwbCSTgravquZK6scGNE1ZFv7GYUs9Eh5vG6qtfqxcFy3Rr8P3a5sF8YNn5UYQRWPpRc"
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
