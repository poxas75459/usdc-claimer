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
    "azS25H8xYYvtSsiD4hTid6ftbmasbzLfma7WFgncERJXmATVpTSzmCcxM5r8XqEdJRYud3LSbVU71A6VDLdZmnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j36Jdt59KEx667cFhkyVB1ye3NKvgNtakfQdpCtPT2tBzuSgnEAng2EXBhKvAcb3dFMNgksxYeEycniiLbyd7D1",
  "key1": "4YpS4BbyRE2EursCV8q7aH52ZaE2sLFdFpDc3vf4mrCVwVP9g65g3ehx6nJnQEjQGgF9ww2qSTo8vMJgAr3HWUE4",
  "key2": "2YdUs7JxLrgmrmccWCH5P3gcETiA1mw5bCmwC4pEtchSQ4K4uEXMAL91CyRUjqv91ZUBspw4rUsT9pqvd3fjw3z8",
  "key3": "uVYPb6Rh6rzY8m66K9uu57X11psn6LpiY37tPh2jjm7mnzN6Au1SjEfaGSP7EVxZkyYS18Kve89nivFQMpfm9s4",
  "key4": "2vKPXMTPWEAkeQojwmW2n7bKY6gjrgojMxKTEDVpw7f8QUMqnb5Der9LZqVRw1ufEVuDyb6E9KisaBamxx8NPz1X",
  "key5": "28n9oENjqeLP2e7Jossch7AdUgV9TFYTK97egU4m7grniwNAUPY8vzcSYW16c3hGdnV64gCQU91BBoTB99UuHqfi",
  "key6": "2cYkedyyr9a9bwsBcFCdGGP3sos7aH7VfoksknjvTjcw5vqJZspcahKJw3uQ5LbEHkvnUMSFPA167gmTCvTjPgac",
  "key7": "3DaUMn2LB18rpK9TwLMCDv6CNZktPZXJqmWJ1GaJY29Qim7neC8t29tc89wSmYCnmEvqAeEwpaF4zxihC7d4Jrwc",
  "key8": "5S7bDZ83AFssGibpovgfs4cM5dbGvLTZCiVkqiup9k5LhYekjYVjN5dbw4U7nDyb92DFWwAczNqhHPp2Fo93zwMK",
  "key9": "5pL9vGqKAoCRRMFPd1mEcGuLdiaAAor7fmKYkLXnSZug9nkMNump7nSDo7rXbM6CzFm6xCrxwJXm5McdZZX4nh1L",
  "key10": "64viPYjtnFvhVyh3TyZKrAqtTzWSPH3toEALWYXKW8fzmyAEUUoPGysQ5hWLwMZXmDwqJcVgUjk3AziTJthgfFLy",
  "key11": "3DGkTYQ93AVoGAAc5SDdgEw7NP7VexhxdeqjoEx7ooz6dG7CrMpAFxt39T9WAGaM7hCDq1YwdiPYRS8cw5xPVEgr",
  "key12": "5mjbDYtppWxBg1VyinUCW14WbNYaiiHgQ6WbvuHEte7jRCvW9EPynWnBEphgbsAeFSLWe3w1UU6coADizvsJQueQ",
  "key13": "4HbFygtBaqYMZHDyCUZego7L468uaA1xFCiEBLYA9rpDF5DNoEFDYfKzVkVGk5pgYaEDxfAxUK9wLDBF7LePq9LL",
  "key14": "2AUwgtNKWYT5tV8YsyZge2EfnwKejbAaXVJjZ9ar1rw6q5FpvRjkHsB9PT8pNc7CzZag4oJovvRsZ8ZnMfVs7GVz",
  "key15": "3W6Zyq8nW4qwuVfrByFB9GVv8EbovXZZZxUWKtHvJzEm6AezV3JAvGyKTEt4WaGvYS7WvdgU62yvVdyLEjcDT7xD",
  "key16": "5SLDs9M4tmZ7dwyXY2wxnqFCtxf2DodQKZvbTpe9U6dfnL4ax8zWD6ToyVPVRvJGUE7f1rVybp51CcgYMQ6HwEw4",
  "key17": "2r1ez9sS7FBexi1ouLfBSDhXuHPVqC4ix8J89Tf7tyJPW8Q3CzFfPnRHjQi7gucRuUkWkPcxHH16D53YhugAga5U",
  "key18": "3ojyxmwKdrn9iYQnwVPnRBVvr4hAtrd14xo9D4Q1SriJNQUn1QqvPYkCRDQPKWvV9G2yh6yKUzNooyteLGpXu8x1",
  "key19": "3uT7pVhwmmFveDM9KYNEjkjZLzWDuNC4QL77E8ZHCPpDUEoQBpUhgbZe6wswMcoke4g8DZTtEq4pK6Fs15Bjd2KG",
  "key20": "2aafwZf14EVcVKaDAXLcSrYcoNJ9R7H8VCkoTTddrMz2k5v57XmZUra6ah3cS3RCbXMXTLTe9WK2H2haPQZ6etb9",
  "key21": "2XeKEL2TUd6oS9v6wsMLdTaJHCLPbMkeavbr8tGbkXawLuDdJYaoKVzWfxQ4EKHmtFCYCG3arVc3FCR4RymHssMV",
  "key22": "gRzaK9XB64HaK4XrWoJcsWdqaPVVT2cXdPTbZ2Z6qaDjZgbvtFmZX8uHSYm8zCy9TEmY7NeYeeLR6vii4CW8iHJ",
  "key23": "3Tq2PXaGttwpDUzS1du4Ybn9YVDrsicn3CudKh1Cu79Th4wMk71kUn1svaV17Dpq4pQ5tCNx6qdVGR9z6hwvKAr5",
  "key24": "4pGWhkrPg2Y4FY5oSHZwJNUqnsPQ7WTMtjXMTxeZ6e8211kmTepMQWSHAXNCvfumnqqiyUop6N6sAMKtxek1Vq8x",
  "key25": "4ivwnjESFCLkVbbGkgyaCR1Tgiax6tWfymx3Uc2eNCnk9Z8qoZZPW4dbpGYnP4AmqEr7rm7ti81GzWvzSyMgBiZp",
  "key26": "5KGHtPYxufe8VzSRV6P8VsgKZuvv1QhTL4Zf84eQsFqo3zrREZUhi5L1YoyoiDBRsVSuum3yVSaUmuggnUjPqtSv",
  "key27": "58GZWA1jwrUTJmq4aW8avbRmoVhpe3786o8kNx1NqtC5diKzzR5kAFq52ENfYzigWqdFcnTDp3fKb6ffwwm1X5Yv",
  "key28": "qFRNV2wa5ZDqASxiWeSLggpYrV5ohwDUgjpLHqGZNuM3odZtzFrTXQCQsW2MJgffnXNQyN9kEicLYgUoMC2Nx7C",
  "key29": "5AKrRRLouBBpyzgVDBYDysiJeLFvq7dQGMg9627YYU55PgnPftCZm1j7Aa9yi8dSK3w2kS5PAB5act3RETdM3wpg",
  "key30": "2QMtqfmsjjdCJ7K8EWMJBWXxiksN88LDKp56z9M74U1ufc1SSMu3gT3iHnhFvzjovoAaqC2gaf2XxAgqazXstK9E",
  "key31": "iApdKsZabXXKvdyGr28xsNQJLgiUZweGcA4KnmoJvMBjs28X4AavL7G1UsJTXvLV9kPoAZAqpEDt9ty4mFTo7ja",
  "key32": "4ebAuMUvAHyY4j549hhwGRzbBnWei9LiafRpdwezYt9SKDAdNVST8sGYrKLVGsanm8VKhqF6i3HqgpEgGK9V6j59",
  "key33": "TxRRetoErDgEKgPd1RKFV4EnmnQScEizUii8KU9TVDwR6evjMGF8iy6hEgMfAdW8o34bkMaLgNW18XsAEmWLpjp",
  "key34": "4sLBSXVnmUVBKnn4ZUtqc9j5SjWNiaBgFuDMpUFzT5YJWTMMspmWhU1MtPeTLRHxy9RhYKafCLJCSZWAdnzfgX72",
  "key35": "5DzbSPTBxoS63Y5HCgHXbYct3jmRFidkjNUERUq7NvTUmXwsvXiQVtjhVYKefNH3xVaAtH3zrxWPvn2NGWTKkmJn",
  "key36": "5xkBdaND5ZmsYPXa9GCCjBLv4D9v5iPcMekdtJXVZqizMMBRfNsbtoiPfzh6mH6VJVPgAzK7sKPe2vjvjs7uv87i",
  "key37": "3AnAKHn3ggnSMMqh12WgeG8JcRpFbUxgJicx2zjYxkYa31tTrhKcJnuwfncjSog3vrt7L1h7uUtkxjWCvrmJB9Bb"
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
