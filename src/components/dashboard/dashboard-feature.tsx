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
    "2je2EyRL4vChjgpkpabxuTs9XNbvVoTHnqTDcEU3yDJ8V8bLc6zrYUnSybCAuim9nfj1uNpRsG6DQK6Mh1CdYoFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGCTWBF1PKgNoXCJ2i84rszYpxqwBSX7stg5Py9sKDtCbCKWPQrQmmgKSQ3vvyeH7FpMDkh3ZvDJ95qHV4qpkDw",
  "key1": "3yzw3aEMBXUC8PxX6SJUprzYs3LwwVy5LtTtFuvTjGwQgsNh8WnDMVvWGFSL6pb4p3cZuauaA6Z3HYPDcWYzRBxe",
  "key2": "21hNBXTqC7Zmiag2Sq5dwEKN7xxqN58knWEkXVFJUzXPVmhXRYetjBUrxNUSeusq3Q6HfZkowPfr2aUeHv4rR2aP",
  "key3": "3sRUSbsLJ364H8LMveFGDx14dsHK3PNa666mRoxyH3E43sx6qTmDDBdwxfu8zjqUZZFQ97ThaFCMdJHJVq1fBQRs",
  "key4": "5V17E5ZiQ4sKJoHZJ3TYSPxWc4qRJmt1pi8c2euwP3pg7M7Ez4b4kfWm97P1fS2tksFDfJACEX2z3HarhvQgshen",
  "key5": "3HS8sVjY7HS64uYrbG7Y4zZ1WMqrJ2knJ5RodBfHNzDbqKWnTQ1Q7wPqpWmtU6niwNn6tX52CFP99ncmgyHoi2bq",
  "key6": "3BNpBWX4RqvJXBdBaPXYL3ga4UbA895NdUC3RduNZTsQ7WcKbxzyadSAH6sPR7MfHtCXsXBzeaEeU3qH32JwDiX",
  "key7": "2cbpL9fwUV7qrxpJgJhxb79FkiLpLWXrTdBc6wDL3U8zW5TNjajf4AZGCSkxJ2vv88qj8DWsdX87bXEfeoqmXxju",
  "key8": "3Tcrdi7tKvzNXaX95v9N97aH7TEJrU3dh3Uingj6jUfZaGg7tekkMCicMT1o8zkMkB9L4YDNoZyAge7iFtR8vd56",
  "key9": "669RXj29vkcLmYM2dYSuH3Snpab4cV11JfkPyKNsR3hUVqZrbvZy5ewQTV7twjRzuTLu6iogFVqkoiKNU51ct4JH",
  "key10": "59ycvVfv9XGEdcAW11XNYpbgeyg6bXi9Aa8AYswLfLZvBGkfZrC2UL5YMUZpA4M7BDdpHZdHcsCzWPqcwes24gst",
  "key11": "3tSGhFKyWKycxJ3sC7WfFcuZeepqgbPuyVMAaiWniqDbBB9zEgphUPQk9xFXEmU93ZYMKWpzFBX1qZrsZvqrSmTv",
  "key12": "3t1kMUbN5PLnZ22AZ4Jceiu75xUbcuJnj3C6gJEXqn88T3Y3agJVVV7Wkv7tnqmwMmoqePqb35G2qAcj7tFAPUDc",
  "key13": "nfUFkuJaQVbMjbAuX5oAiP7buNNBaazTmucxTX6YVNmuyxRCBxwXuMCmC2KkbcWTV5yvvhHXQMJKwuk2cuqFa2F",
  "key14": "3GDtXQk64pXxMLN8GPLo3R7uGTCwr5J8fzuWLY2bB37tLWWCHaqT2tDGTDkD288RN2bdfCnnw7c2Px6p7RBRu1Yz",
  "key15": "4mvb67rroe33raS3MZM2zWv1pCHNSxQ69AykAfqyvaJurSfmoQjuJ54sTJvBdb7X1gT3k85pFkqDz6TRoxy1wP4u",
  "key16": "3fMiGYTj2EyDPMHVDPNhVbjr46ybxGM9pEf8KCxbgCpVebVp5erS5op858ELQvo67bp4ALmbemjRUV7rBoF9Ary2",
  "key17": "ngk6aczDBjE6RgVGFekeGVAsThyj7ateDjEUbtGumze63U1s2hYT27DnCpSpMRLCz9GHuoD6P8YHf7sUfXWGiSj",
  "key18": "3eom9v63ShKmJHKWbfPmTM4GLt9tJ2XwWzo5JRSbZFrWrM76c74k5oCTYSuN523xHNKJ9qkKSGkK86L49LecLeLu",
  "key19": "P1ZXv1wxD97KsuBZu3evjBrH33Cghsobaxn9PR4sHFhWsLDTmdudhQkJyxPz76akzz4Lhwny8raTQckf1JnmPjX",
  "key20": "4gXuALe3j6eT4hcXgdMvXuRx194KWg9V44GEG8iu9HbvWF6EUyHwe4GCXFdjG2P3VYE8bfY326X71vr7edL78btv",
  "key21": "26YPzBJpi3Lbmos6xTps4ihPS4z1kPwpzWXwWXojk9KBFQbY6xACFbKgLSjyC7ofJMkqQeT8MUKMyKCWd7c7L3cr",
  "key22": "3zVpdW8p1cZ19ZH96ZzvfjX85fenjA8KHH54uYrCogpF4LYYj2NcoDyzNRPvSPicYfTH6Ei1s3PF3C4tSLw1TTeH",
  "key23": "3Z8uXRDeQzmpqHRmZM83fSDx4qbBfTz75BmBjqYYnGBSxKn2kxadEeVJDhLhA9P4c3NttTkkvpAoVdmyK1xdM39q",
  "key24": "2G3orvSUtfG8bAaPGWA2qGHpbhedvkoCU8nmNDG3dHLPcxLC23RY3XorsmuTr75WxadCKrFbopnd9d21BESjePNt",
  "key25": "LbaL3dQ2itBTF2YGLfGUpHH6my7p5oGeyUh84K94AWTPwdq8PDmds8mqg6HbgDC9Qds3x29E9wPgScQd2BQHRJG",
  "key26": "64z7xHC9Hm1BvXA5vduYCnH8vA2yNxNeANs85Hdv23HX2JySw3fS2FtjzQr3auiWRLTKG6W3KbfdPZdKHS1Dt7LY",
  "key27": "VUfh9VzWf6K6Y3SYxXE9VDLRiVvxnJUPgXuzzzowywLRqKaLZsPS11NwFbbFdXWhNDhvaSkxp6L1r9DbftiVM5U",
  "key28": "27JGgt8AnxEtAefCQpoBPrWL4d9TB7HPkXtagup8HNoZLYp33rbPPyGdmM6S7DMq4DNDfpZPB5GFh79GLwfEJTZk",
  "key29": "Ps4w8k6hx4udSHfEJBwomsZ5U1pCtMdF7nFKmChibjzw4U9yVF1jQQ1Zf9ndepmyAPxgCCNyaRZTfgV8vAyBF8J",
  "key30": "4DkXEBHQK7ELwVEfGuQGrRZQtJwHkcNTxVXBYMGHvWcD17z16smzPencxciDMQKWB82TjkMPPq2wk4Ky75HpgDhL",
  "key31": "4TRuAJBr7QwAduq3uZaiWPYmFonNqGFwxxoBeTpCtVDiFYmyVEdfJ36FtLQWpBgwjkRPuLk5qoJmi3vfrxnJ9P5G",
  "key32": "33z4JnCtCzME7FAvM8K1zFJws4FuugmVUGV5gw416K9mBgigM2DWjTAmMfhXruaKy3eJPK2a26KT9vDKxNRBBQ8T",
  "key33": "2b7eNAMPWY6cXdjsMFJ7YwFjzh9cDufvthUY51csaSEXxQDRr7fAsXygp74iPsaXVR9GgRBaMuqL1FRuihSC8uBY",
  "key34": "3eQ4j2vQA4y4DjTcPRcYXZ1G35xSsdavcG38cipW7uZtmnmDAMUZdC5N5UAHdratb54MsCsFBJB3oZY2C31smChG",
  "key35": "4y8PHiSZK1NJncKvT86UNmg9pRNGqoAKvr8pTB9VXQrJeQsFEQpASynwWH9vChAzQr5UFRZ9enSyPEnkmSb6Y1VC",
  "key36": "5CwSozD5ov4esdMKXdcyqvvEh17SReN7scay4drBUtA9H38UGuLsvUfv5BKL2iDhZhDXzWskDJ1Y3EwZ93QNNbZv",
  "key37": "nv1pEtxSasVrMaUjozQcEFiAgTZEk5RHERukeM6UetSAo6DQGCgMEfVTEPCXYupWc65d5KC979s7KFWfHfKV4Sw",
  "key38": "H4V17pxpqx4Tkz5s7RXn3Y56spfdxJdLtsRuQDj5NtUJa5Q7Wv8J8y7oJQ84dK86Leef4EArumaZqwovvhb4JWJ",
  "key39": "2jHjeHEWGNPfxQSwEpkHr7V6emSs9L2Z9hDwR3hyC9toH8jEZ7ediRnA6QsmSwijxjzZwYM2Sy8ci6oTkfWaMbaU",
  "key40": "2buERherRbeXV6X8oZfQYrq4MDxfxno5ukxMs7yhmexp6w2RY1nV29YccS4reWz8Bm2iMayEzKQe3ymwJFLeuDx5",
  "key41": "4jXGGV4XerfE2HJUJrPxK5qKGMRwX8Et1vxKmGXatmUBSgn7pNRGGyvaxK2mAuzEgF6N1GAHCqJmsSSG176eCady",
  "key42": "5QNcumapFvAU5CVQ6kbmjTDHsGPWGNis8U6MRhmDoKe5H7U84NrYErhmgUs5fHNRRDJKVHcXPM6u8Rv95uAuHiBV"
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
