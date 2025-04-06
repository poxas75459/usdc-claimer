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
    "Ab7dt5TFafdrPWqWTTJ9mhn793Rftp8kV5nWCoBzbvKHh5GjYYz3VgZZhqEiTXZjWpbDxkoxotwMH58tgafAEeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uc5yV947WqKZtRv6fJVyqkyfmvpiPuuBdzfPpKfcEbGbyTQrhWfkSQvkuuDH1od7GifwLeaaFzmCBSQeBEfkrVs",
  "key1": "64jJqnQNUUhemWzvnEMwwngj1gcLz3AGnp5S8F2UBRHK9XqnHxFY9csPAzjXEeV6afoQeYFsbwTmSHBkxuRGXkqp",
  "key2": "37KusxwHGszvDEdmYhGcjgXFYi7M4DvexbdSwkjQ3PmkV85jmni1CxcP9B1YZwMjFXF4Yx6oJsJSGL6eGJgDtnJ6",
  "key3": "35AL88vZHrGCRUdkZM4FKZvAWww2e1hq3RBZ3B6vDJQZBSMhK7oHuzH2MhLAZVSww6AMrHVwi9kzseEtGrxMdYyC",
  "key4": "4dRBLViBeQUmD6vmfZS3MKb6uDT5PsbhJ9na9fEUzHMNNToN2TwJrsaxPPb7FxGQ8i42ug4KACBy1VExjZi83b4h",
  "key5": "VSVvaL3CeTYXfSUpHiskcpFu66mDVSu9gT3nitvRsTVemMihVcFRKVZ8FxF4UnW5QaEsdADjRQKq5Bp4D5ubdUq",
  "key6": "5KPJo3yTwCWywAYzTLZKKGXa3XcHN8qrDrrHmYzETPttjrxY56onetCfXC2uyuCbecLBVRyDtY6D13v4tBZaY179",
  "key7": "5CqpisNTPVwr6Qp8Nh6QVdCm1pVY2Ewhfy5ot4Lqdngrptc9DAM5kaZtqtkLJDBkFeEms9NeGN3PjxXVFTWtDFYd",
  "key8": "3ujSQaBgMjTXiPvbLPy8bTPSr26kt4gscC8wHfkMgRCGJ7KwvHA4xuKjtDnzcCj2Qmn3mrdJCLSbYfpon6psVbz7",
  "key9": "4EYoAMXdoE8rziRisu6gsk3Z6L3sMeLjJNbbzy6YBkqyxcc6b3viNXZzrArYWFhuwwVwRUpeWTqAaChmFUiJ4oV2",
  "key10": "5ETb1BpQtyceveoWnqHBxwNbYhUbDiE84Qv3FuFrMrrkbwvk6EDBNKLD6KHmQqtAU2K8nGyGcZjGeiEA85u23VZy",
  "key11": "zVmAW8MeB36dCJYVugSYKxAwWitRAZvEQmdoeVEbLvVZWCP738uo62wt2kpBWKMaeWG6riNrPkwNepU7TSWSbJY",
  "key12": "XG9fu8pP2mz9UMww3X2Bx9Gn6UW7tCcAFDA4cz4Z64c9uskkrvFugefLPTQ6knz8JydxeaCrUwzwN5W3vbKzY1g",
  "key13": "62EDiedtVLZkQiV75PuwuKb4eN7yo9yz6EBdiqjhGN4PxGRwMPG1aineAsaGvBrAa1rzwkJDEPnzJABDpZ1fFVNM",
  "key14": "34XWopLrCENb4aENeY8sURerUdbBnuPdnPaY6VhhcvPsj6wZjYxKzvFNXacY33uLRc7ZGT5GoWQh3YKUPCnNksjz",
  "key15": "2pESiMmHfMnLzvk7iKKQ4bEevhsezR8kT8i5j6bFfPrQSJRvdfowXYR531Vxi4wpANiAa9SLMsYFaV9sxTd59DkS",
  "key16": "4qQ6NfdynHyi6ktaDiJgwWdMCCtC5MHvgz8u7K4cNzkNUoz7ts1PdazCx61Ue3JuN7pP5yCY2QaSn9eXGAxiHMtD",
  "key17": "2wUviEQPH2kWsDY3mqogJksvTqfNmgkyDoQq62EbM2E4JxHf7b2MNNxRpccpNka4Upj6s1MWsNutwkJBhHQfMe5E",
  "key18": "SJGjyPTkyd1t4ttt45sPCSdsrnKVtFnLxMzvSc9uaQXmasK2VHahr8n7h1FLjL8tyMqQVzdE3DBVwj3oo6JfYtb",
  "key19": "62rf912GVkGVPE12ZgKGJWrhXoA3dY3owapH3j5qt4DzSmJEZHatrj31yqhcyy88qWGer3T3axd11vtUeYpWaYQz",
  "key20": "4DP9D8gzrqdq8T5gkbbD1SvgMdDPWFVyVsU7aY9F8nHggkxBNBr14d3HHATcmunmwzuFuamNbBa1MXZr2u6FSZk5",
  "key21": "2jyFNL8Y8EgBAbEeTM4ajtzDWbNuJN63FrEkumkWSq4fp64VpLiyhV2o5Cg7Pkp6wrBZU7f3PXUso7twbZLLCKyQ",
  "key22": "4sVFGjkQmREDAUDADesm3MrbdqN7SzGwz4xGfL88ZkbkMGZJnj3CocvmfUybe3TYyfVE18eHagDU2ZYaW687MU5E",
  "key23": "3EB9ag4AHrWuNJHyDwaYkJqaKhRN9xNf7f31Z9VeSJRCPHkuBicbEAjNkwbQX8AjmBndsyPSZsZzK7j3uW1RRwEV",
  "key24": "5NLWzosyZDcEfLxL7R4xghzVZJEoKCmaAioZeJvLGTwEWt5xw4xiyi95aDAhMsZrKPDNqoeCGkppoCrdY8HopcG1",
  "key25": "2h8iHT1bbucLA4AaEsmXKepBVt7UCCK4NNuRvgwvJ7AkbBtxQztsgXaifmxYMSSYFnDkbVZEwYtEaUsRsjjWg7Pm",
  "key26": "cLzHYBGx61jLzqqezVdaLWej2M7WXcU8zhbtLeYb8iQBJftq1hmaHgQB31vLNyyUCWmuGGJ1z84gADR7zFkrWGg",
  "key27": "vSh5fxwNUNxrxGxCTjVFUarfUFPxFSQPsgzxzwZhrT2Nj6HBziUDv12TP8gR3L6MvSVSpBeTwg6cMs6XKFVKzXq",
  "key28": "44BqDH3BQPThgKuxJmQtziHFUNcbLydF65bdfZ5PE7Agc8Vve5diEznLnHB4qyr9u3uNjqd9yKrFirYLHnWEKEkz",
  "key29": "4NUJLs9vPoWYKjQJVbinMMLc1mXsuULkTG96eBhi4tFXe49tb1wWkMTUCdEnwwDX6xM6oscUm6shVWQ7mEYL7Y7K",
  "key30": "5ZFcUgFZPmPnorXZTUZGDEANodzHko5SEwwWRqLrbfNRry71VAgHtACbpQaD9A1MrexZj3AcB1So5jyDBhESs4QV",
  "key31": "3KzF3aYi9F7Wt65GxRCHrf3w38V2i86vkiDM3nHaohqDw5t63aYWoSkjHAd54nVioZNqUHR9kycug3evjHeMxgz1",
  "key32": "4J9N2tGPcJU6C44a8DQ1WSrP9tF8c8cGXdioyZ6E86fN7G4QV3LtEGvf6AUUEUZmVcfpHTcybyqiYo4ScYeMoThn",
  "key33": "gHomtA4UwCwfPgXGRo8Lyy7WsNUtjVR99mMuNq1t35kKev5CJJPZaDhUVFz29c5DeMvhtrS931bzN3t4Ccv2rfQ",
  "key34": "3yPUVbs8C1XhoaWy4LPgDqDHxLABgavqFsHQ267a3DHErk2fTeKizhw4zW9qF9yaUE8UXMDQg4iTe7wsuP8HSwvL",
  "key35": "23MBtbXhMzpNFZ4pWgVAfuZiA1eBCNAuueamUAZg6bfcNqJhUQLyfeb5YrB5hwudThsAspgzrhWYYnpBWbm18Tab",
  "key36": "2yMtkDoAefMp4RudqrTgkqMtUpsxYxWBx9FGAqCwzmXof5VW96Nuy47kDgAeMQLr9zedD6AgbsYmFSHvicwmYKVX",
  "key37": "5Q6AyBstDsqdtXXhd4hW6oSkPicsjPYag251NGuRNvuSAw9SgMRDDfiSMHAr2cbEEmGHMyLQv9XN5SXELJk2wtkF",
  "key38": "5b7xBw2y3pjCczzFZxNCKh8fGzNE8q6TYtw8o4qfBpYR19r63HViWWHrTnXwtHAmuEiKC1W1pUyEPiD8EduSRsbh",
  "key39": "5ptb9yncSFoitUv3xfP83G4oAQrSPPr6iXk3VoJfkh6rMVDhKtBfrnxFqUhZxjDnqkU7fy8fgLPrfbZVez8aVJnq",
  "key40": "2WHtigUwKbqnyL8qDSEJ98Q95xQzkccMYE56cUDUrJW5Cy4rQ94UxWCQnYSCciJjzrBmq3GUN6UJqkwwc6ZQ5xPD",
  "key41": "FKCTKurRSGJRuSTncuLX9PdvTPqJHSV9yYiE9RnxYFiJttpac86gCSrKRQws8p1dnBSSAjmKxpE5BaTPWY7Kfcm",
  "key42": "37a8VzPbkvCogSrToFzPfnMsLdcmQv1ytYSCyRRDNuP5Pqophhmu8SAC9BtyEqAUFuB2Yov3Ncxr2hJHsobJEHY9",
  "key43": "5k28mjQZFYZJyZSubP62fLhhxCgqDXH54k4ZoBhNzikZi7fwpk4k2RC3N9zmJB3LuEtvjHDKkaB7UBHkf27TVvks",
  "key44": "5Mh62QNDnyURH2v7TgHtpS8BBVZ273bFEhtUYij2JqopSCVZHrPace2bDoFCQRmxakmArGFB5iSHQvqj7VZaWqpN",
  "key45": "Riq235Y2PkYmnzxARBZux5qevFKKepuLotb589qJtSANLzpZNhLV8BCnecABjP3wzGmPYzFeux8vxSDYaXqtktA"
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
