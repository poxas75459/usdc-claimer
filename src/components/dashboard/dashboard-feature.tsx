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
    "4YqBdMq21Awso8PjTrNSTKip3Vsd7v3cGYfAT5PjJLUNqM6w8ngbP2tdgAyVcU5SxZd7sQXUPkhSRvZASkDPhVqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MozsqUGdbaQxoBXJna4XY4GuDeU7Z8CKnTvGqdDWCV1RxaW44FdXefXvKP2xjy7qFNEHyedTSfwesBGJwcKb3MZ",
  "key1": "5QcYvkNtMPRpuvn2GFK7faobo7cUK4b5vbjvaQup57G7oEgL6EW6PXKn61VUbK5g73Zp3ZYPTxHj7Fhh1cW6KVUP",
  "key2": "u6UeWQfAZmBBF6mo8oLRbYtPR1pzDbVQhngqraKjs2sqKjVL8ytNF4CJTzpk9Xe5GZoygKfrHnW2FZkpduVf4CB",
  "key3": "4u9Xc7fDA5PYwVBpuPpqLzFymWmcGuyBMuAre9mk2J6Y2i9bxhHgzviEc5Jgz6SbXsBgkYGwP1kcisbEtv8AHYFV",
  "key4": "3Dy5os77bH3QWeKQa5Dfwq9WHttQWrWaTWW6vBgazc4u5CxBY5RWw9crstSgZ6xJyvAzKQ5rnCMETCzeGUkeYKkr",
  "key5": "LpmMJ6YntobaV8XC6is2r3KkuWThzyGoyDem72N219ziswe3yhknsbkzJ6X55RroNiwbSBzQfmhgL7bWuRCTKNz",
  "key6": "3wngfGCT8cpLQEPMe398ZnBonfrfsE1nVskPgR16QNLeHLDTbtL9ibzEbw28UYzfHsWNrxwJng6xQ3eoTEKG8mhx",
  "key7": "5jJHhKHZmX3teaDZTQs7Suq1SVSzwcrugweue7sUJwgdwDnGE3dMqC37zQyC6NcC8m9CBz88rstuYUjbDaaWS8W4",
  "key8": "XDRoJ2KmW64dbFn1Z3jNKeWtXQ5XVfes7xnC1XnndSLPVYuEbf8zHEcyj1yRGtqPt5oHpFc3ii13F3a4PY2oB2X",
  "key9": "5RywmbtDdXeyaNWnAdcQbWVyvezDhZzS1uER31eBmY7PB75ZZx29mkggfaNaEbusQwYJEBQMEmvoXMTGoH85ayyx",
  "key10": "2ei1G9JhnqPgjvsdXZXi1HH5YcnsVY9371rfoFQWjuWF96poJG5emDuo8sqKDnNypfEcaAKDzRetandyb6gcoAxs",
  "key11": "Q488uWWXaksEzNqea7okPoc8Go9LaMb86pED9nCJ6ajhYawXEd7mdGiZbQJsyJcfq13ysarm6AXkHHFYxjKtdoy",
  "key12": "5KYi78p6WY7rqaxuHhobVwpTZk5DU91WaqFEfczK4odaM1MxhqatdLhKStXm3KVwfXRNEtubsoQAnrWCpdZuDzMn",
  "key13": "4nGkdbu9J86dKqUzWXphiMqovpCmFHay2o7WKLaB1RRi4GgAJHeSFYqA2G2SF9XvY3cYFzLymNyqrPN4Hfg81AqW",
  "key14": "3SCFSWmXNvuo2KwB8hFBtqQMqsis4sC4UJJirTJxbvFVLZXB2MTx2jynBSQ9d9kV1L6mD3mtHZyshbbxCwrt9Wn9",
  "key15": "3KpRz1owxw5HKythaPZUDdrfmPJkWPjd7RQCTRQ1N87Nc8xzTpEXnhDWSwona7Ws11Tjf58psoVapWDavojhqL66",
  "key16": "3ehayLeeDkxhRWcg4migkFW5cQrACbwpYqBEaVCPzjEY5cLWe1cMLaZsq17jtVehyx5xvTsrmTBPAMM5rRZTbCoZ",
  "key17": "2NMdUoL6h6NQDwaHYRFVvtxv48dncsR5ckEFRjch7H3DvWw2JgrnQLzyedfgc5jS1TCZQun6rNrDdsPhJStEpFLr",
  "key18": "3PfpfGqnRgRQX11V6E82VjzUxC1qmkCD9htGkS7by34tVUUHS3MgBVYMxeUiEa5xfdfxx6dYSwDqm6RsSWSuhMP2",
  "key19": "4ECSSLsxEgoLPSvmFe16Yec9KUYSRrD91Ycb5uTTjb5ovyRzbom9fQCGQvPWZ66tzrr1J9G8fKF9ui68goGjBLeB",
  "key20": "41symXYf2LwQMr2hZYRbsnnKT9N8Z9zQwrvyY2GA5qtwynjpXx8cTGGkN3AHPbtc1SUMWg2i8Qg7vQU6wbSobVA6",
  "key21": "3QXUmwKZg4ajRYhMzTgcqiNM33Vu3yFaSs77nhqfvs12vhD7ja95Wfv4EVUKX9BEGqSs55CSLoSHZVPyPkhTYtDw",
  "key22": "2z4fiAJ3CqNCiaFMDAQLp4VCQ19y9WmXxzZq5Cfq9Rv25HovZFxYscbAmFCajm56Uk8WWs2aHoKtUgzwr6z3c59u",
  "key23": "2dbzm7ECC4y4EHsd2wADy6qNWGMSSq5fSoGGqpWgxmvEDGq1igf2ZkCv7mZaF6izH4UF3aP7Hrt8eWSxCbnnssGf",
  "key24": "gu7UxmMJMzPHWqYfCRFhjuwPoMh5yQQQA4Mxb8sjfFHsrLnishcHdzC1GBCZdKeN8azHPLVBT38XAJY79pSigbQ",
  "key25": "4EQAZ3c2AEUqm6Sqdit7MptM4pfBrGM31G7Gfj72j6bMe6CYvmDsBjXpxdHRnQoTDoUsx9vkAPMnmqNQd7R1edSM",
  "key26": "4NSDhC1TqiRrpE2NMQKENnRSZWn3AwomwZ7gRRYY1298qW3k79d1vyRqkSLekcZRSEe1LN6m3fb6cRdJNxYFVV7q",
  "key27": "FCB2PDdweGKodkmjyv4pnpkUm2dSigWMn8asginUbErSZFCWxqZfPkMeDVhLe6dhNsypMb3wXS5uThxA2qeZZVW",
  "key28": "5YX9E6UY8o4MNg2QjciFkRGnuAtyboEj3GGYeuDKsRAc8nxYp9rvnY8F6pNrTyb12CbfQbWx7stDLA4U7HU9N6Ao",
  "key29": "456ENZyReA6hy9WhW4BpBfTBeacsCNouXLhChedfEFH7GZj6u1mNktoCSmhBjjEi4Zm8CCfgEcF6tjPdAGLF55vD",
  "key30": "3xGh9UNDiYtLDHdxX4SUBucGtGYvehepmPj3grSLDzVHCDH5mb3wP5osA61dyCr3UMJU9nsR4kLeuMr1H7fhTzLE",
  "key31": "2T6E3kkdZ24KcFBL74MRmgQVtSpJkSzESsW8ziJkVY5bXBF9Kvkod61rxJ7F8crdGwQnxq3td2mAZu5hAxXocUFq",
  "key32": "22BvKostZ9AYbjoK9JUos8t7jGhFQm84n4mjxbEBKqKHz5ZM13bf8kBJvLbKZe5KPvjcPp1XhB3Fz8Ug31oHtRzn",
  "key33": "5mNaqd2oNQ7Pou9QVKgeg1dx75koQ5EVHuTt17TvreqwsCR3HHkjHMjiw8uKCePaFWbezQ1cWjVPqo5StRq2MAjH",
  "key34": "4T9645U8kwThCeFuUiziS4FkVPdAiu6obGGUf6DBnWXuVPzj8Mwgja1XcWS2nKpQaYmQKRai3myGCaK8mKSbnmCW",
  "key35": "5jAZkXKvSGENjN4PMdtx7WmhAaXYRDuZ1M4YXvS2xuvmn2d7e1aheYjaEU6RWSBaJmR6HtKyVA3B5JhqyryyxTgi",
  "key36": "2FBKcLsXM4rDvDNCtmozGKyaSmQhpkYSVvdbYmt4XUjAQQ4xDweAyxwRZm1r1GHr9ds9i81T29GEZYH69PowvREg",
  "key37": "4E3NNsQUu6VWgB3axsXaxFdiDukmHXTbBytJwEbyMD6soJBL2uaUUuHJTPFBs2yJPL8FxTi2KXXgbZzy3k5UAoph",
  "key38": "36k7gmQuf5aMXkANBENsXcyVTTqRU1naF81SYAqu9sA2ud88mpbtG1qa2prUJkpXLnath2qtdQ4RRLNk3whpDway",
  "key39": "qUhsN2XsYhPVJ1z9zTEhJJbAjQ6ryJNYHZQETSysuvsWW4S1frgrYdCRz2kNgwNmpM4dCc3uXZ7iJCUxAy1sdyp",
  "key40": "2gk4pV288vdQk9bAgNtXgjfavCynk8Le8Y6TLm9ajeh5hdTRdtMQmmSTkw9rhQ15hNhxTgUDXpNGMf82mf2jN6GE",
  "key41": "2JxHKNkt2kNGpByfBXj8Y1w2wESWAAyinXJgg3RZ3kGF6rPNoHhdsjd7rhrXr7muY9kidhUiG6qKB8kYWrhVnpVv",
  "key42": "4ZD8F5WBWCZDi7UZEfjtMgBApTq1uDQT7ysDNt9nzGXZLHfVYKSqP14AARixGYexzuMCSiCBCBmyeccjGnes5Vcr",
  "key43": "LshabonmvoyGSkePK8f4cTy8uy36P68LA85BcaZwPptzw6zG8bj3crwo4ozBd8kcAGbopEo158MUfzxfG9Wsovv",
  "key44": "4oAudd5tbCKXh98fjZMaJ4efFsBBaYfsQvJFKRg1YkqatN83GrAX6Wi1evYDg9phjJMuqyrNtpRmEUYdx8ikuw1G",
  "key45": "5DnevaT4K5phDTcrKf83J4TenKGD832en7hupwiCRietxcxxt2SvatuNcKTp7trfYzDyQ6j7z1QjNQrSMhkS1AQz",
  "key46": "3mV1iLwHe7UCPdbE8zAvs8EvDxmsCDWsqhJmJUHH67Sk3Cctie6BF9uGoHsZUmGQJA699o2KYgrWNwZkUQuRsYpm"
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
