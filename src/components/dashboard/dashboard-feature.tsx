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
    "4QQXc47PKx15KFHpLrVqNpiVdkku5etRSNJs5w2Yx5r2MNSqgSkEv9ihXxdcCFzqFE1Wh49mohyKCgvVAVeNAqRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38J7NCzAVDyKJrxk7eLaHDTs7EPCnEka7TFvxNhm4fFXAbE222ngE6R4qgCH5fQKfJMv1zvJ8SXuKsbmLLvBaF6H",
  "key1": "52fur7DzHN6fBK72XqY1PgenV4HSrGTCsUZaFX1h8yqCGrdk5wtjQjq7h28tVXesYufjT5DMpQ6Jais22oiAW2br",
  "key2": "44CyJSd4StjWgBvzaFfmSfHSx96iijWXVUAoLoENiim1a2SVQnuNPNGL5hqSZWhaKHznGbsjjNBJGzfMxMJQU9us",
  "key3": "3q5ERWAHGjuwwow4gBoprxDUNBEfP5LhnvayWcBEhNkP97kpqFMfPLrVJQ5H8GQ82qMpJmxg6jeM81zt64LCfXch",
  "key4": "37EVXfuBHW6azNCnaFmUjfPKBLj5DDSqskNhJRyxk6QnDZKtvMEVr7t5LuBKLvSFbboY81FtQuuUC1shwZxpvJyJ",
  "key5": "4rDvZDNpQjSUa4fE7gc5dEUXXotYcNyK8fdFpnRy2Ggafg4DpkueoRc6nSM6ztccwCbjDRPLweiRriN4uesqkPqy",
  "key6": "X78KRtqQzGEzQMyUGwfv9cQ38snUAkMUzRV533L9LNKkXvgsbGx7XbvkgSGMYHYniwAk9scGsbxzD9uZVgVeinn",
  "key7": "5ravs5De22XfkSeQ6WSjLiXFDvG4oMnBVtPAzrE5iaD814pKHkN4dJJzbd9RpiJQLDV9JEWmgYWGiGkQhenaY5pt",
  "key8": "4TVSBQFeFgbgy9dKHg9QRVhzcTh3URFuz8Q4S3v3a91sUqezJwiqaLgghwaFqFmYDov4QwCquznVL1sk54Kh276T",
  "key9": "3JiYMiJJpZ2PkHTNeyAGz8q2e5KPTAUkuFPVP3j5USJhBc5y4LQm67UnjVS4GbifqsVzfvD9FXz7LbyBrCaCQXnC",
  "key10": "5athX9WUKHtaoxBL1xPQT6fX9TNpXwJRMAKu1wJUSGw5SKo95AEiBdSZVaUvJLYFsYebChs4gny49jEpVS1gEbrQ",
  "key11": "2aRNSPf1qbiFNiviEd8Hw7vJX33hztvMpyJbywY8bzhhbSRx5CFgzA7ike2DzE4xMA5sfkJ1BtJrndxcvjHXKcjk",
  "key12": "5BN4gmEisPjKdD3oJXyR6YoxJu7zgW2ZBBFFtfrFVU9SjmrWahXewr8EtWPxPDN3icq7CFRcHKSj9UWEpUorSHQJ",
  "key13": "2TWT44M79uKufxzPnTt7eg1aqJf9KR6SvxL2w5oAGcXn4wkENZUsojuHTkkSyXSeSUuV5nXefSFbnFxorivi5zzb",
  "key14": "444SWvf3oNRmhxAxFx5AkJCL2WBuaWcmK4epyKZfhpCCiTcPt8ULkfp8htqt2EDDNDJVRCe6neX1Z64fFkoNgSHX",
  "key15": "5JN1m6yrmagF46hqSP3ysHLZ7DmDg7q3un8kJJFVgvDDQJzmyqhLfBx4TqqKwpSJe3eWSq7Q44tLPM3RUQzXf789",
  "key16": "3oQBhCvuHczfaf89p1qvCNwcHDwyNDejDfXKdy542YTrctqjDHm6RdNqNEe3WViNCxpkJDwJ63iczBCt3jHevvkM",
  "key17": "3w7wAR9Rngz4k3DkkAoJDUmYaDQJfdnU2YAby9aJAuXJyQHHTnmTczmtxMjG2XXmHzETb5QGfWiCSxorXtQRZQYd",
  "key18": "3btR637GwfoZ2Q8KWaNN1inyDXrmq7zcnsXRpwunMReZwsBgWNgxVRpRrDUxNTMLRYy8kjFwwqWurG1zbwyJo8RE",
  "key19": "53GnPguXDNRhxjCM62amGoMJiESs2DyqZco1Zi3mw1vT56Q4uVoSKqXRyTNrTfMZdxXmyYeoVS6BKfeAsZkZyD49",
  "key20": "53oJHjAUKQoh62Mtomcq5VM1ouSnFpUGeyev7iQHyzu7HUQDFrntsE5TnKHtqo9fGYkjuQtR4uaZECfmHrhfXkes",
  "key21": "24z8eeVdgC9rdAUKMdmEEoeUGjNysu33WAicr6pHWrdi91nPsoRRysTMbRA79w4TRB7x3dzuEBYJqhiW4MgAAgcP",
  "key22": "2aiAacaG9czUGszrKDrkghCzFbk3ZRHGxoPZTSYv5egsxtwEG6gSnY9yFBfXGL4E4GbaGuqCCwV9R51ENcV5QB1V",
  "key23": "YCWY6njjecFMpRSrpwYYQvy3eCktk8b9wEEVzF5nfdVj4ARq54UKn79AFfNyu7CjUq7oBGxzZEzAN5Vg5CuaSx8",
  "key24": "2ayimr18VS8rqANfU5fw8Xp8VgLK3cLRFB7cDxZyL7GcMRaYR36sUzjGx76D2ZvQcywthbJ3h8rkY12RA9SnuF7A",
  "key25": "2BaKVYgvihwUNUk5nCqq3hDrnvkhX9ayV5FA14hcTAdgqgYhqTcugLcR1vEV2bfgp1TfeZA1CvL5iJJYu2JNzRhA",
  "key26": "3t8nE8nWn76UwS9aTsSNqvW8hapQSHtaK6sLz87BUazRz8MKKRhyaA51qzjn8JBJyVLQVFrjdw7Mp5eZJUD27jeq",
  "key27": "56m7iihhwhYNGysRv1X1YRU2d9qTCCq4bULzeQpSRFpmX3b4JHRPEp3EfcEfRX3PmWSsf5QYgNmga1BhvcyFex9A"
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
