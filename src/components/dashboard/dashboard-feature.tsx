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
    "5wFF3bjFH17YRsTbWZfYRBSTGPzQnyc9jtfqSMVJ9SztBWSFGHMHkQiZREXE4yt9nme6iyXZLcsw7NBhQN9s4kPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vqJdbe3zQFxt6wQ84dw7jcjeFYH1wyupVwL8U823zGJf6qmHUezjP94wg9VRyWuFoZemADr5FThFLEPeHrzA4d",
  "key1": "4Ap45PbATCgR9sdFb3XGWQTHTGqQbZV3XquyZAoh8mKmHmZ4qDgiVKSGymfNZBMf6CTUkXCw85Je8VPvAkzvwEE2",
  "key2": "2DbvyRXpC4wv6QkMdcWipo9x9aHyoTKkCj5Vm38pYenE9E7EnrguvUHvyq6vGSMitdt1Xj2jnRqvmfZVWnFu35qf",
  "key3": "3W7WB8wbWPgLWDEAbmjvAVKvt3ZmFtLw877f25pAiNRfGfeoCTsMgHR2HyoBZiJrxowex9gQ6ExzKKWw2BgRLW6e",
  "key4": "2Ei9dLV1edT9yshn8wFE1csuZSjpRrkxc3qqaaJkFS264UasGs21SmK1auejnkeRozRMg92wxs1q6vhcdvuPrXYd",
  "key5": "4LYLwFqyFoSerZqkb1PY6XJoebgwqtMAvXmf2v1kCAEYWRt13QVVNsfUGWPdzBjaiTRDF1RspqTi4MADK78Uzchr",
  "key6": "2PxmHTEvhpLRJKF9Eh5FPHT2hjX8u7fzATNWQXPVU1s5kjzzb3nefkryfztdVXDNuWw4DoiC38kDzsHrGUvVDxdr",
  "key7": "97UuWQuy99KABJSEZBMa116urgc12Bz6uhmksestr4Rz41jYFG6JBnzACdDGRpXGX4WE3sAYok3nu7HpaVcrCFz",
  "key8": "4k71bWQprjGyiuLqYZbbGUJyYZJHzrHbjRUjEL5yfgNrPETcBCJ4RJ8Qo8ukbFChFTekna9HYDeFuRNuoFaCjMH8",
  "key9": "2encxkFCAUrVgta5UkXooyuRi5q5ohbquzMdtFAzszMCgPcauQK8CA1NMprZPUzjFGbTEgWdBpDsnRns4ZpC8yYN",
  "key10": "3kkbiMu2YxQyfhqpNovDLhvCJxFR2gXcXetqPWeaRqX2gXJjbAY5V9PfAW2hEkXqyUZkU9NEQvoj7vnHccCQHb3T",
  "key11": "5Wc9xUAnQw6ieYWG4qzQR7GPMizMnmGNiFkus8kiK2ecTzqCAK1cZBAVQYPCTh1zXR5WVBsyzAhx21HHj74khx2E",
  "key12": "ah5b2e3Nandw3FnsMXPmSxPPBMghrKUaiwNRBUeuhTGgMCyzsDSopLqHPiiK9oMBGiZVPDyuiA4U8HyqcSLpPf6",
  "key13": "6442nzk5kduuhy2d2FgMWZEced15MRu8yvBw5zwRow3FhoErK3hRw7C7XLbRCRQukkvAU1d8uqvdFxY68vFVzNjr",
  "key14": "4BnHkzVwfzeA1bWjxafWH317iSQgyNstbtyYWL2EFzr4xhzhYVwz6VQHtHaQUUDJ4HKLS8q5yrvDhPZ4eCDJt4CT",
  "key15": "4yKqHErpar544Mq1C4RrioQXzSPY2qvsifAvDhK8mrom8j1to8teQ5sisXxTVu6teNrZMGXb61sUfoS1R2GLPy4a",
  "key16": "L4mV9t9vyFJiW7RhnBcQ4sYxCeodQ6dZUYXemcYPH96EMbhXAboDC1pfLsK5EAk7Q2pSeHgMYXERYV9FTFXzPmH",
  "key17": "3WqbGViemAaTpBMNrgVfkhujXcB7rqGiHogEgC3pVpfhwCyyFALxj5bAnv4ZeHbhy97EskAuAQ17NjCTB1a6ea92",
  "key18": "2jBxw82erRrqTmE2SfpCo8nEN8aiB4ZYTFwY1BMkocfT8gvtboyESkTd2xFUNJvJEb6qGjbiUNeHtkP6ArFZaLRX",
  "key19": "S1CvndGifL1751x18Qa8n1bBVaVrLGyahd6D4TaVWiDegortXWs3t9qdXWFE4JngjhCKzSgG35KHjh13va4VB2g",
  "key20": "4Zq5nCiffeYKE6coF82eGTtAwP8ywsn4XcTnUGe5wCg1Yd2WTKjudAMpJWo9TD6ad9aXBuXWLKv3KZgxrU8YixRh",
  "key21": "5veb98uUDtQUf5EBHLZHD6iQW1mveyDJPbksR8XUUYm32vRUawjTPDFnT5SxcfF79rJckQncH72ubiP1PdSq4HVT",
  "key22": "64oZrrT4PPHSYYPtMVX3B4iZV2rzYovMNSUGvAbgV4PGPtwqLNTyfj1pZmjvYt8mdZaA7cfvSLqUUbBmi3ime8yn",
  "key23": "5P9qTaSdymHL1Dn3w7ioA7YMbUgZCDYUuTDSFkwhDEixmjm2L3espN5WVvJrcUS7z6eWCHQojzKXHF68QKmUETYH",
  "key24": "JnU1QmXaQBFBwABqe2q1RXNmoycaLr4BKNGYLfAXXRQJ9S9YPkojvemRbN37XQFGo1fCqYVCqT2ThM2oJkReRMX",
  "key25": "2T5B2rA4GW8VAvn4PExJ7sfT2GoWsrx5tfEMwv7W4ZNQ7yps84KSvpMZFUVgW1kXFW1js5osnsGM9nzdotJeipzg",
  "key26": "5QTvSMoKRacUY4mt69JdHp7ep2bVjtMv6ftzpgS3Aik3TSyFKjccdebbYArAxU4SQ5gCaM5KjjgMNHXgnVnub2v",
  "key27": "5AFg5qb1KBLuwoNwVxhQUs7tsKW1aKinw2ZHGPdDQsGyew9kw3kBp5CCyfx3D5YNTJuu795PTL5SuzxWCjs67PNJ",
  "key28": "DnPxKwNnzdgCxPKAyT685QotXjKLPGfuXK8t1NgV5Hquoq9A9Gu4W5nToo3HgxwbBf3SuHbYusVnum8DKgp7pHf",
  "key29": "4J1ATTCZjmB38kgSHfjkuuqFH2DkGCwun7VedfDTY8yEoXngym3mf6HAitwUwg9P1AKYBahMpfvM5zGqgPeoGuqU",
  "key30": "phizGEp1xT7h1tnS5DNApC2z85EMhaSmwhdc2S1Gp7jFtMbHCFDEJnhY4m1cQDJquzoXSH2UE8Gwwf3FgnuiKt2",
  "key31": "5DAbQTvQzMdPbpG7zZ6N3suQThWpYBjZksECWL24yZh2EVzp5wnieXvUzj4drsWPntGvjgYy7HRSstzJs8SoHaJJ",
  "key32": "2VMvnoRNJCcEzjswqspYifmbVsQFWc4di5mB4HxFBDYGHntYqjcroYbKD9wb19YaF1MZZD8PWShhsTvxDqTfmzuq",
  "key33": "4FACEvnrPHif9kz6PjJYqUpW7EHzMpWn52GfVqbUXEt2jaQGZGmbd7oNrYKyewHuzYkNy4L39bnP8kgeeMTjwNaU",
  "key34": "5Pvj5hbcBLL72QWaQTLmXoGAnVxcM5WHhuTAFJGxgteCe176nDjngBfooAV3aYZkKzdQe5QepQXwYCKUwUgjPexF",
  "key35": "4TV33qasyjytMTWbLENA8bgnDoQyxv4V5gd7w6L7fHhVcqrZs3VdcKQz6Dr3wHVdugL2WGCwinWJgPPcK37L9Atr",
  "key36": "5E4v8KyyccV6EKBCDFFsca8UbT3K3CCeeEBxwhnbfbCAHCfMxT9DTCWi4bkswqyMk8FPBvEgcjxyk631R85ruud9",
  "key37": "5kWPchRReJZHtQZM96CopEdLbyFNeo6nGfaAgj6YZsdPFAmhfcAJyeCc8MmoZ6Yu7Wrk7v4KJr8cQRUBMcLmrbUb",
  "key38": "2XewY8sPWJXaczRVADpFNMw36kjmvbrsCK1JASxgnFTGwato2emPKtCAJncX6Mm8AfhcRtVFQHnYaUUMt822fcoZ",
  "key39": "4KoKBBQb3YU1W2Nb2MZD4mJk8knsxksiNVKerm5WjnCx3A6DSX7fhU7LKv3SMqP4JZexF8eZnZkAPfS8a7k6wnfp",
  "key40": "4YrsJbQvQ7Wu543yLYxh4n7YiATLRg1gAadz2dFzXucm8iVmZuzEtXDZPeMP1jnUxVihqj8rohFi6G6CEjCbGFzF",
  "key41": "k1bENzTN1fgmMD2sxyLEvGKK89Anoyg3ERcJfg38G6RX4QFjBUHzYuFei947XRSTduER1ycY9y83N9B2shAvno2",
  "key42": "55ZS1DEgmf8xPfsYS7EaG5T8DpWcs5G8Wuz6aZuz8ThZ92opNiFz9vqvWtX9UHyLsivxjchhW3mawJ6iCyVaMuii",
  "key43": "aReZDiPkeQN2NpaQz7oPRxm8LVhTBg5kvwVBGcGaHjCKGgw3BaXuu31TKT6XgDNttYYdAbW2wkF7QhCwZnqKJ1d",
  "key44": "3czLtKDdWKSSzENBZj4JZ64pZw1WYh5qC9cS7qBnN7iZvjxSaS1oq6oDGfgE7FvatxVfyqQ8qumjmKWnhy4Dg723"
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
