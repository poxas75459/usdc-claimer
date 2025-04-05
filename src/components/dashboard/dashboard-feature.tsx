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
    "4ze4u6Y9VBfM3TEHxCW2YtBYs7Nj17BmEeLySYPNAVCsxUNAqjmf7Lyye4axAAiAxd4ZszsdRcFtZHSNjEKRoY3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8UKVA4V77pyE2RL79NSiw72vqb7Xu7JQKkDVK8LWkUMcyRVuzrJc57HPuYxnd2wXKMcjm6Yyt3kMgZ4rPCPQBe",
  "key1": "2FUmjs42pZPrwWEtZLakHCgBCkYNfsZauyiBx5bnBertbiBF8eicGY9GQDm2tWoUUUCCBjaSjLbHvjH2W2bSqLsf",
  "key2": "3vx1rUNmd5WZtZBLA7w9ujLHFjnFXNJ1mL7p8UJ6T2PbbDvmeprq2BgQScbAFjXBZ3pb4AZHf87c4t9PqDGDMsPz",
  "key3": "43Dzd6Ag38JoMTQGbxVTRTjNhE15pWCTTdh6frsTo5WYNJVXFMXRTHUAHgth49HVUvsuJDNFReJTf3J4t2jCzKBt",
  "key4": "2uLbFJWWGWumsAcZMfA2Kno91uKsdWaiYr21QRXL6gJ27sLdncuohwmJ18owJB28HSnM8A7DCyJP37Bg3ScZqts2",
  "key5": "5eLPFE97fbm8F1fV2RzEZG81ro13tp5Bx4QDKxW4WhiZtuHiiCeBRV4AagQPeuMiZoD7rs19jMFDDu4Fbbng6cbC",
  "key6": "2zKh5m56d6Zm7WFyB53LRVXfpwNnkVEGanW5JUFpBT1QMKmUyjr2kUivBhXE3t45UXuhksRzuikPByJmzgd865JS",
  "key7": "5WBWyK7m5ee79e8r4K1iLaR3RYe7s1g14k6xrF3Uo5cve7m69X585X5jqSgS8THX39Peh76J28Hxystp1uTyJcEM",
  "key8": "FDh2P4poQzvdFtZ1NuqEgaf1MxzU3ngamYWFpWWRZGxJgfW7YLDH7dg3JpSfMF5PE4AvDY69SVMDxWAExr3QLnw",
  "key9": "53eAVgkXBKBqq8kXzAssgk1L7dxNre9ZMRBZT4jRU3TkbHvmJhWLCJo9m8frbK2SbwUxofnS1QvjrbANk4c8Sqoo",
  "key10": "317kHxcncQi1NCC8NBRTDv82RN7BpxHbnCzzsGeq67bmAN8q12DdQSitqJ5baRA7rzstLpGfpZVN7Qd4nURzGEpy",
  "key11": "2psPaCVqGikCDrgGiwaoNPisk9DxnayoMBvFGw2S8kPbEFJ1QFuy8iSneJVti8MqthPnizfeK56G5ZtcXrC8vqBE",
  "key12": "gapcJaJaEN2d8QNRf26SW5qbvMqnDKTFHbzi4C2MiozBmkXR2yQjjyFNNgfEKWnR2RGH51McNjggAYATfHY2Tpg",
  "key13": "57fKvWFs3Jv4tYaGsi4JArLon8ummP3Ai5D9PdAvGrWrfGT8HEqLBAaiM7qPnyFkrqELh2ENpENUxkB7WvC9jpDY",
  "key14": "Qe6Afg7LFHRuvQkPcxGQi8SuwbPERdKYXZSoyw51ND9Quw3RnYu9VgPNx8MgmQSXdevHnK6eqT2rq6iJrKpb8Ja",
  "key15": "2RyEwRg7oiFrifduVJFyFx6UXQYjcK2pGMFrraePpi8PRUY4wBeU6nCSSVB2m51ZVibLoEXYx85RJrzXJ54XkU58",
  "key16": "2KhoUL6ksrA9wCJehWFvtsrAHGLxVD3EyxLV5mUjVB7Yb3m5n1Pu4YxTiA54MDLa8RyVx29RRxjy6cNM3oHvbQCi",
  "key17": "QzcoojoDhMMRX8jfhazZYXLiC52BjqGHnT7oRFyUmij6iQnFDwbt3SUAuQ1j5ZrXTxhCD8Mgdi38z9EhLHHrXDC",
  "key18": "FMYTZfY9tkwTsbL5EonCAEpH9gDSANs6QLK2GnrkrSJcW847AtSMjtpfrFJWsfEtW95vemApeNwB7YjYNryTnGg",
  "key19": "29CGSUyM94ouFPsboeeRypBDpxDCRzRhkGTxb1wqpEu9icgUrDsFKFaCxw4JdUEuV1gU7GdaAThF4QR5JdJEBBqq",
  "key20": "5Wztzb2bfekuduxQmMLuqFz3BPdKLcVgbqrcy8bgjXGp8sAKmeU3mauB8pM6mzrfNxSWGuZKN3YGbL3gTQWEac6P",
  "key21": "fifB1EDGZwZupac8LLnwKn6fB6kSqnHcFpgpR3imuMTbgiasNpQCLoAUoqWzRiT4xVbSTDPNwj4pvc44dEXBnwX",
  "key22": "2uyNikvTtF45UAsJTpVr1TBM5VjTJU3sb1TSuHkfqvsJCchi8g6p7rSb6uMCu9ABPXW4Ay738XcoKM9omLyLphyi",
  "key23": "5Em3CXCipf1e9c154Mm3L1CQCLjhzFg37fgFwAUFwcqe28wjkGzmfNBLim9AXpGj1oyQbwdPqnAryRTq6QmxyihW",
  "key24": "Px4P5TCUMiyKU9p9tFsfMALKmWmiCxgVxDxRradrEcCmBtgR327Va1j6nfawZFUZ3EaK3Q5PR226phGgruD3fAU",
  "key25": "2T9itKCiArkmYxDyzJVBk3X6Ut8GoJks59zUXaGGLCtBiTT2GFnmvEfVxGM4MdRjcBzyUUY7WiwVUUVtMv27U7BF",
  "key26": "2CAADuGtVwrmXQB7Rw8TpHRVGSV8dNkmbYCQg3uXJy3qgBptzUFE31fKnaBnL5NZmjQJrmvL1sSRrLZdk4rTTRHe",
  "key27": "2zLy7vt2nUoGxVbnk5XzGx7YYZM9tNWNBbmHQPReZQbx7eoETHC9UkiBRcFhEf9TWZdATmyKFsndF2ZHZFB9PZpd",
  "key28": "4aqsNhKxm1HLfP6RAEYufMQ1x814SPnyXrcri5Z3cC6vYW4WWUKuXvjr4MUwT2sytcfwEikozMBW6JpZLZHZbsCs",
  "key29": "4J59NcReoBvrTApCrZVutFmYLa97sNW6uVNKYcoCBJg4QfDTvWYE2UuqGoDZfXU3rTJKY2tq3TpgTptvaXrmgubi",
  "key30": "58nPEDWkrC8gsYPMCURA8oMdPEgRugvdSZrAKNtb6yMHRfRcpbi1i9azVomH97kpEKa9adgXgkNDog3Y3aDJsZv1",
  "key31": "2hovS9JfJDFzCKqTJVb1Y1h1Jpe2t7q8z61kmQFHsc9N7C8iE6dwqiok95DyS2p8MLSrQyiSfvY4T7q3GjMsUwFy"
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
