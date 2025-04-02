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
    "SymQ3JU33XpJQ3UG5wxzWq5hQfN2g9UtBKxUFyjKgK4ytoLZ7zPQLddiJ7fJYUq4GFopLnkEfnivXQN65aodVjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XN6kLJfuc857VP7rsSq8Gg1LXhSfJjkmFCWHPsPMqL8neHSwzuQVN1bjttUBTPbQw7unPoLkuceBj4mv4Cp8NW",
  "key1": "3jaia8rceNL5wA5sBJqwVHEFwGNySqWA7JtoaMkdcaAkVFAEZydvPspTHvKFqFWevqFu5t59zLkEeRTHQqcYCSgd",
  "key2": "58YqP3cFbiKvn9nkU92jZCyvn8LiskQr4sZvjxic5tfTjGXDvQED1TFUCLNnFHj8rtH8iX2bykAYdaS3piinDad9",
  "key3": "3JrK52SbysLh9GErD2geJxq4R3NYcvaJTRetSLdKMpGU5A4nHZc4K32vb191cyA5tdSB5KYQBHVRrv8DaorT4fRf",
  "key4": "41y3vcZv4MjKyXBgH8KrXdf74m9VHJWLGbJb4TWZSy6stUP64DDCv1n8YLBk7iTQiihPzRHFy3yBLmhsA8S8166E",
  "key5": "5PbrQuqSk6Gf9r32Nfb2fdYtACEBiNFqhFV96bNLvjFodrqApJbHzLAaybEfa2ZM4bqP4wV1n8d6z1Wcgya37Twi",
  "key6": "26KMLYKDoE6Ko3A65iQxJXRkUxccGZ6Vu843XW6AwQ7mxNpCjRuwoVPEVeU2Ai2LJj9heTiPuBQFnU7evv7puHJf",
  "key7": "2LxpEKZdwcWDB8pqma1DA1KpWK9ppBUWDiuXMx4uPFp7YYLWZDSEpYFt2NsRmFDtJ27m9SM3vqLMc48AYwa9yBhm",
  "key8": "3h4uXcwsXWYhzbu7MY9XQVcR3uUvY7JvW4QtFuQQjNxNuRqJkx2qoobNk4BZCAcw6RMp4XC2FjXasxhe28EQrhxX",
  "key9": "5yHwccJVy9dbq5ENBRUuv7hJMB5pHubbY8hYDuruhpJk5wy9N12gXkCZy9JkoR9BBgCDSQTFwVbdVrHCjJrKFbW8",
  "key10": "4v8w7xwWDi9PXWH9Bd8u3bfVpCxpGrVgHxW6AAMd55u984HvbSdfvNUV8TPVSuFBnXUSBaJwwzawB3a4f1VZwD6o",
  "key11": "36KDhTiHXGpXWpnQCWdFvbUCubTCf3GcZP5QXXqib97RyKe3Fcch7xqoKWcFtSVZ2r64pXiMEvrgv1NZffiSYfsL",
  "key12": "5tMNtk6i2SP7RyLwP1Y8uWd1omaa2eLxmQYCsgc5mQNWru987xaYQ6q9mi6F754b2tMR1LLULMrqw8m58M6g8dUG",
  "key13": "4wUK9xahLskEqxqb4U7WzNZAMMmAoqZERP34o8XdmBM78gAiBKcyuYmnJvvaPSv3ZCTfFnRfwiYM3st2Y9pUj5eN",
  "key14": "51AkiYgQBqW2fWXB5PUM5fVU6Yac2E9MbF1eazw1BaFnAnrV3rQCRTcX1VGAxCkVAGVtVvd4XEmcwvz6xqYKLx4S",
  "key15": "4P3hF6vrse4H8LsFTtYpCzxeVGzcFMTK6poJPtt2s53BbVeUCs3N5otu2fZaFG7x36N3PHGyAbgrT6WyjjtTErhQ",
  "key16": "2xEvB11qLDBjXfomcXLieixN26dZDaPdSRM3Fz2HP12p7roCnaJzSf6bYvJBnvAxdPWTm1WYWcH2Cy79oF7xL2Y4",
  "key17": "znQBTg2eji8s67Hxq8W9dfbq4a1HoqNzgf8VBFu5NAN5MZMRU3JAHwFgx5oHUeVqDh5CxVagwQWjpvvEq2mcfHx",
  "key18": "2PwTuHen2NG8819KNHGpnu1St6HWVCNjEDNRjGbDn6teFPbsmzTrNYWoeRdi8aCL5TSKUwGgaCqpxdTjNsBwihyJ",
  "key19": "234Xth4FBRK7TKuU2nofPKTkobLyJxHQFmdbqWmZDbvsW4Buce6pfU5roj2dBTpyLgQxhmX8jhwTdXhbA8VcT6Am",
  "key20": "5MQ5uHC4TZNHfcCZhs2qEM7QFifFicqfDcxHXKiugoYrZDrEQTiZXvTbcH6vti19zC6G7BUesVGcPVHNB58gWbcV",
  "key21": "22QbPYa68b95STu65Y46tGCkFWudgesweigqEaDksmwoKV9vNtdKV1MVspK2RsAdFXShTpDrCFrEArddJtGSJZDU",
  "key22": "4M2fyjcUGXtGAehVRjkVvZJkhMKj5ndTNX6s7BAcMaDnhUPiU2XBM6GLq9hi6qzhphY3xs9kBi8sSTdCvaZEU2ey",
  "key23": "4UD9EKTZDKYMaKVxNKUZVnU9dSbNEjVBSa3cNs2PojyarcEBowQN1pzJoWuL41R3Xa3kfALyx7SYq4b8Gbf8GJcP",
  "key24": "2gQBcBnAL41NnEXxw9bAeFoFx2idTYWTmLTBuoY4WCCEtbeF8e2E9gnAYNww2gJJ9qM5fNAwtRnjV1uPhVExiik6",
  "key25": "4k7vZQ9M7bTPkvcJWqaWhKaNqDtHv4dqDkQzf2gVQy3ktja5QPTxHGERHgVz89hYB6KSCHxJy2NgmRDfUiHpLyMr",
  "key26": "41rCNeXfb4H5uRBasqvBZkrJ9dVHewq4bkSa7hnYSjHoHbrm5rpvRfgXi7SPMPnqwVrd6pSdvsuGByBNx2f4Urkf",
  "key27": "ekiRJ54zfBxRKG72mCuVJtf8GvxNZktptvfdvyP9xCVTnHr8JvtPwh4wXniEK9Ku7V3VCXahnt8h2GjgwiYDyTg",
  "key28": "4B1dRz5RHrs3LgESvdowUtiJL2gpFvJRzCFMK5cqxqk4JNuVa1XHRRDCCcZHcgF1muLUiV8wQs5hpCJWBfBkf8ur",
  "key29": "5A58RHUWYY6vn7njmvUweFo6antiJNEV9i2AjeyJNKkojtAqS1p1Zs4RX4dYaGsoWou6LSGWnvA9Db6Poe8U24A",
  "key30": "3ugpctS2jb95pAZiU3u9d9GLUsiHuz5Y7CnjqxkbWkC75jc6oEbe6sir3Xgg2GvF5RbVBoxo7APvFNwqaZZRjc54",
  "key31": "2NDNwZGCwmpFyJkmCCimXAKL2fKR4U58xXEXr11ragPhfF2PHTXc7SYgeTWa2Fq6kTkevaCQpYG2Pa16BphMTtxD",
  "key32": "3V8BvNu2twGxkfcWGxipWRHUuwPtaieDGvLcwfxEgQX43Brn8y1XFjn7mALuBx1DAT4Y7VYZrNtCPAcXuKaNDYkJ",
  "key33": "4xU99jrww73RAechRE1qaNkGToeicbnkqfNryiAc388XmmN9iQjiYSAg4jxXCg6GGkbkSEkwqAjwZAwAidfJqphA",
  "key34": "64AeQ5gkdKRvJPHeEXc19CJoxjEcovhaLBcUoA9Nq7UZZP6f7tpsYSTh17QAV5Dnnf7AUUJ5G6EgvNPLm9qVavHR",
  "key35": "5rFV54cEaEe4ART2wxHvAtW9MqmPGUmGdHUZmSK3gcN6QHNEVXkQwhtmE6omSHEHc7UB6ahCyhGsEomEpsCKvEoH",
  "key36": "49mMHjxeftN1eKRGnRjXnhciQJwBcKfq9gs1G8ErvnEf3MDa9fEonNfoYzWSpASkpazJmJDoQkTo5p4cHmzXkzkP",
  "key37": "3wdN9crCZ27irHDAYsrCjG42zFed74j4boZ3fJU8s4U6Z2qYewB5njCzSrvsQ95PnDC1fwqdadwh7SxJYizHBAGb",
  "key38": "5qfjTwgFtw88CJBtaMQCoTVosDNsgV426gNAaT1FHqqy9KXGNwRaBHdJc2bxH7ZuCDxg18KwEJ7j4VKaSz7eeTC4",
  "key39": "3ZTou9hvtS9QtTs5wucUkBXbi7TWuKxyZuNRStCYkgKF3Zqh6hq6jfqhnL24EHJQQtfYgDRpbq9wmKseYsraqn8T"
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
