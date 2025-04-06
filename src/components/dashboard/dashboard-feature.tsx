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
    "3M2PjFhR6BpXczVsPC4SWMwH1Mug8NSWpgiPZT1eoz8tUZF3u7gBdGSyjsTaqdm6KNz9x32AGVdxHEK2AejtnArb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrbLbuA6r9JwEFAQvXDiewcFNLYSU87LqR8grV49yY3Ht1BaLb8NJcjmVqBr8JXsvQENoNXpNdKzy9svd8ig3ZU",
  "key1": "5NWV22GxavgZdbonRLAnS6Ht9QDzVnwsdBMJ5h4uu7DiQb1QiXSCbuR3A5VCm12TQHprvfmj7p7ZSvf5eEnTcEzA",
  "key2": "3DyXWC2FF5aWf1YPomKg7A71XNugDcfcTAyLAtKeXm1rKWp8nRTT43ZtBcaYfwVEj72Dy73B2u5rvmV7VKiJmFms",
  "key3": "2PQ75iUnWUf1AHpaDxKHJU9Qc4BgFq1nAMjDYKk6buYnC7tUfG6N9eBxJ8ugYhUm6KoTNF6koaS1fFh8Ebm5SFox",
  "key4": "SgQphhKzDssFUrSDSaoM64d4k92LMZUmPXHDS2vnGXynUjuNc92Xs68kHX5AyScDJ1zbskFvCeScMGAbHPEu2Zq",
  "key5": "4gFVUdStAERck3rWPYfiuc2VsoZVFrDAxKE2HU1BUqGYASQPW5jLYxSKqJaezqu3rVGFk7Vpj7grm2Fhuvmu9TDV",
  "key6": "2BDrLR3PStg2cFRwzAe71QGSuytPSDeHXhAQoHFs2f9AGbuF5DsNp9M7zKHnQyciPt6EHFtBz5b3SGZ7paUwG8jo",
  "key7": "5VoziKtANfY4pQrCQPWo3oHEsmHH9Kn6dPJwcf78Vgp1o67qSWZ2DLji7snnkp42DhowsYjbmd8HELUs3yi66aKi",
  "key8": "44Sd5sJbmtPGGbsjJCjySsHYW8S79AbJuM4CY61H9AEgmJW1eH5rjqw7fEHjMfmRTXwhnUowGD51kcKEE8TceRpW",
  "key9": "2hdEm1V8SE6WLsqw8SkxuWAwQvFCLBPc8hUQQYpknk7uScCDviLZRxMB6YZEEPHX542kUgAhPZUazk32mhfvsmwf",
  "key10": "4PBVoLSBPX8bFi8DmGYTbX2cjFWuzu7yN6e8w3UbZChfJker5VFh7zX9QiuKxkb7NYJNxKHTnSuvQ5GLVvx2Dbdz",
  "key11": "4afzV797XDLpK16S2m7KZ27KxbNvNtbHxGGAcwvcDhLyHmkxWD45DErqC2vU9HiraRT28xaaSgnR8uCidDzCEdAU",
  "key12": "2noDKFuNzgkhQoWkEi8NZjqesD3ZsPL8hQMqoB3ZRkv3hHhPHnshv6dT9gxaFQKsBb2qxfx27eEf1A6xTyTXpvNw",
  "key13": "uzJiTLREv2rCy6ofGGeyfw6S2GRsFG15LWv55AuKbRBK27vtWs3yESVuWrv6gUpZDpMCW3hV986SvZVs16cguXQ",
  "key14": "3VZdbSqxX2452jnFUGGm9yESitFBWLFhy8wEtDy74XqR9C4XZ3SkAYxcr4nHahKjDE95snaG7tBjeTmUbDRGvcbw",
  "key15": "4WAANVQsWoQbfNEHZsuJSoriMjrPeshTceJPBefQ4gGpSKEJ3TrTZxQP87yZvq6upsLBUzgP3t29Ty38QbyL5Jpv",
  "key16": "5LYHHHycoU4fuXWvaHUrTJ3z4KT4WJsKmPwPFuMb692ox2Da1HssTketWZduaQHCs3ULU4ZXJvHGikNs93Ttxbok",
  "key17": "53wTGcJfnkdE4VTPpZhZhJpL5iQY5uzP6XfM6Zi1U6mbwK7AocU4bCUL18k5kQxMgEfYHg3gFtFjeSgFNQ2gWuw5",
  "key18": "5PgvxPQFkZyLfe7EvZH9MpGGPkdC7b8zNxsXZ3jKGJm3mjRMoEzBiswdAbwjoxAdwfmRnhoKfZPfsSTf3xJVknKw",
  "key19": "5TQDqV5hv9D95X1GFsh1LH7vqJkinUXnxg44B855o65if3BhMMjK1aehacwds64SQVeyie2z9ocLvq9RAMbgLpiN",
  "key20": "3kECaJFQfqKJoKen7HVcA2Zs8pmwrBAVkNwiYBo3EwPJdr71tPQevLxNfox7EeqbgcdcUg3bQiweXfaZ9JXc9FEZ",
  "key21": "3EjzwLrVoMZyQBZ2uLjHBymbGzwgrhJt7T1nrLKuJYn8hGvhrDY1w42fBVmdy1MrV5SdmpVXJ7Hn5K2NzA1GZQ8e",
  "key22": "5MFJ8w8E3m72uPiKos3eyS6CHRFU2wg3HWD3cs8nnpqqqx2nGZiKnyrB9RzP18JJ29bv4XgNcWmxNvwJHLDdxLea",
  "key23": "44vNtmVpMS2BQF3vcbBfX41CTz3mpkUU3vhy7en5C3JJs6A6NX6gTpNq9Mcn1bZD4NXJWCToXqvQndXvD5gG3wEo",
  "key24": "2XBuZQ4SQ9g7h9sD2usXEXj6nU9nbJR12o2LNY9jbTMPMSf2q4oeif5G63vvT1q2EuPWjH2aGDzxvgUHwPautZcP",
  "key25": "3Jo24wpoXNuvmGJCxhFyjvNnZkAJ522DgTzUUVXqEJB5q1Ja7Srkv34NLrs8YsvzC2zdnzbpFFWTWz3b3k4nvLcP",
  "key26": "2sdrF2wZ6ud2Wmq1YStKXLCeXz5kb6bQfbFAzLNUdTY6hESjFSVy8CpwMiCMNkkcUZ3SGrSJNqETYasKpRj6guWz",
  "key27": "2BL7c9VByhmvWiWsayND7BoZ9TTpH6jfGJPHdU6quZ9qKEQaQYMSneu3KFHHht3N2DYBr5UiogMKhyJi9tozBWNJ",
  "key28": "5QPnH8vMVFfBDdPZq59wqg4LW8L2kHb5jVKttJ8K5aUKNMadWmnrE7uvwoHAaH5MGiSnM9JBWKZZgNFoHmBikCQT",
  "key29": "2m5UpEmXHeyfYGTnLjN3ZtSwfjq4YAvKKFCjjd9PisMRwowEqKxjbBaymUhfSvxogrAsV7JhuyF1VTekbE3xYRc1",
  "key30": "cf7AJeuP8Vb333GyUEXWaqLoCM3vM6ghrkGScPUYU1QFnoCef5s3p6msNUVRh96MJdgJjGkBkPx2dMQGEHEWMG7",
  "key31": "4K8PvZy32vivxoDPbp9DX3FWjfPeyxJpmYJYHrfgPnsyU9VvFVBaxEoTwTmZG5YFemvrdG8eeExkBWm9A6XfMDKD",
  "key32": "efvwiC8rwZTejBrgCUb9BaQLVgwW7WrjUX26ddYBLgUyHCKBRQY4EGBLsUtGkXcAqZR747iUvWTQHaQSWCfZj9F",
  "key33": "jee9axrQBoSwExdEJ26KZtauDZGaai6YXcJ2dFgY451KJTvFE9G82J6iC57yobxK8BbQ7FkEK8wvCWKrPzmQYwr",
  "key34": "2ieKXjAvTJeU7iDvV3DBiABVwTi8UppVtQ8fTduWBE3r9rJTyDcULp4CnYU2merCGNTErpku8QVZLMuvHFX5h7CC",
  "key35": "2WQWwCH2e5jfAueyh34gt3BA9w3b7fnRDPZ1WUWDLtxpV1NACD4rVkqNCZ9fa6FJYn4rizfsJaCgmvmXz255LEiY",
  "key36": "2aU5q2FUma9DSd1KnQdR51hbogoj2JgJPRkVscibS7t9uEedvhgaqVH2VSm9WTK96PJXuqutDdCDuVCqwSG7kLdv",
  "key37": "5kUq8sRm7yi4Uz5EJpHXwYHdaQyQMKMQyjiYA79UeGKpMQcMcM4vzGqDd3G8pZi1fPrrpAB3sdD1U6AyaQM47izc",
  "key38": "36pB1TdTmKmQBUgRLgSvPAW2QbJGQKVsSoAubhdg6rzBRvagZFD2JuaPTr7rt3WMUmtWAqhoktP7NrAeQoHVX9rY",
  "key39": "3qRdon8Ws7jT5fAwvz3WNDrXSLaW7Tu27u5FquQFRHmo3f7EBZCJkHRBYfFkG6hqCxM8JseKt2PXmj53moxZrLMj",
  "key40": "43m4m1KvmLhS7WQh7sw8Zf42zgiihqByqgw1B4wfyRjnwBygRr4xSHkAHNKzriJ3oMRJHpcE7xu1dpKLSePiJCXk",
  "key41": "2hxASqXVdwMnQ7gxgeNtLsLRDs4rVvdeduiUsJsHHPNbdnYahjryLZFfVWTBfGyBmgJsZs5gAfAoVdMXicMwizn4",
  "key42": "3QAnJUKNPKGuCuKTpY6arQR3TG1p1mwMo6eYkVi7S39bmxxb6EM2vwLfgVM9CSPJEkvsvWTkxmevUZcQmMZYkdeq",
  "key43": "b7dtrKqdb1bqcVQs6QvDYzmdrtBwxEgsLzxbZjkv5h6dx8DnsfU9TnfFUGBhH8KBHF6MXxuB3NhQY4M4cuHZiVA",
  "key44": "54HqNb5n8B3CPVpA9J99Ax5QhhMViUFsi4qorBrLPPJGitd3eZ8MKq6gH7WmLWM1tXbr1CB5mNaXdDQBr6Qf2bhL",
  "key45": "3gJr6oY4kAGw16JxWv6zubdvPEC8Pi1DvygecZ5pvpj2Y6aNrJ7QhPsmQsvyh63WwBMVjoQ1b7BJeiyBe6kAmfvw",
  "key46": "4pB7QpM3G9UgrnzNxxT6Pwzq5kYh3i31ZqDVyoFVQvox93zsDrujVyaS2NTfwckwEfXrUwz7vwxdoC2ShvcBdhxY",
  "key47": "3VhuGhJPFtM3WcTnzNYQ3HzMc5oJ4iU1LvpyFX9UWU5Fv5wJbGpdhHg6Z5FtJiiqpSHe3ZVcjD8STAY97zPCUNzw"
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
