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
    "4VYVM6EQsJy5i695ngSgjymgxTTZPjS675PYC93K7jpUStnDFSqJwqq16QftvD1Y8Nic6bNCRvmhYSTn5RRxbx2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqhRSVzrQFArzm1fk8fRA1rMqH5C4YRVtn98x7XXeTYGdSfPfsYETkuZmswogJM5udwZqZvxMExUg1Y9Gxggu6Z",
  "key1": "mEmVncuWbhMUNsjgrweKJdoNq4K99RPXTt1AdFbbAiWtAgFMut5WbbJKzZAXFRHVTsui7jBeLrzhkBMVHfoeAN3",
  "key2": "4jawCApvsoa4J5zkfkQRqrarri5cciz9zC4RSRZXj7i3nemPWLoJQcZzJMqt7EYUGawJuNX6duUUYn7zvGnoUXWf",
  "key3": "3VRdg94wqrSNzq9f75rgvoswvKFB99tPM8kR8rsAPvsioYkpZaWVmjVgv4LU2iLMEyoaPwv2eAwuwmW7949XfH6a",
  "key4": "24vzZ8wtAuQo3tNP8BBeEsDQyVCQkNzpzn394aFQwhXoqanfNA2FKjapJFhyfUUmTfvhPkfbkMsQ5YF1HuKM3tGo",
  "key5": "ifLVerJYXJ4b6Ahc7yPDypTE25A9DPrbBeQjjEB8EjS78RGiqYUfYJYTsy3qT8S7iKAeXravdiGim2ixC3kwZCo",
  "key6": "3K6fG5xBAPfHpams4cLAbFd2tYvBJYzWkeZiwziFih2vc1mam1xmYV3MaE61EMeSNm3jqNt4YG8BrKk37CR5DZ7G",
  "key7": "4iezDaEv8b8VX2SHXkvjqadHinVAf1z5aAdzS6aYzqAkKyKUFVLyXg4tvwroXByN94ZGhVZg5BNLR8trSdmQpVdE",
  "key8": "2zBtqELgsTyjNrqagCM8L73fUZ7nFFL1eunLhhGTcP8G35Epu37YRYVfF2em6beDxBcukNTmxa8aiLM7gAgWN3kh",
  "key9": "4PNk1odAQTB6L9Z3xNg21G2AxTUsB4AYSTUPRMAAYgF7W8NrdPLBrz7zUnobrjyK42948dkgCtey6eX9JQAWh9Z4",
  "key10": "ECDVxhbmuHtnYcWMu3H1cCzCe1tRyWEwHBhEdBaziYGsMP37zQ8BEzGAkKosWiQBwJsCJdysrWFvkXo5Mcesw72",
  "key11": "21yhWfxwnpdmzByQYr3AUVD3sNHu4BCUH517zrzE4xKPSv42wqUeMe7hZZRsEV45AVgt8EacJzF2ZvhM7p3SPDZp",
  "key12": "4hwohTjPKdA1RN8o8qqApxnfxA8RnDnMRfCqiugpmhuwy3wN841aBmiPoJWZiqWJrUzeXgH9yPfQ1PdJnaeDvdzG",
  "key13": "4b7UnG8MPfowUneyA31Hz9PJ5P85nbVYHT67qXfrFuPVxEDyuZJ7GpaEJ3e3xLGoBx4D915oSbt8tsY2zEEpA5sS",
  "key14": "4PTUQvhkyNPzfKQ7e95V64Qm1vAwur34qwMGYdJ7KKs9LYvMKYwPJvnPbvq9bo6mWoAvmFKc4fdNMyG7WmYXWB2A",
  "key15": "2rN4m64EBZcfAjx7EEaiREzsjT6cdznMrJ9S1dA7pDcaEmVdaZJnMF1tuEmScr2tfiEtzTLa7aegBseW8pYCSKja",
  "key16": "5gDpFTRY2T3YAsJYqeyVonGJKWbiGRqCDyTsYLi1u9unBzXMiB9Q2tx2w77UyrH3GNXMBoY491ApdmW2aLxmmUHC",
  "key17": "5vLLrjU4UAPRPjHScPckdi19BV3N6QF2YJuSrZqXr69EjbyBkMgSmbULybe3jfK7RwP2DYF56jsHYS5nmnnDyiiy",
  "key18": "2gFDuD61P4vBsZQpL7q9VmXi5swbpuiJajjwFVEvyhU9tX8kQkmdC67X7coLKM9Lex8PHj6Di8rC6iU1zmFXWTK7",
  "key19": "cJA7QrvaPDAyzATcETQd1VZG7CTNt3Cd8TeHGg6GtUvmnn2pdn6zb9vG4TpRqRfU1Tsm3wPYo1Wp8yN85ydPs8w",
  "key20": "MDZXzVWVxkz96uMENBqAi9sdRfERBftLHbX4Aj2eNfgDoHWAnnKgZPuQXxmFP4hrp5pA4peZ7cGU4SERRYRqp71",
  "key21": "5YznJ8x7xDbD71QUMHpM56kewiWszf49GFezp49MeykegwWgFeDyX5u6fHjukLgF2wwbL6pLkKSc1bqbiqXYathp",
  "key22": "5JMPwpZZDYRaW7efc16PE4q37wRjFrSa4GWuse2xyZgDab5Dx8BceeQTFkz8hpwbyodWME6YJG48BDxEP8LNeeVd",
  "key23": "ZmFH9JQ41gSWEZTRS9BAsprHUH6uyb98f9UmNiG1ixYAqxg38hUwoGWLdqgPPt7qjotZegEWgdTqVo4QJxSibwX",
  "key24": "4MSuK6rWagUBH6XxWF17GhKgW8x4aCqYo6Uz3s3iCfdBC5eS8J2fQLKGGopQZwxwW1fBWss5HLFMdSkgb85uycZ1",
  "key25": "3nNyrPeqmEyFBKUCYBE9cfFEw2QARiokLUPz3Sfv6eoGqe7QfhfmYwjdQrniZYPZk9zHqJHmfrkRRobd8UKfe9Y",
  "key26": "QemLbGjwdwv9gQjjA728zrAAdYg9y7XWKmf1kqdQwXWs1opbTivvJ5wSjLrM9DauvcJtQrBg8yLSGARivjQQhTA",
  "key27": "2DBPiWiFFBwdEK4BuCaSXDB39TZS75vsNXKFWmXz79k3z7eAaQc8pfnD9MMbJvvyzMaVGW2wpGxq7NPbtTiqmtRy",
  "key28": "2LK97EBoiyq8FTm1WNsWoshvGTdZWDd7TKctKJfVrtAaFojdm179c6bkHrzUnuqkoAGDjH6DCWk4KRc5pFt9bVFN",
  "key29": "2tpoz2Zqh1BhYrsgyaP1wUzGw27Sz6xPKFuiXozCc171aPb14MFJaJFMCVwBCM2LNYLAVKypq5o1oyxQKwRc1anB",
  "key30": "3kCQkLeeuk88jMKSwC93NUZujWGGaY1tWNzXLh5yZ4i15h8hgjRxKp18NSZR2qAPJ52i7oYM1aeYe4Mt22J6qxTj",
  "key31": "5zpAkqeFWqawTPS3dRsnLQeKFWd5z6ySeBHq5ZgXD8wnRgDydofQqgZ2cbrD2fxdguv7vAWE2YgTZbxMo9fRzHkB",
  "key32": "51Y6DGzot134dyCmYgR6TQbtyNNWw7EHtC2qFXBhkba3D1jqQsvzJZwyoVhnet7CUNUqqxbS5SkWsWoghVPgBNNi",
  "key33": "4aozdTv7RUSRWkBomdEsh7o8cg7pfdaNRtYPAnXArecFoEjgkVNB7oD5SKdndJGSRnLuVt4ZsRfiQYPAzNw4sorR",
  "key34": "UFbcagqqecT6r2UXsbJePYSUjcUpRsE4YEcuzePAsAE5v9Ehr4mQenhLxDyjFLhKnfSVD9JU5JxRJGfEGKV9kZo",
  "key35": "jAjEuUptACiq8WABMmYQaGdiicm8HH4BpSh1D8h9zE8YhGHV4vXcoUnDMmPd9PJtEDsBGskethaUuGrJYZSzfuf",
  "key36": "2CJcHSEtr2pRstC4ZxtrdiE2nhgeiPkhGcLYuSGbvU9RgPAHevwa5BsaRhdc8yhNyRPfryqrcjBv8JPXxA9rwe43",
  "key37": "2nbtqn4tHV6CvpgDDCuA7HUUFXfxc4SyAv9t6tMEUverxmJQKDzk1cHoPLG54Qt3M6TVnLgNJEYbTLkQ5qWJAnSV"
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
