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
    "F5yJsweMnnRyJWbqTEmantyXMCSepYZkgLJSKgr2NrcREwQp7ouyBq1XUrVgB1RdY5nVtd628WEoGLgspy18BXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K97jmtv8mJPrHCHbtcfBr2M8h6Rn2jeywApGYVA1611Bt327vkKJfkEZUxP6uVWPbUzb6Qdgx2U9PY4VeUitGAq",
  "key1": "5u1Zy5Ra9rZRjDWNCeHmadrGmzyBDF1XqzATorUTw1nRMWy4DnceziWU1VVoCY1ZnVc2fXUq27ZK1ic6b7z3aAxX",
  "key2": "2wgZ8qxfT2Pd9TSxHh97ActKeWZ9jRPaNkmKbgvAsNyekBpEmA3YhZWvNHuAHZX9VcCX96rxXmZZgKUNY7VQmQ7P",
  "key3": "2NYrBp22t1op2wimg2YdK4fYz9NNm35us1V67tTVU7a8GgHcFHcrRo4dX9Xcd3us2BFtLEfZw3Q3yPeSHHK1qDAn",
  "key4": "9ADiCpeutFNmGvWRQ85FTsQmsFeDamdhkGBsZmeA8ZhAEQFd9yoWqr1ngi1i5fSjn7ba77cUFu7PefeWQaiwmFY",
  "key5": "37muGtBVHbxfGHN2snepeiY49QEfKfCpjYTbTAEk1miu6hYogp6vuHYtdtwm9tuK3MUkYqvv4nnyTR8GhYqf5A6r",
  "key6": "616XyYRFGXCReX8wX7kuSzh1zQn7wcAibxqaWSQN5uCsKb4Hjqma8qU3u98GyX3apF5dLxA7wAp6mnr5JbeaAXi2",
  "key7": "2pQP8PpJKveB7bGToQE55c6fV16YwaApTtmGGHLLXpkiQTEHXsuB3CcKwhkEktPaNdyfvw2TwkU2fxJ8pQtQnTym",
  "key8": "41KJUCa64R8rUiWw7tU7qACHcpFv4QizZDinz44sTxxGygq7RkVjhDu3GgFVAin1pzNyQgGFo8sHQqLKCwYXQCmL",
  "key9": "29ZCqDgEtp4LGDB9PemCzMg3YphX1qwhtyAaewz1kuhXm2axw2DngNcU2Lv2iaaLpozmpPBf4wYJQNJiYPj9M5yG",
  "key10": "3Gpthg91KtZi45EKjGyGkdx7P7zieV7cZ9J31p85it7zXgzLMUsDpZ1DEjrjKfaaz8EtE5bXxji6ezkR7qBRyNvh",
  "key11": "3VQ69syDBH7hJQDJHZbNuwzoooYR3rLGke8xXMYy65iCLMCaawuhbqNL8MAgsctiVTV5oqmirVzv5b9P7mb2hNoB",
  "key12": "5QQfSdkeQe4dK5w9rJJdW6R3PsLpr1X3UhWYutLji4Cx2i1ohavj25gmiiEnPgs2rgxx1uMzBrxn8c6AgyAF8vX1",
  "key13": "3ycgekh4zr5w1ah7BjwZPhCvEBqZPEvnVAm8DJsuENZ83eeL3sFABMZRbmqwYgT8xoAdBgvgRhMPq4outDTXNQzr",
  "key14": "TLPy8vYBdeZiehXxPJXrLXa2ULtMgbMEDzmJwb2KRW8mLdymhpLjTyhEqH7eQSfhYAfe2dgZVfqUg4w66sN96Sj",
  "key15": "3qNaMG3wvyDFZxzEWzXqZVpAi9pKE7pmZDnjwGJ2VsZvAwQcXu8uoFUJcqKbXv1Hw4GCaEC8SfDU6ZsainjBrC5",
  "key16": "3UXRuxHBGxJUtoRgrBmk4wDD4jLT3pFXS9bRptjHRjcPGbgCjWXpmSc6nY6mPquLL89Wui616gt2v4eRaE6T9GZk",
  "key17": "4p9b9mD6MfpbhnQDzBWfQFtnug1DiTy6dD1KPuGC1bVEGqAsdaxzRngAChxDARHd7b6cTiVDRzG4irWqgtAueGUo",
  "key18": "2yqCtSVPby67J6D6fv6XHZ2Fs9Sf49jS1cjreJ1eK72Y1jZxkRfXdeZE6eSwUXSXdpujfLtPxovcLvph9cyJaUNR",
  "key19": "fbJGxZzTs661E6NHZ724VizsbfvSvrzjh8XD6xe43SiiCgqtSuJSwXQLroeg2XUtaTa1GPJNs2PdUgd9QBKASkG",
  "key20": "n539H3hJqXgJ2DtTLxRRu2736xF1UujQygXfjv4cDkFaGsjXBrfxE8huixU31Knrfs4uWupfx7SkW7XbrkHp8Ke",
  "key21": "NSFriJqF8srnZrTMyz59motktWnmFrzfN23MNKWJTxL4XgfNAYehWcsEAKM4NJJ9SZbAkCWHQ3xdewRYqpYL5fA",
  "key22": "3pni9NfHGk5Cx9J3ZvyFh8khihpAB7WdXwhKwurJMbjMhLTVJpq68Xmxzc5Wv9vx7fbCLj93kQNY3mk75vcMqW8t",
  "key23": "2NDnuCrhKPtmRKVNkBUjunAzfrywM14SmZWin4rWLCThY8ZBVvgwNFzmtsv3gNDbzQH3f71UeHndMnrRYc3x9hzh",
  "key24": "54B4FyBX3Yeatwi5YC8wNmYCSVbtb6uQknyh2YebpDtnepc5tqUqRHpFkQMQruPXJkVqst7h22L82257ZZeh3Khr",
  "key25": "2Jk3odGQ7NWYbUeAY1kvBMT9sKuBYpRmEMvx2bp8ocfqmUPKpWMQBYbbxqSDMrKNn4NmTRbWjb84VeRUyQWhgNsR",
  "key26": "2FKyNaNeJoJ5jSDydhvTBXJ1t12PGnUiYXVwU4x3dRakFPrcwnn9qfHjurcuEmesT99bvbMetAhMfpat9gkzhPqx",
  "key27": "3UENM5Ga29SCDHHBWHp8nDjdk5D6zbTdMuxn3SGpLQN9GHWw9cPkL5Toyio7RqjAJJcYKcQWpASzNphiEj9RhHDR",
  "key28": "RqW9HRLqfXeHWPvfrJQnMW4PriBGfv9BfVWqau5wfHKWKQNH1RB4V4WhZyipzAR9pmYsmdAoFbDD7SnUCybnY1c",
  "key29": "6Gaj4vgrTqtEpjCFcTWa1tY9aDhW7ra3iQVs8G1krGie3PK2sqJVViAiU3CLi3tsnb16PfCEBGkgJoGHeVpfn8p",
  "key30": "hGCs6k2K3FpnmhvFsfqQVsKoJXhVBQ3bLhswr2aCG54mEe57p1evjoMiCTohiXP4UDQjvAYUgL2tZdGQ333PR3s",
  "key31": "296LoNgiamqewPQ1b5J8UDZTnM8FPgKmY23J3vy2ykECN7V59rxSECfx29VVGzfL4g41atqjyuoYgGwLbhjwUNjR",
  "key32": "5B9VHX1bvYzLcJ8giwGzpLdaGJenK1fsFMZhJ4SNGhTwuSagy73PNfCM9XbMzPvJZ1APfdWGKf5M9ekS7KSu3irM",
  "key33": "LjyszgrQrKm5jhLWuDjMJ6yLuXcKnWa9KZNqWVxLitnox1dRx3wEynLnSEWsLoZp3hbzKVQdUrPZGWpexoS4Qi6",
  "key34": "4kTqWxnez3eXLShj7sm2NvL2QTiSGg72FkYeYGxVwBnAtbQeZqFawx8th6s557NmPKsqvHbwuhZ8jghYWMxsvUFC",
  "key35": "3F4caEr74DiNvBg8gvWxK2NoyUk32m5GFPYz8MwoEfLJsPUj9W5Tpzj2rkm7UuiNpWVPN3RHWJw8hVTuBbLJZDkY",
  "key36": "3qY9vsCqxtNWmVEQJH8o2sWLfgqBhcoMcwYnoQPj3Ph4HNaxLvEVkPW58qU5K1hAqxjMtMvnFKE4k1nCAfZouHc4",
  "key37": "2rP62EhujbpfSUZXKYsmCofNtGSo5S3dP4WTDaPQu19YpXJv6A8wq9Mq4cGxq9GSiH6yPeKYiMqdgGEZumGVk7n9",
  "key38": "538Tazpi3Yqi7STL6JXGp7jargE4MwFoifHPHKWkkGwJABHsWf8Qtr5Ex2Ds7KaLY6E1U7ZS5V19WVLVV9CLeTrW",
  "key39": "5Q1UVQ6k35Sq8tQNz3ALL9f1xefRR1woTS4uwdYLpnhGVQ3LLfro2q6Bg9DYfyzPsGfUkDE7Lix7RPNeThsZaawY",
  "key40": "2KVYKzr8PVm4Ujt9LDUKRu3hZy7M6frXYGtJBeRjrf223WyERVNGKoMeEAbb3eGxD7garUdJSFSvYoo7LtupCnab",
  "key41": "65pk9Qdun5YVR4xTed96NmtkcMsjx59CtNnVAkZvPUAq4vfbsAqhFtYH2Pu5ExJbTgCw236GrqpHuyKPnWrN7MV5",
  "key42": "5iUYFDCLsyadyuaoigmn6Wys131ygd6mQbVLVyRd1YYvozA4dXEiFWywyuZi93UjHH78NH3wQMU37JM3wGtjV2wq",
  "key43": "44h9yybzuuL2n2AXWW5s4XbvUdDUj774fr8ysXko7GsMtLKwcQZfxLTPuGkaHGnhgZ4jMUncTDj6is6cNoqBb4XY",
  "key44": "5kEenTRTg4kRUM4ApJRnXREyAPTCvteXsc1amCmCQLJnKAnH5nGmySo6Yyme3hfcsbGpwCjbqUJdKiQ3oHtz2D3e",
  "key45": "35jsVgmjfcxu3seQ8FJQPU4b75YYyevVZVaU9pgafssWfTaV4Y1k3nx13jFy8mfgRngkiu3UYLWWc4nggcR44zRd",
  "key46": "2NwU4CvkC9C1CGHLHxsjkfLMRFefeFwH72XZfuYaK7EjooBjaWDC9nr8yDt2Rj92mrrnhAmdcCmPMC93FJis1tYr",
  "key47": "xJyWcofFs7SZk2KyDFxG8bFC4XBzpK4JcaxBVjmdPdgcnFyxzAEum5kFbh9GftJyh7csfatWSBF9eB6mUnhSk5r"
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
