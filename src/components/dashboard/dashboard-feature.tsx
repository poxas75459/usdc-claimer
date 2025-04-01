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
    "qrm9FodpmQZqc16PN8g7y5AQoawWCxQFgEVak8jdVDTrbuB5XBA5bPMyk1hHxUX6VyqNUHiMTn11oajWe43ERPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyrH5fXzr8gBS3QvH66jPdKRu7YkDfRXkwTVrd7623rXhUzyVRRRZWCXv2111VtqqCuZKBjnBLnfSLvWua21HvZ",
  "key1": "S4VaB8BXZdyoVb21qgPbTDzBySmJDj26NvSvK96XrubqWxMyuG6QWQL1BPnyKvQywJZGDDopLW6La5QwZvHZdTr",
  "key2": "835irXSH31GbGb9CNqwYf93ZM4Gw36LYcSdvKfpxkcPfu9RRgJgZqxeyJXXzcUJvxMrZHk5P9fAuKZFnF2Qgyeu",
  "key3": "4GmStLn75LrKrQSnXFUogs7gB1DKtMiNXgZ2pG9CVVAqr2iq3GaV22P6BNtc4vqUEeP9g7qGf5qFUMUus5dRftmg",
  "key4": "4Xmu42nfcspDMo821sxVGnD6cJ5Wb1m35ukKhDRMazUj12vRhPRfrRatjeNtzUr5GmaqLMEMTnZc4FWJDqSvMetT",
  "key5": "3RWU7xtRTKL6MC6kH6TLcx3SkhGBHyVpbDAVvm4BzNfJCQHBxgGNKs9NzA2mYujnE1p5LMb4X8oGPcvk8SCaFUeE",
  "key6": "zvbULuwRpZ4GhagEcrzVFPwtjaXTE9yf1bwTbXW6Gf3AnEApgYEC3kLgrvULHL7nvngVM9s55N3uuurgWjXWXRE",
  "key7": "3issfKowfxrV6s6PomPG1k31KcCFRFFqJmYNkF3ppJgdbstTdvVMr6MvppgZWFy8NEMjvSToDKtPSExeswZWP5Ei",
  "key8": "3H22bW8XHgSyjzYXNe9UdqJRpNGyJv8ExgGWMWFKGuhRwnt5yVVt3KhBqHa9GzaXt12NyYbBMR9GqmTiddyUB4mi",
  "key9": "2WdBi8ncLGHpKbDuqZMWigv73xrubqFUcM52FSw7d75KcJn9JcmmytkZ6EU7i5Esprp6LzPZVZMdWjq4B7KyJnVH",
  "key10": "guN5dSVHepbewx3CN4oV6r76gVYYBQWj1mhKjjvN4PCc7oYkxXoM38JKjjQ6QdBYuE79QmxU7z6Nwceqai2wGbK",
  "key11": "3Rcpb3sPB2yCZnjvE7kvymUSiEjrwdCQdehJvdHZWLTwRUgqZLeC71mUVGeoVLQMSmxmfjb53gNCAJWKXc9ScyAM",
  "key12": "2NmYpkvGigqMqjGgy1J8emEVAHkP1bbbtBCFCDi68H6gBRnDQaJCujCcFan3YKhu4r6Xy74vejR6Tu6DebEhvvyJ",
  "key13": "3gK78vSws93287p217LL45aYrAZBYL6ebyrkNJ8fnBQiDZAehd7zQkeK64jkCMMLFuCpxBBk3qUuqoHvntnxNFAy",
  "key14": "2bNHsBb9fTXTArTr4xqeTUrjnvC4gySrKHXnbEPhJqr86BPSfptNpMYxF1McF78asdP2we68r8YsYZ8wqCcXJs8d",
  "key15": "5pCoRozir2fZq672k6H3nV5aVkbfuQNofBTn64qW3CqAe4YWSXRpAEw2CfLqfG2SPyKf6uzaa129XYP8E7qCWAHK",
  "key16": "2SGvUzoTqLhXYAoZjhitFyDLEYuyYqNzHe4Fac6QRQUUeoAN7hXJgevMkNYp59cTcdVkaBFMe81YkvbWRM77rKTh",
  "key17": "3S5Wz75TyDNk63gfAtPP1sWFfXiRG4b3gAE96ZpRJNJs1BfP1TxAnN5BELxD94PndrMm6AWsy4YTT8c1BrBxysM8",
  "key18": "41Zniq7pStQ7H229C5JAKQcGB4SLX6xPVCKveZtRiftFpdxFJKGtDp6R5aHo5KVmputaswEa7xDmbYKCGpsnwYCV",
  "key19": "NJDLBkDA1qYaeUdZngfWtR9v1dX1EviCPUMka4X5xTTaRFjww4KxFCs37sAtKnG1dokuSW2d3CYQw5LHXibWit1",
  "key20": "55gEYmFE3orf34c6pwaqcT5UzktjpFV4RJbNZXeZtyqLzj53xpBPDgMQFuU91wXVQfG5MPZgLCNZ7JHnVkf8BwRE",
  "key21": "2VG12J1cmRf2PmQsWuYqDdzVA598zEkwiqNJiYcLdMPgP6SPj3QxeFK7EBLdvG7HA4XPsqeWoXoKN9sUkjYxVAz4",
  "key22": "5oX3znZ2DXvRoQoxAZkELiW5MPq9GS1ChoxJyGr5mN3KhPiKr6uakt9Pdpw2FCSxoisdCWVVNHZ2pTXaiMqtnwhd",
  "key23": "4ioSYMnec5WyDsUe4rqhXsiXAoKeBQpNs4b9kCYhEnEJyLxEZZvm8AJxUVCbvAUKpLNgKrZCZuyDzj3BX27EESAF",
  "key24": "49sQEahkCt1nTDbKgX1fdiWP3pEFVUgUnmG3DT3uA3CbHQH3JTagDrX5eunpAcYJUs8AfrRfQPzfnDBHP7FgUfw9",
  "key25": "2so9LPfEYtXKuusCZQQPGti8mf4n6qT3ji3o6XDh3ViY4eMm8pgxSAoPosj5NESz6iFLmQAqDHYoap4noB5LWL1L",
  "key26": "5p5gwfWtRMthhY67GzWEb3Z1DjJs2MHEUjphU4TQB689pB99qesndjYbQyyN4kzLWBKFrnifyMs9ryaKbTKryNxZ",
  "key27": "3pWhiVMqUZhRep649RH3o7tufkmBoYjAzMrKU48vEj7vxRYYwKQtd1AVkgfPaW7fydaSoGy6wCyLbkd8MidWZJUG",
  "key28": "WnADcLuGLUfzNThaQzVThPGUv5hcFw2SYb8wcJ7wUwPZNVRHzuchtTafpiG8GUNFNgnuSDjjTqMHHNx4spX4rJp",
  "key29": "3soB9Zaj87ypCLs93BbMg4PPNZjEJ6znB3Zw5xD9FxWYyVmNYa3VsH71DJpJJtsUUpPfS4H5rZLq7LCTuBCtLTgd",
  "key30": "3xzboLBRhKDkYN7PYiDjoctVeuKWErW24YHZ8L5GvnrdFu72K2Jytqwb1nPKaNoZQxh1jGnv6FgZgPqHbpcrWqmq",
  "key31": "3A7MYDAxd6kz33CVrb6TEHQmeWR6Yxmr2muBTZoggu2U2mFBGVGHCkk3qhYA7F3KyQU6gnnfkByvAeLT1dFUJ7Hr",
  "key32": "2pjfhmGaF1STdfFutBwMfvHjEhWgSdrdKuNxMQkoTJagrMS6aRk1KRtdnXZ3vPBR5NEDh2cTNd3t5ocWz2mfjyRz",
  "key33": "4xHuj76sA3sjrpS3TxbydYSuMJsLAqyB323zS2ffvmKe6BpYfLMGTaxKj4z4TTFgZKEwdLdgyYrNEZVhda8z1iHp",
  "key34": "2Rpqwk2xpnYmefyne5hMrpJ1fBt1KpPHbs5NfmBefTLDUyhSdUFv6SxWv3Zej8TBwW2XKUVzsMHZ2amcxKQbeVZa",
  "key35": "2Xkn93qLAghedfHbiJzsHY9PoXKGzY76uRWEgnsL8nmCSvr4UARD6EQcQ5swzybctbiyxz2HAQGV7JsMFCVtifmq",
  "key36": "5msZswUGkEuLCERz1NUL9TRy1eSFrN5GhiZSoG4rMKArmsENpG9HRsw4t3PrUbQwQKqWiHhP9vxjwDbwsZrAzdRB",
  "key37": "4QMBroAnDXiRApYwKcUk2TcjVJymKk4CzM6smUBXWbhMjqBxtdBMY2qXiwYK6txTy5U6KzMhr5Q8osjoT1zkXdYF",
  "key38": "5zPizYAKdabLGz1XZ9XqffWJfdgscagZe8vHvpjopcQ3a9zTghPFktD37NKHNF97iS1U7c4HiGwkMs3CJSuksicr",
  "key39": "5dHpuVAXiAjWowRsGWoBpdqUoC1jPE77GAUV2ivwbS4hEyvd2x6fEbhtx8hFoEX1VZdS71WHRqtwkDhcoxb5t8AW",
  "key40": "4Hd54pa7js6X8rbwspVLyy6edwmqZN7iDDVZeQvL3b18Kei7XvSMRdgXNXBgrshEuxTnPGTtGnxanQu7UopDtfCV",
  "key41": "5QaZ5XRPPFAWbEkpQD4RP1PpGZj5F1DtTTjT1yRYBp8e8phzK2SWsarwTA1FSfsRewpW3m8P2hxhcxxkV9oi9iRX",
  "key42": "23hZaQSUEz8J6ZC6tMfjHTydP1194hfFYZL27NSkf48yhMF8V3JMwDM2sodsUcwyUVbEV67w75b2TszjnBEq9WZV",
  "key43": "2MNP64xyLPmQVQ1iWnu1po7ihzwU6Pv6FryT3X8otYo5r9QLKScg881mTRyRFmP5PE347uWyJBXPp5TyuCM8iT8o",
  "key44": "4RGcaEYFQRMfm3bMWi3EzyaHXB2fMEC9jModBAEbfCtWkNc7PcrWmvU7HgjVfkytXCMtXoHes7sQJcccXuHQzSTZ",
  "key45": "2u6zqNnLfbsAnpecjdDuGXxU4YMP4rH1ZGqcpi2ES5YGs5XAtvDygePnTyqxPpQ6gMDT6mLpEMWnG8WuaMx29ESq",
  "key46": "2pXHVBbW8GWCD5UUxvppksPc6ZBdBXXhWtNAfQWU7SeKHa5m62j72g5cgynSeQBVZevarQpjRSvbYEoAuomYqJkB"
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
