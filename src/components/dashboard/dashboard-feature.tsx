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
    "4yMLPwS6qoKHzzTKe5BgZBpn86Ln4mLQMjf7GPPc7KXXaQ5Pg2gqeA4hXSkwfgnjqVxH8tjzPKGfP1RitWhAGbcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dgQDkkW2wyLnRZysG5W5JGpg6dpR7GkoPH1Hb7wKQ3rWX9sP7ZXoiHbTJAd9LncJ73Ftbwf5coLezF3VRUBTRMo",
  "key1": "3HK7sdkdz8269TkzS7PShSpr9AcuvNYFf7ZNxPXxpbvm9nDYcKPBZM9F7MWkh3GiEooEe6K3S47H5AvtRYUwGWDb",
  "key2": "2BwQBHXsmbyC2S4dGt65EUgpNg2unMRFGEsaeyrV8TM3LDDAnTefVy4cW1TTvkki41kx9PmmuJy2yJw7LZCiYD8o",
  "key3": "k2WsyMKGmHm8wZSrQDM6FKZdFeh6ZeDtvYCsxvTjSLhtTi5ce8EKrcHoA9NxckHpq46LyxE9mursAR6dAfRjtGv",
  "key4": "5VvTt66919RvAWG6PcwQTkuCwKogfXao66KCfBz3q4ijR3urPfqNsUqqSAKWQ4qTaeA6G2psLNLepBPE6hCfFibX",
  "key5": "2DbVfa6ex1kGPPCnamth11g5Z9cKsJZckjduPgFXLyWFwZuHAr7SojRHFLwa5awRTZxskPrMJkXApqGPXYVfx4ZG",
  "key6": "4EoKCWSDnj2AxKZLLEvG5LsPDjU4w4npwTsfDZ6BfUdZV9fBzqidujyS43CcrshWAh8fY2TD1sBC1hjVH3NVup1i",
  "key7": "2uakQsZ7AJexWJjQ52VFYNfU6HvhShX9RLnY6Hz7zX71d7v4EQCAS83Mfboi6q89Z7UR19iHzajrhGMZgKjEZsL7",
  "key8": "H7G6CW2g8KvmjFXis2FrVFCKA77iAgzFCjGmDEj571G1xTTjNytdcvi51S49dxHdEgeognqraLupHGVzXKT5bFo",
  "key9": "38DCs9EAUhLboGtJsTApRWPgFFXtPWUbNZDdaFoDTDDrmrpckscQjftNW9i4L62DX42xZdVdRjbVrh6ZcxiLhs9w",
  "key10": "5t1spX22aC5BHS6x2Y6SPPEwF5biMNjbDBAAjBP1V8E2qE6RAFN1kvaXcSNuuKa5bddx9vTa3b2AetZ3A56JdSjh",
  "key11": "uoZuhMVsengGyU2gfoMqMNbQHX6xEwbk48nPZCMCu5FibZfWVhgoEAQPmvjrpUi1k7fU66NwvQmKzc5bxQwX5Wi",
  "key12": "4ereXoXuQiPpMBxSexVxGMTGesc8hCPeMnBc1iCLEVHcNXPSQFrdn1JWgcvGwcHcsngqY4XdSRZztknSydVSp9xz",
  "key13": "4iahyhfi5PrPefsT2MGT4xmEQzU8E6kjUnQrQqMkvvN26GAZ4SrTamcezF3JWqjT8KZBWr6b2yYK9453fFtEkth4",
  "key14": "123NhqZaNR7TJKQbSX16b1tqN8TPL8sFEkqpUdKT56WmtN9WrXoke7zrpTV91s58ZXmCYqs4FuSi1EBPnnWbqXju",
  "key15": "3Ct5qMpxWeVUiWvp1ZqQsXmAMP8mxXMxYpLYbkS8xVGRoWKxQ9YFokTXUJL2PTfP8wKHrDxBcfXQm4sMb2xFyrdt",
  "key16": "3Q4tYppGQ5Sp9Z6cJsedTWv8HKcJpLPVpXn9vNp4qAAFhgmiaXbnQh1AaQbqNsMo6FhK4qqWvTCWa2f8XSdZUAN5",
  "key17": "55NffU1v8PKBBrz86B32hwfoVjJSn2z6UH68xAaZj9au9tvwA3HxFHZvw3zhdHBzJ6FXpPQdGrtfrMkEMAbp3SP1",
  "key18": "2gL2Ns45K7R1rctsJ9fKPhZMe2nuJgg3CRD8Fy7dgUs6pNbcjfxN4hiL9T24uhKoJbfZZbnD7rdqDaiDYq8QLWe7",
  "key19": "1ZVU9TK5arcNdzX3GZbsUpEdg9CC3DGH99FMLzaGQtUpn557EzR1Rww2n3y4bNgkGwSywtEXdnGncLVbrbALd8F",
  "key20": "4bMaikQkCooDRSVCj4NtUctHT3uz1LfYBFXnQZMR7M27ZAThGGtRhbjvhzz2SB7TBEHKyV4AiH5w99JBETdtn7bg",
  "key21": "5JpEsUZS73AmbY1HMT3JPbBi7WBQtz22tAcJg2wx1NtxVUySrF682p6fd2ZFLXjAz1TXRDgAcUiwExdxdDHGZeJx",
  "key22": "4GBdnMFfcFNDheU2MTJiPQYwkkYb6m7KWyN9v32QkjnVT1mFQkuZuc6YjLb83qzCF4QYEd4G2iq8FYxXWAnx1bFT",
  "key23": "4bMptgqYpbpAidZWjSJ597b6yxvgkDrX7oY3iYv9Voj2zGW486795p9mbbnwdy3ufgd4cAoHViwCFsGQmMog8EFJ",
  "key24": "HQf4tGk91cFXR7WicLYE17Q9Gts8mwVgcFRuDNAH4xgPNTu5Pe6ZW3pgR2HD117o1S2E5d4MC3gJ9X6rL7BRPqf",
  "key25": "5fDf7KrD86xzheyZGHVASoRWybJoEppy6oMKwd4XCdtcKUQuntSmK9sbado7Zrfo16SELrNGcsYWu6K8BZAwVzQm",
  "key26": "4WunwC1pfXnZJvwNGznjVyVgDsxdC7DS74nbuzavh6vz24rxx6c8iUvGtaPLDU5a9SJRBokwVK9a451t6s8bGNxZ",
  "key27": "2SaWixyEVwEomrspAiW4uWamM4BThSMwFG12EqdqXQVU8NRWW8V59W2RZVpPJynzSoQUB6mB9UsSeuwPkzu5QM44",
  "key28": "2WVxDoeXJQ6m8xTxXLUjt1Enbd89cjfLhnsEFKQSiNGXo8xjWyERHKT9KW9cbkPA5gfeKQL4woJ3ib6deYwsxJ3J",
  "key29": "5VkXxi1gdQ8oxCDWkeeqbaw5XzXhWqeyQkAmmaj7Td6CoUGbFkKNRcM67R4TaD6LC5uph6DL8GdVCsXBo4KPRyiu",
  "key30": "5XGHsntPrUg4Mkh3EwcPSwxhx7fAFTnvVSLujnC9Snn47bnY8hVve3iK56VEgn3nyoZTbsFwipdJYSx6oJ7Aci9k",
  "key31": "5aFZLFqt2Dp7S4z1DmnUpnHV5XLejR1FYzdSjKq1BticZpD1vrA4MTWrtuxowmDkw3PoaM3jvmk9aBETmEkVDJEF",
  "key32": "2DPJH3GecwNyHZvmS3XG1XCKAAR8aMbaaoJA8ZSngMZRorNBZifn8jv9G4z4zq6n6icCXrebjUo3VNUpRBinTX11",
  "key33": "kFc8HrUynC4TcF7Buu1N8mmMHJYUiREf23dDZk8oiPPumLZppL6XjCyzdHjzeD1xvuYEkHnVgZAqFNd5yvSEPUR",
  "key34": "3JeoNL1sVYuodinrbBEWMh1zx9QSzQnQRkxnwiEJS2wEp5RcqLX3WpS1EuF2ZT6dqwo8P6oPvk9Thw2b6JraYcA",
  "key35": "3B8rUqHHjQSzUZP22iQwxympVRQwn3v1APdLegFUGtsn252293ok6ijPoMMeW4JSGEggDpihbrW5pifDE2SbiaMk",
  "key36": "3DfoXowz8nQiZ36b4XzgYLMAM3XS5ZeX5R81fSua7a8WstEcMURRLmsPPppJ55psZyV8Lf3E5xsUkrkackxx64EB",
  "key37": "65LuTHMmZw4F5L8coBYXtos7nWjoBY3C474L82cUyArXX8UfozHLFGBRWMPpUyfBxUXSScy5tNbztEDFrSummEhF",
  "key38": "2MbcDevFgYveTiEF5T2J1V5E2jN98BXT2aeXc3itYYDPdSs4f8RtWGfT8CR4qQg8xRRTiZ3Wb88Nuafrsq9CERkL",
  "key39": "5cf1Ykh9Qu4Ye4SUcH6ZQG6WNk8nWs4eiFjKEQT2A2uVp5VW7S8neFqqGfk6nwM5PrYkmtorQS4APbGMn8ZZD5bx",
  "key40": "3GPtQ4UL71429LwJHS3LsVrRP318PhHvtjYr5Pe8kAMX3fPj4AqEhdmNCN7kz3TZ8ZFwwqxHjkEtsWPZKrrtquUL",
  "key41": "4c8772sGYcDJLyCVxxpD4K5xYjLJEhzzbUFuCDyc6GufZ3xy1LYR1LqYFK8zdsubF1GeQj3f7KB5JHTeBJKfBUn4",
  "key42": "4E31atpQeTYfkFb7Umxw7rtNBUBPoSrPVM4bygFFD6vMo2mU4T5KxBgp1Pfx3rrsMZAU36BHYE4fVa211Vyy4sz",
  "key43": "4LneczYXZYbcjxvRHWj3RejCZaMF4R4s4CwAgSWSXrM26f3bnjbaAj4J3RcT8JS8EKRJpdTWfmFCn6XPF7cKquf7",
  "key44": "3bbnKm6Q5CP972AcM6nvk24gjQgnhidveAsw4dwCMsPPN71wxHtSv8bDvJ9QcEHUZrqZBK7qaESPJ8Jfqroe9cyG",
  "key45": "2hRCPHdLxsvSb9VsKy82vEBpFgprwwo8HeHUSP87z5PKK2U1qX7AnubHqxMQt8EtBdi8PTGC3XnHumm5owLigDwP",
  "key46": "29inxqjVyfnGzKtfmgjMuwvzeQHaW5JFxWR62auA8LKRLHkRMKpSDSQusCrHmYNSLo4h9wE76A7wJTrCgR5MA1Mv",
  "key47": "SpihYXzY8A3kUj8hR1oRmM3EKrV5Lrt49RJeRRkf5JEHagQX55zE4qRkoUHsHHFyjqAahtCJnkXb1PYaj6VBEsj",
  "key48": "4cVW7LGAzqztbZoTyCPwrjHvCsYseX3ZLzqYEd7ju7FZru9j1NXJ6qnxebjyTG97GfWnf6K6XUSiPSt2qLxYgxMj",
  "key49": "2q2NLX5Sopsh66xYHgtMWaPoSMusGjjfSubHo1zaYtbmNE1n11paFZkUxvpCVFMJS31ZY1NHTxzoqcyufDhmreQn"
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
