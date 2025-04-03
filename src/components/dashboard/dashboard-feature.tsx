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
    "5xGcfu8gzZFwcaWpDgVsCBVFbNW8WZXCHUqTo4uggmYWMWbPacw8ENainW45oFWBfkDRD8GSTC1mMqC9YSAppjvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZHc7Utn64LZLsxQ3F2esJXUixBLwq3b3tzN1yhrXKJbSDJrM35rdLySxwp2YHx72TpRdHjXKyZnpif3n8MVbUP",
  "key1": "128qM2JpvksTt4oNPcrB7gxjiaAjPDoyZrmZkpJZHR3L5mU18kNN6aqosZjgNcnpHbGEeLr84GGhrGLUj6JXaBDD",
  "key2": "3cDvSmkSMdKUwFPRYpoKQKsAq4Bum2MipjXPMZnkQkkBbhpR4D8M9pYWQTPyV7b6Pb5XhvABKQ3JfXSyMzqj8Qha",
  "key3": "3eSE9AKzQMTfpMLF2ULfDKvbQS8cNgv9rQyoxapDXKTLaHzvd633eZr9bSGG464X1zzv2o7goegKmZWWJnBi5Lk2",
  "key4": "4NoXhrCF1atahpPDKAHPYvoQP12NsGq6bv8rStFSbfRakXg7VWP4suytHAucPTX3kEDqN58PiV6cLefrdcde9q1C",
  "key5": "22Nanutdv7PAsT4LLeAmcuXPiNP6EaPZTRkZUKkvm34cmYRGtyJFqPYAaerx4JKwBz5TJWBUAoa69X2AqSdoAGGx",
  "key6": "2HxXmZEaRRvzAEKGDYBxYbN7oWMMaDRWYxAYJWe8DNTS9znGQp8WLgVrMAvpSivTWcsPtA1MHWew8JNyRmbhHLE5",
  "key7": "4hiYyS5LzHTwrEJXnjDmrL9LHZQfePegd2aQoVg95SjMjBw1jsFnzWc4oV71WvCHbjZ98iw9B1KNKiGcGszHxZ72",
  "key8": "5hSggp3V4nniXQHgwUQQMqWKAqn43hrqxEssuomoprbgBhffftGWfjqrC5RQN28LpZu2hq5DqGtNAKLVakD3cpK",
  "key9": "2pLXX9ojyqExCtGAREmJ7RKfNonsEjb64KuPSZmQEiz88MwMmp56ik22x439ynuSQzBYtfxeQJwzAvuGXPh6f851",
  "key10": "2jXk1asNXFc9DZRLpxKdPN95tW9cseQ496B8M8Cit6vXVj3akRuwb4pHDJxbHVFGXyYgxjZdAAb7pCGNcfrCoJDH",
  "key11": "2aoUkpMaQfBqKnV25mkn8us6pEUyjCG8BJzAGFb5qGdqbbULJgGS3597vLvWDb9WacpyeRGGkvjqJzSmp833vSjB",
  "key12": "58u1Zg2teB4Jk72kdUUcnzdVsXRmgVSdkiW6CG3CjTfLRk6qtUiaySABXLNHugnnS6vk9GZgdPue7AVF2iZcVY7H",
  "key13": "4btSbwZNGZzaDbWCM5TDfcXSncxaUp3FV5WY7J9FAHqcNMjBsp3E5R6M4mojepLLkmFzFXFCwcmCGrfAuRCmiWmU",
  "key14": "9rWCgg1LvwFo6jqi3GstjvRPbCNMfe42WEWNLHXaRctBMcrqGX2cVnYsB8igJZZuXKV7h1tMiZuGuEL1vkotNpM",
  "key15": "4oebxNo8Mfn3yUVp24cMEmeHjE9QhhzMca6nPDWmXCRXPiiLWwfQJEe2Q4CWEyAb2pwStSn4GzyBanj7N13ESywe",
  "key16": "55E1i14sDh3z5juFh48i1EKRdu8FzsYJvr5K7CCzrSKo54uU6hr42PahDABRC5m1adD8YrAPTsHyi53RGXxxw8nE",
  "key17": "4sYMd5PVUHeVJe86MThBJKvcSz5kQd2MWjKHJjYYJzEoe66rWWXcPbB7bVJbRF2rHT2vWTnBqnXPcgWuAiK4MtqL",
  "key18": "jFSiX8opGb7eiv9UCB1N3S2HsDpH45RVKv5TsP5pshqiYNVhysAyx4kgc4GAxURAx9GtLF9UW6GfmkJXfu7Nrm1",
  "key19": "2bNhZkixs6E36UuAkmEw8SV1SF1pvWnM7AkE7x5Tk7HMTAr9E8LWfGCHBgEsBjfRaewFPZyjREMeheDdDxADds4z",
  "key20": "5UH2WuAPphS43m2xCCg7KtpWuxQpZxE8eBK24igUb6dvXTUBKhMhJwHSYfaY458n89idK6ChezMp7LNibCRKKTqn",
  "key21": "3owiWZ51pT9XsXjgSSREHPBgsWgpSrBWnQtf36emUhnYxcdB8comXumhRoRcRxQMWU5doUbBUZZnBeU8TQ5ywYVf",
  "key22": "SkDvaKSRHsGp4AEmGLuP21i6VPnWj6yjLYDM7ELedEHbqEfqBfAkCYFzisVmjiCBMb9nLiZoD1cGFCYJbuxyaPR",
  "key23": "5d59EiTaNWqNiF6L97XFphUPPCbKvSC8dm6jRCPV3mrECeLfYdYPeJgvzb224Y6FY82NiMpoQDAVWV5yGDeFMJcL",
  "key24": "35iqUw3N3fYm8xuqC3thLXjMuXjSeMjqkb4uhZ127nkDwdSaxfvk7CoHarMhaE7rKwtFegTYCKuDAZbYpDu18PQj",
  "key25": "2WhvTHS2ZHSrzX7VGY4krzmq8juRCtWMfr4Xtiigam2q6DAVUt8txFR1qfCYiKsrXiPscjd45k5ntHWfXKZJRQP9",
  "key26": "4atBMpehRPLjh5xSuhutLzypFrvMdHqG1wohiKp6rL1pHXHFfTTe1FHntj6QaXad441PttyUdk29xsULBLcPky69",
  "key27": "46zT7qpeVBATeELGfTsKQq5CWQ5d7MmMsUWbeHEKXvWWvJB1pmoz4qg2goLg15uTmNtyDSvTGyGparo4mpXQVBBC",
  "key28": "63LdWrNmC72djA98XBun8gaw1EdThGtVoS1TQECqxCcStLUp59L3VQFdwNrhR5985tRAaE9dVHzSp1R4ZQE4LCmW",
  "key29": "ZkCEpjBcAfjroNdE6wve9KCauiHRwpBkmbA6sXHa1Ye3X4uUdRppMvH3dVNxYGBxdkcZkFnVpZzwXSeySmnX8sv",
  "key30": "4PxLcVPAg5MJSXbiuP5JM9AHDaEHy7ohziqDcrNCMe5LiUofryywk2udSLCkUdcDus3RzL6bmURRdGKBR8cXQtuv",
  "key31": "5tqFiMvar23r7hXcjD9pPSuZNZ4TWm7Xcv7xMcxavV7b1VJZeDC85RSB8MhD6Tn13E5kMsdHhJn4UkTga1tB85T4",
  "key32": "5yCH29jFupEg6AaEFbhX7dWWoCSUmhJTBsZUH2cLKMigNoc9XGbJKJ1BUmXiQmDGGCWrSrXDWjqDzUX18nhEDRAV",
  "key33": "4Sk633krS49SvuPoxC9LALsWTx45YdXrwa67sfnYqbuoq15neCk9LtJPTsXk5FyiSTeNWd2r7ngMysUsbUhp3ksE",
  "key34": "75Q6sTPrvkL6GvZmQyNDBx4XEXNYqnRU4mBwjyMuEXoJ5pC13TQEYnpa12EuQJGpNX79z5uDr42DnGGbCmBUNvX",
  "key35": "249UwiGgDWVugqfXrk9q9c2G66ePw77EPu2HTRS8uaUQA6JacZwU7rCntLB4Gizd2WgzrDsA2kJEytqg9Ywh9VXX"
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
