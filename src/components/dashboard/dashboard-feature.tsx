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
    "SeRGQsUXietiE82AuQNJXkuCNnrnWL1jnCuSf8Cn2Ap41idRyBgt5MsJrgsqG7qLRML8uqwSvhcWcxLgEikPiKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fib2x4E6kL1T6qo7yEwwqxUdv2StXSdKFgW6VoLQbishJPsCX8Dwev9ZEKfYcq2mHukiy3vhMY2iFS8ggtxWrwp",
  "key1": "RTX1Tf1wxoiyawK8Qw8cCC3deehrXRMreLvT4c3ePWPTKg7VbCnzFzYVt8Px8znNakCCsWP48iBYEz2P7Cv8QxT",
  "key2": "3UCKokX4QhQdQZ3R1tEb698KozQ7bFc8VrhfBSAZHX7FQrHggpDKhvuAV4JaeyQmmiuWYgiAMzw65vmb825hDuKX",
  "key3": "8Exp7MEgNPWdS1wfhutY9UFEfURGvWG4D5RhKLxTUXS1bkLKGM6g4jNTbCqNea11yZrbFzk3vu61grxUPdNomJx",
  "key4": "4HU63XzYZ65LMsWXy5DBbhfCX5AZpH8eJF8JoraoLPvXAiKrrfRKozv74pdKLtjyHXVGt7Y18CDv1xNBtVG4BoVZ",
  "key5": "2EWPsi9qnsAUFZkGtVvLqW6zYc3LXtpVGpZisEM7TeGsQnMKEtaGGh99w56FXWgjKaDKY7E1cV3ggkVV6Fg3xEhV",
  "key6": "2yQaXfDBNd4Dz174FFdoVdKtgU6m4p2jdPvCoiE4q5FmoyEWw27zN3DfvdtM5vgssYdkaBCsww6kiTf5NqHhiHSK",
  "key7": "3SUwrVzYGWH6QPyhzVDZ9TRij4rHpNpyJELGxv4HQqjojrZ2v9EQXiMvPMWfA4yVzLSky9zhPmgbAjpHrTdCB1V7",
  "key8": "5GEwEQ5ttg9Gv22KB5boGLFX3KTSSyQ1Ptrs68fakX5FoVTNeWELfcqYmSZ6TA35wEmfc3vwfvGpLdJQgLYdTptt",
  "key9": "4GtAihS5bDph6goQaiJdRnjTjZ3GaiECTr9EzUJdA37fb2BcUhrWYBdM53VaVpA8FFJjccEkwGZBwTfqcuHxUJKL",
  "key10": "41YrWY5pyvD2ZNuqXcJ62JCu4ccW7JzGpkVj6bLmcdjRW9acnarzN8huU1zW255oLTTBZLdVczGosjp3z4Rbr5yb",
  "key11": "mQRoiskuKjbrtnjkNWhKSMCVbqx5qp1icW2Bi6hbZZVVPfyboMUiRYwenPxDUNT2kty3NiJmvWb3PscMYd9tFW6",
  "key12": "3CrCeoaouCKZZYQYVG8HdX72woGn3naB2nq2Yk9qiwSVFxkgBXq5fWBxjWvGddMxHrP6tDdjAKAZ7sKgcuqHcsBg",
  "key13": "2uSwYFxCA5o4tBiMfFqMUKU4bzzNDYtzekdQPE575nNmBiSnPY7t2VouNqowAdDEqnRPPXxjnJhLyhSvjZ8cZ9pA",
  "key14": "3suCjRwu8hjsdZVSjV2W7G1Jq2WyRaF7VXHrJw8H8xePVHVR34HHUBQGhrNS9NrhQfMMEpQbGpJ25H6dciNmk6V2",
  "key15": "2SxnSp2eWcCKMgoPEPKLgG63ZJDgim81GVaa23j7MBMYwTG4BmmXRiATH7giDySWPoPCMaBwuqRmiJE7CDCGmjPp",
  "key16": "34QKyZx1X2ZDaaQ1HPgvn8nKku9XY9HXv2Nhec5TLJkyuhTgc16Td6YGKeNR36tstnVRMoHfK1rULAcQ59EMBnct",
  "key17": "638dqFJHYRsUx3LH7maCpCpMzF6fg1HQxnWovkwzh9hzrxsc3hNqSNvV2cyaLfLmRdTvewnxeCnGAjDaKusLqYeg",
  "key18": "aUm6GpFY7sY4ZMw9viQrgunRe5EHjPnSEnemxpnSgBFPewYqw3H3hFdgQdinsnt9Nmub5kZyiJ2SojS4wQn74WW",
  "key19": "3cm6td73CTPxysiNh8W4K1xKWmUNuTMVd6jbdbw2NzPsRdmiPHK6z9KdtHj16PNYbA8nSttG5wtBUWJKVxB9uC6n",
  "key20": "446EotKQ5Hy9zMctnwrJYh3nbqpwfJMWDESKToFUS1EBYfGMdRpG8qy9sH4pM74Wtj8nCAHjGwu4M5rGMRvSAdGj",
  "key21": "5Th62jpTM31pTocJVPHM5BCR5enDTwnYvQqwFbyCGXh2VTuNhTssvwJPMFFESV1ZE7GhHPTqeazJseDyR1Zr5GqQ",
  "key22": "2mKwBA9eQiq9irkS6KdByp4p6yGn3rNgQQBxudRGgojWXRbk5U99uCBhkHYm4whiFzMeYMLrR1XuVZ3pCWNw7cFf",
  "key23": "5DEEmnsAJH2oEdRU16ooAk6pQyBAU4qr1gw2rVFGq5hn5TNjJL8A4hvhDKZRJx1HffZ7uKqx6oEtV8VuCCURaLCb",
  "key24": "5TuRZYEotcwCGj6AqLnLDnoV7W919nTuitjC7D7RXqC8hWXz1dY45gVNArPzmAcPWa3vGFUQYj6vZhggVqRBpMrs",
  "key25": "3Ynq94TLG5qwbZpByGfPP8veW8jJQ6p3SBgRD4khQfr9gDxnAVMBb8LyKoGiKVPKkKUStL71ivv2TtCAaD9Qu5M3",
  "key26": "5EqWoFEkFvRodvAu2CP4euDDsSAwGusYnD8ySukg3C6YxKi3WkbihNTEN9C6hgVXvjqMbrZ8Wg1vngHYNQadypg9",
  "key27": "4AnqGevLn3z4YgAxGzhUPgELAk2gYgMf6pt2si6oEtLxXox2g7gKARKEEgG9PCNNJoVxq7NWYVBvb6Wd3q7iZtxX",
  "key28": "42CcXdekpkFxKUULCJnyCEykvuYCoBCetzASGydtdddNCrd6j5whncTaoVSqvBbMggWHvtqN2B3AquAMHcBGamqj",
  "key29": "23oixRR6A6p2SJR6D99tDAmiV5KdBJQKGGmnt6h9qkYJcWUuDUi2v6Zp4uFNk6AtrmwMd3NGZxFH1dCXEVPfFbPH",
  "key30": "25b2JDwX3TMWvsD8uyqkQ5LWVBkFXXdACNZhVJjqN1UfF9q6gujz98fhvJRZsxfHH5K2hX516WoWKLYrVvDMvPvX",
  "key31": "31HBktCRjtRJkoz3bFFTiEntc8aY86aphzGr5DuLExiJEeiFVvgrodKaL6dX3xB4sPRiLFYtW7Yv9ZcRcg8Q75rT",
  "key32": "5Lxox8DqZQvNK5zydXb6LYVvMwtcmnVpSjbknrv9LpWWNNCayphAEhguHtsp5KevVQbV56epnjfq8nUTkCx5ZMUF",
  "key33": "2oipBqLWg7e62w8ovb9TmJ8aUMSDYdKnDH6UWLTxQdcFBVFRr3WwSvQahvCmevTwLzD1yFTFrei2gGmDieEodHJg",
  "key34": "3sVzQP4BpTcExo7JkHJhqnyGJba84HH5zkXqM17S7t3YRwBR1H8ciRPMHGAre7YzdJgeqLDXfyVDcKo8egogN8Vf",
  "key35": "3oZwu26r7MEW6v6ojfvGzm2ohEyU79VWJNqWTuMTL69q8ncRgmbXhzmxKAt8DdhUyeRtZS4UF5A4bRSA9ineSn6w",
  "key36": "3eFSPULGyPQ287t4eBUdwtBbgiXPQS2vDGvecXP5qtWmG4pVz7B9WdT9vmtZJNPqtqEvzjynSYLhKkZjKiuZwJA9",
  "key37": "2ic8ALQLZW9MEtrcF2H69MmJb9mNsGdZGndSFdgEDi4jWuaHKey8zFP4tK2Cqqhgg1XDMum9bQCczYBZjkDMWE3C",
  "key38": "4Yvkk7j7kyYhb2zFQbHJKEbiPRmxPzPeVqVSbP7oAHB1D5YasBUmnjTgNttcgPtxfuK4XHpN13ehvHDyyy3e2YyV",
  "key39": "2jfwrk8o4859TPpRGPJzHjHeb9gGbHoAJ4zW13KuYiZbE1RT3tnwBzAxygJfrmy1qcy6XMgyJ6YMRZQYJz2KnW35",
  "key40": "RMpq2dF8H3s2FhzxrwbFP9yA9SFW2cDZ7Ae4dpKmBCfiL7yMGrgyrXGWZPZvByt86XZrUdrpww6b2M1bpCCNqp3",
  "key41": "n4MMQvHrdAW6Qf74hgghazerSxaqMpCREknkRyppfuY55qxHhVR1WN2AaovWbFqyy8ogs9WSRkuSWuzHt1t7F8y",
  "key42": "kiUKYzUyo6GRWbbNhfmovFiwCbYYKJNDyyaUEQCCYwojFjQg2HtCcENbf7LRVCT186amRHjb9A7LMkK7BfpJsb2",
  "key43": "3rFhwzfnYgruWS2tFZqWH4p93wjD1bzWxgV4e4bMs4XqM2rBqWDrUtqu5edKuagsXJ9tYxJnV2ueyvN7MTjU8eV1",
  "key44": "4vHPrRhTyHkJA5AwbcPyNa3jQbH6BRfdZXvw57LKp8CmbUh7s656sEvvXwJxXhpDnyCCLmiyMaqdyvQe7hm1J4xy",
  "key45": "3dcpxDeB6vawc2MaZPyaMvo3BJSB8qw174j6UNr2FLMV8EvJZvXx5tj5Na9k5VFfALwqA8YQAW1eESkJKxp9gRbv",
  "key46": "3FpFQh3vKFAvgFgpURnUiXfm82iRx3294FuSetMADjAx1HSASbdcVo2yAftX829jZfaPjJafGtSYVcgsKgbZqx3u",
  "key47": "YgJtM3eELGsnz2ypfugxHr1U4XYzbMZzLwAKaodzQqSd9CWsbWdzsUyfkQSdPreJwgC54QAqipzzwvtW9ctJ216",
  "key48": "p53XkVbduuGxL5bKuGeCBYS3HgqUkpSKkWuBuXBy7SHFHhaNRYcy5avFWGH9U7WX7gBWKJBjnJW8TjcEXBt61K3"
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
