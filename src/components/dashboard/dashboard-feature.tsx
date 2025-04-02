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
    "35ov4ktjH7r6zVhhiTt8k6oFwTTgi9MvuDxesYgdfAZoTuSmUvY9wk9nvWdVQsRV4enEJVasAitfAnqGBLGEHkqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SgjU4X2Leb6xF9NWgc99K9ifRy4q5gLVDrtNj76Eyih4aT8VKsbDAFYxjKXRUvLJRqX392wiPE3GX9qA9uBmDGq",
  "key1": "2Z1eoujAYZQ45sj8xot4A9jwaUn1LfcBQ8ZktAgqdre7agXxfx8PvwsZpkvPNj1MbZBEX4YdRNXRmpbigP7zs7xi",
  "key2": "41Bjxx6qAts8b3JeqYaieuL4TvHM4yC9K8kmBqDxZ6X6fhyxHrqAo26Sw6VKEY2RqXVCc3QZMHxMeGZUdVwvNHzF",
  "key3": "2zPQLLT6H1e1AeWnbJ5nSYSYncsPGhkgdYQWSkq2z5pLt55PjVgdk9zTubSABjUmxCpazXDfetebvHCKeGFEzu71",
  "key4": "328EHpughf3SWmST4focRd5itwCscguM658ShubdSkTxESE5wdVEuNjdSbgW98yGqGPA3Tv9VWQmSmP2uBXfrgPn",
  "key5": "4V4yNAtGTS564zFoXVgGXHyuVVWpCxLsdDQdWX8rki9iz4nAdz7kDmFkLPJYNGZ5gkdMK5f5B4HhkYmA8bSXwzLF",
  "key6": "4y3VEDJT45VM8GDyCiLNdwVgikXQAwHYf1QGLP4Mt2CtDJPt8Wr11bz7PpAFveX4wvu49qE6CGmz9ZsJ4gZmVvmm",
  "key7": "5Q1hwnD7nszkcpBZHc2MdrqJBUBWYVuPxcF4T4A4gZobxT6Q1ohXsK9Jmtsk15XVKXNa8kck8mQ9cV2a1iD6FTLa",
  "key8": "4rJGdt5KKijVWRzPAkEEnoav2dn6VWNzUxMngAXf7BKfRacNUmKsvymzeftud3LuHcxWcVvFiaZPsUzkbR9Q7Bqi",
  "key9": "2qYhDCbpDVuvEvKbJH2QaKoqWFNwZsM12A71HkTxoid7r32XviKx7yuFJg7sHM8oqiTStkfJsPviwq7QyZEHyXgd",
  "key10": "uFf8oUgYRmcWnwDoDDj29LKbRMZLGmZfDhKypm9XNH78JZ6GtG9eTJP4G9jXxRDFV6P1yM2ganbWroT4p2eqBPi",
  "key11": "3WWWB2jLLEYN3yhuLU1ymP41YSGaxp7sbexhRpdw1rGJ2pLoJYBTNqjz7RTZKMUzcubogxLXEWDysdJ81oc2L7UU",
  "key12": "3PF3mCzWhKVr5cxjbuaXqWoWNuXCefNa1NDeg6KmecCLkkV4hm1esHf8cf5Co4YFTnj5Po9qYaFf5QTRsQjMiBPK",
  "key13": "63F6HL6rmy8ppmadMFwgKAxrwCxwPSKyYSYbwuJ6vYnfR5nUDExRwtuWJoByinswXqqDhnHikTevwULrZAvq99vd",
  "key14": "5wxjCZEnjt6xchusFFuK5fiRBsj7Dfaaqv4fUeLjGNGaamfumufoTk3epRFCGXPLpCn729A5Wb971THZMG4wiaak",
  "key15": "5wE3otHxdrD4RjucaqYmsJXn5yFzdE1ACuxgw8ZVyVzKbYCiguHFE8FToKgsa4FCzgrRgi99Bek74jNF2sweKZ4m",
  "key16": "4uPFit6fHwihXzACwBdCeprZqimAWcVmdZCt8mqTk8ZVX9eBNjMviocFgvA4UEAtDpNrdNrbF1GCN2EW1NBWUcMM",
  "key17": "4N46zR3VjryxDSR7vZYmD6qni7zzx3m66aBVJrdbgy6EZACcXdJHnH3P8a1nGRGs9n7M17PjbCvaUXVa9DiQdNri",
  "key18": "3EDdteRPUzav6n4dS1E61QVFUStQFzx3pcJGAEA1gjLhzsi5wgUrv5CZHrUsneBzqZSHYSBQYNgHrxFvvGxXUDFr",
  "key19": "3bbNP4PSJHufKME9kHJVtbkWxQM1QXAKqw4zXwULjfDZER6hEFpeEFWysqDvMejLr8mxzEYBjn9vC519VQSWLz4A",
  "key20": "4vqyaAqgapDwLjmPSPMvxjojVz673oL17jd7R4Lh62572DbHsPL4CF7Xzfa9xmSNbL9mesPRMPfbsrPHWtZAK6t4",
  "key21": "53enMs8cLQnZHJHHLGYRm4viE5nR9HXekhdCqjnyzBAGXYmkS6t2RhrxWxV7MxANa2eD7HriGeTFNMGsRdmwbMve",
  "key22": "2dnR9MFKZtkKWoUAqMPriJ4HAF6Fs1yr6BTE3hTDtVYLtquFDuZKT2RoJ7RZwhrtvNZLc4bonoctrwUkNmKkoMbr",
  "key23": "5REtH6JGSxmxN9MNgFJH4zcLvJpsm7Ttxc6VkYuioZU8FKogUrvbe1N11u1RSDBAYLsPnYffrs4bKX8HJwyyW893",
  "key24": "4YevZyJACotCUqQ3SfdwCuhG8YmyAxprE3DbF4Ah6Gh5Ye8odqAsRJAiXxuH7LNkKWFxSqZirs8uydWX9MFR5snP",
  "key25": "fYXQsAzrGh32WR9GcptZf4neWKH77qqStwFCZekemrsR6GBKdih32G8ubDeR6TMDdEytshLLVr3AZd2KLqn8eRP",
  "key26": "4PAq6CJ6Zu65NkirxYUUmsvAUKLam2bfMgrgzbwu1FRrdddZfXz8PKTerLskGMHtbtLoDzRBK7cZsytrpXvH8M49",
  "key27": "4UcVdTbCCWHNtoKBJwDJE9KtSZkXmn94MSfrZJEEaBUQuzB6ZPDNE3yFn6wikEzAoVDTFFqow8drfWXwRgrD9nrd",
  "key28": "3LQ2eLdzwBS1PA8V8eHiohfiNQ7rVVkLaxpQteygwf2wVdCdckoxLzCgBREjpY15A1onRAF7oZ1Tj9hB9wzHainA"
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
