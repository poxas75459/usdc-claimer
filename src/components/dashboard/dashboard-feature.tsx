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
    "TjMnjaVNqPjw9VZFhqY7TdV7WToFxFq2VqUzzK8kGafRR1kdagRxjmn8Eybvij3oTwt3AkFgzNjr68b7wvckPfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gHFwUWmXYBaiaJKozvPJF4UFSzxQFpvf4sRFRPifmrj3s3edzDXWfRbAutYVQUp7n5Bk3cZ3g86WHpWAUf1Zgs",
  "key1": "2ooGBrjRPgyK2TbZhdVCujRMdc7e5uzguPr9UERx7NK1mxTJkxLLs9oZy4hW2PxUhM8orsPcvioA9ECVxrWiNEeH",
  "key2": "62cLiLYvGaPSRZYrcabKbRJ5hRjpvBj4XerAbZp8ZXaw7wwcgitHunur3WmVd4MeZ2McHmdzeKFPCuYsfHr6Xo2s",
  "key3": "3qAQp15B7mEVzXzmCTNKTWanWywmc2UBnuAukDs6Qojueu1wB4hyPwRdG54Zrt9dDUxs9Dp35EmUPrSkAC4jxnC6",
  "key4": "2Gp4auz7uqDxZbxCn3yz5DmG3yhPHTWK7mk2nQ3xZgJ7CoTw5xK4H4BhMSphX2hX3tvKsYiciFh6Gu9gDLsZycn1",
  "key5": "5ovNMrmaPRWLUU7QBVZnUtzru3Qbp97YabF8gCjMAAyD85RAkiLvJGeEanSciD8mZLV73PGQBqUpfdgmsygU5PkK",
  "key6": "3ty9ewd5fuGUoaZaNUqNS7s2prsvA9dfEiSE1gx3jYuoTNyRZQyfKZ7iYUaRgyqp7W1vbbehN4XAb5Pi6sawjc34",
  "key7": "szDEFNsNQgLeKuVfvMDCBTFjiVqoJzkTnCVf8t3oNbnKKixAgc4TJ1d4poAi7jC6PxXcXHZXExv5rk5jkFZfE6Q",
  "key8": "2TtRResFNRQVGUmYjqC1Yt8WcmFWZdr7Tqy7uSLnoDW6Z3yt9VrjJEx9ySdYGrb4g3sp6TfbS19aQeUcjByrKu9T",
  "key9": "5jdbQzsF5ayUFPpJ44eYcttLde7yERyYxWM3hLiQV1JbgGRZv3HUjWBE71zoMrpXv389TAnQoAnfe4w3TDmQrGTU",
  "key10": "62Wds59xLwc1EQL4T5ZdUC3H3KLbMUun3GBa5J1uAZmDcYAPVyCoE3mXSnmwRjoEigcpPTMaf87U3bdmNJa65STF",
  "key11": "4PfMsdjrfNSnriDUynwdJ6pNBhfMir7J4Edfcq4eEMe8nPfLy9eZUHAkKNU2yq1ap5MN97C8VeyLdTVf12ApMaz5",
  "key12": "2hcLHCRpG3GrFEnDLJjDkZG8xCh8piDq3JmwTusnDXEX1bqi76uDkm21SVubN2485x9TqzJDqjdnwKvN7hw82bte",
  "key13": "26i5n3FmJkwuWDpGvwwpZUEBNzmyiogFbskq64MxRwBzUW3wSbGBJihEhy15uHd24FF4sJSRpDgZGRq6xwk4uJfP",
  "key14": "51srPy2C4Tk2Tn5F14E9nBdzAxRAuAKjFPcKWCidvZfH3YTLd5skK2mXgntMfBic2obeYyLGaWriKAEeYEEviXZt",
  "key15": "5TAWN2H7n2ttAAtWup1yq4pmWJeRtXkJvEY9zDBsB1YmX9V9X1iNUXYkPkWHUnbKDoejAiTbbusahNzxi6rqVQpW",
  "key16": "eJEr8jegWSp8TzvUqnEriJR9zBscVowg7VCfs3Bfxa3dC7e7dfMMAva7vru4qJT3YGLye6wJznTt7SbM59tf8ZM",
  "key17": "484wZVreRA3HVKeQdV9TnzVwzUSJvjSkJC6rUwJu27dh7SxUB9sKH8UpitfuAzNYFmAVYciRnUbUu4vjQCUfXkVm",
  "key18": "oydKRqiymgDXUXDi3YPYmGT4fnXmNS1k9FDT75XNr42PEWDJikFGYix33jaLPRQa8Nqp4uGxM4kL5WwaXyk4ANi",
  "key19": "afizyqrjAuQ3CwvZHyKEp4EMx1L7n7Bo2YdZZtHC1CnfY7y5SogS1HqzYgZv9wSiD95UT4yF7mFeK897aTvmP84",
  "key20": "4iTEbrZhdhe3sp1bubLRcCDGbEZSqfNaNgt5tZCs1bKafpisLXZrzC8eR6hTaHVD9ejKjfto81YvZzsfuboPs67K",
  "key21": "4Gf7koR4swCTYf2oQeaHtNFLBt2e8tsaBikQQkT2rDd4mqkdQMnmPRP8UUujdWmzgRdcrbfV2smXt961fjTzp2Ag",
  "key22": "3jHNxLyaxYvst7xqoXfHVJwLUuKZQhGM556s8d7s5s5LD123KJcuD7rLu9q7Usyv3NqWZz7sy63fBM7hXip7ALVm",
  "key23": "4C2UCi3qe6LXV9qQivKjnCky9LVFgxqTdG6XwLGBjqYQvmpJXQNo51cMiLTYDC8N1dUy7SMKqjTCgV5jmgyZQBrs",
  "key24": "kkhGxfTnPa9RYzgrdfRVeNCfSZNQL4MNtRVgQkxynmYB9e4gJCtXwy8u7WXB9imDVyRg57qr7puWJbDYAMmwtWr",
  "key25": "4bnxzbL7smsJfLsapsAJK5sWhjq9ip8UrkVaNymZHeSm55cFY5DVFLBVMYgPEsAjU8BKKYdnNGCcxV9BfZgAion9",
  "key26": "G2szZxXhtkkMU123uZShZCzMcwvWei5nmB9pABtyX6oJky7ta8u8FAdGWAJVhUBkMfbh8VphZPmWRVugj8tt1YF",
  "key27": "4p1DKi87BDxuwhTk8Mzp2VFKbMUvMc3JmpMsQ3E7YrMq9WnLkrWk9sWiLprwvyi9dc7s7kg3w6UHHtNbSug2mdKW",
  "key28": "5gn2jfAByk5y3Xs3DsrHfxVspaLbxw3jY9X6BMjUTDYyPVZcJopBRXgbyM1kRJJP2jU8ShH2dzDnMqFwXgCRAwci",
  "key29": "4ZPK1MbS9njM4CirFDmoxWrcJbjXv5dd2Jrk5K2cYNkwociPjGtMHWYkK47UhRjD73zMtzZg67V4p2pEd3Lng6rQ",
  "key30": "biNF6Jx5pBpHDFfsH4bXWRVo4Kdx45uK6ft4F1UVUE7N2cRVtumaB3HxWZEHcSo5d7KU2Lc9BuHbLFmT4ZhWtA3",
  "key31": "dQBbHdwFUbG5Riv5LQhkLEaE23v9mfVdku6bnZmBcMwmPX8aKVQGUbAxgFrTrqKmByRDiDX4DTvkkSyUzqASLvB",
  "key32": "3ez3z4RoKoRf8G8SmWTkwkYfFhxB1oam7ZhtSJHETkYpoViXPZBDSckwnPMHW7T3DvJmBts3qduVchpbdAuTxsnb",
  "key33": "3npT6pKqLg7mo53XEtzXFzUCsAkYhLSQMajbVSSUcCZ3Uvt7XdGq5hBEfoSKNCQZqSFvK5wGtARpAUgujnsVu2aR",
  "key34": "4FXssTDXoEPjC3RyEW57pjxe3aDCjcRKLGsSirqhFfvif7D2dArabNpH7c6zdTuU6jyxAwK82kmzdMAcLZUKEXuK",
  "key35": "VgkRvwGAmy6fFggwWHLMQzhMmjbpCJ2p3LjSR688z7eiXYRNAaraT9RvrPHnZFSEDwF6jA6BLJmrydh3q3MFS7P",
  "key36": "2GVur76NjuiHStuatw57ccrfPGE12875UUEdU4ezB5j3qy4nmDfDK5rhbJjLrqdmXqB8ugHx1YJbhEV6bFiYj8ZN",
  "key37": "4Q9WBzw1GRKhBB6HsBKUBZsSFpbdZY7EFZ8ne2fGKMCvmNkcC5FCrXxCsMMp4sanKCRGHsHNoxY8RSqjJ4RSVH2L",
  "key38": "3r6j53g1RXcLJxq8Cdjiu2dpB7wVwkATLkoAXTAHBnzZHmNUmUU2p9jLE41K2V8GCBLLRSiZfFuByDpp6awRDNiz",
  "key39": "46hPSPceYnDEQBuNSoNxiT73gRwPyRy1eeBaa4nVt7KUQkV57n7Bpv9Mji2i9kYHfgqMA2fuVXWbNmFeDDJoBCcW",
  "key40": "nRJzBpmM6zz8FyZWfJ9s2ov5P3QBLuFG6G4vFsyLeDbd17Zj69c2sqNfLRUCjhMGsg3iuXgrc9mFGVQYZ8wN8Y4",
  "key41": "3bAy2D7bfPyMfyzvN5LMzPTMSRf7vdPFqVoos4jTQkhJmn1SYjoJhoLVmPwtGQPSGddupnABH6JaSyijitcGGYT",
  "key42": "34DYmjnQ1cZwZ1n2htyCx2ff5FHVLAEQT2ZPbXfN6J1KufFrjtWz65dNRCQ5UPFHSZLhJXrTS6uGhXcy1UiRdZYr",
  "key43": "4NK4D8xBzTtiNiyRE8tHYceimZm8nN7BDX9z2z8RgC8Wy7iijSh5SEELTgwBCVbmm4TfuWPbotS7jL2eYwy5uTpd",
  "key44": "3v8UAE4GW8x8vbmwdnUKRfWqhHqbVUrEaRF8rKVwGUAW7wN8oQ4qqVbdWiSTicoWvytnkMM4tRCnW5EADGi1QWdD",
  "key45": "2aaqw5mUquFvP2aYD1zddxxYZ5iSG27Xt1MxswnkM9igbMUb7Sm8R1sHfdhwuM62Wj4ESxWarBAm81tssGtyr9Gb",
  "key46": "5kFSo1922Z6CzjC1dWuGVJ7jDhV2AANvEu3dafiWt1Jsh67zj9vybEeRF7zgvgYuGLNr7p8p6EyQvfYxs7dVBMQW",
  "key47": "Qdze4SJz2tbP1c1pXDJK1SFfiZnA87JVhNFWVt6bpJDoAyLJkEVvPgsNHKfMvRz2KPVyQxUakF4ztZ5WJsRE3kv",
  "key48": "2XGe5hQv1CN4h7gJQERBiRHbXz6K54yDyLkZBddCgWkBYwj6a2ZSreMR2p1GMYDuLWkJv67X7btKj8G9uYe4owma"
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
