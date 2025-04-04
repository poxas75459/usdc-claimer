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
    "4Pjmato41rV17nLByA96QSYGN5SEtZucWtcEDFdNhPHLjxXz2BZzwsFPd1esvUwZZrtE4sd7pdgkTszdonaCFHXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cLLZtS8FwfdH9ydefHk1HQ2JKCh8nzmAk45W2VgGfLoiF3vDM1XcFtaa75ERDSmSrfcAaMtkEAMrGxM2CgXGGip",
  "key1": "3Q6KP296DypJQFBUoBFyqVSHgUvMZjeax9fftKWqAQFkemvYuCeVFNMUKtWTgepbqLUM3GjW4T6saAR7QacUvmrW",
  "key2": "2gXkvAAiLjqT4mgm7q86BGy5kXJ9j5oPFWDi5PVTL4qpry7iNvRkb7YVkeQNVdditSNpuQcY5FudX9PeL9vWpyGX",
  "key3": "ASn37ZqePKsFSAAdMw8uD1j7muCv6CqKSKwMxPTGYqmMH5zHPqymrjy3GT9PDKkwLHNpznJVdeYeqaPGTCdaeyb",
  "key4": "48t3tCc462HVK5hyBU7tMSFMDxTNSYCwjVYWXPxnHTxCDuh2wrW88tb5d2w5ZSS7uBn1Bg9stBEdMTvxUacsUUuM",
  "key5": "4v1NpVTJRWNBdT3A2vhb2Qn4ft7QZviGTwYRivWvrArTsvLjMvTqBuTanQEopm6jrbZbE117KuJW9GsQNTd4zMik",
  "key6": "5EhiNYb1UDEh9hAfMcAbVH6wAeH42EfAmB9mphPcEVRGqF5wadLeY82wxcVA7CEUCgEzsmWGT41f5JaUE5WMwyVh",
  "key7": "5NkJvGiCD3f82AnahkbR4bj3wo2BJ2eMsz8JunLd4nBKpFP4wt9FqshchZktXf4PsFUH71TVy4khNGhmjLSQdr4X",
  "key8": "5KJsD24XYM83oeEeGNsJX2VaiTTmK73EpCxHQvWdKNR5AqrTLzWyCPLDNoCtZtKxGv8ZiyZeDums8vFDc9fZo4xp",
  "key9": "5U8st13FWqUfRa85acgfeExgMpsphonm6JM4PDhRSjUnetAeK5pQJzXrcCp5Ups4pi1af5qcX1epBvo7yUhDAq5g",
  "key10": "3xEXitPr11JCdRwUSQQfAMGVHbrrmNx1uqt65tKLA45GwKEnLaWKYdqX2Eo2t5Ud7Soeh3xJSjEXTjsjR9Uiyb4W",
  "key11": "3jakDD3WRp5LfSHwF9TSiuHgHAvFbHqVH7nLaRLHL6YSYHNnouMsV9UGhemHyzmKhyes1AFGTbE43LjmuvZaERKj",
  "key12": "5s2e9HmzCfcgVV9WGSgWVPpofgDLxk8yEhv55AwGcpfRPchKQAAeuGik9HsjBXYmZ7iPEiuszMg77adLN7wQDiFG",
  "key13": "2ieyJC3fKaJh6MBppiFhYQgyyr7yrCH9b3Z2ikeJsBYDGx5HCc6U8HEgGFYwidwPNFtNaWqU5pgkHftqThTgdgWL",
  "key14": "2gA1PtAthhTVZHFypnxaLJdPN5izNjih7mYPvzpueMSeELzdR2iGSum9PyWKvhZ5ujhHq2nbxn3VxsJaxf1RcKSe",
  "key15": "3MYVzNR8Kw8NgKVBpeTMVRvND6Bcfof9RV2rFEpVv9UR2dqNPmvaK7WRJgeQXWw65MsSRbjqru5a1G9ewRRCsBSx",
  "key16": "5vmYNcToVPaD7bGtpLmYeXHX45Aez8HWvVBmycJtLzS6uUQsamPfn8vfNmmDM4WPZVNAz6gsPJzN4vb5easWMtQB",
  "key17": "iVixRaRDADZ9ZtjbcQnbvmwkmbeoeEPyMqT1pXx7uaFPKW8vBxTGskc5GcUK14YqJEarWP3RV6BeAM6kzzVdRg2",
  "key18": "3kdESAGfFLzQ4Mvpe3taBGUHRh2gMN1BUwKUQ3RktDnUKXHkig4F3yrimEP6wkt2ighAgnCBodCkuQEbqfEsU9Jt",
  "key19": "4nNdyRdvzGxFkCCBepCUihFk5r4pXL4Zctuh89pp7nxtfETTZ3QM7L6RkQuzZYgGi1HYLAKh5PNCd6GUXTjFduir",
  "key20": "3Fk2Jcb6TWFR7fpHxegiVd479gJfTFxJuxBabu4PtijnjenXWNtXPRtg5aZb41BxvwadJ38jmS3YFvyKXT4w8HmH",
  "key21": "GRoBahD4u4upBuLUVxDG5KFQLR4dWFPF5yU9GAP2iyiy1Z9xcAfUhVyLp3FSgChF3JHPZtqii46JPzaGF4YNrEQ",
  "key22": "2BJ2NFJXT686FFh7cb452YEyHoXmpXP45Tb2fA847Gzh3fnGNtqbdEBTRmQTw1NLdt2FpJRJhQ1P4YGdLiCD9Ufz",
  "key23": "23t4tRsUmdvTUCF41G6R8XyM7LvJSQXAd4joAPGkPodS39D3ajoP6WVaGVnwAw9RhHhXnuysefMC4vnSyfboVR4H",
  "key24": "4VN5YWY9kRExWYkBxcHbonYW3Eht25iMB6YhJj18NAbE8zyuFeTycCAgKVJXoq7tRDFywT9hxAeN4Lsgp3zqSEB9",
  "key25": "oZakb5XokkppTsuHoe8g1udEzDLdP5RMp2Q8KTVzawhTeLGoWvZwT9Pc6MwYo4dZ69RdV4Psp4CsHxfj8ajTHZn",
  "key26": "4SwPML7k4YsaneuweqH2ogVkQ3xwhoQTEuDTt4QwXpx44m779RHM4Jo8i49qA4jH6HSDpwBeg1x8sWYyWWPYhxro",
  "key27": "5pFQNJ7B3b959WYJASycy4YHehQ2wCqTSDUx6j2zA9A9uQXVzQR3EwocLfDP3qdhwNJwvTvXsdDmMxeuJqPstmKW",
  "key28": "44zpb2ih6RG84v78MjoxW29Mkpi8HF4ESaycAQ3deteugAcUYZEQUmWekE11ULDfxuio2p915T9r5ZBEAc5DCCpW",
  "key29": "V1qHqvz32SQE9x8xiTAFTET48993rg58KKPLRW1UY7waSo6XKLafwry1nZR6dzto1b8VWmtSrKm6dZKhUMD3wGV",
  "key30": "T3xchr6cGtNchkUTbwsJ3Sr4mA1qLGotGJ5ryEDzCP31f4oQ1EThtacqWYSh5xzAjUDrwZ2GdzmtJPwsTcfHBnH",
  "key31": "4mCkPoMj92BGP2ui612bed4Tx7h9Ggz9AGjDsyKMJyh3dWvJcravpyLo5BhSZRRJTuVNcoypNABo8NvRYyuQmAT3",
  "key32": "54tF9jiaRjCAJnSJDyymqFh2xbsb4TiZXKdNQoWmiDYg4YdRayhEBhK1HmqEXsnayzpRQNfzx8yxmi29Nj3NX46i",
  "key33": "2tVzLBRsBBdK9AaDVbgJoLBmuh3PjkvFsBZcf35aq3XqZYwE7tU5mhRByw7uBuZpHp5Fom1hkFRkvAWCAeAc1TeE",
  "key34": "fNxhw4ZLK3RxiSoTuwBXaMPRhYnJ1aL6YBUuuLYBtDgDrUk9DJujR3cGAg3NB8xNe8FxT5cxUkWUzqX8VP1nteF",
  "key35": "2yTiwxFMe8ipxK5ydMrbzZskFcB8pfRriqBfJBXQ2LTsCN1RFFbD1amYG4dq58TiFafZUcptZvwd4AWqY3nCLkBk",
  "key36": "2ABcPLdTcwmKeekggimtU1seGmChbzaYrh7w5X1nHb6oeqnRCL8YCDaBPvotECGXS2gDf8ZnxwnfXm92poCCv7b2",
  "key37": "5iFCo7YdYaXxmE45CGM6zsnnvX4e7dCmjVpYm82P9yoFBtfWrqCkWc9j6XfePDfeJ1CKrGt2Gbf7RD1EUCbafGvZ",
  "key38": "4Vs7uufBFB8XhugSXG5xczaZFVERcKYNAFSGSjiVjY7nNixAKVaxRfFFKsLYjZv5taevxMcizbXYP6ENLyqWA4b",
  "key39": "ifWjip5U35gEEJAHjUDfGQ9o4Kwuym9fc7DuSFvgeuHtiadepaJcLBCSQf4vNpvG6anrK5y66oFZN7dvGZyjs7X",
  "key40": "2pEgJK4vDR54uNsKS7kn8X7PsQ5rdYmecH1HdoYVJSRVwoMn9efp6c8gtuucvLHudgB6PN42v5W3SDr1UozobWGP",
  "key41": "45ubgAAcBU3PHfxNBkSNCFGi1mxVpfQN2rSvS3opncqFccC4M2jRnMx7dqNERQ5WAmmtd6XehDyVjjfqw9ZAuTHG",
  "key42": "2jHSnzxTrHaFusWEjyvUuy5hvLtDtYaA4HDRvuGMvu6W7m5MLxgzssVRStLCnAwHJ2C2wy2A9E8iStobqAkeA7sZ",
  "key43": "2krNPpj9zCpm27nYYwYLNrNPkJYfndgTzrRoLEGMQjxCbVUwsNTaiGmPDyp3fRkTiGf6GczkSWyJB3GLVVorcQuk",
  "key44": "3KRHhiJhP9LFdQLeNKPzQXKxwoaEK3eByJuLtor5mYwFYhjxjFEhVig61GjStU55DsVSEkH5PRmBQHtTWso9iLcV"
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
