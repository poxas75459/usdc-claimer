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
    "6nYcqEhf3ut5rMyaSq2TKfgeLSTeWV4w8ADzvcP53BbPjbrWrxxG7rWTxUHvLA65iWefG2brCw4PTkkkCyf82ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ti75qtSZ57LBnT3NeQLbHo2mYe2VgmyeT5pHmMwCaEea4SPvh1TbGd8NaPZ3bZPJDHfmCW9bRTUFaTSFSgsFxKt",
  "key1": "2YqSXs9DEJgefNF14Ahcmw4z7pziBSJL3o777gwhvGrP7nU5YSS188EzcCALvGZgJTTUBiP2GZLKzR7sTVqTJdAo",
  "key2": "PrjWM1Uuemk1XxpXud8WmSC8Lt2UrNfTzJuWQmMdn5pbSc1ca3shHooM5H1BQVWWyXvPoYZZKVWkfxuPW9AtAgB",
  "key3": "48bWq3qPacN23Fr4AWESYmM3GccgQYUwvds7twUQtgXRGGS1Vdz9xWAFC7uEXyTkkcPfyahdhtkMoYVvwFoTLaXX",
  "key4": "4fPt2HxJCrjqANhCFJU3UpUSRZJ2uQes7M7fKGWhiYpthNiYUoqPb1EUiPFy77fLDQP4xHPosEy6VDU4HvTvNmmd",
  "key5": "2aKChasvrQqVdDYvachrqdVhy12QKuSZyfdy3tnmj19dh66G2gRXSPwyW2VMhYqdS3w1APAY96usPyfunWPXAbH6",
  "key6": "5wQSr7txWHtXLkAA17AUfVKZwurXxwBLuiLfQi2YMxAV2MZwdhgqZBkfiMszk16fgWUB6AKvDffuUr6f6tHo3var",
  "key7": "5Rac2D9r59jhodaQphSPBLPYEMDUuBdPVnz9htMahJcRXUBVuhs9GKPdJLMQbumdTDZ4VregWjvw4RyrjhTDGzXN",
  "key8": "2NRUevmVNs1TtCP55pmqUiTVY7BQ9hCB7XRfRaafGtgBaimQJP1hdDMLV1HPku87oQXKndY8fErPcp9tADEekxNh",
  "key9": "46LZ4ViVcT2BWDbm1gsJ3bmnwHB43SQUzU9HeHGT8vXi71nebikieYoFGMDaqQGXLohN6QRYmEFojEaKAkoSqFNp",
  "key10": "5ZBRv7vDtyJzKYym2tTK8RQMhRpGYWUHHJPXDPrsAdJ7CdKigAHSXbVpL2jdvsEWZfea6QJgAvd6k86qnRgVPkbk",
  "key11": "19AivJPF15AhZcuVTEEvGFEkSBoE6rCN3RumS3bnwk1r9yoWKQVNEiTHzbb4LoyCwJoz3HjzWiERcWpDzAu8wdA",
  "key12": "3MgncQz18tDh5LL6JA6ypYWTZMkmUYyagR4Kh269V6FC38MQUsagbCAKmLissYVSnMmEafKNLjK3zXWYHjuh1Zut",
  "key13": "2JPejcrEVqHWQ4kFK7onngMZmH9Jpf2n8nCtdbwsZPBFdK4r1a9xFkTFQVb6wdvkVAbU8FpobVooG9BRT9DRjwDL",
  "key14": "CRFiP6a6RgUAuYSaMDMCc6Rzzrtfj3DeAv5J3ou5DFuhMJidsVeKgMwG6ktRMbBX5Y65Y7X5HXUc9iAMMX8XRKQ",
  "key15": "3ynjqYeWoEvfe1Rjs2urEvz16QxRcaZCKGqhajAoJMUS2bNtABVkiUdfFr3LU9muudKAzYxNmbqFxFZjs7vcXs9R",
  "key16": "pYDBPkyPdhUHbEsWMZVEHBwkvtosH5EWUW6Ym8ucMuh5x5rDtdSwXHaHovfm6KP6ot8rNzRV4yc5ED5vxW8VzSA",
  "key17": "23MZrcbpTWdfYPF2woAkFS4NGEUgQGmFYWCBNyB5M34pcEcsf9BtSWz1HVo5hf2HKBbFYKjin4HKnytPCdjMtWVW",
  "key18": "57irZ1ghsjKcRY5JvkwNqHUxgwnWkkzhzKoFokpykE81azdzgm874UzWta7qXgB3gSthFemZy8idL4N6uurYM6iM",
  "key19": "29AuCAZahQwPgpNcbnV5cSn2PAcZDmMzRCqcnRUPtdiZkVkSTciUzFJnAV2ABuTnhukqA19Lkbt148sti8S4hLbJ",
  "key20": "3Z7q31w8YskPKDg4SDB4vDzJWeW38TYWj31GHDaTb6tbua66Li8R2t6UHq6Mr4qXzsoVDwSTtskxHwT7LvBgG658",
  "key21": "2j9tYwXF6AD2LW81eDGncAGmXhdeBAZvX922cWgTyqgYs2JhvN2vmDXQBP9THhd287ofiS1AQBVvLgV81qkY2qrF",
  "key22": "w8iMVDgsgX4Ua1hVsAgkYv5vzA7mxhyXGB7RkksJomMDW9LWzRnrGzw6GvjvrYRBPEpAX57S7pejvnJxuyyGw3A",
  "key23": "2uoPPFUXJniSdjpgJrSbkZViPTwTxiqwurgDJFkNZTwdECbtAcafAFkLrsmRBHBZcf7Z6iGSP3WN7xKpStqDHYHJ",
  "key24": "2gFNJUSBPpgsPcmo7tVergYJFhaLTpACPbWwytKeqKrhkKdRLFZZrVTATj319R7H7YtYas8JywBxEJvZ1GgYPsEB",
  "key25": "23ZVquoC7Wv7QREBMNwxHMR7mRwefGBmUhU8cqBqMvC6JNWgZGLwYQticfrePP8GeqVCz4DfsTuDmeCFJomNRaf2",
  "key26": "2khHGEYnJHhBk9emBJtC3pkNxx8jM7teeXDyUDGMjUH6szfYETdr9kYjo4KLUTkZcsshEACgFgMNp1usHMvrpFhr",
  "key27": "515bsnHSTD4uNk9DSD1nNU2HD8uYEdzh6fEC5Xj5jsw3ngeJ1jesXNoThQpKNYsSLRcvK9wasD5HGyNAu42LDage",
  "key28": "oXLjGUNUMYnFAWFYmxA2813tSNAoM9zui11X8kXFRyBPziE1GMvLyBfrJWTE1Ddn6Lk87dErwkbfD3hNnri5n4z",
  "key29": "21a33oq9oe691aYFkxv3XxoNSVGta8DaQFKN7aLDwGAMaYbsmkWojH8wPtqejgNmcuahKMwvWLe7aE38gNaSfEje",
  "key30": "4wCruczRrsGmWdXTjxKJKEDsMD8zeGuHn8dHxA4HkYHQjVCq6MkfcY6kdcKLk5TdCLfnoX6722cBhemAR8eBLDsj",
  "key31": "ZwjBmk5cDyHY8FGVqnxackdCe5CdXszAMoShwUdLPZmQ4xnTx1qxojwrSDTydy6rPkd7PfULvG2VQpX5udE78cx",
  "key32": "4JMskS5S72tqUf3JfGCk8C8oP5egdZXbtioqspx4BfFPBxmwzvyYvVUgsNRcHue6c2Y6yJY17hcHFLLSZWgQA3FM",
  "key33": "32p8buUvMdtbE8FsSYooM6HXXE9uS1PzjTB9rWzyuyKLsqqnmkCj4cxzHCchSkr5vfEryN86zE1h7W7LqT5oLFQE",
  "key34": "5tp6iMm1emXCX4C7kkqEYvcAmQcsYPAW8YYhHomP7YXTLjn32QdpSfXMKYonoYCR3qBKEJ2TFTPSaJpzFqw4ccex",
  "key35": "4F639MaP5nw2yxnTisft5Dtg5GgdiXUbZ37dae4J64wahSYtT1RQM4MSL1YKetQdtJroJaNRdgunq1LgKQ9Eb2nu",
  "key36": "22fsE8ZJWRiUrtULTPym6UuN2pqakUnzd3mPqeK74aYqa2wqCXsyrdzKbJZhbpGs8v4wQKNFoXPUTyZ3c7Xmkjqd",
  "key37": "2NqASzpkCiRUFhvesP6bDr7EJZRawrwJBhMwoLKRFrcJVRjRp6TEpmcq2MwuvyakXunqf32iMTfiwUfpLeMsbdHh",
  "key38": "EjLCtkYHH2Y9y2ns4JjrzTApRXDmLn2hGpGJ9jFFatgqGJ82bt9xMG6sXuZSpcaWG9AF2t64MF2CKtHnsvsKnPm",
  "key39": "5ERch9L2qMVs44f3TwcTVKehp121ywf23VU83zQi5b3cQmd5kayQ3m9hzAxyVYcnr7HARBnDckDv9crYcNCtNoQ9",
  "key40": "mzBqdgHSYetvyM1QRmg7PKWtYW3Yj1QC9JYUjXJCu1dyyvzeHy2F73tpeFuKKnEZLwoiatv69zFNWwV4XtHMwAY",
  "key41": "2sfWpmAoBpwoWXzfFmc9MqCD6nH94z2pHKvQnnzyvjxqTVFNJ8t4HWMhqFtXNLixiiF1yDFHfS1RGPupMraZReAC",
  "key42": "F72m9cdjbiT7UwSgxExbLNv5rWf82k13JyWZ7NGCv5k6HTzzAX7dU6UcJ8g9sKcHbZEZii68g9CxANPSWJV2XUi",
  "key43": "2rRDvoKLSs2fuLsaePoHEknHomXbGA6zntam5GtXW5fRYzP3tPicPf9xcA3UFc99URFCwYLpGZqXiWPkbzKF5MKv"
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
