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
    "5w69AXzXwKtqNtZukz4fARght8rpFcbW61iUYwiHT6uhzbTzJpc8X5iW12rG54Fv7mg78Vjffqocmn5LJTnMgEya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQ8srYQUFWPTd52UvxDNFSqPdK9UXF2skNij2E5BLBSiycSbUBxUWsDFPsFUusLzQ2Bfvn6miGjczv7UmyAB3rm",
  "key1": "3Vwt5ux4PVunCfq2VbEocRZKmhWpJKssTwswHcam6mHga85f4PqpwNruPPV7oqjN2BGmq5ZKCMmw3xT6x29KTsgM",
  "key2": "5gA85TwcjYMXHvgTPuontbDat9sRSdVP3k3aDJfqyYdYb2TS5owhAXzH2mhQJ31KzAJtkFU5299hKKi8fSw9n4E9",
  "key3": "5n28gHRkdZxRBjLAzkqYxSTDZeMBZTX2dcbjAMiehpL2HhqMR77KCHoXKG4LrpyYbaHtk8KbrzXDsE1mHqbruYMq",
  "key4": "UPucSVUZDj8AByf4dBzqEJN42HcVupwxgRkGabdvfLSczMGfGoNzthhBoKhJJEgvrt6eDewZvcaYmYYR44ZESYk",
  "key5": "4wgyhVwM4MPjptLe3AyDk8ZXgfH6KbNgzyPjeF8bXfyYnJGqrEWmGFpbPZMyf57AGdLM5nsRkz8FhX4o3634Wpe2",
  "key6": "c7KjZ38AnkDWMLD7DRJ7zeBtpUET8s2fGg2MmkzbnoEn7QfAB9GRELp5awuuFdcE3dqvpX2e2JUsmWZXk14tH1Y",
  "key7": "DAXvwkzmtBMUbtAUsgoyMh14nJZiRBc38Ajf7oPdnnFB7jYuJL9iFjx1vd3MZuyUKirkGwAxWd39hjBibBeycmS",
  "key8": "wvKzvd6pmz7jTXSXFnnSBvuodELaKvBYSBc1LjSnKnAqjVyjqJhj7R9VjTKWdkuz3CpRoLQMs41iZFt1wJKET1P",
  "key9": "3aGeMjG2MdDkMWvK5GApePvrAFFWhUnzhg1R8RsWC5vgrbS2RuDa4LYovjVi5KGh2sYDxX452qzjHRQxTS4zi3uv",
  "key10": "4A2xpUYQxhGkiDQu6MJSDgBdtCcD5KtParSe7E3EUBo2v7kCJ12KFp37pEwttHaPN5CLLvyJrEWXLf25j5FdePtF",
  "key11": "4u7K58jtMStffCe3nujJyW9B3NvCdaJGijhHWRA6bDiB8tgBRKrDj85oV9ENzsP7xdLoqmKGdPbhqcvRDLvW176L",
  "key12": "syHkqD7T3tzLUek3ru6QHWssRot1Q8zYUUWaGbuVrffrZyYtQdxrKi4yE9k8W8mcWuqg9JDZtdQwudFGkazHvZa",
  "key13": "5pDDJRzx5uwkcDyC95oD6TzwJyKEhg3jjo4ACzCQ7RBahPEqTAhybkLgM9wWEjPUWzfCAWbR9aGXV26E888KiarJ",
  "key14": "3XVpTbibhZ2q5G8TQSYLNCauW4KJQo3ciYteFEVsYDMuf6JfyMoUkArapBZrPcbTf3WsjDVjYp1691M5yP6h3rTT",
  "key15": "Hnjzz8gaQbJzXg4ybgBsGRrTyBCWy4kPcT8DpHx7rxz2ydQZnixdjkN294EPoTRY44WAKzkP9jyT7bYBDNicSqo",
  "key16": "41wVi7u3nWY32bBgqLFNfEtTqp3ZquMAKTvUFVxQGRQqfGhv9JVmvF2dYDuEGW7qgmnJ3nSFpYfLZBHMevuoZyRc",
  "key17": "5DMtx8sPPjx6hHdHS7UCMXMH6D5gvEpZJ8RF5zS2H6yg13YwBb4YJkHnK66avYKdyuWoRZraUS3dX1VEbiqGcqNe",
  "key18": "2MksipMXUW3Nn1u8BzMGN4wmtQT6v3fSPim1bWL1nwuVFRHjd5QdRWLDE5T9wdiQV19yURHVdNHji7pjjKJo9UT2",
  "key19": "4v7DHbCTebwJvNkTEY9EgG8EENTWSVuK5eSxAQWeHCHYQcmNSjbubJUwRNszyTBFuaxs38QXrtd6K8X35NmxVsso",
  "key20": "3vXS3XrGCKJ1cqzKKNxTDN7EayMFFd6eWZC8iX8cPUg5SUDgz5sU4UZhJptt75EyhofmwjXwekrPcuPqrgU7T4R1",
  "key21": "2SAP6Lfg5fA8EYzgBLmW7QvxMcG9pLjpipXgYtCMgcafP65Rfa93mLHJENn558prkjYjivLZn4Lr4yGZZU8eT9pv",
  "key22": "4w5DzqPqSmmTJMcLAJ3527mF78vAHsQsSCTy2TLs7uMA3cfN1WjQWpMJgfWoDK7jeRB7TubdLGkYy6nLCK87bKSb",
  "key23": "332xpCxLTMZb3nR4JAp3nFJTrQbNMRuTXeKhyk1WktmwWn6mj34sdUZBy4AkJMmtSsnrbPARWhwGj6fPiq1rwijz",
  "key24": "4PVfVSFbMzNxsoP9rbLdVm8vUxHCJfV8FDQhtKEXVVNCCvqeL6pBSmm9m5UM6iqLyN2fGJ9rDpcfX1nkKX8XFFQb",
  "key25": "3g9TP7uPrFG2EBkWgYGXnAVXqZ8vgLbn6BFCYgjiCoqjz4gfZqWoknGCNYbxWwuqpPFbCtjzrJV2Sn4HSDNdp4iS",
  "key26": "3drQj6Qmx83KvsWgrfW1mMM5saWZmLYUjbb3DngV1MfwebvQ5VxTum4QvjwjcCX9qzkAkZnccWJcn5o7Xs9Mc9rW",
  "key27": "5N7dV1jNnru3xSryjnyT4VvGpVfZhfDkQ41yAsJX5LcMie4L8h6gMa7LYHufhRmQ899rPZgm5UBoBMHkLJFduZzi",
  "key28": "Cq38TSsTL3eChhGX8qeixzdTABKuaYR7RTYRdEcLsQqznMYu2EDbrbdfuKSp5PN51ssD4mQQpfLcLUA5hRqoZDQ",
  "key29": "hTt2kPBQrDH48xPM51jwZeyj3ZkWSwBSk9ECCYg6GA52oaGYrJm6LUE7k4kbQ7J4kcvu166erXQqDAKCC5HdMcR",
  "key30": "3Ja9Xm675iGHyKq6JGmH1oYtHLAdaJUvTqtjF9cZNSeHtgbYNRX3gA27kTHAXfPUV6BcRaJsnDZQPsTpXM8tPAsY",
  "key31": "qv9FLKXCMcSgc2X9EvmY95vc6m5CVxG8uCXSWfN1FyGk79G9vJ61L98jqWihTgiqJ3AWhT7MksQXmb2aJGfP4VB",
  "key32": "23GtvrCfiXeYKyGZLpwLF5ncgvQQoU1Uw8neyYyuoQTccYhRnAU8eZ1knREb7mn36c7KbfarQRQDbztPLfYnDFZu",
  "key33": "3ZMDxSpstAUft1c8cTap4Dzcdf9mZ4czwpASJNoYLUT3AmtCFqb36dPYobfN1qSV3U4FZuSASh5aijzu4cS2GyMJ",
  "key34": "43c5d3aKEQRNNNJARpZGcL7Mea61wxNmEJdKkJwRMwkRSzfEpRK8T32C7PBkfp2Fbmcs2iYGLSRLNWxz8S71RDoi",
  "key35": "WXgeg61eRG2wF8qHwTxZEp4pD29VmpUC9fYiAEuEE3rjQNnb437jDBTjJTqKyDwenmWSJfVky8UnotYomhAx5dQ",
  "key36": "38zshPdmxQ6JzG3dUp7Ad6PZ7hoYbgpSVCMAbFYQhP26CWqdixXJMY3WNgVcyHJL32WfMcoAe2SJGTyzJcFRGAWG",
  "key37": "3fVm2U1PWELhrj5dL5WsYgcNPr2GPsXp84LWvHYrA1pF8u2WG7si6b2Xrk3s5J3f58FMR12X24teyJ5RyEHtRcUN",
  "key38": "5fqrm8fAzkh5WY4rxzWMb3xJa3m7tp25ksxZUNJKYTyT1X2jLgh52pQXnwN3bk17G6KdmThye2YY16AYdcrsvjx1",
  "key39": "4BQD7keLakZJWbZrN3P3h458hqo1Xmeo99RtxYnh5xtkyujX3m57FDWtwzBcRu1KcidKBnt4WKjrV7J2WsxdCga5",
  "key40": "54Cbfc9kffGiNhB8CjfzTUSZyc5jJEkv18CAkEodV1LbnSWBW6UWhXzuRCickJ8SvfQPAbVD1xfvNGwvTCt9ebNn",
  "key41": "2zvqCaKzSDmYwxeEJ5DDeSi73tkgjxLdrGv4xFuCfLj1PmGtSYqFr2dfVeWfJP6YRVvwfK2dpzDuWmWmocAU3usF",
  "key42": "51BwszVmpcwiqx31z6BH6Kq4UEjNcmwDBi6aRcfL5HrgiRbZTsWWVDhRXBzaF7nbuYct3ixSHPpnfU6bwTvRAzDT",
  "key43": "3U2JzaycWmQgv9LK9PoHDAd4KHMuTdzRZyD4yB56VHBZGb3JxnaG37jzkeMdzoR2w9k1bpLZzNHNqrMUtkjqb5GG",
  "key44": "3dhZGKLEeGzc2TNeuaqVQuExJRR3Yg8eqqFkF9CLctyC8HrhnJnU3t4WDVebnxLxTRHqyr1R6o2rf3Fo5kQwtwm5",
  "key45": "jmPWrr7E6StaYSWYD8N1pnAKttymiWU3AwDepvT5KUMUVFA1cT8349ovB4BbpX4Em4nXCHUpMZ3UM28p66MsGiv"
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
