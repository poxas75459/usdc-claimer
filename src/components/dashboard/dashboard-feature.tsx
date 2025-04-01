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
    "38U8oxdEe4v1whaV2LKkaPQt8WWAhP1EnGP4545vWahXn4eSQbhjRqNGuHSD7Trv6MzDJ8sUP2xfVVT2zCp2XcBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWRjj5hpDtyj2ZHKs7tSni39mBZ6NUkB7eaJi6ypxyu92m2o7Go4xK3Hgsx4qLHBw3sG9W5cCNuPfnTn5UuuR4S",
  "key1": "3LHf1tJg6Nv12PyLYsXLuan6kzGJduGPknnbkta5iYwkA3PWkpRLkMcyRwfVykKRC99bPXFtpxutuXzwSxpmnjVH",
  "key2": "5vpuR3EDa39axTmuoppx4VeTbM8rcBUrTC9VdKyqHM6pdYiXWg2XdHL7rjXA8b14EhrGhj6PwskKtnWtksGaYBiR",
  "key3": "5B83cnPspu91ey2RN77RhdfFqb9Xf9bYyVcx3rdve6nwftY9W1qQ8KXz1jGMa9o4eCnEiSearGQkrSUSJRJdq5th",
  "key4": "4eDqsnPxo9yKAmrPk95ws3PbXTbpLHNAWaVm3kX6zKWBjx5E95psfsDuo7ArZn5GaWaojKFYBs39F8QBaygMNfMT",
  "key5": "3stpif8SJYEc243kD7pfzeK36j4iJfooXAwPjEiMQXEKrMyGL1fNvgCRhXAwmJPQnwvCDKh8rccPpiGxLTh5mhSM",
  "key6": "MhJzwNqNi8DBdjFJNgSDUCvhm55Y2yuNp93mdnSK3TUUTBp6bEoTF7KPdVNHsj7kAHyPCBdQfTXbFaKzsNGL4ay",
  "key7": "5nb6XM3MGvRDZJXDctHBLn713SL5EUTAoPf8nbKZSVuvakDs9i1CZSan8CWuawxvAe5URGHNDSP8YVXpucoebLdo",
  "key8": "4sKzikeegLyeuJKjV6uaJSohzmZMvoE2PiJuUWTHsn9N8M4GCzVkPkGZwUpSXw7izPiU84jPrVnDPCVZDBYHExKd",
  "key9": "4WwaZ9d6arE1M6W4FeUcYjJWMcrQUiwfghfSnAyBUyt64gSvrpxQfjVxcUPDqV5vU1NJ7ih6tydaLy36gAKTzxPQ",
  "key10": "9qYs1W9SLkLZcyQVEK5UNJDSWoXTWaJZAaHpDbQaaaivYUQtsAKAtQzDZCFXMptiFEj3rVL3zkeDrAQDxcnBh5e",
  "key11": "3RBdJAHaQEroopxs6Zx6SwRnMMvcnYPLnw6ScZ7DJuJ3tqztXFAL7ui1n4xZ233Lzxgr12FBiwaASp1zjXwfivro",
  "key12": "56H2SJ4mGowACuLFeWMjJkzkzs4msEt9A6vmXPB6YhA4rZUhhjSrgt2DqtfrTz8t3z3edDkoTqsUZ9PofzsA2C3D",
  "key13": "NjGZYFDtWfNTbPFmMsEMkPD4vUBwcyVm8hrtSmbV66b9Zog4SJ3ZazqE6nS72FJ35VQUG5WzcX6UjEvU9LjZvcj",
  "key14": "3wwCCmBuFtajLUCzaS77d27HsV5HqNgaGxHUAjYXTpmSY11qptAuaLvuiohwaXS3Q9ChA98jWGPMmSvHCagivQtt",
  "key15": "PFUgN6WckkW1A3ggCw5CMJQ2Y1KyxFGw1jvW5hWrnrgXT5vn2HKqLm8UNeaGcmGZZnuiKbcpsESAJT38iqEVV6H",
  "key16": "29wdGEVCiwkrM8NAxvw5i2QWaXjyJMkbby5yEiHbS6tNuPjv49WPkFVTNGNrgzqY6rz4Bd9WBMrotBsPeFKPmhZf",
  "key17": "34KMU25ME8pWWG3QNpd21TwyEBTcrWtmuryz9QcKYV86yYCnRiMMnnE6GSwC7bgD5HKQSM5GMN39EfrFvYYf9daf",
  "key18": "3NnEaGga77SdDNDsnZUxj75LUTcYYw1cCdpNSqfbqKEaPzzQ7A5mNweqvLSrVLdhRtVn2fyF26Tk3zAjcFYZ7pw1",
  "key19": "fEVjpHDJ873pHVkjM6p8HBfpog3wD8TqQs3kijBcAhEL5eFgAfpEiPKWYnfrfbVJJjoamwqac2Rs8SqVud5KUoz",
  "key20": "2J4uPS2iqCMvg7RsWNRVkBZRBqLFVD9TTt6GbNUaxZiUrHBejuXc9jtrWhNSjzDitxn544hWKhahhCmLPHsVtpwW",
  "key21": "2oUe98ApqV9hmVupMJNrXswttfnpZTaBd8nZuSCMDpvhqf6Yum3w2Uc3Uys3k7qoMLL6erv7LWymUagi2x87JVYe",
  "key22": "4iZaDjNuuQt67NYRQvWACU6hnG6txe2UYQVc7aXY85VzYojJkMWx2UxB3AYmBQQgttADFLwQHaCTAqTkrPtoC33n",
  "key23": "33vWyJLkNbD1VC58cEB1ajK1jLjBKMXnKnbqZe2Y5Jye5G53eeuKHqJitwH9WDJ1KBW1ntNGvsT8uufiv7awH3La",
  "key24": "3GJMUQ3baRZxbhT2XMsEzjemuv4CvRMbQKGPnAJ72vUs6xQyqH58ALxNHH6fVUnJkwwPTenb28EjaCtdsY2PgZPU",
  "key25": "4yc4YzWaJKBERL8JvYMnTin4nDiFWN1QqE9nnpg1ukcBXTZ6sTTNQUqH2rasnZXgAJTV1D6KbgiRRHbTZWdLCKY2",
  "key26": "43YKPDuGX651v43GLintEakN5KzuwQjegSMQHpiF52ze98q4uAyNKvo7eQhyfdbkS4p6R9jt6tzLkSS5G7gXnBhw",
  "key27": "5PTpL148BZ2PYKtGcK4CspcgxK2NLHp8Acq5jDYTtyZmts9zLB5GmY1s3zSR57Q7jomdQmmFRGBwzkPeBuVaQMCE",
  "key28": "2D1xH3DXRHQiqCXFhyaVF7Stji1dYjYfimiNoSFZkhaSa3PzEp968SDoW7E9q7pVtBhZecsmSVG29Y4BiG6tk9ap",
  "key29": "2xwHHbdRhsW5mJrYqCChFZW5tCj8SpWg3srZ4YGgWdmr6NrW2fX9MUTng2tP7p6GhFWpnRg2HJQLhhe1UW8nc6Wn",
  "key30": "3bkPsCjiGKd8KBi83wyuRXjD6xHQzpRAwR5M1RUG7XiLae7pomr4hWic2wt3bxR231YLiW96YPjAycHVDY9D3w3p",
  "key31": "5QwiJmwyc6fgwnQjoe4r5WDXj9v9Ci5rT8rb4AAYR1Gc7JjftAne4ypxL5sBqRQdGoZhbCeNPK4P212XAN567YfP",
  "key32": "21ULLMjSYabg2pEJq8x3BP8qcEW4LPYeknPmswsoVBoNq9yQA9ZXpTRnEUFZt4kP9jZ2txuXM8SnyaLGp9ipQT48",
  "key33": "2J6BB8VgLnSvwtX17eq1eGb81BX8uW7utwJhrKoDHYED6d2qN1A9XuPSuKWfgbT3nax7JgWSAmoCaFJuaschyM8Q",
  "key34": "5aJrSwCumaAiFfgtpCFgb7Cz3oxXDcUjNcfshbqGgUxH1goVAHbrfV2Rtxdk5SJf7gYmqF4bg2TwXKkRgzBM1RzG",
  "key35": "4yF3Y55KQiQvCXTYEvo5EPbABM2HeooSVKPwd3XiBLLEVX4sSQqpZiDZQWoorzaif7FSoT9AnQ9QT1bq7tSRjvDR",
  "key36": "2c8quiW9vmt2rBfbBHKP3oYWf37s8GGGBfMXu38znviHdnCrt3h6xTrPehWSaotbTSeDKGdGgQgVsXXPYyx38PPF",
  "key37": "48NzjSRENCRjdoDpFwXPiN1KhcqdWRUmxRjK2joaELY7fKJ92KNVjse8vb7KNJuq6ej9QegLdXVfNAeVSnf4eFg9",
  "key38": "3cNrZH9xXkLPS693JKVDNDreXZnNkj71MJqLHt7pzwJqt3DKNqTT5ryvdPL9Vm7TasmgKYvKfZbf4uuPgZnavYkZ",
  "key39": "2uQKGQXbKQVieqjY1t9t48Wfr4gwQ6zJbpz1mnC2mQimK9qysQZDCRFgff5r9wWPXzfKnar53UDDmARo6JkbeEtZ",
  "key40": "r7Q4etQTb8vsosv7kbCsNSKVsqP2PGwb4GRhnSf782a6Jcg9kcxqtmteQRvqQZxNksZGxxffn4h8cnoAgPWBJsc",
  "key41": "5n6kmvX6jtPH5bAGwVpzRY5WRm7ufoJtPZo1iBrcjcoLxC334BTWdN42TXmX2YqK95dAweScVt3Yt3ei6DxFRya9",
  "key42": "3Gb2k4DVutcKahGiJidhuo1LYesPEB3izVPXReBCKNMDV1c3CwwoL6YThcTTbVEeWgs2RVXavcFDboPKtUsuJGGt",
  "key43": "KwRBtKJkvseD4uLsem5djf8VRgHmGQ8i7sD6cuZvN98VBpsjWSwaadnaGfAQ7A5A9G3fWVdQoDcFv3m7LJdxpV4",
  "key44": "49e69murWKhWRHBgzF12vsyfVRiUCbHTZcEMzEZtTwfVkFp2HaYbaFTjb2TRbuUReFaAKwCERrUdECTxYMpdRyxs",
  "key45": "3eRMRomUS9ApweMq3qwrabEMJqxDdWXmpfobBS29c6GfEwqRxeeyoWP325iXYfuvV5qRTkVXLVer5ixqQCxU1tKJ",
  "key46": "4j7NLGa71EHFKrCRxsbV5fS9zUkHM8h7qQqKnEVsG9gHKzaBKLmoU56NpLJMJwfB5K4ydm983Y7FGruxvmSEk8cx"
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
