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
    "3351uvbcDTpi21tHrwD7tuSgF5XXRe8DcUdWe7FZB8MxhPuvJe1tyT2Z9Xo75dH3SmBEDCAHtCEVDvtnhDKXCeGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jn6UKYBBCBx2V5FfBBZ7hB8b5WK6Yy7xD1KWeUc6zQqAacYuZ4Hj8fxZAquk4cYgZrmeT9cWFD4GrXBqCbZwMYP",
  "key1": "TrfxxSH5Ki1GgKLtqDL8chXbPU2PTi8c3p1gqSdBr3XKBro6xcCxSEcgiZ2MwZY5KJGmgK5JsNQEEJYJXafQ46Q",
  "key2": "5jNugpjbF5DrE8HZgTjMxWFYfP2T6TUcZBAGytZQWRiQrta6s47P9WiJik4yj399EKRVpLcbiSsZc17qimswCT2X",
  "key3": "2JXo6TadeF1RuMkoP1zFLzDg6PwGpFNGjNv6UN8Nz8n635AwaPpg8EnGHFYBtgBfGustQdGSHjRSYF8MHET6xLm6",
  "key4": "a211mET3uq1MKmvUk9KAwj1fb6DspGtS9ehPyLqoocXQfxVnvtEpcRbDFZ4UXqnjdjpjrUbjYPCETWpfdq5BGXL",
  "key5": "4K762BSX5WNirE9cYQqz2KR8PjtQxa6wQnPpcVupU4AbmC7JLBDvk3aaMyuwznBXF4i7N2pyfauYJYTbeDGHediB",
  "key6": "4AfdbYexe8ZxGZxMjsWyHiyxx6uBbmQWvHW8Jtp32saXUfgLzdhvxkeDQzAu7tcDLEE8DthcbrAkUZc3oy6NGtTB",
  "key7": "39npMSvNN1fRSo3gda3DubqJ8Nz9U8WBie3Gigp6KJRDxfsgqL7ww7zsaxVD75eZe84zV8um3eGFwtVfKj99JN4s",
  "key8": "4s2C3a8ydrbRZk127eV8CA56ZTid6TtrpSapGxim89Yb7gi7wTwCUPr5KFXVTDB5qBMafjR2xjrhoWRS8fEQrxg7",
  "key9": "3X2V98AKTcuQijdUrXtvDCzLDKXng1L9neDh32teeFGXsSBEsVrwwMFx5NXmcbFXHQhUWH84Fu2wbm3BKwdhhPSC",
  "key10": "rE5fSGfHfKuAMbZhR8vqj9DPFeNZK6aRf7P2zWoimUtvWdCug32eenqeAzyte61afNVaM92Rq3MC5L1v2ytPMKU",
  "key11": "4oTKqoR5cL5yLZVv9H2gbE8m7VCthHMr7wj7ifSbzr5DCyXW9H8vgZqJxYN8sYczUYbNU4K59KjFWd72tsofyuWu",
  "key12": "4yyP3UrSPzYeZLFeEMHu6rFCQwwLMfhQxt87eEGbM7yLGWAdUg9TkKMku8NJoed8tkSvPbCxiAwadWoLiQE2m9YU",
  "key13": "3cWf7oKdK6TXuX2V2RbaBx1GeuwqcXHUKt1KkMumpcpQg8ypSACHoV4vpWVHt8EMy54S1qzMLtQ5EJP6TGYLBcjg",
  "key14": "5xYnKG3Tixt7JmdfiBAG4MhecqmGWV7Q8naCY4Qe37gZ8kHJpiXjpoGm7zEkwmVgYyYMk2X2MjYyiZ7temjLzqcM",
  "key15": "c9UJ5azSzCxy4XSPDnqdmKStAPjg6A3h3bZ3e5bJg1PvS3VSWBaXk7eYBwWbskMMkib3dbkpUeh1h53dZV8zvJK",
  "key16": "4a8VPfRL8pxaJeSDEvBy9qdsstejS7hLMYvrkhBsqvNu8ckdFgFgjZ2VdaeDGdarTRSyRCMpHXbWSwirFnMK8NFt",
  "key17": "2etATRy94HJYLLnAjttaBVau5WMK3ZZAtuFUHY4ApBHMf4zbJEdCk8GCCRdY5EZAVhEPcVLcSieAZkuKVBvDP74T",
  "key18": "4aR5KgHjD37uDimGWMYwtsDfZ3YHz6o1JFn7EoASgcFBwdtjP9eazgVBYZMJAA8kYsXfvdSwV6KusPcK2i7XbBRX",
  "key19": "2YsrfwHVWN2qu9F7bjCX8gqjr2dBG6AbeJFvUSRq7gGALpNLRPZe3PKFh93nD51nxQw5oVXD9Z361WuMFpxYprFZ",
  "key20": "JXtH4vyRAGtzK7bU9Kz1iWnPYkE83FGUPPY3iWHDVQNtHhWJ3c2LYFamuRajA19wrpM8zpvE9GENhWMeBhrGJcf",
  "key21": "4AwT4i2N6zLJH42Q6icUQsewPTzTDDhep8XJGyvo6U8eaZh3SEqX9ZyWsyqbxKg6cEwkH6hdrDZGmsRMSHP52v3u",
  "key22": "uJ6KNdvm1Qt6Yo5D462qebLQQjxFiMjJF6nQHHrtXusRCvwgmkm6Bc3AUfYzdY9auLSp3HcoQXK4D35WK57pKj1",
  "key23": "4NTm4rLZ2Btq7eW8tQ82ZgssWFgmcGAxnfrdMqG2NEYVwk8vmYU5wyvBB7RkKNskovrAozhahz21zRMtmhBnFmYQ",
  "key24": "3VDCMbRZBFXbUdCNPrWpRAWAecU4qnNoXWq1AqS2qh1311srEcNdpgcQTW1JaaQbt5ND9WciSR7bHvG6Bi8LwuYS",
  "key25": "51QPdDMeLgZf7K1TFbjcJ72oYjVcmD2cR5P72Kx5TsmZXdbQLPBobZHjW868MV97QKSQMA3EuDsX84MskmkvrbmD",
  "key26": "4xFpK7P3et6NzqgHGShEybD22G3SBKLV3USbr83dWCBtonvu6nGJ2DEEpYWbhAUro4nEPLtybwULfuuTnLjwjCEF",
  "key27": "4Wg9haxATHJo2H9uUbu9AckvNSGbRCJVijbWsj5u9bgw6dg3WN41KfpysgsiGv4yVViHooQiXjy7h1dJaPTsm4A8",
  "key28": "srN4ttwahhpHv5vgPxLE5816dXhXKUjz9k6V9jCUmmrxHUgPDY5P1Fdzye7RHB5ychm2BhgG2FDxiVrVWgRBALn",
  "key29": "65U9dE4uN68C4t7ZzGz88jL5d7mNKChZbZ2zUq3FRfWD9XTsKHT8JZuCXd4BjQqQBJ14C7MExn6tc7ENzJyhAq7",
  "key30": "XbG3GeHXw2sumJxpsREjpMcVoJqXhyVVfjMx8VwHpQkEYF3ahhMnNpbZM5tfSZqD5fBnRR4JLSux1AXLSc6czuZ",
  "key31": "4Y4k9G46aKvCkBYbPG2SLdY5vUsRoh5wiAoDGmPakCsDKJrPUxMX6xpeVFufSHcXJJGdUvFLTZQBsaciHCNDNvNS",
  "key32": "E56PnSVtftpSu6kQeLZV686ehnp9kpzniYZCNynC1axgSh7bckDjmufzf9NzM6x1WvGcauYkiUoNiNf5Ua1LLLG",
  "key33": "2J85UB4HAoYkPXeVsmu5zD3Y3o5TtYuuBQR9dNdqVGaimDvsVUa4XHCULWmKw42rnp4G7VYHsDUUZtCoC1BAJsfk",
  "key34": "5uUtcSd7sPG2cyicBLmKK3TjiiQbLcKCyGFbJnWH8f4jiUrxzzCwju3Hg3QGdEMKDZFxGe4aFCbJSsp61nxzhD7d",
  "key35": "5pXvsSPyQLxkpV9EgcCGRTnozqkMzCLJwkGwYQex6fKer6fe2FG5m3ghwLUpYEcqTHJoDUdUsVunMCGocr9tLjT7",
  "key36": "4Zy75X3XhCQ1fMPWMnvFxXx2hirDzrKGoQESy8URa6TvRUqbpdspZ1FdU1Xx1GqYsdPU66PyFBnutWaRJ5GdPa3J",
  "key37": "56WzCvJ8LkTwiHTUyRQQWiBAhTfcdcR3TnuJhuBULu31XkLr9cpzqGfuPqEDYEhCNVzWJqPpab19xk2FRRRPiZuN",
  "key38": "3uYvGocbV2KtkBDbaxjWqvwK1zsU3DzHndyF8EuWwt3ucjzmWM2eBmARWtCmQXi9BRHkYHEopHuigN1jXqKF78bZ",
  "key39": "M4Wcrs9Y88F5DT7dsDbqScNuvinibA2LGNWzQLHKCmTmncDSRLxdcSBZu6SiGkv9293VDHoDV6Ja2CFnE5bvEzU",
  "key40": "25X1XMbDQF8yosTRcNnUq6QcHpLTn1hC51Msbff1W2PUYKb1A4zmddzui2qDyaxZrudSec5C5N21SuMspfX5jSsG",
  "key41": "4T9ivvF7nE5KEEcHsuJKi6GdP4uLvgB442BKqrwNSAPjPdDMAosFygaU5pNsD4odKo2QmhwsBtD95495QRB9tMGJ",
  "key42": "9PgQ8pPALK2yGHYV27f3au5WvEi8bQGa1u4wc9oKxCBdM7CfrYpYSq6cVR2LrUj4TmG6nUSMc3VesCnM7vb6MkK",
  "key43": "1eQbw7LVzNaTQ4GabXuKuE89jGWNTe1pHb7sAiWrE2FoBTSQUWN5TsooKZYd7sdo3cMxSBry76FxmDF7WvYXyqN",
  "key44": "3SFDTGgiypsQX3RHpp58HwGb8mtY3DGJbMSTp5JaBL349NbGU11BNB6kYoiwvfMc9j1tag5g4rrUqYHjJH9fL9RJ",
  "key45": "y5YhM2V95GiXadN89Jv8E4GqbTAn3bJcQcFS5FN4iuMogTEhhaJPdwoSLNvvZgtadUMkqwcEDyhqQiFG1ccEtMf",
  "key46": "53tCth3jRM3b5mtZn1czpcc2HGtyR5YedboYeuVYrgsaFopGdYPa45eVTbscTZFGHG9gcgZPbuMw1yQBnsazg17i",
  "key47": "2D2Ymx6VBR4hfy4QnxTS7ujJK6TxMiqmXAqUo6YUpoADs5XtyjmfybZSRamG8UHR6VNxDqt1oxHQebiY2soJqv2i",
  "key48": "65H3VYwDFnQEhZfd7djq12mNXTaBB8UZvzH5rkDTUJP9C8nJd8h8oeCDtbLQW6S2U8d7qj3CBVTzNHCwWp1iA6zr",
  "key49": "2ePTNwGPTaFQFqgyiGp7GQQ8wiLnsqgLBrroL5WCecV7ZexdQLUkhny99qj1eRhoxJKKxMsn8cmcWvx5Uei3eU4S"
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
