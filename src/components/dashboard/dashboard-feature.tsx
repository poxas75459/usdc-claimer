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
    "p7kD4fjmiMfdR2cpWW8e5AZ5h2nt9S8GsuvKpUVxj2sT3wUiDT6em2uCGDsiWQTLrKAtPPWcWzYsDsAAXwWsnxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KK5fCDfVgMwBZDE1ZwT6NNsbvZvCn7Cvgnr2sdKSJsBfcdAQD6zUB4qJRdrPHC4tP4rX67xrUHThfBQHFu29M1",
  "key1": "2H2XfLABhairBDUr8tTJHHwMSs3cWsxVejKVQDQ5nnCdB6W5K1EmLphCrwcQHTNSmwujTpzoXxbYt5xGbTVUwpjt",
  "key2": "5yowEQg2kWbejLotNPxYfPYkRqBhx6ZeVd5F4X9YBfHaZrwJcgNPNAt96Kzsp3xHQqfN8mEDa5Wa3diYwCEgNXZ2",
  "key3": "TMNbLGo4j6GaVoroHFNp6KiXXPuK5geZZFvMgePdDmiFcAxmQ3TKAERnXJyfNRvq2AphGTRpvCLcKwKccB6pYcA",
  "key4": "56X16J3nE4JwqDUUq3cYfAhzAxJnrPPVsvkWw3gp1EoBdaWBjDKYKQw84yBkLjUJQhxqR6DWNpbcvMTw1nTSDrvf",
  "key5": "5Ve6fevMHteDJtoR8DNdWKcyhedAiVzwq4Z4kiL5wA6gHQK2TtwBs2UmvkiNEXCEg3GQnE372PQPcfQK5hbh8Vmg",
  "key6": "4QyiLsnMV2QtLh2GYwm9pHE8SrWk8objWz4rMbKD8MzUNhrBRbbe4HGkCu2VkR2zQX6sf82SLdgDj7VnLUD5FMR5",
  "key7": "2LcYidK3JpCoX3c3dHTFsoTsnza6WX34os9C59KG8hXvuU2Ay12vnSSujngE833RMkH3Gp62VjCCGUdsKYqJUCQv",
  "key8": "5nCQRTno2g3ez5D5vbAKB1vqGRrdZp1aSJaamGnAauibxPjVov3U9eDUJ2Kj9UW5KxCaqv7q9gy5z3VZvHVhEH1M",
  "key9": "3Cv1XrzR6MmR4dbJak4U4PiVYfnf5TxD2z4uXA3rMa75PvhsPkdZFAPkmPQrQXN486mik61gDmA94zYjeq7beoui",
  "key10": "5fJjpnB4WKqXuoYxEmRgwoS8MLk3Hfb2S6AreDboRtLoLz6SLJiJwQ7z8LfajjEM89GKhMHQaciUxigZ4GkVADWW",
  "key11": "31yxTttCp7cw8eHAxJg11FMQbWvsqNVfRoEM9C59tuPTk7kz5kqW5xCyxpbnBx6eRBmgRh5oUqfEvjjtRVGEzsw5",
  "key12": "2DMVPcwivgbjVwVnumzteMVR6ng53e6XA5WLDfXPZ1xW23DE9jSbAomfFoo71Skh1fniaELC4BmmnJat7UsCQ1Z8",
  "key13": "3AzGVZzQX7mYucXESCh5CL5UPJ4dQVJct74ijivsSkuL9yF1T1JXj1ZKbiE2aadTRcLhtjdFPh4Eay819UvJvSQ2",
  "key14": "2fH4a1ZutBPGgbxjPLQ2FGmxssaFcDmEZ63jJ1TKs7B4xUH4tmJ6opCF8HDV3vghufV1nRKz83DeFVXrYUJeYS6F",
  "key15": "Ma4UPxDngA9gF3QqZU9DsNmi6i7m9tzU1nQZeZsMWB6ctChZmmM3CTpRhKS5W6k1Tbs5ACGueCqSapcUivbrqox",
  "key16": "33n5EMNq1ozFArYr1Gh9FfhV8nSr517CSswAWwEfbV1tH4CFMfRCm8cSVTyjRfQdy7WKiEbcvW4YBUPNthwfnWYd",
  "key17": "3HqXWpLrpdXWm7cToR92XBjB9B1tit5XQUv3CrBxD3DXzHECw1bEDL7Q9wfHKEUshY34wHnx5BobtVG9ZY1rvaC3",
  "key18": "4wzBtK96TazTD3uDPZSBsSnZwwpNe65uti31W8HfrrieRsjcJ43Cww9GuHRKTojkT9beTm8XNeSMsXQ7CTa56mAE",
  "key19": "3en6DiKcNA3kfd1yifU8LwnhQKUkTBrddKnijWCLVoa7bh5BjHeWRC6iRmzvxSmrYbQfsEegzx6WEd9srEaQQGGS",
  "key20": "2tUbPjdHpCiMSHdTESEMSFdcypVf9K6igAxh3Bd3YyThEuHhSU2sCeHwppeB36VwP2uMxEBvm8p83fbyroG7kdaM",
  "key21": "4n8iTkuSVbJwCYg2ijNGGo2CNcQag4nsFbSqNiHuLZdtxQmWJsHujJXLH6wMcdGA5nnPPAU2TUFpNVtHR6GW4EkD",
  "key22": "4fHXYsxWnQrTa3rtjA9nNUyg5DKdxGCUFB5b767DXr3FXQ4r78kqE7v8aZS3b2YSNhwiZvDzb4ydQATYX1iPA2c3",
  "key23": "58R2zJYz4Z7aaFQCW7hqemYiHhvqs1pf1bkPGqhfVjhRZREy66rst6wKqzhuUksvMGT9pjTo6CWG3VtjSgfmweoc",
  "key24": "2Yum726MS18krZH573c4fEMJGZTxUf71YWbb94QhsGBaXeLas8RwC2BDBV1K73v5FYQwbHvb4ba1v2vNkBqD7xfV",
  "key25": "2e4gvnC8AEshdZ3UrF36V27s7qjs45bWVENEPKqGcksMfXUADQjgXtc33uPUPeduvZfAnWeoMg2dWqNnu6mTEAEJ"
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
