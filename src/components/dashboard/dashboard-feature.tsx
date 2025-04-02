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
    "5M6fBehAvkyHymPmXvwMsTKqZNGtYta3JWdUsGA9Jc7cxZh2uWHVrpCyYC35ceA9gSEwevAx5WaBHjL1aS5izSbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWaAQDXKhCP49P4TNNTdg5jiyiHfGvYEkPqZoFxkJ3KiHRgVrFnXi9ivPK7cJTbhUXVYPU8Ldj67wRTfD6Nh1kb",
  "key1": "2sLJCrLMkLqguZXJYC71ok5Q1rVu5fGsa36MtKhLW3p29UMd2yArVd8tj9kio6LsVxmWavFNxEeXEM1xXiNDHHJG",
  "key2": "4yWUYoi4AzkDwpxMT82EC3m8vEabSzAo671CWNsFy7TcvJHF2Zs5CVGDTgiAcKeNghFZcUYP5bMAjJpTGbhoQ6w9",
  "key3": "5fVzfvC2T8AJjdaTSCeU6y7X3THUX7w8Rvz2GEEBQP5PV5UVPfr7VL6nLJq63it2J2XzkJ5skLNJ3kQDppb6Y8oU",
  "key4": "4G3ncTGC7bfZ2rNSMk3KjawVKEschEdm689xJga28M9p8FcePAe8AUfX5rW8ucRxyrDvjdQpn3BAqqePLYxTqaUn",
  "key5": "2VDZT8a3p8zthne1JVWg5ZFD4H8Y86gKKaumgtAUGkaELvXpr4wrVtHWudJHKRBXqscmLLCN7S3NtLmcd3khazvS",
  "key6": "Usf7CDrvF5eXyzmL8CsC167CQSNAqKa62wDtn7F6mknS7XmkXcV8LU23D7K16Nf5n58YuNF9FRUaaDWD9PB7RBZ",
  "key7": "5GWY9mdQ9Waw5pNFUHNXJhtQfUQJkiQ6E9UBhzM1ZAnfYCaBxnE4dt7JYwu47wnERMaZo7bjUyiDFjDyk7c2FyKo",
  "key8": "2XrVLQhN8YHY1oGSzjoxSBWrVLzHtoznX7BvMiNCNANZW6ha11gmRYyMooxqCYUUTSVLSMLukg5Q4RMnrV3VbLLf",
  "key9": "3SVEprNzvodbiRqMxbk4W6D5VS4FgUdjhCKKv8ukUa7AoJh4wgEyeUGzrG1CXrRwrtCyDkNc3Xq1xu7ixRTaurPm",
  "key10": "P6JTWmLvAKuyZoAW8yzCMB2msfiBZPZqr2KCfQbSH95NNH8h6e6wQTshF4vmD6jd1KyPVjACRnkNLEADT6365k6",
  "key11": "5jeAUwqq3tM9FW977AsWBLS11v4cJ8F2mR9Db5yP1C2Kzib3baTQLfToqt5JD3ak7fMztawMjKaRCefyuUKnJqtP",
  "key12": "4gCdxPE2uQgo4t7vGE7WVnHkeKAWPQxHyKpzd2EnHEeqrsxUsaVtq1ZPLq9brUMb771AUtS3TPjcdFqscreMpMbo",
  "key13": "fXXgcjC3G8tVWPxmtN3PAtdeW74zUUxnkM4zDPBGJBU3am91L1F5uK874ysYssNVKfXRhy89thQ1GBvLtraUirR",
  "key14": "3rz25o9KXP8uKD77QceJHCa3RbnukyURpyyF6BnZiqd9hoYp7HFBkvZ8GBY1v2s8WkFU8PvFkq91uAZg6AkoxnYa",
  "key15": "4MKZgU9fu4T2efUhrXYzq1KUBnRdVka3KKqx955WBUAtb4sMhN4yozYQbqZMq6Eyq3teodK2PVbFCGgkzgJzZSo3",
  "key16": "rGdx7JiqVWrDRLBrwoFZC1SzPMj4ZixiJKL78UxQQ8c3NS9i6b83nk9EByUaoccxqNES87kQcTxvSvkNvzeSuPq",
  "key17": "4od4vTX4aJNvGXcqLigyKHK2fZPaKfTQTUAB9TNJyX8U5t1Uqr9umJdgZ2Cu8Bvp8fHmUVEBd6Hjax6eRgctKa6o",
  "key18": "4ZZszKAKhxM3Q7B9JC8Q8J5ChndFM2MBxPivtbW6a64A5yDrkbgdpVd1nDfjayAdSbLZs37VGnpRVpXzynP8p4DA",
  "key19": "4aGKvJ9xWgwsn1L5NdkvaeZFUSfuXPcXDpyhKwu4k6yrTXdAPtSHA3i3AuM4xCfUDTL1R2yYe5GDoRagcBSwmEdj",
  "key20": "3Ygr49NTY2usdZ7uFKrmvzZnKEniNabYDkzbyK9nQPxTaLYyJK5Dsbo3M46dBmGRmZDvdia6WvuRKBdMRvcgY3ry",
  "key21": "21mcDsuuyrNyEEu9cM4gEUtde9oJNfvxGjkW8PTq64d6r7c959DXjB1gC9Ch8JiiYVkXvpSf8qmYJSy41bVkeuRF",
  "key22": "2pz8d972zQkUrV1Q1FexP72bDeN8zKNnSi4Rcf5bG4Bj8pY4Yuu1ZPxCaTmh6DqZm7keQJwdftadfBjEdsahCuZw",
  "key23": "4Yx2FT5qV6sBdefWEnZd5S9wTiYnbf5ooudVsx79xFTbRm4Y1MnTPg4mW3naourzHcby2F7jiZcRirv6U4FBgcBF",
  "key24": "UtCiytYHfv9YWoHDGLMUNoijgbe3Q2QpFf3rmAdCQzoVXekMyiFANwYADdh9F5cWk3o8rsDeEyaBm7ms9PxAfuU",
  "key25": "XLBEbeN89oVgqLEcNEmjrggeFEijZxM8N8y4yirSefhEnabjDbZZwqYbm2HU74evfapNjQMipMozJFY9idLymMb",
  "key26": "3X7rPMZacr37ktCzWQySJjQN8oLWLJqu4jW5aB7jH2ibXDi9i6QxHWQkWbC9bWPYVnTRTZjDk2fAd3THHhHweMT5",
  "key27": "2wo45zhtJLGHmNCrJ69kJKBXXhT4YxcMt5yLGQAzv7tQxYzu9MFuwa5jczumjer8nAHLaAhdiUKDpAdiu7sE7uck",
  "key28": "21e9CxAjvHEUkW5qs3Thgsh9Zm6bb7MtndJAWES3DnHvg9GRCc1PrRhaibYod7yCt8Pj6UNVwYMCeKYRtTyss1AT",
  "key29": "5X8KJzv4mKjHQdLTysLJrjgrGptoMyeKK1GDsvnzRi5VdYvHGG2Yh5MzeKEmJeDH2rRD57HgefN5evduhhFQijSL",
  "key30": "5BH9tSaiMSUDfzPkK2twCL4tgJqFjGYMPciub2T185MEowhAJ5BUZTv2D5ErtAaRxHc5LZix82hpLnXx7RtmHTp9",
  "key31": "54RKftmPp6VJYDUCfjjjJdP6cXK4ZG8wXvssfuoqWCMyqjWaUdqsz4qEUzHvRuhYbZhbhe5Rp3ypSDAsC3wYFY25",
  "key32": "61iYsdaZC1wuFHd3R5EWHGVDU2CABLAAh84cqJNemjP8r433tJV1mbrHsihSKX27srm6eapaiRYHY9H23sADpbYP",
  "key33": "RGRYFnHCQyeuJNLoEXVjpQYe65dS3TKUh22eqKHkvr2JAhR6t7teZNp3s32cQBWvLVwoBAJXNEKLhEVBy8DtfKr",
  "key34": "54WQyfEqnxpzknBtUuVtAYxFnpqnrULMMBmVPvbe6jmAR9Wh8BrtJk5eVevw7GHH6mmRtn9LE8rXeGouzCff7gPm",
  "key35": "3HGokoURWsBGECBHNzkpnVNUVLPbq5Gvz4Z587WCff2gKRFP1BcpmixJe6X4PYEkyRyS3eUR6Vzkd6hwTzqj8Pgv",
  "key36": "2ZrBJnHZyL6UbmZuPhjajDYCqkQVLWg71yjj7BEpfiNzYRtjg8XJZAKesngnsdjbadrH578wXrhQ1FJajXpfs3cW",
  "key37": "2DpUQ5Cn7YF8vVd3LAihpb3VR4qiUy7pCeu7CPqE33M6QZGDo6KG5UaYtn5aDiNYcyRjjW7YjAAAG8DraoGL4Cnj",
  "key38": "5YEN2qwfDzccSycigE8Z9gkgdpbwpz9ZD8rtsLnveF4aFNJ2vapiFK1EBsijhDxnGwgf55tHo7YReciZxtdNm7RS"
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
