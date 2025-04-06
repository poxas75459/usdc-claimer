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
    "34fD5pzBHTSgR2gMbD7udVWE5nvvJX1ztLZXZnu5S7szPXonnqrFctnX2SBXTZDDbMPMGL8WU2BAsEUJP4Tfh3nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZavGYj7HNjmFajSSS94psifEYh8oEGX8RjSXcZR4ixwgn75YVbKdRMJbgVTvTKRJrAYr7nqg9g8HVeJEagWnGo",
  "key1": "4EBC8RXQcaPomtfiHGaPaVBFJBhaWK2B1HhV1sRshuyh5DTtYNMhUXGTsifNtpqLdVnBjhX6uDhFzucZtRJWuaiG",
  "key2": "3bzuz1YLw4w7rEekKgj1ij3HXRwGJS5yNouy7wkv6V6jvaW8q3ZK3RzB2WiGLbrKAyUT65ZBSjvgzfKZHbUcNFUR",
  "key3": "4CF8PE4rX3XvpSPbkNS9ZkQXw4bHuisn4wCBCG1WtzugwB52ByNK8xBxVKgRTRpvvSxqE4BsSmHwjrV9aKL96idu",
  "key4": "4AF9byH4ET6UGkM3YT2x4j3djYYxAXvGWEzkhpVcN3L33RSyiM7WBZcc1qvrh4UZHL8TheGFzKukTbaXJeLK84fm",
  "key5": "fTMMrNCt6mTNPbwrMgv9hEmz3J4Apm9SjiXwc9CBJTZdbs9MYnPHUQSPRsGNygN6ukJzD15h3W3wSrbBDuViNzP",
  "key6": "2hoaGMPy9FEQCbX9PcK7DAnWQPYMFkVv6mW19s2r3YbeMXA5nJ1QQ7DuTnDrgzNDG5hR1aks5PwMDhibT9FDN3A5",
  "key7": "2ogTQ8MB3VWBnfrjwJGdbZ6MHCwY7sZH5J6eMJvqfBC5NN9eLwZQVsi73Lz4YPq1jG54DnydTyJYm35EugiVKxiq",
  "key8": "3XEjpmCqMxHvr2Hq1Kboi4FNKfUj2dtZpB8HCWXi2cupY9cPhcWNXZU3T6ruNko1pAjLh3ZikLrKtjP6DpBwTbH7",
  "key9": "52dL4sGNjxhDbxnEvu5QFjvFENc8PNyhAPRQLHbJvHBT66JBdURjSU32aYeDaTd4VQfTnDYkTU8RhndFxjjXUjMZ",
  "key10": "3eL7Zok1Z56yxzx9P2BJssETMThCDjemWpimHcXXDfacVU2Ut2QHwPLJwMwxrUGFM9n6YZQ1SNxBzDJpcxmBrMgg",
  "key11": "5qqGkyT5DmR44NeVFX5Nu2Yyu9hVivWzFgyVKU3oL96DYz2gELtmMsqxhBMFfU6u7RJWLp2ktTafzBSsUmLEromY",
  "key12": "cpPkHqwtPXdL4oHJysGUiUSrHFbLRMjWLQwuB63GVrKxyqZAMNvKTxzYjD9xZNaT8j2Mj1ZvLkc6UuxfFA5H4oC",
  "key13": "57RN9XZwNoYqdytWvrdS9q888jEzDgf6YJii9yrdBXQtCoCrfppb6DbwcjpHuyc5hqzKQvx7a7GDro5scmaeNHtE",
  "key14": "FRB9CBtbUNPVyM2QFxZ9WPkHh2S6PosXwk83FaGcYCDbWvthDKYGq8WjcE8UMx8N4furBZcQ2nAe8tyCZ1LgkpW",
  "key15": "5CD5hcY1EvC3YJxNX2wScoMDMcFbBYNFMjJPdgSKBDAvFyMjxrnzWmFKBG6cY4VuaAyrXHvvS8iH5v55Hd4we4VK",
  "key16": "29j2KTYWUPycm3HWGB2RiUzehaknTLE2NXCgsriQLgpWC63dEv176vw2Ek92wcCmxLpKStD32uv5wth6qEdJGngv",
  "key17": "3px5EvvPLDny4A9Ft1ufq7Yn6SQ4ZGyXXnygGhw8miB5LYFtAnkxnLfeFYKaeXgKV9KMU9kTV7ECH9yLzwa59zmx",
  "key18": "64Wfu7hKBSfZvNcBFTEzkD5m8UBjdiwJBnHD7mG5R6ztoeNGkF62AGA9K9tDRo21YjdoSpzMGuyFSfFWNyu744nD",
  "key19": "47CkTxihaXE7FkjNZmpgKYC99JeK3tH5RMmdcL1pEL8gmq9zrBjnGDG6RoBix1SntoVhapsToTGn5RvPT4Wij3BA",
  "key20": "2yMS5SsdxrKoomb7RGJjiGX2cBQkepmjLkWTXm7RkRTe1zeEXUzo3Cv8j6MJPVt9JgdjZnCFBarHEyaeVWrGaFid",
  "key21": "4s7zPMg3oBZJt3pxmfSarrXZzZZAakdLRN1o94bk3cASsWorqSRJRd2g4KcPy2nmz5WeaHmhaJ6c2vaVk6J4ZVQr",
  "key22": "2DGVRr8yo4Ju46TTG2S3bxcXQaFDfbmM3NMMJSbNhe3GjYxhbZmz6WhUmsfgErkiHL66aoXcGXUQhVcMXvXFDDDf",
  "key23": "3vjmRxVW3HC3JR6HLpNEj6unf44Ms1iLv2W5gVgLDr7LeGrJxbSrRR1bUjeiWytVupuqrmgwCTzdab6B9DPEr8Mn",
  "key24": "2Lo5jQiiZr94TaMUmVVzqshG5Kc73SU9mamkXtqodbr82Fg1qeCmPPiuXYSqpEvA8iAQ7MS8W3LmtPfPiEenKQrC",
  "key25": "gnDdXnYv5Fr5FPRC6TdtKUAb1Qsmq5wma54NNj7XGrhqtPbs81591SMejz7RpsBYzq5zKe75fBp9t8PoWi1RNnb",
  "key26": "2FZuxr4cgzYnLyB19ixMbashjoh1s4VGuWeR3dGJsM4D7EnzxxxJjtmrhS1ieFgjVGHoutxvXnVH2SFV6hCf3wri",
  "key27": "2917iCvTCQoZrd9BsAcB9QDYu64Pf3vB1Uky9e5EJouBjJpGjHinxLQei7p6eBMunv9jehYkVSie8nBag3bNvhyB",
  "key28": "452ZLa1hzg1HwTyu7o8ogRtTRKovFnwAtz1CxrDSjBqK2WUrpy9u9jrNNWB8apa29QYrRd4bfYizwsPAC8N4oumg",
  "key29": "237kyZ6nzzZNB6n9qbez8xPeD5uRvHceFw9dHe9pC9ULe3wZbNTQkYaY3haVB47QGFBcZ5eTMKB8HUYpimb4jiKT",
  "key30": "467nNxVue1fVqDhzhssGn9o4PXFjLch4nkutCiSbLoPPjf9VhgS8cnAXJrC5MHLdwLU9uAhxzfwcXNCZEKWUoMZd",
  "key31": "5emDxvEZuiVaSxnvEGisXaehgMmUzsjUYYNrkdnyB7Hm3PhbYMPbZMQpEFgjMGzZBLgcmatZi8Spt4ZtrhuDnRs2",
  "key32": "3K1vfhztvHnCV9Xajb9ec6YvXziP1CTh5BXmL8Mj4ieaekZiwJeT2E8rGX5M8BQgBS7mbDAs81j3Jdwr78SuCacA",
  "key33": "36FhD41VxSHMq93APDpnXFQAWPWohWetfVTJr7o6bGkXTyeGfS445KCGVtzukpmYZd9KPtP4GHLYufyi1RaHCHeg",
  "key34": "3bCfKwrNnw8CaDPrgZsFbaTcKrvR4dk8yHof7RHMBZHmJ8Gznbw8Racs39xSjiKbtxr2siyeTQyXAZCJfNhdMvw2",
  "key35": "35unPokYjg68XJjfP4n5RMyh4q22akRp91E3yeYdDQh9HrsiGRaNWKbMP3emsrNwTj4JjqFPRCN3dZLZvLD9gKWk",
  "key36": "4ZQcVVSjYzVMnUVzeF8zHHv24hJHoxvhBYRbqJ7358mZnuvnZqDHxYnkqmtc33oDjxYZnc3ZJBLJHhvEw7bGPryp"
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
