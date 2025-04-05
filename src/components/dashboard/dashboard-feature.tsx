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
    "4NaiMQpEC9uFbrQz9H9DXoQ9XNMNb5TekBBLJdgynZ5HstH7UV98CC5TCmpbswHz6oaPq4QDvtvZG6NnnL8xcWwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKnuUBmr6mMgQRhv7kZEkNKWRGTVRDXLqpQ1ozpWtd3CuYiqJCPEUYapRTY6L9RNnvWxwTyASCS9FXZPf4tr1Cz",
  "key1": "5f1bQtLaz2FCEqDsRCPvojncHJaRv7ui5ihKL8GoxpbVXiu2eQ1J9gJZkfne6nkSdqCi1dC4BG3P8wM8vNpTFhQF",
  "key2": "3wmpxmVwi94EXvHsuCSEVHV6maAvXJz7Z1xGGQMKDwdaCcz8adTvQnsA3jXDDh5vmTpQ28cBCW8nrPpTKwoKLDGD",
  "key3": "5eXWftvb9f2FmRa5qzHpJyFrxV3ekeVcYkmSiGD2QYhLxxVRpVNgWXaZB6hGSChVJh542tafPfmqLJFp8x22or9n",
  "key4": "5j7xcrhZVs8pMEu5YKAu96dCg74f2QaNsmNSiLEZtz8rLHetbGxeFz2QUN1Y3fTjoHwAuNtQHvY3u9qjVGhpf6P4",
  "key5": "3PHSziHRfRWsManwYe1SgPnGxYYtoqAL2DHJbpA6e2j8WoaVm1f6JxHdwbdbZgybaxWPhsJzZwM3488JxDHu5wBm",
  "key6": "5eXL71T9qrLxjvBBDBUDus6SsVF6q5JiMPAU7h87RCa8JzuuQKQKEqHgrmKprD4bQcvvZ7YhWreDcT9ceAcvsmFM",
  "key7": "2UhgZW82P7Pq1kLQMf5nnrK2NxxcrtWCkRELcbxAmP5P13fEZmVFH4Lr3e8947DPRdRaBDXa7jWTrQg1Ta1M9yF7",
  "key8": "pTQsy2tfvJuYckdWyV9xtGzrh7LeEhXZYTFDM6qqE74xBZfnaY6Va8Pg5Tg5XTj5ZEeQiFHPCNW1QtJitegy33p",
  "key9": "fuWHD9cfT4sP8APbvtJ8c9KzRb8D1CdEzV62EWnv9xBFHLuQPWKE9TiA16q3KCPj3UirkQdRUtjogjD7dWpWxqo",
  "key10": "RHb3kZ3qJB7MSX6k9ADqqG3MY8maYZ2sWucs2pB3vSvELkK8ik7sJkcAjhw2bxJW4z7EQGke2NVka8nxu4xVbi3",
  "key11": "5x8S3tKsBMepANd2BvauYmGiF7UAWAVXecejdgDx1ryhiUiKKcmzjvLU68bZKtbUPtv1qRVcyRvSodCd7dXNYWnM",
  "key12": "2pswJAaSQ3GuXBQG9cq31sho5LSrgUJ3jFiRdkSGffWjyg5w8m1gpaGWmE4QuWjxxdMyF6vA4ihjfjFbBkF3qJSY",
  "key13": "3KnGQXEikN1obYhonFB8cyQv62tKCNcZvQjndMStKadYrFxSQzH34RKekmHHfFE9H32NFGRAo8HRUiu1T4mW8Xdn",
  "key14": "2qgQkZoW2YhhdWRfCXYFSguusUEK3jxtU8BvbAHgb7M8rmiH8QW12XdXNN7bgeAQfgSW9VRiw2J8eXfMjXDi7Psg",
  "key15": "F5ijz6ZBh24Jv1qTPne25gUf9PGD7XavKqE83EpdLpjo181NVdDsRsoLXjKvEjWZjhpFsVWRNPNSivP4mMmi1xH",
  "key16": "3Ya9u7wUjsvpHskPifGh68RB5msKZXJbV6GhPDtLhanBEc2ehSd9Y58SfdHyepw5ZiVingZrCDbaHUi72UNFn9Ji",
  "key17": "3eYU4o7SkMN66151fYC4AeZueSxzqWqH44sHdHi9dvZyHkLwEzhfKUBNoZKaKcriLxm16jiEpgD6DCud7EPhs1fx",
  "key18": "3TZcpaaraBk93butD6w4564qupExew2J89yeCdHFrL39XLSYFLMDcD1U4zerHMgAmq63kPhda2WaB96JffU9Ci25",
  "key19": "jzejsNTZ8AEpdXM2TAoqRq7q49TZ64kvLg8TgTMnqNRszWDezfoVQAWXQce3PA7N4NxVpHL7tkW8xK9MKjm1Kot",
  "key20": "sFf9DF4kuK1uigcB7UvhC6Dcfn79kaRurqWDu8v7w9as958cjf93aFJykM7NzYf89FfKjwsqA5zHb4QEhx7YWEj",
  "key21": "32RE349jvmp4mw9rD46Nsy5dPjAd7v9imZ1nWvj5XHqtA51Hrw4cWseruzQ7eDHCJctQeCGgcJpC4aTQczW6W3Dk",
  "key22": "nUUoku6LdZyBvfsyU484ji3Wc61EKkWFbNdDUCgBRvHAqFMsVWxNPSZx6Rf8YDutoDQ8BywAwDz5GoAdfC1Jwkm",
  "key23": "6FnXN7asPBVDRGpxSguAsDk5MTyfC4vKPwXD2mzFt5vRJ3kx9Q7UTipBxykivsSBVyj48Lzqwn4KKTiykK915sk",
  "key24": "GhzvXtveCZSPMnTQ4UGXboVmVjUC69RToXqQGhvuUvMizo3ZG5pzQFDeRzEuwQbvRvA4MrFMNgiejbgCPP1NyEN",
  "key25": "5Bn7ATq8JRmsbu78YuyRaVK8kTUBuQM2ZYf5W8QKcdE9fUYqY9bPCxgT97T22M3gKtK4hyz8oreUgy8FeTYNDvPA",
  "key26": "22AgrpKXbjYPyvesRXjjBpsJnUFCUN2uD2pBC7SbBBwXcG1fQ5tMYbKRZsbtV6UpQwRyLicRPedMdSC7kftcHc5b",
  "key27": "5PA2DJWR7rvfdkWJyRxUJB9ZcbPZ5k9NZfSysQZiN3TZnjqwVjUEvAkxg8A67wL7dg2G8g4fEdsx81ZBi3ojwZ9f",
  "key28": "222p33u82LrvSEpFQCYe3sJgQ8WpKM4VXCWd4UBYtcAHTTYLTjbDYgrcy1yfmMWRHwtN8QDC4vF3bRunnPFca1Kf",
  "key29": "36TFpj3V3JE58iFSamwppS6K2jQ9hJLpMULympBRLxXaJQbKKjx6LWU1VvkUsPw6xt5nu5YE2QBqHPDyCoSQpB9A",
  "key30": "QfYcimWrVLKo5JV5S3YDjeAjuHgqX4XnWHvdtWBNDMkpjhgu2ArDhDgb3YJshmz12oQ7fPTPKidndSjSXh4ime4",
  "key31": "26roye1akGDJh87tadYSruXLKLvxE63LdBahSJ1578KPpyomyzBzMczQGGkSr5yJwesRyhaBqbTEzRcuqGxJmYi4",
  "key32": "5qwK49R85uf77kGWic1txB34HuB1xw3fB8hysoG8Z92Uk4cEvsskTjE82L2mSJyPqhqshyjGeXGu573WRUyCXtBq",
  "key33": "3MhEu5wK2kmtGqG22HXcFracv86m2B8oVDKt6qaqqsereKR7qwTBFjcRaHxuQVJAv8B9VhvTUqNNdiuxB7WMsnCH",
  "key34": "2sMtvoeo3i3hcxydcwvzC1pQjogCDqw5ovxUTFyB8nfer91jBoUsv59M7joSciSpec3LdkvwSLTeuBPUuQkFGZpp",
  "key35": "4pxRA5AeVmEjydsZ8qoUFkQmxZhxXxWt6eFGq9BTQ9AEykecNkNdVtA8MMAnKB9CD8KwRhqseTzvhbverBYhRvCf",
  "key36": "2n3rH19CEiYMCNyui4LfHrZRRaZLZMkBLzDBTM5EsoAi6yhT3KvWoqhJXDCPA9TczhuvLvThLwh2CBJ8CQ7NzHXn",
  "key37": "4GS1d7Qai5G9L8iwu9YRknuxF9L99i8uifwsGsVmJWy3DUJqTPG6vDy6NeNaaKtKP2qkRoYBzkCEVPKr5J8Aw3x4",
  "key38": "5KDLJmvoRRBG56htW7vE8Yc4nunysWEZw76UhLGMDP37EpEhgVQW5XvfUfbTZ4JjaLX1rRN3ty2Z5Xut5LE2DoRY",
  "key39": "dgYb13UPZfQrgqgUYyebeZayBUCxXw4TjmyRGUfjWYQYErw1CkrsMZxqscmpMS2AwDS1bYLaWPzYMzB6kfZvg41",
  "key40": "5S4T36gEhzWYkGNt5qskm8Vs9Jr2Wykbrpetrme2uR4XxrEGh6zkGyGeBY8a8XfUYbKvjL9YdamD4p8a4xGJHfjp",
  "key41": "3ah2cgbcNrtN629Wt5J4Eup1TF46HyVvUCTVdTbPbMpTWoF4wBqAs7emnhGSzYegjQiUixNh7JRtqoQCh2xstvgC",
  "key42": "3PP6rTKDjm28zcjzZNDhQd19AAR6kN843qitKMvRYxRGhnLksx9GSMHsqjF6TtCm3r5xRe5QsDoy2i9Ls35CQwNT"
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
