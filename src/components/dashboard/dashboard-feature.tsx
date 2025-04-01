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
    "5RFyomyPPQhGF42tyKudaE94QCs1nzff2gJNvTipgUSocXcfS3FuJmNVY212yc2ErZGJPSN9E2hgnXxtfTfx5dFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9A8SWUbKzyprMmqwHjriPr74Fra6mWzGvu2AKFutJhr2w1ABB2qWCCRDCMc169qwH1rSHNKeaC16AZBWeKHR1c",
  "key1": "4Kck2RzsQ4wngFnj41zBESat7E15VkuYmHpkPs4gTzyiK5NjyY2oKADKFGm6X8gCyJtjZBvnjY1XvvGtpivwzTZM",
  "key2": "Mxn51pLtSUX1VpoetXqkKFnH7P2XUS5oHrpqvmeGGGtpJrU6VvE73Wb1kNsnhdfEszEE6J8jyBiF7qKauBfECo3",
  "key3": "QeR4FzDR9chSiPjXgAYvToakpEJxBa2GPGzvVo6eYWBtAMGSGwFAMXrffpodXwUQCwLrSR36DKEmX19Y2MxYpXW",
  "key4": "4k2eqYxV3HFqcDxQcRVzKzb2rm3VRqgtaA4YKg3DhVUJSjNiwqEdaw6xc8uQQSUk5yJePfpTiDidHyR3NcPgaHC1",
  "key5": "22GhDTbSTJiaQUP7insfKUL1wLSeMa3YdCJSiMuSsyZJMx8qasMrxUfQjS9snuZe3Xvc8UTW7Nt2h8PFV5ZR2Heu",
  "key6": "2wEMieTqBxEktUo6pkRCB3ZAHYWJhzzNcGZ1yoXbz7PZxez5U5gMUUdgQCQwZD1TTkeR7kduFnAR7M6BnLMVnfr6",
  "key7": "4H88cfBkwCSjmQ9uw28FBrvEQVNqhU2GtjipkT3VyQB1NebRfnJGNrs5qKvvTWoNc6SbRqQP7zcpCudMrwh4LywU",
  "key8": "5p2quDqRj3xvsvxHrQmwsV138EMZzBpYrwjxibww9usYWiPDLWWGPXfQCJqv8UDUdnfFfZhyok5cn2K3EUz87rsL",
  "key9": "58ZyTPqLM2z1VSqKk5ncF8zyzGyQwZC7dV6XpMD6xK7zbY7M6QKU1X9uxyStgVC8kyygy1SGPr96z8pBmmkGw2My",
  "key10": "4skoJV35BpD1AwrihxAHoaHFweJ5LZd6VRsJDAJLswhvbEZPKsWp4HFx6bSzuLoXwGDCkKdTKMod9xABjYZF5vAE",
  "key11": "4H2oEEvRp8FjVm5nZuNNkm9F7LNJkr8mNyZLQCNE4WtBHsWWKDb6M189YkQUbAxYqVsL4UGHG99Yiamb5eqi7wrU",
  "key12": "jVeY6sWQ7F1kPVPhmQ2LqL93jnEHDGiCXfXRTqXU8h5yLsvsvCnKYgGzmLUidoXLFvwMeby67oekSnW8w6iUEoW",
  "key13": "4suYFZnWR2rv1Ajoq44arKA6EzxzkrSKnLhwkFZqvTkjSND2ukUwSSRTrcPhWdz2kxsv13wzwvBQwEy6VqRy9L5v",
  "key14": "PygWD4ixF1oaq6C28xRMeKgQsaHUQq83eHKQGst62pLDQsKBkdBE6AzR8hHSYeg4zmuNtvyT5Ss2ToR4ZAM81Na",
  "key15": "4c5F4iUCrakPxdiZbWWcDcHEe81hPgP4xjn972DALpWrk55o7xoXCky6q9pLdPKhRX14ECLGCX7XD19RCFdbWZnK",
  "key16": "4XHnWJm6cSgmaeKryn1xXkbLGEnGTX6PwzJm5H1v8xJYQ9GEbMxfRnkdJYHXULLxjZ4MLdSxVvWBQsbh7PexdjMv",
  "key17": "3PhiN8gqGhTtXiN3c5cab67QUCoCXeYMQDchD5DLeGMUaLbtwZQm73HHGT1aDEZtZbPBC93mpiC4fBjDZU5vcxwc",
  "key18": "aFF6btBXbBKvNvFKe1ugAhCfiBdzfE1XbrVq3C97f9XJ8fMRhdQRngsMkfZFUSz6dRbwDZuctsx9BThEhddkRin",
  "key19": "4v2NJqMx7tovasjY8SRPesnJwW56uBmzMYDEvdNhML1B9N5yJUz77jBdm8GYNJypUsUpQB9k2G8dSAPPnNm9shz5",
  "key20": "4gCuAyY57YBEj4QVvUPSTzhTKJddy4XsMVhktF7LC4VVBPAMpsE6rTYBTdx9EnrNyx1a5kQ669LdD5HbjZfaFaMa",
  "key21": "5gx65w22D8wrSLA2TpKHDr4jmUYpA7TMf6vn7Aq21LvnmPqDQB1qBm8o2T27Yy9aNBs5PjApawD1ARZ9MFWjRN7q",
  "key22": "2Gf5qjZ9Ak7azKKvmiwKubtVhvhM5PiFjNs933BsD6Ug3qAQWksHZjYgmwbEaa1GJVk6tTTuKXqAfCfdEdFGLn19",
  "key23": "2AQXAKjHyEGUEqMm1UYntXNaGe7sKi81MD8omPUHwu8fdS1pmqNNSQyaspbPkbPjW3r7bj8yFp7o7NDGL2uKyUN",
  "key24": "2Xpjd2TWKQxtjHSGNERmtf9CPEcjR6dP5h3weMiiVbX9hks1VnrssSu46hMRjqSUV644aMPosfEWHXHU7s9QcYr",
  "key25": "3cDGrCEPHWBve2T8jUyxC2JUbTxJJq56Kh1UMQUAwDuKRRjyMGsvYwja1G97tZRe4sZDJR6kGhALSoad6TdZX3Ft",
  "key26": "5gPymKpYxwyt8utrB4MW2bk3A2VCotqorc2Y5QEvKCR5Zsk85tXxyYE2HwE9vZzJJmBLwdkBYo6NdnFmnZkU3S7x",
  "key27": "4mFrqp3gpPfjZAPCAC8hJ4nYMARCVp7XMUop3Y7Jrp5GYu3MHQoRX3qwTP7EPJj5aCAx4NMgqRc6WB4nxSxtqhtZ",
  "key28": "4mJpFqtBe7gyHZzEgh1CJeWTpkR6LM4sEZb22XsRo8zs9XBgmLdTi55Fj5pwcqvoMcVGbzfS1aVKVEraJjKkfHjM",
  "key29": "3TAkTiBMVGvs7EJJBdhQAtCFq2sjq8c5phcYchPx8zCNgWPowMLn7Dt5hNuT9rfJZw1DgAQPzX8GC462A9dPmxh9",
  "key30": "61ysYAQFZdFu7rMpBFM3f7Fmgse7WX1iY42Xiv59Kmce9cYXVA3fxg2iuNDRemJ731Ssmev91YYhBcykLgSf7cez",
  "key31": "5swXfBbgcSVKRiWxb3F4sXU81GvkNqTkcdHBsD9AWRdLGWae3S7Qf4is66jnvdEF4kiw7CDwPXdGiVC86QUkNK8U",
  "key32": "5yVsJfRaiH9ntTat93JdqTqNjpjpm51Ex98tQu4qkziFRckb6Hamtdd8n3prdfBFWVdZif2WQch5s8idMQ7Z3ULq",
  "key33": "35FcnCFcWpdQNStUnrk5zmyub55mN8irMwpsxCp1qdy6CHwqrHNyGDG1h7ySP6w1Va2EeCZ8c6xj7tFqPHzuvdHF",
  "key34": "5oj55B4Lbe1L8yYcWyLGYBN4NHVcFDBqcGneHEPk1bkzG1zHXbQez8mQ14NdHnF17fUWenDDJvAiQcLXf3WrS1QH",
  "key35": "2GhojQ6yed95yD8q3Z2W923SwAv5o5kWZ5pQafy8cm661N6mAngtwNhNgDcP1FejxuUKa9FXxQea6E23yeBhAqBB",
  "key36": "4mzH6shQdsFAwry7HiWYsrziptmNc6EKn8G9hmEhFtpV56jUrL9ePRiTHj8kQaXQh66uaRBKneNA4DV6xuioPigm",
  "key37": "65FRuSvugZfQaDVRJLtJrf7wpU5YKZYMxkKtMdGFZqsJ67PgPPuCe7kwGvnYKKAtME1e6rf44vAhNkBvjFysPLfk",
  "key38": "5nbq6EWbEPYNJvftF9WrEPKbPMATf896RWGKMez6a2D7imdoqQbQaWSiVKmjuP47i6SiygeGaaBgSbbUvvr7qJpv",
  "key39": "34vpc8PwZscCjMU31SuXxncZ5DQ1QrAXNJZXrUvmhEmfNwk3xyrpf5jcNAMZso89mPi6XQkjwB6QadDa7DZuwQJ6"
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
