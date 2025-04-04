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
    "JqcTPppchGZE5fn4xDcTB49crTR4rTX27zjQMAw6ZsLWdkPwCcb63uTavaakwCrqV9hKVKVj9mW9t11J6bUoU37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXER1tFB7eubnuUFwuzkgb986aT9JsFGMHyRrF5t6M5Gc8ZDiyKa818sR3vb5a2615q1zy7CuaDSWNeX9w9YrFM",
  "key1": "3Ey4h4TthhQtjhp1RAM3c8WRp1tzufnMtJWvwqz9qjKSkpqnaK6hy6dbwWKbPAK283upa6PgACUNs3cLJEENmvMY",
  "key2": "2WGFirZM4DeMTSozqdTeKosb3f9XNCvhWpdxgh7ni3dKQQw1FAH6CLmVtEhwbx8MX57nUuLxu3hr3DAeBa8QJtCg",
  "key3": "3VuYJGAM2Qsib7WHfAPKii7ZkVytCRXbwpF2cxUzWGs4uKyiXMNTiF9UELNeavrmG216gGB3eLy2A8CRB7wtPhZs",
  "key4": "3F1wHCeptYa76FvNcQMseXnzojPxtdw1jQjT9fMLM1gyGMrh6Sk7G1stqYbvr5ogma5myRaLP5nYE3gKDDsTbpy1",
  "key5": "3cHUwKP39JWCSFdhnq9Cc7LeQSdFXxX7surdRTpxpTKy3gCsHrz3tfpRmszzTsGUAURVVCiZrKVtemT9e1aHs6aD",
  "key6": "5H22vQ3fKQbSsw2sn7ruC4ayGudRGve1EG5Yd1oMN82ewLdii3trSk13BqkXHr2RLEn5LWSnbxRrXipji5eHk2xP",
  "key7": "4zsB9bV4mFvffj5t1rA49ovoGizAvg84WcTMTfqnSg7gc8VNFtdQ588vRUqM5cvts2VmiTLP6owYX5UcojQ6QEHo",
  "key8": "3LNGnGcqvxsmaiPvukcqZtDzSTS9eGhmGLJ7sRF1fvY5wQCZcdPJjq6aLXYY7oBBrctqWDctZisdXt4qgYkrSm6H",
  "key9": "CWzpFSbqg3d3EqetAwgDsFFMQtYyu26gUzG3VpLRfdDwoZAjF3jMMGq4xpnAbpkMcqT7mNh1dGmSRcYR2XUre71",
  "key10": "2vuMWnTvq54whPTApm5tueo4RbTWvM9WHpoZanPKQLRxf1JZQNqGqpQPW56V3XG49AdHncCskovoGzjhnVAepEpB",
  "key11": "2oH3fvnS2PTignx6KkjCrFk1y1Se1m4LWzrmMrEoX32qfmvs5j5iT1g2ssEsmXTTPX8GWCo9vcqzLrDx6owXfz9u",
  "key12": "4eRST8HoR14bkBviAwbEqu1zGdhepxeWSfukHFcEeQPL5vGsmxmmrjcsG8MHkxvMpeUb4NZ1jb7cHVDMd3Xea5qQ",
  "key13": "4bY46AnQbM6EK6FphM74WSGcRQhd3bXv668EMV4MFqhLgorumJnpWc8h21HLC2HTAzmTSZRUrRVLoNtK6nk2A7FV",
  "key14": "3eUo2rVig9Nhrzs5ueHoNck7CT6Yy7mngQGpY61CnXcvMGRwAy3A7C1eGm1uQPgvrPruXE4nesYxWp18WuoGaJ1Y",
  "key15": "61nvR7wFbrqniisSXTtq9bDgWStxMFTkQg2WaLoPxEMknLCPGdWbE6vKFSLMwiR2VyW9uNssM1Y3YQjcWxWMHmTP",
  "key16": "65ntsd4MukpxMPwytK15SmsgUXhcEFGQZdXLhzduRQvaBhzv1spnnGmbHHeRpF3sDnJsckLKQRPQPxH8LQXN1aKD",
  "key17": "vF9TaLakQ9LWSa7U2M3ZSKFxULkCkcVnMNr7cT3itNh7jVRbiskNhzutS16smm2SERRL15JPVipVXJwzemGYTYs",
  "key18": "3nNxtfNtA5jxHurdm2sTsqVZ62ihCdBrFr278MEg2FAs8E6u4DS8GMPRw59hwYxNuEEKRPJZSwanaq2mFn8reDDX",
  "key19": "4nbAyc6AKFJt63zyFT3AzkQyLqszNvCo5nQgzCqxj6tJGXsMjXnKfSPhe7vRp6Bdoyj1JbW7BsQ6TTSAUcnheuCw",
  "key20": "z5rRgUQwPv2N1KhinpDcR5JMmAhege3QhEf2kJV1n7G1eSMzdxAscSXQ2tmxZzvoCcxQyR5xRBfxfwZDZpm6g1F",
  "key21": "2U8zhqcKVr9H7d5HREGzi7fCdjkwLSN5XrV67Mptmdh7EBe6U5rvGXzweDAUERpz694UrzFueoizZFotwZVK5un9",
  "key22": "55M58Y9hyJTCNxAqjDvpvyxkJSLVbENGtT3psTpzCFxRW7nMHCGfMqEfbDGouRW9zcaJfdLo5gtMqxZyWg725LZa",
  "key23": "453Y7ELocnDqmxjdX27dYd4GHyABmv2Z2MP16DF6Lw4i4zc3KQAtixC1TiVNdZttdticz4HEeSZJMjVCkQ6SwBgT",
  "key24": "4h9eXa21ZD4vNvYBPZEQLaQeBHLX5NMCzzZevSvoqzLjBtcYHvZUqqXkYkPeMjUMA4irs2TZMfi3PvVpAjy24YYp",
  "key25": "2f6WGsXwwbtbPwGmAXTsfX7vhbvuyBgyaHWJWrgZbxFWmzasb5fJB1jESwBHDcWCmEiqbSdrbKAYAe3DvK3N8m4x",
  "key26": "37abxZC9fCqQG75VH3HapxvszbzpXoFYeyBpPTyrjkxnZKUc4SoXXfriQqMBmnGBi7bdWkp47sD3j8Y3qqjxC7WD",
  "key27": "Xso1HsyeamVfkok4AM3YUqxpqcUkYv88hJPbGQyJuMPBwsC6t18kCWkTyBZeyh59xW8E2mQHb2jVvsKtDmHcBBr",
  "key28": "3iVQ9SiKpEtoUPoweWFaKovBDtKGK2vCjejavUAfiJTz14vNWZ5USifUSgnHqew5HDzETzLpysbp76QiZPm95YBD",
  "key29": "3dznM9Sxg3GykTRyMbN8mUkBvXmmqrKBRT4Ks4jfkvaUS4oHKk5njBNeVNso2L4u5rtvXwJYAvYQuqLHf65reXKY",
  "key30": "KC9CXwViTrDnv3FvubExU3CgN4aUsUgtKkjmMgZrGh6DZfZ4UwgrgJazVB6F8PuJHJb76VY4gNAPVWwGXxMzb9r",
  "key31": "2Khu7zCygqjC8audatgBYyQMcyFk6pP5Yovbh8TEs44G1Vx69Az5YmK7ftS7BT918vG5AcQLnT5uojWHdqyeo6cR",
  "key32": "2JWA3gERc44iwfCY2VtvrBhQKgTHPGYiZVXg8Kom65gH5TdBs2XaxsZvW6S5zgjWYrRdKYEnATr6h1ESoq3bEJ5D",
  "key33": "4pV2efYhggc6urjN4knw4NVqAXsWSbEud56tGfqVK4hciHtYEYrq8fsmTmuVzp9e5Sbqm3jRMQ2kNgzTRoD5Grd8",
  "key34": "YsFDUpo9kKz6Gm1ZXsNcx7t19TBL7mR7acLmJDhtAm1V35SvU5VwUxj33humgfomzTohy3hWfRvDS35BcxG12gh",
  "key35": "28LfkhF9DMPxHbVLYw2bDkG3dZrP14XMvq5RZBM5YuZuUZq58WaZL8qUVTSw5Vmabep5GFrnZ5VcB7899DH7wton",
  "key36": "2LBZg3AyoaYFKXM1xfwUq1BZHYrN1wGw47iA6VDbxn5kAg9Km9tMMg2QK5TCvCKo1obUV1i5YM7i1dj8RNvd54Fz",
  "key37": "2a88pWNyGDHWxZmkotEqUKrL3Qqe8eSJUYRKRMDkmP3ScEtzgqr71vjriaXQ2Ge6uYhpMfjYPi4r4HqKLZu6DFWq",
  "key38": "5CBbUKdvwFpJFb5cR7cNyFciC5tUTTT9wRTLptDc4Y6hAoyTg9M4MbErzJov2p741xLmwGrEVvDgz23MvRuQvs69",
  "key39": "3jAeGso4mRaruXUUYofJYpCnpYyio1KWPQNa5rf6sX128Q7DGLzbeFMUcd4jJ3Nb2BRBiDbrb2mCATB2o6ke3K1L",
  "key40": "NTBWUhuQigVcD3yA2PQHeXzmzMqCzRQsW7ukJ9uSBaKwBxtdyKTbQunbsetmvDv6jzJqH4zPCrJjuFPG9HAmvcA",
  "key41": "4UW8JyjbYUHA5veMYpoUk76BrJrGeFyJp88eMKGWGiGyyQNS2AvkvvZFJsC6DU3erJxgVZWnS3Y5sYDXueqdRsBA",
  "key42": "2yqhqsPZukoN7ZkXVfQ3eciS3PF4pSqA81R1Tuxw6p74yGMmAqa9pLmXc2o66bXFRjAK3uRpmCHVXxXyDKUQFZrf",
  "key43": "2zHU8kmkfP92eKVBtVtA5JAaJWWSf9Q2rQSbDxwDxFi6jtQutohQXe9QFEe3am9KqWNpbmYw66mzSHPkhSWhm6Vk",
  "key44": "3F3Je4nfrxzsPBP9CezCW7PhgxTTxtWoYDUhUak4LyJKKU6aaindYenG6qyjELU6CCnzofPtp5FdqSfCENjmH4bj",
  "key45": "2TkQNvmMEVMxkH8yuSGsX7oyWUqvGf1vJ7HRJgmLhiQ9E2ckzhzkoyWroykKbCBjVagXbGqX2oqxkDjkf44y8pqW",
  "key46": "HTuGjJZZEqkbjUUSVuktnhZiguV3UsxQsR9Rk4Y4bWBpFj33tRtipAt2QCjNUAWzhBREbLmsRSiwiEbNWW8HoNS",
  "key47": "2YsWzMfmumjngmdqUCTMMAnCWyurMYpvGFHbnwG12A8t6BNjsxbAijE536ggHHJCaHJ7Nwc7wadpTjmcxT6oUoX5",
  "key48": "3YFk6sFiJEa473VM8yAdTB9A8sEK8QS2SNoEgEXWbX9RKkBT1w1WyDpFj7kLE9iUAoQfmvTXZ3pQCtHv8nP38REv"
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
