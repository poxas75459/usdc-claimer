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
    "cs7GRYMi2NL58Fsw3VKxSRgrKj3wKHkBGXmyiyj4nWJteJzw6ByqVKVKVcECy16GNSbFkHWqr5CUEuc8bkYJhiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31G2pKhSinEbUtMFxTzBhXq3CaKGQ2QmtM7ZAvZoKBszys7fqzVrPVLbSBTtQwxZR1BTz56zxKfmJWLwfteKjH17",
  "key1": "5k223sicL7kCMKGR5FGG24YzATRgfQdffGvhb2Xxmo9PF3nZ7JuqBmdGLdWCdMRJpYY7389WT5pgMkMm3yYBCRvy",
  "key2": "5ms9Mfm4gvt4UU1rzhz6kZuaiFg62rMoFK9nhRy1hqoR26jCaT1Wzn8CMT8p9vnf9VzEavUhLEG3bJXowtkY3pry",
  "key3": "2WLo4gy5iJAKZmePFcAHdqhsGLutKXUKKPXKwDigBzMNr7kjW4S5kmULybPSHDdT1ffoSiaZfTkzhaug2Le27FHy",
  "key4": "4XtUiGZDQxqthcaeCmUmK1jU8cBFHantT1yn5xN8reGA1BsdLbds41wjm17wXRmPXYZpGsJrPzqDF64hnrn6rfk4",
  "key5": "2EzftaaLDqCw3bXdxqiuy7KeP3mfrb8LF6aPF9zQmUiuucGUfwUu8quJEMeAa5JuoWz9fYTysHokDDKGSGxNicN6",
  "key6": "2zXuSZBmYg6FT8hXnyRPvZLrn51PYNdR8HrssaXZg5mrxUT64sKQT8nHK5Xe2ef9TxQNrv7FzGHqPWcNMUCfYBGW",
  "key7": "2fNBhZ4WPPoaquKkcKNaZUJSPrME5P2oNyfvhNcSau9XA9d7GsBydLgK7FyB4uBaWuV2BgdPohpjfiM8vcNj4KMD",
  "key8": "3AHwR1NdkQPXTqBt6LVqx7vfeXBhUZRBuWsy1o8VLDrzcTrDaffhn2NY27iRnjbUjcB4REvG3LGUTke6L43D2mN9",
  "key9": "4GfFqiUMYThgnK5DFRkunmPZiVKnLAr1WjXZv5oFA3aCPyA5z4iQHp5diecoLyDp34D6v9goJWwrFc9MLJYnPMjh",
  "key10": "3GS9nfApJeBULTDQvtnkMignWmgFYiJiRmXJFqYkg1SCzREUi1LWF447EemDiFw4e1v2Ss7boVaGGq2NPk4HQ7Ej",
  "key11": "63gouiZtSQYMVYkjZTaSPXDyo5ePM8XwUrYfoTpQoTwKhcxqMtbeDQVS536x28wzUDzyUV5dxkm24h6Qi4y1SF1i",
  "key12": "226qhVoC3Pj5pPQXXkFCBZH3MQ5rK2HDMbaYi3vj61b6aKexqRA3qd6iTKdvXMkSEq277sJ8ZXG1TucKaJ8vJ1EA",
  "key13": "4iDx7q8B96x6tMS1uv3NfRtf4kAG2uHpmR7amfTQQrMy36MZuBz7DT4VySC2nroyxvhWbNAQv7quXJubZaWP1s7b",
  "key14": "43EYVh9T7kP5SJe9UxXspqQYvuYk1zh3qiyovwu3jEHVBpzm8ceMQgis6AVcpXJes1pmGJ325Mhd5RB8wTF4y73P",
  "key15": "Y3cHf4DgC2kQyKr33mzvPzk4EdBPdVQjAQ9MJyE1uRDKBGFzG2kwKcaSQwECNpMsWUBPfXiNLydRPy4iXwkTZ8X",
  "key16": "4yMGEzFET4VX3eUmmmTEi7vfWCCyv7LezNKkPYSLpbGdPcNgGXUdpbYhfNC924zqZoxmKtBdszo3GJrb8hK2hUTr",
  "key17": "4EmhGuCeavwAqjDLWnKXYKw3CByyBLbN9he1nPx13JC6MVBUbXaVNoLfwjorpcACGaQJXn4Jw78BUkNYt8D7wkpX",
  "key18": "5vTi8Kcwewp4LKiD73G1uYYUSkujVhUaPpca9tKTLQEBf1hemxrepdh7KRoEqw4HvcDehG1qQXqEHrohZBYbNDJ8",
  "key19": "2jdkLvVbMd3XLFZ3o6AeseZkjpvQDhV5MRMkj9wj2xm3cXiNbbrZFV9ZcvZjNQf4TZZSxWiRCPa2xZ5mAp5K68z5",
  "key20": "v5BpBKhTjUHPvQrUh2f3uQsnVdv1pfzyQ4PGVP85s8rx69HNs872GZWJgDEr9N1NNHHi5XZDqe7Zr1dRcF8Zzaq",
  "key21": "3w8VqGLFzCwqJbAttT7g2wAHRgNmzZzTgmjcG9d5d5sUGn6JbvqYeTH1Rsv3ShfPWWWYnwU82U58c4uEPw9r5zxt",
  "key22": "4rBGu9pSARg2vb9w7CeoGRJwKmLh4c88GwtTxPHxZzrQBUsm3HMgV3ZFSx1WE3GEgcyAkUsQri7uXfpxvR2dM516",
  "key23": "5t9Rx5XDn4xjG8wU2jybF5f8jHmS7uxag12grTrQRFawgHYEDWVo92jA2oRuUoMZdYWK9cNW5GbkdkgnCLFfNwGi",
  "key24": "2jbJzR9bTgML5uAZrW5XpQteLmdbn1FUHZgRQnCMEKwchpMonfyTYE35UxGzmHNDr5f6vN5dViupyTPvVXqpiFWB",
  "key25": "4WaTtfD9f15hdeGsh1qGpk6tpE2mGHyjah6WPamHxwEMH2Jd5RR5Smm5VGCpr2StnBKh5x5ZhzcPszQ79Hp3J1WP",
  "key26": "nkhU1exRfdq75LuBKiEtaXdwNZzZF55xwTLymGkxaz1RxWmVbQt5krSajbFUHCmE9q7BNYNTR4EMFfn1uaSTxhn",
  "key27": "3w42LpQq8BpaDbVmDhabP2eCdVCUGFbg3rb8ETHWrj4wsvL49vpco36vMvT3XgsfhFszsRuQ1L5Cposs7cWabuPB",
  "key28": "Qt6X1ezuq5LSDRc4VwHmViSM5d58xj4jZUCGvafLvZSxaWpA8n4L6sWE3ydfyXnAXRaGYSjWJhCe55cnQny7i3R",
  "key29": "4Y5GxRayPVfKbCyTPcrY9DUdu2Ty7Ci81jmiAjy5Rq5AroSfoSoMYEXvJqePMswjhcmj2yboTwmgz3FyV3LdRyqL",
  "key30": "2wWbDa2usuVZov7ZXS5qKfpeisVD7Y4dRaxFVSnyzS3zLxp9XFDgWtpEZa68r9LKJhVHALKZdzkpgVwKq6uEM7es",
  "key31": "5UKk8WreC99Zbxuku7hkG8eK7gnn6ADsZhku2MqgWHxqCpQ3yAKyGFRMqU9xXk5a8VRPhHja4CtAydn8N8NUH21x",
  "key32": "57TSE9AEH4haWF5qMP1J2aeL1PtGZ7DYFaZ1EY2iahu4rG2MYYRgXrNUDB86bfm1NmYzEiBcXV6pyvdzqDQAtCNy",
  "key33": "2dC3GniCnyLBFnEf3QMRPRvPbHmQy1rbtq4o1z5qieX9e4EkGt7nm7cMw4aD9oEqr7eRhu1C8GP5eqsifmYo2cT6",
  "key34": "2i3baMSVWXdooce568saLYrdDKNgn3qSe35xjazoAknsFf215dN8nFREyE6ciQ7ri2vHoo9s7j3EcmxzKRRssh4z",
  "key35": "4b94eSbjDgv5gk9LjSRTnNc1BMwJgRyaLgjAqkkjs24wkCJKW6KQnX5Pk8FcA5pFgZdiSo9MA5QvwVBBWgSseqGx",
  "key36": "4ohsXV264qcfdLjwPv6zYFe8KdkpKYPzKya5YBCbFUuoExaPy3qw5WEiqShw5R2jXqNij4BCPizG3gtfwjDXr6Z1",
  "key37": "61mLyvgTqdURdsqvirC53hf5yL5We3ckJ97YYNpeyc8CpNMKJJJ8nUCYgE6TvoQ6oMLradv4SH54QR4nF31CpgGc",
  "key38": "37CoSn66fdmDuWoJ1HQRdXRHHj54QFGvcdgC7RvjRii6HAEsfDjE7aMLXMSqXFbByzYgb7mE9dynnPSrvyPJeyrY",
  "key39": "3YukXG6PpcZrkBziWUUQqjae3EX5xSqSRDm5R63J9YoAExndEwPtEySWhGbB6mXMx2x3viqsJTGZbqvp2rDpff18",
  "key40": "311S3MqNQ3HJRx96CGvm8iNiwmRytPk5M1CQMJDy3CSvrRuyDaaN1qWG45pxTsg2yzdhHhDi2WHbTqdECXx5S2T6"
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
