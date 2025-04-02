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
    "5W5NV6MA11xX9wVPpCKjoueBQum5WFZue5556A2aWfCoui4NAjipJ3UPu6E6XbP8xetcpyCcjWpskhJKXjJeVUBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4TK59ckdyUXjwZPGPGh9TrcvQiNQjEtC2nuGvXSCoEsmTeMquYSosjoHrusvJrro8mzDR8DVw9B6tTXRTgiNmh",
  "key1": "iu6Tadanhk2ajWVwcp1Dz3Qq2XhL8fVwYiKMZvXYprmj3HV7Je7ChQXxTjfimkcUQ8CEAXgX1vcr5iTZy6aTFLx",
  "key2": "2Sp7DC14n6kc2z3ApZYj2HohDVzUWv2cBA73KK7mH558oG7TGT9gqYKqZs6TAHkDtpt5CfCEjoDDiCXu9eqEjXKT",
  "key3": "47gArWP86MP3BsJYEpXfqPHGB2pacavFUm1X4WQTtjqNSzxY4nR38kV6MNAZB6NqTAVyYQ5FtgUwk9SJuoTuGFNj",
  "key4": "2gwHSWc9cVu28oMiFJVt25naEwpLejYmooUPExsdSdF4AK8KnitskcdZUnNWrNHSq7F6mHyb5TCa6PcCXNQqukc5",
  "key5": "ytRN8A2F8TgXrJ3uKMY2fjGCtv19kzR6N4X3FJpbENN71dbd2x4PwjdEvM7MojpkfX5RJ2HbLGHdphBMFVfo6cF",
  "key6": "3FMSanwy4NhjabnB7ia6N72nGZ1pwrDQthprkDDWfS3QfqU9aXsyGpJHrcf2BfMf7ndN2NkWyqH1hNvbq98y551x",
  "key7": "58bdbz84nsA6gmBmqnwo3kmvGbQXca13NnhvQbeucRt6prKkfnEHJRGhZ3dC9SAxPKLGNotz92Xhoo9wySqSmWH2",
  "key8": "2fccoKmTvbLkfPH5fSCkbQ1xZKo3tEwVABEQXFqbXcjJQbt2n8gA1x8zv29TAC8HgdzGFaaFxVDwNtXnkESNFWiD",
  "key9": "2CjSKu4XXVaXm4WdHodmLMr3mDDweaEfDtMRseNSTmBCQqy5WJy756yF5i4LbYgEaQDxjFSgN4FLNSkk2ePEiFyU",
  "key10": "KsVwtrrifafJ2u5EEQGTy8TbQ1jYBi1npxvPTUPbDwSTkcxPwhZ4xUBXj3n8QFhvSpBszHYB1eHQx1CThQenk92",
  "key11": "4742uGM8wQXJ2nq1Q61zQJhhtfZQzYQVLd5azfVypV48zZyLoN9454uiHRVvC2d4tDgHMUqZWngNtnJ17T8THhHs",
  "key12": "4ea9wtXCpFTQBKdyaNH3VYceeVeeYSR3Z8iT6n52AbzmHyRTZ8CcXjksuNLyAi9PLzS39kQtqHwVe8Kskn7sGwuv",
  "key13": "5cBHk6PjpH28FCt1vEm8vpYSMhmuYFANonwwW2SGgT62jahJWrqyvF9ZVKqS7k3Eo1kfvpXR33477Jk2BToJdWjD",
  "key14": "5PfxEWwh9qxBaZBvoczdCKQSrz2ktbKkL1S6nWWooNxaRkZYa2g8CFCRp59wLU9iWxSka1u1zPTgTFn6NrYpK2uZ",
  "key15": "5hGghonLCtwZeHKhw3UHm7iKs2DZ1x4acE1FLNjVerwmoBdVcRt3CxdDdC2TEizBRMsu9peQzmKuQKDMzzXQ4fuA",
  "key16": "61N8ZkQ2gUiMRFFqzYWnCAsZD11Vs96vxGpPEbywLsVmDjNFexUdFopXQXUy5hK9XTYvCZcsNqswo54Pd6qP8q95",
  "key17": "4z9Td5bQwkGDYj7QCA8cGQPhb5BXyizbcVhHaSq1dhdrZWznx5yuUbz515i2AxzgTVx3FQxGy7PxmkdNms6bPri6",
  "key18": "42hESmV2RYShdcvMBYLm8maz9bbJyweowYur7HHCdZdKFahdy34feegnWAgFyo9thgyLMX1Vx28nK1YEVRTeVQLt",
  "key19": "2G9H4uG9YrBgSGNUd4cYTKakbKw4Ka5Ej8rS7AvB7eFuWLwqsJGqynqGTKYL68fGTR9eWyW6Bc4ScGfWND8cutgh",
  "key20": "3vZJ3GUDJjrzBsoMnhWb948eTHtpeXfJA8StAgVkkWhdgN9PdpjdAwsz28oTyiHEw1aB9ARPBYrYFG1U3yoBCS6B",
  "key21": "eti7UCS9CXFsvWnBEyCt16fLUMXv3u7chEjdsApRDoZbAxDfnBx45L8gEtZWNMrKdBa69SAUjpihq4FTtBPYfNK",
  "key22": "3VfvemLnvVndZbNUmsbw9r3qqdotY1zDbQb1s8cvisV8Zak8KadLRbooSxu4WfKLTNQHd5wBZTL6cBjTXvMDgbzN",
  "key23": "5PzyFKsJDuUL2VhWGixSKAKXqXjSWUsRYt2u7bMmMqQpgpjJihevB9qkSPeys5hSPa9qZwWrPM3zmUBwqtLhSd61",
  "key24": "o13eTBTkcLuBAYfbPNfuLJHHYNw4up8nmLd717cQx2kzTcU3t1fWA15sQuqgAEJepXwwNRTUGkpW3BQCfjncroU",
  "key25": "Ye89gk37bhdxE715RhfujxjSbtPPbEouBZuXdwLEGcY6zZZfuqKLSWMpDEbssY4bcWJH771Tmn69YGmkegNvck3",
  "key26": "2eEwwMXF8Ezk22B6bhEmGJYDCNBpGDiGP4BUzjk1u4vuhmY4J84Uk4Dpa2jXtr7LaFt93UdAVJZmvh8rvXCMdXKn",
  "key27": "2wuoj6R39XSGkBKjt8RiJtKPFFzdX9YPN5KN1Gb5oSFH27fdt471Y7TL6Fvthnm2cAWbLMSVtXMufTwdJnNwnge1",
  "key28": "3EUd6Lck7wN5W8GiXyswKzCpChXpMTqf2WKyAEJmyYY8bxL4aqmdDZeEG326AY29UwjzSfJKfPPiv2hWBP38y8T2",
  "key29": "4WkavJUCwgJ53hAW4xrKrQkpXpXdB1FQ5YsJkX6sDUHwLYz8ziMy8RSnUoPvQohk5VDjbD5gXAbh5F64KhPcEdCS",
  "key30": "fXNeQ4CqsCLGdvAr9Tba74WCTjcfC6rRoZ8Qk6ejMPUUPXLeaUuZEtYukBbVv9ciUqTTQQuEgJjQwoGN9VShVPa",
  "key31": "sbdq1PMb2Ab8eFV2votuVx4irAFvJyavWKiT46fpLwoPMAtiBtWLVjgruKQD59n9Hzj21YzdXnMCndRVYbgYPPS",
  "key32": "Hd7ti18y8Lq7NudCg5g7gjQdziapQw55Q9TeET6gbTXY7QuXHZ5X1P9Zo6HY1DNKYvyRSwe6WvV6njnnHDuT8Zu",
  "key33": "3ZjmgVHheozuTjWCc5xXyFMH6eZjpERiQa4KYFYMboyF8VvkrpyhHkieJccafDLsCUkHvoCbf61VzBbxRiE1FxXu",
  "key34": "opMn1zzTq5FC9kc2x8iXTiH5KL1Q6ZjVHxeL3JxDtSCp4sz2ZM1crWuBYobirZvJzvxKBk8ijEnWUidTnjcG3TE",
  "key35": "2YhrMXMPNgKfVzZcmBmd7PzwTGtBLomSjdx6GPSafQq9Dwc9TtYofbyKunF4LNQ6df2L73drnoZNhCrWmYCHdTn3",
  "key36": "2EVki8aFWBZNjxJKa2Gj8a6WsKqWeiRZkEfbgmDkBEViuw9R139SXUhQX3YoxHFPbHh9fKEiT2wYokyiVH93hjrU",
  "key37": "2Cr3nhQr8ksKwHEGU8Y2CpHhYX6PGXmRh8NhaiQxJup6jWvp7jDkt3tiDTtweg9e1tZ8yDBYbbbDEvuC4FxqoiT6",
  "key38": "5EGg4FS7syzE1WPYYDmVDbzDmzPEyNxok1Ew1xi91f6c1YWyYXqr5AYaDnCB4WTmJUtdUjRtw1jFB7NR732KD9f6",
  "key39": "3Uv1R4w9Poh9VzSQeW4FM8aWXAF9JbnoazHZ6f6qyDFw72Y34aH5xQ6rH7ouQYs5XGWSrVrGqfSFFX6h12peMXeH",
  "key40": "3SqGUqSrUYRUro7a79i9wZ3CVXCpJpXjMaGj8Dvw62jPDN1WLeAvxWbgmxgdJy13mBqAtumQxqHgVGwNBVfihty2",
  "key41": "5Wk5UBCWTb8HYqTrnJX9SdeEMchQrQVFQcoYYgJGx9fuTccmGTrSdyv3nQ4LdTX9Fgw2eDSRM7L9qnjdkaknooX9",
  "key42": "5GzV4TfV7obRcHLK65tAt5xM8VeYRCU9X1fzupRZXfzQszPesNWiDqibTbWBtLqcoEUpR9XXQDuFP93TmThex1qa"
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
