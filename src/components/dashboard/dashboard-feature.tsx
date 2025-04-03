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
    "61GPKz7gKvjhNKhQQzVaWCUcm3q2tZSHxUUCk4ScWQ8kD6AkGDFMhoe5FUZhXQxu3jd44WquxUK3UEBfCozKXXdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgja6mjECew6w3g6tccFG5igQ1QfR1sbHMiKYJrfHFCpqjkbZA3oURhpapLcN2sct5mM14PhUKJgVBuWns1XyzY",
  "key1": "5zoMStfYu5Vepouqy3FtE4aQPrSLVaCahWE6n2MkvMbPtpZ2oexvvvsvGJtQpojLY7E16fC3sWXRWEeh6Wp8dd43",
  "key2": "5p6SLmhxHJjtyXZz16zRwFwGePXZXmo887jqpfyvS4EQLeNcrxPSAAxcLPSMAeYZYpEcpDfa1d56UbhMU6pZy8Rs",
  "key3": "31JUU2kRG9VNza6izsaJrpYhkD3XF7YbVmq6x7FtAtP7Xp8JGHYANQfaycNMadtGwnmUk9BPsbWzBLgVr5PJGAmK",
  "key4": "4efxx9GnzScuu8vEo2nnu4BiqKZ76Je8hyH5AEtNDpPKhooMZbRNtHk8xaBrhwRWkRhmMtZaZv2DoMNVwkim1rtt",
  "key5": "34C5EtepU5Hz9awBDfEbzd41kCixtXj3acsbkdAKYwZFN9cudEXPRGmSuNZbCoVM9VBs13qGsSjJgGDwkK1rEJTG",
  "key6": "2bZRkMfhHhkE9qkHq54uUNNDRVoDGKUSkewY9dJW2ucWYBHfUHeuLJyxUZuWvLLgTAaQqrWPfzA43gFog3krGHBC",
  "key7": "3TkgHe3ZqpSajP7xf6iZsNrpJynU3ikHobGwaP1PPCtYcz4QKNAQYYhjFoiBn7aybF3bVdUd8wWJ8v5d21CysJQs",
  "key8": "2AxbJCjbgnCnTCF1i9b4cSYLzJDBHkyCMUTeuWbUQceAHzvXdbwNSKrE685Gs394DEAb1dVL3jbrzMXQTBKuFbGu",
  "key9": "YvCCyaSao28U6SauFNSMLJxvHcdZP5qfg8jACkVjVuGHDaMNKAXat6bd6BGNNwg1dv2e1ipqmthcXneR2QPvgmc",
  "key10": "33NpiK24Wcw2w8M9HCPZGBuA8C26twtLLZRY44MEbPAwjDscBe3DvCYgPbkyxdja9z6wBEwpghEL2wMRh7za5oK",
  "key11": "3ueY8y35STJVKoo6zzDwLYUPofsLLhBJc1hdRi8HT8iAFinVhzP2uUCPYmHyuFGzKp3XS5sehwgC877G7k1L5a5f",
  "key12": "4UNkDxpdLMuu7GL9aJw51tRw4onpoyzTe6tcecsPbPxNfeRMyt1iDABVrMDW14k6ZPaL62B7c26Bzp9gEQdgdFgf",
  "key13": "61kkrA95kmwFChv6Azm2wGMHbtrZMkq47BsecYxPdddhSWVmaZ86wpWA9YmyG8LyWSoZo95sAMVRsomDaBC8bmZ9",
  "key14": "2vSD6xWzA8x2K6tVQ4NY4NA2ysUT9H7hWrk1jjhki76f4yZp5M3Hh3oU9Z2x6HtubHYGNHBUmyg96hhoJxL16MXB",
  "key15": "4d1woJXtQhnDhqdMJ6RZuCRkgUfSCJ9n9EtiZyEmAMzuGwBPdidxvbeockNUSBxg2j86XpwWdMBsmVZu89xSeNmV",
  "key16": "3383BTSrsyXLN9FrmqMVwE3KP8dLXEe6Wp4dFbrT8TwD3eKA2UyypHTy1EuNXCW3qBAYysjfWLtLV48LJ3SGDQhm",
  "key17": "3UYJCu6fMBGmT8VnP3tiZrGsUDPKRdFCx2xLmceFaAdC8Q74eoSng8y48uJ8aPaVFAAXuakTAwdogfJHXyyPeVB3",
  "key18": "2gDuJDAV5Qfm9wMcEZ4zodjSVcdXtQGXG6KRjrw5DAVcmPJgWbHTeAfVLNWH3Y7vwjf7GkgstoHD5FxbVPJAyUZf",
  "key19": "4DuZXXYZChhy43ks3Suyz8giduNKEdwf8yWvDJMsRT52kzo2HS2f1qTUMb4ad7wyLLZMVb4d6xSp2adneeNfRubE",
  "key20": "3gL4EeRi2Wh1cir8PSk2kvqcL7Rjvj7oBd4hYK7uCfUyCFmcqYGF2npKfW9QLNJHf4AwZesgM9HvNAoPPAGawHjf",
  "key21": "GZ6wN9bMLc4EFpvuUPHBtCzwtHHAqzuyLKyYtN36ri7SE8UqKTSzJDQs2RbWy3j77PSRVRssEUtMgnqwfMk6tKb",
  "key22": "2h4nQq6Rs8tytWqnzf8D83jjoQQezBnBjTujqGZDwhCfoPJn84FJY3rUaxywraF4KzzT9FKqQpf7MCMmnZLWUGAg",
  "key23": "3W6puKXD1DiDL2dxdpEfvFtj9skokZWjqZiHayGuWxqo6dtRX4WshULqw81ng4xXWMBS4QqfAL2Vcxf6WrfHZoye",
  "key24": "5XPTyTp6F7W694bGQZmyo21S9fbqiWwRqEQ3u1iYD3iuTzMVftVnn3uR2AC3MmevGD5pHcuqACzZcgojeLwr1DNC",
  "key25": "2o6BC5B3axw231o7edhVp6iNjd1QvTM7BDS1VxpvKpzi3xdN6cSf8dV6LTnSsgEZyJHNUKxJNfLvr3XHQarf56YL",
  "key26": "oKZzSdCWgaMn6ncndMMEtUEt4F4WVeNEKF3Z28WLqx27Ma9JJEX33j84ZzNeBsW6swEWL1JbHpiNeWGEpCTspXa",
  "key27": "63n9xQQppeJkszbw574MfWptX3r5GNPN3JVwRR2WAuK4hvwXVPn5MgBTTaswE7Hw2sd7RYwoFn7F3c89rJHtFzZZ",
  "key28": "3SfNGQXL4oNFSLeFpNXeXD8bHdsritSKMTEab7B88tceuG5KdYuckyM9xiuLEDTtzTeuDandPtnP1NUZPWcrPy8V",
  "key29": "44FjV4d1CNwQFvszn8eR5Vtmzr6hnm8ngYftTNXGDgavFYAaQQKbp9zWjVjDsoACshhxz8AdbsXsSeFPBhXKdzxy",
  "key30": "4JpKFSGTgiVwMJcxJNPbcuAKnXJKfaeVVQavrLcobWxcViPiLdnh34q8LMV3WzrE4V749GEhXrFEfPUtXoBLKYMB",
  "key31": "4eithVBiMTJDnzHMSRyWz8UnFKeGUrpotk9PaLZvb6BYMAtVTw3uuiGBKptPv5wBC3tp1eSYbw6JgqmPyJHDRfLz",
  "key32": "2svXUqGpkdnAaGHo7ktPZ9CKiGKtYVXe8J5UMdGSibTceTnprr7f2BDWDdp89zeQzG6c7TGHzrqBBmivUMZMaW76",
  "key33": "2xRg3BzPLPyTFjpTAG4VEeqwiTwuJsrENtr85kJimJF9GJMCnYcPNBZArvA6CUE1QtauaMYmktZPZCG5XZ6sS6PS",
  "key34": "4hKEzHzTCVj8n9hKRDj3fUcXXQtg3fDY5yeL8aaNL2S2zUe8dr3vKj43iqKZyc3JxuBUm8PuV4GW46LoYoRwQT2N",
  "key35": "4mxhPBafVwvcajtYwXXUUoNbCLcFCede6KuPDfCKjtfuE17mhBmd1DeoPs1QLPuwygZJwPxQaUmRhQWmZFx4jJHE",
  "key36": "2Jj752DAFmWH5Bav8j1QFxbHbnQdB3BUrhW28hCvkhwER5AZFB1qC9FxFBCh4Do43f3tnuaEwZMi86qjBK3EeGTe",
  "key37": "5gbJSjW5MYMsSm6C4HgFppnZ7ENYuqvSj3V8ricBMYJEPhV1BsQJfkB3hwiK2tVfnGt5rVtomxrUATY8S7pHWdE5",
  "key38": "2GjpjQczzWh9UeoyEz95ts2F7ES5idHfHet4CjjuVGSUABJpbqiPpjTd4poiBPDhMRGWYTWqQ6zpE257Ss129yKQ",
  "key39": "5RBe1Vv9K8Q5kTuTpx5ZGQSBqvLKMWd1eRSZwX5pHpgoXJHLQQbCBz9nULK2jqQTCriNjftk5xyFjxE6oC3ARnW2",
  "key40": "NtTU412UxWTPskg8bMcTESjjNsgkZotK1Gd5aCcVHBRtD514ST8Lj2UgqAsHiHpHG784KyX6kkejznnAr4eFxts",
  "key41": "zpZnUzLnob1VkcytGgA7bmPrgpkEhxHy87u9VT69p1Fh1HxD7XfFTttbuwHyjLrb7ShoSZRfjtkWgguqAcZkbP4",
  "key42": "51yvfoe6hmoPf1xEDAg4CupFJ8urTuXgCN31FA3adBpZJ468gsW1zcXDDsEcP5fpH23UTt1PDF3tBEj23QFW5WSD"
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
