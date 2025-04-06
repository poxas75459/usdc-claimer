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
    "5qs6TJyV3pRq5HDk7Hb8PVUVNtxrwPpwmAJrMgh1wN7tdaoSKFdoWy4F8F3qrAbWpKQ8oUuSAujhKT7RSxN1HXce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tTqZhdqTXWUVjiiuNc4LPGfP1FxH5hRsNKp7uafzq1pz3c41uRbH6uGDujSPnsXz1ErYvRKQLNnAeFQTCbRECw",
  "key1": "4pKTKQBpf2gkzCkhG9YtXhLM8wtZmMsEkyJyqdFKXhEq19V6VimF6dH8dsovhB3yAHTHKKpo9jC8589Xq4HrkuAz",
  "key2": "54wtZd7hrYDAbfidK9oXoYWrbKiKSNbhDRaJivvTxTETsW5XHcZfd39w2V5XqKxzwabTTPKDZHT6mso5nAwjAs7t",
  "key3": "3rJbnNTvuHWm6fAdn3FXvB89mTZNNCJr6PxAXWR2kbvFgDtwSPRpKarPjHHf8FKQcd51CZq6oAuHWKXhwWorruoa",
  "key4": "3UzpdoSfNiBFCy2sEVW72mEV16sKUZYVKJuWrbXVNP1ftanv5eHvu6Sinwt2EFzCrmaBTWmuahD7TPrtiCqhgsb3",
  "key5": "3a3dwMmNftmAv23Cy4WMmVwgWe814TU3jSkutmoErFs1Dou922NFNencx5h6xuGXkJSjc69ArTh5XuM7X2YRu75y",
  "key6": "2YBE9k75pd5Jydqw6WVpMmXvnj8qswdjV9vNQhN5fi3Ey3BSWVtegEQcVvV3apxGQDWD5dSaNtStvMzUCGrCvJwd",
  "key7": "5Z53MPk1QdPatvfr4UFq6cL2CW3uNisGWcNPsFG9HqkkAcYR47wmVTiGYMpDuf22uRzbsCKicjxjLBEuzbMLHDtD",
  "key8": "5sX6VKrwdCLDyqUcgVaKeKiaS1MtiCXLqUV45ue9APboJs29qZAhihqyt4kwM5hRSUbv6tXyESHZmdkbzu5G3oUE",
  "key9": "4GHpQoTTgi4NxJjycRMEn6AMHzjfQdNuPcJwf6rrcH9jTS2zyRYBqgw69gPrEYy5bLARPCBjjuQWE9q8Y52ojRbv",
  "key10": "35PeZaTcD2KMFMyCtnm4QbFixWobRsNgLwWmgsfRkA5DSswnzgxDDjhesn6hhXByviCpo4RvWu8a9hCVmW6iu686",
  "key11": "4ZC3RZxpcxDvgC8iQQGcNL8vpjpqL8EFvWLogQqh5i1Nx9FQaYKB8tRLqdJQEaxTQ25WqcmNpsjmTtmMaqg7sdsm",
  "key12": "5xfMhCoWDpWjTgkbr9fZ2hUodPv19bNHfRmYAchE4HNpzxrXyKtChNod8JSgq6YheoKnTTwhgLJR9mpPgwN5Cyro",
  "key13": "5vVXj2GEQtX4KJKgmcB7Bvf4RBAw8pcHBvRWFm8X6FHNThc6fd4ETa14u5smWjS3HsDsuhTwdQjcXkL6gwpvv3Lf",
  "key14": "2ZBhGA2qUVoL9UvfvMwY9WVkVn2BdTkkREtLjqWzqT8XGCs7jZsnscvCvMD4acYgbZ7TyTnGMrmaccSWHsY5Kb6x",
  "key15": "28tyQqo6TYnn8o9WokiqDKaBC6rwdBMWwUUyT9qyX3rXPjaAm5LMD4E1cRStsE8mNEHN632j6MZXSbhPHCBzrp8q",
  "key16": "4XvCGdQPhNXWyiKSdM5RSUTtLVGv4iyismxJ7meMZUYYoPZHsKGc72N1aHqmZ9fiNm3K3LJfsTrtJB6VjZGo2T7K",
  "key17": "22PMCqjK78WxNPWXZQ7bgp9C7Z9w7jtvJtfs9u6DyiBz8stAvc6v9KQNJjhzb7RmzWcnv1eTmdTz2xTrjQDZ5y9z",
  "key18": "589zowXMpneZUwKn1L1M6PrcHLZ2eEeNAQvSALdpPau6AEXxu9pDyAcDqeSMjCWqagKK2CmVmTv65HomBvoshPV7",
  "key19": "zCK4yWg5jL1JwXnxq7Ym8oy9eXn7GGWxP1sasV1oj25A3SHUQ9Y31bNLkXuyWGySzth5WXk6cnWQAq2BHTB84ch",
  "key20": "4dtK4egXnZaBa9HcAsJa4PTNEGbs7UPyBBhKoqxQRwmzTeLN5vUYZC3BFezkN3qPfBRzHZWLpokPfjrtUdfHGeFf",
  "key21": "2Rxe9jtMEEWpZeAW7ToSpvyGraTJXPkQhp6SoBAnx7md2FEYaVEfccrNr9V8owiMkCc2qtjYwJTotSYAgF2Z8k4Y",
  "key22": "3QQNYAf5XAtGj1huiM7ojjtsnZp5QHFsjTX2R5EcqExJbyt7mx6LaVjDk56hbk5Af4rRBZbGQnSqPAaqshDk8wtB",
  "key23": "aGfda1ErAMg8REniCPWFGqQzQLRJKK9mNEEvozzv9zcaVfy1Z9j9727Gb6dko3m3eYxvNcoxQHAqxrExqvXS3aH",
  "key24": "Kn78f4ZgHvxBqMyYNN8JPcdvuMhWCi6CdRiPCBCUR2AmTVp4WfDyM7TdEw1wNMGSs2uoVzdYkx3RBkrbxA7KdhN",
  "key25": "u9hEirs17EhqRCRDztapz99KjCPw9fnzLHHh8NbpGXt3mjX91aJaZuDgipMBkgpN1wb2dAG7MH43TtcJi3mKGN7",
  "key26": "foVPtvUewNvaNLQc3ZmrJ38hSr4UDbSTmyrY9DhKdkEp79CSMgyTDsfSsvjYDimojJgs5oiMV4YVRedvknjMPtb",
  "key27": "56DDT8TiUgc33mENPvnWfSSyvXa53H9ooGPqCCPgezkTFqFdnhVBSHS7F9dEvZugpMUEhhHei8HtG4Xf4aqbTufH",
  "key28": "3X4rrVAUGVYt3msufT7h7WaA5teou6DVfpKJsx7CVMeNaX5Pb2SuxPZ4MWppDLNLjNnM4yHxM1MXsohRmSjHUM28",
  "key29": "sj9t2GcpFhQnQuch3wUTTZQsMR4CyAQTvMLJx5BtLRSoSGnwE9mHch2PcYKsUh1o6igDwJtCeLm68uGLE6VY5W2",
  "key30": "523FbRMdVChrEBoqDn5WzwZHbHz71dRNJGybJMWyuwgfioa4JEPaeMFDUjpQQgdo8B9F1zucgDPcbRRd6fRUmekF",
  "key31": "3VkuJAomMooXn5hf8RqF6dK1bDGgmtEUktY2SAhjmEYh2bn42RoYfmVZiBLwZwzXwsGskeXfSVazMYR4nh85juFy",
  "key32": "3bHr3Diqz1Gr7uu97ZYBLh9rnweXX4PjLMLCWDR2kcaqsx4xiLGdtXeajriUYpHjEzqfixMzDsGvMY5biB7FXHTJ",
  "key33": "hKcbGYMc66aa2181LRM63M5KhyzRVuxGA8vdrn8hK3wKBwFvS89xfYAPkS52s2PTVkdx2mS4LueEba3wHDR9P1H",
  "key34": "425WPAE83DbD9eJiQu124JPePMYggzC6xLZms39woa3cb1MPUeJyVaEoeUstdmWu68GwFqcsTShJivxXJJWqmkH7",
  "key35": "43HNUn5ftASpvUXD6y2egnofonp7mMPKbpZXXdE3UPWZkkGpcNMLhU6MhgebzXhnignHH2cdppSRXELN5wmhkdJd",
  "key36": "29sPPNsvgRKep8tTPTvtzwZGGNXtfdwXzU95gJHYHP3hU2RoEQH1PGYmCGBPRcw8yuWCt4WFJsEVHKvCSYLaraNi",
  "key37": "4ekxTyBaEd5hTHGNetgMgLADvfwFC7rGSox1APBGLTtCbFkrrbkRuQuJqCTy15w9kQcgFRbG4apTSkiU8Wwt8Cfn"
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
