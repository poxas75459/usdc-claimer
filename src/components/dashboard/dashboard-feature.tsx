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
    "FpUDVHtd3LKFkkRgCTBGdqookz4qky3C29u3CMVd18G1YKEGSo8hDnqT68oTiTGtzkwekNTcnjVMCpQExKhgDVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHjvsyk6GJaggYePTymhdvgwS3cXmRDUg3gKSbjVz4LxCxCGFbpz7mQs51FbpvvjWkbhTxCJeJFYZxZRdVxzeri",
  "key1": "27ZN2pAkDiX1jm8yuEXd3qu6sMMRbV8MoKsmBW3QNccDJykNQPot18w77KwV3qwrwxSLreqwgXKXghFWrmBWGX1g",
  "key2": "fS9Y6ffHbaXi3GK4wDK9hhkVFA9AiakUBenN4hb1mxYs144hNu79bAkXFHttmayPBH6jVUk9yDb6XJ1UYXiz4H9",
  "key3": "3bZkSxn43JiPBinJUF3TgrUa92VrsPCXw2rbmcnUALt2KcWg64Ru6K7AbrxWK5wvcjoezHjFxJEL5NLRqmBwXVGJ",
  "key4": "28kBtjYLqhVEmvAbor9HeKMTQywQti6r5vKbk3WSxGFdFrQpbrxGPBKLKBPfwzyDZU7D3LH7o2BZ7U76XFVsTGxk",
  "key5": "3S2ntfAkXLF2oe7xyuugA4pGTFw4MZuzfFiFA9RygqNrXWciThahGibRZ7VBFaqkqwejpAHVJfY6A4vY9mkcnJNJ",
  "key6": "28UkWVEMikXkEiHikKY7N6HXqCpsn9U3Y1EYCBKjqbcjzmyAcGUAJYchgouaNbcmxqLADf9ovcxc8rdDvf6bTMDD",
  "key7": "4zXeAQjRPjQooMshoGGb8teabsYZNrKsTSGFGJBJXanXjtHfgUTLhUB7qvMKkXgn7DaNadWHbt232CtUN27thVGD",
  "key8": "46sV8uReR9w6uNJnfdyZXjQbgDcZydwwDeMmukw193BVr2RmVkfp131VAXqM3WSrAzKoDkKJw4gZTi6V83Ct4pxX",
  "key9": "562n1pTKR5zZihcCr59ZetDErwaFbiJ3PJQqDp1JPKngsmRWRZ4ufRs2z1pMKLbrWjARtK7yy8uc23McxVxKbJRq",
  "key10": "67RKz79pb3XA8Vuj4jeqadiA92hxzipC2RpR8E7qZMiaRiYAqVFaXsUbejrvL62gj5SQXodhqG5ZEqwDbj6eXTUZ",
  "key11": "2bNBcwy34sW1VNGt6ccFXKS9PhAZgampbEczJuTJHLu4G2aTVPmx9MAWscJ8ahoHSSDSZoJfRHbWgHTCVG4An4uQ",
  "key12": "3CxDmDzH5dk2W8V8743g3s67AYfwCAAHgHMNcH3eQwegrGeEqGhxBSHh1zVNSFpNDjn5EDYWpSfRh51TpVjhqyRD",
  "key13": "4JPnd69VRaArAy2Hfp4CcZ7k7kMbCdK5Sf5HXhTNWof68oQJvHeF6gpifxse5XsrEtgwGb94JZEnRP4HFZ7sMbEf",
  "key14": "2eWyN98UDHM4kEzUS2PHH1AfmZ79GvAhXV9eRGCTcNwi3GParPhBbwZGc8xDoFnnmQfzkb8iPtgdBtQgKBTjKStG",
  "key15": "crkTULcwvApddRPc5UtUp7WnXPoXfjJo8x3MW7uZBarzg8Fy3AWx4CmWUVorNPvVjmPQZBcJ68KVFHBRkbUK2bX",
  "key16": "28qCZvYExz3GCoT1YtvK2RvsLq9HiBmQkQgjjkg8q98yBeQgmmSXHVDVrD2ayPn8hjjPVrUyNyvLcLfzMEwzPLed",
  "key17": "5G7LcWCuPbntABcrpiNaa9Fu74yWucXhXqGKdN4Vb2MdQXqJLdnBCWfZXGVmni92SfeNCeqXAciSXP3XBjvfSJkV",
  "key18": "2NGr3jCavABdwhhxk31aAXCRWQsThwAizg4jh9JXJUuHVUPHqcv1M2jxm9Y7ARJC1JG4RgWA5Qwm3W4gjWK3hJCc",
  "key19": "Q8X8NZvGov2yFGhc8zdJv1uhtr9u3EwrNa4wnh6SvHkvMqEkyAw1eXeif1dNSoW32YqbV5CJhrZYdM7ci2zgaKQ",
  "key20": "3M6zKBGsKCQdHgLahswZaBdBEGTaRfDi6hGMc279tN9nxvKmezWSmnd6LUAAVvjXShRuyS5syRfXzKQPc3NKDkqt",
  "key21": "67YDfYNi3rpbPWcmuL1VkM4KzZKdgYdbcsyzDEkmVLtDborTMjA8gLKF2GZqfRD7bE36jsR6HKcovocNU5xw2rfg",
  "key22": "27UeVZLKmq7o2jJrc3fZbuyFgtsaBvLVsSjSmdqWhdtqntQ8kTnLmMmSunQLbSsVUVp5pqdLD1KUz3nzoKBgsKNT",
  "key23": "oc58EfxENtCDCyFKtJU9Tb7ZfrDdWmeEW1gNrEVS4HATvq6xHafcUGAYecwXU1KgX5Cip9UJPP6eGiGVJ1z2NQt",
  "key24": "62A9Rm9kQYP2aWyostu3ejebZTizmo6vRMSMEgxBa3RXtU5MKMhHmG1pUtjKVN41f3Nhw2r3wY4KJMeM1wc6ceYE",
  "key25": "4NjvcuthfbsVETvBVcSCpBz369HSUixxsHg8pfTadtum1cpcTJA48wFKBTRu8aHPguoRH8yZrJ1rWx9BJDCCXRxh",
  "key26": "3a7f8JYHDL7GiGhVCx4ugo4LELDT8HKMYe1JUJxnh2iSqCNz72aDPwsvR56azjHx1T9Lz2Rx4NGrN4AacZr7xDMq",
  "key27": "32D45XyvkxsKL6tcmsMcb7e8Du3XC9YgVAigUAnZPYe7tXTTyLjzmf3tWotsGybvHstr3Y39ffd21kXziA6bPfqb",
  "key28": "26PGYRkzTHDKLij9ki2TRVVCwX3abiyHtfdt64UCcLtegmsGdLYZMbX49R6D3jbDP3Mgk1Z62684Qdkfr8fMYFBQ",
  "key29": "z8u5ahYgkfHiLtVLFBD4gmkHP1c9cPL8Z76drQ8sUw6TwnkuDmTNYAj9hFMfX6GxkfSibgC6RrefoQdGEMToRUn",
  "key30": "1fxJJxC2icq33n3Pm1W9Y1QPMcohBYNYRBqVChBsKboetHrugfG1YpF4PQgZ1ZayvjAVYjAvGRAajT4uzM3VnM7",
  "key31": "4fBAj1Kv79HTiS1ojTsVyN82maQ7ohG91bD5A2QUJNyZCk6PHhk17d4PbLcseGmiaz3qnkPYVVv1qM9YbVtrNC5E",
  "key32": "2fMKirM1LG6aevHr1RD7zFCkzvaepjU8FTLVEGZ3DoC9kg9mXuP5dP6tpXeqGVCkdtKUZiscstVrpMVhvLyxSyA",
  "key33": "4wMNhPH94t8Z9trdbeDFBxSozocG3zj7JL5ZtAP1j39sFe2BPT1vSAXQnUahaUaREkCyy4Eh9KA5LKAu1PCDA42j",
  "key34": "9yK9tqMLGuQ5vFnyexY4foTXwP6QshAZqQn9rvQNaU5znVxyKimi2mSfHNpdaauY23ahNF5sPZ9devS1N5B5Pzm",
  "key35": "3vXof6ZZoKVYiaw1hnyjyLY65GCDLZA2NjC1CX1zFMvSawCh6AEH6szMuXLr8Mm8wwNamRgAq1YLojWRMNLDh1tK",
  "key36": "26nbvpX2dg69a71FcxFkaxxm6f5LVFv9geFctaTBWpx7TAxzLDPKAU4zpPrPLkiPSpnpR17jsd5UL42RP5o9BwSV",
  "key37": "3xJzQhhPmdtjurFRgTYkVcnkLwEyUSL9JW5BtqTMBPQWGpiUdNveXKHnCxghcX2GQgeGXAi93tHGuuk4KYU1ENDv",
  "key38": "5zmqKeexz4tetRmepH9XfpDGFJVZ7LQ6x5xEfKpA5defFozYp9YaoYWyq4x2M6ePGF5TA5ARAVatKaVDJ1wxxcYg",
  "key39": "3fbZ1ARCf9EoHbssQtFw4tS8UkUJ3UTy6JWStfYCUDaF9N1GvAJ31qXz1nsgxmubdZzrgdMqjDwV1ewxEzPDwWj5"
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
