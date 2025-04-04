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
    "2hMsajqCmpa8VcbcrdMrg5Xy8654wdjRSUkL6nMaShJYT9G875nsXunBgPJBSKGSQ3DqKaex8YHxjiMBR5iJ8RaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUgWnvq5PUFnwsw5ZBy5PTNTeceUxJwKgQY2gFR7YQSzN4rBaAraBXm8bQErBat3r2MVUfCM9V6qCQvANP6neHN",
  "key1": "4rB19KTzPqtGq6fvnFfFUiaynNuwuT4FmZKwvMDefsXxwys5wBPXuCz3tFoNiyEkFKtom6jQxmZPPfiH1ofSLAr6",
  "key2": "4kj4Dw7uW1jj7teUnjjngWBPBu1F3YFcC8Ted5c8M9EoJXxUioyjK3NdkZZMY5MXnnfwwthG2EUSC8YrJM9bKkBs",
  "key3": "2jZSNP67gXd1fu3xPTq3iv9dHwHBsECagp7ZgcyMUB92WQZk3sCUhHWm6SHkpy1BTK6awAaxnv8tTVaX71uozKbv",
  "key4": "2wRkzatb3GYxPgRebmsxWAVpJbYpN6KmoZnCZSymwuHwxcmPa9k2MJStPwtLpWHTs4y7LxAUnAJZcAEapFQZKtiw",
  "key5": "34PTmNqo5eBP2cqwapEGQ6PKS9mesgTX14tQD2282ueBN7avZM2VtG8EhUsLZqiJ9psW2L4HfYNf54e85HB2RCNT",
  "key6": "2gwK1NZibKdHba5xDZSTV5Fjet6ppB1eQtNpdoaggu7XeeKUMCUmKriojTduCwLwmrFfCJMMjnkvjWvKZnfmXRpH",
  "key7": "3FFFeHS1v1YBFYirU62s9sC7RXnJSXHm89B8phTFfWB9YdoWQXyoZpo6QT5RSdwdRnTxY8ba2DECLQ1icSZGm3bB",
  "key8": "mSPxKHJo38Yq5sFJg8915LBnCsLgnhuGWcHi69nNX4rR8vnpXyA32stYp3NCCemhwQJ1y2DgFPrGZWExDMUN8S6",
  "key9": "4HEMZJTu6JPzLFb32sveJ4qgv6Yswm61BLmcYXgFpdiJJTFjutYb39RSam5JSn2As2916LSjhMUirVZdLnbCJnkw",
  "key10": "HkDrMoykuNQu4cozWhJaYabyrC8Cq1gGjcP9YYwicdG1GJDY5f4x7W5Ps2UaCBP98VamqWwaXQSJxUDL8FvMz9a",
  "key11": "2PoSUXKmvXsmNLveiqgWL34qMH2MptkJJ5qfq44x94EbKsxCBZToJXvNU1gfdV5wEZYQV6DJUC8mTuQXCjTdovEz",
  "key12": "51yhq2hu1uJcSAT1gmCw31akTB18Mq8mEEJTLQaB7e1qpTYMbDnok9H68n3r1bmvrbM1AVkSub7iQR2VExmMeqyz",
  "key13": "3XWgX2S1gfTgDM2uqQuW6nTDxc5QdpMKBaasPg8jEWH7gSci6m9FvGqLb5tBhA2PimXVrXtETpMHZHAFTTpgR5Hj",
  "key14": "2rYKkHPYZh7LgeYVSZem7AnXc5HzeyFakiE3r9si7EUXh4S7uC8dRkd5KQQDNjDPDoDiRgnLvWE32PBs3Fh8zT8x",
  "key15": "3yTdfyorEFMadAcqFqzf6Ru5iRs7wm8MSXYvcofbdxEDJa9CzzuPJxujQ4YYZgdqw5bjzLV62LcwpUFjdSZxyxoC",
  "key16": "54q84Jyha27JakQsLeavHrgti7er5gonggWGxASL1dA9JzhLhi2ZeDMACVFeyocBWr1TaeVsxxA2SkM5rfTgtrw6",
  "key17": "7i4Dyh2nLQHSh64zCfgS76r2BXdB8Ys4PaFXdBbNvzAHuzBAd3rpW8eTEgKqJ4GMMWJ5WrHTsZSQCjcZiVogzBb",
  "key18": "5cUb9b4esS6s3GyaDZW9H9bVxYBdukEfaXHGYrfpQL85SvjWbyPV3rvv9rWwxadTKbTcX5SrSDC2iNn77z48YBGZ",
  "key19": "Q1TPvwNdiww9yGCJKVwTUQLN2MaUFUXhdoi2EciVaPam1sLxpCaVLnZpvtWCJ2Sf19f73wK1tvx8ghBtW1mYzxU",
  "key20": "5pqBmRZ7xj74ZCU1v4NBoPGzGDoguRPwxAeeyz1F1e6MGStfFaqhbKQo17qvpv4W3VCkkR43oQeeKfiUgFS7AaiW",
  "key21": "42BciDkib1Kx79mu2wMxwg1hYBvHsXUfWGrxgZ3e8i1KGPY27mT4C56aZ5VUubTQVwYoKro1NUB6D7QSN8MqkbWn",
  "key22": "3HBCjVCTRjcnuBQ6QF9Zkfn9h1aw8TMRcih63gyA1eDBVRuuAMQie8BLocoj2q2pGqeaZYsU6shBkmFR5R7r5fMb",
  "key23": "4GCwY16DimM1KhVmEFic8gzBH8VeUtJ3x7sNR8W1ciQHj3PSKTDPErX3SL6bkHcY58oXoPw5qrEcjdV1Snfquon",
  "key24": "5SMNyzjjDCe43FMNbUueapVhpJkUpYpcHEykyKLPuG1oyoZJxuiibvE9o8TAnw92unhwMY8TyUy3cxKxL4QSPTPb",
  "key25": "3H4rQMBuNV4hYX75jNeJyWSbA1zybanuE1bHqyt9F2kfFtfkiUzTwsstcDKUihLEizMhZEKW9a9qfG71WS3zokA4",
  "key26": "YUd32i2zbhVkXkE2NzbXkfVmJzPtwLN1nH21vx6CbfcRzmuBf7CGHYQgGb37uKYx6V3MfX5MAQ3SN7xs2hfj63y",
  "key27": "4V8oSf6HQgMpujaot4E7mskcjFFsSEMwPDjtWSnD62Xz5KDXBjQvktDWP9Jb76tDHuWm1aFYfi5ozxEUUUrGnoMj",
  "key28": "5VC3xs4XBe9CbypnfDiJSK8X3zR42k7eui5BVxppn3Z47oGC7omkc1Rj9FmhsMXCHRu87tojghLGR2qy8n778f5D",
  "key29": "51GbzTMv7vFnXgM6DmSD5v9hzRa4H7bFrJrbQbxM1zoPSmwfDGmx1CSapeFf6RrWDyZjiepHJEECrABryfziPcAj",
  "key30": "31Dm8TCX3gkf2Qif8HkPi7NjK9u4Sn26qbeJSEAuJ2TEwMTGWPCboweATgpbNfbxQJdPvdDWjfBGS9ndSXjmYzcV",
  "key31": "2Ggr9VfGG9bk2hvE6HaTs1ZkwMXU68owhsnBFT8fyunKrR9k7jruWeNXLsyHCNe4WCa5AJDSMPUdnAuhuLqwBEKN",
  "key32": "29owZCaY39KkkRBN59vgU6wR2rmXzsSDECy9DMy8N4CiXVV8TRqmAmVc1aUZGPGgddXnbhRoWEutQZKK4SZeStzk",
  "key33": "2uZLDexLTcFMVkaTVaQYp133yRpZwk4vJrtBw9tprQraa4LVUHJXFph8GSSZpjQYhfaUULjJP7cdXjvH41eFYsua",
  "key34": "5zkKT4NokBYwqtAVDQdj1EZwQhbChtP7KoudHbFBP1BJEx9m8jRoz8DQXuqktRwtJXrZuwojArpmGcPih6zDyUBq",
  "key35": "4RU3hCDC5c6RJifmqyU5ypP2WbnZWT7gjZbfbKKdfQTV57TzZH7CKto62PkrUb5WX91HaSYXRomUK8kJAb4wa16k",
  "key36": "4EXdwVvzNX3dTipspAx2QjzPgoigpczCNgkkCBq3sCDfM2Jge8pLNyab9rRduD7kYRMcaAMDKMzFSmsaPLALhf4V",
  "key37": "5T9Kj97ZcFWzT3xuZUKNDMADPNyNLxq7rFb43DsgHiefMXBuiHg8AFgZLxcW1DjsYq9grt4L3RKQeDuzh6FCAWpS",
  "key38": "57BjsaKJNKunR9VcRyFNdzFnTmdbp9na18DPkChUVyuabyqtVZ3FHCLqoBMrF7QZQieZHnRoujxxuW6d5vB9mR2q",
  "key39": "3r35We97piE5V2oZArHk8yDSTTATpTGo59iaQrt6pTLXrLz2tbRaTBM92fuHJ7a8hH8NEtrkfAvsy1NRE5AQ4UG4",
  "key40": "2RLRLGj69aez3LbtoYvg5JtUyX8j7pZVPkpXazpetdP7zFh1mGsg9Szsr1sYFC9k8biRQ8tXCf8UaHpgYungT8sg",
  "key41": "4dBMShqYBHRH5tefxhQgMsEDhWPv6mw74doiWYHTFgDVapT6i6KdN48DQMcoxiaEaziazekEYeDrC6dXSAj7kvb3",
  "key42": "2soRJsYxAojJLcFDymGDrd5GM7FGGnnT7zeJ8PH1t2abGZJMtP13mVBihy5jXi2w5QA5qegjfYa5WuxuWNYWApAk",
  "key43": "5gruYnU7EaakrWNUL1tZX5KX749w1zKPMdQaF39YjNj8ir7KeVKD6Jwq4U4EcEie4QPG7VjfkY5e2iUxnWF8hHFg",
  "key44": "55nyLtxb9tGKvJ1RC3wZa63yBHoXNp5M47n2H1vaTh48JgFCieqMR8sUSKrGcQk5PvqbrYp3pAvv4p4dR1WaHDVT"
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
