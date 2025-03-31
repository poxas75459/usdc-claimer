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
    "4FWoGJ9kDTu8XAeqZqSAzEQ7Axuwt5ncFhpie7PWd8DKyeVFYMYwtY9Yty5Q6Gc9vcyWmMtcPzd4SuVCUDdCJAPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NhmDHHMcQG7tAh3TaKNRJg2FpKYpG8zmnod1E46WXkDLmmxSLLL2vdx37uQBkw93FbG4LxWfWm7gckj9bXUqMXM",
  "key1": "5avTojktQboGnnWWai72556kNaTK5uH74DMkj6HQZDe9KaiXcNQRGgyzVo6ziaHe5PUgCzrR91nypma6npFDqEkc",
  "key2": "27i4zGtxnARnxzzfyWgyx5wNDi2Bfp9N71xF4fVVdJZV2W1HCACm8Hu6mLshJpGQCmj1hxrnxR8kV98NpPuCK6Jv",
  "key3": "59CUcgr7CAbexCraNkn5MtbssjNEm6JRfQkbaPZKQC1kUK9Ddgc2Feu6rHdBd2tdTEcEiwMtJvRkphpfqaUJhqhc",
  "key4": "DozyMa639N4v8EMUNKTaoCgKRxfcP56BphFkiy1VT9uZ8BqecytrGnGuRrnBogqT7VM45r7LryAisRN6aEmTR2x",
  "key5": "AyzAcYs2pnCfsz3MwNTBk9hgEAemL28LTN8CJxEKcyaZU64LtXB5uzZ2tXMhPkWVHWL8WHuh8w6yNVhm6LEBZn7",
  "key6": "UyBw5LX8cQKpnbNmzFFFfbTBR627rsTaGe99kgigd2ByP3vogBSAJj2vv9JnZhsbEikG2WvJfWMB9ZkiFrXhCiP",
  "key7": "31rSFfbojdy7qwg27gQNsD9Hnay3KTBRB3neVQkzScd1gNpVsozxaJCCeRLy6Tt3LvKGZCsSF9d8iuGvESwg1hBy",
  "key8": "3N23dnBRT7bENK7yrVLMavuJgCmwP24EpXE5dW1XuECT2d3WEiaxPdRnGC4gspKJypvSiHc9KaF1PNU75mdyLemQ",
  "key9": "4Vf7iGek8xpS2v5QuGtXZT4bG4fRA2ESa4vABKxrAUmiVYYZUjaDVovzJA3gcBrC5Kdq5eEveQs3pUsbbqkHgMpV",
  "key10": "StHaGJoQojjN5axA3Tb2V1ogsqTvpCnGzCGALJ1VtWM2xh3rsDyD2ygMbtkdyfPjPdT6oNcXcnhfxSZv13a6fti",
  "key11": "4jWt4kRxyiTPGR37yqdpsYLhUYMLLZMJUZwipi4FLGXDMiNJnZwJV5gKm7MVU9QaK5L2JTeYntMkhjxyf6xKyfKZ",
  "key12": "WWuHxpMLNc2TKPLuFoR4iLMjg1z6e68mDiNcgvC1Hog3kBuK2itDW6byPgS5q8f4Hsaoefk8iLcrXwd9F3Rhtwe",
  "key13": "5GCewsENsGPbyeiDiEZpwhX4RwsowTc5sZCxeV4Qhq9NQS69X9FTdx1SGMdTzPk84F19bbuMWqU4xnRCmPriedJA",
  "key14": "5qLeNt4LibndxjHqRcgY4v8ckJns6nBuijb2iDPUBuMfzo8WbydR8YX3aT2emtVwtnSDP3Zkpv1sUssMtd8LMLTW",
  "key15": "27aQgqtANFyKorecvvPWMAPNmYYAD5K1f8gwUeKDjo6wszmBn8S65SFvmnWi5YkUPwtv2ia1PgSF3XMmd7DmWFGe",
  "key16": "4EEyA34fnSSGSsKWrYTq3nyB9JWDyNSst1PYsMSEEK9np9MaswNuZfJgomx7sCNdcUAkQH9KrbCb5xZsgatBth3g",
  "key17": "LkgCusFnQ5RKVcfpvMtt95dav5ct1EDm55NeiGRqN44txCG9VvGek4Rh6v7ejGLaEnN76t9WguyE3bXQpvXk8Vu",
  "key18": "3Aoeh3RR8CYaFPssHYyqDnBYsxa3mhQSTjZRMac6bnuQGregMRRVHrA3T6o2V7SRJEyYmNfGYweoSUqGEWDfVYZ",
  "key19": "22eeYVBgWQw1CfBATBa9YTraqqMGLf8yhUfoPfi19vNeeLK4mVjMdUyLBcJjguXRbdKTFeq8wCDJWQMGzbzVL6f2",
  "key20": "6416AvJmAZAV9wXByRQPdMitMM172bMVHLeCX5gmeRKmPYzbm3VrwvGVpva7UPBTmTiLbumdyt3vpJGConeHBJse",
  "key21": "hjfwpjkazVYfS3hGt5CdkiFpr6x3m2YXENzChXkHjC8zpXnhtiN92Zf8vrmYF8jr8jBXAp7ttEwzGhFtPCT2j3x",
  "key22": "3BZMyMoc1Piqtu2tKfeNvKqp6twbCVmKeezpDoabTJ8vjZ4sGDyTcNpb9nV5YwNpCT8oTFMVFdZuNHYuqUWHmkZE",
  "key23": "3pGwVMsPiL97zxdTr5xJ3DChuUixnNGy7uTMvvonSswZEJRCSSkpgefwYZrjgveWwRcngAjrkr2Us1ub8wMAaYdi",
  "key24": "619HuWxW1q7tXW3MMZq9BqBYx7MfKLrQf5D7rko8CzBwSDwojPhexuN2AVnVj8iMQXhv4uaoJZPK5ymX24Atcrrv",
  "key25": "5VLdqCsiQjNgAc4WU1jWxAdp9VPkwn3tSJ9zzXvac2kAWUqC5Frcv6XxVx8pquwyCbtCtRGJixWzP2hLY46yeh1R",
  "key26": "29R68E2KkT4RiQDz3U5ck8z9YqdHZfh6y2d9JQycE96qZtNcMBYcjVuWvHdMPjNFjMpm1SAmm65pEMWAZS9LVXt9",
  "key27": "4PBCe6PeH5ie7TmAgdQ69DroWhQiFf7oQQyEJ2DYrE1ckuwz9GCwykGFMiMAkmPpHiAxK2jimygV57a8wJDZPCRp",
  "key28": "5bfRVt4mfEWL99JxhmMdn1CHSPAAa7aM1MXR72aDSKGcJ6shBrRFLPGdoZYdcc1iu8dDZXRPNfRoxnYj8pBtAFqM",
  "key29": "3mr8nhgT2WCE9DVjq3pTfjaQe5Kq42c9H7JzdezSj5b942jrzLv3FBQYSh162DxLTNMTj3mhXUGrUDL7bMrPabby",
  "key30": "3dUvkufGF7XXCWBfPDNqcZnwmyLfTFMh8PkgJEVqShzg73gvRsFSBuGfmNNDQG9Fa1BBYDthDSdUGdxJkjKwbH1M",
  "key31": "5PsrSJe4kCyeybbU4cndanjVdvC77YpF23GaxhqYgYirvrZ8PFP6K6Rbgsz7TQDyc12Z9k27xZYJKqXCH73dS58s",
  "key32": "gP3Q3PdiUwYMyC95BQTR1UwcvxPwiz6mjUcxz8VCw9RtDjdNTaSxwZHG24mS8f7XchUXMtLqbX1PMDagpZuefBq",
  "key33": "tD1bsa5cuodh8Zj9eBRpvU96zXGfsARecXKvEsF1Dfntei9R85YKDsLjT6rjUToujDdbue5ecnKhZFjsab9rSSM",
  "key34": "3gAMKeYNtc7GuSpP71f4N3KWZuy6a3UG5qJD49BdLTnnkEFRTiqDtx6pi5kWBReAqEu5p5jUKJJhd4aKzEaY7mZY"
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
