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
    "36V6aUG5FmjpDbRTtjm9z3u6AUvnPeHE1Gh6eDkxMEX4yFSRUJmXFZQWvo2gFmQJoMdzwAY3zjuddG1Gg4iN91mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gK3cHEFjLqJGh1XfVRQoqbstRX6BRR7Wwx2ioTnyBvwkca4n9Wgd9fRkwTudj14yrn8KLweRBMbeZBfMNy1ZHjR",
  "key1": "2nzeByNL45bWJoT8M4aueVixDS263j8JMgesdNne5Aeh436BqTyvKicL697HuASbuajyNM7htwhT19qD3WbUQ1zY",
  "key2": "5hEXYxoiLRMH4VhEduupsYyKLmvCVmUs2g5D5BD4dVnuVSL5wSV8Fd76dXw2qEVSnhLY6m2waf5cWSJAb9yyByqb",
  "key3": "3nusPUKW68pW1CVahwEWAbDmDNzMo4VtxPzaygmqz9tLgFJFobC67Fx5TMRexyCDmez8rFsFevuNmTYzyiDGbimJ",
  "key4": "2vw6XVL7HRGNvzNVurf5YaarKuxJK8CR4NdLMnmiUA8KBrrZk2GLYwfQJemiktuVoycZy6xW4YW7mZdT1o2TcZ7B",
  "key5": "5zgKnkS2Dtp9umTLQZS5VddQyZD56Mk2HazHBRTB51AQ3LX5zjnZiCpkUK2qRV5u7BG5B8vxDhqTuUZeqYwhuBHw",
  "key6": "5JgsHsa92vuqdnmCVYDTrFFVBACiaphTod3qtHKm2c1Dcd8MZUk6FhX2ZM1m2jCciLLe2yyye8ybo2N3wQjz5Ud5",
  "key7": "5gSc6k2yruh22bxmeFebrFhkxJCiKBrGWKzBE9ucqxVdyX4muYaXh3BDx16pAsmf3jSDhdsrufRFVcjCYkmbAuFY",
  "key8": "4UkzQ4nHtq61rTK67iDkZaj7TDKdaTfmW4ewCisyXj14bV24fXnEHrDZMJ4gpaXMQHiKsVkFCdd3jRzgmK5qBFzx",
  "key9": "3M4C51Q1iabijLEHZynTVa5CGV792gUEWkEXqHXiELNWxsoYK1TuMGhXqSSiRTGg4Va2RLtR6DLnwj1Q61gfpKhc",
  "key10": "5BaAVziikzhvHMFUTRE5r6jVxpiED94Fu3ZAZ7PGK7ptzmyZy712TSfLcGGZEnXNL8Qjg8SS4LopotTUXKpWHPG7",
  "key11": "3Kws2hHgsJYZ6xiTDTzUnHD9Cb79wN1X9WL1J5nPSjrTqJr7pFMp81DBaVrm1GoizAmTDRvrMUmEN3xT49VkFCPD",
  "key12": "4wXVCMC4zTwT1MC4sy5WWZo1oNR1JrEqkVAxoesDjAwjpXSCne3yAz1y7VX2UXBUu8YZq8NzKMvoQ5u3Z2pVTxvk",
  "key13": "3fAUE7JU36o3tpU6GyorUq8TytvB8qbpQzcPPtFQW1zMTq3E9qcrwurHFb9v64qmVsRc4CJScyFmAFgSES75ZfFz",
  "key14": "3xHab89gMpbPnp3uvA5QL9gH4QDjmXApE4uQqCfdVCuUqRHiNbdQFPZybSDnZY6xstYnsEMtD5yKtRQWUENHesQM",
  "key15": "3y9NN9HeS4nB55pJ17nJRJijR2euvQ9HZ8ZBA3UgzxicjZdtCQgGx6kRPkwvuYeqsDk2KV1CPnKfk8KBfgrvXpbE",
  "key16": "37Rcx3C7247i8bZx1nhjHPBdWK8A2zkUfnoVCp4ELwh9kzLFWXFMMdoh6z18UQ2jsaWHWBG7cXPeeeUed7sQJmX4",
  "key17": "2MjAciAtJR7Tasw5RVXdng9bhbvtAtkwPEcQ7Vwi5G9faCCaQ2ag7fQjH2ciiSDQSMKt68nWT9v3ZvuPD3ngJ1od",
  "key18": "3AEkToQSHEDVgr94e5Tw9df3WLK1KwNUTNxxzcwQGGYyYqWjFJWj7dFhYgCCteZNqU2QyGf7UUGwVRZir95CpnwP",
  "key19": "3sQszgu8cfsVuPd7MR4fxMqXCL7HB3gDRbUfSMLfFigKmDq4tJcosSK85D9eGxkkwWDz9twaxeufGCZsuimgt3Az",
  "key20": "4WahY4LccdBDKBkBjSz66fyug73Nq4YuDvuiHau95CB6UDgUv2q69xrweGsRUijTjnTY8QkFFJjYQ6xcPDXxUz1j",
  "key21": "5gGGVVGA7J7EkWFpdUTUA4tbwSJTDBkiETLRRHzaRztnojjZ3RkcZF2TQnzMA23mzSdJLn7n8zJuT9WRY36eKSAZ",
  "key22": "D6DkkpmmKjUKhtxXDfS4kcTK5wgkenbbdKXK6VHWWSU9ichjKUAfX1bzDYUB9wQFckC3WeeAtxMgzqeupiGijUe",
  "key23": "2ZbrCTppipXK1cegpu2KEMeTWGLA6fAY8qUCTvj8VUJKFrrbBTDjxaCP8T5pLGbeeAuSgNzLbSKzj5em1tysaB7f",
  "key24": "ioWo4JHcfxEAZFoNPGPKUp7QFi8umSenvYkHatZSvGCUpouLWfZjWmrGnB19pZQezXbKpSXUTa7HV5StbzEg2bL",
  "key25": "5txUbUAbcSR3fYeSNjkTaSj9Sb32a3k8VVGYo327kA6dgvqf3nSfvineeNdfrrc6wD7u5UWhWnnEYQ4iLQCRjunf",
  "key26": "5PLEmW4F7NiVamNAXZirnzjbUvNbwYee3RnyM5HPkYF6jqu8HwM9Tf3rSbhfxMgMHvgoZe7s5Utyd6QdSxvBcs1Q",
  "key27": "3Sbd9hGYsXESiJEeSc83FQaSvwcfZtQHENFfRL8PEmcxJuN4tpngmUxUWMsRZHivcHtwNeyYdcgYP3smy1DyuY6y",
  "key28": "3nwB1JT8EYdpMNRCxefLgjgQAa9wD5hegEPNgtJxWZYPddt9RygAnXGoS74GW7ij3bcG9BzWNMC2DqoTsGhbJPZ",
  "key29": "2V1nHN5JuT1QpdhrYFvKfhzoPpigQohvpxupSPjTu88rRCAF5KXRT1MWnmvADEyhHdoYpu1He4Hx2EH8gRWjfTMW",
  "key30": "4uv5xyzA4Nranr5dBrLxCnp7rUc5pP5ffFiyw9CDmcRykmwkAwZ1RR1ynQzUt6cguQXX8Y6UVvhzTJtVhuM1s3vL",
  "key31": "3mv1sMfajjv5rxWsuT5EN7faj2u6HP3d9CQXXjWkLQNRUEnYsiaF16sXrvjVHcTLE4TVomQFsdSvkjTWNm7oHpfZ",
  "key32": "5arNaLgtPxBFMKFcyS9kCQh8br5bexK3aK39teKKZEo38DLK4nbNXURAN7DRTDptdgVDAs87DXok2WXcyAQ6ZM46",
  "key33": "5rmTwACDcQTq3njACjEZ27LyxnRuorynZa2i1v36trgVRt2VLXSHrGK2Hv49pVSKcqiPFmQPE9xE53t3huLRUCxd",
  "key34": "3cnKzvPxzaFdkYeQSeLkBFSj4oWVndsm7Lc9TcSht1DrL6uF9VM5eJqv8XXKZterdCWRKMKcjGq6hhpEyfJ1p6rZ",
  "key35": "3bM5Z66b3eaSj5fuFFsZ9iHQjfbPsKbmUP8AAoB44jSVeKW8gWpx1NPeyz7YQTSXbGE4jg6JijmRixJZB2jg4WCQ",
  "key36": "3emRqcK7N1qE7kjq16RnxpFKLWDqUZZZF7vNsDjDUGqPnkdRYYz1cGRrj8NZ6ZbPn8gnjwmU7v6DfwYomNUNjyGY",
  "key37": "2muEoWTqnkmtSuUegMoUgwaixLjqMYCFNfgSsNwh3JdYQZvMTdBpRWxGM388YUrLECtcCp4Yj5jDGCsXTED9HXLQ",
  "key38": "5zFSemmUFKT1q8ijrz9KG81pYvzpDXNq3NV74mc4shwYx7t6q6fopYV9qnH5sQK87speQwURyWv8Dgg3dwEApzFR",
  "key39": "aXSgYks9FD1EfryWpecAPKGd5ecMgJX2nsCeYxSHtb4ZiRy9dVQd76jP9SeFN5dZGtPCbK7U4MxJin48pRC5cUZ",
  "key40": "83xQBNkVXZTUgprBdonjzchsmz9gMf3C7kxujNNSg5LcANYEe8UapQffCTi9VWHdLTK7WBDmSSCQu3ESLtEPM4K",
  "key41": "CAUA2dZHccDdsZx7yJAvTSgAYyczeWwZm4agJjituaKABdQB5hnaF5nBgtyqrRy81bYQAvM2u6jxuYv5no9RLGx",
  "key42": "3mGqTMEgzPGvtU8oKeKVkRQ1rp73tZs7RfwBTv5dJccSzVkLJEWuGHL4Z9R46sAyvVvT3wWV9Ja5bR9fmKauWiZH",
  "key43": "4Ybb5i7viFMKMfD6rER77Ubc9Evc7y29q6uSYURXdwx61C5L1NUiQ4LmS28sW5XX8dSTDoGtcuAhqA53cFV3m3DV",
  "key44": "5ANt2wx8kcS6KNZzYpNTUN63SeAp6EH98u54z4Xd8rQoVsaUwq5E5Xt2QpJ7MGPgWmKqh2ybcGJQH4Eavs7Ac95d",
  "key45": "3SBJbv9qj4cFLHBVEoSxzavKtUreU1fAgqpaSXyd4EEadokgELBkhyY7ww8Gav4D57D8qk9MZ7ERxDbL6Kx79wy9",
  "key46": "45BU3RsXthmNkRNokoBiWBJQACm4DPWRGuR1aL1eAtjun7ep6zn5HY4pZvuXjySJ33atS1dDxeekJAXVXY3t3DG8",
  "key47": "4b4or2ycvzrMDMGQBj7v9x4Zz5RDfsFX3rn4cWN88ApQRkU9xfaFSbjAtoHKiaBqkTzR3QuQYHeRxtWh4wheSBWq"
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
