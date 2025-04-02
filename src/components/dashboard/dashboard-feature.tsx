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
    "jFkopSMNWZATLnn6NqSNNaXAY3yHzDFXfWevBd8rZoCpvNvHRqDfgKhTQgEMi1vw7rubSLRyTgDwQLw95FnPqV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDJFzgUMji73SaqtNZ7n9NinKFC4eY6b6dQTCkLoSaQcP32cRi9NL6fAa5EhpvTgNyCmaFasXNVmW9A3EcdqGG",
  "key1": "mAHikyCoxzSYjCLNHKGGW5kpkBPc5aqHywUTmDP5fwV4xmp17FnzAu9hTV9umneJBAqSU9RJJ32AvYrSaCpKzLZ",
  "key2": "2JGvvcAVYfeWs8NQf1JW8rnkj6Ag3S1E1tHYXg7C72aktn2fq8X5gtPQe6j5846y2QaJ3qdR98yZk4QBybpuEL7J",
  "key3": "5P78K9D7mWAGhvtumS7RB2fA3Fv5VfZJxzQwQmG4uuyymQbBs4fWoPFtqVBMwyrHasvB9bSueBnhshMrv9HtxRVq",
  "key4": "5yWVhqFFy5awjQdGmwkRYskC7NtvLjwwpnp87ELWeYP1fexahiVXBxkVfs62arAG4282vtRMBYxoKaTZyrZGZJKM",
  "key5": "4GMhksmpZPAdGLhWwzbHJax598b7yQpQ9igEnfFgaTRNqvNDDizzbLGrQCFWEUM3QxAwwiPm9SuPyJpzKjkNCirR",
  "key6": "oCZk4eNHhTaPoYztzgEc2NA1an36JMHRQoAsoFhTVBqFWWLD1euzqeVHDL6TJMum1hbBntDVUMt1D6YP3esMSFm",
  "key7": "5nuu14Q7E5d54AshoeP26WeZT5F6N24bUyqCvGS5ZbJAXfiKXsvnRRr3ZMii442uHtB3pSk5PPb7nZmdDJyFx9ch",
  "key8": "8iJAywma3YF5intqwB3v9pgi2v51B7nGFNCvcxgYpkJnbzFCPxpt3n6u4jtqEEjStyDekkj1upjQ9UsCJxRou6q",
  "key9": "e1vvE43mZoziGLALkgwaLpMWFPvgHHeDRnnYVqi299u2U8nH1uRJPbVWU8YnCKopszU3cqqumv6zLSNdTjPyEpv",
  "key10": "5AiU9o2AUxix2p6ApaNUE64aGB82wuTcteVgpu2EYTeVg5weMR4QstdGYBjetQn3KzYZ1L1BLq2sF1sMYAYwk7Am",
  "key11": "27sE8FbJVq1dGLKU8PuBLcyPCNSe8AUtAKDefBEQsRNURve9r5JDi88cPUJDc1hd4etVtWarZtBgTPodhD1f7bGW",
  "key12": "qmUEoKTu9YuCnMszqVGQM6kDsAQDsTp76qmmLncdDqm8X4zk4RAZDXsGRAAVC2ByKJjKKBHXHWXUaJ31GuXzV6R",
  "key13": "4LA8GcW54ZSxER3i9KqhKs67hufhQEHFycG75GXjPr7qS2um3afx1LLX1QrReC2FHnQNjT2M8Z6icEjS4kZG5BJV",
  "key14": "QESEi8VT9whJU7jhBaERUYyCDQTxbQ1zRUcBjERWMceeLPoa23hHcTDdgdBQ1peT8PMHndUwfY1FxPqpiTkCDif",
  "key15": "2phBJX8w3EpzvVLnogwBkZgzPo2NTBiZ6Y3yx7grVzFh3y2w23tGBs8CqxCo7ft2ATQuygzk5LV1oZCETmF8wXJo",
  "key16": "2LoCc5EPZpTeFQ38irWPAeN96ZiLAL2dMXjKiZkP5AqGZaN2eSu1u9MTxQMe5bNi2zPY6stpzFDxSjcctnr22W65",
  "key17": "FjdLM8DnarDpfaFgCbt6nJuy7ZgRYeTG3j9hDQrLCiT3k2aWdRgJK8FujHmwRTK3aSrMnBKBALrWP8167DEgwbv",
  "key18": "2816Z76aVR7TFnyUT65gR5me1FE1N7MMkFSMVn5RTBaR4SJpcm7i1k54AY8bx8R5KutoXt2YtJ7mW3fvrJkTBBmT",
  "key19": "57XZd5UPXbHbh7TQY2QyU7WUh7wT95MKv4vip5NSG1eGJYvfPgP9jZrHWF9zgaCcGRFLVBSXCqFDw5dRbn6aNHfk",
  "key20": "jfspcdheDRNQtFuZCNvvFvGy6iXnBnNfLipGSFY2r2XD4LmN5ajVaLraakva49nX1CZ75sdNCso7RruShvfZgaK",
  "key21": "4ma4GYcX8qBVx4mAmaqtSyeZ92sQncMxiSoNNGuPmPg6eB6mqWPBtrair1CCZp7g2qqMEZWkTdjS54UDTUUrFMXG",
  "key22": "fmwQPgkRm7c5Q9fR7X2XdTyWKXhtaQxMGQEWxV73J34umFXo11fJ5djJFRYJK9Z5NbC4DpDSZe4W7Koqv8FS2jD",
  "key23": "2qbecWiue34STSGbpbjpuTLbXUwWQkt3v2PJDe75t7o2GnHCp3xfNAt6Yb6x45LdnAdV7RsnRGmS51QeJoZ5VyfT",
  "key24": "3omLjouB3Y7585iuQ9DKtsxrzq7w5wsZHYqijVMw8ERWDG1GHMa4KwDAkXwSXSk2ReKAYMR2p7fnkDm3MdF1odH6",
  "key25": "67UCLFyWJRBjwBnaSjnciksoL9uHFcxhgZTLzcg8Tcb7iksZR4rrjvrFtAaeGHv9wiCQKMHCkgswQ5ArKB7kaWCj",
  "key26": "3TPiu3h88JEz7dHjxE2Ez34ka3sR9z2L24r5gvan86Rmu9tEyf8wcoRkwBMN37qpcA194am9JsDTrJHssgWhVH2h",
  "key27": "4Zz9woqBsXBzBPHKYPEqaKRoUPHd7AR9Q5RJNSu1rGBBcaNh1Ta5qxRw7eB5g9LiSnyNG6mTmgnjW5ubSHJsFwaA",
  "key28": "2gXZzsPURPxmjxaBZUPV9BhvQxUYhc8cv74VDddc5AgAktgxyxu44dXR2u1PLY6d1fi1vsHLpjbQpr3cM9QY6GPX",
  "key29": "3WNEZFCMkRuGgZR9inJxBQP93BMT9yCmn7713KrxVYAiGYyyHDe91GjAMPBaCekGHUiTP3UHM6EYkqP4pxyTmuBE",
  "key30": "5xfKMo5aK2vZmCGZ9XcB1LaF2VHaYJGCzrPoSrroeS5b3jNvYHpCoiQWE1H997BbSrNwfzbxdf2Lq15u655bi7eL",
  "key31": "5CaT48Zd7HjB1Aji7xWCQWY6fAF4EjnXXJwAnfYYLitY8WsfyEsJMWL5NdfeoNsh9DfFgppLtXbWKAYbjKb1YvyL",
  "key32": "2P68Uyt9aUiryw85STJjStNgdNPjUv8vAYg9Rrkng6dzPjMEKVGF6CCRbqodN5xTv7XMMFb5BroNDmnDqrnhJ4dW",
  "key33": "2wzFFm8mA8Uv7AAKwveAwYQZNWNF3iuALw7m4dgcT4bL8Dttiax7LQvda6m2TpyNhbmGVsu6jT19Rj2S2QY4viJz",
  "key34": "5yggMkkc6REc3J4CedZQsTzQ64vpX6sQdMbqcr5qFU4FWngXaQDVuXokFRyLc5VanGZ4rbtB7QNN9KZN9tctg5hC",
  "key35": "25CYKBavrhYM3wR4AxwAidfLjPruxYgD8VRaXtrpPjtRt6Kf5Hyqo6EPymu8FRTsBojEQKFhHViaD8BMhPt3bG88",
  "key36": "FrNL4FyVTufJmaLMGd1NeZC4bi47VGmtPHRj4twVLxRYQ2n8vAfCPGmYBgavuhXQ9tgY552uLWxcTKaSMFz4TGd",
  "key37": "mhbLtRyKfGXmEEYBDLrRK92xm4fyU4LfX2B9D74yW294qDDzbXyfhnNYYSMpGSoHH4owA8411N4rzyifQSGCYX2",
  "key38": "eJyLRApM4q3CDKzMbtNgt6k2UPX3cu9t87Qx1dVRWzxXDGb2wrk1PWj8T5AxQbkarBtyybLLgMm4J1hoL2WnsCo",
  "key39": "5gFe7DZte3pxZxomjK3TrmTefr3icBTBAPUGtTPFYUfaXwmeGnr9TKQP7Pdch1R1tL5ZH6SEos9Kx8Jrmc6yf4q1",
  "key40": "4qhndbGR8T94Q3vVafc4cgQ82x76w5jwy5d3815roFdYCCyoLnZbRYhZLar4DwgkFXHnSwqnsdxyMWEt94ehZPES",
  "key41": "65gYs1eY4UNHcTosZV27YgNPjcqWuhP9Ej77nEqSDTBkVhqiDvy6H7ycY1d64UYcDkm881nPakJTrPXTt4TzEPzF",
  "key42": "3EfSBky7bNJ3K2sFvUjjB75qkW55k6sgkc5rPogzKB3VToBZR6wG6SdHrzSfs3w7q2Uyg9teexg1GQuHYBXduRgy",
  "key43": "21iaiLmrkBrARpSSJe7KyrkduTa851EDQxWydvysNMX2w3tdVRbr1uQrvRwPAFXsF9uZZjPdVNwy2Pogcappbfxa",
  "key44": "4QSynWCgQJkaeJSqEpx79QJQ8usfBeiCroFFtt96gLJii18hdrZ1sRa4DaAhG9UHUuufAjbUZ68rsFuPcHGb2Tx6",
  "key45": "feYZoBa6x1twDVGM3NqHHpcf5SKYFnLSbHe7C9ugaCk7UUGNHbtbYBmHqk38EYcTqhUECvUbATrjZhn1L7qTxDx",
  "key46": "2Dj2Ka53gYjGp4VNZqB8jFFTpVG8RDRw2268CsjqkK8MxtpwWsUVBeyp1xTvc89qbjYHiVf5aMtQqe9uk7ZPdUJc",
  "key47": "2N1GttTGiLiQ8k8JYhhWrtonryPCYNtH3xYGjCAZ4sC1nt1DvgGYXGM5UPnTiRPTchAYeMJisGdKCoX7QMdhxd4R",
  "key48": "YKmHwXNJEdjBfuHEwpfTEDaMEMq6LpD7j4PyfrNP3MbZrEd67RzZRCRpMnqL2huWcYySHJrzBDkYZjbSMTAE4Jp",
  "key49": "3s2M6PmShTS9eAJNPdCGi3hWN2nK5oAf19uyYZvD68xq3JnMz5NvvRi8Kqd88pDuE9Nc4CnEC6y7aiawKRjB3zL1"
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
