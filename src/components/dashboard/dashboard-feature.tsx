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
    "2qofwdr7Pq1C2TD99Ep2Ng3byz4RZmnzvSqyNXFjBhGvuRkFX77ymgmAFoix9Gibg6oB4gJbV5rb9a56ThrumJDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13zRM7bYHFpJBfrk13XJZxdd3LKJk2FK35VxUpHiKdjU3o2AgRGwq34brVZ1Sm3Mc2zZ9U61jWWWt6gxakDbpzo",
  "key1": "4VDCLhVcDGskD1wktsemcEGTn1ncCPkj5YUomjvV2BUufmDyaKZvkqfLZZNF3VSVEF4egMbJXq56fTh41uwoZe5t",
  "key2": "2s2QnRuvhrhovytbTvZeXtf3iK5CgHbHgswsvseiACqqbx8LkBpFyBsSSMJRDYQkyJEXiopHVoVJCggRDHC35hmL",
  "key3": "38s1nHpeaKhoW5W5hmFF3ZVH7rU8Pxz2dyjix27akGhKQxDPFBp3wL4WvLkE9rpDWmoK5mp1rgwcg1dtJuyAQ7cX",
  "key4": "3iW6zeuj5SWHR2PmXHug8A5mUYKzdoMCpsAWF8Y4QdrftKSdM1ReFvFpaAPABsgXQVLcKbKKanfamiW8dNxfeJjn",
  "key5": "3QqJjt5vjaGuoa5XiSK9LTyMhvWBBYxmLz6X1VkknMjhxGQwk3mw9rP5tWckMrYhuEP4zFAnUFrvzdWkyHC1EcXF",
  "key6": "5VVteBTLT5RYxyNjTdNYDXwGgRgi9uJhNV3Lc38M1b4sKQWb7w4GcvWUt1ggREenA4DT3TWS6bPYbBx7xuUWJgb9",
  "key7": "2xQVXFr4PZc8kW7Tcvr9K8zS863Nunhxcw1RVCpQkPw3Qvy3i5awZy988RBMbBLLg9cJJEMFQFcHWgwKt5WqghjE",
  "key8": "q6YsSb3qxu11ySVgR9zjZd2dvog3N2FGFY35o6HmTvubBo1JALhNQ8dRLRiemH1kcV9DXQMo8pBt6VYgFU34dHE",
  "key9": "orRSYmhUXbUWBUKpofiSEuPVLEBiquPWQqdd5GmhLGu9hrEN5GVFfSssagMbmE887hJKYq3Eybv3bHmTKo96Ao5",
  "key10": "58EapqzPnAYSm3MzdeJvQmZLPMjoM2TQX6KSNFhyrHWpJ9pWwBjT2zRE6ndt1Mh7tvYgNGVpMKPy4D51Roq3UoRj",
  "key11": "5kC33uobpXek8FeYgbPgfYitH3CNJQDTG6pyxohRW7oEpmsEzQnaWpsBBBhsT3tdi2oXhYrBc89kCXexRkeVPZyb",
  "key12": "3tjoY5mcUBEpsJQNHeYSCA8nT7yrQMEShQpD9aUmww7m87Jqt3DixW5vteEGcSgUnrKVLzk7htaoTR9gvAKzSLND",
  "key13": "2yNCHJDn4uDKpjpwX5WQGeV23fWb17GYj6J9RYmkPgxgjwPrfkFbf3xDHapAsuhnVVFEkYfgpeQmE2TgARZKkwiJ",
  "key14": "2duVdnq3ZM5jKt5sTaE3FL48SbkCzvepBGVtYoZyusj6Qbd6Wjkcx6Qxjwh2CnqovpxL4UrezcrkwUqFmEq2D6Ri",
  "key15": "3WzaWvRfBGiLAWi31UYPPocyJA42zKemivym1JdWVVJE36R8U1qAnrxydnotdNTd2LYup4zzsYL7xwY97F4xcKjQ",
  "key16": "2mJfidAwS5YnEBX7tpqZHMVrBrxYw9Z2taZfuAiqEUcX3pdvfukquCD45go2TMLFRk8yJqdGTWv6NGLWXzZT2RB4",
  "key17": "5hZSkXtoRaVjbsKnoW1BwEf8cbaotZyKH8mXDeRZ2bZDHvHSVFApjE2G93DT9HVbcMJZSo666haxmZMycDCguX28",
  "key18": "qpRZMBjnErzTE5pYhbBPatfk9SSDVvVBeVNYChnxPavHZFoS3iaqArgi8J85kv3TgBsC5szDdZm8AkTc7yUkhEd",
  "key19": "hmw44EmFUZtJkAWCvrGrL8ibFhopfcH33a7rhvxB5kpNENAYmWD52ND7McUVQ59x9GTqnvPkGybqModgGJKEm57",
  "key20": "2qZCEVkZzJTiHU35aG3sn79Lns1fx5D2hT2vhPPCzd8MnpbjnaGeHXvZv572QJbKbQ6AJ3kuGyBYHwHX5FJWC7i5",
  "key21": "3cswG6PeQmQ8ScsRwyPMhUwzvvixwt91xyfRNap4fg6jF15puWnFu2hKyrrkSmYvt4WGPhNTQKMkgwvtxZJmauCU",
  "key22": "3bgtCypDWVv4wocQMYz4U6QE6Kaz6k29hkH3YCzCGApVtPoeCNTmbQRc4mpNVcNQSmRGRWdLZ5sFGFtb52SySVFh",
  "key23": "8ATZwRaBqxaxhLzLnvXe9XUYFtsHqoUofyZGHBJEfbZJR98Hcd5kqHoHjAAZXJMV65x6ubS5JL9NLAQQNWbBR6U",
  "key24": "DbdjGHj9wxcBsfTVE3XexgYrH6UYqmjZGHmgpWMYCy6LkkHXfX5cqw39P7nGAhSYkqS6TsnZKwWfCYHJv3Bvgcu",
  "key25": "4Eoyey3KZ1ppFLVYNVD3iR1Z2B8ndt8PzxYD9yAVGNWM3rvQxd53jAWuc6DMNSHLG6uBUTPoyJXMHDzNHvCbxDVP",
  "key26": "2V7SkyHsYkrPerzC1tJkkqU1CVvfRYroiZk3evCxPjNzq94a1QU48nTUw7ZMP7eakGyMW2qN8FkcokfxuHutSpPY",
  "key27": "UJ4ymQnc75Ey1jigVrjg5oaLpUMmyFzfWXXeNTRBiEmHXbmUMBSAZBV6WPSNmhC2DAJCudCgasj2j97foqpr1et",
  "key28": "QfPxVZRY4gBkijAz7y4GnEEHDoBjduGTsZyTHfzgCFJehsZ7rZRQcFiAvpqPBVsnnxLJdnGGBv5UrUjfrwtNYoL",
  "key29": "5mD9muHfN9Cm1WpqHRxVj6LpdtK5JE3qasgeDFyRK3oo2NjNrt2gpAHLrie5SkJGQb7sRes2NxPstXX9TCw8fR54",
  "key30": "2KY2xYXTyfXcfw68Mq3PQ2y88UjD3kzVEjt16NUgG1B7srfZSe8ZG8sWyi8Rw5YakZD9PZNU914NnsDYToHYtff4",
  "key31": "2iWfn4w579vPKCMx85ji9avtF6uZKzS3BDVw3xp1eay6JYkrXXHdr1AfnYVw56kfVcbugeJL3VeAMgA5fuM1JMYD",
  "key32": "5Zd9K2dimQn4ndgrrkC86WMAmUeyUMEiNoRT7Hub7umk37APMFLtywoZTRcDQ8UTXvo19FaWMbdaBXXMNjhaR2he",
  "key33": "yrVPxQgAwKHRZFiFAKQi6cmk9wABYWA6L5a6ABqKYm4SR7Smw6tdtLQU88D52LXKTLAQQq9JoAv6WX9G8XvXGKp",
  "key34": "4YhYQTYByizYa39wMSpg3M9WGaiSuyZj9oyh1UkaE7ZRj6jeZdFCH5qfFuTjbJvvKkVUCuxEcepPFH9Xwji1RJLp",
  "key35": "5iDGCDEyMU75HPNGCagpEsciojVF6UmchLdVffWrJC2U2Uie8t6UEpF49c8jnME2iq2zUmxcw5ZCzwrQVEwdt8Fp",
  "key36": "vJLooFFWca8BzjGnteqBCjk6FgVU73RqsUJdnh2DEEGz3x9eu33x7SShf2z4bAG8DH2Q941fFWAjcZ9Pq1bNvgW",
  "key37": "27ZtmGa4kZbjkt2W16D869YMEWGALksmjvG2bhwY47fef95XStrGWRhs9GVq4t7scg7dzVMRV53dFaWRjDkjo81t",
  "key38": "VGCTkGbAJdJ5ziKiy92PWkFVrHzTNn8STm7rXwTxqtKhrCryRfgzCQkUnfnC76mQkm14wY7TkunqhLHCaSorrHq",
  "key39": "4mKSwV9G6CJgyupRQitje7oAFspoovT4NkGNvQQaC9AcX2a1knooCFdXzzyykm8qBRAvvijDoUwj8vKLsTfoa9Hz"
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
