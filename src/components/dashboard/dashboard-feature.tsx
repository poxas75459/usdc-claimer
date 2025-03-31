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
    "2pkaziYSQG5senpdkbso9ZVsFftmivSAw2UorGdQEfaZPFRxJTdbev74pzctNa6bd5VH7C5AegBhZdCFfbGWDiES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoyAc6NJcHSmwwg6WVtwSEjs9RB6iwoCSbohd3MBPZzmvt6mecNBNjVZ1MpxWwqTMP8s6DXuoJcYBYHrbNYQTWm",
  "key1": "5GBFKaBF39vLhVLyz7Ng1f46MAp8My6AbjfcRddkBwmN7RuAnLZXUw5ZNfc1CR81rMesfgZpNsrLvLtN1MSnUM4C",
  "key2": "56mtHpom8FZHhQfSeteijZSAMg7xNFN3hdSSRs98rFbDjyQcoZAQn8w6bfmmjyt3fGftoCZXgMpLGvfeb55AHjgH",
  "key3": "4xNKHzHcri8C5FXW7guoPXHpt2Z3EczL3PoxKbiib1qVqXVxG4WEbGgbZuDNSaEZtAys6PfDHb9ds7h3TQhPEfQZ",
  "key4": "37dypnUvJRGMpCJBeNSkSaXpMm2Hr7uRLHoLkFV6SidchxWKSSmyzDVuYEc1Q4kMoNguLBZNXpT2Jv52VEgeik55",
  "key5": "4dyQpToYqeB9tzPzUw9bsNBECZm3xjN3tKsUth4ofm3yuMpbNurNRrgMrxuDsqNg6SUY726AXs8HTbwwim5bunho",
  "key6": "ud6CHTGAaE27PMVyjBeWCXWk3VR57hCWXZnb7Z81mTDJmAjJCinWDKtqWyyz7pVL6BLbrq49v7SKG66aPpnGevm",
  "key7": "3fwXx24cnjq2ZrmRFVwFEqQPgdzVyAejLWwmVdpzkkru1x9L5WQEz7Ctg4w2g2wyx4BtAMqE24PqJDaNmeQAWaEx",
  "key8": "w6K9s8TxJQR7ikPH8aAUjkVbjfvSYonHWcaPU6iPtc74Zi42CS66DajHBw97NozGqJFv2xwwDnUYecvhNs2g86t",
  "key9": "5Z6PZvDk4ELawjBC65r56tGrmczQeD1RXFX1T8ck1X6g7S1onBV576NVtEKtbWyM79vAWRqoWiZccuwPpB2tSFKy",
  "key10": "4skTvxqWGL4LvXKSHj4Jy92uCuXgAmn32fUSUAk2NJjfscpxkFrySiaXo5MsNmsE3s6dmtX5wqfXv4JhQpG1arng",
  "key11": "4o6Yr6RdoB54rJUiPwXM6dDShddF5VTGA47WanZcRvytwtBnRYUzdTz98PCu8x1UEAkcZtCuPKdUtSX36sgrr9oV",
  "key12": "45Q7ZRC2BtqtsPevXRHj8HV99ukvZV5UkCvTNSt9cyXJGCjWbMaSwXu6Ritt4pEzq4ULaW5SKRkjvT8jqwsPADkq",
  "key13": "EyAAhMn6bLJXwqU7Uz4kfUtRuE47Cb2iv7oncx5RBab3jvKKZJCSkzHr6AyTNSp3eHLZV16AT9knkMSh98GxD5h",
  "key14": "5t7X5eVEPeQyhq5dLZRcJuNGrTvE3N2kGbWytNvbLHjvkbdMWntWLKNXdrhVZCaHe34XxkVsqwSQfdgoTpdzCeF",
  "key15": "4TxKA8GYovA3xmEQjyGnp9iixk7BPPM4YoAkScBogS1PgF7m8dss2kZaYG9gMG6NpDigazwvyBhFpZ1nNKBJN4Zk",
  "key16": "4wmwj5G7kWn1FckwZ8TxkwjF23joJpnkCj3ugAvKrLaCMPkJZwnQxjGHcogtvZbAXmiRNRB71Mos1YUS4fAvP5Np",
  "key17": "MzMDMBhjWwSVWvCMzQ4CUrPh4PYsdsbXY8WPFKVAtenBs3pAGESrYi2JkAP7T5c4nM9tYWbsjuAFf8xyigchAba",
  "key18": "225fodQnHBdvQLtFFhzspeuXpFnLpSgmtDQbKjALgUVERWJJXYaVLJ28sLsLNzQsN2YR5w4tmrLTBwd4ZYryGNjC",
  "key19": "F76dPKB3eimWN5U8hbDQSjKoSCGwHRmy7GmfgNskfY52erftZiMbjAunc7eSgrGz7dPzHDy1pGYBoSCKQD5bjQU",
  "key20": "QCaFQgiWfbP3zjGdD4pLiqQcWk2aQ19qEXBjJqSpyMbcVUgU9aWpqjHENx2ESwYcV3FHgJX4L9GFodLdLH4MeAD",
  "key21": "XQjjjauyF6aHbcpWQh7sBZT7GWPXFGz9u5RuP8uXfJpiBzw1ch1EgZfEmvNV1n96M5gBJiAkWdEz1MRS5mdZrCG",
  "key22": "3g4Gq8Lc6SBpzheGXnc8MaZvYFVPCTMzv7V8aRfK77ruUWjnT3PDmasSa1tQU5EeXf92dqJ6h5pmDucAsPwepKpf",
  "key23": "2hrq96k2AZZwsYBqmSeYYAzw8gX87WArjhRgwoAAKyBc1sRr4jic7dpzwyEUnf8QDEnqtc2bkuc5WbXC5UUZnvWG",
  "key24": "7cfq6fZMhFMCuNGnYouRBp2yg7Acja6QsPgc3ZrRrcqsWR4RDR9pbpLnPtQKUZCvFi8t5TTjmxNy7VruGd3qaZQ",
  "key25": "cYQ6WCev3aE8mRS93LvGaQh9pZEK2esAi8NZPHXYWAdQeTiFYrih8cQv6e9QwNLU2RiRxrmcDzamKUiqZWdq8KJ",
  "key26": "5kbPB8wCBqz11SR9hgcnEa7i4CFa51TZbd7513A6JWF8UoewZmLvdeNMt62uQNBpLPMmuQijFZde1qD5UgH4LhKh",
  "key27": "2md1iUsSJzKVLpna3m9JrMZmSaX7uvq6GgfZhmcsR5DDSkVBQENt9DGoDL6HLg4tgCNJ1tdrGR5YJq2ncok2oH5p",
  "key28": "rmxvr9jcjrBSRJq2ESaMTWU7kMn4E42Topx276eQan7yJRdDoKT8ZXV7nDLFQ5qTRcVihSapD44U8xBe5Miwqs3",
  "key29": "2VnoMhC24kyQp5tavPUaT3SsdwFgLbPyydYavuRQBvN84BeF1Mw5zZdTrgub8hU1UgJT2gohpZwzLpBFFgZxCWVL",
  "key30": "2zsgM3kC9vL777EsedDB3eRa94eiiARXVZWQQMHZPt3WoZFZRNLEZC17K88oJWgeJ6WR2pfZwrCAAYZnpuFiwAs2",
  "key31": "28b4o7q6kXM5b2FGhfYM7nz51BBuUmmyi5s25FicMLfXLyrqVGzMsSMyaPdYxFTHPUsvna556HQ6ZAcnKLsugCYi",
  "key32": "5Y3rBYpy7FWfV6mf7C4QvJxpLRfBrBBre4YDKJdrG28tpxwsGemFoURyFe9teWNJHGw9dQBtZs2E8bwFRNjPE3zJ",
  "key33": "2DSHChdsMUWKXo3Ss1iYJDHxXwRB4XzcjCrAuq4vB3NafmhZ2afRufHXcFvdSJhLqn5rpPiPxGD7KnLrmrxxGNJe",
  "key34": "2pEgk7GTt1YguTgnsLiGjXPhwUBgq5R9Q1wmRwYZpSs2khkvYwFkrkxgvBSJ1v8vf6KGrXq7WEecCuFsQYEcP1kd",
  "key35": "4X3LR2gdAoyiSxpqJAzXFxpssdKh5DthMW9vA3tw2eM4hAyTzKPdWcgZpWUk1SQUpsnJQqrcU4KbHRNXLQQX9w67",
  "key36": "3TLZ561oJSf6Z8siVcz3jvF4do6tS4LrbnUDbVxvYZMdK41MeCQg8zr47LAR2zRLeCU9UgtwAbcsNnxWUEZ8xPXk",
  "key37": "3DgfhaZTJXWXKkcgxZHpCt3ft8hBTBFFiNR63FzNdTFfXEHADGMdMfkAqHcnhUNayztVGpbtq9e6Fb44fpUbx17F",
  "key38": "2kAZjbtYHfDMdywSBS3HrU4H2RdYX3wJqv4vEHTZyKXrqx16pFnygVLJNvcaFNTgKnPooS4rAMtcEzxivYqZHNSq"
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
