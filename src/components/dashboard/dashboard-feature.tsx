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
    "51hEXXZ7ynMNG3htdP8V6gp9GATv9La7ogusYynHcSobvha3wwg4EGuGeqemcw56rW4PnJjCt9ghrhcFbngv9S4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57F7Lnwp4jrtaT8EVVoFoydd54PbL4tYAaoFbvKwJVUQGnbHi7gYNfWd5Wan3pWA286MBdhvxWwuyJF3pShy2NoF",
  "key1": "5VSXBFUDTe6dJNfBq863XBqoFiwW2TJj9CnDAmtce9j2oz8EV5JrsmHHhAZxH6qm2f9c1m7VyyTvtwBeAzRLSEMV",
  "key2": "64M2kzVtLrTjVc4VFccDnu2iJvUQNevhf3ZbnKP9mLExY2L6FMBaPYoMBcDz2vVyE4LLiJkmUXzM6BzBNovokJFx",
  "key3": "256AVozwxKoWuoXwZhV1TTuaTXGVrAsjAbCWGGRCKRUyc96hLYcfoZMPt3zwdh1XLZATC3V7817yQ61LrxgyT5RZ",
  "key4": "vpd4wN87otXvt8KsckxhtTfZpfjiWAQb9jM1J6E6RFzCsDfgAKPgzTwe47cN2XTQ9axrUFRdwRYj5yr7YnkfVFp",
  "key5": "49U6ijLgEwGZsn66SxWeT3E3pyuZVA5HFPSJyJXg2r7oiggKyKngPDb66aTYz3JLZNntSMdmFYeRYA9DzKzsQBxZ",
  "key6": "5yWPeaT58bDM1oCDVJXK6c89a2Rg7i8W61zxdBCfXcDqSuiTgV96QJPTiR1jZ7ZmVmTn2yjYz77fNCJmkw1tZ5tu",
  "key7": "4E9KaCuMbuq4nFvDLtmtN6GpgjWhEwfFbigGbnNiM7uvN6oh4VxeqsL94HiZqbUet8pKH3X8r4dBeCGHyhvxXTTk",
  "key8": "4GwChBZF5jqWiiLKKukz7Nj3R4TECZNhFo8v3g2DNSKHMnkYUnPh2itzYiZdX3ht7Hgsnwwgut54qb2SPzET3xzZ",
  "key9": "27i9YcmQn4JpyJv3qEJKE4X18sn9Fpq9VcCmBptmxWH4228SV3ZRjQx4ckDpx9TYTBZ7s6iPGxN7oJkvqN2n4LBT",
  "key10": "YTLsnUR7hnq3KcVFd1NCAPwDZbrBPqtJnmQBsTdqHuwTq38bLdKqEvoCrdxRi3PWGLVMBPsZB1cRgUqhjVtHRJc",
  "key11": "5k67xrFai3SGj43a9sF89tqQAxqULhon5o5YKLp8wg752fEkU7tc6FHSAG1nU4kfTZvXqWv79vtdxxyxLJqxCfo7",
  "key12": "45RMf9L4cXZuQYVgjBfFoaUPrnM8vpcdqobhyyMg4kvZRmEXzT7s1NsDbEX33akdMLwg41TgXUPrfqVSbUTTE8uC",
  "key13": "62THNdNV3E68qBqtwVBuUmn11wgWXA57MUQDgRhZQkqCQpL6wUn17nJuP7JbtgQmGwde6Ug4gs5EFHVobLTDjRNF",
  "key14": "419WTidxMb33sPxVRhS4i8KV8ZvriDz8MbwGfTu49xCamFPVzhAfWdMoDpd72wCg4PKGo78yGE4ZS7m9Zc6tB1ew",
  "key15": "51GPioCAo6ELi7nMTNf9FRv7G67sBMz1KuwnmiaN6GtmjFqPe9QtMURNDCvrSzHRk5huqxbAjaE6FVWPwyen2MM",
  "key16": "4zKTfdigWZoBho3y4fRAJnrJj8EQ82yr4g55wRb3uUhzfhENnnDKE2FV4n1JjUU8Q8YTy91m3cYmTGDmkAKxxpaQ",
  "key17": "2DrcL2PLfso1bKkwju4yeVyZZDJmcg7rRuTtGVNrGKqj37ZdM6LokMH8satRcYozkjyJU56Mq5pmPQcM7uNTWoB3",
  "key18": "3W521Avym76FpTJjtMZFwECizc3CcWa7b5eZa4EQkMuttynqEqJgY8NxqmTA4AYxD6tavBATZ5DVXfzuLfawLNWP",
  "key19": "NmhntRCoSxGpZ3oCmK7ky9ZMokhN3QxPDh9rQ9pzMuTfnJZJqvyy33Kfijh4BVd3DgaWnKs16jM84m2BR1A9Q4x",
  "key20": "2EeM8YHetfgMagQaCfjNPx1EjuStNaXeudVe9ZHMSHzqbcmKEr7r6J8Tos1pnLp473YJ62PVWHxqeUqCSi4KXdUa",
  "key21": "4UJs1DGrGbK4wA3ietGrUFrW8dvgpisoBr4ZKDbkcSmYvBKijrhHS3M3Ez4xmjQ8m7PiKgQh3zr4guh11rzu9VGn",
  "key22": "49zza7hRzJFMtuBXzpuDTFuGk86aoU97sxV34dgvkazQ4q8XFLT9yBdnW2UgU8is2rBHRQHTsYb4qqTcfyKwVbNm",
  "key23": "4PRbbfF6obLaVd2UevZASFvcLqX7wXxePPhNH8RKJBgGDzuCqkcVndffZbEG1powxcVsUHRYc5GAQyHW8p8i5Ksx",
  "key24": "3gezD1AidiKgA1CLuFW1yTTpKFLWQNWMFsTJzkjAaAYpPYVp1pUtwowaNyQ9pcG231iBr5ibTieTuxPFpTW8VpSN",
  "key25": "25Gb4ecNGZDxzMibcdwGvBF8HYkwZNbTLHhvVP4NTGZD1t7RZNTdUv7LBXA6z5q7TPG97AJ19RhpZ17s22YnCmHY",
  "key26": "FN3wSGSti1ZtJezrjtkYUKsfTXeErP7C1wztLCfDNH8eY3Yvjo8GgX6RCErfPBTgauhDkQKLHc4VkbRXm8iqEbH",
  "key27": "4KMgE9wfn6igyrpxjgjo7nTLZF7xM2XDwoSu4pHjE6ALUMADMBMBNN8TjhTJ46bXcQAtZWTbaGJsV6tyCu5QmLFP",
  "key28": "58rLKEiPDDny9qQrfJq7yEVeTEnJwRsqwT6ooJMK2M988z17v1CbnVSn8aWN6TVePW21P5CnwaFSUQPZgmLTZ58A"
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
