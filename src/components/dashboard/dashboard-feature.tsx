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
    "2kxqtaD7s4KmbVGCkKwZK2AAP7Z2jX6uV8o6Bs4duGiwjty74SCSpvmP2y8xoNKjmN8xoR2RHSk785AuzgCXBUwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeFXJDxLvja9FqWmpct3RJN1eZxup8L8KgGbuBC3KqXhDJ1T2DZLPnULYNWWTLuiFXNV22HG1ALNUzWE3BFqoV7",
  "key1": "2YD1jnU6d453RrF6tsW6nr6p2rw1BefVMJoM7PgqG8tZ6692AJq2dnyWDZ4xziHhRU3iqyzQkT138Q5sBK4uTHHP",
  "key2": "5AP87cJB2PRVcz48n7i7hrRbZyAv8AvnoFsKmrwcGziCN7HqKHphqqGJ7QeoZLuPDd8Q1rxbBgPQ9ozvs1JJRv1H",
  "key3": "3V7zvr5KUvz4cBv4NfAAVpNdsLfEXX5BnGzJM5eB1TP8fJi2JCg6PmuxQc7SWVzci8Cv4VXu2XgVqfGtXu2bpZ43",
  "key4": "5o7bf82ZurGuuncL4i9fQtN2uDnb7KNN3GNsibzVjAPrehHWBK2KdaeXM5gtgbLFAbtkpaVVzgyGkZqSLXd2gmqY",
  "key5": "47aQbuxsrcefWJVqHodJgfNyVtfx3ufa1GbCXwdhiKy3nvDpqr6amrobNhXKgx63TEdCv3gsE1w3ns4DKyKPjsX4",
  "key6": "n1c1BJd3p7gfuWsE8QqjNJyRMJy6NPv7akhqVeHWCpLh5imVzPuu3a9SYHZSqJWkGPvcwkZMx3F9EtArLnGy6QY",
  "key7": "5Rw7SuZLvtBN4rUPRfemgkFKWJqmcvy3U9N5CdmCq7pr4dfoYh4E7DEHh8dHMR14mTsG1p9BBYFobKkFRtjppqrM",
  "key8": "5Z99zPyRxMTAzAcaWyWThAWE1L6ZdGSX6J3BicK165wz3xKNLBwcd2nEKYRM7VMiZXYwZGAuYJGzKbcfRXV4VNPf",
  "key9": "2Xr7jKHV9qVAgm5Gh2tuNGyBUqnghSvMBeU43k4ALrjvPq7RFFsAJwe7Hb92baJmMpkvSma62T44sYWtkfDXywKv",
  "key10": "2ksCeBmDkJfTPQvtouzc6TaDsUWXj3Rk6JUPn4xCzmZFZbVrCv3xYxFwNS4xeoQsuMak6U7P6KZKxEZCKvtRZ2t1",
  "key11": "58zb6FtF9GNRKqqu48sU5ycTKKbYqPq7Sijx1onG7stm79c4rwofzyzqGw156yNuX3xnGP85ohSdhzrw3vtxqmfU",
  "key12": "5Tqy1LEVpPAvxpZWtWj3JWDFVrMHTiapwzM3N7jZyDLAnsptp6VgHYxwYmug2tReaH1szehc5brGyak4txRwLhuH",
  "key13": "51cKQceh6KMJ8EmQSFS9BssTCV9QvXHepcLpK7xGSiD91TYKM2JBP3CoEKJEAdHQ5G6rDoJNTrJRPG69dDfEN9Fa",
  "key14": "cjXWoMSoQQ2wrzPrMynGeBV9tB4k3sJdMJyWBQcyc1eAvS9x7Ata7pqcAhhQJTrGa96hqGJFgKzrRX2GDxMwwEP",
  "key15": "5e2D6VWUarsXuSDbPCEm8rqhLScqMXP6ATFEtCYCLRC32Cz2fDQWfLKxJapqxFd9xAEQ5EGNE2VT2CjUDCCCC9o3",
  "key16": "4vi4jjTFiDtQcr5GRe3uzuBd94z68z6hzZsefpSgM7cDLjNPvkfMjyD7pX2CCWTHMEREkK7bmkW8T5GmRKNufdiV",
  "key17": "24Ujcbh17eY1BkN23UXfSwjWmnZtxMPzBW6e4nsRVxZicwFEVkiME1v8ARb7UxnLSpJZot2uQ9CfJwghVTrT5twE",
  "key18": "57vR4faSy8V1FUumF9Gf8EuKb6bb7JhGxTLcpPJNqeaM1Uk1vcj72i8dA7b8NghxJ4355qvAPZFrEX6uUJzf5t4w",
  "key19": "4zdzzaehknFwvwBpukePPPTjmLX9Q94DFH78EhqSe7aiM1DjBbNSssaHUhNRuDfsPipta4W9gZt24q8zWVDX1Cr1",
  "key20": "2WoXnVJgK1DX4UNZvykhHsLWpL2wsDR8vFJaQBb6xs2p9XDg3BjesX3o9McKjekA2GwCaxSWLVRn265eb1dkvKd2",
  "key21": "4VEmfzwEhHhwbMS54xu2qQtyYkfoHrHGJLMKnADvwPtpf4dUQUwt1xUwuHkUFkmqUpT36trGqmuq2s5M9bi5QaS6",
  "key22": "3w2o8Zsz2HwHj1rEth4JxnbkuqLChfaaiF2cysi7z1FpVYiyqQXprR7rEgUPnL44iD86BukYjWZAejEnfy2x3Rmf",
  "key23": "4wbBtyq9z5ShNTvxRfSoWXeqSRzWziRhcRsVCRjtPifPJecAvuC7PP6fnHtHPNBvyVZdSpHST3GTYtavbMUqCF1v",
  "key24": "4ftZHYjcv4MaexnRhawgPHmPDzfJRG6zP8XbZQJw6VMy7DYuWzbH7V5d4dteYS4YrqRgmGnWKDdrVpXCjNrtQMgR",
  "key25": "5mtukZqu1r2hhSMBR9ZRgS3ZQr7hUqpQWdXKicSyobPaQGSiSM46fQHHaLBKK5kFoJrZ8wN6y4LfNAPCNfrLcYWW",
  "key26": "38Evf9LnZjEFHJhweh5Pa254Ktummj9QmQPHGio4HhRKTmDf9a6RDo3zWPRZMH48HgMBrr3iygJmXQRb59NK61qc",
  "key27": "4yw6SFuenjjUjKVekURes8y4HfVtHUyhaPrYZFM7TKeyBHFR99WZQQNmJDN9DQP9LL2FzrReTZZpMCuoTWZtMjbv",
  "key28": "2qqnm8NvSHMzxs7zCWvzKtKLGM6pb19r1YAizSe7o5anaCZkeWzBBXDW9FBiuj6n9UgydkNSckC2tN6LLxDm6svn",
  "key29": "4fECBkYRbH6H5rSGRNZENJjPrQ8AGbZLjCq7xcJu9iBxzZUF8vrhM4WyN2rPQsGdeE8bcLuSNpJN6Af6ejuqjatq",
  "key30": "3hSk3sLRTyTUpDLjzZ7r4d6oTkdzfcudGj7hEaUJA5xDpLj4qeq39MwBZDS15yf4E5dLgGUwMnMYubFpLq51C5tT",
  "key31": "66kfm4ZgpSX7qP1DrrUgb8ASgRaDi5ZcNAdSWAHTFZieLqXV6MP5yAHWuD3CaGL1tcJawYCetqJztg6ZgBAmrbcc",
  "key32": "4n8VEmZ1zmyqo8FCmyAcwqXFxVTkPL2EfhGp41ebVZsARd5ugQxrfdyFbeJGcTbn6EiXUdB7e4baSPL94havZoda",
  "key33": "5bKjEwLXdJYbQxDf7nXJGisvSkg95ELujwe1Us7326N1ehi6ZxWY6txPbNJr5WpWzvN2WXBNCALR5Yjeg4WBvsyk",
  "key34": "cTDr2wtgaLJgEfjucZpQzGiWiHfQXtCWSe6eTcCZ3WGku2iLYT11ABKxD3htvvhe9xSAgtGCMAaUQZ59HpDSeor",
  "key35": "2bn5w1yYov7fHoNZeSm4QKZjkJWzmrZxoRKUBCbZGGT53r8ZZCGjrMjQd5o1ncKqvQFaPTvP7z4RrM7RzHEmzh6g",
  "key36": "4EK7vUtp68mo1VBawntbSjfdN6V4dVzQDJ5xS3YPuL7cJaf8XRg1PdD2i5i7oRDRif2TJ2JrzPV1tWJEGwx2S9iC",
  "key37": "48ryfFnr9VZeRDzEAMRdTztWevVJ5LXc1NfQJiZLV4AXAdfK69Bdu5qYkkPtp5cVNpZMRejQmWDkyrFdLQ5J1aXS",
  "key38": "5HHfv8R87o827KV4wNSjijMGDkCiQe63dRkiWkPgkCXeY5B8MV3N58H82VCNWkV8oZrr8M8cHrg3rmhwWK4EbR15",
  "key39": "4PHGnEjtCowBTHcDB3rxpDnzHe5RH3RYPznn3GbmNw83m2hRgzVm3j61s3aYw8Eff6hEhShUNKWy4L7km5qLFRD1",
  "key40": "3D4G7HEzEFgG2Zc2iq5DvgLEhNZExsJhFfUVH4QrGr8wWNoxR91bD52hcuJpp6Xam43XrkXq3phb1isSfKftGEs1",
  "key41": "2htTzre63So1wrBgz4PmhotKD57Mpw2BkaGrJatYHzhyHet9wQ1TYtbZ24oZumPB1f4V5eCa5uTrTjNTYErVhvM3",
  "key42": "V2FNLqFPmaXKMvUrgajUosbZaooKEB4d69fsrHtfHpwpKUdUe9sUdwHFbG9QMS6qqFxomQTMHFHi2dgGksWaogZ",
  "key43": "4aXJ2TiD31mTy7BU4584vRgaBBzvyNXTEWaySDzNArAKYDJonjwry5oA3nJGTYZmyXDkgc4GzSkFvwapjkePk99n",
  "key44": "2uVKHXrnei6NBqugu45AXLiWcPobDWSGuGp9caGN1GKG8yfQaPN8TFBFwu4JJWXxo91jd44PCZ7bpje1bnAQSb2v",
  "key45": "3FjXyH5P3ZvqkCZF2brLBkdTcTTp4mXrbXMfs1bkgYh5m4bxyvHQJJYeTAZ7VPB1wCGxyfAuc1jmj4SyBhWM8kAp",
  "key46": "4XDysCmviSjM2V1fq43HfsHCYM3QmuFG3ezqJ1kwu9kaUcP4PHN1BiTfKVXTwUnVB8VvzKeFDCqLL63etCsfck7B",
  "key47": "4UuVhxoET4khj4A2ssxqpELHSWwnEcgX28wF128JMPmXy18uU9e6Mu2W9GawNVxruUzPT865q3GEGDn8yyWk2sUN"
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
