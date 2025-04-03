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
    "z3nDAeP7CSi3WWTb8atCdWmssreomHnpvgFKgr9UiVdAfyprCW94Cg61nkvAoz9ubFqWAK6nRBZoCLfhbtJKtPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QuPMTzfk8UTCpruh5U43WHyQsaJSRXH6TnYSJ8NekdkZdQm9zXT3td1TrA6XFB1vfeZrsX9SnZs62nMki47XJni",
  "key1": "4Jc93y97oVtydy3z4At4yn4GaER8Y3L79WS53H3rznteimaWQooi3JbyQRygCe9zuVvzxKmMwiWepb7d8LtsCu4k",
  "key2": "L9nhCwtHrPizaeeNjyQ3vpa1VbWWnwLPXWhXoyppx64JigB73bRPnxF4TXAcSNFLXJ2SWBRGJq9xdWCDzXCr7HB",
  "key3": "22La5Q8keLWDoAZJHL33f4N3Abz9ug5fLs7ckJZCjSXQzQkPL6tKyFBj2wKAbTDtfRLVosXu7DLNZghK71rLpNyM",
  "key4": "2Sv9yhTT2Scj8Ywt7gCVc1uKVjevn1b5vx7w4pGWQMk8fD595ouNYK46iXct4jp8zNojx6Dxg5skDiJ41uTFXEYD",
  "key5": "3APjSe8JFuJPvxhD3ynnR7ztdEKfMAsZnmJ78AEKSkz5V9Sg4B1irpis2WmjksgUaJSZsKwAaHVQqeKj2GppPo4M",
  "key6": "36SEwh6aNFvh4weQGM2CnohK9pSB7FXHsDLgrsqcfMHR32NBVvGr48XFe7aYss3jztTncsb68423Yqr7HgwLNHdC",
  "key7": "2ncn7Hxs57PxLiGQGdFq5sER86jXthi73GZ9uYbHuN91AYWnky4Hzuhg8Cf9iVMDfbjweq1h5Lug4WTKnPSrNpzn",
  "key8": "4pGqS2LYSQ9Ek1crgqMknwvQ46R1Xq2Q9dtNpqqXzETnXEy5u6MWfyCWktpK6aAe6kvvCJUaJEyHnUM9tS3R7Tyt",
  "key9": "2G5WukQ3ujJhRV2dQ2TpD8SuSi3iFcSxskyLn18dVmAoNcwCvUBKjV3DRojp1VZ4BbDSewcaeYUCUeEvdMW65UwB",
  "key10": "5zsqWun7dn3fgjUaxPS54PP5ak11xZVMRLMVa4kNL3BYxnHyGmHCpmdVTsu3ysysdLAyifZ9RWHywY2jhPcS2N5E",
  "key11": "4wzbZpaKryLd43UDBsFyZjwLR1zYBzM6ZX6HPavimJKNXcFKqKc2Ka5D6Kv6XCaQe3CWMQndusPveVbnswpcat6j",
  "key12": "46tya8kWiyd39VnXFf93iW57KSXXMdzyFkKPyGtAQzmndzReiAbS9DG6qPjy2L8fKNqxZrmJDNpAXF9y1kiqRiPN",
  "key13": "2JX6gAD8z9HTXE3ombW52XZNj7hS2mg8fntn39cDQSb1x6iBrmcQ9uwBwqtZenGuL47aJfARHws38rhUjnJVJkcz",
  "key14": "3vsV3xmB82YTvbLpFnpx6a2wppM9tu7hZLkYQD8GmLBMhkdusDqycQXnXHuPeRDEUxU6GXToRAECFbVvNnZCSt3Z",
  "key15": "qZmd28UFhWg6VYr7iyvEQchPKem7gs8ehES4UPo8N4rMmaJUrTkdDjJn6RzZZaW57G6xdJJNx5Yy3mgiyKJ51e3",
  "key16": "3zwdDy6wrHfQhqUUHy7hX3mJKMZqUxLt17MX5WvaAa3eZY4AD7EznLw3ppmZ7qyHy1ZFQathdUKGEXZfJdKiXXiR",
  "key17": "3vN6Lv67tG4AKmHqDqr7aQgkDBH1AoshEY1WK6Hm41SDqBm42pzZ2k2H9adJtdbxmT4kTG1HycFhtLkXGJ14DaA7",
  "key18": "QkML5vPWH3CPTghHj5ahEyXcBCkBTrNTsRZTyB7GyD1vAAezLsx865RfJqmspD4Zp1LUKbaaNUJGNCP3a7uUdJ2",
  "key19": "63MM1FcTkB3zD1xdQALUHAuYXEtS74CuvUW5HG2hU1DiwT1Xc66HM7LxuT7xajvQvFZmwv4j5yDFpPSXMrTcG2YP",
  "key20": "5vnsnKzyZPAM6bWZUmE33hHW4dfdXasjtZeiVK7FFpjsuQU2WHbzH8bEts1nQcpo6MtobNXzQ2w32tg8FYA6ndcA",
  "key21": "5N7ajCgtLompQKMWZPrzrrm1d7CAe3UZecPLJz5ZayBfj9Hj4BLis3cnoA5eSgCPHKKEq4PatXcTJQ5bFJhULGvn",
  "key22": "wCnQFa79m3BUZExHuaWNbVEgEr6anhQW2G93RM9DYty1xCC99jtxWxvFtEyZ4FsTT5jeXQJqZ1V3kzFbfCeqN36",
  "key23": "33boyQyBTXNxTqPYwq4QoRELDHRUxeLgAfqSSGuAKycjieRNUrXVqf1yhKp6PQ64U4WH5a1pKZ6WD3Bzx9iLXBe",
  "key24": "g4wQEdsDBUfnJHUS7hERdMJYi5wbLzsKsKiSZ2WbXmVNFQZWPR7yNoy2kfb5aNiaLXaycZMkWWppaALYMSvJedg",
  "key25": "4Cy8XvtKsGdqpN2FEzpjYpRDxKunynMTtHwwiNrcwfbmpUGpTXHxbhDBGzrM9ET8EFvKguU5FQJpvjDsn1CmYMyj",
  "key26": "3oK27Kf1nPAYV21iv3FhRF3AhvNHb3Gopn94NHqwfx1vmWpNdpjGVvfdh4HKPmhFwid76VFiK4i4VfgrqjSfcQzk",
  "key27": "2LWSC6a34MXEAAKyUX2Ycv5pYdzcPb9HDE2aee942wc69r2vDw4W2JLa4UsTay9H2rWFLWfrPFupEgJrt7csdoJq",
  "key28": "2EFF3vTGuAWZocHmTwdH6sMkr3DuD1QArpufSMFp9gXdw3P79rfKbNQNXSERuEgWCWASZFnk5Kq9CBuryYLXdEZt",
  "key29": "46G5EiHxbvV6Y3qcsRJvLeMfwUnZ34nRnp8znCyV3EvMYBwCGN4xpGQDGKhDgkzo95ZpHaqhQF9613JBiBvcLdcX"
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
