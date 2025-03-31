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
    "42Rd5uCoSLhTMHBRNLNJGH12edEti15XJRiHRwGVmXHBoSd9xQCbdjgX31KCaaEN4ZRUahQbDpxL9ZKJjXivwFsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vv9jiMnQgyex9fv6bJnhwXw8SEzU4SUeifYHaa3yKnTd6TtqXWX8M5oqc8aDqWAXnywjZNMSQB7czwjQ2dMBcNk",
  "key1": "2MqUAWy1JuwLwwAktV92TU29Xyr76BaQ6yG9Yd4ErM34Dq591poS2NHf7ek42gd932zqG8M9UTQtzJAePEW4G5uF",
  "key2": "2eRjF9GaQSXbKjpVoMtci1KGTxe9fnAwAHfbMsjYb8cwDSUJbZ4Pi8chMptC5KGE5E14rwz1FMNd6W9uedGkiJYH",
  "key3": "2BXSgNb7TPqnrRSxLaf8rq2G4axXmfaXouf2yqtu7hhLbTcHSVmCf5Hru2EaKGcnb5nMtoWmqkFBp1TDLcoHA6Z6",
  "key4": "3kAFd6FoH7aHroF66AR4Mim9SQoKsEzAsFabG9cUM8xnfiPXRFDeK3aU5FG8FkwUuWeEQWzenznWay28p1qw1okF",
  "key5": "3mfM5A21TB9RShHQ6bU5bfwmCBMj5qPe7EkgaukWq7L4uNuBrBB47STQqf9bPwiHE7VNqkmHa8UEnToEXotPVEAD",
  "key6": "61c6VsiDRhdyFkKfez7MwB2B5YygdDD3RVkjxxbZRumKt53Z7B1Kxs3XPd1FtUp8vgP8MxsNtcgVm8PQvTpRXDtR",
  "key7": "r1TExXqQE5PJCJT1oHusd9SjksiV7HyvAiqCmPXDZdzvnzDpCQxXeoZxKm6Ufdhie8Kc9GTvXa39fky9n99SFDN",
  "key8": "2Z4BNtif5t1FjZ7h4vFvHmg2xkRdo6pDUWU7tBZ8au9Ki82oqkiCjGSWymH1orp9ncxQhiiCmZXra96gm4fgN9sx",
  "key9": "5BKSU6yEKcruNddNBSTHtcqAWozZP8m7VMJeygUSkEGrnbCzbHAz3fhgXM7C6ENC1StSCJqWyBWjV7oLEGhGHBhH",
  "key10": "2F1Ae5JF8FdKFW5tMjmwdQg7NNzaUG9ZTQsEjhNXGMtppL7mLtnnvJYRkg1rTpDwRjuKVGV9qDEf8oJaNEh5wrrh",
  "key11": "5xGsFd5pn1wV4KJjsoktxVjWBMT9EEbDQAmtJGoAY4tRDDJU9P418oWuPhut5qdGBkRxxhonZwiqnq9TYgpvy7NJ",
  "key12": "2dt512cPtTfN4nYZ1fw9gGoimPMJ3Vc8ofYKw6kQHY6Do4Er2z1P2JXnE5PRQ7zrG3M6bUcKManpsMPutZ1MuoXt",
  "key13": "fXfYxqxzVg2KYG31ThQXtWUgHQwqMPtvSpi3o7gmMdVMyneMQQ6LzKVBNwEL3kGuBNeHypAPpvb9eEEMPGVfWhs",
  "key14": "2WqgUEKoCwpiwLNMExsztHeZrhoFPRmZbcG4ydgUTz5bfsorGQnAPFTLt2hsn5bHZ7M7hpB11qSeQGqWgS3FDphm",
  "key15": "HuthnS3dUTnCbr8GdLvFnrVWQYcApLDBcYVJisQJNwsZ1mgxeqrKrG13Bs3RESMqr1FtHVRGeijjT7SGHA58xHr",
  "key16": "5MVKXCioh9yA2TtScaWt86zQdXFCpCTdJLkR1jLZKPkGYp1MdiwsV8q3rCnRc12vbMmwsQ5fymVw9heYe68YeVnC",
  "key17": "2xqujCWyfgtADcyEgCgetTqExwHjqq2yor8KnnPSM9QuaUQktkMmkzqLiDhRmUgPtxhgpMj4ZZC4CWQy1FHRt67a",
  "key18": "26rSxnRbz9U6nQ1r6aEb3xDaFn7fjiFSMAkk4uCv9sKYQCEMFfoMpG8amiPesFoXxbRAEQJtc9bHqiyphNg36C3V",
  "key19": "4w6jYQ7jhBF3QGQgEvSVk6UwxFNvp2r3ujLShzPkh4W1nAhD1iQg6M6aJBZwcNdNeoKUEGpqte4n4VwQCjrsvthx",
  "key20": "5FaG6hJMs4UBmvf3egXRA8BMZ9FjapdCUvMgd1rhr11Rzw5AvJHy1gbecvu2cw4A7o7P3xxejJjpNoGaV3pXQkBp",
  "key21": "2RB48Lp6xV6NinuTjs3S8dVrWDTaxQqHcWYJrLBDYaEC6p2rPR57JsQB7np2QeCLWDYJSsJNtQZ3z1Mpd7F1uvdC",
  "key22": "4nbp7MHMeDfbrzUpreEmQpsgRhTuCWyZsDRaD4kiryKm8ZfaW3Vg5EYPiENjZNgtxfophtE6ArXJzaNecNM6rTyg",
  "key23": "64x8RkF72VmZrgvfZYySvkAkHwqNZ4xMRjMXGj4KuJavvABL4QsM1zRhjG86hdS9WPunBC4N53y5MVEvXMAGwfuj",
  "key24": "26LeUD4tT1oTiYaAK8TGgksqFBjTJz9hoSbDbcd8UNn1joP6yPxMURLqQuR2S3iTijKeJche489XF2369jQvaeGG",
  "key25": "4DSjnRZrJ8sACLkXH1exNibHQstGr4kHDLwDRM2xbuXTGHzWhQ3HEPk4y9Kfc7mDRPgL5aLGPNzMRhnyw1YHLMNZ",
  "key26": "dK5u5LnqHLwLRX6u1pZDrMXz6RQd6McMtB8588KBiNwW4hawT6zq2FGyPPveHnAqFxvwGpyXivBfBEPVT9o2MBj",
  "key27": "cAf4iTxcZP6K5wBSZcf1Fiz5P8Xayo7GnQ9eD42cjYmH7pqny7bxrN8LK4qPpG5CT5sFQUewbgwgcfjAkDZjxi2",
  "key28": "57iWhxr11kcCMX1mjHiRJmUi6WdzbJDvhTUaqLRKafjtX1bo44rVvB3bqzsxDvNwdh4G6xZL1frSU47usKYJFJtG",
  "key29": "4mwaMoBSV8315iK96YJ6GhYzxMWnhekVHFKZiDzc8e696BcK5gtT8H96vuKCPyVxReg9vEiiFUBa3awd64FQfH4G",
  "key30": "4xUf6CZeXj7gGKJFDUS7iuJ1vMHP2YZSsKTrKXZkajPuPq6cq2GFiuf1WjvyTHwiAmUsSKFEmwDH1v6oDNkRh7jQ",
  "key31": "4L97VRm7tp3QpDfs7cCNUaecHWvPnvJuEEfmoL3jhVQ7FmApnxVRJ1R5P4EpT1xdVx1j74vBm7xztGLx2czBAJPH",
  "key32": "4roRru1Rp1H4NZ9Yoijw84ewMXB8YTEzCRqPuHAYzrU6ojNuQCsgSytv3mMYrsdVHRhGFTxTY9fgNpPXqCehNP5G",
  "key33": "5B2rT8ZMhd6YNty5hUrMPtTPD5CKq3oFRcLiiCMgxoR6Wasen2RZaXxUnX7drs8P5UfupY7GpRoJY53apZjfdPWr",
  "key34": "2hWyyNRTuXz6bSmJzPtVxaqbWLxN9nst7rZwS6cr48TLxs7hag647Zwg6Y8NV9PdHkKLc5vXzvYPoEafyvBZxqaj",
  "key35": "gVAm3gNocQKq6f27DvSH8Az5xgZCjvtdhgvquR5HbN8gR1vL3gtwFgiBq76WeThXhcSAxR7RBemsZDJzyLicxAE",
  "key36": "67ia8cg13h9j1ivGQiHftjqBWhT2dzt51DnKkjociKSiAixzn3mFzqdHWpqy9ERdBFEb3KR1su7vcmyaRYjVVgk6",
  "key37": "45tNWXaSgSiyHmbPaEXg3BXCKA2SxadMY1XbgWRAVqbmG3tejEBGSkdSgrKAESk2Ntjfr8pPn48pYo5kuAe3AZPw",
  "key38": "542g8EfYRxrURYMoc7kVCCedNe9obGouu3mpgG5S8TXSZ4qHxYB2xR6CQN26r5RAPEa9GUYkRFgvbZYZNvE6YSPw",
  "key39": "3ZfYFWnTwVtFZfkqsxLADQQ6EJUT1CLM17byMK1ms43Jto3Qgwcx4N8qDY2BPg1AAJrnWH2eiqn1vkk59BtYeNPU",
  "key40": "DXv9suL3i9YjD2wqeZMEPbDLFUE7MNHNVSq9iG6m3K8491ExEYXLU8PJXJKGj5GCu6o85TiHb1BYSTbQSud8qg2",
  "key41": "5dQpeJ28Xjtmn9qep25MZNSi5FHK9yMckZHDCqjwu1SPNk36kq7nrLJtE6YzLCMrU78SW2qhuGUgCA1ZCbirTJBp",
  "key42": "5eBvKZazocGvkaw5xNmg81BTXFB7g3vPRrqV4WJ4q8BvHDza7F8uCwnNaoAHwqJuaY23qM7yC2GX7CDQHnsfjxME"
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
