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
    "48WVS88ZyF5VbFzzT5Cb93rBFUzLEvxMHUy9hhAptRmXD6mZc61cBiqUuVhQKC8QDm59cxtQ24hgNo6DpjZuFGH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3go7xU8y5a1e43UB55sxZSJow6gaJ1SY2m7Y4hAaYc8tFmmiGudCzLzjnVR7rqoZXvMdCyjesNAqrHMPsd8ehDb4",
  "key1": "UQ1PrBSowbPkCfkHtMHZtXoqoeMkLfbbTT7V5gyj4aaHM5WRsLwBhDZqEbWQTCgmvJFk4n4VnnserNDw1TtCNfy",
  "key2": "4DSrXj1ZRs1gxxYsJ6KCHX9JyYJpKDqwqd4Fx2cSnh6FU1REPh7NTuSWBg458h3SayVTyXWTQJbaufjhJEi7rMzR",
  "key3": "2sdseVoLAq3eB1hhhi5ikxD8zB4XZu5bsKBRJMynf8dt5g3ejAY9xJdJJQA99p4E2SNN23uXNgZE3rn12xuR1nUL",
  "key4": "Hd92K5FVKeVurQVUNQiE2fRLP6WKh7DKqMwVS2MruAT4aAkN9t51fX31qt9XbRLSdqXvyDGbquDV3SYtaPqgu1v",
  "key5": "RNdcBrkFsr3ivcYJPM1rh1AooAZmc6QknxFEy4WaYTD4ZxzQMG9zau7464ka9uZuaRnYiTDNG1RL7Z9XnVUaTvv",
  "key6": "4WCsTZ2C43XtShKQRbkv4YoGL9emkdwY3zviJ4i77GTJ825MY35RXqqrhaNSvxmRNrRNixqE55khykkCfQ2SyW2a",
  "key7": "5sCvqGNa6wPywA18fnEK6zwx6PvTPfJ9oBrxFfQDVhtjU1UabgCMqP553s5eePsmPXjuM2wP287JLYf4CkEd6PM9",
  "key8": "23nBdM17DVNb57thcf8GAjZqst6aYY2x6Au1KLxURAeJ7maKyaXo4caAjNASxi2NKrSJpPpd2GghEYhAjgKUkcDJ",
  "key9": "j76dCPn9eGddsuq4vj24ZN8fzGeCaBF3wNkKGXbbzc7UWwJNbGEd3G1TPzxBcNBw9q6CixUcsxAD5FFYxLsexBU",
  "key10": "3zB55XZrW9qW5L79BvVUfs3VEsE4EeKV4ggohKw7fkVezgEsz2d4X3Ymf6b1SRUdeoT8YuzMjAfYYrjNwgZRZpPg",
  "key11": "5yj46Gmv5iGt5QnQash3B5Nu3AkP86yNjJLJyRTtGVdvvwy4gNW6W4viDCnvCB66TLQ28cdiFtv2FCJro59X1A6C",
  "key12": "3KNisRfkMZKuCVZxgWbANvhMWbKHcVrpDWhhVypoMjFS1u9JTYxpAANnw83cvf653anJzzcE3dzoayk9KfNeXRfZ",
  "key13": "mVQgYtNdpATRurJGyF3eFF2rXtJr2fZqoiXgSKjTvVD36w7U6WQS12cGCf2PthajQJHiRSgksfgWP5FvLrBfMns",
  "key14": "2YcERumghHeoW8sBcRSSADn9L61hJ553V4hZnmk3hgoYQNy82Yreuoap9YKLRbfiAKG1LvnS5LkJtinYvEfxJKX3",
  "key15": "4wmYkMFZwdPJvnkKwpuKv9D2UFZJ6phwDsGhQCR8amFBfEL5udAHzhbdJyCGZo8oQeRZVZ7mmmZC8P94iSL3CqEL",
  "key16": "4WNWwE2hg7NiEF8TuDSUihwzAff2AyYY1c3zAxme5dVRkD8F4tVZDoo3pg1YizNMgYb5jznQoR1SVsgDt67FmzwX",
  "key17": "rh3rptRpVfmq17xpbPgBC7ZGSQXBKcdNFTCCqLGkCDgdfgCmNmxZBEiMA1sGrM3sqUvh5tEtwhG5T761GWLawgE",
  "key18": "5cXoQDGbCKa49f1uRLhJQ1qNXh34qRXUHcoZJNGQmZVsV3Abd5WGdvGh6dR3VP3oEDZnJESzFEH2zhF6GVaApWmQ",
  "key19": "5D8FTUynB4he1ihAdq4QFSFxcv1Fofa8gWnN8UuVU12rvaAW2QxstoPyaZ3exRc5EiYhuVE3uhXt5ibt7nREf6MH",
  "key20": "2HiXaWtAEbpXU6SpEGd5SCwT5et4kgkaRDnwP7tHZLf8zwXtMeEu1FKtc5vmqoacTi9j5iMnZ6VtsLy9oGkcTZDw",
  "key21": "2f8NP1cyTK3U1KyqNkDMF1u9f6t7jfj8sHZkgZ52WubPBLJhY2hpPrV3C4K79SzucfRD5brUFiYrNjtxru82x4zX",
  "key22": "2kCykpUZetMALhQmBViQdBFkFHp1KXfKP4YgJJAtSPRdWM31f9hUo7WZmMBH6D5YF93fwaedF8yHCJmVH2ZHzg8B",
  "key23": "zNa21TF6ZADwBR83FWaGNeYEXZBoYyzsEmuSCVoriYqF71naW75ZuoMwocu3FvJngaidHs6YfJvTYTf2YpxsF77",
  "key24": "NDrwvrCgCEd93xtqFhDpo8SrhUp3o1n4mEsGiVet8Sca5kr5ZDqoJsZ9RULWaUxMhYY4858umZGZE5VJLTRu7XJ",
  "key25": "3HbeoBH5v8AZETeAsVFmKKnTsosRbm4BRaoCEwkzeMoXM4fGeSuitMccTvkC7V838C1GuuAWFk3Ww3hCm1S4ivtL",
  "key26": "3Ayvt2yj9hH2Zgt8BvKHABcrcLq5mQX5zQrLXErgCXTrdnrbo1fouW3oq5zYPQz8ttox2Y4GDhSjSZzcFHr78nSZ",
  "key27": "23WBe87EHA3Di8oq1DF4sf5XWD8QvBkVTrwa5Xhf5ZbhwRDzjy2c1GEWcwfNbJoHQxKhxo4H3yVVCgVvFWbFjs95",
  "key28": "4EVgdFWFatAZKeBK7Q5YQbQoysPYkju1nsoHt7QWwtpuD4ujK3EXPCN5XrpTyTcqyvfrScPgPtyYvxaz1yQxE2oq",
  "key29": "5R79Sy3ZKK6W9SDNpqE3e6ZbpXBvCP3KHjAZR2zVZ3xmkHc3mkR9jDEkunq8zxDHeiN6pBx91t3NUG97ufHuh6oh",
  "key30": "deRb8miJjLtubmWt99ZtUsq2uZfQgdjWNrq45XvA2EU5xowAV2fpUtEhdWszq9rDcFUJLmbNt1Uc1hCcj6JXGNP",
  "key31": "3sVWoGD5oUW2b4d49nyCe6ZBy7h7t6dErZ8wnwgdena9CCWXEWkFCBsYX8St48WM5PMQTLHJFJ8Y72w5rwrVMn41",
  "key32": "5RutnDvkmT7XKVC7mgmLM2gh1YFfSSW3jLjJixW76SGDS32YzEN49YxCPwtVDJ1f3VJwZJuKsBQZn6C8gWA1yHYD",
  "key33": "2jrrut8m1eQMSoy4Lm72R3WtGecQw28VixEs2ns69qrx4mGifsUjkJpCqLJ6xK1Rpk453XGE9bsf22KEpWmqdefi",
  "key34": "1DGKB3ciToHTBYFPj4JiU1jtjE6MxmMaQznmRrCBDm2pLR1vsrfQSohMS9rKMcdubNMdpXtKxeJNXwME3n1H1pi",
  "key35": "4afgaHuCypJyjiyZMk78KDYu1Ar87Zo7fUjzFnTLkG42VUeJ86L8GLuVnMD4rRVMQHEmuwiJbj3F34WZEkDJChkG",
  "key36": "36U4vfpwx2U9miK7XBF3YpwYjzpMUU42JfWUB8c77nwVYgZFh8Poh9ezDoWBsTBsX1Hf7FZVVDhgaFyVUZSMXsLB",
  "key37": "2bUVCLwJHyGGgJbmemqQyhEf567MpU45KGRYynSKd3WdAWknm4PRMHgGpSBY7bnxvMqjujDhSgVcjjwRRbYx54QA",
  "key38": "2NoQ8eVsXthp8mbPTCX6LrnuA5ZhuwNxeLMCXZnHvUGPKhxe4ZFKjWu5NVv4Kdq5ynfYeR2MxdQQjY36y5FaUk28",
  "key39": "4bDKRTJkKjx2KrAVYppxeiNp5TKU3V5xGa7D2nubeQnPRU9bPei145nMcsz7EwxWwP3THKc5gKoGJ4xaJgkYyNbK",
  "key40": "5TN6jKJQtuqTBkYdGmhS7T5zgjWxeFmQcZHLg9T15cXkYkc11vXkfkpyeNepTVy664DoXz2rE2SVbpeyhYbpEr1i",
  "key41": "4EPW4xSBzwHsUDgGEuc45MSvKK7dTZJSRDx9ySEBrE4awhAC4JHBwbv6iswTx7yJ6nxeLsszkqh2t74Hr9cv5SMv"
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
