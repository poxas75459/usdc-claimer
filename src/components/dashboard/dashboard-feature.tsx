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
    "4Y1meL7yAcMm6z6WM7ZNBrvjrnpMwjXoxQLqVANzrrk7vpC4e7RvzSFUwYszp2hFRSMF3bhczhsppLX8HF8xzDmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SFbrfwxm8SbmpKQDJfxk5MudZgxBCAVjZACGfiGpNmVFo6hMC6dyLNgVR9jHJ7xxqyP59PzvW76NTqfqHbV57bU",
  "key1": "62QER4VrSGjaCrF7z7hYornianAMi4sE7zRhs2Lf71WoPifcPnB8F5rFQZs7hYD2jGH4agiAcum4X67WTkRsJRsi",
  "key2": "2XQG8eNYoyJ6ERqrzvnjZP5QiuKu9Dfvcqmg269HDhEj7witeCRGJD4kcYYJidHYCWYE6rLpyffXD3ZAgs2rkTiZ",
  "key3": "HCbFthJjKWd6xVheCppaUB5LeNDkTJF2Qs3cM1L9cgfa1Ao46n6TiKkMyzLWZbiYtCftQ4KPy2aE1PtcAHS6vb7",
  "key4": "3pszdEEUpH3yJxp42wXtBvQrh7MV1NCbsGBBFSEZJiaYQoVrN6Fy4ivxDutwNBAQhJtTQdBPnsbo9njEUz7Fm9Jc",
  "key5": "3739yZEVbrzCE94o9VGCNoDTgNA75HVwzX2woz7dnr3qkVrixndUA1pGJfVFic8yLrsKF5yjXA55v9xmMHSgLafA",
  "key6": "4aAiekm6RPtLEQsT98vALFX1GnBHujrpoiahug5zGE3h3yPmQhsrgmUoJpKbj3yuKSf9mFEjnVBWYgyExhSPFxcw",
  "key7": "4Y12dh8oAz3AtfcX1iHPj2GKcgBfkxFSFLVedxBsmgmYrytcQMBDnUExmdua3KZtZcy51yw8aAqoUerdvNz5Ci2j",
  "key8": "2wdiNzq56DziZNbreSBSQYcTjXgwtLfTCyp2zS6V8ggU8aW9mjFAzWFsPAS62RhcvEBCX9fsDTrwK9JBhRhYk8r7",
  "key9": "3WBqCXM44v2xy5TSLr5HuQP56Zh49wY41ovcRH3p8iF4AEs6mwtWkYU6K1UrKbpGQHMoAgHQC9RnrzqaaCDFxNez",
  "key10": "4BGRBmzApogcxZadxohBv4UJNv5sqsqbRZi8iDg8s5H6arxUhHAJdTVMiaQzpN14sh3A2gWDvebj5ASyzdeHfuVm",
  "key11": "5vSstihnbZoocsjEpqjDwUUhioaHdAbEStkjjAkXLhMrnC9asKUi6UJX69yr8rUSq74MyuiRRLu55PkHmaZguU5W",
  "key12": "smSuHm5wS5J6pSm6LNyHitJXy9DgGp3fTAEiA4ZeAPWmkkJR1fgpbabcYQURFoEGzTguRgear3Kzwc76WxLEgtw",
  "key13": "4WZuNznY7T4UhfMPkNg9Q8AVgGPFcTkQrAoCxNeZNnRe9cQBNNjdpJSKCH4WjCv6CxW1Jt15n7boNpGvgewgwR4R",
  "key14": "5zvsFJxtpJRe9SVr3adDhvJGCryKPi6adVgCLmbpvpJjsoDFfkva6orvsgLJYFtXXHm4eDx6QoaBRr2B6Tv6uv85",
  "key15": "4imqtstioJaYt1tx3BvHKzbqPLpaaWKU31mPWbotfZnSmi4Shsb74To514DwWEdW1DoKuHSk7U2Hcv68mfE4qZzN",
  "key16": "4r14UB6rWaBbNUZsjDtfRWAeSwpp8PujPXU59i9L9vDgRweVTS6V7Qe8ZdGFGMW4QQveYWzt5VbEbDpPKABbCh1x",
  "key17": "4ieDCHSa4c55jfbQPVyKep6QHJZQaVsZdQ4vQ9fpdiNRxAQc2vh3tSVuFdFqZLFygDKyxC7XF5hdGwDkdTHXmTVW",
  "key18": "26NcfYP2CNWV2e8QrFJuUB3nsY4dLrrLy814HzQCs9iAPDx2dY9TeD5b8RK5ZtKbaux6HQVZq3RboLSGKk15VeGK",
  "key19": "4JoHggu6ppo86GB6mXs4kAKdCzBeUBmLnsyYQNgc2PEADFXgqyYnaKA3XstZRjmKYgQJqJDwinRfqFryHDJsrqiR",
  "key20": "1BG2GdKNAN5nmMAHBFfTDP6cbtBEtRG6AeMEjieRCzZ1fECbhCqrbAbTUxMob9WUpN6aERjtVqHnep7DwCphcHx",
  "key21": "7QeMLpAd6JjGKQEecbBWAv4MX65ZT3EqKou4LChW5JtGy54TzwwDGDpyDnFXH8e4UFvKFtDjECTwinys2EeqQMz",
  "key22": "QJXhNoKt9numosfNQzBpAgt7u77JpmVTc7gFYuZ6tg6ZBWSKKgMgMBS4S8V2qx9xJN5pVqpot72zWC5naNUVRdq",
  "key23": "5dQkM8gFHo1Maj3cJ4d7W8BagLZCj65C4kjuKmU6moNVoqJeqxmgqpHfsXEZyX224dL3EP25aJCBjtjAyp5CCrA2",
  "key24": "2vuX3oJh9Hcu65uYAjqLmd8s9q7DjcpKki4TsTancWEfsMgnBPBjKpEs4DFmAoQTJ1s2UzLuvUK43yxboHANrmb7",
  "key25": "3BU6gUjbdeLv9GzWSS1KBEGjfqj9gTZoWGfcvdDvUpnfYtGvoMwXzfeYLVGDVj4NEsnPEb2w1w2oRapT7gDVudcm",
  "key26": "4vRiFiZWTRn2sVyqeREPELGdT7zrNLqe7yBr2zy13aWCeNabhB1bUYxyTXZAcrdZ8biWrBKGY4P77r6MYsnqPY27",
  "key27": "oY3dcTEc2t5RnkmRg1fatA8ckGYpLYAAsaDFttQCZd17bvrBrswtv8ttDrUgJgaKVGE3jhnUz5dAKwp5S5Go1Qx",
  "key28": "5eyQJ8sMEewGpZT6TSP6p2dty6JgKmkEPfWKZwq9Z5UVfELFcdEzVoxXBuV7qhFh7wrRyAJRuxeKq3aVwFCfKyV9",
  "key29": "4jpBuoHVKuhczeTmfojLWYnV6AzTDWNiSJjaYBMjrAgDAeV8bwMdnqsqCtPemHDBeMC5jHD3uTStxqR44ZNbC9ib",
  "key30": "rqJBEos5nG682RnbHWQofHfZax8NG12kPZiimJYLfCKHahGRoyEZAoZqFQf4en6pfSji2wSkKsiwT5YKXuoBmRA",
  "key31": "XNcNZTDnCkrEpTNJ9DqmFHgNgc7t796SVNinW661yxVnJou1cD5WEX5kw1ZJ7DTrSGji8DuKmZQYjYfpX9TFNqE",
  "key32": "2WdQPwRBCY3DXbDAEFrCj1UA65NpRHZnyeHQz1tMarXwdpA4vFidiGwkQY1SQ6n7w8iMMhxsbDbfdiJBoZAFvcMX",
  "key33": "5XL65JuMq2f6P643fPwFqDqMRSnb9RG7SrX2YretcCrcFUn3Xkes2hpMzeXTtxg7sp9AYXw91XePEy98G9rvhsn9",
  "key34": "5oQhZjaV48mHzX27RVGB8C9xfDfrbeVcTM4zsjNgKmFardL4s5ZuENBRMpUGWVr8FF9UnjRy1HeLzPsgTHha2G4L",
  "key35": "5jevNXVNUX2DcS2t6DexmvVaeeJvtjutCwoQFwQdNH5rSBv3StrapBgXKCDDtohWC9DZZUAfycZLZpH7ohH9dJa2",
  "key36": "5FH88du8cnnpvnfAtgZtMgrUCLtiUyAuAnGsuFbx6NGgPuhmXS1ZnfsWUtd6J5sTrKAQCAaBCEK5xBqE9oP9akAT",
  "key37": "2oNSoWBwCXunP6V1uQW8dHtCRre5LcPHeTtLhv7dhnEskEG1JytFNYEVqCoF7Q6kHvTk5XHiDe5S6QMzygJqrBcH",
  "key38": "3cAXh4RAaCb5AKpCN6CpRKCYmxPPFV1SsE9TrLVoxbk3BfNghiaDWXzFRgyehuTLcGPrzFvPDAFqQoHSVgSd59N2",
  "key39": "t7WCWaBouJVm4ytJ4i2Z4qkW4phn3tEUSPod1TAdN3doZANMEQHFLyjWaMsibMXYGT4fP59s8sq7MNFc8JPtkUU",
  "key40": "5C6eHJBgyfyjBc5CYgsa9LEBX68BFVK5DdwcvoB6LCwQ3LBstsJD5nX3T7p9pDTcTzAKnRCaLCpiHdpEBAHM2pfn",
  "key41": "4zGmekUnyUe5t5vyeRyhU9igrqjmtFief7XJuMnkbCJKQUsoc9CMS4gbD6pJ81DmTwiHLhrb7UKTRSnRWH3ttPhp",
  "key42": "4MnvJLCCajFMz3TvKCvpK2iRYxQaogwwQaVN6bLm7T2c47grMKJzgduXXew5A74zMxGXVj7WdN3UpVkbstgj8ye4",
  "key43": "PSged7oivDLagj4EcTycE8iPPYrgy9SanjgAWP4xVrMPSv4etVbHQv2zge8ZiZ3cr23BKsZjRG3sGqgkZsxUWxF",
  "key44": "3LBtDJ6WGLvoEuY8XuFNuCzm7c3mq3GjKXV3JvgUEP12qp7RXbYiHtoeb62XiwUSTwq5MRe6KB73iHsFCcfKv3AR",
  "key45": "38zANawKTiuyroWzQYKATzj9E1cnTyxC9RtEFFSADukXWCpCx5QajvESzwnMSEGbgPWjbAPbvQes4TWNjAkqFXDk",
  "key46": "5aYY5pyAB47Uus7X6ekovZB4mkgLBafTMQa52Wa5JMArLUCHzS1Fgvm8cEysLZx1RNmL7BdxcRiST2GHdNZEYyMu",
  "key47": "4ajDeXmsmBbYwJNVVAB3HvAh7gTzQUgBb3MeMPtTBU8NEAPpaZcyA1fbYKxpT9EbghhvmmR4o63NcptDGfGNwGFP"
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
