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
    "2yCH1ap93XPLQ4yDs55Cd8i7y8FdAWcBkUZyQS3z4ucMPQJLJ9WQ12Fv6ruFL29EU522QHWMYYBiAMPLH3z9PCYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNReDH4b1w4G16piswwjTogs6F2sMULC6PPH5fGCX9gmWYNKhLom8jctN7tz2Ce9eqREXjUVwCmgBwYnkX3hBwu",
  "key1": "31Q9tLGtu74xAnsBQRWYrrHHX2yjF22Q3iQeMH4HtaiaAui238rQToAoMn9kMpBeernHtxRkFDNnkjmhEKjcJTQA",
  "key2": "3xJiCrVy5p4zThbyMpysNdiC8cR4h8TquvGaQ2gd5NVgZuA8VbYnvyBHWDNfwHcbSwu2wnuH4PqVDshsB9bM2B8K",
  "key3": "4sVHhEVjqovVSskjmmUWXf7SAHi7uVg8BSVaMPA2z7BhhhTAGeUsaPQEZxbP1PjKxNq7BKjpxM9Wp5eiRRXnCSvf",
  "key4": "xrA3xKitVerPXymJstPdeV6qTRxHVh18gzXVqfofMEQTMG18SG3SYrD1FFth3V9NwPdnpQUoucCWysAdRqXi6EJ",
  "key5": "4YauiRqGX6joJxVhrPWuKbdRRwEgbhY5cefRybDoSnkX8jWgi6QtvfrcqUvrefCKcxxguTAd5M9dWE6r4jzCESto",
  "key6": "3GhVzTwCfzgfppyHDPmwLFZXPLf1eWZe6JRhSEQYKi1G8vzeeLTpV7Xvm88drA3GTGSvo94bk7xynhAsjvSt9k1n",
  "key7": "3X42kH5PAGhUNDQ3g4DYECNFq4gMCsnGtm8VPg4uQoxfjd4DWvFvGaTec3mphycusVoLf6FbuJBQXQfjsu428QDK",
  "key8": "hFuKghZHrnVKWuQbfJzYkEGC12rcVcfWYrGqa1HUMaEGDp3UcV11e2Zwecyvkds6rTpw7vAWXXdGJfS2Dwj3CYi",
  "key9": "8naNdguAMTFKsgUjU2QzWdHriAyYW5rbYDNdywnE3Vbq1ftqsg1CnJSh917KNxHmDHTd59DeWPB79cwpVPEugLk",
  "key10": "53WnRWBMuSnMeRb5DxTrpwdNssizUgwyspkFUwiUmPQ5kHtwv1cSVPhfHX5pRnmxT4F74ZcVJWWM8NRNKnFTPibA",
  "key11": "2g48WuqqyB1DNRs2PaELPvnj2ubs1uD7vnT2cNNWjc2aPKJWhkMgfYhhHf78trjoA4Lh6AdS2f5SwRqZyqKXNyTK",
  "key12": "2HkRiurePtYsMJnQbz5EUDZeRg5nVB3o3j2CKpXdAgmnZVSti61vtwiBNxNaTQjJMETYgzrPYcHXMqgTpMqU6gGF",
  "key13": "2DqtePuLtMteL31ZaTbBsvXbSCzwDiugsY5YaAgBB2hoS91vrNNEHQR4zCwxAthuaqabgpBViS1L9xgb6etdTUt5",
  "key14": "67RYCPBC97FQxxns7y3PLFDvooX3yfLp2JKMcsLQxBPsnHWorBMZZw4bnKEUogqRBGYZXwGon3uzmt9xhTusbsTE",
  "key15": "2sbJ6R65uzVpbu5MDNxkLswEZ7xQb6mx2ob7DFqEMHdQFA7WzF2KbTC7NdiwoeFpySAA3f9LpAuvcpeXwMyG2zC7",
  "key16": "csi9Ax5Tpb3GBY5kjaTXSzFu95f9s3y1LWKoAUxwWtYziKh7BrET9h6P6dEGue7DomtN9YRymZbam7CWsxDeziy",
  "key17": "4vj5N7sXtcCd5hJ5zTAbyFChrZzkhSQCmrtmkh1BUQo9HEByexCse6KfhN7ftPSNxsjtGaYPikLptTjM7bJ3yY9t",
  "key18": "5q7Jyh2rSG5W3g2LwgVZnQH19ryMv4rve2YapLdSvMoLW2BrKPpY5Mz9Pwj584XuiLrkBjRtLf8u9Q3Tq6BxZGNs",
  "key19": "5CuLnF5gpHtHFM6Sz5qfgoH4pm8S3VVjWAz565NBJYKkcUPV2zGGABCMFiwj7m5gHfVMiHr17Ut1GJZpn94CwZWQ",
  "key20": "wNpKLdeUw8pqUkVRvDHHA1eduJtdTL5rsfPH7kbR59nvyjCmedW4EXyBeuuY7CiwPgAgPaqLFhAUE4Hf7DVimck",
  "key21": "4H7TrjdgWzG2Ugv2mQb99BjRrCrnXG7TixxZ9VKCZC6kacUHJQiDAYPY4H9ftqx1H4jxxbXHJjb5WQpgSMf3q4sq",
  "key22": "2qPBJfzEhD8W2r3UsjjBwtEDxuDVZxFdWP611WBNg31vFXkeFZDNBreGxy7cV4LCRb1A5FpsNmVT5UCcNB34kahF",
  "key23": "22JUyXs5jwFrRWPYZGTkLqEerbhfwbbN2bVhEQTy2eML8tT4AF91hYW1kRsbaHDmrAaWtD1RaULYmYeHxc6f582X",
  "key24": "27fDqjSfU8PPS9uZYar5XmBpjQrmVNhAijL7aTBkM5tRaKDHEWrc51RJ4zceQ7Nzm8nfjyD4CnPUhx6cUkzcwd4W",
  "key25": "61x8jdtiXXN6S3QeDXw9JYVNaPHDzrRkX3ZiiqF9YtaFPGgoHynQsPg1iGNKKaTNLLJ6dK1fBpsWVXx85Z4HN58n",
  "key26": "obgMDLtMcRUuSLjaufNdCvX2qsGVdAW3vefcMDBDysxiRRFU6WoU5KiZS4PxKuuoBU44suFstmeSrwcBYgNK4S7",
  "key27": "2JYd8kiB3yfNm7ShSnYzQtfzR1GnWsehLNj2GQhSGsp9qx26cepxXd1HJY2oFL9UhN7HitvEghQC2SR2eaHvRiUx",
  "key28": "2e592JcuZDsqfZbGpDAr4szNyfKF6FcoWYjKRQRCygBAiG64DnJ7CBszoAB5B8YVhbnj1zuk5xi2N2zipbwFPVtT",
  "key29": "4iMuj2nnf9Wx3u2iUzWqForLixA5s3QykUV5nnncEFb8QM9JE1T88g94HLAjAHwY2qnE1CabRPj3snUMfEKjQkFD",
  "key30": "5o7hgyPyb31ifmA53YnYHnCSUKYxu1W9TofT7FW3zFLEUnvRNsPoSZPX8ULVPKgtEetB4T3QmehX3K3UNHeEXWtg",
  "key31": "5N8L1i6WhGH9D2w1aUNnC4sjALdRpJPf5D1EvFfz1vc4FkrQJaPQKaoSpNhg1LVUwMQsjhgR6tFgoPuhAjoZuWcD",
  "key32": "3eWmVQApRha6d9xUGEH8jzhuwiAvRg48czTvvnp7f9ZqqHqnLnLY4kVZYwr67GFENEoDu4ME3AJ11mQ5ohkLCf1k",
  "key33": "4FFDhkgFr1rq5KQqPicaqnFMqNkW4xq5tTWvhTsze4kwS4MrbGqsa2kQMXL7mfYVA2RwmFng893TNui3fy224VPU",
  "key34": "5LJ7HmhwrJdBuxNjZHzMhXHLQGf2W2WFZQCDbJXqj9sx4gzCtCRZusi1ZwdahfzXfEaAyMrKTyoq22cgf3hNKnpY",
  "key35": "2ph5jfSL4VjXZ81menV757niCqE6nq1KWaxEtFUSARsk4n2ScZxahmKaZDPJoDUBfuJgujGiTdPohjSAzUf7iswS",
  "key36": "3aiLmnGxwaYY8DSnxfrcxXFW811JSHtv8sWHTT32XvGKrRtfrFnCEaNqbrGptMjSvF3aqTHbAnM4yFrSX2gvSCaY",
  "key37": "4xKzqRccF9LVaZcmug1DENbMtktFeutwPQbyNehFu8CX6LfZ8oMYBvY7PY8FwAqLLtVeKBbAja4uuJ869x4kkUqR",
  "key38": "2u3YDGDGSZXUTympG82EkVz6Q3pbReNd6g8fPVeJR1pyo466xLSAE827fxtSB3STsNB2GLSDkyqmZsoUS46q42gQ",
  "key39": "51ZiVMHXipHTPuokcQa3DL9UhpSxnVsgat1y3UVaMU1NBXXLpvN9TJiRTACjBN8L5tJEdDovFZct7H8e6PaQyxXG",
  "key40": "4mp2DCG94o4CyyDBhNGggMeQsUNc1mXUuyfAu24mrnMzv4tN6SXVLSHr3M8WPkpwHvAHpoCXJrB3hnsqdVGxqmAn",
  "key41": "2q7zE4y2PA3CnbpZghrSEzQCzcZGMYm9QLueSfT2TNpsR8ED1BUHZLW7L86Qv3PhJJGjSp9ibFoP4QgJn9TmSdJX"
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
