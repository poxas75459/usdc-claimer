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
    "4ZzFurGAWsF71wrG5FXp2piSBry329isuD65hHna98ijdykXPYjCDDj1n4jsNAgicAJEXhGRVWkaxc9mL1PQpfrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52yJnZPT3fUTztTv1QCt2aHFiktLeqvefug5PGCn1kH5NdaJeSKVR2UqrjywXZZum7ViyitKrsym1u3cwuFYHU2U",
  "key1": "5EQAh7VPeRAdjXKmG1mEmqAbte5xu89Rr5THXF1p9RjSKqdWaUyHjfCUGRAh7yfS8SYLsQHrcxJ3xizZhgJPcQh9",
  "key2": "3mqJoZKCjYtXXSJvKQc94HnTi3tdn3neJJxQVVGzPBFNpnj1L9eCKSxSnAPy9ZfikTZpXwotfnTM68yV1RmgURJ3",
  "key3": "4bWqjCvy4TidiNmEH3LPoPSviYJTt2bvMrTyLFyg6vxxLAvJMmuri9ToKJPeEXRGk5F7yXtcxM61pXQ5RPTmHnKS",
  "key4": "BgB5mSXa6Mr3yNSCq1eqEq6kUr5Yem5uiSNNoWRGgnv7U7Epqs8cnZM5tMww6yB8whW6uFzqs3i9EfqykmSo63x",
  "key5": "2r5zqnWJRTkxg5U1p4AE4ST5sZM6wvPXhH812WBbfGufjeDcUE1ZUhLzaCtSKqW3R4Fy8CrNtBtrTvGokrSEv8t",
  "key6": "42AkcKbBpW78jtdeA6Gds9MsHM2bsXg1uDr9GkUMDNLZeQptLYRZPgqdCwV3xyeZcE8TTkRnNWdfhXhPfohEWD5N",
  "key7": "3MQtKSDSzu4Y5tFtLA8zXMXwP9GCGsyvDkuod8HQQHkzT6M4p316CzAP9VYTjRpKnzUvGxaFF4smki8mbT6a85sq",
  "key8": "2y8uKmZpUWEAjvBs1QvuEWyG2KxXJ756wX31k4amv13dDHToZtmyvdu8DZ2s1P5yzowX3QCvCDRE7g89KETLDsvS",
  "key9": "4ZXYPT3z86aCsNKN5NQY6BBp2HMX7MQNp55qzpubdU2waSoikkx5h1zXhCbQ2ah4rSj1nj2XsfYZiqYLcroRGE7K",
  "key10": "57SkwTZ3HzVxaEgwjc5Ec3tNDzpPveWgcrxCXTz5DHn5F2m2QTRgMUQRWYqaK2fKwPy6mde7KttR158Q5jdtrbfE",
  "key11": "NhmVyC3gQwNSJNny6xUT6ugQBSByTmifD5aX8U5WZF83xuy4cEZiJXN41ciK6qA3E2iNDA7iuvJqXhYHufoqQ3F",
  "key12": "5unHzSjNvSsegLka1TYWhv9he8ieUVRreGbk26BwjKBcgiMp51PB3kafquPCe49EQDxXCiid3aET8TWy5euSkwWk",
  "key13": "BoNFFP1vA5eXHf8bcdsiMDcYoYQuKvmtyZRsrH9LwNPDStwmuGZs8co3TrGZHzRTR4CK1vYmXh9RxXkgzWhwibR",
  "key14": "5a4477bA7hLwwrNuw9rK9egLub6xC4tcvLCE18StTPsi5Lupk8hdzuJqyiPdeKtRYDkmHvdaP124tVZu6qGQQdUQ",
  "key15": "4rTL7axuXoCGKigMHqppikNqN3Zy7YJiFhPaKP9dCJp6c6T3W3ZLX2AmpiMZKebpytuAvBYnkodcmHrQakaDSUT",
  "key16": "2cTqKPu363t433QZfVE4i4P3gS6rc6PJkLus7yaGhvvFj3JPcJyjN3ymGZG9Bh57dQLpxoYhUVruVhP4oAb7cRNs",
  "key17": "3ru9RfLyoKDatvYTBzUuM1wsR2ysp4ULYF34sHqv7m7uXAwSb7yy7knaUYdnsBtESdmrBrEzDyEgtt7bPkb1NaQ4",
  "key18": "5X7M9ZEZPADzcxH4cH23eineEgx9V4f5aoKYMXD58o9zYvcntuswWuhaZxwXSDX1NyEmWcvXqyG1fdcAYApxDTUD",
  "key19": "4URQ9Mk9gsBv2gNX9iUDHrDKwfYESA3MUDeJBCbpw7fNanp2UUWzw9QaWyVnFv47TthR6mDWEgsqgJjJYxa3xDzA",
  "key20": "2keaWvnQNN1y2YTwiRAWAVcYKPik7qruQXXHw8wDPMr15b1Z3aDt9r6ZYkTJvWteuUJbwRhJ9kHeaSwMjubrjRyW",
  "key21": "494QSGne3PicAueUPtxq2BdREqPpjr1xgNwfUpZ3QWMrXZtHYdvJ5bb5vnSht8bcZcdZThfeGGSu3c2N93y8nuHx",
  "key22": "3rqpyu5YfBqQWxviATtqzUDHkVH9Fvcp5XRKs8rMS7BvgUHNJ5qiU8ChRHdB9xCN9AgNGkZswT25QKxAVdtg9KsW",
  "key23": "3m5g6jJERRK8sKhMZQZgs1LjgAxpqqSHPGVxfVrXFd3gL3oV4wL6ZHLVQM3bJu4jmCUYEVYhBC2RPJR1EM3saYWg",
  "key24": "3UgBUGzLhHCuoQGrfWTxQGnoRujHQJW2EzfvNqShPfKT9PrvwGx2aUBbYncaS3aqLMrH3wkH2SwkFFb48vfjpg8m",
  "key25": "214anf2hPNKPGFAPBGbifXqz5sxEsDJTGQtAHf3tCA4Nr28pZ85dXaFhrWd75BEnTBJynKdJkxoHdtmjdUtuJUFK",
  "key26": "2kSJ4F68ApYB2dj5iE2xPanfwNwgbnJH9MKGMURTVJqVzvU7EVPp546Gd3T1cyTA53kziDoKJ36H7CiKBGzfnaoB",
  "key27": "21RZtnMPSp9Y41C9PqJ7VpAa77zNjAjkM7EQhwKzx4kmK7WHVUyNWMgn2phRRKHsWztieDVRTNSx5fnXJ2NjCUd2",
  "key28": "274E5946TpYtwgsLArBYD7UoNNwmCM5WMtfs6EbzMkwKQfBhnE1xWsSZ2uZMYSzk1NosLJWhu77eZyb9Re5Eosmt",
  "key29": "2LBw5w6J8RoiWEZGd5EtYHsjp1rPfHzVvM9EhqcthhPfLLVAs6B2kZjHxTatwYQuNQU3cbvKdHWxaEV2AX3u5TiT",
  "key30": "2peupgmwz6HCVgjXCq65eaY6rkS5oYWZkQhF7XTihgh8TEic54azYDqxsKD7LQ7aYhPrhjQqPQKnLqFMFnPnTi7g",
  "key31": "67KeVpvUFaXU5qcpNT7H2Rp1oFymC8dTcqZoLK3rPFgZEdWiREFoxiDYjhadF7dW6NM7VcLTez4rfTcYosCjAwzK",
  "key32": "3vVicJcDjYb7ZhECMgM9NGerNXin3Y2Wsug92DqkozxRhpgetRy58Uy8pd7WDMrzNWF4GKdEwdgEdvaLvrx9qLC3",
  "key33": "4Dk1GS9yiopTXt4cfW2dWNjVi1F3Dtv5cfgszVQYD4nPzCTHmfcZ17yWbPv2m8anCdK2RyACmfxuuAkRMHjh16ch",
  "key34": "fh6sryzWhbjMtyjDjEARAfngFQnRJo8cU3LwfJgz7mz9bB7oLFAaiFbni8kDVskzdG5kAqnrmTGpa595CuF2Kga",
  "key35": "2zokmF7sjqBfdyqfycn581UJCW14mJ6wUDKGHrHND4Rwi4Hx9ae6Lmk8Ygz6aEwX8PbQKYCWS3w2uwYCVALXXFjV",
  "key36": "29NpHBsZys6JBUSJY7ToQuafgCdxxYyneBS51HskiaGyM2ywNc9kQAmGqPd9ofvfN89F9hK4gcsBakhEgfBaP38f",
  "key37": "5zFcCdnno6Q7kcQLzoHvAD5g5em9RZuBQtgDZJ3psMrLky59mE8bbB5vGHmGjNWb59nkCrJE72wwTTmCPic7Wko4"
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
