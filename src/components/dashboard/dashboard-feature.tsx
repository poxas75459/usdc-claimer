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
    "2hxsTyPmycMoiBZMoXojcqboJfVKwhkWSRMgD559XtWHBGXkuwG59ijcFz468VcEK43NnucCH2YuK5Y9ddUHGUXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3f19jReBT42XtmBdQNQAzn7j5AMrd5Upf16VbrgMFzPYW4KSXaicPEQE69jvGP4kapR3MWm8B2EBpB38eGy5Rt",
  "key1": "5ndCmn5HPNQAtKzhcVdeYQEL2usn3mfZBNMtCCtu21Hp5bbJT72EL35ikwTXd7vXhZVfKJHjUhNCsJZudrD9jAT9",
  "key2": "3J2qbibkwcZwXuSVWG954Kd1cNvJv19pcMBtnqCDfqfsmsFYW5cNzEEU4SXoDpSJwa2vZoMvdKeGQQcXctuNmYP7",
  "key3": "4D8i9rCejiGQAfZbqstYbbJXjjqRi7KKvWLVjv5V4YBAUjvnFtZZWvJFrcaHrT6Fwx3x1wGTw8k2hYigvMTaSnnQ",
  "key4": "4No3MN91QcYivY5WhL5cpwjy5ahSLcskkpPrRSMK6pLym1ETYwzoDDto2CSJhvNDNj4P3vaEgS3nytuuxUJ9zptT",
  "key5": "46Lw1Gx2Jorgscb3KmcegNZLdzaCtaeHDhekuhsa8FnsbcA8N7qzHgFLczRMLiHS9AsBsaAQGzkaUhyg5PonoiUY",
  "key6": "1Pf1gytKzCQmtuXwcFYF2kcMnNxkZWQGg3QUq6iNqGm4XJPXquKzMaGy6Nxo3TnkWPjokVDwjRrMyuwKkZxz7s",
  "key7": "2wMKvVnn7JGHbHA9SXBTvircHSdNw9x4n6gdDCajnudcs1R5zty926CSGQfmSgQicawx9x1jMVnURerDLfXLURPg",
  "key8": "PTgcdLj5jwLDfiAM9ohZQUFEFFo9wHZvww2qFJByiV2453vSgTTwYCNTD7JNTWPfxyAyosqtQYYu3adiXSzEwCp",
  "key9": "5cLaEyQF4Mc3knTpvjEwXLo7sXUKFd66xHCRSh7bTB4fVY7atuAT4CP9NkaFWopCqSVhkikYYzJ1ByWYyBEifNgJ",
  "key10": "5CfENaQMoSiT9BJu24M5teQju2cn4oXkWcasHGoV93PgPiTDLuQKmz188yQUcFkgCz3B9PH73YkXsDQDU7xWRvx7",
  "key11": "5fwDLdQ232ASxdNikaQgedUsazepQnJPTQYSXa5D8hswypWy33F5WNLz5HqhodFJh7CqokZ5JKqC3YCyJduoA6Ts",
  "key12": "5pxdPrqgwqK4K6RNYpc8Ka2sKTx1PBQ6tszbASA19wx857HjdCk6m3WePAivFYviE4QMV9KFVQBnfP4Eiuo4zQyr",
  "key13": "63tNr2RsoCEquQxGPyuVD1UfR1XvGXhSXYJqCLqXEkWEYuLUbZiVRXV8PzmWC8WrVBGXELKekZdqT6gKU9qkc1tP",
  "key14": "4eLGqLHUMGNd3iTojyURFq4w4XwSAhXbaA54APgYVWxf53Zzzye4EDiVcjggF98sUhJCKp1WCgConGnvrN2a96RW",
  "key15": "436sgg3sMU2fp6fL524iovyu7YwsUg6pDA3gdnFWhb9gZzomEAGUqhfUpvFTzgSpHMsAMa2cyrS72ebJrSx5tJkv",
  "key16": "59XBxYve9dEnGFv41m9k8EDYnpno4gsjfJzJUYS3fz5mrpG4JQey3YQToDut17sSfEjf5uUniUf6sngpNc6h1Eau",
  "key17": "3J8WC7Sz75tYW8t8D6tUuSQy81u3dC37besTgu3Ur3n3XJZoGdfZ8PConee4wstTxDZZWyLxCYhuRnQssXAMSWoo",
  "key18": "3ZVGz6nXPc7T7vMR5PbBBgakKT4GqkMjdeAPCHHJrRrjU4ZTpXqWFZ1LgeBkodXWcTQUFRwJtamhXyddezEceBjB",
  "key19": "5bkpzaLZpL6ZfXR2KBHkYj98YpQoaRumkUtc4pc6vUmbRCyAvNG8ezx7ZVsZXutpHcRfZSDGCLmjfUXB4DWZG6Sm",
  "key20": "C5aznaAuHhycuUaXQvtShs7RoTfibCacBWbZuH1NwxVNe7n1oGU9hNZytHVjetDs8howH6SDALz4VEJXjMPGpQE",
  "key21": "4FGBw3ECUhkrtjCvZPTVx9DYyyJ6EKFSUJBjtN1YFGWvbHA8kJVfo5Zwfnc5MzDid5u2E17ZVuZTFLExQ1E4gdaw",
  "key22": "2tJoqkwhEB1Q5cdYTKQ6KzEHEgw2yzkGFS5j2ngnru3rpWoPMNssW5u5TFzMZX4fip1RpfTfaTcabxdNe8dTyfy7",
  "key23": "5Spcb8jphmBHEVQe7B3uX8MH7WE9fCwFAWz6e2i6xoyRsv8aFTkkrW9AhTH2JBHfXLBEF5vgi8LymFvst8yZWaah",
  "key24": "4c5FttW4qSEuRFf77K5EHQg4P4vyD1ZhCrNoRFNYq6KBrQfajJbp447jSguq3GGaX3mdTPbwhkeAUMu7Ukop39vd",
  "key25": "2hEBxuHGeG9JpCMspBhwvcSoQYe7KN2D5bRij8eJJwiHTJ93PuVfV4wDegfdDkyskt11FD8fjWsXMv4BDEhmPqdT",
  "key26": "3eS1DsL2KvP2yje5HKASXSg2pbcFQJhkHxmLMGGnTvk45wDTFMt9W9bJ85NeBqF2JNJwgMAQRxsqd6MV9VHNrCxF",
  "key27": "4bW6rgHSC8JrVSdjaJE6KrPHKRE7BgzGMd23goLYX3S4MqqHmpF2vE3jyfcdb2tQqtaehkwLFaSZ4mXtxod7zLEr",
  "key28": "3M9XVKsKUDPEe9r189z2PNaQmMQzX8VScaBM3FSy1dMjuNmDU4nf1YjjL1PprqHSfRbD4WpueUxSAgwSVmV3EEKz",
  "key29": "5iauGyjhtz1jpzJXTjYdGM1CjuXu7r81Bd2amVfdQomksoLucaU7J5qLzb6vrJFi7mKYmdTqZpk98q2pH3xwkw3y",
  "key30": "3PK28Ny65aCZgtU78PLVyN4XhhyDjFMBabiJZyEd789GZBJvTpEdFSh2HnFnb4Xbeg18YZsMVRbEvCLZ6AM1TxRA",
  "key31": "4DvqTZmg47it6b7HzzWEFKj1muFteJbRL7DbAWDzC6puTQ8zEYwAEjmrjQ9tH9AqsU1eRYV89EgLhxJsynEjDxRs",
  "key32": "3zhcwjnixqxQHkzpMf8KuX4anRL43hgNygDecWjuBQeKyxTs4Q82q4G3EXc2ZhJbrfoRhy5YJ7Bqm8TKYApKnUUx",
  "key33": "b9UTqRzJSMM5rTuAgKZhvKREqdYs9eSLJs4PakWznLdrt9RsdmyQEJLa15jejjPqyXX862eQmzYboNhzRp7CNM5",
  "key34": "4DtiBvN51dj3ZZVH57iGqV7ER5y4drDcqFnczgMi9g2UDdhpW494GTw4aGeYq94i6MJw79HnbsMHkFWGnqyTsZ4H",
  "key35": "4fPCy2H1YTHzhzfwFomnCXnxybYoxhdzjfG5wVajbWeEhn1QwspyypFapYmCga3jr4Mp1KHGNfY6NKbAXFpen8CT",
  "key36": "3CRfecQHTRjs5s5JBwbvio1wKGzUP4R4Esq8LctGmsuzNDzhpbmz4iTaFU8hToH2oe2Q6FtyL7LpuTfWgkiJ7Z7j",
  "key37": "pNSCUyKS41kNtKvq38p7XttWGjywioG982XTgEREXYStw5w8Ce7UqQh6G6MJ63wQkXMEhSuTXDSVxsufE3fj8nF",
  "key38": "3XCEDVC6BvrYtzzPLByF57oNhPQjAM62ioR2zn1bAFXbDbVVJXdjbgjC1cZnZDEKdTi7c931c8aBcYMC7GqER84N",
  "key39": "43tZa2BVu92todp77aDiewmoiYpnUQY68HBb66xd9ZbGRdvMoc6Y9T5xvwrMkXUqr3H7XtmYmcJ1651qhc6QYpCR",
  "key40": "WJPCvjcENUapNJfRDXpMoTXG184SFbFreRGDXe7CNUtC15Yyy8wkJs4SGajbTyCcAVecs4NJnMVuHz81tSVsEjT",
  "key41": "4ZcmDufKzGL47Rycm9tzoLePw3NeJ9noJVPBRpWJm7JfAyAaJsix571DiZ397pMcpbpfC8A8PMFNztFbZ9XD4bqX",
  "key42": "4XYxsvANanAkpARfYWdm5Mf2sr9nZAzoBxxjtfJNw2kYjKA59rw2wchvT8UZxxCrFw8JPiUPwvr1X9QLp4a3nrP8",
  "key43": "2Va1mLNvBrV4UWoYrZK7WvDcDAZ1gmBAAogrb4swE6sLEAYX3r8M91DEM58ws3iiDe4JDjdR7d2sg1RctVkaiJfs",
  "key44": "2ZcNpRvFFUHzZynYmo2ipfEmhjob5yedVZH6VTc3FAbgvSADnn6cU3Af9c9cFMtf2xTuseb8reHenpnzfQBbyjYp",
  "key45": "3NzeYM34TJyEvDVo3mB5Pa9ps43gRZCbrU8X96DXz6WUK1we6CTFQAj2ReGEKnsHKgtpjGkgixy1CMPodfj4MApx"
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
