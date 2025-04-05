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
    "5aju5RtaBM5uruRxssMV3KZ1Da1dWjscuLQUumLwZ3chebhBT9ES8Qr9wZfj3Zanw5T61GJEGu8GXbicETWBQsF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVQoANg5G4nsC6noXEFfYtCrcdRE52TSdv3UCMWNMAVxLMMqM5oQRC2LeXLrwLZdg2JFQ5K5Cr18nk6HA8EQcpY",
  "key1": "5MPdeAdaWfuxwgvjzpfKzZ9pb8SgBTCKgdd6CqBhV6Ufd3gSpKBoc3Fg7ccAsW132jBMv9TDdWrxW1z3zALayizP",
  "key2": "kXQRzteLPJ8KadkAQHExVewx8Z1hXQcAg9Tdd11M5wfTbHTcMzrnzheiSDeScEHzcPqVrAa6BGJah1yVF9vvhGy",
  "key3": "3sKdz8SrixSSHk8BQpvbBELaZM657xQxvvxfW1jMxGLNrmnRUzKwxfaygj8ijenXQjMiruAjTxYmw7LrZbGLETS6",
  "key4": "63XrdTH6peJze61fdZDWm2LGiVyjGWJLJMGGn8BNYTTXvMXyEzR67z8pcZUeBP8o5Wzys2sFWvXgdEm3evecVA86",
  "key5": "2GjJumRgvLjLBjnLPk9jnAaJxofgCxJ3QCeiQfC3kZuieGvWZNLSK9Bnu79SigyWLWqpVg9Rscy9aP59e2Y72967",
  "key6": "67Rwe4FNL43LdUVhAeSrLtwx25JA9AtvG7e5P7NdL9Mcn66y92csiNjhLzqnWV8M1RHAo8rXwc7xGpnFyFgEofXA",
  "key7": "43nJj2ufU8rikYthDfgCJdj7M5AyvRhy71crb3VgGvNeLMHrtEj8iujeZGnLsUmGaB7rbM5HhBmGe42S1ziRBypb",
  "key8": "ZgpU5oDW4gkChFskXFJLKHUnDsDwR2VGn86uXSet1baJCJc4tYw6DYbGQr4LugLBJeEkseWgNZtfqgimiXnbEKd",
  "key9": "5XA9Dr1jd798DpDLqhwjZtoHw9dKYYKBr79gXWe2LjCEewUVzuaVrsReQKpdWWd26PqJ6cSDjDnVruCp5zdKvg2h",
  "key10": "5MXkFbhnsn1GpUkBo4spaZ3dzqhMM7jWJYVvDWvWW9LBeYnAyvJhYiKtUXPxUXUovybK3gQGdYawZsLkwThYcvLF",
  "key11": "Fo9dET5Uikye33w31NCRJBNxzWVGoxvr1Hu7TpAsxWT8q3qUCrk2RhNnSDe7G5DjNihtzQnQvhHUkLh7xcpaU3P",
  "key12": "3gkgMk69YkGynNLv3yX2rEegaEphpmEEJZipPpL64W9CRrBKbUy1vDd2HJ3ritEbjqmWxnwiLBxbqJeDYKLK5ixb",
  "key13": "42eH8QHjVNjWhNTAQe6nF3KVywrVXuNbqAwgg4C42uikfPD9Bnn7ccjNsFsCmsyotxV3CHa4eh59xPdEdsWzhPr",
  "key14": "4Ej9pHbEBJ7UXbV9WsPbJcyMS1zYudp4A7sk5n3CLXcfJ54ie3dYMSqwAqJR4CaraPedrkxkJpeWH6uagmMWDnjG",
  "key15": "5P31TR4XHGFfYU5TFefhPCGjtMppHZmg5oC9swvq52JWqPuJsBBPXqzaL2Xb54AdCpJ6gUYSWRsB2brWbwQoow63",
  "key16": "HXxVwDJu7o6vrG69sp2ZDXejdvotUcxcYqUskMrDBtSg5oDq3CgaknJQSWhBiqDWfme9eCBW8J3Hdz2NMa2W7cj",
  "key17": "4CrgVumqPaJUv2re4x3J8QZ39ud1nXmS9Lruxe634DxqaELEMsZvtAGZBsdKFShVp2Z2aRS5V78nSSdaEeyeFTD7",
  "key18": "59tBd6fjYD9sobQGBcsJTkFHC4Mu7hqA7TDv1r5cyVXDwWg6Dh51J51kJcFkWJbQauLdgDPF7s6aZUaRtb9kXLv1",
  "key19": "4e121WaoRkcavuCX7ecBKHrzfP5gCGEAGpWnHfAg9NsQHNQ1eMebPsTo8k44tQxfLLebKZzgv2ueoQSwfLBwRZXg",
  "key20": "2v3BgRuKJNxrTQFwEmLh26zfBYFPac2B1ZNpwsfPm6rXKXCaPeDwig7vbShAPe4iMSvsR6eoPDNwWDvWFvdhJtCT",
  "key21": "2Bw137z1tLtaFdkFJw2NJme5odLW5skGJZ5vjSN1wMFgJ5NWevgzF4QzMk7ZkzM4PJVzto9KwVg7L93oN86L5k2F",
  "key22": "2HbbyNPa8NMUbJQN4wf2jfEYPPNQmqvYJxByhqFsSyhShZCPFmskQoknyKXJGi8oh5BVZNDBq6zegktvSbG5QhP8",
  "key23": "5NQfJraJFbXXAHX3SQZP6vgi4ye3ac5Yi3q21fx4SzCSrxu9aaLadmmMPu7k3evvD1mPN36KYMgnA8683c9oEp9V",
  "key24": "5XCqWXqsNZNM4xPHNg3BUMvStLkgRjwsxLmSXPQ9MRQbRJvB1quhgjKNmbvTh8L245PAZQ1LmdHHsPA1SHfjKCyF",
  "key25": "42skAzqSmQWwuWyxMAKH3tpA3bJdJjR6yQaJcddfJcrYy89vMHAFBbXGJ98JQYGe57kCciUEjNpfLmCZAfyJiMyc",
  "key26": "5w2WVN7etkqPhKYUKputYPPLi1KPqiVB9VKV37Ls9FZHmJkDqr8fCRfuNXJvs8AjHytDYQ7tdLsxG8uosNReMbCU",
  "key27": "oCtVA1APLC9uULwLQDkJm9peTpQmgDhudDNCLcNAUJ65GXXBTPKTfkG5skXVXMk9vcQyAQGrFvM2gJUMqNp7wV1",
  "key28": "9HxxWY2DWx2xe2ECb87XQSau4HFAuLz489jpQBND5T3QZ4P6BWgdMD8iiqNAtaVx3Jvtb2SuLDuqxieoNUDZd95",
  "key29": "2fteAVkYeTAoeLxvBaX2ye1exC9qBCJmSmEqhBsDUe8EAt1pij7GErQTup8XGtkzW5z2wmXoapiwzUyEMerUYzGy",
  "key30": "3xJZc7RnQjtys4hQpnVgP7o9JCkBP9tNcKvtrBgApi2XezwWS6YiACNQfL5ApFqYbJq8dmu1YzMt6Skf4z1WgCq9",
  "key31": "5YAfWy2Snte2wXB8V7efUqNc9Exyje69TwEvWGbLtetnqrggj7B59DSesgg6fkdRfANL7PSetPHHVkqwJY4R1iwW",
  "key32": "3vD5J4uXZMqRPKBoPXM22eJpup1xNC4X9ixSDRKX4NmDuaTPYw6F6hQCmbKMpr8sYVRUZraJ2NSLhai4XJDqmznf",
  "key33": "3DQDXQFG1bGxmBQq7eX5weoZsZ3cp4wRjidBbbXkJ86Jv6hYKycRH4R8qXnA7G59fg5m2P6h4YXt58paRCae2HWV",
  "key34": "2qvpDRbiVwNf92jEyuTiq2AwtjVYFRNgi9jwyHwwQM9KJvZpwtPHaEaDrzpxPQLcpKVM1L9rKR2iE9qZWzGhixbq"
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
