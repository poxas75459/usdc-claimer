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
    "SL9E6zEX16FZvHdQpAdZL2pMusfA6kLChzsBeUoaQBPZXF3tNyxbvxQUmCMCkNCAbusVzX4bjKpkaWwn2Tgqxqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXH8NqKWyC4uZYy44nDWCe2QQWZCtk6sk1EK5LQWdpCTnNK974YsNG6Qgjpke3hvKi2AxB29gizzinK8DuRT2Yy",
  "key1": "3AgGWct3Wfe3SoJsMwzouzFGpnVaycp66mJKvoPyH9edHcEfkT2RrQ2m4f3g7xtmSBQAH7z273g8vXvvLLEEew9f",
  "key2": "47KjHdwPYo2dhCWph283v86xtckttf7jFDmnsVfuVaJdWXyAMAUmiBT2TiJ1HWco51DrUfyjRLApcWJ93BfQFz5w",
  "key3": "jBrtKvzmPYph1Zi9MsL3S7Qax2W4iwDnWz4MgqYZnAvH3it4PmPoiYsJYttouW2ZZCw17JaFkgLwhph19wQahq1",
  "key4": "4whM8UcwstSoPDNxNotrgk176NLtkpuow28myw8xpgSxttK1rKoyvKEZ5jsTDk6TKuw5pnjYTDChpomPfbLKKJUK",
  "key5": "SQZJB59Tx5QzKKHpNA8KLUDiZhK36k7UocE2rkQbitsKPfA9oTp4fXk3SsoxhhBVsQbXdvyfApRUU1Awt36S1pb",
  "key6": "2KnpKJgPB6yYiRVtgRbrmiKT3ueFtcosaejEXJfEcEyEWRNFSjeKWZFQkBZxHQokn1zxsFftps4UCPjm9Q2oXHcJ",
  "key7": "53CEvZKH2YN64Nt7miyHATdoqgWEPsmFo4ZcHSUNUKUyskiEBdKXYXu3DF2hU7VuT3deLV7yKZcGMgQamxH2zmvk",
  "key8": "25sQpVCUkm7E4s5mXGBjXjkmwxKXrfNRim19TY5DgqUd2mVeUbq9WiPWwfvqfZgqcScKw4cNu7PQTu6MSk4TB9cL",
  "key9": "3m4mWuh4nBLsupLevXUdVyYoN2QAFqkxsVA9Z65fJ4n97Yx4MLfQpjibnSCFYW5dU2aMG3vjPCBVC6Cbu61D4jXC",
  "key10": "4sWyLzQuzdT12e9sKw4fWCXEL9NatjKhGNhvuuvzD8PoxY2h23cvfWE7EKmXFPKnXZjbqc8rEfZjCaEYz1A8ivVM",
  "key11": "4izNPTNdK8UTjaWP4wzQgsyvRi4cVc9kGCqVUHhrUpoovVmNXJZhvdCExecgmzRYq4nfmMkE5NsqcVv6bUkCWLJs",
  "key12": "4qvHCkuJnPYtTNroidHHhaacB4td92WAyr5VrsGdspW5kS5tm6C1WARAziwyoPH4w248Wu6eiZPwwVNhDrqPuTuH",
  "key13": "4ZD3xTQKtwpypcvD3CjqrEchxZGtce76Vt13jwWhKuDfAHnqTsguGKFvajazRyBsD5pj5FMERbyEvWapnew9kw3d",
  "key14": "5voxMh9WTaZgFATbknRKtuCHF73auyhHbkBivgSMSjJje5WVinTcnrejEtGf3UDxfk31vei7DtSGKWjbTgLXLPYL",
  "key15": "2xTntdxRaaxe9AikTf9dED6jcxYBjosUVHNjPvZaQsKdJkLuPwR63LJLTS8Pz8h29LsbM2QGWUKk1Jb1jbkEiZuZ",
  "key16": "hrMxkbpthUVcGsNBnhPagEaF3b1w1qJGVb6wRDMvxmEmK674MwKNnNtWmxLQ6DgcDBQLKpsj2hHmF3wvqe1rHkL",
  "key17": "3AXFrs9YnDHUhz5vDv7oP84p5EyLYU7tVm8fmL9RVJdJ69hGtqCimPqZn9iVNGNusubTPUxFM2AyrtY9dqaqyQWL",
  "key18": "5H9LdgNyrJ7Mye2d4dqBx4dqghMP2XXMjFv3rrazCjipL3BfkcN3N2mTkwWPNMfgZ3obULEx74fWGnBysyWb5YPP",
  "key19": "65NjJbzsnjALyRxzPKZ5PXJncL9NZ8TUc5veQNYembSGve858LDLTSup3EyWXLHNXc1LXiwd2Ww36vuq4oE2zAEU",
  "key20": "5iaCQ55nHdfMTdsfE5QqAiGmharQHS29u38ceCD3dL9RQiMz6hfCntG7hrZbmwFVr6pwDKJGKE62HjAdzpBfdJS7",
  "key21": "2J5AB1w5WJNZDTy4y3BBz58bGbLBipfNcSB91tdeA6fvZrR9bf41aVVJzDxXk8u9YBYT9SQeJDHtFxYHDDkwL9Xg",
  "key22": "3ovz2RKcUKScg9hYrMZw9kMGndvv2gdHukLoJ1GDJBoQi2jaU1FKEujwJDXomrSQWwUoCHAxRNAcr3C7ES7iPJKE",
  "key23": "2kaY7414UnCVeDMBaVzBdeU2Q8pQ6vk4v8spoj3vvArekuFCC87n6YzwuXq3TbS1KACiSbkrn2zbfDPzAFsKV5Lb",
  "key24": "8XfGKmjiqQ5vbn2zroLBZt8A9VkJEjWgNeXyChHVusBraxMLGPZ6JrDhiennoA4aBNXrX9zo9rdHMvoWbgaDkiF",
  "key25": "3fUov1Rf44XEMzx5TEEkseKY3vg7co7tPjcVwyhQfqRgcm7ik8xqbHdbLMCtDjb8KgE2FeLHsyNvRjK5pzfwnS48",
  "key26": "RVQgnPb92JobCCq65hKH4mchKQFogLApwGWmoAE5RVGcXYpjXN4JU3zT8ZVAsfJdJw1zVGLs3ba7j8jAHzzBLsD",
  "key27": "BXvajUci3q9yemMPAQtT4pVHLx37ztPBf9oVdXSUhsMjiZZoXt4TtJRdAuLiYQiKHQCNR32q2QhMVhsKotWdvhi",
  "key28": "4KfwswHfMEXKkTLsuQ9VdnJpD46dDZxrWq7xkGcYaNzTNp3KPDhYQYb8pPke5o2iQHR7aY5dzq1DgnTSwP6AyuTx",
  "key29": "rM85QAX4aicvtnpXDheqWffHQfiiWcgkmTsNN36E6YLHe7R7GM6qM9Q3RhUEfZQDFniumHvwWWcnsubqTLS1xCX",
  "key30": "43XyD5EZGhkjQYSe2ngHNiWeF6ngd628iZJ4pyLDVZjm7XoAuLgoGdRSXSsR7bmqhxJSmSRfWDkK5PGoWrCx5aN8",
  "key31": "HVUW5V4iBGvuCVtrb9y73uTSw5sNoE4onVcWCAxfLCz46uB9UmrQYPhNzrf4uQmopbCVuZcWfoDVkQxgPipPL9Q",
  "key32": "2hmWRWy9tk1YHSzkjeRzUqNbC1NLkDhddmNMzrqWfJidwpHr8CFMz3ZkVh2QDCZzXs1PLmtxNUy5yM1RFm65pndK",
  "key33": "2k7ju4626hQDPbsrng7QNGZruuwHef7DPc1kxmv7ov35sABpbdndsftBgvf7FJQLhcbAZ2s3y2MXGKpbrop7hN2U",
  "key34": "SoCLL4MtTKH4pUnfZaExrZuAFDQCUvmGgY26ByKwZssP3R2BfJGvY6z5of7BvEYVvX2RZckeVt8eG5qJXPm8wuY",
  "key35": "3ZyF3aSYQVVXfHJvULS3zRd1GZhbdYBJMYcF7q5qpuCeqQ62p4hceRdovj75SLm9k3JeVWt76ExZvWs425pQeoPH",
  "key36": "2iUVzdC8kkyhnPdUfPUJpuMPnk5xAfmZtR8bWhdfyJh4eVSiW4WN3vSpVjJjP4v3LcGAEb937DH7q9F8JbjfU5qU",
  "key37": "3pp1qQFSu8Lv5i499vDYTp5FsfxDHHbHwxVNwfE6cAKq6zLYrVe4NX2ajXy5JpJB7jwxeVdwRAyfDVinvBtRLtsf",
  "key38": "2Y87dnwJ5YFQv4Hp5D8YJnMi13Y5yWdJBtf97N8Fr68qL85GZLNWrwjAtXr8PQAd1DknNLjkjcFUaFJwKXdsp2e4",
  "key39": "2rym8JcBrV9Ls2PPijLcigcwPNJiqbBjs2A7yfUiPGjFKxhDE3Tmb8d6PxyKfUkXJNFvFF1ZXNw9tQqJdpTsYgfC",
  "key40": "3ubaiYqNGJRjSyyf62LrEuZGvkVuJVfWWJJtGmSG73LujwkvG37QQYFzz5oJVUHzpQDsynpkTP8cxoPzVmZCG4mZ",
  "key41": "4EwZgy4bCsha4doaU2JpiAKQmdcC52P3bjzWV1pgC8AqdaD7ndaPmvFSahk1kA7iMkoez81FLpvZPS7HsWQsX5ve",
  "key42": "28WMsJUoZWh4caxbF9rZSuA5gkUrc8GCR9gQvBs7BwB9gQiHg7P1yBd4yEPrNECTuHvYciwkroWv47Mgsz25Dv6j",
  "key43": "42bbrwCpfXeZnRdz9G4TJmt3WJBvn3UTJkCE3Xd3RGLYJ3pGjoSjhQfGuiprEotigrupsXMEsJXKeavjwfAHTwPe",
  "key44": "4vT5WyDZGpnrV4US9axx41r3pdT6Bd61io2oNZNWLbJNQHsM4fHfVXwwWy3QRN4AGvX6fT5z4eV24tzBbhdoxxpV",
  "key45": "3PazZTMTtskatut45Ntoh4QcDDHhEK2MBMJA4P4igpoyRxH6kVHD87eXWnWb89B811XSJ4XUd6M5TE2xV2ZX2wR3",
  "key46": "CNJByFRwAH26hH1gnQavx8b91FGE8ScebHPmC95WKx3DXBBEuSiiYvr9w6U2pUcGHfqVEBsNW9CmAuxaWaygYM4",
  "key47": "MNNU1HkmHZmWczgARLbJwz7UsU3uda7jdapWmi1vp5Y1JqsGvhnWBm9wfKWX874HDfLSNFp6DVgYXMpWkptz2BV"
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
