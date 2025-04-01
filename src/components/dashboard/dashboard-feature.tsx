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
    "3smgv1ZdN4BQ3JtzhroiuRe9UPNNkCDAuYU5KrzqBJDgrbwQXFUUVA4kg5X2dwMpP813tXYEPNJVN3QWRodjZkFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWPZ2pnv3PzAi32B9RiS49sHowRT9xXsMzm6vfM3n2Ee7GwZAWXcd6my5JDpYktSwN22rsnqAuhwq9mGmBqkcum",
  "key1": "XZz2n1aqD6CRN3G9nHKhR6F7L8QRHqSur2M4FjuNGBedJtixbYzNcKuDrkGMo41DfPd3gGheHngj6dR3zksnqKY",
  "key2": "2cqkJePzrTtCYxLfAzdEb94YbiXaucvv4P1c4ySRnPc9k4hJ1qGVH7tiRnfov5hpimcGS6tW7ZMr46HE9ofky5N9",
  "key3": "2hRTdpcHkDWVSQXYa5m4TBqbFH9vnpNZSqANctmcZxTkKbiJmZZxLENe1WRxnV9yHYmZSk88vg6Ly7PSeCzCZqhe",
  "key4": "g8HWAgFHvKdMUaxUwbekQpgHzjyuo4VhKCKhgNqPJWGhbZ6RUk8KQXmLB91pBn4jReCaKFhsTuRS2BiUBJFLsZq",
  "key5": "4Gb592xQ2HTapfwRFqWCDYQ1g5TxfoEEXQWrdUVrekj1QDPfVKMpsJWDFe1FAaYjzuY8CY46QzVtQMc4eG1rmjF4",
  "key6": "2tvunkrstWN93vtfVVthjHAZQRgjKq6WwW4BRBhhstHq4kD6oxgTmLg8VDyd7m4fQY5qv8nX3spGT9Cmf2xXw1mJ",
  "key7": "63bZa9aRRNuJtcy5R55jy9snSrGvKbz5nqfCBZ4X6ifnkLUskFXCiRJBtHTUUBHQvV5zFcbN2mpgrHUCZkdW4UQy",
  "key8": "5GwDx1tFEqZxGfnj5dqG3jXBr9Rh1D7Z76dPzG3cyyUPrc8gKTZk6a6E999x3oAEUtUTnvSzSwefDqzX8SxZAzKv",
  "key9": "4ShZnXGUASk8nXme5cjSNiz7exTfHVnYxbD3uuUVWJFdYJV1dxkXwdbfTrEE6D6QFHemDZJDJtCP2qe5SxWpx31V",
  "key10": "3napsk7F7rjf3ny8J1nBia6xTqgKd1YQJg6U4y82KYgs8k7wqunn6tT1k5g4rR6JWeCs6654ZXz6HsN4KoVY3ggN",
  "key11": "5HepvAycuud6FSpUXPWtpWea8yLCJwB1wnUNtnWt9ZKm4pxEBLkGFcKUvHQD2FHoczerzYjUneD2B1ftt5WU5zf2",
  "key12": "3vkqjCNzyWFJJHbC8sJfXokQKPREBkMF4R61EP8hcnunigfBe5vf4TThSf4jJzpPUTuocyug3jPTH9obJCaXRFBG",
  "key13": "67mKRDS6aGTMfDda9NfgL229gMg1fQMQNkcJCaAmbm9SKWb4dcmjvRUAN7ZrxJ3Mp62yv2C9f3YyYSd3FBTmhx5x",
  "key14": "facAQoAGPth6hDYgLNww7EeBBCEDsLMEPh9fPm6iDAUoMhKRVBmA7PRSKf8aJUzoW6TL3kxWiCw6EezVPhYuTct",
  "key15": "3gAjfFckjbF22g8c3HNGHyR7P3bq76ca71mAp8fuFcV4pjZenGcu6U8Lmj7SCUw3NAqjXMmFQoCsbFvR1mK5ZBFR",
  "key16": "296NnxQbw3W3qrBAMZ8L6Kvp6zMnqfBromTTzWshBesrm7TgdxSywD8Y6tmQAoF38C13BPS4mEjisUiLxhcpyKBP",
  "key17": "sw1wzmv1f8zboUYbw7vHpcDwZ9Cabi59wdmTMxGWsS1gQZUKEeuJ6xQihffS5RuD7c4C4A2bPC81M7DJS2xn1dY",
  "key18": "5UocQPrZThKY2FADXuf7GgqTpHBvUXRn1PiWZh1pPp2x7drJGC1BEWC4neLuxT7p4udAFm9gFeSAXLVTzx7CoRhN",
  "key19": "4GkdntaESn3vtvxs74y6KKjyaxcVYD62HAQjjDRF8ZtXkkoZhTUrGXijyAtwHkuADerPQ4q15L81vcaPyYw994mn",
  "key20": "2CGG2ngxyi6tXXpoG3WiymJb34TFhHjGjJu6VA8Hfdqy776c1bmmGGphBoNqqSxKzNYouipKM3SMdDVzMDkfUy5u",
  "key21": "4dcDmMDawmbUYNSx9Mtit6iFx9BxWs5cRucyCxUAwEPEm6MYLEWkyYWFFyJHrZmpQxqP7EQGxgtkG2AeCJSVsA9R",
  "key22": "43ZSCrYHzbrJxD5YBtGZ4UnDPPG1MwNjkc8uyNumJB2vBiUzLQJvWPjeWSKHwPeErohVVwSgUvqwSTxa354aoudQ",
  "key23": "3NqSQJQq9xPhtm7Dbabn4ndAqVetPQJNWNXWP6EV2NAd1abjnQcgdxHEvnEaxgDREHeuCbjF5B18nMKHdMQVcTDF",
  "key24": "v9mXtdrFhtnoQVxjphgwtWrX3SmZdFPEgcpmxzHpZ48qKfbKyBWdVaHzpQkiSHKKCCb4JNkUvLgm7HkfubecuJV",
  "key25": "2HyFYCzNWKqXgmB2QUMnSHUAxabngTu5cPafAXJzUimK6gg6ZS3HSojWeayfnmhJY8GhjxJ5XZangNM3XZANHB6j",
  "key26": "57cvWdYpvmsovaBHG9n1cWXmM54E2jCKGDqUoyqLAoWsRKNXjdXNnYMmUFm8aC41KNcGr6h6QQxdLhoDujcQz6p2",
  "key27": "j9vPzchUBhbiBUZr5TFmVWTWVUDziaTdRkvsh4WaE3PFRAi33tfzMq17gBSwWpCaJeLiJHFBZ417sWmDhwYmLyE",
  "key28": "hJQQKzHY5u7Xgaqaso4BBEUzQyLQYM5dFCJa9L7tqytuX8ArAYQQyb7k8WuM25wZ3RpEei4SD6gCevWN2a1xbNC",
  "key29": "5wVWDaJzQGSbEqUGv5Fjo46MUGDELva59WVuK5tkXG5JGZAar7bjYBEMp9FX9dDwaU2AiSMzgsh111YXNfL2ikgX",
  "key30": "4HNGSmFDZL2D8t1X9UizBwUK7SZm3WgsiLtve21big8C9ArZLwUWJBgeY97vBvzyXvcLmbxDUaK3JCkt3rLfSK6G",
  "key31": "2PXakGmBVaGSKYKEKrPRr7mQDhUY4rY7Pgcb2EukfhX2NPNtBwH2dV3mqDLYYegAtzs9jJtCBAT2XfV6bQEqdzi9",
  "key32": "34awuYNw1pxJJf77wnWMiTtzaMW4FtdPMupBUuoTPiy3Bw2fAi9WP7PnVkzrwo2hmpEpBFnAMpCgNG3xEezuUPTa",
  "key33": "5PZpPAn2iXBS7bqUd1txAkYHzQw3yimXUJWHPRcbDwqsK6Hc8goQsxJwdTQQMZ11ktDwJGzj36LNMm1zG6rGpU2H",
  "key34": "2jjADTAVJJMc8TqFC7KrkxmE7rLGQjWic8f6ozMYeU2snk7MPcmYfqUHKADGPevo6goB4BF3aTuDAsn538oFEtM6",
  "key35": "23AmWFxCymq3gCDBS6adAx3ePec1MWXYEucEKNtSv5Rb3nae2BdQeE5DP3BcjcbKYGrATonKb43ZYR6z4atzXp3z",
  "key36": "92K3UnFPQuBqFPzdp4bU31MqKRyoi5AWKLNQ4rvcxzBqaZHcKC9ekEhJvmvJK7mMUaFhKrMhYHXCqLmrW8UM2v4",
  "key37": "5fZZ8qxmun18UcDjFt68wY1GuKJAQ7QNADKEqtYt6B3DoKwto6Mry4n59CGke9JUBq9SxSsUfRgcjx7o6XVwrEQ6",
  "key38": "azphauNTU4soV2cRuxgP7t1Wzqw9VsLknG1yVYHaM5hSqP7QpX6ggHkW8Xd4anb9A8nnf1DWU4xP2Md6C9fUMW6",
  "key39": "5RyGsQEt2mMm9Fs9PDDwrD4i9r6dt7rU3FinB285zGUm7yTZab18ZtNgwQKG1npnQVMuvtaMbSfUqJtdkxg1q9EQ",
  "key40": "wLTjvS4dgajEGBjvQfmZpkk2PHU2cjkGru7eGMrBxtahGoj4m26pqxtWdEEs3nGu2FvwUw944FkEeXHMdpv9ZQC",
  "key41": "4tBSGFG86XB1aBzwpwVVN3dgSsGEcsh3XJDp8nyYNHz7RGrwCJTw5FLoxc3o31madagnm7Tr9jcCVGxLaoWkpeKc"
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
