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
    "3ALbiLP3dZUUfwgTgs841zNAAU4Hbohxx9nm6xEYH3M1vkARVhg4tmbguk7W3XekceVhcvndzGrZhx23Jm6ddZMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mY6bpK2xXf8BZSDP461f7ggAS2mzqHq548TWA95juFcLQ2QaM8SDTxJ5Gn9ox7CqE5ev3MBicwJEa96LUE5QeNY",
  "key1": "5FeH1WuPiNsjiefWpGJeZTsPzYihW5Wi9r6fKtsYkoK5Wa32LpYMimusbym8QSyzDnfidJBk4NBaAosdTpJ53DVF",
  "key2": "8i3yYfhgAi86dMfyQe6LG4Lo75sqRGPE4r6NdXyVqPYo95kmdU8t53Q8Y9k82xyKJD9qmEm3Zcdo7ZK22NEeTcw",
  "key3": "4supTuVp6keqqqVsSqVfbi8vrseyGd8psPhGFamPrFafudipuwcemF9Q3ixAKozocuvGfjWqpdLdP1b8wD5ZADv5",
  "key4": "AL3TnC43Da3Sq2pPnDXruZWsQR3ZKcbKsBoTjtr43kJY5voAKSmubBfxoaduz2vuipe3QooyS74G5mwtvh2J5RZ",
  "key5": "23FTvGAHc8BMTBaxVbcRGoecW3mo7m56bvpycvhvgKqSbuB1rWj8CXaCZSWFKpakiNQwkzN2P6njd28YqqEyExa9",
  "key6": "3ZZfH73uZ6etHqwqFQWEAP2GsheZtMi39pwt4Br3dYDgvYwcLAR2ugywfk9zMXE4tM5438auUvCH5ujoAWFje1ta",
  "key7": "3p45eJZ1zEvuC216d4oHYCeUxgCHxgeLa9jdnk8AdRoJehigK58W1jvdkJGNQwoH7Z2k8LJUt9SnHmqiFTRF3xWJ",
  "key8": "5oieg9UKUUcqn5471PPQCxzDdPK12sJ5rPdQvcETqLk782NuLybTAtWUrmMyxPFsVttcjbku5eLtGhwvrS42Ygez",
  "key9": "55P9CYgCxPvgHwTPGbvbq8ryi7Nsmjgu4zvwhTGfW1ntBWQkmFPjQAHr3Prkdott5t7zXfLVqZoeAQWxnX3djdGC",
  "key10": "oUkXUvAk1oaFGEZsxusF5v3BwyEmVNcRg5Jfp13oeCNG4i3khN1RzxPAckc6U4coa2QZuSCd47AgwKEAq2WKYRc",
  "key11": "4qX1zzHd8H7G6MyheGEQgGdiEXdi88fP5xqkhNfRWWBZVPu29TXYAwDCus5pUG2Pvt2qeMM1ihfNaRMMi9WUAQuf",
  "key12": "251Gss3xDzmxscw9EobEdAMRW3acSTjBMKZYGdtJo4zsBPLB98CZzakoG93v6L9FKHzAm9bbgU3KhBynVsdf4JAt",
  "key13": "3sv8DrfH9QtwDKtTUPc9zGcn3hcdyY11VBsGoYvKuNceVDgc2tTWXEh3xpx7e12MR1GCy3NJC3L4WwqovjSWp1CF",
  "key14": "DyFeUU3XhdB8tCbLYxjzHWE3DNjcopVEFf5ECTxa2zPHGjaim8YSZnFX5pvp8pZSiAh7pVEyNYHdECwUc23kkSi",
  "key15": "2zyVdqaprndZ1rz4pjhARb12iKeSqUPPjwvnf5ctzYKic6jCmXn8SMncx55pk4k8z9VjdCEC2hdzDDKJvQ6us9HQ",
  "key16": "2zeUAuueFzNQN177GatcKqqamEwP2QVEoKygm21qLGBXvy1vxEiixynQDqtRXViHU3JBSxSuegadTYmLzbKs7gQb",
  "key17": "3wqshRAb5THKkjXNhfH3psb3zUgs3UdmaHQ6xXeUHTuccbE59REP1zfnZT1zF8ZreQ9XM3xgwxqwCmnc4jta8jM2",
  "key18": "3MPSVTbLLMrE2fY2SaYgpx6w4yJDNvSX7oC7GcFMr1EWJBmaW9VmtPq1b7YWCb6pQa8nnLTF38jRQSvVLJhTCj9U",
  "key19": "5XUgqtvXjQt4gZpgVhFiUBCzbE43jqahVSBnYsmzX8LUgU2452noED1eZjR5X874rtVpNimJcL1ceHZm8ayQXu3g",
  "key20": "3L6iqTV3JVXJ9kMpn6CKp1AR7BWmbHYNL2QFbFCtdPDdPZUCwYWpaF3CuLJF7JvBMo8uqCjzZUH6Lm9yck3Rnk72",
  "key21": "rmMMDKCQcrBJCs6zZ7JkuorSzgpv125e5nFVy2KVgoHD6rkern93zhy2wTmUgs9TTcic5VyQhrrknzpnFtPvJJi",
  "key22": "4vxw27VYe7hJdd6T2jjpV1dBWano62sbBQYXD1YSUxMxXwbJd2uMV3X3wh4X6fcEtN2FCsY49zNvoL3wETo7YsNe",
  "key23": "2ZCFzSqPRJf2Ba3hEyUMGW6tuUHCBx3JBzsxBW8nCfZDK2b8fiQ1RMjjcEYCQKcVTpuWrTCqqanGcGpAZsihR9kb",
  "key24": "35T9yk41nn7b8BM6by9sba52K7aY4yvXefrdAGCHH4nFF3odtVVt8b21cspo3Li3Kb8BJbB8SfebvxJPoa2Fr7oj",
  "key25": "5fBFgdyKDXDDa4c6qA6KdF1nTUSXxxFyxKgMZwZ2cgwSBqs15yrCC7QdDCTDi7TkcyL5C4GHDPRNjzcbXwxWAmgz",
  "key26": "49acbaeK2oBEjzwq49V34XA7ZjDEp1nwXk9Hf4aRcWG3Vi9bzBmdarFZJhDJaBiuLDpPSgnGQdhWg5oN9kWABWJA",
  "key27": "3mn4zAQiVu7G9mAJuyT4ecfWx7h9eEFV7pjQ8a5oy59456LDz3jEAuWaJyWDunUvAHJEQ5pJPPsQnayoTPosJ4Cy"
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
