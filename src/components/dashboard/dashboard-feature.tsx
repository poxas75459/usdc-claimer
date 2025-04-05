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
    "4rd3cakCmpsUmSfcys9bBVBoJZUGoTHRtsnxmsXerWycFP5hg2UZwNtcuFhaxZvbG8LcTNFjQmozXXuJd8HoozVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27TTPUVrNGHSGUP1ef4pT3EKKxN8fVENrAS2iXhorznTcMvAy5uNGhREvT1yTWcqciVLt6gnqd8crhxxLLgcb1be",
  "key1": "4BAu7MRkPtG1m4G6b6an8rpqnWsdmZVFt7cLu4exdNrckiHGTxGqUWpZexPpoW2G7ar5osaoYydzS6nGVFLaJvcN",
  "key2": "Z7Rno6f4Z6CAXJFsEbSWL5f2peawLfJ4RjDr1yQ1ttbWw2GTdb8aQgDgrAH48zwwqQsuFwu7rBM1mj4RVDex4cf",
  "key3": "3F9gubBZgoQPX3avy3rAcFpq9uRCjBHck8enKySmBUUCJJyZfGRCtQJxCpdSjQsRKmDRsPoEhQFjWJvsG2cxcyTw",
  "key4": "61NLnEX33HUiMaByE3VfyUzBuzSCYEf8ugp417ALG7GcuLBanj8nfjTkWJZn4hakJFoNRmWWYEKQ4SSqzESmw8rc",
  "key5": "49NjMGKdkN6rtM6EB4g1L2iQghc2yF5TWTX57NSJU8nuRpim5gwJhN5d8qjVNsKF5dpTD79hfB67yhsKqmq6WJWo",
  "key6": "4Th88MBrHonJ7bJK8gPQo3qAdfAYwQYCGeSRDtyHS7Az7baUJ1aZvzgWm3uFCqB7V94NedrU6ao54Niap45YDL8k",
  "key7": "5MvwwfWji7ZDYQHhGVBKiij6ppxgH4npMGzGCemfgSYhwct8ABc7mGoFo7Tfwi1sE31cpEDGgQa4pSSAGnxtSC5f",
  "key8": "5HpNjY3ejpoSoS2AHgNJYbxxUKg5F4SU1t3cw97kZSXBEJrSY87RqkiMkbfPzD4iaeF4XZ7RSTtPNNuZbUqp1L8m",
  "key9": "3ns4dM6dxdU4H2ddgUDa4uo1mLwC74bvf5waPqv7WfAAGJ3G1cW4hcQ9pdou5jemvdAf4RiKuUW4L2xaM8qUXgE1",
  "key10": "5g6WK6QycFjNKwFum9eguJKabZ8F9ba2VU2qaPcQZiNpRwFfZ68ETCygRBRnqtUwR7LvEGyV4xzSgPDaoEcHVJ5J",
  "key11": "4eiyq4SywNXUA653YPkFMezpGFSjXWdhzw4FF61GWubyTHWt2zAXPNvQZ8QqE5w6n1eZMS88q31MrRiRwvyUvSfF",
  "key12": "3V4p2aTpK3QRUgEjqpnVfm6QdcnrBy8aUeEs9KbBoYfnZVUb2XR87pRLfweJVESeo6Nn8ag6XTDz6tr9FNn5rpVB",
  "key13": "4SR7Fg3c5WgkadsGmYWKb3qXbkDDgvvd7Vk4eQHpvR9qwPMcbat4xJSAH5hUEe6UQUAjfaBZQLUG9V5tH7EMbPdd",
  "key14": "2fhRHKS8Kn466kzYdv26Qfc1Cm1qgCvQr2tdrksbF6hpf5bzvxMY479EJLsNcWg4yYVmQNGCh5wDiexKHMjKWnXs",
  "key15": "474Jna7QXG5QdRCvmZbJYnMi5MJtnXWieW9kME3WT1j5XAGidAMKGtfxGbf5dRoFpLcyncCky8sHAKgCwGrjs8YQ",
  "key16": "2SKifBSh9SbpGFayWEm5Pm9xSKZUkTvzNXnRZ4rLPFL1EwBy34ikcJ13LZYmkKq8vGF12iYEG6UVSSwoi2D7WC72",
  "key17": "3arBdrFTH5UCNsaJHeDxGqufsnXNSjTsXNPNoyseANV6SjErDhtaLH1mwQ25SQhRQGHgi1gwJupX25dj38k9ARfv",
  "key18": "5ZCtJnPn4P9D9GCBHNWuAT8hL18gBWi8VDHBPxhFL4da9fJ7xn8u5NtNBXZSQTGqqLoTjWPN8nitkfcpjo5d9VVE",
  "key19": "5hY9dy7EHPbBJo2TfmSdR9p2DfrijmL3PN4Zxt64EpVeuibDfGouVUuLXYALqQN7BJLTK24GvE3dk8HnBvj95bfK",
  "key20": "46JFbErvX7aEcw1PNGeQhjiq2m4pqjtEiVNhRhGk7B1iGDmi1AtZ9RLmdWJvxqhLdHisjuNWK7QB8CExSpRpG6PR",
  "key21": "25d1Gdr8gK9gGciXgqqrZk5237Cr8KWWmqfxCyr8qdXEA1DjMCNkbnNATptFkges4EycmMrSGeb3dLajFKr9R5j2",
  "key22": "mfPtiSVMMhtMwka3ZJkFuyf98CUHWWCAAMS79AmF1w95RSmmh8xeu8wBhf9sbYdUbcXtdAEyRbZHPFq3aTYtako",
  "key23": "5JywEZpohJZGub3ygwwpXb3zppjqxt61hv8S7MJY7e6mYV6sK65PkkqdtSw4ipxSQ1wzpcJtFzCV4yQRB4w48ihv",
  "key24": "3WbtgUU5B9G5z1N94qJkcBSNaB6jVopvDMgevTj3SjMFBtov2bQkvPRkHuTR59YnGM4GFTbFPr99esf3m8muGajH",
  "key25": "gtk94SLURfmCV3TvWQJ26xGTE6rGjpFDHVH3WugTn9cYCxNZTPN2eG498iQWLLovtb6ACxr14Apv1H2A14cBWJ9",
  "key26": "6nYG2mhDoWi5GNV2sy5Nyzxbogi63sGfjAPsanKTcEKhKWK8jo8a7amUm4kDvXYRdia7qYKfSgAJzu6g4zTpPKV",
  "key27": "4xR3AVtc3eNJ2nrNdem8jf8hVEqVcQLTiHcuXsJV2JpbQ854TaxSFSc4iLpVq1M4QUuXDhgu6Adk1ojUnGtjv3KL",
  "key28": "5AB2vNw2JdtGYSvJ4m9iHK7JSkmvww1t8aLsUwLm54Ue4bqSxH1d3mu2mEQoMvXVcefN4XWd4n9Umj95Hk3DoyX8"
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
