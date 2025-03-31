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
    "XpJQU9DqyPA1zRRvmoighsM168MCSRoLoT3JgZetQz3wHSrP5rKVtdRMJHTrAJkVNUovaaf8trHKeH7UsrVrf4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1uZpci8TXipHchZjSj1R2bFcYaWU2W3r8JDuoD2JbYo8k6w2RDZTdH7sFr7X1AzhQfC8co3xpDfht1j2UYf9z8",
  "key1": "Ye23F9gS6waSyRQ2m1hWkTQwqtgiXx1QuV6Pfnux4mpv5QAe5JQ21WjJmysMfSwxP3vP6e89HovHfG2c5Tfjx9u",
  "key2": "fPZcpU3k6VbqV6NfbwRoyTDCQHmBB3JJDQsyNqSvt3FKKs3xtP7uCDQdvRMVcWry5j2DVgxyeAUHrzztMU1SmXb",
  "key3": "55MEHv2ha4fdmCUH2oJH5cfwe6m8Jycm2fV8WDEroau44hEDaCAbQ3AARbt4H2MxMwcAuYEfQ7gncrCJBb9E8iWa",
  "key4": "A7dSsPTfzYTqNLrk4kCCEvwhDx3qcHLF8dLH6szGNa1FFCPezMQpebGw4oeZkdcKz1SR7UUMVWjBSJJbiHUowoG",
  "key5": "2ZEqgwU5VN2ND5nvvSXx2jT6Y8qVXXidBPF2Zd33g97x2WTJcq3GngyYaZ7KXu63JUSeGJiGTjxUU9eKTnFgMgqM",
  "key6": "3SbqKyVaxmnKtCdnBNXmc1CewdpUthuBxrZUoczxz7xoh6EBRRwG46aFLTtP5vgpNriRQbyxqxqwhEPUHsHLMHye",
  "key7": "25eS3s4uE1t6nRXcDb7WdVg6RGbsR4HShiEqwbDWY178L9KV9BkGvzprfmYm3Yu3DD9Tk8vQBwZeqWakZKubiBKQ",
  "key8": "3Jsu5v4JjXJiNYo1WJQQAuM31zWDTxF192rjNyhaugG7yNwAk9AvK1vhQ2oXD7ELQJCyzxW37k3UaaL7kLYApVQJ",
  "key9": "5YPpcxwDbJrMitDTHKkr4uVJKpWJVaH32nwbFLMr92JgwLe419MuUrpkbWkqasojvQTZ1CiHmE2EyJHesBzz7JA6",
  "key10": "5aNwSZ6QEMSazqq1rPA9kK7RNmQ5PqgGM4wZEeqG9LQ1EazM76SHNvhQjGf1TLVAioxAKYeu96DeBDVd37rYcFpz",
  "key11": "5TAxEBDmatgHjNqb49ZeuGzJ3gidi1TERJ3D7gDopjcReHp4pEUFzcUrEg1yBEZZxg8VdwWpzC46yLJVa4jxrHAo",
  "key12": "4XuhYbSQD7fy1ZywbAJ4m2YGdgj9drbsGKsWYQWQtkpMwoy89oJTgfc6ESR7JatUCSwGNoKzn1ynxUJhebMCDZNo",
  "key13": "3daiyvK8zuvPcq3BxibdXGuUpN7SRJvh7KDezWRTmDY5dLYjWwj4yGyFrQrGyCeZ99qk9v6RsW3S26TeGokPzTa3",
  "key14": "3pdLNYTVmjYyeFKhGmUZopmTDvUoQsLwgrrJ9NGDBTYaS4Sr9hH6Y6URvqxa99kdcddBgSHw24UNJZBUMPpoHCnS",
  "key15": "5PLumP8KzGi52eW6veVvb1h2zndvNNxeX7w7M4EcGsUx7LkZNc4f91LGpEWPix3wQzcFa4agZXuWvAQTKNMivfQW",
  "key16": "3DKosKts2XVPPFUBkeiRkQaHKJeq3eBMzSGAg3fqh3uSrkWA9K63nbZsioYLa5YsAGSZTaEJf3h7cYSnoM6gXgYW",
  "key17": "3ouiKKytfqgf9nh1nGd6u7EtsSpun4Q486x1dLkhnK3mHVHPcJ5CUaMHQK9aNH5DDQaH1xcVQgQQUsaLkhtckz8z",
  "key18": "4XfTnEDefghWjf55yysjXWRaWZeceiDK6M4xvu57JxD1N28uff2Kggevmn8qx2KGihEUfpX59yVd3oyHpdE15Yeg",
  "key19": "5kou5gYNGjTSWETDHM1unQJJiFRKrScdtYRvqffWVumipMa9VvetbEHKvRsKniFyTnSn2FpuHcZQshDjCm669cM4",
  "key20": "2B12mYt5vtUV9cghqnNy26gvt7SBgDATp77K59bv27nmPmYpYuYaNC5os4iRLZXceDj1vYkeGwfXH8XWrEEQ7eFM",
  "key21": "3GjznXPk2XhvPan7FW3AwfXXtHJ2cvbxzLXtJPJKXGHXRr71MyVppXis5Dcg2HtpdWyFCv8dvnwyT1XNaD5ya1uz",
  "key22": "2ZdN3XwU8UrVapuWy9SYdTvxX5ZrvgCmwfdt9hr8bG2dvD1ZSAPU6mu2NK87wtfk4aQuMPFsmv71VNhdhoiejKM7",
  "key23": "5K78etstzBsSazvumMM1x5gW962fe6Mo2ygSzzDoLs7tff7donoRSz5DdSL9GJrcN4j3VzTrNoEyX5dw2XBWJytd",
  "key24": "2nhJ2DbdfbyYuDcnFUAhbgK6vtpBM72MiEqUDmzkSBByg1u3CnfHJwm2PMyb9NBVDvKfzLyaMp6XiDPYeWoWQhTh",
  "key25": "5h35KjcK1THqZud6ZHthFxoFTipdTRKGkrCT8BUrUXYwbQv3nMv8je7qTm5MyZKbYLErDZR2KF9QQ734BkbSpg4J",
  "key26": "2kVwJkSQMbX276r8LXgLaKEwe5iQfNok3W38Wk5WZfpEtzSiMpKECqrew4QJHmXZH3n5WpLuDPqwYrVR6KAL55CY",
  "key27": "4XhxmDpQtZFLMPsTx4wpsYPhfr4qyVb9o1c82Kn7kr3Wa4yZXFVns9MLXvP6WSc6JxLGNtwGHG2R96sdzPineJ8Q",
  "key28": "5AxzYVjfeXgAmn7iojnCJCYGKnqbmZk9wnFxUuTSFZjwGQ8ooVMxksMKra22a9kjH54vqpcKzWuKw6hwdacKVCV7",
  "key29": "3gxDWscyYPCao8sxAdGYPz5j8TVAV4QtTnvR5h89hdSptSvWD5XoeHzRv2nZd4PJW59Ha272VtWzsHaeXahnTsok",
  "key30": "4ec6WXtPmxvHZvTDoiZYCbaZ5qdPPg6gFQd5Xma2he4TRju82uW67CUmzxwbDVrR95ffsArsLsEY7fxvibvjCPy6",
  "key31": "3cBwkKTh95W4n8x21gJ5iDCZWcUqaK69EFFou49udsoogFw3PrLYP8Dn58HAPfR2Rxvr8Uyde69XPv1V8JSiB235",
  "key32": "4WMB3wcKzJNLyPiC3bXgWhWjKm9r9AXhpqQyVfFB9JMvZMNzLShfY9vHHukshkn2SBJX3trUbQze9byenMr2YJSh",
  "key33": "2CMXsTbvcZogJbDEG5WZp7Y5SaiSXrz4oEgiuuQUgxzKewQjraKYZnPCeiyZqe9SAoAHrKLPkTyRSrsN1hN9UnJe",
  "key34": "5qKGuDfMZLupZcZhXqwKMMJfGP5qhvYqN72SdZus4dnA3hcPNCxVTPBrY8yR6m2KGzEaKv95Fy89FAyZHmcbNbz1",
  "key35": "3RHqRt9uYL7CnPM6RXd691VEyBvC5dj7do3Bdjet3RsDXaqAYQUKDjQhCBXj1E9SdRnicghie7HxDsizbYjN8Rmj",
  "key36": "3BGxaC33Hb5HBLgeu7h2Z75KjEGZZVeEdF7oiBUfNrZJZjQyS8GFnzvcpQqWyLVJDz4kbihXXE6aFvaTFNBhj68T",
  "key37": "MHWLkGLmcY7k8UUMiJFWGNBAmB79FU4JQvHgsQzxZnm5NyoLEdYxXq8dVbQkL9pidm58bhT9LvrtXEaywvv31ue",
  "key38": "dMtYEHsNftGB5GNKNATuTGuN4xD7fNdnwoxehPUHeK7AjMmgZVNJh9RJRBVXt2vyntGZBcEnZGrjvX6Kf1tnBHU",
  "key39": "qNN7ngcPMuoonkH8gfDmnkhFyajaGA22xdfufD9XxMb9KQUmAUBJUwMoz6ErzusFoW6dN1Ber5NUBZaTMLXgzh2",
  "key40": "21zDw2iix55cxbyMvJ754tz3wSv6NQqkGuLK4V5wnMLpv1Lbon4YiTV9EriiQ5vezLSwHUpGKSK8LVpC7KGjCQ7m",
  "key41": "3agY9Jdtnt1aiPwXa9DZwpHHyYQC7B9rCfK1AsvsvPiZzTYcfkurww2sy7vBveB1CXsWJH3douy35jhKDyyDXzMJ",
  "key42": "32zSqGKLRQCP6Cy94b8UhVYM5jXmEeygujEYLP1QbtWyp1zdu5wJPtYPnmH69fz4B7nWwRqfmm2i4nPKxtCut93m",
  "key43": "5G3m2gDvZdFYZPirz6c7zEGbXTPyBEcofMYE9teBioFiQPdNaQcsGU2ndP5cRz2GGwP6ysQ7hDiMD6oLs81Aj7mX",
  "key44": "VX2JsATVDvWSViFWPECD8zkZVJxhNJDE26NZNBLkPjzn8NFmxA29YkK5YBn4p16pyHNicB9o8GiAujJiiiPT7m2",
  "key45": "5WELiKpi4tG2Nv9UAkPXKSWnp6sqESYaNUTzF2LNaCiakqR1fNCqg8zmCAPHstmJ4BSFLY5A1ZWEEDswgfuoRARi",
  "key46": "2RjgtCtxDj4PJ9ZpcappK2iaWADenywDyhXfRfFaYm7o9g3EqLxnrc9geiCLzyhSocqMCaivCRzW6x81RXYRfcr7",
  "key47": "65EVwxueXReTfKbpiSE99WMsbUqPzsSDJfNQ9YwrSWAJFBipSLj3R6k8cYnVW8oVEYwgK8SkRMKW3rov4hncfbTC"
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
