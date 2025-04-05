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
    "5cFLqR6Hh2TCvE5fXtKx8p6c2xxNFKTnsUG45XYqWi9qgZ2yWRBLbZSrjCJMcw5HQP24zKhCqxrDdNKCMoP4GS2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKudf35AYtzF19pu3RdRbKhkpEHX6Hpmi2mKXSRJi2dZEd7uYW64kJsDQ4LzE6Mug5EykeWgJH4fB4JTr3dfgnb",
  "key1": "4w2hbi7n63hWq9FmQYaaGGzUqBJ3r5bTPCuZqbLnMvCZxWkMJ46ffWgAM98F3TPFRnZBe9UyvMrHcRbLXsHKKcka",
  "key2": "4FHajKLc7hAeKwhm6mA3rb8wKTktDUjUudG2mHgF5nDfcf1ZSkjHFzKtjM1bTdJ4UnfSo949CAMmwFkarvSukyHt",
  "key3": "3SgSJggXzXZ38kSW5CPeZ5ayTyuWbrhrEY6JJZKJ4dFHudJVds857h8nBtiigzarpVktX4YSMMCR4fE5Q4m82PBq",
  "key4": "22eS3M8cbnX16kKzgR1PSB5CvrQ2naus3jybZ9zGcMnbppvRQVY4A1zTxtq2hM3AN7VZRfZnZyfa4wHaxiJ4Ygkm",
  "key5": "5ZxjEUbdNkuiu5cFqJZRQivN8EuvPEyHtuJHHjJDvRALrsMEoaXY8CHThkENVc4MdLsPyVpEqbAu57pYv5znjcg",
  "key6": "5ZAt2VgDVBvjQeN3w6zprPQ1KHXPdeXPQt36M5V4QFUocAgwdCtbeiWfLpfzxhqM329pR5AECaF51Lm8bPciVzsY",
  "key7": "2TUg85cXc5qzrjixcFcQz1JxiH7ApRsJP4naS6e9EZTVCz6PZdcxcn94BA6jMC1Tg8qGz59gpyscvoUUDcqPoL5D",
  "key8": "5v1rQQSpRpcMF32aFNGp7DdFCqkoNQAquTKYyP2DM2UFpQktt9G5whSFhW4DnWCnghvuRw2mVu69AL3er2t3u2QX",
  "key9": "5kivp17mw9Ka7xCVYmvbT7L3ySnrvB1Bkn1zKB4z1iC6VH3RnkFciTeztWJBapotPdPFKsr9n6BxvXGPizU3JLzU",
  "key10": "598c7GxYSuz871U83W6uv9RMJvJbsSHbx38GeatSmRxTFFVK5xBYsEniy7o5ASJZiscL7vitZUPfrBruTji7kLFn",
  "key11": "kpCcrcjeRYSJKEFPKAh6fsY2ntJcCesAodUA8xKmqve6AZYxdL5DrWhVD3ytVXc5HF5PNkgRzqkPVq84bsWLaLK",
  "key12": "4LYncRTzRNp1KJrDF81fqjFi28AA4RwBST1kyMDBZ8DWw9mh8gJqCpSMauhSFKQGeezjdqUWsCBMdJeDumbHiDiN",
  "key13": "LA28HgX1YHUWjBunmNm58jMuzAep6av2rN72quVy592ixzf9A53rqe44QPpAVBhkJcA1AthQJNrRWHypSQb5cUL",
  "key14": "3rRPccqz2Nc5XTFTqNjVQLWzbEZFUj3UAafKCtvhGRXiwd6ZEmV6C6ZqLYw5Hgu9YQ18QPYnTEAJdk3rcs2UUVc6",
  "key15": "5cASUK3hikRPJ6MnZniaUeHBUSuM1NkXaTD8YXicWnbPZHJtr8R41uRpeintBrkiHJZEyBAhmyifvMMhSPKCHJjp",
  "key16": "3nz2RKeq1Bx88hMri23rsSvtmz5bHWvi3xgvLxagJWxKT3E8URi77ggYWwJ3SVH43raVkTxUqmSfiqJfJW1ckMgg",
  "key17": "3KtLvHnohupREjFqn2tkSzMkUpfKSBSFU1an7it8WbPD1B4RHGEoto5Nw7YeTUHHFYzov7EHEJw7Upa2xsrUYLHb",
  "key18": "2rhHH3jMxdzjM8Ug52sC1KSwTgMo14wuTnHVnedTBEqYHspPbYaixfrVsV4uJmk8TWjCNEiTifaxSAs227r9wLLC",
  "key19": "558mybiBSXFDm8nKQkWWDcmCVTej8nK6nxnv1bm3yrtJYczyiBJJDUFJcBdeSwnLyZ8aK8y68FFQTVKSKgcDcKFu",
  "key20": "uNEDbQ7YJ5DV8kBeJJ77AQKQUbbDMofDTRoZubUa5A56dgAvMU1SNmi6Ru9BqvQYV7ozT6yNHcWpump1h13hYM8",
  "key21": "5FpNdQDhHbCj4LTcVPZmDKZHv4dNbzXDJtrPX3PUvxdYqPDCPohXLgZyRs7zUDkvtmkhfrBijNCt136jzdKcmhb8",
  "key22": "StC81EqpuvVmyiRcsQcoSA9AwKgiu7EpF5nmMxi8FT5uCLZekk6Aw61vduRyXY7iaBTwAtGZTY6zK5LM46aQNSE",
  "key23": "HF1tDUMuabdTPEYaWn4sW83KdegkdUZty8u5apF5aGDvTD7RTKwLnfrcgBjFtafWZLbXtrehRP85CuoLx6vGA3v",
  "key24": "tKH8pgA1Pnd9DQyzL7zuZvCeHRSK5dKuu44G2KxdRNrja5yTgz7aX6TEMHj5k6GcGL4h6tevbcahcK2JmkAj5jH",
  "key25": "UNmG18Jouq8pV1e63AzW7VDqv5dWgJQjX3A6iaqKA4BSRzJA3omwbKyjJCAkMH5xdhSuuDQNReKR4GiW3gJhwqa",
  "key26": "4VGS57fHdXGQn9F42XA9Xx4GW86tHMXV5dZwVb3sBaD4HAyxjgJkdJyVSzUHMyuVib4UEQKzNfJdnCRTV5Lks8eH",
  "key27": "5Vh4oRcYF7iBFZx3qx3foGiDigy2wWL5KTkSTEmFXtww8cPmVwQfCNehm1nHWLq2zGNYj3ch6eRegcQerWt9h8YA",
  "key28": "4ngUQ3NjZaqWPgnNfGxULx5FBHrRRvv6jxkWDMpzP4aUWnbNKW2g7V12AxYne4Ujjy66L76oB1jFR2hu1r3Qzo95",
  "key29": "5xbd7MzGbHCvweWzTSmTJATABwgY8gFnsq8ZaReoqvz9wsM9xrN45m4SxtWd443vrmM93AFkvsbaJSBFrtGijfaE",
  "key30": "5SPMZ56H4kHN7Y5smNC1gDWhZSduTLnHSsPqNy8tt4NiJxhMmcEqC23VPaoTBMLy3qQgGGPcDzxT922S5tRrkj6m",
  "key31": "C7CwW4ce8Um4dFZmDiRA5RBUmJ7MCez1BoW8PXGUJyvJVGMzteqsamozQQXqjtDcBhK4jUVno4iK4DTGPpyEQih",
  "key32": "4Y29hpSzSkqcEKKfHbWZTUi9KCrYTxg5fCgZD8vcwoj4aJkkH95G3jvpHbMWJfUBCQravg8FvcLfGc6krbFjFN7a",
  "key33": "4PMvmvKiNqDwBcWe9hcCXXwFUjHh5mCTfHWrAfuGLKJRSnJTnsFhjCtN7TeU4r8hkJmbPcv5adiJjU8oaqBRc7J1",
  "key34": "3CYPJ6eTPDMmh5Aowyb5usUW8XzbTR91mo4otkvbWne6eNeqKKJ1GQ7AKNeDWghTPpd9cbNPSKqW98wD6YhWcUSj",
  "key35": "4DC1Sw2E8wTngDsFbBKboYMztNysvMUZFU2Qf7qYiTTSfMq3vi4bUbj1La9Xn3C6xn77TG3AXFGDp353sj2yQszD",
  "key36": "23vNFU2qQ3crQjp7DL9kZcxXiuuNjrX4p3KBQKjjciGJ6KhyRD5noKRk9cCoLFtgnBjkK1NymWx5V6qVNHQr1aaj",
  "key37": "3VMNsgebTVArk5cjCBfotfRQJ36Cobf1gtiTHnj4G78kxryJeV4YrjAsTbyxb2hEzqkCGvx1DBh3crH4GLCt4Axx",
  "key38": "5hZufgu6ucKLWpJwrWECcTPT8XUkkF927Hz292M5V6EjPRCJZaT5maBip1Xkxgr292Jwpmw14ycqpak4aYiXx8EZ",
  "key39": "4GWGBihqLfLCceXDjj427yYBWH7jFkCvSXtSBBGZT8qAQinMFeAdRi2nw84gCFBmzYRqpYebwH1FxXhmsdGkeRVN",
  "key40": "3RVU62sHNF4dUDLW8VuMbCQcuPqwiRY9QimtL7hGUUh3SeMtXuetpLkP5KTBwCzBYmqYYet1tcJi1v5wwJqQnbaK",
  "key41": "4q4rEMQqWpy4kmuW3Y9nnPM7ZbXNUGDrGCq7vYjBNJWbVYPS8aEqgYHdetDBh2LhWe8QLKeKFzv1s4q5mu72dTKc"
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
