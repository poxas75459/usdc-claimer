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
    "5av1g6kfseLox6NXwv7xLmVCkv95DQHjp1tP9hcdfq6KibbxUPqLnDG45MWAjeqH37ZszCePpAnjgUdPoGtWH6DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTH9oHKXbGZnRDv5XUQZSRMgFrdn7PvKwpg7UT5saAcaQyKB2WqvPCo8fdsK9EwRVLUR7h7CbNfVDim76PES8mT",
  "key1": "Mdb6z1wDoRmf55Kz6iafDvfnH9QzWgL4sfRRcGD6uAjdsbs3EokVbyktKSUvXFCj5ZcjA7MvqhjBGsc4zxD1KQo",
  "key2": "35mi3S1EL4ftuqicHGxJMAD4bwdCYebA75A42rVWbHc8qGsVAHQFTNJmt16dodABoAokBs3sq9v1ajpvaXxx294o",
  "key3": "4KYAiWgi4XAwAHfsp6t4TGuCRAUePgD2No8CvvkJ3krSK7znkHuzuoeVF3iAHj2gGb8efmTw649Pah5ksnWn4Rno",
  "key4": "3vVDhmsK5jMWfBAvtEqk83gUchy896yAfVN1BR5NNPJwNaPCY2YAUU17UnJUKZ5XjaSiUteFA8KbVQW4qRB3nq17",
  "key5": "27QWQfcKpDVzcgjXYGQEoD8jpsEAkmuvVEKL9ZtwT5AyCVgahqj4wN1quVk8CLxJyHorKUi4DzRzFVMsNLqaSdi6",
  "key6": "2xhySJpVPECD542M6H2kn3hkN7vJ9Bw2PZJm93fjk3qtqV5Ko518F5dS3AN245txy7AuGLWHtWQrA219guru67TK",
  "key7": "3w6spUDigUUKUn8dot25C2qAJd2yzuJXemgzvXZy5QPS5gtXNtpUiesQgyKudAEZ1nGCYkBzXWMjY7zhqwTRpaB6",
  "key8": "4JcpdkKFR56qH1m5AZjGGMFUMWV7orgJYXvwZQkDTvMyye7mesTD1W9Wt73n8fjr2nMECAhNqoTpSAnex8env6cE",
  "key9": "55HXpys2ihqPY5czpyKmtVMeAjuQNFNd8iJw9i3CdunfQE3HNz9W2154931Mj3hJcW4piLVUGBCLgUrJjkHML89L",
  "key10": "5M9XppuqEhSVNDw7tYkSyXqXHLDA6Ew9Hsx2BV7SnNqQtwwCd5zsspFQ8gfvs3PMUuwrR9GAcv1rSiEtaNpGuAek",
  "key11": "2cA72tWLv7u4yPDQqjXDuCjhesoti9yMQ69ZmfjgQbqUpjU4AsK2bCuVHd7SXbKY3Lm9TPhfRgojAquYFLHKzErm",
  "key12": "4ngG1mav5GQLR4q1hYqNakHAR1kfwaptF9ov8KFYqJYDLW17q4xoggC2pnm1eqesbzzghejbmCWZxzCEbVrL36MU",
  "key13": "4oRpVRwv94qXLWJDCe46pwJ8znD6SHb6SLMTnftX8CW7FDd7vaJJhgPGMNXXqPXZQs3QGiRUzZMgWGCi3DTezE1q",
  "key14": "4dSTQZaMkUBnjA9r2A7FqKjaub84FVnzBExYuHWWatJxLCSPawwn8WhGuPDyHVxnz4SjL4vHEdRLfTmbZPi7VnBP",
  "key15": "3vWyNZR9rrgTqyMUK8NPY3ebhahmxJbLpjjCPyPSzD4DhDJu2p3AvxhAKLkTKt9C17m3akUdikJdpqLKNbgr9j22",
  "key16": "3vJ6Ct1EaS2TSBAvcdGG919hoEz7obFWoKbUznoehG2JH69p8TqkTxYKKYB6QSxtKnaMmVEn9csZpbkpGbkBPfAG",
  "key17": "4nmWXqHmTbmwuQCTHZ4BGNU9tAKkF8ktrrbf3UZMEW7VyhnrEQGL4dCEYc6umc471GhazVxqLa9SZUeCpvnQQV2g",
  "key18": "vEVEqJq1sgoeEuB5DNVPCVGxyUGbU9PuKYqhzs9U6NpaUj6g9RuoAkjbuJ2PVG9cLCsJ9B5aYXXWrPzbCXXb3wo",
  "key19": "3zqWwEk3KQcneUyJaHcuKUMu9FeaCLH8v1w24HLq6gGbu7DAPBcuKWvpmv5TLrMZFpCo9fXdBeXCmunGKZQu6maN",
  "key20": "3AdXLXxh4MmhfPV2fsRf1rYH3EGzFvix5DiuBpcP78S9CcTXUqB4yVt3mrppaBVAA11vT72R917NSHFpPqkfFPRQ",
  "key21": "PifPBZT6qBiMvUrLSeLE9gjbqGL8KVHLTrS9shiL9C5ZeLdevwasCViNNef4RYqe1gdkZiYnWutaWzpqusLFCFA",
  "key22": "4HGKD17qncEsfdJH7DfJKV5Se8tcmhoKrnhY3E5iAomSpxA7mroEfQSQfmZ42sQmwje78ybnzmSZM7QhsyUFTxGf",
  "key23": "2XaJYAwMnEd9KfHAhtKdgnyJVSv9uAJiPXPyRjo4Qj2dJDRPeEEScxu2qXybTcd6dJ3EnhTLDz9zAYCZTmWursjE",
  "key24": "4tcTbaTMBVd4danV8t7fAU1Y3F1oEvjfZoTTMoq75XrCJqcM2CgYkWn7Mhckk34DA84aZ32F6fM2MRX5PzuTY98B",
  "key25": "5wgTa7pPn2jG8FbMiAPey9YfFMnpBJgQfQy7eMVYJkhfxXmTPf8NnUgpCuJ8KuXpuF2No4iV3DD3Hqv1pemXsiq",
  "key26": "35xkaZdst8zdMu3Fb2Jm1n4miiqsE1jUarqypZdwUVHXXARMGPpABd84KTjHRtsmBXhruUw3TC6rW56d5jQ7C1bt",
  "key27": "4MjVtC9cGemm6ES9bwJwjPvgnwFWJ38HCiiVkBxL7jDaxeWGzpng3FcFuRL6PPcpHswMuXkxu8UU1fDSrtQUAZBa",
  "key28": "46YgZecYDsZfToFs1aj3CXWh29KuefHsPNufgAYUR7zPSwp78aeX17ziGQED2MLAoxpGA7u4HkMPmCMuK5VwWuTi",
  "key29": "4gcnEeyd6SY88N1m45d9Zir1JbW9dT8qgmbxrGFw4U1j2GfLmCHj1Vpg1hhgPvcSp2xN15Ra7JqKUUcRYgAW183o",
  "key30": "3BP4eA2idtafV6LQCjoRPrJepE8mjZXkRdF4nphv6uYoaSFBAsiHj3vwu5KqfbwDWiV57VnTb8fs86bvXXijztMv",
  "key31": "qJejUzPVd8gduL8XXsyzUhp6dW5e8Z4XsSbRrkvMw2rvkXqrA9NRek1p61vPBZiBQU6N5P9roYu3VcB8xzFNjPD",
  "key32": "2rEBqC6aRHKFovTeSYyDH87noZ29kXtr5Ez8GFi7GsEStaxMbuKwBchkkgNi4Feb6jv4yg9uFFMDP1pdcSZ2mMbN",
  "key33": "3dABFEL14zF6YuMS3h6kqVTetf9wpC52LiZrZZ3auc2zd6ffDULAP3714BpdecrqiKqz5iV5NJSUQLxKY4QYoeMS",
  "key34": "3JdLp244Q1iQ2dTCMVrJ7fmJzGv8grJv4TdUZrN7sxA9Y7LkQyBCqxBMQbe8qAGAdKyB3Edcc1gg9PPMEAxTCu5W",
  "key35": "5yKLdFpsiaG88yHcjNnZmvcFQvbLZJ8M2v46prV9VnKAG9pqKFN96nAKXRJSRg1rDFkHXpCffciucPF4KjbnMgn8",
  "key36": "4aXTjNha7mNYq7j2QK1bR1kVf5TXpFBkBj7q6hca9QAFviWXuGpHJeGLT6FotKX45L1hAa129RKZyf89RJeKfnUU",
  "key37": "3rndbSaTAu6Ld7Xv6pUgRDxev3eRDk3FpSxqXx6gT6WqKSmbS89ZCTVHi8tfvTRFWA6vQXDg6oi8J3PL7NZdNKKV",
  "key38": "4YQBUvcSXx9MTk9NPptC3oPEvH3CbQPGrKz9pmeZi95BkpEMLtpWz1fXS91GtBAdneyAUoH8mcumwbUx5AoyJipa",
  "key39": "2ywJZR9U69z47buMP8CWUnYYu4UgsQYY5Z3LXkcmnhf3FcV82tQLMZ9XGNTYExMcoRwVpeiS1jsgvuUkxFr3hssn",
  "key40": "461aJzvpDXuPHHqtEUgoJ5b81x46Pxr1JUx8feL9EfFTymHJ6Za1KTyHLT2gNtxwB3JkJ1airzs5RLy2cdZUNwrt",
  "key41": "28QU3LhVS8Pe3ZPJ1o4sDfkbK2nHNJ7Wwir7HakeQ4cPZWsTtCKTDy3HDjaZiWgAiEn9379nWibHu2tR1RPd9PW2",
  "key42": "4qib3cdyu4DhZ1A2dewvW7BJ6m9U6uCtvpkthwze5C9rYyi9hsywjApx99JnZRjFc6tKKuNqQzaqGn5KUZoyCQC3",
  "key43": "2ejrE7Tvq2vkRkGnxrhaN4PZqAPWn2vCAihddhZN2YD2UjKFWVKgGUePBRsASXNyrgGyKjUKQUtsbqC2uVyD4MzH",
  "key44": "3g5kjXDRjkoiP2nMY4Gj6Ss8WuY9AnL7jbiuAC2oUUH873jRQm4aWCqWUAiKDh1LVNWG4qJEfs87344o1L5doPHJ",
  "key45": "b9trThEpgP4EhtxotgrQQCpEZbuh6YqbxXkVj1MoYAgbCELqau7HzW4NXevCtDNjya1MiPdo5yMRbuFfjWaKwpD"
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
