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
    "62JuNEYFDVZZsRZ5LdEvG89G56ZbYt5wYAjdDm6gPkeuW5H3qCDoVb17p2s8G2VQd7vdiHwMhKFGVjNDh3jzphvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gURLFyH23gPG8pC4Q2hmqVMp4C6xc23wJUBDj5eqzhWPX2M1De33Zgff5Bg1ZUgLaJ79jpPtcXhgDaVk9SAp6i",
  "key1": "38wDxo8ujejfkP4zYx4Xr1uTsmTJZdYYsqrUhkoANYBFM8QxDVRaKEy4aP4jnGufVHFEUmviXWvXXUQeMDZLfS2G",
  "key2": "396QAVo57dVKNBJe4yDhNdKg1xj19nVBdRCjZhPYjFCmf1hnB8Js6ALuFKrq2QkUECib1dZn5gqyM8GWbLPLmv54",
  "key3": "63EAVVaUn18LxWJeFZf3287mgtD61MWmkH6SKuosztznFpEedNbkXU2KWBZh6oGh1x1VwJNtfb9tVWzF8ZDrFSo5",
  "key4": "3SuwEmzQCWZ3pxaLD5c71vcemXZBCUiKjo1ebr6FZLj1jGmGK5oaMPdn9XQJp2qEnUSc4LQAe7uCm7YsdsCMmQUm",
  "key5": "3QRbpTr4sWJFxNvBLyX63VfHh5nhVg2GzcfXjDQmyjPtEuzKQghJFLf3Kdxekmdh23LhWuxBJfXiBdGp7zxQNE1q",
  "key6": "7KbtgbtdSraEkvkG2suH5Lk2STAkAX9WDsgWeK8SpXxmM8mTD3EWgAjuNXWFo3UgyMchA6unq8XoApGJQA1w9YM",
  "key7": "2GTEf9WrZsjsnWbSXnxXoDL1FGTrLkZspXNP5VcRXdZLYEA3ow4uZMgE8NYu6GTi7S1pgp4NjgsQytybLLEFYAL2",
  "key8": "4zJDNrri1dHaGpcYJoVgv8S4JzXJmdPbWMco81cyFqorkZhGSHH88AWpRDdYrbcDYJV27kkYk4QqBp9DKTiStNDe",
  "key9": "2SN48Z5MQDAFWrgCZmaVEbiSvUQCJ65gkzZKz99hZ3kLZHeyXSwNMwT8bXgLTuBKoaoEx4mowtpz5CfuoZPGR5xV",
  "key10": "xRwrREoHQKTN916jeqaDNuN3DxptbNmPzP7GYmLLvn2BNJW1JnEZYDSuEUuJgJRVscaav6xWSgaZNZz9SojtnyP",
  "key11": "4zRsuMYYTZEVTAfXxvLZ35Vk8a4wk5mFJDjRVzAGcoooE2o9HvKcwTRkcVJzyE8BhUwEiNzdpfV2sWd3vzvZNF39",
  "key12": "2uerJgkpCUU6ECzav3Z4awyH1U5RRrrfEg4GJK6WcRiNJLjH6KXitkhoBj5G29ik766oYd9G757fzYgfa4k2f2yK",
  "key13": "3igqFB2zh77Rs93h4ZggppukLAQTh6GPiYKvhVU9ncYZVdep3gw9KwnHBGtyCkDFBXSgiNgotFFiRpCyMDJxvTXF",
  "key14": "B8kU4hJqs8bHxaMjo45Zw1sqLHMuTEgsFNu3UEdtpHYUpVdZauPfA13ufgxkEzcpqWjZyNjqPM2CLEESx8GdJwi",
  "key15": "3g46fXA3ro6tRMwTX49XfBCkH4XHUBKU7kMwXM2hRrW8dHyaP8Z6Fq3A78GzrCAnEoeCXhfNR9Wg3bxJhXWb3sqt",
  "key16": "3V8KxAAMtyysHj1HjJGdCunjATYy7oT3h36PfxXeiV4ghkHtDYzJMAY82wMyKCaS25pyLjsVE8G73xokdw21wXyY",
  "key17": "4TVjZndXc9VFoiMPsh9uqXA1UC8gmTYK2Jja2WbVqGtvPj3xVx4wmyZm8qe1zcu2pNg5hMmEn8yByYwNEfRmy4Tw",
  "key18": "3XyqcmCAQb5W6Pwee3JJS8wPvsyx1V6MJuHG7gXqsKQzzHqEDmAr98cCcxdH7Kmv7X1L4FhoGpm1DYHBfGwxEUU3",
  "key19": "32RxQBcwMLitbTY1D3umv3WALJdXYkJoCd8b7RCwdhseBD4dwZFARBMTpNye7nW9s1X3eHSVEk2jypJqVXZJk4Gn",
  "key20": "4ydZ38EWhASVxWpXPpXswLcoMwWY7HccSKwW5vJjcLTmSqpYYbtTE7hNGdRP2osLdNFTCJcPnviXcq9KpjbYAxvr",
  "key21": "3rhz4wqBSng2r34gzQDKiHc5xasaEwQdxCUJmhZc6JruF6ERwZtMYkS6EaqshCjaW6veFRHrpJgRHeHp3insgEAk",
  "key22": "h5mC4ZSwvxMqQJnFCi5bvA5oh2JvRCWu6daoP36KMug3RoZiSCuXY71nESAd7ARGSiJsqMFkGauN8ncCTmQqo7m",
  "key23": "jbSsA8XnNvo619y7pRGGgiZD7q2XCg6b7oEKgR5ZrziD4NPwac4oKV9UNaj5d5exeQ7Htv2W6phkUPC4icAUqj9",
  "key24": "36uiQhspigVgAfPrSjTrEAmMHnZdy21Ssw77KJAmVnryUV1QrZEZWxN2Yv7nU1UPcTG5AYyk789i4MLYLwaVMeoj",
  "key25": "4LJZRiwBDZLVXxiUGXUsTYKUWaEyczyHDmVwB7xsHXwnDr8YCwciJKP9mKn6WxdSj2UL57jGUSdTJ8AVhAhFd1LK",
  "key26": "2dVixSkncjitPwFqA6Txs475seaoRZL8TkuGvMiBQXG78fffLCTXicjSPPWXoAkGnNE3uqmzHR9fZrz1sxkg7nAJ"
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
