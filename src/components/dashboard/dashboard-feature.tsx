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
    "2r4aHKqVTJLy6Jz5i7Hu4uk9cfEPv7otpTR44UovDr2gYdbhCbwF5Ro8cP5H5Hs89sGS3yJWajWWngPRifYsNkYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMQWNcZshYCHoY8JAtPYAQJwQoN3vc3jXaGUTjsfpRwtfsiMRCvPRDG98apzct9H1bD5Ljd9UaqpwFePR14qojs",
  "key1": "3drGJRirEHi8M51YmyvytFDNVJGWbn26A8GjWp4jGX99FxEm5q9nNUthCdhU7YotRyKPXZZ983UPaB3ccbzGFLNZ",
  "key2": "5qz9UGLwLZUpgFQLQdZoUTgcTBF8nVGnWwRbo6pWJFCLTGzoEzGw45FWAHomzgs6VCqp4PYCBpanUEsLpqhT9UWE",
  "key3": "5avGH6EqkcmektPsZupGGYQN2kna1AFFXKfLSY9LuubKiadGaNnrBwurB31JsMyHP4wfHBZVNUin6qgcvm5SLpHs",
  "key4": "25ChBpwzx14yotUwJX8zxRxpXsLAHKFx2Z9G8VwuuDC4Po4mptGRMdECFqtGDPS6buJNsyMGxXmLvgiF9Mi2ZTm5",
  "key5": "mzcpQK97rp9pUKeqpRz2Htj2V9R6fJ49tFy8uf4bJyDEMmoNNLo4TQhfEjaT91pFd5p2q4pY944Rm8AG3aYfu3o",
  "key6": "2Lq7BBn591idBDzL6nfGC91WpDCwH1Td8mizfUwxoneqFVjQwjGvbq7EhVYKULaoM6wNnoP1t9SAj9NygFzXqMLK",
  "key7": "dFC9mNvbnAfe1hoiWxXRGkBWZRvXMft3JstAHKUsoRRT4NwPPb5TiUA1XcxZnGpiwe2JGj6k3dwKdyiaqKU4o8e",
  "key8": "Xe4qgW8ubNJ6tCx4fnxbWKB48CortUuWijMLW6d3VBWcpfW3b3m7Pt3cX1wZWd4RmRAXJferfNWyj8C4gXLzyZi",
  "key9": "L8jcMJdxopd2NpEStrprW4YDdV3CeLkZBmyB5a58xVkp9Y5VwEFuz1vWs536qpQG6LeZi2513atFou46Yey5HpW",
  "key10": "2ayLUk4hmaZUktDAt2tbQxv4dwbw79cBPwEgASyXVFBBQBde5fzAiZ4aCEvBa5Y9EJkEVbwoZTkE1zGJ12NuX1uZ",
  "key11": "4qtCBHd1kRDPLt9kmga2cDL4xjPdoNdgqqBJ1gYUVL2C2TYi21jfScLjo8fUn5o1Fn28LiGEyoBKt57iiH3hz6Lv",
  "key12": "28p1ZA7Cb7jNKdfnwwUCiiCMNqw2y16LpVKMWdjwrtuyt5QtmEFWRigViBTrLAeLhvMo6o4L2xxYLA3mK2rV9tCN",
  "key13": "5GQWzN3vu4y4fmtYWPH2Y8m4fURwxoNupsWpUrqzgDdhoX74X3Nsa9RTMZhf3cFQ7RQaKJoMXryUnuhNggaVzMze",
  "key14": "UMZ9fFLY95qiosVHG9XK4wd79f2Tr2ZTZhPRLVpV1HUmMjJv4YCGVMjzETA7NNK7p7pwGP6AZKtcCHg8koEkZHn",
  "key15": "crCBcfYAUdapvpXXma7WjXiZZ3CvQhrqQaasDLmXLfVfzAnBEY8g6uCJHe4iDr6oqDLe8bW9sFkVFCroFP51tc2",
  "key16": "37tXScBEGEGwq6mc5qMRr9Dyyo9sGFMsHjZQGsWWTv355VBMBZCrAymBYUPQegYikHG7mwchKGUfQqFPEGc6eKBg",
  "key17": "46zB3vthe2ZGHh96RNqAkNTW9PQz8omhi2kD6Rr9v9QBSdXQaqZGQjUfEdrxV4T8PUZo2rSCTLhBpVsTMLReudWL",
  "key18": "48r3wgbJHxVJtVz8cemqJXc3i9YMBRyzmgCL4Ycsz4VQh9j7ViDYmTRPeLq3iNymjRgCvZRhhs7ZqaiQ3R8H48Cp",
  "key19": "5cNGGwN3eDSZS7qj5L9MFpQFcWeKpfjz8N48RS5N2RN6xAsaMjuVn6a5kbjwJhKXiDx3fgR5HU5913U6jb56xmZu",
  "key20": "3n4jk3zfy8gQZHzSNxPVAyBSCq5KKgBPnRzmigFyDGdGqKX1iqmheoH5jE826EJt4835T9cMGjnHdYC9ZW8iEk2G",
  "key21": "2f68ybAU9psHSJaHionnCmfP68T6NWH9FHRdVyAMXwQ94ME8XUBvpQbrA7xbqAFA1b7GVPfQ8DFLmJ1ZfdRptUeE",
  "key22": "62pBEdgyRfPBuRuLHwm2UzMQXwBwwtb2V4GGqjv5DASMDj4tLr3DUdXjGbsjaaknvYdkt2tiafm3bwuiwg15tH8T",
  "key23": "5MxkC7PLH7yQfTuoraCo1cuonZL1kNRHyYtceEeqZzrYv2D6CgpXg11DjLNq46v9SLvTbRWqXCr9zfFtvw8e9Foe",
  "key24": "6pLqXwTuWjxG84RBQmcWXTpgERNMc3r3v8w3DrrMsSFbT11qiSAz4DQWhx89Bi51dg6yVJCZzFJqzsxTGdUHsyM",
  "key25": "62WXt5sraVTkbQAnCZesC7cREaCfrJuMqtvm9pihm6GpcapcLSzTomiyth2JcazGespGtNQgiygeFZ6G2zkzP4Nh",
  "key26": "2B4r6GZDxMcfQRZEo8i4k9xuJxfkxmrPNmKcA3nC5ZtXcwYAfo3ZHwEYExNfCyKMdRHNmB1rXJr8nrunwkvrTZ71",
  "key27": "iVtoT9kUuzwAnv2mQHqNYY14EW9QHGZGJ4vGBsuWiKAFfFCE9Gm7cTvp9rfmYWmzfrYHRYgSagJumg6txgWnZbq",
  "key28": "2FnLGgnfJru1E1Nbm32jFP4YKqU81XtSXwmpxVsshuWKGiLwS4m35q1x96JscJBPUsp8HmPt97KCr5JGvf5Yqse2",
  "key29": "2de6XGk2encAJoexb5geS2Baf3ov3uAVwLyt3iMQXJTHawqFnM6bczeh5pRaZamWj5yuopv732YTUoDph93CxxmQ",
  "key30": "3hfjCgNwx4jupjWFpp89kyg2UA8izfFRRutVqmM2VrC9ajvhb2gqT1r6xntYjLRnzGqfsPs5z3WQ9tFJ9VVgChxE",
  "key31": "5ZDmJ9eSxXXKfw8Y9xZmTKtYSJQ9YkLZtSgBqbeA3v3yz2cJzWe1AnpAhbw3nav3J4AawCYiWPyPpEpBDn7orGPD",
  "key32": "3dmBHY64tj7xevUEBrWPj9bSvCjXmbFZd2QDZaYQwNLNnhfFhaKEmyespE1ohj2Kc29GKXRLwP1zeyxjtmvQcVXk",
  "key33": "2xKntHLpkbmTHVmt254wc1W6zbH1SWMbFgYidAPCgmM8gdyKN7qBvsMTYQ6pmbmvKU2EXm3bJ2r24Q9CPvjdoM47",
  "key34": "2YnPLGbumbpTJVtM7uLTx7dq8EyjQ3hLhGfkv3ak7c6U4yBcosgtndZsnWPJrPz2WpgyK3DzKBUBhxS6gSq4muSN",
  "key35": "ZvG2V4Ytu7ihsEgoYte5hWSe61xEpkwYkTjQg5c497Scv9rUDMXgJQQSLAi4oPVboyDjqnX5MWw2fjZTwQBxEgj",
  "key36": "33e7FC6G6mhkfmsPwijg44gNk6m5FB1vyBizkzvRUSPuaBPDZ7UkjiQHr7yJBpN2J6tFxEdqJktrCCBbd6P5GpXQ",
  "key37": "5yzQuTBNn5VqzH7YQoKS7UPw5auTq1EzCQH3JfwRcJoZgL5E5DM6UPHB4EXhKvNDqugDYVe3j9EuM2ye5H4HKDAq",
  "key38": "2hiVx4oHbqHm1yecG5LkFmuGtLhyxQXZUu9B1bwNTN91BE72iERfCPPP5JeUVz16itHNY2D4JMpY5sdLFrBQK9BJ",
  "key39": "5H1ZK4htppxpLutoAqaFetHA1zpKjy15yi1Sp6ct98efFkLpRQoVaaKvdHFwqP2Bf1R4hHYgF4xCxHYeGA9pw6ws",
  "key40": "2uvvWDDTooYYfV6YMkxDkv1fFLKLSZFcJwZK5oGtd4yLbb37VS85yLEgyK8iVjq7nk3JvdsbPHwEiSYy9ENrpofq",
  "key41": "56AvzEB9m94Wgnbxz5uJSnWp7yUNdSjZAmeTnB14AtgFcf5itnJcLCCAWFAqjUea6iY53f43N5fro59rGtnuxCzZ",
  "key42": "2WfnTP86afzkaDEoFdqNjZ31kyN8N37zAtgCPHqw2dteQt8EMmYf9UmQS47QiR4eWKapMAYvoEqERAZHmgbRZoZ4",
  "key43": "5e9YE1RF1pScorAxejCPajiN7Z9uoPUDmhUvbdtYkUD1JhNvggznq1raKaRCEAMUxtmLD8cnALBFC3RyHW4Mj9Ng",
  "key44": "3SUBgqb5rzjdUdZgJnfKsF6nQmBy88vBFZJuuGxb6nEoLsy7Vjzjier9xUU463z1JVSMxZBevvSQALWTDqwDYDMr",
  "key45": "42vz6FSaxsrmZpWqjmTorpcz5yUf38fckAhAMvkRecAkPq9xS79o5yWsFzCcDobHeFNaGERg8YTXYtS9VhSSYnFy",
  "key46": "PcfxvbybTNBNc1Di4k31tbGFQKmYRRNaVTYYgXfHvBBPTsJ8aXdRUie7qkmgeH7MdDHyX4hXzaMpArWRYPhGzS9",
  "key47": "57Z5RJtcRceFEGQ41Zp4JgFajwfsVWWnPtDuce4DX9juYQmbaouqaf6h7g3o5ACeFHihFgpK5NKWXYReS4p72xjb",
  "key48": "5YKjvR6165DbvvPCGZmXGUW9HsCR88JdVpzXmuJ4gJT13guDeSM6iTq1w6Z2C1jYQhQLNNkTJVfbbdYWxciheSbj",
  "key49": "3myXHmkY7jPKPRot2NGnntzo8N9yrPpYpeLEBC1CkxZ3TfjM7JDEfzxoQqN6SBU9SZecYyJaNA46HYnSd1sNiix7"
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
