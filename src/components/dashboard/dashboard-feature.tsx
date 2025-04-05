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
    "3phJYoPhDwspcZzgckmPX22bajhVeD3yHZm3CuXvHEmjeYgQgkSTPEuF7rAj8i38wHFpyuGgpHNe6KMCVYEVTrLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRPj5i8zYvtmREXXXkbWTdCm2hrnQegY5xHynk6CmzMHMf7sLvPDpbEN2WTBhd8FZtQF8zVZ239bbXeS9vm29VW",
  "key1": "4z9Ng75RGwh2cDWt5kmqRyx5nEkVRjoqaGi2BMTWGt3A41Duz3rduziUbWMaGCKwg4MWoyCYiy1QPsQjkiS7xAzL",
  "key2": "5idvFF541imCV1xpYkPMSwrWRw82BuC31FEC1XA2pYPNqdxFBDjA4JJWH2BvPGLQjueyke9XbFV7hYV3vRWeJbfK",
  "key3": "4LtB2Yh5YbfK7fXTgVuq78d4dPWDBS2CbSs6S1JJHFTUTtiJVktEsYHHD5R5pxREvsN3rRvE151fdysL28M9thX1",
  "key4": "2MR54mPoETDNs3w5LAU2TzjJzNaofEZmiTNRQsXXQzR4Mdq1KraMmCuKpBFmy9ys67x83986Dhqep8RKgZ57Wj66",
  "key5": "3Qxq4ZhAM7ikswv4cTEnm7EVvUYvPncCqC5nTwFyGwQJPpP9BUBqY6SPZSWt6mAyujwPwCriNXy6zcQgex7aZp1p",
  "key6": "2fqwRjmoPTeYFjNwJeQCQZs6E8Ba6Lb4CbDiR2RAUNJnwuEFdjLJBJSrshpeHGJ3ahaH6PQrZoB2y6kKbVKYYVtz",
  "key7": "FZZF1wK7pSbL5EjqzeqFW9oQJaMSH5jzG6vHshoDrkSv9RPApZD4dBey79k7gymPEdwgtAbDxCde22vFT9hbtH7",
  "key8": "55uGknv6UF6XafbeHpY7EACYJ7wUUspjEtaKwn6ZGuj8zfd6gEnKXLCC6dzKYJ4UtcC8xzyHzLest7xyzne9z3tV",
  "key9": "LRyAHShTnM5HLZ9tHxMwXAH2Q5LsKmXDiAicnLo1hmvEn3ZD6eU3jFhFtjipQenwZ78mHVYVUFm837hhbF8myf4",
  "key10": "27oUJq9YHmhWfRtSnuttoGLfZYP94me4RxHpwmJFGDH34raQJV4dhv8ugLGsfrqDGu7YYzg17LKWzaYq1WVys5kG",
  "key11": "5UpeXuKp2fMMwcxqPUPwzEDeoKcnMAGVUNhHEjbNkn4wKLYoXKLKaraK3KWxCKUvTucJ9LcFTLnU59nhfqVSAUqp",
  "key12": "55CrC2fwpF98TvydWmFRMQojZeZvWS3gnWMXT9jEuf3SUtGQUpKgoREp4z8LckwqC2kj1kRzcVdb6VgrgFJQkqC6",
  "key13": "FHqB5v6aWtjW5ttM1jRxAUqgFdkGqsi8wbHpKdpCGBKu2vFuQ8Zi4EhUd3chSqfohr9uiShPTUb9Abt3n89Vcxf",
  "key14": "BsuMKFhfag7ZnDtgEVtwMT6t15vnmxLRze8aKQVybtPAykD6jGG4x4CJBVrFBe6pGGCxWqaiez7EdmtYQfjot3E",
  "key15": "YYQgUhFgrrkBpSZEMUoxdukrmYFVxhejog2xbESi1NqGHizCmhEW1q8Qvn7RKcfSWYmY5URfJ1eq259y6Nwbn4c",
  "key16": "3gThz8Y2r42WsXvq1G8YcHmNCbSGURqAqAS3rQn5XBDF5YZUxsovJVon7PHi36dMuqeQGmGAaPRRCyAWHae34nus",
  "key17": "3zUiL13m7kjgBcNqeFM7m7S3tfr1Zhv6VYZzboD1xLVYwSyV64ScjorxP9hHjgUp9wofpJQ7beZ9PqZndgYbYRLu",
  "key18": "5tmys9HaV5JoZUdQARibPfeP8iyLCG2JcNXVPAzWDmg1m43vhyJngzWSfsyhgE4ZVWTdMRZjeqB6JAfbB79u7qz9",
  "key19": "44YK6yMYqHHxVevGBpvzTt7xLYXrpGN3iWBptoPjAo1ADDLqUindXSqrKRJX1zRy1PnrJXeaJAiWjxSpyj5iTyE5",
  "key20": "2fPB7S9Xnx9X21q4wxFj7txg6TEB6FNawu3dMtvBhxPBfYxBwQ5TL24zsuVn2yuJSdRQtz1QJxcgqrNJJ2wiR2ZV",
  "key21": "4XrYHvpVhqssgKSLBjMvgqtK51gsDhhWwwU9oNAxdWcym4zsB3RU7UnQSTcgg3EdJtuCGzuCpFMQb6gsbCqz3CuE",
  "key22": "5ZWRwKeprm9FJpfBBeatZVYsrkctNeSm6WbuNUykyqDcFZihtHe1bsaZrsKBDg6rWmoLdMsfhgi9nqiX8pdywNRA",
  "key23": "4tbdhkmvVVGKgKv3rp9nepJKM1HXE3RJRB7ZqptNzqzWjYjn3YERCH7LxK1uzUYLQicoMU16zGpY7yBJUKctWAZQ",
  "key24": "29TqrDoSQbGY9yy8U71YX16qjTWLTSDuEd3D2t4bv7Z75gw4oEQwbVZiZMzVZxDgbjbegAMa17HHVzRxKSwSACvp",
  "key25": "4BTF7nDPLyJzk8JUfReStGMvbw19unkucm2rAyexAecCkGAzNkF5hKgtzDVDRQNMPC9yzJVWUq8WjcA5V6eouPJv",
  "key26": "631XwXNb7xHpkg8WNETrSEJ49Lo4AziXUEnshuVwZNME5qL9SWdwQU4S4Wig5LwCKAvfsRuRYaoEtfWTingN2Qj4"
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
