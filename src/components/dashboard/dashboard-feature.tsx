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
    "4JMRVHgYe1kU61JKcgA9NYoL7hHPrXZ5FxLczNzNRFqN1jdtHs2VddoJmCJuckJ9XT4c59fFB5A2Y1gfXvpMPJCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oaPS3FjNUSQNomkvj1c6hk3jfy7vBucwc36RnvgNU1koxRNpuNqsV1Aw2fDj4cxcd6DF5S2SGQARgfCohATZm9Z",
  "key1": "Dv7bbRSA1R8Vs7DaHT5opXYBMUcghRVTobXQZYVpMkA1HZszsmFmCmXxE9nTZZ9vUoj2Vm1ZSLW39fkwuxteaSR",
  "key2": "5oPL1PWxRd2rGPdbBgvDdTunZziaMgwWQnPSyjzoV61crNJKwzGVv3xGG3ZEJDdfKt4kWB5PQNuvTgGPGb6vt8eH",
  "key3": "41ptuM6JRrH3QSxKXeGLtLrLLVY6gozUV2aeRXPW9zW1SKiTL8YfDEUuDzo6MuZbWW5NSnQFjfwadnmehQDCURui",
  "key4": "2n1fsB7Nbz7ZAcq3kATQaV7iVz1hMsagpEQ7h9bP9ZW1jm71ngChw8K6bbJh7VBRMBrvsZtc9aLeeghLNHJjYd9A",
  "key5": "5dXTpJKrFXjErX7M3cK3EdAQvL7kKyeUNwGMJzP8BawkKWzTi9F57RhSh81HrTSk6CbJUBK3TWtzJdoEVfdHpVUK",
  "key6": "4GJj1DrS9hdaiSSy6ZXQNFzUTW7s8sgRUdK6VphiLcCyCLHw3sLj4sZ3uHHPntYUbCzk5sYiqnaQPEbM8hvTtzym",
  "key7": "5VRGZCqy3EAd2t5Ud3CavhBEpDxWe85sBbafzshKY3oEZD63BQEf2xzeGcdpvbDTjmuqqsXEk5ZLrvfUZqUgFB22",
  "key8": "2fTPCnkRG8vHEWfJJMbsVDn9U1uum5VVDdyeDwqsVEVnBUUKm24WdgDW8j5mCCvJ6FRLFe7MRFH8y7S78YkAbfRc",
  "key9": "5b1yn7JEwAr6ruGjfgAW7oR4X6kyq9wEuJMmEsjdJ99ARZebk7PGL4QpTJquxFnHeD4BgMjXKCxeyUJ2c4c31ZSP",
  "key10": "5aaWZag3DpGhW7y4NkYoHZytqGWVHwbdxwSDjFw2LMB2YUv3dJpX5AZei1GPjuvN28bnknGGUBAx2YaQJVY3k4pW",
  "key11": "2oyiz4m2s2XMY4R4XRM7FRx1DZ4PMJdJ5UPfSbrsipA9bWWFxiZ94FNz5FXLJFvZQFQeb7vdrJ7emEiPBNgYbPpj",
  "key12": "3qv3PeifSViTM2SvNqCQggKxrCyEWMVUVrG5UbtL3kdxqQ4CQ1jtaa8rNg7RGYc3yP9xc4JebQFAzmFPZvfmcbou",
  "key13": "5o5MHQAeCVwYYkYwQxY3mmgV811tZKfBBkqKCg5impJTwDfrGDGoSgen8QnfYpK29nQBTmbZc9ukKTuwBKwzfa9G",
  "key14": "3Wd4RC8jj6Xa5TCJzbrBi1445vttissW8Gr61SeGP1tWsRqW2HhgD7527BrBnR5rQsDYoTxbDc5NEWJUNvfWFCiu",
  "key15": "P4MpweLLqgc6drpXf81VrnY9edq3AWiS6Jp2cWk1whzVYe8MLN1A6pMJTzDLqpRR9SfZaad3MFufWn4KT6d6UEG",
  "key16": "4jJ3BdJC41PoUW3NkQN37Srk67Zva91hgFwfMWAvqEZj2ZovdAjvdsjVnT2bejZmdkN3PijQ3BL4jKzcN2QstU9P",
  "key17": "5tprshJkNjVcoX4oUKKFNcoZ6M2bhfD2sTp4cpYHsbZXFuqU73nPNE4ytFMG7G9eG15mgqkfgTqapwqjmboSkfbZ",
  "key18": "4pLQTCz3Bx7bfknPTWHZA7ed2QQAvxgM2eYuPZjHckS6nwixRgNUzsCaE7UmNbJQbzNFQusveize52VkRGuVsjPH",
  "key19": "2Gs9MHtgPgLw5f3NBKAYAbaUNRVEQzhF78PstLGXwbZDDF8k1Ukz5YgB1EGiK43ZfPmeyevrLoTw4dRCkJUC7RPv",
  "key20": "4XbHfxB8j6YJL84inbN327dVpAm5k9Kj8u3f4QpjCg2T3seEHMkMUH9HGKH7BPF1zdyxUSKsH1bygG4nvyrmVFX6",
  "key21": "5TizpdQR5CUTyQPLgyoKHKdi4Q5kW4bor1XzTkmb67cR3kKnxJJXSk6VbeJCNTPRHreUVq5RSnr7ekXvqsesxPJv",
  "key22": "5twQiWE5C5TT9ge8yrNTj4kej3MjQy6rog3adGm6FTRDr8wSiaHJWFKvTucQEoSkysjQbWMEgkPNjN7MyBFSJ3Yh",
  "key23": "5gf51TMzzFDXqgc2LVDLd81jVpJ52m2vgfsBzavWso7vzpKCtUyCaU15TLKE8rSHorGBpM7FQUoKoUYcRs1DqWkF",
  "key24": "2BX82MfYWHafMQJy5xcFnJyHduqRVfATLusgDUZcPwbuihXeE1Wz3ajKTjDyPGxJcCAX3DJ5qBy8wkjFkWGkDfJ6",
  "key25": "3Q1HgznkazxuFy3EtdpoE1Gy6gq2LGLVgd3FnYzCbJCGfoVSVWTvgi9KSwa17Je25am63QdiZiHuEXaTTsNp33gb",
  "key26": "4vY9EsA94iy14w39nvJdsCXUs18RoRjAV9XFGKzcNJEzYLFE3MvWjbRqJDsPyZbPgRHLpNc4caxnQCBowjLxRHSS",
  "key27": "54JiCxZZBC5LLW6jwi2UgjRQi4XYHP6183FMGieVXjjXC7pkrkDJBJ5uoMCiTuF5oydTZZJWquJXpKAVJS4mBhXo",
  "key28": "5kbk79pUKiKjvZX8sKwDk3ysNKN1zQXNfJg9R7JSEowE7bxGVxeXE1i9WHk2jYEjZVigmeHU4ivVmGAhVa2totKM",
  "key29": "5nbjZhLHMmtupXyrMM9yPoH4fhDJ3YeLS5Y2wD3UY5g9nQJ5reyfa3ncXZff5eKi1ktweX1k5xV9ZzZrRMDxSBAi",
  "key30": "2cfWoYqSyAQ9P37xJPaECgAmp3TgHfLAU8AKqEDRg54mQxhkbzAefESACnwJQfMXXhsoPogFcRFGHaJcjxYH7sux",
  "key31": "5hVc36JELRfPHSYuUjwq1ThL591uXZUSvNg5k57Z3qdKyPJDhFhWRwiTLa9ufq8WUBX4HzVFx3AD9eJgEbDxnTS2",
  "key32": "is4ASBMzXekUpCU4g8bJN9nZEE3Xj3czmjPsQfTsMkscGBHi2Zte4djspVrNZdm2Ecuh3SUpbskPdGzRTc5xCDk",
  "key33": "4kgRRz4hejavMEk3LP8cFVYyZ51xE8c45rs1WP11NkPSe9bZ6EbKW1z5v7WURk6V124CVAVrcMgTeUSKkuhuxTvZ",
  "key34": "3hDR23hMFMrTCyrL3mmwSMrdnFrJafpsXsMnW5RKGscH4jbLx5josGMS95zCiR3w9Ty4XUoBc5uUoZJG9xqHPFkT",
  "key35": "4VrmKWG45J43tZEsdHTEDvSen1GaMojgiwVEEyK6HX6TMp1rAkyhN6kccqfDkSsg9UbfikEWfLQEv1ochxadWMYi",
  "key36": "5WyM4uMPXPhmShEVyqML4wGRSbUP36zYhU2QfiChdp9cZMxJg8fZZEQMSdeDPsHAnErNm4rTiowy1qwKFHdLL1KC",
  "key37": "VBcL7xqxVUCWfv3g227oytDukrquqyqBM5yxSYSnX2qnNNSjbs3qz6j1f7BL2gVY8GXSDnmSYZosyQGqdnmmNyL",
  "key38": "5JK1cSRKtVKHvLHoDkqC7ThG6tAwRWGqr8zzEBPqPuBgeHvtuuc2M1mChcxjw7b9ecTZwi8BuQi4rGcg6Wb6qfkU",
  "key39": "5H6x5XS4mSy2y3bMGWJqoiruDWodvGB5TTY5UoUXnBTCZKqmbGDDAqzhk6GLb4Q9aMJLZF9PxFik6oUmVVfY5t5o",
  "key40": "4hrSw3ApiUZpKZZg7NjsxpLczownY1ne6Wbj38GVuZL1M3chaG7bQCxVNdsWmz8cAgEt6W4XadYkDVCasYSEgrqc"
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
