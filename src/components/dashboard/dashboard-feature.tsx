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
    "4zvkLynf8ZXQYtz42yyAUz5kXeTKTmamtHGGSSLxpnqMGriFB7zkxkHtMiqBeUWwi75Wt2Pd64ds4roQ55rQtbqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZS8HzkeDcAiSyk67zumGFS3uiKfb34AdQebaaruSJDeS8BrwZHMUXYMMeyWY7Qcc6wWjLuBGpJCb9cmukXVyHp",
  "key1": "okGjucWeCQrfBPsp47rUJX25u5mcBsMDHp9MTk7bw2cWgivBsvmdYPcyYab4rsNmQqRpVCumbaBbrS7rScHS2mU",
  "key2": "Jizqqhw63HLk7pbL1AxnDRuXDW2LRhwzTkTw4c22EDtzKTuBYXt4JznvGE2Fu57Xc2PKHBxA3XK8TSmqdWW6T69",
  "key3": "5mi9p4o4Pwp7FBVcdZtJFnF5rifmtNTXKgMdQUPXQPivebqmKN2Sbs15u5A15sdisQyLGC7SeCEkpvWKe8DjfLtN",
  "key4": "3b7b8LCt2qQKuiGrXrTkeSXwWy5Gu4T4u4aSBoReWmnziLz1TEMQ1jkhpxELUJjiTY1Hn3d3ULeihYrMRh9oXBgw",
  "key5": "4RVgRMAxE8n8MgjfRrUi1TPET6cU1n1pgruoptFop7rcezn9rjK41ZtupQDctfugX6dbz7FzN22s5YLrwuWrrcQu",
  "key6": "yv6dqkiToDUbA4mPdA4rTjmTJjsSQg1aJhqeeNSQ8zSngqvLEtrzL3K5zzdWpTEQdy1Ufz6SRQnaykkKZdvCSWE",
  "key7": "49SRp12qGBVK2AbcrRmfA8eRUDLhtrv6HGkFmCYeyWaUP4LNod6QZidLUTR9qhLsRsr5WFaXgSiU5Fop4icMvG56",
  "key8": "2DtA76HCLkfKWZxWBM5TxmXMnrqkEobfdG2ymEVXuw2G1JV2wZHm63GD4ui2A6Qt3ZuNJwiHrFMNqyDGgnhxGH4e",
  "key9": "2nGYtwooMLgjyfncX33Mp845if5zj57EMTj237bWcb4DvuwVjiquPpsNh7edkdD1TYr6xYda51E8L1N2kjHNGWPe",
  "key10": "3RWr1VC4M2hQjMS1jHASii4Um4EQhYGsyaZBcTHsZkW6Ruv2KYXfT3E81hsYYNiBZMHDSdx3NGUyjJJJNYHYhmVB",
  "key11": "4XuWqKgvCYwBijxjgWzRin7hkWUS34NDcV9YEc4GgH1bxDACVyMqnJN8EmkT25qgZ2XDNgqz6DY4U8aeyhiyN4yD",
  "key12": "3Unu2r5WJTYZj3fNPaKVEAiCf2pt8G2uu1s8dKucyarh3cUAc3kzoyUWDrCSgJ6DtMJh1sEw28KpD2NuX2UnGyiN",
  "key13": "9bm7WNUdKgbY1QQhxMaV91sHyRvTWQxwnGeMEq3mytNxstsaAjyzRgxBgdYhZMgBpkCAt8oFF4LiZvgg9CvQbdd",
  "key14": "t5gm88VfLr9VKy61anDUdpN4JqGwA9LSgzWcUKsbQMadFwaRa2tQd8PYCf5pUdUHdZQxjZNrnWgH18xZ72N8hsC",
  "key15": "2BNtSpMc7mgQ9tbhWhcKetUbdWrZb4tV5XggMKRGV4hiBMDJJVhGN9bSnz3gUdSNfbpqEiCBpPkpLATZkunGbWZg",
  "key16": "2fsRxQoEg9xMFG7J7EbcanvEaCv785jBjJBQPZVCdGqYuGdvmdL8D5foEhR5mapcATQAoQFQ7KhiMFAx4ShJAbrA",
  "key17": "pgGW7rHau25wWaxqAyHsKRg47q8QivHRexZN8K6FfxhgcXHnbU31XQtTBKr7JiWUWkC6tx4EJVUaqgRRdysyUSo",
  "key18": "4Z4V3PvUbzkq5UKS4tkkXpo4bMSGRYsqWBkEf1tyXqAyzLxztTYpYUmGo8iAALJeSRyPqpExyXDtNh5VATUMoe2F",
  "key19": "4Gh6jHNXeso32a9aY8sh3emxjad54MKezhXndnkBqAJNShQRWetNWFHQKnWMYjxqz9mCxm1ZLesJxEjXLwC4xGBe",
  "key20": "56VBugo2rGWuhiwD5tdNN3gQH6ZsRpoLMuD55iSDgf6w655PF9d9CATbpSnHQy4LqteR5c8pPkatBJVyiJpvCtcZ",
  "key21": "3dc5CfxXV7VP7WwNUfK3oYfYthYuqsDTcww97if7eczcAkZMcukYzV3LT6nJoGawwBRrifmDLgLnniRK17C52d8c",
  "key22": "5PU5SpiEggFHwaTuWZi7ohHUDTUs1kKkd4X2LfHfBrASRh4PXJUCEPFjB8ZtK3p2dWtVeBqJxuFhvWWYdyBzv68C",
  "key23": "66BDFTXmLVCHxy3aepbLWR3CMYAXDBigq74G5pL9wktx7yxJK34UuN9sUamSzmy9t71cxwCxhikZDznA2ehGqC3s",
  "key24": "2GmQR9aG93AWx9GPDLVni8Xog7tTGmw3R8EX1Ve6ASPsWHuLmvNCdM5aKokmnaJfba39Y6hykwrjvgEyJCxikQiS",
  "key25": "2UKLQF2ttrKNnCuHUZ6xDato2GPwDvkM2uPr9uosGBxjQtFs8ihL9Aj4YZbd34irhctKMtPHKjxkAfSf7aN1bGQ2",
  "key26": "3zaVcthoowzCqRDeQLgTnivLA5bTfrCn1YtGS4ypG56rvK3GSpt1opNDYvptW9FcFhHWWnMxz65QwbDkG5t3CS1j",
  "key27": "4ZbNDpLfBrCHrh9iMA7dL1RRb69vUtcMLVss29TDYA9ym81zoaA9mejjAdMBg5gXTzaS16dFdr1k6nDx5i9qgHJF",
  "key28": "95YAuYni614iPQz3KdREFjcJCbYFao9TLnFQCe6vjNnDtUCrYYJHTeeGi6mcFMvgmYHN51dokDzHKvZ4aVxaRXB",
  "key29": "3UbvasNKjMzkW1driWiNNr8g7kz13SyLQ8Z9pfTEEh7Tc8fhmZ67Asxuq158q5R1bmfkPBM6J26K3YUHoqUYQJ81",
  "key30": "3jWC75341YJcgsVAouFdvY6pLnzYXRFEnUuW6gvvwyWKFikaf8ii6o2uLv9WrgPHTzGS3pQargVxiaL4ThaTCKFt",
  "key31": "64JAwwAY4dbyTGtxizs71XKVTiXNwc7gk1AEpqryC8ervP33nwjYG9UcEu1iHBgAjrZpbtRzUU5BiDWbHPKJSc1e",
  "key32": "5UeLreBQzMATgnyBw77xY1vH1KqbLBqgDs8nS4ioo3Hi7PmMw6tn548EjGvGSEPKuL9reRAZQ9ExBCMfdH3u9Gz9",
  "key33": "aPjCFgJZKxXmFNNdiUVcKnBAQXGaQWsCUg2eFp4Kh5q6vXSBP5JkFT92buN6YLJjW4pbbsUafkBydPRQF4cPVqS",
  "key34": "3MaSXTv1MsnWc4hvRDVYc1aeJbs3tJgBVNmALGC2iox13LfL2qk5sD1Pwivkcum2keiP41FhDYhcCyNaLzemJKS7",
  "key35": "2iD1xSmpRNtth62LtgorbcS1MwxqRUAxahLXQaXqJ2uhYycq4Lm2xAuymRGgdr7VA9zPn3HMEc1uENwyJj5jpohW",
  "key36": "3XCUgUgoPrH3EgFSW5kUmWZFtYtqpoEf3rPgJYiBxoMNgRhjFKa4fhyCfBDn91af1PkFrCGryvqC4EfM8RjbatpZ",
  "key37": "RMMV7vEbQ7HVhE9Xx6zQoAnqmf7zqVhFFKJCHqrX3hXpPZEwZbmMThBfgHPyJVDFyv2954ZPAy2PwDvjc2LSdHN",
  "key38": "2GRWoB1i6L9q3GV8ajDvBPyHYMVP6ywfSJLz156LLVWG4AzmsCZTzxzrp4fLgHqpTEBcoeLwCLMmfhhDF8uSSEG",
  "key39": "iJUMEjyjk6ckj6F7imnRme7WxhyynFdirZWhtsnr5J16X3R5GmqRwct8sPZtvX7j6fgZS3AwytDeUa4JF15jpfz",
  "key40": "LphGvWKHptE2St5Q2hA1ZuL4BewssgzXxcHdo74mj2XurnQYFQSaKsKWNAjjULhrLmxaH6uvvVPNwSEYYdvqsDb",
  "key41": "5TBofbpwxWfqMTKRonXT7NC7qAQfYkEBVQpgwqgbQY6KbzDVLVADK72EWz6T7Czw3g4SMnoG5tzbaNmJTk1uspsg",
  "key42": "39AXNLE5qXBgu3KjVu7dnBZaR7i7MBZabL3yz2tMutqhexppM8wjU1N1FnZBWvVosv3pjQXSFqwRyWsvadC7DNFN"
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
