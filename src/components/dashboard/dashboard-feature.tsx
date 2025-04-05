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
    "4VvAnau8V6gcTTcPxeYyAz9Jzby57crBx7yjanYTzT4c1fZGWaUNkqVTG6wTaLCXCMBEnQH754k4pVK8UhQRfwTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3REKmkUzpZJpBSLaD2RuujsVWjMgib42P4mUApfCD9hZ2VNMR6iHA6PQUJuaevsHU4UJDg8PQVk7vZv71VxKLGdJ",
  "key1": "3K2WgvkoQfM5GkP5CjD2KreBarDHf9PiGZZZxQzFVBLHpWsWHy54Typ9R8jXZsteAEcDCfGQPEfkvUfNWe5bJoes",
  "key2": "yv5SkjXxjQAnwi923NWcPpRv3iWAadH8jD4LVw7hk5ArXcKD1sEQK1cf3u6FPSxje93Ecv16YX41orRbDs4wmZs",
  "key3": "2WYakohtVXoDgdhdDsPhN912MSUsSfPpw4jbKyaFJgB449VMpkhrYHJ2uJ5e2mvmqCTScMjHPhNUNZHwTAGdSnMM",
  "key4": "2TLiSRNimBwcnWYxGzmGRqJzJcTquC7koTcga4cLG1ZyeEcJ6FqH1UW9qrrtMZs3z84rhaBvSVkLs58RZb8SJtrB",
  "key5": "2HaBYf18tVBC251zdrdCXJcHummwfHNWVsXBhwc1nHSxj2AXqS2zFRE34TDKURrur2wtJivZ14yTciDmVoSQF7PP",
  "key6": "2USosG2zdXEaA7Wpb6HKKRjXpSv5ZvGYpMjm2t4FPtZHa5ENuqCMkCovL8u78WVtoDsqrSjbttWL2WXzs8yfACVc",
  "key7": "5WGFMsmJhoxjUdv7fYt3wNwLFhwEHEHtUshr2iZQ6rVkVRPhTfRmoy1FESLer3PCT2GjeLMgyuK5774ZwZ7zNHug",
  "key8": "4EscRgSjY9zz2s3GugGwv2fqKZxdtSeYvAR8nY1dbpgH43yh8njnvShpRruYwfWFN2M4P3QSo1NWUxJuJVFR6MXj",
  "key9": "217SpVprFYL9VREFXPJpSAAUTE8n9E3YBzJzqoP6iQYocoWn6dZXbifQnbNQXDfBBRKmb4jNohr9hrH4ijuTWCm5",
  "key10": "5WrdwahZs3Mk6quxEDShKQDYZgBZUSUkw8mrPVmVaAHm3SgQvoo2fgoUKYiRDpPuryw8iwWJKp8BYynYahAG1bgd",
  "key11": "2t4G6nke9HjmGjjiV3m33yeKgFL1XT1KvJNmBxPsM1UcQ4QYMjABRv3VeSM3Eef9PbyNvBsa63DjW8VD1NAfHDoF",
  "key12": "43RsWBUs2HRRSKeKgWSJL6Zxe4T7AuTT7iJKiumtTDvjQnr7PZfBcwFzaFVmPSZQBco7rJCwxK3cWK9xDEopnKYk",
  "key13": "5Ahe5aQeJjj5t2PbFhjbG8PZwKPZxMyKVGqgKtZu1AA3UoyLqEdJZMbS1U5rAT7w8LCjTRsRmM8yM2vQ1iAPVKZu",
  "key14": "465aq5niAdwqewLzekfTmBGV2KBfyX7CFpuYHpJim4yLxE6orK1DrMzar958zh4CFwXeHbBiVtuDa26GvgCZyqfm",
  "key15": "5SomhuFWuaJ8TFiejzkTGvBSQn77YRgYqJULsgCjeJgDqVj2CKKr46GU2mUpYNWZJwqwXuCSxRshXceFiKgGQg6j",
  "key16": "4arQcvm8GMJbhQqZtrthMMn14myP9hFe9Y4tPAdU27ihE2Y3FCcyjTsbVMeWvfVyaMp3xCsddYyHNJeCG8RwYEcD",
  "key17": "4cNg5pog8sLVWQz2GvjZ6MEbgXWq5Gs5nP3ft4zJunaCxxvRJRFwZQ7TofsnxHG6uEcNV7WPeKXzkPDvUwS3cowB",
  "key18": "4eiCwAdHoXB6e3cQwyzYVvGqnN1BM71UF2GJvrQVsVZHeesNcBFJbUmDxD6vTFAqNagzTbhqJbmdPwYQ3EtCAuom",
  "key19": "4rQ4B7aAmeiS88e6h6iixZgcLYNHtxmVK4ZHreoYSBVXNnHuNERfsNpkME9V5p1marYFhurJBPVrcm8WFKgcDpAX",
  "key20": "3D7iu1FHkU3RxnHhU5LEGsD2BNBryGLrxsUhSUG3dnYs3mUxfD1QNknmydu6J7FRq6thtSM7XzmEUSaHJwG7dSFo",
  "key21": "2s4y52kirdc8C7f6J3aA17KkJsgyK3C5kbyBrmNzCEwd8tCYehJrUfRDQZE2p2onut4BtCQNwqmcomuVgF2KyswG",
  "key22": "6qeLMP5bLyVubzg9tuQR65kzb5zzfG7PZaCWT9gBh3nkkp2Dk3Wha1KJ2qcQcfSFstVT9pmi7wNdgWn3qdCPJot",
  "key23": "5ktHLbuA7qM2qemYXysL2YqQj2EBeVpztEFDJuGgLtQnBD3zrSJMmx9LVL8oJLV7QHev3TecJpW7tDcAnMW3ZLon",
  "key24": "5Pn6hyp4dSZj4s49aWUkisks5VaiVARqvsrS3AKjZ91xuFG48aycgCfFxQDw7SjWJj3qZGLhJS8Jx2Fuu2VpTwTg",
  "key25": "3XpbCGSPd15G3vow32pV4kSTCexWvgoa8cYgbP7fjfUJucUuB8hWuXiGjE4e6XCE6UHDUF1Q23H6ke3wKXj1pV2L",
  "key26": "5JG7Y7PSGd76oy3vnbd5qPhaQx9ZXC3axcpUkhF4iyMLB1UnJCTu2z5kWkaazZ1heeKgVHEpLkRKtT9Crt8PvXAj",
  "key27": "3C3pTP1sVhyagtJsmDE5ij6L37apeLSDDCuwbx4mduaGXnmGwUF8mvhKCxxYzHH9VFhRwDE52v5xGEBdM9DdDBhq",
  "key28": "51yWgJndJG44GPoqm9Fgkko5sQh4WS84FtB7Vnf8daLHuAUtBiYYCNUPfuG14zLZhupAJafKEV9JH1CGPNre2Uh5",
  "key29": "4sQMLwLjmg5bHwKxz1ha2TzN3g1t82fQBEAY2rgFdnQ8xJfK8ixuuQM9SRuFwYHMfLaT9AHWrXhtp8u7aohvxwiR",
  "key30": "3sWvTAaBmMSQrQanRin5kWhEc8hWDgb3j1KMKZgWtse1zgRRhXGaows65cmAxX5qWuiVjtDzpJm9iEWeqUMa8Czj",
  "key31": "3KumYj9NGSrsdvSkXVgJ3pbuyNMBfB57k9pt8LyxhNN9VoQFiCdZaTn24mkZJuhj9KNrncAT2AMEt1zTYf9y4XVi",
  "key32": "4MskEmjMCJgFBLx92WVuvL97mpm5C2Ms1NboiddzEoG66Y2fG96qiU6WzqVVPUZp5wLaTcDDjmha4UhTkzK6gTb",
  "key33": "VKvS2RSPr7jdfwLr1uSseqHGSqZ5wHfiNscdLXr77zKpLKERVn2SLbATvxUGhkCar8kUkXxgY9S7LiNo2q2DaoJ",
  "key34": "644WTmVkisZ52XKtETm4LCyseE7Dxjaid58t2HmfESKL7VHaeazphEefv48MahyeJwQL1vjrk4oSbE49JZtpt51N",
  "key35": "5SCSC6qqBeNz4ie4xLoNCNjBAcVcCLA6cBsPtpSMdQ9GPN2MqERGEKfTsPTjgXMkqUbk6gajhqugcBghcf3cxRfi",
  "key36": "3Sywwe9Bj8mf9QZJvPXe9eapxTpXhvb1xjjHs1ufgmMPgEnqqPn2EVc2SkcayxdFMtya3KBxpQosGdL4gffsYvcp",
  "key37": "Fz7Da79UV4xk8NuViV4k4SyXDiRhFpSesPnBNPyaoDWaVaYAgENPFFp9yv7MP17W2xPxHMCN4ZtS1NjTtF5m1Jw",
  "key38": "7sB9e7HwNBZNR2gyctnLkC8BXFRKixgpiiK7azDbNjMF1th4Ee6r8mzMdCSVnkecPJTLVw8oBbqRkmQ3ic5fXLT",
  "key39": "QzrhoM87iFRG2fLe8jQgJ22z6FAiK4maSTNhc69KCJGFA54axR4NVa4oHm66CycMBiA5rWFoxAo1wp8s2ymoj9f"
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
