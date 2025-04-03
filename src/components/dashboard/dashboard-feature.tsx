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
    "593NaxBdNTPUjjMeWxraPWHD9yBqiURzFBnXggxXJ8gQrQUGM3GWu2twKpRvRvyzofkgVkMxGpbBimfzYpPj5zwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsXaisBxnjoXSqQPyWJxafuhA6ZwWVsn2Sgzf3QLJdUcGoinVoMduGj5DwC5cMg98AQbHoUXoQRN3TgGN8HXFG5",
  "key1": "2jiFRqReGsfdYbNaqdnyf3X5oeLNvtierTbVC3ustToqkddK28eCZkJJKKjoEJKCmrHQEe7JJX4P3hjRPrgowGxv",
  "key2": "2jtVPuAZrXsH9qPLcWB4sT1x5tcVXnX8RaQLigA3SQ8eWLZeJH4dnzwy5tzRQGkmKyFYzKdT11bjG9Ycxy784xxM",
  "key3": "if2ppgqULt9CRgnn5WX5bkRoRhJ6Y251wuHTJnzzX1ukuYwLzUpTvtadYo5eKWtsieYUFt3feUYccmVJAcvxrqi",
  "key4": "WhoHXeL2gcxwUo7tanspZESdMGKfc9TqprEsFQkfN52HabVGHC4kVcpUajwpewk79T2UME3VYcXeoprehjbAz6m",
  "key5": "2LvDjtnsUHjbJEa3S5rd2H1dAPEK3Ltf42GpeD7ZxBdNyFfrYsGjcZRNafnSt78Mj1scmvZFVD1x11GWCDMpe7uY",
  "key6": "4Qp6YzVTDtKJz6kihcnk5cP7R5yDh5AQkc2QKXTkA6EuWitdKL4x4JNJX7uH3ehFev9tRwasWqBYNgTv54ZYgFq6",
  "key7": "qjBuf8mj1u4LjEfVKqRDoVs77hsJsbCL2x9GD1sku7TjPk1hYZxaJP8aBPsoYkgsRqFveYHe33KM89UzuCW5QcP",
  "key8": "3Wno9W1eVLFAS1fppzzXiKTMXmikfMqCCVEHt3taD1SEWKd1HQbAc2yhfu9C1U8MGZQJ4tSUyEaP7xmbUCWowre7",
  "key9": "3W3y5m3RfTc2BSwafFFXF97KXmb3BjssNg17kajGTUTCAvKG6tbiGkuBDzcs9ZzVkE7cDomyCKBocaoTLp1czJEH",
  "key10": "53x7fmC4r9LoHk8NzGb5kLzvsepkavTJ8VjkdQmSF3J8zHbwjg3ovr8KVkLXWTucYcLfRv8rPpDMspR74PirC9cj",
  "key11": "23w5oiajPPvQJtF1bDSoWJFdo6MaNvXh1CYDjka6mbv2N3d2CJYhEeSF7kvaUQqPo8RQygJV9L46JtjR56esfukR",
  "key12": "5iK5T1MhXfrAXH8GedSM2RisFTHaWmKQVc13yctHLF4B4Lb7zxcM2DxkahwtsmY4jjXLuVLr8Nma6Nvxt9ztGW3r",
  "key13": "31fd1pKZrTdNGyxzqj2Pwavd9AGnKxuDvTqWiYDwRDGKpcs5AL8k9kWDdMRw2VptxFAXTgpMPsYbFXMYXSwCqyeX",
  "key14": "3hYJJ83zG5sYxuhdStHqDtkoM7g4U48xBERAsk5QcEXuK7RUBxZQAbAiaUjkqMmWbRZvVJDafN1vwGmyQ1eeqHXa",
  "key15": "2FMwFynqciBRmHa2WiyqtDJv7rAhaG5WfabodJCuNyw7EfwUriYFHDmGYm1VDFaCXuW7UvofV63UVr6cmS7kxtna",
  "key16": "2eJFRc4ESkccUouQ16M9vcWxBBMtpuDGYza6dj6XGvHzvodN25SJxiv6MCrpfh57f4iowWGrFANdrhZmdJc2MSXr",
  "key17": "gjGZT2tj23n1ieb3LwngrfqBQqWQ8VUyXZPahAwYpY5YgaTYteAx3K5ssuwmNWpPLwmmK9W3we9ytkx1w5cXpQL",
  "key18": "2icuhg1uMWkv3gH292nGj7jUaL2ebUwU19m2v8PTZFeFKUbTdetV4uik6p984WraGxDJTUfnLwFcgJvkMP2UW6fu",
  "key19": "FyGS3caDKs5octYY3CSDhuSyGUXn3nRX4eBhVCnXboGgbpRXygBFPWYzxPk8rwcamXgoDYMnnozJwaKsJDDcHDM",
  "key20": "BB2LZ9RAiMsUtvxKSMHkxa9RkXasdUuq1PncmwPQwSJzedpu6fsLfQNHeoN7h4nidX5ig23VYmsDJgvUbXDP6yt",
  "key21": "2jmQHkynJA6oPjSjFVYGwHdzAomUf9r3bNLAJUSiB1Ud7JNkAsZQcJWeY5GYVS3qigY21Q6q2BgZunUuVejqWaz3",
  "key22": "3EkVgZijuGNKZQiAHedqYkxT6KLH7fzCJALHiB76iyjHq14HV814kh4KmLDo9HvU2SQat7nXu7qC76HnPXWHYTBE",
  "key23": "2rrmuC3PoibWUs1144mkdZAEzEFpKpae4eCqbjcyDYTKdMkMmEMeqKLN9t3LddXTPFmBTZ7JPspX1MiFDrzR4TdN",
  "key24": "251nr4Y3rVWBk5Cea2r5zu64M7Ru2hELPNdZMfSCH31nspomEraFR9tsdqf2kozF59zc4Cx5V59NfeDPGdajTqFj",
  "key25": "2NTbZ976rVUDF6xBwapCk4tj4ewEXyjBcKjjuUuatiNiyX8Km2bXMKVAxgpL3rzobgPFtUxHSN7BSonXcz8XHwm4",
  "key26": "2jgXChbZU8B98A8RHqpbgW5xdrEbDwkPe8nACjgRrYvmp7xtqDHDP9ZMv5Rxc2fgAxVXaVwv1RRdaJWVuS53JrT7",
  "key27": "N8QwyJcHFegdenGQPUYWkcrid1MtWER2WYzJPBLA7B5N3PzxBdq3Catba7zdutYKFHXuHAgDhUqAZwEcKyes9yF",
  "key28": "4fovvAEzNQoBBQCMxHcQK1kJFE8FMVSQDERQkY5amitmu4FcVQvm8SJnFK4rHrFVBxQp6JPUSmYpLRghoN9ajtJV",
  "key29": "3jpn9CpMCWSKwgNMNS4Jf8T73aREYwsuZh6uaatoxC8J4GKSVZQkzdj4zQ7NtP4dnwL5FcnfZAr4628eMb7MT4ro",
  "key30": "5RunvnVfdP2mnkktRRFsjpJxPfwJt6ScrH1UFbWJhupa2CkQqFhPc9ZjCWcP2caHmZ479wDgggSb6PYr6ax1C8ZL",
  "key31": "5KAvcKgVqmhMnmKukAA5bFPTkCR5yamibb6mW8qBQT9duG7V1Ro8NGbKE8iuxrn65iePzbQcQBUEKgPWz5doHswK",
  "key32": "565CMGzTLTwQ3Ew7sGYR2yZbuNrTf2hQZkfmkWZvQXYJkp4qihQqyYF5qzYvPyNfejWdSmoiS4YtYGBZiTirsLoX",
  "key33": "5mNDwENKuopabZyqvoULjDS5oSWv8AJe3YFQ3UhUR6d5b7kuF4NTuR4UnLDQ7J81kiNFHJc7CerWL5WvsspPaMaa",
  "key34": "2ad12AC2SYVnpRinPWAqNkNMdfxADewiPDRopp1Hna6xYdzq4bguW3qfeTveSD1T5GUm5ZrBXYnU7jjW4u66iMzw",
  "key35": "5gTw9AHFNGqMoL5PohL3rCoqnRHFcuzqvsfwjaYfAGNzD5gYgGNSFwRCmHVV3xPbUsk8ymrzT8yYrmfopCbK7e8u",
  "key36": "ijyafo84pvr9Upfo2ZBRfeEa9QVjtrnwWsussQxmKLKvS9hsoci1TrqxnrmUNDJdvR7VwKVtzzRzvpQTKDFxCPH",
  "key37": "coMFM3Ev8ACbx3oKBKziKGo3NqhzAaBUd39rBmrrYCxXztJBxmoZVpQzVy8WBYtTzcqCcDy5y5oVdBtfm4xvV7Y",
  "key38": "2W8d8qs6WDJvmSyGb32Zr49QCQzVqirykRAHWwahbKoWBMrniFyBkymCyWiGDmCEPEoayzfSMVts5JxFL2sFtrjL",
  "key39": "3ufw5KwWUdNSgLkGxEAU9h4TiuDTvEGzzMuTzbXeqaktaQefauYj8wKtfDM4kTCqS7EC63hYNh1qHMvAfJdEPxZP",
  "key40": "5zfCZtiXm8GtiSywnavxNwN46SC6C5bidqDsJ4RauLQYn4ueZ7kytd5QsExk6Ei1zNvcuvQoxUeC1C6FJmySCWBf",
  "key41": "2LL48JLizTcntX9MUUtXzrbc8eKR13inyL19VMHeDJzVdXYR5fRvf4rrf9jd9qYmSHTZT6wr2AE4Lpw4rKSuvvLS",
  "key42": "3XLKcRzVj6Vmc4mR2cnofAahfygnYszzVSBXj5yQnP3NQiVYwhvskeuPVsy4avwyaYw9mPbpHTAzbMY8gBogjizn",
  "key43": "5vS4QjTj8gp5z4XzCCncroAVWcUWLUBkhbGnPy7Sb3J3KSfgMrCA8oV2YXrUZmixmnDTovhqarRJsekk7F7bUNPU",
  "key44": "4EdBYgL3Ax5wgvLmi36H44TihBbX6fxAPt1BZiEye7bqLiYGoLfXbzYEtKXbrMgjhpKVQQ8mzrzqns5T11aN9Lww",
  "key45": "53ck8JBTHrzU5EKpQQkfBoaTnR1H91rohYHytkSNGdWf59KrBStuem6KhExBuF89LXuVzWbTiKgKNZVKu5PEXYsY",
  "key46": "2DC233kXVgioCACyRyri4SaGVuJpU9pR7eqGntQ8Z9dMFQdsPyr53fwgkPWwnSh5ySYN3gBrmeCVevzvaTRF5xET"
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
