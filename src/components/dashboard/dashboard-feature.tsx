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
    "3XSkDXYCAsFDYrpXMmNGzwPbDYkN7RVi7RsBVyVo7p934M6nHe7QYoA1ePn9dYPSAPNUgERYd5rcGm2g4r3F4omg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVf3BsEwayEy3RTPWg9Tb1oud2rBVCDUn7F4d6LStMZ2TyEPy684MNyQdb8ndNFyyRjKibzf4ASYzkgpTW7ntBE",
  "key1": "2PeTGoPn3BJEfGJU3DuVZ62Ki6oBbsxdjJJa4VjAbuzRjCUEATgdvq8VWuRvte9hSCVbC7iZP4t8KJqNoETuR2xi",
  "key2": "24kioY1GkgTMDWm93igiBTZPoHyn4gAKVPyHNJnr7o5w5HpV2gM4VzhJK9Jr3MMZ7cagH9t4p6cPdL4Zi7gSe5xx",
  "key3": "2gw8242bN2yBqkvTpBnvqjjskPnV8xXFn6uQ65PceX7KeE2KdTLFaeUvPmtUAgEvLdYoqxDwNEbTvtjUaBD6hquT",
  "key4": "5ddJSwRYqysNkW8kzoxN123Ap854P7cptbsJnbFBQZDMQwQydqvrRS3o6YzkrFq5Be2VQugRZE6PjmwR8nPkU8ih",
  "key5": "4VMwAXLS4Xnz17B8kvgYVq7y6HgZqxBFoUQBTvzy9ear62ijySgq6hmRUXzSkUd7cjkhWM5R3NWqMxc7HLryTPad",
  "key6": "2y8Lc4vnWb42jsZ5MqtcRAYM8s7KKx1pxQ83G2mFAi57frd7TsNxhtn7w1ZjpiNsrFE9znYmVUx1ZKg76cMzJyx4",
  "key7": "E7rMFLyR1zDsyPzPqBjxj4ZXkWdSyMVbdRymhxXzysP6dHhieFztSffMok92jT2DYbvnYfWgUqVz62a9PLXQagu",
  "key8": "KHg3XAy1riZQ1UVVe3mXKWXpa5ECTc6wrpGs2Qfj3u3rseQTQ7zwtHJt7Ls2bC4ed79Msk5QPj7FxAPKPSQTJ5m",
  "key9": "9ktmcGc8LPTAM6bd2YF6Q1iPtJMcMUYLdP8zBUtzNTh9UzM3hjNHWS4HZ1X9v1NVtJcSeVEYjazcwSedBUPyaPE",
  "key10": "4MbohZouGj5QkcZ6GyX9oP1xgX7pBbcjZBbwCZwG2NJNaEVTwJUNwk5LoHKGYNuuXzDF6xW3QsgWqVpJPNNgqSAr",
  "key11": "4caV8NUZpy5TG4bbNsfyBbCc6rNEoEGU1vA1jp3jtxp8N5nKUNVj69bkqf7wuyN63HxX6oSbZUWmXNbUPpcNzcbq",
  "key12": "4CHJiQiJhgVnffpdT3s4fC2HvzUJzATfHGJJmmist9hvbaEieHf7UuKBem5kBv9QSqaUMBuy7dhPrkC68GPRHqQ2",
  "key13": "5QTrUGysxAE5kX594SNLR8qrQWJaiepS2tTZ3Y6NR8APMfNc1ojTNVZhDPsnjKcxa3fPw1veonc8paSH58xx4yxK",
  "key14": "8kXLGvHR8dy6jchYSptNfzVXdWP46vCxyEJXyhwLh7UdHwJwHykAhkUi8uENuJ4dSPHt1PVtvw7PBx7Z5jJuxnC",
  "key15": "3fDqBoSavGFAmJoCna4eGu9PtJuxN9yQbCzxoXaWPiq2mtSJfUkuQUfPMxF1efg7xVWWRGQnEMnsUPiLAQLKyTFi",
  "key16": "2RfbRfhE35H8VVvw8U5GqyGdeSmkLS6kCqZeHyBZeYg2rwy8aaVF86LNjcpy77WD51MrJFqFofATNmrwxuJDDWo3",
  "key17": "2DnYvMwY3rzMXwz6LHZBFLUBms5Ak99uaUzs9puy9qAt8YYJw5JtGvnrPqPKbLtpjrotZvMgrJ6H6SVMMXa7NTnD",
  "key18": "mdjAQaEToxUDhwyi2jYFZp2zhHYav7bpVxhj8rekQVqzRDbLjR3odJJ5KUdv6cwSHw13vHUKFXP4jQD4BWimyoX",
  "key19": "pw8UzMCMUvTtkNuneR9sEr8ovQNtBqo71rozURXee9md2vP7QgieCdnHHvsj79Yh8Zcq8vryf2gbRgRL6HwS7Jv",
  "key20": "2RTqe4gtGVYJRQehCEtPB9PMDHq8DooS9s82CLzsmE4Kg72bNUGYbbU29s1zZ5CEyfk6QPcMkuZkwdgaHMr4W6GP",
  "key21": "Emtyn7eUJh77amRyGgC8nc2moVMZ3A84athvbTgWXZVYTQxv3MnLtRHgFtgGQZPvW2cNEgmu7wqHA3TmnGAnCfE",
  "key22": "4pKGkgP8nmHoWu44z9EeChxVd1jhRsBA1fDvgkpMXLk8KXWqJrquHKJKhPovCEwFY7fJffLcuPgZb5z1frnCKNpD",
  "key23": "3GpbKKFE2LhJUJNBRikGpnapBMjbXV5F8HXXxeAY3G7jy4VuYT1faPkshEMtbEyBrKWoEmDZhHx1WcVTxgL3tFeb",
  "key24": "3rbV13C5YGbaRpJYGNGzB7GpoECWXcBmuNzsAVnnDkoY7KLxqkbxi3o5ssiVGsMjMLkWNcurQ44fnXD5NdU9kVE1",
  "key25": "5GHvQXExebNLsgX1uafWxMgzajzbsSK1MRZm3zf4Ti7rRACKU7trTdbewQndR8RK4yTYwrVniunwEeim15pg3pKp",
  "key26": "NKgY8Zh1MfqnDUQ28349hAex9N49ptKFcis83PoHbGcQcaTNRSKGr1U1c6KVfQG4UszLnb6655V2Ly4yneykHBE",
  "key27": "2GtUTkU2B8UmGUVzvda6oNefDuGK71Pr7fHvDCJm7Ab3DeGYdUPc68qHcx1FeodCksjaqvTp7zGT9TzwM7MuAikJ",
  "key28": "2YefwGCwRYP5zbWTX68WXBK7PP7JCoHfVwTCATAj4hksEU54XZuHSmCbxmA2M8sdUVpcaNrCUc1T8y8qFhb2EQ9U",
  "key29": "4mCXVRzb2wZ7yu39f8yej7qEyfm7RDhPYkdoFyu6U4RRSzfTU7qwJPN9M8ka9VGfoaKk27HAGiojT5M5MxtWxrv5",
  "key30": "38xEiUC2QsMVtiP37Xcmp7WvAAZWuFSfHr6SMWuKs784UJPZnRgmtZaZw24Xxi5CGLjhPjCn3pDCGtZJjoBKDrZs",
  "key31": "5tfT5bK8KUU6k5WJZNudsdp79fCCtqdkxnxybhiwA4LijAYxkZCvZiXNn3MBFuJonBRt1cbpxY4saXQkagHZaczm",
  "key32": "3578ASgWVDAGyG2AqMrXA9GCcvtNdkzkgPvbC6iTS6mKiqB7H3t3izCyntCTXjn2v8w3Kd6nmnjRcGw2a2jAYPpu",
  "key33": "2RCduXEDcY6WrEGYG9AorJ5wcEFXZ8rkT7fAYcFcGKu4byAgEMUAZdnBhL59Grf1HaJK1NPoFXCjbsZ1y34mPkK8",
  "key34": "2ZRhShLVv4W9XCGiA3KJeRxTQ3PT5v76f6iCsEmRMn3ScTZfzcKV55u3tyoBqueZPbTYwFfKS9e6zsUqcvDNY2C7",
  "key35": "5S7otrvVcPxd5kxYbSP56udYCeddg5a8T6FU4KN3qhDcLdb5rj8WgKaA4ge58H895gowN3VKHdGjE46NNNpEpBvi",
  "key36": "5q25LfuKBhJV1YnRz7h35Gzm5Rj4tESE2WwmJn8Kf7UhK9dQmBB6NzeCN4upJPQuFPGF512zUdRo2GfmWQd6BGRd",
  "key37": "3EeNkALhz4SYDFmsGzan2RZ6k6TLsiMGUBAZqjYGFsKTcGFo4Atxv2aVfRMYy6m8wJrLyn5VbQBZzndHP4oDgcwu",
  "key38": "YgAdwVzSZgw9RT83KjP2eiVzNZC87MssuV6p5759bXzeZRfgEdXvp4TSyBBrCehGzyYbAetUuN6comPeopFm5Gu",
  "key39": "2amujmXAbpZvPpZ5ukZBqoK2Sqg2i9q9GoYf5eCnQjcrSy3s6UR1osJsrYERb7V7RJytXji2etzCjCe1dzm8twwJ",
  "key40": "3p2XE5bVpnRqVdFt4dvbq9rysCfLa2BmvssiRfmozpTCBbMZ1vwPCLrMjk8ZA8Qf8qEQvQJ7PJ3LoU3eYVWwkpcm",
  "key41": "4vSu24XVbTGwm2L8tStU81iFn6tsrbhDaKcG1oM6QqsFMPwpz3HryHtGRranWwNJynxSgGHzXiEoS2aJNruLXMhP",
  "key42": "c5nUWMo45AdPHHqJrCqLk7vFgkTiZgkNgfcGzhBhG3ARtQj5xdGi1KyTpfYmakBgid9rD7ZuELLFKRfESMHf2aH",
  "key43": "2mfhc2yuioeebQTyAFnEfNesLxJ8wwivYy26NHqQs78Uhc5FooDSBfrESuSncE3sCZE2PbHM4pxXLq9PGv6gf5A8",
  "key44": "2FghH4xxQrMWUz9PDc6omQWa4KHLR8vdYEbD28vefaS6NQeQ6dES6U5Hf9cXvQygS2JThSGCnSgzuSxxu6Bokyyi",
  "key45": "4bGKtQWQXJnBtJdF2Sx5YCGzLyW1fkrbxUSwoUMBorFzu9Pjzuwe4v6yfsN3uoxzF2wAxnaAcguxHCdXueiwyaqw"
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
