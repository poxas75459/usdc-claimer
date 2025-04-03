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
    "2C519g9KDMXiz3BHhNxa226iHRMn7HuVPdSFrQ1cTsPNtJ7cDPGU74BJxUMgtaRHB9To2HuV5uv1gWVvYKRN71N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tx7TqEHap1fDooRmo6Z6xzCciFcJHhMBukBA1tGfp8PXwH2bNiW5k18V6YxGzuZpQYNt62LQY6nhwj4Snk8Btvi",
  "key1": "22XzMxTHVyKLvE7PCoiknA8vzSsg7GUhLC7pTU95dJxqfnqk5QTRuay162Dg7bX4XFwQcumgfiXYgmUeF2N7UZ1k",
  "key2": "4qd4dAfHuohsg5fYvj4PvZJ4jehxt4hgwwaY4L6xwYuuXao1eCdvgcYW72SSgZtbo3PFEguhyM9o3LoioW1dsGw4",
  "key3": "2LA8p6GD71Pkc7XwPNn2AjihapQch7pVWyaiKKPmctTtNccmP2WftUuedCpD5zDzEkbN5cwvHSNHUH9ANTKCePxz",
  "key4": "xyGxVwJyJkdgaWbrtAqQLJz6TTfwjNdjaUmEbL8Hf2c2j9gqMQMeaU8rVbs6jxBijUtt3JxZEdT14sgJbcBUxwS",
  "key5": "3egLFGP4XAEkrF5oSWF7mwYz9sEn38if4Rqrk7CmYDxYYhcVPatv4MDFMN62pvjoDXyBbRe3kMP94igGwBaQpWtY",
  "key6": "5GBJqqy1QzDQmFFw29Xpbkdwuhhhom2QYu5tr7zUYkZkbGBgBJpaByQ1RP8891mCnvyWrqx1AkzBMRybGa1UjYfd",
  "key7": "3CzDrJU9wmXdEhKnbbTZkfqncA4dx9i3vbctVXxVFm6TLwyWrMuCATNxwRkTRQidt3wu5pX7aCtAjyadGb3sUTnb",
  "key8": "4JDJjEa1QWBmRr386DFj7JVEBEMWDSwoGcWzCgcAz2DEWXk6R1nCpFhtpmeyisaEhoYFXiDTaFoYJyEpLRQsAP8k",
  "key9": "4eEh6PjVEg7qtzXmBj3uAw3ZpvTPZABRM2PfoptbC6F1mmMt3huvrPEVuBXXkuDDthVc7NihCuP4SKG4CqK5kHqe",
  "key10": "2vrSmmkjtXcJEs1bGgMpSahd8nRvpCCTwKpcokdUutQM8ajJFj78TEruWUTEVFVicrPvCPHRko5WCVBafdrSRVKk",
  "key11": "5tQQBvJqoM7dGXzhHG49Eos5RSFUcfn1yuedxv4hGWkGwaizvh2xRkM461rv1DJyLYxUecJnssBhTqZfZ1h3k8BJ",
  "key12": "3tKq7jEWH5bbx7XwX2vwtajriZevcHU1udM3HowhA7hgrrZg6R81KrJP9j5qmDkzroHQtDFDcPSvqYUJrCinVnGv",
  "key13": "RswJ5pxoVgC7QahHvrryciiEf6XHRzmRLEYt5drNesn1mY4nknGS5R1QTMotxssaM8RT6mFmdzATi8yea3y8r6d",
  "key14": "aXt5anP3FAn8EpehFLmnfezK4ouxAMYRLJh7NUV91zECRAAaUtpWcrSyQ9EpJpQ3agY96nStyoARwZ6ZhpD7gY5",
  "key15": "5S9LZT1mhk9K5Ex9CKExc57RcTt9iwMN1SVG9fRYAXg43k2L7pppiGpS2DpMRej9pjnaScopRHuZhqFfrbqkAZBb",
  "key16": "2h4pJLJ7qdqBr3234aB9x3q53ZbMyxtLQBKxcwiigV4rCCffxx6qQyDPCafjQNG9FEkhMiiDq118XxbgP1qrTxfv",
  "key17": "2pp67uYzAb5YatVP9v2iT8S1RWj9ygbkYyMMiTUoo9CKphihFUjC1kHhvftgJQ9FXH6axUMnEJhxVULUrhJAj8WK",
  "key18": "mMAYEAPz7QAudrE8qDrQgEQL9TuotYaoNGTMDX2BXSMRsW5DyJ38mADkfA4LQQMhGHjWcFemA4qmPNMeBP3f5sN",
  "key19": "27GA64KgFUagQ92B4F4r1Rbp9Uc5oBekngt17rrjKoieB4jdXep9qEaR9N98DEHtXKnEkBJd3co2wxFwiRVzG9Fn",
  "key20": "3VhMbVJZnWaeEop5gujmpZeRPEgPk4WcQMCZQfSCq16pa7n4NuZLjj8qqEdHNRY9wqfcx8fC7j3PKXMsJzT39E4H",
  "key21": "5Cn3YhCpKHQHKNeTWgHXEQnSDy6qTL15kksa3YChraYNhYs4itjFDePgck6BTJv2vZAHk3wT3WoHA4XwwFowNH6K",
  "key22": "3jj1FyuvRvp3QzH2qXneGJPoGiYeUPyJh3KS6esnFXta8Noc8H5LUbDd49Zq56FUwTKnjy26eqbhXyYN2teNavsx",
  "key23": "eXUD81WAtx8voc8yhagdLtTmb3xwnqssswGkRvHwVV1tU3QYNEW9UNxYyAaYfsbfkiop5semfXjw4r6n3eunPHT",
  "key24": "32HmWA9PXEtoSbJVRHSdWtHpNHMtEqw6c5HXhgG1gbSFEJt8MvPYmmusmm3NFN2gm3gTiSxShb7ZyzPZzV2cemfH",
  "key25": "3GhTLg4Wb8F6yaLbBQeAk4RpRvRaCYStHGaBmYBU26b1UEB6mMt8AbkedH1CRS8gQNwowfeafnijLkuAEGFLp8NR",
  "key26": "5xmMFwckaQ2YVok5NEnduy3EtWoSZz4gqb1SnMvpkK7ib42fs4gkUNxUKaoCNb8wTytJNb51i2Wv7yhK1owEYML4",
  "key27": "4VmeviFqQUp1mAabZauKQHnkKjth31Px8seV5hznhPjGySDSJM33W7VChcEfBMGvQZrB4K5GdKQfBNHkv5t8K2Pd",
  "key28": "5UNa5R7KoAHrjDGbyGhB5z13jRhHs3769xsi3dqrRiA8LTwzVrJcyMfwYDVo2yUhr8TQYmgPDTPhRSN4J285seSS",
  "key29": "6o2ZoTXTyrpAATuTjkemHvh3FgEyUBCBZ9NkBhPmazqcPoFoaKoXifevi2gi6Ajq1aXZusEcnHpsQiiQUuZC3VR",
  "key30": "3vknXdS7BiVzg2aFHx8Qjwi3VS8ZrmsZbsCRt2RJQyiZyxgx5BFL9EsCqLcNAJKdcDX5fXV75iHMQDiPzPNTvgKr",
  "key31": "BBK9gzyeAsfQRhQDAexYscrt5kaGn6Jmfz2quQv5uwoP9EBHEk76fBP5TPr52n1yd3zyLcygfqpSxzJ3ApjmS3E",
  "key32": "3vkfZ9jToQC2vSuvHB585MzLakwEcS5jKopT2XqRSv88HCNgnWrM92mTeDWtYcRYWs4rLzqEG3Lynj5pp3wCVYz8",
  "key33": "qbQMCs1LUCABS4wtjU1GZMPKCYRw55mPiwv6nXvtarKsBs1hibcSSv6KhcvfkYSXJrTYQGXsSZL4TiVEtTANJBc",
  "key34": "49b3J3ZcHHmMbffPbftQX4eKievUhGLXV74KsiadXWmiWACLjdmdAVbCT9a4vj4xSTVZ4uCR7uo63vQSBuvqWQrF",
  "key35": "UzoHWxL4i9tD5q4gTqK3Ls2EB2NNk6QqxXitUf67HrnD7tmaTA4WfjSZ3Mhf36Tq6LmARd2VfHdm1CbvEumuh3p",
  "key36": "372D5xBPUmaSX2tbZuwdALEBQ8phosckfkhKTC8x9GDUWLpoJoigVmnvFQtXXNcgPKexu16CTwL5MZTSvtJBsGTi",
  "key37": "x2GVNkgz9V5FXYxiqzyB4ZZ3e6c3a5pVWVm1PGLRoCG42JHT7ezyZqkntt9ZSmznwW5dP1jbyKxriGbBGyD85Ao",
  "key38": "28TnkH87oPe1Wzt6gKX3V2ydbqKPMeiZkhLuXLQEmP9Rb6f6F1cdJyD5xf981FXzAbjP2W2r35QzEabuUnAGhs8C",
  "key39": "rz6bvhPCMrPQZWZguPR8aXHe8fBabMWMS9hJDzxguhq57imMdeZDnVmUnEftTAgJdqWyZJo6d15npNJg7xcCYVZ",
  "key40": "MXiQ9wBTDRPvfuiY7HGKHYkkSwHGbSZqcR8eo443gGvgykg6tCdEFn1xRxMjKuevLY9L1XAztnKiqVq4YJKzYjp",
  "key41": "3YYddfHQi9yBGmmByDzcDozF4KqpYX81BNreiti79GGToNm5arkNYZ9EiVFkcGDq7i5PcUF2TXXdUCPWqsg4s3GY",
  "key42": "2f9MjFcRM5DvveNRVnH1hkEjBR5PaSmJAVHQui8GMZeVyUfo7CKT9hcv7Xmu2W6iqpv4TMXJGmRfbmPoVBxPcjWF",
  "key43": "4rhXBVpsUzb62UF2ugF6AcHKNNThFQKMD4Jm54349iC9PnnQfJYM71p8HGuNdoi8ji7b9AbpoYtTYVpeX1dr7CZf",
  "key44": "52itR8PnK2KXZUPyfQirgrNikxTWD42PVCagKhsfzstZA4Go5Ks5MkueNG5z4RBNv7qaxmxs6o4kgUsDS5awzrh6",
  "key45": "5K9DzJCeNg2ocjnxNF7N58pFb7uuZnLLK8Yds676NyUMo7DvQ4UTBSniNRjw5kE5jLzaijR9JgJ5cCWSG3rGFFF8",
  "key46": "4FcFNUehQxYakhgtqvA5yxrR5ZD3BEc66m9f6pgxeK3L31ezk7iEMr8rvj2fub3qq1PQyJWrSvgP3sB6wtgGq5Fq",
  "key47": "22y8PKMyzZTHj9LjJ7uQGLoHsSfdgXt9zfuFNHCittaa9XrWNVzUSqGAUc8x37eKUaX9git9mZiM4K3rMv8NXYpz"
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
