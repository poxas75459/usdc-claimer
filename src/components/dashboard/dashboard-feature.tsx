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
    "2Z7XxoxMZP4CFazDZw2yUELwcwZ9Rue9jTrWWXAhDMCHeUNUPUv2xNXkbUXo87gqnQCP2SkhzCkJKKTF51TsTYLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ssrXnYaeoZRh6Z44BGWagu9AaGLxvywzA6wdHwi2X7TbmwcUu9TU18dXmzkyhJE3diy8guqXQdRys21u1EusNt",
  "key1": "4Grs61cTaucLW3Sk26a4wKBpk21peSKdg5tnwTco4d9b47KqoEAmVdnbsPoC12ZEhME9R6wcSopPU9dK2sMoCpXn",
  "key2": "2JbFmhYh7JHmnYjPf4XFMCVhzcBGz8LE59kqytE9m5W9DfhQcaU1yc78CCgWRmjZzw9jipfPt7a71UFyEFCN9xEu",
  "key3": "5jxSkkWr2Rvn1mWbUvsvJdNsXBasZLZbLMfaroebsDpE8eQg3Efdp2ED28tciAniBj218yCeupLCf2irEwoCZ4p9",
  "key4": "4Rt3KUydRTUULL1Cm8ceVj5kw73mtngEhKjsvznGy2pj2unvZEkwdZ8FBuC3MsfdiWS2nMmMFZL6CrM1LrTXUxx3",
  "key5": "4VfdL2ntL7muyRXgjbCvqRczzE9PhaaE5XA45TSfCjX2uHEYHo9qwU96kmoW7HsSK4DxztRSPvb6mMQFSVYqpoQV",
  "key6": "3z5eNNDJvyirHuA4KmKE8iijAuw1pxFSukm1Rr2oxz38zKoPLqg1jnX5gYHMk17wpjDR3ttmLsbnXPVQCFzKJLAm",
  "key7": "51apN3KnEcsMtGGt4sV7eTNUSuhTNMtA2eaJZ7PPkqZwg1YeefZufAbKi7nHWnyY1zzYYuJSANY6Zwj5UJ3h9fjP",
  "key8": "2NFE4VQ6RcQun2D3T7yecXhPx4FTDVwxWUKZeWvzF1R7wkdMyg9hkLwfhWm7RceqUZVrCT2MvhhVtx8nBxXio1fy",
  "key9": "42f1Rx1jdFqdhsZwx9XsgCsZHZybVGNKhGXrshcHSYFwMNUWrF9KVgaCGEHE4USf2opcf6ncEyANhK6hWM265JM3",
  "key10": "2doVNhnetrTNym9s3WTiUtDZ6STSwLJxT2vzXDoomKuyV2jyCku3MZHFUFKu3w4dMHWwrb18xYovSFqpDH9qzfGJ",
  "key11": "4pifAcADAYZupcWhcLf8JoTUjvYTWK1NUMmLNCkTLjT2hxYGUbSnjMduwELyCfJR6F7XbsvKAStCzvveEbM3z4Pe",
  "key12": "4L2sdtXcgi9UNgcwyKsJikysY2REdi2rnXNqSy4uV4YASryk8FdHFcxEwT31qNg4YvaRTpRj7BXjftikLhWky6VK",
  "key13": "3zdwWdrKPvDRKHzYyWq4SgzNRsEv7U3ZqambgiHBCTcfMPSPWnaJj63U27PUcjRJz5tTWtx2ZBKxW3GSUPqBJU56",
  "key14": "3ontgd27T1Cw1Waa819EMdykZr4cQPWKpQhW1zmM9XhPy7k54fRFhfQasYiniQbCpv67rC1Yufy8PPDJAGw3Fxm4",
  "key15": "4pgjujQKcxW1dJhWhxwuUbAKjZB8wji7zghJFxoP4V4Nxs2ZXKWcmJgQWzRR9WCQRf7D7pbbowwoFmNFhMAyuWy5",
  "key16": "3XRuckUSYXWiBYu3w7DtXofyQ4hoktt5HDd7q5R4SeSvT9knvTJjnxJuHvWCZRD2zEDuqfjubpSWxac9PTMVpX6T",
  "key17": "3FZ1DjCizHxq4qRqntGyQrSWiyJ1NjfksjfUVTaXkKmbkYagmnusdTZGqd5PjddTqSi3hPfjuJdWEkXNT9sHz4Dw",
  "key18": "3MRebBqywqpDiYniRFBvb7diKphUCGcihtp3Eww9Fkf6iNEqV9hemBdAowcv2JYeZJf4dbLjZ6fXqMoncNZDwcs3",
  "key19": "N1PApUo9QryEau7CqyHPDcvXUGgY3RoBLT8E6h6mWLkFhURVyHK7oM9QURfRe8fhE5sWLf8Uer9uPfDztfmbjiX",
  "key20": "2CBGfBLp3C2Ui2asyLC5oV31jpVMCMn5WTNpBbGcnvZydMUeZmkooX7SfL2aypiXTLTDaukF7bX5MveVw1xJ3nm3",
  "key21": "3yRtcjGCHSvQJX8feukB62qqkBqK3D3RpAKWzhBZ9k5wtPCnM9fCXWWNHmQ67PXYUCYgSKJPDxzXkaAp9GEw1dBD",
  "key22": "ZztpWbLSHQc3WiNBA7tcrasZNJvqoT5FMSmCHqf85rPq9AFknhYzwr92JW67sRZMXizNdgCq1puGv49Dj7dDghT",
  "key23": "3xyuTWK1qfE5wSeKcXH45zB5rqPa9MC9DyjhL6v3GgQZxXGTdVQfPUZmRBtHUjsMyvRoHQtU4x3QWg6sa7nyq6TT",
  "key24": "2AFa6TwY2SYttS7iGd5p4NLVaMaBgWGweCdM2X5hvrxrYx8QgEezEcPvmi5VbiQPf2F3t84HF2EVkHCPaCtDZzze",
  "key25": "2VrSuUmFC37eab4Zeoh5vfxxNZ9RfRS2ZR8hVYLCPoE3oW6yUKRtnzkyP42MGJzVvwehRN48CCe6hLNFU5T1mpcc",
  "key26": "5DY2jtiYPQPgC87LGSTaqsduepjCEprnXNBXfSzjedQdvryQmLC4uoE97MsX24xEzyEka6hvzP9XrbXLdWR3mfTq",
  "key27": "5GeCpnNLtcnTqjAMbFMLm7JLxsVHseCdaBi4p44t3P8cqormzaP1anypmTbv1PnzmDYPsUhT12PzBUQidwSiWWQs",
  "key28": "2iHVLM7KUkrskQ2SW2bp492b8yHjYg3rmdtvEVkWLWiYFkNRAzjzxmbZH1pGDkETJiVrvDwWfbKWZHYPVsPDvWvX",
  "key29": "3913CyVczPSoUL1L9roG2E9Y6YKw85x2NyJqmrgor3jRKZP52fkLpKfaG546JQFUambzZLHXNYgH7D1GWd3aeAMc",
  "key30": "2zGUXffabyk641ftq8Lg93SdRvqvPhFcym8vTwbw3R3k1bmqR6o8UdzsbT1RZxG5Mvk6T9zr5zAHKd2vprvA5EDE",
  "key31": "3yj94Xw5YQSfo7x8ibhbtA1Who6rc38chWaJtmwCXKLcxUKLt4u4Dqn9tMzZAcDmJ5h6ymTDW9ksdYdYQp3hQe16",
  "key32": "4g6kK5Xkpnm3zkp1upknEqdb7PHJaakZAeoP2WM34vKFfXC9puu69CAtmpJpP2cTipm9Zvv3FWAQraVPYGQ1Ffsr",
  "key33": "4z45kokHjaLiy1ALcGTAvP4wN7aWjXEaErwoeQa21dt1fTXFCVBLC5iYf7VodQfLESwm3KzTshWMnRyLk7mSM5U2",
  "key34": "4k9mMHY2XkwExZtHrTv98gTM1ghxAnvjGJefveBWHYqMaRYgRK2PvntWaY18fPAXQcGnrk8PktBukVjR7j7X2EgS",
  "key35": "3mVkybpasDZT9ErNmH8UhwgpFsydioJvyyHFb8SABuXFz5uQPSojXwzgvNTmvnE4wQrDgw2vw6LZSQ7WyCAuCTGu",
  "key36": "gBYQnDFKGR7CCmZJgZJV8Z2u3Q7FLz5ZGX2aTo8PBwtRuneBrowqC118G9Tw4MA1tithtTMgs7RWEyVzSUxRLsC",
  "key37": "4fmSiFf2ubSAfsR27GdbuuMmCkps9Fdpo6YxdWPjjPX2MBdd7DrRykBoGXo9MU1wbvYgiKSjCPjWrBh4DxisET6j",
  "key38": "364BMtoLEij7BUkBvtZzKWujdDCQdSBHrAqYufftJRJJLGUmMvMcEuN2Wo5coxtT57SfugT6x51ZTQ3jY4efpBzp",
  "key39": "2eJZqGv1owT97vSWJdTN9wjhhT1ScJgATuC8JFUxhghjTgzEnJqEqyyaBXKP99ErfgkB1g8pGAyV1J3SSXv927Mu",
  "key40": "5EuNK969fstdaWvZCx8gWVreiKwkdBee3avze1Whoa27MLy1guJYaDS8qAwxAMwMcv3KhPPK6rEmLdXBKsidf9Mj",
  "key41": "2L7TX7bJkEcFkwgL6W7Er5PrwyNM2TMKsbmXkbffY4E7ipiMShiV96LYwBJQbFKHV4hNVN8hCFkhHCBPpMrqutiF",
  "key42": "G8244dzXMcYnMAhtmBjbohkTHkczboVCBBxxg2NUya7DKrRrXomjziVa8ATvvnHTt6CKVzsKYope7G5kWxXVmPf",
  "key43": "2UTnLaoQEf1a9dhthVJ8nbcHNkGFTmAA9TEA1ZLgxyjHdX28pvu8863XL5hwDMm9J7P71obQcoMn9i9FQvtHdBfL"
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
