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
    "RyFvV7DZKTMJbcL5Q31HmxWM2ndsjTs6kdbTEuerDiEkqPYnoi9aouAX2taz9iLpNCedKdy3EbyeTtvnSBAx47B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43nAaJjH2nocSbvvT3UoZgqc1CZmj78uSS1cUqANzQXuiPzdVQVL2Kknhm7jZ22Z8pmguCY9LoyTz1X7J8YnLN1L",
  "key1": "3jtYg6xTKj6trUeQZaHXUK6ptV1PKYYYppMH1AtWi5HdtwcJTcKnLX54JhsPcr2aVFMe2kKgrcz65oqgKcfLWLzG",
  "key2": "58sU9ANGMxRJwy5JP6BkokcVMzS8i21fiingFvpgGJRsrh8LmbxhRA7SNMxNd1fHY1Nhxmik4z43zCtvL8xHW1dS",
  "key3": "4i8o5P5oLHyW7xzkTXW47xW3J3dgKj67GPetqeN7Xkds5tbd25eQpGC7KBWkykiKWUXQN3vfQ1sSngNPnAa1Dan6",
  "key4": "4xDcoJPGkmymdDFE8G2w4HW8kksK52zuwdQB1HmyTQmEhd2mGi2zuYnX4M5rYAVD1HBzjTm5SEE2piRyuBXt4ETf",
  "key5": "4iF64jTwNciKkkCEGeYR6areaVTpDWZGcLNPv8FdMLWVkicG98dDZTmPWbnyohSABe6kAWmK6iJueB8iAwQ3A7aH",
  "key6": "2nrhc1sRSQA3omQnbTKtDMnJioLT62Vo7v3mirtnfZhobd2RTXbodofNvTMAR77SFf1dxFsmvjFHn86wutcZoVJV",
  "key7": "25s9r5WRQBAEUE6EE13sVYmqXPLZ31G2rpZATaRT8o217ZaXMozHmzxDGpmjcFpxdqL5F3iUro8VZVUedz2Ts61A",
  "key8": "4fHdRskkjvog99z87FkE6XKZS5qGxZco4KvK8wrEFVnJ9kEKiKhz2ARiEAGsn5tccv5h1WbCENyUDumf6eFn5cg",
  "key9": "2mVQPVD6Hwc8r6HwEBg8fk72ZEyyd1hdrXvQoQyMvkMwZ46B3em798cjyHDEQ5uPb8vfxQXakX5ZPmrhU8JNExX3",
  "key10": "JfEFDNx4a1Qv1HM3WNtbtmRbuAimqWX3eHxtKyYpyboVVXKtiYhHosLAPZvsk1v4CZoUZYTMoUHw4wNFWRcTtaz",
  "key11": "fCW6S4wQSfABxcWMzhyYr8Ye2Tg1o3xtRM7rXdpSy42LWPmuow33Lpjr1Qa1ajxtwWvMyQmyhMynzhnyE6bTZA3",
  "key12": "5j8novXLKU4UBkEHLAZGCvML98CQamRyGi5y89hsiFFuZvpodu38kh5EwVFnvaCHsXEERFufDTF8xjPGEVSy8Gct",
  "key13": "5ioG6VjRk4mFHoMmfyKBnYwq7DJGjNcdq1qfAjE58eFg13VEBpfW5esBhSL3KsAtxFpXLKAbGh3JjSemZAxRN65c",
  "key14": "4ZKmvdDrCQKDZXnhQuYQ3pxS64VWehRWED4Ly2PMPhPMam911te6eMypstJeBKijCRw2MeKFHJ6nFuxACfCenmNP",
  "key15": "5phVSFmtge36pe7vqPEo98DFnYwMvJaN9Q2rAsE9xcLLirob4qKTWX5qCvQZkggHL57C2AixygQb99q4VgxtGSDi",
  "key16": "z7cJxtjBZYHuX5cVs67mQzrWWZQBnA9WUoZrCMf9kKpszzKbGG67HEnEBVGFcZjusmLAkVbZ7t4NaWtjK9Wckjm",
  "key17": "3QRiMBNPJEWKYQHk1uA8BGaUV9tnVL1HCk4qAvivjcQuqZsK2V9zwSv8ZEnqXuLWUduUWyUVsiNvhk3cqVMS5KkE",
  "key18": "5JEa4Uhr9jg3dLFpLshMkgw7wfKzUvekpDFPUfcZ6dPhnkH9Zn6FLX4hhffF5ijuLs9aVP4sf1JEQRMbySZn59FV",
  "key19": "3U4wKB8oMNuq9SXKBuGLVd4rQrWieemazyjLKMhhsayB1qmHeA3A9WEJ5By7wmEGeYcLybuAFi6Cfx9PD9FLhPtD",
  "key20": "65obBRs3ML46TnVmtYvwHukiJvvTjqUSQT7AdWNADGsTu6GA7RaX33q4frtVu27Z9ZXZSKF3TW5a1yd1Mi4bfkZZ",
  "key21": "2eJKPRvhyavEBW3ykYQ9rSEhqyzCHZoBoHz5Kx7aro7B3VAB8oUsTdgpf9exDcEQ7mFBw7FBoB6J3xLFatWW3bHN",
  "key22": "43V53jseNzjJ4nLiAv26Uy2ekdzZtDkDC3678QyGLYREeyS1S9ejWZGnHE4GTBBPmjD2HYsxvqUW8WVLRj6Z6Ds5",
  "key23": "eooW3pQNABYrCByH45BdxX3t1SFPT5RDCyrSKFfBW4kkh8Ss68ykbpgSRAGZ82poRGxrfWks9ZWwa8xTUbvQc5s",
  "key24": "hscjnWUeXpjecJGJsXoPqC8k4pt8VcoXuWzsN9wvwFxMWzfxvHVZjULXabkpceUPrzsFwFmEjFSnggENdhJAFBy",
  "key25": "2M2gFp3s2PTSnzvWmZigDCUPj6Nmn235rEAeN6mmXS76BzPrFLtrZwfYiEZDGDnBLkxgZkwpJP3rnvY5Gis8pvy4",
  "key26": "4jFUD5EVe7FBBcSdsrmzdGvMfheadHsPr3XdHeq6SVQpwDEqcmGt8eDzrZM6GN79JHjKdVhCeKtz8npjHTfDA7FS",
  "key27": "AdwxKk8FBCmhW2NH8ZFR8PK3X8UApWo2H1xAVyGC6QLGbkHhjvaGtohFDbkxQSTnoSMe6R8pcgvZ6vZ5ib98cZX",
  "key28": "2QmkB49bZnotzEMZFq7Ejngv45SUnwTXrAAzWDrz9dCG44fPFuNCiEDkLoPCUXaoWHKEMTnp49ChQDKRMVApakpf",
  "key29": "3rVrqSiTE2ZZAtxMzePc85bwUJQ1o2e1fg3HNFzc9uxmJHRcMrLWfc5X9DGJ34mcAcn14yDXKX2iUyLvDdUgWjUb",
  "key30": "4VP71GWJ8NJDyhkknL5oFhpQL528tHap7Z9quagsasUHfw4sqQJ2LKV1vyX7h8SMqpmLTMSywK4S4Tda8vFb1yPz",
  "key31": "36kaJsFSGt6PukyEXT7zB5Axe3Wuexb8Zq9j2euByuFwoNV17dvKr59boFJfcyXHaujU9uysUvk4TJWBNXPiLU1V",
  "key32": "h8Aqe1jDwnb36BrQUDBfSc4HVpwnkJm6Z93tNAmYkFuDK85Q5SXFNvnc6Gq2ibUewWfAgnMHb5YYrp1pwucWVWg",
  "key33": "vPiyQsuoppLexGp1Si6RxV8tyXnC6GQizF7kmgJVyNxGuBKU5nicuwPejUzpzLrxV6EZEqkR3NLemzVWzbJPoXR",
  "key34": "NN49hjjvE5c1PKtbvKGtrLAZVcCmTmZEess1NUrX2q3gSSNrSdq6UmEeJgePMo9x9H6QwQEoPR18iSr49ATfSs5",
  "key35": "4V2NoFhNdHjnbfQJvqXHMzmLbxnqG4WK9CNsJ1rwZHW5Jkj9xUMhFwHKvgsKs3WaoqRi4hhbNQs95D28kukYMsBe",
  "key36": "4hS1trRTyBEJNNsYYzWpY1ETV4sv1JJ8MwsT8w7QEUbjg4BJLd1Jd9zwK74Te9XqwtRrNiMgQCJyNEFn3XS5sJuB",
  "key37": "3mNYeWtYvD1KjmBxiSNGXmjAXy7YUerw2DTym7WTNajLe91JC4v4a4uLqjhwGdhWwc1kzsTDBnJqetMuNTUHY1L8"
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
