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
    "3CBHgWtWeAuPPEzmadkw4LR3zG5E88kcRAR8txEjKFU28xRVm7Mgw744Mv3Tn8sCCBN9aMZUMrf4AH1d2Nh1n6t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKPwcGKYgCiZR3uEzU4CNwE5H1e5MtBQHZR6n9qWJjZqTpLug9fBNEg6srToyWrts5BAVdHAyv37w1z9HkuVNWm",
  "key1": "3VVBsvyqPEdV9YucphiGJ3RfwzMvRwptoatdtZAQWy3iy55vF1AcNxdpa4jKYKS6rJvwfNns5jeaJaBfnYYxW5ko",
  "key2": "3VrNKmTvEvjhtrtRzaTThy9crFzTMmxcREPNe9EmsGSKw8A1v4JCXRJKUTMjk4FYvs2iErUg9phSLmqrbcpG54rF",
  "key3": "3WJrsQQjsNh5feiDkwuqgcLXVLGvDG2yb1FcrzbvPQHrJXCJcekxn3G2HfTTAjr7bTRKZuM8G2zqjiQwMcr9Pn3M",
  "key4": "5fQDHLU8yCGswWkovhCMtKVRxQv1ZVV82Nytwzk1aGirnTFkxD3KRjFrpvvm8hsJ1yLr7CM7vgY7oJDg5vDZ12W1",
  "key5": "4yeztjrZ3986R7hNq5fY2wk1WSxBBUHRkc41KyjtkcBjJYWanwouqonZDn9oxX4wcY8LRVDsF4ucWRw8t7RdXNaF",
  "key6": "BdJ2hziSgRbfwnZYs623BgEjcXxCpMHieB16yUwPM9K4JkqfXRuyvRUoMVWnPFAwFhBhvPvubEaEgKazKNh81Dq",
  "key7": "4f4PeHq4tG1VMHW7JiBGyv6PWhrY4t82GvEJ2UcjMTcgc14oq2YnNeWfnoGxDZTn3M9tXXRWsxdtbLGqJE6i3UY1",
  "key8": "2XT3gUH3WTQgiJzyYseuTYGH4XT143rYCvUNU8sfiUma8nnQtx6zPkNFfKfjbiHHTkQcB13L9HN76QacRzhbUAJf",
  "key9": "3zoXZvwVUD527s2BtBMTWEqqikd63NDUibw9jn3igjPurv9toV8b8Coq3JSqmjoF3yh1Dc6kvXdnQnVVmZ1H4X6F",
  "key10": "4YMgM85DN1Ezp7XoEqoR6wZCU3uAL7UwRvJaeQETc4yfHF1vGrYZfeYg2caKYyxgRxXYGJaZKnigqvXAaJHvR4u3",
  "key11": "39JPa5ZYTyLjazvowVD49wWL6Tvc8AwTD1jBptg4LKFGV7KJtVfukwfXvpDg9DUbV66A7QUfxHG3DUZjdZ5NxM28",
  "key12": "caZvWfsw2wu7S1wLdjBmb1gmdkrDxgtn3wVmVt7Gouy279qFZFKhpswBfvnYAmUQBz1aeUGr2SMqS7KKZfJhrvC",
  "key13": "4cHXFTkHZSR44nsxzaMcex6HJLh6JJud6Woc3vuVNZW8LY9rDx6QnJ34xhiXbZea5Z18Y9Qiss6YM9MatucGAJKN",
  "key14": "58bDcZS7kXXN5Srwy67exq5K3MHCQvN3fQfnsmsPVJsMHUHr1HkwtEHA2m3jdM94ysYtTKZ6yo2xq73qmLD3BKdK",
  "key15": "22ZWWL4DrHFGMkcCb5GtiRVUdvHF8DC76DoUrjE2H3UeZ9yaEGzV3RwbN6LZS4QDDqCEPDJuui632CaKjTxYAXft",
  "key16": "4mXrAKsptPS3RMDLJ6GJEVAGEyAAjUewkJWxz68BvSFb7omcNoHqCFTih9Xrp8Q2967HdkNdcM9xiQg7GuHpTPiV",
  "key17": "3YrQ8hEde1qFPxeYWTuD2ndzxxWxb3qjmW5XwpBSsVqJ1jCviab2nhbYNK837ASFvgTK4s3sCnMqHDwHxDms8Xwr",
  "key18": "57v3DXjRrVNXVmEEAG9fhwrMftbtVHDvY1LQrbVj5UTWCD2qUAi98bJnj2JCH6rdSFtEWZ7uME2ZZvHj7jWnoQe1",
  "key19": "3Mtc2zdhhYKjF6juE6ncwpHUPNtZdYrkNSRQW8jqAed23eYuUKYi8oxHr1Bv3s9UdRpyosKEL6yQTDGTUC3Qxw4z",
  "key20": "47mAEdgrjrBaBDiqA8VoLwKxJKAFi9sjtV5m7rfRrrmUYBrZgX4eCkms3G7FdvQzMBiazzT9GkTcbwJEXikeXToT",
  "key21": "2R6r221atxx1txJxUHyK3SKenq7zfFSAS46CHddH15cCMf7e2D7iz7ZCnGLfAMfY3qwtxQPKvy4oAoyaCBvbS8Cg",
  "key22": "3rd6hpFyjgCS3uRwzKRmUnMcRMXNpzpABBbsLgTK6fncj69fGK9w3dmRkkkVzudsvCrTbRmmJVv4GE9NpZp9Kvaz",
  "key23": "SS7JDnW7vYYbrZQz9fpYdRZpqVh8wJVCZw21FgAiHkoh6UdFdhMmNz69RU6uHP5YDbULePApwA6qfhEZZHCnn8q",
  "key24": "2D6UnqCc8sWubCGfJWYWiC5XUCkTRpP6EJXRkMMSLaZbbmFWoUVVFS58q6JKj3vmc5VmzbnKahcMpZhq1wHuMdgq",
  "key25": "33Hkp9jDNYo9hudN2uZ2fpjyKGXtA9BsFLJuT7CVD2QayFf1qC4xLAYneCNyPCSnQRxc8PX7EB22XenJzqYCsH93",
  "key26": "26izrsPxfzgE7YgZ1e7JVJaTzcUmgsfCEaMPG8ThjZNa2cdvX4fpuSvHk14KfQfA4fjfHrJeHpkGSVgi2o9Vs7h7",
  "key27": "n2UYtyrzUVXPUrJfvGE2mRjYGvMR6bQX5PTMnQyu1422ALcNRx31SXfxQyQ7Zt6Jg5gnEFPFR34CNQ9o22yZKtD",
  "key28": "22xUqpYLJJJEnJjQgGAUTV7TWVjhfwSTJcTKJVCMVFLo2EdCBHVYi4eVD5Y8jPjxSUxKbuz9MHPFDEXhsSe12hsv",
  "key29": "3x7c1U5y5KKBjUa3arhA3CU9S73CvdWJeKZE45h1XVbwZtQNnp8yneTWbpkh9HerNiWvRwFcug5JA2Ynwb27MMoH",
  "key30": "4JwuHKEXUsMF2gDMNjX8SRSubJn2M3aszkP2QScNbAE426LQHbw8CMXsUsDxJNmNqXk81HxEz8Cxg4LUSPRV93ba",
  "key31": "K6D1xaBTHtSr3GwkX3S2cswPPLmL5yYfYtJiyGR7Rp6NdSpn7EKH8MfLsBhSTx9Te7FqrRYBt7ZvDiCWxi6gLBw",
  "key32": "4eEmsrqMbqb9TVEmE7M2aBt8SK7SBPYvM6BV5uvWQ8xVfVzPJwDq8gT3YTYVSevZ7cXGgRKqd4nvFJE2q3wx4RHC",
  "key33": "2SEDQF4YVBzJPpZUQhXEGvwRVay5qGLSCMVgnHdgSeHJcvJ2iZ6wtpE8UjZKPvLEiPSuSgxf7XBBGr5Hb8uygfU3",
  "key34": "3YHpu4sqvzuYRsygr1vPMSp6JG6GsJKvPtJABBEoTfxxw3AL3jb2J9dHBmLRkc6bMyipDZgtYhpPAJHJpJWzaERE",
  "key35": "WmLQe5a9iS5xrgLxPUH8ARtWZ23ASG9bzyLpy1Q8RMQg1LGCmSQmfkBK61492VfsUUQdavuDbEnhkA9Vj1YFVdU",
  "key36": "5ewBTpec41duWDJ5UH4qQM4Jc7GFJ3SMoiaPHR3nfEX5B5ouV27KW3wDqWfaXeQymtykNKobriEay2hoA7ahxqwk",
  "key37": "nHuNoXNwv95HcgiyLm4ofRXiKDeTCaoUCARm8b5DK8XCVLFhsEBkTJfF89T7gbpFT5oMsg77PA3HDhcsTyeau3B",
  "key38": "65Xage1d2tFLLfixShY37fXP8RtAoipJk35bmjw387XVXtdnLL45Xe36adfa16uk5wCAJ5wX4Spngfw7yhTiEEko",
  "key39": "3j8v731nnigkgUp5V1zf3FyZ57gzmM1hDFfoKPLWNbekmjJvYaanHCvBxdgVvnd6G7HLhPS4odEMs13NaZGTQpDh",
  "key40": "52J1kFTHuJCxKJ5fSBzbMgRbqtBb3kV8Tm21AF8Ams2iohycpo2GLqWXG7FQdN1QwHPyK5CE3TWPBpdroBcxtK96",
  "key41": "SPTsxjVaNbtPZc5JsVp7QUsEZ4Ppnir24r5ibnQNQVB3usjLjazxP8m7G6GgCEgYFvy7ttgBBRhbKVAUkoBRuA5",
  "key42": "5HK92NkK4oBGMGoPtUHUJbHgPpwBG8uG9PztpaQL93v36wibQUFfCSErtQbxYduPRLPSup2PH2rSnc7WZVgkKemd",
  "key43": "5tqMxSvbmdhYy6gpfi32bnK2QA7BkPFDn5gSk2vUqw8PEKbymJnpruyzCfaS786g22yDRcW8beJewoFLyUuGDaLw",
  "key44": "45rxuc5uy4PYJZ6yBoGLiV7jZMgWuy7WuHdxKnkMHbqwZf5KGtPaqvpuccE9KgLo3adSMunefeFzaCQNWiSsDxix",
  "key45": "2GsuhtG88sWzjYk3ysSjSg5QWVeJCQSnmK1KR7WGf8mXckdpY7HqPV7YhM56C4tavUrsfq74TxxhSeVfEgwWkQE4",
  "key46": "2utit4hmx3NyGCrfmSmx1pkuL7DXxU9hdaFnyeNj9du5ox4Ai7R4EPx8dBvLnvJLJUHuqfPThKttYNopQ9vvyxpT"
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
