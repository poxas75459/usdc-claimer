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
    "5KwEmVeed4qwvqdszEdSc9ZKRBm4QiVmbfQ3gRJ4uVTif1UJLhXHMCCyy5aN56G1HjTXLZzDUUE2vdpAHNqSW3QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8B1b4UEpFJQHwqUDhKpXLsZDgmD6nU69cZ9MonX8M863eetYp6Hwke6WtiJ5wAy8SpC8Uk2buSnk2BtgKJsmDV",
  "key1": "3GQ44BEbcGfPLuJFANxrpEPkgw3vbb5AtUbrCZ2xvdrP6JK3pGUVpYVihftKMKNcFXPYiuzKRD9MwaEj1jseVbPF",
  "key2": "rHxVgVAo2suN4Krpb7tputMC1M3vHvZjd4NEzKkVRHLQVnRxh7ThzQdUrBB5vztmSNUuRfZdC6U4aueTL1AYjd3",
  "key3": "3ZFUTz5uTrvr2Kku6dE4erKbKhLQ1dkAJBkcWwsYV5Hes4Tfugf7ePWVaTSH95VPRLbDAUdyGCfKQ3gxeq8ZSZD3",
  "key4": "4dNbXywGPzt4AWPFt3eMjDXBPRrntSEZ1bbPJuEsjHEjq8uHh2HBRwvDNPXuPPEPGWXqJPkHqZR7vmyK8zoEJD9u",
  "key5": "4K9uYgdBuSN4H622jcbGV51kuFW23UmbGTFnwaP1B88ge5fdZ5Q1ffvLyPyUjwWD2WwT7yYiS9aVGNsqRVHUCtvj",
  "key6": "3M7k6f9uXSrhcsV4LCsMaPthNfnBj2AcTN7oY5E1eckX7w7M1aubmjZxe3K6f2HmtpRJEhFxJWX5Qggaa41hxa1W",
  "key7": "3bbmBKsGuHeprxH6Whs7v9XXZ3zh594woNmA2azms8NN9h8o8bt4oich74ijBthqGBT2gf4dbqKA3z9EiugLWxLo",
  "key8": "LfFbYgp4v4kVJTqEtuxPBme4UAAZwbQPGW5m7GpmFubyZKDSdjveBRBodknQtYPvHVuHf7xDbmBLpPNEsYG4nn2",
  "key9": "3e11KgFh7M2jJoKbeeDXA8RCHLuatub68zf6HE2CJhCAk7ZURFzmc3QzSB61Y3BShrAzsdgnfBbLG9SpGK6QmvpP",
  "key10": "5m8eJKUnRRgsz4LJzYMvW36AqH7gT28pEWnR42ibyrD3w9JnoBFAkPEYunmvSjUkeX6dSQ2NvCUuoThHihwTN6Tw",
  "key11": "72bvqhFv5bDKFCytwKi9a1yzECtq7KWASKHfxxhpwSvVpLcscdXjZJ5nAXeN8XYwPzRQTQ4emaenT3nhx5AyLrP",
  "key12": "3tVAgPBv65KPSLfMGCopoG7UScdhdXvX9mziMcRTHPdxg8CYetBuKKEzCXVjHZv6LkciNtABy5sobkv2sNJVEVYj",
  "key13": "2QsJFkrmRc4NAS2RUrQgWxjxBstDsrvNSGB832aq4hAp3TLwQdG2QzkuxZGsyfzqNzhZcVe9HDMnNSKnb5e4hiDK",
  "key14": "4NnehRfGNtNT5douQGBMpkMvjVC2pHLTERHTCQ5ysYPLrwfpfS8hK7H1KqXAvK1E4kUHdqUfX9T2aLMeqe5CJS5E",
  "key15": "5pgrTgirL6vv7mXpsM3oFH4MHHd4vHVCnwU9iPTq6wxurBusZpchmwW9Vd2B4HxZbm7YgHVPAdtESB2mY5PxwgvR",
  "key16": "5n5GgRec9FA69GDxamQVS9CfBXwjKNHcxhK7BfWDDxbgkW3buT7UR5F9B457sTpmjLEAn2ckQqPtVP9vAujZbEqH",
  "key17": "n8v3q2th74gUKrYnnWKkdmqFANgXF665VoUi1ZhHLGKMFy3Tf8KGNs7kxaHszyLpzw5Kh65LTqnVtiCv6XwbVkP",
  "key18": "5c3no45GMU3veSKu6pjUsbxZuWgG9NN8wpMtyEEHSnPTRcaUPmYCm45WNeRTgQrXmXdqvJNK2Yw6Kh8oV9ix5wJ",
  "key19": "4Hw6gndKKkJZqXkGeYnPcpnHUfQwg5yf8n5SH8k6mxTxTfc1JoYAm3qq1EjJXQjgKPE4aU5QDRW83zLEaTzHbQkD",
  "key20": "t5xBK4ib9PKEQRWvNmSGtxQ9UsXdL6inyfkVgKhNgYrtvTPpKJ6SCJs15XN1CQsqwFABBWBqvUbRBQRQbHrSDNt",
  "key21": "8h25KGZiTyjVimmi1bP5wNYYe18mmX5dD1XMo6AS9KK9hY276Xvdp8VdnPPAYPCXg8wnXKoKq4JjC6WDRv7ih2u",
  "key22": "4vcV98MgDAihNacdGmH15vf6Eve5QQcrDcaEwAdZSucsbGEYgDC9YfRdunca56YmTbvvskMFHGSbjK5ZztDkTkX7",
  "key23": "2kHLo2HVdkFPJci1XWMAx5zZJBMz8HMc1ywTKaf9E1KB4MuDa6XDaKzqTUv7MitDDCiUJYSRrGc8VSwGULfcjR43",
  "key24": "2BqHfjFU3hJ2pT4yygBfbwwzTFpdfmJDssocnLyyu5dy9z6oZAskTN6NYdNsB7cFYopDp3aUEU6a29two1Gay5oW",
  "key25": "2c94j3xEBu4fgCS1po9rRt1J18XP2DuCpuu1tmDi7rYBUUNufpn8nR1tGb76akkKaY7R9JUbShcws5oEKcpvyTuX",
  "key26": "4wbMjbNn4KCjLNQ4AsLwtMdhr2gtv65ZDao8UQ2JZeDkj2vxSn2MKaKQ9pivmnooDAJVEMXDarZEukpacTFwambS",
  "key27": "4tR3q6oRwiAQz32MAGp9bPL7UHdPWXMEFcvVhr8FAJFFpfedGCZr8J3QUiXqWY5CQsd3YKA1FccyrUh7frn5HiVZ",
  "key28": "SjKwT7whKK2zBNd9N7uHd3b76MddXbKKzQr6JiavDRVype61AYHvhZwytD9dDGzNdHPzT74HmmwcK7myjKbZxmx",
  "key29": "ceBBUW4DLkNRyziVgXXKe9GpDo4Q6FLjhiogyF5TypDTESUqYrU9x4tfsBX184aVEhMkdP5HnrneXPF8UrT9Gpy",
  "key30": "4K62Pfa8UW6s6K3icnxnrjYjSgq95VvXQUHBqovKX7bBmUkcTgS7gBQ36LCBxpbYnvNvCVCfmEqfL9u8gFA5AnKK",
  "key31": "3jyibTaGLEEp2avrkYNypeEB3SYDxH1fmHL3Q2yM7oBAdocLaRfM1d2S8r1RRpuAPmCK6h7YWCTHX9APqtNtu3AB",
  "key32": "2nnWNirMi2kJkADxbWSMAWRg4QaXnTHRmkzMs15wCv1LTW36Fg4U34krCRgkXCbjVfd2qRJaEPQTjsy7d8veRKZn",
  "key33": "9jvtdk3Nrc3rQHFWUE98GrtHgqsdCbVjgDNeiSy7WFqBA4xf8KvPyYwP6CzpQ2PAPKB76AbbaeqZKcLG8iCiW3Q",
  "key34": "36sBi2BKHN7D9aKZH7TKZJQgmXtW3d8oM4NsnLvrbkE6MMX8L3tQtZqKwzK1s6vzbcpBfeV2mzqtiDmMBQ8kJGEy",
  "key35": "5n7LjnSzXtfQY4sCoTxtNzQLKJE4mnrK9DrVcjteMnS9iWkw5Hex6u63amXVvUz4W7SaaL45NLZUTn25n2XJkjqJ",
  "key36": "5mmZC7txMG1V2cHqn2kp5VFv4mxSy6yRbAz1f4XRm3UXHvpFSKNhQc5ZgDF6KiwTeH8juoUjjzcGsGN9u8YssSKv",
  "key37": "2Qh73zpmtsUoVfi4TepQXwwmwxNEMvPq31w5bMdBHLJzPo2jKGEs378JdFaMNBc89PL6dvevEWYYj7Jr4rZc2SMb",
  "key38": "43sc2wyH8gPMB6BiW4Lgtz8HXQqVwLsZfq8SA2ysbJ1nHEVmRS4xNU1xWxUXLJmopzMLGBERR1DWQgaqNFMf88x2",
  "key39": "u1SVjfGAsbAd6kij4UVh13PKSYeUEfn4LnMMDLF5CkBcZbQZ6SiCmJPKmpfbNMNSwvbn7Z32sPmPvnootYXQVQa",
  "key40": "2Wx5NLh2N2hZAuCrEvw89Uu7UQQD3EKwCyApUpawnNozXTwHZWdPBmnsjqwHTjfvCkt7qTC4UZPNWs8b5UnG5QJD",
  "key41": "3AsZwioLT549BGTDDGSP7C9xP8BMxPqpYZpPZY7nsZAGmeeayAYvRY9iE1omyY2qmz1ikpq7SNkowpyvXARq7vMh",
  "key42": "47c3YkXPGSQ3pw4rCXf57eDGoFJu36sWw8GNZSv2GhrjNYA2npH8PZrQxhwogQfYcWVwuUEsrzxvzvEAPPMTVbri"
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
