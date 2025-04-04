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
    "4BoQhfBsLU7FPYuVLJ3pp8qKkkAsG9Mt6HozEj44HCpPrRdc4vHaf9BP19w6wvCjubP15BZjZJaRkJx5K6qAyg1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krDKtBV7PD9sXnKFLXeBRRGutDycmHDnAsJ1GFmao2FYTuXG8qs3V1PQ4wduQLize8nKQXFiQXd5Tgr3zqxKpgi",
  "key1": "ncXA7jmXX7V6fx9h9bSDZhg1VpbpqjKAkMe1XGV5EtaBrGPA7eBDYrEAKWk3Gam6jUmZsRMhttVxg3ze7CsLVEF",
  "key2": "DfqgLLZAmt3X4MBVBb2GuRYRriLewGBRD17eNR59cKdXSoGeKWEriB9gXcUnjX1qNf5VboE9cmJyr9wLBvsMe74",
  "key3": "mCAQw5GJ5LkVo5PuKXiLK3HYJxXQGZKMWzXokZcsWfok3VCrmCwAXLvQL5oomUvrxUherc47UwerGFiN7H2Hyem",
  "key4": "wMqJF2YfX353hWxQ4UjAwYH1kkAjSdJybNPXfRCE9eiX3dWtBWUDCakU8u2Nqy2S4Z64KdRjUg3Td2hAUADqb2F",
  "key5": "XAFjUXh9UHSDCsMyqkSM1m8htCGFknBBp8QxmcRU7cGvPVLZh4cd6aGAVfGFAbHF524gC4Mc4Z979oKfXV5kX3t",
  "key6": "2tDWvjpWwfe8ymL2mpCm2hG3c27SA1Xn3GrLgkV66GucSQojrkiymTndmbzXS1XEJQs6BpVNxRn8Avha6CNp51h8",
  "key7": "4zjsBqrcASi1WWgxHGjLFLr2pyhFQwLAaFtnZss28hExu8jgBKBBteFHbUJ1YDmotcmoBrjCbvdvQkeKxbxwte2N",
  "key8": "hQJE9LwRr4NPC5paULFkEqTbLX36Sa3Yc7iu5d5fiuUFXC8S1oveU7He3Hr6pnkeSYdPPZKeooVZcDSyesM112s",
  "key9": "5y2m3357TN4JvkG2DJGqZoep9MswkmFR4y3yEz7nFPPHo3dGjKUdKzNXcEM8SW8i3oZVPSBFGyeiFpYucuHH7rGb",
  "key10": "4zgKDFCqXpR3MLksHXBWLgfbyGyuw2RpEQAcdGqcjW8Yp63uJqL9XJzSgWScSxWPjAgCSvEAUQDgtuYsZ4gXAxYM",
  "key11": "dRhFbsCoci3buGMEVTb6B3hfz2dSD1zjq8WZjDq2XraP6wj7nCwbHPitfJG74QpzopqggwpZvjsDG8s9qDW4Ejk",
  "key12": "3fPcjs4AtsEmDqEjksL6qTyKrrzcYneptmhi7UG3YKXmhPLxik58wU6Mp92y2jZCaKHRonKSPcPMDm71GZFKYrG3",
  "key13": "63fmyPzdXkvrhP6PSUtxtnvQNpLMZoMfqxkzTa6qZ1mt1HNkmVQ151rB6d7YxdVFGp6xXJW3JAjTMjKBw8FxfawR",
  "key14": "5NRNZr3Swt2ZeKN7rEWi3zD75gQ9PgDTpTh9T2uR26mpLkmh55pRGVvCHaNKvx7xden3Q91qKyoG92FuFirJVr6b",
  "key15": "5xd8o6ucri22Bnc8Z3JV1d2LSUkatnphDjiBgokBkNL7ph2oKGeKkpud4XbJtshXJZ3Y3ZP9ZgU97ggZ9qpZzNrA",
  "key16": "zqTAvVbmosDNqwWXMddTLQicdg2zGA6ou5N97utzet66ycE9ba1xCGYgXcTdDthGRXHL1Q44UrsEQ2ytRT8izcA",
  "key17": "5ukymbdVupBRxLMdPbM5JSBmTDvUDvK6bs5XYZeohbiKBC8RXuyt2HNjNGpi8MYVyQi4cEtQe9B2HGuVcTb2GWg3",
  "key18": "38PrBrTjjmj1iVELb9ShrV9UZh68R5n6g7mwsy4u6fgZSUMTZtuWkTr9RGmE92Khxhwkdsj2QCzs3gFmNRDPCX56",
  "key19": "62AKmNcGACY4bZBKii4LG4cDzSCkbjrv27BuGvXuRFz3AmZbV8jFm47TwQ6kfH5UffoTt34wbFtkhdCUH7PyKwef",
  "key20": "cVLuKyP9vkRbp47oRChw4eD2ve5aKX2H8CHLbbNM6voy8Kv3JFXRmP2uDvKGFevXQmhLosfiYrnC1HDrbPaq3hC",
  "key21": "5VQ535T4RLf8KSJJKnJUQK1yf5g7pvwqoebaVEQTjDyAneceDP79kjS84EKYMtGxST5Jzi3NcsBB2fjxA2gGLg9F",
  "key22": "2ruHwhZiKonYK1Y7zrSUHCUCtPuTUKin32mKLfPqdM29ZmmvJ7aNxT5jBgwZFSt8M1rVfMDeX3JSuVUW3n9EACqc",
  "key23": "JKxQ7MUFwAUHJ954dep9F2eFiGNr19tQPFDwG4a3WweSQUYhe2NgypyYb6bFst4M8uDiqbBeN62AHiso6cFZE9s",
  "key24": "3KbKWMtnTzfxjMM3ZVzHcMem9JByQWfTYqCg81w1ewrPW6dUnQHsWWMMVVB9E65Lm1CR4cP7AY6iWmqarb7Pkx33",
  "key25": "LSeMiDHm7HhcBJNx272i3CWLPeH7q2JCD7Qd9qUeSbAraNGEg4uENLUQbnr9bAoSm56gNJddBY5rtM6eUz2SB8B",
  "key26": "55cReNwM2WUKAqWp3LKRPvhe4RUrCx1AN5NEVXNZLTkeAj8tKfFGaRgWpbdm1DCryv3gBmcvqTLti1Sdo8bhv4Nw",
  "key27": "67MpBxEFDZNQApo5QNofwMvFjPmqDGvrcL2qVWmJ6EQHsvdRoMQEkPcjDU3G9WRscNqqZscHyZnh94SU37MEzGBn",
  "key28": "5fSGEAcbZZpBKnabNxAywdws1ajPFdQZubWBCMWh2HyNaFHQamqxh5mtXkD1Jdr299zicqvBKetukdbhMLBthftJ",
  "key29": "2tnR77RZc3B3ZH3ExuxKex5FW8vNeSi7GBs5KSsXF1hj1akL3CeGu3zUzZJrNCW24XA3R5hqoH9kqJLDiPjoGtX9",
  "key30": "3QEbRuRzYsCf1RF3FTeTWNDZ5aG1WLnP1Rq5pBYbxRNaPYf8yf55LB4SKEvBWxRkdYUPoLcbjMVP5edxgJ9yhhJi",
  "key31": "3Y2pP13srFhEX614kuxXaNv3DYyETZMhnCg2dWUwBnPcw3m6Ls4T8WkkrkSAFv67fkLHnK77RAwwKCtJ7jNqiQeJ",
  "key32": "64ymuXKeZu7YoQ2XbZCwfXLqWgrvW4t6Ss5xKuoPd3zW93eJ2cB76pSkt6v7mewFnbFKVGR8cXWAAwrm5ytqMKPw",
  "key33": "23jjPaeq34zov2M4v1WHPB6Y1fsck26SvaA6sAdfDvoKTvSsyNhn3w3WB7PrAD191KvzvKovjpL2hSBKGByrKYxs",
  "key34": "2uXAmRUFuh1Xv3owQM77jfQnfSquDLnP113q5Wy4iGAns7ecpDt7L5aBbfMDypcyTnspBsbxHiXXZbPY89SeMJFQ",
  "key35": "3gcHW2yLdxQq5QmbSm3jradPKssxBzNCEjk95gBsjNPurVMDMvkwKhNnUQYgBWUjjnCaZQFY3aPCy3EYnksDxjNp",
  "key36": "5K5J9Wif6fzn91Nj5J5Y63wQiqgZht1x6rQ2qLZt4zRDW6gF8aaxTrwx3iNTQ1Tzvn9bMRzWwmmvhX52BD89SDhQ",
  "key37": "2Eg4Gq9gQKKM5kf5UmfsCLsqTUXfWtzkL786bbrZTpRqSARnwpwV2qFdvS36bu3GMFaFgwWKaMiGJf3wdb4gMGBP",
  "key38": "3q8VcXvgYjHVFKLxe9Hqx3LQFipKCx9D7rJtZaTjfGqxQTCCrxy6YpLP3JtwoHUNg1ZSuUDGVBxtPd4TqRtaA741",
  "key39": "5uaM1kdv2CC4tr2w487DDNk27ZxYUzTTWjHwWQkVx3hjGpzJ2wiZEDA5hmSHNfmJa16sUpy2EFvnTJY81C7g6Caq",
  "key40": "4K8bT117kGXE8rWbUV724qKMysHugnrDSLYDQ6QVbsyce2SckDk8CdozUjWeT9fU8VcG4CVU5R6z2NczjKdFUMSa"
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
