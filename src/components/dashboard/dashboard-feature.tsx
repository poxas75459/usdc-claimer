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
    "AhiNoAqW4PQ9eiGJcyyLRgHeEydUn2Xftqpv6SvDaGV8HyabitfzkgKshod3rGQTMUfQULH1xkFTTntexymdUZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLPnz5gTT6ebX7i457zcUEwSjaCvg1mcGpRUHg4K6karpZXuzeunR98kMkXUdY3P46qSSgpH3fhb5suj8hySi4J",
  "key1": "5DpBQPoMgiwehkPBBVQXZJqbVoybyUJSKnjUJnDxvnhzqsZ5qQqTkJkQ88JSys9qseigHTT3g98Pb9szyJydUbC7",
  "key2": "5YFAX7JjAh1gP4CXz4iuppDwPiwK2NqPhMKDSbquBtFaFWUFxhK1Qdy2forrtE5nshKgMYfJroTQ5igUQyc9zHfw",
  "key3": "Zxp9A5R25ZuzfHxY6R8enN1vLvP5B3CHkDNw3VaPA2npPHSCsXGvHhzVPMRVtVfMRfyakDXktMte3uWJkvALKj6",
  "key4": "4AhA3SYibCjUNB63jAZrKCHgDNwiJ9S7XEZihvDxMQHxC4hP6qvNW4iwyGjwGFjC5UpGsfE5raErZaQprYFk77nh",
  "key5": "617ZvXbx1Q6ex7aiQfsLernSdKzHL5ECHpMajGbdc7ksmjnuxwwUGLqBfWbwJU7QaEnu42xKNNDtTuzjkFkAF4Ei",
  "key6": "3M1sS7tDqfKsFUY4fFZqts4sh6VtiDQDZ7pNQPWDWSTaJxZokcPE6Eskwv2xWmXUYQHuPbtfXXBppLxsjTcLNLLy",
  "key7": "44DxtLgXdmg8ELwv7hNFoMXxAWPbAz3KJBTmeDBg6hhWhGJXHcBmzjVDFjmQMesQ1z3RWKBiyZHZ8yNoup6nNtrY",
  "key8": "2EGUKZP7ptwNLyvdMvomZS2xSok9CSp59vgHcBwpd2bxARbNdZQNU5WkWC4xRuuuMC7J3MPozKCxAsmrsTN7hMkf",
  "key9": "8G4o8gyKQ4iSCoTettqx7AhZb2GBknZ7Qxe1gabhwPy44GQ6HikoQUvGnv7YjQfiZ4g8g3XTqpZ23NSjyfJN559",
  "key10": "j9HcMuqtFRD99WGkShV7e4go8n1nDSD3xkRH23jd15XMxb6GXVSLa86LqMVmuX3r7FxbNo9K8viMTQAsEj7DZb6",
  "key11": "3vB7tw4XNQEY7Zk8d4dqoDiPu3k5mmi9mqtbNGuvuCnQdNLWCW8ZzhC5ypzPzoedBZ61h3aiP6xjfzwDMZcwwmpW",
  "key12": "2BbVxb2gxtavjfx3JHdMMucck8CSnpQRRDut16FF3g7Q4PNX24rkxm3RjZodacQvZ1aW2KGZpvJGjnX34VEKSm2U",
  "key13": "2vU4nWbH4nyoszgDZ2a1vyEzY8ZFXqPxqpST1BXjv6W5wvKiGWptth1yE3JT1D2w6CAvLczkX7qFJ7QtJYpWVABQ",
  "key14": "3P31VCr1kACCrzZLqQq7paetiFhmpXic656ibZbQVAG3FzFCQ4tNkBVJjLZu9u6By8kHE4zxKdYzS72MfNnuShGk",
  "key15": "31HKFM8npdWRT1vuDoY7RAyUexWVK18YZQs3A6JZGcpWgPP5MEhQwBbiJzajHhMNpnRJxjJ91h11N623mznYCE13",
  "key16": "621qZsTAsvMneHXJaRkVUHfs6AtvfknToN4XbLYkxPZFksjbP6gf1u2VapfuKoxX52ZsywfqE412xe9QDAVpm49D",
  "key17": "2VyYLzuyv28SEd9eQhfACSuWQ6ovKTwxbMxbUpKFdWAK6ptge1qCg61xbq33yRPGwAEz5WtR2hgDEt5RPDrMVrcS",
  "key18": "2obobAGzz8F8XMaDx88MMWLayeFXQk4vKdUAnyTEswVShLwXfCp6LYaCNcP8WCxtL8j7seLPBUA9KJVuHS8E5qpu",
  "key19": "5K9PDwWYKA2qWRKX7otcTuzYuWYuEStvUmLSPQJuQfZ2xBQjhRC6FtY5n6fGZcMQ87oH3VeBJYYvYjLGpicZ7XHP",
  "key20": "2KXhEttLkGufcDZ1HQaveb59W1j5cTXLQHMkCPEUVFyugjzKisc2FcC4tpe6zqdhCuddJFM9PkqFL13c1iVYAPD6",
  "key21": "5DhuaS9HX5WgpuUDhrFeWR1927qayosCsooS4wTNMzdJZ3erjbwZZsSpUZsLk7p35Rigp5vAPSFpNbKmFBXpCmok",
  "key22": "4SQ423btjSpCFahc3mz84sMpYMqZrbMUKDNcweW9ReVBKV8fAP3fXkMMwM9U5aowmxbChKk2LtFabGhvaEU27SwD",
  "key23": "2rpJNWwS9DYoYT9haHxWykTWTu7wAC2famxUxnjo3GsZ15B96PmNYPPom9v8Yuc1YE5Z2fLpjCYrejSTdJDVwbKL",
  "key24": "3Zr4dkXxAfqX5HaUzDpYQWakqgSf4UQgWDpWukZ3dHuokxd4WZFBtqqsaJUrJAfsqHoEmY9NPDEHrRiAa8ECWYiP",
  "key25": "v4zQaXGDk21BDmJSBVVc6xhWDbcDFaznnqbFP2k2uAAZU9KRq36jx1py1nPqwhFhAEYs88dBrjXwiyda8pUeU15",
  "key26": "2kr87FZTs7tVt2vSBm8kZfVmg2NruopKBUjxhY34NkbW6TADf3gPctUUfNujSnfNURJbn8yy9Xq92ciQVWxchhYf",
  "key27": "25e2H1sLZJoAh2EZkWVZUKJhFUhEwiZqYRbPur2Vv9xqSsHxWNQW5gtGRhbWiCKF9uaChGLoj3cBtV1Fb5TQkzmG",
  "key28": "4Q67sJLJ6ooHHNqi2bD6xSodYeWKDcYtnji9zvUVS4WzFgwW7NhQaQZFUx5UnFh4yY2eq4gXNpvZHivHvXKKqW98",
  "key29": "4c92GbhfqXpyYiuuFJuKEzpq7irRHEk8HX6bzcshqSsfjangDt5vHuzJ13AmyhfPA5XSJrtYwxNQAJ8ooXDD46Et",
  "key30": "42aWFZywYWj56mpXK44REGAprfuYp6zyiMqQtAUYoFR1PaeUfUKYD3w2i2REAdsTNKwQrYM3vuJFD3kaTm9s16AE",
  "key31": "3kUhqDc5ZmsY7Z7znFaHig2waqzdpDH2XX4PjT7sGnkQCEfWnrMPCuUUERoyMNLjbZCvaW7JKQj6jkKQmiBc8wZs",
  "key32": "2Jays6vWbQTWMHJJBhXjNUwiX2ZNW8skkjS4MDJfW8fjt9Th9WZJHmSn3JrqqbUo2uBbWsWpaJ2qYDNJu1hxD9b",
  "key33": "3WFLMTGZc7Kt22ZKnVuKnXhQhP2FRkTvwqbVEUNfXh9MoyFzjPYyj2pKa31Jc6HMNy9PQBYV3ofoEzijgi4UE5KW",
  "key34": "5c4jphqF5DKDB6daA7Kh4CedK9ehyhxs5go7QAPNbhwXLznExLRZDZp5cmU9GfYvQn1jaPFh8rM2pAsGDGi1S3Hf",
  "key35": "4GHQcj5oZmvxF7LYSvXY2cwqERyJgr7H8H7Pqsa14FrpbQH9EwW1fRzFdJNj9GEigHeMrScU6o6cnAWjqzdVAnm3",
  "key36": "2qzbg8gC6DJzWEb4ojB1YBZK8i83wsUJtRRgW8P2fgu6ACU8pZw7v5PyfuvWcNUDWavi7EU6FXEmcDRxUAwwUGhF",
  "key37": "3ykSU84iCj6DWKqSSNR8D7fknM4cW9sJWwYbVeLGRtASqfTGYPTQUk9kGwhMHv5mMeXhn1mJoqMYTUGvVP7gm7rN",
  "key38": "3ns7VFx5mR3ErQWTAD4And56A6TgnrtmxojYmJWxzZWNQaeqzfPBzecfrb9vzmytCqyhUbCyUpPRK8WmSTnCfHhk",
  "key39": "5EpzAs2LSc1HpaMTzLPp19DVchqiTtARhn2UCKjRLUTSx3DimW3Nc9eaKztSccgDm3HGGpSPhzJtFQLvR8tzDvqQ",
  "key40": "5aLAF3VbnLpQs9175maxJVHsyxoxocizFmjWf33SKegcuq5oWeSBpLBFUxU4aYSLqNnRi7FZaKUBbweeuTqWEkZz",
  "key41": "4fwEkMYMdzcTEFGgBnPvcgv5798HCBEqGtxSBYxGWKmVPzHWfHTxBqxFo2tCcQ74BUUeDxvkX44vhZaNoQnub2Ko",
  "key42": "4ozMDpwS5tzV3abAgW76tP9KJAXafyZi1gzVBJq5ShK41Lhdjfa5zsjharmCqrQRLrzufhyXE2UfHqdZVBR6NLHU",
  "key43": "39X4HiWgJXxDaVFwZRYp2PCSRBeaLnvTbfExibb42DrR9Gt3dwHTsZZRDZUdyDkqLiCNVh7B4dFTc1KXorkZ8aJQ"
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
