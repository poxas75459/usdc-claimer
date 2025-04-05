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
    "5McJFy4oUMA9xVVXRkF5MPRW8Fqb5dsyyTZqqk7yMn7pcK66HmX3YvTPeKiXNeJiwF7LqcJBtTvL1fpz4hscPp7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXbheAEVyYq1J1YU4kCTUGKnCWesKYCz5zfL8rZEWESx7QaHiq2uoCvCmDHdVzJ37pagB3KCSFiR68jujKrBYdB",
  "key1": "3Z1MGNT6QLdQ2yaGXHsQxQDaRG3kNGHVvMarGYEAW39i2GXtroJGokGgJMk9vp1hzhPcckw3qgogsTAAVtgaa2gX",
  "key2": "e2PH6tNJsBTjkirF2kM5ikWFh1MLihPsAYEcZuPdCvJsUydLKwVe2eZDZKhXbBHqsLBsyjyRnXfUVSHYThWnbHP",
  "key3": "2NZPqSR4r3S63cYiitL7nA7aMftfKiEWrcJzmZ7PduywwmDcTzA6q9bjfqwiZVG3z8oLdM3sDgc1BuKFG153ZfH9",
  "key4": "5qHQ8Jhx4ETaKXieTfQitCgTzihQMEFuFV25x5jVAuvWbXwAAondQGAdzR4hrkwVgBjiAre3Fyh2TjBiwQ7fU4Du",
  "key5": "5xHyjHFP4hNoG38kh4zCjhZGaGEobHYyKKGiJ76gPapCFLR9DQjgzujsF6sgiDyPVFG57m1quzksGi12RzkwyT8r",
  "key6": "3fBu6WmPz2SfqdbogByrUeFXCPtLjWEtggi1omCohV7Fm2XRr2G68yAkSLtMMhZunuzmxb8adbGJunsgRwvAK6SK",
  "key7": "49CnhDS6BK2pQouf4cSFeA6J2LPHbD4HpgfwmLuieciJz4Jqy7kK7r2TVgRUFivc3vYkCU9BLhkYPTvBbBz7Cv5P",
  "key8": "PopqFEDcxyPD4meeMY5s9EpBu3dif651uX8RTqdpVVHy9agbR5far2xM3v6aMfQSMefeebScbWUT2dyQVDxR1kQ",
  "key9": "57xRkBCwiisnMtJKSJoTxWzp6E2jgZeS4EUK1s9isBRA8hA1CUqzbHBxMoZQDEe6pbPnWrjBtdu9rV19h4K9WDBi",
  "key10": "3orBkAjrFhGXWoZ1AWARyqjUEC8mrED5Gbx7M5JAeYU5f1E1cdiN4ytzsBZhpjnykxLeXG1K37MGTxgNRv1UZPtQ",
  "key11": "5BUdgFF1aeZW5mKxEMeeSVU7TFGaRLwzNcncbfk7DTKfP8T8e86Zp7V4TuhX2Bd6zzbpDPiiCAigSUShwyb7k6nW",
  "key12": "5xEAbw87LGeXip4scjarBnzTa3oUc23PiKdEYQarA2q1ZkkmcujyxENmUkZK9twXszEEtvtdS4YgAotEkptHsRNP",
  "key13": "5JuPK66KhFF8ULqMfTZ1CdhMNapnS9wBhfLTZumHpJGn1Wiu8VnYU9atxrTEtmzFyHfSF8mwRevWnQGhEzfFzL7m",
  "key14": "1zeV4hhHrZe5Ypox7iUACFNd8VweZJJ4GTxnK9scq2hdxF88iEwX3JcQX2TrKZr36vDMw6Bf8DuGmDVoKB1Bb9p",
  "key15": "5uNV4XuqXEu3tw7YctUHCDAhvyPqwpt1n6NZceAMLXKDe2KP85hHyEvrp4kWzYfx2eN1Yk4dqDwARVLFGrCLyfyw",
  "key16": "4kJf8WCNyBQn3P4Uk47i3iwR6My3F1ChGAjYMAGvxCr64FFBuTZuSwUj8RyxPGG1qLW8vEJE5pSwq5J8RsYbw9Ho",
  "key17": "4NiBWKvoRQFNvkNiP9CQBecmcjHipmP56JU4FGjy41ApshEZC6MRPoumTF2RrRZAZtdZhiQNxUqKtyS8QKoYxfmj",
  "key18": "3AHVqD6mVHRfdXAFgpaKCa3D5is8ShSwhZM5gowQVRhP4kUkAHgRgp35RvzvdgirsKn9XTuf9gYBt4zULzpfg46s",
  "key19": "KSftXm9Dmq1ACWG6b98je6BpyiLhcGE2AYoFqzQAkCEcQ4XMMk13fmLMvGRQzaf6To9xSAX2gqfHqjvKFF47krU",
  "key20": "BS8gY7JG8iKv4QHnVZ7QY88heXTnqEXrGbQUdQT9hsqL6RPmDMAmfY86VERYEjzPXXPBbeGnrehENMPTutQb9LT",
  "key21": "q4vwA6kJ67tjG4ExbAmpN5oJBhqfGXxLMsozbz1st3oUKqCCMvYyJSDbVzELrbGip7cHkiPfPw47f6PediyJz9q",
  "key22": "5fY2BXkedBw9Rxroj7J36D5RmtdxMArJQn9GGvtvgjvxNiwtLDgxM4MEaZmq4ujwD4eKZG73fePRFdEeBWr21v3h",
  "key23": "4pQ43JMh6GVWrNszBPJBQApQP8xft8VWQJcXZPVNWyDc7fUZH5fdiRP2gvMpYzniahmxRq4XcAYaPyNWzYsJWjwH",
  "key24": "ybQz5AfDHwdx9wTpZg8z75qx4MwDwgwfrKM8Xw8ypq3YXWLETuGE5yGia8xWfcSmvwcVbYaWme1yMMRyREx9yp5",
  "key25": "4BBzzujrtinqZkY7V8nQ1tHiYaaZRN7Q3yMtE1R4p8FohWUpGZH6bDCM4HtHNTpDbxabynsUtWaGeDa1a5duuWos",
  "key26": "2btuarrGoTeKKphBNPoN5D9L6uP7XwAepcYNECWt9sFR8NzHQZ1aLJTDvVeSRN4jtSNeW9xDTkbeMrkP2Q7JPA3S",
  "key27": "5ZBd8wwGeSbisEesF2NtRxVBsmRzjBU48YzQ5TKrJKw9iBf5HD5WqUkUwqSD2xYhYu6nw2GdePRm5t7UtkSNa95J",
  "key28": "3oLsQeSKQrqnF38y22sQyUQVaq2sp5it7H9Va9qGGNJd1BZ9SistcXeUCCVQVGHPnv1D81SegEDmyJFU46EzCu7Y",
  "key29": "x6CFTP7UnBwPbAbTobgVcmKkT1BZteQMZK2Ev3dD6ahkmdNYda3txEcC3vjVhTJArh7VSuPjQK53wKguSQkscDw",
  "key30": "BkaKiJDcj8P4tB2oeJxt6vVm5KLQ22hGXM2vdLPZ8k6jVPbxLMPrACthtMeM87dx66uhkh2nZpTn35caQpMfMjS",
  "key31": "3eyRHn8FSbNmCgqgku9H9EfCe9xEmwyrNDDwmxyUmCmXga5dzsxq3T5tjNEWXG3Di114eK98u2m4SZwT1wpxnG3w",
  "key32": "5cX3PRUibAR21BsRdj7xU1RbQvFP4zhG3ZguDZq3SYfDwHD1kymZNB1Dy8qq4B6D4GpzYy9sWp5AZr2v82UFmJKW",
  "key33": "4dcVJjxZAoKk6igSdAp9iRfsSGkv3bTnJs1i6A3AbKpWETFMq8pXndNqMJbd7HuufF28Hp7J6zeH57hN8mvMGy6d",
  "key34": "BrYF9BgkkQY2egEBR2kr4sPYF3gRjngoHn3Czsv7L3njVii2r3hjKUz94xq7Af4p1SLd4GMonLt8NJFcWgsh268",
  "key35": "sHFXm7rMSCS6ER73oaMGFMQXJPvjxgXe2EwuN89gDPFqPCtCnw5rHcySaijycLerR7wGrcXSCj2qbE996rvodUm",
  "key36": "4ymp4QQt4XTg55dP8z3VDgzX8w5AxbEdyr9bza6a9ywXc6m2aB1uZD9FU7cPRccY5iLmCjWizTj99gcegtXrZpTu",
  "key37": "4mAFDGBPKeieojFiFWCSRHxTquP2P9LiRf6oW2sH64TGnCpjmzzNo3tzYtSbMZ4YuCdPy1vg6mfUywLdGsDxGyu2",
  "key38": "5dtNW9jxopWB8g9v9vakdexhoHFtGdGdMAnT9mtP5BEFrSPJ9kycuFpandnbHbrdKRJwK99YDyNRzVmCrHaHoM5g",
  "key39": "3Aujnw6XJC82Boz3V6EqHN7QGbjWPrmoDGeHazqeVMGSAiUgEG7ZWddsgBduwKUPeDeUMyVHmVUL5S5SdADXwYX8",
  "key40": "3oGm8uLd44wFJXWA8CgH2kRaCXAiSD5PHEPrwZD31ha5myvRLY5iNchVfZYRqqJqodYEzXmNBh8urvzbbHzwp4su",
  "key41": "2ZWH47Zra1g7u4Ki29p7tDdR86yT2bzvNCDVhReznx93DtNF67rBYkn47KUaRkGtyugUCvonqXcJv5Ea4JuyJi6Y",
  "key42": "5PdtAD4LXTcjxY1yrKMFEiKp67WVk4vrF6rrfk8AwHrKSnugoJBrpxikyzLJfMpFYTZ8VJ3PBYb7oBuYMQS1TNpV",
  "key43": "4oArDV5i9bA2yELJi6KPvdLhXw2sCV4291fggjvKrtLgNJiDR3GBMDRgB2pMeWTBXkC9E2BWRreeE56ZtsWHApQt",
  "key44": "3scGYPiVEwUQvJzNt84qyzpci3SGjjtLzX9nrVJEd28EgEFgGeMGd7XYZSwPKSn7XnkfjdHvDGt6zpN5e9Qo72CE",
  "key45": "4R1pLjYN5kJpJToGJCDWuqkwhYFxnYYu9uzMTwniDLh4NDNaYDnWMrSPt8irVjjth8QvMdK8TMHiFmpKyStmh5Vd",
  "key46": "2HjJhCeueqr39dvPkejSe2Vc7MhbWbeYDYybp1AMgLkKnLRADuEt8Z59qdRs42GoePGnJyfL5rJHPTBY6mfnvtuX",
  "key47": "4c4sxpft4aEBhgdNYAHEcCYfV4hLsxho1qrhnJQRRhWgKffvW4MNhvcH19wDe2MoEf4hMvVmm7HUvBiD6LHkekgA"
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
