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
    "5tnvZaGxDRVkiGU6Ti9os86s5k24owiVGaHKycNdD3gteCgvxzSSCTthCx57VK1t3ET2KkgckmrigBEdzmYXrnx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqRFcrZCAUNYKwwirqRoVmNMi3odGy6ynrJFrb2iVVfac6P5CnxKGtTJs7MGfKRVYxmnp6f4huGesAof3AKMxVW",
  "key1": "5xnPLNDN1Yv1iUgEqWAQg9A6kfE1DfYP68Q6ZeGuuvjTcxd1XjXPEf47y3qL4EHHRe61bpgDLNjjt2v7AAPPMYGG",
  "key2": "38W881phJdGN6933FU9woiAJ8s2ihEjUDVu8o4FKmYdYMJVUmLZAFXfPaPmP6mXsQMGoMpsT2yKNGSiTA4GjMKXT",
  "key3": "32uzc4hD2E8uMkuiojoSeCFvEQ26FnzF9pVriVREfSVBaWD8DKC2y95d58GaPZzPLNhAnzSpj8uivcy5x7rphm5Z",
  "key4": "FxBSFNcghTczivwbZJFcBcfhe9qPeMLEdFBaMZP6tyhGrcdSAAJjtLEGM2wx9P1dkvRRCmxjPcxVq1BRZqtyywj",
  "key5": "2hJ1d7gDwTNsJgLK8JkvW1b9gL75nzCWnQnRdc9VfW28eL8KEra37SKSHZUPHBtUFJcaRPJyEd1kZDsHpouajPqB",
  "key6": "4vb6tgeu7CzMdUERw1VHNx62kGVmLrZcuhwvK8sVyHeNJQtH82V2Tph4xhzPwAmmfhRZKZLGTUX3DGNbpE2uqgxD",
  "key7": "kiD17FXb7z81BVGbBdz1GD1MmKyxuaAsXhJpr431onCPoNrYYFnHS6GucMra81q6ZvrMmdtn4yHgWxh9jzf1vY6",
  "key8": "2LTD2EZurr1riMSeeHtuFeNEsEycDtinhcNkTNnKmExvTySAgeCv4V1KenetjnmNADJLj2JxEzqgRGi5Ht2HHshL",
  "key9": "3jmLHXivjQAEcQuksEqydZiQJ3AondS4J6cuHmWVvJ3NjjNpLqhjrvyADddDRiZszyWAtL8asVc4SBrTz1Va7uGh",
  "key10": "3gcSmyXnQkhkhj9WLHJcQ5MR8gtdZE9Jkx68RRAYeRyhFDekFBjdmTyMzYRc34EgCivPPtK2GHHZtCtBWEU8nZdJ",
  "key11": "xkVTt9JrGcpX1VUgnBSyuPwJbjg9Ukk4eAVFAmc27HkJpzuD8icaxBVT86Z4RTDg4byvkAnQ8du2sP4Y17TmUtH",
  "key12": "3q3qDU7iWKKiAjhhMSqMFV7YVb4uoUXzgVJx2Zw4SM2pAE2hkH4rMPYXcwU26RFqKn8UbyJcoimT4HT7yp4FUfFH",
  "key13": "RMDGnfS8Je7HjGN8djcTh1QaynHHXaCozkPBQU7qo49fnoutPP4xgKkixKdMqPbuiuzHNTV8EyQHexaZX66nrKw",
  "key14": "REWFGAzXcd1G6VWYV7Jqta2p6EsZznggw7h3VQq54TFm4VzoakbT4ZsPHnhnE2zkixU1NJB3VLRgJZ77QvfMW6m",
  "key15": "jMULo2B3Gte43bbJUk8D5F9sdXEEdUP4EABkWKii4bZRk8tbsQN2sYKkZQVU3dnJ6tJpzEQsDb1k4EGEH9aRseQ",
  "key16": "5FVaXp3tFb6YEWqnZrE8cQgVQHRn2i6UAd9cqHaggpAZGfN9UeaFKaa6CyYjyZVwboJ1QpSvVbaEbs6TKiPkocWr",
  "key17": "5oYpsg98RZRZg2X7oqx5LTgssv4ZYFv4Y9KsfHF2p48eQ7RN3z6Hw7BV2sJpvBW5ud3vVcHS6NASs3UVeUCGX83K",
  "key18": "56iWDnkdv9pivvH1CWTKXghn4ATDhwS5K65cPTvAYjNUMmrBBLaiaawe4G2GDqBGvdPkSzvjuoXnFVkg7SRfXdmJ",
  "key19": "n9Suamq1wccDcDJFamAvaMgmkRsS7BZD9anKf36sYyEpnzTAYfeEZR1u9NHMrBkedPEdCfPbULgBCJRWqidENQ1",
  "key20": "3p8tQivrJJKqZko2ESkqdqhVS53MXPVBnGbjeHpwcq7ttEv5Zsf9TDhmaU3WLNNTZ2ktjEYpoNn4XzoTEgrYqd3z",
  "key21": "412mY47SSYxrpJjWdAqoEAW22CpxBSxQ6LU7Pg1m7qhVp7jGFPkLFt8Cvecex2gwUHk1xadgUZcGgV9sYJTnVvEd",
  "key22": "3KkKLhDbWfttG2XRmN1nSmxSRXWaxjsidbofFh3pACYs4E5z4uxXiyytZEUy4kmqZiezE9TDQ6zPut6ypBdqxjN6",
  "key23": "45R4gXcKyo17ZuZCq2JLAuwRGgxrU46mpN5te2pxxv4EHmM5xzKGavRTxpwhfM6p6ZgPK1o48q9nrrmg4YL2eEUf",
  "key24": "4SrJmVdFvrc3spwK9z66nz1hc4tN3UuTkGtoNW7avEARjQK4ARs1EvNLCL1Qw5XZVBLLTDZ2SU8gtPue1727PjdH",
  "key25": "2XKmqqqaouqyrYrbvU2okpdjEWzKip3w3k3C3GTcmrp4bxRTF2BLSTQ3hk3YdLDsZPhnUATHKPmHXvFuZHMnauSD",
  "key26": "3MAi5e1y2NoUZnmc3682i2L9nhRRJh8qAeWfT9ArbzMmGBgV2gJG2MawayWGRf1hztrazHvy3JwcjusJoyXw2BMm",
  "key27": "Ybej7tpy78VGqq3JCiMVukeYDnB6ZU4ZrU3chNXVjrFXT8wvRkkcopJy12QYSDn4RanV7YKuyHtqNhyosNVyyJX",
  "key28": "4DiXXGqZJqmWxTMQKkP5bSCckQy6cxpRvmjUkLHnJ9PHYQmBkbPByBM2vTD6SGEGTMPsmefmNGAVcj5zjUrzfmXZ",
  "key29": "5jH6D3MqdS88RF9i7L9seTmaW9UWSbxL6efuS11E3CAHJwKq5FHuMiWV4c8ZX5ZoZakYd4v2Zy5wctfkvUPNCnZz",
  "key30": "2ttvTtAFmtUzULyR6tCbHLrPNYfkx1NdFs7LWcbwPiYmo2wNYXmMJDgKVsZ4X4fGCgjdgYyj59eLXhjWkfzs8K2v",
  "key31": "4rNceuLmXCVBe2erU9dX9fp26vqHf8bgwoqDWeEviHckVnxMJkWgNqX4xRj35RBXZnB5bkvtHvHGtdtE8ZKMnrzv",
  "key32": "2bkMdbZBHL4Fe5Qy7R8Fq1gR4VfkQbY5sA1e81rXPJ3Mab4JKbQw1rhYDTZf8ptMVN2Y9zSTXenJbmW1PtsUYWCx",
  "key33": "3KFApsuqD34hZQjLfY6xnHT74FXcQ2RobyCwXuUCfzXqN5btNnkGF9FZ26NMPMpstxtB2uMvm97gmBKFWsBdWhVU",
  "key34": "5PNWwCUVtf2FLB7FzfZHZCNfCe8ehijyo8EmiDaaRXURmXSbxzgobJ9z8Y1A9wrAPvPPiGocv4Ei2hEnMGup77iy",
  "key35": "X9jz3S5XQuZjsqmUTcX3maSwX6UUz6A442yVeoFAXSZxYFT6SGF7scTvRMLGFzwD8YUPLPTqdk8LUBfiUCCe5cj",
  "key36": "3CLdu5g7m9Tcn4WcpuQJgtwsL4XvWciNM5NZ8omGchLFscpiDmKUXiEgmBFixSt8EbCdnceGCPc1j6b6K4SRiFdg",
  "key37": "5QpeRB49ZJnvGc2WXsDwrHYTprB4sfomxCf7TxFXAQc6bYRUwxYox6Kyg4Cmyv78Byf4DrCwrTecxEFuH9JJm16k",
  "key38": "Cbo2VzEp3J8Z3uvAMbhypBXMZkzJBybbHVCwidquB9uRDQCyzaX2be59LM2ay4mrXVRzwwYUeucGMCNALCD1KX5",
  "key39": "58BEv8NQ53z8jzqJQjGnkLF4iK6VotRADvV7gy8X1ZKDQGhRNa2JyDr8SKtruTWB26eu8ReBrTzPvnNr3HGgqf2U",
  "key40": "55KUQGBecxsP5DAJYvrwNgAjQ7wfdS73FAyEVwrZBLVPLWuYWf8YPyzDhVJEXgKg4LHybmWbkH9DCnEshPq7pg1Q",
  "key41": "3rYesQULXqZmw6acZG6RttXXRsEmejixzNUBQo9P7YY56B4J59Unpr9vo6CcNUQmrwf4fZgNtzs8wr5cXmdedQus",
  "key42": "5bgqthMMbUgDzuJFwvwJhxyLn37FQXy4mJGLMmPsHeMiPTSnmeUTLYzFD5zZGXVQ6Gxw5nhQVoefuAPFvDDsZMUd",
  "key43": "3mUurAYRqWwDZ787pDM9BxRxttHqLUp7kAG3suUHk7ho5ykZ5BANnMXuDnu4G8SyGb4PgqmakP8rdbETdS6P5E8E",
  "key44": "4Y9otgbf3ziYDJvUmGaGfZjM7XL3HfxhJs3qfBUbF7udoiTZs8nhELyUzzmg7AEKJkg62t4j8ZdMgoai31SZxES3",
  "key45": "5K4epiuxrMbdV8NN6Vs6M7XVyZLxVTXZxCXaz5FH9fWqGQhg3c2FhonCC5n9iFMjgsNHYFJUYEPBNoqB2gnv1eDE",
  "key46": "GVP71nNKBNTBtvP5stKjTRbcoBaj4KAPE8Jk94PyNSvQ8osWQwaSDD9e3rDVkTrhzGA4RoZLZE6vgJdYgHcuB21",
  "key47": "tJpuoxbkCUzMwUaWFuGcD7LgpBjFrSZbFSrKLTwLzrZeV5bY3KnpF2oSn7RumvtUHcu2zwPngeXTKFCs4zrssen",
  "key48": "3z4aeRpKJmsV8xfUY9w18fuQ2aSjcYTXhxHgg1ynYWsJFd3A1KHGi6gdXqp5PqmUFoFkddp85bFEz72qy1jGLS8W",
  "key49": "du2CHHHm6kdqH7zQksSQSZHDvbWWddrQSvf969NUsfWhQyhx8LJxgEwMLmMTGmBTRYzzxyDEHW7DWoXnjz4WMTM"
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
