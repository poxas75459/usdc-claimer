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
    "2QuysEJwRtvFFMBLc2uJmcqWDEtoHRVKFrnwbBwNesy8a7KkUzMFn3K7ZDd8Q1wi6xUg61RbKwTyxQiYJ4rCV4fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUWNRQhADw9xVk3N29hWcj1F1jm3kZfdxVUseniqQfxvM9z2hMmS6hhZugpnFWuMac7GbLdD9E9dcM2bbPpxV6k",
  "key1": "58VSkCy6TA34s6wF881SzBkdUhov9TpoYiSFAYuyX7zx1ZuyWz3jef2v8HmwFmJNrRr9gZS4QmRiuggKFCuGYi66",
  "key2": "5bio9A9QkBVpZo4tRRyYQHNhseTmgaWFhMVpHMkemJUo5z7wZ3UwbHhV3x6eQ6ZFbGnSDRGySDjgePqKtjmhHRuQ",
  "key3": "4Q2LSE8wLu5jQXGrcbgfnFkqqrNxw9oG37k3wu61XEyAQwjebTJqkwQ2V3sL2dAcUTFZpZfEhKhqAQxxkQPr4C3b",
  "key4": "2Zh3A67x96WvAob6yesghtbbw7qYLajNCh238hwxMqEmjbzWBYfETx4DGTjZAzHQ59sMLqcUC9yKRfu8Ff2KNcmP",
  "key5": "286qELfeofyuqq8WpWttCgTB5jhg93V9zea2tSustrZ97SCbVg78EVtntCtYEuL1Ao9WEghScKX7Tk59uzEjqEu6",
  "key6": "3CLoTM9LwSA8wprR1i4FcVmWHdDh9R8kmqCkfggh5aSVEWHvGrZ7QfcsrbUVsYZCF5CgWQbLXCoHcXEDH6ysYbBS",
  "key7": "2XnwpqgVwgBpj191EaGbL28Mm4Sdx5mQpxnXFNcUA9TFaampsG98CKNFKFiXzLjWB6ZYkEPMcQSwKUYMHksJ37GE",
  "key8": "25mMFXgsZbLua7bZaumNYHxUXaV5v5wjQfkhzdT3rhsXkpwu79dkuAZCTA88ArKkCWZbaPewfGW3BqBBjjmsE7MN",
  "key9": "2EbttJT3sD8zbrJRdKtC1q3pCyPizXNAKLy3hkbaLhnrDkqcKsRzBreDpjui1ZSdJRAiz3ezWnVfS9HPqvzkVvWW",
  "key10": "i6naafrJ8bGdz5Rp2qdL7zptj1CRfAZWxPnWP3TpoC77DMgihp8tppLBEo8VoTwxhXPW4tgP9fjaSrr8BrstJax",
  "key11": "62EM4nvRVM17V5ymvAZGHAUVx1PS3QeKS9avN3mbPdH3W9X6c2VQefuVgVrDeXEfX7nGnvqZATVZMawiLJMjinDe",
  "key12": "25UwRtQyXMubHz3QtfKYiU5WxEK6P7hxsnTEFHoqUrgYDa8cjtg6BZakhT5vvyfd9nDWeMLs46CBgWuaqfofbziK",
  "key13": "5Rf1qZYTzGKY3xRvx6mDwWWAAXUHDBtrL6RberekYzjiajJyjJZjJ8omdC8gNWqYQkA7UNoCVHhZ9ZG7wHMEB5KM",
  "key14": "5JviUELSuE1mta32x3oX1z5o3CmBVLjQJpB2xpjXFu3n1bpmNKkQygjiJvuBhmyK7Gg111GDE4GSbWr5AURaAsTt",
  "key15": "2BX6vnsHtk8EoyE5RTMkxzAQskgM8BZpsPH7du6xT9LUNTNCeJAWmpPEfrT3erauf6Wci5XoEgFZUbwbSa5rCZPX",
  "key16": "4CadVAJjEvbgqcY4wWFTHhgZmyddkefuoaQjvTM1ahSm1vJLmt5NsA9ZSjxPqHrx5fJ3szv42dQvSVb4FDLovuiW",
  "key17": "9N1vxgjKgrrVjFDPKSCpJjAazAsNj7HxoEVXSBt663n6k929pbsxMvy4sijYXXooUMpqBGECowfszaFHjUyBEsD",
  "key18": "3BpUBXQtUicYsaxP9igiyxBpT47JHXwB6KZmJEbZvXkKpuG3AqV48kcNmCeHe1YnvtJNqzPfHhTGAZfFcYZR2444",
  "key19": "sxHcP9hh6Zz46Ccr9vkTv98wiYvuaAYaKDWEnDoFNLDkHRCLPzN1uFx9Y9orz5BCyyMnLuCYMG1Ydp1CWptH8qE",
  "key20": "2decBNvjqLka1CbDLVMaVktzk8RQGx7NM1q4vZrVxtoAf9VoaNusC6p5QAdxCb4afb4GXnV6AV7ykFjZUqqwZgYT",
  "key21": "3nJmtqa1dv6wiTNPExYoRJNM1vkejap7bB1dELfW9v593pt8RNshMRMKkWamtx7gNXvSLTJAR32BrxFLadxUHRc5",
  "key22": "56iH9pCJMtHgX658dAhnV2foaAGw9xmcLYfH9ZQR4SdMMSrsJUkaqhwduDQKupgZqX8sDeuSBDUFAEC8a7yqvqru",
  "key23": "jqtrCofWG6dF6RkPwvmas6DW4ufhqmizUvaE3kxcrigFmkWmy2zxVaKbdSqWXPwwSSJWBzmK6GBRzr9iQLCnAfk",
  "key24": "2YRAQ4MrKrU4VQ1qdWMcFwhfPiDRfM7XwopmncJLC6aMVP2zT28uAfrewmU89nTRbQDTSJbZ8R3qoZS33L3jTTEV",
  "key25": "3ETE8SeXDME7AdvLiqgTswws7bs9nEqr7wjYNeHYzkasVKPTmk6agHxS1aSaUxeaxAyvojeS6mrKUUUtsdU3rN9T",
  "key26": "27u6TKt2TyaBqKoFwHXMZxDk2LKREFm36AJLXMfNxSSLnpybyW9EMywhtQxLwnLwLDVt3Ps9DAtXT5as1tVr3oCQ",
  "key27": "2T1jfqxwHsBRzasNq57T5KHHT2Zf7mUFGoD9wcBbuKCnbhgPo989DmRPd7WqRY27gidTdj3imTAdyqCpsZVhzyJz",
  "key28": "BwQ2J1RW4s97n3QpejUTE1yCBFz9FxbCvM7C8vrktRe2AMF4gYQYw5yfqQgts46biy9x7W7KxtQkCRgdtPAvATn",
  "key29": "4h6ZWvKMdyTE9tmoKdoKqhuYHuLxrw2RHgp25W6EiVtZaNmhY4gMLMH5TMSp2aoi3FoD75ejCW8eCP1TCL19ZUs7",
  "key30": "2R7zuPKWjW5zQVLSr8WLQkBc4c85ofxBTryqj5hm9aqXoBzpWtKeKnhJDwTJa5dAFhJjXyvizzuTYGf7WGzrGFDW",
  "key31": "3pYK8EYoeeN1ByHRMvgeRWXNdSkeUVtATzEVgDvWMrnn7mBjfTVCBEFhGo5JUozGeL6xBMY7hDQR11h7p1kwrxsB",
  "key32": "38fq5K8ZH6Edaapvyi4LyM3BqEjayicXqz2jYgge7Cyj6ejxAYqJW46zYB5gyocNWCXczuM56eoJ33bNqc9mr4A1",
  "key33": "BWjaquB6bcKUq1G9F5bZRA5Xyi1AMw8V2Vt5syXofajuN78WxbPurGf2mxytSTVUyDcCMAsaQtAmrRq13RFFNHb",
  "key34": "2bSpW5XM6yrJH1jebT5gmrBsu3Z1KGzmAyJDUzxbPnYEwY1RjVeNoUVc2dUAXMddE4FkjheNVegrpqJc6sjM4aCx",
  "key35": "ZQQrphSSY8xUmyAoCL3Pz5UkUFUnfTdd8HhsQqW2MfxwKDZ589txmvhuNvgTKsC61X4nQ6ppj5D8ymfgtdxF9px",
  "key36": "25DLSkDXW7irg3q8rMfkzvJsNUyujnq3V8T6bQH85EsoPXuR4jziqGN3AbN3KffK7oAgC8VPVPS7mK4tVqkCMuyZ",
  "key37": "6koPvY9KLp3ok7B5jB8mrbacR7cSrnj7n3pS2CsHVc2MueBXphGPvvTjwkpG3Qx3kE7bAba2xtZbMzrXFpYcVtJ",
  "key38": "3q9Xs4f6TJoHhvQajWfQufSoxv2vuRtkU7sRFWLT3PvkV7TjPki6Dt7moZaqRsBMmfkctGGDjXFueBJ8nxd2XgyG",
  "key39": "5M9PbXDDbMJUntduKbjK2gvPMgBCLowirwqKA7NGq4uWLSBFNm4mSwJWA7Hn532bKnpsjusvjShiWadkwvLiJkqy",
  "key40": "FrzQhpvLhzHfCsC3jLG6sKZGcejywF4JnvLbtCGCZD3RAvSxjDs6qy7mYt7j615Q2yTYFWg7PFxHraTE2sVJtif",
  "key41": "44nzmhgJdXhkQpymm2Qij7zEXxo8Fq5QLJuzoE3FoJptm4HCrhe8Cho4G3PXo2w7fvoJZJpBADuTig1owyeTkw8W",
  "key42": "2qBcz7yn9Xk2xiGQFQjpGnMyv6147a4PXcKgGqKRf3FJJNUFhVvSMhQnEBWVDcGLU9Y2rWbSkMwqYUKiZ48Sr1h9",
  "key43": "4QM9w95SWp8PeaDmkeW9t5mna4aaWs4KzJATsYQ7n6YVPZsHeJcEiCiJ2USpfzVvjwPr5CbWsk8HTdpymA4GVCqu"
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
