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
    "Xtcqgx9Y9w3HhwSnNq8DXMW6pkmvyDiV3BurnENiGKvvfWhuPjmav7NVnrE5pcgucJRxQ4SrvcFJvs1oi4G9WqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksvYoQfDgS2U16e7DV5h3pSQGWCAREx2tupzJGjhnPe3SzCDFBcstCY8Xcf97Cr5MsMMXgmkQDKPtyGiABdDstf",
  "key1": "z3Lgn2LRxFrS1rcanCaWyru9hxV9CZkgFuuWForhrz4CWCsuatgBijwiz2Kgy5RQMjEgF3di9aqKsYQMipFUao2",
  "key2": "3i79XbMY1bWTMcq4o4fAtyig29t1MEKQWBuUbvRPViWf9MKpAuBCRbRrficmDvDLqM34YNwM3TBNtTdZKC88HcbR",
  "key3": "2ESaF67Ug9oaTMeAswLB3fqiuDvhZ9m8c66yQXu7kXjS8Smr3pTcNRnGcBwCzHUBuM59xqzR73ambKpYgy3grXV8",
  "key4": "URti1p4fmwYUajNfLv7ijBKCj7e7g5uFDx3NuHrWBVVus451mLh2SKSVBPi6bXEhgv1A2VRcVn1KAGmHJaucbq7",
  "key5": "4n7pQGCoVvzSmJ1TRbSRH83LKuzVhkhHL3Bhy4nQoJj9rfzoyENXs6cdkCK3uU6towCdiuLcv7hPGfrcdoANT69y",
  "key6": "45u98Hu54AYhgTPvRsf2MmBLNG8RySwC1SQHUFRaEN7Lzo3f8EZW5kDotHUivXWZPDRixGYZ1x2qRUExzoL1mtY5",
  "key7": "4C4dXrbcdekk4Bb6Fo4qdQVAXVBezYKfiMwBLkH9uC17ybVNeui9BYiQaSYDv8ekEKn5C7KrYEZmRSfQE83oKXAV",
  "key8": "4mCZThXNMcyi9zW9AiFk7JakjgqR92Wnz6CzsMpVtprqHSYHZuCaxtDRQyzSs5oUMu3AoSrV2GvTUi3MTJoTJuEi",
  "key9": "3JQgzvdLofHcMNeqxnmN8SoYMnbgdYjPxuooDSKA5M1mQ3peanKZ2777VDcV3fafPgfqzyeznam87Tdg4CR9iXGk",
  "key10": "3xCox51GLXABZB9biDQ7yBHZkxKzyqgQLVkvy5FHTPXnJ4soKY2MqFUZSuAF95rGsWERP1tL7768om8p6M8ScsHD",
  "key11": "29Rp45BRFrdRhsaU7cTgPsz6UVmCLNJJN7rSQuVC6wnzjK8KASYDD3QzkmiopFXS9odWHyrtpvSxURqQGSGvxJye",
  "key12": "3mWJeeAEujj5iSR4yjZAWrZSjbXr3aJuq1XPjLmZLyPvkV1tkHWUF8X7La96kYm56B2di8BPPKdZPVTXKkudfUw9",
  "key13": "5acTEAwThomM3caL9cUjnkkaEGrYgfKGXp8Y9uUhGbJvMrkoihRqWip16PbCTSEmKwyHAcokQCfUFzinADbz9uRz",
  "key14": "2YLXjj1AyYnsiEPo9GHTEfS2Yd7BCWQM6GL5cV5ZAJNesg1XPpgK2HFvrB9MunKsSvAcS2xwz4AEYemWZv8ossYe",
  "key15": "2qCvYaj9CdxGGne8BX3839AVjtrqZUwpqiKFsyqnkVaMAAmWpFQaPvQceZwzpaWFZA9aN97ivi97sJoFxSS3EmbX",
  "key16": "2GD2y7ugUyLJkADkk8tkSg3dEzw9LhnZWfZ8nH1cfTYWAjk51F9yHMv5zBrpc4Ua1NdiiCgBXkRUmf1CmrYJ8PzM",
  "key17": "3tZgXQPQ3tBcdRHrvCXK4boMjVg99WNv5BLixw954CJTRQMNc5eEYktcT2TTzVPDoazX9b1rcJmkwxoHBDuriYCP",
  "key18": "2vxypmb4VrUaHmsRQqdzpQwinWYfaZ6rpuxLbTuVt5QxeyrMT9DajfjHqq9Sk4QErKvNc1N2KnyBkvHerfCgbQY6",
  "key19": "TyCnV3i4skXFtp5Fz95uStr4z5rsBcFFK17r7gVRuro4ccuU11ch1YFDHMaBMdMbZTQxEt4NKaW84x9ircZL5nr",
  "key20": "5Yn5WZTyngz3q8HvDSSq6QP2bAU7WDXmKpNMFTL9KvDbDrD5vQ8gUvSopG1ArRmBVe2cSJfiCJDHNTo1vimMhfKj",
  "key21": "mUYUkSdNC9mvgBg146Q2eCNoEdnWHjjWmeobFzCbkvxvf6rwB2NiZgLEC3u5n6iwTfWJPCgtxn5KYbQ2JDCyEPB",
  "key22": "4hi76paDN52qNY5HtBh6fAXJDDpB52QudJHXjaWFX9x17sKDVcY72Rw3ce7633LpYaRqxWKW3FgkuPtMuka1TVkQ",
  "key23": "kFpow4hTDVAvSXe5sEutJrKuQWRM3qPNWbGVeBUzhrXjtXSY9zM3uq6fEDccSPwySPodFj3FPKsFzEdxg1btbUz",
  "key24": "2BCHKfSDkv5wKrJ6VkwQK1WbrsCSScs4yAgw77LEUKWkJNSgGw8D4rm2Lmre6eULqRAmj8NEsyUJfxa8rPUXkxhR",
  "key25": "5zytnWkfoBjnoYaeZKUkH4vX5ATBTdB5shEMHrERUTwMLytYDmDsPKFFeLT6MA7Hfdw3C69ngATjqjYys8myXn71",
  "key26": "2wXGXQhzdDE6YudaU27vXnL9Ka2V3W1iNqVNYYkJjbSY83KD1qN9VYHEkuq8Sj682gzezn5PZ65HvTbbe63EU9EQ",
  "key27": "3Rs9i1n177eDNuQDVjux7m5rWt6n97vsTsch7n956VymTMm3U3ppwJmu4rVvq4Wiqft3psjxxmdJVmRiLshZDS9S",
  "key28": "DpVC8cB9tgxkEvyFxZL3hTK4HsL5DaSV4pqjsBNjeq3fcF8MEHCc6VTTWBQ1KHWaUMW6PnrtmS7fD7UHnvUuJj6",
  "key29": "LJQhJFqfAFSR2rZQGF65xXdiiUmpWUdxJy1srwd2B4JayWL92eeZfzPuSnVfVfVQBkzpbTh13V7FnB66jr8y6hA",
  "key30": "edNxNrgdtDUBd2ixF5GGfaDDGaNHTtZqHGY7sqk4rtG737F9yWPHZ4E6KYjesonT7YPWc2uKi98oWZZodkaVsLG",
  "key31": "2S9AnbukmZK5FzwFhhF7Kk9uYwELCkLPvoYctSUKbgdGaSJZvj4pdvVrwrNMDmdAQ7apEfHarsQkZAacV66P9yst",
  "key32": "52868q39yf2R6Tu1qf2eMrDs12y13x6JednpTTFDNg7Lw5u1PTgdJRvG1TTsVsB9VaDCxix6XXsugPtAffFh7BUY",
  "key33": "2v5wiqhhUrraKLK1A8cMrnwSrQBGUtqMFWEFtkCSnteXtbAbAzMVMtUTtELLsSyTTo4o4HzqCT3UP4QEDr8XwEd5",
  "key34": "47g7mA89yt9B2JQc92PUAekXazFZS6jdAWwHyJVMxzeJnWHHHHs5CiGYSPogqSP6mq1797D6gHEPjMcSFeeXbhoZ",
  "key35": "6gTTAMPbssUaTHnS3cFrhPJqfK7vamL1mR1QnGawkVTsP6exrxc7KNs3dXZTLVrruBzdegxGpo4TJ1BAHHiNGeo",
  "key36": "5VhkPs8ojxSUJkSdeS4nKxMmQq8f5Wc6ja76kBmTm33B5WhePte3wjxtb7bTC1vV4e3TMKgowefm38E4au3xC95c",
  "key37": "5Ed7VbryFmnrVaDBFBD8WAhxKFXaqKZuVnTpCA9UyEsfHmjMVg2jtxmvMmFhvic9tcmdMMjzK8MkznvTtqiofxU3",
  "key38": "3XxQX14hmHFASwXJ95nAPgCZskrda3DvS3iCLxXFF3foodXZg6bNHJCHUCQjwaWU4neyX2TWNQAuKkoQ14YFBt4D",
  "key39": "5UgF1zC1pPBqRAZSr8tMg6tijuFJENphwGARS3iMbsHHXUMGgyDYw5rSmukoxNH11FLeqNb7iiNgSrSGhyeFvU7U",
  "key40": "42RRiS2jaksCoRV6zeevBtRJD4u25fK94VSARVJf1ALXLH3C5JXzLXTK3SwwPnoy9ZJVD9nj4s9BMDfiWSoDnzw2",
  "key41": "3DcQTRfC9k3kAriaehx9Pe5bpkMm8qrYtjiwkWv8LAgVWDW7sfUYbQ9qvrrz9TML1hVBNPgxyssxp75XJBY3aYBR",
  "key42": "28cyqe6jNfQvfd3pqng6kxG9ScDEBuMoK1wcTpnsWYADS9rEdNmU76BzorifhUHrV1LS8JdcmsabWzmHF19tEkMM",
  "key43": "4DVNCrRFnpqSKC3D3kjzNQNmTyR3QLJh1kdithU61GKc4bpS9kvbARGZRb26iis734YbNRtpiQUi9J1KGXKK2afU",
  "key44": "dtS9xPmpYZBAeAwxFjBZX7EKGiHK1RzeAxgMGsptLpwwKm9PCFvio5hBdtxbMqa9gn3afkZ6xfZnYZeu5J6Dkhi",
  "key45": "U8egxokSNjSKb8fGuCuCZaeK4Ghgov2E9TLexY8iFMmaKZJy9QgMzbwdy1KqyWTBPtEK9iynQ47XSfqQvvseSUA"
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
