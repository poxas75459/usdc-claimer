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
    "2jwL1T6Eg4J8jawi7BhbD98FcngeVnAM4Sh39DzUBDkBDmZuEuzouFM1JHsWqKf9k7nMCegtp6FLN1RNhMg5oT1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4cATUmd7jtzhqC9zfvaK6DeSTEmdp9oU7P78JnhZvDE8YFxhtbpBJZ9TDgVDGU9xYnNf9S3E5BgCu3nfXXMqou",
  "key1": "U9ktpvPfu4BujZyxob1KAyW9tutKCnNN7HcX6674SisMUt9TSbWCktQZtMp9FcenkYV3qzjgXaexo48vEzaR5vg",
  "key2": "4aChmc6QFsdQU6Xyr2sQPkVvZKs9c5fTPAKSw2ZEbTB3mCWYbPBVqFhTAuHh3iyaEuw9cTCWEkV2JwM1jgNErRCo",
  "key3": "2jzzynuurxydqKBYGK6UsWT7v4soR4vif8LkUFprCbCwCvNXmMsYZWmeSmoRw2DvoJz1tHrr5MB21PNfV7aubksz",
  "key4": "5u1DPHATbmZLy8HZcVyg3nCVhC8rxwZvhkyJEYxZVaAwaz8GtzrW49HsU5F2jkrCwQQ6cnPtB2sFF3e6FFz6VQCi",
  "key5": "52WJwro8eRct8mddVJ6YmFU82ftdLFi6uyeKjG74bP9gaEGCMV6JNe6FLRNwqhBWAXYWQqCKUF6LJ2jLZpgvBQgZ",
  "key6": "2YGAZkFvifduk8oiDoEZ4zGZ852czWsYrNc7rVNnkKnGFGFad4kPZhKHnR1rs86hpTtrJWHdQ5ymp7CSHoLX8bP3",
  "key7": "4y2f9dPL5TkoVHpBajRc1KPVRqQapqsqnDHanBiKVsr2vrz1XTbefe8WmsGA17rnHsm8ZSU9naYoCTWac3pyirQi",
  "key8": "2xy9miiKCTpQqXpjgjFq9KTNK9khKfBRHcQds1hSAcbiLhNzsovQK3qZfor5NF4qEW1RNawVmut72A7kc6JDgv6b",
  "key9": "3c82zXjyu28voZSf6r1kVYZYzTH7jHpg3ujYcEKi4Sq4LwAmCxjM4MXzAY7nKvyMpmVDZCS1TY6pzXtrUgGaQQ6q",
  "key10": "MujibCWwxdVFvn2fyCa7vcaMwNqByMZqpDN39e1Co1GiKaHVEBLVVEM8EdDuL6dx2tgrXDCTVy7NvSoed6jw4AM",
  "key11": "3nLmPkfC7C7TL4v3x5ADMQg1M9UiPZRJ4jRYeMiZNWvCAzVJsxSh7tv34h6skA2uBWWHmdgFTkjStSKaRHJHc29T",
  "key12": "2RhvTvQBTNc5NyXM1scmswPHyeijcYv4SSHAyYxFnfV3yLEFocLBCYrKky1uGtRRtPpngmwrga8a4LdWedvi1ZRr",
  "key13": "26vdrusr3b6PeLtocsZyvstEpGLX5RHKb8GeUDLdVxZ8cDMWBsKzcgf7fuFFmo6fhNpA5zmSTgmimoC62EYoiQvX",
  "key14": "3wdmvmbyccjEYJRQZTiPA5Hc6GD6zTvtqY9JhEXP8EzirEkiSwDci9gWa5DWcMygJVdkEYMahC6syEXWnRMPjsck",
  "key15": "4ychQq2fNb1Vmxg7hShnKxGkLRKbYcXn6aGu82sJZoBi4cFC3D6jUGQQRfgTaCfQaPh2KB17dHeHcrZ9YUB1Qu63",
  "key16": "4u6T4KGN7PanVttuN5pGvXLvRFzqEPWPXeaNjVFPNxN3PSwtmytt3a3pLFiX53sQd3xBTfXGLnuJtv8oNViBAsbx",
  "key17": "3hJf98cbA5Hjq7j879jmpZH1JwE44J2CXVtmEmTYuaVTPsTcYpFj9EUn99GVoKGXkHYTKuimNF7dviD9ZG8WTshh",
  "key18": "244QYQYGV4XGdX8Y5LyrjwQfaFdGp1fX3gQS2kUPip7dgJxcnWupmQABmutunDYHzMhBA54V6Aux9SY1KnACZh16",
  "key19": "53MscxZir8PmRxb85esKtrLTipR1NzNh4DPKC2KxiraiMR6KHSJZfV5bD27VQQ43rNxkYnwcK379WK2na95VKWj3",
  "key20": "3nrsKixouyZgvMZUawAyw28A4grxyW1ai8PTGFCxCZobDhSqFowXqnWw7WFdfd7HTdpecDF6PXnDZwdKvBFyx68S",
  "key21": "TWRFqV2WiUiEdZhV7ygwmebZWWYGdrwuNnsgBmHYyA3F5qtbn5G6c6aJn2CwzA8LstxqiJVLpZGvQpu71oSE7nP",
  "key22": "2EMzmkzAZ7evYLNG34FSocCBvHF3uGFeEzGNVAVgP3iURkC3fCATcqcVsRE2fGLYLQSx2Y2tvaAnHnfv4RAdmyMq",
  "key23": "5RwiehgURvPtPqtvB84tEe1iNELxbuQqVKtyDRLCoExsCaxmVg4TStYjLFWEGrkyBpt8KkvyWeTk8fT1JEJjC4YW",
  "key24": "YA82hWUYKoqo1LeDxQWf1w9E43JV53k8SosTTLt1HcmQUZZHH5GrT5vsUhyeTU2Fz7yodSWXkCwY77zbwWcbZGe",
  "key25": "5EimbTCTNVv9rCkDscEzHmWFfQ5EjE8KmXkCgBbHZ8U5vk41FN9HvfASj4oAB7DhXWRvMmokMytXfyXk1kF2MjMR",
  "key26": "j22pj78UwQTs1Ai4jsA1rfmybt3RyMmsEi2hebtj8rccGXx4jBjJNZBuK1XsQEoxf8UzCnTfiWHsH3AsfXSE5nX",
  "key27": "7bPyhYyyfXMvsKnJF5VLaf6CenFsWebqF2fvLWsFGwS85MW9TvDhaBqv2EBhkBATAfiwQ19muRFqF4JhBUxtyQ3",
  "key28": "58C3hS1c4GptgVvPx8JrCTmKBYe11pRiMBUUQEe3tG9vDM3DGvHbVFxvuzT9zkoibcETH86Rd7yzxXxeiDmxKa2U",
  "key29": "4kZyJ7An44nUMbb1KaechE5bkAoJdnetuQh9aFuuqxtegF74CH47jcP1S7zjz2gqWc7dPLMpzsrg29sEZY2oE19q",
  "key30": "5FNsorhBZWrR1xDwCfJnsmriXeiuZwijWhXp43LLmeLozBVLisHb5EJzb68P9xFeHB1tsg2kqtrJgGgC3M5Dxzfp",
  "key31": "4cRtQKzEHyCQZKQtjymGw4FXFzritVucQQhQtz2W4NctWgLEfoj8EqHJaTs24eJX2zB4XXFKMNADtoZpSewSCAyd",
  "key32": "2L4MDBFcLKqHHtC6Cg5KTTPDJP5JrCJeJzqRyr7AB4juQjXv1rXhYN4Gqu6twEJQ2tnf58Hi5T3tpvYgdwv3cTyt",
  "key33": "5xSzJFyzZip77Jcpy5JJ65Hosw9LpdhYvupjqATV1L9ftADjr4wPkw5kauQ81QLSg9GYKHS1PLqaAkTdk84RbWkf",
  "key34": "228W2Tst7fT8JBnnQyC3S1heMnQpFZorydYkMGvCZn2YDwmDNd5MbuWN3cLctijPFSpFvqKonei3GTjVNAutGUFA"
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
