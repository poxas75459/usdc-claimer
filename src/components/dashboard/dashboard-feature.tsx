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
    "2r778dRAVoADaDB1UC6L2jwnXVaykR2g3gGsAuGKEjvjbh5goM9WutP1SLBDvhQVPmFMQXvxrNQrxy6Wb3qSRUDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdvuY51R8kzjrLgD7Yt9JThofXUrh84PwjggHdQHwZ5CiZdAMWbPmCFoU32DTwV6ABS6RwH3gSpXkroWMo6hd1E",
  "key1": "3SJjsj9YApvGNjsT9jvdYDjUobtG8uoPBD5b2idEvWsLhMvQbG2YMg7SLRoSBGS8sUH4VCyQfHLhEbNuV35SgezC",
  "key2": "5QqV3KebVEnQAYhuq3RZencK4FzBdTRCf5W1jqkiX93sjKoruevP8zKi2TjByYCQPtPi6CSeCpAagzN1U1KyPvjo",
  "key3": "21GKYurtU8SBECBryrWqK7y49gAGybL1HY9DzZZJkq4a829kWEUmecgQaDfk6UoRQio3AoGLhtNYfRmsXUGPVJGM",
  "key4": "5p7QHUj2fW2ySL2D6zvCdGoVyF7j4dnbV1XvNPqSXKCTcV28xd6nZ1XHqc6spnKDHevs6CZavZ6mWUy1hWF8xEBg",
  "key5": "2xgWrtCwG2cabe8JRtcFhr1VoDv9ynSLNchVtp4KWHUP5CLDzaiy6qvAu4jMVd1wxZ6bTQR6XcAfUd6YaoUQfxTJ",
  "key6": "2LoGm1UWSCVEcsoLUzjvuGbjvCMCYFxGpedAJnv8tofGjw7xi4iv4tXsEuP9KcMRwSp3z1KKJX6FQrH9vXDd4P9Q",
  "key7": "2vCeAqE3tDn7feHM9cJtheas7SvZjxKGHNa72NTiQK3AZQfsMQrkKjR1LSqCHs8SZG6Hc4W5TMqbE5UuEiCiBBAD",
  "key8": "5oHCzD9QjShGJn617AwdiFwnKBWKcr8s9V83AtLKaX6vrTVVkD1d65VBPif3PryU9VrMaSrzQDxWeMgvyuSPBdYn",
  "key9": "4P5wbZzQeY6oennuaMKQ8PcTWdrKMzmeweAGdzhM9PDcjqfL7CHx2RHAh4GfkxtBQd8TpqSArEjWLW5ocJkfd1Yw",
  "key10": "zQvAxrMM6VrstU3tFHWjkq7hm5MeCg2vDQAqu1pWNfsd9TK1N1wvN2cEHvWtBnsPJDevVYHoZjvYPfh1CTr2epW",
  "key11": "2y95h3TT67JrgGguJ3HtCLCGBVYJ7RzstQVsE1ufRAWMTb86DGrtgWoTkmMyGLAj1Ugo1SdeWBxy8wTMXhuiuyeD",
  "key12": "4xFiaC19kDfV5Q4hQK8M3qLxPp8RsXAMFy5hbnSGEjevLGxPQzeA5SMdvqTiDanYD6u1FRXizZYQySymVVfgmmQM",
  "key13": "4TCTXDYRTgzazWhLjs9FCTxaSpPuwSuf5hyfERvSnf8gQ1Jvg7eHEUKErF8Dt6UU32vskVYE77vtgz8QyZaMRWP4",
  "key14": "5YiCoYAoFTkbeBaynMtzd57HZHhAsTZ6q1dXM37AxHBxFVV9NWThffvniLuz14wdUWNe1Yju2WeJbPvHE6PVTmjE",
  "key15": "35U5wxzb7pq1VSCvRBGrhVUcefEjjZjXMxGSBkw4JWaw9D7f4wnqVQmkrWPFQ6L491PUmZvoVSEbXouA2he9Li2V",
  "key16": "5N9VYxuMfzr9BUrEYCpFrsQxa9uYNZZUxWUNyoA1KWJAvFbUSmrhLhBFV29fkhyN93ERKVCKHuNqdvrHcKDSJ9gt",
  "key17": "4HamM7s9qX36iCTdqrMbvZP2VpuLHWpvWyrD2eyHt4MFSsYThVb9vASG4HWaCBLmtEMfteb8zdwENRmsV17wwf27",
  "key18": "44HS8u8z6sb7p15JYyQM9MwPuEgSFAEonXaFd7mqNGkwJWQhFP8P2jfLdH5FhiHABf6MAYsiKWQtf28wg2ayXNsu",
  "key19": "3BnNwXaRu6hxk4c9xFuwBdVuEM5vFqWat6aE6WSJ86mfkpwdQSnpb7RU71M7e13WiQeaURJBKZ3TeeUZ7adFZ8oF",
  "key20": "4mEnyoFkPgE27t8iGu56DuRnKxQxv6ZiEsvmUx4jLpT5qzc4EAELuFn15qhYGKT7KYVn2nZGMrEkNRmznosUWd1Q",
  "key21": "5tDkrpmgmqfRqG41RUqk8xucqYT76o6ojDkFAPhtdZPkBPzE7ZPbS7rxV3KfCT7abop4CBvSH7D5z5ocXgAL8ZF",
  "key22": "5jjgVkJJJ2TJHhsYZKpyGcD2zgK8CCQK1zxNbzHNfxbC5yJ9NVSDGNEnjZ8MTVvqdENYUBUtunYFTeu2MzSieUb2",
  "key23": "4Cp6uVAjnxPSAo3fsYLMLmdPo2AKghXfmxPPep9UTTbqN4BWtUTnFJXpwGK4A5ZCfZfyDSFK1SKhCSfwY67DfBoz",
  "key24": "3XGjJWER2YU13Zj9vPAS62nKcFAnwdNv8fbdhnPPAK9T4Hkddfya34FELcdyBeydkTc9LpqgxyGUXmX1pPZFVmNd",
  "key25": "2Mzep6bkWpyZbsuYNcH6cXHkEa6GkbxtXNuqmfwsQm4B2VW8iVodRkWsBJXAZMsVumr6SSNDziDovzxJp4qvDDH6",
  "key26": "5D3UXd7L5hNMW7F1HQGMptsZki5TN6h3XT4e8fDc86VCDyugr91WKg2xv4sP7ycYASgUXv2voK4CxN7qvXWbrCrs",
  "key27": "4PB8id4NDddVVjaNgyhFr1KErPQ29DSWnwXUXeNu77gVwm2SeH2ztfKeagWLs8DMDGiHrpKWi7SuTeavwVEioEjm",
  "key28": "452FCzBx9NaHTq4LzgxMo6BEecVWPmw6wrnagPzywLuSbtNN4qhkq4Ek8bSToWFVfDzFVvGLAuL8r8XpcPry3KjG",
  "key29": "3DfpLZb5nwMkwLManUGDrTRFehLFB2S2U1dLfsW44f99CJFLfzuytj8dSUA6kWoyq7x54RctZB7abQD9cYL5E2kZ",
  "key30": "5LUDL6UGFpmVPCfQ4qFCQ6AHtfdYubAq5kpazsuwkys8hS56k2wuWFnZr2JvLRwZ65yaCiFnyNehVh8N5Jvm837",
  "key31": "2xGoJHL8Lxedn5Y2iPCc8MLPwMFFnSeYxgM4feqt5cmncKXyj1num2r9jScTn2NXVfp4oqMuF8CE9PKPJRcLj7ZV"
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
