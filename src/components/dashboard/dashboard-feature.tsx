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
    "3Z9Hw9oa78DTrAPUSgytr7B19VDc6vA3KaoNoTGbPgm7HtqyCVHUzDp7qz4rXuQ8XfuFn9whwBueP1iEJdGfDrW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKAxJfnDGabVRVFYdRcxxKGxhmcBphraYg9NaDo1TnSxBZjWJsvKPuNaKBmwkYP3mJWb5LS2Vw2fgaKzun5UEEQ",
  "key1": "2MS6CTCaLW4j5xGX7J7n14kKZ2ydaFMngRVugr9PoeBjGTqpH92PaF7GWbsB78mc1qSffAVqjgb1xWNFupKA47Ve",
  "key2": "31w8FHirktbTkhvR5CjaSzgTGuHoLZA79EuVBLfkR1v6iR2NigpYXXs4a1vVcfVXU87NZoFWw2PQSpkxexy5XhiG",
  "key3": "2pFxrnuVXTFGKnPfaCNM5HqRXC9C83x8yg1p4BMUbXnCvzWWWz85uoUxNQEGoTwjeukjMyr1n9QBvwVzP1AnzJGS",
  "key4": "5PdoAp1bThF4nkMiiGPLptUhY7cC7aW6MwM2ND66kPkSdo1G6vof1tk6P2fsjUWErMfnHfSLfHSgVd7LADVtdLp2",
  "key5": "aUvQJXzWX6fn8Dfwv1kdNC8Zcq8xBGCi2C8QwHNFQRabhy1tTC4tNBJ2WhHbYH2DSrYtHfFw3Tbia1rR6RgkLHJ",
  "key6": "2BoL9UyZQ9ypcAVjAs9m3ZQWRJRYbbC4Qqezsg3nok5FrSjwe3Mp6TcVURA3TTa4RziVLBSrwMZKZoomUSGrpmLJ",
  "key7": "5XZBE82HrgGXaGZJ8koTP2N1ZmSeoDj979vxXPhzp9H9qyM1Njj187cD4rZQtNQgWzYPhtKE8pJKCk22vKRA576h",
  "key8": "2c8h1pcB4wyrC5Y94Bg9PPMpNf1pzyfWXeWGjRpxNihoJZzepcx1PggRRh3auVBJgMGbHjBKPp317YFjHt3G7zeR",
  "key9": "3XakUgD9mmeM7oyf6kc78zfdkeATsqGrtp6JW36kbK31DTUL3hq3Aue6RfMtp9V753UoJCMj7fNRASjhREStXU67",
  "key10": "49R2Q5ozNxdwW1oYJvPwwuqp7WgxAAHetRLEDbbq5HXoZ4ycwwcsXgq5qSsD3vmroLWydo3CbQH5Mmv2YvydYJB4",
  "key11": "2j9vWjZSKqmTLqDgJpQzv29WJonZ5nfGMHEdJgrQADjcRZijetuySkGt3rdySNGDVXiDSiZDvG9Wz3anuf8bpFft",
  "key12": "3S2ioqPAeC8o6Tiz5wjKpGNB9x3yWVdXJUAtwJBAvJ1Rgwn6KSmxkmhah3qhx1M3d9GRGS7sK5X3uhD8pSMArae1",
  "key13": "5oJTs36rLWcqx1k5pjzD3keYkptNcPtG3HpsWUeyo6H6uSyRBnjX1pABd3vHDewkSpwHJ1VEy5FLQVawzevQG8YJ",
  "key14": "4DxgDVN2an7auHPpf1cxWz2zgiKdSPXx3Fs7DBqjwsp2qfHwBHwo5SSN3bovWK4SKDYSuV3ajUvZPXkeXic7cXpo",
  "key15": "3LfLaWpQVicfgyyAhupq27sr3bG5vL8T1inn3s9c6bUcqhydrJkC3K9ZmCMTxAAYgZySmLSAdoJeCCwZjyAGcYoJ",
  "key16": "4YcXfkEd8yrCnCqou5xnnM8p3f6fP49bLFVJEgbUSjhAkRNjfUrLuD9yGfESQjvViTjP22XNGHhc7N1Y3f98m9hs",
  "key17": "3JED9wuB5wbEQrqAxCRugdAZTHhbdi8eoWf8Be6cZ8vAykE7KyGFuuC3SGrjdtWtcDsHWy3s68ftgm9WRgUED6TE",
  "key18": "X7oqf5WoVQQMreB4PB7cFPE4n1Z7f8K8vYKAjAvPMSnRd5SYkG5LxdV4kCBzgUdPFKFCFBQKmKYRYdD7owaxtf5",
  "key19": "5jsZYwHqCScq2keFFLEjs7UHmzsX23YyisnFEjGwopf7VjUzBfSV19yz5f9jFg4Amzc191SGBgePXQixkT3EbeCH",
  "key20": "2t7fvuK2dbteoR4pRoNm1vstH9141hiEoPvN8MYwvisUnaaLgRuZoGXcb43LkPzVaKNNtEaVAKPPkjyoTdjgMyVp",
  "key21": "4DRYwivasEeZUhe5UgkfXEoAvKwnbEJcMEXtRDuxpt9i11V4e2rmuLmxFFKHPx2kJSCK9nJN7j4uc1xPvB1YuR9e",
  "key22": "3xQasVweUPRkXjxe5k4vubenC3569BWgkBTmy2vXpDc4619YmW2RAeCTzBoRzzwSe9otRJGf6wDPRw8higxFkKGn",
  "key23": "2juq6nCDsuorSnQkkCEaCTDtsjsyNpnUKnpXfL4cPEiV5oajpvAxNfm64tizUZj7FS1xVLruBSZjSAJ2hyyuLfpX",
  "key24": "5t5ygMdjkyCQnJgmCjEeXVxcXMNqfS7NrH1XHXfSbxWz1U98TTGrqcymdJSirxVa7ZtzdX9EgeccXDe5iieDgdfy",
  "key25": "2pZREocRKW6UsQh53BDon2SPWJcosfCcxEUW3Bx5GTJBPdeiqYGMc2nPuUchUX2uNPf6vpA3pShFnEMoc738JA5M",
  "key26": "5TeYkFykmYcoyuae4hDvYYnFeeE1VVNjyM8ViFKBTDn7ukt2bY5enVDjr5RZvDmVnqTznR2tJ8kaGg2R8S3zuNzw",
  "key27": "4hMxuUVTRcuUdQAaPGyBVxdEAJgRTycbb9MUCbUK6qxWumejqmLzLWuCKQFiMEABykbg5UgopaiYPKMvzwwmY2h4",
  "key28": "2tkfZZp9j6vj9RHMJd5Jy7J7AknaZC5DFidJAVsGNkj8DSo9UVq6gKpxPstYNo4RcfyrEMgjrzKe4NhyPYaQUjXN",
  "key29": "3xMV6mZd1RDhBzrrDQfioQaWRbvR8o221GSqEHtiJ7xTKTMSsgsYF9V4kJ2GX8N78YYKTEhPoEScacEWzXwXjxtg",
  "key30": "4BG6ZUTxdYH5agJkQhpgFek8wi41nUi9N8dtzEocfx65mgzGcrg6NutL65WacnyXNLGadxznorGQYSfo7YWap8sL",
  "key31": "jMApLr25PPGUrJhbq4unHNgKcrjikyzcKz6oXHoTfWxboxbuXnPaMA9DtBueARr519RC1M9xsyKp49Ecp3Q1p7n",
  "key32": "3NEekamgtzU6BynxDMBr6hhTH2vCN1mtpMmTd4fF5K3jNKrePGWjCtC9hBo4DGPkiMvL9X7cQP2zjGdEUKZ7YVd2",
  "key33": "3grcWDHr9BSS5GV87QeXteu6ZNZGSKpZTGNzCfiMt5gSms2vbMr25ogz9JpG3jmaUQSkwtsg2G9tJDGo8uR8L733",
  "key34": "5c12bUZ18esk2A9CFPUCFNTPecqw2NK3kL9hDYRzg1FvRGkya5QEq2eq6ZrUnDbzH5FM2PyKGkAN4Thc4Twy4yHe",
  "key35": "5gNbGbwmxMtnSKeoemb7A9ZpwAtSgpSBiprcNq2kEGqQPmDPLgbKS4L6rkLcikD6X32nJZnaqKKUNpwZpRekwWvX",
  "key36": "pcMHpQXiNJkpbwiJXLwpRGPFX7b7BeHQoqCk9hReNwhTAoQXZmBYLYynAfeHtkf3wp89V8Ay8hArtmk2JUQzaKK",
  "key37": "3EKqQdpkWqdTMmfTUkALaBGKJAAXJRVe35tB7dvBTcCVE1CTnXughxawem2MYbY516WNhRjqCAZozXkeGbX7XcnU",
  "key38": "3wXuHiYAexS1XQy2d5td6ZjeicVYEnGhSBASWfSPUisRDKXXMzQcwdJwwxuCdBbyDdVoGTJUCS3WDeTSF1Mk7Raa",
  "key39": "2r684oDi8bJpzHcgBZ1P3QZrGYL8hDuDUXpj3yTC5JZyKdjNMDD8EcVJtNrLZoCWvHLK178xPmUCnV6kRvoNfdwU",
  "key40": "4TjPjGp4aPG6RvbyykNZAzvAVEgUnM66oPA7h6ykLcLihieaomAcFHnEd3mYvpstGP2cKjvPxQabsf3w8MH2ZYvL",
  "key41": "2pmxR8oKnzS4UaeQbLF8RdpuNGp1tW5snZhwVGhFkAHMFRiqYQ64uZQ5w7tFAZnQnkFHrR8aNR86Z2RSkaBy4aSh"
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
