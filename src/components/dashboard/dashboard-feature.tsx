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
    "5Ujtxs3sGMJPtw9uWSkqBUewHF1r6EaLWSQPjipBW3hpaYLNHrCiVz7m1rJS4BsxZEj1zGrhz5zsLMewz3Eh8Zav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDwcybJg9QoAT7zyQ1uVWRoksvkTdz5sAUMSxQWvA2A9FN1eVQwvMMzrcPmCGKSFpNqWn6Z8ehAux3Rd5ADRkyz",
  "key1": "2omjEafUbE6dtzhFtTdhsvLHUFY99MPH6iKTNcadMHBTx1aUUF67fMU9FuE7bVY95DVMWQnJnf1jBRPFVe3cnP6r",
  "key2": "2xX8oYVqABzTRnrZEd1g9W579xA7VKwD3JiBGDnQg4WKdM7VAcoLziTh6yG7oUMYa9Bobvf9D52oL9vFqEQ5XRPi",
  "key3": "5ArQSZjWNoxdceDz9LhkQZbZo3u3Hi1SQRjNRktZKmxEB9QVRZN8iSmtH9wbLE292B4rufkvZ3EGcRsxxAzAsDbs",
  "key4": "3EaddYTvks9TNhVfqZb3JVqNsEvxWHoq4pM7NeP7VBybgCrSdY4u2XdAa6SB1vdSXUUHSrmZu3oRCxwMrQbsYK89",
  "key5": "22kVKHwG95h4eRXKknq9V465HjbWjr3a4GF1nL8nPe1ThPo1QsMFoi6YDNe2j1z7QZagH7ALkJZadGf3wzAz6mcZ",
  "key6": "51G8PjbtuKWjLEUpHNFYZa8B9B45DiKEut3fNb3Rxd92P3fQDnwp4tfDUgtsAMnh33Qr1rvnD9HFQP6DXGtoqbQJ",
  "key7": "59vNxQ2dpPhtkCksQzoZm8jqdZPMps4Lyj4ZMAMXLK2YytxWsxAZDJPW9JTXHA59yrt3osFUfLxHZ8rCfWytM693",
  "key8": "38ZdYhPJMFVzHvfqaxh893Ub7Esrpr3Xs4GMUmJUFLrSdNpR6Noz3E89T82h8YejTcSx4Q2xh6CdNmcicNaQwhR9",
  "key9": "34XkrbPfz34rJhpUTeNrLFaMXo2KX86ZHvg6sP42WKPpPZhoaqTvmtorrrPinYkDppqeQg5TmgWFVY4T33sCAtvi",
  "key10": "4Cx86ufnsBJ9cXjVezU5LmmL6kx62hJw1ywj72gD6bKYszJHKVm3uhgwNFfaXf9M8Wx1j976wW4v6DA1yX2PZsei",
  "key11": "ebRv17MLUVUSD3CnCDdfoeXEcxCCU1SWUCmFkFZPcjFXHHWzPjp1XSXKkhvedkeL6RW1CGbbqTeBbDbmQxYrnP1",
  "key12": "5EPA6YxVkLzQ9mPufvamAbdBDAmwdxERUC82K25898CtAuu19GL749UBqHb81VREU2fXZ1T6GW27s398fowecrSm",
  "key13": "E4QmdBKd5obs82zT6zX9KMJGrGovhFPC8mF51mgHAo6tB9UpPnW4ugqLfUKzkobhBQWPE9BhQRzkTu2YFBAmjrA",
  "key14": "3Bi6Gtim2NiNCjQy9KAnFqV7abVk8GDHthcbcn948nPN9cEVaL8LS5MdgR5Dyp6hZKb1rjbV7pkhq8ootGaRQCJr",
  "key15": "3TX4w6KAg4rdfYiV6WnH5UiDCNAs7tVjNpZGNy18M8vpb5TsQokwfbrY8FbHebkcTtg8n3i4jXpcyXDsC6ygbUTX",
  "key16": "ExZ2TMCPBx4MgZaDRHjqKGd9QWrQih81BwfMp1qydDL4WgvMLzdt4SEgrcGGuV4L4USrQepFJncfZf1b2v3rwSD",
  "key17": "3ZDtooFCGygL1PK7CZJAc4DSTMM9u66b7vft57Q7LJ9eV1jVFx8mAP2kiyiiYnrHg258ih7VnPhnBEAkafMAM7H6",
  "key18": "5m2dCD54TrCXeyKpDPXtpMkuGyG9KUixWJJP3q5cTdBz52ewtMhy7NDihiubrQxVQYoa1CoRXjpCxpJuTcgKc7y9",
  "key19": "jSQyTpWwd9LAHgTfboiA7oNVMZ5pbKsX1vyug4wwfoatCR8gAp2hqrAz1Pbg8TbAQdkWwzAvSQ88dise5BtmSib",
  "key20": "66Y1jF4rg8jD189YDnEuyhANHipAVxUpSeAHKYb28wDxW9Nx9Ew3WQxGVNXuigADKQhBDoemyY1Wo11kFht4WNc4",
  "key21": "zc3XULcjjZozCSvRmCb7VMDn8jEkJGYQRCNkcNJAMGFZ5VtDUyGDqsSnCzTzLKwZPucNaU7fr6qwSSLXewKVWty",
  "key22": "3hP667AtCTDhdy35rpb2stjEg81fPwbr5P3bikVrYPxYgiHFspVB84LXtJEaanGKj6tmUwvW3VxQu8WXYWjeqW3U",
  "key23": "2mxDnsLZ7cdMt7u11zvNQA14uT47sfnFsS2Jj5eQaSAJxZmDd2oax33zhYGKuB1gLu573TPf1wx8hVgfkwgHLhbf",
  "key24": "65PMU187NAWbskBgF1UKa1QntqSjEGobRZN158dvjRzRnPExnbVEFZV2uWWjTh8iki4uojBFC9ePRwauwVd1TprJ",
  "key25": "5uZrMaBgY5PUNpLZNqT4va2DCgHoAsT7Utd3YoREyRWum649d899r7asSAxzp2NibDEhiVSeqb1awGKht8mjNr1u",
  "key26": "vZca2d68t5nKLQeuCRPhWz7SCUAhCk8iPY8p5m6i3AnvTKcw9rafk4hmAtQMJtTC72QkqKTjrg49V8n7Dv4qyZP",
  "key27": "3sBSTutoXzPbTbp2hDirBefbRrzPJCixtb92FxshuQX9s3a8kCJoWAJzybNyjxCKFDxnmCydqdXwWeQspJc8U5Pz",
  "key28": "3TugGmUQVVu8wcTGM5ToePEByoQQx5tKtar2jt9WnVzErhqGHFKFPcU9EcJCoMLcBVRLDKBKiWNcc8pM2sXGcp3M",
  "key29": "5qNR9EF2eR7iicqnknKbhLS8pdw6Axf3XWQzkoDU3F8M4tLujHyu2nEyAe3wmZsLJtcXu8VG468mb6XTqjMWRvAP",
  "key30": "j57MXPZuN5mCWBCYmv7aVSpXxdjkfkdEU2Pn9p5mtq8CktGQPFmCpNt7tf5rjQLCXUoryy46v4QnN6jnkDweAuk",
  "key31": "2bqRGpHtnhqeVRFPhwQfh7MjWuzwaJPyfBM3zqXyiVBAZtLJYdhHsA8v79u4oy6z4HosWDZEgMb8RKDCZ2CCmJRz",
  "key32": "5Pxx1FJA8qgDwbtR9bd3KgEpg1vusjTZgtQJLjDFjpnaDdGUf2HXiCFH3vURXu2M7sqgaBn9xnxJtEHZPcuYzSY4",
  "key33": "4fcURGp5HiUoiKdBbjymHW6fBcZeUqAupsiXddjDo3wjskjV7onjMZVqgHRodXQCV152MarnB535zD4oBL4b5EM2",
  "key34": "3TJWsaNFpn3eZzrr9tdp3ZykEmRQZY7P2VvsKEu7pQJrK9iacj81DzuHMJmFYWB5UY1cPFiGSqwjF39K8i6amyXy",
  "key35": "2WnZWB8fpNVrv5uDJxF9TFCLwxi5jSpyAhAVJgpAfQnMY1aYMqHQ1pT1Q4MKYP5eX4dUt9rhU1qopMvqidNfdngk",
  "key36": "5sRhg1XjiAkYgH3no7g9hULyo6yD334gx1uEKgs1F5tDWTC1pHmEajRxQzzrUJCGG8iDcuemdNu2FSDjvvYmaKt",
  "key37": "5F9U5w2vwv6kUaGCQBFDwbcjHKao6qTw5hTSkLr39jBUhE8JV5oFZnr3G3kbjYDQwcyjRhBPFEdM74PewL9VPYZ9",
  "key38": "DEESXWMLwB4pH6zE4xWBNVzEAs3jxrhG3WZ4tYgZ4SyrbKBiwcgmcJk8NnSdBdvpeAkiMAWjUEzZVdp8RuNSqUN"
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
