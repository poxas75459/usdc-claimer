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
    "yVo9eNjn4nEC1ebRnywRFMhB5xRmeBKUuN71pq2pHg28unVdZuXCPmgiyQv2QbcseobkxeBUbRtXzmefjmQKZ7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1SuSJFhDyWuGHd16YcsuyTigsodjZJxqBU952jBGeADZiCHFQVXaTgtJuhn8M4LAPPJfYWAcfTZD4GSQmmqL7L",
  "key1": "4KNEs3Ycp7T3Y123jVWyhj5pFaDeH5whdPXdQPr8xNZkbPmtiJbKZzcCm3E6kgyyuTh4BYeVvCwxXFxM21wHRrbs",
  "key2": "htppACjT9E4AQvvs6B8cQ21Wr5N6YSRSizPyFofsMRT1fBAGAuYpJt1uMYTp3SsFsS1dxF5B3bAyUAx1vEc5K66",
  "key3": "39RcMMfF2kRpqzKPMxGLB3HoQ9j1SwgrSznH8H9A1mdjaMPxxSmzptEXgDpBiodWm9NEsFqfoGixpYiXEy9JY5jj",
  "key4": "3dFfFiM4KKqXPMTY2AtmbeRgsDbtBhyXLKVQdC3dQDKkbDSEvvH7xtwirws2SQdbSpBA3whqN6BS6ZgqpZgaavcL",
  "key5": "3pU32MYr1eQLDC7iFEZCgDETns9z8DML6BVMbLjp9oMnZVuhLdTcAJhqh8TroMDNqZ6TbUqCQ3jyRrBgRaEoE2HK",
  "key6": "BTZVLtUKf8jLgNV4xHQ4M1CzUSyqLabwuEFqNrvTL9KD8LaZhufBkct8NQBahtvfH4JMo7Yz34BeY6vVuhFsduF",
  "key7": "4THMY7DdhRvLAzu6DPzMfdmdTB5j3suSSTXccPgDcyCoeKGdsYYaTBVHmUyPvE5JXa6eGzj2JVocaNXXE8ek8BTo",
  "key8": "22UEBuJ3rGb13r5dxsxUD3nDiK6aByya55h2Uhm7rkQQrLZT6h32kaSjqtfL8ZF1DzuBHz5VmdvPgJyKa2DHVRMs",
  "key9": "2fmmk4aYZ5Criqnq5ehoJq5J5Eeb72dSNu5VKhtaTgmxBBWS9kV9cxwiXFTzvUnKQoZsiTUTvk89azpn7WD77Brf",
  "key10": "5rMP6BbYeGGqpwH13TAsk7tyPDyWpKExtr3HQ4iagPH5ZKmfoY7SHocayMSYhFwqrEcowGpAnskkVsUKm3xtX82z",
  "key11": "2NZ26yakeLYfs8xE779xFM6grQGuepPVSZbdXkX78KyUS5YVJh1s5bH5VvJ6f6mCqQwDiJJYC88Qhjm31oTHU6nZ",
  "key12": "3qZSBqpax6VGSNAwFS3zeLrtH38pLPWBmnvn5Rcm5AMpAFGHHpyAFxH7FtBXJh17PR6p3pArRgeEms7EKv2MtzcU",
  "key13": "5juQDQgYRsywhNN1BVJkQpi1rnMqHVPaMSGJ5kwCzyxGa6WMKmyT2Ty6GxgzaKzMnTK9pBeCpTSQWNx4gzHPZdnP",
  "key14": "DYKMK2BrehKxW8Avaqf8r4EsWy6pFiPUaNjzcchgRWM2bZTDdY4mToMZ54yxWZBGiCdcmc5HNzaFc3KmcnG46yF",
  "key15": "dvD8Ter2HaR22AKwiaB7CgGNKe59VHR9AEBukJE6zgiDc7E41xjEFWQ9tifAaxNgxHgCeNbWgaPAahNXeYFVzid",
  "key16": "SPXXhzehK7pPSJgQ13nJt11Zhv8AfB4oDYN7z4RLDTdTMar7NbvLqZgmHkfVHNZeTPMV4SnECYDwCBLHLp1dixV",
  "key17": "5omhXhb3B1VcLo1AFT6thArYYasKsrhAxDASZdJfqxeXY2W5QWchpP9a6TS17iMckQuZkQxKwGhtYsA4WbxXEchR",
  "key18": "2FPaHZ7k5nAvrjwxxGQ5XkGCM3vyEnLCT4cbEjTWhHEnkq1fGDiGupt8DmmnBLRWC7PzRENHw53yqvbX2zQrHYh1",
  "key19": "575vbAU88rJTUZKdP5N2Sc3BWEDhjm4Yp9cshm9P6Zm2zuHF5brMEejTMf9KAT2HbmvPenGNB34urb4Qwj8zE4PA",
  "key20": "25xy7YJYT8oDoydNtBodn4m1vLhgt3WaEoX79o25uMRLHPn3LSLLm8kNHM4czLzFiK5fsekBtah1cLSJ8SczMBgL",
  "key21": "CULHRg82bArYPzWjJ2JQvbn3iwD15ffr1XEGeLQrZtQtRLLysB7wwQdeHyes2R5g9gVDeQuTYcaqHzaD7BZFP17",
  "key22": "UKY57pDFzY1BWjGMix1C9efxsb1n8najyrmjSN4Ans21i7W3iYt92WBuMQYyLbsMxJMoqf3unpJMeyJjPbpZYQz",
  "key23": "3HQ3eZ92e4zmgke8KBV3Gsi19YBdqucJT4esEayeaUoGWh6BRMSwuvDwtGfFHpqhnC9kA4hXdrUSoWz3R2sp8maW",
  "key24": "W49dhS86t4tJK3ETHJCbtQsnFAtXf413hnhUCbPg1MvERpjTJWzmMJubPi597mJWLZFPdEvUHtLk6KSS8Nbwv8u",
  "key25": "4WttjMp9vroTT14kE9W9je5YdJb8vqgugRT7rDPkrZQroYB7WL6hCMuXvGDHW7AQAaQp3TYzndQghBSxfoETt9Yg",
  "key26": "37XQvg4tAxkAtph4i2ps4hxsW8hqrepppnciqsFXhAFrXib5kgTDFUPJjQkiuTw95aYW2z2n3mCMcVomqN1uiBeL",
  "key27": "3KbsevC4BT4QzJ3MxeRCArjB8uxuTv8T2tno3JWvgY5q87q7SurchXhCzhaDMbJ8U5ZoGmNT2pDeUdPrtrKTUbU3",
  "key28": "mVPX9vqW2u4kum4viLZfMkJeRWGfbRfMV57YPgoRpaCQ6c93uwoVY6ifemBouiqNws9feCX7X8Wisi5j7QSKGS4",
  "key29": "3EPFDe7ieW52jWTb6M16kszd393PLzMm98QbePRSbiEn4soC7e5sbF1mueWvHGDcdfExedcXLpqhD87tC4Xi2P1a",
  "key30": "34LYkWfefDFYTxAgjDpa6w7yp4hGeB8ZSKZp8nqqYiWKezpN5tWzWyJAnmjD2TDZT9z5L4eN4CFriMVwUyuCyHPf",
  "key31": "5JWiUuXHrkRb4TguBoyayFrmQ69cS3DcQMaKsdwuEpS3DwL347Did1aj7z4mTM5HYFvcKCF2W76ajg7A4XBH65RB",
  "key32": "3maEfSCmbwJQnuCkY693PbDzocHNqQD3t1n7xhFyJoJbKSLNZ58TonjGeBNhHXs8CgHse5KqPMSZMozjP8MU3FfS",
  "key33": "5EBtj4zjMsWcVwrdgSB1kU3baHxYo3nJh8CMY8WMMaFhvBYCKzdmW8epY2Fr97CtqvNxVWTqFxgzfhQHkAoJcEhC",
  "key34": "51e9J2Noa8kTiCXHwTjmRgo3QKeQGQB5FBbeeXKE9ZbMV9P4sm7tVN4E7JrD8So7F8kCsfuxrJvwjfnT85tUVoNu",
  "key35": "4rAVt3R9bT22q4gACWtKPSSEyhx7oSEWoqDXhACqmFMS8UVhMoDZQY2uSjxTXPefaomjMk4EmNcy372wmbEemgyn",
  "key36": "hrZzupf2CoJfaH9pc71Y6MWeQhfJD4qti6wPbyofdY7eNqsX738CBUVUyfbCzcW5Ff9PGmYzinteipjsoYtXKnk"
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
