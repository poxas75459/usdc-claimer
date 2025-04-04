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
    "364HvawmWc8KMY3w2EKbDsJkHCY1vGW93EZw2jPjqFhSfbqc9VfExAs3D1ncAMP4jfZWzDfo9KbhUTT6ez8Bkgr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PErqQ3odYE3pZL4g4kedEESVCtvy9MHjZcUpVXKXkBcx3xg7PdSjvVL9qQssUxVcMcRZdAduPEat4JpqJTEuBB1",
  "key1": "5igBrAMvJsUXsUp5nk3iq5wybJC26Eqc23zuU751pVcLegd5KKMzmBxznrFaSwUUrGbunbLN6noNNVRaMatVv8Qi",
  "key2": "GHCqSv8n2UqQs7oJyeytmrdDyQoG5sE4PhH2QWDVPeMsFf786HrKSwcQa3z3cdwHMgAHue1es1QdB3Txn4vMjWA",
  "key3": "5jVWK72uKc12gH3ViEerkYRWF9Bt55hFd87P5EVeoBqazDeeKYi5FR7wZVwLCbp4eth35ou8gEVjghngZ4U4TdtR",
  "key4": "3rzbZTCYhs4wVzomAVmHBFj2qku6zwbdXJSMHMfUeTagymrneRdadcFDw39uG9jhGUMXGGH5XEg5muVv2uBdTkKe",
  "key5": "4ePrLdLFt81m5j3an4MX22qcLyPd8oujdpRbWKhCR11vz8PwXPBJNzSg72bBQmqLXbFKTN1wQeb6Cby56DKDyyky",
  "key6": "q2z8euGnSFVRHoWi5jtJ9f6NQoNweGWkawjkCLnWZ3NSnWHJY1VFyNwx2D96aBSqYoSJvc1tuHQUrVN8mzKTzyJ",
  "key7": "3nkY7PJqqrRgLGJ2HX8JNQqdtWocx1CHmun1Sh69Symqy6Bo8iZBwe4V5PPTx7DCZGpuwPrQw6N9qt9jy5uQLuTH",
  "key8": "35k5BMGvTvP5Ae11um64t8zSr8fisF3U2StX7qhyrAgyxKKtuQzDCmVV6Q5davPRod5X6hKUQnwwqPumhr1kuYLY",
  "key9": "2wAABmXqQhroUxtdUsrEiGNESoXLKovthis1KhRWvuYN2cFk2DJDG3ye83SxdkUy8x7vgWztoATLGyssHBqtDA2j",
  "key10": "2vh3Xkqxi3JwHhF9cAdU2zhLSyAPGftP4FTHK9yj6gjN8WdzZzeu1vR9ptBogDoPxZanr8ZjiMisJy2ouFNc5JKc",
  "key11": "2AWu3zCmpzC5iyhQ8fosxuVFqtdPRjJxFQSQ2HD7UDjGvhnrTpAd1sMmW2ai3m9rrchBngdwXn2uuJTbkYbzdsjy",
  "key12": "4Wai5yVZFEkXvyDmFKAN9zLmNaZk5FBuHNW3WDteDWmekuh81rz1Pt3peVqY8DGk13Vcqs6Mmu364D8jNASc2JMM",
  "key13": "2Q1349MWtLdLDpYLQbUBgsMFRQs2RrAJ44MwqK8FczzSNteU2VVVcN1SZsou8UAzd3VebwE41oQfWoV2W5toKS44",
  "key14": "2UpohaJmoYeVfr9dKijnCzposfVsH7t6xuUA7guaQnV5uRv7oUmgjjpeLWw58tLr1nvpqM4dGa5hFMkPDJvHo4eQ",
  "key15": "2Z1t3ZGhPX9K7zsRgi329xs1bJgcaMwSnn1ppoRd8bUUhxqfUrKaf5xsKgoYTfgsYqAuaitE1EDC3eueD3ZyKtu5",
  "key16": "3yFZZ5jUuXwJLm6x27vNmuvFaAcTLQtn7vC3fKmHaWPtZoC87Gr7AzoupVGa4pkEhno2AvQzRwvx5s5ZytYTBoyD",
  "key17": "E2axwgfeBmPbisdydCU13Vyz774uqNAaHqcbGbDmx5LAYz955VDAfnSfzxvDd9vGgpTUcNno97AB5MvBqkSQr86",
  "key18": "3npGioBoxLU9Tx68FdGf5om5RXKTv4Rz8N8Jc2h1t39KPuz2zrSyRFDkjbdEE7YPU35C66dUxxcMDDV9nZAHvboi",
  "key19": "42F2ho3XYyLDU4R9u8RmjU1gG8PoKsrFkhR9MdmraEbmUTSoyTF94XffcoM8ib2Fka6ie4Pq4VZPX183ycUqAKiG",
  "key20": "M58VLmAiFsTE4eqempXQEq2fNPZXdqyroayi2berovu2UD1LbC1dcBDKUdMdv5vdyoiqQDHeUSRfdpMpRBZGafc",
  "key21": "3hrKftinAc9ZTo7tVG1DTJsxkUvhnPtcxyZz6PxGuPQzHCFbmDJjCnoG27CCMyHCDhjpYcGhMNsBCsVVA4DmZ2T7",
  "key22": "BqdYSLh4x8TJUMnz9TDBZAfY9AkU5DDogt51pnViY1nx8MZZ7jaEgAohQq799bQNDBqoaMn9ueVXFgWxDFDav43",
  "key23": "59JE2TrwFQwe3p7VB5eomjbZ13nB1ZBy8s68PHwzUU4MmuDz3r2CPBLF5MC2Bp7e1v5UGDxcNAhgwEgUA18wWiJR",
  "key24": "4u2SbYCYBVr1FeNPjgQF74DtVFrBqpAc9QpLw471YbE373GhivBZS8wtosRmv1TiYxWtkoobQJ6RkjaSZQKUaAdC",
  "key25": "4j3sWm43UtmL5CiUPhmJJYoWEqeRRxDzWQJ4ndHVyjhvWrBYvX1ybH7PmuRt1p6CariivoyoebQkSwNagsHnukL8",
  "key26": "5tTZZU9KVpgXKCCnpzLv4EPA8B36HCXuv6DsdQmQoUYAYP8LMFbzE5zqgsjXbb9o2cC28oSXCTb7pCV3TXiD1dDn",
  "key27": "4bcoKpwbSSasDYqhvjB3KrCmAtvteErcHa8sYkrZyGXHwFUThLg97MdTjY4KYMG8UU5byEXGzHjvM4t2zHXjfd7x",
  "key28": "3tqdkaRDhzNgNhXpuWiicMpJbEw3jVaeUtayF8AhCCZs8JaXwUeyyHDzYnqtTmg9LxqD1oJxMG9ENTyHAMUGQ5DU",
  "key29": "m3tYVGJx8FB88KMJvyg1TAWnyjvUA2b4UJPEVp514PB6gBx5KeJ2srhqK72Bj2cngwEUk3ruGejHewwsPK7SRjZ",
  "key30": "3LWvZWQYo4YqNzQwrKbi5X6rYAfd1dD94hArrSw5jSUDpjCjiBmF8BTCKk5otZyp7qB7sLFwWZRcEC6Lc37b4Pdd",
  "key31": "H6zirstcv6LUuUDbSogSXvHMMoiSYopAg65W7L4DdybsHBxwipP6KXj17f6mRoEyHiNNqNTRBiPp7amUqcVke8S",
  "key32": "3sMb6XXAauatAsYwGHq5P6LkiRbBSeH52jPV7VKecEpYJ2TG4mdfCCuGJvAsHMMo1j5ZdwA45NPrqJmeA19dr7P5",
  "key33": "4w3AN6yEnyko5dsc2xAjBgkkd1EfwkgXJ4H5Vrg4pyUKz7CRUkkanwzHdmoJ75LUD7nVVFx9i5DwfHnKR1cnUqAD",
  "key34": "3tHtT7MCeySZBgQs9gg9aLcmQwa8h7yBMpWtrrtUbd4tSiktzBg4P8WpXdPf7UQfVVezppJ7VaQrSYrfiGn14XYL",
  "key35": "5qtGSCj6Q2ey4t1EqYnPHTbSrTCdDVCizjrheUydGX8D3gmZ5HuVvYs7pxkqSpNgfwyMgoWzGW6WF5R7tLJ668uT",
  "key36": "2Fpz1P9PQryrqLg6px5pZnrf5vhVEofnAFxsDps3Fi6Ui67bshAAurqi6CS9mvhCXP66kt8J1K78DwmXxNNrwhqe",
  "key37": "3NhQgUWeeJbL8S1us71SaLps2k2hJC1oWSvQJZYtp7SmdxdzRgZDMbJTLuLZRnkVfhoUzdyKzjdsppS1bFHLjAvF",
  "key38": "5Kbz2zCUaWXNBEJxTCn2i3pFmAMWddz9cK3ZDWkUt1ARiqxXEdjEk21W3GnSeVJPzw4E6Wuh4nD2Bs3Spn7V4aFb",
  "key39": "3NBXgot2hyJmB78K8Ta3eCF5uR2RM6zsefkUWx76iuprKUgttpgQ9C9tDv2eu78BxHqesboCUxt8xEy1MZJFw9sr",
  "key40": "KcvQ84BYU1cyThuk7R4AB2cqxVcXbN6kaeojwyPmdhkhyaBRU4FsHoTG3z2JHmYdfEa5AbGYYNfPqRQSu6PgPvq",
  "key41": "2GJukAAGRqLpEyLJYNLa3nTY549L3bpU3S1VVKajnxqYQ1kYBF1sXo5W9XYCSaxF7BJy1dmJnz9N661QmMbv9kkV",
  "key42": "oeGhuvvm6oWhSYtNMyML9ctsvNNY5FjpYXmUgkKt8KsSCF2W7hSdhSGkMK1oyj5pW197NoEaTAVxv2gN9ANCKBs",
  "key43": "pGW8VMX7oxrZtWizGEjJDJAwyU1oA1a1esXVtwDGVX2FRgQjsYk88WqpRu9jjcxCGfb6YmgrgBepF7uGdoAftVW"
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
