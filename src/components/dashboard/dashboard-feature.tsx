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
    "ZDcZC6qNzvCHCANi7WWPmPuFDNy4EUVbqfGJSWs8nfqQxgCxtU3usGr7NwYmmP1QcyJzgRWoep45xzembUQFHw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RxETM73yY6ryrPah4WAWSFPAwCzM7mp6vKUncLdVBxk513ERchr6fqgbsGhMCAPjhphg3zmq2RmLcT64kwFHSWK",
  "key1": "27GBn635rTAgQfVaJ7UfW57U2DZSSkKhvDc8fw5p73QuuZyTmfEGDxEmTiFhje4SkQPAQc1vKKRTsEAMxHvF1mhs",
  "key2": "4QQbWRwdRRPRoTthQQx1Us234bwQvXsaMPHsLk3XoAGTS5M4MKpDZhx1datxm9YByKAZ85vBV36Spf9CGCgJQveZ",
  "key3": "3PwJ5VgEwpcFmGf1nj8brPQbU2YczKEszHcnasRwpWPPKAJhSVhQosxUo4dyEwVnRWuDcQ58XfmMfK2SYGJwVani",
  "key4": "F9Pr2MtwTHd3TMCNjs3Cm8uURioBZt7NJDCESYXhZwms5FBaRubSjb3PNTvg1y5TP9GQ6pRXqvKXHquSeVuETkW",
  "key5": "1QgVYiUzbBtCGwzVcEJ7QUM1guX4wR8VECxvN4DR4uF9a7Fj5UKxVx6vbVLqVmWqkPHRhRueRSkMjfCLQmgdKCS",
  "key6": "54pA3qL3WW5AG5xLyox6ogUsBrTUUesRqdXjWgARtQ9nqpY9gGZCgf1jpxrm75DppeJWySCwF9HaVF6TXJQrWQyL",
  "key7": "3q6LrqbFpjnaH2KKj2Ka8AZu8zgj7uTXLheALv3mgbwXzxqBjywRR9ptH7ba8r9iH7QFZRyPWbmtPzFM36uoCZKt",
  "key8": "4oU6YHRUdvPoYP3DdVQaFCF2ssNeEM7MvfXZ1zEC7CEUXqS46RXrYk7ZRYNn1Sh5mcKUJTUKwBk41qhrXC7rDwq8",
  "key9": "66yBZFhX7HDeKKaRzpgSmom415Ef6ZwpXTXLNvDXKEbFuLbct8vnAipkWCUWNKGXRViKhUejF2VLHghcEFebxGdZ",
  "key10": "5xSJBpPEaWWNHhKuNDgS1GoSEu3Y7gjypXbzSb2YUWKB2wqJ5LNoMGXN2CMUccHHqE2YCxWx8SqeugfirkDxpqjq",
  "key11": "2kaPt9i4YuRkpvA691zdWipofY3X4xHoVq94H7p7t2Q726ZqWzkJ5bYtd2cJ6oFRpefJMYAShWqys1xPS5zj7QkX",
  "key12": "CS3eVWVBhy89GfL4P9wPBkcm6NUNFHGySmaghcc4MVWPmdqCTZVEF8QSmSP8SAqgem4vZjxQYUuYvEb8mEnYeKg",
  "key13": "64PXTn8q65bz2dkmWRpD4ds5UHMuFPtNfmnEhpzQk6e5jwLZojWnwejSXxF4qfprLNW1HTejLjERER6JaMzgkJpy",
  "key14": "26WcXyxTRpf7Q1ai99Ru6YxxvPTEDPQ4tSQHnA4nhC8RSj1o44kd8ttvFYbY2MQ4KQTZKAv7nQMJUoL6XVkBrxwu",
  "key15": "4uGH8WFqojB8ptUDzhjCEKkrKvWGqDr9chA9cT5nEJ8TowSJSwapSib4hdwFbDxULKxoF8A61poWpGjwNGVAw1fk",
  "key16": "24PREHfD7jMcQe2VzYbMFSHSK7mPE8vs3gUu4hiV5T6mSrrpepjTQjMiAUoK22Cm5qjFomjYtQ8krJXEe4Z2HxeP",
  "key17": "655wDRmZRtweTk2eEYXFHSPdFZs6KwiUPTEkMfrb4pYfCqoRTsKGJrDE3XTusoqtfH1fuySenuxu4B4dofnvxvAy",
  "key18": "24cYhfw3FBTHQqGxRGNikyMM7SddbAAEMCLw2CgxZTe74ZN1FDjS582KbZaUr5ZHyas7SkLbPndrKWmfinLhocUE",
  "key19": "5HUfWof4RmyHiB2RCVa88euwD4AyVronuWj2Him21z1TaffHy7ZLHEnQAr4yV5Zn2FnEuDfXWPMHf1mZrVMg7NAi",
  "key20": "32U5w3GEEXivJnj9hFuubbQPZvLdcpRP37h5Yy6AY9sHgugB3bX7qkKjpqhrLozQhqyFuugXr95odoUM61Rk8duU",
  "key21": "2ygBUYmArPRKWGbRaqQdddsoQgxDwUBxw9AgaDzWftB4Fmrid45tEbxgm2y2KLgthsr2zv9DAGgiYXh818ntZPbn",
  "key22": "74pW6Mhms2GysFgXAAUnwFHjMkfYgEb6MTKeFPg8oPepz4MEsNbSrvGBRkSxjXwcUsLCK7vUcXM5Y5m8Ba5rwLi",
  "key23": "5CQZYQaE2rrBnTUsiSfVUCN2z9YqAqQZLqmwbGVhsxRJNTctHi439WozmrKHzPnZ8XuF8AMYAJg3aPRU48vqPsvJ",
  "key24": "54hPirNrvJp3wcMZJEDqnq4inoFi6eaNSMVpUfFZySAqCxW8z5QEffv7qSqpV4LG8MA8GKaCx42wckFqRtPPxraa",
  "key25": "4RXDUXLc1mYfVzPTTpM3WdR2TJp1BPFqETSwo29supP6f8E77vit6yPTcZRyR66VCowbaWBCyHSgCbP21L8t4ese",
  "key26": "2xkUEVkrsqKnFGu4ZgEDgFoCPX3j7C2LZM1sPVtPF67WqTbJJRW3e4zrnZa14sNBTDByichCdwpgeTMVfRBoFF2N",
  "key27": "4UnNuhQNfewaAEo7npku8MSwVcVeqKs8CpaKT25mrgNPgp2ftp9xDmRGDjs6vnRKCH5aavwsdzaehjVbhMqbZeAk",
  "key28": "2LSwPe6SNFYF5vhYN7UpsBiABMF2Q4tvn2M5xUUy7mtLUG3hZZq2haMg8oSn3J4FPATY2uVkXuYr3Z3sVJVKJ7Hx",
  "key29": "53AN9Mm3pho7aL9s2eBcnet9ovD6BHw88JuvzbZHmpfPBoL5CoTEWNEAQrhSnDSWVCsQeqxDhEr217EDpXixULvk",
  "key30": "3brUrPL1yWAvnZDmu7DUqowojFhWAon1DmL8UHHJoH3N3gwwgU8rtZtYJb3QSN2c9MMpvEsZATEtjpzudPorHdy7",
  "key31": "51RXkBdvUyLdiEH9KnFzQvjDwNQ9gM5wG8x9BhnDavcXYucwerbZ8Z3NqsA1gwYJoTfgf9Yy6AYuDxPoAxevWXsm",
  "key32": "Hz8RPeB2kBxkZQbqvokkFMMvhEct54eZ3YKA5kT27RMuaqGGCE95Jr7cHLGX4bQsv4sPjLjZ4wgoX41ZTHQmikC",
  "key33": "4PbpfhAkVbnQ6qKi7PxwAMMe4aoKvMZFu2RYaaHtdiyviUrJCGex5xTJYhskqUz9jewKVuJZegu3fXnH5LhgacZy",
  "key34": "3qhQekjbiDpZenVpucoMEWLfPzKfzv5wzKwRLMvbgduq3dweWY8ncVWoujZyfdtJ5EPcx4L6DGoVbafR4N9LKNUG",
  "key35": "AxQ6i2BgKymBobUyoX4khTnhedwQ9WdADBs9hTNH7r1ntcdiuZGx3yXAyDAbm3MWuwngc8aqtHanmFrvT6zEV7h",
  "key36": "48SVNbf1dxC3iAaKMLvBRdrTJb2dAA4PrhcWpZ6XRBfP8UU8tJ5vn4MSiwrRHBhQ81JgBNK6KGNsVXCsRLd8bfN3",
  "key37": "4KzjHp3fwfvedkGGSiiJJ36qnMpV7L2xHM2RquCwi7oKBkZhV6ZPReq9eaeD6Vpu7MPwqo1qnimVH9mMhxCa9Jo6",
  "key38": "cNQnmxvgqm7b5i9r88AY8ipzj8H8HJjRNf7BRXqr1u7RHQbKiTwR9W9xqnwqfRa9tRBVk4ST4D4C3RQhVnT6u3X",
  "key39": "52hMrZFXigQGXbFAs8MUw2TraVS2xa5tCdsZLX52VvWPcV56QGLD5Ek27keyHbcwJcoVrXTjkrCf2X6ZQcGnRwVA",
  "key40": "27urEgvQPw3AABnK1xsarDhTS1xa1UzaG98CGuwoSEuu85STs4YM4uf4Q8sU6KyBqDpgVKru3C1Pr2Ptx3FvcJNR",
  "key41": "4VLJcv1kXRd9NyFv3bBR3HfQrTdgfAC22Tx2KXthnpv5Eo8f8BevenqAEBoZq7oa5FsFr5PLSxJQxwqYd7AH9Rpg",
  "key42": "2NZeQk175QZzQoon2GkG1rfYR3tehkJJBYHQa379g2TS2sf8J2KdUHk2vCwecqtwkGnPHKpeZLutoK1kU8jy8LEK",
  "key43": "agNsEqPtjgqFDPRK65nF8xN7GjDYLRKyQpTAn3ySUbSdhRRhqceMB2x1zi56Pw5TNjCczn4jWUDNPDv16xFRsZ8",
  "key44": "5ArknDqajNapWoWg653gu4fW2F6R2f1S9aMt63Ni7QyjWBhc4gxYjoTdgW4kSVPkENHCWitWmPhqiNGP4BEMzcy6",
  "key45": "2BkuyAAMrvvj9jkgZLuPfWC6qJH7RQsG2kdGESUZ2JBecVgRmaTwLWcye2QmZ82CWBvKvCooB1BM8XSqP9RH2bxB",
  "key46": "4Ao377RZipF89BgBc6XXhCkjKFzVEzn5b3d64xGeSGPCWcerKU28JhU7ZT4MQyydq4jvtoveqTe9vA5nWexfjCPm"
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
