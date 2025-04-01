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
    "CnVXubS9iciRQybsmU8jpFQ2P1JnrB3KNM6v9LUreQYDtuDDns4bKYUFMMX6bJc4GgBkVFsWFjKnTJpFxR5c3AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzycXNtmruHTwnYwyHg5UDpnqP3XZkjwZLwYjGvhupHQjaMmEkZuK5LcriVfEtwMaR7UNxUQR8opd6dyTCeGVRN",
  "key1": "49BbekY7jzCj8Wj2tGmi4mDX94fbvsauixiAyDDXsSAs7GjfT7U25dLHrwckV3HzYjLbBXB9cqFZfjCgQxtBxDgF",
  "key2": "4k6SmKtXqg13E1oAuNaALTcXCXvucB6T9kGvWAbnCLBHpjbcmkSAPLdwNmsZ9Je1FEM2DjWfZhMmcuCXm9hWCQb1",
  "key3": "3GM4WaSzaTmBK6Tux7MKX3YesDv1ExLVY9g8n2mYKmkuZNHzXXeTQdHFz8Pwfe5HrAMN2pAHzCPu7dhySgL6qvgw",
  "key4": "4aNuLHNjGCtskDZghQasiug3nt7gkUExroWsUqdR5kkdbcqGQ2xLjAHe8PpmW7JWH5xg75dxoCuav2AYUschAN5y",
  "key5": "2cj6zeNjp846qihHr3cceMJFUQNbKVGAt7w3U5FBMq6x6AZ5f2GPYssuTDpfggtEgneNdiyqTW1B55Q8xRQxiGHJ",
  "key6": "4Eugr28pnodoh4cbY2txa6ifuRvw5txSCHibQMMji2v7mnZPBbrQv3tsoy2T9PeVSgT4yKYunQCMykwTA65c8ruF",
  "key7": "2vwcApnW9cVfYcXxjwS1A7FsMQzF7HWoMpcsiCuEJDNTp6sjEoevCSnPk3KAfqdCGWz3cpqfdQrvYmWCGPtAqfcs",
  "key8": "3bcsrdZGbHCgy8gW5xZrXMxrQKDqJGeHx9Z9nSAfTsbdwWe8pWciFnUD2M7tqzNpV8tNfoHFdWv7BXRJbr1hj7vp",
  "key9": "3CeEJGAot1VwNfzrSad8GdkfdUWvqmgYXBhLnUWz6p5tRW2JzjSNSHqqHbTSaNBYTbRESAPjdbhGTB4egwC1ph7Y",
  "key10": "4uWyBSaBET5VYEXKQtp7vZ8wsk5ubFd1igeg37cn1UAHDYA3goGYaBETQk3sqfuZa5YcQw9nmt3vrEChBZaYeVvW",
  "key11": "2twRkwiZDSv17Yx9h13PJCCZoQHs6uSBDZdXTfKaMd5SDG7ePFsBz4Bz2LaRppTrMNaS56PDSpUTutpXGePDKZMm",
  "key12": "R1jLuyguSAj28g5R9qMx9fyXakoKhzksBy7ta3BxCnZ6Fdec7ocFsbC5HSSAvaqmR596cNiKXq5eANnAGCMtMei",
  "key13": "4gyvuBXnB6K9VZ3Eg1z64dgNnEbdkasupsRdLTPDHhSo4KfvonCkskcfvX3X8ADiR3xy4Us8vC17XtomfKEpDbNR",
  "key14": "4jCGtAiSCcxPBZKmQEYzM4Vv7cGAw1i5icMNR4warvotSkADUnSoWM8FY2gW86GHjyYt2sB9VMhsgmBgPLstWJiU",
  "key15": "4gSpYvZpwEYHfowyNKhhg6xPy5g99bFH5QYk4s6PgQ3BMe6vCBdpQ4nU6fXJTBi6Grx9PocsbhFNrSngBWX4sqPE",
  "key16": "21xpFqRNx2kw4usLGodtWgmgiuHBjHY5vXvE7C58ZRqX9rnKkmGKugbd3sCBs6SPJo69x2UvcceRyCoKBgGtv2MB",
  "key17": "5gBvVPdbiZbio3aCk7mR7PQyCp4oCsHHgGPHSG2naqB7ahCCiWDwbVnY6Eg73SJHHbng7AeUjvGQWMNFJ1Vq5YTf",
  "key18": "3faGWmDaBM9qMy5TowHbrFXHQ15nKXYUR4yTDiavPhYhAeD1GK7KHxoMZvHGAg4w7ndWWr1g1XFAdafw838cEFnZ",
  "key19": "3EVj5NcsniDDyhnyQBEHNZS5QnXzzVS3faBQ65mAjwmz9TWtPM37zRHJBi166TbkmVCFtyRXMddrCrqhfdLRAJG3",
  "key20": "4ej7gAPAmApJwoJvTjunhxYrbreBnc8pDTxgXqgVvjN3ExWU8wwK3FA6hxHYHQM2hEhFL5dh5aUAKp9cs1urSwmF",
  "key21": "hdmRDysxatVXasQsNznjGU6dZKUWMnyNd3buvaYML3kCfYwgkCLZzP8zYxRvn9giw4M1ix1XRaksKak6cG969Wu",
  "key22": "5xoGZPcHmPUhWqjBhnZrC5GkSqVnH2J8Y9D7Py6NAdK3z7aDwm6TTo6XcXbjeAU2jXF8zQgVbh2vywfyWrga6GCR",
  "key23": "2bdssyvkTzikbP5PbanbyR6tEgfVQUATYdYpPrbEGnkunCAkfJcA784ndGyuKDxJnE2qd6CQb9E1D5wQ94qXDA6E",
  "key24": "5R9dEUAmN87pBMxd14rSHC2iM6jxAqR5gDFiLFPhTsTjcDNefmLT7P7gTtPo1n4TkgZYpPJjmWrC5u2Xn97tQzAd",
  "key25": "3BC6CT1WQMf1YMT3tGhcXraTEBPZv9gnykXb328yvzFQtWvnbQBzCrFjRSABRvdaV3iLZazSRd2ZnfQ77L1THWEd",
  "key26": "2m4GokNWgWsHEkZvAKGanz6tSxdHj4qtP4AVjWRBnbUvJVkmvwKn34etaeatVuQ7tWEbdhvnsRgaLt6JZ5ha2MZ3",
  "key27": "5MkKWXiz6e1Zad5LA2NES1jKXgwXWofWFXZ6BfagAYtGdeaX16cJo2ovsDU9aSxKa4N3XcRBFd8754BzJMuA87GH",
  "key28": "9rcLEWCwCrBv9foaHTmErQM54kKpxjq6jfqutkiXKecZx4L3XhpCGWsNuNp6vMUaKa5vdgoj4bHMRffybnqToYq",
  "key29": "2sQ8DFVLoD8Laa9WG8ZPqVRKYKx4TN9HQy4jbFnGRzaX3uPwyb2aSncgo64xVBd2crsczjuSvizA8GqLiTSf1rKU",
  "key30": "64goecz34KG5m8o84RGUwxSPezS4NTiMyw24BS9CcfztaHQHEVxqHBtph7zc76vyCRxRfuJxAzuDa9tdGKSchZz",
  "key31": "57kEGJPMVbpfvhxUgaDivD94UULLwdnWXcwH7g2xcnSDJL5kiQ1PGRZEaDMR7WV3pesCNrYrSyDXZefebxzVAMVv",
  "key32": "5P1qxnK1KPMLVkpagg3ypXcY8YZn1wzN4F5L9B3sw8bvQvqmKXMMjpBNK3VJqvsQa4m6ud7ia2ayi38k82ipx3u7",
  "key33": "fqdJ6bU5wDC4TiwtebSA2CNsWk88Na8GKjj1eif7G2dxwWrjRgTPXpEsHPqUoJD1tcovKr1KjSwtvy2hCn9BQ1m",
  "key34": "3n6YCKyTVktvq7P6eFQmHwmrpJMtQAqPU4PQiEre1qJpexVMp9JD4ZfkLKfVWiaXY2Zg7GeXspYQKpXFjzsx5cxk",
  "key35": "dsJoq36aWMKC2oYF5uigWAaRBMvA4aWyjoJj5t7axCWNs8i892PWQFkczAmTfvidDY9hLjD1wMnoPgBgLu5P7sV",
  "key36": "HnFwQYcXKaFg3cx5cwBtvkAA92wVgAmxgNiJC9i8aSsKKKizr3vdGhK7f7QJS1Mvfw8kjh9uvzTs2SRaUYNRieC",
  "key37": "4NBBx5FHrajbD5GLrE5FQJiozbJmAWUtEc85sLyn5DnUNLQQLf3dcjHn7MexuZPLzY1SvzSdftiuw5kmLTqunWzs",
  "key38": "4XPAojuT4de1EpSVkasA8R2YqAcB6Cb5941uSV1ySvVGUrCyzia75tpw4t12nVLT2MVpAcJKcK7gqn5AXSUwuknC",
  "key39": "2xMk5k5mQRT5jLcgbEFG76aDJYMGZm3XGs1otBWPTv4hjRhvPgjVkiK4jhKqncJQ4KkVQtR35555sSaU5WWA94T",
  "key40": "RRYqXgWfGjLPmX2aHV2cR9crHZYsZPJzzt8PC6ettfEqQXrHzAUcZtAWyS7GM1b7YXcxK6k6LruncEYCyvCJ9XE"
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
