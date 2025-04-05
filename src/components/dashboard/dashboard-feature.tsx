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
    "2BT5ecVMDJumwoQKQi5FyEf1LR7YWpRV9mK1uobJdrrYn8wtCXHypTM8tvcKXFdRcwhdufxSAN5zUn59GJzBzTBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJgxvuEVhQCf1DAiLmGbZubnDPNoPXQSKhuhWk1PeWLAuUWEvzDgXtCVdedVG8VrH76VftGJeEadKPujk8qi54h",
  "key1": "2CAfmCjogccpaS9Etns889MwC34XtsfTeZTDXZxDdsRnbXnrt6wELafRe9Day5ueSKCHnR6hDvyJu5XdFrvLJbbb",
  "key2": "2MVarAAWM3zdbuD25WTBDCSv1aeP2wBQBPZ8vF7PnZL9jbmoKAm2fpMbPettRBvnofHsWWP255smz2nzW2rfNbgU",
  "key3": "5uV8sowvDgZyGHVMWS48aNoSBQ8vZK8Lnf5tBEfWtfDSX56LiwyTcZsgSBmViZ8msZp5buBnXSHBRuRsS6aexZh7",
  "key4": "4eBhpz75u7AGSwVUgdGu2K7roaRyk9zjGCzJEE2xoMixujNS8NJ9A7MajvNjE1vmBA855AVHCyHefQk3UfdctteV",
  "key5": "3q4JeJF49jEgGVsABZRWaqQ2GyECPX6nLWzwWYV9zSXytPihARhzU2G9PUyFRTX73NYfi8PF8HB7X4SJ3Lvdw5jM",
  "key6": "5Fc4WFWGprXxvMCfXuYab3ui6qh8a3iJNCqsH83QMUKP8HLc3NX2xDUkhHEEtJSy6weJQxBaY3muiVAvL5W3cCXW",
  "key7": "aYHhTBeZ8vmjjpdp566kvWGBEHW5wodSjKFghwB8MTL3r3RJDtBmDfAtynCx2yUrattEmsEX3CgbYZvuWCFfbfe",
  "key8": "3EXeXz6KcnNuMniLk2PVu9XdUPvbS8FNcJpr3GVGjJmv69xKAGMAY2BRkBBf9M9CZDEDxQDJBGW1Mb2Xz9k9zUUA",
  "key9": "uC4QC8S6SAMa46FBerVAMmaNVcNxH3UWM7AVqeTit3BvicubuP3ZeebWHBzrTR93Zu1jqFmLgtJ6Aaw2zLUt3WU",
  "key10": "4DXdC6f5J31bwX3Pq3HvihRnn37A9TR8niLJsx8aoGzxt4VsHn1SDnNMZeVz4u8jmuVgTD7sWiXk1nJy4bMvTvcL",
  "key11": "ocYBefiv8FZpo3aJvfiWtN5MoWa61VrbvS1GCvwJAk7EN83qbPh9rBUMXeLPQwqe9ugazyV4E9iCdnLno8N6qn2",
  "key12": "23TP1Ssb3YuSLDt3yVEfqD9RZNfqPwwCN9ywFimGHrqzJX1cLPkPrCfD3RbHaRozVfsAhXX7WreKs6sCDQU26opB",
  "key13": "go6jeyw1FEXpmZ2XgLdM6Veq7PtreVry3979wAMMYUfbYRDh9C8wDYuV2PcMCZYnRoY23DTp2t9hUpMYUTAnDT6",
  "key14": "5twoNWiEsWYemnmmgpH9rKtrB3Bzgrr1QWLLYLuDyUZN5bZLYc5LpV18EUQ3g8ARoxZAbRkzrsL46qfHN7vYkbqj",
  "key15": "ZG2J6sVTtRsrMHmw77u4e8KhqFpaxW6sp8fmZHYQGvPCp8UPc3ezxweM38B6CfCz6XSFM7fsYpM7GQqSSuMwikw",
  "key16": "uHc9Pmam58XHwmDwdfLHFc5oSX2sLzZijKTzM66GkTbuzkdbHEGFvQ9G2gL5VejCAE6kG624szxx39UVMgMr6F5",
  "key17": "5e88NjEwEmzXVZ8mfExWMwJG8iykbGmLYh1quQ4j94kUXNjNoxYBSgknFY29AD3YvSATRuT1nVVoT6cmcfRdU5h4",
  "key18": "17bzftUMFqetK8z4CUShru9N8R7wcWy6DkrTzFTLmyDrqX6PBCvw3ZGaFZpaFcoKVMuhDkVkEJxwLia6THfMeDu",
  "key19": "ciW3jhjoxSpoGwW3BvgA86a2tY72Fr7GhXMMY7MVjAkvXXMEdryvcVZtx14oPM5Y2ZKzDsk7JuveBTetVsgjV5K",
  "key20": "3zJZXXwa5ZTuByWRAi86iP9uePQEJizJXRDoRFPDtfkSo4gtskdAWDrdjwaj1KnQFvFyaD9EmoTjGbszcmWUP5H8",
  "key21": "4N2oYVvaJ65qJggVu4vNEAD1pGU3KboiEEBWXEdf2n43mLQ7zHMgoEXy1QEhMGRhQUx9sjcsoYYFW3QYsjVhjGgk",
  "key22": "48PwYPpo1eBPphprHwSf23JFKjCEecYB3qJAMmbBUVH6phEUgKkDpRg8GHcdnfS4aTndxzDTp5xtNHTQL8gxRVdN",
  "key23": "VyjZN1kkLFH3s5QGHim6TBrcy33BktqpeJkacrK2sKq9crjii5XCN7LGJJVQVyEudPEj8AXoPXKRyWoY6iyCGB4",
  "key24": "2RyBMKVaDjJQscycVMRDKsQF48nLVCFNHmNnN5X4MD4ZRjd4iBjiavgJ8HRmMdqGmYB5yq13QDo1pERAwzKpyB8s",
  "key25": "5z7xTTF5AqjnXSE9g7jpAeTf3nvmJKzYXMh6guqfHFPcxTHL95L7H4EXCTacYDwH1jrEcKJZ9YfEVUULFxpKifkH",
  "key26": "639EqP1ksVLtcZx5xNWXfpsZR9n8zPLaCRbYns641b9XgdwGUdAukdzgyCUPpU8DjEgZ2n6NkH9UUjs8faeLQNSE",
  "key27": "21prQ9PuJisTsfeusgUQx7xeHLd5fZ3QrTU9ZPTBEJFzG3XwMbwq2FcHvh9Y5M4rLBpTwdoBkB7svY5W4WEcezrw",
  "key28": "27RNhHPGsu5pz5CRLEXCQEnGvgNVcouqNt13J2NAQwgYppjgZDZGZYxGxfLK7EJkdjvBAhnmv8xx2aFP4ZxWF2g9",
  "key29": "4kG6TEcQvmxayMbXwNCWp15c3RZo17KLjT5WDVDBXGD9gLZya7hugXW7eQCzuXBhhbXVjao6m5e3BEcrSCzjcmh2",
  "key30": "3XnuLr9eE6GDWF8ssRHjptmDiGCrtLU9CdN7hrXVoRN8QuERaGVWEUSV3ehLtnY5daE8z7RTNGcnzX78DPnRdDU",
  "key31": "5oawUyqgG71dKhWuJfVrvaYgJQqASS5HZ592UEtBcf4jYNubqLXEEHV6khMDfjiQtUdH21uXK9zEw8R953oga4Xk"
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
