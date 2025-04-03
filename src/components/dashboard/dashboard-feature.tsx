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
    "2kFWXcMpsk81sgSXrpMbUzDZk13JwKQDvtDYrNrgGX7mhBk7nzce95YmqhkuMejwdshzWAWGGbaHVuco5xE3WcRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ptJBLiN3AASbDPtFupPM7hn5t9iVfEwokDPVi3gEBTcfNPhoME5HYcwue8pbsKA4HAZBFTwBAjLPiBmbA1XPNy",
  "key1": "rBSjn6Qw83vpSHPpebjgTHXSGXbPoziDkRPxAzwkagA1vRBURyKGNSzRjysrTmACySn1W5wyBRNYh1DAtno8184",
  "key2": "47c2J6frhyFoEZ7jn6SWkMGTuWBwU9rnFyacxmnFVrvAZYYkPmtQhwbwdPNFLxnKtrZjdz1HkYHQEHQ7YL7JJ8C9",
  "key3": "67qwcoaiRgES8ZiVAx4CKt2JZDkG43fvDNXpuiHwTU7L2V4hyyQCxrDFmGeKnBxVVZ48K4EgE19soo566uhQFkbZ",
  "key4": "5SMH4W6L2jz1BhhKG2r3s1z1QEgHQjeR2xnJjwJdM3QbjDZiq6Eejgym2KqH5N57QXqz9LgsrgpG2dQzABYBz88z",
  "key5": "4R1ENwQb23aFqkagDgAXSNS5VHTSqT4vCfvf4SVYq15PQUN8UBpEyNiSkanPeF1QFzVSCXVRaPhD379nU516ptP9",
  "key6": "4CsrJQ23mxyCrtXzhkX1uvyrXUsNS3vBGybJToWTuZ1Wmn2pk1iGpXeRbJyfc7cVmPQNUz3iRzq1iY65QTqRHxy7",
  "key7": "4ibwbZkH83Egcf8jBeWuqvznQ8GmVBSmxnj1CSG1nsvmhF4KP7RbLKwLtNR6ydyCEBPHjsHwttaRugBLdnGevLve",
  "key8": "3Beb1AfcKNeuUP1EfYxYfvqHQVx4d5wEEYx5WHRT1AodZdm9PH2V4Li265p9NsyVVnpLH1G1rC6W3VXMuLZ6fxRp",
  "key9": "54Q3YDs6EpLNkFdtohbhvBHPjbtquay7dNeu6R8Pe2MarS4T8P3baD3eLNybm9LM43YSysesYfp44PSjThL4PTqT",
  "key10": "5nhraV39zjjiCrqoUTUGJGhuWWqdqEHfP1fsCZWPsSQ3EpTVZySVm4MRcuV7BVDb3VGboMQvi6vWKErBZNPvojTE",
  "key11": "2cKbDp6HNFCa6pcH7CtLy1nv5kdYM9Rq1HgWSiAuXiryYGXMZJX9PAHZ8j97ngn2Ef5dC5M67vwxKkU41FixUFXz",
  "key12": "4FqZj8Y87r44L6XA3frZF9b86np9uGiS2ZCnHKjsa7DShaF8C2akLsytpReF95ryL3pwtBcmkeEV5kfEoJTY4MST",
  "key13": "3gwwKbEvkXtyQYkZpRBmEhzMcT3EEwmcTdYocUjJDhDTKasyXz2MTfewVvzbe6Go6ZwkuTQ7MPaSoFD3Uv7T8iJb",
  "key14": "2Yie9gr1Q1RxiyVRFFe4ERYdTwa7WjFRVAyC1X5RxJY5V5UxSsjofUNZJ6fDC5yZ1z4BiWPp9JWa6SE9ooK1z2FZ",
  "key15": "3zG5DAwP8kVeuMh75DTLJUKHkHkfREpanRo1QiteD4ZqgLxQGxFKgULZyHHH13bS4ke6dVNywGnZTrvj65Wpg8Gv",
  "key16": "UC6xm73tqnMnVmoERmz6FLLXBizhG5UJpycgCggSuGBWEWXC6VSAvDPGnrdJptjtJPBEoCzJdPhVM8kE1ywdPRG",
  "key17": "4LWpuikyx7YWVN9VhdeR8zPMN9VUkPKnGEEgJeoMpuUKZzhpz2cZjZM3q1UszAGsJLRBAzZVK4SE6U1uxh8PJL3h",
  "key18": "3e634SwWBaQwqyxXYpRPQxATioh5pqyjw9dACpXH9vcT5wctJhbehgYDvkke72Cf844kHpzEayfurdwxfDgNVXKA",
  "key19": "5Bn2SxZin2JHvGLoGBFjSC5pQUUEa2va9Q33CJpvRcS9vroTroL94LbYz1cX19aAdLZrmLuzvdHQ9gtruDegDJQX",
  "key20": "5iqb8TSU3C9oMAsq4C8bN4Cgc6WUa85bGU4sYUyBwNA4ykwjCj99TTRF5UqSggLyijtU72YUSH2TNcsA1VQvh3CX",
  "key21": "3qYG81oidQpLx9WckNGgLG7mKHxHUHbNEePTzZdtGhQtBCL7bFGSTBP61bSt4NZaaZTeusvS489XixknkeWWwaT4",
  "key22": "4YfQiBijZKdGhtDqzdau1deTUXMPssVbiW7yZCJBjo1XnQyjtdSMW69CLhhwP4yyAgNeC4x5BkZPMmahLm4Nnbqp",
  "key23": "4YFJHQNchFuX9V6QmiefEN3QX9ypNVvEPcfD6x4VQ2rHUEwPfge7Fi3phKssTz2JmQwzYM6A9zrTah1oVYT6NqPA",
  "key24": "2TuhjAn9cKZpNzzdocaKUesRb5RoZyKyqZFqWEWXRHLRxENFUMuJ5Br2SsFHzaF2Nz9xmyc89wKpKy6HbTKRuBCw",
  "key25": "5WDz4sKQ1MhSadBmQPBKQCHyCkFcmFkEfWesis7hJtYhPmXyRHekcdpwwygSXDQ39qFn3iUcLqiBBDiiuN74DAj3",
  "key26": "49dVBYJXDFaMQivLnRKrByVR8th5UGRHQnFTpYWAvtYzxouL7bnuMq3sjJ39VMGXvXtr13nQTdFfr9qBd1pXPNv7",
  "key27": "2LptFnHG3hBGyztnLDZ3UQwyNa21uc23vt2vozi8ogX3p4hQFxeiUynYvtsCQMLGzEmTpk1JsTaXo5REstupJSri",
  "key28": "2wWo5Zg7mNjhEQpGTj6sG8WpAvWQ6j6QbL7PUc7oETr5XRTtdF798x57qJsMgdVXvAbX6bHL4AQPPc61c54AcuXz",
  "key29": "3PAhFZPXC7j4KCoVqJtS3zNUQemQ9zk3h8mq7Fmce5a9v8v9Smhgfeu9pG3fBMRcVbv2rdkVZFdavwaYcPseuzjQ",
  "key30": "Ds681xUJT4Hx5CaE6rVSCfxYsdZDjF6EsgHVaq9h3qavNjfFgkj7VkPYtYFwaPn83eok1b5Rmz1hdjcJeitVmnB",
  "key31": "5GFdwPsrgcQvbuKmovMJ2yuSHix9FwnNeN54jbPPbJV74YGxMpKEhjNZx8N1qZp1CavFnkkdqWKpDHDPj6MNTniw",
  "key32": "5t7dWbewWn6rwvDzgXG77FwfCKey7Qq9nTTms6s3osY7jyD5rtbpE952NBKLCYLSUg4mcpuNvMxiqGwbtFrGRyWE",
  "key33": "FnNeLnAQRf5JEeW2zxj557VPQKjxQGe9ab4n4x8ymne71cer4Xyoq1XXQ3mLum3Dfoo4MfBzuAymfaGrAfKnJG7",
  "key34": "3diqRgosC1NM946rcab7EYPVZpSsM86Y5TooL3fWRkt3vqKnZGpaFwZzxrBuNT4JcQRbybDwFLDCeygkUkDj9nAA",
  "key35": "5Ke3VagEKEmJVxyzXfHoj1ZzYU9EvAcWm52Z3hUvRNF4uUsyFRthsv91QDDxGwGtjkA9JnkH73K4gsfSWLh6mHqd",
  "key36": "4JziKsVnMcFLcDVKrUKBXTfc1WSPD1oQeuHnnub66oKTukGjBPLY3PbRaVy7UvmSSRxxSDWJqEH3NyjcVfuF8B1k"
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
