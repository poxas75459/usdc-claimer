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
    "3jorjnyxFqVRZ1xvYXW7DUcmc5Z9buFWnGj3xMKjJZ17vfTyPVUp3spvxrMngCuukz9LMi6wGad2cerfHpZvDwMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rRKj19cgvcJUwyRBb6WFHPieUJ12mS3KzhhQtzaTJMwiHxLd4DqV9zxTiaeHVUj7ejqQKoeG4Afj4iLc1XC2H2T",
  "key1": "22VA9guUpiFzbkDt5hoEp65KPiYhZGtnJxPZrnHTNUzyoQEAKLDKes67QMGe1jd4asRtsGNoCHoPZj8pu82GpZBU",
  "key2": "ssXZyTg6HeLQBShWzg8qvgE8oyAFrEQUd7dsMhryEQbQrXyekNWaiPogdng6h2mvGpKWN18QzwD46K56jqbG1NC",
  "key3": "4KvzxHHbD2gYyLY4F66J7L3H9sNRAuT6xbxbu56D8Zw5qJM7e5dATyPiRhjERRjuyM6e8Vn7xpW5GUzk3pN4Zpcx",
  "key4": "3imqZXY7E5R8XbnWFgBdSRFk3eXSwqokgqGRNkbxnZABKPfM9HXh9nVyREEbtTigbAVkSxY1sWrqF3aowvUBoTFK",
  "key5": "3HRjjuSner4fRYZ4LX7YF1P4UJ9j2SpRwiotiZpY9FfFzAPhaa9McjiVngqVRiwoqYo2kuWSjmCP3LCqYTxa8LVt",
  "key6": "633623T3iBdJWbZYEHAprwCKJondrfyhACFTVk1io3dGYhwVnmBiuiU7ivzoVqaUTEEX7H4ybnTXXgGze42eYhjh",
  "key7": "4BZdGuNqHx8XCemcGYV6ACehr1sV4ESNbJG5pCeH4ratAx8whs6Jb6EAjef7eo7oHsi22G3Q8n8LoYhoDFSZsA8V",
  "key8": "2Eri9BbY7uqFEuqG9DKsB9HjvDzbhbpgeoGfxBnedFZVcgnVoRdWMoSztTzqkscQ8EbVJsWNU8o7iJf1ZQ6zegcg",
  "key9": "3o7ZCN5w1zu83RFWbAG9rc4XtejcHqucsW83XhyCERWw7Jce4Sv8RyNvJCMbYjaiDYdm5gcuQvGKCjzbH6LqkHqy",
  "key10": "597NX9ASrwMdTRyL7etihdkd38mADjf15USatXswQPYBZkReqJ52jokeDLk7h6bZFw6D6P5rpUNULPF94soHkMGM",
  "key11": "51wfL3YcFw35ChcUUHFjKkAQmkEcjHYwr9agyUt9Rbvz65PFnrVDoroh2agr6DcMcGRGEwpqJhBhFsHanBxGb6sA",
  "key12": "ncLFoPjHojSqbRTsSkhF3vyAsEUseKME5zj717geBGjpJrzzTGV7bduNcoi6AefV1g7tYBtSZKqhysVcwc3ctWs",
  "key13": "5yVfq7oUkCFAHV5KJMVMFgp4dPs7RemMQx8zrnY4PNFpjSZobwpoYBERbUjgMFcQmDWKkWdaY9B1tyqdb8rE9q3y",
  "key14": "4CApiEhMXBCYuZQHk5y4ShTN6m1gyxXT1S7gtSDiuH3zy9rHoxdWaX111hg2CbgW1pjuDpmWKYhsKuaGe5nHbHQf",
  "key15": "5CH823FYJACet5WRDn5hMifdDhySYhr22N5Mm7nbYSgDFBGXKHQ8q5RaNT8Kgs2Bc658GVKStHQEcYUYAWup7Dbs",
  "key16": "sD35NqTVLypDxu1MGNRF8PuJ6CsuTyJP8YhgUfVSQkaaXzABVuQLk2y9aoi25dWyQzd1JTpNjmFRm48aYNbzuuC",
  "key17": "5yirKHKqz8SXdWg7jXTJdWy7bxKe9fJq7874zC94J65cb28a5CHxcb4DWfBENYX5cofkdUDTbmMCUCVecAc9Lh4S",
  "key18": "3hBBC6U4YNAgfso6i88SJRNcKtbDfBr11koCpkYHuqMZscK4haYnVJSbt1g6UqTE12awGnSUwEipDQJjAr9CUjPx",
  "key19": "BRtrtqAGsxFVAdf3DxiRYdxzKbyv7s3iGkUbkoqpPVAAk6NJQ79oM4qxFCNsf2gi9pvc82pwHYNfpfeXVVN9jg9",
  "key20": "4MrCBow72kdsouqsz3DPhuujUi756tQXeukKL7fcS64tScwQXqriBSPKf3ujMtkNqzP6KLZrgcf2GoVkieFPsyt6",
  "key21": "2t6Gb277gHwZ3ccLnczenXAQaRKPkXHpffGs4qA88DKDyGLguAwKohmYB9SXUk2Qk2m4yLBqpErjwkAC8yKY2P9j",
  "key22": "3mF472X3v4HB7dMBH46fFtZQSr3WFqMe2HFBUgebPvQnUfk94rTqVBboGYjc67FmHPBQ6ktnr1uFhB1BttWbCtEu",
  "key23": "v5anYm4oXet4QX2VbZZvXt8VU96oqY2ZGM9Hj2DukznNrbT9fBR3cpiC71R8iLrZ1XmPq7x6RMycn7f1FgKs1U3",
  "key24": "4SDdRcaX6XzMNe33MNWtCTDu1q7StCiCkeg8g43Q2Xcic9nJSeKnrxU96xWt1cTDnb4hbaqnTF3D2Qbi8j5dvVfR",
  "key25": "4VWcU5ZgDmizMxW4G73SRNeK8pSqPv3Fn9ZU5bZVtmXnt5Ym82AuUQnNEtnM7sbmRN6VBUsf73Az3oWyhPZRPFuX",
  "key26": "5hf3AffdiPoWyQJd4PpNudaw6uyuQesmSWMZgf1d8n9o7RgR1YhGZU2ZLnQYmLXAU7fJ69y55YG5qsgnQkPu2Q4b",
  "key27": "2T31GWQg5c9gne57UmoFzQY3Dn4BnpFHDvaySND3NxSk6pnP9fha5SjYdKRi6ewcXHv6qfhLHm1MFpdK2DnyEWny",
  "key28": "3fezUv6ufkQZXvtzebXUtUbNg6x1r6c85RLTt3WjTwNMAFDQRFhGMF4sJQ1A3ue2btMhK5hCPBsZd9N5xHg3wT4X",
  "key29": "3XofQxL3Fwt8LpnEKpzaWjJmw5VTg6iCZwTTawaGV9uupWdNmWvJbWG81rnnkHrKVVQxeDHXg1w3AdSeKpVEjtn4",
  "key30": "66NcTDWMpgGhAFPDfA8nurUi95VtdkpibiRWQeJzPNFyyY2XyNibUjNBeMuHYo5gkoeTM5EJUe19oQx6dvvqk3DR",
  "key31": "5NLTugS3KrMgdS5JyU3BSeKHnSUZhQArNqWcSQXiHbQazS3XKU8qQzcYBF59TkYM9z2Ktt3fvVW5BQrfXzKcvDhq",
  "key32": "5X1Dtv1LPQFY7je4r7LtMmiUjJRmgD3z4JomzyzAvx2ndD2gfCSaNbPUcczTJ8KT1Njd1D91wvHttaXN3FYEB1nc",
  "key33": "u5mfX6NXdEHhBMttJyzkUdnYykT9d9crENWXR88U5BEpATk92aP8P5Fq3A9DYqaa7e45KnQCp8EQaEAH8hhzaoz",
  "key34": "5DkZQTTRawEoVJvEE7cZKtL9AqG47qhvyackF8qeypn4NpL28q4j8ZrGfDtDxd4g1RMo1vddkJh6JbbSAM7yY4Sj",
  "key35": "2kVk3SQ3b1W46atPfdnMp4cFz89F3oPs9EPSVU3xBBrVv5jCRpGApris94u9jAyf6qRBCedrbXGrnx5gMZGLutwD",
  "key36": "5yYMSYDnK9kokikxREaG9RoW98KzptsEoMyRpJpJoYb9q8qoUssyH8xPxNRa78bvnzWFY7ioG9dgtWni9C1GGyTr",
  "key37": "4B7ZYKreKyLpfeHCH57o5F8feJ2WtFkfPcwKzDw7osr4eKrQhSW8bcCXGkwdSEsYUMV9fDhuHZKWrb8qYK6dBoXZ",
  "key38": "3ZMXhXnTWfUnbwSFPCJkoQHFakM5UTnFJspJUMD78eN4kY9r1BMvvzfZ5egxEWRvWBQZrcF2x3uJHD8UsEukPdB1",
  "key39": "5U4AnJTHVHaEU22x5NsRexQjSvuyVB7En2zzpmHKRjNwstWSNRpafH78x9666SKBu7QW3X8ZLnCSTc4RvV7JXoGp",
  "key40": "f2qnLbuew6XBHKzEQHN56dw1fhagyrBMCCq7PsTKxRUCo3CrsM5Fx8eBK3aZUxnn15pTb8cyuq9hbBfyDaxDNnx",
  "key41": "2GzTSXt3QRozKk6t3yoxy1vFzS2CBcr6AJGVZ4eiNhPQgpUJNPTQiBZUHFFHxNyN8JdKySf4Bu7fUZDWFhQBGtFn"
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
