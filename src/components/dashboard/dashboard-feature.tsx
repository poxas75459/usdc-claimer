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
    "3ZCMEhGNXUxKqBrKU7aBW1A6KBx59gS4XFkYUNyfuvTqw9JCfXi5rZs32PKaQCh4437Nb4y3ccfF65ktKzCppYyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJoP6qp8c6KSfkvA3D4KxAYWvaLaJMDS1teYtKYk6ozE3EnmNM1M2VMpu6bGYgqMmZJcL2RXPRZdS4t5Ms29ynK",
  "key1": "3F4bbAThqf9yruLgc21eZPSw5FVRDNQGaz9mb7mu51g7rSawLravRsyBu6cU75anpW1R7wJJEy9iar3rDHzgSdhS",
  "key2": "4LVXDYFtoFhuVAN7yMQhCQZArXE2G8sFDZMUEaeFGMmJzNhFXEecQaEHwPNHz9fL2uYWLSHfJg2ogUm8kHwVCe6z",
  "key3": "4n4SBVaBYR7cE6YoZ1K5i7qAx8EtKpWcS6uSud44FoEGqMi8zeoRGKGFbHs7xrMwfc7rqFKuJ4ufU9Yy8hZQfucS",
  "key4": "4JwfsiMRLY8ZwKnx2FwAumMXEvY5yhqtd8AM2Xr213DEa21z1cjKqN782VGrkRPyFvFuBLAihzVNBhUiRbzDQ9Ep",
  "key5": "5CYP4pcNZH8aa8WPijLdhaCL6e6JgzY474RfDoEp8GVuXcJvuFwFTZAow5wB59uNBHaYH6G1fs7h3GPk7ur7dkcD",
  "key6": "4X934BhKWpb5ptHGWvapXiZbntmJYt12PT8XCFKEnYJMu3vLvMm8EtqWA6UMzRh6vKD4wwgH4XSaZ8UCvnCEXSvD",
  "key7": "4XZMcMXHjhfsnYLSij68fEKm1mjhmLzrXNsZmPDPJepxemkYAoMctmdPgTcNPJdkLFwtY2jWg3DgH9UuhP8Jfszd",
  "key8": "3sr72278y21CUEf2F8NaQrmiY4dtQLbMdkxcRwd8XbhQBHcpJEMJ8rQLPG34N6nXic85RWJHHbY7ajmTK5zuSfJZ",
  "key9": "436djX6M5ZA5JLtXRNTDNsJj85g8XmgZHEBdKzTmzrMQyzBh5J2px8Xro2NAVxrwfRQV3yyc3EGxVwpnkiVwjWFh",
  "key10": "BhdCey7eq3saS1bkYqBHnZMW12j4uS5KPWjJCwNRak3MH7Kr6E96btpiyYVfMko1ZfLgcPmjh9U2BvzhTFtEhpV",
  "key11": "2PxdaDWxiHqQ5NkbkfN1DDB7q47HzmYEYVY64x6YAzEjXn2RZHmKRQ6UmNRQMR7e144ymtzi5rg5wzoNHHTSjpns",
  "key12": "38njB1zTq1vBBrvmoSqfDAiGRMvENor4v59JeC7ZwdVgq3EZGU9x3Bk9TwHZkWoZp6D6fZmcg6nsdN9nXhaCDx2G",
  "key13": "5iY6UKoSRZgCiGJeKvHyJnzEEpcxq2gZEFcCYpVoJk7wdZ2TdydnxQsuMPh3nJJfTPpKvtGtcmmiGyjJBnH3UE7y",
  "key14": "48JWSDMw54pov1UomrYRddoxcFWtJuyfWyQU8v3bfqPXbqXGRgm3pgEHihNJ2TbvzGouKGg7uMUnCtfbVrvNU444",
  "key15": "3NQ6MiRvHWQPbw6JPRNFUtbiRRFXiFT8kirgcApUdnrirSeR9yi4H32FyaspRBBnW6quzupHwxiiDNeyxjwBM6gQ",
  "key16": "3kMc6fvfVJ5oG9wM3CM7riAiutqjBTT3xRQGZcpwE7PcLEMGsseMc6cKSY5Rg8Rra5hzHyQiwRbBheu9ERHVDY6b",
  "key17": "5XnA3nZ2C3d8gVHTkH3fLDaR4RL3tpSEE3rR23vrECCCC41bxszeASnW7UJaE69QrQyjtNxKiSQwwZg2RZvoFMaq",
  "key18": "3TsA6LAZRGS61vHcA9uDzmF78UKoNCbyPA1qxQ7FZ5vBM2C4ZE26QLsTHL2A3kWbuVtCfYPJDoFPKShyPNHYx7BK",
  "key19": "38zcHtuMXcbMxChwTvikotKpLbc82g5bNqYBACkFztqNHP7URMQ7UGP2tiyKwWZEHASJ3QUsceWSgrUUGWoTiLfD",
  "key20": "o7c94ojNosy5QypaYq9tmFdMvmHSfMUqLFJ3Kf8FMUsdgQvr7owN9Jq99r5w4QDA9HdYZstDojn5q8o4GcBSWQn",
  "key21": "2s8RYr3McoWvsad27hE89tTfzAuSSjq66KPpoJ7AfDC7b9otdB5Xn7dsY2L3xGL4Sn8MVeygUJuZfph5rJS7iM8G",
  "key22": "64m2mtXJXdWV4uEi9jgoX7DbWGNxCdYSvyjH4R524bipJ7wP8bDzVcAJc3bk7B6m88iHa1PVpYhma35WSQZ9Hf47",
  "key23": "MpM35L279viedyn8Rv4DceukJbnZ8P4Q8gUeVYnhWezMShVNGjbqN4qh7ZkauhW3XnMMjBJTnyddKQLJDKeiHZc",
  "key24": "3MCXW1hUr3LDCgeBXEjWptZSVinmTaKyn1kXWTSAuvpcWXjq7CtPVizM6sj3GCKXHQaBDkqdECUTgtEVeb8okqFR",
  "key25": "3V6KmANtChm4964arf4Wqf8UtDPF9fQHNswVTpp1EuPwkp6yrCejdbsGF8dxEuzhm5aGF5dTA6AL5dTeypW9kdSf",
  "key26": "LanyhHcuHeJRwdJ9W39XVx1ucdsBjDSTa7fquyaFzcbaBdESMekyDcqvXBvUmntZ16h6YgKW6Z7SLb6zRTgVxQA"
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
