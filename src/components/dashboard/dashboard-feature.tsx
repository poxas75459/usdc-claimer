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
    "3rfMc3koEh7g7hbCGcaPxhqABoVQU3577VY4aMbyFPPYGi7qgSKwkC7BZXhvwEtuHCXQhRJ4JAHfqFCw3V4MJt87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8H4hHTscyLLvtnU5xVmT3kTmHJ4YtXJ2wrLm22Ey8nE7Ee8t64PfGTUGxYp8VtMe37gk6CzbUHN17iFK2md5Sb",
  "key1": "4jQdVxswUCdc5c9LPy3UQ9fzt3ANToMPkTbbyTJ3PtWenW8TRWnRW4GKGJ4CtzA3mrgPNbkcZWVPL34TWgLn2z1H",
  "key2": "5CPadgvuvBGFbuEubaTFRtntLAEYhn95KeHpP7NMwcdSpVewB1NFW8RTQDyEB8BQH5ecYQe2Vy5hD9WV5jQNTEDN",
  "key3": "5xJCpHFtiCrVeB6fkHnHTcFzh9UQnrT39hkwVQBziEzNeagqgq3mw5fk63WWDUQYByFEk1ZsGRTFYVkeDK1vTwTB",
  "key4": "2bibuBqXGZ7Jx9NoGLC3fPNkvD8AZuYZ4BPjN9Vhpt2hrFmKYRjcRFQnJBQR3Nyr6ahgBawJ36DqDJogTbPavt6T",
  "key5": "LsU6KV5GyW89m8jCbSixFNGTgpysDxHes4C9xQrSx1YBMNfWU5sYtqQu7BZT2vr4Vqgy9ERyzjXtkaeePShyQUH",
  "key6": "4QqZFdzboAtYPEqoxWXLBHSb9pWC4mq8nY9dAaV4XEj5TLRiYSkVtuPTtPSVS2x92BzDnRyycewuuw2iVwofANH",
  "key7": "5Lt8y8hcjT8f96WmALX7eQYw5q3E8GvnkBvSfgxjJYLDYgxgmyLVrzha1ji3ehcTLWkvq3dQY4jHjN17KaASxSrd",
  "key8": "2Tq2DHtWoqgaVtuxs2BgsMkXduQVS2TmFYi26K6CWhPJF1aDqoPSCHXNBs3eT2kjSW9yxWZ5TH8aNstJQiURymZk",
  "key9": "3GVcrB3uMT3VP5Jj1617BDyo8cwZdXyHae7WvBcp61p2ig52HGyXXRRoET5pUaNzkXZrFAXDNeCkPvngnBPZdUvk",
  "key10": "5tFGu9yHRJXDhji1n79wMzuCD6gwvPLuqQC5pVpy9EYjopgCJfGP7689UzWNE9tjhHDvZGPw3dDs1dteLQJDFpPu",
  "key11": "5w5qvnzuiJqd8Q5TxEg33nxDL9eKwhmcQX8C3VuU1AJTy4EEDVnTEux7C5XMaZRtG9QNKnKqsXW5BZ1MSe2Yg6iN",
  "key12": "5Nkpvr2nus6LJm6GN5gYbhFAiMT2BfUcpm8vuQ8Hi9EKcX6M3X3V8uGTH9erSbmKNACeWHdvsUn9uCe3ogyxXLwR",
  "key13": "4fQQY1sQMj3T7FHAwqRptAwwC6UsXon3PB96J8q9hVGrQUQwH5RhsjqaWE8fkjWZwhswi62tnZTgxjJH4mnytser",
  "key14": "2eNKZ66rJLvS1tLdLqnZgAvtepo56NTR4TKu9FW6be1h1Vc1R9tMdxQ1QemLpocfsj4W1jKiQcHaA9inYTEjHh7N",
  "key15": "5tXNijRdRgksU8TUpTFdjfwjvw1A82UfjJXRhtJ2KkJEXdps5AkvYq4bnHuHBKmm8QC7gyYRGrYaV512SU8iuxTA",
  "key16": "2BoahMaUxqPadAsC22CbVqnZ2muLKGpqDvm5h1S4417ynE67YNwehj8k6NhrYHPWa7SHURDq5z5Sp2bEA7DBecAT",
  "key17": "5DTgdhLmNtirKY2st42DhoN215v44rxhjNkiubtbqevRMJoWdnjH3CcD9kUVzVaiGMFiCbg8cyYkzQwTVok1dQB1",
  "key18": "4DaE7roEDbhHmsQebWUp1VTRFvtwoEzz1fPQ6CZVbzCNXXgbHj8pzoY6m66auxzfuQmnWhvzLKyDiHUjD5VRJfkm",
  "key19": "3DuJpfwrqeDKoVhUja3pfu3G6LSW9WqAXgGXDrUj2k1B1UrQMsq4TXEmCjWqoEu2H3i6EYX4pyXvBFx9JpF4gFBn",
  "key20": "2ZqNCygzBJSYhW2zTxuPMDSfYBnMS2tq2yKXGCV97u99jSXmu4HRFGtdocbAb8FtGWPpYCWiWV7ZAUEoDrGcwbo8",
  "key21": "PAq43ZgYhXnrFF44fv3afuBAcAafqeB7Qj8AJz7duosYbgz4YwhsvPcsy86vcz7kdPaE7WKfqQeKriTeEArMouR",
  "key22": "629LJhRnGGgb6C88aoYjKFbeHrHZVpRUYCoZDdvqrG5Prra3cmwEsWKDV3YBZhHVv4YKKRZdtSwRPSTZnp3qBzAY",
  "key23": "rKeobMVjLQYoHM6rAL7RCo3EoVftyX2oYP9bVQvrNwtMXqfka4gtAWSyKBp48nA9S3iNSircwkwnBcYMusiDgdf",
  "key24": "4rhvVQ9NDLMkrhSbEbBff8Xr2eFVPKjpMS1gAkeY1xvaD8Y1bse5SgBuYDJoqumzL7MQsx1AWeYmBNY7kUPykZhW",
  "key25": "3nCYdhtGHgUJH5bGv6GDVyuTtKBvHKao1EzVdZt6BgBQkTzyTNT5ieJ6TC8BSbq3geES5V7ioccwFF8yqh9xggt4",
  "key26": "58aBT71NS4yejp8wyrwGCZQVYBTSbwG6ZArZmi4DteLgPF7dvMy7iNbnzjcsJ5vbAyKxtTJmwqXnh6GBBqetVvnG",
  "key27": "3wrwyu8bfmHb8XcZk7BEGD2NXCFWA1Kx2AjmTM7qeWCs1vuZUpcCYm7ujGiL9hDnv8oZUg4MSF8nKyqvWPZzTN4Y",
  "key28": "2hGSBQT3x82JCL3ogUstkjewzj3JdR26preJUUxRi62kA6XMn5US6qvSx2xnpZmgnsLhcipFTANve8XcUF5KDhXo",
  "key29": "3HQS7C6a1MF5B3ZTn4M7iLQ5QQuFVUNwf9L8NvocvVCVGXm3DwAfcLxbDvctVkFpnmh4UUKAq2gRK7yz9DkUjd2h",
  "key30": "cpqhgxQuNpm1tFvVT1QGQsjWPKxrm1q7TbSTpPgzgptFHS2B68zpvseiGhsxTbLukg4Sna1PSJoHGL1VSdbWdsa",
  "key31": "52tcYEN14y9pPHeXZZLRMp6jScye38NY1EXELGTNd1P4RofmJEHpW1fb1vWnWzKEc5qniz1gm5Ce9DnF4tNRbKuF",
  "key32": "4PjM1niLjrrwFW5H5WXBZgZZf7vZSK3wXR9yCnSwMW67wBxuo7WpjybWfWuUBE92SwsCaszbX5SsdYX1mHjRozUG",
  "key33": "GHgB2E3yLpFngzyG8GMN3wD9EF4kxFdbPZL55b4TEDgFZSZuSR1gfHSjurwGPDMvtDwt7k6m683W4qLNFXtMBkx",
  "key34": "4qAKSHQGUCiNtbbQNb9UvefsCWqismGZSPmbPdnm72Z9ukLdmKSbRJSYHg4JcLGqvWa6sBikikzz8QnD16VJKDD5",
  "key35": "4Tw3rmc4BHjpAJdrbZPD6VLvLSvUegz6TkBK3PnsTv3VBqZ5mUMGyWJDjtKtKagMX5PnaLt77NkYwMAjAKm8xBzt",
  "key36": "5xPeZSJDG6ZDbTRazCBPLu3v1dXKaXnNWXs7eR2QYDE5HpsNHYcDMCyMsiWuFerFGPDidkPWfC2umXqbnoU5gP55",
  "key37": "3i4tP7hpZwAJZjMv4XfSEYbEVcpA4meNZiQf3j9MWzWzyZSNqGJ2ybZxSy19XvoNVctAYpTQPu8rk9msizPKGG6V",
  "key38": "3jP6szeL6d1ocCMHcyCrxdPXEx7aq968vq4TmzuEEBMaRswQzvog4EP5nFXpAb9j281K2BcuvqeNrHTCdVUZbfXh"
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
