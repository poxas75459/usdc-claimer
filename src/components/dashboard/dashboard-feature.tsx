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
    "psWkRG2idnMtjQcpoyLGVgxXTvxJgsBb8R7ZL7SfkuvwX1rPFsjEmMJu9MiHZfPneUKpyW4aa6ME4nX8XdE3nZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYu3bq3yDpCv94xFXWBSP5jKk7cj7MMZyUpRFPECd9TxRQvLY6EMJW2u2fgMQxLr1hQq9fiTT9Eo3MfGdkGcryb",
  "key1": "1rgHQh4uyF45XmGGdNf3r69uec7TGHsj16793NA9DZVWzeB93UrSPWwaoNxxFCSM5zzcewen6oN8UC3UUBDSRLg",
  "key2": "43UeDqFsT94dKxZyNxqbnHdbroYFMDmbpm91tJ9zzmAmdPno2F665P73YdEADAfD98oo1Q4K3qn8U2v78qucgYAJ",
  "key3": "3hxuWBPDEzh4hkfKg8t6NJZZdYMfgz6tRYCenmE97PGYBQc7HCHJb9qmH57Pd73ANzK7tSNUGdXDgArZ3D1rnVzr",
  "key4": "4kbHjU2PTYaFUCvmASt3KWeSKPLBasrmnJiULuv8mq5A31DjFM7ns8WnwbrRRE4mWmHBTLX5ptkxT1ho5Zzfh19i",
  "key5": "rZxQYC1CR4PXhLR3y2V8wf84D6BbTDJ5dKp4yyiYVdFifgrEhndUC2x7DUZaN4qXUhbn6pPjXfyDo8yL7ofTnK3",
  "key6": "5ynkPRscFN3kaUXdi6xrqYBQ8mdVAdrR86yrqCdzR82PgSM2HTRHBqDtxFRQaAxTu8qB3ApdZXR6bdCJHGGbAr8a",
  "key7": "61CQtm3vqSg7B3V2v3YoMFRaTtD1GSbTiJHxYMWABGYBPuLP7EL5nJE2qbJaPDngxbyZxzv3ZCrwuaarsCmECi4P",
  "key8": "2N2WZWAL2iJA8sksFiai4WfwWF7RUGuWxHaPifvSFJo5gxVMKrp3urXYfj9KVn1Yw1MWTxsegzDTtz98XDPipnL",
  "key9": "48xkhLgWvjFn2BexBs7apb6wzRK2kEihtmpKow1SpK678aBhRnWn5FFGhrhXwmxK223WBXqbAEHk6TbndCnbS1yJ",
  "key10": "4we3Kf8TtE26zmwqFniFCwCSpVodXiBnY3PJ8DAxqE1Use7jFRTf9iGbsFb5BAaFredVDMQDnMjYniLqsHKDYmUz",
  "key11": "3wW5F73HVgEE9NBuodEoucZxEYAEcEwx5BniLp17ZNYh8STM7hhssJQvqHqfQm4msR9vfM4HyPVCHu9tVSbdNKq4",
  "key12": "5xYMEs8bAFnUE5ojpmMvQwVBztGBjrRxEJWXmr3iCu2QNti4TWRXP3VN1Bv7P8KoauKRhmkXkkMokCr6ardEWwH1",
  "key13": "5n71TtowSDMBz3ZAyLtbMSrUZYtqUJ424a47YubfTbhWQ7JYDsZCG9KfKGvEc7d8Borcoyii2WxjN4KtrPNUbS7w",
  "key14": "4UZbxCw4qKAUMeToR76QwzNqjhB216Ehfpm1RzYrUqAL2CaLJdJEc3QgYUuzhn4bNqLcHJttbXsCnHyvUx4Et8DU",
  "key15": "62JFpUz67LFxewR9wGbbTiCXDQyGmoiNBJsvjavsQ84h1pMDqgR5B5uXfRe55ngyTZ9HZya2cE1jsDgGVW1pNT6Q",
  "key16": "4qKs1FbY7RzABs4pjdAPdCKa9Xuh73XE2H1vcreRZMdoPJMiamGCzAcWgWXdNbPE27kb37r8NgmqpWHh1Y7xBPy2",
  "key17": "2BpHww5eCJEAhZACaNMs3B1GQtEVz69nbzjZGUsU4JXrgA8A8G66vzqzSaNrokbc6XsNQYaUa6hSvkygKBf3xp7W",
  "key18": "5JxFxdU4ZFPgBwRrbpYMkELVnsYx3vvUpTS2XVigpPH1GUCGhnGHzWfVLaCUfsrCJaRGN5JpvzJWJczqoAEVyyZY",
  "key19": "3VW6eh286HuEa7xcqk3pfAPRMZMRqTfD4rr4u3nbbtm2869tVrXjYBwk5UBbmQzBeB3mcqMyoZCWawER9tRicuqT",
  "key20": "tqCELmYY8vPTVbuAatJTdEfSKXaxwpv9nT7T1b1a5yizBTEaSSoqK6PiDnqPGcuEfMf3t6pUGt1tFKxSmobSEQy",
  "key21": "614S7KNAfpJwSKFxdrAyvuX3SBGkB19zMfyXBEecFokDxawNwRiZNxWvuDKZRxp7J69pdqugwW89QpDF8ABXjpa3",
  "key22": "52jKH8tGdABjSEMbK9UAYeZeqNG7hMsAVfPa1jjK2n4FDshqs3pBE6SqQvzpj3xHkcnjZkkgwmD2fNBb6yAvAe9M",
  "key23": "58xGX5fXfW99rw2ThcKT4jVi3fJ3TUCevoxbzL6ijR2wZjq2pomJLDxNFXzjY7WT6wt4xSuh37Zk5Dm7coQai9Tp",
  "key24": "Vc3hVVuU85WkcoAoR4txpbvbJf4r72euMzLeCVedKfrQdj7rmm3w9PdD4TBg9gkfQN1AWTPHCCBdWZ1yPPYgdox",
  "key25": "3xz6K1uAG8TZTrDZDLvgj3A3DWvmojmnZf8X9ezgqS3P4d2kpGbkJbLYwU9CGsmhLtq13UZKa8srarUaVxXfPSg9",
  "key26": "27k8GGXMXaooGkXV4bCRfLkLUKT61HXkByseGyX7wrS42v7kfNMnj7jEhPekFxyqhxG3hAwXuMLqqFuSrB1jKFPX",
  "key27": "4M2WpnqBQbEzak79pWGB4EAtdCecQAvCCuJF6uWLv1CYEcp5dR46JjpbChmMTasj5i6pgGTM8Hb5DfAxd3Tcsb6K",
  "key28": "3ogJ7jyoffWCKVjAHeLW7uExV5UBGwj5NCwguNEXAvPnPs2bHieboDqLawWQKbqmwvGsC68RLRxZk194LJfYVP6p",
  "key29": "2hZcEV7hdUeRsS5GaHGvW3EEcSzMUPLBkwGKCTum5PsJuER37S2DfdFQySeTWEktroAVFcWHRft2H5QPmW3ohQ2P",
  "key30": "4BFyvGn9t6epTjr4tHdaLt8mJcU2egzdMX96aokLRQZysn7U5dedBAwegJsJyhcCb4DZQARmZQW4AF7nN7zWConX",
  "key31": "2NLx8SW2WZcsj2G7eaX83tti57mREQUDnkBXXGv16yUyqLvTLdwTQtTWyXwyEfnQ4jPTjAPzYk5uUAaHjZeWAuSk",
  "key32": "5CzAGyTh7qBhMYLcygmRRTYckNRVJM9w3qTyip5q4TaDkoBcq4MswVY6U5iAfn5ono6TyJugeVQzVcarv8Cj2vhQ",
  "key33": "4e3NSmwztQCPj4CAwGskKMd1u3YSE9s5zmgmtkNFyqKqRxyKcvCuRmfMMykzJbnTwASniL9yxW8tujwrWaRVcwo5",
  "key34": "4nREfyyYCUrS161fSZbpk4PpVz9R9RQBMKdyjg961ofB2Bs4HH9vGwTv2zfSBVmuGPPEChAVfGgUgRxEzpKfmLqU",
  "key35": "5dm5N2WuETwgiVQkY7iecrwusp17n5WR7HXs65TVRJATDB7GbsNWxYnKW5Qzxgf2YtXH1M3zsB4gz3jJ9PGUSwuW",
  "key36": "kFZS8PAiK9q79Ad5L6igNUeQwLDm7JS3uhAAy7NdkWHaeroVuFMGxxXFstq4KAXxV1SRkUisCghvYWxqsZzcRTE",
  "key37": "66kM9RCnvUVA9oRAMWxDLyfs9NfTcCrzg6snqg1zq71MGCJTnNeQkFfrx4UfK7kdbkhiCGATJPvwtinQuCKRKbab",
  "key38": "5a9Hnp6w1znKqxuW9x9su41ghFZU2QduVHpreywSsnfvDbvixv88Phf7BQ1hrfY3AQ8bKLJHS6CZzJX65chXQQrA",
  "key39": "5THzsrsUYQjicWfacSBC1gDFc7HPFzHABAQddXKLNEVuQe8sFtdXnDCte9RM2nimVUaDCxAMhZ6VFojGujEUDWQ8",
  "key40": "18FwiyCZkC26KsWi6MxYq4JA7j3W3gPXz2Q4tnRctCRzTWYzjiPYo2YWJeyWebdowFREPKTH5pY1CFvgxSYWb2t",
  "key41": "2tLmZGNjEUzzoDMFQ4EwGSELWCgiXycsfF7xetVHL7JntJkSEZEB7KbizxkSHKyhS49SWobh399QBDYyfQwwoaLv",
  "key42": "4vC8W4mogfc1VSWZvMofW5muC5p1WGAiSi75cf3UUnEgcbvhNrHtFhGZ29VhkmJP5poYrGSP9GqMwVZPMwCJpqxo",
  "key43": "416RCCYJGGSiVg9k7wZySZC6M713j5K4cAFzbqdmYbEENXTiDExhLb2EvFcdXzeS28YqDtp6rjxXuUYAN6qnhXZ5",
  "key44": "3te7rwc7Cwjq7rS9o4f8VkidRKwgW4bYe8kyEUc1HawGZZj6K6tstcDfUWLJYQWtMRc8ktehW7gvhdVwM3Cdf1Tr",
  "key45": "2SQsqETNtNFRmTKTnVeBUCJaPNQpMhM5aM66U4YTGn9YZC92DZsEVvuTgrhTzoUz1GDCXxvcjhBFe3bLABYBtaLS",
  "key46": "3LwhX6Vz8e5MTcYQG94D747sGJ5vGN8jGb14byoMbP4PGSXY3fgpffDh5JQrJeJHA6q7pC8WpNvMisyS8c6FeSzf",
  "key47": "2Ux32Msdxdm4xe4P8Xeoyj92jy6WHhzjWEF49E8zr8sYG41XWh4iyEHw919A3gU361QpvHMSB9qyM9tnR7KMj7TG",
  "key48": "3kfggZVXa8dCwXGWfnEh8tnxKosede4U6HBhAywNNXu833v9XWgphpp2g9efGn5dsGCHqrrJTQKDJhSKaPopL6fz",
  "key49": "5yaeSiBZXLMAs4vdFQQJnievZfJsu2RuuHfgGc4KzeMUweHTKCF5YjtGrNyUTP38R9eTEuE18LEkV4N5fuLsXBUf"
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
