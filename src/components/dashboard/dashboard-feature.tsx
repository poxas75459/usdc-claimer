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
    "5g3pefRkZTiEfr23MW8HR39dMBxGD8gSjNvxrn8ent4jHZxxU2z9K81RBBswdy61jWZXPf6J8HjFCYz4xhg2RhwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYH6aDd3Uxjbjv9RK9t87rnyBJjD7wLUVfayGYA72cGYqBinqoLvx6b1nJsbajaKRb3ACoDgyH4P2QFVQ72gM4y",
  "key1": "4ZwZXqgtUEhoHdvbQkab6ELdiqYxxPAkgaR6DgvQ3c3oaBeZWNRG6GknTy4f9etwWquC9mUmwD4jhjQAF7eTvzoL",
  "key2": "4exLdTkvmSqiYWMNfRggPX1z9q56bAAyG5hQvXSWech1pwtGiYijB4mg6GktvmhqZRXcyggfdW5YeV4AN8hST7XX",
  "key3": "xgsZTAdKteCPuk28YTLZ7WJfkwm19KGZr3qwENakmAuLqYjEEUq6JwxkAWeFqSEXRRobSsVCWnSx2wLPBYTK8aW",
  "key4": "2QAwRybSL6Bh4FbbiCx2TJouJumdrUDsksA2k3MPUmsVbJETmjkXk77Sb5ciAvug3bxXwr1Ph7ykZhZS9xsf79SF",
  "key5": "4AxLPz9Mqgx9hXMyzzFMoQvSGcww1wfk5jb3fxEX1hEgXaXskm7c7BPyuhsBcFNDz43rxrxq5fhtwVSEA1sp8CL3",
  "key6": "39fcJE4S3TiMoqbfhAJGFeYVBPXQj6NYPMfdHJTfNSgABhbb2bahER3QWeuPydrFZrMq9YwKuM9Unqr1ntEqyrnt",
  "key7": "KcYbTmmdbLamjkRkgSwVgqQRmxX6XBQGzrVKLQ7QU9qa4Xqyx9JFdD1wfKsN9NMRGtqE7Q41J86XWZYyrygmhZZ",
  "key8": "58U1YU2dEABhWc58c69n5DV1Jnsb5WjvNq6QEehtut2ybQJE2S4yJZJWzQRu3ve7Vr4SVRA7azsw5U2Pd5RCSgNc",
  "key9": "5fhbmdgr6c2hUov66YdNT51pGRT6dpeevwckhn5UoRvWYbCt6zke8RC96bCx3re85UMFdMABaFmFaYbnVM7qagyM",
  "key10": "5zkJUVFVVPEzc7v9KPpCr8S9Y8myXzj4G1iRMBFdZUpCwKWrZcxYMLuBf6K2GuafwuqYHiDYABQKpFZptC7yBb3A",
  "key11": "4hKvBbvKBSG7K9Ya1SUVEYRX9SZYYPQHtf2jDsC98WBb4xGpYdtmhLaeGatTPrhCrfK7s2b7GdHwP34VkUqvygzV",
  "key12": "4W8nsFkkYEYGUdFAZNhRNAaeffe3sSG8ZcQbJwtHu3AjWy1e519amefkj5psEW4oVm1LaLZWUFYVUViNe38Wytn1",
  "key13": "5MvvgVV5tepVkijEB7QxUctp4Gzz4w1kUngCTW65ERL3QfKh5JZu3US9CG1b26ouNumF3hz475UvvkjdRUirPAA",
  "key14": "47ijywtJbFvkf5AHywKNuZUf8cRFAnp4BSv9nkeVTq86PieLBknX97taQ7mbNYveF5GCrvD2DsQHUYVGnoz1TVou",
  "key15": "5gnWikUK5Mmqquqdqa9Vv1H9z2vFfuKSvcv9mZKyV9bjfBVGzpS6jSLWKxjnmS5fFzVsZnCXw7dwRhMUm7o162S8",
  "key16": "uQpGDh9Z6pgjofTp5SAwAjn7hJoWe2X85DQ7m8pbAwDnJc6n5n3UotGgamdQWS2o89B7ncLkFYb6vdGLUeAoHHy",
  "key17": "3jDef36xBjzunJC4TgJE7WwYN6GDqUVwFtshzmD5ybqxA8vPqKCo4fpubs7fbcVqRgT1EbMqHzPrU6LkBNL8kzd2",
  "key18": "52QLAfTwea4jMj98rfq1a7o36Ba4rJzuiSapEj7xa1itdTUGwkdXFNrCSRc9FYhX3fFPZfy3MjtufF6HfBX2cHJT",
  "key19": "4JZPR731iqcJxytpTYrDn9PHkhsMQayaAACpfgKdyT7kBJBJ3V3YCNggn4t6PyrxRYs1yQYU6Nk7sPw4HRMsCebp",
  "key20": "3WA9QmhqSrbeCQeKpmiHbPwUw3cXdW5wgzvwv9SXqoQzUF6KicEiCUGgVaaNXKmVG8ERxxNLKUUNjdKSKbgYzRvZ",
  "key21": "DC2aro1aQCqfDSn62hUZgqnvJpHgGnRkm1qtNUsTJpWgmDLaMiyiDegMnFopN8vgXtL1hf69VQeMFd49rJGRw7p",
  "key22": "52orqdVpbnGmmSXUrKzHRcThzBV33u7FSmKmND9THeJ2cLBGxUNi63qQ3u6TaVqcdJDTKAsDUGaenacqq2dTc8zy",
  "key23": "5VTVrterPCtHXPdrpP8RdevDxkaKPuvkNjgNPoLCEvczeZGGvYbS6z34QPXFU7AMZPbwcvSC5H5CGZSm193jueyf",
  "key24": "4rjkBS77P8E7APWZ6hdVAroDr8d59mSoZcxYUF3QZUY754ESHnHLK4FrBoALCwKve4qCbcE1Qo16SLB7amMTur9s",
  "key25": "5cSQ3UMBFm6crXTJj7CnX3Hmzjt2Y5GFxrQC7RmeqojgsBAb24xdxGEkAoLeryDupq3NRv4AHKYLVtuZ7JDTLc6D",
  "key26": "58hKi2AXd2MT1nYiuD27GT4TKKetKq7Wypst4RBbb1b1PboSGR8vJ65THaci5FBbx8iTtKPDTJEuh5J7gVoMKAYX",
  "key27": "5g6o9Ejtbs6WW2LHRmvxh7uRdyaTdnZtr25u1StUegVvCt31Key3rvUDkmdcZEAVmx4zUSAt6SaFkuwtW4V8jPfo",
  "key28": "52WwPbaqkfWG2CKNx9xscfkrHBUR4ZvhsvewSS8HGFKGbWUdKtbJ5jMnQCKQUpwWMVJAAdY3AvjgXTLQhzQnSeRG",
  "key29": "4iFpU1gDjHxWYodTNNkMq3pfvtCYx74A2L8Ad1nz9cDNVzjARRc4hZ9zcbzgp7trmdVJFsGLS1F3BsM7UafpMYfS",
  "key30": "3Z2geBx2M7zXFETKC2GEwVdwXNnvaDAYEkyTD7yFPciYgZsHKabgdobcdh6SdCoQd9yUePsRCP2TJANekxWPnuWE",
  "key31": "5j2upLCEJ8EHjxfRqZJYFze2wxdNz529SWSP9jJUArcfcmpzgHDiBxetUrN77SKtTDMnXWEaX7xAUsDwkVkqFGqF",
  "key32": "2GQ8TtzYK4Nxg4pEhTwG7sPgJTSjJkvaYQcbmHd9qKQsSb5pS45iCrUTVQ6aNz1qKvd7PqwTDaUm6DjuTKWjUWTc",
  "key33": "2Mcw72Uft1wpspvX2Q2iaami1xSNohWGhYxi9Nqn4wL11cGpn9DpuqRvMJi9ceBygYpeDjkjxKEXRfyB9egFGdsN",
  "key34": "5o3unu9F5D2e1eXHVvwzsrvZENaa67tkZpqYzTKcwHUopcJCiNVFc7EhHuHz9PXAe3N8AJu7P6HMynbhx7Twz6wo",
  "key35": "3cxyAKrcB7NmDK1DAwUcK2Tepia2eLuXJHoJkLjeM2gA2jcKyNmb76eBgyJypmnnZVvMmZ8NnvNRAM274quxKeqP",
  "key36": "289ZGF9jo3eUUJvLzF5cwSP6xyk2ifP9PHkC5TGu99THthfuWyRCk2rW3sqPb5Q3tEFa18s3wMCGKLkUVMfESoJ3",
  "key37": "28SYcL5KT7TuKYhUcWXaE1ZwZEYGRasyHgcdTinFHrnxa6FMmkFqNsWsSrwNBWaRhZn4kgqvrJNWHLQSaRoKbPfH",
  "key38": "YF8y2XcPY1fcFzkfoRa2ibRhWKq2nCSa55hdGGqkAkeS6saiKxJX2ax2YreCgpjVRCXxzp1v3RtDVh6q3XHU4iz",
  "key39": "4pas2F26ZDRKv1971mF3PEqgR5BxhDgFHukuT6NhxU76fQZsswWhFTdYVKQ9kbRPLZcybGUpDPgFPk5DE1MmNSkV",
  "key40": "59ZB7MstScDiHnUJtStSk8ti3AjbYLBxk9v9ZSGRuhWoRcRuJvEkJyYsp9YFqqE9aix7xJpRY5aTwvwRiCVyn96M",
  "key41": "5bpf9owdNwPxoKUnVLE9gmLGDyNxbxvHQaHZ6NveNLnze6WUezs6QckYE6kMJVJ9BNh5mo9CeLwUMQJEepfg6Q92",
  "key42": "4T1w5GC7eRBbjWisztHEwpiUeua3GZpvP96Lr2cDdeHxrCZwUefrtHcbL2iD49kg4Z4RA3xBwKB7WBgvSWVaVZnR",
  "key43": "3v42YfYz5CFmK5YfXCHfhR5khs9g6zTSjy3iamk2qy8YWnYR97GcPuaSdwHiGatvB4x4Kq39LVcgT5wYodg6riQZ"
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
