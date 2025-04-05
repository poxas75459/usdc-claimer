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
    "3XnDgP1K2r8Tgjefj6guMRKE3YHtkK55y17YimHLVzvm2cBPeQZEJJffWK2oBASRWwJa2xfgbgcWx9B6cJS4fVAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdLC2tQQmvUjSZdXxHNiCry58fi7ExeSqw9QqzqnL6Mnq2jDqbzXE9aj8gBjdDXLWtH4Xvj4kTynuefwRDthyye",
  "key1": "5Q2B1WWRnjtxa69RDSUkLr8vE7zV4njKvVvugr4mG6vi13W9xn4xw1MRHEYjmTKHaRWZxFsSAE7ZVmuNgGAdMAGy",
  "key2": "26B1ykC6ind3NNJPuhubx5FgjmFQXkUpvhAdWkSuHXSmDCRW76ZQQwD5SdSWSWCaPG46LLKVzjvSB1HKC8U8YCn8",
  "key3": "5bQXeCTvJ4SVUWmWPKpZEfHonH2Q2sQ1KGabnLmSwPRuLagAjeT5MgRpUvaVDvLb7DBV26f3DvUGkC1qmSgeZRAy",
  "key4": "59NnQaWZwW8r4xC2xjYvUuH5BxTGkYa4xgfVEdBjttkJnKMK1ztft81j6aBGFj7FLSVACsPVxNjvi4AkGHazrFUc",
  "key5": "jwSUHbzZJZWcY3RE2XdkYJzcw4bwcQ6BDTKQ2cysLGgaLSF7R2PBesctK3TW4KiStWsQwJEHTtKqiCqQhNTjf5V",
  "key6": "5xRWHMQt9XGU4qHBUWkSJRabg5Vc7CyuYf944XiuWwcKk279C6d9GHHN8Y6scrsw6roHWn4WWRgqoAgCaTMj4DvS",
  "key7": "2wACCQfKMijCs536MhLsJQPRd9eBzW5Y7mbGwutP4QC4CDDpv58184PiRuNX8MoD7Ay54QKZvbmWixLFRVaAhPcj",
  "key8": "RtLFqZUd6bYkGrfhPDxZEhtV2CfCcunfqSqGxfNmsMYY95cqJ6AaGzgpCNNFbjKiEw7FXzbiqKBVkg9CJiSGkBf",
  "key9": "4Ha97kFdQa9AhAXH5MZMikg5mvNgw5VE6G8wLRwxU69Qu2eo8smfGEzedn2ZMaQDQDGkA5b2w31HPza37fL1H4rX",
  "key10": "WrXegkPkFh1rMh13PrE8R2thtpGj1gg5cMv4KqeqJ9GwFwWkqToKxDCDkFziViNiLKuMwKp83snZckL9X2MYwfc",
  "key11": "k3TEMqWgJRUqDitJaiMdptrY2aeV2nfy4fk4bvwbcAKDar9bfJhQaj1YuJs9Eaybkxquy6ZbQsTtiH4AWWEoP5H",
  "key12": "5bqG1c5Gj29jGdNYVfzze5Y5HMZKMEsAUkqembZUnxKje6jLVUixaL1Tb4GUvPXkY2BjVhTfqnkmxQvEKV9aqGKM",
  "key13": "26Y5G7qR8CwsyAxHWLNMEwB6f9ZPd3EeDGfS9f33JmT24ZdBzBVuasxgFLWvtYY2TKrCBt8UWJnKt7JW3TmvEhcL",
  "key14": "5bvY6qnYCU6VatmMArLZqD8xDe9iy7E35GKzVQsgxskaoRftb3TcCLwNiUT4ximjGK7dWfjFZoV5YLT5CfLdHmN4",
  "key15": "5kRkfx1mJdbF7yPfzVu3iu6VWFuf1CYpFaa2vmGfajeCyftmbFF1PJPTWqnDEbyiKFZoATJwE58LJEp9xSuo9tWM",
  "key16": "5XRRAQ6BUAZ1HRr2jxi368LcRgzLhuNrEBWfxz12uSc4v2UC7M9UTHcELVtKbQLn6rQB5pWNvRL9UZH8CZeJs5x9",
  "key17": "5BRR4YVchWsjg4rgBZRaRHr37zAzEvCaFH4axjoYaq8DsVn4gQ6Li8qn4aEkuVABF6x8Bn3iVeXxHSFQ8xgd4X1Y",
  "key18": "5GHnZxPoqPmk1bwKxFBXWSqn3n9t8dn3DfSZGUeVqU4Sin3eeDJB1Zb6ncpr6EECa8FJeQkcGgq1Nzwi4SvFqgcp",
  "key19": "3U5ptijKHTRGTRS14XmgACZy6YLtsi15s7bmM7cuZKwsAn8yRcPaWrTQf7Xjx29yDK4cqGwCPycWZ3ZWe8YF3Ezd",
  "key20": "28xjh19BaBk8G2rHA4yfq7RHeiXARJbmTreyeCAknPEv1jaD8ybi15NmCYL1kf3mXZ4RZDkTBANq98zqhvDqkVZF",
  "key21": "4YkQEBzC9DgCoQaSbyc9Tme3zEkRSEv9P6kmLqKWjbPWXNbSS5LGwuesVtjwy63v2ufxZBM4FgzbFw7fbdzZv95F",
  "key22": "2TjoatdGW1Pvp4Gcq2miVPrMx9LEGPBKqy2Zar3pTFToamJF6ES5o23fNDr6NYwJDkoTDVQLwGtbBHfNUE7gW6GA",
  "key23": "TVNeNLxmeEVRs7wx5A3oFhyptqvf5CDzRjtkiXQguoah8WoaAZ8BxaE555ou3ujKvp5LahutRdNZiwsVn1SiGCk",
  "key24": "21b21JVFfpjQQ1dBkzuZRgEJ6HZHJ9DSuiap8FScSbPcWJgV46aowSDR7TjQZAangLETUHjPnHybfV4geKDbMBZH",
  "key25": "nLCeMsAmECwBpWVgLa7VteFDTffVpzGSPzM8JFFcw1kswesoGroMupokmyMWMCJD82xKTeXUHpp2HMBe8XWctCK",
  "key26": "AoHH9HQLoMpBbUu95asAa1gz3QU5vi6FEpp2ET5gfFiT9LvaTyYepnMxtjNnHLtfRphxtBG4BL9nedGb1QJY3up",
  "key27": "4U5QUTjuLaqFsJynrq8XqQXDwSoY3mBPzaEfomoibymneWqHE4YpBtSeKKDWkwLpxgeNChGnatfWcS5sozeoBCWm",
  "key28": "3jZJTtTVY3Nd6RYREYF79iFtFWHjFqYduy6pzMgJi12nSuToaaHurauwm4Ub9SGVHe2EE4Tb3wniLPSG7HWXVNEp",
  "key29": "2GzG89gyNwadBQjrkNpF9WvaxnBXAKXJ6LmYi7YQQLs3pcq4eFdVnXoPAsWdec5CpWAPbpALhDmdxhJAZupbbeP",
  "key30": "R6FJg4VSTqALCDVbrcqze7VoqdMU8AxnLwnV43RFvvms5QdjJuhXnQH6geHpJgpXfccg4rmonxnNRTTVPQQS76V",
  "key31": "AfK8ieFzFRJRHovbLWAMEVbkWDkdHuVwLNRr72XZNdjTzuYhLnHKM4V68EvrHqfwoK72R9qv6RARn5S7THQEHLp",
  "key32": "5rEnGvseFtNXvnaLdwuNWoUzUW6BZiyUT2WbkU8xoYLmoPnVNaSbwZTowvio7vfioDJmQrkuioPxV6YT6JgXDMBJ",
  "key33": "VNUJL6egg1ENJ8Nj4eSMnVoSG73wFx3qqv6S54SoQXFw3tDJ77s4m6ajgRT9GRFoo9G54ee7CcbLpYSesEMwBQE",
  "key34": "2p5HkzuCiftRo35wYZS9DLic6bvPwhfc4uUBJeiRz3vC9vQ64av7LTt6uTY2RYd1YfYhWag9wTjAz6we38vJ3ahy",
  "key35": "5RwgyVVivHEuFd6z3yvHDrfdbAA9aXrBXcNpjETVEwpiSh1qs4S2j59h7owFhz9KSTbyVivHkroTFDrcgx1E3hrq"
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
