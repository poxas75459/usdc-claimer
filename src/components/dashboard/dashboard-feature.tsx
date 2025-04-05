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
    "2iTDi7spsPznfPgY8wLeQLVnrKAyxm9Lcr3C5b2dsnfGLGyFdmVcumhAiUEBS6tuaW4E9LHWxiv8xKRM5mbjYb4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUsFxFwKLQ4KTczXaKs9bdCZe1PqAxY6gSHceySFq41qZNN21aYn5nckoBNyEZNNCCh1xdwQ6USZxSh49aCdyRM",
  "key1": "25Eqxe3vpzh1RS4JgF615tXpzfXxHvzFomR5NF3xEMaJgdqQkvTRCtj9FhDAx2Pk9v75ehhqp66ggEjmGEPyg9pj",
  "key2": "uzehZBnFLv96jDfa3C2nfjWdeB8e4oe2T7aDr8Tbq7DhrRogUiKg9Z1eqs9umx19j2V9HjGqTBd2SxjQNEMi52f",
  "key3": "4egkxzPo1Shx7RcUe84aqSKN8H3ouz9H2QaZLj94M72gSKoLvRzxvoJBozPPAamTpc5xxNUVVbySbgmF59X26BVf",
  "key4": "2nYjaDxn1Ms1dh2jxnmhg3RJwzrjbM2BVyyQezpV4eYJWa9sGKQgtaetHG4GoH9y2t6gFwpN92sv9CGoDZJmZUHx",
  "key5": "3zeb6265hg6wei7bVNirdjJGf4oENaPbJuUzRmSwYCUanraGqMSwPU5rwpT9J82yfUFpDoh2Gd7GsJZNaQ7Pzqex",
  "key6": "z4QM9rQq3oVZJZ64F7MEhrCLurTLRjaFa45gzBpSZcxyW2r2JFXuVFvjsswguguFhNXPTPJeVkEhQW3qh4ChU4N",
  "key7": "VxXh6E8Xf4LExYkLJctKuNk1BpyhEJn57bNS9iLh2isSJ9Fov4bPutHkzQvV1tn5fEo3DKceWadvBeuTPAdB3tn",
  "key8": "4oQa2kss1cfHWoaZUJx5hgMDziz9YoFUsQHMy8x5VcaC9Fti7hqN7b7xgJVhYWRd8HLJ3xqDADSUPSyYCArmLHa",
  "key9": "2i318q5BVes7LSUb4WG2ZQgQm9rUdm9W9eokEeGQhSsJes7djjvg5UJpwL1Vo9JEXJHdv9jFKMHSQbS1cGbetvwq",
  "key10": "W7NdEvBFDtqgSHaZBX2iTrdnAsobtPT9GDjWeyVzQzCw3CkNpi7NyR7w9SnYDBAkJqtf83Fbgdi9zuec5QqYAme",
  "key11": "3y2XhwUJ8NmySUyNxSPbLjEkWQLATaa1PYontHc4ycihEcygcD2QzfvNxVtTqFTtocg6CjdvrUsdhW9LUPtSzRy5",
  "key12": "5ErpPoW6T55iNK4T9MwjRNmadftraBbhj7AyMJEgt3pdQJP6rxjZWxsVLvARGM9y2EVsaepqYVGXEteAdWGvQr8g",
  "key13": "3RsuMiZfPoB5hKxwLqhHB2JWcAQCCsy4RUnNrMGooVX3wdfg6u48fiHH1feM9gDhbyEKQen5Ahoh1MBrCeEPcgmL",
  "key14": "54cENSrUrZYoREQE19xNL9iUc63YTWZRCs5Y2ZNSBWTZ7cy8x4a4Wx56nxcKgUrfctzv2DcCVbhHGN2ztRUiR2DT",
  "key15": "FYtwWRe7izX3gDnApcWD4EFdezwQaDNhHg6Q1cWGzVQHacbwVBkeSAyjKawjozHCv2eEBpr8UQcDByoLJYRkWYM",
  "key16": "3EpRoeNxv7aQsbbCXQvuYbAUknSMYBXgapEfBpfgSoc3aExry6HeGePWBHj9BMvCF4ya8bKvZscfYVQxbszYpwTZ",
  "key17": "2RetMrhgJ5oxdjiaPQQ9jdGv82hYHtdwFsSsTKFC4bmL6naFr7LqpZFsBjc995GUErvLoStGCFkJXA2mthsoRT7r",
  "key18": "42xptZTn1aE9xD3twqjgr2SRS9fcWmLwdH3GFtr8giRyMU9Xy2hweKrj8xca6z33MZKpxJCcHDfALSY3Rh9ze9wR",
  "key19": "5yfZu33tkJKc1K9pn2Fjai2hkPENTZvKkeYKNmp5JnGoMGurcFaAyfq61MtcxVwMMFWSn1t65gbeC5G1RiadpfBM",
  "key20": "2PLyV17CpeEWS2T7hN1vJ8eWat2vrE4TzV62WrfoFsRHVP5qSg25WwhYmQzXEziWtXWsKWw88aLikHS9aWnc7iKJ",
  "key21": "2o8n46XeB9gNp5MLmUUNscH8kAmWCSvCvBnJDNrvUCHBcTAz8SosyTD2PVjUmSPdNbggM3GvqsM8MyBJBWpxt6jV",
  "key22": "2FoQQoG4q1Hy31t6M8PiaRLj55vVKiYytgLaacA31jctwVWmEMX9Kjw3TsmbyKSNPM2B7uqqsdiezUeHBeJpjmbt",
  "key23": "3uubauuFeAQX3FWzNPeZt8GgTC3xJa3PzNPwfY5RA14X6qUCy2VjAFU6EyDwAnhBmCJ9EGTG38wPuQZxNtXmDGM9",
  "key24": "s5yZWjrncUUChkngCpzGdS6dpZwAW8vDyPPiVcXmEUCYYYsGJdim3aZvuXraBzGGcxanuRTQGRiumfy5kci86Ux",
  "key25": "4mpKZzXNrj1pBrDnudRDXE4Rat91SYetvxhKYv4dZQaquuPhEeQWXGGL2H8tnDXzRosRur7qWAxKbUUfEMhz8khG",
  "key26": "2KTFBpXFu9VN8xKWTx7G7nPErzfMHTbevrwu451fTUXKDiLbDXjUUR1kEimZwW27QGa3Yu1ZGxihaLBqY2HQ1yBG",
  "key27": "2HhKoeUP8DgUxwjAu1MiKZojpCsnxLMhS8BkiDzhaxPD1oEuLSyanEeRE1FgzM7GF4FP2fmsi88LW5pbjRcEViQ3",
  "key28": "28cUJJrDJK51DpXF8FbQ5xTjZfotPLScrjXKeTuXePwhNk3h7mGxsbzEgb2tFWx4psxuMDgf7qC3iTi13rbk98qK",
  "key29": "3YXjuM7uKFhd4UQCTYrDpBk6uUkauEwUyNvY3rF4RYLqmouYpN5V5t24asi3Ta7yjZ4QHDbLe3rTYDyFEiUByEMS",
  "key30": "2gsJsVuzmh8tjr9uWdseETcBhjntw9B7BxfKMxFKyZnfgGEEneKeQAGp2fQsAVdxC3cZdc3qikXt7kEkMbt1UXHX",
  "key31": "nHzMsFSdaGzknFQrjEvgvpaSKWEhKYTdABQejXqmBRfbcfGj7rwHMy8twQLJDdFRS4FBU7G32hieJK38DqfYUG2",
  "key32": "3YUJd6ggPsQttExQftT71ytJuhrrHQVNsp1tS5jT3eRbBdwrzgr1uNxTxtNLzYSMkgbCwkniocxA2dij71hbDdXN",
  "key33": "4wELLzcyQrUBKMhdbgQqcELeDPH4ifikAWWTURWwqREabEgTuEqgyu5jrxVFg9fAFaVzqJEcFpNXoWNhj5jSKhCc",
  "key34": "5vDZ5gcqkTYUAeUfKmLATmmNEWo6Dn3PeoxvNs7aQ9Wx2BofkKF1VLaHycpN6S9QiX7wF4PuiEMaqmJokGPKb5YU",
  "key35": "58n53EZwyuQW8imLL7zpd2AdHE76NCNCuUMvaG5SR7aNvYXGvoZoKHhZtWoQdASPjYNMsESmY6cspR34YV3HkCiY"
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
