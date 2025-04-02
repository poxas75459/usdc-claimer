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
    "3K4dTnJurCoozZ7KuXPRWqNS3wdefm23wq7wskdWNN3ajVGD34qYRJhmzAWMY9gXYjdVhDqzqYwsBZCYjMbQwWGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6iTxYJqihaZfJi5VwJW1Bjz9Ld4QiH2vAQUkw3fHsVfAxgtW2o7979PqFUzsVCW2UpNDjDTRFScLvQmAtkqiaGP",
  "key1": "2JvzASuAEKwXxWvLQww5Q8R7KqebqnovtvwwExsrFFUyE4tnqxRe37rFwA3xHAWBJmUp91Eq66ujZu5RkGcQ6p4u",
  "key2": "4S5T7jC13SQKqpMew15G7x9xRxf5tL3xuBouiFdPGAgcrGo5rfgeTgv2mYzih7snz67RaZB2MfBut1NKMWu3XVsx",
  "key3": "5fLizgNbYdLpctc5iPRM4MtRUVmfQv8dTYgtzicAAy8UT6E6qn9hsc2MpfjB4eFWaCctNTF1RHcXPtwkmsHDzJFP",
  "key4": "4NiN5qUvToBUzUzxjDdJNhAoQpiyGEmTfXvafmvQLd5qkch4BMHULmsjRJgoU8Ppd5fWmFrrtZVWcg3UyzFsH7jE",
  "key5": "H7aQYaB5bWqzencHDLKuFTjhPYGf9BjKSjuDCx4eC33Y4RqUQjRraYRJoLtzTdtHQ7bMMehLwQ81Zdgw5ZHhkTM",
  "key6": "4uhYaAt5D26NX7Eq4xGvUoH6MYzGNx3BnEW6enUwrxhyam9kwHhJvGY89tKp3wrYqps5hWbLBxnArmYwTUmJ17Sv",
  "key7": "3B9uBqnYaB2ALp5xqQpG9QpJfg5nCsyJDKYa5xpcus94trTEKzZ1mHxVxiZkxLqATRA8okbxUgzDLqFaJJrspXsm",
  "key8": "5fuejyoCBPuru8BtNK8tEYGztLiuCNerhvNxAGvUgrzTjoqjsm8UETcLsUuFux8C8iTyD4xC3dgBXgdE2ZSPGt5j",
  "key9": "4dkphP9RUsAMajPY7YDJgm9VYWmF9aPGbuzWFQwoippCrohzEfAJNjUjtqjSdhRWGDhPrZ5J93cPQuvixorpXdt6",
  "key10": "2hHJabR9t7C4jKHFZS8PLZ8TX7DRDCAoTDy8zb1HRKYZ9KWvyUzgc46XSfQVZMWCNq16uNt4hf3SUecRSF3S4oMW",
  "key11": "5HDVv3xPNfNYXXuWGzB4ZUDKaT5AvEjnCK2VTAB3dwwWHohVpov7uPa99en3oiaxYFUgPMtkKNgUYSp7YC7JJZss",
  "key12": "KdPGAFSyit3dK3w6x5CHxPiqpd9JpvYovni7of1BojLj71KN6XozZqH72D7jqmwRYE9wbWKEWoAcfSPN8q69Quu",
  "key13": "4xzD9Xk7kG8A16Y1s4GFhUoFz7Nyks3G95KbzsvxSeAtACGNbQG4DikTf15vcacCNtRyv4DLyyWmqwSaWtdWhiY6",
  "key14": "NWWK6HJkJc1LxVRo2EAYoojHg2zuiivgiUbtxfahR7nXRnR7J9Z9wSWN8YEDtzESgKpRTor1Ph3QRAPoHCYpy8i",
  "key15": "5uCu868MmgmKXj8ugeshz9GgTR8xBqbk394dQPLCkNosxLsUh7tqdqs7zVcM5ZKTtcBYQfp23bT9aQeA4FQnsvwU",
  "key16": "Xjq7MTNNVfNqaevMmi3fDYxDxd1S5CaSc5RnYgqZT3xiLhpT7XeXeidr2XdA4tnCXmo3PZ8n7JM2CAWF3wA8aey",
  "key17": "4bF5aiYsHrDTu4Dewm1k6tw7GhBCw7Et8c6ESB1FdRYJoMnW8zXgy15Uc3ABJ2c4paHQhXoXfgJ1J2xzwp3JLKc6",
  "key18": "4EoTJvvR5ihpheNeYAd6YqRPBWDRVhCz3yiLhHsNJfaf4cRM5LKrf5rSbQu9z8cYEuyMZa1spSKcTxtwX7PUQcCc",
  "key19": "kt9tD9WVy9PuQxUME6YCyQdfw6kHQf2VCGW2WiWxFYafVJd98FkrXKzeLQoArj9tco4fgeTkWVMMaa9nDpEgH2f",
  "key20": "2rY6zPGPSaCERmZ4GWHguk551f6XJjivFYS8jaw3toHcY6UN64udbbuTppERSHUiwrTJj8eTnJQnbg5zDvqCwc9S",
  "key21": "3D8AfPiUtHTQzKycza8jCBCuQ5d3qk1J6fNZX4eVS7GXWnSZmowA46WmRrcn7SSDtNBPBRxgg8iVBsYGzMGc7dW9",
  "key22": "ZCh9EBvZYtGQH7cAYx1HstVErfp4wSwpg2uRJXfS8fy68QXES46jvtMbPn7dCCoSKFKK7k5D13bJ7yeCmxrjjBS",
  "key23": "XTggHDHx57iC712wk6LRik8XsoiG36Y2HfLecxXvqWKHcoJmBNZLMe4SJA3ToinHwA7D5Nvs4WrYpUAubQWHsKj",
  "key24": "YpAmAk2gdqrEiZi2zfmxV4tnmxsT1qjkLECW69q43crP4Auaky9bNWe16US4rdRo4p6wAQFJsKiQ16QLvr4ySyy",
  "key25": "4Knzb4VohcgdUKUw6QgJV9eZYJdwWvvGQ6H7Xstz9dmPrmXJWKfXHgeUZ8iZpnE7vzdbiALL5KZNZFCkisfciqnL",
  "key26": "YWvcY5m4MJHLJbxYHL6h7gVWMB6ze686beMZuvsz4NgM1yPBV5wHQk52nA5W1zwsPFvP5fPSVGo8roqbC4BdpEy",
  "key27": "4o7mKxCwNfT7c1UfkXwEBFW45n2KHt2wWNwVtmGkWiJWUwtdD4VXMPoyNG7BjKg6sVz6QdchdB9U8fsT3TPuNEoS",
  "key28": "C2bYxjF2DPF5TxFNry3vpLp6aaQ89qzVS8xMTZaCLFzAGXBHB7RGEHgq2RyzfxMkiUi6MwVKTKf9WtBqtpNzx6H",
  "key29": "3asjourr7EuNnR47yZHuAWjhdxCHH9Zg7Vpxdig9FxHVjwF3u1zBDQphmLHdptDfBWKHRzPotyxvY2oErK9JB9N4",
  "key30": "4oCF63FiFKZ1CZu4nrgzTZHzT3gmHKGM5kYcJHhtuadWdgSVekULXFUobL82yLHBpRGjNBoUFsoTdESMJpnXFcey",
  "key31": "5Vjcr3xc9hJxRoTUTAnEG1n9k6ZDrp3hgNMbdMPGXKi1iXsKNk8VtJaco6sg7BmJi41fH5vkoacfhFbFXJctPXiC",
  "key32": "3Xyhg8pSmyKeSY4prGQ1tgJ6t43Mrfez4nbDuwS24objndYMEtrLzAPNxHnwRGpy7iyq8YTA2cgntUqe4PTxyEhd",
  "key33": "5BYAWYZu3VSAGHsE8Zw4FEJfPrdj6e5GEXwkZqpzaaWD6Kv9FjYyJUkwRfUJWhf8RBoTYSLPnoD2eiUxWvmTdr18",
  "key34": "3UNe3RrTkkRkCxCHGu7dvbHw9tLeAwr3za3mnXRFwDzYyS1hiHrFpbaA4JJriqBcmycYuppSiZRBUinZ8gDE1XF9",
  "key35": "fW8NCpwKyVimsX85R2wQyZz9QBndHFkgVy2EsPP28qSR7LcbkBQPT2h6dtSuUjoKeL3ShMYuxYAMLjf2At5x13f",
  "key36": "4HfLDMJXMwX6h8TH1HZ5VsM62nQ6bohvjEJtmWeQZ5wZ1Mrd7ewcbsLhM8TSjFhpbSWjmhGXAMxj7Tv6LSFXnR2n",
  "key37": "tuN3FBzNtJmQgWHMmQbF24J4G6xF8Sx8DYatPvmqMGmGQMgxLuWQ4Fxea2rJKNxU9ZL8FyTPQ4vLdhKMNCrKzZJ",
  "key38": "Xwfmes8Kb1sUsSwJHihpUGf4g6xRtc5qWJdi9zZP65oM5X3xm72u7HaRwAvJvQxVz48N1vvoosEFA8DgKmq9kHL",
  "key39": "2ZMbUVbN9EtPUuXRBTAt8Z3SpLNoUfRizGyoFsLMRgaxZr695c2i9RmWxDhJQ32sjxUU4yNzzBpz6pT2Jz7fSFbH",
  "key40": "2i7qWaSHg1EMZTHtrztftynhesnZ6TrPhBMKfYypiV5rT4jvpSkjfhRssDHXwG1T6vnPwY8xV3ozjC6YPfAPYm5d",
  "key41": "53Bj4DqDin46ZhFYfgDE1gU8kuzpRyGdwYtEpq3nmkQvvYHPNYSNwsTD58HiAiqV5J62Gh5GWAxgNpkCUbjQzwJV",
  "key42": "DEBhPcxqgdsARaw9ZJqH7iZ7fheGrzuARYCprMcnD3AJHncjcP2rifDndiEM63g1a2HVHKMiSwwJ3WS2mfBKSfA",
  "key43": "eEtsqFcBu8nKaw1NpR2RMY9vZpGUq2YJ2jhkzDS2J4edAgwr7dahZpu5m3US7cKTZDXoZtAXdkcwm864cs5jEiW",
  "key44": "jehz9D8fLzFh1XWddGanTHTVaoq77EwU2H7yKLDVaAZxHcnfcD2KAs67maFahn9JcQS4WxKYexCXzvHGYHwfYGT",
  "key45": "st2Nn7PQxYc1nkqEEE1B2g7byfZrrnZBntheDeNK5Dyvp9EVyAfXPLgsA59ajcYUBEWiyrBUruj4rKj466mWUh6",
  "key46": "45f63mVLFu5ds9MFDMAwGZA4df8yssMustWLMatZuEmry24JAdcYyu4XMpGeaiNbv7GqZK7ha9D4ye8sRSou9H7d",
  "key47": "25o1Z4nZL54zRPn5jaGbZnZKUeqXWTkuZYBjF8SJbzHEcfMpebr6b5UCMzEoovbwvctTjAjJSY1DJ2oSHaocCAon",
  "key48": "2hX8DDLBnGhPoDtb62HtFWmZcWtdqjDqGmQZid6uKLAY5DzZQc1ijFPuood7VsQkqHr3HnfsNWtxHav7Df41bKwe"
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
