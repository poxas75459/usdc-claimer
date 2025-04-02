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
    "XKxnskifxVaTT4eqk3kiyshnmVX4SLyTeGqhGbkraEB4ys3mW8FjEtzgZkbxMxAywPtcQyM89517q8AYusU9Mvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3xhpK8XvuQYjrwhZqsD2cLPA8pdVCeKXywdsprCmgfmTbpDAQfLgBS6Y45FKezHunvEYTP6xiBSmFRoDwBcSb6",
  "key1": "56PjCFo5vER623LLvVNCEc1FTAsVjhHTjMUtvs2Fn8xDUcvwLJKiBwgsicw8w6Ekmc3itSQLZETB9iL4qpdZcpid",
  "key2": "3rsJzryUFH7kghH1paMA4iawGzgsXB94RmtjeAjbZGjkxfSrniYMuTxk5qnJmyRtkRXLyx5aAZS8KAJ5CFs6We3U",
  "key3": "3ysKxycxrcKjcD2WZZBaoACznj2PMD54MyK7k8dzbLAPXJ4pwsjwhZXv9KfeYJQAobwLD6v1ri8rrBdibknjC7Cy",
  "key4": "4JAHjthdbtpY55kfAyjSRsMLf5QU9W9P9kQQZW8bP4k9VcSpqahTgFqQ3fU393ToozKVuxC2ATxgUKD46o84bUg",
  "key5": "35je1uSSnUDDeC5SbMUbkr7HiBiXkYCjEBJVLqsWJg7qNBzspWvgBKgkM5CQzuDGs7v37mUHJP88nxfgwwsnzVwS",
  "key6": "5XDdGBsYzVe11ZM2DNCDR93h6FSrC7RgKCuRLxo5yJPntzUPxojtgau7zrfVJ6CC2dwLLPVL3CYky4rf8m4Mgaqn",
  "key7": "2LDTMYFF8de9appfh79F7xbj1D3NiFZExnqUyeU2gBnMFcYjjoHGPS5PFu7hn7KmjwVDyeWyiAGtXjrZCyuUKTFH",
  "key8": "5Exvn5bcz8QWAfVWrtGQDFWUy1Yst8wA75Gbosjcb68RSmv1CqD3M9AovSdphubXMaiTdguZrudXRmFdpEEjR9xB",
  "key9": "pbn47hXovx8n1uHEttyGzsUi6qrGMXx5hWEBPoU6WQLkWLww9T12QkadZt7uG8itRkQWYy5RXaBYNiga4n9hNnm",
  "key10": "2xV6TrQahbMn6JGGYA3vKC6t2rwxVVExFpyxQWzLPefMGUng13WReUSQ6TRXQbdXoLdvB7gkZp3q1ELqRDuYaq2m",
  "key11": "xbYDc79ZLiLoaywJ5DmVoJ1d7omUaTvc2C9SzYF7ry2DDo5B62wKff7iJp3awKYXvnfth6BfSuABzjshv2KFFFB",
  "key12": "4oRuevih4XzZzYUxt5mmysUF7Mc5SNwzKDsKKYsKFZYJ3o5h1B1Fj6Sfg94ZktCGQmtZuEDYPd1y3DoXPu6A24jf",
  "key13": "53mxJP6EBQZHk6s4SM7pqHKbmdHc4EWhy3wSkYy8SUTr8vSJ6tR9d2rfCG23jJn9dxJehFu3LvpEW1QqgtfHy95g",
  "key14": "3KbSoXSgZ3a3eJfS4JhG4yAetdrSvxt2sf29KHL4Azvfmu8FkoKFmXBJangurBcsibFfc2AbBrMpAvx2Q16V5Fd",
  "key15": "2hfGSBSkibm3GnaH9pdRPZP5tfeLJTedu4tWQmfanSgyiPc3nFmFSHJeoU1JFudzy1xPChb788T43ryrUHfRsmn8",
  "key16": "3LVpEkvC22tU5tHu6N4XfYFnHSVZSFZQXeUoHiK1Ns5ET4oEQRJvZdT514Db8tbg2eaAxomiwDGVACBV8QYPPrnf",
  "key17": "cSdwA52rCocMwiBXaukaRYkbVHeHPpMstYCMCn1DB8spH39NnMcTsJsv98aqR61zjo79BPrqwawTUYjS46JK1E9",
  "key18": "ox3QzXX3T1gPdqd6AjzuMDMBQuMnAPpHvBVPMPQfHhQjgxtmx1HpZj2KriihMGnjrkyuPCnVFLgtZZF5qtCu4Gi",
  "key19": "2jCN1tKJizJjL8rVFbCU4N3nbjw2V6p8fmAcXfu2FgW8mNyApYSMvw5vknyVpu9UCNa3xrRhwi9bkobz3Z7DF4oW",
  "key20": "63V2puZ55HV7JrW3A6kscKALDURdiziMM2JvHs6SYZG9mnE3EQeFb8r1WcZhERDZTkmvs2zbbQnZQzb4nd9r754b",
  "key21": "4pPM1A3xpYt9r1camBkM8wHs1pzSvDH7PwgiWpWrzfbcvCYK1MkYsmWt86aUVhY4PBfAXwownkhd52nUPnnSuKCn",
  "key22": "2JpJp46YuF3BPcsUuMYUrkSUzyfBefr6s43NGBvd2t7Ai6i4JYYg4YpvsCVqsm6WmwRtLao5RQC3wn9zm6Pk5N4x",
  "key23": "M2dmdmJUdHLVrzJ5swFhY9ZEGqABpqKCXdXfmykZbzKZekTnasVzgCJFsAkZMpp7KpEFaPHobXwkoZwUBFmJMMi",
  "key24": "5twgGWSSLLmmwjQvDRGk4bfXcajtSxr5bKV5QoTDgc655uF6yfwTwXBN1QRq7X3QNQEBQeb2oc5FqahfY9SfYdYV",
  "key25": "5tniKXAvGsKnMFNZ9hTrPe2ckyGYJz6L51DSmD3ZieRQQSh2JYK6HjbhJrpNH8nAK39u4mi5JdRTj8MozeDRCm6",
  "key26": "2ntbbt3NsW9BmUFZv7xw4NxrvjHTsPTYtKQy3gMvtt8BvZ4ByHHEpMqDMZ1xCx2zNRQdzFHMNTyQH1KPaoAA3box",
  "key27": "x4dJVAND7GtUsWBF6bmnuTr6eweYfB8bib7Zps6SA6nisU9Xq4rt4irjoeBacaYSsRvdxDGcZAbDSTf18mz3ad8",
  "key28": "4FbmjU95qNuAWwEeH7Wck4tVAjnuPMGGddmdyhkyYxXyBsV9HoLyowd57cZZbPfL1UuH7yqx3ULkQAbRVnQzn5Fr",
  "key29": "2prG5aysTGz6pJyZQEqR9SWwAdmVU3ChVwANb8uCRMj59fjuiHTyEDWzJyzEmrkRFirctHwyu2QF8Xkt7pAbXVA",
  "key30": "3rdjyxzxcBdmm1zsBKZDN7DB24njSs43CFUDUPAyJHgUen5fVeVKS2M2Pur6wzTQxXcTtQUi5hHP9Pfdc6magp5P",
  "key31": "NisN8ZqzojYtmuF7Uw9rh74xVfzvaA9N13DQqGKHzaVbmdr2G8i9zM4hHiQBKiXTPxDhWsdUu1ZFz4nqoPzmrZk",
  "key32": "4M5DHPEVyYprLfQHm2mBRwqXi8A748qFfA1A4xHjN1eBKiTBGNbhoB7r8Jk1RMCbLjuJ99RocMMVkdqBsTJ9o5Cz",
  "key33": "4J29C3P2UGDHF5Y3B2kAVg9YvumPHvnxLtrvHkENV7QfRsZKmCCN3YciWoq1KRBTsbWhQhnpyZNXyrvNDGGir1mp",
  "key34": "3US26N6Pzy7sBYk5Kymvv9YneqcQtnSDw6yxYdkwbNbqD9CkubRNhT48u5QTtg7aQYAirsQH6zbT7NX4qDr3nEeS",
  "key35": "4whqb6au5ykcSmxv4A3qCAQqKeRU6qHcNDp5F5LiKeApFNcdbt9t8y7xiBbBva4m7r5TmNfVnKcSMNAHMmZYTyuq",
  "key36": "xFTp1U7KpHZcF7vtDGBfgQrHMFr31VWeKNRQEHQCSEBCXMnNZeZkxm6DoKEpt2QrQ3RfT7NmTWakjK2MZVAJZiS",
  "key37": "2gz6ykaEAsPBDY4Js3TCrX21gjaSxfZrg2NuoWr4PiqBTvxQCotf4m18H3DTX9C1CnTrZdTchaHDks2ZLMBjrbjh",
  "key38": "4xCMPHChgkc1rjy36Kw6co34EFAGsKFkqo37hk4KKvC89VFR6wPBy7sfyCDQbVY2ijyNdED2LNbH8xdmgM2YPJua",
  "key39": "2mrCueNxALqLD3856WS64KRXS1zHVzur4qtVuEJ92rcAYZvVjQ79WTFJddKZozmzcHmgxWkZb5nUz7BH4sAEjdKf",
  "key40": "D5yWYtW48jnW9ptWLHVr9nX3rG1mVjNi1pTZamkFrN5mS7XNwDfaPD88onnzdjg6iP8ec8ptdXns9B5vKyApdsY"
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
