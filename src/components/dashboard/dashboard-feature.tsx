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
    "5QjiL2qiNCSm7DLQNMfzhcDfb18gppCZKAaWbpyzxCxEk4Z3BehsjhiDVvNDLKmjJdJeoxRfM9R1jXSJwjQFrVf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBrXQC19RRBAx7fDWHWea5zh8HAoRcDqQREcUiPTVj8zBStiMkc9mkbezY4H3eAC7DeeXPuGtAcKDQrXYnrCMYT",
  "key1": "43AKWLSbZBXBHvYr6gKH3fBuvX12QifPbfejeE6aXA3HdBZYgkiGVZqN2YndxWcN1xCeF46AaY7yArJCzVx6rN1B",
  "key2": "4bfE9Hzb4d2EGcssNoZhim9ezRw4SiLgZoVE6Vs4nNdrbPuY4DA2H8iMzgK6V6voMtP73KutBkas8TG54xskyBjE",
  "key3": "5jsYFGyNAEB8q38BLCEuUFB87Ws75DbAaSF7RAnMaQNUce8bdHfzXxd5tPe4WjVfUvBLQf5psfHghCy7f1gpvcU2",
  "key4": "bpXvXmqZkMaq8tL98s1NoKE3DNfwTMfhMAZzZs6aCzMLjmLhy7catdffgtNhXhnKSEFioCcWPY6RtcRfJKh41oz",
  "key5": "4U1VS9LBy1qAEQk5Shfjuf4dvXKr7ZPuzrW8XZ58RdiZv66F7nDKoBPauGsHvCujwyAWWMDm5jTmTUuoAnD9bVAf",
  "key6": "4aYmHHfTX2uGTemw4K4LXqz4h77H7CeC54QTEUEkc7Ze87hmFSyLm1DtzBwGbeoix87iwnP3XNc1SzCvJhPupLhx",
  "key7": "32ZxqXnPSigQBVE6nnkQdGdWAGqMuep2NeG2BdhLsGB6Vy9arFFDJKUQ7uymjdkeVLGvcpH8G3NqUTxzCJX5QFTt",
  "key8": "429gELoZ3kdaMKxV2uYfUz9BPEa7whBTM8Sck8hyjCucXmZfe8RdvinUvp8qnQB5mWoVHwFpWPR8z2BpBu3Fc1R1",
  "key9": "DmMDG97z5txAQaWaJsrGqDGqr1SGDBALLUmQV9w45XAaGwJa72qfBfycsQAypA5cw6fsWWfaskFz9NRfcYN7ThZ",
  "key10": "525JH6uTyLPsSbKKxRDvpUinWjeaGypWD4d3TKNCTXfv7tg3FLogsZcijnf19R43sgjxwzJJkAp3LzayWTy61xS7",
  "key11": "2RJpkti3HGpDsP73BjV8NtfPY3GZ1P3UbxRu81rtUyiv5RdEBJt9rf3HSB6eod7U1ADaTidb5kVZ2JQV3A34328w",
  "key12": "5sPiS1N4vP1jXY73kzJQUzwjcNRbQMqQ4PGfTS26arRDKno68gRuD6CU1vS79ufqob3mUn5MeyPSwKwNcCforf9h",
  "key13": "4fTASe23v2qXmikUas8Dfg4KSUPPofCsp9N72UbqUccu8J7uGN6Yu7gExoroJiqnm2vszS2ygFxiHtCbZHgxX7S5",
  "key14": "4XNm66KwVDFoxE3U3qXYbHnmBHsk7NtTudFhEWLFB7KDBxWKCFdznxHPq78JotdVUycPV77MpFjBXTCoKremyzVD",
  "key15": "2zcGLYGRKhVsYqdgxrY6PSFMQhTbjgPu9JfGTcoviFNyzKg9uVrgAD4jaLLRpkoFTB2bx9T2J7undyoFWrCTUqrc",
  "key16": "455R5iXWjzdeGamVRQ9y2Qf2TKxx55BfXae2LYHaDpJmtrs9ftStSoH2orb5jqRmj8PQhedvsEgkKDtqD5mx99qZ",
  "key17": "4DoCJhZxy7MoNKJGZx8pApHVejt3DNoY9Hno9LU2MVuBS5LfvEqN2QnxmC4VVweFRc3UpY8ieUUtGxrA6G1c672s",
  "key18": "4MNZxn5g7k3D1ius378VVywBJwqbpyqebxcQcTH3iQDUFdVF4KWJgkpbCWPw5b6Auvy3oJpcSp33XApXHJh8tpay",
  "key19": "4xdRAtBXeUmxZAFmXHJMbwvTAcdvy9uNBTtR5uJhKY6i5WHWbqWPCPp6BodgcQ9JRGFB45Ym9oUXKrpfq26jE7rA",
  "key20": "3LyPcSqZ5pqJy12RHAyTr7VV445zpDJfY2QtUvHbqz7VZH6q4ZqV3v3nDNUzqSgHJcCAaTiApAJ4Nu1JPPEoqQAu",
  "key21": "iDXiXPZh6WqsvQHm7bb2hyx74TcDC29MBt2pXDgV7g1HKHwkzNizDehQRn1UN4eXRBvaUT4LdYk8J4M3R6QFf1e",
  "key22": "41f6hzh6PrXF9ApUJ4jM9p382fFgv8S61AHmZfD8J3GVDa2H4mfwSzTRY7gT2XN5NeJHUEHJjCPcmxafA3aUzUdK",
  "key23": "2T596Su3UHbV6hMaYES3KqjuwJLKbSaPUTAHYrRRSphqWMJoKrdGj8qJ82Tu9kjY7jqSJoah1knrUaiLEc8B5V68",
  "key24": "5jUE4pYxTXhHf3JbiWg3R87bojeDR1wC4PA8s23tAdF3u5pxF7Af3bdH8F8VktqvU6fUEeoWSuVPPTjwRmohjLNa",
  "key25": "SgBiW61wYzHKyEGQ1iPRjYSXJ2Zx3cUKwPvYw5zjffegp7mJG1WK7wG4Rvp7PiX94eyuum19xwAVRUdpCsQguM6",
  "key26": "2GRuJXUiie7jPJxea8c2ixqKu9Wsjq3UifxPtrUY9yRUZpDKpBv55UEAwjQP8oCfGXLXVgQmSbuBqacycC24pFu7",
  "key27": "5DNCrE31kE2RajVdc2mjxZt6C9ZiGh2DcooSzbq454rab31sc6t62tHKnfMskV8t87a42oGh1epjoRYTAqWWepmH",
  "key28": "4qKs4Z3pRxNKEzZ1P5f74Rm7mHgycaqwFvgnC9qkuiZYWptjBzVGdeHewrVDh3HJnNv532QVyDUKqshD6GZ3sQjD",
  "key29": "4uh4aCCwAQSoxuxTwYXKWy63KtYH6ZLFcxdFb5Z5tmvvq5rP22vZmKRCEaHGHgFMsZqb6x3QH7AeqnEfFuEuUmuz",
  "key30": "34Z779Kayuc6FmVcJ25UgpMjqiMJgvqH8FC41dYgM7HwpxU8MQf12iEs3YNNipcbyLZ3vWULuCeqth2fLcJ1AwPD",
  "key31": "3P2FGVZ7NiSdA6EtVYxL7fsaj3Mpa6SReFctkvYgNtThP2agGTxFS8WXUKhCKoKYZF89mxfeepJgShj6BiHWpupT",
  "key32": "L6VaxKkQGN4qQhFjm6v9tBzbMvzGXMRozoJRkg5Y3YqLdB4rXJsZiJKRPfCCcxK4YAzRnGQKPCjkeXo8hiRdCKW",
  "key33": "erstbJqDNjXqKtvEVDuCyGPfagQKRg2vGuaZJrRdv3Drx51Dr1NYwhGXKEVGXkhAWauCvcWBipFHCFUgMY47g5J",
  "key34": "4yi6cazAwvm2jsq8ua4ffTPbMQ97ppyu38NTxX4tEA5kE6Pzqhi3Gjjug2ZSZKwmLbD2UMLTiXVktcXfdPsxdwDj"
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
