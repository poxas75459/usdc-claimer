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
    "Tb6b2Xf6Bxh4uMY8NyUAvwLpvfdoAmrfkD3RQgRiW4h6CNqwXQqhKFhJSS8vyTKtJuDzgcjce7C1yxAVqEPUivS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YL56JBF3aQKKRi4cHtxSmbQjnEypYetaidf4e3Zh4xP3fYkGieUy3GBUEQYdps8k3jDwE7sxztDmT9y9FXNv5PE",
  "key1": "1878YBZ27ugE99tNco7ogf1qb5SZPDeY5kSJQCnBSBmqkQyNphBoU45kR6wHdZsrEmBZSDL82VPmUsZF3enUx7r",
  "key2": "5UoxMY5Uu75TsSF1FfRkhm9twpK7uz76M4TFXe4WN1oyb8TghENUk2UmZjzANgk79SLGabWukVp4qYwGWDGBR6tB",
  "key3": "59PcUsJyk2A7pvCwYyUvHXrDGyjdeQKcMSbFEm9KKVC6GrWhvNAPp4Fyh3gMPyL7cGxiBfvt6Erz6NVjp6Eu7TfQ",
  "key4": "4vNaGLMWneFrC3ubkPpwU6MHGMF1sNKDMavQPMwWr5fxPiVTCyekAiBwZ24o7rVEEA5akvbAtGuWcZJXHNB5KT1e",
  "key5": "35LZyvwP1bYd6mSVfioYDnsmiJFtufsdivU4VUJhZbJppBLpAqrxA5pBQKdZJdGCPTKDJmmkbxdYeu3nZUBKLs4U",
  "key6": "3iNbb3DkjHnhTV8sXA9qYe2rAHRHfSY6CgfHhtXdszMoVVPKZqdMZFpeiJXPUKame7QjRXEuU1nFJ6QGUqKqTSQf",
  "key7": "67F5eax1KwUhSvYrAf8XMRr8nDubzQJLdAjhymAfvLimifH8G9NB7RpNpsfvafsShwzk9EDrRsPGaJZjHvYyDRAi",
  "key8": "3sDreNNcWRsKPEYLAqV96PEDxTbpMs5Yjw33LW6rCNaqPjMfPt3j4Zwxg2pEGEgQ7heGj6mrhyF3fWSyNud71Wvg",
  "key9": "5TKbYbQeF3j9WqT5TJuTuNdnmD9E3eWNafuuKFwYnMNVdaqtLSPUhgVqH3fDp33GWhMVd3cJZmj3hNVMK7RTLU7y",
  "key10": "WqB2wzDKvCGCQQNsZgEjrb77P1LMXnN4BscJPozpQdLyFgATmdMtVoV3vfqrbrmQfigb6PmLCZCV4pZbucKcHdh",
  "key11": "3fA3ZKXL3x5bneMCsZG6c6PskT2CAyBWybPQehjtWTvz7TYKmjJrvXCvThgctK1efPnyRaHnLy7RMKdGw9rre1RH",
  "key12": "44U32Dvm2kxTBeQYhM2Kc2mm1ALz9AjcENHnsG5CgKxQrLAShoyr2UFnnrGHkCe2k1u9jeS4B2V6BbsN9r69ndsK",
  "key13": "58PZLHj7iXHczwcPpogXa378AGTjASDKw8M9optxXqXFeUjGPaZj8zrrQXgNUGCMCvyrFwTeWj6ocQVCawZgVRj",
  "key14": "3CCNXp6bYEmiCicYFeNyrW3SmgjtnadVShUCHZgBNUZqHBoUTVrURBrQLDU8z3BhNCiuEQcGcMM4tLsBh1aWGxAW",
  "key15": "3S3ShReLfJCpvNN2F61PPdCeY9ZfD82dDu1usZvbR9LEJfNhfSbwvsKhGTjvR7BuBBQxCUzL3pNrRzaP5kFF4on9",
  "key16": "5hrCwZewpkq2dNjUXsEPcjNezKpCTpdAgiugSk8MKXHvRAteGcftzpQSibYSdrXP1Lmsu8cAtcQZ93jxYz9t36fw",
  "key17": "3dUabD2D6AZenroe1Xr2oUZ593eiE9i9tCAP6uTawT7igSmNDnVNPyurbcS9e5Ca1hL1C8TVZKZTZTVMbcyGMAYJ",
  "key18": "3PBew57PpDjKKUisAcFJtmCsFw4j7d29HwqyBL55Q5oarsXJeNZPNPp9KnqihHf3X4cUDaBwqgk1ARqXV1pYuYAt",
  "key19": "27UBHn8mxewJQ4S5myQHeVtEJjhtpDVk8iEKRRYL9awm4MkCY2tLoghnby9TxgUUbvqheU8khzcxSkARtR7eUivq",
  "key20": "2itpa8tCUPkcv5A3RqB2Nq7pLCJHjcdytUjNfHJMaZapXftrU518UFr2Yj8kihDv2qi3PRmCzxpaKfZyF56QeVHx",
  "key21": "5QE2wCmsFn4LbubPYJxi3K38xAP4yzucYxppe8gsBaKNujqg4q9B7BesaXH3bQEmPndnbaCKt9juDnRWuhPGh96",
  "key22": "3Udyb29xeUMa71VJN9EFB9MAqz16jwjxpgFKpmoKxHgbxZzehMov4jXjaD5Z3qVwKtYRkb3axdA99ijmLG2i5d44",
  "key23": "yKN7Kvn5ZXG4oqnyrn7maKKeeMRMvRJwhFM8jPuXDKVGUJ2nQnSZnc6bMoutaPXcH75hcqvM2cNUYs9qL8Aj8n6",
  "key24": "3agA6wME8SuJQgXi2xRwpfxpg2uuVB1UE4fANZZpHppEsxQ8sjahbFEwcMoVAWBAMmLJLs15nmDDC7uDL4PJNmFY",
  "key25": "2HiAXaXzquLF9jE6SMTaDJA4SiLvAfz9F66G6YDiPcKptTJXZ6FnWjrEzNpJs4rqPdc5PWmby8iiBmXVHbrGF5sB",
  "key26": "jemC6FkdPiPRRk7VgA495TUuMBsX15rsncR2MqBr5vnv4jp2dkVgMMUFY92miL3BAhfzGg78JXNbRkHXEbKs5YV",
  "key27": "2CUA3fp3KhNBGpexWjKBY4rf9zx3XzTiAEjkP1WWtzBF3DVYi4QGVvJLwfJSEdQx1jKySm5UYvqEYkrbG5G822EW",
  "key28": "56xas5hhdV9xT3A4Frz6hofCQC6oYG6sJDyA7XZ4JBprwhgASjZAzynmnM1Ljaw8vnQYViXnFRZ735ndfBvNkfSJ",
  "key29": "32i66jumNTSWJX9RQWJRyBAdg6oUMdK9gW39vtVWZNbCq37SYN9Vp9xJRihSgGPxLAwvoQSy6tpF6ZmzW8b7VVNm",
  "key30": "4KLq5HjsuopPzrxRAh6BhvCnfEmBea9ccPs3DW9bpVzSULxKZYbJLYLq6XeXicgUSGDtQWwCMJYuad9a6KgyEMHh",
  "key31": "3maDUakK1QDw3cf4ddJDaEkMcUrbvNrpfEre8WFcwyGy5rR39eWJTbsQoKyDa1W1UrNDniLsEprDap9L3iYEuVkR",
  "key32": "3eGfCCmibfsNpvpTfnG87fNdcPpRdGC7dVartFyBk5CkQPpWbjekseMHB77hQMaq198zM1jnZHvughxd6cD9rkdA",
  "key33": "5okBGfNTWF6JeKtL3j8x2ZcmBpfmxyiD9QSPDw3eCd8MuAjKR66uy3bdpJgwGSHL99CChjaAouq4D9GZUhma3fQm",
  "key34": "5jjbvNR1PzgNTdpePM9omHHiS1SeteSy9NJtHycPsRq4raVC7H2ZKdqMsxbW6kQRvA2qqUdfunnFoSGL1rGRSXYd",
  "key35": "66Ka5ZL64b4ADydxfsD1GSX3RmDGvHjPVXASj1YACSfStc14hp1VffHyhDXh1iRtCwNep4fGQw7QYxRCrrF5Nvws",
  "key36": "53QrxwYZsFZUZTbbjGnmRNCfM5KizzUrjQ2d49dQ4hrkM3XubMjg7Fkv2WQ1R8GtM9dw9jG88iRDT3Pgie5ncZxj",
  "key37": "4Bq3cq8rgbFWYh3wz1GYdnpgs1rE9QUrgjZktnrU6BBsDUZHMvcYoq9z6WpbAUgeuDyXe3dntdAATVPWRTrdEN1u",
  "key38": "GT72fAVK9uywFYgKJQNFNNLMMeoWmGej8U1RYN8zZ4HcYWCH1PnJNZzR48RMWWA45zPtfXcigctKA7WtjBxidry",
  "key39": "62PDWVYpk1X8jEvEZoLvDmsnR1EePPKEWSukzt1mSVJHnCna6WtUowRgTTZ8zoKS7r8TDPp8qhJbLwsqiAA9o2v9",
  "key40": "4KbQcUectPRg3oVaK7VysFMcTmZXXAagySZ7GCsWgHfh6MLsikNcP6po3dcC9RbAPzdAK8TcVZqgBsDGsiqq31n9",
  "key41": "5Qmq348jErLY5DqoYDjBAMLMggyLthKJdqKBuW81nYc4SKRxyeVmyHLf9CaRxeVtLVzqhNbcWUJdiZrXSvX8tmdx",
  "key42": "5tWKae5Ep5PRh7RaCMTkBPjj6LkV3T5hxTTzzLF5PaHk7JKTVPCxiwAzAXa5rXwn6Yp67os4t3ScedEsVGBu3SeS",
  "key43": "292Rkjd23fei8titWMVazniRav377fE8HxNW86bPeTBkK37N4bAms5x4CKvMnNTQk5M5SwiYY1438V6pdF3Ayq8u",
  "key44": "qLu7cJSqmi5DKtfi1akiF7H5F6y9q18Ey7aDE64ew4Ch2MAkGJ1qcex6KsQgMqf5iwSmuRxBJARztevzruNFMxH",
  "key45": "3T9feHttgTaiWJYkFDyS8TgJtRDYwgW19V7wYpyYMQ7KFzqsixa9iXuE35wmi1XuaFi2nkXnNzoEbM4vX6nrCe25",
  "key46": "3i3K8Xm2xfb1ZQFGnzTqUbY7ekxEQtUSK5ozhW874EXxR1JjoEEHemUxLBatTroucbemKQWo7osfv571qr4BtGR3",
  "key47": "27b41ou7FP4W4YzUDQTFHw5znFV4giTt3GFgZqszyoiZ3HiLHoAspnJfRY7QN3uVQ1W9qyxSw6D4hGeZLXqhEwES",
  "key48": "VmZTzLPpB6GDrPiaqFseVDcf6NjTHpMija5867jyK7qHDyH6fUaaAuvxsbBFKNnPH69tMoULSchrpKjhx1sAyPm"
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
