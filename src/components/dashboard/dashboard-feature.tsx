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
    "4j7wBAz2QgJaqCRUjFcQFimgBDa8dKsyMebRHWNQx1cFQ71vRsSEzJN58P9rbvkHUL9Ao3btF7xvqs7qwSkcJPwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBM9UjUyN8UeHvnu7YQyeEvDHigGN1mxPvJUffKLU8Adzs3TmJBgbCDy17yahK4JDypkxj4Ec1ZYytbpPmYuGji",
  "key1": "5rD6EKhFz5oHdwBDg4K2fyoXqnAK4bp2Ea25hnW8XcGZmPp2RuEW5q1YamNgfRraQS3vB7rcXfmSnVH8pzPRjN3S",
  "key2": "5o1hePYzjvPQwP5bQXtc46pxBa3zbDhwrywyhg6oxVCSY7zxgxxtQSoaXeWv898ArtnoEVQUrEB6qbJJ8yYq2hc1",
  "key3": "4KEBerWJ2MamLjmKABPtGA9yF6j1sTVMZ1sfviyy2f3YuTVziTznbnHkWVUK2QJ7dUp86thtHFX1bcrP911a27Zf",
  "key4": "3b9CZ4YTeQQ3Ccn6b71UB1zxqk1zYYCoF9psvL34GxGEPQmbXF2WQLWNyRaE74D2HXC9uTag822gucunVyHiJFoe",
  "key5": "LQeXmvr6vELDpvoizNx485EzVjLh96fACoHB9qnWjMuwty4Eoqg2sfKC2tFxGEeSmFd9sQx2wZf3i4hv7S3R72p",
  "key6": "5YrZERFpwmZ25CQitAeMzSdkKCidADp6hqr3uq9Crdd6cDmdo2zn6gdvctbjXACrKqjEqYQ4YPsKqAUdc3SEZBii",
  "key7": "2RC2X6WA22kUzd4pxcz5duhEAhGbyb5Ju8WAmjjiiWCkGUgQsQdHQjTsrktKcqQuvntkLoE7LAKVk1AVPZ8xKW8h",
  "key8": "5fHCoKD6WMdrX5vEmNdjFyWibSkWLxXpxiLHcyK3psk8Zp97NbVXy7GninVyGP6TcMhggQnCTDFUaJELVRnb5br1",
  "key9": "4Q22DFFjabJ6wwH4oCT8ijgpSzcxAGu3srT1egkLrZG68UEw4zqTDtjUhfLtPVxn7AQPLbDeenmHvgXGhEgYf4A",
  "key10": "3dBS2WyzBZEih9Ma2MPME9KG2HbJHTWiKHa3f5vxoGCSMui4zVWnCjCWUXHcFHZRKLTLRCiLFe8RHxx7TAiNJqSg",
  "key11": "2h3LQ219diiceYSqnh6uz5hwAhxPghjRKN9VKXmi4bRuCPYAATExwmHLyDzbQMjEZWc2oDH57USgUjvitXhTJWYd",
  "key12": "zLR5qugvVLwRdjMvQCATNd5L4KPjrHeq8thPpdy4cYYzJsyVBMpMPUN7HrWi1Zgvse2EVzLxQ6rMoqUGKTiXTWo",
  "key13": "4UDd1LvMWVrqKtQbBovFJTgYN5anxn8u3kLoJn2JwwhuwxPsfa3ofJnZdPjHEC363xfwQsrnv6bypYVLSmWuH1o7",
  "key14": "3r4xKGNYWFU28fGD9zixvC3BBG6uFjgAysYLvk6KeYdJJAyzQHz7bchyW6rWYn7osfoskFXE8B2WWuB44xb4zorX",
  "key15": "5y4NN9egXPTczHEDE6F6qYQwirEpC7CnbMzkfUrTCh7PbLV7f6FmHBqBPdAtAfwgajwzwJL12h9JawYFS22Vpjoa",
  "key16": "3FsGvCqAWiRdp4hwa7A4m2ueRpAyapB1FZK6r32HTYqscne1YcZAsNxBfUMQCs3Zi8RpKBGXZTizRABrFZGwYuEC",
  "key17": "2yoZRyxMwkazQGriYQk3ponbbSzWS1rTiGjzgrhsyD2L2WVGusRjBJmyukyyBz8ZW52YaqiJFE2h8d1DLxaEXmq5",
  "key18": "5FbNj47xRQXZDL2HPf9JTJqmaSep43X9mAjVeSWQgPpBQQFLw49dAoLr8Gcgocz65LxUFzHZj9rc2hRPiY19H8Q5",
  "key19": "4bsgSXR58mcv7xqAX6GHdCxw6rwjEzFZg85XeCWCWD5ocgzqNkYNkbZxWgyo8EFZ62fXZSd4hRTKYZSUMwa7hyYf",
  "key20": "xFAfV3ktLbAmgMgFRqAxUPDvk8yxw995eDa1tnm85GjELHABZb2VQcyVexp7YZpf18mXfVRGFVNBMbpvhQHNv4d",
  "key21": "5ye9ovzZWvppuyFwgRXsEPRFYmrFxZNggibmMGE85M74qhwQB7rorJqdr5BknquM2PedmFDVTNbLRsg6b9o7KdZy",
  "key22": "5wXCveumBu2NJCUSy8myYjBmuUKa7WXuZv5MUfFzuwdHZnamP4iF18AMejHoPKRwQ6fgDudK4xm8JTZYQBTXiTwn",
  "key23": "2VGVb26o5tKYKdDVzW5FnpE8WEN4tqf815zQTov5cTzARmfL9dUbR7XvpuCzVRVyymfenGLr9B9UGMgtwR9ehKhs",
  "key24": "4AYurGN8MnZDzELwmwanhCWzpUijmsH1JcpaP1J2vkcbzAtSmRQ43uGLQMVoDEjuXR8x8MirpCJNxqtH8DePjZez",
  "key25": "5w6TCGkHEmpMoizjRQu3tGXhJJE6Kj5PsHhgf79YU4jfhfNoLVV3xNWApLvFCoCLNDHuXZ6WHeHSzqkpgjXPEE2c",
  "key26": "63bsz179hkqmre6ZoDhJy6ja7z4LW2UQmD2BUb7XA8nTswzasgfEbNgnPH7iS3FTu5S1ykQP1De6GiGSWsJVCTag",
  "key27": "3f1PBXT2V7yvB6L6A6vjE9ae9d7WfWtS46QCHtyzxdHdKxrongJy7mYhrGtYHRMyiMqWUD1XZMYqsz8LtP9ASoMW",
  "key28": "3c6AMa7tpx2JVCZ2XMN3wYpE1tTwycvnux47ZbVi6DNALB1ezqogT9eMSiKk8ocqT4cqCind9hA5XF6dc75ohpUn",
  "key29": "2NKuYqvszT6RkUwKoA16j8Z5M9uQnDDwV57cLanbzNwknxVqHUcQfyye3BPiuvmsTnvGy2vp9J8Ltmp1A569R5Ye",
  "key30": "5Amy5mgoaDvXttdaXQaiSQ69seapVGkZb2mNxWxrmMVvpFVg3y6rE3xdwDfBaKJWrrze68MsuRoXy3Qc6fjYsuai",
  "key31": "3dn6YZ8hgEHizkWkTkP1xHMcvSaUMX8poc4TrR7Rh29sL1S54VQZBQiQKD3K39n64wsCdREGoRvpBRf2Nir63roL",
  "key32": "2xtV1kMU6vsBRV4kHadDitJwi3Bn3n622zgYc2eiDTTDepttsbYXLgSMeagzrYXV6wg6vY64mBwgesZ6qXDAy8xE",
  "key33": "4sy45sqVpwL5hSn633AXuTqpazMfnFZ4yqMs7fxrSHKCQivYtYBkjZggb6deR6xFwyD5QToCnZvPx7JVcnFThwse",
  "key34": "3v3NETXv6WbEjjyvuKZ5bG6k3aQYCjALMmmfpvVhtNqGEWHUzQgzJTXaCohCmSufjitq77YCbP48Xs68GSkKRQvN"
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
