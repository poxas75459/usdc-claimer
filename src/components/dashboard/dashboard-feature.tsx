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
    "LUnV5RwDx5yXQWZwGU6nybvKb8UFd3FFEsXE7meGeXqNxZgz6KF7in8KrTQyX5go8cLMhoAWTy53C2YHX2gE2iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349jP2gSmVHXdpEvNCcDXjd4Gq7NNg1eMKgqKrYrDH94pxZz8bAhvRobw6zsH4TZLwEg2kMCGXZj3gsHVEen5jrf",
  "key1": "wb3bbiwbhPiekiLKT6XDWK1qXP955VrDvss9BEQpFThvNTjtDBWZ6FQ4otNXRwKnjMgpQJ3FaDPpBKr9XAUHMEo",
  "key2": "iVe831aQQSuszibTZVDcorNjPyyD4LbkYK7oXtPDLyNgMHy1dBtQrUkCozXjV4X8u9LyGdDEHPwNLrbrLTEFuGt",
  "key3": "3smEFJhwD5dQEMve8qSeewo4QnfFr8pyS3qAUTxFaUcuRLP12ybLkTXgyS1KQEkey2FPwDXttkEn8Zp7tv1Bd82q",
  "key4": "kQgyXYMzxxRi5Jnu29Vxm6qdQ81rPfHrrJj4jFsciz9g6M7ou471KWf6DS1XdFS2gfPKZgSAXG2qrYs3q9pBQnb",
  "key5": "3brA2uL2B9nvRxWtTmyZnfZutY3Rpes2Ya4CXyi8K2D9pEh9ZwBJDgqjgcuHXTdFeYiA8v2W59x1EcUapJV7d9zy",
  "key6": "6hoNmLmUiqNRunPxb5izdfH8mshiFfVKqJ4qb1NgRP8SsDQnZ4JqcnWCp79hjSrzbm4aYjwpBp7MY3t6rbB4bU5",
  "key7": "4iYm7159htUsz5vKDHv7Dchm3MWNJcjeSCuunDR6nYJrdLqu8AzV4dxjyR4ohZkMvxThXePTGc5oACwEWoyhHeSH",
  "key8": "2L7YB3SE9rgfSrcvVFjRLJyifeHGFRY4B15rp1PPvuNCWKZbZtrDhazc4wTyY1Tfc6pVSTsp95xt6vnYRxiuAfoy",
  "key9": "2Sm9ypUMqNHxC2CfcoCyLU9NkN4KVVfdSd5YvCGeZ27TVPVJ3tqCA4Ug1ZyagW6YAt4Z2rDUvn49d6wttmvsJabd",
  "key10": "4caQGb6P2Whq2tUWtB4XsuZjU5adnTbau8SwW4yLnzjsNn1WEktcEJqRyn647Jwr9AJVYMbeQVQ14HtfZyapRDLR",
  "key11": "gPX1u4p7F2mqmBQtUNkjZj3mCBFnfRGHxDig24zt3pYHj49o5R6PkqzYkFx9j3VjStMSgbv2sP6FxEZBieePMLp",
  "key12": "38TApAnt7sDdXXvqnpMQxktQFt915uATvhLYGrWpVbXjkQPLRViDDLpMrMqDoQK8TmWq8uNgSua15nyeP2731cNA",
  "key13": "2KFtMZNYVPai1Su2H44rWioS5VRM4qpjx1LFsKms7fTgDwLoiWeJbBTh71fWpViYyVhzEGZVhynoHWBwrjTfPRw2",
  "key14": "55Rju7p4DtArpQ9bAJt1D9C4446dc1sbREzZnrAPR5j54GjFU225jF8NEqxbv8dr7G3Ro44dqXYXJn4zuh3UM4N7",
  "key15": "Tf1KMoy3HnCTe6hi49QUpdqMSybKme7d8dpsVgsftCgmQ2Ys3PVTJ8hb6X3iKcasctsxY9UaDE9zXweUXvHzghJ",
  "key16": "3Y34UYPdShiJirCE1gkRMod96ShaFLt3SLXQqcAiYKwQVRSV4XEusYsj36x7BaPszL7jjdnzU3cQrvqzhChyrjZu",
  "key17": "3Go9i88u5cXRn88buJ43AGHmn1pu6Cb54idBufPbExnhpJvN1jYeLcZELBuynhbCp7ek4fvZrxjBMo6hRm7bY1Lo",
  "key18": "3qsdSgRHgQbQhv5QP5vunNvWf6ioqJKZnrWjbuGNABamX5A5K55nqwTcnw4bhTeUm2iutSAC8Px3PEJ13UU82YcH",
  "key19": "48d81dYfmwe26YAKkKhqzZEKfpau1oDhmddLtpxpRXnnsTtvyVgbJ3rEausmi7ZCJV4APfTgj82yBgYdHU1tgXWN",
  "key20": "6RsvQrMGpvHFJYLktJyL16Vn7kbrE1GNZwjpreWa2VMndF1bkdxYu4vFf4mmkBLwEZugtQFL2LmqT9Mk5Bkx8eb",
  "key21": "4CssfHnNEcfDcsM2PjZjofmJwQPWGLxge9zhEGQvv41UEsqrQonrv4z6Pz2XDsmsNs9VFwdrwzsNqLa81Pd2owrA",
  "key22": "44hkTQ49DrtL6p3YjU9ZRf6g9p7G9fXXjaexHQf65ygci7zdUDzcCYMuU6QARQUSrbnMPhagyCj4cmrTstVVv2kG",
  "key23": "34VwStyUGtarsYKN9ot2uz5UFPREhxYtrBkrvAPTrMvdLcvcEJzBZTZNfvgLqB11bo9FUZL4NXbAPrZUyvFYxrAm",
  "key24": "3YqZ7Ajb2Hr5LVyDfhSb94x68TiA64uvmJbvQUp7uABQNZaLXTDPcG9u27SH2vpZwYArmDfDhGaEqzh1Uy8TRcyc",
  "key25": "44z5P7gkN3HNYPgsJoQmKMWxXNYhA6qr5fuEXnoYtNXWh3mc7xha8bYVGUBVUJr6GNZQQHFqzWo3cDhV1TsZCXos",
  "key26": "5h4fYtwzZyBxuVBXb6cRjqe7JLzgSj1vEQfie2zQNEtTbEeAcFdLogixnGUaor3VfDYRPbU7ZgH124t7H3HLbQUr",
  "key27": "uQwbPFMGBLushgcrtyBfFSJMPftFwUDk2Vv6VazDrxHfAHQVt5JwW3PsBBXYb8JkYL81B9aCiq5kMjyjpMirrdV",
  "key28": "cyDPmMesmKcKjNCMsZUmZfTH8ceHUA8jmp5v44gDDyz72pBtRLKCGytPfKercdGQ95iBrYcT7SV3jNvwqY1MbW6",
  "key29": "5bTwv9q8XCUNfoBpFfPekJzaHGVXheHy9UXCRwh27YtdbxR2HzZZu6ZRAMrYQHPFtmxV7ZmTeWnk2WL2e3aJx76E",
  "key30": "4mfpj3aehbb73ACic9JW3ynAdQSboFPVnmUYbXVtYkPpPFkRUoSDfuq3xQyPF8JrFmiK44jtcqX8VfL13pTLLGCs",
  "key31": "2yKtsfrX3JQgkrqZcnfsrdcNaAPNrwYxxxHVmCync3swB3AK19PudMdbRxcqgQU5twtsR3pnXzAARzNHLgqfT1w",
  "key32": "5tT1yb3qM6fspyrxrwBaMpVJouxdDZBByTqdVWuXt9mhhiVePidTaCmw3nujjFKCbqM1WaVVp18D6SNetZm294rk",
  "key33": "4oYBrApLZkCEc8bf31U4qfC7g6CaamhTq2DeLAcjFFNY7gGojwuC8wWoUodqKEhZN4o8RubDtDFUfDsED8nrUzPH",
  "key34": "42QEMeQkNwdgrLmQR7Vzg2LsjDtxqTqFcrsWsTHLfPrjb2uPaQhGVVqBRAUznGTdW49LFCtv1ym23vMQyDfcQmFV",
  "key35": "3j43GSKceyz4WvwrpqMroQ3AvLboh1LFWCzXGTBrb9MU6yKVZBvFaWH2tjgY8vbXw734hNDR2zqd5JYtjpMtqTw2",
  "key36": "2Nfzy2LWZE6tSXtxtZAc6bJjjf7jF5ioXVWedmaBifZpi5RKfR8egGBqvuFr8GtQLAYyud61W2GyautUHnkxp14N",
  "key37": "5QJ5RtC2GVV478DrsYcaTERY2ZxxDVno5VvGZzBjFNiH2ZJnA71W1ZTBYTUfxZBsE5PK9zXaZ5jHqEGhZ62Vhw2W",
  "key38": "5bUC9994xq3C2H84mX7JNyucMxz55qfTKj87Y7fvXqz513CzSEjrAcipzHxVidbXDGRTKZrpVdqkh7b7bkQvqnGg",
  "key39": "5JF9ZUfBnpUxMA1XSkZoMvqphNAdhLuUDtSKY486zg6ogBw23a1yE69hvFoCuJmgyMDWMzmZTVEfSwzfpuHhzfBz",
  "key40": "3onx3NtadAMB58AGCwuA9DxRyP4ZUiXfL1wmUFRi37QYgYVmcw8VJiDix5cYVcdRJ6Tdx9Mbb1NFnPSwVFBbJVvc",
  "key41": "2ZiL74CzzJScfJBK3VDybrqwptP3jmcy7VdtbimFwZnwGiyvkuDEA9Xsuhz6FM2gLZawU9XBHCwyw3PRy2T6PcBL",
  "key42": "4GML33pyozi6WBCLDFaGrH2BqGv6hygzffnxPq5E287iP9JANXmUXWyrQ8qDgZHkhiNVxiRyduVRUSaaf8X7hzmZ",
  "key43": "23WkuH2qB3RfR6D1jzhj2zZzywud7amHR2s3CqdH9Kv5rGmwnFPzY8ZAuyiJb9jQDJS6WBMrnfGUuFVvwtkBj5Ne",
  "key44": "U4de8d7QRyx1vVa2AkLv55hsa8t8Z2YjXkMd4TUkDZc6UhGFjRahgJKu7Gg4mkfY2gQJhYRJHccJuCkPVUXjYsE"
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
