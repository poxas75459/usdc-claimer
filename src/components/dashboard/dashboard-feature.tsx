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
    "56YRYcc31ynZsmiFPGxzXuVjRJrShVnKyZoAFnpBQFwCqyooqVmhyG1P3hV2cmTu2Z74JKGuWnBDVvF13rNsKoyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7RGRHofnBD2yRkNYpzHxbXyc9ottrE5aSjtsEEF2AU85BX5MWCCNcBaGWcSpk6Vq6zjMoKWCmV2MuAhCFWni36",
  "key1": "5VHbVack6rB64Qm8mJKUAT7ssNugw8eRKGUpcxXW45nDC1fSgrH6Z7RmLWHfdE7JDbDKHiq6q9qFvsz9kUpLMqnR",
  "key2": "2GDCLzrq4B7DJEGLJtq8syRHo9JrAZ41DGrgn3vnApfM23CSCvuGujPzk4AruE9Q2qu72SA4DbFzf6gz7ih8P4Ka",
  "key3": "3QR5f1NPFuR7FSPzouhPqJPvgaUdSKt4Gz6A9grTq8vJW5TYjpS9ByKBki4SGN5F9EWoKNSJNeVHbarmGCkdM3Ss",
  "key4": "4dSo6xcj48ywb55Kpg7KRt8KdU5K7J9VqG7RYMgwjwpnm6t1Ye9Ci229QaRynAsjRTEf3Sa87RKP1D6PpYosXzhS",
  "key5": "2Lu9DRBahonHgQ21TMtAmSkVQfB7LP1iqYqKDRLH8dtV3ibeZqGv5tgjcqbJ122oqsvF5k8TRStH2WsZQHNhSokv",
  "key6": "2dhfSUDMeUevXqJK8Yk6MfpLh3Tk6sHgp6Fkmdn8NjdtieKJQ5PzofaG7UrmWAX2nJmJhEX5yAXNjZMSEyevdz3N",
  "key7": "2yMb2MDdrD8SaMHVgtPB1fuZcLPUxhWXS6qJTR7YxWJFMa9fH5nBxZmpVS5Mon7E4d3fZJX3saoBzrvdzFuTDzPK",
  "key8": "WKy8iazGRVqtLUjK1AbUdi6dHrEaozN6aMZ8ZvaJKtdtBT3Uz1HgCgajpyFWxyop51Frg4VR7zeGtNEanvDtKb5",
  "key9": "2RyfxadSJFtnjPuuPfVv9wY5WA35S6x1MPutRS3W6Myr17CyhB223KUvtAWVe2n2DRDNA1eDNFjQ7roPSsPeZXog",
  "key10": "5bDpejyUgJsLxPzrp4dq3YkxDQynsMBzJWQsGU6YEaLywYg3jYSWFpFpfZ4mtXGDkxy5uDGJW2xvyVQhuoQ61tcw",
  "key11": "58pyDrVGu5bJBzvbEW2JsMwmpYKq3M32PAexNJSgzrX7v3RVGEtD7NWFRrrYY2ghwGWYjqydtUsStrsh1FnMma4R",
  "key12": "3SjgRvDG6eeKKg4QKYnwp2bN181oEwV6qQeVyLByx8hJmSiwty4SeGXyBs32ep6gCYoAc4tRDfWABBBQ6KgLxPFB",
  "key13": "4sRQ3idnqY2g59SeDx4ucSvZpttX7SbEyJtT22y7A1P3LpXNHTBnTERVyB1rwYJU6rfXq1xA9scRXhRvdJiLrvMN",
  "key14": "5RGrb27hzLiJP4bBdjoY4zTQ6XPeFpuH6reKpzFaMpt9F8PmjAYZMKDDhB5DacS3GCzQpPMMRv1THtMkFJHVCKRG",
  "key15": "5jTfE1TEGnbQT62q7EYUS8SKem1KQkUahaTh9PDe9sykpFsiEfuVDSCWg14htAwD2PeLk3MkHFk5Pe7wLhgEYXkp",
  "key16": "5vbCR6VcswSyVY6vzdyvw1uWr5um2xzW2CsyCWS15BcKEhLZLq1BUhpu1K8Bavtib3bKCxPmty7j7K81tnbrHkRo",
  "key17": "4QMUgUD5HqJqYGN1daGGwY7sjmfmHGitzyduKxcfqmpL9XhX2XjJpvQ1FYxXKgYvB2AuSMN4KBSBZL7RHgakSGcu",
  "key18": "5rLvWa6PHh6A9JbivLCfV9gqKxip1HVLpbv9gGMUUCDncrneN5gBZYs327sCdAfBzcYAqEx7n7sW1SaXzaoHnJQf",
  "key19": "2yeUDhB5JE2cqV17t1M9o466jHwDkGEAXzp1iphoan6saGQfKTzMvNTYeeKhBrx87v2ZcnGmqY3bw5ezQ6NZWVyp",
  "key20": "D9piJdumCuhWw9BWMxjG8kCqH3DZCBvntQc4M5vfe9nuUdWj7WKaQHRCKdL5Zwys51iqq8YaAhKutmBnXZBdnZ1",
  "key21": "2tBbvpgJpccStQvjNZq35x5wZ75pTfuqKMv6iqcgE5mXDYTNTBVry7yFPHwiCPGYEdJiLVh7TXQYGwz1TH3KvCLi",
  "key22": "3JYoGsXwwQEBSDTbGJi65SRZcTnFJjsp8pVH5RhQZeijy92tL83tmwAUobhFDk92crEbnYwA2c5Rz5zVWgeo1NYM",
  "key23": "2HjmZBn8L4P1MoSDMEtjDpkFMHrcPu11vrrnjym2mP3gZQZn5QpUd3nVaDHcdQuqVY9anvVNtKRwCS3kRVhTqnm1",
  "key24": "4v11FBtpKqcjfFB5Wy9km2W2kyRm8m9PF2xn7kPsqFqdgtgvhDLz5CZwu6CEShXzPiDMSnKGjUsWbLjd1r1rMR2i",
  "key25": "2CJtZBj6KXcq4cCnbkZywCQrjrwt3rLp7omWQokhMT9ATJrVxJnbM7T5d1CoqEooGyxLAakCDnctzukdjTrPJn6W",
  "key26": "5taA3n8FP511RsDC5g9eks8pmxpk8PozAiYpqdL17uHPsdvGK4sZQm1HguTbRY9PLSN5heBZnCi8EyYRUWFyfKF",
  "key27": "2P2hkGL1JPSji3ptFuY18oV561syFFY7ddWHusgQo5nFkcS8vdg3ow26YDgZQd1koqAUi1bXSAgmwGng88uiL3vR",
  "key28": "3ABKb4nAwZipWJ5ynWT15C6D6CNUpPuJNrmjTCWDzmf35sXtxb2cbCX9LGMNcHydboDt3xFB68Ef9aZLjQeRsUYb",
  "key29": "wjrAKht3L2WTDMhEJCDNg8SZ3XBn1eWALkaiJtb572Mx6cUHa7JFucwUXhRp1eDPQ5mAy6sifmbdLoypGRifZrX",
  "key30": "51LmATCDxHTKyNA9aKp2cTTUm7MwmGkirkkJ4Fjc6B6TZ9uddLjNwjuhBPKws5tTKbwjCAniTohDpDy5cZa1LnHG",
  "key31": "3hohsJ1uqauZp9g3nXeJi7nE31QuAFz8QYzAR3YfiSpWUkRVzjPhPYyJH2ZyrXYrv7aeXroNez8NEkRhVj6RtuG3",
  "key32": "5GV7goVZajRGyZqLGibdQhTesJywAmjKWuMPAEvTkCfyMyTxB5tqD6aBTcTT7JCaStRmiDiGjD8m3PaZgwSJqPCw",
  "key33": "5kZWoheJHmehPoMjEY5bc2Epeq7WcMmWVe8Qbk5haidbtVvhd9fx2YKNPMhC7iiEGUvH1yK5R4xEuRndFxFtDSmZ",
  "key34": "47vd3Ud4BohAKPZHQGiy16WBvauGY988vyNPD7FbkkCEJfHa3Rh6JR7ZNPmT2oCzv2L882fhxLBSk5FrhJyndVUr",
  "key35": "5E3udaP8TqoBwT1f32EyzQgpn4irWN5wtNEjhPsXNa9dQzXVDLwJYKWQVnizYQe4e3MN9Dvne73uqWZn4JrU69zn",
  "key36": "258xji9C4ZJi53jeYPRtzkH8RvN3BfSrnDUerr6T4njEZKJVG4gSA2w2Komu9q1uJmg8TtjkNLbMqyXVHMugeyUz",
  "key37": "3YD599q1vgf49nwK4PAMRJ1VqhCsQKvJDq5Cx9hXqFJujh2s3iSTy6aZHNRXjBkYvt8SPKZsG4kapgTWL7ZGzrBW",
  "key38": "3JEmurWNV68dLdyfPj33MU7EhMQ4bujbbRZLCvdMgM7ztf3eBkfqjxQud9QakBpRuiMoSeeP5gibNyQwKaxGspqG",
  "key39": "5B2gM3bL9JAed2fB5QjFprA4RKhKdRvgyA4tM2BjHtxoNLHBMJrrg7y8S66hEu3buP842XHHxuk1PtzEaYw6ufr8",
  "key40": "5yad7S4mmkujGC61XbKh9Ur1G5KizTbyXV4WBvEZzjpZ77MQ7yntjmb8LWu6DFTpViwBQJqMhbUbo5B3jKjRwSE5",
  "key41": "5ZwnW9PTBX3iGwNJzK7yiHsBx1jTw6MywirCaKDDVCuSsQRMKbT796yWJZSu3AvaSrC2cuKo9E5vXdJqnWjon4Yr",
  "key42": "2dqj9FZk1s6PB8H5b6uLZssFTyHbGKQ1TpBUmnmSwWTZdywE7uE4YFrDhFDkzpfRvT8cna2TEzz9n7iJavkSM9uY",
  "key43": "4Q5yy7JKJJokpto7FJT2Kuo2MStHBiAqsQE4mdtgBsDiWzsQnd2wGar5P6vo7o3deWcp3NHjX2hfocTrFkuYo4iZ",
  "key44": "3WVaSY9tsgwSV3MGdYkwZ7s4rrefS9XWHxznBf7v76pTefPApV5tCvjKjSFhJcmB2J2DPywhwT6XjiQKPB4gSrUV",
  "key45": "3yvKdCm39XGWEJJ2oavjUUDWobPivbnRWDugZqeK1mZjepoFMB8YyguDVa51foDx7Cv2QvYF1CWAAf94cyQvpLLD",
  "key46": "55m3nfJmeJiHusNR15sz3sxGekcHv5G1PrJLxETTr7DmaPtFcNSfux5y5dkZYTRCf9h5vTeAjbgeRvA41XLwxwr2",
  "key47": "5u6b5cgHCaNNFYaP3NVVovPL5KBvsrU8WkWAsSVTMbpGPaicuUDyrFVATUCgist1HYHwWuhTVSPQaqb2RfuW2mqS"
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
