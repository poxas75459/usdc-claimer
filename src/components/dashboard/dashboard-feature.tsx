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
    "5pBoHjKkRLVdNKzhxeViA7jyDQtSxdUgdZ2wcAk5Txe2tmrXpSkXRjaae8D4F44Z6veZG5JaL32iXCbPJnMVSu3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziEkd9spFC8gSSYJekqy3EXzEgE5NEryMJd2VXSYCWNm8bHmkiKnqQu9Rmhh6GuF1wukY9NujJUzFbHEMjFdmBJ",
  "key1": "4kGsuqvXSxDGnPDTv9KfBwT8SXY5TL1QWvzkrcPEUxRfqj1kiaEzXRh3ZVkMvwvMWMtrM7QnySX96VZpch7nz6QM",
  "key2": "67XZhkAhTNqEmCDDZLovHgQCvJ8PGUQC1B3jniUc5muqjVTmd7Xeq6Z32wp6g3ws9Vz9aVb3xuMwjE5JYixwmnWN",
  "key3": "2uLrzBm5mh6KRqHwQMbz3DZX1ryz9EsJUvuxhrriLZdRwdBtc4UKYvSpxTHmNJeVPKbsXDDG3JjiXzaoUN3vcvPo",
  "key4": "5DxwX4Wn7qNjocwJXLJBkpF6pkoHbJLaGLszdt3oBcEk4cx7hyQQD5CVtftzQRwVfto8q5iJdMy2bh2FPiXQRSxL",
  "key5": "3nPX8G8FHFbwn4iXYsofowde95A1VU5kG5eVJfJpHtRskocaZ63MfjtumMyKTVBiEY7BFWzj1RpsFU7ijKZJkjJY",
  "key6": "3jDudQytnVr4HooVF8fUy32oHFZFgY6qhHvXXGdt6NDye4BCrdYM9wtouS9nmQRWo6FDjqeMLG68nNbgwdEgTXq3",
  "key7": "5KkvLQPzmxzbBhMxHvWmw7SgnCg6RUxEtpLHs22h1FktWEHGZn6LPvsZNWmjm28X8h1Zmc6c26tccmFVmaKXUAJJ",
  "key8": "3JfLfVuDSdhGSU19L12bVEodzamwvbtxBGdHLW9Pd8ZSRkTQGwQK6DV5mJ8z6FLx7P738G3Ej2TJqcYdoyEoLGTe",
  "key9": "2U7niLhoeewqpVax9VoNbJpoYvTxHMV2vGCWrymFuScVg4NLzn1vDo1xAZtuwykeAr3rWPFE4MjxKwnMDa6wXn1a",
  "key10": "2L1TU61DipWF3v4QcZC2Hce1NjHsKjzoTRFR3Ey8QLAQx4ebjDRFirzjzuRMMpJPVeZQg3PGNwSzH35LTX9w2bji",
  "key11": "3CcUd4ihgGg3KuVqzFkiSrAdErubNeRvzQXh47ka7RbvtPufTZWZfv7c1vSRFNnJjV9qh8JRVtfeq5LpnNJMqrGx",
  "key12": "kLD7DWHm92mQNRh51A88itrVhtjBnmSNfcfFe3LBK7FMqUrh6wsHp5sDxrBE9KgkzxvdmCkfzDL68X49Yit63wb",
  "key13": "3Q4zLrf5tuZSYM2gEz9mipkmeekQ3DnQ6htWedtA2GkTgG9JJ79N7FWwJCWgfh3EBpUoNM382BKE5XVYhSRYa8B2",
  "key14": "j3Y3TgJqCqgXxhseRW5KEAtZuD3ohVoBxWdAa4Vo6TPsieXiEjzz1A8w75KvcPRzMqmr3GW6qg8Gws3TBEgDHKJ",
  "key15": "4NA5Bt5tSToV4nzqwELqqkuSvYHxur4erkssHaUdFL4HLaqQQ9Vg2ZQnVdgKpXCUx7GaxAsAk7R6Wm6bYrFXWSFT",
  "key16": "36goS87GRZwF42Ng82GZhapUzHkD9XUAJ84Ti58f87Z14tDPMcDaS9D9egcVgwzwgQJDXZZ63JtJCMjHvRBA79C1",
  "key17": "3E6oaf2b8EQeyyUX4WP23CG8u5yX8yHTbtjYooGSrxQXSiJu7CkGQRjUbUuSLWMNsKH6M4wuyKJ3nrTTJjb8caWR",
  "key18": "2tK4aThtvNMnrCxPeJE3aeLK4PSxuMVykfMZt61GNnezow4LAHphbUEizbpnfxrrd7ShFuwqhF3AQtYHxFHSMc52",
  "key19": "2kXcSbnyvyyx5NdKN34SGoxegvJECrvGSzAx6iXauY8tYfMNowtumabTDj8DHL2ZNfngzLGauU3nhPLnt9krKvA8",
  "key20": "5r9cyUphvRj9UGdvtMm7ejJw7CmCwVFPR8Bczg4DUAx8gmLoJaSVQbEiYLj6bTFzok4ySfL8joE6LrYzFFKfbnS5",
  "key21": "4ms6kDc75eHqK8KW91DnyVZmVGMyWDmkUzyFnSNRjn7NPKN732FJrXjgSBauXBSfuqC5ECtfgWwEDqHCDtSff52V",
  "key22": "oitihxEWrtfrauf7ckUmUn2tsnxo7e23jsaDsgdsT1GLo3rNwuYmL9cdtwMGnTJWsRTbtYoXfxXfxBF2tSZ3xPF",
  "key23": "4yBLUFc8YNZzJqYkuLwRZ9YUrrQC9i6rqKHmoSvmhof7iixJnZL1vHjipm13B9cfBvWQ17gqEFCaPd1eXW7CtaT6",
  "key24": "vVm7FehTCotLJHV6Bu1weH51UTzMSwY6AUTEVtHH66z9XRKuLLjismGKJnQVdJD1baUoxwB2Ynopw1XjtDyfjJ8",
  "key25": "gKNcw5xeLQ5oGStVKcrL59ZsmctGdHSaEcKTb8mrkPznaxpkU1Z8RszUHzwwPSaQZum5eXFxBrR6QJtRQULtNXa",
  "key26": "4BcA2TZ84bWgteVu3yFhDba2rTdVFvJLry6bEYmjoehKgDg7r9FKgFUbkRNCFfSFywoqRAB6W26zfXYxzsjVn7Sv",
  "key27": "25N5WY7jppwf9zA7ANfurcL7JVUHeiZ9rXeuD9cbQQjqM2VW1jF2mDm6eFRidhz9C3r7AbWX63NHdogCAjPZKN2A",
  "key28": "5etcmemt8QRNRgmvJdLt9jHnpdHMYhLpMmQVobn7cVEP2K8JQjufAdMi93DPzgxm4fyhytoxFdpBGPmkdmEpRQMa",
  "key29": "xiirF96N8Tekb8tmbafFq9xU4QSWT83BJvpgTp4UyCzGJkH5v6pcgixsSdP55n6GjJJgjA2CaEsHcgNYEMV64cH",
  "key30": "5vxdAMSLWjnE3zN4QyWTtTs7SyhUBNoGbjCwQ5915mpcKKyoFMpuFCPbaxbtM23QfbWG39xbYU4YCVDCzMeXY3xQ",
  "key31": "67ArD6Xi8EEs6EJWjkPD7TRXEaDiLqrETbtT2zk4tYXNDMHrEB71BVoMfLH4Xspz28kCeRfGLXBS5qC1QAEk9trX",
  "key32": "5jyq7f4gR5uArygb5WKK5ejkn1C2JtfhA3DmJ7o9p4hqheYdwHDzoFo8gUFiaGgy6icLYh7dk6787YUJNK3DrNvA",
  "key33": "2j9y1jfCUHfL4knpbdCdXQqEEajU8vb4fvLzRsd44eACLUtAMsp2dCh72d9E8sUgtAtiZQMMXpKbnupN3qLCYnfK",
  "key34": "4YX2meVyXTiK3kvL81a4hyrWE19LjBCa88md9GTA1qUPUEZiVpjEWpk9ugUxsTQKW8YuY6u5di6Qhemo1Et3TNyS",
  "key35": "5Q6MWhTdzLPwTwxoqej4pVe6nQ2pQPvLugBRDca1UEb7PePvg1WZNL6K5T4jSrJxs9XBhVRzonmcaarXr1qGNhci",
  "key36": "3anCAqiyTL7ax11j79vb7jJm4dRVBgG5RFQ1sv1BUc5MZzyQvSKJkc2q5gQoJe4AH4bU2otC66hVdYoewU3ndwmu",
  "key37": "2MawJdrq7KWFcbwuTyxoAfXHm1Rt4Wdu1wsDmQ7FngNfXbFrFQanwxuM8fnGRDnDFpMCnRLS2j6q5Csaegsu9Dg2",
  "key38": "35Xz4WaExYnSzyvKR1bkmYx5xNDjDFSjV5uZet4DiPwT1r5heZP3CDcEHJkNGXYGf1wCXdrpn4q58bEHoxfDzYiE",
  "key39": "4N4DLAKFB8SwhBa5rH2jZBL2bMWyx7igxHt5KNJ6RLDDGUcPabAtzSZGG95yb95qUYF8SGn6X9LaB2TxJFXuHHfF",
  "key40": "sE6AZD1AbhWHZfyiY5hd58WMef2A4n1goXywYCEfggcNKB3vESH8PG11ZrsE3rrMSRPWXMjLU18oLU2g3ieoX5C",
  "key41": "5L2PFegmzCcTpqBBqZX6raEUrQZonqrabijnUJVrqFmnNbLPGMxdWNwdDK995Dh4F6zXkkCNEFdU7uySRZRSSvQb",
  "key42": "5EMrc3nRLcVVZXkjXiWaXZz5BXT1CVAy4MM6cLN9qRGWoSKksBUPztKZgqd8oK3WmZwGwLzn1BfXMttX8sy1Lbdi",
  "key43": "39FFz5kLhAX1atyMXb7Qk9sfMQvr86TwPXLEJXkTg62kwFYcBpJ9KBiYDeZSVuyB5BY1XLhTxYAtMumkvDso2uQo",
  "key44": "2wvBPC4xXLSVFf5LeCg1yC5YHKyw6kckhBNSfQS1no3v13ejQZTsqFnWoGpmASgh8ukWp3cj2Rwdk7kWuFXN4afD",
  "key45": "3iiytYDMYigh6PJ1U4GPqouw6tFFA6EGGdoMgpNBQjKdHPSmpwELjKtoQzXYsbXqft9zBGt71GGVcEdDZLfHSx8Y",
  "key46": "2yrfRLHXBfEVVV3ar6VKjcw9FPhqsTgGo23C6uxTmtXhkCwzKTutY3RAiw1UHnCaikpx8hMjixpQvtKBoCdjNh1H",
  "key47": "4eUeGuNCdACQnmaXDx7iG6Xepok4KBLCFk2A7tdYALWqSTZqFH3g7fGM8QPBUDGFEq3EQVfeFNZV92z6QgmXpvYM",
  "key48": "xud6RqKCYX4P6p5UveY2d65J8mXTXQFtcENYhaDU9kRYjBZ5VFFTm9TKNN23p46LizjKob7YwtMRhD89bMRvnKH"
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
