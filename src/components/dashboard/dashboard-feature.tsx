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
    "AvNh7ZzgwK3M6A5XZ8h86cNbTtf3gEGEKUSnUSXZPCWDrnQdoXfWw369sWHU8YoChRTj9j6HZuszAM4WRxSEPoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQHZ66fTZbruK2hqYZ9GMZpMHTNE4g7tQNVLGfzgA9FwkNHDhugENrEiT3hxhfhWWSvCvvQK9XRtkFYpcnmaUqb",
  "key1": "ooD8fxXCB8eawaLdcRSURpCQmG4pPvC3q4itsTzBsK7si8fENPYaQ65CppcjrKtNmjgRHCnmsyAX4ykwZPdEWeZ",
  "key2": "4T5CTxgru7CpiFdScnrhjoV2EGnCBPzZidxHAySEaT2ShNHhU2EYs9eQm2NuVNBwiGb8cqvX4psC6yZXsCEF4i2a",
  "key3": "2UNjUE52N2GjvLns6wpEbBCNPPXjoLN774gWY1kP5JXV2d18wjovGD2serqeRDqvKDUyCGhdfowvCJwwaVUqot5W",
  "key4": "2ZZxBQDvSfcZTCPtTzVpJzwEFnzEF7LL3cXWdDZCTApLB3L8qwYYZAwX3eRi7m1o88j8M9j2HWHVacZNpXDAWzzF",
  "key5": "3rJDH2Qz6DRxBXCYGBWud1mS2M8xDN73GBP4bznQALvuzEqng5XnkCQfYeaWhZNHTGZWJ3Xszq72EoAhTS2sZFjB",
  "key6": "2hgYDEo2nVUWzKqojbNPpZLpsBKx8t64tGpDdKPezUfudmkt2VQv4WnWFGB3vr4wSq7wpVWr3J8PFq6rWDxsdsjk",
  "key7": "3xGHEZBXLdPnCUTGfLAXWJZuzJ5mFopD1hsfgo44N6sAsA7vaihFmQ4wu6rgPMximNsLna58im8Fq8235ypf16S9",
  "key8": "4DHj6FGds54ZH5pB6p5MUSMkB9kJotr7kZMMSkwsbCBwfArhyzizKhCUECGq9RoTh6gJXeuqEtBFXPeUG4YRq4RE",
  "key9": "XqRW17chSaBZV8X644n4NBasNbVQmRpSWn9UMrxqeNESgN3TAWnsd3y7C32JyTxFdzzxEjxtx1Ba1p1giEfnAtT",
  "key10": "3upBWrtLiv99ciWGFGq1BDJ1L9jHxkPSvvpk3j4YCprhDo8CNBQLjscTQrbpcy3UQFTaFNeGSDnLqxnKx4kpwpEb",
  "key11": "5mosRRRyuwrutQNeBA1iqjZjuxYhKAMS9MM1UWequL98xeHfWPX7GcQV9iH8KdXmFUB7inYPX6tPCPv7TZiGtPeh",
  "key12": "5XaMSG8BCfpBt8xuxdwKWhFuEfu7NXywBQF3qvtnxgDBN2geHARsGBcWLE3AfxBRsiQCYWFQ9P13paJEXVVKZbbm",
  "key13": "2dgWP1xSmY4aEjCSrasrmJqasJ3EA3inq8hoQ6DLBXs9QLLTj4oQonL3cEzMuF5yqpJQjXNFV9ioy5wpbJGdM55H",
  "key14": "Z7vDQXNzZCmEjkCLT7EhoAD9GyfnGU4qNJnextfptBJgk8KXJe4Zfh9aE9XvWbtWdzYnsRoq7EKdMPp7xonhkcZ",
  "key15": "2ZTsGHxfWxX9uFB49dAPA2LCm7oNLUApvfbh1gwmGAL3bWBuVUuAcdWFmhjeScPxjQouB6AF3A2HxQNLkYQXKSdY",
  "key16": "4AEfWuuRd7nxUN54WSiWhQ8on4DmzgbS7TcSVD85Ty4MumKjubrjvYpJnsUN93QDWxBaMJW5jTtWb5t9KYWAwqPe",
  "key17": "5yttoigqe3G8hhAz4fEYQNxxuv7KUH4mqH4PiJFjo6kZT6FNHPigDMyUoDfbm3ZmSMeUusQ5rWcAmux9TMbutecr",
  "key18": "3jucA6staxQGfnmPPVMEJRWPYpMYhvfHSsvQRwxHW2XFbhJhxdPrtgY1oxux73M8S3zKYo5XzDagNko4yt25LMhU",
  "key19": "4pwJH7KKyp6Db2z29n92gaV829xMhUj7mkUummPHuMuew3H8hZPxVuZTa4duKkaGCF1KpAGRo2GPLm4QqJjfzCKS",
  "key20": "5mji9Hup1kYza3rsiVcJWE6TXieAbrzoSV6XeRLk13vGNSwvGxwtDURDAp16dh7j5q9zEENTskwDHkdxLmyPUXfQ",
  "key21": "3exCNPQKHDzKK7DizovqGNg5MRKxjAwoMueijyrbfd4AARNSMoNCBcUssKYanZgMPrqQZ6RPYZt37MgmNAu6YWvX",
  "key22": "4rD6uAJ3rYx2LEgzLcmTHYXVVYa4QE4mjqqpTjaeeEqknikGFHnBudYUNkXXgMmB9KeyJwB7mHz2LXKPiMeLFsbf",
  "key23": "4uc4yyGqYopWL9h8s3nx5wvCLAuEKgWDDuZrq2MRKb1xZpbo74RzeLWpYcLQb4xpK54qpDCQy5waFrbZyzxrrxgd",
  "key24": "4z8yPNSzLaeHoEfwfYNrdcnnYhCQFSh5G6pyL2SrTdR5WjHW4o1qcPStzYkihnsn3P55oJ3accsXuUp19acJqt8z",
  "key25": "N6hy6qwZTgZAifFtGEZKzSSja7ibzSEDJQmheM56fuQjKD1RKZi42qz5YFr8GYbUFSgUEoscrm7tzUa9oUaAmpF",
  "key26": "5fAS17ZSixGsm4ARoRtoyJruv4FHKpGujrmTCLr9zV77gBtU6Eo1AnvX5CbP2x2PCzsQEHhdgaXpEWqkiW6Wisyg",
  "key27": "3R1mhDziJBK1YeKgnSDPbKt5VYd4rV8KDTSrEqivYvyDg3MMF3MneAXT6TfkDojhr69QPwp3fEfpDaoDHn6WrPxV",
  "key28": "3J5QBJ7VBinHb1F2oENnFcMR1YzPAZC6BeTtBo1yfRacJ2BL8tbdGedUSEEtdMnQrtafvkCgC5q2qTmoTWbtUbPm",
  "key29": "2xKjFQf6ujoujQFukHhAG1StVCGNGi6YkxwA13DiNNHR9RqS3NTeZ3j6g47G8edYXrzKvSgYg6aYS1Y4XdCaFPqv",
  "key30": "3sfuiD4JNMn5eDy1hFrEegFVDBcQW5W1yfnzqpiX1tAyroB1W3zq3SEG8nKbweXmTW8MTaSL8ixsW96ngWYF6niC",
  "key31": "DK43pE8syUjabZ1P6kEYxbZnKw64oS9xLsS6dBedSiSe5eTtiJxYEbAL3H8a75j5dRN6SJRzQukxQsvPjkvEPVz",
  "key32": "bTbGtcwoA2WbiuZRaQZ5anAxTs61cJJBmVV9SpS918Rs92cL4VGF8SR3PhSz1ZwxQSxbX5aj97u8NDiCZNqRymZ",
  "key33": "4641Ps1iumr3tU8qwGwaekZF6AsZ3WgnyAmG2CuXHvkwTLzRdmtrfouomqZq1fFs8jEP7CKvekJA4DmRiQZN7Goh",
  "key34": "5cbyRqT2ZpCoPVFRiiq5J8DmDj96raQzRVCt6CfjAoVSosMV2GcRyGv6XzNYgpL7T17cZe6YbNbiAWuCURV8yw3c",
  "key35": "5kbnCLmJbPvMhQsGn9B3Q5mqnw7vpWT5nqD2pWhEaoXmaTPcvAphCp2MDE6Jzb6gVA77djFd6GdZHpKmN9xnre3P",
  "key36": "Wocr3xuyTBNwwGFmbrNiUtQZdVbSRZfcbsuwcPPyE7DGpALPpbeERE34oafSA5XdtzeNmuTjKw7kWHTs9AxZoFN",
  "key37": "2DcckbGXDtsh4M47weRRKg4yV46GqUYQHFBnLqNZoHQaXuNhWYKdUiEqCEv1E1Hotkv4vzTkZ336ZdApgsMohRoC",
  "key38": "5Ew9RqHBT7JETyvhca96QDABZRyXBMTXzsHhdGSxBcYYp31Y4UQgavwSbdb8zK75YPK8qiai1djGGqUMxq2W5p9h",
  "key39": "hNczbhaTc2u5kdLsUXWhGbWA9Be4zKSgEkVEavBESjUkYZ9z4JxSstBSF4VWPUK17MMPhSHf6s3dP4KjeLGUcCk",
  "key40": "36EPn3t7ndpbbcfoCBV6LcePS51eoskXPo1oEXEPSArm3pNDJy6PVG4gyLq7UrCcGWnGbrkqfAbTNWaTEe5d4d3e",
  "key41": "4zLTTUv52jav2yg468h44jUGQZXmcLcReGsTqUS9ckmKqquoBt9Svm3v7HGAFDe6a2RquAhzGW2JZDhSqWzXJWHN",
  "key42": "34oWrVZ991nYN5RoLQYfsikVqtDxtdRSToinXJDFr72iez4zAWAk34hLchAM26FNGN3H2B6o9xy8UHtZdVcA6VBx",
  "key43": "5TKGLkhtBEKpNZBZSccwf8ds1k2PGSpWchuTa9aNJTh3uUaymDRQmFj87uwW1BNQKd3PtYBmPGvjdE3Uq4pgVnG1",
  "key44": "2ZiYLCXqKwzPiWyTKXbwpfaTwXqTft5hQ3vMVhxdvGAEBgJTwDWJSxHzchXQc5bHdBcaPm5wBfbntQ822uQ44FJS",
  "key45": "5i7wnxXkDUqS5dkuPHaeXjwtk531hpQ61GMLxSvN3cbWdgeZEYPzZ1Qfmq38dwjZDpyvPkYa8i2UpyeUM5Xgo3d9",
  "key46": "3w9CRmSWYuvxaoHRW5oGoRYv68oK9QAM1rSHiPiimM1z2rR28SQXavj3zjZqiSMT7A5kk8YMEKM2dnpYdrXebYau",
  "key47": "4FqbwqBkPptKW1FVFAn5Sx4VgML3gFA7s1qxkfVjKJL6E2RZBXxtaRPTTgnFSAdCA3YqtowR2W3fLsT5BancJmBQ",
  "key48": "53ADRgVq8zyV6qXFTmieU5rmGm48rCpughHg6fAbKqCei7cTnfS7Q8Ki97Dtzy54gTVAuf66GDcnEA272htRucrc"
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
