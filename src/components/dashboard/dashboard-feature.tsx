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
    "5jSSPGe9dmoWuiC25QjtXHdQVFWsRh3v92QnPii9ZakQ8yz6qHfFKTW2Bsw9V4xQMX7mE1CuExgm5bi8B8Z48jF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563K2ie4VQmHWdhMxX4mV8xYGAipks4UWEsMxUQS2Mzj83KdRkiuGZeJB9ewzE372rK4bGLyEXNFsPtcP32FLk6x",
  "key1": "gJBCULCpa2x7fyHe3NmJZq5EuTCDAtmAJfiavWsHjEZEgHtwo1d8U4KJsU9ABpobRssfE1m6poxBUsroknRwy9U",
  "key2": "7JYCQGCLaheUyLfSov4rPfdm9vvsQG8ZZTqdBXjugij2FU71QgbLPCFeX4PrgwKuNz5WmW3mF6hGuhazE7zqkWM",
  "key3": "VteJfZr4NaEHNKhwQGthiLsLjQQ5rp9EhbC6GXbRP3CKbu2jHqwhE4YwXJ2Y6yGnGMe2CxMTpjEtZ3m86ZdJxhQ",
  "key4": "Mm2eduLDbwagM5FgzscW2VZXobBXVdoFzGD6ms8b8L9BhhTgtaFUUN1CjmFfgZ7JdMwVmDag55vWJV1PfxpkNqS",
  "key5": "2m3Hmxo54C8uojNqYXcFjntKUhohussD9iAdR8c9yFGjUDe52dwviJ7PTVHkuhPe538mHnXWtVT6oW5n8T9MMoza",
  "key6": "56PVMTb5SbdcEbutGETW6shNMCSaV4nNpAcgvLtXqWztmVsFHtmRg9Wz5jN1rSa6UfAurNMUJ7XsLTY7txBRdGK7",
  "key7": "2VPonVSLPwh6XVY5fTFZ1pYkjTL1r9yW642gJN1Q9Tm64Nr3ht8DyDrtEeVn5Vki53XkmgPs7BJ2t8QMNf1ey25s",
  "key8": "4FDAH7ByHMAfQNo8JCDm6oaxBpJBchZSWphtCyv8LVXWAAmmcNTy6yfbbz6MPJ8VqZtLApnqHfXnEsX55knQZ2uq",
  "key9": "3C9p78KBUEZheeUfebKfCXe8zEjxx6Uj6ApQvk8BwBQGVHvBhSSXc5WGiZtSbJakGGg1qitKjXjDmsEpSTrdbBNZ",
  "key10": "3kKW1tdfyzqe6UeuiNRsTAoAG9kED4wDS3jXJJaSryWqAEGaQv67Xbib7Q6cECrRaDkF1Z4btc369LmMW1pjEpXj",
  "key11": "5vbd1rgEqwBEvUfygzuskrPHN7RqVRKYVprQuRfwvdBS9EdeJpMJbT7PgKx6CRwQWQ1TVux5tvgZcDxTgWBsinH4",
  "key12": "2RFaDJV6CrhTj4LyrmxzPP8rdw2v6qBNt665HwqZdVNXnGnwTF952w8qwDCseWksvFZbLEQFkpHLW25BTxba976W",
  "key13": "6366nbhy9A1sCPe56nwCGB5CnyRdF31C9bVxmdaEnoaX6hqPJBVEGmfvPK8YyJ6Z9ZCU7DBjsCuy2AFTeUezDVtr",
  "key14": "4VUq6VMcqANjKPg4d2zZwSUBnT3VKhxpBNPd4nCwLNfh5KHpMGkrXHFPFcLE2ybPkF1XWjxSzJ2meQcCyoM3WgtU",
  "key15": "37hSjqdtKhb4LRHJD7mQ36z7RbpwA9UKb22dubPZCL2XRzVmbfLni8pjf9AUTFcQyhnjHWUA6DzYAAcywryoBaLr",
  "key16": "F4F7WvH8ASQW23XoHdWNmraBeCCVYm43AbwPhtndq2ALZjzyNS5YcD3G9fVdhZxMffnsSGBBqcLTCsaAbuUMGDY",
  "key17": "3b8wQjN3ub2AAubbLhCyvoqp6bsyUHCENJQVbgWygLwhLmsDCdwWM1ckt3uo6xcT1Ffx9HyzdSAoYpKoSk894J81",
  "key18": "5VAXSpy4aAZqy293PytE5CHV6hTsHXM5HEwsFWqqovdUKC5pVmoXJcqTEAB1SKnNyN6n7X2Z24g439aHr8ZyJjAM",
  "key19": "5ErrF9Kp7hfBwYRGqCV1fLan8q8c8EwoEfThA928TC8FaZvRpRrPkc2Krop8tg22GhvT82SyGkVdyi8GWemf4oX4",
  "key20": "2BfumE7kKeEVdFnKewyxj3R78VZczhN2BrwjJJQmK8S5CaQ69NTCs23esBHaNiduxPRp2osj2KdsZi59Ke5uzyzV",
  "key21": "5k2CJWtEoFmk99eaNFj7cZijs5ySVArTSAghuC8bdC6T4RxB2j7AWerZBxKkkxxuTH5K1498YBKxvhmegx1cGjn2",
  "key22": "3tAVEj5dY6WFkQjsoTKMkCKJikyR1i4adLSMWDzAdTkopVRjH7UWuTvLB7nf3m3xet384LEokXtMFCy22v5prgPn",
  "key23": "4X9e9ytsZEE2Zsqpd1Jw8rjWPbvfe57Bum574J89VTxv8FaXgW4kK8vfQYE1bj5qBH2vimGbmdNKdi5GbZB3qQwv",
  "key24": "3SC81w6H9JmwijRzjwev6paipdGx2dnzM9pGxBVHDRp1Etv33HUEzFe6Zzm6ysatcC7Yfr1SSGToWo4LFfryMk1r",
  "key25": "4SF9pYswTPg33oHa3FZp6k9wuhqdFmn9TV6NPWo8ZBG6SE6P2TsJhzoMvRNQnHHekj94CWKhusXMHkgKAeHDgAmU",
  "key26": "3NpF18NdMPFdEyfBboNPCz6hBPPhksa5LwAK4nLsmbGrgdbaNS5hF3xA1FHt5Ei3UBBfJJridbgKinwTTTxUWiTX",
  "key27": "aEjhhXRRjHoubNufXTxXt8ZvwqKQ6CXffdR5Aui1v5MYwknLb3qeEs1X1o38bmuBQbrwgCQTb4w6joK5MFz72xB",
  "key28": "4kWusx2arddsSLUoTKm9axfS4UX23GEasKJDnkmxwEHk1pQDLzGLnGt7xkmJruwk9x8bd33bgyAxKy7mxzp8Kdg1",
  "key29": "4R1CjRpbDFHjyCsyhPqVG1oUDN9ufjS9fW6fzfRrxHKWVJDtzWFMwHb9txCSAvQAVFAzGmpEWnvkDQfSNUJNWvoi",
  "key30": "gE9ZFTyH8TByCZEzhfj1yP9dfB7ajo9Ah8s8K66nT3LNwXQkyDw1KyLJzVvmmFxq1sc43iJWEmibkK14aqhXoKP",
  "key31": "H64qJJqgUr5PFW2Gq9BSCecgVJpA1c15Ew4Fyf5d8w1vgoGgVX2vGWHjE4ZHBCRTgcmasFiEq3LWu7Go3LBPvmf",
  "key32": "3EoLb2FRQNBmkRuc51nz6GNSfnAew9ETmBBNz1Zkw62YVMYa5muZyRejZ56EuKCbyk6eQTYwMZ2x7gPMx6gDHP74",
  "key33": "3CD7Dns1J2hvxLcEqXQr4tGen8vjoBisRFRCwRP9vf6qNZAAcEThHHqcignQQxeSpwgcM7qFzAhQvK7Jwjd1jTRL",
  "key34": "4x4evKBrqsmuhF83EQpPx7245tKp9eQmUUSYvPr4dPqDdZQQ5FwFviy3nntLkSPiKuYHXJ5m7ATe6q9Vpj54RBXU",
  "key35": "2ZsprH33XgB5gB7xU4Wts1H8EMVwyEvxt1JZC9vgGtbSH46nM7KsH5ShjntsjtdcQpAQVQwBeZv1oHoaHdtHf1q5",
  "key36": "LxSsUY66uu9o9EQVjxJ9im34FWnEpD2nErSrNf8d437TzKvGXxnMQ1NBNFg3MLxRsx3EMYG28A1ftjnT5KusV1m",
  "key37": "3KnEXdtTN5nDtDP8HqPNSBLzUUThZN8EdsJQRU3USjJMeBc4t6bMp1r3A28vGphdyphHFikUnFno9CkDb1Uc7KRv",
  "key38": "3rjYovtjoZnygX5jM2ktg6uzm7tAvQsbR3mFfZKSfn21U1PFmm9ocQxtprjvFuk1KoBMz5cP3ePcziGng5SkPfYo",
  "key39": "qno95keE7dc2WfSFzfWJQQ4yhr2qgdohZtwEgswgSQ2x9d2VEqPyw9WT6nSkKwhUf3irqgwDWTEopvk38YGFH76",
  "key40": "5u3gqL99KQsfjvkKkQd1e4aAuv8EvfTmCRt3pcqq12wpX22LMbBAgUo9Gyr7Rxur7H9Yiq4uUVrDRS7ygfAfkCyx",
  "key41": "2uiPK8bBmgydBeC8Hv2w8BnzqsBHQ2Z3haBeK9jLR8edgrrDhW1y6YaUUJ4xTCFybcgSgBQpFCqg853uXdezmdPT",
  "key42": "2jKU4zL2LekSSkGoZSRCepGAG7nk4zXrjvG4pggSB9dwwWrBHHUXVkk7B6iKugPmZ3gbK1AgUgkQFnBzGmJo5HYi",
  "key43": "2jJJjexhYQzh2BkxuhArYRG7du2z8FAcBv74GiCa26aQP4D9LatqYTPNxZ6SBuG5nKZxXesjSty5YfhSF7JWGLdN",
  "key44": "5MeZ7PsnN94BqiaeYtWDDJXXvWBxoHGHoPuuJRW6GnR5yRGwSZnspVPfPXbqsTeWNyBLMtTjYeRnGhjkGLHPDsY3",
  "key45": "2V9AkmR6jThoy4eYVJGQHCisY2GeUFCA3wpJLLUGV3WYyRuzrMm6UjezbGmBGDsrx5nTK22gCq6JGvPKveBi2SKf",
  "key46": "FnmazNY5LgCPESYufDyKK7jDouoULCvYTynPNUP32umueX4gXiG7fbDFn4LK6NJtjvYzdVUQ18pstbYFCQVkc7R",
  "key47": "5JkAzC2d6dFspBxVYfJ28Dm3abYDZx5d6D3vqETPwTkG6SHEygvekrmcfrXnGTeJrJvvRjJGtxKpF3bVm5LLZUUS",
  "key48": "TMn6hD6sye6dgAE6MAkMyKnyRgPej9Qyptr8pnmF3NSK4A8Pmhk6wMwDRQQbx1TUcb4CbDS13Uj12puykEbMY7E",
  "key49": "5Qq9zgb918SU5cZe1t3fDVaLVUUKdguUAhq1YrMJGs5Gy1ByJoC2jJJ7sonrk5S5N3dU47MxeFGjU5PpRWcgsCC9"
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
