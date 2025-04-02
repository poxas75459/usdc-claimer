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
    "UZt6ctDiiLxAuU7VgqA8mn4Vky1KThiWp9TLoXBXjNwmWKhwpQX6d11x7DVyaw3wcVQyiGyf8v1Hjdyiayc4dRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "haJaDhgaYgpNCurt798Qje144GaBZtcz3cabS1LwJa7HTAPE9Xq5nSAW1YV4x5VaAqFovaZkjp1vAW8L9KCUE3K",
  "key1": "4Gf9ibTLkax42HHFFCMLNGFjCTqAsut8646YPeXEB8mmWGQQxC6QbuVgHL2D3ksEGafC85EiGUiogRMbZ8Ymm8JQ",
  "key2": "WXov5pV4VY3Fr6ee85nKjLU7pwfmitn7SwGPoTUqg85SAQJkERWKsJzMpoPJnT5Af7q3UH7GBSGrSp1nJ4H6QoR",
  "key3": "5QitHZztmZmDzzmtrCawYv4eZEqLHKDNSzknd2BpTPvUcc8pgPDBPEJVcJBjT9DKGjeHQCH6czswKpS4j13rutvu",
  "key4": "2PSv4r4Mj65jWjvrCLaHFWBdTVCSVvie9yBUyop4eDKnY8AoJBLtiHhwUgPe5tyaPRBqFcJ5YDB4CXg1xejEGih7",
  "key5": "Poke7S24jAjQXSG6yqmK1xsWmxBErwEjmGXBWpcWm9STVm2upzFjPd1Y8MzjhMMRgwbUTGuRTqarj6H6hz9Tpnf",
  "key6": "kgXR2nSPNRh3de9wbYZBmaB36mKR9PVXzHXJ6CFJZDPsTSnaRq1TzutikVVtMi29GqWbhCHYeodCk3AN6QhXomy",
  "key7": "FcQM5cWFW5RMDJ4kSjoUECExZdUujbfaYhu8HLtFpYSYn2AH2RKxUs4CJkUjv3Woa61gCk9uq61ngvUP8owkpWj",
  "key8": "2tqnLaHfZXiT5H4hZzK5caGNPXWDWzwRJdatThaXraDiqP89rgHY7qPo6qQJQZX53aZtzA3MDhFzEFUAQ1ekqfHQ",
  "key9": "2ejNFxYj1VVYZAbAdUHcVWxDhpzcF7dqXSWii5incdhUcZCzFHYu1kCwzu52db97mtzUnKmm9mM62BYD6h7UFsWV",
  "key10": "3wsvX1ATZqWsvi9oC7NnBLMSMtaTKBZSkX5RTFY4nUpQme6MPBE8HYtQGkbrtNK2LwrdKHGhtTCzvNzLXBgkXqPu",
  "key11": "54SC35k5e4csPJ7ApDDz5DAXjyP4RjjuNkooBRnMiTm2zMradPYCVAJHPtCj2ULYsq7Ds3qexLu6Z79M8iY8vXPK",
  "key12": "4ouu2hwexdEaLG8VbKiaHwmNRTT1AsRwG3ufc17yyk3zYeW8YuidZD6gYRpFyanbSDVx8FSqTEmLcYaYzt8Vp1pq",
  "key13": "4i9BCJkErE3qkBDJ9UGGMohx1weP8iQFpLEMqqPdXn3qAYQdeLyW28V2b56yTBLU3fbuitLKf36fwvnMuARJ26iq",
  "key14": "PtRDr2heEyXgjzWSNGnHc6KWezRH7LhLe9WptPxVjv8f3kWwrwUaFe1SNxp4t6jTxXhPCfg5YxnbjaWXoxLFeMj",
  "key15": "4GJPAaGq7VqfJ2PG78LP5zwcn4exMLuENfsHGngNZtgZEXwx5wUeqmFH2QK5MsF1kwagXiM6Tj4vRVuS1mLUjQcK",
  "key16": "2n1NfJ6nktMuutN1cBNc6f7xH9BG7jGnjLFRuNAFgRKSR4YHmwby4cNLWcaJ5U76eCSXNYbh3b7Pc1BP76y7BAWt",
  "key17": "4DKxUto9CM3nDr1i1rnZYHF5iSTLEMe1v5GpGW2aCzUyBfd7qoHp9vXLnmMTTRcuoyKAjPrrcKJzjsq9SbtBbRKm",
  "key18": "5AyfATjbk6vphsfDVY4gN1Jo39ouCGKorKVHL5YNX8F48oi6sF2ZVcFv3Kf2o9XpfZryXCqVzmzfKL17R5oxnMhr",
  "key19": "4hyjurHTstgXrzUUhScAuFuUMb44E8syQ4wbdQ2kmQVACFQ1EvqqxAN6pMhQBrejN1jBTcUoWbUeuiFum2cJAbFe",
  "key20": "22b9ovGV743sN8MbiQQfW3thwMzAwSxMpNDCdd9t8aAgRetyxW3pLoa6YjdpmPKNELpVnPFwNVbw7SM9CNZNrskb",
  "key21": "3B98fHr8m1Vamz61ppcJpz8ae67nn2PprrNGhAhmjUeD1JGxX2B4o8dQad14ysN8VnNd6uj27Ljx4s3UdGg5uxNP",
  "key22": "3MzmAiPYj1dmVL6g6uiFGcepEepPMQLmzMT7YW45sdB2jRGyFexamdC5c6cNyv7wbURNBzczo7votQarw3udTvCR",
  "key23": "364GhvkWuA7hY8xM8KkHVC1VzhTGSzWConbrUNC2UkRcRLdPmMPn67kvyEVcg3k6pVfS5ByxcSLuGzPvBcWxVP9z",
  "key24": "5nbrPK1CmAEc3AMCiVUfyt38cJLq6TKRcrJqUMKELzewPV2uKJer5wujhtdKxfwAf1xGbfmhpvKduyD5qdAekkxS",
  "key25": "621QsMxwdh1k1jWGckSypsF52B5sc4BdZJUigTD5m2kBPU3wYwiVUwSrEYUWFWPWx3PpbBVc3THnu61c3AqcENSh",
  "key26": "5jnuY76B18FHQNyJdcmD9C1XLRWWXGRBuNV78CkB4RZ2UbrraUxRmmqEZUCmLqbpmUkoDcimAGkfYhFoCQu5gNQR",
  "key27": "37gEFvxQBRJEn7ZcmmwDc65uq9YWtbvtq4M97Q6Giydp7bXDXsrfRLTm9RX8yNDCya8vHyZaD2r9kof2osb9Y14C",
  "key28": "4tGdMpv8FXUZuCwJSUPG8mQFvaYmY7A9LqNdSHe9cKEHK6TycZbAMwwh4BKciPFk76X6awH6LhqgjMpR2GGV3EGh",
  "key29": "5ujs8jPnFft8QFmet9a1dvQTnYYHqX9mqs7D4L8HwnA5RfEKSWnUawLHqJU9PUPv2jTxfDU8iccjdWHDkZYNPBBT",
  "key30": "4ryaeHTMgVLKzkiA5N6j66FKeSWzD1r282e58X8cSwyWfZsaqxYD4e57HZV691rkeXbR2vJmzviQup7qsAhwCUnL",
  "key31": "fxZB16BZxKawpT13nRp3ZiFwNsoZWRuYXC3SfJyDiY77NtxoCDN76go1viRdz2DxmuyZNurXVtGcZJQbqaGZw9q",
  "key32": "3GGwDBVFsVpC9FWntiTUeGRwvPFEnVW2CzApJz4uvtRy1M2QABVLvB6XE1oTTHzdoC1zADsfvK1KhdJjZXYHfQtb",
  "key33": "pno7jcwzzqRXgXJukzYZ2Hyk5yCvnThoVAtKVw1Pr9eh1ZxPW6nNVQTyQLN4uPf3sBzeZA7TGk7Kj653HFUoMTc",
  "key34": "5mRuFL3ie9wNXKTsQWoM9dHi5DMZhVi5c5GbXPeokQMszahtVXBctPmyKyra9R3TAuMpMdZeRa5UvhnMoJPD7bvA",
  "key35": "53v8FPbXCsK4hDfWVM4Qx2z2e9N4KzG9XrEoXG6GqhQGM9bPzwTMB1cFLwpePw6founRNxEeFzv9atvTE5cYDEdN",
  "key36": "5qk3hXtW1MQAScq6grwqf6HLEVz3ouboSW8i2c19gZTZqs5TkzUiYBgMxGnxfPRzbsF5dYcBf418LuRGG4iREp17",
  "key37": "3GxustpPUmu1fioiRq2LRqifzEGqknHYHCRuEYp8WpRXCQHT58zRyQFTri8Mnu7PWfMmB76C6a1vJseCREFZh5sk",
  "key38": "65F8ubmU138FhGoNQknVMB9mw6bLMf5KYHgvT4M9bRDzJzsF8vfWtDDRgBsqXSjR4mCsSzxvPmJFaKNHSmzYerk6",
  "key39": "5ZZebe9EFGf9TX7DKLsaSFTS2WpEN59C6SS2FP6cQ66JcyY2HWEnNh2M6q5MGXhQrzFj1uz1hvHMhHPdryWf48jE",
  "key40": "3ictwXZCcSCHJtLtE3R5B2aximee9PMmyV67VmHeDVonZZcmKoRGoDMze4tk61aMG3VRdBP3rYVMEERDehFu8Z2u",
  "key41": "3GJSQfwauNa1BDqzaQ1Sc8pk8dtwzhZWQ37U6VLGVP8BWscuQ64eVyiqDZHyFhb2s9Q6hhE5RSXDeVjxvSxBJhuo",
  "key42": "2jHUd3FuxCMkyoTjyJFrnjWHSZRgJ2TjpSitJTAVbai7rXvXWAs1qgYDNKogPtY4xu2pVTk7NG1yYiVCGz6yog6k",
  "key43": "59v5hrPDgL4Xo3FomL6k1DCF8rYP16naBnnGcM87C4wLTDAnsQWmx7ctp3kLt7JuyR5auSWiwX5Nqa2K5nLjfUdx",
  "key44": "4xfaS5Dc6i86nYsiqU9K27KdLzmnNW8921ge7obhd6auGc6pEpvSyRQKr9FCy8qYT5tzjvgvt64QqVrKxx4cyNv1",
  "key45": "BeRLSuiPbhubwEwNGvzFZbwST1LsSBjckxsAnw8jvMAVWtNgAkzpAZNK7cQZEDMwYdHtKic8ygvF6h3sv8avzo7",
  "key46": "4JZhbXSN81BNkvSSesuVta48AuKA8v8V7j8puoCe4MyWdYKwwPExU3Mn3zM3ApRodZRopKFcjtFystJVCnt5XnD1"
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
