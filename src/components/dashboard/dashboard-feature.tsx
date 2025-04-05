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
    "34FdHSTGZbnfabqMrSLAKUxe65xGFhU641m86LNTazgGuCWuMRxX8Np4gt5AFneMNTmXCzin8cBXhRTjm9CKCFzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gE24qMmo2fthkCcid1Rd5VCZmANkWfmD3i9TSHxL7KGi22DeaKFst59j1E3rhBKp2N9ZLyHDLtgGhiLHUudxT1P",
  "key1": "4kWMPyaryZEC8VC9qBYczSsyayMW1Y1oaiVziUWt6XM1rDkJkwLYmdywPnPVWr8Z3PqXztpWCtTKMJ7zTgc7CFjy",
  "key2": "5CPJqWNqLbj3USk2WG5dCJHxoWXFkKMUrcq6ZMUankMZTChESQEM6yJMxcBF3QJoJJjptVE32jGESbhBSDmrGGvm",
  "key3": "2A4wwN1F2YzQXX183wUpFoRJHgueNHK49CDSL3M95hwwKxLNFAbeHWghvUKJcoit78jtYNDM3bKRS3n5DwAvXzJq",
  "key4": "3Qdy7CEGD3LyrZ33FVvh19YjEpPW5Mw4uZqZ8dvcxEWaXyp7XvWkhMZEh2dX5X7Yq4qJcomhj17zGPDqep4wbU7P",
  "key5": "3jeU1aNg9fE3EoCRWpPGYpS53Di1kkUDo5VDP4qpPHEE6qyQPvofsTkefaNT2vKt9v8D5xzSxy4LYNLbAwzm23Gm",
  "key6": "4CXnp6rJ44cUGNdbChV2K93ChArSDoii2QFm4oFb6NJ6gttG8aQnbBrLCWUJW96cYCSt6YuyYyjCFojDYQoSrWXz",
  "key7": "2Za6brs88KZLifZKt6PpnDKAcfUEEkoziRMbsLDFwqLZaUPYYaFaMa2jPbSWKEVqTNcSaApMWHinvcbwMJnLvCXD",
  "key8": "3r8ZTXesyPwYNcXmQUA1JHZ9jsQUEFskctGPZjvKMiY4DWP3j7wLFNNWUQyU2ubi1wViWCWzh4GWtjbUkLgsBH7o",
  "key9": "2KYNZi4avrjnekNhMzDCwfFwpeGWy95NjEJ1rSK6X3WiE6tNH7oMFyoKrVfNdCrKM8ucnJ9vYkqKg5ruQVmbCLKw",
  "key10": "3wCiTaR3Kvmqt9jfnCjaLaZZPu9QtzHtrnEXDdK3a1GRiYvGCPzwujntFJNJFHsXZfcEYKjuPzKbHZu1fSbvxFg5",
  "key11": "X8ygrVSmmNs9x1vJvcgJYA5M9RnitJm4jMGuyWUPsxGuBLxfXRfKziAeHokSKVRmiwfNPs5bFyPwRBLRLqJmLsg",
  "key12": "67C1XRNZAXp3DRBatvK7LL5jftDAReMhyPSqAdtaqAxG3rdtCGptAfe7uKGyCEgsPtyVXREapZ71kS9snyMbzwDz",
  "key13": "5fdtowN4WDxTpQox1tCBRtTnYpnU924gyDqucxiCthzR3hKdDrFyuCxVz21vJPpyPZG99LMTfQt26rUHH25cH7y1",
  "key14": "4Vtapjj2gDf518cmpAKWntwZVVnp3YGfEtPH4jD2xF4xsAzQe4MGxKiNNAmydTpAucLavGvt5WD1grUsAMZoEup2",
  "key15": "m2N6GL7fdxhFCiRFZNHZCpcNFQKVcUqYyTm6PvMb5z9sTT8jYsrD9pmamEzrw8NNr11E7WknWGgwc3AASB8bxQB",
  "key16": "4pJVqwVuuhHGyyvjsqE6ataqAE8tAGsb518wfVuVUee88mSN7M13qL6ptoLjCiJzLTBzT9vimPgSnyFtM5QTQdf2",
  "key17": "48AqKtDYeu4HhzV5U2f5UGfDCtZBS6MTQNmPrCzGWuvxGVBYub51TPgtwaeJUF7LY7LXhzBforjKp9PKjH7wYJrs",
  "key18": "2ffSoeggGrp6bncnr1zmh1RfjUb1P56voJvyEXzepuoKNVjmNmFGGgN1PEuozq86PDEbsoReYTLE79Bg5cJJYpHL",
  "key19": "jRYKkjysGk6D7wU7wqfcU2pTB63jkAFT5xHfTbjRYP7QZwcgtomD9kLd7MVuBmKfjYAiRFWZNd5xF2GRE7hBa6K",
  "key20": "5fxNFea9TjxGNEBdGJaudTgj6TPEWZBo1mBg3UmTSF56zyEQg6f9Zky8YkxTvbCCbWkhjrwZvcKgMnL3rZvg1pRz",
  "key21": "3Gyo2oo4ZKUZwLcUEaqh6aniZ6UXGwuBSTC2UiNKLbmFHZhZ5sVXskXw84sQASbfBFgRg42uNipz1DoQkvhThESX",
  "key22": "TcuFAXoeaiiVFNAb2MFb8EY5q4cbjb6JqvWboHLhBZcCP3QYxmnpY4tFWgia4aJbC5wpqY4ZuThwToKFqLZVcjz",
  "key23": "65ZEULcfmKPT3ejKgmb4BziyRDH9KHDBnJjWuprGNxdzyZQXF12mW5uuXyYmwFKZscPDUSuM9StrdDLHXZH8Rxyj",
  "key24": "5bBLiuBqrg4AaNMfBdCASmAqv8NvpQmaRV6ojHvkGcSEbNRxHetamJhS4sTBYZByqyQqvmRAGk4FSpitCFUYsjWp",
  "key25": "5FmAEWdv7FAsF2g5tzcmYL4Xec2nr25kMpfrFUyAjWhkBGjjNxqZvnH7fkNENJT5KdtKkUD5ZQQG2VUvUbP5WjkM",
  "key26": "4UbpgayBCrY78gQiiQgyjFNpt4t5KQ5ChwFBV5o99KvTJ79QP6vZ5qvVkQiHFJj5hamDHeJpNa8uFPj2cCpVGTuB"
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
