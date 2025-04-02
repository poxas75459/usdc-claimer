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
    "2tmWRXcxwSyUnt2QnbwQaFCpYWQuhgUeKGF7ZKUHy4aCLFxNSmogx1W13KH7BAuZW1ddfn9qRYWWUJXcn3gjjNVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REEtZ8YmJyNxH4c6Q7rCsgbM7UAheAHVZs2ZsXyW53fWxbwVcjkM3ufc6Zvyhg6DTgwWMtTPAZ2ckXqxz8DStFb",
  "key1": "47EpSkmyoKh25kxbuza58w9kw8VvGhQnTX71MgqCZhLcW437yzGanYynjB1Er2YZ9zApb17FjteDwYZuynJ8hDtM",
  "key2": "xTAPWtEW8gTLh9RkcEvrBcUf5o15xUCPsp44kcefK9RcSGnKHQpEJRkABq8u6vhQCji4BkhiNEiYGLwdPwJnkKv",
  "key3": "3ewvw5Yuf2Z2yN3vNZ4yqU6kEmJ3NATBwKnQWX6TyhXvvvYxvjdgsdX1Cg4xsdo9KaEQrRi5RjhYjwUrcUsXFaC2",
  "key4": "32PiKBACgJY6qqys6dNsnxSdGmnbFJoymhqmQRfEwvMBxzfE5AnKBAXRocCAvH3yCw4j5nhhw8iGZqH4A649VV2Z",
  "key5": "2HXwG28KqxyYbyjqzeHL6s8cgqcoVDCJ2hVFZwRH3padPJ65SuEuB72oHqP7jDokhcLmM48rtkBBCPTF6Am145qo",
  "key6": "4vsN3LinnidEp5hMqmzCVfcVtdAXEbmVSeADMrq6eAWmrpifQkuVqVPTWZHwC8UVAEDBU7pAtyNuZEypeLJVyW4e",
  "key7": "3fKWZzHjg4638GrfMxuugyzpqVHNgBmDzaPHHw2hmMCzTFNa71ccTBK2SyKs4Wa42SSxwKEGP1e1vFKPMDrt4tiz",
  "key8": "2yFaCe8jDmpBVcotJEnEfBaGZBePAhk9vUYEoXEsL9STbf7jG92eMijp6Uy3UxmJo4pHWmcedPXuTtmM5qfKJ8qQ",
  "key9": "5MygP7XkenXZbdBaNUV4LBoRZ9bNBhSp2byo9okEmwGxC3ugFk6LXRiTP3SRuHirreZbPzRGdzdrEqzXo66ipfPb",
  "key10": "3H5HSaLCcSmNrswGP6F8Sno7RcrVS3ehv254X2ZjDCa6dzSXfNGP27pXB9sXtKGjMX4XDMoRgEKezF4j2rEjyG5Q",
  "key11": "3GFkKrKcfewVVFJ8Py7h8pnVtq4fstMcJ1zKgb9gUPX9hwr21vZTGeAacVpQCwf1hr8NNiDXTdMsDYEiM25fZ1ZZ",
  "key12": "3T4z9iGvkjy4CyR5sb2nx3zAMNssQm2gZkY2VwutyhYwBFHQC4UFokvoB3uVttXd9UEXmzkahQGrVdM3DjsNqSvs",
  "key13": "vqFPatfQaKhvnooJqgBsyk8vCCFsrqZx6FuCaG91TR13USn1M2tmfQWWxyZDPGYxHwcNL8eGQeDFQ3qdsAz7E4n",
  "key14": "4Saf6ghYMEXN3tU24V52cbB7Dfgv8ZWqaDZibMRZ6oBc9oNytD2Vd1xCPi6qRR7kn5UrWmMU2K6sKJRKgv7cT1ta",
  "key15": "3cU8jvDyVgszDWqpyWF7Tc9J8AmuDSX5sxtWkSCGFiXiZE6FqPtmtdchE5cQT3Czf7DG7GRHVwggGypdx5AXgYBc",
  "key16": "YvGQRWgoK6e7LemEPQQHSYwyyBZuEJn9H25nuNE4tvAXDFHTdg7PDcUP98Xaso5Zx4JWRdzmm8wNDZbNgRkCopL",
  "key17": "4xrXMfqyzKrcBY2k2z6USsPvi8qUuPGfC7ENFoegm2RRhig2yySqxxwh2ioV4Kfgqc6QyGRjXPiKMzxsyrw5oe2e",
  "key18": "3z5nvQsoHjZaNQ6vkB8o5TzX1T3tk7zCopFvep6tr3S3YcFLvjfF1VhgxTwWuAytj98Uzxa8gVmXZ58pXc25g7BY",
  "key19": "4WYxuTT6EjMPoKh8zwiuJqNWcsRec4JpnTeDDoav9Qz7Mg2X6Vewa99moacmpvtwUQG61thFmqipzhgnweaZqs1F",
  "key20": "QuJEgV4WEoT9MEuGfjRVcLCVRSpwjb1MQvsk1JDKAAvQjvyRP91465aDmX1ZPDYG2XB7L1zXchS5112H2HCqWnp",
  "key21": "j7qTUbNaex5nMCcFhnxF3sb5ZjKkr5r2U4vP6YK5RN7LM4ZQBtrjZpSPKi3VHhRe4GYj4bg79xxmwQbGPNbRAZv",
  "key22": "trH7dLHN8YX5PMLXe69vDjd21WyYXkpVqhauT4HKmXDNJDYgHiGmj6EKAH7pk5ByuCyxnM6u5vGw42BdXp5Mww6",
  "key23": "vwDF8mwGTic14yDtPe7csQ6y6D1qSGKCVp8MFvo1rptvmvrjPskoHRL4VsPXjfss5t1od5S6oCKWrEKGBqd33zG",
  "key24": "4V6k77bjbMFmjVVJ4ohLu8caHRUBr7dHsAQJCPQ3YWoXjgGLneMdFQdUdVztuBn2eNxknuEscWsvRsZCWNfiU4hC",
  "key25": "5zBCpL8i3n1G4kohrThrcQbXvmfEqJTCNizvy7vGnEzFJzKGbJGQP94kPwkXqnBefctcBvD4rommJepqJvyDdd4R",
  "key26": "224e3NKtbJEQgrQAPjqcNPGrQbbAYGDWJhZ8pZrAypHHKrKo41Piv1pWrNNN6YCtm8Drr4JBtj36e5YfWRaLVVMW",
  "key27": "4j1XcwKqDtavYeNdN2BhqZb1drozUe3DeRrw2sK6Gtzsx9USWCd3p7EEK37qDFimQD9AUc2dzbMpEUDMQXDh1qWM",
  "key28": "2vdxhBF4Djd9oE6jP831cbnabKrasEkq7W2wSQ9oZEmbXUdJ93CCfj83kaxgsAJZh8iMrccj7t4fSnWT76AAEFwZ",
  "key29": "42B7gBbew82kiga2tuapdwvXb9oDsjLk4xU7UjiQ7fk4c2XwNjsmFYdvL2V3ipa2c1rT3gWsce7Emtpxw83Au2aC",
  "key30": "zch4F4BnyHASU1tjvAHH3EsJt9fV8dmVQWNXHfc1EbQqJXnJRUWn19d2XS2h4Dip4p4aHcptLfgGp3HjEmBim2a",
  "key31": "4FCqiFasuNPKYUbsUcCNsgR8KvHuVdPMSsv6HfHpEnpe3BBJRhXbcWGuGuFco8H4bxLV4HgwkvgHWcsSfDBJ1VWS",
  "key32": "5MA18iurbV7KLe8jSMcWdf7fPZyCTdzMorzZdqNjfUhWu7NQCQfaVx3G1FUEeSt7KD1ZkdZi1LgtXekRcXJ1DkF6",
  "key33": "NtC2oV8qoJqqngtAVd8mwtD5Tg6ujN5dsd7JNVLvcCvT5X9aisYUcEt4tFH6m63ULhV2QTRdadVznjvLWZRSUub",
  "key34": "PGdZKpXkP4FDcwboujkgyZ74f4QgTJmvSA6gcGcryVPcpKNQEVkZ9yLNAWB5YaZVRtAGi6ZvJBGSyxLgiivqPx4",
  "key35": "3SduHHVCKffPiuY8qDxC14eujoVtU2dyKiBpUrQmBrXCpa3UF6hDicAdukDYNviFwwHhPt8MJU1RguZUtTnNdsdn",
  "key36": "3Q36HVctRK2vYDSxhD6Zq83QiVzgjEcrEnkVgX19GTaMfn8Zi2CSdWuSRnpAxYj7C2m89WaLS5B4wkw3ifrHQk1v",
  "key37": "5CDRQjdCE5r9jYq7YVo3vmx2DZvHzU2wuCp1bJ1jVYePuwEJbde3SkNJqXFjbGBSmhUQLGC3n2yMjiyMVgavBUiL",
  "key38": "54vEeR3yo97cXXrax6FEYyiGcccHtCN3gRDsmL2NxVF2foHg967xvR2HaAxtTr2B88HkvVBh7qD8xXRX1BnG4Nwb",
  "key39": "3UKYB9WV6nbCwYnm9v2NHAwyLGdn6ag8VMB942iL53EwcWrFeCZ2fTqeUL3pVCLBiibySofK3SQVNBb5oQreMBA3",
  "key40": "4z82B7tBtPNkQK4MQkPVF8tH4ETpfAgXuMTRvDEhXUctLMygDxmq1zjzA5Md2bNm14qByW7Vvqeb5sPxgzPvmA9o",
  "key41": "3bAoUScUGdt1b3hBp1D3Bt3bswsHXjn8TvUK8rZNzCUXhJd7AJmUAdCU9TXaxtz8FDu859TcunNXcTU9J4z3vVUr",
  "key42": "124iYhjE4j54g2ae2zToUQXJkXtyZNVXymmVMmeNQKYyjy5wT2b8enjy7Jeov4XDRADovJ81VKpX3zv9EE9GYvAA",
  "key43": "5gCDCoMSWXTDnLepuHy6FavdxXzLMXVSi4qCYkScymPwz5K5SFNSPwM6P6cWXMv9xgb2NdgWn1kXaNditMJBDcx8",
  "key44": "3Mh67uk3d7MoS5vZxsbQwtPhyyo3rP6Pox1Dzbd9tUrw6CLbEqRfxShzJBtDnbDvxyLJw9uGUJsonSQ5WhVPc9im",
  "key45": "LLu7ftdRtwjqK1yi5SbLq3QbvJUoygsryxPiFo8vPSUNQh3BBeWyiRdbZSmWF8wqFXWwSQNwTYYfcdbSh5mhgXw",
  "key46": "KT94Z7nzaAD2U3fmjTFCiiDzfH2XENtEV52Rq8f8GhrfpSRtDsMzxVgM9BuSDeSVTkTk5w2rYee8rPKNbZREfi2"
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
