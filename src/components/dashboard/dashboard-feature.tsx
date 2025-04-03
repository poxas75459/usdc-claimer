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
    "3CS51QySQSKPfH8R94c3kSePXQACdZG5WUBMWZdWYHRf5ua3B5VQptx8wRWStbCCmVvzXLta4Y3ixA1BNt5zY982"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43QNsDuPCRgh4vWaAVF6GQNQnVNVqGP22Rj98f9W7YJA1RAGs2BLyERGne4AQNkyUszji8sByVhVXVr89rW1eTYn",
  "key1": "5x9NwRVx1kGj7nnmWSvVhYQVmSzBRxiJVNoaF671jPFvyzGcXMcV8GmWjgTm5FCWRVKLnYvjeU8AYgmPZms42Ts1",
  "key2": "41x5nqbujFkiH7qrMfa4s52wDU5R1dDECFrQJ8xDY4pWxyZVYeHXxx8UAgQsU1Lv4ciK4YHExPPRUe8jDyvddcCB",
  "key3": "29pokXtahwCdnjGrEwt83mSjhRfTpY4AWtrHBuS7uMFjBujYfpYEUTsznSmtG6u7EngoeQjEUpiMWhKV5RJt1TfC",
  "key4": "24iK52kpT3i6RbrT4pr32EKYmrM9xGxUSwK9WnzGbZyZAJGpDxgx4eRuFymRpkGp7F5KUfsPCyJ7R4XVwt1QAJQ8",
  "key5": "Ny2kwBWPCP3E2RmyE4L7hShuKa4rLbqguDvApHhXaZZvLXSNdXHBxiwjxPHQ571uFpHsFmj7STZeFw9JpWweR8N",
  "key6": "4oLEohvd8ME44eiuWs53chgopzDuP9UQ3fhE344aK13kugTcWpyV2W5v7BRe4jpsHtUN4vTWwWo836jw6Kmd9qZA",
  "key7": "gampmzezWfYtVahSK8pUn5XF5pudyhzWRYcHueL1M9AZxXxEuex4qqEcaeUuGQHx71Y9odQ16tDNvPEe8KLsBNV",
  "key8": "3vSR1gAi99ZmG1f3VhVq2vxTVhnVKSuXJkv7ZeAbibnL9WmfjsnyZm6UEmU2CxLmYPXidWDnuuPCDZkXN1hCQADd",
  "key9": "4NY7W7E3cPRYb5LgvpU5RbtnawPMtddYdWWVN2p4GzXC5JWbCHizqRSrbJX5GzirEEMtjTe4uZ2Q4MXGbjr7JEA3",
  "key10": "5NydXFgNYb1by5QumRgUqtfGKr67rgKVwYJ3hJZbgvFoYAw5bMXRmdLgpVi1Nmxg2Jh8Jvo7PsP9aMGrz4ZR4JD3",
  "key11": "zJ9uBfa6ZffMMr4GngTB2jvnrbJJAEuBxaBunxaXXBXPhARDVNUAijKrAkquMqpDtmbC4rC9tjXZJnVRJZzWxYa",
  "key12": "3EVHjvf89m9RnPeW5EK4v9aVEt1UGXTfh5X6Wshf9KaX5Dr6vi1mrif4YGXPMskYVdXfNekKzproGhoeAePuqbzU",
  "key13": "5LA5WjkzsmcbBK7duXh2hxVFnm29suXCLhgLHCaQST1RLCZenCgXKd975LyGbQNiPPvHHTxaRJRYqf3Ga78ybx1G",
  "key14": "4w688MgZ3VagKdpVKKNPHJTUGd1iZKUiqXcmPiYH9Vk71GXTo4t4FXM6EN8RrTfw2JTdKAJNCQrracudpJT5uKmN",
  "key15": "3ZHs6iCdMDF2FenHuUsyMnhSCoMCm4svUqjY1Y9T7paSwhJ2eG4UNfvTbBvNaef32nHY6fcMXJqqUA4mGNGmuQoP",
  "key16": "SKTmG7YGSycERXPoD4xXGSn5zFi5B5FVpPLxsZ2FSoTLoTfeqTWJGdN2hHPdR7wsvj9d9PEq8Ax2R2Cfp5kdMmf",
  "key17": "3qXPAVqhJBP1AWS2cMQm4EUWdLA4ckpVkrv6fPWMm4x7WoBUYToWKo9QJxWKv5BbzCt6FvbRHyzwUjSK53BKXAhU",
  "key18": "4r5suSPpaqTAbtS7LHaPcGp9Ne2ufVxShJaNKzbBpZxrs25xjgRxcDUJ6TkuCRhxbqK6g1J3UTiisYmwS1ZjRy9n",
  "key19": "3GViM2YEn3huRLUDcUqBRKYtDcve4KiLbVeTt3AgYEgagMvS77AEruFTPsNajQgE4FFpanLhpckpqbFxFLNvcvS9",
  "key20": "5bNAPchgTFs64t2Lj23US9poZYZ3TBfLKTqCn9ALFQynS6kjNyWGetCJ36bQK2HruWkS6HXUxbWL9sCwEdT3GHsU",
  "key21": "24RyjjWoXzadMMM1W9mUgYnD3C9Dqv28L7SeJHsa1Cxsm7aeRVTnvPDRdUZNBznZ7vmpv1zwXTqnPiCetgsPhXcs",
  "key22": "2Q8wN7QG2qLbv6rGoC1cVUzKLof9QM6iPXidtKWFxP1nmjsXHJXnR8ctvYR4eh3tZQqaafNoPrr6zLe3UyeHGpYC",
  "key23": "2nZXUfkZ9pWfELvJSVGoEUp8giBoBEaYBah9F9nnMtu2rfftWNXcuQJc4CiU4mmX99T57353eRFWVVgkNwKNMupe",
  "key24": "67jGDCnLksRrn1Ved3ot192CSYxWLfsDtpzJQFRudoDukqaGpThqDH3qexLkLbpFCpkfL3U3mSZG9HvUJT5PJ1KL",
  "key25": "2Cj76Jq9aiGg6HohLzkda1Z5y3jj4SEMs7D1HboxXKoYdLeTscHfSv59oY3HKdkM6WAmLj9jKqWaVWi9PJVRAego",
  "key26": "4JkJhfJkjPf3sRVLz8fsiT3u4o4SeiFAgJpqPnzYgPk4RSx2rc3VBefUmghNnXizgmLiPKm63nnrLfZK95EH5sYm",
  "key27": "rk3AE7yGEwnPnn9GHTrgngF9cMLLJYkQ8V1YLzMqEf8TsFgD9pKh8KSFttTTKZnnSLzMdmAvMJddJk7D3miTpTF",
  "key28": "wfNZuJBgwV13V5Qdg826R18JVoB1r7e9thfvAAmDaxeXaPU3bKgVaTSa32rjnE9pYEQ9vnH6Vr3gK6vEp6KyWLk",
  "key29": "64eyo2BTQ13DC6ABKW77zqPrtKSXidz6YbzCz3FKsMZko3v8Cq8Wzvm5dqkceEbiuGuvLWv9ZAMkLqu3vg4abWPk",
  "key30": "5jy9GKK3sMQihmKf7kNBojvJRTBrankZTxHwNexZpnX6oTinqyZ72rUVtsxZLTRBqF3yCetTkBqPBH3E4vvXx8u9",
  "key31": "2U4sH3QPr4KwgABsACswSubtK8xf185T3zo76bsQDwpycmwJiCMWPcr4u944Lv9hwY4i2DpSQovi8jL6u7PHEFbe",
  "key32": "4GNM73fA6RosfjrRd6y9fcSYS36DacREVKCeERTjvaDkdT5CM51HTmwotq34caHUavMJdUvtTykjchUf7M2o8CE1",
  "key33": "5ST2soxesNBjdksBDQC1PG8X538Drn9m4nzPefRTQUdp5v5CqZnnVz7iA2RUyaFBmoyNUZF2ymH9NszZD4nCZovn",
  "key34": "4W8h2v649nFkGcCBRfQjtdv1HNj9yRqmtdcagaBz4t6qwGmL6zQEM6H87Go342orcgt5PjKFJQhykDg7feZzfP7Z",
  "key35": "4kpoem2LNqpZt8CGi7xSyoiVYW6BS4epFFwF2dxQNRQ3rs7KmFGMoH84EEsWdFTa51jhWR1rRqNvqTzYTGy89YjB",
  "key36": "hP7NmJMtyqRTGPm6bkXZEqMVnYxJ9pYBT7Y6pFzRR76hZeFrcu45N73Y3dF1tVZTbYRrJ8GcAyRy7G1EsALSyig",
  "key37": "4Nx75RXG49zmK82nqGbCVzuFikFqv2VHu7VtbwUtpY8RBW2oYyeCVC4RvTwsJti9vqcgPb5Zq4UxfSWpvs1reDA6",
  "key38": "6fW5bGTxvdsTgp78HB7w4c87xZXdmTxm3FZNNXnEmoLPoPrEMpdyoKHPczTibnw2yiqS3NaTEAKBkZCNDeQtegV",
  "key39": "5z1KnBXgTzoFzhma5wLrZwAuUeNnMJxk6BSrK2R5xzu6DEV6Ugfv75x9nkCJmCULv7uQFQMCZswMBLdDN2J96FZa",
  "key40": "4cMGV9dyFLsLeE2EfSMeeb4KRrLL5frkLCeq2YuKLpCBpjuyHMeCFRcpB8Bcv9UAsnmnXH5RRodqmwhQ2kU7vu2m",
  "key41": "56DFm19M5aN2sT52uMCSt6rtqbZTXhx47yVeoNkov5vTZqWtikt8jGBX8pjYhQJWJpdBfLLHkUHkCPuwrWfSsp3g",
  "key42": "4oLKTm5jt1qUxrLHKBULhSnEkseZDqn9wPrg9qLiPcW9gLtQzenn5psn7AfeqT34L7WoA2rmud415on69BcqoFHE",
  "key43": "2s5k5otbJT3yPKYHMj6rZLAtEJumwzUUKZQfKDvGvfZYxXYHJD3r2w5ijnF5kzEbTH5qASKGW7uKwJh2Hz2kVoU5",
  "key44": "4CpUFt97VPNnCWNbc1ig642snf9cHKS2tRdn8M3QjfWWJQQ5o1BmdMqqYRPinQvwGPMEHmVcgxBbe2nJPWHjraZV",
  "key45": "5siRtb39h8Tg7b2GFjpJJJTck7n2DE8SjARGM4zZm4J1PRvn9x5J7xqxkG3Ua3xvkywfEe1XRGwJ6VL7BtDgWEHa",
  "key46": "4EwggS7msuXWzkB51YhFH7e4qeK6J9Pi833hV1N1ZJpzDTkt2uKikxdS9d4cKHESnyw1RqfQqKHrPUCRC1d7rzhW",
  "key47": "5gtKscTY7kQQ67KHtcuwPS77x3Br5RNmdQyqT6WGfMRaxGbPhjF4EY9DRRGGu5sNCyNVWo4tR1iXZR83PLq4cRZJ"
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
