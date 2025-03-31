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
    "QQyBLvJwo5MnfLHdA9gFF17u3PsEjktPWcdrLPm7275pk2Fyrkszw2MSMgTzRJpsQzReHjMLbrRK5dLFGzfD2CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHmfGqBSF9rZxN9qX6MzaxMmxm7eDj2vWxMiqGBDRBBhwUPMSbBtx6LpQE9Se619184kT8CWLFyJPUTxHMtVSgg",
  "key1": "2a5VR5j6giUo6esNDDNXtuRLC5TNWFgVHw5Hn54V5yCVw3zstJnXrDjP5LE14hKDoZS2AyRuJPGFo15qjKM53w5C",
  "key2": "2qdzjgPM8tCpK5CppAdcWYc5pFJH3vHCvHwgG8Sbw817paLg1ca9q5QCUjXnPvbdXjgfne1PeJw1LFX5gyoUCgUq",
  "key3": "5Z3HuXV7DyCRU9NWnDicxtPGnMBUeULuX4AwKKdp7jpYirPJq3ZBR6zTK1fUTZ8dae1C5RCoiXcRLdnrPBZS4b3C",
  "key4": "4my7oNj2W6gB58rC1UsWBTJxJTL9WgGCi26oHV5h3nbWxxVDLubcjQjPfsKTeS9pfj7F9raECNQfjS5Rc8XVBRAB",
  "key5": "3v7eCkCHdv25jDA8VgbPsw2V477aNd5VvPhwwFg4vaG8HAjiY3BytDUcNCseK2rUVVFfyVjkMiDHmJAwUq5cguuw",
  "key6": "3DCrU8hz5nyLQmgGUWM7oj6jBoWaK4XYonsrMpHjjYw8GkKuS2zFZaqARV4Kt1GbTi2TEMX3PDhBJwdPXRQnd2qy",
  "key7": "2TL5GnBH6qKoLsmjD84TLA9kE1vyd9EZyHU3TMVbTCi82sQiGnn5GMA4AJP6vbvaePHdttWxqu9pY8BaHTPwAqeV",
  "key8": "2wHnguoytqNY4iSCEvwppvDX5Ckjj7BnfVjMTg7cse7rMCqVgZidas8bETBPx5ai4CVao3zqmVZGgSnzQTTcVy9p",
  "key9": "2XFp3JB21xkE4cDcA9ikMS52fYa1cWVXq1qcCFBcV2pUGp6n29XDNzTVWiX3qh7UXuKp8mMg4CKLyuNnHNHmmsyt",
  "key10": "4mqwBRbJJBuJyXTZKrN4LUP6YmnsjU6PbA9LjhuFAUNoTQ3houa87y32DRx8bNjdWrhvd2PV6jNPZLoxei8eByxv",
  "key11": "MFCAE8d8LnEFWX2xqDp3q22toCfW9HETJkD8jxJEztSVAB3xeixH7fqdazV6GdPbafpJtCr9yAj81uwyBw7SMAN",
  "key12": "4DfgLPV8o9KgCmuBkt8FDMGTsy7EZtmCWxepvGq2pUMfizU4Hea5gGEJ3MZycUXTQiWcnWjtheYhGX8ip6BqAEgb",
  "key13": "2Rr95NtxmnR5cxqqjDUwzGv2NwLH13hogTxi8RypGgigqxe4CbYUzh1AKWjmB9iWLrJnjgq4tnF5j9zBSUq2rkD3",
  "key14": "4bQdhpBb2Sh8ks3yS1YdRtYTpXHDEfBNAKfZqcTSpbs93JRnjjJLrKD4TJuwi9LzjRggkgMM1EiuNtCtd1w3tsXW",
  "key15": "VmEbWqCLG1WPqqVZYLhmLQQ2Fw8tW3T6fVBjGR85XGn4itvwKkWdXwhBq6bmDKFWvtAieXqEiBiQC7dRp3JZTiU",
  "key16": "3MUinNMsofF12dvBWQhy3QNjeK2Hn4KU8DTWeXqm4SaVacoVyDeZFPiPA6uJTPvrL6qyGwZ6zhAZTAdBGrvCFK7B",
  "key17": "2z5aWud9t4WLhZyAMqLbeh1EBCaXfyjfSuGkVaRcGBzjGF4HAJgJBr12q6LAtxtAwtrB6VBzyASkLhxv7uAiYfCr",
  "key18": "5aXqHS8LNhk5RWt5i1uXYmjDtqMQgMuFmeuhwRZ8bHR2wGWYShR4FwmTutpZ7mG8kNQdyaFp83dJ12uwoynKdP7c",
  "key19": "674wAQjKRqwkjKwDf5XEJ3abnPGtFaDQJbB59Lz8dcLZqoYft5ZZzSxoFxe8CNMNeHLX4uzaBF8jNJQBuypcV5fX",
  "key20": "4CrfTFDnoxztxZqLvcCnUJz2hLBqtzCjDpiyh3k7qwDLTNTqi9j37svocwErnq1qjBRcryCtSWoJo3vAQxtV8Fgx",
  "key21": "WuHEm9SyK72eTxTjr2FuWSWh4Q2Jrz4K5rNTnmMVVC2yF9Z4AinH9zj6oy4QXFSTY1p65zS415dUDaycCyiC3GP",
  "key22": "5hpGrpFtvGztY1LH77sppRyndKiUvBZehoh8j14FQ2QvDqaiW4cUuJ42BWuu4h1i8tLWPKDkdzkzA6XTrReeJ3qt",
  "key23": "4PZudGfohiqFbMJjE8kcPPnLYsoNmBiTDNZA9jPkMUKKTb1f4vJNmhfVJ8xNpbwpXsvwqvDyitg998db9kzm8Pvc",
  "key24": "46vc1d5eY9hcWcD6Rf6HAiBxHqQSY7i2hgKM1jJjWq4wxLbsrjax2EjWDRCyVuvTPKxJTniWwWn159thUxmjPwoG",
  "key25": "QYHBAhTNvXqToaSL1r7R5e8tWsJa2FrHDVcQ14VjmYA2m4qaDozgW1CrKuByZpRDqaqSt1ANHKBTjwiB5Agr7ks",
  "key26": "6zdAZUXcM3ydvPgfBKmzzjAhHFgVTNoZwZ7RdLLE76oyYEBoqdT2BibE56xwpmxLYPwDuj5jeD1sheqJrZrTThM",
  "key27": "5B2E7RpAdRbGuNvK71s7xMtszmf8ctQv68uhqKRJuXkBHQj4PmejzAvnMbujT3Kbx1PiQ1qRgzw8y67BEKF7BS7n",
  "key28": "4pFqmTuz39yxSenwDuNWxBUYRSiTkhwpJinuTpxZTpkvfNcv9SjqDmD4iDKAkAeXF6GcQL9YjPF6StFthkTprXxv"
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
