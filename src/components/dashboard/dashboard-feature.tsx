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
    "3FDhEhY3bL8k8wuDYKLExXHTmob4JpMr7yzcFcF2JNZT3W7EHokfarJpQBrXpi4SkGtWa7wqNqXPLcxicESyaYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGSANv3s2tLvvbxQ9jMgojDSQfAZmxzR41iAJ7TecyDAXwG2hxHHHh8ciX4HfWnw2qsFXbM8g9DBcZjbwA17DRf",
  "key1": "61PAi4yLry6f6GihoZMtpG2EEHJdGSjNfChtd6g6dSLwe2q7b6TWBbpKGjvNGitFKHspxtBZujsbhcLFZm1d4Dwe",
  "key2": "Ut3aKdQWH2cY5NSPyDLMdFpQsrUHLseXBdZEBS1Xb7emLqxtyyf2g1zrCbFquR5AUmBgVDGMKMdFXmcuPFNPW4v",
  "key3": "4yPtj4bYBAHXzxWL9pA1xgrbydLigBMRGFygP467Q6MhWa4DD6y3sAG9kih7tmfvnpaJ76kTYbY3div3A3xsfKSC",
  "key4": "5G3eac3vScZEBhxT5GHT76S2NdG1kPhtUhUEXsc8GLv784Vo3BL1VZVNsNQxrafjGyhfK3Eg8WiC8gtgv8VJucYu",
  "key5": "3DxLsfw61XF1hELHbhdW9jVqH3tGj4E4jUfLSTFcipJCrvdzedgH6NRDqiGWyBpHjVvRnkCezgP9FVn4iiPxyJcY",
  "key6": "5CwjsrNjYa77jDKNH4adEz2zSF2QFsm2qimBePwFdP6ngftyAuSjraAi9HpHx635K5RrQyprBYoRLh89FMfPYPkf",
  "key7": "3EzGoKe9LnkhbSWo3N4JMUJqbz9NYSamxRCtBFKYPvnHJpEAbNBk92a7JEvGHLLgJjKNpHqtCrjyuCevHJqU3jXV",
  "key8": "3R8i3HGkx5iFxPrDaeddNnUVPh5TFhgZMQYetkXbgdSt7anu49KLM4eNukCHWs4N66FAPVvCetFsm4fQUh2J64dL",
  "key9": "5FHyRbzN5BcomHTr4VtsybrLY6YVJa38nMN4Q76ZGFyD4dbf3gB9gXkTKMj9bBYZPXW3PApc2u8eFwGpaUt1KETz",
  "key10": "48JUjGeMifT7vQmhoo7F22qva3Ya36T8M9hX2kz5RkVoPVRtUAMQkBcQwbs16Dx8xG3pjYGZYRfaMZgCwWFQqe7k",
  "key11": "4i9SdbTNTJzWC9qpDrvcmPgaV5goQK64MdSmySgCqHFsxxgViZC4CzyUcFwKywFwsyw2drogSsuVyecqDyRF5Ym8",
  "key12": "2oCtfN7S1kr3zBdVGhZEWJJRjo6JTvHwc94VF4jgjPk4fjSRkZCBhosVkH4k4tC799EaSsGDi4fJpc5Q5yv4nd9y",
  "key13": "4yxrJvY3PRikn773PmMgeiGR6VkhL6Md41dGqf3UW855gaQYPjnwAkJAuQuToSmm5wwJ1CXYisVSj2gcG4hLgQ5p",
  "key14": "3fNrTxxGV39bfkCi5gqAdxJtCSrayqWVAooaPUpwFyiUdd4eV89PgQP6FiHRhb89Zv8gPKdRoitBLiNuPtUhNNqz",
  "key15": "5EnTiaW7iyQabap1wKxPWi1zVcuvVDAqcXnRmHdmEpPUQ2eXn1muLTxfLDegA9yGr26zgJxLzCYc8jBPehptydrX",
  "key16": "MrbKCjPeGtaq8kPHkjopUnAKEVeaEqCwA3NkPweK5BqGVN2wLfa4Xx96MR2rKZdntvSL2Xr8M1UFtTpABs3zFok",
  "key17": "2X4B319xFQ4krPMSamDQ22AGSge5GhmgBXUKmaDWydsmnTw6d4RSKmrsxF4tChQtKKn57Xz24cgigitnkC9v9jjK",
  "key18": "4PoHGcvK5H13fD7wrfXtrHsR26mfD44yp69XpqG7Z3nK8Fm9DsqEEh2xEibpGN4MoojJTs4osk8KNGtEMZDAmjo4",
  "key19": "2PKrH2rcpJuNYg6qt8DMGCjrn8mFWYa5gizY63kvz9ucbr8DHyo6xGf1piCQawiJn9mG1vyRYMvgc1FJrPmyoucU",
  "key20": "NWNvdGQFkvMeDGsMhj1i6pv7sqKyNZb2bCfYFAKAwJ4NZsMJMk5Ak3S25eWQ3LTmYyAV9NS9wKuTsjkKgWFGoYh",
  "key21": "cd3g9NQ1EVmBCYNnEqSQt7WQuLw7qDSpLa1rVczcdR7a1sK6rDrvJWZSuY8oRTn3eB14vCsWDrcUPsdebMMX9rx",
  "key22": "jvVM3JR67sDagMsbMcRp5vuNjAcNiVaz8izipE7S4LgFw2Q7XVene35LJfRFFShW8Lo7FiTvFwyh79jKnRD6A23",
  "key23": "2fuk99t5eVLfjzXxzhRjdYYbENtR5yZMpXiVW71Wdzpy1ppEcJbow2Mfkx67wqiEYtYPs3D2eY3fy2ffAqYNYraC",
  "key24": "5FVYb9i1jLV65Ar7QwA7kXA93Ti6ys6xAA2jXbBCAYBQLEY4uco5Tabv8ZDg22q6QKd4uMKBGvGPYbXsFSHUPkuJ",
  "key25": "4EXLUtKpErgXTjTGJxpy7a3JJDRKGGFHhKJoacAbTjxRRMioeBQhyKUkNQeR87CJUU61RxfkHfGbirsQxV1BrQpm"
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
