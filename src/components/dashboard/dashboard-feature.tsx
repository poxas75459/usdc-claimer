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
    "5vz3SCxu3bU3Dvhs5pdAGFBeGni9zyrbAa77dmnPKZahsejqjmh8NiW2L4HysK5vgfNMP3ywnero1y5vDUNWddz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9t2uS2AYB7CWBRP9X8aja5m6ZN3b7UfEQNg3f2F2jtAX9Wyh5XGH5v5zWWHonxd2GnFoX2b78sXiSRjEHfBBst",
  "key1": "yQZdMhBAaYT69TnaURua2PKyK7pvmyvk18Jk9QJDKGd52W8YyyQMnjTCSkvJVqqkD3ifeENYuDmbpywp49JvLWq",
  "key2": "3a8qVxxaEaS6PocuRbYByatw61V7AhMmbKtqKMHR2Rinr8bxdo4XF1rHcvbHnc8dWF2bDE9trA7HdbuHUd9mGweG",
  "key3": "5PFDGipFjdPMmzYjGFi6jH6eMTkeB5S8JMbU8GnspW46X4D1ZrdnEgEqCaXetneErDwmt36meDsJzrYvDeQTzqxZ",
  "key4": "21jj9NoW45PGR6gVHCjjiKsG886R6X1o1J2jECnp1k8GNHbbxB9k3Qo1i2unhSj4sjH5o2AzjFWw9zVGEUqGZXFF",
  "key5": "61ptCa2fMHULGoo8KrqHEcFMtM3Wk3hmsXoXNvMbFNsiMpkCGHNYJWGsAE38afzkp4RnRs4kWoYmx4GCvCDikTmC",
  "key6": "hi82LrEc7PhZPuw16Gyx5PEi2TUm8wbmuSwtXxsVnaFyof5Q6b4t28TqLocfivWdbofUfWHKzS2T6fkBHYFXGiG",
  "key7": "5CeuFqgfUMX5kDUqe6pr3o2G9Myd6ahThEaerMAyfVuGwnUyfqGtwRQS15ESjwivx1v1BizkJGqSZgNsKFEaApa1",
  "key8": "5wPtaJwjHFqRRbDKmnbZx2bfwKxazZ24s4KxW9e2EaiDhDmJrtYaimFwAz2Mp49GK81LzZASzBA6xVozFqEwykpk",
  "key9": "5NfLSihGcsb4Ue8TiKQ1KveK4JeUuTapC5seRXxQKeTtirrnbPMzy13mcq8uUreq1J16VRUq7GzJ2tfg7zY5CsTs",
  "key10": "3iMvtymsQKA1y7f4Ys2oAyuZ2ok3K4rEusnHSPGAVpffXvbo414xAA8yhZuF3Dt1Vg99pA3324EPHjoz4RkWT1cd",
  "key11": "5323HbaYx2bTQcb8JhtztJAat8j8ALrh29Z1m7oA5uNCrdSexEKJC1G3da3KUYuKkkqb3Nqne6qRYRY2Vb4rQRkB",
  "key12": "59RTDZ17C7TE6qyrkoDzyv84FMdQppyJPuWDWc6xcxu8ZWfqTwtJMdsPRktFtPfY8pYoKfqw3hUkg1TckShi8dh5",
  "key13": "u1TZTrUjyK2tz8UuANrUHQ3chV99EV7oM6FD3rZK9cuJDUSvWdXUXYPxR99GcNuaPBPfLEzN9RX6kHvQSbYPpWb",
  "key14": "2QX6oTrUmjn2S2EQ7NHiX33AAtzHnYvtU6kAHvGKmu6perb19TCr5vahPCxWGeY2i3xwVFFGmcJsDKfcDYpudqVY",
  "key15": "xKG88y4Yg8PPfvi9XNB5AQ2GQgwLPF9ycyshe3Fqghm4gbifg3962xYvuyzLdZm3zU19brX9Z6dWMG116yWYVkr",
  "key16": "4joGVZgicEeyabYHJ3JDQKDmmDBnXMYmfu18wTmhHTixe6WZMSJh6BgsYEwam7KvMKvjmFEYmTcQs7Uz3j5yW693",
  "key17": "2q51MJ6nCEdMmwt4z5nZGvEHYb2MwEcHadTKjETi8yAyFaZsgS9QoRj2nFoUKF7xE54HpQiVJ92CFjRcijavasEz",
  "key18": "2VFB1rTJCtQ219w3f8pZMnJUx5qwKSAtSAvS9NwBhFu2NEfBPS8sMd4Lc7EWFyhXQjT9tpFKjGoK9AGcgmtA9KPj",
  "key19": "5DEaxdX6YUc3sKriC6LzzPY3pDgmxdjL77sgYDPSSsvfy8R7RVteY81rvgUk1FaxqtHBvVkaQdqSETF7m4UDva7w",
  "key20": "66j4C5gqATZCawcbP5PBME4UUvQzPp6H1kq4LxDLPip2qQXFURxkzdbNyA8SrrqpzArn1KMec4pPrGGfy7ArPCLo",
  "key21": "4UbXmEeV22K33JCLVq8z4F3FKd6Wreo8KgJxcjDBrQjqpDp9jZd11mrHwiXzYux5cUPYFew2c73xzN63f5srbLd6",
  "key22": "2ysFyax1ewWj4jZLsq1Sh4A3b5s9V3HkYUfo5b9ppKMQcPaLkBuy9GwnGHs4YAcNe4jgtE4jJFYn9PLXDiZtPguT",
  "key23": "4U9MbiFLExXpUnKnp96YhDooCch43AAC463vffm2f2rofn5eP4b8CcoxfjC6srPKPNNr3GQssfVtsoxtUscUwPqE",
  "key24": "34KsEGRvPdKjtmXkv32MCsccjKmHjf3HJdpUYieGn8FVS7WKwxfKTL6qctoBKpNm9MNdHAc38B4r591ffXPgwxAt",
  "key25": "4i9eV1Nwb3hENA1xaLfApaaigpTth1sZdz8zYRZnNhw1aetTDMfQ3AwTtREHro3RGWRtwY3T4gCGhLEotT3JuVgG",
  "key26": "zRsxjpcSmJHm5TU6mAd7QXLeeWJ2G9dEa9NfTy4YPMhTCK2qDxgsrzDixZSPHnJ3mJExySsPXqsZ32hRicpBdrU",
  "key27": "4GCPfpWatioQcXRPoj2gwAPKYbXFrmFWguCGJ7L5zDZ6gqwrd1W1QnCCj5w5FFeBnsde7YDorq2Sds5SKy3XZ1sM",
  "key28": "3otMhgLKHmZfSGEZP2uoGxqp1B52NtBKs1Pg3i7q76ZoipYCStJ7G9HAFFfCCK2rfwzXyr9rTwvhWtiuXEtmjRjn",
  "key29": "4TX5MFpYFQKkXrUACxeFLFUSPt3NJ7a3buVp1g9hRtthpxjNbgf6MzwS8gnFgZ9GbqdFTifitFZfXJK4jYbdgmza",
  "key30": "3i2cRBSFk3tYFeYAYF4PiAHgKM4DT4ZFbRPVQtxnS2m81L6bJaQcXWiJcSYiHUDcAq6BCQG5qu11bfEwTU7YxoKW",
  "key31": "4Rb21QEGUjousktbADBv4EASxQTLAda6phpnvGY6iSxqojDX3HyzCoocWMdzduMeVdWubKubYmMvgEWkA7TgXR3i",
  "key32": "27y59DjEhTdSEtpU8a4UnqUPKByzNbyeD6kVfvJaWsRE3fEcFZvGdqE33pq7kwbFKSpD7orx2UjimiSagpF2DY2r",
  "key33": "4ERY2Uk8ATjnk3YxrEVToyGSbRN2ErDTGqkbkvGJwsBkpYxaUwBA1bKUVuZXgEBxUDLB7H892VfzjnAqmZvA6d1X",
  "key34": "297xDJcXLJxxhNKo5Z6q7SCdQPPqygN6xEB71WnPx3bwReraGLnMEXWFi7toBFBZ8r5SY9h8eBfzG2T9efLYapmT",
  "key35": "22sLLsq4AzHmBfVQcccnQnqpNuomFzZVfVC4C5REGvEW8xn1zr2zfxgr4eNH7Ej44FkBYbVsoyG5A1hXBshN5RUV",
  "key36": "PYW6JkUgUnsN4in4C1GYfL1pxYBT5ns3rs8YEUe7rWKuT9vYURha9YKr7fMFp6u2fHATUZGpU8CHtXeK9ZcHUw7",
  "key37": "5PN3CMiSFNcFhVB4gKkSN2iC5aFdiQoFohwZsxhbQPRBZF47HARXC94A1NTDwC84cgshZM3cG5BNFhWDcmGBicJC",
  "key38": "5jdkmCmu8q7PGjs5G77tB8d9nKGMqQekuad8sjTZFicYTjfZkMe7aTXysVQMx1GnCWUGvqUCJwwHN5nvZzHVLLqz",
  "key39": "2jMVP2kUhhhymTdAoKSUBf6q65M27i6jX9kHR3gamrazXrrfbgzh8Gi5kbBajkCu4FcDywRp7cfo57U4yEUnaJ24",
  "key40": "2GdLBLCLi5XZPD5gguGRHfrf7UR5T8ZnnAGu88QASMCEKmeM8fsbfapTC1fdn2oKp9mrJNcgfm2UdUk8BxzgGRAS",
  "key41": "2kffJBuhNYwybruPEe29vwn2SQ6yesJszjXZ8ERwVjNRR6wCZdtRmp4KS4TsQqY9MfsvuaqSojaJfbTA7abp98NF",
  "key42": "1v64fjEW2GoRQPxy8athqZ1GJeTdCxPYBdRndzbsA6apbmuhAvNxpBn11Ga3dnNsDu9E6it1o2FDUGYUbvxSEWJ",
  "key43": "2jFG8eUvRc71zJ328NRxvq6oAjcUcHpxxbDyVt4YtT2WYMTiKy9ZRQuxMHfM5kQarjaw3RXE62E5hGNiNGFdvtPJ",
  "key44": "ciu4VXBRYy8uJECFtNeS17gzSjTy69fNrmaPjeRZFagsrNQ8XjzQSwHeqK5toAF39TxUGVRjYzMbL7NARvwKdJ6",
  "key45": "3gMTnaR9MGuX37kDW26Jxxw9P9j4BirFPoRxgr9JSVnQ1WcKL9LUoJQdu2BdcTJzpJ6XQv5NXsLc4CZiKxSPaRdF",
  "key46": "5wkSbFqS7f8ASyD3uzbh7fwhmkqwvWW4qmZFVUZNppxQGNRyPoU5bJVgqacPJSB9sub8nJT5L6pSXzQGyLthhfQZ",
  "key47": "4Mo1kE5HsKxMoLtQzRZswH6jKtRr1zADoRdB5xhKuUdqqWsKkwP5sAdqCBN8MR1zgrtKwzY26YTRoH64NjtPNiSE",
  "key48": "33yXodLjPZXXv2DmoH7CNMTtYWxtEDXGzUYCtiZPJQg9JSyDuaBwNXYmkqafhMAhaK4gxxBAQgf9uz8vuXKMK9XF"
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
