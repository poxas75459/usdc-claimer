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
    "5mBrr6D3TpMXwNbXwHU9svuuEW5GgBQwEAhY5q669cqufgZJ3GWjmYUudQ65MN7F6Jiaj2kQfXWSwSu69uv4fEjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTk48CSK5oRuiE7C4k7bg855CynGSHu4EKbGgzG9GNqKYZ1K2q8Mio8pqnX1JkLtwQ115osjqKQJgY1m1Hm25TM",
  "key1": "3xkhd2zaGDoXD7p7C4cjfqyhPzxeY2vgaJShDba5iQuoLHqNzGNHTR3FvfopAnJ7dD2SpdmdDfnMwM8UpRgKVddM",
  "key2": "64QHp284TQ1tjjZJNk4u9dMQUMjroMBuo5G3hLVWZP2g8TmnnXkMLnsMaFGqU9wSSpnppVgcRKpjZv2uSvBbB7Nz",
  "key3": "3Z7EYeBCjGYyDLqeCwgn7gnBJz9qQHGrhMkLFW7jaz1BJBu49zcPK57vWmR4SP1DPQcJjuM6er4EsKrn61x9R11h",
  "key4": "55DpqLydfCpbJs2hY7tmdnPKKEwCPtCrujUauCCbcZ9beUH9fAqtV9p2S1TquE4Yf4qanqTvRqgeZBiLQfVaSN4e",
  "key5": "2L1gWuTLm8zzfM6zg2BBBZYmZDjBxpZdJDKgEQ7aHVdDb94rfU8EBcKshKa7Ca1roUmeuWvovGuhauwFwa8RRtEN",
  "key6": "3BaZLPq6QBQsu5gSWPXQjs4U4UihGBhfRY4WBn4Me6hDuoSEnEutEUGzgKdFBfB3eDPZKdMvHPUkK2cJSN39D7mV",
  "key7": "4DKeBBxtTGzF2AH2iHN6H1g5wpJjgafAoeKvMnuZ6G1r99bTuTco4VVMTDNp21dymwW43dSDnL2uprSqf6hNTKXr",
  "key8": "4KCaQELr79SmrfRikxU3gca9RkbfwdJNFGWVQFrY7cJKk2aq256JiN6XrrhRtWh739xzGSpgjZVyVVZYzw7FxeSe",
  "key9": "4U6sKmsP8BGo5hr71Zhoa4A78dbuzJuaR5d15jWvACzdGzVaLjUQhipj22hmcbsg8exJr9fttHs8tjUXLeZbvBE6",
  "key10": "4xMQjHZgFnqh5QLSzLQTCiWDuxTwwT2jKykEwnsafkBJCSm5TqZxVDnbSPpS2pdWSuCCwKDhNVEaEGyMBN3VaXeW",
  "key11": "28zh7ukS8YYP7LYDw4hQxvuiBU8Avm4mLBfGd9zcQ8jxCNd7QjX2akEAMaxq84xD15ht5x22usRDxPpoL6RbDNGd",
  "key12": "5nWT6MLzDdV8JSFr1X1cPFvtWk7NBAG7ZsHGZjZh7NDLviybg3sTuv6pGS5K4AZmeeTTizENt3ScEfJXbLrqv5mv",
  "key13": "36km76p6asUA16BcPBQ72TqUfpqJKqYxnDgGYPLwX7J9cieSeXLLC91Jk3JoJ2h89dfHX1zUxgPQDPxGhRY3pr3c",
  "key14": "3RL8rjx66S1mVfvgxPGUYaw2rRwcZZmctMZRRyFfQntxH3sYDPFxtMvSwRCFfszWkE347Q5bdLk7BfFUt7N6VZ4D",
  "key15": "54BoyWCyZQkgJog9NadcVQQL7zcpGQBRwK4ffozvjX7MFNA3ksV4h4zTJqbjvfNpWurNYqUH7kmvd4AQegLxLFgh",
  "key16": "5uFVimzBVGVvxcXjaBPJ6JCt7feCk6ku5qbbMVmLjrDaGuCTE2355mDfbYsDJY9RacaVyr928WXsUgRuLGHMnFWD",
  "key17": "5hKSVWS3xiid9bw993NUBbend5dRZ5SVKVsZYimAZvpPuZ9WMnDS5iLz7oHAsUHEAP93afR73thfQvSoxJSJiREg",
  "key18": "3c1WixDDQy7fCRQAuBRHrLJ6SbuXvZNCxU6zifCBvN1Kru9Tq5yDCrpiq6XFQSf2ue5o1jaFreUSgLNfhZ9y4PJ5",
  "key19": "4bTkrRJjpigzxTfvJo1ygwnhs847vLC3Wi3SrUuobqZ8GMVLzCNApbR9DXtc9brQW1KHFET9CmXmJeD98SS4cJRr",
  "key20": "rKM4kW5eVQLoiFnkvQGzBz9gitUUETAWGQqoEwMyDcLdLv27ruhwiGAKyRgbTu81vcy19d9TXNxjvT6SUBcSHne",
  "key21": "ES2orYuKiFX4DgzTeVH5qXT1NUdd699i6KAb8Z92ndALVacWaEtZ6wyyZwDmDA8eVRLfDK3U3DDRYahNLDXMXLZ",
  "key22": "TaMAETCMvrx7BjsBjWN1MNsp8HXSJZTAnRmXwf1vZ63hTaRVwqHTkApo1PCM1Y2Nr7qH9AFCSdmZjQumxsvwDoX",
  "key23": "5EeDC5P2bUbUR4U12yZ6UNxiiRJrUoohRYn8VFLHJkwz9DrPwvNC3XtMDGM645efbBNj2L7cF9ZjeEjoQUzFECJs",
  "key24": "oDfqgaPYE4NSd4Eeogk4n7uHArdTtxpyd7gTydbGgZqHNvTA7PAaxXb6uH39ougzrcHKqtpSekDkpEsoq6RbQ6u",
  "key25": "3F39tVChBGTNnc97TMBa8oELvEtVZvGMmLNoXeSCoLAvRtWvdcSjHRVEawChuLuvWRVrMvnAeqL4R7EUhH14xqNc",
  "key26": "5km3xaTW9B9Wb6iUcmGDjJpbMaHSFnypByYKxvdsTpvSKV6swiKLEP3LpXnQToxqHHL2phorX3LX84zYH8sp5377",
  "key27": "du2ip3jES9NXdvXSaMfznYPTBkRPkiqSgBTqDLX8rr7HhitVmDtcYBbpBXjz7fpqZhuhJjymCuxJ8fX1gpTs3zF"
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
