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
    "64jpCUVpb8casYYUp2DKLYPZPDGU9LMArG6oCy9QqKqxyHD8H8x75YVsG14cpM8NKfx3zUAU24NENaKKmKgTDUCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KA6YLKjGfg4NK6CSFrVGLL2EAo8Rftd9YRuq25eEhLMNeg3tgaYv3sU8GqkyE1yeZu67y3rz7FhCkMq7N3bVBq1",
  "key1": "4uCaygzri55e9R5vaXq79NuzP8SJg4KjNArsQEWn8LkRPZmdwmocpFk4VQj8B6TdqwLDZKjHtsrfK7Nbzei3icqo",
  "key2": "5ejP1ejcsPtCNKN1SqhKHCZRGo1ePkBoRcpKFHQpuNRJAokT1TtH1nX6jSUg6eP9bkxHvzVy9rpmfARVmXezdHrR",
  "key3": "2bDtdjVcvsxtWXS2cEu8DyR6z7jS3WLk5YagmMkyjq8sK7ghBEtGhzvMiJJe8vsUjtyLH2zM2DZL7JfeY6aEx5L1",
  "key4": "4sKDQyPTndZgmPUqy53jjq2NwpqsgJ7jNGkMGVL1iUYfG4GRABvEsPG4bg4hVtKfK51yeChrF9ave6CSC1bsWavH",
  "key5": "5tmq3cx2GZV6fH5ThBCgZnW8gZeDiGeq2UVH6DYec4s8h6cRHb32fbaDEwXMarEhz6jsV2nAGYaLVx9Y1iKqqeqD",
  "key6": "2B16AKKLbAHpRcDnBNDcp7Vk7ic9rZKGRwiMDVVBjNrQi8U54JA8D8aRSzVQycuD4BmwJFFxKNHJVK3r8k9Go4DD",
  "key7": "NVbv6EALYHRskAunCLnA9hEXPvAQJnuuTctrJrTw31YRXFevBjtRBts8Vapb4xhDrG3gMURWpe2xKrPbMQv23L6",
  "key8": "2TjnJ7juVk8DjASquVbLr3HKeZc3VWLptHQRL6fmV8XwvVRZB5B5G1tR8gadQQz6DA5bQmR4Ua8dqFviQSaNP1TF",
  "key9": "gmUxrodTQ5fHjne1QhDb24zeHpmszXgTWF7SA2BR5jkLMF8nQZ2XA4U6jfAZDrbXSKKhCMUW87BohAK9HmpxrWP",
  "key10": "4PLLDCXnAnqpyfY4kiVzLp9WzdfXGbq7xekJ7hfZHtWmKCPocU1GjZWk7yDWMsPwntrpHzcrs2qkjgZyW4hoB3bR",
  "key11": "3qLobg15RHuReDhvNpUNsV2bmQe9ExeMwkz38EyQSoXc6M5aF7HANgjjP9rjpJK8PVyeQ9nrfQFbErH4gPKMYe5B",
  "key12": "4PRM6AGwR2VampyYqPFtF6E2K6eWDMmQ6G12s4wwYGy2x9GKi5uEbDSkARv2PLkmjmmjT4qRQgtBnCdB2B1nY6T4",
  "key13": "2vCFDcyU2Y7zJhQTpXswkBG3iNCGKECESv8YSmdKKxVDzTcCpt3ESR1YVGjqysnpgwk9juva2g5ZjtpZsJRTEwak",
  "key14": "2jYgikMU9tufTB2npeHHiC4f2q3yrwfusxCjyPQ3JxNrM7UpjvJHtNpiCSMaTzfy2m4a7i3u1TRjXh4StV6RuTEJ",
  "key15": "3wWq7yhGsKk3dGYfr9wE2ybd4gDwjTkaa4mrtEkV5ZyAciDj9ZUAwg4dqA4adDHxZQrtpS6dsqiJzDNiHbWweWZo",
  "key16": "Bvm34bbx9ukNywrepi9oSCWVUJDdDanJUBgjqFhiPAc81bJT4j4h7SCDt2MZCrsdiZ1t3HYLum3bz1ShW7WXG6N",
  "key17": "5wSBRf7X3j2NEANucb7PSDrdvoEcrkZa6Yp717gM6Wpdhez8j3aa4mYsQ9uz15Jm3vx2Qg5HBayzh4RKRydMiqRi",
  "key18": "3s8QqasNNTZkoazgdXEpnKJSf8SfX7GrpxRSyZkLksxKyvY8urjpzGHizkjv4MjiM5f1HPpN1C2GfGhMR7xVSXXT",
  "key19": "5yMPWNGCor4Wk1Eq1XYC37GYMNAyJ1m8ngcTWoLYGni1FUnjZtjC91JKWEfe5KYmECFEMTScq2SzFqz75njFY23h",
  "key20": "2S9bAoLM6i8jJtwJh568PtSCqZ9BxNTs6nXYS1cddJm7hq9tQLwiiS65X5xPh7xDaLbMDqFehvhtPyw56ZJcthJg",
  "key21": "21yZAcTzxTvcv126AZbSFHkQvPgGLcb2iLVhyNRqVuvEbu3eWC691cr8D6YBvrsHMcxKRe7mCybS9SvdMn7QxuWa",
  "key22": "4ET8134o7rsm7SezQ6PJ4vc6ymVrRkZRvvmhrLdKtbiJH19r4YSEPqqisGZvNYrb2HwCPjGn3LTy75i54Uros41",
  "key23": "5XthmbSL36Dou7mhf5Tmdm5BGqXNLuvBzPb8eVfq1MBh65RyZ1rcmALLcR8Ta4rcb7DSiFdd3Ssj5jsZ9zqdM6C1",
  "key24": "2bghvumRktVTA4ES7ko9yTE4NZgq3jFLN5xdtZfk253kTbsWgowuUz2Utu2zKKzxRJHzQZTxf2HgnsU4T65UZNZ",
  "key25": "tNZcpjjRfZTSr3TW2NV4PAAVjYv3L9QhrRVRa7Sbd9BbKeEjnVK3v4cDMsr5XTREbSz7a38btz7JZ7txVbLiQsj",
  "key26": "YdYHy1ggDL94C82DqK3f25BepJ6Z2kvHow57Ayp4DQUhupE7wCkKFWmCYTscQXyAZmbsaVttVLuktXmeL1Uv6qc",
  "key27": "4t8n86AJULRb63DCNC9dFQ93t7Kusc5V2nYxzUGZYmLPEEDHUikmqjS7jfLyekYjPpg25aqWyBh9VZcXaj48eum2",
  "key28": "59iM4R6C3NUEGW988suSFTrBQMgz49b6eZR7mDCkUWt5i5ymU7bgxT9gf3F35Hr7gKw5FYafuqc3JM1HCQawY9sg",
  "key29": "3z3uQZrefHyBWACtRSqqJHaPUZG3cTHmto4GTS3pXpAoME6aLhrwtZw7fLzBp4ExWJaH9CEtZEP8k2U2zoV2bc9W",
  "key30": "5FFchn6zfQrwDAyyABV5R5Mjd1fbf5A2ikE4wBcwa2DXcxr7TrUHeKcsTtVBgsJb1ynD9oq69Z8J3kiCiWPHFVs1",
  "key31": "3RTA2VoKMBPhYCTC5M2KG22BVEknT9gMtuCBpqXU73tnjGqdTzTvQwo2pgqCNwvxCFA78N6B8KDaVs1pdUmyGEkP",
  "key32": "51RW74FoLfDZbaba6x3KU9YpEuVsM4KDFZkS5iUdQTWDnzbTngoLj4cWkAETHFPPZJEPcfNtxAbR3stxLkubMiFW",
  "key33": "5NQebtTGUytAzJwPvtZumLTfYRfPBSSFKUb5EaVc5bLNAkAENNTvJRNw6U7gzmnAZZFNa3w5Q2fnWnDkNCPpQbhJ",
  "key34": "463rLtkxSfaBwJv6TAHkB89fG735fA1eZF9Acn7fjc9sH6uq4GrTLEL3MxsQLG7pCZXvvSz68s48UfZsbkK6QKV1",
  "key35": "3rXiK4erN1ghFiJiegxkZs544wVTH9cwXCx1vWXuMPXPbMEfdkEw29auzPUqRz3pJW9vEBzHzTwJEC9YWtUCL317",
  "key36": "k4CSQrxN4ZYA5SFr2RZTnnt21yNXVnUPzteNN5g6GHUjT4JPghF1eQ2e9TzUSSJmueQiotwNNUn4u4hpP9BxB4R",
  "key37": "4NRrCB2h3jgpgsF9qgjD6qDw9Gdmx1x8LP22HkJgAzi1asCMBbErHcyjwe6Xp1wGrvr1CQPDkCY6jRAzmGXo4YF1",
  "key38": "p1qA49uz5vjoyfc99UtFKSVveFbfbMVFutDcU59dHKiiQZJrxi1x5ann6ak3vxKcQtj6CKeqXEywLWJCZGs5Hw9",
  "key39": "3zY9ZNWwd4Jo587HSMim368XQxJ8kMTRoU98x7FqEGkjrguUUxukv4XeGSP9VAgshDS4CiKbcdRJjY88YdrULip1",
  "key40": "3fjM5QJhbVnyV4GvZcwbscXAGM1YMEFeYgY1JHWfWY3Y3fEx22JsjFonzwih4hqPi7MLVoXFwhdvS7TUvSx3jiVm",
  "key41": "2CZ8gQd8T2nYrfhTdq1HagE16W3i9RFhVZ98WCNMU85MfhVnpGF92BnFrfDZU3tyBGrfZbDNuT5LgN71rzVX2vUj",
  "key42": "5VaGJvJRmmkjvizzsoPrYQjHW3frBusiPCPx4UM4XneJjZ7WLMiLSQdVAHGVCbHXGomj2FeYHi8rqtR5GYPhxSvk",
  "key43": "5bKxQUhTUymuRe1VnE7S4DYW7mvNMDw3X4hvDsqRVEGAeRj3LQMuUM2T9qnnTQCVNiyRk51x6VSrpAQLXjY7DXcg",
  "key44": "558N1q7arDP9RZQTGicdTEYsQEfXLYjRE1vcKAdDEkZBoNiBusPW8jyU9XvAGaHs56rfjE7Nc3wvimoaePmfQMre",
  "key45": "5gawhHVsvCpoX1m8B9A5piK9uHRhbhS8Kc1ooKCJfZehXUVpoaU28eudzctmqTAeyCuw6uMZE42o13xQpu6GmdsM"
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
