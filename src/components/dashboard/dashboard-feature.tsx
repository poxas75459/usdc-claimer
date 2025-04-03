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
    "5FwpGKqEes515crBFwe3sjTTT4xLQppoXhibLHSdZwmsfVYczb8cuvHBCvBWrufYi2MwinsZXXMp6PRF6SThw9Ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSd3BFboiwTK1YqeD3Q2a8SYf13DjnVpemdKhMTAZggKJ1pbBYXunqCj165isduFzZdPbb6wrEkesY1BxafQ8e6",
  "key1": "2QAMPa8KfPM6h1DFeg9qoyqvjnat8PFbBRJEFWjqSKsvopit8mMnF76yAr9Ed1xLV5G8MRKhYPkb5puwpjsDbpqb",
  "key2": "2useQb3Uoqxo9QxNoyWTkrGxLPZ6cFjwU5Y6s27Cv2dgumQ5fZtaEPJDKXKm7uWasQe2eg1cr9g7kMYybnLNAnew",
  "key3": "QKas6x4wwx4vCZE315JANdkCF4WFEuCBToj4DszegZQBZFqUg1YBzzrLWtrmD5ySSzDJHxQZUDFfggFyxNGdw85",
  "key4": "3fMuCTrukDycLNm64vENgy4SHKK7ou7VmVdR7S2QX9F9AJNVWcKAciQpYnCg3G66JBtuLY3MietjAyq8RjBM18Uv",
  "key5": "3fdW1YTuJcWHMgk8SkwBid1f2u5YX6wZrtFCaaqddY9fDVaG6ZTJb1rq1HXCcyiuyQJfVijaNhdHtosyJ528nJ9M",
  "key6": "5xQgQbnQz2RdBkDCr42G4QahA77gd6z9Au2Y8GBBbHgm5w12oACisX3sQk43icBgVNoHUC8qStYyzNKpZUD4QW3q",
  "key7": "2m5tKmgYXmCfnxfq7Zb84Fm4PpmEcEiYAzyNBwVTXE2JdKb3en4SwuKijxFJPfe9LPYx2kjh4poyJ6T6utN39973",
  "key8": "3mkPpnrjnuhcAZU4XB5ikrHz3im7xcnZM6UpqgV62NGVw4t9XQYox4v3yDV3S6Eef4BKsyTgRZAU9SoD5M9EvVUN",
  "key9": "A7idJicwMwTE64Sn6w9uH5EbJXQfh4ZYA8Rbx7oFpqRd8qswRN8SS2nziHejaE9K9qJJ6cQr9HSPabms2VdgrPB",
  "key10": "5kFprqNdsZDEmXj9DSSXVJSxDKyYQRuB8HiNiBXsHsWZ3AmDCJ2szyRtczwLwx4obXhmECZzxceJpuamCvL9U3Y9",
  "key11": "2Lo99aJ2uVwzGnSfaWEkNaXDxeXbNmxhnuEtGeyRCpkW4shKfVqxS6qAA6kR3zXfCkusNqKD3ZQoPZ9Jb9n24j6r",
  "key12": "3CRgaPzsrPGaXCJLLJsPZWD1kp6sPY85EjGj3VHAmjM4e79kK8TAsZiVLzcWrMsGKHYDdPHBTUFderG8GkPVFMP7",
  "key13": "4gaQHoijReuj1VGh66v8nb5TL1wJrAzMCQ7fqofTWEaFEThKSt8S7wLPjPgBqGcexC5qjMeGVTZUSMSYbcahWg7k",
  "key14": "5XBxg9bmaGvVdLHmTcFXLBqDnXXhBGy7Bfss3Basr3ikFrtQMrSQWzRRjMS9HXHXFXuiP2bveY3cLG7377UEwDVc",
  "key15": "3ZmuB7jd1Hi4zDyiKtMUBHJwnxg13AbRwEkDHQ2kqpakcPc2jNag43e1SmFYDW17GURfyCjVmed7u13J8UX9BmNJ",
  "key16": "58FyBtAKXTitMPEquWhpUYeQoatNFNmzmAswcc4m1wyahCwCG88YWsB2aZbFQRe6qHQAVL8sZu5vYvZjejw7NwpD",
  "key17": "5N8SGm1tyUGgdZrCzvdhqbWBepjW8iFrzmRHjyovX6f9nrBT9C5Uv4ac759vg77NC1LingAbG2VE84MDBFf21ZyR",
  "key18": "pFxY2eszabQZyQhdA4MyXD4rPp4pofxD43XxuKkkymUVtJdKTiDACjUB3HsaXHN9NYZn68MF4reYy6KrMCJrry1",
  "key19": "ytiu5f6brKko65HdU91ARq2eWN1o8GvzpkNLuxNmWDHTCz8jnHC6DHptEwuQu1fiLMsG3gcFWHZNT9VKvK17dos",
  "key20": "3sRizrcPhyM45DMiCaaSmHWgXzb5S4kH3bFsmzoyxUgpew4AkePTgxENTPqVnz3zpXmbqBT4iYaqfTj7BsvrDGXB",
  "key21": "qqGPLkNL6gUAThTLRrpAV1DTYvXA6aXCSVHSEkpF5U8qQ2aR4Uhf3kXU5RYbZUUYt5w6GQS24THJFAaojmoHfE1",
  "key22": "4QHmf3viZCntjbmwLwqPwwyYvwRfrNcNMVS8bi8iXJbczef7iRZwQKrmQeuKitqnaDnLcdApTqKPuuBUEFU9EhoH",
  "key23": "43fzHAr7fN1rJfkfz4rgYiEdX5efigQKtx35boRSKszLYmBi1sWcaicJU3E3BEmSYuzhkA4S8jzC9KGZ5QiXE7Di",
  "key24": "5fnNU1fKSqMb2LD8RdbqaP9R23EciDMXygUmh4nncFhu23wxTD4XjybBp3eHUBykHQ2HS5hZLVjmumjDirwpfG4z",
  "key25": "4C7v6tXMJ6d8QzftpnN9mP7TTmWj49iQtzeTAedq5Un1qsNzQAgUei6kGd3G5nEWKzN1y5c8yz11n2zCe9iUAHQK",
  "key26": "5jbjM4iUnZorCWgPfdrCCkrBMyn58ev6viwSZ2BPXyEyscP8cPQdd396M6MH1Lvm591GQTmt4busqM2AeDZNY93a",
  "key27": "fiJArMEeTPF1LyQBpbcWUnHJnbvmd4a3ostemwJrBt5MeP2qVkUoKGEmAeeZ4KUdJLKNssR4uwaBAD9S7jpFDyH",
  "key28": "3uDWG6A8n89f7LTRLkK6BzpQESGSB6baqnSSVqdVbRCy7qQhCSWwPGpN25r6qBeoe3D6AQKWE2gu2raNJhB8h4xU",
  "key29": "MpVwzDaAQg7Jmep2VWFEfV5uSCFa5uhboVCz3WtiZYDUAbVKQhsp9xRu5zNf6Qt4woT4cMChqRr1WryZSG3yw2g",
  "key30": "3aHReLo8GsDbEkmoeb1Nxu8RBLYxxDgDX7KC6poLS9JQeuDcDEV9oV3rHaGEfwm4tjh5zHB7fCj9UXidNbTbZcCi",
  "key31": "57WG6X4K2E2GLTfCtE5LnZCL499NxXroMX54Sbsrksny2WH5v914KZ3ibT2eog5q4fYuBg59YKAof9oQJVbCfN1v",
  "key32": "HRBN7CxZxHpRfzNGeuNGbpdudMgGXX3syqnkLHLY7AANt4NxLi4mgKTG4QS8KvRjo1T9RRqCMpX5kw13QtHXXx3",
  "key33": "3oAjhaxVrZsxBSj5SGfAU6bg4JjqTYfPpoM4mtC8528LidbihzdMAMNMwNfc8B2yup4SfoNS7V5zk6tMBpcxtsZm",
  "key34": "3CdJk4zu5i3YRb68ingxfPTwsQWDwGZLXk3v7AouXtfCqHCFHB7368in3chZCNhuRB2Kw3UqdVMimW8hzdwVnAHQ",
  "key35": "4J3a25dUAGLzVMeDSXuhBYnfxsWLcCoTzCRsbvm699DEhShB9KoWTo7cVtJsuLshHpu5roAWXiqi92sr3WHzByHQ",
  "key36": "C1n4NSWnP5vPSqGC8vMaQ9o61VS6caGsNvUmQdv1ZQGFaJzPDqcYJZck8BPHNgwspmyJ3LQqTDnhJC8ZXkRQnuB",
  "key37": "2arbXxfy5Zh5d1PXQafdmc5GmVa1c55KEA5ncjFpwqRM8fiADBG5znSTYevjDRSJunAW7giLgX3y8DQF75Lv1VYv",
  "key38": "3Ba7j1ixTq4nmYpV38c7XLT56kvG8j9J8GzKFouL8sxXTER1QM3BAs9tqN74LH5rxa1Vxkx7f2qbBAfXj1cKLAfH"
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
