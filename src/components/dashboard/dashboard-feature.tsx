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
    "yemVqJso2ATLvSVK5CJL5v2vFE4Kr2t2aKvgnvs7GPsDmAHNpA5Lmv5YaWR5BNpdYXefpyWQ4wXW72o2jjnNHmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XdEJRNz6wmsYhaz6PtKcYbJEtt2iFU6EgwLL1iNvCn5gVFnvbLj8RtSenJgqcDfuzyHZWwcxKtjFdJpMFaVJs5D",
  "key1": "vLptMpKaQmVELJ3ugpQRUFGDXB9JdVmXFNd2GxHZZs9wgGsPg3knjhmcgSWQCDYBFyjMBBuR9GGx7ZaLibiJYi6",
  "key2": "3wk5eXwxLvWbnHcH497a92JB7YLyupWSAkhzbVsKNDPxLREFjXRPu5DJaWLJrkj6JFzLLQzNfsSfTGxWGrNMoJC3",
  "key3": "Kkh7Eh76qmzCw359n2rsQfB4xj4XzJ4kw7BuhdoRNKQ1rDnCeYRdYVifzE3ugeAAubGsGBSceYgHhhFFJEKYLpC",
  "key4": "3rh122RLarwtqTDDvK6jK8xi3p6b2uQy2TqQDeFZHHM3hX8BNKzhk3nvY7MheSW19Db8X69x1kqyncs3QAf58NnW",
  "key5": "5t4rDQAaC8hjev39eM9Sg99raZGEEA3AfSdjPhMwGbd3h7cGLFL3N9PD1tJPuefFr6nGGZyKVUVW1ecxQdPUcQhz",
  "key6": "3gYpxuZTqijintYN9ow4mYLxRWPSpNeqGoGxoRVLk7xitYnxZTo6xr5rLka6HArYjWJa5A5xdtbeHFtqSkhsvhJa",
  "key7": "5zH3zsQWvoAMtb7XR1FnwFamBqkJGZ43otS7KpYnecfmz4KeXQSfLDp9ipKVcVdaViZqzJNsvng5NZWMra1jGPP5",
  "key8": "28WNKZoyVisZMbtxbDkpZsS6YCQVsQ56sumfXZ6J8rTzLL3m8JMFbJLXDpHv2kvWyr1KYLzvsbPA1reQNWw3Cxt8",
  "key9": "4ZmcLvioJUjL4fmLJcuhYwmim2KxvMR1fn2Wtdgm7b4f4hiuVeU2QtBDemreZ8r2JW1KdgMATQ3npaWAE1LUBQ2e",
  "key10": "55THL14x5k6F7CWYpuTPDhDigTqZZ9WxGTLfqu8PpPt47wZkWZkNRtNJPVcthMFWoaATLSZmidwWakPCwrvnsxLC",
  "key11": "2PL1wrgLxPi9eDaLwW9zncRPTSmRwiFBJoDLCHqYTEpZwJmEUfzYeFRxbRqEajrSHGaW3WkmWxFmeJF1sBccP6g5",
  "key12": "4sZMmmHXUUjTFp1MyHEMtT7hRsZUfVFoNd1dCKwrmgDezpCsxA482zqsnnDw1bePxjz6rHNayUiDazV99h6HKw66",
  "key13": "4o35DV6SYsFW2hL6ofjrSop7851tSuNDfRoFeBMa2tEhhoUM7QRrh9LpyvdLxh17wbpS7SsZfmocPvWAK54WSLu2",
  "key14": "2QBsQrtGwDAVvuQfA48ZGvoDNYPADgKBYkkCNh4ae9G528xA1ufNiDMWtgCPkTiVuQAZq9JWP1ji5Uj2mVznbVPq",
  "key15": "4Mq5sbV3RK5G9uaS1F3w3Udct7yqbRtJkBCFy2wtv9Eg9dedeUCFf6ttv8Y3hjFvRQBQCHP3KS8VQaeDqxoCNnGG",
  "key16": "2QvzUkwoycQnTXSRJWjdpCdZfWarWopv5mD3r4pAJK9oPkXW7BTvoDpxAsWGyKthemzwaSBLb5yFMMkoiwm2wvxn",
  "key17": "2B1utJogf59UjWeZrPUTuneYSCRgvjo9NJ8rsL9XSpfy1WUpaaHuWYh9WuAnoLzuBde2MCFv9twb3zt3fttyM56v",
  "key18": "5QUaNbQUq4j6mqJVcctzfv9X8qgnW26H7tQrN6Fr8MfvTuUNK9DzbAxQssCyWZseoNBPco7XQTrHtMUpzP5BdKow",
  "key19": "4cas5Jj2R36qZ4SjVf64h5RExymC7n3du4KF81YQqj4ZSqYtB3DnnxhzQMw8oyUDXLtcwhMwghB17BTkK9B5HnRQ",
  "key20": "3tUth96FcBvbE7TZCjN6W6XdNvtBB5991WUrhE5XmwYRMsko47zgUE7J4uS7zc6rSd7BYHcA4z1MD3GPEJYtNz9k",
  "key21": "2uZvLgLZUuisPGfx3RcR4WXzK1bBrf6GSHNNzWJ2o89re3vx58xsMSQyUmhAE8CzN26ZAVUa6R7apcma2jgtASij",
  "key22": "5L1Y9Tdvp2k6emQegjtgnQPJaYK4tazqmuc8tBgzi6NWMebyoeX4DCMyXcYJSainBC6Yv9zeEkHbbE3CiSiBYooV",
  "key23": "5Prxmpb1EmuyxkYexHgcDXPPFQA3MiQUTn4HckYrzcNr6rNqGyN5dVCnmZCdbKU4yiXNQMA86rmiRBjFZvrsJpuc",
  "key24": "3WQrthcNF5mTstQ64p9Pv4HJoFiBRsMMCJyq4hBveC3tBCZNVEx6sGe78NUFDXkyVeTQ5y64AVaSdRCdwe7XXNaL",
  "key25": "51iLpqLD2LecYYrM1DLfut6mBUhg11zShRd6KkzCXG9paq5YixF7c3y4q3BqEK2bFfMnUgqrLreYEty51k3MKvFX"
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
