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
    "uQGgRB46G232XEBYFqsnbKZjz8i9BBXqSbkKAhkntqsvfZLP3mAmH1CqfWqKkrfGUL9sX8g5UJa6ZiVKPjzTWEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tHZww6cjEUUfcJh1KHxjjQmwfkDkU4MrWicghymQuLq3hRGaUDHTAkFZxzucDifQs5527VQQjnin5fQ2KbdFmCi",
  "key1": "481rEyNfSqYp43txehAcH1Ljr5zHVsdDMG2UzLwTy9uSQMKitcxmaTf4EDwfdiokYxeCNj51kgWccQf43CVNCb7Y",
  "key2": "b8aoRhGw4ppRZsLbmUZPNyDuYUqZFxS9HrvjVXh3kwvNeqPejPWF6Js5FiUYuHqUz4seA7cJNsnYWMeFcAzG7BW",
  "key3": "5P3pHdG9Rk9i73wUNJHrHrmfm7UzYB1MhCtjSKYQ7amDw5wDxZEGm6RntZUEBdDfKf4pGZKtJLoitWL38S7eFSSG",
  "key4": "2fDd5t7JzRinaf6U4MhJPJEgbLjkqGAC6m4zATrkuD81xtWydeFcMXjr2CkWUV2sEGwvPi7hiAGuyVPMyEm4uNMm",
  "key5": "49Wqnwm1eaTSaZLSHX1Gsbo3W9g1GY7uRMasGoj7WWX7YdK9k2hXvRp1xoUqqjUVXuSMiDRZm6qWGET61CWCTQMf",
  "key6": "aGNt91jX4BvQKncWY876oJPQF4VoSJYx8QiaicK9WGn8WJoHoyaZY4VVGQxyd1XXa2mpxUwcawhbXKQ7M8Kdyw6",
  "key7": "2EWu7gvjuCh6NrQraeqwd1XC4J5drg3o62pHndiAoAnqpjCj4h4FG86QydtRZhUfh8ipmTdiWzisf1p44cbJD54",
  "key8": "cNep4vDXDemACeierB73uEZo5DAhEdpuf3YhDAMCzUfin143uSCt1RUcGzgiP9mHHhMhiasFPPsGwnyhmqfrM3Y",
  "key9": "5RY6MirGi7hL5RSAxef5n5HJqPAendKgJhjxvtLLxbMRzPejhSPGWKEhYJ2rYEgnD3b4D6grBxUaDAY9nWJfN7RE",
  "key10": "2tYr6gLnm1DHaDhuBCHbi6XoFADrdPckvc5VGUS4FGmR6TwfsrARqkxvX6bxsADqYP93VEghUVS2KbKzpdVHiPHg",
  "key11": "4SJT17MSCc9M33BWpaoyHSy4f6giaJdhQrzE3WhaJ1HMoWY1kqgZSVMDquDkHNHrLf289hQdqjGpzZehvUhQrVu6",
  "key12": "2sr5U8zacag58NThGPkwWb9wyFdEhfLCWQzaHrhHGAF1VuiNG5neiQAfBVpxaFU7Kidg1JtABDP7FnWmKNpVeqRs",
  "key13": "5p7amnjMfTUJJoXc2X3WFE34vpMrrPDoAgPQUosa4LRChXWKSMcEdrWrLE1VQ73y9Q2ugz2pdg2AjvMdmUXHFmyz",
  "key14": "3oqN1NGzNJosxJVFWCDg7BXV15zAEqbajAMhjezkv2zt5ENTywFzgoYsSusAQiVFXhywmUnDKzUgMvHKMhAqURup",
  "key15": "Bze3tTPvgRy5qYHbjtFsd8NbAny2EQvTY9XHAnQvu8Te9SjuoEhQDFs3TYp8TFdiDa5HTSpeZcaASwcVXw6F2Uf",
  "key16": "2BUzVWeiXT6Kacps3iDtHbcaYkypRbqsTRogskwP9Epwmo99v5puxwpziq9aFXCgJxxGSwzT3n2pKpdpfLxVcsWG",
  "key17": "5YzU8NneYHpenHGBzHDyYRE5fZDbeidY97S9XZrUshQZVE1uyPxqNgMhddH2Sw1YAYsvK7ZZzg9rxB7ku4UraCsi",
  "key18": "3FgZ2GZvTPvT88affypMgHFQjNQ6vdFtMFRMQEjWqXjz4HKvRAEJJnrxaUY2teqWwA1UZz6bAW8pvMVCE7qm8cFD",
  "key19": "M2BceBh8NW8k9VyvZgKrtjEqLmoP3UfrqqWPB5ZHosSgXH2ohyjj4iN5unshphZaHcgDtpx1fZ8tvD91Tp22FQk",
  "key20": "4h59BGLM5Dm3MtrGkHMiWhB1Tjiftw2YGckbzLtWVCpR7jphkM55NLnDFUB8ju8g9wRkCRGJXpNhvvG1TKB5u95T",
  "key21": "2WHDiKK5NyvYsrygeAYPXzvf519xPKRzNztwKLAcVjHt2yB2KmJpkwuScSTEQZsHekqhqzSx8TJ6P4kzeG1pGgx1",
  "key22": "2seirc1KtiqdYMYBytmq8ks5A4ifsZXPCec3J3XWoUz4Q66mFesStX8N2BP3QMDNAsLG71shyrsBfJzzif87327z",
  "key23": "42BqzrLyA2utXBGzyxvoBnR2C6tqUwwaJNVmoMRjpqMW5i937huRgzm9HxgCvLoswdyYwNFeNtCZT8omoybpgSvE",
  "key24": "5jCvvy7iz8474umULfUh5yUm5mWgCkzDzaLhD8mGNX66hQK8PEiVnwodnYLzcdSsjjLhkNWdtztTT6PbkMAZjxUc",
  "key25": "3TM6AvJdpeb446E8vsYMEXsmKUvTvKLnqGiFLwhJdfNi8onst1y1JKFKmwJFh7G1dRgctZcdzFdVcqcfgvYe3ojM",
  "key26": "38Vf886SVWcPH8Y4FEQHv1jLF7c8BXqB9okGkjKBiXsFt3yvpM96QWpGcB3336HZdjU4rMdA3D7sKpaMoFp8huyP",
  "key27": "4dWHxFaCm4H4ryW6Rb46XGm6JPPHGHV5ThMPXBUkZn5rznndETLrxMAVbpsWfjPEcQ9gB6w45bLsLQMbLSdE1Msa"
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
