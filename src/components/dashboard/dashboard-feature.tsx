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
    "4gSE6GUKbAwccvd6hh6Wfj3GVGdG42rZ4xiMSiWvrJuAAArt8cbpHxW1k9tj3L8LWYcWHHugzFUCArBXE4XUbLKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXd9kXE66keFPLPDcDvNZsN7cjSPYwdmX2XSSJe7WAvWCYnHcQEyuYDTp4aLkgNK516aHTf2o3zEDzEjoWYK3bj",
  "key1": "3fCREcQJ62RGgN8WhmuTjgLuZKP27pNjPEiqkU95KdcRz97nin4CvdB1o3CpPYyyPC1jqjNU4BYxgXkB9PyAoXk1",
  "key2": "4Ag4XEXGBDKt3HZKSuZMTSRYhEVG9o3PWHUExuYwZpC4KMK8yzLhq6Td3fMFGqfSPNakjzSsFLZS52C2fkdQmHxD",
  "key3": "5mKMjt1zdvrwpXfB1RkFyuBU3Yta4moRZJJvaiVeqgFKRGhwZFcjE8Dksiq8CEKszQKLgkgu3hPbRqNuNGP1uAvq",
  "key4": "2r6BE95jkbLXTmWjbQtER4xMdExrtNxrAPF8i8mQSG7fcH85B8pU1yo1BQojwHpTd1sXr5G5PZgd2LxtPAHhof4L",
  "key5": "59kMqqgKgRpAC5dJajX8JV8SPUvLrTzELecSVtzdEEDW55XMqoxA6MHmdvgFH7qvV1WgxMmvBvKbuhNhtW3t7uV7",
  "key6": "iAdw62BRA3PoU2ZYrM8af7ee4T6HnHdvBrd5pF5Fye4Bu3HNyLtuA5xibpezdkNNzGmmTb5oSkbt16THDuN12y4",
  "key7": "5yUF4vwZ9KdhNsBCY69uTbhpxuH1HAYri6hWMe8Br56ZTWEkWCbh5BCur9P1qckRututinarNp9WGQXrs4JCnkK",
  "key8": "2XGLuRkYvFPQCXc8Lv5yJ3UQbkQJz3FoECQKGzfzGHaxMwUFe8RyeQfRxtLzBU7erWDe2Jz4y9DGfzamEH4SzrtA",
  "key9": "mdteEvYJNRPfM5Xbg1C94AtVMpSwnhLkEKbaSmiafjfUQJLoAfTw17g2xBUUew7Bg9PwZfxtvk1bCZduNnjc3Zu",
  "key10": "4BETMGxZFcZaFhXP3oiX5EjH7eUUHXQ2iYEpUgjdwwqM9cxtmZp6aoVca5J1stTfpoCkpPgTDvdQyPJbRp6tMjrd",
  "key11": "2KdLDyMPmSshy2ANydbL5kiYAUW78eQBtgc57uZThS5GbSWxJUEKMkgqG4NQppWjZkjy3BfxMnYQtqwyCYiemArH",
  "key12": "tuzR14vN5MK4M3VZL9eA3j5CC34tDr2242wBVpZJFUdBBwosagyT2ofqzM2LAVgrzM8AdUBbJE3TxfadYbZGQay",
  "key13": "63p6g1Y1DwbzzhJ59wPKaJ9qek7GjsA3rPBcm3zaptahMXFVA5AUUTEBkEM1Lio6dxMW8UWFN7hBtZ8VEP3qhdmy",
  "key14": "2Ujw3fJRm8ozcVPc8maxszBYt4GmKGQohXfGUxavzKgRrVUPi4GqF4phd8tdE8JNHiTuTsJeAnXfn1Fb9fcDZxSW",
  "key15": "wxq6hwVAi2dEd8gQP9CxAk9nf6LhkqKckZRy18xdgjyTefPhBPMdY71gLxpWFVhngk9pTBgvLgXQquK8W5VFFyU",
  "key16": "37nczfrS6wqwb8paQeWwvWbskMjQYZ4iEUsB55kmbjvVRGVCPk9cUbDiC88SERvxcCuLKjXLVH7NFmXQMNfCmeXH",
  "key17": "4nTkuT6YHzyBqnS1Q1k67vMjLumufYMwe4WN9pvPaLMzzGqWMvkPPw9CsCQC9zPse4ourRuJbug7wdPgow2i3rfn",
  "key18": "3NrTst4CChwg9cDQJxag3t9qefj2wfF4rXXuWnz7ctHYMJAqmn3Y1QwiTPAapyFJdCA3rfVEwve94yjGMyFyQi7G",
  "key19": "2Zr81wKt7C3GSFK3EEn8dUW1dCEXPaqm8Qy2MwQfBwnqruovPnYVanLxUaWmPfRmrCM7vdyXaiYimM8SWqwkhGbg",
  "key20": "48oBX2wW2j53iELd5CjS3AJnmd1z51f2GuVTr3YwTX8rovLDrEuQqw5SkpahQaUqpKpMM4zByAcBm8ehDjcQDXpU",
  "key21": "2j525KjAWsw4uWLwsFLQJWKgqiBDYB8RQZRY2rsvww4PadhcGccMuHssoeuXwVACSyR6EFZWcPo9sKwvz86RFkt2",
  "key22": "BFEiF6LBaWp3Btkh3i16cr92EWC5KhEPTrKUJkAG9AEnvQzTEz9mBcgb9uNLFgrcKvFVJgkM1v6VNZydhmPHzkb",
  "key23": "SFNyjM1rQ4YCJDECoEc5SEpytgExVRCLY1VcubxWbPXjWm1F74XqvzyW752iQn6WKf8zStYAkscHCREWRxLHzhy",
  "key24": "3jtVvgHE9yMFAmKiXmfzwE6EGArr1XVig9JoTbiZUZXrNZLFZAmEJ4Pk2NSMGurc22ind5dmUzhmfDAAjXtNBLAa",
  "key25": "3p4cpV6iUZvnk2VQwd835Z6En9ciRexNkCXJSJ8MHfLSC8KCfoqZ2b3HN8BrKwE1JYWJ2TstCTQSBCXrbs2CV38P",
  "key26": "3FHwwHz8LHbHw9MXn5QP6BrsavGRbWbdZRCMYvSKtsMrzYFMhBpjM1xgxDHxPbZYfPHyA2DxaqiQhdfAjMaJBnNe",
  "key27": "2humskWM33xqkLkXt2JCwLawDjPucy2651xwFdne32Nkv6zMmUQ5S8XVQ1ifYb26VfnP5WWTN7AC761aGV2ZT47f",
  "key28": "eeNirPw5seEm9sXy5BoG7pxYrwgKkvXeBh2bCzoBtrn58s77p41NRyqJKkdho6simmFXLRjhBGjRt3AJJoJxgkS",
  "key29": "mzjykP5vZo74uHBrLD7viPMnV97VoRE2z5wzBuABmvPtfgrhjYhzGZFNBF9XnZJ5SzMRuyJtdNVoCnzorGRK6HP",
  "key30": "V2tcKaVHZtNFttcceswrtQZn9vugwGmBTFGu8HrQ7tfSDugCTuiXW9VdqgEPr4RCaVmGRzfmUfzzFEmTo3JANoD",
  "key31": "3QwppoB9XMNRPSkQH3rNRfN7veBFi7bwdSmZ3JZsss6ifSGxQ5SCjkAWbnGLdt6wz4zGjr6vbDW8C39bESxoqvFm",
  "key32": "4V31DdR5t66oT51dbQVdC8t9EkS8uxChT2SKs5Cg4dorR5eycQDu2AG2ChNGYh9kwJMtJQroy4tVrx1zEPQ8FPzp",
  "key33": "23pL6WHgBvBnTTLzfhLKBRXCE1Be4KpS4X36SWsBg7YTQXixN5xDDsarihPfZ7yZW3KHqnzvJ6a2EHPBxQzyyc51",
  "key34": "4XqHjV5ChmxMvWYzGVpHfBZDPbBgBTUrHGxdWFFHXkyBi3FZTYidKGXZYebWbLnpUwEUFuFYzLdireSX5yt67FYj",
  "key35": "321VBMJsGpUUnNjzzLTm2yjtymMnKYwt43Ka3x1nXNDsp87gJt6McvrPJDd4FkfTB7Mh6hNUYdSZrqLfjDNXZJJ5",
  "key36": "5XbjAQQq9dTJHAdsE7by7yCqxVdTWXUShJSoBtKUhpwZbrcgeKXMG7TNqsfVEuvRuRBnYToTq1CkecuvspLWzPyt",
  "key37": "2mhcyxmB9sEM3uNY3b3V6Y8aDMwc6NFizmNG6GHJ7KBBuSWdueg1Gh3XGKrt6skWZH8Kb4UFaPkH3nTbQ2YKiotm",
  "key38": "2A2Xe8JnLdpkAn2KAKh1DskZDeXwDWwZn8LZ8sSguRpDwqRcUb8CtJMLy624mFy3p4B4Lk6tQ3rUgxfRw3cxz5Fe",
  "key39": "3ts6uaBstftwswoxdT8z7ho6AryvkKYMUamYekQi2LQHTNR1LcSJ8MAa4rS2dciwMHHMjQSFFyqzJUyTcdvi9jVx",
  "key40": "4N421CmnegHv7drA3Pp2m13pJVdbEaFiTWZe6jhretzLpgftTbugcetquD6Vvb8QvUwEe2DXQGFtyH8M7z6SiyuW",
  "key41": "3AqUGEgmogrjeCKn7DRBacjdqjEDpwsS9Skaz4sEqAGX7Sg15icXVGrDCqDscCAhnFinp5mSjqF6CBE5aHQJFtj9",
  "key42": "2h8EhpUPcGtj7iGjWFdd2EMpWZUsNSeCiMT2SpXVK34wGPuuQuVV1jtCSXEqmCVmpFcYYas2VUT8tftew7DoHizM",
  "key43": "4Cu14mBRJhKfihKuvALK79T8RjSN9iXrjfpQZr6XGZyJa29zB8NHd9YYUwNzojumFyq9MaQ2q8eyUqFqHjx5Gt4C"
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
