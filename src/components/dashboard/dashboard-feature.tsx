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
    "5hPBKPbBgHnmeMzokLEH9bKqWjKtRNH7TpuEyfXMQohUxwqo9FYtYz1zzqNePPRs6bTBk1X4SvF4tDZF8HHRr7K3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxPtJHDxFJ6NK9WK6y1gSuETiHMs27GA3uiejGSWVaC2mLy2jg3Fd5to2JP6gWUCEY7SWTY1vH6nB4tjQ1Bh1Ea",
  "key1": "2MpXyC7C7G1cq2NFFatjFaUeov4JUm1kJKTfQBPPSoSghY4tXDUHMEtqJvcZ4Z3hbRTvCHn4sxLGqxoFzh7RoUcf",
  "key2": "5LLNKStMXHcrs1DEQ7zmbqEz7wDRJH4T8dwnFHDiT6oDsx5HVx3eVrytgf7XS1tZrPKFTmrWKothZNK3DENzC7NW",
  "key3": "3TEqbSm4qyWRzqYZczTTxPNXaAMei9nAhHFaQvzPcmgX4ha4jDVAgBdM3WV6i2LoRrCg7DuAAaqsmKnEzL9jWZS4",
  "key4": "pBJxyD6wHPe2R6JHxgHnTWMtQYHe7o2MH6ZPBsLLBNCXKy6bk1AXJaJ78W8oBUtQ6ntjiV1tu7AYktHKRhvZcYS",
  "key5": "3N2rw9csRztdcZG1r5p6feo4jjc9pcumZx6zkKzobfKEVQGowRYmrrJ6h7zcEQt291tsWPKXgKrWb2MDPwNbns8K",
  "key6": "5EUttSBiDoachmzRKPbYjr4bqXgiBZJNYAy2zPxc9TJFhXTZijaPPD248wo75zBsMF5p3qAtr6Ds2W4nBmMT3jbn",
  "key7": "5ioxz1cTx1NaTfZaAK67DGXiAXyfUkyCsAuNomMZ22VSaac9jhaaXudVK37ysXgD2GhuxEed4Fxu36j2SEJJmoMe",
  "key8": "3E8MjHq2zED1aYHy3iUnKqsPmPzhSvTkR724nApCvr2gwkaV2Nhwdnc3eY5jDu5k7nY2Vx8tm7NgZ691deTtc6h",
  "key9": "3pa97L2U7U5Y3hSoHr41nt6TH1igDaFeqn8ZiEy5wjsKEVoFVdSNPp1gSWHR8YMmUrE1o5jLbML4HRE6PnCJqUfz",
  "key10": "483T18Zru4RADFMfC6YZCxELkPo76gFEAZTm6ceDKEZUSVi8UdNcFVsAirrxHwVEG7oHjs1J3hwbr1pqJ6z6hk7K",
  "key11": "5YrRiqrH1EPkGskrSxNBU68bWN7HaVtrJ64amxc1HLQX7iXTzocXFLqMvJVtwzbdATjEXa58VPmNYC2pSd6Eb4gu",
  "key12": "5ATCHtg7XamktxXRUiVfs4TDMspb5vhCQ2meVzFPd1QPNEkhnRVjHWAMJWj7WM8wuET8debx6jSPwZyhC2SmMNuB",
  "key13": "4SDWi9Wzvrf8vWnUxBLtkbQt8KfcpmbPGPV3LfQ5VaR1oGgzkmHQMBZBYgyZaabBoK2cak3mEgevSazXp225UZ7Y",
  "key14": "4Qd41FEhdFGtLk86PJ5fa7Mn6BZe3UocnLT4pT87Tta8A4LtLyGxR4vguMicSdt1zQwTSqqyLXryYAJNxbu3EkcK",
  "key15": "5koTcP2j5JqSZKUVybc7LRk9AHbJFdC4StzaB4vujw226VSEa8N8coAk3pLVaYYcFAmJE2wZZ4J6dGy2Ebe6jahM",
  "key16": "7Kr1CkBcXsjcmUd3Lt5GMVKEKK176m5ydt6jZZqWGxx5pC8kURZUsbFE5vsMpBz1L9t3ZCdbxB2tDzEPLTW3jVL",
  "key17": "js7uF5GPvYWUZkB33qUroJCGx4QbQUYgn5MakX5owKxcV33syzQr7J3SzQGqhPyZy2Rn8eo46uqGEMNBpioeZPG",
  "key18": "4jGxuzdnSZx9sdJhPFH35apDoKyRWCH4q49BxJSWCWGvN71kCQNZA44WidbegwZKPgPKFBav3mey6e8uu6YgkP25",
  "key19": "2jz3yjiraZG1sB6QUmn7DsFJhQXarTQd3SDMYi3ktLEwvu4UQ9K5dMZ2sVibWy8E4mfSLjscetiASD2V72Hx5kxB",
  "key20": "uBBnJGTtW5CK8iNob4gbuLnmW5KRurxYE6X9gNrCt23iKj45DwVT6xX5tCY7jzsD5CDvuni36hVPNhkg3RmfBjz",
  "key21": "KPHJef1ejhvcS4kNkcgU6AGdFTc3kXSBbewRoRnVCQKSC5F3WPe4A9cPHVraFmjpMZDK6Aax1fEgmk23PJXY3jD",
  "key22": "4WmMKhqEB3HftFCsnQJHt2GVwQxMyVGLdrLG2Bj1Pyap1AumAQKek1dmL7FBhiSpwyxvA2iioCRLnqfDazJnbhLv",
  "key23": "5WBkbWfMtMNZrA4sYDd6SM9yoHayH3AqoYmUEdPjgdThjAmnAVbSFfjFx1gzTqUHXpAMVeD1UR9wf2S6niPh5Pf2",
  "key24": "gmSuTcvX2CLHcMcU7QCLmdW5c7B31WskrvPeLXLd9bjLLeMFj9f32soUbYtpn6ePP5Tp78zbPPJFvnd2ESP6ibv",
  "key25": "Xbu73JPQg5iZY4E6VPsTqUiAJgpQYfg2at4jTx7V5P5kGcoG8FTDwSeuNKDmb8x8BZE9a4H49pQj97y9zvwuT7g",
  "key26": "2oTnMWCiH2yFDVMnzGXUB3bHWCeX8tLkDVjrfZspNetTYPEXNC9uFR1wrXZiqxWoE4X3CMHjUodStenMsCZ8ZyHe",
  "key27": "5VXPi1qubJbBAxziFeSy9ShweV4y4uHMwWbqepcAYMfUSdP8i2rTkxhV1V8fAH66EKN63DnR3de34i9PkRT6gC1X",
  "key28": "3KzFR3aJRcbLQa69DBMQhGpCiyxSsJ1abVimonYaHc153L4SDdtP9QVSM63xUattyjLg3YgoXWFkbYpHFhQ3Bfvs",
  "key29": "4cLdzQ8DPFtDzwC8gZvn9fTXbxLDxUf9Rnea7ptUTszG8wSAs17rneH6pGqNBXSWvVnHXKGCRqgZsw12U8FA33W1",
  "key30": "5KhVqH4tDdsW4S8fettQEpLJoiAxb58XCpAZcwGZmwgMWKmqCiWa2qV2aGV1gyMkgkL1rRyUt1DbggEP99Pd6may",
  "key31": "2BDjXjvwsioKtX5ncRJUsAvtpP2shSYpDuT1Po7ry1kqGH9hzBJsGFpW6vKa1bh11B4c4aQdRrEhRqVcc7JVa6XB",
  "key32": "5w1dy64scKD4fxzba3qGtVGYcQooa999hBAQs8HjLVJny4kWxiVicMeRfYLM298s84erRK9ayiQauJjDzTCVMMLm",
  "key33": "2JpWYHndURxcpCYHM7tSJLaYFx4nq9DQkFNRVM1367WafW2g836inohHqxsAPBXjx8DgxkVqQdFvYQmJ3cL8C7wG",
  "key34": "5SyB7PkBcbPNCtBQiDU2uJeHuGWij6Cv2eknbCqx4fJ13AWCRQaavNnFM3D9dHjjrMaYVKdearG1iRDjAwUtvQXT",
  "key35": "3iUtFbyuaswxG78pjpHzP4S6sKB6fEdWtpVHc8jX1QtABXBB4G1fZ1nB5PdraeuvR65L98wpmJT5mtmefsjtQzKy",
  "key36": "4AKtf3wGhY6A8e5ukPitRfL1C1BwSKHWXcq1Rb5EKDwYPqq4DGPh47fLbbALXcwpwYA26z7HY7ELrpJagLd4JfVq",
  "key37": "2wEmFj7JiVx8CHn32z6TZgJGukunvma1J2WS1ikvh6ASPDfVPGyyzRpAxyTEYucEhYdoGALMbBM3TrexDaK2j9Rh"
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
