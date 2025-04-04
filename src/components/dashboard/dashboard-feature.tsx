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
    "4KZsa54SkVMKh6ZLZrXoJPz7qV21upFSQ5gKvtVY5mcDRCDEvQEq1Wfr45qgF5FnAYf3sfPx8k8waTD86p2ZJsKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMNvLEmsgkFzh34UhvyBEKfCK79Nj486Ud7NdMHtutVdGp6wMBiYqcPEgTMjWNuekBVaHepjoyWYcu7Y3NsXxya",
  "key1": "rU2sQCjK1MXqVSM9TagxpNXEcXYWFjWxUqrzMJsNJqkDTnjav2CetXm2mNycLPmsT9n1eDgkjyyoM5BFtJvSYnu",
  "key2": "mu7pwAoGzwEyPZMi7owMhTGVoAKsrDNTJpBp8ZPHj4FVWfNhgg7n2gGAGkQ8S1L3iMXWqa9ToBCWi7cKKuHAv7j",
  "key3": "58Rg1KhWUgR3Ghpq8gNvatufTfZ1LrTGc2BETayGj2wtA8jT2Dx2szMXVEfHZGoLSbitChEW56mSz3KhEdjSEdfL",
  "key4": "tBqULiAVJ9Z9kkHB7arDwzxsaCSyzq6w6GN8SZHtTMasFSLkBNbjGa1nwKoyUbXWDZUwMVUxZ4V2rdffyTqqv14",
  "key5": "5x6RXdGD1KpMWDE3poWVqa1KNoGCreDveEAzZeg3gJUGUV8GeUa8QFsShR6qq5CfpAwejvdy1CiThdqM1AzTkR9n",
  "key6": "3NTqYgQCQjxASNWpvwwMTW2MErAH3pVYHA5nS5VP1zryM23qXLi5QZ65Z6c8hUDsjnNupMhMXh5BXyRghGNKML3u",
  "key7": "DiB71R5KDNo1xFjAYVhmDxZvvWBswoS74b1mPo5oEHHfN3tE2MN9JXFygi8gAJmy9hGpqDNZ6GGKpkE57UhRn5s",
  "key8": "5RsY3KBRjyQUif2ii38fZFD6heP6tWFayXW4sCV8U5BpopfrmwnP7Gat4FeucVD1uZeqYdZC4PZvKj77zip64TgW",
  "key9": "26xprt6t98P2T7dBKu4cKn3NKwd7tRP2m5zAQk6t1XJmUGZb6KetiVbWmHymicuDZT8EfNQYJtfdnBTQZGBtnjBE",
  "key10": "182AXHiLWs3JgbrZWFVZY8Zx7t5CkfxYg5XYjFakxSZ8me52a7jH4pBdQk3ySNHZPzBHQeww4c59RYAHaaUtqA5",
  "key11": "5wJT2uLsHYW1uT2YsJEFmnB8G2wbKgGm2jVd57VbgsySsd51ueXpYEBSmsvSKXD8YxxoTj2T2aZza2WmPVFSsu7L",
  "key12": "4DqNEFGwWN5ZY1gU6kRxMZsAuqseaW14tKjeiXhUK5iwbjWy98xYCd84TaZjadU8N2yS8ixwSW2GB5WrnSUQARpq",
  "key13": "4gSkXfHmAUHAKFZaW7A4QG2bWE1AtfRiiUu7QP1psUK2sqWSKvhA5f5qACPAZA2dLBo66WqWYw116u6uyYmN2wax",
  "key14": "4mjKoQeJSmm96dh24vGx1zotZzRbcnAmDPmE8MancFvQ3JH1v54YNeb3iSLx1D6MbFg3xBinRLZEk7gnFUtyWy2y",
  "key15": "3dDnxXQEueBhqLebnszEXroZnDJsEKNyGkX2d9YqzMgL4ipHGQwpgyZQojjkMNXo4dRpVbGMZkm4eJwA1Y4bwkGM",
  "key16": "4SuzPR7Kv5LYiW6RDUQy2A35XFbJfReaMnxmABgVEEXAmXowGasBwyt9NFdMMve8b3FK79svGtVCxKMWgMmNCJ4e",
  "key17": "4EaAVtaQfEVvV4xXfe4ipBtgYoBweo7KkszXRQyNyc9czokXVVSgf92JzJ5h1FLxfVMwPSf7tg8U8uxFJkhjMTBf",
  "key18": "4z2bvj5zbNzsecrytb7Q7xQpmSZWLck52k8euuVTyD4xw1s1h96AFRmHKKgzUPqujZhxh1Tg3KrWcz8R4BbNPZ5v",
  "key19": "4FJiHpGYEUAbeENkvdXHtLJiWRCVmpsvKQ1N6JUUemibP2Mnj8xD9ixw7zAp1TGuQX25VvUMFEghm9wpm4HrfqpG",
  "key20": "3NFtYg1TTnrAQtLnGNbqaGVFxgq7A1tyBBci1Tstxymps5WbXdSZQ13N4L52fB4CbrSBt96aDYwpTfNdq8e9zSrJ",
  "key21": "wq7xnLfrA3UoLCs7fwwLrUxKrE3vuMvPquvfFR8Noh7VX5eebi5y7wnQi5YnQwMTAnTuPnutSrGyz7i3vGJqoBm",
  "key22": "2U6n9eTPRRVkEKQDfJcUDbEVVv1tvfayLHFZp2Xpbzp6R4KT1fjy2r6UEXfYfWn3Vr9M1H4D47Et9phGoZ9eRDN8",
  "key23": "63qdjFgqvmG7LaMFLuUtQpVcnfFjtncvcshXdcPaqejTrTSVE33cQoMSqfaX6sHZdK4eSLGzKastc7ijH9fsPh2o",
  "key24": "2p5hwMrHSzvcNX5GQ2EduCFu7GS8RNvCBThHpppx5uKwckbA2p13rBnfAi18eTtZfHZxQSBN42884AhUgxRAUbjU",
  "key25": "2vq9S3Gz4FnMkxQ5qPsyHtWbb2W6s3d36gHExaWqBHSUgFsyxorkSit7Go1feooRNf9zrHDj52x1cv3AXQwyeX1E",
  "key26": "2gnaKMgqu2MjA7T3dg1Tcmp1xg5yWSSWRH7ALtbbidmX6qBkvgnGXPUUd8zkf2RsMwQHpzPE8VzWETE7Diyeayzu",
  "key27": "3q49a7xQJCrkgAzmbUvhwZJENoNz6pdS7R1StVA9n9S77EQpzW46PneR6pgZhXru3jeL8KWMNASjmbd1R4FvB3ef",
  "key28": "66mKFso6FHrUALorckjyvdvniVUpTM2DpipsraqQdazGDsUE6rihXHybzFY3v8sHM5ZHPSXFVjogZqujxMXyMrcN",
  "key29": "NsJW7HtMTqdtWb5kEqwHt2jN2d1JbkBcW87kHokFurtRi1YgDviw3pp5rr5KQoqSP1uXu3kvLGLbt7zAdafWcGF",
  "key30": "4t9eyajqPuprhKMiGgLbpRFmWUV3m4MX4ARRova1SLiPthoKqteZubcxXQvrFh8LrKsZVgx5XAZLfyAe5D7dDYGB",
  "key31": "dsVrV4qumTxX5jwoAHU5LbNgufhrCSLyQLGWNgjroawYzisWiENqY73YiFGa8Q8yuwbqRsCDez5xSpfrAvnuABR",
  "key32": "tV77Yvmr1gNnaVV3SzK15giG2ZLHhvC9KstkpGMgMdjsy1Ep9T2LQvePog3vSNaQZpDVj4A9HGJcj6PmWXXThKz",
  "key33": "6nqvTNy7LFF1ZkgDmZoSKvwzUfxXEAZMrj6A5N3aXyZFTseNVrnymmfJPHdeYb625d21ynL5JRvsadVTiBy3isK",
  "key34": "3jMjuTicoMgDmFtYXN1A3dGBsYuCAwgidumbqveGGGGcu77Gy6BGpW1ufAR2KwvcEvnbu8Auc82vAPS43L12S7bQ",
  "key35": "26XKktVjpoKr4j39qpZLd1BfvpVLxzoaFVaiu67ie2mgyU3ZvmRsc43FS5Sya1sr9k3fezVSQiSVV3z4XDvgJzyY",
  "key36": "4KwmCHTDG5AXrygfJK4nkYJdJGWi6QHqnu7zsW5cXPLoFfn4wEymuwzs3jvEBGBBUCEnVo4nPgNiPCP5T19qL76B"
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
