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
    "2uWgTTXtKd6nkgcRDfL4KENTFBfqMszttjeuMWE3wXVP2qttScKm6c8aecgMeRKFywT7LqSxcDNDD2hMNDnhHgLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BReBJgmto15Ydw3YkrmvvN4q1HpCxGuXjk4zPB4qJ1hcqmrNK8QoBN2gY5oNR2KJ4DaZsfWhpoeYRmCT9WZxgv6",
  "key1": "5qzzEKpQaiaJ6EF5KLWQsMhps7kfBzV564DQsQz3RVhQQq6zES3MYmSzSwjCFYntYvSvPPVUP2Nmq1udXkJpFYS1",
  "key2": "5XVwJtSasZvXCNFG27rRWouobCpeXfiVs564hJJV79WKHYakWPeEg9FgjKNvHp4ftUzEm9C9jgFHUXak82yfMq5R",
  "key3": "3fiGPivjHAYF5pasS6cBujq3zTWNhkuNcfC3e4VMrTmUUbKYhxsCVQtJ8gxCqpBiMaq2GWvcBerpLnz68Kxd5MkJ",
  "key4": "3C1NWS11hHvMDUVw6kNQuQsUuYRsH5P3L7S691QYucz6wFKywWFB6EzNf8RbRYabhU6F65nQ1mrEAUvSwUPuo4ZE",
  "key5": "4zD23mgtENXCM9NGiYstJaZUWAJdTdiozyWLenjPrjmxdBWoLzsLAZYLs9rCBFueBpehp6wGjqjVPBQypqAhDV48",
  "key6": "5cssAWfeisSPtSxQwQBTBsYKwQYU1xUQ5BgNFH8rfhAhugZdQZN3AeCSGQBCpt4hThBkvRKnZe8kWzsiTDistnCN",
  "key7": "58b3tUvkmiUmKMnPYdoXXRfLMPdd6uEJAJGxegxEwWJaqHSiiAHom7XMDbRW8eg6acyWGpDtE8gsDPRgXBz3wYJQ",
  "key8": "2StNyHWqPDNtHujrfXD1TSbNkZpZC7JGgB22RDbWsoa7aYNnRwATeovhtBWeBMhAwARe3PYMLMTyJ6avetJwpR17",
  "key9": "3V3jVrJuy1cbBcvY8y8SMZA2Cv18fS7RrEbhzgGu12mGJ2TyjfBVKU7PEBDr4sogFZneHYWVFzEdh9Fu4qrNnmFx",
  "key10": "5CDLvkGZpDtrZ38UqLTW6vug7XPJPYoogiGw4z4CtiJe46hwm3BPW6UiKGhDbvcKKMJcc6PMeoMtvqngMXptUwnc",
  "key11": "5PDQcWfKxwq3BwopzVqMwJc8k3vB4RnFbczcHHxF3AnHzqnKHivazBhieyWWseqL6SnuSZkcWBZ4ufUbXYdt9ot6",
  "key12": "tZPF592WLMZiBhBLte57jpNQezEhfvQsFBnL5jvjurLpqtRiH9og97r7N3QgDgXgq61Vj6rztjKsFnNreFmihFc",
  "key13": "596qA5PUpQVC9qDYXEydAzvki1MeGSixQzbxyrpMQ3zqtZQMxf3ftVcubb3Wa9avk8mvVLbgNnCXimRPYzyTRH8G",
  "key14": "3MrnZFzCdFi7gAJek8WQGEwKCgW6JZJP68JZgByCeRWk81xyQwum3dBMiMd6PCr2BDEb4Sbk9uekLBYaHtew7RQr",
  "key15": "5iSiGVQj8TG1D4jSpqqJhk3uXtAdJjb1CQ3SdRraRACdB1BQYw4RgFmRAcBhWFAjExMMvmrGM431o2a1exHND11K",
  "key16": "mVhmMmvhm7Sz1wHQV185jTRABiBD65YJb2iCDaHZthXQWCHT9Vm753gWCBthYY59SCgxrMVB8p7G41yth5g3byx",
  "key17": "4QNRrQynoCaJ8nqsqisvm1GuQ4MpxQL65b4Qb6sf9gEs3qQnL7wLFKargWYgXQM9k2GMBzvTBjacY42bM5rFixX6",
  "key18": "nALnTRnocyLn7TaNuesTFb5qoEmmQ6NG8FanvEjqrTehfAW2gVt6jHbBh9JsfquKZqknQsy9BieAwjRHCwuSdpg",
  "key19": "67bh22Q4aH96VzqJuZs63AaCPH6yjREPewRjb2r9NmautktoRsTBekXG1WeH2GvqajZExU52hu28CLRBKAY4fnt",
  "key20": "5uxf164crzEGaodqPtPgkFrP6oHWQ4aewvbTqHcH5Z4RMmaFSW13FsbuYkrLfEaZ1hsAcZ2pTL19KEhEcXfBgLDa",
  "key21": "4Nod7vERA6LWniPXL71aL6PJjeLoc2x3i4JJvoBMn6uWmZN85Qon72ARQJMAejbxKXXqkWVgWEAWMRGcQyDz8kG3",
  "key22": "3X42zQ8QEbGvFx2MH5wbveHtts3HV8QWw8teNHRERd5S7HuYycUnheVvb5x4tyYWASYLq73q1ikG1MDd7g8aCRbK",
  "key23": "5xLpQZCRkeTsnPoAmgX2BnU19pCfpgaQzJH31VRJDoSaUAgsPCsoRKT2HqRSkFTT99ZWzCsPcBBnNmiufxgkUC8x",
  "key24": "3mCRCYVc1Xb3SQUGVNje6tm9iyWSWpcw4Jdjtbu6EJGSxjKWJQoWtrqHwXrLGWRUuKX9fqi74rKxFkNZL9PyhX2f",
  "key25": "2LsSq29CmuoYvuTH8QLVBsnpoxzJXAwzuQdpmadp42nFHbjvkgaysGWpfMfm3uHYkawftn3arLvs6vBcX5c4bf8o",
  "key26": "3psRAdCkMdVjZiCxLs7Zujd1Ww8fd3GHMvn9554yf5Ap8rWHdrxsWcULWqrdyYEGFG9gwMEnQZj99d6NpRU5FXXk",
  "key27": "3Ebidmo26nKivRyqVQ2uipquL6HgZhjEzfGairo5uKJrfGda1CTENxRfDLUsM6iJ6yFQd7s6CuqDMvi9AdZimxWz",
  "key28": "3jvLyaQhzkp6AiBLPitajznVgBEzKsJ9QwXXojV8JJr74hG1gKargh5yuNaQwKqr4s3JZSdg7GbTsWQz2Tgy2oPc",
  "key29": "yP4Sx7VssTztxtCG2aaUGFwzH2AAmmcXiTqzMCkETnp4WP5PsxxrfyNEADwoYVASpkFDRQUQV1FeXWEPxeb2UNy",
  "key30": "5AcREEVufEqn1AbHQWroREyZPqMR2z3E5g89PTAxtkCWywuAqUbvzTwnjEBZvtya7bcicCDV7CuJtC2tWKRxLbLp",
  "key31": "2wxp7AnhnpwmoiukbUzSkMo2Sx4vdAh1t3t9Ri5HyY9mnTfnDXxFaRBXyegQKqKFTr7c7tStFrZ5UqYMuCBwWh6T",
  "key32": "62faBvrAr3qZG4QQ9HrwXnHcW1NT6B2MGbpA89UcCDEh81SdNjsqUxiWQeECEpJBL63kuVxHVz5oWCeePzhH7gFu",
  "key33": "5UzhCkyfPBsPm5NRAerBiZHnRX6XXV2ZYXReWM2auAFCW8ik5NZkQxjJPDSxJ7QXWJEtihMSoSNwe6zrKVSSDXvr",
  "key34": "2XvddsoTTTegz5GrG43QAQevzcjd3cQta6PisSQ2PJKuY1JgkeEzZwcL393KWESiHbwDvzRdTSqGrFfx1U14guap",
  "key35": "56EQP7UQE2WgTccY34tYytchKtu63ALfDqKeEk8w8HEdRDJAgF8haKtYWnWga1wdDijS2PMNUsqec1UxKQ1Yr4z8"
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
