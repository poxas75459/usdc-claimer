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
    "2nDEuxAFsw57wGGjJVsV8xJHxrBmiXvQwBN8XBVenpQFssVqcAvnz416fmDp7txZbhBjNKnr2Y6hnhSJhuPfzd2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3c6tkWW3U5hfeafEQPQEyQxd4Ab4akRAfof5tWg7gjuEsHLEzAkFGZDadqaUFkwEGWxApEATJNfGqBEtgpnE1b",
  "key1": "2ua61bWs6gCiYpJoNAFH9FTVzogjejgMRC9mCMcFndRwFFe7eD2i2KESf7vg44MH72gNm5qB8igqT3GZMGYei61B",
  "key2": "4GEh4B4toZqrAMUgdutLaqV3tdUqjxfrmCmohMwisdfQGMV93HvP89Eze2CcGy9K1tG8Nj4iLWnqpcbHaZ7X3nfP",
  "key3": "okW3MfGKe6xR181w5n3nxWEqMG7zf8xY2kcorBbUedNYSZEusXs6UC4wKyUZYTVH1zSBS3gbi1JYnvL5U13pmvi",
  "key4": "4FFjxBpYNMqj4CGFbzzp7owmpySjW6uHmqqngmYNZwmezLhEjvgGjY5wGiyPVzHAh7qggwMZLVX8fncmM5tnnMPL",
  "key5": "2Q7HU5tpeZdctM1x9aVefuPYCxtFh4wZrLmH1z5SoeoRWPTuodSr5DN3VmSvBQ8CEkMjdXunj8hvbvVkd42kQbaM",
  "key6": "5XT8Xy54xTdGN5K3gp4AjocRonibTqHN7obgs9K9jaoA7gvJteQJ2vLHjwZCTUgm6Z47RwpcQsF5193MJzX5JLhF",
  "key7": "54xHmtWLf2GGjDpo4gDfexiNPNfkdr6ia136UmS7Ms7UFYnuUBF3XxgmYZ57SPdTjXQCVJyoCcTtgkuzz4YWP14o",
  "key8": "5QuL6XwY3CkNTwpfduD6NYN3UPt6UnPkXCbftjb9pJxEhsBRm3GCKUWPR25MmFMDAjHw1HCoV8WKx3bcUMNXuY6R",
  "key9": "2SC3Wvjp65P4RHrSb645xL5XY3m28uYXZeerPZ1x19hQezuh3KhDEbrmQHLapSZ5St8U33wX7idVT2AhPuAj7f71",
  "key10": "5KAFjLakb8StPNgWbSLWKBnQaoGivUAeJRHpMxYHKimWxr1W5pvMmQsaEta6myYDi1aucweeUPDxxjwpcKLHsdSk",
  "key11": "3PJSwQe77GLkZJncVsKYu8yi2zn8Ed5e1YAYm6HuTuaa2yfJc2RRrCjYn16Zqd8bQDgvvEP4w9mcDgGRPdAKfMCS",
  "key12": "5BQcv7NpBRkryQKdDBLVMRoHUJGHWW9yArDkdhLB6XKwpfzSZDy3XgjXp3kR3nVMcriWcEHq2EtzoRfzAXo9ikhs",
  "key13": "4hyPc5N86JfgJBeknbUPJ9nZK5NqNcKeqpzXh1VJNso3Smfh8D9cVxYpBgwM9NnY56mtBh9hNT3NBvgu8xYopoWa",
  "key14": "VaTGzKrsQjjTKerVXHRCVDN1rMbRftFgo1B9cHcDqwnLFG6kiWjNAAc9tkTjTtWeUFFhVcc8c7V8UsLzSY1mk3U",
  "key15": "4PW7oLwUxRkQrwrvPPKn87K7CLG6BCBsEY2Zy7oVZ9PmTRHa3aT6LgBhY98dQrVGwxzc5bfQ6oLsV6pykinS3wSZ",
  "key16": "43tBLnfAWgrgED9LLv646ffkDCzVcWNNroraXC6x1TVmXUY3jk4q1GtEkdBWkfVz6besttmVDDCTe3zpvRnxTSyx",
  "key17": "4j4B1vzJhNRjvALJyvGqEiu2621DCEYNXrERywRG8aPofC9vvd2gqjuoeK1VoiySv1uK7TKZXH2zJyaxhbZSe4KS",
  "key18": "3WeTd6tUWBBrhNTtS5bsMAbRmWtnCvYr3PhJF7yhx9VQDsytPi6X51SpjN9APKQwaJsYL9kHpFU8pjm2JmoSKtfX",
  "key19": "2oaLdTHyFvg9rqHZGkGR431Tf6h34mKu2EFittfaiqRpG5ovACByGcJgpcDoPojnykzNjtrJ4MWi9WAkLb16QU36",
  "key20": "61rLRHuUmPjmhSUrswKaBqckZ6RvUYJzDEBnDUB2cvMBKudFsLoCpBz996wX14LhEVAJEr7KdKGE3t2TtPxbGxnY",
  "key21": "2s37QSjSmQ468SEv8WiYsp8RwPgH9QmLXTTHKXsxVfmGQKqh7JcLFk3BbQ5i1y4WMwoFAjhUDeSYWinSsmjvsk8T",
  "key22": "3DyBUf4BPdshPCmYrvE2tg4VrQh9ngN6WeohtAm62QSNTakwFN9zBMAa1CzMhyaXi4UendMHEwWEBsSaY4MDFKrA",
  "key23": "3KPg3QssmJLk8NxvMetaaSYejmoHzkYq5NV5hM5XavGKeYX8s63e6jw2L1o5q71aQReEXXQAMkKpPqB1oUnTtmFK",
  "key24": "dXZBZAmFFa7Z8pF7TzDzPw9VQWGaYtyaDfieCUabUwESNGpXxrx24zvBuFb6LBSZhdxeKmaMxUNTYbJCzHWaQD8",
  "key25": "3ryCMoaPbcRDhX6zaAjsSLfj2Cw3sVAhQk8SEjw4rRJhH35G2e4P5EELwjRxo81UorvGKrbJjzJGv9a9WhkdYWsw",
  "key26": "62fNs7sbAKMy7pLqWdrYG2uJJcH5AZYgq3QQRuaubG94gErZDQgjri9auAd76gpZ8xJnxsSHLGziSF9SxfLGSUNy",
  "key27": "5NVe8qVux7HZjibaVkLf2fvXwsTVBwttTBHxcHUYrjHnSgUuAYw4oEYXUuXQ352e68Zt5VJcPb4WCtx6jFTCj8DN",
  "key28": "4KkvGnvCBFa74QxCkHaRWpgMUvuKRgL4gzwQsC1nVDYqHxFi7TqREvmPQvxrosEiDSF7rieh1iX9FkhK9KBiLsnf",
  "key29": "343Ck7KKHaYt4sumXw1ybp4QTaBqQw2Uy5WSkaNqub35cczs1HHAD9cdY57unR5kgxPo4aR4NX1B9BJT5a2MJP6P",
  "key30": "26P5mRVgvR3kUGzahzNzyfMfWtuLNrV5f7ThTwRj74hY2qQXcfHwus8nRnti7HpgtTesB9eGcrzvXTJmcG9w4nmc",
  "key31": "3eJ7f2kkrsXeQRoaYMAMmVhMfcuULkhoPnhRHCKVTX15PD4Cbpw1EiRhxnR1tX6RTUG6XTUEyKAw21PjuGQhE8ug",
  "key32": "dxBW7Q7HSuVAZV1ZC4k8xcaADKgChy3y5cnjS9gGjCjW4PWuuReB5nZodkPZ1jQWNR6QgMY4q9aapydXog8J1M2",
  "key33": "5prGZFEfr4b8yEXXZLK1T2x3yAXnTGn21DxQZRcAADWJHBjyUArTiD9Npj53T4fAxYCgaGjh8tLfUYEBeb2Ei5jD",
  "key34": "LTygbvn3ihZRcPruxbZmwTMWJJvu1VL9Wkk3fCpedn3ptH7QEGfCdDn6oh9k235kdTvFtySRSfoaVUREKk9Ye4d",
  "key35": "3tLtrzNoiXfn8PEfLZC9Tg3G2HD9SFkSKxT5FZPsn1SMkgh1Aq5Rn8J5VCYgJdTxqNDLixJvhWLEQM5wiWZ7hmwy",
  "key36": "2xCL294L18Ra88Svaby3QUNqT9XmJYRAfuGbVrF3ChkhdQStzYWcWtYYw7HFZg8BBbpRNhiqKd6PGt1TWxsk43ej",
  "key37": "2WKL3Q85r38yorUGS3uyMP7z6DHCHkWy1fV9E5k353esQCi5eg1KNEisNhcCWzHKgvWv2xcJSddkpGbbMUMgQVqH",
  "key38": "5MZYBt2XVNbd3TQoAeKnWajGeMrjXqcymwAZi8wG2wAUc2WZtMpWzNEk9FDZ3Ydyz75YzYnxYsRspkkbC9dKSEvt",
  "key39": "zcZorawuRAyoee4Nz11FhFtVNUzMjNPzjeATe6DW5B7g2tsN4zYGPPajrvwWSMKjQtubBCV3VUMcZdQjXHBfBgM",
  "key40": "5ZZC4Ghc9PDUu21tcFCUD4DM4P1V7fB6WBEH5NVWoLU6zaX7zBnrBeTgtnmRxiBjmbrJnwyzphQgPGc2dLPx8bks",
  "key41": "4UxVXgCBuhGv1gLdHmQ9CdUWMyofEFpzHZkwskeGfq66it9YiqqEYugFKe1Y4raHLCz2DHt5GEKAfDEvs94A9CHy",
  "key42": "5ATGx8nj1JMewV6RvHnucH8pKgLhki7WXJGtbDkXdR6i1z3QrPXxSYYnt9NvSbe3Vu3iY5YdNR7FP2zhJQxowq3M",
  "key43": "22hWfvseMNmmtnNANSrmKAyJmZsiL2nho7VWc5TobwQSJ66h9z8oXqyJuYmzcLk4p2FHc9HGiHigpG2YZAKJoXrk",
  "key44": "3ZSr8ts3qnFQQBpXcWPcjMvXkeYGZXJfbPxPKxuQgeYRGMdm2VtBnW9MmSETs9RV62bLBdSne5F66WYpCFjYNo53",
  "key45": "2UKs6FzhFb8eegcTsTdnKa8DuJ2MQXA4dFKKdWtZLrRzFozcSwdp1UqxPhXajqgnaXddhLGR5pPuCaidTe18ggJ3",
  "key46": "2Twua13BL71w1SmvJ75Ah9ikQynWC4TtFMHrtmPF1coPDHSm3Xuarv8zdTwNBv6kjrta3vj6hix2FjfYPNfsAUu2"
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
