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
    "2tzHrCFJ659nhM4Wxh7eiKMZ2f4GuyE9ATYAurNjE4yBrfEp7kKUubRrS9PJ5qtuEe3xASDnDJbqHMJQr2KguXzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqCVkDcu8r4xCERVKNUGSB9QSYEdxLU5c4v3KD2mzNnhMfztbNoUtwe4gNf8HYJ67YfZaHb7CYo25LoSDKX8Aga",
  "key1": "fL8ekrDzzUqUDb3NyCh5md3kmuy9Ee1TnG4vDPrskE7VqVQhUPx8WetjCjyX35dRADZx7qPSjUPKrAxaXjr8rmP",
  "key2": "5GTzS6UoFUGiJnhh8bTtKi7SqUvgzh534MVv5Chd8t6FTXxPcYQih4UWd4vLtiDkevpDxDprGRARMDT8NRJy64o6",
  "key3": "3XE9PjPi1sE8oaki7HVpAmS5zVCxRwvzowmpe7CZZmc8QxXNaxS2mQmvj1SMXhRpidYNaBqajJu5yHVCJGSSSmLj",
  "key4": "38iaVJkhmVo8FUDhyDoFV3u5zFYT9LQDsYNmHuyU1necYGDMtEnc56yKw7mP1PjDhNYSnoZAt3j9QoJHaQfS4jMu",
  "key5": "4eUY7NkSBZRjud7Yt5dPt9eZDQhe81n3d85986YZjWphZzUJwGoVkxntwDkm5wsKy45WLFxXVwEEpoZybV3rGFSA",
  "key6": "54oFZdLJ6GGmx7ZbnwbtrAnx7a3p2mnP7Ap1eX6YXcFT7Tp4jZ2pGE83WyCcXgUPxn9eGK9H3YuT9PdH3GoV1yzi",
  "key7": "5Wy5hUX7x3PkbgYDnYzYujvUJk3TdMizKGUQ3jkFCcEaG4Pda7MfV1dyZ3MTsdEvxc2XsD1ph6DvaDmki3CZbFtQ",
  "key8": "4LivXcY4SjQ34TVshTJGiJPUu1oMcXCF4vdQAJNZpZqaSCodFuMkiVrLGUG2WEreGrpFtGLXWFRa6bchmAPn5zTV",
  "key9": "4xZCkaBafmS2TwQpD7wFq2DeYKxxyM5hcY5ZNfrZAV3sgerBrWoNppmoKy1rnvxo6M6Nbx4qxCMoooYk6drVeSUY",
  "key10": "3e3e7vPd7feVoRuZiKdH1epDDubzqhaUZoiPJffzvKznwghDCwprvQo95b7DcrYbsSYTeg9feTHN9wcNkJc9CgT6",
  "key11": "2fFKWA8xsjKE5Xp9fAMcwi2xJ6gUSCXJCEhkVqZ1ruR5ryu6hiJAdkUtcJVhFRmxtSikZwEsm24FThE99BVZ48cd",
  "key12": "5zzGaoMqjoykVY78PkG15Rs4EnYHKV4Dt1ZwkhX7kQW7G1iX7vzCfLrjcTwoPApnwudsDbtKV7HR26tmXjaPQcR5",
  "key13": "3adCuHGX4SBN4ErKNLfbV3rAAhuEGkTxfvXQ6fMxxBr6tsVH3s4cFVVEUuenbvn3WpskBPKJgqkWrH4dfH5XsyLD",
  "key14": "5P96VCGhJgadGANjvT3SYXUuasDqUajugtq9hZ2h8RnqfsoAcPdRyAQUNDZYarksYGpX5VGWUmmTtEXbUT3EwoLC",
  "key15": "2X3Gsp7wdai5ydpUbMXAWd1ms78XxwwF4DcSWdojVFhFUKBqUM1T48r1Be27kzrGgkknYDzjHp8xL6Y8tZyswa7Y",
  "key16": "5sN4qa8MJzE3QQx15oQjhWz3K8gtcwNtPzFMBQ3PDA7LGTHWNkyekmzjmMULE7qPe1NsVysXydFCPbkVhtUR9kdL",
  "key17": "5De4uYKab82GRuuMbL6FBLM6KpMo6ht9GV3D3GHn95xgKqTserBrFZmnGbzSZJtV31Gra1QP7os1A82EptuNVHcr",
  "key18": "2qsWXyRa8HxxcMcTo9YG2LEgnvwf83XdCCETQvijaszjovv9yv2vLLoNTbg26coEV7pGm8jc475ufa1AdDuEiPF8",
  "key19": "2UHpJYsxNnga39skuLZwt1Kyb9bwA6mNZV1kDM5dkpaQM18RYyB46gxbeT78AdxaDqEeAmANLHTcS6UuiuRXfFGT",
  "key20": "4bYKaQYX85vqL935ycNW8txrPSCzMfXoTdJV6XZCUdNFo4iB6MbzmDRxeEkPajmWEboLxocBq4ndpGH6r7PHSdRA",
  "key21": "33XBmZk7rnVa7sh5RPrENioyJLmJmFJR7bZTQnnQboT4AsXvNcT9NxELgxpmeVWAQrjztNFSoumnMEtGSkNtfYrJ",
  "key22": "Xm683XvkCdD3fnPoX7bT2tMLgSmUJYBj7wvFAXDcwqCP61YNwDXehRS34RibzaL2SaGjz8Tvj9FYGxG23jRhzSz",
  "key23": "3U37aciuMTCqVbFmCB5Sicp8zJpZ4BQEzh9B3wB4dnujaRS8RQwjZTzn4DhBkJLQUgZwZmsyWzBQEhX2fSTHW52G",
  "key24": "a9e2tYz8TEeE63jXgDQtynmv4GpHeGeWozESEtt9tNqmC4xn92qQFciNMnV9qzbwZiWyA7sn5gVK8CqwH2Pj9ZG",
  "key25": "362JZkHaqF2EVGQCitX5dgMBM1QFEWNrMc283okHaRQCoY2tbRLKjnJEWC6cgPEQL3V4q59MPLYCuALYV1cKED6z",
  "key26": "65Uy3UfLGWZQ9ELQYXgQxZEhPhQ1T4mH8SkuLRs6Tsm59WASQeG1aETdMdGQygMFhN9AZdh1iZN7umdjrwg2Ta7A",
  "key27": "5r7jwE28iVdttcbrDqXBBM5hTh7Ez7w7paEb7NmWh2NoDAUdMFBTBNmwk55HKkLQjcBShNANJ1sZ3ZVHGAzAu8oQ",
  "key28": "4www8Ep1geSWVFBhQDYT57mJCCePxjrW6GioSDgcwMkhN5QU5jeBawaxP9Sp4EYhv5VHq6jYmpsB7NT7VCNPMa2w",
  "key29": "4oQoDjGE8WEYmbQyL86C4pyDp5h3CTXH5PKDsNhnzJq6WdvWCTPTJsQCvvsp1CUCo5hRqDBcWQxAGeuzB3P84oM2",
  "key30": "2BPr96ghrPmMyDxr9YTFhc8B2zRGkN2cKeJ3asnNEkJrC8Ev9Pp4fsT4T8EDy3BXNa9SnHzXxtLjTCNd6pTjPUmM",
  "key31": "3XeaBTg2gdLm7AzYKdcuyMFmxC6K8xQETkJY87v5TGgNkHxQQcTSaXm2UozUJViewEMj2XzSvDbDQfYozPSKaiYq",
  "key32": "5zEfT4UMSD3WaVqxn54irs5ga6J12MTUtvm9GyLv78MyMukPpeZcJNTvjhUHPfySYz6C1PidAkgqpp7tmRz6vZmu",
  "key33": "cBXhW6ZZ6WNtYaSy7LjFiyPmq3WiAyvKwffKcURNNj4qxJ37UFNbv7krn6J56JVHVHztMa3kDpQJaxX6Fie9cJn",
  "key34": "2ntWpNjD1zDKpzADjha7VWceocbpSK7MkryLYDSskGCHatWzhVKmydNYcuo6SJKM3qqXjGHZ2wwwzF4ATto2dFEb",
  "key35": "2JsJxibDYMBgKa7L4SFHzFcMdYzaxbkx7SWJ76Q1jTgMxETp4zmA9vg8VeeAxQfWMhD7TG59gVWK8x3XtuM3pFkF",
  "key36": "2b6wMXHTdg5YWaEbauY3CswjNVYqmYa9KCjw2Pj6KxhmiT8sZzidfyhAMyqbhRhLsZD5VXD6NwsZZg11nJCnrCpF",
  "key37": "5ekJQjgfh6CKGupgG17EkaXGa9h2nSUeRZQ426LLvW4LTd5oVNCzn5JdqYSYvpWQtsRLyW6v4sHp1ffzYUtC6sme",
  "key38": "2ieLeN4cRuCHrdyNFzHhQkZ2fAHS3mkRjQU6nsuSmWZUfsecNFV6TBqNGvdP98W4N1eTrP1kJQB7bqEEwqu6xmLV",
  "key39": "2RcBpcUABHAscGodCrUsVS8RNCAX5WbULwu3bSDFByfYGdVA2A5b9Zpz5TgbqrSWe2vLdvF7ZnEQcuxLsA3x38H2",
  "key40": "2s8TQPfkeCYNyaUdxixCNpUQj1yn6TJkLndKN3245m4zYK6uWZeeZ1hXetACQDWWDzTFRAcCNGpyo1cWd5QmsHVn",
  "key41": "4cPFbCSLWGpGrxBim15Ksc8fyQjcxgEyNQqt2UcWvh4Fj8ukvzN3gxqLHJjt8ewk8pfZbaioYivM187AyXkCEBeb",
  "key42": "5Ae3MigeKNpDtMY4QfJHAt6cXKAECK22oFp5sRDhSEdzyEFCBhzcSbUUKCee9C3xN8NHao1M3qEDx7m8gFHHfyDC",
  "key43": "2uTMJEMu48HtENACdUE7hgNoz6Ha9t97eFowDd4C2NkyTSmpjjz4fCL42uoZsB6ZSgJh5ZxYr63sDCzLi4CDRcNh",
  "key44": "24WNPTcEZt94TzHBP1kKzazDF85i43PMDRtDBX67QJE683AYRW8TMaDKXPJt5t9D8JFv63HXBFFbxvNQN4FG2Mym",
  "key45": "6EotdL5nJHXnFrRRWK3A2GD5HTYsKW2XTqPfBF4xdSWHmYvkL66S5paeLjBUk5T4cb5WV2qrzNtA9HT4xhWZMSK"
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
