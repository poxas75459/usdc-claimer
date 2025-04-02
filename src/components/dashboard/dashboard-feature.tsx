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
    "41fzENpYKQbohxaAqqBYAtypWD42E9XRV5R3UUxo14gHasMrkfZrWCxGRWYF1WG3fAKrL9XUkYsaywn3nMSFWnGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Az3bqLngVypFb69udeEYw7bXCB9bBLvSvK89j9SD2VwscVU3LTA7KmTdVh4yaamm9R3S2XdgVkyLMZPDzpJM6iU",
  "key1": "45WTbx5YREGt1PYoQoooh1i7BEGUQqnCEYBZLrFoYYdrF9G53ti53oMZ49xrjBQGKAkrH5QDpcN2wFxSEYRzPwxh",
  "key2": "nC54pT4BogQm83iyA9gBEPZ9AUj9aoPLZv2uEYveGqVjunNFbCPFRfgcpDVCBJkDsegEzuLUK3T7tfUfNt7c58j",
  "key3": "5t4hQ4JqMvVJwCAR9WK6JJvzuS4tBCyMvFrXcKRcSb7TpDj5LN9VYgb8dg1tNBtXN9Q7ZBrcvZ4mbywyXrqMNmPr",
  "key4": "3k8G7B763EW38gbrHgj7V8cctc64xYTX1E7ik3xSVCNeJttP64aB6gfVUcH9oR4qucE4j6Xy3gAnihxQtvFgNdbC",
  "key5": "4CX9oXQYKUEhtcBCQwHx1a22u9uZHwF8vFvLk6nQwENFAXUh5hKaCUFAUaQLpRoi86d6XEYWvPgUxWepQidWRsSk",
  "key6": "3zPinWjr9T54qgvTjANL5KBmWLPg8dzFZen9wLeGFwPjArxwhmrLHcbu59eK2zVanUTdryqfNx4N8E1VbQ3eZrCM",
  "key7": "9QdijvFeuU1zCa43DUM1JZMHAb7a1UX2m7FGMfRhcvzfKqxjp71osr7Qa9x8y3KthDh57q2aMwTRQyikPCLdLPb",
  "key8": "5kYDFso6GMugPBjCoDgS1CEhVs5DKFQCytq9T3gjcfnnju1U16hegLKreBgTG7Wy8rfhAUsoQQMM3J1w1z1FY6qW",
  "key9": "5woTnJKFkneuZcQeFfQGL3X618NjBNPTo2UkJEd1STjYFQJwQ4Vpfd2jMrE27Tz9nTg6JDKUyfqPHHTpDY9aR17q",
  "key10": "3Vbw934tbbxp35EisxFmj6HJGdCVfxKbmSaP3ghSdcUVFBNoyhW92G38C67fhCNugYBxrnGwNSkC2GQ2HegL9Jxz",
  "key11": "fAtD8WE7Tsbzfj1WkDDvaT4oh4o9SRsGiQvUHumBV5BJgzK6ghTcsYirM2qWYWSJ9R8msLuUAiK3UniisbjFRtH",
  "key12": "5pQnvGYygq1gP11TsDi2YYkiXaG15iofPKVBSwvSDRvhNCKnD7AvCpGQHyjoqMmWQ4oTjrALpsR6rdjdTFiN5Cr6",
  "key13": "46gCvG1gcFxp6cAmUAqWsd91ciASGvZkgC4LMAKHuPQArb53xKDNKWqhzmnWVSqE1u5EhbeyMQeZVhsos5DzvPXU",
  "key14": "3EvS7XMys1HMBTQbCrYGzogs9hF2ChoY27LGgHPvVGfvHrc6wVQExRZMtrEDW4TFAMNRnQZnQtTGZzGpQJE75zTu",
  "key15": "5wxNDdLsscXeKGSWXtg8vBQWLFYFSTdgpePTxGaazV2fzgRhCmqujTQV2vJS81yPLJD4nfGqGHbC8E83TdKgSw9T",
  "key16": "5BVoKsPZFhZTUT1iVzH9TV5GBdb8kFZEVDQxsLMtUsCAggG2r2X3m1z84N26iAHtnjJoNhhd3oHAKcib29NDp88H",
  "key17": "9BNCbgkRKJKU8bJysQAz2N5xAsnTjcEcNQRWfgBLDxArbucqpQAisvAbDZZPCejEkDHagicSoMf2nHc88MSZNwc",
  "key18": "39fR52RMT38VfWS3UBvvF5Dr2dZ9u7K55XpNnyJ9kHBTXKqAsynQe3KaFeYsYwqCGU13PHR3vfrHPYnGvj42DRhp",
  "key19": "5HmmdKpUbRgrbn11bxknYetvhdeUX9TLCQrQtw1yKDMNG7jQp9DPn3YiK6ohZh1G7WWHbGpQ8GNQUs2735KZoLfs",
  "key20": "KAbkmC141noAnscfxdA3KJWiqEtDq22P1PH3cwisNU5egorgGWDP37oE6utDHGxTQwZja4TUny1uRWyCYiVxYnv",
  "key21": "ASRk8YYBHM9XzsD5wK9ySTsv4paJJJboGpJcaMtKWKQYim3zR3bkafTcvxhgSLvt9XpxYMYxLBstdrHLjS6sfF8",
  "key22": "3R7oPiBgoS5B3FMpfshvyrLDSvsCqhtWp6qA2yVXWTHATdugjiTwfQJyXNtFPLSr1B9boDXDC4n8tx8hBfk1psRt",
  "key23": "3bxBJxFFfZumvjWDHhace2qHNVMHvd33aaioKJeuxMcNjFjRA5WFhuoaWJoHUXg8smrFmKtA8DmG1bqf2H7fkqmo",
  "key24": "58QVwZd1XnotU94ikVAmZRTCaG9ZmZZnhR9nh4yV2WUf7bKNXu9jq2tqcD2xHEjJFpeHZhYFgG8nZpSnUk9f4M6D",
  "key25": "3aeMz3yQ6VF48CLYkvY4VQMSqNBixehR9poxscTcDeH49zyFmXr8mnF6ZhBxkfYbQg4C58Be9XV76KEG167NqkQF",
  "key26": "2VmPSnwspW5jpuPSn6187SX4wa7RwU38ZeUZdFjv3tSx41t1mtioWAysQUG1UsJF4Y6P4PTD71kCRJEnizHrper3",
  "key27": "3DcMGShPhRm3W56F73BkqAENChGDBo7nuZmJ2jvMsdVDH5NoThSHMA4hDeYFpqEKTDYFNAHq3J5sHNqnBEkATFe5"
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
