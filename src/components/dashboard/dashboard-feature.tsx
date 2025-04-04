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
    "5fVeGEaopSiLpmxZYqnDFhLDPu3Lef8k5tVBfAJb6pKhtaXikQ7k4LqnT63rGrAvQ3ZCkPZeFGqhGyn1BeyAuwLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzQF6vgD7HZ3KNvjYFLxxHkESqKxW996Fu84ZpLyXdaC3AS29pohvDQDAvk9mUHvBJ2zd8xn5ZGo35o9p7jtMik",
  "key1": "3N2EuN5AP62rb4z27yNcvsGAkLKj53vY1NHZUMT2KsMqDU13RXrKrR7hXNxvq4PJWMkURfuXGehhcpQ3Qa4EHQDz",
  "key2": "4guMJ6TD6hm9FUfba1ubG7ffbAX5P5rwtRnTNYrgqKNipHeJMcWV89idiQAGVwyFpAxg23FSMgxC3Ch99kPx8tUZ",
  "key3": "5HDnwihCPFbRzx8DBybuNtKzLLG7tSywmNp9dxFwqn2GaDuVUANGxbZ4W8puDPRhoTg8i3W5iR3T7FP55LUbmD6V",
  "key4": "5eP9VVKaQfnPF2CjhgkEwJsSYzWuPJjk28jHGLJcymBWtps2RzeBZaJ2otHeqL2ohAYWQEXGJirKktJCob3845Mt",
  "key5": "3U6Uet4nJYY8Hq5hC5DEQGTgHEBNMFyGWNBwJLLsxunGHn4agrjLS5TAmCD5XFax4u7BcRWwrredkWJWJXcsm5WX",
  "key6": "3xEbqfELto246B89ByoPixcCXk6rqL4D2mawDfRTyhBfkhDZgYpcx4csGnUoJyUf9etHcQQSTkCVu8aJujMbqfUx",
  "key7": "2B5kediTQcUMnBAG1WuJDp1A3yYsAfVaGsTc7ZZgGZzonERiEyqq685CWJ8rtPUwFrhj4ZwL6SaqpVbsng4kYsMF",
  "key8": "4QosKmqDgDWJsS2VvhJW1g77ZiJ5c6bhomGnkUzBynY58ZpsctSqLmp6D5tRvyfjQHtxkJVEm2Td4zXmqWN3pWaL",
  "key9": "4prpVUh2uN8FRNkUQCtc8s3MyuneugmCuDw5wjhCwrrXtbzuDrJYNHWmvEUPk5KgFvU6ft41g6ZPtwhdSmXXfayY",
  "key10": "87kptZVCa8vNQtSMMLjJmciPsM8poKkZjiyPNjjLsWszwq6Yq4jnQMeVyWE32zrKzodpb5fqi3eAtEcNswxwRgW",
  "key11": "49hCNi635b46nXDBdVXYeei5iGQJGxXPdtZ93RAxsTuUtP97S8CrfTjFQ3bqwNVC9kDXM2URdTsjgUEEP6MkT2hk",
  "key12": "iiVtAWqwSKkwm65YiJc6YSQ1HGaFBNFEHbJPYoYRMppSAjp8QPwqpHmPuXSeSBWzmr6huNznb5swcU4c4MJr53Q",
  "key13": "3ve8T2H4v647uCfQHirSHk9x8tWDg5iYSmY4NNGGdpMLCfTNeaGxRzfxyV6T2aAMm5XyDJdECNjCoY2HpcDUtCiJ",
  "key14": "4KdaWK2tiKbMs1nPfj1ZA45VvamAXrYmMthx3a32CtyVwFWVvKVTEL83EvqNkopkUJqKibGcj3vPUVyZkgunmBkK",
  "key15": "mjfsLTyMkfFzYFmPczM6hVS1qmZco8VsszfzuK7eDHCBMRBdi8WT8tRQTLGnpsky8jHNAeBNSSxBVQ3WFYzu3rU",
  "key16": "qYt4JXYy3fHggoS7CSRYG8cPUYPruiG4QU2oHeyfELyjgc1dVdC3Fptk2znrA7xFRpoPyMbf4ntoUKyD7wdYnyN",
  "key17": "3dPWyiCsZYdktCg3pTtWCQoc6bzgyy4RvggnhvxjLGLwTnkNjpfS5kvuXoSUKA8Xe2BQwi9rz3nFjqKenHwyvkeu",
  "key18": "vq7uzxPh8VeDFyDtThQptdLhtmsg5zR4HNYfshyW6n4YVcbtC1PqVPtgJ9xJJ4G9BqGpGn81fFCoRLREs2XM1VB",
  "key19": "26sCGUcjqZXHunMsdH1SAyV1zSdiuqGC49VfT5u3jZUHAyWRnjsJWXGEAzwaFBGApySXvae3UFBGNh9dcwPp1yxj",
  "key20": "5dCSa5syWWXngHFsFh6aqWH3Yx6R6RaVso1z3yYAJn5s5mE3uoLKYcMyTgjJWVHeADJskXnVeLtw55gb8qi2myXy",
  "key21": "zxSHbFM3anAMW3DtQiFZ2VE2tuqbxKS9czy7y7r1cdqwMg6u2n2JT6QJi3DCtDmgpdnEQFM4gSVMHJqUj1HHNcQ",
  "key22": "nGcat83JG23CVLx6X7eDUpPANnmbY2SCRMfRKW7YgaB671h8WFTZRAh9XbJs6UCDYSD8ZoH9Er7MLghewS2GspR",
  "key23": "4uA4Z21ZXr6W565qkQ41tqt9N1DR5M3kKuGRtwyiEKT7PPmQDevMeMDyaRQXUk1wMoqx1gRHprHrjYL4goMLxE6u",
  "key24": "61pYTWbd1poxbxmYfoXt7mVa6Uhu1ncTScVyvTbTtrEFr1Yk7srgWpfTa14ZB3CFF2KRuuESsMeFRVkyjA7XHFha",
  "key25": "Z7PVaK2zTw7FTs59ZeCWzr18GpeaDM76mLFfwdAbegeAfaFsMkUdU3rakd95YuR2NbHknUSwasCiqt3j1tsw4K1",
  "key26": "TzMcZG7HpBsz59SJq3M3nR1q6ZTLYAfpKHWnLbhhDrkrrYRZQMgpnvvppGUuqXA4Msbb3zckjeo6gfNCVSd5qn1",
  "key27": "63Pp3dTiaD2tVJeHDJXPedNmu665Mhws3BdvrCLcu5383VqSCxD2WLGhWhqkFf9rpprUqTJiRsXigjxVefNZeC3p",
  "key28": "5Z8y8XwLapfpEKppGmwUaDkX6F9b5doH9wbkB7Xc91uATL7gZgakFvBSVqFUd54zhTz2p81Daf12y6JjvqoDG8VN",
  "key29": "4N8h1bnrVn3mUzBbVsKQoXebDuWtqi4nArq4pacT8GBSyxNfArnxzhFagxzP1EWPEfi68nRxT1MEWNpbtAEvob5r",
  "key30": "24scEuazuVixDw8vC52BegjEQrffgasdLLySnA5GjwaSgH54ZuaoVRVKLVTRLaV3eNjhrnetyf6ouYqdrde79tU8",
  "key31": "5qxftWLHSoBGyro9aC1Q1KgXULsWtjmA5pcZWXkpo1YjimuVPf6iZvD423BGNpe8GgtQ63rYWUbesD2P3n9DMNM8",
  "key32": "yJcRyDc2h94X7PxaG1hxZJUWfg6XHUDTpoEDmQSiZmGns7vS2D31UkF9NwiMeL1koSjsM1zmNuP1cJAZLHPCmqb",
  "key33": "qgZ7C3hDP1v6sc8b1Ctwsq4Q6nm3CHyceG5woqsR7JboJKMXYTNZWd5tL3T9CrXFgxtAmFVtdhgXQptS1nqWHw7"
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
