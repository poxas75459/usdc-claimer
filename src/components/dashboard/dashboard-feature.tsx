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
    "GPDAgLxdHoVWXaBYxZk48pfqF7MPGhyUTbfNjn2AK3EfJNKsiHj3t4RHhFTL9YWgdxWdv5nnQaPR1CMTqCKgdvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beDy4yKbqE8pzWqc7iJbMyvXMK4kQ2McyLxB8YrWAsZZE6y5oR8RVGAtHp2rB5RykG8cHkt55kJgncSrt6WREKv",
  "key1": "3DCTAtmpFbeiWkhfDtcsCrTMaxSfxvMJwrPAXAsRVgBjyQAuu6KVJwCokjFJoSepv1pa4a4aJZs5QkGbntLGX6cy",
  "key2": "n6C1q2XGspfPRseQ2vL5dAMiZeQS3sRHv6zaqotMQhdJCczijxsxaXuy1MQZpfGZJZ5YhQQKpG2sxV9LxmTxawA",
  "key3": "5D2QW2BdtAHSm6yub4AkkM4Sqcqp2vdPKCqnxzLd2K7iNyPB2hpWT1NW5fgaVKuFUNKrJEhGpHwedQXGsxsAQU7Y",
  "key4": "pjeKC2mqsZFAfDjffffdUPe1io9zzrdZchT73T8c1WmdVLAbNmd5TAt1CsaLPLreUvfeJnDd2EHbdNXAH4fRAwU",
  "key5": "2tfSiNV52HQvgveks27gK8SQzFy9ALy5XgBE8kLoDq88GpnzxPEKZZSa7GsieaRnCJYkzvK51BtmKHZsKEGPjqDV",
  "key6": "4VFesdqvaGxS1ScGG2ENPBH3FtZAgnKemzhg1Tnw6yA5sw7nQmDQysJ1U14tmky7dnr98hRP8HuQMeYXDrfT8riA",
  "key7": "L2QLgCP77hrFELwdYJ1PLv8cegQ6cgDoYTSZ1tbYBXu841LyRq4Jm5LwEEeiGyqujqy27NYDiiygMPVmuXppmTX",
  "key8": "6mtNbhkuDLHQKNKDkurYNJZi78DZHTurCMjoynxrymZDa6MQVsgCsGMFyy76huQPuR6yHrrhiLoqaMD6qM35mkg",
  "key9": "wxnthyaQ9rZZcvLYRBLRk84ThnWeo14E9WtGvmHuWnSywGxpSnVWmFZXJjBScojyEowDjS2pLbtCF176zb1heiK",
  "key10": "KKpNmgeSS42KNsJ8GGjR1g5JU4pxz9VZ47fcpqFRrk1s3EB63RHUfsmpWtibkZMq1f5AudupcDHL9amX68BzP7q",
  "key11": "67i41MXdVVNEW71QbkuHXgfLyx3SVJBfWLFddZTBGenpzwtq4UtMsNUn33UtRnnD1Q2jAfxesbNarXyhdaSu4JEB",
  "key12": "5r6LXNRx27xBg1YPvcKjY7Yw7kavmgbwRJibxSVZvznBGqHhHyBXowdUnAtnSqJuEKEk57K7G7Gb59hwNefzsQmP",
  "key13": "3vMJHugkGGyes5EyYiqWuY42BeVYd9ZMGxkuu9DjY89pPfX5JfT1KaLt5VWVtqU6GZooSmpjdk8iAzphk4Vi5PRX",
  "key14": "24x6SXLoZT2zmHuruoNkCazfDUQjeumSNyp43ZtAvYt1SQPWDuLiEva5KjTnNAiTJURW32deJ8GP8QUuhkGcmRWm",
  "key15": "3xFMcQzkUJuGLSL69bsiqsC8NngNaKu6941NwmCZKrrGSb2AMF3Eg4HFAhcuFz8tFKyNqXiogBD8Y9m7X9UJjzbh",
  "key16": "5ZSAZewSFpZXYESBiCrb27MbMeKicdWALABq6AJHv2bjBPznpnFHfVfvpZsNBryuAhygxCGHde9xaoPdpwuYVVru",
  "key17": "3DSXF5TUPczGpgWSLnQnHPTZ5okiu5bEQiQJaCYD1vhFoK4J3U2dJUw9T3GLD4tMFRoMTxUxzEFvt7nfkrjQYY6q",
  "key18": "4tZhidxRR5YRz4PnEyr2WaBRyhDQgf6qq172RME77B2snBTkUCsWkr6PmYgFbfpcgDrMWh4ihrzwBu7Jcuc3Nn9T",
  "key19": "3D48Gsq9kVesb5jybAvkMXpULad1C61u9PFVXZmq4jFyKmgooMp5mW2eyu1V1dtF7vWbhMFWWr8wgt8whxWe3NwL",
  "key20": "5fSQMhHHDUa1zRTfWULg1VoHbjo6hXXhUT55cerSQWce2tNtJGMhcGkBJGtFLfWHCHLHsnnMNgeDUdKjCPRPKHkV",
  "key21": "5sf26cgK3kQjjjxKfPpdrWxT8CfTG773wah65UhQ44xMyWwiHKdXWz7z56YMFWe6TaWFGu5qiPe6QeMaG67aojEU",
  "key22": "5Eav8iwMNJebWkZp6zdLNY5Kyqbqo5nEPUGwsREPCZL1qNtwkRuKGN8374PGLrnjZTfJajUgzEVSjDZDmXLgqxry",
  "key23": "c9hY2Gs75y8xUyCjRZjqcTVDVZXL7E3Snxa6t9EzrvoixCvx45BFjs4yujAE4YE3Xfzf9tDAtTCXF6qbKx9H3Uw",
  "key24": "5ZkJmSv1dVWecKacUCv9H8g4JwxpZUks8LZxg7j5jpJDcASzFFhF8UjcFEJcr5EhuBop7odMtcha5Ep8zC3nP2AP",
  "key25": "64dRi7J8T5EvU5dEskqzu4ZD4k2AfQ5xMu7N8B42wjhAMvXBvCTtE2DgJQvjzLnXcmghtBuKzHL1JfGH9ToCaQg3",
  "key26": "3LwgdG6WUeUva31UbLZzggucUvyZVYJ8Bp73jMRygj9KbjvH3jgtr8DWtAzSc9Ksayzvjfg641Nw8aTUQ8G5bZxb",
  "key27": "46tZA7rNuiuBpqvkYpHsVv66pPdBAUDoUEv1tKUrVcogPFxbSCKogbhEwyxxJys4Ke6gjKnXcNXekyC18k646kCi",
  "key28": "5GqM9jnAHgNEPz5HsrPU1d1vyP4TZmvhSTxuui7rbPRpTqPkwxxr89VgStonDxM8uJUqYZFJGjGXowpqwz32ykfX",
  "key29": "5kEfW9r4V3PqFjX1uMprfJz2tC3zXy7gEKN2q3CQNUSCPhHbhZHN2vCELfdAmnK2cEC1oG2izR7fMNJHhpQHB3st",
  "key30": "43gidfZCgVEnypkDMpmjXHY6r5dbZfaoVKmKN8KAggxScMr7suUJsx6it4m21HiVkBpNzjV2gv2fD7vrm6bBmh4W",
  "key31": "DMuALFfiJwe2UGhbpF5iRHAzJLygg4f5ePSWbuZahz4uaWrZbFUHhehVXrG2ppkKgRsLozsnk5vTPvxKiH8XLT3",
  "key32": "63PpUnddUVL8zwCXUrf3hZy4Ddr5FG62xfZE2k225UA1mzL7eirkizVK9WH3tJYAujZvcZGnnUtwpgQF3e3E9Eum",
  "key33": "5Uo3Vmh5gEFW6Rj1g4FZQmFKDxRHqurqupq41VMtzVLpYJpCK1E6FVbTZjREw55D2i8QHjC5kKLW2cvYuHbKFarF",
  "key34": "qkRW8FifCHLC3q5hTH5yK96gRZk1bVb1G91cayouwdpBvLvP7gvgdPVtgNrmQaWq8qJnbWEfwdVoA6iLXVArJyE",
  "key35": "29EM3e3Eoj2hKvPwbSqzefv5PPoV6FCtvFCkgDYjpo586Vktrp6CpFNEEZ3P8Ag5obpK71oc5B1xC6LBt1s2uKqn",
  "key36": "EfdUgdrBgzyTiJXk5rJ74wHLkPVpBgvnSjb2jAzvk5nRrTTEpWERgoPtjkPTZSA1BfWeoET1LLF141kTB8ySbhQ",
  "key37": "22Qdg2Ret9Sc6jiMCtoBTuzh7dWVxVutr7VW1csh98eZZdiWU4Kwvmr11G7jDwbfvkqHXcWkVY6yBcqBXxijQSLd",
  "key38": "3joFDBsp6YuvovoFNvxM3nc6iVWktYvG9aU1sLDN1zaWY6dBJniwpYixANGTpssDgV9xNrntPHT5kKvbwW5LojXz",
  "key39": "3Q1ErtZScb9aLRT1fp7zYUdQXeoPTjHHh6fdxHEYbaMAByJJJpFjK9cY7Kkf9jze3EwRYaMXw8fJLBzb7RkMLuRR"
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
