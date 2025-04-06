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
    "2pcRgnPoxiTgAcoaGc6bT44LkzBsQdUfKGuLmvX7UDA5wBKdHUN2nCUxjkRih9gdktiHLzAj2cr145GnHEwdBTsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59E1Er3znRmMuQnGXi589XbEvmm3J8caaV7QmEAompqQNjLfKm2qDe9k9XmZXDX7EMBYS9BxriNr14xNxpER6ktx",
  "key1": "3EyBQiXsuTp9eYH2kNca6sw6UwAwvfGtc67Jf8mnQE9ANytfkJn9uaZwWQtYUEkiSwXWnVzYBxUne5bFiXdUin5W",
  "key2": "5U3vSF4dtyKu7NsKTWHzScroBf4icjhj8X5Wx5iY43TWKE2UX8hqebk6RyzRrJAwKcu22NxsxZdQNrvbAanc2CSi",
  "key3": "5bt5yX2rf5C7YmEYdFAkW1Q1urmQjYFbH3FwCVfSRy5ahJZMzVWjCVSc36WxzzjfRgB5zqLyoKAXHJoKDN6gUwTt",
  "key4": "3PXj48JwvjvWRvCJhDaYV8Wz9b9A6SHLg5zqY2R1cZp4aqdjZZCYWKHZn8nZHjeqfZgiPA8ei8co4SioPXetettm",
  "key5": "5cLcCzYGoLLRVd9ZZt69J5GxNwyTJsuWBiXrK1MjxHxqkarrCyYcmPnkxhWU9VAS3LCZQHMRWk1h2k1frG4SzNgC",
  "key6": "2TyHtUZHcA9Jm6LZtJTJ9c5xNqoTaV55xaAHz9AFz93HMkxDQXbdMakAfXHLydXMJxAVeCWQKqPpYsCzXXb9Fq84",
  "key7": "4mvnTqs7EZMDMnZUdUMN8oij6tWWGwrDBakTCfhZ7ftGB7Tac8BeaE7up7fJ1kJZeC4Hm3rnSCEwSVX9QvMD3Cnz",
  "key8": "23KABMfzg6DA1bocwvNM5rumma4cm2yW7dyJRbqifBjQfNVVRa9ZisC3qm8cJSeEkCKDXLaeKq1sKY2WLCQozGDx",
  "key9": "3y1bjj32pan2cQu8p5wZLxXRnZUTEGG4eJsFKJseYF6TbaMpd1kpMa1Yb3zgJkUrpbmFHPu82zTNNGth1H8adxCt",
  "key10": "34xLNsT64jQ3H5gtPHjeE5Pqi94pbbVjFzKjLEHjWuAR6aC3j5WirXFLfQ3wNHeaiQ8HLUFhLPwxoZft7ydv5p3C",
  "key11": "2eTPMFz8xZiKcPdcbveF8pJowFnbMUBUioMiSywkT2JmvLQxxgr71n4e5Yyn4DCc5yWTv3hYfGdd877shHen872f",
  "key12": "31AvJkq3NywcoH5MmzXgUkf3AzAoCznXSGpjr9aWohoVGt86QEgsYcQ2zzazt3vWRpwTuiphw548ThFkfMjtvRRD",
  "key13": "31yHe3BQ7XAHJaBbhxZ7VYGtzua6JcuMESLvp9bz3GAQDGvuaeYQHbkA3PpFZDMa1Ro8ivMwCYDdVWsbLjYfLE8w",
  "key14": "2fEecG2phj89SfwXt8Bhr1XCeNjbcbhEe7nD8euiURMWcNDfpFScRmjwU7jxSiMwW7QBshtaqRgndvfvZeDS7kf",
  "key15": "57qQtgnKvie6Tv9dXUsREoS9v3q8Wk3L6tSGeycWn2iWBBt8xG7v8bssf3tCsyWhDUgve6EWXvg7P5XrQAtuawHP",
  "key16": "59MuCQicoBZ7qfgCzEJQP8W3bZGQ6SwYz4mTzKCzxo5mpX9Y8wYUjy4wQDvZCNESKbiHoPxsC1ue4oJp5UvHNbMs",
  "key17": "2f7qfYxJdbFe2hfhV3CTgVxaFjSG1PCgmt5bJC4no4m5cb5PEPEG1sLk6mFvNgsWrFtA5T9BRaDxBamirFWSuiWs",
  "key18": "4JCWHrWP2Ztw5sNhWqzVH3cGAcpmy3dzuGuBXBTePsdeLF6QnvQF9iGYeCBekedM39JGfdbNN9bVj4wBAVpBtkYm",
  "key19": "4oAxpGtzq2BJiHatAqAPc7RHsjvgaR2SB54SE6xAteBGdaB9P5U34YiG7qUNNnmTjroVwmV83dWyAXPNKmtFxYuz",
  "key20": "CWqNk8bMr8XbrMfXKykXamVe4QR6ud1utHqG9hSeuEezg8yKeoQuUNNTd442LHERgvPWzhc256NnLv9mRirdnzv",
  "key21": "5hzt1M4Mb2vhTAznYJzZr8LrurSnLFhZj6jiagLhfHqdmE4SKDf9uVN6WStwsUWDc6uYHKNt3KS1YdQGfRKh7se9",
  "key22": "2q9VuboANEuDsdDdV552mE3qXiBGmLwREbm2BVjrkUxQ6EXpauGZbCNWgUN7FhcezV6Ps8PdL8SdP69njcesbQrH",
  "key23": "3B9439E2sCF5jWR4YNycuKhrfauYogLFV3hFnzf4XnEMb37HpCEJFLaugeABnN2Py48vcajsRyZ5vSTCUpWHGeSV",
  "key24": "KV75PMXpGASzxVrZFdPy55TqWrXhZwfQPMw5kPieaK8NHnEhowRQq1p3odudXbLEaKHiT5ysBGQ5r2sT3wcu6p4",
  "key25": "5NupCvYAfFJGpjJZTzEAEeDd9M5U4EdpsVBsqJP6QL3BSU6jA9HUEyBszM9YEZaBCMxsnU6pRrGiemvaKZnFa2Pi",
  "key26": "3pipqcGmHxsU1VC4SBLmQUfyFDY2EwwEE8HgQBsL2noz7yC1H9NtE1xoivMgbYS6MiubfR4s3Ka8CTguRFQT6c5z",
  "key27": "5EHf8bR1AxbYVi6MSif8HPfcfs4EB8PQKWhpHNP6ka1t4rsQYMMVAZhy1WG6TYW4uqo9ZX7eweB965SWrqTv4tDb",
  "key28": "2UuQz3Jw95778B1ro7bPzdWNWrRbF3NEpQSLz8iUzJghLXi7WxZKAXTo1g4VNsMdJNwCr47cadcqqJHCMjtQRGQf",
  "key29": "5tb2MLu3VNSF4A5gfv9SVsGgSeYCbP7Nx7TnDEugcuAWLsBPY7fAnMjJsH1h7PXpnf7ue3Q3kRPdbX4x3a3KArSS",
  "key30": "2mWxVG5moSYor71k96uJya4241ojXiJgU67xXhdnaSZdnfWavcnAJp1QwYMq6krtpaTxvWJ4Et3D8aMB998soxhs",
  "key31": "2VNcMsqhrkJwRNYbGLsR5Tb1Y9duduQQxe6e6u2k8MmBbeutrsV1wQ5QZHGiUxy5aG2xwmAUmuPhLCW7XdNzV7ah",
  "key32": "4Ww2oRDwq5819NBGRiYrRcKJW3VpbpiKRYT5MRkiw5y8n2cGvdxSyadjwRNiMnS7cZzibAwVL14zhCgcAk24kLo9",
  "key33": "2daCisEHFCM2i7bahp5pognaBa8FroGhf8eW76atBiZvoow7ivC7sxbRXa5woHw8ccL7riQKTsVHH46vVPVKqZg7",
  "key34": "XG19gRL8dYR4yH72TQTPDu6u766yGHNPRaZkuFjdoavYsr3kbygryXS5zZx6uXfzwCaMseukcnZr5ZpGqfRnwTE",
  "key35": "5pZCXRuEDTzm7Phz5y4KGXvRJwdHFrRNmySNoJ38uLgGFmcYkGS5JDqntSmFNwGQnp7UPwZ4BYNSbkZGAyqSWzH1",
  "key36": "jKmcAD8hXtQesqTroWMyKoPCAPMnDGs34zndyGUitjatZGm7EtW5v1BNov6todFepmLmw6gEKDL971UArGX51Wj",
  "key37": "5te2gLF93Ge1w2qVbA555iWydRFbV1BXF6ouiFkWffo6S4kJPCciMbdoTXq2aEtbGkMnrFDkpgeSNxQRSRN8Ck8x",
  "key38": "3wZXtAmCQyk5YFxq9GxFj9uV93vTJg8uJWvtvYXihYDMnkGdZJETR62PHaEgutB866JHbmfHeKKUcj4ZzXC3rJNb",
  "key39": "3Se7roVHnryQuR6FsncJTAaKdh22skKcRejNMRo2XF23uiZUCbyof3fjURQVMhrX5sPZCoyxPHnGkUPTS8kHXXBA",
  "key40": "4jg6u3YmteNMu5xeRCaQrtW82pcvh7f7iqoico6hkL9y6jq9c8cz3znqCeF2amXb1KkxCLUoDUmpfq1fNuSEF4yf",
  "key41": "4E9NywTnfvJdtsTL4g5nYFuN6GoTAGLtzUPcEqQQvXWsTFjmbh8L6rYGzaNnvPicneMbExWvGx8nf3qGiJhMBS9E",
  "key42": "5kUZzm2jhSrD6yagyoZiCnSoLUGnjJWn9as1osbPJGgrB1vVtZ8EQZAbfSWzn5ZmdiogWLM9mqufZxszF7eBfVKw"
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
