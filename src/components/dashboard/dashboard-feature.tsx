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
    "2xuyS5b9dU79Q9ddj4G2MdASf3jXQCwkch9pXkf6T9PoWN1vaiiVnpggenUxjRePwKE4BbbfU4HHNMqwXzUyvW6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XKHVp713em7heE9FFUhV6WkAzHbkk1gzo7fM4UfrMjMMAdJWptQVfx4SqfCKfi2gNobMcRZiATdUGVQ7hNdqz3F",
  "key1": "5rnyhBHHJvFATBxSfMHw1MmoQ4ga3sDyqweBApzQqPnfpDRNUXW6AAEQwwRdRsHx564USuYtpkmKwCbZH3KbdE6W",
  "key2": "4igmF1epHTnzF2JgvRTX9UUfgNiYtHAW65gABStraJ4NouvN74qnzTLiKrRXnKphGLEEAxnrtaduDXvEg4g4dvKh",
  "key3": "2sZQc44fDnq9BZ7BS2Z1QQh11nZ4KMBb64a2MkXmZq1pmQUuzTLUptFoTqGNtfqNZwb2g5nJWGp5iQn5ep2bqw3W",
  "key4": "4oDVeuChNMY46dZwCVPK6BtWb2Ev9WahKivX4UcggRqjzeBxCaeT4Br1cfRdR9MBbUvLds67sB9xAQ4QMGW9hTdu",
  "key5": "2jyEQbtyxR7iNtA3d7FgV9AKamaJSEWNsAECTWiJFTWbDpXFsBMdFvX2tvAYLgJ1DCEyghwZaRfSRd4dkvZ3ESJi",
  "key6": "2iuhQLFwoC3wuxA9AK7atKXYRVBW4JmaotfUyBdjdu9zSE7CzMSDuo2mr1j3j96s8mMMzjjXRc2vsEW9Sza8ZWsH",
  "key7": "q4BF6kpXFRhJubPhgzdubH44j4YnH8UaRipd4cCkkNu4f7HDTYhLty3xWE8E82XzAG6Y5LnLDFqjeWpfkQbczRx",
  "key8": "3Xm9LWMTa1xuosTmeiahahwzux7dZNZqG9M8K7Bj1zkGSM6fiTfc44JAdKpCR5qgThezUncmER9F4eE5wcJr5SVH",
  "key9": "iCyv2dtP6sCxZ4aWmFoAha1ZXjyR69e1uJFCEK38g5kPXSwo2PnfE9ZuDRz96bVHBWucE9bFb2LRXUhicid5B9b",
  "key10": "5PhgqDYdW6eETjV5Vq1hA6f6FZXJExGQLcFVV7Y4kfk6VWAWZuYcE31VK1sKmkWPxoEFWxVPTWsYeAtnZbhojSnF",
  "key11": "3vYtV3KDco15Nzyx5vSmu8eWQxQsrFbBFcJgz7T8gqc5jngh13fyX5zQUjidQsyx1dKSNFG2zeTm3ivkfjuRsF7W",
  "key12": "4EKnbrjoaDMF5yFpYbAZ7PfuQKFJ1PZSU8V2ivL6nWHoh4v5a2KWNHeckjnue4f39CUvy2irfouTL1Nb442DG1EC",
  "key13": "5bwsJptwUdEKviadp6ev4SqYiSTL9nLKjoVN3bkrd3jpLWfECzq2vCzMmg6hdnnnzrHcckGoCxnFk6PCRYLv5dBx",
  "key14": "4Jrk5aa7y1tt4JjLGxgyLKj7wTDTSb9yej1yXz2RYpGqJhCPJ2f8aXV5hR6ufDdp1nXwWgAKXDw4Swp7vzEj1qRu",
  "key15": "V8sfFBk2UPVqyfWuiRSj9zbSNSScQjEp1CTNKCJ8qq9U1JQdmEXtqUSkM8Aj7wxEjEDcQdGKcWFLvgx7mtS6xJP",
  "key16": "oF4bbnpmXNoUD1pfQgj1AM48KL2rxcrSo4KNmHsn5kWieWU5ivQ3MC3cQk7kLB1uLwvqAaHc3SwdNt7nYyszoPe",
  "key17": "MM6UEAk77vnwLjn7skHBGsQ78CfGLLzgNEFZXLc9UN1kASWWSBoazxKgjTUJMzRSy729ZQrCyDsshBYz8kVAHuw",
  "key18": "4kJ1oQcsPiV3VvLZPTgmkkigr7xxnpZoKgD3gHnuzzeEXctU9bYkqdRugQkVFUH55Fc7ToQBqFYLtZS1d3wrpaMU",
  "key19": "4NbWcWN7YTZh56pxnzp4pmnZSzAKZYAvW2gGtfu4iruZPnCbTTwW4YMRGUCyzeY17a9EtCgbfvk529xK4hvKTT7M",
  "key20": "5KZdRd7gtw9VrfWxAkNv6hgTW1nAwndzHyWKvAPmFUPr5g2W8WwWrD6YrELT255Kdejhk6PrUBPQcYzBsuEJbsr8",
  "key21": "2WVt6UbAKQvntUuY2exYYBLqCQMWJD9ywCeNBuZif2GcTT7e1tUhyogvNexmhz4LsW4RuUzvnnuowYLrNon9eAF6",
  "key22": "2k1ChJXyaffL7U5jTXhv3p6c7bG7sk8dCDqfenQ5Rdci9VMwNbNFuCWyxpViZA3Nq8hBa7R2pg1UdDyW6XJYSMft",
  "key23": "RUPnwviLg4rQ2BK5cC1rp2S1d5NbdR8eJMTxgxqTb2paYp4ND6c43t4gqctMEqtb97pwFoFwSVRURPgJx2xjAfB",
  "key24": "21GfViHeRjTfDvB7zptPGxhuYffS46eKY85tt6RJs4RjgS4Q1Jnwd3ib1yihcSRtBxAXhaFaeLp1NW59Jp31depj",
  "key25": "28tyzt46z7NHZwoqm2B5UtaMLLRjBe3sHULxGy2zYicC6tuW5qG8mdAusvZrWJphE3kv2pgM3QSntMuPD7Z4pgYU",
  "key26": "3TvcdvXBYLn1QxtutmJRnTcmVf1upwMGiL4f2BJtW9wRNUD7zJ3iEDS6qVdV7sqkV4h4PNLdUTb3gEqqdct38e5Z",
  "key27": "3rQPSvETBErc4eHvn26pNyURT7bxdgpxpmPeqmGenZswvTRUPLM2cqbaJ2qxUXDxN1YiEtLbyXYVBvtLFPKpoQEp",
  "key28": "5MsqQDPadMRdEdrrUPWWiqdHJTRvBk3hViAkCN2PDN1ryBm1BQnk2dypM53auzZvVN27nWS3SFB8zvy4UA94dHDU",
  "key29": "8cZCUSZxsWjJ8LHzviQaXrS465WAb9b9Yn2kJpXgPjN8D5d9qeLY8sFJqQFM21z2GrR46RXUgdKci8W7zLg8QG8",
  "key30": "4sFKhduF8nPkSzbjoA5U47jPkPGgybH2y1KSDBRmJJxaQ1sDaRFXUzfVkMkvQpqVAdrAYXfs2Wesa58sK3auqbGe",
  "key31": "279WUAoaJTHkwUxKUJVEYjA9VKkswMZP5oRdodYsK8KcPa5atxv8jJt7RVyrVN1qXWwtJi8HEL2kzLewGu5YQgRg",
  "key32": "jYbRXnh4HVStejcF7myq7ZiVdRnHvc9aQPiET5kPLjuZLh5dZW2inf8rkgZtMr29NbF815sb4pPHVF2uTNEReq2",
  "key33": "4BUqEFYoyQv79yWhsrMjBcigknmUAjj73kAQrgWQFE8bwEF1fd2NG1KJm2azCfrXwYeVN8CevefYggXHN22Xbi7Y",
  "key34": "5jLv1fy2QDhcpo2pmF2k7eHzZjQBoUbdan1h7ZSebCo2N7LAADzte9KwrBv7ad65AWdpkAqLQK9QdGMo94rVsMF4",
  "key35": "4vMPmSUkpbhHwrUrptS2kv4dw77HU2trpAzMuSyWP2zQ9ysD9GsW7ErqJ7NDBixdCDxBpFzb2ifij33jCv1Ek8fe",
  "key36": "3DhJD8fKWq6jcQKWLNq9Dt7BBYeKcHz6SouTfh7RjJq3CKgcZ3H1tStGRcwgPoPZA6Ua5yVSJjKEGKU1TKLmLZ9n",
  "key37": "5UYuaV2DeSEvKdBdDbg3q9LyY9R3NLtzCNtVcurNCuKeonKpoy3Gv2Rvvr72qoxae9yARdLZK9YbsVtTCWYdDsAk",
  "key38": "3w1rvyQ1Cccm6mcRCKz9zFZGm2PCBL1UuWr8bKCeL8CaqyJwEyJavVTQBVmLt8W29r8bPDar7xhddS3fotu3uxNp",
  "key39": "4Ny6bG197GaCAwUyYcwzMXBT9HSiRx3BoL5MbZwXsUdpTGiqcgDVS71zs8cbPxL7r4qu7axkUSRXR2Rz51JHGrfM",
  "key40": "4tbsUa2DjvyufGGweCseiJvm3DADXeK1n4hdpDBfBgkG7vCcF4Z3xZEEL66v5cjzQRNVC8SVqTrxaAPi7gfoLidh",
  "key41": "x3ptke8CV6NPScXCM13NxAV3s2jsNQsKRo85BCPvjxW7MHygjb1YaVjafkWiyy3ggtqczgx2LxxhRM1hEA4wFvK",
  "key42": "5VkS63hM1DhvwcDJU964g69MXGSaN8GNhxwCjPcZCradX9QUb2ZQf3Zk963Sm9x2j7NfKCnRyGZdqaM21nT9wMZ2",
  "key43": "2EhNDhXZBeg5g3NwAeS2pQEbqy62Y8VEN1w5VP7h5XbKgt6VDxt7rfnc4KBrH4t5wXsfhnjJu7ZLZQMrNFSHekTw",
  "key44": "5tpT7uRkqimidfS5rKBoBF2653ymBepagN4siNLfnKEj3TdLY1ysaVzxv6f8oYvyHP96Yr1dggHUPAEYpmBqg8JZ"
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
