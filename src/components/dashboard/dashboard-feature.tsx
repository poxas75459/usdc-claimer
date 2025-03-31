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
    "5V9fsuuJib9XHfrrwwuW5g57Ytt6svGvDgEtYcFwDLXSpTfcDo35H4jyFK7YcrzCiEyZsS9Uj1XZWxaP2L3prhDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81vXPGcEJ2khJEYu2Hu6dd8wnTbgAonv3sb1q8gBeX7KyM9SdhJUF8tY97XeKJmS2G9AgCQGPBAv5RXEgUqGy2m",
  "key1": "2t7VNxgWnTW12hcj1Jqfd2vq4H2sioQjLsYQStFkXLnQ7xfbNS9PaA5tYzXdGmBA5bzc6bhhBUucnSQ8EBufEuHC",
  "key2": "5869jp3eXzYQYpxr6pk2HpgDuvju13J2JtRRCSsNkieA9NJDLidHrk2tbCKxSSEDoXYzcP9TbB1aZzAdaf2WGmR1",
  "key3": "5jjjcqTWPLabQ6qzx5689CdT6r2ZbMrTKbSTeCutiRAuwJ18ainKDk6VXqi3KY4h5uFMberVgueqap1CAVuykrnD",
  "key4": "4UqPf5dj41VS3wBx8SwKzQvv7iNbcaLX5J1FWSiTA18WWBN6xftPYfyqa7SY6x3wUp45DAqYjxdFX1c5HtRpa5Rt",
  "key5": "HJjfALmL7cZw6r2oB4D3QnVoqi7zxQpAgRgmVGFEGtpw2bXjtcf2cxCazgabHe6YmhjUf8HX2gtr5s3ZzgBarLL",
  "key6": "51Zmt87ZydPPR8aEvVd8QXmEFxo2wteAYnbSj1CPzQm5ySV2E7azB2X6AKkY75JxC9EGPugLhbaCNWgQVVBWXvxu",
  "key7": "3HxYrxDxEq6iNTfrvbVZsUmiVRnENFbzfoshEok4hwG4rxNo6kbhR5EDsGU4WkP5jZsc3LmWphfKAgB1Zw1vEdFr",
  "key8": "5GVTr71eWfzbwoiFETzVUCttNgLJskFV27w4wBKKg2gDyi5jKPPsck8V2mJfR1vS9doLJuzXaKVydUY4EkK9B7S2",
  "key9": "3UGVmWJCwQ78BF8Aby8tVYCbtJPrJtrr7usR6vo7929naaMSyNkhXu5GHnzVBSeaKNdMpuStVYghyY689RBs1uQ1",
  "key10": "7CM3Aqb2bNdzxs8p2UqcMAnp19ACpBEjZfLWobiHRKoN6UzMjHQsc2c1rsiDgSWn6sny7T3UsZaYfkjbmoxaM5j",
  "key11": "5Whrt8EeyPMAA3Am9AiB9FCn96AvqVJL3Zk11C8XBEhxkUHSh7h1rg5rKK2aYxZvZD2Q9m6WuN5Xrjx8kodJ8zYB",
  "key12": "2dPNssoKZXc3knAsnZfqYJ7PUSu39N9fs2W2Gq5ERf25rn9gtA67jqhhXLW8X6otBCZ4g3Lvju8WrvLeQJe9sSu1",
  "key13": "3sLQD5whrSeJCNLzQsWXBCxAYXUqES3Q5myjtaGGpDejNXtqytYsd3pKeSgnmrxrPMpqt2sPcZLrod9aAJ9sz58m",
  "key14": "5rctS7TmDZHK9roNwiu6R5d8jmig9zoqCJFsTsTMk7Nm45yEFkTBbcXTQc1e8Kgb8CQv6FVzz2UhoYz87DkM9gP2",
  "key15": "3qCHCh5iVzegMuUxX4kiPbyGDMorGZRHSZBFfN4qE6vjJ9wuSwTwepPgsBHboDDy326VhtkjNdPCX2PKpAxMQmb5",
  "key16": "4CnfhRQsSHdzVE69Wgf9G2upnpcKYJPGK3qbHp3cX9DR9HhJbWDyGTaftFcbBGcJRPUnAAp52KqG3wLQA9QytgGg",
  "key17": "6613BZWKyK3tVQdd3isWeVmh7LmqhwSMtXe4eeJTwb2CqVTWMHEvpDPATVSggGdVLhNKqeEciXi9W4E4ckVtiXpu",
  "key18": "4fzH3eMCK4JvGxgpHiX8StJHWW4AouJPyJS3chfmkHfC65oDZauVNoMjbjfhibP7g7rfeaMH9S6PNi9ZFYSnWznt",
  "key19": "4jynJWu8n7qFv8aMMsQSBqaxCXGoi4wbWA1HHbWxR57v4pYJwfqj8cdEHnQPxEPith189eUynvFEoDuu2wmzAAts",
  "key20": "2DXNQ6KWRbDntqu3YeJzJrJ7nJNXi1WXCZRXT5cDnFsHxQR45PURzo18jRWS5Eg1sMsXJRnAEFzUjYqgXdi5qjop",
  "key21": "ZYzeJxJRWK4NnpRKY2xNfdEr6GGLBEprxWfvg5mpJ7zhgu8tBwfZksZ9tVUqR1LobAU2ySH1ZsVjAPjAS68VpYG",
  "key22": "5PgddgnMkq21gATuRcHEPFMKSe6yiPQL9b9pC9YrBHjN3AA7CAHqMCVDdfSDm5LbKJ87st3osUkfKVkmMnPRyAV8",
  "key23": "4c7CVAYi1PNBGQegwxrNtPoGU8i18VZF86wJkVXtbGd4WN51Gh66J4c49eKmJn5EaYnDhj6qEbf4KMNSNd3Uuhgf",
  "key24": "5iV3jmx9rgzBBhFPDZqVdyh2BYqBm392R8noWQrwUqFdPEMernGzJQsQ9JrSx6Vy8NsmNDwrNAhahN3V7mg2uLA5",
  "key25": "4CJXDvbZA8BZqQYfbHGoptepJEHyLtu3cyPtipefyvxuD82C1uSu5YcqRCeHE5qwS7b8GTN3HKagi4mudCkKusAv",
  "key26": "2sboqFBe6GvQ8SmFUvWXZx8JJENEdntyXaG3BCxrGast4cMko8eeqqRDdpxZNP8ds91d4dvCZcFvZasm4Y9d8L6e",
  "key27": "ApXKQwUeUavL1VrN6V2Yakc1KDVk2oxzSx2RnBa9DzJBf9DNr14ZVDH23778L2BZ8W535rPYNouDQNgANYrDQqi",
  "key28": "5u6ySiZyfhnWmZL6DrB7rhqMoP8PWcNqG5HZFHYbPucJ8vp88oo8mHiiRctJYPafHXy9vcwpPiZVUBpFP6qCPa1g",
  "key29": "3wxuxEHEHkS7EvBfp2Ca6rEEneur49JprDSLpbc5hsfuqEAjXKr4355AApUwLDsDXZfnRsnJbs4yMXmXe3mVdFu8",
  "key30": "4pLY3TCP567JVfcw1dyJdHC6usNZnXKaqwv3QpEqaHi8nL41pc3tKT8m8ZLvLtJ35kmQdxX6wkbxdnHX5Y3uyEGB",
  "key31": "osfJyEr97zFY6g7Xf224k1drha2eGdHKiEnSke2pdQEQ3YKVJyJKfRK8wngMxhprEgzoB7JJLpwqfxmso5BJGrM",
  "key32": "3PZzanwppeHgFtxJkZngyNo8T6XF6GxinB6pVoiUKnFJ3QvMCzSvyuhUj8gUnKhsGaiMwDLfDioDNsJW6LmSmpTM",
  "key33": "53uoWNP4ASoa8LKJQz6jNNVZWSeGETsAcrMLt6equsRNqrxoCyy7AL7BreJ1DRvAWqAT9MpbD92RHhYxJs9fu45N",
  "key34": "4GyzKsqaodUNmG8MKpLz2942evcwsXDtFth6SC32666ovNWZcWpwsJ6qCVEDxjbTXumv83qwJ8APow9eiszFAscL",
  "key35": "5QyUmRRpuYbAAAKP6VgzhLKbgBHPHrKg37ZtJDwFATaSRRhyhbhPHxpbpaiYRNeSnk7h6MsifZREKBHtyqEQbAix",
  "key36": "5zWYyMPAyYqnmVX35RrECY9EZoAbw113fNaCXE7d5TMLYsbJyxBa2gsKCoWdAFBTdEbVyyu4neW8VJcRByTxua3S",
  "key37": "4isBkEVw4vNaZybyxpSDAtEtPewCzZV9Lp3GsdTqFVdyu5HUx7qjwWKMbAq5cnS3B5B4jKkQWsmvEnXYLCBrDZ7M",
  "key38": "55diFL36JX4q7mu6d7kDswntiwUnNj5KUf6UJMxetWsiG7bDNePZue1JkkskQJ6kB6BtcbPMu7TKUWit5VH8cE7G",
  "key39": "66JRr5JY11yw4kkmW9NVV3GKf2YvwBANNoneKPpXGEtqNtcGZRZu9omvawzFqhnJgn2f3GVY6SqmUFrGovDDLzCC",
  "key40": "4Len57qXgioPon5EeRVpGVvYFoxsWJSQx5ERxDnMBb4WMsyZxmkdTZHTmzcehT8zLbzgnrD18YXbAnCG8QE1t5Nk"
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
