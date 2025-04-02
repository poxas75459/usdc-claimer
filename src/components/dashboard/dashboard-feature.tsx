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
    "4eatdULQnPgfHHAwYFApgrSSwTtWmDkXYkG15R37vhXM7dFzLNRBPHnGQDCgUvFjjzcJk7FgRoDVXXnbWMtGd88z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPyy9wtmg34un6B2GgFX8V4iHe7b8gmxTndksvL1tJs95MoYGd6y2qjSxWn24UvXe6Kz5bNUMx8ta5aHB1MrX5t",
  "key1": "5n48Q8TidgLZsbrxrTaznFVUBHANyP8dqKkeJcWRD8wUL37GVn1vyoSo4o4SAc7P5YjvWuw9tT9tPDTBSTfQWpTC",
  "key2": "49b18t3eLyG2zUSh5CNGRzzkycX4R4Ym543YBnWCe4e7ZSkN1tMmP1GfoJEYAzGbKpRLPMQJzP7mP4wh4sop1dko",
  "key3": "5LgupkUyU9ZgnWn1b3e8dVukDkBLCHCxPTQNExzepS6xoLcy5ggPCkxzmK8wy3627bodA4k2y9QrBh9KemSeUpzc",
  "key4": "5DcWCkyPWE53pNypjp6aNC7A2t3gK8thZ7JB1b2gRopRGbv1ryQotjRtGa9fr6TzGejXrSt4b7XQau4tmPeM8Qvv",
  "key5": "5TPZbRrZryLZ3ZwDpy2LCVt1StphaD31GLWx5x8JJCvJD6NSVck6sCz5c1Vy2Gsf2EWfEVGreYG89EXwWGNAZwij",
  "key6": "5K73Ze4PmTvaN27jGQp93BmU6DxLb7vRwRv9MZ6JLr4Th7HPXrKUQqh7ju4h5w9TwpV2ohBvQN2u7FA3B1PWh1pp",
  "key7": "3L88yNgWUNS3C6Wv1E1XmkFGh7aDgwFk7wKdSaVfZSRxws5ZaLasozTkzeqChrS1fDEfntKvpzeReZgnJQY6Bxx8",
  "key8": "3nHtGMV3B1LeoH81ejXFPvLsruyki84Dz2ZWZcsuoYZHjUTFXUo9gpxJ9WKFVUodcL8A25P9CXkAfGZGaX8BUQUj",
  "key9": "3My6CvZSFRVya6GrUpXg8zCFu66UKuMSu4wspDZZopYbMSEqoAGD3CNSC19G2ctYeCzE5hrtzxLEj6SN3D9YwD3Z",
  "key10": "3tM6ThuE3sVrowaNnXDRv5URQuVWo8mwmw4gLz3iSTDNsbgagvGRVwSm1CHYzWvkYnnEfeupCTY7CDJaSXzGQTAV",
  "key11": "3pPx9ui9e5X4vSC35v5r5cw781XaNvxe2Mdh2V1v5g4ZYowZduV82LJPs9VuCz1KUq8qGqWhTtNV88orxQNZRrZw",
  "key12": "4sL3UxL8g71WSMALfRJyPZfzL1KUbQt1J4yqZUuy7B5PouQUxffrxh9eEXon2iJiJXDjjobrN1K4KUPyHb1SVgGp",
  "key13": "5Mpq6Lt9pZECctnzCN3dz9qMeyWDnyDbVqLjxFrncEj92QYjDSeXBEztbD23o8phxxDas1FFdAMvjNNWZAr3jcR4",
  "key14": "3SmejevZm4StZ7MSFYtPeW2ymw2ATerp25NiDsJmqQDifRejDpBm8TvYn2PiKjiTGyk9Ug7NyCMkUWSuDqwGSTBJ",
  "key15": "4cP4d1tw5isYYrVnqFNpeWQMwr1ZHXtJYSQQaT3PTaTRdn1nibKUPtJcpzPCvUcYXF9f8p7xGHsGD7cWdnzqM2qS",
  "key16": "5WEiVBtX14yb58BJ8Z6NsziV5Z4D4ygCoeHw7BQB5wNzpWwF7F8jBxtAKDxf9UgzixFqJqccbZWQC9i5BKxii8Ha",
  "key17": "5ozCRYTVdrW5m7F674Zh34bzVmRBXTX2cxAmvqfMsXguuNfUhVXX2jaR4nUaZn1ECQWaK8h5mae3zEfxxFk2JESR",
  "key18": "33nbXsgdemjTp58YVvz5mJFzD5KkdazqHCdSRby61r5CKeQAyeYJYvEPYVqWrcCaztrHbLXzeddYASEr2M9iNfmy",
  "key19": "2LqwRmQDXZAg2w7nfnoQ3hEzXNvMrHAJ7mfoVy3GUEiUzKE3zM4ZhW3a64Y1prUT9fFUsbCGo4MSMyCM8aRDhp2M",
  "key20": "3BdomcwGdxiBG1ABLkWpx5KT6XeofxEbitvT8qEo53teVTcURZhMPkYc1AEeRCCXxriQvWi7MeUz6btfuLjk7q7P",
  "key21": "3ccMnHCjFAvQwnRVNk46m9njAXutcAtnJf4S8ajBGbJCrNJw1hSprZaMeGErcyVZhpenxuW4j7Cxb4doz7pFUCPg",
  "key22": "54Bk9t2RhcqL42heUuCLJ5umQRHsfzQb2fiU8JGPhX12EgLCbKrmqrZUhobtVccPCy9FFhDT2TCJz9Zxmm9Aczk7",
  "key23": "2VWZuB1WhwpD1kiJNyiqXBxcRitpuAKenVaTvG9JwMSJ2PeJyxFYWMrQ98zm3RZEwqGNz4GE7VUiEJ2rKU2YkeZP",
  "key24": "2CqWthkJzNybzQZWzsL9sWR89TYxDZCf5U7xyj1tnQdwhMq6bbo3sPn8EEE9RVMN7WnSQpk65KwReJVwiqKMEXkV",
  "key25": "59GVB4SnFKGmrh6HvosusZBs8PHN98buNxjZbHdTkKsf6m5pGuUg3ovcqG6CT4iohPgQNDwbn3BYbU4kzFpnienr",
  "key26": "4qfBBB8hjK37xyc2y83bL2onu3Wwm39WVi8vAga2sy1WzNP3mRhcwDMewEDXxvnjvb6KMnxbcDJ7e77GwzzVa67A",
  "key27": "3MFaMDuVneutVojH4GepG651oJMk78cC6BoRCCDYU7NPG4iLUDj9xTchPYbHNR48FaYwZjeoWNzkwC6Ac7Wujxcf",
  "key28": "272ANUYyEXYz4Ta2EGW23CV4unbLC6An21Jpbc8QsAPXempaHv2eUoXhjLabiAqEZhUyKNRYfALqnevd4sUXunbd",
  "key29": "2TpfNsac6PePbG4Gm5xkCrKwmoHyPNiFjkPtD7AdK21GEHbaXK57hC3DJpoV2saPUiHfb1fHfQMrqTCd9Hc43PCW",
  "key30": "3bJ8k4rphUKpXjEQxJp9KbZvDbwmYwBQweyx8rNeMXcqn4zSQdnKDbwTKswSXLJtbkPnjhZZFhGPAmFBRKbw78DF",
  "key31": "2mN8Qw8btsuELQr9DMCCGUitRNKby2EdkLdWteTR4knr34MzCgybdbGHd4EZV8dH9hGb8B6qtgxmVQVAKtBN7QAt",
  "key32": "4P3DXbzQArd3EnLAnaN19K86YwoTogNPcPwLSgmMwmTN7TpAHkKXVX8wQ6Rj7CCqXjKz93bF898Pw6s8pdEanWKM",
  "key33": "5GayAWzTwndWhDe6fgXPvgELWU4dCawcLCvhC7oYwgakj7fsVGN5rJUfZL6XEpRvPnxAmPEK3RX59phEpcSvS7mF",
  "key34": "5bWNwDRgmGiVL4Jj7JMCfhUDCkoFEWNmoL2mLwEPaGMZ1eFLcaFf6nRnRkia66KeqmGRn1rNUuW8ApKoYsPzojMK",
  "key35": "3ETLpZ3Wn5NAm9wqzmnJCV5fZkFLNYXuhcy5BwMxAoG3xNxAaaDswCRcpiZqUPRp65SVokG2AuxvoZMeeNmXGEir",
  "key36": "4WfyKueA3Q2SRuC7YEkqcG8ohvLzqZSfkCemTQy1Et2JVZzNujQk1u9UbSoa8144w57kFffxc7or6h91qDWTQCrZ",
  "key37": "5kAaEfHhSWp57fgMe2mDyg2QbwYS8Bqj6fUtxDxmiJpSbamDGM8vtpLLCr5CTkfDXeTX8i7UhSZ8Bdz3cFverExE"
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
