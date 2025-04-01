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
    "5CaWNggGC8vm8VzGAN7oy6aFg5SMDmb6NYhVESVcZEtA2GRfU4KEgwEKSLYjqzLhd47Yf1qYydw5155nUXr3dNZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XT1JPueNEP7NxSL7Rp8qfQfBohGCNysoh3jbG26bkg6zYbgWqYwQgrEDSrcPKoF58XaFqyyUSfJuW5GVfmZ2Jca",
  "key1": "5DzxiCKGuyVGSFS2PL5eJygrCMZ1co44QpqDWCzS3VqYYsAA1pHW3XfD4EWNXkeGvpBn2KzPApbqcDL4WTBfdECJ",
  "key2": "4kGZTPKpGGaoY17VVwqgyz9fJsHafsAdBSemYmiU9KhW4J9eJehgBVZ7CJJdWCSPxcTyYjJssEwTBhFk6mS7AqRV",
  "key3": "78oGDvNvRuk1zSnsiMZvS6YzgA6jrKd98AAddaX8wfizYTQhUtwsbxbrJG2G8WHdBBYDrpRA4YGQj979wbeN4EH",
  "key4": "5SurvFkgVZcZ52DywZzNJRrxaDc5xa2BbF2vDKjo8BvBNG7Q3gwM98ChCUX6YS2xufYA9EvngJ4jP4H9rY1VcVNc",
  "key5": "5geax1JRjVMcivnQxP9xvTrpqgNzA2P442fmbneXWnFZywcLXYE5yyrhsKBT2eaKaNiDQhRjmbBH3X8RuuVmDAaD",
  "key6": "4wdgEbBELJefoDehoK2puDC4Kqv1Ps8RK7yWPRRrGo9ifQdT6EjawMDt9gBRr4LYYskvrVyevZDhyFjSfER924gu",
  "key7": "4rHDEthjJXPGtC1G2iwdgb17bbrELdaJjvSqSKECXCmEa5y2stMmNHm8Macp6eW7sqRWxGHPHx5daQynQXT7jrSQ",
  "key8": "4cHWEy9Pw1sqznmViCQDppyNfLdvuYexBhi7cWiZ5fhtSKZwXiTpf5HPJ9xWJfVZWoVuc132AAGaEvBcXaUe2qdc",
  "key9": "2FC4GaBeZVvQTBpkH34ECeBrxBvvp7Y1vVVUrrzKwAnw1C7VAjgsTPfRr7U1xojvde2Nx8Jws7Nf4y87kBMzQVHW",
  "key10": "orctvZU4RmM2LT8JBhM6gvHP8p3UaJHk95dpeEBX7ZyM6amDi36JbK2iPVA7yLzi3asmjocsHKk2DEneDktMSbh",
  "key11": "3CWmevFBdas53uA9E1F9vGfhbBPC87GkxHyBLS7GomP3VMY86UBKvdkrzYeGvGTyxQErLKLSJTBnNQmK8ortprXC",
  "key12": "3HvGLHQ5ybLg9WGoP32pEX8x9oX7QGooEKGBfsRThg4vK5GN8ttdq9z2bhyXPEUFDRgT6R97wmKe5mob2uvz2ccy",
  "key13": "4urj74a816UtgfMHLB2KBaXaoHKC9bTjfbMJSZXdXbxfecpnJ3ACwiFgxJ7YoZJENUwR2whZhXq74ihmHETkTd8y",
  "key14": "oGcRMTuzvAovoH2Dq9JPJ8KzCZUkmwz1fARTh4n5mAQiqzmde9C25wTPsSQr3z1H1eGpsu9B5nFwykGXfPCqhXA",
  "key15": "mGtB6GNSL21k3otUNzZkdeADMZTPfWNDFpeRnFkiUzKbjLZG1DqXWCi7tkEPixkDdVCbq754K4xanzNGnua8o1v",
  "key16": "4kx8JmATFAj7P8ryZnLkC2Ezxyhyy5NgU1jtgwa6efw3kEmV77B7Tpd7EWPZ6UVggNdD2v7vw9CAWMz8RFvtJenb",
  "key17": "3irBfM7xad73EdUvN6f7UVj3HgdbwgcBEJaAwhBoiFq3a8tZSqLf44rLLKw3fzZTBbsQ8DYNnm3nmBJyTSty1cHj",
  "key18": "48KNMnPCiCpSn3BYKPrZPwav5dHSYHVazhfL3fxzYBXFpaxwXsvHPfpjaVakkTzCC78TLTSQQYHNvtwFSA17JoQv",
  "key19": "SUBuJnCqsWwLPtoJGav6KhzcQpG71j88cLanZ9F2HX7sUbAwLVFdbA64NnVatbE8FQXuv8QYnj3QvZbPH3dCboR",
  "key20": "2oa9oWY777jTm3aQpoVjHo5fU1nfiqQmHkfYru9ZdFdPvmWEeTeSD94jwvoyhG3oVE9o35GYXPkQMGWgHSjGyP6G",
  "key21": "vFdWSGUGWW6GLLABj7VXB2LNyhxqXEbr4KAJx7eoR48yBx4hpY9s4ndAJ8NJRXvryTQGvR7rQxQhFRW6F8jk3QV",
  "key22": "5zE1gjmKBQRwQkZG94V7ZDt5WGcyN3v4i4B9WV8zUgmapQxmD9hJVmrZjtEqr5rJCcqALPak8aFjuVJhHMsXusrg",
  "key23": "2mUFxu8GXqKMPWKJDdqWT5aseReBSWckt2tZCiF37DiNeWz4UqWakqvjcZMyTsr3KgXDtYLGvwCZjcdRADQi9HEy",
  "key24": "HJmjz4YHw5XutCRErN1gXJ5wkb5Nqrp2FNUGjyfJAcHgBpHWhCF4PtrLkciALFR19X3rhVgumbRPoSb75KuHLMe",
  "key25": "4iGJYaYn5CV6tbPBSXm3MjjtKKw7SPaAzmvCrAw1GURXuJHfEHK7sBiXBsWg6URPM5d83xK8c7PXXY1ifaD14ocV",
  "key26": "2KytXfgEqPSaG5kQn6WefHFCHm35eSvPgvDsGFnpSzogrdP1kzZTzFhWNJZJbxuTp3FEmaarbUL7x4t37TsxKEtB",
  "key27": "5QcHtc6fBuprsrDNwoLwt79eH9erJhHYxdfffXAAtCPmuKSCWMm1uGFbQJg5yB89JvZ4arDZF19jaXSzX1xSNjvs",
  "key28": "Ew3iezWkaQ5LFhZheUEnU8pLmQ5dtV9rg8tYbcamXUXXBeBiWDFfgMLSioRRYb2MRTCRH3ZeuEskvJXCVY1YpJY",
  "key29": "5RvkfmUzu1n2XmKn9Gr7u6vyY12C2PUxkteRJqtN3fvHBFcaVSRxidcM3soFnViMrS6i6Ea4zKVzWSKHrvEukACk",
  "key30": "5E69zKXxvqoYN2Bz2Gkb3YCPuwB3r6M1vpwxQ6Fc3CC9WyabrjwTWLCRj2X9gKdJGVLfre2xE7ZRZ93XKbXHyXyF",
  "key31": "2MNwUPbPyDKSeQbgRqho2qDKU6bWZXGnzaQbCs4mDJsuKwAtdPUwCPaNhPSUYHK94rKVQKWwNni146QNw1bX7NMy",
  "key32": "og5NKbYTegCrz6HFnBWSxSTamBTPcYTFDXpexEh3RYHDxqTxwTTBLcENL5BMaAcD3DBckhVq7WfLfdb4LhCFasZ",
  "key33": "5QHibdJLzAgW7Wr89uYTS2gajitGqB6ZSmT3qMa9M4t3pyc7tLjHz4kT4jY25Ae1jRJZiK8GP9BLD8Yh6qVsMre",
  "key34": "5VD7bQ89w1Akc5XCKZkgu9F2sjP3BXiJj8nrPJwBy9ZxsXyLjTp1JXoPvYqQxSmyVUEGYsmAua6z7Yx4CWnwdWEH",
  "key35": "4rxPHhBUEGQmvCJhWQqZSF6DzgG1q2hLmHdA1eWvwMPE7ZJHG69ti9Uz3cy1t2pMC1gC8fojVV8W6Wqd2iWmkfnH",
  "key36": "2ZUbLUvH5uCX6TZHcec8sbMoz28a6d3NCdLBQCnFfCVk2RVp5NoDogDC5LYf7MEidYVJBnGcctXBnhwcgKAcK3EV",
  "key37": "4Dv9NVAhJ6PDhxUUmhGCFL9uqjtPJgzhVqCUp9kMnv73uLesYjHaQuRUa6WKR6dnAH2dh44FutzMxopvwnkZcY4G",
  "key38": "3Xnj48WB5wapPzkyxZ8AfMKMh8Q1TaUzQcWKkJtevEPaCJR8ffHUmZ6GMd82VcBJw8ZYfV6Vn6W8Jc8nVkhHfKZN",
  "key39": "5yykWxN5FSjxX61WQFRDksMoqEdHdzPDAwNfoUE4snEQoLLi2uPiumUsWByxaTn87GwJkKHLa7mDjvk95LQikAMe",
  "key40": "27egdke914TGidTSJeve6QFaD2qyafxCPeLZe9pRAgbWkYzot4WcFWgLxSudpjKtbD6av51vW6Nnu8wV9Gpfo8eU"
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
