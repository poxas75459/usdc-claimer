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
    "Kj4bPGRAEekMN97NHJo9kW1h3NxNcapvTkgdJMTjbwsyZSNNzRpyczxnJpNtsV24DBejJCAcZiqxcpK2aUCvSkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTW54YyorASAc83qHa6AWsJfx8xBECNxoSAPxqpmwhanPFYhp2HFsFD5zu6qD7LdKK9yrK3ig14peZh4iduK2r1",
  "key1": "29nV2aWc58UQboB9myHizNgeupzBUjD3Qf5Ed5peERjuQpxzyiRU6ktQr267BGhWmLsuARBaPYibBJ91TbJ9DCTz",
  "key2": "4TrppemDcQgHNA5ezzBogMaY1JD2hj9VEkixKRX23vrQGku1mzSHTxUwVZ9CgfdvKgBTsa8RDezMLqmx9ciT4TGu",
  "key3": "57jbaKAyXGu1E9vqA7pre9NMyMAftQ2mspTG888dWgdku8ZrFT5LWDGDXNtmvaPJPkuMXLJa2HLyqmAb27bFCvH3",
  "key4": "3dx5BmYFVQPZaCf7nPb4DWfnBq9ADHvv1a1rYnez4NCLavegb29BuSrztWU7kkG3TFVo6FVWJoRGv7dhxH2uyasN",
  "key5": "SeSvsSziSnFiCH9zhYD8jLG9z1pHGsUVfVHhX2TE9VfisjRCWmjGpQ6RJycnUaChVb7JYoJL8HimxdCRV2PZu39",
  "key6": "3dxTit4URPRSL123N1zq51SBHSPoiW6MGVcEuPxPsmFMsynuyGWvaENKMpw7Tyrg66JppK9YUUB1uXoqmWGc96Nn",
  "key7": "5n84NKNmNnPfZQkpbjz8iPSiaoh3BWC6YyPRrmMPUfHZhWiGq6NikdaFbuR7u3zHuteperFYF36eHqSzHVgeLwe7",
  "key8": "Bmo6LAiUT1rYTXK4r8yucXLXcD4AWj8YBbB2gPgALTPM61BrNopejmxZjG25gpTih9Kg9aBPGNBBzZweyCTt1e2",
  "key9": "2rmxCXmdG2BoYjHy3onmzkZTGSJ7jf8W8yBmUaXUdasXinnkBkW56aTjq8u4BZhbhyReaW9SETk841VG5PkoLX6Y",
  "key10": "QrFn9QFki1kmhPs3DF4r3AMBhcriKt34m4aUcTYQ8SKXyuqrip5vgek5PvmDKHkxAoSgXRVUSh9rbpo8voqbf7v",
  "key11": "3jpoxHK3fhbeFcXBzjDCqzcbfGP5rojJo1Cmmv3nRTC3kWpVQL5mASHdLn8edP7MuLbmJN7cpi42AkF6f9K61AL7",
  "key12": "2jVYP3kBvLycpgu5egyPuCj82ipaMBHd6AqjacPwrHeotkqNNt9o8nrJhVYZfQHyDDuJpqvJKYBCdAZ5ko6eaJaz",
  "key13": "3J8WvknEy58iaNpz25YrPvQKR8e8Nx5Qdpg7proEKS4HBKGug8TY9VyvqzDV4WjAMY2H3R2aMdugKLfxpbmcVmxn",
  "key14": "5uCnATnY7qebfKtN8LsMkSbuGLvgzu3rsGuYHEuVsEVku9cXpgbSV6NwcaQqfh5qN1483xVPBFN5okU6U8fqfPe9",
  "key15": "JkLqbGjzbpcarzSenhHDPxoTMmguGHmEZWgmCe7ow9YFkf6HPw7r88j4bpECEf5vws3fZgHmAwatPXMP3YrN7aN",
  "key16": "2ZfognFjL7nqfCVodMS4EZaBQa1TN9kCBASSJr7DZsZs3hzTZp45ABc1XPrXto44xCyNFFnjH5fWAw3vE7meVznV",
  "key17": "5w3Z5fpTbZXNSxqsSB4b48Au9J4oxNdNSFkUq4fRqLvZKXcKVP1W9oCKuNWRdimEGSGZ2wBqcnrszJkWPuHWyeik",
  "key18": "3QAn8qrceYJG7wyfrDocUaKi4Vawnf8bvsYN1SWVbBThwwfWgLMFfJAHR4fUCM5zdk1vukvpT6LxpbgS6Yu29kU",
  "key19": "4gcWLEFSLA9TPrhPbLdWqzxUmmAgcrfhAJtWKnkHPup57C5ZvhSfRwMbdLCCoaffkejU6KXE5YtDggHhWF24ah78",
  "key20": "4LHuYoMwuAcYdqwwhKhW4uT3wAhfskNvPMpNud3H1q7WNh8fJsArUGpLoRPR7HHUQ9XwkBFZ34TNKVNJH9nvjwBD",
  "key21": "4GXcEhL2iAes9UedYN4uyvsQqDjJDxEoEouFC6TLU9fDCuN2gKg7xhaqyEo6R75aevpKc5gDvFR2VtnfjQS4QS8",
  "key22": "66cW8K14z41GF1oraRQMEhAoghoSHRySQPnhpGezePVbASdg76fDKDLcvzr7FaWc3ryAmN5Tzkc1kRyEvoy5DBzL",
  "key23": "4xHWxa1pYGZHYaRjPuGg324Q16B3KRAcY3WBGTvF8RjRgbw7qGVt5arrdSckxVyCNsWMrUiXWPBzvZEDAe6R2uaT",
  "key24": "2XsUnFLMsLD8RWBcBu8r74gPEq1Sm9EWXpJRZLy7pErZvDB5XsUt2A1aE1SiwPvn4oPKGaixP5yj7G1bEVv52JGd",
  "key25": "wttRpHxdDn6wBq1fvRBGtyUhkqU6WbCkgMsSMJM9HbHji5Z4qf7CvfqwmPVKeSQD6pSFwKwTq2mxd8Ar3xurU3X",
  "key26": "3QA1dK3StiesCFuYFa7zWq2CRv2V4Pk118F6sVqFEWn3Z5VKnKx55MwMxT61H4Kgh6j3UvLMcKKQY17YRKFR8yrQ",
  "key27": "4vBean1PJKP96MsACX7oDD8DApHLkYKoD8ShpqrpXfk4vyMimxr5bwJoE1PXDJfLUURX8hHxmKkQR9P8etzEworr",
  "key28": "5CpybtErxUTARiwkEdCw2BfDwuSmoSayAgUeaQcfM1JgScttGvVeQoDye1zUKaaDcVm3An4oQrJum7yAraoMZB7m",
  "key29": "5wHLmQZACYSHAozViWVuLoMoGSKt9Ymk2bhGciakDCAtTcV8imBoY7X194LK21C4V4ewHzH85jyZCHKbmTqsRosa",
  "key30": "3XzhWvbi4t8gixVQ2iJMw9iQm4ovURNFTgBcqeda6dyNzLxCyhev8wJ6prQbb4Ej7W8XwcbkpU8P8bn7wmavXGaM",
  "key31": "5MXqCpFfF5EC1mBgr4e5gZjbBvG5zxgjPgZfgnBSQqLiq9rWJo9CfWAthqJdc4mrqrpjszhBqjuPfnYydj3gxmvL",
  "key32": "3Z5zEVG3wWSLNqivcNt5AbYBTTAhUJDDJCfetFcYXRzm5EXgfCWMJaHJYruSBKkKKGqAhw7gMkbjjUqQak4cHGig",
  "key33": "jzX9a1jyXBBtnLoF4nY7rd13KkawEKF2LcVNP2ptdQ4VHMPs9rNWZP6MWDAUGfSxQaMf8oo3CDQdSAqcdG5afaG",
  "key34": "2DBdWPkQntH7XnzrfxuXsfDUbf76J51mkdV1bZC3TF8j2BBhJPx8TQwX2iFzvTarhDe6dCg19TB87AZrwxssLVd1",
  "key35": "2JZpu5npNbLRWT6LoBFqH443hfgQtrNz9TgE2gEa7FQ3NEtYfaPuGYccaKomDPwhoQvGWdHioxbSag62mawku2uu",
  "key36": "53VPirdMQ3x1s1yKue6saVNZaBn5dtGtEKaqb9LtdWBDWJTNxynKfdyLtWWvCET1JQiH7ExjTUboTHwu3Gz5UZE5",
  "key37": "57AZWfdU6Qp8ba1XfyiKadYqYSqqBK8MZeQqwLDF5nE6eZanK52A7K9ekRQRuW9HDdNJ2PJxm9aiVAWK21AjGBxP",
  "key38": "9GTH8gvxZCsZ7kVnuATPdCzMv5ESSNgKU3pyUJdhi8M9vw9saerhNVXhgeubGTufcFCavMh13t3W2JNS5TYqh6R",
  "key39": "5K27NNgSPVfi8Y8Ng9LkxwirC2HTdqe1Kd8iCLiQtiJxcX7tx3Fjmr42vTBPYxFvkcHZtZw99BRVyRQyM57z8YNJ",
  "key40": "2iEvWnfryVMWt3YnhVZ5pEvao2JnGd4s6mxAfuCz17uxn1yLQYZjrC4JzXTH7haoumv2DtzDRnxHrQDb7MmAah2b",
  "key41": "3Far2A8sX11Kfa79wSiiSkTegzJRApb8NW5ZjZzdKxMpLi5YneWYEQGPE3zQNLeBDhTqrv3wUtGkz35afWxK9Gpg",
  "key42": "5bQwdaV9bY4dhGsKK3vSShc54WtuWdXqCQcsZAvuVjtPHPmLHcGyuKbBUYJxPLDXHCfrrWU3unMUM34X6TAqM9kq",
  "key43": "59WnVqGb79DZHia6kP5NuWT2SUAXJWMLEMFqeftSRJ8fQg83PS5qDhB7LPbAGwrj7Qb4ZMN6eea9wm7t4grwzeaW",
  "key44": "59e9WZExZKWMhC4sSDpUjNNt1R3nnhnhNycB859oA1TazWvUBgpn6rkeqnzsvG4aAjxnwcdtqZ2Z8Ve842eV4Qnq",
  "key45": "3YQEHmQUZq5od6Hkn6SE1ojZgQVQJUvx5VmGgCn2tqf9eK6m8VagBCtnLV1soCGBBXZRbpr3kLzCJAuwTqYxforG",
  "key46": "2GJSBCZS4KgsbFStBQzzshVx7QQHNdCE8oZgvSy2zLsdDoXPs4cBR91kU2rsvZfb9Sd6tu7GAnSYZD14WG5Qyhux",
  "key47": "3zp7rGNGUn2W75FHhrd3mKSxU1SCqaKshRvUamNehAKVEEb2FDKUx3qBVUZyooC9QDdbwtVg6QC74WnvMxm2TXY8",
  "key48": "3aU5ocS5sTP4pW9HL2WnM4MnfuFaF791jVviKQVnYJNXGcRm9JtzhrhPxh3vyr1Sj9y5s3gr9nvPVSRyHJMFLG3M",
  "key49": "61R4Ei4oxvuf4nfBBtuAzuE2LpA1bTqW1d86d9hDmZh3u5ejM7VjyQtwv2sJvuf7nr2tcb67aK3hfv6VHfqbC4Da"
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
