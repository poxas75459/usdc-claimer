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
    "ZeXv14d9VWi7ib4o5zArnKtnqH89GAZ1woSpne3JmqAQT6heJ7RSLQWRRsCGEaZ8tyNYJLLp4zrrhxFCcA6Hy3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Jd7VQoDmVP5B4eiBy17AyKtYwq4kfYZW3cZFtemiizbTmbuozzATqxREH6o2mkr2Uma7ovq9asCCctsCvYKoEp",
  "key1": "2mc5v3UMnkFo5L5Fov3drFdaCdLc9r6Xzi4oeBve5owE5zKYt1NWA5zxAXvv5KQPYJtZV1onvQZsNjhiWEu41rCn",
  "key2": "2vNqLWSAo9hKPE65eXCoqrEzjPzsqMeti2kBPPMV3Zgj8423Qx6dJwkfu55RJUZyz4NAT5aZvbrhheoTSbov4aiS",
  "key3": "3hbHweE2rzGQipN99dx3TkDv1sWEEayraKyE3QNzAfJSJTgUF7ZmdZmfWxZia6q8xHdVn7nrvCUx9wxCgfb4yUCB",
  "key4": "5H2BVkutNdGF5atyCAj6B9SPMZMydDL7N1eHnfNSojduKSGCuNarZyKoJnaza2dvbRgG5hobR1UBLUNjEXg6NGPU",
  "key5": "4bQvgS1CffGmwfSB9F2Z8tqEFeG5kvZztHhes9D9CBXfJkv9Ka9nvMoBTJ55U1Z6P22YHFjD8Xa96SaCVaXQVojc",
  "key6": "PW8vKtMW7EhqyqhWMSn2GgR8Nn72qez3iKhjbNESMFSSD5ZwHwEZknpSTn55DrZFzgEufGoxCXujaSBx9qMpR1p",
  "key7": "5Ks6kNvGMMgffNhtjrVYgXxms7ybLNS8iVyjdmmgJDWN5dnE7c3wWg98ghtixVG4bjGUnNFLkQ6B9NC3yHYfJC84",
  "key8": "5UfAzVNk8FC2e7W5VQvSxQJhNxGfTKZPGmzUGwVthA5hm5zWbHo4FL2RusZnUQDttvv2AUfH4JUiKPDYtJoQJxjH",
  "key9": "2zmyr47vqxN2FhTtqh1s5BEoywJxpA3Cad3ofxpYioFeZS7vCQKa5LRDUkvqdnsW5uiQ2sMkyTU1cmGqPRUTprsM",
  "key10": "5fzLXSsbo3rxBCaYqgWdGYScGsdxQGyYZ2a1axAUGtutVyykfZt7KaSrShKhCcPJT12VkWe8nYqSBRBtFwyi8HpJ",
  "key11": "53gy9QuqmjDu5gJ4cuQXxEBvJ8EGyL6gGc5BY65Qkbkx3D545TZ8XPVcrBi1dGxpsiqVVcGwh6k5ftxrBjmEsHYf",
  "key12": "5oDPcbDLWsjhsHY3SGZPxUgCZtzjmYGKPH1othqmDdfX1TvveU5ctZfrotCXwXbcXj6MjJdVNEDG7kcDdHnKNKJr",
  "key13": "2ZDf7AFYyknma9TZ5PXrxChg5uqhFMkMsKCgu1L96zkvZ3SZyFRCJAqXph9WKKhjSeHgSfB685jYvmoro8JJxcNx",
  "key14": "5hB5JZjrbD7JyRpjC96efzKD5XnA8aFUQ6gjjrac9x7CqrP23e6x93xfuvxKSDPQGToTzscxNCHefj7m3VXf718v",
  "key15": "46QYkjvxEYWS9U1LY4EgixyGxsR7eJquhdJ8UkBbxoGnBnpsRuhS315cHvSmdQAMasJorm9ERm5ZxpNC57MrXrDf",
  "key16": "3iGiG2ngUtAwjMmk7mNeB3pA6vTAioFkfRnJh5wkh5LyBLaGk3RW8XmrWj4yUmcQKr38r964p8Joj4eoDW4fB2GK",
  "key17": "5prDHUB1RS3tSLWGhVx9uMBcqNKTvjA24GGzGLtdW9XmjSLQdSLCTsWTUaEPJxgZtZGkFpHkS1A8CdDmNvaHwZoy",
  "key18": "61TeFtEcxMdVtV2fsyfhSiFt5WtASaMj82tPxxQx254zNCtNDB7oWsKyvqvoA8ncyS4QEKMtVB3PG2Jg3gfEmWAg",
  "key19": "24KxWYJmoHcEPN8QoK1A32h1KDVNQanCNsp96oruCALJDqWxeKekCNYHLANrvk23raaRh1pyzSZ7q4rGQEiBgURy",
  "key20": "qjFYUEo4KMyoGhmowpefUYSTfEiaxYen5gdgFjuaYcXoVc3ZUN457TXCxeEa7RWfKvg8sTRRZHBZVqxwdhffX1y",
  "key21": "2My4E5Wny3wVaE85yQx3Znw9sM5wisy9kQR1n3iDP5wwCZB9SADvf6P3h2UfKFCFapFWr7QaNyFqD3dRVQQkKPr1",
  "key22": "3teW2mc3zaM42RDQgdd89q8vfufupK7nDfLhcrCw4E4835kbwEmpCf4bPBxBCz8vfhHT9wWuCKwJEZPoP2oMJ4k",
  "key23": "79qpDB2fweYWbAWzesaeHiDhQTpWLMJtJRVJqMgynWVCaVfKtc51DKovUi9xg9HbkXdwZCnroxqkYGXPiVJr9tG",
  "key24": "5fqQD5m6zTUeaZ3rC47mtfv7W99eUYjKmdTSTs8PHBkfZFXawYQ3n97K85YHnNxMuffAjKs9QWqtRHnEHuxxzJRh",
  "key25": "3fe39rNm8PiT469JWPbgh7UdibPMaqbh5HkGPkPrVzrCPyj6Vf6LkwyJ8gs37vnVj8bFaw79E2jwYVX4F4DQvfxt",
  "key26": "2PEvTHsWygWAZQHUKRg6kqSfV8PKMTqrSTbuP85n8NVcq4Y7uMqp3ZpvsLWRfMJgL63oR8ZaAUxPKHbZHR134UzS",
  "key27": "5nHzptGfKg4dJredUwKdkTvoSqLXuuhsQPgp5WCUEQwmDrSD2oAcW48QZdutHJ7u7AdnLCwTdy6ZrTzFJBgd9jaq",
  "key28": "2hDd79MhJjqBWPkXhFu3A6YtFjDiZb5fduuvdTbRgyuG1QS6nPBLtvSPhz5DVUzCRhrYkKmd3aC4TRcN9ZmRCFCj",
  "key29": "Dm8dk75aRBVRvidNqhTjSQeq3tScuAiuyipQkkDf1Qtb9oa8SLMNhyoa9CCLmTjPdxSQ7bxguaeKyaC4kjBGGpX",
  "key30": "c7XGfsyNiCuCGund6mfUpGjqt4nrzBHxQo8a76qWpU8QEZ4rj1sKpNkSszia1YnkrMp7JdjVCABTGcrSX79kgff",
  "key31": "4FdMge6AK6CmgJjW2cb4cHxzssfVkTaW5kB5Xw6wfMEVbtbeoMSSBWpgJmSz3QfbxERRsR1XStwY7XYrfG2de1NJ",
  "key32": "66VrN9W8fLTXbtzrFqTrNk8QBmCvJaLUFG6eA38JfhYHSz8N9aSAZ1FwpDiVCqPWVfxYRmX7896HVKaUA3CeZhzp",
  "key33": "5Jq6y6fQQNPeThMHVo2WRaMWfscGH9Q4mKg2x87D8TSNwB7rwnAGZys3ifGVwZ7EiL6SUwAt8uUxqiwYJp2CtEVX",
  "key34": "3jjfrzyAoJuh8QV3R5Wf6UGp7QbvJ37RDQ8aVAZxpTiPmpx14CqC5EnSD7T1eBHM51EMbbSiQTArEUFebQH2FzFP",
  "key35": "29GYZhVv5TvxBrYw24aQnYRNgFJWJUPzNAqw1xq4D31Eq7rRy7Xft2cfpnvQeDLoPJLYF9hMXBwHYpC8ihV64tw2",
  "key36": "3Tdh7BZV6jCWeejcD4Pd1RUoLWVwTjxUd635X9v6BF4JnoE7rxb9b2VnY5j4GBHFQRUNYgMT52eDT9bS1j5qK4Cw",
  "key37": "44bWuoozLQVKvFcNZbTNxuxLhcE2s4yXSCmiEGo5qityRC4rLob4WAYsYaT73EqAkDHynic6P1Lbo6QrB5R7bAr9",
  "key38": "2FvpN1yoo1pRoDrMHVKyji2L89z15oDYhRuwvEZ7oQNGpK3MMchM2bTRdGx7inW5Mgmk5CEokoPcQY8CD84mj5zq",
  "key39": "3QbnkNUnHdfZvG2UidxeuADt7K3qVoF7qmx5y13JNzudAbDAwxgkRLACdBoj6KKM6pLFAseA36mZntXBZiqQWUNy",
  "key40": "4VxbWyK78k9ShabMZ19aCpsabhKcibMNoWg3cHjRMzLrAtrDNNjy5GcNs8SWyYQMv1AW2NntUwomRMoYAtMYAJLB"
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
