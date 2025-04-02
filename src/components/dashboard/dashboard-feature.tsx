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
    "2NPZGZmxgZkJv8L4P87msmrpNVdLeEZBRqEtN6UnmdU6uQ3fdUHiHb1mpvRbarfcKVcptGmUoH3qfXJ5EnYGNqfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGgEfk1Y5qEKGPx1yf286g8BgNcymRbxJn386ySUZGcno5nfFzkyF3ZjkrLvwEcZ3oVRm46fjUo5omWB6bsa653",
  "key1": "5S4KXdoViWry1gu33c5bcVFuZ1n2NvPJdTEbgsxMEx2ts3c77K6jkJyvge8iEmfKLFCSNmu7am7oogKV7zR94gVh",
  "key2": "48WUTELjNhSZJvDuZphhNwcqVWB1C4ufGCSKHtaqiTxSs6BSM6xyhJnTyDtu5j2tgE3nsvRVscAFdK8m92rCt5ZA",
  "key3": "38ea9DFCUycNbRX2Sb1FdNxgea4pdiXL5MbGKTYcHAyCXtq6iLUSbTdB1wwD72nF4HbvxPsFNPDj9yqB42fzRaNF",
  "key4": "3zQq2doWztwCz7Pk6t5iRMBe9cDziRoRFRQVfYQGgtEbTHxGi3BEEhGxB2g5pitn6BVmd69ayGqjWcT2XvYQG8Wr",
  "key5": "4PwVGxvqY5pyjCmHbodCoEsoLMhWv5BYxCMJ4xNLw5p4yc5r8bUoLdJKCsqfSH3MyYNNGpBYxHseojVFxh86sN3n",
  "key6": "5cFsTfYhoi9ehdTHFt2iugdr15eTtDKNQdzSUErK1K9vatdx9j3miD7n9F8W7Mx5URCp8AFCUtYKeZMCBA1dMJ68",
  "key7": "66stBnT29M8W8icVKxpHzZxoC2Kdu6iXJda8NK56yb3YqFyiQET8ZcgJRfud2UkUPXtgqJomAQkPp6tgp4fuFHRP",
  "key8": "4kd5ZXH4iW65jpWURYjeXhR6tJric2j9KK2DQLrLrDKQk3Pf1iuny3mBtDGPhqKb3pHfA2qgMHEEuQ9eyNpYc6ws",
  "key9": "5LDdd9yzNi69P9Vw84ZbqJBjRpPKUVz3YiWXdbcB1SDswkiyLHtEf5PZMG31CXGEisvRgpmj2mFJ1EsCQVKWR6BZ",
  "key10": "5wW8pF2kEdU1J3SAFWa9rwjFpQJzvTNo7HtGGrc3qG4ofyt4mDbiVoEQRtaJ2p4st4U9XgyzdtKJDadxAK58KpBw",
  "key11": "KD7bt3YmSszwVJiT2poBN2qjmSNWbkTQGUcQ69a4GF77kGoG92qjRDbHjtYkH6GUETjvhw9wRHbQWJU85PcXRhr",
  "key12": "31vTPYzw1wwY9NDhXwHyg1iYCCyJRQq3sQaCUUMrHWVz6DcqvTBPcZQGDCdptKd1YYTahYLA774ies52Z4fUf73G",
  "key13": "2ooce43g7CNKc6z3Lqyqw8KNxngexQ85E6XLd4LiGWZm9CBkQFAsiwoPG7gwfLiW9tr35Sk8DzFqkuC1GNB42wcV",
  "key14": "3oZPA8eYySiBEJHqnECarT3tCnhyPaENVVcVeZZt85UUsP7jtQyCtdBwKHqWnpM8rzK17amSDZkH48v4qRxsqiHJ",
  "key15": "3bQ6BHZoYh46Mnt7FZUEVXowJ9jqdzctEEukH9Z71qr9iSbyqwJALBtUyqmb2dtsBbPrn82iBWzSf8UoUzA3SLBn",
  "key16": "5kKuCRTKzGfpa9amsy6tih6k5361Gny8QFJFaDSCUuh3EDxptXdjNBEgf6bcbXnYc5EsRmMfXYYBUUfBdRLj47XR",
  "key17": "5dakn67jAXVwtVL6a9mBF1a6K9Vg3ww8MGk3FKGpepYjxii7s5qShNV9vPgJmcYVrh9SxwnvN4rnVhNyrZTv7v7i",
  "key18": "4qXRQ6uNac8zX67rosAz3ESjoQFB4A7XHPJwwTGD39Db3Vm3HCumAkvHUqRF1DJc5kPkGbk5QmMk5Vx8ZPAteSVg",
  "key19": "5iqZ22zNeZ7J3KaaHwDyiMk8kDtAJurN8rNMLdjY7DLYgAsarJiniiUmrWJ4aJ1JctdqwjyLUu1D9jcoEJ6YDN4o",
  "key20": "39fLYMsTo2pu4H5cjrNobNXZesw69nsyKmxp2P9VfBFPcinjMAjQrz6tGjQP3zWyu47nomgC2tW6gGVQmUGD6Jn3",
  "key21": "TPpztvFdgr6MRU2yxKvMZ4raThcdphFadeA4JTXVsaASbngsijQUW33TUVkwdJBkj88Bi4GKdzegh8vmB2ztiUb",
  "key22": "2G7aUM64vM6BmdFMsQDUu8PJar1pGSZLqwdiWHpQBEB6AZvd2bBpBWpgQk1P1tPZaDyYs8ZTgdTcmSqYNcVBGRE1",
  "key23": "3kMfpyaDS7EtPZNK7eBPfJuQdGxBAgFjaWFNp5VV74hSkQBkogLjNrnnezR6RKKUG8hzetjizbsSMPcrNbWCXWXZ",
  "key24": "3byyHXrVBnDR66zsTJbLj33AGCePmxAKF2sijeqXnWP8AHWSMiUQprMeLMkNJV8YzEFLBoXxDWinr4W3tqR5Mk6a",
  "key25": "5cgVnCCLTU73NM1biFjdxXJQ95HijqFpyt3yVj7ouz2ektPuwoFchafmmg1dYwfBqPZveMLW8iy5MD25KPmaAKDj",
  "key26": "myZMi5m2LDc5uzwVmBAD1oskrT6dQjQHWKcRZeZR3Supap4tt4uPgfcJVwN9WtzdjgSSfqrAWXvbrnDjVLEiP3S",
  "key27": "38SqeJbbFtH5jbw6Syk3G55w3xcDt43wGDpoPaGN1PXsKc7zHGmAGhXyPD3HMjGbyVYwE3bknoyaim4oZmW3GUKF",
  "key28": "2zNjVhSfH9oPnu3Vw86vETVBnHvzPP3KjpDW8nipZM16XkwBKYq3NiaRp3Z65NcbGND4pbq113tAUds5WAQixPkh",
  "key29": "v8vacFB4gJkX72X9kJMG1axS1exPSw78CdiCB7eqnZiXpmC2qeLpSWcM2VfosFxZnmRjoiF4RWL4FjpV3yfA54P",
  "key30": "E3VKjFmFNkEp8X7MymdvuKGKtxRLn4aiUfwKRkpeKcsXvgvD76p8rD3bsERyou1NRehxzx8gLDhzQwDc4BVtL3L",
  "key31": "3tfSvXLPL3SB29X4ct8cJfZNdMttUhWVc6asai8YwwC9V3wpgV9UDLFa9dua4gWtWjqU5eFAQ1PAVpgXQYXKAcr4",
  "key32": "3Vk4fJeJCzTBo6wmadyXtCtoTPPemiX1ZbGXpgh42gxBv8z1z5UXsavVg59Bi4iRgi18EpDvuwR7g78L3Bx46o1T",
  "key33": "23TvRtSeuTsqiwEXvXd9vHqvPT8sAiKtnFc412tSbScgLAdFD9FnaqgRPjasrZdHZmsa9hG4qAqLmBuD4vhYKDoD",
  "key34": "3UdjzFCtABhy3ZoAmsKcNvtJR9d7edCtaC4cvGMLyDdnboTVpYRyN25u5mZLyVEX8pGGmBLgyMYD6jAuRYuMqmSj",
  "key35": "vZVb7Y49EsHT9s4H974QHQ6XTeArvene7rZ8cgXdcRXv4rayVZqmcR4hRzrive9r8RXi74FyokC9nVGtXWnh679",
  "key36": "mnDasx8iSKEtqmGdjmWDiFNZ18VsyFvygzMwwGT5mSomsumLULVMGxJSRTyYf11z5ShfhZ1bFATcQiBDcRHnnvf",
  "key37": "4Ee3rMcsF21nqFQeQCGBJuUbBXuqJkA3gV6nnyeJx2temNbuWxsk2duAoo8GJHp6MfkGETxZWYBwpNdiP9iNZv6m",
  "key38": "4buTa9qSHLx5h48J8SiPKyWhVwKpZVUDbXCsX4mTWR5g7akvJmd6Tn9KAy1WeH8z7GEUhstKx8umQXBJHRB93Qru",
  "key39": "2L21QG2LLZhs8xdCo9zupgomJBB8NUcDvmxzssypPt5mXgBnJLKCdY5wnJ2bAn2buXyqQLUbqWUZohS63FLu6maj",
  "key40": "3KSQjpG9zpcPLvqvat7TD2o752zKtPMvArksaWALN7GtEH66gFxQd3rJ5GVy7GAsfpSz4dV3c96Qsdf89QqJi9j4",
  "key41": "4Q6P5PSGTMFmZouuEs36hd98iCR4HPpTr91MHAozpiaZaannrc4SbXaGt6Cd8sUHArSDSoPas3Scq4GX5psPPtj9",
  "key42": "4fBMvdRAuXd8AsJtuHBCD8Qa9dNUojRgA48ZA954kYejLsn1fyWMxNT2LzkZLMnjU9TboZ8sBAd65FV4AATkZvRH",
  "key43": "374gJ52mVHEECbMtxhmg9G9keUDgzth3ULFgXj7GULWRdZTUpaCkjNrYWnAzMrnE935M4vu8YDcu5P7Qn98v2z4x",
  "key44": "2VP7UspfAwFgorGjofRSRgTbre7E5grJ6ykGPbd11saKNfqmEWWLbbyh9fEBfEsnMy89aDKw59sCF3J1v71AzEyR",
  "key45": "3J2ikB3sRpwEj5BSADanZZgrAnuXG9xvXQdeBdZjRgiJfgAz5JvmU76z6WXbRBmggf7ZnipCZV76w71fvEWFSMfJ",
  "key46": "2MfPjXe1gDk1NJZxokpTHPpCHMRYwPX1AVwxBmjHuejUzWpD2x13NQioXxPMi4559rr7cxY33829guYhjWkoqdn3",
  "key47": "3Uot6BUYeVZAyRwr8wruscHmFAEC59CsG1MDJVwTyaMTobdy1axekNG7Vy6GHBxw5zttaBx2umXLoaWCnFqhzNSG"
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
