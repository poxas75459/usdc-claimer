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
    "5R4CzAiAzJv5wvzkEGjcnptsNvMqZANGJxbRnNz59yCKU8nN8rUXZ3VTM1o5yj7jfeFmJu1SWXwJsnFmabwDvmDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmD9HHFBxXTjm8XeMYQoHUjdyDGJoz7Nen3ith5UaMcmdfUAkJpP4PUM6caViZnWPeiKmcNBnZ8w5PVY6d5hb55",
  "key1": "xq2PRdbQzzEoMe75FgBfASUgEYafGcDHz6ggQg81icuXpMGPA3phv5PCkYqAYdAAXw3NiEeuQqWNbmMF9CEQGk7",
  "key2": "2Lis6yBZXuptL3t5C3XnLKTxKTdS1Smtxy5oTo9mirao6PbY81nKiukabbCxNEUqQSQbnVrZX4Ej2Rk1XFXcHj1u",
  "key3": "t9Lf4LF4bGSba8tLXBCBardbHGntyaUU7zNYba9eDA31GFaPyuvpgDwvPGFKy3uaW8tfEoGgpKQRy7Kxviw9w7b",
  "key4": "2nHWTnsGK3411b2NAYzi2oXr8oEtXPWMoaGZNyVsVc3fYRvFcmTxexvPo8BNdTskW1HZKPZoehtYHmd8vup6f1JT",
  "key5": "5DR2DV8s5g29bu1gjiY6ofxcM2T4FneEnLZKCXqwBMSzJqkkb1Cf3JPc66k3kbxUmM7kYmGMCkZgJxMnR1MjRLZM",
  "key6": "5rHxsokxygDQjxbSmQ7g2TQFyqoWgRu6ys4MPfuyHUHFW8mnGCMzuQpnEWkKaBBi7DYi54aMXwbnUdYYPEM9qN72",
  "key7": "65pbF7eTMFGo8cU4T8BnkrY1yJ7BD7dBLwYLSX5mfHw5XnAhzATgqZGQJNGyxMHPqaqc54k2FuP46hAPnFAoKCin",
  "key8": "3Jqi9q9Lhm9jeRwNXQMbAbaRPtCe4kDWUhh3JtKP4V6yVAgG2cDNKCKzddGgXbJBhQwdCX7Uv2CtarqgJJLFvwiG",
  "key9": "3EZwTWau1r5Dw57Erj1RYweW6EUUQK3GWJNUh7bsQufMJEuxkkqY4bMvHNxf5BM2bVJpcZkoVrGJrfU4KzMjq4mp",
  "key10": "3Qxapgf5pqewV59acW1qCXXSKUB7HRbuwvtVYKFqgXobzBcozooUWdy1MGsxSs2Gd2CapWkRGgorEZdPqoWdwXvt",
  "key11": "2e99xBWJ9NHtKdaUh7yZ1MXofJCfqeQdWuU2c9MJyFHv4DBrSP3ErSbY21UFyEFacwoUacoeqjDZu9pn1nx3iwVx",
  "key12": "LL9ChGJsDT69V4ug1PCxTNyvGJ6yxNm5aMa2AWNxYod4C5n1tJ2SWKnVyjdKkDDiZay56thTzSLvTqaYtC2Xsuy",
  "key13": "2iTMDsRUNHQNBUrJqo6brhZBnNPqj8W1LZ24RF65wvXPoTfX6Wki52bVcYcLKk6MXC6aNW49yNpL5CGQagrQtCmP",
  "key14": "4puZ78KhD9ycdMNBfjc4Ljvk5SJJnLyFtyHde45vQNZft6JkvK8QpAdDFcB9LgvM3j9EMDsovPjeXRnMhk6wAjBP",
  "key15": "2VUdqoaNhW6B1LgLL1DyLpLit9L1MeEZc6fTPZH9o2zniuUerPR2jDmVGJtxSEC4fWsQ1i5D3rhk1F7HSjEKmHb2",
  "key16": "4KRAQ2P8p8TJEjjzdBf7mXvshGexD7uEQwjUfcZr7A2cR5N1PK3ngRqk9qTf9qQhrmkWZkqqNtg1zZMN6wh2M9nm",
  "key17": "5jDE4CtigRT9Wt7ZZPQrhfKQqpwSMetZw68WbCLv6enFiN8nBjdg4K1BpN3SzuYaizddzHpVUg6ozga55WwFhqDR",
  "key18": "4s9k4h2fkK9vQPW5gbz95B6mw3dWjFSayYEimTsmAvzkqZtbmSvsErDMqPnTsbgbr6sUJWsWp7ikYZWz2hFBwMVy",
  "key19": "5NudJPBRqfwWB43vE16R2BKookkgwtgfQCrC171ooHcWFwYLWeJWqqUHPkJ5UW1yTTHJVwzjE5haN51a7dPf2Jjp",
  "key20": "4mJM4sHjWe3yHpQH8Bz6YnPssVLgYgrusJLQgfaigKTe9E1J9kM54gVvoNGde1cHrsbqzGLKTeyzu5PCPukMaDY8",
  "key21": "4VQn7zfJvNNemdjT2JKM1eXoccUurN2dBMsar9gQJBVfgcATm4iksTCjuABu623usnS6UD7gc1h8YidwEgWbJGNe",
  "key22": "2SeAn2DhToX3qug4vHkgWkQVQcShkPAxkK4igTWSSUz866EKyEkphtBe2ich7s3yaQ7xWhe8bydWwChURn1nhKW4",
  "key23": "h2PjdZdgBHpez6aX4QzwCNqJQkRwniUPr2A4SDyRSyhHyvthqa9LyGCfoJ9oyFNh7qvvxBb9nF4gTky85NKYsXP",
  "key24": "3LFxZzapTWpTjr1W6foKasLPUaiBnrjxo8XyTJnhB7bCYnnbJ9ZtP4vSa9FQrtwWzDMmymRWUbYFBgdWUGpmyjzm",
  "key25": "2UeUPRQU7CDwxy59LaRy5TW7KTNTyu3oxS2nRwj1xFSRTNpsCszpa1ppw6ZF9jULTbb733vFX5Jv56L1BNHDZngJ",
  "key26": "5irHTFwxHVvUNfrWYiFQPHrhGVcX3sv68MhcK6gFp1fsik2jgf2dgFEriXBHdwUbm7B5YphYTVrvA9tnm6vYEJpJ",
  "key27": "2iXvsGU3TYt7hTkmXUMwHnpW4YrVJJn5XYxEV8FXoKtoA1nbuyVv7vRecPt1QZXPxcPbQvMNdTZWHUpBruGqD3Hr",
  "key28": "3tgX1xyvTmnKHsyTnxafjnunm5RnHZWXZtZRgWqBMGXr6rYqQDqoKfNfNavJ18VevZt2oLZetpsoPt2HpaMQqC37",
  "key29": "3caZ9xCAThQhpepQUeiKxGWwmPk2K4axKz9WqjJ2hQcanbe73kwwAGMHGqabd4oSuGVPRq3yVtfmzKEMxPJgRijA",
  "key30": "u7pdUXPxmDuj2y5r1RuHDDNFujvaNCPdJKeSw8zTLd1Wh4VDvHpFD2n5dErSoUj9oVNr9KLkhV2ZDkVJ7mTJjPo",
  "key31": "SpQUNbREo17f38NP28FkexnrvnRZN4qmV5pXHTa2Syev5xHJukn8wachFJrz7YAyQmFY5wZHwPKmN5A6jHCA6FA",
  "key32": "2KPKrtkDmJ55jUnixHdc8ZU5n76KN1D6P8HMUT8219gQGcji8qZUUMJFs7Aw2Rupf1o9GLNG3QZgLs2xxbDCvpdL",
  "key33": "4r3T6T7FvPGch5thjTyjE7nebWVgAFFYV3DrpxGjNoJ5VM223psZbUWHHvp19bxd6AhnGX2iitLFDA2pjwu6BxKd",
  "key34": "4sPGMS8m5rGZoPqmNdZLteHCgUGiKnkLYivWU1Kt8SaNgewTAX5tvZzYXyRCP89YML8mA3xa6kRDEBrXupYZRfw3"
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
