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
    "4vUjZWGAJ8F8aumLFbb4kK13ARNnz6ek5jzoGXktWPVBhBH4XGBfHwFyvNS9wK4sQ2cBiP9sZ4hZebbctwaRwPBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q49mpvTkzUvJToq6WQnMxxnCpvfZLE9KtQrLHyo1k1avjxqm4v5CYfhfJD9gQhPX4chuNfoMNPoowhgeEVo7iRW",
  "key1": "62sUgnVwfY8ejy4c9ShMaFEUETotvNfRmErFDuhxuWJVLFnovNDmiBBjgizDKxcdYXMJ6c4YD3nuiQKmUYX69RcA",
  "key2": "ytKEYKeaHSfU7ZgN8PRjN7vQCMLhhCPm38AXqMdoTJk3kyaekiNY9En2kH6NF6R4NJ155f5xvf8RnLcxNKnjMUW",
  "key3": "4WHq1PySmvMr62UnA3EoDP7XUc9Udcjb1UXJVcypqrragFxA3wWzzmbt9LDwH5N4qLGFx9siCNW7Zk41aJDSkT3F",
  "key4": "3Twjqkn5fmEqKPQEQCvPFwcWEemdcBdGjL2Mnx5JkcZSQCDPxFSZjLoJUYcfMrN6YcaHJh8JAinJjyGR1TKh2iZG",
  "key5": "5ixn3QXUCzVGzKNDdD8iEEohShWYHRAqExqUJcsLKtmFASisHaJ6dXedSDeC52CGW3rTWveUngQa2qGZKtTu3pB4",
  "key6": "4WQztHC7K7Nfms31H4tPfY8RJcPCLkuzcVQqqqi18ABPsWyGjZQSvVkSerfkQJQgs5W13j47GWvgXnPvcqUCYX7X",
  "key7": "4QAtg7SpQHoGTWJCD2tijHGK9YaDLyaMgDccvpXQHNBNRXV9Q4qsyJcAQWaf2adYcavjEnRqZejatjrrEJMhtpfi",
  "key8": "65cdP1LGfbHVS2oeCsfPxcSx2K8FHQ3Wj76DCG7as6sQjHRajpBvhg3gbeagEQx3EeL8mGyAN24voqgSPmRL26oP",
  "key9": "4tsuxoTHtBjASVxvg62EamD65mAgHJCS8rcXSm3JNDhRxvrMGLkM2V5GMRryRF4Tjy9Ay4RFnZ3EWD9m6xPE3Bfi",
  "key10": "4jLMSMjCYaRDGVt8AwKUwsibnc4xaboASVzW9DzfmZi6izfQ26GfKwcVnJGoDTDMWkKHtpHVDGH8riPYBCCswXsa",
  "key11": "Xh3uXnuB6uEbrgpw36tgqRtZWHkKCZake4dek5moRUR6JQG43cBW9cSr4xdChqFrdcmyD9Ze55d1BKKCHLS7RWS",
  "key12": "4E4pr557tzvkKB6n19gndKULHneRBQS8G5J55tueJqmGa8tY3WSBvxjngR7t9DxQSWsUXcdztYnzG7Cm34u6WLKT",
  "key13": "5qYvxgSUJjvjroAdQe3BzSoWYM5SX3tESQC3ifTUPAcB2KWCibHek8VWe85LtSqPckiXs8Ry6bhHWZGaj9MUG6u8",
  "key14": "3Pn7GYebTpBzTmf3jA5g8aKTYqZBdz8vJQdazyScTNavBxic55z2g5Yp21BfKoNd5qzoRikeXt8oqegRzGHxJ2jP",
  "key15": "3Un1vdhseJxw5ZrbVyQctDMzTAkErKaKDtmC22U5svxTi77dAUJ82F4LBZ4kBGMwCFCLA8C55HTFYDSddKuK3oFM",
  "key16": "BXyG7DKW6hB2dWYof3ysjVVv73StbaUR7PtCp1fHUivdwP9Q1kqoMHVGKbGsczcF5qM8H4Z4w79R6kSnwPEd5ac",
  "key17": "J72Nnz3gATTdw7f32mW6PXuksZJWCKL6GNs646CaEx2WMAKHCspxFhtLQRwqyteHmYkmp2FcgkFHVd1HE6WF1Lo",
  "key18": "7zc2x1Bs7YNm6wvcz1SbcdDzGQscHiZd6jyfCP5myugZ9FM8J4zxoqAa9si8f2eMDxqGJs6GLduq4phxhz81JEV",
  "key19": "261z9QRm1tF77kU6hynbQzKxq4vGRF5ArZxmATnnhCmgnFxNRjZw7SEnTsufxW1h9dBp9GsSh4ACc1563yUPs7GE",
  "key20": "5fCS364Absqn47yQpCuTWo6rYt3JzjCEoJhxvvm7CyJKrBSw5TJcZdcmba6bYz4BtZ6FwPQ4tK6Uge4E4u9x3QKj",
  "key21": "3DaH9wNBZp1D6Zw7yhzPNdNY8b9hzLHuaZzvxkdt6eJrDeekDri9Ed3KcUQsDtNihFWsHsx74VeSmjKg4XUtkPPL",
  "key22": "3Rxs89Aa8XTy91JGbRvnaaNnTJm5HexYtEAQKHoGF1vyZZWqKHJZf9Aos2j17rGUrLAmgzGFXa82YQw6uBsUbcM4",
  "key23": "39GCzpHzZTzA7SfEQXP6fGNmxEtUxtWWnEzYZzAwSzx2UVvfspGVuaotHtZiWrYD7yzj4jFNNL2MMUEonUE67bWm",
  "key24": "5tLBmzypAGAZn9sMLP6BCittTWCbwVGEWbpcm4RwZYcjfAuwrDbgY5BoKpevMhSsW9Q3Sri8tAWFHTfZ9XXCXeMy",
  "key25": "531EZkV8fECjh5Tmn36vuvwrWe7yDucLLgn6ZRAjMzjbTKKuzeQe5pmJSnwsJJSwht3xvopGXCp8w5eTPku6iWhq",
  "key26": "371tSUuW4HUTC7dpKpfU89ebn2YeyJEUAeT9wWuVNJ8h2454mwuBUxWANKKzicXV1YHjmTKLY6HBc8Jcd7TUoJHx",
  "key27": "EMeP4cUxBrL3KunFewXJ2x8Bq531Zh4mxE9TiT164M8cSm6BBQwBeDEQ4E1r9H4CqhcpatYudZnfP52tUJprYGA",
  "key28": "5MoQpm1LJ2zE8iuJFgbCYRTr7GW683R3Ai9M1X1SvzzpMtT63pds6Ld9im2XJxSz2gn7nY6BoaBo7QhLwvqyZx8Q",
  "key29": "5a455iwh8R1YgaTTNq5HDaZ47VRB3JKtR84XyuPMsTmhhYVoaxSNy3U6TBis43Lt6B5Wk6y34FADVCHD7R7tw7VF",
  "key30": "3yj8RGCjyjoLSMxdHP5kMjwJy5QRKbdENZuci1HyLgMTqNxec7sBH2FdSbhMXq3AzajNR8bs4UpDtSdy4JYVAJ1n",
  "key31": "oLmd33HqpJktYwba59UDjYspRaY6EZ4pBQY4QMMiRJobEgvBP157nrNBRpkY1QExYxrRnj19iDBbmhyoxQnA76T",
  "key32": "2VpZf3fNJvKnUCvd1P2bmMwjjavFcRrsMEzAmn8RtHhEAptCLBmmhWL9EtXbWwujzvHCNeXqb79jMA8AgCQpUrDE",
  "key33": "5YNvSS6LKug77Ln7Ui98UyxL9twrYKNC5mSPNc8Uyj5csMkqB7S294Ysc4pGN7VPMYbUPMoDSvXSYYmjRvkQ19yU",
  "key34": "2DvxH3VMkxcNTR6RC7V66rygwBwEb9oZBGt3XLr6TnN494qaHnZ8ZSfx78f2ikWcr4zPXNKFa97DtwTR1RJ1b5Hv",
  "key35": "tWiaTAYvMqLqyMC97iC8LQr1oV65XC43awpZ6cdPReUmP7SiAmWJYeoWE6sSgmYZWqCiWAyJDVuU4nAkV7cCYRy",
  "key36": "3esb8UJmsaQ9Vnw1XLYVPK68wQKdF9V5HSXpcwKmwfU8dBRcuomQhptfbHZWFSwRutAwgCwDtDAgPwbkTyxu98EM",
  "key37": "3b4UQM4WBTJsJoubzS1ixPLe2ofy6ati4TcGoAodBTsrdXBkLx7wga2Jo9fkxGGhxyPmCbqduHkqMHNCsRgDXEj4",
  "key38": "Krddqx6T6mrVeDeuXMkW2StZjAYHxWVBm1qke7NUmGXkcENv8L6yUkVemuMx5EsEX8nPJxcF52zUNsjeKyybq6R",
  "key39": "5sv7WUDcyUsb2HiRo2ZWoHjU787yRYcMu1MTZRCWjbtWyfKABRa5sxcZ8tN9gotKn7XZxdEGMp651gdMcB6nPNtX",
  "key40": "Dq7ftH4uGtAHQwRbTVXS9DNp8WVFYPmHo3V7oFbG4gEVEgY4dSpaBBiQq1k7idwjoei15RHq5BgbS1Apvjkdiwp",
  "key41": "3cKKgHkZRAraMngWETzsbDp1ZhP1n8Jtf85WGgepMmqrTLFR1akjCPdQYYjCcHXQnZ7pd8ouDjiaNqhGPo4SpxTQ",
  "key42": "4rpdHxVNxMT7Yz1ct6BQKngBeNeNyxhj6UiPgTyhLxDRug6oPd48ujjMrR3KWFbngMZ4bAucahGzZXX3VwUN8KmE",
  "key43": "2nj3muYBjsjqmAgwy417RKzbV3BrnXHYJBhj3CUvxwHP8SpG8MKZJtjxiFM3prmQzsAS5VgXigfdWqwZLicQoT2Z"
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
