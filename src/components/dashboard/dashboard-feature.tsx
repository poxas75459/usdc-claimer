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
    "5vpoHxo9yq6YXB9iKzEmK7DVK55snfSpNExtiwgxpSppyDe15Givo1cL2cjMYZbj7y9nmEP7gw4o5Bj7PyHXFKE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AKBbXXtKqAcu9TFs7Z6xieftWYYKtBSNr51hk3AhFSVmVDq4j42o65CKKTRrpEHBwpoi9DoxKKpH22Kv59h6D96",
  "key1": "2QSTUv3WashjfgNtvJfErtLxJB49oyWJhQzMjaKAV5ywPvQzjn6wpadqhvsjA2zAkZ2uBADkVLKsga3wG5cS7xgH",
  "key2": "5kHaLjUw29iVLSBqyR3uYVkJ9JacWYemPyGD1muhUMM1VEYm5yBH2GZS3KvgWe6L2oDrzTGu6gcYkF63cEH7pTrf",
  "key3": "2AtJggAcaia5kPFKPXCafwdMksZA9kTaoADCvnKUb8rujZTVeRpaqBzonqy1Lhi8aVbVE6pQ1Zqk5J6cfX8r1X46",
  "key4": "3Fj1FLQSFT25wvkvv3qoyEVRLuPgmFiTi4qSnTbwdh63X8bLdc488EpXRnm6JVjKxbyNYRmotJMWPgUfnn1QFr2Y",
  "key5": "26N323mn4U3jWnWunxx3aLttfMQn1Qv2WyUyNgi8qgM11YQk9CjSM5MkCzBhRat4xMRVogsa4FzCnWpT9WmchuXK",
  "key6": "4wM64Nr2vAXfpg9LvhQvvorQtsnMF1C4hWhNUBwjqZPByHKVapxUyi5MSVQvzvh8PZ9ixRBeDhEbPGxqBKFdPXq4",
  "key7": "GRyEFPsh7nEVWgjfbZyRjsasQ2ZsS7yxqFcbSeoC8Xgk2Dv8aDS2WGgvvTmPDZFBt7oGKVm9d1mRf5PJDDPdSyz",
  "key8": "2LUDkSMYKx5EKsbohHAsgUmfcreyULu4gXNXunPs3XD6NEV4LffZdQFr9YC4u4K1U769a65FLgG5WXgvu9JgDvox",
  "key9": "4JMTUhoe5nBfWMJ2JndVuEESU3FMimveKzy5qhtEfvjgiPNjehWQ3TZn21YzdsWLYrNc9SAUJ17MB9qtsre2ravS",
  "key10": "3BV2LyiLzP5w4CfDdPchCJx5zanELhq64iyYjbUNEpqn6ohjJ9dL7cMPHEtBZZiPXtoNhJ3eQZTdtMpdWmgTKQvV",
  "key11": "2kJh1TEaX4toLwb4PtBwE9K65fY2BCBj1zmJ3PLkZ3uNA4Mqi1EVThxuST81r9hjRNr4TJhMW9Yq1141pfkvJk8t",
  "key12": "4wDzQGFfEA2RseMKrwigEAeUL3pLCHpifWGM1La1CD4bpB5TkAoDYjKHmNKNjPCayE42s7S4dS2GkcG66DpHHc4z",
  "key13": "47a7k2PpKndcd9Wo5aVSjf7hXbA9iDGwyjW18HBy6Q8sMhAgXWPxZzGkUethXmuB8sFePavrzW9sB6X8PuHbLbN4",
  "key14": "3YnRNAvSbjkFXHueqR8fwZ6hoXkD25SFWsFCyEnxMYawvKneR6MP12yfmNDAs3Rb6b1iqBz9uUB4c8a5EkP9jDXe",
  "key15": "3zC6c8nYmujqxVp5HK8FPAcRPdjgzTRrsPWUjYn2vncBkZW3vVPHnXCSF5tGTKkBjbzML8qCgKYFVufj5Ukz374M",
  "key16": "5PAB67CiaimYSBjo3pFKcuoQMD4iY3rQfYXxLYvokg1Uc8JdLsNok3eWX8nzFJMm2eEsE3P4tnnV3Qe3EKMB524X",
  "key17": "5t1BnkbWjBGENEgzmgCDZfSDDkDxW8rFB87pUupwfXyQkzzzUawPWpsmKY7nbTMuscQAWLcDiC9WyfVDqdyGNv8L",
  "key18": "3tn2hhQbv3nn8CJbtEidHT2JhhLoEFuaLhLLvHVhghGvLiFxfNZtWdVUmvcoQN6kysfikLwtCgBgE8rqLZxUrhEG",
  "key19": "4NURFWGgJA8NwkgxUWCnhAqykFWoYaBdH3RdsxFYV4NH3zcgZo2pgZhR6dJbZ6rWkHviQq4yErbQiCZMnrpQNrTJ",
  "key20": "5qwRuCM9V8CYhoFtYsS2Q4sDvnMUpTd6CQ8MghWPEo4i99QZ521YFLUttMHRNjCe9tzpKvreuQEcyHyrWBvuJGTm",
  "key21": "4TJonzNzMpRYbmjfLiSwxDYigGjVc5qLcvivg6KPHuEgYVaBTQFvNm77UhbHwfoAefYNSXTRyd4pA9Z26ztREBtA",
  "key22": "3o35g9XrvcpYFamB587Vf6CVJQqeKyyvRsM7hz2iNS1duVkV5sGFzkzv4Lb5B99o4pTXMAxxkcvG6SY9SEkmSq2Q",
  "key23": "YhwXJCU3Yibr7uSS9HniFNrP1P9wW1HWiEx8SmzKHtvjaJCNu1b6LsoqjgM2vXvJgUUtp11147aMggKFCE4MkmY",
  "key24": "WudeyCXvUihGNue3NxSoUG6m9VtZK1utYbuXazoCnSHmvBGdpTUCSLTpdkxQZwY5MwZtwY2MJDP8u8nG4Mk4g53",
  "key25": "A2Qu3yMob5RiJFYpzyFRatKPHYuiCSTcp6hKZcopcpKnqrJFDRR5MRtLwxTVYP1tLxBtqV6uJKjQWsW5GP8XbhC",
  "key26": "XCmoghDr896hbUVBjwgcghi8xnEhviJrsTpEpYP66TX2JUX1G6Y7q566pTDNmKWbSTx2nokmukg3ddwXJ3S181T",
  "key27": "2vMSmezMR6cbhTgRkCg2fDhDXvTUxJweVG77ubvLB8hiYaMAXAhRm3dxFseGEDNkHYUicL8N5BJXaYn4emkCzhHt",
  "key28": "5M9oBxVDPHpCYSADPy44S6xgaa4via9BMJui9sDrvU9nD97BwTDVRya9VGnesACBPY5XE2Q71iFHaVAhpN7jLNZR",
  "key29": "4EvLVLixVSMFhwwf8Kd1D3Gktx6uNAw2WRA7zqD9m1sBdMbcawfbp4Loeyv7d88rAWNd9uSScApMGwesx4QLEtof",
  "key30": "5EsEsHmtJEZ3Pype1W9QYGZMM7aWX5uLNLycmTzATRieSySkHwPmfWycf91THj5tzXkZaQ9LfJ4ip8iFxUeesE5C",
  "key31": "WJTxzr1NJztqF32nE1nRaNZzunsHVQDFixAopA7Pi94WVWtWRMW5mdmF3KucEjG42txeWJweyUWgES5s6Lpf8GQ",
  "key32": "4abieoWjFVr2bxnhgsH55CdwWdqXyvCQdKWhENvNGib8bY5UwDj9HQ1H4eT7LeSRHc9uEBX3vNG5nkJDBxASwAx7",
  "key33": "3LrdTfxoE6B4PDX8ubjn5P5oQPW616ztCnLi1Dp9aZkJPiuey7K78LyPJka1XS5UNjkWjjXfncqHXkwz4fh9dXDg",
  "key34": "65BQeFGmNrvJGC6mMdGgdgAiqahUVtjbAoci5HKobLABY7uAWqgcogHBmSQypvFAyyd7GZfhj3dvbX1P8RLiMHkL",
  "key35": "57bZHQ3TDRAQLBZ2Ax1fBcxZHM9ggAbWETUgp1uXJErt73dMhFKZsEoTsx5AfwiMARBC3PVG46aZXfE66AWBSTGv",
  "key36": "2dZcYapW3bQ9wE4KwhxXaL3MapYyMxswUR9avFHPFXdZoSn9jFi2k6z5uGWrwt7AJtSXmPd6QeDySPvkTeKe97Hi"
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
