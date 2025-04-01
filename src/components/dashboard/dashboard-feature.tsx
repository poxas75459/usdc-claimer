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
    "2CXPo42fPYumV6DLuWSoLqp5JD7z4WP9HrpVfrhhBEiN4HpaUh3vonheD5o2aGPxR4vbdYBPhpk4hnx7rv8vrxmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bX2YjK44icFq7hCM3hBfwZd8zfPfy5gwqwj94QYxQjTK7TumcX4jXKdwiuUnGUZava17DpNuZHJxnpnwLPk4QJ2",
  "key1": "v5jZyS2p2U1pG5Hh6C7ShDKKgeXw2b4wzpbYWYTqhaLrXwpx1h3CRLByjGzCzMQs58yo7NkCXDEQPNpfpQqC9PS",
  "key2": "5SCyegDjhfD2hEpt25Sm954LMS2NPt4bP4WtHCXz69kxwKWPNyA2dVS3u9YaKscnCJpqQv2MwirmzA3wG3FAFV8V",
  "key3": "3jeeqj6jBsio6Ce42DGb3p2gfh4WdNvpPygJ4iG6C7U94k9nZBd9PSaSvkqaCC3x1SPA1dHC21oDVR6MayPvSg1",
  "key4": "3AE13mPyodvEsWEpsEYgfAhYsxUSUWtoiqmbJHv8ZNEmTQDjLodQ91x2H6QuUFafvUxSMMGYYjM1eQu8DbdFU82r",
  "key5": "596HtpQNT5VapAxmVFfycBSop1zzY6Y6fLazs2aW5dVMDvenFm8cKN5w7LuH8w8GZmQxWa7RTKNjjFR4KKFvCYeb",
  "key6": "5fvTD45taEfPTiUCSAp8UffZ9tkc2zTgkpv5LC8AB9TJvEkMwBQ1YsmQkVjgPDYTjxRUvJNpoHmsJfwqnXm8vcuS",
  "key7": "58Rnmw8kCEBKWS3GsMBpq4QJX3v7CVBaqpbaDoDmB6VQxAkXdyC5KHkoqQkzwXrXcLSgzHJeDzaybz72a4jsy88B",
  "key8": "4f6fDRUhYZ297nYaP6pxza5E9S1rXwuvDYDqrnnsviF5DphRE2VsEa8Md45zNAS2f8pbnbo1rKV3suatwweHkzPR",
  "key9": "5VPZcnEyNSCXbtj48mAPjdiv2PEmomEWWEdjjs8U31SkJ5jnDGiv4bNsBZXujpuWqrPm7yMwyYVhApM2vrZZ2XyH",
  "key10": "5nehkh8424XsaTfECfTrFicXU3eMLzKtJedUQXHfyJCSD7jgW1zznuzjjDFpd2p1TgcFfWowqYhNTaRMLFKauayt",
  "key11": "5Tvu5ccDqXrmq8sz28o1pRfsgDr7H3uEfHiqmyhQw8kw58aVpFKCGcPhKR83zctmYRPXyg1yWcnMKNjJvfAn3ow5",
  "key12": "5pqRMVRy2eFE7JRkGQh5KH8NACzJZJZq7ig7mj9TdDLM4G2x9nAyEQUkNhSwnDFPFDSAtrDYc7ArpLbYN3pSht5",
  "key13": "nUHQA2gU8hhajM7PGEwhNtDrfgUHcFVA7LqbaEP6GjTJQVS7JkRDtcmpLUhAwnDKqdXkMiVFZueKMgk3suHDkUn",
  "key14": "4heALF8MR48DYaX44t9VBqMTFowLrawMR6g7MMNAdGAsSGTdJMXb1EL7DTWp62ucmh7Wu7nRG6UGfoHz8QWakZ1f",
  "key15": "5EUi4awrc85r3L4ixdtCFfRDvUUWAcx7Kueb4vzwViGmn5TrThSS6FrowYMDQ57MeAuBxRL2xP5yHCoXpD1gPDJb",
  "key16": "3iPorUQXdGTnpnFsxBjhRnXPpqTYoTNv37NPYqx4bzQr16q9Y9nYQbVreBC7Nu9nzDtPTzDEjnUSBC4GhdkrGKw3",
  "key17": "2r3f7JdWtQoZCgcUqmfBPBr3US5sy5wh1sYXszDnBsfDhseMpBaKyPMB7rnhauyd5qpvXErnriUtVSwhz1UiHceV",
  "key18": "2RXyHqLUJTutzJ3mHD3v1GNsjZMjpmBXVjEL7g6efhJjq3thyZSwpDVrZu51vFrKstbUbcf9Wwcw9crvnH7B1wWu",
  "key19": "5HgE4QcL24LTyi3fduz6mYA7m9tZrALkgoiZUf1XqE2poxVTHexMWVwjNRzGgrKcotXCtNSFnAX2ewTr6ZbCfwAR",
  "key20": "4vTbDpgfQfmdjKT9e3PWKhJsy92Zd1VzGKmxVrYR5uDm6xyNgPg3uWZ6PFi6LEfPW3mATkevZjjyRcKQ8A72D1gr",
  "key21": "4gDqaiaPoW1DCUxh8WWMSGna8wy4tM3Cz94FV6d8srkCFQhBFmj8nyMRsxh9JhwMXoTq8ECibSFjbEFGfkiZcKFN",
  "key22": "2gxhRx3JQzHp1XgFXZmqHzaAkktUgbFRBmkvr1YGoXJ7oGpEUAisSMof3AC3WHr6cVDa3A2KizDwtDDgnXdG3cYQ",
  "key23": "4y1Qdx6HFaTCpMRBcQ26bFb1f17XR7eLu4UU5KFu7uGrUupukL7FZ9RopWHzBo3NALcL8imYXmqGXi33TrKdcNFo",
  "key24": "3h3U3wb7a8DtoJwnmfukBS93JtMoJE8B28gd84HLSCxuKbmXnRve6x8Xiw9V1GbHaC13fmKdW1qtFr7FwXZu3nhG",
  "key25": "N3SppfHt2EujEbMeK78B98jcrGtGzk7yFyX2177aDdKiBiDapR3Dvp4gtc7kWo8AYJws7ooyyUV3KNcHv3mDrqT",
  "key26": "67rCDTAwm6GAveGe6ZZeLcZHVFFENjcaa3Zd3jsWmH4nrLThppD1T3RNfq5FKz83bVYzHohbUy3DeENMRA3MJUaU",
  "key27": "4DqNYJnqdfhPgK8Ky4yVGRdXAq6FNFcXoRS7xFSuHVSwMHptKjpD2R7PiopZRm4wfsDTWm1RH3eDT9kjj9tbyCL2",
  "key28": "67ki4QAJMWTPV6UTCa6MtvC5cP7FSFWiHuFAjhaTVRfQSXR9AiY893UTeCM9uXy5cJaonLpiu2YtMmtDQmfqxVr5",
  "key29": "2cTDLU5rmaF9J5PW9srgTzNxNXALy7PRGzMC91FUCegJfBQMnfb35tnbnXJXHhGDaCqFppiZX63EvHREuf8EEDbe",
  "key30": "4bCPJHuDhSLCfRL3GMPs9ywjHKPfowL17tHuVUwhpxcE3FMacPf9PE38Vq3cGukNLxbyz2duSdkJxe11pRf3wxPn",
  "key31": "641AYNJ2VhN7EDiY5N1oJQWCGxprnB99AdGAaAkSjbgxkV6hFneH5J4oWAGQVNKTA981LqyCUy1oDQBR76VbvdVb",
  "key32": "3wW8YTDVdnzbfK7VrkiuJ7XxTMc9oFPXvTjTbJ8AkPwfiiYf3s5n92h4LgSDASbqs1EALJcmERgLV7N4fvjb7L2o",
  "key33": "4ub55eKyR8Kfmad6DaxYyMJHAgxi8Fsdp7HvGCyTXX2A6yTQ1sCn8kaVwE87UED2K3hUeqixAEMscEuwrsVjQyQq",
  "key34": "5qkJk8PTArJmYi9uXHXV5jD2GyF7qACMnEPh9Hr6paBmLxCuFgrphmmt7tmsRunGkUgsi72gqgSsk3JtAv9VjG9w",
  "key35": "4Nrrd4CCZHuKoxFobWHFx5xumaYtLXCeHm8nyNWnL5JD5dT8CKC2r1C1szeJuz1UBJhvJALAFZMadeGK65SVCTZt",
  "key36": "9pvk5hkXAMZTEr8NbY3y376zUE7wt83vp7pa9AbDuVB6hfbYM5eTbdkqfRSAEA1F95F8trqnCQ8PE6NcDH5zttt",
  "key37": "5tZEGjCXSR27ayj8n4CQyLyvzzVjVdzTXKq4e4tPrWpwGwuqPUdDQ13un4mGKgdfKa1p5Uqga3Q5DQ6jsb5WwaVE",
  "key38": "2jdQfGzx5ZeMyMSi2xRLwVHT9s3FhoJywmdvdqpsVeZdk9HLiFNwhM7P5zhfPRWWVmUhi6mqhBWB43kdz6i1sUfJ",
  "key39": "L6DC9p7dvXDWMScaKtAsNNih5CMvhiAKDer1mN3G72dFMLcBVrHsnVZXzKu9u3dp5ZHUqDJ2PM2HcRiccRDRt8L",
  "key40": "5LSdfxq8Hb4hsdSWUtryXFhtEJKGaLHrzKyupLm72NWRJ1j7FYPxA1RENw1QRhuHdZPFTrXzJDzHGrcR1h1213zC",
  "key41": "42sumNAk3RUZSjtH5hR356g8aQ1qA2Z3RfV1B1A3AfFjqxcZai7G52y3YLwmL8DwkzvPiMSCpvLeDKBMy7HoUS4D",
  "key42": "2Eor25E4vQjdGKYpcSpB3WLYa7DEu5TwTUE5JEUq817JJFTUfFBoDJkBnfs3ugwovV33Xz5tcRcvVMriNsmmJYGq",
  "key43": "3xxzG5mKzyvhdDMmMsHwPpJo1XkyQ6ZbkdNd6xgNi5zx3fL5Knfjoyime2L7cWi1HtTKymRcpYy2D6AvcZY9vmbu",
  "key44": "5sTap7dTHPUHWf7f65F3bTXZqYgF8yUNq5Un4rgHcXj6pABELmKpPL4oH6nm1tm6uCF2n1iz7JNBmg6QkvCK6fdD",
  "key45": "iF9gJ8PXTqqj5NcrSYQKBt6cjkRuzgDtGU46hrjdoDUyqDGec8JVb6u1mxBAVH9RF7soW8ewA7HWFtc1wfgUZSt",
  "key46": "2vigjuVQd2UKEv8jbzP3aa6iGKHwPpa9hjfHAMNBb4DVpqGN9QHnyHKcapuDwpxTPefJoDx914wBSr1DLv2XLAFM",
  "key47": "2oAnyNeotn1iWWqHppeUYQwwjSNLzmEGoEpcVfjaMhkzhWa7oCt1iLqKQnDn7oJMSTa4vjFigMxmoX2VBFWTxK3D",
  "key48": "2M7uvFGf41EfM6cTBgxCiNyVkwcYWCP2nQvsUoGUo8o8CwGnw6RwhLago5jGD8jsRyZZywghAp6ig7hkoQbVhX6B",
  "key49": "pkp1n9pdFFvBXJnUYfZYZfwtEWJcA2LN9kQWwKr79pbm8oPAtpPc35jM1hrnBG1cDEcRApiDxDCyE13x73qq9HK"
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
