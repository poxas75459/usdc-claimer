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
    "5eYKC7hKMk7or9FXTCJyFh4oTxjEj6vF9NQVLnWLKmja1nPQ7EVLdVJ8zDPvbKnr2iPPafEqcFEiCjZSps6xbyo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhYptaPMetVqm6P1QGQZ14jgpqEyfnaNz5HMZ5WMbvvq6Qo8tWYPNkeYht4PKNUAQY4bh92CY9ko7uYJpD3dTXk",
  "key1": "NfizdaC3gYtenbyUxSLFCD1dBDPPmwBYrTRFzk1yCbVBxEAKPMsJc269i4RBhFVqRLxJcvtUyU55rvkMaJdXyy8",
  "key2": "5Z2WBrtF7qL2vPS8nDEkQQNWv5wgYhMQ9mrBqMf5bhzsZQcuyf791cmohui28WhMndaPKRpCYhQm2Fx7JJWhYQ1W",
  "key3": "44pbkTfTjTEGiwmSgQbrVhJyENw4YXcVDfz11XWpPDDV1hvgDLSwgcRwWS41V8nTGxt2emhKeRZsVYKEYYM8hK71",
  "key4": "g7evc7wYMDWcpeoybdvUb4deBKvjDz4xEfqoEUyjyJPzUQ6zGgtt1C63CQsvexUYPVpzc5fqoqhKmsPjvzSGH3G",
  "key5": "5qd2jfTftuKMmmXPtL7MZS6B2JYHhAAEzxL4Wm8Q7ExbwKYCaXzmMLHVHchhCtMwu9UnCU9kXbQqjc4cMsuvWcUB",
  "key6": "3CsYWY5GrLYhwYNYfKrBHsttbc6V1kw9Xx42n8KHBrJsRycGoFKAm2N9DgjtGeh6rEzDtXpW73QcxKYPJJUiu4TD",
  "key7": "2tXqWeRp4JAAoyzbkDtjgfxyKXbR4SnFgyCCbn1zd4cfLzvQ2Bj4msKh69YHMUSJ6hFLQ4YDbbGL8gRSjCD6PS5C",
  "key8": "B1nuj1ZEc1A4aqbw8ZAK9ULiA6o29zLvJZgrQWa6WQnzhhxPhYCobNyjYhYVPFnB9QAp9hncdRUfmieCjFisYDo",
  "key9": "3s5f3y9BB8g9urJbCwqh3HbAnCMm6ZXuEPuxnvD6bXH7xvGqZAvWXJyc5zsYYAzK3EeVGZG2S3hvyLujQMZUJsDM",
  "key10": "4zkvaL3P7AnmjckC7x12v19Z5S3oBNLUC9yaMYw9yYa6zfHaG4FV3bK5UpZi6XPHxMduN7aeYtBv7c7QhKFBSC7o",
  "key11": "4TgNKm3d8bgwCz4ogsWArVkjYKavVXJrzJM2nmytExrCHab3HynPJYKfXramizxjmTP7Z7pTfNjmXJnL845xq549",
  "key12": "4dUqMw2VkGGE72p84P7XybNHisavXY7YLXXYxs3Yw89P6Eeene9x1pFeuTdRdLiRcMAY4wZ1i4mW48ydwWVyxh62",
  "key13": "3Z1j4hZbDny6K1zYJrTRV7w4fdzPTYRzM6JnyELjXaXHZ7goQEXGAtf7AhpeaQu73q1E9wom9RGW5bc83rCffB4b",
  "key14": "2qPDAo6vparZ1wdKiYkyE22XTVeatWBuRHjm52zGjn6suuxF5nxyQ5JAay3xni7DZ9dLYkDHavwfvN5ucE5zySoa",
  "key15": "3MBxJSDG5NKQp2UKGaQrXR5LcW4ZMegaoUUusmgL1imW8GMvwkEeUBGNeKKg8ZtqWC9UWH286QKxBt4Ppq9buk1g",
  "key16": "4rs5r9VbcbNw1aw7pjaaiGkAi5MsbNxir8swVQaUyxjxGiYL2SAvo8DKh6WTsMj7qKNJ1zsJQSNqYZjxxm2CYGdu",
  "key17": "3hy54yeonnYcQ4e2ALNEWvbub4ERM5oWj4yKajeV7DJtvgMeijYwcY6NX4YfK3f1aJ2iYCe5azGVcB2buhEWXfqe",
  "key18": "kqXmS38jq7Cw6X1jQmZ71Dofiz4qtkErKeFmaM94GDr2RcCKnLqi1LGU4RhymworZVK8U6y8WQRsvx4MoCUHF7g",
  "key19": "5EvzMk5t2n2cBG8wcr3BEYa7NqCsTrvBJNcveyKpEixf2kzBD3HcuyZ2wSiMs4aqrwq596MPkv1MTqJa1Ld6ykxL",
  "key20": "5bzns12UEbgtZxv8TtJSXvNfn44XSyK9z4oh4qBta8y3tTirEK17otu3JHVzwvQZcvp1hmBqbuFpW3v4kASbgW8E",
  "key21": "2sf2KWFHW96aYhjF7e8WiCoA4EMCh3mzCkqYba2PRYoyATa7RGEV2UZG116cvaLzg5ncWx3fn7inkP7cg8UuQcmh",
  "key22": "5C1PBDQoGV8zF9CoXh7F1tnY8Dj1hvbeY8jYHvMZtm5Hi4jTY3RT6i7tZcgWApDP6ZW39oHTKCi8NR4v2J11cNb3",
  "key23": "vKEj7rcYZWnPMaq7XvcsU17DLYutF1rVKs3NYyEMynoWrWGY8VufG4WQxsSELbiWwuJqVD4YQU3YcSNPeXwRjdp",
  "key24": "2wGr2RagXbov2e1uDWbidC4pZPjyeMuf4LmZ9jSnpS6EWz6nqtLuKGG7T49ZWpDJvwSJ6S7sr15Utq6UaQ7W2wPg",
  "key25": "59ubcMuJ84VLbPdR1TwrxzErcP6RepfEy83gb724Gj5M5LP2tcdFFuRqfSnKt8eSPzgCSgc9zhTJPorpbmBhcBAY",
  "key26": "21cUdeDVM4vZe6nARUEMksZc7W3RNQYURKc5GhiFXvuCenh1SdbPvqnti9GupGZSeFWSrk3qHsNuMsBDjoWHBW9f",
  "key27": "4meb2o4Gxv3mNsVD9nKpfamEEGG2p1Fh7kwEEvDvVjfKenBPSU8yzi2iFKVnC32n8EBLXEqbn2GLPdvYtpFVGY33",
  "key28": "4K3dnmPgxgSPhLsgKqRNxoBrj5ZJVRsAi7JVWo683vQxeXrb5bFoL2L8EuX6ngFqMqYiZzmZdPdV4XPQzdDAvvPC",
  "key29": "5ice9vzXVBAeCpMmUAUmyJGbGc731XyHZzv5nrTWUmTvEiUHpEQS2eJbJtdc4hjkz333AmeoRbJSXQB7wokv2NKy"
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
