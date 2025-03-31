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
    "kewQSkGtmrtH49QDohQfppWPe5uEkULptyWJy779v8MM1nvTzspi7qycnCRKg8tZrPdipwJNCbNkRLpPPoYSTFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6m9vSBR3eHMRyADKBzZuf9zQ9NsihWkq4jxRFW9ce75P1Jx546W7NwcSzE8bqngT5nRSxsec4wCHnfgD8ymSXp",
  "key1": "27zB5tPuZjvmH6S8273LgKZHWmFdwHVzrLqpuyW4AKMAK3dgpKapJHWLvhcBsqDgo37b1MDJf6fAVU9bnx1FSErF",
  "key2": "4xBnqUz8kbiDugDV6XZk44kKbg9RhSbAHAQ8MMPS4aVBxVKAaYS54w5zVjp5fF56BgttwfN2x29pWhdTdEEUQ6bQ",
  "key3": "EvoHGBoEFBNpSyhKa9QXNfcXCUZaGF6BUDSd11PXLQR44uJeFKrx35hNom3x37Hey9ta8YKMAdhRUGXi3dcjcpm",
  "key4": "5rW8F1jvtZDzpjRPJeXoGcatcVNffuLzA2nCbWHHTTmpEuRpQR6qgadqGCA5oHy8FrWMV9gmKWu1nxVncEMPSSvZ",
  "key5": "5yCjog9i5Q2ffphVLBVFr3drre1w5KAxAbPNT4RuZDpqVuYXwWvehartPFmES3UuyNyMXAaEK3nhykeupv9wnpUK",
  "key6": "39bZiFQpV9yvYakmkktruoRurgjSsAZvFrKMpXm89HJPWbbp2kkiQrrh8JqjkoBhFb2RzbWUQKWvXcpwhSsLbDeD",
  "key7": "4Z4MmCAisberZt75YStsJwd2F7tQSMqYqXS9oLYtmgqrASUyg8nbqQYFHyVD38RmKhymRyFb9BV32Nf1FZxgU2y3",
  "key8": "5VdtTzfwQT2nDH8JKpruCpQnGxRQCeigytK5dcwgN6KHYWwi5ogpBmqxZRt1AM1aMcx3C4SUYbpb1ykf87WkuHEM",
  "key9": "43Gif6E7zmMHdHUYz2o9nKUCFEZTW8SzMH2ScoKyKwGBEWfUm5xBgFdDq9mwzcg51wYUFPYgiY3Dek9DpfYzVdJr",
  "key10": "2fXttu1V1g9RYhm71kEtwk1XxoBYCYFUcGdWvaHFzxR5j47CkL7ewVQTVgQ2LRZtv2HDhrtARR6oFkFxReZQeiSq",
  "key11": "5ygj3HiCtBhA7HWhhmiR6dKskX9Vz44B51e2Wp13ESjPy7ENn2pQDVv1kMw4Gi68Dq1k5VNqvubBmybwJi1FrV73",
  "key12": "3tQYSDgcC3VfRekCcTtgi2jzdTweXZuRNoXgR2RkvDp2EiQbSTFMe3MHenp4LYWYBZi1zjscMhrepFEnPtxUq8rw",
  "key13": "5UHXALvbU3fqwesrG5Wz3eKut2gM3Jts8Rf2Lrmq6wWQ7uAz8eHME87QDiCPNZsoDvKFNE25r3PBDDEXVfKJgP5C",
  "key14": "tvJxQ9S3RR3nMupKfViegTuZ6aTQyrQGTNtTYkYrsGEPHNyBZfWonUn7MXLoSSt9ZkRnKub93eyhfLQsbtvjkxa",
  "key15": "4PPFk67e51ShgozdLgoANhY1QD9EaHp7trjEsBcM14PboAEApc9JVFhDGTrABk12ycBgw8nA81t6N9uWLYtF48x",
  "key16": "5qiGfqn9yBHgDJPo51BeTEXXFDnLwczRXbNVc4dUrrPnWJRc878KhxkxXPeCaJLqHweBK5UBPLtHNQdx6ZkqQ2qh",
  "key17": "34Nawscqyz7eTjjz2fUpHJrgJvA7P6b4FtZ352G3pX4X4gMcTLUDiarm6NyWcnx94quSo9qDh1hH9eVen3cUAb2A",
  "key18": "cpAhJt6yudHhpfTww2A6zXoM8HzsEDHq46RKCgyKMGmsYrdVt1imL1cCTMS91k8c8nZMPr6HXaQM2JmX1zDqNWN",
  "key19": "2qkpqac8aNu9Tfc2AwPQYjYnXTkn3KHWSp8B3vUDJuJFBbFzSLJaw3Cn7aKVp8d2NzX3PhnhaXy5cgv7FjCiTZ18",
  "key20": "3Qd3Eaj28YEFb27RKY6s17x53NJhz7oSP1sdcgcwH4h1cpgSEQgZx7KjzhqPjsuKMrySFtooHS9JbgJ79L3S6bd4",
  "key21": "2AcigncD9dtBH56aLt7V6A21y9RLzn6wnBXzj6dSAqdweh5S9Q1im4R4TMsKbsdf5JcDupXqrVJjWurXBiWNThVs",
  "key22": "4WoNNtc9NXJT99zjSLvMjcMHPqB4MzAfoRcMC9MLgFRb7ieAEYV3GfDwoBbtsPjLsR8Q3cyZdRbtjnfhDbTwjHMA",
  "key23": "5NiVTSYmMbspW8vbUkCsKWTjoRbSwYZTsEP3X1KLp4qxqA6rWDoMMkz2KeBDEUr3NLrcbQi6kfu7qfvDs7vB25Wk",
  "key24": "24Tx1khRLmEbYdtjNQo8qaJi9uURr78HTGqC4sjfUk5JaZnavgnyKEuSpWNwtAT4g7dFoTjaurPi9JqF9qVqrkoG",
  "key25": "38HopWMyzH7Xv6k2pehGDjWp1Xe3ftEu8FGPeFMpYKCUw5LC4uVhC8tRMXuywprvBcsNowuhj8UKXArveJufuHE1",
  "key26": "3BqRM7npfKSauUg4eSrZQztvKSAPwJJ6CqhfJAEbm5JZW66RZP6acoyFG7w4mqTJbSUnuVeLbpLzi54rm8b3hpLp",
  "key27": "kZ9ZcnjQe1E3GjmnKyPL1X3eNvsJWu3KAMbgxdrv3tiGJ5RB32aTrYUeRzxvx3TweRXvPv6HGXVWdrBAKHgko9t",
  "key28": "SkkFaVR1uGCSQtXDgswyYcwuANZqoS6LhMP73A3JF45LXm71PikSpgDGNcMW9UwXqUmWc3CqDcFdLk2HrPhYqcG",
  "key29": "2iwRsHkpZ8h6uDtbNShwsngN4MJEfeELuik5tZNa5iarBV9nqa1GhsxZXqaA51dQkc676DMC3Kax1BiuyfGW1DVy",
  "key30": "21e3TcRMCcAcKsUDHVppircdoqoeSU8ZJZ11Hfq1Jbc5PiC8WXbJyuVPLQQ2GF6rT6WpzToo5LmTrkTWKkgGmf3Z",
  "key31": "5L21dhfK1mbstvFzeHtVCGf7zQ8fwrtwgNUCxiX5KT4yraoTcNVKq23rbdNX3mWnECPuKe6f5BeDCSgsZCvkb2SN",
  "key32": "5ZeKYsMrB6HXCApGQVusiHbti8pTKaweJkjP32VoNztkiPqXQBoNqtD25GP8QyK3Le1Phz74548sHM7c75MoeFSa",
  "key33": "3MEaEe5VikKqmY7U1Kkkg64cCCy58tcPCULKsRwf6p9Ynt9JPfQQ2BNfayQMeS1JMNS5bAUiawPba39xTRrmAi1r",
  "key34": "zWvgYKxYkpp6DYbMSpcaVajQuT59t7REYJb7GinsA3MskDWmbSS9GqSfmttbXsCk5G9TGeFx5HiqjYT2y4NPpAS",
  "key35": "5tTYja6zfnkTSUeNNiZ6bGZpUGGoBHqWp4LHjVdQPi4yWzCzqFkc9BpCiGtcvQCHP9SFy4RAL9ZC2BTAbMNK6Xpm",
  "key36": "3A2NemCMZYT2yHwwh2e5QKzkSZ8L4Koq9wVaMQRs34SeZadx3ZtZWXJkgwPuFa21zETdqsVkbcW1Mv6PsgaHBuCj",
  "key37": "3TuWHZCDZan3MfDzYFACuzYeTh16dQVn23L8M2JVN99JxhCEbfG9wdcUztANzPL3BbHt43rtwDXAgGKrEP7EVFxC",
  "key38": "anKgV7oY91Dx2N6aFR2eVXALi7bBDvgVwK86sw1m2v3CfKEfN9vi5gV516qPAZJ5uyENWNE8cZP1spyeGShQ2fE"
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
