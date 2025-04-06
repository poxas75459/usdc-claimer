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
    "349SoHHcPtu6Ct9Dx6ZA4tKa5Xb3sB9DzaBGxCCfZ6pLCducwqWtca3y5wvbZoE2iAjY8ycUV7ZVAaAffTaUwGJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CoGk5xV1H87dUS2V8rQamxQXCwAzW794TNkSztdgaKSxbGqZ98Rggp5eyEdeA36pCuTdRA9JeKCpey3nFDes94m",
  "key1": "2qqiXWyrAzDTZu4aQcTnYsNf8Z54vDD5c7rdxdUgGKVBL7rNGhWA6saNHdNQBUUN4NabHzTRME9Kbv6ZfTBmg6t7",
  "key2": "2d2fyqLNQ5JQUw6emDGZzRnCUJ6CzgM3NXTApXYSK9Nx7BtcNqtFyrajaiXajs4fe89pMJjZ7NwY1T2ZpXp1hMkV",
  "key3": "5x9dcwHfrM16hLGV2Rx45mCD93WnN7AkzkkdAVUxc2nzCfszPmRmersoXgcKGQdsnHJAbcstjSyAw6AqkUA1ZPfq",
  "key4": "4Ckr4UVgqMCR19x8FoLFALuuxo8ioKh3ERY3ezdhbBrDzdo5r4ZfzTDNWQjaMAKmHC5XeAP2DMQXii1QNMWNBEog",
  "key5": "3U4W9QFPqU4iAZDxVCRG1q7WDQePTxHtaQuzoYa3cgLvxUKiG5ay93cLTTFmNZNNdxByDd2Ygm8HJBSvbnpqV631",
  "key6": "py7vRQpxCVWHt1K8zPsMAov2v4y5VfDa3NgT3wDbsNZrtNjGhPTMyUoQM2LM6RH5S7YSWvb8UXdqAAQESFk1EsG",
  "key7": "DxCSyCtAW6yJT4t4eB8ZirzcZGxfipXdsxJAEd8DFL36UGVGpMiYHxhrZnZPVWE6xBazF1PYeP8wQS8tVjH73Tn",
  "key8": "3oHLHAr8WDgGrVGVSxxQTC2iRiUSNcDQTWyVN2zzqrjP1QbwZTgL1UVjexzebqs6KDCf32aNCkAEUG57BZr297KG",
  "key9": "3E1a5fvD3VUTYxbDsKZEmnFhYNRvQAumbmg6GUJzXowavvn8pn395JmUNCX5jZWBPA9sMrQTz3XtSBNKjqNtrwBq",
  "key10": "5k9w63AJVqgpVJVkawqVJVryJJEaBQG9BxncMo1LqWDFbsbcTitwykgCJPAmvYKKpCtdko34jxY62YDpzLpHC1BH",
  "key11": "Azed6RbwqE6ZejDztoMSHJjsmQqTpieyh59ijcqGhUMvUubkKsmo2uUAL8UMNvE44D2rR3HDj9eeDJXiFMJYQWd",
  "key12": "4pHkcMhurSKCzomc4ttVLAymEdnnhkzs33gssQaWrEMc7yRKL7xtWZMFfJJ8i3xe2yusN3S5sXGGdumyYoaLUGv1",
  "key13": "66S4VEgCuPoTdqAAVZgEG8r9aeXhGjJAufaniLT9N3VK9MXc5yazVJMqQFFt3fScBNZgmnZHCc3fbjbAPMNmhnRi",
  "key14": "3C6MKPxWKpPyWkZhg69yWw7uBWAuEP7wTj2qXw19gipxTVGFdQLribM8ySNjuCCm8Rr6NEzXyfXqZAJW5DJ45FCN",
  "key15": "2t7SfkNvSUYPwjHwPwPEhTpUDGjga6jY2DzcvMkeex6WhDvGBYWVGvfxmscV5B7Qmnems8BxGFt1X2xCmTqBhRZo",
  "key16": "3jswFjd1gCAnUFif7r7RWyZB3LMcUTJM2Gb3H8hXYeoEdPek82o3qBmebBpZ1FFaRJ5QFDtfo7uawNzj7JSaZZPq",
  "key17": "2iV1qky6kFFaMBMojKT4tDLqMUrScfoPo8i5jiiTmjndhDvxjJ2ns4DSkscLDh1T9XZWNyqFgQLtXe6zGzoKDbhu",
  "key18": "KZNzDia454LgGz8d5MdKVzREHHrnMGxaWupRaRgZ554ehqoddotpVKutXwCkMYkd9q2PXRKHUVcXwd83R5xW1kN",
  "key19": "5WjeW8WvieBGD8pVti2zBpZcTxjhtATSDr5Q1gKoC6tYcoUx2FzNgGphTpGZAkPCGUFgBM6bp6JP7U9Xa3JbdLmh",
  "key20": "2crRXubCaoiTHuSKJZqGVxDnDGmv2YwQdNzXDieBia4aB5z6BEmtQ9gHNaFLA6fjvFU3te6Kvsu68WWzXwx7Q2td",
  "key21": "67RGkHQ5b9VhCCdyZpZHbGj4jnfQiP9wSKLt5Gg9dKQkN7jtCvpAdTyt8mig7vMANzFg61BVb7QBGMyuK3thPp1U",
  "key22": "3aSES7BpCHzw6gwPtousx9KVKgJMg5aqKLXi1sw7515QtNC3yhL1j4tN1So1oGzPv9jC8CJmbFoX9Hp2gANXERnN",
  "key23": "3MXAVvxPndHJR62JJ4Zr1wtK21YgEWf9jP3n962vk3GcaSyiBvsdMh4UXe118R6ZEYsWob1QSgyjjyufwxf54UN",
  "key24": "28TVtiobQTTSCjabzJeTwN7X3TFgCpU5qb27U8Zky4K722Fwn6BLeSyEukNVi2cmVD3i9uAZsQEa6yP2RnBZLWeM",
  "key25": "5LJeZow6rp1heQTtEBhqZJh3kvpqqoHBjhGvyZHmQM1KMh5PhA3ZD4LE8ENb7m2Dtos9Ef3AXLwmWSqhAykdFx5h",
  "key26": "3HNiMdbv2RGiDiGWkStu15S5eMsgYryno123aoRU4gTEKLcvPyV6oSS1xuuH7xQu8L1qZpNBRPtyKoCJvTHZxCPz",
  "key27": "5EHuTp7tXj8EwontVXELuUDedUst8sy6qjEeQr56SWcmB3CSAQkyXFiVDpSGNrJJrkbAHAXDvAUTM8xrntRkpQss",
  "key28": "2hkawywREFeWvmqpH42oVuyK8QfTVBMAKetB2R89kdfuiumFp7oT7sDzd4oznANmLcKjDHgdY9nSXwV8utGwJccW",
  "key29": "4jRhuBY5mm2jQet629L88V7nwpJ4qBice6CLZbZeT2aKkaLhszm99btgG8MWjvdfik1UqvsNA8rxPYCe4w4rdSPU",
  "key30": "5Sqd8aH9yw23rbq4TVMFVpsKCQbqTj5QgVexeG4hrRjyez7htjj3KRaqcpsP8YxZrLF5u22Z93SzQ3LhKjTEQ9kH",
  "key31": "67SPbzrRxZYUBvX2MiGwYhVAGXbTRkiLwLXVdPCGkB5PssmqCzBVeCC9SiuShXkUEkZfFX98QqpUUuhEfYwwq6b3",
  "key32": "EeGfkry56JGuiJCtUeVXswdhvdwEvV9FNHbbDgTdjbUYXAvR6tucagQtWWGZdodjjcV66hjzzskhTeNqBuDyfXj",
  "key33": "3mexjkRPXS9GYr6WxgcZwWU1wnbo8aeGtahHnUcuTqqM9TsjX51L6cLhWwXtAJCtYk8GL8ouk8fBtiyyvzubPvqV",
  "key34": "DvndYHYNEPbD7EwpGQWPRAbRvcgeZ4jCmd5XXm9MftNAGe14fnPMfJJoRvxRN5BvmpzE9XCrUn3fNqrHrdQnWzp",
  "key35": "3LhLSJLyMNeYLWwL6gtAkPjjtamTqCz5qMUu51FzYxGKozDEM9ZyP4jFiBnQFXrCGrzGGvsEnHzuFWFD6Zdbup8T",
  "key36": "4iv1YALbe6BybXKM9gz9EUNnA9jKb9W6p8e48XG7jYcTNRaShpbhbQWfcM3Xdc6HTxN2ULVx6spcCCgepiujxeCB",
  "key37": "5gcjGSvWyG8Zt4TNakEiie7KpBfoKfaKriH1W59bduGo1usU9RaEPScgqVipNK7E1fsqHggc48jeLRk4g1vQuovx",
  "key38": "f6ZjQUwEFNULeptBwFYUnMPxwZDGzPZqp1ZPuxPJveKChPJubJ2n1qhBAd4XYLMHYNEsYFtJBE45TLL1rRgXSkN",
  "key39": "9NEAa27rRxKJLHp8DNtpR7qr86zUEGDqZKHQkNvA3gSGXgBosMG3F4VvyMJCxqSJgFE8wmPcxZpvMfRctqTFF9f",
  "key40": "57V7REuRCs4A8iCL2ycMAeJVQAq31iKXehhuMLC8g8Axd9DWHbNBkWze3GWAztm5XdmZwmJbL3gNozE9urQsbLBb",
  "key41": "61GQZgkbBH5C367sC8SsFjqkwdZNipH4VnMNToLgzPKZK9a214UEY9JYTpn62jqJvyvmKD4CpCoBy6C3SvfW9Qaw"
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
