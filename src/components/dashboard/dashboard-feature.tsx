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
    "2Tob7Ui7JXgJo2e28U7wxWgm2nehuk7s1fCSe2PgzrXCitUcFxYibVxjv7pztXxVGgLx2XtX5fCRkatkZRLjgtiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iB4AT1rpRtLAFgG1R9axs5HnWNqAsYZmk93NmkFtUVTBrMaGT2q99NfvdXNirD1aLzLu4oAP6fQPGd5zRVGKk31",
  "key1": "2ySH63qAQT5AuwkazWriTLxVrC5K11iS7JzaY3nTQnCuk4Zm39CicoqKayRfVqnBW5zXuMvniUEXWqEzqRBRBmgY",
  "key2": "58wpb6EvmhqvUE2GM1Gufe48CnFYCNzZydS4MAUpTzC7kUawqSx4iyNcDDRHH5RsR7Vz8tuBsBwqmuG4Tb2v6kM5",
  "key3": "3RKC4t6PRzM7EugznCrmQzP5yQGAMCnqLyVTfFi4FULrv8MJahAPMEVvJQouBopG1wyXuwsxh2AUueg6pBhXh8wb",
  "key4": "5qhUiv1bAducmMjmMiaHhZBchtGhqBMF9gA2V23NWF9isnRX9neveiHXCxeXf7WHZTG6R4o1pTLARGifVXBpLM24",
  "key5": "MD47F7L4GJNEP2d4923R8Lf6XB1bmzDNexnn7Bm5v85nBQnZ8tjdGwo8ARJhE1xUDcYWu9trVstgCawFqGppysc",
  "key6": "4nsxjvrqcQ89GJJyBqktmLXRwimdAzE582zZftJSZ57aUj7bAuE2jCxXUiWAANGCDXCikfjJNXWNCxqTDzNDrTra",
  "key7": "2BCUzqWo8mK1Eo4pFxe3eKisFSXKvWR7YZvvqKLQbGtWEZ1FEQ93Eyiphskjdg8eXS72iH5ssbQRA9uiLPSqJAmD",
  "key8": "3DUhFT9HgorA5JMdw9TSmN86fiCxCJyL1sSfjPyLghr1X3xwci4c4aSRMVUcgrZJEdtnm3wfWTJD2rLRgiF1cYw7",
  "key9": "mYwnb48axGWPvr26E6tZe94nnkVYEwHvzfCnKvUuygSdm3qqZLHZrkuGrVx934p7AmJbMHsm8Z2YprgXNV5945D",
  "key10": "3ehiuZRTQtXaABuD1WKrocsfzkwvRXyCQcPGvhGkT43sAeF3wpTGjMedLKfjM1ULaSnDF5nSzmAp4myvhyetJYHt",
  "key11": "44uiQUsutTyPZrCRSHhAU2Jt7MJAgCu3TqEGkWNZVcsCynFrrqkxjZhbZJzD7ikvx6AiisuB1owqCmWbwxr7HVfw",
  "key12": "43YLC4UmC5ckjdJZC4QAfh78haVJxnv6Ft9umWBFPHad242qhcZYMmDi2HD5q2u4zWsTX1uUW4mSRvQRm3ivV1Kk",
  "key13": "59hxWfK5ktLqTya2tR55VHVnTkrutz53ZX8Mm1EzXa5rdwf2GVxpkCBUH8JMS3tvJbFmJ7TTjuaBzzyE3TgCG1xA",
  "key14": "4KhjKWxdRU4RrjmiRcMw4fMECHxvm4mGTzXChirnKUTH44d21tvyMN1wRqPcfZnwvxxb1L3FbwhNd7V8cD6kFjnH",
  "key15": "4thmq3jrA8gKe3PoGWTM5edx7JsqUQkRwCBqYp7FAfvRF6MDbaHafq6SDknXQCPCW94UbyRP1rd3TJAh5rNUkvBy",
  "key16": "4Bb8rEDSLWc9skK7PgHJmo56vrHQFc9NDcPfeN2xh4miTR51UMk2AeyNVBrbeSe2cizAXB6RrQ9h6DCnhcsyFJX",
  "key17": "56ZPJ8XzhoMK3ZggsBEAwH38wKCTF7BBFBJZJE6YH6mVnL4iL5KJpDwt8wZ7sqaFhNfB2rG5C5NNT5aYGQ7cAptz",
  "key18": "4nRvNpG3gNCsEdftVQUZEZfaP3AhLW3pQ3vBDxbWwrrEfPcoqA8L1LpFfSDJkd9nMEAEwhTmz69PLj7crG35yrtY",
  "key19": "4xTtext9ehaX62uvy5vkNGKjKSQTpoUkSS796vypvntWMgrD9S47q2JzCLmPLKL7u8hWHYQKp9P51UBDanGZ2cGB",
  "key20": "42S6nzmNETEcW6qRTuC24SSn1zLT9kAeKCjnSG19n1LNjLKrn7dmNKifx5BqEKFjCG1gEo4r77VY4Shriep3nov8",
  "key21": "47mzoQpAD2CNM3EnE1ty7dMh5UreZqM5t6s9UaeEgxmnMzTDHnTumDKQ1Abg3MBdapK8ASLvxpKG253HEtSrqHeh",
  "key22": "3Ahh4sNgP3F8SpjTbNiweivfaFh68CYFbuCy1shq98XL8Y9J7sfm1MhvQYKx8noG2JbbFunaCuCbHXXWjyfbu695",
  "key23": "WxUwdbm2wZ5CWonfxUaNhvZaMRa6JykQereipKNUDux6mYf1fh4F5NLNJgBaz6WhuRai7mTPArez6uEz6C1zSuY",
  "key24": "62fwFkP3zchpzFt8nyc7H9dLC2ZundtknhDNRoLdr3tYLuYzMGZEtqDJMxmWFrxGg8NM3Lq4eZXAiHgD4Q5unX5L",
  "key25": "3FerAMs3v2uycKzL9Fwd7QDFy1WP9apM4ppzGVbCeu9f7AVbMdPxr6DJXeTDpcFJeeKE7TFDkmgnCqvMyx1tGY1i",
  "key26": "p1LYsaXFKwVsLtJfNt1ooZcw3fJoLhVaEddQBwQCzPh5jDw8VHTUWXw6rQYTXUpGcBeqAa3rCvhHixyiqZXeCgF",
  "key27": "3fSfU1CbDfJFyb3quS2n29xAgiVNcvSpqd51UJU7EmbMmLwSzNbRY621jxuXGBbNYQgdzK1kj2LavkwXqVpz1D5o",
  "key28": "22tozqD46maweD72m3qQbpEoPVymP9tJBdBSjsF5c3kwHtS1fdgjGdzAfaTf487h7fMmZABuVsLDeXiFmMseahK8",
  "key29": "2VazpBGLuRbEzaDUx3y4sMAzfDinYCuNCh9H85U3e2KGW25SHUUZhTyHYFWZywqR3AwJSMBdAvRpPxDqQQx9rGPk",
  "key30": "3rCPRnuvxxN1cf9oaLqoPSLwJkakHuRs3KQTA1kddkJUy4v4PBqvEThkCD6kE3Q4g467cQX1GHU7igBmAgT6KLZ5",
  "key31": "2Jb1LdjkxyhKkbceZbsM9s5xXSiMAxoF5kVcQLAAgcsVnzPPPat7eQ59Mu5jQLAn9q8beBWTsHsvWYUDsdRxxcEs",
  "key32": "2UDTgR5i1zbwTEArXCimFZHoJk7YvU587nq6qZgsPRUdQCumefpdAYumuVroZipo5DwLBfgAexbjNcAjZKoQ61y9",
  "key33": "qmeZVeJdcv41Sm6bGxeLU4gwTgLMnKLLJUkCrvxmffahCcUfm9naAxQ344rANHugnPh34KS1gPeEZhmSCaEBjRJ",
  "key34": "4sXg3Y6b5vNaSm6DVbTYaeXWYKnAuJhzu52vtxtU3McAGKgqiNk6nxS9u3uGurbej94JvJoys1FmQX12Gvec76Qr",
  "key35": "59yRbQdqrPqnT1P6syrqCi3S1Crt12f22HTL6SLdCxyfoEL2g29EFAywg9fo1D1dxcS3B1DUhEbtqQzkA4Snv6KS",
  "key36": "eGj4CUZnuH5bw9UMA58ZRQNpJH77EcJ62wZSbMKxvBHChCPAeYqj2r5FCSQRqvbwjZKVBc3daBYWWGSBBJTEXCo",
  "key37": "VZGbZvb8yoKFHBFWV1xWLv334orKQocfZyHh2qxokofeJP5xfDQGvmUQvSHKtGJm9QLd7d6qCG6DS4Ayef626pQ",
  "key38": "2Sx3ZAJrLPA7hhPhR4bo1DzSgg81vRC6GKvdFfvz6pdhnZMXxCyGvz61buLqwQHodN17C2X6zRhxYjfx1vmLJG5Z",
  "key39": "2Pyj6tFWbE1rjHPnje72vFmPH6qKMpcXCvyxfC7J5tqkq2XtdLh27qARvdPRgoUgZB8FyaaU97mq9D5v1GdxE21T",
  "key40": "3JqoRYLG4mM62MLRJNuq1vSfuhqgV5WzvhNUx4S7ncL7Z8Rq5gy7tPR7TQmK5T7L3xP7WYE9Gpj7yQNjPyjpdB3a",
  "key41": "3RJvgVZdPAcWXtSYZiR7oRqjqdNbXaFQTn85ASnnuFMQzYkK4fHvv8WKfTabeo8g5gsszTitGEuQEQCCC99pG44h",
  "key42": "5NzFr4KttYnQUfRcQrqPEo7CT7RF7zTVZj6uAiRyh5Z2TZdY4J8NaetTNTbnCwesTfQdBf5uBGJTiDK2gs3TfGjD",
  "key43": "29FPC6srVQYtKhRshWCrNeS1Kyexm6QuSjXc4A3aiDv9CcoupqdZYsyKJT49pDSyh39VueGZwM1SZWrN4TEg3fo5",
  "key44": "4NFfRSHWQhwSzLRTW9dvMcji9LfK6ssDo8XwCELstCtM9QnisKxy3R7sEXRHYFPoK5YSn19mJbXDptEJBxQ3rPTc",
  "key45": "2kFaVqt794tyLN52A71Y8eHEKELhzVDCt2XCq11ykKcy1aasxFPhp18zMdai267DNeSQSYHm6SGHKV5vwfjkJhVE",
  "key46": "3ekYXiGa17XhjMDGk2a6Q46oF6gLp1q3s7VqxSMsPyAQ2qmunieCjRapNYNL5BHTapzbv3vq3kyywDpTyrE4pSNf",
  "key47": "4SCx8mPpGMkdmL1wPnvQrCRGoZhW3jh3V42dV53hzDSqDXF5EVz2eTKzzN25ddXQJJNikVqq9fJnYMSd9unKBQpq",
  "key48": "2Hg8k6B2g8C3P1UFsrxPfLxtmigV1tJpzJnRFcasszS27c9fmGCFmP2ShNv6LeYpSKGvHT1biuhSZxB65xraNAzk",
  "key49": "4UbSfVFoMdctJTBxUENNXjxhTYhs1o7FTpHzrBnaJwRqph5WyJYX1jT686WvNfiKm5uv8gfqF6aGAEFbEMhSuszU"
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
