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
    "36xH9z4PDSfRuVVh1Zvt5ZonD5o2UehKQzpessWDuevdR6tBiG1CdXVNf3ubmYcK9SG1YRXq5Yb5eZYYSY88i257"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZJC45ertv9YHsbZMex3TKnjiycd5GiCDQVnahanTpVzbjC3Ai3nnUguX8QFiYjgdPZn1BWbjsQjJyk5jSsqzT7",
  "key1": "3H4actfEJEJ9mvBUghrr3KLeGWz4i6Bh8Gt3NCuTWFnzpT1qpfVbzSEAGGX8gfZ1GDfBr133Qr9Ed2Fpj6Y3TE5u",
  "key2": "253c8zc6uouSW4U5hiTameeYB7UZVNRC2N7Yj3MQRbVyZHsSS6Jcz29f8AjNf9SoJfh6WFkPRDn3tJm622y2FcM4",
  "key3": "5X6XjY1D2xJP2gBMiuWGPB7eHjWf42M28Jsn28JxpLycFcn2G95qsaAAaD4E6uJqTpaeB94EVbUhVjsU143kF9fY",
  "key4": "435xZvda5C14Cir1RzDXbQiVDrAaRdQvaB3YRGjsuCVc9S2stHhS1aqauuBHb1YovtJEa1TqH5o4p57jZGeXiFCg",
  "key5": "aebTDMJckt9hEyMR3wgEgytiRg9foNzDR8Jj5SeXN7LGBXMb1BE8NVwDK8BujGjiYyhFHpkkbAmLegZigZDLu6s",
  "key6": "2BpfhzBLeJR2Pxr4P7rVNtBcSngi9fko5UQGCcxWThRT62YPk5jRiYBjPn8r6JQ2hGwrcG1Jj89ya2iMpBoqztBi",
  "key7": "5dZZDUMXUapH99iP42b4YBtrBSES5pJSMPQasWH1hfxbeoXynbWEsqieNVbSXeRCbKnkZxpwmKcU6tZJt1hUdu3U",
  "key8": "44BnL2NUgy86mmFtbf5pUPYewqgKK6aP1fj1SEXBRTbatRTrK4sMFMxX1gtKRmmue7NuheEroU4uqB4QCTMzeB77",
  "key9": "2iJ78BV4kdGZfJLAPRqSkNiFycDHRZbTEgCZGb8kqSQAMx9ZxwtxFUYb6GRG1MhZffZYxji4kvvZBM1PMgi2cqun",
  "key10": "66y2acLAmbnXAQoc6uRWknJANQssSeEHQaSvkS9B8MWqAsWG6jWDHv71StEb4p66pynniNciadsEW9skU9QvgZGS",
  "key11": "78MBZW1LnoC2sYkTdNgQmkdEb5pQ2uSG8wtbXv1TLSjGnBSkbGUmMwRe8GPkjHMdikHsbM96V3dKfjwQAq36kpf",
  "key12": "3YTJhcXUnUH91qZgESHD5irW1zwwaweL7zqYjh42BrDEExRXzCiBEisdPQrCBLYmo1zEDZCyDwwBe1ge5mQq4V2F",
  "key13": "NHiyzkCGYiApz1xsJwHW4c6WypYdWXBSZUQHTi3JZ1h93iczA8D8wYvP6m92MDJpcumWXFbWnptniXpEoV5EaEE",
  "key14": "2kz3hRSszLVVjXu6LXvywQowjswswZhDFeWCdmnsRfA1LGejVUXfNL9xphtxFJbAt5h5zZggD27jbQuQF85YpfTK",
  "key15": "46qtwskeEmjWqoqkWbCSVRSwWr6fjeihS3JRooaXH84KPqEm9jsY18JVcfL6d69HjCxzBfiXLjWnJkAM647Vc4bA",
  "key16": "LMv5oV5zFCUUnYrMBqg6RjXhqp7Zp9T7KK9btBzX8jTzRCh5zHLbrHemqd5pDAbaVbUzHPd6BHLN3cNNEyhhgtQ",
  "key17": "3hw7rqm8XYHJKDRwGX385UdB9JLo5c9g8gLcXcd6K5jDV2xmxHQfxcvGoiTmyM55ayXiJfv9e9G1mjxjwUDtnyoM",
  "key18": "3hZNyr7yjVs95m17uAgAtdbpfRjYjuXwYzWTCp5MNdfPXruuAi5nLzDpy6V6A8rtFGH8uBHU83joRyUVtrQXC1Vc",
  "key19": "5g9HPrHTeFkuXCX7AzTy1GEfq8a5VBVbJArdLritog6CGre72x2qr8AdiCueKWGwG6CLHXMHo5bavjiAFSLX4dRo",
  "key20": "3KTP7deJgwGKBKcTFAtgwVWpLwQy9fmZ3o7KTgckrmY8yaC5X55WrkwJyFPUuLGxNmjeKxqozypshdKUuuPWZYTF",
  "key21": "3BzZgsp9iZ8BGMRpMySyE2J75CHPSAghzodatxzD2Y7y9Za6McswtSbCxpk9aY62UPsveECnZuAK1ecdTtkQ239V",
  "key22": "2S4d4D13MxebriW3YFbgqdbsUQ4KHJkrPn55PCSZAHejstVC5gMt8eyxupVbbNE9Q3FTecp2kppuJVDhAtJFaHXb",
  "key23": "3RxbgCFkMYzYJvHM9zD1taoTwbzYbadTzUwzQxRdXsYziudHGhzWLR88mwgEWcuRCpnyprNomo8sapq2FWLzEBuX",
  "key24": "5HE7N5zbbgCYDGq3Grq6j6g3MABdqueDn9G6JypeFVmYJCaZkjErNyjtEKAQwXBGnec6fmun54gZCfFEnXLSmKD5",
  "key25": "5hVC6YjsV3cEvMJFo27AcKS65VcuBjp5i3U1rHF6xzTZZnK49hG9Aue2jfuMEdmCsZkjzNBrT8aDG5KGwN66rfC",
  "key26": "4RcXWUE8ucacV7m17hA5EQrELg73y4ryVMGD6SozfDyLxB61oR5qGoMzCwBiwddrYe5fLJ4MKsPsqe96xvYsRjuX",
  "key27": "4g2vAxraYicJM4qsKXCUKWAyoC154xFdeks3zVgb58UNUAw124ES6TPQUJVXH9F5poU1wc7hSB19VN1DxqBCgcWF",
  "key28": "33Znp78UXCvxcEUVeCUNFPYEeBgDVpmAVps27upsG61xQCMGp2s6Cb4HtawdwdXWukMag67daN2qrKk34te4BCuT",
  "key29": "615ht9rjimQThm2GwY6bJ8MkWsHaKMc5G4Jo7y5E3Ch74iJtGMjaxyigY3WC9HfrU5LDRGSZ6C26Enn2zoqUyMuT",
  "key30": "2ECTKKRaisuGmUPz1YDGtpdYHyhTAHC8QhHgE57RSZ8KLgP7CtQy8X3Ba7TKtpE6hkCJU13jyMvzsooGkwwm6GTA",
  "key31": "5QiTsBNAEvW5DmzJNiDmCEMLQXchFAZWeCmhKNpVyBdpnPkGbeZUMxkfXmrU5h4TBhWMpkmgvpjjGrfHBXcDaAZZ",
  "key32": "4UeSADKhaU86ZcrYVthnLhk9QvpFziUAY33SgnBqi7E1CVh5Kpmyj4orZq7XcaqnWo7xAn48geG71nMTxipJKNne",
  "key33": "4okHhtGiCtdm89iDDodMXxoZg5Z9jokhCAaNUb3wUymeV1mDoFnUNBKRHR6XGVjuhnQjMAnxjPJJDkP1t5qXgnnB",
  "key34": "4AAeKDNh6kWgPVuhNjAGM33eAawpDz1WAM1SbjUbn7dLmPr2ZYfEVxRRnraFnz8ywFy1iVQ6tjAcueXkZfApJe3c",
  "key35": "5pxoyWdMFkhQ7ovzMu6cqj1jtsKgpKUx7HsQJkEVQGKtZ6m1KEA8Rks1mobMQKnAYgDgrcYjyYxdGRLiTRieiPeZ",
  "key36": "3z4svkjrQv5sEn5J8s5ErGDFdmSkKZ8AVRVPK1DLAepmGLBQdhmSWHju5rPZxjYZm9dVBDoBmB6zTLqhAzZxPqSP",
  "key37": "YacNmgcaigKPUEbX4svWvnQzNxRwaGQv1D6FG5Ge3fvBD3jMuokoKcuHMyB2dFF1FKVyJDbJgBwVLgYKmA1ZDJ1",
  "key38": "2bN6ruWJ3Nm8bjcKua1EBBt94Gu7fbDYzUuPySWHN1TZ4q3V6HeQTVMpL9z65KdZzmFk8PWJ2cHiRBsEA5KZ5Q9W",
  "key39": "25BhN9hH7mmPGJYYRtSdTc8nxK7qvX8xGeqxr43n4WpkRy19DEcgXYsZKGFFwYp9z3Gop1zVhjdjSxTrEkuq8NU9",
  "key40": "3vr8K6DdvSyg2iSU5xeagb2X16gFziDXRJqotsdn7Su8TpzwsLXV1rpSafeDhLdXhTzoiFaFzaG1LCnaoEw9WsXg",
  "key41": "4z8SpxLbAmgPcBEjHY4EC22PnGvTz55jTwmwS94ivFcXcLHrbb3Zeih5UBVDGFrRfZgt4o9prXnsuQzchM94wHLh"
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
