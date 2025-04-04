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
    "3LG69sW6PZnVCVHa5EXF4XUWqCjKDKWDGHso5B8znQS5iBKA3bNvTQxTfhssa8zeFz2Uzz2KLCXhwcob55ojiQiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcdPTnMrKurXSY3deg7MJB8QjyhZVVtBRoQEBrweePPYybYJpRNHRe9MGHZh7haRZN8EfoMsFup6F7826mCUrPV",
  "key1": "4WM3rP7Zi9ACJcXpCXnMWH8NdwzeTGsE6fbuhZyzrPg9w5kgtgnNBpaw1YaJcSy4Yw1cGHAVZ9sVvU7d6dfhy6ZY",
  "key2": "5SRdortJc85uab1nyTWmYzUMakc9y4cRXooHj2ph4LLikNyA1F7LADedEk1Uvs1XaJc1SANb6pRpCqM2sM4sPJRs",
  "key3": "4nwxybeaxR3pWDUEkcn54pVjYLLd9HS48GhGUKrgu5rBF6YqhP53Bcr4x52Dv3HW46GuZRF6rAKtiTdqBkLEZx2D",
  "key4": "5F1aeuUKt6C1L9mWQ2dXBQsD9JG2SuKDeDDNbcHScuNkQxVntwUYunviepaQYrhxYJ1NUJ6ebJwUUWG7GD2cCLot",
  "key5": "2VJdbmcdk3Y5reL6kvUm6UoHrDNEe4NUk9ay69zRocXDWdhobNEe3pcSHMbrNBDyuMSzc9HK8BW3u5g7zHD7PiGd",
  "key6": "5hRwWMii4aV2DMQeQVwKrD15zGqJto5jD5BCHGLqe2buCSP9ebte2HBmvBukke3T9QGiwxAeroTrKAbgDgT5gu8D",
  "key7": "21uGXMVdLneMzWFcRnCtv5HSFMZMFfUzGKez2hatJMVFAy8hgJFS54JCu8b9Cdmvp2VXSGCnBBw72NC6rZqZ3T6L",
  "key8": "5WrkKfPpGp99ysTv6hYymPS5d628iJT1on9CVGYURQqyM9rsaKYtBWq8XAkTBDMKCQWbpTm1wgQs1zgywbdn3UGN",
  "key9": "2LeXBbZ6wAWNTs6DyVvjP7cytbMaNSJEk9Em6a9vCBFvcZLxxBz2wiUf7QvMYPCwSJmqdJFfARhhhWbg7zTkV4hD",
  "key10": "5i2UxAygp99VPkZNK2hS9JgjSPXTmmPf3TT39EL9WGkvLrzqVp5vk2TxbXJVRoyV7QzWDEZuKbMnVv6HG96xn61n",
  "key11": "3GxqNh7LPCEVcAyaEaUmCyRfd4UYd9YTEkrpa91nhiARgfb3BRtHbqi2Ap8SrkpBACnQMurQSidDcGw4nyV3hwxD",
  "key12": "3eb2Cuj3qWArqGpQDjmF2pnTbSt9dFpoxryLpBY1KqYWoeQL7WWfRc3MfNZJ8V47UCLDq2enoLX4Ri1byLbeJjAR",
  "key13": "4k4fNRFJe7ceEbDNgnK56m6QU4hcsZ62vt7tbPs3cnzQeGEGtMD7SuCigzVJhi2H72m6NfJTW6gzBkuPUamMbKwr",
  "key14": "4tdCeWtP4s1bD3wjwGW46Rrf3BZo5nhz1f4CvqbGcb9uTR7Y72YFaCGNBFG734LRJcBrAdeE2rpwNwsSuWoUbnUQ",
  "key15": "5eX4deQ1EDeR8McsR6gBbVZMhkerkrLpHuXoraHzHbeQj8izDTHVdfF2RJWoVoiUBgbusNteY8ToEow7srzBnAoa",
  "key16": "2LusEy5ncC15rRBM8xhVG6mbF8FUKNX1qTVXm6ESBpw3EtgsNJNYhCVdiuL418zvccaTKaWk6X36sz6fYdkjPFnY",
  "key17": "5sqFV761VRBGNttvME975LQBJdataLjb2haFMYj53VdEGdZv9TGXPc1onEeWrJy76ZzTkVVYWF2xV8GxB9GN1b83",
  "key18": "4b3ne8BvhUCbSifrKjgxyrdsYRfrNjJWXevnzUkyTYQZD4HZYPZJuYHGVSDYGw5YPVPjHusAQ6wsoPwR7s6gpms2",
  "key19": "45wQNXcFin35iPAGYbXBzKxb1hQ5GUpkZQRCe92JLmTnTAkheJekyEnj19g1KS1JH5bQ1rLCHhgED5iDhE8Tuifv",
  "key20": "43RKzbw9XybZaN5RAGjwAE72xduHYkCwSgyhw8SL6zvNCcyvkNBULdQC5XWPbbQLmjQFJ8eAJKnS9woKzR2wsAiU",
  "key21": "5wwJLQDphDne3YzB8uQXTAiwh6MuekaCBp2v3ZfkpvP8hnDrcNVuDoYECtSGctFN5fWvBjdHtbzskHmDY6Q4yJzy",
  "key22": "3sAJH7kDNFJhQ65XToL6Sm2LFo9yTeHfWasMPGgP8Rvpe5JXoVu6ZN8HDb6VYb53Y6iURu9yELXN1DtoUayChsTh",
  "key23": "5o9nb9sFbnBZp9ksJj1ATvGKBMV6QLs3D77FZPrA5ao2oLAhNGbB73PqHepkbD97WkXpvDSFoiMF8tDXaKNJ4zi3",
  "key24": "2CEHidjzjrhzE84stFq3UTEYf7VmnK68oJB6MHMCMx3wsSkeRzEpWRbghQYjQPu9w5JdZJfS9Rr3y3ThKWwRQyQ7",
  "key25": "3wvA6UiPCGYqWnU38WyXg5igQ79jmbyb9uR1KupdwNCnkzBrEVsthxZTCUUsQHgQiy1nhBdXGJvLrC8PYMJuSncQ",
  "key26": "4VYkq8xtZvZuqRSPDcvMexiRFrifmdVH8YJz1EpdjustLRR1sQBoL82PoKEXagn3xBuVXLwGFEdZDhwC3oWURm3L",
  "key27": "4b8W6o5VehDQ5LDrpf1JBbdsJKbpuxMUEwTFnZcK7zBkaKrToe2uLBD1SHtXEGzJ78cTjiuraFGMSXQvbzNbjdu",
  "key28": "JZAuY1KSxYocZouXEvVEmiipZ8uy3pUy8EGvs3ThXU66pJvGv1kWqnSFi7rRNE5sqszX2H9Z49bspKZFudC45ji",
  "key29": "4eQyFncGTa614TymMcoST6yKcCpN9S3htx5L5guTGvuJZAdPLcLvvbt2TSRB8wscRZrgYJf29ThWC7eVv3wPQGMh",
  "key30": "3MpHUbR5H89GcrAMDJDStNyRW1fQYjgZoWejKmCevM4G4BN3NmcB1J6TF3gQ82SHEeDKDwF1czTF8C7CLYubh5zV",
  "key31": "j4pTw6G1a3c6FSorpScpKHmABtwPjKWbBjk18mqzhpidVCGraYRSFDQLo7U9pEDYEug2yqyMt8gBcAEa4harnUm",
  "key32": "4px9gXnxTTNnhhr5hnGaawAWmxDNFd4UYyG78uwYLsCmxDU5kquaRycRoLixKsbSA7QFC7kWrMzn3kxMP8YsAuzA",
  "key33": "4ZUzK96tMxEF2g5M1AFxY4VjaV4grdAsMFxMK7myQEJY8AQQ1aNbQfc6uEtB6BjMuS4mvKrQ1UQVKX1Dox4X1QDp"
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
